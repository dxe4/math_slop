/** Presentation only: keep authored help nodes and all exercise identities intact. */
export function mountExerciseDisclosures(groups, view = window) {
  const candidates = Array.from(groups);
  if (candidates.length > 5000) return () => {};
  const disclosures = [];
  for (const group of candidates) {
    const hints = [...group.children].filter(node => node.matches('p.hint'));
    const solutions = [...group.children].filter(node => node.matches('div.solution'));
    if (hints.length !== 1 || solutions.length !== 1) continue;
    for (const [node, label] of [[hints[0], 'Hint'], [solutions[0], 'Solution']]) {
      const detail = group.ownerDocument.createElement('details');
      detail.className = 'exercise-disclosure';
      const summary = group.ownerDocument.createElement('summary');
      summary.textContent = label;
      detail.append(summary);
      node.before(detail);
      detail.append(node);
      disclosures.push(detail);
    }
  }
  if (!disclosures.length) return () => {};
  const printMedia = view.matchMedia?.('print');
  let printStates;
  const beforePrint = () => {
    if (printStates) return;
    printStates = disclosures.map(detail => detail.open);
    for (const detail of disclosures) detail.open = true;
  };
  const afterPrint = () => {
    if (!printStates) return;
    disclosures.forEach((detail, index) => { detail.open = printStates[index]; });
    printStates = undefined;
  };
  const mediaChanged = event => { if (event.matches) beforePrint(); else afterPrint(); };
  const dispose = () => {
    afterPrint();
    view.removeEventListener('beforeprint', beforePrint);
    view.removeEventListener('afterprint', afterPrint);
    view.removeEventListener('pagehide', onPageHide);
    view.removeEventListener('pageshow', resume);
    printMedia?.removeEventListener('change', mediaChanged);
  };
  const resume = () => {
    view.addEventListener('beforeprint', beforePrint);
    view.addEventListener('afterprint', afterPrint);
    view.addEventListener('pagehide', onPageHide);
    printMedia?.addEventListener('change', mediaChanged);
    if (printMedia?.matches) beforePrint();
  };
  const onPageHide = event => {
    dispose();
    // Re-arm only when this same cached document returns with its live DOM.
    if (event.persisted) view.addEventListener('pageshow', resume, {once:true});
  };
  resume();
  return dispose;
}
