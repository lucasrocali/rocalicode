//Feb 13, 2022, 10:08:14 PM	
//p6.1
//----
const subv = 28
const sv = 0
const an = 1
const pt = 1
const nsi = 5
const dbg = 0
//-
const PI = 3.14159265359;
const s = 600;
const c = {
  x: s*0.5,
  y: s*0.5,
  dr: s,
  da: 0.2
};
const laps = 310
let li = 1;
const dli = 1;
const n = 360*laps;
///-
const di = 1;
const c1 = {
  x: s*0.5,
  y: s*1.5,
  da: 1.001,
  dr: 100
}
const c2 = {
  x: s*1.5,
  y: s*0.5,
  da: 1.003,
  dr: 120
}

const fname = `p6.1.${subv}.${pt}|${Object.values(c1).join('_')}-${Object.values(c2).join('_')}|.png`

let i = 0, lx = 0, ly = 0, dc1 = 0, dc2 = 0;

function intersection(x0, y0, r0, x1, y1, r1) {
  var a, dx, dy, d, h, rx, ry;
  var x2, y2;

  /* dx and dy are the vertical and horizontal distances between
   * the circle centers.
   */
  dx = x1 - x0;
  dy = y1 - y0;

  /* Determine the straight-line distance between the centers. */
  d = Math.sqrt((dy*dy) + (dx*dx));

  /* Check for solvability. */
  if (d > (r0 + r1)) {
      /* no solution. circles do not intersect. */
      return false;
  }
  if (d < Math.abs(r0 - r1)) {
      /* no solution. one circle is contained in the other */
      return false;
  }

  /* 'point 2' is the point where the line through the circle
   * intersection points crosses the line between the circle
   * centers.  
   */

  /* Determine the distance from point 0 to point 2. */
  a = ((r0*r0) - (r1*r1) + (d*d)) / (2.0 * d) ;

  /* Determine the coordinates of point 2. */
  x2 = x0 + (dx * a/d);
  y2 = y0 + (dy * a/d);

  /* Determine the distance from point 2 to either of the
   * intersection points.
   */
  h = Math.sqrt((r0*r0) - (a*a));

  /* Now determine the offsets of the intersection points from
   * point 2.
   */
  rx = -dy * (h/d);
  ry = dx * (h/d);

  /* Determine the absolute intersection points. */
  var xi = x2 + rx;
  var xi_prime = x2 - rx;
  var yi = y2 + ry;
  var yi_prime = y2 - ry;

  return [xi, xi_prime, yi, yi_prime];
}

function getrc(i, xc = c.x, xy = c.y, dr = 50, da=1) {
  const a = radians(i*da)
  const x = xc + Math.cos(a) * dr 
  const y = xy + Math.sin(a) * dr
  

  if (dbg) {
    // line(xc,xy,x,y);
    point(x,y)
  }

  return [x,y]
}

function runi (i) {
  const ddx1 = c.x + Math.cos(radians(li*c.da)) * c.dr
  const ddy1 = c.y + Math.sin(radians(li*c.da)) * c.dr
    
  const ddx2 = c.x + Math.cos(radians(90+li*c.da)) * c.dr
  const ddy2 = c.y + Math.sin(radians(90+li*c.da)) * c.dr
  
  dbg && line(c.x,c.y, ddx1, ddy1)
  dbg && line(c.x,c.y, ddx2, ddy2)
  

  const [cx1,cy1] = getrc(i,ddx1,ddy1,c1.dr,c1.da)
  const [cx2,cy2] = getrc(i,ddx2,ddy2,c2.dr,c2.da)
  
  // circle(cx1,cy1,dc1*2)
  // circle(cx2,cy2,dc2*2)
  
  
  // line(cx1,cy1,cx2,cy2)
  if (dc1 === 0) {
    dc1 = dist(cx1,cy1,c.x,c.y)
  }
  if (dc2 === 0) {
    dc2 = dist(cx2,cy2,c.x,c.y)
  }
 
  const [x,_,y,__] = intersection(cx1,cy1,dc1,cx2,cy2,dc2)
  if (dbg && i % 12 !== 0) return;
  if (dbg) {
    line(cx1,cy1,x,y)
    line(cx2,cy2,x,y)
  } else {
    pt ? point(x, y) : lx && ly && line(lx,ly, x, y);
    lx = x;
    ly = y;
    // if(dbg) {
    //   point(x, y)
    //   line(cx1,cy1,x,y)
    //   line(cx2,cy2,x,y)
    // }
  } /*
  //*/
}

function setup() {
  // frameRate(30);
  pixelDensity(6.0);
  dbg ? createCanvas(s*2,s*2) : createCanvas(s,s)
 
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
   dbg && background('white');
  
  if (an) {
    for (i = li * 360 ; i < (li+1)*360; i += di) {
      runi(i)
    }
//     point(li, s)
//     point(s, li)
    lx = 0, ly = 0, dc1 = 0, dc2 = 0
    li += dli;
  }
  
  if (an && li===laps) {
    sv && save(fname);
    noLoop();
    console.log('end',fname)
  }
}

