var e=`---
parent_id: book-smooth-manifolds
chapter_id: stokes-theorem
title: "Stokes' Theorem"
level: graduate
license: CC BY-SA 4.0
---

# Stokes' Theorem {#section-1-stokes-theorem}

The exterior derivative and oriented integration were constructed separately. Stokes' theorem connects them: integrating a derivative over a region records the original form on its oriented boundary. Its proof reduces, after localization, to the one-variable Fundamental Theorem of Calculus. The orientation signs and the localization argument are essential parts of that reduction.

This L4 chapter follows [The Exterior Derivative](exterior-derivative.md) and [Orientation and Integration on Manifolds](orientation-integration.md). We extend the earlier smooth-manifold conventions to manifolds with boundary, but not manifolds with corners. All spaces remain finite-dimensional, Hausdorff and second-countable. Forms and coordinate maps are smooth up to the boundary in the sense specified below. The analytic inputs are the Euclidean change-of-variables theorem, Fubini's theorem for compactly supported integrable functions, the fact that a coordinate hyperplane has measure zero, and the ordinary Fundamental Theorem. The global Stokes formula itself is proved here; no triangulation or general surface-classification theorem is used.

<a id="section-5-1-boundary-charts-and-smoothness-up-to-the-edge"></a>
## 1. Boundary charts and smoothness up to the edge {#section-7-1-boundary-charts-and-smoothness-up-to-the-edge}

Write $\\mathbb H^n=\\{x\\in\\mathbb R^n:x^n\\ge0\\}$. A smooth manifold with boundary is a pair $(M,\\partial M)$ with a smooth atlas to relatively open subsets of this half-space, sending the distinguished closed subset $\\partial M$ to the coordinate plane $x^n=0$. Interior charts may have image entirely in $x^n>0$. Coordinate transitions preserve the boundary plane and extend smoothly to open Euclidean neighborhoods; their inverses have the same property. This definition explicitly identifies the boundary set, so no unproved topological recognition theorem is required in the argument below.

Smooth functions and maps are those admitting local smooth extensions in these charts. Any two extensions of the same function have the same derivatives on the half-space: they agree on its interior, so their derivatives agree there, and continuity makes the derivatives agree at the boundary. Consequently tangent vectors, covectors, differentials and exterior derivatives are defined by the previous coordinate formulas and remain independent of extensions. The tangent space at a boundary point has dimension $n$, not $n-1$. The latter is the dimension of the tangent space to the boundary itself.

A transition restricted to the boundary gives a smooth coordinate change on an open subset of $\\mathbb R^{n-1}$. Hence $\\partial M$ is a smooth manifold without boundary. Its inherited Hausdorff and countability properties follow from the ambient ones. In particular this setup has no corners: the boundary of the boundary is empty. A rectangular solid is a useful region for elementary integration, but it is not covered by this smooth-boundary definition at its edges and vertices without a separate extension of the theorem.

The earlier bump and partition constructions also work up to a boundary. In a half-space chart, restrict ordinary smooth Euclidean bumps supported in small ambient balls; their intersections with the half-space are relatively compact chart neighborhoods. The same compact-exhaustion refinement from the partition chapter produces a locally finite family with supports inside assigned chart domains. Summing nonnegative bumps gives a smooth positive function, and dividing each bump by that sum supplies a subordinate smooth partition. Positivity, local finiteness and support control are unchanged. This supplies exactly the localization needed below, including at boundary points.

<a id="section-15-2-outward-first-fixes-the-boundary-sign"></a>
## 2. Outward first fixes the boundary sign {#section-17-2-outward-first-fixes-the-boundary-sign}

An orientation of $M$ is a choice of orientations of its full tangent spaces with locally constant comparison sign against coordinate frames. On a connected chart write that sign as $\\varepsilon=1$ for a positive chart and $\\varepsilon=-1$ for a negative chart. At a boundary point an outward vector is a transverse vector whose last coordinate in a half-space chart is negative. This notion is independent of the chart. Indeed, the last component of a boundary-preserving transition is zero on the boundary, so its tangential derivatives there vanish. Its derivative in the remaining direction is positive: interior points stay in the positive half-space, and invertibility rules out zero. Thus negative normal components stay negative.

Declare a boundary tangent frame positive if placing any outward vector first gives a positive ambient tangent frame. Changing the outward vector changes it by a positive multiple in the transverse quotient plus a tangent vector. The multiple preserves determinant sign, while the tangent addition contributes a linearly dependent determinant term and changes nothing. The choice of outward vector therefore does not affect the orientation. The same argument in positive charts proves that these choices vary smoothly and agree on overlaps.

For a positive half-space chart the outward coordinate vector is $-\\partial_{x^n}$. Moving it from the last position to the first and including its minus sign shows that the ordinary coordinate frame on the boundary has orientation sign $(-1)^n$. Equivalently,

$$\\iota_{-\\partial_{x^n}}(dx^1\\wedge\\cdots\\wedge dx^n)
=(-1)^n dx^1\\wedge\\cdots\\wedge dx^{n-1}.$$

Keeping the final coordinate as the half-space coordinate is part of this formula. In a chart of orientation sign $\\varepsilon$, the boundary coordinate frame has sign $\\varepsilon(-1)^n$. A different convention for which coordinate is normal changes the intermediate expression, though the outward-first definition remains the same. We allow charts of either sign throughout. This matters in dimension one: a half-line chart at the final endpoint of an increasing interval is necessarily negative, since its nonnegative coordinate points inward.

In dimension one the boundary consists of isolated points. We use signed zero-dimensional integration: integrate a function by summing its values with the assigned point signs. Compact support makes this a finite sum. An interval oriented in the increasing direction has a negative initial endpoint and a positive final endpoint. These signs are the dimension-one outward-first convention; they ensure that Stokes reduces to the usual endpoint difference. This explicit convention avoids interpreting a zero-dimensional boundary integral as an unsigned count.

<a id="section-30-3-integration-in-a-boundary-chart"></a>
## 3. Integration in a boundary chart {#section-32-3-integration-in-a-boundary-chart}

A compactly supported top form in a half-space chart of sign $\\varepsilon$ is integrated by multiplying its scalar coefficient integral over the half-space coordinate domain by $\\varepsilon$. The coefficient may be nonzero on the boundary plane. It need not have a smooth zero extension across that plane. This causes no problem for its ordinary integral: the plane has measure zero, and on the half-space the coefficient is smooth with compact support. Extension by zero outside the coordinate domain within the half-space is smooth because its support lies strictly within that relative domain.

Coordinate independence follows from the Euclidean change-of-variables theorem on the chart interiors. The omitted boundary plane has measure zero in both charts. Smoothness and compact support control all coefficients and Jacobians in question, so adding back that null set changes neither integral. A subordinate partition then constructs the global integral, and the same finite double-partition proof as in the previous chapter establishes independence of choices. Integrating on the boundary uses its own induced orientation and one lower dimension.

Restriction of a compactly supported form to the boundary has compact support there. Its support is contained in the intersection of the original compact support with the closed boundary subset. That intersection is compact. Exterior differentiation also preserves compact support in the sense that the derivative's support is contained in the form's support: on every open set where a form is zero its coefficient derivatives are zero as well. Thus both integrals in the theorem below are finite within this construction.

<a id="section-38-4-full-proof-of-stokes-theorem"></a>
## 4. Full proof of Stokes' theorem {#section-40-4-full-proof-of-stokes-theorem}

**Theorem 13.1 (Compactly supported Stokes).** Let $M$ be an oriented smooth $n$-manifold with boundary, $n\\ge1$, and let $\\omega$ be a smooth compactly supported $(n-1)$-form. With inclusion $j:\\partial M\\hookrightarrow M$ and outward-first boundary orientation,

$$\\int_Md\\omega=\\int_{\\partial M}j^*\\omega.$$

*Proof, local calculation.* First suppose the support lies in one chart of constant orientation sign $\\varepsilon$. We first compute raw coordinate integrals, before multiplying by their orientation signs. In its coordinates write

$$\\omega=\\sum_{i=1}^n(-1)^{i-1}f_i\\,
 dx^1\\wedge\\cdots\\widehat{dx^i}\\cdots\\wedge dx^n.$$

Then

$$d\\omega=\\left(\\sum_i\\partial_i f_i\\right)dx^1\\wedge\\cdots\\wedge dx^n.$$

Extend each coefficient by zero outside the chart domain within the half-space. It remains smooth there and compactly supported. For every index $i<n$, integrate first in the $x^i$ variable over the whole real line. The Fundamental Theorem gives zero, because the coefficient vanishes for sufficiently large positive and negative values. Fubini permits this order of integration. For the last index, the interval is instead the nonnegative half-line. The same theorem gives

$$\\int_0^\\infty\\partial_n f_n(x',t)\\,dt=-f_n(x',0).$$

Thus the raw left-hand integral is minus the ordinary integral of the boundary value of $f_n$. The oriented left-hand integral is $\\varepsilon$ times this result. Pullback to the boundary kills every summand of $\\omega$ containing $dx^n$, leaving only $(-1)^{n-1}f_n(x',0)dx^1\\wedge\\cdots\\wedge dx^{n-1}$. Its boundary coordinate orientation sign is $\\varepsilon(-1)^n$. Multiplying the two signs gives $-\\varepsilon$, exactly the oriented left-hand result. For dimension one this gives a negative initial endpoint in a positive half-line chart and a positive final endpoint in a negative half-line chart.

If the chart is interior, all coordinate variables range over full lines after zero extension. Every term integrates to zero by the first calculation, and the boundary contribution is absent. This proves the formula for every form supported in a single chart, whether that chart meets the boundary or not.

*Proof, global localization.* Choose a chart cover of constant-sign connected charts and a subordinate smooth partition $\\rho_a$. Only finitely many supports meet the compact support of $\\omega$. The signed local formula applies to each compactly supported form $\\rho_a\\omega$. Summing the left sides gives

$$\\sum_a d(\\rho_a\\omega)
=\\left(\\sum_a d\\rho_a\\right)\\wedge\\omega+
 \\left(\\sum_a\\rho_a\\right)d\\omega=d\\omega.$$

The first sum of differentials is zero because the partition sums to the constant function one. On the boundary the restrictions of the same partition sum to one as well, so the right sides sum to the integral of $j^*\\omega$. Linearity and the finiteness of the contributing sums establish the global identity. This completes the proof. ∎

If $M$ is compact, every smooth form has compact support, so no additional support condition is needed. If $M$ has empty boundary, the formula states that the integral of an exact compactly supported top form is zero, provided its displayed primitive also has compact support. On a noncompact manifold it is not enough for the derivative alone to be integrable. A primitive can carry nonzero limiting values at infinity, which are not part of the boundary of the manifold in this theorem.

<a id="section-71-5-consequences-and-the-distinction-between-support-cond"></a>
## 5. Consequences and the distinction between support conditions {#section-73-5-consequences-and-the-distinction-between-support-cond}

A compact nonempty oriented boundaryless manifold has no exact positive volume form. If such a form were $d\\eta$, its integral would be zero by Stokes, while positivity makes its integral strictly positive by the preceding chapter. This proves a global failure of exactness without contradicting the local Poincaré lemma. Local primitives exist; a single global primitive does not.

Here is a related homotopy consequence. Let $S$ be a compact oriented manifold without boundary and let $F:[0,1]\\times S\\to N$ be a smooth homotopy. Orient the cylinder with the parameter direction first. Its two boundary components are the final copy of $S$ with positive orientation and the initial copy with negative orientation, directly from outward first. If $\\eta$ is a closed form of degree equal to the dimension of $S$, naturality and Stokes give

$$\\int_SF_1^*\\eta-\\int_SF_0^*\\eta
=\\int_{[0,1]\\times S}d(F^*\\eta)=0.$$

No corners occur because $S$ itself has no boundary. The conclusion concerns the integral pairing of a closed form, not equality of the pulled-back representative forms. The homotopy formula from the previous chapter supplies the more precise exact difference of representatives.

The compact-support requirement on a primitive should be distinguished from ordinary exactness. On the real line, a compactly supported one-form can be exact with a primitive that approaches different constants at opposite ends. Its integral need not vanish. Stokes gives zero on a boundaryless noncompact manifold only when the form to which it is applied, here the degree-zero primitive, has the required compact support. Later compactly supported de Rham cohomology keeps exactly this distinction visible.

<a id="section-84-6-three-worked-examples"></a>
## 6. Three worked examples {#section-86-6-three-worked-examples}

<a id="section-86-worked-example-13-2-the-fundamental-theorem-with-both-e"></a>
### Worked example 13.2 — The Fundamental Theorem with both endpoint signs {#section-88-worked-example-13-2-the-fundamental-theorem-with-both-e}

For an increasing oriented compact interval and smooth function $f$, the theorem is

$$\\int_a^b f'(t)\\,dt=f(b)-f(a).$$

The boundary is not two unsigned points: its initial endpoint has negative sign. For $f(t)=t^2$ on the interval from one to three, the integral is eight, agreeing with nine minus one. Reversing the interval orientation negates its interior integral and reverses both boundary signs, so both sides become minus eight. The derivative function has not changed; the orientation has. This simple case already contains the sign mechanism of the higher-dimensional proof.

<a id="section-94-worked-example-13-3-flux-through-the-unit-sphere"></a>
### Worked example 13.3 — Flux through the unit sphere {#section-96-worked-example-13-3-flux-through-the-unit-sphere}

In three-dimensional space use $X=x\\partial_x+y\\partial_y+z\\partial_z$ and ambient volume $\\mu=dx\\wedge dy\\wedge dz$. Its contraction is

$$\\omega=x\\,dy\\wedge dz-y\\,dx\\wedge dz+z\\,dx\\wedge dy,$$

and differentiating gives $d\\omega=3\\mu$. On the compact unit ball Stokes says that the outward sphere integral is three times the ball's volume. Fubini computes that volume by disk slices: integrating $\\pi(1-z^2)$ from minus one to one gives $4\\pi/3$. Hence the sphere integral is $4\\pi$. At every sphere point the field is the outward unit normal, so the restricted form is precisely the positive area form defined by contraction. This calculation is the divergence theorem for this field, obtained from the proved general formula. The same polynomial field on a noncompact region would require a support or convergence argument before using an unbounded-domain integral.

<a id="section-102-worked-example-13-4-an-annulus-accounts-for-its-inner-b"></a>
### Worked example 13.4 — An annulus accounts for its inner boundary {#section-104-worked-example-13-4-an-annulus-accounts-for-its-inner-b}

On the compact plane annulus with radii $0<r<R$, use the angular one-form $\\alpha=(-y\\,dx+x\\,dy)/(x^2+y^2)$. It is smooth on a neighborhood of the annulus and closed, as computed in the previous chapter. The standard plane orientation induces counterclockwise orientation on the outer circle and clockwise orientation on the inner circle. On either circle a counterclockwise parametrization pulls the form back to $dt$, giving period $2\\pi$. Therefore the total boundary integral is $2\\pi-2\\pi=0$, agreeing with the zero interior derivative.

Filling the hole and applying the theorem to a disk would be invalid: the form is undefined at its center. Omitting the inner boundary would be equally invalid: it changes the oriented boundary of the specified manifold. The nonzero period on one loop and the zero sum over both boundary components are compatible statements with different domains.

<a id="section-108-exercises"></a>
## Exercises {#section-110-exercises}

### Exercise 13.1 {#smooth-stokes-theorem-ex-1}

For a positive chart with half-space coordinate last, derive the boundary coordinate orientation sign in dimension two and in dimension three.

<details><summary>Hint 1</summary>
Place the outward vector, the negative last coordinate vector, before the tangential coordinate vectors.
</details>
<details><summary>Hint 2</summary>
Count the swaps which move the last vector to the first position.
</details>
<details><summary>Full solution</summary>
There are $n-1$ swaps and one additional minus sign, giving $(-1)^n$. Thus the ordinary boundary coordinate is positive in dimension two and negative in dimension three. These are statements for the particular last-coordinate half-space convention. The invariant rule is always outward first, so moving the normal coordinate to a different position requires recomputing the displayed coordinate sign rather than keeping it by habit.
</details>

### Exercise 13.2 {#smooth-stokes-theorem-ex-2}

Use Stokes to integrate $x\\,dy$ around the positively oriented boundary of the unit disk.

<details><summary>Hint 1</summary>
Differentiate the one-form on the whole disk.
</details>
<details><summary>Hint 2</summary>
The derivative is the standard positive area form.
</details>
<details><summary>Full solution</summary>
The derivative is $dx\\wedge dy$. The disk is compact with smooth boundary and the form is smooth on a neighborhood of it, so Stokes makes the boundary integral equal to its area, namely $\\pi$. A direct counterclockwise parametrization gives $\\cos^2t\\,dt$, whose integral over one turn is the same. Reversing the boundary orientation alone would give minus this value and would no longer be the orientation induced by the unchanged disk orientation.
</details>

### Exercise 13.3 {#smooth-stokes-theorem-ex-3}

On the real line let $f(t)=\\arctan t$. Compute the integral of $df$ and explain why its nonzero value does not contradict boundaryless Stokes.

<details><summary>Hint 1</summary>
Integrate over a symmetric finite interval first.
</details>
<details><summary>Hint 2</summary>
The primitive does not have compact support.
</details>
<details><summary>Full solution</summary>
The derivative is $dt/(1+t^2)$, and the integral over a symmetric interval tends to $\\pi$. The real line has empty manifold boundary, but the zero-form to which Stokes would be applied is not compactly supported. Thus the theorem's support hypothesis fails. Integrability of its derivative alone does not repair that failure: the two limiting potential values differ. Those limits are not boundary points of the real-line manifold.
</details>

### Exercise 13.4 {#smooth-stokes-theorem-ex-4}

Prove that the positive area form of the standard oriented two-sphere cannot be the derivative of a globally defined smooth one-form on that sphere.

<details><summary>Hint 1</summary>
The sphere is compact and has no boundary as a manifold in its own right.
</details>
<details><summary>Hint 2</summary>
Its positive area integral was computed in Worked example 13.3.
</details>
<details><summary>Full solution</summary>
If it were the derivative of a global one-form, Stokes applied to the sphere would give integral zero. Its integral is instead $4\\pi$. Therefore no such primitive exists. The fact that the sphere is the boundary of a different, three-dimensional manifold does not make its own boundary nonempty. The two uses of the word boundary refer to different manifolds and dimensions.
</details>

### Exercise 13.5 {#smooth-stokes-theorem-ex-5}

A smooth one-form on a disk is closed. Show that its integral around the induced boundary is zero. Deduce that the angular one-form on the punctured plane has no smooth closed extension to the filled disk.

<details><summary>Hint 1</summary>
The derivative term in Stokes is zero under the closedness hypothesis.
</details>
<details><summary>Hint 2</summary>
The angular form's boundary period is nonzero.
</details>
<details><summary>Full solution</summary>
Stokes equates the boundary integral to the integral of the zero two-form, hence to zero. A proposed closed extension of the angular form would agree on the boundary and therefore have boundary integral $2\\pi$, a contradiction. The conclusion here concerns a closed extension. In fact no smooth extension agreeing with that form on the whole punctured disk exists because its coefficients are unbounded near the origin; that stronger analytic obstruction is separate from the Stokes argument requested.
</details>

### Exercise 13.6 {#smooth-stokes-theorem-ex-6}

For a smooth field $X=(P,Q,R)$ in three-dimensional Euclidean space compute $d(\\iota_X\\mu)$ and state the resulting divergence formula on a compact smooth region.

<details><summary>Hint 1</summary>
Expand contraction in the same ordered coordinate basis as the sphere example.
</details>
<details><summary>Hint 2</summary>
Only the derivative in the omitted coordinate survives each summand.
</details>
<details><summary>Full solution</summary>
Contraction is $P\\,dy\\wedge dz-Q\\,dx\\wedge dz+R\\,dx\\wedge dy$. Differentiation gives $(\\partial_xP+\\partial_yQ+\\partial_zR)\\mu$. Stokes therefore equates the divergence integral over a compact region with smooth boundary to the boundary integral of this contracted form. On the outward-oriented boundary that form measures the normal flux, since tangent evaluation discards the tangential part of the field. Smoothness up to the boundary and the specified outward orientation are part of the formula.
</details>

### Exercise 13.7 {#smooth-stokes-theorem-ex-7}

Explain why the terms $d\\rho_a\\wedge\\omega$ cannot simply be omitted when applying the local proof to partition pieces, and prove that their total is zero.

<details><summary>Hint 1</summary>
The exterior derivative satisfies a product rule, not coefficientwise linearity over functions.
</details>
<details><summary>Hint 2</summary>
Differentiate the identity that the partition sums to one.
</details>
<details><summary>Full solution</summary>
For each piece the derivative is $d\\rho_a\\wedge\\omega+\\rho_a d\\omega$, and the first summand can be nonzero. Local finiteness allows differentiation of the partition sum in a neighborhood of every point. Its sum is the derivative of the constant one, hence zero. Wedging with the fixed form makes the total extra contribution zero. Compact support then reduces the integrated contributions to a finite sum. Cancellation is a global partition identity, not a separate vanishing assertion for each piece.
</details>

### Exercise 13.8 {#smooth-stokes-theorem-ex-8}

Give the two boundary signs of the cylinder $[0,1]\\times S$ when its orientation puts the parameter direction first. Assume $S$ is oriented and boundaryless.

<details><summary>Hint 1</summary>
At the final endpoint the outward vector points in the positive parameter direction.
</details>
<details><summary>Hint 2</summary>
At the initial endpoint it points in the negative direction.
</details>
<details><summary>Full solution</summary>
At time one the outward vector followed by a positive frame of the slice agrees with the chosen cylinder frame, giving the original orientation on $S$. At time zero that same list differs by one minus sign, giving the opposite slice orientation. Thus the boundary integral is the final slice integral minus the initial one. Boundarylessness of $S$ excludes side components and corners from this cylinder construction.
</details>

### Exercise 13.9 {#smooth-stokes-theorem-ex-9}

Let two smooth closed forms of degree $n-1$ on a compact oriented $n$-manifold with boundary have the same restriction to the boundary. Does Stokes force the forms to be equal? Explain precisely what the theorem says.

<details><summary>Hint 1</summary>
Apply Stokes to their difference and inspect both sides.
</details>
<details><summary>Hint 2</summary>
A closed form may vanish near the boundary without vanishing everywhere.
</details>
<details><summary>Full solution</summary>
The difference is closed and has zero boundary restriction, so Stokes reads zero equals zero. It gives no pointwise uniqueness. For a concrete counterexample in dimension two, choose a nonconstant smooth function supported inside a disk. Its differential is a nonzero closed one-form vanishing near the boundary. Comparing it with the zero form satisfies the hypotheses while the forms differ. Stokes controls an integral identity; it is not a uniqueness theorem for arbitrary differential forms.
</details>

### Exercise 13.10 {#smooth-stokes-theorem-ex-10}

On the real line construct a compactly supported one-form with nonzero integral. Prove that it has an ordinary smooth primitive but no compactly supported smooth primitive.

<details><summary>Hint 1</summary>
Choose a nonnegative bump with integral one.
</details>
<details><summary>Hint 2</summary>
Integrate the bump from negative infinity and inspect the resulting constant tails.
</details>
<details><summary>Full solution</summary>
Let $h$ be a smooth compactly supported function with integral one and take $h(t)dt$. The function $f(t)=\\int_{-\\infty}^t h(s)ds$ is smooth and differentiates to the form. It equals zero far to the left and one far to the right, so it is not compactly supported. Every other primitive differs by a constant on the connected real line. No constant can make both tails zero. Alternatively a compactly supported primitive would force zero integral by boundaryless Stokes, contradicting the chosen normalization.
</details>

<a id="section-250-sources-and-provenance"></a>
## Sources and provenance {#section-252-sources-and-provenance}

New L4 proof expanding the Stokes scope of [Quarto Calculus, chapter 45](../../../../textbooks/calculus/chapters/45-calculus-manifolds.qmd) and [Quarto Topology, chapter 18](../../../../textbooks/topology/chapters/18-differential-forms-derham.qmd), whose existing sources are retained. The proof localizes to a half-space with its last coordinate normal and fixes every boundary sign under the outward-first convention. Comparison references are Spivak, *Calculus on Manifolds*, the integration and Stokes chapter; Lee, *Introduction to Smooth Manifolds*, manifolds with boundary and Stokes sections; and Tu, *An Introduction to Manifolds*, integration and Stokes sections. Euclidean analytic inputs are identified above.

<a id="section-254-summary"></a>
## Summary {#section-256-summary}

A smooth boundary has its own outward-first orientation. The half-space calculation combines the Fundamental Theorem in the normal coordinate with zero integrals of tangential derivatives. A subordinate partition of unity makes this local identity global, with its extra derivative terms cancelling exactly. Compact support controls both finiteness and the absence of contributions at infinity. The theorem explains endpoint differences, flux and homotopy-invariant integrals, while preserving the distinction between local exactness, global exactness and compactly supported primitives.
`;export{e as default};