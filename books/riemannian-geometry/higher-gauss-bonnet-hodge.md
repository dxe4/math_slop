
# Higher Gauss–Bonnet and Hodge Theory: An Introduction {#section-1-higher-gauss-bonnet-and-hodge-theory-an-introduction}

A metric defines curvature and differential operators, while topology supplies cohomology and Euler characteristic. Higher Gauss–Bonnet and Hodge theory connect those structures. This introduction develops the constructions explicitly, separates their algebraic proofs from the deep global inputs, and calculates models where every normalization can be seen.

This L5 introduction assumes the curvature, connection and metric-volume chapters of this book and [differential forms, Stokes and de Rham cohomology](../smooth-manifolds/de-rham-cohomology.md). For the global Hodge and Euler statements, the manifold is smooth, real, compact, oriented and without boundary, with positive Riemannian metric. We prove the Hodge-star algebra, formal adjoint, harmonic energy identity and finite-dimensional Hodge model. General elliptic solvability and regularity for the form Laplacian and the general Chern–Gauss–Bonnet formula are named imported theorems, not purportedly proved by those elementary steps. Their consequences and the examples below have full arguments.

<a id="section-5-1-the-hodge-star-is-a-metric-and-orientation-constructi"></a>
## 1. The Hodge star is a metric and orientation construction {#section-7-1-the-hodge-star-is-a-metric-and-orientation-constructi}

The metric induces an inner product on alternating forms: increasing wedges of an orthonormal coframe form an orthonormal basis. Equivalently the pairing of two decomposable covector wedges is the determinant of their pairwise metric pairings. Multilinearity and the determinant identities make this independent of the orthonormal basis.

For a $k$-form define its Hodge star by

$$\alpha\wedge *\beta=\langle\alpha,\beta\rangle\mu_g$$

for every form $\alpha$ of the same degree, where $\mu_g$ is the positive metric volume form. In a positive orthonormal coframe, star sends a basis wedge to its complementary wedge with the sign needed to put the combined list into positive order. Pairing with all basis wedges proves existence and uniqueness. Smooth local orthonormal frames, obtained by smooth Gram–Schmidt from a coordinate frame, show that this gives a smooth bundle map.

Applying star twice moves a block of $k$ indices past its complement, giving

$$*^2\omega=(-1)^{k(n-k)}\omega.$$

Star is an isometry and hence invertible. It depends on the orientation: reversing orientation changes the defining volume form's sign and therefore negates star. It also depends on the metric through both the inner product and volume. There is no orientation-free unsigned star on ordinary real forms supplied by this definition.

The global inner product on forms is $\langle\alpha,\beta\rangle_{L^2}=\int_M\alpha\wedge *\beta$. Compactness makes the integral finite for smooth forms. Its squared norm is zero only for the zero form: a nonzero value gives positive pointwise norm on a small open set and therefore a positive integral. This positivity will justify the uniqueness arguments below.

<a id="section-23-2-derive-the-formal-adjoint-including-its-sign"></a>
## 2. Derive the formal adjoint, including its sign {#section-25-2-derive-the-formal-adjoint-including-its-sign}

For a $k$-form put

$$\delta\beta=(-1)^{n(k+1)+1}*d*\beta,$$

and set its degree-minus-one value to zero in degree zero. This is the codifferential. To verify the sign, take a $(k-1)$-form $\alpha$ and use Stokes on the closed manifold:

$$0=\int_Md(\alpha\wedge *\beta)
=\int_Md\alpha\wedge *\beta+(-1)^{k-1}\int_M\alpha\wedge d*\beta.$$

Thus the required adjoint must satisfy $*\delta\beta=(-1)^kd*\beta$. Applying the inverse-star identity gives exactly the displayed exponent. Hence

$$\langle d\alpha,\beta\rangle_{L^2}=\langle\alpha,\delta\beta\rangle_{L^2}.$$

This is a formal adjoint identity on smooth forms under the compact boundaryless hypotheses. It is not yet a theorem about domains of unbounded operators on completed function spaces. On a manifold with boundary, the Stokes boundary term would remain unless suitable boundary conditions were supplied.

