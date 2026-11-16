# Notation and glossary

## Notation by family

### Logic and sets

| Symbol | Meaning |
|---|---|
| $\forall,\exists$ | for every; there exists |
| $P\Rightarrow Q$ | $P$ implies $Q$ |
| $P\Leftrightarrow Q$ | $P$ and $Q$ are equivalent |
| $A\subseteq B$ | every member of $A$ belongs to $B$ |
| $A^c$ | complement relative to the ambient set |
| $A^\circ,\overline A,\partial A$ | interior, closure, boundary |
| $1_E$ | indicator of $E$: one on $E$, zero off $E$ |
| $\mathbb N,\mathbb Z,\mathbb Q,\mathbb R,\mathbb C$ | natural, integer, rational, real, complex numbers |

### Order, convergence, and topology

| Symbol | Meaning |
|---|---|
| $\sup S,\inf S$ | least upper bound; greatest lower bound |
| $a_n\to L$ | sequence $(a_n)$ converges to $L$ |
| $\limsup a_n,\liminf a_n$ | largest and smallest persistent tail limits |
| $B_r(x)$ | open metric ball of radius $r$ around $x$ |
| $d(x,y)$ | distance in a metric space |
| $x_n\uparrow x$ | increasing sequence converging to $x$ |
| $E_n\uparrow E$ | increasing sets with union $E$ |
| $\Vert f\Vert _\infty$ | supremum norm |
| $C([a,b])$ | continuous functions on $[a,b]$ |

### Integration and function spaces

| Symbol | Meaning |
|---|---|
| $\int_a^b f(x)\,dx$ | Riemann integral unless context says otherwise |
| $\int f\,d\mu$ | integral with respect to measure $\mu$ |
| $m(E)$ | Lebesgue measure of $E$ |
| $f_n\to f$ a.e. | convergence except on a measure-zero set |
| $L^p$ | measurable functions of finite $p$-norm, modulo a.e. equality |
| $\langle f,g\rangle$ | inner product |
| $X^*$ | continuous dual of a normed space $X$ |
| $\widehat f$ | Fourier transform under the stated normalisation |

### Advanced analysis notation

| Symbol | Meaning |
|---|---|
| $V_a^b(f)$ | total variation of $f$ on $[a,b]$ |
| $\int f\,d\alpha$ | Riemann–Stieltjes or Lebesgue–Stieltjes integral, by context |
| $Df(a),D^2f(a)$ | Fréchet derivative and second derivative at $a$ |
| $\nabla f,H_f$ | gradient and Hessian of a scalar function |
| $J_\Phi$ | absolute Jacobian determinant $\vert \det D\Phi\vert $ |
| $m^*$ | Lebesgue outer measure |
| $\nu\ll\mu,\nu\perp\mu$ | absolute continuity and mutual singularity of measures |
| $d\nu/d\mu$ | Radon–Nikodym derivative |
| $\vert \nu\vert ,\nu^+,\nu^-$ | total variation and Jordan parts of a signed measure |
| $\mathcal A\otimes\mathcal B$ | product sigma-algebra |
| $\delta_x$ | unit point mass or Dirac distribution at $x$ |
| $D^\alpha$ | derivative indexed by a multi-index $\alpha$ |
| $W^{1,p},W_0^{1,p}$ | first-order Sobolev space and its zero-boundary closure |
| $C_c^\infty(\Omega)$ | smooth compactly supported test functions |
| $\mathbb E,\operatorname{Var}$ | expectation and variance |
| $K(x,\cdot)$ | probability kernel evaluated at the base point $x$ |
| $\Pi(\mu,\nu),W_p(\mu,\nu)$ | couplings and the $p$-Wasserstein distance |
| $U_Tf=f\circ T,\mathcal I$ | Koopman operator and invariant sigma-algebra |
| $(B_t)_{t\ge0},[X]_t$ | Brownian motion and quadratic variation |
| $L^{p,\infty}$ | weak-$L^p$ space defined through distribution tails |
| $D(A),G(A)$ | domain and graph of a possibly unbounded operator |
| $E_A(B),\phi(A)$ | spectral projection and functional calculus for $A$ |
| $\int f\,d\mu\in X$ | Bochner integral of a Banach-valued function |
| $\operatorname{ind}T$ | Fredholm index: kernel dimension minus range codimension |
| $\operatorname{ext}K$ | extreme points of a convex set $K$ |
| $\delta_X(\varepsilon)$ | modulus of uniform convexity of $X$ |

