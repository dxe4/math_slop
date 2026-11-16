var e=`---
parent_id: book-numerical-mathematics-error-algorithms
matter_id: retained-dynamics-computation-reading
title: Verified Computation and Long-Time Claims
level: advanced-undergraduate
estimated_minutes: 300
license: CC BY-SA 4.0
---

# Verified Computation and Long-Time Claims

Most differential equations are encountered through computation. A credible computation states which mathematical problem was discretized, why the method is appropriate, what residual or refinement was checked, and how the requested output responds to error. Long-time dynamics require an additional discipline: pointwise trajectory accuracy, invariant statistics, and ergodic theorems are different claims.

This chapter proves the basic consistency–stability–convergence logic for one-step ODE methods, diagnoses stiffness and structure, and gives a measure-aware boundary for chaos and ergodicity.

## 1. One-step methods and exact local flow

For

$$z'=f(t,z),\\qquad z(t_0)=z_0,$$

a one-step method has

$$z_{n+1}=z_n+h\\Phi(t_n,z_n,h).$$

Explicit Euler uses Phi=f(t_n,z_n). Classical Runge–Kutta uses four staged evaluations. An implicit method defines z_{n+1} through an equation involving the new state.

Let z(t) be the exact solution. The **local defect** inserted by one step from exact data is

$$d_{n+1}=\\frac{z(t_{n+1})-z(t_n)}h-\\Phi(t_n,z(t_n),h).$$

A method is consistent of order p when the defect is order h to p for sufficiently smooth exact solutions. Equivalently, the unscaled one-step error is order h to p+1.

The **global error** e_n=z(t_n)-z_n accumulates every local error and propagates earlier errors through the dynamics and method. Local order does not become global order without stability.

## 2. Euler convergence proof

Assume Euler starts from the exact initial state, $z_0=z(t_0)$, so $e_0=0$. Let $f$ be $L$-Lipschitz in $z$ on a region containing exact and numerical paths and let the exact solution have bounded second derivative. Taylor’s theorem gives

$$z(t_{n+1})=z(t_n)+hf(t_n,z(t_n))+\\tau_{n+1},$$

with norm(tau) at most M h squared/2.

Euler gives

$$z_{n+1}=z_n+hf(t_n,z_n).$$

Subtract:

$$\\|e_{n+1}\\|\\le(1+hL)\\|e_n\\|+\\frac{Mh^2}2.$$

Iterating the discrete Gronwall inequality for $t_n\\le T$ yields

$$\\|e_n\\|\\le\\frac{Mh}{2L}[e^{L(t_n-t_0)}-1]$$

when $L$ is positive, and $\\lVert e_n\\rVert\\le Mh(t_n-t_0)/2$ when $L=0$. With an inexact initial state, the right side also contains the propagated term $(1+hL)^n\\lVert e_0\\rVert\\le e^{L(t_n-t_0)}\\lVert e_0\\rVert$.

Thus global error is order h on a fixed interval. Material qualifications:

- T is fixed while h tends to zero;
- f and the solution have stated regularity;
- both paths remain in the common Lipschitz region;
- exact arithmetic is assumed in this proof;
- the exponential constant can be huge.

For long unstable or chaotic trajectories, convergence on each fixed interval does not supply a practical horizon at fixed precision.

## 3. Absolute stability and the test equation

Apply a method to

$$x'=\\lambda x.$$

The exact one-step multiplier is exp(h lambda). A method has multiplier R(h lambda), its stability function. For Euler,

$$R(q)=1+q.$$

The **absolute stability region** is the set where |R(q)|<=1. For negative real lambda, Euler requires

$$-2\\le h\\lambda\\le0.$$

The exact solution decays for every negative lambda, but Euler oscillates with growing magnitude when h lambda<-2. This is numerical instability, distinct from physical or Lyapunov instability.

Backward Euler has

$$R(q)=\\frac1{1-q}.$$

Its stability region contains the entire left half-plane, so it is A-stable. For very negative q, its multiplier approaches zero, giving L-stability and strong damping of stiff fast modes.

Trapezoidal or implicit midpoint is A-stable but not L-stable; its multiplier approaches -1 along the negative real axis. It can preserve unwanted stiff oscillations even without growth.

## 4. Stiffness is a problem-method relation

A system is informally stiff when stability forces an explicit method to take steps much smaller than the time scale on which the desired solution changes. Consider

$$x'=-x,\\qquad y'=-1000[y-g(t)]+g'(t).$$

The exact solution y=g(t)+constant exp(-1000t). After a short transient, y follows slowly varying g, but Euler still needs h near 0.002 or smaller for stability of the hidden fast mode.

Stiffness depends on:

- eigenvalue and nonnormal structure;
- initial and forcing excitation of fast modes;
- requested accuracy and output;
- method stability region;
- nonlinear solver and Jacobian costs.

Implicit methods trade a stability restriction for algebraic solves. A reported ODE tolerance is incomplete without nonlinear convergence, Jacobian approximation, and linear-solver residual information.

## 5. Adaptivity and what a tolerance controls

Embedded Runge–Kutta pairs compute two approximations of different order from shared stages. Their difference estimates a scaled local error. A controller proposes

$$h_{\\mathrm{new}}=h\\,s\\,E^{-\\alpha},\\qquad s>0,\\quad\\alpha>0,$$

where $s$ is the safety factor and $E>0$ is the scaled error norm,

clipped to avoid violent changes. The error norm often scales component i by

$$\\mathrm{atol}_i+\\mathrm{rtol}\\max(|z_{n,i}|,|z_{n+1,i}|).$$

This design has consequences:

- units require componentwise absolute tolerances;
- local acceptance does not directly bound a final functional;
- rejected steps and interpolation affect event timing;
- discontinuities invalidate smooth error models near the event;
- a solver can satisfy tolerance for the wrong equation.

An audit varies tolerances over at least a geometric sequence and reports the output of interest, not just step count.

## 6. Step doubling and observed order

If an output Q_h has expansion

$$Q_h=Q+Ch^p+\\text{higher-order terms},$$

then

$$Q_h-Q_{h/2}\\approx Ch^p(1-2^{-p}).$$

Three levels estimate observed order:

$$p_{\\mathrm{obs}}=\\log_2\\frac{|Q_h-Q_{h/2}|}{|Q_{h/2}-Q_{h/4}|}.$$

An estimate near the design order supports the asymptotic regime. Failure can indicate:

- steps not yet small enough;
- nonsmooth solution or event;
- spatial error dominating time error;
- roundoff or iterative-solve error;
- cancellation because C is near zero;
- chaotic separation at the chosen horizon;
- a bug.

Agreement under refinement is necessary evidence, not proof. An independent residual, invariant, manufactured solution, or method reduces shared-error risk.

## 7. Residuals and backward error

Given a continuous interpolant z_h, its differential residual is

$$r(t)=z_h'(t)-f(t,z_h(t)).$$

If f is Lipschitz and initial discrepancy is known, Gronwall bounds distance to an exact solution of the intended IVP by the integrated residual times an exponential factor. A small residual is a mathematically interpretable diagnostic.

Backward error asks which nearby differential equation the numerical path solves more exactly. For symplectic methods applied to Hamiltonian systems, formal modified equations explain long-time near-conservation of a modified Hamiltonian. The series may be asymptotic rather than convergent, and results hold over method- and regularity-dependent intervals.

A tiny nonlinear solver residual is only the residual of a discrete implicit equation. It does not bound discretization error by itself.

## 8. Conserved and monotone structure

For a Hamiltonian system in canonical coordinates,

$$q'=\\frac{\\partial H}{\\partial p},\\qquad p'=-\\frac{\\partial H}{\\partial q}.$$

Exact flow preserves H and symplectic area. Explicit Euler generally preserves neither. Symplectic Euler preserves the symplectic form and often exhibits bounded oscillatory energy error over long regular trajectories.

Projecting a state back onto an energy surface enforces one invariant but can distort phase, momentum, other invariants, and order. Structure preservation is a design choice tied to requested outputs.

For gradient flows with decreasing energy, a method that increases energy at large steps can invent oscillations. Discrete gradient methods or suitable implicit steps can enforce a discrete decay law.

For positive population or concentration states, nonnegative updates may be essential. High algebraic order does not guarantee positivity.

## 9. Floating point and reproducibility

Floating-point addition and multiplication round. Reassociation, fused operations, hardware, parallel reduction, and library versions can change last bits. In a chaotic computation those differences eventually become macroscopic trajectory differences.

Reproducibility therefore has layers:

- bitwise reproduction under a fixed environment;
- numerical agreement within tolerances;
- statistical agreement of invariant summaries;
- qualitative agreement of structures and conclusions.

Record code revision, precision, compiler or runtime, method, tolerance, seeds, initial data, and stopping rules. Do not promise bitwise identity when parallel or hardware choices preclude it.

Interval arithmetic can enclose rounding and truncation effects but often suffers dependency overestimation. Validated integrators combine interval or Taylor models with step control to prove enclosures over finite intervals. Long chaotic enclosure widths grow quickly.

## 10. Sensitive dependence and Lyapunov exponents

For a differentiable map T, tangent perturbations follow

$$v_{n+1}=DT(x_n)v_n.$$

A directional Lyapunov exponent along a nonzero $v_0$, when the limit exists, is

$$\\lambda=\\lim_{n\\to\\infty}\\frac1n\\log\\|D(T^n)(x_0)v_0\\|.$$

The largest exponent is the supremum over directions (or the top value supplied almost everywhere by an applicable multiplicative-ergodic theorem); a vector trapped in a contracting invariant subspace can have a smaller exponent. In continuous time, divide by elapsed time and integrate the variational equation. A positive directional value indicates exponential growth along the specified orbit and direction.

Numerically, tangent vectors must be renormalized; a full spectrum uses repeated QR factorization. Report:

- transient discarded;
- averaging horizon;
- time unit;
- initial tangent basis;
- step and tolerance refinement;
- convergence trace and finite-time variability.

A positive finite-time estimate does not alone prove a compact chaotic attractor, topological transitivity, mixing, positive entropy, or robustness under perturbation.

The predictability horizon for initial uncertainty delta0 and tolerated error Delta is roughly

$$\\frac{\\log(\\Delta/\\delta_0)}\\lambda$$

only in a regime where linearized growth at representative rate applies. Model error and observation error also enter.

## 11. Invariant measures

Let T map a probability space to itself. Probability measure mu is invariant when

$$\\mu(T^{-1}A)=\\mu(A)$$

for every measurable A. Equivalently, integrals of phi after T equal integrals of phi for all suitable test functions.

For a continuous-time flow, invariance holds for every time map Phi_t. Hamiltonian flows preserve phase volume under regular finite-dimensional hypotheses, but a fixed energy surface needs an induced invariant measure. Dissipative attractors generally do not preserve ambient volume.

An empirical measure from one orbit is

$$\\mu_N=\\frac1N\\sum_{k=0}^{N-1}\\delta_{T^kx}.$$

Weak limit points can be invariant under compactness and continuity conditions. Existence of a subsequential invariant limit does not give uniqueness, ergodicity, or independence from the initial state.

## 12. Birkhoff’s theorem and honest averages

For a probability-preserving transformation T and integrable observable phi, Birkhoff’s ergodic theorem states that

$$A_N\\phi(x)=\\frac1N\\sum_{k=0}^{N-1}\\phi(T^kx)$$

converges for almost every x to a T-invariant integrable function phi star. The space integral of phi star equals that of phi.

If T is ergodic, every invariant integrable function is almost surely constant, so

$$\\phi_* =\\int\\phi\\,d\\mu$$

almost everywhere.

The theorem does not say:

- convergence holds for every x;
- a finite N has a known error rate;
- samples are independent;
- every initial distribution converges to mu;
- a numerically observed measure is the relevant invariant measure.

Rates require mixing, spectral gaps, martingale approximations, concentration, or other quantitative structure. Some ergodic systems converge arbitrarily slowly for chosen observables.

## 13. Ergodic, mixing, and uniquely ergodic

Ergodicity says invariant sets have probability zero or one. Strong mixing says

$$\\mu(A\\cap T^{-n}B)\\longrightarrow\\mu(A)\\mu(B).$$

Mixing implies ergodicity. The converse fails.

Irrational rotation of the circle preserves uniform arc length and is ergodic. It is not mixing: Fourier correlations retain unit magnitude while their phase rotates. It is uniquely ergodic, meaning it has one invariant probability measure, and continuous-observable time averages converge uniformly over starts.

Rational circle rotation is periodic and not ergodic for arc length. Continuous rotation flow on one fixed circle averages around that circle, while rotation of an entire disk has invariant radial subsets and is not ergodic for area.

Unique ergodicity, measure ergodicity, topological transitivity, and mixing are distinct. Always name the map or flow, invariant space, measure, and time sampling.

## 14. Recurrence is not convergence

Poincaré recurrence says that for a finite measure-preserving transformation, almost every point of a measurable set returns to that set infinitely often. A proof valid without assuming invertibility uses preimages: the points of a measurable set that never return form a wandering set whose inverse images are pairwise disjoint and, by measure preservation, have equal measure; finiteness forces that wandering set to have measure zero. Applying the argument after each time threshold yields infinitely many returns almost everywhere. A forward-image proof would additionally require invertibility (or a separate image-measure argument).

Recurrence does not mean:

- the state is exactly periodic;
- every point returns;
- return time is small;
- trajectories converge;
- correlations decay.

A dissipative trajectory converging to a stable equilibrium is not recurrent away from the equilibrium under ambient volume; volume is not preserved there.

## 15. Chaos and ergodicity are not synonyms

Depending on context, chaos may mean sensitive dependence plus transitivity, positive metric entropy, a horseshoe, positive Lyapunov exponent on a set, or another precise package. Ergodicity is relative to a named invariant measure. Possible combinations include:

- ergodic but nonmixing rotation;
- mixing symbolic shift with strong chaotic properties;
- a chaotic invariant subset carrying several ergodic measures;
- a system with sensitive transient behaviour but no relevant finite invariant probability;
- an integrable Hamiltonian system decomposed into invariant tori.

An observable time series cannot establish these properties without assumptions. Surrogate tests and exponent estimates can reject simple alternatives, but theorem-level classification requires structure.

## 16. A long-time computational audit

For a claimed invariant statistic:

1. Define state space, map or flow, and time unit.
2. Identify a candidate invariant measure and why it is physically or mathematically relevant.
3. Name the observable and its integrability.
4. Separate transient removal from averaging.
5. Run several initial states, including different invariant components.
6. Refine step, tolerance, precision, and sampling interval.
7. Inspect running averages and block variability.
8. Check known invariants, symmetries, or balance laws.
9. Test whether the statistic changes across plausible model perturbations.
10. Phrase the conclusion as numerical evidence unless a theorem with verified hypotheses applies.

The [live flow and feedback audit](#/labs?lab=visual-lab-linear-dynamics-audit) illustrates the separation. Its trace, determinant, controllability, and observability values are exact rational consequences of a declared matrix. Its orbit and time average are RK4 approximations with step-halving and invariant drift. Agreement of x-squared average on one rotation circle does not prove disk-area ergodicity.

## Worked problems

### 1. Euler stability

For x'=-10x, compare h=0.1 and h=0.25.

**Solution.** Euler multiplier is 1-10h. At h=0.1 it is zero, so Euler reaches zero in one step, an inaccurate but stable behaviour. At h=0.25 it is -1.5, whose magnitude exceeds one, so the approximation oscillates and grows although the exact solution decays.

### 2. Observed order

Endpoint differences are |Q_h-Q_h/2|=0.016 and |Q_h/2-Q_h/4|=0.001. Estimate order.

**Solution.** The ratio is 16, so p observed=log base 2 of 16=4. This supports fourth-order asymptotics for that output over those grids; it does not reveal the exact error without an additional model or reference.

### 3. Mean preservation

A numerical heat scheme loses 2 percent of total mass under insulated boundaries while refining time only. What should be checked?

**Solution.** Insulated continuum heat preserves mass. Check the spatial boundary stencil and flux balance first; time refinement cannot remove a spatial conservation defect if the semidiscrete operator has nonzero column or row sum under the chosen convention. Also check solver tolerance and quadrature used to measure mass.

### 4. Birkhoff claim repair

“Ergodicity makes a million consecutive samples equivalent to a million independent samples.”

**Solution.** Ergodicity supports almost-sure convergence of time averages but does not imply independence or a particular convergence rate. Correlation can be strong. Effective sample size and uncertainty require quantitative dependence assumptions such as mixing plus moment conditions.

### 5. Invariant circle

For x'=-y, y'=x on radius R, compute the continuous-time average of x squared.

**Solution.** Write x=R cos(t+phase). The average of cosine squared over every full period is one half, so the long-time average is R squared/2. Different radii yield different values and are invariant, ruling out ergodicity for area measure on a disk.

### 6. Recurrence boundary

Why does a damped oscillator not contradict Poincaré recurrence?

**Solution.** Its phase-space flow contracts volume and approaches an equilibrium; ordinary finite area measure is not invariant. The recurrence theorem requires a finite invariant measure. A point mass at the equilibrium is invariant, but it describes only the equilibrium.

## Dependency ledger

- Taylor expansion produced local truncation error.
- Lipschitz stability plus discrete Gronwall turned local error into fixed-time convergence.
- Stability functions separated method stability from equation stability.
- Step-doubling order relied on an asymptotic error expansion.
- Residual bounds used the same continuous-dependence mechanism as well-posedness.
- Structure-preserving conclusions named the preserved geometry rather than only algebraic order.
- Birkhoff required a named invariant probability and an integrable observable.
- Ergodicity made the limiting invariant function constant; it did not create independence or rates.
- Recurrence required finite invariant measure.
`;export{e as default};