The identity also proves $\delta^2=0$. Pair its value with an arbitrary form of the matching degree and apply adjointness twice; the result pairs the original form with $d^2$ of the test form and is zero. Taking the test form to be $\delta^2\beta$ shows its norm is zero. Degree boundaries are handled by the zero incoming or outgoing spaces.

<a id="section-42-3-the-laplacian-and-its-elementary-consequences"></a>
## 3. The Laplacian and its elementary consequences {#section-44-3-the-laplacian-and-its-elementary-consequences}

Define the nonnegative-sign Hodge Laplacian by

$$\Delta=d\delta+\delta d.$$

Adjointness gives

$$\langle\Delta\omega,\omega\rangle_{L^2}
=\|d\omega\|_{L^2}^2+\|\delta\omega\|_{L^2}^2.$$

Thus a smooth form is harmonic, meaning its Laplacian is zero, exactly when it is both closed and coclosed. One implication uses the positive sum, and the other substitutes the two zero derivatives. This equivalence is a global consequence of the integration identity, not merely the pointwise definition of a differential operator.

A harmonic form which is exact must vanish. If $h=d\eta$, then its squared norm is $\langle h,d\eta\rangle=\langle\delta h,\eta\rangle=0$. Consequently harmonic forms map injectively into de Rham cohomology, and any harmonic representative is unique in its class. Existence of such a representative for every class needs an additional analytic theorem; injectivity alone does not supply surjectivity.

Star sends harmonic $k$-forms to harmonic forms of complementary degree. The formula for the codifferential translates coclosedness into closedness of the star, and closedness into coclosedness of the star, up to the explicitly harmless nonzero signs. Invertibility of star gives a bijection between those harmonic spaces. The conclusion concerns harmonic forms; it does not make star a cochain map from the de Rham differential to itself in every degree.

<a id="section-59-4-prove-the-finite-dimensional-hodge-model"></a>
## 4. Prove the finite-dimensional Hodge model {#section-61-4-prove-the-finite-dimensional-hodge-model}

Let a finite real cochain complex have an inner product in each degree. Let $\delta$ be the linear adjoint of its differential and define its Laplacian by the same expression. The energy identity proves that its kernel is the intersection of the differential and adjoint kernels.

The image of the differential and the image of its adjoint in a given degree are orthogonal. Indeed $\langle d\alpha,\delta\beta\rangle=\langle d^2\alpha,\beta\rangle=0$. The perpendicular complement of their sum is precisely the simultaneous kernel: orthogonality to every differential image means the adjoint is zero, and orthogonality to every adjoint image means the differential is zero. Finite-dimensional orthogonal-complement decomposition therefore proves

$$C^k=\ker\Delta_k\ \oplus\ \operatorname{im}d_{k-1}\ \oplus\ \operatorname{im}\delta_{k+1}.$$

If an element is closed, pairing its decomposition with its adjoint-image component makes the norm of that component zero. It is therefore a harmonic element plus an exact element. Combined with the uniqueness proof, this gives an isomorphism between cohomology and harmonic elements in the finite complex.

This is a complete linear-algebra proof. Smooth forms on a manifold form an infinite-dimensional space, where ranges need not be closed and finite-dimensional orthogonal-complement arguments cannot simply be copied. The model explains the desired structure but does not prove the analytic result that makes it valid for differential forms globally.

<a id="section-71-5-state-the-analytic-input-and-derive-harmonic-represen"></a>
## 5. State the analytic input and derive harmonic representatives {#section-73-5-state-the-analytic-input-and-derive-harmonic-represen}

**Theorem 8.1 (Elliptic solvability input, cited).** On a compact oriented smooth Riemannian manifold without boundary, the smooth kernel of the form Laplacian in each degree is finite-dimensional. Every smooth form orthogonal to that kernel is the Laplacian of a smooth form. This combines the compact elliptic Fredholm and regularity theorems for this operator.

This theorem is cited to the Hodge-theory references in the source note. Its proof needs elliptic estimates, functional completion and regularity. We do not replace that proof by the statement that the operator has a positive energy identity: positivity alone would not establish the required range or smoothness.

Given the input, project any smooth form onto a finite orthonormal basis of the harmonic kernel, obtaining a smooth harmonic form $h$. Solve $\Delta u=\omega-h$. Then

$$\omega=h+d\delta u+\delta du.$$

