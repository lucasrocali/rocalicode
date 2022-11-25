//Dec 1, 2021, 9:08:46 PM
const ns = 24;

//-
const PI = 3.14159265359;
const s = 600;
const c = s;
const dr = 30;
///-
let i =0.0;
function setup() {
  console.log('setup')
  console.log('p2'
              +'-s'+s
              
             )
  // frameRate(30);
  createCanvas(s, s);
  background('white');
  stroke(51);
  ns && noiseSeed(ns);
}

const cx = (c,a) => {
  // console.log(i*0.001)
  const nr = c //*0.5*i*0.001;
  const nc = c //+i //+ dr; //*noise(i*0.001);
  return nc + nr*cos((a-90) * PI/180);
}

const cy = (c,a) => {
  const nr = c //*0.5*i*0.001;
  const nc = c//+ dr; //*noise(i*0.01);
  return nc + -nr*sin((a-90) * PI/180);
}

function draw() {
  
  //tum tum ta

    // const nvx = noise(i*cx);
    // const n2y = y*nvb;
  point(i,0);
  point(0,i);
  
  let j;
  const d = 10;
  const dp = c/d;
  for (j=0; j <= c; j+=dp) {
    // console.log(i,j)
    // point(i+j,cy(c,i))
     // poi+int((i)%s,(cy(j,i))%s);
      // text(`${cx(c+j,i).toFixed(2)}  -  ${cy(c+j,i).toFixed(2)}`, 10 ,i*10);
     point(cx(c,i)%s,cy(c,i)%s);
  }
 
  
  // circle(30, 30, 20);
    // point(n2y,x)

  i += 1;
  // i === 270 && noLoop();
}