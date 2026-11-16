/* Beta distribution calculations for the interactive teaching figure.
   logGamma uses a Lanczos approximation; the incomplete beta uses a continued
   fraction with a symmetry transform. Tested against SciPy, including boundaries. */
(function (scope) {
  function logGamma(z) {
    const c = [676.5203681218851,-1259.1392167224028,771.32342877765313,-176.61502916214059,12.507343278686905,-0.13857109526572012,9.9843695780195716e-6,1.5056327351493116e-7];
    if (z < .5) return Math.log(Math.PI)-Math.log(Math.sin(Math.PI*z))-logGamma(1-z);
    z -= 1; let x = .99999999999980993;
    c.forEach((v,i) => { x += v/(z+i+1); });
    const t = z+7.5;
    return .5*Math.log(2*Math.PI)+(z+.5)*Math.log(t)-t+Math.log(x);
  }
  function fraction(a,b,x) {
    const tiny = 1e-300;
    let c=1, d=1-(a+b)*x/(a+1); if(Math.abs(d)<tiny) d=tiny;
    d=1/d; let h=d;
    for(let m=1;m<=300;m++) {
      let aa=m*(b-m)*x/((a+2*m-1)*(a+2*m));
      d=1+aa*d; if(Math.abs(d)<tiny)d=tiny; c=1+aa/c; if(Math.abs(c)<tiny)c=tiny; d=1/d; h*=d*c;
      aa=-(a+m)*(a+b+m)*x/((a+2*m)*(a+2*m+1));
      d=1+aa*d; if(Math.abs(d)<tiny)d=tiny; c=1+aa/c; if(Math.abs(c)<tiny)c=tiny; d=1/d;
      const change=d*c; h*=change; if(Math.abs(change-1)<3e-14) return h;
    }
    throw new Error('Incomplete beta did not converge');
  }
  function cdf(x,a,b) {
    if(x<=0)return 0; if(x>=1)return 1;
    const front=Math.exp(logGamma(a+b)-logGamma(a)-logGamma(b)+a*Math.log(x)+b*Math.log1p(-x));
    const value=x<(a+1)/(a+b+2) ? front*fraction(a,b,x)/a : 1-front*fraction(b,a,1-x)/b;
    return Math.max(0,Math.min(1,value));
  }
  function quantile(p,a,b) { let lo=0,hi=1; for(let i=0;i<60;i++){const mid=(lo+hi)/2; if(cdf(mid,a,b)<p)lo=mid;else hi=mid;} return (lo+hi)/2; }
  function pdf(x,a,b) { return Math.exp((a-1)*Math.log(x)+(b-1)*Math.log1p(-x)+logGamma(a+b)-logGamma(a)-logGamma(b)); }
  scope.BayesMath={cdf,quantile,pdf};
  if(typeof module!=='undefined') module.exports=scope.BayesMath;
  if(typeof document==='undefined' || !document.querySelector('#beta-explorer'))return;
  const ids=['alpha','beta','trials','successes','threshold'];
  const controls=Object.fromEntries(ids.map(id=>[id,document.getElementById(id)]));
  function update(){
    const a=Number(controls.alpha.value),b=Number(controls.beta.value),n=Number(controls.trials.value);
    controls.successes.max=String(n); if(Number(controls.successes.value)>n)controls.successes.value=String(n);
    const y=Number(controls.successes.value), threshold=Number(controls.threshold.value);
    if(!Number.isFinite(threshold)||threshold<0||threshold>1){document.querySelector('#explorer-status').textContent='Enter a threshold between 0 and 1.';return;}
    ids.forEach(id=>{const out=document.getElementById(`${id}-value`);if(out)out.textContent=controls[id].value;});
    const ap=a+y,bp=b+n-y;
    const xs=Array.from({length:400},(_,i)=>(i+.5)/400);
    const prior=xs.map(x=>pdf(x,a,b)),post=xs.map(x=>pdf(x,ap,bp));
    const max=Math.max(...prior,...post)*1.1;
    const path=v=>v.map((p,i)=>`${i?'L':'M'}${(48+xs[i]*552).toFixed(2)},${(250-p/max*214).toFixed(2)}`).join(' ');
    document.getElementById('prior-path').setAttribute('d',path(prior));
    document.getElementById('posterior-path').setAttribute('d',path(post));
    document.getElementById('density-max').textContent=max.toFixed(1);
    document.getElementById('threshold-line').setAttribute('x1',48+552*threshold);
    document.getElementById('threshold-line').setAttribute('x2',48+552*threshold);
    document.getElementById('posterior-label').textContent=`Beta(${ap}, ${bp})`;
    document.getElementById('posterior-mean').textContent=(ap/(ap+bp)).toFixed(3);
    document.getElementById('credible-interval').textContent=`${quantile(.05,ap,bp).toFixed(3)}–${quantile(.95,ap,bp).toFixed(3)}`;
    document.getElementById('threshold-prob').textContent=(1-cdf(threshold,ap,bp)).toFixed(3);
    document.getElementById('prob-label').textContent=`Probability θ > ${threshold}`;
    document.getElementById('explorer-status').textContent=`${y} successes in ${n} trials update Beta(${a}, ${b}) to Beta(${ap}, ${bp}). The posterior mean is ${(ap/(ap+bp)).toFixed(3)}.`;
  }
  ids.forEach(id=>controls[id].addEventListener('input',update));
  document.querySelector('#explorer-reset').addEventListener('click',()=>{
    controls.successes.max='20';
    [2,2,20,14,.5].forEach((v,i)=>controls[ids[i]].value=String(v));
    update();
  });
  update();
})(typeof window==='undefined'?globalThis:window);
