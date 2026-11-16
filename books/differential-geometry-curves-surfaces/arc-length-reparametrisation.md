
# Arc Length and Reparametrisation

A ruler measures chords, but a curved journey follows the route between their endpoints. The natural definition of length therefore begins with all inscribed polygonal journeys and asks for their supremum. Calculus then proves that this geometric definition equals an integral of speed. Defining length directly by that integral would hide the main justification: why does adding instantaneous velocity magnitudes recover what increasingly fine rulers measure?

This chapter proves the connection for $C^1$ curves on compact intervals, including curves that stop or retrace their image. Regularity is required later, when accumulated length becomes a differentiable coordinate. Keep these hypotheses separate. A curve can have a well-defined finite length without having a nonzero velocity at every parameter value.

## Polygonal length and its basic properties

**Definition 2.1 — Length.** For a continuous $\gamma:[a,b]\to\mathbb R^n$ and a partition $P=(a=t_0<t_1<\cdots<t_m=b)$, let

$$\ell_P(\gamma)=\sum_{i=1}^m\|\gamma(t_i)-\gamma(t_{i-1})\|.$$

The length $L(\gamma)$ is the supremum of these sums over all finite partitions. A curve is rectifiable when this supremum is finite. A constant curve and a curve on a one-point interval have length zero.

Refining a partition cannot decrease its polygonal sum: the triangle inequality says that replacing one chord by two chords can only increase the sum. Consequently a comparison can always use a common refinement. In particular $L(\gamma)\ge\|\gamma(b)-\gamma(a)\|$ by using the endpoint partition. The right side is displacement magnitude; it can vanish for a journey with positive length.

**Proposition 2.2 — Additivity.** If $a<c<b$, length on $[a,b]$ is the sum of the lengths of the two restricted curves, allowing infinite values.

**Proof.** Insert $c$ into any partition. The refined sum splits into a left and right sum, bounded above by the respective suprema. This proves the upper bound. Conversely choose separate partitions whose sums approach each finite supremum as closely as desired and join them at $c$. Their combined sum is a permitted sum on the full interval. This gives the reverse inequality, and also handles an infinite supremum by taking arbitrarily large finite sums on the relevant piece. $\square$

The definition counts a trip each time it is made. A curve traversing a segment forward and backward has twice its segment length, even though its image is just that segment. This is not an error in the definition: length belongs to the parametrized journey. To speak instead of the length of an image, one must control repeated traversal, usually by assuming simplicity except for the endpoint of a closed loop.

## The speed-integral theorem

We use the integral triangle inequality $\|\int f\|\le\int\|f\|$ for continuous vector functions. Here is a short proof. If $z=\int f$ is nonzero, take the unit vector $e=z/\|z\|$. Then $\|z\|=e\cdot z=\int e\cdot f\le\int\|f\|$ by Cauchy–Schwarz. If $z=0$, the inequality is immediate. Vector integrals throughout are ordinary componentwise Riemann integrals.

**Theorem 2.3 — Length equals accumulated speed.** If $\gamma:[a,b]\to\mathbb R^n$ is $C^1$, then it is rectifiable and

$$L(\gamma)=\int_a^b\|\gamma'(t)\|\,dt.$$

**Proof.** The Fundamental Theorem of Calculus gives each displacement as an integral of velocity. Applying the preceding triangle inequality on each subinterval shows $\ell_P\le\int_a^b\|\gamma'\|$ for every partition. This bounds the supremum and proves rectifiability.

For the other direction, let $\omega(h)$ be the supremum of $\|\gamma'(t)-\gamma'(u)\|$ over pairs in $[a,b]$ at distance at most $h$. Uniform continuity of $\gamma'$ gives $\omega(h)\to0$ as $h\downarrow0$. On a partition interval with left endpoint $t_i$ and width $\Delta_i$,

$$\left\|\gamma(t_i+\Delta_i)-\gamma(t_i)-\gamma'(t_i)\Delta_i\right\|
\le\omega(\|P\|)\Delta_i,$$

