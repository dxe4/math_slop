
# Manifold Duality

## Poincaré duality

Let $M$ be a connected closed $n$-manifold. $M$ is **orientable** over a commutative ring $R$ if there exists a **fundamental class** $[M] \in H_n(M;R)$ whose restriction to each point generates $H_n(M,M\setminus\{x\};R) \cong R$.

**Poincaré duality.** If $M$ is oriented over $R$, then cap product with the fundamental class gives an isomorphism

$$D: H^k(M;R) \xrightarrow{\cong} H_{n-k}(M;R)$$

for all $k$. Equivalently, $H^k(M;R) \cong H_{n-k}(M;R)$.

The **cap product** $\frown: H^k(M;R) \times H_n(M;R) \to H_{n-k}(M;R)$ is defined at the chain level by

$$\varphi \frown \sigma = \varphi(\sigma|_{[v_0,\ldots,v_k]}) \cdot \sigma|_{[v_k,\ldots,v_n]}.$$

Poincaré duality implies that the Betti numbers of a closed oriented manifold satisfy $\beta_k = \beta_{n-k}$.

## Examples

**The torus $T^2$.** Over $\mathbb{Z}$, $H^0=H^2=\mathbb{Z}$ and $H^1=\mathbb{Z}^2$. Poincaré duality gives $H_2 \cong H^0=\mathbb{Z}$, $H_1 \cong H^1=\mathbb{Z}^2$, $H_0 \cong H^2=\mathbb{Z}$, which matches the known homology.

**The sphere $S^n$.** $H^k(S^n;\mathbb{Z})$ is $\mathbb{Z}$ for $k=0,n$ and 0 otherwise. Duality gives $H_{n-k}(S^n;\mathbb{Z}) \cong H^k(S^n;\mathbb{Z})$, which is correct.

**A closed oriented surface of genus $g$.** The Betti numbers are $\beta_0=1$, $\beta_1=2g$, $\beta_2=1$. The Euler characteristic is $\chi=2-2g$. Poincaré duality gives the symmetry $\beta_0=\beta_2=1$ and $\beta_1=\beta_1$.

## Non-orientable manifolds

If $M$ is not orientable, Poincaré duality fails with integer coefficients. However, it holds with $\mathbb{Z}/2\mathbb{Z}$ coefficients because every manifold is orientable over $\mathbb{F}_2$. For example, $\mathbb{RP}^2$ has $H_0=\mathbb{Z}$, $H_1=\mathbb{Z}/2\mathbb{Z}$, $H_2=0$ over $\mathbb{Z}$, but $H_k(\mathbb{RP}^2;\mathbb{F}_2)=\mathbb{F}_2$ for $k=0,1,2$. Over $\mathbb{F}_2$, $\beta_0=\beta_2=1$ and $\beta_1=1$, satisfying duality.

## Alexander duality

**Alexander duality.** Let $A \subseteq S^n$ be a compact, locally contractible subset. Then

$$\widetilde{H}^k(A;\mathbb{Z}) \cong \widetilde{H}_{n-k-1}(S^n \setminus A;\mathbb{Z}).$$

**Application to knot theory.** Let $K \cong S^1$ be a tame knot in $S^3$. Alexander duality gives

$$\widetilde{H}_1(S^3 \setminus K;\mathbb{Z}) \cong \widetilde{H}^1(K;\mathbb{Z}) \cong \mathbb{Z}.$$

Every tame knot has the same first homology, so $H_1$ does not distinguish knots. The **knot group** $\pi_1(S^3 \setminus K)$ is a stronger invariant; its abelianization is $H_1$, but the nonabelian structure distinguishes knots.

## Poincaré--Lefschetz duality

For a compact $R$-oriented $n$-manifold $M$ with boundary $\partial M$, **Poincaré--Lefschetz duality** states

$$H^k(M;R) \cong H_{n-k}(M,\partial M;R), \qquad H^k(M,\partial M;R) \cong H_{n-k}(M;R).$$

