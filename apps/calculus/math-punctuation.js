const eulerBase = () => (globalThis.document?.documentElement?.getAttribute('data-euler-base-path') ?? '/').slice(0, -1);
const eulerHref = value => typeof value === 'string' && value.startsWith('/') && !value.startsWith('//') && !value.startsWith(eulerBase() + '/') ? eulerBase() + value : value;
// Shared by DOM and string renderers. Input markup must come from
// the existing trusted-false KaTeX renderer, not arbitrary authored HTML.
const { default: katex } = await import(typeof document === 'undefined' ? '../../app/vendor/katex/katex.mjs' : eulerHref(new URL("./_euler/vendor/katex/katex.mjs", import.meta.url).href));

export const escapeMathText = value => String(value).replace(/&/g,'&amp;')
  .replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');

const decodeMathText = value => value.replace(/&(?:amp|lt|gt|quot|#39|#(?:x[0-9a-f]+|[0-9]+));/gi, entity => {
  const named={'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'"};
  if(named[entity.toLowerCase()])return named[entity.toLowerCase()];
  const numeric=entity.match(/^&#(x[0-9a-f]+|[0-9]+);$/i);
  return numeric?String.fromCodePoint(numeric[1][0].toLowerCase()==='x'?parseInt(numeric[1].slice(1),16):Number(numeric[1])):entity;
});

export function hasMathRenderError(markup) {
  if (/\bclass=["'][^"']*\bkatex-error\b/i.test(markup)) return true;
  // KaTeX uses the same red MathML mtext for an invalid command and for
  // legitimate red text. Only this rare ambiguous case needs a parse check.
  if (!/<mstyle\b[^>]*\bmathcolor=["']#cc0000["'][^>]*>\s*<mtext>/i.test(markup)) return false;
  const annotation=markup.match(/<annotation\b[^>]*\bencoding=["']application\/x-tex["'][^>]*>([\s\S]*?)<\/annotation>/i);
  if (!annotation) return true;
  try {
    katex.renderToString(decodeMathText(annotation[1]),
      {throwOnError:true,trust:false,output:'htmlAndMathml',strict:'ignore',maxExpand:1000,maxSize:20});
    return false;
  } catch { return true; }
}

export function attachVisualPunctuation(markup, punctuation, renderError) {
  if (!punctuation) return {markup, attached:false};
  if (renderError ?? hasMathRenderError(markup)) return {markup, attached:false};
  // Track complete quoted attributes and element nesting. Inserting before
  // the last closing span with a matching class alone would target nested
  // fraction, radical or SVG content rather than the final direct base.
  const tags=/<\/?([A-Za-z][\w:-]*)\b(?:"[^"]*"|'[^']*'|[^'">])*>/g;
  const stack=[];
  const voidTags=new Set(['br','hr','img','input','meta','link','wbr','area','base','col','embed','param','source','track']);
  let insertion=-1;
  for(const match of markup.matchAll(tags)) {
    const token=match[0],tag=match[1].toLowerCase();
    if(token.startsWith('</')) {
      const frame=stack.pop();
      if(!frame||frame.tag!==tag)return {markup,attached:false};
      if(frame.directBase)insertion=match.index;
    } else {
      const classes=token.match(/\bclass\s*=\s*(?:"([^"]*)"|'([^']*)')/i);
      const classList=(classes?.[1]??classes?.[2]??'').split(/\s+/);
      const parent=stack.at(-1);
      const directBase=tag==='span'&&classList.includes('base')&&parent?.visualLayer===true;
      if(!token.endsWith('/>')&&!voidTags.has(tag))
        stack.push({tag,directBase,visualLayer:tag==='span'&&classList.includes('katex-html')});
    }
  }
  if(stack.length||insertion<0)return {markup,attached:false};
  const copy='<span class="math-flow-visible-punctuation" aria-hidden="true">'+escapeMathText(punctuation)+'</span>';
  return {markup:markup.slice(0,insertion)+copy+markup.slice(insertion),attached:true};
}
