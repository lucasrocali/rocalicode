//Nov 27, 2021, 8:53:41 PM	

const ns = 24;
const n = 600;
const d = 100;
const p = 30;
const cx = 0.01;
const ca = 0.001
const cb = 0.001
let i =0;
let j = 0;
function setup() {
  console.log('setup')
  console.log('p1'
              +'-d'+d
              +'-ns'+ns
              +'-cx'+cx
              +'-ca'+ca
              +'-cb'+cb
              
             )
  // frameRate(30);
  createCanvas(n, n);
  background('white');
  stroke(51);
  ns && noiseSeed(ns);
}

function draw() {
  

  
  for (j = 0; j < d; j++){
    const nvx = noise((i+j)*cx)
    const nva = noise((i+j)*ca)
    const nvb = noise((i+j)*cb)
  
    const x = i;
    const y = j*p;
    const n1y = y*nva;
    const n2y = y*nvb;
    point(x,n1y)
    point(n2y,x)
  }
  
  if( i == n) {
    noLoop();
  }
  i += 1;
}