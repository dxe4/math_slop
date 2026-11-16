
# Orientation and Integration on Manifolds {#section-1-orientation-and-integration-on-manifolds}

A top-degree form already contains a signed Jacobian in its coordinate rule. To integrate it consistently, the coordinate charts must agree about which ordered tangent frames count as positive. Orientation supplies that agreement; a partition of unity then reduces a global integral to ordinary integrals of functions.

This L4 chapter follows [Covectors and Differential Forms](covectors-differential-forms.md), [The Exterior Derivative](exterior-derivative.md) and the [partition-of-unity construction](smooth-maps-partitions-unity.md). Manifolds are smooth, real, finite-dimensional, Hausdorff, second-countable and without boundary, and initially have positive dimension $n$. Forms to be integrated have compact support. We use the ordinary Euclidean change-of-variables theorem for a smooth diffeomorphism, with its absolute Jacobian, and ordinary linearity and positivity of the Euclidean integral. Those analytic theorems are named inputs; the chart and partition independence proved here are the additional manifold argument. Stokes' theorem and manifolds with boundary enter in the next chapter.

<a id="section-5-1-a-consistent-choice-of-positive-frames"></a>
## 1. A consistent choice of positive frames {#section-7-1-a-consistent-choice-of-positive-frames}

On a real vector space of positive dimension, declare two ordered bases equivalent when their change-of-basis determinant is positive. The determinant multiplication law makes this an equivalence relation. There are exactly two classes: changing the sign of one basis vector interchanges them, and every invertible determinant is either positive or negative. An orientation is a choice of one class as positive.

A manifold orientation is a choice of orientation in each tangent space which is locally represented by coordinate frames. Thus around every point there must be a chart whose coordinate tangent frame is positive at every point of that chart. Such charts are called positively oriented. Their transition Jacobians have positive determinant, since they compare two positive frames. Conversely an atlas whose transition Jacobians are positive defines a manifold orientation by using its coordinate frames. Any two charts in it induce the same choice on overlaps, so this prescription is well-defined.

The sign of a nonzero continuous determinant is locally constant. Therefore it suffices that the transition maps preserve orientation on each connected overlap component. An overlap need not itself be connected, and specifying a sign on one component says nothing about another. This is a frequent place where a drawing of two large coordinate patches conceals a real consistency condition.

**Proposition 12.1 (An orientable connected manifold has exactly two orientations).**

*Proof.* Compare two orientations at each point by a sign. In a common small chart both are represented by smoothly varying coordinate frames, so their comparison determinant is continuous and nonzero. Its sign is locally constant. On a connected manifold it must be constant: its two possible level sets are disjoint open sets. Hence the orientations either agree everywhere or disagree everywhere. Reversing one chosen orientation produces the other, so both possibilities exist. ∎

On a disconnected manifold the choice can be reversed independently on each connected component. Connected components of a manifold are open, since coordinate balls are connected and lie inside components. Consequently independently chosen component orientations still satisfy the local condition.

<a id="section-19-2-the-top-form-criterion-proved-using-partitions"></a>
## 2. The top-form criterion, proved using partitions {#section-21-2-the-top-form-criterion-proved-using-partitions}

A volume form here means a nowhere-zero smooth top-degree form. It is signed and requires no Riemannian metric. If $\mu$ is such a form, declare an ordered tangent basis positive when its evaluation under $\mu$ is positive. In coordinates the coefficient of $\mu$ is smooth and nonzero. On a sufficiently small connected chart it has constant sign; reflect one coordinate if necessary to make it positive. This proves that the pointwise choices form a manifold orientation.

Conversely, suppose the manifold is oriented. Choose a locally finite positively oriented chart cover and a smooth partition of unity $\rho_i$ subordinate to it. In each chart let $\mu_i=dx_i^1\wedge\cdots\wedge dx_i^n$. Extend $\rho_i\mu_i$ by zero outside that chart and sum:

$$\mu=\sum_i\rho_i\mu_i.$$

