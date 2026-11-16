
# One-dimensional Maps and the Logistic Family

A population counted once per breeding season leads naturally to a recurrence rather than a differential equation. The next census may depend on the present census through a nonlinear function. That change in the modelling clock has large mathematical consequences. A scalar autonomous differential equation cannot have a nonconstant periodic orbit: uniqueness prevents a trajectory from reversing through an equilibrium. A scalar recurrence can alternate between two values, visit a longer cycle, or support complicated invariant dynamics.

Our running family is $f_r(x)=rx(1-x)$. The state $x$ is dimensionless and the parameter $r$ is held fixed while we iterate. We will prove an invariant interval, derive fixed points, establish their local stability, and compute the first genuine two-cycle. These calculations supply exact landmarks for the logistic-map laboratory. Its pictures are useful questions to investigate; the proofs explain what follows from the formula itself.

Required preparation is differentiation, continuity, the mean value theorem and [flows and maps](flows-and-maps.md). For continuous-time preparation, use [linear systems and matrix exponential](../ode-first-course/linear-systems-matrix-exponential.md) and [linear phase plane](../ode-first-course/linear-phase-plane.md). Complex dynamics later supplies a second interpretation of this quadratic family.

## Iteration, periodicity and the state space

**Definition 9.1 (Orbit and least period).** For a map $f:X\to X$ and $x_0\in X$, the forward orbit is $x_n=f^n(x_0)$, where $f^0$ is the identity and $f^{n+1}=f\circ f^n$. A point has least period $p\ge1$ if $f^p(x)=x$ and no smaller positive integer has that property. A fixed point has least period one. A set $K$ is forward invariant if $f(K)\subseteq K$.

Specifying $X$ is part of a dynamical problem. The same polynomial can act on the real line, on an invariant interval or on the complex plane. Attraction in one space does not automatically describe the others. We begin with $X=[0,1]$ and $0\le r\le4$. Other parameter values need separate treatment because the chosen interval need not contain every future state.

**Proposition 9.2 (Logistic invariant interval).** If $0\le r\le4$, then $f_r([0,1])\subseteq[0,1]$.

*Proof.* On the interval, $x(1-x)\ge0$ and
$$x(1-x)=\frac14-\left(x-\frac12\right)^2\le\frac14.$$
Therefore $0\le f_r(x)\le r/4\le1$. Induction keeps every iterate in the interval. If $r>4$, the starting value $1/2$ maps to $r/4>1$, so invariance of this whole interval fails. ∎

This is a global statement about every point of a specified interval. It does not say that all points have the same limiting behaviour. Zero remains fixed for every parameter, and one maps directly to zero. Such exceptional starting states matter mathematically even when an informal random experiment rarely encounters them.

A cobweb alternates between the graph $y=f_r(x)$ and the diagonal $y=x$. The vertical move evaluates the function; the horizontal move reuses that output as the next input. Intersections with the diagonal are fixed points. A staircase approaching an intersection suggests attraction, but a picture alone neither bounds a basin nor proves an infinite-time limit. A derivative estimate turns its geometric slope information into an argument.

## The strict multiplier criterion

**Theorem 9.3 (Local multiplier test).** Suppose $f$ is continuously differentiable on an open interval containing a fixed point $a$. If $|f'(a)|<1$, then all sufficiently close initial states converge to $a$, with a geometric bound. If $|f'(a)|>1$, there is a neighbourhood from which every other point eventually exits.

*Proof.* In the first case choose $|f'(a)|<q<1$. Continuity supplies a symmetric closed interval $I$ about $a$ on which $|f'|\le q$. The mean value theorem gives
$$|f(x)-a|=|f(x)-f(a)|\le q|x-a|.$$
Thus $f(I)\subseteq I$ and $|f^n(x)-a|\le q^n|x-a|$. This proves attraction and stability.

In the second case choose $1<q<|f'(a)|$. On a small interval $I$ the derivative has constant sign and magnitude at least $q$. The mean value theorem gives $|f(x)-a|\ge q|x-a|$. A distinct point staying in $I$ forever would have distance at least $q^n|x-a|$, contradicting the bounded width of $I$. It must exit. The argument makes no statement about its behaviour after exit; a global map might return it later. ∎

