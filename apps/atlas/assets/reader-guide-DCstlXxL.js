var e=`---
parent_id: book-algebraic-analytic-number-theory
matter_id: reader-guide
title: "Reader Guide"
license: CC BY-SA 4.0
---

# Reader Guide {#section-1-reader-guide}

This L4 route has sixteen substantive primaries. Its first part follows
arithmetic sums into prime distribution; its second proves the structure of
integer rings and units; its final part treats elliptic curves, L-functions
and exact algorithms. Proofs, examples and supported exercises belong to the
primary sources. Seven exact older manuscripts remain separate companions,
with their original exercise labels.
The earlier book is also available as a separate reading.

Begin with the existing Elementary Number Theory, Galois Theory and Complex
Analysis books. In particular, prepare
[arithmetic convolution](../../number-theory-proof-reference/arithmetic-functions-convolution-inversion.md),
[gamma and reciprocal gamma](../../complex-analysis/gamma-zeta-functions.md)
and [periodic approximation](../../fourier-analysis/fejer-means-approximate-identities.md).
Local fields and heights are developed here; the longer Quarto p-adic route
is an alternative continuation. The source-era numbered references inside
preserved passages refer to the earlier number-theory book. Current reading
order and destinations use the semantic links and native contents.

Chapters one through six can be read as an analytic course. Character
theory in Chapter two uses the absolute products proved in Chapter three;
read that preparation first if unfamiliar. The theta chapter proves zeta's
functional equation without using the PNT. The PNT chapter then proves its
own zero-free boundary and Newman contour lemma. Nonprincipal Dirichlet
nonvanishing is an explicitly named input in the retained character proof;
do not mistake periodic convergence at one for that stronger assertion.

Chapters seven through twelve give an algebraic route. The ideal theorem
is proved through local valuation rings. Minkowski and Dirichlet's unit
theorem are proved next, including the full-rank logarithmic-lattice step.
Read Chapter twelve's Hensel and local-ring constructions before the local
integer-ring argument in Chapter eleven. This forward preparation link is
intentional and names an actual source, not an unwritten theorem slot.

The curve chapter preserves the earlier characteristic-three correction and
small-characteristic formulas. Its associativity proof derives the chord law
from a Pic-zero bijection with Riemann–Roch explicitly imported. The
Mordell–Weil chapter then proves both weak finiteness and height descent
over every number field. Its conclusion is finite generation, not an
automatic rank or generator computation for a chosen curve.

The modular chapter proves full-level lattice, Mellin and conditional Hecke
results, while distinguishing elliptic modularity at nontrivial level as a
deep input. The algorithm chapter proves finite correctness and operation
bounds without promoting a collision heuristic into a universal cost theorem.
An old source program is preserved where it belongs, with its unperformed
execution boundary still visible.

Read an exercise before either hint. Hint 1 identifies a useful object;
Hint 2 narrows its role; the solution supplies the complete stated argument.
Reading marks and opened hints record personal study choices, not graded
proof evidence.
`;export{e as default};