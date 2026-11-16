var e=`---
parent_id: book-discrete-combinatorial-structures
matter_id: references-attribution-guide
title: "References and Attribution Guide"
level: graduate
license: CC BY-SA 4.0
production_state: drafting
---

# References and Attribution Guide {#section-1-references-and-attribution-guide}

This source guide gives reading routes and bibliographic editions. Chapter-level source locators are limited to those explicitly stated here. Listing or recommending a source does not grant permission to copy its prose, exercises, solution structures, figures, tables, or other protected expression; reuse requires an applicable license or permission, and attribution alone is not a substitute.

<a id="section-3-attribution-rules"></a>
## Attribution rules {#section-5-attribution-rules}

1. Cite a source for a theorem's history only after checking that source's wording and scope. A conventional name is a locator, not proof of priority.
2. Prefer primary papers for priority claims and authoritative monographs for modern theorem statements. When priority is disputed or distributed, describe the development without declaring a sole inventor.
3. Reprove results in the manuscript's conventions. A citation does not discharge a missing hypothesis, equality case, field restriction, or graph convention.
4. Put quotation marks around verbatim language and keep quotations short. Record edition and page in editorial notes; paraphrase only after understanding the source.
5. Do not copy exercises, distinctive example sequences, diagrams, tables, or solution structures. Create independent examples and retain a provenance note.
6. Distinguish a source consulted for fact-checking from a source recommended for further study. The final bibliography should not imply direct use that did not occur.
7. Check names, diacritics, title capitalization, edition, publisher, year, DOI, and stable URL in one bibliography authority file before production.

<a id="section-13-claim-boundary-checklist"></a>
## Claim-boundary checklist {#section-15-claim-boundary-checklist}

Matroid results require finiteness when the proof uses finite extension, a named axiom system, and clear ground-set conventions. Representability claims name the field and distinguish “this matrix fails” from “no representation exists.” Graphic/cographic claims distinguish abstract matroid duality from a graph dual under a fixed plane embedding. Connectivity claims state the separation convention.

Extremal graph results state simple versus multi-graph hypotheses and distinguish bound, equality, and stability. Ramsey claims distinguish upper bounds from constructive or probabilistic lower bounds. Probability claims identify the exact independence assumption. Compression claims prove preservation for the selected property. Design parameter equations are presented as necessary unless an existence theorem is separately established. Exact computations state their finite domain and coverage proof.

<a id="section-19-reference-families-by-chapter-route"></a>
## Reference families by chapter route {#section-21-reference-families-by-chapter-route}

The entries below are reading routes selected for breadth and depth. Their normalized identities and stable links appear in the audited ledger at the end of this guide.

<a id="section-23-overview-and-cumulative-navigation"></a>
### Overview and cumulative navigation {#section-25-overview-and-cumulative-navigation}

Use the broad matroid, graph, extremal, probability, design, and optimization
references below when auditing \`structural-reference-seed\`. That overview
deliberately compresses several fields, so no single blanket citation should be
made to support all of it. Attach each nonroutine theorem contract to the
field-specific source that matches its hypotheses, and treat the overview's
worked counterexamples as independently checkable examples rather than as
historical evidence.

For \`theorem-index-solutions\`, trace every theorem key back to its home chapter
and then to the corresponding reference family below. Its dependency arrows and
claim-boundary records are editorial synthesis; validate them against the home
proofs rather than citing a monograph as though it contained this manuscript's
index. Its synthesis problems and solutions remain subject to the same
independent-authorship and no-copying rules as chapter exercises.

<a id="section-40-foundations-matroids-and-cryptomorphisms"></a>
### Foundations, matroids, and cryptomorphisms {#section-42-foundations-matroids-and-cryptomorphisms}

- James Oxley, *Matroid Theory*, second edition, Oxford University Press, 2011. Broad modern reference for independence, bases, rank, circuits, closure, duality, minors, connectivity, representability, and graphic matroids.
- D. J. A. Welsh, *Matroid Theory*, Academic Press, 1976. Classical structural reference useful for terminology and historical comparison.
- Henry H. Crapo and Gian-Carlo Rota, *On the Foundations of Combinatorial Theory: Combinatorial Geometries*, MIT Press, 1970. Foundational geometric viewpoint; terminology should be reconciled with the present rank-and-flat conventions.
- Neil White, editor, *Theory of Matroids*, Cambridge University Press, 1986. Specialist chapters and bibliographic routes; consult individual chapter authorship when citing a result.

These sources support \`independence-augmentation-cryptomorphisms\`, \`bases-strong-exchange\`, \`rank-submodularity-flats\`, \`circuits-elimination-orthogonality\`, \`deletion-contraction-minors\`, and \`duality-sums-connectivity\`. The manuscript should cite exact theorem locations for strong exchange, connectivity convention, or a less standard cryptomorphism rather than attaching one blanket citation to a section.

<a id="section-49-graphs-algorithms-and-combinatorial-optimization"></a>
### Graphs, algorithms, and combinatorial optimization {#section-51-graphs-algorithms-and-combinatorial-optimization}

- Reinhard Diestel, *Graph Theory*, fifth edition, Springer, 2017. Graph foundations, connectivity, minors, extremal topics, and precise graph conventions.
- Béla Bollobás, *Modern Graph Theory*, Springer, 1998. Broad graph-theoretic context, including extremal and probabilistic viewpoints.
- Chris Godsil and Gordon Royle, *Algebraic Graph Theory*, Springer, 2001. Algebraic and incidence perspectives useful near graphic representations and designs.
- Alexander Schrijver, *Combinatorial Optimization: Polyhedra and Efficiency*, Springer, 2003. Authoritative large reference for matroids, greedy optimization, matching, polyhedra, and algorithms.
- Bernhard Korte and Jens Vygen, *Combinatorial Optimization: Theory and Algorithms*, sixth edition, Springer, 2018. Algorithmic route through greedy methods, matroids, matching, and optimization contracts.

Use these around \`graphic-cographic-matroids\`, \`uniform-partition-transversal\`, \`weighted-greedy-objectives\`, and \`basis-exchange-geometry\`. A graph theorem and its matroid translation may need separate citations; a plane-dual result must not be cited as an abstract-duality theorem without explanation.

<a id="section-59-extremal-ramsey-and-probabilistic-combinatorics"></a>
### Extremal, Ramsey, and probabilistic combinatorics {#section-61-extremal-ramsey-and-probabilistic-combinatorics}

- Béla Bollobás, *Extremal Graph Theory*, Academic Press, 1978. Classical extremal graph reference.
- Stasys Jukna, *Extremal Combinatorics: With Applications in Computer Science*, second edition, Springer, 2011. Proof methods, set systems, and computationally relevant extremal viewpoints.
- Noga Alon and Joel H. Spencer, *The Probabilistic Method*, fourth edition, Wiley, 2016. First moment, alteration, concentration, dependency, and local-lemma methods.
- Ronald L. Graham, Bruce L. Rothschild, and Joel H. Spencer, *Ramsey Theory*, second edition, Wiley, 1990. Specialist reference for Ramsey definitions, recurrences, constructions, and historical routes.
- Peter Frankl and Norihide Tokushige, *Extremal Problems for Finite Sets*, American Mathematical Society, 2018. Specialist source for intersecting families and extremal set systems.

These are candidates for \`turan-symmetrization-stability\`, \`ramsey-forcing-bounds\`, \`probabilistic-alteration-dependence\`, and \`extremal-set-compression\`. A final attribution pass should distinguish original theorem names from modern proof architectures. In particular, the label “Turán” is conventional terminology here, not a standalone priority claim; symmetrization and stability statements each need their own source audit.

<a id="section-69-designs-and-incidence-structures"></a>
### Designs and incidence structures {#section-71-designs-and-incidence-structures}

- J. H. van Lint and R. M. Wilson, *A Course in Combinatorics*, second edition, Cambridge University Press, 2001. Broad reference for designs, finite incidence structures, coding connections, extremal sets, and graph topics.
- Douglas R. Stinson, *Combinatorial Designs: Constructions and Analysis*, Springer, 2004. Design parameters, constructions, resolvability, incidence methods, and existence questions.
- Peter J. Cameron, *Combinatorics: Topics, Techniques, Algorithms*, Cambridge University Press, 1994. Accessible bridge among designs, groups, graphs, and algorithms.

These support \`designs-incidence-representability\` and its connections to \`linear-representability-fields\`. The final text must not cite parameter divisibility as an existence theorem, and field-specific incidence rank statements need a source matching the exact coefficient field.

<a id="section-77-general-background-and-exact-practice"></a>
### General background and exact practice {#section-79-general-background-and-exact-practice}

- Martin Aigner, *Combinatorial Theory*, Springer, 1979. General structural background and proof methods.
- Ronald L. Graham, Donald E. Knuth, and Oren Patashnik, *Concrete Mathematics*, second edition, Addison-Wesley, 1994. Supporting binomial identities, recurrences, and finite sums.

For \`exact-axiom-enumeration\` and \`structural-investigations\`, mathematical correctness depends primarily on a complete specification and inspectable certificates. Software, datasets, or external catalogs used in a future implementation need versioned citations, licenses, retrieval dates, and checksums in addition to mathematical references.

<a id="section-84-conventional-names-requiring-careful-notes"></a>
## Conventional names requiring careful notes {#section-86-conventional-names-requiring-careful-notes}

The manuscript uses established search labels including Hall-type matching conditions, Turán-type extremal results, Ramsey numbers, the Tutte polynomial, and local-dependence lemmas. Before release, each historical note should answer: What exact statement is being named? Is the manuscript proving a special case? Is the modern formulation later than the originating paper? Does an eponym obscure multiple contributors? If the answers are not settled, retain the conventional mathematical label and omit a priority narrative.

“Matroid,” “cryptomorphism,” “Fano configuration,” “uniform matroid,” “transversal matroid,” and related structural terms also have histories. Definitions can use conventional terms without an origin claim, while a sentence about who introduced them requires verified evidence.

<a id="section-90-chapter-level-source-ledger-template"></a>
## Chapter-level source ledger template {#section-92-chapter-level-source-ledger-template}

For each chapter, maintain an editorial record with:

| Field | Required content |
|---|---|
| Chapter ID | stable manuscript ID |
| Claim key | theorem/definition/example identifier |
| Source | complete candidate citation |
| Locator | theorem, section, and verified page for the cited edition |
| Use | mathematical check, history, terminology, or further reading |
| Scope match | field, finiteness, graph class, equality, and convention comparison |
| Originality check | independently written proof/example/exercise confirmed |
| Review | reviewer and date |

No blank locator should silently become a release citation. If a theorem is proved self-containedly and no historical statement is made, a further-reading citation can remain section-level, but the bibliography must still be accurate.

<a id="section-107-accessibility-rights-and-artifacts"></a>
## Accessibility, rights, and artifacts {#section-109-accessibility-rights-and-artifacts}

Reference links must use meaningful titles rather than “click here.” DOI and URL text should remain available in an accessible bibliography export. Any future figure adapted from a source needs a textual alternative, a specific credit line, and documented license or permission; redrawing does not automatically remove the obligation. Tables of external enumeration counts need machine-readable data, provenance, and a checksum.

<a id="section-111-current-status"></a>
## Current status {#section-113-current-status}

The 19 bibliographic identities and stable links have completed a bounded metadata audit. Primary-source priority research, unrecorded page-level verification, rights clearance, proof review, qualified human review, and release authorization remain unresolved production gates.

<a id="section-115-audited-bibliographic-identities"></a>
## Bibliographic editions {#section-117-audited-bibliographic-identities}

This metadata audit checked all 19 records against the linked publisher, society, or institutional identity records on 2026-09-06. It establishes bibliographic identity, not historical priority, proof correctness, rights clearance, human review, or which pagination-bearing copy an author consulted. Use the linked edition before adding page or theorem locators.

- **James Oxley, Matroid Theory, 2nd ed., Oxford University Press, 2011.** [Primary identity record](https://doi.org/10.1093/acprof:oso/9780198566946.001.0001). - **D. J. A. Welsh, Matroid Theory, Academic Press, 1976.** [Primary identity record](https://www.sciencedirect.com/book/9780127440507/matroid-theory). - **Henry H. Crapo and Gian-Carlo Rota, On the Foundations of Combinatorial Theory: Combinatorial Geometries, Preliminary Edition, MIT Press, 1970.** [Primary identity record](https://mitpress.mit.edu/9780262530163/on-the-foundations-of-combinatorial-theory/). - **Neil White, ed., Theory of Matroids, Cambridge University Press, 1986.** [Primary identity record](https://doi.org/10.1017/CBO9780511629563). - **Reinhard Diestel, Graph Theory, 5th ed., Springer, 2017.** [Primary identity record](https://doi.org/10.1007/978-3-662-53622-3). - **Béla Bollobás, Modern Graph Theory, Springer, 1998.** [Primary identity record](https://doi.org/10.1007/978-1-4612-0619-4). - **Chris Godsil and Gordon Royle, Algebraic Graph Theory, Springer, 2001.** [Primary identity record](https://doi.org/10.1007/978-1-4613-0163-9). - **Alexander Schrijver, Combinatorial Optimization: Polyhedra and Efficiency, 3 vols., Springer, 2003.** [Primary identity record](https://link.springer.com/book/9783540443896). - **Bernhard Korte and Jens Vygen, Combinatorial Optimization: Theory and Algorithms, 6th ed., Springer, 2018.** [Primary identity record](https://doi.org/10.1007/978-3-662-56039-6). - **Béla Bollobás, Extremal Graph Theory, Academic Press, 1978.** [Primary identity record](https://www.sciencedirect.com/book/9780121117504/extremal-graph-theory). - **Stasys Jukna, Extremal Combinatorics: With Applications in Computer Science, 2nd ed., Springer, 2011.** [Primary identity record](https://doi.org/10.1007/978-3-642-17364-6). - **Noga Alon and Joel H. Spencer, The Probabilistic Method, 4th ed., Wiley, 2016.** [Primary identity record](https://doi.org/10.1002/9781119061953). - **Ronald L. Graham, Bruce L. Rothschild, and Joel H. Spencer, Ramsey Theory, 2nd ed., Wiley, 1990, ISBN 978-0-471-50046-9.** [Primary identity record](https://www.wiley-vch.de/en/areas-interest/mathematics-statistics/mathematics-16ma/discrete-mathematics-16ma9/ramsey-theory-978-0-471-50046-9). - **Peter Frankl and Norihide Tokushige, Extremal Problems for Finite Sets, American Mathematical Society, 2018.** [Primary identity record](https://bookstore.ams.org/view?ProductCode=STML%2F86). - **J. H. van Lint and R. M. Wilson, A Course in Combinatorics, 2nd ed., Cambridge University Press, 2001.** [Primary identity record](https://doi.org/10.1017/CBO9780511987045). - **Douglas R. Stinson, Combinatorial Designs: Constructions and Analysis, Springer, 2004.** [Primary identity record](https://doi.org/10.1007/b97564). - **Peter J. Cameron, Combinatorics: Topics, Techniques, Algorithms, Cambridge University Press, 1994.** [Primary identity record](https://doi.org/10.1017/CBO9780511803888). - **Martin Aigner, Combinatorial Theory, Springer, 1979.** [Primary identity record](https://doi.org/10.1007/978-1-4615-6666-3). - **Ronald L. Graham, Donald E. Knuth, and Oren Patashnik, Concrete Mathematics: A Foundation for Computer Science, 2nd ed., Addison-Wesley, 1994.** [Primary identity record](https://www.pearson.com/en-us/subject-catalog/p/concrete-mathematics-a-foundation-for-computer-science/P200000000288/9780201558029).
`;export{e as default};