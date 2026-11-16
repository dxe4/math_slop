var e=`---
parent_id: book-advanced-algebraic-topology
chapter_id: generalised-cohomology-spectra
title: "Generalised Cohomology and Spectra"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Generalised Cohomology and Spectra

## Beyond ordinary cohomology

Ordinary cohomology $H^*(X;G)$ satisfies the Eilenberg--Steenrod axioms: homotopy invariance, excision, exactness, additivity, and dimension (the cohomology of a point is $G$ in degree 0 and 0 otherwise). A **generalized cohomology theory** $h^*$ satisfies all axioms except dimension. It assigns to each space $X$ a sequence of abelian groups $h^n(X)$ with natural transformations $\\delta:h^n(A) \\to h^{n+1}(X,A)$ for pairs, satisfying the same long exact sequences and excision.

**Examples.**
- **$K$-theory** $K^*(X)$: classes of virtual vector bundles over $X$. For compact $X$, $K^0(X)$ is the Grothendieck group of isomorphism classes of complex vector bundles.
- **Complex cobordism** $MU^*(X)$: the generalized cohomology theory represented by the Thom spectrum $MU$. Geometric descriptions in terms of stably complex manifolds and maps require dimension, compactness, and transversality hypotheses and are not developed here.
- **Stable cohomotopy** $\\pi^*_s(X)$: the cohomology theory represented by the sphere spectrum.

## The Brown representability theorem

**Brown representability.** A reduced generalized cohomology theory $\\widetilde h^*$ on pointed CW complexes is represented by spaces $E_n$ with weak equivalences $E_n\\simeq\\Omega E_{n+1}$:

$$\\widetilde h^n(X)\\cong[X,E_n]_*.$$

For the associated unreduced theory, $h^n(X)\\cong[X_+,E_n]_*$, where $X_+$ adds a disjoint basepoint. A **spectrum** is a sequence $(E_n)$ with structure maps $\\sigma_n:\\Sigma E_n\\to E_{n+1}$. It is an **$\\Omega$-spectrum** when the adjoints $E_n\\to\\Omega E_{n+1}$ are weak equivalences. General spectra need not already have this stronger form, though suitable replacements do. Ordinary cohomology with coefficients $G$ is represented by the Eilenberg--MacLane spectrum $HG$ with $HG_n=K(G,n)$.

## Suspension and stability

The **suspension isomorphism**

$$\\widetilde h^n(X)\\cong\\widetilde h^{n+1}(\\Sigma X)$$

holds for reduced generalized cohomology. Iterating gives $\\widetilde h^n(X)\\cong\\widetilde h^{n+k}(\\Sigma^kX)$. This expresses stability of the theory, but iteration alone does not define the stable homotopy groups of spheres. Those groups use the stabilization maps in the directed system $\\pi_{n+k}(S^n)\\to\\pi_{n+k+1}(S^{n+1})$.

The **stable homotopy category** has objects spectra and morphisms stable homotopy classes of maps. It is the natural setting for algebraic topology beyond the unstable world of spaces.

## Domain, coefficients and the cofiber exact sequence

**L5 scope.** Use the actual [sphere calculations](homotopy-groups-spheres.md), [CW and quotient constructions](../algebraic-topology-chains-spaces/cw-complexes.md), and [vector bundles](../smooth-manifolds/vector-bundles-tangent-bundle.md). Cohomology theories below are defined on CW pairs, with all integer degrees. Reduced theories are defined on pointed CW spaces, vanish on the one-point space and satisfy the wedge axiom. Representability, Bott periodicity and Eilenberg–MacLane representability remain explicit external theorems; their conclusions are not purported consequences of the elementary calculations that follow.

For a CW pair $(X,A)$, reduced cohomology of the quotient represents the relative group. The quotient is legitimate because the inclusion is a cofibration; an arbitrary quotient of arbitrary spaces does not automatically have the same exactness property. The cofiber sequence gives
$$\\cdots\\longrightarrow\\widetilde h^n(X/A)\\longrightarrow\\widetilde h^n(X)\\longrightarrow\\widetilde h^n(A)\\longrightarrow\\widetilde h^{n+1}(X/A)\\longrightarrow\\cdots.$$
This is a contravariant sequence. The direction matters: collapsing $X$ to $X/A$ induces a map from the quotient's cohomology into that of $X$. Exactness describes kernels and images, not arbitrary isomorphisms between adjacent terms.

Take the reduced cone on a pointed CW space. It is contractible, and quotienting by its base gives the reduced suspension. The cone terms vanish, so the connecting map in the cofiber sequence is an isomorphism from $\\widetilde h^n(X)$ to $\\widetilde h^{n+1}(\\Sigma X)$. A map of pointed spaces induces a map of these cone pairs, proving naturality of suspension. Iterating it changes both the space and the degree; it is not an isomorphism between arbitrary degrees on one fixed space.

The coefficient group is $h^n(pt)=\\widetilde h^n(S^0)$, where the zero-sphere has one chosen basepoint and one other point. The reduced group of the one-point based space is zero and is not this coefficient group. Suspending the zero-sphere repeatedly yields
$$\\widetilde h^q(S^m)\\cong h^{q-m}(pt).$$
The minus sign in the shifted degree follows by moving one suspension at a time to the other side of the formula. It is a frequent source of incorrect connectivity claims.

For a based nonempty CW space, the unreduced theory splits as its coefficient group plus its reduced group. The inclusion of the basepoint and collapse to a point are retractions in opposite directions. Their induced cohomology maps make restriction to the point surjective in every degree. The pair exact sequence then has zero connecting maps and identifies the relative group with the kernel of that restriction, giving
$$h^q(X)\\cong h^q(pt)\\oplus\\widetilde h^q(X).$$
The chosen basepoint supplies this splitting; it should not be confused with the reduced theory of an unbased empty space.

## Wedges and a first complete family of computations

The cofibration $X\\to X\\vee Y$ has quotient $Y$. Collapsing the other summand gives a retraction onto $X$, so the cofiber exact sequence splits as in the preceding argument. Hence the reduced theory of a finite wedge is the direct sum of the reduced theories of its summands. For an infinite wedge, the wedge axiom gives a product of groups. Finite products and finite direct sums agree for abelian groups, but that agreement does not extend to infinitely many nonzero factors.

These deductions are genuine calculations once the coefficients are known. They also reveal exactly what remains unknown when the coefficients themselves are difficult. A generalized theory does not become ordinary cohomology merely because it has the same suspension axiom; its coefficient groups are allowed to occupy other degrees, and those groups control even its simplest sphere values.

## Worked example 1: spheres and the sign of a stable coefficient

Ordinary integral cohomology has one nonzero point coefficient, the integers in degree zero. The sphere shift therefore gives one reduced copy of the integers in degree $m$ on $S^m$, with zero in other degrees. Stable cohomotopy instead has point coefficient in degree $q$ equal to the stable sphere stem in degree $-q$. Consequently its reduced degree-$q$ group on $S^m$ is the stable stem in degree $m-q$.

For $q=m$ this is the integers, and for $q>m$ it is zero by the negative-stem vanishing proved in the previous chapter. For $q<m$, it is a positive stable stem whose value requires additional computation. The suspension formula identifies the problem; it does not justify filling those entries with zeros. This comparison uses the same space and cohomological degree convention for both theories.

## What a spectrum contributes

For pointed spaces, a map $\\Sigma X\\to Y$ is the same as a map $X\\to\\Omega Y$: send $x$ to the loop obtained by following the suspension coordinate. The basepoint and collapsed ends supply the loop endpoints. The inverse evaluates the loop. The compactly generated mapping-space convention makes these correspondences continuous, and applying the same construction to homotopies gives the based homotopy-class adjunction.

A prespectrum records spaces with suspension structure maps, or equivalently their adjoints into the next loop spaces. An Omega-spectrum requires those adjoints to be weak equivalences. On CW sources and CW-type target models, weak equivalences then give the needed homotopy-class identifications, by the usual CW Whitehead theorem. These identifications align the represented groups with the suspension isomorphism. They are additional structure, not a property of every arbitrary sequence of spaces.

In an integer-indexed convention, an Omega-spectrum represents degree $q$ by its $q$th space. Ordinary cohomology uses the Eilenberg–MacLane spaces in nonnegative indices and contractible spaces in negative indices. In a nonnegative-index convention one instead shifts far enough and takes the corresponding stabilized homotopy classes. Both describe the same graded theory when their indexing is kept consistent. The sphere prespectrum is naturally given by its nonnegative sphere levels; it is not already an Omega-spectrum, as an exercise below demonstrates directly.

Brown representability is a deep theorem supplying representing spaces for a reduced CW cohomology theory with the stated exactness and wedge properties, then the compatible loop-space models. It is imported here, not proved by the suspension calculation. Likewise the Eilenberg–MacLane representability theorem is what connects ordinary cohomology to its representing spaces. Merely knowing their single nonzero homotopy group does not prove that connection. A multiplicative theory further needs compatible product structure; representability as abelian groups alone does not manufacture a ring spectrum or its multiplication.

## Bundles and a constructive Grothendieck group

For a compact space, vector bundles form a commutative monoid under direct sum. Its Grothendieck group consists of formal pairs $(E,F)$, interpreted as $[E]-[F]$, with
$$(E,F)\\sim(E',F')\\quad\\text{when}\\quad E\\oplus F'\\oplus G\\cong E'\\oplus F\\oplus G$$
for some auxiliary bundle $G$. Direct sum of pairs defines addition, swapping the pair gives the inverse, and the trivial zero-rank bundle supplies zero. Transitivity follows by adding the two auxiliary bundles and canceling neither side: combine the two given isomorphisms after adding the intervening bundles. This construction therefore does not assume cancellation of actual bundles. Any monoid map into an abelian group extends uniquely by the difference formula, proving its universal property.

Virtual rank may be negative even though an actual bundle cannot have negative rank. Conversely a virtual rank-zero element need not vanish. Tensor product distributes over direct sum and therefore gives multiplication on the group completion. This defines the degree-zero ring for bundles. Constructing all the other degrees and proving the full generalized cohomology axioms of periodic complex K-theory uses additional machinery, including Bott periodicity; it is not achieved by the formal group completion alone.

## Worked example 2: complex bundles and K-theory on the two-sphere

Trivialize a rank-$r$ complex bundle over the two hemispherical disks and compare frames along their common equator. The transition is a loop in $GL_r(\\mathbb C)$. Triviality over a disk follows by applying the numerable-bundle lifting theorem to its frame bundle and a radial contraction from a fixed center frame; the resulting family of frames is a global trivialization. This names the bundle input used by the clutching construction.

Two equatorial loops determine the same bundle precisely when their difference is supplied by changes of frames extending over the disks. Such boundary frame changes are nullhomotopic. Conversely, if two loops are homotopic, their pointwise quotient is nullhomotopic and extends over one disk; use that extension as a frame change to obtain a bundle isomorphism. Constant factors and basepoint adjustments do not create an extra invariant because the matrix group is connected. Thus the classification is by the loop homotopy class.

Polar deformation retracts $GL_r(\\mathbb C)$ to $U(r)$: send $A$ to $A(A^*A)^{-t/2}$ as $t$ runs from zero to one. Positive Hermitian spectral calculus proves existence, continuity and invertibility along this deformation. The determinant induces an isomorphism from $\\pi_1(U(r))$ to the integers. For $r=1$ this is the circle winding number. For higher rank, it follows from the determinant fibration and simple connectivity of $SU(r)$, supplied by the actual [classical-groups continuation](../lie-groups-lie-algebras/classical-groups-capstone.md). Hence a positive-rank bundle over the sphere is classified by its rank and integer determinant winding.

Direct sum adds both rank and winding. Group completion therefore gives two independent integers. If $H$ is the tautological Hopf line, its clutching winding is a generator, with sign depending on the equatorial frame convention. Put $\\alpha=[H]-[1]$ and use that sign convention to identify the second integer. Then
$$K^0(S^2)=\\mathbb Z[1]\\oplus\\mathbb Z\\alpha.$$
This is an independent clutching proof of the group stated in the retained Bott-based exercise. It does not prove Bott periodicity in all degrees or for all spaces.

The ring is also determined here. The rank-two bundles $H^{\\otimes2}\\oplus1$ and $H\\oplus H$ have the same determinant winding and rank, so the proved classification makes them isomorphic. In the Grothendieck ring this gives $\\alpha^2=0$. Thus the ring is $\\mathbb Z[\\alpha]/(\\alpha^2)$. This argument supplies the multiplicative relation rather than inferring it from the additive rank-two group.

## Worked example 3: a finite wedge and rational information

For the wedge of two two-spheres, the reduced wedge splitting gives two copies of the reduced K-group, while the unreduced point coefficient contributes one more integer. Hence its degree-zero K-group is the integers in three independent directions: rank and one reduced Hopf difference on each sphere. A class restricting to zero on one sphere can still be nonzero on the other, so a single restricted observation cannot classify it.

Rationalizing an abelian group kills every torsion element. If $mx=0$ with positive integer $m$, then $x\\otimes1=(mx)\\otimes(1/m)=0$. Consequently a rational characteristic map, even when it becomes an isomorphism after tensoring with the rationals, cannot recover integral torsion information. On the two-sphere no such torsion occurs in the group just computed, but that special fact cannot be generalized from its rank alone. The full Chern-character theorem is an additional result, not proved by this elementary tensor calculation.

## Common errors

**Error: assuming generalized theories compute the same invariants.** $K$-theory detects different information than ordinary cohomology. For example, $K^0(S^2)=\\mathbb{Z}^2$ (generated by the trivial line bundle and the tautological bundle), while $H^0(S^2)=\\mathbb{Z}$. The Chern character relates $K$-theory to rational cohomology but loses torsion information.

**Error: confusing connective and non-connective spectra.** A spectrum $E$ is connective when $\\pi_k(E)=0$ for $k<0$, equivalently its represented cohomology satisfies $E^n(pt)=0$ for $n>0$. Ordinary cohomology, connective $K$-theory, and the complex cobordism spectrum $MU$ are connective; periodic $K$-theory and periodic versions of cobordism are not.

**Error: forgetting that spectra are not spaces.** The homotopy category of spectra is triangulated, not modelled directly on spaces. Constructions like smash products require careful definitions.

## Practice exercises

### Exercise 13.1

Show that $K^0(S^2) \\cong \\mathbb{Z}^2$ and identify the generators.

<details><summary>Hint 1</summary>

Separate rank from reduced bundle information.

</details>

<details><summary>Hint 2</summary>

The clutching proof above independently identifies the same two generators.

</details>

<details><summary>Full solution</summary>

**Solution.** By the Bott periodicity theorem, $K^0(S^2) \\cong K^0(pt) \\oplus \\widetilde{K}^0(S^2)$. The reduced group is $\\mathbb{Z}$, generated by the difference $[H]-[1]$ where $H$ is the tautological line bundle on $\\mathbb{CP}^1=S^2$. Thus $K^0(S^2)=\\mathbb{Z} \\cdot [1] \\oplus \\mathbb{Z} \\cdot ([H]-[1])$. $\\square$

</details>

### Exercise 13.2

For a reduced generalized cohomology theory, prove that its coefficient group $h^n(pt):=\\widetilde h^n(S^0)$ is isomorphic to $\\widetilde h^{n+1}(S^1)$.

<details><summary>Hint 1</summary>

The coefficient uses a based zero-sphere, not the one-point reduced space.

</details>

<details><summary>Hint 2</summary>

Apply exactly one suspension isomorphism.

</details>

<details><summary>Full solution</summary>

**Solution.** The based suspension of $S^0$ is $S^1$. Therefore

$$h^n(pt)=\\widetilde h^n(S^0)\\cong\\widetilde h^{n+1}(\\Sigma S^0)=\\widetilde h^{n+1}(S^1).$$

$\\square$

</details>

### Exercise 13.3

Explain why ordinary cohomology with $\\mathbb{Z}$ coefficients is represented by the Eilenberg--MacLane spectrum.

<details><summary>Hint 1</summary>

Name the Eilenberg–MacLane representability theorem as an input.

</details>

<details><summary>Hint 2</summary>

A single homotopy-group description alone does not identify every mapping set.

</details>

<details><summary>Full solution</summary>

**Solution.** The Eilenberg--MacLane representability theorem gives a natural bijection $\\widetilde H^n(X;\\mathbb Z)\\cong[X,K(\\mathbb Z,n)]_*$ for pointed CW complexes. The standard equivalences $K(\\mathbb Z,n)\\simeq\\Omega K(\\mathbb Z,n+1)$ assemble these spaces into the $\\Omega$-spectrum $H\\mathbb Z$. This representability theorem is stronger than a direct application of Hurewicz and the universal coefficient theorem. $\\square$

</details>

### Exercise 13.4

Show that the stable homotopy groups of spheres $\\pi_k^s=\\varinjlim_n \\pi_{n+k}(S^n)$ are the coefficients of stable cohomotopy theory.

<details><summary>Hint 1</summary>

Keep the cohomological degree sign distinct from the stable stem.

</details>

<details><summary>Hint 2</summary>

The levelwise sphere prespectrum needs passage to the stable category or replacement.

</details>

<details><summary>Full solution</summary>

**Solution.** The spaces $S^n$ with their suspension structure maps form the sphere prespectrum; after passage to the stable category (or an $\\Omega$-spectrum replacement) it represents stable cohomotopy. Its coefficient in degree $-k$ is

$$\\varinjlim_n[S^{n+k},S^n]=\\varinjlim_n\\pi_{n+k}(S^n)=\\pi_k^s.$$

Thus the coefficients are the stable homotopy groups of spheres. The levelwise sphere prespectrum is not itself an $\\Omega$-spectrum. $\\square$

</details>

### Exercise 13.5

For a connective represented cohomology theory, compute $\\widetilde h^7(S^3)$ from the coefficient convention and explain the sign.

<details><summary>Hint 1</summary>

Each suspension lowers the coefficient degree when moved out of the sphere.

</details>

<details><summary>Hint 2</summary>

A connective spectrum has zero positive cohomological point coefficients.

</details>

<details><summary>Full solution</summary>

The sphere shift gives $\\widetilde h^7(S^3)\\cong h^4(pt)$. This is zero for a connective spectrum, because it is the negative-fourth homotopy group of that spectrum. Replacing the difference by $3-7$ in the cohomological coefficient would reverse the convention and could yield a completely different group. Stable homotopy stem and cohomological coefficient indices have opposite signs.

</details>

### Exercise 13.6

Compute $K^0(S^2\\vee S^2)$ as an abelian group, distinguishing rank from reduced classes.

<details><summary>Hint 1</summary>

The reduced wedge group is the sum of the two reduced sphere groups.

</details>

<details><summary>Hint 2</summary>

The connected wedge has one shared rank coefficient.

</details>

<details><summary>Full solution</summary>

Each reduced sphere group is generated by one Hopf difference. Their finite wedge has reduced group $\\mathbb Z^2$, and the unreduced splitting adds one rank copy of the integers. Thus the result is $\\mathbb Z^3$, with one common rank and two independently restricted reduced classes. Adding two separate rank copies would double-count the value at the common basepoint.

</details>

### Exercise 13.7

In $K^0(S^2)=\\mathbb Z[\\alpha]/(\\alpha^2)$, multiply $2+3\\alpha$ and $1-2\\alpha$. What does the constant term record?

<details><summary>Hint 1</summary>

Expand first, then use the proved nilpotence relation.

</details>

<details><summary>Hint 2</summary>

Rank is multiplicative under tensor product.

</details>

<details><summary>Full solution</summary>

The product is $2-4\\alpha+3\\alpha-6\\alpha^2=2-\\alpha$. Its constant term is rank two, the product of ranks two and one. The reduced coefficient retains bundle information that rank misses. Formal subtraction is allowed because these are virtual classes; this computation does not interpret every expression with negative coefficients as an actual negative-rank bundle.

</details>

### Exercise 13.8

Prove directly that rationalization loses an element of finite order, and explain why a rational isomorphism is insufficient to recover it.

<details><summary>Hint 1</summary>

If $mx=0$, move the scalar $m$ across a tensor product.

</details>

<details><summary>Hint 2</summary>

Every positive integer is invertible in the rational factor.

</details>

<details><summary>Full solution</summary>

The identity $x\\otimes1=(mx)\\otimes(1/m)$ makes the rationalized class zero. A group with extra finite torsion can therefore have the same rationalization as one without it. An isomorphism after rationalization determines no such missing torsion order or generator. Additional integral information is required, even when the rational characteristic map is natural and multiplicative.

</details>

### Exercise 13.9

Show that the sphere prespectrum is not already an Omega-spectrum by examining $S^1\\to\\Omega S^2$ on its second homotopy group.

<details><summary>Hint 1</summary>

The higher homotopy groups of the circle vanish.

</details>

<details><summary>Hint 2</summary>

Loop adjunction identifies the second group of the target with $\\pi_3(S^2)$.

</details>

<details><summary>Full solution</summary>

The source has second homotopy group zero, whereas $\\pi_2(\\Omega S^2)\\cong\\pi_3(S^2)\\cong\\mathbb Z$ by the actual Hopf calculation. The adjoint structure map cannot induce an isomorphism on that group and is not a weak equivalence. Stable replacement is therefore a substantive operation, despite the fact that suspension becomes an isomorphism in a specified range of degrees.

</details>

### Exercise 13.10

Why is $\\widetilde h^q(pt)=0$ compatible with a nonzero coefficient $h^q(pt)$?

<details><summary>Hint 1</summary>

The reduced and unreduced theories use different based spaces for these two expressions.

</details>

<details><summary>Hint 2</summary>

The coefficient is the reduced group of the based zero-sphere.

</details>

<details><summary>Full solution</summary>

The reduced one-point space is the zero object for a reduced theory, so its groups vanish. The unreduced coefficient is defined by adjoining a disjoint basepoint, giving the two-point based zero-sphere. Its reduced group need not vanish. The distinction is exactly the coefficient summand in the unreduced splitting, and collapsing the two definitions would erase even ordinary cohomology's degree-zero coefficient.

</details>

## Looking forward

The next reading develops obstruction theory with exact skeleton, coefficient and monodromy hypotheses. Characteristic classes, local systems and bordism then supply different uses of the cohomological and geometric structures introduced here. Stable-category foundations, Brown representability, Bott periodicity and the general Chern-character theorem remain named external inputs rather than proofs supplied by this chapter.
`;export{e as default};