//Dec 11, 2021, 12:43:38 AM	
const ns = 3;
const nv = 0.02
const na = 4;
const nr = 40;
const sv = 0
const an = 0
//-
const PI = 3.14159265359;
const s = 600;
const c = s/2;
const dr = 40;
const d = 4
const n = (360/na)*14;
///5
let i =0;
let j = 2;
let ai = 0;
let dri = 10;
let lx = c, ly = c, lxx = c, lyy = c;
let nsi = 1;
let drs =[]

function drawi(i,j) {
  const laps = i / 360;
  
  // i% 500 === 0 && console.log('drawi',{i,j})

  const ndri =  10 + noise(i*nv)*nr//*laps//i*j*nv
  let x = (dri) / 2 * Math.cos(ai) + c;
  let y = (dri) / 2 * Math.sin(ai) + c;
  
  let xx = (dri + ndri) / 2 * Math.cos(ai) + c;
  let yy = (dri + ndri) / 2 * Math.sin(ai) + c;
  if (lx && ly && lx != c && ly != c) {
      // point(x, y);
      line(x, y, xx, yy);
    
      // line(lx, ly, x, y);
      line(lxx, lyy, xx, yy);
    
    
  }
  lx = x;
  ly = y;
  lxx = xx;
  lyy = yy;
}

function runi (i) {
  const laps = i / 360;
  const a = ai*180/PI % 360;
  const dra = drs[a] || dr
  // console.log(i,ai.toFixed(2),a.toFixed(2),laps.toFixed(2))
  drawi(i,j);

  ai += radians(na);
  dri = dr+ 0.3*i// + noise(a*0.5)*100
  drs[a] = dri;
}

function setup() {
  // frameRate(30);
  pixelDensity(6.0);
  createCanvas(s, s);
  background('white');
  stroke(0, 0, 0);
  
 
  
  
  nsi && noiseSeed(nsi);
  // for (j=0; j <= d; j ++) {
  //   lx = c;
  //   ly = c;
  //   ai = 0;
  // 0...10 10
  // 10 ... n 1
  if (!an) {
      for (i=0; i < n; i++) {
       runi(i)
      }
      
    sv && save(`p4${nsi}3-${d}-${nv}-${na}-${nr}.png`)
  }
}

function draw() {
  
  if (an) {
    runi(i)
  }
  
//   for (j=0; j <= d; j ++) {
 

//       drawi(i,j);


      
//   }
  
//     ai += radians(1);
//       dri = dr + 0.1*i 
      i += 1;
  
  if (i===n) {
    noLoop();
    sv && save(`p4${nsi}3-${d}-${nv}-${na}-${nr}.png`)
  }
}