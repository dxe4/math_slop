export const QUEUE_FIXTURES=Object.freeze({original:{lambda:2,mu:4,label:'Original: λ=2, μ=4'},changed:{lambda:3,mu:5,label:'Changed load: λ=3, μ=5'},light:{lambda:1,mu:5,label:'Light load: λ=1, μ=5'}});
export const QUEUE_PROTOCOLS=Object.freeze({clock:'Clock time',changes:'After each actual change',virtual:'All ticks, including null attempts',prearrival:'Before each arrival',postarrival:'After each arrival',recovered:'Inverse-rate recovery'});
export const QUEUE_DEFAULTS=Object.freeze({fixture:'original',protocol:'changes',scale:1,jump:2});
export function rational(n,d=1n) {
  n=BigInt(n);d=BigInt(d);if(d<=0n)throw new RangeError('A rational denominator must be positive.');
  let a=n<0n?-n:n,b=d;while(b){const r=a%b;a=b;b=r;}
  return {n:n/a,d:d/a};
}
const add=(a,b)=>rational(a.n*b.d+b.n*a.d,a.d*b.d);
const mul=(a,b)=>rational(a.n*b.n,a.d*b.d);
const div=(a,b)=>rational(a.n*b.d,a.d*b.n);
const power=(a,k)=>rational(a.n**BigInt(k),a.d**BigInt(k));
const sum=values=>values.reduce(add,rational(0));
function rates(lambda,mu) {
  for(const [name,value]of [['lambda',lambda],['mu',mu]])if(!Number.isInteger(value)||value<1||value>60)throw new RangeError(`${name} must be an integer from 1 to 60.`);
  if(lambda>=mu)throw new RangeError('The stationary model requires arrival rate less than service rate.');
}
export function jumpFromEmpty(lambda,mu,index) {
  rates(lambda,mu);if(!Number.isInteger(index)||index<0||index>24)throw new RangeError('Jump index must be an integer from 0 to 24.');
  const total=BigInt(lambda+mu);let counts=new Map([[0,1n]]),denominator=1n;
  for(let step=0;step<index;step++) {
    const next=new Map(),addCount=(x,c)=>next.set(x,(next.get(x)||0n)+c);
    for(const [x,c]of counts)if(x===0)addCount(1,c*total);else {addCount(x-1,c*BigInt(mu));addCount(x+1,c*BigInt(lambda));}
    counts=next;denominator*=total;
  }
  return {index,counts:[...counts].sort((a,b)=>a[0]-b[0]),denominator,empty:rational(counts.get(0)||0n,denominator),parity:index%2===0?'even':'odd'};
}
export function evaluateQueueClock(state={}) {
  const {fixture,protocol,scale,jump}={...QUEUE_DEFAULTS,...state};
  if(!Object.hasOwn(QUEUE_FIXTURES,fixture)||!Object.hasOwn(QUEUE_PROTOCOLS,protocol))throw new RangeError('Unknown queue fixture or observation protocol.');
  if(!Number.isInteger(scale)||scale<1||scale>3)throw new RangeError('Rate multiplier must be 1, 2 or 3.');
  const base=QUEUE_FIXTURES[fixture],lambda=base.lambda*scale,mu=base.mu*scale;rates(lambda,mu);
  const rho=rational(lambda,mu),oneMinus=rational(mu-lambda,mu),clockMean=rational(lambda,mu-lambda);
  const clock=n=>mul(oneMinus,power(rho,n));
  const changes=n=>n===0?rational(mu-lambda,2*mu):mul(rational((mu-lambda)*(mu+lambda),2*mu*mu),power(rho,n-1));
  // Full infinite tail is one exact bucket; none of the head is renormalized.
  const clockTail=power(rho,7),changeTail=mul(rational(mu+lambda,2*mu),power(rho,6));
  const buckets=Array.from({length:7},(_,n)=>({label:String(n),state:n,clock:clock(n),changes:changes(n),exitRate:n===0?lambda:lambda+mu}));
  buckets.push({label:'≥7',state:7,clock:clockTail,changes:changeTail,exitRate:lambda+mu});
  const inverseTotal=sum(buckets.map(b=>div(b.changes,rational(b.exitRate))));
  for(const bucket of buckets) {
    const n=bucket.state;
    bucket.recovered=div(div(bucket.changes,rational(bucket.exitRate)),inverseTotal);
    bucket.selected=protocol==='changes'?bucket.changes:protocol==='recovered'?bucket.recovered:protocol==='postarrival'?(n===0?rational(0):n===7?power(rho,6):clock(n-1)):bucket.clock;
  }
  const selectedMean=protocol==='changes'?rational(lambda+mu,2*(mu-lambda)):protocol==='postarrival'?rational(mu,mu-lambda):clockMean;
  const selectedTailMoment=mul(buckets.at(-1).selected,add(rational(7),clockMean));
  return {fixture,protocol,scale,jump,lambda,mu,rho,buckets,clockMean,selectedMean,selectedTailMoment,
    empty:buckets[0].selected,clockEmpty:oneMinus,inverseTotal,
    holdingZero:rational(1,lambda),holdingPositive:rational(1,lambda+mu),meanChangeRate:2*lambda,
    virtualFraction:rational(mu-lambda,lambda+mu),fixedJump:jumpFromEmpty(lambda,mu,jump)};
}