The fundamental class $[M]$ lives in $H_n(M,\partial M;R)$. This reduces to ordinary Poincaré duality when $\partial M=\emptyset$.

## Common errors

**Error: applying Poincaré duality to non-compact manifolds.** For non-compact $M$, one must use compactly supported cohomology $H^k_c(M;R)$ or locally finite homology. The isomorphism is $H^k_c(M;R) \cong H_{n-k}(M;R)$.

**Error: forgetting the orientability hypothesis over $\mathbb{Z}$.** Poincaré duality with integer coefficients requires orientability. Over $\mathbb{F}_2$, every manifold is orientable, but over $\mathbb{Z}$, non-orientable manifolds like $\mathbb{RP}^{2n}$ or the Klein bottle do not satisfy duality.

**Error: confusing cohomology and homology duality.** Poincaré duality relates cohomology to homology: $H^k \cong H_{n-k}$. It does not say $H_k \cong H_{n-k}$ in general, though over a field where cohomology and homology are dual, this follows.

## Worked example: the genus-$g$ surface

Let $\Sigma_g$ be a closed oriented surface of genus $g$. A CW structure has one 0-cell, $2g$ 1-cells $a_1,b_1,\ldots,a_g,b_g$, and one 2-cell attached along $\prod_{i=1}^g [a_i,b_i]$. The cellular chain complex has $d_1=0$ and $d_2=0$ (the attaching map has degree 0 on each 1-cell), so

$$H_0=\mathbb{Z}, \quad H_1=\mathbb{Z}^{2g}, \quad H_2=\mathbb{Z}.$$

Poincaré duality gives $H^0 \cong H_2=\mathbb{Z}$, $H^1 \cong H_1=\mathbb{Z}^{2g}$, $H^2 \cong H_0=\mathbb{Z}$. Let $u\in H^2(\Sigma_g;\mathbb Z)$ be the cohomological orientation generator satisfying $\langle u,[\Sigma_g]\rangle=1$. The cup product pairing on $H^1$ is a symplectic form: for suitable generators $a_i,b_i$, $a_i\smile b_j=\delta_{ij}u$ and $a_i\smile a_j=b_i\smile b_j=0$.

## Proof scope: a closed combinatorial manifold

The broad topological duality statements above are preserved. We now prove Poincare duality completely for a finite triangulated closed combinatorial n-manifold with an integral orientation, over any commutative coefficient ring R. A combinatorial manifold means that the link of every p-simplex is a piecewise-linear sphere of dimension n-p-1. This guarantees that the dual blocks constructed below are balls. It is stronger than merely drawing triangles on an arbitrary topological space.

No theorem claiming that every topological manifold admits such a triangulation is used. General topological-manifold duality, Alexander duality, and Poincare–Lefschetz duality remain precisely identified imported theorems after the proof. The coefficient and compactness distinctions in the original text continue to apply.

## 1. Orientation and a fundamental chain

Choose orientations on all simplices. An integral orientation of a connected closed triangulated manifold assigns coefficients epsilon_sigma=±1 to its n-simplices so adjacent top simplices induce opposite orientations on a shared codimension-one face. Set
$c=\sum_{\dim\sigma=n}\epsilon_\sigma\,\sigma.$
Every codimension-one face belongs to two top simplices and its coefficients cancel, so partial c=0. Tensor its coefficients with R.

At an interior point of a top simplex, the image of c in local homology is its oriented disk generator, by excision and the relative disk computation. At a point on a lower face, the link-sphere condition gives a small piecewise-linear ball neighborhood. Its oriented top simplices still cancel internally and restrict to the generator of that ball relative to its puncture. Hence c gives a fundamental class at every point.

This also explains the mod-two alternative. With coefficients F2, all top coefficients can be one and adjacent signs disappear. Thus the same construction works without an integral orientation in characteristic two.

## 2. Dual blocks are actual cells

Pass to the barycentric subdivision K'. Its vertices are barycenters b_sigma of nonempty simplices of K, and its simplices are strict flags of such simplices.

