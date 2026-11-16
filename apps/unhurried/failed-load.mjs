import { LogicalURL, siteHref } from './base-path.mjs';
/** A read-only load failure; retry never submits learner work. */
export function createFailedLoad({ onRetry, nearestHref = '/', nearestLabel = 'Go to the home page', title = 'This page could not be loaded', detail = '', documentRoot = document } = {}) {
  if (typeof onRetry !== 'function' || typeof nearestHref !== 'string' || !nearestHref.startsWith('/') || nearestHref.startsWith('//') || /[\\\u0000-\u0020\u007f]/.test(nearestHref)) throw new TypeError('A safe retry and local destination are required.');
  const base = documentRoot.defaultView?.location?.href ?? 'http://euler.local/';
  const origin = new LogicalURL(base).origin, url = new LogicalURL(nearestHref, base);
  if (url.origin !== origin || url.username || url.password || url.pathname + url.search + url.hash !== nearestHref) throw new TypeError('Invalid local recovery destination.');
  if (!documentRoot.querySelector('link[data-euler-failed-load-style]')) {
    const stylesheet = documentRoot.createElement('link'); stylesheet.rel = 'stylesheet'; stylesheet.href = siteHref(new LogicalURL('./failed-load.css', import.meta.url).href);
    stylesheet.dataset.eulerFailedLoadStyle = ''; documentRoot.head.append(stylesheet);
  }
  const section = documentRoot.createElement('section'); section.className = 'euler-failed-load'; section.setAttribute('role', 'alert');
  const heading = documentRoot.createElement('h2'); heading.textContent = title;
  const description = documentRoot.createElement('p');
  description.textContent = (detail ? detail + ' ' : '') + (globalThis.navigator?.onLine === false ? 'You appear to be offline. Pages already open can still be used.' : 'Try again, or open another page.');
  const action = documentRoot.createElement('button'); action.type = 'button'; action.textContent = 'Try again';
  const link = documentRoot.createElement('a'); link.href = siteHref(nearestHref); link.textContent = nearestLabel;
  const status = documentRoot.createElement('p'); status.setAttribute('role', 'status'); status.setAttribute('aria-live', 'polite');
  action.addEventListener('click', async () => {
    action.disabled = true; status.textContent = 'Trying again…';
    try { await onRetry(); status.textContent = ''; }
    catch { status.textContent = globalThis.navigator?.onLine === false ? 'Still offline. Pages already open can still be used.' : 'Still unavailable. Try again or use the other page.'; }
    finally { action.disabled = false; }
  });
  section.append(heading, description, action, documentRoot.createTextNode(' '), link, status);
  return section;
}