The strict inequalities are essential. At derivative one or minus one, a first-order estimate does not classify the fixed point. The maps $x-x^3$ and $x+x^3$ both have derivative one at zero, but the first attracts small real states and the second repels them. Negative derivatives explain alternating errors: near a fixed point where the derivative is negative, points on opposite sides are exchanged by one step. A positive derivative below one gives local approach from the same side.

For the logistic family,
$$f_r(x)-x=x((r-1)-rx).$$
There is always the fixed point zero. For $r>0$ the other fixed point is $a_r=1-1/r$, belonging to $[0,1]$ precisely for $r\ge1$. Their derivatives are
$$f_r'(0)=r,\qquad f_r'(a_r)=2-r.$$
Zero is locally attracting for $0\le r<1$. The nonzero fixed point is locally attracting for $1<r<3$ and locally repelling for $r>3$. The collision at $r=1$ and loss of strict stability at $r=3$ require information beyond this strict test.

**Example 9.4 (An explicit attracting neighbourhood).** Take $r=5/2$, so $a_r=3/5$. On $I=[11/20,13/20]$, the derivative $f_r'(x)=(5/2)(1-2x)$ ranges from $-1/4$ to $-3/4$. Hence $|f_r'|\le3/4$. Because the interval is symmetric about the fixed point, the mean value bound proves $f_r(I)\subseteq I$. Every starting state in $I$ has error after $n$ iterations at most $(3/4)^n$ times its original error. The derivative at the fixed point is actually $-1/2$, so the asymptotic rate is better than this safe uniform neighbourhood estimate. The negative derivative also explains why the errors alternate. A bound valid at every step and a limiting multiplier answer related but different questions.

**Proposition 9.5 (Extinction below the first threshold).** If $0\le r\le1$, all logistic orbits starting in $[0,1]$ tend to zero.

*Proof.* For $r<1$, $0\le x_{n+1}\le rx_n$, so induction gives $x_n\le r^nx_0$. For $r=1$, the sequence is nonnegative and decreasing because $x_{n+1}=x_n(1-x_n)\le x_n$. Its limit $\ell$ satisfies $\ell=\ell(1-\ell)$ by continuity, forcing $\ell=0$. Both endpoints of the interval are included. ∎

At $r=1$ the derivative at zero is one, yet convergence still occurs. A finite display may confuse its slow approach with neutral behaviour. This is one reason to keep the endpoint case visible rather than silently extending an open stability interval.

## Deriving the first two-cycle

A two-cycle consists of distinct states $u,v$ with $f_r(u)=v$ and $f_r(v)=u$. The equation $f_r^2(x)=x$ also includes every fixed point, so solving it is only the beginning. We must remove those fixed points and check that the remaining roots are real and distinct.

**Theorem 9.6 (Logistic two-cycle).** For $3<r\le4$, the numbers
$$
u_r=\frac{r+1-\sqrt{(r-3)(r+1)}}{2r},\qquad
v_r=\frac{r+1+\sqrt{(r-3)(r+1)}}{2r}
$$
form a least-period-two orbit in $[0,1]$. Its two-step multiplier is $\mu_2=4+2r-r^2$. It is locally attracting for $3<r<1+\sqrt6$ and locally repelling for $1+\sqrt6<r\le4$.

*Proof.* Expansion gives
$$
f_r^2(x)-x=-x(rx-r+1)
\bigl(r^2x^2-r(r+1)x+r+1\bigr).
$$
The quadratic factor has discriminant $r^2(r+1)(r-3)$, giving the stated roots. Their sum and product are $(r+1)/r$ and $(r+1)/r^2$. They are distinct and positive for $r>3$. The larger is below one: the required inequality $\sqrt{(r-3)(r+1)}<r-1$ follows by squaring positive quantities and comparing $r^2-2r-3$ with $r^2-2r+1$. Neither root is zero, and inserting $(r-1)/r$ into the quadratic gives $3-r$, nonzero for $r>3$. Thus neither root is fixed; since both solve $f_r^2(x)=x$, the map swaps them.

