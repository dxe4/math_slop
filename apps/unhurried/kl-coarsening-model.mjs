const integer=x=>typeof x==='bigint'||Number.isSafeInteger(x),gcd=(a,b)=>b?gcd(b,a%b):a;
export function coarseningFraction(n,d=1){if(!integer(n)||!integer(d)||BigInt(d)<=0n)throw new RangeError('Use an integer numerator and positive denominator.');n=BigInt(n);d=BigInt(d);const g=gcd(n<0n?-n:n,d);return {n:n/g,d:d/g};}
const R=coarseningFraction,add=(a,b)=>R(a.n*b.d+b.n*a.d,a.d*b.d),mul=(a,b)=>R(a.n*b.n,a.d*b.d),div=(a,b)=>R(a.n*b.d,a.d*b.n),sum=xs=>xs.reduce(add,R(0)),equal=(a,b)=>a.n*b.d===b.n*a.d;
function probability(q){if(!q||typeof q!=='object'||!integer(q.n)||!integer(q.d)||BigInt(q.d)<=0n||BigInt(q.n)<0n||BigInt(q.n)>BigInt(q.d))throw new RangeError('Every probability must be an exact rational between zero and one.');return R(q.n,q.d);}
function distribution(input){if(!Array.isArray(input)||input.length<1||input.length>4)throw new RangeError('Use one to four exact probabilities.');const law=Array.from(input,probability);if(!equal(sum(law),R(1)))throw new RangeError('The probabilities must sum exactly to one.');return law;}
// Approximation is deliberately separate from support/equality arithmetic.
function logBig(n){const shift=Math.max(0,n.toString(2).length-53);return Math.log2(Number(n>>BigInt(shift)))+shift;}
const approx=q=>q.n===0n?0:2**(logBig(q.n)-logBig(q.d));
const infinite=failures=>({status:'infinite',zero:false,terms:[],approximate:null,supportFailures:failures});
function finite(terms,zero){const value=terms.reduce((total,{weight,ratio})=>total+approx(weight)*(logBig(ratio.n)-logBig(ratio.d)),0);return {status:'finite',zero,terms,approximate:zero?0:Math.max(0,value),supportFailures:[]};}
function divergence(p,q){const failures=p.flatMap((a,i)=>a.n>0n&&q[i].n===0n?[i]:[]);if(failures.length)return infinite(failures);const zero=p.every((a,i)=>equal(a,q[i])),terms=p.flatMap((a,i)=>a.n===0n||equal(a,q[i])?[]:[{weight:R(a.n,a.d),ratio:div(a,q[i])}]);return finite(terms,zero);}
export function klDivergence(inputP,inputQ){const p=distribution(inputP),q=distribution(inputQ);if(p.length!==q.length)throw new RangeError('Both distributions must use the same alphabet.');return divergence(p,q);}
function weighted(result,weight){return result.status==='infinite'?infinite([...result.supportFailures]):finite(result.terms.map(term=>({weight:mul(weight,term.weight),ratio:R(term.ratio.n,term.ratio.d)})),result.zero);}
export function analyzeCoarsening(inputP,inputQ,inputGroups){
  const p=distribution(inputP),q=distribution(inputQ);if(p.length!==q.length)throw new RangeError('Both distributions must use the same alphabet.');
  if(!Array.isArray(inputGroups)||inputGroups.length!==p.length||!Array.from(inputGroups).every(g=>Number.isInteger(g)&&g>=0&&g<p.length))throw new RangeError('Assign each symbol an integer block label.');
  const groups=[...inputGroups],count=Math.max(...groups)+1;if(!Array.from({length:count},(_,i)=>i).every(i=>groups.includes(i)))throw new RangeError('Use consecutive block labels beginning at zero, with no empty block.');
  const blocks=Array.from({length:count},(_,label)=>{
    const indices=groups.flatMap((g,i)=>g===label?[i]:[]),pMass=sum(indices.map(i=>p[i])),qMass=sum(indices.map(i=>q[i])),active=pMass.n>0n,pConditional=active?indices.map(i=>div(p[i],pMass)):null,qConditional=qMass.n>0n?indices.map(i=>div(q[i],qMass)):null,conditional=active&&qConditional?divergence(pConditional,qConditional):null;
    return {label,indices,pMass,qMass,active,pConditional,qConditional,conditional,residual:conditional?weighted(conditional,pMass):null,match:conditional?conditional.zero:null};
  });
  const coarseP=blocks.map(b=>b.pMass),coarseQ=blocks.map(b=>b.qMass),fine=divergence(p,q),coarse=divergence(coarseP,coarseQ),blockDominated=coarse.status==='finite',active=blocks.filter(b=>b.active);
  const residual=!blockDominated?null:active.some(b=>b.residual.status==='infinite')?infinite(active.flatMap(b=>b.conditional.supportFailures.map(i=>b.indices[i])).sort((a,b)=>a-b)):finite(active.flatMap(b=>b.residual.terms),active.every(b=>b.match));
  const preservesKL=blockDominated?active.every(b=>b.match):null,equalityStatus=!blockDominated?'infinite-coarse':preservesKL?'preserved':'strict-loss';
  return {p,q,groups,fine,coarse,coarseP,coarseQ,blocks,blockDominated,residual,preservesKL,equalityStatus};
}
export const COARSENING_GROUPINGS=Object.freeze({aligned:'Keep equal ratios together: 12 | 34',crossed:'Mix different ratios: 13 | 24'});
export function evaluateCoarsening({grouping='aligned',block=0}={}){
  if(typeof grouping!=='string'||!Object.hasOwn(COARSENING_GROUPINGS,grouping)||!Number.isInteger(block)||block<0||block>1)throw new RangeError('Choose one of two grouping rules and block A or B.');
  const result=analyzeCoarsening([3,3,1,1].map(n=>R(n,8)),[2,2,2,2].map(n=>R(n,8)),grouping==='aligned'?[0,0,1,1]:[0,1,0,1]);return {...result,grouping,block,selected:result.blocks[block]};
}