These three terms are mutually orthogonal. Harmonic forms are orthogonal to exact and coexact forms by adjointness; the other two terms are orthogonal by the square-zero identity. For a closed $\omega$, pairing with $\delta du$ gives zero on the left because it equals $\langle d\omega,du\rangle$. Orthogonality makes the corresponding squared norm on the right zero. Therefore the coexact term vanishes and $\omega=h+d\delta u$.

Thus each de Rham class has exactly one harmonic representative. This is the Hodge conclusion with its analytic premise made visible. It gives finite Betti numbers, and star gives equality of complementary Betti numbers. For odd dimension their alternating sum is zero, since complementary degrees have opposite parity. The identification of these de Rham dimensions with singular real Betti numbers uses the general de Rham comparison theorem explicitly cited in the Smooth Manifolds chapter.

<a id="section-85-6-curvature-forms-and-the-euler-form"></a>
## 6. Curvature forms and the Euler form {#section-87-6-curvature-forms-and-the-euler-form}

In a local positive orthonormal tangent frame let $\omega^i{}_j$ be the connection forms. Define the curvature matrix of two-forms by

$$\Omega^i{}_j=d\omega^i{}_j+\omega^i{}_a\wedge\omega^a{}_j.$$

Expanding the connection derivative shows that its evaluation on two vectors is $g(R(X,Y)e_j,e_i)$. The exterior derivative supplies the noncoordinate bracket correction, while the wedge product supplies the two iterated connection products. Hence under a positive orthonormal frame change the matrix transforms by conjugation. It is skew-symmetric in the frame indices by metric compatibility.

In even dimension $2m$, define

$$e(g)=\operatorname{Pf}(\Omega/(2\pi)).$$

For a skew matrix with even-degree commuting entries, the Pfaffian is

$$\operatorname{Pf}(A)=\frac1{2^m m!}
\sum_{\sigma\in S_{2m}}\operatorname{sgn}(\sigma)
A_{\sigma(1)\sigma(2)}\wedge\cdots\wedge A_{\sigma(2m-1)\sigma(2m)}.$$

The normalization makes the degree-two case just its upper-right entry. Its frame invariance follows from the algebraic rule $\operatorname{Pf}(B^TAB)=\det(B)\operatorname{Pf}(A)$. One proof introduces an auxiliary alternating basis and takes the coefficient of its full top wedge in the appropriate power of the two-form with matrix $A$. Changing that auxiliary basis multiplies the top coefficient by its determinant. This yields the rule and, for orientation-preserving orthogonal changes, invariance. Therefore the local top forms glue to a global Euler form.

In dimension two our curvature convention gives $\Omega^1{}_2=K\mu_g$, so $e(g)=K\mu_g/(2\pi)$. This matches the classical Gauss–Bonnet normalization. In dimension four the numerator is

$$\operatorname{Pf}(\Omega)=\Omega_{12}\wedge\Omega_{34}
-\Omega_{13}\wedge\Omega_{24}+\Omega_{14}\wedge\Omega_{23}.$$

The entries are two-forms, whose mutual products commute. The alternating signs concern frame-index pairings, not an assumption that two-forms anticommute with each other.

<a id="section-112-7-what-higher-gauss-bonnet-asserts"></a>
## 7. What higher Gauss–Bonnet asserts {#section-114-7-what-higher-gauss-bonnet-asserts}

**Theorem 8.2 (Chern–Gauss–Bonnet, cited global).** For a compact oriented even-dimensional Riemannian manifold without boundary,

$$\int_Me(g)=\chi(M).$$

Here the right side is the Euler characteristic, equivalently the alternating sum of real Betti numbers. The theorem makes the integral independent of the chosen metric even though the curvature form itself can change. Its general proof requires further global characteristic-class or transgression machinery and is not supplied by defining the Pfaffian. The source note identifies it as an imported theorem. The normalization and the complete special-model calculation below are proved here.

For odd-dimensional compact oriented manifolds, the Hodge-star pairing above already gives Euler characteristic zero. That argument uses the analytic Hodge input, not a nonexistent odd-size Pfaffian formula. The surface theorem proved in the earlier Differential Geometry book is another stated case; a proof in dimension two is not automatically a proof of the general even-dimensional statement.

<a id="section-122-8-three-worked-examples"></a>
## 8. Three worked examples {#section-124-8-three-worked-examples}

