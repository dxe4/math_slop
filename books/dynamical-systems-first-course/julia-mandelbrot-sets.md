
# Julia Sets and the Mandelbrot Set

A single formula can organise two different kinds of picture. If the parameter is fixed and the starting point varies, we investigate a dynamical plane. If the starting point is the critical point and the parameter varies, we investigate a parameter plane. Confusing those roles is a common source of misleading explanations of Julia sets and the Mandelbrot set.

We study $p_c(z)=z^2+c$ for $z,c\in\mathbb C$. Complex numbers may be treated as points in the plane with ordinary addition, multiplication and modulus. Our main proofs use the triangle inequality, continuity and geometric growth. Deeper connectedness statements are cited separately. Thus a first encounter does not require the full theory of holomorphic normal families, even though that theory explains much of the subject.

Read [one-dimensional maps](one-dimensional-maps-logistic-family.md) for iteration and [fractals and dimension](fractals-dimension.md) for the distinction between a limiting set and a finite image. The unchanged [Fractals by Iteration](../../articles/fractals-by-iteration.md) supplies an introductory escape-time perspective and is credited here. We sharpen its computational boundary by separating exact inequalities from ordinary floating-point observations.

## Dynamical plane and parameter plane

**Definition 14.1 (Filled Julia set and Julia set).** For a fixed $c$, the filled Julia set is
$$K_c=\{z\in\mathbb C:(p_c^n(z))_{n\ge0}\text{ is bounded}\}.$$
For this polynomial family, define its Julia set as the boundary $J_c=\partial K_c$. The Mandelbrot set is the parameter set
$$M=\{c\in\mathbb C:0\in K_c\}.$$

The boundary definition of $J_c$ agrees with the classical normal-family definition by a theorem of polynomial dynamics, cited in the Sources. We use the boundary characterization throughout. It avoids silently assuming advanced complex analysis in elementary arguments.

In $K_c$, the parameter stays fixed while the initial value changes. In $M$, each point is a different parameter and the starting value is always zero. Zero is critical because $p_c'(0)=0$. The claim that its orbit determines the connectedness of $K_c$ is a deep theorem, not a consequence of the definition of $M$ alone.

For a given parameter the recurrence in real coordinates is
$$
x_{n+1}=x_n^2-y_n^2+a,\qquad
y_{n+1}=2x_ny_n+b,
$$
where $c=a+ib$. Both right-hand sides use the old pair $(x_n,y_n)$. Updating the first component before calculating the second would produce a different map. This simple implementation issue illustrates why a precise recurrence belongs beside every picture.

## Escape bounds with complete proofs

**Theorem 14.2 (A general quadratic escape radius).** Fix $c\in\mathbb C$ and let $R=\max(2,|c|)$. If an iterate satisfies $|z_n|>R$, then $|z_{n+k}|\to\infty$ as $k\to\infty$.

*Proof.* The reverse triangle inequality gives $|z^2+c|\ge|z|^2-|c|$. Put $r_0=|z_n|>R$. For any $r\ge r_0$, $|c|\le R<r_0\le r$, so
$$r^2-|c|\ge r^2-r=r(r-1)\ge r(r_0-1).$$
The factor $r_0-1$ exceeds one. Induction shows that later moduli remain at least $r_0$ and grow at least geometrically by that factor. Hence they tend to infinity. The strict inequality at the escape threshold is part of the hypothesis. ∎

A more economical radius can be derived by solving $r^2-|c|>r$, but the simple bound above suffices for every parameter. A radius must be justified for the family and orbit being studied; a fixed radius two is not a universal escape test for arbitrary starting points at arbitrary $c$.

**Theorem 14.3 (Radius two for the critical orbit).** For the orbit beginning at zero, $c\in M$ exactly when $|p_c^n(0)|\le2$ for every $n\ge0$.

