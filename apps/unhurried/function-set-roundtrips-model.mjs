function freeze(value){if(value&&typeof value==='object'){for(const child of Object.values(value))freeze(child);Object.freeze(value);}return value;}
function labels(input,name){
  if(!Array.isArray(input)||input.length>8)throw new RangeError(`${name} must be a set with at most eight labels.`);
  const result=Array.from(input);
  if(!result.every(x=>Number.isSafeInteger(x)||(typeof x==='string'&&x.length>0&&x.length<=32&&!/[\u0000-\u001f\u007f]/.test(x)))||new Set(result).size!==result.length)throw new RangeError(`${name} must contain distinct short strings or safe integers.`);
  return result;
}
export function analyzeSetRoundTrip({domain:inputDomain,codomain:inputCodomain,values:inputValues,direction='input',selection=[]}={}){
  const domain=labels(inputDomain,'The domain'),codomain=labels(inputCodomain,'The codomain');
  if(direction!=='input'&&direction!=='output')throw new RangeError('Choose an input or output set round trip.');
  if(!Array.isArray(inputValues)||inputValues.length!==domain.length)throw new RangeError('Give exactly one output for each domain member.');
  const values=Array.from(inputValues),indices=values.map(value=>codomain.indexOf(value));
  if(indices.some(i=>i<0))throw new RangeError('Every assigned output must belong to the codomain.');
  const side=direction==='input'?domain:codomain,chosen=labels(selection,'The selection');
  if(chosen.some(x=>!side.includes(x)))throw new RangeError('Every selected member must belong to the starting set.');
  const bit=i=>1<<i,maskOf=(xs,order)=>xs.reduce((mask,x)=>mask|bit(order.indexOf(x)),0),fromMask=(mask,order)=>order.filter((_,i)=>mask&bit(i));
  const imageMask=mask=>indices.reduce((result,j,i)=>mask&bit(i)?result|bit(j):result,0);
  const preimageMask=mask=>indices.reduce((result,j,i)=>mask&bit(j)?result|bit(i):result,0);
  const startMask=maskOf(chosen,side),intermediateMask=direction==='input'?imageMask(startMask):preimageMask(startMask),recoveredMask=direction==='input'?preimageMask(intermediateMask):imageMask(intermediateMask);
  const allImageMask=imageMask((1<<domain.length)-1),image=fromMask(allImageMask,codomain);
  const fibers=codomain.map((output,j)=>({output,inputs:domain.filter((_,i)=>indices[i]===j)}));
  const selectedCondition=direction==='input'?fibers.every(f=>!f.inputs.some(x=>chosen.includes(x))||f.inputs.every(x=>chosen.includes(x))):(startMask&~allImageMask)===0;
  return freeze({domain,codomain,values,direction,start:fromMask(startMask,side),intermediate:fromMask(intermediateMask,direction==='input'?codomain:domain),recovered:fromMask(recoveredMask,side),added:fromMask(recoveredMask&~startMask,side),lost:fromMask(startMask&~recoveredMask,side),equal:startMask===recoveredMask,image,fibers,injective:fibers.every(f=>f.inputs.length<=1),surjective:fibers.every(f=>f.inputs.length>0),selectedCondition,inputSetCount:2**domain.length,outputSetCount:2**codomain.length,inputRecoveries:2**image.length,outputRecoveries:2**image.length});
}
export const SET_ROUNDTRIP_PRESETS=freeze({
  I:{id:'I',title:'I · Distinct inputs; target 3 unused',domain:['a','b','c'],codomain:[0,1,2,3],values:[0,1,2]},
  O:{id:'O',title:'O · Inputs a,b collide; all targets reached',domain:['a','b','c','d'],codomain:[0,1,2],values:[0,0,1,2]}
});
function setting(preset,direction){if(typeof preset!=='string'||!Object.hasOwn(SET_ROUNDTRIP_PRESETS,preset))throw new RangeError('Choose fixed map I or O.');if(direction!=='input'&&direction!=='output')throw new RangeError('Choose an input or output set round trip.');return SET_ROUNDTRIP_PRESETS[preset];}
export function getRoundTripDefault(preset='O',direction='input'){setting(preset,direction);return freeze(direction==='input'?['a','c']:preset==='I'?[1,3]:[0,1]);}
export function evaluateSetRoundTrip({preset='O',direction='input',selection}={}){const map=setting(preset,direction),model=analyzeSetRoundTrip({...map,direction,selection:selection===undefined?getRoundTripDefault(preset,direction):selection});return freeze({...model,preset,title:map.title});}
