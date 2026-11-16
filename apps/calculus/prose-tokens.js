// Keep authored text intact while giving both renderers the same math/code boundaries.
export function* proseTokens(value,{inlineCode=true}={}) {
  const source=String(value);
  const pattern=inlineCode?/\$([^$\n]+)\$|`([^`\n]+)`/g:/\$([^$\n]+)\$/g;
  let last=0;
  for(const match of source.matchAll(pattern)) {
    if(match.index>last)yield {type:'text',value:source.slice(last,match.index)};
    last=match.index+match[0].length;
    if(match[1]!==undefined) {
      const punctuation=source.slice(last).match(/^[.,;:!?…)\]}'"’”]+/u)?.[0]||'';
      last+=punctuation.length;
      yield {type:'math',value:match[1],punctuation};
    } else yield {type:'code',value:match[2]};
  }
  if(last<source.length)yield {type:'text',value:source.slice(last)};
}