The product of derivatives becomes
$$
r^2(1-2u_r)(1-2v_r)
=r^2\left(1-\frac{2(r+1)}r+\frac{4(r+1)}{r^2}\right)
=4+2r-r^2.
$$
Apply the strict multiplier test to $f_r^2$ at each point. Solving $-1<4+2r-r^2<1$ for $r>3$ gives $3<r<1+\sqrt6$. Magnitude greater than one gives repulsion. Equality remains outside the test. ∎

At $r=3$ the two roots coalesce with $2/3$, precisely where the fixed-point multiplier reaches minus one. We have proved the first doubling directly. This finite calculation does not prove an infinite cascade, the nature of its accumulation point or a universal scaling ratio. Those claims need the additional theorems in the next chapter.

**Example 9.7 (An attracting alternating population).** At $r=16/5$,
$$u=\frac{21-\sqrt{21}}{32},\qquad v=\frac{21+\sqrt{21}}{32},$$
approximately $0.5130$ and $0.7995$. The two-step multiplier is $4+32/5-256/25=4/25$. Consequently nearby even iterates approach one cycle point while odd iterates approach the other. The multiplier is positive over a complete circuit, so the error after two steps retains its sign locally. This does not require the one-step errors to retain their signs. To assess a table showing two persistent values, compare with the exact cycle equations and the two-step derivative rather than treating each value as a fixed point of the original map.

The basin can be much larger than the neighbourhood supplied by this proof. Describing it completely is a separate global problem. A starting point close to a repelling fixed point may also spend a long time near that point before moving towards another attracting set. The length of such a transient depends strongly on initial distance and parameter, which complicates any fixed choice of discarded iterations.

## Exact structure at parameter four

Let $D(\theta)=2\theta\pmod1$ on the circle and $h(\theta)=\sin^2(\pi\theta)$. The double-angle identity yields
$$f_4(h(\theta))=4\sin^2(\pi\theta)\cos^2(\pi\theta)=h(D(\theta)).$$
The continuous map $h$ is onto $[0,1]$, but $\theta$ and $1-\theta$ have the same image. This is a semiconjugacy, or factor relation, not a circle-to-interval conjugacy. It sends angle orbits to logistic orbits while sometimes identifying distinct states.

**Example 9.8 (Exceptional orbit and collapsed period).** At $r=4$, the critical point has orbit $1/2,1,0,0,\ldots$. An eventually fixed orbit therefore exists at a parameter often described informally as chaotic. For a different exact construction, doubling sends $1/5$ through $1/5,2/5,4/5,3/5,1/5$. The first and third angles have the same $h$-image, as do the second and fourth. Their images form a two-cycle, not a four-cycle. This agrees with the algebraic two-cycle formula at $r=4$. The least period drops because the factor map is not injective. Neither the critical orbit nor this periodic orbit can stand for all starting states.

If measure theory is available, the factor relation also constructs an invariant probability. Uniform circle measure is preserved by doubling: the preimage of an interval is the union of two intervals with half its length, and the equality extends to Borel sets. Its pushforward under $h$ is therefore $f_4$-invariant. For $0<x<1$, there are two angle preimages, each with derivative magnitude $2\pi\sqrt{x(1-x)}$. The change-of-variables formula gives
$$\rho(x)=\frac1{\pi\sqrt{x(1-x)}}.$$
Substituting $x=\sin^2t$ normalizes its integral to one. This density favours values near the endpoints; a uniform histogram in $x$ is not its prediction. Invariance alone does not prove that each starting state samples this density. The exceptional orbits already disprove a universal assertion of that kind. Almost-everywhere statistical conclusions need their own hypotheses and results.

## Reading experiments against exact landmarks

The laboratory discards a finite transient and retains a finite orbit at each sampled parameter. Both choices affect its cloud. A slowly converging orbit can remain transient beyond the discard length. A long periodic cycle may look like a scattered band, while rounding can create an artificial short cycle. Record the parameter, starting state, discarded length, retained length and arithmetic whenever describing an observation.