## Alphabetical glossary

**Absolute convergence.** Convergence of $\sum|a_n|$ or finiteness of
$\int|f|$; it supplies order-independent tail control.

**Accumulation point.** A point whose every punctured neighborhood meets the set.

**Almost everywhere.** Outside a measurable set of measure zero.

**Absolute continuity of functions.** Uniform control of total output change over
finite disjoint interval families of small total length; equivalently on an
interval, representation as the integral of an $L^1$ derivative.

**Absolute continuity of measures.** The relation $\nu\ll\mu$: every $\mu$-null
set is also $\nu$-null.

**Analytic function.** A function locally equal to a convergent power series; this
is stronger than having derivatives of every order.

**Banach space.** A complete normed vector space.

**Bochner integral.** Integral of a strongly measurable Banach-valued function,
constructed by approximation in the integral of its norm.

**Bounded variation.** Finite supremum of sums of absolute increments over all
finite partitions.

**Boundary.** The set of points every neighborhood of which meets both a set and its
complement.

**Cauchy sequence.** A sequence whose sufficiently late terms are mutually
arbitrarily close.

**Closed set.** A set containing every limit of its convergent sequences in the
ambient metric space; equivalently, a set with open complement.

**Compact set.** A set for which every open cover has a finite subcover.

**Complete metric space.** A metric space in which every Cauchy sequence converges.

**Connected set.** A set that cannot be separated into two disjoint nonempty
relatively open pieces.

**Continuous function.** A function that maps sufficiently close inputs to close
outputs at each point; equivalently, inverse images of open sets are open.

**Contraction.** A map satisfying $d(Tx,Ty)\le qd(x,y)$ for one fixed $q<1$.

**Convex function.** A function whose value at a weighted mean does not exceed the
corresponding weighted mean of values.

**Dense set.** A set whose closure is the entire ambient space.

**Derivative.** The coefficient of first-order local linear approximation.

**Distribution.** A continuous linear functional on smooth compactly supported
test functions; not to be confused with a probability distribution, though the
two uses interact through measures.

**Equicontinuous family.** A family sharing a common input tolerance for each output
tolerance.

**Extreme point.** A point of a convex set that is not a nontrivial convex
combination of two distinct points of that set.

**Fredholm operator.** A bounded operator with finite-dimensional kernel,
closed range, and finite-dimensional cokernel.

**Fourier coefficient.** An inner product with a trigonometric frequency mode.

**Hilbert space.** A complete inner-product space.

**Jacobian determinant.** The determinant of a derivative matrix; its absolute
value is the local volume scale in a change of variables.

**Hölder map.** A map whose output distances are bounded by a fixed power, at most
one, of input distances.

**Infimum.** The greatest lower bound of a set.

**Interior.** The set of points possessing a neighborhood contained in the set.

**Lebesgue integral.** An integral built from measurable simple functions and
countable approximation.

**Lebesgue outer measure.** The infimum of total lengths over countable
open-interval covers of a set.

**Lipschitz map.** A map whose output distance is bounded by a constant times input
distance.

**Measurable function.** A function whose inverse images of sublevel sets $\{f<a\}$ belong to the
specified sigma-algebra.

**Mollifier.** A smooth approximate identity used in convolution to create smooth
approximations.

**Metric.** A nonnegative, symmetric, point-separating distance satisfying the
triangle inequality.

**Nowhere dense.** A set whose closure has empty interior.

**Open set.** A set containing a ball around each of its points.

**Pointwise convergence.** Convergence at every fixed input, with cutoff allowed to
depend on the input.

**Pettis integral.** A weak vector integral characterized by integration after
every continuous linear functional.

**Riemann integral.** The common value of limiting lower and upper interval sums.

**Radon–Nikodym derivative.** An almost-everywhere density representing an
absolutely continuous measure relative to a reference measure.

**Riemann–Stieltjes integral.** A tagged-sum integral weighted by increments of an
integrator rather than interval length.

**Sigma-algebra.** A collection of sets closed under complements and countable
unions and containing the ambient set.

**Simple function.** A measurable function taking finitely many values.

**Sobolev space.** An $L^p$ space whose specified distributional derivatives are
also represented by $L^p$ functions.

**Total variation measure.** The positive measure recording maximal magnitude of a
signed measure across measurable partitions.

