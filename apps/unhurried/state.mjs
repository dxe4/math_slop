const eulerBase = () => (globalThis.document?.documentElement?.getAttribute('data-euler-base-path') ?? '/').slice(0, -1);
const eulerHref = value => typeof value === 'string' && value.startsWith('/') && !value.startsWith('//') && !value.startsWith(eulerBase() + '/') ? eulerBase() + value : value;
export const STORAGE_KEY = 'maths-unhurried-notebook-v1';
export const emptyNotebook = () => ({schemaVersion:1, bookmarks:[], completed:[], notes:{}});
export function validateNotebook(value, knownIds) {
  if (!value || typeof value !== 'object' || Array.isArray(value) || value.schemaVersion !== 1) throw new Error('This file is not a supported notebook (version 1).');
  const result = emptyNotebook();
  for (const key of ['bookmarks','completed']) {
    if (!Array.isArray(value[key]) || value[key].length > 10000 || value[key].some(id=>typeof id!=='string'||!knownIds.has(id))) throw new Error(`The ${key} list contains unknown or invalid articles.`);
    result[key]=[...new Set(value[key])];
  }
  if (!value.notes || typeof value.notes !== 'object' || Array.isArray(value.notes)) throw new Error('The notes field is invalid.');
  for(const [id,note] of Object.entries(value.notes)) {
    if (!knownIds.has(id) || typeof note!=='string' || note.length>10000) throw new Error('A note is invalid, too long, or belongs to an unknown article.');
    if(note.trim()) result.notes[id]=note;
  }
  return result;
}
export function mergeNotebooks(current,incoming,replaceNotes=false) {
  return {schemaVersion:1,bookmarks:[...new Set([...current.bookmarks,...incoming.bookmarks])],completed:[...new Set([...current.completed,...incoming.completed])],notes:replaceNotes?{...current.notes,...incoming.notes}:{...incoming.notes,...current.notes}};
}

