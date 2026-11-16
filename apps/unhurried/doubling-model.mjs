// Exact finite laws, not sampled coin tosses. Every K-toss continuation has
// denominator 2^K, even when the paper-score process stopped earlier.
export const DOUBLING_DEFAULT_CAP=4;
export function doublingAtCap(cap=DOUBLING_DEFAULT_CAP) {
  if(!Number.isInteger(cap)||cap<0||cap>24)throw new RangeError('The cap must be an integer from 0 through 24.');
  const denominator=2n**BigInt(cap),heads=denominator-1n;
  return {cap,denominator,heads,tails:1n,headGain:1n,tailGain:1n-denominator,
    headContribution:heads,tailContribution:-heads,mean:0n,
    durationNumerator:2n*heads,absoluteGainNumerator:2n*heads,
    differenceNumerator:denominator,totalAmountsMean:BigInt(cap)};
}
