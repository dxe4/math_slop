export const EMPIRICAL_MI_SYMBOLS=['00','01','10','11'];
export const EMPIRICAL_MI_SOURCES={independent:{weights:[1,1,1,1],label:'Independent fair bits'},copied:{weights:[1,0,0,1],label:'A fair bit copied perfectly'},lamp:{weights:[3,1,1,3],label:'Fair card and quarter-error lamp'}};
export const EMPIRICAL_MI_DEFAULTS={source:'independent',first:0,second:3};
const gcd=(a,b)=>b?gcd(b,a%b):a;
export function empiricalMIFraction(n,d=1){if(!Number.isInteger(n)||!Number.isInteger(d)||d<=0)throw new RangeError('Integer numerator and positive denominator required.');const g=gcd(Math.abs(n),d);return {n:n/g,d:d/g};}
const entropy=counts=>{const total=counts.reduce((a,b)=>a+b,0);return -counts.reduce((s,c)=>s+(c?c/total*Math.log2(c/total):0),0)||0;};
function summarize(counts){const x=[counts[0]+counts[1],counts[2]+counts[3]],y=[counts[0]+counts[2],counts[1]+counts[3]],hx=entropy(x),hy=entropy(y),hxy=entropy(counts);return {counts,x,y,hx,hy,hxy,information:hx+hy-hxy};}
export function empiricalBinaryInformation(sample){
  if(!Array.isArray(sample)||!sample.length||sample.length>8||Array.from(sample).some(x=>!Number.isInteger(x)||x<0||x>3))throw new RangeError('One to eight paired binary observations are required.');
  const counts=Array(4).fill(0);for(const symbol of sample)counts[symbol]++;return {...summarize(counts),n:sample.length,sample:[...sample]};
}
export function evaluateMIWeights(weights,{first=EMPIRICAL_MI_DEFAULTS.first,second=EMPIRICAL_MI_DEFAULTS.second}={}){
  if(!Array.isArray(weights)||weights.length!==4||Array.from(weights).some(w=>!Number.isInteger(w)||w<0||w>9)||!weights.some(w=>w>0)||![first,second].every(i=>Number.isInteger(i)&&i>=0&&i<=3))throw new RangeError('Four source counts from 0 to 9, at least one positive, and two valid pair symbols are required.');
  const source=summarize([...weights]),total=weights.reduce((a,b)=>a+b,0),denominator=total*total;
  const independent=weights.every((w,i)=>w*total===source.x[Math.floor(i/2)]*source.y[i%2]),fairDeterministic=source.x[0]*2===total&&source.y[0]*2===total&&weights.filter(w=>w>0).length===2;
  const trueExact=independent?0:fairDeterministic?1:null,trueInformation=trueExact??source.information;
  const samples=[];for(let a=0;a<4;a++)for(let b=0;b<4;b++)samples.push({first:a,second:b,weight:weights[a]*weights[b],empirical:empiricalBinaryInformation([a,b])});
  const oneWeight=2*(weights[0]*weights[3]+weights[1]*weights[2]),expectation=empiricalMIFraction(oneWeight,denominator),probabilityZero=empiricalMIFraction(denominator-oneWeight,denominator),bias=oneWeight/denominator-trueInformation;
  return {weights:[...weights],source,total,denominator,trueExact,trueInformation,samples,oneWeight,expectation,probabilityZero,bias,biasExact:trueExact===null?null:empiricalMIFraction(oneWeight-trueExact*denominator,denominator),first,second,selected:samples[4*first+second]};
}
export function evaluateEmpiricalMI({source=EMPIRICAL_MI_DEFAULTS.source,first=EMPIRICAL_MI_DEFAULTS.first,second=EMPIRICAL_MI_DEFAULTS.second}={}){
  if(!Object.hasOwn(EMPIRICAL_MI_SOURCES,source))throw new RangeError('Unknown paired-observation source.');return {...evaluateMIWeights(EMPIRICAL_MI_SOURCES[source].weights,{first,second}),sourceId:source};
}
