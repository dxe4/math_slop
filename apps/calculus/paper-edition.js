// Canonical paper content uses JSON arrays encoded as UTF-8, with no Unicode normalization.
// The digest is a consistency check for saved text, not an authentication signature.
const K = [
  0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,
  0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,
  0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,
  0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,
  0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,
  0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,
  0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,
  0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2
];
const rotate=(x,n)=>(x>>>n)|(x<<(32-n));
export function sha256(value){
  const bytes=new TextEncoder().encode(value),bitLength=BigInt(bytes.length)*8n;
  const length=Math.ceil((bytes.length+9)/64)*64,buffer=new Uint8Array(length);
  buffer.set(bytes);buffer[bytes.length]=0x80;
  for(let i=0;i<8;i++)buffer[length-1-i]=Number((bitLength>>BigInt(i*8))&255n);
  const h=[0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
  const w=new Uint32Array(64);
  for(let offset=0;offset<length;offset+=64){
    for(let i=0;i<16;i++){const j=offset+i*4;w[i]=((buffer[j]<<24)|(buffer[j+1]<<16)|(buffer[j+2]<<8)|buffer[j+3])>>>0;}
    for(let i=16;i<64;i++){const a=w[i-15],b=w[i-2];w[i]=(w[i-16]+(rotate(a,7)^rotate(a,18)^(a>>>3))+w[i-7]+(rotate(b,17)^rotate(b,19)^(b>>>10)))>>>0;}
    let [a,b,c,d,e,f,g,q]=h;
    for(let i=0;i<64;i++){const t1=(q+(rotate(e,6)^rotate(e,11)^rotate(e,25))+((e&f)^(~e&g))+K[i]+w[i])>>>0,t2=((rotate(a,2)^rotate(a,13)^rotate(a,22))+((a&b)^(a&c)^(b&c)))>>>0;q=g;g=f;f=e;e=(d+t1)>>>0;d=c;c=b;b=a;a=(t1+t2)>>>0;}
    for(const [i,value] of [a,b,c,d,e,f,g,q].entries())h[i]=(h[i]+value)>>>0;
  }
  return h.map(value=>value.toString(16).padStart(8,'0')).join('');
}
const authoredKeys=['question','type','hint','solution','solutionCode','rubric'];
const exactKeys=(object,keys)=>object&&typeof object==='object'&&!Array.isArray(object)&&Object.keys(object).length===keys.length&&keys.every(key=>Object.hasOwn(object,key));
export function authoredFields(problem,rubric){return {question:problem.question,type:problem.type||'Challenge',hint:problem.hint,solution:problem.solution,solutionCode:problem.solutionCode??'',rubric:[...rubric]};}
export function validAuthored(authored){return exactKeys(authored,authoredKeys)&&['Fluency','Interpretation','Proof','Modeling','Challenge'].includes(authored.type)&&['question','hint','solution','solutionCode'].every(key=>typeof authored[key]==='string')&&authored.question.length>0&&authored.hint.length>0&&authored.solution.length>0&&Array.isArray(authored.rubric)&&authored.rubric.length===3&&authored.rubric.every(value=>typeof value==='string'&&value.length>0);}
export function authoredTuple(ref,authored){return [ref.chapterId,ref.number,authored.question,authored.type,authored.hint,authored.solution,authored.solutionCode,...authored.rubric];}
export function editionIdentity(items){return `sha256-v1:${sha256(JSON.stringify(['written-paper-bank-v1',...items.map(item=>authoredTuple(item,item.authored))]))}`;}
export function fingerprint(editionId,ref,authored){return `sha256-v1:${sha256(JSON.stringify(['written-paper-item-v1',editionId,...authoredTuple(ref,authored)]))}`;}
export function sameAuthored(a,b){return validAuthored(a)&&validAuthored(b)&&authoredKeys.every(key=>key==='rubric'?a.rubric.every((value,index)=>value===b.rubric[index]):a[key]===b[key]);}
export function exactObjectKeys(object,keys){return exactKeys(object,keys);}
