// Lucent interactive blocks for math_slop. Loaded by assets/app.js whenever a
// page contains a mathviz / notebook / exercise / visual-story / investigation
// fence; app.js calls enhance(root) once per rendered page.
//
//   mathviz        a scene program -> interactive JSXGraph board with sliders
//   notebook       a small calculus language -> live computed results
//   exercise       JSON practice item (choice / numeric / written)
//   visual-story   JSON sequence of scenes with prompts
//   investigation  one of nine named linked investigations
//
// Everything is plain JavaScript: no WebAssembly, no eval. Helpers live in
// ./lucent/ (expr, scene, board, notebook, exercise, story, investigation).
import { ensureStyles, errorBox, describe } from './lucent/board.js';

const KINDS = {
  mathviz: async (source, node) => {
    const { createSceneFigure } = await import('./lucent/board.js');
    return createSceneFigure(source).element;
  },
  notebook: async (source, node) => (await import('./lucent/notebook.js')).createNotebook(source, node.dataset.id),
  exercise: async source => (await import('./lucent/exercise.js')).createExercise(source),
  'visual-story': async source => (await import('./lucent/story.js')).createStory(source),
  investigation: async source => (await import('./lucent/investigation.js')).createInvestigation(source.trim()),
};

export async function enhance(root) {
  ensureStyles();
  const nodes = [...root.querySelectorAll('.fence-plugin[data-fence]')].filter(node => KINDS[node.dataset.fence] && !node.dataset.lucent);
  for (const node of nodes) node.dataset.lucent = 'pending';
  // Build sequentially so a page with many figures stays responsive.
  for (const node of nodes) {
    if (!node.isConnected) continue;
    const source = node.dataset.source ?? node.textContent;
    try {
      const block = await KINDS[node.dataset.fence](source, node);
      node.replaceChildren(block);
      node.dataset.lucent = 'ready';
      node.classList.add('lucent-host');
    } catch (error) {
      node.dataset.lucent = 'error';
      node.replaceChildren(errorBox(describe(error, source), source));
    }
    await new Promise(resolve => requestAnimationFrame(resolve));
  }
}