The extension is smooth because the support of each subordinate function lies within its chart domain: near every point outside that support the term is identically zero. Local finiteness makes the sum smooth. At a point, evaluate it on any positive tangent basis. Each contributing chart form has positive value on that basis, each weight is nonnegative and the weights sum to one. The result is strictly positive. Thus the sum never vanishes and induces exactly the chosen orientation. This proves the criterion without assuming a globally available coordinate form.

Any two volume forms inducing the same orientation differ by a positive smooth function. Pointwise, the top exterior power is one-dimensional, so one is a nonzero scalar multiple of the other. Taking the ratio of their nonvanishing coordinate coefficients proves smoothness, and the shared positivity proves that the scalar is positive. Volume forms with opposite orientations have a negative ratio on each component where their orientations disagree.

Orientability is weaker than parallelizability. A global tangent frame produces a dual top form and hence an orientation, but the top-form construction above does not choose individual tangent vectors. It only chooses their alternating top-degree measurement. No theorem about existence of global sphere frames has been assumed in making this distinction.

<a id="section-33-3-integrating-a-form-supported-in-one-chart"></a>
## 3. Integrating a form supported in one chart {#section-35-3-integrating-a-form-supported-in-one-chart}

Let $\omega$ be a smooth top form with compact support contained in a positively oriented chart $x:U\to V\subseteq\mathbb R^n$. Write

$$(x^{-1})^*\omega=a(x)\,dx^1\wedge\cdots\wedge dx^n.$$

Define its integral to be the ordinary integral of $a$ over $V$, or equivalently the integral of its extension by zero over all Euclidean space. The coefficient has compact support inside $V$. Extension by zero therefore causes no boundary discontinuity, and the usual integral is finite. A coordinate domain can be unbounded; compact support, rather than boundedness of the domain, supplies finiteness.

Suppose a second positive chart $y$ also contains the support. Restrict both charts to their intersection and write $h=y\circ x^{-1}$. The top-form transformation rule gives $a_x=(a_y\circ h)\det Dh$. The determinant is positive, so it equals its absolute value. The Euclidean change-of-variables theorem then makes the two integrals equal. Extending coefficients by zero outside the intersection does not alter either integral, since the entire support lies within it. This proves chart independence for a compactly supported form which fits into either of two charts.

If a chart is negatively oriented, its raw coefficient integral is the negative of the integral defined by a positive chart. Reflecting its first coordinate proves this from the same transformation rule. In a negatively oriented chart one must therefore multiply the coefficient integral by minus one. The absolute Jacobian in the analytic substitution theorem and the signed Jacobian in a differential form have different jobs; silently replacing either by the other loses the orientation information.

<a id="section-45-4-assemble-the-global-integral"></a>
## 4. Assemble the global integral {#section-47-4-assemble-the-global-integral}

For a compactly supported top form choose a locally finite positive atlas and a subordinate smooth partition of unity. Define

$$\int_M\omega=\sum_i\int_{U_i}\rho_i\omega.$$

Each term has compact support in its chart: it is contained in the intersection of the form's compact support with the closed support of the subordinate function. Only finitely many partition supports meet that compact set. To see this last fact, cover the compact set by neighborhoods each meeting finitely many supports, select a finite subcover and take the finite union of their finite index sets. Hence the displayed sum is genuinely finite, even on a noncompact manifold.

**Theorem 12.2 (Independence of choices).** The integral is independent of the positive atlas and the subordinate partition.

*Proof.* Take a second such choice $\sigma_j,V_j$. For every first term, insert the equality $\sum_j\sigma_j=1$. Linearity in its chart splits the integral into the finitely many integrals of $\rho_i\sigma_j\omega$. Each product term has compact support in the overlap $U_i\cap V_j$, so the chart-independence argument allows it to be computed in either chart. Reorder the finite double sum and sum first over $i$. The equality $\sum_i\rho_i=1$ then gives the integral constructed from the second choice. Every reordering is finite near the compact support; no convergence theorem for an infinite series of signed integrals is being presumed. ∎

