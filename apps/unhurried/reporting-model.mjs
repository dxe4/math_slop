export const REPORTING_PROTOCOLS={scan:'Inspect both dice; report if either is six',selected:'Select one die fairly; report if that die is six'};
export const REPORTING_DEFAULTS={protocol:'scan',blue:1,yellow:6};
const gcd=(a,b)=>b?gcd(b,a%b):a;
export function reportingFraction(n,d){if(!Number.isInteger(n)||!Number.isInteger(d)||n<0||d<=0)throw new RangeError('A nonnegative count and positive total are required.');const g=gcd(n,d);return {n:n/g,d:d/g};}
export function evaluateReporting({protocol=REPORTING_DEFAULTS.protocol,blue=REPORTING_DEFAULTS.blue,yellow=REPORTING_DEFAULTS.yellow}={}){
  if(!Object.hasOwn(REPORTING_PROTOCOLS,protocol)||![blue,yellow].every(n=>Number.isInteger(n)&&n>=1&&n<=6))throw new RangeError('Choose a known report protocol and die faces from 1 to 6.');
  const states=[];
  for(let b=1;b<=6;b++)for(let y=1;y<=6;y++)for(const selector of ['blue','yellow']){const selectedFace=selector==='blue'?b:y,reported=protocol==='scan'?(b===6||y===6):selectedFace===6;states.push({blue:b,yellow:y,selector,selectedFace,reported,matches:b+y===7});}
  const reports=states.filter(s=>s.reported).length,matches=states.filter(s=>s.reported&&s.matches).length;
  const pairs=Array.from({length:36},(_,i)=>{const b=Math.floor(i/6)+1,y=i%6+1,reportCount=states.filter(s=>s.blue===b&&s.yellow===y&&s.reported).length;return {blue:b,yellow:y,reportCount,posterior:reportingFraction(reportCount,reports)};});
  const classes=[0,1,2].map(sixes=>{const worlds=pairs.filter(w=>Number(w.blue===6)+Number(w.yellow===6)===sixes);return {sixes,count:worlds.length,reportCount:worlds[0].reportCount,likelihood:reportingFraction(worlds[0].reportCount,2),posterior:worlds[0].posterior};});
  const selected=pairs.find(w=>w.blue===blue&&w.yellow===yellow),selectorStates=states.filter(s=>s.blue===blue&&s.yellow===yellow);
  return {protocol,blue,yellow,states,pairs,classes,reports,matches,reportProbability:reportingFraction(reports,72),jointProbability:reportingFraction(matches,72),conditional:reportingFraction(matches,reports),selected,selectorStates};
}
