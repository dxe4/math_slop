
# Notation and Conventions

This guide is designed for repeated reference. It records notation used across chapters, the claim-status conventions that govern what kind of warrant a statement needs, and the structural conventions that keep arguments clean.

## Topological spaces and maps

- $X$, $Y$, $Z$: topological spaces.
- $A \subseteq X$: a subspace.
- $f:X \to Y$: a continuous map.
- $f \simeq g$: $f$ is homotopic to $g$.
- $X \simeq Y$: $X$ is homotopy equivalent to $Y$.
- $S^n = \{x \in \mathbb{R}^{n+1} : \|x\|=1\}$: the $n$-sphere.
- $D^n = \{x \in \mathbb{R}^n : \|x\| \leq 1\}$: the $n$-disk.
- $\mathbb{R}^n$: Euclidean $n$-space.
- $\mathbb{C}$: the complex numbers.
- $T^2 = S^1 \times S^1$: the torus.
- $\mathbb{RP}^n$: real projective $n$-space.
- $\mathbb{CP}^n$: complex projective $n$-space.
- $X \vee Y$: wedge sum (basepoints identified).
- $X \times Y$: Cartesian product.
- $\Sigma X$: suspension of $X$.
- $\Omega X$: loop space of $X$.

## The fundamental group

- $\pi_1(X,x_0)$: fundamental group of $X$ at basepoint $x_0$.
- $[\gamma]$: homotopy class of a path or loop $\gamma$.
- $\gamma * \eta$: concatenation of paths, traversing $\gamma$ first and then $\eta$.
- $\bar{\gamma}$: reverse path.
- $f_*:\pi_1(X,x_0) \to \pi_1(Y,y_0)$: induced homomorphism.
- $F_n$: free group on $n$ generators.
- $\langle S \mid R \rangle$: group presentation with generators $S$ and relations $R$.
- $\langle\langle w \rangle\rangle$: normal closure of a word $w$.

## Homology and cohomology

- $H_k(X;R)$: singular homology in degree $k$ with coefficients in $R$.
- $H^k(X;R)$: singular cohomology in degree $k$ with coefficients in $R$.
- $\widetilde{H}_k(X)$: reduced homology.
- $C_k(X;R)$: singular chain group.
- $C^k(X;R)$: singular cochain group.
- $d_k$ or $\partial_k$: boundary operator $C_k \to C_{k-1}$.
- $\delta^k$: coboundary operator $C^k \to C^{k+1}$.
- $Z_k = \ker d_k$: $k$-cycles.
- $B_k = \operatorname{im} d_{k+1}$: $k$-boundaries.
- $f_*:H_k(X) \to H_k(Y)$: induced homology homomorphism.
- $f^*:H^k(Y) \to H^k(X)$: induced cohomology homomorphism.
- $\beta_k(X;\mathbb{F}) = \dim_{\mathbb{F}} H_k(X;\mathbb{F})$: $k$-th Betti number over $\mathbb{F}$.
- $\chi(X) = \sum_k (-1)^k \beta_k$: Euler characteristic.

## Products and pairings

- $\smile$: cup product $H^p \times H^q \to H^{p+q}$.
- $\frown$: cap product $H^k \times H_n \to H_{n-k}$.
- $\otimes$: tensor product.
- $\oplus$: direct sum.
- $\times$: Cartesian product (spaces) or direct product (groups).
- $[\![\cdot]\!]$: sometimes used for fundamental class or distinguished generator.

## Exact sequences

- $0 \to A \xrightarrow{i} B \xrightarrow{p} C \to 0$: short exact sequence.
- $\cdots \to H_k(A) \to H_k(X) \to H_k(X,A) \xrightarrow{\partial} H_{k-1}(A) \to \cdots$: long exact sequence of a pair.
- $\partial$: connecting homomorphism.

## Coverings and fibrations

- $p:E \to B$: covering map or fibration.
- $p^{-1}(b)$: fiber over $b$.
- $\tilde{X}$: universal cover of $X$.
- $\operatorname{Deck}(E/B)$: group of deck transformations.
- $\Omega X$: based loop space.
- $PX$: based path space.

## Manifolds and duality