This proof also shows that a form supported in one chart has the earlier chart integral: compare any construction to a partition which sums to one and compute all its pieces in that single chart. Thus the global definition extends rather than replaces the local one. Linearity follows by choosing one partition for the union of two compact supports. Reversing the orientation negates every chart integral, so it negates the global integral.

If a top form is nonnegative on positive frames, its integral is nonnegative. If it is strictly positive at some point, continuity makes its coefficient positive on a small coordinate ball. Choose a nonnegative compactly supported bump there with value at most one and nonzero near that point. Splitting the form into this positive piece and the remaining nonnegative piece shows that its integral is strictly positive. For the volume form itself this argument applies directly on a compact nonempty oriented manifold. On a noncompact manifold the volume form need not have compact support, and no claim of a finite total volume follows.

<a id="section-61-5-change-of-variables-for-diffeomorphisms"></a>
## 5. Change of variables for diffeomorphisms {#section-63-5-change-of-variables-for-diffeomorphisms}

Let $F:M\to N$ be a diffeomorphism between oriented manifolds of the same positive dimension. Suppose first that it preserves orientation. For a compactly supported top form on $N$, pull back a positive chart partition along $F$. Its functions still sum to one and their supports stay locally finite. The preimage of the form's support is compact because $F^{-1}$ is continuous. In the corresponding pulled-back charts the coefficient integral is unchanged. Summing proves

$$\int_MF^*\omega=\int_N\omega.$$

If $F$ reverses orientation everywhere, the pulled-back chart frames are negative, so each term acquires a minus sign. The resulting integral is the negative of the target integral. On connected manifolds a diffeomorphism either preserves or reverses everywhere, by continuity of the determinant sign. For disconnected manifolds its sign can differ among components, and the formula must be applied componentwise. A single global sign is then not justified.

An arbitrary smooth map cannot be substituted into this theorem. It may collapse dimension, cover the target several times or have critical points. Pullback of forms still exists, but the equality of integrals requires the hypotheses just proved or another theorem with additional multiplicity data. In particular a covering of several sheets does not become a diffeomorphism because its differential is invertible at each point.

<a id="section-71-6-product-and-hypersurface-orientations"></a>
## 6. Product and hypersurface orientations {#section-73-6-product-and-hypersurface-orientations}

For oriented manifolds $M,N$, orient the product by placing the positive basis of the first factor before that of the second. Swapping factors of dimensions $m,n$ introduces $mn$ vector exchanges and therefore orientation sign $(-1)^{mn}$. This sign is already present in the exterior algebra; it is not an extra convention chosen independently during integration.

A regular hypersurface in oriented Euclidean space has a useful orientation whenever a smooth unit normal field $\nu$ has been chosen. A tangent frame is positive when the ambient frame obtained by placing $\nu$ first is positive. Equivalently the restriction of $\iota_\nu(dx^1\wedge\cdots\wedge dx^{n+1})$ is a positive volume form on the hypersurface. It never vanishes because a unit normal together with a tangent basis is an ambient basis. Reversing the normal reverses the induced orientation. For a regular level set the normalized gradient supplies a normal, but its existence is a hypothesis about that description, not a guarantee for every hypersurface in every ambient manifold.

For the unit sphere, the position vector is a smooth outward unit normal. The construction therefore orients every positive-dimensional sphere directly, without needing a global tangent frame. The boundary orientation in the next chapter will use this same outward-first rule, making signs consistent between a sphere as a hypersurface and as the boundary of a ball.

<a id="section-79-7-three-worked-examples"></a>
## 7. Three worked examples {#section-81-7-three-worked-examples}

<a id="section-81-worked-example-12-3-a-circle-integral-from-charts"></a>
### Worked example 12.3 — A circle integral from charts {#section-83-worked-example-12-3-a-circle-integral-from-charts}

Give the unit circle the counterclockwise orientation and restrict $\alpha=-y\,dx+x\,dy$ to it. On the parametrization $c(t)=(\cos t,\sin t)$ the pullback is $dt$. Split the full parameter interval into finitely many subintervals whose image arcs lie in angle charts. A positive chart partition on the circle, pulled back to each arc, makes the chart integrals equal to the ordinary one-variable integrals on those subintervals. Summing the weights gives one, while adjacent subdivision endpoints have no effect on an integral. Thus the globally defined chart integral is $2\pi$.

