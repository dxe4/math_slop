
# One-Dimensional Flows and Bifurcations

In one dimension, order can replace an explicit solution formula. A unique scalar trajectory cannot cross another trajectory, and the sign of the vector field determines its direction between equilibria. These simple facts give invariant intervals, convergence, and parameter-dependent changes of phase portrait. They also expose the difference between a stable equilibrium and one that attracts only from one side.

Read [flows and maps](flows-and-maps.md) and the ODE course's [phase-line chapter](../ode-first-course/phase-lines-equilibria.md). The aim is to develop nonlinear conclusions and bifurcation examples, while keeping maximal intervals and uniqueness hypotheses explicit. Unless another domain is stated, let $f$ be continuously differentiable on an open interval $I$.

## Order is a consequence of uniqueness

**Theorem 2.1 (Order preservation).** If $x_0<y_0$ and $x,y$ solve the same scalar autonomous equation $x'=f(x)$, then $x(t)<y(t)$ throughout their common time interval.

*Proof.* If their values ever agree, uniqueness through that meeting value makes the two solutions agree on a neighbourhood of the meeting time. The set of agreement extends throughout their common connected time interval by uniqueness and continuation. It would include the initial time, contradicting $x_0<y_0$. Continuity prevents changing the order without first meeting. $\square$

The statement also holds for a time-dependent scalar equation with uniqueness. It does not create a total order for vector states. In the plane, two coordinates can move in opposite directions, and a comparison theorem needs additional structure.

An equilibrium $a$ with $f(a)=0$ is itself a solution. The theorem therefore prevents a distinct solution from reaching and crossing $a$ in finite time. Division by $f(x)$ in separation excludes equilibria, so list those solutions before using the divided equation.

**Example 2.2 (Why uniqueness matters).** The equation $x'=2\sqrt{\max\{x,0\}}$ has the equilibrium $x=0$. For any waiting time $T\ge0$,
$$
x(t)=
\begin{cases}0,&t\le T,\\(t-T)^2,&t\ge T\end{cases}
$$
is also a differentiable solution starting at zero. Its derivative is zero from both sides at $T$, and direct substitution verifies the equation. The vector field is continuous but not locally Lipschitz at zero. Thus continuity alone does not justify the equilibrium barrier or a single-valued flow.

## Sign intervals and bounded trajectories

Between consecutive zeros, continuity forces $f$ to keep one sign. A non-equilibrium trajectory there is strictly increasing if $f>0$ and strictly decreasing if $f<0$. A phase line records these directions, but the conclusion remains conditional on staying in the equation's domain.

**Theorem 2.3 (Bounded scalar convergence).** Suppose a forward trajectory stays in a compact interval $K\subset I$. Then it exists for all $t\ge0$ and converges to an equilibrium.

*Proof.* Compact containment gives forward continuation by the ODE theorem. If the trajectory is already an equilibrium, the claim is immediate. Otherwise uniqueness prevents it from meeting any zero of $f$. Its image lies in one sign interval, so it is monotone. Bounded monotone real functions have a finite limit $\ell\in K$.

If $f(\ell)>0$, continuity supplies a neighbourhood of $\ell$ and $\eta>0$ with $f\ge\eta$ there. Eventually the trajectory stays in that neighbourhood, so $x(t)\ge x(T)+\eta(t-T)$, contradicting convergence. The case $f(\ell)<0$ is analogous. Therefore $f(\ell)=0$. $\square$

Merely being bounded in an open state domain does not guarantee compact containment. On $I=(0,\infty)$, $x'=-1$ reaches the missing endpoint in finite time. On $I=(0,1)$, the logistic flow can converge to the missing endpoint1 as time tends to infinity. Neither conclusion is an equilibrium in that open state space.

## Stability with a declared neighbourhood

**Definition 2.4 (Scalar stability).** An equilibrium $a$ is stable when, for every $\epsilon>0$ sufficiently small, there is $\delta>0$ such that $|x_0-a|<\delta$ implies forward existence and $|x(t)-a|<\epsilon$ for all $t\ge0$. It is locally attractive when all trajectories in some neighbourhood converge to $a$, and asymptotically stable when both properties hold.

