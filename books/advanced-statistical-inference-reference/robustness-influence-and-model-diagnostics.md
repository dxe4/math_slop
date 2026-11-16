
# Robust Functionals and Influence {#section-1-robust-functionals-and-influence}

<a id="section-1-advanced-preparation"></a>
## Advanced preparation {#section-3-advanced-preparation}

This L4 continuation states the differentiability, local-uniform stochastic expansion and empirical-process conditions used by its asymptotic arguments. Finite contamination and clipping calculations remain local proofs; general M-estimation theory and functional differentiability are additional advanced needs.

An estimator can be optimal at a central model and unstable under a small departure from it. Robust statistics makes that dependence explicit. It asks which population functional a procedure targets, how an infinitesimal contamination changes it, how many finite replacements can destroy it, and which diagnostics can reveal that the observation law is implausible.

This chapter develops estimating equations and M-estimation as the common language for robust location, derives their sandwich limit and influence function, compares the mean, median, and Huber estimator, and separates robust point estimation from robust standard errors. It builds on asymptotic linearisation and bootstrap logic. Robustness is always relative to a neighbourhood, target, and loss; it does not license ignoring design or dependence.

<a id="section-9-1-a-robustness-question-needs-a-central-model-and-depar"></a>
## 1. A robustness question needs a central model and departures {#section-11-1-a-robustness-question-needs-a-central-model-and-depar}

Let $F$ denote an observation distribution and $T(F)$ the population functional targeted by an estimator. A central model might assert $F=F_\theta $, but a robustness analysis considers nearby laws such as the contamination neighbourhood

$F_{\varepsilon ,G}=(1-\varepsilon )F+\varepsilon G$,

where $G$ is an uncontrolled distribution and $0\le \varepsilon <1$ is a contamination fraction.

Three questions are distinct:

- **stability:** how far can $T(F_{\varepsilon ,G})$ move as $G$ varies?
- **sampling uncertainty:** how variable is $T(P_n)$ under repeated samples from one law?
- **identification:** does the observation law determine the scientific target at all?

A bounded-influence estimator addresses the first locally. It does not repair nonrandom selection, unmeasured confounding, dependence, or a target that changes under contamination unless those issues are included in the model.

<a id="section-25-2-m-estimators-minimise-empirical-loss"></a>
## 2. M-estimators minimise empirical loss {#section-27-2-m-estimators-minimise-empirical-loss}

For scalar location and a fixed positive scale $s$, an **M-estimator** minimises

$Q_n(\theta )=n^{-1}\sum _{i=1}^n \rho ((X_i-\theta )/s)$.

If $\rho $ is differentiable with derivative $\psi $, an interior minimiser satisfies

$0=\Psi _n(\theta )=n^{-1}\sum _i \psi ((X_i-\theta )/s)$.

The equation can have no root or several roots, especially for nonconvex redescending losses. A complete procedure specifies scale estimation, root selection, starting values, convergence checks, and boundary rules—not merely the symbol $\operatorname{argmin}$.

<a id="section-37-squared-and-absolute-loss"></a>
### Squared and absolute loss {#section-39-squared-and-absolute-loss}

For $\rho (u)=u^{2}/2$, $\psi (u)=u$; the equation is $\sum _i(X_i-\theta )=0$, so $\hat{\theta }=\bar{X}$.

For $\rho (u)=|u|$, subgradient zero means at least half the observations lie on each side of $\theta $; every sample median minimises the objective. Absolute loss limits the contribution of response magnitude, but at an even sample size the minimiser can be an interval unless a tie convention is declared.

<a id="section-43-3-the-population-equation-defines-the-estimand"></a>
## 3. The population equation defines the estimand {#section-45-3-the-population-equation-defines-the-estimand}

The sample equation estimates a root of

$m(\theta ;F)=E_F[\psi ((X-\theta )/s)]=0$.

Under a symmetric distribution about $\theta _0$ and odd $\psi $, the root is often $\theta _0$. Under asymmetry it need not equal the mean, median, or a named physical parameter. The estimating equation itself defines a functional once root uniqueness is established.

This matters under misspecification. Maximum likelihood scores, least-squares normal equations, and robust scores can all converge to pseudo-true roots of population equations even when the central family is false. Consistency is for that root, not automatically for the scientist's intended quantity.

<a id="section-53-fisher-consistency"></a>
### Fisher consistency {#section-55-fisher-consistency}

An estimating functional is **Fisher consistent** for parameter $\theta $ in a model ${F_\theta }$ if $T(F_\theta )=\theta $. Proving this requires showing both that $\theta $ solves the population equation and that the chosen solution is unique.

For a symmetric location family and a nondecreasing odd score, symmetry makes the expectation zero at the centre. Strict increase on a region with positive probability can give uniqueness. Oddness alone does not.

<a id="section-59-4-huber-loss-clips-residual-contributions"></a>
## 4. Huber loss clips residual contributions {#section-61-4-huber-loss-clips-residual-contributions}

For threshold $c>0$, Huber loss is

$\rho _c(u)=u^{2}/2$ when $|u|\le c$,

and

$\rho _c(u)=c|u|-c^{2}/2$ when $|u|>c$.

Its score is

$\psi _c(u)=\max(-c,\min(u,c))$.

Small residuals receive the quadratic treatment of the mean; large residual contributions are capped at magnitude $c$. Because $\rho _c$ is convex, the location objective is convex. It can still have a nonunique flat minimiser in degenerate datasets, and the fixed scale $s$ can itself be nonrobust.

As $c\to \infty $, Huber estimation approaches the mean. As $c\downarrow 0$ after irrelevant scaling, its score approaches the sign score underlying the median. The threshold trades efficiency near a light-tailed centre against protection from extreme responses. There is no model-free best value.

<a id="section-77-5-asymptotic-linearisation-produces-the-sandwich-varian"></a>
## 5. Asymptotic linearisation produces the sandwich variance {#section-79-5-asymptotic-linearisation-produces-the-sandwich-varian}

Let $\theta _0$ be the unique population root. Suppose a consistent selected root $\hat{\theta }$ exists, differentiation under expectation is valid, and

$A=\partial m(\theta ;F)/\partial \theta  |_{\theta =\theta _0}\ne 0$,

$B=Var_F[\psi ((X-\theta _0)/s)]<\infty $.

A mean-value expansion gives

$0=\Psi _n(\theta _0)+\dot{\Psi }_n(\tilde{\theta })(\hat{\theta }-\theta _0)$.

If $\dot{\Psi }_n(\tilde{\theta })\to A$ in probability and the score obeys a CLT, then

$\sqrt{n}(\hat{\theta }-\theta _0)\Rightarrow Normal(0,B/A^{2})$.

The two outer factors $A^{-1}$ surrounding score variability $B$ motivate the word **sandwich**. In vector form the covariance is

$A^{-1}B A^{-T}$.

For location with differentiable score,

