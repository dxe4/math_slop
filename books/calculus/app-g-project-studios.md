# Guided Project Studios {#sec-calculus-project-studios}

Calculus becomes useful when a derivative, integral, or differential equation is
embedded in a complete modeling argument. These studios train that full cycle:
define a question, choose variables and units, derive a model, compute or prove,
validate against limiting cases, quantify error, and communicate what the result
does not establish.

## The modeling cycle and evidence ledger

For every project, keep the following ledger.

| item | question to answer |
|:---|:---|
| system boundary | What is included, omitted, and treated as external? |
| variables | What does each symbol mean and what are its units? |
| assumptions | Which relations are definitions, measurements, or idealisations? |
| governing law | Which derivative, balance, geometry, or probability principle applies? |
| initial/boundary data | Are there enough conditions, and are they compatible? |
| solution method | Exact formula, numerical approximation, or qualitative analysis? |
| verification | Does substitution, differentiation, or conservation check the answer? |
| validation | Does the model agree with data or trusted limiting behavior? |
| uncertainty | Which parameters, discretisations, and measurements affect the output? |
| claim status | Identity, theorem, computed result, fitted model, or forecast? |

A numerical result without units is incomplete. A fitted curve without a stated
domain is unsafe. A graph without a residual or theorem check is an illustration,
not a validation.

## Rates, derivatives, and error-control studio

### Project: braking distance

Build a model for the distance needed to stop a vehicle. Begin with reaction
time $t_r$, initial speed $v_0$, and constant braking deceleration magnitude
$a>0$. The idealized velocity is

$$
v(t)=v_0-at
$$

after braking begins, until it reaches zero. Derive

$$
d_{\mathrm{reaction}}=v_0t_r,
\qquad
d_{\mathrm{brake}}=\frac{v_0^2}{2a}.
$$

Derive the second formula twice: integrate velocity in time, and use
$v\,dv/dx=-a$. Check units in both derivations.

### Investigation

1. Compare stopping distance at 20, 30, and 40 metres per second.
2. Compute sensitivities

   $$
   \frac{\partial d}{\partial v_0},
   \qquad
   \frac{\partial d}{\partial a},
   \qquad
   \frac{\partial d}{\partial t_r}.
   $$

3. Use a differential to estimate the effect of measurement errors in speed and
   deceleration.
4. Compare the differential estimate with exact recomputation at perturbed
   values.
5. Replace constant $a$ by a speed-dependent law $a(v)=a_0+kv$ and derive
   a separable integral for distance.
6. Identify conditions under which that law stays positive and physically
   meaningful.

### Error experiment

Estimate $d'(v_0)$ with forward and central differences. For step sizes
$h=10^{-1},10^{-2},\ldots$, compute absolute error using the analytic
derivative. Explain the competition between truncation error and floating-point
cancellation. A smaller $h$ need not be better indefinitely.

### Review questions

- Does the model treat reaction and braking as disjoint phases?
- Is road slope, tire saturation, or delay omitted?
- Is a local sensitivity being reported as a guaranteed global bound?
- Which assumptions would need field data rather than calculus?

## Accumulation, integration, and units studio

### Project: medicine concentration and exposure

Let $C(t)$ be a measured concentration in milligrams per litre over hours.
The total exposure is

$$
\operatorname{AUC}(T)=\int_0^T C(t)\,dt,
$$

with units milligram-hours per litre. Begin with the one-compartment decay model

$$
C(t)=C_0e^{-kt},
\qquad k>0.
$$

Integrate exactly and examine the limits $T\to0$ and $T\to\infty$. Interpret
the half-life $\log2/k$.

### Data pathway

Use a supplied or invented table of nonnegative concentration measurements.

1. Compute left, right, trapezoidal, and Simpson estimates on compatible grids.
2. State which methods require equal spacing and which do not.
3. Refine the grid by evaluating the exact model, then estimate convergence
   order from error ratios.
4. Add bounded measurement perturbations and distinguish quadrature error from
   data error.
5. Derive a worst-case exposure error when $|\Delta C_i|\le\eta$.
6. Explain why Simpson's formal fourth-order accuracy does not remove measurement
   uncertainty or model bias.

### Improper and parameter-dependent integrals

