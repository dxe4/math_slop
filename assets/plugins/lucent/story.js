// "visual-story" fences: strict JSON describing a guided sequence of scenes.
// Each stage has a prose setup, an optional question (answer saved in this
// browser), an optional checkpoint (hint, model reasoning, self-check criteria)
// and a mathviz scene. `transition` compare/indicate mutes objects outside `focus`.
import { el } from './board.js';
import { markdown, store } from './rich.js';

export function parseStory(text) {
  let value;
  try { value = JSON.parse(text); } catch { throw new Error('A visual argument must be valid JSON.'); }
  const string = (input, label, optional = false) => {
    if (optional && input === undefined) return '';
    if (typeof input !== 'string' || !input.trim()) throw new Error(`${label} must be nonempty text.`);
    return input.trim();
  };
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('A visual argument must be a JSON object.');
  if (typeof value.id !== 'string' || !/^[a-z][a-z0-9-]{0,63}$/.test(value.id)) throw new Error('A visual argument needs a lowercase id.');
  if (!Array.isArray(value.stages) || value.stages.length < 3 || value.stages.length > 12) throw new Error('A visual argument needs 3–12 stages.');
  const stages = value.stages.map((stage, index) => {
    if (!stage || typeof stage !== 'object' || Array.isArray(stage)) throw new Error(`Stage ${index + 1} must be an object.`);
    const lines = Array.isArray(stage.scene) ? stage.scene : [stage.scene];
    if (!lines.length || !lines.every(line => typeof line === 'string')) throw new Error(`Stage ${index + 1} needs scene source as text or an array of text lines.`);
    const transition = stage.transition ?? (index === 0 ? 'none' : 'transform');
    if (!['none', 'reveal', 'transform', 'compare', 'indicate', 'camera'].includes(transition)) throw new Error(`Stage ${index + 1} has an unknown transition.`);
    const focus = stage.focus ?? [];
    if (!Array.isArray(focus) || focus.length > 32 || !focus.every(id => typeof id === 'string')) throw new Error(`Stage ${index + 1} focus must list rendered object ids.`);
    let checkpoint = null;
    if (stage.checkpoint !== undefined) {
      const c = stage.checkpoint;
      if (!c || !Array.isArray(c.criteria) || c.criteria.length < 1 || c.criteria.length > 6) throw new Error(`Stage ${index + 1} checkpoint needs 1–6 self-check criteria.`);
      checkpoint = { hint: string(c.hint, 'hint'), explanation: string(c.explanation, 'model reasoning'), criteria: c.criteria.map(item => string(item, 'criterion')) };
      string(stage.question, `Stage ${index + 1} checkpoint question`);
    }
    return { title: string(stage.title, `Stage ${index + 1} title`), body: string(stage.body, `Stage ${index + 1} explanation`), question: string(stage.question, 'question', true), transition, focus, checkpoint, scene: lines.join('\n').trim() };
  });
  return { id: value.id, title: string(value.title, 'Visual argument title'), prompt: string(value.prompt, 'Visual argument prompt'), stages };
}

export async function createStory(source) {
  const { createSceneFigure } = await import('./board.js');
  const story = parseStory(source);
  const saved = store.get('story:' + story.id) ?? { stage: 0, responses: {}, checks: {} };
  const block = el('section', 'lucent-block lucent-story'); block.dataset.story = story.id;
  const head = el('div', 'lucent-caption'); head.append(el('span', 'lucent-badge', 'Guided visual argument'), el('span', 'lucent-title', story.title));
  block.append(head, markdown(story.prompt));
  const nav = el('div', 'lucent-stages'); nav.setAttribute('role', 'group'); nav.setAttribute('aria-label', 'Stages');
  const body = el('div', 'lucent-stage');
  const buttons = story.stages.map((stage, i) => { const b = el('button', '', String(i + 1)); b.type = 'button'; b.title = stage.title; b.setAttribute('aria-label', `Stage ${i + 1}: ${stage.title}`); b.addEventListener('click', () => show(i, true)); nav.append(b); return b; });
  const pager = el('div', 'lucent-actions');
  const prev = el('button', 'lucent-button', '← Previous stage'), next = el('button', 'lucent-button primary', 'Next stage →');
  prev.type = next.type = 'button'; prev.addEventListener('click', () => show(current - 1, true)); next.addEventListener('click', () => show(current + 1, true));
  pager.append(prev, next);
  block.append(nav, body, pager);
  let current = -1, figure = null;
  const persist = () => store.set('story:' + story.id, saved);
  function show(index, focusHeading = false) {
    if (index < 0 || index >= story.stages.length) return;
    figure?.destroy?.(); figure = null; current = index; saved.stage = index; persist();
    const stage = story.stages[index];
    buttons.forEach((b, i) => { if (i === index) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current'); });
    prev.disabled = index === 0; next.disabled = index === story.stages.length - 1;
    const heading = el('h4', '', `${index + 1}. ${stage.title}`); heading.tabIndex = -1;
    body.replaceChildren(heading, markdown(stage.body));
    if (stage.question) {
      const q = el('div', 'lucent-details'); q.append(el('strong', '', 'Question'), markdown(stage.question));
      const area = el('textarea'); area.value = saved.responses[index] ?? ''; area.setAttribute('aria-label', 'Your response');
      area.addEventListener('input', () => { saved.responses[index] = area.value; persist(); });
      q.append(area); body.append(q);
    }
    const mount = el('div'); const mute = ['compare', 'indicate'].includes(stage.transition) && stage.focus.length ? stage.focus : undefined;
    const makeFigure = () => { figure = createSceneFigure(stage.scene, { focus: mute }); mount.replaceChildren(figure.element); };
    if (stage.checkpoint) {
      const reveal = el('button', 'lucent-button', 'Explore the diagram'); reveal.type = 'button'; reveal.setAttribute('aria-expanded', 'false');
      reveal.addEventListener('click', () => { if (figure) return; reveal.setAttribute('aria-expanded', 'true'); reveal.hidden = true; makeFigure(); });
      body.append(reveal, mount);
      const hint = el('details', 'lucent-details'); hint.append(el('summary', '', 'Show a hint'), markdown(stage.checkpoint.hint));
      const compare = el('details', 'lucent-details'); compare.append(el('summary', '', 'Compare reasoning and revise'), markdown(stage.checkpoint.explanation));
      const set = el('fieldset', 'lucent-rubric'); set.append(el('legend', '', 'Self-check: mark what your own reasoning achieves (not a grade)'));
      stage.checkpoint.criteria.forEach((c, i) => {
        const row = el('label', 'lucent-choice'), box = el('input'); box.type = 'checkbox'; box.checked = !!saved.checks[`${index}:${i}`];
        box.addEventListener('change', () => { saved.checks[`${index}:${i}`] = box.checked; persist(); });
        row.append(box, markdown(c)); set.append(row);
      });
      compare.append(set); body.append(hint, compare);
    } else { makeFigure(); body.append(mount); }
    if (focusHeading) heading.focus();
  }
  show(Math.min(saved.stage ?? 0, story.stages.length - 1));
  return block;
}
