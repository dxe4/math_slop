// Plugin for <div data-lab="…"> in MCMC chapters: mounts the simulation labs (Monte Carlo,
// Markov chains, Metropolis, Gibbs, slice, HMC, diagnostics, tempering, Ising, importance,
// coupling, geometry, balance, ancestry). Code ported from modules/mcmc/assets (see tools/migrate/mcmc.mjs).
import { mount } from './mcmc/labs.mjs';
import { mount as mountAncestry } from './mcmc/ancestry.mjs';

const css = new URL('./mcmc/labs.css', import.meta.url).href;
if (!document.querySelector('link[href="' + css + '"]')) {
  const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = css; document.head.append(link);
}

export function enhance(root) {
  for (const el of root.querySelectorAll('[data-lab]')) {
    if (el.dataset.mounted) continue;
    el.classList.add('mcmc-lab');
    el.replaceChildren(); // drop the "requires JavaScript" fallback text
    try { (el.dataset.lab === 'ancestry' ? mountAncestry : mount)(el); }
    catch (error) { el.textContent = 'The lab could not start: ' + error.message; }
  }
}
