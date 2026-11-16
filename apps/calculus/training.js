import {isExactIntegerAnswer} from './extensions/integer-checkpoints/exact-integer.js';

const DAY=24*60*60*1000;
export const REVIEW_INTERVAL_DAYS=[1,3,7,14,30,60];
export const WRITTEN_REVIEW_INTERVAL_DAYS=[3,7,14,30,60];

export function reviewDay(timestamp=Date.now()){
  const date=new Date(timestamp);
  return new Date(date.getFullYear(),date.getMonth(),date.getDate()).getTime();
}

function addCalendarDays(timestamp,days){
  const date=new Date(reviewDay(timestamp));date.setDate(date.getDate()+days);return reviewDay(date.getTime());
}

export function daysUntilReview(due,timestamp=Date.now()){
  const start=new Date(reviewDay(timestamp)),end=new Date(reviewDay(due));
  const startUtc=Date.UTC(start.getFullYear(),start.getMonth(),start.getDate()),endUtc=Date.UTC(end.getFullYear(),end.getMonth(),end.getDate());
  return Math.round((endUtc-startUtc)/DAY);
}

export function normalizeMasteryState(value){
  const state=value&&typeof value==='object'?value:{};
  return {
    attempts:Number.isInteger(state.attempts)&&state.attempts>=0?state.attempts:0,
    firstCorrect:typeof state.firstCorrect==='boolean'?state.firstCorrect:null,
    streak:Number.isInteger(state.streak)&&state.streak>=0?state.streak:0,
    due:Number.isFinite(state.due)?state.due:0,
    lastResult:typeof state.lastResult==='boolean'?state.lastResult:null
  };
}

export function nextMasteryState(previous,correct,timestamp=Date.now()){
  const state=normalizeMasteryState(previous),streak=correct?state.streak+1:0;
  const interval=correct?REVIEW_INTERVAL_DAYS[Math.min(streak-1,REVIEW_INTERVAL_DAYS.length-1)]:0;
  return {
    attempts:state.attempts+1,
    firstCorrect:state.attempts===0?Boolean(correct):state.firstCorrect,
    streak,
    due:addCalendarDays(timestamp,interval),
    lastResult:Boolean(correct)
  };
}

export function normalizeWrittenPracticeState(value){
  const state=value&&typeof value==='object'?value:{};
  return {
    attempts:Number.isInteger(state.attempts)&&state.attempts>=0?state.attempts:0,
    streak:Number.isInteger(state.streak)&&state.streak>=0?state.streak:0,
    due:Number.isFinite(state.due)?state.due:0,
    lastAttempt:Number.isFinite(state.lastAttempt)?state.lastAttempt:0,
    lastResult:typeof state.lastResult==='boolean'?state.lastResult:null
  };
}

export function nextWrittenPracticeState(previous,solved,timestamp=Date.now()){
  const state=normalizeWrittenPracticeState(previous),streak=solved?state.streak+1:0;
  const interval=solved?WRITTEN_REVIEW_INTERVAL_DAYS[Math.min(streak-1,WRITTEN_REVIEW_INTERVAL_DAYS.length-1)]:0;
  return {attempts:state.attempts+1,streak,due:addCalendarDays(timestamp,interval),lastAttempt:Number(timestamp),lastResult:Boolean(solved)};
}

function interleave(items){
  const groups=new Map();
  for(const item of items){if(!groups.has(item.chapterId))groups.set(item.chapterId,[]);groups.get(item.chapterId).push(item);}
  const result=[];
  while(result.length<items.length)for(const group of groups.values())if(group.length)result.push(group.shift());
  return result;
}

function rotate(items,offset){
  if(!items.length)return items;const start=((offset%items.length)+items.length)%items.length;return [...items.slice(start),...items.slice(0,start)];
}

function seededRank(seed,value){
  let hash=(Math.trunc(Number(seed))>>>0)^0x9e3779b9;
  for(const character of String(value)){hash^=character.charCodeAt(0);hash=Math.imul(hash,16777619);hash^=hash>>>13;}
  return hash>>>0;
}