For a p-simplex sigma, its closed dual block D(sigma) is the union of the flags beginning at sigma and all their faces. Equivalently its remaining vertices correspond to chains of proper cofaces of sigma. Those cofaces correspond to simplices in the link of sigma. Thus D(sigma) is combinatorially a cone on the barycentric subdivision of that link.

The link is a piecewise-linear sphere, so its cone is a closed (n-p)-ball. Its boundary consists of dual blocks of proper cofaces. The codimension-one facets are D(tau) for (p+1)-simplices tau containing sigma. These blocks partition the manifold into a finite dual CW structure. Intersections are unions of dual faces; no nonmanifold branching is present because the links were spheres.

This ball property is the key geometric input. For an arbitrary triangulated space, a link may be disconnected or have different topology, and the cone need not be a cell. The ensuing cochain-to-chain isomorphism would then fail.

## 3. The full incidence sign

Orient D(sigma) by the rule
$\operatorname{or}(\sigma)\wedge
\operatorname{or}(D(\sigma))=\operatorname{or}(M).$
Write [tau:sigma] for the usual oriented boundary incidence of a p-face sigma in a (p+1)-simplex tau.

**Lemma 15.1.**
$\partial D(\sigma)=(-1)^{p+1}
\sum_{\tau^{p+1}\supset\sigma}[\tau:\sigma]D(\tau).$

*Proof.* Near the incidence choose nu to be the outward normal of the face sigma within tau. The boundary orientation convention gives
$\operatorname{or}(\tau)
=[\tau:\sigma]\,\nu\wedge\operatorname{or}(\sigma)
=[\tau:\sigma](-1)^p\operatorname{or}(\sigma)\wedge\nu.$
Combining this with the defining dual orientations shows
$\operatorname{or}(D(\sigma))
=[\tau:\sigma](-1)^p\nu\wedge\operatorname{or}(D(\tau))$.
At the corresponding facet of D(sigma), its outward direction points from sigma toward the interior of tau, hence is -nu. Moving this minus sign into the boundary convention gives coefficient (-1)^{p+1}[tau:sigma]. Every facet is one such coface; lower-dimensional faces cancel in its oriented boundary. Summing gives the formula. $\square$

The sign depends on the declared orientation convention. It cannot safely be guessed from an unoriented dual drawing.

## 4. An isomorphism of complexes

Let sigma* be the cochain basis dual to oriented sigma and put
$s_p=(-1)^{p(p+1)/2},\qquad
\Phi_p(\sigma^*)=s_pD(\sigma).$
Since delta sigma*=sum_tau[tau:sigma]tau* and s_{p+1}=(-1)^{p+1}s_p, Lemma 15.1 gives
$\partial\Phi_p=\Phi_{p+1}\delta.$
There is exactly one dual (n-p)-cell for each p-simplex, so Phi is an isomorphism from the reversed simplicial cochain complex to the dual cellular chain complex. Therefore
$H^p(K;R)\cong H_{n-p}(K^*;R).$
The dual CW structure has the same underlying manifold, so the cellular theorem identifies its homology with H_{n-p}(M;R).

This already proves an abstract duality isomorphism. To establish the stated theorem, we still must show it is the cap map with the fundamental class, up to the harmless dimension sign. That identification is supplied next, rather than silently calling any isomorphism Poincare duality.

## 5. Comparison with singular theory

For a finite simplicial complex, inclusion of oriented simplex chains into singular chains is a homology isomorphism. One proof inducts on its number of simplices: remove the interior of a maximal simplex, leaving a subcomplex L. Relative simplicial homology is one copy of Z in that simplex dimension; the cofibration quotient and excision argument in the cellular chapter identifies singular relative homology with the same disk-relative-boundary group. The characteristic simplex maps its oriented generator to that generator. The pair exact sequences and five lemma then prove the absolute comparison, starting with a vertex. Disconnected zero-dimensional attachments are handled directly in H0.

