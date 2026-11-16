/** Small deterministic local search: every query term must match the article. */
export const normalizeSearch = value => String(value ?? '').normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase();
export function rankArticles(records, query = '', filters = {}) {
  const terms = normalizeSearch(query).trim().split(/\s+/).filter(Boolean);
  return records.map((record, order) => {
    if (filters.topic && record.topicId !== filters.topic) return null;
    if (filters.level && record.level !== filters.level) return null;
    if (Number.isFinite(filters.time) && (!Number.isFinite(record.minutes) || record.minutes > filters.time)) return null;
    if (!terms.length) return {record,score:0,order};
    const title=normalizeSearch(record.title),summary=normalizeSearch(record.summary),topic=normalizeSearch(record.topic);
    const text=normalizeSearch([record.text,record.title,record.summary,record.topic,...(record.prerequisites||[])].join(' '));
    if (!terms.every(term=>text.includes(term))) return null;
    const score=terms.reduce((total,term)=>total+(title.includes(term)?12:summary.includes(term)?5:topic.includes(term)?3:1),0);
    return {record,score,order};
  }).filter(Boolean).sort((a,b)=>b.score-a.score||a.order-b.order).map(item=>item.record);
}
