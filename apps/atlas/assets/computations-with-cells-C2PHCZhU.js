var e=`---
parent_id: book-algebraic-topology-chains-spaces
chapter_id: computations-with-cells
title: "Computations with Cells"
level: graduate
estimated_minutes: 200
license: CC BY-SA 4.0
---

# Computations with Cells

## Cellular homology

Let $X$ be a CW complex with $n_k$ cells in dimension $k$. The **cellular chain complex** $(C_*^{\\mathrm{cell}},d_*^{\\mathrm{cell}})$ has $C_k^{\\mathrm{cell}}(X) \\cong \\mathbb{Z}^{n_k}$, the free abelian group on the $k$-cells. The cellular boundary map

$$d_k^{\\mathrm{cell}}:C_k^{\\mathrm{cell}}(X) \\to C_{k-1}^{\\mathrm{cell}}(X)$$

is defined as follows for $k\\ge2$. For a $k$-cell $e_\\alpha^k$, its attaching map is $\\varphi_\\alpha:S^{k-1} \\to X^{(k-1)}$. Compose with the quotient map $X^{(k-1)} \\to X^{(k-1)}/X^{(k-2)} \\cong \\bigvee_{\\beta} S_\\beta^{k-1}$, then project to the $\\beta$-th sphere and take its degree. The matrix entry $(d_k^{\\mathrm{cell}})_{\\beta\\alpha}$ is this degree. In degree $1$, $d_1$ is the signed incidence map recording the terminal vertex minus the initial vertex of each oriented 1-cell.

**Theorem 11.5.** $H_*^{\\mathrm{cell}}(X) \\cong H_*^{\\mathrm{sing}}(X)$.

The proof uses the long exact sequence of the pair $(X^{(k)},X^{(k-1)})$ and the fact that $H_k(X^{(k)},X^{(k-1)})$ is free abelian on the $k$-cells.

## The torus

The torus $T^2$ has a CW structure with one 0-cell, two 1-cells $a,b$, and one 2-cell attached along $aba^{-1}b^{-1}$. The cellular chain complex is

$$0 \\to \\mathbb{Z} \\xrightarrow{d_2} \\mathbb{Z}^2 \\xrightarrow{d_1} \\mathbb{Z} \\to 0.$$

The 1-skeleton is $S^1 \\vee S^1$, so $d_1=0$ because the 1-cells form loops. The 2-cell attaches along a word that traverses each 1-cell once in each direction, so the degree of the attaching map onto each 1-sphere in the quotient is zero. Thus $d_2=0$.

Since all differentials vanish, the homology equals the chain groups:

$$H_0(T^2;\\mathbb{Z}) \\cong \\mathbb{Z}, \\quad H_1(T^2;\\mathbb{Z}) \\cong \\mathbb{Z}^2, \\quad H_2(T^2;\\mathbb{Z}) \\cong \\mathbb{Z},$$

and $H_k(T^2;\\mathbb{Z})=0$ for $k \\geq 3$.

## The projective plane

The real projective plane $\\mathbb{RP}^2$ has a CW structure with one 0-cell, one 1-cell $a$, and one 2-cell attached by a degree-2 map $S^1 \\to S^1$. The cellular chain complex is

$$0 \\to \\mathbb{Z} \\xrightarrow{\\cdot 2} \\mathbb{Z} \\xrightarrow{0} \\mathbb{Z} \\to 0.$$

The differential $d_2$ is multiplication by 2. Therefore:
- $H_2 = \\ker(d_2) = 0$,
- $H_1 = \\ker(d_1)/\\operatorname{im}(d_2) = \\mathbb{Z}/2\\mathbb{Z}$,
- $H_0 = \\mathbb{Z}$.

## Coefficients and torsion

Homology with coefficients in a field $\\mathbb{F}$ behaves differently than with $\\mathbb{Z}$ coefficients. For $\\mathbb{RP}^2$ over $\\mathbb{F}_2$, the map $\\cdot 2$ becomes $0$, so the chain complex has all zero differentials and

$$H_0(\\mathbb{RP}^2;\\mathbb{F}_2) \\cong \\mathbb{F}_2, \\quad H_1(\\mathbb{RP}^2;\\mathbb{F}_2) \\cong \\mathbb{F}_2, \\quad H_2(\\mathbb{RP}^2;\\mathbb{F}_2) \\cong \\mathbb{F}_2.$$

The Betti numbers over $\\mathbb F_2$ are $(1,1,1)$. This happens because $2=0$ specifically in characteristic $2$. Over a field of characteristic different from $2$, multiplication by $2$ is invertible, so $H_0(\\mathbb{RP}^2;\\mathbb F)\\cong\\mathbb F$ and the positive-degree groups vanish. Passing to a field can erase some integral torsion or reveal it through a matching characteristic; it is not true that $2=0$ in every field.

**Theorem 11.6 (Universal coefficient).** For any space $X$ and abelian group $G$,

$$0\\to H_k(X;\\mathbb Z)\\otimes_{\\mathbb Z}G\\longrightarrow H_k(X;G)\\longrightarrow
\\operatorname{Tor}_1^{\\mathbb Z}(H_{k-1}(X;\\mathbb Z),G)\\to0.$$

This natural short exact sequence splits, but not naturally in $X$. For $G=\\mathbb{F}_p$, the Tor term detects $p$-torsion in $H_{k-1}(X;\\mathbb{Z})$.

## Euler characteristic

For a finite CW complex $X$, the **Euler characteristic** is

$$\\chi(X) = \\sum_k (-1)^k n_k = \\sum_k (-1)^k \\dim H_k(X;\\mathbb{F}),$$

where $\\mathbb{F}$ is any field and the second equality holds when $X$ is finite-dimensional. The Euler--Poincar\\'e theorem states that the alternating sum of chain ranks equals the alternating sum of homology ranks.

**Proof.** Since the CW complex is finite, the following alternating sums have only finitely many terms and paired cancellation is legitimate. Write $\\dim C_k = \\dim Z_k + \\dim B_{k-1}$ and $\\dim H_k = \\dim Z_k - \\dim B_k$. Then

$$\\sum (-1)^k \\dim C_k = \\sum (-1)^k (\\dim Z_k + \\dim B_{k-1}) = \\sum (-1)^k \\dim H_k.$$

The boundary dimensions cancel in pairs. $\\square$

## Common errors

**Error: assuming Betti numbers over $\\mathbb{Z}$ equal ranks over fields.** The first Betti number $\\beta_1(X;\\mathbb{Z})$ is the rank of $H_1(X;\\mathbb{Z})$, which ignores torsion. Over $\\mathbb{Q}$, $\\dim H_1(X;\\mathbb{Q})$ equals this rank. Over $\\mathbb{F}_p$, $\\dim H_1(X;\\mathbb{F}_p)$ can be larger if there is $p$-torsion in $H_1(X;\\mathbb{Z})$.

**Error: computing cellular homology without checking the attaching map degrees.** The differential $d_k^{\\mathrm{cell}}$ records degrees of attaching maps, not just the number of cells. Two spaces with the same number of cells in each dimension can have different homology if attaching maps differ.

**Error: applying the Euler characteristic formula to infinite complexes.** The alternating sum may diverge or require regularization. For infinite complexes, homology must be computed directly.

## Worked example: the sphere $S^n$, $n\\ge1$

For $n\\ge1$, the sphere $S^n$ has a CW structure with one 0-cell and one $n$-cell. The cellular chain complex is

$$0 \\to \\mathbb{Z} \\to 0 \\to \\cdots \\to 0 \\to \\mathbb{Z} \\to 0,$$

with the nontrivial groups in degrees $0$ and $n$. All differentials are zero. Therefore

$$H_k(S^n;\\mathbb{Z}) = \\begin{cases} \\mathbb{Z} & k=0,n, \\\\ 0 & \\text{otherwise}. \\end{cases}$$

This agrees with the simplicial computation: a triangulation of $S^n$ has many simplices, but the homology is concentrated in degrees $0$ and $n$.

## Why cellular chains compute singular homology

Cellular homology is not obtained by replacing every picture with a matrix of cell counts. Its groups come from relative singular homology of successive skeleta, and its boundary maps are connecting maps. We prove that construction and identify the attaching-degree formula.

We use CW-pair homotopy extension from [CW complexes](cw-complexes.md), the long exact sequence proved in the previous chapter, and excision from [Homotopy Invariance and Excision](homotopy-invariance-and-degree.md). Relative cellular approximation is a separately cited geometric theorem when needed later; it is not needed to assert that an arbitrary attaching map is visibly linear.

### Lemma 11.1 — Relative homology and a cofibration quotient

For a nonempty CW subcomplex A of X, the quotient map induces
$H_k(X,A)\\cong\\widetilde H_k(X/A).$

*Proof.* Add a mapping-cylinder collar: form Y by attaching A×[0,1] to X along A×{1}, and put A0=A×{0}. There is a collapse r:Y→X. The pair (Y,A0) is homotopy equivalent to (X,A), using the cofibration property of A⊂X. Here is the extension step explicitly. The map X→Y that includes X has on A the homotopy a↦(a,1-t). Extend it over X by homotopy extension, calling the result H. Its final map j' sends A to A0. Then rj' is homotopic to id_X through a homotopy fixed on A. On Y, combine H on X with (a,s)↦(a,(1-t)s) on the collar. They agree on its attaching end and give a pair homotopy from id_Y to j'r. Thus the pair equivalence is established, and these same homotopies descend to quotients Y/A0≃X/A.

In Y, the short open collar N=A×[0,epsilon) is a neighborhood of A0 and retracts onto it. The pair sequence gives H(Y,A0)≅H(Y,N). Excision removes A0, whose closure lies in N, and the identical excision on Y/A0 removes its collapsed point. Away from that point the two pairs are homeomorphic, giving
$H(Y,N)\\cong H(Y/A0,N/A0).$
The subspace N/A0 is contractible, so the pair sequence identifies the last group with reduced homology of Y/A0. Combine the identifications. The quotient of the short collar is a cone neighborhood; this argument does not assume that an arbitrary quotient preserves homology. $\\square$

### Lemma 11.2 — Relative skeletal groups

For n>=1,
$H_k(X^{(n)},X^{(n-1)};R)=
\\begin{cases}
\\bigoplus_{\\text{n-cells}}R,&k=n,\\\\
0,&k\\ne n.
\\end{cases}$
Indeed the quotient collapses every attaching boundary and is the CW wedge of one n-sphere for each n-cell. The quotient lemma and sphere homology give the formula. For an infinite wedge, chains and bounding chains have finite support in finite subcomplexes, so this is a direct sum, not a product. We use the CW compact-subset property established with the CW topology. In degree zero, the 0-skeleton is discrete and H0 is the free module on its points; higher groups vanish.

Inducting through the pair sequences now gives H_k(X^{(m)})=0 for k>m. Adding m-cells preserves H_k for k<m-1 and is surjective on H_{m-1}; these conclusions follow by placing the concentrated relative groups in the exact row.

### Definition 11.3 — The boundary as a composite

Set $X^{(-1)}=\\varnothing$, with $C_{-1}=0$ for this unreduced cellular complex. In particular the degree-one endpoint uses $C_0=H_0(X^{(0)},\\varnothing)$, so the quotient map from absolute $H_0(X^{(0)})$ is the identity. Empty complexes have zero ordinary chain groups and are handled separately.

Set C_n=H_n(X^{(n)},X^{(n-1)}). Let
$\\partial_n:C_n\\to H_{n-1}(X^{(n-1)})$
be the connecting map, and let q be the quotient-induced map to C_{n-1}. Define d_n=q partial_n. The next connecting map kills anything coming from absolute homology, by exactness. Consequently d_{n-1}d_n=0. This proves the chain identity before any degree matrix is calculated.

### Theorem 11.4 — Cellular homology theorem

The homology of this cellular complex is singular H_*(X;R).

*Proof.* Fix n>=1. Since H_n(X^{(n-1)})=0, the map
$j:H_n(X^{(n)})\\to C_n$
is injective. Its image is ker partial_n. The map H_{n-1}(X^{(n-1)})→C_{n-1} is also injective because H_{n-1}(X^{(n-2)})=0. Therefore ker d_n=ker partial_n, identified by j with H_n(X^{(n)}).

Under that identification, image d_{n+1} is the image of the connecting map C_{n+1}→H_n(X^{(n)}). The pair sequence for (X^{(n+1)},X^{(n)}) gives
$H_n(X^{(n)})/\\operatorname{im}\\partial_{n+1}
\\cong H_n(X^{(n+1)}).$
Every subsequent skeleton inclusion induces an isomorphism in degree n, because its relative cells have dimension at least n+2. Thus the cellular homology in degree n is H_n(X).

For an infinite complex the final assertion follows at the chain level: a singular cycle and a chain proving a boundary each have compact image and lie in a finite subcomplex. Hence singular homology is the direct limit over finite subcomplexes, and the same finite-support argument applies to cellular chains. In degree zero, the cokernel of the edge incidence map identifies exactly the vertices joined by edge paths. Attaching cells of dimension at least two changes no components. This gives H0 as well. $\\square$

This proof explains why the skeletal groups alone were insufficient: one must identify both the cycle kernel and the boundary image through the exact rows.

## Identifying the attaching coefficients

Choose an orientation for each cell, giving its relative generator. A characteristic disk for an n-cell maps the pair (D^n,S^{n-1}) into (X^{(n)},X^{(n-1)}). Naturality of the connecting map sends its generator to the attaching sphere's homology class. Projecting onto the beta sphere in
$X^{(n-1)}/X^{(n-2)}$
then records its integer degree. This is precisely the coefficient in the old displayed formula. It is a consequence of the relative construction, not an independent guessed boundary rule.

For n=1, the disk is an oriented interval and its boundary is terminal point minus initial point. This gives the signed incidence matrix. Reorienting any cell multiplies its basis vector by -1 and adjusts its row or column accordingly. The resulting complexes are isomorphic, so homology does not depend on orientation choices.

Degree here means the integer multiplier on the already computed sphere homology. The next chapter develops its further consequences. No Brouwer or Borsuk–Ulam theorem is required to define this cellular coefficient.

## Projective-space boundaries, including the sign

The usual real projective CW structure has one cell e^k in each dimension. Its attaching sphere identifies antipodal boundary points. On a selected (k-1)-cell there are two hemispherical contributions. With compatible orientations their sum is
$1+(-1)^k,$
because the antipodal map on S^{k-1} has degree (-1)^k. The latter sign can be checked by restricting the linear map -I on R^k to its oriented sphere boundary: k coordinate reflections contribute k sign reversals.

Thus the integral cellular differential is multiplication by two in positive even degrees and zero in odd degrees. In characteristic two every differential vanishes. This calculation identifies exactly where parity enters; it is not a statement that all attaching maps are homotopically trivial.

For RP^3, the complex has d3=0,d2=2,d1=0. Hence H0=Z,H1=Z/2,H2=0,H3=Z. The top integral class is consistent with orientability in odd dimension. RP^2 lacks that top integral class, though mod-two homology sees a top class in both cases.

## Worked examples beyond the retained computations

### Worked example 1 — A Moore-type attachment

Attach a two-cell to S1 by degree m. The only nonzero differential is d2:R→R, multiplication by m. Over the integers for m≠0, H1=Z/m and H2=0, while H0=Z. For m=0, both H1 and H2 are Z. Over a field, nonzero m may become zero or invertible depending on the characteristic. The attaching coefficient, rather than the mere number of cells, determines the answer.

### Worked example 2 — A connected finite graph

For a graph with V vertices and E edges, d1 is the signed incidence matrix. Its image is the subgroup of vertex vectors with coordinate sum zero on each component. To prove this, every edge boundary has that property; conversely differences of vertices in one component are sums of boundaries along edge paths. If the graph is connected, image rank is V-1, so kernel rank is E-V+1. There are no two-cells, giving H1=Z^{E-V+1}. A spanning tree has E=V-1 and zero H1; each extra independent edge adds one generator.

### Worked example 3 — A non-diagonal two-cell boundary

Suppose one vertex, two loop edges, and two oriented two-cells have boundary matrix
$D=\\begin{pmatrix}2&4\\\\0&6\\end{pmatrix}.$
The determinant is twelve, so the map is injective over Z and H2=0. Integer row and column operations reduce it to diagonal entries 2 and 6: subtract twice the first column from the second. Thus H1=Z/2 direct-sum Z/6. Over F2 the entire matrix is zero, giving two degree-one and two degree-two classes. Over Q it is invertible and those positive-degree groups vanish. Row operations change the edge basis and column operations the two-cell basis; both are legitimate chain isomorphisms here.

### Worked example 4 — Euler characteristic without a regularization claim

For any finite-dimensional finite chain complex over a field, write Z_n=ker d_n and B_n=im d_{n+1}. Rank-nullity gives dim C_n=dim Z_n+dim B_{n-1} and dim H_n=dim Z_n-dim B_n. Summing with signs leaves
$\\sum(-1)^n\\dim C_n=\\sum(-1)^n\\dim H_n,$
because every boundary dimension occurs twice with opposite signs. This is the complete Euler–Poincare argument underlying the retained sketch. Finiteness makes the cancellation legitimate; no conclusion is drawn from a divergent infinite alternating series.

## Choosing a computational model responsibly

A CW structure may use fewer generators than a triangulation, but that economy shifts the work into attaching maps. A two-cell word is abelianized by its cellular boundary: commutators disappear in H1 even when they matter in the fundamental group. The companion cellular-word exploration illustrates that loss of information.

Integral homology retains torsion. Working only over one field can conceal it or convert it into extra classes through the neighboring-degree Tor term. The later coefficient chapter proves that exact sequence, instead of interpreting field dimensions as a universal replacement for integral groups.

Finally, cellular approximation is a geometric input about replacing maps by cellular maps, relative to a subcomplex. Its precise theorem is cited in the CW chapter. The cellular homology theorem just proved concerns the homology of a given CW space and does not silently identify every continuous map with a cellular formula without that approximation step.

## Practice exercises

<a id="computations-with-cells-legacy-ex-6-1"></a>
### Exercise 6.1

Compute the cellular homology of the Klein bottle using its standard CW structure with one 0-cell, two 1-cells, and one 2-cell attached along $aba^{-1}b$.


<details>
<summary>Hint 1</summary>

Read the attaching word as exponent sums.

</details>
<details>
<summary>Hint 2</summary>

The a contributions cancel and the b contributions add to two.

</details>
<details>
<summary>Full solution</summary>

**Solution.** The cellular chain complex is $0 \\to \\mathbb{Z} \\xrightarrow{d_2} \\mathbb{Z}^2 \\xrightarrow{0} \\mathbb{Z} \\to 0$. The boundary of the 2-cell is the word $aba^{-1}b$ read as a sum of 1-cells: the $a$-exponents sum to $1-1=0$ and the $b$-exponents sum to $1+1=2$, so $d_2(e^2)=2b$. Thus $H_0 \\cong \\mathbb{Z}$, $H_1 \\cong \\mathbb{Z}^2/\\langle 2b \\rangle \\cong \\mathbb{Z} \\oplus \\mathbb{Z}/2\\mathbb{Z}$, and $H_2 = \\ker d_2 = 0$. The 2-torsion in $H_1$ is the homological shadow of non-orientability; in particular $H_2=0$ with integer coefficients. $\\square$


</details>

<a id="computations-with-cells-legacy-ex-6-2"></a>
### Exercise 6.2

Compute the homology of $S^1 \\vee S^2$ with $\\mathbb{Z}$ coefficients.


<details>
<summary>Hint 1</summary>

Use one cell in dimensions zero, one, and two.

</details>
<details>
<summary>Hint 2</summary>

A constant attaching map gives zero two-cell boundary.

</details>
<details>
<summary>Full solution</summary>

**Solution.** The CW structure has one 0-cell, one 1-cell, and one 2-cell, with the 2-cell attached trivially (constant map to the 0-cell). The cellular chain complex is $0 \\to \\mathbb{Z} \\xrightarrow{0} \\mathbb{Z} \\xrightarrow{0} \\mathbb{Z} \\to 0$. Thus $H_0 \\cong \\mathbb{Z}$, $H_1 \\cong \\mathbb{Z}$, $H_2 \\cong \\mathbb{Z}$. $\\square$


</details>

<a id="computations-with-cells-legacy-ex-6-3"></a>
### Exercise 6.3

Verify by direct computation that $\\chi(T^2)=0$.


<details>
<summary>Hint 1</summary>

Count cells and compare Betti numbers.

</details>
<details>
<summary>Hint 2</summary>

The alternating sum is finite in both calculations.

</details>
<details>
<summary>Full solution</summary>

**Solution.** Using the standard CW structure, $n_0=1$, $n_1=2$, $n_2=1$, so $\\chi=1-2+1=0$. Using homology, $\\beta_0=1$, $\\beta_1=2$, $\\beta_2=1$, so $\\chi=1-2+1=0$. The two computations agree. $\\square$


</details>

<a id="computations-with-cells-legacy-ex-6-4"></a>
### Exercise 6.4

Compute $H_*(\\mathbb{RP}^n;\\mathbb{Z}/2\\mathbb{Z})$ for all $n$.


<details>
<summary>Hint 1</summary>

Use the projective-space differential parity.

</details>
<details>
<summary>Hint 2</summary>

Both zero and multiplication by two become zero modulo two.

</details>
<details>
<summary>Full solution</summary>

**Solution.** The cellular chain complex for $\\mathbb{RP}^n$ has one cell in each dimension $0,1,\\ldots,n$. The boundary map $d_k$ alternates between 0 and multiplication by 2. Over $\\mathbb{Z}/2\\mathbb{Z}$, multiplication by 2 is 0, so all differentials vanish. Thus $H_k(\\mathbb{RP}^n;\\mathbb{Z}/2\\mathbb{Z}) \\cong \\mathbb{Z}/2\\mathbb{Z}$ for $0 \\leq k \\leq n$ and 0 otherwise. $\\square$


</details>

## Companion explorations

- [A matrix forgets word order](/lectures/cellular-words.html) — compare the finite model with the hypotheses of the chapter.

A finite drawing or computation illustrates a chosen model; it does not establish a theorem for every continuous map.

## Looking forward

Chapter 7 introduces exact sequences, the organizational framework for relating homologies of different spaces. The long exact sequence of a pair and the Mayer--Vietoris sequence of Chapter 8 convert geometric constructions into algebraic constraints. Chapter 9 develops cohomology, the dual theory with a rich multiplicative structure.

## Further exercises

<a id="computations-with-cells-ex-5"></a>
### Exercise 11.5

Explain why the cellular boundary squares to zero from the pair construction.

<details>
<summary>Hint 1</summary>

The first connecting map lands in absolute homology.

</details>

<details>
<summary>Hint 2</summary>

The next connecting map kills classes coming from absolute cycles.

</details>

<details>
<summary>Full solution</summary>

The boundary is a connecting map followed by the relative quotient. Exactness for the next skeletal pair makes its connecting map zero on the image of absolute homology. Therefore the two adjacent boundary composites vanish. The argument establishes d²=0 independently of any particular degree matrix.

</details>

<a id="computations-with-cells-ex-6"></a>
### Exercise 11.6

Compute integral homology for one vertex, one loop edge, and one two-cell attached by degree five.

<details>
<summary>Hint 1</summary>

Write the two-term nonzero differential.

</details>

<details>
<summary>Hint 2</summary>

Its kernel and cokernel differ over Z.

</details>

<details>
<summary>Full solution</summary>

The complex has d2 multiplication by five and d1 zero. Thus H0=Z,H1=Z/5,H2=0, and higher groups vanish. Over F5 the differential becomes zero and both H1 and H2 become F5, showing the neighboring-degree coefficient effect.

</details>

<a id="computations-with-cells-ex-7"></a>
### Exercise 11.7

A connected graph has seven vertices and ten edges. Compute H1.

<details>
<summary>Hint 1</summary>

Use the incidence-image rank.

</details>

<details>
<summary>Hint 2</summary>

There are no two-cell boundaries.

</details>

<details>
<summary>Full solution</summary>

The incidence image has rank 7-1=6. The edge chain group has rank ten, so its kernel has rank four. With no two-cells, H1=Z⁴. This counts independent cycles, not the number of simple cycles in the graph.

</details>

<a id="computations-with-cells-ex-8"></a>
### Exercise 11.8

Compute integral homology of RP3 from its cellular complex.

<details>
<summary>Hint 1</summary>

List d1,d2,d3.

</details>

<details>
<summary>Hint 2</summary>

Use the correct kernel in top degree.

</details>

<details>
<summary>Full solution</summary>

The maps are 0,2,0. Hence H0=Z, H1=Z/2, H2=ker(2)/im(0)=0, and H3=ker(0)=Z. The top class is not contradicted by the torsion in degree one.

</details>

<a id="computations-with-cells-ex-9"></a>
### Exercise 11.9

Why does an infinite wedge have a direct sum of cellular generators rather than a product?

<details>
<summary>Hint 1</summary>

A chain is finite.

</details>

<details>
<summary>Hint 2</summary>

Compact singular data lie in finite subcomplexes.

</details>

<details>
<summary>Full solution</summary>

A cellular chain is a finite linear combination of cells by definition. The singular comparison likewise involves cycles and bounding chains with compact finite-simplex images lying in finite subcomplexes. Arbitrary infinitely supported coefficient lists would define a different chain theory and are not present in ordinary homology.

</details>

<a id="computations-with-cells-ex-10"></a>
### Exercise 11.10

If one cell orientation is reversed, can integral homology change?

<details>
<summary>Hint 1</summary>

Change that basis vector's sign.

</details>

<details>
<summary>Hint 2</summary>

Track adjacent matrix rows and columns.

</details>

<details>
<summary>Full solution</summary>

Replacing an oriented generator by its negative is an invertible diagonal basis change. Its outgoing boundary column reverses sign and incoming coefficients in its row adjust compatibly. This gives a chain isomorphism, preserving kernels modulo images and hence homology.

</details>

## Sources

The skeletal proof, quotient argument, and computations are supplied here. Primary references: [Hatcher, Algebraic Topology, Chapter 2](https://pi.math.cornell.edu/~hatcher/AT/ATchapters.html) and [May, A Concise Course, Chapter 13](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf). CW homotopy extension and the separately imported relative cellular-approximation theorem are identified in [CW Complexes](cw-complexes.md).

## Summary

Relative homology of adjacent skeleta is free on cells and concentrated in their dimension. Connecting maps define a chain complex, and the pair sequences identify its cycles and boundaries with singular homology. Attaching degrees determine its matrices; cell counts alone do not. Integral coefficients retain torsion, and finite-dimensional cancellation proves Euler–Poincare. The quotient and infinite-support hypotheses remain explicit.
`;export{e as default};