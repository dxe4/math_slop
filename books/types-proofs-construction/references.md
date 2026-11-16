
# References and Further Reading {#section-1-references-and-further-reading}

This bibliography identifies standard comparison texts, historical sources, and current research directions. The book is written under CC BY-SA 4.0; standard definitions and logical conventions belong to shared practice. References are included for further reading, historical context, alternative treatments, and broader coverage.

A named result or study is a retrieval convention, not a complete history. Logical ideas are often the product of long development across languages, institutions, and communities; a modern statement may differ sharply from an early source.

<a id="section-5-type-theory-and-lambda-calculus"></a>
## Type theory and lambda calculus {#section-7-type-theory-and-lambda-calculus}

- Barendregt, H. P. (1984). *The Lambda Calculus: Its Syntax and Semantics* (2nd ed.). North-Holland. The standard reference for untyped and simply typed lambda calculus, reduction strategies, and models.
- Girard, J.-Y. (1989). *Proofs and Types*, translated with appendices by P. Taylor and Y. Lafont. Cambridge University Press. A concise introduction to the Curry--Howard correspondence, proof nets, and System F.
- Pierce, B. C. (2002). *Types and Programming Languages*. MIT Press. A comprehensive treatment of type systems from a programming-languages perspective; the simply typed lambda calculus and its extensions are developed in full.
- Nordström, B., Petersson, K., & Smith, J. M. (1990). *Programming in Martin-Löf's Type Theory: An Introduction*. Oxford University Press. An introduction to dependent types, identity types, and the constructive logic of Martin-Löf type theory.

These texts use different notational conventions. Comparison is most useful when those conventions are recorded rather than blended.

<a id="section-14-constructive-mathematics-and-proof-theory"></a>
## Constructive mathematics and proof theory {#section-16-constructive-mathematics-and-proof-theory}

- Troelstra, A. S., & van Dalen, D. (1988). *Constructivism in Mathematics* (Vols. 1--2). North-Holland. The standard reference for intuitionistic logic, realizability, and constructive analysis.
- Troelstra, A. S., & Schwichtenberg, H. (2000). *Basic Proof Theory* (2nd ed.). Cambridge University Press. A comprehensive reference for sequent calculi, natural deduction, cut elimination, and ordinal analysis.
- Martin-Löf, P. (1984). "Intuitionistic type theory." *Notes by Giovanni Sambin of a series of lectures given in Padua, June 1980*. Bibliopolis. A lecture exposition of Martin-Löf type theory (lectures delivered in 1980 and published in 1984).

<a id="section-20-homotopy-type-theory-and-univalent-foundations"></a>
## Homotopy type theory and univalent foundations {#section-22-homotopy-type-theory-and-univalent-foundations}

- The Univalent Foundations Program. (2013). *Homotopy Type Theory: Univalent Foundations of Mathematics*. https://homotopytypetheory.org/book/. The project identifies the book as collectively written and published without a traditional publisher; it is freely available.

<a id="section-24-set-theory-and-choice"></a>
## Set theory and choice {#section-26-set-theory-and-choice}

- Jech, T. (2003). *Set Theory* (3rd millennium ed.). Springer. Encyclopedic coverage of axiomatic set theory, including forcing, large cardinals, and the axiom of choice.
- Kunen, K. (2011). *Set Theory*. College Publications. The standard reference for forcing, large cardinals, and combinatorial set theory.

<a id="section-29-historical-attribution-checklist"></a>
## Historical attribution checklist {#section-31-historical-attribution-checklist}

Every historical or priority claim should record:

1. a classification as contemporary exposition, secondary history, translated primary source, or primary source;
2. verified author, title, edition, publisher or archive, and stable locator;
3. a note explaining whether the citation supports provenance, formulation, evidence, example, or broader context;
4. a check that modern terminology is not projected unchanged backward;
5. careful comparison of primary sources for culturally broad claims and disputed priority.

<a id="section-39-reading-route-recommendations"></a>
## Reading-route recommendations {#section-41-reading-route-recommendations}

For a deeper treatment of type systems and programming languages, proceed to Pierce. For proof theory and cut elimination, continue into Troelstra and Schwichtenberg. For constructive mathematics and realizability, Troelstra and van Dalen treat choice principles and constructive analysis in depth. For dependent types and Martin-Löf type theory, Nordström--Petersson--Smith and Martin-Löf's 1980 lecture text are natural next steps. For homotopy type theory, the HoTT Book is the standard reference. For the lambda calculus, Barendregt is a standard source.

<a id="section-43-citation-policy-for-contributors"></a>
## Citation policy for contributors {#section-45-citation-policy-for-contributors}

Paraphrase sources and cite the job they perform. Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard. Direct quotations require exact locators and license or fair-use review. When sources disagree, record the disagreement. When provenance is unknown, label it unknown rather than inventing a clean lineage.


<a id="section-48-expanded-manuscript-sources"></a>
## Expanded manuscript sources {#section-50-expanded-manuscript-sources}

The sixteen-chapter plan retains all original Types, Proofs and Construction chapter IDs except that the classical-existence chapter is folded into the constructive-existence chapter and constructive reals into the choice chapter. Their old resource IDs are semantic aliases; the original source files remain. The complete formal source `lambda-calculus-types-and-proof-terms` is folded into the simple-type chapter; computing source `type-systems-proof-assistants` into the trust chapter. The logic sources `linear-logic` and `homotopy-type-theory` retain their chapter IDs with this parent. Source-owned aliases preserve the former resource identities. The complete reducibility argument and System F exposition are new; the inductive and Lean chapters are now authored. The Lean listings state expected results and have not been executed. Existing mathematical claims, hypotheses, examples, reference code and worked solutions are preserved in the folded text.

Benjamin C. Pierce, *Types and Programming Languages*, and the Univalent Foundations Program, *Homotopy Type Theory: Univalent Foundations of Mathematics*, are the commissioning comparison texts. The new System F chapter identifies its primary sources for cited parametricity and undecidability results; it does not claim their proofs.
