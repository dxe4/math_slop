# Appendix C — Glossary and notation {#sec-glossary}

## Symbols and conventions

| Symbol | Meaning |
|---|---|
| $f:D\to C$ | function from domain $D$ to codomain $C$ |
| $f'(a)$, $df/dx$ | derivative at a point or derivative operation |
| $f_x$, $\partial f/\partial x$ | partial derivative with other inputs held fixed |
| $\nabla f$ | gradient vector |
| $\Delta x$ | finite change in $x$ |
| $dx$ | differential or integration variable, interpreted by context |
| $\int_a^b f(x)dx$ | definite integral, oriented from $a$ to $b$ |
| $\iint_D f\,dA$ | double integral over region $D$ |
| $\sum_{n=1}^{\infty}a_n$ | series defined as a limit of partial sums |
| $\mathbf r(t)$ | vector-valued curve |
| $\Vert \mathbf v\Vert $ | Euclidean norm of a vector |
| $\mathbf u\cdot\mathbf v$ | dot product |
| $\mathbf u\times\mathbf v$ | cross product in three dimensions |
| $\nabla\cdot\mathbf F$ | divergence of a vector field |
| $\nabla\times\mathbf F$ | curl of a vector field |
| $f=O(g)$ | $f$ is eventually bounded in magnitude by a constant multiple of $g$ |
| $f\sim g$ | the ratio $f/g$ tends to one in the declared limit |
| $\widehat f$ | Fourier transform under the chapter's stated normalization |
| $\delta J[y](\eta)$ | first variation of a functional in direction $\eta$ |
| $\kappa,\tau$ | curvature and torsion of a regular curve |
| $K,H$ | Gaussian and mean curvature of a surface |
| $J_Fv$ | Jacobian–vector product used by forward automatic differentiation |
| $\mu(E)$, $\int f\,d\mu$ | measure of a set and Lebesgue integral with respect to $\mu$ |
| $f_n\rightharpoonup f$ | weak convergence in the declared function space |
| $\Vert T\Vert $ | operator norm of a bounded linear map |
| $r=b-A\widehat x$ | algebraic residual of an approximate linear solve |
| $F(u_L,u_R)$ | numerical flux in a finite-volume scheme |
| $L(\theta;x)$, $\ell(\theta)$ | likelihood and log-likelihood for fixed observed data $x$ |
| $\approx$ | approximate equality |

Indices usually begin at $1$ unless stated otherwise. Angles are in radians. Definite-integral variables are dummy variables. Absolute value denotes distance on the line; double bars denote vector norm.

## Alphabetical glossary

**Absolute convergence.** Convergence of $\sum|a_n|$, which implies convergence of $\sum a_n$.

**Accumulation function.** A function $A(x)=\int_a^x f(t)dt$ whose derivative is $f(x)$ when $f$ is continuous.

**Antiderivative.** A function $F$ satisfying $F'=f$ on an interval.

**Average value.** The integral of a function over an interval divided by the interval's length.

**Chain rule.** The rule differentiating a composition by composing local derivatives in dependency order.

**Conservative field.** A vector field equal to a gradient; under appropriate domain hypotheses its line integrals are path independent.

**Continuity.** Agreement of a function value with its limit at a point.

**Convergence.** Approach of a sequence or sequence of partial sums to a finite limit.

**Critical point.** An interior point where a derivative or gradient vanishes or fails to exist, depending on context.

**Curl.** A derivative of a three-dimensional vector field measuring local rotational tendency.

**Definite integral.** A limit of Riemann sums representing oriented accumulation.

**Derivative.** A limit of difference quotients and coefficient of the best local linear model.

**Differentiability.** Existence of a linear approximation whose remainder is small relative to displacement.

**Direction field.** Sampled slope segments representing a first-order differential equation.

**Directional derivative.** Rate of change of a scalar field per unit distance in a specified direction.

**Divergence.** Scalar derivative measuring net outward flux density.

