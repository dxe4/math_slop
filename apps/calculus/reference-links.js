// Authored reference identities map to fixed destinations; imported note URLs
// never participate in this table.
const readings = Object.freeze({
  'calculus:04': '/books/calculus-course/calculus-04/',
  'calculus:05': '/books/calculus-course/calculus-05/',
  'calculus:06': '/books/calculus-course/calculus-06/',
  'calculus:07': '/books/calculus-course/calculus-07/',
  'calculus:08': '/books/calculus-course/calculus-08/',
  'calculus:09': '/books/calculus-course/calculus-09/',
  'calculus:10': '/books/calculus-course/calculus-10/',
  'calculus:11': '/books/calculus-course/calculus-11/',
  'calculus:12': '/books/calculus-course/calculus-12/',
  'calculus:13': '/books/calculus-course/calculus-13/',
  'calculus:14': '/books/calculus-course/calculus-14/',
  'calculus:15': '/books/calculus-course/calculus-15/',
  'calculus:16': '/books/calculus-course/calculus-16/',
  'calculus:17': '/books/calculus-course/calculus-17/',
  'lucent:linear-algebra': '/books/lucent-linear-algebra/',
  'library:book-ode-first-course': '/books/library-book-ode-first-course/',
  'library:book-proof-safe-real-analysis:inverse-implicit-function-theorems': '/books/library-book-proof-safe-real-analysis/inverse-implicit-function-theorems/',
});
const sources = new Set([
  'https://www.math.ucla.edu/~tao/preprints/forms.pdf',
  'https://math.stanford.edu/~conrad/diffgeomPage/handouts/stokesthm.pdf',
  'https://link.springer.com/chapter/10.1007/978-1-4419-9982-5_16',
  'https://www.jirka.org/ra/html/sec_svinvfuncthm.html',
]);
const label = value => typeof value === 'string' && value.trim().length > 0 && value.length <= 2000 && !/[\u0000-\u001f\u007f]/.test(value);
const exact = (value, keys) => value && typeof value === 'object' && !Array.isArray(value)
  && Object.keys(value).length === keys.length && keys.every(key => Object.hasOwn(value, key));
export function chapterReferences(chapter) {
  const links = chapter.readingLinks ?? [], citations = chapter.sources ?? [];
  if (!Array.isArray(links) || links.length > 20 || !Array.isArray(citations) || citations.length > 20) throw new TypeError('Invalid chapter references.');
  const reading = links.map(item => {
    if (!exact(item, ['resourceId', 'label']) || !Object.hasOwn(readings, item.resourceId) || !label(item.label)) throw new TypeError('Unknown chapter reading.');
    return { label: item.label, href: readings[item.resourceId] };
  });
  const primary = citations.map(item => {
    if (!exact(item, ['title', 'href']) || !label(item.title) || !sources.has(item.href)) throw new TypeError('Unknown chapter source.');
    return { label: item.title, href: item.href };
  });
  return { reading, primary };
}