**Proposition 2.5 (Sign test).** Suppose $a$ is the only equilibrium in $(a-\rho,a+\rho)\subset I$. If $f>0$ to its left and $f<0$ to its right, then $a$ is asymptotically stable. If $f>0$ immediately to its right or $f<0$ immediately to its left, it is unstable on the full interval domain.

*Proof.* In the inward case, every smaller closed interval centred at $a$ is forward invariant: trajectories move toward $a$ and cannot cross it. This proves stability and compact continuation. Each trajectory is monotone and its limit must be the only equilibrium in that smaller interval, namely $a$.

For an outward right-hand sign, fix a small target distance $\epsilon<\rho$. An arbitrarily close starting point $x_0>a$ moves right. On the compact interval $[x_0,a+\epsilon]$, the continuous positive $f$ has a positive minimum. Hence the trajectory reaches $a+\epsilon$ in finite time. Arbitrarily small initial displacements can leave the fixed target neighbourhood, proving instability. The left case is the same with reversed signs. $\square$

**Example 2.6 (Attraction without exponential decay).** For $x'=-x^3$, every nonzero solution is
$$
x(t)=\frac{x_0}{\sqrt{1+2x_0^2t}}\qquad(t\ge0).
$$
It approaches zero, and its magnitude never increases, so zero is asymptotically stable. It is not locally exponentially stable. If fixed $M,\alpha>0$ gave $|x(t)|\le M e^{-\alpha t}|x_0|$ for all sufficiently small nonzero $x_0$, division would imply
$e^{\alpha t}/\sqrt{1+2x_0^2t}\le M$ for all $t$. The left side diverges for each fixed such $x_0$, a contradiction. Zero derivative at an equilibrium does not decide stability or decay rate.

For $x'=-x^2$, positive starts approach zero but negative starts move away and blow up. The origin attracts from the right yet is unstable in any two-sided neighbourhood. Restricting the state space to $[0,\infty)$ changes the relevant neighbourhoods and permits a one-sided stability statement.

## Differential inequalities and barriers

**Theorem 2.7 (Scalar comparison).** On a common finite interval, suppose $f(t,u)\le g(t,u)$ and both fields are continuous and locally Lipschitz in $u$ on a neighbourhood of the compared trajectories. If $x'=f(t,x)$, $y'=g(t,y)$, and $x(t_0)\le y(t_0)$, then $x(t)\le y(t)$ while both trajectories remain in that region.

*Proof.* First suppose the initial order and field inequality are strict. At a first contact time $T$, the positive difference $y-x$ would become zero. Its left derivative there is nonpositive, but the equations give $y'(T)-x'(T)>0$, a contradiction.

For the non-strict case, take a common Lipschitz constant $L$ for $g$ on a compact neighbourhood of the trajectories, and put
$w(t)=y(t)+\epsilon e^{(L+1)(t-t_0)}$. For small $\epsilon>0$, this stays in the neighbourhood on the fixed finite interval. We have
$w'>g(t,y)+L(w-y)\ge g(t,w)\ge f(t,w)$.
The strict first-contact argument compares $x$ with this strict supersolution and gives $x<w$. Let $\epsilon\downarrow0$. $\square$

The same proof works for a differentiable upper barrier $\beta$ satisfying $\beta'\ge f(t,\beta)$, and for a lower barrier with the opposite inequality. A barrier need not be an exact solution. Compact containment and the local regularity assumptions must remain valid during the comparison.

For $x'=-x+\sin t$, the constants $-1$ and1 form lower and upper barriers because $f(t,-1)=1+\sin t\ge0$ and $f(t,1)=-1+\sin t\le0$. Thus $[-1,1]$ is forward invariant. A trajectory starting there is globally defined by compact continuation, although the equation is nonautonomous and the autonomous equilibrium-convergence theorem does not apply.

## A parameter can create or destroy equilibria

**Definition 2.8 (Local bifurcation viewpoint).** In $x'=f(x,\mu)$, a parameter value is a local bifurcation value when the nearby orbit structure changes in a specified neighbourhood and state domain. A zero derivative or a changed numerical plot is a reason to investigate, not itself a complete bifurcation theorem.

**Example 2.9 (Saddle-node normal form).** Let $x'=\mu-x^2$ on the real line. For $\mu>0$, the equilibria are $-\sqrt\mu$ and $+\sqrt\mu$. Since $f_x=-2x$, the negative branch has outward arrows and is unstable, while the positive branch has inward arrows and is asymptotically stable. At $\mu=0$, the merged equilibrium is one-sided attracting from the right and unstable on the full line. For $\mu<0$, the field is strictly negative and no equilibrium exists.

