// MediaPipe wrapper. Outputs landmarks only (33-point pose, normalized image coords).
import { FilesetResolver, PoseLandmarker } from 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/vision_bundle.mjs';

const WASM = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm';
const MODEL = 'https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task';

export class FootTracker {
  async init() {
    const fileset = await FilesetResolver.forVisionTasks(WASM);
    const make = delegate => PoseLandmarker.createFromOptions(fileset, {
      baseOptions: { modelAssetPath: MODEL, delegate },
      runningMode: 'VIDEO', numPoses: 1,
      minPoseDetectionConfidence: 0.4, minPosePresenceConfidence: 0.4, minTrackingConfidence: 0.4
    });
    try { this.lm = await make('GPU'); } catch { this.lm = await make('CPU'); }
    this.lastTime = -1;
  }
  // undefined = no new video frame, null = no person, array = landmarks
  detect(video, nowMs) {
    if (video.readyState < 2 || video.currentTime === this.lastTime) return undefined;
    this.lastTime = video.currentTime;
    return this.lm.detectForVideo(video, nowMs).landmarks[0] ?? null;
  }
}
