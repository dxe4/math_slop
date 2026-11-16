


# Initial-Value Methods: Stability Before Speed

## Numerical scope

This chapter assumes an initial-value problem has already been formulated and is sufficiently regular on the interval of interest. General existence theory, phase portraits, control, and physical modeling belong to the differential-equations shelf. Here we ask how a finite stepping rule approximates the specified solution, how errors propagate, and what a computation can certify.

Consider

\(y'(t)=f(t,y(t))\), \(y(t_0)=y_0\).

A method produces approximations \(y_n\) at times \(t_n\). The exact state, local truncation defect, propagated global error, rounding error, and uncertainty in initial data must remain distinct.

## Euler's method and its error recursion

Forward Euler uses

\(y_{n+1}=y_n+h f(t_n,y_n)\).

Taylor's theorem gives the exact solution relation

\(y(t_{n+1})=y(t_n)+h f(t_n,y(t_n))+\tau_n\),

where \(\lvert \tau_n\rvert\le h^{2} M/2\) if \(\lvert y''\rvert\le M\) on the step. Subtracting the numerical recurrence yields an error recursion. If \(f\) is Lipschitz in \(y\) with constant \(L\),

\(\lvert e_{n+1}\rvert \le (1+hL)\lvert e_n\rvert+h^{2} M/2\).

Iterating this bound over a fixed time interval gives global error of order \(h\), with a constant involving the interval and \(L\). Local order two becomes global order one because many defects accumulate and propagate.

This derivation displays the hypotheses: solution smoothness, a Lipschitz bound, bounded step, and a fixed finite interval. It does not promise a uniform bound for arbitrarily long chaotic trajectories.

### Worked decay step

For \(y'=-2y\), \(y(0)=1\), Euler gives \(y_{n+1}=(1-2h)y_n\). With \(h=1/4\), the multiplier is \(1/2\), so values decay. With \(h=1\), the multiplier is \(-1\), so the approximation alternates forever even though the exact solution decays. A stable continuous problem can be paired with an unstable discretization.

## Absolute stability and the test equation

Apply a method to \(y'=\lambda y\). Its update has amplification \(R(z)\) for \(z=h \lambda\). The **absolute-stability region** is the set where \(\lvert R(z)\rvert\le 1\). For forward Euler, \(R(z)=1+z\); for backward Euler, \(R(z)=1/(1-z)\) when the implicit equation is solved exactly.

Absolute stability is a method property for a linear test problem. It is not the same as nonlinear stability, Lyapunov stability, or convergence. Still, it predicts whether decaying modes are numerically damped.

A system is called **stiff** when stability requirements force an explicit method to take steps far smaller than the scale on which the desired solution changes. The definition is problem- and method-dependent; a large coefficient alone is not a complete diagnosis.

## Runge–Kutta methods

Runge–Kutta methods combine several slope samples within a step. Classical RK4 uses four slopes and, for sufficiently smooth nonstiff problems, has local error order five and global error order four. Order conditions guarantee cancellation in a formal expansion; they do not make the method exact or universally stable.

Embedded pairs compute two related approximations of different order and use their difference as a local error estimate. A controller proposes

\(h_{\mathrm{new}} = \mathrm{safety} \times h \times (\mathrm{tol}/\mathrm{err})^{1/(p+1)}\),

then clamps growth and shrinkage. The exponent depends on which error estimate and order convention are used. A production controller also handles zero estimates, rejected steps, minimum steps, nonfinite states, and event locations.

## Relative and absolute tolerance

Component \(i\) is often scaled by

\(\mathrm{scale}_i = \mathrm{atol}_i + \mathrm{rtol}_i \max(\lvert y_i\rvert,\lvert y_{i,\mathrm{new}}\rvert)\).

The error norm combines \(\mathrm{err}_i/\mathrm{scale}_i\). Absolute tolerance controls near zero; relative tolerance controls proportional accuracy away from zero. One scalar tolerance can be inappropriate when components have different units.

Passing a local estimator does not directly bound global error. Step rejection controls local behavior under the estimator's model; global validation uses refinement, invariants, known solutions, or an independent method.

## Multistep and implicit methods

Linear multistep methods combine several past values. Consistency alone does not guarantee convergence. The Dahlquist equivalence principle states, for a fixed linear multistep method under its standard setup, convergence is equivalent to consistency plus zero-stability. Zero-stability controls the growth of perturbations in the homogeneous recurrence as \(h\) tends to zero.

Implicit methods require solving algebraic equations. An inexact nonlinear solve introduces another error budget. The nonlinear tolerance should be tight enough not to spoil time-discretization accuracy, but oversolving every early step wastes work.

## Structure and long time

For a Hamiltonian system, a symplectic integrator preserves a discrete symplectic form and often produces bounded oscillatory energy error over long times. It does not generally conserve the original Hamiltonian exactly. Projection onto a constraint can restore one invariant while disturbing another.

For positive populations or probabilities, a high-order method can produce negative intermediate or accepted values. Positivity preservation, monotonicity, conservation, reversibility, and high order are separate design goals.

## Reproducible numerical experiment

For any initial-value computation, record:

- equation evaluation and parameter units;
- initial value and uncertainty;
- method, tolerances, and error norm;
- accepted and rejected steps;
- nonlinear/linear solve tolerances for implicit steps;
- events, truncations, and stop reason;
- invariant or residual histories;
- endpoint comparison under tighter tolerance or halved maximum step.

### Step-doubling evidence

If a method has global error \(C h^p+o(h^p)\), results \(Y_h,Y_{h/2},Y_{h/4}\) should satisfy differences whose ratio approaches \(2^p\) in the asymptotic regime. Failure may signal insufficient refinement, nonsmoothness, stiffness, roundoff, or a bug. Observing the expected ratio supports—but does not prove—the assumed expansion.

## Common errors

- Calling RK4 “accurate” without step size, smoothness, interval, or comparison.
- Equating a local error estimate with global truth.
- Tightening relative tolerance near a zero crossing without an absolute scale.
- Interpreting numerical damping as physical dissipation.
- Claiming a long computed trajectory establishes chaos or an invariant measure.

## A precise one-step convergence argument

Choose a vector norm, a final time $T>t_0$, and a common convex state region containing both paths. Suppose $f$ is continuous in time and Lipschitz in state there with constant $L\ge0$. Assume the specified exact solution exists throughout the interval and satisfies $\|y''(t)\|\le M$. These hypotheses are mathematical inputs. Returning finite numbers cannot establish them.

**Definition 1 (Step defect).** For a numerical step map $\Psi_h(t,v)$, the unscaled defect along an exact solution is
$$d_n=y(t_n+h)-\Psi_h(t_n,y(t_n)).$$
A local order $p+1$ estimate means $\|d_n\|\le Ch^{p+1}$ uniformly on the specified interval. Some texts divide the defect by $h$ and call that quotient the local truncation error; its order is then $p$. Identify the convention before comparing constants.

**Theorem 2 (Euler's fixed-interval bound).** For constant $h>0$, $t_n=t_0+nh\le T$, exact arithmetic, and Euler iterates in the common region,
$$\|e_n\|\le e^{L(t_n-t_0)}\|e_0\|+
\frac{Mh}{2L}\left(e^{L(t_n-t_0)}-1\right)$$
when $L>0$. For $L=0$ replace the second term by $Mh(t_n-t_0)/2$.

*Proof.* Taylor's integral remainder bounds each defect by $Mh^2/2$. Subtracting the two step equations gives
$\|e_{n+1}\|\le(1+hL)\|e_n\|+Mh^2/2$.
Iteration yields
$$\|e_n\|\le(1+hL)^n\|e_0\|+
\frac{Mh^2}{2}\sum_{j=0}^{n-1}(1+hL)^j.$$
For positive $L$ the sum is $((1+hL)^n-1)/(hL)$. The inequality $1+x\le e^x$ gives the result. For $L=0$ there are $n$ equal summands and $nh=t_n-t_0$. ∎

This proves first-order convergence on a fixed interval for convergent starting values. It does not prove that a numerical path stays in the required region; an invariant-region or continuation argument may be needed. A method must also respect the domain of $f$. If a trial state leaves that domain, evaluating a convenient extrapolated formula changes the mathematical problem.

Arithmetic perturbations $\rho_n$ add an accumulated term
$\sum_{j=0}^{n-1}(1+hL)^{n-1-j}\|\rho_j\|$.
More, smaller steps introduce more operations. The exact-arithmetic limit therefore does not identify the best step in a fixed machine format. Measurement uncertainty in the starting value appears in the first term and cannot be removed by refining the discretization.

**Worked example 1 (A conservative Euler guarantee).** For $y'=-2y$, $y(0)=1$, on $[0,1]$, the exact solution has $|y''|\le4$ and $L=2$ is valid globally. The theorem gives $|e_N|\le h(e^2-1)$ when $Nh=1$. At $h=0.01$ this is about $0.0639$. This conservative bound uses the generic growth factor $1+2h$ even though this equation contracts for suitable Euler steps. A pessimistic valid bound and a sharp observed error answer different questions. Neither should be relabelled as the other.

## Runge–Kutta coefficients and stage equations

An $s$-stage Runge–Kutta formula has coefficients $A=(a_{ij})$, $b$, and $c$:
$$
k_i=f\left(t_n+c_i h,y_n+h\sum_{j=1}^s a_{ij}k_j\right),
\qquad y_{n+1}=y_n+h\sum_{i=1}^s b_i k_i.
$$
For the internally consistent methods below $c=A\mathbf1$. A strictly lower-triangular $A$ permits the stages to be evaluated in sequence. A diagonal or fully populated $A$ generally requires an algebraic solve. The word implicit identifies equations to solve; existence, uniqueness and convergence of the solver still require their own hypotheses.

The following tableaux specify familiar methods:
$$
\begin{array}{c|c}0&0\\\hline&1\end{array}
\quad\text{forward Euler},\qquad
\begin{array}{c|cc}0&0&0\\1&1&0\\\hline&1/2&1/2\end{array}
\quad\text{Heun},
$$
$$
\begin{array}{c|rrrr}
0&0&0&0&0\\
1/2&1/2&0&0&0\\
1/2&0&1/2&0&0\\
1&0&0&1&0\\\hline
&1/6&1/3&1/3&1/6
\end{array}
\quad\text{classical RK4},
$$
$$
\begin{array}{c|c}1&1\\\hline&1\end{array}
\quad\text{backward Euler},\qquad
\begin{array}{c|c}1/2&1/2\\\hline&1\end{array}
\quad\text{implicit midpoint}.
$$

**Proposition 3 (First two order conditions).** For sufficiently differentiable $f$, with $c=A\mathbf1$, the conditions $b^{\mathsf T}\mathbf1=1$ and $b^{\mathsf T}c=1/2$ give local error $O(h^3)$.

*Proof.* Expand the stages about $(t_n,y_n)$. Since $k_j=f+O(h)$,
$$k_i=f+hc_i f_t+h\left(\sum_j a_{ij}\right)f_y f+O(h^2)
=f+hc_i(f_t+f_yf)+O(h^2).$$
Substitution into the update produces
$y+h(b^{\mathsf T}\mathbf1)f+h^2(b^{\mathsf T}c)(f_t+f_yf)+O(h^3)$.
The exact Taylor expansion is $y+hf+h^2(f_t+f_yf)/2+O(h^3)$. The stated identities match both coefficients. Bounded derivatives make these remainders uniform on the prescribed region. ∎

These two conditions alone do not establish fourth order. RK4's further conditions include branching derivative terms, rather than only agreement on a scalar linear equation. Its standard fourth-order theorem is used here under sufficient smoothness and stable finite-time propagation; full rooted-tree order theory is further reading. Numerical agreement on one exponential cannot supply the missing general proof.

**Worked example 2 (Heun with time-dependent forcing).** Let $y'=t+y$, $y(0)=1$, and $h=0.1$. The first slope is $k_1=1$. The predicted value is $1.1$ at time $0.1$, so $k_2=1.2$. The accepted value is $1+0.05(1+1.2)=1.11$. Solving the equation analytically gives $y(t)=2e^t-t-1$, hence $y(0.1)\approx1.11034184$. The local error is about $0.00034184$ from exact initial data. Evaluating the second slope at the old time would change the rule and invalidate its order calculation.

## Stability functions, poles, and A-stability

For the test equation the stage vector satisfies
$k=\lambda y_n\mathbf1+zAk$, $z=h\lambda$. Wherever $I-zA$ is invertible,
$$R(z)=1+z\,b^{\mathsf T}(I-zA)^{-1}\mathbf1.$$
Stage solvability belongs in the specification: poles do not belong to the region. Forward Euler gives $1+z$, Heun gives $1+z+z^2/2$, and RK4 gives
$1+z+z^2/2+z^3/6+z^4/24$.
Their regions are exactly the sets where these polynomials have modulus at most one. On the negative real axis Heun is stable for $-2\le z\le0$: its quadratic is at least $1/2$, and it is at most one exactly on that interval.

**Definition 4 (A-stability and L-stability).** A method is A-stable if its scalar stage equations are well-defined and $|R(z)|\le1$ for all $\operatorname{Re}z\le0$. L-stability adds $R(z)\to0$ as $|z|\to\infty$ within that half-plane. Some conventions state the condition on the open half-plane and extend to regular boundary points.

**Proposition 5 (Two implicit stability regions).** Backward Euler is A-stable and L-stable. Implicit midpoint is A-stable but is not L-stable.

*Proof.* Backward Euler has $R(z)=1/(1-z)$. For $\operatorname{Re}z\le0$,
$|1-z|^2=1-2\operatorname{Re}z+|z|^2\ge1$.
Its denominator is nonzero and its multiplier tends to zero at infinity. Midpoint has $R(z)=(1+z/2)/(1-z/2)$. The difference of squared denominator and numerator moduli is $-2\operatorname{Re}z\ge0$, proving stability and excluding its pole at $2$. Along the negative real axis this multiplier approaches $-1$, disproving L-stability. ∎

Midpoint and trapezoidal integration have the same multiplier on the linear test equation and different equations on a nonlinear problem. The test equation does not make them interchangeable. A consistent explicit Runge–Kutta method has a nonconstant polynomial stability function. Such a polynomial is unbounded on the negative real axis, so no such method is A-stable.

For a constant normal matrix in the Euclidean norm, scalar eigenmodes provide an orthogonal decomposition. Diagonalizable matrices with poorly conditioned eigenvectors introduce an additional conditioning factor. Nonnormal systems can amplify perturbations transiently even when eigenvalues lie inside a scalar stability region. Thus eigenvalue placement is a useful diagnostic with a stated scope.

**Worked example 3 (Damping versus resolving).** For $y'=-100y$, $y_0=1$, and $h=0.1$, backward Euler gives $1/11$. Midpoint gives $(1-5)/(1+5)=-2/3$. Both multipliers are stable, while the exact answer is $e^{-10}\approx0.0000454$. Backward Euler suppresses the unresolved mode more strongly. Neither value resolves the fast transient. If only a later slow output matters, that output needs a separate refinement assessment.

## A step specification with expected output

The pseudocode below specifies one Heun step. It exposes the second stage's time and the exceptional-value checks.

~~~text
heun_step(f, t, y, h):
    require h > 0 and finite(t, y, h)
    k1 = f(t, y)
    predictor = y + h*k1
    k2 = f(t+h, predictor)
    candidate = y + (h/2)*(k1+k2)
    require finite(k1, predictor, k2, candidate)
    return candidate
~~~

For $f(t,y)=t+y$, $t=0$, $y=1$, $h=0.1$, exact decimal arithmetic returns $1.11$, as derived above. A binary implementation should state its format and allow the appropriate rounding discrepancy. This is an expected result from the formula, not a report of an executed program.

An adaptive Heun–Euler pair reuses these stages and compares the Heun candidate with Euler's predictor. The difference estimates the lower-order Euler member's $O(h^2)$ local defect. Its controller exponent is therefore $1/2$ even when the second-order candidate is accepted. Rejection must restore the old time and state; a shortened retry starts from those accepted data. The last step must be clipped to reach the requested final time.

Output interpolation deserves its own error contract. A method may have accurate mesh-point values and an inaccurate low-order interpolant. Event-time errors can be especially sensitive when the event function has a small derivative along the path. Bracketing an event and refining its location helps, but cannot correct an earlier state error that already moved the crossing. Record the event direction, tolerance and grazing policy as well as the state tolerance.

When comparing methods, count work appropriate to the implementation: right-hand-side calls, Jacobian evaluations, factorizations, linear solves and rejected attempts. One implicit step can cost much more than one explicit stage. Report accuracy at fixed physical outputs and a common target before interpreting work. A method's nominal order is only one part of that comparison.

## Practice with solutions

### Exercise 1: Stability interval
<a id="initial-value-methods-ex-1"></a>

For real negative \(\lambda\), when is forward Euler stable on the test equation?

<details>
<summary>Hint 1</summary>

**Hint.** Find the scalar multiplier.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Require it to lie between minus one and one.

</details>

<details>
<summary>Solution</summary>

**Solution.** Require \(\lvert 1+h \lambda\rvert\le 1\). With \(h>0\) and \(\lambda<0\), this becomes \(-2\le h \lambda\le 0\), or \(0\le h\le 2/\lvert \lambda\rvert\).

</details>

### Exercise 2: Error ratio
<a id="initial-value-methods-ex-2"></a>

A second-order method gives endpoint differences \(\lvert Y_h-Y_{h/2}\rvert=0.012\) and \(\lvert Y_{h/2}-Y_{h/4}\rvert=0.0031\). What does the ratio suggest?

<details>
<summary>Hint 1</summary>

**Hint.** Form the ratio of successive differences.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare it with two raised to the expected order.

</details>

<details>
<summary>Solution</summary>

**Solution.** The ratio is about \(3.87\), near \(2^{2}=4\), consistent with second-order behavior. It is evidence at these scales, not a rigorous bound.

</details>

### Exercise 3: Units
<a id="initial-value-methods-ex-3"></a>

Why might one absolute tolerance be wrong for state \((\text{temperature in kelvin}, \text{concentration in mol/L})\)?

<details>
<summary>Hint 1</summary>

**Hint.** Write the unit of each error component.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Absolute tolerances need matching units.

</details>

<details>
<summary>Solution</summary>

**Solution.** The components have different units and decision scales. A single dimensional number cannot express both error contracts coherently; componentwise absolute scales and a dimensionless relative tolerance are needed.

</details>

## Claim boundary

This chapter establishes how algorithms approximate a specified initial-value problem under regularity and stability assumptions. It does not validate the underlying model or prove long-time dynamical properties from finite trajectories.


## Further exercises

### Exercise 4: Defect convention
<a id="initial-value-methods-ex-4"></a>

A method's unscaled defect is bounded by $7h^4$. State its local and expected global orders under stable propagation on a fixed interval.

<details>
<summary>Hint 1</summary>

**Hint.** Distinguish the increment error from that error divided by the step.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Count how many defects occur on a fixed interval.

</details>

<details>
<summary>Solution</summary>

**Solution.** The unscaled local defect has order four; the divided defect has order three. Uniform stable propagation and convergent starts give third-order global error. The local estimate alone supplies no such propagation bound.

</details>

### Exercise 5: Heun consistency
<a id="initial-value-methods-ex-5"></a>

Check the two stated order conditions for Heun's tableau.

<details>
<summary>Hint 1</summary>

**Hint.** Read the final row for b.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The abscissae are zero and one.

</details>

<details>
<summary>Solution</summary>

**Solution.** Here $b=(1/2,1/2)$ and $c=(0,1)$, so $b^{\mathsf T}\mathbf1=1$ and $b^{\mathsf T}c=1/2$. The proposition gives local order three, and stable finite-time propagation gives global order two under its hypotheses.

</details>

### Exercise 6: Midpoint oscillations
<a id="initial-value-methods-ex-6"></a>

For real $\eta$, prove $|R(i\eta)|=1$ for midpoint and interpret it.

<details>
<summary>Hint 1</summary>

**Hint.** Take squared moduli.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The numerator and denominator have equal squared modulus.

</details>

<details>
<summary>Solution</summary>

**Solution.** Both squared moduli equal $1+\eta^2/4$, so their quotient has modulus one. The test oscillation is neither damped nor amplified. A phase error can remain; unit modulus does not imply the correct frequency.

</details>

### Exercise 7: Tolerance scaling
<a id="initial-value-methods-ex-7"></a>

With $atol=10^{-6}$, $rtol=10^{-3}$, old value $0.01$, new value $0.02$, and estimated error $10^{-5}$, compute the scaled error.

<details>
<summary>Hint 1</summary>

**Hint.** Use the larger state magnitude.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Add the absolute and relative allowances before dividing.

</details>

<details>
<summary>Solution</summary>

**Solution.** The scale is $10^{-6}+10^{-3}(0.02)=2.1\times10^{-5}$. The scaled error is $10/21<1$, so this scalar local test passes. Domain and stage-solve conditions still apply; global error is not certified.

</details>

### Exercise 8: Arithmetic accumulation
<a id="initial-value-methods-ex-8"></a>

Assume $L=0$, exact initial data, step defects at most $Ch^2$, and arithmetic perturbations at most $\epsilon$ per step. Bound error at $T=Nh$.

<details>
<summary>Hint 1</summary>

**Hint.** Add both terms to the recurrence.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** There is no amplification factor when L is zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** Iteration gives $\|e_N\|\le N(Ch^2+\epsilon)=CTh+T\epsilon/h$. The first term decreases and the second increases as the step shrinks. This worst-case bound explains why refinement in a fixed format can reach an arithmetic floor.

</details>

### Exercise 9: Rejected-step state
<a id="initial-value-methods-ex-9"></a>

A solver overwrites its accepted state with a rejected trial candidate. What must it do before a shorter retry?

<details>
<summary>Hint 1</summary>

**Hint.** Identify the data at the beginning of the step.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** The shorter step must approximate the same initial-value subproblem.

</details>

<details>
<summary>Solution</summary>

**Solution.** Restore the old accepted time and state, remove the rejected value from accepted history, and recompute stages with the smaller step. Keep the rejected attempt as a diagnostic. Retrying from the rejected state solves a different subproblem.

</details>

### Exercise 10: Stiff comparison
<a id="initial-value-methods-ex-10"></a>

At $z=-20$, compare Euler, backward Euler and midpoint multipliers.

<details>
<summary>Hint 1</summary>

**Hint.** Substitute z into each stability function.

</details>

<details>
<summary>Hint 2</summary>

**Hint.** Compare moduli before discussing accuracy.

</details>

<details>
<summary>Solution</summary>

**Solution.** The multipliers are $-19$, $1/21$, and $-9/11$. Euler is unstable; the implicit values are bounded. The exact multiplier $e^{-20}$ is far smaller, so both implicit steps fail to resolve the transient and midpoint retains an alternating remnant.

</details>

## Reading the output at the requested scale

Local step selection and the scientific output need a common scale. If the desired quantity is an accumulated integral, a threshold crossing or an oscillation phase, endpoint state tolerances alone may be a poor proxy. Add the integral as an additional state with its own units and absolute tolerance, or derive an output sensitivity bound. For an event, record how state interpolation and root location contribute separately. A nearly tangent crossing can amplify a small state discrepancy into a large event-time discrepancy.

Initial uncertainty also changes the meaning of refinement. Integrating the same nominal initial state with successively smaller steps examines numerical error conditional on that state. It does not narrow a measurement interval for the true initial value. For a stable dissipative mode the initial uncertainty may shrink dynamically; for an unstable mode it may grow. The method's error estimator does not decide which uncertainty model is appropriate.

A complete finite-time report therefore includes the specified equation, the represented initial data, accepted output times, actual method coefficients, stopping reason and a comparison at a finer numerical scale. Report domain failures or a minimum-step stop as outcomes, rather than replacing the request by a nearby problem whose path happens to remain finite.

## Sources

The Euler and stability proofs are derived here. For an author-maintained account of scalar stability regions, see Driscoll and Braun, [Absolute stability](https://fncbook.com/absstab-diffusion/). Their [Stiffness](https://fncbook.com/stiffness/) section states the second Dahlquist barrier. Hairer, Nørsett and Wanner, *Solving Ordinary Differential Equations I*, second revised edition (1993), is further reading for complete Runge–Kutta order theory; an exact external theorem locator for that omitted proof is not asserted.

## Summary

A step rule has stage equations, a defect and a propagation mechanism. Euler's estimate shows how local defects become fixed-time global error. Runge–Kutta tableaux specify stage times and weights, while absolute-stability regions describe scalar amplification. A-stability, stiff damping, tolerances, admissible domains and solve accuracy address distinct parts of a computation. The next chapter adds history, parasitic roots and algebraic constraints.
