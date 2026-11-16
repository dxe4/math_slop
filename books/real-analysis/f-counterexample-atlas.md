# Counterexample Atlas {#sec-analysis-counterexamples}

The fastest way to understand a theorem is to know what fails when one hypothesis
is removed. This atlas groups reusable examples by the false inference they
block. Each entry states the claim it defeats and the smallest verification
needed.

## Completeness and category

### Nested closed sets without a point

In $\mathbb Q$, choose rational endpoints shrinking to $\sqrt2$ and let
$F_n$ be the resulting nonempty closed intervals relative to $\mathbb Q$.
Their diameters tend to zero, but their intersection in $\mathbb Q$ is empty.
This blocks the nested-set conclusion without completeness.

### A complete space is not countably nowhere dense in itself

The rational line is the union of countably many singleton nowhere-dense sets,
so Baire fails there. The same decomposition cannot cover $\mathbb R$, even
though the singletons look identical locally. The missing hypothesis is
completeness of the ambient metric.

## Compactness and convergence

### Bounded does not imply compact

The standard basis $e_n$ in $\ell^2$ is bounded, but
$\|e_n-e_m\|=\sqrt2$ for $n\ne m$. It has no norm-convergent subsequence.
Finite-dimensional Bolzano–Weierstrass does not extend to arbitrary Banach
spaces.

### Pointwise bounded does not imply equicontinuous

On $[0,1]$, $f_n(x)=x^n$ satisfies $0\le f_n\le1$, but a boundary layer
forms at $1$. The pointwise limit is discontinuous, so no subsequence can
converge uniformly. This blocks Arzelà–Ascoli with boundedness alone.

### Local uniform is not global uniform

The sequence $f_n(x)=x/n$ tends uniformly to zero on every bounded interval but
$\sup_{x\in\mathbb R}|x/n|=\infty$. Exhaustion arguments yield compact-local
control, not control at infinity.

## Modes of convergence

### Pointwise does not imply uniform

Again $x^n\to0$ on $[0,1)$ while $x^n(1)=1$. Even when the pointwise limit
is modified at $1$, the supremum error does not vanish.

### Almost everywhere plus bounded $L^1$ norm need not give $L^1$

On $(0,1)$, let $f_n=n\mathbf1_{(0,1/n)}$. Then $f_n\to0$ almost everywhere
and $\|f_n\|_1=1$. The missing property is uniform integrability.

### Weak does not imply norm

In $\ell^2$, $e_n\rightharpoonup0$ but $\|e_n\|=1$. Compact operators can
convert this particular weak convergence into norm convergence after applying
the operator; bounded operators generally cannot.

### Convergence in measure does not imply pointwise convergence {#convergence-in-measure-need-not-hold-everywhere}

The typewriter sequence enumerates indicators of dyadic intervals: at level
$k$, move an interval of length $2^{-k}$ across $[0,1]$. It converges to
zero in measure, but every point belongs to infinitely many displayed intervals,
so the full sequence has no pointwise limit at most points.

## Differentiation and integration

### Derivative zero almost everywhere need not mean constant

The Cantor function is continuous and nondecreasing, has derivative zero almost
everywhere, and rises from zero to one. Absolute continuity, absent here, is the
hypothesis that restores the fundamental theorem.

### Differentiation under the integral can fail

Pointwise derivatives $\partial_tf(t,x)$ may exist while no integrable
dominating function controls them. Moving the derivative through the integral
can then change or destroy the answer. A reliable application states a common
neighbourhood in $t$ and a dominating $L^1$ function.

### Fubini without absolute integrability

Conditionally convergent positive and negative pieces can make iterated
integrals exist with different values. Tonelli applies to nonnegative functions;
Fubini's symmetric conclusion requires integrability of the absolute value or
another stated theorem.

## Operator-theorem hypotheses

### Linear does not imply continuous

On an infinite-dimensional normed space, a Hamel-basis construction can define
an everywhere linear but discontinuous functional. Such examples use an
algebraic basis and are nonconstructive, but they show why “bounded” appears in
operator definitions.

### Pointwise bounded operators need a Banach domain

Uniform boundedness uses Baire on the domain. On an incomplete normed space, a
family can be pointwise bounded while operator norms diverge. One model uses
finite sequences $c_{00}$ with the supremum norm and

