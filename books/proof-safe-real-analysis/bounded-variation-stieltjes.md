
# Bounded Variation and Riemann–Stieltjes Integration

An ordinary Riemann sum multiplies a sampled value by the length of an interval. Sometimes length is the wrong weight. A particle may spend different amounts of time in different regions; a cumulative payment record may increase smoothly between occasional transfers; a finite collection of observations may put all its weight at isolated locations. Replacing interval length by an increment of another function gives one language for these situations.

The replacement has a mathematical cost. Signed increments can cancel, so the net change of an integrator does not control errors accumulated across many intervals. Total variation measures the amount of travel before cancellation. It supplies exactly the estimate needed to make continuous integrands manageable, even when their integrators jump.

**Preparation.** Use partitions, Darboux sums and ordinary integral estimates from [Riemann Integration from Upper and Lower Sums](riemann-integration.md), the classical fundamental theorem from [The Fundamental Theorem and Its Boundaries](fundamental-theorem-and-absolute-continuity.md), and compact-domain uniform continuity from [Continuity, Uniform Control, and Extension](continuity-and-uniform-continuity.md). No measure theory is assumed. Throughout, \(a<b\) are finite real numbers and functions are real valued. On a one-point interval we define every variation and integral to be zero.

## 1. Measuring travel

**Definition 1 (variation).** For a partition \(P=\{a=x_0<\cdots<x_n=b\}\), put
\[
V(f;P)=\sum_{i=1}^n|f(x_i)-f(x_{i-1})|,
\qquad
V_a^b(f)=\sup_P V(f;P).
\]
The supremum is allowed to be infinite. A function has **bounded variation**, abbreviated \(BV\), if it is finite. Adding points to a partition cannot decrease its variation sum: the triangle inequality replaces one increment by two whose absolute values have at least the same total.

Already the two-point partition gives \(|f(b)-f(a)|\le V_a^b(f)\). More generally, inserting any \(x\) gives \(|f(x)|\le |f(a)|+V_a^b(f)\). Thus BV functions are bounded. The converse is false: a bounded function can reverse direction so often that its total travel is infinite. Neither boundedness nor continuity limits the number of reversals.

**Theorem 2 (additivity).** If \(a<c<b\) and \(f\in BV([a,b])\), then
\[
V_a^b(f)=V_a^c(f)+V_c^b(f).
\]

**Proof.** Insert \(c\) into any partition of \([a,b]\). The resulting sum is no smaller, and its two pieces are bounded by the two variations on the right. Taking a supremum proves the inequality at most. Conversely, given \(\varepsilon>0\), choose partitions of \([a,c]\) and \([c,b]\) whose sums exceed their respective suprema minus \(\varepsilon/2\). Their concatenation has sum exceeding the right-hand side minus \(\varepsilon\). Take the supremum on the left and then let \(\varepsilon\) decrease to zero. All the suprema are finite here, so choosing near-maximizing partitions is legitimate. \(\square\)

The same argument works when a subinterval reduces to a point, with its variation set to zero. Additivity concerns total variation, whereas a single partition need not realize that total. In applications the supremum is an analytical object; observed samples usually supply only a lower bound.

**Worked example 1 (a corner).** On \([-1,2]\), \(f(x)=|x|\) decreases from 1 to 0 and increases from 0 to 2. A monotone function has variation equal to the absolute difference of its endpoint values, since every partition sum telescopes. Additivity at zero therefore gives
\[
V_{-1}^2(|x|)=1+2=3.
\]
The endpoint displacement is only \(2-1=1\). A partition omitting the corner might report less than 3; the partition containing \(-1,0,2\) realizes the total.

**Theorem 3 (elementary bounds).** For BV functions \(f,g\) and scalars \(r,s\),
\[
V(rf+sg)\le |r|V(f)+|s|V(g),
\quad
V(fg)\le \|f\|_\infty V(g)+\|g\|_\infty V(f).
\]
A function that is Lipschitz with constant \(L\) has variation at most \(L(b-a)\).

