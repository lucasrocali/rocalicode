
//----
const fv = 6.4
const subv = 1
const sv = 0
const an = 1
const pt = 1
const nsi = 5
const dbg = 0
const byli = 1
const dbgpoints = [] //[[x,y]]
//-
const PI = 3.14159265359;
const s = 600;
const c = {
  x: s*0.5,
  y: s*0.5,
  dr: s,
  da:  0.8,
  dda: 15,
  ddr: 60
};
const laps = 900
let li = 0;
const dli = 2;
const n = 360*laps;
///-
const di = 1;
const c1 = {
  da: 1,
  dr: 120
}
const c2 = {
  da: 1,
  dr: 120
}

const fname = `p${fv}.${subv}.${pt}_${Object.values(c1).join('_')}-${Object.values(c2).join('_')}-${c.da}-${c.dda}.png`

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
    circle(xc,xy,dr*2);
    line(xc,xy,x,y);
    
    point(x,y)
  }

  return [x,y]
}

function runi (i) {
  const ddx1 = c.x + Math.cos(radians(li*c.da)) * c.dr
  const ddy1 = c.y + Math.sin(radians(li*c.da)) * c.dr
    
  const ddx2 = c.x + Math.cos(radians(c.dda+li*c.da)) * c.dr
  const ddy2 = c.y + Math.sin(radians(c.dda+li*c.da)) * c.dr //+ noise(i*0.1)*i*0.0001
  
  dbg && line(c.x,c.y, ddx1, ddy1)
  dbg && line(c.x,c.y, ddx2, ddy2)
  

  const [cx1,cy1] = getrc(i,ddx1,ddy1,c1.dr,c1.da)
  const [cx2,cy2] = getrc(i,ddx2,ddy2,c2.dr,c2.da)
  
  // circle(cx1,cy1,dc1*2)
  // circle(cx2,cy2,dc2*2)
  
  
  // line(cx1,cy1,cx2,cy2)
  if (dc1 === 0) {
    dc1 = dist(cx1,cy1,c.x,c.y) + c.ddr
  }
  if (dc2 === 0) {
    dc2 = dist(cx2,cy2,c.x,c.y) + c.ddr
  }
 
  const [x,_,y,__] = intersection(cx1,cy1,dc1,cx2,cy2,dc2)
  if (dbg) {
    line(cx1,cy1,x,y)
    line(cx2,cy2,x,y)
    pt ? point(x, y) : lx && ly && line(lx,ly, x, y);
    dbgpoints.push([x,y])
  } else {
    pt ? point(x, y) : lx && ly && line(lx,ly, x, y);
  } 
  lx = x;
  ly = y;
}

function setup() {
  // frameRate(30);
  pixelDensity(6.0);
  dbg ? createCanvas(s*2,s*2) : createCanvas(s+5,s+5)
 
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
    if (dbg) {
      let dbgi;
      for (dbgi = 0; dbgi < dbgpoints.length ; dbgi++ ) {
        if (pt) {
          point(dbgpoints[dbgi][0], dbgpoints[dbgi][1])
        } else {
          dbgi > 0 && line(dbgpoints[dbgi][0], dbgpoints[dbgi][1], dbgpoints[dbgi-1][0], dbgpoints[dbgi-1][1])
        }
      }
    }
    if (byli) {
      for (i = li * 360 ; i < (li+1)*(360 +di); i += di) {
        runi(i)
      }
      lx = 0, ly = 0;
      li += dli;
    } else {
      if (dbg) {
        let dbgi;
        for (dbgi = 0; dbgi < dbgpoints.length ; dbgi++ ) {
          if (pt) {
            point(dbgpoints[dbgi][0], dbgpoints[dbgi][1])
          } else {
            dbgi > 0 && line(dbgpoints[dbgi][0], dbgpoints[dbgi][1], dbgpoints[dbgi-1][0], dbgpoints[dbgi-1][1])
          }
        }
      }
      runi(i);
      i += di;
      
      if (i % (360 + di) === 0) {
        li += 1;
      }
    }
   
//     point(li, s)
//     point(s, li)
  
  }
  
  if (an && li >= laps) {
    sv && save(fname);
    noLoop();
    console.log('end',fname)
  }
}


//copy from p5js editor