$A=-(1/s)E[\psi '((X-\theta _0)/s)]$.

The theorem requires more than formal Taylor expansion: consistency, a well-behaved selected root, stochastic equicontinuity or an adequate uniform derivative law, and nonsingular $A$ must be checked.

<a id="section-103-6-the-empirical-sandwich-estimates-sampling-scale"></a>
## 6. The empirical sandwich estimates sampling scale {#section-105-6-the-empirical-sandwich-estimates-sampling-scale}

At $\hat{\theta }$, define score contributions $\psi _i=\psi ((X_i-\hat{\theta })/s)$ and derivative contributions $a_i=-(1/s)\psi '((X_i-\hat{\theta })/s)$. A scalar plug-in estimator is

$\hat{A}=n^{-1}\sum _i a_i$, $\hat{B}=n^{-1}\sum _i \psi _i^{2}$,

so

$se(\hat{\theta })=[\hat{B}/(\hat{A}^{2}n)]^{1/2}$.

Finite-sample corrections may be useful, and nonsmooth scores require derivative interpretations or density estimation. The formula is asymptotic even when arithmetic is exact.

A **robust standard error** often means a sandwich scale for an estimator such as least squares under heteroskedasticity. It does not make the point estimator resistant to outliers or leverage. Conversely, a robust point estimate paired with a model-based standard error can still have miscalibrated uncertainty.

<a id="section-117-7-influence-functions-differentiate-contamination"></a>
## 7. Influence functions differentiate contamination {#section-119-7-influence-functions-differentiate-contamination}

For functional $T$, the **influence function** at $F$ is

$IF(x;T,F)=\lim_{\varepsilon \downarrow 0}[T((1-\varepsilon )F+\varepsilon \delta _x)-T(F)]/\varepsilon $,

when the limit exists.

For an estimating-equation functional with $m(T(F);F)=0$, differentiate the contaminated equation at $\varepsilon =0$. Since the uncontaminated expectation is zero,

$A IF(x;T,F)+\psi ((x-\theta _0)/s)=0$.

Therefore

$IF(x;T,F)=-A^{-1}\psi ((x-\theta _0)/s)$.

This derivation reveals why bounded $\psi $ gives bounded local response influence when $A$ is nonzero. It also links uncertainty and robustness:

$E_F[IF(X;T,F)^{2}]=B/A^{2}$,

the asymptotic variance coefficient.

<a id="section-139-8-mean-and-median-have-different-influence"></a>
## 8. Mean and median have different influence {#section-141-8-mean-and-median-have-different-influence}

For the mean functional, the score is $x-\theta $, $A=-1$, and

$IF(x;mean,F)=x-\mu $.

It is unbounded: a contamination point moved farther away has arbitrarily large first-order effect.

For a distribution with unique median $m$ and positive continuous density $f(m)$, write the median equation as $F(m)-1/2=0$. Contamination differentiation gives

\[IF(x;median,F)=[1/2-1_{x\le m}]/f(m)\]

away from the irrelevant equality convention. Its magnitude is $1/[2f(m)]$, bounded in $x$. If $f(m)$ is tiny or zero, however, the median can be imprecise or nonregular. Bounded influence is not the same as small variance.

<a id="section-153-9-breakdown-measures-finite-replacement-failure"></a>
## 9. Breakdown measures finite replacement failure {#section-155-9-breakdown-measures-finite-replacement-failure}

The finite-sample **replacement breakdown point** is the smallest fraction of observations that can be replaced so as to drive an estimator arbitrarily far or otherwise destroy its defining bound.

Replacing one observation by $M$ moves the sample mean by approximately $M/n$, unbounded as $M\to \infty $. Its breakdown fraction is $1/n$, tending to zero.

A sample median cannot be driven beyond all unreplaced central observations until roughly half the data are replaced. Its breakdown point approaches $1/2$, the largest possible for a translation-equivariant scalar location estimator under standard definitions.

Influence and breakdown answer different scales. A redescending estimator can have bounded local influence yet suffer multiple-root or bad-initialisation failure. A procedure can have high breakdown but poor efficiency or bias under a structured, non-adversarial departure.

<a id="section-163-10-regression-adds-leverage-to-residual-size"></a>
## 10. Regression adds leverage to residual size {#section-165-10-regression-adds-leverage-to-residual-size}

For regression score equations

$\sum _i x_i \psi (y_i-x_i^{\mathsf T}\beta )=0$,

clipping $\psi $ bounds residual contribution but not necessarily the product with covariate vector $x_i$. An observation with extreme leverage can retain unbounded influence even when its residual is clipped. Robust regression must address both response outliers and design leverage.

This is also an interpretation warning. A high-leverage point may be a valid member of a sparsely sampled subpopulation rather than an error. Deleting it changes the target population. Diagnostics should lead to source investigation, sensitivity analysis, and transparent reporting—not automatic removal.

<a id="section-173-11-diagnostics-test-implications-not-truth"></a>
## 11. Diagnostics test implications, not truth {#section-175-11-diagnostics-test-implications-not-truth}

A diagnostic compares observed structure with implications of a fitted experiment. Useful checks include:

- residual location, scale, skewness, and tail behaviour across fitted values;
- dependence across time, clusters, space, or acquisition order;
- leverage and case-deletion changes;
- calibration on held-out or replicated measurements;
- sensitivity to loss, scale, tuning constant, and plausible contamination;
- failed optimisation, multiple roots, and numerical conditioning.

A pattern-free residual plot does not prove the model. Many alternatives have low diagnostic power, and preprocessing can hide discrepancies. Conversely, with enormous samples a negligible departure can be easy to detect. Diagnostics should quantify effect size and consequence, not merely issue a binary model-rejection label.

<a id="section-186-12-a-robustness-audit"></a>
## 12. A robustness audit {#section-188-12-a-robustness-audit}

Record:

1. central experiment, estimand, and loss;
2. departure neighbourhood and contamination unit;
3. estimating equation, scale estimator, tuning constants, and root rule;
4. Fisher-consistency and uniqueness argument;
5. influence function and breakdown notion;
6. sandwich assumptions and dependence unit;
7. leverage, selection, and missingness sensitivities;
8. diagnostic power and numerical failure handling;
9. conclusions stable across the declared sensitivity range.

<a id="section-200-distribution-functionals-and-local-contamination"></a>
## Distribution functionals and local contamination {#section-202-distribution-functionals-and-local-contamination}

This chapter studies estimators defined as functionals of distributions, with emphasis on the influence function as a diagnostic of sensitivity to individual observations. We compare the mean and median, examine M-estimators of location and regression, and clarify what robustness does and does not achieve.

<a id="section-204-the-influence-function"></a>
### The influence function {#section-206-the-influence-function}

For a statistical functional $T$ defined on a convex set of distributions containing all point masses, the *influence function* at $F$ is

$$\operatorname{IF}(x;T,F)=\lim_{\varepsilon\downarrow 0}\frac{T((1-\varepsilon)F+\varepsilon\delta_{x})-T(F)}{\varepsilon},$$

when the limit exists. Here $\delta_{x}$ is the point mass at $x$. The influence function measures the effect of an infinitesimal contamination at $x$ on the estimator.

<a id="section-212-the-mean"></a>
#### The mean {#section-214-the-mean}

For $T(F)=\mathbb{E}_{F}[X]$, the influence function is

$$\operatorname{IF}(x;T,F)=x-\mathbb{E}_{F}[X].$$

This is unbounded in $x$: a single arbitrarily large observation can pull the mean arbitrarily far. The mean is not robust in the sense of bounded influence.

<a id="section-220-the-median"></a>
#### The median {#section-222-the-median}

Let $m$ be the unique median of $F$, so $F(m)=1/2$. Assume $F$ has a positive continuous density $f(m)$ at $m$. Then

$$\operatorname{IF}(x;T,F)=\frac{\mathbf{1}_{\{x>m\}}-\mathbf{1}_{\{x<m\}}}{2f(m)}.$$

**Proof sketch.** Consider $F_{\varepsilon}=(1-\varepsilon)F+\varepsilon\delta_{x}$.
For $x>m$ and small $\varepsilon$, the perturbed median remains below $x$, so
the contaminating atom is not counted at $m_{\varepsilon}$:

$$(1-\varepsilon)F(m_{\varepsilon})=\frac12.$$

Hence $F(m_{\varepsilon})=1/[2(1-\varepsilon)]
=1/2+\varepsilon/2+o(\varepsilon)$, and Taylor expansion gives
$m_{\varepsilon}-m=\varepsilon/[2f(m)]+o(\varepsilon)$. For $x<m$ the atom is
counted, so $(1-\varepsilon)F(m_{\varepsilon})+\varepsilon=1/2$ and the shift
is $-\varepsilon/[2f(m)]+o(\varepsilon)$. Combining the two cases gives the
displayed influence function away from $x=m$. ∎

The median influence function is bounded: $|\operatorname{IF}(x)|\le 1/[2f(m)]$. A single outlier cannot move the median by more than a finite amount. However, bounded influence is local: it limits the effect of a small fraction of contamination, not half the sample.

<a id="section-241-m-estimators-of-location"></a>
### M-estimators of location {#section-243-m-estimators-of-location}

An M-estimator of location solves

$$\sum_{i=1}^{n}\psi\Bigl(\frac{x_{i}-\theta}{s}\Bigr)=0,$$

where $\psi$ is a score function and $s$ is a scale estimate. Common choices:

- **Mean:** $\psi(u)=u$ (unbounded)
- **Median:** $\psi(u)=\operatorname{sign}(u)$ (bounded, monotone)
- **Huber:** $\psi(u)=u\mathbf{1}_{\{|u|\le k\}}+k\operatorname{sign}(u)\mathbf{1}_{\{|u|>k\}}$ (bounded, monotone)
- **Tukey bisquare:** $\psi(u)=u(1-u^{2}/k^{2})^{2}\mathbf{1}_{\{|u|\le k\}}$ (bounded, redescending)

<a id="section-254-monotone-versus-redescending-psi"></a>
#### Monotone versus redescending $\psi$ {#section-256-monotone-versus-redescending-psi}

For nondecreasing $\psi$, an associated loss $\rho$ with derivative (or subgradient) $\psi$ is convex when the scale is fixed; minimizers solve the score equation, with the derivative carrying an irrelevant negative scale factor under the residual convention $(x_i-\theta)/s$. Uniqueness needs more, such as strict increase over enough residuals. With a set-valued subgradient convention, the sign score for even $n$ has the full interval between the two middle observations as minimizers; a saturated Huber score can also have an interval of roots. Redescending $\psi$ can create separated local roots, requiring a robust starting value and careful algorithm design. A root-selection convention, robust scale estimate, and initialization are part of the estimator, not afterthoughts.

<a id="section-258-robust-regression"></a>
### Robust regression {#section-260-robust-regression}

In linear regression, the M-estimator solves

$$\sum_{i=1}^{n}\psi\Bigl(\frac{y_{i}-x_{i}^{T}\beta}{s}\Bigr)x_{i}=0.$$

Even if $\psi$ is bounded, the term $x_{i}\psi(r_{i}/s)$ can be unbounded in the *predictor* direction. A high-leverage point with outlying $x_{i}$ can dominate the estimating equation. Bounded influence regression requires bounding both the residual and the predictor contribution, leading to *GM-estimators* or *MM-estimators*.

<a id="section-266-breakdown-point"></a>
### Breakdown point {#section-268-breakdown-point}

The *finite-sample replacement breakdown point* is the smallest fraction of observations whose replacement can drive the estimator arbitrarily far. For a sample of size $n$, the sample mean has breakdown point $1/n$. With the usual middle-order-statistic definition, the sample median has breakdown point $\lfloor(n+1)/2\rfloor/n$. A fixed-scale Huber location estimator with bounded monotone score likewise requires roughly half the observations to overwhelm the saturated scores of the uncontaminated observations; a nonrobust estimated scale or a different root convention can reduce its breakdown point. The asymptotic limits of the first two finite-sample fractions are $0$ and $1/2$.

<a id="section-270-worked-example-influence-of-the-mean-versus-median"></a>
### Worked example: influence of the mean versus median {#section-272-worked-example-influence-of-the-mean-versus-median}

Let $F$ be the standard normal distribution. For the mean, $\operatorname{IF}(x;\text{mean},\Phi)=x$, which equals $3$ at $x=3$ and grows without bound. For the median, $f(0)=(2\pi)^{-1/2}\approx 0.399$, so

$$\operatorname{IF}(x;\text{median},\Phi)=\frac{\operatorname{sign}(x)}{2\cdot 0.399}\approx 1.253\cdot\operatorname{sign}(x).$$

At $x=100$, the mean influence is $100$; the median influence is $1.253$. At $x=-5$, the mean influence is $-5$; the median influence is $-1.253$.

The asymptotic variance of the median is

$$\frac{1}{n}\int \operatorname{IF}(x)^{2}\,d\Phi(x)=\frac{1}{n}\cdot\frac{1}{4f(0)^{2}}=\frac{1}{n}\cdot\frac{\pi}{2}\approx\frac{1.571}{n},$$

compared to $1/n$ for the mean. The median has about $57\%$ larger asymptotic variance at the normal model; equivalently, its asymptotic relative efficiency to the mean is $2/\pi\approx0.637$.

<a id="section-284-common-errors-and-misconceptions"></a>
### Common errors and misconceptions {#section-286-common-errors-and-misconceptions}

- **Equating bounded influence with high breakdown point.** A fixed-scale Huber location estimator has bounded influence and roughly one-half replacement breakdown, but coupling it to a nonrobust scale can destroy that protection. Bounded influence is local and does not by itself determine the finite-sample breakdown of a fully specified estimator.

- **Using robust estimators without checking the target.** A robust estimator estimates a robust parameter (e.g., the population median, not the mean). If the scientific question concerns the mean, the median is the wrong target regardless of its robustness.

- **Ignoring leverage in regression.** A bounded $\psi$ function protects against outlying residuals but not against outlying predictors. High-leverage points require bounded-influence regression, not just M-estimation.

- **Assuming redescending estimators are always better.** Redescending $\psi$ can have multiple roots and zero breakdown if initialized poorly. The starting value and scale matter.

The complete earlier reading and its original exercises remain available as [Distribution functionals and local contamination](robust-functionals.md).

<a id="section-296-13-exercises-with-complete-solutions"></a>
## 15. Solve a clipped score before interpreting robustness {#section-846-15-solve-a-clipped-score-before-interpreting-robustness}

<a id="section-846-worked-example-22-1-solve-a-finite-clipped-score"></a>
### Worked example 22.1: solve a finite clipped score {#section-848-worked-example-22-1-solve-a-finite-clipped-score}

A population root and a fitted sample root are different mathematical objects. Both can be understood by tracking which residuals lie inside the clipping threshold. Fix scale one and Huber threshold one, so $\psi(u)=\max(-1,\min(u,1))$. For the synthetic sample $(-1,0,0,1,M)$ with $M\ge4/3$, consider a candidate location $0\le t\le1$. The first observation is clipped to $-1$, the two zeros contribute $-2t$, the observation one contributes $1-t$, and the last contributes one while $t\le M-1$. Around $t=1/3$ the total score is consequently $1-3t$. Its root is exactly $1/3$.

The empirical score is continuous and nonincreasing everywhere. It is strictly decreasing near this zero, and it changes sign there, so the zero is the unique location minimiser of the convex Huber objective. At $M=4/3$ the last residual equals the positive threshold at the root; the score remains continuous, and the same root is valid. A derivative convention at that single kink is unnecessary for solving the equation. For larger $M$, moving that outlier farther changes neither its clipped contribution nor the root.

In this sample the median is zero and the mean is $M/5$. Thus bounded score contributions do not mean the Huber answer must equal the median. Huber uses actual residual magnitudes in its central region; the median uses only the sign balance except for its tie convention. The mean gives the final observation an uncapped contribution. This one exact sample displays three rules, not three estimates of a target already known to be the same under every population law.

For an arbitrary finite sample, each interval between breakpoints $X_i-1$ and $X_i+1$ has a fixed set of clipped observations. On that interval the score is affine, with slope minus the number of unclipped observations. One can solve the affine equation and verify whether its solution lies in the interval. A zero slope with zero score gives an interval of minimisers; a procedure must then choose an endpoint, midpoint or another declared rule. This hand algorithm explains what an optimiser should be finding and makes root-selection assumptions visible.

Scale is part of the procedure. Doubling the fixed scale doubles the residual distance at which clipping begins, even with the same numerical threshold. Re-estimating scale from the contaminated observations can therefore change which points are clipped. A large scale estimate may cause an allegedly protected location fit to behave much more like a mean. Resistance of one equation cannot be separated from the scale estimator and root-selection rule used with it.

<a id="section-858-16-compare-three-population-targets-under-the-same-cont"></a>
## 16. Compare three population targets under the same contamination law {#section-860-16-compare-three-population-targets-under-the-same-cont}

<a id="section-860-worked-example-22-2-compare-three-contamination-targets"></a>
### Worked example 22.2: compare three contamination targets {#section-862-worked-example-22-2-compare-three-contamination-targets}

Choose the central law $F=Uniform(-1,1)$ and the contaminated law
\[
 F_{\varepsilon,M}=(1-\varepsilon)F+\varepsilon\delta_M,
 \qquad 0<\varepsilon<1/2,\quad M>1.
\]
This is a deliberately specified observed-data law, not a claim that all large observations are erroneous. Keep scale and Huber threshold equal to one. The three population functionals can now be compared under one departure instead of using a different favourable example for each estimator.

The mean exists and is $\varepsilon M$, since the central mean is zero. It diverges as the contamination point moves right. The unique median remains inside $(-1,1)$ and solves
\[
 (1-\varepsilon)(m+1)/2=1/2,
\]
so $m=\varepsilon/(1-\varepsilon)$. This formula is valid because $\varepsilon<1/2$ puts the result below one and the contamination atom lies beyond the central interval. The median shifts, but its shift no longer grows with $M$.

For a Huber candidate $0\le t\le2$, the central score expectation is obtained by splitting at $x=t-1$:
\[
 \frac12\left[\int_{-1}^{t-1}(-1)\,dx+
                  \int_{t-1}^{1}(x-t)\,dx\right]
 =-t+t^2/4.
\]
If $M\ge1+t$, the atom's contribution is clipped to one. Thus the population equation is
\[
 (1-\varepsilon)(-t+t^2/4)+\varepsilon=0.
\]
The root in $(0,2)$ is
\[
 t_H=2-2\sqrt{(1-2\varepsilon)/(1-\varepsilon)}.
\]
The other quadratic root exceeds two and does not belong to the branch used in the integration. Provided $M\ge1+t_H$, the displayed root is valid. The population score is nonincreasing everywhere and has strictly negative slope at this root, so there is no second zero elsewhere.

For $\varepsilon=1/5$ the median is $1/4$, and the Huber target is $2-\sqrt3$. At $M=4$ the mean is $4/5$; at $M=40$ it is eight. Both robust targets remain at their displayed values. These exact calculations show bounded sensitivity to the distance of this atom, not absence of contamination bias. They also show that Huber and median target different locations under the asymmetric contaminated law.

At the central law, mean influence is $x$, median influence away from zero is $\operatorname{sign}(x)$, and Huber influence is $\psi(x)$ because the derivative coefficient is $-1$. The mean and Huber asymptotic variance coefficients are $1/3$ here; the median's is one. Such a central efficiency comparison is specific to the uniform law and fixed tuning. It is compatible with the mean's unbounded contamination sensitivity. First-order influence describes the derivative at zero contamination; the exact formulas above describe a positive contamination fraction and need not coincide beyond first order.

<a id="section-895-17-huber-kinks-do-not-justify-a-formal-smooth-taylor-ar"></a>
## 17. Huber kinks do not justify a formal smooth Taylor argument {#section-897-17-huber-kinks-do-not-justify-a-formal-smooth-taylor-ar}

The Huber score is continuous and Lipschitz but is not differentiable at its clipping thresholds. Applying a differentiable-score theorem without checking those points leaves a gap. For fixed positive scale $s$, one can instead use the score's integral identity. At a population root $\theta_0$, write $r=(X-\theta_0)/s$. For a shift $h$,
\[
 \psi_c(r-h/s)-\psi_c(r)
 =-\frac1s\int_0^h1_{\{|r-u/s|<c\}}\,du.
\]
The identity holds because a clipped linear function is absolutely continuous; the derivative at the two isolated clipping points does not affect this integral.

Assume iid observations, a unique population root, no atoms at $\theta_0-cs$ and $\theta_0+cs$, and positive probability in the open interval between them. Suppose the empirical location is any selected zero of the continuous nonincreasing sample score. For a small fixed neighbourhood of the root, the empirical distribution function converges uniformly to the population distribution function. The empirical fraction in each shifted clipping interval therefore converges uniformly to its population counterpart. Absence of atoms at the two limiting endpoints makes that counterpart continuous as the shift tends to zero.

The integral identity consequently yields, for a consistent selected root,
\[
 \Psi_n(\hat\theta)-\Psi_n(\theta_0)
  =\{A+o_P(1)\}(\hat\theta-\theta_0),\qquad
 A=-P(|X-\theta_0|<cs)/s<0.
\]
Consistency is not mysterious here: for each small fixed $a>0$, the population score is positive at $\theta_0-a$ and negative at $\theta_0+a$. Ordinary laws of large numbers at these two points put every empirical zero between them with probability tending to one. The empirical score always has a zero because it is continuous with limits $c$ and $-c$ at the two location extremes.

The score is bounded, so its variance is finite. Its iid CLT and the expansion give root-$n$ normality with coefficient $B/A^2$, provided that variance is positive; a zero variance instead gives a degenerate first-order limit. This verifies the ingredients of the chapter's sandwich argument for this fixed-scale Huber problem without falsely requiring a derivative at every residual value.

If there is an atom exactly at a clipping boundary, moving the candidate left or right may recruit a positive mass at different rates. The two population one-sided slopes can then differ, and the preceding continuous-slope argument is unavailable. It is necessary to study that experiment rather than assign a convenient derivative value and declare the problem solved. At finite samples a chosen bounded derivative convention at a kink is an implementation input; its asymptotic harmlessness requires an argument about the frequency of boundary observations. Numerical differentiability and statistical regularity are separate issues.

<a id="section-918-18-a-regular-median-has-a-local-inverse-with-positive-s"></a>
## 18. A regular median has a local inverse with positive slope {#section-920-18-a-regular-median-has-a-local-inverse-with-positive-s}

For iid observations with a unique population median $m$, assume a continuous density in a neighbourhood of $m$, with $f(m)>0$. Choose a lower sample median, or another median convention differing by an asymptotically negligible central order-statistic spacing. The local expansion
\[
 F(m+h)-1/2=f(m)h+o(h)
\]
has a positive slope, so small probability errors translate into location errors of comparable order. A flat density or an atom changes that inverse problem.

The empirical fluctuation at the fixed median is an average of centred indicators:
\[
 F_n(m)-1/2=n^{-1}\sum_i(1_{\{X_i\le m\}}-1/2).
\]
Its root-$n$ limit is normal with variance $1/4$. To substitute a random median into a local expansion one also needs control of nearby empirical increments. For each fixed $C$, the relevant statement is
\[
 \sup_{|h|\le C/\sqrt n}
 \sqrt n\,|(F_n-F)(m+h)-(F_n-F)(m)|\to0
\]
in probability.

Why is that reasonable here? At one deterministic shift of order $n^{-1/2}$, the changing indicator is supported on an interval of population probability $O(n^{-1/2})$. Its centred empirical average, multiplied by $\sqrt n$, has variance of that same order, tending to zero. For a finite grid of such shifts the conclusion holds jointly. Monotonicity of distribution functions bounds points between adjacent grid values; continuity and the local density bound make their scaled probability differences as small as the grid mesh. Refine that grid after taking the sample-size limit to obtain the uniform statement. This gives the stochastic local-increment step, rather than assuming a deterministic Taylor formula automatically controls a random argument.

A binomial bracketing argument first gives $\hat m-m=O_P(n^{-1/2})$: evaluate $F_n$ at $m\pm C/\sqrt n$, use the indicator CLT and the local slope, and make the probability of either wrong-side crossing small by choosing large $C$. The median's empirical rank differs from one half by only $O(1/n)$. Combining that rank fact with the local increment statement yields
\[
 \sqrt n(\hat m-m)
 =-\frac{\sqrt n(F_n(m)-1/2)}{f(m)}+o_P(1).
\]
The asymptotic variance coefficient is therefore $1/[4f(m)^2]$, and the summand gives the influence formula away from contamination exactly at $m$.

That exceptional contamination value deserves a precise sentence. If the central law is continuous with median $m$, adding a small atom **at $m$** keeps $m$ a median: the contaminated distribution has probability below $m$ less than one half and probability at or below $m$ greater than one half. With the unique-median selection its derivative is zero. Thus the pointwise influence at $x=m$ need not equal either one-sided indicator formula. The equality convention is irrelevant when integrating against a continuous central law, because that point has zero central probability, but it is relevant when the contamination is deliberately placed there.

<a id="section-948-19-estimated-scale-is-a-nuisance-coordinate-in-the-sand"></a>
## 19. Estimated scale is a nuisance coordinate in the sandwich {#section-950-19-estimated-scale-is-a-nuisance-coordinate-in-the-sand}

<a id="section-950-worked-example-22-3-propagate-the-joint-location-scale-"></a>
### Worked example 22.3: propagate the joint location-scale system {#section-952-worked-example-22-3-propagate-the-joint-location-scale-}

A fixed-scale derivation does not automatically justify plugging in a random scale. To see the issue, use the parameter vector $\beta=(\theta,\eta)$ with $s=e^\eta>0$. A possible joint estimating system is
\[
 q(X;\beta)=
 \begin{pmatrix}
  \psi_c(r)\\
  \chi_d(r)-\kappa
 \end{pmatrix},
 \qquad r=(X-\theta)e^{-\eta},\quad
 \chi_d(r)=\min(r^2,d^2).
\]
The known calibration constant $\kappa$ is selected for a declared central scale model. Under another law the chosen joint population root defines a possibly different location and scale functional. Uniqueness and existence must be checked; clipping does not supply them.

Suppose a consistent selected joint root exists, a uniform local linear expansion is valid, and the derivative matrix $A=E[\partial q/\partial\beta^{\mathsf T}]$ is nonsingular. Let $B=\operatorname{Cov}(q)$. The component derivatives, away from score kinks, are
\[
 A=
 \begin{pmatrix}
 -s^{-1}E[\psi_c'(r)] & -E[r\psi_c'(r)]\\
 -s^{-1}E[\chi_d'(r)] & -E[r\chi_d'(r)]
 \end{pmatrix}.
\]
For example $\chi_d'(r)=2r$ inside $(-d,d)$ and zero outside. Atoms at its boundary again require a separate derivative argument. Bounded score contributions ensure finite score covariance; they do not ensure that $A$ is invertible or well conditioned.

Expanding the two empirical equations gives
\[
 \sqrt n(\hat\beta-\beta_0)
 =-A^{-1}n^{-1/2}\sum_iq(X_i;\beta_0)+o_P(1).
\]
The multivariate iid CLT then yields covariance $A^{-1}BA^{-{\mathsf T}}$. This is a conditional derivation from the stated consistency and expansion hypotheses, not a universal theorem for every two-equation fit.

Write $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ and $\Delta=ad-bc\ne0$. Its first inverse row is $(d,-b)/\Delta$. Consequently the location variance coefficient is
\[
 \frac{d^2B_{11}-2bdB_{12}+b^2B_{22}}{\Delta^2}.
\]
The cross term and scale-score variability are absent from the fixed-scale scalar formula. Ignoring them is justified only by additional structure, not by calling scale a nuisance.

For a symmetric residual law, odd $\psi_c$, even $\chi_d$, and no atoms at clipping boundaries, symmetry makes $E[r\psi_c'(r)]=0$, $E[\chi_d'(r)]=0$, and the score cross covariance zero. The matrix is then block diagonal, and the first-order location variance reduces to the fixed-scale expression. An asymmetric contaminated law need not have these cancellations. Even where first-order orthogonality holds, a poorly behaved scale estimator or incorrect root selection can invalidate the consistency and expansion used in the first place.

<a id="section-989-20-sensitivity-and-uncertainty-require-separate-reports"></a>
## 20. Sensitivity and uncertainty require separate reports {#section-991-20-sensitivity-and-uncertainty-require-separate-reports}

The contamination example gives an exact target shift for a specified neighbourhood. The sandwich gives the sampling variation of the selected estimator under one fixed observation law. These answer different questions. A narrow interval around a contaminated-law Huber root can describe that root accurately while missing the uncontaminated centre. Adding more data can shrink sampling error without removing the shift in the population functional.

This distinction suggests reporting a target map before a standard error. State which population equation defines each estimate, which scale and clipping threshold it uses, and how the target changes under the declared departure. Then report sampling uncertainty under that law and its independent sampling unit. If observations are clustered, the covariance of a sum includes within-cluster cross terms. Replacing its variance by the average of individual score squares assumes away those terms. A cluster sandwich or justified dependence-preserving resampling method needs its own independent-unit and asymptotic conditions.

Diagnostic sensitivity also differs from automatic deletion. A point with a large residual may reveal measurement error, a meaningful rare subpopulation, a misspecified mean function or an inappropriate loss. Those possibilities change which target is scientifically useful. Comparing mean, median and Huber answers shows consequences of particular choices; it does not identify which observations are “bad.” A case-deletion calculation should record what law or population is being changed.

Finally, local influence and finite replacement breakdown should not be conflated. The influence calculation differentiates at contamination fraction zero while allowing its point to vary. Breakdown moves a positive number of observed values without bound. A bounded score gives bounded local response influence only when its derivative coefficient stays away from zero, and a scale procedure can create an additional failure route. The exact finite sample, the exact contaminated population, and the asymptotic sandwich each isolate a different part of that argument. Keeping all three visible makes robustness a set of assessable claims rather than a label attached to an algorithm.

<a id="section-999-21-exact-target-shifts-can-coexist-with-shrinking-sampl"></a>
## 21. Exact target shifts can coexist with shrinking sampling errors {#section-1001-21-exact-target-shifts-can-coexist-with-shrinking-sampl}

The contaminated uniform example also permits a hand calculation of all three first-order sampling scales. Keep $\varepsilon=1/5$, $M\ge4$ and $t=2-\sqrt3$. For the mean, the second moment is $4/15+M^2/5$ and the mean is $M/5$. Subtracting its squared mean gives the exact one-observation variance
\[
 \operatorname{Var}_{F_{\varepsilon,M}}(X)
 =4/15+4M^2/25.
\]
The sample mean's variance is this quantity divided by $n$. It grows quadratically with the contamination point even though the contamination fraction stays fixed.

At the contaminated median $1/4$, the local density is $(4/5)/2=2/5$; the atom is far away. The regular median variance coefficient is therefore $1/[4(2/5)^2]=25/16$. This uses density at the contaminated-law median, not the original density $1/2$ at zero. A central-model standard error cannot be reused without checking which law supplies its derivative coefficient.

For the Huber score, its contaminated-law mean is zero at $t$. The derivative coefficient is
\[
 A=-(4/5)(1-t/2)=-2\sqrt3/5.
\]
For the uniform component, direct integration of the squared clipped residual gives
\[
 E_F[\psi_1(X-t)^2]
 =\tfrac12\left[t+\int_{t-1}^1(x-t)^2\,dx\right]
 =1/3+t^2/2-t^3/6.
\]
At $t=2-\sqrt3$ this equals $(\sqrt3-1)/2$. The atom has squared score one, so the full score variance is $B=(2\sqrt3-1)/5$. Hence the Huber asymptotic variance coefficient is
\[
 B/A^2=5(2\sqrt3-1)/12.
\]
There is no atom at the clipping boundaries and the derivative is nonzero, so the fixed-scale expansion conditions discussed above apply. This coefficient is independent of $M$ on the saturated branch. It is a first-order asymptotic coefficient, not an exact finite-sample variance.

These calculations reveal two separate limits. Increasing $n$ reduces sampling spread around each contaminated-law target. Increasing $M$ changes the mean target and its variance, while the two fixed-scale robust targets and their coefficients stay bounded on this branch. If the scientific target remains the original centre zero, the robust targets still have nonzero displacements $1/4$ and $2-\sqrt3$. Their standard errors can tend to zero around those displaced values. A sensitivity report must therefore display the target shift separately from the sampling scale; combining them into one unexplained “robust uncertainty” number would conceal which question each calculation answers.


<a id="section-1029-22-optional-practice-extensions"></a>
## 24. Probability import for the clipping-interval argument {#section-1109-24-probability-import-for-the-clipping-interval-argumen}

The iid uniform empirical-distribution convergence used for the fixed-scale Huber expansion is the Glivenko–Cantelli theorem. Its author-source statement is Rick Durrett, Probability: Theory and Examples, author manuscript, Theorem 2.4.9, page 79: [author-hosted text](https://services.math.duke.edu/~rtd/PTE/PTE5_011119.pdf). It covers arbitrary iid real observations; endpoint continuity is used separately for the shrinking clipping intervals. The indicator and vector CLTs reuse the book's declared iid/triangular-array probability prerequisites; the local median increment and nuisance-matrix calculations are developed explicitly here.

<a id="section-1111-sources"></a>

## Summary

<a id="section-841-14-summary-and-forward-route"></a>
M-estimation connects empirical loss, population targets, asymptotic linearisation, sandwich variance, and influence. Bounded scores limit local response contamination, while breakdown studies finite replacement failure. Means, medians, and Huber estimators trade central-model efficiency against different stability properties. Regression introduces leverage, and diagnostics only probe selected model implications. The following applied chapters carry these audits into regression, randomisation, survey weighting, and missing-data sensitivity.


<a id="section-844-15-solve-a-clipped-score-before-interpreting-robustness"></a>

<a id="section-1117-summary"></a>
Robustness concerns a specified functional, perturbation class and loss. Bounded influence, finite replacement resistance, sampling variance and model identification are distinct properties. Clipped scores can change the target, estimated nuisance scale can change the sandwich, and diagnostics cannot prove a model true. Retain regularity, positive slopes and root-selection rules when interpreting any robust procedure.

## Exercises {#section-298-13-exercises-with-complete-solutions}

<a id="section-298-1-mean-as-an-m-estimator"></a>
### 1. Mean as an M-estimator {#section-300-1-mean-as-an-m-estimator}

**Exercise 22.1**

Derive the squared-loss estimating equation.

<details>
<summary>Hint 1</summary>

Use the squared-loss score and fixed positive scale.

</details>

<details>
<summary>Hint 2</summary>

Its empirical zero equation is the centred response sum.

</details>

<details>
<summary>Solution</summary>

**Solution.** With $\rho (u)=u^{2}/2$, derivative with respect to $\theta $ is $-(X_i-\theta )/s^{2}$. Setting the summed derivative to zero gives $\sum _i(X_i-\theta )=0$, hence $\theta =\bar{X}$.

</details>

<a id="section-325-2-median-objective"></a>
### 2. Median objective {#section-327-2-median-objective}

**Exercise 22.2**

Why does a sample median minimise $\sum _i|X_i-\theta |$?

<details>
<summary>Hint 1</summary>

Consider the direction of change in absolute distances as the candidate centre moves.

</details>

<details>
<summary>Hint 2</summary>

At a median neither strict side contains more than half the observations.

</details>

<details>
<summary>Solution</summary>

**Solution.** Moving $\theta $ right decreases distance to observations on its right and increases distance to those on its left. A zero subgradient occurs exactly when neither side contains more than half the data, which characterises sample medians.

</details>

<a id="section-352-3-population-target"></a>
### 3. Population target {#section-354-3-population-target}

**Exercise 22.3**

If $\psi (u)=u$, solve $E[\psi (X-\theta )]=0$.

<details>
<summary>Hint 1</summary>

The identity score makes the population equation linear.

</details>

<details>
<summary>Hint 2</summary>

Under integrability, $E(X-\theta)=EX-\theta$.

</details>

<details>
<summary>Solution</summary>

**Solution.** The equation is $E[X]-\theta =0$, so the target is the population mean when it exists.

</details>

<a id="section-379-4-odd-score-under-symmetry"></a>
### 4. Odd score under symmetry {#section-381-4-odd-score-under-symmetry}

**Exercise 22.4**

Show a symmetric distribution about $\theta _0$ makes $E[\psi (X-\theta _0)]=0$ for integrable odd $\psi $.

<details>
<summary>Hint 1</summary>

Apply symmetry to the argument of the odd score.

</details>

<details>
<summary>Hint 2</summary>

The expectation equals its own negative when integrable.

</details>

<details>
<summary>Solution</summary>

**Solution.** $X-\theta _0$ and $-(X-\theta _0)$ have the same law. Thus the expectation equals its negative by oddness, so it must be zero.

</details>

<a id="section-406-5-huber-score-values"></a>
### 5. Huber score values {#section-408-5-huber-score-values}

**Exercise 22.5**

For $c=1.5$, find $\psi _c(-4)$, $\psi _c(1)$, and $\psi _c(3)$.

<details>
<summary>Hint 1</summary>

Clip residuals below minus the threshold or above the threshold.

</details>

<details>
<summary>Hint 2</summary>

Only the score inside the interval remains unchanged.

</details>

<details>
<summary>Solution</summary>

**Solution.** Clipping gives $-1.5$, $1$, and $1.5$, respectively.

</details>

<a id="section-433-6-convexity-of-huber-loss"></a>
### 6. Convexity of Huber loss {#section-435-6-convexity-of-huber-loss}

**Exercise 22.6**

Why is Huber loss convex?

<details>
<summary>Hint 1</summary>

Inspect the monotonicity of the score derivative.

</details>

<details>
<summary>Hint 2</summary>

It never decreases across the joined constant-linear-constant pieces.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its derivative $\psi _c(u)$ is nondecreasing: it is constant, then linear with slope one, then constant. A function with nondecreasing derivative is convex; the pieces also join continuously.

</details>

<a id="section-460-7-sandwich-for-the-mean"></a>
### 7. Sandwich for the mean {#section-462-7-sandwich-for-the-mean}

**Exercise 22.7**

Take $\psi (X-\theta )=X-\theta $. Identify $A$, $B$, and the asymptotic variance.

<details>
<summary>Hint 1</summary>

The mean score has derivative minus one.

</details>

<details>
<summary>Hint 2</summary>

Its score variance is $\sigma^2$, giving ratio $B/A^2=\sigma^2$.

</details>

<details>
<summary>Solution</summary>

**Solution.** $A=-1$; $B=Var(X)=\sigma ^{2}$. Therefore $B/A^{2}=\sigma ^{2}$, so $Var(\bar{X})$ is asymptotically $\sigma ^{2}/n$.

</details>

<a id="section-487-8-scale-of-an-estimator"></a>
### 8. Scale of an estimator {#section-489-8-scale-of-an-estimator}

**Exercise 22.8**

If $A=-2$ and $B=9$, find the root-$n$ asymptotic variance.

<details>
<summary>Hint 1</summary>

The root-scale covariance uses $B/A^2$.

</details>

<details>
<summary>Hint 2</summary>

Square minus two before dividing nine.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is $B/A^{2}=9/4$. The estimator's approximate variance is $9/(4n)$.

</details>

<a id="section-514-9-why-centring-score-squares-works"></a>
### 9. Why centring score squares works {#section-516-9-why-centring-score-squares-works}

**Exercise 22.9**

At an exact empirical root, why can $n^{-1}\sum \psi _i^{2}$ estimate score variance without subtracting a sample mean?

<details>
<summary>Hint 1</summary>

At an exact root the empirical score average is zero.

</details>

<details>
<summary>Hint 2</summary>

Raw score second moment and centred empirical variance then coincide.

</details>

<details>
<summary>Solution</summary>

**Solution.** The empirical score mean is zero at the root, so its empirical second central moment equals its empirical second raw moment. Approximate roots may require retaining the small centring term.

</details>

<a id="section-541-10-influence-derivation"></a>
### 10. Influence derivation {#section-543-10-influence-derivation}

**Exercise 22.10**

Differentiate the contaminated estimating equation and solve for $IF$.

<details>
<summary>Hint 1</summary>

Differentiate the contaminated root equation at zero contamination.

</details>

<details>
<summary>Hint 2</summary>

The linear equation is $A\,IF+\psi=0$ with $A\ne0$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Differentiation gives $A IF+\psi ((x-\theta _0)/s)=0$, because the original score expectation is zero. Since $A\ne 0$, $IF=-A^{-1}\psi $.

</details>

<a id="section-568-11-mean-contamination"></a>
### 11. Mean contamination {#section-570-11-mean-contamination}

**Exercise 22.11**

For $F_\varepsilon =(1-\varepsilon )F+\varepsilon \delta _x$, compute its mean derivative at zero.

<details>
<summary>Hint 1</summary>

Write the mixture mean explicitly.

</details>

<details>
<summary>Hint 2</summary>

The coefficient of contamination fraction is the derivative at zero.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its mean is $(1-\varepsilon )\mu +\varepsilon x=\mu +\varepsilon (x-\mu )$. The derivative is $x-\mu $, agreeing with the mean influence function.

</details>

<a id="section-595-12-median-influence-magnitude"></a>
### 12. Median influence magnitude {#section-597-12-median-influence-magnitude}

**Exercise 22.12**

If $f(m)=0.2$, what is the magnitude of the regular median influence function away from equality?

<details>
<summary>Hint 1</summary>

Use the regular median influence magnitude $1/[2f(m)]$.

</details>

<details>
<summary>Hint 2</summary>

Insert the positive density 0.2.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is $1/[2f(m)]=1/0.4=2.5$.

</details>

<a id="section-622-13-density-at-the-median"></a>
### 13. Density at the median {#section-624-13-density-at-the-median}

**Exercise 22.13**

Why can a bounded median influence still correspond to large variance?

<details>
<summary>Hint 1</summary>

Boundedness in contamination value is not a small numerical bound.

</details>

<details>
<summary>Hint 2</summary>

Low density at the median increases both influence magnitude and its asymptotic variance.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its magnitude is inversely proportional to $f(m)$. If density near the median is small, the bound and the asymptotic variance are large even though influence remains bounded in contamination value $x$.

</details>

<a id="section-649-14-mean-breakdown"></a>
### 14. Mean breakdown {#section-651-14-mean-breakdown}

**Exercise 22.14**

Show one replacement can drive the sample mean arbitrarily far.

<details>
<summary>Hint 1</summary>

Replace one observed value by a free real number $M$.

</details>

<details>
<summary>Hint 2</summary>

The mean changes by $(M-X_1)/n$, unbounded as $|M|$ grows.

</details>

<details>
<summary>Solution</summary>

**Solution.** Replace $X_1$ by $M$. The new mean is $\bar{X}+(M-X_1)/n$, whose magnitude diverges with $M$. Thus the replacement fraction is $1/n$.

</details>

<a id="section-676-15-median-resistance"></a>
### 15. Median resistance {#section-678-15-median-resistance}

**Exercise 22.15**

Why can fewer than half of ordered observations not move a median beyond every unreplaced observation?

<details>
<summary>Hint 1</summary>

More than half the original sample values remain fixed.

</details>

<details>
<summary>Hint 2</summary>

The middle order position cannot pass the entire unreplaced block.

</details>

<details>
<summary>Solution</summary>

**Solution.** More than half the sample remains fixed. At least one fixed observation must remain on the side that prevents the middle order position from passing the entire unreplaced block.

</details>

<a id="section-703-16-robust-standard-error-versus-estimate"></a>
### 16. Robust standard error versus estimate {#section-705-16-robust-standard-error-versus-estimate}

**Exercise 22.16**

Does a heteroskedasticity-consistent sandwich standard error make least squares resistant to an extreme response?

<details>
<summary>Hint 1</summary>

A sandwich changes estimated sampling covariance rather than the fitted coefficients.

</details>

<details>
<summary>Hint 2</summary>

Least-squares response/leverage sensitivity can remain large.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. It changes the estimated sampling covariance, not the least-squares coefficient. The coefficient can still move greatly under an extreme response or leverage point.

</details>

<a id="section-730-17-clipped-regression-residual"></a>
### 17. Clipped regression residual {#section-732-17-clipped-regression-residual}

**Exercise 22.17**

Why can $x_i\psi (r_i)$ be unbounded even if $|\psi (r_i)|\le c$?

<details>
<summary>Hint 1</summary>

A clipped residual score is multiplied by the covariate vector.

</details>

<details>
<summary>Hint 2</summary>

Unbounded covariate magnitude removes a uniform bound on the estimating contribution.

</details>

<details>
<summary>Solution</summary>

**Solution.** The covariate magnitude $\lVert x_i\rVert$ can grow without bound. Then $\lVert x_i\psi (r_i)\rVert\le c\lVert x_i\rVert$ still has no uniform bound.

</details>

<a id="section-757-18-root-ambiguity"></a>
### 18. Root ambiguity {#section-759-18-root-ambiguity}

**Exercise 22.18**

Why must a redescending M-estimator specify initialization and root selection?

<details>
<summary>Hint 1</summary>

A redescending score can come from a nonconvex objective.

</details>

<details>
<summary>Hint 2</summary>

Specify the initialization and root-selection rule to define one complete estimator.

</details>

<details>
<summary>Solution</summary>

**Solution.** A nonconvex loss can have several local minima and its score several roots. Different starting values or solvers can return different estimates from the same data; the equation alone is not a complete procedure.

</details>

<a id="section-784-19-diagnostic-nonrejection"></a>
### 19. Diagnostic nonrejection {#section-786-19-diagnostic-nonrejection}

**Exercise 22.19**

Why does a residual check that finds no pattern fail to prove the model?

<details>
<summary>Hint 1</summary>

Failure to detect a discrepancy is not logical model confirmation.

</details>

<details>
<summary>Hint 2</summary>

A check may have low power or fail to distinguish important alternative laws.

</details>

<details>
<summary>Solution</summary>

**Solution.** The diagnostic may have low power against relevant alternatives, and many different laws can produce similar residual summaries. Absence of detected discrepancy is not logical confirmation.

</details>

<a id="section-811-20-robustness-cannot-identify"></a>
### 20. Robustness cannot identify {#section-813-20-robustness-cannot-identify}

**Exercise 22.20**

Can bounded influence recover a causal effect confounded by an unmeasured variable?

<details>
<summary>Hint 1</summary>

Influence concerns a functional's sensitivity to changes in the observed law.

</details>

<details>
<summary>Hint 2</summary>

Indistinguishable causal states cannot be separated by robustifying that functional.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. Bounded influence controls local sensitivity of a functional of the observed law. If distinct causal states induce the same observed law, no estimator of that law resolves the identification failure without additional assumptions or design.

</details>


<a id="section-839-14-summary-and-forward-route"></a>

<a id="section-1031-22-optional-practice-extensions"></a>
### 21. SI-16-E21: solve the contaminated Huber target {#section-1033-si-16-e21-solve-the-contaminated-huber-target}

**Exercise 22.21**

Under $F_{\varepsilon,M}=(1-\varepsilon)Uniform(-1,1)+\varepsilon\delta_M$, fixed scale one and Huber threshold one, take $\varepsilon=1/5$ and $M\ge4$. Derive the mean, median and Huber population roots, verify the Huber clipping branch and uniqueness, and state which target changes when $M$ increases.


<details>
<summary>Hint 1</summary>

Solve the central uniform score on the branch where the distant atom is clipped.

</details>

<details>
<summary>Hint 2</summary>

The valid quadratic root is $2-\sqrt3$; verify the branch and compare it with the mean and median.

</details>


<a id="section-1054-si-16-e22-retain-nuisance-scale-variability"></a>
### 22. SI-16-E22: retain nuisance-scale variability {#section-1056-si-16-e22-retain-nuisance-scale-variability}

**Exercise 22.22**

For a joint location/log-scale system suppose $A=\begin{pmatrix}-2&1\\0&-1\end{pmatrix}$ and $B=\begin{pmatrix}4&1\\1&9\end{pmatrix}$. Compute the root-$n$ location variance coefficient from the full sandwich and compare it with $B_{11}/A_{11}^2$. Explain why the fixed-scale expression need not apply.


<details>
<summary>Hint 1</summary>

Invert the full two-by-two derivative matrix.

</details>

<details>
<summary>Hint 2</summary>

The first inverse row includes both score coordinates, so their covariance and scale variance contribute.

</details>


<a id="section-1077-23-solutions-and-an-original-exercise-elaboration"></a>

## Solutions

<a id="section-1079-23-solutions-and-an-original-exercise-elaboration"></a>
<details>
<summary>Solution</summary>

<a id="section-1082-si-16-e21-solve-the-contaminated-huber-target-solution"></a>
### SI-16-E21: solve the contaminated Huber target — solution {#section-1084-si-16-e21-solve-the-contaminated-huber-target-solution}

The mean is $M/5$. The median lies inside $(-1,1)$ and solves $(4/5)(m+1)/2=1/2$, giving $m=1/4$. For $0\le t\le2$ and $M-t\ge1$, the Huber equation is $(4/5)(-t+t^2/4)+1/5=0$, or $t^2-4t+1=0$. Its valid root is $2-\sqrt3$; the other root exceeds two. Since $M\ge4$ and $2-\sqrt3<1$, the atom is clipped as assumed. The score slope at the root is $-(4/5)(1-t/2)=-2\sqrt3/5<0$, and the score is globally nonincreasing, proving uniqueness. Only the mean increases with $M$ on this branch. The two robust roots still differ from the uncontaminated centre zero.

</details>
<details>
<summary>Solution</summary>

<a id="section-1090-si-16-e22-retain-nuisance-scale-variability-solution"></a>
### SI-16-E22: retain nuisance-scale variability — solution {#section-1092-si-16-e22-retain-nuisance-scale-variability-solution}

Here $\Delta=2$ and the first row of $A^{-1}$ is $(-1,-1)/2$. Therefore the variance coefficient is
\[
 \tfrac14(4+2\cdot1+9)=15/4.
\]
Equivalently, the displayed scalar sandwich formula gives $(1\cdot4-2(1)(-1)(1)+1\cdot9)/4=15/4$. The fixed-scale coefficient is $4/(-2)^2=1$. The nonzero upper-right derivative couples location to scale estimation, so scale-score variance and covariance enter the first inverse row. Nonsingularity and a valid joint expansion remain required for interpreting this arithmetic as an asymptotic covariance.

</details>
<a id="section-1099-original-exercise-17-constructive-leverage-argument-ela"></a>
### Original Exercise 17: constructive leverage argument — elaboration {#section-1101-original-exercise-17-constructive-leverage-argument-ela}

The original key's growing upper bound alone does not establish that a sequence attains large contributions. To exhibit one, fix a nonzero covariate direction $v$ and a residual $r$ with $\psi(r)\ne0$; for Huber score one may take $r=c>0$. Let $x_t=t v$ and choose $y_t=x_t^{\mathsf T}\beta+r$ at the coefficient being examined. Then the residual stays $r$ while
\[
 \|x_t\psi(r)\|=t\,\|v\|\,|\psi(r)|\longrightarrow\infty.
\]
Thus clipping residual magnitude does not uniformly bound the regression score contribution when leverage is unrestricted. This supplies the missing existence argument while retaining the original question and key.

<a id="section-1107-24-probability-import-for-the-clipping-interval-argumen"></a>

## Sources {#section-1113-sources}

All existing destination references, theorem locators, source qualifications and original errata remain above. The preserved [Principles reference guide](../principles-statistical-inference/references-and-attribution-guide.md) records the earlier source map.

<a id="section-1115-summary"></a>