Study

$$
I(k)=\int_0^\infty C_0e^{-kt}\,dt=\frac{C_0}{k}.
$$

Justify the improper limit before differentiating with respect to $k$. Then
derive $I'(k)=-C_0/k^2$ both from the formula and by differentiating under the
integral sign. State a domination argument on a parameter interval
$k\ge k_0>0$.

### Extension

Add repeated doses as shifted inputs. Use convolution with an exponential
response or solve a linear ODE with impulses at a conceptual level. Separate the
continuous model from the discrete dosing rule and identify the long-time
periodic steady pattern.

## Differential-equation and phase-space studio

### Project: competing growth mechanisms

Compare exponential and logistic models:

$$
y'=ry,
\qquad
y'=ry\left(1-\frac yK\right).
$$

Derive both solutions from separation, with initial condition $y(0)=y_0>0$.
Check the formulas by differentiation and verify dimensions of $r$ and $K$.

### Qualitative analysis

1. Locate equilibria and draw phase lines.
2. Determine stability from the sign of the vector field.
3. Prove positive initial data remain positive.
4. Identify the inflection point of a growing logistic solution.
5. Compare short-time exponential agreement with long-time saturation.
6. Nondimensionalize using $u=y/K$ and $\tau=rt$.

The nondimensional equation has no free parameter:

$$
\frac{du}{d\tau}=u(1-u).
$$

Explain what information was moved into the scales rather than lost.

### Numerical investigation

Implement Euler and fourth-order Runge–Kutta methods. On a time interval with
an exact solution:

- compare global errors under step halving;
- detect when Euler produces negative or overshooting populations;
- separate stability restrictions from accuracy requirements;
- report number of right-hand-side evaluations, not only steps;
- plot residuals or error, not just solution curves.

### Model discrimination

Create noisy observations over an early time window. Fit exponential and
logistic parameters and show both may fit early growth well. Predict beyond the
window and compare. A small training residual does not identify the correct
long-term mechanism without informative data.

## Multivariable and vector-calculus studio

### Project: a terrain, flow, and boundary

Let

$$
h(x,y)=h_0-Ae^{-(x^2+2y^2)}
$$

represent a depression in terrain. Work on a rectangular region $R$.

1. Compute $\nabla h$ and interpret its direction and units.
2. Find critical points and classify them with the Hessian.
3. Derive the directional derivative along a unit direction $u$.
4. Describe level curves and explain why gradients meet them orthogonally at
   regular points.
5. Approximate the volume between $h$ and a reference plane with a double
   integral.
6. Change variables to scale the elliptical level sets into circles and compute
   the Jacobian.

Now define a planar velocity field

$$
F(x,y)=(-y,x)+\alpha(x,y).
$$

Compute divergence and scalar curl. Interpret the rotational and source terms.
Evaluate circulation around a circle and flux across it directly, then verify
Green's theorem.

### Orientation audit

Reverse the boundary orientation and track the sign change. Parameterize each
edge of a rectangle and verify corner endpoints. Distinguish outward normal,
tangent direction, and the orientation conventions for circulation and flux.

### Three-dimensional extension

Choose a solid inside a sphere and above a cone or plane. Describe it in
Cartesian, cylindrical, and spherical inequalities before integrating. Explain
which coordinate system makes the geometry simplest and where its Jacobian
vanishes. A coordinate singularity is not necessarily a singularity of the
physical region.

## Transform and PDE studio

### Project: diffusion of a localized signal

On the real line, the heat equation is

$$
u_t=\kappa u_{xx},
\qquad \kappa>0.
$$

Take a Gaussian initial condition. Use the Fourier transform rules of Chapter 25
to derive

$$
\widehat u(\xi,t)
=e^{-4\pi^2\kappa\xi^2t}\widehat u_0(\xi)
$$

under the book's Fourier convention. Invert the transform for a Gaussian and
show variance grows linearly with time while total mass remains constant.

### Checks

1. Differentiate the proposed solution and substitute into the PDE.
2. Integrate in space to verify mass conservation, justifying boundary decay.
3. Show the maximum decreases for the explicit Gaussian.
4. Track units: $\kappa$ has length squared per time.
5. Examine $t\downarrow0$ and $t\to\infty$.