where $\|P\|$ is the maximum interval width. The reverse triangle inequality then bounds the difference between the chord length and $\|\gamma'(t_i)\|\Delta_i$ by that same quantity. Summing gives an error at most $\omega(\|P\|)(b-a)$. The speed Riemann sums converge to its integral as the mesh tends to zero, so the polygonal sums for any sequence of partitions with mesh tending to zero converge to that integral. Every such sum is at most $L(\gamma)$, proving the missing inequality. $\square$

The proof contains the uniform estimate absent from an informal statement that a short chord is approximately velocity times time. Pointwise differentiability alone does not provide one error bound for every subinterval of an arbitrarily fine partition. Continuous differentiability on a compact interval supplies exactly that control. More general rectifiability theories exist, but they are not assumed here.

The same formula holds piece by piece for a finite piecewise-$C^1$ curve, by additivity. At corners a single velocity need not exist, yet the finitely many adjacent lengths can still be added. A corner must be treated separately in curvature and turning formulas; the length formula does not remove that distinction.

## Changing clocks and constructing the distance coordinate

**Theorem 2.4 — Length invariance.** Let $\phi:[c,d]\to[a,b]$ be a $C^1$ monotone bijection and $\gamma$ a $C^1$ curve. Then $L(\gamma\circ\phi)=L(\gamma)$. The derivative of $\phi$ may vanish.

**Proof.** For an increasing $\phi$, its derivative is nonnegative and the chain rule gives speed $\|\gamma'(\phi(u))\|\phi'(u)$. Substitution yields equality of speed integrals. For decreasing $\phi$, the absolute derivative is $-\phi'$ and the reversed substitution endpoints cancel this sign. Alternatively, the increasing or decreasing homeomorphism carries partitions onto partitions in the corresponding order, preserving every chord sum. That second proof needs only continuity, monotonicity and bijectivity, not differentiability. $\square$

The image of the parameter interval and the number of traversals matter. A nonmonotone clock can backtrack; a clock whose image is a larger interval can add complete laps. Neither situation is covered by the theorem. Strictly monotone continuous maps with stationary derivatives remain legitimate for this length assertion even when they are not regular reparametrizations for differential calculations.

**Theorem 2.5 — Arc-length parameter.** For a regular $C^k$ curve $\gamma:I\to\mathbb R^n$, $k\ge1$, fix $t_0\in I$ and put

$$s(t)=\int_{t_0}^t\|\gamma'(u)\|\,du.$$

This signed accumulated length is strictly increasing, is $C^k$, and has a $C^k$ inverse on its image. The reparametrized curve $\alpha(s)=\gamma(t(s))$ has speed one.

**Proof.** The speed is positive and $C^{k-1}$, so $s'=v>0$. The scalar inverse theorem established in the preceding chapter applies on the image interval; its inverse derivative is $dt/ds=1/v(t(s))$. The chain rule gives $\alpha'=\gamma'/v=T$, whose norm is one. These local inverse statements agree globally because $s$ is strictly increasing. $\square$

The integral is signed when $t<t_0$: it is then negative. This convention makes $s$ an increasing coordinate on the entire interval. Actual length between two parameter values is $|s(t_2)-s(t_1)|$. Changing the basepoint adds a constant. Traversing the same regular route in the opposite direction gives a unit-speed parameter differing by a sign and a constant.

More precisely, if two unit-speed parametrizations are related by a regular change $s=\psi(r)$, the speed transformation yields $1=|\psi'|$. Its sign is constant, so integration gives $\psi(r)=r+C$ or $\psi(r)=-r+C$. There is no nonlinear regular clock that keeps unit speed. This uniqueness is one reason distance is the preferred parameter for curvature.

## Worked examples

### Worked example 1 — A line with backtracking

Take $\gamma(t)=(t^2,0)$ for $-1\le t\le1$. Both endpoints are $(1,0)$, so displacement is zero. The speed is $2|t|$, and the length theorem gives

$$L=\int_{-1}^0(-2t)\,dt+\int_0^1 2t\,dt=2.$$

