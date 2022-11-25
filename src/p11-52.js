//Feb 9, 2022, 11:37:09 AM	
const sv = 0
const fname = `p5.12.png`
const an = 1
const pt = 0
const byline= 1

const ns = 1;
const vr = 0.4 //radius var
//-
const PI = 3.14159265359;
const s = 600;
const c = 0;
const dr = 40;
const n = 300; // => 300
const nl = 300;
///-
let dlfrom = 700
let i = 0;
let aii = dlfrom;
const di = 1

let dl = 13700
let lxs = new Array(dl).fill(c), lys = new Array(dl).fill(c);
let nsi = 24;

const dai = 0.00009
let ais = new Array(dl).fill(0);


function drawi(i,ai,aii) {
  
  const nse = noise(i*Math.cos(ai)*0.03)*100
  
  // point(i, 200 + nse)
  
  const ndri = i*0.3 + nse

  let x =  i*1.8 - 300;
  let y = ndri * Math.cos(ai);
  if (lxs[aii] && lys[aii] && lxs[aii] != c && lys[aii] != c) {
      pt ? point(x, y) : line(lxs[aii],lys[aii], x, y);
  }
  lxs[aii] = x;
  lys[aii] = y;
}

function runai (i,aii) {
   drawi(i,ais[aii],aii);

    const an = 0.5 +(0.0005*aii)*(n/2-i)*25*dai
    ais[aii] += radians(an);
}

function runi (i) {

  for (aii=dlfrom; aii < ais.length; aii++){
    runai(i,aii)
  }
}

function setup() {
  // frameRate(30);
  pixelDensity(6.0);
  createCanvas(s, s,WEBGL);
  background('white');
  stroke(0, 0, 0);
  
  nsi && noiseSeed(nsi);
  if (!an) {
    for (i=0; i < nl; i+=di) {
      runi(i)
    }
    sv && save(fname)
  }
}

function draw() {
  
  
  if (an) {
    if (byline) {
      for (i=0; i < nl; i+=di) {
         runai(i,aii)
      }
      aii += 100;
      if (aii===dl) {
        noLoop();
        sv && save(fname)
      }
    } else {
      runi(i)
      i += di;
      if (i===nl) {
        noLoop();
        sv && save(fname)
      }
    }
   
  }

     
  
  
}