These are exact statements about this normal form. A general saddle-node theorem needs smoothness and nondegeneracy conditions on parameter and state derivatives; chapter 8 states the appropriate distinction between a model calculation and a general theorem.

For the transcritical form $x'=x(\mu-x)$, branches0 and $\mu$ exchange their signs of stability. On the full real line both branches are present. On a nonnegative physical domain, a negative branch is excluded, so the biological interpretation must be phrased relative to that domain.

**Example 2.10 (A symmetry-protected pitchfork).** For $x'=\mu x-x^3$, zero is the only equilibrium when $\mu\le0$. At $\mu<0$ its derivative is negative, and at $\mu=0$ the cubic calculation already proves attraction. For $\mu>0$, two additional equilibria $\pm\sqrt\mu$ appear. At zero the derivative is $\mu>0$, so it is unstable; at either nonzero branch it is $\mu-3\mu=-2\mu<0$, so both are asymptotically stable.

The equation is unchanged under simultaneous $x\mapsto-x$ and reversal of the state sign in the vector field: $f(-x,\mu)=-f(x,\mu)$. Adding a constant imperfection destroys that symmetry and the exact central branch. One should not describe every nearby scalar family as a pitchfork merely because a symmetric plot suggests one.

## Nonhyperbolicity is not sufficient

For $x'=-x^3-\mu^2x$, the only equilibrium is zero for every $\mu$, and the field points toward it on both sides, including $\mu=0$. At that parameter the derivative vanishes, but the qualitative oriented phase line does not change. What changes is the rate: exponential decay for $\mu\ne0$ and algebraic decay at zero.

This example separates loss of a linear sufficient condition from a change in nonlinear orbit structure. The precise notion of equivalence matters if decay rates are included; the phase-portrait bifurcation discussion here uses oriented topological orbit structure.

## Maximal times and escape

On an interval where $f>0$, define
$$
H(x)=\int_{x_0}^{x}\frac{ds}{f(s)}.
$$
The chain rule gives $H(x(t))=t$ for a solution started at time zero. If the trajectory runs toward the right endpoint $b$ of the sign interval, its available time is
$\int_{x_0}^{b}ds/f(s)$, interpreted as an improper integral. Finite integral means the endpoint is reached as a maximal-time limit; if the endpoint is infinity this is finite-time blow-up.

For $x'=x^p$, $x_0>0$, $p>1$, that integral equals $x_0^{1-p}/(p-1)$, while for $p=1$ it diverges. The equation can have an attracting equilibrium elsewhere without preventing escape from another part of the state space. A local phase portrait should therefore be accompanied by its domain and any continuation claim.

Scalar methods are powerful because monotonicity, uniqueness, and comparison cooperate. In higher dimensions those tools must be replaced by invariant regions, energy functions, and local linearisation arguments. The next chapter begins that transition without assuming a nullcline is itself a trajectory.

## Equilibrium sensitivity before the branch disappears

Suppose a scalar family is continuously differentiable in state and parameter,
and an equilibrium has a nonzero state derivative. The implicit-function
theorem then supplies a locally unique differentiable equilibrium branch.
Differentiating its defining equation gives
$$a'(\mu)=-\frac{f_\mu(a(\mu),\mu)}{f_x(a(\mu),\mu)}.$$
This is a statement about the location of a stationary state under a changed
parameter. It is distinct from the rate at which a trajectory approaches a
fixed equilibrium. The denominator controls sensitivity; a small nonzero
state derivative can make the branch location highly sensitive even while
its stability sign remains unchanged.

For the attracting branch of the fold $x'=\mu-x^2$, the equilibrium is
the positive square root of the parameter. Its derivative is the reciprocal
of twice that square root, so it grows without bound as the parameter
approaches zero from above. The linearized decay rate is twice the same
square root and therefore tends to zero. Large equilibrium sensitivity and
slow relaxation arise together here, but through two explicitly computed
quantities. Neither conclusion follows from the word stable alone.

