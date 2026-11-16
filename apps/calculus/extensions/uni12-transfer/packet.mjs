// Only these fixed public sources and preparation identities belong to this reader.
const SOURCES = [
  {
    file: 'families/limits-ftc-taylor.json',
    forms: [
      ['U12-LIM-A', 'uniform-limit', '04.2:4|04.3:12,38,39'],
      ['U12-LIM-B', 'uniform-limit', '04.2:5,8|04.3:39'],
      ['U12-FTC-A', 'ftc-point-behavior', '11.2:35'],
      ['U12-FTC-B', 'ftc-point-behavior', '11.2:35|11.4:36'],
      ['U12-TAY-A', 'taylor-error', '17.4:36,37'],
      ['U12-TAY-B', 'taylor-error', '17.4:36,37'],
    ],
  },
  {
    file: 'families/geometry-differentiability.json',
    forms: [
      ['U12-SET-A', 'zero-set-geometry', '21.1:2|21.6:34,35,37'],
      ['U12-SET-B', 'zero-set-geometry', '21.1:2,4|21.6:35,37'],
      ['U12-VEC-A', 'vector-boundary-audit', '25.2:6,9|26.1:4,6|26.5:36,37'],
      ['U12-VEC-B', 'vector-boundary-audit', '25.4:22,23|26.3:15|26.4:17,21|26.5:38'],
      ['U12-DIF-A', 'differentiability', '21.1:2,4|21.5:24'],
      ['U12-DIF-B', 'differentiability', '21.1:2|21.5:26,30'],
    ],
  },
  {
    file: 'families/circulation-numerical-navigation.json',
    forms: [
      ['U12-CIR-A', 'circulation', '25.5:24,29|26.1:4,6'],
      ['U12-CIR-B', 'circulation', '25.5:25,29,30|26.1:4,6'],
      ['U12-NUM-A', 'numerical', '28.1:33|28.5:37,38,39'],
      ['U12-NUM-B', 'numerical', '28.1:33|28.5:38,39'],
      ['U12-NAV-A', 'navigation', '02.1:1'],
      ['U12-NAV-B', 'navigation', '02.4:16,19'],
    ],
  },
];
const FIELDS = ['id', 'family', 'variant', 'title', 'preparation', 'prompt',
  'hypotheses', 'solution', 'criteria', 'boundary', 'changedFrom'];
const FAMILY_LABELS = new Map([
  ['uniform-limit', 'Uniform limits'],
  ['ftc-point-behavior', 'Accumulation and point behavior'],
  ['taylor-error', 'Taylor error'],
  ['zero-set-geometry', 'Zero-set geometry'],
  ['vector-boundary-audit', 'Vector boundary audit'],
  ['differentiability', 'Differentiability'],
  ['circulation', 'Circulation'],
  ['numerical', 'Numerical reasoning'],
  ['navigation', 'Navigation and repair'],
]);
const FORM_IDS = new Set(SOURCES.flatMap(source => source.forms.map(form => form[0])));
const MAX_SOURCE_BYTES = 131072;
const MAX_TEXT_LENGTH = 24000;

function requireCondition(condition) {
  if (!condition) throw new Error('The fixed public packet contract did not match.');
}

function hasExactKeys(value, keys) {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
    && Object.keys(value).length === keys.length
    && keys.every(key => Object.hasOwn(value, key));
}

function isText(value, maximum = MAX_TEXT_LENGTH) {
  return typeof value === 'string' && value.length > 0
    && value.length <= maximum && /\S/u.test(value);
}

function preparationSignature(preparation) {
  requireCondition(Array.isArray(preparation) && preparation.length >= 1 && preparation.length <= 4);
  return preparation.map(entry => {
    requireCondition(hasExactKeys(entry, ['chapterId', 'lesson', 'problems']));
    requireCondition(typeof entry.chapterId === 'string' && /^(02|04|11|17|21|25|26|28)$/.test(entry.chapterId));
    requireCondition(Number.isSafeInteger(entry.lesson) && entry.lesson >= 1 && entry.lesson <= 6);
    requireCondition(Array.isArray(entry.problems) && entry.problems.length >= 1 && entry.problems.length <= 4);
    requireCondition(entry.problems.every(number => Number.isSafeInteger(number) && number >= 1 && number <= 39));
    requireCondition(new Set(entry.problems).size === entry.problems.length);
    return `${entry.chapterId}.${entry.lesson}:${entry.problems.join(',')}`;
  }).join('|');
}

function validateSource(value, source, seen) {
  requireCondition(Array.isArray(value) && value.length === source.forms.length);
  const byId = new Map();
  for (const form of value) {
    requireCondition(hasExactKeys(form, FIELDS));
    const contract = source.forms.find(expected => expected[0] === form.id);
    requireCondition(contract && !seen.has(form.id));
    requireCondition(form.family === contract[1] && form.variant === form.id.slice(-1));
    requireCondition(isText(form.title, 240));
    for (const key of ['prompt', 'hypotheses', 'solution', 'boundary', 'changedFrom']) {
      requireCondition(isText(form[key]));
    }
    requireCondition(Array.isArray(form.criteria) && form.criteria.length === 4
      && form.criteria.every(criterion => isText(criterion, 4000)));
    requireCondition(preparationSignature(form.preparation) === contract[2]);
    seen.add(form.id);
    byId.set(form.id, form);
  }
  return source.forms.map(contract => byId.get(contract[0]));
}

