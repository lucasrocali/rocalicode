//pc1
//Jan 20, 2022, 5:01:30 PM	
const config = {
  sv: 0,
  an: 1,
};
//-
const sc = 1.5
const PI = 3.14159265359;
const s = 600;
const n = 100; // (360/na)*2;
const ds = 100;
const c = s / 2
const r = s
///5
let i = 0;
const di = 6;
let nsi = 30;
const dp = 5
const da = (dp * PI) / s;

const vas = [0.002,0.003,0.004]
const vbs = [20,30,40,50]

const va = 0.1 //width scale | -- | 
const vb = 40 //line height

const xs = [0],
  ys = [0];
function pointl(x, y, i) {
  if (xs[i] && ys[i]) {
    line(xs[i], ys[i], x, y);
  }
  xs[i] = x;
  ys[i] = y;
}

const xvs = [0],
  yvs = [0];
function pointlv(x, y, i) {
  if (xvs[i] && yvs[i]) {
    line(xvs[i], yvs[i], x, y);
  }
  xvs[i] = x;
  yvs[i] = y;
}
//16_pc1-Math.sin(da _ i _ j _ va) _ vb _ Math.cos(da_j) (6)
function fy (i,j) {
  const dj =  Math.sin(da * i * va) * vb * Math.cos(da*j)
  return j + dj
}

function runi(i) {
  console.log('runpi',i,'noise',noise(i*0.01)*40)
  const dd = s / n;
  for (j = 0 ; j < s + ds; j+=dd) {
    const x = i;
    const y = fy(i-300,j)
    const dx = 0// noise(i*0.0001)*40
    // if ((x*x) + (y*y) < (r*r)) {
      pointl(x, y, j); 
    // }
    // pointlv(x + dx, y, i);
    
    // pointl(y, x, s+j);
  
  }
}

function setup() {
  pixelDensity(6.0);
  createCanvas(s*sc, s*sc);
  background('white');
  stroke(0, 0, 0);

  console.log({ n });

  nsi && noiseSeed(nsi);

  if (!config.an) {
    for (i = 0; i < s; i++) {
      runi(i);
    }

    config.sv && save(`pc1${nsi}3.png`);
  }
}

function draw() {
  if (config.an) {
    runi(i);
  }

  i += di;

  if (i === s*sc) {
    noLoop();
    config.sv && save(`pc1-Math.sin(da * i * j * ${va}) * ${vb} * Math.cos(da*j).png`);
  }
}