<a id="section-124-worked-example-8-1-harmonic-forms-on-a-circle"></a>
### Worked example 8.1 — Harmonic forms on a circle {#section-126-worked-example-8-1-harmonic-forms-on-a-circle}

Use the standard angular unit coframe on the circle, denoted locally by $dt$ and globally represented by the restriction of $x\,dy-y\,dx$. Star sends one to this coframe and sends the coframe to one. A one-form is $a(t)dt$ with smooth periodic coefficient, and its codifferential is $-a'(t)$. It is harmonic exactly when that derivative is zero, hence exactly when the coefficient is constant. Harmonic functions are constant by the energy identity as well.

Thus the two harmonic spaces each have dimension one. The one-form divided by $2\pi$ has integral one and represents the normalized first cohomology generator. The coframe exists globally even though a single real angle function does not. Calling it locally $dt$ does not claim a global exact form, and its nonzero period proves that it is not globally exact.

<a id="section-130-worked-example-8-2-a-flat-two-torus-has-four-harmonic-d"></a>
### Worked example 8.2 — A flat two-torus has four harmonic dimensions in total {#section-132-worked-example-8-2-a-flat-two-torus-has-four-harmonic-d}

On the quotient plane by periods $2\pi$ in both directions, the flat coframe $dx,dy$ is global. The Laplacian on every coefficient of a form is the negative sum of its two second coordinate derivatives, obtained by the displayed star and codifferential rules. A periodic scalar coefficient with zero Laplacian is constant: integration by parts over a period rectangle cancels opposite boundary terms and leaves the integral of its squared first derivatives zero.

Therefore harmonic forms are constants in degree zero, constant linear combinations of $dx,dy$ in degree one, and constant multiples of $dx\wedge dy$ in degree two. Their dimensions are one, two and one, giving Euler characteristic zero. The metric is flat, so its Euler curvature form is zero and its integral agrees. The nonzero top cohomology class nevertheless remains, detected by its positive area integral. Vanishing Euler characteristic is not vanishing of every cohomology group.

<a id="section-136-worked-example-8-3-compute-the-four-sphere-euler-integr"></a>
### Worked example 8.3 — Compute the four-sphere Euler integral {#section-138-worked-example-8-3-compute-the-four-sphere-euler-integr}

In a constant-curvature metric the previously proved curvature operator gives $\Omega_{ij}=\kappa\theta^i\wedge\theta^j$. Substitute into the four-dimensional Pfaffian. Each of its three signed terms becomes positive $\kappa^2\mu_g$ after reordering the four coframe factors. Consequently

$$e(g)=\frac{3\kappa^2}{4\pi^2}\mu_g.$$

For the unit four-sphere its volume is $8\pi^2/3$. Here is a direct normalization calculation. On the unit three-sphere in two complex coordinates, use moduli $\cos\eta,\sin\eta$ and their two angular phases. Its metric-volume factor is $\cos\eta\sin\eta$, whose integral over the modulus interval and the two full phases gives $2\pi^2$. Latitude slicing of the four-sphere then multiplies this by the integral of $\sin^3\theta$ from zero to $\pi$, namely four thirds. The coordinate degeneracies and angular seams are lower-dimensional null sets; the ordinary metric-density substitution on their complement justifies this volume calculation.

The Euler-form integral is therefore two. Independently the sphere de Rham computation gives one generator in degrees zero and four and none between, so its alternating Betti sum is also two. The analytic Hodge theorem correspondingly gives one harmonic representative in each of those two degrees. This verifies the entire four-sphere example and its constants; a successful model example does not replace the general Chern–Gauss–Bonnet proof.

<a id="section-146-exercises"></a>
## Exercises {#section-148-exercises}

### Exercise 8.1 {#riemannian-hodge-ex-1}

In a positive orthonormal coframe on an oriented surface compute star on both one-form basis elements and its square on them.

<details><summary>Hint 1</summary>
Wedge a basis element with its proposed star to recover positive volume.
</details>
<details><summary>Hint 2</summary>
The second basis element needs a minus sign when paired with the first.
</details>
<details><summary>Full solution</summary>
Star sends the first covector to the second and the second to the negative first. Applying it twice gives minus the original one-form. This agrees with the general exponent $k(n-k)=1$ in dimension two and degree one. The sign comes from orientation and wedge ordering; it is not a failure of star to be an isometry or invertible.
</details>

