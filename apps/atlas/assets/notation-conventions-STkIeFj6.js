var e=`---
parent_id: book-morphisms-modules-categories
matter_id: notation-conventions
title: "Notation and Conventions"
license: CC BY-SA 4.0
---

# Notation and Conventions

This guide is designed for repeated reference. It records notation used across chapters, the claim-status conventions that govern what kind of warrant a statement needs, and the structural conventions that keep arguments clean.

## Rings and modules

### Standard rings and fields

- $\\mathbb{N}$: the natural numbers $\\{0, 1, 2, \\dots\\}$.
- $\\mathbb{Z}$: the integers.
- $\\mathbb{Q}$: the rational numbers.
- $\\mathbb{R}$: the real numbers.
- $\\mathbb{C}$: the complex numbers.
- $k$: a field, usually algebraically closed when working with algebraic geometry.
- $R$, $S$: rings with identity $1 \\neq 0$.
- $R[x_{1}, \\dots, x_{n}]$: polynomial ring in $n$ variables over $R$.
- $R/I$: the quotient ring of $R$ by the ideal $I$.

### Module notation

- $M$, $N$, $P$: left $R$-modules.
- $R\\text{-}\\mathbf{Mod}$: the category of left $R$-modules and $R$-linear maps.
- $\\operatorname{Hom}_{R}(M, N)$: the abelian group of $R$-linear maps $M \\to N$.
- $M \\otimes_{R} N$: the tensor product when $M$ is a right $R$-module and $N$ a left $R$-module; for commutative $R$, two left modules use the usual induced right action on the first factor.
- $M^{n}$: the direct sum of $n$ copies of $M$.
- $\\bigoplus_{i \\in I} M_{i}$: the direct sum of a family of modules.
- $\\operatorname{ker} f$: the kernel of a morphism $f$.
- $\\operatorname{im} f$: the image of a morphism $f$.
- $\\operatorname{coker} f$: the cokernel $N / \\operatorname{im} f$ of $f: M \\to N$.
- $\\operatorname{pd}_{R}(M)$: the projective dimension of $M$.
- $\\operatorname{id}_{R}(M)$: the injective dimension of $M$.
- $\\operatorname{gldim}(R)$: the global dimension of $R$.

### Exact sequences

- $0 \\to A \\xrightarrow{i} B \\xrightarrow{p} C \\to 0$: a short exact sequence.
- $\\operatorname{Ext}^{n}_{R}(M, N)$: the $n$-th right derived functor of $\\operatorname{Hom}_{R}(M, -)$.
- $\\operatorname{Tor}^{R}_{n}(M, N)$: the $n$-th left derived functor of $M \\otimes_{R} -$.

## Category-theoretic notation

### Categories and morphisms

- $\\mathcal{C}$, $\\mathcal{D}$, $\\mathcal{A}$, $\\mathcal{T}$: categories.
- $\\operatorname{Ob}(\\mathcal{C})$: the class of objects of $\\mathcal{C}$.
- $\\operatorname{Hom}_{\\mathcal{C}}(A, B)$: the set (or hom-object) of morphisms $A \\to B$ in $\\mathcal{C}$.
- $\\operatorname{id}_{A}$: the identity morphism on $A$.
- $g \\circ f$ or $gf$: composition of morphisms.
- $f: A \\to B$: a morphism from $A$ to $B$.
- $A \\cong B$: isomorphism.
- $A \\xrightarrow{\\sim} B$: weak equivalence (in a model category).

### Universal constructions

- $A \\times B$: product with projections $\\pi_{A}$, $\\pi_{B}$.
- $A \\sqcup B$ or $A \\oplus B$: coproduct (direct sum in additive categories) with injections $\\iota_{A}$, $\\iota_{B}$.
- $0$: zero object (initial and terminal).
- $\\operatorname{ker} f$: categorical kernel.
- $\\operatorname{coker} f$: categorical cokernel.

### Functors and natural transformations

- $F: \\mathcal{C} \\to \\mathcal{D}$: a functor.
- $\\eta: F \\Rightarrow G$: a natural transformation.
- $F \\dashv G$: $F$ is left adjoint to $G$.
- $F \\circ G$: composition of functors.
- $R^{n}F$: the $n$-th right derived functor of $F$.
- $L_{n}F$: the $n$-th left derived functor of $F$.
- $\\mathbb{L}F$, $\\mathbb{R}G$: left and right derived functors in a model category.

### Derived and triangulated categories

- $K(\\mathcal{A})$: the homotopy category of complexes in $\\mathcal{A}$.
- $D(\\mathcal{A})$: the derived category of $\\mathcal{A}$.
- $C_{\\bullet}$, $C^{\\bullet}$: chain and cochain complexes.
- $H_{n}(C_{\\bullet})$: $n$-th homology.
- $H^{n}(C^{\\bullet})$: $n$-th cohomology.
- $[1]$: the shift functor on a triangulated category.
- $A \\to B \\to C \\to A[1]$: a distinguished triangle.
- $\\operatorname{Cone}(f)$: the mapping cone of a morphism of complexes.
- $\\simeq$: chain homotopy equivalence.
- $\\xrightarrow{\\mathrm{qis}}$: quasi-isomorphism.

## Model categories

- $\\twoheadrightarrow$: fibration.
- $\\hookrightarrow$: cofibration.
- $\\xrightarrow{\\sim}$: weak equivalence.
- $\\operatorname{Ho}(\\mathcal{M})$: the homotopy category of a model category $\\mathcal{M}$.
- $\\mathbf{Top}$: the category of topological spaces.
- $\\mathbf{sSet}$: the category of simplicial sets.
- $\\operatorname{Ch}(R)$: the category of chain complexes of $R$-modules.

## Higher categories and topoi

- $\\mathcal{S}$: the quasicategory of spaces (Kan complexes).
- $N(\\mathcal{C})$: the nerve of a category $\\mathcal{C}$.
- $\\Lambda^{n}_{k}$: the $k$-th horn of the $n$-simplex.
- $\\Delta^{n}$: the standard $n$-simplex.
- $\\operatorname{Sh}(\\mathcal{C})$: the category of sheaves on a site $\\mathcal{C}$.
- $\\Omega$: the subobject classifier in a topos.
- $f^{*} \\dashv f_{*}$: the geometric morphism with inverse image $f^{*}$ and direct image $f_{*}$.

## Monoidal and enriched categories

- $(\\mathcal{C}, \\otimes, I)$: a monoidal category with tensor product $\\otimes$ and unit $I$.
- $\\alpha_{A,B,C}$: associativity isomorphism $(A \\otimes B) \\otimes C \\to A \\otimes (B \\otimes C)$.
- $\\lambda_{A}$, $\\rho_{A}$: left and right unit isomorphisms.
- $\\sigma_{A,B}$: braiding $A \\otimes B \\to B \\otimes A$.
- $[A, B]$: internal hom.
- $A^{\\vee}$: dual of $A$.
- $\\mathcal{C}(A, B)$: hom-object in a $\\mathcal{V}$-enriched category.
- $V \\odot A$: tensor of $V \\in \\mathcal{V}$ with $A \\in \\mathcal{C}$.
- $A^{V}$: cotensor.

## Homological algebra and spectral sequences

- $E^{p,q}_{r}$: the $(p, q)$ entry on the $r$-th page of a cohomological spectral sequence.
- $E^{r}_{p,q}$: the $(p, q)$ entry on the $r$-th page of a homological spectral sequence.
- $d_{r}$: the differential on the $r$-th page.
- $F_{p}C_{\\bullet}$: the $p$-th filtration subcomplex.
- $\\operatorname{gr}_{p}C_{\\bullet}$: the $p$-th associated graded piece.
- $\\Rightarrow$: converges to (spectral sequence convergence).

## Local cohomology and duality

- $\\Gamma_{I}(M)$: the $I$-torsion submodule of $M$.
- $H^{i}_{I}(M)$: the $i$-th local cohomology module.
- $\\omega_{R}$: the canonical module of a Cohen-Macaulay ring $R$.
- $E_{R}(k)$: the injective hull of the residue field $k = R/\\mathfrak{m}$.
- $M^{\\vee}$: the Matlis dual $\\operatorname{Hom}_{R}(M, E_{R}(k))$.
- $R\\mathcal{H}om$: derived hom in the derived category of sheaves.
- $Rf_{*}$: derived direct image.

## Claim-status conventions

Before accepting or repeating a claim, check its status:

| Status | Warrant required | Typical sources |
| --- | --- | --- |
| Theorem | Proof from stated axioms | Definitions, universal properties, exactness |
| Sketch | Recoverable proof outline; standard constructions suppressed | Textbook arguments, standard diagram chases |
| Imported theorem | Exact statement, hypotheses, and a source for the omitted proof | Standard results beyond the chapter's scope |
| Open or independent claim | Precise formulation, framework, and current source | Research literature |

## Cross-reference conventions

- Chapters are cited by title in quotation marks: "Derived Categories".
- Chapter IDs are used in internal links: \`derived-categories\`, \`abelian-categories\`.
- Definitions are numbered within chapters and referenced by name.
- Theorems are stated with every material hypothesis; the proof or proof sketch follows immediately.

## Accessibility and notation policy

All essential mathematical information is stated in text and formulas. No argument depends only on colour, spatial placement, or animation. Tables and diagrams are accompanied by exact descriptions of rows, columns, or relations. Plain-source formulas use readable tokens such as $\\leq$, $\\to$, and $\\cong$ when a specialized glyph would otherwise be the only carrier of meaning.

## Citation policy

- Paraphrase sources and cite the job they perform.
- Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard.
- Direct quotations require exact locators and license or fair-use review.
- When sources disagree, record the disagreement.
- When provenance is unknown, label it unknown rather than inventing a clean lineage.
`;export{e as default};