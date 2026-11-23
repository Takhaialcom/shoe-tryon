// Loads manifest + GLBs. Falls back to a placeholder shoe if a GLB is missing,
// so the project runs before you add real models.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

export class ModelCatalog {
  constructor(renderer, manifestUrl = 'models/catalog.json') {
    this.manifestUrl = manifestUrl; this.items = []; this.cache = new Map();
    const draco = new DRACOLoader().setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    const ktx2 = new KTX2Loader().setTranscoderPath('https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/libs/basis/').detectSupport(renderer);
    this.loader = new GLTFLoader().setDRACOLoader(draco).setKTX2Loader(ktx2).setMeshoptDecoder(MeshoptDecoder);
  }
  async init() {
    this.items = (await (await fetch(this.manifestUrl)).json()).shoes;
    return this.items;
  }
  async load(item) {
    if (!this.cache.has(item.id)) {
      let obj;
      try { obj = (await this.loader.loadAsync(item.model)).scene; }
      catch { console.warn(`[catalog] ${item.model} not found, using placeholder`); obj = placeholder(item); }
      this.cache.set(item.id, obj);
    }
    return this.cache.get(item.id);
  }
}

// Convention: meters, pivot at heel-center on the ground, toe toward +Z.
function placeholder(item) {
  const len = item.referenceLengthCm / 100;
  const mat = new THREE.MeshStandardMaterial({ color: item.color || '#cccccc', roughness: 0.6 });
  const g = new THREE.Group();
  const sole = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.025, len), mat); sole.position.set(0, 0.0125, len / 2);
  const upper = new THREE.Mesh(new THREE.BoxGeometry(0.085, 0.07, len * 0.55), mat); upper.position.set(0, 0.06, len * 0.3);
  g.add(sole, upper);
  return g;
}
