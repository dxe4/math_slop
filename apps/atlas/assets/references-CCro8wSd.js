var e=`---
parent_id: book-algebraic-geometry
matter_id: references
title: "References and Proof Boundaries"
license: CC BY-SA 4.0
---

# References and Proof Boundaries

This is original Euler exposition for roadmap13 C26–C27. Hartshorne and Vakil are commissioned scope benchmarks. Naming them does not claim that a proof has been independently checked against either text. The first chapter uses actual earlier Euler preparation: radicals, Hilbert's basis theorem, Zariski's lemma and both Nullstellensatz forms are proved in [Commutative Algebra](../../commutative-algebra.md). Its topology, irreducibility, decomposition and worked coordinate arguments are developed in the new chapter.

- Robin Hartshorne, *Algebraic Geometry*, Graduate Texts in Mathematics 52, Springer, 1977. Chapter I is the classical-variety comparison; Chapters II–III develop schemes and cohomology; Chapter IV develops curves. This is a scope comparison, not an exact locator for an unstated theorem import.
- Ravi Vakil, *The Rising Sea: Foundations of Algebraic Geometry*. The commissioned pedagogical comparison is the development from local algebra and sheaves to schemes. A particular online edition or theorem must be identified at its actual use before being treated as a precise imported result.
- M. F. Atiyah and I. G. Macdonald, *Introduction to Commutative Algebra*, Addison-Wesley, 1969. Comparison for the local algebra prepared in the separate Euler volume.
- Charles A. Weibel, *An Introduction to Homological Algebra*, Cambridge University Press, 1994. Comparison for the exactness and derived-functor preparation in the separate Euler Homological Algebra volume.

The curve proof uses the actual nondegenerate finite separable trace-pairing theorem in [Galois Theory](../../galois-theory/norm-trace-normal-basis.md), Theorem 9.5, and the actual faithfully flat local completion and Artin–Rees results in [Commutative Algebra](../../commutative-algebra/completions-artin-rees.md), Theorems 11.2 and 11.4. Chapter 13 proves affine acyclicity and projective coherent finiteness before using them. Chapter 14 proves its projective-line bundle splitting, local monogenic trace-dual identity and differential comparison, curve duality, and full Riemann–Roch. Chapter 15 constructs its Weierstrass model and group morphisms from those results; it does not assume a general relative Picard representability theorem.

These named preparation inputs carry their exact hypotheses in the chapters. They are not independent-review evidence. Current native review and release flags remain false.
`;export{e as default};