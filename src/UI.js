// DOM only: picker, camera flip, capture, status line.
export class UI {
  constructor({ onSelect, onFlip, onSnap }) {
    this.list = document.getElementById('shoes'); this.statusEl = document.getElementById('status');
    this.onSelect = onSelect;
    document.getElementById('flip').onclick = onFlip;
    document.getElementById('snap').onclick = onSnap;
  }
  populate(items) {
    this.list.innerHTML = '';
    items.forEach((it, i) => {
      const b = document.createElement('button');
      if (it.thumbnail) b.style.backgroundImage = `url(${it.thumbnail})`; else b.textContent = it.name;
      b.onclick = () => this.onSelect(i);
      this.list.appendChild(b);
    });
  }
  setActive(i) { [...this.list.children].forEach((b, j) => b.classList.toggle('active', i === j)); }
  status(msg) { this.statusEl.textContent = msg; }
}
