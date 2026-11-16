/** Public addresses are a projection; catalogue and learner identities stay unmounted. */
export function normalizeBasePath(value = '/') {
  if (typeof value !== 'string' || !/^\/(?:[A-Za-z0-9_-]+\/)*$/.test(value))
    throw new TypeError('EULER_BASE_PATH must be / or a path such as /euler/.');
  return value;
}

export function browserBasePath() {
  return normalizeBasePath(typeof document === 'undefined' ? '/' :
    document.documentElement.getAttribute('data-euler-base-path') ?? '/');
}

const staticExport = root => root?.documentElement?.getAttribute('data-euler-static-export') === 'true';
const partId = value => typeof value === 'string' && value.length <= 256 && /^[A-Za-z0-9][A-Za-z0-9_.:-]*$/.test(value);
function decodedPart(value) { try { const decoded = decodeURIComponent(value); return partId(decoded) ? decoded : null; } catch { return null; } }

// These finite document variants retain their semantic URL in every source packet.
function projectStaticAddress(url, inverse = false) {
  if (inverse) {
    const reader = /^(\/read\/[^/]+\/[^/]+\/)parts\/([^/]+)\/(?:index\.html)?$/.exec(url.pathname);
    if (reader && decodedPart(reader[2]) && !url.searchParams.has('eulerPage')) {
      url.pathname = reader[1]; url.searchParams.append('eulerPage', decodedPart(reader[2]));
    } else if (/^\/read\/[^/]+\/[^/]+\/index\.html$/.test(url.pathname)) url.pathname = url.pathname.slice(0, -'index.html'.length);
    else if (/^\/books\/[a-z0-9]+(?:-[a-z0-9]+)*\/introduction\.html$/.test(url.pathname)
      && !url.searchParams.has('introduction')) {
      url.pathname = url.pathname.slice(0, -'introduction.html'.length); url.searchParams.append('introduction', '1');
    } else if (/^\/programmes\/[a-z0-9]+(?:-[a-z0-9]+)*\/earlier\/(?:index\.html)?$/.test(url.pathname)
      && !url.searchParams.has('earlier')) {
      url.pathname = url.pathname.replace(/earlier\/(?:index\.html)?$/, ''); url.searchParams.append('earlier', '1');
    }
    return;
  }
  const page = url.searchParams.get('eulerPage');
  if (/^\/read\/[^/]+\/[^/]+\/$/.test(url.pathname) && url.searchParams.getAll('eulerPage').length === 1 && partId(page)) {
    url.pathname += 'parts/' + encodeURIComponent(page) + '/'; url.searchParams.delete('eulerPage');
  } else if (/^\/books\/[a-z0-9]+(?:-[a-z0-9]+)*\/$/.test(url.pathname)
    && !url.searchParams.has('eulerCourse') && !url.searchParams.has('eulerLesson')
    && url.searchParams.getAll('introduction').length === 1 && url.searchParams.get('introduction') === '1') {
    url.pathname += 'introduction.html'; url.searchParams.delete('introduction');
  } else if (/^\/programmes\/[a-z0-9]+(?:-[a-z0-9]+)*\/$/.test(url.pathname)
    && url.searchParams.getAll('earlier').length === 1 && url.searchParams.get('earlier') === '1') {
    url.pathname += 'earlier/'; url.searchParams.delete('earlier');
  }
}

export function siteHref(value, basePath = browserBasePath()) {
  const base = normalizeBasePath(basePath);
  if (typeof value === 'string' && /^https?:/.test(value) && typeof window !== 'undefined') {
    const url = new URL(value);
    if (url.origin === window.location.origin) return url.origin + siteHref(url.pathname + url.search + url.hash, base);
  }
  if (typeof value !== 'string' || !value.startsWith('/') || value.startsWith('//')) return value;
  if (staticExport(globalThis.document)) {
    const url = new URL(sitePath(value, base), 'http://euler.local');
    projectStaticAddress(url);
    value = url.pathname + url.search + url.hash;
  }
  if (base === '/') return value;
  if (value === base.slice(0, -1) || value.startsWith(base)) return value;
  return base.slice(0, -1) + value;
}

export function sitePath(value, basePath = browserBasePath()) {
  const base = normalizeBasePath(basePath);
  if (base === '/' || typeof value !== 'string') return value;
  if (value === base.slice(0, -1)) return '/';
  return value.startsWith(base) ? '/' + value.slice(base.length) : value;
}

/** Only root-relative code-owned fetches need mounting; relative reader assets keep their base. */
export function siteFetch(input, options) {
  return globalThis.fetch(input instanceof URL ? siteHref(input.href) : typeof input === 'string' ? siteHref(input) : input, options);
}

/** Authenticate a raw browser location before interpreting its source-owned packet. */
export function logicalSiteLocation(location, root = globalThis.document) {
  if (!location) return null;
  let url;
  try { url = new URL(location.href); } catch { return null; }
  const expectedOrigin = root?.defaultView?.origin ?? globalThis.window?.location?.origin ?? location.origin;
  if (!['http:', 'https:'].includes(url.protocol) || url.origin !== expectedOrigin || url.username || url.password) return null;
  const base = normalizeBasePath(root?.documentElement?.getAttribute('data-euler-base-path') ?? '/');
  // A LogicalURL is already an internal logical address; raw Location/URL values must belong to this mount.
  if (!(location instanceof LogicalURL) && base !== '/' && !url.pathname.startsWith(base)) return null;
  url.pathname = sitePath(url.pathname, base);
  if (staticExport(root)) projectStaticAddress(url, true);
  return url;
}

/** Advisory course-bar fields never authenticate a source-owned route packet.
 * Keep all other query bytes, including native mathematical state, unchanged. */
export function withoutCourseContext(value, base) {
  const url = new LogicalURL(value, base);
  const fields = url.search.slice(1).split('&').filter(field => {
    let name;
    try { name = decodeURIComponent(field.split('=', 1)[0].replace(/\+/g, ' ')); } catch { return true; }
    return name !== 'course' && name !== 'step';
  });
  url.search = fields.join('&');
  return url;
}

/** Routing works in the same logical address space as source-owned route packets. */
export class LogicalURL extends URL {
  constructor(value, base) {
    super(value, base);
    if (typeof window !== 'undefined' && this.origin === window.location.origin) {
      this.pathname = sitePath(this.pathname);
      if (staticExport(globalThis.document)) projectStaticAddress(this, true);
    }
  }
}
