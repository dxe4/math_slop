export const INVERSION_DEFAULTS={trueNumerator:5,candidateNumerator:5,k:2};
export const INVERSION_ENDPOINTS={zero:{text:'0',approx:0},a:{text:'1−√(7/8)',approx:1-Math.sqrt(7/8)},b:{text:'√(1/8)',approx:Math.sqrt(1/8)},c:{text:'1−√(1/8)',approx:1-Math.sqrt(1/8)},d:{text:'√(7/8)',approx:Math.sqrt(7/8)},one:{text:'1',approx:1}};
export const INVERSION_INTERVALS=[{k:0,lower:'zero',upper:'c'},{k:1,lower:'a',upper:'d'},{k:2,lower:'b',upper:'one'}];
const gcd=(a,b)=>b?gcd(b,a%b):a;
export function inversionFraction(n,d=1n){n=BigInt(n);d=BigInt(d);if(d<=0n)throw new RangeError('Positive denominator required.');const g=gcd(n<0n?-n:n,d);return {n:n/g,d:d/g};}
export function binomialInversionProbe(numerator,denominator=20){
  if(!Number.isInteger(numerator)||!Number.isInteger(denominator)||denominator<1||denominator>10000||numerator<0||numerator>denominator)throw new RangeError('A rational parameter between zero and one with denominator at most 10000 is required.');
  const p=BigInt(numerator),q=BigInt(denominator-numerator),D=BigInt(denominator)**2n,weights=[q*q,2n*p*q,p*p];
  const tails=weights.map((_,k)=>{const F=weights.slice(0,k+1).reduce((a,b)=>a+b,0n),G=weights.slice(k).reduce((a,b)=>a+b,0n);return {k,F,G,retained:8n*F>=D&&8n*G>=D};});
  const coverageNumerator=weights.reduce((s,w,k)=>s+(tails[k].retained?w:0n),0n);
  return {numerator,denominator,parameter:inversionFraction(p,BigInt(denominator)),D,weights,tails,coverageNumerator,coverage:inversionFraction(coverageNumerator,D)};
}
export function binomialInversionGrid(){return Array.from({length:21},(_,j)=>binomialInversionProbe(j));}
export function evaluateBinomialInversion({trueNumerator=INVERSION_DEFAULTS.trueNumerator,candidateNumerator=INVERSION_DEFAULTS.candidateNumerator,k=INVERSION_DEFAULTS.k}={}){
  if(![trueNumerator,candidateNumerator].every(n=>Number.isInteger(n)&&n>=0&&n<=20)||!Number.isInteger(k)||k<0||k>2)throw new RangeError('Choose twentieth-grid probes and an observed count from zero to two.');
  const truth=binomialInversionProbe(trueNumerator),candidate=binomialInversionProbe(candidateNumerator);
  return {trueNumerator,candidateNumerator,k,truth,candidate,test:candidate.tails[k],interval:INVERSION_INTERVALS[k]};
}