**Elasticity.** Dimensionless relative sensitivity $xf'(x)/f(x)$.

**Equilibrium.** A constant state of a differential equation where the rate vanishes.

**Gradient.** Vector of partial derivatives; it points toward steepest local increase when nonzero.

**Improper integral.** An integral defined by a limit because of an infinite interval or unbounded integrand.

**Jacobian.** Determinant measuring local area or volume scale under a coordinate transformation.

**Level set.** Inputs at which a scalar field has a fixed value.

**Limit.** A value controlled by taking inputs sufficiently near a target or sufficiently far along a sequence.

**Linearization.** Best affine first-order approximation at a differentiable point.

**Line integral.** Accumulation of a scalar density or tangent component of a vector field along a curve.

**Local extremum.** A value at least as large or small as all sufficiently nearby values.

**Partial derivative.** Derivative with respect to one coordinate while others are fixed.

**Power series.** A series $\sum c_n(x-a)^n$ with a radius of convergence.

**Riemann sum.** A finite sum of sampled heights times subinterval widths or cell measures.

**Series.** A limit of a sequence of finite partial sums.

**Surface integral.** Accumulation of scalar density or normal flux across a surface.

**Taylor polynomial.** Polynomial whose derivatives match a function at a center through a specified order.

**Vector field.** A function assigning a vector to every point of a domain.

**Analytic function.** A complex function differentiable on an open set; it is
locally represented by a convergent power series.

**Automatic differentiation.** Evaluation of derivatives by composing local
chain rules through a computational graph.

**Characteristic.** A curve along which a first-order PDE reduces to an ordinary
differential equation.

**Conformal map.** A differentiable map that preserves oriented angles wherever
its local scale is nonzero.

**Convolution.** A sliding-overlap integral or sum that represents the response
of a linear time-invariant system.

**Curvature.** Rate of change of unit tangent with respect to arc length.

**Functional.** A map whose input is a function and whose output is usually a
number.

**Importance sampling.** Rewriting an expectation under a chosen sampling
density and applying likelihood-ratio weights.

**Impulse response.** Output of a linear time-invariant system to an ideal unit
impulse; convolution with it gives general outputs.

**Monte Carlo estimator.** A sample average or weighted sample quantity used to
estimate an expectation or integral.

**Residue.** Coefficient of $(z-z_0)^{-1}$ in a Laurent expansion at an
isolated singularity.

**Transfer function.** Ratio of output to input transforms for a linear system
under its stated zero-initial-condition convention.

**Weak formulation.** An integral form of a differential equation obtained by
moving derivatives onto test functions.

**A-stability.** Stability of a time-stepping method throughout the open left
half of the test-equation plane. It is a property of a method's stability
function, not a guarantee that every computed solution is accurate.

**Bifurcation.** A qualitative change in equilibria, cycles, or their stability
as a parameter crosses a critical value. A plotted change suggests a
bifurcation; hypotheses such as transversality establish its type.

**Condition number.** A local or global amplification factor from input
perturbation to output perturbation. It describes the problem before rounding
and algorithmic error are considered.

**Controllability and observability.** Controllability asks whether inputs can
move a state through the required directions; observability asks whether the
state can be reconstructed from outputs. Both depend on the model and time
horizon.

**Data assimilation.** Sequential combination of a dynamical forecast with
new measurements and their uncertainty models.

**Eigenvalue.** A scalar $\lambda$ for which $Av=\lambda v$ for some nonzero
vector $v$. Eigenvectors identify directions preserved up to scaling by a
linear map.

**Feedback.** An input rule that depends on measured or estimated state. It can
reject disturbances, but delays, saturation, noise, and model error remain part
of the stability question.

**Inverse problem.** Recovery of causes or parameters from observed effects.
Identifiability, stability, computation, and uncertainty are separate
obligations.

**Lyapunov exponent.** An asymptotic average exponential rate of separation of
nearby perturbations along an orbit. A positive finite estimate is evidence
only after transients and numerical error are audited.

