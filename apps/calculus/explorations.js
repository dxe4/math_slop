const eulerBase = () => (globalThis.document?.documentElement?.getAttribute('data-euler-base-path') ?? '/').slice(0, -1);
const eulerHref = value => typeof value === 'string' && value.startsWith('/') && !value.startsWith('//') && !value.startsWith(eulerBase() + '/') ? eulerBase() + value : value;
// Node builders use the workspace source; browsers use the shared public asset.
const { attachLabFrame } = typeof document === 'undefined'
  ? await import('../../app/lab-frame.mjs') : await import(eulerHref(new URL("./_euler/lab-frame.mjs", import.meta.url).href));
// Small, dependency-free visual investigations. All formulas are explicit and run in the reader page.
import { visualWorkKey, readVisualWork, validVisualWork } from './visual-work.js';
import {openAuthoredRecord,commitAuthoredRecord,authoredMessage,authoredInitialMessage,authoredDraft,rememberAuthoredDraft,forgetAuthoredDraft,authoredTools} from './authored-storage.js';
import { spatialView } from './spatial-view.js';
import { visualProse, plainVisualText } from './visual-math.js';
import { createVisualGeometry, signedRectToPixels, finiteRuns } from './visual-geometry.js';
import {localVectorDetail, displayedHeadLength} from './visual-vector-detail.js';
const sample = (a, b, fn, count = 160) => Array.from({length: count + 1}, (_, i) => { const x = a + (b - a) * i / count; return [x, fn(x)]; });
const fmt = value => Number.isFinite(value) ? Number(value.toPrecision(5)).toString() : 'undefined';
// Math-mode numbers need an explicit exponent; plain labels and data keep fmt.
const mathFmt = value => fmt(value).replace(/^(-?\d+(?:\.\d+)?)e([+-]?\d+)$/i, (_,mantissa,exponent) => `${mantissa}\\times10^{${Number(exponent)}}`);
const fact = n => { let v = 1; for (let i = 2; i <= n; i++) v *= i; return v; };
const exactFraction = (numerator, denominator) => {
  if (!Number.isInteger(numerator) || !Number.isInteger(denominator) || denominator <= 0) throw new RangeError('Exact fractions require integer values and a positive denominator.');
  let a=Math.abs(numerator),b=denominator;
  while(b){const remainder=a%b;a=b;b=remainder;}
  return a===denominator?String(numerator/a):`${numerator/a}/${denominator/a}`;
};
const taylorSin = (x, degree) => { let sum = 0; for (let k = 1; k <= degree; k += 2) sum += (-1) ** ((k - 1) / 2) * x ** k / fact(k); return sum; };
const range = (label, min, max, step, value) => ({label, min, max, step, value});
export const explorations = {
  '01': {title:'Move a function without losing its shape', intro:'For $g(x)=a(x-h)^2+k$, first move the input by $h$, then scale the output by $a$ and move it by $k$. Predict the vertex when $a\\ne0$; try $a=0$ too.', controls:[range('Vertical scale $a$',-2,2,0.25,1),range('Horizontal shift $h$',-2,2,0.25,0.5),range('Vertical shift $k$',-2,2,0.25,0)], bounds:[-3,3,-4,6], draw:([a,h,k])=>({curves:[['$f(x)=x^2$',sample(-3,3,x=>x*x)],['$g(x)=a(x-h)^2+k$',sample(-3,3,x=>a*(x-h)**2+k)]],markers:[[h,k]],note:a===0?'At $a=0$, $g(x)='+fmt(k)+'$ is constant. $('+fmt(h)+','+fmt(k)+')$ is one point on its graph; there is no unique vertex or opening.':'At $a='+fmt(a)+'$, the transformed vertex is $('+fmt(h)+','+fmt(k)+')$. '+(a<0?'The negative scale reflects the parabola across its horizontal vertex line.':'Its opening has the same orientation as $x^2$.')}), question:'Why does replacing $x$ by $x-h$ move the graph right when $h$ is positive?', answer:'For $a\\ne0$, $x=h$ makes the squared input zero, placing the vertex at $x=h$. When $a=0$ the graph is constant, so $h$ does not change it.'},
  '02': {title:'When does $\\sin\\theta$ behave like $\\theta$?', intro:'Angles must be in radians. Near zero, $\\sin\\theta\\approx\\theta$; the visual gap grows away from zero. Predict the sign of $\\theta-\\sin\\theta$ for positive $\\theta$.', controls:[range('Test angle $\\theta$',-2,2,0.05,1)], bounds:[-2.2,2.2,-2.2,2.2], draw:([a])=>({curves:[['$\\sin\\theta$',sample(-2.2,2.2,Math.sin)],['$\\theta$',sample(-2.2,2.2,x=>x)]],markers:[[a,Math.sin(a)],[a,a]],note:'At $\\theta='+fmt(a)+'$, $\\sin\\theta='+fmt(Math.sin(a))+'$; $|\\theta-\\sin\\theta|='+fmt(Math.abs(a-Math.sin(a)))+'$. Near zero the error is approximately $|\\theta|^3/6$.'}),question:'Why would the same numeric angle in degrees spoil the comparison $\\sin\\theta\\approx\\theta$?',answer:'The limit $\\lim_{\\theta\\to0}\\sin\\theta/\\theta=1$ assumes radians. Degree measure inserts the factor $\\pi/180$, so the derivative of sine at zero would be $\\pi/180$ per degree.'},
  '04': {title:'An $\\varepsilon$–$\\delta$ guarantee you can move', intro:'For $f(x)=3x-2$ near $x=4$, the exact error is $|f(x)-10|=3|x-4|$. Choose an output tolerance $\\varepsilon>0$; the chart shows the matching input band $\\delta=\\varepsilon/3$.',controls:[range('Output tolerance $\\varepsilon$',0.3,3,0.1,1.5)],bounds:[2.5,5.5,5,15],draw:([e])=>({curves:[['$f(x)=3x-2$',sample(2.5,5.5,x=>3*x-2)]],markers:[[4-e/3,10-e],[4,10],[4+e/3,10+e]],guides:[{axis:'x',value:4-e/3},{axis:'x',value:4+e/3},{axis:'y',value:10-e},{axis:'y',value:10+e}],note:'$\\varepsilon='+fmt(e)+'$ gives $\\delta=\\varepsilon/3='+fmt(e/3)+'$. Every $x$ with $0<|x-4|<\\delta$ satisfies $|f(x)-10|<\\varepsilon$.'}),question:'Does showing this band for one $\\varepsilon$ prove the limit?',answer:'No. The proof sets $\\delta=\\varepsilon/3$ for every $\\varepsilon>0$, then verifies $0<|x-4|<\\delta\\Rightarrow|f(x)-10|<\\varepsilon$ for every eligible $x$.'},
  '05': {title:'Watch a secant become a tangent',intro:'For $f(x)=x^2$ at $x=1$, the secant through $x=1$ and $x=1+h$ has slope $2+h$. Move $h$ toward zero from either side and compare with the tangent slope $2$.',controls:[range('Step $h$',-1.4,1.4,0.05,1)],bounds:[-0.5,2.5,-0.5,6],draw:([h])=>({curves:[['$f(x)=x^2$',sample(-0.5,2.5,x=>x*x)],['Secant / tangent',sample(-0.5,2.5,x=>1+(2+h)*(x-1))]],markers:h===0?[[1,1]]:[[1,1],[1+h,(1+h)**2]],note:h===0?"At $h=0$, the original secant quotient is undefined. The shown line is the tangent with slope $2$.":`Secant slope $2+h=${fmt(2+h)}$. As $h\\to0$ it approaches the derivative $f'(1)=2$.`}),question:'Why is the difference quotient undefined at $h=0$ even though its limit exists?',answer:'The original quotient divides by $h$. Algebra simplifies it to $2+h$ only for $h\\ne0$; the limit as $h\\to0$ concerns nearby nonzero $h$.'},
  '06': {title:'See the chain rule as a local rate',intro:'For $f(x)=\\sin(x^2)$, the inner map $x^2$ changes at rate $2x$ and sine changes at rate $\\cos(x^2)$. Their product gives the tangent slope $f^{\\prime}(x)=2x\\cos(x^2)$.',controls:[range('Tangent location $x$',-1.8,1.8,0.05,0.8)],bounds:[-2,2,-2,2],draw:([a])=>{const y=Math.sin(a*a),m=2*a*Math.cos(a*a);return {curves:[['$\\sin(x^2)$',sample(-2,2,x=>Math.sin(x*x))],['Tangent line',sample(-2,2,x=>y+m*(x-a))]],markers:[[a,y]],note:'At $x='+fmt(a)+'$, the chain-rule slope is $2x\\cos(x^2)='+fmt(m)+'$. The tangent is $y='+fmt(y)+(m<0?'−':'+')+fmt(Math.abs(m))+'(x'+(a<0?'+':'−')+fmt(Math.abs(a))+')$.'};},question:'Why is $\\cos(x^2)$ alone an incomplete derivative?',answer:'A change $\\Delta x$ changes the inner value $x^2$ by about $2x\\Delta x$. The outer cosine factor must be multiplied by that inner rate.'},
  '07': {title:'How far can a tangent approximation travel?',intro:'The tangent to $\\sqrt{x}$ at $x=4$ is $L(x)=2+(x-4)/4$. Move the test input and inspect $L(x)-\\sqrt{x}$; the line is a local model.',controls:[range('Test input $x$',1,9,0.1,6)],bounds:[0,10,0,4],draw:([a])=>{const L=2+(a-4)/4;return {curves:[['$\\sqrt{x}$',sample(0,10,Math.sqrt)],['Linearization at 4',sample(0,10,x=>2+(x-4)/4)]],markers:[[a,Math.sqrt(a)],[a,L]],note:'$\\sqrt{'+fmt(a)+'}='+fmt(Math.sqrt(a))+'$; $L('+fmt(a)+')='+fmt(L)+'$; $L(x)-\\sqrt{x}='+fmt(L-Math.sqrt(a))+'$ here. The tangent is an upper bound for $x\\ge0$.'};},question:'Why does the tangent overestimate $\\sqrt{x}$ away from $x=4$?',answer:'The second derivative $f^{\\prime\\prime}(x)=-1/(4x^{3/2})$ is negative for $x>0$, so $\\sqrt{x}$ is concave down. For $x\\ge0$, the tangent is an upper bound, with strict inequality away from $x=4$.'},
  '08': {title:'Read a curve through its derivative',intro:'For $f(x)=x^3-3x$, $f^{\\prime}(x)=3x^2-3$. Follow a point across the critical values $x=-1$ and $x=1$; a zero slope alone does not identify a maximum.',controls:[range('Location $x$',-2,2,0.05,0)],bounds:[-2.2,2.2,-4.5,12],draw:([a])=>({curves:[['$f(x)=x^3-3x$',sample(-2.2,2.2,x=>x**3-3*x)],['$f^{\\prime}(x)=3x^2-3$',sample(-2.2,2.2,x=>3*x*x-3)]],markers:[[a,a**3-3*a],[a,3*a*a-3]],note:'$f^{\\prime}('+fmt(a)+')='+fmt(3*a*a-3)+'$. The function '+(Math.abs(3*a*a-3)<0.001?'has a stationary point here':3*a*a-3>0?'is increasing here':'is decreasing here')+'. The sign change determines the local type.'}),question:'What distinguishes $x=-1$ from $x=1$?',answer:'At $x=-1$ the derivative changes positive to negative, giving a local maximum. At $x=1$ it changes negative to positive, giving a local minimum.'},
  '09': {title:'Optimize with a constraint',intro:'A rectangle has perimeter $8$, so length plus width is $4$. Its area is $A(w)=w(4-w)$. Physical rectangles have $0<w<4$; the closed interval $[0,4]$ also includes degenerate boundary cases for comparison.',controls:[range('Width $w$',0.1,3.9,0.1,1)],bounds:[0,4,0,5],draw:([w])=>({curves:[['$A(w)=w(4-w)$',sample(0,4,x=>x*(4-x))]],markers:[[w,w*(4-w)],[2,4]],note:'Width $w='+fmt(w)+'$, length $4-w='+fmt(4-w)+'$, area $A(w)='+fmt(w*(4-w))+'$. $A^{\\prime}(w)=4-2w$; the maximum occurs at $w=2$, while degenerate boundary areas are zero.'}),question:'Why must the endpoints $w=0$ and $w=4$ be checked?',answer:'The derivative test only examines interior points. On $[0,4]$, the continuous area function attains an absolute maximum and minimum; the degenerate boundary areas are both zero.'},
  '10': {title:'Build the integral from rectangles',intro:'Midpoint rectangles approximate $\\int_0^1x^2\\,dx$. Increase the number $n$ of slices and compare the midpoint estimate with the exact value $1/3$.',controls:[range('Number of rectangles $n$',2,24,1,6)],bounds:[0,1,0,1.1],draw:([n])=>{const rectangles=[],h=1/n;let sum=0;for(let i=0;i<n;i++){const height=((i+0.5)*h)**2;rectangles.push({x:i*h,y:0,width:h,height});sum+=height*h;}return {rectangles,curves:[['$f(x)=x^2$',sample(0,1,x=>x*x)]],note:'Midpoint sum with $n='+n+'$: '+fmt(sum)+'. Exact integral $1/3\\approx'+fmt(1/3)+'$. Signed error (estimate minus exact) '+fmt(sum-1/3)+' equals $-1/(12n^2)$.'};},question:'Does shrinking rectangle width $1/n$ alone prove the integral?',answer:'For $x^2$, a proof can bound every tagged sum on the displayed equal partition between left and right sums, whose gap is $1/n$. Their common limit is $1/3$.'},
  '11': {title:'Accumulation and the fundamental theorem',intro:'Let $A(x)=\\int_0^x2t\\,dt=x^2$. The shaded region accumulates as the right endpoint moves; its instantaneous rate is the continuous integrand height $2x$.',controls:[range('Upper limit $x$',0.2,2.8,0.1,1.5)],bounds:[0,3,0,6],draw:([a])=>({areas:[sample(0,a,x=>2*x)],curves:[['Rate $f(t)=2t$',sample(0,3,x=>2*x)]],markers:[[a,2*a]],note:'$A('+fmt(a)+')='+fmt(a*a)+'$ and $A^{\\prime}(x)=2x$, so $A^{\\prime}('+fmt(a)+')='+fmt(2*a)+'$. A thin extra strip has area about $f(x)\\Delta x$.'}),question:'What hypothesis makes $A^{\\prime}(x)=f(x)$ at every interior point?',answer:'Continuity of $f$ at the point $x$ makes the average height on a shrinking interval approach $f(x)$. An integrable function need not be continuous everywhere.'},
  '14': {title:'A tail can shrink slowly—or never',intro:'The improper integral $\\int_1^\\infty x^{-p}\\,dx$ converges exactly for $p>1$. Move $p$ and compare accumulation to the cutoff $R=20$ with the limiting value $1/(p-1)$ when it exists.',controls:[range('Exponent $p$',0.5,2.5,0.05,1.5)],bounds:[1,20,0,2],draw:([p])=>{const finite=Math.abs(p-1)<1e-9?Math.log(20):(20**(1-p)-1)/(1-p);return {curves:[['$x^{-p}$',sample(1,20,x=>x**(-p))]],note:'$p='+fmt(p)+'$: $\\int_1^{20}x^{-p}\\,dx='+fmt(finite)+'$. '+(p>1?'The infinite integral converges to $1/(p-1)='+fmt(1/(p-1))+'$.':'The infinite integral diverges although every finite cutoff is finite.')};},question:'Why can a curve whose heights approach zero mislead you about this integral?',answer:'The question concerns an unbounded interval. Heights may be very small while accumulation across infinitely much width still diverges, as with $1/x$.'},
  '15': {title:'Partial sums are the objects that converge',intro:"For the geometric series $\\sum_{j=0}^{\\infty}r^j$, $S_n$ is the sum of its first $n$ terms: $S_0=0$ and $S_n=(1-r^n)/(1-r)$ when $r\\ne1$. Inspect oscillation and growth as $r$ crosses $\\pm1$; some partial sums can leave the fixed chart bounds.",controls:[range('Common ratio $r$',-1.2,1.2,0.05,0.5)],bounds:[0,24,-5,8],draw:([r])=>{let s=0,p=1;const pts=[[0,0]];for(let n=1;n<=24;n++){s+=p;pts.push([n,s]);p*=r;}return {curves:[['Partial sum $S_n$',pts]],note:`$r=${fmt(r)}$. ${Math.abs(r)<1?`The sum converges to $1/(1-r)=${fmt(1/(1-r))}$.`:'The terms do not tend to zero, so the series cannot converge.'} $S_{24}=${fmt(s)}$ (S₂₄=${fmt(s)}).`};},question:"Why does $r=-1$ fail even though the partial sums stay bounded?",answer:"The partial sums alternate between $1$ and $0$, so $S_n$ has no single limit. Boundedness alone does not imply convergence."},
  '16': {title:'Alternation controls the remainder',intro:"The alternating harmonic partial sum $S_N=\\sum_{n=1}^N(-1)^{n-1}/n$ approaches $\\ln2$. Even and odd partial sums lie on opposite sides, and the next omitted term bounds $|S_N-\\ln2|$.",controls:[range('Number of terms $N$',1,30,1,6)],bounds:[0,30,0,1.2],draw:([N])=>{let s=0;const pts=[];for(let n=1;n<=30;n++){s+=(n%2?1:-1)/n;pts.push([n,s]);}let sn=0;for(let n=1;n<=N;n++)sn+=(n%2?1:-1)/n;return {curves:[['Alternating partial sums',pts],['$\\ln2$',[[1,Math.LN2],[30,Math.LN2]]]],markers:[[N,sn]],note:`$S_{${N}}=${fmt(sn)}$, $\\ln2\\approx${fmt(Math.LN2)}$. Actual error $${fmt(Math.abs(sn-Math.LN2))}$; guaranteed bound $1/(${N+1})\\approx${fmt(1/(N+1))}$.`};},question:"Why does the next-term bound $1/(N+1)$ hold here?",answer:"The magnitudes $1/n$ decrease to zero. Consecutive partial sums bracket $\\ln2$, leaving a gap equal to the first omitted magnitude $1/(N+1)$."},
  '17': {title:'Taylor approximation has a region of trust',intro:"The Maclaurin polynomial $T_d(x)$ for $\\sin x$ keeps odd powers through degree $d$. Raise the finite degree and compare far from zero; the full Taylor series converges for every real $x$.",controls:[range('Polynomial degree',1,11,2,3)],bounds:[-5,5,-3,3],draw:([d])=>({curves:[['$\\sin x$',sample(-5,5,Math.sin)],['$T_d(x)$',sample(-5,5,x=>taylorSin(x,d))]],markers:[[2,Math.sin(2)],[2,taylorSin(2,d)]],note:`Degree $d=${d}$: $T_{${d}}(2)=${fmt(taylorSin(2,d))}$, $\\sin2=${fmt(Math.sin(2))}$. Error at $x=2$ is $${fmt(Math.abs(taylorSin(2,d)-Math.sin(2)))}$.`}),question:"Does increasing $d$ guarantee a smaller error $|T_d(x)-\\sin x|$ at every plotted $x$?",answer:"No. At $x=5$, degree $3$ gives a larger error than degree $1$. For each fixed $x$, $T_d(x)\\to\\sin x$ as odd $d\\to\\infty$, but individual degree increases need not improve every value."},
  '18': {aspect:'equal',title:'Parameter is not distance',intro:"A point travels along $\\mathbf r(t)=(\\cos t,\\sin t)$. The curve closes after $2\\pi$, but $t$ records when and in which direction the point is traced.",controls:[range('Parameter $t$ (steps of $\\pi/40$)',0,80,1,20)],bounds:[-1.3,1.3,-1.3,1.3],draw:([step])=>{const t=step*(2*Math.PI/80),x=step===20||step===60?0:step===80?1:Math.cos(t),y=step===0||step===40||step===80?0:step===20?1:step===60?-1:Math.sin(t);return {curves:[['Unit circle',sample(0,2*Math.PI,a=>a).map(([a])=>[Math.cos(a),Math.sin(a)])],['Traced arc',sample(0,t,a=>a,80).map(([a])=>[Math.cos(a),Math.sin(a)])]],markers:[[x,y]],note:`$t=${fmt(t)}$ radians gives position $(${fmt(x)},${fmt(y)})$. Velocity is $(-\\sin t,\\cos t)$, so speed is $1$ and arc length from $0$ to $t$ is $${fmt(t)}$.`};},question:"Would replacing $t$ by $2t$ double the geometric circle?",answer:"No. The path $\\mathbf r(2t)$ traces at twice the speed and makes two laps for $0\\le t\\le2\\pi$; its image is the same circle."},
  '21': {title:'Which direction rises fastest?',intro:"At $(1,1)$, $f(x,y)=x^2+2y^2$ has gradient $\\nabla f=(2,4)$. A unit direction $\\mathbf u=(\\cos\\theta,\\sin\\theta)$ has directional derivative $2\\cos\\theta+4\\sin\\theta$.",controls:[range('Direction $\\theta$ (degrees)',0,360,5,45)],bounds:[0,360,-5,5],draw:([deg])=>{const rad=deg*Math.PI/180,rate=2*Math.cos(rad)+4*Math.sin(rad);return {curves:[['Directional derivative',sample(0,360,x=>2*Math.cos(x*Math.PI/180)+4*Math.sin(x*Math.PI/180))],['Maximum $\\|\\nabla f\\|$',[[0,Math.sqrt(20)],[360,Math.sqrt(20)]]]],markers:[[deg,rate]],note:`At $\\theta=${deg}^\\circ$, directional rate is $${fmt(rate)}$. The continuous maximum is $\\|\\nabla f\\|=\\sqrt{20}\\approx${fmt(Math.sqrt(20))}$ at $\\theta\\approx63.435^\\circ$; the $5^\\circ$ slider samples nearby directions.`};},question:"Why is the maximum directional derivative $\\sqrt{20}$ rather than $2+4$?",answer:"A unit direction cannot have both coordinates equal to $1$. Cauchy–Schwarz gives $\\nabla f\\cdot\\mathbf u\\le\\|\\nabla f\\|\\|\\mathbf u\\|=\\sqrt{20}$, with equality along the gradient."},
  '22': {aspect:'equal',title:'A step can overshoot a minimum',intro:"Gradient descent on $F(x,y)=x^2+4y^2$ uses $(x,y)\\leftarrow(x,y)-h(2x,8y)$. Change $h$ and watch the trajectory from $(1,1)$.",controls:[range('Step size $h$',0.05,0.35,0.01,0.15)],bounds:[-1.6,1.6,-1.6,1.6],draw:([h])=>{let x=1,y=1;const pts=[[x,y]];for(let i=0;i<12;i++){x*=1-2*h;y*=1-8*h;pts.push([x,y]);}return {curves:[['Descent path $(x,y)$',pts]],markers:[[1,1],[x,y]],curveStopAtExit:[0],note:`After $12$ steps, $F=${mathFmt(x*x+4*y*y)}$. The $y$ multiplier is $1-8h=${mathFmt(1-8*h)}$; its magnitude contracts geometrically precisely for $0<h<0.25$. `+(pts.findIndex(([u,v])=>u<-1.6||u>1.6||v<-1.6||v>1.6)>0?`The path first exits the fixed chart after step ${pts.findIndex(([u,v])=>u<-1.6||u>1.6||v<-1.6||v>1.6)} at $(${mathFmt(pts[pts.findIndex(([u,v])=>u<-1.6||u>1.6||v<-1.6||v>1.6)][0])},${mathFmt(pts[pts.findIndex(([u,v])=>u<-1.6||u>1.6||v<-1.6||v>1.6)][1])})$; the true step 12 is $(${mathFmt(x)},${mathFmt(y)})$.`:''),};},question:"Why can $h=0.3$ fail even though the gradient points uphill?",answer:"A step opposite the gradient initially descends, but a large step crosses the narrow valley. The $y$ multiplier becomes $1-8h=-1.4$, so its magnitude grows."},
  '23': {aspect:'equal',title:'Tiles reveal a double integral',
    aspect:'equal',intro:"Midpoint tiles approximate $\\iint_{[0,1]^2}(x^2+y^2)\\,dA$. With $n$ tiles per side, the estimate is $2/3-1/(6n^2)$ and approaches the exact value $2/3$.",controls:[range('Tiles per side $n$',2,16,1,4)],bounds:[0,1,0,1],draw:([n])=>{let sum=0;const tiles=[];for(let i=0;i<n;i++)for(let j=0;j<n;j++){const x=(i+0.5)/n,y=(j+0.5)/n;sum+=(x*x+y*y)/n**2;tiles.push({x:i/n,y:j/n,width:1/n,height:1/n,shade:(x*x+y*y)/2});}return {tiles,curves:[],note:`${n*n} midpoint tiles give $${fmt(sum)}$. Exact value $2/3\\approx${fmt(2/3)}$; signed error $-1/(6n^2)=${fmt(sum-2/3)}$. Each tile contributes height times area.`};},question:"Why is each tile area $1/n^2$?",answer:"The unit square has $n$ subdivisions in each coordinate, so each tile has width $1/n$ and height $1/n$. Each sample is weighted by their product $1/n^2$."},
  '27': {title:'Numerical trajectories need a stability check',intro:"For $y^{\\prime}=-4y$ with $y(0)=1$, the exact solution $e^{-4t}$ stays positive. Euler uses multiplier $1-4h$. Increase $h$ and watch the method oscillate or grow while the model decays.",controls:[range('Step $h$',0.05,0.55,0.01,0.2)],bounds:[0,4,-4,4],draw:([h])=>{const a=4,pts=[[0,1]];let y=1;for(let i=1;i<=Math.floor(4/h);i++){y*=1-a*h;pts.push([i*h,y]);}return {curves:[['Exact $e^{-4t}$',sample(0,4,t=>Math.exp(-4*t))],['Euler samples',pts]],note:`$4h=${fmt(a*h)}$; Euler multiplier $1-4h=${fmt(1-a*h)}$. ${a*h<1?'Updates stay positive and decay.':a*h===1?'The first update reaches zero; every later Euler value stays zero.':a*h<2?'Updates alternate sign but decay in magnitude.':a*h===2?'Updates alternate sign with constant magnitude.':'Updates alternate sign and grow in magnitude.'}`};},question:"Why is a smooth line through Euler samples of $y^{\\prime}=-4y$ no accuracy certificate?",answer:"The line displays computed values. Compare with $e^{-4t}$, halve $h$, and check numerical stability and any physical invariants."},
  '28': {title:'Order and stability are different',intro:"Solve $y^{\\prime}=-4y$ on $[0,2]$ with Euler, Heun, and RK4. With $N$ steps, $h=2/N$; compare their endpoint values with $e^{-8}$.",controls:[range('Number of steps $N$',4,40,1,10)],bounds:[0,2,-1,1.5],draw:([n])=>{const h=2/n,lines=[];for(const [name,order] of [['Euler',1],['Heun',2],['RK4',4]]){let y=1;const pts=[[0,y]];for(let i=1;i<=n;i++){const z=-4*h;const R=order===1?1+z:order===2?1+z+z*z/2:1+z+z*z/2+z**3/6+z**4/24;y*=R;pts.push([i*h,y]);}lines.push([name,pts]);}return {curves:[['Exact',sample(0,2,t=>Math.exp(-4*t))],...lines],...(n===4?{markers:[[2,Math.exp(-8)],...lines.map(([,pts])=>pts.at(-1))]}:{}),note:`$h=${fmt(h)}$, exact endpoint $e^{-8}=${fmt(Math.exp(-8))}$. Endpoint errors: ${lines.map(([name,pts])=>`${name} ${fmt(Math.abs(pts.at(-1)[1]-Math.exp(-8)))}`).join('; ')}.`};},question:"Why might the method with the smallest error at one $h$ not be best for every problem?",answer:"Order describes asymptotic error as $h\\to0$ under smoothness assumptions. Cost per step, stability restrictions, and model regularity also matter."},
  '03': {title:'The floating-point trap in a tiny difference',intro:'Estimate the derivative of $\\sqrt{x}$ at $x=1$ with a forward difference. As $h=10^{-k}$ shrinks, subtraction loses significant digits. The rationalized quotient $1/(\\sqrt{1+h}+1)$ computes $(\\sqrt{1+h}-1)/h$ more reliably for $h\\ne0$.',controls:[range('Decimal exponent $k$ in $h=10^{-k}$',1,16,1,8)],bounds:[1,16,-0.1,0.8],draw:([k])=>{const direct=[],stable=[];for(let j=1;j<=16;j++){const h=10**(-j);direct.push([j,(Math.sqrt(1+h)-1)/h]);stable.push([j,1/(Math.sqrt(1+h)+1)]);}const h=10**(-k),d=(Math.sqrt(1+h)-1)/h,s=1/(Math.sqrt(1+h)+1);return {curves:[['Direct subtraction',direct],['Rationalized quotient',stable],['Exact derivative $1/2$',[[1,.5],[16,.5]]]],markers:[[k,d],[k,s]],note:'$h=10^{-'+k+'}$; direct quotient '+fmt(d)+', rationalized quotient '+fmt(s)+', exact derivative $1/2$. Signed errors relative to $1/2$: direct '+(d-.5).toExponential(9)+', rationalized '+(s-.5).toExponential(9)+'. Roundoff eventually dominates direct subtraction.'};},question:'Why can a smaller $h$ give a worse numerical derivative?',answer:'The two square roots become nearly equal. Subtracting their rounded values loses leading digits, and division by tiny $h$ amplifies the resulting error.'},
  '12': {title:'Check an antiderivative by differentiating',intro:'For $x>0$, $F(x)=x\\ln x-x$ has derivative $F^{\\prime}(x)=\\ln x$. The visual compares $\\ln x$ with a central difference of $F$ using $h=0.02$ as a numerical check.',controls:[range('Test input $x$',0.3,4,0.1,2)],bounds:[0.2,4.2,-1.5,1.7],draw:([a])=>{const F=x=>x*Math.log(x)-x,h=.02,d=(F(a+h)-F(a-h))/(2*h);return {curves:[['$f(x)=\\ln x$',sample(.2,4.2,Math.log)],['Central difference of $F$',sample(.2,4.2,x=>(F(x+h)-F(x-h))/(2*h))]],markers:[[a,Math.log(a)],[a,d]],note:'At $x='+fmt(a)+'$, $\\ln x='+fmt(Math.log(a))+'$; central difference $[F(x+0.02)-F(x-0.02)]/0.04='+fmt(d)+'$. The product rule proves $F^{\\prime}(x)=\\ln x$ for $x>0$.'};},question:'Why does numerical agreement not establish an antiderivative identity $F^{\\prime}(x)=\\ln x$?',answer:'The check uses finitely many rounded samples. The product rule proves the derivative for every $x>0$ in the domain.'},
  '13': {title:'Turn slices into a solid',intro:'Rotate $y=\\sqrt{x}$ on $0\\le x\\le b$ about the $x$-axis. A slice at $x$ has disk radius $\\sqrt{x}$ and cross-sectional area $A(x)=\\pi x$, so volume accumulates as an integral of areas.',controls:[range('Right endpoint $b$',0.2,2.8,0.1,1.5)],bounds:[0,3,0,10],draw:([b])=>({areas:[sample(0,b,x=>Math.PI*x)],curves:[['Cross-section area $A(x)=\\pi x$',sample(0,3,x=>Math.PI*x)]],markers:[[b,Math.PI*b]],note:'At $b='+fmt(b)+'$, edge radius $\\sqrt b='+fmt(Math.sqrt(b))+'$. Volume $V=\\int_0^b\\pi x\\,dx=\\pi b^2/2='+fmt(Math.PI*b*b/2)+'$ cubic units.'}),question:'Why is $\\pi x$ integrated rather than $\\sqrt{x}$?',answer:'A disk cross section has area $\\pi r^2$. Here $r=\\sqrt{x}$, so its area is $\\pi(\\sqrt{x})^2=\\pi x$; integrating radius alone would have the wrong units.'},
  '19': {aspect:'equal',title:'Velocity points along the path; acceleration turns it',
    aspect:'equal',intro:"Uniform circular motion has position $\\mathbf r(t)=(\\cos(\\omega t),\\sin(\\omega t))$. The tangent velocity arrow follows the path; the inward acceleration arrow points toward the center.",controls:[range('Angular speed $\\omega$',0.5,2,0.05,1)],bounds:[-1.6,1.6,-1.6,1.6],draw:([w])=>{const t=1,a=w*t,x=Math.cos(a),y=Math.sin(a);return {curves:[['Circular path',sample(0,2*Math.PI,s=>s).map(([s])=>[Math.cos(s),Math.sin(s)])]],markers:[[x,y]],arrows:[{from:[x,y],to:[x-0.55*Math.sin(a),y+0.55*Math.cos(a)],kind:0},{from:[x,y],to:[x-0.55*Math.cos(a),y-0.55*Math.sin(a)],kind:1}],note:`At $t=1$, speed $\\|\\mathbf v\\|=\\omega=${fmt(w)}$ and acceleration magnitude $\\|\\mathbf a\\|=\\omega^2=${fmt(w*w)}$. The tangent velocity and inward acceleration arrows show directions at fixed display lengths.`};},question:"How can $\\|\\mathbf v\\|$ stay constant while acceleration is nonzero?",answer:"Velocity is a vector. Its length remains $\\omega$, but its direction changes continuously. The inward acceleration has magnitude $\\|\\mathbf a\\|=\\omega^2$."},
  '20': {title:'Straight lines can miss a multivariable limit',intro:"For $q(x,y)=x^2y/(x^4+y^2)$, every straight-line approach to the origin gives $0$, but $y=cx^2$ gives $c/(1+c^2)$. The horizontal coordinate is the positive $x$-coordinate on each tested path. Vary $c$ and compare as $x\\to0^+$.",controls:[range('Curve coefficient $c$',-4,4,0.1,1),range('Inspect $x$-coordinate',0.01,0.5,0.01,0.2)],bounds:[0,0.5,-0.55,0.55],draw:([c,probe=0.2])=>{const curved=c/(1+c*c),line=x=>x/(1+x*x);return {curves:[['Straight path $y=x$',sample(0.005,0.5,line)],['Curved path $y=cx^2$',[[0.005,curved],[0.5,curved]]]],markers:[[probe,curved],[probe,line(probe)]],note:`At $x=${fmt(probe)}$, the line $y=x$ gives $q=${fmt(line(probe))}$, approaching $0$ as $x\\to0^+$. The curve $y=${fmt(c)}x^2$ gives $q=${fmt(curved)}$ for every $x\\ne0$. At $c=1$, that value is $1/2$.`};},question:"Why do straight-line paths $y=mx$ miss the failure of this limit?",answer:"Along $y=mx$, the value tends to $0$; along $y=cx^2$, the $x^4$ and $y^2$ terms balance and the value is $c/(1+c^2)$. For $c=1$ it stays $1/2$, so the full limit does not exist."},
  '24': {aspect:'equal',title:'Where the polar area factor comes from',intro:"A radius-$r$ disk has area $\\pi r^2$. Its outer rings grow longer as radius increases: a thin ring has area about $2\\pi r\\,dr$. The polar area element $dA=\\rho\\,d\\rho\\,d\\theta$ records that growth.",controls:[range('Radius $r$',0.3,2,0.05,1)],bounds:[-2.2,2.2,-2.2,2.2],draw:([r])=>{const circle=sample(0,2*Math.PI,t=>t).map(([t])=>[r*Math.cos(t),r*Math.sin(t)]);return {polygons:[circle],curves:[['Circle of radius $r$',circle]],markers:[[r,0]],note:`$r=${fmt(r)}$. Disk area $\\pi r^2=${fmt(Math.PI*r*r)}$. The polar integral $\\int_0^{2\\pi}\\int_0^r\\rho\\,d\\rho\\,d\\theta=\\pi r^2$. Omitting $\\rho$ gives the wrong scaling.`};},question:"Why does $dA$ use the variable radius $\\rho$ rather than the final radius $r$?",answer:"Each inner ring at radius $\\rho$ has circumference $2\\pi\\rho$. Its contribution depends on that radius, integrated from $0$ to $r$."},
  '25': {title:'Different paths, one potential difference',intro:"For $\\mathbf F=(2x,2y)=\\nabla\\phi$ with $\\phi=x^2+y^2$, work from $(0,0)$ to $(1,1)$ equals $\\phi(1,1)-\\phi(0,0)=2$ along every piecewise smooth path. Bend the route to test this prediction.",controls:[range('Path bend $p$',-1.5,1.5,0.1,0.8)],bounds:[-0.2,1.2,-0.3,1.3],draw:([p])=>({curves:[['Straight route',[[0,0],[1,1]]],['Bent route $y=x+px(1-x)$',sample(0,1,x=>x+p*x*(1-x))]],markers:[[0,0],[1,1]],note:`Bend $p=${fmt(p)}$. Both routes run from $(0,0)$ to $(1,1)$. Since $\\mathbf F=\\nabla\\phi$ for $\\phi=x^2+y^2$, each work integral is $\\phi(1,1)-\\phi(0,0)=2$.`}),question:"Would equal work for these two routes alone prove $\\mathbf F$ conservative?",answer:"No. Conservativeness requires path independence for all eligible paths in the domain, or a potential proof such as $\\mathbf F=\\nabla\\phi$. Two matching examples are only evidence."},
  '26': {aspect:'equal',title:'Circulation equals enclosed curl',intro:"For $\\mathbf F=(-y/2,x/2)$, the planar curl is $\\partial Q/\\partial x-\\partial P/\\partial y=1$. Counterclockwise circulation around a radius-$r$ circle equals the disk area $\\pi r^2$ by Green’s theorem.",controls:[range('Circle radius $r$',0.3,2,0.05,1)],bounds:[-2.2,2.2,-2.2,2.2],draw:([r])=>{const circle=sample(0,2*Math.PI,t=>t).map(([t])=>[r*Math.cos(t),r*Math.sin(t)]);return {polygons:[circle],curves:[['Counterclockwise boundary',circle]],markers:[[r,0]],note:`At $r=${fmt(r)}$, curl $\\partial Q/\\partial x-\\partial P/\\partial y=1/2-(-1/2)=1$. For counterclockwise traversal, circulation and enclosed curl integral equal $\\pi r^2=${fmt(Math.PI*r*r)}$.`};},question:"What changes if the radius-$r$ circle is traced clockwise instead of counterclockwise?",answer:"The line integral changes sign to $-\\pi r^2$. Green’s theorem uses counterclockwise orientation for the outer boundary."}
};

