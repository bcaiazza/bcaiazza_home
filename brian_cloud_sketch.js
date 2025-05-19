
let words = [
  { text: "CREATIVE DIRECTOR", x: 100, y: 150, size: 40 },
  { text: "FINE ARTIST", x: 420, y: 200, size: 30 },
  { text: "PRODUCT DESIGNER", x: 80, y: 250, size: 24 },
  { text: "BRAND ARCHITECT", x: 500, y: 260, size: 20 },
  { text: "SOUND DESIGNER", x: 250, y: 230, size: 16 },
  { text: "MOTION DESIGNER", x: 180, y: 300, size: 16 },
  { text: "TECHNOLOGIST", x: 360, y: 150, size: 18 },
  { text: "CULTURE CURATOR", x: 100, y: 120, size: 20 },
  { text: "DIRECTOR", x: 420, y: 120, size: 18 },
  { text: "EDITOR", x: 520, y: 180, size: 20 },
  { text: "PHOTOGRAPHER", x: 200, y: 200, size: 22 },
  { text: "ANIMATOR", x: 500, y: 220, size: 18 },
  { text: "WRITER", x: 300, y: 330, size: 18 }
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Helvetica");
  textAlign(LEFT, TOP);
  noStroke();
}

function draw() {
  background(0);
  for (let w of words) {
    let d = dist(mouseX, mouseY, w.x, w.y);
    let hover = d < 100;
    let size = hover ? w.size * 1.2 : w.size;
    let alpha = hover ? 255 : 200;
    fill(255, alpha);
    textSize(size);
    text(w.text, w.x + sin(frameCount * 0.01 + w.y) * 2, w.y + cos(frameCount * 0.01 + w.x) * 2);
  }
}
