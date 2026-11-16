const gcd=(a,b)=>b?gcd(b,a%b):a;
export function branchingRational(n,d=1n) {
  n=BigInt(n);d=BigInt(d);if(d===0n)throw new RangeError('A fraction needs a nonzero denominator.');if(d<0n){n=-n;d=-d;}const g=gcd(n<0n?-n:n,d);return {n:n/g,d:d/g};
}
const R=branchingRational,add=(a,b)=>R(a.n*b.d+b.n*a.d,a.d*b.d),sub=(a,b)=>R(a.n*b.d-b.n*a.d,a.d*b.d),mul=(a,b)=>R(a.n*b.n,a.d*b.d),div=(a,b)=>R(a.n*b.d,a.d*b.n);
const sum=xs=>xs.reduce(add,R(0));
export const BRANCHING_DEFAULT_HORIZON=2;
// The fresh law is available for independent exact checks and transfer work;
// the reader's bounded explorer deliberately uses the original law only.
export const BRANCHING_FIXTURES={original:{p:[R(1,4),R(1,4),R(1,2)],q:R(1,2)},fresh:{p:[R(3,8),R(1,8),R(1,2)],q:R(3,4)}};
export function evaluateBranching({horizon=BRANCHING_DEFAULT_HORIZON,fixture='original'}={}) {
  if(!Number.isInteger(horizon)||horizon<1||horizon>6||!Object.hasOwn(BRANCHING_FIXTURES,fixture))throw new RangeError('Choose an integer deadline from 1 through 6 and a known offspring law.');
  const {p,q}=BRANCHING_FIXTURES[fixture],f=s=>add(add(p[0],mul(p[1],s)),mul(p[2],mul(s,s))),derivative=s=>add(p[1],mul(R(2),mul(p[2],s)));
  let previous=R(0),weightedSize=R(0),deadlineLaw,byDeadline;
  const history=[];
  for(let h=1;h<=horizon;h++) {
    byDeadline=f(previous);weightedSize=add(byDeadline,mul(derivative(previous),weightedSize));
    deadlineLaw=[p[0],mul(p[1],previous),mul(p[2],mul(previous,previous))].map(x=>div(x,byDeadline));
    history.push({horizon:h,byDeadline,weightedSize,meanTotal:div(weightedSize,byDeadline),deadlineLaw});previous=byDeadline;
  }
  const eventualLaw=[div(p[0],q),p[1],mul(p[2],q)];
  const mean=law=>sum(law.map((x,k)=>mul(R(k),x)));
  const eventualMean=mean(eventualLaw);
  return {fixture,horizon,p,q,byDeadline,extinctLater:sub(q,byDeadline),survival:sub(R(1),q),selectedByDeadline:div(byDeadline,q),
    deadlineLaw,eventualLaw,originalMean:mean(p),deadlineMean:mean(deadlineLaw),eventualMean,eventualTotal:div(R(1),sub(R(1),eventualMean)),
    deadlineTotal:div(weightedSize,byDeadline),weightedSize,history};
}
