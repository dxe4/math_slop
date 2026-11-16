
# de Rham Cohomology {#section-1-de-rham-cohomology}

The Poincaré lemma says that a closed positive-degree form has a potential near every point. A global potential can fail because the local choices do not fit together. De Rham cohomology records that obstruction while forgetting changes produced by globally defined potentials. Its algebra is built from the exterior derivative, and its computations use homotopies and open covers.

This L4 chapter assumes [The Exterior Derivative](exterior-derivative.md), [Orientation and Integration](orientation-integration.md), [Stokes' Theorem](stokes-theorem.md), and the group-level exact-sequence language of [Cohomology and Products](../algebraic-topology-chains-spaces/cohomology-and-products.md). All manifolds are smooth, real, finite-dimensional, Hausdorff, second-countable and without boundary unless an integration domain is explicitly described. We prove the de Rham algebra, smooth homotopy invariance, the open-cover exact sequence and the computations used below. The general comparison with singular cohomology is a separately named imported theorem; we do not disguise the required smooth-chain comparison and local-to-global machinery as an immediate consequence of the local Poincaré lemma.

<a id="section-5-1-closed-forms-modulo-exact-forms"></a>
## 1. Closed forms modulo exact forms {#section-7-1-closed-forms-modulo-exact-forms}

Write $Z^k(M)=\ker(d:\Omega^k(M)\to\Omega^{k+1}(M))$ and $B^k(M)=d\Omega^{k-1}(M)$, with $\Omega^{-1}(M)=0$. Since the derivative squares to zero, the image lies in the kernel. Define the real vector space

$$H_{\mathrm{dR}}^k(M)=Z^k(M)/B^k(M).$$

An element is a class of closed forms, not one distinguished representative. Two representatives define the same class exactly when their difference is the derivative of a globally defined smooth form of one lower degree. Their local primitives may exist automatically, but those are not enough for equality in this quotient.

In degree zero, closed forms are functions constant on connected components, and the only exact zero-form is zero. Thus degree-zero cohomology is the space of all real-valued locally constant functions. If the components are indexed by a set, this is their direct product of copies of the reals, not their direct sum. The latter would impose a finite-support condition absent from ordinary smooth functions. On a connected nonempty manifold this vector space is simply the constants.

The wedge operation descends to a product on these classes. The product of closed forms is closed by the graded rule. If a closed form $\alpha$ is replaced by $\alpha+d\eta$ and $\beta$ is closed, the product changes by $d(\eta\wedge\beta)$. If the second factor changes, use $\alpha\wedge d\theta=(-1)^{\deg\alpha}d(\alpha\wedge\theta)$. Changing both one at a time proves independence of representatives. Consequently the direct sum of all degrees is a graded-commutative real algebra with unit the constant function one. Ordinary cohomology groups without their products need not retain the same information.

For smooth $F:M\to N$, pullback preserves closed and exact forms by naturality of the derivative. It therefore induces a graded algebra homomorphism from the cohomology of $N$ to that of $M$. Composition reverses order exactly as it does for form pullbacks. This is a contravariant invariant of smooth manifolds.

<a id="section-19-2-smooth-homotopy-invariance-with-an-explicit-primitive"></a>
## 2. Smooth homotopy invariance with an explicit primitive {#section-21-2-smooth-homotopy-invariance-with-an-explicit-primitive}

Suppose $F_t:M\to N$ is a smooth homotopy with parameter in the compact unit interval. The homotopy formula already proved gives

$$F_1^*\omega-F_0^*\omega=d(H\omega)+H(d\omega).$$

For a closed form the second term vanishes, so the two pullbacks represent the same cohomology class. This proves equality of induced maps, without claiming equality of representative forms. In degree zero the induced equality follows from constancy along the parameter paths, also included in that formula.

If two smooth maps have composites smoothly homotopic to the respective identity maps, their induced maps on de Rham cohomology are inverse. In particular a smooth deformation retraction permits replacing a manifold by its retract for a cohomology calculation. The smoothness qualification is explicit: a theorem replacing arbitrary continuous homotopies by smooth ones is not proved here. The general de Rham comparison later makes ordinary topological homotopy invariance available, but the present proof needs only the smooth homotopies it actually constructs.

A star-shaped Euclidean open set has cohomology zero in positive degrees and one copy of the reals in degree zero, by its radial contraction. More generally the same conclusion follows for a smoothly contractible connected manifold. This does not say all its forms vanish. It says every closed positive-degree form can be removed by subtracting an exact form.

For the punctured plane the map sending a point to its unit radial direction is a smooth retraction onto the circle. A smooth deformation is

$$F_t(x)=\left((1-t)+\frac{t}{\|x\|}\right)x.$$

The scalar factor is positive throughout, so the homotopy never enters the missing origin. Its restriction to the unit circle is the identity for every parameter. Hence this punctured plane and the circle have the same de Rham cohomology. Replacing the positive factor by an arbitrary straight-line contraction to the origin would leave the domain and invalidate the argument.

<a id="section-37-3-the-exact-sequence-of-an-open-cover"></a>
## 3. The exact sequence of an open cover {#section-39-3-the-exact-sequence-of-an-open-cover}

Let $M=U\cup V$ be an open cover. Restriction gives maps of cochain complexes

$$0\longrightarrow\Omega^*(M)\xrightarrow{r}
\Omega^*(U)\oplus\Omega^*(V)\xrightarrow{s}\Omega^*(U\cap V)
\longrightarrow0,$$

where $r\omega=(\omega|_U,\omega|_V)$ and $s(\alpha,\beta)=\alpha|_{U\cap V}-\beta|_{U\cap V}$.

The first map is injective because forms equal on a cover are equal. The kernel of the second consists precisely of pairs agreeing on the overlap, and these glue uniquely to a global smooth form by their local coefficient expressions. Surjectivity of the second is the nontrivial step. Choose a smooth partition $\rho_U+\rho_V=1$ subordinate to the two open sets. For an overlap form $\gamma$, extend $\rho_V\gamma$ by zero to $U$ and extend $-\rho_U\gamma$ by zero to $V$. Near points outside the overlap, the relevant subordinate factor is zero on a neighborhood, so these are smooth extensions. Their difference on the overlap is $\gamma$. Thus the sequence is short exact in every degree, with all maps commuting with differentiation.

The connecting homomorphism has a concrete construction. Given a closed overlap form $\gamma$ of degree $k$, choose a pair $(\alpha,\beta)$ lifting it. The pair $(d\alpha,d\beta)$ agrees on the overlap because its difference is $d\gamma=0$. It therefore glues to a global closed form $\eta$ of degree $k+1$. Define $\Delta[\gamma]=[\eta]$.

If the lift changes, the difference is a pair coming from a global form, so the glued derivative changes by a global exact form. If $\gamma$ changes by an exact overlap form, lift its primitive using surjectivity and differentiate that lift; after this adjustment the glued derivative changes by an exact form again. This proves that the connecting map is well-defined on cohomology. Its sign is fixed by the chosen difference map; reversing that difference changes this connecting convention correspondingly.

<a id="section-53-4-exactness-with-the-representative-chases-shown"></a>
## 4. Exactness, with the representative chases shown {#section-55-4-exactness-with-the-representative-chases-shown}

The induced sequence is

$$\cdots\to H^k_{\mathrm{dR}}(M)\to
H^k_{\mathrm{dR}}(U)\oplus H^k_{\mathrm{dR}}(V)\to
H^k_{\mathrm{dR}}(U\cap V)\xrightarrow{\Delta}
H^{k+1}_{\mathrm{dR}}(M)\to\cdots.$$

At the middle pair of groups, suppose closed representatives have an exact difference on the overlap. For positive degree choose a primitive of that difference and lift it to a pair of forms of one lower degree. Subtracting the derivative of that pair makes the original representatives agree exactly; they then glue to a closed global form. In degree zero an exact difference is already zero, so no lower-degree adjustment is needed. This proves that the kernel there equals the image of global restriction.

At the overlap group, a class obtained as the difference of closed representatives has zero connecting class, since those closed representatives themselves provide a lift. Conversely, if the glued derivative of a lift is globally exact, subtract that global primitive from both members of the lift. The resulting members are closed, still have the same overlap difference and therefore realize the original class in the preceding image. This proves exactness at the overlap group.

At the next global group, every connecting representative is exact on each of the two open sets by construction. Conversely, let a global closed form restrict to exact forms with primitives $\alpha$ and $\beta$ on the two sets. Their difference is closed on the overlap. Applying the connecting construction with precisely those primitives recovers the original global form. Thus the restriction kernel is the connecting image. Together with the elementary degree-zero restriction statement, these three chases prove the full long exact sequence. Nothing has been inferred solely from the suggestive name Mayer–Vietoris.

<a id="section-68-5-three-worked-examples"></a>
## 5. Three worked examples {#section-70-5-three-worked-examples}

<a id="section-70-worked-example-14-1-the-circle-and-the-two-components-o"></a>
### Worked example 14.1 — The circle and the two components of an overlap {#section-72-worked-example-14-1-the-circle-and-the-two-components-o}

Cover the circle by deleting one point for the first arc and a different point for the second. Both arcs are smoothly contractible, but their intersection consists of two disjoint contractible arcs. The degree-zero part of the sequence therefore contains

$$0\longrightarrow\mathbb R\longrightarrow\mathbb R^2
\xrightarrow{s}\mathbb R^2\xrightarrow{\Delta}H^1_{\mathrm{dR}}(S^1)
\longrightarrow0.$$

The first map sends a constant to the same constant on both covering arcs. The difference map sends the pair of arc constants to their difference on each overlap component, so its image is the diagonal line in the second copy of the plane. Its cokernel has dimension one. Hence first cohomology of the circle is one-dimensional. All groups above degree one vanish because there are no forms in those degrees.

The form $x\,dy-y\,dx$ restricted to the unit circle has nonzero period and therefore is not exact. It supplies a nonzero generator of the computed one-dimensional space. Dividing by $2\pi$ normalizes its integral to one. The two disconnected overlap components are essential: incorrectly treating the overlap as a single arc would erase precisely the obstruction being measured.

<a id="section-82-worked-example-14-2-spheres-by-an-open-cover-induction"></a>
### Worked example 14.2 — Spheres by an open-cover induction {#section-84-worked-example-14-2-spheres-by-an-open-cover-induction}

For a sphere of dimension at least two, use the complements of its north and south poles. Each is diffeomorphic to Euclidean space. Their intersection smoothly deformation retracts onto the equatorial sphere: write a nonpolar point as $(\sqrt{1-z^2}u,z)$ and shrink its height $z$ linearly to zero while retaining $u$. All intermediate heights remain strictly between minus one and one, so the retraction stays in the overlap.

The overlap is connected in these dimensions. Thus the map on degree-zero constants is surjective, giving zero first cohomology. In every degree at least two, the neighboring positive-degree groups of the two contractible covering sets vanish, and the connecting map identifies sphere cohomology with the preceding reduced degree of the equatorial sphere. Starting from the circle calculation proves that a positive-dimensional sphere has one real generator in degree zero and one in its top degree, with all intermediate groups zero. No cell decomposition or singular comparison theorem is needed for this computation.

A positive sphere volume form represents a nonzero top class: its integral is positive, whereas an exact top form would have zero integral by Stokes. Thus the abstract generator has a concrete differential-form representative. Its square vanishes by dimension, so the ring has no further positive-degree products to determine.

<a id="section-90-worked-example-14-3-ordinary-and-compactly-supported-co"></a>
### Worked example 14.3 — Ordinary and compactly supported cohomology differ {#section-92-worked-example-14-3-ordinary-and-compactly-supported-co}

On the real line every smooth one-form $a(t)dt$ has a primitive obtained by integrating from a fixed finite basepoint. Ordinary first de Rham cohomology is therefore zero. Now restrict both forms and primitives to compact support. The integral gives a linear functional on compactly supported one-forms, and a compactly supported derivative has integral zero by Stokes.

Conversely, if a compactly supported coefficient has total integral zero, its primitive obtained by integrating from negative infinity is zero on both far tails and therefore is compactly supported. Thus the integral's kernel consists exactly of derivatives of compactly supported functions. A normalized bump realizes integral one, so the compactly supported first cohomology of the line is one-dimensional. Compactly supported degree-zero cohomology is zero, because a constant function on the connected noncompact line can have compact support only when it is zero. This is a direct calculation with support conditions, not a contradiction to ordinary homotopy invariance.

<a id="section-96-6-what-the-de-rham-comparison-theorem-adds"></a>
## 6. What the de Rham comparison theorem adds {#section-98-6-what-the-de-rham-comparison-theorem-adds}

**Theorem 14.4 (de Rham, named imported comparison).** For a smooth manifold with the conventions above, its ordinary de Rham cohomology algebra is naturally isomorphic to singular cohomology with real coefficients. Naturality compares pullbacks by smooth maps, and the wedge product corresponds to the singular cup product.

This is the global comparison theorem, cited to Lee and Tu in the sources. It is not proved by merely observing that both theories vanish on a ball. A complete proof must construct a comparison, control representatives on covers and justify passage between smooth and continuous singular chains, or supply an equivalent resolution argument. We have proved the form-side local Poincaré lemma, homotopy identity and Mayer–Vietoris construction used in such proofs. We have not claimed that those ingredients alone, without the comparison machinery, are the entire theorem.

The link to [Cohomology and Products](../algebraic-topology-chains-spaces/cohomology-and-products.md) supplies the coefficient and cup-product viewpoint. Real coefficients are essential to the stated comparison: torsion in integral cohomology disappears on passage to real coefficients. For example integral projective-plane cohomology has a degree-two group of order two, but its real positive-degree cohomology is zero. Differential forms with real coefficients cannot recover that torsion by selecting a different coordinate chart or by integrating more accurately.

On a compact oriented manifold without boundary, integrating a closed top form gives a well-defined functional on its de Rham class, because the integral of an exact form is zero. More generally periods on closed oriented smooth submanifolds are unchanged when the form changes by an exact form, by pullback naturality and Stokes. These are rigorous pairings within the proved smooth theory. Their identification with all singular real cohomology information uses the named comparison theorem. Numerical period estimates alone are not a proof of closedness, exactness or a comparison isomorphism.

<a id="section-106-exercises"></a>
## Exercises {#section-108-exercises}

### Exercise 14.1 {#smooth-de-rham-cohomology-ex-1}

Determine degree-zero ordinary cohomology of a countably infinite disjoint union of circles. Explain why a direct sum is the wrong answer.

<details><summary>Hint 1</summary>
A closed zero-form chooses one independent constant on each component.
</details>
<details><summary>Hint 2</summary>
Ordinary smooth functions have no compact-support restriction.
</details>
<details><summary>Full solution</summary>
The vector space is the product of countably many copies of the reals. Every sequence specifies a locally constant smooth function on the disjoint union, and there are no nonzero exact zero-forms. The direct sum includes only sequences with finitely many nonzero entries and would wrongly exclude the constant function one. The topology of the disjoint union makes each component open, so no extra continuity condition links the constants on different components.
</details>

### Exercise 14.2 {#smooth-de-rham-cohomology-ex-2}

Prove that a diffeomorphism induces a cohomology algebra isomorphism without using the comparison theorem.

<details><summary>Hint 1</summary>
Use pullback by its smooth inverse.
</details>
<details><summary>Hint 2</summary>
Pullback preserves wedge products and commutes with the derivative.
</details>
<details><summary>Full solution</summary>
Both pullbacks descend to cohomology because they preserve closed and exact forms. Their composites are identity pullbacks by the composition rule. They are therefore inverse vector-space isomorphisms in every degree and preserve the product and unit. This proof uses only the form constructions. The general singular comparison supplies additional topological information but is unnecessary for this smooth invariance statement.
</details>

### Exercise 14.3 {#smooth-de-rham-cohomology-ex-3}

Compute ordinary de Rham cohomology of the punctured plane, including its ring structure.

<details><summary>Hint 1</summary>
Use the explicit radial deformation retraction onto the circle.
</details>
<details><summary>Hint 2</summary>
The circle has only a degree-zero generator and a degree-one generator.
</details>
<details><summary>Full solution</summary>
Smooth homotopy invariance gives one copy of the reals in degrees zero and one and zero in all higher degrees. The angular one-form, divided by $2\pi$, gives a degree-one generator with normalized circular period one. Its square vanishes by graded commutativity over the reals, also by the vanishing of degree-two cohomology. Together with the unit this determines the entire ring. The noncompactness of the punctured plane does not force ordinary top-degree cohomology to be nonzero.
</details>

### Exercise 14.4 {#smooth-de-rham-cohomology-ex-4}

In the open-cover construction prove that the zero extension of $\rho_V\gamma$ to $U$ is smooth even when $\gamma$ does not extend across the overlap boundary.

<details><summary>Hint 1</summary>
The closed support of $\rho_V$ lies inside $V$.
</details>
<details><summary>Hint 2</summary>
Check separately points in the overlap and points in $U$ outside $V$.
</details>
<details><summary>Full solution</summary>
On the overlap the product is a product of smooth coefficients and forms. At a point of $U$ outside $V$, the point lies outside the closed support of $\rho_V$, since that support is contained in $V$. There is therefore a neighborhood where the factor is identically zero. The zero extension is identically zero on that neighborhood and is smooth there. This local argument needs no bound on the overlap form near the overlap's outer edge.
</details>

### Exercise 14.5 {#smooth-de-rham-cohomology-ex-5}

Explain why the difference map on constants for the two-arc circle cover has diagonal image in the two-component overlap.

<details><summary>Hint 1</summary>
Each covering arc is connected.
</details>
<details><summary>Hint 2</summary>
Subtract the same two constants on both overlap components.
</details>
<details><summary>Full solution</summary>
A degree-zero class on each arc is one constant, say $a$ and $b$. Their restrictions on either overlap component are still those same constants. Their difference is therefore $(a-b,a-b)$, whose possible values form the diagonal line. The quotient of the two-component constant space by that line has dimension one. Allowing independently chosen restrictions from one connected arc would incorrectly enlarge the image and destroy the correct first-cohomology calculation.
</details>

### Exercise 14.6 {#smooth-de-rham-cohomology-ex-6}

Compute the ordinary de Rham groups of the three-sphere using the sphere induction. Give a form-side reason that its positive volume form represents the nonzero top class.

<details><summary>Hint 1</summary>
The overlap of the two contractible pole complements retracts onto a two-sphere.
</details>
<details><summary>Hint 2</summary>
Apply Stokes if a volume form were exact.
</details>
<details><summary>Full solution</summary>
The groups are one real copy in degrees zero and three and zero in degrees one and two, with higher groups zero by dimension. The induction follows from the reduced-degree shift across the connected equatorial overlap. A positive volume form has positive integral on the compact sphere. If it were exact, Stokes on that boundaryless manifold would give integral zero. Hence its class is nonzero and generates the one-dimensional top group.
</details>

### Exercise 14.7 {#smooth-de-rham-cohomology-ex-7}

Prove directly that the product of an exact form and a closed form represents zero, keeping the sign when the exact factor occurs second.

<details><summary>Hint 1</summary>
Apply the graded product rule to a product involving a primitive.
</details>
<details><summary>Hint 2</summary>
If the closed first factor has degree $p$, its derivative term vanishes.
</details>
<details><summary>Full solution</summary>
If the first factor is $d\eta$ and the second is closed $\beta$, their product is $d(\eta\wedge\beta)$. If the second factor is $d\theta$ and the first is closed of degree $p$, their product is $(-1)^p d(\alpha\wedge\theta)$. Both are exact. These formulas establish that the product on classes is independent of changing either representative and specify the sign needed for the second-variable adjustment.
</details>

### Exercise 14.8 {#smooth-de-rham-cohomology-ex-8}

A compactly supported one-form on the real line has integral zero. Construct a compactly supported primitive and explain why its smoothness holds at the ends of the support.

<details><summary>Hint 1</summary>
Integrate its coefficient from negative infinity.
</details>
<details><summary>Hint 2</summary>
The total-integral condition makes the primitive zero on the right tail as well as the left.
</details>
<details><summary>Full solution</summary>
For coefficient $a$, take $f(t)=\int_{-\infty}^t a(s)ds$. The Fundamental Theorem makes its derivative equal to $a$, and smoothness follows by repeatedly differentiating the smooth coefficient. Outside a compact interval containing the coefficient support, the primitive is constant on each tail. The left constant is zero by definition and the right constant is the total integral, also zero. Thus it is compactly supported. This is one smooth globally defined primitive, rather than a piecewise formula whose derivatives might mismatch.
</details>

### Exercise 14.9 {#smooth-de-rham-cohomology-ex-9}

Show that the integral of a closed form over a compact oriented closed smooth submanifold depends only on the form's de Rham class.

<details><summary>Hint 1</summary>
Pull back the difference of two representatives to the submanifold.
</details>
<details><summary>Hint 2</summary>
Its difference is an exact top form on a boundaryless compact manifold.
</details>
<details><summary>Full solution</summary>
If representatives differ by $d\eta$, inclusion pullback makes their restrictions differ by the derivative of the pulled-back primitive. Stokes on the compact submanifold with empty boundary makes the integral of that difference zero. The dimension of the submanifold must match the degree of the original form for this top-form integral. Compactness ensures the pulled-back primitive has compact support without requiring an ambient compact-support hypothesis.
</details>

### Exercise 14.10 {#smooth-de-rham-cohomology-ex-10}

Using the named comparison theorem and the integral cohomology calculation for the real projective plane, determine its ordinary real de Rham groups. Why does the integral torsion not survive?

<details><summary>Hint 1</summary>
Its real singular homology is one copy of the reals in degree zero and zero above.
</details>
<details><summary>Hint 2</summary>
Multiplication by two is invertible over the reals in the cellular complex.
</details>
<details><summary>Full solution</summary>
The projective plane's cellular boundary from degree two to degree one is multiplication by two. Over the reals this is an isomorphism, so positive-degree homology vanishes; field duality gives the same vanishing for real cohomology. The named de Rham theorem therefore gives only one real group in degree zero. The integral order-two cohomology class cannot be represented as a nonzero torsion element of a real vector space: multiplication by two is invertible there. This conclusion explicitly uses the imported comparison theorem rather than pretending that it follows from orientability alone.
</details>

<a id="section-248-sources-and-provenance"></a>
## Sources and provenance {#section-250-sources-and-provenance}

New L4 expansion of [Quarto Topology, chapter 18](../../../../textbooks/topology/chapters/18-differential-forms-derham.qmd), retaining that original source. The form-side constructions and representative chases are proved here; their singular-cohomology companion is [Cohomology and Products](../algebraic-topology-chains-spaces/cohomology-and-products.md). The general de Rham comparison, including its ring statement, is cited to Lee, *Introduction to Smooth Manifolds*, the de Rham theorem chapter, and Tu, *An Introduction to Manifolds*, the de Rham theorem sections. Compactly supported cohomology is calculated here only for the real line. No general compact-support duality theorem is proved here.

<a id="section-252-summary"></a>
## Summary {#section-254-summary}

De Rham classes are closed forms modulo globally exact forms, with wedge products and contravariant pullback. A smooth homotopy changes a closed pullback by an explicitly exact form. Partitions of unity give a full open-cover exact sequence, which computes circles and spheres without invoking the singular comparison. The general comparison with real singular cohomology remains a named theorem with its additional proof machinery stated honestly. Degree-zero products of component constants, integral torsion and compact-support conditions must each be handled with their own conventions.