*Proof.* If $|c|\le2$, the preceding theorem applies with $R=2$, so any modulus above two implies escape. If $|c|>2$, the first iterate is $c$ and the second has modulus
$$|c^2+c|\ge|c|^2-|c|=|c|(|c|-1)>|c|.$$
It now exceeds the general escape radius $R=|c|$ and therefore escapes. Thus no parameter outside the radius-two disk belongs to $M$, and any critical orbit exceeding two escapes. Conversely, if every critical iterate has modulus at most two, the orbit is bounded by definition, so $c\in M$. ∎

This theorem gives a finite certificate of nonmembership when an exact iterate exceeds the radius. It gives no finite certificate of membership merely from failure to escape by a chosen cap. Boundedness is an assertion about every future iterate.

The strict threshold also explains boundary examples. For $c=-2$, the critical orbit reaches $-2$, then $2$, then stays at $2$. Reaching modulus two does not imply escape. Replacing “greater than two” by “at least two” would incorrectly reject this parameter.

**Proposition 14.4 (Compactness and elementary invariance).** For every $c$, $K_c$ is a nonempty compact set and $p_c^{-1}(K_c)=K_c$. The Mandelbrot set is nonempty and compact.

*Proof.* With $R=\max(2,|c|)$, the escape theorem gives
$$K_c=\bigcap_{n\ge0}\{z:|p_c^n(z)|\le R\}.$$
Each set is closed by continuity, and the $n=0$ condition bounds the intersection. A fixed point exists by the quadratic formula applied to $z^2-z+c=0$, so $K_c$ is nonempty. A point has bounded orbit if and only if its first image does, proving the preimage equality. Every point has a complex preimage under the quadratic, so this equality also gives $p_c(K_c)=K_c$.

The critical-radius theorem expresses $M$ as the intersection of closed conditions $|p_c^n(0)|\le2$, now viewed as functions of $c$. The first condition bounds it by $|c|\le2$. It contains $c=0$, so it is nonempty compact. ∎

The complement of $M$ is open for a concrete reason: an escaping parameter has some finite iterate strictly beyond two; continuity keeps that finite inequality true in a neighbourhood. Finding such a neighbourhood numerically requires an enclosure for the entire finite computation, not just a rounded centre value.

## Exact dynamical examples

**Example 14.5 (The squaring map).** At $c=0$, $p_0^n(z)=z^{2^n}$. If $|z|<1$, the orbit tends to zero; if $|z|>1$, it diverges; and if $|z|=1$, it remains on the unit circle. Hence $K_0$ is the closed unit disk and $J_0$ its boundary circle. Writing $z=e^{2\pi i\theta}$ on that circle gives angle doubling. The circle dynamics is therefore conjugate to the doubling map on angles modulo one. It is not conjugate to the one-sided binary shift via a homeomorphism, because binary expansions have boundary identifications. The derivative magnitude along the circle is two at each step, so the tangent exponent is exactly $\log2$. In the disk interior, however, orbits approach an attracting fixed point. The filled set and its boundary support very different behaviour.

This example is also a reminder that a Julia set need not be visibly rough. A smooth circle is a Julia set; fractal-looking appearance is not its definition.

**Example 14.6 (The parameter minus two).** We can determine $K_{-2}$ exactly. Solve $w^2-zw+1=0$, whose two roots are reciprocal, and choose a root with $|w|\ge1$. Then $z=w+w^{-1}$ and
$$p_{-2}(z)=w^2+w^{-2}.$$
Induction gives $p_{-2}^n(z)=w^{2^n}+w^{-2^n}$. If $|w|>1$, its modulus is at least $|w|^{2^n}-|w|^{-2^n}$ and diverges. If $|w|=1$, write $w=e^{i\theta}$; then $z=2\cos\theta\in[-2,2]$, and every iterate remains in that interval. Thus $K_{-2}=[-2,2]$. As a subset of the plane it has empty interior, so its boundary is itself: $J_{-2}=[-2,2]$. This proof uses an exact semiconjugacy and handles complex initial points, not merely real ones.

