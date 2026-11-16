var e=`---
parent_id: book-linear-algebra-structure-proofs
matter_id: notation-and-proof-conventions
title: "Notation, Field Assumptions, and Proof Conventions"
license: CC BY-SA 4.0
---

# Notation, Field Assumptions, and Proof Conventions

## Scalars, spaces, and maps

- $F$ is a field. $R$ or $C$ is named when order, conjugation, positivity, compactness, or splitting is used.
- $V,W,U$ denote vector spaces over the same named field unless scalar extension is explicit.
- $L(V,W)=Hom_F(V,W)$; $L(V)=L(V,V)$.
- $I_V$ and $0$ are identity and zero maps; subscripts appear when types could be confused.
- Composition $S \\circ T$ applies $T$ first.
- $\\operatorname{ker} T$, $\\operatorname{im} T$, $\\operatorname{rank} T$, and $nullity T$ have their usual typed ambient spaces.
- Internal $\\oplus$ asserts unique decomposition; an external direct sum builds tuples from different spaces.

## Coordinates

- Bases are ordered lists. $[v]_B$ is the coordinate column of $v$ in $B$.
- $[T]_C\\leftarrow B$ takes $B$-coordinates to $C$-coordinates.
- $P_B\\leftarrow B'=[I]_B\\leftarrow B'$ converts $B'$ coordinates to $B$ coordinates.
- Similarity is $P^{-1}AP$, equivalence is $Q^{-1}AP$, and form congruence is $P^TAP$ or its conjugate-sensitive analogue.
- Matrix equality is never substituted for equality of maps without fixed bases.

## Duality and tensors

- $V^{*}$ is the algebraic dual. $T^{*}:W^{*}\\to V^{*}$ is the algebraic dual map until inner products are introduced.
- After Chapter 18, adjoints are also written $T^{*}$; the surrounding types and inner-product declaration distinguish them.
- $U^0$ is the annihilator in $V^{*}$; $U^\\perp$ is an orthogonal complement and requires an inner product.
- $\\otimes$ and $∧$ denote tensor and exterior products. A pure tensor is special; a general tensor is a finite sum.
- $\\Lambda^kT$ is the induced exterior map.

## Polynomial operator theory

- $\\mathbb{F}[t]$ is the polynomial ring in an indeterminate distinct from the operator.
- $p(T)$ is polynomial evaluation; $m_T$ and $\\chi_T$ are minimal and characteristic polynomials.
- $Z(v;T)$ is a cyclic subspace; $G_{\\lambda}$ is a generalized eigenspace.
- Factorization, roots, irreducibility, and diagonalization are always relative to the named field.
- An integer coefficient is interpreted as a field element; it may vanish in positive characteristic.

## Inner products

- Complex inner products are linear in the first slot and conjugate-linear in the second.
- $A^\\dagger$ denotes conjugate transpose when a plain-text distinction is needed.
- $\\lVert v\\rVert=\\sqrt{\\langle v,v\\rangle}$; norm and convergence claims require $R$ or $C$ and stated topology.
- “Positive” for an operator means self-adjoint with nonnegative quadratic form.
- “Normal” means $T^{*}T=TT^{*}$; “unitary” means $T^{*}T=TT^{*}=I$.

## Proof and evidence labels

A definition fixes language. A theorem or lemma has a proof. A worked example verifies a particular case. A counterexample refutes a universal claim. A heuristic guides search but proves nothing. An exact computation is performed in declared exact arithmetic. A numerical result requires input provenance, precision, norm, scale, residual or error bound, and an appropriately limited conclusion.

Quotient formulas carry a well-definedness obligation. Choice-dependent constructions identify their basis, complement, representative, or lift. Statements imported from previous chapters retain their original hypotheses even when not rewritten in full.

## Accessibility convention

Geometric phrases are paired with algebraic content: “perpendicular” with a zero inner product, “collapse” with a quotient map, “volume scaling” with top exterior action, and “direction” with a one-dimensional subspace. Colour or a diagram is never the only carrier of a distinction.
`;export{e as default};