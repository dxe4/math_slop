var e=`---
parent_id: book-numerical-mathematics-error-algorithms
chapter_id: difficult-integrals-high-dimension
title: "Singular, Oscillatory, and High-Dimensional Integration"
level: advanced-undergraduate
status: draft
estimated_minutes: 195
license: CC BY-SA 4.0
---

# Singular, Oscillatory, and High-Dimensional Integration

## Purpose, prerequisites, and claim boundary

The prerequisite chapter is **Numerical Differentiation and Quadrature**
(\`differentiation-quadrature\`). We use its composite and Gaussian rules,
interpolation-error reasoning, plus elementary probability and changes of
variables. Standard error formulas are
most persuasive when an integrand is smooth on a short, finite interval.
Endpoint singularities, rapid oscillation, infinite domains, and high dimension
break different parts of that comfortable setting. They therefore require
different repairs.

The numerical target is a specified integral with a specified measure. A small
difference between two quadrature rules is an error indicator, not an automatic
bound. A Monte Carlo standard error describes sampling variation under an
independent random model, not deterministic discretization, data uncertainty,
or model error. Every conclusion in this chapter keeps those sources separate.

## Diagnose before choosing a rule

For

\\[
I=\\int_\\Omega f(x)\\,d\\mu(x),
\\]

ask first:

1. Is the domain bounded, and is the measure finite?
2. Is the integral proper, improper but convergent, conditionally convergent,
   or divergent?
3. Where is the integrand nonsmooth, unbounded, discontinuous, or rapidly
   varying?
4. Does the integrand change sign enough to create cancellation?
5. Is dimension moderate enough for a tensor rule?
6. Are function values exact, noisy, randomized, or themselves approximate?
7. Is a deterministic bound, an asymptotic estimate, or a probabilistic error
   statement required?

An algorithm cannot rescue a divergent integral by returning a finite floating-
point number. Nor can it decide a principal-value convention that was never
specified.

## Integrable endpoint singularities

An unbounded integrand can still have a finite integral. For \\(0<\\alpha<1\\),

\\[
\\int_0^{1} x^{-\\alpha}\\,dx=\\frac1{1-\\alpha}.
\\]

Polynomial quadrature applied directly may sample near a steep endpoint, lose
its smooth-error expansion, or attempt to evaluate an infinite endpoint value.
A change of variables should expose the known singular structure.

### Worked square-root substitution

**Example 9.0 (A square-root substitution).**

Consider

\\[
I=\\int_0^{1}\\frac{dx}{\\sqrt{x}}.
\\]

Set \\(x=t^{2}\\), so \\(dx=2t dt\\). For \\(t>0\\),

\\[
x^{-1/2}dx=\\frac1t 2t\\,dt=2\\,dt.
\\]

The transformed integral is

\\[
I=\\int_0^{1} 2\\,dt=2.
\\]

The cancellation at \\(t=0\\) is analytic: implement the transformed integrand as
the constant two rather than evaluating \\((1/t)\\cdot 2t\\) at zero. Simpson's rule, a
Gauss rule, and the trapezoid rule are then exact for this constant in exact
arithmetic. This example does not imply that every singularity is removed by
squaring a variable; the exponent and location determine the mapping.

More generally, if \\(f(x)=x^\\beta g(x)\\) with \\(\\beta>-1\\) and smooth \\(g\\), a power
map can increase endpoint regularity. But an aggressive map also clusters
points, changes roundoff pathways, and may make other regions undersampled.
State the transformed integrand and Jacobian explicitly.

## Subtraction and interval splitting

When a singular component is known, write

\\[
f(x)=s(x)+[f(x)-s(x)]
\\]

and integrate \\(s\\) analytically. The remainder may be smoother. For a logarithmic
endpoint, for example, the identity

\\[
\\int_0^{1} \\log x\\,dx=-1
\\]

can be used as an exact component while a smooth multiplier is expanded around
the endpoint. Subtraction is only useful if the remainder is evaluated without
catastrophic cancellation. Series, divided differences, or a dedicated
near-endpoint formula may be required.

Split at known discontinuities or derivative jumps. A high-order rule spanning
a jump wastes smoothness assumptions and can produce misleading paired-rule
agreement. On each smooth piece, a local estimator has a more credible model.

An improper infinite-domain integral also needs a tail argument. Truncating
\\([0,\\infty)\\) at \\(L\\) creates a deterministic tail

\\[
\\int_L^\\infty f(x)\\,dx,
\\]

which is not measured by refining quadrature on \\([0,L]\\). Bound the tail
analytically, compare multiple \\(L\\) values, or transform the domain, for example
\\(x=t/(1-t)\\). Such a map introduces the Jacobian \\(1/(1-t)^{2}\\) and can move tail
difficulty to \\(t=1\\) rather than eliminating it.

## Adaptive quadrature and estimator failure

An adaptive one-dimensional rule evaluates a coarse formula and one or more
refined formulas on an interval. Their difference estimates local error; the
algorithm subdivides intervals with large indicators. This is effective when
the difference tracks a valid local asymptotic expansion.

Several failure modes remain:

- both rules can share the same alias and agree on a wrong value;
- a narrow spike can lie between all sampled nodes;
- noisy evaluations can make refinement chase random fluctuations;
- cancellation can make an absolute integral large while the signed result is
  small;
- local tolerances may not sum to the requested global error as assumed;
- reaching maximum depth or minimum interval width is not success.

A robust return record includes the value, accumulated indicator, number of
evaluations, subdivision tree summary, tolerance scaling, and termination
reason. If singular locations are known, provide them rather than asking blind
adaptivity to discover them.

## Oscillation and cancellation

For a smooth amplitude \\(g\\), consider

\\[
I(\\omega)=\\int_a^b g(x)e^{i\\omega x}\\,dx.
\\]

When \\(g=1\\),

\\[
I(\\omega)=\\frac{e^{i\\omega b}-e^{i\\omega a}}{i\\omega},
\\qquad
|I(\\omega)|\\le\\frac2{|\\omega|}.
\\]

The integrand has magnitude one, yet the integral becomes small through
cancellation. A relative error goal for a nearly zero answer can demand much
more absolute accuracy than a plot suggests.

If \\(g\\) is differentiable, integration by parts gives

\\[
I(\\omega)=
\\left[\\frac{g(x)e^{i\\omega x}}{i\\omega}\\right]_a^b
-\\frac1{i\\omega}\\int_a^b g'(x)e^{i\\omega x}\\,dx.
\\]

Here division by the frequency requires $\\omega\\ne0$; at zero frequency integrate the amplitude directly. This displays decay under explicit derivative and boundary hypotheses.
Repeated integration by parts needs more smoothness. If the phase is
\\(\\phi(x)\\) rather than \\(x\\) and \\(\\phi'(x)=0\\) somewhere, stationary points require
separate analysis; nonstationary integration-by-parts estimates do not apply
through them.

### Worked sampling alias

**Example 9.4 (An oscillatory sampling alias).**

The exact integral

\\[
\\int_0^{2\\pi}\\cos(50x)\\,dx=0.
\\]

Now use a periodic trapezoid sum with 50 equally spaced points
\\(x_j=2\\cdot \\pi\\cdot j/50\\) and weight \\(2\\cdot \\pi/50\\). Every sample is

\\(\\cos(50\\cdot x_j)=\\cos(2\\cdot \\pi\\cdot j)=1\\).

The computed sum is therefore \\(2\\cdot \\pi\\), maximally misleading. The grid aliases
mode 50 to the constant mode. Higher precision reproduces the same wrong sum.
Changing the point count, shifting the grid, or using phase-aware analysis
reveals the problem.

Oscillatory quadrature methods build the phase into the approximation. Filon-
type rules approximate the slow amplitude and integrate the product with the
oscillation analytically. Levin-type methods reformulate the integral through
an auxiliary differential relation. Asymptotic methods isolate endpoints and
stationary points for large frequency. Each method needs its own phase,
smoothness, and frequency regime; “designed for oscillation” is not a universal
certificate.

## Cancellation-aware reporting

For a signed integral, compare the condition measure

\\[
\\kappa_{\\rm \\int}=
\\frac{\\int_\\Omega |f|\\,d\\mu}
{|\\int_\\Omega f\\,d\\mu|}
\\]

when the denominator is nonzero. A large ratio means small relative data or
evaluation changes can produce much larger relative changes in the signed
answer. This is conditioning of the integration problem, distinct from the
stability of the quadrature algorithm.

Accumulate long sums with a stable reduction or compensation when warranted,
but do not confuse improved summation with improved sampling. If positive and
negative regions are known, integrating them separately can expose the
cancellation ledger, though each part then needs its own error control.

## Tensor-product work and the dimensional barrier

A one-dimensional rule with \\(q\\) nodes becomes a \\(d\\)-dimensional tensor rule
with \\(q^d\\) nodes. With \\(q=8\\) and \\(d=7\\) this is
\\(8^{7}=2,097,152\\) evaluations. Doubling resolution in every coordinate gives
\\(16^{7}=268,435,456\\) evaluations, a factor \\(2^{7}=128\\) increase.

Fast transforms or vectorized evaluation can reduce overhead but do not change
the exponent. Tensor rules remain excellent when dimension is small and the
integrand is smooth. Sparse grids combine selected tensor levels and can reduce
work when mixed derivatives decay appropriately. Low-rank tensor methods help
when the integrand admits an accurate separated representation. Neither gives a
dimension-free guarantee for arbitrary functions.

Anisotropy matters. If one variable controls a boundary layer while others are
gentle, equal resolution wastes work. Coordinate-wise refinement or weighted
sparse construction should be supported by sensitivity evidence, not selected
only after seeing a favorable answer.

## Monte Carlo integration

Let \\(X_1,\\ldots,X_N\\) be independent samples from a probability density \\(p\\) that
is positive wherever the integrand contributes. Define

\\[
Y_i=\\frac{f(X_i)}{p(X_i)},\\qquad
\\widehat I_N=\\frac1N\\sum_{i=1}^N Y_i.
\\]

If \\(E\\lvert Y\\rvert<\\infty\\), the estimator is unbiased for the integral. If
\\(\\operatorname{Var}(Y)=\\sigma^{2}<\\infty\\), then

\\[
\\operatorname{Var}(\\widehat I_N)=\\frac{\\sigma^{2}}{N},
\\qquad
\\operatorname{RMSE}(\\widehat I_N)=\\frac{\\sigma}{\\sqrt{N}}.
\\]

The rate does not explicitly contain dimension, which makes Monte Carlo useful
in high dimension. The variance can nevertheless grow badly with dimension,
and the constant matters. Halving RMS error requires roughly four times as many
independent samples.

The sample variance estimates \\(\\sigma^{2}\\), but it is itself random. A normal
confidence interval additionally invokes a central-limit approximation or
other distributional result. Heavy tails, infinite variance, dependence,
adaptive stopping, and reused random streams can invalidate a casual
\\(estimate \\pm 2 standard errors\\) statement.

### Worked product integral

**Example 9.5 (An exact product-integral variance).**

For independent uniform coordinates on \\([0,1]^{5}\\), let

\\[
f(x)=\\prod_{j=1}^{5} x_j.
\\]

Independence gives

\\[
I=E[f(X)]=(1/2)^{5}=1/32=0.03125.
\\]

Also

\\[
E[f(X)^{2}]=(1/3)^{5}=1/243,
\\]

so

\\[
\\operatorname{Var}(f)=1/243-1/1024\\approx0.0031386.
\\]

At \\(N=10,000\\), the theoretical standard error is approximately
\\(\\sqrt{0.0031386/10000}=0.000560\\). This quantifies sampling variation for
independent exact uniform samples. It does not include pseudorandom generator
defects, floating-point evaluation error, or uncertainty in the integrand.

## Importance sampling and variance reduction

The choice of \\(p\\) changes variance without changing the target when support and
weighting are correct. Good importance sampling makes \\(f/p\\) nearly constant
in regions that matter. If \\(p\\) is tiny where \\(\\lvert f\\rvert\\) is substantial, rare huge
weights can make variance enormous or infinite.

For nonnegative \\(f\\), the unattainable ideal \\(p=f/I\\) makes \\(f/p=I\\) constant and
variance zero, but it requires knowing \\(I\\). Approximations to this density can
still help. For signed \\(f\\), a density proportional to \\(\\lvert f\\rvert\\) addresses magnitude
but cannot eliminate sign cancellation.

Other variance-reduction tools include control variates with known means,
antithetic pairs under justified symmetry or monotonicity, stratification, and
conditional expectation. Report how coefficients or strata were selected. If
the same pilot samples tune and evaluate an estimator, account for the
adaptation or use an independent evaluation stage.

## Quasi-Monte Carlo

Low-discrepancy point sets fill the unit cube more evenly than independent
random points. A Koksma-Hlawka-type theorem bounds deterministic error by a
product of a function-variation term and the point-set discrepancy. Both
hypotheses matter: the relevant variation can be very large or infinite, and
nominal dimension can hide a smaller effective dimension.

Randomized scrambling of a low-discrepancy construction can preserve uniform
marginals and permit independent randomized replicates. Variation across
replicates estimates the randomization error, not model or data error. Using
successive prefixes of one deterministic sequence as though they were
independent replicates understates uncertainty.

Coordinate order, digital precision, and transformations matter. A construction
that is excellent in early coordinates may degrade in later ones. Reproducible
reports record generator family, dimension, scramble, seed or stream identity,
sample count, and replicate structure.

## Combined error and work ledger

For a difficult integral, separate at least:

- domain truncation or transformation error;
- deterministic quadrature or sparse-grid error;
- stochastic sampling error;
- integrand evaluation error;
- floating-point accumulation error;
- uncertainty in data or parameters defining \\(f\\);
- bias introduced by clipping, regularization, or adaptive reuse.

These terms do not automatically add as independent standard deviations. Some
are deterministic bounds, some are biases, and some are random variables.
Combine them only under a stated mathematical model.

A useful stopping policy asks whether the dominant reducible error justifies
more work. Refining a quadrature grid below noisy integrand uncertainty wastes
evaluations. Increasing Monte Carlo samples while importance weights have
infinite variance does not restore the usual standard-error formula. Extending
an infinite-domain truncation without controlling roundoff in an explosive
mapping can make results worse.

## Common failure diagnostics

- **Two adaptive rules agree immediately:** shift or split the grid and test for
  a shared alias or missed spike.
- **Refinement changes only the last few digits irregularly:** locate the noise
  and roundoff floor rather than fitting an order blindly.
- **An oscillatory result is much larger than an analytic bound:** suspect
  undersampling, phase error, or cancellation loss.
- **Monte Carlo error bars shrink but replicate means disagree:** check
  dependence, heavy weights, adaptive tuning, and random-stream separation.
- **Sparse-grid convergence stalls:** inspect mixed regularity, anisotropy, and
  discontinuity alignment.
- **A transformed endpoint returns NaN:** simplify the removable limit before
  evaluation.
- **Relative error explodes near a zero integral:** report an absolute error and
  the cancellation condition measure.
- **More points make a tensor rule impossible:** this is the expected work law,
  not an implementation accident.

<a id="summary"></a>
## Connections

Singular integrals need transformations, subtraction, splitting, and explicit
tail control. Oscillatory integrals need phase-aware sampling and cancellation
diagnostics; ordinary grids can alias an oscillation to a constant. Tensor
quadrature grows exponentially with dimension. Monte Carlo replaces that work
law with a probabilistic \\(N^{-1/2}\\) rate whose variance and independence
hypotheses must be checked. Importance sampling, sparse grids, and quasi-Monte
Carlo gain efficiency only from stated structure. No single error indicator
covers singularity, oscillation, dimension, randomness, evaluation error, and
model uncertainty at once.

## Proving the stochastic error statements

**Theorem 9.1 (Monte Carlo mean and variance).** Let $Y_1,\\ldots,Y_N$ be independent and identically distributed real random variables with mean $I$ and finite variance $\\sigma^2$. Then $\\widehat I_N=N^{-1}\\sum_iY_i$ is unbiased and has mean-square error $\\sigma^2/N$.

*Proof.* Linearity of expectation gives $E\\widehat I_N=I$. Expand
\\[
E(\\widehat I_N-I)^2
=\\frac1{N^2}\\sum_{i,j}E[(Y_i-I)(Y_j-I)].
\\]
Independence makes each cross term with $i\\ne j$ equal to the product of two zero means. The $N$ diagonal terms are $\\sigma^2$. Thus the result is $\\sigma^2/N$, whose square root is the stated RMS error. ∎

No normal approximation was used. In particular this RMS theorem does not assert that every realization lies within one standard error of the mean. A finite-variance deterministic probability bound follows from a separate elementary inequality: for $Z=\\widehat I_N-I$ and $\\tau>0$,
\\[
E Z^2\\ge E[Z^2\\mathbf1_{\\{|Z|\\ge\\tau\\}}]\\ge\\tau^2P(|Z|\\ge\\tau).
\\]
Therefore $P(|\\widehat I_N-I|\\ge\\tau)\\le\\sigma^2/(N\\tau^2)$. This Chebyshev bound is often conservative, but unlike an unqualified normal interval it uses only the stated independence, common distribution, and finite variance.

If the actual draws are dependent, the same expansion contains covariance terms. Positive serial dependence can increase error; merely substituting the raw sample count into $\\sigma/\\sqrt N$ is then unjustified. A deterministic pseudorandom seed fixes a particular run. To attach a probability theorem, specify the randomization model under which the draw or seed is considered random and how its distribution supports the claimed calculation.

## Optimal importance sampling and unavoidable sign cancellation

**Theorem 9.2 (A variance lower bound for importance sampling).** Suppose $f$ is integrable on its domain, let $Z=\\int|f|>0$, and put $I=\\int f$. For a probability density $p$ positive wherever $f$ is nonzero, the importance weight $Y=f(X)/p(X)$ has
\\[
\\operatorname{Var}(Y)\\ge Z^2-I^2,
\\]
whenever its second moment is finite. The density $p=|f|/Z$ on the contributing region attains this bound.

*Proof.* The second moment is $\\int f^2/p$. Cauchy–Schwarz applied to $|f|/\\sqrt p$ and $\\sqrt p$ gives
\\[
\\left(\\int|f|\\right)^2\\le\\left(\\int f^2/p\\right)\\left(\\int p\\right)=E Y^2.
\\]
Subtract $(EY)^2=I^2$. For the proposed density the importance weight is $Z$ times the sign of $f$, so its second moment is $Z^2$ and equality holds. ∎

For nonnegative $f$, $Z=I$, making the ideal variance zero. For a genuinely sign-changing integrand, the positive lower bound exposes cancellation that a nonnegative sampling density cannot remove by itself. The ideal density also needs the unknown normalizing integral $Z$; the theorem is a benchmark, not a generic ready-to-run procedure.

A second-moment condition must be checked after the density is chosen. Support coverage ensures that no contribution is omitted, but is weaker than finite variance: a positive density can still be so small in important regions that $\\int f^2/p$ diverges.

## Tail and transformation budgets

If $|f(x)|\\le Ce^{-\\beta x}$ for $x\\ge L$, with $C,\\beta>0$, then
\\[
\\left|\\int_L^\\infty f(x)\\,dx\\right|
\\le\\int_L^\\infty Ce^{-\\beta x}\\,dx
=\\frac C\\beta e^{-\\beta L}.
\\]
A sufficient way to make this envelope bound at most a desired absolute tail budget $\\tau>0$ is $L\\ge\\beta^{-1}\\log(C/(\\beta\\tau))$ when that right side is positive. If it is nonpositive, $L=0$ suffices only when the envelope is known from zero. In every case the chosen $L$ must also lie beyond any starting point required for validity of the envelope. This is a separate budget from any quadrature error on the retained finite interval.

**Example 9.3 (Allocate a known tail).** For $f(x)=e^{-2x}$, the exact missing tail beyond $L$ is $e^{-2L}/2$. To put it below $10^{-6}$, choose $L>\\tfrac12\\log(500000)$. Refining the finite-interval quadrature without increasing $L$ cannot improve that tail. If the finite rule's certified absolute error is at most $10^{-7}$, adding the tail bound by the triangle inequality gives a total deterministic error below $1.1\\times10^{-6}$. The two terms are bounds, not independent random standard deviations.

For the endpoint form $x^{-\\alpha}$ with $0<\\alpha<1$, a substitution $x=t^p$ gives $p\\,t^{p(1-\\alpha)-1}$. Choosing $p=1/(1-\\alpha)$ makes this particular transformed integrand constant. A smooth multiplier $g(x)$ produces $p\\,g(t^p)$ instead; its differentiability at zero depends on both $g$ and the exponent. A transformation may remove the explicit singular power without making every higher derivative bounded. The resulting rule's assumptions must be checked on the transformed expression.

## A cited deterministic QMC result, with its missing hypothesis named

The Koksma–Hlawka result mentioned earlier is cited, not proved here. Its classical bound is $|N^{-1}\\sum_i f(x_i)-\\int_{[0,1]^d}f|\\le V_{\\rm HK}(f)D_N^*$ for functions of finite Hardy–Krause variation, with $D_N^*$ the star discrepancy of the point set. Star discrepancy measures the largest error in the fraction of points inside axis-aligned boxes anchored at the origin, compared with the boxes' volumes. The variation is a specified multidimensional notion, not simply the visual roughness of a plot. Owen's author-hosted QMC chapters in Sources state the theorem and discuss these distinctions.

This separates a deterministic theorem from randomized replicate error estimates. If the required variation is infinite, the displayed bound gives no finite guarantee, even when a numerical experiment looks successful. Randomized QMC can still be useful under other hypotheses, but successive prefixes of one sequence are not automatically independent replicates.
## Practice with fully worked solutions

### Exercise 9.1
<a id="difficult-integrals-high-dimension-ex-1"></a>

**Remove a singularity.**

Evaluate
\\(\\int_0^{1} x^{-2/3} dx\\) by a power substitution that produces a constant
integrand.

<details>
<summary>Hint 1</summary>

Choose a power map whose Jacobian cancels the singular power.

</details>
<details>
<summary>Hint 2</summary>

Set $x=t^3$ and simplify before evaluating at zero.

</details>
<details>
<summary>Solution</summary>

**Solution.** Set \\(x=t^{3}\\), so \\(dx=3t^{2} dt\\) and
\\(x^{-2/3}=t^{-2}\\) for positive \\(t\\). Their product is \\(3 dt\\). Therefore

\\[
\\int_0^1x^{-2/3}\\,dx=\\int_0^{1} 3\\,dt=3.
\\]

The transformed integrand should be implemented as the constant three at
\\(t=0\\); separately evaluating \\(t^{-2}\\cdot 3t^{2}\\) there creates an avoidable
undefined expression.

</details>

### Exercise 9.2
<a id="difficult-integrals-high-dimension-ex-2"></a>

**Explain a catastrophic alias.**

A periodic trapezoid rule uses \\(m\\) points
for \\(\\int_0^{2\\cdot \\pi} \\cos(mx) dx\\). What value does it return?

<details>
<summary>Hint 1</summary>

Evaluate the cosine at every supplied grid point symbolically.

</details>
<details>
<summary>Hint 2</summary>

All sample phases are integer multiples of a full turn.

</details>
<details>
<summary>Solution</summary>

**Solution.** At \\(x_j=2\\cdot \\pi\\cdot j/m\\), every sample is
\\(\\cos(m\\cdot x_j)=\\cos(2\\cdot \\pi\\cdot j)=1\\). Each weight is \\(2\\cdot \\pi/m\\), so the sum is
\\(m\\cdot (2\\cdot \\pi/m)=2\\cdot \\pi\\). The exact integral is zero for nonzero integer \\(m\\). The
failure is sampling alias, not floating-point error. A rule with the same nodes
cannot estimate its own missed mode by higher precision.

</details>

### Exercise 9.3
<a id="difficult-integrals-high-dimension-ex-3"></a>

**Compute a Monte Carlo standard error.**

For the five-dimensional product
example, how many independent samples are needed for theoretical standard error
at most \\(1\\times 10^{-4}\\), using \\(\\operatorname{Var}(f)\\approx 0.0031386\\)?

<details>
<summary>Hint 1</summary>

Square the standard-error requirement.

</details>
<details>
<summary>Hint 2</summary>

The variance used is a stated approximation, so the count has that model qualification.

</details>
<details>
<summary>Solution</summary>

**Solution.** Require

\\[
\\sqrt{0.0031386/N}\\le10^{-4}.
\\]

Squaring gives \\(0.0031386/N \\le 1\\times 10^{-8}\\), hence
\\(N \\ge 313,860\\). This is a variance-model calculation, not a guarantee that a
particular run lies within \\(1\\times 10^{-4}\\).

</details>

### Exercise 9.4
<a id="difficult-integrals-high-dimension-ex-4"></a>

**Construct zero-variance importance sampling.**

For
\\(I=\\int_0^{1} x^{-1/2} dx\\), use density
\\(p(x)=1/(2\\cdot \\sqrt{x})\\) on \\((0,1]\\). Find the importance weight and a way to
sample \\(p\\).

<details>
<summary>Hint 1</summary>

Divide the integrand by the specified density.

</details>
<details>
<summary>Hint 2</summary>

Invert its cumulative distribution to obtain a sampling map.

</details>
<details>
<summary>Solution</summary>

**Solution.** The density integrates to one. The weighted value is

\\(f(x)/p(x)=x^{-1/2}/(1/(2\\sqrt{x}))=2\\),

so every sample returns the exact integral two in exact arithmetic. If \\(U\\) is
uniform on \\([0,1]\\), then \\(X=U^{2}\\) has distribution
\\(P(X\\le x)=P(U\\le \\sqrt{x})=\\sqrt{x}\\) and density \\(1/(2\\sqrt{x})\\). The construction
uses exact knowledge of the integrand's shape; it is not available for a
generic unknown integral.

</details>

### Exercise 9.5
<a id="difficult-integrals-high-dimension-ex-5"></a>

**Audit a tensor budget.**

A six-dimensional tensor Gauss rule uses 10
points per coordinate. How many evaluations are required? What happens when
the per-coordinate count doubles?

<details>
<summary>Hint 1</summary>

Count the Cartesian product of node sets.

</details>
<details>
<summary>Hint 2</summary>

Doubling each coordinate count multiplies work by $2^d$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The first rule uses \\(10^{6}=1,000,000\\) evaluations. Doubling gives
\\(20^{6}=64,000,000\\), a factor \\(2^{6}=64\\). Parallel execution may reduce elapsed
time but not the number of integrand evaluations or the information dimension.

</details>

### Exercise 9.6
<a id="difficult-integrals-high-dimension-ex-6"></a>

**Separate truncation from quadrature.**

To approximate
\\(\\int_0^\\infty \\exp(-x) dx\\), a code truncates at \\(L=8\\) and reports a
quadrature indicator \\(2\\times 10^{-10}\\) on \\([0,8]\\). Bound the missing tail and identify
the dominant reported error.

<details>
<summary>Hint 1</summary>

Integrate the omitted tail exactly.

</details>
<details>
<summary>Hint 2</summary>

Compare its size with the finite-interval indicator; refinement does not remove truncation.

</details>
<details>
<summary>Solution</summary>

**Solution.** The tail is exact:

\\[
\\int_8^\\infty e^{-x}\\,dx=e^{-8}\\approx3.35\\times10^{-4}.
\\]

This is vastly larger than the internal quadrature indicator. The dominant
known error is domain truncation. Refining the rule on \\([0,8]\\) cannot reduce
it; increasing \\(L\\) or adding the analytic tail is required.

</details>

### Exercise 9.7
<a id="difficult-integrals-high-dimension-ex-7"></a>

**A finite-variance probability bound.**

An unbiased independent-sample estimator has variance $\\sigma^2/N$ with $\\sigma^2=4$. How large must $N$ be to make the Chebyshev upper bound for error at least $0.1$ no more than $0.05$?

<details>
<summary>Hint 1</summary>

Use $\\sigma^2/(N\\tau^2)$.

</details>
<details>
<summary>Hint 2</summary>

Solve $4/(0.01N)\\le0.05$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The requirement is $N\\ge8000$. This is a conservative probability statement under the variance and independence assumptions. It does not assert that a particular run is accurate, and it is different from a normal approximation.

</details>

### Exercise 9.8
<a id="difficult-integrals-high-dimension-ex-8"></a>

**Importance-sampling second moment.**

For $f(x)=x$ on $(0,1)$ and density $p(x)=2x$, compute the importance weight and its variance.

<details>
<summary>Hint 1</summary>

The density is normalized because its integral is one.

</details>
<details>
<summary>Hint 2</summary>

Simplify $f(x)/p(x)$ at every contributing point.

</details>
<details>
<summary>Solution</summary>

**Solution.** The weight is the constant $1/2$ for $x>0$. Its mean is the integral $1/2$ and its variance is zero in exact arithmetic. The endpoint zero has no contribution and can be assigned separately. This ideal choice works because the normalized integrand shape is known.

</details>

### Exercise 9.9
<a id="difficult-integrals-high-dimension-ex-9"></a>

**Support is not finite variance.**

For $f(x)=1$ on $(0,1)$ and density $p(x)=2x$, show the importance estimator is unbiased but has infinite second moment.

<details>
<summary>Hint 1</summary>

The first moment integrates $f$ over its full support.

</details>
<details>
<summary>Hint 2</summary>

The second moment is $\\int_0^1 f(x)^2/p(x)\\,dx$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The mean is $\\int_0^1 1\\,dx=1$, so the estimator is unbiased. But the second moment is $\\int_0^1(2x)^{-1}dx=\\infty$. Although the density is positive at every contributing interior point, the usual finite-variance $N^{-1/2}$ standard-error theorem cannot be invoked.

</details>

### Exercise 9.10
<a id="difficult-integrals-high-dimension-ex-10"></a>

**A tail allocation.**

If $|f(x)|\\le3e^{-2x}$ beyond $L$, give a sufficient $L$ for absolute tail at most $10^{-6}$.

<details>
<summary>Hint 1</summary>

Integrate the exponential envelope.

</details>
<details>
<summary>Hint 2</summary>

Require $(3/2)e^{-2L}\\le10^{-6}$.

</details>
<details>
<summary>Solution</summary>

**Solution.** A sufficient choice is $L\\ge\\tfrac12\\log(1.5\\times10^6)$. The envelope integral is $(3/2)e^{-2L}$, so this choice makes it at most the requested budget. The conclusion is only a tail bound; finite-interval quadrature and arithmetic errors remain separate.

</details>


## Forward connection

The randomized linear-algebra chapter uses the same probability discipline:
name the random source, distinguish expectation from a realized certificate,
and verify important outputs deterministically. The differential-discretization
chapters reuse singularity splitting, adaptivity, and work/error ledgers for
time histories and constrained systems.

<a id="source-and-verification-note"></a>
## Sources

The original Euler chapter's singular substitution, oscillatory alias, product-integral calculation, and six complete exercise solutions are retained. Further reading: NIST [DLMF §3.5 Quadrature](https://dlmf.nist.gov/3.5); Art B. Owen's author-hosted [Practical quasi-Monte Carlo integration](https://artowen.su.domains/mc/practicalqmc.pdf) and [QMC book chapters](https://artowen.su.domains/mc/qmcstuff.pdf). The Koksma–Hlawka statement is explicitly cited there rather than proved here. The independence variance calculation, probability bound, importance lower bound, and tail bound used in this chapter are proved in the text. The original wider reading route includes Fishman, Robert–Casella, and Niederreiter without inferring an unverified theorem locator. Links consulted 13 November 2026. Original Euler prose is licensed CC BY-SA 4.0; external prose and figures are not reproduced.

## Summary

Difficult integration separates singularity, tail, phase, dimension, randomness, and arithmetic effects. Transformations and analytic envelopes can give deterministic bounds, while sampled adaptivity alone cannot rule out unobserved structure. Independence and finite variance prove Monte Carlo RMS and conservative probability bounds; support coverage alone is weaker than finite variance. Importance sampling has a precise benchmark exposing irreducible sign cancellation. Deterministic QMC guarantees require their specified variation and discrepancy hypotheses. Each error source must keep its own mathematical meaning.
`;export{e as default};