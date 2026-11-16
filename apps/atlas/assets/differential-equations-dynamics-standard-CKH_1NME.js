var e=`---
id: course-differential-equations-dynamics-standard
title: "Ordinary differential equations"
level: undergraduate
estimated_minutes: 2400
license: CC BY-SA 4.0
---

# Ordinary differential equations

<!-- euler-course-route -->

## Current course route

Use the [current chapter syllabus](/courses/atlas-differential-equations-dynamics-standard/) for the ordered readings, preparation courses and exercises. The earlier explanations and worked tasks below retain their original identities and remain available for study and saved work.

This course develops ordinary and partial differential equations as models, qualitative systems, and approximation problems. It assumes single-variable calculus, basic multivariable derivatives, vectors, matrices, and eigenvalues. Measure theory is not assumed; the final ergodic unit states its measure-theoretic boundary and prepares the [graduate long-time deep dive](#/item/deep-dive-chaos-ergodicity-long-time).

The course has one repeated discipline: keep four claims separate.

1. The model describes a mechanism under stated assumptions.
2. An analytical theorem supplies existence, uniqueness, regularity, or stability.
3. A computation approximates the declared mathematical problem with an error audit.
4. Data may or may not support parameter estimates and predictions for a target system.

An exact solution addresses claim 2 for an idealized equation. It does not validate claims 1, 3, or 4 automatically.

## Entry diagnostic and 40-hour route

Before Unit 1:

1. Solve $x'=2x$ with $x(0)=3$.
2. Find the eigenvalues of
   $\\begin{pmatrix}0&1\\\\-2&-3\\end{pmatrix}$.
3. Compute $\\int_0^\\pi\\sin^2x\\,dx$.
4. Explain why a numerical trajectory alone cannot prove uniqueness of the
   differential equation it approximates.

The answers are $x(t)=3e^{2t}$; $-1,-2$; $\\pi/2$; and uniqueness is a theorem
about every admissible solution under stated regularity, while one trajectory
is one finite computation. Repair calculus and eigenvalue skills before Units
3–4.

| Stage | Units | Sustained reading | Evidence |
| --- | --- | --- | --- |
| 1. Models and well-posedness | 1–3 | [Models and continuation](#/item/book-differential-equations-verified-dynamics?chapter=models-wellposedness), [comparison and invariant regions](#/item/book-differential-equations-verified-dynamics?chapter=scalar-comparison-invariant-regions), and [boundary values](#/item/book-differential-equations-verified-dynamics?chapter=boundary-value-continuation) | Model contract and existence/uniqueness audit |
| 2. Finite-dimensional dynamics | 4–6 | [Linear phase geometry](#/item/book-differential-equations-verified-dynamics?chapter=linear-systems-phase), [stability and bifurcation](#/item/book-differential-equations-verified-dynamics?chapter=nonlinear-stability-bifurcation), and [planar limit sets](#/item/book-differential-equations-verified-dynamics?chapter=periodic-orbits-planar-limits) | Phase portrait, invariant, and bifurcation boundary |
| 3. Control and oscillation | 7–8 | [Control and observation](#/item/book-differential-equations-verified-dynamics?chapter=control-reachability-observation) and [robust sampled control](#/item/book-differential-equations-verified-dynamics?chapter=robust-sampled-control) | Rank certificate, energy balance, and constrained counterexample |
| 4. Fields and variation | 9–11 | [PDE energy and Fourier](#/item/book-differential-equations-verified-dynamics?chapter=pde-energy-fourier), [weak theory](#/item/book-differential-equations-verified-dynamics?chapter=elliptic-parabolic-weak-theory), and [direct methods](#/item/book-differential-equations-verified-dynamics?chapter=variational-direct-methods) | Boundary-compatible weak or spectral formulation |
| 5. Computation and long time | 12–15 | [Verified computation](#/item/book-differential-equations-verified-dynamics?chapter=verified-computation-long-time), [chaos and entropy](#/item/book-differential-equations-verified-dynamics?chapter=chaos-symbolic-entropy), and [ergodic theorems](#/item/book-differential-equations-verified-dynamics?chapter=ergodic-theorems-statistics) | Refinement study and capstone audit |

## Unit 1 — From mechanism to initial-value problem

Choose a state $z(t)$ in a set of admissible states and write

$$
z'=f(t,z;\\theta),\\qquad z(t_0)=z_0.
$$

The parameter $\\theta$ may contain rates, masses, or geometric constants. Before manipulating the equation, record:

- units and allowed ranges of every state and parameter;
- whether time is continuous or a continuous approximation to discrete events;
- the system boundary and what crosses it;
- which effects were neglected;
- the interval on which parameters are treated as constant;
- initial or boundary data and their uncertainty;
- the output or functional actually needed.

**Balance example.** A well-mixed vessel has volume $V(t)$, inflow
$q_{\\mathrm{in}}$, outflow $q_{\\mathrm{out}}$, incoming concentration
$c_{\\mathrm{in}}$, and solute amount $m$. Conservation gives

$$
V'=q_{\\mathrm{in}}-q_{\\mathrm{out}},\\qquad
m'=q_{\\mathrm{in}}c_{\\mathrm{in}}-q_{\\mathrm{out}}\\frac mV.
$$

If flows are equal, $V$ is constant; otherwise silently replacing it by a constant changes the model. If $V$ approaches zero, the concentration term becomes singular and the well-mixed approximation fails before algebra should continue.

**Population example.** Exponential growth $N'=rN$ assumes unlimited resources and a per-capita rate independent of density. Logistic growth $N'=rN(1-N/K)$ inserts a carrying scale $K$. Neither equation follows solely from observing an S-shaped curve. Parameters and mechanisms need independent interpretation.

Nondimensionalization exposes scales. Set $n=N/K$ and $\\tau=rt$ in the logistic model. Then $dn/d\\tau=n(1-n)$; two dimensional parameters collapse into state and time units. Dimensionless groups reveal which regimes genuinely differ.

## Unit 2 — Elementary solution methods and their boundaries

If $x'=g(t)h(x)$, separate variables formally:

$$
\\frac{dx}{h(x)}=g(t)\\,dt.
$$

Division by $h(x)$ can discard equilibria where $h(x)=0$. List them first. After integration, check the result in the original equation and enforce the initial condition.

A first-order linear equation

$$x'+p(t)x=q(t)$$

has integrating factor
$\\mu(t)=\\exp(\\int p(t)\\,dt)$. Then

$$(\\mu x)'=\\mu q.$$

Continuity of $p$ and $q$ on an interval gives a unique solution there. A formula containing an integral is still an exact representation.

For autonomous x'=f(x), equilibrium points solve f(x)=0. A sign chart often answers long-time questions more cleanly than explicit integration. In logistic growth, x=0 and x=K are equilibria. For r,K positive, the interval [0,K] is forward invariant: the vector field points inward at its boundaries and positive inside. Initial values above K decrease toward K.

**Tempting error.** Solving x'=x squared by separation gives -1/x=t+C. The equilibrium x=0 was lost during division. Nonzero solutions also have finite-time blow-up, so no one global formula covers every initial condition and all times.

## Unit 3 — Existence, uniqueness, dependence, continuation

For z'=f(t,z), continuity of f near (t0,z0) supports local existence through a Peano theorem. Local Lipschitz continuity in z supports uniqueness through Picard–Lindelöf. A convenient sufficient condition is continuity of the state Jacobian on a surrounding rectangle.

Picard iteration begins with a trial path and repeatedly applies the integral equation

$$
z(t)=z_0+\\int_{t_0}^{t}f(s,z(s))\\,ds.
$$

On a sufficiently short interval, the integral operator is a contraction under Lipschitz and boundedness conditions. Banach’s fixed-point theorem produces one fixed point, hence one solution.

If $z_1$ and $z_2$ solve equations whose velocity difference is bounded by
$L$ times state difference plus a perturbation $\\eta$, Grönwall’s inequality
gives, in a typical form,

$$
\\lVert z_1(t)-z_2(t)\\rVert
\\le e^{L(t-t_0)}
\\left(
  \\lVert z_1(t_0)-z_2(t_0)\\rVert
  +\\int_{t_0}^{t}\\lVert\\eta(s)\\rVert\\,ds
\\right).
$$

This proves continuous dependence on finite intervals. When L is positive and time is long, the bound can be enormous; well-posedness does not mean easy prediction.

A maximal solution can stop at a finite endpoint only by leaving every compact subset of the domain. Thus a priori bounds often upgrade local solutions to global ones. For x'=-x cubed, energy x squared decreases, preventing blow-up. For x'=x squared, no such bound exists.

Boundary-value problems behave differently. Specifying x(0) and x(1) can produce zero, one, or many solutions even when every initial-value problem is unique. Shooting converts a boundary condition into a root-finding problem, but multiple roots and sensitivity must be audited.

## Unit 4 — Linear systems and matrix exponentials

For $z'=Az$ with constant $n\\times n$ matrix $A$,

$$z(t)=e^{tA}z_0,$$

where $e^{tA}$ is defined by its convergent power series. Differentiating term by term verifies the equation. For forced dynamics $z'=Az+g(t)$, variation of constants gives

$$
z(t)=e^{(t-t_0)A}z_0+\\int_{t_0}^{t}e^{(t-s)A}g(s)\\,ds.
$$

If A has a basis of eigenvectors, each eigenmode evolves as exp(lambda t). Complex conjugate eigenvalues create real rotations combined with growth or decay. A defective matrix contributes polynomial factors such as t exp(lambda t); eigenvalues alone do not determine transient size.

For a real $2\\times2$ matrix, trace $T$ and determinant $D$ give
characteristic polynomial

$$\\lambda^2-T\\lambda+D.$$

If D is negative, eigenvalues have opposite signs and the equilibrium is a saddle. If D is positive and T is negative, both eigenvalues have negative real part. If T is zero and D positive, eigenvalues lie on the imaginary axis, a spectral boundary that needs semisimplicity and nonlinear analysis.

**Worked matrix.** For

$$
A=\\begin{pmatrix}0&1\\\\-2&-3\\end{pmatrix},
$$

the characteristic polynomial is lambda squared+3lambda+2, with eigenvalues -1 and -2. The origin is exponentially stable. Initial components along the -1 mode dominate at long times. This conclusion assumes the constant linear model; it says nothing about actuator limits or parameter uncertainty.

## Unit 5 — Phase plane and invariant geometry

An autonomous planar system z'=f(z) assigns a vector to each point. Equilibria, nullclines, invariant curves, and direction fields organize the portrait.

A nullcline is where one coordinate velocity vanishes. It is not generally a trajectory: the other component may push the state across it. An invariant curve requires the full vector field to be tangent.

For predator–prey dynamics

$$
x'=x(a-by),\\qquad y'=y(-c+dx),
$$

the positive quadrant is invariant. Nullclines x=0, y=a/b, y=0, and x=c/d divide the direction field. The interior equilibrium is (c/d,a/b). In the ideal model, a conserved expression produces closed level curves. Real populations experience noise, seasonality, age structure, and density effects, so closed cycles are a model consequence rather than automatic biological evidence.

For gradient flow $z'=-\\nabla V(z)$,

$$
\\frac{d}{dt}V(z(t))=-\\lVert\\nabla V(z(t))\\rVert^2\\le0.
$$

Thus V is a Lyapunov function and periodic non-equilibrium orbits are impossible. LaSalle’s invariance principle can locate the limit set when the derivative is only nonpositive, provided the trajectory remains in a suitable compact invariant set.

The Poincaré–Bendixson theorem, for a smooth planar flow with a compact omega-limit set containing no equilibrium, constrains the limit set to a periodic orbit under standard hypotheses. It is special to two-dimensional continuous-time systems. Three-dimensional flows can exhibit chaotic attractors.

## Unit 6 — Stability, linearization, and bifurcation

An equilibrium z star is Lyapunov stable if, for every requested tolerance epsilon, some initial tolerance delta keeps all future states within epsilon. It is asymptotically stable if it is stable and sufficiently nearby solutions converge to it. Exponential stability adds a uniform decaying exponential bound.

For a continuously differentiable autonomous system, let J be the Jacobian at an equilibrium.

- If every eigenvalue of J has negative real part, the equilibrium is locally asymptotically stable.
- If some eigenvalue has positive real part, it is unstable.
- If none has positive real part but at least one lies on the imaginary axis, linearization alone is inconclusive.

An equilibrium is hyperbolic exactly when its Jacobian has no eigenvalue with zero real part; an unstable equilibrium can also have a center eigenvalue. The Hartman–Grobman theorem gives local topological equivalence to the linearized flow near a hyperbolic equilibrium, not equality of speeds or a global conjugacy.

A scalar saddle-node normal form x'=mu-x squared has no equilibria for mu negative, one nonhyperbolic equilibrium at zero for mu zero, and two equilibria for mu positive. A transcritical form x'=mu x-x squared exchanges stability between two branches. A supercritical pitchfork x'=mu x-x cubed requires symmetry for structural persistence.

Hopf bifurcation concerns a conjugate eigenvalue pair crossing the imaginary axis with nonzero speed plus a nondegeneracy condition. The sign of a nonlinear coefficient determines whether a small stable or unstable cycle is born. Seeing complex eigenvalues cross is necessary in a standard Hopf setup but not the whole theorem.

## Unit 7 — Inputs, feedback, controllability, observability

For a time-invariant linear state-space model

$$
z'=Az+Bu,\\qquad y=Cz,
$$

the input $u$ is chosen and $y$ is measured. The solution at time $T$ is

$$
z(T)=e^{TA}z_0+\\int_0^T e^{(T-s)A}B\\,u(s)\\,ds.
$$

Reachable input effects span the columns of

$$
\\mathcal C=\\begin{bmatrix}B&AB&A^2B&\\cdots&A^{n-1}B\\end{bmatrix}.
$$

The Kalman rank criterion says the finite-dimensional continuous-time model is controllable exactly when this matrix has rank n. Cayley–Hamilton explains why higher powers add no new directions. Controllability is binary algebraic structure; control energy can nevertheless be prohibitive when the controllability Gramian is ill-conditioned.

The observability matrix stacks

$$
\\mathcal O=
\\begin{bmatrix}
C\\\\CA\\\\\\vdots\\\\CA^{n-1}
\\end{bmatrix}.
$$

Full column rank means the initial state is determined by noiseless output over an interval. Duality relates observability of (C,A) to controllability of (A transpose,C transpose).

State feedback u=-Kz+r produces closed-loop matrix A-BK. If (A,B) is controllable, poles can be assigned arbitrarily in the ideal finite-dimensional model. Output feedback needs an observer or dynamic controller. The separation principle combines a state-feedback gain with an observer gain for a detectable and stabilizable linear time-invariant model, but robustness, saturation, delay, sampling, and unmodeled modes remain separate.

Open the [flow and feedback audit](#/labs?lab=visual-lab-linear-dynamics-audit) and compare its exact rank determinants with its step-dependent numerical trajectories.

## Unit 8 — Second-order equations, energy, resonance

A mechanical oscillator

$$mx''+cx'+kx=F(t)$$

becomes a first-order system by setting velocity $v=x'$. With $m$ and $k$
positive, no damping or forcing gives conserved energy

$$E=\\frac12mv^2+\\frac12kx^2.$$

Damping c positive gives E'=-c v squared, so energy is nonincreasing. This identity is stronger than a plotted decay.

Sinusoidal forcing near natural frequency creates resonance in the undamped linear model. Positive damping bounds the steady-state amplitude, while the transient depends on initial conditions. “Resonance frequency” can mean peak displacement, peak velocity, or phase crossing; damping makes these definitions differ.

Nonlinear pendulum dynamics replace kx by a sine. Small-angle linearization is valid only when the angle range makes the remainder negligible for the requested output. Near a separatrix, period and sensitivity grow and the approximation fails.

## Unit 9 — PDE models, data, and energy estimates

Let $u(x,t)$ be a field on a domain $\\Omega$. A PDE problem includes:

- the differential operator and coefficients;
- domain and time interval;
- initial data where appropriate;
- boundary conditions;
- the function class in which a solution is sought.

For the heat equation on $0<x<L$,

$$
u_t=\\kappa u_{xx},\\qquad u(0,t)=u(L,t)=0,
$$

multiplying by $u$ and integrating gives, after integration by parts,

$$
\\frac12\\frac{d}{dt}\\int_0^L u^2\\,dx
=-\\kappa\\int_0^L u_x^2\\,dx.
$$

The boundary term vanishes because of the Dirichlet data. This energy identity proves uniqueness in an appropriate class: the difference of two solutions with the same data has nonincreasing squared norm starting at zero.

For the wave equation $u_{tt}=c^2u_{xx}$ with fixed endpoints, the energy

$$
\\int_0^L\\left(\\frac12u_t^2+\\frac12c^2u_x^2\\right)dx
$$

is conserved for sufficiently regular solutions. Heat smooths and dissipates; the ideal wave transports and conserves. A numerical scheme should reflect the relevant structure to the required accuracy.

Conservation laws u_t+f(u)_x=0 may develop shocks from smooth initial data. Classical derivatives then fail, and weak solutions are not unique without an entropy condition. Adding a tiny viscosity can select the physically relevant entropy solution in standard scalar cases.

## Unit 10 — Fourier and spectral methods

For the fixed-end heat equation, seek $u(x,t)=X(x)T(t)$. Separation gives sine eigenfunctions

$$X_n(x)=\\sin\\left(\\frac{n\\pi x}{L}\\right)$$

and decay factors exp(-kappa(n pi/L) squared t). Initial data are expanded in this orthogonal basis. High-frequency modes decay faster, which expresses smoothing.

For the wave equation the same spatial modes oscillate rather than decay. Boundary conditions determine the eigenfunctions: periodic, Neumann, Robin, and mixed conditions lead to different spectra.

Fourier coefficients live naturally in an L2 space. Parseval’s identity equates squared L2 norm with the sum of squared coefficients under the chosen normalization. Pointwise convergence requires additional hypotheses; a jump creates Gibbs overshoot that narrows but does not disappear in relative height. Do not infer uniform convergence from a good mean-square approximation.

Spectral methods truncate global basis expansions. They can converge rapidly for smooth solutions on suitable geometries, but discontinuities, complex boundaries, variable coefficients, and aliasing require care. Fourier analysis is a coordinate system plus a convergence theorem, not merely a fast transform.

## Unit 11 — Calculus of variations

A functional assigns a number to a whole function:

$$
\\mathcal J[y]=\\int_a^b\\mathcal L(x,y,y')\\,dx.
$$

Perturb $y$ to $y+\\varepsilon\\eta$, where $\\eta$ vanishes at fixed
endpoints. Differentiating at $\\varepsilon=0$ and integrating the $\\eta'$
term by parts yields

$$
\\frac{\\partial\\mathcal L}{\\partial y}
-\\frac{d}{dx}\\left(\\frac{\\partial\\mathcal L}{\\partial y'}\\right)=0.
$$

This Euler–Lagrange equation is necessary for a sufficiently smooth interior stationary path. It is not sufficient for a minimum. Convexity, second variation, constraints, and boundary conditions decide more.

For $\\mathcal L=(y')^2/2$, the equation is $y''=0$, so straight lines are stationary and in fact minimize energy between fixed endpoints. If an endpoint is free, integration by parts produces a natural boundary condition rather than a vanished boundary term.

In mechanics, Lagrangian equals kinetic minus potential energy and Hamilton’s principle gives equations of motion for admissible variations with fixed time endpoints. It does not claim that action is always globally smallest.

Direct methods seek minimizers using coercivity, weak compactness, and lower semicontinuity. A minimizing sequence need not converge strongly or to a smooth function; this is why the existence theory cannot be replaced by formal differentiation.

## Unit 12 — Numerical ODEs and qualitative auditing

Euler’s method has local truncation error of order h squared and global error of order h over a fixed interval under regularity and stability assumptions. Classical Runge–Kutta order four has global order four for smooth nonstiff problems.

Order is an asymptotic statement as h tends to zero with a fixed final time. It does not guarantee that h=0.1 is small enough, that roundoff is negligible, or that a chaotic trajectory remains pointwise accurate for a long time.

The linear test equation x'=lambda x gives Euler multiplier 1+h lambda. Absolute stability requires its magnitude below one when exact dynamics decay. For negative real lambda, h must be small enough. Stiff systems combine rapidly decaying modes with slower behaviour of interest; explicit stability restrictions can be far more severe than accuracy needs. Implicit methods enlarge the stability region but require nonlinear or linear solves.

An adaptive method estimates local error, accepts or rejects a step, and changes h. Its tolerance controls a scaled local criterion, not automatically the final output error. Event location, interpolation, discontinuous inputs, and solver failure codes belong in the audit.

For Hamiltonian systems, symplectic methods often keep energy error bounded and oscillatory over long times even though they do not conserve the original energy exactly. For diffusion and conservation laws, positivity, maximum principles, mass conservation, and discrete energy inequalities may matter more than high formal order.

## Unit 13 — Chaos and responsible computation

For a discrete map $x_{n+1}=F(x_n)$, a fixed point $x_*$ is locally
asymptotically stable when $|F'(x_*)|<1$ and unstable when
$|F'(x_*)|>1$. Equality is inconclusive. Periodic orbits are fixed points of
an iterate.

Sensitivity is often quantified by

$$
\\lambda=\\lim_{n\\to\\infty}\\frac1n
\\sum_{k=0}^{n-1}\\log|F'(x_k)|,
$$

when the limit exists. A positive value means infinitesimal separation grows exponentially on average along that orbit. It does not by itself establish a particular topological definition of chaos, an attractor, or a physical invariant measure.

Numerical chaos audits should:

- repeat with higher precision and smaller step or a different integrator;
- distinguish shadowing of some exact orbit from tracking the intended initial condition;
- report statistics and invariant structures after pointwise prediction becomes impossible;
- discard transients using a declared rule;
- check parameter and initial-condition sensitivity;
- avoid interpreting finite-precision periodicity as a true cycle.

Lyapunov exponents depend on time normalization and coordinates through asymptotically bounded transformations. Finite-time estimates fluctuate and need convergence diagnostics.

## Unit 14 — Invariant measures, recurrence, and ergodic questions

A transformation $T$ preserves probability measure $\\mu$ when
$\\mu(T^{-1}A)=\\mu(A)$ for every measurable set $A$. A set $A$ is invariant
when $\\mu(A\\mathbin{\\triangle}T^{-1}A)=0$. The system is ergodic if every
invariant set has probability zero or one.

For an integrable observable $\\varphi$, Birkhoff’s theorem says the averages

$$
\\frac1n\\sum_{k=0}^{n-1}\\varphi(T^kx)
$$

converge for almost every $x$ to a $T$-invariant function. Under ergodicity,
that limit equals the space average of $\\varphi$ almost everywhere. The
theorem does not promise a convergence rate, uniformity over every initial
state, or independence of successive observations.

Poincaré recurrence says that, in a finite measure-preserving system, almost every point in a set returns to that set infinitely often. It does not give a short return time, exact periodicity, or closeness of every point.

Mixing asks whether
$\\mu(A\\cap T^{-n}B)\\to\\mu(A)\\mu(B)$. Mixing implies ergodicity, but
ergodicity need not imply mixing. Irrational rotation of a circle is ergodic
for arc length but not mixing; correlations of Fourier modes do not decay.

When an attracting dissipative flow changes volumes, ordinary area may not be invariant. A long trajectory may be described by a singular invariant measure on an attractor. Establishing existence, physical relevance, uniqueness, and ergodicity of such a measure can be difficult. A histogram from one simulation is evidence, not a theorem.

## Unit 15 — Capstone audit

Choose one system: controlled oscillator, epidemic model, heated rod, reaction–diffusion pattern, or iterated population map. Submit an audit with:

1. state, units, domain, boundary, and data-generating assumptions;
2. nondimensional form and governing dimensionless groups;
3. existence, uniqueness, and continuation theorem with hypotheses;
4. equilibria, invariant regions, and local stability;
5. one global argument using energy, Lyapunov, comparison, or monotonicity;
6. if controlled, exact controllability and observability structure plus constraints;
7. if spatial, boundary-compatible spectral or weak formulation;
8. a numerical refinement table and structural diagnostic;
9. a claim about long-time behaviour with invariant measure and observable named;
10. a counterexample or boundary case showing where the preferred argument fails.

## Course checks with worked answers

### Check 1 — Lost equilibrium

Solve x'=x(1-x) qualitatively for starts below zero, between zero and one, and above one.

**Answer.** Equilibria are zero and one. For 0<x<1 the velocity is positive, and solutions increase toward one. For x>1 it is negative, and solutions decrease toward one. For x<0, both x and 1-x have opposite signs, so velocity is negative and the solution moves downward; the explicit solution has a forward singularity at $t=\\log(1-1/x_0)$ when the initial time is zero and $x_0<0$. Dividing by x(1-x) without first listing equilibria loses the constant solutions.

### Check 2 — Rank and energy

For A=[[0,1],[0,0]] and B=[0,1] transpose, compute [B,AB].

**Answer.** AB=[1,0] transpose, so [B,AB]=[[0,1],[1,0]], whose determinant is -1. It has rank two, so the ideal double integrator is controllable. This binary result does not report the energy required under bounds or a short horizon.

### Check 3 — Heat uniqueness

Two sufficiently regular heat solutions have identical initial and fixed-end boundary data. Explain the energy proof of equality.

**Answer.** Their difference w solves the homogeneous heat equation with zero initial and boundary data. Multiplying by w and integrating yields one half the derivative of integral w squared equal to minus kappa integral w_x squared, hence nonpositive. The energy begins at zero and cannot become negative, so it remains zero and w is zero almost everywhere; regularity then gives the intended equality.

### Check 4 — Linearization boundary

Why does x'=-x cubed contradict the rule “zero derivative means unstable”?

**Answer.** The derivative of the vector field at zero is zero, so linearization has eigenvalue zero and is inconclusive. Directly, x times x'=-x to the fourth is nonpositive, and solutions on either side move toward zero. The equilibrium is asymptotically stable, though decay is algebraic rather than exponential.

### Check 5 — Ergodic implication

Can a system be mixing but non-ergodic?

**Answer.** Not under the standard probability-preserving definitions. If A is invariant, then mu(A intersect T inverse n A)=mu(A), while mixing makes the limit mu(A) squared. Hence mu(A)=mu(A) squared, so its probability is zero or one. The converse fails; irrational circle rotation is the standard ergodic but nonmixing example.


<!-- euler-dynamics-selected-core:start -->
## Required assignment and preparation release

This assignment selects work for **all fifteen units** of the existing course, including its PDE, variation, computation and ergodic units. It is shared by the applied-mathematics and mathematical-physics continuation stages. The separate cooling-model validation synthesis remains a separate required applied task; the broader modelling and numerical courses remain optional. None of these selections qualifies the whole source book or supplies individual marking.

The stable assignment IDs below identify this selection. A native task is identified by its **chapter ID and exact numbered heading**, not by its position in a shared array. Native questions and their complete immediate solutions remain in their original chapter. First retain an attempt with definitions, hypotheses and calculations; then compare the complete solution, identify the first unsupported step and retain a revision. On a later visit, reconstruct a selected answer before reopening it. Previously seen public work is reconstruction, not an unseen test.

### DYN-PREP — Release the method dependencies before using them

**Before Unit 3**, use the existing [complete uniform-function-space proof](#/item/book-proof-safe-real-analysis?chapter=function-spaces-and-equicontinuity), Sections 1–2, followed by [Banach's contraction theorem and the concrete Picard construction](#/item/book-proof-safe-real-analysis?chapter=fixed-points-and-complete-spaces), Sections 1–3 and 8–9. For vector-valued paths apply the scalar uniform-Cauchy argument to each of finitely many coordinates. A closed path ball with a fixed initial value is closed in this complete space and is therefore complete. The ODE chapter's proof architecture imports this proved contraction result; continuity alone is not a uniqueness proof.

Attempt **ANA-CH20-E003 — Incomplete failure**, **ANA-CH20-E011 — Picard contraction factor**, and **ANA-CH20-E012 — Invariant function ball**, each with its complete named solution in that reading. The ready checks are: why does $x\\mapsto x/2$ on $(0,1)$ fail to have a fixed point; what restrictions follow from $L=5$, $M=4$ and state radius one; and why does a uniformly Cauchy sequence of continuous paths retain a continuous limit?

**Ready-check key.** Zero is missing from $(0,1)$, which is not complete. For the path operator require both $5h<1$ and $4h\\le1$, as well as the available time width; for example $h=1/10$ satisfies both numerical restrictions. Pointwise completeness constructs each coordinate limit, the uniform-Cauchy estimate gives uniform convergence, and the uniform-limit theorem preserves continuity. Closedness keeps the limit in the path ball with the prescribed initial value. A small contraction factor without the self-map check is insufficient. Return to the cited proof at the first missing step rather than treating this check as an admission score.

**Before Units 9–11**, release integration by parts, boundary terms and the function class. Read [PDE energy and weak formulation](#/item/book-differential-equations-verified-dynamics?chapter=pde-energy-fourier), Sections 5, 8–11; [weak derivatives and the Poisson form](#/item/book-differential-equations-verified-dynamics?chapter=elliptic-parabolic-weak-theory), Sections 1–2; and [the direct-method contract](#/item/book-differential-equations-verified-dynamics?chapter=variational-direct-methods), Sections 1–5. In $H^1$, both the function and its first weak derivatives lie in $L^2$; $H_0^1$ is the closure of smooth compactly supported functions in $H^1$; on the stated trace-regular domains it imposes zero boundary trace. A weak derivative satisfies $\\int u\\,\\partial_i\\phi=-\\int (D_i u)\\phi$ for every smooth compactly supported test function. $H^{-1}$ denotes bounded linear functionals on $H_0^1$ in the stated norm. Attempt weak-theory tasks **1. Weak derivative**, **3. Poisson form**, **7. Coercivity** and **11. Weak versus classical** before using that vocabulary; their complete keys are in the same reading.

**Ready-check key.** For $-\\Delta u=f$ with $f\\in L^2$ and zero trace on a bounded trace-regular domain supporting Poincare's inequality, integration by parts gives $a(u,v)=\\int\\nabla u\\cdot\\nabla v=\\int fv=F(v)$ for all $v\\in H_0^1$. Poincare's inequality controls the full $H^1$ norm by the gradient norm on the stated bounded domain. On a real Hilbert space, **Lax–Milgram is imported here**: a bounded bilinear form with $a(v,v)\\ge\\alpha\\lVert v\\rVert^2$, $\\alpha>0$, and a bounded linear functional have a unique weak solution. This supplies neither classical differentiability nor a discretization rate. The general direct method likewise imports reflexive weak compactness and weak lower semicontinuity on a weakly closed admissible set; the one-dimensional minimizer in DYN-U11 has a complete elementary proof. Parabolic Galerkin existence in the linked chapter is proof architecture, not a newly supplied compactness proof. Repair the vocabulary and check the imported hypotheses before applying those results.

**Before Units 13–14**, read the definitions in [chaos and symbolic entropy](#/item/book-differential-equations-verified-dynamics?chapter=chaos-symbolic-entropy), Sections 1–3 and 5–6, and [invariant measures and ergodic theorems](#/item/book-differential-equations-verified-dynamics?chapter=ergodic-theorems-statistics), Sections 1–5. A sigma-algebra specifies measurable events; a probability measure assigns total mass one and is countably additive. $L^1(\\mu)$ requires $\\int|\\phi|d\\mu<\\infty$; $L^2(\\mu)$ requires $\\int|\\phi|^2d\\mu<\\infty$, identifying functions equal almost everywhere. Attempt that chapter's **2. Periodic orbit measure**, **5. Birkhoff periodic average**, **6. Almost every** and **7. No generic rate** with their keys.

**Ready-check key.** A map swapping two points preserves weights $1/2,1/2$; an observable with values 2 and 6 has both cycle average and space mean 4. Every exceptional-set claim must name its measure. The general Birkhoff, mean-ergodic and recurrence theorems in these readings are **imported with their stated hypotheses**, not proved by this finite example. Birkhoff uses a probability-preserving measurable transformation and an $L^1$ observable; ergodicity identifies its almost-everywhere limit with the space mean, without a generic rate. The finite-cycle calculation and the portfolio's exact continuous-time averages have direct proofs and require no inference from a numerical histogram.

### DYN-U01–DYN-U15 — Required source selections

All rows are required. Each linked selection contains complete public feedback. The course's earlier open capstone choices remain available; **DYN-CAP-P, DYN-CAP-C and DYN-CAP-R** below supply the concrete assigned primary, changed and later-return work.

| Stable assignment | Unit and native selection | Required retained work |
| --- | --- | --- |
| DYN-U01 | 1: [Models, Well-Posedness, and Continuation](#/item/book-differential-equations-verified-dynamics?chapter=models-wellposedness), **16. Mixing-model audit**, together with its variable-volume balance | Derive both volume and solute balances; separate mathematical uniqueness from the perfect-mixing assumption. |
| DYN-U02 | 2: [Scalar Comparison, Invariant Regions, and Blow-Up](#/item/book-differential-equations-verified-dynamics?chapter=scalar-comparison-invariant-regions), **1. A complete phase line**, **4. Blow-up integral** | Retain every equilibrium, interval sign, global-existence or escape conclusion, and the separated-clock argument. The appended optional scalar-futures project is not assigned here. |
| DYN-U03 | 3: [Models and well-posedness](#/item/book-differential-equations-verified-dynamics?chapter=models-wellposedness), **1. Positive invariance**, **2. A local theorem is not a global theorem**, **5. Contraction interval**, **6. Self-map radius**, **8. Domain escape without norm blow-up**; [Boundary Values, Parameters, and Global Continuation](#/item/book-differential-equations-verified-dynamics?chapter=boundary-value-continuation), **6. Shooting conditioning** | Complete DYN-PREP first; distinguish contraction/self-map, compact continuation, norm escape and BVP resonance. |
| DYN-U04 | 4: [Linear Systems and Phase Geometry](#/item/book-differential-equations-verified-dynamics?chapter=linear-systems-phase), **6. Jordan flow**, **10. Stable nonnormal peak** | Derive the exponential including its polynomial factor and compute a transient peak despite stable eigenvalues. |
| DYN-U05 | 5: [Periodic Orbits and Planar Limit Sets](#/item/book-differential-equations-verified-dynamics?chapter=periodic-orbits-planar-limits), **4. A trapping annulus**, **6. Verify the predator–prey integral** | Prove inward boundary directions and the first integral; state the imported Poincare–Bendixson hypotheses and distinguish neutral cycles from attracting ones. |
| DYN-U06 | 6: [Nonlinear Stability and Bifurcation](#/item/book-differential-equations-verified-dynamics?chapter=nonlinear-stability-bifurcation), **2. A nonhyperbolic decision**, **7. Unstable linear direction**, **10. Saddle-node branches**, **5. One derivative is not a Hopf theorem** | Decide the nonlinear scalar case, the mixed unstable/center case and saddle-node branches; list the extra Hopf hypotheses without claiming a general proof. |
| DYN-U07 | 7: [Control, Reachability, and Observation](#/item/book-differential-equations-verified-dynamics?chapter=control-reachability-observation), **6. Double-integrator controllability**, **3. Observable from position**, **9. Unreachable unstable mode**; [Robust, Constrained, and Sampled Feedback](#/item/book-differential-equations-verified-dynamics?chapter=robust-sampled-control), **7. Continuous gain reused** | Give exact ranks, an unreachable-mode counterexample and the exact sample-period restriction; identify ideal-model and constrained claims. |
| DYN-U08 | 8: [Linear systems](#/item/book-differential-equations-verified-dynamics?chapter=linear-systems-phase), **8. Repeated-root oscillator**, **9. Forced resonance boundary** | Derive the critical polynomial factor and resonant particular solution; use the portfolio for energy and the undamped boundary. |
| DYN-U09 | 9: [PDE Energy, Fourier Methods, and Boundary Data](#/item/book-differential-equations-verified-dynamics?chapter=pde-energy-fourier), **2. Heat uniqueness**, **3. Wave boundary power**; [weak theory](#/item/book-differential-equations-verified-dynamics?chapter=elliptic-parabolic-weak-theory), **3. Poisson form**, **4. Uniqueness**, **11. Weak versus classical** | State the solution class, derive boundary terms, and distinguish uniqueness, weak existence and regularity. |
| DYN-U10 | 10: [PDE energy and Fourier](#/item/book-differential-equations-verified-dynamics?chapter=pde-energy-fourier), Sections 8–10 and **1. Neumann mean**, **4. Fourier claim repair** | Derive sine modes and their coefficient normalization; preserve the Neumann mean and explain why $L^2$ convergence does not imply uniform convergence. |
| DYN-U11 | 11: [Variational Structure and Direct Methods](#/item/book-differential-equations-verified-dynamics?chapter=variational-direct-methods), **6. Quadratic energy**, **7. Direct proof of Exercise 6**, **4. Free endpoint**, **20. Claim repair** | Prove the actual minimizer, change the endpoint condition and distinguish stationarity from a minimum. |
| DYN-U12 | 12: [Verified Computation and Long-Time Dynamics](#/item/book-differential-equations-verified-dynamics?chapter=verified-computation-long-time), Section 2 and **1. Euler stability**, **2. Observed order** | Reconstruct the local-to-global error argument and state what a refinement ratio does not prove; compare with the portfolio's exact recurrence and certificate. |
| DYN-U13 | 13: [Chaos, Symbolic Dynamics, and Entropy](#/item/book-differential-equations-verified-dynamics?chapter=chaos-symbolic-entropy), **1. Periodic density**, **2. Shift sensitivity**, **3. Transitivity**, **4. Entropy of three-shift**, **11. Positive exponent boundary** | Prove the symbolic examples and state why a positive estimated exponent alone does not prove every chaos or invariant-measure claim. |
| DYN-U14 | 14: [Invariant Measures, Ergodic Theorems, and Dynamic Statistics](#/item/book-differential-equations-verified-dynamics?chapter=ergodic-theorems-statistics), **1. Fixed-point measure**, **4. Ergodic fixed point**, **5. Birkhoff periodic average**, **11. Mixing implication** | Construct the actual measure, average a cycle and prove mixing implies ergodicity; retain the imported-theorem/no-rate boundary. |
| DYN-U15 | 15: **DYN-CAP-P**, **DYN-CAP-C**, **DYN-CAP-R** below | Keep the primary attempt, a changed-case attempt, a later reconstruction, public-key comparisons and revisions under separate identities. |

The original 2,400-minute estimate remains an **planning estimate** for the full course. A possible allocation within it is 1,920 minutes for preparation, reading and the selected native tasks, then 180 for the primary portfolio, 120 for the changed case, 90 for the later return and 90 for comparison/revision. Repair, breaks and the elapsed interval before returning may require additional time. These allowances are authored, not observed workload or an academic-credit conversion.

## Cumulative oscillator portfolio with public keys

### DYN-CAP-P — Primary task: damped motion, computation and averages

A mass $m>0$ moves on a line, with displacement $q$, viscous damping $c=3m/t_0$ and spring constant $k=2m/t_0^2$, where $t_0>0$ is a time scale. Assume Hooke's law, linear viscous resistance, constant parameters and no unmodelled friction or stops. Write Newton's balance with an external force $F$, then study free motion $F=0$ from $q(0)=Q>0$, $\\dot q(0)=0$.

Use $x=q/Q$, $\\tau=t/t_0$, $v=dx/d\\tau$ and $u=t_0^2F/(mQ)$. Supply the model/units contract, initial-value existence and continuation, exact solution, phase geometry and stability, an energy argument, ideal input/output ranks for measured displacement, and a numerical audit at $\\tau=1$. Derive Euler outputs at $h=1/2,1/4,1/8$ as exact expressions and a finite-time error certificate. Check whether Euler preserves decreasing mechanical energy. For $\\phi(x,v)=x^2$, name an invariant probability and derive the continuous-time average. State which spatial or empirical claims this model does not answer.

#### DYN-CAP-P — Complete public key

Newton's equation is $m\\ddot q+c\\dot q+kq=F$: every term is a force. Here $c$ has mass/time units, $k$ mass/time-squared, $Q$ length and $t_0$ time. The dimensionless system is

$$x'=v,\\qquad v'=-2x-3v+u,\\qquad (x(0),v(0))=(1,0),$$

where primes now mean $\\tau$ derivatives. Its state domain is $\\mathbb R^2$. The free vector field is globally Lipschitz and has a unique local classical solution; the following formula constructs its global continuation:

$$x=2e^{-\\tau}-e^{-2\\tau},\\qquad v=-2e^{-\\tau}+2e^{-2\\tau}.$$

Substitution checks both equations and both initial data. For general initial state $(a,b)$,

$$x=(2a+b)e^{-\\tau}-(a+b)e^{-2\\tau},\\qquad
v=-(2a+b)e^{-\\tau}+2(a+b)e^{-2\\tau}.$$

Thus $\\lVert z(\\tau)\\rVert_\\infty\\le7e^{-\\tau}\\lVert z(0)\\rVert_\\infty$ for $\\tau\\ge0$. The equilibrium is globally exponentially stable. The eigenvalues are $-1,-2$, with invariant lines spanned by $(1,-1)$ and $(1,-2)$; the origin is a stable node. For the assigned initial state, $x>0$ and $v<0$ after time zero, so the motion returns from the positive side without oscillating. This statement concerns the declared linear model.

Dimensionless mechanical energy is

$$E=x^2+\\tfrac12v^2,\\qquad E'=-3v^2\\le0.$$

The physical energy is $(mQ^2/t_0^2)E$. Compact energy sublevels bound both coordinates on every finite interval, providing a second continuation argument. The zero-derivative set $v=0$ has only the origin as an invariant subset because $v'=-2x$ there. LaSalle supplies another attraction proof with its compact-invariant-set hypothesis; the exact formula already proves convergence directly. Energy decrease alone is not a proof that every point with $E'=0$ is an equilibrium.

For the ideal controlled model and measured displacement,

$$A=\\begin{pmatrix}0&1\\\\-2&-3\\end{pmatrix},\\quad
B=\\binom01,\\quad C=\\begin{pmatrix}1&0\\end{pmatrix},$$

$$[B,AB]=\\begin{pmatrix}0&1\\\\1&-3\\end{pmatrix},\\quad
\\begin{pmatrix}C\\\\CA\\end{pmatrix}=I.$$

Both ranks are two, with determinants $-1$ and $1$. The rank criteria import the stated finite-dimensional LTI theorem; they concern arbitrary unconstrained integrable inputs and noiseless known-input output histories. In free motion the applied input is zero and satisfies any nonnegative amplitude limit. Arbitrary target reachability under an actuator bound does not follow. With nonzero forcing the energy identity becomes $E'=-3v^2+uv$, so free-motion monotonicity cannot be carried over silently.

Euler gives $z_{n+1}=(I+hA)z_n$. Decomposing the initial state into its two eigenmodes yields, at $T=nh$,

$$x_n=2(1-h)^n-(1-2h)^n,\\qquad
v_n=-2(1-h)^n+2(1-2h)^n.$$

The following are **algebraic reference values, not reported solver runs**. A learner's separate implementation should reproduce them and state its arithmetic and step convention.

| $h$ | $n$ at $T=1$ | Exact Euler $x_n$ | Exact Euler $v_n$ | First-step energy increase $E_1-E_0$ |
| --- | --- | --- | --- | --- |
| $1/2$ | 2 | $1/2$ | $-1/2$ | $1/2$ |
| $1/4$ | 4 | $73/128$ | $-65/128$ | $1/8$ |
| $1/8$ | 8 | $2(7/8)^8-(3/4)^8$ | $-2(7/8)^8+2(3/4)^8$ | $1/32$ |

The continuum reference is $(2/e-e^{-2},-2/e+2e^{-2})$. Subtract it from each table pair to obtain the signed endpoint errors; state error and the structural diagnostic are separate. Indeed the first Euler step is $(1,-2h)$, so $E_1=1+2h^2>E_0$ for every $h>0$, even in the stable step range. Eigenvalue stability does not guarantee this physical energy decreases at every step.

A quantitative error certificate follows without inferring an order from three outputs. For $\\alpha\\in\\{1,2\\}$ and $0<h\\le1/2$, Taylor's integral remainder gives

$$0\\le e^{-\\alpha h}-(1-\\alpha h)\\le\\tfrac12\\alpha^2h^2.$$

Both multipliers lie in $[0,1]$. The difference-of-powers identity therefore gives

$$0\\le e^{-\\alpha T}-(1-\\alpha h)^n\\le\\tfrac12\\alpha^2Th.$$

Combining the two modes proves

$$|x(T)-x_n|\\le3Th,\\qquad |v(T)-v_n|\\le5Th.$$

For $T=1$, $h=1/500$ is a sufficient choice for max-norm error at most $1/100$ in exact arithmetic. It is conservative and excludes floating-point and model error. Strict asymptotic Euler modal decay needs $|1-h|<1$ and $|1-2h|<1$, hence $0<h<1$. At $h=1$ the second multiplier is $-1$ and the assigned initial state has a nonzero second mode, so Euler does not decay. This is a method boundary, not instability of the exact oscillator.

The exact flow fixes zero, so $\\delta_{(0,0)}$ is invariant and ergodic relative to its point mass. For the assigned initial state,

$$\\frac1T\\int_0^T x(\\tau)^2\\,d\\tau
=\\frac{2(1-e^{-2T})-\\frac43(1-e^{-3T})+\\frac14(1-e^{-4T})}{T}.$$

The numerator is a nonnegative increasing integral bounded by $11/12$; the average tends to zero, the $\\delta_0$ mean of $x^2$. This is a direct calculation for this flow, not a generic Birkhoff rate. More generally a continuous observable along a trajectory converging to zero has its time average converge to its value at zero: split off a fixed initial interval and bound the remaining deviation by any prescribed tolerance.

There is no spatial field in this lumped model, so the conditional spectral/weak-PDE capstone item is inapplicable here; DYN-U09–U11 retain the required PDE/Fourier/variational work. No observations were supplied to validate the constitutive laws. The audit proves ideal-model statements, exact-arithmetic approximation bounds and specified failure cases.

### DYN-CAP-C — Changed task: a critical repeated eigenvalue

Keep the units, initial data, input/output convention and modelling assumptions, but set $c=2m/t_0$ and $k=m/t_0^2$. Before opening the key, reconstruct the state equation, global solution, energy, phase/stability, input/output ranks, Euler recurrence and step restriction, and the $x^2$ time-average limit. Explain why simply substituting a repeated eigenvalue into a two-distinct-eigenvector formula fails.

#### DYN-CAP-C — Complete changed key

The dimensionless matrix is $A_c=\\begin{pmatrix}0&1\\\\-1&-2\\end{pmatrix}=-I+N$, with $N=\\begin{pmatrix}1&1\\\\-1&-1\\end{pmatrix}$, $N^2=0$ and $N\\ne0$. Its only eigenvalue is $-1$, with one eigenline spanned by $(1,-1)$: this is a defective stable node, not two independent eigenvectors. The exponential is $e^{\\tau A_c}=e^{-\\tau}(I+\\tau N)$, giving

$$x=(1+\\tau)e^{-\\tau},\\qquad v=-\\tau e^{-\\tau}.$$

The explicit formula verifies global existence and convergence. For arbitrary data $z_0$, $\\lVert e^{\\tau A_c}z_0\\rVert_\\infty\\le e^{-\\tau}(1+2\\tau)\\lVert z_0\\rVert_\\infty\\le4e^{-\\tau/2}\\lVert z_0\\rVert_\\infty$, so the equilibrium is globally exponentially stable despite the polynomial factor. Energy is now $E_c=(x^2+v^2)/2$ and $E_c'=-2v^2$; compact sublevels give continuation, and only the origin remains invariant in $v=0$. The ideal matrices satisfy $[B,A_cB]=\\begin{pmatrix}0&1\\\\1&-2\\end{pmatrix}$ and $\\binom C{CA_c}=I$, again full rank. The same input and physical-validation limitations apply.

For $h\\ne1$, write $a=1-h$. Binomial expansion with $N^2=0$ gives

$$(I+hA_c)^n=a^nI+nh\\,a^{n-1}N,\\qquad
x_n=a^n+nh\\,a^{n-1},\\quad v_n=-nh\\,a^{n-1}.$$

The matrix-polynomial form also handles $h=1$ directly: $I+A_c=N$, so $z_1=(1,-1)$ and $z_n=0$ for $n\\ge2$. No division by $a=0$ is permitted in an intermediate rearrangement. At $T=1$ the references are:

| $h$ | $n$ | Exact Euler $x_n$ | Exact Euler $v_n$ |
| --- | --- | --- | --- |
| $1/2$ | 2 | $3/4$ | $-1/2$ |
| $1/4$ | 4 | $189/256$ | $-27/64$ |
| $1/8$ | 8 | $(15/8)(7/8)^7$ | $-(7/8)^7$ |

Compare with $(2/e,-1/e)$, not the primary reference. Strict modal stability is $0<h<2$; the Jordan polynomial still decays in this range. At $h=2$, the multiplier is $-1$ and the nonzero nilpotent factor produces linear growth for the assigned data. The first Euler energy change remains positive, here $E_{c,1}-E_{c,0}=h^2/2$. For a finite-time certificate on $[0,1]$, $\\lVert A_c\\rVert_\\infty=3$ and the exact path has $\\lVert z''\\rVert_\\infty\\le2$. The Euler error recurrence gives

$$\\lVert z(1)-z_n\\rVert_\\infty\\le\\frac h3\\big((1+3h)^n-1\\big)\\le\\frac h3(e^3-1),\\qquad nh=1.$$

This follows by summing the geometric recurrence $e_{j+1}\\le(1+3h)e_j+h^2$ from $e_0=0$; it is not an observed error. Finally $\\delta_0$ remains invariant/ergodic, and $x^2=(1+\\tau)^2e^{-2\\tau}$ has integral over $[0,\\infty)$ equal to $5/4$. The finite-time average is nonnegative and at most $5/(4T)$, hence tends to zero. Repeated roots change the transient and numerical formula while preserving the declared free-motion long-time conclusion.

### DYN-CAP-R — Later return: remove damping

On a later visit, close the earlier keys and set $c=0$, $k=m/t_0^2$, with the same initial state. Reconstruct the exact motion, energy, phase portrait, invariant probability appropriate to that orbit, $x^2$ time average and Euler energy law. Decide which previous attraction and measure-selection conclusions survive. Record a new attempt under this return identity even if the earlier answer is remembered.

#### DYN-CAP-R — Complete return key

Now $x'=v$, $v'=-x$ and

$$x=\\cos\\tau,\\qquad v=-\\sin\\tau,\\qquad E_r=(x^2+v^2)/2=1/2.$$

The formula constructs the unique global solution. Nearby initial states stay equally near because the flow is an orthogonal rotation, so the origin is Lyapunov stable. It is not attractive; each nonzero energy level is a periodic circle of minimal period $2\\pi$. A neighboring circle does not approach the assigned one. The imaginary pair $\\pm i$ does not invoke hyperbolic linearization.

Normalized arc length $d\\theta/(2\\pi)$ on the unit circle is invariant under this **continuous-time flow**: every time map translates angle and preserves arc length. The direct average is

$$\\frac1T\\int_0^T x(\\tau)^2d\\tau=\\frac12+\\frac{\\sin(2T)}{4T}\\longrightarrow\\frac12,$$

which is also its arc-length space mean, with deviation at most $1/(4T)$. The equilibrium point mass $\\delta_0$ remains invariant and has mean zero, but it does not describe this nonzero orbit. Invariance alone does not select the relevant measure. Nor should continuous-flow averaging be replaced by arbitrary sampled maps: sampling at $2\\pi$ leaves every circle point fixed.

Euler satisfies

$$x_{n+1}=x_n+hv_n,\\qquad v_{n+1}=v_n-hx_n,\\qquad
E_{r,n+1}=(1+h^2)E_{r,n}.$$

Thus $E_{r,n}=\\tfrac12(1+h^2)^n$ grows for every fixed $h>0$, even though the exact energy is constant. At a fixed $T=nh$, refinement still converges: $(1+h^2)^{T/h}\\to1$, and the consistent rotation angle tends to $T$. Fixed-horizon convergence does not imply faithful long-time geometry at a fixed nonzero step. Here there is no damping margin, no attraction to zero, and no justification for copying the previous zero time-average claim.

### DYN-RUBRIC — Comparison, repair and next step

Use the following descriptive criteria on each retained attempt. They do not award a grade or verify an individual response.

| Criterion | Compare with the complete key | Repair when missing |
| --- | --- | --- |
| Model and hypotheses | Force units, nondimensional scales, state/input domain, constitutive and initial-data assumptions | Re-derive the balance and reopen DYN-U01; state what the mechanism omits. |
| Existence and qualitative claim | Local theorem, actual global continuation, eigen/Jordan structure, energy and stability type | Reconstruct DYN-PREP and DYN-U03–U06; exhibit the dropped-hypothesis counterexample. |
| Control and spatial scope | Exact two ranks, ideal-input limitations, changed forcing energy term; conditional PDE item stated accurately | Recompute DYN-U07; retain the separate DYN-U09–U11 PDE/variation answers. |
| Computation | Exact recurrence, endpoint reference, stability boundary, structural energy diagnostic and finite-time error where requested | Derive the modal/Jordan formula and geometric error sum before interpreting any run. |
| Long time and transfer | Named flow, actual invariant probability, observable and direct average; changed/return conclusions reconstructed | Rework DYN-U14 and the undamped boundary, distinguishing a point mass from the orbit measure. |

Keep the first attempt and correction; record which help or keys were used. The next step is the applied route's separate cooling validation synthesis or the physics route's further source preparation, as selected by the programme. A public model comparison is self-review, not individual mathematical verification, observed workload or empirical validation.
<!-- euler-dynamics-selected-core:end -->
`;export{e as default};