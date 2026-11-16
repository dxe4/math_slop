
# Characteristic Classes

A vector bundle is assembled from local frames, but some of its global information can be expressed as cohomology classes of the base. These classes are natural under pullback and therefore give useful obstructions. Their vanishing is seldom a complete classification. This chapter constructs the Euler class from a stated Thom input, derives section and product consequences, and develops real and complex characteristic-class calculations with the projective-bundle construction inputs made explicit.

**L5 preparation.** Use [Vector Bundles](../smooth-manifolds/vector-bundles-tangent-bundle.md), [Cohomology and Cup Products](#/books/algebraic-topology-chains-spaces), [the K-theory clutching calculation](generalised-cohomology-spectra.md) and [Obstruction Theory](obstruction-theory.md). Bases are CW complexes or paracompact manifolds with numerable finite-rank bundles. The explicit calculations use finite-dimensional bases. Coefficients, orientations and rank restrictions are part of every statement below.

## Naturality and its limits

A degree-$d$ characteristic class with coefficients $R$ assigns each bundle $E\to X$ a class in $H^d(X;R)$ and obeys $c(f^*E)=f^*c(E)$ for every map between the allowed bases. Isomorphic bundles must receive the same class. Pullback naturality makes a nonzero class an obstruction whenever the proposed geometric structure would force that class to vanish. It does not say that the class records every feature of the original transition functions.

For bundles classified by a universal bundle over a classifying space, every universal cohomology class produces such a rule by pullback. Conversely a natural rule is determined by its value on that universal bundle, because every allowed bundle is its pullback. This is the concrete classifying-space content behind the usual Yoneda language. Existence of the required universal classification theorem is an input; writing the word naturality does not construct a classifying space or prove its cohomology ring.

## The Thom input and the Euler class

Choose a fiber metric on a real rank-$r$ bundle. Let $D(E)$ and $S(E)$ be its disk and sphere bundles. We import the oriented Thom theorem: an orientation gives a relative class $U_E\in H^r(D(E),S(E);\mathbb Z)$ restricting to the positive generator on every fiber disk, and cup with that class gives the Thom isomorphism. Without an orientation the corresponding integral statement uses the orientation coefficient system; with mod-two coefficients there is always a Thom class. A full proof of this general theorem is not supplied here.

Send the relative Thom class to absolute disk-bundle cohomology, then pull back along the zero section. The resulting class is the Euler class $e(E)\in H^r(X;\mathbb Z)$. A bundle pullback carries fiber generators to fiber generators, so uniqueness of the oriented Thom class gives pullback naturality of Euler classes. Reversing the bundle orientation negates the Thom generator and hence the Euler class. The base need not itself be oriented to define the class; a base orientation is needed later when pairing it with a fundamental class.

A nowhere-zero section forces $e(E)=0$. Normalize that section to the sphere bundle. Its inclusion in the disk bundle is fiberwise homotopic to the zero section by radial interpolation. The absolute image of a relative class restricts to zero on the sphere bundle, by the pair exact sequence. Therefore its pullback by the normalized section is zero, and homotopy invariance gives the same value for the zero section. This proves the obstruction without assuming that a section supplies a complete frame.

The Thom class for an oriented direct sum is the product of the two fiber Thom classes: on each product fiber disk it restricts to the product orientation generator, and the Thom uniqueness statement identifies it globally. Pulling back by the zero section yields
$$e(E\oplus F)=e(E)\smile e(F).$$
The orientation order is the stated order of the summands. In particular a trivial positive-rank summand forces the product to vanish. For odd rank, the fiber automorphism minus the identity reverses orientation while covering the base identity. Naturality and the orientation sign give $e(E)=-e(E)$, hence $2e(E)=0$. This is a torsion conclusion, not a universal integral vanishing theorem. On a base whose relevant cohomology has no two-torsion it does imply vanishing.

The Euler class is also the unit-sphere section obstruction. Over a characteristic $r$-disk, extend a prescribed nonzero boundary vector section into the vector bundle by the radial cone formula. The only possible zero is at its center. The pullback of the fiber Thom generator evaluates there as the degree of the normalized boundary map to $S^{r-1}$. This is exactly the cellwise section obstruction described in the previous chapter. Adding the oriented cell contributions identifies the Euler cochain and the primary obstruction class. For rank two the same argument uses the abelian winding group of the circle; it is a separate valid low-degree case rather than an application of a theorem assuming rank at least three.

## Real and complex construction inputs

For real bundles we import the mod-two projective-bundle construction and splitting principle. They supply unique Stiefel–Whitney classes with the projective relation and a flag-bundle pullback that is injective on mod-two cohomology and splits the pulled-back bundle into real lines. A real line's first class is its orientation double-cover class. For complex bundles the integral projective-bundle construction similarly supplies Chern classes and an injective flag pullback splitting into complex lines. These existence and injectivity theorems are named inputs, not deductions from a list of axioms.

On a splitting base write the real line classes as $y_i$ and complex line classes as $x_i$. The constructions give
$$w(E)=\prod_i(1+y_i),\qquad c(V)=\prod_i(1+x_i).$$
Because pullback is injective, a polynomial identity proved after a simultaneous splitting of the relevant bundles holds on the original base. Such a simultaneous splitting is obtained by successive flag pullbacks; the composite remains injective. This is why calculations with roots are legitimate even though the original bundle may have no global line decomposition.

In particular, ranks bound the positive classes, the degree-zero class is one, and direct sum concatenates the roots. Thus
$$w(E\oplus F)=w(E)w(F),\qquad c(V\oplus W)=c(V)c(W).$$
These are identities of total classes; individual degree-$i$ classes are the sums of all products whose indices add to $i$. The first real class is the orientation character: after splitting, determinant orientation is the product of line signs, so its mod-two character is the sum of the line classes, precisely the first elementary symmetric polynomial. Injectivity brings that statement back to the original bundle. Thus a real bundle is orientable exactly when its first Stiefel–Whitney class vanishes.

## Complex lines and the first Chern class

Complex line bundles are classified by maps to $\mathbb{CP}^{\infty}$, a stated universal-bundle input. Put $u=c_1(H^*)$, where $H$ is its tautological line; then $c_1(H)=-u$. Choose the generator sign accordingly. Tensor product of two universal lines gives a classifying map from the product of two projective spaces. The degree-two integral cohomology of that product has just the two factor generators, because both factors have zero first cohomology and the cellular Künneth calculation has no other degree-two term. Restricting the tensor product to either factor gives that factor's line. Therefore its first class is the sum of those two generators. Pullback proves
$$c_1(L\otimes M)=c_1(L)+c_1(M).$$
Duality gives the negative class, because tensoring with the dual is trivial. After splitting a higher-rank bundle, determinant is the tensor product of the line roots, so $c_1(V)=c_1(\det V)$. Complex conjugation negates each root, giving $c_i(\overline V)=(-1)^i c_i(V)$. Each assertion follows first for lines and then by injective splitting; none assumes the original bundle globally splits.

The top Chern class equals the Euler class of the underlying real bundle with its complex orientation. On a complex line this is the normalization of the first Chern class by its oriented real two-plane Euler class. After splitting, the Euler product formula and the product of Chern roots agree. Integral injectivity then proves the equality before pullback. In particular a nowhere-zero complex section forces the top Chern class to vanish, while lower classes can remain nonzero.

## Pontryagin classes and a torsion caution

For a real bundle define
$$p_i(E)=(-1)^i c_{2i}(E\otimes_{\mathbb R}\mathbb C)\in H^{4i}(X;\mathbb Z).$$
This gives natural integral classes. The complexification is isomorphic to its conjugate, so each odd Chern class is killed by two. Consequently the total Pontryagin class is multiplicative under direct sum after rationalization, where those odd classes vanish and the even Chern coefficients multiply in the expected way. This argument is not an unqualified proof of an integral sum formula in the presence of two-torsion: products of odd complexification Chern classes can affect the integral even coefficients. The rational and integral claims must be distinguished.

For an oriented real bundle of rank $2m$, the top class satisfies $p_m(E)=e(E)^2$. Indeed the underlying real complexification is $E\oplus E$. Its block orientation differs from the complex interleaved orientation by $(-1)^m$: moving each imaginary basis vector next to its real partner requires $2m(2m-1)/2$ transpositions. The top-Chern/Euler identity and Euler product therefore give $c_{2m}(E_{\mathbb C})=(-1)^m e(E)^2$, and the definition of $p_m$ cancels that sign. This proof states the orientation comparison that a bare formula would hide.

For a complex bundle $V$, its real underlying bundle complexifies to $V\oplus\overline V$. The complex structure's two eigenspaces after complexification, obtained from the projectors $(1\mp iJ)/2$, give that isomorphism. Expanding the second Chern coefficient yields
$$p_1(V_{\mathbb R})=c_1(V)^2-2c_2(V).$$
This identity is integral because it uses the actual conjugation formula for this complex bundle, rather than discarding arbitrary two-torsion terms.

## Worked example 1: real projective tangent classes

At a line $\ell$ in real projective $n$-space, its tangent space is $\operatorname{Hom}(\ell,\ell^\perp)$. Add the trivial line $\operatorname{Hom}(\ell,\ell)$ and use the metric identification of the line with its dual. This constructs the stable bundle isomorphism
$$T\mathbb{RP}^n\oplus1\cong(n+1)\gamma.$$
Let $x=w_1(\gamma)$, the mod-two degree-one generator, with $x^{n+1}=0$ by the projective cohomology calculation. The sum formula gives $w(T\mathbb{RP}^n)=(1+x)^{n+1}$. Its first class is $(n+1)x$, so the manifold is orientable exactly when $n$ is odd, for $n\ge1$.

For $n=4$, reduction of the binomial coefficients gives $1+x+x^4$. Thus the first and fourth classes are nonzero, while the second and third vanish. Knowing one lower class vanishes does not make the tangent bundle trivial or oriented. This calculation constructs the tangent isomorphism before invoking multiplicativity, rather than presenting the polynomial as an unexplained remembered formula.

## Worked example 2: the projective plane's Chern and Pontryagin numbers

For complex projective $n$-space the analogous tangent description is $\operatorname{Hom}(H,H^\perp)$. Adding the trivial complex endomorphism line gives $T\mathbb{CP}^n\oplus1\cong(n+1)H^*$. With $u=c_1(H^*)$, the total Chern class is $(1+u)^{n+1}$ truncated above the rank.

For the complex projective plane this gives $c_1=3u$, $c_2=3u^2$ and $p_1=3u^2$. Choose its complex orientation so that the evaluation of $u^2$ is one. The top Chern number is therefore three and the first Pontryagin number is three. Its middle intersection form is the one-by-one matrix with entry one. The agreement of its signature with one third of the Pontryagin number is consistent with the four-dimensional signature theorem, but this example does not prove that theorem for all manifolds. The characteristic-number machinery needed for a general bordism classification is additional input.

## Worked example 3: sphere tangent classes and what they miss

The outward normal gives $TS^n\oplus1\cong\varepsilon^{n+1}$, explicitly by sending a tangent vector and a normal scalar to their ambient sum. Thus all positive Stiefel–Whitney and Pontryagin classes of the sphere tangent bundle vanish. For Pontryagin this follows directly from stable complexification and the Chern sum formula with a trivial complex line, so no questionable integral torsion step is involved.

The Euler class can still be nonzero. The stereographic transition derivative is a positive scalar times $I-2vv^T$ on the equator. Correcting one chart orientation by a fixed reflection gives the reflection-product clutching map calculated in the previous chapter. Its section obstruction degree is $1+(-1)^n$, up to the consistently chosen top orientation. Hence the Euler class of an even-dimensional sphere evaluates to two, while for an odd-dimensional sphere it is zero. The nonzero even case forbids a nowhere-zero tangent field despite the vanishing positive stable classes. Vanishing of those stable classes also does not classify which odd spheres admit a complete tangent frame; that requires the separate deep parallelizability theorem quoted in the retained preview.

## Exercises with hints and full solutions

### Exercise 1

Prove that a nowhere-zero section of an oriented real bundle makes its Euler class vanish.

<details><summary>Hint 1</summary>

Normalize the section into the sphere bundle.

</details>

<details><summary>Hint 2</summary>

Compare its pullback of the absolute Thom image with that of the zero section.

</details>

<details><summary>Full solution</summary>

The two sections are homotopic inside the disk bundle by radial interpolation. The absolute image of the relative Thom class restricts to zero on the sphere bundle, so its pullback by the normalized section vanishes. Homotopy invariance makes the zero-section pullback equal to it, giving zero Euler class. The proof uses orientation for the stated integral Thom class; an unoriented integral statement requires twisted coefficients.

</details>

### Exercise 2

Explain why odd rank gives $2e(E)=0$ rather than automatically $e(E)=0$ integrally.

<details><summary>Hint 1</summary>

Use minus the identity on every fiber.

</details>

<details><summary>Hint 2</summary>

A group can have nonzero elements equal to their negatives.

</details>

<details><summary>Full solution</summary>

The fiber map reverses orientation in odd rank but covers the identity. Naturality and the Thom orientation rule therefore give $e(E)=-e(E)$. This says twice the class is zero. Nonzero two-torsion satisfies the same equation, so vanishing follows only with an additional no-two-torsion condition or further geometric information.

</details>

### Exercise 3

For a real rank-six bundle with two independent sections, which Stiefel–Whitney classes must vanish?

<details><summary>Hint 1</summary>

A metric splits off the trivial plane spanned by the sections.

</details>

<details><summary>Hint 2</summary>

The complement has rank four.

</details>

<details><summary>Full solution</summary>

The bundle splits as a trivial rank-two bundle plus a rank-four complement. The total class is that of the complement, whose classes above degree four vanish by the rank restriction. Thus the fifth and sixth classes vanish. Lower classes may be nonzero, and vanishing of the fifth and sixth alone does not prove two independent sections exist.

</details>

### Exercise 4

Compute the first Stiefel–Whitney class of $T\mathbb{RP}^7$ and explain why its value alone does not prove a full tangent frame.

<details><summary>Hint 1</summary>

Use the coefficient of the degree-one term in $(1+x)^8$.

</details>

<details><summary>Hint 2</summary>

Orientation is weaker than triviality.

</details>

<details><summary>Full solution</summary>

The first coefficient is eight modulo two, so it is zero and the manifold is orientable. This class detects the orientation character only. A full tangent frame would trivialize every transition function up to a much stronger condition, and no such construction follows merely from the zero first class. Any claim of parallelizability needs a separate proof.

</details>

### Exercise 5

For a complex line $L$, compute $c_1(L^{\otimes3}\otimes L^*)$.

<details><summary>Hint 1</summary>

Tensor products add first classes.

</details>

<details><summary>Hint 2</summary>

The dual contributes the negative class.

</details>

<details><summary>Full solution</summary>

The result is $3c_1(L)-c_1(L)=2c_1(L)$. This is consistent with the tensor expression being the second tensor power of the line. It is not the degree-two component of a direct-sum total-class product; tensor and direct sum have different formulas and ranks.

</details>

### Exercise 6

If a complex rank-two bundle has formal roots $x,y$, derive $c_1$, $c_2$ and the first Pontryagin class of its real underlying bundle.

<details><summary>Hint 1</summary>

Expand the product of the two root factors.

</details>

<details><summary>Hint 2</summary>

Use the integral formula involving the first two Chern classes.

</details>

<details><summary>Full solution</summary>

The Chern classes are $x+y$ and $xy$. The first Pontryagin class is $(x+y)^2-2xy=x^2+y^2$. The calculation occurs on an injective splitting pullback, so the resulting symmetric identity holds on the original base. It does not assert that the bundle globally decomposes into two line bundles there.

</details>

### Exercise 7

Compute the top Chern number of the tangent bundle of complex projective three-space.

<details><summary>Hint 1</summary>

Use the coefficient of the cube in $(1+u)^4$.

</details>

<details><summary>Hint 2</summary>

The complex orientation normalizes the top power to evaluate as one.

</details>

<details><summary>Full solution</summary>

The top class is $4u^3$, and its evaluation is four. Higher terms in the formal product exceed the tangent rank and vanish in the base cohomology. The result uses the constructed stable tangent isomorphism and orientation normalization, rather than a bare comparison with an Euler-characteristic number.

</details>

### Exercise 8

Why does the splitting principle require injectivity, rather than merely the existence of a space on which the bundle splits?

<details><summary>Hint 1</summary>

A pullback can kill nonzero cohomology classes.

</details>

<details><summary>Hint 2</summary>

To infer an identity downstairs, its difference must be detected upstairs.

</details>

<details><summary>Full solution</summary>

Without injectivity, two distinct downstairs classes could have equal pullbacks, so a root calculation would not distinguish them. The splitting theorem gives a pullback whose cohomology map is injective with the relevant coefficients. Equality of the pulled-back polynomials then forces equality downstairs. Pulling to a single point always trivializes a bundle fiber but plainly loses most characteristic-class information.

</details>

### Exercise 9

What does self-conjugacy of a real bundle's complexification imply about its odd Chern classes, and why is rationalization relevant to a sum formula?

<details><summary>Hint 1</summary>

Conjugation changes the sign of an odd Chern class.

</details>

<details><summary>Hint 2</summary>

Two-torsion disappears over the rationals.

</details>

<details><summary>Full solution</summary>

Self-conjugacy makes every odd class equal to its negative, so it is killed by two. After rationalization those odd terms vanish, and the even terms of the Chern sum formula give multiplicativity of the Pontryagin total class. Integrally the odd terms need not vanish, and their products can contribute to even coefficients. The rational proof therefore cannot be relabeled as an unrestricted integral proof.

</details>

### Exercise 10

An even sphere tangent bundle has all positive stable characteristic classes zero. Explain why this does not produce a nowhere-zero tangent field.

<details><summary>Hint 1</summary>

The Euler class is a separate unstable top-rank obstruction.

</details>

<details><summary>Hint 2</summary>

Its evaluation on an even sphere is two.

</details>

<details><summary>Full solution</summary>

Stable triviality gives the stated stable-class vanishing, but the Euler obstruction remains twice the top integral generator. A nowhere-zero section would force that class to vanish by the proved Thom argument, which is impossible. The example separates stable characteristic information from the section problem and shows why vanishing some characteristic classes is not a completeness theorem for bundles.

</details>

## Provenance and further scope

The exposition and calculations are original. The [Milnor–Stasheff publisher preview and contents](https://api.pageplace.de/preview/DT0400.9781400881826_A27168759/preview-9781400881826_A27168759.pdf) were used for a limited comparison of topic order, not as evidence of a full reading or independent proof review. General Thom and projective-bundle constructions, universal classification and the splitting injectivity statements remain explicitly imported here. Full Grassmannian cohomology, the general signature theorem and characteristic-number classification of bordism need additional machinery. The next chapter develops local coefficients in detail before the geometric bordism continuation.