The derivative product supplies a separate finite diagnostic:
$$
\frac1N\log |(f_r^N)'(x_0)|
=\frac1N\sum_{j=0}^{N-1}\log|r(1-2x_j)|,
$$
provided none of these derivatives vanishes. If one vanishes, the derivative product is zero and its logarithm is negative infinity. A positive finite average reports finite tangent growth. It does not establish an asymptotic exponent, ergodicity or a chaotic attractor. The [chaos chapter](chaos-lyapunov-exponents-horseshoe.md) develops precise alternatives and explains why the distinction is substantive.

There is a useful order to exploration. First identify a state space that contains the orbits under consideration. Next derive exact fixed points and cycles where possible. Then use uniform derivative bounds for strict local conclusions. Finally use diagrams to search for features not yet explained. This order catches implementation mistakes: a simulation claiming that every point in our explicit attracting interval at $r=5/2$ escapes contradicts a proved estimate.

Finally, the recurrence is a mathematical model rather than an automatic biological law. Changing the census interval, density dependence or immigration term changes the map. States leaving the intended range may indicate that the model assumptions have failed. Precise modelling nevertheless pays off: a cycle satisfies explicit equations, a basin is a specified set, and a stability bound has both a neighbourhood and a rate. These distinctions make a numerical investigation more informative because each observation can be compared with a well-posed mathematical question.

## A global basin proof in a restricted parameter range

**Proposition 9.9 (Global attraction for the first monotone regime).** If $1<r\le2$, every orbit starting in $(0,1)$ converges to $a_r=1-1/r$. The excluded endpoints are eventually zero.

*Proof.* After one step, an interior point belongs to $(0,r/4]\subseteq(0,1/2]$. The fixed point also belongs to $(0,1/2]$. On $[0,1/2]$ the map is increasing, and
$f_r(x)-x=rx(a_r-x).$
If $0<x<a_r$, the next point is larger than $x$ but at most $f_r(a_r)=a_r$. If $a_r<x\le1/2$, the next point is smaller than $x$ but at least $a_r$. Thus from the first iterate onward the orbit is either increasing below $a_r$, decreasing above it, or already fixed. In either monotone case it has a limit, which must be a fixed point by continuity. Its positive starting bound rules out zero in the increasing case; the lower bound $a_r>0$ rules it out in the decreasing case. Therefore the limit is $a_r$. The endpoint zero is fixed and one maps to zero. ∎

This proof supplies more information than the strict local multiplier test, but over a smaller parameter range. Local attraction held for every $1<r<3$; the global argument used monotonicity on a particular half-interval and therefore stopped at two. Extending a proof beyond a step where one of its inequalities fails is not justified merely because a numerical diagram looks similar.

The example also clarifies the language of a basin. In this restricted range, the basin of $a_r$ relative to $[0,1]$ is exactly the open interval $(0,1)$. It is large in the state space but omits two exact initial values. A statement that “the population converges to the positive fixed point” should retain that initial-condition qualification. In applications, uncertainty intervals touching an exceptional state can matter even when the centre of the interval belongs to the attracting basin.

Finally, monotone convergence does not give one uniform geometric rate over all parameters and starting points. As the parameter approaches a stability boundary or an initial point approaches an exceptional state, transient lengths may change substantially. Basin membership, eventual convergence and a finite-time error guarantee are distinct pieces of information. The local derivative estimate and this global order argument complement one another precisely because they establish different pieces.

## Exercises

### Exercise 1: Interval boundary
<a id="one-dimensional-maps-logistic-family-ex-1"></a>

Show invariance of $[0,1]$ for $r=4$ and its failure for $r=9/2$.

<details>
<summary>Hint 1</summary>

Find the maximum of $x(1-x)$.

</details>

<details>
<summary>Hint 2</summary>

Evaluate at $1/2$.

</details>

<details>
<summary>Solution</summary>

For $r=4$, $0\le4x(1-x)\le1$ on the interval. At $r=9/2$, the critical point maps to $9/8>1$, disproving invariance of the whole interval. This does not say that every initial point leaves it; zero remains fixed.