**Subsequence.** A sequence obtained by retaining terms at strictly increasing
indices.

**Supremum.** The least upper bound of a set.

**Totally bounded.** Coverable by finitely many balls at every positive scale.

**Uniform convergence.** Function convergence with a cutoff independent of input.

**Uniform continuity.** Continuity with an input tolerance independent of the base
point.

**Uniform convexity.** A quantitative form of strict convexity in which unit-ball
points a fixed distance apart have midpoints uniformly inside the unit ball.

**Uniform integrability.** A family-level condition preventing $L^1$ mass from
concentrating in high tails or arbitrarily small sets.

**Weak derivative.** An integrable function that represents a distributional
derivative through integration against test functions.

**Adjoint.** For a Hilbert-space operator $T$, the operator $T^*$ satisfying
$\langle Tx,y\rangle=\langle x,T^*y\rangle$.

**Baire-one function.** A pointwise limit of continuous functions.

**Coercive form.** A bilinear form satisfying
$a(u,u)\ge\alpha\|u\|^2$ for one $\alpha>0$.

**Comeagre set.** A set whose complement is meagre; in a Baire space, a
comeagre set is dense when represented by an intersection of open dense sets.

**Conditional expectation.** The integrable random variable measurable with
respect to specified information and matching the original variable's integrals
on every observable event.

**Distributional derivative.** The functional obtained by transferring a
derivative to a test function with the sign dictated by integration by parts.

**Filtration.** An increasing sequence of sigma-algebras representing information
available over time.

**Gamma convergence.** A variational convergence notion defined by a liminf
inequality and the existence of recovery sequences in a declared topology.

**Lebesgue point.** A point at which the mean absolute oscillation of a locally
integrable function over shrinking balls tends to zero.

**Martingale.** An adapted integrable process whose conditional expected next
value equals its present value.

**Maximal function.** The supremum of local averages of a function's absolute
value over a specified family of sets containing or centred at a point.

**Meagre set.** A countable union of nowhere-dense sets.

**Orthogonal projection.** The nearest-point map onto a closed Hilbert subspace;
its residual lies in the orthogonal complement.

**Reflexive Banach space.** A Banach space whose canonical embedding into its
double dual is surjective.

**Tempered distribution.** A continuous linear functional on the Schwartz space
of rapidly decreasing smooth test functions.

**Weak solution.** A function satisfying an equation after derivatives have been
transferred to test functions; the exact meaning depends on the stated spaces
and boundary data.

**Weak-star convergence.** Convergence of dual elements tested pointwise against
the original space rather than the entire double dual.

The notation $x_n\rightharpoonup x$ denotes weak convergence, while
$\phi_n\stackrel{*}{\rightharpoonup}\phi$ denotes weak-star convergence.
The symbol $M f$ denotes the Hardy–Littlewood maximal function only inside the
chapter where its averaging family has been fixed. The Fourier transform uses
the convention
$\widehat f(\xi)=\int f(x)e^{-2\pi i x\cdot\xi}\,dx$; formulas from sources
using another convention must be rescaled before comparison.

Operator domains are part of operator notation. Writing $A:D(A)\subset H\to H$
means that $A$ need not be defined on every vector of $H$; equality of two
unbounded operators includes equality of their domains. For probability,
$\mathbb E[X\mid\mathcal G]$ is an almost-everywhere equivalence class, and a
chosen version may differ on a null set. For PDE, $H_0^1(\Omega)$ denotes the
closure of compactly supported smooth functions in the $H^1$ norm; on regular
domains this corresponds to zero boundary trace, not to an arbitrary pointwise
declaration at every boundary point.

## Nonlinear, geometric, and stochastic vocabulary

**Convex conjugate.** For an extended-real function $f$, the function
$f^*(y)=\sup_x(\langle y,x\rangle-f(x))$. It records the best affine lower
bounds to $f$ and depends on the declared pairing.

**Generator.** The possibly unbounded derivative at time zero of a strongly
continuous semigroup. Its domain consists only of states for which that limit
exists.

**Hausdorff dimension.** The critical exponent at which Hausdorff covering
cost changes from infinite to zero. A numerical box-counting slope is an
estimate, not automatically a proof of this dimension.

**Locally compact space.** A Hausdorff space in which every point has a
neighbourhood with compact closure. Local compactness supports compactly
supported test functions and Radon-measure representation.

