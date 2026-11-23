// Wiring only. Modules talk through plain data.
import { CameraSource } from './CameraSource.js';
import { FootTracker } from './FootTracker.js';
import { solveFoot } from './PoseSolver.js';
import { PoseSmoother } from './Smoother.js';
import { ShoeRenderer } from './ShoeRenderer.js';
import { ModelCatalog } from './ModelCatalog.js';
import { UI } from './UI.js';

const CFG = { zWeight: 0.5, minConfidence: 0.25, lostFrames: 8, facing: 'environment' };

const video = document.getElementById('video'), stage = document.getElementById('stage');
const cam = new CameraSource(video), tracker = new FootTracker(), renderer = new ShoeRenderer(document.getElementById('gl'));
const catalog = new ModelCatalog(renderer.r);
const smoothers = { left: new PoseSmoother(), right: new PoseSmoother() }, lost = { left: 0, right: 0 };
let item = null, size = { w: 640, h: 480 }, facing = CFG.facing;

const ui = new UI({
  onSelect: select,
  onFlip: async () => { facing = facing === 'environment' ? 'user' : 'environment'; await startCamera(); },
  onSnap: snapshot
});

function fit() {
  const s = Math.min(innerWidth / size.w, innerHeight / size.h);
  stage.style.width = size.w * s + 'px'; stage.style.height = size.h * s + 'px';
  stage.classList.toggle('mirror', facing === 'user');
}
async function startCamera() { size = await cam.start(facing); renderer.setSize(size.w, size.h); fit(); }
async function select(i) {
  item = catalog.items[i]; ui.setActive(i); ui.status(`Loading ${item.name}…`);
  renderer.setModel(item, await catalog.load(item)); ui.status('Point the camera at your feet');
}
function snapshot() {
  const c = document.createElement('canvas'); c.width = size.w; c.height = size.h;
  const x = c.getContext('2d');
  if (facing === 'user') { x.translate(size.w, 0); x.scale(-1, 1); }
  x.drawImage(video, 0, 0, size.w, size.h); x.drawImage(renderer.r.domElement, 0, 0, size.w, size.h);
  const a = document.createElement('a'); a.download = `tryon-${Date.now()}.png`; a.href = c.toDataURL('image/png'); a.click();
}

let last = performance.now();

const DEBUG = new URLSearchParams(location.search).has('debug');
let dbg;
if (DEBUG) { dbg = document.createElement('canvas'); dbg.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;pointer-events:none'; stage.appendChild(dbg); }
function drawDebug(lms) {
  dbg.width = size.w; dbg.height = size.h;
  if (!lms) { ui.status('No person detected: show hips to feet'); return; }
  const x = dbg.getContext('2d'), v = i => (lms[i].visibility ?? 1).toFixed(2);
  for (const i of [25, 26, 27, 28, 29, 30, 31, 32]) {
    x.fillStyle = (lms[i].visibility ?? 1) > 0.5 ? '#0f0' : '#f80';
    x.beginPath(); x.arc(lms[i].x * size.w, lms[i].y * size.h, 6, 0, 7); x.fill();
  }
  ui.status(`L ${v(27)}/${v(29)}/${v(31)}  R ${v(28)}/${v(30)}/${v(32)}`);
}
function loop(now) {
  requestAnimationFrame(loop);
  const dt = (now - last) / 1000; last = now;
  const lms = item ? tracker.detect(video, now) : undefined;
  if (lms !== undefined) {
    if (DEBUG) drawDebug(lms);    
    for (const side of ['left', 'right']) {
      const pose = lms && solveFoot(lms, side, size.w, size.h, { refLengthM: item.referenceLengthCm / 100, zWeight: CFG.zWeight });
      if (pose && pose.confidence > CFG.minConfidence) {
        lost[side] = 0; renderer.setPose(side, smoothers[side].apply(pose, now / 1000), 1);
      } else if (++lost[side] > CFG.lostFrames) {
        renderer.setPose(side, null, 0); smoothers[side].reset();
      }
    }
  }
  renderer.render(dt);
}

(async () => {
  try {
    ui.status('Loading tracker…');
    await Promise.all([tracker.init(), catalog.init()]);
    ui.populate(catalog.items);
    await startCamera();
    await select(0);
    addEventListener('resize', fit);
    requestAnimationFrame(loop);
  } catch (e) { console.error(e); ui.status('Error: ' + e.message); }
})();