</details>

### Exercise 2: Extinction estimate
<a id="one-dimensional-maps-logistic-family-ex-2"></a>

At $r=3/4$, bound $x_n$ for any $x_0\in[0,1]$. Give a sufficient condition on $n$ for $x_n\le10^{-3}$.

<details>
<summary>Hint 1</summary>

Discard the factor $1-x_n$ in an upper estimate.

</details>

<details>
<summary>Hint 2</summary>

Iterate $x_{n+1}\le(3/4)x_n$.

</details>

<details>
<summary>Solution</summary>

Induction gives $x_n\le(3/4)^nx_0\le(3/4)^n$. Any integer $n\ge\lceil\log(10^{-3})/\log(3/4)\rceil$ is sufficient. The estimate is uniform and may be conservative, especially for endpoints mapping immediately to zero.

</details>

### Exercise 3: Alternating attraction
<a id="one-dimensional-maps-logistic-family-ex-3"></a>

Find the nonzero fixed point and multiplier at $r=14/5$. Explain alternating local convergence.

<details>
<summary>Hint 1</summary>

Use $a_r=1-1/r$.

</details>

<details>
<summary>Hint 2</summary>

A negative derivative reverses the side of a small error.

</details>

<details>
<summary>Solution</summary>

The point is $9/14$, and its derivative is $2-14/5=-4/5$. On a sufficiently small interval the derivative stays negative with magnitude below one. The mean value theorem then contracts the error and reverses its sign at each step, so convergence is locally alternating.

</details>

### Exercise 4: Neutral derivative
<a id="one-dimensional-maps-logistic-family-ex-4"></a>

Prove that zero attracts small states for $f(x)=x-x^3$ and repels them for $g(x)=x+x^3$, despite both derivatives being one.

<details>
<summary>Hint 1</summary>

Compare absolute values for $0<|x|<1$.

</details>

<details>
<summary>Hint 2</summary>

Use a limiting equation if an orbit stays bounded in a small interval.

</details>

<details>
<summary>Solution</summary>

For $f$, signs remain fixed and absolute values decrease, with limit $\ell$ satisfying $\ell=\ell(1-\ell^2)$; hence $\ell=0$. For $g$, absolute values strictly increase. Remaining forever in a small interval would give a positive limit with $\ell=\ell(1+\ell^2)$, impossible. Thus every nearby nonzero state eventually exits that interval.

</details>

### Exercise 5: An unstable two-cycle
<a id="one-dimensional-maps-logistic-family-ex-5"></a>

Compute the two-cycle at $r=7/2$ and classify it.

<details>
<summary>Hint 1</summary>

Use the quadratic-root formula from the theorem.

</details>

<details>
<summary>Hint 2</summary>

Evaluate the simplified multiplier instead of multiplying numerical slopes.

</details>

<details>
<summary>Solution</summary>

The points are $3/7$ and $6/7$. They are distinct and belong to $(0,1)$. Their two-step multiplier is $4+7-49/4=-5/4$. Its magnitude exceeds one, so this cycle is locally repelling under the second iterate. The calculation leaves other attracting sets open.

</details>

### Exercise 6: Second threshold
<a id="one-dimensional-maps-logistic-family-ex-6"></a>

Derive $1+\sqrt6$ as the upper endpoint of strict two-cycle stability. What is proved at equality?

<details>
<summary>Hint 1</summary>

Set the multiplier equal to minus one.

</details>

<details>
<summary>Hint 2</summary>

Solve $r^2-2r-5=0$ with $r>3$.

</details>

<details>
<summary>Solution</summary>

The multiplier decreases from one on $r>3$ and equals minus one at $r=1+\sqrt6$. Its magnitude is below one between the thresholds. At equality the strict derivative theorem gives no classification; higher-order analysis would be needed to decide the endpoint itself.

</details>

### Exercise 7: Factor versus conjugacy
<a id="one-dimensional-maps-logistic-family-ex-7"></a>

Verify the trigonometric factor relation and explain why least periods can drop.