No single angle chart covered the circle, and the parametrization with identified endpoints was not a global coordinate chart. The finite subdivision and partition argument is what connects the convenient full-circle parameter calculation to the actual manifold definition. Reversing orientation changes the result to minus $2\pi$, although the underlying point set and the form have not changed.

<a id="section-87-worked-example-12-4-the-m-bius-strip-s-obstruction-is-a"></a>
### Worked example 12.4 — The Möbius strip's obstruction is a sign equation {#section-89-worked-example-12-4-the-m-bius-strip-s-obstruction-is-a}

Use the open Möbius strip obtained from the real strip with transverse coordinate $s\in(-1,1)$ by identifying $(t,s)$ with $(t+1,-s)$. Its local quotient charts are smooth, as in the earlier bundle construction. If it admitted a volume form, its pullback to the strip would be $a(t,s)\,dt\wedge ds$ with smooth nowhere-zero coefficient. Invariance under the identifying map forces

$$a(t+1,-s)=-a(t,s).$$

On the center line the endpoint values at any two parameters one apart therefore have opposite signs. The Intermediate Value Theorem forces a zero between them, contradicting the nonvanishing condition. Hence the open Möbius strip is nonorientable. The argument uses a genuine global compatibility equation; a locally nonzero area form on every rectangular chart cannot evade it. The absence of boundary in this open model also shows that the obstruction has nothing to do with a boundary edge.

<a id="section-95-worked-example-12-5-a-reflected-chart-and-a-compactly-s"></a>
### Worked example 12.5 — A reflected chart and a compactly supported form {#section-97-worked-example-12-5-a-reflected-chart-and-a-compactly-s}

On the standard oriented plane choose a nonnegative smooth compactly supported function $h$ on the real line whose integral is one. Such a function is obtained by normalizing a positive bump by its positive finite integral. Let $\omega=h(x)h(y)\,dx\wedge dy$. Ordinary iterated integration gives total integral one.

Now use coordinates $u=-x,v=y$. The coefficient becomes $-h(-u)h(v)$, whose raw Euclidean integral is minus one. This chart is negatively oriented, so the manifold integral is minus that raw result, again one. Alternatively use the orientation-preserving coordinates $u=-x,v=-y$. Their coefficient is $h(-u)h(-v)$ and the raw integral is already one. The two calculations isolate the orientation sign from the ordinary absolute-Jacobian substitution theorem. Reversing the manifold's orientation would make its integral minus one in either legitimate calculation.

<a id="section-101-exercises"></a>
## Exercises {#section-103-exercises}

### Exercise 12.1 {#smooth-orientation-integration-ex-1}

Prove that a global smooth tangent frame orients a manifold. Does the top-form criterion construct such a frame in return?

<details><summary>Hint 1</summary>
Take the dual frame and wedge its covectors in the prescribed order.
</details>
<details><summary>Hint 2</summary>
Compare how much information a single alternating top measurement contains with an ordered list of vectors.
</details>
<details><summary>Full solution</summary>
The dual covectors are smooth in local trivializations because their coefficient matrices are inverses of smooth invertible frame matrices. Their wedge evaluates to one on the frame and never vanishes, so it defines an orientation. The converse proof of the top-form criterion constructs only a nonzero section of the top exterior power. It supplies no individual frame vectors or a tangent trivialization. Therefore the argument does not establish the converse implication, and no global-frame conclusion may be inferred from it.
</details>

### Exercise 12.2 {#smooth-orientation-integration-ex-2}

Let two positive volume forms be $\mu,\nu$. Prove that every convex combination with constant weights is again positive. Explain why this differs from averaging arbitrary chart forms without controlling their signs.