function localUrls() {
  const script = new URL(import.meta.url);
  requireCondition((script.protocol === 'http:' || script.protocol === 'https:')
    && script.pathname.endsWith('/calculus/extensions/uni12-transfer/packet.mjs'));
  const directory = new URL('./', script);
  const reader = new URL('../../index.html', directory);
  requireCondition(reader.origin === script.origin && reader.pathname.endsWith('/calculus/index.html'));
  const sources = SOURCES.map(source => {
    const url = new URL(source.file, directory);
    requireCondition(url.origin === script.origin && url.pathname === directory.pathname + source.file
      && !url.search && !url.hash);
    return url;
  });
  return { reader, sources };
}

async function readSource(url) {
  const response = await fetch(url, { mode: 'same-origin', credentials: 'omit', redirect: 'error' });
  requireCondition(response.ok && response.body);
  const declaredLength = response.headers.get('content-length');
  if (declaredLength !== null) {
    requireCondition(/^\d+$/.test(declaredLength) && Number(declaredLength) <= MAX_SOURCE_BYTES);
  }
  const reader = response.body.getReader();
  const decoder = new TextDecoder('utf-8', { fatal: true });
  let bytes = 0;
  let text = '';
  try {
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      bytes += chunk.value.byteLength;
      requireCondition(bytes <= MAX_SOURCE_BYTES);
      text += decoder.decode(chunk.value, { stream: true });
    }
    text += decoder.decode();
  } catch (error) {
    await reader.cancel().catch(() => {});
    throw error;
  } finally {
    reader.releaseLock();
  }
  return JSON.parse(text);
}

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function link(text, href) {
  const node = element('a', text);
  node.href = href;
  return node;
}

function authoredSection(parent, heading, text) {
  parent.append(element('h3', heading), element('p', text, 'authored-text'));
}

function nativeHref(reader, chapterId, kind, number) {
  const url = new URL(reader);
  url.hash = kind === 'lesson'
    ? `chapter/${chapterId}/lesson/${number}`
    : `chapter/${chapterId}/practice/${Math.ceil(number / 4)}/problem/${number}`;
  return url.href;
}

function formArticle(form, reader) {
  const article = element('article');
  article.id = form.id;
  const title = element('h2', `${form.id} · ${form.title}`);
  title.id = `${form.id}-title`;
  article.setAttribute('aria-labelledby', title.id);
  article.append(title, element('p', `${FAMILY_LABELS.get(form.family)} · Public variant ${form.variant}`, 'form-meta'));
  article.append(element('h3', 'Preparation'));
  const preparation = element('ul');
  for (const entry of form.preparation) {
    const row = element('li');
    row.append(link(`Chapter ${entry.chapterId} · Lesson ${entry.lesson}`,
      nativeHref(reader, entry.chapterId, 'lesson', entry.lesson)));
    for (const number of entry.problems) {
      row.append(element('span', ' · '), link(`Problem ${entry.chapterId}.${number}`,
        nativeHref(reader, entry.chapterId, 'problem', number)));
    }
    preparation.append(row);
  }
  article.append(preparation);
  authoredSection(article, 'Prompt', form.prompt);
  authoredSection(article, 'Hypotheses', form.hypotheses);
  article.append(element('p', `Write your response outside this page with the ID ${form.id}. Keep your first response before opening the public comparison, and name any help or tools used.`, 'response-instruction'));
  const comparison = element('details', undefined, 'comparison');
  comparison.append(element('summary', `${form.id}: open the public model and manual comparison`));
  authoredSection(comparison, 'Public model', form.solution);
  comparison.append(element('h3', 'Four criteria for manual comparison'));
  const criteria = element('ol', undefined, 'criteria');
  for (const criterion of form.criteria) criteria.append(element('li', criterion, 'authored-text'));
  comparison.append(criteria, element('p', 'In your comparison file, explain the evidence for each criterion and what you would revise. No score or automatic result is produced.'));
  authoredSection(comparison, 'Scope and limits', form.boundary);
  authoredSection(comparison, 'What this form changes', form.changedFrom);
  article.append(comparison, link('Return to the form list', '#packet-contents'));
  return article;
}

async function start() {
  const main = document.getElementById('packet-content');
  const status = document.getElementById('packet-status');
  main.setAttribute('aria-busy', 'true');
  status.hidden = false;
  try {
    const urls = localUrls();
    const seen = new Set();
    const forms = [];
    // Sequential reads keep the source budget small; nothing renders until all validate.
    for (let index = 0; index < SOURCES.length; index += 1) {
      const source = await readSource(urls.sources[index]);
      forms.push(...validateSource(source, SOURCES[index], seen));
    }
    requireCondition(seen.size === 18 && forms.length === 18
      && [...FORM_IDS].every(id => seen.has(id)));
    const articles = document.createDocumentFragment();
    const contents = document.createDocumentFragment();
    for (const form of forms) {
      articles.append(formArticle(form, urls.reader));
      const row = element('li');
      row.append(link(`${form.id} · ${form.title}`, `#${form.id}`));
      contents.append(row);
    }
    document.getElementById('forms').replaceChildren(articles);
    document.getElementById('form-links').replaceChildren(contents);
    document.getElementById('packet-contents').hidden = false;
    status.textContent = '18 public forms loaded. Each public comparison starts closed; open one whenever you choose.';
    const fragment = window.location.hash.slice(1);
    if (FORM_IDS.has(fragment)) document.getElementById(fragment).scrollIntoView();
  } catch {
    status.textContent = 'The packet could not load, or a fixed public source did not match. Open this page through the Euler application, reload after a source repair, or use the public JSON links below. No forms have been displayed.';
  } finally {
    main.setAttribute('aria-busy', 'false');
  }
}

start();
