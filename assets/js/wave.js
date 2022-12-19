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
	yvalues1 = new Array(Math.floor(w / 8));
}
function draw() {
	background(0);
	calcWave();
	renderWave();

}
function calcWave() {
	// Increment theta (try different values for 'angular velocity' here
	theta += 0.05;
	// Set all height values to zero
	for (let i = 0; i < yvalues.length; i++) {
		yvalues[i] = 0;
		yvalues1[i] = 0;
	}
	// Accumulate wave height values
	for (let j = 0; j < maxwaves; j++) {
		let x = theta;
		for (let i = 0; i < yvalues.length; i++) {
			// Every other wave is cosine instead of sine
			if (j % 2 == 0){
				yvalues[i] += Math.cos(x) * amplitude[j];
				yvalues1[i] += Math.sin(x) * amplitude[j];
			} else {
				yvalues[i] += Math.sin(x) * amplitude[j];
				yvalues1[i] += Math.cos(x) * amplitude[j];
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
		// Calculate the hue value based on the cell's position
		let hue = map(x, 0, yvalues.length, 0, 255);
		// Set the fill color using the hue value
		let c = color(0, 65, hue);
		fill(c);
		ellipse(x * 8, height / 2 + yvalues[x], 16, 16);
	}

	for (let x = 0; x < yvalues1.length; x++) {
    	let hue = map(x, 0, yvalues1.length, 0, 255);
    	let c = color(200, 165, hue);
    	fill(c);
    	ellipse(x * 8, height / 2 + yvalues1[x], 16, 16);
    }
}