const freezeMatrix=rows=>Object.freeze(rows.map(row=>Object.freeze(row)));
export const BLOCK_TICKS=Object.freeze({
  equal:freezeMatrix([[2,0,2],[0,2,2],[2,2,0]]),
  unequal:freezeMatrix([[2,0,2],[0,3,1],[2,2,0]]),
  special:freezeMatrix([[2,1,1],[0,1,3],[2,2,0]])
});
export const BLOCK_PRESETS=Object.freeze({equal:'Equal block totals',unequal:'Unequal block totals'});
const integer=x=>typeof x==='bigint'||Number.isSafeInteger(x),gcd=(a,b)=>b?gcd(b,a%b):a;
export function blockFraction(n,d=1){if(!integer(n)||!integer(d)||BigInt(d)<=0n)throw new RangeError('Use an integer numerator and positive denominator.');n=BigInt(n);d=BigInt(d);const g=gcd(n<0n?-n:n,d);return {n:n/g,d:d/g};}
const R=blockFraction,add=(a,b)=>R(a.n*b.d+b.n*a.d,a.d*b.d),mul=(a,b)=>R(a.n*b.n,a.d*b.d),div=(a,b)=>R(a.n*b.d,a.d*b.n),sum=xs=>xs.reduce(add,R(0));
const group=i=>i===2?'V':'U';
function validMatrix(matrix){return Array.isArray(matrix)&&matrix.length===3&&Array.from(matrix).every(row=>Array.isArray(row)&&row.length===3&&Array.from(row).every(x=>Number.isInteger(x)&&x>=0&&x<=4)&&row.reduce((a,b)=>a+b,0)===4);}
// A bounded exact conditional-law evaluator, not a test of all histories.
export function blockHistory(matrixTicks,initialTicks,history){
  if(!validMatrix(matrixTicks)||!Array.isArray(initialTicks)||initialTicks.length!==3||!Array.from(initialTicks).every(x=>Number.isInteger(x)&&x>=0&&x<=16)||initialTicks.reduce((a,b)=>a+b,0)===0||typeof history!=='string'||! /^[UV]{1,8}$/.test(history))throw new RangeError('Use a three-state quarter-probability matrix, three initial weights, and one to eight U/V labels.');
  const total=initialTicks.reduce((a,b)=>a+b,0);
  let weights=initialTicks.map((x,i)=>group(i)===history[0]?R(x,total):R(0));
  for(const label of history.slice(1))weights=weights.map((_,j)=>group(j)===label?sum(weights.map((p,i)=>mul(p,R(matrixTicks[i][j],4)))):R(0));
  const mass=sum(weights);
  if(mass.n===0n)return {possible:false,mass,hidden:null,next:null};
  const hidden=weights.map(p=>div(p,mass)),next=['U','V'].map(label=>sum(hidden.map((p,i)=>mul(p,R(matrixTicks[i].reduce((n,x,j)=>n+(group(j)===label?x:0),0),4)))));
  return {possible:true,mass,hidden,next};
}
export function evaluateMarkovBlock({preset='equal',wNumerator=2}={}){
  if(!Object.hasOwn(BLOCK_PRESETS,preset)||!Number.isInteger(wNumerator)||wNumerator<0||wNumerator>4)throw new RangeError('Choose one of two matrix presets and a quarter-grid initial mixture.');
  const ticks=BLOCK_TICKS[preset],matrix=ticks.map(row=>row.map(x=>R(x,4))),blockRows=ticks.map((row,i)=>({state:['A','B','C'][i],U:R(row[0]+row[1],4),V:R(row[2],4)})),common=ticks[0][2]===ticks[1][2];
  const mixtures=Array.from({length:5},(_,j)=>{const next=blockHistory(ticks,[j,4-j,0],'U').next;return {w:R(j,4),U:next[0],V:next[1]};});
  return {preset,wNumerator,w:R(wNumerator,4),initial:[R(wNumerator,4),R(4-wNumerator,4),R(0)],matrix,blockRows,common,quotient:common?[[blockRows[0].U,blockRows[0].V],[blockRows[2].U,blockRows[2].V]]:null,next:[mixtures[wNumerator].U,mixtures[wNumerator].V],mixtures};
}