### Finite-difference comparison

Discretize $u_{xx}$ with centered differences and time with forward Euler.
Derive the update

$$
u_j^{n+1}=u_j^n+r(u_{j+1}^n-2u_j^n+u_{j-1}^n),
\qquad r=\frac{\kappa\Delta t}{(\Delta x)^2}.
$$

Use a convex-combination argument or Fourier-mode analysis to explain the
stability restriction $0\le r\le1/2$ in one dimension. Run one stable and one
unstable case. The exploding computation is not a property of the heat equation;
it is a discretization failure.

### Wave contrast

Replace the PDE by $u_{tt}=c^2u_{xx}$. Derive the conserved energy for smooth
solutions with suitable boundaries. Explain why diffusion smoothing and wave
finite-speed propagation are different despite sharing a second spatial
derivative.

## Geometry, optimization, and sensitivity studio

### Project: shortest constrained path

On a surface $z=f(x,y)$, a curve $(x(t),y(t),f(x(t),y(t)))$ has length

$$
L=\int_a^b
\sqrt{x'^2+y'^2+
(f_xx'+f_yy')^2}\,dt.
$$

For a simple surface such as a cylinder, cone away from its tip, or graph
paraboloid:

1. derive metric coefficients;
2. compare an obvious coordinate curve with nearby competitors;
3. formulate the Euler–Lagrange equations;
4. use symmetry to find a conserved quantity;
5. solve or numerically approximate a geodesic;
6. verify the result against an unfolded or special-case geometry when possible.

### Constrained optimization

Choose a design problem with an equality constraint $g(x)=0$ and inequalities
$h_i(x)\le0$. Solve it geometrically and through Lagrange or KKT conditions.
Check constraint qualification and second-order information. KKT conditions are
necessary under hypotheses; they are not automatically sufficient in a
nonconvex problem.

### Automatic differentiation audit

Represent the objective as a computational graph. Compute gradients by:

- symbolic differentiation;
- finite differences;
- forward-mode automatic differentiation;
- reverse-mode automatic differentiation.

Count primal operations and derivative storage. Compare numerical results over
several scales. Automatic differentiation gives derivatives of the implemented
program; it does not correct a wrong model or make a nondifferentiable branch
smooth.

### Sensitivity of an ODE objective

Let $y'=f(y,\theta,t)$ and
$J(\theta)=\Phi(y(T))$. Derive the forward sensitivity equation

$$
s'=f_y s+f_\theta,
\qquad s(0)=\frac{\partial y_0}{\partial\theta}.
$$

Compare its result with finite differences and step refinement. Label solver
error, differencing error, and parameter uncertainty separately.

## Stochastic and complex-variable studio

### Monte Carlo project

Estimate an integral

$$
I=\int_{[0,1]^d}f(x)\,dx
$$

using independent uniform samples. Prove unbiasedness and derive variance
$\operatorname{Var}(f(X))/N$. Use exact or high-accuracy reference values for
selected test functions.

1. Plot error across independent replications, not only one lucky run.
2. Estimate standard error and check empirical interval coverage.
3. Compare pseudorandom, stratified, and low-discrepancy samples while labeling
   their different theories.
4. Construct a heavy-tailed integrand with infinite variance or a sharp peak and
   explain why ordinary error estimates become unreliable.
5. Use a control variate and derive the optimal coefficient from covariance.

Random error does not remove deterministic bias from a discretized or truncated
integrand.

### Brownian-scaling vista

Simulate symmetric random walks with step size $1/\sqrt N$ and time step
$1/N$. Compare endpoint histograms and path roughness as $N$ increases.
State the functional central limit theorem as a destination. A finite path is
piecewise linear or stepped; Brownian motion is almost surely nowhere
differentiable, so ordinary velocity is not recovered in the limit.

### Complex contour project

Map a grid under

$$
f(z)=z+\frac1z
$$

away from zero. Identify where the derivative vanishes and compare angle
preservation at regular points. Then evaluate a contour integral in three ways:

1. direct parametrization;
2. antiderivative when the domain permits one;
3. residues when singularities lie inside the contour.

