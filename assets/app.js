// math_slop viewer: a static single-page reader for GitHub Pages.
// Routes live in the URL hash so any static host (or file server) works:
//   #/                     home            #/books, #/articles, #/labs, #/courses, #/problems
//   #/books/<book>         book overview   #/books/<book>/<chapter>   chapter (books/<book>/<chapter>.md)
//   #/<path>               any Markdown file at <path>.md (articles/x, problems/y, ...)
//   #/fields, #/fields/<id>, #/search?q=, #/random, #/links, #/courses/<id>
// Content is plain files: catalog/*.json for listings, *.md for pages.
import { createRenderer, escapeHtml as e } from './md.js';

const main = document.getElementById('main');
const renderer = createRenderer();
const SECTIONS = [
  { id: 'courses', title: 'Courses', blurb: 'Follow a guided sequence.' },
  { id: 'books', title: 'Books', blurb: 'Read a complete text.' },
  { id: 'articles', title: 'Articles', blurb: 'Explore one idea.' },
  { id: 'problems', title: 'Problems', blurb: 'Practise with worked solutions.' },
  { id: 'labs', title: 'Labs', blurb: 'Investigate an interactive model.' },
];
// Interactive extensions. Each module exports enhance(root); it is imported
// only when its selector appears on a rendered page.
const PLUGINS = [
  { selector: '.fence-plugin[data-fence="mathviz"], .fence-plugin[data-fence="notebook"], .fence-plugin[data-fence="exercise"], .fence-plugin[data-fence="visual-story"], .fence-plugin[data-fence="investigation"]', fences: ['mathviz', 'notebook', 'exercise', 'visual-story', 'investigation'], module: './plugins/lucent.js' },
  { selector: '[data-lab]', fences: [], module: './plugins/mcmc-labs.js' },
  { selector: '.fence-plugin[data-fence="answer"]', fences: ['answer'], module: './plugins/practice.js' },
];
const FENCES = new Set(PLUGINS.flatMap(plugin => plugin.fences));

// ---------- data ----------
const cache = new Map();
function getJSON(path) {
  if (!cache.has(path)) cache.set(path, fetch(path).then(r => r.ok ? r.json() : null).catch(() => null));
  return cache.get(path);
}
async function catalog(kind) {
  const data = await getJSON('catalog/' + kind + '.json');
  return data?.[kind] ?? [];
}
const fieldsData = () => getJSON('catalog/fields.json');
async function allEntries() {
  const lists = await Promise.all(SECTIONS.map(async section => (await catalog(section.id)).map(entry => ({ ...entry, section: section.id }))));
  return lists.flat();
}
/** The route (hash) for a catalogue entry or a site path. */
function hrefFor(entry, section) {
  if (entry.url) return entry.url;
  if (section === 'books') return '#/books/' + entry.id;
  if (section === 'courses') return '#/courses/' + entry.id;
  if (entry.file) return '#/' + entry.file.replace(/\.md$/, '');
  return '#/' + section + '/' + entry.id;
}