This agrees with travelling from $(1,0)$ to the origin and back. The curve is not regular at zero. Accumulated length from $-1$ is $s(t)=1-t^2$ on the first half and $s(t)=1+t^2$ on the second. Although it increases overall, its inverse does not produce a differentiable unit tangent at the turnaround: the direction jumps from left to right. The regularity hypothesis of the arc-length theorem correctly excludes this case.

### Worked example 2 — A helix at unit speed

For $a>0$ and real $b$, let $\gamma(t)=(a\cos t,a\sin t,bt)$. Its velocity has constant norm $c=\sqrt{a^2+b^2}>0$. With basepoint zero, $s=ct$, so

$$\alpha(s)=(a\cos(s/c),a\sin(s/c),bs/c).$$

Differentiating gives squared speed $(a^2+b^2)/c^2=1$. On a parameter interval of width $T$, the original journey has length $cT$. If $b=0$, one complete revolution has length $2\pi a$; if $b\ne0$, the same angular revolution rises by $2\pi b$ and has longer length $2\pi\sqrt{a^2+b^2}$. The distance parameter exists in both cases and does not require the curve to close.

### Worked example 3 — Arc length without an elementary inverse

The parabola $\gamma(t)=(t,t^2)$ is regular everywhere, with speed $\sqrt{1+4t^2}$. From zero its distance coordinate is

$$s(t)=\frac t2\sqrt{1+4t^2}+\frac14\operatorname{asinh}(2t).$$

Differentiation verifies $s'(t)=\sqrt{1+4t^2}$. This is strictly positive, so the inverse exists and is differentiable even though an elementary closed formula for it is not required or supplied. Writing $\alpha(s)=\gamma(t(s))$ is a mathematically complete unit-speed description. Existence of a geometric parameter does not promise a convenient symbolic expression. Calculations can often use $d/ds=(1/v)d/dt$ without solving for that inverse explicitly.

## Limits and misconceptions

Length invariance does not mean speed invariance. The timing may change speed at every point while preserving the accumulated integral. Nor is the distance coordinate the Euclidean distance from one fixed endpoint: a winding curve can pass near its start after travelling a long distance. The integral records progress along the ordered route.

Regularity is also a local condition rather than a compactness assumption. On a noncompact parameter interval the total length can be finite or infinite. The curve $\gamma(t)=(e^{-t},0)$, $t>0$, is regular and has finite total length one, while $\gamma(t)=(t,0)$ has infinite length. Arc-length normalization applies on the image of the accumulated-length function, which may itself be a bounded interval even when the original parameter interval is unbounded.

## Worked example — When a missing endpoint survives normalization

Take the regular curve $\gamma(t)=(e^{-t},0)$ for positive $t$, and choose the basepoint parameter one. Its signed distance coordinate is

$$s(t)=e^{-1}-e^{-t}.$$

This maps the open parameter interval onto $(e^{-1}-1,e^{-1})$. Its inverse is $t=-\log(e^{-1}-s)$, so the unit-speed curve becomes $\alpha(s)=(e^{-1}-s,0)$. Its derivative is the constant vector pointing left. The original infinite amount of parameter time has become a finite distance interval, exactly as the speed integral predicts.

There are two separate endpoint questions. The normalized formula extends smoothly through either endpoint as a straight line in the ambient plane. But the original map has neither parameter endpoint, and its image omits both limiting points of the segment. The arc-length theorem supplies a parametrization of the same journey, not a rule to add those image points. If the ambient space were the plane with the origin deleted, even the continuous extension at the right endpoint would fail to take values in that ambient space. Regular normalization therefore implies neither completeness of the route nor an extension inside a prescribed target. It only controls the speed on the actual distance interval. No singular velocity is responsible for the finite endpoint in this example: the normalized velocity is perfectly regular there.

## A distance parameter need not descend to the image

The unit circle has regular unit-speed parametrization $(\cos s,\sin s)$ on a full-turn interval. Its endpoints have the same image but different parameter values. Hence no single-valued real function on the image can assign to each point this accumulated distance from the initial visit. A second traversal assigns different distances to every repeated point, despite maintaining unit speed throughout.

