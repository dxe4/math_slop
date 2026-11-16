var e=`---
parent_id: book-lie-groups-lie-algebras
matter_id: notation-conventions
title: "Notation and Conventions"
license: CC BY-SA 4.0
---

# Notation and Conventions

Matrix Lie groups are closed relative to GL, unless an example explicitly
drops that hypothesis. A singular matrix limit in the full matrix space
does not disprove relative closedness. Tangent Lie algebras of real matrix
groups are real vector spaces. Complexification is a separate operation;
the structural theory from Engel and Lie onward specifies when the
coefficient field is complex.

The bracket is XY minus YX. Left-invariant vector fields have this
bracket; identifying right-invariant fields with tangent vectors introduces
the opposite sign. Ad-g is conjugation by g and ad-X is the
operator taking Y to [X,Y]. The exponential is the convergent matrix
power series. A local inverse is not an assertion of a unique
or existent logarithm at every group element.

The Killing form is trace(ad-X ad-Y). An invariant trace form on
a defining matrix representation may differ by a scalar. In the sl(3)
character chapter the form is trace(XY), making roots have squared length
two; its Casimir therefore differs from a Killing-normalized Casimir.

For roots alpha and beta, the Cartan integer is twice (alpha,beta)
divided by (alpha,alpha). Thus our Cartan-matrix row corresponds to a
coroot. A Dynkin arrow points toward the shorter root. Q denotes
the root lattice, P the weight lattice, W the reflection group
and rho half the sum of positive roots. The symbol h denotes
a complex Cartan subalgebra; the positive Euclidean root space constructed
from its real coroot span is not the entire complex vector space.

The sl(2) triple satisfies [H,E]=2E, [H,F]=-2F and [E,F]=H.
Its irreducible highest integer m gives dimension m plus one.
For sl(3), the highest pair (a,b) gives evaluations on the two
simple coroots, not coefficients in the simple-root basis.

Haar measure on a compact group is normalized to total one.
Matrix coefficients use orthonormal bases after averaging. Their squared L2
norm is the reciprocal of the irreducible dimension; irreducible characters
have norm one. L2 equalities are equalities of almost-everywhere classes,
and mean-square convergence does not claim pointwise or uniform convergence.

Sp(n) means the compact quaternionic unitary group. Sp(2n,R) means
the real group preserving the displayed alternating form. SU(2), SO(3)
and their shared local algebra are kept distinct: a quotient representation
exists only when the covering kernel acts trivially.
`;export{e as default};