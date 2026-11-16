var e=`---
parent_id: book-ode-first-course
chapter_id: phase-lines-equilibria
title: "Phase Lines and Equilibria"
level: undergraduate
license: CC BY-SA 4.0
---

# Phase Lines and Equilibria

A scalar autonomous equation has only one state coordinate, but it can still show attraction, instability, thresholds, slow decay, and finite-time escape. Its special advantage is order. On the real line, a solution either moves toward larger states or toward smaller states, and unique trajectories cannot cross. This turns a sign diagram into more than a sketch.

Read [Existence, Uniqueness, and Picard Iteration](existence-uniqueness-picard.md) first. Throughout the main results, the equation is \\(y'=f(y)\\), where \\(f\\) is continuously differentiable on an open state interval \\(J\\). This guarantees the local uniqueness needed below. We will point out what fails without it.

## Equilibria and the phase line

**Definition 5.1 (Equilibrium and phase line).** A state \\(e\\in J\\) is an equilibrium if \\(f(e)=0\\). The constant function \\(y(t)=e\\) then solves the equation. A phase line lists equilibria and records the sign of \\(f\\) on the remaining state intervals: an arrow points right if \\(f>0\\) and left if \\(f<0\\).

If no zero lies between two state values, continuity fixes the sign of \\(f\\) throughout the interval between them. A solution there is strictly increasing or strictly decreasing because its derivative has that sign. This statement uses the entire interval, not just a test point chosen without first finding the zeros.

**Proposition 5.2 (Equilibrium barriers).** A nonconstant solution cannot meet an equilibrium at a finite interior time. Consequently it cannot cross that state.

**Proof.** If a solution reaches \\(e\\) at time \\(T\\), it shares the data \\((T,e)\\) with the constant equilibrium solution. Local uniqueness makes them agree near \\(T\\). The agreement continues throughout their common connected time interval, by the uniqueness argument of Chapter 4. Hence the original solution was constant, contrary to the assumption. \\(\\square\\)

This is a statement in both time directions. A non-equilibrium trajectory can approach an equilibrium as time tends to infinity, or as time tends to negative infinity, without ever reaching it. If local uniqueness fails, finite-time arrival or departure may occur; the square-root waiting-time example is the relevant warning.

**Definition 5.3 (Stability and attraction).** An equilibrium is stable if, for every \\(\\varepsilon>0\\), some \\(\\delta>0\\) ensures that every initial state within \\(\\delta\\) of \\(e\\) has a forward solution for all time and stays within \\(\\varepsilon\\) of \\(e\\). It is locally attracting if all sufficiently close initial states have forward solutions tending to \\(e\\). It is asymptotically stable if both properties hold. It is unstable if the stability condition fails.

When \\(J\\) has a physical boundary, a one-sided or relative version may be useful, but it must be stated. Stability within nonnegative populations and stability among all real states are different questions. A statement that one selected solution approaches the equilibrium does not prove stability, which quantifies over every sufficiently close initial state.

## Trapping and long-term limits

**Proposition 5.4 (Invariant interval).** Suppose \\([a,b]\\subset J\\), with \\(a<b\\), and \\(f(a)\\ge0\\), \\(f(b)\\le0\\). Every solution starting in \\([a,b]\\) stays there for all forward time and exists for all forward time.

**Proof.** At an endpoint with a strict inward sign, the derivative prevents a first outward crossing: at a first upper contact reached from below the derivative is nonnegative, contradicting \\(f(b)<0\\); the lower case is analogous. If the endpoint rate is zero, that endpoint is an equilibrium and uniqueness prevents crossing by Proposition 5.2. Thus the solution cannot leave the interval. Since \\(f\\) is bounded on \\([a,b]\\), the state remains in a compact subset of its open domain. The continuation theorem extends it past every finite proposed forward endpoint. \\(\\square\\)

For the strict-contact argument, if the initial state is already an endpoint with strict inward derivative, continuity first sends it into the interior. A later outward crossing then has a genuine first contact. Endpoint equilibria remain fixed.

**Theorem 5.5 (Bounded monotone scalar trajectories).** If a solution exists for all forward time, is monotone, and remains in a compact subinterval of \\(J\\), then it tends to an equilibrium.

**Proof.** A bounded monotone real function has a finite limit \\(\\ell\\): for an increasing function use the supremum of its values, and for a decreasing function use the infimum. The compact containment places \\(\\ell\\) inside \\(J\\). If \\(f(\\ell)>0\\), continuity gives \\(f(y)\\ge c>0\\) for states sufficiently close to \\(\\ell\\). Eventually the solution stays in that neighborhood, so integrating \\(y'\\ge c\\) gives unbounded linear increase, a contradiction. If \\(f(\\ell)<0\\), the corresponding negative bound gives a similar contradiction. Therefore \\(f(\\ell)=0\\). \\(\\square\\)

The compact-interior hypothesis cannot simply be omitted. A bounded trajectory can approach a state-domain boundary where the rate is undefined. The theorem also does not provide the convergence rate; simple and repeated zeros can produce very different speeds.

## Sign tests and derivative tests

**Theorem 5.6 (Inward and outward signs).** If, for some \\(\\eta>0\\),
\\[
 f(y)>0\\quad(e-\\eta<y<e),\\qquad
 f(y)<0\\quad(e<y<e+\\eta),
\\]
then \\(e\\) is asymptotically stable. If either adjacent interval instead has arrows pointing away from \\(e\\), then \\(e\\) is unstable.

**Proof of inward case.** Choose an initial state sufficiently close to \\(e\\). The phase signs and equilibrium barrier keep the trajectory between its initial value and \\(e\\). It is bounded, monotone, and contained in a compact interior interval, so it exists globally forward and has a limit. The only possible equilibrium between that initial state and \\(e\\) is \\(e\\), by the strict signs, so Theorem 5.5 gives convergence to \\(e\\). For stability, given a small \\(\\varepsilon\\), choose \\(\\delta<\\min(\\varepsilon,\\eta)\\). The same trapping keeps the distance below its initial distance, hence below \\(\\varepsilon\\). Larger \\(\\varepsilon\\) are handled by the same smaller neighborhood.

**Proof of outward case.** Suppose, for example, \\(f>0\\) on \\((e,e+\\eta)\\). Choose a fixed \\(\\varepsilon\\) with \\(0<\\varepsilon<\\eta\\). From any initial value in \\((e,e+\\varepsilon)\\), the solution increases. If it never reached \\(e+\\varepsilon\\), trapping and continuation would make it global and convergent to a point in that compact interval. Its limit would be an equilibrium, but no such equilibrium exists above its positive initial displacement and at or below \\(e+\\varepsilon\\). Therefore it reaches that distance in finite time. Initial values can be arbitrarily close to \\(e\\), disproving stability. The other side is identical after reversing signs. \\(\\square\\)

**Corollary 5.7 (Simple-zero test).** If \\(f(e)=0\\) and \\(f'(e)<0\\), the equilibrium is asymptotically stable. If \\(f'(e)>0\\), it is unstable.

**Proof.** The quotient \\(f(e+w)/w\\) tends to \\(f'(e)\\). A negative derivative makes the signs inward for small nonzero \\(w\\); a positive derivative makes them outward. Apply Theorem 5.6. \\(\\square\\)

For a negative derivative we can also quantify decay. Choose \\(c>0\\) and a neighborhood with \\(f(e+w)w\\le-cw^2\\). Along a trapped solution,
\\[
 \\frac d{dt}(y-e)^2=2(y-e)f(y)\\le-2c(y-e)^2.
\\]
Multiplying by \\(e^{2ct}\\) and integrating gives
\\[
 |y(t)-e|\\le |y(0)-e|e^{-ct}.
\\]
The constant need not be the exact asymptotic rate. When \\(f'(e)=0\\), the derivative test is inconclusive rather than false: the original signs must be examined.

## Worked example 5.1: three equilibria and two basins

Let
\\[
 y'=y(1-y)(y+2).
\\]
The equilibria are \\(-2,0,1\\). The signs on the four complementary intervals are respectively positive, negative, positive, negative. Thus arrows point toward \\(-2\\) from both sides, away from zero from both sides, and toward one from both sides.

Every initial value \\(y_0<0\\) tends to \\(-2\\). For \\(y_0<-2\\), the trajectory increases but cannot cross \\(-2\\); for \\(-2<y_0<0\\), it decreases but cannot cross \\(-2\\). In each case it stays in the compact interval between its initial value and \\(-2\\), so continuation and the monotone-limit theorem apply. Similarly every \\(y_0>0\\) tends to one.

The equilibrium initial value \\(y_0=0\\) remains zero forever. Hence the two attraction basins, meaning sets of initial values approaching the specified equilibrium, are \\((-\\infty,0)\\) for \\(-2\\) and \\((0,\\infty)\\) for one. The separating state zero is itself an unstable equilibrium. No explicit solution formula was required.

As an algebra check, differentiating the cubic gives \\(f'(y)=-3y^2-2y+2\\). Its values at \\(-2,0,1\\) are \\(-6,2,-3\\), agreeing with the sign test. The sign proof additionally identifies the global basins.

## Worked example 5.2: a harvesting threshold and a physical boundary

A scaled stock satisfies
\\[
 x'=x(1-x)-H,\\qquad H\\ge0.
\\]
The parameter \\(H\\) is a constant harvesting rate in the chosen scales. Completing the square gives
\\[
 x'=\\frac14-H-(x-\\tfrac12)^2.
\\]
When \\(0<H<1/4\\), two equilibria occur:
\\[
 e_\\pm=\\frac{1\\pm\\sqrt{1-4H}}2.
\\]
The field is positive between them and negative outside, so the lower equilibrium is unstable and the upper is asymptotically stable. Starting above the lower threshold leads toward the upper equilibrium; starting below the lower threshold leads downward.

At \\(H=1/4\\), the only equilibrium is \\(1/2\\), and \\(x'=-(x-1/2)^2\\). It attracts from above and repels from below. It is not stable among all nearby real initial states. This is often called semistability, but the one-sided behavior should accompany that name.

For \\(H>1/4\\), the derivative is at most \\(-(H-1/4)<0\\). Any positive initial stock reaches zero within time at most \\(x_0/(H-1/4)\\), by integrating this bound. The polynomial equation continues into negative states mathematically, but constant harvesting from an empty stock is physically meaningless. A realistic policy must stop harvesting or change the model at extinction. A smooth mathematical continuation and a valid biological continuation are not the same assertion.

## Worked example 5.3: zero derivative, three different behaviours

Compare
\\[
 y'=-y^3,\\qquad y'=y^3,\\qquad y'=y^2.
\\]
All have equilibrium zero and derivative \\(f'(0)=0\\).

For the first equation, separation gives
\\[
 y(t)=\\frac{y_0}{\\sqrt{1+2y_0^2t}}
\\]
for forward time, including zero by direct substitution. Signs point toward zero from both sides, so zero is asymptotically stable. Decay is algebraic, not exponential.

For the second, nonzero initial data give
\\[
 y(t)=\\frac{y_0}{\\sqrt{1-2y_0^2t}}
\\]
up to a finite blow-up endpoint. Both signs point away, so zero is unstable.

For \\(y'=y^2\\), negative initial values increase toward zero, while positive initial values increase away and blow up. Thus zero attracts from the left but is unstable in the full line. One derivative value cannot distinguish these cases. The missing information lies in the first nonzero higher-order term or directly in the signs.

## Travel-time integrals

On a state interval where \\(f\\ne0\\), separation gives
\\[
 t-t_0=\\int_{y_0}^{y(t)}\\frac{du}{f(u)}.
\\]
This formula measures the time needed to travel through state space. If \\(f>0\\) above \\(y_0\\), the forward time to infinity, when that state-domain endpoint is available, is the improper integral \\(\\int_{y_0}^\\infty du/f(u)\\). A finite value means finite-time escape; an infinite value means reaching infinity takes infinite time.

For \\(y'=y^p\\) with \\(y_0>0\\), the integral is finite exactly when \\(p>1\\). The exponential case \\(p=1\\) grows without a finite escape time. This comparison explains why “the derivative is positive” determines direction but does not determine whether a solution exists for all future time.

## Exercises

### Exercise 5.1 {#phase-lines-equilibria-ex-1}

Classify the equilibria of \\(y'=y(3-y)\\).

<details><summary>Hint 1</summary>
Find the zeros before testing signs.
</details>
<details><summary>Hint 2</summary>
Examine the intervals below zero, between zero and three, and above three.
</details>
<details><summary>Solution</summary>
The equilibria are zero and three. The signs are negative, positive, negative, respectively. Thus zero has outward signs and is unstable, while three has inward signs and is asymptotically stable. Every positive initial value tends to three; the conclusion follows from trapping and the monotone-limit theorem.
</details>

### Exercise 5.2 {#phase-lines-equilibria-ex-2}

For \\(y'=-y(y-1)(y-2)\\), find all attraction basins.

<details><summary>Hint 1</summary>
The signs on the four intervals alternate.
</details>
<details><summary>Hint 2</summary>
The middle equilibrium separates two sets of initial values.
</details>
<details><summary>Solution</summary>
The signs on \\((-\\infty,0),(0,1),(1,2),(2,\\infty)\\) are positive, negative, positive, negative. Hence zero attracts every initial value below one, while two attracts every initial value above one. Their basins are \\((-\\infty,1)\\) and \\((1,\\infty)\\). Initial value one remains at the unstable equilibrium.
</details>

### Exercise 5.3 {#phase-lines-equilibria-ex-3}

Show that zero is asymptotically stable for \\(y'=-y^5\\), although the derivative test is inconclusive.

<details><summary>Hint 1</summary>
Odd powers preserve the sign of the state.
</details>
<details><summary>Hint 2</summary>
The leading minus sign points both sides toward zero.
</details>
<details><summary>Solution</summary>
For negative \\(y\\), \\(-y^5>0\\); for positive \\(y\\), \\(-y^5<0\\). The inward-sign theorem gives asymptotic stability. Since \\(f'(0)=-5(0)^4=0\\), the simple-zero corollary alone does not decide it. The exact solution for nonzero data is \\(y=y_0/(1+4y_0^4t)^{1/4}\\), confirming slow forward decay.
</details>

### Exercise 5.4 {#phase-lines-equilibria-ex-4}

For \\(y'=y^2-1\\), classify \\(-1\\) and \\(1\\), and describe a solution starting at zero.

<details><summary>Hint 1</summary>
The rate is negative between the roots.
</details>
<details><summary>Hint 2</summary>
A unique solution cannot cross either equilibrium.
</details>
<details><summary>Solution</summary>
The signs are positive below \\(-1\\), negative between \\(-1\\) and one, and positive above one. Thus \\(-1\\) is asymptotically stable and one unstable. Starting at zero, the solution decreases, stays above \\(-1\\), exists globally forward by trapping, and tends to \\(-1\\).
</details>

### Exercise 5.5 {#phase-lines-equilibria-ex-5}

Prove \\([-2,2]\\) is forward invariant for \\(y'=-y+\\sin y\\).

<details><summary>Hint 1</summary>
Use \\(-1\\le\\sin y\\le1\\).
</details>
<details><summary>Hint 2</summary>
Check the two endpoint rates.
</details>
<details><summary>Solution</summary>
At \\(-2\\), the rate is \\(2-\\sin2\\ge1>0\\). At \\(2\\), it is \\(-2+\\sin2\\le-1<0\\). The continuously differentiable field therefore points strictly inward at both endpoints. Proposition 5.4 gives forward invariance and all-time forward existence for initial states in the interval.
</details>

### Exercise 5.6 {#phase-lines-equilibria-ex-6}

For \\(x'=x(1-x)-H\\), take \\(H=3/16\\). Find and classify the equilibria.

<details><summary>Hint 1</summary>
The discriminant is \\(1-4H=1/4\\).
</details>
<details><summary>Hint 2</summary>
The downward-opening quadratic is positive between its roots.
</details>
<details><summary>Solution</summary>
The roots are \\((1\\pm1/2)/2\\), namely \\(1/4\\) and \\(3/4\\). The lower has outward signs and is unstable; the upper has inward signs and is asymptotically stable. Positive initial stocks below \\(1/4\\) decrease toward the physical extinction boundary rather than the upper equilibrium.
</details>

### Exercise 5.7 {#phase-lines-equilibria-ex-7}

For the threshold equation \\(x'=-(x-1/2)^2\\), show that a start above \\(1/2\\) approaches it without reaching it.

<details><summary>Hint 1</summary>
Set \\(w=x-1/2>0\\).
</details>
<details><summary>Hint 2</summary>
Solve \\(w'=-w^2\\).
</details>
<details><summary>Solution</summary>
With \\(w(0)=w_0>0\\), the solution is \\(w=w_0/(1+w_0t)\\). It remains positive for every forward finite time and tends to zero. Thus \\(x\\to1/2\\) from above. Starts below \\(1/2\\) move away, so the equilibrium is not stable in the two-sided sense.
</details>

### Exercise 5.8 {#phase-lines-equilibria-ex-8}

Compute the forward blow-up time for \\(y'=y^3\\), \\(y(0)=2\\).

<details><summary>Hint 1</summary>
Integrate \\(y^{-3}\\).
</details>
<details><summary>Hint 2</summary>
Alternatively use the formula from Worked example 5.3.
</details>
<details><summary>Solution</summary>
The positive branch is \\(y=2/\\sqrt{1-8t}\\), so the forward endpoint is \\(1/8\\). The travel-time integral gives the same result: \\(\\int_2^\\infty u^{-3}du=[-1/(2u^2)]_2^\\infty=1/8\\). The state tends to infinity there.
</details>

### Exercise 5.9 {#phase-lines-equilibria-ex-9}

If \\(f(e+w)w\\le-3w^2\\) near an equilibrium and a trajectory remains in that neighborhood, prove an exponential bound.

<details><summary>Hint 1</summary>
Differentiate the squared displacement.
</details>
<details><summary>Hint 2</summary>
Multiply the resulting inequality by \\(e^{6t}\\).
</details>
<details><summary>Solution</summary>
For \\(E=(y-e)^2\\), we have \\(E'\\le-6E\\), so \\((e^{6t}E)'\\le0\\). Thus \\(E(t)\\le E(0)e^{-6t}\\), giving \\(|y(t)-e|\\le|y(0)-e|e^{-3t}\\). The assumed neighborhood condition is essential to using the bound throughout the interval.
</details>

### Exercise 5.10 {#phase-lines-equilibria-ex-10}

Explain why a bounded increasing trajectory with limit \\(\\ell\\) inside the state domain cannot have \\(f(\\ell)>0\\).

<details><summary>Hint 1</summary>
Continuity provides a positive lower bound near the limit.
</details>
<details><summary>Hint 2</summary>
Integrate that lower bound over arbitrarily long future times.
</details>
<details><summary>Solution</summary>
If \\(f(\\ell)>0\\), choose \\(c>0\\) so \\(f\\ge c\\) near \\(\\ell\\). Eventually the trajectory stays there, giving \\(y(t)\\ge y(T)+c(t-T)\\) for all later times. This contradicts boundedness and convergence. The negative-rate case is excluded similarly, so a limit in the domain must be an equilibrium.
</details>

### Exercise 5.11 {#phase-lines-equilibria-ex-11}

Does a solution of \\(y'=2\\sqrt{|y|}\\) have to respect the equilibrium barrier at zero? Give a counterexample to uniqueness-based reasoning.

<details><summary>Hint 1</summary>
The rate is not Lipschitz at zero.
</details>
<details><summary>Hint 2</summary>
Join a negative square to a positive square.
</details>
<details><summary>Solution</summary>
The function \\(y(t)=-t^2\\) for \\(t\\le0\\), and \\(y(t)=t^2\\) for \\(t\\ge0\\), is continuously differentiable with derivative zero at zero. On the negative-time branch \\(y'=-2t=2|t|\\); on the positive branch \\(y'=2t=2|t|\\). Both equal \\(2\\sqrt{|y|}\\). It crosses zero, while zero is also a constant solution. The missing local uniqueness invalidates the equilibrium-barrier proposition's use here.
</details>

### Exercise 5.12 {#phase-lines-equilibria-ex-12}

For \\(y'=y^p\\), \\(y_0>0\\), determine when the forward travel time to infinity is finite.

<details><summary>Hint 1</summary>
Use the integral \\(\\int_{y_0}^\\infty u^{-p}du\\).
</details>
<details><summary>Hint 2</summary>
Treat \\(p=1\\) separately from the power antiderivative.
</details>
<details><summary>Solution</summary>
For \\(p>1\\), the integral equals \\(y_0^{1-p}/(p-1)\\), so escape occurs at that finite time. For \\(p=1\\), the logarithmic integral diverges. For \\(p<1\\), the power antiderivative diverges at infinity. Thus exactly \\(p>1\\) gives finite forward escape on the positive branch.
</details>

## Sources

Original exposition. Primary references are Jiří Lebl's [Notes on Diffy Qs, autonomous equations](https://www.jirka.org/diffyqs/html/diffyqs.html) and Gerald Teschl's [Ordinary Differential Equations and Dynamical Systems, qualitative first-order analysis](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode). Local seeds are Quarto calculus's phase-space chapter and Atlas Scalar Comparison, Invariant Regions, and Blow-Up, both retained unchanged.

## Summary

Continuity determines motion between equilibria, while uniqueness makes equilibria into barriers. Trapping gives global forward existence, and bounded monotone trajectories converge to equilibria inside the domain. Stability requires a quantified statement about all nearby states; a zero derivative or one favourable trajectory does not decide it. The next chapter returns to exact solution structure for second-order linear equations.
`;export{e as default};