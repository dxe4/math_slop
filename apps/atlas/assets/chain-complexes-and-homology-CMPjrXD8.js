var e=`---
parent_id: book-algebraic-topology-chains-spaces
chapter_id: chain-complexes-and-homology
title: "Chain Complexes and Homology"
level: graduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Chain Complexes and Homology

## Chain complexes

Let $R$ be a commutative ring. A **chain complex** $(C_*,d_*)$ of $R$-modules is a sequence of $R$-modules $C_k$ and $R$-module homomorphisms $d_k:C_k \\to C_{k-1}$, called **boundary operators** or **differentials**, such that

$$d_k \\circ d_{k+1} = 0$$

for all $k$. This condition $d^2=0$ is the defining property; it says that every boundary is a cycle.

The **$k$-cycles** are $Z_k = \\ker d_k \\subseteq C_k$. The **$k$-boundaries** are $B_k = \\operatorname{im} d_{k+1} \\subseteq C_k$. The condition $d^2=0$ ensures $B_k \\subseteq Z_k$. The **$k$-th homology module** is the quotient

$$H_k(C_*) = Z_k / B_k.$$

Elements of $H_k$ are equivalence classes of cycles, where two cycles differ by a boundary. A cycle that is not a boundary represents a nontrivial homology class, detecting a "$k$-dimensional hole."

## Singular homology

For a topological space $X$, the **singular chain complex** $C_*(X;R)$ is defined as follows. The **standard $k$-simplex** is

$$\\Delta^k = \\{(t_0,\\ldots,t_k) \\in \\mathbb{R}^{k+1} : t_i \\geq 0, \\; \\sum t_i = 1\\}.$$

A **singular $k$-simplex** is a continuous map $\\sigma:\\Delta^k \\to X$. Let $C_k(X;R)$ be the free $R$-module on all singular $k$-simplices. The boundary operator is

$$d_k(\\sigma) = \\sum_{i=0}^k (-1)^i \\sigma|_{[v_0,\\ldots,\\widehat{v_i},\\ldots,v_k]},$$

where $[v_0,\\ldots,\\widehat{v_i},\\ldots,v_k]$ denotes the $i$-th face of $\\Delta^k$, obtained by deleting vertex $i$.

**Theorem 8.2.** $d_{k-1} \\circ d_k = 0$.

**Proof.** For degree at least two, index a codimension-two face by the original omitted vertices $i<j$. It occurs first by deleting $i$, then deleting vertex $j-1$ in the shortened list, with coefficient $(-1)^{i+j-1}$. It also occurs by deleting $j$, then deleting $i$, with coefficient $(-1)^{j+i}$. The two face maps are identical because they retain exactly the same ordered list of vertices, while the coefficients are opposite. Every term occurs in exactly one such pair, so their sum is zero. In degree one the next boundary lands in degree negative one, which is the zero module for this unaugmented complex, so the assertion is immediate. Extend by linearity from the free generators. This proves the identity over any commutative coefficient ring, including characteristic two. $\\square$

In degree zero set $d_0=0$; there is no empty-face generator in this unaugmented complex. The **singular homology** of $X$ with coefficients in $R$ is $H_k(X;R)=H_k(C_*(X;R))$.

## Simplicial homology

A **simplicial complex** $K$ is a collection of finite nonempty subsets of a vertex set $V$ closed under taking nonempty subsets. An element $\\{v_0,\\ldots,v_k\\}$ with $k+1$ vertices is a **$k$-simplex**.

The **simplicial chain complex** $C_*^{\\Delta}(K;R)$ has $C_k^{\\Delta}(K;R)$ equal to the free $R$-module on oriented $k$-simplices, modulo the relation $[v_0,\\ldots,v_k] = \\operatorname{sgn}(\\tau) [v_{\\tau(0)},\\ldots,v_{\\tau(k)}]$ for permutations $\\tau$. The boundary is the same alternating sum formula as for singular simplices.

**Theorem 8.4.** For a simplicial complex $K$ with geometric realization $|K|$, there is a canonical isomorphism $H_*^{\\Delta}(K;R) \\cong H_*(|K|;R)$.

This agreement is a theorem, not a definition. Simplicial homology is computable for finite complexes; singular homology is defined for all spaces and functoriality is transparent.

## Functoriality

A continuous map $f:X \\to Y$ induces a chain map $f_\\#:C_*(X;R) \\to C_*(Y;R)$ by composition: $f_\\#(\\sigma)=f \\circ \\sigma$. This satisfies $d \\circ f_\\# = f_\\# \\circ d$, so it descends to homology homomorphisms $f_*:H_*(X;R) \\to H_*(Y;R)$. The assignment $f \\mapsto f_*$ is functorial.

If $f \\simeq g$, then $f_*=g_*$. The proof constructs a **chain homotopy** $P:C_k(X) \\to C_{k+1}(Y)$ satisfying $dP+Pd=g_\\#-f_\\#$, using the prism operator. On homology, $g_\\#-f_\\#$ sends cycles to boundaries, so $f_*=g_*$.

## The homology of a point

For a one-point space $\\{pt\\}$, there is exactly one singular $k$-simplex for each $k$. The chain complex is

$$\\cdots \\longrightarrow C_3=R \\xrightarrow{0} C_2=R \\xrightarrow{\\mathrm{id}} C_1=R \\xrightarrow{0} C_0=R \\to 0.$$

Therefore $H_0(\\{pt\\};R) \\cong R$ and $H_k(\\{pt\\};R)=0$ for $k>0$.

## Common errors

**Error: writing a finite product for infinitely many components.** In general,

$$H_0(X;R)\\cong\\bigoplus_{C\\in\\pi_0^{\\mathrm{path}}(X)}R.$$

For a path-connected space this is $R$, and for a space with finitely many path components $c$ it is $R^c$. For infinitely many components the direct sum, whose elements have finite support, is essential.

**Error: confusing simplicial and singular homology.** Simplicial homology is defined for simplicial complexes; singular homology is defined for all topological spaces. They agree on spaces that admit a simplicial structure, but singular homology is the primary definition. One should not write $H_*(K)$ when $K$ is a simplicial complex without specifying whether simplicial or singular homology is meant; the theorem says the values agree.

**Error: forgetting that $d^2=0$ requires signs.** Over $\\mathbb{F}_2$, the signs disappear and cancellation happens because $1+1=0$. Over $\\mathbb{Z}$, the alternating signs are essential.

## Worked example 1: the circle

Triangulate the circle as the boundary of a triangle, with vertices $v_0,v_1,v_2$ and oriented edges $e_{01},e_{12},e_{20}$. The chain complex is

$$0 \\to \\mathbb{Z}^3 \\xrightarrow{d_1} \\mathbb{Z}^3 \\to 0,$$

with $d_1(e_{01})=v_1-v_0$, $d_1(e_{12})=v_2-v_1$, and $d_1(e_{20})=v_0-v_2$. Thus $\\ker d_1$ is generated by $e_{01}+e_{12}+e_{20}$, while $\\operatorname{im}d_1$ has rank $2$. Since there are no 2-simplices, $H_1(S^1;\\mathbb Z)\\cong\\mathbb Z$ and $H_0(S^1;\\mathbb Z)\\cong\\mathbb Z$.

## Definition 8.1: what a free chain really records

A free module on a set of simplices consists of finite formal sums of those simplices with coefficients in the ring. “Finite” belongs to each chain, not to the number of generators available in the whole module. Singular chains on even a one-point space have generators in every nonnegative degree, and chains on an ordinary interval have very many generators in every degree. They are not the same module as the geometric cells visible in one drawing of that interval.

Two singular simplices can have exactly the same image subset and still be different generators because their parametrised maps differ. Conversely a constant map from a high-dimensional simplex is a valid singular simplex. These facts are not pathologies to remove from the definition. They make composition with an arbitrary continuous map possible without choosing a triangulation that the map happens to preserve. Later comparison theorems justify smaller chain models for suitable spaces.

A cycle is an element of the kernel of the differential, not a set that must look like an embedded circle or sphere. A boundary is the differential of a chain, not necessarily the topological boundary of a subset. The condition that boundaries are cycles is the exact algebraic content of the signed-face theorem. It is what makes the quotient by boundaries legitimate. A coefficient choice changes both the allowed linear combinations and the arithmetic used in deciding whether one combination is a boundary.

## Result 8.2: chain maps descend to homology

A **chain map** $f:C_*\\to D_*$ consists of homomorphisms $f_k:C_k\\to D_k$ satisfying $d_Df_k=f_{k-1}d_C$. It sends a cycle $z$ to a cycle because $d_Df_k(z)=f_{k-1}(0)=0$. It sends a boundary $d_Cb$ to the boundary $d_Df_{k+1}(b)$. Thus the formula $[z]\\mapsto[f_k(z)]$ is well-defined on the quotient of cycles by boundaries. Its additivity is inherited from the module maps.

For singular chains a continuous map gives such a chain map by composition. The restriction of $f\\sigma$ to a face is exactly $f$ composed with the restriction of $\\sigma$ to that face, so the alternating sums commute term by term. Identity and composition hold on every simplex, hence on the free module and then on homology. No property of the spaces beyond continuity is required for these functorial statements.

The singular chain complex can equivalently be obtained by tensoring the integral free chain complex with the coefficient ring. This describes chains, not a formula that blindly tensors the resulting homology groups. Tensoring need not preserve kernels, so coefficient changes can introduce homology classes not obtained by tensoring integral homology in the same degree. The explicit two-term calculation below is an early warning; the coefficient chapter gives the precise correction by torsion terms.

## Theorem 8.3: zeroth homology is about path components

For every space $X$ and commutative coefficient ring $R$, there is a natural isomorphism

$$H_0(X;R)\\cong\\bigoplus_{C\\in\\pi_0^{\\mathrm{path}}(X)}R.$$

*Proof.* Send each point generator to one in the summand belonging to its path component. This defines a surjection from $C_0(X;R)$ to the stated direct sum, since a chain has finite support. A singular one-simplex is a path, whose boundary is its terminal point minus its initial point. Those points lie in the same path component, so every boundary maps to zero.

Conversely let a zero-chain have coefficient sum zero within every path component. Only finitely many points and hence finitely many components occur. In each occurring component choose one reference point $x_C$. The chain is a finite sum of terms $r_x(x-x_C)$, since the coefficient sums at the reference points vanish. There is a path from $x_C$ to every occurring $x$ in that component; its boundary is $x-x_C$. Multiplying these paths by their coefficients and adding gives a one-chain with the required boundary. Thus the kernel is exactly the image of $d_1$, and passing to the quotient proves the isomorphism. A continuous map sends each path component into a path component, so the construction commutes with induced maps and is natural. ∎

If $X$ is empty, the direct sum is empty and is the zero module, agreeing with the absence of singular point generators. If $X$ is connected but not path connected, the formula still uses path components. Replacing them with connected components would change the answer. Nor should an infinite direct sum be replaced by an infinite product: a zero-chain cannot independently assign nonzero coefficients to infinitely many components.

## Worked example 2: filling a triangle kills one cycle

Let $K$ be one filled triangle with all its edges and vertices. Orient its two-simplex as $[v_0,v_1,v_2]$, and orient its edges as $e_{01},e_{12},e_{20}$. Then

$$d_2[v_0,v_1,v_2]=e_{01}+e_{12}+e_{20}.$$

The kernel of the edge boundary is generated by this sum, as in the preceding circle example. Here it is also the image of $d_2$, so first homology is zero. The map $d_2$ is injective because its image has coefficient one on each of three distinct edge generators, and there are no three-simplices in this finite simplicial model. Thus second homology is zero. Zeroth homology is the integers because the triangle is path connected. All higher simplicial groups vanish for dimensional reasons.

The unfilled triangle and filled triangle have exactly the same one-skeleton. The former retains a nontrivial cycle because there is no two-chain in that model with that boundary; the latter adds precisely such a chain. This is an algebraic difference in the image of a differential, not a change in whether the same edge sum is a cycle. It remains a cycle in both cases.

## Worked example 3: an algebraic model with torsion

Consider a chain complex of abelian groups with $C_2=C_1=C_0=\\mathbb Z$, differential $d_2$ multiplication by six, and $d_1=0$, with all other chain modules zero. The square of the differential is zero because $d_1d_2=0$. The cycles in degree one are all integers, while boundaries there are multiples of six. Consequently $H_1=\\mathbb Z/6$, $H_2=0$, and $H_0=\\mathbb Z$.

Now form chains over $\\mathbb F_2$ by reducing all coefficients modulo two. Multiplication by six becomes zero, so the three nonzero chain modules each contribute one copy of $\\mathbb F_2$ to homology. In particular the degree-two homology has become nonzero even though integral degree-two homology vanished. It is incorrect to predict the answer by tensoring only the integral group in degree two. The coefficient theorem later explains the extra class through torsion in the preceding degree. This example is an algebraic calculation; its realization by a disk attached with degree six is justified by the cellular theorem, rather than used to prove that theorem.

## Result 8.4: the Euler–Poincaré identity and its limits

For a finite chain complex of finite-dimensional vector spaces over a field,

$$\\sum_k(-1)^k\\dim C_k=\\sum_k(-1)^k\\dim H_k.$$

*Proof.* In each degree, rank-nullity for $d_k$ gives $\\dim C_k=\\dim Z_k+\\dim B_{k-1}$. The quotient defining homology gives $\\dim Z_k=\\dim B_k+\\dim H_k$. Substitute and sum with alternating signs. Each boundary dimension occurs twice with opposite signs, and only finitely many terms are present, so the boundary sums cancel. The remaining equality is the assertion. ∎

The same formula for finite free abelian chain complexes concerns ranks, not torsion orders. In the six-boundary example the alternating ranks of the chain modules give one, and the homology ranks also give one; the cyclic group of order six contributes rank zero. Thus Euler characteristic loses torsion information even when the entire boundary matrix is finite. For an infinite complex an infinite alternating sum is not automatically defined, and a convergence or finiteness condition must be specified before using it.

## Comparison inputs and what has actually been proved

The signed-face identity, induced maps, zeroth homology and the preceding finite computations were proved directly. Homotopy invariance is proved in the next chapter through an explicit prism operator. The comparison of simplicial and singular homology is the standard geometric comparison theorem, stated above and cited in the Sources; a complete separate proof of that comparison is not included in this chapter. Its finite-complex form allows the triangle computations to be interpreted as singular homology calculations. Its infinite-complex extension is compatible with finite cell support of compact simplex images.

Likewise, vanishing above the dimension of a CW complex follows from the cellular-to-singular theorem proved in the later cellular chapter. It is not a consequence of singular chain modules vanishing: those modules generally exist in every degree. The original exercise on dimensional vanishing is retained below with that dependency explicit. Keeping these comparisons visible allows the singular definition to remain valid for arbitrary spaces while finite models supply practical calculations where justified.

## Practice exercises

### Exercise 5.1
<a id="chain-complexes-and-homology-ex-1"></a>

Compute the simplicial homology of the boundary of a triangle (a 3-cycle graph) with $\\mathbb{Z}$ coefficients.

<details><summary>Hint 1</summary>

Use the three oriented edge generators.

</details>
<details><summary>Hint 2</summary>

The edge cycle is not the boundary of a two-simplex in this unfilled complex.

</details>
<details><summary>Full solution</summary>

**Solution.** The complex has three vertices $v_0,v_1,v_2$ and three edges $e_0=[v_0,v_1]$, $e_1=[v_1,v_2]$, $e_2=[v_2,v_0]$. The chain complex is $0 \\to \\mathbb{Z}^3 \\xrightarrow{d_1} \\mathbb{Z}^3 \\to 0$ with $d_1(e_0)=v_1-v_0$, $d_1(e_1)=v_2-v_1$, $d_1(e_2)=v_0-v_2$. The kernel of $d_1$ is generated by $e_0+e_1+e_2$, so $Z_1 \\cong \\mathbb{Z}$. Since $B_1=0$, $H_1 \\cong \\mathbb{Z}$. For $H_0$, $B_0=\\langle v_1-v_0, v_2-v_1 \\rangle$ has rank 2, so $H_0 \\cong \\mathbb{Z}^3/\\mathbb{Z}^2 \\cong \\mathbb{Z}$. This matches $S^1$. $\\square$

</details>

### Exercise 5.2
<a id="chain-complexes-and-homology-ex-2"></a>

Prove that if $f:X \\to Y$ is a homotopy equivalence, then $f_*:H_*(X;R) \\to H_*(Y;R)$ is an isomorphism for all $R$.

<details><summary>Hint 1</summary>

Choose a homotopy inverse.

</details>
<details><summary>Hint 2</summary>

Apply functoriality and the prism homotopy-invariance theorem from the next chapter.

</details>
<details><summary>Full solution</summary>

**Solution.** Let $g:Y \\to X$ be a homotopy inverse, so $g \\circ f \\simeq \\operatorname{id}_X$ and $f \\circ g \\simeq \\operatorname{id}_Y$. On homology, $g_* \\circ f_* = (g \\circ f)_* = (\\operatorname{id}_X)_* = \\operatorname{id}_{H_*(X)}$ by homotopy invariance, and similarly $f_* \\circ g_* = \\operatorname{id}_{H_*(Y)}$. Thus $f_*$ is an isomorphism. $\\square$

</details>

### Exercise 5.3
<a id="chain-complexes-and-homology-ex-3"></a>

Show that $H_k(X;R)=0$ for all $k>n$ if $X$ is an $n$-dimensional CW complex.

<details><summary>Hint 1</summary>

Use the later cellular comparison theorem.

</details>
<details><summary>Hint 2</summary>

Cellular chains, unlike singular chains, vanish above the CW dimension.

</details>
<details><summary>Full solution</summary>

**Solution.** Cellular homology (the later cellular-computation chapter) gives a chain complex with $C_k^{\\mathrm{cell}}(X)=0$ for $k>n$. Its homology therefore vanishes above degree $n$, and the cellular-to-singular comparison theorem gives $H_k(X;R)=0$ for $k>n$. $\\square$

</details>

### Exercise 5.4
<a id="chain-complexes-and-homology-ex-4"></a>

Compute the homology of the disjoint union $X \\sqcup Y$ in terms of $H_*(X)$ and $H_*(Y)$.

<details><summary>Hint 1</summary>

Use connectedness of a simplex.

</details>
<details><summary>Hint 2</summary>

Every generator belongs to one coproduct summand, and chains are finite sums.

</details>
<details><summary>Full solution</summary>

**Solution.** A singular simplex in $X \\sqcup Y$ lies entirely in $X$ or entirely in $Y$. Thus $C_*(X \\sqcup Y) = C_*(X) \\oplus C_*(Y)$, and the boundary respects this decomposition. Therefore $H_k(X \\sqcup Y;R) \\cong H_k(X;R) \\oplus H_k(Y;R)$ for all $k$. $\\square$

</details>

### Exercise 5.5
<a id="chain-complexes-and-homology-ex-5"></a>

Compute integral homology of the complex with $C_1=C_0=\\mathbb Z$ and $d_1$ multiplication by four, with all other groups zero.

<details><summary>Hint 1</summary>

Compute the kernel and cokernel separately.

</details>
<details><summary>Hint 2</summary>

Multiplication by four is injective but not surjective on the integers.

</details>
<details><summary>Full solution</summary>

The answer is $H_1=0$ and $H_0=\\mathbb Z/4$, with all other groups zero. This is a valid algebraic chain complex, but it cannot be the unaugmented singular chain model of a nonempty space with integer coefficients, since zeroth homology of such a space is free on its path components.

</details>

### Exercise 5.6
<a id="chain-complexes-and-homology-ex-6"></a>

For an infinite discrete space $D$, compute $H_0(D;\\mathbb Z)$ and explain why the direct product is wrong.

<details><summary>Hint 1</summary>

Every path component has one point.

</details>
<details><summary>Hint 2</summary>

A chain has only finitely many nonzero coefficients.

</details>
<details><summary>Full solution</summary>

The theorem gives $\\bigoplus_{d\\in D}\\mathbb Z$. The product would include an element assigning one to every point, which is not represented by any finite zero-chain. In a discrete target every path is constant, so no boundary relates two distinct point generators.

</details>

### Exercise 5.7
<a id="chain-complexes-and-homology-ex-7"></a>

Write out $d_1d_2$ for one oriented triangle over the integers.

<details><summary>Hint 1</summary>

Expand its three edge boundaries.

</details>
<details><summary>Hint 2</summary>

Each vertex occurs twice with opposite coefficients.

</details>
<details><summary>Full solution</summary>

The boundary is $[v_1,v_2]-[v_0,v_2]+[v_0,v_1]$. Applying $d_1$ gives $(v_2-v_1)-(v_2-v_0)+(v_1-v_0)=0$. Over characteristic two the same occurrences cancel in pairs, though minus and plus have become equal.

</details>

### Exercise 5.8
<a id="chain-complexes-and-homology-ex-8"></a>

If a chain map is zero on all chain modules, show its induced map is zero. Does a map inducing zero on homology have to be zero on chains?

<details><summary>Hint 1</summary>

The first assertion follows on every cycle representative.

</details>
<details><summary>Hint 2</summary>

Use an acyclic nonzero chain complex for the converse.

</details>
<details><summary>Full solution</summary>

A zero chain map takes every cycle to zero and hence induces zero. The converse fails: on the nonzero two-term complex $\\mathbb Z\\xrightarrow{1}\\mathbb Z$, all homology vanishes, so its identity chain map induces zero on every homology group even though it is not the zero chain map.

</details>

### Exercise 5.9
<a id="chain-complexes-and-homology-ex-9"></a>

Prove the direct-sum formula for homology of an arbitrary topological disjoint union.

<details><summary>Hint 1</summary>

A simplex has connected domain.

</details>
<details><summary>Hint 2</summary>

Both cycles and boundaries split componentwise with finite support.

</details>
<details><summary>Full solution</summary>

Every singular simplex lands in one open-and-closed coproduct summand, so the singular chain complex is the direct sum of the summand complexes. The differential preserves each summand. Its kernel and image are therefore the direct sums of the corresponding kernels and images; quotienting gives the direct sum of the homology groups. No infinite-support chains are introduced.

</details>

### Exercise 5.10
<a id="chain-complexes-and-homology-ex-10"></a>

In the six-boundary example, repeat the calculation over $\\mathbb F_5$.

<details><summary>Hint 1</summary>

Reduce multiplication by six modulo five.

</details>
<details><summary>Hint 2</summary>

The resulting differential is invertible.

</details>
<details><summary>Full solution</summary>

Multiplication by six is multiplication by one in $\\mathbb F_5$, so $H_2=H_1=0$ and $H_0=\\mathbb F_5$. This contrasts with characteristic two, where the same differential vanishes. Coefficients affect both cycles and boundaries and can change the answer substantially.

</details>

## Sources

Allen Hatcher, [*Algebraic Topology*, Section 2.1](https://pi.math.cornell.edu/~hatcher/AT/ATchapters.html), is the primary comparison source for singular and simplicial chains, including the simplicial-to-singular comparison theorem. J. P. May, [*A Concise Course in Algebraic Topology*, Chapters 12 and 16](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf), gives an alternative chain-level development. The original four exercises and calculations are retained; the added proofs, examples and staged support are original exposition.

## Summary

Homology is the quotient of cycles by boundaries, made possible by the fully signed identity that the boundary of a boundary is zero. Singular chains are finite formal sums of parametrised maps and are functorial for every continuous map. Zeroth homology records path components through a direct sum. Finite models display both free classes and torsion, but their comparison with singular homology requires a theorem. The next chapter proves [homotopy invariance and excision](homotopy-invariance-and-degree.md) by explicit chain constructions.
`;export{e as default};