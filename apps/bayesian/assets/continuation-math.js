/* Original bounded continuation models. Pure calculations; no I/O or randomness. */
(function (root) {
  'use strict';
  function valid(name, x, lo, hi, integer = false) {
    if (typeof x !== 'number' || !Number.isFinite(x) || x < lo || x > hi || (integer && !Number.isSafeInteger(x)))
      throw new RangeError(`${name} must be ${integer ? 'an integer' : 'a finite number'} in [${lo}, ${hi}].`);
  }
  // Normal upper tail by integrating exp(-t²/2) using Simpson's rule.
  // |z|>=10 rounds to 0/1; absolute error there is <8e-24.
  function normalTail(z) {
    if (z >= 10) return 0;
    if (z <= -10) return 1;
    if (z < 0) return 1 - normalTail(-z);
    const n = 2048, h = (10-z)/n;
    let sum = Math.exp(-z*z/2) + Math.exp(-50);
    for (let i=1;i<n;i++) sum += (i%2 ? 4 : 2)*Math.exp(-Math.pow(z+i*h,2)/2);
    return sum*h/(3*Math.sqrt(2*Math.PI));
  }
  function covarianceContrasts({rho = .8, threshold = 2.5} = {}) {
    valid('rho', rho, -1, 1); valid('threshold', threshold, -100, 100);
    if (Math.abs(rho) === 1) throw new RangeError('rho must be strictly between -1 and 1.');
    const sumVariance=2+2*rho, differenceVariance=2-2*rho, marginalVariance=1-rho*rho;
    return {mean:[1,-.5], covariance:[[1,rho],[rho,1]],
      exact:{sumMean:.5,differenceMean:1.5,sumVariance,differenceVariance,
        sumTail:normalTail((threshold-.5)/Math.sqrt(sumVariance)),
        differenceTail:normalTail((threshold-1.5)/Math.sqrt(differenceVariance))},
      meanField:{marginalVariance,sumMean:.5,differenceMean:1.5,sumVariance:2*marginalVariance,
        differenceVariance:2*marginalVariance,sumTail:normalTail((threshold-.5)/Math.sqrt(2*marginalVariance)),
        differenceTail:normalTail((threshold-1.5)/Math.sqrt(2*marginalVariance))}};
  }
  function choose(n,k) { let out=1; for(let i=1;i<=k;i++) out*= (n-i+1)/i; return out; }
  // Evaluate BOTH binomial tails in log space. A rounded display of 1 or 0
  // is not an endpoint decision: interior beta posteriors have full support.
  function posteriorTails(n,s,p0) {
    if (p0 === 0) return {q:1, logQ:0, logR:-Infinity};
    if (p0 === 1) return {q:0, logQ:-Infinity, logR:0};
    const logs=[];
    for(let k=0;k<=n+1;k++)
      logs.push(Math.log(choose(n+1,k))+k*Math.log(p0)+(n+1-k)*Math.log1p(-p0));
    const logSum=xs=>{const m=Math.max(...xs);return m+Math.log(xs.reduce((v,x)=>v+Math.exp(x-m),0));};
    const total=logSum(logs),logQ=logSum(logs.slice(0,s+1))-total,
      logR=logSum(logs.slice(s+1))-total;
    return {q:Math.max(0,Math.min(1,logQ<logR ? Math.exp(logQ) : -Math.expm1(logR))),logQ,logR};
  }
  function studyDesign({firstLook=2,cap=4,successThreshold=.8,futilityThreshold=.2,p0=.5,fixedTruth=.5} = {}) {
    valid('firstLook',firstLook,1,19,true); valid('cap',cap,2,20,true);
    if(firstLook>=cap) throw new RangeError('firstLook must be smaller than cap.');
    valid('successThreshold',successThreshold,0,1);valid('futilityThreshold',futilityThreshold,0,1);
    if(futilityThreshold>=successThreshold) throw new RangeError('futilityThreshold must be below successThreshold.');
    valid('p0',p0,0,1);valid('fixedTruth',fixedTruth,0,1);
    // Every accepted Number is an exact binary rational. In this cap<=20
    // domain the integer-beta tail is a finite binomial polynomial; compare
    // integer cross-products, including ties, without any epsilon or rounding.
    const rational=x=>{
      let shift=0;
      while(!Number.isInteger(x)) { x*=2; shift++; }
      return [BigInt(x),1n<<BigInt(shift)];
    };
    const [pn,pd]=rational(p0), [sn,sd]=rational(successThreshold),
      [fn,fd]=rational(futilityThreshold);
    const action=(n,s)=>{
      const N=n+1, denominator=pd**BigInt(N);
      let numerator=0n, binomial=1n;
      for(let k=0;k<=s;k++) {
        numerator+=binomial*pn**BigInt(k)*(pd-pn)**BigInt(N-k);
        binomial=binomial*BigInt(N-k)/BigInt(k+1);
      }
      const approve=numerator*sd>=sn*denominator;
      const futile=numerator*fd<=fn*denominator;
      return approve ? 'approve' : futile || n===cap ? 'reject' : 'continue';
    };
    // State mass carries the SAME unknown p throughout each prospective study.
    let states=[{design:1,truth:1}],terminal=[];
    for(let n=0;n<cap;n++) {
      const next=Array.from({length:n+2},()=>({design:0,truth:0}));
      states.forEach((mass,s)=>{
        const p=(1+s)/(2+n);
        next[s].design+=mass.design*(1-p); next[s+1].design+=mass.design*p;
        next[s].truth+=mass.truth*(1-fixedTruth); next[s+1].truth+=mass.truth*fixedTruth;
      });
      if(n+1===firstLook || n+1===cap) next.forEach((mass,s)=>{
        const decision=action(n+1,s);
        if(decision!=='continue') {
          terminal.push({n:n+1,s,decision,posteriorSuccess:posteriorTails(n+1,s,p0).q,designMass:mass.design,truthMass:mass.truth});
          next[s]={design:0,truth:0};
        }
      });
      states=next;
    }
    const sum=(key,fn)=>terminal.reduce((acc,t)=>acc+t[key]*fn(t),0);
    const expected=key=>{
      const sizes=new Set(terminal.filter(t=>t[key]>0).map(t=>t.n));
      return sizes.size===1 ? [...sizes][0] : sum(key,t=>t.n);
    };
    let fixedAssurance=0,fixedTruthApproval=0;
    for(let s=0;s<=cap;s++) if(action(cap,s)==='approve') {
      fixedAssurance+=1/(cap+1);
      fixedTruthApproval+=choose(cap,s)*Math.pow(fixedTruth,s)*Math.pow(1-fixedTruth,cap-s);
    }
    return {terminal,assurance:sum('designMass',t=>+(t.decision==='approve')),
      expectedSize:expected('designMass'),fixedTruthApproval:sum('truthMass',t=>+(t.decision==='approve')),
      fixedTruthExpectedSize:expected('truthMass'),terminalMass:sum('designMass',()=>1),
      fixed:{assurance:fixedAssurance,expectedSize:cap,fixedTruthApproval}};
  }
  const api=Object.freeze({covarianceContrasts,studyDesign});
  root.BayesContinuationMath=api;
  if(typeof module!=='undefined' && module.exports) module.exports=api;
})(typeof window==='undefined' ? globalThis : window);