// ---------- small views ----------
const levelTitle = (levels, id) => levels.find(level => level.id === id)?.title ?? id;
function badges(entry, levels) {
  const level = entry.level ? '<span class="badge level" data-level="' + e(entry.level) + '">' + e(entry.levelTo && entry.levelTo !== entry.level ? levelTitle(levels, entry.level) + ' – ' + levelTitle(levels, entry.levelTo) : levelTitle(levels, entry.level)) + '</span>' : '';
  const status = entry.status ? '<span class="badge status" data-status="' + e(entry.status) + '">' + e(entry.status[0].toUpperCase() + entry.status.slice(1)) + '</span>' : '';
  return level + status;
}
function card(entry, section, levels) {
  const meta = [entry.chapters ? entry.chapters.length + ' chapters' : '', entry.steps ? entry.steps.length + ' steps' : '', entry.minutes ? Math.round(entry.minutes) + ' min' : ''].filter(Boolean).join(' · ');
  return '<a class="card" href="' + e(hrefFor(entry, section)) + '"><span class="card-kicker">' + e(entry.role ?? (entry.kind === 'set' ? 'Problem set' : entry.difficulty ? entry.difficulty[0].toUpperCase() + entry.difficulty.slice(1) : '')) + '</span><strong>' + e(entry.title) + '</strong>'
    + (entry.summary ? '<span class="card-summary">' + e(entry.summary) + '</span>' : '') + '<span class="card-foot">' + badges(entry, levels) + (meta ? '<span class="card-meta">' + e(meta) + '</span>' : '') + '</span></a>';
}
/** Download buttons for an entry's `downloads: [{ label, file }]` (PDFs, data). */
const downloads = entry => {
  const rows = entry.downloads ?? [], earlier = rows.filter(d => /^Earlier|^Later/.test(d.label)), main = rows.filter(d => !earlier.includes(d));
  const button = d => '<a class="button" href="' + e(d.file) + '" download>' + e(d.label) + ' ↓</a>';
  return main.map(button).join('') + (earlier.length ? '<details class="more-downloads"><summary>Other editions (' + earlier.length + ')</summary><ul>' + earlier.map(d => '<li><a href="' + e(d.file) + '" download>' + e(d.label) + '</a></li>').join('') + '</ul></details>' : '');
};
function setPage(title, html, { wide = false } = {}) {
  document.title = title ? title + ' · math_slop' : 'math_slop';
  main.className = wide ? 'page wide' : 'page';
  main.innerHTML = html;
  window.scrollTo(0, 0);
  for (const link of document.querySelectorAll('.site-nav a')) link.toggleAttribute('aria-current', location.hash.startsWith(link.getAttribute('href')) && link.getAttribute('href') !== '#/');
}

// ---------- pages ----------
async function home() {
  const [entries, fields] = await Promise.all([allEntries(), fieldsData()]);
  const count = id => entries.filter(entry => entry.section === id).length;
  const tiles = SECTIONS.map(section => '<a class="tile" href="#/' + section.id + '"><strong>' + section.title + '</strong><span>' + section.blurb + '</span><em>' + count(section.id).toLocaleString() + ' ' + section.title.toLowerCase() + '</em></a>').join('');
  const branches = (fields?.branches ?? []).map(branch => '<a class="pill" data-tone="' + e(branch.tone) + '" href="#/fields?branch=' + e(branch.id) + '"><span class="glyphs">' + branch.fields.slice(0, 3).map(field => e(field.glyph)).join(' ') + '</span>' + e(branch.title) + '</a>').join('');
  setPage('', '<section class="hero"><p class="eyebrow">An open mathematics library</p><h1>Free mathematics from school to research.</h1><p class="lead">Courses, books, articles, problems and labs — plain files you can read anywhere.</p>'
    + '<form class="hero-search" action="#/search"><input name="q" type="search" placeholder="Search limits, probability, proof…" aria-label="Search"><button>Search</button></form></section>'
    + '<section><h2>Explore the library</h2><div class="tiles">' + tiles + '</div></section>'
    + '<section><div class="row"><h2>Pick a field</h2><a href="#/fields">Open the field explorer →</a></div><div class="pills">' + branches + '</div></section>'
    + '<section class="split"><div class="panel"><h2>Feeling curious?</h2><p>Let chance choose your next piece of mathematics.</p><div class="buttons"><a class="button primary" href="#/random">Surprise me</a>' + SECTIONS.map(section => '<a class="button" href="#/random?section=' + section.id + '">' + section.title.slice(0, -1) + '</a>').join('') + '</div></div>'
    + '<div class="panel"><h2>Beyond this site</h2><p>Trusted places to look things up and compute.</p><p><a href="#/links">Mathematics on the web →</a></p></div></section>', { wide: true });
  main.querySelector('.hero-search').addEventListener('submit', event => { event.preventDefault(); location.hash = '#/search?q=' + encodeURIComponent(new FormData(event.target).get('q')); });
}

