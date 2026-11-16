const integer=x=>typeof x==='bigint'||Number.isSafeInteger(x);
function gcd(a,b){while(b){[a,b]=[b,a%b];}return a;}
export function noiseFraction(n,d=1){if(!integer(n)||!integer(d)||BigInt(d)<=0n)throw new RangeError('Use an integer numerator and positive denominator.');n=BigInt(n);d=BigInt(d);const g=gcd(n<0n?-n:n,d);return{n:n/g,d:d/g};}
const R=noiseFraction,add=(a,b)=>R(a.n*b.d+b.n*a.d,a.d*b.d),sub=(a,b)=>R(a.n*b.d-b.n*a.d,a.d*b.d),mul=(a,b)=>R(a.n*b.n,a.d*b.d),abs=a=>R(a.n<0n?-a.n:a.n,a.d),cmp=(a,b)=>a.n*b.d-b.n*a.d,sum=xs=>xs.reduce(add,R(0));
function div(a,b){if(b.n===0n)throw new RangeError('Cannot divide by zero.');return R(a.n*b.d*(b.n<0n?-1n:1n),a.d*(b.n<0n?-b.n:b.n));}
function rational(q){if(!q||typeof q!=='object'||!integer(q.n)||!integer(q.d))throw new RangeError('Use exact rational values.');return R(q.n,q.d);}
function triple(xs){if(!Array.isArray(xs)||xs.length!==3)throw new RangeError('Use exactly three values.');return Array.from(xs,rational);}
export function analyzeInterpolationNoise({nodes:inputNodes,data:inputData,errors:inputErrors,x:inputX,epsilon:inputEpsilon,domain:inputDomain=[R(-1),R(1)]}={}){
  const nodes=triple(inputNodes),data=triple(inputData),errors=triple(inputErrors),x=rational(inputX),epsilon=rational(inputEpsilon);
  if(!Array.isArray(inputDomain)||inputDomain.length!==2)throw new RangeError('State a closed interval.');
  const domain=Array.from(inputDomain,rational);if(cmp(domain[0],domain[1])>=0n)throw new RangeError('The interval must have positive length.');
  const inside=q=>cmp(q,domain[0])>=0n&&cmp(q,domain[1])<=0n;
  if(!inside(x)||!nodes.every(inside))throw new RangeError('Nodes and probe must be in the stated interval.');
  if(nodes.some((a,i)=>nodes.some((b,j)=>j<i&&cmp(a,b)===0n)))throw new RangeError('The three nodes must be distinct.');
  if(epsilon.n<0n||errors.some(e=>cmp(abs(e),epsilon)>0n))throw new RangeError('Errors must lie within the nonnegative absolute error budget.');
  const weights=nodes.map((node,j)=>nodes.reduce((w,other,k)=>k===j?w:mul(w,div(sub(x,other),sub(node,other))),R(1)));
  const rows=nodes.map((node,j)=>({node,data:data[j],error:errors[j],perturbedData:add(data[j],errors[j]),weight:weights[j],contribution:mul(errors[j],weights[j])}));
  const base=sum(rows.map(r=>mul(r.data,r.weight))),delta=sum(rows.map(r=>r.contribution)),perturbed=add(base,delta),lambda=sum(weights.map(abs)),pointBound=mul(epsilon,lambda),absoluteDelta=abs(delta);
  return{nodes,data,errors,x,epsilon,domain,weights,rows,base,delta,perturbed,lambda,pointBound,absoluteDelta,attained:cmp(absoluteDelta,pointBound)===0n};
}
export const NOISE_RECORDS=Object.freeze({right:'Fixed signs −,+,+ (chosen for x=1/2)',uniform:'Common +ε offset at every node'});
export function evaluateInterpolationNoise({record='right',probe=4}={}){
  if(typeof record!=='string'||!Object.hasOwn(NOISE_RECORDS,record)||!Number.isInteger(probe)||probe< -8||probe>8)throw new RangeError('Choose one of two fixed records and one of seventeen rational probes.');
  const epsilon=R(1,100),x=R(probe,8),m=analyzeInterpolationNoise({nodes:[R(-1),R(0),R(1)],data:[R(1,26),R(1),R(1,26)],errors:[record==='right'?R(-1,100):epsilon,epsilon,epsilon],x,epsilon});
  const trueValue=div(R(1),add(R(1),mul(R(25),mul(x,x)))),uniformBound=R(1,80);
  return{...m,record,probe,trueValue,noiselessError:sub(trueValue,m.base),totalError:sub(trueValue,m.perturbed),uniformBound,globalAttained:cmp(m.absoluteDelta,uniformBound)===0n};
}
