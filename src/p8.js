//Jan 12, 2022, 12:03:53 PM	
const ns = 3;
const nv = 0.02
const na = 4;
const nr = 40;
const sv = 0
const an = 1
const pt = 0;
const dci1 = 10.6;
const dci2 = 14.9;
//-
const PI = 3.14159265359;
const s = 600;
const c = s/2;
const dr = 400;
const d = 4
const n = 50// (360/na)*2;
const cs = 40
const ds = 100
///5
let i = - ds;
let j = 0;
let ai = 0;
let dri = 10;
let lx = c, ly = c, lxx = c, lyy = c;
let nsi = 1;
let drs =[]

let cx = c, cy = c;
const r = 200
const da = 2*PI/s
  
function nextp(x,y) {
  const px = (x+r)%s
  const py = y%s
  return {x:px,y:py}
}

function dline(x1,y1,x2,y2) {
  if (pt) {
    point(x1,y1);
    point(x2,y2);
  } else {
    line(x1,y1,x2,y2);
  }
}

const xs = [], ys = [];
function pointl(x,y,i) {
  if (xs[i] && ys[i]) {
    line(xs[i],ys[i],x,y)
  }
  xs[i] = x;
  ys[i] = y;
}

function runpi(i,p) {
    //const get c div frrom p
  
  // point(cx, cy);
  // play on o
  
  
  //|-
  
 
  // const dd = i * (s / n);
  // console.log('runpi',{i,p,dd})
  // dline(0,dd,s,dd);
  // dline(dd,0,dd,s);
  // point(0,dd);
  // point(0,dd + i*dci1);
  // point(s,dd + i*dci2);
  // point(s,dd);
//   curve(0,dd,
//         0,dd + i*dci1,
//         s,dd + i*dci2,
//         s,dd+i)
  const dd = s / n
  let j = 0;
  while (j < s) {
    // pointl(i,j,j);
    const y = j + Math.sin(da*i)*noise((i+j)*0.01)*40 // noise(i*j)*i*j*0.0003
    pointl(i,y,j);
    pointl(y,i,s+j);
    
    
    // pointl(i + dd/2,j+i*i*0.001,j);
    // pointl(i + dd/2,j+i*i*0.001*Math.sin(j),j);
    
    j += dd;
    // console.log({i,j})
  }
  
  // point(0,dd);
  
 // curve(0,dd,
 //        0,dd + i*dci1,
 //        s,dd + i*dci2,
 //        s,dd+i)

//   const dr = r * (i/n)
//   const dro = r * ((n-i)/n)
  
//   const da = c-dr;
//   const db = c+dr;
  
//     console.log({dr,da,db})
  
  
  // if (pt) {
  //   point(al, c);
  //   point(be, c);
  // } else {
      // dline(da,c,c,c-dro);
      // dline(c,db,c-dro,c);
      // dline(db,c,c,c-dro);
      // dline(c,db,c+dro,c);
  // }
  
//    point(cx, cy);
  
//   ai = Math.floor(random(360));
//   // ai = noise(0.1*i)*da

//   console.log({i,ai})
    
//   let jx = r * Math.cos(ai) + cx;
//   let jy = r * Math.sin(ai) + cx;
//   point(jx, jy);
    
        

//   line(cx, cy,jx,jy); 
    
}

function runi (i) {

 runpi(i,0)
}

function setup() {
  // frameRate(30);
  pixelDensity(6.0);
  createCanvas(s, s);
  background('white');
  stroke(0, 0, 0);
  
  console.log({n,na})
  
  
  nsi && noiseSeed(nsi);
  
  const al = c-r;
  const be = c+r;
  // line(al,c,c,c);
  // line(c,al,c,c);
  // line(c,c,be,c);
  // line(c,c,c,be);
  
  // for (j=0; j <= d; j ++) {
  //   lx = c;
  //   ly = c;
  //   ai = 0;
  // 0...10 10
  // 10 ... n 1
  if (!an) {
      for (i=0; i < s; i++) {
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
  
  if (i===s+ds) {
    noLoop();
    sv && save(`p8-j + Math.sin(da*i)*noise(i*j*0.0001)*40.png`)
  }
}