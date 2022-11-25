//Dec 15, 2021, 11:59:53 PM	
const ns = 3;
const nv = 0.02
const na = 4;
const nr = 40;
const sv = 0
const an = 1
const pt = 0;
//-
const PI = 3.14159265359;
const s = 600;
const c = s/2;
const dr = 400;
const d = 4
const n = 40// (360/na)*2;
const cs = 40
///5
let i =0;
let j = 0;
let ai = 0;
let dri = 10;
let lx = c, ly = c, lxx = c, lyy = c;
let nsi = 1;
let drs =[]

let cx = c, cy = c;
const r = 200
const da = 10
  
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

function runpi(i,p) {
    //const get c div frrom p
  
  // point(cx, cy);
  // play on o
  
  
  //|-

  const dr = r * (i/n)
  const dro = r * ((n-i)/n)
  
  const da = c-dr;
  const db = c+dr;
  
    console.log({dr,da,db})
  
  
  // if (pt) {
  //   point(al, c);
  //   point(be, c);
  // } else {
      dline(da,c,c,c-dro);
      dline(c,db,c-dro,c);
      dline(db,c,c,c-dro);
      dline(c,db,c+dro,c);
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