// Follow-up investigations sit beside the lesson whose limitation or theorem they test.
export const additionalExplorations = {
  '04': [{
    afterSection:4,
    title:'Can one point repair a discontinuity?',
    intro:'The left branch is $x+1$; the right branch is $x+1+J$. The dot sets $f(0)=v$ independently of either branch. Change the jump $J$ and assigned value $v$.',
    controls:[range('Jump $J$',0,2,0.1,1),range('Assigned value $v$',-1,3,0.1,2)],
    bounds:[-2,2,-2,5],
    draw:([jump,value])=>({
      curves:[['Left branch',sample(-2,-0.01,x=>x+1)],['Right branch',sample(0.01,2,x=>x+1+jump)]],
      markers:[[0,value]],markerLabels:['Assigned value f(0)'],openMarkers:[...[1,1+jump].filter((limit,index,all)=>all.indexOf(limit)===index&&Math.abs(limit-value)>1e-9).map((limit,index)=>({at:[0,limit],label:index===0?'Unassigned one-sided limit':'Unassigned right limit'}))],
      note:'Left limit $1$; right limit $'+fmt(1+jump)+'$; $f(0)='+fmt(value)+'$. '+(jump>0?'The one-sided limits disagree, so changing $f(0)$ cannot create continuity.':Math.abs(value-1)<1e-9?'Both limits and the assigned value are $1$: continuous at zero.':'Both limits are $1$, but $f(0)$ differs: a removable discontinuity.')
    }),
    question:'When is redefining only $f(0)$ enough to make this function continuous?',
    answer:'Exactly when $J=0$, so both one-sided limits equal $1$. Assign $f(0)=1$ to match that common limit. A nonzero jump needs a change to a whole branch.'
  },{
    afterSection:1,
    title:'Shrinking amplitude traps rapid oscillation',
    intro:'For $x\\ne0$, compare $x^2\\sin(k/x)$ with its envelopes $-x^2$ and $x^2$. The plotted point at zero assigns the extension $f(0)=0$; the limit follows independently from the squeeze bound.',
    controls:[range('Oscillation frequency $k$',1,10,1,3)],
    bounds:[-1,1,-1.1,1.1],
    draw:([k])=>({
      curves:[['Upper envelope $x^2$',sample(-1,1,x=>x*x)],['$x^2\\sin(k/x)$',sample(-1,1,x=>x===0?0:x*x*Math.sin(k/x),1200)],['Lower envelope $-x^2$',sample(-1,1,x=>-x*x)]],
      markers:[[0,0]],
      note:'For $x\\ne0$, $|x^2\\sin('+k+'/x)|\\le x^2$. For every $\\varepsilon>0$, $|x|<\\sqrt{\\varepsilon}$ gives magnitude below $\\varepsilon$. The plotted $f(0)=0$ is an extension; the bound proves the limit independently.'
    }),
    question:'Why does increasing $k$ not change the limit at zero?',
    answer:'The sine factor remains between $-1$ and $1$ whatever $k$ is. Both envelopes approach zero, so the squeeze theorem gives limit zero for every fixed $k$.'
  }],
  '05': [{
    afterSection:3,
    title:'A corner has two incompatible tangent slopes',
    intro:'For $f(x)=|x|$ at zero, the secant slope is $|h|/h$ for $h\\ne0$. Move $h$ across zero and compare the approach from each side.',
    controls:[range('Step $h$',-1,1,0.05,0.5)],
    bounds:[-1.2,1.2,-0.3,1.3],
    draw:([h])=>{
      const slope=Math.sign(h);
      return {
        curves:[['$f(x)=|x|$',sample(-1.2,1.2,Math.abs)],...(h===0?[]:[['Secant line through zero',sample(-1.2,1.2,x=>slope*x)]])],
        markers:[[0,0],...(h===0?[]:[[h,Math.abs(h)]])],
        note:h===0?'At $h=0$ the quotient divides by zero; nearby nonzero slopes must agree for a derivative.':'At $h='+fmt(h)+'$, $|h|/h='+slope+'$. Negative steps give $-1$ and positive steps give $+1$.'
      };
    },
    question:'Why does $|x|$ have no derivative at zero although both one-sided slopes exist?',
    answer:'A two-sided derivative is one limit. The left difference quotients approach $-1$ and the right ones approach $+1$, so that common limit does not exist.'
  },{
    afterSection:5,
    title:'How launch speed changes the whole flight',
    intro:'The idealized upward flight is $s(t)=v_0t-gt^2/2$ in metres. Change launch speed $v_0$ in m/s or positive gravitational acceleration $g$ in m/s²; compare with $v_0=14$ m/s and $g=10$ m/s².',
    controls:[range('Launch speed $v_0$ (m/s)',8,20,1,14),range('Gravity $g$ (m/s²)',8,12,0.5,10)],
    bounds:[0,5.5,0,27],
    draw:([speed,g])=>{
      const flight=2*speed/g,peak=speed/g,height=speed*speed/(2*g);
      return {
        curves:[['Reference flight',sample(0,2.8,t=>14*t-5*t*t)],['Selected flight',sample(0,flight,t=>speed*t-g*t*t/2)]],
        markers:[[peak,height],[flight,0]],
        note:'Apex at $t_{\\rm top}='+fmt(peak)+'$ s and height $H='+fmt(height)+'$ m; ground return at $t='+fmt(flight)+'$ s. The model assumes zero launch height and no air drag.'
      };
    },
    question:'At fixed positive $g$, what does doubling a positive launch speed $v_0$ do to apex time and height?',
    answer:'The formulas $t_{\\rm top}=v_0/g$ and $H=v_0^2/(2g)$ show that time doubles and height quadruples. This scaling assumes constant positive $g$ and no drag.'
  }],
  '06': [{
    afterSection:0,
    title:'A product changes through both factors',
    intro:'For $f(x)=(x^2+1)(x+b)$, move the tangent point $a$ and shift $b$. The readout separates the two product-rule contributions to $f^{\\prime}(a)=2a(a+b)+(a^2+1)$.',
    controls:[range('Shift $b$',-2,2,0.25,1),range('Tangent input $a$',-1,1,0.05,0.5)],
    bounds:[-2,2,-22,22],
    draw:([b,a])=>{
      const value=(a*a+1)*(a+b),first=2*a*(a+b),second=a*a+1,slope=first+second;
      return {
        curves:[['Product $f(x)$',sample(-2,2,x=>(x*x+1)*(x+b))],['Tangent line',sample(a-0.8,a+0.8,x=>value+slope*(x-a))]],
        markers:[[a,value]],
        note:'At $a='+fmt(a)+'$, differentiating $x^2+1$ contributes $2a(a+b)='+fmt(first)+'$; differentiating $x+b$ contributes $a^2+1='+fmt(second)+'$. Thus $f^{\\prime}(a)='+fmt(slope)+'$.'
      };
    },
    question:'Why must $f^{\\prime}(a)$ include both $2a(a+b)$ and $a^2+1$?',
    answer:'Both factors change. Differentiating $x^2+1$ contributes $2a(a+b)$ at $a$; differentiating $x+b$ contributes $a^2+1$.'
  },{
    afterSection:4,
    title:'A circle stays smooth when its graph slope fails',
    aspect:'equal',
    intro:'Move along the upper branch of $x^2+y^2=25$. The tangent becomes steeper near $(5,0)$, where $dy/dx=-x/y$ is not finite. The endpoint $x=5$ lies beyond the slider maximum.',
    controls:[range('Horizontal point $x$',-4.5,4.5,0.1,3)],
    bounds:[-5.5,5.5,-5.5,5.5],
    draw:([x])=>{
      const y=Math.sqrt(25-x*x),slope=-x/y;
      return {
        curves:[['Circle',sample(0,2*Math.PI,t=>t,240).map(([t])=>[5*Math.cos(t),5*Math.sin(t)])],['Local tangent',sample(x-0.7,x+0.7,u=>y+slope*(u-x))]],
        markers:[[x,y]],
        note:'At $('+fmt(x)+','+fmt(y)+')$, $dy/dx=-x/y='+fmt(slope)+'$. Extrapolating beyond the slider to $(5,0)$ gives vertical tangent $x=5$ and $dx/dy=0$.'
      };
    },
    question:'Does failure of $dy/dx$ at $(5,0)$ mean the circle has a sharp corner?',
    answer:'No. Its tangent is vertical at $(5,0)$. Locally the circle can be described as $x(y)$, with $dx/dy=0$ there; only the $y(x)$ graph description fails.'
  }],
  '07': [{
    afterSection:0,
    title:'A growing sphere amplifies the same radial rate',
    intro:'For a spherical model, $dV/dt=4\\pi r^2\\,dr/dt$. Change radius $r$ in cm and radial speed $dr/dt$ in cm/s to see why the same radial speed can produce different volume rates in cm³/s.',
    controls:[range('Radius $r$ (cm)',1,5,0.1,2),range('Radial rate $dr/dt$ (cm/s)',0.1,2,0.1,0.5)],
    bounds:[0,5.2,0,700],
    draw:([r,rate])=>{
      const output=4*Math.PI*r*r*rate;
      return {
        curves:[['Selected radial rate',sample(0,5.2,x=>4*Math.PI*x*x*rate)],['Reference rate 1 cm/s',sample(0,5.2,x=>4*Math.PI*x*x)]],
        markers:[[r,output]],
        note:'At $r='+fmt(r)+'$ cm and $dr/dt='+fmt(rate)+'$ cm/s, $dV/dt='+fmt(output)+'$ cm³/s. Doubling $r$ at fixed $dr/dt$ multiplies volume rate by four.'
      };
    },
    question:'Why does a fixed $dr/dt$ produce a larger $dV/dt$ for a larger sphere?',
    answer:'The surface-area factor $4\\pi r^2$ grows with radius. The chain rule multiplies that geometric sensitivity by radial speed.'
  },{
    afterSection:4,
    title:'A tangent estimate is not an error guarantee',
    intro:'A sphere has nominal radius $r=2$ m with possible error $\\pm\\eta$ m. Compare its cubic volume model $V(r)=4\\pi r^3/3$ with its tangent at $r=2$ and inspect both endpoints.',
    controls:[range('Radius tolerance $\\eta$ (m)',0.01,0.4,0.01,0.1)],
    bounds:[1.5,2.5,0,70],
    draw:([eta])=>{
      const volume=r=>4*Math.PI*r*r*r/3,nominal=volume(2),linear=r=>nominal+16*Math.PI*(r-2);
      const up=volume(2+eta)-nominal,down=nominal-volume(2-eta),estimate=16*Math.PI*eta;
      return {
        curves:[['Exact volume',sample(1.5,2.5,volume)],['Tangent at 2 m',sample(1.5,2.5,linear)]],
        markers:[[2-eta,volume(2-eta)],[2+eta,volume(2+eta)]],
        note:'Symmetric linear estimate $16\\pi\\eta='+fmt(estimate)+'$ m³. Exact upward change '+fmt(up)+' m³; downward magnitude '+fmt(down)+' m³. The upward change exceeds the estimate.'
      };
    },
    question:'Why is the tangent estimate $16\\pi\\eta$ not a guaranteed symmetric error bound?',
    answer:'Volume is cubic and convex for positive radius. Its positive second-order remainder makes the upward change exceed $16\\pi\\eta$; exact endpoints give the modeled interval.'
  }],
  '08': [{
    afterSection:0,
    title:'The interval decides which extreme wins',
    intro:'For $f(x)=x^2-4x+1$ on $[0,b]$, move the right endpoint $b$. The interior stationary point $x=2$ matters only when it lies in the interval; endpoints remain candidates.',
    controls:[range('Right endpoint $b$',1,4.5,0.1,3)],
    bounds:[0,4.5,-4,4],
    draw:([b])=>{
      const f=x=>x*x-4*x+1,minX=b<2?b:2,maxXs=f(b)>1?[b]:f(b)===1?[0,b]:[0];
      return {
        curves:[['$f(x)$ on selected interval',sample(0,b,f)]],
        markers:[[minX,f(minX)],...maxXs.map(x=>[x,f(x)])],
        note:'On $[0,'+fmt(b)+']$, minimum '+fmt(f(minX))+' occurs at $x='+fmt(minX)+'$; maximum '+fmt(f(maxXs[0]))+' occurs at x='+maxXs.map(fmt).join(' and ')+'. Compare all included critical points and endpoints.'
      };
    },
    question:'Why can the formula for an interior stationary point not settle an absolute-extremum problem alone?',
    answer:'The point might lie outside the chosen interval, and an endpoint may have a larger or smaller value. The extreme value theorem guarantees a winner on the closed interval, but all candidates must be compared.'
  },{
    afterSection:1,
    title:'The mean-value tangent parallels the secant',
    intro:'For $f(x)=x^2$ on $[a,3]$, the mean value theorem gives an interior tangent with the same slope as the secant. Move $a$ and predict $c=(a+3)/2$.',
    controls:[range('Left endpoint $a$',0,2,0.1,1)],
    bounds:[0,3.5,0,12.5],
    draw:([a])=>{
      const b=3,c=(a+b)/2,slope=a+b,secant=x=>a*a+slope*(x-a),tangent=x=>c*c+2*c*(x-c);
      return {
        curves:[['$f(x)=x^2$',sample(0,3.5,x=>x*x)],['Secant',sample(a,b,secant)],['Parallel tangent',sample(c-0.6,c+0.6,tangent)]],
        markers:[[a,a*a],[b,b*b],[c,c*c]],
        note:'Secant slope $'+fmt(slope)+'$. At $c=(a+3)/2='+fmt(c)+'$, $f^{\\prime}(c)=2c='+fmt(2*c)+'$. This $c$ lies strictly between $a$ and $3$.'
      };
    },
    question:'Does the theorem say that every tangent inside the interval has the secant slope?',
    answer:'No. The theorem guarantees at least one interior matching point under continuity and differentiability. For this quadratic, $f^{\\prime}(c)=2c$ matches the secant slope at exactly one point.'
  }],
  '09': [{
    afterSection:2,
    title:'A shrinking bracket is a location certificate',
    intro:'Bisect $f(x)=x^2-c$ on $[1,2]$. Change completed halvings $n$ or target $c$. Two vertical guides show the bracket, while a dot marks its midpoint.',
    controls:[range('Halving limit $n$',0,10,1,5),range('Target $c$',1.2,3.8,0.1,2)],
    bounds:[0.8,2.2,-3,3],
    draw:([n,c])=>{
      const f=x=>x*x-c;let a=1,b=2;
      for(let i=0;i<n;i++){const m=a+(b-a)/2;if(f(m)===0){a=m;b=m;break;}if(Math.sign(f(m))===Math.sign(f(a)))a=m;else b=m;}
      const middle=a+(b-a)/2;
      return {
        curves:[['$f(x)=x^2-c$',sample(0.8,2.2,f)],['Zero line',[[0.8,0],[2.2,0]]]],
        guides:[{axis:'x',value:a},{axis:'x',value:b}],
        markers:[[middle,f(middle)],[Math.sqrt(c),0]],
        note:'After at most $n='+n+'$ halvings, bracket $['+fmt(a)+','+fmt(b)+']$ has width '+fmt(b-a)+'. Its midpoint is within half-width '+fmt((b-a)/2)+' of the root; actual error is '+fmt(Math.abs(middle-Math.sqrt(c)))+'.'
      };
    },
    question:'Does a small value of $|f(\\text{midpoint})|$ give the same location guarantee as a narrow bracket?',
    answer:'No. Vertical rescaling changes the residual without moving the root. The bracket half-width bounds input error because continuity and opposite endpoint signs, or an endpoint root, keep a root inside.'
  },{
    afterSection:3,
    title:'Newton steps depend on the initial tangent',
    intro:'Start Newton iteration for $f(x)=x^2-2$ at a positive $x_0$. Choose update $n$ to inspect. The next estimate $x_{n+1}$ is the computed axis intercept of the tangent at $x_n$; the drawn tangent is a local segment.',
    controls:[range('Initial estimate $x_0$',0.3,3,0.1,1.5),range('Inspect update $n$',0,5,1,2)],
    bounds:[0,3.6,-2.3,11],
    draw:([start,n])=>{
      const f=x=>x*x-2;let x=start;
      for(let i=0;i<n;i++)x=(x+2/x)/2;
      const slope=2*x,next=x-f(x)/slope;
      const left=Math.max(0,x-0.65),right=Math.min(3.6,x+0.65);
      return {
        curves:[['$f(x)=x^2-2$',sample(0,3.6,f)],['Tangent at $x_n$',sample(left,right,t=>f(x)+slope*(t-x))],['Zero line',[[0,0],[3.6,0]]]],
        markers:[[x,f(x)],[next,0],[Math.sqrt(2),0]],
        note:'At update $n='+n+'$, $x_n='+fmt(x)+'$ and $f(x_n)='+mathFmt(f(x))+'$. Tangent slope $2x_n='+fmt(slope)+'$; its computed zero is $x_{n+1}='+fmt(next)+'$. Next-step error is '+fmt(Math.abs(next-Math.sqrt(2)))+'.'
      };
    },
    question:'What happens when the initial estimate $x_0$ approaches zero?',
    answer:'The derivative $2x$ approaches zero while $f(x)$ stays near $-2$. Dividing by the tiny slope produces a very large proposed step; at $x=0$ the Newton update is undefined.'
  }],
  '10': [{
    afterSection:2,
    title:'Upper and lower sums trap every sample choice',
    intro:'For $f(x)=x^2$ on $[0,1]$, left rectangles are lower sums and right rectangles are upper sums for the displayed equal partition. Every tagged sum on that partition lies between them.',
    controls:[range('Equal subintervals $n$',2,24,1,6)],
    bounds:[0,1,0,1.1],
    draw:([n])=>{
      const rectangles=[];let lower=0,upper=0;
      for(let i=0;i<n;i++){
        const x=i/n,height=x*x;
        rectangles.push({x,y:0,width:1/n,height});
        lower+=height/n;upper+=((i+1)/n)**2/n;
      }
      return {
        rectangles,curves:[['$f(x)=x^2$',sample(0,1,x=>x*x)]],
        note:'With $n='+n+'$, lower sum '+fmt(lower)+' $\\le$ every tagged sum $\\le$ upper sum '+fmt(upper)+'. Their gap is $1/n='+fmt(1/n)+'$; both approach $1/3$.'
      };
    },
    question:'Why does agreement of the upper and lower sums prove more than convergence of midpoint sums?',
    answer:'Every tag choice on the same equal partition is trapped between lower and upper sums. Their gap tends to zero, so no choice of samples can have a different limit.'
  },{
    afterSection:4,
    title:'Signed accumulation and total area answer different questions',
    intro:'Move the zero of $f(x)=x-c$ across $[0,1]$. The left triangle lies below the axis and contributes negatively; the right triangle contributes positively. Compare $\\int_0^1(x-c)\\,dx=1/2-c$ with $\\int_0^1|x-c|\\,dx$.',
    controls:[range('Zero location $c$',0,1,0.05,0.5)],
    bounds:[0,1,-1.1,1.1],
    draw:([c])=>({
      polygons:[[[0,0],[0,-c],[c,0]],[[c,0],[1,1-c],[1,0]]],
      curves:[['$f(x)=x-c$',sample(0,1,x=>x-c)],['Zero line',[[0,0],[1,0]]]],
      markers:[[c,0]],
      note:'Negative contribution $-'+fmt(c*c/2)+'$; positive contribution $'+fmt((1-c)*(1-c)/2)+'$. Signed integral $1/2-c='+fmt(0.5-c)+'$; total area '+fmt((c*c+(1-c)*(1-c))/2)+'.'
    }),
    question:'When $c=1/2$, why is the signed integral zero but total area positive?',
    answer:'The two triangular regions each have area $1/8$. Their signed contributions cancel, while their absolute areas add to $1/4$.'
  }],
  '11': [{
    afterSection:1,
    title:'A jump in rate makes a corner in accumulation',
    intro:'From $t=-1$ to $t=0$ the rate is $-1$. At $t=0$ the rate is $f(0)=-1$; to the right of $0$ the rate is $J$. Compare the rate with $A(x)=\\int_{-1}^xf(t)\\,dt$ and watch its one-sided slopes.',
    controls:[range('Rate after zero $J$',-1,2,0.1,1)],
    bounds:[-1.1,1.1,-2.2,2.2],
    draw:([j])=>({
      curves:[['Rate before zero',sample(-1,-0.005,()=>-1)],['Rate after zero',sample(0,1,()=>j)],['Accumulation $A(x)$',sample(-1,1,x=>x<0?-x-1:-1+j*x)]],
      markers:[[0,-1]],openMarkers:j===-1?[]:[{at:[0,j],label:'Right-hand rate limit, excluded at zero'}],
      note:'$A(0)=-1$. Left slope $-1$; right slope $'+fmt(j)+'$. '+(Math.abs(j+1)<1e-9?'The slopes match, so $A$ is differentiable at zero.':'The slopes disagree, so $A$ is continuous but not differentiable at zero.')
    }),
    question:'Can assigning a different value to $f(0)$ repair the corner in $A$?',
    answer:'No. One point contributes no integral area. The rates on either side determine the one-sided slopes of $A$; they agree only when $J=-1$.'
  },{
    afterSection:5,
    title:'A moving window gains and loses boundary strips',
    intro:'For $W(x)=\\int_x^{x+h}t^2\\,dt$, moving $x$ shifts a window of fixed width $h$. The incoming strip at $x+h$ competes with the outgoing strip at $x$.',
    controls:[range('Window start $x$',0,2,0.1,0.8),range('Window width $h$',0.5,2,0.1,1.2)],
    bounds:[0,4.2,0,17],
    draw:([x,h])=>({
      areas:[sample(x,x+h,t=>t*t)],
      curves:[['Rate $f(t)=t^2$',sample(0,4.1,t=>t*t)]],
      guides:[{axis:'x',value:x},{axis:'x',value:x+h}],
      markers:[[x,x*x],[x+h,(x+h)*(x+h)]],
      note:'$W(x)='+fmt(((x+h)**3-x**3)/3)+'$. Holding $h$ fixed, outgoing height $x^2='+fmt(x*x)+'$ and incoming height $(x+h)^2='+fmt((x+h)*(x+h))+'$. Thus $dW/dx=(x+h)^2-x^2='+fmt((x+h)*(x+h)-x*x)+'$.'
    }),
    question:'Why does the derivative use both endpoint heights, rather than the area already inside the window?',
    answer:'Hold $h$ fixed. A small shift removes a strip of height $f(x)$ at the left and adds one of height $f(x+h)$ at the right. Their net rate is $dW/dx=(x+h)^2-x^2$.'
  }],
  '12': [{
    afterSection:0,
    title:'A missing inner derivative cannot be wished away',
    intro:'Compare target $f(x)=\\cos(x^2)$ with the derivative of candidate $F(x)=c\\sin(x^2)$. Adjust $c$ and inspect an input. Matching at one point does not establish an identity.',
    controls:[range('Candidate coefficient $c$',0.2,0.7,0.05,0.5),range('Inspect input $x$',0.2,1.8,0.1,1)],
    bounds:[0,1.8,-2.7,2.7],
    draw:([c,a])=>{
      const target=x=>Math.cos(x*x),candidate=x=>2*c*x*Math.cos(x*x);
      return {
        curves:[['Target $\\cos(x^2)$',sample(0,1.8,target)],['Derivative of $c\\sin(x^2)$',sample(0,1.8,candidate)]],
        markers:[[a,target(a)],[a,candidate(a)]],
        note:'At $x='+fmt(a)+'$, target $\\cos(x^2)='+fmt(target(a))+'$ and candidate $F^{\\prime}(x)='+fmt(candidate(a))+'$. The extra chain factor $2cx$ cannot equal $1$ throughout an interval for fixed $c$.'
      };
    },
    question:'If the two plotted values coincide at the inspected $x$, have you found an antiderivative?',
    answer:'No. Differentiation gives $F^{\\prime}(x)=2cx\\cos(x^2)$. The extra chain factor $2cx$ cannot equal $1$ throughout an interval for fixed $c$. Isolated agreement can also occur where $\\cos(x^2)=0$.'
  },{
    afterSection:2,
    title:'A branch choice controls a radical substitution',
    aspect:'equal',
    intro:'The upper semicircle has $y=\\sqrt{a^2-x^2}$. For $a>0$, set $x=a\\sin\\theta$ with $-\\pi/2<\\theta<\\pi/2$; then $\\cos\\theta>0$ and $y=a\\cos\\theta$. Move radius $a$ and ratio $x/a$.',
    controls:[range('Radius $a$',1,3,0.1,2),range('Ratio $x/a$',-0.9,0.9,0.1,0.5)],
    bounds:[-3.2,3.2,0,3.2],
    draw:([a,ratio])=>{
      const x=a*ratio,y=Math.sqrt(a*a-x*x),theta=Math.asin(ratio);
      return {
        curves:[['Upper semicircle $y=\\sqrt{a^2-x^2}$',sample(-a,a,t=>Math.sqrt(Math.max(0,a*a-t*t)))],['Radius',[[0,0],[x,y]]],['Vertical leg',[[x,0],[x,y]]]],
        markers:[[x,y],[x,0]],
        note:'$x='+fmt(x)+'$, $\\theta=\\arcsin(x/a)='+fmt(theta)+'$ radians. $\\cos\\theta='+fmt(Math.cos(theta))+'>0$, so $\\sqrt{a^2-x^2}='+fmt(y)+'=a\\cos\\theta$. The positive branch matters.'
      };
    },
    question:'Why would $\\sqrt{a^2-x^2}=a\\cos\\theta$ be unsafe where $\\cos\\theta$ is negative?',
    answer:'A square root is nonnegative. Substitution gives $\\sqrt{a^2-a^2\\sin^2\\theta}=a|\\cos\\theta|$ for $a>0$, so dropping the absolute value requires $\\cos\\theta\\ge0$.'
  }],
  '13': [{
    afterSection:0,
    title:'Crossing curves require an absolute separation',
    intro:'The lines $y=x$ and $y=-x$ exchange which one is above at zero. Widen $[-a,a]$ and compare signed difference with geometric area $\\int_{-a}^a|2x|\\,dx=2a^2$.',
    controls:[range('Half-width $a$',0.2,1.5,0.1,1)],
    bounds:[-1.6,1.6,-1.6,1.6],
    draw:([a])=>({
      polygons:[[[-a,-a],[-a,a],[0,0]],[[0,0],[a,a],[a,-a]]],
      curves:[['$y=x$',sample(-1.6,1.6,x=>x)],['$y=-x$',sample(-1.6,1.6,x=>-x)]],
      markers:[[-a,a],[0,0],[a,a]],
      note:'On $[-'+fmt(a)+','+fmt(a)+']$, the signed integral of $2x$ is zero. Geometric area $\\int_{-a}^a|2x|\\,dx=2a^2='+fmt(2*a*a)+'$. Split at $x=0$ where the top curve changes.'
    }),
    question:'Why does integrating $y=x$ minus $y=-x$ over the whole symmetric interval miss the geometric area?',
    answer:'The vertical difference $2x$ is negative on the left and positive on the right, so signed contributions cancel. Geometric area uses $|2x|$.'
  },{
    afterSection:5,
    title:'Pressure and width weight the deep strips',
    intro:'For a gate widening downward, use normalized pressure $p(y)=y$ and width $w(y)=ky$ on $0\\le y\\le H$. Normalized force density is $ky^2$; physical force multiplies its integral by $\\rho g$.',
    controls:[range('Gate depth $H$',0.5,2.5,0.1,2),range('Width slope $k$',0.5,1.5,0.1,1)],
    bounds:[0,2.7,0,10],
    draw:([h,k])=>({
      areas:[sample(0,h,y=>k*y*y)],
      curves:[['Normalized force density $p(y)w(y)=ky^2$',sample(0,2.6,y=>k*y*y)]],
      markers:[[h,k*h*h]],
      note:'Normalized force $kH^3/3='+fmt(k*h**3/3)+'$. Resultant depth $3H/4='+fmt(3*h/4)+'$ below the surface; geometric centroid $2H/3$. Multiply by $\\rho g$ for physical force.'
    }),
    question:'Why is the pressure center deeper than the geometric center of the triangular gate?',
    answer:'Pressure and width both increase with depth. A strip at $y$ has normalized force weight proportional to $y^2$, placing the force center at $3H/4$ rather than the geometric centroid $2H/3$.'
  }],
  '14': [{
    afterSection:1,
    title:'Quadrature accuracy depends on the curve and the rule',
    intro:'Approximate $\\int_0^1x^4\\,dx=1/5$ using an even number $n$ of equal panels. The piecewise straight curve shows the trapezoidal model; the readout compares $T_n$ with Simpson’s $S_n$.',
    controls:[range('Even panel count $n$',2,20,2,4)],
    bounds:[0,1,0,1.1],
    draw:([n])=>{
      const h=1/n,values=Array.from({length:n+1},(_,i)=>(i*h)**4);
      let trap=h*(values[0]/2+values[n]/2),simpson=(values[0]+values[n])*h/3;
      for(let i=1;i<n;i++){trap+=h*values[i];simpson+=h*(i%2?4:2)*values[i]/3;}
      return {
        curves:[['$f(x)=x^4$',sample(0,1,x=>x**4)],['Trapezoid chord model',values.map((y,i)=>[i*h,y])]],
        note:'$n='+n+'$. Trapezoid $T_n='+fmt(trap)+'$ (error '+fmt(trap-0.2)+'); Simpson $S_n='+fmt(simpson)+'$ (error '+fmt(simpson-0.2)+'). Exact $\\int_0^1x^4\\,dx=1/5=0.2$. Both rules overestimate.'
      };
    },
    question:'Why is Simpson’s rule not exact for $x^4$ despite using quadratic interpolants?',
    answer:'Its symmetry makes it exact through cubic degree, but $x^4$ has degree four. Its fourth-derivative error term is nonzero, so finite-panel $S_n$ need not equal $1/5$.'
  },{
    afterSection:4,
    title:'A finite principal value can hide two divergent sides',
    intro:'For $1/x$ on $[-1,1]$, remove $[-\\varepsilon,q\\varepsilon]$ around zero. The two one-sided integrals diverge separately, while their coupled sum is $-\\ln q$. Only $q=1$ uses symmetric cutoffs and gives the Cauchy principal value.',
    controls:[range('Left cutoff $\\varepsilon$',0.05,0.45,0.05,0.2),range('Right/left ratio $q$',1,2,0.25,1)],
    bounds:[0.05,0.45,-3.2,3.2],
    draw:([epsilon,q])=>({
      curves:[['Left integral $\\ln\\varepsilon$',sample(0.05,0.45,e=>Math.log(e))],['Right integral $-\\ln(q\\varepsilon)$',sample(0.05,0.45,e=>-Math.log(q*e))],['Coupled sum $-\\ln q$',[[0.05,-Math.log(q)],[0.45,-Math.log(q)]]]],
      markers:[[epsilon,Math.log(epsilon)],[epsilon,-Math.log(q*epsilon)]],
      note:'At $\\varepsilon='+fmt(epsilon)+'$ and $q='+fmt(q)+'$, left '+fmt(Math.log(epsilon))+', right '+fmt(-Math.log(q*epsilon))+', coupled sum $-\\ln q='+fmt(-Math.log(q))+'$. As $\\varepsilon\\to0$, the sides diverge separately.'
    }),
    question:'Why does $q=1$ producing sum zero fail to prove the ordinary integral is zero?',
    answer:'The ordinary integral requires two finite one-sided limits. The left tends to $-\\infty$ and right to $+\\infty$; symmetric $q=1$ cancellation gives a principal value. Other $q$ values give asymmetric coupled limits.'
  }],
  '15': [{
    afterSection:0,
    title:'An epsilon claim covers every later sequence term',
    intro:"For $a_n=1/n$, choose an absolute tolerance $\\varepsilon>0$. The guide marks $\\varepsilon$; the first safe index $N=\\lfloor1/\\varepsilon\\rfloor+1$ has $a_n<\\varepsilon$ for every $n\\ge N$.",
    controls:[range('Tolerance ε',0.05,0.5,0.05,0.2)],
    bounds:[1,40,0,1.1],
    draw:([epsilon])=>{
      const N=Math.floor(1/epsilon)+1;
      return {
        curves:[['Sequence aₙ=1/n (joined as a guide)',Array.from({length:40},(_,i)=>[i+1,1/(i+1)])],['Tolerance ε',[[1,epsilon],[40,epsilon]]]],
        guides:[{axis:'x',value:N}],
        markers:[[N,1/N]],
        note:'$\\varepsilon='+fmt(epsilon)+'$. Choose $N='+N+'$ because $n>1/\\varepsilon='+fmt(1/epsilon)+'$ guarantees $1/n<\\varepsilon$. The curve joins integer-indexed points only as a guide.'
      };
    },
    question:"Why is finding one term $a_n<\\varepsilon$ insufficient to prove convergence?",
    answer:"The definition requires every term from some index $N$ onward to stay within $\\varepsilon$ of the limit. For $a_n=1/n$, monotone decrease provides the all-later guarantee."
  },{
    afterSection:3,
    title:'Integral bounds certify an unseen series tail',
    intro:"For decreasing positive terms $n^{-p}$ with $p>1$, the omitted tail $R_N=\\sum_{n=N+1}^{\\infty}n^{-p}$ lies between $\\int_{N+1}^{\\infty}x^{-p}\\,dx$ and $\\int_N^{\\infty}x^{-p}\\,dx$.",
    controls:[range('Exponent p',1.2,2.5,0.1,1.5),range('Terms retained N',5,30,1,10)],
    bounds:[1,40,0,1.1],
    draw:([p,N])=>{
      const lower=(N+1)**(1-p)/(p-1),upper=N**(1-p)/(p-1);
      return {
        areas:[sample(N,40,x=>x**(-p))],
        curves:[['Continuous comparison x⁻ᵖ',sample(1,40,x=>x**(-p))]],
        guides:[{axis:'x',value:N},{axis:'x',value:N+1}],
        note:'For $p='+fmt(p)+'$ and $N='+N+'$, the tail bound is $'+fmt(lower)+'\\le R_N\\le'+fmt(upper)+'$. Shading stops at $40$; both bounds include the entire infinite tail.'
      };
    },
    question:"Why is $1/(N+1)^p$ not a general bound for the entire tail $R_N$?",
    answer:"The tail contains infinitely many positive terms. Its integral upper bound can greatly exceed $1/(N+1)^p$, especially when $p$ is close to $1$."
  }],
  '16': [{
    afterSection:0,
    title:'A signed sum can settle while its magnitudes keep growing',
    intro:"Compare partial sums of $\\sum_{n=1}^{\\infty}(-1)^{n-1}/n^p$ and $\\sum_{n=1}^{\\infty}1/n^p$. The signed series converges for every $p>0$; the positive series converges only for $p>1$.",
    controls:[range('Exponent p',0.8,1.5,0.1,1),range('Inspect terms N',5,80,1,30)],
    bounds:[1,80,0,12],
    draw:([p,N])=>{
      let signed=0,absolute=0,sn=0,an=0;
      const signedPoints=[],absolutePoints=[];
      for(let n=1;n<=80;n++){
        const term=1/n**p;absolute+=term;signed+=(n%2?1:-1)*term;
        signedPoints.push([n,signed]);absolutePoints.push([n,absolute]);
        if(n===N){sn=signed;an=absolute;}
      }
      return {
        curves:[['Signed partial sums',signedPoints],['Absolute partial sums',absolutePoints]],
        markers:[[N,sn],[N,an]],
        note:'$p='+fmt(p)+'$, $N='+N+'$: signed $S_N='+fmt(sn)+'$, absolute $A_N='+fmt(an)+'$. '+(p>1?'Both series converge absolutely.':'The signed series converges by alternation, while the positive $p$-series diverges.')
      };
    },
    question:"Does a flat-looking absolute partial-sum plot at $N=80$ prove absolute convergence?",
    answer:"No. A finite plot cannot decide an infinite tail. The $p$-series theorem gives absolute convergence only for $p>1$; at $p=1$ the positive sum grows slowly without bound."
  },{
    afterSection:2,
    title:'The root test has a real boundary case',
    intro:"For $c>0$, let $a_n=[n/(cn+1)]^n$. Its root $\\sqrt[n]{a_n}=n/(cn+1)$ approaches $1/c$. Move $c$ across $1$ and compare with the root-test threshold.",
    controls:[range('Denominator scale c',0.7,1.5,0.1,1.2),range('Inspect index n',1,40,1,15)],
    bounds:[1,40,0,1.7],
    draw:([c,N])=>{
      const root=n=>n/(c*n+1),limit=1/c;
      return {
        curves:[['nth root of aₙ',Array.from({length:40},(_,i)=>[i+1,root(i+1)])],['Root-test threshold 1',[[1,1],[40,1]]]],
        markers:[[N,root(N)]],
        note:'At $n='+N+'$, $\\sqrt[n]{a_n}='+fmt(root(N))+'$; limit $1/c='+fmt(limit)+'$. '+(c>1?'The root limit is below $1$: absolute convergence.':c<1?'The root limit is above $1$: divergence.':'At $c=1$, the root test is inconclusive, but $a_n\\to e^{-1}\\ne0$: divergence.')
      };
    },
    question:"At $c=1$, why is an inconclusive root test not the final classification?",
    answer:"The terms $[n/(n+1)]^n\\to e^{-1}\\ne0$. The necessary term test proves divergence, even though the root limit equals $1$."
  }],
  '17': [{
    afterSection:0,
    title:'A radius does not decide either endpoint',
    intro:"Inspect partial sums of $\\sum_{n=1}^{\\infty}x^n/n$. The radius is $1$, but $x=-1$ converges conditionally while $x=1$ gives the divergent harmonic series.",
    controls:[range('Input x',-1.05,1.05,0.05,0.5),range('Inspect partial sum N',5,40,1,20)],
    bounds:[1,40,-1,8.5],
    draw:([x,N])=>{
      let sum=0,selected=0;const points=[];
      for(let n=1;n<=40;n++){sum+=x**n/n;points.push([n,sum]);if(n===N)selected=sum;}
      const status=Math.abs(x)<1-1e-8?'Absolute convergence inside the radius.':Math.abs(x+1)<1e-8?'Conditional convergence at the left endpoint.':Math.abs(x-1)<1e-8?'Divergence at the right endpoint.':'Divergence outside the radius; terms eventually fail to tend to zero.';
      return {
        curves:[['Partial sums of Σxⁿ/n',points]],
        markers:[[N,selected]],
        note:'$x='+fmt(x)+'$, $S_{'+N+'}='+fmt(selected)+'$. '+status+' A finite plot alone cannot classify the infinite tail.'
      };
    },
    question:"Why do $x=-1$ and $x=1$ behave differently despite equal distance from the center?",
    answer:"At $x=1$ the terms $1/n$ are positive and the series diverges. At $x=-1$ they alternate with decreasing magnitude, giving conditional convergence."
  },{
    afterSection:5,
    title:'One Taylor bound protects an entire interval',
    intro:"Approximate $e^x$ by its degree-$N$ Maclaurin polynomial on $[-d,d]$. The horizontal certificate $e^d d^{N+1}/(N+1)!$ bounds the absolute error for every input there.",
    controls:[range('Degree N',2,9,1,4),range('Half-width d',0.1,1,0.1,0.5)],
    bounds:[-1,1,0,0.5],
    draw:([N,d])=>{
      const factorial=n=>{let value=1;for(let k=2;k<=n;k++)value*=k;return value;};
      const polynomial=x=>{let sum=1,term=1;for(let k=1;k<=N;k++){term*=x/k;sum+=term;}return sum;};
      const bound=Math.exp(d)*d**(N+1)/factorial(N+1);
      const errors=sample(-d,d,x=>Math.abs(Math.exp(x)-polynomial(x)));
      return {
        curves:[['Sampled absolute error',errors],['Uniform Taylor bound',[[-d,bound],[d,bound]]]],
        guides:[{axis:'x',value:-d},{axis:'x',value:d}],
        note:'Degree $N='+N+'$ on $[-'+mathFmt(d)+','+mathFmt(d)+']$: every absolute error is at most $'+mathFmt(bound)+'$. Largest sampled error is $'+mathFmt(Math.max(...errors.map(([,error])=>error)))+'$. The derivative bound certifies every input.'
      };
    },
    question:"Why bound the derivative over all of $[-d,d]$ rather than only at $x=0$?",
    answer:"Taylor’s remainder uses a higher derivative at an unknown point between $0$ and each requested $x$. The bound $e^d d^{N+1}/(N+1)!$ covers all such points."
  }],
  '18': [{
    afterSection:3,
    title:'A polar curve sweeps area sector by sector',
    aspect:'equal',
    intro:"For the cardioid $r=1+\\cos\\theta$, move the ending angle. The region is swept once as $\\theta$ runs from $0$ to $2\\pi$; area accumulates as $\\tfrac12\\int r^2\\,d\\theta$.",
    controls:[range('Ending angle θ (steps of π/40)',0,80,1,40)],
    bounds:[-0.5,2.2,-1.6,1.6],
    draw:([step])=>{
      const end=step*(2*Math.PI/80);
      const point=angle=>{const radius=1+Math.cos(angle);return [radius*Math.cos(angle),radius*Math.sin(angle)];};
      const traced=sample(0,end,a=>a).map(([angle])=>point(angle));
      const full=sample(0,2*Math.PI,a=>a).map(([angle])=>point(angle));
      const area=0.75*end+Math.sin(end)+Math.sin(2*end)/8;
      return {
        polygons:[[[0,0],...traced]],
        curves:[['Full cardioid',full],['Traced boundary',traced]],
        markers:[point(end)],
        note:'$\\theta='+fmt(end)+'$ radians. Swept area $3\\theta/4+\\sin\\theta+\\sin(2\\theta)/8='+fmt(area)+'$. A full turn has area $3\\pi/2\\approx'+fmt(1.5*Math.PI)+'$.'
      };
    },
    question:"Why does polar area use $r^2/2$ rather than $r$?",
    answer:"A thin sector of width $d\\theta$ has area approximately $r^2d\\theta/2$. Radius alone has length units, while area needs squared length."
  },{
    afterSection:5,
    title:'Complementary launch angles trade height for time',
    intro:"In the ideal level-ground model with $v=20$ m/s and $g=10$ m/s², compare a selected projectile with the $45^\\circ$ reference. Angles $\\theta$ and $90^\\circ-\\theta$ have equal range and generally different flight profiles, except at $45^\\circ$ when they coincide.",
    controls:[range('Launch angle θ (degrees)',15,75,5,30)],
    bounds:[0,42,0,20],
    draw:([degrees])=>{
      const v=20,g=10,theta=degrees*Math.PI/180,T=2*v*Math.sin(theta)/g;
      const trajectory=(angle)=>{const flight=2*v*Math.sin(angle)/g;return sample(0,flight,t=>t).map(([t])=>[v*Math.cos(angle)*t,v*Math.sin(angle)*t-g*t*t/2]);};
      const distance=v*v*Math.sin(2*theta)/g,height=v*v*Math.sin(theta)**2/(2*g);
      return {
        curves:[['45° reference trajectory',trajectory(Math.PI/4)],['Selected trajectory',trajectory(theta)]],
        markers:[[distance/2,height],[distance,0]],
        note:'$\\theta='+degrees+'^\\circ$. Return time $T='+fmt(T)+'$ s, range $'+fmt(distance)+'$ m, apex height $'+fmt(height)+'$ m. Angle $'+(90-degrees)+'^\\circ$ has the same range.'
      };
    },
    question:"Why do complementary angles $\\theta$ and $90^\\circ-\\theta$ have equal range but generally different flight times?",
    answer:"Range $(v^2/g)\\sin(2\\theta)$ is unchanged by $\\theta\\mapsto90^\\circ-\\theta$. Time $T=2v\\sin\\theta/g$ generally changes; at $45^\\circ$ the angles coincide."
  }],
  '19': [{
    afterSection:1,
    title:'Dot and cross products measure different parts of an angle',
    aspect:'equal',
    intro:"Fix $\\mathbf u=(1,0)$ and turn $\\mathbf v$ through an angle $\\theta$ with adjustable length. The dot product $\\mathbf u\\cdot\\mathbf v$ measures alignment; $|\\mathbf u\\times\\mathbf v|$ measures the parallelogram area.",
    controls:[range('Angle θ (degrees)',0,180,5,60),range('Length of v',0.5,1.5,0.1,1)],
    bounds:[-1.7,1.7,-1.7,1.7],
    draw:([degrees,length])=>{
      const theta=degrees*Math.PI/180,x=degrees===90?0:degrees===0?length:degrees===180?-length:length*Math.cos(theta),y=degrees===0||degrees===180?0:degrees===90?length:length*Math.sin(theta);
      return {
        curves:[['Projection of v onto u',[[0,0],[x,0]]]],
        arrows:[{from:[0,0],to:[1,0],kind:0},{from:[0,0],to:[x,y],kind:1}],
        markers:[[x,0]],
        note:'$\\theta='+degrees+'^\\circ$, $\\|\\mathbf v\\|='+fmt(length)+'$. Alignment $\\mathbf u\\cdot\\mathbf v='+fmt(x)+'$; area $|\\mathbf u\\times\\mathbf v|='+fmt(Math.abs(y))+'$. Projection is $('+fmt(x)+',0)$.'
      };
    },
    question:"At $\\theta=90^\\circ$, why is $\\mathbf u\\cdot\\mathbf v$ zero while $|\\mathbf u\\times\\mathbf v|$ is large?",
    answer:"Perpendicular vectors have no parallel component, so $\\mathbf u\\cdot\\mathbf v=0$. At fixed lengths, $|\\mathbf u\\times\\mathbf v|$ is maximal."
  },{
    afterSection:2,
    title:'A zero line-plane denominator has two meanings',
    intro:"This planar cross-section compares $x+y=1$ with a candidate line $y=b+mx$. At $m=-1$ their directions are parallel; $b$ decides whether they coincide or miss.",
    controls:[range('Line slope m',-2,2,0.5,0),range('Line intercept b',0,2,0.5,0.5)],
    bounds:[-3,3,-3,3],
    draw:([m,b])=>{
      const parallel=Math.abs(m+1)<1e-9,contained=parallel&&Math.abs(b-1)<1e-9;
      const crossing=parallel?null:(1-b)/(m+1);
      return {
        curves:[['Plane cross-section x+y=1',sample(-3,3,x=>1-x)],['Candidate line y=b+mx',sample(-3,3,x=>b+m*x)]],
        markers:crossing===null?[]:[[crossing,1-crossing]],
        note:parallel?(contained?'$m=-1$, $b=1$: the line coincides with $x+y=1$.':'$m=-1$, $b='+fmt(b)+'$: the directions are parallel and the lines miss.'): '$m='+fmt(m)+'$, $b='+fmt(b)+'$: one intersection $('+fmt(crossing)+','+fmt(1-crossing)+')$. The denominator $m+1$ is nonzero.'
      };
    },
    question:"Why is division by $m+1$ invalid at $m=-1$, and what check remains?",
    answer:"When $m=-1$, compare $b$ with $1$: $b=1$ makes the whole line coincide with $x+y=1$; any other $b$ gives no intersection."
  }],
  '20': [{
    afterSection:1,
    title:'A level set lives inside the function domain',
    aspect:'equal',
    intro:"For $f(x,y)=\\sqrt{9-x^2-y^2}$, the domain is the closed disk $x^2+y^2\\le9$. Choose an output $c$ and see the inputs with that value.",
    controls:[range('Output level c',0,3,0.1,1.5)],
    bounds:[-3.3,3.3,-3.3,3.3],
    draw:([c])=>{
      const circle=radius=>sample(0,2*Math.PI,t=>t).map(([t])=>[radius*Math.cos(t),radius*Math.sin(t)]);
      const levelRadius=Math.sqrt(Math.max(0,9-c*c));
      return {
        polygons:[circle(3)],
        curves:[['Included domain boundary x²+y²=9',circle(3)],['Current level f=c',circle(levelRadius)]],
        markers:[[levelRadius,0]],
        note:'$c='+fmt(c)+'$. Level equation $x^2+y^2=9-c^2$ has radius $'+fmt(levelRadius)+'$. At $c=0$ this is the included boundary; at $c=3$ it is the origin.'
      };
    },
    question:"Why is the level $c=0$ included while levels $c<0$ are empty?",
    answer:"The square root allows radicand $0$ on $x^2+y^2=9$ and always returns a nonnegative value, so $c<0$ cannot occur."
  },{
    afterSection:2,
    title:'One radial bound handles every direction at once',
    intro:"For $p=x^2y/(x^2+y^2)$, polar substitution gives $p=r\\cos^2\\theta\\sin\\theta$. At fixed $r$, vary direction and compare every value with the envelope $\\pm r$.",
    controls:[range('Distance r from origin',0.05,1,0.05,0.6),range('Direction θ (degrees)',0,360,15,45)],
    bounds:[0,360,-1.1,1.1],
    draw:([r,degrees])=>{
      const value=angle=>{const t=angle*Math.PI/180;return r*Math.cos(t)**2*Math.sin(t);};
      return {
        curves:[['p at each direction',sample(0,360,value)],['Upper bound r',[[0,r],[360,r]]],['Lower bound −r',[[0,-r],[360,-r]]]],
        markers:[[degrees,degrees%90===0?0:value(degrees)]],
        note:'$r='+fmt(r)+'$, $\\theta='+degrees+'^\\circ$ gives $p='+fmt(degrees%90===0?0:value(degrees))+'$. For every angle, $|\\cos^2\\theta\\sin\\theta|\\le1$, hence $|p|\\le r$. As $r\\to0$, the directional range tends to zero.'
      };
    },
    question:"Why does $|p|\\le r$ prove a limit while testing a few rays does not?",
    answer:"The inequality $|p|\\le r$ holds uniformly for every direction. Given $\\varepsilon>0$, taking $r<\\varepsilon$ controls every approach, including directions changing with $r$."
  }],
  '21': [{
    afterSection:1,
    title:'A tangent plane has a measurable residual',
    intro:"For $f(x,y)=x^2+y^2$ at $(1,2)$, the tangent plane predicts $5+2h+4k$ at displacement $(h,k)$. The exact residual is $h^2+k^2$.",
    controls:[range('Horizontal displacement h',-1,1,0.05,0.4),range('Fixed vertical displacement k',-0.5,0.5,0.05,0)],
    bounds:[-1,1,0,11],
    draw:([h,k])=>{
      const actual=t=>(1+t)**2+(2+k)**2;
      const plane=t=>5+2*t+4*k;
      return {
        curves:[['Surface slice',sample(-1,1,actual)],['Tangent-plane slice',sample(-1,1,plane)]],
        markers:[[h,actual(h)],[h,plane(h)]],markerLeaders:true,
        note:'At $(h,k)=('+fmt(h)+','+fmt(k)+')$, actual $'+fmt(actual(h))+'$, plane $'+fmt(plane(h))+'$. Exact residual $h^2+k^2='+fmt(h*h+k*k)+'$, quadratic in the full displacement.'
      };
    },
    question:"Why can the error remain nonzero at $h=0$ when $k\\ne0$?",
    answer:"The horizontal slice is then at $y=2+k$, away from the contact point. Its exact residual is $k^2$."
  },{
    afterSection:3,
    title:'Gradient projection gives every directional rate',
    intro:"At $(1,1)$ on $f(x,y)=x^2+4y^2$, the gradient is $\\nabla f=(2,8)$. Rotate a unit direction $\\mathbf u$ and compare the directional rate with $\\pm\\sqrt{68}$.",
    controls:[range('Direction angle (degrees)',0,360,5,60)],
    bounds:[0,360,-9,9],
    draw:([degrees])=>{
      const rate=angle=>{const t=angle*Math.PI/180;return 2*Math.cos(t)+8*Math.sin(t);};
      const bound=Math.sqrt(68);
      return {
        curves:[['Directional rate',sample(0,360,rate)],['Maximum +||∇f||',[[0,bound],[360,bound]]],['Minimum −||∇f||',[[0,-bound],[360,-bound]]]],
        markers:[[degrees,rate(degrees)]],
        note:'$\\theta='+degrees+'^\\circ$, unit direction $(\\cos\\theta,\\sin\\theta)$, directional rate $'+fmt(rate(degrees))+'$. Extreme magnitude $\\|\\nabla f\\|=\\sqrt{68}\\approx'+fmt(bound)+'$.'
      };
    },
    question:"Why is the maximum directional rate $\\sqrt{68}$ rather than $2+8$?",
    answer:"A unit vector $\\mathbf u$ has length $1$. Cauchy–Schwarz gives $\\nabla f\\cdot\\mathbf u\\le\\|\\nabla f\\|=\\sqrt{68}$, with equality along the gradient."
  },{
    afterSection:3,
    title:'Every fixed direction agrees, yet the plane fails',
    introBeforeChart:true,
    intro:'At the origin, $F(0,0)=0$ and $F(x,y)=x^3y/(x^4+y^2)$ elsewhere. Its only candidate plane is $L=0$. Predict what happens to both $|F|$ and $|F|/\\rho$ as the positive input distance $\\rho$ shrinks. The horizontal axis is $\\rho$ (dimensionless distance); the vertical axis is normalized absolute error $|F-L|/\\rho$ (dimensionless). The point $\\rho=0$ is excluded. Compare one fixed ray, the moving curve $y=x^2$, and the smooth function $G=x^2+y^2$ with its actual derivative $DG(0)=0$.',
    controls:[range('Positive distance ρ',0.02,0.8,0.02,0.2),range('Fixed-ray slope choice',0,4,1,2)],
    controlDisplay:(index,value)=>index===1?`m = ${[0,0.5,1,1.5,2][value]}`:fmt(value),
    bounds:[0,0.8,0,0.85],
    draw:([rho,choice])=>{
      const m=[0,0.5,1,1.5,2][choice];
      const curveX=distance=>Math.sqrt(2*distance*distance/(1+Math.sqrt(1+4*distance*distance)));
      const fixed=distance=>m===0?0:Math.abs(m)*distance/(distance*distance+m*m*(1+m*m));
      const curved=distance=>1/(2*Math.sqrt(1+curveX(distance)**2));
      const x=curveX(rho),rayX=rho/Math.sqrt(1+m*m),rayY=m*rayX;
      const fixedRatio=fixed(rho),curveRatio=curved(rho),rayAbs=rho*fixedRatio,curveAbs=rho*curveRatio;
      const curvePoints=fn=>sample(0.02,0.8,fn);
      return {
        curves:[['Fixed ray (solid): normalized |F|/ρ',curvePoints(fixed)],['Moving y=x² (dashed): normalized |F|/ρ',curvePoints(curved)],['Smooth G (dotted): normalized |G|/ρ = ρ',[[0.02,0.02],[0.8,0.8]]]],
        curveDashes:['','9 5','2 5'],
        markers:[[rho,fixedRatio],[rho,curveRatio],[rho,rho]],
        markerLabels:['Fixed ray normalized error','Moving curve normalized error','Smooth normalized error'],
        description:'The chart compares exact normalized errors at positive distance. The moving curve stays near one half as distance shrinks, while the fixed ray and smooth example tend to zero. Zero distance is a limit boundary, not an evaluated quotient.',
        note:`At positive distance $\\rho=${fmt(rho)}$ and fixed slope $m=${fmt(m)}$: ray point $(${mathFmt(rayX)},${mathFmt(rayY)})$, $|F|=${mathFmt(rayAbs)}$, $|F|/\\rho=${mathFmt(fixedRatio)}$; curved point $(${mathFmt(x)},${mathFmt(x*x)})$, $|F|=${mathFmt(curveAbs)}$, $|F|/\\rho=${mathFmt(curveRatio)}$. Smooth $G=x^2+y^2$ has $|G|=${mathFmt(rho*rho)}$ and $|G|/\\rho=${mathFmt(rho)}$. At $\\rho=0$ the quotients are undefined; their limits are $0$, $1/2$, and $0$, respectively.`,
        exactTable:{caption:'Selected positive-distance comparison; formulas determine the values, not the plotted samples',headers:['Approach at distance ρ','Input point (x,y)','Absolute residual','Normalized residual','Limit as ρ→0⁺'],rows:[
          ['Fixed ray y=mx',`$(${mathFmt(rayX)},${mathFmt(rayY)})$`,`$${mathFmt(rayAbs)}$`,`$${mathFmt(fixedRatio)}$`,'$0$ for every fixed m'],
          ['Moving curve y=x²',`$(${mathFmt(x)},${mathFmt(x*x)})$`,`$${mathFmt(curveAbs)}$`,`$${mathFmt(curveRatio)}$`,'$1/2$'],
          ['Smooth G=x²+y²',`$(${mathFmt(rho)},0)$`,`$${mathFmt(rho*rho)}$`,`$${mathFmt(rho)}$`,'$0$']
        ]}
      };
    },
    question:'As ρ shrinks, do both absolute residuals vanish? Do both normalized residuals vanish? Why do all fixed directional rates fail to settle the plane?',
    answer:'Yes, the absolute residuals vanish: continuity gives $|F|\\le\\rho/2$. On the fixed ray $y=mx$, $|F|/\\rho=|m|\\rho/[\\rho^2+m^2(1+m^2)]\\to0$ for every fixed $m$; $m=0$ gives exact zero. On $y=x^2$ with $x>0$, $F=x/2$ and $|F|/\\rho=1/(2\\sqrt{1+x^2})\\to1/2$, where $x^2=2\\rho^2/(1+\\sqrt{1+4\\rho^2})$. For each fixed direction $(a,b)$ and two-sided $t\\to0$, $F(ta,tb)/t=t a^3b/(t^2a^4+b^2)\\to0$ if $b\\ne0$, and it is identically zero if $b=0$. Thus every fixed rate equals the linear map $L=0$. The curve changes direction as its distance shrinks, so the fixed-direction limits supply no one scale controlling every direction. In contrast, $G=x^2+y^2=\\rho^2$ gives $|G|/\\rho=\\rho\\to0$ for all directions at once. The plotted values illustrate these exact statements; they do not prove the limits.'
  }],
  '22': [{
    afterSection:1,
    title:'A zero Hessian direction leaves the answer open',
    intro:"Compare $f(x,y)=x^2+sy^4$ for $s=-1,0,1$. Every choice has Hessian $\\operatorname{diag}(2,0)$ at the origin, but its local shape changes.",
    controls:[range('Quartic coefficient s',-1,1,1,1),range('Selected y',-1,1,0.1,0.6)],
    bounds:[-1,1,-1.1,1.1],
    draw:([s,y])=>({
      curves:[['Along x=0: s y⁴',sample(-1,1,t=>s*t**4)],['Along y=0: x²',sample(-1,1,t=>t*t)]],
      markers:[[y,s*y**4]],
      note:'$s='+s+'$. All choices have Hessian $\\operatorname{diag}(2,0)$ at the origin. '+(s<0?'The $y$ slice is negative and the $x$ slice positive: saddle.':s>0?'Both terms are nonnegative: strict minimum.':'The function $x^2$ has a non-strict minimum along a line.')
    }),
    question:"Why does Hessian determinant $D=0$ fail to classify these points?",
    answer:"The quadratic term vanishes in the $y$ direction. The $sy^4$ term, invisible to the Hessian, determines whether nearby values rise or fall."
  },{
    afterSection:3,
    title:'A moving contour meets an ellipse at its optimum',
    aspect:'equal',
    intro:"On $x^2+4y^2=4$, move along the ellipse and track the objective $x+y$. At an extreme, a level line $x+y=c$ supports the ellipse.",
    controls:[range('Ellipse angle (degrees)',0,360,5,25)],
    bounds:[-2.4,2.4,-1.4,1.4],
    draw:([degrees])=>{
      const t=degrees*Math.PI/180,x=2*Math.cos(t),y=Math.sin(t),c=x+y;
      const ellipse=sample(0,2*Math.PI,u=>u).map(([u])=>[2*Math.cos(u),Math.sin(u)]);
      return {
        curves:[['Constraint ellipse',ellipse],['Current objective level x+y=c',sample(-2.4,2.4,u=>c-u)]],
        markers:[[x,y]],
        note:'$\\theta='+degrees+'^\\circ$, point $('+mathFmt(x)+','+mathFmt(y)+')$, objective $x+y='+mathFmt(c)+'$. Exact extrema are $\\pm\\sqrt5$ at $\\pm(4/\\sqrt5,1/\\sqrt5)$; a $5^\\circ$ slider step may miss them.'
      };
    },
    question:"Why is tangency of $x+y=c$ only a candidate for the global extreme?",
    answer:"Tangency gives a local necessary condition at a regular point. Compare all feasible candidates; compactness guarantees extrema $\\pm\\sqrt5$ here."
  }],
  '23': [{
    afterSection:2,
    title:'Reverse the slices without changing the region',
    aspect:'equal',
    intro:"The same region lies between $y=x^2$ and $y=x$ for $0\\le x\\le1$. Vertical and horizontal slices give $\\int_0^1\\int_{x^2}^{x}f(x,y)\\,dy\\,dx$ and $\\int_0^1\\int_y^{\\sqrt y}f(x,y)\\,dx\\,dy$.",
    controls:[range('Slice location',0.05,0.95,0.05,0.5),range('Slice orientation: 0 vertical, 1 horizontal',0,1,1,0)],
    bounds:[-0.1,1.1,-0.1,1.1],
    draw:([t,orientation])=>{
      const upper=sample(0,1,x=>x),lower=sample(0,1,x=>x*x);
      const polygon=[...upper,...lower.slice().reverse()];
      const guide=orientation===0?[[t,t*t],[t,t]]:[[t,t],[Math.sqrt(t),t]];
      return {
        polygons:[polygon],
        curves:[['Upper boundary y=x',upper],['Lower boundary y=x²',lower],['Selected slice',guide]],
        markers:guide,
        note:orientation===0?'Vertical slice: $x='+fmt(t)+'$, $x^2\\le y\\le x$; $\\int_0^1\\int_{x^2}^{x}f(x,y)\\,dy\\,dx$.':'Horizontal slice: $y='+fmt(t)+'$, $y\\le x\\le\\sqrt y$; $\\int_0^1\\int_y^{\\sqrt y}f(x,y)\\,dx\\,dy$.'
      };
    },
    question:"Why does simply swapping $dx$ and $dy$ give wrong bounds?",
    answer:"Horizontal slices run from $x=y$ to $x=\\sqrt y$; vertical slices run from $y=x^2$ to $y=x$. The inner interval depends on direction."
  },{
    afterSection:4,
    title:'A narrowing region changes the singularity threshold',
    intro:"Compare $x^{-p}$ over the strip $0<x\\le1$, $0\\le y\\le1$ with the same density over $0\\le y\\le x\\le1$. The chart shows $\\log_{10}(1+\\text{mass})$ as cutoff $\\varepsilon\\to0$.",
    controls:[range('Exponent p',0,2.2,0.1,1.5),range('Lower cutoff ε',0.01,0.5,0.01,0.1)],
    bounds:[0,1,0,2.5],
    draw:([p,epsilon])=>{
      const integral=(power,e)=>Math.abs(power+1)<1e-9?-Math.log(e):(1-e**(power+1))/(power+1);
      const strip=e=>integral(-p,e),triangle=e=>integral(1-p,e);
      const ordinate=value=>Math.log10(1+value);
      return {
        curves:[['Strip truncated mass (log scale)',sample(0.01,1,e=>ordinate(strip(e)))],['Triangle truncated mass (log scale)',sample(0.01,1,e=>ordinate(triangle(e)))]],
        markers:[[epsilon,ordinate(strip(epsilon))],[epsilon,ordinate(triangle(epsilon))]],
        note:'$p='+fmt(p)+'$, $\\varepsilon='+fmt(epsilon)+'$. Strip mass $'+fmt(strip(epsilon))+'$; triangle mass $'+fmt(triangle(epsilon))+'$. As $\\varepsilon\\to0$, strip convergence needs $p<1$; triangle convergence needs $p<2$.'
      };
    },
    question:"Why can $p=1.5$ give finite mass in the triangle but infinite mass in the strip?",
    answer:"The triangle has width $x$, changing the one-variable integrand from $x^{-1.5}$ to $x^{-0.5}$, which is integrable at zero."
  }],
  '24': [{
    afterSection:0,
    title:'Area scale combines stretching and shear',
    aspect:'equal',
    intro:"Map the unit square by $T(u,v)=(au+sv,v)$. Shear tilts cells while $a$ stretches area. The Jacobian has $|\\det J_T|=a$ for the offered $a>0$, independent of $s$.",
    controls:[range('Horizontal scale a',0.5,2,0.1,1.5),range('Shear s',-1,1,0.1,0.5)],
    bounds:[-1.5,3.2,-0.2,1.2],
    draw:([a,s])=>{
      const square=[[0,0],[1,0],[1,1],[0,1]];
      const mapped=square.map(([u,v])=>[a*u+s*v,v]);
      const close=points=>[...points,points[0]];
      return {
        polygons:[square,mapped],
        curves:[['Unit parameter square',close(square)],['Mapped parallelogram',close(mapped)]],
        markers:[[a+s,1]],
        note:'$a='+fmt(a)+'$, $s='+fmt(s)+'$. Derivative columns $('+fmt(a)+',0)$ and $('+fmt(s)+',1)$ give $|\\det J_T|='+fmt(a)+'$. Mapped area is $'+fmt(a)+'$ square units.'
      };
    },
    question:"Why can a slanted side lengthen while the mapped area stays fixed at $a$?",
    answer:"Shear changes angles as well as side lengths. The determinant combines both effects; when $a=1$, area remains $1$ for every $s$."
  },{
    afterSection:4,
    title:'Planar density and radial probability answer different questions',
    intro:"For $\\sigma>0$, planar density $f(x,y)=e^{-(x^2+y^2)/\\sigma^2}/(\\pi\\sigma^2)$ induces radial density $p_R(r)=2r e^{-r^2/\\sigma^2}/\\sigma^2$. Compare it with $P(R_{\\mathrm{radius}}\\le r)=1-e^{-r^2/\\sigma^2}$.",
    controls:[range('Scale σ',0.6,2,0.1,1),range('Radius R',0,4,0.1,1)],
    bounds:[0,4,0,2.2],
    draw:([sigma,R])=>{
      const pdf=r=>2*r/(sigma*sigma)*Math.exp(-r*r/(sigma*sigma));
      const cdf=r=>-Math.expm1(-r*r/(sigma*sigma));
      return {
        curves:[['Radial density p_R(r)',sample(0,4,pdf)],['Cumulative P(radius≤r)',sample(0,4,cdf)]],
        markers:[[R,pdf(R)],[R,cdf(R)]],
        note:'$\\sigma='+mathFmt(sigma)+'$, $R='+mathFmt(R)+'$. Radial density $p_R(R)='+mathFmt(pdf(R))+'$ per unit radius; probability inside $R$ is $'+mathFmt(cdf(R))+'$, outside $'+mathFmt(Math.exp(-R*R/(sigma*sigma)))+'$. Density itself is not probability.'+(mathFmt(cdf(R))==='1'?' The inside value rounds to 1 at this display precision; the outside probability is computed directly.':'')
      };
    },
    question:"Why does $p_R(0)=0$ although $f(0,0)$ is largest?",
    answer:"A ring at radius $r$ has circumference $2\\pi r$. The radial density includes this ring-area factor, which tends to zero at the center."
  }],
  '25': [{
    afterSection:1,
    title:'Orientation changes work but not path length',
    intro:"On a radius-$R$ circle, $\\mathbf F=(-y,x)$ is tangent to counterclockwise motion. The horizontal plot coordinate is accumulated angle in radians, from $0$ to $2\\pi$ times the selected turns.",
    controls:[range('Radius R',0.5,1.5,0.25,1),range('Orientation: −1 clockwise, +1 counterclockwise',-1,1,2,1),range('Turns',1,3,1,1)],
    bounds:[0,6*Math.PI,-45,45],
    draw:([R,orientation,turns])=>{
      const end=2*Math.PI*turns;
      return {
        curves:[['Cumulative work',sample(0,end,t=>orientation*R*R*t)],['Cumulative scalar length',sample(0,end,t=>R*t)]],
        markers:[[end,orientation*R*R*end],[end,R*end]],
        note:'$R='+fmt(R)+'$, '+turns+' turn(s), '+(orientation>0?'counterclockwise':'clockwise')+'. Work $'+fmt(orientation*R*R*end)+'$; length $'+fmt(R*end)+'$. Reversal changes work sign; extra turns scale both totals.'
      };
    },
    question:"Why does work per turn contain $R^2$ while length contains only $R$?",
    answer:"On the circle $\\|\\mathbf F\\|=R$ and speed is $R$ per radian, so work per turn is $+2\\pi R^2$ counterclockwise and $-2\\pi R^2$ clockwise. Length per turn is $2\\pi R$ either way."
  },{
    afterSection:4,
    title:'A hole matters only when the loop winds around it',
    aspect:'equal',
    intro:"The angular field $\\mathbf F=(-y/r^2,x/r^2)$ has zero curl where $r>0$. Compare a loop around the excluded origin with a loop wholly inside $x>0$.",
    controls:[range('Center x: 0 or 2',0,2,2,2),range('Circle radius',0.5,1.5,0.5,1)],
    bounds:[-2,4,-2,2],
    draw:([center,R])=>{
      const loop=sample(0,2*Math.PI,t=>t).map(([t])=>[center+R*Math.cos(t),R*Math.sin(t)]);
      const arrows=[];
      for(const x of [-1.5,-0.75,0.75,1.5,2.25,3])for(const y of [-1,0,1]){
        const r=Math.hypot(x,y);if(r<0.2)continue;
        arrows.push({from:[x,y],to:[x-0.24*y/r,y+0.24*x/r],kind:0});
      }
      return {
        curves:[['Counterclockwise loop',loop]],
        arrows,
        markers:[[center+R,0]],openMarkers:[{at:[0,0],label:'Excluded origin'}],
        note:'Center $x='+center+'$, radius $R='+fmt(R)+'$. '+(center===0?'The loop winds once around the excluded origin: circulation $2\\pi$.':'The loop lies in $x>0$, where $\\arctan(y/x)$ is a potential: circulation $0$.')+' The origin is a domain hole. Equal-length field arrows show direction only; the actual field magnitude is $1/r$.'
      };
    },
    question:"Why is zero curl away from $r=0$ insufficient to settle both loops?",
    answer:"The centered loop encloses the undefined origin, so the disk form of Green’s theorem does not apply; its circulation is $2\\pi$. The shifted loop lies in $x>0$, with potential $\\arctan(y/x)$ and circulation $0$."
  }],
  '26': [{
    afterSection:0,
    title:'The inner boundary must run the other way',
    aspect:'equal',
    intro:"For $\\mathbf F=(-y/2,x/2)$, curl is $1$. On an annulus, the positive outer loop runs counterclockwise and the inner loop clockwise.",
    controls:[range('Inner radius a',0.25,1,0.05,0.5),range('Outer radius b',1.25,2,0.05,1.5)],
    bounds:[-2.2,2.2,-2.2,2.2],
    draw:([a,b])=>{
      const circle=r=>sample(0,2*Math.PI,t=>t).map(([t])=>[r*Math.cos(t),r*Math.sin(t)]);
      return {
        curves:[['Outer boundary: counterclockwise',circle(b)],['Inner boundary: clockwise',circle(a).reverse()]],
        arrows:[{from:[0,b],to:[-0.3,b],kind:0},{from:[0,a],to:[0.3,a],kind:1}],
        markers:[[b,0],[a,0]],
        note:'$a='+fmt(a)+'$, $b='+fmt(b)+'$. Outer circulation $'+fmt(Math.PI*b*b)+'$; inner contribution='+fmt(-Math.PI*a*a)+'; total $\\pi(b^2-a^2)='+fmt(Math.PI*(b*b-a*a))+'$.',
      };
    },
    question:"Why would omitting the inner radius-$a$ loop give the wrong answer?",
    answer:"The annulus boundary includes both circles. The missing disk has area $\\pi a^2$, so its clockwise contribution subtracts from outer circulation, giving $\\pi(b^2-a^2)$."
  },{
    afterSection:1,
    title:'Tilt changes surface area but not vertical flux',
    intro:"Above the unit square $[0,1]^2$, let $z=ax+by$ and $\\mathbf F=(0,0,3)$. Surface area is $\\sqrt{1+a^2+b^2}$, while upward flux is $3$.",
    controls:[range('Slope a',-2,2,0.1,1),range('Slope b',-2,2,0.1,1)],
    bounds:[-2,2,0,4],
    draw:([a,b])=>{
      const area=t=>Math.sqrt(1+t*t+b*b);
      return {
        curves:[['Surface area',sample(-2,2,area)],['Upward vertical flux',[[ -2,3],[2,3]]]],
        markers:[[a,area(a)],[a,3]],
        note:'$a='+fmt(a)+'$, $b='+fmt(b)+'$. Over the unit square, area $\\sqrt{1+a^2+b^2}='+fmt(area(a))+'$; upward $d\\mathbf S=(-a,-b,1)\\,dx\\,dy$ gives flux $3$. Reversing the normal gives $-3$.'
      };
    },
    question:"Why does the larger area $\\sqrt{1+a^2+b^2}$ not increase vertical flux?",
    answer:"The tilted patch projects vertically to the unit square. Its upward vector area element $d\\mathbf S=(-a,-b,1)\\,dx\\,dy$ gives flux $\\mathbf F\\cdot d\\mathbf S=3\\,dx\\,dy$."
  }],
  '27': [{
    afterSection:1,
    title:'Initial value selects a logistic trajectory',
    intro:"For $P^{\\prime}=P(1-P)$, vary the starting population $P_0>0$. Every positive trajectory approaches carrying capacity $K=1$ in forward time, from below or above.",
    controls:[range('Initial population P₀',0.1,1.9,0.1,0.3)],
    bounds:[0,8,0,2],
    draw:([initial])=>{
      const population=t=>1/(1+(1/initial-1)*Math.exp(-t));
      return {
        curves:[['Logistic solution',sample(0,8,population)],['Carrying capacity K=1',[[0,1],[8,1]]],['Fastest-growth level K/2',[[0,0.5],[8,0.5]]]],
        markers:[[0,initial],...(initial===1?[[0,1]]:[])],
        note:'$P_0='+fmt(initial)+'$. Initial rate $P^{\\prime}(0)='+fmt(initial*(1-initial))+'$. Positive values below $1$ rise; above $1$ fall. $P=0$ and $P=1$ are equilibrium solutions.'
      };
    },
    question:"Why is $P=1$ still a solution even though separation divides by $1-P$?",
    answer:"The original right side $P(1-P)$ vanishes at $P=1$, so the constant function solves the equation. Division excludes it from the separated nonconstant family."
  },{
    afterSection:4,
    title:'Damping changes the oscillator’s qualitative motion',
    intro:"For $x^{\\prime\\prime}+bx^{\\prime}+x=0$ with $x(0)=1$ and $x^{\\prime}(0)=0$, compare underdamped, critically damped, and overdamped motion. Energy is $E=((x^{\\prime})^2+x^2)/2$.",
    controls:[range('Damping b',0,3,0.1,0.5)],
    bounds:[0,12,-1.2,1.2],
    draw:([b])=>{
      const solution=t=>{
        if(b<1.999){const omega=Math.sqrt(1-b*b/4);return Math.exp(-b*t/2)*(Math.cos(omega*t)+b*Math.sin(omega*t)/(2*omega));}
        if(b<2.001)return Math.exp(-t)*(1+t);
        const root=Math.sqrt(b*b-4),l1=(-b+root)/2,l2=(-b-root)/2;
        return (-l2*Math.exp(l1*t)+l1*Math.exp(l2*t))/(l1-l2);
      };
      return {
        curves:[['Displacement x(t)',sample(0,12,solution)],['Equilibrium x=0',[[0,0],[12,0]]]],
        markers:[[0,1]],
        note:'$b='+fmt(b)+'$. '+(b===0?'No damping: $x(t)=\\cos t$ and energy stays constant.':b<2?'Underdamped: decaying oscillation.':b===2?'Critical damping has repeated root $-1$.':'Overdamping gives two negative real modes.')+' Energy $E=((x^{\\prime})^2+x^2)/2$ satisfies $E^{\\prime}=-b (x^{\\prime})^2\\le0$.'
      };
    },
    question:"Why does $b=0$ keep oscillating even though equilibrium is stable?",
    answer:"When $b=0$, $E^{\\prime}=-b (x^{\\prime})^2=0$, so energy is conserved. Nearby trajectories stay bounded without converging to equilibrium."
  }],
  '28': [{
    afterSection:2,
    title:'A stability polynomial can amplify exact decay',
    intro:"For $y^{\\prime}=\\lambda y$ with $\\lambda<0$ and $h>0$, set $z=h\\lambda<0$. The slider also displays $z=0$ as a boundary case. Compare Euler, Heun, and RK4 amplification $|R(z)|$ with $1$.",
    controls:[range('Step-rate product z=hλ',-5,0,0.1,-2)],
    bounds:[-5,0,0,15],
    draw:([z])=>{
      const e=t=>Math.abs(1+t),h=t=>Math.abs(1+t+t*t/2),rk=t=>Math.abs(1+t+t*t/2+t**3/6+t**4/24);
      return {
        curves:[['Euler |R(z)|',sample(-5,0,e)],['Heun |R(z)|',sample(-5,0,h)],['RK4 |R(z)|',sample(-5,0,rk)],['Stability threshold',[[ -5,1],[0,1]]]],
        markers:[[z,e(z)],[z,h(z)],[z,rk(z)]],
        note:'$z='+fmt(z)+'$. Amplification: Euler $'+fmt(e(z))+'$, Heun $'+fmt(h(z))+'$, RK4 $'+fmt(rk(z))+'$. A decay mode shrinks only for $|R(z)|<1$; equality is a boundary case.'
      };
    },
    question:"Why does higher order not guarantee $|R(z)|<1$ for every negative $z$?",
    answer:"Each explicit method has a polynomial $R(z)$. Far enough left on the negative real axis, $|R(z)|>1$ although exact $e^z$ still decays."
  },{
    afterSection:3,
    title:'Euler makes an undamped oscillator gain energy',
    intro:"For $x^{\\prime}=v$ and $v^{\\prime}=-x$, exact energy $E=(x^2+v^2)/2$ is constant. Euler multiplies $E$ by $1+h^2$ per step; the vertical axis is $\\log_{10}(E/E_0)$.",
    controls:[range('Time step h',0.05,0.4,0.05,0.2)],
    bounds:[0,10,0,2],
    draw:([h])=>{
      const steps=Math.floor(10/h),points=[];
      for(let n=0;n<=steps;n++)points.push([n*h,n*Math.log10(1+h*h)]);
      return {
        curves:[['Euler log₁₀ energy ratio',points],['Exact log₁₀ energy ratio',[[0,0],[10,0]]]],
        markers:[[steps*h,steps*Math.log10(1+h*h)]],
        note:'$h='+fmt(h)+'$, $N=\\lfloor10/h\\rfloor='+steps+'$ steps reach $t='+fmt(steps*h)+'$. Euler energy ratio $(1+h^2)^N='+fmt((1+h*h)**steps)+'$; exact ratio $1$. Smaller $h$ reduces fixed-time drift.'
      };
    },
    question:"Why can smaller $h$ improve fixed-time accuracy while every fixed $h>0$ drifts eventually?",
    answer:"At fixed time $T$, $N\\approx T/h$ and $(1+h^2)^N\\to1$ as $h\\to0$. For fixed $h>0$, repeated multiplication by $1+h^2$ grows without bound."
  }],
  '01': [{
    afterSection:0,
    title:'An intersection keeps only shared inputs',
    intro:'Move the endpoints of two closed intervals $A=[a,b]$ and $B=[c,d]$. Their intersection $A\\cap B$ contains exactly the values satisfying both interval conditions.',
    controls:[range('$A$ left endpoint',-3,1,0.5,-1),range('$A$ right endpoint',1,4,0.5,2),range('$B$ left endpoint',-2,2,0.5,0),range('$B$ right endpoint',2,5,0.5,4)],
    bounds:[-4,6,0,4],
    draw:([a,b,c,d])=>{
      const left=Math.max(a,c),right=Math.min(b,d),shared=left<=right;
      return {
        curves:[['Interval $A$',[[a,3],[b,3]]],['Interval $B$',[[c,2],[d,2]]],...(shared?[['$A\\cap B$',[[left,1],[right,1]]]]:[])],
        markers:[[a,3],[b,3],[c,2],[d,2],...(shared?[[left,1],[right,1]]:[])],
        note:'$A=['+fmt(a)+','+fmt(b)+']$, $B=['+fmt(c)+','+fmt(d)+']$. '+(shared?'Their intersection is $A\\cap B=['+fmt(left)+','+fmt(right)+']$.':'Their intersection $A\\cap B$ is empty.')+' All displayed endpoints are included.'
      };
    },
    question:'If the largest left endpoint exceeds the smallest right endpoint, what is $A\\cap B$?',
    answer:'It is empty. No real number can be simultaneously at least the larger left endpoint and at most the smaller right endpoint.'
  },{
    afterSection:5,
    title:'Choosing an inverse means choosing a branch',
    aspect:'equal',
    intro:'Squaring on all real inputs is not one-to-one. Restrict to $x\\le0$ or $x\\ge0$, then reflect ordered pairs across $y=x$ to see $f^{-1}(y)=\\pm\\sqrt y$ on $y\\ge0$.',
    controls:[range('Branch: $-1$ for $x\\le0$, $+1$ for $x\\ge0$',-1,1,2,1)],
    bounds:[-2.5,4.5,-2.5,4.5],
    draw:([branch])=>{
      const square=sample(branch<0?-2:0,branch<0?0:2,x=>x*x);
      const inverse=sample(0,4,y=>branch*Math.sqrt(y));
      return {
        curves:[['Restricted squaring function',square],['Chosen inverse',inverse],['Reflection line $y=x$',[[-2.5,-2.5],[4.5,4.5]]]],
        markers:[[branch*1.5,2.25],[2.25,branch*1.5]],
        note:(branch<0?'Domain $x\\le0$; inverse $f^{-1}(y)=-\\sqrt y$.':'Domain $x\\ge0$; inverse $f^{-1}(y)=\\sqrt y$.')+' In both cases $y\\ge0$. The point $('+fmt(branch*1.5)+',2.25)$ reflects to $(2.25,'+fmt(branch*1.5)+')$.'
      };
    },
    question:'Why does unrestricted $f(x)=x^2$ have no inverse function on its full range?',
    answer:'Distinct inputs $x$ and $-x$ have the same square. Reversing an output such as $2.25$ would assign both $1.5$ and $-1.5$, violating the definition of a function.'
  }],
  '02': [{
    afterSection:0,
    title:'Cancellation reveals a limit without filling a hole',
    intro:'The quotient $(x^2-9)/(x-3)$ agrees with $x+3$ wherever $x\\ne3$. Move the test input toward the missing point and distinguish nearby behavior from an actual value.',
    controls:[range('Test input $x$',2,4,0.1,2.5)],
    bounds:[-1,5,1,9],
    draw:([x])=>{
      const left=sample(-1,2.99,t=>t+3),right=sample(3.01,5,t=>t+3);
      const atHole=Math.abs(x-3)<1e-9;
      return {
        curves:[['Original quotient, $x<3$',left],['Original quotient, $x>3$',right],['Continuous extension $y=x+3$',sample(-1,5,t=>t+3)]],extensionSeries:[2],
        guides:[{axis:'x',value:3}],
        markers:atHole?[]:[[x,x+3]],markerLabels:atHole?[]:['Original quotient value'],openMarkers:[{at:[3,6],label:'Original quotient excluded at x=3'}],
        note:atHole?'At $x=3$ the original quotient is $0/0$ and has no value. Nearby values approach $6$; assigning $6$ creates a continuous extension.':'At $x='+fmt(x)+'$, the quotient equals $'+fmt(x+3)+'$. Its limit as $x\\to3$ is $6$, though the original domain excludes $3$.'
      };
    },
    question:'Does the simplified expression prove the original quotient equals $6$ at $x=3$?',
    answer:'No. Cancellation divided by $x-3$, which is zero at $3$. It proves equality only for $x\\ne3$ and reveals a limit of $6$.'
  },{
    afterSection:4,
    title:'Polar angle chooses a quadrant',
    aspect:'equal',
    intro:'A radius and angle locate a point by $x=r\\cos\\theta$ and $y=r\\sin\\theta$. Rotate the ray and watch coordinate signs and $\\tan\\theta$ change.',
    controls:[range('Radius $r$',0.5,2.5,0.1,1.5),range('Angle $\\theta$ (degrees)',0,360,15,225)],
    bounds:[-3,3,-3,3],
    draw:([r,degrees])=>{
      const t=degrees*Math.PI/180,cardinal=degrees%90===0;
      const cosine=cardinal?[1,0,-1,0,1][degrees/90]:Math.cos(t);
      const sine=cardinal?[0,1,0,-1,0][degrees/90]:Math.sin(t);
      const x=r*cosine,y=r*sine;
      const circle=sample(0,2*Math.PI,u=>u).map(([u])=>[r*Math.cos(u),r*Math.sin(u)]);
      return {
        curves:[['Circle of radius $r$',circle],['Horizontal projection',[[0,0],[x,0]]],['Vertical projection',[[x,0],[x,y]]]],
        arrows:[{from:[0,0],to:[x,y],kind:0}],
        markers:[[x,y]],
        note:'$r='+fmt(r)+'$, $\\theta='+degrees+'^\\circ='+fmt(t)+'$ radians. Point=('+fmt(x)+','+fmt(y)+'). $\\cos\\theta='+fmt(cosine)+'$, $\\sin\\theta='+fmt(sine)+'$. '+(cosine===0?'tanθ is undefined here.':'$\\tan\\theta='+fmt(sine/cosine)+'$.')
      };
    },
    question:'Why does $\\arctan(y/x)$ alone fail to identify a point in quadrant III?',
    answer:'The ratio $y/x$ is positive in both quadrants I and III, so its principal arctangent gives only a reference angle. The signs of $x$ and $y$ determine the actual quadrant.'
  }],
  '03': [{
    afterSection:1,
    title:'A sampled graph can miss a height-one peak',
    intro:'The function $e^{-((x-c)/w)^2}$ reaches one at $x=c$. Change the grid size and peak location to see when evenly spaced samples miss it. The smooth-looking line is a dense sample.',
    controls:[range('Number of subintervals $n$',4,40,4,12),range('Peak center $c$',0.2,0.8,0.01,0.37),range('Peak width $w$',0.01,0.08,0.01,0.02)],
    bounds:[0,1,0,1.1],
    draw:([n,c,w])=>{
      const f=x=>Math.exp(-(((x-c)/w)**2));
      const points=sample(0,1,f,n);
      const highest=Math.max(...points.map(([,y])=>y));
      return {
        curves:[['Dense sample of smooth function',sample(0,1,f,800)],['Joined grid samples',points]],
        markers:[[c,1],...points],
        note:'$n='+n+'$, $c='+fmt(c)+'$, $w='+fmt(w)+'$. Exact maximum is $1$ at $x=c$; largest grid value is '+fmt(highest)+'. The smooth-looking line uses 800 samples; the separate marker gives the exact peak.'
      };
    },
    question:'If increasing $n$ reveals a peak, did the smaller grid prove the peak was absent?',
    answer:'No. It only failed to sample near the peak. A finite uniform grid cannot rule out a feature between its points without additional information.'
  },{
    afterSection:4,
    title:'A stable formula keeps the small root visible',
    intro:'For $x^2-Bx+1=0$ with $B=10^k$, compare the residual $|p(x)|$ of direct small-root subtraction with a rationalized formula as $B$ grows.',
    controls:[range('Exponent $k$ in $B=10^k$',1,9,1,6)],
    bounds:[1,9,0,1.1],
    draw:([k])=>{
      const values=exponent=>{
        const B=10**exponent,disc=Math.sqrt(B*B-4);
        const direct=(B-disc)/2,stable=2/(B+disc);
        const residual=x=>Math.abs(x*x-B*x+1);
        return [residual(direct),residual(stable),direct,stable];
      };
      const [directError,stableError,directRoot,stableRoot]=values(k);
      return {
        curves:[['Direct root residual $|p(x)|$',sample(1,9,u=>values(u)[0])],['Rationalized root residual $|p(x)|$',sample(1,9,u=>values(u)[1])]],
        markers:[[k,directError],[k,stableError]],
        note:'$B=10^{'+k+'}$. Direct small root '+fmt(directRoot)+' has residual $|p(x)|='+mathFmt(directError)+'$; rationalized root '+fmt(stableRoot)+' has residual $|p(x)|='+mathFmt(stableError)+'$. These are computed floating-point residuals; a displayed zero does not prove an exact algebraic root. At $B=10^9$, the displayed decimal $10^{-9}$ has real-polynomial residual $10^{-18}$. The exact positive root is approximately $1/B$.'
      };
    },
    question:'Why is a direct result of zero visibly wrong even before comparing many digits?',
    answer:'Substituting zero into $x^2-Bx+1$ gives one, not zero. The product-of-roots relation also says the small root cannot be zero when the other root is finite.'
  }]
};