async function listPage(section, params) {
  const [rows, fields] = await Promise.all([catalog(section.id), fieldsData()]);
  const levels = fields?.levels ?? [];
  const allFields = (fields?.branches ?? []).flatMap(branch => branch.fields);
  const difficulties = [...new Set(rows.map(row => row.difficulty).filter(Boolean))].sort((a, b) => ['easy', 'medium', 'hard'].indexOf(a) - ['easy', 'medium', 'hard'].indexOf(b));
  const option = (value, label, current) => '<option value="' + e(value) + '"' + (value === current ? ' selected' : '') + '>' + e(label) + '</option>';
  setPage(section.title, '<header class="page-head"><h1>' + section.title + '</h1><p class="lead">' + section.blurb + '</p></header>'
    + '<form class="filters"><input name="q" type="search" placeholder="Filter ' + section.title.toLowerCase() + '…" value="' + e(params.get('q') ?? '') + '" aria-label="Filter">'
    + '<select name="field" aria-label="Field">' + option('', 'Any field', params.get('field') ?? '') + allFields.map(field => option(field.id, field.title, params.get('field') ?? '')).join('') + '</select>'
    + '<select name="level" aria-label="Level">' + option('', 'Any level', params.get('level') ?? '') + levels.map(level => option(level.id, level.id + ' · ' + level.title, params.get('level') ?? '')).join('') + '</select>'
    + (difficulties.length ? '<select name="difficulty" aria-label="Difficulty">' + option('', 'Any difficulty', params.get('difficulty') ?? '') + difficulties.map(d => option(d, d[0].toUpperCase() + d.slice(1), params.get('difficulty') ?? '')).join('') + '</select>' : '') + '</form>'
    + '<p class="count" role="status"></p><div class="cards"></div><button class="button more" hidden>Show more</button>', { wide: true });
  const form = main.querySelector('.filters'), cards = main.querySelector('.cards'), more = main.querySelector('.more'), status = main.querySelector('.count');
  let shown = 48;
  const apply = () => {
    const query = form.q.value.trim().toLowerCase().split(/\s+/).filter(Boolean), field = form.field.value, level = form.level.value; const difficulty = form.difficulty?.value ?? '';
    const matches = rows.filter(row => (!field || row.fields?.includes(field)) && (!difficulty || row.difficulty === difficulty) && (!level || row.level <= level && (row.levelTo ?? row.level) >= level)
      && query.every(word => (row.title + ' ' + (row.summary ?? '')).toLowerCase().includes(word)));
    status.textContent = matches.length.toLocaleString() + ' ' + section.title.toLowerCase();
    cards.innerHTML = matches.slice(0, shown).map(row => card(row, section.id, levels)).join('') || '<p class="empty">Nothing matches these filters.</p>';
    more.hidden = matches.length <= shown;
    const next = new URLSearchParams(); for (const [k, v] of new FormData(form)) if (v) next.set(k, v);
    history.replaceState(null, '', '#/' + section.id + (next.size ? '?' + next : ''));
  };
  form.addEventListener('input', () => { shown = 48; apply(); });
  form.addEventListener('submit', event => event.preventDefault());
  more.addEventListener('click', () => { shown += 48; apply(); });
  apply();
}

async function bookPage(bookId) {
  const [books, fields] = await Promise.all([catalog('books'), fieldsData()]);
  const book = books.find(row => row.id === bookId);
  if (!book) return notFound();
  if (book.url) { location.replace(book.url); return; }
  let group = null;
  const items = book.chapters.map((chapter, index) => {
    const head = chapter.group && chapter.group !== group ? (group = chapter.group, '</ol><h3>' + e(chapter.group) + '</h3><ol>') : '';
    return head + '<li><a href="#/books/' + e(book.id) + '/' + e(chapter.id) + '"><span class="num">' + (index + 1) + '</span><span>' + e(chapter.title) + '</span>' + (chapter.minutes ? '<small>' + Math.round(chapter.minutes) + ' min</small>' : '') + '</a></li>';
  }).join('');
  const first = book.chapters[0];
  setPage(book.title, '<nav class="crumbs"><a href="#/books">Books</a></nav><header class="page-head"><p class="eyebrow">' + e(book.role ?? 'Book') + '</p><h1>' + e(book.title) + '</h1>'
    + (book.summary ? '<p class="lead">' + e(book.summary) + '</p>' : '') + '<p>' + badges(book, fields?.levels ?? []) + '</p>'
    + '<p class="buttons">' + (first ? '<a class="button primary" href="#/books/' + e(book.id) + '/' + e(first.id) + '">Start reading</a>' : '') + downloads(book) + '</p></header>'
    + '<section class="contents"><h2>Contents</h2><ol>' + items + '</ol></section>');
}