Arc length is a coordinate on the ordered parameter interval, not automatically a global coordinate on the image. Restricting to a short injective arc permits that identification; closing the route or adding a traversal removes it. This distinction involves global injectivity rather than zero velocity or a defective local inverse for the distance clock. It also explains why the distance traveled around a loop can be positive while the endpoint displacement and the distance from the final image point to the initial image point are both zero.

## Exercises

### Exercise 2.1
<a id="arc-length-reparametrisation-ex-1"></a>
Prove directly from partitions that a straight segment traversed affinely has its endpoint distance as length.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
All displacement vectors are nonnegative multiples of one fixed vector.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The scalar interval widths telescope.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
For $\gamma(t)=p+tq$ on $[a,b]$, each chord is $(t_i-t_{i-1})q$ and has norm $(t_i-t_{i-1})\|q\|$. Every polygonal sum is therefore $(b-a)\|q\|$, which also equals the norm of the endpoint difference. Taking the supremum changes nothing. The case $q=0$ is included and gives zero. No differentiability theorem is needed for this partition calculation.
</details>

### Exercise 2.2
<a id="arc-length-reparametrisation-ex-2"></a>
Find the length of $(3\cos t,3\sin t)$ for $0\le t\le\pi/2$ and explain the role of the interval.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Compute the constant speed.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The interval describes only one quarter of a revolution.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The velocity is $(-3\sin t,3\cos t)$ and its norm is three. Hence $L=3(\pi/2)=3\pi/2$. The image is the radius-three quarter-circle in the first quadrant. Extending the parameter interval to $[0,2\pi]$ would produce a full circumference $6\pi$, not the same journey. The speed alone does not determine length without the integration interval.
</details>

### Exercise 2.3
<a id="arc-length-reparametrisation-ex-3"></a>
Give a $C^1$ curve of positive length with zero endpoint displacement, and calculate both quantities.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
A full circle or a backtracking line works.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
For a unit circle use one complete angular period.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
Take $(\cos t,\sin t)$ on $[0,2\pi]$. The endpoint positions coincide, so their difference has norm zero. Its speed is one, so its length is $2\pi$. All regularity hypotheses hold. This also proves that even a regular curve's length cannot in general be recovered from its endpoints. The route between the endpoints carries essential information.
</details>

### Exercise 2.4
<a id="arc-length-reparametrisation-ex-4"></a>
Verify length invariance for $\gamma(s)=(3s,4s)$, $0\le s\le1$, under $s=u^2$, $0\le u\le1$. Is the new curve regular everywhere?
<details data-euler-reveal="hint"><summary>Hint 1</summary>
The old speed is five.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The new speed is the old speed multiplied by $2u$.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The new curve is $(3u^2,4u^2)$ and has velocity $(6u,8u)$ of speed $10u$. Its length is $\int_0^1 10u\,du=5$, equal to the old length. At zero its velocity vanishes, so it is not regular there. Length invariance permits this monotone clock with a stationary derivative; the stronger regular-reparametrization theorem would exclude the stationary endpoint.
</details>

### Exercise 2.5
<a id="arc-length-reparametrisation-ex-5"></a>
Construct a unit-speed parametrization of $(2\cos t,2\sin t,3t)$.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Its speed is a positive constant.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Replace $t$ by accumulated length divided by that constant.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The velocity has squared norm $4+9=13$. Set $s=\sqrt{13}\,t$. Then $\alpha(s)=(2\cos(s/\sqrt{13}),2\sin(s/\sqrt{13}),3s/\sqrt{13})$. Its derivative has squared norm $(4+9)/13=1$, so it is unit speed. The allowed range of $s$ is the original range of $t$ multiplied by $\sqrt{13}$; it must be transformed along with the formula.
</details>

