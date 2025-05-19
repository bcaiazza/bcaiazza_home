
let words = [
  { text: "CREATIVE DIRECTOR", x: -200, y: 100, size: 32 },
  { text: "FINE ARTIST", x: 150, y: 150, size: 28 },
  { text: "PRODUCT DESIGNER", x: -180, y: -50, size: 24 },
  { text: "BRAND ARCHITECT", x: 200, y: -100, size: 20 },
  { text: "SOUND DESIGNER", x: -100, y: 0, size: 22 },
  { text: "MOTION DESIGNER", x: 80, y: 60, size: 18 },
  { text: "TECHNOLOGIST", x: 60, y: -150, size: 18 },
  { text: "CULTURE CURATOR", x: -160, y: 160, size: 20 },
  { text: "DIRECTOR", x: 140, y: 20, size: 20 },
  { text: "EDITOR", x: 40, y: -60, size: 20 },
  { text: "PHOTOGRAPHER", x: -60, y: 90, size: 22 },
  { text: "ANIMATOR", x: 110, y: -180, size: 18 },
  { text: "WRITER", x: -100, y: -120, size: 18 }
];

let rotationX = 0;
let rotationY = 0;
let lastMouseX, lastMouseY;
let dragging = false;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont("Helvetica");
  textAlign(CENTER, CENTER);
  noStroke();
}

function draw() {
  background(0);
  rotateX(rotationX);
  rotateY(rotationY);

  for (let w of words) {
    push();
    translate(w.x, w.y, 0);

    let screenPos = screenPosition(0, 0, 0);
    let d = dist(mouseX - width / 2, mouseY - height / 2, screenPos.x, screenPos.y);
    let isHover = d < 80;

    let alpha = isHover ? 255 : 150;
    fill(255, alpha);
    textSize(w.size);
    text(w.text, 0, 0);
    pop();
  }
}

function mousePressed() {
  dragging = true;
  lastMouseX = mouseX;
  lastMouseY = mouseY;
}

function mouseDragged() {
  if (dragging) {
    let dx = mouseX - lastMouseX;
    let dy = mouseY - lastMouseY;
    rotationY += dx * 0.005;
    rotationX += dy * 0.005;
    lastMouseX = mouseX;
    lastMouseY = mouseY;
  }
}

function mouseReleased() {
  dragging = false;
}
