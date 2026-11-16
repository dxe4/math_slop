import { parseNumericAnswer } from './training.js';

// The evaluator owns correctness. Only its already-parsed, incorrect finite
// result can select a narrow wrong-result cue.
export function matchWrongResult(result,wrongResults=[]){
  if(result?.status!=='incorrect'||!Number.isFinite(result.value)||!Array.isArray(wrongResults))return null;
  for(const entry of wrongResults){
    const target=parseNumericAnswer(entry?.example);
    const tolerance=entry?.absoluteTolerance;
    if(target===null||!Number.isFinite(target)||!Number.isFinite(tolerance)||tolerance<0)continue;
    if(Math.abs(result.value-target)<=tolerance)return entry;
  }
  return null;
}

export function numericRetryText(result,guidance){
  if(result?.status!=='incorrect')return null;
  const match=matchWrongResult(result,guidance?.wrongResults);
  return match?.guidance||guidance?.retryCue||'Recheck the quantity and method requested by the label.';
}
