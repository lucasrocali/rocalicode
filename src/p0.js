//Nov 27, 2021, 8:52:14 PM

const ns = 24;
const n = 600;
const d = 50;
const d2 = 4;
const d2p = n / d2
let i = 0, j = 0, k=0;
function setup() {
  console.log('setup')
  // frameRate(300);
  createCanvas(n, n);
  background('white');
  stroke(51);
  noiseSeed(ns);
}

function draw() {
  // console.log('draw',i)
 
  
  i = (i + 1)
  for (k=0; k < d2; k++) {
  for (j = 0; j < d; j++){
    point(i+j,(k*d2p+noise(i*0.01)*n)%n)
  }
  }
 
  
  if( i == n) {
    noLoop();
  }
}