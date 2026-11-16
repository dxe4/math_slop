/* MCMC Atlas teaching laboratories. Dependency-free; deterministic seeds.
 * These small kernels teach mechanisms, not production convergence certification. */
import { mountLabFrame } from './lab-frame.mjs';
function rng(seed) { let s = Number(seed) >>> 0; return function () { s = (s + 0x6D2B79F5) >>> 0; let t=s; t=Math.imul(t^(t>>>15),t|1); t^=t+Math.imul(t^(t>>>7),t|61); return ((t^(t>>>14))>>>0)/4294967296; }; }
function normal(r) { return Math.sqrt(-2*Math.log(Math.max(r(),Number.MIN_VALUE)))*Math.cos(2*Math.PI*r()); }
function mean(x) { return x.reduce((a,b)=>a+b,0)/x.length; }
function variance(x) { const m=mean(x); return x.reduce((a,b)=>a+(b-m)**2,0)/(x.length-1); }
function logTarget(x, bimodal) { if(!bimodal) return -x*x/2; const a=-((x-3)**2)/2,b=-((x+3)**2)/2,m=Math.max(a,b); return m+Math.log(Math.exp(a-m)+Math.exp(b-m)); }
function metropolis(n,scale,r,bimodal=false,temperature=1,start=0) { let x=start,accepted=0; const values=[]; for(let i=0;i<n;i++){const y=x+scale*normal(r); if(Math.log(r())<(logTarget(y,bimodal)-logTarget(x,bimodal))/temperature){x=y;accepted++;} values.push(x);} return {values,accepted}; }
const P=[[.85,.12,.03],[.08,.82,.10],[.06,.14,.80]];
function distribution(p,Pmat=P) { return p.map((_,j)=>p.reduce((s,v,i)=>s+v*Pmat[i][j],0)); }
function categorical(p,u) { let s=0; for(let i=0;i<p.length;i++){s+=p[i];if(u<s)return i;}return p.length-1; }
// Uniform-neighbor proposals on 1--2--3--4 are asymmetric at the boundary.
const pathNeighbors=[[1],[0,2],[1,3],[2]],pathWeights=[1,3,3,1];
function pathKernel(corrected=true) {
  return pathNeighbors.map((neighbors,i)=>{const row=Array(4).fill(0);for(const j of neighbors){const ratio=pathWeights[j]/pathWeights[i]*(corrected?neighbors.length/pathNeighbors[j].length:1);row[j]=Math.min(1,ratio)/neighbors.length;}row[i]=1-row.reduce((a,b)=>a+b,0);return row;});
}
function pathBalance(n,start,r) {
  if(!Number.isInteger(n)||n<1||!Number.isInteger(start)||start<1||start>4)throw new RangeError('Require an integer count >= 1 and starting state 1 through 4.');
  const cases=[true,false].map(corrected=>({corrected,kernel:pathKernel(corrected),state:start-1,law:Array.from({length:4},(_,i)=>i===start-1?1:0),states:[],marginal:[],expected:[],observed:[],expectedSum:0,boundaryCount:0}));
  for(let t=0;t<n;t++){
    // Shared uniforms aid reproducibility; these two paths are not independent.
    const proposalUniform=r(),acceptUniform=r();
    for(const out of cases){
      out.law=distribution(out.law,out.kernel);
      const boundary=out.law[0]+out.law[3];out.marginal.push(boundary);out.expectedSum+=boundary;out.expected.push(out.expectedSum/(t+1));
      // Simulate proposal and acceptance directly, separately from matrix propagation.
      const i=out.state,neighbors=pathNeighbors[i],j=neighbors[Math.floor(proposalUniform*neighbors.length)],ratio=pathWeights[j]/pathWeights[i]*(out.corrected?neighbors.length/pathNeighbors[j].length:1);
      if(acceptUniform<Math.min(1,ratio))out.state=j;
      out.states.push(out.state+1);if(out.state===0||out.state===3)out.boundaryCount++;out.observed.push(out.boundaryCount/(t+1));
    }
  }
  return {corrected:cases[0],naive:cases[1]};
}
function gibbs(n,rho,r) { let x=0,y=0;const points=[];const sd=Math.sqrt(1-rho*rho);for(let i=0;i<n;i++){x=rho*y+sd*normal(r);y=rho*x+sd*normal(r);points.push([x,y]);}return points; }
function slice(n,width,r) { let x=0,evaluations=0;const values=[];const logDensity=y=>{evaluations++;return -y*y/2;};for(let i=0;i<n;i++){const h=logDensity(x)+Math.log(Math.max(r(),Number.MIN_VALUE));let l=x-width*r(),u=l+width;while(logDensity(l)>h)l-=width;while(logDensity(u)>h)u+=width;while(true){const y=l+(u-l)*r();if(logDensity(y)>=h){x=y;break;}if(y<x)l=y;else u=y;}values.push(x);}values.evaluations=evaluations;return values; }
// Target covariance diag(1, .04); kinetic energy p^T M^-1 p/2.
function energy(q,p,mass) { return .5*(q[0]**2+25*q[1]**2+p[0]**2/mass[0]+p[1]**2/mass[1]); }
function leapfrog(q0,p0,eps,steps,mass=[1,1]) { const q=q0.slice(),p=p0.slice();p[0]-=eps*q[0]/2;p[1]-=eps*25*q[1]/2;for(let j=0;j<steps;j++){q[0]+=eps*p[0]/mass[0];q[1]+=eps*p[1]/mass[1];const c=j===steps-1?.5:1;p[0]-=c*eps*q[0];p[1]-=c*eps*25*q[1];}return {q,p}; }
function hmc(n,eps,r,mass=[1,1]) {let q=[2,1],accepted=0,maxError=0;const points=[];for(let i=0;i<n;i++){const p=mass.map(m=>Math.sqrt(m)*normal(r)),proposal=leapfrog(q,p,eps,10,mass),d=energy(proposal.q,proposal.p,mass)-energy(q,p,mass);maxError=Math.max(maxError,Math.abs(d));if(Math.log(r())<-d){q=proposal.q;accepted++;}points.push(q.slice());}return {points,accepted,maxError}; }
function acf(x,lag) { if(!Number.isInteger(lag)||lag<0||lag>=x.length)return NaN;const m=mean(x),den=x.reduce((s,v)=>s+(v-m)**2,0);return den?x.slice(lag).reduce((s,v,i)=>s+(v-m)*(x[i]-m),0)/den:NaN; }
function ar1(n,rho,r) {let x=normal(r);const values=[];for(let i=0;i<n;i++){x=rho*x+Math.sqrt(1-rho*rho)*normal(r);values.push(x);}return values; }
// Exact variance of the mean of n stationary, unit-variance AR(1) draws.
function ar1MeanEss(n,rho) {if(!Number.isInteger(n)||n<1||!Number.isFinite(rho)||Math.abs(rho)>=1)throw new RangeError('Require integer n >= 1 and finite |rho| < 1.');let factor=1,power=rho;for(let lag=1;lag<n;lag++){factor+=2*(1-lag/n)*power;power*=rho;}return n/factor;}
// For Gaussian draws, Corr(X_t²,X_{t+k}²)=rho^(2k), with Var(X²)=2.
function ar1Precision(n,rho,estimand='mean') {if(!['mean','second-moment'].includes(estimand))throw new RangeError('Unknown AR(1) estimand.');const meanEss=ar1MeanEss(n,rho),squared=estimand==='second-moment',correlation=squared?rho*rho:rho,marginalVariance=squared?2:1,ess=squared?ar1MeanEss(n,correlation):meanEss;return {target:squared?1:0,correlation,marginalVariance,ess,longRunEss:n*(1-correlation)/(1+correlation),se:Math.sqrt(marginalVariance/ess)};}
function tempering(n,temperature,r) {let cold=-3,hot=3,swaps=0;const values=[],hotValues=[];for(let i=0;i<n;i++){cold=metropolis(1,.8,r,true,1,cold).values[0];hot=metropolis(1,.8,r,true,temperature,hot).values[0];const loga=(1-1/temperature)*(logTarget(hot,true)-logTarget(cold,true));if(Math.log(r())<loga){[cold,hot]=[hot,cold];swaps++;}values.push(cold);hotValues.push(hot);}return {values,hotValues,swaps}; }
function ising(sweeps,temperature,r,size=16) {if(!Number.isInteger(size)||size<2)throw new RangeError('Lattice size must be an integer of at least 2.');const spins=Array.from({length:size*size},()=>r()<.5?-1:1),values=[];for(let k=0;k<sweeps;k++){for(let j=0;j<size*size;j++){const i=Math.floor(r()*spins.length),x=i%size,y=Math.floor(i/size),sum=spins[y*size+(x+1)%size]+spins[y*size+(x+size-1)%size]+spins[((y+1)%size)*size+x]+spins[((y+size-1)%size)*size+x];spins[i]=r()<1/(1+Math.exp(-2*sum/temperature))?1:-1;}values.push(mean(spins));}return {spins,values,size}; }
function importance(n,sd,r) { const values=[],lw=[];for(let i=0;i<n;i++){const x=sd*normal(r);values.push(x);lw.push(-x*x/2+x*x/(2*sd*sd)+Math.log(sd));}const max=Math.max(...lw),w=lw.map(v=>Math.exp(v-max)),total=w.reduce((a,b)=>a+b,0),weights=w.map(v=>v/total);return {values,weights,ess:1/weights.reduce((s,w)=>s+w*w,0),estimate:values.reduce((s,x,i)=>s+weights[i]*x*x,0)}; }
function coupling(n,r) {let a=0,b=2,meeting=null;const first=[],second=[];for(let i=0;i<n;i++){const u=r();a=categorical(P[a],u);b=categorical(P[b],u);first.push(a);second.push(b);if(a===b&&meeting===null)meeting=i+1;}return {first,second,meeting}; }
export const api={rng,normal,mean,variance,logTarget,metropolis,P,distribution,categorical,pathKernel,pathBalance,gibbs,slice,energy,leapfrog,hmc,acf,ar1,ar1MeanEss,ar1Precision,tempering,ising,importance,coupling};
const specs={
 'monte-carlo':{title:'Monte Carlo precision',label:'Integrand frequency',min:1,max:10,step:1,value:1,n:500,help:'Estimate the integral of sin(kπx) on [0,1] with independent uniform draws. Increase the sample count fourfold and compare the estimated standard error. The ±1.96 SE interval is an approximate normal interval, not a guarantee for one run.'},
 markov:{title:'A finite Markov chain',label:'Initial state (0, 1 or 2)',min:0,max:2,step:1,value:0,n:80,help:'The three curves are exact state probabilities under repeated multiplication by a fixed transition matrix. Try different starting states. This is distribution evolution, not a single simulated chain.'},
 balance:{title:'Does the sampler preserve the intended target?',label:'Initial state (1, 2, 3 or 4)',min:1,max:4,step:1,value:1,n:400,help:'On the path 1–2–3–4, propose a uniformly chosen neighbor with target weights (1,3,3,1). Compare the full Hastings ratio with the deliberately erroneous target-only rule. Each chart separates the exact probability of a boundary state at step t, the expected boundary fraction through step t, and the boundary fraction along one random path. Both invariant state means are 2.5; the boundary event {1,4} detects the error. Counts include post-transition states X₁,…,Xₙ, including rejections; X₀ is excluded. No warmup is removed.'},
 metropolis:{title:'Random-walk Metropolis',label:'Proposal standard deviation',min:.05,max:8,step:.05,value:1,n:800,help:'A symmetric Gaussian proposal targets N(0,1). Compare small and large scales: acceptance alone does not measure efficiency. Repeated values are legitimate rejections. The chain starts at zero; no warmup is removed.'},
 gibbs:{title:'Correlated Gaussian Gibbs',label:'Target correlation ρ',min:0,max:.99,step:.01,value:.9,n:800,help:'Alternating exact normal conditional draws target a bivariate normal with unit marginal variances. Increase ρ toward one and examine the slow motion along the diagonal. No warmup is removed.'},
 slice:{title:'Stepping-out slice sampling',label:'Initial bracket width',min:.1,max:5,step:.1,value:1,n:800,help:'Each update samples a slice height, steps the bracket out, then shrinks it until a valid point is found. The target is N(0,1). Bracket width affects computational cost even when marginal plots look similar.'},
 hmc:{title:'Hamiltonian trajectories and acceptance',label:'Leapfrog step size',min:.01,max:.65,step:.01,value:.15,n:400,help:'Ten leapfrog steps per proposal target a Gaussian with covariance diag(1,0.04). Choose identity or precision mass M=diag(1,25); velocity is M⁻¹p. The latter equalizes frequencies. A fixed ten-step path can resonate: near step size 0.62 with precision mass, acceptance can be almost 100% while exploration is poor. Metropolis correction is included. This is fixed-length HMC, not NUTS.'},
 diagnostics:{title:'Autocorrelation and effective sample size',label:'AR(1) correlation ρ',min:-.99,max:.99,step:.01,value:.8,n:1000,help:'Choose E[X] or E[X²] using the same stationary Gaussian AR(1) draws. Exact finite-run ESS is n/[1+2Σ(1−k/n)c^k], summing k=1,…,n−1, where c=ρ for X and c=ρ² for X². Marginal variances are 1 and 2. Negative ρ can give mean ESS above n while squaring removes the cancellation. The long-run approximation n(1−c)/(1+c) can be inaccurate for short, persistent runs. These are analytic references, not fitted rank-normalized ESS or a convergence certificate.'},
 tempering:{title:'Replica exchange between two modes',label:'Hot-replica temperature',min:1,max:12,step:.5,value:5,n:1000,help:'Cold and hot random walks target exp(log π/T), with π a symmetric mixture centered at −3 and +3. Each iteration attempts an exchange using the correct density ratio. Only the cold trace targets π. Count sign changes, but remember these can be brief crossings rather than independent mode visits.'},
 geometry:{title:'The funnel and a change of coordinates',label:'Scale of v',min:.2,max:4,step:.1,value:2,n:700,help:'Independent draws use v~N(0,s²), z~N(0,1), x=exp(v/2)z. Compare (v,x) with (v,z) to see the funnel disappear under noncentering. These are direct simulation draws; no sampler performance or posterior preference is inferred.'},
 ising:{title:'Gibbs updates on a periodic Ising lattice',label:'Temperature T (J=kB=1)',min:.5,max:5,step:.1,value:2.3,n:300,help:'A 16×16 periodic lattice uses random-site heat-bath updates with P(spin=+1)=logistic(2×neighbor sum/T). One sweep means 256 attempted updates, not one update of every site. The finite lattice and short trace cannot establish thermodynamic phase behavior.'},
 importance:{title:'Importance-weight degeneracy',label:'Proposal standard deviation',min:.2,max:4,step:.1,value:1.5,n:800,help:'Draw from N(0,s²) and self-normalize weights for N(0,1). Estimate E[X²]=1. Weight ESS = 1/Σw² describes concentration of sampled weights; it can miss unseen tails and is not MCMC ESS. Narrow proposals are especially deceptive.'},
 coupling:{title:'Common-uniform coupling',label:'Seed offset',min:0,max:50,step:1,value:0,n:100,help:'Two copies of the same three-state chain start at states 0 and 2. A shared uniform drives each categorical update. After they meet they stay together. One meeting time is not a mixing bound; this is not an unbiased MCMC estimator.'}
};
const colors=['#007c91','#c14b24','#6941a5'];
function fmt(x){return Number.isFinite(x)?Number(x.toPrecision(4)).toString():'undefined';}
function svgChart(series,kind='line',labels=['Iteration','Value'],yRange=null,minWidth=0) {const w=680,h=260,pad=46;let points=kind==='scatter'?series.flat():series.flatMap(a=>a.map((y,x)=>[x+1,y]));points=points.filter(p=>p.every(Number.isFinite));if(!points.length)return '<p>No finite points to plot.</p>';let xmin=Math.min(...points.map(p=>p[0])),xmax=Math.max(...points.map(p=>p[0])),ymin=yRange?yRange[0]:Math.min(...points.map(p=>p[1])),ymax=yRange?yRange[1]:Math.max(...points.map(p=>p[1]));if(xmax===xmin)xmax++;if(ymax===ymin){ymin-=1;ymax+=1;}const sx=x=>pad+(x-xmin)/(xmax-xmin)*(w-2*pad),sy=y=>h-pad-(y-ymin)/(ymax-ymin)*(h-2*pad);let body=`<path d="M${pad},${pad}V${h-pad}H${w-pad}" stroke="currentColor" fill="none" opacity=".4"/>`;
series.forEach((a,k)=>{const pts=kind==='scatter'?a:a.map((y,x)=>[x+1,y]);body+=kind==='scatter'?pts.filter(p=>p.every(Number.isFinite)).map(p=>`<circle cx="${sx(p[0]).toFixed(2)}" cy="${sy(p[1]).toFixed(2)}" r="2.2" fill="${colors[k%3]}" opacity=".5"/>`).join(''):`<path d="${pts.filter(p=>p.every(Number.isFinite)).map((p,i)=>`${i?'L':'M'}${sx(p[0]).toFixed(2)},${sy(p[1]).toFixed(2)}`).join(' ')}" stroke="${colors[k%3]}" stroke-width="1.5" fill="none"/>`;});body+=`<g fill="currentColor" font-size="12"><text x="${pad}" y="${h-25}">${fmt(xmin)}</text><text x="${w-pad}" y="${h-25}" text-anchor="end">${fmt(xmax)}</text><text x="${pad-5}" y="${pad+5}" text-anchor="end">${fmt(ymax)}</text><text x="${pad-5}" y="${h-pad}" text-anchor="end">${fmt(ymin)}</text><text x="${w/2}" y="${h-5}" text-anchor="middle">${labels[0]}</text><text x="${pad}" y="20">${labels[1]}</text></g>`;return `<svg role="img" aria-label="${labels[1]} versus ${labels[0]}" viewBox="0 0 ${w} ${h}" class="${minWidth ? 'lab-chart lab-chart--wide' : 'lab-chart'}">${body}</svg>`;}
function hist(x,chart=svgChart) {const bins=30,lo=-5,hi=5,counts=Array(bins).fill(0);x.forEach(v=>{const i=Math.floor((v-lo)/(hi-lo)*bins);if(i>=0&&i<bins)counts[i]++;});return '<p>Binned marginal density (−5 to 5; values outside this interval omitted). Teal: sampled density; orange: N(0,1) density.</p>'+chart([counts.map((c,i)=>[lo+(i+.5)*(hi-lo)/bins,c/x.length/((hi-lo)/bins)]),counts.map((_,i)=>{const z=lo+(i+.5)*(hi-lo)/bins;return[z,Math.exp(-z*z/2)/Math.sqrt(2*Math.PI)];})],'scatter',['Value','Density']);}
let unique=0;
const questions={
 'monte-carlo':'How does a Monte Carlo estimate and its estimated uncertainty change with the sample size and integrand?',
 markov:'How does the distribution of a finite Markov chain evolve from a chosen state?',
 balance:'How does the Hastings proposal correction change the distribution of boundary visits?',
 metropolis:'How does random-walk proposal scale affect acceptance and exploration?',
 gibbs:'How does correlation affect movement of the Gaussian Gibbs sampler?',
 slice:'How does the initial bracket width affect slice-sampling work?',
 hmc:'How do leapfrog step size and mass affect HMC acceptance and movement?',
 diagnostics:'How does dependence affect precision for different estimands?',
 tempering:'How do replica exchanges affect movement between two modes?',
 geometry:'How does a change of coordinates represent a funnel-shaped distribution?',
 ising:'How does temperature affect a finite periodic Ising lattice?',
 importance:'How does proposal scale affect importance-weight concentration?',
 coupling:'When do two chains driven by common random numbers meet?'
};
function mount(el) {
 if(el.dataset.lab==='ancestry'||el.dataset.mounted)return;
 const type=el.dataset.lab,s=specs[type];
 if(!s){el.textContent='Unknown lab: '+type;return;}
 const id='mcmc-lab-'+(++unique),controls=[];
 function numeric(name,label,min,max,step,value){
   const group=document.createElement('fieldset'),legend=document.createElement('legend'),input=document.createElement('input');
   legend.textContent=label;input.id=id+'-'+name;input.name=name;input.type='number';
   input.min=String(min);input.max=String(max);input.step=String(step);input.value=String(value);input.defaultValue=String(value);input.required=true;
   const accessibleLabel=document.createElement('label');accessibleLabel.htmlFor=input.id;accessibleLabel.textContent=label;
   group.append(legend,accessibleLabel,input);controls.push(group);
 }
 function selection(name,label,options){
   const group=document.createElement('fieldset'),legend=document.createElement('legend'),select=document.createElement('select'),caption=document.createElement('label');
   legend.textContent=label;select.name=name;select.id=id+'-'+name;caption.htmlFor=select.id;caption.textContent=label;
   for(const [value,text] of options){const option=document.createElement('option');option.value=value;option.textContent=text;select.append(option);}
   group.append(legend,caption,select);controls.push(group);
 }
 numeric('parameter',s.label,s.min,s.max,s.step,s.value);
 numeric('count','Samples / iterations',20,5000,1,s.n);
 numeric('seed','Seed',0,4294967295,1,2026);
 if(type==='hmc')selection('mass','Mass matrix',[['identity','Identity'],['precision','diag(1,25)']]);
 if(type==='diagnostics')selection('estimand','Estimand',[['mean','Mean E[X] = 0'],['second-moment','Second moment E[X²] = 1']]);
 const submit=document.createElement('button');submit.type='submit';submit.textContent='Run experiment';controls.push(submit);
 let form;
 const frame=mountLabFrame(el,{id,title:s.title,question:questions[type],notice:s.help,controls,
   figureLabel:s.title+' charts',seed:type==='markov'?'Seed: 2026. Exact propagation is independent of the seed.':'Seed: 2026. Reusing settings and seed reproduces the draws.',
   reset:()=>{for(const control of form.elements){if(control instanceof HTMLInputElement)control.value=control.defaultValue;else if(control instanceof HTMLSelectElement)control.selectedIndex=0;}try{run();}catch(error){frame.setState('error','The experiment could not be calculated. Adjust the controls and try again.');}}});
 el.dataset.mounted='true';form=el.querySelector('form');const plots=frame.stage;
 // Each SVG already has an accessible name; keep scrollable descendants keyboard-reachable.
 plots.removeAttribute('role');plots.removeAttribute('aria-label');
function run(){const p=Number(form.elements.parameter.value),n=Number(form.elements.count.value),seed=Number(form.elements.seed.value),r=rng(seed);let text='',html='';
 const tableRows=[];let chartNumber=0;
 function chart(series,kind='line',labels=['Iteration','Value'],yRange=null,minWidth=0){
   const chartId=++chartNumber;
   series.forEach((values,index)=>values.forEach((value,pointIndex)=>{
     const point=kind==='scatter'?value:[pointIndex+1,value];
     tableRows.push([chartId,index+1,labels[0],Number.isFinite(point[0])?point[0]:'undefined',labels[1],Number.isFinite(point[1])?point[1]:'undefined']);
   }));
   return svgChart(series,kind,labels,yRange,minWidth);
 }

if(type==='monte-carlo'){const a=Array.from({length:n},()=>Math.sin(p*Math.PI*r())),m=mean(a),se=Math.sqrt(variance(a)/n),truth=(1-Math.cos(p*Math.PI))/(p*Math.PI);let sum=0;html=chart([a.map((v,i)=>(sum+=v)/(i+1)),Array(n).fill(truth)]);text=`Estimate ${fmt(m)}; exact integral ${fmt(truth)}; estimated SE ${fmt(se)}; approximate 95% interval [${fmt(m-1.96*se)}, ${fmt(m+1.96*se)}]. Teal: running estimate. Orange: exact integral.`;}
if(type==='markov'){let d=[0,0,0];d[p]=1;const a=[[],[],[]];for(let i=0;i<n;i++){a.forEach((v,k)=>v.push(d[k]));d=distribution(d);}html=chart(a,'line',['Step (1 is initial)','State probability']);text=`After ${n-1} transitions: ${a.map(v=>fmt(v[n-1])).join(', ')} for states 0 (teal), 1 (orange), 2 (purple). Matrix rows: [0.85,0.12,0.03]; [0.08,0.82,0.10]; [0.06,0.14,0.80].`;}
if(type==='balance'){
  const out=pathBalance(n,p,r),rows=[['Full Hastings correction',out.corrected,1/4],['Erroneous target-only rule',out.naive,1/7]];
  html='<p>In both charts: teal is the exact marginal probability Pr(Xₜ ∈ {1,4}); orange is the exact expected fraction E[Aₜ]; purple is one realized running fraction Aₜ. The two paths share random uniforms and are not independent. Changing the seed changes only the purple curves and sampled state means. On narrow screens, scroll each chart and the results table sideways; keyboard users can focus a region and use the arrow keys.</p>';
  for(const [label,a,limit] of rows)html+=`<h4>${label}: invariant boundary mass ${fmt(limit)}</h4><div class="lab-scroll" tabindex="0" role="region" aria-label="${label} chart; scroll horizontally">`+chart([a.marginal,a.expected,a.observed],'line',['Post-transition step t','Boundary probability / fraction'],[0,1],680)+'</div>';
  html+='<div class="lab-scroll" tabindex="0" role="region" aria-label="Exact and sampled boundary results"><table class="lab-results"><thead><tr><th>Rule</th><th>Exact Pr(Xₙ ∈ B)</th><th>Exact E[Aₙ]</th><th>One path Aₙ</th><th>One path mean state</th></tr></thead><tbody>'+rows.map(([label,a])=>`<tr><th scope="row">${label}</th><td>${fmt(a.marginal[n-1])}</td><td>${fmt(a.expected[n-1])}</td><td>${fmt(a.observed[n-1])}</td><td>${fmt(mean(a.states))}</td></tr>`).join('')+'</tbody></table></div>';
  text=`Intended invariant law (1,3,3,1)/8: boundary mass 0.25. Erroneous invariant law (1,6,6,1)/14: boundary mass 1/7 ≈ 0.1429. Both invariant means are 2.5. After ${n} transitions, observed boundary fractions: corrected ${fmt(out.corrected.observed[n-1])}, erroneous ${fmt(out.naive.observed[n-1])}. More iterations can reduce initialization effects and random variation; one path's error need not shrink monotonically. A longer run cannot repair a wrong invariant law.`;
}
if(type==='metropolis'||type==='slice'){const out=type==='slice'?{values:slice(n,p,r)}:metropolis(n,p,r);html=chart([out.values])+hist(out.values,chart);text=`Sample mean ${fmt(mean(out.values))}; variance ${fmt(variance(out.values))}; lag-1 ACF ${fmt(acf(out.values,1))}. Target mean 0 and variance 1.${out.accepted!==undefined?' Acceptance '+fmt(out.accepted/n*100)+'%.':' Log-density evaluations per update '+fmt(out.values.evaluations/n)+'.'}`;}
if(type==='gibbs'){const a=gibbs(n,p,r);html=chart([a],'scatter',['x','y'])+chart([a.map(v=>v[0])]);text=`x mean ${fmt(mean(a.map(v=>v[0])))}; x variance ${fmt(variance(a.map(v=>v[0])))}; lag-1 ACF ${fmt(acf(a.map(v=>v[0]),1))}; stationary theoretical lag-1 correlation ρ²=${fmt(p*p)}.`;}
if(type==='hmc'){const mass=form.elements.mass.value==='precision'?[1,25]:[1,1],out=hmc(n,p,r,mass);html=chart([out.points],'scatter',['q₁','q₂'])+chart([out.points.map(v=>v[0])]);text=`Acceptance ${fmt(100*out.accepted/n)}%; largest absolute proposal energy error ${fmt(out.maxError)}; marginal variances ${fmt(variance(out.points.map(v=>v[0])))}, ${fmt(variance(out.points.map(v=>v[1])))} (targets 1, 0.04). Large errors indicate poor integration; rejection can leave a constant trace. High acceptance can also coexist with poor movement when the fixed ten-step path resonates; inspect both coordinates and try another step size.`;}
if(type==='diagnostics'){const estimand=form.elements.estimand.value,squared=estimand==='second-moment',a=ar1(n,p,r).map(x=>squared?x*x:x),lags=Math.min(40,n-1),precision=ar1Precision(n,p,estimand),label=squared?'X²':'X';html=chart([a],'line',['Iteration',label])+chart([Array.from({length:lags},(_,i)=>acf(a,i+1)),Array.from({length:lags},(_,i)=>precision.correlation**(i+1))],'line',['Lag','ACF']);text=`Exact finite-run ESS for E[${label}] ${fmt(precision.ess)}; long-run approximation ${fmt(precision.longRunEss)}; theoretical SE ${fmt(precision.se)}; estimate ${fmt(mean(a))} (target ${precision.target}); marginal variance ${precision.marginalVariance}. ACF: teal empirical, orange theoretical. ${p<0?(squared?'Squaring removes sign cancellation; this ESS does not exceed the draw count.':'Antithetic cancellation can make this mean ESS exceed the draw count.'):''} Changing the estimand keeps the same underlying seeded draws.`;}
if(type==='tempering'){const a=tempering(n,p,r),cross=a.values.slice(1).filter((v,i)=>(v>0)!==(a.values[i]>0)).length;html=chart([a.values,a.hotValues]);text=`Cold sign changes ${cross}; cold fraction above zero ${fmt(a.values.filter(v=>v>0).length/n)} (target 0.5); exchange acceptance ${fmt(a.swaps/n*100)}%. Teal cold; orange hot. Exchange acceptance alone does not establish good exploration.`;}
if(type==='geometry'){const a=[],b=[];for(let i=0;i<n;i++){const v=p*normal(r),z=normal(r);a.push([v,Math.exp(v/2)*z]);b.push([v,z]);}html='<p>Centered coordinates</p>'+chart([a],'scatter',['v','x'])+'<p>Noncentered coordinates (vertical axis has a different scale)</p>'+chart([b],'scatter',['v','z']);text=`${n} independent draws; v standard deviation ${p}. Conditional SD(x|v)=exp(v/2). z is independent of v in this prior model.`;}
if(type==='ising'){const a=ising(n,p,r);for(let i=0;i<a.spins.length;i++)tableRows.push(['Lattice',1,'Column',i%a.size,'Row; spin',Math.floor(i/a.size)+'; '+a.spins[i]]);html=`<svg role="img" aria-label="Final Ising lattice: teal positive, orange negative spins" viewBox="0 0 320 320" class="lab-lattice">${a.spins.map((v,i)=>`<rect x="${i%16*20}" y="${Math.floor(i/16)*20}" width="19" height="19" fill="${v>0?colors[0]:colors[1]}"/>`).join('')}</svg>`+chart([a.values],'line',['Sweep','Mean spin']);text=`Final magnetization ${fmt(mean(a.spins))}; mean absolute magnetization over run ${fmt(mean(a.values.map(Math.abs)))}. Teal +1, orange −1. Low temperature may retain one phase for this entire run.`;}
if(type==='importance'){const a=importance(n,p,r);html=chart([a.weights],'line',['Draw','Normalized weight']);text=`Estimate E[X²] ${fmt(a.estimate)} (exact 1); weight ESS ${fmt(a.ess)} / ${n}; largest normalized weight ${fmt(Math.max(...a.weights))}. Repeat with other seeds, particularly for narrow proposals.`;}
if(type==='coupling'){const effectiveSeed=(seed+p)>>>0,a=coupling(n,rng(effectiveSeed));html=chart([a.first,a.second],'line',['Step','State']);text=`${a.meeting===null?'No meeting in this run.':'First meeting at step '+a.meeting+'.'} Teal: start 0; orange: start 2 (curves overlap after meeting). Effective seed ${effectiveSeed}. Try several seeds to see meeting-time variability.`;}
plots.innerHTML=html;
 frame.setTable({caption:'Values shown in the charts; series numbers follow the chart legends.',headers:['Chart','Series','Horizontal quantity','Horizontal value','Vertical quantity','Vertical value'],rows:tableRows});
 const seedLine=el.querySelector('.euler-lab__seed');
 if(seedLine)seedLine.textContent=(type==='markov'?'Seed: '+seed+'. Exact propagation is independent of the seed.':'Seed: '+seed+'. Reusing settings and seed reproduces the draws.')+' These runs are intentionally short and have no automatic warmup or convergence checks. Results are computed locally in your browser.';
 frame.setState('ready',text+' Seed '+seed+'.');}
 form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;try{run();}catch(error){frame.setState('error','The experiment could not be calculated with these settings. Adjust the controls and try again.');}});
 try{run();}catch(error){frame.setState('error','The experiment could not be calculated. Adjust the controls and try again.');}
} 
export { mount };