Track orientation and winding number. A closed integral of $1/z$ is not zero
around a loop enclosing the origin because no single-valued antiderivative
exists on that punctured domain.

Use the residue theorem to evaluate one real improper integral, and separately
justify the arc contribution and real-axis limiting process. The contour picture
does not replace those estimates.

## Modern analysis, algorithms, and inference studio

This studio joins the final six chapters through three compact projects. Each
project must preserve the distinction among a mathematical limit, an algorithmic
stopping event, and an empirical uncertainty statement.

### Project A: pulse convergence and operator response

Construct nonnegative pulse functions $f_n$ that converge pointwise almost
everywhere but concentrate or escape in a way that defeats a naive exchange of
limit and integral. Compute their $L^1$ and $L^2$ norms and identify precisely
whether monotone convergence, dominated convergence, Fatou's lemma, or none of
them applies. Then choose a bounded integral operator

$$
(Tf)(x)=\int_0^1 k(x,t)f(t)\,dt
$$

with an explicitly bounded kernel. Estimate $\|T\|$, plot $Tf_n$, and compare
strong and weak convergence claims. If using a Neumann series for $I-\lambda T$,
state the norm condition and plot both iterate error and a computable residual.
A visually flattened curve is not evidence of convergence without a declared
norm and reference.

### Project B: heat solve and dispatch certificate

Discretize one-dimensional variable-conductivity heat flow on a graded mesh.
Show how the boundary rules enter the matrix and establish, where appropriate,
symmetry and positive definiteness. Solve the same systems by a direct method,
conjugate gradients, and a declared preconditioner. Across at least four mesh
sizes, record residual norm, backward error, energy-norm error against a refined
reference, iteration count, and work proxy.

Use the computed temperature or resistance in a convex dispatch problem with
box bounds and one balance constraint. Derive the KKT conditions, implement a
line-search or projected method, and compare its certificate with an analytic
small-instance solution. Stress-test poor scaling and a nearly active bound.
The solver tolerance, discretisation error, and physical parameter uncertainty
must appear in separate columns.

### Project C: traffic shock and detector allocation

Choose a concave traffic flux $f(\rho)$ and Riemann data. Derive the weak jump
speed and decide from characteristics whether the entropy solution is a shock
or rarefaction. Implement a conservative Godunov finite-volume update under a
stated CFL condition. Track total vehicles, boundary flux, overshoot, and shock
location under mesh refinement; compare the measured propagation speed with the
Rankine–Hugoniot prediction.

Now suppose counts from several detector locations are independent Poisson
variables with means depending on one flux parameter. State that assumption as
a model, derive the log-likelihood, score, observed information, and a
large-sample interval. Allocate a fixed detector-time budget to maximize a
declared information criterion, then simulate interval coverage under both the
fitted model and one overdispersed alternative. Explain why numerical
conservation cannot validate the Poisson assumption and why nominal coverage
cannot repair a biased conservation-law solver.

### Shared review gate

For one of the three projects, submit: definitions and nonexamples; a complete
derivation; a units table; a theorem-hypothesis checklist; a deterministic
Plotnine figure with alternative text; at least two refinement axes; and a
failure-and-repair log. A peer reviewer must reproduce one norm, one residual or
conservation identity, and one uncertainty calculation before accepting the
final claim.

## Extended solution clinics

### Clinic 1: the Fundamental Theorem as two statements

Let $f$ be continuous on $[a,b]$ and define

$$
F(x)=\int_a^xf(t)\,dt.
$$

To prove $F'(x)=f(x)$, start with the difference quotient

$$
\frac{F(x+h)-F(x)}h
=\frac1h\int_x^{x+h}f(t)\,dt.
$$

Subtract $f(x)$, use continuity to bound

$$
\left|
\frac1h\int_x^{x+h}(f(t)-f(x))\,dt
\right|,
$$

and handle negative $h$ by oriented integrals. This proves the first part.

For the second part, if $G'=f$, apply the first part to show
$F-G$ has derivative zero, hence is constant. Deduce

$$
\int_a^bf(x)\,dx=G(b)-G(a).
$$

Explain why continuity can be weakened in more advanced integration theories but
why a jump discontinuity requires care if the derivative identity is demanded at
every point.

Then complete three checks:

