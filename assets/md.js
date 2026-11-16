// Markdown + LaTeX rendering for math_slop. No build step: markdown-it and
// KaTeX are plain vendored files loaded by index.html (globals markdownit, katex).
//
// Authoring rules (see README.md):
//   inline maths  $...$  or \(...\)      display maths  $$...$$  or \[...\]
//   links to other pages are relative .md paths: [Sequences](03-sequences.md#sec-limits)
//   images are relative to the .md file: ![Alt](figures/plot.png)
//   headings may carry an id: ## Limits {#sec-limits}
//   fenced blocks with a registered language (mathviz, notebook, ...) become
//   interactive via assets/plugins/*.js; every other fence is shown as code.

// Shared KaTeX macros for commands the corpus uses but KaTeX lacks.
const MACROS = { '\\lcm': '\\operatorname{lcm}' };
// mathtools' small delimited matrices, which KaTeX lacks, as their plain equivalents.
const SMALL = { p: ['(', ')'], b: ['[', ']'], B: ['\\{', '\\}'], v: ['|', '|'], V: ['\\|', '\\|'] };
const normalise = tex => tex.replace(/\\(begin|end)\{([pbBvV])smallmatrix\}/g, (all, edge, kind) => edge === 'begin' ? '\\left' + SMALL[kind][0] + '\\begin{smallmatrix}' : '\\end{smallmatrix}\\right' + SMALL[kind][1]);
const renderMath = (tex, display) => {
  try { return katex.renderToString(normalise(tex), { displayMode: display, throwOnError: false, strict: 'ignore', output: 'html', trust: false, macros: { ...MACROS } }); }
  catch { return '<code class="math-error">' + escapeHtml(tex) + '</code>'; }
};
export const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function mathPlugin(md) {
  // Inline: $$..$$ (display), $..$, \(..\), \[..\]
  md.inline.ruler.before('escape', 'math_inline', (state, silent) => {
    const src = state.src, pos = state.pos, max = state.posMax;
    let open, close, display;
    if (src.startsWith('$$', pos)) { open = '$$'; close = '$$'; display = true; }
    else if (src[pos] === '$') { open = '$'; close = '$'; display = false; }
    else if (src.startsWith('\\(', pos)) { open = '\\('; close = '\\)'; display = false; }
    else if (src.startsWith('\\[', pos)) { open = '\\['; close = '\\]'; display = true; }
    else return false;
    const start = pos + open.length;
    if (open === '$' && (start >= max || /\s/.test(src[start]))) return false;
    let end = start;
    for (;;) {
      end = src.indexOf(close, end);
      if (end < 0 || end >= max) return false;
      if (src[end - 1] === '\\' && open === '$') { end += 1; continue; }
      // A space before the closing $ is allowed only when the span is clearly TeX
      // ("$\delta $"), so prices like "$5 and $10" stay text.
      if (open === '$' && (/\s/.test(src[end - 1]) && !/\\[A-Za-z]|[\^_{]/.test(src.slice(start, end)) || /\d/.test(src[end + 1] ?? ''))) { end += 1; continue; }
      break;
    }
    if (end === start) return false;
    if (!silent) { const token = state.push('math', 'math', 0); token.content = src.slice(start, end); token.meta = { display }; }
    state.pos = end + close.length;
    return true;
  });
  // Block: a paragraph that starts with $$ or \[ and ends with $$ or \]
  md.block.ruler.before('table', 'math_block', (state, startLine, endLine, silent) => {
    if (state.sCount[startLine] - state.blkIndent >= 4) return false; // indented code
    const first = state.src.slice(state.bMarks[startLine] + state.tShift[startLine], state.eMarks[startLine]);
    const opener = first.startsWith('$$') ? '$$' : first.startsWith('\\[') ? '\\[' : null;
    if (!opener) return false;
    const closer = opener === '$$' ? '$$' : '\\]';
    let line = startLine, body = first.slice(2), found = false;
    // Text after the closing delimiter on the same line ("$$x$$ The next…",
    // "$$…$$ ∎") is not a display block; the inline rule renders it instead.
    if (body.includes(closer) && !body.trimEnd().endsWith(closer)) return false;
    if (body.trimEnd().endsWith(closer) && body.trim().length >= closer.length) { body = body.trimEnd().slice(0, -closer.length); found = true; }
    while (!found && ++line < endLine) {
      const text = state.src.slice(state.bMarks[line] + state.tShift[line], state.eMarks[line]);
      if (text.trimEnd().endsWith(closer)) { body += '\n' + text.trimEnd().slice(0, -closer.length); found = true; }
      else if (text.includes(closer)) return false;
      else body += '\n' + text;
    }
    if (!found) return false;
    if (silent) return true;
    const token = state.push('math', 'math', 0);
    token.content = body.trim(); token.meta = { display: true }; token.block = true; token.map = [startLine, line + 1];
    state.line = line + 1;
    return true;
  }, { alt: ['paragraph', 'reference', 'blockquote', 'list'] });
  md.renderer.rules.math = (tokens, index) => {
    const { content, meta, block } = tokens[index];
    const html = renderMath(content, meta.display);
    return meta.display ? (block ? '<div class="math-display">' + html + '</div>\n' : '<span class="math-display">' + html + '</span>') : html;
  };
}

// "## Title {#id}" sets the heading id; other headings get a slug id.
function headingIds(md) {
  md.core.ruler.push('heading_ids', state => {
    const used = new Set();
    for (let i = 0; i < state.tokens.length; i++) {
      const token = state.tokens[i];
      if (token.type !== 'heading_open') continue;
      const inline = state.tokens[i + 1];
      let id = null;
      const match = /\s*\{#([A-Za-z][\w:.-]*)(?:\s[^}]*)?\}\s*$/.exec(inline.content);
      if (match) {
        id = match[1];
        inline.content = inline.content.slice(0, match.index);
        const last = inline.children?.at(-1);
        if (last?.type === 'text') last.content = last.content.replace(/\s*\{#[^}]*\}\s*$/, '');
      }
      id ||= inline.content.toLowerCase().replace(/[$\\{}^_]/g, '').replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '') || 'section';
      let unique = id, n = 2;
      while (used.has(unique)) unique = id + '-' + n++;
      used.add(unique);
      token.attrSet('id', unique);
    }
  });
}

/** One configured renderer. `base` is the .md file's folder, for images and links. */
export function createRenderer() {
  const md = markdownit({ html: true, linkify: false, typographer: false });
  md.use(mathPlugin).use(headingIds);
  const fence = md.renderer.rules.fence;
  md.renderer.rules.fence = (tokens, index, options, env, self) => {
    const token = tokens[index], lang = token.info.trim().split(/\s+/)[0];
    if (env.plugins?.has(lang)) return '<div class="fence-plugin" data-fence="' + escapeHtml(lang) + '" data-source="' + escapeHtml(token.content) + '"><pre><code>' + escapeHtml(token.content) + '</code></pre></div>\n';
    return fence(tokens, index, options, env, self);
  };
  return {
    render(text, { base = '', plugins = new Set() } = {}) {
      const body = text.replace(/^﻿?---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
      return md.render(body, { base, plugins });
    },
  };
}