### Exercise 8.2 {#riemannian-hodge-ex-2}

Prove that a smooth harmonic exact form on a compact boundaryless manifold is zero.

<details><summary>Hint 1</summary>
A harmonic form is coclosed by the energy identity.
</details>
<details><summary>Hint 2</summary>
Pair it with its exact representation and use adjointness.
</details>
<details><summary>Full solution</summary>
Write the form as $d\eta$. Its squared norm is its pairing with $d\eta$, which by adjointness equals the pairing of its zero codifferential with $\eta$. The norm is therefore zero and positivity makes the form identically zero. This proves uniqueness of a harmonic representative in a class, but existence still needs the separately stated elliptic theorem.
</details>

### Exercise 8.3 {#riemannian-hodge-ex-3}

Where does the finite-dimensional Hodge decomposition proof fail if copied directly to arbitrary infinite-dimensional form spaces?

<details><summary>Hint 1</summary>
The orthogonal complement of a range only determines the closure of that range in general.
</details>
<details><summary>Hint 2</summary>
Smooth solvability and finite kernel require analytic information.
</details>
<details><summary>Full solution</summary>
In finite dimensions every subspace is closed and the orthogonal-complement decomposition gives an actual sum of the two images. Infinite-dimensional ranges can fail to be closed, so the same argument may yield only a closure and not an exact or coexact representative. It also gives no finite kernel or smooth solution of a Laplacian equation. The cited compact elliptic solvability and regularity input supplies those missing facts for the manifold theorem.
</details>

### Exercise 8.4 {#riemannian-hodge-ex-4}

Show that a compact oriented odd-dimensional manifold has Euler characteristic zero using the stated Hodge conclusion.

<details><summary>Hint 1</summary>
Star pairs harmonic degrees $k$ and $n-k$.
</details>
<details><summary>Hint 2</summary>
Their parities differ when the dimension is odd.
</details>
<details><summary>Full solution</summary>
The harmonic representative theorem identifies Betti dimensions with harmonic dimensions. Star makes complementary dimensions equal. In odd total dimension the two degrees have opposite alternating signs, and there is no middle self-paired integer degree. Their contributions therefore cancel in pairs, giving zero. The argument uses the named analytic Hodge input and the de Rham comparison for the topological interpretation, not an unstated odd-dimensional Pfaffian identity.
</details>

### Exercise 8.5 {#riemannian-hodge-ex-5}

Compute the codifferential of $a(t)dt$ on the unit circle and determine when the form is harmonic.

<details><summary>Hint 1</summary>
Star sends the unit one-form to a scalar.
</details>
<details><summary>Hint 2</summary>
The sign exponent for dimension one and degree one is odd.
</details>
<details><summary>Full solution</summary>
The codifferential is minus the ordinary derivative of the periodic coefficient. Every one-form on a one-dimensional manifold is closed, so the energy criterion makes it harmonic exactly when that coefficient derivative vanishes. Thus the harmonic one-forms are precisely constant multiples of the angular unit coframe. A nonzero such form has nonzero period and is not exact, consistent with uniqueness of harmonic representatives.
</details>

### Exercise 8.6 {#riemannian-hodge-ex-6}

On a compact interval let $f(t)=t$. Explain why its zero scalar Laplacian does not imply zero differential by the closed-manifold energy argument.

<details><summary>Hint 1</summary>
The interval has boundary.
</details>
<details><summary>Hint 2</summary>
Integration by parts retains an endpoint contribution.
</details>
<details><summary>Full solution</summary>
The second derivative is zero, so the formal scalar Laplacian vanishes. Its differential is the nonzero constant one-form. The integration identity used for closed manifolds would have a boundary term here, and no boundary condition on the function was imposed to remove it. Therefore the positive-energy conclusion of zero differential cannot be applied. Hodge theory on manifolds with boundary requires additional absolute or relative boundary conditions.
</details>

### Exercise 8.7 {#riemannian-hodge-ex-7}

For the flat two-torus list the harmonic basis degrees and explain why their alternating dimension is zero although top cohomology is nonzero.