1. If $f$ is a rate in litres per minute, give units of $F$.
2. Differentiate an accumulation function with a variable upper limit
   $g(x)$ and derive the chain factor.
3. For $\int_{u(x)}^{v(x)}f(t)\,dt$, derive both endpoint terms and their
   signs.

### Clinic 2: Taylor approximation with a certified remainder

For $e^x$ near zero, Taylor's theorem gives

$$
e^x=\sum_{k=0}^n\frac{x^k}{k!}+R_{n+1}(x),
\qquad
|R_{n+1}(x)|\le
\frac{e^{|x|}|x|^{n+1}}{(n+1)!}.
$$

Choose a target interval and tolerance. Find the smallest $n$ justified by
this bound, then compare actual errors. The bound need not be tight; it is a
guarantee.

Repeat for $\sin x$, using the fact that all derivatives have absolute value
at most 1. Use alternating-series error only after verifying alternating signs
and decreasing term magnitudes on the chosen interval.

Now approximate a function near a point where the Taylor series has a limited
radius, such as $1/(1+x^2)$. Identify the nearest complex singularities and
the resulting convergence radius. A polynomial can still approximate outside
that radius by another method; it is the Taylor series at that center that
fails.

Prepare an error table with columns for truncation degree, theorem bound, actual
error at selected points, and arithmetic precision. Never infer a global bound
from a finite grid maximum.

### Clinic 3: constrained extrema require boundary work

Find the maximum and minimum of

$$
f(x,y)=xy
$$

on the closed disk $x^2+y^2\le1$.

Interior critical points satisfy $\nabla f=0$, giving the origin. On the
boundary, Lagrange multipliers give

$$
(y,x)=\lambda(2x,2y).
$$

Solve all cases, including possible zero coordinates, and compare values. Then
prove global extrema exist by continuity and compactness. The Lagrange equations
produce candidates; compactness and candidate comparison produce global
conclusions.

Repeat on a noncompact constraint such as $xy=1$ or an open disk. Show how an
extremum may fail to exist even when an infimum or supremum is finite.

For inequality constraints, write KKT conditions with a consistent sign
convention. Check feasibility, complementary slackness, stationarity, and a
constraint qualification. Construct a nonconvex example where a KKT point is not
the global minimum.

### Clinic 4: orientation in Green, Stokes, and divergence theorems

Let $C$ be the positively oriented unit circle and
$F=(-y/2,x/2)$. Directly parameterize $C$ and compute

$$
\oint_C F\cdot dr.
$$

Then compute the planar curl and verify Green's theorem. Reverse the
parameterization and show only the line-integral sign changes; the theorem
requires the corresponding orientation convention.

Lift the circle to the boundary of the upper hemisphere. Choose the upward
normal, determine the induced boundary direction by the right-hand rule, and
verify Stokes' theorem for a simple field. Repeat with the normal reversed.

For the divergence theorem on a solid, separate flux through every boundary
piece. On a cylinder, omitting the caps changes the surface from closed to open,
so the divergence theorem no longer matches that partial flux. Create a table:

| theorem | interior operator | boundary object | orientation |
|:---|:---|:---|:---|
| FTC | derivative | two endpoints | upper minus lower |
| Green | planar curl/divergence | closed curve | positive/outward |
| Stokes | curl | boundary curve | induced by normal |
| divergence | divergence | closed surface | outward normal |

Explain the shared principle: integrating a derivative over a region becomes a
properly oriented boundary contribution.

### Clinic 5: numerical result versus mathematical certificate

Choose one root-finding problem, one integral, and one ODE. For each produce:

- a raw numerical answer;
- a residual;
- an error estimator;
- a theorem turning the estimator into a bound;
- a failure case in which the residual alone is misleading.

For root finding, $|f(x)|$ is not a distance-to-root bound unless a derivative
or inverse-condition estimate is available. For integration, agreement between
two meshes is not proof without smoothness or a posteriori control. For an ODE,
a small local residual can accumulate unless stability controls error growth.

Finish with a claim sentence whose numerical tolerance, norm, domain, and
assumptions are explicit. Compare it with the vague sentence "the answer is
accurate" and list the missing information.

## Model-comparison casebook