**Example 14.7 (Three critical orbits).** At $c=-1$, the critical orbit is $0,-1,0,-1,\ldots$, proving membership of $M$. The two-cycle multiplier is $p_{-1}'(0)p_{-1}'(-1)=0$, so it is locally attracting. At $c=1$, the critical orbit begins $0,1,2,5,\ldots$; the value five certifies escape and nonmembership. At $c=1/4$, the interval $[0,1/2]$ is invariant and the critical orbit increases: for $x<1/2$,
$$p_{1/4}(x)-x=(x-1/2)^2>0,$$
while $p_{1/4}(x)\le1/2$. Its limit must solve $x=x^2+1/4$, so it is $1/2$. This proves membership despite the limiting fixed point having multiplier one. A neutral multiplier requires direct analysis rather than the strict contraction test.

## Attracting fixed points and a proved interior region

A fixed point $a$ satisfies $c=a-a^2$, and its complex derivative is $\lambda=2a$. Consequently the parameters admitting a fixed point with multiplier $\lambda$ can be written
$$c=\frac\lambda2-\frac{\lambda^2}{4}.$$
If $|\lambda|<1$, the fixed point is locally attracting. Indeed, writing $z=a+w$ yields the exact relation
$$p_c(a+w)-a=\lambda w+w^2.$$
Choose $\eta>0$ with $|\lambda|+\eta<1$. For $|w|\le\eta$, the image error has magnitude at most $(|\lambda|+\eta)|w|$, proving a forward-invariant contracting disk and geometric local convergence.

Local attraction does not by itself prove that the critical point zero belongs to that basin. For quadratic polynomials, the classical attracting-basin theorem supplies the missing link: the immediate basin of a finite attracting fixed point contains a critical point, which here must be zero. We cite that complex-analytic theorem from Milnor. Together with the elementary calculation it identifies the familiar cardioid-shaped attracting-fixed-point region in parameter space. The cited step should not be hidden inside a derivative computation.

There is a smaller parameter region whose membership can be proved without that deeper theorem.

**Proposition 14.8 (A disk contained in the Mandelbrot set).** If $|c|\le1/4$, then $c\in M$.

*Proof.* For $|z|\le1/2$, $|z^2+c|\le1/4+1/4=1/2$. Thus the closed disk of radius one half is forward invariant and contains the initial point zero. Its critical orbit is bounded. ∎

This argument certifies the whole parameter disk at once. It is stronger than a finite nonescape observation for its members, although it covers only part of the Mandelbrot set. Analytic invariant regions are valuable positive certificates because they replace an infinite orbit question with one verified mapping inequality.

## The real logistic slice

For $r>0$, introduce the invertible affine coordinate $z=r(1/2-x)$. A direct calculation gives
$$
z_{n+1}=z_n^2+c,\qquad c=\frac{r(2-r)}4,
$$
whenever $x_{n+1}=rx_n(1-x_n)$. Indeed $z_n^2=r^2/4-r^2x_n+r^2x_n^2$, and subtracting it from $r/2-r^2x_n(1-x_n)$ leaves exactly $r(2-r)/4$.

At $r=4$, the interval $[0,1]$ maps onto $[-2,2]$ with reversed orientation, and $c=-2$. The logistic trigonometric factor becomes the identity relating $2\cos\theta$ and $2\cos2\theta$. Thus the real chaotic slice and the complex quadratic family share exact algebra. The parameter $r=0$ is excluded from this coordinate change because it is not invertible there.

This relation does not identify the entire Mandelbrot set with a one-dimensional bifurcation diagram. A real slice samples only a line of parameters, and each plotted parameter may support several invariant objects. Nevertheless it explains why period-doubling phenomena reappear in complex parameter pictures.

## Deeper structure and finite images

Classical complex dynamics proves that $K_c$ is connected exactly when the critical orbit is bounded, hence exactly when $c\in M$. The corresponding connectedness description of $J_c$ and the connectedness of $M$ itself are cited results of the theory developed by Douady and Hubbard and presented by Milnor. Compactness and escape estimates alone do not prove them. We make no claim here resolving general local-connectivity questions from a finite rendering.

Conjugation gives one exact symmetry. Induction shows
$$p_{\bar c}^n(\bar z)=\overline{p_c^n(z)}.$$
Thus $K_{\bar c}=\overline{K_c}$ and $M$ is symmetric about the real axis. In exact arithmetic paired parameters have identical critical escape times. A discrepancy in a finite image can reveal sampling or rounding differences; the symmetry theorem concerns the exact sets.

