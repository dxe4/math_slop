import { supplementaryLabs } from './supplementary-labs.js';

const ids = new Set(supplementaryLabs.map(lab => lab.id));
export const supplementaryLabById = id => supplementaryLabs.find(lab => lab.id === id);
export const suppCodeKey = id => `supp-code-${id}`;
export const suppWorkKey = id => `supp-work-${id}`;
export const suppKeyAllowed = key => ids.has(key.slice(10))&&(key.startsWith('supp-code-')||key.startsWith('supp-work-'));
export const emptySuppWork = () => ({version:1,prediction:'',observation:'',explanation:''});
export function validSuppValue(key, raw) {
  if(typeof raw !== 'string') return false;
  const code=key.startsWith('supp-code-'),work=key.startsWith('supp-work-');
  if(!code&&!work || !suppKeyAllowed(key))return false;
  if(code)return raw.length<=20000;
  if(raw.length>6200)return false;
  let value;try{value=JSON.parse(raw);}catch{return false;}
  return value&&typeof value==='object'&&!Array.isArray(value)
    &&Object.keys(value).sort().join(',')==='explanation,observation,prediction,version'
    &&value.version===1&&['prediction','observation','explanation'].every(field=>typeof value[field]==='string'&&value[field].length<=2000);
}
export const readSuppWork = (key,raw) => validSuppValue(key,raw)?JSON.parse(raw):emptySuppWork();
