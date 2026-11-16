const eulerBase = () => (globalThis.document?.documentElement?.getAttribute('data-euler-base-path') ?? '/').slice(0, -1);
const eulerHref = value => typeof value === 'string' && value.startsWith('/') && !value.startsWith('//') && !value.startsWith(eulerBase() + '/') ? eulerBase() + value : value;
(() => {
  if (document.documentElement.hasAttribute('data-euler-hosted')) {
    import(eulerHref('/__euler/native-exercises.mjs')).then(({ mountNativeExercises }) => mountNativeExercises())
      .catch(() => { /* Native questions and answer disclosures remain readable. */ });
  }
  const key = 'bayes-course-progress-v1';
  const resetKey = 'bayes-course-progress-reset-v1';
  const lockName = 'bayes-course-reading-progress';
  const progress = document.querySelector('#course-progress');
  const label = document.querySelector('#progress-label');
  const button = document.querySelector('.complete');
  const notice = document.createElement('p');
  notice.id = 'reader-progress-status';
  notice.setAttribute('role', 'status');
  notice.setAttribute('aria-live', 'polite');
  (progress?.closest('.progress') || label?.parentElement)?.append(notice);
  const locks = window.navigator?.locks;
  let storage, memoryOnly = false, reason = '', message = '';
  let saved = [], context = { generation: 0 }, memoryReset = false;
  const pending = new Map();
  let serial = 0, queue = Promise.resolve();
  const normalize = value => {
    if (!Array.isArray(value)) throw new Error('Stored reading marks are not a list.');
    return [...new Set(value.filter(n => Number.isInteger(n) && n >= 0 && n <= 12))].sort((a, b) => a - b);
  };
  function readSaved() {
    const raw = storage.getItem(resetKey);
    const generation = raw === null ? 0 : Number(raw);
    if (raw !== null && (!/^(0|[1-9][0-9]*)$/.test(raw) || !Number.isSafeInteger(generation))) {
      throw new Error('Stored reset information cannot be read safely.');
    }
    return { generation, completed: normalize(JSON.parse(storage.getItem(key) || '[]')) };
  }
  function completed() {
    const result = new Set(memoryReset ? [] : saved);
    for (const [n, change] of pending) change.marked ? result.add(n) : result.delete(n);
    return [...result].sort((a, b) => a - b);
  }
  function refresh() {
    const marks = completed();
    if (progress) progress.value = marks.length;
    if (label) label.textContent = `${marks.length} of 13 chapters marked read`;
    if (button) {
      const done = marks.includes(Number(button.dataset.lesson));
      button.setAttribute('aria-pressed', String(done));
      button.textContent = done ? 'Read ✓' : 'Mark as read';
    }
    notice.textContent = memoryOnly
      ? `${memoryReset ? 'Reset on this page only; previously saved marks are unchanged. ' : ''}Reading changes stay in memory until this page closes. ${reason}`
      : pending.size || memoryReset ? 'Saving reading marks…' : message || 'Reading marks saved in this browser.';
  }
  function unavailable(error) {
    memoryOnly = true;
    reason = 'Persistent storage is unavailable; your current changes have been kept on this page.';
    refresh();
  }
  function accept(snapshot) {
    saved = snapshot.completed;
    if (context.generation !== null && context.generation !== snapshot.generation) {
      // A reset cancels earlier queued intentions rather than resurrecting them.
      context = { generation: snapshot.generation };
      pending.clear();
      memoryReset = false;
      message = 'Reading marks were reset in another tab; earlier pending changes were cancelled.';
    }
    refresh();
  }
  function enqueue(task) {
    queue = queue.then(() => locks.request(lockName, { mode: 'exclusive' }, task)).catch(unavailable);
  }
  try {
    storage = window.localStorage;
    const initial = readSaved();
    saved = initial.completed;
    context.generation = initial.generation;
  } catch (error) { unavailable(error); }
  if (!memoryOnly && typeof locks?.request !== 'function') {
    memoryOnly = true;
    reason = 'This browser cannot coordinate safe saves across tabs. Previously saved marks remain readable.';
  }
  function changeLesson(n) {
    if (!Number.isInteger(n) || n < 0 || n > 12) return;
    const operation = { id: ++serial, marked: !completed().includes(n) };
    const origin = context;
    pending.set(n, operation);
    message = '';
    refresh();
    if (memoryOnly) return;
    enqueue(() => {
      if (memoryOnly || origin !== context) return;
      const current = readSaved();
      if (origin.generation !== current.generation) { accept(current); return; }
      const marks = new Set(current.completed);
      operation.marked ? marks.add(n) : marks.delete(n);
      const next = [...marks].sort((a, b) => a - b);
      storage.setItem(key, JSON.stringify(next));
      saved = next;
      if (pending.get(n) === operation) pending.delete(n);
      refresh();
    });
  }
  function resetProgress() {
    const origin = context = { generation: null };
    pending.clear();
    memoryReset = true;
    message = '';
    refresh();
    if (memoryOnly) return;
    enqueue(() => {
      if (memoryOnly || origin !== context) return;
      const current = readSaved();
      if (current.generation === Number.MAX_SAFE_INTEGER) throw new Error('Reset counter is full.');
      const generation = current.generation + 1;
      // Invalidate old pending writes before clearing marks. If clearing fails,
      // existing saved marks remain and the page explicitly reports memory mode.
      storage.setItem(resetKey, String(generation));
      storage.setItem(key, '[]');
      origin.generation = generation;
      saved = [];
      memoryReset = false;
      refresh();
    });
  }
  button?.addEventListener('click', () => changeLesson(Number(button.dataset.lesson)));
  document.querySelector('#reset-progress')?.addEventListener('click', resetProgress);
  window.addEventListener('storage', event => {
    if (!storage || (event.storageArea && event.storageArea !== storage) || ![key, resetKey, null].includes(event.key)) return;
    const synchronize = () => { try { accept(readSaved()); } catch (error) { unavailable(error); } };
    // Always read the authoritative store, never an old event payload.
    if (typeof locks?.request === 'function') enqueue(synchronize);
    else synchronize();
  });
  const menuToggle = document.querySelector('.menu-toggle'), sidebar = document.querySelector('.sidebar');
  function closeMenu(returnFocus = false) {
    sidebar?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (returnFocus && menuToggle && getComputedStyle(menuToggle).display !== 'none') menuToggle.focus();
  }
  let sharedDrawer = null;
  if (document.documentElement.hasAttribute('data-euler-hosted') && !document.querySelector('.euler-book-reader') && menuToggle && sidebar) {
    import(eulerHref('/__euler/reader-sidebar.mjs')).then(({ mountReaderDrawer }) => {
      sharedDrawer = mountReaderDrawer({ toggle: menuToggle, container: sidebar, isOpen: () => sidebar.classList.contains('open'), setOpen: open => sidebar.classList.toggle('open', open) });
    }).catch(() => { /* The native menu remains usable if shared enhancement is unavailable. */ });
  }
  menuToggle?.addEventListener('click', () => {
    if (sharedDrawer) return;
    if (!sidebar) return;
    const open = sidebar.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    if (open) sidebar.querySelector('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled])')?.focus();
  });
  document.addEventListener('keydown', event => {
    if (sharedDrawer) return;
    if (event.key === 'Escape' && sidebar?.classList.contains('open') && menuToggle && getComputedStyle(menuToggle).display !== 'none') {
      event.preventDefault(); closeMenu(true);
    }
  });
  window.addEventListener('resize', () => {
    if (menuToggle && getComputedStyle(menuToggle).display === 'none') closeMenu();
  });
  document.querySelectorAll('.quiz').forEach(form => form.addEventListener('submit', event => {
    event.preventDefault();
    const selected = form.querySelector('input:checked');
    const feedback = form.querySelector('.quiz-feedback');
    if (!selected) { feedback.textContent = 'Choose an answer first.'; return; }
    feedback.textContent = (selected.value === form.dataset.answer ? 'Correct. ' : 'Try that reasoning again. ') + form.dataset.explanation;
  }));
  refresh();
  const search = document.querySelector('#search');
  if (search) {
    const results = document.querySelector('#search-results');
    const status = document.querySelector('#search-status');
    const scope = document.querySelector('#search-scope');
    function runSearch() {
      const q = search.value.trim().toLowerCase(); results.replaceChildren();
      if (q.length < 2) { status.textContent = 'Enter at least two characters to search the course.'; return; }
      const terms = q.split(/\s+/);
      const matches = (window.COURSE_SEARCH || []).filter(p => {
        const mode = scope?.value || 'readings';
        const included = mode === 'all' || (mode === 'readings' ? !p.answers && p.group !== 'documentation' : p.group === mode);
        return included && terms.every(t => `${p.title} ${p.text}`.toLowerCase().includes(t));
      });
      status.textContent = `${matches.length} matching pages`;
      matches.forEach(p => {
        const item = document.createElement('article'); item.className = 'search-result';
        const heading = document.createElement('h2'); const link = document.createElement('a'); link.href = eulerHref(p.url); link.textContent = p.title + (p.answers ? ' — contains answers' : ''); heading.append(link);
        const summary = document.createElement('p'); const index = p.text.toLowerCase().indexOf(terms[0]); const start = Math.max(0, index - 60); summary.textContent = (start ? '…' : '') + p.text.slice(start, start + 220) + '…';
        item.append(heading, summary); results.append(item);
      });
    }
    search.addEventListener('input', runSearch);
    scope?.addEventListener('change', runSearch);
  }
})();