<details><summary>Hint 1</summary>
Write one volume form as a positive function times the other.
</details>
<details><summary>Hint 2</summary>
Evaluate on a positive tangent basis.
</details>
<details><summary>Full solution</summary>
Write $\nu=f\mu$ with smooth positive $f$. For a constant $t\in[0,1]$, the combination is $((1-t)+tf)\mu$, whose coefficient is strictly positive. It is therefore a positive volume form. Uncontrolled chart forms may induce opposite orientations and cancel, even if each is individually nonzero. The partition construction avoids that defect by using positive charts and nonnegative weights throughout.
</details>

### Exercise 12.3 {#smooth-orientation-integration-ex-3}

Prove that a compact set meets only finitely many supports in a locally finite family. Give a counterexample when local finiteness is dropped.

<details><summary>Hint 1</summary>
Cover the compact set by neighborhoods witnessing local finiteness.
</details>
<details><summary>Hint 2</summary>
Use a finite subcover of neighborhoods which each meet only finitely many supports.
</details>
<details><summary>Full solution</summary>
For every point of the compact set choose a neighborhood meeting only finitely many family members. Finitely many such neighborhoods cover the set. Any member meeting the set meets one of these neighborhoods, so its index lies in their finite union of finite index lists. Thus the requested situation is impossible. Compactness alone would not suffice without local finiteness: all intervals centered at zero of reciprocal integer radius meet the compact singleton zero. That family fails local finiteness at zero.
</details>

### Exercise 12.4 {#smooth-orientation-integration-ex-4}

For an oriented connected manifold, show that a compactly supported top form which is nonnegative everywhere and positive somewhere has strictly positive integral.

<details><summary>Hint 1</summary>
Choose a positive chart near a point of strict positivity.
</details>
<details><summary>Hint 2</summary>
Use a nonnegative bump supported inside that chart and bounded by one.
</details>
<details><summary>Full solution</summary>
Continuity gives a small coordinate ball where the coefficient is positive. Choose a nonzero nonnegative bump there with value at most one. The product of the form with that bump has a positive Euclidean integral, since its coefficient is positive on a smaller open ball. The residual form is nonnegative and compactly supported, hence has nonnegative integral by the chart definition. Linearity makes the original integral strictly positive. Connectedness is unnecessary for this proof; positivity on one component already suffices.
</details>

### Exercise 12.5 {#smooth-orientation-integration-ex-5}

A self-diffeomorphism of a connected compact oriented manifold reverses orientation. Prove that it cannot preserve a positive volume form by pullback.

<details><summary>Hint 1</summary>
Use either evaluation on a positive frame or the change-of-variables theorem.
</details>
<details><summary>Hint 2</summary>
A positive volume form has a strictly positive integral on this compact nonempty manifold.
</details>
<details><summary>Full solution</summary>
If the pulled-back form equalled the original, their integrals would agree. Orientation reversal instead makes the pullback integral the negative of the original integral, forcing that positive number to be zero, a contradiction. Pointwise, the same contradiction follows because an orientation-reversing differential sends a positive frame to a negative one, where the positive volume form has negative value. Both arguments use the stipulated orientation reversal.
</details>

### Exercise 12.6 {#smooth-orientation-integration-ex-6}

Determine the orientation sign of interchanging the factors of two oriented surfaces. Compare it with interchanging two oriented curves.

<details><summary>Hint 1</summary>
Move every basis vector of the first factor past every basis vector of the second.
</details>
<details><summary>Hint 2</summary>
Count four exchanges in the first case and one in the second.
</details>
<details><summary>Full solution</summary>
For two surfaces the sign is $(-1)^4=1$, so the swap preserves the product orientation. For two curves the sign is minus one and it reverses orientation. There is no rule saying every exchange of manifold factors reverses orientation: the dimensions determine the parity. The calculation agrees with the graded commutativity of the corresponding top-degree wedge factors.
</details>

### Exercise 12.7 {#smooth-orientation-integration-ex-7}

For a regular level set of a smooth function on oriented Euclidean space, explain how replacing its defining function by its negative changes the gradient-normal orientation.

