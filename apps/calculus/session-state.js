// The native browser and shared importer use the same bounded session contracts.
import { validAuthored, fingerprint, exactObjectKeys } from './paper-edition.js';
import { isNewWrittenTask, newWrittenIdentityFromRecord } from './new-written-identity.js';
const chapterRange=(start,end)=>Array.from({length:end-start+1},(_,index)=>String(start+index).padStart(2,'0'));
const jsonValue=value=>{try{return JSON.parse(value);}catch{return null;}};
export const archiveLimit=12,archiveRawLimit=500000,archiveStoreLimit=1500000;
export const chapterNumberPattern='(?:0[1-9]|1[0-9]|2[0-9]|30)';
export const assessmentScopes={
  'calculus-1':{label:'Calculus I · chapters 01–11',ids:chapterRange(1,11)},
  'calculus-2':{label:'Calculus II · chapters 10–18',ids:chapterRange(10,18)},
  'calculus-3':{label:'Calculus III · chapters 19–26',ids:chapterRange(19,26)},
  'differential-equations':{label:'Differential equations and dynamics · chapters 27–28',ids:chapterRange(27,28)},
  comprehensive:{label:'Comprehensive · chapters 01–28',ids:chapterRange(1,28)}
};
export const problemReasons=[
  ['concept','Concept','Restate the relevant definition or theorem, including its conditions, before trying the problem again.'],
  ['setup','Setup','Name the quantities, draw or describe the geometry, and write the target equation before calculating.'],
  ['algebra','Algebra','Separate the algebra from the calculus, check signs and domains, then substitute the result back.'],
  ['calculation','Calculation','Estimate the sign and size first, then recompute one line at a time and compare.'],
  ['interpretation','Interpretation','State what the result means in context, with units and domain, then test whether it is plausible.']
];

