export const BAG_VARIANCE_DEFAULT_N=4;
const gcd=(a,b)=>b?gcd(b,a%b):a;
export function bagFraction(n,d=1n){n=BigInt(n);d=BigInt(d);if(d<=0n)throw new RangeError('Positive denominator required.');const g=gcd(n<0n?-n:n,d);return {n:n/g,d:d/g};}
function choose(n,k){let c=1n;for(let j=1;j<=k;j++)c=c*BigInt(n-j+1)/BigInt(j);return c;}
export function evaluateBagVariance(n=BAG_VARIANCE_DEFAULT_N){
  if(!Number.isInteger(n)||n<1||n>32)throw new RangeError('Choose from 1 to 32 replacement draws.');
  const sharedDenominator=2n*4n**BigInt(n),redrawDenominator=2n**BigInt(n);
  const rows=Array.from({length:n+1},(_,k)=>{const c=choose(n,k);return {k,sharedNumerator:c*(3n**BigInt(n-k)+3n**BigInt(k)),redrawNumerator:c};});
  return {n,rows,sharedDenominator,redrawDenominator,mean:bagFraction(1n,2n),between:bagFraction(1n,16n),within:bagFraction(3n,16n*BigInt(n)),sharedVariance:bagFraction(BigInt(n+3),16n*BigInt(n)),redrawVariance:bagFraction(1n,4n*BigInt(n))};
}
