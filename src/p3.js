//Dec 8, 2021, 10:22:30 PM	
const ns = 1;
const nv = 0.001
const sv = 1;
//-
const PI = 3.14159265359;
const s = 600;
const c = s/2;
const dr = 40;
const d = 1
const n = 8000;
///-
let i =0;
let j = 0;
let ai = 0;
let dri = 10;
let lx = c, ly = c;
let nsi = 1;

function drawi(i,j) {
  const laps = i / 360;
  
  // i% 500 === 0 && console.log('drawi',{i,j})

  const ndri = noise(i*j*nv)*dr*laps
  let x = (dri + ndri) / 2 * Math.cos(ai) + c;
  let y = (dri + ndri) / 2 * Math.sin(ai) + c;
  if (lx && ly && lx != c && ly != c) {
      line(lx, ly, x, y);
  }
  lx = x;
  ly = y;
}

function setup() {
  // frameRate(30);
  pixelDensity(6.0);
  createCanvas(s, s);
  background('white');
  stroke(0, 0, 0);
  
  nsi && noiseSeed(nsi);
  for (j=0; j <= d; j ++) {
    lx = c;
    ly = c;
    ai = 0;
    for (i=0; i < n; i++) {

      drawi(i,j);

      ai += radians(1);
      dri = dr + 0.1*i 
      i += 1;
    }
      
  }
  sv && saveCanvas(`../p3{nsi}-${d}-${nv}.png`)
}

function draw() {
  
  
//   for (j=0; j <= d; j ++) {
 

//       drawi(i,j);


      
//   }
  
//     ai += radians(1);
//       dri = dr + 0.1*i 
//       i += 1;
}