function node(tag, text, className) {const n=document.createElement(tag);if(text!==undefined)n.textContent=text;if(className)n.className=className;return n;}
function svgNode(tag, attrs={}) {const n=document.createElementNS('http://www.w3.org/2000/svg',tag);for(const [key,value] of Object.entries(attrs))n.setAttribute(key,String(value));return n;}
function chart(bounds,data,title,figureId,width=640,aspect='free',conic=false,frameGutters=null,labelLayout=null) {
  const W=Math.max(220,Math.round(width)),H=Math.max(260,Math.round(W*0.55));
  const readingScale=Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--reading-scale'))||1;
  const tickCount=W<360&&readingScale>=1.2?1:W<360?2:4;
  const geometry=createVisualGeometry({bounds,width:W,height:H,aspect,gutters:frameGutters??{left:58*readingScale,right:18*readingScale,top:20*readingScale,bottom:42*readingScale},tickCount});
  const {plot,worldToPixel,xTicks,yTicks}=geometry;
  const sx=x=>worldToPixel([x,bounds[2]])[0],sy=y=>worldToPixel([bounds[0],y])[1];
  const [xmin,xmax,ymin,ymax]=bounds;
  const titleId=`${figureId}-svg-title`,descriptionId=`${figureId}-svg-description`,clipId=`${figureId}-clip`;
  const svg=svgNode('svg',{viewBox:`0 0 ${W} ${H}`,width:W,height:H,role:'img','aria-labelledby':`${titleId} ${descriptionId}`});svg.classList.add('exploration-chart');if(conic)svg.classList.add('conic-chart');
  const svgTitle=svgNode('title',{id:titleId});svgTitle.textContent=plainVisualText(title);
  const svgDescription=svgNode('desc',{id:descriptionId});svgDescription.textContent=plainVisualText(data.description??data.note);
  svg.append(svgTitle,svgDescription);
  const defs=svgNode('defs'),clip=svgNode('clipPath',{id:clipId});clip.append(svgNode('rect',{x:plot.x,y:plot.y,width:plot.width,height:plot.height}));defs.append(clip);svg.append(defs);
  const grid=svgNode('g',{class:'chart-grid'});svg.append(grid);
  for(const [index,x] of xTicks.entries()){grid.append(svgNode('line',{x1:sx(x),x2:sx(x),y1:plot.y,y2:plot.y+plot.height}));if(labelLayout&&!labelLayout.indices.includes(index))continue;const label=svgNode('text',{x:sx(x),y:plot.y+plot.height+26*readingScale,'text-anchor':labelLayout&&(index===0||index===xTicks.length-1)?'end':'middle'});label.textContent=fmt(x);svg.append(label);}
  for(const [index,y] of yTicks.entries()){grid.append(svgNode('line',{x1:plot.x,x2:plot.x+plot.width,y1:sy(y),y2:sy(y)}));if(W<360&&tickCount===2&&index===0)continue;const label=svgNode('text',{x:plot.x-9*readingScale,y:sy(y)+(W<360&&index===0?-7:5)*readingScale,'text-anchor':'end'});label.textContent=fmt(y);svg.append(label);}
  svg.append(svgNode('rect',{x:plot.x,y:plot.y,width:plot.width,height:plot.height,class:'chart-frame'}));
  const drawing=svgNode('g',{'clip-path':`url(#${clipId})`});svg.append(drawing);
  if(data.polygons)for(const points of data.polygons)drawing.append(svgNode('polygon',{points:points.map(([x,y])=>`${sx(x)},${sy(y)}`).join(' '),class:'integral-area'}));
  if(data.tiles)for(const r of data.tiles){const rect=signedRectToPixels(r,geometry);drawing.append(svgNode('rect',{x:rect.x,y:rect.y,width:rect.width,height:rect.height,fill:`rgba(49,111,116,${0.13+0.7*r.shade})`,stroke:'#d3dedb','stroke-width':0.5}));}
  if(data.rectangles)for(const r of data.rectangles){const rect=signedRectToPixels(r,geometry);drawing.append(svgNode('rect',{x:rect.x,y:rect.y,width:rect.width,height:rect.height,class:'riemann-rect'}));}
  if(data.areas)for(const points of data.areas){const d=`M ${sx(points[0][0])} ${sy(0)} `+points.map(([x,y])=>`L ${sx(x)} ${sy(y)}`).join(' ')+` L ${sx(points.at(-1)[0])} ${sy(0)} Z`;drawing.append(svgNode('path',{d,class:'integral-area'}));}
  if(data.guides)for(const guide of data.guides){const attrs=guide.axis==='x'?{x1:sx(guide.value),x2:sx(guide.value),y1:plot.y,y2:plot.y+plot.height}:{x1:plot.x,x2:plot.x+plot.width,y1:sy(guide.value),y2:sy(guide.value)};drawing.append(svgNode('line',{...attrs,class:'chart-guide'}));}
  (data.curves||[]).forEach(([,points],i)=>{
    const firstExit=data.curveStopAtExit?.includes(i)?points.findIndex(([x,y])=>x<xmin||x>xmax||y<ymin||y>ymax):-1;
    const visible=firstExit>0?points.slice(0,firstExit+1):points;
    for(const run of finiteRuns(visible))drawing.append(svgNode('polyline',{points:run.map(([x,y])=>`${sx(x)},${sy(y)}`).join(' '),class:`curve curve-${i%4}${data.extensionSeries?.includes(i)?' curve-extension':''}`,...(data.curveDashes?.[i]?{'stroke-dasharray':data.curveDashes[i]}:{})}));
  });
  if(data.arrows)for(const arrow of data.arrows){const [x1,y1]=arrow.from,[x2,y2]=arrow.to,px=sx(x2),py=sy(y2),dx=px-sx(x1),dy=py-sy(y1),length=Math.hypot(dx,dy);if(x1===x2&&y1===y2){drawing.append(svgNode('circle',{cx:px,cy:py,r:3,class:'chart-zero-vector',role:'img','aria-label':'Zero vector at the selected point'}));continue;}drawing.append(svgNode('line',{x1:sx(x1),y1:sy(y1),x2:px,y2:py,class:`vector-arrow vector-${arrow.kind||0}`}));if(length>1e-9){const angle=Math.atan2(dy,dx),head=displayedHeadLength(length,10),spread=0.45;const p1=[px-head*Math.cos(angle-spread),py-head*Math.sin(angle-spread)],p2=[px-head*Math.cos(angle+spread),py-head*Math.sin(angle+spread)];drawing.append(svgNode('polygon',{points:`${px},${py} ${p1[0]},${p1[1]} ${p2[0]},${p2[1]}`,class:`vector-head vector-${arrow.kind||0}`}));}}
  const markers=data.markers||[];
  markers.forEach(([x,y],i)=>{if(!Number.isFinite(x)||!Number.isFinite(y))return;const repeats=markers.slice(0,i).filter(([u,v])=>u===x&&v===y).length;const ring=markers.filter(([u,v])=>u===x&&v===y).length>1;const name=plainVisualText(data.markerLabels?.[i]??data.curves?.[i]?.[0]??`Marker ${i+1}`);const accessible=`${name} at (${fmt(x)}, ${fmt(y)})`;const circle=svgNode('circle',{cx:sx(x),cy:sy(y),r:conic?3.5*readingScale:ring?7+repeats*3:6,class:`chart-marker marker-${i%4}${ring?' marker-coincident':''}`,role:'img','aria-label':accessible});const title=svgNode('title');title.textContent=accessible;circle.append(title);drawing.append(circle);});
  if(data.markerLeaders&&markers.length===2){
    markers.forEach(([x,y],i)=>{const px=sx(x),py=sy(y),labelX=Math.max(plot.x+36,Math.min(plot.x+plot.width-36,px+(i?32:-32))),labelY=Math.max(plot.y+18,Math.min(plot.y+plot.height-18,py+(i?26:-22)));drawing.append(svgNode('line',{x1:px,y1:py,x2:labelX,y2:labelY,class:`marker-leader marker-${i}`}));const label=svgNode('text',{x:labelX,y:labelY-3,'text-anchor':'middle',class:'marker-leader-label'});label.textContent=i?'Plane':'Actual';drawing.append(label);});
  }
  for(const marker of data.openMarkers||[]){const [x,y]=marker.at;const circle=svgNode('circle',{cx:sx(x),cy:sy(y),r:7,class:'chart-open-marker',role:'img','aria-label':`${marker.label} at (${fmt(x)}, ${fmt(y)})`});const title=svgNode('title');title.textContent=`${marker.label} at (${fmt(x)}, ${fmt(y)})`;circle.append(title);drawing.append(circle);}
  return svg;
}
function representative(points,limit=21){
  if(points.length<=limit)return points;
  const indices=new Set(Array.from({length:limit},(_,i)=>Math.round(i*(points.length-1)/(limit-1))));
  return [...indices].map(index=>points[index]);
}
function populateVisualData(container,data){
  container.replaceChildren(node('p','Values update with the controls. Table values are rounded to five significant figures. Long curves are represented by evenly spaced samples; markers, guides, vectors, and region pieces are listed directly.','muted'));
  const addTable=(captionText,headers,rows)=>{
    if(!rows.length)return;
    const scroll=node('div',undefined,'table-scroll'),table=node('table'),caption=node('caption',captionText),head=node('thead'),headRow=node('tr'),body=node('tbody');scroll.tabIndex=0;
    scroll.setAttribute('role','region');scroll.setAttribute('aria-label',`${captionText} table`);
    headers.forEach(header=>{const th=node('th',header);th.scope='col';headRow.append(th);});head.append(headRow);
    rows.forEach(row=>{const tr=node('tr');row.forEach((value,index)=>{const cell=visualProse(index===0?'th':'td',value);if(index===0)cell.scope='row';tr.append(cell);});body.append(tr);});
    table.append(caption,head,body);scroll.append(table);container.append(scroll,node('p','Swipe sideways or focus the table and use the arrow keys to read every column.','table-scroll-cue'));
  };
  if(data.exactTable){
    container.firstChild.textContent='The exact comparison table comes first. Curve samples below are rounded and illustrate only the displayed state.';
    addTable(data.exactTable.caption,data.exactTable.headers,data.exactTable.rows);
  }
  const curveRows=[];
  for(const [label,points] of data.curves||[])for(const [x,y] of representative(points.filter(point=>point.every(Number.isFinite))))curveRows.push([label,fmt(x),fmt(y)]);
  for(const [index,points] of (data.areas||[]).entries())for(const [x,y] of representative(points.filter(point=>point.every(Number.isFinite)),11))curveRows.push([`Shaded boundary ${index+1}`,fmt(x),fmt(y)]);
  addTable('Representative curve and boundary values',['Series','First coordinate','Second coordinate'],curveRows);
  const pointRows=[];
  for(const [index,[x,y]] of (data.markers||[]).entries())if(Number.isFinite(x)&&Number.isFinite(y))pointRows.push([`${data.markerLabels?.[index]??`Marker ${index+1}`} (filled)`,fmt(x),fmt(y)]);
  for(const marker of data.openMarkers||[])pointRows.push([`${marker.label} (open)`,fmt(marker.at[0]),fmt(marker.at[1])]);
  for(const [polygonIndex,points] of (data.polygons||[]).entries())for(const [vertexIndex,[x,y]] of points.entries())pointRows.push([`Region ${polygonIndex+1}, vertex ${vertexIndex+1}`,fmt(x),fmt(y)]);
  addTable('Markers and region vertices',['Object','First coordinate','Second coordinate'],pointRows);
  const rectangleRows=[...(data.rectangles||[]).map((item,index)=>[`Rectangle ${index+1}`,fmt(item.x),fmt(item.y??0),fmt(item.width),fmt(item.height)]),...(data.tiles||[]).map((item,index)=>[`Tile ${index+1}`,fmt(item.x),fmt(item.y),fmt(item.width),fmt(item.height)])];
  addTable('Rectangles and tiles',['Object','x','y','Width','Height'],rectangleRows);
  const arrowRows=(data.arrows||[]).map((arrow,index)=>[`Vector ${index+1}`,fmt(arrow.from[0]),fmt(arrow.from[1]),fmt(arrow.to[0]),fmt(arrow.to[1])]);
  addTable('Vector coordinates',['Object','Start x','Start y','End x','End y'],arrowRows);
  const guideRows=(data.guides||[]).map((guide,index)=>[`Guide ${index+1}`,guide.axis,fmt(guide.value)]);
  addTable('Guide positions',['Object','Axis','Value'],guideRows);
}
export function visualView(id,index=0) {
  const config=index===0?explorations[id]:additionalExplorations[id]?.[index-1];if(!config)return null;
  if(config.kind==='spatial3d')return spatialView(id,index,config);
  const visualNumber=index+1,total=1+(additionalExplorations[id]?.length||0),figureId=`visual-${id}-${visualNumber}`;
  const section=node('section',undefined,'exploration euler-lab');section.id='visual-exploration';section.tabIndex=-1;section.dataset.eulerLab=figureId;section.dataset.state='ready';section.setAttribute('aria-busy','false');
  const title=visualProse('h2',config.title,'euler-lab__title');title.id=`${figureId}-heading`;section.setAttribute('aria-labelledby',title.id);
  section.append(node('p',`Visual investigation ${visualNumber} of ${total}`,'eyebrow'),title);
  const workKey=visualWorkKey(id,visualNumber),opened=openAuthoredRecord(workKey,validVisualWork);
  const work=authoredDraft(workKey,readVisualWork(workKey,opened.raw),opened),notebook=node('details',undefined,'visual-notebook'),notebookBody=node('div',undefined,'visual-notebook-body'),notebookStatus=node('p',authoredInitialMessage(opened,'Visual notes'),'muted');
  notebookStatus.setAttribute('role','status');notebook.append(node('summary','My prediction, observation, and explanation'),notebookBody);
  notebookBody.append(node('p','Before moving a control, predict a change. After testing it, record the setting and what you saw. Then explain whether your prediction held and why.','muted'));
  const fields=[['prediction','1. My prediction'],['observation','2. What I observed'],['explanation','3. My explanation']];
  for(const [field,labelText] of fields){
    const row=node('div',undefined,'visual-notebook-field'),label=node('label',labelText),input=node('textarea');
    input.id=`${figureId}-${field}`;input.rows=3;input.maxLength=2000;input.value=work[field];label.htmlFor=input.id;
    input.addEventListener('input',()=>{
      work[field]=input.value;rememberAuthoredDraft(workKey,work);
      const raw=Object.values(work).some(value=>typeof value==='string'&&value.length)?JSON.stringify(work):null;
      const result=commitAuthoredRecord(workKey,opened,raw,validVisualWork);
      notebookStatus.textContent=authoredMessage(result,'Visual notes');
      if(result.kind==='saved'||result.kind==='cleared')forgetAuthoredDraft(workKey);
    });
    row.append(label,input);notebookBody.append(row);
  }
  notebookBody.append(notebookStatus);authoredTools(notebookBody,workKey,opened,()=>JSON.stringify(work,null,2));
  const layout=node('div',undefined,'exploration-layout'),controls=node('form',undefined,'exploration-controls euler-lab__controls'),figure=node('figure',undefined,'exploration-figure euler-lab__stage'),legend=node('div',undefined,'chart-legend'),readout=node('p',undefined,'exploration-readout euler-lab__status');
  controls.setAttribute('aria-label',plainVisualText(config.title)+' controls');controls.addEventListener('submit',event=>event.preventDefault());
  readout.id=`${figureId}-readout`;readout.setAttribute('aria-live','polite');
  const caption=node('figcaption',`Figure ${Number(id)}.${visualNumber}: ${plainVisualText(config.title)}`,'visually-hidden');
  const dataDetails=node('details',undefined,'exploration-data euler-lab__data'),dataSummary=node('summary','View numerical data for this chart'),dataBody=node('div'),frameScroll=node('div',undefined,'table-scroll'),frameTable=node('table',undefined,'euler-lab__table'),exportButton=node('button','Download data (CSV)','euler-lab__export');
  frameScroll.tabIndex=0;frameScroll.setAttribute('role','region');frameScroll.setAttribute('aria-label','Numerical data table');frameScroll.append(frameTable);exportButton.type='button';exportButton.dataset.labExport='';dataDetails.append(dataSummary,frameScroll,dataBody,exportButton);
  const sliders=config.controls.map((control,i)=>{const wrapper=node('div',undefined,'control');const label=visualProse('label',control.label);const output=node('output',config.controlDisplay?.(i,control.value)??fmt(control.value));const input=node('input');input.type='range';input.min=control.min;input.max=control.max;input.step=control.step;input.value=control.value;input.id=`${figureId}-control-${i}`;input.setAttribute('aria-describedby',readout.id);if(config.controlDisplay)input.setAttribute('aria-valuetext',config.controlDisplay(i,control.value));label.htmlFor=input.id;output.htmlFor=input.id;wrapper.append(label,output,input);controls.append(wrapper);return {input,output};});
  let currentData;const measuredWidth=()=>Math.max(220,Math.round(figure.getBoundingClientRect().width||figure.clientWidth||640));
  const values=()=>sliders.map(({input})=>Number(input.value));
  function redraw(){
    if(!currentData)return;
    const width=measuredWidth(),bounds=config.boundsFor?.(values(),currentData)??config.viewBounds?.(values())??config.bounds;
    const primary=chart(bounds,currentData,config.title,figureId,width,config.aspect,Boolean(config.viewBounds));
    figure.replaceChildren(caption,primary);
    if(!config.detail)return;
    const scale=Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--reading-scale'))||1;
    const W=Math.max(220,Math.round(width)),H=Math.max(260,Math.round(W*.55));
    const gutters={left:58*scale,right:18*scale,top:20*scale,bottom:42*scale};
    const overview=createVisualGeometry({bounds,width:W,height:H,aspect:config.aspect,gutters});
    const frame={width:W,height:H,gutters:{...gutters},tickCount:W<360&&scale>=1.2?1:W<360?2:4};
    let detail=localVectorDetail(config,currentData,overview,frame);
    // Reserve the actual label width without changing the world-coordinate window.
    const fontMeasure=document.createElement('canvas').getContext('2d');
    if(fontMeasure)fontMeasure.font=`${14*scale}px system-ui,sans-serif`;
    const textWidth=value=>fontMeasure?.measureText(fmt(value)).width??fmt(value).length*14*scale;
    const labelWidth=Math.max(textWidth(detail.geometry.xTicks[0]),...detail.geometry.yTicks.map(textWidth));
    frame.gutters.left=Math.max(frame.gutters.left,labelWidth+13*scale);
    frame.gutters.top=44*scale;
    detail=localVectorDetail(config,currentData,overview,frame);
    // Keep both endpoint labels; omit only intermediate labels that would overlap.
    // Every original grid line and numerical value remains available.
    const ticks=detail.geometry.xTicks,last=ticks.length-1,indices=[0,last];
    const interval=(index,endAligned)=>{const x=detail.geometry.worldToPixel([ticks[index],detail.point[1]])[0],w=textWidth(ticks[index]);return endAligned?[x-w,x]:[x-w/2,x+w/2];};
    const occupied=[interval(0,true),interval(last,true)];
    for(let i=1;i<last;i++){const candidate=interval(i,false);if(occupied.every(([a,b])=>candidate[1]+8*scale<=a||candidate[0]>=b+8*scale)){indices.push(i);occupied.push(candidate);}}
    const panel=node('section',undefined,'vector-local-detail'),heading=node('h3',config.detail.title);
    const detailData={curves:[detail.branch],markers:[detail.point],markerLabels:['P selected world point'],arrows:[detail.arrow],description:detail.disclosure};
    const graphic=chart(detail.bounds,detailData,config.detail.title,`${figureId}-local`,width,'equal',false,frame.gutters,{indices});
    graphic.classList.remove('exploration-chart');graphic.classList.add('vector-local-chart');
    const xLabel=svgNode('text',{x:detail.geometry.plot.x+detail.geometry.plot.width-4,y:detail.geometry.plot.y-5*scale,'text-anchor':'end',class:'vector-axis-label'});xLabel.textContent='x';
    const yLabel=svgNode('text',{x:detail.geometry.plot.x-9*scale,y:detail.geometry.plot.y-22*scale,'text-anchor':'end',class:'vector-axis-label'});yLabel.textContent='y';
    graphic.append(xLabel,yLabel);panel.append(heading,graphic,node('p',detail.disclosure,'vector-local-caption'));figure.append(panel);
  }
  function update(){const selected=sliders.map(({input,output},i)=>{const value=Number(input.value),display=config.controlDisplay?.(i,value)??fmt(value);output.value=display;output.textContent=display;if(config.controlDisplay)input.setAttribute('aria-valuetext',display);return value;});const data=config.draw(selected);currentData=data;redraw();legend.replaceChildren(...(data.curves||[]).map(([label],i)=>visualProse('span',label,`legend-item legend-${i%4}`)));if(config.viewBounds&&!config.finiteView)legend.append(node('span','P selected point · Q directrix foot · F focus','conic-marker-key'));const bounds=config.viewBounds?.(selected);readout.replaceChildren(...visualProse('span',data.note).childNodes);if(bounds)readout.append(node('span',config.finiteView?` Current chart window: x from ${fmt(bounds[0])} to ${fmt(bounds[1])}, y from ${fmt(bounds[2])} to ${fmt(bounds[3])}. The domain remains [0,1].`:` Current view: x from ${fmt(bounds[0])} to ${fmt(bounds[1])}, y from ${fmt(bounds[2])} to ${fmt(bounds[3])}. Unbounded curves continue beyond this finite window; the world coordinates do not change when the view changes.`));populateVisualData(dataBody,data);const firstTable=dataBody.querySelector('table');frameTable.hidden=!firstTable;exportButton.hidden=!firstTable;if(firstTable){frameTable.replaceChildren(...firstTable.childNodes);firstTable.parentElement.remove();}}
  sliders.forEach(({input})=>input.addEventListener('input',update));
  const reset=node('button','Reset','euler-lab__reset');reset.type='reset';controls.append(reset);layout.append(figure,legend,controls);
  const notice=node('details',undefined,'euler-lab__notice');notice.open=true;notice.append(node('summary','What to notice'),visualProse('p',config.question));
  section.append(visualProse('p',config.intro,'euler-lab__question'),notice,layout,readout,dataDetails);
  const details=node('details',undefined,'visual-question');details.append(visualProse('summary',config.question),...[config.answer,...(config.comparison||[])].map(paragraph=>visualProse('p',paragraph)));
  const nextExperiment=node('p','Drag a slider or use arrow keys. Continue with the ','muted'),labLink=node('a','chapter code laboratory');labLink.href=eulerHref(`#chapter/${id}/lab`);nextExperiment.append(labLink,'.');
  const followUps=config.followUps?node('p',undefined,'reference-links'):null;
  if(followUps){followUps.append('Continue with ');config.followUps.forEach(({label,href},index)=>{if(index)followUps.append(index===config.followUps.length-1?' and ':', ');const link=node('a',label);link.href=eulerHref(href);followUps.append(link);});followUps.append('.');}
  section.append(details,nextExperiment,...(followUps?[followUps]:[]));update();
  attachLabFrame(section,{reset:()=>{sliders.forEach(({input},i)=>{input.value=String(config.controls[i].value);});update();}});
  if(!config.pageLocalPrediction)section.append(notebook);
  if(config.predictionGate){
    const predictionInput=config.pageLocalPrediction?node('textarea'):notebookBody.querySelector('textarea');
    const gate=node('div',undefined,'visual-prediction-gate');
    const prompt=node('p',config.pageLocalPrediction?'Write a prediction before revealing the chart and exact comparison table. The controls then let you test it.':'Write a prediction in the notebook before revealing the chart and exact comparison table. The controls then let you test it.','lesson-prompt');
    if(config.pageLocalPrediction){predictionInput.id=`${figureId}-local-prediction`;predictionInput.rows=3;predictionInput.maxLength=2000;}
    const predictionLabel=config.pageLocalPrediction?node('label','My prediction'):null;
    if(predictionLabel)predictionLabel.htmlFor=predictionInput.id;
    const reveal=node('button','Reveal the investigation');reveal.type='button';
    const comparison=node('p',undefined,'prediction-comparison');comparison.hidden=true;
    reveal.disabled=!predictionInput.value.trim();
    predictionInput.addEventListener('input',()=>{reveal.disabled=!predictionInput.value.trim();});
    const revealTargets=[layout,readout,dataDetails,details,nextExperiment,...(followUps?[followUps]:[])];
    revealTargets.forEach(item=>{item.hidden=true;item.style.display='none';});
    dataDetails.open=true;
    reveal.addEventListener('click',()=>{
      if(!predictionInput.value.trim())return;
      revealTargets.forEach(item=>{item.hidden=false;item.style.removeProperty('display');});
      gate.hidden=true;gate.style.display='none';
      comparison.textContent=`Your prediction: ${predictionInput.value}`;
      comparison.hidden=false;
      redraw();
      sliders[0].input.focus();
    });
    gate.append(prompt,...(predictionLabel?[predictionLabel,predictionInput]:[]),reveal);
    section.insertBefore(gate,layout);
    section.insertBefore(comparison,layout);
    if(!config.pageLocalPrediction)notebook.open=true;
  }
  if(typeof ResizeObserver!=='undefined'){
    let removalObserver,frame=0;
    const disconnect=()=>{observer.disconnect();removalObserver?.disconnect();window.removeEventListener('reader-settings-change',redraw);if(frame)cancelAnimationFrame(frame);frame=0;};
    const observer=new ResizeObserver(()=>{if(!section.isConnected){disconnect();return;}if(frame)return;frame=requestAnimationFrame(()=>{frame=0;if(!section.isConnected){disconnect();return;}const width=measuredWidth();if(width!==Number(figure.querySelector('svg')?.getAttribute('width')))redraw();});});
    observer.observe(figure);
    window.addEventListener('reader-settings-change',redraw);
    queueMicrotask(()=>{if(!section.isConnected)return;removalObserver=new MutationObserver(()=>{if(!section.isConnected)disconnect();});removalObserver.observe(document.body,{childList:true,subtree:true});});
  }
  return section;
}

