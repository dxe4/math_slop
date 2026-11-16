// Chapter 14: Numerical and improper integration
// Run: node examples/14.js
// The website draws these points; this standalone version prints them.
const plot = (points, label) => console.log(JSON.stringify({label, points}));

// Adjustable: try p = 0.5, 0.9, 1, or 1.2; use an even panel count.
const p = 0.5;
const panels = 512;
if (!Number.isFinite(p) || p < 0 || p > 2) throw new Error('Use 0 <= p <= 2.');
if (!Number.isInteger(panels) || panels < 2 || panels > 32768 || panels % 2) throw new Error('Use an even panel count from 2 to 32768.');
function integrate(f, a, b, n, simpson) {
  const h = (b-a)/n;
  let sum = simpson ? f(a)+f(b) : (f(a)+f(b))/2;
  for (let i=1; i<n; i++) sum += (simpson ? (i%2 ? 4 : 2) : 1)*f(a+i*h);
  return sum*h/(simpson ? 3 : 1);
}
const trap = [], simp = [];
const exact = Math.E-1;
console.log('Smooth integral: n, trapezoid absolute error, Simpson absolute error');
for (let n=4; n<=128; n*=2) {
  const et = Math.abs(integrate(Math.exp,0,1,n,false)-exact);
  const es = Math.abs(integrate(Math.exp,0,1,n,true)-exact);
  trap.push([n,et]); simp.push([n,es]);
  console.log(n,et,es);
}
plot(trap,'e^x trapezoid error; x = panels n');
plot(simp,'e^x Simpson error; x = panels n');
const truncated = [], numerical = [];
console.log('Power integral: epsilon, exact truncated value, Simpson value, quadrature error');
for (let k=1; k<=5; k++) {
  const epsilon = 10**(-k);
  const value = p===1 ? -Math.log(epsilon) : -Math.expm1((1-p)*Math.log(epsilon))/(1-p);
  const estimate = integrate(x=>x**(-p),epsilon,1,panels,true);
  truncated.push([k,value]); numerical.push([k,estimate]);
  console.log(epsilon,value,estimate,Math.abs(estimate-value));
}
plot(truncated,'Exact truncated integral; x = -log10(epsilon)');
plot(numerical,'Simpson truncated integral; x = -log10(epsilon)');
console.log(p<1 ? 'Full integral value = '+1/(1-p) : 'Full integral diverges.');
console.log('For p=0.5, substitution x=t^2 gives:',integrate(t=>2,0,1,panels,true));
