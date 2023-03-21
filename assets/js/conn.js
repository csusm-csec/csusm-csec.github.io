class Particle {
// setting the co-ordinates, radius and the
// speed of a particle in both the co-ordinates axes.
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,8);
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);
  }

// creation of a particle.
  createParticle() {
    noStroke();
    fill('rgba(200,169,169,0.5)');
    circle(this.x,this.y,this.r);
  }

// setting the particle in motion.
  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

// this function creates the connections(lines)
// between particles which are less than a certain distance apart
  joinParticles(particles) {
    particles.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<100) {
        stroke('rgba(255,255,255,0.25)');
        line(this.x,this.y,element.x,element.y);
      }
    });
  }
}

// an array to add multiple particles
let particles = [];

function setup() {
  var c = createCanvas(windowWidth-20, windowHeight/3);
  c.parent("header");
  for(let i = 0;i<width/10;i++){
    particles.push(new Particle());
  }
}

function draw() {
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }
}

function get_flag(){
  var a = -~-~-~-~[];
  var i = -~[];
  var crib = "CSUSM{j";
  var e = 14 ^ 25;
  var t = String.fromCharCode(348 / 3);
  var s = String.fromCharCode(5 * 23);
  console.log(crib + a + "v" + a + s + 'cR' + i + 'p' + t + '_' + 'm' + a + t + 'H' + '_' + t + 'H' + 0 + '_' + 'l0l}');
}