For example, compare positive parameters μ and μ+δ. The exact equilibrium
displacement is
$$\sqrt{\mu+\delta}-\sqrt\mu
=\frac{\delta}{\sqrt{\mu+\delta}+\sqrt\mu}.$$
When δ is tiny relative to μ, the denominator is close to twice the original
equilibrium, giving the derivative prediction. When δ is comparable to μ,
that local linear prediction can have substantial relative error. When a
negative perturbation crosses the fold, the equilibrium no longer exists
and a derivative cannot predict a replacement equilibrium. A sensitivity
formula is a local theorem with a branch domain, not permission to extrapolate
through a qualitative change.

In a model application, specify whether parameter uncertainty concerns the
sign of stability, the location of the equilibrium, or a finite-time output.
These may require different accuracy. A phase line can correctly identify
an attracting state while giving no reliable bound on its physical location
if the parameter lies near a poorly conditioned branch. The formula above
provides a practical question to ask before reporting many digits of an
estimated equilibrium.

## Exercises

### Exercise 2.1 — Order and equilibria
<a id="one-dimensional-flows-bifurcations-ex-1"></a>

Explain why a non-equilibrium solution of a locally Lipschitz scalar autonomous equation cannot cross an equilibrium in finite time.

<details>
<summary>Hint 1</summary>

**Hint.** Compare with the constant solution.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Apply uniqueness at a hypothetical meeting time.

</details>
<details>
<summary>Solution</summary>

**Solution.** At a meeting time both solutions would have the same initial state. Local uniqueness makes them coincide near that time, and continuation extends the agreement over the common interval. This contradicts the non-equilibrium starting value. Continuity alone is insufficient, as Example 2.2 shows.

</details>

### Exercise 2.2 — A phase line
<a id="one-dimensional-flows-bifurcations-ex-2"></a>

Classify equilibria of $x'=x(2-x)$ on R and describe starts in (0,2).

<details>
<summary>Hint 1</summary>

**Hint.** Find both zeros before dividing.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Check the sign between and outside them.

</details>
<details>
<summary>Solution</summary>

**Solution.** The zeros are 0 and 2. The field is positive on (0,2), negative for $x>2$, and negative for $x<0$. Thus 0 is unstable and 2 asymptotically stable. Starts in (0,2) increase without crossing 2, remain in a compact subinterval after their start, and converge to 2.

</details>

### Exercise 2.3 — A one-sided equilibrium
<a id="one-dimensional-flows-bifurcations-ex-3"></a>

For $x'=x^2$, explain stability of zero on R and its behaviour for negative starts.

<details>
<summary>Hint 1</summary>

**Hint.** The arrow points right on both sides.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Distinguish approach from the left and departure from the right.

</details>
<details>
<summary>Solution</summary>

**Solution.** Negative starts increase toward zero as t→∞, but positive arbitrarily small starts move away and blow up in finite time. Therefore zero is unstable on R despite attracting from one side. A restricted domain would require a separate relative-neighbourhood statement.

</details>

### Exercise 2.4 — A missing endpoint
<a id="one-dimensional-flows-bifurcations-ex-4"></a>

For $x'=-1$ on (0,∞), find the maximal forward time from $x_0$>0 and explain why boundedness does not imply global existence.

<details>
<summary>Hint 1</summary>

**Hint.** Write the exact solution.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The domain excludes its endpoint.

</details>
<details>
<summary>Solution</summary>

**Solution.** The solution is $x_0$-t and reaches the domain boundary at t=$x_0$. It is bounded before that time but does not stay in a compact subset of(0,∞). The continuation hypothesis fails, so no contradiction with Theorem 2.3 occurs.

</details>

### Exercise 2.5 — A cubic rate
<a id="one-dimensional-flows-bifurcations-ex-5"></a>

Solve $x'=-x^3$ from $x_0$≠0 and identify its large-time magnitude.

<details>
<summary>Hint 1</summary>

**Hint.** Separate within the nonzero sign interval.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use the initial value to determine the constant.

</details>
<details>
<summary>Solution</summary>

**Solution.** Integration gives $x(t)=x_0/(1+2x_0^2t)^{1/2}$. Its magnitude is asymptotic to $(2t)^{-1/2}$. It tends to zero algebraically, so the local asymptotic stability is not exponential.

</details>

### Exercise 2.6 — A barrier
<a id="one-dimensional-flows-bifurcations-ex-6"></a>

Prove[-2,2] is forward invariant for $x'=-2x+\cos t$.