The same data can support several mathematically coherent models. These cases
train the step that routine exercises often hide: deciding what was assumed,
which parameter the data can identify, and what conclusion survives when the
model changes.

### Case 1: falling with no drag, linear drag, or quadratic drag

Choose downward velocity $v\ge0$ and write three models for an object of mass
$m$:

$$
m\frac{dv}{dt}=mg,
\qquad
m\frac{dv}{dt}=mg-cv,
\qquad
m\frac{dv}{dt}=mg-kv^2.
$$

Check units before solving: $c$ has units mass/time and $k$ has units
mass/length. Derive the no-drag solution. For linear drag, separation or an
integrating factor gives, from rest,

$$
v(t)=\frac{mg}{c}\left(1-e^{-ct/m}\right).
$$

For quadratic drag, show that

$$
v(t)=\sqrt{\frac{mg}{k}}
\tanh\!\left(t\sqrt{\frac{gk}{m}}\right).
$$

Differentiate both formulas and substitute them into their equations. Identify
the terminal speeds by setting acceleration to zero, and verify them again by
taking $t\to\infty$. A correct formula must pass both checks.

Given a short velocity record, fit each model on one time interval and test it
on a later interval. Compare residuals in physical units. Explain why an early
record can make all three models hard to distinguish: their Taylor expansions
begin with $v(t)=gt+O(t^2)$. The experiment needs times at which drag is large
enough to be identifiable. Report parameter uncertainty as well as the best
fit, and do not interpret an empirical drag coefficient as a universal material
constant without controlling shape, air density, and speed range.

### Case 2: exponential, logistic, and threshold growth

For a population $P(t)$, compare

$$
P'=rP,
\qquad
P'=rP\left(1-\frac{P}{K}\right),
\qquad
P'=rP\left(1-\frac{P}{K}\right)
\left(\frac{P}{A}-1\right).
$$

Define every parameter and determine its units. Construct a phase line for each
equation. The exponential model has one equilibrium at zero. The logistic model
has equilibria at zero and $K$, while the threshold model also has $A$; its
stability depends on the ordering $0<A<K$.

Solve the logistic equation by separation for positive initial data and check
the result at $t=0$. For the threshold model, a qualitative phase-line
analysis may be more informative than a lengthy partial-fraction formula.
Prove forward invariance of the biologically relevant interval before trusting
a numerical curve.

Generate synthetic observations from one model, add declared measurement
noise, and fit all three. Compare extrapolations, not only in-sample error. If
observations cover only a low-density interval, logistic growth is nearly
exponential because $P/K$ is small; $K$ may then be weakly identified.
Profile the loss over candidate $K$ values and show the flat direction. A
smaller residual does not justify an extra parameter unless the improvement is
stable and scientifically interpretable.

### Case 3: cooling as a forward and inverse problem

Newton's cooling law is

$$
T'(t)=-\lambda\bigl(T(t)-T_a(t)\bigr).
$$

First take constant ambient temperature $T_a$. Derive

$$
T(t)=T_a+(T_0-T_a)e^{-\lambda t}
$$

and explain why the logarithmic linearization is legal only when
$T(t)-T_a$ keeps a known nonzero sign. Estimate $\lambda$ from two exact
measurements, then propagate a small thermometer error through the logarithm.
The estimate becomes ill-conditioned when the temperature difference is close
to zero.

Next allow a measured time-dependent ambient temperature. Use an integrating
factor to obtain

$$
T(t)=e^{-\lambda t}T_0+
\lambda\int_0^t e^{-\lambda(t-s)}T_a(s)\,ds.
$$

Interpret the kernel: recent ambient values receive more weight. Approximate
the integral from discrete data with at least two quadrature rules and refine
the time step. Separate quadrature error, sensor error, and uncertainty in
$\lambda$. If a fitted constant-ambient model leaves structured residuals,
the failure may be model discrepancy rather than numerical error.

Design an inverse question: from noisy internal-temperature data, can both
$T_a$ and $\lambda$ be recovered? Show that a single observation cannot
identify two unknowns. With several observations, examine sensitivity vectors
and explain why near-parallel sensitivities signal poor identifiability.

### Case 4: diffusion time scales and boundary choices

For the heat equation