This integral chain comparison is in fact a chain-homotopy equivalence. Its mapping cone is an acyclic free integral chain complex. Cycles and boundaries in such a complex are free, and choosing lifts of boundary bases constructs a contracting homotopy degree by degree, exactly as in the split-cycle argument of the coefficient chapter. A contractible mapping cone gives a chain-homotopy inverse. Tensoring and applying Hom preserve those chain homotopies. Consequently the simplicial homology and cohomology comparisons hold over every R used in this proof, not just over a field.

## 6. Cap product is the dual-block map

Use the front/back cap convention from the preceding chapter. The identity there says, because partial c=0,
$\partial(\alpha\frown c)=(-1)^{p+1}
(\delta\alpha)\frown c.$
Thus the adjusted map
$\Psi_p(\alpha)=s_p\,\operatorname{Sd}(\alpha\frown c)$
into barycentric simplex chains satisfies partial Psi_p=Psi_{p+1}delta, the same chain identity as Phi. Here Sd is the oriented subdivision chain map.

**Lemma 15.2.** Phi and Psi are chain homotopic as maps from the reversed cochain complex.

*Proof.* For a basis cochain sigma*, both outputs lie in the closed star of sigma. The dual block does by definition. The cap expression selects top simplices whose front p-face is sigma, and every remaining back face is in a coface of sigma, hence in its closed star. Subdivision preserves that support.

For any proper coface tau, its closed star is contained in the closed star of sigma. These stars are contractible, each being a simplex joined to its link. They therefore supply nested acyclic carriers for the boundary of the reversed cochain basis.

In chain degree zero, corresponding to p=n, both outputs have augmentation s_n epsilon_sigma: the dual point has that orientation coefficient and the cap expression selects the final vertex with the same coefficient. Their difference is augmentation zero. Inductively, if a homotopy H has been defined below a chain degree, then
$\Phi(\sigma^*)-\Psi(\sigma^*)-H(\delta\sigma^*)$
is a cycle in that closed star. Contractibility fills it there. Define H on the basis element by that filler. This is exactly the elementary acyclic-carrier induction proved in the coefficient chapter, now with genuine contractible stars. It gives partial H+H delta=Phi-Psi. $\square$

**Theorem 15.3 (proved triangulated Poincare duality).** For a finite closed oriented combinatorial n-manifold, cap product with [c] is an isomorphism
$H^p(M;R)\xrightarrow{\ \frown[c]\ }H_{n-p}(M;R).$

*Proof.* Phi induces an isomorphism by its basis-level chain isomorphism and the cellular theorem. Lemma 15.2 identifies its induced map with s_p times cap followed by subdivision. Subdivision and singular/simplicial comparisons induce isomorphisms. Multiplication by s_p=±1 is also invertible. Hence cap itself is an isomorphism. $\square$

The proof in characteristic two omits every orientation sign and works on a closed combinatorial manifold without integral orientability. It is not an argument that integral orientations are unnecessary over Z.

## 7. Consequences with coefficients kept straight

Over a field, cohomology is the dual vector space of homology. Finite triangulation gives finite dimensions, so duality implies beta_p=beta_{n-p}. In odd dimension the signed Euler terms cancel in complementary pairs, giving chi=0. Using F2 makes this conclusion available even when integral orientation is absent.

Over the integers, cohomology includes Ext from the preceding homology degree. Thus duality is not the assertion H_p≈H_{n-p} as integral groups. For an oriented closed three-manifold with torsion in H1, that torsion appears in H² via Ext and is matched back to H1 by Poincare duality. The degree shift is essential.

The cap pairing also gives an intersection interpretation. A dual block to sigma meets sigma transversely once with the chosen local sign and misses the other p-simplex interiors. Evaluating a p-cochain on a transverse p-cycle is therefore the signed intersection with its dual chain. The identity
$<\beta,\alpha \cap c>=<\alpha \cup \beta,c>$
then relates complementary intersections to cup products.

