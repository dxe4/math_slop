export const STOPPING_DEFAULTS=Object.freeze({boundary:'finite',width:4,horizon:3});

export function reducedFraction(numerator,denominator) {
  if(typeof numerator!=='bigint'||typeof denominator!=='bigint'||denominator<=0n)throw new RangeError('A fraction needs integer counts and a positive denominator.');
  let a=numerator<0n?-numerator:numerator,b=denominator;
  while(b){const r=a%b;a=b;b=r;}
  return {numerator:numerator/a,denominator:denominator/a};
}

// Count all length-H fair-coin histories, including unused moves after absorption.
// This is exact finite propagation, not a simulation or an infinite-time cutoff.
export function evaluateStopping(state={}) {
  const {boundary,width,horizon,start=1}={...STOPPING_DEFAULTS,...state};
  if(!['finite','halfline'].includes(boundary))throw new RangeError('Unknown stopping boundary.');
  for(const [name,value,min,max] of [['width',width,2,12],['horizon',horizon,0,80],['start',start,0,12]]) {
    if(!Number.isInteger(value)||value<min||value>max)throw new RangeError(`${name} must be an integer from ${min} to ${max}.`);
  }
  if(boundary==='finite'&&start>width)throw new RangeError('Start must lie between the finite edges.');
  let active=new Map(),zero=0n,upper=0n,denominator=1n,capped=0n;
  if(start===0)zero=1n;else if(boundary==='finite'&&start===width)upper=1n;else active.set(start,1n);
  const timeline=[];
  for(let step=0;step<=horizon;step++) {
    const surviving=[...active.values()].reduce((s,c)=>s+c,0n);
    const activePosition=[...active].reduce((s,[x,c])=>s+BigInt(x)*c,0n);
    const residual=boundary==='finite'?[...active].reduce((s,[x,c])=>s+BigInt(x*(width-x))*c,0n):null;
    timeline.push({step,denominator,surviving,zero,upper,capped,activePosition,
      stoppedPosition:activePosition+(boundary==='finite'?BigInt(width)*upper:0n),residual});
    if(step===horizon)break;
    // E[min(T,t+1)] = E[min(T,t)] + P(T>t), put over denominator 2^(t+1).
    capped=2n*(capped+surviving);
    zero*=2n;upper*=2n;
    const next=new Map(),add=(x,c)=>next.set(x,(next.get(x)||0n)+c);
    for(const [x,count] of active) {
      if(x===1)zero+=count;else add(x-1,count);
      if(boundary==='finite'&&x+1===width)upper+=count;else add(x+1,count);
    }
    active=next;denominator*=2n;
  }
  return {boundary,width,horizon,start,timeline,current:timeline.at(-1),positions:[...active].sort((a,b)=>a[0]-b[0]),
    eventualMean:boundary==='finite'?start*(width-start):start===0?0:Infinity};
}