- $M$: manifold (usually compact, possibly with boundary).
- $\partial M$: boundary of $M$.
- $[M] \in H_n(M;R)$: fundamental class.
- $D:H^k(M;R) \to H_{n-k}(M;R)$: Poincaré duality isomorphism.
- $\mathcal{O}_M$: orientation local system.

## Characteristic classes

- $w_i(E) \in H^i(X;\mathbb{F}_2)$: Stiefel--Whitney classes.
- $c_i(E) \in H^{2i}(X;\mathbb{Z})$: Chern classes.
- $e(E) \in H^n(X;\mathbb{Z})$: Euler class.
- $BG$: classifying space of group $G$.

## Standard structures and number systems

- $\mathbb{N}$: natural numbers $\{0,1,2,\dots\}$.
- $\mathbb{Z}$: integers.
- $\mathbb{Q}$: rational numbers.
- $\mathbb{R}$: real numbers.
- $\mathbb{C}$: complex numbers.
- $\mathbb{F}_p$: field with $p$ elements.
- $\mathbb{Z}/n\mathbb{Z}$: integers modulo $n$.
- $\operatorname{id}_X$: identity map on $X$.

## Claim-status conventions

Before accepting or repeating a claim, check its status:

| Status | Warrant required | Typical sources |
| --- | --- | --- |
| Theorem | Proof from stated axioms | Definitions, exact sequences, homotopy invariance |
| Imported theorem | Precisely stated external theorem, with its proof source and role identified | Relative cellular approximation and higher Hurewicz |
| Classical result | Standard theorem whose proof requires machinery beyond this book | Research monographs, advanced texts |
| Open problem | None; record current evidence and partial results | Research literature, expert consensus |

## Cross-reference conventions

- Chapters are cited by title in quotation marks: "Mayer--Vietoris".
- Chapter IDs are used in internal links: `exact-sequences-as-conservation-laws`, `cohomology-and-products`; the earlier Mayer–Vietoris resource ID remains an alias.
- Definitions are numbered within chapters and referenced by name.
- Theorems are stated with their material hypotheses. A full proof follows when the book develops the argument; an imported theorem instead carries an explicit scope boundary and reference. A citation is not described as a local proof.

## Accessibility and notation policy

All essential mathematical information is stated in text and formulas. No argument depends only on colour, spatial placement, or animation. Tables and diagrams are accompanied by exact descriptions of rows, columns, or relations. Plain-source formulas use readable tokens such as $\leq$, $\to$, and $\cong$ when a specialized glyph would otherwise be the only carrier of meaning.

## Citation policy

- Paraphrase sources and cite the job they perform.
- Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard.
- Direct quotations require exact locators and license or fair-use review.
- When sources disagree, record the disagreement.
- When provenance is unknown, label it unknown rather than inventing a clean lineage.


## Core conventions added for the seventeen-chapter route

All chain sums are finite unless a chapter explicitly introduces a different theory. Ordinary singular homology uses direct sums across path components, not products. The unaugmented singular differential in degree zero is zero; reduced homology uses the augmentation and records its negative-degree convention separately. A coefficient ring is commutative with identity, and modules are unital. Statements about PID modules name the PID; field-valued ranks and interval barcodes specify their field.

For coverings, a fiber carries a right action of the fundamental group: lift a loop and take its endpoint. With left-to-right path concatenation, the subgroup quotient model has fiber $H\backslash G$, the set of right cosets $Hg$, and the action is $(Hg)k=Hgk$. A based connected covering corresponds to an actual subgroup, an unbased connected covering to a conjugacy class. A deck transformation is a map over the base, not an arbitrary self-homeomorphism of the total space.

CW complexes use closure finiteness and the weak topology. A subcomplex is closed and has the homotopy-extension property. Relative cellular approximation is explicitly imported in the CW chapter; it is distinct from the extension theorem proved there. For manifolds, closed means compact without boundary; it does not merely mean a closed subset of some unspecified ambient space. Fundamental-class and cap-product statements retain orientability and coefficient assumptions, and the local dual-cell proof requires the structure named in the duality chapter.

The earlier characteristic-class and fibration symbols above remain useful for the preserved Advanced Algebraic Topology continuations. They do not add prerequisites to the L4 core. The core reading order is determined by semantic chapter titles and IDs, so earlier exercise labels need not be renumbered when a chapter moves.
