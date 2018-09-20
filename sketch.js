var vred = 255;
var vgreen = 128;
var vblue = 255;
var strokeColor;

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(255);
	strokeColor = color(100, 50, 150);
}

function changeColor() {
	for (;vred < 256; vred++) {
		for (;vgreen < 256; vgreen++) {
			for (;vblue < 256; vblue++) {
				if (vred > 255) {
					vred = 0;
				}
				if (vgreen > 255) {
					vgreen = 0;
				}
				if (vblue > 255) {
					vblue = 0;
				}
				console.log(vred, vgreen, vblue);
			}
		}
	}
}

function keyPressed() {
	if (key === 'q') {
		fullscreen(true);
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight, false);
	background(255);
}

function draw() {
	strokeWeight(10);
	strokeColor.setRed(128 + 128 * sin(millis() / 1000));
	stroke(strokeColor);
	keyPressed();
	if (mouseIsPressed === false) {
		line(mouseX, mouseY, pmouseX, pmouseY);
	}
}

