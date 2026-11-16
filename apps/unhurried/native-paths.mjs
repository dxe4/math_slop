// Runtime URLs follow this asset module, independently of document depth.
export const UNHURRIED_NATIVE_MOUNT = '/unhurried/';
const kinds = Object.freeze({ article: 'articles', course: 'courses', series: 'series', lab: 'labs', subject: 'subjects', refresher: 'refresh', discovery: 'discover' });
const indexes = new Set(['', 'explore', 'courses', 'play', 'subjects', 'glossary', 'start', 'refresh', 'tonight', 'discover', 'roadmap', 'notebook', 'about', 'feedback']);
const assets = new Set(['library.json', 'search-index.json', 'courses-index.json', 'experiments-index.json', 'refreshers-index.json', 'discoveries-index.json']);
const slug = value => typeof value === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value);
const base = new URL('./', import.meta.url);
function pagePath(kind, id) {
  if (!Object.hasOwn(kinds, kind) || !slug(id)) throw new TypeError('Unknown native page identity.');
  return kinds[kind] + '/' + encodeURIComponent(id) + '/';
}
export function unhurriedPublicHref(kind, id) { return UNHURRIED_NATIVE_MOUNT + pagePath(kind, id); }
export function unhurriedIndexHref(index = '') {
  if (!indexes.has(index)) throw new TypeError('Unknown native index.');
  return UNHURRIED_NATIVE_MOUNT + (index ? index + '/' : '');
}
export function nativeAssetURL(name) {
  if (!assets.has(name)) throw new TypeError('Unknown native runtime index.');
  return new URL(name, base).href;
}
export function nativePageURL(kind, id, { course } = {}) {
  const value = new URL(pagePath(kind, id) + 'index.html', base);
  if (course !== undefined) {
    if (!slug(course)) throw new TypeError('Unknown native course identity.');
    value.searchParams.set('course', course);
  }
  return value.href;
}
export function nativeIndexURL(index = '') {
  if (!indexes.has(index)) throw new TypeError('Unknown native index.');
  return new URL((index ? index + '/' : '') + 'index.html', base).href;
}