// Expanded investigations follow the original three figures in each chapter.
additionalExplorations['02'].push({afterSection:6,aspect:'equal',title:'A hyperbolic parameter and tangent',intro:'Both branches satisfy $x^2-y^2=1$. Move the dimensionless parameter $t$ and branch sign $s$. The arrow shows $0.1$ times the exact tangent vector, not a unit tangent or an angle.',controls:[range('Hyperbolic parameter $t$',-2,2,.25,0),range('Branch sign $s$',-1,1,2,1)],bounds:[-4.3,4.3,-4.3,4.3],detail:{kind:'world-vector-local',arrowIndex:0,markerIndex:0,title:'Local world-coordinate view of P and 0.1T',minHalfSpan:.35,componentMargin:1.3},draw:([t,s])=>{const point=[s*Math.cosh(t),s*Math.sinh(t)],tangent=[s*Math.sinh(t),s*Math.cosh(t)];return {curves:[['Right branch',Array.from({length:161},(_,i)=>{const u=-2+i/40;return [Math.cosh(u),Math.sinh(u)];})],['Left branch',Array.from({length:161},(_,i)=>{const u=-2+i/40;return [-Math.cosh(u),-Math.sinh(u)];})]],markers:[point],markerLabels:['Selected world point'],arrows:[{from:point,to:[point[0]+.1*tangent[0],point[1]+.1*tangent[1]]}],note:`$P=(${fmt(point[0])},${fmt(point[1])})$, $T=(${fmt(tangent[0])},${fmt(tangent[1])})$, and $x^2-y^2=1$. The ratio $y/x=\\tanh t=${fmt(Math.tanh(t))}$ lies in $(-1,1)$. ${t===0?'At the vertex the parameter tangent is vertical and nonzero, while $dy/dx$ is undefined.':''} Only $-2\\le t\\le2$ is drawn.`};},question:'Why does the tangent at a vertex exist when $dy/dx$ does not?',answer:'At $t=0$, $T=(0,s)$ is nonzero. Its horizontal component vanishes, so the graph slope cannot be obtained by dividing vertical by horizontal velocity.'});
const conicEccentricities=[0.5,0.75,1,1.5,2];
const conicWindows=[[-2.45,2.45,-1.55,1.55],[-6.6,2.6,-2.7,2.7],[-3,2.6,-2.6,2.6],[-2,7,-4,4],[-2,5,-4.6,4.6]];
const conicFamilies=['ellipse','ellipse','parabola','hyperbola','hyperbola'];
additionalExplorations['18'].push({afterSection:8,aspect:'equal',title:'Eccentricity from actual distances',intro:'Keep focus $(0,0)$ and directrix $x=2$ fixed. Choose an eccentricity and a ray. The selected point and its directrix foot supply a measured ratio; the algebraic distance equation proves the whole curve.',controls:[range('Eccentricity choice',0,4,1,0),range('Ray angle (degrees)',-90,90,15,90)],bounds:[-10,10,-6.5,6.5],viewBounds:([choice])=>conicWindows[choice],controlDisplay:(index,value)=>index===0?`e = ${conicEccentricities[value]} (${conicFamilies[value]})`:`${value}°`,draw:([choice,deg])=>{const e=[.5,.75,1,1.5,2][choice],theta=deg*Math.PI/180,p=2*e,R=p/(1+e*Math.cos(theta)),P=[Math.abs(R*Math.cos(theta))<1e-12?0:R*Math.cos(theta),Math.abs(R*Math.sin(theta))<1e-12?0:R*Math.sin(theta)],Q=[2,P[1]],curves=[];const alpha=e>1?Math.acos(-1/e):Math.PI,beta=e>1?Math.acos(1/e):0;const left=Array.from({length:181},(_,i)=>{const u=e<1?-Math.PI+2*Math.PI*i/180:-alpha+1e-3+(2*alpha-2e-3)*i/180,r=p/(1+e*Math.cos(u));return [r*Math.cos(u),r*Math.sin(u)];});curves.push(['Left / complete bounded branch',left]);if(e>1)curves.push(['Right hyperbola branch',Array.from({length:181},(_,i)=>{const u=-beta+1e-3+(2*beta-2e-3)*i/180,r=p/(e*Math.cos(u)-1);return [r*Math.cos(u),r*Math.sin(u)];})]);curves.push(['Focus distance',[[0,0],P]],['Directrix distance',[P,Q]]);return {curves,markers:[P,Q,[0,0]],markerLabels:['Selected point P','Directrix foot Q','Focus F'],guides:[{axis:'x',value:2}],note:`$e=${fmt(e)}$, $\\theta=${deg}^\\circ$, $P=(${fmt(P[0])},${fmt(P[1])})$, $Q=(2,${fmt(Q[1])})$. $|PF|=${fmt(Math.hypot(...P))}$, $|PQ|=${fmt(Math.abs(P[0]-2))}$, ratio $${fmt(Math.hypot(...P)/Math.abs(P[0]-2))}$. ${e<1?'Ellipse':e===1?'Parabola':'Hyperbola; both branches shown separately'}. Unbounded curves are clipped to the finite chart.`};},question:'What changes when eccentricity passes through one?',answer:'Completing the squared distance equation changes the horizontal quadratic sign: ellipse for $0<e<1$, parabola at $e=1$, and two-branch hyperbola for $e>1$. A point ratio checks one coordinate; the equation proves the locus.'});
additionalExplorations['19'].push({kind:'spatial3d',model:'helix',afterSection:6,title:'A helix tangent in world coordinates',intro:'Rotate a radius-two helix and move its parameter. The arrow is a scaled world velocity; the table contains world-coordinate data before projection.',question:'Can two projected points coincide without meeting in space?',answer:'Yes. At t=0 and t=2π, both top-view positions are (2,0), but world heights are 0 and π. Projection discards height.'});
additionalExplorations['17'].push({
  afterSection:1,
  title:'What happens to these functions as the index grows?',
  intro:'Predict what happens at a fixed input while a triangular spike moves toward zero. Compare that with the sequence $x^n$ on $[0,1]$. After making a prediction, inspect the chart and exact table for each mode.',
  predictionGate:true,
  pageLocalPrediction:true,
  finiteView:true,
  controls:[range('Mode: 0 = spike, 1 = $x^n$',0,1,1,0),range('Integer index $n$',2,100,1,4)],
  controlDisplay:(index,value)=>index===0?(value===0?'Moving spike':'x^n'):`n = ${value}`,
  bounds:[0,1,0,5],
  viewBounds:([mode,n])=>[0,1,0,mode===0?Math.max(5,n*1.1):1.1],
  draw:([mode,n])=>{
    if(!Number.isInteger(n)||n<2||n>100||!Number.isInteger(mode)||mode<0||mode>1)throw new Error('Choose an integer n from 2 to 100 and a listed mode.');
    if(mode===0){
      const probe=n===2?2:n===3?1.5:0;
      const spikeRow=k=>[String(k),exactFraction(2,k),exactFraction(1,k),String(k),k===2?'2':k===3?'3/2':'0','1'];
      return {curves:[['Exact triangular spike',[[0,0],[1/n,n],[2/n,0],[1,0]]]],markers:[[1/n,n],[.5,probe]],markerLabels:['Moving peak','Fixed probe x=1/2'],note:`For n=${n}, the peak is (1/${n},${n}), support ends at 2/${n}, supremum is ${n}, exact integral is 1, and f_n(1/2)=${probe}. For every fixed x>0, eventually x>2/n; f_n(0)=0. The pointwise limit is zero, but the integrals stay one. The graph is finite evidence; the vertex and area formulas prove the claims.`,exactTable:{caption:'Exact spike comparison on [0,1]; selected n first, n starts at 2',headers:['n','Support end','Peak x','Height / supremum','f_n(1/2)','Integral'],rows:[n,...[2,3,4,10,100].filter(k=>k!==n)].map(spikeRow)}};
    }
    const points=Array.from({length:101},(_,i)=>[i/100,(i/100)**n]);
    const powerRow=k=>[String(k),k<=10?exactFraction(1,2**k):`2^(-${k})`,'1',exactFraction(1,k+1)];
    return {curves:[['x^n on [0,1]',points]],markers:[[.5,2**(-n)],[1,1]],markerLabels:['Fixed probe x=1/2','Endpoint x=1'],note:`For n=${n}, x^n at x=1/2 is 2^(-${n}); x^n(1)=1, and the exact integral is 1/${n+1}. The pointwise limit is zero on [0,1) and one at 1. This convergence is not uniform, but the integrals tend to zero, equal to the integral of the limit.`,exactTable:{caption:'Exact x^n comparison on [0,1]; selected n first',headers:['n','Value at x=1/2','Value at x=1','Integral'],rows:[n,...[2,3,4,10,100].filter(k=>k!==n)].map(powerRow)}};
  },
  question:'Which inference fails for the spike sequence, and why does the x^n mode differ?',
  answer:'For spikes, pointwise convergence has no one-index bound over all x: the moving supremum is n, so integration need not preserve the limit and every integral equals 1. For x^n, convergence is also nonuniform on [0,1], but its integrals are 1/(n+1) and do converge to the integral of its pointwise limit.'
});
additionalExplorations['20'].push({kind:'spatial3d',model:'quadric',afterSection:7,title:'Surface families and actual horizontal traces',intro:'Choose a translated axis-aligned standard family and a world plane z=z₀. The highlighted intersection is computed from the surface equation; the gray mesh is a finite patch.',question:'Why can the two-sheet model have an empty trace?',answer:'Its horizontal equation is X²/a²+Y²/b²=Z²/c²−1. When |Z|<c the right side is negative, impossible for a sum of squares. At |Z|=c the trace is a point.'});
additionalExplorations['27'].push({afterSection:6,title:'Resonance and pointwise response',intro:'Compare zero-data solutions of $X^{\\prime\\prime}+4X=\\cos(\\Omega\\tau)$ on one displacement scale. Frequency matching grows an amplitude bound, not the displacement at every instant.',controls:[range('Forcing frequency $\\Omega$',2,3,1,2),range('Probe time $\\tau$',0,12,.25,1)],bounds:[0,12,-3.2,3.2],draw:([omega,t])=>{const resonant=u=>u*Math.sin(2*u)/4,off=u=>(Math.cos(2*u)-Math.cos(3*u))/5,chosen=omega===2?resonant:off;return {curves:[['Resonant response',sample(0,12,resonant)],['Off-frequency response',sample(0,12,off)]],markers:[[t,chosen(t)]],markerLabels:['Selected displacement'],note:`$\\Omega=${omega}$, $\\tau=${fmt(t)}$, selected displacement $X=${fmt(chosen(t))}$. Exact forms: $X_2=\\tau\\sin(2\\tau)/4$, $X_3=(\\cos2\\tau-\\cos3\\tau)/5$. Both have zero initial data. Forcing is acceleration, not plotted displacement.`};},question:'Does resonance make displacement larger at every time?',answer:'No. At $\\tau=\\pi/2$, the resonant displacement is zero while the off-frequency value is $-1/5$. The resonant amplitude envelope can grow like $\\tau/4$.'});
additionalExplorations['27'].push({afterSection:8,title:'Series degree, residual, and actual error',intro:'For $y=e^{t^2/2}$, compare even-degree truncation $P_d$ with the exact solution. A small plotted gap is evidence; the factorial remainder bound certifies an entire interval.',controls:[range('Even degree $d$',0,20,2,4),range('Probe $t$',0,2,.1,1)],bounds:[-2,2,0,8],draw:([d,t])=>{const poly=x=>{let sum=1,term=1;for(let k=1;k<=d/2;k++){term*=x*x/(2*k);sum+=term;}return sum;},exact=Math.exp(t*t/2),approx=poly(t),residual=-(t**(d+1))/(2**(d/2)*fact(d/2)),bound=Math.exp(2)*2**(d/2+1)/fact(d/2+1);return {curves:[['Exact $e^{t^2/2}$',sample(-2,2,x=>Math.exp(x*x/2))],['Truncation $P_d$',sample(-2,2,poly)]],markers:[[t,exact],[t,approx]],markerLabels:['Exact value','Polynomial value'],note:`Degree $${d}$ at $t=${fmt(t)}$: $P_d=${fmt(approx)}$, exact $${fmt(exact)}$, computed absolute gap $${fmt(Math.abs(exact-approx))}$, exact residual $${fmt(residual)}$. On $[-2,2]$ the proven error bound is $${fmt(bound)}$; tiny computed gaps may be affected by floating-point subtraction.`};},question:'Why do nearly overlapping curves not prove convergence?',answer:'The coefficient ratio tends to zero, including after differentiation, and the factorial Taylor remainder bounds the error on the whole stated interval. A finite plot alone cannot establish either result.'});
// All guarantee decisions and counterexample comparisons use bounded integers.
export function nonlinearLimitCertificate(epsilon,delta){
  const m=Math.round(epsilon*4),k=Math.round(delta*20);
  // Accept the canonical numeric tick itself; snapping a nearby radius can turn
  // a failed open band into a false equality certificate.
  if(!Number.isFinite(epsilon)||!Number.isFinite(delta)||m<1||m>20||k<1||k>20||epsilon!==m/4||delta!==k/20)throw new RangeError('Choose epsilon in quarter steps from 1/4 to 5 and delta in twentieth steps from 1/20 to 1.');
  const boundNumerator=k*(80+k),targetNumerator=100*m,gap=boundNumerator-targetNumerator;
  const witness=gap>0?(()=>{const Q=80*(40+k),N=80*k+3*k*k+100*m,errorNumerator=N*(4*Q+N),outsideNumerator=4*errorNumerator-m*Q*Q;return {hNumerator:N,denominator:Q,x:exactFraction(2*Q+N,Q),error:exactFraction(errorNumerator,Q*Q),outsideNumerator,insideNumerator:k*Q-20*N};})():null;
  return {m,k,epsilon:exactFraction(m,4),delta:exactFraction(k,20),bound:exactFraction(boundNumerator,400),gap,kind:gap<0?'valid':gap===0?'equality':'failed',witness};
}
additionalExplorations['04'].push({
  afterSection:5,
  title:'Which nonlinear input bands really guarantee the output band?',
  intro:'For $f(x)=x^2$ near $x=2$, choose the positive output tolerance $\\varepsilon$ and input radius $\\delta$ independently. Predict whether every real input with $0<|x-2|<\\delta$ has $|x^2-4|<\\varepsilon$. The curve is a finite picture; the comparison uses an inequality for the whole band or an exact interior counterexample.',
  introBeforeChart:true,predictionGate:true,
  controls:[range('Output tolerance $\\varepsilon$',.25,5,.25,2.25),range('Input radius $\\delta$',.05,1,.05,.4)],
  bounds:[.75,3.25,-1.5,10.5],
  draw:([epsilon,delta])=>{
    const c=nonlinearLimitCertificate(epsilon,delta),right=2+delta,left=2-delta,w=c.witness;
    const rows=[['Selected $\\varepsilon$',`$${c.epsilon}$`,'Output tolerance'],['Selected $\\delta$',`$${c.delta}$`,'Open input radius'],['Supremum $B(\\delta)=4\\delta+\\delta^2$',`$${c.bound}$`,'Right boundary is excluded'],['Guarantee',c.kind==='failed'?'Fails for this $\\delta$':c.kind==='equality'?'Works; equality only at excluded boundary':'Works; bound below tolerance',`$B(\\delta)${c.kind==='failed'?'>':'\\le'}\\varepsilon$`]];
    if(w)rows.push(['Interior witness $x$',`$${w.x}$`,'$0<|x-2|<\\delta$'],['Witness output error',`$${w.error}$`,'$|x^2-4|>\\varepsilon$']);
    const note=`$\\varepsilon=${c.epsilon}$ and $\\delta=${c.delta}$. $B(\\delta)=${c.bound}${c.kind==='failed'?'>':'\\le'}${c.epsilon}=\\varepsilon$. ${c.kind==='failed'?`This proposal fails: the exact interior witness $x=${w.x}$ has $0<|x-2|<\\delta$ and $|x^2-4|=${w.error}>\\varepsilon$.`:c.kind==='equality'?'This proposal works: equality occurs only at the excluded right boundary; every eligible input has strictly smaller error.':'This proposal works for every eligible real input.'} Curve samples illustrate the setting; the inequality or exact rational witness decides it.`;
    return {curves:[['$f(x)=x^2$',sample(.75,3.25,x=>x*x)]],guides:[{axis:'x',value:left},{axis:'x',value:right},{axis:'y',value:4-epsilon},{axis:'y',value:4+epsilon}],openMarkers:[{at:[left,left*left],label:'Excluded left input boundary'},{at:[right,right*right],label:'Excluded right input boundary'}],markers:[[2,4],...(w?[[2+w.hNumerator/w.denominator,(2+w.hNumerator/w.denominator)**2]]:[])],markerLabels:['Center, excluded from punctured-neighborhood test',...(w?['Strict interior counterexample']:[])],note,exactTable:{caption:'Exact nonlinear epsilon–delta certificate for the selected open band',headers:['Quantity','Exact value or result','Reason'],rows}};
  },
  question:'Does the selected delta guarantee the tolerance for every eligible input? Why does equality at an excluded boundary still work, and what does one failed delta say about the limit?',
  answer:'Write $h=x-2$. For every $0<|h|<\\delta$, $|x^2-4|=|4h+h^2|\\le4|h|+h^2<4\\delta+\\delta^2=B(\\delta)$. Positive inputs $h_n=\\delta(1-1/n)$ approach the excluded right boundary, so $B$ is the unattained supremum. Thus the guarantee holds exactly when $B(\\delta)\\le\\varepsilon$; equality works because every eligible input has strictly smaller error. The greatest radius is $c=\\sqrt{4+\\varepsilon}-2=\\varepsilon/(\\sqrt{4+\\varepsilon}+2)$. If a proposed $\\delta>c$, the interior input $x=2+(c+\\delta)/2$ has error greater than $\\varepsilon$. The table gives an exact rational witness for failed control settings. A failed proposal rejects that delta alone. Failure of the limit would require one fixed positive epsilon for which every positive delta fails; here a smaller delta always works. This assumes the full real domain and a symmetric input band.'
});
// The finite controls are exact quarter ticks; the authored proofs cover every real tilt.
export function theoremHypothesesCertificate(caseIndex,mu,c){
  const M=Math.round(mu*4),C=Math.round(c*4);
  if(!Number.isInteger(caseIndex)||caseIndex<1||caseIndex>4||!Number.isFinite(mu)||!Number.isFinite(c)||M< -4||M>4||C< -4||C>4||mu!==M/4||c!==C/4)throw new RangeError('Choose a case from 1 to 4 and exact quarter-step tilt and probe values from -1 to 1.');
  const applicable=caseIndex===1,exists=caseIndex===1||caseIndex===4,interior=Math.abs(C)<4,defined=caseIndex===1||C!==0;
  const matching=interior&&defined&&(caseIndex===1?C===0:caseIndex===4?Math.abs(C)===2:false);
    const valueNumerator=caseIndex===1?C*C+M*C:caseIndex===2?4*Math.abs(C)+M*C:caseIndex===3?(4+M)*C-(C>=0?32:0):4*Math.abs(C)-C*C+M*C;
  const derivativeNumerator=!defined?null:caseIndex===1?2*C+M:caseIndex===2?M+(C<0?-4:4):caseIndex===3?4+M:M+(C<0?-4:4)-2*C;
  return {caseIndex,M,C,applicable,exists,interior,defined,matching,secantNumerator:M,valueNumerator,valueDenominator:16,derivativeNumerator,derivativeDenominator:4,matches:caseIndex===1?[0]:caseIndex===4?[-2,2]:[]};
}
additionalExplorations['08'].push({
  afterSection:1,
  title:'Three questions about a secant slope',
  intro:"The initial view is Rule 4, $f(x)=|x|-x^2+\\mu x$, with $\\mu=0$ and $c=0$ on $[-1,1]$. Predict three claims separately: whether the mean value theorem applies, whether any interior derivative matches the endpoint secant, and whether the selected probe is a match. After revealing, compare the four rules; the exact table gives the current function definition. The vertical scale fits the selected curves, so read the axis values when comparing settings. The formulas prove the claims; the plot illustrates finitely many points.",
  introBeforeChart:true,predictionGate:true,
  controls:[range('Rule number',1,4,1,4),range('Tilt $\\mu$',-1,1,.25,0),range('Probe $c$',-1,1,.25,0)],
  controlDisplay:(index,value)=>index===0?`Rule ${value}`:exactFraction(Math.round(4*value),4),
  bounds:[-1.12,1.12,-3,3],
  boundsFor:(_values,data)=>{
    const heights=[...(data.curves||[]).flatMap(([,points])=>points.map(([,y])=>y)),...(data.markers||[]).map(([,y])=>y),...(data.openMarkers||[]).map(marker=>marker.at[1])];
    const low=Math.min(...heights),high=Math.max(...heights),span=Math.max(.5,high-low),mid=(low+high)/2;
    return [-1.12,1.12,mid-.65*span,mid+.65*span];
  },
  draw:([caseIndex,mu,c])=>{
    const state=theoremHypothesesCertificate(caseIndex,mu,c),{C,M}=state;
    const f=x=>caseIndex===1?x*x+mu*x:caseIndex===2?Math.abs(x)+mu*x:caseIndex===3?(1+mu)*x-(x>=0?2:0):Math.abs(x)-x*x+mu*x;
    const secantIntercept=caseIndex===1||caseIndex===2?1:caseIndex===3?-1:0;
    const curves=caseIndex===3?[
      ['Rule 3, left branch',sample(-1,-1/160,x=>(1+mu)*x)],
      ['Rule 3, right branch',sample(0,1,x=>(1+mu)*x-2)]
    ]:[['Selected rule',sample(-1,1,f)]];
    curves.push(['Endpoint secant',sample(-1,1,x=>mu*x+secantIntercept)]);
    if(state.interior&&state.defined){const derivative=state.derivativeNumerator/4,from=Math.max(-1,c-.28),to=Math.min(1,c+.28);curves.push(['Tangent at selected interior probe',sample(from,to,x=>f(c)+derivative*(x-c))]);}
    const fraction=(n,d)=>exactFraction(n,d),matches=state.matches.length?state.matches.map(tick=>fraction(tick,4)).join(', '):'none';
    const derivative=state.defined?`$${fraction(state.derivativeNumerator,4)}$`:'undefined';
    const probe=state.interior?state.defined?(state.matching?'eligible and matches the secant':'eligible, but does not match the secant'):'interior, but derivative undefined':'endpoint: ineligible for the theorem’s interior conclusion';
    const hypothesis=state.applicable?'yes: continuous and differentiable':'no: '+(caseIndex===3?'jump at zero':'corner at zero');
    const ruleDefinitions=["f(x)=x^2+\\mu x", "f(x)=|x|+\\mu x", "f(x)=\\begin{cases}(1+\\mu)x&x<0\\\\(1+\\mu)x-2&x\\ge0\\end{cases}", "f(x)=|x|-x^2+\\mu x"];
    const rows=[
      ['Function definition','$'+ruleDefinitions[caseIndex-1]+'$','Selected rule on the real line'],
      ['Selected tilt','$\\mu='+fraction(M,4)+'$','Linear coefficient; the secant has the same slope'],
      ['Selected rule',`$${caseIndex}$`,'All rules are defined on $\\mathbb R$'],
      ['Endpoint secant slope',`$${fraction(M,4)}$`,'Exact for this tilt'],
      ['Theorem hypotheses',hypothesis,caseIndex===3?'$f(0)=-2$; left limit $0$':caseIndex===1?'Polynomial on the interval':'Continuous; left and right derivatives at $0$ differ'],
      ['Any matching interior derivative?',state.exists?'yes':'no',`Complete matching set: $${matches}$`],
      ['Selected probe',`$c=${fraction(C,4)}$`,probe],
      ['Selected function value',`$${fraction(state.valueNumerator,16)}$`,'Assigned value, including at the jump'],
      ['Derivative at selected probe',derivative,state.interior?'Interior probe':'Ambient derivative only; endpoint remains ineligible']
    ];
    if(caseIndex===3)rows.push(['At the jump','$f(0)=-2$; left limit $0$','Left difference quotient from the assigned value is $1+\\mu+2/h\\to-\\infty$ as $h\\uparrow0$']);
    const markers=[[-1,f(-1)],[1,f(1)],[c,f(c)]],markerLabels=['Left endpoint','Right endpoint','Selected probe'+(c===0&&caseIndex===3?' (assigned value)':'')];
    if(caseIndex===3&&c!==0){markers.push([0,-2]);markerLabels.push('Assigned value at zero');}
    for(const tick of state.matches){
      const x=tick/4,label='Exact matching derivative at c='+fraction(tick,4);
      const existing=markers.findIndex(([coordinate])=>coordinate===x);
      if(existing>=0)markerLabels[existing]+='; '+label;
      else {markers.push([x,f(x)]);markerLabels.push(label);}
    }
    const note=`Rule ${caseIndex}; $\\mu=${fraction(M,4)}$, $c=${fraction(C,4)}$. Theorem applicable: ${state.applicable?'yes':'no'}. Matching interior derivative exists: ${state.exists?'yes':'no'} (${matches}). Selected probe: ${probe}; derivative ${derivative}, secant $${fraction(M,4)}$. ${caseIndex===3?'At zero, the filled value is $-2$ and the excluded left limit is $0$. ':''}The vertical scale fits the selected curves; read the axis values across settings. The plot samples finitely many points; the piecewise derivatives decide these statements.`;
    return {curves,markers,markerLabels,openMarkers:caseIndex===3?[{at:[0,0],label:'Excluded left limit, not the function value'}]:[],note,description:plainVisualText(note),exactTable:{caption:'Exact theorem and probe comparison for the selected rule, tilt, and point',headers:['Question or quantity','Exact result','Reason or eligibility'],rows}};
  },
  question:'Compare all four rules: which satisfy the hypotheses, which have matching derivatives anyway, and why is the jump different from the corner?',
  followUps:[
    {label:'Lesson 8.2',href:'#chapter/08/lesson/2',printHref:'#chapter-08-lesson-2'},
    {label:'Problem 08.36',href:'#chapter/08/practice/9/problem/36',printHref:'#problem-08-36'},
    {label:'Problem 08.37',href:'#chapter/08/practice/10/problem/37',printHref:'#problem-08-37'}
  ],
  answer:"For every real $\\mu$, the four endpoint secants equal $\\mu$. Only Rule 1 satisfies both theorem hypotheses. Rules 1 and 4 have matching interior derivatives, at $0$ and at $\\{-1/2,1/2\\}$ respectively. The selected probe answers a third question: endpoints are ineligible, even when an ambient derivative exists. The following formulas establish the complete comparison.",
  comparison:[
  "Rule 1: $f(x)=x^2+\\mu x$. Its endpoint values are $1-\\mu$ and $1+\\mu$, so its secant slope is $\\mu$. This polynomial is continuous on the closed interval and differentiable in its interior. Solving $f^{\\prime}(c)=2c+\\mu=\\mu$ gives the unique matching point $c=0$. The theorem applies, and the calculation locates its conclusion.",
  "Rule 2: $f(x)=|x|+\\mu x$. The same endpoint values give secant slope $\\mu$. The function is continuous, but its left and right derivatives at zero are $\\mu-1$ and $\\mu+1$, so differentiability fails there for every real tilt. On either smooth side the derivative differs from $\\mu$ by exactly $1$ or $-1$. Thus no interior derivative matches, and the theorem cannot be invoked.",
  "Rule 3: $f(x)=(1+\\mu)x$ for $x<0$, and $f(x)=(1+\\mu)x-2$ for $x\\ge0$. Endpoint values $-1-\\mu$ and $\\mu-1$ give secant slope $\\mu$. The assigned value is $f(0)=-2$, while the left limit is $0$. Its left difference quotient based at that assigned value is $1+\\mu+2/h\\to-\\infty$ as $h\\uparrow0$; the right derivative is $1+\\mu$. There is no derivative at zero. Away from zero the derivative is $1+\\mu$, which never equals $\\mu$. The jump breaks the hypotheses, and the matching set is empty.",
  "Rule 4: $f(x)=|x|-x^2+\\mu x$. Endpoint values $-\\mu$ and $\\mu$ give secant slope $\\mu$. The function is continuous, but the one-sided derivatives at zero are again $\\mu-1$ and $\\mu+1$. On $-1<c<0$, the derivative is $\\mu-1-2c$, so matching requires $c=-1/2$. On $0<c<1$, it is $\\mu+1-2c$, so matching requires $c=1/2$. Both points are eligible, and zero gives no additional solution. The complete matching set exists despite the failed differentiability hypothesis; a true conclusion does not restore that hypothesis."
]
});
// FTC and Taylor predictive comparisons: existing configurations above are untouched.
// Figure17.4 now uses the established saved visual notebook.
additionalExplorations['17'][2].pageLocalPrediction=false;
export function ftcPointCertificate(rule,m,h){
  const H=Math.round(h*16);
  if(!Number.isInteger(rule)||rule<1||rule>3||!Number.isInteger(m)||m< -1||m>5||!Number.isFinite(h)||H<1||H>8||h!==H/16)throw new RangeError('Choose rule 1–3, an integer assignment -1–5, and an exact sixteenth-step probe.');
  const assigned=rule===1?2:m,continuous=rule===1||rule===2&&m===2,derivativeExists=rule!==3,equalsAssigned=derivativeExists&&assigned===2;
  return {rule,m,H,assigned,continuous,derivativeExists,equalsAssigned,leftLimit:rule===3?1:2,rightLimit:rule===3?3:2,leftNumerator:rule===3?32-H:64-H,rightNumerator:rule===3?96+H:64+H,quotientDenominator:32};
}
additionalExplorations['11'].push({
  afterSection:1,title:'One point, a jump, and an accumulation derivative',
  intro:"Start with Rule 2 on $[-1,1]$: $f(t)=t+2$ for $t\\ne0$, $f(0)=4$, and probe $h=1/4$. All plotted quantities are dimensionless. Before revealing the controls or results, predict three separate claims at zero: is the rate continuous, does the accumulation derivative exist, and does that derivative equal the assigned rate value? Rule 1 fixes the point value at 2; Rule 2 lets that assignment vary; Rule 3 has different left and right branch limits. Finite averages are evidence at a chosen probe; their limits decide the derivative.",
  introBeforeChart:true,predictionGate:true,
  controls:[range('Rate rule',1,3,1,2),range('Assigned value m at zero',-1,5,1,4),range('Probe h',1/16,1/2,1/16,1/4)],
  controlDisplay:(index,value)=>index===0?`Rule ${value}`:index===1?`m = ${value}; Rule 1 fixes f(0)=2`:exactFraction(Math.round(16*value),16),
  bounds:[-1.1,1.1,-2.5,5.5],
  draw:([rule,m,h])=>{
    const c=ftcPointCertificate(rule,m,h),rateLeft=x=>x+(rule===3?1:2),rateRight=x=>x+(rule===3?3:2);
    const accumLeft=x=>x*x/2+(rule===3?1:2)*x,accumRight=x=>x*x/2+(rule===3?3:2)*x;
    const curves=[['Rate, left open branch',sample(-1,-1/160,rateLeft)],['Rate, right open branch',sample(1/160,1,rateRight)],['Accumulation, left branch',sample(-1,0,accumLeft)],['Accumulation, right branch',sample(0,1,accumRight)]];
    const limits=[c.leftLimit,c.rightLimit].filter((v,i,a)=>a.indexOf(v)===i&&v!==c.assigned);
    const openMarkers=limits.map((v,i)=>({at:[0,v],label:`Unassigned rate branch limit ${v}`}));
    const markers=[[0,c.assigned],[0,0],[-h,accumLeft(-h)],[h,accumRight(h)]],markerLabels=['Assigned rate f(0)','Accumulation A(0)','Accumulation at -h','Accumulation at +h'];
    const left=exactFraction(c.leftNumerator,c.quotientDenominator),right=exactFraction(c.rightNumerator,c.quotientDenominator),probe=exactFraction(c.H,16);
    const decisions=`Rate continuous: ${c.continuous?'yes':'no'}; accumulation derivative exists: ${c.derivativeExists?'yes':'no'}; derivative equals assigned rate: ${c.equalsAssigned?'yes':'no'}.`;
    const rateDefinition=rule===1?'$f(t)=t+2$ on all of $[-1,1]$':rule===2?String.raw`$f(t)=\begin{cases}t+2,&t\ne0\\${c.assigned},&t=0\end{cases}$`:String.raw`$f(t)=\begin{cases}t+1,&t<0\\${c.assigned},&t=0\\t+3,&t>0\end{cases}$`;
    const rows=[['Selected rate on [-1,1]',rateDefinition,'The value at zero is separate from the open branches'],['Rule and assigned value',`Rule ${rule}; $f(0)=${c.assigned}$`,rule===1?'Rule 1 fixes the value at 2; m does not alter it':`Slider m = ${m}`],['Rate branch limits',`$${c.leftLimit}$ from left; $${c.rightLimit}$ from right`,'Compare with the filled assigned point for continuity'],['Probe distance',`$h=${probe}$`,'Positive exact probe; finite quotients are not limits'],['Quotient at -h',`$${left}$`,`$[A(-h)-A(0)]/(-h)$`],['Quotient at +h',`$${right}$`,`$[A(h)-A(0)]/h$`],['One-sided quotient limits',`$${c.leftLimit}$ and $${c.rightLimit}$`,'These limits decide derivative existence'],['Rate continuous?',c.continuous?'yes':'no','Both nearby branch limits must equal the assigned value'],['Accumulation derivative exists?',c.derivativeExists?'yes':'no',c.derivativeExists?'Both quotient limits equal 2':'The quotient limits disagree'],['Derivative equals f(0)?',c.equalsAssigned?'yes':'no',c.derivativeExists?`$A^{\\prime}(0)=2$; assigned $f(0)=${c.assigned}$`:'No two-sided derivative exists']];
    const note=`Rule ${rule}, selected m=${m}, effective $f(0)=${c.assigned}$, and $h=${probe}$. Finite quotients: left $${left}$, right $${right}$; one-sided limits $${c.leftLimit}$ and $${c.rightLimit}$. ${decisions} Rate and accumulation share dimensionless chart coordinates; separate rate branches have no vertical bridge. The plot samples finite points; the exact formulas establish the decisions.`;
    return {curves,markers,markerLabels,openMarkers,note,description:plainVisualText(note),exactTable:{caption:'Exact rate and accumulation decisions at zero; finite probe versus limiting quotient',headers:['Question or quantity','Exact result','Reason'],rows}};
  },
  question:'Can a point assignment repair a jump, and can an accumulation derivative exist when the rate is discontinuous?',
  answer:'For every real assigned value m, Rule 1 is continuous with derivative and assigned value both 2. Rule 2 has the same integral and derivative 2 for every m; it is continuous and satisfies the FTC equality exactly when m=2. Rule 3 has one-sided accumulation slopes 1 and 3 for every m, so no point assignment creates a derivative.',
  comparison:[
    'Changing one value of a bounded Riemann-integrable rate changes no oriented integral. For Rules 1 and 2, $A(x)=x^2/2+2x$ on both sides. At $-h$ and $h$ the exact quotients are $2-h/2$ and $2+h/2$, and both tend to 2. The rule-2 assignment m influences continuity and equality to $f(0)$, but never the accumulation derivative.',
    'For Rule 3, $A(x)=x^2/2+x$ on the negative side and $A(x)=x^2/2+3x$ on the positive side. Its quotients are $1-h/2$ and $3+h/2$, tending to 1 and 3. The accumulation is continuous at zero but has a corner. Even m=1 or m=3 matches only one branch and cannot make the two-sided derivative exist.'
  ],
  followUps:[{label:'Lesson 11.2',href:'#chapter/11/lesson/2',printHref:'#chapter-11-lesson-2'},{label:'Problem 11.35',href:'#chapter/11/practice/9/problem/35',printHref:'#problem-11-35'},{label:'Problem 11.36',href:'#chapter/11/practice/9/problem/36',printHref:'#problem-11-36'}]
});