**Proof.** Apply the triangle inequality to each increment of the linear combination. For products write
\[
f_i g_i-f_{i-1}g_{i-1}
=f_i(g_i-g_{i-1})+g_{i-1}(f_i-f_{i-1}),
\]
bound the coefficients by the two supremum norms, and sum. For a Lipschitz function, bound each increment by \(L(x_i-x_{i-1})\). Taking suprema gives all three assertions. \(\square\)

## 2. Jordan decomposition

**Theorem 4 (Jordan decomposition).** A real function on \([a,b]\) is BV if and only if it is the difference of two increasing functions. Here increasing means nondecreasing. If \(f\) is BV, define
\[
v(x)=V_a^x(f),\quad
p(x)=\frac{v(x)+f(x)-f(a)}2,\quad
q(x)=\frac{v(x)-f(x)+f(a)}2.
\]
Then \(p,q\) are increasing, \(p(a)=q(a)=0\), and \(f=f(a)+p-q\).

**Proof.** By additivity, for \(x<y\),
\[
v(y)-v(x)=V_x^y(f)\ge |f(y)-f(x)|.
\]
Both \(v(y)-v(x)+f(y)-f(x)\) and \(v(y)-v(x)-f(y)+f(x)\) are nonnegative. These are twice the increments of \(p\) and \(q\), proving monotonicity. The normalization and decomposition follow directly from the formulas.

Conversely, if \(f=u-w\) with \(u,w\) increasing, then every partition satisfies
\[
V(f;P)\le\sum_i(u_i-u_{i-1})+\sum_i(w_i-w_{i-1})
=u(b)-u(a)+w(b)-w(a)<\infty.
\]
The same bound holds for the supremum. A constant can be absorbed into either increasing function, so the normalized form above proves the usual difference statement. \(\square\)

The normalization expresses upward and downward travel separately:
\[
p(b)+q(b)=V_a^b(f),\qquad
p(b)-q(b)=f(b)-f(a).
\]
It also has a minimality property. If \(f=f(a)+u-w\), with increasing \(u,w\) vanishing at \(a\), then for every \(x<y\),
\[
V_x^y(f)\le u(y)-u(x)+w(y)-w(x).
\]
Combining this with the increment of \(f\) yields \(p(y)-p(x)\le u(y)-u(x)\) and the corresponding inequality for \(q,w\). Consequently \(u-p=w-q\) is increasing. Every normalized decomposition adds the same extra increasing function to both components. Normalization alone does not give uniqueness; normalization together with this minimality does.

One useful consequence is the existence of one-sided limits of BV functions at interior points. An increasing bounded function has left limit equal to the supremum of its values to the left, and right limit equal to the infimum of its values to the right. The supremum approximation property proves the left limit directly; the right proof reverses inequalities. Subtract these one-sided limits for the two Jordan components. The value at the point itself need not equal either one-sided limit.

**Worked example 2 (continuous infinite travel).** Set \(f(0)=0\), \(f(x)=x\sin(1/x)\) for \(0<x\le1\). The bound \(|f(x)|\le x\) proves continuity at zero. At
\[
t_k=(\pi/2+k\pi)^{-1},\qquad k=0,1,\ldots,
\]
the values are \((-1)^k t_k\). Consecutive selected values have opposite signs, so their absolute difference is \(t_k+t_{k+1}\). A partition containing \(t_M,\ldots,t_0\) in increasing order therefore has variation at least \(\sum_{k=0}^{M-1}(t_k+t_{k+1})\). Since \(t_k\) is bounded below by a positive constant times \(1/(k+1)\), these sums diverge. The function is continuous and bounded but not BV. Small amplitudes do not make a divergent accumulated travel finite.

## 3. The tagged-sum convention

