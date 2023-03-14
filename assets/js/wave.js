let xspacing = 8;
// How far apart should each horizontal location be spaced
let w;
// Width of entire wave
let maxwaves = 3;
// total # of waves to add together
let theta = 0;
let amplitude = new Array(maxwaves);
// Height of wave
let dx = new Array(maxwaves);
// Value for incrementing X, to be calculated as a function of period and xspacing
let yvalues;
let yvalues1;
// Using an array to store height values for the wave (not entirely necessary)
function setup() {
	var c = createCanvas(windowWidth-20, windowHeight);
	c.parent("header");
	frameRate(30);
	colorMode(RGB, 255, 255, 255, 100);
	w = width + 16;
	for (let i = 0; i < maxwaves; i++) {
		amplitude[i] = random(10, 150);
		let period = random(500, 150);
		// How many pixels before the wave repeats
		dx[i] = TWO_PI / period * 8;
	}
	yvalues = new Array(Math.floor(w / 8));
}
function draw() {
	background(0);
	calcWave();
	renderWave();
}
function calcWave() {
	// Increment theta (try different values for 'angular velocity' here)
	theta += 0.05;
	// Set all height values to zero
	for (let i = 0; i < yvalues.length; i++) {
		yvalues[i] = 0;
	}
	// Accumulate wave height values
	for (let j = 0; j < maxwaves; j++) {
		let x = theta;
		for (let i = 0; i < yvalues.length; i++) {
			// Every other wave is cosine instead of sine
			if (j % 2 == 0){
				yvalues[i] += Math.cos(x) * amplitude[j];
			} else {
				yvalues[i] -= Math.sin(x) * amplitude[j];
			}
			x += dx[j];
		}
	}
}
function renderWave() {
	// A simple way to draw the wave with an ellipse at each location
	noStroke();
	ellipseMode(CENTER);
	for (let x = 0; x < yvalues.length; x++) {
		let hue = map(x, 0, yvalues.length, 100, 232);	// Calculate the hue value based on the cell's position
		let c = color(58, 181, hue);
		fill(c);
		ellipse(x * 8, height / 2 + yvalues[x], 16, 16);
	}
}
//CSUSM{hidden_in_plain_javascript_2023spring}