**Regularization.** Replacement of an unstable inverse problem by a controlled
family that penalizes implausible or noise-amplifying solutions. Its parameter
encodes a tradeoff rather than revealing a uniquely correct answer by itself.

**Singular value.** A nonnegative square root of an eigenvalue of $A^TA$.
Singular values measure directional stretching and expose rank, conditioning,
compression, and inverse sensitivity.

**Stiff equation.** A differential equation whose relevant modes evolve on
widely separated time scales, forcing some explicit methods to take very small
steps for stability rather than accuracy.

**Strain and stress.** Strain describes local deformation; stress describes
internal force per area acting across oriented surfaces. A constitutive law
relates them and must be supplied as a modeling assumption.

**Tensor.** A geometric multilinear object whose components transform by a
specified coordinate rule. A matrix is a representation of a second-order
tensor after bases have been chosen.

**Almost everywhere.** A property holds almost everywhere when its failure set
has measure zero for the declared measure.

**Banach and Hilbert spaces.** A Banach space is complete in its norm. A Hilbert
space is complete in a norm induced by an inner product, so it also supports
orthogonality and projection.

**Backward error.** The smallest perturbation of the input problem for which a
computed result is exact. It is distinct from forward solution error.

**Entropy solution.** An admissible weak solution of a conservation law chosen
by an entropy inequality or equivalent selection principle. Weak conservation
alone need not give uniqueness.

**Fisher information.** Expected likelihood curvature or score variance under
a regular statistical model. It measures local parameter information within
that model.

**Finite-volume method.** A discretization that updates cell averages through
shared interface fluxes, giving exact discrete conservation apart from declared
boundary fluxes and sources.

**Likelihood.** A data density or mass function viewed as a function of model
parameters after the data are fixed. It is not automatically a probability
density on the parameters.

**Measurable function.** A function whose inverse images of Borel sets belong to
the declared sigma-algebra, making measure-based integration meaningful.

**Preconditioner.** An easily solved operator used to improve the numerical
geometry of a linear system or optimization problem. Its setup and application
costs are part of the algorithm.

**Weak convergence.** Convergence against every bounded linear functional. It
is weaker than norm convergence and often supports compactness arguments.

## Theorem hypothesis reminders

- Extreme Value Theorem: continuity plus a closed, bounded interval.
- Mean Value Theorem: continuity on the closed interval and differentiability inside.
- Fundamental Theorem of Calculus Part I: continuity is a standard sufficient hypothesis.
- Equality of mixed partials: continuity of the relevant mixed partials near the point is sufficient.
- Cross-partial test for conservative fields: regularity and an appropriate simply connected domain.
- Green, Stokes, and Divergence Theorems: smoothness, suitable regions, and consistent orientation.
- Fourier inversion: integrability or another declared convergence framework.
- Euler–Lagrange: differentiable functional and admissible variations; the
  conclusion is stationarity.
- Sampling theorem: exact band limit and sampling above twice the highest
  frequency.
- Cauchy's formula: analyticity on a neighbourhood of the contour and its
  interior.
- Dominated convergence: almost-everywhere convergence and one integrable
  dominator; pointwise convergence alone is insufficient.
- Fubini: absolute integrability for the finite signed statement; Tonelli needs
  nonnegativity but may return infinity.
- Projection theorem: Hilbert geometry and a closed target subspace or closed
  convex set.
- Lax–Milgram: a bounded coercive bilinear form and bounded functional on a
  Hilbert space.
- Conjugate gradients: a symmetric positive-definite matrix; its finite-step
  termination statement assumes exact arithmetic.
- KKT conditions: a constraint qualification for necessity and convexity for
  the usual sufficiency conclusion.
- Rankine–Hugoniot: conservation fixes jump speed, while entropy admissibility
  is separately required for uniqueness.
- MLE normal approximations and likelihood-ratio reference laws: regular,
  identifiable, interior models and a justified sampling regime.
