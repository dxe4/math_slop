// A completed checkpoint is a frozen browser record. Validation never consults a later bank.
const scopes={
  'calculus-1':{label:'Calculus I · chapters 01–11',first:1,last:11},
  'calculus-2':{label:'Calculus II · chapters 10–18',first:10,last:18},
  'calculus-3':{label:'Calculus III · chapters 19–26',first:19,last:26},
  'differential-equations':{label:'Differential equations and dynamics · chapters 27–28',first:27,last:28},
  comprehensive:{label:'Comprehensive · chapters 01–28',first:1,last:28}
};
const keys=(value,expected)=>value&&typeof value==='object'&&!Array.isArray(value)&&Object.keys(value).sort().join('|')===expected.slice().sort().join('|');
const text=value=>typeof value==='string'&&value.trim().length>0&&value.length<=12000;
const optionalText=value=>typeof value==='string'&&value.length<=12000;
const index=(n,length)=>Number.isInteger(n)&&n>=0&&n<length;
const href=value=>value===null||typeof value==='string'&&value.length<=160&&/^#chapter\/(?:0[1-9]|1[0-9]|2[0-8])\/(?:lesson\/[1-9]\d*|practice\/[1-9]\d*\/problem\/[1-9]\d*)$/.test(value);
export function buildAssessmentReport(state,questions,completedAt,repairFor,orderFor){
  const scope=scopes[state.scope];
  return {version:1,id:`checkpoint-${state.startedAt}-${state.seed}`,scope:state.scope,scopeLabel:scope.label,length:state.length,seed:state.seed,startedAt:state.startedAt,completedAt,items:state.items.map((source,i)=>{
    const question=questions[i],repair=repairFor(source.chapterId,source.index,question),links=repair?.authored?[repair.authored.href]:repair?[repair.lessonHref,repair.problemHref]:[];
    return {chapterId:source.chapterId,bankIndex:source.index,prompt:question.prompt,options:[...question.options],optionOrder:orderFor(question.options,question.correct,state.seed+Number(source.chapterId)*101+source.index*17).map(option=>option.index),selected:state.selections[i],correct:question.correct,explanation:question.explanation,misconception:question.misconceptions?.[state.selections[i]]||'',confidence:state.confidences?.[i]??null,repairHrefs:links.filter(link=>href(link)&&link!==null)};
  })};
}
export function assessmentReportValid(report,{validHref=href}={}){
  if(!keys(report,['version','id','scope','scopeLabel','length','seed','startedAt','completedAt','items'])||report.version!==1||!scopes[report.scope]||report.scopeLabel!==scopes[report.scope].label||![10,20].includes(report.length)||!Number.isInteger(report.seed)||report.seed<0||report.seed>0xffffffff||!Number.isSafeInteger(report.startedAt)||report.startedAt<=0||!Number.isSafeInteger(report.completedAt)||report.completedAt<report.startedAt||report.completedAt>Date.now()+86400000||report.id!==`checkpoint-${report.startedAt}-${report.seed}`||!Array.isArray(report.items)||!(report.scope==='differential-equations'&&report.length===20?[10,14,20]:[report.length]).includes(report.items.length)||JSON.stringify(report).length>250000)return false;
  const seen=new Set(),scope=scopes[report.scope];
  for(const item of report.items){
    if(!keys(item,['chapterId','bankIndex','prompt','options','optionOrder','selected','correct','explanation','misconception','confidence','repairHrefs'])||!/^\d{2}$/.test(item.chapterId)||Number(item.chapterId)<scope.first||Number(item.chapterId)>scope.last||!Number.isInteger(item.bankIndex)||item.bankIndex<0||item.bankIndex>10000||seen.has(`${item.chapterId}.${item.bankIndex}`)||!text(item.prompt)||!text(item.explanation)||!optionalText(item.misconception)||!Array.isArray(item.options)||item.options.length<2||item.options.length>8||!item.options.every(text)||!Array.isArray(item.optionOrder)||item.optionOrder.length!==item.options.length||new Set(item.optionOrder).size!==item.options.length||!item.optionOrder.every(n=>index(n,item.options.length))||!index(item.selected,item.options.length)||!index(item.correct,item.options.length)||![null,'low','medium','high'].includes(item.confidence)||!Array.isArray(item.repairHrefs)||item.repairHrefs.length>2||!item.repairHrefs.every(link=>href(link)&&validHref(link)))return false;
    seen.add(`${item.chapterId}.${item.bankIndex}`);
  }
  return true;
}
export function prioritizedAssessmentItems(report){
  return report.items.map((item,index)=>({item,index})).filter(({item})=>item.selected!==item.correct||item.confidence==='low').sort((a,b)=>{
    const rank=item=>item.selected!==item.correct?(item.confidence==='high'?0:1):2;
    return rank(a.item)-rank(b.item)||a.index-b.index;
  });
}
