
let words = [
  { text: "BRIAN CAIAZZA IS A:", size: 24, x: 50, y: 60 },
  { text: "CREATIVE DIRECTOR", size: 40, x: 100, y: 150 },
  { text: "FINE ARTIST", size: 30, x: 420, y: 200 },
  { text: "PRODUCT DESIGNER", size: 24, x: 80, y: 250 },
  { text: "BRAND ARCHITECT", size: 20, x: 500, y: 260 },
  { text: "SOUND DESIGNER", size: 16, x: 250, y: 230 },
  { text: "MOTION DESIGNER", size: 16, x: 180, y: 300 },
  { text: "TECHNOLOGIST", size: 18, x: 360, y: 150 },
  { text: "CULTURE CURATOR", size: 20, x: 100, y: 120 },
  { text: "DIRECTOR", size: 18, x: 420, y: 120 },
  { text: "EDITOR", size: 20, x: 520, y: 180 },
  { text: "PHOTOGRAPHER", size: 22, x: 200, y: 200 },
  { text: "ANIMATOR", size: 18, x: 500, y: 220 },
  { text: "WRITER", size: 18, x: 300, y: 330 }
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textFont("Helvetica");
  noLoop();
}

function draw() {
  background(0);
  for (let w of words) {
    fill(255);
    textSize(w.size);
    text(w.text, w.x, w.y);
  }
}