An escape-time image colours a sampled point by the first iterate crossing a radius or by a transformed statistic. The colour is not itself a dynamical invariant. At a finite cap there should be three conceptual categories: escape certified by a rigorous bound, boundedness certified by an invariant argument, and unresolved. Ordinary floating-point nonescape belongs to the third category unless another proof is supplied.

If numerical iterates approximate exact ones, a displayed modulus slightly above two is not automatically a certificate. An error enclosure must lie entirely outside the escape disk. Interval arithmetic with outward rounding can provide such enclosures, although dependency growth can make them inconclusive. An inconclusive enclosure is an honest mathematical outcome, not a reason to switch its label to membership.

Resolution also matters. A pixel represents an area of parameter values, while a centre sample concerns one parameter. Certifying the centre does not certify the whole pixel. Raising the iteration cap can reveal later escapes but cannot solve all membership questions uniformly through one fixed finite protocol. Higher precision reduces one source of error without replacing the required infinite-time reasoning.

The elementary proofs already support a careful and useful experiment: exact exterior certificates, explicit interior certificates, compact limiting sets and exact examples whose Julia sets we can determine. The deeper connectivity theory explains how these local computations fit into a global parameter structure. A strong interpretation keeps both contributions visible.

## Certifying a whole parameter neighbourhood

**Proposition 14.9 (A finite parameter-disk escape certificate).** Let exact parameters satisfy $|c-c_0|\le\delta$, and let a computed centre sequence obey
$\widetilde z_{n+1}=\widetilde z_n^2+c_0+\rho_n,\qquad
|\rho_n|\le\eta_n,\qquad \widetilde z_0=0.$
Define $E_0=0$ and choose certified upper bounds recursively satisfying
$$
E_{n+1}\ge(2|\widetilde z_n|+E_n)E_n+\delta+\eta_n.
$$
Then every critical orbit for a parameter in the disk satisfies $|p_c^n(0)-\widetilde z_n|\le E_n$. If $|\widetilde z_n|-E_n>2$ for some finite $n$, the entire parameter disk is disjoint from $M$.

*Proof.* The initial errors vanish. If the bound holds at step $n$, write the exact iterate as $\widetilde z_n+e_n$. Subtracting the computed recurrence from the exact one gives
$$
e_{n+1}=2\widetilde z_ne_n+e_n^2+(c-c_0)-\rho_n.
$$
The triangle inequality proves the recursive upper bound, so induction establishes the enclosure. The reverse triangle inequality then gives $|p_c^n(0)|\ge|\widetilde z_n|-E_n>2$ for every parameter in the disk. The critical escape theorem excludes them all. ∎

The arithmetic bounds $\eta_n$ and the computed upper estimates must themselves be justified, for example by directed rounding. Treating rounded values as exact upper bounds would leave a gap in the certificate. The recurrence can become very wide and fail to establish escape even when every actual parameter in the disk escapes; such failure is inconclusive, not evidence of membership.

This argument makes the distinction between a pixel and its centre concrete. A centre orbit addresses one parameter. A parameter disk or rectangle encloses a whole region, so proving a uniform inequality can certify that region. Subdividing a region may improve the enclosure because the parameter uncertainty shrinks, though it increases the amount of work. Neither strategy is guaranteed to resolve a region crossing the boundary.

The method also illustrates a general theme of this book. Finite computation can prove a statement quantified over infinitely many points when it establishes a uniform analytic bound. The obstacle is not merely that the computer performs finitely many operations. The obstacle is whether those operations support a theorem with all the intended quantifiers. A finite nonescape cap supplies no such boundedness theorem, while a strict uniform escape inequality does supply a valid exterior certificate.

## Exercises

### Exercise 1: Two planes
<a id="julia-mandelbrot-sets-ex-1"></a>

Explain the difference between varying $z_0$ at fixed $c$ and varying $c$ with $z_0=0$.

<details>
<summary>Hint 1</summary>

One explores initial conditions of one map.