async function reader(path, anchor) {
  const file = path + '.md';
  const response = await fetch(file).catch(() => null);
  if (!response?.ok) return notFound();
  const text = await response.text();
  const base = file.slice(0, file.lastIndexOf('/') + 1);
  const html = renderer.render(text, { base, plugins: FENCES });
  // Book context: contents sidebar and previous/next.
  const bookMatch = /^books\/([^/]+)\/(.+)$/.exec(path);
  let side = '', pager = '', title = (/^#\s+(.+)$/m.exec(text.replace(/^---[\s\S]*?\n---\n/, ''))?.[1] ?? path).replace(/\s*\{#.*\}\s*$/, '');
  if (bookMatch) {
    const book = (await catalog('books')).find(row => row.id === bookMatch[1]);
    const index = book?.chapters.findIndex(chapter => chapter.id === bookMatch[2]) ?? -1;
    if (book) {
      side = '<aside class="toc"><a class="toc-book" href="#/books/' + e(book.id) + '">' + e(book.title) + '</a><ol>' + book.chapters.map((chapter, i) => '<li><a href="#/books/' + e(book.id) + '/' + e(chapter.id) + '"' + (i === index ? ' aria-current="page"' : '') + '>' + e(chapter.title) + '</a></li>').join('') + '</ol></aside>';
      const prev = book.chapters[index - 1], next = book.chapters[index + 1];
      pager = '<nav class="pager">' + (prev ? '<a href="#/books/' + e(book.id) + '/' + e(prev.id) + '"><small>Previous</small>' + e(prev.title) + '</a>' : '<span></span>') + (next ? '<a class="next" href="#/books/' + e(book.id) + '/' + e(next.id) + '"><small>Next</small>' + e(next.title) + '</a>' : '') + '</nav>';
      if (index >= 0) title = book.chapters[index].title;
    }
  }
  // Downloads (PDFs, data) recorded on the catalogue entry for this page.
  let extras = '';
  if (!bookMatch) {
    const lists = await Promise.all(['articles', 'problems', 'labs'].map(catalog));
    const entry = lists.flat().find(row => row.file === file);
    if (entry?.downloads?.length) extras = '<p class="buttons page-downloads">' + downloads(entry) + '</p>';
  }
  setPage(title, (side ? '<div class="reading-layout">' + side : '<div class="reading-layout single">') + '<article class="prose">' + extras + html + pager + '</article></div>', { wide: Boolean(side) });
  fixLinks(main.querySelector('.prose'), base);
  await enhance(main);
  if (anchor) document.getElementById(anchor)?.scrollIntoView();
}

/** Relative images resolve against the .md file; relative .md links become routes. */
function fixLinks(root, base) {
  const resolve = target => new URL(target, 'https://x/' + base).pathname.slice(1);
  for (const img of root.querySelectorAll('img[src]')) {
    const src = img.getAttribute('src');
    if (!/^(?:[a-z]+:|\/|#|data:)/i.test(src)) img.src = resolve(src);
    img.loading = 'lazy';
  }
  for (const a of root.querySelectorAll('a[href]')) {
    const href = a.getAttribute('href');
    if (/^[a-z]+:/i.test(href)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; continue; }
    if (href.startsWith('#/')) continue;
    if (href.startsWith('#')) { a.addEventListener('click', event => { event.preventDefault(); document.getElementById(decodeURIComponent(href.slice(1)))?.scrollIntoView({ behavior: 'smooth' }); }); continue; }
    const [target, hash] = href.split('#');
    if (/\.md$/.test(target)) a.setAttribute('href', '#/' + resolve(target).replace(/\.md$/, '') + (hash ? '@' + hash : ''));
    else if (target) a.setAttribute('href', resolve(target) + (hash ? '#' + hash : ''));
  }
}

async function enhance(root) {
  for (const plugin of PLUGINS) {
    if (!root.querySelector(plugin.selector)) continue;
    try { (await import(plugin.module)).enhance(root); } catch (error) { console.warn('Plugin unavailable:', plugin.module, error.message); }
  }
}

async function coursePage(courseId) {
  const [courses, fields] = await Promise.all([catalog('courses'), fieldsData()]);
  const course = courses.find(row => row.id === courseId);
  if (!course) return notFound();
  const steps = (course.steps ?? []).map((step, index) => '<li><a href="' + e(step.route ?? step.url) + '"><span class="num">' + (index + 1) + '</span><span>' + e(step.title) + (step.note ? '<small>' + e(step.note) + '</small>' : '') + '</span></a></li>').join('');
  setPage(course.title, '<nav class="crumbs"><a href="#/courses">Courses</a></nav><header class="page-head"><p class="eyebrow">Course</p><h1>' + e(course.title) + '</h1>' + (course.summary ? '<p class="lead">' + e(course.summary) + '</p>' : '')
    + '<p>' + badges(course, fields?.levels ?? []) + '</p>' + (course.downloads ? '<p class="buttons">' + downloads(course) + '</p>' : '') + '</header><section class="contents"><h2>Steps</h2><ol>' + steps + '</ol></section>');
}

async function fieldsPage(params) {
  const [fields, entries] = await Promise.all([fieldsData(), allEntries()]);
  const levels = fields.levels;
  const coverage = id => { const rows = entries.filter(entry => entry.fields?.includes(id)); return { total: rows.length, levels: levels.map(level => rows.some(row => row.level <= level.id && (row.levelTo ?? row.level) >= level.id)) }; };
  const branches = fields.branches.map(branch => '<section class="branch" id="branch-' + e(branch.id) + '" data-tone="' + e(branch.tone) + '"><h2>' + e(branch.title) + '</h2><p>' + e(branch.blurb) + '</p><div class="field-grid">'
    + branch.fields.map(field => { const c = coverage(field.id); return '<a class="field-tile" data-tone="' + e(branch.tone) + '" href="#/fields/' + e(field.id) + '"><span class="glyph">' + e(field.glyph) + '</span><span><strong>' + e(field.title) + '</strong><small>' + e(field.summary) + '</small><span class="bars">' + c.levels.map(on => '<i' + (on ? ' class="on"' : '') + '></i>').join('') + '</span><small>' + c.total.toLocaleString() + ' resources</small></span></a>'; }).join('') + '</div></section>').join('');
  setPage('Field explorer', '<header class="page-head"><p class="eyebrow">Field explorer</p><h1>Explore the fields of mathematics</h1><p class="lead">Thirty-six fields in eight branches. Bars show levels L0 (school) to L5 (graduate) with material.</p></header>' + branches, { wide: true });
  const branch = params.get('branch'); if (branch) document.getElementById('branch-' + branch)?.scrollIntoView();
}

async function fieldPage(fieldId) {
  const [fields, entries] = await Promise.all([fieldsData(), allEntries()]);
  const branch = fields.branches.find(row => row.fields.some(field => field.id === fieldId));
  const field = branch?.fields.find(row => row.id === fieldId);
  if (!field) return notFound();
  const groups = SECTIONS.map(section => ({ section, rows: entries.filter(entry => entry.section === section.id && entry.fields?.includes(field.id)) })).filter(group => group.rows.length);
  setPage(field.title, '<nav class="crumbs"><a href="#/fields">Fields</a></nav><header class="page-head field-head" data-tone="' + e(branch.tone) + '"><span class="glyph">' + e(field.glyph) + '</span><div><p class="eyebrow">' + e(branch.title) + '</p><h1>' + e(field.title) + '</h1><p class="lead">' + e(field.summary) + '</p>'
    + '<p class="outside"><a href="' + e(field.wiki) + '">Wikipedia ↗</a> <a href="' + e(field.mathworld) + '">MathWorld ↗</a> <a href="https://mathshistory.st-andrews.ac.uk/HistTopics/">MacTutor ↗</a></p></div></header>'
    + groups.map(group => '<section><div class="row"><h2>' + group.section.title + ' (' + group.rows.length + ')</h2><a href="#/' + group.section.id + '?field=' + e(field.id) + '">See all →</a></div><div class="cards">' + group.rows.slice(0, 6).map(row => card(row, group.section.id, fields.levels)).join('') + '</div></section>').join(''), { wide: true });
  for (const a of main.querySelectorAll('.outside a')) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
}

async function searchPage(params) {
  const q = (params.get('q') ?? '').trim();
  const [entries, fields] = await Promise.all([allEntries(), fieldsData()]);
  const words = q.toLowerCase().split(/\s+/).filter(Boolean);
  const books = await catalog('books');
  const chapters = books.flatMap(book => (book.chapters ?? []).map(chapter => ({ ...chapter, book })));
  const hits = words.length ? entries.filter(entry => words.every(word => (entry.title + ' ' + (entry.summary ?? '')).toLowerCase().includes(word))) : [];
  const chapterHits = words.length ? chapters.filter(chapter => words.every(word => chapter.title.toLowerCase().includes(word))).slice(0, 30) : [];
  setPage('Search', '<header class="page-head"><h1>Search</h1><form class="filters"><input name="q" type="search" value="' + e(q) + '" placeholder="Search titles and summaries" aria-label="Search"></form></header>'
    + (q ? '<p class="count">' + hits.length + ' results' + (chapterHits.length ? ', ' + chapterHits.length + ' chapters' : '') + '</p>' : '')
    + '<div class="cards">' + hits.slice(0, 120).map(entry => card(entry, entry.section, fields.levels)).join('') + '</div>'
    + (chapterHits.length ? '<h2>Chapters</h2><ul class="chapter-hits">' + chapterHits.map(chapter => '<li><a href="#/books/' + e(chapter.book.id) + '/' + e(chapter.id) + '">' + e(chapter.title) + '</a> <small>' + e(chapter.book.title) + '</small></li>').join('') + '</ul>' : ''), { wide: true });
  main.querySelector('form').addEventListener('submit', event => { event.preventDefault(); location.hash = '#/search?q=' + encodeURIComponent(event.target.q.value); });
}

async function randomPage(params) {
  const wanted = SECTIONS.some(section => section.id === params.get('section')) ? [params.get('section')] : SECTIONS.map(section => section.id).sort(() => Math.random() - 0.5);
  for (const id of wanted) {
    const rows = await catalog(id), finished = rows.filter(row => row.status && row.status !== 'outline');
    const pool = finished.length ? finished : rows;
    if (pool.length) { location.replace(hrefFor(pool[Math.floor(Math.random() * pool.length)], id)); return; }
  }
  setPage('Surprise me', '<h1>Nothing to choose from yet</h1>');
}

async function linksPage() {
  const data = await getJSON('catalog/links.json');
  setPage('Mathematics on the web', '<header class="page-head"><p class="eyebrow">Beyond this site</p><h1>Mathematics on the web</h1><p class="lead">Trusted places to look things up, compute, read history and find more problems.</p></header>'
    + (data?.groups ?? []).map(group => '<section><h2>' + e(group.title) + '</h2><p>' + e(group.summary) + '</p><div class="cards">' + group.links.map(link => '<a class="card" href="' + e(link.href) + '" target="_blank" rel="noopener noreferrer"><strong>' + e(link.title) + ' ↗</strong><span class="card-kicker">' + e(new URL(link.href).hostname.replace(/^www\./, '')) + '</span><span class="card-summary">' + e(link.note) + '</span></a>').join('') + '</div></section>').join(''), { wide: true });
}

function notFound() { setPage('Not found', '<h1>Page not found</h1><p>This address is not part of the library. <a href="#/">Go home</a> or <a href="#/search">search</a>.</p>'); }

// ---------- router ----------
async function route() {
  const raw = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
  const [pathPart, query = ''] = raw.split('?');
  const [path, anchor] = pathPart.split('@');
  const params = new URLSearchParams(query);
  const parts = path.split('/').filter(Boolean);
  const section = SECTIONS.find(row => row.id === parts[0]);
  try {
    if (!parts.length) return await home();
    if (section && parts.length === 1) return await listPage(section, params);
    if (parts[0] === 'books' && parts.length === 2) return await bookPage(parts[1]);
    if (parts[0] === 'courses' && parts.length === 2) return await coursePage(parts[1]);
    if (parts[0] === 'fields') return parts[1] ? await fieldPage(parts[1]) : await fieldsPage(params);
    if (parts[0] === 'search') return await searchPage(params);
    if (parts[0] === 'random') return await randomPage(params);
    if (parts[0] === 'links') return await linksPage();
    return await reader(parts.join('/'), anchor);
  } catch (error) {
    console.error(error);
    setPage('Error', '<h1>Something went wrong</h1><p>' + e(error.message) + '</p>');
  }
}
addEventListener('hashchange', route);
route();
