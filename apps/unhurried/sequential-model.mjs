// Count every full null record exactly, including hypothetical continuations
// after an early rejection. No Monte Carlo approximation is used.
export const SEQUENTIAL_FIXTURES={original:{first:8,last:16,label:'Look after 8 and 16 spins'},later:{first:12,last:24,label:'Look after 12 and 24 spins'},short:{first:1,last:2,label:'Boundary case: 1 and 2 spins'}};
export const SEQUENTIAL_RULES={final:'One fixed final look at .05',naive:'Two looks at .05 each',bonferroni:'Two looks at .025 each'};
export const SEQUENTIAL_DEFAULTS={fixture:'original',rule:'naive',observed:7};
export function choose(n,k) {
  if(!Number.isInteger(n)||n<0||n>24||!Number.isInteger(k)||k<0||k>n)throw new RangeError('Invalid binomial count.');
  let value=1n;for(let j=1;j<=Math.min(k,n-k);j++)value=value*BigInt(n-j+1)/BigInt(j);return value;
}
function tail(n,minimum) {let sum=0n;for(let k=Math.max(0,minimum);k<=n;k++)sum+=choose(n,k);return sum;}
export function rejectionBoundary(n,denominator=20) {
  if(!Number.isInteger(n)||n<1||n>24||![20,40].includes(denominator))throw new RangeError('Invalid rejection boundary.');
  for(let k=0;k<=n;k++)if(BigInt(denominator)*tail(n,k)<=2n**BigInt(n))return k;
  return n+1; // No possible count has a sufficiently small tail probability.
}
export function twoLookLaw(first,last,rule='naive',observed=Math.min(7,first)) {
  if(!Number.isInteger(first)||!Number.isInteger(last)||first<1||first>=last||last>24||!Object.hasOwn(SEQUENTIAL_RULES,rule)||!Number.isInteger(observed)||observed<0||observed>first)throw new RangeError('Invalid look schedule, rule or first count.');
  const alphaDenominator=rule==='bonferroni'?40:20,firstBoundary=rule==='final'?null:rejectionBoundary(first,alphaDenominator),lastBoundary=rejectionBoundary(last,alphaDenominator);
  const denominator=2n**BigInt(last),remaining=last-first,joint=[];
  const patterns={early:0n,final:0n,both:0n,neither:0n};
  for(let i=0;i<=first;i++)for(let y=0;y<=remaining;y++) {
    const weight=choose(first,i)*choose(remaining,y),j=i+y;
    const early=firstBoundary!==null&&i>=firstBoundary,final=j>=lastBoundary;
    const pattern=early?(final?'both':'early'):(final?'final':'neither');
    patterns[pattern]+=weight;joint.push({first:i,last:j,weight,early,final,pattern});
  }
  const firstCount=patterns.early+patterns.both,lastCount=patterns.final+patterns.both,overlap=patterns.both,union=denominator-patterns.neither;
  const conditionalDenominator=2n**BigInt(remaining),conditionalFinal=tail(remaining,lastBoundary-observed);
  return {first,last,rule,observed,alphaDenominator,firstBoundary,lastBoundary,denominator,remaining,joint,patterns,firstCount,lastCount,overlap,union,
    conditionalDenominator,conditionalFinal,firstRejected:firstBoundary!==null&&observed>=firstBoundary,
    exceedsNominal:20n*union>denominator};
}
export function evaluateSequential(state={}) {
  const fixture=state.fixture??SEQUENTIAL_DEFAULTS.fixture,rule=state.rule??SEQUENTIAL_DEFAULTS.rule;
  if(!Object.hasOwn(SEQUENTIAL_FIXTURES,fixture))throw new RangeError('Unknown look schedule.');
  const f=SEQUENTIAL_FIXTURES[fixture],observed=state.observed??Math.min(SEQUENTIAL_DEFAULTS.observed,f.first);
  return {...twoLookLaw(f.first,f.last,rule,observed),fixture};
}
