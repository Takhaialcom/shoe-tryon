# Shoe Try-On (three.js + MediaPipe)

## Run
Camera access needs HTTPS or localhost:

    npx serve .        # or: python3 -m http.server 8000

Open on a phone via an HTTPS tunnel (e.g. `npx localtunnel --port 3000`) or deploy the folder to any static host.
Stand 1-2 m back with feet flat and fully in frame (rear camera).

## Add / replace a shoe (no code changes)
1. Drop `my-shoe.glb` into `models/`.
2. Add an entry to `models/catalog.json` (copy an existing one).
Missing GLBs fall back to a colored placeholder so the app always runs.

## Model authoring convention
- Author the RIGHT shoe (left is mirrored automatically; `mirrorLeft:false` to disable)
- Units: meters. Pivot: heel-center on the ground. Toe points +Z. Up is +Y.
- Draco/Meshopt compression and KTX2 textures supported. Target < 2 MB, < 30k tris.

## Manifest fields
referenceLengthCm (real shoe length; drives scale), anchorOffset [x,y,z] m, rotationOffsetDeg,
scaleMultiplier, mirrorLeft, occluder {radius, offset, length} (invisible leg capsule), thumbnail, color (placeholder only).

## Tuning (src/main.js CFG, src/Smoother.js)
zWeight (depth trust), minConfidence, lostFrames (fade-out delay), smoother minCutoff (lower = smoother) / beta (higher = less lag).

## Modules
CameraSource -> FootTracker -> PoseSolver -> PoseSmoother -> ShoeRenderer; ModelCatalog and UI are independent. main.js only wires them.
