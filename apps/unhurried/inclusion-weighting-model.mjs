// The population is fixed. Only the four equally likely design tickets vary.
export const INCLUSION_SAMPLES=Object.freeze([
  Object.freeze({members:Object.freeze([1,2]),tickets:2}),
  Object.freeze({members:Object.freeze([1,3]),tickets:1}),
  Object.freeze({members:Object.freeze([2,4]),tickets:1})
]);
const integer=value=>typeof value==='bigint'||Number.isSafeInteger(value);
const gcd=(a,b)=>b?gcd(b,a%b):a;
export function inclusionFraction(n,d=1){
  if(!integer(n)||!integer(d)||BigInt(d)<=0n)throw new RangeError('Use an integer numerator and a positive integer denominator.');
  n=BigInt(n);d=BigInt(d);const g=gcd(n<0n?-n:n,d);return {n:n/g,d:d/g};
}
const R=inclusionFraction,add=(a,b)=>R(a.n*b.d+b.n*a.d,a.d*b.d),mul=(a,b)=>R(a.n*b.n,a.d*b.d),sub=(a,b)=>R(a.n*b.d-b.n*a.d,a.d*b.d),div=(a,b)=>R(a.n*b.d,a.d*b.n);
const sum=values=>values.reduce(add,R(0));
export function evaluateInclusion({outcomes=[1,1,0,0],sample=0}={}){
  if(!Array.isArray(outcomes)||outcomes.length!==4||!Array.from(outcomes).every(y=>y===0||y===1)||!Number.isInteger(sample)||sample<0||sample>2)throw new RangeError('Choose four binary fixed outcomes and one of the three possible samples.');
  const y=[...outcomes],target=R(y.reduce((a,b)=>a+b,0),4),pi=y.map((_,i)=>R(INCLUSION_SAMPLES.filter(s=>s.members.includes(i+1)).reduce((n,s)=>n+s.tickets,0),4));
  const rows=INCLUSION_SAMPLES.map((s,j)=>{
    const weightedTotal=sum(s.members.map(i=>div(R(y[i-1]),pi[i-1]))),sizeEstimate=sum(s.members.map(i=>div(R(1),pi[i-1])));
    return {sample:j,members:[...s.members],label:s.members.join(''),tickets:s.tickets,probability:R(s.tickets,4),weightedTotal,sizeEstimate,estimates:{raw:R(s.members.reduce((n,i)=>n+y[i-1],0),2),ht:div(weightedTotal,R(4)),normalized:div(weightedTotal,sizeEstimate)}};
  });
  const expectations={},biases={},mses={};
  for(const key of ['raw','ht','normalized']){
    expectations[key]=sum(rows.map(r=>mul(r.probability,r.estimates[key])));
    biases[key]=sub(expectations[key],target);
    mses[key]=sum(rows.map(r=>{const error=sub(r.estimates[key],target);return mul(r.probability,mul(error,error));}));
  }
  return {outcomes:y,target,pi,rows,selected:rows[sample],expectations,biases,mses};
}
