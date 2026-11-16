import {evaluateBoard, boardExplanation, squareName, squareColour, TILING_PRESETS} from './tiling-model.mjs';

export function mountTilingExplorer(host) {
  if (host.dataset.tilingMounted === 'true') return;
  const workshop = document.createElement('div');
  workshop.className = 'tiling-workshop';
  const heading = document.createElement('h3'); heading.textContent = 'Change the board';
  const instructions = document.createElement('p'); instructions.id = 'tiling-instructions';
  instructions.textContent = 'Toggle a square to remove or restore it. Letters name columns; numbers name rows. L means light and D means dark. A domino may cover only two squares that share an edge.';
  const actions = document.createElement('div'); actions.className = 'tiling-actions';
  const grid = document.createElement('div'); grid.className = 'tiling-board';
  grid.setAttribute('role','group'); grid.setAttribute('aria-label','Choose squares to remove');
  grid.setAttribute('aria-describedby','tiling-instructions');
  const summary = document.createElement('p'); summary.className = 'tiling-summary'; summary.setAttribute('role','status');
  const counts = document.createElement('p'); counts.className = 'tiling-counts';
  let removed = new Set(TILING_PRESETS.corners);
  const squares = Array.from({length:16}, (_,index) => {
    const button = document.createElement('button'); button.type = 'button'; button.dataset.square = String(index);
    button.className = `tiling-square ${squareColour(index)}`;
    const name = document.createElement('span'); name.textContent = squareName(index);
    const mark = document.createElement('span'); mark.className = 'tiling-mark'; mark.setAttribute('aria-hidden','true');
    button.append(name, mark);
    button.addEventListener('click', () => { if (removed.has(index)) removed.delete(index); else removed.add(index); update(); });
    grid.append(button);
    return button;
  });
  function update() {
    for (const [index,button] of squares.entries()) {
      const missing = removed.has(index), colour = squareColour(index);
      button.classList.toggle('removed',missing);
      button.setAttribute('aria-pressed',String(missing));
      button.setAttribute('aria-label',`${squareName(index)}, ${colour}, ${missing?'removed':'present'}`);
      button.querySelector('.tiling-mark').textContent = missing ? '×' : colour === 'light' ? 'L' : 'D';
    }
    const state = evaluateBoard([...removed]);
    counts.textContent = `${state.remaining} squares remain · ${state.light} light · ${state.dark} dark · light minus dark = ${state.difference}`;
    summary.textContent = boardExplanation(state);
  }
  for (const [preset,label] of Object.entries({corners:'Opposite corners · reset',top:'Two top corners',isolated:'Equal colours, isolated square',full:'Restore every square'})) {
    const button = document.createElement('button'); button.type='button'; button.className='button secondary';
    button.dataset.tilingPreset = preset; button.textContent = label;
    button.addEventListener('click', () => { removed = new Set(TILING_PRESETS[preset]); update(); });
    actions.append(button);
  }
  workshop.append(heading,instructions,actions,grid,counts,summary);
  update();
  host.prepend(workshop);
  host.querySelector('[data-tiling-fallback]').hidden = true;
  host.dataset.tilingMounted = 'true';
}
