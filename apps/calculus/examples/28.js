// Chapter 28: Numerical dynamics and capstone projects
// Run: node examples/28.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Adjustable positive decay rate, final time and initial step count.
const a = 1, T = 2, baseN = 10;
if (!(Number.isFinite(a) && a > 0 && Number.isFinite(T) && T > 0 && Number.isInteger(baseN) && baseN >= 1 && baseN <= 200)) throw new Error('Use finite positive a, T and integer baseN from 1 to 200.');
if (T/(8*baseN) === 0) throw new Error('Finest-grid step is below machine resolution.');
function step(name, t, y, h) {
  const factor = -(a*h);
  const k1 = factor*y;
  if (name === 'Euler') return y+k1;
  if (name === 'Heun') return y+(k1+factor*(y+k1))/2;
  const k2 = factor*(y+k1/2);
  const k3 = factor*(y+k2/2);
  const k4 = factor*(y+k3);
  return y+(k1+2*k2+2*k3+k4)/6;
}
const exact = [];
for (let i=0; i<=200; i++) exact.push([T*(i/200),i === 0 ? 1 : Math.exp(-(a*T)*(i/200))]);
plot(exact,'Exact: time versus state');
for (const name of ['Euler','Heun','RK4']) {
  let previousError = null;
  for (let level=0; level<4; level++) {
    const n = baseN*2**level, h=T/n;
    let y=1;
    const points=[[0,y]];
    for (let i=0; i<n; i++) {
      y=step(name,i*h,y,h);
      if (!Number.isFinite(y)) throw new Error('Nonfinite state: reduce a or the step size.');
      if (level===0) points.push([(i+1)*h,y]);
    }
    const error=Math.abs(y-Math.exp(-a*T));
    const ratio=previousError===null || error===0 ? 'unavailable' : previousError/error;
    const evaluations=n*(name==='Euler'?1:name==='Heun'?2:4);
    console.log(name,'N',n,'h',h,'endpoint',y,'absolute error',error,'previous/current error',ratio,'rate evaluations',evaluations);
    previousError=error;
    if (level===0) plot(points,name+': time versus state');
  }
}
