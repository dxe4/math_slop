var e=`---
parent_id: book-mathematical-toolkit
chapter_id: literature-search
title: "Literature Search"
level: foundation
estimated_minutes: 150
license: CC BY-SA 4.0
---

# Literature Search

No mathematician works in isolation. Every new result builds on prior work, and every problem has been approached---or at least approximated---by someone before. The ability to find, evaluate, and synthesize existing literature is as fundamental as the ability to prove theorems. A literature search is not a Google query followed by downloading the first PDF. It is a structured process with defined goals, search strategies, and evaluation criteria.

This chapter introduces the tools and habits needed to locate relevant mathematical literature efficiently and to judge its reliability and relevance.

## Defining the search problem

Before opening a database, clarify what you need. A vague goal like "read about graph theory" produces an unmanageable flood. A precise goal like "find characterizations of planar graphs that avoid Kuratowski's theorem" focuses the search.

State your search problem in four parts:

1. **The mathematical object:** What structure, function, equation, or space are you studying?
2. **The operation or property:** What do you want to know about it? Existence, classification, algorithm, bound, asymptotic behavior?
3. **The context:** Pure mathematics, applied modeling, numerical computation, education?
4. **The intended use:** Building a literature review, finding a proof technique, locating a counterexample, checking novelty?

## Search tools and databases

### MathSciNet and zbMATH

MathSciNet (American Mathematical Society) and zbMATH Open are specialist bibliographic databases for mathematics. They are secondary discovery and review tools that index journal articles, books, and conference proceedings with Mathematical Subject Classification (MSC) codes, abstracts, and citation links.

**Search strategy:**
- Start with MSC codes rather than keywords when possible. The code 05C10, for example, covers topological graph theory including planarity.
- Use author searches to find the main contributors to a subfield.
- Follow citation links forward (who cited this?) and backward (what did this cite?).

### arXiv

The arXiv preprint server contains recent work, often months or years before formal publication. It is free and searchable by subject category, keyword, and author.

**Caution:** Posting on arXiv does not certify peer review: arXiv moderation is not peer review. An individual manuscript may also have a journal publication, so check its version history, journal reference or DOI, and the venue record before describing a particular version as refereed. See arXiv's moderation guidance: https://info.arxiv.org/help/moderation/index.html.

### Google Scholar

Google Scholar casts a wider net, including theses, lecture notes, and interdisciplinary work. It is useful for finding expository articles, survey papers, and references outside pure mathematics.

**Caution:** Coverage, version merging, and citation-linking rules differ across services. Record the service and access date, inspect the citing records, and state the population being counted before interpreting or comparing a citation count.

### JSTOR and institutional repositories

For older work and historical context, JSTOR provides digitized journal archives. University institutional repositories often host theses and preprints not available elsewhere.

## Evaluating sources

Not everything indexed is worth reading. Apply these criteria:

### Peer review

Has the paper appeared in a journal with a recognized editorial board and refereeing process? Preprints, blog posts, and self-published notes bypass this filter.

### Citation patterns

A highly cited paper is usually influential, but citation count alone does not measure correctness. A paper may be cited frequently because it introduced a useful technique, because it contains a famous error, or because it sits at a busy intersection of fields.

### Author reputation

Established researchers in a field have incentives to maintain accuracy, but newcomers may produce equally valuable work. Do not dismiss a source solely because the author is unknown to you.

### Self-consistency

Does the paper's abstract match its conclusions? Are the definitions standard, or are they redefined in ways that change the meaning of the theorems? Does the proof structure make sense at the level of detail provided?

## Reading a paper efficiently

Mathematical papers are dense. Reading one linearly from start to finish is usually inefficient. Use a layered approach:

1. **Abstract and introduction:** What is claimed? What is the context?
2. **Definitions and notation:** What objects are being studied? Are they familiar or exotic?
3. **Main theorems:** What are the exact hypotheses and conclusions?
4. **Proof sketches:** How do the authors approach the problem? Is the method novel or standard?
5. **Examples and counterexamples:** Do they illuminate the theorem's boundaries?
6. **References:** What prior work is most relevant to your goal?

Only after this scan should you read proofs in detail. Many papers contain sections irrelevant to your specific question; skip them without guilt.

## Tracking and organizing findings

A search produces a collection of references, notes, and half-formed ideas. Organize them systematically:

- **Bibliography file:** Use BibTeX or BibLaTeX format. Every entry should include author, title, journal, year, and DOI or URL.
- **Annotation file:** For each paper, record the main result, its relevance to your project, and any questions it raises.
- **Search log:** Record which databases you searched, which queries you used, and what you found. This prevents redundant searches and helps you refine your strategy.

## Common errors in literature search

### The single-source fallacy

Relying on one paper or one author for an entire topic produces a narrow and potentially biased view. Consult multiple sources, especially review articles that synthesize a field.

### The recency bias

Recent papers are easier to find and often more exciting, but foundational work from decades earlier may contain the clearest exposition or the most general result.

### The authority fallacy

A famous name does not guarantee correctness. Even distinguished mathematicians make errors, and even correct theorems may be misapplied.

### The confirmation bias

Searching only for results that support your conjecture ignores the possibility that it is false or known to be open. Search for counterexamples and negative results as well.

## Practice exercises

### Exercise 1
You need to learn about the probabilistic method in combinatorics. Name two search strategies: one using MSC codes and one using keyword searches. Which databases would you use for each?

### Exercise 2
A paper on arXiv claims to prove the Riemann Hypothesis. List three specific checks you would perform before investing time in reading the proof.

### Exercise 3
You find two papers with contradictory theorems about the same class of graphs. Outline a systematic process for determining which result (if either) you should trust.

### Exercise 4
Explain why a paper with $500$ citations might still be unreliable for your specific purpose.

### Exercise 5
Design a BibTeX entry for a hypothetical journal article. Include all required fields and explain why each matters.

### Exercise 6
You are writing a thesis chapter and need to cite a result that appears in a textbook, a lecture note PDF, and the original $1950$ journal article. Which source should you prioritize, and why?

## Solutions

**Solution 1.** Using MSC codes: search MathSciNet or zbMATH for code 05C80 (random graphs) or 05D40 (probabilistic methods). Using keywords: search Google Scholar or arXiv for "probabilistic method combinatorics" or "Erdos probabilistic method." Use MathSciNet or zbMATH for specialist MSC-based retrieval; use Google Scholar for broader cross-disciplinary discovery, then inspect the records and record the service and access date.

**Solution 2.**
1. Check whether the author has a history of credible work in analytic number theory.
2. Search MathSciNet and zbMATH for any published version; if none exists after a reasonable time, the claim is unvetted.
3. Look for expert commentary on math blogs, MathOverflow, or social media; the mathematical community often discusses extraordinary claims quickly.

**Solution 3.**
1. Verify that both papers use the same definitions; contradictory theorems often stem from incompatible definitions.
2. Check the hypotheses carefully; one result may apply to a narrower class of graphs.
3. Look for peer review status; a refereed paper has survived independent scrutiny.
4. Search for subsequent papers that cite both; the literature may have resolved the conflict.
5. Attempt to reproduce the simpler proof yourself; errors often appear under close reading.

**Solution 4.** Citation count measures influence, not correctness or relevance. The paper might be cited because it introduced a technique widely used in unrelated areas. It might contain a famous error that generated follow-up work. It might be too general for your specific question, or its hypotheses might not match your setting.

**Solution 5.**

\`\`\`bibtex
@article{smith2024planar,
  author  = {Smith, Jane and Doe, John},
  title   = {A New Characterization of Planar Graphs},
  journal = {Journal of Graph Theory},
  year    = {2024},
  volume  = {95},
  number  = {3},
  pages   = {201--215},
  doi     = {10.1002/jgt.12345}
}
\`\`\`

- \`author\`: identifies who is responsible for the work.
- \`title\`: describes the content.
- \`journal\`: indicates the venue and its refereeing standards.
- \`year\`: places the work in historical context.
- \`volume\`, \`number\`, \`pages\`: allow precise retrieval.
- \`doi\`: provides a persistent digital identifier.

**Solution 6.** For provenance, inspect and cite the original $1950$ journal article with an exact locator. For the modern statement or proof actually used, also cite an authoritative modern source: terminology and hypotheses may have changed, and publication does not by itself guarantee correctness. A textbook may supply the clearest modern formulation; lecture notes may be useful discovery aids, but their version and review status must be checked rather than inferred. Match each citation to the job it performs.

## Looking backward and forward

This chapter extended the reading and writing skills from earlier chapters into the domain of finding and evaluating external sources. The disciplined search process---define the problem, choose the tools, evaluate the results, organize the findings---mirrors the structured reasoning we apply to proofs. In the next chapter, *Collaboration Tools*, we examine how to work with other mathematicians to produce and refine shared mathematical artifacts.
`;export{e as default};