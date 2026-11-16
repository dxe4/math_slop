const visualMathBase = () => (globalThis.document?.documentElement?.getAttribute('data-euler-base-path') ?? '/').slice(0, -1);
const { default: katex } = await import(typeof document === 'undefined' ? '../../app/vendor/katex/katex.mjs' : new URL("./_euler/vendor/katex/katex.mjs", import.meta.url).href);
import { proseTokens } from './prose-tokens.js';
import { attachVisualPunctuation, hasMathRenderError } from './math-punctuation.js';

const mathOptions={throwOnError:false,trust:false,output:'htmlAndMathml',strict:'ignore'};
const inlineMath=/\$([^$\n]+)\$/g;

// Use text nodes for prose. KaTeX receives only the delimited TeX, with trust disabled.
export function visualProse(tag,value,className){
  const element=document.createElement(tag);
  if(className)element.className=className;
  for(const token of proseTokens(value,{inlineCode:false})){
    if(token.type==='text'){element.append(document.createTextNode(token.value));continue;}
    const math=document.createElement('span');
    math.className='inline-math';
    katex.render(token.value,math,mathOptions);
    const phrase=document.createElement('span');phrase.className='math-phrase';
    if(token.punctuation){
      const renderError=hasMathRenderError(math.innerHTML);
      if(renderError)math.classList.add('math-flow-error-fallback');
      const decorated=attachVisualPunctuation(math.innerHTML,token.punctuation,renderError);
      if(decorated.attached)math.innerHTML=decorated.markup;
      const punctuation=document.createElement('span');punctuation.className='math-punctuation';punctuation.textContent=token.punctuation;
      if(decorated.attached)punctuation.classList.add('math-flow-original-punctuation');
      phrase.append(math,punctuation);element.append(phrase);
    } else {phrase.append(math);element.append(phrase);}
  }
  return element;
}

const decodeEntities=value=>value.replace(/&(?:amp|lt|gt|quot|#39|#(?:x[0-9a-f]+|[0-9]+));/gi,entity=>{
  const named={'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'"};
  if(named[entity.toLowerCase()])return named[entity.toLowerCase()];
  const numeric=entity.match(/^&#(x[0-9a-f]+|[0-9]+);$/i);
  return numeric?String.fromCodePoint(numeric[1][0].toLowerCase()==='x'?parseInt(numeric[1].slice(1),16):Number(numeric[1])):entity;
});

function mathmlPlain(tex){
  const html=katex.renderToString(tex,mathOptions);
  const start=html.indexOf('<math'),end=html.indexOf('</math>',start);
  if(start<0||end<0)return tex;
  const root={tag:'root',children:[]},stack=[root];
  for(const token of html.slice(start,end+7).match(/<[^>]+>|[^<]+/g)||[]){
    if(token.startsWith('</')){stack.pop();continue;}
    if(token.startsWith('<')){
      const tag=token.match(/^<([a-z]+)/i)?.[1];
      if(!tag)continue;
      const item={tag,children:[]};stack.at(-1).children.push(item);
      if(!token.endsWith('/>'))stack.push(item);
    }else stack.at(-1).children.push(decodeEntities(token));
  }
  const speak=item=>{
    if(typeof item==='string')return item;
    if(item.tag==='annotation'||item.tag==='mspace')return '';
    const parts=item.children.map(speak).filter(Boolean);
    if(item.tag==='mfrac')return `(${parts[0]} over ${parts[1]})`;
    if(item.tag==='msup'){
      const exponent=parts[1].replace(/\s/g,'');
      if(/^[′″‴]+$/.test(exponent))return `${parts[0]} ${[...exponent].map(mark=>({'′':'prime','″':'double prime','‴':'triple prime'})[mark]).join(' ')}`;
      return `${parts[0]} to the power of ${parts[1]}`;
    }
    if(item.tag==='msub')return `${parts[0]} subscript ${parts[1]}`;
    if(item.tag==='msubsup')return `${parts[0]} subscript ${parts[1]} to the power of ${parts[2]}`;
    if(item.tag==='msqrt')return `square root of ${parts.join(' ')}`;
    if(item.tag==='mroot')return `${parts[1]} root of ${parts[0]}`;
    return parts.join(' ');
  };
  return speak(root).replace(/\s+/g,' ').replace(/\s+([,.;:!?])/g,'$1').trim();
}

// SVG descriptions and other plain-text contexts must not expose TeX delimiters.
export function plainVisualText(value){
  return String(value).replace(inlineMath,(_,tex)=>mathmlPlain(tex));
}
