const eulerBase = () => (globalThis.document?.documentElement?.getAttribute('data-euler-base-path') ?? '/').slice(0, -1);
const eulerHref = value => typeof value === 'string' && value.startsWith('/') && !value.startsWith('//') && !value.startsWith(eulerBase() + '/') ? eulerBase() + value : value;
// Hosted Euler serves shared assets; standalone builds copy the same files.
const hosted = typeof document !== 'undefined' && document.documentElement.hasAttribute('data-euler-hosted');
const moduleURL = hosted ? eulerHref('/__euler/failed-load.mjs') : typeof document === 'undefined' ? '../../../app/failed-load.mjs' : './failed-load.mjs';
export const { createFailedLoad } = await import(moduleURL);
