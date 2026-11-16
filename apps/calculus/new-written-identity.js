import {sha256} from './paper-edition.js';
import {depth} from './depth.js';

// Only the reviewed append positions use an edition-bound storage identity.
const additions={
  '02':{42:9,43:10,44:11},'04':{36:5,37:6,38:7,39:8},'08':{36:5,37:6},'11':{34:3,35:4,36:5},'13':{34:3},
  '17':{36:5,37:6},'14':{36:5},'18':{49:18},'20':{44:13},'23':{35:4},
  '24':{37:6},'28':{37:6,38:7,39:8},'21':{37:6},'26':{36:5,37:6,38:7}
};
export const isNewWrittenTask=(id,number)=>Object.hasOwn(additions[id]||{},number);
export function newWrittenIdentityFromRecord(id,number,item){
  const digest=sha256(JSON.stringify(['new-written-task-v1',id,number,item.question,item.type,item.hint,item.solution,item.solutionCode||'',item.lesson]));
  return `${id}-${number}-${digest}`;
}
export function newWrittenIdentity(id,number){
  const index=additions[id]?.[number];
  if(index===undefined)return null;
  const item=depth[id].questions[index];
  return newWrittenIdentityFromRecord(id,number,item);
}
export function newWrittenKey(kind,id,number){
  const identity=newWrittenIdentity(id,number);
  return identity?`new-written-v1-${kind}-${identity}`:null;
}
export function parseNewWrittenKey(key){
  const match=/^new-written-v1-(draft|outcome|reason|review)-(0[1-9]|1[0-9]|2[0-8])-([1-9][0-9]?)-([0-9a-f]{64})$/.exec(key);
  return match?{kind:match[1],id:match[2],number:Number(match[3]),digest:match[4]}:null;
}