**Monotone operator.** An operator or relation $A$ satisfying
$\langle Ax-Ay,x-y\rangle\ge0$ whenever both values are defined. This is an
order-like inequality in a paired vector space, not pointwise monotonicity of a
real function.

**Radon measure.** In this book, a positive Borel measure on a locally compact
Hausdorff space that is locally finite (equivalently, finite on compact sets),
outer regular on every Borel set, and inner regular on open sets by compact
approximation. Finite-measure Borel sets are then inner regular; inner regularity on
all Borel sets requires care on general spaces. See [regularity investigation](33-radon-measures.md#sec-radon-conventions).

**Rectifiable set.** A set covered, up to measure zero, by countably many
Lipschitz images of Euclidean pieces of the appropriate dimension. Finite
Hausdorff measure alone need not imply rectifiability.

**Resolvent.** The inverse $(\lambda I-A)^{-1}$ where it exists as a bounded
operator. Resolvent bounds encode information about an unbounded generator and
its evolution semigroup.

**Subgradient.** A vector $g$ satisfying
$f(y)\ge f(x)+\langle g,y-x\rangle$ for every $y$. At a nonsmooth convex corner
there may be many subgradients.

**Tight family of measures.** A family for which, for every $\varepsilon>0$,
one compact set carries at least $1-\varepsilon$ mass for every member. Tightness
prevents probability mass from escaping to infinity.

**Topological degree.** An integer-valued count of zeros, with orientation and
multiplicity, that remains unchanged under boundary-avoiding homotopies. A
nonzero degree proves existence but generally not uniqueness.

**Vague and weak convergence.** Vague convergence tests against compactly
supported continuous functions. Weak convergence of probability measures tests
against all bounded continuous functions; equality of the notions needs extra
conditions such as tightness or compactness.

**Polish space.** A topological space admitting a complete separable compatible
metric. The topology, rather than one preferred metric, is the invariant object.

**Standard Borel space.** A measurable space isomorphic to the Borel space of a
Polish space. This is the natural setting for regular conditional distributions
and disintegration.

**Probability kernel.** A map $K(x,B)$ that is a probability measure in $B$ for
fixed $x$ and measurable in $x$ for fixed $B$. Both clauses are required.

**Disintegration.** A kernel representation of a joint measure relative to a
marginal, interpreted through integral identities and unique only almost
everywhere in the conditioning variable.

**Coupling.** A joint probability measure with specified marginals. Optimal
transport minimises a cost over the set $\Pi(\mu,\nu)$ of all such joints.

**Wasserstein distance.** The optimal $p$th-moment transport cost raised to the
power $1/p$. It metrizes weak convergence together with matching moment control.

**Ergodic transformation.** A measure-preserving transformation whose invariant
events have probability zero or one. Ergodicity is weaker than mixing.

**Quadratic variation.** A partition limit of squared increments. Brownian
motion has quadratic variation $t$, unlike differentiable paths, whose quadratic
variation is zero.

**Itô integral.** The $L^2$ extension of adapted step-process integrals, governed
by the Itô isometry. It is not an ordinary pathwise Riemann–Stieltjes integral.

**Weak type.** A level-set estimate of the form
$\mu\{|Tf|>t\}\le(C\|f\|_p/t)^q$; it need not imply a strong $L^q$ norm bound at
the same endpoint.

**Principal value.** A symmetric deletion limit around a singularity. Its
cancellation rule is part of the definition and may exist when absolute
integration fails.

**Projection-valued measure.** A Borel measure taking values in orthogonal
projections and countably additive in the strong operator topology.

**Self-adjoint operator.** A densely defined operator satisfying $A=A^*$ in both
action and domain. A merely symmetric operator can have a larger adjoint domain.

**Functional calculus.** The assignment $\phi\mapsto\phi(A)$ obtained by
integrating against a spectral measure. Unbounded $\phi$ produces a new
operator domain determined by a square-integrability condition.

## Convention reminders

“Increasing” means nondecreasing. A theorem about real-valued functions does not
automatically extend to extended-real values. An equality of $L^p$ elements means
equality almost everywhere. Infinite sums and improper integrals always denote
limits of finite quantities; their algebra is subject to convergence hypotheses.
The symbol $D$ means a Fréchet derivative in Euclidean-space chapters and a
distributional derivative in the Sobolev chapter; the surrounding definition
always specifies which. A density is relative to its displayed reference measure.
