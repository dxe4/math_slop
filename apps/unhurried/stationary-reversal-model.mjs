const integer=x=>typeof x==='bigint'||Number.isSafeInteger(x),gcd=(a,b)=>b?gcd(b,a%b):a;
export function reversalFraction(n,d=1){if(!integer(n)||!integer(d)||BigInt(d)<=0n)throw new RangeError('Use an integer numerator and positive denominator.');n=BigInt(n);d=BigInt(d);const g=gcd(n<0n?-n:n,d);return {n:n/g,d:d/g};}
const R=reversalFraction,add=(a,b)=>R(a.n*b.d+b.n*a.d,a.d*b.d),sub=(a,b)=>R(a.n*b.d-b.n*a.d,a.d*b.d),mul=(a,b)=>R(a.n*b.n,a.d*b.d),div=(a,b)=>R(a.n*b.d,a.d*b.n),sum=xs=>xs.reduce(add,R(0)),equal=(a,b)=>a.n*b.d===b.n*a.d;
function probability(q){if(!q||typeof q!=='object'||!integer(q.n)||!integer(q.d)||BigInt(q.d)<=0n||BigInt(q.n)<0n||BigInt(q.n)>BigInt(q.d))throw new RangeError('Every probability must be an exact rational between zero and one.');return R(q.n,q.d);}
function matrixOf(input){if(!Array.isArray(input)||input.length<1||input.length>4||!Array.from(input).every(row=>Array.isArray(row)&&row.length===input.length))throw new RangeError('Use a square stochastic matrix of one to four states.');const matrix=Array.from(input,row=>Array.from(row,probability));if(matrix.some(row=>!equal(sum(row),R(1))))throw new RangeError('Each transition row must sum exactly to one.');return matrix;}
function distributionOf(input,n){if(!Array.isArray(input)||input.length!==n)throw new RangeError('The initial distribution must match the state count.');const p=Array.from(input,probability);if(!equal(sum(p),R(1)))throw new RangeError('The initial probabilities must sum exactly to one.');return p;}
export function reverseKernel(input,stationary){
  const matrix=matrixOf(input),pi=distributionOf(stationary,matrix.length);
  if(pi.some(p=>p.n===0n))throw new RangeError('Restrict to positive stationary support before defining a reverse kernel.');
  if(pi.some((p,j)=>!equal(p,sum(pi.map((a,i)=>mul(a,matrix[i][j]))))))throw new RangeError('The supplied positive distribution must be stationary for this matrix.');
  return matrix.map((_,i)=>matrix.map((row,j)=>div(mul(pi[j],row[i]),pi[i])));
}
export function pathLaw(input,initial,path){
  const matrix=matrixOf(input),p=distributionOf(initial,matrix.length);
  if(!Array.isArray(path)||path.length<1||path.length>5||!Array.from(path).every(i=>Number.isInteger(i)&&i>=0&&i<matrix.length))throw new RangeError('Use one to five valid state indices for a path.');
  let result=p[path[0]];for(let k=1;k<path.length;k++)result=mul(result,matrix[path[k-1]][path[k]]);return result;
}
export const REVERSAL_PRESETS=Object.freeze({circulating:'Stationary with circulation',balanced:'Detailed balance, same occupancies'});
const freezeMatrix=matrix=>Object.freeze(matrix.map(row=>Object.freeze(row.map(q=>Object.freeze(q)))));
export const REVERSAL_SOURCES=Object.freeze({
  circulating:freezeMatrix([[3,2,1],[1,3,2],[2,1,3]].map(row=>row.map(n=>R(n,6)))),
  balanced:freezeMatrix([[2,1,1],[1,2,1],[1,1,2]].map(row=>row.map(n=>R(n,4))))
});
export function evaluateReversal({preset='circulating',path=[0,1,2,0]}={}){
  if(!Object.hasOwn(REVERSAL_PRESETS,preset)||!Array.isArray(path)||path.length!==4||!Array.from(path).every(i=>Number.isInteger(i)&&i>=0&&i<=2))throw new RangeError('Choose one of two sources and exactly four A/B/C states.');
  const matrix=REVERSAL_SOURCES[preset].map(row=>row.map(q=>R(q.n,q.d))),pi=[R(1,3),R(1,3),R(1,3)],selected=[...path],reversedPath=[...path].reverse(),reverse=reverseKernel(matrix,pi),flows=matrix.map((row,i)=>row.map(p=>mul(pi[i],p))),currents=flows.map((row,i)=>row.map((p,j)=>sub(p,flows[j][i]))),forwardProbability=pathLaw(matrix,pi,selected),sameKernelReversedProbability=pathLaw(matrix,pi,reversedPath),reverseKernelReversedProbability=pathLaw(reverse,pi,reversedPath);
  return {preset,path:selected,word:selected.map(i=>'ABC'[i]).join(''),reversedPath,reversedWord:reversedPath.map(i=>'ABC'[i]).join(''),matrix,pi,flows,currents,reverse,balanced:currents.every(row=>row.every(q=>q.n===0n)),forwardProbability,sameKernelReversedProbability,reverseKernelReversedProbability,ratio:div(forwardProbability,sameKernelReversedProbability)};
}