$$
T_n(x)=n x_n.
$$

Each fixed finite sequence is eventually annihilated, so
$\sup_n|T_nx|<\infty$, while $\|T_n\|=n$.

### Bijective bounded maps need complete spaces for bounded inverse

Let the same vector space carry two norms, one strictly stronger than the other,
and choose an incomplete setting where the identity is bounded in one direction
but its inverse is not. The open-mapping theorem cannot be invoked until both
domain and codomain are Banach.

### Closed range is not automatic

The diagonal operator on $\ell^2$,

$$
T(x_1,x_2,\ldots)
=(x_1,x_2/2,x_3/3,\ldots),
$$

is bounded, injective, compact, and has dense nonclosed range. Its inverse on the
range is unbounded. This is the spectral mechanism behind ill-posed inversion.

## Measure and probability

### Category-typical and measure-typical can disagree

There are dense open subsets of $[0,1]$ with arbitrarily small measure. Their
countable intersection can be residual and have measure zero. Construct the
$n$th open dense set by placing intervals of total length below $2^{-n}$
around the rationals, then use subadditivity on the intersection.

### Pairwise independence is not mutual independence

Take two independent fair bits $X,Y$ and let $Z=X\oplus Y$. Each pair is
independent, but knowing any two determines the third. Products of three-event
probabilities expose the failure.

### Optional stopping without hypotheses

A doubling strategy stops at the first win and appears to guarantee one unit of
profit. The required stake and possible loss are unbounded, and the stopped
family is not uniformly integrable. The example blocks unrestricted optional
stopping, not the correctly stated theorem.

## Variational and PDE failures

### An infimum need not be attained

On the open set $(0,1)$, the continuous coercive-looking scalar problem
$\inf_{x\in(0,1)}x$ has infimum zero but no minimiser. In function spaces,
nonclosed boundary or positivity constraints create the same escape.

### Bounded minimizing sequences need compactness in the right topology

A bounded sequence in an infinite-dimensional space need not have a strongly
convergent subsequence. The direct method deliberately uses reflexive weak
compactness and then pays for it by requiring weakly closed constraints and weak
lower semicontinuity.

### Stationary need not mean minimal

For $J(x)=x^3$, the derivative vanishes at zero but zero is neither a local
minimum nor maximum. Functionals have the same problem: Euler–Lagrange equations
find stationary points.

### Weak limits and nonconvex energy

Rapid oscillations can converge weakly to their average while retaining a lower
microscopic energy. If the integrand is nonconvex, the energy at the average may
exceed the liminf or represent an unattainable phase mixture. Relaxation and
quasiconvexity address this gap.

### Weak solution does not mean smooth solution

Lax–Milgram returns an $H_0^1$ solution. Smoothness can fail on polygonal
domains with re-entrant corners, with rough coefficients, or under singular
forcing. Existence and regularity estimates are separate results.

### Backward heat flow is unstable

Forward heat evolution multiplies eigenmode $k$ by
$e^{-\lambda_kt}$. Reversing time multiplies data error by
$e^{\lambda_kt}$, unbounded in $k$. A formula can exist on an exceptionally
small range while the data-to-solution map remains discontinuous.

## Kernels, transport, dynamics, stochastic paths, and spectra

### Conditioning is not division by a null probability

For a jointly Gaussian pair with a continuously distributed observation $Y$,
$\mathbb P(Y=y)=0$ for every $y$. The ratio
$\mathbb P(X\in A,Y=y)/\mathbb P(Y=y)$ is undefined, although a regular
conditional kernel $K(y,A)$ exists. The repair is disintegration on a standard
Borel space, with versions understood up to a marginal null set.

### A transport plan need not come from a map

Let the source be one point mass and the target give positive mass to two
distinct points. A deterministic image of the source remains a point mass, so
no Monge map can realize the target. A Kantorovich coupling splits the row mass
and exists immediately. Nonatomicity or a separate map-existence theorem is
needed before replacing plans by maps.

### Weak convergence need not control Wasserstein cost

Put $\mu_n=(1-1/n)\delta_0+(1/n)\delta_n$. Then
$\mu_n\Rightarrow\delta_0$, because every bounded continuous test function
sees the escaping atom with coefficient $1/n$. But
$W_1(\mu_n,\delta_0)=1$. Matching moment control, not weak convergence alone,
is the missing hypothesis.