### Exercise 2.6
<a id="arc-length-reparametrisation-ex-6"></a>
Prove that two regularly related unit-speed parameters differ by a sign and an additive constant.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Use the speed transformation for the relating map.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
A continuous nonzero derivative has constant sign.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
If $\beta(r)=\alpha(\psi(r))$ and both speeds equal one, then $1=|\psi'(r)|$. Continuity and nonvanishing make the derivative's sign constant on the interval. Thus $\psi'$ is identically one or identically minus one. Integrating gives $\psi(r)=r+C$ or $-r+C$. The conclusion assumes the parametrizations are related by a regular change; it does not identify arbitrary different traversals of one image.
</details>

### Exercise 2.7
<a id="arc-length-reparametrisation-ex-7"></a>
For a regular curve show that its distance coordinate is strictly increasing, even without a positive lower speed bound on the entire interval.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Compare any two fixed parameter values.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The continuous positive speed has positive integral on that compact subinterval.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
For $t_1<t_2$, $s(t_2)-s(t_1)=\int_{t_1}^{t_2}v(t)\,dt$. On this compact subinterval the continuous positive function $v$ has a positive minimum, so the integral is strictly positive. Such a minimum may depend on the chosen subinterval. No common positive bound over an unbounded original interval is required to conclude strict monotonicity.
</details>

### Exercise 2.8
<a id="arc-length-reparametrisation-ex-8"></a>
Explain the error in proving the length theorem solely by saying each chord is approximately velocity times its interval width.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
The number of intervals grows as the partition is refined.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Identify a bound for the sum of all approximation errors.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
A pointwise approximation does not control the accumulated error over increasingly many intervals. The proof needs a uniform modulus of continuity $\omega$ for the derivative. The error on each interval is at most $\omega(\|P\|)\Delta_i$, and summing gives $\omega(\|P\|)(b-a)\to0$. This one estimate validates passing from all local chord approximations to the global integral. Without a uniform bound, the informal step is incomplete.
</details>

### Exercise 2.9
<a id="arc-length-reparametrisation-ex-9"></a>
Find the total length of $\gamma(t)=(e^{-t},0)$, $t\ge0$, and its distance coordinate from zero. Describe the new parameter range.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
The speed is $e^{-t}$.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Its integral approaches a finite limit without attaining it.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The length on $[0,T]$ is $1-e^{-T}$, so the total length, defined as the supremum over finite terminal times, is one. The distance coordinate is $s=1-e^{-t}$ with range $[0,1)$. The inverse is $t=-\log(1-s)$, and the unit-speed curve is $(1-s,0)$. Its missing endpoint corresponds to $t\to\infty$; the coordinate construction does not automatically adjoin that limiting point.
</details>

### Exercise 2.10
<a id="arc-length-reparametrisation-ex-10"></a>
Prove length is unchanged by any Euclidean rigid motion, and is multiplied by $|c|$ under multiplication of all positions by a real scalar $c$.
<details data-euler-reveal="hint"><summary>Hint 1</summary>
Use chord differences, where translations cancel.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Orthogonal matrices preserve the norm of every vector.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
For $\eta=Q\gamma+b$ with $Q$ orthogonal, each chord difference is $Q$ times the old difference and has the same norm. Thus every partition sum and its supremum agree. For $\eta=c\gamma$, each chord norm is multiplied by $|c|$, so the supremum is also multiplied by $|c|$. If $c=0$, the new curve is constant and has length zero, consistent with the formula even though it is no longer regular.
</details>

## Sources

Original Euler prose and exercises, CC BY-SA 4.0. The preserved [Unhurried arc-length reading](../../apps/unhurried/articles/ga-dg-arc-length/index.html) motivates the polygonal definition; this chapter supplies the uniform-error proof and normalization in full. A primary reference for the classical subject is Sucharit Sarkar's [UCLA notes](https://www.math.ucla.edu/~sucharit/120A-notes.html), Lecture 2. The local Quarto Calculus Chapter 28 remains an unchanged companion.

## Summary

Length is the supremum of polygonal chord sums, and continuous velocity makes that supremum equal the speed integral. Monotone single-traversal changes of clock preserve length, including some changes with pauses. Regularity makes accumulated length a differentiable coordinate and produces unit speed, uniquely up to a sign and translation among regularly related parameters. The next chapter measures how the tangent direction changes per unit of this distance.
