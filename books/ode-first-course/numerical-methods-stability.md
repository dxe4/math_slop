
# Numerical Methods and Stability

An exact differential equation and a numerical trajectory are different mathematical objects. The equation specifies a derivative at every legal time and state. A time-stepping method specifies finitely many updates. To connect them we need a local approximation estimate and a bound on how earlier errors propagate.

This chapter proves fixed-interval convergence for forward Euler and Heun's method under explicit hypotheses. It then uses a decay equation and an oscillator to distinguish accuracy, bounded amplification, asymptotic decay, positivity and energy behavior. A smooth plotted curve supplies none of those conclusions by itself.

**Preparation.** Use [Existence, Uniqueness, and Picard Iteration](existence-uniqueness-picard.md), Taylor's theorem from the [Calculus book](../../apps/calculus/reading/book-a.html), and [Oscillation, Damping, and Resonance](oscillation-resonance.md). We present scalar updates first and explain simultaneous vector updates without assuming the matrix theory of Chapter 13. No computation is executed in this chapter; finite displayed updates are exact mathematical calculations unless a decimal approximation is marked.

## 1. A grid and an error convention

For \(y'=f(t,y)\), \(y(t_0)=y_0\), choose a fixed final time T>\(t_0\), a positive integer N and \(h=(T-t_0)/N\). The grid is \(t_n=t_0+nh\). Numerical values \(Y_n\) approximate \(y(t_n)\); the signed global error is \(e_n=y(t_n)-Y_n\).

Forward Euler is
\[
Y_{n+1}=Y_n+h f(t_n,Y_n).
\]
It replaces the exact accumulated rate \(\int_{t_n}^{t_{n+1}}f(s,y(s))\,ds\) by the initial slope times h. Each term has the correct units: a rate multiplied by time can be added to a state.

Our unscaled local defect is the difference made in one step when the input value is exact:
\[
d_n=y(t_{n+1})-y(t_n)-h f(t_n,y(t_n)).
\]
Some texts divide this quantity by h and call the result local truncation error. Their order labels are then one power lower. Always identify the quantity being bounded before comparing claims.

If \(|y''|\le M_2\), Taylor's theorem gives \(|d_n|\le M_2h^2/2\). This says nothing yet about later inputs, which are no longer exact. That missing link is error propagation.

## 2. Euler's fixed-interval convergence theorem

**Theorem 11.1.** Suppose the exact solution exists on \([t_0,T]\) and has \(|y''|\le M_2\). Suppose f is Lipschitz in its state argument with a common constant L≥0 on a region containing the exact and numerical states and the segments joining them at each grid time. Starting with exact initial data, Euler satisfies, for L>0,
\[
|e_n|\le\frac{M_2h}{2L}\bigl((1+hL)^n-1\bigr)
\le\frac{M_2h}{2L}\bigl(e^{L(T-t_0)}-1\bigr).
\]
For L=0 the corresponding bound is \(M_2(T-t_0)h/2\).

**Proof.** Subtract the Euler update from the exact step identity:
\[
e_{n+1}=e_n+h[f(t_n,y(t_n))-f(t_n,Y_n)]+d_n.
\]
The hypotheses yield \(|e_{n+1}|\le(1+hL)|e_n|+M_2h^2/2\). Iteration from e₀=0 gives the geometric sum
\[
|e_n|\le(M_2h^2/2)\sum_{j=0}^{n-1}(1+hL)^j.
\]
For L>0 its sum is the first bound. The inequality \(1+u\le e^u\) and nh≤T-\(t_0\) give the second. For L=0, the sum is n, proving the stated alternative. \(\square\)

The theorem proves an O(h) global bound on a fixed interval. The constant depends on the equation and interval; the notation does not promise a small error at an arbitrary coarse step or a uniform guarantee for all future times.

The region hypothesis prevents a circular argument. One convenient sufficient setting is a globally state-Lipschitz f on the entire time strip, with the required solution bound. If only a local region is available, one must establish that the numerical values stay there, perhaps using a smaller-step induction and a safety margin around the exact trajectory. A derivative bound computed in a region the algorithm leaves cannot be used at later illegal states.

**Worked Example 11.1 (three exact Euler updates).** For \(y'=-2y,y(0)=1\), choose h=1/4. Euler multiplies by 1/2, giving \(Y_1=1/2,Y_2=1/4,Y_3=1/8\) at times 1/4,1/2,3/4. The exact values are \(e^{-1/2},e^{-1},e^{-3/2}\). Each numerical value is smaller because \(1-2h<e^{-2h}\), and raising positive factors to the same power preserves that order. The update sequence is positive and decaying, but those qualitative properties do not make it exact.

## 3. A general propagation lemma

**Lemma 11.2.** Suppose a one-step rule \(\Phi_h(t,Y)\) has state Lipschitz factor at most \(1+Kh\), with K≥0, and exact-data local defect at most \(D h^{p+1}\), uniformly over the grid. Then
\[
|e_n|\le (1+Kh)^n|e_0|+
D h^{p+1}\sum_{j=0}^{n-1}(1+Kh)^j.
\]
With exact initial data, this is O(\(h^p\)) on a fixed interval.

**Proof.** Add and subtract the exact-input numerical step to bound the next error by \((1+Kh)|e_n|+Dh^{p+1}\). Induction yields the displayed finite sum. If K>0, its geometric formula and \(1+Kh\le e^{Kh}\) give a constant times \(h^p\). If K=0, n≤(T-\(t_0\))/h gives the same order. \(\square\)

This lemma explains why stable accumulation of about 1/h local defects loses one power of h. It also shows how errors in initial data are amplified. It is conditional on actual local and state estimates for the chosen method; naming an order without proving those estimates would not satisfy its hypotheses.

## 4. Heun's predicted endpoint

The explicit trapezoidal or Heun method is
\[
P_n=Y_n+h f(t_n,Y_n),\qquad
Y_{n+1}=Y_n+\frac h2[f(t_n,Y_n)+f(t_n+h,P_n)].
\]
The second slope uses a predicted endpoint, not the unknown corrected state. Using the corrected state instead defines an implicit trapezoidal method.

**Theorem 11.3 (Heun order).** Suppose f has a common state Lipschitz constant L on a region containing every exact state, numerical state, predicted stage and the needed connecting state segments. Suppose the exact solution has bounded second and third derivatives there on the time interval. Then Heun has local defect O(\(h^3\)), state factor at most \(1+Lh+L^2h^2/2\), and global error O(\(h^2\)) for exact initial data as h tends to zero on a fixed interval.

**Proof.** Starting at exact y(t), the Euler predictor differs from y(t+h) by at most \(M_2h^2/2\). Lipschitz continuity makes the predicted endpoint slope differ from the exact endpoint slope by at most \(LM_2h^2/2\). Multiplication by h/2 gives a contribution at most \(LM_2h^3/4\) to the step error.

Let \(|y'''|\le M_3\). Taylor expansion gives \(y(t+h)=y+hy'+h^2y''/2+R\), \(|R|\le M_3h^3/6\), and \(y'(t+h)=y'+hy''+R'\), \(|R'|\le M_3h^2/2\). Therefore the exact endpoint-slope trapezoid differs from y(t+h) by at most \(5M_3h^3/12\). Combined with the predictor error, this proves a uniform cubic local bound.

For two inputs Y,Z at the same time, their predictors differ by at most \((1+hL)|Y-Z|\). The two-slope update then differs by at most
\([1+(hL/2)(1+(1+hL))]|Y-Z|\), the claimed factor. For h bounded by a fixed \(h_0\), it is at most \(1+Kh\) with \(K=L+L^2h_0/2\). Lemma 11.2 with p=2 proves the global order. \(\square\)

The coefficient \(5/12\) is a convenient valid estimate, not the sharp trapezoid constant. Its role is to supply a uniform cubic bound. The theorem needs bounds on the exact solution and legal stages; it does not promise second-order convergence through an unhandled forcing discontinuity.

**Worked Example 11.2 (same slope rule, different stages).** For \(y'=t+y,y(0)=1,h=0.1\), Euler gives P=1.1. The predicted endpoint slope is \(f(0.1,1.1)=1.2\). Heun returns \(1+0.05(1+1.2)=1.11\). The exact solution is \(y=2e^t-t-1\), obtained by an integrating factor, so its value at 0.1 is approximately 1.11034. The calculation identifies every time and state used by each slope. Calling a method “improved Euler” without its formula would leave those stage choices ambiguous.

Classical RK4 uses four stages:
\[
k_1=f(t,Y),\quad k_2=f(t+h/2,Y+hk_1/2),\quad
k_3=f(t+h/2,Y+hk_2/2),\quad k_4=f(t+h,Y+hk_3),
\]
followed by \(Y_{\rm new}=Y+h(k_1+2k_2+2k_3+k_4)/6\). Each k is a rate, not an increment. The full general fourth-order theorem requires additional smoothness and a longer expansion of these stages. We do not prove or invoke that theorem here. We do derive its amplification polynomial on the linear test equation below, a narrower claim.

## 5. Amplification and absolute stability

For the test equation \(y'=\lambda y\), Euler has multiplier \(R(z)=1+z\), with z=hλ. A numerical perturbation is multiplied by the same factor as the state. The region \(|R(z)|\le1\) gives nonamplification of this scalar mode, while \(|R(z)|<1\) gives decay of it under indefinitely many fixed-size steps. These endpoint distinctions matter.

For real decay λ=-a, a>0,
\[
Y_n=(1-ah)^nY_0.
\]
Asymptotic decay requires \(0<ah<2\). Nonnegative data remain nonnegative when \(0<ah\le1\), and strictly positive data remain positive when \(0<ah<1\). At ah=1 the method jumps to zero, although the exact exponential has not vanished.

**Worked Example 11.3 (stable but qualitatively wrong).** For \(y'=-10y,y(0)=1,h=0.15\), the multiplier is -1/2. Iterates decay in magnitude but alternate signs, while the exact solution \(e^{-10t}\) is always positive. With h=0.25 the multiplier is -3/2, so even magnitude decay fails. With h=0.1 the first value is zero, whose error at time 0.1 is \(e^{-1}\), approximately 0.368. Nonamplification, positivity and numerical accuracy are three different questions.

Backward Euler instead solves \(Y_{n+1}=Y_n+h f(t_{n+1},Y_{n+1})\). On the decay test it gives multiplier \(1/(1+ah)\), positive and below one for every h>0. A large step may still be inaccurate: when ah=3 the numerical multiplier is 1/4 while exact decay is \(e^{-3}\), about 0.0498. Stability permits a step; accuracy may require a smaller one. For nonlinear equations, an implicit step also requires solving an algebraic equation and establishing which root is intended.

For Heun on the test equation, direct substitution gives \(R(z)=1+z+z^2/2\). RK4's four stages give \(R(z)=1+z+z^2/2+z^3/6+z^4/24\). This derivation uses only repeated substitution of \(\lambda Y\) into the stages. As z tends to negative infinity, both polynomials have unbounded magnitude, so neither explicit method is stable for arbitrarily large negative real z.

## 6. Oscillation and simultaneous updates

For the dimensionless oscillator \(x'=v,v'=-x\), forward Euler uses the old pair for both components:
\[
X_{n+1}=X_n+hV_n,\qquad V_{n+1}=V_n-hX_n.
\]
Expansion gives
\[
X_{n+1}^2+V_{n+1}^2=(1+h^2)(X_n^2+V_n^2).
\]
Thus every nonzero state gains energy at each positive fixed step, although exact oscillator energy is constant. Updating velocity from the already updated position would produce a different method. One must not silently mix simultaneous and sequential schemes.

At fixed T=Nh, the energy factor \((1+h^2)^N\le e^{Th}\) tends to one as h tends to zero. This is compatible with convergence on fixed intervals, even though a fixed positive step causes unbounded energy growth as N tends to infinity. The fixed-time and long-time questions have different quantifiers.

Stiffness occurs when rapidly decaying components impose a stability step much shorter than the time scale of the behavior being observed. A first course can recognize this on a decay equation with large a, without claiming a complete theory of stiff nonlinear systems. Implicit methods can enlarge stability regions, but neither stiffness labels nor stable updates replace error estimates and legal-domain checks.

## 7. Refinement evidence and its limits

Compare h,h/2,h/4 runs at the same final time. If errors have a leading form \(Ch^p\) with nonzero C and negligible other effects, successive differences have ratio approaching \(2^p\). That is a conditional asymptotic diagnostic, not a guaranteed error bound from three values. Cancellation can hide the leading coefficient; coarse steps may be outside the stable regime; roundoff can dominate very fine steps.

For a claimed second-order method, values 1.240,1.210,1.2025 have differences 0.030 and 0.0075. Their ratio is four, consistent with second order. Under the leading-error assumption, the finest error is approximately 0.0075/3=0.0025 and the extrapolated limit is 1.2000. These are estimates, not certified digits.

A reliable numerical report states the equation, parameters and units; the exact method and stages; the grid or step controller; legal state region; output times; and event handling. An invariant residual is useful but incomplete evidence. A method can preserve a linear invariant while both components are inaccurate. A ground-impact time between grid points needs a separate interpolation rule; a small error at the last sampled time does not certify that event time.

## Exercises

### Exercise 11.1 {#numerical-methods-stability-ex-1}

Take one Euler step of h=0.2 for \(y'=t+y,y(0)=1\).

<details><summary>Hint 1</summary>

Use the slope at the old time and state.

</details>
<details><summary>Hint 2</summary>

That slope equals one.

</details>
<details><summary>Solution</summary>

The update is \(Y_1=1+0.2(1)=1.2\), at time 0.2. Evaluating the slope at the new time would define a different rule.

</details>

### Exercise 11.2 {#numerical-methods-stability-ex-2}

Take the corresponding Heun step.

<details><summary>Hint 1</summary>

The predictor is the Euler value.

</details>
<details><summary>Hint 2</summary>

At time 0.2 and state 1.2 the predicted slope is 1.4.

</details>
<details><summary>Solution</summary>

Heun gives \(1+0.1(1+1.4)=1.24\). The endpoint slope is evaluated at the predictor, not the corrected answer.

</details>

### Exercise 11.3 {#numerical-methods-stability-ex-3}

For \(y'=-4y\), find the Euler asymptotic-decay interval.

<details><summary>Hint 1</summary>

The multiplier is 1-4h.

</details>
<details><summary>Hint 2</summary>

Require its magnitude strictly below one.

</details>
<details><summary>Solution</summary>

Solving \(-1<1-4h<1\) with h>0 gives \(0<h<1/2\). At the upper endpoint the multiplier is -1 and does not decay.

</details>

### Exercise 11.4 {#numerical-methods-stability-ex-4}

For the same equation, find the range preserving strictly positive data as strictly positive iterates.

<details><summary>Hint 1</summary>

Inspect the sign of the multiplier.

</details>
<details><summary>Hint 2</summary>

Zero is not strictly positive.

</details>
<details><summary>Solution</summary>

The requirement is \(1-4h>0\), giving \(0<h<1/4\). At h=1/4 the first iterate is zero; nonnegativity holds there but strict positivity does not.

</details>

### Exercise 11.5 {#numerical-methods-stability-ex-5}

With L=0, exact initial data and local Euler defect bound \(3h^2\), bound the global error up to time T when \(t_0=0\).

<details><summary>Hint 1</summary>

No factor greater than one appears in propagation.

</details>
<details><summary>Hint 2</summary>

At most T/h defects are accumulated.

</details>
<details><summary>Solution</summary>

The recurrence gives \(|e_n|\le3nh^2\le3Th\). This treats the L=0 case directly without dividing by a vanishing Lipschitz constant.

</details>

### Exercise 11.6 {#numerical-methods-stability-ex-6}

Derive Heun's amplification factor for \(y'=\lambda y\).

<details><summary>Hint 1</summary>

The predictor multiplies Y by 1+z.

</details>
<details><summary>Hint 2</summary>

Average the initial and predicted slopes.

</details>
<details><summary>Solution</summary>

The update is \(Y+(z/2)[Y+(1+z)Y]=(1+z+z^2/2)Y\). Here z=hλ. This scalar polynomial is not by itself a proof of the general nonlinear order theorem.

</details>

### Exercise 11.7 {#numerical-methods-stability-ex-7}

Prove Euler's oscillator energy factor.

<details><summary>Hint 1</summary>

Square both simultaneous updates.

</details>
<details><summary>Hint 2</summary>

The mixed terms cancel.

</details>
<details><summary>Solution</summary>

\((X+hV)^2+(V-hX)^2=(1+h^2)(X^2+V^2)\). Hence the normalized energy \((X^2+V^2)/2\) has the same factor. Every nonzero state gains energy at each h>0 step.

</details>

### Exercise 11.8 {#numerical-methods-stability-ex-8}

For \(y'=-5y,Y_0=1\), compute one backward Euler step at h=1.

<details><summary>Hint 1</summary>

The new state appears on both sides.

</details>
<details><summary>Hint 2</summary>

Solve \(Y_1=1-5Y_1\).

</details>
<details><summary>Solution</summary>

The result is \(Y_1=1/6\), while the exact value is \(e^{-5}\), about 0.00674. Positive decay and unconditional scalar stability do not imply a small one-step error.

</details>

### Exercise 11.9 {#numerical-methods-stability-ex-9}

If a method's error is asymptotically \(Ch^2\) with nonzero C, what ratio of errors is expected under halving?

<details><summary>Hint 1</summary>

Substitute h/2 into the leading term.

</details>
<details><summary>Hint 2</summary>

Keep the output time fixed.

</details>
<details><summary>Solution</summary>

The fine error is asymptotically \(Ch^2/4\), so coarse divided by fine approaches four. This conclusion depends on the leading-term regime and does not certify a bound from one pair of runs.

</details>

### Exercise 11.10 {#numerical-methods-stability-ex-10}

Why must an Euler convergence proof control a common state region?

<details><summary>Hint 1</summary>

The Lipschitz estimate compares exact and numerical inputs.

</details>
<details><summary>Hint 2</summary>

Later numerical states need not equal exact states.

</details>
<details><summary>Solution</summary>

The propagation estimate uses a common L at both inputs and along the connecting state segment. A bound valid only on the exact trajectory need not apply to a numerical point outside it. One must establish stage containment, use a global strip bound, or provide a smaller-step induction with a safety margin.

</details>

### Exercise 11.11 {#numerical-methods-stability-ex-11}

Show RK4 is unstable for sufficiently large negative real z.

<details><summary>Hint 1</summary>

Use its scalar amplification polynomial.

</details>
<details><summary>Hint 2</summary>

The fourth-degree term dominates as z tends to negative infinity.

</details>
<details><summary>Solution</summary>

\(R(z)=1+z+z^2/2+z^3/6+z^4/24\) tends to positive infinity as z→-\(\infty\). Therefore |R(z)| eventually exceeds one. Four stages do not give unconditional stability on all decay rates and step sizes.

</details>

### Exercise 11.12 {#numerical-methods-stability-ex-12}

Explain why exact conservation of \(Y_n+A_n=1\) cannot certify both numerical components in the model \(y'=-y,A'=y\).

<details><summary>Hint 1</summary>

Many pairs have the same sum.

</details>
<details><summary>Hint 2</summary>

The exact pair is \((e^{-t},1-e^{-t})\).

</details>
<details><summary>Solution</summary>

A pair such as \((1,0)\) at positive time has the invariant sum one but generally differs from the exact pair. The invariant tests one relationship, not each component's error. Compare both components at common times and use a convergence or error argument in addition to the invariant residual.

</details>

## Sources

Original exposition informed by the unchanged Calculus chapter 28, Quarto calculus chapter 33 and Lucent calculus lesson 15. Jiří Lebl's author-written [Numerical methods: Euler's method](https://www.jirka.org/diffyqs/html/numer_section.html) supplies additional introductory examples. Euler and Heun convergence estimates and scalar stability claims are proved here; the full general RK4 order theorem is not invoked.

## Summary

A local defect describes one step from exact input; global error also includes inherited errors. Lipschitz propagation turns uniform local bounds into fixed-interval convergence, giving first order for Euler and second order for Heun under the stated hypotheses. Scalar amplification distinguishes nonamplification from decay, positivity and accuracy. Oscillator energy reveals long-time drift that can coexist with fixed-time convergence. Refinement and invariant checks are useful evidence with specific limits. The next chapter changes from initial data to conditions imposed at two endpoints.
