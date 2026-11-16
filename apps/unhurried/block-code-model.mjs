export const BLOCK_CODE_SYMBOLS=['AA','AB','BA','BB'];
export const BLOCK_CODE_PRESETS={fair:{a:1,b:1,label:'P(A)=1/2; P(B)=1/2'},twothirds:{a:2,b:1,label:'P(A)=2/3; P(B)=1/3'},threequarters:{a:3,b:1,label:'P(A)=3/4; P(B)=1/4'},seveneighths:{a:7,b:1,label:'P(A)=7/8; P(B)=1/8'}};
export const BLOCK_CODE_DEFAULTS={fixture:'threequarters',caseIndex:23};
const gcd=(a,b)=>b?gcd(b,a%b):a;
export function blockFraction(n,d=1n){n=BigInt(n);d=BigInt(d);if(d<=0n)throw new RangeError('Positive denominator required.');const g=gcd(n<0n?-n:n,d);return {n:n/g,d:d/g};}
function positiveWeights(weights){if(!Array.isArray(weights)||weights.length!==4||weights.some(w=>typeof w!=='bigint'||w<=0n))throw new RangeError('Four positive integer weights required.');}
function fullShapes(leaves){if(leaves===1)return [null];const out=[];for(let left=1;left<leaves;left++)for(const a of fullShapes(left))for(const b of fullShapes(leaves-left))out.push([a,b]);return out;}
function leafDepths(shape,depth=0){return shape===null?[depth]:[...leafDepths(shape[0],depth+1),...leafDepths(shape[1],depth+1)];}
function permutations(xs){return xs.length?xs.flatMap((x,i)=>permutations(xs.filter((_,j)=>i!==j)).map(t=>[x,...t])):[[]];}
export function enumerateFourLeafCodes(weights){
  positiveWeights(weights);const cases=[];
  for(const[shapeIndex,shape]of fullShapes(4).entries()) {
    const slots=leafDepths(shape);
    for(const assignment of permutations([0,1,2,3])) {
      const depths=Array(4);assignment.forEach((symbol,slot)=>depths[symbol]=slots[slot]);
      const numerator=weights.reduce((n,w,k)=>n+w*BigInt(depths[k]),0n);
      cases.push({shapeIndex,assignment,depths,numerator,family:slots.every(x=>x===2)?'balanced':'comb'});
    }
  }
  const minimum=cases.reduce((n,c)=>c.numerator<n?c.numerator:n,cases[0].numerator);
  return {cases,minimum,minimizers:cases.filter(c=>c.numerator===minimum).length,shapeCount:5,assignmentCount:24};
}
export function huffmanPairLengths(weights){
  positiveWeights(weights);let serial=4;const nodes=weights.map((weight,index)=>({weight,index,order:index})),merges=[];
  while(nodes.length>1){nodes.sort((a,b)=>a.weight===b.weight?b.order-a.order:a.weight<b.weight?-1:1);const a=nodes.shift(),b=nodes.shift();merges.push([a.weight,b.weight,a.weight+b.weight]);nodes.push({weight:a.weight+b.weight,left:a,right:b,order:serial++});}
  const depths=Array(4);const visit=(node,depth)=>{if(node.index!==undefined)depths[node.index]=depth;else{visit(node.left,depth+1);visit(node.right,depth+1);}};visit(nodes[0],0);return {depths,merges};
}
export function canonicalPairCodes(depths){
  if(!Array.isArray(depths)||depths.length!==4||depths.some(x=>!Number.isInteger(x)||x<1||x>3)||depths.reduce((s,x)=>s+2**-x,0)!==1)throw new RangeError('A full four-leaf depth list is required.');
  const order=[0,1,2,3].sort((a,b)=>depths[a]-depths[b]||a-b),codes=Array(4);let word=0,previous=0;
  for(const index of order){word*=2**(depths[index]-previous);codes[index]=word.toString(2).padStart(depths[index],'0');word++;previous=depths[index];}return codes;
}
export function iidPairCode(a,b,{caseIndex=BLOCK_CODE_DEFAULTS.caseIndex}={}){
  if(!Number.isInteger(a)||!Number.isInteger(b)||a<1||b<1||a>9||b>9||!Number.isInteger(caseIndex)||caseIndex<0||caseIndex>=120)throw new RangeError('Positive counts from 1 to 9 and a candidate from 0 to 119 are required.');
  const total=BigInt(a+b),denominator=total*total,weights=[BigInt(a*a),BigInt(a*b),BigInt(a*b),BigInt(b*b)],greedy=huffmanPairLengths(weights),oracle=enumerateFourLeafCodes(weights);
  const numerator=weights.reduce((n,w,k)=>n+w*BigInt(greedy.depths[k]),0n);
  if(numerator!==oracle.minimum)throw new Error('Greedy and exhaustive optima disagree.');
  const p=a/(a+b),q=b/(a+b),entropy=ps=>-ps.reduce((s,x)=>s+(x?x*Math.log2(x):0),0);
  return {a,b,total,denominator,weights,depths:greedy.depths,codes:canonicalPairCodes(greedy.depths),merges:greedy.merges,numerator,
    pairMean:blockFraction(numerator,denominator),letterRate:blockFraction(numerator,2n*denominator),letterEntropy:entropy([p,q]),pairEntropy:entropy(weights.map(w=>Number(w)/Number(denominator))),
    oracle,caseIndex,candidate:oracle.cases[caseIndex],balancedNumerator:2n*denominator};
}
export function evaluateBlockCode({fixture=BLOCK_CODE_DEFAULTS.fixture,caseIndex=BLOCK_CODE_DEFAULTS.caseIndex}={}){
  if(!Object.hasOwn(BLOCK_CODE_PRESETS,fixture))throw new RangeError('Unknown iid letter source.');const {a,b}=BLOCK_CODE_PRESETS[fixture];return {...iidPairCode(a,b,{caseIndex}),fixture};
}
