const integer=x=>typeof x==='bigint'||Number.isSafeInteger(x),gcd=(a,b)=>b?gcd(b,a%b):a;
export function pairwiseFraction(n,d=1){if(!integer(n)||!integer(d)||BigInt(d)<=0n)throw new RangeError('Use an integer numerator and positive denominator.');n=BigInt(n);d=BigInt(d);const g=gcd(n<0n?-n:n,d);return {n:n/g,d:d/g};}
const R=pairwiseFraction,add=(a,b)=>R(a.n*b.d+b.n*a.d,a.d*b.d),sub=(a,b)=>R(a.n*b.d-b.n*a.d,a.d*b.d),mul=(a,b)=>R(a.n*b.n,a.d*b.d),div=(a,b)=>R(a.n*b.d,a.d*b.n),sum=xs=>xs.reduce(add,R(0)),equal=(a,b)=>a.n*b.d===b.n*a.d;
function probability(q){if(!q||typeof q!=='object'||!integer(q.n)||!integer(q.d)||BigInt(q.d)<=0n||BigInt(q.n)<0n||BigInt(q.n)>BigInt(q.d))throw new RangeError('Every probability must be an exact rational between zero and one.');return R(q.n,q.d);}
export const TRIPLE_WORDS=Object.freeze(Array.from({length:8},(_,i)=>i.toString(2).padStart(3,'0')));
const bits=TRIPLE_WORDS.map(word=>[...word].map(Number));
export function analyzeTriple(input){
  if(!Array.isArray(input)||input.length!==8)throw new RangeError('Supply exactly eight probabilities in 000 through 111 order.');
  const law=Array.from(input,probability);if(!equal(sum(law),R(1)))throw new RangeError('The eight word probabilities must sum exactly to one.');
  const event=predicate=>sum(law.filter((_,i)=>predicate(bits[i]))),marginals=[0,1,2].map(j=>[0,1].map(b=>event(word=>word[j]===b)));
  const pairs=[[0,1],[0,2],[1,2]].map(indices=>{const[i,j]=indices,pair=[0,1,2,3].map(k=>event(word=>word[i]===Math.floor(k/2)&&word[j]===k%2));return {indices,law:pair,independent:pair.every((q,k)=>equal(q,mul(marginals[i][Math.floor(k/2)],marginals[j][k%2])))};});
  const count=[0,1,2,3].map(k=>event(word=>word.reduce((a,b)=>a+b,0)===k)),mean=sum(count.map((q,k)=>mul(q,R(k)))),secondMoment=sum(count.map((q,k)=>mul(q,R(k*k)))),variance=sub(secondMoment,mul(mean,mean)),productLaw=bits.map(word=>word.reduce((q,b,j)=>mul(q,marginals[j][b]),R(1)));
  const conditional=(evidence,joint)=>({evidence,joint,probability:evidence.n===0n?null:div(joint,evidence)});
  return {law,marginals,pairs,count,mean,secondMoment,variance,pairwiseIndependent:pairs.every(pair=>pair.independent),mutuallyIndependent:law.every((q,i)=>equal(q,productLaw[i])),productLaw,bothGiven:conditional(pairs[0].law[3],law[7]),oneGiven:conditional(marginals[0][1],pairs[1].law[3])};
}
export function biasedTriple(input){
  const t=probability(input);if(t.n*9n>t.d)throw new RangeError('For this pairwise-independent one-third family, use 0 ≤ t ≤ 1/9.');
  const single=add(R(1,9),t),double=sub(R(1,9),t);
  return analyzeTriple([sub(R(1,3),t),single,single,double,single,double,double,t]);
}
export const PAIRWISE_PRESETS=Object.freeze({xor:'Pairwise independent: Z = X xor Y',iid:'Three independent fair bits'});
const sources=Object.freeze({xor:Object.freeze([1,0,0,1,0,1,1,0].map(n=>Object.freeze(R(n,4)))),iid:Object.freeze(Array.from({length:8},()=>Object.freeze(R(1,8))))});
export function evaluatePairwise({preset='xor',word='111'}={}){
  if(!Object.hasOwn(PAIRWISE_PRESETS,preset)||typeof word!=='string'||word.length!==3||!/^[01]{3}$/.test(word))throw new RangeError('Choose one of two fair-bit sources and a three-bit word.');
  const result=analyzeTriple(sources[preset]),index=parseInt(word,2);
  return {...result,preset,word,index,selectedProbability:result.law[index],selectedProduct:result.productLaw[index],iidReference:analyzeTriple(sources.iid)};
}
