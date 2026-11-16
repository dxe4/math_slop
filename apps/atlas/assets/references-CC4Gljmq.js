var e=`---
parent_id: book-topics-in-combinatorics
matter_id: references
title: "Sources and Further Reading"
license: CC BY-SA 4.0
---

# Sources and Further Reading

The explanations, worked cases and exercise sequence are written for this
book under roadmap tasks 13.A25–A26. The scope benchmarks are Philippe
Flajolet and Robert Sedgewick, *Analytic Combinatorics*, and Noga Alon
and Joel H. Spencer, *The Probabilistic Method*. They identify the
surrounding curriculum, not text or exercise sequences reproduced here.

The earlier Quarto Combinatorics readings on analytic combinatorics,
hypergraphs, additive combinatorics, geometric/polyhedral methods and
pseudorandom graphs remain in their original collection. This book rewrites
those entry points and develops new proofs; their files, examples,
solutions and identities have not been removed. The L3 algebraic
enumeration chapter also remains in the primary Combinatorics route.

For deeper enumerative and symmetric-function continuations, Richard P.
Stanley's *Enumerative Combinatorics*, volumes one and two, provides
primary textbook treatments. The present text proves its determinant,
tableau and character statements directly; the complete irreducible
classification and further product rules are separate continuations.

The additive growth proof uses the minimal-expansion method associated
with Giorgis Petridis, *New proofs of Plünnecke-type estimates for
product sets in groups*. Here its finite abelian form is proved,
including the subset expansion lemma and the mixed difference bound.
It is not presented as a proof of a general inverse theorem.

Endre Szemerédi's *Regular partitions of graphs* is the primary
regularity source. Fan R. K. Chung, Ronald L. Graham and Richard M.
Wilson, *Quasi-random graphs*, develops the equivalent dense statistics.
This book supplies its own equitable energy-increment and four-cycle
arguments with the chosen finite normalizations stated explicitly.

For polyhedral continuations, Alexander Schrijver, *Theory of Linear
and Integer Programming*, and Matthias Beck and Sinai Robins,
*Computing the Continuous Discretely*, develop linear and lattice
methods beyond the proved finite-cone, total-unimodularity and simplex
results here. A general triangulation or reciprocity theorem requires
its own geometric hypotheses and proof.

Jaikumar Radhakrishnan, *An entropy proof of Bregman's theorem*, is a
primary source for the random-row-order argument. The finite entropy
inequalities, projection bounds and permanent estimate used here are
proved in the entropy chapter.

The uniform-hypergraph container theorem in Chapter 12 is an expressly
imported input. Its primary sources are David Saxton and Andrew
Thomason, *Hypergraph containers*, and József Balogh, Robert Morris
and Wojciech Samotij, *Independent sets in hypergraphs*. Those papers
supply the higher-uniformity proof behind the sufficient maximum-codegree
form stated here. The chapter proves the graph fingerprint case,
triangle encoding, codegree calculation, supersaturation inequality and
counting application separately, without claiming that the graph
algorithm proves the imported theorem.

A named reference provides provenance and further reading. It does not
certify this manuscript or relicense that source. Claims proved locally
have their argument in the chapter; a cited continuation remains a
separate input with an identified scope.
`;export{e as default};