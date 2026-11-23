// Video stream + permissions only.
export class CameraSource {
  constructor(video) { this.video = video; this.stream = null; }
  async start(facing = 'environment') {
    this.stop();
    this.stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { facingMode: { ideal: facing }, width: { ideal: 1280 }, height: { ideal: 720 } }
    });
    this.video.srcObject = this.stream;
    await this.video.play();
    return { w: this.video.videoWidth, h: this.video.videoHeight };
  }
  stop() { this.stream?.getTracks().forEach(t => t.stop()); this.stream = null; }
}