## 8. Worked examples

### Worked example 1 — A triangulated circle

For an oriented polygonal circle, each vertex has a dual edge joining the neighboring edge barycenters, and each edge has a dual point. The constant degree-zero cocycle maps to the full oriented dual circle, generating H1. A degree-one cocycle evaluating one on the fundamental cycle caps to a point generator in H0. This explicitly exchanges dimensions zero and one.

### Worked example 2 — Surface handles and the symplectic pairing

On an oriented genus-g surface choose the usual a_i,b_i curves on each handle, with a_i crossing b_i once positively and curves on different handles disjoint. Their dual cohomology basis satisfies
$<a_i^* \cup b_j^*,[M]>=\delta_{ij}$,
with the reversed order giving the negative sign. Same-type pairings vanish by disjoint representatives. This gives the symplectic matrix in the original genus-g example. The pairing contains more information than the ranks (1,2g,1).

### Worked example 3 — RP2 detects the coefficient condition

Over Z the groups H0=Z,H1=Z/2,H2=0 prevent ordinary untwisted integral duality: H0 cohomology is Z but H2 homology is zero. Over F2 the three homology and cohomology degrees are all F2, and the mod-two fundamental cycle is the sum of its triangles. The sign-free dual-block map proves duality there. One cannot repair the integral statement merely by calling the space closed.

### Worked example 4 — A disk requires a relative target

For Dn, ordinary H0 cohomology is R, while Hn(Dn)=0 for n>0. The closed-manifold formula fails. The relative group Hn(Dn,S^{n-1})=R provides the correct target, as the stated Poincare–Lefschetz theorem predicts. The triangulated closed proof above does not automatically prove that boundary theorem: boundary dual blocks require a relative-cell construction.

## 9. Broader dualities retained as imported results

For arbitrary closed R-oriented topological manifolds, the original cap-isomorphism statement is a general theorem. Its local-to-global proof uses local homology, orientation systems, and compact-support arguments; May's duality chapters provide it. It is explicitly imported outside the combinatorial scope just proved.

Poincare–Lefschetz duality for compact manifolds with boundary requires the stated relative fundamental class and a boundary-compatible version of that argument. The noncompact theorem uses compactly supported cohomology or locally finite chains. Neither follows by deleting compactness from the displayed closed theorem.

Alexander duality is also imported. For compact locally contractible proper subsets of a sphere, the singular-cohomology version retained above applies in its usual reduced-degree conventions; for more general compact sets Cech cohomology is the appropriate replacement. The tame-knot calculation remains a consequence of that cited theorem, not a proof of Alexander duality.

These boundaries matter mathematically. A combinatorial link sphere was enough to build a dual cell ball. A wild compact subset or an arbitrary nontriangulated manifold does not supply that cell-by-cell model for free.

## Practice exercises

<a id="manifold-duality-legacy-ex-11-1"></a>
### Exercise 11.1

Prove that the Euler characteristic of a closed odd-dimensional manifold is zero.


<details>
<summary>Hint 1</summary>

Use F2 so orientability is automatic.

</details>
<details>
<summary>Hint 2</summary>

Pair complementary Betti numbers in the finite Euler sum.

</details>
<details>
<summary>Full solution</summary>

**Solution.** Use $\mathbb F_2$ coefficients, over which every closed manifold is orientable. Poincaré duality gives $\beta_k=\beta_{n-k}$, and Euler characteristic can be computed over this field. For odd $n$, the paired terms $(-1)^k\beta_k+(-1)^{n-k}\beta_{n-k}$ cancel because the two exponents have opposite parity. Thus $\chi=0$, without an integral orientability assumption. $\square$


</details>

<a id="manifold-duality-legacy-ex-11-2"></a>
### Exercise 11.2

Compute $H^*(\mathbb{RP}^n;\mathbb{F}_2)$ and verify Poincaré duality over $\mathbb{F}_2$.


<details>
<summary>Hint 1</summary>

Use the projective mod-two groups and ring.

