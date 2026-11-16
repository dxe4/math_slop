var e=`---
parent_id: book-dynamical-systems-first-course
chapter_id: numerical-experiments
title: "Numerical Experiments in Dynamics"
level: advanced-undergraduate
status: draft
license: CC BY-SA 4.0
---

# Numerical Experiments in Dynamics

Computation is an essential way to discover dynamical questions. It can locate an equilibrium, suggest a bifurcation, reveal an invariant-looking region and compare candidate models. Its mathematical value increases when the target is stated before the experiment: a finite endpoint, an event time, a conserved quantity, a cycle multiplier or a long-time average are different outputs with different error mechanisms.

This chapter develops a protocol grounded in proofs rather than a list of attractive plots. We prove finite-horizon propagation bounds, derive a residual certificate and examine examples where a plausible numerical trajectory has the wrong qualitative behaviour. We then separate pointwise accuracy, structural fidelity and statistical evidence. No numerical runs are reported here; the worked examples are exact calculations and proposed experiments have explicit unresolved outcomes.

The numerical-analysis shelf supplies the algorithms: [initial-value methods](../numerical-mathematics-error-algorithms/initial-value-methods.md), [multistep, stiff and DAE methods](../numerical-mathematics-error-algorithms/multistep-stiff-dae-methods.md), [geometric numerical integration](../numerical-mathematics-error-algorithms/geometric-numerical-integration.md), and the [software-audit capstone](../numerical-mathematics-error-algorithms/numerical-capstone-software-audit.md). Read those for tableaux, implicit solves and detailed stability regions. Here the focus is how numerical evidence answers a dynamical question.

The unchanged [Verified Computation and Long-Time Claims](../differential-equations-verified-dynamics/verified-computation-long-time.md) is credited as a seed. Its original mathematics, solved questions and identities remain available. The new exposition uses proper mathematical notation and does not relocate or retire that source.

## Specify the mathematical target

**Definition 15.1 (A numerical dynamical experiment).** An experiment specifies a map or differential equation, its domain and parameters, initial data with uncertainty, an output functional, a finite computational protocol and a rule for interpreting its output. The protocol includes arithmetic, method, resolution, stopping rules and failure outcomes.

A statement such as “simulate the Lorenz system accurately” is incomplete. Predicting a coordinate at time two is different from estimating a lobe occupation fraction over a long interval. The first is a finite-time initial-value question. The second needs a sampling mechanism, a measure-theoretic interpretation and control of temporal dependence. Refining the same trajectory addresses part of the first question but does not by itself settle the second.

Initial-data uncertainty also belongs to the target. If the physical initial state is known only within a ball, an extremely accurate integration from its centre does not determine the whole uncertainty set. Numerical discretization error and sensitivity to data must be reported separately, even when both are amplified by the dynamics.

For maps, the mathematical update is already discrete, but arithmetic can introduce a defect at every iteration. For flows, time discretization adds a second approximation. Event location, interpolation and nonlinear solves may add others. A meaningful error budget identifies their contributions instead of assigning all disagreement to “chaos.”

## A finite-horizon propagation theorem

**Definition 15.2 (One-step defect).** Let $\\Psi_h$ be a numerical step map and $y(t)$ the specified exact solution. Its unscaled local defect is
$$d_n=y(t_{n+1})-\\Psi_h(y(t_n)).$$
This chapter uses the unscaled convention: a method of global order $p$ typically has defects of order $h^{p+1}$ under suitable smoothness. Some sources divide by $h$; their stated local order then differs by one.

**Theorem 15.3 (A conditional fixed-horizon error bound).** Let $t_n=nh\\le T$, and suppose both exact and computed states remain in a common region on which
$$
\\|\\Psi_h(u)-\\Psi_h(v)\\|\\le(1+Lh)\\|u-v\\|,
\\qquad \\|d_n\\|\\le Ch^{p+1},
$$
with $L,C\\ge0$ and an integer $p\\ge1$. Let the implemented step be $Y_{n+1}=\\Psi_h(Y_n)+\\rho_n$, where $\\|\\rho_n\\|\\le\\eta$. In a fixed norm, for $L>0$,
$$
\\|y(t_n)-Y_n\\|
\\le e^{Lt_n}\\|y(0)-Y_0\\|
+\\left(Ch^p+\\frac{\\eta}{h}\\right)\\frac{e^{Lt_n}-1}{L}.
$$
For $L=0$, replace the last factor by $t_n$.

*Proof.* Subtract exact and implemented updates, add and subtract $\\Psi_h(y(t_n))$, and use the assumptions:
$$E_{n+1}\\le(1+Lh)E_n+Ch^{p+1}+\\eta.$$
Iterating gives
$$
E_n\\le(1+Lh)^nE_0+
(Ch^{p+1}+\\eta)\\sum_{j=0}^{n-1}(1+Lh)^j.
$$
For $L>0$ the geometric sum is $((1+Lh)^n-1)/(Lh)$. Use $(1+Lh)^n\\le e^{Lnh}$. For $L=0$ the sum is $n=t_n/h$. ∎

Every hypothesis does work. Smoothness is needed to justify a local defect estimate for a chosen method. The common-region assumption may require an invariant-set or enclosure argument. The Lipschitz factor is an upper bound, often pessimistic. The theorem holds on a fixed finite interval; its exponential factor can become practically useless as the horizon grows.

The arithmetic term also explains why exact-arithmetic convergence does not say “smaller steps always improve a fixed machine computation.” If a step incurs a roughly fixed absolute perturbation, taking more steps increases the accumulated worst-case budget. Real roundoff is often less adversarial than this bound, but an unproved cancellation assumption cannot be used as a certificate.

For an ODE with a Lipschitz vector field, forward Euler has step factor at most $1+Lh$. Taylor's integral remainder gives $C=M/2$ and $p=1$ if $\\|y''\\|\\le M$. The theorem thus recovers first-order convergence on a fixed interval. Higher-order methods require their own smoothness and defect analysis rather than a label alone.

**Example 15.4 (A conservative logistic prediction horizon).** Suppose exact and perturbed logistic iterates at $r=4$ remain in $[0,1]$. Since $|f_4'|\\le4$, an initial error $\\epsilon$ and per-step arithmetic defects bounded by $\\eta$ give
$$E_n\\le4^n\\epsilon+\\eta\\frac{4^n-1}{3}.$$
If $\\eta=0$ and $\\epsilon=10^{-12}$, the sufficient condition $4^n10^{-12}\\le10^{-3}$ becomes $n\\le\\log(10^9)/\\log4$. This is a worst-case guarantee, not a measured Lyapunov prediction. Some orbits contract or have exceptional structure; others are highly unstable. The estimate makes its domain explicit: if a computed iterate leaves the interval, the derivative bound must be extended or the argument revised. Clipping the state back into the interval changes the implemented map and introduces an additional defect.

## A posteriori information from a residual

A discrete method comparison is useful, but a continuous reconstructed path can support a direct residual argument.

**Theorem 15.5 (Residual-to-trajectory bound).** Let $F$ be $L$-Lipschitz on a convex region containing an exact solution $y$ of $y'=F(y)$ and an absolutely continuous approximate path $u$ on $[0,T]$. Suppose its residual $r(t)=u'(t)-F(u(t))$ exists almost everywhere and is integrable. Then
$$
\\|u(t)-y(t)\\|
\\le e^{Lt}\\|u(0)-y(0)\\|
+\\int_0^t e^{L(t-s)}\\|r(s)\\|\\,ds.
$$

*Proof.* Integrating the equations and subtracting gives an error norm bounded by
$$E(t)\\le E(0)+\\int_0^t(LE(s)+\\|r(s)\\|)\\,ds.$$
Let the right-hand side be $w(t)$. Then $E\\le w$ and $w'\\le Lw+\\|r\\|$ almost everywhere. Multiplying by $e^{-Lt}$, integrating and using $w(0)=E(0)$ yields the stated estimate. This argument does not require the norm of the error itself to be differentiable. ∎

The theorem is conditional on existence and a common domain. A rigorous implementation can combine it with a bootstrap: prove that the resulting error tube stays inside a region where the assumptions hold, then use continuation to extend the exact solution across the whole interval. Sampling a residual at a few times does not bound its supremum or integral between samples. An interpolation polynomial and interval bounds for its residual can provide the missing information.

**Example 15.6 (A simple residual certificate).** For $y'=-y$, $y(0)=1$, choose the approximate path $u(t)=1-t$ on $0\\le t\\le1/2$. Its residual is $r(t)=-1+(1-t)=-t$. With $L=1$ and exact starting value, the theorem gives
$$|u(t)-y(t)|\\le\\int_0^t e^{t-s}s\\,ds=e^t-1-t.$$
The exact discrepancy is $e^{-t}-(1-t)$, also nonnegative but smaller than the conservative bound. A small residual has been converted into a finite-time statement about the specified initial-value solution. It has not established a long-time invariant measure or an exact nearby differential equation valid forever.

## Stability and geometric fidelity

A high-order method can still be qualitatively wrong if its stability requirements are ignored. Apply forward Euler to $y'=-ay$, $a>0$:
$$Y_{n+1}=(1-ah)Y_n.$$
Strict decay of numerical amplitudes requires $|1-ah|<1$, or $0<ah<2$. At $ah=2$ the numerical orbit alternates without decay; beyond it amplitudes grow, although the exact solution always decays.

**Example 15.7 (A hidden fast scale).** For $y'=-1000y$, take $h=0.003$. The Euler multiplier is $-2$, so a unit starting value produces $1,-2,4,-8,\\ldots$. The exact solution has multiplier $e^{-3}$ over the same step and rapidly decays. This is numerical instability, not physical sensitive dependence. Backward Euler instead gives multiplier $1/(1+1000h)=1/4$ when its scalar implicit equation is solved exactly. The example motivates a stiff method, while also reminding us that general implicit methods introduce nonlinear and linear solve errors. Those errors need their own stopping and failure rules.

Conservative dynamics poses a different question. A method can reproduce a stable oscillator's short-time coordinates well while slowly changing its energy. Structural fidelity is an additional design target.

**Example 15.8 (Oscillator energy under two methods).** For $q'=p$, $p'=-q$, explicit Euler gives $q_{\\rm new}=q+hp$, $p_{\\rm new}=p-hq$ for one numerical step. Expanding squares shows
$$q_{\\rm new}^2+p_{\\rm new}^2=(1+h^2)(q^2+p^2).$$
The energy therefore grows by $(1+h^2)^n$ after $n$ steps. It converges on fixed time intervals as $h\\to0$ but drifts at fixed $h$ over long time.

Momentum-first symplectic Euler uses $p_{\\rm new}=p-hq$, $q_{\\rm new}=q+hp_{\\rm new}$. To verify its invariant, insert $q_{\\rm new}=(1-h^2)q+hp$ and $p_{\\rm new}=p-hq$ into $q_{\\rm new}^2+p_{\\rm new}^2-hq_{\\rm new}p_{\\rm new}$. The coefficients of $q^2,p^2,qp$ are respectively $(1-h^2)^2+h^2+h^2(1-h^2)=1$, $h^2+1-h^2=1$, and $2h(1-h^2)-2h-h(1-2h^2)=-h$. Thus it preserves
$$H_h(q,p)=\\frac12(q^2+p^2-hqp).$$
For $|h|<2$, this quadratic form is positive definite because $|qp|\\le(q^2+p^2)/2$. Writing $a=|h|/2<1$, one obtains $(1-a)H\\le H_h\\le(1+a)H$, where $H=(q^2+p^2)/2$. Conservation of $H_h$ bounds $H_n/H_0$ between $(1-a)/(1+a)$ and $(1+a)/(1-a)$. Thus original energy remains uniformly close for small fixed step in this exact oscillator example. Phase error can still accumulate. Neither exact energy conservation nor general infinite-time accuracy follows from the word “symplectic.”

The full [geometric integration chapter](../numerical-mathematics-error-algorithms/geometric-numerical-integration.md) derives symplectic Euler, Störmer–Verlet and the limitations of modified-equation arguments. Variable step sizes or projections may alter the preserved structure and need separate analysis.

## Refinement, events and observables

If $Y_h=y(T)+Ch^p+o(h^p)$, differences at $h,h/2,h/4$ have asymptotic ratio $2^p$, provided the leading coefficient is nonzero. This is an implication of an assumed expansion, not a theorem that every observed ratio proves the expansion. Shared implementation mistakes, unresolved stiffness, nonsmooth events, cancellation and roundoff can all interfere.

Compare a physical observable as well as the full state. If $g$ is $K$-Lipschitz and two paths stay within $\\epsilon(t)$, their finite-time averages differ by at most $(K/T)\\int_0^T\\epsilon(t)\\,dt$, before quadrature error. This follows by integrating $|g(u)-g(y)|\\le K\\|u-y\\|$. A state bound therefore supports an observable bound, but a small observable discrepancy does not imply small state error: the observable can hide directions.

Return maps require accurate event times, not merely values at a fixed mesh. Let $\\psi(t)=g(y(t))$ be continuously differentiable and have a unique zero $t_*$ in an interval and suppose $|\\psi'(t)|\\ge\\kappa>0$ throughout that interval. Continuity keeps the derivative's sign fixed. If an approximate event time $\\tau$ in the interval has $|\\psi(\\tau)|\\le\\delta$, the mean value theorem gives $|\\tau-t_*|\\le\\delta/\\kappa$. The lower crossing-speed bound is the transversality hypothesis. Near a tangent event it fails, so a tiny state or event-function error can produce a much larger time error.

A Poincaré-map experiment should therefore report the section, crossing direction, interpolation rule and event tolerance, and exclude ambiguous multiple crossings. Errors in the return time affect both the recorded state and its derivative. A list of mesh points near a section is not yet an accurate return map.

## Long-time statistics require another argument

Pointwise separation of two refined chaotic trajectories does not automatically invalidate all statistical conclusions, but neither does agreement of their histograms establish them. The mathematical target has changed. An invariant probability measure, its basin and the observable must be identified before a time average can be compared with a space average.

For an ergodic invariant probability and an integrable observable, the Birkhoff theorem gives almost-everywhere convergence of time averages to the measure average. It does not provide a universal finite-sample rate, independent samples or a certificate that a chosen initial point is typical. The theorem is cited, and the unchanged advanced seed discusses its scope. A discarded transient is a protocol choice, not proof that stationarity or ergodicity has been reached.

Even under stationarity, temporal dependence changes uncertainty. If $X_j$ is square-integrable with common variance $\\sigma^2>0$ and autocorrelations $\\rho_k$, expansion of the variance of the sample mean gives
$$
\\operatorname{Var}\\left(\\frac1N\\sum_{j=0}^{N-1}X_j\\right)
=\\frac{\\sigma^2}{N}\\left[1+2\\sum_{k=1}^{N-1}\\left(1-\\frac{k}{N}\\right)\\rho_k\\right].
$$
Indeed each lag-$k$ covariance occurs $N-k$ times above and below the diagonal. This identity assumes stationarity and finite second moments; it does not assume independence or prove a central limit theorem. If $\\sigma^2=0$, the mean has variance zero and the normalised correlations need not be defined. Treating every recorded time step as an independent observation can substantially understate uncertainty.

Finite precision imposes another conceptual limit. A deterministic map on finitely many representable states eventually repeats, by the pigeonhole principle, and thereafter cycles. This fact does not prove that the exact real-valued map has the same cycle. It is a property of the implemented finite-state system. Increasing precision can change the eventual period drastically without contradicting exact dynamics.

## Contractive structure can sharpen a residual certificate

The generic Lipschitz estimate uses the largest possible norm amplification,
which can be pessimistic for a dissipative system. For the scalar equation
$y'=-ay$, with a>0, let u be an absolutely continuous approximate path and
r=u'+au its residual. The difference e=u−y satisfies the exact inhomogeneous
linear equation e'=−ae+r. Multiplying by the integrating factor and integrating
gives
$$|e(t)|\\le e^{-at}|e(0)|+\\int_0^te^{-a(t-s)}|r(s)|\\,ds.$$
If the residual is bounded by δ throughout the interval, its contribution
is at most δ(1−e⁻ᵃᵗ)/a. The initial error decays and the accumulated residual
has a bounded effect. In contrast, applying the unsigned Lipschitz theorem
with constant a would introduce an exponentially growing upper bound. Both
are valid, but the sharper one uses the actual contraction sign.

This comparison explains why an error bound can be mathematically correct
and still too loose to answer a useful question. It also suggests what extra
structure an author should seek: a dissipative inner-product estimate, a
weighted norm or an invariant energy can reveal less amplification than
the largest derivative norm. The improvement must be proved for the system
and region at hand. Replacing an estimated exponent by a favourable sign
because a plot appears stable is not the same argument.

The certificate controls a specified solution on its defined time interval.
It does not identify a nonlinear invariant measure, and the uniform residual
bound must hold between reported sample times too. For a polynomial
reconstruction one can differentiate that reconstruction exactly and bound
the resulting residual analytically. A few small sampled residuals provide
different, weaker information.

## What Richardson cancellation actually assumes

Suppose a scalar output computed with step h has an asymptotic expansion
$Q_h=Q+c h^p+O(h^{p+1})$, with the same leading coefficient c for the
two refinements being compared. Then
$$R_h=\\frac{2^pQ_{h/2}-Q_h}{2^p-1}$$
has its leading hᵖ term cancelled, because the finer result contributes
exactly c hᵖ after multiplication by 2ᵖ. Its remaining error is of the
next order under the stated expansion. This is an algebraic consequence of
an asymptotic hypothesis; it is not a proof that any pair of plausible
numbers lies in that regime.

Likewise, the magnitude of the difference Qh−Qh/2 estimates the leading
error only when that expansion dominates the remainder. If a hidden fast
scale, event-location rule, nonsmooth forcing or inner solve controls the
output instead, the expected order may not yet appear. A zero leading
coefficient can make an observed ratio look better than the nominal method
order, while cancellation or roundoff can make it erratic. Three or more
resolutions help diagnose the issue but do not replace a regularity argument.

Choose the output carefully. In an oscillator, a method that preserves an
energy-like quantity can give nearly identical energy values at several
resolutions while its phase is inaccurate. Agreement in that observable
does not bound the error of both position and momentum. A return time,
phase difference or another independent observable can expose the missing
component. Refinement is strongest when paired with a theorem linking the
chosen output error to the physical or mathematical target.

## Refinement and arithmetic can compete

The fixed-horizon convergence theorem treats per-step defects of a known
order. Suppose arithmetic or inner solves additionally contribute an absolute
perturbation at most ε per accepted step. Even for a nonexpansive update,
N such perturbations can accumulate to Nε by the triangle inequality.
Over a fixed horizon with N approximately T/h, this worst-case contribution
is proportional to εT/h. Decreasing h reduces the truncation defect but
increases the number of opportunities for arithmetic error.

A simplified upper model has the form C hᵖ+εT/h, with positive constants.
Differentiating this scalar model gives the balancing scale
$h^{p+1}=\\varepsilon T/(pC)$. This is a conditional analytical example,
not a universal recommendation for choosing a step. Real perturbations may
be correlated, smaller than their worst bounds or affected by changing
precision and stopping tolerances. An unstable flow can amplify them further.
The calculation only establishes why refinement at fixed precision need
not improve an output indefinitely.

Record the arithmetic precision and the nonlinear stopping rule alongside
the mesh. If an implicit solve is terminated at a fixed loose tolerance,
its error can dominate the formal integration order. Solving it much more
accurately than every other error source may instead spend effort without
changing the warranted conclusion. An error budget connects these choices
to a specific output tolerance. It also permits an honest unresolved result
when no available precision and step combination closes the desired bound.

## A tangent event has a different sensitivity law

Consider the event function ψ(t)=(t−1)² on a time interval containing one.
It has a zero at one but no sign-changing crossing there. A uniformly small
perturbation ψε(t)=ψ(t)−ε, with ε>0, creates two zeros at one plus or minus
the square root of ε. The function perturbation is ε, yet the event-time
displacement is proportional to its square root, much larger than ε for
small errors. Adding ε instead removes the zero entirely.

Thus no uniform linear event-time error estimate can hold here. The
crossing-speed lower bound in the earlier mean-value estimate fails exactly
at the tangent zero. This is a mathematical sensitivity issue before a
root-finder or interpolation method has even been chosen. An algorithm
checking only signs at successive mesh points may miss the unperturbed
tangency and may also miss both perturbed crossings if they lie within
one mesh interval.

For a Poincaré return, specify a transversal section whose directional
derivative along the vector field stays away from zero near the intended
crossing. If the trajectory nearly grazes that section, report the resulting
uncertainty rather than assigning a precise return time from a small
event-function residual. Changing the section can sometimes improve
conditioning, but it changes the represented return coordinates and must
be described explicitly.

## A positive log-slope can belong to an exceptional orbit

For a logistic map with r>3, the nonzero fixed point has derivative 2−r,
whose magnitude exceeds one. The orbit starting exactly at that fixed point
stays there forever. Its asymptotic average log derivative is therefore the
positive number log|2−r|. On the invariant set consisting of this one point,
there is no sensitive dependence, no orbit complexity and no collection of
distinct periodic behaviours. The positive exponent describes instability
relative to nearby ambient states; it does not make the singleton dynamics
chaotic under the definitions of the chaos chapter.

This is why the logistic laboratory describes its finite clipped log-slope
quantity without using its sign as a certification of chaos. The implemented
average has an additional finite horizon and derivative floor, and its
floating orbit need not remain on an exceptional exact orbit. A theorem
about almost every initial condition under a specified invariant probability
is a different assertion again. Before interpreting an exponent, name the
orbit, ambient space, invariant subset and definition of chaotic behaviour.
Those choices prevent a useful growth diagnostic from carrying a stronger
conclusion than it proves.

## Observable accuracy requires its own scale

An observable may amplify state error differently from a coordinate norm.
If g is Lipschitz with constant K on a common region, a state-error bound
ε immediately gives an output-error bound Kε. The same principle gives the
finite-time-average inequality above after integration. Both conclusions
depend on one constant valid across the actual uncertainty tube, rather
than a derivative evaluated only at its centre.

Near a singular observable, such as reciprocal distance to a deleted
boundary, the derivative can grow without bound. Two very close states can
then have quite different reported outputs. Conversely, an observable
constant along an entire energy curve may conceal substantial phase error.
State accuracy and output accuracy are related through properties of the
specified observable; neither implies every possible reported quantity is
accurate. This distinction helps select a meaningful refinement comparison
and explains why a numerical experiment begins with its requested output.

## A protocol that preserves the meaning of evidence

Begin with an exact small case, such as decay, a known cycle or oscillator motion, to check the intended formula and units. State the requested output and its tolerance before inspecting a result. Record the method and arithmetic, including maximum step, nonlinear tolerances, event handling, discarded time and retained horizon. Store numeric tables underlying figures so that a plot can be interpreted independently of colour.

Use several forms of evidence that fail differently: an analytic bound, a residual, a structural identity, refinement and an independently formulated comparison. Agreement between two methods sharing the same mistaken model is not independent evidence for that model. A failed enclosure or exhausted precision budget should remain unresolved, with the first failing condition recorded.

For chaotic diagnostics, report finite-time tangent growth with its norm, normalisation scheme and horizon. A positive estimate remains a finite estimate. For a horseshoe or attractor claim, identify the established theorem and the hypotheses actually verified. For a fractal or Mandelbrot image, preserve the distinction between certified exterior, certified interior and unresolved samples.

A final report should connect each conclusion to the estimate supporting it. Finite-horizon convergence is a mathematical achievement; it need not be inflated into an infinite-time claim to be valuable. A computation that reveals an uncertainty boundary has also answered a useful question, provided that boundary is stated plainly.

## Exercises

### Exercise 1: Error recurrence
<a id="numerical-experiments-ex-1"></a>

Solve $E_{n+1}\\le aE_n+b$ for $a>1$, $b\\ge0$.

<details>
<summary>Hint 1</summary>

Expand the first few steps.

</details>

<details>
<summary>Hint 2</summary>

Sum a geometric series.

</details>

<details>
<summary>Solution</summary>

Induction gives $E_n\\le a^nE_0+b\\sum_{j=0}^{n-1}a^j=a^nE_0+b(a^n-1)/(a-1)$. This separates initial uncertainty from accumulated defects. It is an upper bound; equality is not required at each step.

</details>

### Exercise 2: Euler endpoint cases
<a id="numerical-experiments-ex-2"></a>

For $y'=-5y$, identify Euler steps giving strict amplitude decay, neutral alternation and growth.

<details>
<summary>Hint 1</summary>

Use multiplier $1-5h$.

</details>

<details>
<summary>Hint 2</summary>

Strict stability requires its magnitude below one.

</details>

<details>
<summary>Solution</summary>

For $0<h<2/5$, amplitudes decay. At $h=2/5$, the multiplier is minus one and the numerical orbit alternates without decay. For $h>2/5$, amplitudes grow. At $h=1/5$, the scheme reaches zero in one step; this numerical property does not make the exact exponential vanish.

</details>

### Exercise 3: Rounding budget
<a id="numerical-experiments-ex-3"></a>

Explain why a per-step absolute perturbation bound independent of $h$ produces an $\\eta/h$ term in a fixed-time error estimate.

<details>
<summary>Hint 1</summary>

The number of steps is proportional to $1/h$.

</details>

<details>
<summary>Hint 2</summary>

Inspect the geometric-sum factor.

</details>

<details>
<summary>Solution</summary>

There are approximately $T/h$ opportunities for perturbations over a fixed horizon. In the theorem the sum contributes $(e^{LT}-1)/(Lh)$, multiplying $\\eta$. Thus reducing $h$ improves truncation error while potentially increasing a conservative arithmetic budget. Exact-arithmetic convergence alone does not choose the optimal machine step.

</details>

### Exercise 4: Residual integral
<a id="numerical-experiments-ex-4"></a>

For $y'=-y$, $y(0)=1$, verify the residual and bound for $u(t)=1-t$.

<details>
<summary>Hint 1</summary>

Calculate $u'+u$.

</details>

<details>
<summary>Hint 2</summary>

Integrate $e^{t-s}s$ from zero to $t$.

</details>

<details>
<summary>Solution</summary>

The residual is $-t$. With $L=1$ and no initial error, the bound is $\\int_0^t e^{t-s}s\\,ds=e^t-1-t$. The exact solution is $e^{-t}$, whose discrepancy from $1-t$ is smaller. A valid upper bound need not be sharp.

</details>

### Exercise 5: Observed order
<a id="numerical-experiments-ex-5"></a>

Assume $Y_h=y+Ch^p+o(h^p)$ with $C\\ne0$. Derive the limiting ratio of successive refinement differences.

<details>
<summary>Hint 1</summary>

Subtract the two expansions.

</details>

<details>
<summary>Hint 2</summary>

Cancel the common leading coefficient.

</details>

<details>
<summary>Solution</summary>

The difference $Y_h-Y_{h/2}$ has leading term $Ch^p(1-2^{-p})$. The next difference has the same coefficient times $(h/2)^p$. Their ratio tends to $2^p$. Observing a finite ratio does not prove the expansion or exclude common implementation errors.

</details>

### Exercise 6: Oscillator drift
<a id="numerical-experiments-ex-6"></a>

Derive the explicit-Euler oscillator energy factor and explain its fixed-step long-time consequence.

<details>
<summary>Hint 1</summary>

Expand both updated squares.

</details>

<details>
<summary>Hint 2</summary>

The cross terms cancel.

</details>

<details>
<summary>Solution</summary>

The sum of squares becomes $(q+hp)^2+(p-hq)^2=(1+h^2)(q^2+p^2)$. Thus $H_n=(1+h^2)^nH_0$ in exact arithmetic. At fixed nonzero $h$ it grows without bound, despite fixed-time convergence as $h\\to0$. The limits in time and step size are different.

</details>

### Exercise 7: Modified quadratic form
<a id="numerical-experiments-ex-7"></a>

Show that $H_h=(q^2+p^2-hqp)/2$ is positive definite for $|h|<2$ and obtain energy equivalence bounds.

<details>
<summary>Hint 1</summary>

Use $|qp|\\le(q^2+p^2)/2$.

</details>

<details>
<summary>Hint 2</summary>

Set $a=|h|/2$.

</details>

<details>
<summary>Solution</summary>

The inequality gives $(1-a)H\\le H_h\\le(1+a)H$. For $a<1$ the lower bound is positive away from the origin, proving positive definiteness. If a method preserves $H_h$, these inequalities bound original energy uniformly, but they do not prove exact phase accuracy or conservation of $H$ itself.

</details>

### Exercise 8: Event-time sensitivity
<a id="numerical-experiments-ex-8"></a>

Suppose an event function has $|\\psi'|\\ge0.2$ near its unique zero and $|\\psi(\\tau)|\\le10^{-5}$. Bound the event-time error and state the needed interval condition.

<details>
<summary>Hint 1</summary>

Use the mean value theorem.

</details>

<details>
<summary>Hint 2</summary>

Both the true and approximate times must lie in the interval of the derivative bound.

</details>

<details>
<summary>Solution</summary>

The error is at most $10^{-5}/0.2=5\\cdot10^{-5}$. The conclusion requires both times in a common interval where the derivative is continuous, nonzero and bounded below in magnitude. At a tangency the estimate fails and a different analysis is needed.

</details>

### Exercise 9: Correlated samples
<a id="numerical-experiments-ex-9"></a>

For a stationary process with variance $\\sigma^2$, derive the variance of a mean of two observations with correlation $\\rho_1$.

<details>
<summary>Hint 1</summary>

Expand the variance of $(X_0+X_1)/2$.

</details>

<details>
<summary>Hint 2</summary>

There are two covariance terms.

</details>

<details>
<summary>Solution</summary>

The variance is $(1/4)(2\\sigma^2+2\\sigma^2\\rho_1)=\\sigma^2(1+\\rho_1)/2$. Positive correlation makes the variance larger than the independent-sample value $\\sigma^2/2$. This exact identity does not by itself give a distributional approximation or justify stationarity of a numerical trajectory.

</details>

### Exercise 10: Finite-state versus exact cycle
<a id="numerical-experiments-ex-10"></a>

Prove eventual periodicity of a deterministic update on a finite state set. Explain why it does not establish the same cycle for an exact real map.

<details>
<summary>Hint 1</summary>

Use the pigeonhole principle on one more iterate than the number of states.

</details>

<details>
<summary>Hint 2</summary>

After a repeated state, determinism repeats every subsequent update.

</details>

<details>
<summary>Solution</summary>

Among $M+1$ successive states in a set of size $M$, two coincide. Their later updates coincide step by step, producing a periodic tail. Rounded arithmetic defines that finite-state map, which generally differs from the exact real map. Its eventual cycle is therefore not evidence that the exact orbit has the same period.

</details>

## Sources

Original finite-horizon and residual proofs and exact worked calculations, acknowledging the unchanged [Verified Computation and Long-Time Claims](../differential-equations-verified-dynamics/verified-computation-long-time.md). Its original solutions remain available there.

- The current numerical-analysis chapters on [initial-value methods](../numerical-mathematics-error-algorithms/initial-value-methods.md), [stiff methods](../numerical-mathematics-error-algorithms/multistep-stiff-dae-methods.md), [geometric integration](../numerical-mathematics-error-algorithms/geometric-numerical-integration.md) and [software audits](../numerical-mathematics-error-algorithms/numerical-capstone-software-audit.md) supply the linked algorithmic preparation.
- Ernst Hairer, Christian Lubich and Gerhard Wanner, [Geometric Numerical Integration](https://doi.org/10.1007/3-540-30666-8), cited deeper analysis of long-time structure preservation.
- George D. Birkhoff, [Proof of the Ergodic Theorem](https://doi.org/10.1073/pnas.17.2.656), original cited almost-everywhere theorem; no finite-sample rate is inferred.
- Peter Walters, [An Introduction to Ergodic Theory](https://link.springer.com/book/9780387951522), further reading for invariant measures and the hypotheses behind long-time averages.

All displayed numerical examples are symbolic calculations, not claims of executed experiments. General shadowing, ergodic rates and validated long-time attractor certification require additional theorems and computations.

## Summary

A numerical experiment has a target, assumptions, an error budget and a finite interpretation. Proved propagation and residual bounds support fixed-horizon conclusions, while stability and geometric structure require separate checks. Event times and long-time averages have additional sensitivity and dependence issues. The course ends with a useful discipline: connect each dynamical claim to a theorem or a precisely described observation, and keep unresolved infinite-time questions visible.
`;export{e as default};