</details>

<details>
<summary>Hint 2</summary>

The other explores a family of maps.

</details>

<details>
<summary>Solution</summary>

At fixed $c$, varying $z_0$ studies the dynamical plane and the set $K_c$. Varying $c$ while starting at zero studies the parameter plane and the Mandelbrot set. A coordinate in the latter is a system parameter, not an orbit state of one fixed map.

</details>

### Exercise 2: General radius
<a id="julia-mandelbrot-sets-ex-2"></a>

For $c=3i$, give a valid escape radius and prove escape once a modulus exceeds it.

<details>
<summary>Hint 1</summary>

Use $R=\max(2,|c|)$.

</details>

<details>
<summary>Hint 2</summary>

The proof needs a factor strictly larger than one.

</details>

<details>
<summary>Solution</summary>

Here $R=3$. If $|z_n|=r_0>3$, the reverse triangle inequality gives later moduli at least $r(r_0-1)$ whenever $r\ge r_0$. Since $r_0-1>1$, induction yields geometric divergence. Crossing radius two alone is not the stated general-orbit criterion for this parameter.

</details>

### Exercise 3: Strict critical threshold
<a id="julia-mandelbrot-sets-ex-3"></a>

Why must the critical escape test use $|z_n|>2$ rather than $|z_n|\ge2$?

<details>
<summary>Hint 1</summary>

Consider $c=-2$.

</details>

<details>
<summary>Hint 2</summary>

Compute several iterates from zero.

</details>

<details>
<summary>Solution</summary>

The critical orbit is $0,-2,2,2,\ldots$, which stays bounded but reaches modulus two. A non-strict threshold would incorrectly classify $c=-2$ as escaping. The escape proof relies on a growth factor strictly greater than one.

</details>

### Exercise 4: Squaring Julia set
<a id="julia-mandelbrot-sets-ex-4"></a>

Determine $K_0$ and $J_0$ directly.

<details>
<summary>Hint 1</summary>

Write the $n$th iterate as a power.

</details>

<details>
<summary>Hint 2</summary>

Separate moduli below, equal to and above one.

</details>

<details>
<summary>Solution</summary>

The iterate is $z^{2^n}$. Modulus below one tends to zero, modulus one remains one, and modulus above one diverges. Thus $K_0$ is the closed unit disk and its boundary $J_0$ is the unit circle. A Julia set need not look jagged.

</details>

### Exercise 5: A critical two-cycle
<a id="julia-mandelbrot-sets-ex-5"></a>

At $c=-1$, compute the critical cycle and its multiplier. What is established?

<details>
<summary>Hint 1</summary>

Start at zero and differentiate $z^2-1$.

</details>

<details>
<summary>Hint 2</summary>

A zero derivative makes the product vanish.

</details>

<details>
<summary>Solution</summary>

The orbit is $0,-1,0,-1,\ldots$, of least period two. Its multiplier is $(2\cdot0)(2\cdot(-1))=0$, so the cycle is locally attracting. Its bounded critical orbit proves $c=-1\in M$. This does not describe every point of $K_{-1}$.

</details>

### Exercise 6: Interior disk
<a id="julia-mandelbrot-sets-ex-6"></a>

Show directly that every $|c|\le1/4$ lies in $M$.

<details>
<summary>Hint 1</summary>

Seek an invariant disk containing zero.

</details>

<details>
<summary>Hint 2</summary>

Try radius one half.

</details>

<details>
<summary>Solution</summary>

If $|z|\le1/2$, then $|z^2+c|\le1/4+1/4=1/2$. The disk is forward invariant, so the critical orbit remains bounded forever. This proves membership for an entire parameter region without a finite iteration cap or an attracting-basin theorem.

</details>

### Exercise 7: Conjugate symmetry
<a id="julia-mandelbrot-sets-ex-7"></a>

Prove $p_{\bar c}^n(\bar z)=\overline{p_c^n(z)}$ by induction.

<details>
<summary>Hint 1</summary>

Conjugation commutes with addition and multiplication.

</details>

<details>
<summary>Hint 2</summary>

Use equality of conjugate moduli.

