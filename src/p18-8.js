//Mar 10, 2022, 9:03:55 PM	

//----
const config = {
  fv: 8,
  subv: 1,
  sv: 0,
  an: 1,
  pt: 0,
  dbg: 0,
  nsi: 1
}
//-
const PI = 3.14159265359;
const s = 600;
const c = s/2;
const dc = 50;
///-
const da = 1;
const dr = 200;
const di = 1;
const dj = 10;

const fname = `p${config.fv}.${config.subv}.${config.pt}.png`
const ddj = 100
let i = 0, lx = [], ly = [];
const n = 920;

function runi (i) {
  const a = radians(i*da)
  const cx = c + Math.cos(a) * dc
  const cy = c + Math.sin(a) * dc
  
  const x = cx + Math.cos(a) * dr + noise(i*0.02)*100
  const y = cy + Math.sin(a) * dr + noise(i*0.01)*100
  
  // line(c,c,x,y)
  line(x,y,lx[i-1],ly[i-1])
  lx[i] = x;
  ly[i] = y;
}

function setup() {
  // frameRate(30);
  pixelDensity(10.0);
  const { dbg, nsi, an } = config
  dbg ? createCanvas(s,s) : createCanvas(s,s)
 
  background('white');
  stroke('#999');
  
  nsi && noiseSeed(nsi);
  if (!an) {
    for (i=0; i < n; i+=di) {
      runi(i)
    }
    sv && save(fname)
  }
}

function draw() {
  const { dbg, nsi, an, sv } = config
  dbg && background('white');
  
  if (an) {
    runi(i);
    i += di;
  }
  
  if (an && i >= n) {
    sv && save(fname);
    noLoop();
    console.log('end',fname)
  }
}

