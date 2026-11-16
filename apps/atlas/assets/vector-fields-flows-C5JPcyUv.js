var e=`---
parent_id: book-smooth-manifolds
chapter_id: vector-fields-flows
title: "Vector Fields and Flows"
level: graduate
license: CC BY-SA 4.0
---

# Vector Fields and Flows {#section-1-vector-fields-and-flows}

A smooth vector field selects a velocity at every point. An integral curve follows that selection, and a flow organizes the curves into a smoothly varying family of local motions. Existence near a point is an ordinary differential-equation question. Existence for all time is a separate global question: a perfectly smooth field on a noncompact manifold can send a trajectory to infinity in finite time.

This L4 chapter assumes [Vector Bundles and the Tangent Bundle](vector-bundles-tangent-bundle.md), intrinsic differentials and the inverse-function theorem used earlier. All manifolds are finite-dimensional real, Hausdorff, second-countable and without boundary. Vector fields and curves are smooth. We prove the intrinsic maximal-flow construction, the local group law, time-map invertibility, compact-support completeness and the flow-box theorem. The named Euclidean ODE input below supplies existence, uniqueness and smooth dependence; those analytic theorems are not reproved here.

<a id="section-5-1-sections-differentiate-smooth-functions"></a>
## 1. Sections differentiate smooth functions {#section-7-1-sections-differentiate-smooth-functions}

A smooth vector field is a smooth section $X:M\\to TM$. In chart $x=(x^1,\\ldots,x^n)$ it has expression

$$X=\\sum_i X^i\\frac{\\partial}{\\partial x^i},$$

where each coefficient $X^i$ is smooth. On overlap the coefficients transform by the coordinate-transition Jacobian. They are components of tangent vectors, not a collection of independent scalar functions on the whole manifold.

For $f\\in C^\\infty(M)$ define $(Xf)(p)=X_p(f)$. This is a smooth function, since in a chart it is $\\sum_iX^i\\partial_i f$. Linearity and the Leibniz rule hold pointwise, giving

$$X(fg)=fXg+gXf.$$

Conversely, an $\\mathbb R$-linear Leibniz derivation $D:C^\\infty(M)\\to C^\\infty(M)$ determines a smooth vector field. At each $p$, evaluate $Df$ at $p$ to obtain a tangent derivation $D_p$. The earlier locality argument applies: a cutoff supported where $f$ vanishes shows $(Df)(p)=0$ whenever $f$ vanishes near $p$. Local coordinate functions can therefore be used after multiplying by a cutoff equal to one on a smaller chart neighborhood. On that smaller neighborhood the coordinate coefficient of $D_p$ is $D$ applied to the corresponding extended coordinate function, a smooth function by the assumed target of $D$. Thus the coefficients vary smoothly. The coordinate-basis theorem proves that the resulting field acts as $D$ on every function.

This correspondence uses smoothness of the output $Df$, not merely a separate algebraic derivation at every point. Arbitrary pointwise choices need not form a smooth field.

<a id="section-21-2-integral-curves-and-the-precise-analytic-input"></a>
## 2. Integral curves and the precise analytic input {#section-23-2-integral-curves-and-the-precise-analytic-input}

An integral curve of $X$ is a smooth $\\gamma:I\\to M$ on an open real interval satisfying

$$\\dot\\gamma(t)=X_{\\gamma(t)}.$$

In chart coordinates this is the autonomous equation $a'(t)=X^x(a(t))$, with $X^x$ the smooth coefficient column. The differential chain rule ensures that a solution in one chart is a solution in another while it stays in the overlap.

**Theorem 8.6 (Named input: Euclidean smooth local ODE).** For a smooth vector function $V$ on an open subset of $\\mathbb R^n$ and an initial point $a$, there are an open neighborhood $W$ of $a$, a number $\\varepsilon>0$ and a smooth map $\\theta:(-\\varepsilon,\\varepsilon)\\times W\\to\\mathbb R^n$ solving the equation with $\\theta(0,b)=b$. Solutions with the same initial value agree on their common connected time interval while defined in the domain. The time interval is uniform for initial points in $W$. This is the usual local existence, uniqueness and smooth-dependence theorem for a smooth autonomous ODE.

The interval uniformity and smooth dependence are used below. A theorem asserting a separate solution for each initial point would not alone establish openness of a flow domain or smoothness in the initial point.

Chart transfer gives local solutions on $M$. Two manifold solutions with the same value at one time agree throughout any common time interval containing it. Indeed the equal-time set is closed by Hausdorffness and continuity. It is open by choosing a common chart near any equal value and applying local ODE uniqueness. Since the time interval is connected and the equal-time set is nonempty, it is the entire interval.

<a id="section-35-3-maximal-curves-and-their-common-domain"></a>
## 3. Maximal curves and their common domain {#section-37-3-maximal-curves-and-their-common-domain}

**Theorem 8.1 (Maximal integral curve).** For every $p\\in M$ there is a unique maximal integral curve $\\gamma_p:I_p\\to M$ with $0\\in I_p$ and $\\gamma_p(0)=p$. Its domain is an open interval. Every other integral curve through $p$ at zero is its restriction.

*Proof.* Take all solution intervals through $p$ at zero. Any two intersect in an interval containing zero, and their solutions agree there by uniqueness. Their union is an open interval containing zero, because each member is an interval containing zero. Their values therefore glue to one curve on that union. Smoothness and the differential equation are local, so the glued curve is a solution. It contains every other one by construction and cannot extend further without contradicting the definition of the union. Uniqueness follows by the same agreement argument. ∎

Define

$$\\mathcal D=\\{(t,p):t\\in I_p\\}\\subset\\mathbb R\\times M,
\\qquad \\Phi(t,p)=\\gamma_p(t).$$

**Theorem 8.2 (Smooth maximal flow).** The set $\\mathcal D$ is open, contains $\\{0\\}\\times M$, and $\\Phi:\\mathcal D\\to M$ is smooth.

*Proof.* The Euclidean input already proves this near each pair $(0,p)$. For a general $(t_0,p_0)$, the compact trajectory segment between times zero and $t_0$ is covered by finitely many ODE neighborhoods with local smooth solution maps and uniform positive time lengths. We explain why this gives a neighborhood of the whole pair, rather than just an extension of one curve.

For $t_0>0$, choose a finite time partition from zero to $t_0$ fine enough that each consecutive trajectory piece starts inside one of these neighborhoods and has duration strictly less than its permitted local time. Such a partition exists by a finite cover of the compact time segment, its Lebesgue-number property, and the minimum of the finitely many positive time bounds. At the actual initial point, composing the corresponding local solution maps reproduces $\\gamma_{p_0}$ by uniqueness.

Each starting neighborhood is open. By continuity of the finite partial compositions, a sufficiently small neighborhood of $p_0$ follows the same chain of local maps. Keep every partition duration fixed except the final one, and allow that final duration to vary in a small open interval about its original value. It stays within the strict permitted bound and yields a smooth composition in both total time and initial point. Concatenating the solutions gives integral curves through those initial points, and uniqueness identifies the compositions with their maximal curves. This defines $\\Phi$ smoothly on an open product neighborhood of $(t_0,p_0)$ inside $\\mathcal D$.

For $t_0<0$, use the same construction with negative time steps along the compact reversed segment. The case $t_0=0$ was the original local theorem. Every domain point therefore has the required open neighborhood, proving both assertions. ∎

No claim that $\\mathcal D$ is a fixed rectangle $I\\times M$ has been made. The available time interval can vary with the initial point.

<a id="section-58-4-the-local-group-law-and-inverse-time-maps"></a>
## 4. The local group law and inverse time maps {#section-60-4-the-local-group-law-and-inverse-time-maps}

**Theorem 8.3 (Translation of maximal intervals).** If $t\\in I_p$ and $q=\\Phi(t,p)$, then

$$I_q=I_p-t,\\qquad \\gamma_q(s)=\\gamma_p(t+s).$$

Consequently whenever $\\Phi(t,p)$ and $\\Phi(s,\\Phi(t,p))$ are defined,

$$\\Phi(s,\\Phi(t,p))=\\Phi(t+s,p).$$

*Proof.* The shifted curve $s\\mapsto\\gamma_p(t+s)$ is a solution through $q$ on $I_p-t$. Maximality and uniqueness put this interval inside $I_q$ and identify the values there. In particular $-t\\in I_q$ and $\\gamma_q(-t)=p$. Shifting $\\gamma_q$ back therefore gives a solution through $p$ on $I_q+t$, so maximality of $\\gamma_p$ gives $I_q+t\\subseteq I_p$. Together with the first inclusion this proves interval equality and the formula. ∎

For fixed $t$, let $M_t=\\{p:(t,p)\\in\\mathcal D\\}$. It is open. The map $\\Phi_t:M_t\\to M_{-t}$ is a diffeomorphism with inverse $\\Phi_{-t}$: the translation theorem gives both compositions as identity, and smoothness follows by restricting the smooth flow to a time slice. Its target is exactly $M_{-t}$, since starting with any point there and moving by $-t$ gives its preimage.

Differentiating the flow law in the short time parameter at zero also gives

$$d(\\Phi_t)_p(X_p)=X_{\\Phi_t(p)}.$$

The differentiations take place where the local compositions are defined; openness supplies such a short-time neighborhood. Thus a field's own motion transports its generating velocity consistently.

<a id="section-78-5-completeness-is-a-global-assertion"></a>
## 5. Completeness is a global assertion {#section-80-5-completeness-is-a-global-assertion}

A field is complete if every $I_p=\\mathbb R$. Then its flow is a smooth map $\\mathbb R\\times M\\to M$ and its time maps form a one-parameter group of global diffeomorphisms.

**Theorem 8.4 (Compactness and compact support).** Every smooth vector field on a compact manifold is complete. More generally every compactly supported smooth vector field on an arbitrary manifold is complete.

*Proof.* On a compact manifold, choose finitely many initial-point neighborhoods from the local ODE theorem covering $M$. Take the minimum $\\varepsilon>0$ of their positive time lengths. Every initial point has a solution for at least $(-\\varepsilon,\\varepsilon)$.

If a maximal curve had finite upper endpoint $b$, choose $t\\in I_p$ with $0<b-t<\\varepsilon/2$. Starting from $\\gamma_p(t)$ gives a solution for duration $\\varepsilon$ forward. It agrees with the old curve on the common interval by uniqueness, so their union extends it past $b$, contradicting maximality. A finite lower endpoint is excluded by the same argument backward. Hence every maximal interval is the whole line.

For compact support, let $K$ be the support, the closure of the nonzero-field set. Cover $K$ by finitely many local ODE initial neighborhoods and choose a common time length as before. Outside $K$ the field is zero, and the constant curve exists for all time. Thus every point of $M$ again has a common positive existence interval, and the endpoint argument applies. If $K$ is empty, all curves are constant from the outset. ∎

Compact support is sufficient, not necessary. A constant translation field on Euclidean space is complete and has noncompact support. Nor does smoothness alone control escape on a noncompact base.

<a id="section-92-6-flow-boxes-straighten-nonzero-fields"></a>
## 6. Flow boxes straighten nonzero fields {#section-94-6-flow-boxes-straighten-nonzero-fields}

**Theorem 8.5 (Flow-box theorem).** If $X_p\\ne0$, there are local coordinates $(t,z_2,\\ldots,z_n)$ near $p$ in which $X=\\partial/\\partial t$.

*Proof.* Choose coordinates centered at $p$ with first component $X^1(p)\\ne0$, permuting them if necessary. The local slice $x^1=0$ is parametrized by $z=(z_2,\\ldots,z_n)$. For small $t,z$ define

$$H(t,z)=\\Phi_t(x^{-1}(0,z)).$$

The flow domain is open, so this is smooth on an open neighborhood of $(0,0)$. Its derivative there has first column $X_p$ and remaining columns the coordinate tangent directions numbered two through $n$. Their independence follows from the nonzero first component of $X_p$. The manifold inverse-function theorem makes $H$ a diffeomorphism on smaller neighborhoods.

For each fixed $z$, the derivative of $H$ in $t$ equals $X_{H(t,z)}$ by the integral-curve equation. Hence $H$ carries the coordinate field $\\partial/\\partial t$ to $X$. Using $H^{-1}$ as coordinates gives exactly the asserted expression. ∎

At a zero of $X$ this conclusion is impossible, since invertible coordinate differentials preserve the zero vector. A flow box is a local description near a regular trajectory point; it need not provide a global time coordinate for periodic or recurrent trajectories.

<a id="section-106-7-worked-examples"></a>
## 7. Worked examples {#section-108-7-worked-examples}

<a id="section-108-worked-example-8-6-rotation-on-the-circle"></a>
### Worked example 8.6 — Rotation on the circle {#section-110-worked-example-8-6-rotation-on-the-circle}

On $S^1$, let $X_{(x,y)}=(-y,x)$, the global tangent frame constructed earlier. Its flow is

$$\\Phi_t(x,y)=(x\\cos t-y\\sin t,x\\sin t+y\\cos t).$$

The squared coordinate sum remains $x^2+y^2=1$, and differentiation gives $\\partial_t\\Phi_t=(-[\\Phi_t]_2,[\\Phi_t]_1)=X_{\\Phi_t}$, where brackets label the two output components. At zero time it is the original point. Uniqueness identifies this explicit formula with the maximal flow, and it exists for all real times. The time maps are rotations with inverse angle $-t$.

Every orbit is periodic with period $2\\pi$, so no single global real time coordinate can parametrize the entire circle injectively. The flow-box theorem still applies locally at every point because the field never vanishes. Completeness, periodicity and the existence of local straightening are compatible assertions.

<a id="section-118-worked-example-8-7-smooth-quadratic-speed-escapes-in-fi"></a>
### Worked example 8.7 — Smooth quadratic speed escapes in finite time {#section-120-worked-example-8-7-smooth-quadratic-speed-escapes-in-fi}

On the line take $X=x^2\\,\\partial/\\partial x$. For initial value $p$, the solution is

$$\\Phi(t,p)=\\frac{p}{1-pt}.$$

For $p>0$, its maximal interval through zero is $(-\\infty,1/p)$; for $p<0$, it is $(1/p,\\infty)$; for $p=0$, it is all $\\mathbb R$ with constant zero solution. Differentiation verifies $x'=x^2$ and the initial value. At the finite endpoint for nonzero $p$, its modulus diverges, so no continuous real-valued extension is possible. Local uniqueness and this obstruction establish maximality.

The total domain is the open set $\\{(t,p):1-pt>0\\}$. The same rational expression on the other side of its pole is not part of the integral curve through $p$ at time zero: the required domain is the connected interval containing zero. This smooth field is not complete.

<a id="section-128-worked-example-8-8-a-bounded-velocity-on-a-punctured-do"></a>
### Worked example 8.8 — A bounded velocity on a punctured domain {#section-130-worked-example-8-8-a-bounded-velocity-on-a-punctured-do}

On $M=\\mathbb R^2\\setminus\\{0\\}$, take $Y=(x/r,y/r)$ with $r=\\sqrt{x^2+y^2}$. It is smooth on this manifold and has Euclidean length one. In polar coordinates its integral curves have fixed angle and satisfy $r'=1$. From initial radius $r_0>0$, their maximal time interval is $(-r_0,\\infty)$.

At backward time $-r_0$ the ambient curve reaches the missing origin, which is not a point of $M$. Therefore no manifold-valued extension through that time exists. Bounded speed on a proper open Euclidean domain does not by itself ensure completeness; a curve can reach its omitted boundary in finite time. The compact-manifold theorem has no such escape route and makes different assumptions.

<a id="section-134-8-exercises"></a>
## 8. Exercises {#section-136-8-exercises}

### Exercise 8.1 {#smooth-manifolds-flows-ex-1}

If $X_p=0$, prove the integral curve through $p$ is constant for all time.

<details><summary>Hint 1</summary>
The constant curve is a solution on the whole line.
</details>
<details><summary>Hint 2</summary>
Use maximality and uniqueness, not a heuristic about a particle stopping.
</details>
<details><summary>Full solution</summary>
The constant curve has zero velocity and field value $X_p=0$, so it solves the equation for every real time. By uniqueness every curve through $p$ agrees with it on its domain. Its all-time domain is already available, so the maximal curve is this constant curve on $\\mathbb R$. A nonconstant integral curve cannot reach an equilibrium at a finite time in its domain and then leave it, because uniqueness at that time would force the whole connected curve to be constant.
</details>

### Exercise 8.2 {#smooth-manifolds-flows-ex-2}

Compute the maximal flow of $X=x\\,\\partial/\\partial x$ on $\\mathbb R$. Is compact support necessary for completeness?

<details><summary>Hint 1</summary>
Solve the scalar linear equation with initial value $p$.
</details>
<details><summary>Hint 2</summary>
The exponential is defined at every real time.
</details>
<details><summary>Full solution</summary>
The formula $\\Phi(t,p)=e^tp$ has time derivative $e^tp$ and initial value $p$, so it is the unique integral curve. It is defined for all $(t,p)\\in\\mathbb R^2$ and hence is the maximal complete flow. Its time maps are dilations, inverse to dilation by $e^{-t}$. The field's support is all of the noncompact line, so compact support is not necessary for completeness.
</details>

### Exercise 8.3 {#smooth-manifolds-flows-ex-3}

For a complete field $X$ and constant $c\\in\\mathbb R$, prove $cX$ is complete and find its flow.

<details><summary>Hint 1</summary>
Replace time by $ct$ in the original curve.
</details>
<details><summary>Hint 2</summary>
Treat $c=0$ without dividing by $c$.
</details>
<details><summary>Full solution</summary>
Set $\\Psi(t,p)=\\Phi(ct,p)$. Its derivative is $cX_{\\Psi(t,p)}$ and its value at zero is $p$, so uniqueness makes it the flow of $cX$. Completeness of $X$ makes this formula available for every real $t$, whether $c$ is positive or negative. For $c=0$ it is the constant curve $p$, again complete. A variable multiplier has no such automatic global conclusion.
</details>

### Exercise 8.4 {#smooth-manifolds-flows-ex-4}

Give an example where multiplying a complete vector field by a smooth function produces an incomplete field.

<details><summary>Hint 1</summary>
Start with translation on the line.
</details>
<details><summary>Hint 2</summary>
Use the quadratic multiplier from the worked escape example.
</details>
<details><summary>Full solution</summary>
The field $\\partial/\\partial x$ has complete flow $p+t$. Multiplying by the smooth function $x^2$ gives $x^2\\partial/\\partial x$, whose nonzero initial values have a finite-time pole as computed above. Thus multiplication by a smooth nonconstant function can change completeness, although the new field remains smooth everywhere on the same manifold. The constant-time-rescaling argument from the previous exercise does not apply to a position-dependent speed.
</details>

### Exercise 8.5 {#smooth-manifolds-flows-ex-5}

For a smooth $f:M\\to\\mathbb R$ and an integral curve $\\gamma$, prove $(f\\circ\\gamma)'(t)=(Xf)(\\gamma(t))$. What follows if $Xf=0$ everywhere?

<details><summary>Hint 1</summary>
Use the intrinsic differential of $f$ on the curve velocity.
</details>
<details><summary>Hint 2</summary>
A differentiable real function with zero derivative on an interval is constant.
</details>
<details><summary>Full solution</summary>
The chain rule gives $(f\\circ\\gamma)'=df_{\\gamma(t)}\\dot\\gamma(t)=df_{\\gamma(t)}X_{\\gamma(t)}=(Xf)(\\gamma(t))$. If $Xf$ vanishes, the one-variable mean-value theorem makes $f\\circ\\gamma$ constant on the curve's interval. Such an $f$ is a first integral of the field. The conclusion is about each connected integral curve, not necessarily a common value on different curves.
</details>

### Exercise 8.6 {#smooth-manifolds-flows-ex-6}

On $\\mathbb R^2$ let $X=-y\\partial_x+x\\partial_y$. Show $x^2+y^2$ is a first integral, including at the origin.

<details><summary>Hint 1</summary>
Differentiate the function in the two coordinate directions.
</details>
<details><summary>Hint 2</summary>
The two resulting products cancel identically.
</details>
<details><summary>Full solution</summary>
We have $X(x^2+y^2)=-y(2x)+x(2y)=0$ at every point. Hence the squared radius is constant along each trajectory. At the origin the field is zero and its curve is constant, consistent with this result. At nonzero points the explicit rotation flow runs around the corresponding circle. No polar chart at the origin is required for the derivative computation.
</details>

### Exercise 8.7 {#smooth-manifolds-flows-ex-7}

Let $X$ be compactly supported and let $p$ lie outside its support. Prove the complete flow fixes $p$ at every time. Does this claim that every point inside the support moves?

<details><summary>Hint 1</summary>
Outside the support the field is zero.
</details>
<details><summary>Hint 2</summary>
The support is the closure of the nonzero set and can include zeroes.
</details>
<details><summary>Full solution</summary>
At $p$ the field vanishes, so the constant all-time curve is its unique maximal integral curve. Thus every time map fixes $p$. A point inside the support may also be a zero of the field, in which case it is fixed too. For example a smooth field can vanish at an interior point while being nonzero arbitrarily nearby. Support describes where nonzero values can accumulate, not the set of moving points exactly.
</details>

### Exercise 8.8 {#smooth-manifolds-flows-ex-8}

For the quadratic field on the line and $t>0$, find the domain and image of its time-$t$ map and verify the inverse formula.

<details><summary>Hint 1</summary>
Use $1-pt>0$ for the domain.
</details>
<details><summary>Hint 2</summary>
Solve $q=p/(1-pt)$ for $p$.
</details>
<details><summary>Full solution</summary>
The domain is $(-\\infty,1/t)$. Solving gives $p=q/(1+tq)$, which requires $q>-1/t$ for the corresponding maximal domain. The time map is strictly increasing with limits $-1/t$ and $+\\infty$ at its two domain ends, so its image is $(-1/t,\\infty)$. The inverse is exactly the time-$-t$ formula on that image. This illustrates a local-flow diffeomorphism between different open subsets, rather than a global diffeomorphism of the whole line.
</details>

### Exercise 8.9 {#smooth-manifolds-flows-ex-9}

Explain why no coordinate chart around a zero of a vector field can make it $\\partial/\\partial x^1$.

<details><summary>Hint 1</summary>
Coordinate differentials are linear isomorphisms.
</details>
<details><summary>Hint 2</summary>
The first coordinate vector is nonzero at every chart point.
</details>
<details><summary>Full solution</summary>
A coordinate change takes the field value at the base point through its invertible differential. It therefore sends zero to zero. The coordinate vector $\\partial/\\partial x^1$ is a nonzero basis vector, so it cannot be the transformed value of a zero field there. This explains the nonvanishing hypothesis in the flow-box theorem. Local existence of a flow holds at zeroes too, but the straightening conclusion does not.
</details>

### Exercise 8.10 {#smooth-manifolds-flows-ex-10}

Show that a diffeomorphism $F:M\\to N$ carries a complete field $X$ to a complete field $Y$ defined by $Y_{F(p)}=dF_pX_p$. Find its flow.

<details><summary>Hint 1</summary>
The differential bundle map and smooth inverse make $Y$ a smooth section.
</details>
<details><summary>Hint 2</summary>
Conjugate each time map of $X$ by $F$.
</details>
<details><summary>Full solution</summary>
The formula defines a unique field because $F$ is bijective, and its local expression is smooth by smoothness of $dF$ and $F^{-1}$. Put $\\Psi_t=F\\circ\\Phi_t\\circ F^{-1}$. Its derivative along time is $dF(X)=Y$ at its current point, and $\\Psi_0$ is identity. Uniqueness makes it the flow of $Y$. It exists for every real time because $\\Phi$ does, so $Y$ is complete. The same conjugation also proves the global flow law and inverse maps directly.
</details>

<a id="section-276-9-summary-and-continuation"></a>
## 9. Summary and continuation {#section-278-9-summary-and-continuation}

Smooth vector fields are tangent sections and derivations of smooth functions. The named Euclidean ODE theorem gives local solutions with smooth initial-value dependence; uniqueness glues them into maximal curves and an open smooth flow domain. Maximal intervals translate along trajectories, proving the local group law and time-map diffeomorphisms. Compactness or compact support supplies uniform existence times and hence completeness. At a nonzero point a flow box straightens the field, while zeroes and global escape require their own analysis.

The next chapter defines the Lie bracket, connects it with local flow commutation, and proves the Frobenius integrability theorem for smooth constant-rank involutive distributions. The flow and straightening results needed for that proof have been established here, with their analytic ODE input kept explicit.

*Source provenance: original Euler L4 exposition, proofs and exercises for Smooth Manifolds. The Euclidean smooth local ODE existence/uniqueness/dependence theorem is a named input, and the earlier bundle, tangent and inverse-function chapters are actual prerequisites. Comparison references are Lee, Introduction to Smooth Manifolds, and Tu, An Introduction to Manifolds. CC BY-SA 4.0. Draft.*
`;export{e as default};