<details><summary>Hint 1</summary>
The zero set and its tangent kernels stay the same.
</details>
<details><summary>Hint 2</summary>
The normalized gradient changes sign.
</details>
<details><summary>Full solution</summary>
Negating the defining function negates its differential and gradient but does not change their kernel or zero set. Its normalized gradient therefore becomes the opposite unit normal. Contraction of ambient volume with that normal is the negative of the original induced volume form. Thus the induced orientation reverses. Orientation belongs to the set together with a chosen normal convention; it is not determined by the bare equation's zero locus alone.
</details>

### Exercise 12.8 {#smooth-orientation-integration-ex-8}

On the positively oriented circle integrate the restriction of $x\,dy-y\,dx$ after traversing the circle twice by a parametrization. Why is the result different from its manifold integral?

<details><summary>Hint 1</summary>
Use $c(t)=(\cos 2t,\sin 2t)$ on a full interval of length $2\pi$.
</details>
<details><summary>Hint 2</summary>
This map is not a one-to-one coordinate change.
</details>
<details><summary>Full solution</summary>
The pullback is $2dt$, so the parameter integral is $4\pi$. The oriented manifold integral remains $2\pi$ by Worked example 12.3. The parametrized journey visits every arc twice, counting multiplicity. It is a two-sheeted covering, not a diffeomorphism, so the diffeomorphism change-of-variables theorem does not assert equality of these two integrals. The extra traversal explains the exact factor of two.
</details>

### Exercise 12.9 {#smooth-orientation-integration-ex-9}

Suppose a disconnected manifold has two oriented components and a diffeomorphism preserves orientation on one but reverses it on the other. State the integral pullback formula for a compactly supported top form.

<details><summary>Hint 1</summary>
Split the form into the contributions supported on the target components.
</details>
<details><summary>Hint 2</summary>
Apply the sign formula separately to each mapped component.
</details>
<details><summary>Full solution</summary>
The integral over the source is the target integral over the image of the preserving component minus the target integral over the image of the reversing component. Each restriction has compact support, since the finitely many components here are closed and open. There is generally no single sign multiplying the total target integral. Equality or negation could occur for special forms, but does not follow uniformly from these hypotheses.
</details>

### Exercise 12.10 {#smooth-orientation-integration-ex-10}

Explain why the global integral construction cannot simply be applied to the constant area form on the whole plane to conclude that it has a finite integral.

<details><summary>Hint 1</summary>
Locate the compact-support hypothesis in the finite-sum proof.
</details>
<details><summary>Hint 2</summary>
Integrate over squares with increasing side length.
</details>
<details><summary>Full solution</summary>
The constant area form has support equal to the entire noncompact plane. There is no compact set reducing the locally finite partition to finitely many contributing terms. Its ordinary positive integral over a centered square of side length $2R$ is $4R^2$, which grows without bound. Extending the theory to noncompact support requires convergence or nonnegative extended-integral conventions, neither of which converts this example into a finite integral. The compactly supported construction remains fully valid within its stated domain.
</details>

<a id="section-243-sources-and-provenance"></a>
## Sources and provenance {#section-245-sources-and-provenance}

New L4 expansion of the orientation and chart-integration scope of [Quarto Calculus, chapter 45](../../../../textbooks/calculus/chapters/45-calculus-manifolds.qmd), with the existing Quarto source preserved. The nonorientability argument also uses the previously constructed Möbius bundle model. Comparison references are Lee, *Introduction to Smooth Manifolds*, orientation and integration chapters; Tu, *An Introduction to Manifolds*, orientation and integration sections; and Spivak, *Calculus on Manifolds*, integration of forms. Euclidean change of variables is an explicit analytic input.

<a id="section-247-summary"></a>
## Summary {#section-249-summary}

Orientation is a locally consistent sign choice for ordered tangent bases, equivalently the existence of a nowhere-zero top form. Compactly supported top forms can be integrated in positive charts; Euclidean change of variables and a finite double-partition argument prove independence of all choices. Orientation reversal negates the integral. Product and outward-normal conventions fix later signs, while compact support, injectivity of substitutions and global sign compatibility remain essential hypotheses.