</details>
<details>
<summary>Hint 2</summary>

Complementary degrees both have one-dimensional groups.

</details>
<details>
<summary>Full solution</summary>

**Solution.** $H^k(\mathbb{RP}^n;\mathbb{F}_2)=\mathbb{F}_2$ for $0 \leq k \leq n$. Poincaré duality over $\mathbb{F}_2$ gives $H^k \cong H_{n-k}$, and since $H_k(\mathbb{RP}^n;\mathbb{F}_2)=\mathbb{F}_2$ for $0 \leq k \leq n$, the duality holds. $\square$


</details>

<a id="manifold-duality-legacy-ex-11-3"></a>
### Exercise 11.3

Let $M$ be a closed connected oriented $4$-manifold with $H_1(M;\mathbb Q)=0$. Show that its Euler characteristic and the signature of its intersection form have the same parity.


<details>
<summary>Hint 1</summary>

Express chi and signature using b2+ and b2-.

</details>
<details>
<summary>Hint 2</summary>

Their difference contains twice an integer.

</details>
<details>
<summary>Full solution</summary>

**Solution.** Poincaré duality gives $\beta_0=\beta_4=1$ and $\beta_1=\beta_3=0$, so $\chi(M)=2+\beta_2$. If the positive and negative dimensions of the real intersection form are $b_2^+$ and $b_2^-$, then $\beta_2=b_2^++b_2^-$ and $\sigma(M)=b_2^+-b_2^-$. Hence

$$\chi(M)-\sigma(M)=2+2b_2^-,$$

which is even. Therefore $\chi(M)\equiv\sigma(M)\pmod2$. $\square$


</details>

<a id="manifold-duality-legacy-ex-11-4"></a>
### Exercise 11.4

Use Alexander duality to compute $H_*(S^3 \setminus K)$ for a tame knot $K$.


<details>
<summary>Hint 1</summary>

Use the stated Alexander duality as an input.

</details>
<details>
<summary>Hint 2</summary>

The knot has the cohomology of a circle, and reduced degree zero vanishes.

</details>
<details>
<summary>Full solution</summary>

**Solution.** Alexander duality gives $\widetilde{H}_k(S^3 \setminus K) \cong \widetilde{H}^{2-k}(K)$. Since $K \cong S^1$, $\widetilde{H}^0(K)=0$, $\widetilde{H}^1(K)=\mathbb{Z}$, and $\widetilde{H}^k(K)=0$ for $k>1$. Thus $\widetilde{H}_1(S^3 \setminus K)=\mathbb{Z}$ and $\widetilde{H}_k(S^3 \setminus K)=0$ for $k \neq 1$. Adding back the reduced $H_0$, we get $H_0=\mathbb{Z}$, $H_1=\mathbb{Z}$, and $H_k=0$ for $k \geq 2$. $\square$


</details>

## Looking forward

Chapter 16 relates homotopy groups to homology through the Hurewicz theorem, and Chapter 17 turns to persistent homology and computational topology. The duality theorems of this chapter will reappear in the study of characteristic classes and intersection theory.

## Further exercises

<a id="manifold-duality-ex-5"></a>
### Exercise 15.5

Why must the link-sphere condition be stated in the dual-block proof?

<details>
<summary>Hint 1</summary>

The dual block is a cone on a subdivided link.

</details>

<details>
<summary>Hint 2</summary>

A cone on an arbitrary space need not be a ball.

</details>

<details>
<summary>Full solution</summary>

For a p-simplex, the link must be a PL sphere of dimension n-p-1 so its cone is a closed (n-p)-ball. This makes the dual blocks a CW cell structure. If the link branches or has different topology, the cone may not be a cell and the basis-level dual-chain argument no longer proves manifold duality.

</details>

<a id="manifold-duality-ex-6"></a>
### Exercise 15.6

Verify the dimension sign s_p makes Phi a chain map.

<details>
<summary>Hint 1</summary>

Use s_{p+1}/s_p.

