
# The Exterior Derivative {#section-1-the-exterior-derivative}

A differential form measures ordered tangent directions. Its exterior derivative measures the first-order failure of those measurements to fit together as a potential. The construction works without choosing a metric, an orientation or an embedding. Its square is zero, making closed and exact forms the successive kernel and image of one geometric operation.

This L4 chapter follows [Covectors and Differential Forms](covectors-differential-forms.md) and [The Lie Bracket and Frobenius' Theorem](lie-bracket-frobenius.md). All manifolds are real, finite-dimensional, Hausdorff, second-countable and without boundary; maps, forms and fields are smooth. We use ordinary multivariable differentiation, equality of mixed partial derivatives for smooth functions, differentiation under an integral over a compact real interval, and the already named smooth local ODE theorem for flows. We prove coordinate independence, naturality, Cartan's formula and the Poincaré lemma. Integration on general oriented manifolds, Stokes' theorem and the global de Rham theorem are later subjects, not hidden inputs to these proofs.

<a id="section-5-1-differentiate-the-coefficients-and-alternate"></a>
## 1. Differentiate the coefficients and alternate {#section-7-1-differentiate-the-coefficients-and-alternate}

On an open coordinate domain with coordinates $x^1,\ldots,x^n$, write a $k$-form uniquely as

$$\omega=\sum_{I}\omega_I\,dx^{i_1}\wedge\cdots\wedge dx^{i_k},\qquad i_1<\cdots<i_k.$$

Define its local exterior derivative by

$$d\omega=\sum_I\sum_j\partial_j\omega_I\,dx^j\wedge dx^{i_1}\wedge\cdots\wedge dx^{i_k}.$$

For degree zero this is exactly the differential of a function already defined through tangent derivations. Degree above the dimension gives zero because the alternating bundle itself is zero. In particular every top-degree form is closed, though it need not be exact. Degree zero is different: there is no incoming degree-minus-one space unless it is deliberately defined to be zero.

The formula is real-linear. It also satisfies the graded product rule

$$d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^p\alpha\wedge d\beta,\qquad \deg\alpha=p.$$

To prove this, expand both forms in their coordinate bases. The ordinary product rule differentiates the two scalar coefficients. The first resulting term is already in the required order. In the second, moving the differentiating covector past the first form's $p$ coordinate covectors contributes exactly the sign displayed. Terms with repeated covectors vanish on both sides. Bilinearity then proves the rule for the entire finite sum.

Differentiating once more gives zero. In fact, each coefficient contributes second partial derivatives multiplied by $dx^\ell\wedge dx^j\wedge dx^I$. The terms with equal differentiating indices vanish. Those with unequal indices cancel in pairs, since their mixed partials agree and their wedge factors have opposite signs. Thus $d^2\omega=0$ on a coordinate domain. This is a statement about smooth coefficients; if one lowers regularity, the meaning of the second derivatives must be specified separately.

A useful uniqueness fact already follows. A real-linear graded derivation on local forms that agrees with $d$ on functions and sends every $dx^i$ to zero must equal the displayed formula. Every form is a sum of products of functions with coordinate covectors, so the derivation rule determines its value. This finite local generation argument will let us compare intrinsic operators without expanding every higher-degree coefficient again.

<a id="section-27-2-why-this-definition-is-independent-of-coordinates"></a>
## 2. Why this definition is independent of coordinates {#section-29-2-why-this-definition-is-independent-of-coordinates}

**Theorem 11.1 (Naturality in coordinates).** If $F:U\to V$ is a smooth map between open Euclidean sets, then

$$d(F^*\omega)=F^*(d\omega).$$

*Proof.* Write the target coordinates as $y^a$. It suffices by linearity to consider a term $a(y)\,dy^{i_1}\wedge\cdots\wedge dy^{i_k}$. Its pullback is $(a\circ F)dF^{i_1}\wedge\cdots\wedge dF^{i_k}$. The product rule and the local square-zero identity show that differentiating the factors $dF^{i_j}$ contributes zero. Differentiating the scalar coefficient gives, by the ordinary chain rule,

$$d(a\circ F)=\sum_b(\partial_ba\circ F)dF^b.$$

Wedging with the remaining factors is exactly the pullback of the target derivative. This proves the assertion for each term and hence for their sum. No injectivity, surjectivity or rank assumption entered the calculation. ∎

Apply this theorem to a coordinate transition diffeomorphism on an overlap. The local forms constructed as derivatives in the two charts are pullbacks of one another and therefore represent the same geometric form. They consequently glue to a unique global form $d\omega$. Smoothness follows locally from the smooth coefficient formula. This constructs the global operator rather than assuming that a plausible-looking coordinate expression must be invariant.

For a general smooth map between manifolds, choose source and target charts around any point, reducing naturality to Theorem 11.1. Thus exterior differentiation commutes with pullback along every smooth map. The graded product rule and square-zero identity are likewise global, because equality of smooth forms can be checked in charts. Restriction to open subsets is one special case; all the constructions are local.

One can now state an intrinsic characterization. Exterior differentiation is the unique local real-linear graded derivation of degree one which agrees with the differential on functions and whose square vanishes on functions. Indeed $D(dx^i)=D(Dx^i)=0$, so the preceding uniqueness argument applies in each chart. The adjective local matters here: the operator must commute with restricting a form to an open subset. This characterization explains why no auxiliary connection is necessary for this particular differentiation of alternating forms.

<a id="section-45-3-the-bracket-term-in-degree-one"></a>
## 3. The bracket term in degree one {#section-47-3-the-bracket-term-in-degree-one}

For a one-form $\alpha$ and smooth fields $X,Y$, the coordinate definition implies

$$d\alpha(X,Y)=X(\alpha(Y))-Y(\alpha(X))-\alpha([X,Y]).$$

Here is the full cancellation. Write $\alpha=\sum_i a_i dx^i$. Expanding the first two terms produces derivatives of the coefficients and also derivatives of the components of $X,Y$. The coefficient terms are $\sum_{i,j}(\partial_ja_i)(X^jY^i-Y^jX^i)$, exactly the coordinate evaluation of $d\alpha$. The remaining terms are $\sum_i a_i\bigl(X(Y^i)-Y(X^i)\bigr)$, which equal $\alpha([X,Y])$ by the bracket formula proved earlier. Subtracting them gives the identity.

The bracket term is essential because the vector fields themselves vary. For a concrete check take $\alpha=dy$, $X=\partial_x$ and $Y=x\partial_y$ on the plane. Its exterior derivative is zero. Nevertheless the first two derivative terms give one, since $\alpha(Y)=x$ and $\alpha(X)=0$. The bracket is $\partial_y$, and its evaluation supplies the subtracting one. Omitting that term would manufacture a nonzero derivative of a coordinate differential.

<a id="section-55-4-lie-differentiation-and-cartan-s-formula"></a>
## 4. Lie differentiation and Cartan's formula {#section-57-4-lie-differentiation-and-cartan-s-formula}

Let $X$ have local flow $\Phi_t$. Wherever the flow is defined for small times near a point, define

$$\mathcal L_X\omega=\left.\frac{d}{dt}\right|_{t=0}\Phi_t^*\omega.$$

The derivative is taken at a fixed initial point, so forms based at different flowed points are first pulled back to that same tangent space. Merely differentiating their scalar coefficients at moving points would omit the changing input vectors. Smoothness of the local flow makes this a smooth form, and uniqueness of local flows ensures the definition agrees on overlaps. Completeness is not required.

Differentiating the pullback wedge rule shows that $\mathcal L_X$ is a degree-zero derivation. It agrees with $X$ on functions. Since $\Phi_t^*dx^i=d(x^i\circ\Phi_t)$, differentiating smooth coefficients gives

$$\mathcal L_X dx^i=dX^i.$$

**Theorem 11.2 (Cartan's formula).** With contraction defined by insertion into the first slot,

$$\mathcal L_X=d\iota_X+\iota_Xd.$$

*Proof.* The expression on the right is a degree-zero derivation. To verify this claim, expand it on a product of forms using the two graded product rules. The middle terms involving one derivative on each factor cancel with their opposite signs, leaving the claimed ordinary derivation rule. On a function $f$ its value is $\iota_Xdf=Xf$, because contraction of a function is zero. On a coordinate covector $dx^i$ its value is $d(X^i)$, since $d(dx^i)=0$. These are the values of the Lie derivative just established. Local forms are generated by functions and coordinate covectors, so uniqueness for degree-zero derivations proves equality in every chart and hence globally. ∎

An immediate consequence is $\mathcal L_Xd=d\mathcal L_X$: expand both sides with Cartan's formula and discard the terms containing $d^2$. Thus a flow preserves the closedness of a form infinitesimally, in agreement with naturality of pullback. More precisely, on an interval for which the relevant flow maps are defined,

$$\frac{d}{dt}\Phi_t^*\omega=\Phi_t^*(\mathcal L_X\omega).$$

The local group law proves this by differentiating $\Phi_{t+h}^*=\Phi_t^*\Phi_h^*$ at $h=0$. Therefore a form with zero Lie derivative is preserved along each such flow interval: all pulled-back coefficient functions have zero derivative and stay constant. This conclusion is local in the available flow domain, not a claim that every field has globally defined time maps.

<a id="section-79-5-integrating-a-homotopy-of-pullbacks"></a>
## 5. Integrating a homotopy of pullbacks {#section-81-5-integrating-a-homotopy-of-pullbacks}

Let $F:[0,1]\times M\to N$ be smooth, meaning its coordinate formulas extend smoothly near the closed parameter interval. Write $F_t(p)=F(t,p)$. The product cylinder here is used through these coefficient formulas; no general integration theorem for manifolds with boundary is required.

Every form on this cylinder decomposes uniquely as

$$\omega=\alpha_t+dt\wedge\beta_t,$$

where the two families have only covectors tangent to $M$. Define $K\omega=\int_0^1\beta_t\,dt$ by integrating their coefficients. These integrals give smooth forms on $M$: around a point, compactness of the parameter interval supplies a common finite coordinate control, and ordinary parameter-dependent differentiation under the integral proves smoothness. Equivalently $\beta_t$ is restriction of $\iota_{\partial_t}\omega$ to the slice, which makes the definition independent of coordinates on $M$.

Writing $d_M$ for differentiation in the spatial variables, the product formula gives

$$d\omega=d_M\alpha_t+dt\wedge(\partial_t\alpha_t-d_M\beta_t).$$

The sign comes from differentiating $dt\wedge\beta_t$, whose first factor has degree one. Consequently

$$K(d\omega)=\alpha_1-\alpha_0-d_M(K\omega).$$

This is just the real Fundamental Theorem of Calculus applied to each coefficient. For the degree-lowering operator $H=K F^*$, naturality therefore proves the homotopy formula

$$F_1^*\eta-F_0^*\eta=d(H\eta)+H(d\eta).$$

In degree zero the operator $H$ itself has value zero, but the second term still contains the parameter derivative of the function. The formula then reduces to the ordinary Fundamental Theorem. For a closed positive-degree form it says that homotopic pullbacks differ by an exact form. It does not claim their actual representative forms are equal.

<a id="section-103-6-the-poincar-lemma-with-its-exact-scope"></a>
## 6. The Poincaré lemma with its exact scope {#section-105-6-the-poincar-lemma-with-its-exact-scope}

**Theorem 11.3 (Poincaré lemma on a star-shaped domain).** Let $U\subseteq\mathbb R^n$ be open and star-shaped about the origin. Every closed smooth form on $U$ of positive degree is exact.

*Proof.* Use $F(t,x)=tx$. Star-shapedness ensures that the whole homotopy stays in the domain, and openness allows a smooth local extension at every point of the closed cylinder. At time one the map is the identity. At time zero it is constant, so its pullback of a positive-degree form is zero: its differential has rank zero. For a closed form the homotopy formula therefore becomes $\eta=d(H\eta)$, giving the required smooth primitive. ∎

Explicitly, for degree $k>0$ this primitive is

$$(H\eta)_x(v_1,\ldots,v_{k-1})=\int_0^1t^{k-1}\eta_{tx}(x,v_1,\ldots,v_{k-1})\,dt.$$

The power comes from the $k-1$ spatial input vectors, each multiplied by $t$ under the homotopy differential. There is no singularity at zero: the exponent is nonnegative, and the coefficients are smooth there. This explicit observation also prevents mistakenly using a radial formula on a punctured domain whose radial homotopy passes through a missing point.

Every manifold point has a chart whose image can be shrunk to a ball. Thus a closed positive-degree form is locally exact. The separate local primitives need not agree on overlaps, so the lemma alone is no global potential theorem. In degree zero, closed means locally constant. On a ball this follows by applying the Fundamental Theorem along line segments to a function with zero differential; on a manifold it follows in charts. A locally constant function is constant on each connected component because its level sets and their complements are open. The only exact zero-form is zero when the incoming space is defined as zero. Nonzero constants therefore remain a deliberate exception to a blanket exactness assertion.

<a id="section-117-7-three-worked-examples"></a>
## 7. Three worked examples {#section-119-7-three-worked-examples}

<a id="section-119-worked-example-11-4-recover-a-potential-from-a-closed-o"></a>
### Worked example 11.4 — Recover a potential from a closed one-form {#section-121-worked-example-11-4-recover-a-potential-from-a-closed-o}

On the plane take

$$\alpha=(2xy+\cos x)\,dx+x^2\,dy.$$

Its derivative is $(2x-2x)dx\wedge dy=0$. To construct a potential directly, first integrate its first coefficient in the $x$ variable, obtaining $x^2y+\sin x+C(y)$. Its derivative in the other variable must equal $x^2$, so $C'(y)=0$. Hence $f=x^2y+\sin x$ is a global potential, unique up to a constant on the connected plane. The arbitrary function introduced by the first integration is essential: replacing it prematurely by a fixed constant would not work for a general closed form. The star-shaped-domain theorem explains why this successful coefficient matching is guaranteed here. It does not make the same promise on every domain with a hole.

<a id="section-127-worked-example-11-5-closed-on-the-punctured-plane-local"></a>
### Worked example 11.5 — Closed on the punctured plane, locally a derivative {#section-129-worked-example-11-5-closed-on-the-punctured-plane-local}

Set

$$\alpha=\frac{-y\,dx+x\,dy}{x^2+y^2}$$

on the punctured plane. If its coefficients are $P,Q$, direct differentiation gives

$$\partial_xQ=\frac{y^2-x^2}{(x^2+y^2)^2}=\partial_yP,$$

so the form is closed. Pulling it back along $c(t)=(\cos t,\sin t)$ gives $c^*\alpha=dt$. Suppose a global smooth potential existed. The ordinary chain rule would then give $(f\circ c)'=1$. Integrating from zero to $2\pi$ contradicts equality of the endpoint values, since the curve starts and ends at the same point. This uses only one-dimensional integration, not Stokes' theorem. Locally an angle coordinate is a potential, exactly as the Poincaré lemma predicts. The contradiction concerns gluing those local real-valued angles into one global potential.

<a id="section-139-worked-example-11-6-a-rotation-preserves-a-form-through"></a>
### Worked example 11.6 — A rotation preserves a form through cancellation {#section-141-worked-example-11-6-a-rotation-preserves-a-form-through}

For $X=-y\partial_x+x\partial_y$ and $\beta=-y\,dx+x\,dy$ on the plane, contraction gives $\iota_X\beta=x^2+y^2$. Also $d\beta=2dx\wedge dy$, so

$$\iota_Xd\beta=-2x\,dx-2y\,dy.$$

Its sum with $d(\iota_X\beta)=2x\,dx+2y\,dy$ vanishes. Cartan's formula therefore proves $\mathcal L_X\beta=0$. The rotation field is complete, and its flow preserves this one-form for every real time. Neither term in Cartan's formula vanishes individually: invariance comes from their cancellation. On the punctured plane the same calculation and invariance of the squared radius show that the angular one-form of the preceding example is also preserved. Invariance under a symmetry does not imply exactness, as that example already demonstrated.

<a id="section-147-exercises"></a>
## Exercises {#section-149-exercises}

### Exercise 11.1 {#smooth-exterior-derivative-ex-1}

On three-dimensional Euclidean space compute the derivative of $\omega=xy\,dz+z\,dx$ and then compute its second derivative.

<details><summary>Hint 1</summary>
Differentiate each scalar coefficient and wedge with its original coordinate covector.
</details>
<details><summary>Hint 2</summary>
Keep the two possible orders of the differentiating covectors until comparing signs.
</details>
<details><summary>Full solution</summary>
The first derivative is $y\,dx\wedge dz+x\,dy\wedge dz+dz\wedge dx$. Differentiating gives $dy\wedge dx\wedge dz+dx\wedge dy\wedge dz$, which is zero by alternation. The last term has constant coefficient and contributes zero. This is a concrete instance of mixed-partial cancellation, rather than an assumption that the first derivative itself vanishes.
</details>

### Exercise 11.2 {#smooth-exterior-derivative-ex-2}

Let $\alpha$ be a closed one-form and $f$ a smooth function. Determine precisely when $f\alpha$ is closed.

<details><summary>Hint 1</summary>
Apply the product rule with a degree-zero first factor.
</details>
<details><summary>Hint 2</summary>
At a point where the covector $\alpha$ is nonzero, extend it to a covector basis.
</details>
<details><summary>Full solution</summary>
The derivative is $df\wedge\alpha$, so its vanishing is the exact condition. At a point where $\alpha$ is nonzero this means $df$ is a scalar multiple of $\alpha$: in a basis with first element $\alpha$, every other coefficient of $df$ would contribute an independent two-form. Where $\alpha$ vanishes the condition is automatic at that point. In dimension one every two-form is zero, consistent with the same criterion. Constancy of $f$ is sufficient but generally unnecessary.
</details>

### Exercise 11.3 {#smooth-exterior-derivative-ex-3}

For $F(u,v)=(u^2,v)$ and $\alpha=x\,dy$ verify naturality explicitly, including at points with $u=0$.

<details><summary>Hint 1</summary>
Pull back both the scalar coefficient and the coordinate differentials.
</details>
<details><summary>Hint 2</summary>
The source derivative has a factor $2u$, which is allowed to vanish.
</details>
<details><summary>Full solution</summary>
Pullback gives $F^*\alpha=u^2dv$, whose derivative is $2u\,du\wedge dv$. On the other hand $d\alpha=dx\wedge dy$, and its pullback is $d(u^2)\wedge dv=2u\,du\wedge dv$. Both sides vanish at the rank-deficient points. Naturality therefore remains valid there; its proof never needed an inverse map.
</details>

### Exercise 11.4 {#smooth-exterior-derivative-ex-4}

Derive the formula $\mathcal L_X\alpha=\sum_i\bigl(X(a_i)+\sum_j a_j\partial_iX^j\bigr)dx^i$ for $\alpha=\sum_i a_i dx^i$.

<details><summary>Hint 1</summary>
Lie differentiation is a degree-zero derivation.
</details>
<details><summary>Hint 2</summary>
Use its values on coefficient functions and on coordinate differentials separately.
</details>
<details><summary>Full solution</summary>
The derivative of each term is $X(a_i)dx^i+a_i dX^i$. Expanding the second summand and collecting the coefficient of a fixed $dx^i$ gives the stated expression. The extra term differentiates the field components. It accounts for pulling back the input tangent vectors, and explains why differentiating only the coefficients $a_i$ would define the wrong operation.
</details>

### Exercise 11.5 {#smooth-exterior-derivative-ex-5}

Let $X=x\partial_x+y\partial_y$ and $\mu=dx\wedge dy$. Compute $\mathcal L_X\mu$ both by Cartan's formula and by the flow.

<details><summary>Hint 1</summary>
Contraction gives $x\,dy-y\,dx$.
</details>
<details><summary>Hint 2</summary>
The time-$t$ flow multiplies both coordinates by $e^t$.
</details>
<details><summary>Full solution</summary>
The form $\mu$ is closed, while differentiating its contraction gives $2dx\wedge dy$. Cartan therefore gives $\mathcal L_X\mu=2\mu$. The flow pullback is $e^{2t}\mu$, since both covector factors acquire $e^t$. Differentiating at zero gives the same result. Smoothness and completeness of this particular field do not imply that its flow preserves area; the computed infinitesimal scaling shows the contrary.
</details>

### Exercise 11.6 {#smooth-exterior-derivative-ex-6}

Prove that every closed positive-degree form on a smoothly contractible manifold is exact, where smoothly contractible means there is a smooth homotopy from a constant map to the identity.

<details><summary>Hint 1</summary>
Apply the homotopy formula to that specific contraction.
</details>
<details><summary>Hint 2</summary>
A constant map pulls every positive-degree form back to zero.
</details>
<details><summary>Full solution</summary>
Let the homotopy run from the constant map at time zero to the identity at time one. For a closed form the homotopy formula becomes $\omega=d(H\omega)$, because the constant pullback and the term containing $d\omega$ are both zero. This proves exactness with an explicit smooth primitive. The supplied smooth contraction is part of the hypothesis; no smoothing theorem for arbitrary continuous contractions has been assumed. Degree zero remains excluded because a constant map need not pull a function back to zero.
</details>

### Exercise 11.7 {#smooth-exterior-derivative-ex-7}

Use the radial formula to find a primitive of the constant two-form $dx\wedge dy$ on the plane, and compare it with $x\,dy$.

<details><summary>Hint 1</summary>
Insert the radial position vector into the first slot of the two-form.
</details>
<details><summary>Hint 2</summary>
The remaining input contributes one factor of the homotopy parameter.
</details>
<details><summary>Full solution</summary>
The radial primitive is $(x\,dy-y\,dx)/2$, since integrating the factor $t$ from zero to one gives one half. Its derivative is $dx\wedge dy$. Subtracting $x\,dy$ gives $-(x\,dy+y\,dx)/2=d(-xy/2)$. The two primitives differ by an exact one-form in this example. In general two primitives differ by a closed form, whose exactness requires further information about the domain.
</details>

### Exercise 11.8 {#smooth-exterior-derivative-ex-8}

On a connected manifold, prove that two smooth functions with the same differential differ by a constant. Explain what changes on a disconnected manifold.

<details><summary>Hint 1</summary>
Their difference has zero differential on every coordinate ball.
</details>
<details><summary>Hint 2</summary>
A locally constant function has open level sets and open complements.
</details>
<details><summary>Full solution</summary>
The line-segment Fundamental Theorem in a coordinate ball makes the difference constant on that ball. It is therefore locally constant. If it took two values on a connected manifold, one of its nonempty level sets and its nonempty complement would disconnect the manifold, a contradiction. On a disconnected manifold the argument applies to each connected component. Different components may carry different constants; a single shared constant is not forced.
</details>

### Exercise 11.9 {#smooth-exterior-derivative-ex-9}

Show that an exact one-form has zero pullback integral around every piecewise-smooth closed curve, using only real-variable calculus. Deduce that adding an exact form cannot change the angular example's nonzero period.

<details><summary>Hint 1</summary>
For each smooth piece the pullback of $df$ is the derivative of $f$ composed with that piece.
</details>
<details><summary>Hint 2</summary>
Sum the endpoint differences; adjacent endpoints cancel.
</details>
<details><summary>Full solution</summary>
The Fundamental Theorem on each piece gives its final potential value minus its initial value. Summing cancels every intermediate endpoint. Closedness of the whole curve cancels the two remaining values, giving zero. Pullback and real integration are linear, so adding $df$ to the angular form changes its circular period by zero. Its period therefore remains $2\pi$, and the modified form is still not globally exact. No surface spanning the loop in the punctured plane has been used or presumed.
</details>

### Exercise 11.10 {#smooth-exterior-derivative-ex-10}

Suppose a smooth one-form satisfies $\alpha(X)=0$ and $\iota_Xd\alpha=0$. Prove that it is invariant under the local flow of $X$. Is completeness needed?

<details><summary>Hint 1</summary>
Both summands of Cartan's formula vanish under the hypotheses.
</details>
<details><summary>Hint 2</summary>
Differentiate the pulled-back form at each available time, rather than only at time zero.
</details>
<details><summary>Full solution</summary>
Contraction of the one-form is the zero function, so its differential is zero. The second assumed contraction is also zero, giving $\mathcal L_X\alpha=0$. The time derivative of its flow pullback is consequently zero wherever the flow is defined. Starting from the identity at time zero, each coefficient of that pulled-back form remains equal to its initial coefficient. This is the asserted local invariance. Completeness is unnecessary; it would only enlarge the set of times for which the statement can be made.
</details>

<a id="section-289-sources-and-provenance"></a>
## Sources and provenance {#section-291-sources-and-provenance}

New L4 development expanding the exterior-derivative and closed-versus-exact scope of [Quarto Topology, chapter 18](../../../../textbooks/topology/chapters/18-differential-forms-derham.qmd). The earlier Quarto manuscript and its examples remain intact. The rotation and radial homotopy calculations and all exercises above are developed here. Comparison references are Lee, *Introduction to Smooth Manifolds*, the differential-forms and exterior-derivative chapters; Tu, *An Introduction to Manifolds*, the exterior derivative and Poincaré lemma sections; and Guillemin and Haine, *Differential Forms*, the local homotopy construction.

<a id="section-293-summary"></a>
## Summary {#section-295-summary}

Exterior differentiation is obtained by differentiating coefficients and alternating, with the chain rule proving that the result is independent of coordinates. Its square vanishes and it commutes with pullback. Cartan's formula relates it to contraction and infinitesimal flow. A full coefficient-level homotopy formula proves local exactness on star-shaped domains in positive degree. Global exactness can fail, and degree-zero constants require their own treatment. Those qualifications carry forward to integration and de Rham cohomology.
