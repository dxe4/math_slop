import {prepareReport} from './report-model.mjs';

const reportOrigin = 'https://unhurried.invalid';
/** Report text keeps its stable logical page identity; navigation follows this asset. */
export function createFeedbackPageResolver(pages, base = new URL('./', import.meta.url)) {
  if (!Array.isArray(pages) || pages.length > 20_000
    || pages.some(page => typeof page?.path !== 'string' || page.path.length > 2048
      || !/^\/(?:[a-z0-9]+(?:-[a-z0-9]+)*\/)*$/.test(page.path))) throw new TypeError('Invalid owned report page catalogue.');
  const byPath = new Map(pages.map(page => [page.path, page]));
  if (byPath.size !== pages.length) throw new TypeError('Ambiguous report page identity.');
  function resolve(raw) {
    if (typeof raw !== 'string' || raw.length > 4096 || !raw.trim() || /[\\\u0000-\u001f\u007f]/.test(raw)) return null;
    const logical = raw.trim().split(/[?#]/, 1)[0];
    if (logical.startsWith('/') && !logical.startsWith('//') && byPath.has(logical.endsWith('/') ? logical : logical + '/'))
      return byPath.get(logical.endsWith('/') ? logical : logical + '/');
    let url;
    try { url = new URL(raw, base); } catch { return null; }
    if (url.origin !== base.origin || url.protocol !== base.protocol || url.host !== base.host
      || url.username || url.password || !url.pathname.startsWith(base.pathname)) return null;
    const relative = url.pathname.slice(base.pathname.length).replace(/index\.html$/, '');
    const path = '/' + relative + (relative && !relative.endsWith('/') ? '/' : '');
    return byPath.get(path) ?? null;
  }
  return Object.freeze({ resolve,
    href(page) {
      if (byPath.get(page?.path) !== page) throw new TypeError('A return link requires an owned report page.');
      return new URL(page.path.slice(1) + 'index.html', base).href;
    },
  });
}

export function mountFeedback(form) {
  const pages = JSON.parse(document.getElementById('feedback-catalog').textContent);
  const pageResolver = createFeedbackPageResolver(pages);
  const fieldNames = ['page','section','kind','description','context'];
  const fields = Object.fromEntries(fieldNames.map(name => [name, form.elements.namedItem(name)]));
  const result = document.getElementById('feedback-result');
  const preview = document.getElementById('feedback-preview');
  const printable = document.getElementById('feedback-print');
  const copy = document.getElementById('feedback-copy');
  const download = document.getElementById('feedback-download');
  const status = document.getElementById('feedback-status');
  const returnLink = document.getElementById('feedback-return');
  let report = null, selectedPage = null;

  for (const page of pages) {
    const option = document.createElement('option');
    option.value = page.path; option.label = page.title;
    document.getElementById('feedback-pages').append(option);
  }
  const initial = new URLSearchParams(location.search).get('page');
  fields.page.value = pageResolver.resolve(initial)?.path || '';
  const updatePage = () => {
    const page = pageResolver.resolve(fields.page.value);
    if (page?.path !== selectedPage?.path) {
      fields.section.replaceChildren(new Option('Whole page / not sure',''));
      for (const section of page?.sections || []) fields.section.add(new Option(section.title, section.id));
    }
    selectedPage = page;
    fields.section.disabled = !page;
    returnLink.hidden = !page;
    if (page) { returnLink.href = pageResolver.href(page); returnLink.textContent = `Return to ${page.title} →`; }
    else returnLink.removeAttribute('href');
  };
  updatePage();

  const invalidate = () => {
    if (report) status.textContent = 'Your draft changed. Prepare it again before copying or downloading.';
    report = null; preview.value = ''; printable.textContent = ''; result.hidden = true;
    copy.disabled = true; download.disabled = true;
  };
  const clearError = name => {
    fields[name].removeAttribute('aria-invalid');
    document.getElementById(`feedback-${name}-error`).textContent = '';
    document.getElementById('feedback-errors').textContent = '';
  };
  form.addEventListener('input', event => {
    invalidate();
    if (fieldNames.includes(event.target.name)) clearError(event.target.name);
    if (event.target === fields.page) { clearError('section'); updatePage(); }
  });
  form.addEventListener('change', event => {
    invalidate();
    if (fieldNames.includes(event.target.name)) clearError(event.target.name);
    if (event.target === fields.page) updatePage();
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    invalidate();
    const prepared = prepareReport(Object.fromEntries(fieldNames.map(name => [name,name === 'page' ? (pageResolver.resolve(fields.page.value)?.path ?? '') : fields[name].value])), reportOrigin, pages);
    for (const name of fieldNames) {
      clearError(name);
      const error = prepared.errors[name];
      if (error) {
        fields[name].setAttribute('aria-invalid','true');
        document.getElementById(`feedback-${name}-error`).textContent = error;
      }
    }
    const errorNames = Object.keys(prepared.errors);
    if (errorNames.length) {
      document.getElementById('feedback-errors').textContent = 'The report needs a little more information. Check the fields marked below their labels.';
      status.textContent = '';
      fields[errorNames[0]].focus();
      return;
    }
    report = prepared.text; preview.value = report; printable.textContent = report; result.hidden = false;
    copy.disabled = false; download.disabled = false;
    status.textContent = 'Report prepared. Review the text, then copy or download it. Nothing has been submitted.';
    preview.focus();
  });
  copy.addEventListener('click', async () => {
    if (!report) return;
    try {
      await navigator.clipboard.writeText(report);
      status.textContent = 'Report copied. Nothing has been submitted; share the text through your existing contact with the project.';
    } catch {
      preview.focus(); preview.select();
      status.textContent = 'Automatic copying is unavailable. The report text is selected; use your usual Copy command, or download the text file.';
    }
  });
  download.addEventListener('click', () => {
    if (!report) return;
    const url = URL.createObjectURL(new Blob([report], {type:'text/plain;charset=utf-8'}));
    const link = document.createElement('a');
    link.href = url; link.download = 'maths-unhurried-reader-report.txt';
    document.body.append(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
    status.textContent = 'Text-file download requested. Nothing has been submitted; share the file through your existing contact with the project.';
  });
  document.getElementById('feedback-loading').hidden = true;
  document.getElementById('feedback-manual').open = false;
  form.hidden = false;
  form.dataset.ready = 'true';
}
