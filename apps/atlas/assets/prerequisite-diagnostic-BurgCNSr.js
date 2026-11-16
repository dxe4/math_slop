var e=`---
parent_id: book-lie-groups-lie-algebras
matter_id: prerequisite-diagnostic
title: "Prerequisite Diagnostic"
license: CC BY-SA 4.0
---

# Prerequisite Diagnostic

These short tasks locate preparation gaps. They are personal checks with
explanations, not automated grading. If a solution uses an unfamiliar theorem,
return to the corresponding actual preparation chapter before using it here.

1. Let N be a three-by-three matrix with ones immediately above the
   diagonal and zeros elsewhere. Compute exp(tN) and its determinant.
2. Suppose a real matrix is skew-symmetric. Show that its exponential
   is orthogonal and has determinant one.
3. A linear map has two distinct real eigenvalues, each with a
   one-dimensional eigenspace. Show that every commuting linear map preserves
   those two lines.
4. Let a finite group act on a complex vector space with an
   invariant subspace. Explain why an invariant complement exists.
5. For the determinant function near the identity, compute its derivative
   and identify the tangent constraint for determinant-one matrices.
6. Explain why a local diffeomorphism need not be injective globally.

<details>
<summary>Solutions and preparation pointers</summary>

For the first task, N cubed vanishes and N squared has only
its upper-right entry nonzero. Thus the exponential is I plus tN
plus one half t squared N squared. It is upper triangular with
diagonal entries one, so its determinant is one. Review Jordan chains
and the matrix power series if the truncation was unclear.

For the second, transposition commutes with the exponential series and
exp(tX)-transpose equals exp(minus tX). Its product with exp(tX) is I.
The determinant is a continuous map into the two-point set of orthogonal
determinants and starts at one, so it stays one. The tangent
condition and the group condition are connected by a full path here.

For the third, if Av equals lambda v and BA equals AB,
then A(Bv) equals lambda Bv. Hence Bv belongs to the same
eigenspace, including the possibility that it is zero. Distinctness is
needed to identify the centralizer with diagonal matrices in that basis.

For the fourth, average any Hermitian metric over the finite group.
The orthogonal complement is invariant, since the group acts by isometries.
This is the preparation for replacing a finite average with compact-group
integration later. Characteristic and coefficient-field hypotheses matter in
other versions of this argument.

For the fifth, the linear term of det(I+tX) is t trace(X).
The derivative is therefore trace. Since this linear functional is nonzero,
the regular-value theorem gives trace-zero tangent matrices at the identity.
The complete closed-subgroup theorem later handles groups whose equations
are not presented as one convenient regular level set.

For the sixth, the circle map t to exp(it) is a local
diffeomorphism from the real line but repeats every two pi. Local
inverse charts and a global covering or quotient are different information.
Review charts, differentials and path lifting if these notions merge together.

</details>
`;export{e as default};