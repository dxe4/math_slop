export const REPORT_KINDS = Object.freeze({
  explanation:'An explanation was confusing',
  mathematics:'A mathematical claim or answer may be wrong',
  access:'Reading or using the page was difficult',
  typo:'A typo or broken link',
});

export function resolveReportPage(raw, origin, pages) {
  if (typeof raw !== 'string' || !raw.trim()) return null;
  try {
    const url = new URL(raw.trim(), origin);
    if (url.origin !== origin || url.username || url.password) return null;
    const path = url.pathname.endsWith('/') ? url.pathname : url.pathname + '/';
    return pages.find(page => page.path === path) || null;
  } catch { return null; }
}

export function prepareReport(fields, origin, pages) {
  const page = resolveReportPage(fields.page, origin, pages);
  const errors = {};
  if (!page) errors.page = 'Choose a page from this library. You can paste its local address or path.';
  if (!Object.hasOwn(REPORT_KINDS, fields.kind)) errors.kind = 'Choose the kind of problem you noticed.';
  const section = page?.sections.find(item => item.id === fields.section);
  if (fields.section && !section) errors.section = 'Choose a section from this page, or choose the whole page.';
  const description = typeof fields.description === 'string' ? fields.description.trim() : '';
  if (!description) errors.description = 'Describe what you noticed. A short question is enough.';
  else if (description.length > 5000) errors.description = 'Keep the description to 5,000 characters or fewer.';
  const context = typeof fields.context === 'string' ? fields.context.trim() : '';
  if (context.length > 1000) errors.context = 'Keep the optional reading setup to 1,000 characters or fewer.';
  if (Object.keys(errors).length) return {errors};
  const path = page.path + (section ? '#' + section.id : '');
  const text = [
    'Maths, Unhurried — reader report',
    'Prepared locally; not submitted.',
    '',
    `Page: ${page.title}`,
    `Path: ${path}`,
    `Section: ${section?.title || 'Whole page / not sure'}`,
    `Kind: ${REPORT_KINDS[fields.kind]}`,
    '',
    'What I noticed:',
    description,
    ...(context ? ['', 'Reading setup (provided by the reader):', context] : []),
    '',
  ].join('\n');
  return {errors:{}, text, path};
}
