// Scene, lights, occluder, contact shadow, per-foot rigs. No tracking logic here.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const SIDES = ['left', 'right'];

function cloneModel(o) {
  const c = o.clone(true);
  c.traverse(n => { if (n.material) n.material = Array.isArray(n.material) ? n.material.map(m => m.clone()) : n.material.clone(); });
  return c;
}
function shadowTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const x = c.getContext('2d'), g = x.createRadialGradient(64, 64, 4, 64, 64, 64);
  g.addColorStop(0, 'rgba(0,0,0,.6)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

export class ShoeRenderer {
  constructor(canvas) {
    this.r = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, preserveDrawingBuffer: true });
    this.r.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.r.toneMapping = THREE.ACESFilmicToneMapping;
    this.scene = new THREE.Scene();
    this.scene.environment = new THREE.PMREMGenerator(this.r).fromScene(new RoomEnvironment(), 0.04).texture;
    const sun = new THREE.DirectionalLight(0xffffff, 1.2); sun.position.set(-1, 2, 1.5); this.scene.add(sun);
    this.cam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 6000); this.cam.position.z = 3000;
    this.shadowTex = shadowTexture();
    this.rigs = Object.fromEntries(SIDES.map(s => [s, this.makeRig()]));
  }
  makeRig() {
    const pose = new THREE.Group(), inner = new THREE.Group();
    const shadow = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.16),
      new THREE.MeshBasicMaterial({ map: this.shadowTex, transparent: true, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2; shadow.position.set(0, 0.002, 0.14);
    const occluder = new THREE.Mesh(new THREE.BufferGeometry(), new THREE.MeshBasicMaterial({ colorWrite: false }));
    occluder.renderOrder = -1;
    pose.add(shadow, occluder, inner); pose.visible = false; this.scene.add(pose);
    return { pose, inner, shadow, occluder, cur: 0, target: 0 };
  }
  setSize(w, h) {
    this.r.setSize(w, h, false);
    Object.assign(this.cam, { left: -w / 2, right: w / 2, top: h / 2, bottom: -h / 2 }); this.cam.updateProjectionMatrix();
  }
  setModel(item, object) {
    const o = item.occluder || { radius: 0.045, offset: [0, 0.07, 0.05], length: 0.35 };
    const rot = (item.rotationOffsetDeg || [0, 0, 0]).map(THREE.MathUtils.degToRad);
    for (const side of SIDES) {
      const rig = this.rigs[side], flip = side === 'left' && item.mirrorLeft !== false ? -1 : 1;
      rig.inner.clear(); rig.inner.add(cloneModel(object));
      const off = item.anchorOffset || [0, 0, 0];
      rig.inner.position.set(off[0] * flip, off[1], off[2]);
      rig.inner.rotation.set(...rot);
      rig.inner.scale.set(flip, 1, 1).multiplyScalar(item.scaleMultiplier ?? 1).x *= 1;
      rig.inner.scale.x = flip * (item.scaleMultiplier ?? 1);
      rig.occluder.geometry.dispose();
      rig.occluder.geometry = new THREE.CapsuleGeometry(o.radius, o.length, 4, 12);
      rig.occluder.position.set(o.offset[0], o.offset[1] + o.length / 2, o.offset[2]);
    }
  }
  setPose(side, pose, target) {
    const rig = this.rigs[side]; rig.target = target;
    if (!pose) return;
    rig.pose.position.fromArray(pose.position);
    rig.pose.quaternion.fromArray(pose.quaternion);
    rig.pose.scale.setScalar(pose.scale);
  }
  render(dt) {
    for (const rig of Object.values(this.rigs)) {
      rig.cur += (rig.target - rig.cur) * Math.min(1, dt * 10);
      rig.pose.visible = rig.cur > 0.01;
      rig.shadow.material.opacity = rig.cur;
      rig.inner.traverse(n => { if (n.material) [].concat(n.material).forEach(m => { m.transparent = rig.cur < 0.99; m.opacity = rig.cur; }); });
    }
    this.r.render(this.scene, this.cam);
  }
}