$$
u_t=\kappa u_{xx}
$$

on a rod of length $L$, use units to show that $\kappa$ has dimensions
length squared per time. Introduce

$$
\xi=\frac{x}{L},
\qquad
\tau=\frac{\kappa t}{L^2}.
$$

The transformed equation is $u_\tau=u_{\xi\xi}$, revealing the characteristic
diffusion time $L^2/\kappa$. Doubling the length multiplies this scale by four.
This conclusion follows before solving the PDE.

Now compare fixed-temperature, insulated, and mixed boundary conditions. For an
insulated rod, integrate the PDE in space and use the boundary fluxes to prove
conservation of total heat. For fixed zero endpoint temperatures, compute the
same derivative and explain why heat can leave. A numerical scheme that changes
the insulated total beyond rounding and discretization tolerance has violated a
structural check.

Implement the explicit centered scheme and derive its nondimensional ratio

$$
\mu=\frac{\kappa\Delta t}{(\Delta x)^2}.
$$

Test a stable and an unstable choice around the one-dimensional threshold
$\mu=1/2$. Grid refinement must link $\Delta t$ to $(\Delta x)^2$; halving
space while keeping time fixed can destabilize the method. Contrast consistency,
stability, and convergence rather than using "accurate" for all three.

### Case 5: optimization under parameter uncertainty

Let a design variable $x$ minimize a cost $C(x,\theta)$, where $\theta$
is measured with uncertainty. Solve the nominal problem at $\theta_0$, check
boundaries and second-order conditions, and then differentiate the first-order
condition

$$
C_x(x^*(\theta),\theta)=0
$$

to obtain, when $C_{xx}\ne0$,

$$
\frac{dx^*}{d\theta}=-\frac{C_{x\theta}}{C_{xx}}.
$$

This formula is local and assumes an interior smooth optimum. Show how it fails
when the optimum meets a constraint, two minima exchange global status, or
$C_{xx}=0$. Plot the objective for several plausible parameter values instead
of plotting only the minimizing point.

Compare three decisions: optimize at the mean parameter, minimize expected
cost under a declared distribution, and minimize worst-case cost over an
interval. They answer different questions. Report the price of robustness—the
nominal performance sacrificed for better worst-case behavior—and test the
chosen design on held-out parameter values. Calculus finds stationary points;
the modeling decision determines which objective deserves to be differentiated.

## Portfolio rubric, peer review, and selected support

Use a 0–4 score in each dimension:

| dimension | full-credit standard |
|:---|:---|
| model | boundary, variables, units, and assumptions are explicit |
| calculus | derivation is correct and theorem hypotheses are checked |
| computation | method, tolerances, convergence, and failure cases are reported |
| validation | substitution, limits, conservation, or data residuals are used |
| uncertainty | numerical, measurement, parameter, and model effects are separated |
| visual communication | axes, units, domain, and caption scope are complete |
| reproducibility | another reader can regenerate every table and figure |
| reflection | limitations and next experiments are stated honestly |

### Selected checks

- Braking distance is quadratic in speed under constant deceleration; reaction
  distance is linear.
- An integral accumulates quantity times the independent-variable unit.
- A numerical ODE curve needs step-refinement and residual checks.
- Jacobians describe local volume scaling and require the map's domain and
  multiplicity.
- A heat explicit scheme can fail through instability even when its algebraic
  stencil is consistent.
- KKT equations need feasibility and constraint qualifications; sufficiency
  needs convexity or a suitable second-order result.
- Automatic differentiation differentiates a program exactly up to arithmetic,
  not the physical world.
- A Monte Carlo confidence interval is conditional on its sampling model.
- A residue calculation needs singularity, orientation, and arc-limit audits.

### Peer-review protocol

Review another project without running their code first. From the report alone,
reconstruct the model, dimensions, and main check. Then run or reproduce one
central calculation independently. Submit:

1. one confirmed derivation;
2. one boundary or unit test;
3. one possible alternative model;
4. one claim whose wording should be narrowed or justified;
5. one reproducibility obstacle;
6. one optional extension.

The author answers every item in a response log. A disagreement may remain, but
the final claim must make the dependency visible enough that a reader can decide
which interpretation is supported.