<details>
<summary>Hint 1</summary>

Use $\sin(2t)=2\sin t\cos t$.

</details>

<details>
<summary>Hint 2</summary>

Compare $h(\theta)$ with $h(1-\theta)$.

</details>

<details>
<summary>Solution</summary>

The relation is $4\sin^2(\pi\theta)\cos^2(\pi\theta)=\sin^2(2\pi\theta)$. But $h$ identifies the generally distinct angles $\theta$ and $1-\theta$. It is onto but not a homeomorphism. Different orbit points can therefore share an image, allowing the image orbit to have a smaller least period.

</details>

### Exercise 8: Two exceptional orbits
<a id="one-dimensional-maps-logistic-family-ex-8"></a>

Compute the parameter-four orbits from $3/4$ and $1/2$. Why do these not determine a typical orbit?

<details>
<summary>Hint 1</summary>

Evaluate exactly.

</details>

<details>
<summary>Hint 2</summary>

A statement about typicality needs a probability measure.

</details>

<details>
<summary>Solution</summary>

The first is fixed because $4(3/4)(1/4)=3/4$. The second is $1/2,1,0,0,\ldots$. They show that not every state has complicated motion, but do not establish how frequent such exceptions are. A typicality claim requires a specified measure and a theorem about almost every state.

</details>

### Exercise 9: Density integral
<a id="one-dimensional-maps-logistic-family-ex-9"></a>

Normalize $1/[\pi\sqrt{x(1-x)}]$ on $(0,1)$.

<details>
<summary>Hint 1</summary>

Set $x=\sin^2t$.

</details>

<details>
<summary>Hint 2</summary>

The Jacobian cancels the square root.

</details>

<details>
<summary>Solution</summary>

The improper integral equals $(2/\pi)\int_0^{\pi/2}dt=1$. Thus the endpoint singularities are integrable. This proves normalisation, not invariance by itself. Invariance additionally follows from uniform angle measure and the factor relation described in the chapter.

</details>

### Exercise 10: Finite clusters
<a id="one-dimensional-maps-logistic-family-ex-10"></a>

An orbit forms two clusters after 200 discarded and 100 retained iterations. Give a defensible report and two further investigations.

<details>
<summary>Hint 1</summary>

Describe the finite protocol exactly.

</details>

<details>
<summary>Hint 2</summary>

Compare with exact roots and change horizon or arithmetic.

</details>

<details>
<summary>Solution</summary>

Report the exact parameter, starting state, arithmetic and both lengths, describing two observed clusters. Compare their locations with the nonfixed roots of $f_r^2(x)-x$ and compute the cycle multiplier. Repeat with longer horizons and increased precision or validated error bounds. The finite clusters alone do not certify least period, a basin or an infinite-time limit.

</details>

## Sources

Original exposition and elementary proofs. The unchanged logistic-map lab supplies the linked experiment. The logistic factor and invariant-density discussion acknowledges [Chaos, Symbolic Dynamics, and Entropy](../differential-equations-verified-dynamics/chaos-symbolic-entropy.md), whose source and exercises remain available.

- Steven H. Strogatz, [Nonlinear Dynamics and Chaos, third edition](https://www.routledge.com/Nonlinear-Dynamics-and-Chaos/Strogatz/p/book/9780367026509), benchmark for maps and bifurcations.
- Morris W. Hirsch, Stephen Smale and Robert L. Devaney, [Differential Equations, Dynamical Systems, and an Introduction to Chaos, third edition](https://doi.org/10.1016/C2009-0-61160-0), benchmark for continuous and discrete dynamics.

The density argument uses the standard integral change-of-variables theorem. Almost-everywhere sampling and ergodicity are not established here.

## Summary

Scalar iteration admits cycles unavailable to scalar autonomous flows. The logistic interval is invariant for $0\le r\le4$, strict derivative bounds prove local stability, and the first two-cycle can be derived exactly. The parameter-four factor explains both rich dynamics and exceptional orbits. The [next chapter](period-doubling-sharkovskii-feigenbaum.md) separates the proved first doubling from deeper results about periods and universal scaling.
