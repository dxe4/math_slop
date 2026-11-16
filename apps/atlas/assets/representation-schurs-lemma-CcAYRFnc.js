var e=`---
id: deep-dive-representation-schurs-lemma
title: "Schur's lemma"
license: CC BY-SA 4.0
---

# Schur's lemma

An irreducible representation may have a large underlying vector space, but its linear maps that respect the entire group action are unusually rigid. Schur's lemma turns invariant kernels and images into a statement about isomorphisms. Over the complex numbers, the existence of eigenvalues sharpens it further: every commuting endomorphism is scalar.

This **Years 2–3 (L3)** article assumes [Representations of finite groups](/articles/representation-finite-groups/), kernels, images and eigenvalues. We work in finite dimensions and state the coefficient field whenever it matters. The primary [Schur's Lemma chapter](/books/representation-theory-finite-groups/schurs-lemma/) develops multiplicities, centralizers and the real division-algebra cases after the argument proved here.

## A map must intertwine all action operators

For representations $U,V$ over a field $k$, a linear map $T:U\\to V$ is an intertwiner if

$$T\\rho_U(g)=\\rho_V(g)T\\qquad\\text{for every }g\\in G.$$

This condition implies that $\\ker T$ is invariant: if $Tu=0$, then $T(\\rho_U(g)u)=\\rho_V(g)Tu=0$. The image is invariant as well, since $\\rho_V(g)Tu=T\\rho_U(g)u$ is another image vector.

Now suppose $U$ and $V$ are nonzero irreducible representations and $T\\ne0$. Its kernel cannot be all of $U$, so irreducibility forces the kernel to be zero. Its image is nonzero, so irreducibility forces the image to be all of $V$. Hence $T$ is a linear isomorphism. Rearranging the intertwining equation proves that $T^{-1}$ also intertwines the actions.

This is Schur's lemma in its basic form. It works over any field. In particular, there are no nonzero intertwiners between nonisomorphic irreducibles. For a single irreducible $U$, every nonzero element of the ring $\\operatorname{End}_G(U)$ is invertible; such a ring is called a division ring. We have not yet proved that its elements are scalars.

## Why algebraic closure gives scalars

Now take $k=\\mathbb C$ and $A\\in\\operatorname{End}_G(U)$ with $U$ nonzero finite-dimensional irreducible. Its characteristic polynomial has a complex root $\\lambda$, so $A-\\lambda I$ has a nonzero kernel. This operator is still equivariant because both $A$ and the identity commute with the group action.

If $A-\\lambda I$ were nonzero, the basic lemma would make it invertible, contradicting its nonzero kernel. Therefore $A=\\lambda I$.

The eigenvalue step is where the field enters. The invariant-kernel proof itself did not require $\\mathbb C$, a finite group or division by the group order. Finiteness of the group is part of our surrounding course setting; the basic lemma is more general. Algebraic closure and finite dimension supply the eigenvalue for the scalar conclusion.

There is also a useful comparison statement. If $U$ and $V$ are isomorphic irreducible complex representations, fix one intertwining isomorphism $F:U\\to V$. For any other intertwiner $T$, the map $F^{-1}T$ is a commuting endomorphism of $U$, so it is scalar. Thus every $T$ is a scalar multiple of $F$. This describes the space of intertwiners without pretending that an isomorphism between two differently presented spaces is literally an identity matrix.

## Worked example: sum the transpositions

Let $W\\subset\\mathbb C^3$ be the irreducible sum-zero plane from the first article, and form

$$K=\\rho((12))+\\rho((13))+\\rho((23))$$

on that plane. Each individual transposition need not commute with all of $S_3$. Their sum does: conjugation by any permutation merely permutes the three transpositions, leaving $K$ unchanged. Schur's lemma therefore gives $K=\\lambda I_W$.

A transposition in the full three-coordinate permutation action has trace one because it fixes one coordinate. Removing the trivial fixed line leaves trace zero on $W$. Thus $\\operatorname{tr}K=0+0+0=0$. Since $\\dim W=2$, the scalar equation gives $2\\lambda=0$, so $K=0$.

We can also see the cancellation directly. On $\\mathbb C^3$, the sum of the three permutation matrices is the all-ones matrix: each diagonal position is fixed by exactly one transposition, and each off-diagonal position is supplied by exactly one. It sends $(a,b,c)$ to $(a+b+c,a+b+c,a+b+c)$, which vanishes on $W$.

This example distinguishes a central combination of action operators from an arbitrary action operator. Schur's scalar conclusion applies because the sum commutes with every group element. It does not claim that all matrices of an irreducible nonabelian representation are scalar.

## Exercises

### Exercise 1
<a id="deep-dive-representation-schurs-lemma-ex-1"></a>
Prove directly that every intertwiner from the trivial one-dimensional representation of $S_3$ to its sign representation is zero. Relate this to Schur's lemma.

<details><summary>Hint 1</summary>
An arbitrary linear map between the two one-dimensional spaces is multiplication by a scalar $a$ after bases are fixed.
</details>
<details><summary>Hint 2</summary>
Apply equivariance to a transposition, whose sign is minus one.
</details>
<details><summary>Solution</summary>
For a transposition, the source action is multiplication by one and the target action multiplication by minus one. The intertwining equation says $a=-a$, so $2a=0$ and hence $a=0$ over $\\mathbb C$. These two nonzero one-dimensional representations are irreducible and nonisomorphic, so the result is exactly the zero-Hom conclusion of Schur's lemma. The field convention matters to this calculation: in characteristic two sign and trivial coincide.
</details>

### Exercise 2
<a id="deep-dive-representation-schurs-lemma-ex-2"></a>
Let $C_3$ act on $\\mathbb R^2$ by rotation $R$ through $120$ degrees. Show this real representation is irreducible, but that rotation $J$ through $90$ degrees is a nonscalar commuting endomorphism. Why is Schur's lemma still satisfied?

<details><summary>Hint 1</summary>
A real invariant line would provide a real eigenvalue of $R$, whose characteristic polynomial is $t^2+t+1$.
</details>
<details><summary>Hint 2</summary>
Planar rotations commute, and $J^2=-I$.
</details>
<details><summary>Solution</summary>
The polynomial $t^2+t+1$ has discriminant minus three and no real root, so $R$ preserves no real line. Every proper nonzero subspace of a real plane is a line, proving irreducibility. The two rotations commute, and $J$ is not a real scalar matrix because it takes a nonzero vector to a perpendicular vector. It is invertible with inverse $-J$. The basic lemma only requires nonzero commuting endomorphisms to be invertible, which holds. The scalar conclusion used an eigenvalue in the coefficient field; $J$ has no real eigenvalue. No hypothesis of the real basic lemma has failed.
</details>

The [character-table article](/articles/representation-character-tables-s3-s4/) uses this rigidity through character orthogonality. The primary [Schur chapter](/books/representation-theory-finite-groups/schurs-lemma/) explains how repeated irreducible copies produce matrix-valued spaces of commuting operators.

*Source provenance: original Euler orientation exposition, proof and exercises, linked to the source-owned Schur and representation chapters. The central transposition sum is an explicitly derived application. CC BY-SA 4.0. Draft; no independent review is claimed.*
`;export{e as default};