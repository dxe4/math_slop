var e=`---
parent_id: book-algebraic-topology-chains-spaces
matter_id: glossary
title: "Glossary and Index"
license: CC BY-SA 4.0
---

# Glossary and Index

This is a retrieval aid. Compact entries cannot replace the full definitions or hypotheses in their chapters. The earlier numbered index below is retained as a record of the sixteen-chapter edition. Its numbered pointers are historical; use the semantic current-route finder at the end for the seventeen-chapter core and the separate Advanced continuations.

## Glossary

**Amalgamated free product.** The pushout of two groups receiving homomorphisms from a common group; the maps need not be injective. Used in the Seifert--van Kampen theorem. Chapter 3 (Van Kampen as a Pushout).

**Attaching map.** The map $\\varphi_\\alpha:S^{k-1} \\to X^{(k-1)}$ along which a $k$-cell is attached to a CW complex. Chapter 6 (Computations with Cells).

**Betti number.** $\\beta_k(X;\\mathbb{F}) = \\dim_{\\mathbb{F}} H_k(X;\\mathbb{F})$. Chapter 6.

**Cap product.** $\\frown:H^k(X;R) \\times H_n(X;R) \\to H_{n-k}(X;R)$; used in Poincar\\'e duality. Chapter 11 (Manifold Duality).

**Cellular homology.** Homology computed from the cellular chain complex of a CW complex. Chapter 6.

**Chain complex.** A sequence $(C_*,d_*)$ with $d_k \\circ d_{k+1} = 0$. Chapter 5 (Chain Complexes and Homology).

**Chain homotopy.** Maps $P_k:C_k \\to D_{k+1}$ with $dP + Pd = g - f$; implies $f_* = g_*$ on homology. Chapter 10 (Homotopy Invariance and Degree).

**Characteristic class.** A natural cohomology class assigned to vector bundles, such as Stiefel--Whitney, Chern, or Euler classes. Chapter 14 (Obstruction Theory and Characteristic Classes).

**Chern class.** $c_i(E) \\in H^{2i}(X;\\mathbb{Z})$ for complex vector bundles. Chapter 14.

**Connecting homomorphism.** $\\partial:H_k(X,A) \\to H_{k-1}(A)$ in the long exact sequence of a pair. Chapter 7 (Exact Sequences as Conservation Laws).

**Covering map.** $p:E \\to B$ locally homeomorphic to a product with discrete fiber. Chapter 4 (Coverings and Monodromy).

**Cup product.** $\\smile:H^p(X;R) \\times H^q(X;R) \\to H^{p+q}(X;R)$; makes cohomology a graded ring. Chapter 9 (Cohomology and Products).

**Deck transformation.** A homeomorphism $\\phi:E \\to E$ with $p \\circ \\phi = p$. Chapter 4.

**Degree.** The integer $\\deg(f)$ by which $f:S^n \\to S^n$ acts on $H_n(S^n;\\mathbb{Z}) \\cong \\mathbb{Z}$. Chapter 10.

**Euler characteristic.** $\\chi(X) = \\sum_k (-1)^k n_k = \\sum_k (-1)^k \\beta_k$. Chapter 6.

**Exact sequence.** A sequence with $\\operatorname{im} = \\ker$ at each position. Chapter 7.

**Fibration.** A map $p:E \\to B$ satisfying the homotopy lifting property. Chapter 12 (Fibrations and Spectral Sequences).

**Five lemma.** In the standard five-object commutative diagram with exact rows, if the first, second, fourth, and fifth vertical maps are isomorphisms, then the middle vertical map is an isomorphism. Chapter 7.

**Free group.** $F_n = \\mathbb{Z} * \\cdots * \\mathbb{Z}$, the fundamental group of a graph with $E - V + 1 = n$. Chapter 2 (Fundamental Group and Basepoints).

**Fundamental class.** $[M] \\in H_n(M;R)$ generating the top homology of an oriented closed $n$-manifold. Chapter 11.

**Fundamental group.** $\\pi_1(X,x_0)$, the group of based loops up to homotopy. Chapter 2.

**Functor.** A map between categories preserving identity and composition. Chapter 1 (The Functorial Bargain).

**Generalized cohomology theory.** A sequence $h^*$ satisfying the Eilenberg--Steenrod axioms except dimension. Chapter 13 (Generalized Cohomology and Spectra).

**Hurewicz homomorphism.** $h:\\pi_1(X) \\to H_1(X;\\mathbb{Z})$, surjective with kernel the commutator subgroup. Chapter 10.

**Klein bottle.** Non-orientable surface with $H_1 \\cong \\mathbb{Z} \\oplus \\mathbb{Z}/2\\mathbb{Z}$ and $\\chi = 0$. Chapters 3, 6, 8.

**Local system.** A locally constant sheaf; equivalent to a representation of $\\pi_1$. Chapter 15 (Sheaf Cohomology and Local Systems).

**Long exact sequence of a pair.** $\\cdots \\to H_k(A) \\to H_k(X) \\to H_k(X,A) \\xrightarrow{\\partial} H_{k-1}(A) \\to \\cdots$. Chapter 7.

**Mayer--Vietoris sequence.** Long exact sequence for $X = A \\cup B$ from the interiors covering $X$. Chapter 8 (Mayer--Vietoris).

**Monodromy.** The action of $\\pi_1(B,b_0)$ on the fiber of a covering. Chapter 4.

**Orientation local system.** $\\mathcal{O}_M$ with monodromy given by the orientation character. Chapter 15.

**Persistent homology.** Homology tracked across a filtration; represented by barcodes. Chapter 16 (Persistent Homology and Computational Topology).

**Poincar\\'e duality.** $H^k(M;R) \\cong H_{n-k}(M;R)$ for closed oriented $n$-manifolds. Chapter 11.

**Projective space.** $\\mathbb{RP}^n$ (real) or $\\mathbb{CP}^n$ (complex); standard examples for cellular homology and characteristic classes. Chapters 3, 6, 9, 14.

**Reduced homology.** $\\widetilde{H}_*(X)$, the homology of the augmented chain complex. Chapter 7.

**Seifert--van Kampen theorem.** $\\pi_1(X)$ is the pushout of $\\pi_1(U)$ and $\\pi_1(V)$ over $\\pi_1(U \\cap V)$. Chapter 3.

**Sheaf.** A presheaf satisfying local identity and gluing. Chapter 15.

**Short exact sequence.** $0 \\to A \\to B \\to C \\to 0$ with $\\operatorname{im} = \\ker$ at each position. Chapter 7.

**Spectral sequence.** A sequence of pages $(E_r,d_r)$ converging to a filtered target. Chapter 12.

**Sphere.** $S^n = \\{x \\in \\mathbb{R}^{n+1} : \\|x\\| = 1\\}$; for $n\\ge1$, $H_k(S^n;\\mathbb{Z})$ is $\\mathbb{Z}$ for $k = 0,n$ and $0$ otherwise. The space $S^0$ has two components, so $H_0(S^0;\\mathbb Z)\\cong\\mathbb Z^2$. Chapters 2, 5, 6, 7, 8, 10.

**Stiefel--Whitney class.** $w_i(E) \\in H^i(X;\\mathbb{F}_2)$ measuring obstructions to sections. Chapter 14.

**Suspension isomorphism.** $\\widetilde{H}_k(\\Sigma X) \\cong \\widetilde{H}_{k-1}(X)$. Chapter 7.

**Torus.** $T^2 = S^1 \\times S^1$; $\\pi_1 \\cong \\mathbb{Z}^2$, $H_1 \\cong \\mathbb{Z}^2$, $\\chi = 0$. Chapters 2, 3, 6, 8, 9, 11.

**Universal coefficient theorem.** Relates $H_*(X;G)$ to $H_*(X;\\mathbb{Z})$ via tensor products and Tor. Chapter 6.

**Universal cover.** The simply connected covering space $\\tilde{X} \\to X$. Chapter 4.

**Wedge sum.** $X \\vee Y$, spaces joined at a basepoint. Chapters 2, 3, 6, 8.

## Claim finder with status guards

### Theorems

**Hurewicz theorem (Chapter 10).** If $X$ is path-connected, $h:\\pi_1(X) \\to H_1(X;\\mathbb{Z})$ is surjective with kernel $[\\pi_1(X),\\pi_1(X)]$. For $n\\ge2$ and $(n-1)$-connected $X$, the higher Hurewicz theorem states $\\pi_n(X) \\cong H_n(X;\\mathbb{Z})$; its external-proof status is specified in the current Hurewicz chapter.

**Poincar\\'e duality (Chapter 11).** For a closed oriented $n$-manifold $M$, cap product with $[M]$ gives $H^k(M;R) \\cong H_{n-k}(M;R)$.

**Seifert--van Kampen theorem (Chapter 3).** For $X = U \\cup V$ with $U,V,U \\cap V$ open and path-connected, $\\pi_1(X)$ is the amalgamated free product of $\\pi_1(U)$ and $\\pi_1(V)$ over $\\pi_1(U \\cap V)$.

**Mayer--Vietoris theorem (Chapter 8).** For $X = A \\cup B$ with $\\operatorname{int}(A) \\cup \\operatorname{int}(B) = X$, there is a long exact sequence relating $H_*(A)$, $H_*(B)$, $H_*(A \\cap B)$, and $H_*(X)$.

### Classical results

**Bott periodicity (Chapter 13).** $K^0(S^2) \\cong \\mathbb{Z}^2$ and $K$-theory is periodic with period $2$.

**Brown representability (Chapter 13).** Every generalized cohomology theory on pointed CW complexes is representable by an $\\Omega$-spectrum.

### Open problems

**Computation of stable homotopy groups of spheres (Chapter 13).** Extensive finite ranges and structural families are known, but there is no general determination of all groups $\\pi_k^s$; their global structure remains a central research problem.


## Current-route finder

| Concept | Current canonical reading |
| --- | --- |
| Homotopy, relative homotopy and deformation retract | [Homotopy and homotopy equivalence](../homotopy-loops-and-deformation.md) |
| Based groups and change of basepoint | [Fundamental Group and Basepoints](../fundamental-group-and-basepoints.md) |
| Pushout and normal closure | [Van Kampen as a Pushout](../van-kampen-as-a-pushout.md) |
| Lifting and right monodromy | [Coverings and Monodromy](../coverings-and-monodromy.md) |
| Universal cover, subgroup realization and normalizer | [Classification of Coverings and Deck Groups](../classification-of-coverings-and-deck-groups.md) |
| Weak topology, subcomplex and cofibration | [CW Complexes](../cw-complexes.md) |
| Singular chains, cycles, boundaries and path components | [Chain Complexes and Homology](../chain-complexes-and-homology.md) |
| Prism, subdivision, small chains and excision | [Homotopy Invariance and Degree](../homotopy-invariance-and-degree.md) |
| Connecting maps, reduced homology and Mayer–Vietoris | [Exact Sequences as Conservation Laws](../exact-sequences-as-conservation-laws.md) |
| Skeletal relative groups and attaching-degree differential | [Computations with Cells](../computations-with-cells.md) |
| Sphere degree, Brouwer and Borsuk–Ulam | [Degree, Brouwer and Borsuk–Ulam](../degree-brouwer-and-borsuk-ulam.md) |
| Tensor, Tor, Ext and coefficient sequences | [Coefficients and Künneth](../coefficients-and-kunneth.md) |
| Cochains, cup product and ring structure | [Cohomology and Products](../cohomology-and-products.md) |
| Orientation, cap product and dual blocks | [Manifold Duality](../manifold-duality.md) |
| Higher sphere probes and abelianization | [Hurewicz: a first look](../hurewicz-first-look.md) |
| Filtration maps and finite interval decomposition | [Persistent Homology](../persistent-homology-and-computational-topology.md) |

Fibrations, spectra, characteristic classes and sheaves retain their earlier definitions above and continue in [Advanced Algebraic Topology](../../advanced-algebraic-topology.md). Their old core resource IDs remain aliases to the canonical specialist sources. A historical chapter number is not a new identity and is not a reason to detach a learner note from its original semantic resource.
`;export{e as default};