<details>
<summary>Hint 1</summary>

**Hint.** Evaluate the field at both endpoints.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use the upper and lower barrier conditions.

</details>
<details>
<summary>Solution</summary>

**Solution.** At 2 the derivative is at most -3<0, and at -2 it is at least 3>0. The constant endpoints are valid upper and lower barriers. Comparison traps every start in the interval, and compact continuation gives global forward existence.

</details>

### Exercise 2.7 — A saddle-node parameter
<a id="one-dimensional-flows-bifurcations-ex-7"></a>

For $x'=\mu-x^2$ with μ=4, classify both equilibria and find the sign at $x=0$.

<details>
<summary>Hint 1</summary>

**Hint.** The roots are±2.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use $f_x=-2x$ or the arrows.

</details>
<details>
<summary>Solution</summary>

**Solution.** The equilibrium -2 is unstable and+2 asymptotically stable. At 0 the derivative is 4>0, so trajectories there move right. These are conclusions in the full real state domain, not a claim about distant boundedness of all trajectories.

</details>

### Exercise 2.8 — A transcritical exchange
<a id="one-dimensional-flows-bifurcations-ex-8"></a>

For $x'=x(\mu-x)$, classify 0 and μ for μ<0 and μ>0.

<details>
<summary>Hint 1</summary>

**Hint.** Differentiate with respect to x.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** At the second branch substitute x=μ.

</details>
<details>
<summary>Solution</summary>

**Solution.** At 0 the derivative is μ, so 0 is stable for μ<0 and unstable for μ>0. At x=μ the derivative is-μ, giving the opposite stability. The branches coincide at zero, where linearisation is inconclusive and the exact sign field must be used.

</details>

### Exercise 2.9 — A false bifurcation inference
<a id="one-dimensional-flows-bifurcations-ex-9"></a>

Why does f_x(0,0)=0 not prove a bifurcation for $x'=-x^3-\mu^2x$?

<details>
<summary>Hint 1</summary>

**Hint.** Count equilibria for every parameter.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compare arrow directions across zero.

</details>
<details>
<summary>Solution</summary>

**Solution.** The equation has only the equilibrium 0 for every μ, with inward arrows on both sides. The phase portrait remains an attracting point across μ=0. Only the decay-rate classification changes, so a vanishing derivative alone is not a phase-portrait bifurcation proof.

</details>

### Exercise 2.10 — A blow-up integral
<a id="one-dimensional-flows-bifurcations-ex-10"></a>

For $x'=x^3$,$x_0$=2, compute the finite blow-up time.

<details>
<summary>Hint 1</summary>

**Hint.** Integrate s^{-3} from 2 to∞.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Keep the positive-state branch.

</details>
<details>
<summary>Solution</summary>

**Solution.** The time is∫₂^∞s^{-3}ds=1/(2·2²)=1/8. The solution remains positive and increasing until that maximal endpoint. Evaluating an algebraic rearrangement past it would not extend the trajectory.

</details>

## Sources

- Steven H. Strogatz, [Nonlinear Dynamics and Chaos](https://www.routledge.com/Nonlinear-Dynamics-and-Chaos/Strogatz/p/book/9780367026509), third edition, Chapman & Hall, 2024.
- Morris W. Hirsch, Stephen Smale and Robert L. Devaney, [Differential Equations, Dynamical Systems, and an Introduction to Chaos](https://doi.org/10.1016/C2009-0-61160-0), third edition, Academic Press, 2013.
- Earlier Euler treatment: [Scalar Comparison, Invariant Regions, and Blow-Up](../differential-equations-verified-dynamics/scalar-comparison-invariant-regions.md) and [Nonlinear Stability and Bifurcation](../differential-equations-verified-dynamics/nonlinear-stability-bifurcation.md). Additional original worked material and solved exercises remain available there.

The exposition, proofs, worked examples and exercises in this chapter are original to Euler. External references provide further reading and identify explicitly cited deeper results.

## Summary

Uniqueness preserves scalar order and prevents equilibrium crossings. Compact invariant bounds turn monotonicity into global convergence, while sign tests distinguish two-sided stability from one-sided attraction. Comparison supplies barriers without exact solutions. Exact scalar normal forms illustrate bifurcations, but nonhyperbolicity alone is inconclusive and maximal-time escape remains a separate question.