### Ergodic does not imply mixing

Irrational rotation preserves Lebesgue measure and is ergodic. The mean-zero
observable $f(x)=e^{2\pi ix}$ satisfies
$f\circ R_\alpha^n=e^{2\pi in\alpha}f$, so its correlation has constant
magnitude rather than tending to zero. Mixing is a strictly stronger
decorrelation statement.

### Finite-dimensional agreement need not give indistinguishable paths

A process that is one only at a single random time and zero otherwise agrees
with the zero process at every fixed finite collection of times almost surely.
Nevertheless its sample path contains a spike with probability one. Equality
of finite-dimensional distributions, modification, indistinguishability, and
equality as random elements of a path space are different claims.

### Principal value is not absolute convergence

The odd kernel $1/y$ has symmetric principal value zero on $[-1,1]$, while
$\int_{-1}^1|1/y|\,dy=\infty$. An asymmetric deletion can even alter the
limit. Cancellation and a declared truncation rule are essential hypotheses.

### Symmetric need not mean self-adjoint

The momentum expression $-i\,d/dx$ on $H_0^1(0,1)$ is symmetric because both
boundary traces vanish. Its adjoint domain is all of $H^1(0,1)$, so the domains
are unequal. Formal integration by parts proves symmetry only after the
boundary form and both domains are checked.

### Spectrum need not consist of eigenvalues

The position operator $Qf(x)=xf(x)$ on its maximal $L^2$ domain has spectrum
$\mathbb R$. It has no eigenvectors because a singleton has Lebesgue measure
zero. Normalized functions supported in shrinking intervals provide Weyl
sequences and witness continuous spectrum.

## How to use the atlas

For any proposed theorem:

1. write its quantifiers and ambient spaces;
2. match each hypothesis to a proof step;
3. remove one hypothesis at a time;
4. test the examples above or adapt their mechanism;
5. distinguish failure of truth from failure of the chosen proof.

A counterexample should be verified, not merely named. State the ambient space,
check every retained hypothesis, compute the failed conclusion, and identify
exactly which omitted condition would exclude it.

## Rapid lookup by false inference

| False inference | Counterexample mechanism | Repairing hypothesis |
|---|---|---|
| Cauchy implies convergent | rational approximations to an irrational in $\mathbb Q$ | completeness |
| bounded family implies compact | orthonormal basis in $\ell^2$ | finite dimension or compactness criterion |
| pointwise limit preserves continuity | $x^n$ on $[0,1]$ | uniform convergence or equicontinuity plus subsequence |
| almost everywhere plus bounded norms implies $L^1$ | shrinking spike of fixed mass | uniform integrability |
| weak implies strong | $e_n\rightharpoonup0$ in $\ell^2$ | compact operator or norm convergence |
| derivative zero almost everywhere implies constant | Cantor function | absolute continuity |
| bounded bijection has bounded inverse | incomplete normed-space identity | Banach domain and codomain |
| critical point minimises | $x^3$ at zero | convexity or positive second variation |
| weak PDE solution is smooth | corner or rough-coefficient elliptic problem | regularity hypotheses and estimates |
| reverse heat flow is stable | exponential eigenmode amplification | regularisation and restricted source class |
| conditional probability is always a ratio | continuous observation with null fibres | regular conditional kernel on a standard Borel space |
| every optimal plan is a map | one source atom split between two targets | nonatomic source or a map-existence theorem |
| weak convergence implies $W_p$ convergence | vanishing mass escaping to infinity | convergence of $p$th moments or uniform moment tails |
| ergodic implies mixing | irrational rotation | add a genuine mixing hypothesis |
| finite-dimensional agreement gives identical paths | a spike at one random time | path-space law or indistinguishability control |
| principal value means absolute integral | odd kernel $1/x$ | cancellation and symmetric truncation |
| symmetric means self-adjoint | zero-boundary momentum operator | equality of the adjoint domain |
| spectrum consists of eigenvalues | position multiplication on $L^2(\mathbb R)$ | compactness or an explicit pure-point hypothesis |

The repair column names a common sufficient condition, not always the weakest
possible one. When several hypotheses fail simultaneously, first alter the
example so that all but one are restored; otherwise it does not diagnose which
assumption is essential.
