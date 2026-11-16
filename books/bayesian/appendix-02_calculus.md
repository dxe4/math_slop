# Appendix 2 · Calculus, transformations, and integration

## How to use this bridge

Bayesian calculations repeatedly multiply densities, integrate out unknown quantities, and change coordinates. This appendix explains why those operations have the forms used in the chapters. It assumes algebra and the distinction between probability and density from [Appendix 1](./appendix-01_probability.md#mass-density-support-and-normalisation). You can work through the examples without having taken a complete calculus course.

**Required bridge.** Read the integration, normalisation, square-completion, and transformation sections alongside [Chapter 2, A prior density on a probability](./02_beta_binomial.md#a-prior-density-on-a-probability), [Chapter 4, Complete the normal square and interpret precision](./04_continuous.md#complete-the-normal-square-and-interpret-precision), and [Chapter 6, Constrained parameters need the right density](./06_hmc.md#constrained-parameters-need-the-right-density). Curvature and unknown-scale integration are explicitly optional depth. The aim is to understand the operation before delegating it to numerical software.

| Notation here | Crosswalk to chapter and software conventions |
|---|---|
| $f_X(x)$, $p(x)$ | Density evaluated at a possible value; either notation appears in the course |
| $Z$ | Integral of an unnormalised kernel, distinct from a random variable called $Z$ in a transformation |
| $a,b$ | Beta shapes are dimensionless; gamma uses shape $a$ and rate $b$ |
| $v=\sigma^2$ | Normal observation variance; SciPy's `scale` is $\sigma$ |
| $s^2$ | Sample variance in the unknown-scale derivation, distinct from the resulting Student-t scale |
| $h=g^{-1}$ | Inverse coordinate map, whose derivative supplies the Jacobian |

## Probability as an integral {#probability-as-an-integral}

An integral adds contributions across an interval. Divide the interval into small cells of width $\Delta_j$ and evaluate a density at a representative point $x_j$. The cell probability is approximately $f(x_j)\Delta_j$. Adding these products and refining the partition leads to the integral. On an uneven partition, widths must remain in the calculation: a density height alone is never a cell probability.

For a concrete density, let $X$ represent a dimensionless fraction with $f(x)=2x$ for $0<x<1$ and zero elsewhere. Since an antiderivative of $2x$ is $x^2$, the probability between one quarter and three quarters is

$$\int_{1/4}^{3/4}2x\,dx
=\left[x^2\right]_{1/4}^{3/4}=\frac12.$$

The integral across the support is one. The mean weights each cell by its possible value, so $E[X]=\int_0^1 x(2x)dx=2/3$. A density plot's peak near one therefore differs from its mean. Expectations of other functions replace the first factor by that function; for example, $E[X^2]=1/2$ and the variance is $1/2-4/9=1/18$.

If instead the variable measured time, the density and differential would carry reciprocal units. Always include the support when normalising. Integrating a positive-rate model over negative rates creates a different, often undefined calculation.

## Beta and gamma normalising integrals

A posterior initially appears as a nonnegative kernel $q(\theta)$. It defines a density only if its integral $Z$ is positive and finite, in which case $p(\theta)=q(\theta)/Z$. Two named integrals make the course's conjugate examples tractable:

$$B(a,b)=\int_0^1 t^{a-1}(1-t)^{b-1}dt,
\qquad \Gamma(a)=\int_0^\infty u^{a-1}e^{-u}du.$$

Positive shape parameters make these integrals finite. Integration by parts gives $\Gamma(a+1)=a\Gamma(a)$, and for positive integers $\Gamma(a)=(a-1)!$. The beta integral satisfies $B(a,b)=\Gamma(a)\Gamma(b)/\Gamma(a+b)$. It is a normalising constant, not an extra assumption about the observations.

For example, $B(3,2)=1/12$, so the Beta(3,2) density is $12\theta^2(1-\theta)$. Ratios of normalisers derive its moments:

$$E[\Theta]=\frac{B(a+1,b)}{B(a,b)}=\frac{a}{a+b},\qquad
E[\Theta^2]=\frac{a(a+1)}{(a+b)(a+b+1)}.$$

Subtracting squared mean from second moment yields the beta variance used in [Chapter 3, Work out both layers of predictive variation](./03_prediction.md#work-out-both-layers-of-predictive-variation). Multiplying a beta prior by a binomial likelihood adds success and failure counts to the exponents. Integration then supplies the beta-binomial predictive mass:

$$P(K=k)=\binom{m}{k}\frac{B(a+k,b+m-k)}{B(a,b)}.$$

The binomial coefficient cannot be discarded here: it varies with the possible count whose probability is being calculated. A factor constant in the parameter during updating can still matter for prediction or evidence.

For a gamma kernel with shape $a$ and rate $b$, substitute $u=b\lambda$. Because $d\lambda=du/b$, its integral is

$$\int_0^\infty\lambda^{a-1}e^{-b\lambda}d\lambda
=b^{-a}\Gamma(a).$$

Thus the density includes $b^a/\Gamma(a)$. The same substitution and gamma recurrence give mean $a/b$ and variance $a/b^2$. When $\lambda$ is incidents per hour, the gamma rate parameter $b$ has units of hours, while the shape is dimensionless. It is consequently sensible that total observation exposure adds to $b$ in [Chapter 4, Derive the gamma-Poisson update](./04_continuous.md#derive-the-gamma-poisson-update).

In SciPy, use `stats.gamma(a, scale=1/b)`: its scale has the same units as the random rate. For large shapes, evaluate normalising constants with `special.gammaln` or `special.betaln` in log calculations, avoiding enormous intermediate gamma values.

## Completing a square derives a Normal posterior

Suppose independent readings satisfy $Y_i\mid\mu\sim\operatorname{Normal}(\mu,\sigma^2)$, with known observation variance, and the prior is $\mu\sim\operatorname{Normal}(m_0,s_0^2)$. The chapter notation uses variance as the second Normal argument; SciPy's `scale` is standard deviation. Keeping only terms that depend on the unknown mean, the log posterior is

$$-\frac12\left[\frac{(\mu-m_0)^2}{s_0^2}
+\sum_i\frac{(y_i-\mu)^2}{\sigma^2}\right]
=-\frac12(Q\mu^2-2h\mu)+\text{constant},$$

$$Q=s_0^{-2}+n\sigma^{-2},\qquad
h=m_0s_0^{-2}+\sigma^{-2}\sum_i y_i.$$

The identity $Q\mu^2-2h\mu=Q(\mu-h/Q)^2-h^2/Q$ identifies a Normal kernel. Therefore posterior mean is $h/Q$ and variance is $1/Q$. The omitted term is constant in the unknown mean, making it irrelevant to this posterior's shape. It is not necessarily constant across models; evidence calculations must retain all required normalisation factors.

Consider an instrument with prior mean eight millimetres and prior standard deviation two millimetres. Two readings are eleven and fourteen millimetres, each with known error standard deviation three millimetres. Here $Q=17/36$ inverse squared millimetres and $h=43/9$ inverse millimetres. Posterior mean is $172/17\approx10.117647$ millimetres and variance is $36/17\approx2.117647$ squared millimetres. The prior pulls the result below the sample mean of 12.5; it has greater precision than the two-reading mean.

**Check your understanding.** What changes if the two readings share an unknown calibration error? Identify exactly which product of likelihood terms would require reconsideration before reusing the precision formula.

## Transformations preserve probability, not density height {#transformations-preserve-probability-not-density-height}

Let $Z=g(X)$ be a differentiable, one-to-one transformation with inverse $x=h(z)$. A small width on the transformed axis corresponds to width $|h'(z)|dz$ on the original axis. Equating probability in corresponding intervals gives

$$f_Z(z)=f_X(h(z))\left|\frac{dh}{dz}\right|.$$

The absolute derivative is the one-dimensional Jacobian. It must use the inverse map because we are expressing the old differential in terms of the new integration variable. For a decreasing transformation the derivative is negative, while probabilities remain positive. With several inverse branches, their contributions must be added; the single-branch formula is insufficient for transformations such as squaring across both signs.

### Worked example: rates in hours and minutes

Suppose the uncertain hourly incident rate is $\Lambda\sim\operatorname{Gamma}(3,\text{rate}=2)$. The numerical rate per minute is $R=\Lambda/60$. Hence $\lambda=60r$ and

$$f_R(r)=60f_\Lambda(60r),\qquad
R\sim\operatorname{Gamma}(3,\text{rate}=120).$$

The mean changes from 1.5 incidents per hour to 0.025 incidents per minute. Variance changes from 0.75 to $0.75/60^2$ in the corresponding squared rate units. The event between one and two incidents per hour is identical to the event between one sixtieth and two sixtieths per minute. Both have probability approximately 0.438573111. A two-hour exposure becomes 120 minutes, so expected counts given the rate are also invariant: $2\lambda=120r$.

### Worked example: a dimensionless log rate

Logarithms need a dimensionless argument. Choose reference rate $\lambda_{\mathrm{ref}}=1$ incident per hour and define $\eta=\log(\lambda/\lambda_{\mathrm{ref}})$. Its inverse has derivative $\lambda_{\mathrm{ref}}e^\eta=\lambda$. For a shape-rate gamma density,

$$\log f_\eta(\eta)
=a\log(b\lambda_{\mathrm{ref}})-\log\Gamma(a)+a\eta
-b\lambda_{\mathrm{ref}}e^\eta.$$

The product of gamma rate and reference incident rate is dimensionless, so every logarithm now has an explicitly dimensionless argument. The Jacobian adds one power of the original rate. Omitting it would leave exponent $a-1$ and target the wrong transformed distribution. In the numerical example, the density mode on the rate axis is one incident per hour, whereas the log-density mode maps back to 1.5 incidents per hour. Density modes are coordinate dependent; probabilities of matched events are invariant.

If you instead declare a Normal distribution for a log rate and define the rate as its exponential, you have directly specified a generative model. You do not manually add another Jacobian to that declaration. The adjustment is needed when expressing an already-specified density with respect to a different integration variable. This distinction also explains [Chapter 9, Reparameterisation changes geometry](./09_hierarchical.md#reparameterisation-changes-geometry).

## Derivatives for HMC and local curvature

**Core HMC support.** A derivative measures change per unit input. At an interior smooth maximum of a log density, its first derivative is zero; negative second derivative indicates local downward curvature. For the Normal posterior above, the gradient is $-Q(\mu-m_n)$ and curvature is $-Q$. Greater precision means steeper log density, narrower uncertainty, and a shorter coordinate scale for numerical exploration.

For Chapter 6, the following differentiation rules are required support; manipulating a full multivariate Hessian is extended-route depth. For differentiable scalar functions, the product rule is $(fg)'=f'g+fg'$ and the chain rule is $(f\circ g)'(x)=f'(g(x))g'(x)$. For example, differentiating $x e^{-x^2/2}$ gives $e^{-x^2/2}(1-x^2)$: the product contributes one term, and the derivative of the inner exponent contributes $-x$. Also $(\log x)'=1/x$ for $x>0$. Taking logs turns likelihood products into sums before differentiation, reducing algebra and underflow.

**Worked gradient for HMC.** A Beta($a,b$) density on $0<\theta<1$ has log density $\ell(\theta)=(a-1)\log\theta+(b-1)\log(1-\theta)+C$. The chain rule gives

$$\ell'(\theta)=\frac{a-1}{\theta}-\frac{b-1}{1-\theta},\qquad
\ell''(\theta)=-\frac{a-1}{\theta^2}-\frac{b-1}{(1-\theta)^2}.$$

For Beta(3,5) at $\theta=1/2$, these are $-4$ and $-24$. HMC uses the potential $U=-\ell$, so its gradient has the opposite sign; the momentum force $-U'$ points towards increasing log density. This constrained-coordinate derivative is an illustration. With unconstrained log odds $z$, $\theta=1/(1+e^{-z})$ and $d\theta/dz=\theta(1-\theta)$. Including the density's Jacobian gives $\ell_z(z)=a\log\theta+b\log(1-\theta)+C$, hence $d\ell_z/dz=a-(a+b)\theta$. For the same Beta distribution at $z=0$, this is $-1$, not $-4$: derivatives depend on the coordinate and reference measure.

### Extended-route depth: vector gradients and Hessians

For a vector $\beta$, the **gradient** $\nabla\ell$ is the column of first partial derivatives; its jth component changes $\beta_j$ while holding the others fixed. The **Hessian** $H$ has entries $H_{jk}=\partial^2\ell/(\partial\beta_j\partial\beta_k)$. Mixed entries describe coupled curvature. If $Q$ is symmetric and $\ell=-\tfrac12(\beta-m)^TQ(\beta-m)+C$, expansion or the product rule gives $\nabla\ell=-Q(\beta-m)$ and $H=-Q$. With $Q=\begin{pmatrix}2&1\\1&3\end{pmatrix}$ and displacement $(1,-1)^T$, the gradient is $(-1,2)^T$. For any nonzero displacement, the potential increases by a positive quadratic because the leading minor is two and determinant is five. Its positive curvature defines a proper local Gaussian approximation.

**Check before coding.** Approximate each partial derivative by $[\ell(\beta+he_j)-\ell(\beta-he_j)]/(2h)$ at an interior point. Try several moderate step sizes: large h has truncation error and tiny h loses digits to subtraction. Compare with the analytic gradient, then differentiate that gradient to check the Hessian. A successful local check detects implementation mistakes; it does not establish global posterior geometry.

A second-order Taylor expansion around a mode replaces a smooth log density locally by a quadratic. Exponentiating gives a Gaussian approximation if the negative Hessian is positive definite. This motivates Laplace approximation and connects to [Chapter 6, Energy connects the target to a trajectory](./06_hmc.md#energy-connects-the-target-to-a-trajectory). Local curvature cannot reveal an unvisited second mode, guarantee tail accuracy, or repair a boundary maximum. Coordinates and Jacobians must be settled before taking derivatives.

## Optional depth: integrating an unknown Normal variance

**Extended route.** The exact reference in [Chapter 4, Unknown scale changes the problem](./04_continuous.md#unknown-scale-changes-the-problem) uses the improper prior $p(\mu,v)\propto1/v$ with respect to $d\mu\,dv$, where $v=\sigma^2>0$. This is not a probability distribution and is not interchangeable with the same expression relative to $d\mu\,d\sigma$.

Let $S=\sum_i(y_i-\bar y)^2>0$. The identity $\sum_i(y_i-\mu)^2=S+n(\mu-\bar y)^2=A(\mu)$ gives

$$p(\mu\mid y)\propto\int_0^\infty
v^{-(n/2+1)}\exp\{-A(\mu)/(2v)\}\,dv
=\Gamma(n/2)\{2/A(\mu)\}^{n/2}.$$

The substitution is $u=A/(2v)$; its absolute differential is $A/(2u^2)du$. Matching the resulting kernel to a Student-t gives degrees of freedom $n-1$, location $\bar y$, and scale $s/\sqrt n$, where $s^2=S/(n-1)$. This posterior is proper when $n>1$ and $S>0$. Its scale is not its standard deviation; the latter exists only when the degrees of freedom exceed two.

For readings eight, ten, twelve, and fourteen millimetres, the mean is eleven, sample variance is $20/3$, and posterior t scale is approximately 1.290994 millimetres. The central 95% interval is approximately [6.891479, 15.108521] millimetres. Its tails incorporate scale uncertainty. A proper posterior here does not rescue marginal likelihoods based on the improper prior: its arbitrary multiplicative constant makes absolute evidence, and ordinary Bayes-factor use of it, undefined without further justified construction.

## Numerical integration and a practical check

Analytic integration identifies an exact mathematical result. Quadrature approximates the integral by selected function evaluations. Monte Carlo approximates an expectation by random draws. These methods have different error mechanisms, so agreement between them is useful evidence.

```python
import numpy as np
from scipy import integrate, stats

hourly = stats.gamma(a=3, scale=1/2)
minute = stats.gamma(a=3, scale=1/120)
p_hour, error_estimate = integrate.quad(hourly.pdf, 1, 2)
p_minute = minute.cdf(2/60) - minute.cdf(1/60)
assert np.isclose(p_hour, p_minute, rtol=0, atol=1e-12)

readings = np.array([8., 10., 12., 14.])
interval = stats.t.ppf(
    [0.025, 0.975], df=3, loc=readings.mean(),
    scale=readings.std(ddof=1) / np.sqrt(readings.size),
)
```

SciPy's [`quad` documentation](https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.quad.html) describes its estimated absolute integration error and tolerances. That estimate concerns numerical integration under the supplied function, not uncertainty about the model or the observations. Narrow peaks, singular boundaries, and omitted tails need deliberate investigation. Refine the domain or tolerances and compare with an independent identity when available.

**Check your understanding.** Explain why increasing quadrature accuracy cannot justify a questionable prior. Then transform a uniform density under a decreasing linear map and identify where the absolute Jacobian enters.