/** The shared notebook is enabled only by a completed, unchanged import receipt. */
export async function initializeSharedNotebook({ library, courseResume, nativePageURL, nativeIndexURL }) {
  if (!document.documentElement.hasAttribute('data-euler-hosted')) return false;
  const { openLearningStore, normalizeRecord, MAX_NOTES } = await import(eulerHref('/__euler/learning-data.mjs'));
  const store = await openLearningStore();
  const receipt = await store.legacyImportReceipt(STORAGE_KEY);
  if (!receipt || !store.persistent) return false;
  let legacyRaw;
  try { legacyRaw = localStorage.getItem(STORAGE_KEY); } catch { return false; }
  if (typeof legacyRaw !== 'string') return false;
  const digest = [...new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(legacyRaw)))].map(byte => byte.toString(16).padStart(2, '0')).join('');
  if (digest !== receipt.digest) return false;
  try { if (localStorage.getItem(STORAGE_KEY) !== legacyRaw) return false; } catch { return false; }
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const byId = new Map(library.map(row => [row.id, row]));
  const known = new Set(byId.keys());
  const key = id => `reading:explorations:${id}`;
  const context = id => ({ type: 'reading', resourceId: `explorations:${id}`, title: byId.get(id).title });
  let rows = new Map(), notebook = emptyNotebook(), dirty = false, baselineNotes = '', loading = 0, busy = false, blocked = false;
  const note = $('#article-note'), noteButton = $('[data-note-save]'), noteId = noteButton?.dataset.noteSave;
  if (note) note.maxLength = MAX_NOTES;
  const status = $('#note-status') || $('#import-status') || $('#storage-status');
  const announce = text => { if (status) status.textContent = text; };
  const download = (data, name) => {
    const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
    const anchor = document.createElement('a'); anchor.href = eulerHref(url); anchor.download = name; document.body.append(anchor); anchor.click(); anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  };
  const exportCurrent = () => {
    const notes = { ...notebook.notes };
    if (note && noteId && (dirty || Object.hasOwn(notes, noteId))) notes[noteId] = note.value;
    download({ ...notebook, notes, exportedAt: new Date().toISOString() }, 'maths-unhurried-notebook.json');
    announce('Notebook and current note exported. Keep this file as your backup.');
  };
  async function refresh() {
    const request = ++loading;
    const all = await store.all();
    const byKey = new Map(all.map(row => [row.id, row]));
    const next = new Map();
    for (const id of known) {
      const row = byKey.get(key(id));
      if (row) { normalizeRecord(row); next.set(id, row); }
    }
    if (request !== loading) return;
    rows = next;
    notebook = emptyNotebook();
    for (const [id, row] of rows) {
      if (row.bookmarked) notebook.bookmarks.push(id);
      if (row.status === 'studied') notebook.completed.push(id);
      if (row.notes !== '') notebook.notes[id] = row.notes;
    }
    if (note && noteId && !dirty) { baselineNotes = rows.get(noteId)?.notes ?? ''; note.value = baselineNotes; }
    render();
  }
  function render() {
    for (const control of $$('[data-save]')) {
      const active = notebook.bookmarks.includes(control.dataset.save);
      control.setAttribute('aria-pressed', String(active)); control.textContent = active ? '♥ Saved for later' : '♡ Save for later';
    }
    for (const control of $$('[data-complete]')) {
      const active = notebook.completed.includes(control.dataset.complete);
      control.setAttribute('aria-pressed', String(active)); control.textContent = active ? 'Marked by you · undo' : 'Mark as explored';
    }
    for (const node of $$('[data-progress-for]')) node.textContent = notebook.completed.includes(node.dataset.progressFor) ? 'Marked by you' : 'Not marked yet';
    for (const panel of $$('[data-course-resume]')) {
      const next = courseResume(panel.dataset.articles.split(' '), notebook.completed);
      const link = $('[data-resume-link]', panel), text = $('[data-resume-text]', panel), hint = $('[data-resume-status]', panel);
      if (hint) hint.textContent = 'Read marks are personal reminders.';
      if (!link || !text) continue;
      if (next.articleId) {
        const title = byId.get(next.articleId)?.title || 'this exploration';
        text.textContent = next.explored ? `Continue with the next article you have not marked explored.` : 'Begin with the first exploration, or choose any module below.';
        link.textContent = `${next.explored ? 'Continue with' : 'Start with'} ${title} →`;
        link.href = eulerHref(nativePageURL('article', next.articleId, { course: panel.dataset.course }));
      } else { text.textContent = 'Every article in this path is marked by you. Revisit a lesson or continue with practice.'; link.textContent = `${panel.dataset.finishLabel} →`; link.href = eulerHref(panel.dataset.finish); }
    }
    const container = $('#notebook-items');
    if (!container) return;
    container.replaceChildren();
    if (!rows.size) {
      const text = document.createElement('p'); text.textContent = 'Save an article or write a note. You will find it here when you return.';
      const link = document.createElement('a'); link.href = eulerHref(nativeIndexURL('explore')); link.textContent = 'Find an exploration'; container.append(text, link); return;
    }
    for (const [id, row] of rows) {
      if (!row.bookmarked && row.status !== 'studied' && !row.notes) continue;
      const article = document.createElement('article'); article.className = 'notebook-entry';
      const heading = document.createElement('h2'), link = document.createElement('a'); link.href = eulerHref(nativePageURL('article', id)); link.textContent = byId.get(id).title; heading.append(link);
      const tags = document.createElement('p'); tags.className = 'note-tags'; tags.textContent = [row.bookmarked ? 'Saved for later' : '', row.status === 'studied' ? 'Marked by you' : ''].filter(Boolean).join(' · ');
      article.append(heading, tags);
      if (row.notes) { const text = document.createElement('p'); text.className = 'note-text'; text.textContent = row.notes; article.append(text); }
      const remove = document.createElement('button'); remove.className = 'text-button'; remove.type = 'button'; remove.textContent = 'Remove from notebook';
      remove.addEventListener('click', () => {
        if (!confirm(`Remove saved status and any note for “${byId.get(id).title}”?`)) return;
        void perform(() => store.remove(row.id, { expectedRecord: row }), 'Entry removed from My learning.');
      });
      article.append(remove); container.append(article);
    }
  }
  async function perform(action, message) {
    if (blocked) { announce('Saving is paused because stored work could not be read. Download your current notebook, then reload.'); return; }
    if (busy) return;
    busy = true;
    try { await action(); await refresh(); announce(message); }
    catch (error) { announce(`${error.message || 'Could not save.'} Current writing stays on this page; download it before leaving.`); }
    finally { busy = false; }
  }
  await refresh();
  try { if (localStorage.getItem(STORAGE_KEY) !== legacyRaw) return false; } catch { return false; }
  for (const control of $$('[data-save]')) control.addEventListener('click', () => {
    const id = control.dataset.save; if (!known.has(id)) return;
    void perform(() => store.patch(key(id), { bookmarked: !rows.get(id)?.bookmarked }, context(id)), 'Saved in My learning.');
  });
  for (const control of $$('[data-complete]')) control.addEventListener('click', () => {
    const id = control.dataset.complete; if (!known.has(id)) return;
    void perform(() => store.patch(key(id), { status: rows.get(id)?.status === 'studied' ? 'unread' : 'studied' }, context(id)), 'Read mark saved. Marked by you.');
  });
  note?.addEventListener('input', () => { dirty = note.value !== baselineNotes; });
  noteButton?.addEventListener('click', () => {
    if (!known.has(noteId)) return;
    const captured = note.value, expected = baselineNotes;
    void perform(async () => {
      await store.patch(key(noteId), { notes: captured }, context(noteId), { expectedNotes: expected });
      baselineNotes = captured; dirty = note.value !== captured;
    }, 'Your note is saved in My learning.');
  });
  let exportButton = $('#export-notebook');
  if (!exportButton && noteButton) {
    exportButton = document.createElement('button'); exportButton.id = 'export-notebook'; exportButton.type = 'button'; exportButton.className = 'button secondary'; exportButton.textContent = 'Download notebook and current note'; noteButton.parentElement.append(exportButton);
  }
  exportButton?.addEventListener('click', exportCurrent);
  const notice = document.createElement('p'); notice.className = 'storage-notice';
  notice.append(document.createTextNode('This notebook uses My learning. Your earlier notebook is kept unchanged. '));
  const backup = document.createElement('button'); backup.type = 'button'; backup.textContent = 'Download notebook'; backup.addEventListener('click', exportCurrent); notice.append(backup);
  const destination = $('#storage-status') || $('#note-status') || $('#notebook-items') || noteButton;
  destination?.before(notice);
  $('#import-notebook')?.addEventListener('change', async event => {
    const input = event.target, file = input.files?.[0];
    if (!file) return;
    try {
      if (busy || dirty) throw new Error('Save or download your current note before importing.');
      if (file.size > 16000000) throw new Error('Choose a notebook no larger than 16 MB.');
      const incoming = validateNotebook(JSON.parse(await file.text()), known);
      if (busy || dirty) throw new Error('Your writing changed while the file was loading. Choose the file again.');
      const ids = [...new Set([...incoming.bookmarks, ...incoming.completed, ...Object.keys(incoming.notes)])];
      if (ids.some(id => (incoming.notes[id]?.length ?? 0) > MAX_NOTES)) throw new Error('An imported note exceeds the shared 8,000-character limit. Keep the original file.');
      if (!confirm(`Merge ${ids.length} articles into My learning? Existing notes and marks will be kept where an article is already saved.`)) return;
      if (busy || dirty) throw new Error('Your writing changed while the import was open. Choose the file again.');
      const records = ids.map(id => ({ id: key(id), ...context(id), bookmarked: incoming.bookmarks.includes(id), status: incoming.completed.includes(id) ? 'studied' : 'unread', notes: incoming.notes[id] ?? '', updatedAt: new Date().toISOString() }));
      await perform(() => store.import({ format: 'euler-learning', schemaVersion: 3, exportedAt: new Date().toISOString(), records, work: [] }), 'Notebook imported. Existing records were kept where they differed.');
    } catch (error) { announce(`Could not import: ${error.message}`); }
    finally { input.value = ''; }
  });
  $('#clear-notebook')?.addEventListener('click', () => {
    if (busy || !confirm('Remove this collection’s notes, bookmarks and read marks from My learning? Export a backup first. The earlier native notebook stays unchanged.')) return;
    const captured = [...rows.values()];
    void perform(async () => {
      for (const row of captured) await store.remove(row.id, { expectedRecord: row });
      if (note && !dirty) note.value = '';
    }, 'This collection’s shared notebook was cleared. Your earlier notebook is unchanged.');
  });
  const unsubscribe = store.subscribe(() => { void refresh().catch(() => {
    blocked = true;
    for (const control of $$('[data-save], [data-complete], [data-note-save], #import-notebook, #clear-notebook')) control.disabled = true;
    announce('Saved work could not be reloaded. Saving is paused; your current note stays here to download.');
  }); });
  window.addEventListener('storage', event => {
    if (event.key !== STORAGE_KEY && event.key !== null) return;
    let unchanged = false;
    try { unchanged = localStorage.getItem(STORAGE_KEY) === legacyRaw; } catch { /* Source ownership could not be re-read. */ }
    if (unchanged) return;
    blocked = true;
    for (const control of $$('[data-save], [data-complete], [data-note-save], #import-notebook, #clear-notebook')) control.disabled = true;
    announce('Your earlier notebook changed in another tab. Shared saving is paused; download this notebook and review the earlier work in My learning before continuing.');
  });
  window.addEventListener('pagehide', unsubscribe, { once: true });
  window.addEventListener('beforeunload', event => { if (dirty || busy) { event.preventDefault(); event.returnValue = ''; } });
  document.documentElement.dataset.notebookReady = 'true';
  document.documentElement.dataset.notebookStorage = 'shared';
  return true;
}
