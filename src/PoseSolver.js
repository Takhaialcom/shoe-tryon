// Landmarks in -> shoe transform out (plain data). Scene units = video pixels, +Y up.
import * as THREE from 'three';

const IDX = {
  left:  { knee: 25, ankle: 27, heel: 29, toe: 31 },
  right: { knee: 26, ankle: 28, heel: 30, toe: 32 }
};
const X = new THREE.Vector3(), Y = new THREE.Vector3(), Z = new THREE.Vector3(), M = new THREE.Matrix4();

export function solveFoot(lms, side, w, h, { refLengthM, zWeight = 0.5 }) {
  const i = IDX[side];
  const pt = k => { const l = lms[i[k]]; return new THREE.Vector3((l.x - 0.5) * w, -(l.y - 0.5) * h, -l.z * w * zWeight); };
  const confidence = Math.min(...['heel', 'toe', 'ankle'].map(k => lms[i[k]].visibility ?? 1));
  const heel = pt('heel'), toe = pt('toe'), ankle = pt('ankle'), knee = pt('knee');

  Z.subVectors(toe, heel);
  const length = Z.length();
  if (length < 1) return null;
  Z.normalize();                              // model +Z = heel -> toe
  Y.subVectors(knee, ankle).normalize();      // up hint = shin axis
  X.crossVectors(Y, Z);
  if (X.lengthSq() < 1e-6) return null;
  X.normalize();
  Y.crossVectors(Z, X);
  const q = new THREE.Quaternion().setFromRotationMatrix(M.makeBasis(X, Y, Z));

  return { confidence, position: heel.toArray(), quaternion: q.toArray(), scale: length / refLengthM };
}