export function createSessionValidators({chapterCache=new Map(),depth={}}={}){
function trainingSessionValid(item){
  if(!item||!['concept','written','assessment','written-exam'].includes(item.kind)||!Number.isFinite(item.completedAt)||item.completedAt<=0||item.completedAt>Date.now()+86400000||!Number.isInteger(item.total)||item.total<1||item.total>(item.kind==='assessment'?20:10)||!Array.isArray(item.chapters)||!item.chapters.length||!item.chapters.every(id=>new RegExp(`^${chapterNumberPattern}$`).test(id)))return false;
  if(item.kind==='concept'||item.kind==='assessment'){
    if(!Number.isInteger(item.correct)||item.correct<0||item.correct>item.total||item.kind==='assessment'&&!Object.hasOwn(assessmentScopes,item.scope))return false;
    for(const key of ['confidentMisses','unsureCorrect'])if(item[key]!==undefined&&(!Number.isInteger(item[key])||item[key]<0||item[key]>item.total))return false;
    return item.assessmentId===undefined||item.kind==='assessment'&&typeof item.assessmentId==='string'&&/^checkpoint-[1-9]\d{0,15}-\d{1,10}$/.test(item.assessmentId);
  }
  if(item.kind==='written-exam')return [item.solved,item.retry].every(value=>Number.isInteger(value)&&value>=0)&&item.solved+item.retry===item.total&&Object.hasOwn(assessmentScopes,item.scope)&&(item.examId===undefined||typeof item.examId==='string'&&/^[a-z0-9-]{1,80}$/.test(item.examId));
  return [item.solved,item.retry,item.unrecorded].every(value=>Number.isInteger(value)&&value>=0)&&item.solved+item.retry+item.unrecorded===item.total&&['All types','Fluency','Interpretation','Proof','Modeling','Challenge'].includes(item.problemType)&&(['all',...problemReasons.map(([key])=>key)].includes(item.obstacle))&&(item.mode===undefined||['retrieval','guided'].includes(item.mode));
}
function writtenExamActiveValid(item,{historicalLegacy=false}={}){
  const scope=item&&assessmentScopes[item.scope],v3=item?.version>=3;
  if(!scope||![1,2,3,4].includes(item.version)||![6,10].includes(item.length)||!Number.isInteger(item.seed)||item.seed<0||item.seed>0xffffffff||!Number.isFinite(item.startedAt)||item.startedAt<=0||item.startedAt>Date.now()+86400000||!['attempt','review'].includes(item.phase)||!Array.isArray(item.items)||!Array.isArray(item.results)||item.items.length!==item.length||item.results.length!==item.length||item.version>=2&&JSON.stringify(item).length>250000)return false;
  if(v3&&(typeof item.editionId!=='string'||!/^sha256-v1:[0-9a-f]{64}$/.test(item.editionId)))return false;
  const keys=new Set();
  for(const [index,entry] of item.items.entries()){
    const chapter=chapterCache.get(entry?.chapterId),count=chapter?chapter.exercises.length+(depth[entry.chapterId]?.questions.length||0):0;
    if(!entry||!scope.ids.includes(entry.chapterId)||!Number.isInteger(entry.number)||entry.number<1||(!v3&&!historicalLegacy&&entry.number>count)||keys.has(`${entry.chapterId}.${entry.number}`)||![null,'solved','retry'].includes(item.results[index]))return false;
    if(item.version===2&&!exactObjectKeys(entry,['chapterId','number']))return false;
    if(v3&&(!exactObjectKeys(entry,['chapterId','number','authored','authoredSha256',...(item.version===4?['taskIdentity','taskLesson']:[])])||!validAuthored(entry.authored)||typeof entry.authoredSha256!=='string'||entry.authoredSha256!==fingerprint(item.editionId,entry,entry.authored)))return false;
    if(item.version===4&&(isNewWrittenTask(entry.chapterId,entry.number)?entry.taskIdentity!==newWrittenIdentityFromRecord(entry.chapterId,entry.number,{...entry.authored,lesson:entry.taskLesson})||!Number.isInteger(entry.taskLesson):entry.taskIdentity!==null||entry.taskLesson!==null))return false;
    keys.add(`${entry.chapterId}.${entry.number}`);
  }
  if(item.phase==='attempt'&&!item.results.every(value=>value===null))return false;
  if(item.version===1)return true;
  const topKeys=['version','id','scope','length','seed','startedAt','phase','items','results','drafts','origins','intents','historySaved',...(v3?['editionId',...(Object.hasOwn(item,'reflections')?['reflections']:[])]:[])];
  if(typeof item.id!=='string'||!/^[a-z0-9-]{1,80}$/.test(item.id)||typeof item.historySaved!=='boolean'||!exactObjectKeys(item,topKeys)||!Array.isArray(item.drafts)||!Array.isArray(item.origins)||!Array.isArray(item.intents)||item.drafts.length!==item.length||item.origins.length!==item.length||item.intents.length!==item.length)return false;
  if(!item.drafts.every(value=>typeof value==='string'&&value.length<=12000)||!item.origins.every(value=>['new','copied-chapter','legacy-review-unknown'].includes(value)))return false;
  if(v3&&Object.hasOwn(item,'reflections')&&(!Array.isArray(item.reflections)||item.reflections.length!==item.length||!item.reflections.every((value,index)=>value===null||item.results[index]==='retry'&&problemReasons.some(([key])=>key===value))))return false;
  if(item.phase==='attempt'&&item.intents.some(value=>value!==null))return false;
  const validJournal=(intent,index)=>{
    if(intent===null)return true;
    if(item.phase!=='review'||item.results[index]===null||intent.index!==index)return false;
    if(intent.status==='skipped'&&(v3||isNewWrittenTask(item.items[index].chapterId,item.items[index].number))){
      if(intent.reason!=='changed')return false;
      if(exactObjectKeys(intent,['index','status','reason']))return true;
      if(!exactObjectKeys(intent,['index','status','reason','priorOutcome','priorReview','intendedOutcome','intendedReview']))return false;
    }else if(!exactObjectKeys(intent,['index','status','priorOutcome','priorReview','intendedOutcome','intendedReview'])||!['pending','applied'].includes(intent.status))return false;
    if(intent.intendedOutcome!==item.results[index]||![null,'solved','retry'].includes(intent.priorOutcome)||(intent.priorReview!==null&&typeof intent.priorReview!=='string'||intent.priorReview?.length>4000)||typeof intent.intendedReview!=='string'||intent.intendedReview.length>4000)return false;
    const intended=jsonValue(intent.intendedReview),prior=jsonValue(intent.priorReview);
    return writtenPracticeStateValid(intended)&&intended.lastResult===(intent.intendedOutcome==='solved')&&(intent.priorReview===null?intended.attempts===1:writtenPracticeStateValid(prior)&&intended.attempts===prior.attempts+1&&intended.lastAttempt>=prior.lastAttempt&&(intent.priorOutcome===null||prior.lastResult===(intent.priorOutcome==='solved')));
  };
  return (!item.historySaved||item.intents.every((intent,index)=>intent?.status==='applied'||intent?.status==='skipped'&&(v3||isNewWrittenTask(item.items[index].chapterId,item.items[index].number))))&&item.intents.every(validJournal);
}
function writtenExamArchivesValid(value){
  const data=jsonValue(value);
  return Boolean(data&&data.version===1&&Object.keys(data).every(key=>['version','entries'].includes(key))&&Array.isArray(data.entries)&&data.entries.length<=archiveLimit&&value.length<=archiveStoreLimit&&data.entries.every(entry=>entry&&Object.keys(entry).every(key=>['id','raw','archivedAt','reason'].includes(key))&&typeof entry.id==='string'&&/^[a-z0-9-]{1,80}$/.test(entry.id)&&typeof entry.raw==='string'&&entry.raw.length<=archiveRawLimit&&Number.isFinite(entry.archivedAt)&&entry.archivedAt>0&&entry.archivedAt<=Date.now()+86400000&&['invalid','conflict','completed'].includes(entry.reason)&&(entry.reason!=='completed'||[2,3,4].includes(jsonValue(entry.raw)?.version)&&writtenExamActiveValid(jsonValue(entry.raw),{historicalLegacy:true})&&jsonValue(entry.raw).phase==='review'&&jsonValue(entry.raw).historySaved&&jsonValue(entry.raw).results.every(Boolean)&&jsonValue(entry.raw).intents.every((intent,index)=>intent?.status==='applied'||intent?.status==='skipped'&&(jsonValue(entry.raw).version>=3||isNewWrittenTask(jsonValue(entry.raw).items[index].chapterId,jsonValue(entry.raw).items[index].number)))))&&new Set(data.entries.map(entry=>entry.id)).size===data.entries.length&&new Set(data.entries.map(entry=>entry.raw)).size===data.entries.length);
}
function writtenPracticeStateValid(item){return item&&typeof item==='object'&&!Array.isArray(item)&&Number.isInteger(item.attempts)&&item.attempts>=1&&item.attempts<=10000&&Number.isInteger(item.streak)&&item.streak>=0&&item.streak<=item.attempts&&Number.isFinite(item.due)&&item.due>=0&&Number.isFinite(item.lastAttempt)&&item.lastAttempt>0&&item.lastAttempt<=Date.now()+86400000&&typeof item.lastResult==='boolean';}
return {trainingSessionValid,writtenExamActiveValid,writtenExamArchivesValid,writtenPracticeStateValid};
}