**Definition 5 (Riemann–Stieltjes integral).** A tagged partition consists of a partition \(P\) and tags \(t_i\in[x_{i-1},x_i]\). Its mesh is \(|P|=\max_i(x_i-x_{i-1})\), and
\[
S(f,\alpha;P,T)=\sum_i f(t_i)\bigl(\alpha(x_i)-\alpha(x_{i-1})\bigr).
\]
For bounded \(f,\alpha\), the integral \(I=\int_a^b f\,d\alpha\) exists if for every \(\varepsilon>0\) there is \(\delta>0\) such that every tagged partition with mesh below \(\delta\) satisfies \(|S-I|<\varepsilon\).

Every tag choice is included, including endpoint tags, and every sufficiently fine partition is included, whether or not it contains specified jump locations. This is a mesh-limit definition. A weaker convention asking only for refinements of one chosen partition can behave differently for discontinuous data. We will not switch conventions midproof.

If a mesh limit exists it is unique: choose one partition fine enough for two alleged limits and compare both to its sum using half their distance as the error budget. For \(\alpha(x)=x\), the definition is ordinary Riemann integration. If \(\alpha\) is constant, every sum and its integral vanish. Adding a constant to \(\alpha\) never changes a sum.

For an increasing integrator all increments are nonnegative. Upper and lower sums can therefore be defined by multiplying the supremum and infimum of \(f\) on each closed subinterval by that increment. Any tagged sum lies between them. With discontinuous integrators, merely finding one partition with small upper-minus-lower gap is not automatically a proof of the mesh-limit assertion. The proof below controls every fine partition explicitly.

## 4. Existence without differentiability

**Theorem 6 (continuous integrands).** If \(f\) is continuous and \(\alpha\) is BV on \([a,b]\), then the mesh-limit integral \(\int_a^b f\,d\alpha\) exists and
\[
\left|\int_a^b f\,d\alpha\right|
\le \|f\|_\infty V_a^b(\alpha).
\]
In particular this holds for every increasing \(\alpha\), with variation \(\alpha(b)-\alpha(a)\).

**Proof.** Let \(\omega_f(h)\) be the supremum of \(|f(x)-f(y)|\) over points at distance at most \(h\). Uniform continuity gives \(\omega_f(h)\to0\). If \(R\) refines \(P\), expand each \(\alpha\)-increment for \(P\) into the increments of \(R\) inside it. Compare an arbitrary tagged sum on \(P\) with an arbitrary tagged sum on \(R\). Each pair of function values being compared lies in the same original interval. Thus
\[
|S_P-S_R|\le\omega_f(|P|)V_a^b(\alpha).
\]
For any two partitions \(P,Q\), take their common refinement \(R=P\cup Q\) and choose tags on it. The triangle inequality gives
\[
|S_P-S_Q|\le [\omega_f(|P|)+\omega_f(|Q|)]V_a^b(\alpha).
\]
Choose equal-length partitions with meshes tending to zero and any tags. Their sums are a Cauchy sequence by this estimate and hence have a real limit \(I\). Compare any sufficiently fine tagged sum with a late sum of that sequence. The same estimate shows that every such sum approaches \(I\), uniformly over tag choices. This is the required definition. Finally every sum has absolute value at most \(\|f\|_\infty V_a^b(\alpha)\); passage to the limit preserves the inequality. \(\square\)

The proof explains the two hypotheses rather than just listing them. Continuity makes local oscillations uniformly small; finite variation bounds the total absolute weight multiplying those oscillations. Jordan decomposition gives a second existence proof: integrate against its two increasing parts and subtract. The tagged sums show that this answer is independent of the particular decomposition, because their difference is always the original tagged sum.

**Theorem 7 (calculus rules).** For continuous integrands and BV integrators the integral is linear in each argument, additive across adjacent subintervals, and positive when the integrand is nonnegative and the integrator increasing.

**Proof.** Linearity is an identity of finite sums followed by a limit. Positivity holds for every sum and survives its limit. For interval additivity, first consider fine partitions containing the dividing point \(c\); their sums split exactly. For an arbitrary fine partition insert \(c\). The refinement comparison in Theorem 6 shows that the change tends to zero with the original mesh. Therefore the unrestricted mesh limit equals the sum of the two subinterval limits. \(\square\)