</details>

<details>
<summary>Solution</summary>

It holds at $n=0$. If it holds at $n$, squaring and adding $\bar c$ gives it at $n+1$. Conjugate iterates have equal modulus, so boundedness and exact escape times agree. This proves reflection symmetry of the parameter set and corresponding dynamical sets.

</details>

### Exercise 8: Fixed multiplier parameter
<a id="julia-mandelbrot-sets-ex-8"></a>

For a prescribed multiplier $\lambda$ with $|\lambda|<1$, derive the fixed point and parameter and prove local attraction.

<details>
<summary>Hint 1</summary>

Use $2a=\lambda$.

</details>

<details>
<summary>Hint 2</summary>

Expand the exact error at $a$.

</details>

<details>
<summary>Solution</summary>

The point is $a=\lambda/2$ and $c=a-a^2=\lambda/2-\lambda^2/4$. The error obeys $w_{n+1}=\lambda w_n+w_n^2$. On a disk of radius $\eta$ with $|\lambda|+\eta<1$, its magnitude contracts by that sum. Critical-orbit basin membership additionally uses the cited complex theorem.

</details>

### Exercise 9: Logistic conjugacy
<a id="julia-mandelbrot-sets-ex-9"></a>

Derive the quadratic parameter corresponding to logistic $r=2$ and $r=4$.

<details>
<summary>Hint 1</summary>

Use $c=r(2-r)/4$.

</details>

<details>
<summary>Hint 2</summary>

Track the affine state coordinate too.

</details>

<details>
<summary>Solution</summary>

At $r=2$, $c=0$ and $z=1-2x$. At $r=4$, $c=-2$ and $z=2-4x$, sending $[0,1]$ onto $[-2,2]$. The coordinate changes are invertible, so they conjugate the relevant real maps. They do not identify a real parameter line with the whole complex parameter plane.

</details>

### Exercise 10: Unresolved pixels
<a id="julia-mandelbrot-sets-ex-10"></a>

A floating-point orbit has not escaped after ten thousand iterations. What follows, and what would certify either outcome?

<details>
<summary>Hint 1</summary>

Finite nonescape is not boundedness for all time.

</details>

<details>
<summary>Hint 2</summary>

Use a rigorous escape enclosure or an invariant region.

</details>

<details>
<summary>Solution</summary>

Only finite nonescape was observed for the rounded parameter and arithmetic protocol. A rigorous enclosure wholly beyond the proved escape radius certifies nonmembership. An invariant bounded region containing the critical orbit can certify membership. Without either argument, the classification remains unresolved; the iteration cap alone proves neither membership nor boundary location.

</details>

## Sources

Original escape proofs, compactness arguments, exact examples and local fixed-point calculations. The unchanged [Fractals by Iteration](../../articles/fractals-by-iteration.md) is credited as introductory provenance; the new text makes exact-arithmetic and enclosure requirements explicit.

- John Milnor, [Dynamics in One Complex Variable, third edition](https://press.princeton.edu/books/paperback/9780691124889/dynamics-in-one-complex-variable); [author's introductory lectures](https://arxiv.org/abs/math/9201272). Cited for the equivalence of Julia-set definitions, the attracting-basin critical-point theorem and polynomial connectedness results.
- Adrien Douady and John H. Hubbard, [Étude dynamique des polynômes complexes](https://pi.math.cornell.edu/~hubbard/OrsayFrench.pdf), original Orsay notes, cited for the deeper Mandelbrot-set theory.

Normal-family theory, the connectedness criterion and connectedness of the Mandelbrot set are external results, not consequences claimed for the elementary escape calculation. No unresolved local-connectivity statement is asserted.

## Summary

Julia sets describe a fixed map's dynamical plane; the Mandelbrot set describes parameters through a critical orbit. Proved escape radii give finite exterior certificates, while invariant regions can give genuine interior certificates. Exact examples include the unit disk and circle at $c=0$ and the interval at $c=-2$. The richer connectivity theory is cited explicitly. The [final chapter](numerical-experiments.md) brings these proof boundaries into a general protocol for numerical dynamics.
