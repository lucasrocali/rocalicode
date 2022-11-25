//p5.1
//Feb 8, 2022, 12:19:44 AM	
const sv = 0
const fname = `p5.11.png`
const an = 1
const pt = 1

const ns = 1;
const vr = 0.4 //radius var
//-
const PI = 3.14159265359;
const s = 600;
const c = s/2;
const dr = 40;
const n = 800;
///-
let i =0;
const di = 1
let dlfrom = 120
let dl = 820
let lxs = new Array(dl).fill(c), lys = new Array(dl).fill(c);
let nsi = 1;

const dai = 0.00003
let ais = new Array(dl).fill(0);


function drawi(i,ai,aii) {
  
  const nse = noise(i*0.008)*100
  
  // point(i, 200 + nse)
  
  const ndri = i*0.85 + nse

  let x = ndri * Math.cos(ai) + c;
  let y = ndri * Math.sin(ai) + c;
  if (lxs[aii] && lys[aii] && lxs[aii] != c && lys[aii] != c) {
      pt ? point(x, y) : line(lxs[aii],lys[aii], x, y);
  }
  lxs[aii] = x;
  lys[aii] = y;
}

function runi (i) {

  for (aii=dlfrom; aii < ais.length; aii++){
    aii % 12 == 0 && drawi(i,ais[aii],aii);

    const an = (0.0044*aii)*(n/2-i)*53*dai
    ais[aii] += radians(an);
  }
}

function setup() {
  // frameRate(30);
  pixelDensity(6.0);
  createCanvas(s, s);
  background('white');
  stroke(0, 0, 0);
  
  nsi && noiseSeed(nsi);
  if (!an) {
    for (i=0; i < n; i+=di) {
      runi(i)
    }
    sv && save(fname)
  }
}

function draw() {
  
  
  if (an) {
    runi(i)
    i += di;
  }

     
  
  if (i===n) {
    noLoop();
    sv && save(fname)
  }
}