If \(f_n\to f\) uniformly and each \(f_n\) is continuous, the uniform limit is continuous and the bound gives
\[
\left|\int f_n\,d\alpha-\int f\,d\alpha\right|
\le V(\alpha)\|f_n-f\|_\infty\to0.
\]
This is a continuity statement about an integration operator on the space of continuous functions. It does not require pointwise convergence arguments or an interchange of infinitely many unrelated limits.

## 5. Smooth weights and point masses

**Theorem 8 (smooth integrator).** If \(\alpha\in C^1([a,b])\) and \(f\) is continuous, then
\[
\int_a^b f\,d\alpha=\int_a^b f(x)\alpha'(x)\,dx.
\]

**Proof.** The mean value theorem shows that \(\alpha\) is Lipschitz, hence BV, so the left integral exists. By the fundamental theorem,
\[
S(f,\alpha;P,T)=\sum_i f(t_i)\int_{x_{i-1}}^{x_i}\alpha'(x)\,dx.
\]
Subtract the ordinary integral of \(f\alpha'\). Its absolute value is at most
\(\omega_f(|P|)\int_a^b|\alpha'|\), which tends to zero. Thus both expressions have the same limit. \(\square\)

For completeness, the exact variation of a \(C^1\) function is \(\int|f'|\). The fundamental theorem bounds every partition variation above by that integral. Conversely, for each interval the mean value theorem gives \(|f(x_i)-f(x_{i-1})|=|f'(\xi_i)|(x_i-x_{i-1})\). Along partitions of mesh tending to zero these are Riemann sums for continuous \(|f'|\), so their limit is the integral and cannot exceed the supremum variation. This proves equality without assuming finitely many sign changes of the derivative.

For \(a<c<b\), let \(H_c(x)=0\) for \(x<c\) and \(H_c(x)=1\) for \(x\ge c\). Exactly one interval in any partition has nonzero \(H_c\)-increment. That interval contains \(c\) and its tag lies within the mesh of \(c\). Consequently continuity of \(f\) gives
\[
\int_a^b f\,dH_c=f(c).
\]
At an interior jump the continuous integrand removes dependence on which side receives the interval. Endpoint values need separate attention: \(H_a\) is already constant one on this domain, so its integral is zero; \(H_b\) places its increment in the final interval and gives \(f(b)\). The interval's left endpoint is a baseline for increments, not an automatically included atom.

**Worked example 3 (a mixed integrator).** On \([0,1]\), take \(\alpha(x)=x^2+2H_{1/2}(x)\) and \(f(x)=1+x\). Linearity and Theorem 8 give
\[
\int_0^1(1+x)\,d\alpha
=\int_0^1(1+x)2x\,dx+2(1+1/2)
=1+\frac23+3=\frac{14}3.
\]
The smooth contribution depends on slope; the jump contribution samples the function at one location. Replacing \(\alpha\) by its ordinary derivative almost everywhere would discard the second contribution. A derivative formula requires the stated smoothness, not just the existence of a derivative away from jumps.

## 6. Integration by parts, including existence

**Theorem 9 (integration by parts).** If \(f,\alpha\) are BV and at least one is continuous on \([a,b]\), both mesh-limit integrals exist and
\[
\int_a^b f\,d\alpha+\int_a^b\alpha\,df
=f(b)\alpha(b)-f(a)\alpha(a).
\]

**Proof.** By symmetry suppose \(f\) is continuous. Theorem 6 establishes \(I=\int f\,d\alpha\). We must prove the other integral exists even if \(\alpha\) jumps. For any tagged partition \(P,T\), the following identity holds on each interval, with \(l=x_{i-1}\), \(r=x_i\), \(t=t_i\):
\[
f(r)\alpha(r)-f(l)\alpha(l)
=\alpha(t)(f(r)-f(l))
+f(l)(\alpha(t)-\alpha(l))
+f(r)(\alpha(r)-\alpha(t)).
\]
Insert each tag into its interval to create a refinement \(Q\). The last two terms together are a tagged sum for \(f\,d\alpha\) on \(Q\), using the left endpoint on \([l,t]\) and the right endpoint on \([t,r]\). Zero-length pieces are simply omitted. Its mesh is no larger than \(|P|\), so it tends to \(I\), independently of all the original tags. Summing the identity therefore proves that every fine tagged sum for \(\alpha\,df\) tends to the boundary product minus \(I\). This proves its existence as well as the formula. If instead \(\alpha\) is continuous, interchange the roles. \(\square\)

This argument avoids treating a formal differential identity as an existence theorem. In fact the tag-splitting proof proves the reverse integral under continuity of \(f\) and BV of \(\alpha\) alone; the symmetric theorem has the convenient familiar BV hypotheses on both functions.

**Worked example 4 (a discontinuous integrand that works).** For \(f(x)=x\) and \(\alpha=H_c\) on \([0,1]\), the first integral is \(c\). Integration by parts gives
\[
\int_0^1H_c\,dx=1-c.
\]
This is the usual Riemann integral of a step function. Its discontinuity does not harm integration against the continuous integrator \(x\). The theorem proves both integrals before relating them.

Common jumps can destroy the mesh integral altogether. Set \(f=\alpha=H_c\). Choose arbitrarily fine partitions with \(c\) strictly inside one interval. That interval has integrator increment one. A tag below \(c\) makes the whole sum zero; a tag above \(c\) makes it one. No unique limit exists. This does not claim every pair of discontinuous functions fails: it identifies a precise obstruction and explains why the theorem excludes it. Other integration conventions can assign jump terms differently; their formulas must be proved with those conventions.

## A partition error certificate

The existence proof also yields a useful finite approximation bound. For continuous \(f\) and BV integrator \(\alpha\), every tagged partition satisfies
\[
\left|S(f,\alpha;P,T)-\int_a^b f\,d\alpha\right|
\le \omega_f(|P|)V_a^b(\alpha).
\]
To prove this, keep \(P,T\) fixed and refine \(P\) by adding an increasingly fine equal-length grid. Give the new subintervals arbitrary tags. Their meshes tend to zero, so their sums tend to the integral. The refinement estimate in Theorem 6 bounds their distance from the fixed original sum by the right side. Passing to the limit proves the claim.

This argument is stronger than simply showing a Cauchy sequence of convenient sums. It gives a certificate for a particular partition and for every choice of its tags. If the integrand is \(L\)-Lipschitz, then \(\omega_f(h)\le Lh\); consequently mesh below \(\varepsilon/(LV(\alpha))\) suffices when both constants in the denominator are positive. If either is zero, every sum already has the exact integral value. The case of a constant nonzero integrator is included: its variation is zero and all increments vanish.

Obtaining a trustworthy bound on variation is part of using this certificate. If \(\alpha=u-w\) with increasing \(u,w\), the sum of their endpoint increases gives an upper bound, even when they are not the minimal Jordan components. By contrast, \(|\alpha(b)-\alpha(a)|\) is only a lower bound on variation. Replacing the needed upper bound by that endpoint displacement could certify a false accuracy claim for an integrator that repeatedly increases and decreases.

The certificate also separates mathematical sampling error from other errors. Rounded evaluations of \(f\) and \(\alpha\) can perturb the finite sum; the displayed bound does not include those perturbations. If only sampled values of the integrator are available, their partition variation is a lower bound on total travel, so it does not by itself certify unsampled behavior. A known monotonicity or Lipschitz hypothesis can supply the missing control. Fine sampling and a valid global regularity bound perform different jobs.

## 7. Exercises

Each problem uses the tagged-sum convention of Definition 5.

### ANA-CH23-E001 — Affine travel

Compute the variation of \(3-2x\) on \([-1,4]\).

<details><summary>Hint 1</summary>

Determine whether the function changes direction.

</details>
<details><summary>Hint 2</summary>

For a decreasing function the absolute increments telescope after reversing their signs.

</details>
<details><summary>Solution</summary>

The function decreases from 5 to \(-5\). Every partition sum is the initial value minus the final value, namely 10, so its total variation is 10.

</details>

### ANA-CH23-E002 — Joining finite journeys

Prove variation additivity at a specified \(c\in(a,b)\) directly from suprema.

<details><summary>Hint 1</summary>

Insert \(c\) into an arbitrary partition.

</details>
<details><summary>Hint 2</summary>

For the reverse inequality concatenate two partitions whose sums are within half a prescribed tolerance of the two suprema.

</details>
<details><summary>Solution</summary>

Refinement at \(c\) bounds every original sum by \(V_a^c(f)+V_c^b(f)\), proving one inequality. Choose partitions on the two pieces whose sums exceed their finite variations minus \(\varepsilon/2\). Their union is a partition of the whole interval with sum exceeding the sum of variations minus \(\varepsilon\). Take the whole-interval supremum and let \(\varepsilon\downarrow0\). The two inequalities give equality.

</details>

### ANA-CH23-E003 — Positive and negative travel

For \(f(x)=|x|\) on \([-1,2]\), find the normalized Jordan components.

<details><summary>Hint 1</summary>

Compute the variation function separately to the left and right of zero.

</details>
<details><summary>Hint 2</summary>

Substitute \(f(-1)=1\) into the formulas for \(p,q\).

</details>
<details><summary>Solution</summary>

For \(-1\le x\le0\), \(v(x)=x+1\), so \(p(x)=0\) and \(q(x)=x+1\). For \(0\le x\le2\), \(v(x)=1+x\), so \(p(x)=x\) and \(q(x)=1\). Both are increasing and vanish initially; \(1+p-q=|x|\) on both pieces.

</details>

### ANA-CH23-E004 — A product estimate

Prove that the product of two BV functions is BV.

<details><summary>Hint 1</summary>

Add and subtract \(f(x_i)g(x_{i-1})\) in a product increment.

</details>
<details><summary>Hint 2</summary>

Bound the remaining coefficients by global supremum norms before summing.

</details>
<details><summary>Solution</summary>

Writing \(f_i=f(x_i)\), the increment is \(f_i(g_i-g_{i-1})+g_{i-1}(f_i-f_{i-1})\). Its absolute value is bounded by \(\|f\|_\infty|\Delta g_i|+\|g\|_\infty|\Delta f_i|\). Summation and taking the supremum give \(V(fg)\le\|f\|_\infty V(g)+\|g\|_\infty V(f)\), a finite bound because BV functions are bounded.

</details>

### ANA-CH23-E005 — A smooth weight

Evaluate \(\int_0^1(1+x)\,d(x^3)\).

<details><summary>Hint 1</summary>

Check the smooth-integrator hypotheses.

</details>
<details><summary>Hint 2</summary>

Replace the integrator increment by integration against the derivative \(3x^2\).

</details>
<details><summary>Solution</summary>

The integrand is continuous and \(x^3\) is \(C^1\). Theorem 8 gives \(\int_0^1(3x^2+3x^3)\,dx=1+3/4=7/4\). This replacement is justified by smoothness, rather than by a symbolic cancellation of differentials.

</details>

### ANA-CH23-E006 — Signed point weights

Let \(\alpha=3H_{1/4}-2H_{3/4}\) on \([0,1]\). Evaluate \(\int_0^1x^2\,d\alpha\).

<details><summary>Hint 1</summary>

The integrator is BV even though it is not increasing.

</details>
<details><summary>Hint 2</summary>

Use linearity and sample the integrand at each jump.

</details>
<details><summary>Solution</summary>

The two step functions are BV, so their linear combination is BV and the continuous integrand is integrable. The value is \(3(1/4)^2-2(3/4)^2=3/16-18/16=-15/16\). Positivity is not available for a signed integrator.

</details>

### ANA-CH23-E007 — Endpoint conventions

For continuous \(f\) on \([a,b]\), compute the integrals against \(H_a\) and \(H_b\).

<details><summary>Hint 1</summary>

Evaluate each step function on the actual closed domain before considering its jumps elsewhere.

</details>
<details><summary>Hint 2</summary>

The first integrator is constant; only the last interval contributes for the second.

</details>
<details><summary>Solution</summary>

On \([a,b]\), \(H_a=1\), so all increments vanish and its integral is zero. For \(H_b\), only the last increment is one; its tag approaches \(b\) with the mesh. Continuity makes the sum tend to \(f(b)\). Thus a left-endpoint atom is not included by these increments.

</details>

### ANA-CH23-E008 — Uniform stability

Suppose \(f,g\) are continuous and \(\alpha\) is BV. Prove \(\left|\int f\,d\alpha-\int g\,d\alpha\right|\le V(\alpha)\|f-g\|_\infty\).

<details><summary>Hint 1</summary>

Subtract at the level of the integrands.

</details>
<details><summary>Hint 2</summary>

Apply the integral bound to the continuous function \(f-g\).

</details>
<details><summary>Solution</summary>

Linearity identifies the difference with \(\int(f-g)\,d\alpha\). Theorem 6 bounds its absolute value by \(\|f-g\|_\infty V(\alpha)\). Both original integrals and the difference integral exist by that same theorem, so the subtraction is legitimate.

</details>

### ANA-CH23-E009 — Parts with a corner

Compute \(\int_{-1}^1x\,d|x|\) using integration by parts.

<details><summary>Hint 1</summary>

Both functions are continuous and Lipschitz.

</details>
<details><summary>Hint 2</summary>

The boundary product is \(1-(-1)=2\); compute the ordinary integral of \(|x|\).

</details>
<details><summary>Solution</summary>

Theorem 9 applies because both functions are BV and continuous. It gives \(\int x\,d|x|=2-\int_{-1}^1|x|\,dx=2-1=1\). The corner causes no difficulty: differentiability of the integrator was never needed.

</details>

### ANA-CH23-E010 — Simultaneous jumps

Show directly that \(\int_0^1H_{1/2}\,dH_{1/2}\) does not exist under Definition 5.

<details><summary>Hint 1</summary>

Use partitions with \(1/2\) strictly inside a subinterval.

</details>
<details><summary>Hint 2</summary>

Change only the tag of the interval with nonzero integrator increment.

</details>
<details><summary>Solution</summary>

There are arbitrarily fine partitions avoiding \(1/2\) as a node. Exactly one interval straddles it, with increment one. Choosing its tag below the jump makes the sum zero; choosing it above makes the sum one. Every other increment is zero. The same arbitrarily small mesh therefore admits sums differing by one, contradicting a common limit.

</details>

### ANA-CH23-E011 — Continuous but not BV

Prove that \(f(x)=x\sin(1/x)\), extended by zero, has infinite variation on \([0,1]\).

<details><summary>Hint 1</summary>

Select points where the sine alternates exactly between 1 and \(-1\).

</details>
<details><summary>Hint 2</summary>

At \(t_k=(\pi/2+k\pi)^{-1}\), successive absolute increments are \(t_k+t_{k+1}\).

</details>
<details><summary>Solution</summary>

For each \(M\) include \(t_M,\ldots,t_0\) in a partition in increasing order. The variation sum dominates \(\sum_{k=0}^{M-1}(t_k+t_{k+1})\). Since \(t_k\ge1/[\pi(k+1)]\), these lower bounds diverge by the harmonic series. Hence the supremum is infinite, although \(|f(x)|\le x\) proves continuity at zero.

</details>

### ANA-CH23-E012 — Exact smooth variation

Find the variation of \(\sin x\) on \([0,2\pi]\).

<details><summary>Hint 1</summary>

Split at its two turning points.

</details>
<details><summary>Hint 2</summary>

The three monotone pieces have endpoint travels 1, 2 and 1.

</details>
<details><summary>Solution</summary>

Additivity at \(\pi/2\) and \(3\pi/2\) gives total variation \(1+2+1=4\). Equivalently the \(C^1\) identity gives \(\int_0^{2\pi}|\cos x|\,dx=4\). The zero endpoint displacement does not measure this travel.

</details>

### ANA-CH23-E013 — Nonunique decompositions

Given normalized Jordan components \(p,q\), prove \(p+h,q+h\) is another normalized decomposition whenever \(h\) is increasing and \(h(a)=0\). When is its summed endpoint increase minimal?

<details><summary>Hint 1</summary>

The common added function cancels in the difference.

</details>
<details><summary>Hint 2</summary>

The summed endpoint increase grows by \(2h(b)\).

</details>
<details><summary>Solution</summary>

Both new components remain increasing and start at zero, and their difference remains \(f-f(a)\). Their endpoint sum is \(V(f)+2h(b)\). Since increasing \(h\) starts at zero, \(h(b)\ge0\), with equality only if \(h\) is identically zero. Thus minimal summed increase selects the original components within this family, in agreement with the general minimality argument.

</details>

### ANA-CH23-E014 — Empirical weighting

For observations \(1/4,1/4,3/4\), let \(F=(2H_{1/4}+H_{3/4})/3\) on \([0,1]\). Compute \(\int x\,dF\) and \(\int x^2\,dF\), and their variance difference.

<details><summary>Hint 1</summary>

The repeated observation produces a jump of size two thirds.

</details>
<details><summary>Hint 2</summary>

Subtract the square of the first integral from the second.

</details>
<details><summary>Solution</summary>

The first value is \((2(1/4)+3/4)/3=5/12\). The second is \((2/16+9/16)/3=11/48\). The variance difference is \(11/48-25/144=1/18\). These are exact weighted finite sums, so no probability measure construction is needed.

</details>

### ANA-CH23-E015 — Vanishing integrators

Suppose \(\alpha_n\) are BV and \(V(\alpha_n)\to0\). Prove \(\int f\,d\alpha_n\to0\) for continuous \(f\). Does uniform convergence \(\alpha_n\to0\) alone imply their variations tend to zero?

<details><summary>Hint 1</summary>

Apply the integral bound with the same fixed integrand.

</details>
<details><summary>Hint 2</summary>

For the second question consider \(\alpha_n(x)=\sin(nx)/n\) on \([0,2\pi]\).

</details>
<details><summary>Solution</summary>

The bound \(|\int f\,d\alpha_n|\le\|f\|_\infty V(\alpha_n)\) proves the first claim. For the displayed example, \(\|\alpha_n\|_\infty=1/n\to0\), but \(V(\alpha_n)=\int_0^{2\pi}|\cos(nx)|\,dx=4\) for each positive integer n. Uniformly small values do not force uniformly small travel. This counterexample concerns the variation assertion, not an assertion that every fixed continuous integrand gives nonvanishing integrals.

</details>

## Sources

The local read-only seed is Quarto's `modules/textbooks/real_analysis/chapters/15-bv-stieltjes.qmd`. For another author's formulation of tagged sums and the BV existence theorem, see Zach Teitler's [Riemann–Stieltjes Integration, Section 4.4](https://zteitler.github.io/analytic-number-theory-notes/sec-riemann-stieltjes.html). The linked author notes were consulted for the stated convention and theorem scope; the arguments and exercise solutions here are self-contained.

## Summary

Variation measures accumulated absolute increments and is additive across adjacent intervals. Its normalized Jordan components split upward and downward travel. Continuous integrands have mesh-limit Stieltjes integrals against BV integrators because uniform oscillation bounds multiply finite total travel. Smooth integrators give ordinary weighted integrals, while interior step jumps evaluate the integrand at a point. Integration by parts requires existence arguments for both integrals; tag splitting supplies them when one BV function is continuous. Common jumps can obstruct this tagged-sum definition. The next chapter uses another consequence of uniform control: continuous functions can be approximated everywhere at once by an algebraically simple family.
