export const SIMPSON_DEFAULTS = Object.freeze({easyA:10,easyB:90,target:50});

// All calculations below are integer counts. Each hypothetical route has 1,000
// attempts; one percentage point of allocation moves ten attempts.
export function evaluateSimpson(state = {}) {
  const values={...SIMPSON_DEFAULTS,...state};
  for(const key of ['easyA','easyB','target']) {
    if(!Number.isInteger(values[key])||values[key]<0||values[key]>100) throw new RangeError(`${key} must be an integer from 0 to 100.`);
  }
  const route=(easy,easyRate,hardRate)=>{
    const rows=[{name:'Easy',attempts:10*easy,finished:easyRate*easy,preset:easyRate*10},
      {name:'Hard',attempts:10*(100-easy),finished:hardRate*(100-easy),preset:hardRate*10}];
    return {rows,finished:rows[0].finished+rows[1].finished,attempts:1000,
      easyContribution:rows[0].finished,hardContribution:rows[1].finished};
  };
  const a=route(values.easyA,9,4),b=route(values.easyB,8,3);
  const difference=a.finished-b.finished;
  return {...values,a,b,difference,allocationGap:values.easyB-values.easyA,
    comparison:difference<0?'reversal':difference===0?'tie':'a-higher',
    standardized:{a:400+5*values.target,b:300+5*values.target,difference:100}};
}

// The original 200 observed attempts, now stipulated to be different people
// on fixed boards. A completion fills only the outcome under the unused route.
export function completePotentialOutcomes(mode) {
  if(!['positive','negative'].includes(mode)) throw new RangeError('Unknown potential-outcome completion.');
  const groups=[{route:'A',difficulty:'Easy',finished:9,attempts:10},
    {route:'A',difficulty:'Hard',finished:36,attempts:90},
    {route:'B',difficulty:'Easy',finished:72,attempts:90},
    {route:'B',difficulty:'Hard',finished:3,attempts:10}];
  const people=groups.flatMap(g=>Array.from({length:g.attempts},(_,i)=>{
    const observed=Number(i<g.finished);
    return {route:g.route,difficulty:g.difficulty,observed,
      a:g.route==='A'?observed:Number(mode==='positive'),
      b:g.route==='B'?observed:Number(mode==='negative')};
  }));
  const totalA=people.reduce((sum,p)=>sum+p.a,0),totalB=people.reduce((sum,p)=>sum+p.b,0);
  return {people,totalA,totalB,difference:totalA-totalB,total:people.length};
}