export function taylorIntervalCertificate(interval,k,d){
  if(!Number.isInteger(interval)||interval<1||interval>3||!Number.isInteger(k)||k<1||k>5||!Number.isInteger(d)||d<6||d>120||d%2!==0)throw new RangeError('Choose interval 1–3, radius tick 1–5, and an even denominator 6–120.');
  const positive=interval!==1,edge=positive?10-k:10+k;
  const Mnum=positive?60000:6,Mden=positive?edge**4:1;
  const Bnum=positive?10*k**3:k**3,Bden=positive?edge**4:1000;
  const Enum=k**3,Eden=100*edge;
  const boundCertifies=Bnum*d<=Bden,actualMeets=Enum*d<=Eden;
  return {interval,k,d,Mnum,Mden,Bnum,Bden,Enum,Eden,boundCertifies,actualMeets,witness:positive?k/10:-k/10};
}
additionalExplorations['17'].push({
  afterSection:3,title:'A valid bound and the error it may miss',
  intro:"For $f(x)=1/(1-x)$ and $T_2(x)=1+x+x^2$, start with the positive interval $[0,1/2]$ and uniform target $1/6$. Before revealing, predict separately whether a valid uniform third-derivative bound certifies that target and whether the actual error meets it. Then compare negative, positive and symmetric intervals and other tolerances. The exact remainder decides actual error; a sampled curve alone cannot.",
  introBeforeChart:true,predictionGate:true,
  controls:[range('Interval choice',1,3,1,2),range('Radius r',.1,.5,.1,.5),range('Tolerance denominator d in 1/d',6,120,2,6)],
  controlDisplay:(index,value)=>index===0?['','Negative [-r,0]','Positive [0,r]','Symmetric [-r,r]'][value]:index===1?exactFraction(Math.round(10*value),10):`1/${value}`,
  bounds:[-.55,.55,-.02,2.2],
  boundsFor:(_values,data)=>data.chartBounds,
  draw:([interval,r,d])=>{
    const k=Math.round(10*r),c=taylorIntervalCertificate(interval,k,d),a=interval===2?0:-k/10,b=interval===1?0:k/10,edge=c.witness;
    const err=x=>Math.abs(x**3/(1-x)),B=c.Bnum/c.Bden,E=c.Enum/c.Eden,tau=1/d;
    const curves=[['Actual absolute error, sampled on selected interval',sample(a,b,err)],['Valid uniform Lagrange bound',[[a,B],[b,B]]],['Target tolerance',[[a,tau],[b,tau]]]];
    const f=n=>exactFraction(n[0],n[1]),M=f([c.Mnum,c.Mden]),bound=f([c.Bnum,c.Bden]),actual=f([c.Enum,c.Eden]),radius=exactFraction(k,10);
    const intervalName=interval===1?`[-${radius},0]`:interval===2?`[0,${radius}]`:`[-${radius},${radius}]`;
    const boundStatus=c.boundCertifies?'certified by the valid bound':'inconclusive from this bound',actualStatus=c.actualMeets?'actual target holds':'actual target fails at the marked endpoint';
    const rows=[['Selected interval',`$${intervalName}$`,'All inputs stay below the pole at 1'],['Radius and tolerance',`$r=${radius}$; $\\tau=1/${d}$`,'Uniform target on this interval'],['Valid maximum of $|f^{\\prime\\prime\\prime}|$',`$M=${M}$`,interval===1?'Maximum at center 0':'Maximum at positive endpoint; center-only M=6 is invalid'],['Uniform Lagrange bound',`$B=${bound}$`,`$Mr^3/6$; exact comparison: ${c.Bnum}·${d} ${c.boundCertifies?'≤':'>'} ${c.Bden}`],['Bound certificate',boundStatus,c.boundCertifies?'$B\\le\\tau$ suffices for every input':'An upper bound above target does not prove failure'],['Exact maximum absolute error',`$E=${actual}$ at $x=${exactFraction(interval===1?-k:k,10)}$`,'From the exact remainder $x^3/(1-x)$'],['Actual target',actualStatus,`Exact comparison: ${c.Enum}·${d} ${c.actualMeets?'≤':'>'} ${c.Eden}`]];
    const ymin=-.04*Math.max(B,tau,E,.04),ymax=1.14*Math.max(B,tau,E,.04);
    const note=`Interval $${intervalName}$, $r=${radius}$, target $1/${d}$. Valid $M=${M}$, bound $B=${bound}$: ${boundStatus}. Exact maximum $E=${actual}$ at $x=${exactFraction(interval===1?-k:k,10)}$: ${actualStatus}. Vertical axis rescales for the selected state, from ${fmt(ymin)} to ${fmt(ymax)}; read its labels when comparing settings. The sampled curve illustrates error only on the selected interval; exact algebra decides the maximum.`;
    return {curves,markers:[[edge,E]],markerLabels:['Exact worst endpoint witness'],note,description:plainVisualText(note),chartBounds:[-.55,.55,ymin,ymax],exactTable:{caption:'Uniform Taylor certificate and actual maximum on the selected interval',headers:['Quantity','Exact value or status','Proof or comparison'],rows}};
  },
  question:'When the valid Lagrange bound is above the target, what additional evidence decides whether the model actually fails?',
  answer:'Use the exact identity $1/(1-x)-(1+x+x^2)=x^3/(1-x)$. The derivative maximum yields only a sufficient uniform certificate. If that bound exceeds the tolerance, compare the exact endpoint maximum separately; an endpoint error above tolerance is a genuine failure witness.',
  comparison:[
    "For every real $0<r\\le1/2$, $f^{\\prime\\prime\\prime}(x)=6/(1-x)^4$ has positive derivative $24/(1-x)^5$ throughout the selected interval. On the negative half its maximum is 6; on a positive or symmetric interval it is $6/(1-r)^4$. With $r=k/10$, these give the exact M and B fractions shown in the table. The center value 6 cannot bound an interval extending to positive x.",
    "The exact remainder has absolute value $u^3/(1+u)$ at $x=-u$ and $u^3/(1-u)$ at $x=u$. Their derivatives with respect to u are $u^2(3+2u)/(1+u)^2$ and $u^2(3-2u)/(1-u)^2$, respectively. Both are nonnegative for $0\\le u\\le r\\le1/2$, and positive for $u>0$, so the errors increase towards the endpoints. At equal positive u the latter error is larger. Hence the negative maximum is $k^3/[100(10+k)]$ at $-r$, while the positive and symmetric maximum is $k^3/[100(10-k)]$ at $+r$. These arguments cover every input, beyond the sampled curve.",
    'At $r=1/2$ and target $1/6$, the positive interval actually fails because $E=1/4$, while the negative interval has bound $B=1/8$ and certifies. At $r=1/5$ and target $1/72$, the positive bound $5/256$ is inconclusive although exact error $1/100$ meets the target. Equality counts as meeting a non-strict tolerance: on the negative interval $r=1/2,d=8$ the bound equals the target; at $r=1/2,d=12$ the exact error equals it; on the positive interval $r=1/5,d=100$ the exact error equals it while the bound remains inconclusive.'
  ],
  followUps:[{label:'Lesson 17.4',href:'#chapter/17/lesson/4',printHref:'#chapter-17-lesson-4'},{label:'Problem 17.36',href:'#chapter/17/practice/9/problem/36',printHref:'#problem-17-36'},{label:'Problem 17.37',href:'#chapter/17/practice/10/problem/37',printHref:'#problem-17-37'}]
});
// Figure 26.4: exact flux decisions precede the meridian sketch.
export function sphereFluxCertificate(field,boundary,R,normal){
  for(const [value,maximum,label] of [[field,3,'field'],[boundary,3,'boundary'],[R,3,'radius'],[normal,2,'normal']])
    if(!Number.isInteger(value)||value<1||value>maximum)throw new RangeError('Choose a discrete '+label+' control.');
  const sign=normal===1?1:-1,closed=boundary!==2,regular=boundary===2?null:field!==3||boundary===3;
  let outer=0,innerNumerator=0,innerDenominator=1;
  if(field===1&&boundary===2)outer=3*R*R;
  if(field===2){outer=(boundary===2?2:4)*R**3;if(boundary===3){innerNumerator=-(R**3);innerDenominator=2;}}
  if(field===3){outer=boundary===2?2:4;if(boundary===3)innerNumerator=-4;}
  const gcd=(a,b)=>b?gcd(b,a%b):Math.abs(a)||1;
  const reduce=(n,d)=>{const g=gcd(n,d);return {numerator:n===0?0:sign*n/g,denominator:d/g};};
  return {field,boundary,R,normal,sign,surfaceFieldDefined:true,closed,
    fieldC1NearEnclosedVolume:regular,volumeIdentityEligibleAfterOrientationCorrection:closed&&regular,
    outwardConvention:normal===1,outer:reduce(outer,1),inner:reduce(innerNumerator,innerDenominator),
    total:reduce(outer*innerDenominator+innerNumerator,innerDenominator)};
}
additionalExplorations['26'].push({
  afterSection:4,title:'Which flux identity is actually available?',
  intro:"Start with the inverse-square field $\\mathbf F=\\mathbf r/|\\mathbf r|^3$, where $\\mathbf r=(x,y,z)$, on $\\mathbb R^3\\setminus\\{0\\}$. The selected surface is the complete sphere of radius $2$, with outward normal. Before revealing results, predict separately whether the surface is closed, whether the divergence theorem applies to its ball, and its actual flux. Then change the field, boundary, radius and all component normals. The diagram is a 2D $x,z$ meridian cross-section; the exact table records the decisions.",
  introBeforeChart:true,predictionGate:true,aspect:'equal',
  controls:[range('Field',1,3,1,3),range('Boundary',1,3,1,1),range('Radius R',1,3,1,2),range('All component normals',1,2,1,1)],
  controlDisplay:(i,v)=>i===0?['','constant vertical','smooth radial','inverse square'][v]:i===1?['','full sphere','curved upper hemisphere; no base','complete shell; inner R/2'][v]:i===2?String(v):['','outward','reversed'][v],
  bounds:[-3.8,3.8,-3.8,3.8],
  draw:([field,boundary,R,normal])=>{
    const c=sphereFluxCertificate(field,boundary,R,normal),sgn=c.sign;
    const pi=({numerator:n,denominator:d})=>n===0?'$0$':d===1?'$'+(n===1?'':n===-1?'-':n)+'\\pi$':'$'+(n<0?'-':'')+'\\frac{'+Math.abs(n)+'}{'+d+'}\\pi$';
    const fieldName=['','$(0,0,3)$','$\\mathbf r$','$\\mathbf r/|\\mathbf r|^3$'][field];
    const domain=field===3?'$\\mathbb R^3\\setminus\\{0\\}$':'$\\mathbb R^3$';
    const boundaryName=['','full sphere','curved upper hemisphere, base excluded','complete shell, outer R and inner R/2'][boundary];
    const clean=value=>Math.abs(value)<1e-10?0:value;
    const point=(radius,t)=>[clean(radius*Math.cos(t)),clean(radius*Math.sin(t))];
    const circle=radius=>sample(0,2*Math.PI,t=>t,160).map(([t])=>point(radius,t));
    const upper=sample(0,Math.PI,t=>t,80).map(([t])=>point(R,t));
    const curves=boundary===2?[['Upper curved arc; no base segment',upper]]:[['Outer spherical meridian',circle(R)],...(boundary===3?[['Inner spherical meridian',circle(R/2)]]:[])];
    const arrows=[];
    for(const [radius,inner] of boundary===3?[[R,false],[R/2,true]]:[[R,false]]){
      const angles=boundary===2?[Math.PI/5,Math.PI/2,4*Math.PI/5]:[0,Math.PI/2,Math.PI,3*Math.PI/2];
      for(const t of angles){const [x,z]=point(radius,t),direction=sgn*(inner?-1:1),length=.37;
        arrows.push({from:[x,z],to:[clean(x+direction*length*Math.cos(t)),clean(z+direction*length*Math.sin(t))],kind:inner?1:0});}
    }
    const regularReason=boundary===2?'No enclosed volume for this open selected surface':field===3&&boundary===1?'The ball contains the excluded origin':'An open neighborhood of the chosen solid avoids field singularities';
    const route=boundary===2?'Direct surface flux; projection works for the constant field':c.volumeIdentityEligibleAfterOrientationCorrection?(normal===1?'Direct components or the outward divergence theorem':'Direct components, or use the outward divergence theorem and negate'):'Direct surface flux; the ball theorem is unavailable';
    const rows=[
      ['Field and domain',fieldName+' on '+domain,'The field is defined at every selected surface point'],
      ['Selected boundary',boundaryName,c.closed?'Closed; all components included':'Open; the base disk is excluded'],
      ['Proposed volume regularity',c.fieldC1NearEnclosedVolume?'eligible field regularity':'unavailable',regularReason],
      ['Volume identity',c.volumeIdentityEligibleAfterOrientationCorrection?'eligible after orientation check':'ineligible',c.closed?'Closure and field regularity audited separately':'The selected surface is open'],
      ['Selected normal',normal===1?'outward convention':'all normals reversed',normal===1?'Matches the standard outward orientation':'Standard outward identity requires a sign reversal'],
      [boundary===2?'Curved component flux':'Outer component flux',pi(c.outer),'Exact signed coefficient of $\\pi$'],
      ['Inner shell component flux',boundary===3?pi(c.inner):'not a boundary component',boundary===3?(normal===1?'Shell-outward inner normal points toward the origin':'Selected reversed inner normal points away from the origin'):'No inner shell sphere selected'],
      ['Total signed flux',pi(c.total),'Exact result; independent of the plotted samples'],
      ['Valid calculation route',route,'Check hypotheses before invoking an identity']
    ];
    const note='Field '+(field===1?'constant vertical':field===2?'smooth radial':'inverse square')+', '+boundaryName+', R='+R+', '+(normal===1?'outward':'reversed')+' normals. Closed: '+(c.closed?'yes':'no')+'; volume identity eligible after orientation correction: '+(c.volumeIdentityEligibleAfterOrientationCorrection?'yes':'no')+'; actual signed flux '+pi(c.total)+'. This is a 2D x,z meridian cross-section, not surface area or a 2D field plot. Arrows show unit-normal direction only, not field magnitude or flux density.';
    return {curves,arrows,openMarkers:field===3?[{at:[0,0],label:'Excluded origin of inverse-square field'}]:[],
      note,description:plainVisualText(note),exactTable:{caption:'Exact field, boundary, eligibility, orientation and flux certificate',headers:['Audit item','Exact result','Reason'],rows}};
  },
  question:'Does a failed volume-theorem hypothesis determine the flux, and what changes when every normal reverses?',
  answer:'No. The inverse-square field has direct $4\\pi$ flux through a full sphere although it is undefined inside the ball. Every reversed component normal negates its own flux and the total. On eligible closed solids, use the standard theorem with outward normals first, then negate if the selected normals are reversed.',
  comparison:[
    'For $(0,0,3)$, the two complete-sphere hemisphere contributions cancel. On the curved upper half, vertical projection gives $3\\pi R^2$. Each complete shell sphere has zero constant-field flux. The divergence is $0$ everywhere, but the open upper half is not a closed boundary.',
    'For $\\mathbf F=\\mathbf r$, the outward density on radius $R$ is $\\mathbf r\\cdot\\widehat{\\mathbf r}=R$. Sphere area gives $4\\pi R^3$ and upper-half area gives $2\\pi R^3$. On the shell the inner contribution is $-4\\pi(R/2)^3$, so total flux is $\\tfrac72\\pi R^3$. Since $\\nabla\\cdot\\mathbf r=3$, its shell-volume check is $3(4\\pi/3)(R^3-(R/2)^3)=\\tfrac72\\pi R^3$.',
    'For $\\mathbf F=\\mathbf r/|\\mathbf r|^3$, outward density is $1/R^2$ at radius $R$. The full sphere gives $4\\pi$, the curved upper half $2\\pi$, and the complete shell has outer $4\\pi$ plus inner $-4\\pi=0$. Its divergence is $0$ only where $r>0$. It is defined on the curved hemisphere, which is open. Closing it with its base disk introduces the excluded origin on that disk, so the divergence theorem cannot justify a half-ball calculation. Changing $R$ never adds an $R^3$ factor to these direct fluxes.',
    'Closedness and field regularity allow the volume identity in 30 of the 54 settings; 15 already use outward normals. For the other 15, calculate with outward normals and negate. Reversing normals negates every component. At $R=1$, the smooth radial and inverse-square fields both yield $4\\pi$ on a full sphere, though only the smooth field supports the full-ball volume identity.'
  ],
  followUps:[{label:'Lesson 26.5',href:'#chapter/26/lesson/5',printHref:'#chapter-26-lesson-5'},{label:'Problem 26.36',href:'#chapter/26/practice/9/problem/36',printHref:'#problem-26-36'},{label:'Problem 26.37',href:'#chapter/26/practice/10/problem/37',printHref:'#problem-26-37'},{label:'Problem 26.38',href:'#chapter/26/practice/10/problem/38',printHref:'#problem-26-38'}]
});
// Figure 28.4: endpoint aliasing and an interior path witness.
export function numericalAliasingCertificate(m,N,view){
  if(![8,12,16].includes(m)||!Number.isInteger(N)||N<4||N>10||![1,2].includes(view))
    throw new RangeError('Choose the stated integer forcing, grid, and view controls.');
  const exact=t=>t/2-Math.sin(2*m*Math.PI*t)/(4*m*Math.PI);
  const rate=(j,K)=>{
    if((m*j)%K===0)return 0;
    if((2*m*j)% (2*K)===K)return 1;
    return Math.sin(m*Math.PI*j/K)**2;
  };
  const grids=[N,2*N,4*N].map(K=>{
    const stages=Array.from({length:K+1},(_,j)=>rate(j,K));
    const states=[0];for(let j=0;j<K;j++)states.push(states[j]+(stages[j]+stages[j+1])/(2*K));
    const endpoint=m%K===0?0:.5;
    states[K]=endpoint;
    const t=1/(4*m),position=K*t,j=Math.min(K-1,Math.floor(position)),alpha=position-j;
    const probe=states[j]*(1-alpha)+states[j+1]*alpha;
    return {K,stages,states,endpoint,probe,panel:j,alpha};
  });
  return {m,N,view,grids,probeTime:1/(4*m),exactProbe:exact(1/(4*m)),exact};
}
additionalExplorations['28'].push({
  afterSection:4,title:'When three endpoints agree, what happened between them?',
  intro:'Study the dimensionless initial-value problem $y^{\\prime}=g_m(t)=\\sin^2(m\\pi t)$, $y(0)=0$, on $0\\le t\\le1$. Heun uses $N$, $2N$, and $4N$ equal steps; initially $m=16$, $N=4$. Horizontal position is time $t$. Predict the three endpoint states and compare them with the true $y(1)$ before revealing the plots. Then change the base grid and switch between forcing $g_m(t)$ and state $y(t)$. The lines joining sampled states are display connections, not Heun dense output.',
  introBeforeChart:true,predictionGate:true,
  controls:[range('Forcing frequency m',8,16,4,16),range('Base steps N',4,10,1,4),range('View',1,2,1,1)],
  controlDisplay:(i,v)=>i===2?(v===1?'forcing g(t)':'trajectory y(t)'):String(v),
  bounds:[0,1,-.05,1.05],boundsFor:([,,view])=>view===1?[0,1,-.05,1.05]:[0,1,-.02,.55],
  draw:([m,N,view])=>{
    const c=numericalAliasingCertificate(m,N,view),forcing=t=>Math.sin(m*Math.PI*t)**2;
    const rounded=x=>Math.abs(x)<5e-13?'0':x.toPrecision(6);
    const exactEndpoint=x=>x===0?'$0$':'$1/2$';
    const curves=view===1?
      [['Exact forcing $g_m(t)$',Array.from({length:1537},(_,i)=>[i/1536,forcing(i/1536)])],...c.grids.map(g=>[`K=${g.K} forcing stages; straight display connections`,g.stages.map((value,j)=>[j/g.K,value])])]:
      [['Exact state $y(t)$',Array.from({length:1537},(_,i)=>[i/1536,c.exact(i/1536)])],...c.grids.map(g=>[`K=${g.K} Heun states; piecewise-linear display join`,g.states.map((value,j)=>[j/g.K,value])])];
    const markers=view===1?[[1/(2*m),1],...c.grids.map(g=>[1/g.K,g.stages[1]])]:[[c.probeTime,c.exactProbe],...c.grids.map(g=>[c.probeTime,g.probe])];
    const markerLabels=view===1?['First exact forcing peak',...c.grids.map(g=>`First forcing stage, K=${g.K}`)]:['Exact state at interior probe',...c.grids.map(g=>`Linear join at probe, K=${g.K}`)];
    const triples=c.grids.map(g=>exactEndpoint(g.endpoint)).join(', ');
    const note=`Horizontal axis: time $t$ on $[0,1]$; vertical axis: ${view===1?'forcing $g_m(t)$':'state $y(t)$'}. For $m=${m}$ and base $N=${N}$, certified Heun endpoints at $K=${N},${2*N},${4*N}$ are ${triples}; exact $y(1)=1/2$. ${view===1?'The thin joined stage samples may miss peaks of the exact forcing.':'At $t_*=1/(4m)$ the markers compare the exact state with three piecewise-linear display joins.'} Both successive endpoint differences fail to define a finite observed order. Decimal stage and probe values are rounded.`;
    const rows=[
      ['Exact reference','$y(t)=t/2-\\sin(2m\\pi t)/(4m\\pi)$','Independent integration; $y(1)=1/2$'],
      ['Interior probe','$t_*=1/(4m)$; $y(t_*)=1/(8m)-1/(4m\\pi)$','Exact formula; this is not a forcing peak'],
      ...c.grids.map(g=>[`$K=${g.K}$; $K\\mid m$?`,m%g.K===0?'yes':'no',`Integer divisibility certificate; endpoint ${exactEndpoint(g.endpoint)}; true endpoint error ${exactEndpoint(Math.abs(g.endpoint-.5))}`]),
      ['Refinement status','observed order undefined','At least one of the two successive endpoint differences is zero; a zero Richardson estimate is not an error bound'],
      ...c.grids.map(g=>[`$K=${g.K}$ first stage`,`${rounded(g.stages[1])}; first Heun state ${rounded(g.states[1])}`,'Rounded $g(1/K)$ and $Y_1$; stage connections are display lines']),
      ...c.grids.map(g=>[`$K=${g.K}$ interior join`,`$L_K(t_*)\\approx ${rounded(g.probe)}$; $L_K(t_*)-y(t_*)\\approx ${rounded(g.probe-c.exactProbe)}$`,`Containing panel $j=${g.panel}$; interpolation weight $\\alpha\\approx ${rounded(g.alpha)}$. Point comparison, not a global bound`])
    ];
    return {curves,markers,markerLabels,note,description:plainVisualText(note),exactTable:{caption:'Exact endpoint certificates first; rounded stage and interior join data at selected controls',headers:['Quantity','Value or certificate','Reason and status'],rows}};
  },
  question:'If changing the grid makes all three endpoints equal to the exact endpoint, is the joined trajectory certified?',
  answer:'No. The integer divisibility test certifies endpoints only. For $m=16$ and $N=5$, all three endpoints are $1/2$, but the $K=5$ join at $t_*=1/64$ is $(5-\\sqrt5)/1024$, different from $y(t_*)=1/128-1/(64\\pi)$. A point discrepancy refutes exact path agreement; it is not a global error bound. Equal endpoints also leave observed order undefined.',
  comparison:[
    'Heun reduces to composite trapezoidal summation here. The finite cosine sum gives $Y_K=0$ exactly when $K$ divides $m$ and $Y_K=1/2$ otherwise. This arithmetic certificate does not depend on tiny floating-point sine values.',
    'At $m=16,N=4$, the endpoints at $K=4,8,16$ all vanish while the true endpoint is $1/2$. At $m=16,N=5$, all three endpoints equal $1/2$, but the plotted joins still need an interior check.',
    'The probe lies in the containing panel of each grid. The displayed join is a stated interpolation convention; it is not an extra Heun update or a continuous numerical solution. Check several interior points or prove an error bound before claiming uniform accuracy.'
  ],
  followUps:[{label:'Lesson 28.5',href:'#chapter/28/lesson/5',printHref:'#chapter-28-lesson-5'},{label:'Problem 28.37',href:'#chapter/28/practice/10/problem/37',printHref:'#problem-28-37'},{label:'Problem 28.38',href:'#chapter/28/practice/10/problem/38',printHref:'#problem-28-38'},{label:'Problem 28.39',href:'#chapter/28/practice/10/problem/39',printHref:'#problem-28-39'}]
});
export const visualCount=Object.keys(explorations).length+Object.values(additionalExplorations).reduce((count,items)=>count+items.length,0);