<details><summary>Hint 1</summary>
Use constant coefficient forms in the global flat coframe.
</details>
<details><summary>Hint 2</summary>
The dimensions are counted separately before alternating.
</details>
<details><summary>Full solution</summary>
A basis is the constant function in degree zero, the two coordinate one-forms in degree one and their wedge in degree two. The dimensions give one minus two plus one, which is zero. The degree-two basis element has positive integral and hence is not exact by Stokes. Euler characteristic combines dimensions with signs and can vanish without any individual nonzero group disappearing.
</details>

### Exercise 8.8 {#riemannian-hodge-ex-8}

Verify that the middle term of the four-dimensional constant-curvature Pfaffian contributes positively after its written minus sign.

<details><summary>Hint 1</summary>
The coframe order in that term is one, three, two, four.
</details>
<details><summary>Hint 2</summary>
One swap restores increasing order.
</details>
<details><summary>Full solution</summary>
The wedge $\theta^1\wedge\theta^3\wedge\theta^2\wedge\theta^4$ equals minus the positive volume form. The Pfaffian places another minus sign in front of that term, so the product is positive curvature squared times volume. The first and last terms also become positive, making the coefficient three. Replacing the index-pair signs by an assumption that two-forms anticommute would give the wrong calculation.
</details>

### Exercise 8.9 {#riemannian-hodge-ex-9}

For a round four-sphere of radius $a>0$, show that its Euler-form integral remains two by scaling alone.

<details><summary>Hint 1</summary>
Sectional curvature scales as $a^{-2}$ and four-volume as $a^4$.
</details>
<details><summary>Hint 2</summary>
The Euler-form density contains curvature squared.
</details>
<details><summary>Full solution</summary>
The coefficient $3\kappa^2/(4\pi^2)$ acquires a factor $a^{-4}$ while the volume acquires $a^4$. They cancel. The unit-sphere computation therefore remains two at every positive radius. This verifies metric-scale independence for this family directly. It is not a proof of independence under an arbitrary metric deformation on an arbitrary manifold, which is part of the cited global theorem.
</details>

### Exercise 8.10 {#riemannian-hodge-ex-10}

Given the imported elliptic solvability statement, show explicitly why a closed form has no coexact term in the derived orthogonal decomposition.

<details><summary>Hint 1</summary>
Pair the decomposition with its coexact term.
</details>
<details><summary>Hint 2</summary>
Adjointness moves the codifferential onto the closed form as an exterior derivative.
</details>
<details><summary>Full solution</summary>
Write $\omega=h+d\delta u+\delta du$. Pairing the left side with the last term gives $\langle d\omega,du\rangle=0$. Orthogonality makes the right pairing equal exactly the squared norm of $\delta du$. Thus that term vanishes and the closed form differs from the harmonic term by the exact form $d\delta u$. The argument supplies the algebraic conclusion after analytic solvability; it does not establish that solvability by itself.
</details>

<a id="section-288-sources-and-provenance"></a>
## Sources and provenance {#section-290-sources-and-provenance}

New L5 introductory development continuing this book's curvature forms and the actual Smooth Manifolds differential-form/de Rham route, with fresh exercises. The deep analytic input is cited to Warner, *Foundations of Differentiable Manifolds and Lie Groups*, the Hodge theorem, and Jost, *Riemannian Geometry and Geometric Analysis*, Hodge theory. The general Euler integral is the Chern–Gauss–Bonnet theorem, with Chern's *A Simple Intrinsic Proof of the Gauss–Bonnet Formula for Closed Riemannian Manifolds* as a continuation reference. The star, formal-adjoint and finite-complex proofs and the explicit sphere normalization are supplied here; the general elliptic and characteristic-class proofs are not claimed.

<a id="section-292-summary"></a>
## Summary {#section-294-summary}

A metric and orientation define star, which gives the codifferential and the harmonic energy identity. The finite-dimensional Hodge model has a complete linear-algebra proof; the manifold decomposition additionally uses a named elliptic solvability and regularity theorem. Harmonic representatives then encode de Rham dimensions and their duality. Curvature two-forms define the even-dimensional Euler form, and the four-sphere calculation verifies its normalization. The general Chern–Gauss–Bonnet identity remains an explicitly cited global theorem, with its proof machinery distinguished from the worked model.