</details>

<details>
<summary>Hint 2</summary>

Compare it with the incidence sign.

</details>

<details>
<summary>Full solution</summary>

From s_p=(-1)^(p(p+1)/2), the quotient s_{p+1}/s_p is (-1)^(p+1). Multiplying the raw dual boundary formula by s_p therefore changes its coefficient to s_{p+1}, exactly matching Phi applied to the coboundary. Hence partial Phi_p=Phi_{p+1}delta.

</details>

<a id="manifold-duality-ex-7"></a>
### Exercise 15.7

In the cap-comparison argument, why is the closed star a valid carrier?

<details>
<summary>Hint 1</summary>

Both selected chains lie in cofaces of sigma.

</details>

<details>
<summary>Hint 2</summary>

Coface stars are nested inside its star.

</details>

<details>
<summary>Full solution</summary>

The dual block is built from flags of cofaces of sigma. The cap chain selects a top simplex with sigma as front face and leaves a back face inside that coface. Both supports lie in the closed star. For tau containing sigma, star(tau) is contained in star(sigma), matching the reversed-cochain boundary. Each star is contractible, so cycle fillers exist.

</details>

<a id="manifold-duality-ex-8"></a>
### Exercise 15.8

Use duality to show a closed oriented connected three-manifold has beta1=beta2 over a field.

<details>
<summary>Hint 1</summary>

Use complementary degrees.

</details>

<details>
<summary>Hint 2</summary>

Finite dimensions let a dual space have the same dimension.

</details>

<details>
<summary>Full solution</summary>

Poincare duality gives H¹≈H2 and field UCT gives dim H¹=dim H1. Thus beta2=beta1. Connectedness and orientation also give beta0=beta3=1, so the Euler sum is zero. The statement compares dimensions, not an asserted canonical identification of vector bases.

</details>

<a id="manifold-duality-ex-9"></a>
### Exercise 15.9

Explain why ordinary H0(D2) cohomology cannot be dual to H2(D2).

<details>
<summary>Hint 1</summary>

The disk has boundary.

</details>

<details>
<summary>Hint 2</summary>

Compute the two groups directly.

</details>

<details>
<summary>Full solution</summary>

H0(D2;R)=R because the disk is connected, while H2(D2;R)=0 because it is contractible. The missing boundary hypothesis invalidates the closed formula. Poincare–Lefschetz instead pairs H0 cohomology with H2(D2,S1)=R using a relative fundamental class.

</details>

<a id="manifold-duality-ex-10"></a>
### Exercise 15.10

Which parts of the chapter remain cited inputs rather than covered by the dual-block proof?

<details>
<summary>Hint 1</summary>

Inspect the proof's finite combinatorial hypotheses.

</details>

<details>
<summary>Hint 2</summary>

Separate topological and boundary variants.

</details>

<details>
<summary>Full solution</summary>

The proved case is a finite closed combinatorial manifold, integrally oriented or sign-free in characteristic two. General topological-manifold local-to-global duality, Alexander duality for compact subsets, Poincare–Lefschetz boundary duality, and noncompact support variants remain precisely cited imports. None is obtained simply by reusing a dual-cell picture without its hypotheses.

</details>

## Sources

The dual-block, incidence-sign, chain-isomorphism, and cap-comparison proofs are supplied above. Broader imported theorems are in [Hatcher, Algebraic Topology, Chapter 3](https://pi.math.cornell.edu/~hatcher/AT/ATchapters.html), and [May, A Concise Course, Chapters 20–21](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf). The original broader statements and all four old exercise solutions are preserved with their hypotheses.

## Summary

On a finite closed combinatorial manifold, link spheres make dual blocks into cells. Their oriented incidence matrix is the transposed coboundary matrix up to an explicit dimension sign. A contractible-star carrier argument identifies that chain isomorphism with cap product by the fundamental class, proving Poincare duality in the stated scope. General topological, boundary, noncompact, and Alexander variants remain explicitly cited imports.
