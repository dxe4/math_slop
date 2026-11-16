var e=`---
parent_id: book-advanced-statistical-inference-reference
chapter_id: robust-functionals
title: "Robust Functionals"
level: graduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Robust Functionals

This chapter studies estimators defined as functionals of distributions, with emphasis on the influence function as a diagnostic of sensitivity to individual observations. We compare the mean and median, examine M-estimators of location and regression, and clarify what robustness does and does not achieve.

## The influence function

For a statistical functional $T$ defined on a convex set of distributions containing all point masses, the *influence function* at $F$ is

$$\\operatorname{IF}(x;T,F)=\\lim_{\\varepsilon\\downarrow 0}\\frac{T((1-\\varepsilon)F+\\varepsilon\\delta_{x})-T(F)}{\\varepsilon},$$

when the limit exists. Here $\\delta_{x}$ is the point mass at $x$. The influence function measures the effect of an infinitesimal contamination at $x$ on the estimator.

### The mean

For $T(F)=\\mathbb{E}_{F}[X]$, the influence function is

$$\\operatorname{IF}(x;T,F)=x-\\mathbb{E}_{F}[X].$$

This is unbounded in $x$: a single arbitrarily large observation can pull the mean arbitrarily far. The mean is not robust in the sense of bounded influence.

### The median

Let $m$ be the unique median of $F$, so $F(m)=1/2$. Assume $F$ has a positive continuous density $f(m)$ at $m$. Then

$$\\operatorname{IF}(x;T,F)=\\frac{\\mathbf{1}_{\\{x>m\\}}-\\mathbf{1}_{\\{x<m\\}}}{2f(m)}.$$

**Proof sketch.** Consider $F_{\\varepsilon}=(1-\\varepsilon)F+\\varepsilon\\delta_{x}$.
For $x>m$ and small $\\varepsilon$, the perturbed median remains below $x$, so
the contaminating atom is not counted at $m_{\\varepsilon}$:

$$(1-\\varepsilon)F(m_{\\varepsilon})=\\frac12.$$

Hence $F(m_{\\varepsilon})=1/[2(1-\\varepsilon)]
=1/2+\\varepsilon/2+o(\\varepsilon)$, and Taylor expansion gives
$m_{\\varepsilon}-m=\\varepsilon/[2f(m)]+o(\\varepsilon)$. For $x<m$ the atom is
counted, so $(1-\\varepsilon)F(m_{\\varepsilon})+\\varepsilon=1/2$ and the shift
is $-\\varepsilon/[2f(m)]+o(\\varepsilon)$. Combining the two cases gives the
displayed influence function away from $x=m$. ∎

The median influence function is bounded: $|\\operatorname{IF}(x)|\\le 1/[2f(m)]$. A single outlier cannot move the median by more than a finite amount. However, bounded influence is local: it limits the effect of a small fraction of contamination, not half the sample.

## M-estimators of location

An M-estimator of location solves

$$\\sum_{i=1}^{n}\\psi\\Bigl(\\frac{x_{i}-\\theta}{s}\\Bigr)=0,$$

where $\\psi$ is a score function and $s$ is a scale estimate. Common choices:

- **Mean:** $\\psi(u)=u$ (unbounded)
- **Median:** $\\psi(u)=\\operatorname{sign}(u)$ (bounded, monotone)
- **Huber:** $\\psi(u)=u\\mathbf{1}_{\\{|u|\\le k\\}}+k\\operatorname{sign}(u)\\mathbf{1}_{\\{|u|>k\\}}$ (bounded, monotone)
- **Tukey bisquare:** $\\psi(u)=u(1-u^{2}/k^{2})^{2}\\mathbf{1}_{\\{|u|\\le k\\}}$ (bounded, redescending)

### Monotone versus redescending $\\psi$

For nondecreasing $\\psi$, an associated loss $\\rho$ with derivative (or subgradient) $\\psi$ is convex when the scale is fixed; minimizers solve the score equation, with the derivative carrying an irrelevant negative scale factor under the residual convention $(x_i-\\theta)/s$. Uniqueness needs more, such as strict increase over enough residuals. With a set-valued subgradient convention, the sign score for even $n$ has the full interval between the two middle observations as minimizers; a saturated Huber score can also have an interval of roots. Redescending $\\psi$ can create separated local roots, requiring a robust starting value and careful algorithm design. A root-selection convention, robust scale estimate, and initialization are part of the estimator, not afterthoughts.

## Robust regression

In linear regression, the M-estimator solves

$$\\sum_{i=1}^{n}\\psi\\Bigl(\\frac{y_{i}-x_{i}^{T}\\beta}{s}\\Bigr)x_{i}=0.$$

Even if $\\psi$ is bounded, the term $x_{i}\\psi(r_{i}/s)$ can be unbounded in the *predictor* direction. A high-leverage point with outlying $x_{i}$ can dominate the estimating equation. Bounded influence regression requires bounding both the residual and the predictor contribution, leading to *GM-estimators* or *MM-estimators*.

## Breakdown point

The *finite-sample replacement breakdown point* is the smallest fraction of observations whose replacement can drive the estimator arbitrarily far. For a sample of size $n$, the sample mean has breakdown point $1/n$. With the usual middle-order-statistic definition, the sample median has breakdown point $\\lfloor(n+1)/2\\rfloor/n$. A fixed-scale Huber location estimator with bounded monotone score likewise requires roughly half the observations to overwhelm the saturated scores of the uncontaminated observations; a nonrobust estimated scale or a different root convention can reduce its breakdown point. The asymptotic limits of the first two finite-sample fractions are $0$ and $1/2$.

## Worked example: influence of the mean versus median

Let $F$ be the standard normal distribution. For the mean, $\\operatorname{IF}(x;\\text{mean},\\Phi)=x$, which equals $3$ at $x=3$ and grows without bound. For the median, $f(0)=(2\\pi)^{-1/2}\\approx 0.399$, so

$$\\operatorname{IF}(x;\\text{median},\\Phi)=\\frac{\\operatorname{sign}(x)}{2\\cdot 0.399}\\approx 1.253\\cdot\\operatorname{sign}(x).$$

At $x=100$, the mean influence is $100$; the median influence is $1.253$. At $x=-5$, the mean influence is $-5$; the median influence is $-1.253$.

The asymptotic variance of the median is

$$\\frac{1}{n}\\int \\operatorname{IF}(x)^{2}\\,d\\Phi(x)=\\frac{1}{n}\\cdot\\frac{1}{4f(0)^{2}}=\\frac{1}{n}\\cdot\\frac{\\pi}{2}\\approx\\frac{1.571}{n},$$

compared to $1/n$ for the mean. The median has about $57\\%$ larger asymptotic variance at the normal model; equivalently, its asymptotic relative efficiency to the mean is $2/\\pi\\approx0.637$.

## Common errors and misconceptions

- **Equating bounded influence with high breakdown point.** A fixed-scale Huber location estimator has bounded influence and roughly one-half replacement breakdown, but coupling it to a nonrobust scale can destroy that protection. Bounded influence is local and does not by itself determine the finite-sample breakdown of a fully specified estimator.

- **Using robust estimators without checking the target.** A robust estimator estimates a robust parameter (e.g., the population median, not the mean). If the scientific question concerns the mean, the median is the wrong target regardless of its robustness.

- **Ignoring leverage in regression.** A bounded $\\psi$ function protects against outlying residuals but not against outlying predictors. High-leverage points require bounded-influence regression, not just M-estimation.

- **Assuming redescending estimators are always better.** Redescending $\\psi$ can have multiple roots and zero breakdown if initialized poorly. The starting value and scale matter.

## Practice exercises

**Exercise 6.1.** For the trimmed mean that averages observations between the $\\alpha$ and $1-\\alpha$ quantiles, derive the influence function.

**Solution.** Let $q_{\\alpha}=F^{-1}(\\alpha)$ and $q_{1-\\alpha}=F^{-1}(1-\\alpha)$, and assume positive continuous densities at both quantiles. The trimmed mean functional is

$$T(F)=\\frac{1}{1-2\\alpha}\\int_{q_{\\alpha}}^{q_{1-\\alpha}}x\\,dF(x).$$

Define the Winsorized value
$W(x)=\\min\\{q_{1-\\alpha},\\max(q_{\\alpha},x)\\}$ and let
$\\mu_W=\\mathbb{E}_F[W(X)]$. Differentiating both moving quantile boundaries
and the distribution inside the integral gives

$$\\operatorname{IF}(x;T,F)=\\frac{W(x)-\\mu_W}{1-2\\alpha}.$$

Equivalently, the numerator is $q_{\\alpha}-\\mu_W$ below the lower quantile,
$x-\\mu_W$ between the quantiles, and $q_{1-\\alpha}-\\mu_W$ above the upper
quantile. The centering by $\\mu_W$ is required because every influence
function has mean zero under $F$. The influence is bounded and continuous at
the clipping points under this convention. ∎

**Exercise 6.2.** Under replacement contamination and the usual middle-order-statistic definition (averaging the two middle values when $n$ is even), show that the finite-sample breakdown point of the sample median is $\\lfloor(n+1)/2\\rfloor/n$.

**Solution.** Write the finite original sample range as $[a,b]$. If $n=2m+1$
and fewer than $m+1$ observations are replaced, the $(m+1)$st order statistic
remains in $[a,b]$: there are too few replacements to put it below $a$ or
above $b$. If $n=2m$ and fewer than $m$ observations are replaced, **both**
the $m$th and $(m+1)$st order statistics remain in $[a,b]$, so their average
is bounded. Conversely, replace the largest $m+1$ original observations when
$n=2m+1$, or the largest $m$ when $n=2m$, by a common value tending to
$+\\infty$. The odd median then diverges; in the even case the $(m+1)$st order
statistic diverges, so the average of the middle pair does too. Thus the
minimum number is $r=\\lfloor(n+1)/2\\rfloor$, giving fraction $r/n\\to1/2$. ∎

**Exercise 6.3.** For the Huber estimator with $k=1.345$, compute the asymptotic efficiency at the standard normal model.

**Solution.** The asymptotic variance is $\\sigma^{2}_{\\text{Huber}}=\\mathbb{E}[\\psi^{2}(Z)]/\\mathbb{E}[\\psi'(Z)]^{2}$ where $Z\\sim\\mathcal{N}(0,1)$. We have $\\psi'(z)=\\mathbf{1}_{\\{|z|\\le k\\}}$, so $\\mathbb{E}[\\psi'(Z)]=2\\Phi(k)-1\\approx 0.821$. Also

$$\\mathbb{E}[\\psi^{2}(Z)]
=2\\int_{0}^{k}z^{2}\\phi(z)\\,dz+2k^{2}[1-\\Phi(k)]
=2[\\Phi(k)-\\tfrac12-k\\phi(k)]+2k^{2}[1-\\Phi(k)]
\\approx0.710.$$

Therefore $\\sigma^{2}_{\\text{Huber}}\\approx0.710/0.821^{2}\\approx1.053$.
The standard-normal sample mean has asymptotic variance $1$, so relative
efficiency is the reciprocal, $1/1.053\\approx0.95$, or $95\\%$. ∎

## Forward and backward connections

This chapter examined the local sensitivity of statistical functionals through the influence function. In *Multivariate Normal Geometry*, we study estimators that are optimal under exact distributional assumptions but fragile under departures from those assumptions. In *Functional Delta Method and Bootstrap Boundaries*, we use influence functions to derive the asymptotic distribution of smooth functionals and to justify bootstrap procedures.
`;export{e as default};