export function buildAssessmentQueue(items,{limit=10,seed=0}={}){
  const groups=new Map();
  for(const item of items){
    const key=`${item.chapterId}.${item.index}`;
    if(!groups.has(item.chapterId))groups.set(item.chapterId,new Map());
    groups.get(item.chapterId).set(key,item);
  }
  const chapters=[...groups].sort(([a],[b])=>seededRank(seed,`chapter-${a}`)-seededRank(seed,`chapter-${b}`)||a.localeCompare(b));
  for(const [chapterId,group] of chapters){
    groups.set(chapterId,[...group.values()].sort((a,b)=>seededRank(seed,`${chapterId}.${a.index}`)-seededRank(seed,`${chapterId}.${b.index}`)||a.index-b.index));
  }
  const queue=[];
  while(queue.length<items.length){
    let added=false;
    for(const [chapterId] of chapters){const next=groups.get(chapterId).shift();if(next){queue.push(next);added=true;}}
    if(!added)break;
  }
  const count=Math.max(1,Math.min(queue.length,Number.isInteger(limit)?limit:10));
  return queue.slice(0,count);
}

export function buildWrittenExamQueue(items,{limit=6,seed=0}={}){
  const unique=new Map();
  for(const item of items){
    if(!item||typeof item.chapterId!=='string'||!Number.isInteger(item.number))continue;
    unique.set(`${item.chapterId}.${item.number}`,item);
  }
  const remaining=[...unique.values()],queue=[],chapterCounts=new Map(),typeCounts=new Map();
  const count=Math.min(remaining.length,Math.max(1,Number.isInteger(limit)?limit:6));
  while(queue.length<count){
    remaining.sort((a,b)=>{
      const chapterDifference=(chapterCounts.get(a.chapterId)||0)-(chapterCounts.get(b.chapterId)||0);
      if(chapterDifference)return chapterDifference;
      const typeDifference=(typeCounts.get(a.type)||0)-(typeCounts.get(b.type)||0);
      if(typeDifference)return typeDifference;
      return seededRank(seed,`${a.chapterId}.${a.number}`)-seededRank(seed,`${b.chapterId}.${b.number}`)||a.chapterId.localeCompare(b.chapterId)||a.number-b.number;
    });
    const next=remaining.shift();queue.push(next);
    chapterCounts.set(next.chapterId,(chapterCounts.get(next.chapterId)||0)+1);
    typeCounts.set(next.type,(typeCounts.get(next.type)||0)+1);
  }
  return queue;
}

export function orderAnswerOptions(options,correctIndex,seed=0){
  const tagged=options.map((text,index)=>({text,index,correct:index===correctIndex}));
  if(tagged.length<2)return tagged;
  const safeSeed=Math.abs(Number.isFinite(seed)?Math.trunc(seed):0),cycle=Math.floor(safeSeed/tagged.length);
  const ordered=rotate(tagged,safeSeed%tagged.length);
  return cycle%2?[...ordered].reverse():ordered;
}

const NUMERIC_LITERAL='[+-]?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?';
const UNSIGNED_LITERAL='(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+-]?\\d+)?';

