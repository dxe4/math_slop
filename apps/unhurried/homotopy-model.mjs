// Exact verdicts for two explicit families; samples are only for the drawing.
export const HOMOTOPY_DEFAULTS = Object.freeze({space:'disk',loop:'once',method:'linear',progress:25,position:50});
const choices = {space:['disk','punctured'],loop:['once','outback'],method:['linear','angle']};
function percentage(name, value) {
  if (!Number.isInteger(value) || value < 0 || value > 100) throw new RangeError(`${name} must be an integer from 0 to 100`);
  return value;
}
function circlePoint(turns) {
  if (Number.isInteger(turns)) return [1,0];
  if (Number.isInteger(turns * 2)) return [-1,0];
  return [Math.cos(2*Math.PI*turns),Math.sin(2*Math.PI*turns)];
}
export function evaluateHomotopy(options={}) {
  const state = {...HOMOTOPY_DEFAULTS,...options};
  for (const [key,values] of Object.entries(choices)) if (!values.includes(state[key])) throw new RangeError(`Unknown ${key}`);
  percentage('progress',state.progress); percentage('position',state.position);
  const s = state.progress / 100;
  const turns = t => state.loop === 'once' ? t : 2*Math.min(t,1-t);
  const pointAt = t => {
    if (s === 1) return [1,0];
    const [x,y] = circlePoint((state.method === 'angle' ? 1-s : 1)*turns(t));
    return state.method === 'linear' ? [s+(1-s)*x,(1-s)*y] : [x,y];
  };
  const sliceBased = state.method === 'linear' || state.loop === 'outback' || state.progress === 0 || state.progress === 100;
  const touchesOrigin = state.method === 'linear' && state.progress === 50;
  const sliceInSpace = state.space === 'disk' || !touchesOrigin;
  const familyBased = state.method === 'linear' || state.loop === 'outback';
  const familyInSpace = state.space === 'disk' || state.method === 'angle';
  let winding = null;
  let windingReason = '';
  if (!sliceBased) windingReason = 'Undefined: this slice is an open path, not a loop.';
  else if (touchesOrigin) windingReason = 'Undefined: this loop passes through the origin.';
  else if (state.loop === 'outback') winding = 0;
  else winding = state.progress < 50 ? 1 : 0;
  return {...state,s,sliceBased,sliceInSpace,familyBased,familyInSpace,
    familyValid:familyBased&&familyInSpace,touchesOrigin,winding,windingReason,
    minimumDistance:state.method === 'linear' ? Math.abs(1-2*s) : 1,
    start:pointAt(0),end:pointAt(1),point:pointAt(state.position/100),
    points:Array.from({length:201},(_,i)=>pointAt(i/200)),
    crossingTimes:touchesOrigin ? (state.loop === 'once' ? [0.5] : [0.25,0.75]) : []};
}