export function parseNumericAnswer(value){
  const source=String(value??'').trim().toLowerCase().replaceAll('−','-').replaceAll('π','pi').replace(/[×·]/g,'*');
  if(!source)return null;
  // Match complete tokens: spaces may separate operations, never digits or names.
  const literal=text=>{
    const number=Number(text);
    return Number.isFinite(number)&&(number!==0||!/[1-9]/.test(text.split('e')[0]))?number:null;
  };
  const quotient=(numerator,denominator)=>{
    if(numerator===null||denominator===null||denominator===0)return null;
    const result=numerator/denominator;
    return Number.isFinite(result)&&(result!==0||numerator===0)?result:null;
  };
  if(new RegExp(`^${NUMERIC_LITERAL}$`).test(source)){
    return literal(source);
  }
  let match=source.match(new RegExp(`^(${NUMERIC_LITERAL})\\s*/\\s*(${NUMERIC_LITERAL})$`));
  if(match)return quotient(literal(match[1]),literal(match[2]));
  match=source.match(new RegExp(`^([+-]?)sqrt\\s*\\(\\s*(${UNSIGNED_LITERAL})\\s*\\)(?:\\s*/\\s*(${UNSIGNED_LITERAL}))?$`));
  if(match){const radicand=literal(match[2]),denominator=match[3]?literal(match[3]):1;if(radicand===null||denominator===null)return null;return quotient((match[1]==='-'?-1:1)*Math.sqrt(radicand),denominator);}
  match=source.match(new RegExp(`^([+-]?)(?:(${UNSIGNED_LITERAL})(?:\\s*\\*\\s*|\\s+)?)?(pi|e)(?:\\s*/\\s*(${UNSIGNED_LITERAL}))?$`));
  if(match){
    const coefficient=match[2]?literal(match[2]):1,denominator=match[4]?literal(match[4]):1;
    if(coefficient===null||denominator===null||denominator===0)return null;
    if(coefficient===0)return 0;
    const constant=match[3]==='pi'?Math.PI:Math.E,sign=match[1]==='-'?-1:1;
    // Choose an order that can preserve a finite coefficient/constant ratio.
    const candidates=[(coefficient/denominator)*constant,coefficient*(constant/denominator),(coefficient*constant)/denominator];
    const number=candidates.find(result=>Number.isFinite(result)&&result!==0);
    return number===undefined?null:sign*number;
  }
  return null;
}

export function evaluateNumericAnswer(value,check){
  const parsed=parseNumericAnswer(value);
  if(parsed===null)return {status:String(value??'').trim()?'invalid':'empty',value:null};
  if(!check||!Number.isFinite(check.answer))return {status:'invalid',value:parsed};
  // For nonzero answers, a fixed absolute floor can dwarf a small result and
  // silently override a checkpoint's requested relative precision.
  const absoluteTolerance=Number.isFinite(check.absoluteTolerance)?Math.max(0,check.absoluteTolerance):(check.answer===0?1e-6:0);
  const relativeTolerance=Number.isFinite(check.relativeTolerance)?Math.max(0,check.relativeTolerance):1e-6;
  const tolerance=Math.max(absoluteTolerance,relativeTolerance*Math.abs(check.answer));
  const correct=check.integer?isExactIntegerAnswer(value,check.answer):Math.abs(parsed-check.answer)<=tolerance;
  return {status:correct?'correct':'incorrect',value:parsed,tolerance};
}

export function buildReviewQueue(items,timestamp=Date.now(),limit=10){
  const today=reviewDay(timestamp);
  const due=items.filter(item=>item.state.attempts>0&&item.state.due<=today).sort((a,b)=>a.state.due-b.state.due||a.chapterId.localeCompare(b.chapterId)||a.index-b.index);
  const unseen=items.filter(item=>item.state.attempts===0).sort((a,b)=>a.index-b.index||a.chapterId.localeCompare(b.chapterId));
  return [...interleave(due),...interleave(unseen)].slice(0,limit);
}

export function masterySummary(items,timestamp=Date.now()){
  const today=reviewDay(timestamp),attempted=items.filter(item=>item.state.attempts>0);
  return {
    total:items.length,
    attempted:attempted.length,
    firstCorrect:attempted.filter(item=>item.state.firstCorrect).length,
    due:attempted.filter(item=>item.state.due<=today).length,
    developing:attempted.filter(item=>item.state.streak<2).length,
    strong:attempted.filter(item=>item.state.streak>=2).length,
    unseen:items.length-attempted.length
  };
}

export function buildProblemQueue(items,{type='All types',limit=5,offset=0,timestamp=Date.now()}={}){
  const eligible=type==='All types'?items:items.filter(item=>item.type===type);
  const today=reviewDay(timestamp),due=item=>item.outcome==='solved'&&(!item.state||item.state.attempts===0||item.state.due<=today);
  const buckets=[
    eligible.filter(item=>item.outcome==='retry'),
    eligible.filter(due),
    eligible.filter(item=>!item.outcome),
    eligible.filter(item=>item.outcome==='solved'&&!due(item))
  ];
  return buckets.flatMap(bucket=>rotate(interleave(bucket.sort((a,b)=>a.number-b.number||a.chapterId.localeCompare(b.chapterId))),offset)).slice(0,limit);
}
