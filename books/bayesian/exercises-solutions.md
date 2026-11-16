# Supplemental and advanced instructor solution bank

**Answer-bearing instructor/reference material.** Keep this file and `catalogue.json` out of ordinary learner retrieval and answer-free exports. The public question bank contains no keys. Two progressive hints per problem are maintained in the catalogue; reveal them in order on request. These banks are maintained directly with matching block IDs.

Each rubric names evidence for formative judgement: 3 = correct reasoning, checks and interpretation; 2 = substantially correct with a minor omission; 1 = partial reasoning with a consequential error; 0 = central reasoning absent or incorrect. These are not formal course marks. Accept mathematically equivalent approaches and defensible alternatives meeting the stated conditions. Numerical rounding should be assessed against the precision requested; simulation tolerances are explained per problem and do not prove convergence. Reference code is designed to run in the locked course environment. Source-bound execution evidence is recorded separately in `artifacts/core_assessments_checks.json` for supplemental items and `artifacts/advanced_assessments_checks.json` for advanced items; proposed procedures are not saved lab outputs.

## Lesson 0

<!-- begin:extra.0.1 -->
### extra.0.1 — Reverse a quality-control table {#extra.0.1}

#### Worked answer

The joint table is:

| Group | Defective | Sound | Total |
|---|---:|---:|---:|
| Refurbished | 0.036 | 0.264 | 0.30 |
| New | 0.014 | 0.686 | 0.70 |
| Total | 0.050 | 0.950 | 1 |

For example, $P(R,D)=P(R)P(D\mid R)=0.30(0.12)$. The marginal defect probability is $0.05$ of the whole shipment. Within the defective subpopulation, $P(R\mid D)=0.036/0.050=0.72$. This is a fraction of defective devices, not a 72% defect rate among refurbished devices. A frequency table of 10,000 hypothetical devices gives identical results without claiming those counts were observed.

#### Rubric

Credit all four cells and their normalisation, the marginal sum, the reverse conditional and its denominator. A correct frequency-table solution is equivalent. An arithmetic slip retains method credit; dividing by 0.30 computes the supplied forward conditional and misses the central target.
<!-- end:extra.0.1 -->

<!-- begin:extra.0.2 -->
### extra.0.2 — Variance in a mixed arrival process {#extra.0.2}

#### Worked answer

Write $m_G=E(Y\mid G)$ and $m=E(Y)$. Squaring $Y-m=(Y-m_G)+(m_G-m)$ and averaging gives $E\{\operatorname{Var}(Y\mid G)\}+\operatorname{Var}(m_G)$: the cross term is zero because $E(Y-m_G\mid G)=0$. Here $m=(1/4)2+(3/4)6=5$ events. Conditional Poisson variances equal their means, so the within-mode contribution is 5 events squared. The between-mode contribution is $(1/4)(2-5)^2+(3/4)(6-5)^2=3$. Total variance is 8. Poisson(5) has variance 5 and loses the uncertainty about mode. The mixture remains a count distribution but is not a single Poisson distribution.

#### Rubric

Require the zero-cross-term argument, both variance components and the evaluated mean/variance with their meaning. Direct second moments earn full credit if they also explain the decomposition. Reporting only the within-mode term is a consequential error.
<!-- end:extra.0.2 -->

<!-- begin:extra.0.3 -->
### extra.0.3 — Repair the batch axis {#extra.0.3}

#### Worked answer

Summing axis 0 produces 30 counts across 4,000 batches, with theoretical mean 1,600. It does not produce 4,000 counts of trials within batches. A corrected calculation is:

```python
import numpy as np
rng = np.random.default_rng(7003)
x = rng.binomial(1, .4, size=(4000, 30))
batch_count = x.sum(axis=1)
count_mean = batch_count.mean()
count_variance = batch_count.var(ddof=1)
p_estimate = x.mean()
mean_mcse = np.sqrt(30 * .4 * .6 / 4000)
assert batch_count.shape == (4000,)
assert abs(count_mean - 12) < 5 * mean_mcse
```

The exact count mean is 12 and variance 7.2; mean MCSE is about 0.04243, so the five-MCSE tolerance is 0.21213. The probability estimate is count mean divided by 30. The count variance describes repeat-experiment variation at a fixed supplied probability. No prior or inferential posterior for that probability was specified. The tolerance is a probabilistic debugging screen, not an absolute guarantee for every seed.

#### Rubric

Require correct shape/axis, independent probability summary, theoretical targets and an uncertainty-aware comparison. Accept direct binomial batch sampling if the supplied axis bug is explained. Do not award full credit for treating 12 as a probability or for exact-equality simulation tests.
<!-- end:extra.0.3 -->

<!-- begin:extra.0.4 -->
### extra.0.4 — Two seeds, one estimand {#extra.0.4}

#### Worked answer

One defensible response is: “Both simulations estimate the same fixed probability, 0.08. Different seeds select different simulated trials, so unequal proportions are expected. Each estimate has standard error $\sqrt{0.08(0.92)/10000}=0.002713$. Independence makes the standard error of their difference $\sqrt{2}(0.002713)=0.003837$. The observed difference 0.008 is about 2.09 such standard errors: worth checking with further independent runs, but not by itself proof of a bug. Increasing the number of simulated trials reduces numerical error in our approximation to the same probability. It does not add observations of the scientific system, alter the assumed probability, or resolve uncertainty about whether the Bernoulli model describes that system.”

#### Rubric

Credit the fixed estimand, both error scales and the simulation/data distinction. Equivalent uncertainty calculations or a cautious repeated-run check are acceptable. Do not require a binary significance decision or accept an unexplained claim that more simulated trials constitute new evidence.
<!-- end:extra.0.4 -->

## Lesson 1

<!-- begin:extra.1.1 -->
### extra.1.1 — Two-stage evidence for three mechanisms {#extra.1.1}

#### Worked answer

After A, unnormalised masses are (0.10, 0.18, 0.16), summing to $P(A)=0.44$. Thus the posterior is $(5,9,8)/22$, approximately (0.227273, 0.409091, 0.363636). Multiplication by the conditional B likelihood gives weights $(4.5,4.5,2)/22$, whose sum is $P(B\mid A)=0.5$. The final posterior is $(9,9,4)/22$, approximately (0.409091, 0.409091, 0.181818). Direct joint masses are $(0.5\cdot0.2\cdot0.9,0.3\cdot0.6\cdot0.5,0.2\cdot0.8\cdot0.25)=(0.09,0.09,0.04)$, with evidence 0.22, giving the same result. Equality follows from the joint factorisation, not an independence assumption.

#### Rubric

Require both normalised tables, both requested evidence probabilities and a direct joint verification. Fractions are welcome. Award method credit for one carried arithmetic error; using unconditional B probabilities that were never supplied is not justified.
<!-- end:extra.1.1 -->

<!-- begin:extra.1.2 -->
### extra.1.2 — Odds and support {#extra.1.2}

#### Worked answer

With $0<\pi<1$ and both likelihoods positive, cancellation of $Z=\pi\ell_1+(1-\pi)\ell_0$ gives

$$\frac{P(H\mid E)}{P(H^c\mid E)}=\frac{\pi}{1-\pi}\frac{\ell_1}{\ell_0},\qquad
\operatorname{logit}P(H\mid E)=\operatorname{logit}\pi+\log\ell_1-\log\ell_0.$$

If $\pi=0$ and $Z>0$, the posterior remains zero: finite likelihood evidence does not restore excluded prior support. If $\ell_0=0$ and $\pi\ell_1>0$, the posterior is one and odds are infinite; the finite log formula is inapplicable. If $Z=0$, the elementary conditional probability is undefined: the model assigned no probability to the observed event. Reporting posterior zero or one then hides a model-support failure. For continuous observations, replace event probabilities by likelihood densities; an isolated observation having zero probability is not by itself zero likelihood density.

#### Rubric

Require cancellation, support conditions and all three boundary cases. Equivalent ratio derivations earn full credit. Separate extended infinite odds from undefined conditioning; do not accept dividing zero by zero or claiming a zero prior is merely a small prior.
<!-- end:extra.1.2 -->

<!-- begin:extra.1.3 -->
### extra.1.3 — Correlated reports {#extra.1.3}

#### Worked answer

The supplied joint likelihoods are $0.75(0.8)=0.60$ and $0.25(0.4)=0.10$. Correct posterior fault probability is $0.2(0.60)/[0.2(0.60)+0.8(0.10)]=0.60$. The independence shortcut uses $0.75^2$ and $0.25^2$, yielding $0.1125/(0.1125+0.05)=9/13\approx0.692308$. It invents stronger discrimination than the supplied conditional likelihoods support. A literal copy has conditional probability one under both hypotheses after observing A, so its likelihood ratio is one. The posterior stays at $0.15/(0.15+0.20)=3/7\approx0.428571$. These are three different observation mechanisms; “two positives” alone does not specify their likelihood.

#### Rubric

Credit all three posteriors and the conditional factorisation. Explain why the duplicate contributes no additional evidence. Alternative joint-table reasoning is valid; obtaining 9/13 without labelling it the inappropriate shortcut is a substantive error.
<!-- end:extra.1.3 -->

<!-- begin:extra.1.4 -->
### extra.1.4 — Communicate a changed screening population {#extra.1.4}

#### Worked answer

General-population positive masses are 0.0045 and 0.02985, giving $0.0045/0.03435\approx0.131004$. Referred-population masses are 0.09 and 0.027, giving $0.09/0.117\approx0.769231$.

One message is: “A positive signal corresponds to about 13.1% probability of the condition in the general population and about 76.9% in the referred population under the supplied assumptions. Referred people begin with a higher prevalence, so a greater share of positive signals represents the condition. Sensitivity has not become 76.9%; it remains the probability of a signal among people with the condition. Before using these numbers, check whether referral also changes the mix of cases or measurement conditions and therefore the detector's sensitivity or false-positive rate. The prevalence change alone does not guarantee unchanged detector performance.”

#### Rubric

Require both denominators, the audience-appropriate distinction and a concrete transfer assumption. Accept another concise message conveying the same claims. A correct percentage with the wrong conditioning population loses interpretation credit.
<!-- end:extra.1.4 -->

## Lesson 2

<!-- begin:extra.2.1 -->
### extra.2.1 — Normalisation and beta moments {#extra.2.1}

#### Worked answer

Integrating the kernel gives $C=1/B(a,b)$. Multiplying by $\theta^r$ before integration gives $E(\theta^r)=B(a+r,b)/B(a,b)$ for the required nonnegative r. The gamma recurrence yields $E(\theta)=a/(a+b)$ and $E(\theta^2)=a(a+1)/[(a+b)(a+b+1)]$. Subtracting $a^2/(a+b)^2$ gives

$$\operatorname{Var}(\theta)=\frac{ab}{(a+b)^2(a+b+1)}.$$

Positive shapes make the endpoint singularities integrable: near zero the integral of $\theta^{a-1}$ is finite for $a>0$, even when the density diverges for $a<1$. For (2,5), mean is $2/7$ and variance $10/(49\cdot8)=5/196\approx0.0255102$. Normalisation concerns area, not a bound on density height.

#### Rubric

Require normalisation and both moment ratios, the variance subtraction, and an integrability explanation. Integration-by-parts recurrences are equally valid. Merely quoting the beta variance earns less derivation credit.
<!-- end:extra.2.1 -->

<!-- begin:extra.2.2 -->
### extra.2.2 — Skewness and odds summaries {#extra.2.2}

#### Worked answer

The CDF is $F(t)=1-(1-t)^4$, so $q_u=1-(1-u)^{1/4}$. Mean is 0.2; median is $1-2^{-1/4}\approx0.159104$. The 90% equal-tail interval is [0.0127415, 0.5271292]. Monotonicity maps it to odds [0.0129059, 1.1147425] and preserves tail probabilities. Odds at the mean equal $0.2/0.8=0.25$, whereas $E(r)=\int_0^1 4\theta(1-\theta)^2d\theta=1/3$. Squared-error loss selects the probability mean, absolute-error loss its median. Highest-density sets depend on density height relative to the coordinate's measure; a nonlinear Jacobian changes heights, so their transformed images need not be highest-density sets for odds. This does not invalidate transformed equal-tail intervals.

#### Rubric

Credit checked quantiles, monotone interval transformation, both distinct odds summaries and the loss/coordinate explanation. Accept accurate integration or library results with method stated. Do not accept mean odds obtained solely by transforming mean probability.
<!-- end:extra.2.2 -->

<!-- begin:extra.2.3 -->
### extra.2.3 — Unequal cells need unequal masses {#extra.2.3}

#### Worked answer

The cutoff coincides with a cell edge, avoiding an additional partial-cell allocation. Width-weighted midpoint quadrature gives masses approximately (0.0528705, 0.2999414, 0.4784710, 0.1476274, 0.0210896), mean 0.4002636 and tail 0.1687170. Exact mean is 0.4 and exact tail is 0.1792; a good mean alone does not validate a tail approximation.

```python
import numpy as np
from scipy.stats import beta
from scipy.special import logsumexp
edges = np.array([0, .1, .3, .6, .8, 1.])
def summaries(e):
    mid = (e[1:] + e[:-1]) / 2
    lw = beta.logpdf(mid, 2, 3) + np.log(np.diff(e))
    mass = np.exp(lw - logsumexp(lw))
    return mass, mass @ mid, mass[mid > .6].sum()
coarse = summaries(edges)
fine_edges = np.concatenate([
    np.linspace(a, b, 101)[:-1] for a, b in zip(edges[:-1], edges[1:])
] + [np.array([1.])])
fine = summaries(fine_edges)
assert abs(fine[1] - .4) < 2e-6
assert abs(fine[2] - beta.sf(.6, 2, 3)) < 2e-6
```

These are deterministic quadrature tolerances for this smooth density and grid, not Monte Carlo standard errors or universal bounds for arbitrary targets.

#### Rubric

Require widths, normalisation, both summaries and independent references, plus refinement. An ordinary-scale implementation is valid here if stability limitations are acknowledged. Using equal weights on unequal cells is the central failure; copying a theoretical mean into the approximation is not a numerical check.
<!-- end:extra.2.3 -->

<!-- begin:extra.2.4 -->
### extra.2.4 — All failures, all successes {#extra.2.4}

#### Worked answer

| Prior | Successes | Posterior | Next success |
|---|---:|---|---:|
| Beta(1,1) | 0 | Beta(1,6) | 1/7 = 0.142857 |
| Beta(1,1) | 5 | Beta(6,1) | 6/7 = 0.857143 |
| Beta(2,8) | 0 | Beta(2,13) | 2/15 = 0.133333 |
| Beta(2,8) | 5 | Beta(7,8) | 7/15 = 0.466667 |

The stronger low-rate prior matters especially after five successes; five trials do not overwhelm it. Beta(1,1) imposes a uniform density in probability coordinates, which is an assumption and would not be uniform in log odds. Each posterior remains absolutely continuous on (0,1), so even a boundary density mode does not assign probability one to that endpoint. Compare prior predictions and substantive knowledge before choosing a prior; this table diagnoses sensitivity rather than proving either prior correct.

#### Rubric

Require all updates and predictions, plus the distinctions between support, a mode and point mass. Accept a defensible critique of either prior based on predicted observations. Calling the uniform prior assumption-free or using 0 and 1 as predictive certainty misses the target.
<!-- end:extra.2.4 -->

## Lesson 3

<!-- begin:extra.3.1 -->
### extra.3.1 — Integrate a shared future probability {#extra.3.1}

#### Worked answer

Integrating $\binom{m}{k}\theta^k(1-\theta)^{m-k}$ against the beta density gives

$$P(K=k)=\binom{m}{k}\frac{B(a+k,b+m-k)}{B(a,b)},\quad k=0,\ldots,m.$$

The finite sum can pass inside the integral; conditional binomial masses sum to one and the beta density integrates to one. Let $t=a+b$. Then $E(K)=ma/t$. For distinct trials, total covariance gives $\operatorname{Cov}(X_i,X_j)=\operatorname{Var}(\theta)=ab/[t^2(t+1)]$. Total variance gives within contribution $mE[\theta(1-\theta)]=mab/[t(t+1)]$ and between contribution $m^2\operatorname{Var}(\theta)=m^2ab/[t^2(t+1)]$. Their sum is $mab(t+m)/[t^2(t+1)]$. For (2,3,4), mean is 1.6, trial covariance 0.04, within variance 0.8, between variance 0.64, and total variance 1.44. Conditional independence does not imply marginal independence.

#### Rubric

Require the integrated mass and normalisation argument, covariance and both variance terms. A covariance-sum derivation is valid if the two uncertainty sources are also identified. Confusing m with m squared in the between term loses that part of the derivation.
<!-- end:extra.3.1 -->

<!-- begin:extra.3.2 -->
### extra.3.2 — Two superficially similar simulators {#extra.3.2}

#### Worked answer

Both means equal $4(2/5)=1.6$. Model A has beta-binomial variance 1.44, while B has binomial variance $4(0.4)(0.6)=0.96$, because its independently mixed trials are marginally independent.

```python
import numpy as np
rng = np.random.default_rng(7302)
S, m = 100_000, 4
shared = rng.beta(2, 3, size=S)
count_a = rng.binomial(m, shared)
per_trial = rng.beta(2, 3, size=(S, m))
count_b = rng.binomial(1, per_trial).sum(axis=1)
for count, target_var in [(count_a, 1.44), (count_b, .96)]:
    assert abs(count.mean() - 1.6) < .03
    assert abs(count.var(ddof=1) - target_var) < .04
```

Rows index batches and columns of `per_trial` index trials. Mean MCSE is at most $\sqrt{1.44/100000}\approx0.00380$, so the mean tolerance is deliberately loose. Variance tolerances can be assessed with independent repetitions or fourth moments; neither tolerance establishes all distributional features. Model B represents independent heterogeneity from a known mixing distribution. It removes the shared uncertainty and therefore understates variation for the common-probability question.

#### Rubric

Credit both generative implementations, targets and explanation of dependence. Accept a vectorised Bernoulli implementation of A using a column-shaped shared probability. Seeds and checks must be reported honestly; a plausible mean alone does not distinguish the models.
<!-- end:extra.3.2 -->

<!-- begin:extra.3.3 -->
### extra.3.3 — Elicit an observable extreme {#extra.3.3}

#### Worked answer

For m=8 the extreme probability is $[B(a,b+8)+B(a+8,b)]/B(a,b)$. Beta(1,1) gives a uniform predictive count on 0–8, so the sum is $2/9\approx0.222222$. Beta(10,10) gives approximately 0.0219002. Only the second candidate satisfies the specified below-0.05 constraint. Equal prior means do not imply equal observable consequences: the concentrated prior makes consistently extreme batches less probable. This one check cannot uniquely identify a prior or establish that trials really share a constant reliability. An engineer could also elicit centre differences or intermediate-count probabilities, and revise the generative model if those contradict both candidates.

#### Rubric

Require two checked predictive probabilities and a comparison to the actual elicitation threshold. Accept numerical integration as well as beta-binomial calculation. Selecting a prior solely because it looks narrow misses the observable rationale; claiming it is uniquely validated overstates the result.
<!-- end:extra.3.3 -->

<!-- begin:extra.3.4 -->
### extra.3.4 — Explain a three-action choice {#extra.3.4}

#### Worked answer

Expected losses are $0.5(0)+0.3(6)+0.2(30)=7.8$, $0.5(3)+0.3(4)+0.2(8)=4.3$, and 5. Inspect and respond minimises expected loss. A uniform replacement loss c is weakly preferred precisely when $c\le4.3$, with a tie at 4.3.

One explanation is: “Inspect and respond has the lowest expected cost, 4.3 units, compared with 5 for immediate replacement and 7.8 for continuing. The critical state is less likely than either alternative, but its high continuation loss matters enough to change the action. This recommendation assumes the table includes inspection costs and subsequent responses, as stated. If replacement can be obtained for 4.3 units or less it becomes equally good or better under expected cost. A different attitude toward extreme losses or omitted downtime consequences could also change the preferred action; the posterior state probabilities alone do not decide.”

#### Rubric

Credit all rows, the threshold and a clear assumption-sensitive explanation. Accept any concise memo with the same logic. A maximum-probability-state rule is not a substitute for expected loss; valid alternative actions require an explicitly changed cost or preference.
<!-- end:extra.3.4 -->

## Lesson 4

<!-- begin:extra.4.1 -->
### extra.4.1 — Predict counts over a new exposure {#extra.4.1}

#### Worked answer

Multiplication and integration give

$$P(K=k)=\frac{\Gamma(a+k)}{\Gamma(a)k!}\left(\frac{b}{b+t}\right)^a\left(\frac{t}{b+t}\right)^k,\quad k=0,1,\ldots.$$

This is the negative-binomial count convention with shape a and success parameter $p=b/(b+t)$, so mean is $a(1-p)/p$. Independently, $E(K)=tE(\lambda)=ta/b$ and $\operatorname{Var}(K)=E(t\lambda)+\operatorname{Var}(t\lambda)=ta/b+t^2a/b^2$. At (3,2,4), mean is 6 events and variance is 18 events squared, with Poisson contribution 6 and rate-uncertainty contribution 12. The gamma rate parameter b has units of hours, reciprocal to the units of $\lambda$; t is also hours, making b+t meaningful. The extra term comes from one uncertain rate shared through the future exposure.

#### Rubric

Require the gamma integral including constants, a stated negative-binomial convention, both moments and units. Equivalent direct integration of moments is acceptable. Confusing gamma rate with scale or using a plug-in variance of 6 omits essential uncertainty.
<!-- end:extra.4.1 -->

<!-- begin:extra.4.2 -->
### extra.4.2 — Change rate coordinates without changing predictions {#extra.4.2}

#### Worked answer

Changing to minutes gives $p_r(r)=60p_\lambda(60r)$, hence Gamma(4,120). The numerical log-rate density is

$$p_z(z)=\frac{2^4}{\Gamma(4)}\exp(4z-2e^z),\quad -\infty<z<\infty.$$

The extra $e^z$ Jacobian changes the coefficient of z from 3 to 4. Exposure is 0.5 hours or 30 minutes: both give predictive mean 1 and variance $1+0.5^2(4/2^2)=1.25$. The probability is approximately 0.8487961 in every coordinate. For example:

```python
import numpy as np
from scipy.integrate import quad
from scipy.stats import gamma
from scipy.special import gammaln
log_density = lambda z: np.exp(4*np.log(2) - gammaln(4) + 4*z - 2*np.exp(z))
prob_z = quad(log_density, -40, np.log(3))[0]
norm_z = quad(log_density, -40, 5)[0]
assert abs(norm_z - 1) < 1e-10
assert abs(prob_z - gamma.cdf(3, 4, scale=.5)) < 1e-10
assert abs(prob_z - gamma.cdf(.05, 4, scale=1/120)) < 1e-10
```

The finite integration limits make exponentiation safe; omitted tails are negligible here and can be bounded using the original gamma CDF. Unit changes alter numeric rate values, not event predictions.

#### Rubric

Require both Jacobians, compatible exposure units and invariant checked probabilities/moments. Accept integration in original coordinates to bound omitted tails. Matching density heights without Jacobians is not a valid transformation.
<!-- end:extra.4.2 -->

<!-- begin:extra.4.3 -->
### extra.4.3 — Uncertain scale changes the mean posterior {#extra.4.3}

#### Worked answer

Here n=4, $\bar y=4$, residual sum of squares is 8 and $s^2=8/3$. Integrating $\sigma^2$ gives $\mu\mid y\sim t_3(4,\sqrt{2/3})$, where the second argument is scale, not SD. Its posterior variance is $(2/3)3/(3-2)=2$ square metres. Its 90% interval is $4\pm t_{3,.95}\sqrt{2/3}$, approximately [2.07849,5.92151]. The plug-in analysis gives Normal($4,2/3$), with 90% interval $4\pm1.644854\sqrt{2/3}$, approximately [2.65698,5.34302]. The scale values coincide but the t posterior has heavier tails because scale uncertainty was integrated. Under this prior the joint posterior is proper for n≥2 and positive residual sum of squares. The mean requires n>2 and the variance n>3. At n=2 the location is defined but the Cauchy mean is not; at n=3 the t variance is infinite. Zero residual sum of squares leaves the scale boundary improper.

#### Rubric

Require the prior measure, correct t degrees of freedom and scale, the plug-in distinction and propriety/moment conditions. Numerically equivalent intervals earn full credit. A t scale reported as its SD loses the uncertainty interpretation; a proper posterior does not automatically have finite moments.
<!-- end:extra.4.3 -->

<!-- begin:extra.4.4 -->
### extra.4.4 — Check square completion by quadrature {#extra.4.4}

#### Worked answer

Posterior precision is $1/2+2/2=3/2$ and precision-weighted location is $1/2+(2+5)/2=4$. Thus posterior mean is $8/3$ and variance $2/3$. A new observation is Normal($8/3,8/3$), adding observation variance 2. Posterior quantiles are $8/3\pm1.644854\sqrt{2/3}$.

```python
import numpy as np
from scipy.stats import norm
from scipy.special import logsumexp
x = np.linspace(-8, 14, 44001)
lw = norm.logpdf(x, 1, np.sqrt(2))
for y in [2, 5]:
    lw += norm.logpdf(y, x, np.sqrt(2))
w = np.exp(lw - logsumexp(lw))  # equal-width interior grid
mean = w @ x
var = w @ ((x-mean)**2)
q = np.interp([.05, .95], np.cumsum(w), x)
assert abs(mean - 8/3) < .001
assert abs(var - 2/3) < .001
assert np.max(np.abs(q - norm.ppf([.05, .95], 8/3, np.sqrt(2/3)))) < .003
```

Endpoint mass is negligible at these limits; widening the grid and halving its spacing tests truncation and discretisation separately. The grid evaluates independently specified likelihood factors, so a square-completion error can be detected. Evaluating the already-derived posterior would mainly check its numerical integration, not the derivation from the original model.

#### Rubric

Require a correct precision update, predictive noise, independent likelihood product and justified tolerances. Accept adaptive quadrature plus a grid quantile check. Treat variance-versus-SD confusion as a model error, not just rounding.
<!-- end:extra.4.4 -->

## Lesson 5

<!-- begin:extra.5.1 -->
### extra.5.1 — Precision for a rare posterior event {#extra.5.1}

#### Worked answer

The estimate is $\hat p=100/50000=0.002$. Plug-in MCSE is $\sqrt{0.002(0.998)/50000}\approx0.000199800$. Target total effort is $\lceil0.002(0.998)/10^{-8}\rceil=199600$ independent draws, roughly four times the pilot effort. This uses independent draws and Bernoulli variance; for dependent draws the relevant indicator ESS is needed, not necessarily the parameter-mean ESS. The pilot probability itself is noisy, so this is a planning estimate. Zero hits only means the event was not encountered; substituting zero into the plug-in variance conceals uncertainty. An exact binomial bound or targeted rare-event method would be more informative. Increasing simulation can refine inference under the model but cannot validate its observation assumptions.

#### Rubric

Require the probability, MCSE and total effort with assumptions. Accept a conservative effort target if its rationale is explicit. Reporting additional rather than total draws must be labelled; zero hits must not be interpreted as proof of impossibility.
<!-- end:extra.5.1 -->

<!-- begin:extra.5.2 -->
### extra.5.2 — Self-normalised importance weights {#extra.5.2}

#### Worked answer

Let $w(x)=\tilde p(x)/q(x)$ wherever the target is nonzero. Then $E_p(h)=E_q(wh)/E_q(w)$, so replacing both expectations by sample averages yields $\hat\mu=\sum_i w_i h_i/\sum_i w_i$. The supplied normalised weights are (0.1,0.2,0.1,0.6), giving $\hat\mu=2.8$ and weight ESS $100/(1+4+1+36)=100/42\approx2.380952$. A ratio of unbiased sample averages is generally biased at finite sample size. Consistency needs proposal coverage, finite nonzero $E_q(w)$ and integrability of $wh$, together with a law of large numbers for the proposal draws. Useful variance estimates need stronger moment conditions. Weight ESS summarises concentration among observed weights; it cannot diagnose mass in a region never visited or support absent from q. It is also not automatically the ESS for every function h.

#### Rubric

Require the ratio identity, both numerical summaries and the bias/support limitations. Any equivalent normalised calculation is valid. Do not accept a claim that self-normalisation fixes missing proposal support or guarantees finite variance.
<!-- end:extra.5.2 -->

<!-- begin:extra.5.3 -->
### extra.5.3 — A jump-chain counterexample you can enumerate {#extra.5.3}

#### Worked answer

Acceptance probabilities are 1/9 from 0 to 1 and 1 from 1 to 0. Thus

$$P=\begin{pmatrix}8/9&1/9\\1&0\end{pmatrix},\qquad(0.9,0.1)P=(0.9,0.1).$$

Detailed balance is $0.9(1/9)=0.1(1)=0.1$. Accepted moves alternate, making their limiting fraction of ones 1/2. The full chain's fraction tends to 0.1 because residence times remain represented.

```python
import numpy as np
rng = np.random.default_rng(7503)
pi = np.array([.9, .1])
state = 0
full, jumps = [], []
for _ in range(200_000):
    candidate = 1-state
    if rng.random() < min(1., pi[candidate]/pi[state]):
        state = candidate
        jumps.append(state)
    full.append(state)
assert abs(np.mean(full)-.1) < .01
assert abs(np.mean(jumps)-.5) <= 1/len(jumps)
```

The nonstationary initial state causes a transient, so the tolerance is a generous empirical screen for this rapidly mixing two-state example. It is not a universal MCMC convergence rule. Retaining only jumps preferentially represents the state that is quickly left.

#### Rubric

Require transition probabilities and stationarity, runnable rejection-preserving code, both empirical comparisons and residence-time reasoning. A direct exact occupancy analysis is a strong addition but does not replace the requested simulation. A jump-chain average can be repaired with correct residence-time weights; explain these for full alternative credit.
<!-- end:extra.5.3 -->

<!-- begin:extra.5.4 -->
### extra.5.4 — Choose precision for the estimand {#extra.5.4}

#### Worked answer

Mean MCSEs are $0.10/\sqrt{4000}\approx0.001581$ and $0.10/\sqrt{400}=0.005$. Equal rounded means do not establish agreement in tails or exploration of all relevant regions. The first event estimate lies below 0.04 with much smaller reported error; the second is too imprecise to support a confident threshold comparison. Even these reported MCSEs require reliable exploration. Request separate chain event frequencies, rank/trace plots, indicator autocorrelation and ESS, and dispersed initialisations; compare against an exact or independent reference if available. After investigating discrepancies, target an indicator MCSE substantially below the distance relevant to the action, for example 0.002 if distinguishing probabilities several thousandths from 0.04 is required. If the true probability is near the threshold, report numerical ambiguity rather than sampling indefinitely to force a decision. No unique optimal acceptance rate follows from this report.

#### Rubric

Require both mean errors, an estimand-specific diagnosis and a defensible precision criterion conditional on exploration. Accept different justified MCSE targets. Do not award full credit for merely increasing draws or concluding convergence from equal means.
<!-- end:extra.5.4 -->

## Lesson 6

<!-- begin:extra.6.1 -->
### extra.6.1 — One Hamiltonian step {#extra.6.1}

#### Worked answer

The potential gradient is q. First $p_{1/2}=0.5-0.4(1)/2=0.3$. Then $q_1=1+0.4(0.3)=1.12$ and $p_1=0.3-0.4(1.12)/2=0.076$. Initial energy is $(1^2+0.5^2)/2=0.625$; final energy is $(1.12^2+0.076^2)/2=0.630088$. Thus $\Delta H=0.005088$ and acceptance is $\min(1,e^{-\Delta H})\approx0.9949249$. A momentum reversal used to make the proposal reversible leaves this energy unchanged. Leapfrog approximates the continuous dynamics: reversibility and volume preservation support the Metropolis correction, but do not make finite-step energy error identically zero. The coordinates, mass and step size here are scaled dimensionless quantities, so no physical energy unit is implied.

#### Rubric

Require the ordered half/full/half updates, energies and correct sign in acceptance. Algebraically equivalent reversible conventions earn full credit. Skipping the second half step or assuming acceptance is exactly one misses the integrator distinction.
<!-- end:extra.6.1 -->

<!-- begin:extra.6.2 -->
### extra.6.2 — A missing Jacobian on a log coordinate {#extra.6.2}

#### Worked answer

Because $d\lambda/dz=e^z$, the transformed density is proportional to $e^{2z-2e^z}e^z=e^{3z-2e^z}$. B is correct and its gradient is $3-2e^z$. If A is treated as a z-density, transformation back divides by $\lambda$, producing $\lambda e^{-2\lambda}$: Gamma(2,2), a different rate distribution. A library that declares a Gamma rate and internally samples its log coordinate generally includes the transformation in the unconstrained target; adding the same log-Jacobian manually then changes the model again. If instead one declares z itself with a custom density, the author must supply the appropriate target for dz. Check the model declaration and the library's transformation convention before changing log densities.

#### Rubric

Require the derivative/Jacobian, correct gradient, the unintended distribution and the distinction between a declared rate and a custom log-coordinate density. A correct generic warning without identifying the changed gamma shape earns only partial diagnosis credit.
<!-- end:extra.6.2 -->

<!-- begin:extra.6.3 -->
### extra.6.3 — Validate a new fit against an exact target {#extra.6.3}

#### Worked answer

The posterior is Beta(7,11), with mean $7/18=0.3888889$ and 90% interval [0.2119082,0.5802946]. The future count is beta-binomial with mean $12(7/18)=14/3$ and variance $12(7)(11)(30)/(18^2\cdot19)\approx4.502924$.

```python
import numpy as np
import pymc as pm
import arviz as az
from scipy.stats import beta
with pm.Model() as model:
    theta = pm.Beta("theta", alpha=3, beta=5)
    pm.Binomial("observed_count", n=10, p=theta, observed=4)
    fit = pm.sample(draws=1500, tune=1500, chains=4, cores=1,
                    random_seed=7603, target_accept=.9, progressbar=False,
                    var_names=["theta"])
summary = az.summary(fit, var_names=["theta"], round_to="none")
x = fit.posterior.theta.values
mcse = float(az.mcse(fit, var_names=["theta"], method="mean").theta)
rng = np.random.default_rng(7604)
k = rng.binomial(12, x)
print(summary, int(fit.sample_stats.diverging.sum()))
print(x.mean(), mcse, np.quantile(x, [.05, .95]), k.mean(), k.var())
assert abs(x.mean()-7/18) < 5*mcse
assert np.max(np.abs(np.quantile(x, [.05,.95])-beta.ppf([.05,.95],7,11))) < .025
```

The intended algorithm samples the beta-binomial parameter posterior and generates future counts after fitting. The future outcome is generated only after fitting, avoiding an unnecessary latent discrete variable in the sampler. Screen R-hat below 1.01, bulk/tail ESS above 400 and zero divergences, investigating failures. The 0.025 quantile tolerance is a loose initial check for this small exercise; use quantile MCSE and additional simulation to investigate a discrepancy. For predictive moments, compare with independently repeated posterior-predictive estimates or appropriate MCSE; a deterministic 0.2 mean and 0.5 variance screen is generous here. Reference targets are analytic, not claims of a fit's realised diagnostics. Execution evidence is recorded separately in the assessment verification artifact. Matching a known posterior validates this computation only under the assumed shared-probability observation model.

#### Rubric

Require runnable fit/reference/prediction logic, its own diagnostics when executed, and error-aware comparisons. Full computational credit requires actual run evidence; a clearly labelled design earns design credit. Equivalent direct conjugate draws are useful independent checks but do not replace the requested HMC fit. Never reuse another fit’s diagnostics.
<!-- end:extra.6.3 -->

<!-- begin:extra.6.4 -->
### extra.6.4 — Two kinds of model review {#extra.6.4}

#### Worked answer

One defensible review is: “The supplied diagnostics support numerical precision and agreement among chains for the fitted model, although the packet cannot establish exploration of every relevant posterior feature. They do not resolve the model's substantial probability for impossible negative waits. I would compare observed and replicated proportions below the recording limit and examine upper-tail quantiles, using the actual observation protocol to distinguish genuinely positive durations from censored measurements. A lognormal or gamma observation model could represent positive support; their tail behaviour and units would need prior predictive checks. Alternatively, if the underlying normal process is only recorded above a threshold, an explicit truncation or censoring model may describe the measurement process better. These alternatives answer different generative questions, so the protocol determines the choice. After revision I would repeat both computational diagnostics and the targeted predictive checks, then assess whether the decision changes. Longer chains alone cannot remove negative support from the current normal likelihood.”

#### Rubric

Require distinct computational and modelling claims, a measurable discrepancy and two justified revisions. Accept another positive-support model or defensible observation-process model. Do not award full credit for asserting a model is true because diagnostic thresholds passed, or for treating unprovided plots as observed evidence.
<!-- end:extra.6.4 -->

## Lesson 7

<!-- begin:extra.7.1 -->
### extra.7.1 — A two-coefficient Gaussian update {#extra.7.1}

#### Worked answer

For general prior $N(m_0,V_0)$ and known noise variance $\sigma^2$, the quadratic is $\beta^T(V_0^{-1}+X^TX/\sigma^2)\beta-2\beta^T(V_0^{-1}m_0+X^Ty/\sigma^2)$ plus constants. Hence $\Lambda=V_0^{-1}+X^TX/\sigma^2$, $V=\Lambda^{-1}$ and $\Lambda m=V_0^{-1}m_0+X^Ty/\sigma^2$. Here X is 3×2, y is 3×1, m is 2×1 and $\Lambda,V$ are 2×2:

$$\Lambda=\begin{pmatrix}4&3\\3&6\end{pmatrix},\quad
V=\begin{pmatrix}2/5&-1/5\\-1/5&4/15\end{pmatrix},\quad
m=\begin{pmatrix}4/5\\3/5\end{pmatrix}.$$

Indeed $\Lambda m=(5,6)^T=X^Ty$. In code use `m=np.linalg.solve(precision, X.T@y)` and, only if full V is needed, `V=np.linalg.solve(precision, np.eye(2))`. Prediction at row vector v has mean variance $vVv^T$, including the coefficient covariance. Independently sampling marginal coefficients would delete that term and change predictions.

#### Rubric

Require the quadratic derivation, dimensions, checked matrices and covariance interpretation. Cholesky solves earn full credit. A correct numeric matrix without a derivation receives calculation credit only; swapping coefficient order must be explicitly consistent with X.
<!-- end:extra.7.1 -->

<!-- begin:extra.7.2 -->
### extra.7.2 — Where a regression line is precise {#extra.7.2}

#### Worked answer

For $v=(1,x)$, the mean response is $2+x$ and its variance is $vVv^T=1-0.8x+0.25x^2$. At x=0 these are mean 2 and variance 1; at x=2 they are mean 4 and variance 0.4. Adding residual variance $0.6^2=0.36$ gives outcome variances 1.36 and 0.76. Dropping covariance leaves mean variances 1 and 2, and outcome variances 1.36 and 2.36. Here the negative covariance reduces uncertainty at positive x; discarding it can overstate uncertainty, not only understate it. Under the stated Gaussian assumptions a central 90% interval is mean ±1.644854 times the relevant SD. Mean intervals describe the latent regression surface; outcome intervals include future observation noise. These variances are in squared response units.

#### Rubric

Require both points, both variance types and the explicit covariance contribution. Equivalent Gaussian propagation is valid. Do not award full credit for independently resampling coefficients or adding an SD rather than a variance.
<!-- end:extra.7.2 -->

<!-- begin:extra.7.3 -->
### extra.7.3 — A scaled prior is a joint prior {#extra.7.3}

#### Worked answer

The transformation is $\alpha=\alpha_z-5\beta_z$ and $\beta=\beta_z/2$. Thus $A=\begin{pmatrix}1&-5\\0&1/2\end{pmatrix}$, mean $(5,0)$, and covariance

$$A\operatorname{diag}(4,1)A^T=\begin{pmatrix}29&-2.5\\-2.5&0.25\end{pmatrix}.$$

```python
import numpy as np
rng = np.random.default_rng(7703)
ab_z = rng.normal([5, 0], [2, 1], size=(10_000, 2))
A = np.array([[1., -5.], [0., .5]])
ab = ab_z @ A.T
x = np.array([6., 10., 14.])
pred_z = ab_z[:, :1] + ab_z[:, 1:] * ((x-10)/2)
pred_x = ab[:, :1] + ab[:, 1:] * x
assert np.allclose(pred_z, pred_x, atol=1e-12, rtol=1e-12)
assert np.allclose(A @ np.diag([4., 1.]) @ A.T,
                   [[29, -2.5], [-2.5, .25]])
```

Prediction equality holds draw by draw and therefore is a stronger check than approximate empirical moment agreement. Independent original-scale coefficients would set covariance to zero. At x=10 that would give prior mean-response variance $29+100(0.25)=54$, whereas the correct prior variance is 4 at the centring point. Scaling is part of the prior specification, not merely a numerical convenience.

#### Rubric

Require the affine coefficient map, covariance and paired prediction check. Accept equivalent matrix conventions with consistent dimensions. Approximate sample covariance is supplementary; an independence assumption after transformation loses the original prior.
<!-- end:extra.7.3 -->

<!-- begin:extra.7.4 -->
### extra.7.4 — Curvature, collinearity and extrapolation {#extra.7.4}

#### Worked answer

The residual pattern suggests the conditional mean may need curvature, though bin counts and uncertainties are needed before judging its strength. Plot residuals with uncertainty across x and compare replicated versions of the same binned discrepancy under a regularised nonlinear candidate. Near-collinear predictors supply little information separating their slopes; examine the design matrix and joint posterior, consider a scientifically meaningful combined predictor or regularising priors, and test prediction stability rather than selecting a slope by apparent significance. x=5 lies well outside observed support. Obtain domain constraints and preferably observations near deployment values; compare plausible extrapolation shapes and report their disagreement. Validation within 0–2 cannot establish accuracy at 5. Keep preprocessing inside the training split and choose held-out units matching deployment. More posterior draws may reduce MCSE but do not add information about slope separation or extrapolated shape. A defensible plan could decline the requested precise extrapolation until supporting data exist.

#### Rubric

Require three separate mechanisms, targeted checks and honest limits. Accept several nonlinear or regularised alternatives if their observable implications and validation are explained. Do not reward adding polynomial terms without addressing extrapolation or claiming broad coefficients prove poor within-range predictions.
<!-- end:extra.7.4 -->

## Lesson 8

<!-- begin:extra.8.1 -->
### extra.8.1 — Standardise on the probability scale {#extra.8.1}

#### Worked answer

With $\eta_i=\alpha+\beta a_i+\gamma z_i$, likelihood is $\prod_i p_i^{y_i}(1-p_i)^{1-y_i}$; log likelihood is $\sum_i[y_i\eta_i-\log(1+e^{\eta_i})]$, evaluated stably in code. At a=0 the stratum risks are (0.1192029,0.5), and at a=1 they are (0.2314752,0.6899745). Population risks are 0.2144022 and 0.3461000, giving a risk difference 0.1316978, about 13.17 percentage points. Averaging logits first gives inverse logits of −1.5 and −0.7, approximately 0.1824255 and 0.3318122, a different difference 0.1493867. Nonlinearity prevents interchanging averaging and inverse-link transformation. With uncertain coefficients, repeat standardisation within each joint posterior draw. Causal language additionally needs a well-defined intervention, consistency, conditional exchangeability, positivity and a suitable no-interference/transport argument; the regression formula alone supplies none of these.

#### Rubric

Require likelihood derivation, response-scale weighting with the same population, the numerical contrast and causal qualifications. Accept stable `logaddexp` expressions. An odds ratio is not a substitute for the requested risk difference.
<!-- end:extra.8.1 -->

<!-- begin:extra.8.2 -->
### extra.8.2 — Exposure and extra-Poisson variation {#extra.8.2}

#### Worked answer

The common rate is $2(1.5)=3$ events/hour. Means are 6 and 15 events. Negative-binomial variances are $6+36/4=15$ and $15+225/4=71.25$ events squared, whereas Poisson variances would be 6 and 15. The log-mean is $\log\mu=\log t+\log2+x\log1.5$. The coefficient of $\log t$ is fixed at one by the assumption that exposure scales the conditional mean proportionally. Estimating it freely describes a different exposure-response relationship and requires a scientific reason. Overdispersion here is defined conditional on supplied coefficients and dispersion; it is separate from posterior uncertainty in these quantities, which would add another predictive variance contribution.

#### Rubric

Require rate/count distinction, all four variances, the fixed offset and parameterisation. Another negative-binomial convention is acceptable only after translating it correctly to the given variance. Confusing dispersion with a gamma rate or omitting exposure loses model credit.
<!-- end:extra.8.2 -->

<!-- begin:extra.8.3 -->
### extra.8.3 — A separated likelihood tail {#extra.8.3}

#### Worked answer

Symmetry gives likelihood $L(\beta)=\operatorname{logit}^{-1}(\beta)^2\operatorname{logit}^{-1}(2\beta)^2$. Every factor increases with $\beta$ and tends to one. There is no finite likelihood maximiser, and integrating this likelihood against a flat density over the positive tail diverges, leaving an improper posterior. Either proper normal prior yields a proper posterior because the likelihood is bounded by one, but the data weakly limit the upper slope tail. The wider prior can permit much more extreme probabilities, especially near the decision boundary where slope magnitude matters. Before fitting, compare the priors' implied response curves over meaningful x, then compare posterior probabilities at near-zero and deployment x values and uncertainty under both priors. Report that classification separates these four cases, while magnitude and extrapolation remain prior-sensitive. Standardise x or elicit realistic probability changes before selecting regularisation.

#### Rubric

Require the likelihood tail and flat-prior impropriety, distinction between propriety and identification, and concrete prediction-based checks. Accept another proper regulariser with a justified scale. Do not claim that a proper posterior eliminates prior sensitivity or that perfect training classification proves certainty.
<!-- end:extra.8.3 -->

<!-- begin:extra.8.4 -->
### extra.8.4 — Association under treatment selection {#extra.8.4}

#### Worked answer

A defensible conclusion is that, conditional on the model and recorded score, supported users have lower predicted completion odds in this observational sample. Unrecorded circumstances influence both assignment and completion, so residual confounding can produce that association even if support helps. A useful target is the average effect on completion of offering a specified support programme to eligible future users versus usual service over a fixed horizon. Randomising the offer can identify an intention-to-treat effect with adequate follow-up, consistency and an appropriate interference assumption. The effect of receiving support is a different estimand because receipt may depend on post-offer behaviour. An observational identification argument would require sufficient measured pre-treatment confounders, positivity within relevant strata, consistency and transport to the target population; the stated missing circumstances make exchangeability doubtful. Check whether both policies are represented across difficulty levels. Narrow posterior uncertainty conditional on an unverified model does not remove this identification gap.

#### Rubric

Require a qualified association, the selection mechanism, a defined causal target and a defensible identification/design argument. Accept another clearly specified intervention. Full credit does not require promising observational identification; an explicit conclusion that more information is needed is valid.
<!-- end:extra.8.4 -->

## Lesson 9

<!-- begin:extra.9.1 -->
### extra.9.1 — Shrinkage includes uncertainty {#extra.9.1}

#### Worked answer

The sample mean likelihood has variance $\sigma^2/n$. Adding precisions gives $V=(1/\tau^2+n/\sigma^2)^{-1}$ and mean $V(\mu/\tau^2+n\bar y/\sigma^2)=w\bar y+(1-w)\mu$, with $w=n\tau^2/(\sigma^2+n\tau^2)$. Here $w=12/21=4/7$, mean $82/7\approx11.714286$ and variance $12/7\approx1.714286$. As n grows at fixed positive scales, w tends to one and V to zero; as $\tau^2\to0$, the group is forced to the known population mean and V tends to zero. These are conditional limits. A full hierarchy integrates uncertainty in $\mu,\tau,\sigma$, so posterior uncertainty in a group mean includes variation across their joint posterior and need not equal this fixed-hyperparameter variance.

#### Rubric

Require precision derivation, mean and variance, evaluated values and conditional limit interpretation. Completing the square is equivalent. Reporting shrinkage of the mean without its uncertainty is incomplete.
<!-- end:extra.9.1 -->

<!-- begin:extra.9.2 -->
### extra.9.2 — Two observations in an unseen group {#extra.9.2}

#### Worked answer

Each outcome has mean 10 and variance $1+4+9=14$. Same-group observations share $\mu+u_g$, so covariance is $1+4=5$. Different-group observations still share uncertain $\mu$, leaving covariance 1. Their average has variance $(14+14+2\cdot5)/4=9.5$ in the same-group case and $(28+2)/4=7.5$ across distinct groups. Within each posterior replicate, draw one $\mu$; reuse it for all future groups, draw one $u_g$ per group and reuse it for observations in that group, then draw independent individual errors. Independently redrawing $\mu$ for each observation would erase epistemic dependence; reusing one $u$ for distinct groups would add dependence absent from the stated model.

#### Rubric

Require all moments and correct sharing of both population and group quantities. A covariance-matrix derivation is valid. Claiming distinct groups are marginally independent ignores the shared uncertain population mean.
<!-- end:extra.9.2 -->

<!-- begin:extra.9.3 -->
### extra.9.3 — Many rows, few groups {#extra.9.3}

#### Worked answer

Each centre mean has sampling SD $1/\sqrt{500}\approx0.04472$ metres, so the three particular means are precisely estimated. The population distribution of centres is still informed by three group realisations. A tight HalfNormal(0.2) and a much broader HalfNormal(2) can therefore yield different posterior uncertainty in $\tau$ and in an unseen centre. The report should compare prior predictive centre means and ranges for three and four centres, then posterior $\tau$ distributions and new-centre mean intervals under both priors, with each fit's own computational evidence. For an individual future measurement add observation variance separately. Exchangeability means these centres and the target centre can plausibly be modelled as draws from the same population after included covariates; systematic geography or selection could invalidate it. More rows at the same centres refine their means but cannot substitute for independent information about many centres. The supplied summaries support designing the comparison, not reporting unexecuted fitted intervals.

#### Rubric

Require distinction between group count and row count, a prediction-focused sensitivity report and an exchangeability qualification. Accept alternative defensible scale priors. Do not invent fitted output or assert the tighter prior is correct simply because observed means are close.
<!-- end:extra.9.3 -->

<!-- begin:extra.9.4 -->
### extra.9.4 — Equivalent hierarchies, different coordinates {#extra.9.4}

#### Worked answer

The affine map has determinant $\tau^J$. Thus $p_\alpha(\mu+\tau z)\tau^J=p_z(z)$; the observation likelihood is identical after substitution. A numeric check is:

```python
import numpy as np
from scipy.stats import norm
mu, tau, sigma = 2., .5, 1.
z = np.array([-1., 0., 2.])
y = np.array([1., 2., 4.])
alpha = mu + tau*z
ll = norm.logpdf(y, alpha, sigma).sum()
centred = norm.logpdf(alpha, mu, tau).sum() + ll
noncentred = norm.logpdf(z).sum() + ll
assert abs(centred + len(z)*np.log(tau) - noncentred) < 1e-12
rng = np.random.default_rng(7904)
a = mu + tau*rng.normal(size=(100_000, 3))
assert np.max(np.abs(a.mean(axis=0)-2)) < .01
assert np.max(np.abs(a.var(axis=0)-.25)) < .01
```

The mapped point is (1.5,2,3). Prior mean is 2 and variance 0.25 for each group. These tolerances are broad Monte Carlo checks, whereas the density equality is algebraic up to floating-point rounding. With unknown scales the two coordinates can have very different dependence and curvature. Noncentring can help weakly informed groups but is not universally faster; compare diagnostics at equal computational effort on the actual model.

#### Rubric

Require a measure-aware density identity, correct numeric check and simulation with tolerances. Equivalent direct distribution arguments are valid alongside the requested code. Do not accept a manual extra Jacobian in a correctly specified standard-normal latent model or a universal noncentring speed claim.
<!-- end:extra.9.4 -->

## Lesson 10

<!-- begin:extra.10.1 -->
### extra.10.1 — Four exact leave-one-out scores {#extra.10.1}

#### Worked answer

For each of the three held-out successes, the remaining sample contains two successes and one failure, giving Beta(3,2). Its held-out success probability is 3/5=0.6 and log score $\log0.6\approx-0.510826$. Holding out the failure leaves three successes, giving Beta(4,1); the held-out failure probability is 1/5=0.2 and log score $\log0.2\approx-1.609438$. Total exact LOO score is $3\log0.6+\log0.2\approx-3.141915$. The full-data posterior is Beta(4,2), giving training predictive masses 2/3 for each success and 1/3 for the failure, with total $3\log(2/3)+\log(1/3)\approx-2.315008$. That latter calculation reuses each row in inference and is not a held-out evaluation. The target is one further exchangeable Bernoulli trial under the same shared probability. Four scores provide very limited evidence about predictive performance or adequacy in a different population.

#### Rubric

Require four refits/masses/logs and their total, with a clear distinction from the training score. Grouping identical success rows in a table is valid. A log of the sum of probabilities is not the requested sum of log scores.
<!-- end:extra.10.1 -->

<!-- begin:extra.10.2 -->
### extra.10.2 — Why leave-one-out weights become unstable {#extra.10.2}

#### Worked answer

Bayes factorisation gives $p(\theta\mid y)=p(y_i\mid\theta)p(\theta\mid y_{-i})/p(y_i\mid y_{-i})$. Therefore the density ratio is $p(y_i\mid y_{-i})/p(y_i\mid\theta)$: unnormalised weights are $r_i(\theta)=1/p(y_i\mid\theta)$. The expectation estimate is $\sum_s r_i(\theta_s)h(\theta_s)/\sum_s r_i(\theta_s)$. Integrating the density ratio gives

$$p(y_i\mid y_{-i})=\left\{E_{\theta\mid y}\left[\frac{1}{p(y_i\mid\theta)}\right]\right\}^{-1}.$$

The support condition matters: the full posterior must cover the leave-one-out target. An observation can pull the full posterior away from regions that become plausible when it is omitted; the rare full-posterior draws reaching those regions receive enormous reciprocal-likelihood weights. Even a finite mean need not imply finite weight variance or a reliable finite-sample estimate. Inspect weight concentration and PSIS Pareto diagnostics, including which observations are influential. Exact refitting for problematic rows, or a validation design such as K-fold suited to the intended prediction unit, avoids relying on unstable raw importance averages. Smoothing cannot create absent support.

#### Rubric

Require the density-ratio derivation, self-normalisation, predictive identity and support/instability explanation. Equivalent evidence-ratio algebra is valid. Do not treat a raw harmonic-mean computation as automatically reliable or confuse diagnostic failure with proof the observation is erroneous.
<!-- end:extra.10.2 -->

<!-- begin:extra.10.3 -->
### extra.10.3 — Validation for a new clinic next month {#extra.10.3}

#### Worked answer

C most closely represents both requested shifts: for each feasible origin train only on earlier months at the training clinics and evaluate the next month at held-out clinics, excluding patients whose records would leak across the boundary. Fit imputers, scales, feature selection and any tuning inside the corresponding training partition; validation outcomes and future measurements must not enter them. A mostly tests additional rows from represented clinics and may reuse the same patients. B addresses new clinics but pools time, so it need not test genuine forward prediction or changing conditions. For a hierarchical model draw an unseen clinic effect from the population distribution in each joint posterior draw, rather than borrowing its fitted held-out effect. Ten clinics and six months give few independent group/time units and cannot demonstrate accuracy for arbitrary future clinics. Report fold variation and target similarity, and consider prospective validation when the actual new clinic becomes available.

#### Rubric

Require both target dimensions, preprocessing isolation, repeated-patient handling and new-group prediction. An alternative nested split earns full credit if it respects deployment information and explains its limits. Correctly naming C without explaining leakage is insufficient.
<!-- end:extra.10.3 -->

<!-- begin:extra.10.4 -->
### extra.10.4 — A model can improve and still fail {#extra.10.4}

#### Worked answer

The differences total 0.8. Their sample mean is 0.16 and sample variance 0.093, yielding $\operatorname{SE}(\sum d_i)\approx\sqrt{5(0.093)}=0.681909$. The tail-frequency discrepancy is $0.30-0.08=0.22$, or 22 percentage points.

One memo is: “Model B has a higher summed held-out log score than A by 0.8, but the approximate paired standard error is 0.68 and only five independent units support the comparison. This is weak evidence of a practically stable ranking, not a probability that either model is correct. Separately, B substantially underpredicts counts of at least ten: the observed proportion is 30%, compared with a replicated mean of 8% and central 90% range of 2–15%. I would investigate exposure variation, heterogeneous rates or overdispersion and repeat this prespecified check after a justified revision. A model can predict better than its competitor while still missing an important outcome feature. More representative held-out units would strengthen the comparison.”

#### Rubric

Require the paired sample-variance calculation, discrepancy and separate conclusions. Accept another justified tail-focused revision. A normal approximation should be qualified with five units; treating the predictive interval as a posterior model-probability interval is incorrect.
<!-- end:extra.10.4 -->

## Lesson 11

<!-- begin:extra.11.1 -->
### extra.11.1 — Robust likelihood contributions {#extra.11.1}

#### Worked answer

The normal score is $r/s^2=r/4$, giving 0.5 at r=2 and 5 at r=20. The t log kernel is $-(\nu+1)\log[1+r^2/(\nu s^2)]/2$, whose location derivative is $(\nu+1)r/(\nu s^2+r^2)=4r/(12+r^2)$. This gives 0.5 at r=2 and $80/412=20/103\approx0.194175$ at r=20. The normal score grows without bound; the t contribution is bounded and tends to zero as $|r|\to\infty$ at fixed scale and degrees of freedom. This is redescending contribution to the location score, not automatic robustness of every fitted quantity. Estimating scale or degrees of freedom, predictor leverage, priors and the contamination mechanism can all change behaviour. The t observation variance is $s^2\nu/(\nu-2)=12$, so its SD is $\sqrt{12}$, not 2. The comparison uses equal scales, not equal variances.

#### Rubric

Require both differentiated scores, numerical evaluations and scale/variance distinction. Equivalent algebra earns full credit. Distinguish a likelihood score from a full estimator influence function; a universal contamination-immunity claim is not defensible.
<!-- end:extra.11.1 -->

<!-- begin:extra.11.2 -->
### extra.11.2 — Interval recording versus selected entry {#extra.11.2}

#### Worked answer

Under A, the likelihood contribution is $L_A(\mu)=\Phi(2-\mu)-\Phi(1-\mu)$; at zero it is 0.1359051, a dimensionless interval probability. Under B it is $L_B(\mu)=\phi(1.5-\mu)/[1-\Phi(1-\mu)]$ for the recorded value above the threshold. At zero the untruncated density is 0.1295176 per measurement unit, while the conditional density is approximately 0.8163461 per unit. The selection denominator depends on $\mu$, so it cannot be dropped as an irrelevant constant. A knows that an unselected enrolled unit fell into an interval; B conditions on entry and supplies an exact value. Fixed included sample size and unavailable excluded counts are essential to B's stated conditional likelihood. If counts of attempted and excluded units were observed, their selection information would also enter the likelihood.

#### Rubric

Require the two contributions and numerical values with their different measures, plus a protocol-based explanation. Accept survival-function evaluation for stability. Treating an exact density as an event probability or omitting a parameter-dependent selection denominator is substantive.
<!-- end:extra.11.2 -->

<!-- begin:extra.11.3 -->
### extra.11.3 — What the missing outcomes could change {#extra.11.3}

#### Worked answer

Overall completion is $p=0.8(0.6)+0.2q=0.48+0.2q$. Under A it is 0.60, meeting the policy target; under B it is 0.52, missing it. The requirement $0.48+0.2q\ge0.55$ is equivalent to $q\ge0.35$. The observed-data facts are identical in both scenarios, leaving q unidentified without additional assumptions or information. A probability model or prior on q can propagate sensitivity but is not learned from these observed successes alone. A designed follow-up of initially missing units, linked outcome records with known coverage, or credible external information could constrain q; the follow-up's own nonresponse must also be examined. Because proportions were treated as fixed here, these are sensitivity calculations, not posterior intervals accounting for finite samples. In an actual analysis propagate sampling and missingness uncertainty together.

#### Rubric

Require both totals, the threshold for q and the identification argument. Accept a bounded sensitivity curve or a defensible follow-up design. Do not claim that choosing a convenient imputation model empirically establishes random missingness.
<!-- end:extra.11.3 -->

<!-- begin:extra.11.4 -->
### extra.11.4 — Calibrate an exact inference experiment {#extra.11.4}

#### Worked answer

The generating parameter conditional on its simulated data and the 99 exact posterior draws are exchangeable. With continuous draws there are no ties almost surely, so rank $r=\sum_{m=1}^{99}I(\theta_m<\theta_{\rm true})$ is uniform on 0–99. Each ten-rank bin has probability 0.1, expected count 100 and marginal SD $\sqrt{1000(0.1)(0.9)}=\sqrt{90}\approx9.48683$. Counts are jointly multinomial and negatively correlated. The expected rank mean is 49.5; its MCSE across datasets is $\sqrt{(100^2-1)/(12\cdot1000)}\approx0.912825$.

```python
import numpy as np
rng = np.random.default_rng(8114)
R, M = 1000, 99
truth = rng.beta(2, 3, size=R)
y = rng.binomial(8, truth)
draws = rng.beta((2+y)[:, None], (3+8-y)[:, None], size=(R, M))
ranks = (draws < truth[:, None]).sum(axis=1)
counts = np.bincount(ranks//10, minlength=10)
assert counts.sum() == R
assert np.max(np.abs(counts-100)) < 6*np.sqrt(90)
assert abs(ranks.mean()-49.5) < 6*np.sqrt((100**2-1)/(12*R))
print(counts, ranks.mean())
```

The broad screen is a debugging aid, not a calibrated proof of correctness or an independence test across bins. A correct implementation can fluctuate and some incorrect algorithms can pass these limited summaries. This validates the specified exact-update experiment under its own generator; a sampler would have to be used and appropriately checked within each replicate to assess it. Neither version tests whether actual observations follow the assumed model.

#### Rubric

Require prior-data-posterior repetition, rank/bin definition, expected counts/error and honest scope. Accept loops or vectorisation with correct axes. Substituting the same posterior for all datasets, using autocorrelated draws as if exchangeable independent ones, or claiming real-world adequacy loses central calibration credit.
<!-- end:extra.11.4 -->

## Lesson 12

<!-- begin:extra.12.1 -->
### extra.12.1 — A target population can reverse an action {#extra.12.1}

#### Worked answer

For weights (0.8,0.2), expected difference is $0.8(0.12)+0.2(-0.04)=0.088$, or 8.8 percentage points. Expected extra completions are 88 and expected incremental utility is $1000(10)(0.088)-200=680$, favouring B. For weights (0.2,0.8), the difference is $0.024-0.032=-0.008$, or −0.8 points; expected incremental utility is −280, favouring A. These are different population estimands with the same group-specific means. Training sample proportions need not describe either future population. Linearity makes posterior expected differences sufficient for expected utility here, but means alone do not determine $P(U<0)$, a utility interval, or realised rollout risk. Those require joint uncertainty and, for realised outcomes, an explicit predictive model.

#### Rubric

Require both weighted contrasts, units, utilities and actions, plus the mean-only limitation. Equivalent expected-loss reasoning is valid. Do not accept an unweighted average or attach a downside probability to the two supplied means.
<!-- end:extra.12.1 -->

<!-- begin:extra.12.2 -->
### extra.12.2 — A completely enumerated value-of-information problem {#extra.12.2}

#### Worked answer

Current expected utility of B is $0.4(100)-0.6(60)=4$, so choose B. Positive-test probability is $0.4(0.8)+0.6(0.2)=0.44$; negative probability is 0.56. Posteriors are $P(F\mid+)=0.32/0.44=8/11$ and $P(F\mid-)=0.08/0.56=1/7$. B's conditional utilities are $100(8/11)-60(3/11)=620/11\approx56.3636$ after +, and $100/7-360/7=-260/7\approx-37.1429$ after −. Choose B after + and A after −. Free-test optimal expected utility is $0.44(620/11)=24.8$, hence gross EVSI is $24.8-4=20.8$. Perfect information chooses B only in F, attaining 40; EVPI is $40-4=36$. Current opportunity loss from choosing B is $0.6(60)=36$, equal to EVPI. Thus $0\le20.8\le36$. The test's net benefit relative to current action is $20.8-5=15.8$, so buy it; expected utility after paying is 19.8. Test errors prevent it from attaining perfect-information value.

#### Rubric

Require full enumeration and optimisation after each result, all requested value quantities and cost subtraction. A joint-mass decision table is equally valid. Do not subtract test cost twice or maximise before conditioning when computing information value.
<!-- end:extra.12.2 -->

<!-- begin:extra.12.3 -->
### extra.12.3 — Expected value is not a realised outcome {#extra.12.3}

#### Worked answer

Both expectations are $100(3/5)-40=20$. Beta variance is $(3\cdot2)/(5^2\cdot6)=0.04$, so $\operatorname{Var}(V)=100^2(0.04)=400$. For K, total variance is $20E[\theta(1-\theta)]+20^2\operatorname{Var}(\theta)=4+16=20$, hence $\operatorname{Var}(R)=25(20)=500$. The extra 100 utility-squared units are expected conditional outcome variance. $P(V>0)=P(\theta>0.4)=0.8208$. Realised positive value requires the strict integer event K>8, so $P(R>0)=P(K\ge9)\approx0.7670807$ under BetaBinomial(20,3,2). The posterior of V describes uncertainty about a conditional expectation and is continuous; R has a discrete predictive distribution with additional outcome noise. Its interval cannot be recovered simply by relabelling V's interval. These calculations assume a shared stable probability, conditional independent future trials, fixed trial count and the stated linear payoff without extra costs or dependencies.

#### Rubric

Require both uncertainty decompositions, the strict count threshold, checked probabilities and stated future assumptions. Accept direct predictive enumeration. Confusing a positive-expected-value probability with a realised-profit probability is the main diagnosis error.
<!-- end:extra.12.3 -->

<!-- begin:extra.12.4 -->
### extra.12.4 — A decision memo with sensitivity {#extra.12.4}

#### Worked answer

One memo is: “For 2,000 visits next quarter, equally weighted across the same four centres, choose B under the stated risk-neutral utility. The estimated improvement is 4 percentage points, with a 90% posterior interval from −1 to 9 points. At 20 units per additional completion and a rollout cost of 1,000, expected incremental value is 600 units. The break-even improvement is 2.5 percentage points. The two alternative priors give expected incremental values of 0 and 400 units: one makes us indifferent, so the preference for B has some prior sensitivity. Raising rollout cost to 1,800 would make the primary expected value −200 and favour A. Transforming the primary interval gives −1,400 to 2,600 units for conditional expected incremental value. It is not an interval for realised rollout outcomes, which require future-outcome simulation. The recommendation assumes stable centre-specific performance and the specified population and values; checks in represented centres do not justify transfer to new centres. Revisit the decision if these assumptions or the stakeholder's tolerance for downside change.”

Arithmetic uses $2000(20)\Delta-1000=40000\Delta-1000$. The packet's satisfactory diagnostics are hypothetical givens, not outputs executed for this bank.

#### Rubric

Require correct arithmetic and population, a utility-qualified recommendation, explicit prior tie and cost sensitivity, and honest uncertainty/scope. Accept another action under a stated alternative utility; do not present it as the risk-neutral primary optimum. Penalise unsupported precision, invented realised-risk probabilities or claims that diagnostics validate generalisation.
<!-- end:extra.12.4 -->

## Advanced practice

These keys use the formative rubric above. Keep this section and its execution evidence outside answer-free learner retrieval. Computational checks do not establish the scientific assumptions in the givens.

## A01 · Approximation

<!-- begin:adv.approximation.1 -->
### adv.approximation.1 — Which directions lose variational uncertainty? {#adv.approximation.1}

#### Worked answer

The negative log-posterior Hessian is the precision

$$Q=\frac1{0.76}\begin{pmatrix}1&-1.8\\-1.8&4\end{pmatrix}.$$

Laplace is exact: mode m and covariance $Q^{-1}=\Sigma$. With $V=\operatorname{diag}(v_1,v_2)$,

$$\operatorname{KL}(q\Vert p)=\frac12\{\operatorname{tr}(QV)+(a-m)^TQ(a-m)-2+\log(|\Sigma|/|V|)\}.$$

Positive definiteness makes the mean optimum $a=m$ unique. Differentiating in $v_j$ gives $(Q_{jj}-1/v_j)/2=0$, so $V=\operatorname{diag}(0.76,0.19)$. The second derivatives are positive, and the objective diverges at variance zero or infinity. At the optimum, trace equals two and KL is $-\tfrac12\log(0.19)=0.830366$.

For any proper joint density with this posterior, inserting $\log p(\theta\mid y)=\log p(y,\theta)-\log p(y)$ into the KL expectation gives $\log p(y)=\mathcal L(q)+\operatorname{KL}(q\Vert p)$, where $\mathcal L(q)=E_q[\log p(y,\theta)-\log q]$. Evidence is constant during this optimisation. Posterior covariance determines the answer even though the evidence's numerical value was not supplied.

Both distributions have $E(S)=-1$ and $E(D)=3$. Exact variances are $4+4+4(1.8)=15.2$ and $4+4-4(1.8)=0.8$; q assigns 1.52 to each. Thus q understates the sum variance by a factor of ten but overstates the difference variance. The exact and approximate sum tails are $1-\Phi(4/\sqrt{15.2})=0.152451$ and $1-\Phi(4/\sqrt{1.52})=0.000588$. Missing covariance matters as much as marginal spread. More q draws reduce simulation error around these wrong target summaries; they do not change q.

#### Rubric

Require the KL direction, optimisation and ELBO identity, both contrast calculations and the tail discrepancy. Correct means alone are insufficient. Give partial credit for a correct Gaussian derivation with an arithmetic slip; do not accept reciprocal covariance diagonals as optimal variances. An equivalent coordinate-wise variational derivation earns full credit. The interpretation must explicitly recognise the overdispersed difference.
<!-- end:adv.approximation.1 -->

<!-- begin:adv.approximation.2 -->
### adv.approximation.2 — A support-respecting approximation can still miss a tail {#adv.approximation.2}

#### Worked answer

The rate log density has mode $(a-1)/b=2$ and negative curvature $b^2/(a-1)=0.75$, giving $N(2,4/3)$. In log coordinates the log density is $a\eta-be^\eta+$constant, so the mode is $\log(a/b)$ and variance $1/a=1/4$. Its back-transformation is lognormal, not Gamma. The Jacobian is essential.

```python
import numpy as np
from scipy import special, stats

a, b = 4.0, 1.5
reference = np.array([a/b, a/b**2, stats.gamma.sf(5, a, scale=1/b)])
grid_results = []
for step in (0.02, 0.01):
    x = (np.arange(round(30/step)) + 0.5) * step
    log_mass = (a-1)*np.log(x) - b*x + np.log(step)
    mass = np.exp(log_mass - special.logsumexp(log_mass))
    mean = mass @ x
    grid_results.append(np.array([mean, mass @ (x-mean)**2, mass[x > 5].sum()]))
rate_laplace = np.array([2.0, 4/3, stats.norm.sf(5, 2, np.sqrt(4/3))])
eta_mean, eta_var = np.log(a/b), 1/a
log_laplace = np.array([
    np.exp(eta_mean + eta_var/2),
    np.expm1(eta_var)*np.exp(2*eta_mean + eta_var),
    stats.norm.sf(np.log(5), eta_mean, np.sqrt(eta_var)),
])
negative_mass = stats.norm.cdf(0, 2, np.sqrt(4/3))
omitted_mass = stats.gamma.sf(30, a, scale=1/b)
np.testing.assert_allclose(grid_results[-1], reference, rtol=0, atol=2e-5)
assert np.max(np.abs(grid_results[1]-grid_results[0])) < 5e-5
assert omitted_mass < 1e-14
```

The exact summaries are (2.666667, 1.777778, 0.059145); rate-Laplace gives (2.000000, 1.333333, 0.004687), with negative mass 0.041632. Log-Laplace gives (3.021729, 2.593393, 0.104337). Its support is correct but its tail is too large, whereas the rate approximation's tail is too small. Here the log-scale tail has the smaller absolute error, but neither is accurate: correct support alone supplies no tail-error bound. Midpoint tail cells align with the threshold; no straddling cell needs fractional allocation. The omitted mass is below $10^{-14}$; incomplete-gamma moment bounds or a larger cutoff also check truncation of the first two moments. Grid refinement concerns deterministic integration. It does not validate either Laplace approximation. SciPy takes scale $1/b$, not rate b.

#### Rubric

Require executable normalisation, both grids, an explicit truncation check, analytic curvature in both coordinates, and all summaries with separate error sources. Accept adaptive quadrature as an additional reference but retain the requested grid comparison. Omitting the Jacobian or counting negative rate mass as scientifically admissible is consequential. Small rounding differences within the stated tolerance are harmless; there is no simulation tolerance in this deterministic task.
<!-- end:adv.approximation.2 -->

<!-- begin:adv.approximation.3 -->
### adv.approximation.3 — Two stable fits that disagree about the sign {#adv.approximation.3}

#### Worked answer

Symmetry gives target mean zero and sign probability 1/2. Total variance is $0.36+4^2=16.36$. Both fitted q variances are 0.36; their means are minus four and plus four. Their sign probabilities are approximately $1.3084\times10^{-11}$ and $1-1.3084\times10^{-11}$. They lead to opposite sign decisions despite almost identical reported bounds.

For either specified q, numerical integration of $E_q[\log q-\log p]$ gives KL approximately 0.693147, so its exact ELBO is approximately minus log two, consistent with missing one separated component. The rounded traces and tiny gradients suggest local stabilisation; they neither certify exact stochastic objectives nor prove global optimisation. Even a certified optimum in a restricted family would leave family error. A distant mode cannot be ruled out by the curvature at the fitted mode.

An effective check is stable one-dimensional quadrature using log-sum-exp to compute the mixture density, comparing both tails and moments. Multiple dispersed starts reveal the competing fits; sampling or a known reference can test global mass, with its own diagnostics. A two-component Normal mixture with positive weights includes the exact target and can preserve both modes, though its optimisation still needs checks. Pooling equal draws from these two particular fits reproduces this stipulated symmetric target, but equal weighting arbitrary optimisation starts is not a general posterior weighting method. Extra draws from either unchanged q preserve its wrong sign probability; extra optimiser steps have no guaranteed cure.

#### Rubric

Require the exact mixture summaries, opposite sign conclusions, and a distinction between local optimisation evidence and distributional accuracy. Credit a concrete global check and a richer family, including an explanation of how weights would be established. Do not award full credit for “run longer,” unconditional pooling of starts, or claiming global optimality from the supplied traces.
<!-- end:adv.approximation.3 -->


## A02 · Model evidence

<!-- begin:adv.model_evidence.1 -->
### adv.model_evidence.1 — Evidence with unequal prior model odds {#adv.model_evidence.1}

#### Worked answer

For general prior variance $\tau^2$, write $s=\sum_i y_i$, $V=(n+\tau^{-2})^{-1}$ and $m=Vs$. Completing the square in the likelihood times prior gives

$$p(y\mid M_1)=(2\pi)^{-n/2}\exp(-\tfrac12\sum_i y_i^2)\,(1+n\tau^2)^{-1/2}\exp(\tfrac12 V s^2).$$

The integral of the remaining Normal kernel supplies $\sqrt{2\pi V}$, which combines with the prior normaliser. The first factor alone is $p(y\mid M_0)$. Equivalently $Y\mid M_1\sim N(0,I+\tau^2\mathbf1\mathbf1^T)$, confirming dimensions and constants.

Here n=2, s=2.4, $\sum y_i^2=3.2$, $V=9/22=0.409091$ and $m=54/55=0.981818$. Thus $\mu\mid y,M_1\sim N(54/55,9/22)$. The log evidences are -3.437877 and -3.112069, giving log Bayes factor 0.325808. Posterior odds are $\exp(0.3258077721)/3\approx0.461716$, and $P(M_1\mid y)=0.315873$. The observations favour $M_1$ relative to its prior odds, but prior odds of one to three still leave it below one half. The marginal density at a continuous observation is not the probability of that exact observation.

#### Rubric

Require an explicit Gaussian integral or equivalent marginal Normal derivation, retained constants, correct prior-to-posterior odds and the conditional posterior. A likelihood evaluated only at the fitted mean is not evidence. Accept equivalent log-domain formulas and six-decimal rounding; a correct Bayes factor with equal instead of supplied prior odds earns only partial credit.
<!-- end:adv.model_evidence.1 -->

<!-- begin:adv.model_evidence.2 -->
### adv.model_evidence.2 — A diffuse alternative changes the predictive mixture {#adv.model_evidence.2}

#### Worked answer

Let $V=(2+\tau^{-2})^{-1}$, $m=2.4V$, $B=-\tfrac12\log(1+2\tau^2)+\tfrac12 V(2.4)^2$, and $w=\operatorname{logistic}(B-\log3)$. The posterior prediction is $(1-w)N(0,1)+wN(m,1+V)$, whose mean is wm and variance is

$$\underbrace{1+wV}_{\text{within models}}+\underbrace{w(1-w)m^2}_{\text{between models}}.$$

| Prior SD tau | log BF | w | m | V | Predictive mean | Predictive variance |
|---|---:|---:|---:|---:|---:|---:|
| 0.25 | 0.101108 | 0.269432 | 0.133333 | 0.055556 | 0.035924 | 1.018468 |
| 1.5 | 0.325808 | 0.315873 | 0.981818 | 0.409091 | 0.310130 | 1.337531 |
| 6 | -0.724956 | 0.139006 | 1.183562 | 0.493151 | 0.164523 | 1.236206 |

The formula above supplies both variance components in every row; retaining only $1+wV$ loses uncertainty about which conditional mean applies. Even the largest conditional posterior mean produces a modest averaged mean when evidence lowers its weight.

As tau grows, $V\to1/2$ and m tends to 1.2, while $B=-\tfrac12\log(1+2\tau^2)+O(1)\to-\infty$, so $w\to0$. The proper alternative spreads prior predictive mass over an increasingly wide reading range. An improper prior $p(\mu)=c$ has arbitrary c; multiplying it rescales evidence without changing its normalised conditional posterior. It cannot define these posterior model odds. A proper-prior limit is a specified sequence, not permission to discard the normalising constant. Evidence averages likelihood over a stated scientific prior; predictive accuracy on a target population requires its own validation and may favour a different choice.

#### Rubric

Require all three separate comparisons, the full mixture variance and the fixed-data diffuse-prior limit. Accept a correct table from either quadrature or analytic formulas, with the formulas or algorithm explained. Missing between-model uncertainty, reallocating prior mass among the three widths, or treating an improper prior's arbitrary evidence as meaningful is a substantive error. Predictive recommendations must identify a validation target.
<!-- end:adv.model_evidence.2 -->

<!-- begin:adv.model_evidence.3 -->
### adv.model_evidence.3 — Explain three kinds of model comparison {#adv.model_evidence.3}

#### Worked answer

A defensible message is:

“The BMA event probability is $0.85(0.20)+0.15(0.60)=0.26$; using stacking weights gives $0.30(0.20)+0.70(0.60)=0.48$. These are predictions for the same event using different weighting objectives. BMA weights update prior model odds through prior predictive evidence, conditional on the stated model list and proper parameter priors. Stacking chooses weights to improve the combined predictive distribution under the leave-one-out scoring objective. A stacking weight of 0.70 is not a probability that B is true. Nor does a BMA weight establish literal truth when all candidates may be inadequate.

B's estimated leave-one-out advantage is five log-score units with paired SE four. The gain is only 1.25 estimated standard errors, so this report gives limited precision about its size; it does not prove a ranking or supply a posterior probability of superiority. Validation also needs to match the intended deployment population and dependence structure. Repeated model selection on the same validation results can produce optimism. I would examine pointwise differences and an appropriate external or untouched evaluation if available. Finally, an improper prior has an arbitrary multiplicative constant. Its posterior parameter distribution might exist, but the model evidence and hence these BMA odds would be undefined.”

#### Rubric

Require both event probabilities and all three targets, modest interpretation of paired uncertainty, and a specific validation caveat. Accept alternate wording or a conditional recommendation for B if its assumptions and uncertainty are explicit. Do not require a Normal significance test. Treat “70% true,” “five units proves superiority,” or meaningful evidence under an arbitrary improper prior as central interpretation errors.
<!-- end:adv.model_evidence.3 -->


## A03 · Observation process

<!-- begin:adv.observation_process.1 -->
### adv.observation_process.1 — Recover a latent item without treating its reading as exact {#adv.observation_process.1}

#### Worked answer

Normal convolution gives independent $W_i\mid\mu\sim N(\mu,5)$. The common-mean posterior is Normal with

$$V=(1/9+3/5)^{-1}=45/32=1.40625,\qquad m=V(\sum_i w_i/5)=9/8=1.125.$$

Conditional Normal algebra gives $X_i\mid w_i,\mu\sim N(\tfrac45w_i+\tfrac15\mu,\tfrac45)$. Integrating the posterior mu therefore gives

$$E(X_3\mid w)=\tfrac45(3)+\tfrac15(1.125)=2.625,$$

$$\operatorname{Var}(X_3\mid w)=\tfrac45+\tfrac1{25}V=0.85625.$$

Different latent items have zero conditional covariance given mu and all readings, but their conditional means share mu. Thus $\operatorname{Cov}(X_1,X_3\mid w)=V/25=0.05625$. The new reading adds independent item and measurement variation: $\operatorname{Var}(W_4\mid w)=V+4+1=6.40625$.

The naive common-mean posterior has $V_0=(1/9+3/4)^{-1}=36/31=1.161290$ and $m_0=V_0\sum_iw_i/4=36/31=1.161290$. It treats noisy readings as direct latent values, understates common-mean uncertainty and eliminates item reconstruction uncertainty at observed readings. Merely plugging the correct m into the latent-item conditional mean would still omit $V/25$ from its variance. All variances here are conditional on known item and measurement variances; estimating those variances would add another uncertainty layer.

#### Rubric

Require convolution, a correct precision update, both terms in latent-item variance, cross-item covariance and new-reading variance. Accept block multivariate Normal conditioning as an equivalent derivation. Give partial credit for the correct latent mean with omitted shared-mean variance, but do not accept the reading variance as the posterior variance of its latent item.
<!-- end:adv.observation_process.1 -->

<!-- begin:adv.observation_process.2 -->
### adv.observation_process.2 — A nonresponse shift that the data cannot estimate {#adv.observation_process.2}

#### Worked answer

The respondent likelihood is $\prod_{i=1}^5 N(y_i;\mu,4)$ and contains no delta. If the register's response information is included its factor is also independent of delta under this pattern-mixture parameterisation. Therefore every fixed delta has the same observed-data likelihood and an independent delta prior remains unchanged.

The posterior mu has variance $(1/4+5/4)^{-1}=2/3$ and mean $(5/4+27/4)(2/3)=16/3$. Since $T=r\mu+(1-r)(\mu+\delta)=\mu+0.35\delta$, conditional T is Normal with that shifted mean and variance 2/3.

| Fixed delta | Mean T | 90% equal-tail interval | P(T > 6) |
|---|---:|---|---:|
| -3 | 4.283333 | [2.940316, 5.626351] | 0.017756 |
| 0 | 5.333333 | [3.990316, 6.676351] | 0.207108 |
| 3 | 6.383333 | [5.040316, 7.726351] | 0.680639 |

These are alternative assumptions, not three posterior draws or data-selected models. With $\delta\sim N(0,9)$ independent of mu, the posterior remains factorised and

$$T\mid y\sim N\left(16/3,\,2/3+0.35^2(9)\right)=N(16/3,1.769167),$$

so $P(T>6\mid y)=0.308110$. Its wider distribution reflects the stipulated sensitivity prior; the five outcomes have not learned delta. Even arbitrarily many respondents leave the delta contribution unless additional restrictions or data identify it. A probability sample of initial nonrespondents followed up with known sampling probabilities could inform their distribution. An externally justified bound on their mean gives partial identification. Simply asserting a strong prior makes a narrower conditional answer, not new identification. Setting delta zero is a substantive equality-of-means restriction, not something established by the observed outcomes.

#### Rubric

Require the likelihood argument, all conditional summaries, independent-prior variance propagation and a concrete information proposal. Accurate conditional intervals without admitting nonidentifiability are insufficient. Accept equivalent integration or Normal calculations and explicitly labelled partial-identification alternatives. Do not add an individual outcome variance to the uncertainty of this superpopulation mean.
<!-- end:adv.observation_process.2 -->

<!-- begin:adv.observation_process.3 -->
### adv.observation_process.3 — Four instruments record four different events {#adv.observation_process.3}

#### Worked answer

Writing $f_\mu$ for the Normal density and F for its CDF, the likelihoods are

$$L_A=F_\mu(2.5)-F_\mu(1.5),\qquad L_B=1-F_\mu(3),$$

$$L_C=\frac{f_\mu(4)}{1-F_\mu(3)},\qquad L_D=\frac{f_\mu(4)s(4)}{Z(\mu)},\quad Z(\mu)=\int_{-\infty}^{\infty} f_\mu(y)s(y)\,dy.$$

Endpoint conventions for the rounded interval do not affect a continuous model. A and B are event probabilities; C and D are admitted-value densities. At mu one the values are 0.174666, 0.158655, 0.408173 and 0.118959. For D the admission probability is $Z(1)=0.397973$. The denominator depends on mu even though the selection mechanism is known. A point density at two is not the likelihood of the rounded record; a survival probability alone is not the truncated exact-value density.

With a fixed, fully registered set of attempted units, a particular admitted exact value contributes $f_\mu(4)s(4)$ and a particular rejected unit contributes $\int f_\mu(y)[1-s(y)]dy=1-Z(\mu)$. Their indicators carry information; conditioning on admission would discard it. The described stopping/recording mechanism thus matters. Because admission depends on the unavailable outcome, it is not ignorable just because there is no unknown selection coefficient. Ignorability needs the appropriate missingness assumptions and distinct parameter/prior conditions; an observed-covariate MAR mechanism would be a different specification. No prior for mu is needed to state or evaluate these likelihoods.

#### Rubric

Require all four observation events, appropriate denominators and numerical evaluation of D's normaliser. Accept formulas up to mu-independent proportionality factors if the requested normalised evaluation is also supplied. Confusing truncation with censoring or calling outcome-dependent selection ignorable is consequential. Credit a precise distinction between the conditional admitted sample and a registered attempt cohort.
<!-- end:adv.observation_process.3 -->


## A04 · Causal identification

<!-- begin:adv.causal.1 -->
### adv.causal.1 — Standardise to the target population {#adv.causal.1}

#### Worked answer

Consistency maps the observed outcome under treatment a to $Y(a)$; conditional exchangeability equates the conditional potential-outcome mean with $p_{za}$, and positivity provides both treatment risks in each target stratum. Transportability and fixed target weights then give

$$\Delta_*=0.7(p_{01}-p_{00})+0.3(p_{11}-p_{10}).$$

In row order the posteriors are Beta(14,50), Beta(10,14), Beta(20,14), Beta(65,29), with means (0.218750, 0.416667, 0.588235, 0.691489). Their independence follows from the factorised binomial likelihood and independent priors, not from a claim that potential outcomes within a person are independent.

For $c=(-0.7,0.7,-0.3,0.3)$, use beta mean $a/(a+b)$ and variance $ab/[(a+b)^2(a+b+1)]$:

$$E(\Delta_*\mid y)=0.169518,\qquad \operatorname{Var}(\Delta_*\mid y)=\sum_j c_j^2\operatorname{Var}(p_j\mid y)=0.006877.$$

The crude observed contrast is $71/110-30/90=0.312121$. The treatment groups have different stratum mixes; this association also uses no beta prior. Comparing the unsmoothed standardised cell proportions gives $0.7(0.4-0.2)+0.3(0.7-0.6)=0.17$, making clear that the main discrepancy is not prior shrinkage. Neither crude association nor regression precision establishes exchangeability. No interference means one person's treatment does not alter another's potential outcome; consistency also needs well-defined treatments. The outcome table can expose sparse or empty cells, but does not establish absence of unmeasured confounding or transportability. These require design and subject-matter justification.

#### Rubric

Require identification before arithmetic, correct posterior parameters, variance propagation and an honest crude comparison. Accept exact fractions and equivalent calculations. Using observed treatment-group stratum weights instead of the specified target weights changes the estimand. A correct numerical contrast labelled causal without its identification assumptions earns only partial credit.
<!-- end:adv.causal.1 -->

<!-- begin:adv.causal.2 -->
### adv.causal.2 — Adjustment can open a path or remove part of the effect {#adv.causal.2}

#### Worked answer

In graph C, unadjusted randomised comparison identifies the total effect. C is a collider on $A\to C\leftarrow U\to Y$; conditioning on it generally opens an otherwise blocked path. The graph does not justify adjustment for C, even if it improves an outcome model's fit. In graph M, unadjusted randomised comparison also identifies the total effect. M lies on a causal pathway, so conditioning on it removes that pathway from the comparison. It does not generally estimate the total effect. A controlled direct effect is a different intervention estimand; with the graph's no-confounding assumptions it can be identified under the necessary support, but a generic adjusted coefficient need not equal it without an appropriate model and contrast.

In the observational setting let $u=E[Y(0)\mid Z=1]$. Binary outcomes permit any $u\in[0,1]$, so

$$\Delta_*=0.7(0.4-0.2)+0.3(0.7-u)=0.35-0.3u\in[0.05,0.35].$$

For a constructive proof, generate $Z\sim\operatorname{Bernoulli}(0.3)$. Assign A randomly with probability one half within Z=0 and set A=1 within Z=1. In Z=0 generate potential outcomes with means 0.2 and 0.4, independently of assignment. In Z=1 give $Y(1)$ Bernoulli mean 0.7 and set $Y(0)$ identically zero in the first model and identically one in the second. Use consistency to reveal Y. Both yield exactly the stated observed law and satisfy conditional exchangeability (degenerately in the always-treated stratum), yet their effects are 0.35 and 0.05. Every intermediate u is also constructible, so the bounds are sharp. Positivity fails in a stratum carrying target mass.

A proper prior can assign a posterior to u, but these observations cannot update it in a saturated independent-cell model. A concentrated posterior imposed by a prior or structural extrapolation is conditional on that added information. It does not make the observational law identify the absent risk.

#### Rubric

Require both distinct path diagnoses, the absent-risk expression, sharp bounds and a constructive compatible-model argument. Credit defensible distinctions between total and controlled direct effects. Claiming that every covariate improves adjustment, that randomisation makes collider adjustment harmless, or that a narrow prior restores positivity is a central error. Valid alternative constructions with the same observable law earn full credit.
<!-- end:adv.causal.2 -->

<!-- begin:adv.causal.3 -->
### adv.causal.3 — Check a confounding analysis against its generator {#adv.causal.3}

#### Worked answer

The generator effect is $0.6(0.35-0.10)+0.4(0.65-0.55)=0.19$. For the crude population association, $P(A=1)=0.6(0.15)+0.4(0.85)=0.43$. Treated success mass is $0.6(0.15)(0.35)+0.4(0.85)(0.65)=0.2525$; control success mass is $0.6(0.85)(0.10)+0.4(0.15)(0.55)=0.084$. The crude population contrast is $0.2525/0.43-0.084/0.57=0.439841$, far from the causal effect despite infinite-data precision for that association.

```python
import numpy as np
from scipy import stats

rng = np.random.default_rng(8603)
z = rng.binomial(1, 0.4, 6000)
a = rng.binomial(1, np.where(z == 0, 0.15, 0.85))
risk = np.array([[0.10, 0.35], [0.55, 0.65]])
y = rng.binomial(1, risk[z, a])
cells = [(0, 0), (0, 1), (1, 0), (1, 1)]
counts = np.array([np.sum((z == j) & (a == k)) for j, k in cells])
successes = np.array([y[(z == j) & (a == k)].sum() for j, k in cells])
alpha, beta = 1 + successes, 1 + counts - successes
coef = np.array([-0.6, 0.6, -0.4, 0.4])
post_mean = coef @ (alpha/(alpha+beta))
post_var = (coef**2) @ stats.beta.var(alpha, beta)
crude = y[a == 1].mean() - y[a == 0].mean()
draw_rng = np.random.default_rng(8604)
contrasts = draw_rng.beta(alpha, beta, size=(20000, 4)) @ coef
mean_mcse = np.sqrt(post_var/len(contrasts))
assert abs(contrasts.mean()-post_mean) < 6*mean_mcse
error_in_posterior_sds = (post_mean-0.19)/np.sqrt(post_var)
missing_means = []
for missing_prior in ((1, 1), (8, 2), (2, 8)):
    aa, bb = alpha.copy(), beta.copy()
    aa[2], bb[2] = missing_prior  # No retained outcomes in this cell.
    missing_means.append(float(coef @ (aa/(aa+bb))))
np.testing.assert_allclose(missing_means[2]-missing_means[1], 0.24, atol=1e-12)
```

In the locked environment the cell counts are (2992,565,346,2097), with successes (270,208,176,1383). The crude sample contrast is 0.464058. The adjusted posterior mean is 0.227152 with SD 0.017003, giving an estimation error of 2.185037 posterior SDs relative to 0.19. The posterior draw mean is 0.227082 with mean MCSE 0.000120228; the draw SD is 0.017104. The three missing-cell posterior means are (0.230600,0.110600,0.350600), in the requested prior order. The verifier records this exact code's output and checks it independently.

The posterior draw mean should approach the analytic mean; its MCSE is simulation uncertainty conditional on this one dataset. Comparing the analytic posterior mean with 0.19 assesses this fit against a known generator, not a guarantee of coverage from one simulation. Under the changed design, replacing the missing cell's prior mean 0.8 by 0.2 shifts the target contrast upward by $0.4(0.8-0.2)=0.24$ without any new outcome information. The original overlap assumptions justified adjustment; after deletion the target still includes the unobserved cell, so the posterior contrast depends on a prior or an additional extrapolation assumption. The code's independent beta draws need no chain-convergence diagnostics.

#### Rubric

Require reproducible generator order/seeds, analytic and drawn posterior comparisons with MCSE, distinct crude/causal targets, and the changed-design prior sensitivity. A correct implementation may use equivalent array operations and report equivalent summaries. Do not accept using empirical treated-stratum weights as target weights, comparing simulation error to zero tolerance, or claiming that prior-driven missing-cell predictions are identified by the retained data.
<!-- end:adv.causal.3 -->


## A05 · Time series

<!-- begin:adv.time_series.1 -->
### adv.time_series.1 — Forecast a process with alternating dependence {#adv.time_series.1}

#### Worked answer

Iterating the recursion gives

$$Y_{T+h}=\mu+\phi^h(y_T-\mu)+\sum_{j=0}^{h-1}\phi^j\epsilon_{T+h-j}.$$

Independence makes the conditional mean $m_h=\mu+\phi^h(y_T-\mu)$ and variance

$$v_h=\sigma^2\sum_{j=0}^{h-1}\phi^{2j}=\sigma^2\frac{1-\phi^{2h}}{1-\phi^2}.$$

At stationarity $V=\phi^2V+\sigma^2$, hence $V=\sigma^2/(1-\phi^2)$. The stationary full likelihood includes $Y_0\sim N(\mu,V)$ multiplied by the transition densities; the conditional likelihood uses only transitions given the observed initial value. If parameters are inferred, their initial density generally depends on them and cannot silently be discarded while claiming a stationary full likelihood.

The requested means are (0, 1.5, 0.75); variances are (0.75, 0.9375, 0.984375). As h grows the mean tends to one and variance to one. Negative phi alternates the sign of the initial deviation, while the variance uses squared powers and increases toward its stationary value. Innovation variance 0.75 measures one new shock, whereas stationary variance one accumulates past shocks.

With posterior parameter uncertainty, total variance is $E[v_h\mid y]+\operatorname{Var}(m_h\mid y)$, where both quantities are functions of the same parameter draw. Means require $E[m_h\mid y]$. Powers, products and ratios generally do not commute with posterior averaging. Current-state uncertainty, if the current value were latent rather than observed exactly, would require a further conditional integration; it is absent from this question's givens.

#### Rubric

Require the recursion, squared-coefficient variance sum, correct limits and initial-density distinction. Accept a geometric-series or covariance derivation. Missing the between-parameter term or using negative unsquared coefficients as innovation variances is consequential. A formula without interpreting conditioning versus stationarity earns partial credit.
<!-- end:adv.time_series.1 -->

<!-- begin:adv.time_series.2 -->
### adv.time_series.2 — Integrate a two-point parameter posterior {#adv.time_series.2}

#### Worked answer

The conditional log likelihoods for phi 0.2 and 0.8 are -3.735965 and -2.391965. Normalising with equal prior probabilities yields weights (0.206853,0.793147) and posterior mean phi 0.675888. The conditional component means at h are $m_j=0.7\phi_j^h$ and variances $v_j=0.25\sum_{r=0}^{h-1}\phi_j^{2r}$.

| Horizon | Integrated mean | Within variance | Between variance | Total variance | Plug-in mean | Plug-in variance |
|---|---:|---:|---:|---:|---:|---:|
| 1 | 0.473122 | 0.250000 | 0.028941 | 0.278941 | 0.473122 | 0.250000 |
| 3 | 0.285422 | 0.460273 | 0.020421 | 0.480694 | 0.216134 | 0.416378 |

At horizon one the mean is linear in phi, so plug-in preserves that mean but loses between-parameter variance. At horizon three it changes the mean and within-parameter variance too. This example demonstrates a discrepancy, not a theorem that all plug-in forecasts understate every uncertainty measure.

```python
import numpy as np
from scipy import special, stats

y = np.array([-0.4, 0.2, 0.6, 1.0, 0.7])
phis = np.array([0.2, 0.8])
log_weights = np.log([0.5, 0.5]) + stats.norm.logpdf(
    y[1:, None], y[:-1, None]*phis, 0.5).sum(axis=0)
weights = np.exp(log_weights-special.logsumexp(log_weights))
phi_mean = weights @ phis
rng = np.random.default_rng(8502)
N = 100000
chosen = rng.choice(phis, size=N, p=weights)
current = np.full(N, y[-1])
forecasts = {}
for h in range(1, 4):
    current = chosen*current + rng.normal(0, 0.5, N)
    if h not in (1, 3):
        continue
    cm = y[-1]*phis**h
    cv = 0.25*sum(phis**(2*r) for r in range(h))
    mean = weights @ cm
    within = weights @ cv
    between = weights @ (cm-mean)**2
    variance = within + between
    fourth = weights @ (3*cv**2 + 6*cv*(cm-mean)**2 + (cm-mean)**4)
    mean_mcse = np.sqrt(variance/N)
    # Exact variance of the unbiased sample variance for iid mixture draws.
    variance_mcse = np.sqrt((fourth-(N-3)/(N-1)*variance**2)/N)
    assert abs(current.mean()-mean) < 6*mean_mcse
    assert abs(current.var(ddof=1)-variance) < 6*variance_mcse
    forecasts[h] = dict(mean=float(mean), variance=float(variance),
        within=float(within), between=float(between),
        plugin_mean=float(y[-1]*phi_mean**h),
        plugin_variance=float(0.25*sum(phi_mean**(2*r) for r in range(h))),
        sample_mean=float(current.mean()), sample_variance=float(current.var(ddof=1)),
        mean_mcse=float(mean_mcse), variance_mcse=float(variance_mcse))
```

For one component with mean displacement d, the fourth central moment about the mixture mean is $3v^2+6vd^2+d^4$, hence the code's MCSE. The parameter is a fixed unknown across time. Redrawing it at every step imposes a random-coefficient process with different temporal dependence. The tolerances concern independent predictive simulation, not posterior identification or validation on future data.

#### Rubric

Require the conditional likelihood, weights, both exact mixture components, plug-in comparison and trajectory-level parameter sharing. Credit simulation only with analytic checks and justified MCSEs; an unqualified “close enough” is insufficient. Equivalent independent trajectory generation is valid. Do not require exact equality of stochastic summaries, or claim that this small discrete prior exhausts realistic parameter uncertainty.
<!-- end:adv.time_series.2 -->

<!-- begin:adv.time_series.3 -->
### adv.time_series.3 — Find the future information in a validation pipeline {#adv.time_series.3}

#### Worked answer

Full-series centring/scaling uses future distributional information. A centred feature uses a future reading even if its row is assigned to training. A random split permits later outcomes to train predictions for earlier origins; it estimates a reconstruction/interpolation task rather than the stated deployment forecast. At origin 19 a pair whose feature origin is 19 has label 22, which has not arrived. A chronological feature-index cutoff alone is insufficient; the last legal training feature origin is 16.

A valid index schedule is:

```python
horizon = 3
schedule = []
for origin in (17, 20, 23, 26):
    pairs = [(s, s+horizon) for s in range(origin-horizon+1)]
    feature_windows = [list(range(max(0, s-2), s+1)) for s, _ in pairs]
    test_window = list(range(max(0, origin-2), origin+1))
    assert max(label for _, label in pairs) <= origin
    assert all(max(window) == s for (s, _), window in zip(pairs, feature_windows))
    schedule.append(dict(origin=origin, train_pairs=pairs,
        train_feature_windows=feature_windows, test_feature_window=test_window,
        target=origin+horizon))
```

The last training feature origins are (14,17,20,23), their last labels (17,20,23,26), and the test targets (20,23,26,29). At each origin compute training trailing features from their causal windows, fit any scaler to those training features, then transform the current trailing feature. Fit the chosen direct model to only the listed feature/label pairs. There is no imputation requirement for these complete data; if one is introduced, its fitted state must also use the allowed history. Do not refit preprocessing on the test feature merely for convenience.

Earlier held-out targets become legitimate historical data when their timestamps arrive: the outcome at 20 can enter training at origin 20. This defines a sequential updating protocol, not an untouched fixed-model holdout. Record the protocol before evaluation. For each origin, create two copies of the series with identical prefixes through o but arbitrary different suffixes; with the same random seed, fitted state and predictions must be identical. For online features, also perturb values after each feature timestamp and require that feature to stay unchanged. A counterexample reveals leakage; passing these checks alone is not a proof of all implementation correctness.

Score only the four three-step predictions, for example reporting squared error per origin and their mean. If full predictive distributions are supplied, use a proper log score or CRPS. The four errors share fitting history and may remain dependent despite nonoverlapping three-step target blocks. Report them and their horizons; do not attach an iid standard error or a strong generalisation claim from four points. More chronological origins and an appropriate dependence-aware uncertainty analysis would support a fuller evaluation.

#### Rubric

Require all four leakage mechanisms, label-aware training cutoffs, exact requested schedule and causal preprocessing. Accept equivalent expanding-window code and justified scoring choices. Allow reuse of arrived outcomes only when the updating protocol is explicit. An ordinary random split, future-derived feature, or unchanged full-series scaler remains invalid even if the final split is chronological.
<!-- end:adv.time_series.3 -->


## A06 · Gaussian processes

<!-- begin:adv.gaussian_processes.1 -->
### adv.gaussian_processes.1 — Condition a small GP and audit its kernel {#adv.gaussian_processes.1}

#### Worked answer

The matrices are

$$K=\begin{pmatrix}1&1\\1&2\end{pmatrix},\quad C=\begin{pmatrix}1.5&1\\1&2.5\end{pmatrix},\quad k_*=(1,3)^T,\quad k_{**}=5.$$

For $C=LL^T$, solve $Lr=y$, $L^T\alpha=r$ and $Lv=k_*$. Then predictive mean is $k_*^T\alpha=26/11=2.363636$, latent variance is $5-v^Tv=15/11=1.363636$, and new-reading variance is $41/22=1.863636$. The independent observation noise is added after latent conditioning.

```python
import numpy as np
from scipy.linalg import solve_triangular

K = np.array([[1.0, 1.0], [1.0, 2.0]])
C = K + 0.5*np.eye(2)
y = np.array([1.0, 2.0])
cross = np.array([1.0, 3.0])
L = np.linalg.cholesky(C)
alpha = solve_triangular(L.T, solve_triangular(L, y, lower=True), lower=False)
v = solve_triangular(L, cross, lower=True)
gp_prediction = np.array([cross @ alpha, 5-v@v, 5-v@v+0.5])
```

The equivalent coefficient model has design $X=\begin{pmatrix}1&0\\1&1\end{pmatrix}$, posterior precision $I+2X^TX=\begin{pmatrix}5&2\\2&3\end{pmatrix}$, posterior mean $(10/11,8/11)^T$ and covariance $\tfrac1{11}\begin{pmatrix}3&-2\\-2&5\end{pmatrix}$. Applying test row (1,2) reproduces the GP mean and latent variance. The kernel is valid because it is an inner product of features (1,x), but its functions are affine, not a general nonlinear function family; outside the training range its variance can grow without bound.

The proposed $K'$ has eigenvalues 2.2 and -0.2. For contrast (1,-1), the latent variance would be $1+1-2(1.2)=-0.4$. This is impossible. An observation covariance that becomes positive after adding noise does not repair the claimed latent process decomposition. A valid kernel must yield positive semidefinite latent covariance on every finite input set.

#### Rubric

Require dimensionally correct matrices, Cholesky-based values, coefficient-model agreement and separate latent/noisy predictions. Accept exact fractions or the specified rounding. The kernel critique needs a concrete negative variance or eigenvalue and the affine-function restriction. Treat a positive noisy matrix as insufficient evidence for validity of the latent kernel.
<!-- end:adv.gaussian_processes.1 -->

<!-- begin:adv.gaussian_processes.2 -->
### adv.gaussian_processes.2 — Separate numerical jitter from measurement noise {#adv.gaussian_processes.2}

#### Worked answer

```python
import numpy as np
from scipy.linalg import solve_triangular

x = np.array([0.0, 0.0, 1e-8, 1.0])
y = np.array([1.0, 1.02, 0.98, -0.2])
xstar = np.array([0.0, 0.5, 2.0])
def kernel(left, right):
    return np.exp(-0.5*((left[:, None]-right[None, :])/0.7)**2)
K, cross = kernel(x, x), kernel(x, xstar)
def predict(noise_variance, jitter):
    C = K + (noise_variance+jitter)*np.eye(len(x))
    L = np.linalg.cholesky(C)
    alpha = solve_triangular(L.T, solve_triangular(L, y, lower=True), lower=False)
    v = solve_triangular(L, cross, lower=True)
    mean = cross.T @ alpha
    latent = 1-np.sum(v*v, axis=0)
    condition = float(np.linalg.cond(C))
    noisy = latent+noise_variance
    if not all(np.all(np.isfinite(value)) for value in (condition, mean, latent, noisy)):
        raise ValueError("Nonfinite condition number or predictive result")
    if np.min(latent) < -1e-10:
        raise ValueError("Latent predictive variance is below -1e-10")
    return dict(condition=condition, mean=mean, latent=latent, noisy=noisy)
jitter_results = {j: predict(1e-6, j) for j in (0.0, 1e-10, 1e-6, 1e-2)}
try:
    np.linalg.cholesky(K)
except np.linalg.LinAlgError:
    noiseless_factorisation_failed = True
else:
    noiseless_factorisation_failed = False
assert noiseless_factorisation_failed
changed_noise = predict(0.010001, 0.0)
np.testing.assert_allclose(changed_noise['mean'], jitter_results[1e-2]['mean'], atol=1e-9)
np.testing.assert_allclose(changed_noise['latent'], jitter_results[1e-2]['latent'], atol=1e-9)
np.testing.assert_allclose(changed_noise['noisy']-jitter_results[1e-2]['noisy'], 0.01, atol=1e-12)
assert jitter_results[1e-2]['latent'][0] > 1000*jitter_results[0.0]['latent'][0]
```

Approximate reference values are:

| j | Condition number | Test means at (0, 0.5, 2) | Latent variances at (0, 0.5, 2) |
|---|---:|---|---|
| 0 | $3.179\times10^6$ | [1.000000, 0.455562, -0.211332] | [0.0000003333, 0.117390, 0.855391] |
| $10^{-10}$ | $3.179\times10^6$ | [1.000000, 0.455563, -0.211332] | [0.0000003334, 0.117390, 0.855391] |
| $10^{-6}$ | $1.589\times10^6$ | [0.999999, 0.455600, -0.211355] | [0.0000006667, 0.117390, 0.855391] |
| $10^{-2}$ | $3.189\times10^2$ | [0.995917, 0.456929, -0.208261] | [0.0033209613, 0.121682, 0.857085] |

Add $10^{-6}$ to each latent variance for the specified new-reading variance. Last digits can vary across linear-algebra libraries: allow $2\times10^{-6}$ absolute error in displayed predictions and 0.5% relative condition-number error. The large-jitter fit is a materially perturbed calculation, even though Cholesky is now easier. Two identical inputs create identical rows in the noiseless K; its rank deficiency is mathematical, not proof of an invalid squared-exponential kernel. Moreover, exact duplicate latent values cannot explain their different readings in a noiseless model.

Using scientific noise 0.010001 produces exactly the same training C as scientific noise $10^{-6}$ plus jitter 0.01. It therefore gives the same mean and latent variance, but its new-reading variance is 0.01 higher. Jitter is a recorded computational perturbation, not a measured error process. A sensitivity report should retain the zero-jitter scientific-model reference and disclose any non-negligible perturbation; it should not label the largest-jitter uncertainty as the exact original-model posterior.

#### Rubric

Require all four settings, finite/variance checks, a specific factorisation-failure explanation, observed sensitivity and the matched-training/different-prediction comparison. Accept equivalent triangular solves and reported tiny negative roundoff within the stated bound, without silently changing substantial negative values. Do not accept adding jitter to future scientific noise, replacing every failed factorisation by arbitrary large jitter, or calling jitter a fitted parameter.
<!-- end:adv.gaussian_processes.2 -->

<!-- begin:adv.gaussian_processes.3 -->
### adv.gaussian_processes.3 — A kernel prior decides how far a curve can speak {#adv.gaussian_processes.3}

#### Worked answer

One defensible recommendation is:

“The prior correlations at separation one are $\exp[-1/(2\cdot0.3^2)]=0.003866$ and $\exp[-1/(2\cdot1.8^2)]=0.856997$. Model S nearly decouples observations that far apart; model L strongly links them. Its narrow interpolation interval reflects that coupling, not proof that its curve is more accurate. At three, beyond the measured range, the large difference in means reveals sensitivity to the length-scale prior. In both fits, arbitrarily distant predictions revert to mean zero and latent variance one. A different scientifically justified mean function could change extrapolation substantially.

A future reading has latent variance plus 0.04, so its interval is wider than the displayed latent interval. Both squared-exponential priors impose stationarity of covariance and extremely smooth latent functions. If abrupt calibration changes are plausible, a changepoint or nonstationary kernel may be more appropriate; a finite-smoothness Matérn kernel allows roughness but is not by itself a model of a discontinuity. I would inspect prior predictive functions in the measurement units, check sensitivity to the baseline and hyperparameter priors, and validate at separations resembling intended use. The three readings offer limited discrimination, particularly for extrapolation. I would report both scenarios until scientific knowledge or relevant held-out readings justify a preference, and propagate hyperparameter uncertainty when fitting a nondegenerate prior.”

One dense matrix uses $20{,}000^2\times8=3.2\times10^9$ bytes, or 3.2 decimal GB. Dense factorisation scales as $O(n^3)$, giving a leading time multiplier $10^3=1000$; storage scales as $O(n^2)$, giving 100. Actual memory includes additional arrays and actual runtime depends on implementation/hardware. These are scaling calculations, not a benchmark.

#### Rubric

Require both correlations, latent-versus-reading uncertainty, far-away limits, scientific kernel assumptions and a concrete investigation. Accept conditional preferences supported by the intended task, and other valid alternatives for discontinuities. A wider interval is not automatically better either. Require the separate storage/time calculation; do not accept “GPs are flexible” as a substitute for explaining this kernel's restrictions.
<!-- end:adv.gaussian_processes.3 -->

## Expansion assessments — protected reference

These ten keys use separate assessed givens from A07–A09 worked examples. The instructor-only verifier `scripts/verify_expansion_assessments.py` and current report `artifacts/expansion/advanced_assessments_checks.json` contain numeric answers and genuine small-experiment output. Keep both outside ordinary tutor retrieval and the learner ZIP. Existing historical assessment reports remain edition-two evidence. Each score below is a formative 0–3 judgment by a reviewer of the learner's reasoning, not an automatic score or mastery update. Numerical/source checks verify the keys and rubric structure; they cannot validate an open-ended answer or establish human agreement on scoring.

<!-- begin:adv.prior_workflow.1 -->
### adv.prior_workflow.1 — One seed lot, two kinds of uncertainty {#adv.prior_workflow.1}

#### Worked answer

Write $\mu=4/10=0.4$, $v=4(6)/(10^2\cdot11)=6/275$, and $E[\theta(1-\theta)]=12/55$. Conditional on the one unknown lot probability, $E(K\mid\theta)=12\theta$ and $\operatorname{Var}(K\mid\theta)=12\theta(1-\theta)$. Thus

$$E(K)=4.8,\quad E[\operatorname{Var}(K\mid\theta)]=144/55=2.618182,\quad
\operatorname{Var}[E(K\mid\theta)]=864/275=3.141818.$$

Their sum is $\operatorname{Var}(K)=5.760000$ germinations squared. The expected count has units germinations; theta and indicator covariance are dimensionless. The cross term in total variance is zero because the conditional residual has conditional mean zero. For distinct indicators, total covariance gives $\operatorname{Cov}(Y_i,Y_j)=v=0.021818$. Conditional independence does not imply marginal independence after integrating one shared probability.

The plug-in model has independent Bernoulli(0.4) indicators and count variance $12(0.4)(0.6)=2.880000$. Independently redrawing theta for every seed also yields independent marginal Bernoulli(0.4) indicators and the same Binomial count law, hence zero cross-indicator covariance. This follows by factoring the separate integrals, not by assuming that every hierarchical mixture is overdispersed. Its physical heterogeneity interpretation differs from uncertainty about one fixed lot probability.

A satisfactory record identifies: quantity, the chance of germinating by the deadline; population/protocol, random seeds from this lot under the named cabinet conditions with the germination criterion fixed; horizon, 14 days after sowing; provenance, the stipulated Beta(4,6) teaching assumption with the real information sources and their overlap still to be elicited. It must not claim that shapes encode actual surveyed experts or trials. Shared trays, contagious mold or a cabinet failure would challenge conditional independence given only theta; an extended conditional model might be needed.

#### Rubric

- **3:** Derives both variance terms, mean and units; correctly compares all three covariance structures and interpretations; supplies all four provenance fields and a relevant dependence mechanism.
- **2:** Central shared-versus-independent distinction and variance method are correct, with a minor arithmetic, unit or provenance omission.
- **1:** Gives some valid moments or provenance but loses shared covariance, confuses epistemic uncertainty with physical redrawing, or omits an entire comparison.
- **0:** No defensible conditional model or variance reasoning; treats the prior as twelve observed probabilities without qualification.

Accept equivalent total-covariance or beta-binomial derivations and other plausible dependence mechanisms. Six displayed decimals are reference rounding, not required precision beyond the method.
<!-- end:adv.prior_workflow.1 -->

<!-- begin:adv.prior_workflow.2 -->
### adv.prior_workflow.2 — Preserve two calibration judgments {#adv.prior_workflow.2}

#### Worked answer

For $u=\log a,v=\log b$, minimize $\sum_i[I_{x_i}(e^u,e^v)-p_i]^2$ separately for U and V. Positive shapes follow from exponentiation, not from clipping a failed fit. Lab 21's multistart least-squares routine is one implementation; record its starts, selected objective, bounds, termination and feedback flags. The independent reference search in `scripts/verify_expansion_assessments.py` instead integrates each raw Beta kernel with its own quadrature normalizer and uses Nelder–Mead in log coordinates. Neither finite search proves a global optimum.

| Packet | a | b | Fitted CDF at supplied values | Returned quantiles at (.15,.50,.85) | Maximum CDF residual | P(K<7) |
|---|---:|---:|---|---|---:|---:|
| U | 4.174793 | 2.886841 | (.150442,.499476,.850443) | (.399644,.600251,.779716) | .000524 | .574089 |
| V | 2.121819 | 3.823163 | (.149910,.500106,.849911) | (.160054,.339946,.560081) | .000106 | .879669 |

The residual vectors are approximately $(.000442,-.000524,.000443)$ and $(-.000090,.000106,-.000089)$. The squared-residual sums are approximately $6.65506\times10^{-7}$ and $2.72359\times10^{-8}$. Allow 0.002 absolute in shapes and 0.0002 in the requested CDF/quantile/predictive summaries for converged solutions with equivalent objectives. A small residual is numerical faithfulness to a packet, not certification of the judgment or calibration.

One independent calculation evaluates $\int_0^{.40}t^{a-1}(1-t)^{b-1}dt /\int_0^1t^{a-1}(1-t)^{b-1}dt$ for U and recovers .150442. Prediction integrates a **single shared** theta:

$$P(K<7)=\sum_{k=0}^{6}{10\choose k}\frac{B(a+k,b+10-k)}{B(a,b)}.$$

Direct integration of the summed Binomial polynomial times the normalized Beta density gives the same two probabilities. A plug-in Binomial or a fresh theta for each comparison answers a different predictive question.

Return plots or the displayed CDF/quantile discrepancies and implied pass-count distribution to each specialist. Ask whether “fixed calibration” includes progressive fouling, whether comparisons use the same reference tolerance and field conditions, and which maintenance facts informed each judgment. Their marginal fits are good while their predictions differ materially. Shared recollection prevents treating the two packets as independent count evidence. Preserve dated U/V packets and their provenance separately. A revised V would require an actual clarification from its provider, a reason, changed target/conditions if applicable, and an immutable predecessor; the analyst cannot revise it merely to close the gap. If ambiguity persists, report scenario sensitivity or a justified richer process model. No weight or consensus is identified by these residuals.

#### Rubric

- **3:** Fits both packets in log shapes, retains optimizer evidence, returns the requested discrepancies and predictions within tolerance with an independent integral, and distinguishes disagreement, shared information and authorized feedback/revision.
- **2:** Correct fits/predictions and disagreement interpretation, but one secondary diagnostic, independent check or provenance detail is incomplete.
- **1:** Some valid computation, but pools shapes/packets without justification, loses the shared-theta prediction, or treats small fit residuals as expert agreement.
- **0:** No usable fitted model or interpretation, or invents count data/revisions/consensus as evidence.

Credit a coherent unsuccessful-fit diagnosis with a corrected, fully documented computation; do not penalize honest retained failures. A different family can be proposed in feedback but does not replace the requested separate Beta calculations.
<!-- end:adv.prior_workflow.2 -->

<!-- begin:adv.prior_workflow.3 -->
### adv.prior_workflow.3 — A rehearsal decision changes with the weight {#adv.prior_workflow.3}

#### Worked answer

For each scenario sum $\sum_{k=0}^4{6\choose k}B(a+k,b+6-k)/B(a,b)$, or integrate its conditional Binomial event probability against the Beta. This gives $q_H=0.445378$ and $q_L=0.803030$. Existing-set expected losses are $1+12q_H=6.344538$ and $1+12q_L=10.636364$ credits, versus 7 credits for hire. H therefore uses the existing set and L hires.

Under the prior mixture, $q(w)=wq_H+(1-w)q_L$ by linearity of integration. The existing-set loss at weights (.25,.50,.75) is $(9.563407,8.490451,7.417494)$, so all three hire. Using the existing set is optimal exactly when $q(w)<(7-1)/12=0.5$, or $w>0.847277$ approximately. At exact equality either action minimizes expected loss; specify either as the tie convention and retain that it is a tie. Rounded weights near the boundary do not justify an exact strict preference.

At $w=.75$, $q=0.534791$. With shortfall loss 8 credits, using the existing set costs $5.278330$, so use it; with loss 20 it costs $11.695824$, so hire. The decision is sensitive both to prior weighting and to consequences. The quantities called losses must be comparable total costs; double-counting the hire cost as an additional failure charge changes the decision problem.

A mixture averages full probability distributions and hence expectations; its density is $wf_H+(1-w)f_L$. A Beta formed by averaging shapes is generally neither that density nor that predictive distribution. A component is selected once for the shared rehearsal probability if simulating the mixture. The weight is a stipulated sensitivity choice, not a posterior credibility estimate. No proper scientific agreement or credibility calibration follows from action stability alone.

#### Rubric

- **3:** Correct event boundary and integrated probabilities, both losses, three weight decisions, switching/tie rule and penalty sensitivity; explains mixture linearity and the weight's epistemic limits.
- **2:** Correct decision method and substantive sensitivity, with a minor rounding/arithmetic error or missing tie/mixture detail.
- **1:** Partial loss calculation but wrong threshold event, plug-in prediction, unjustified shape averaging, or omitted penalty sensitivity changes a conclusion.
- **0:** No expected-loss comparison or unsupported claim that one prior/weight is proven credible.

Accept exact fractions or six-decimal values within 0.000002; loss arithmetic using correctly rounded probabilities can have correspondingly small propagated error.
<!-- end:adv.prior_workflow.3 -->

<!-- begin:adv.prior_workflow.4 -->
### adv.prior_workflow.4 — An archive already inside the prior {#adv.prior_workflow.4}

#### Worked answer

The informed prior is Beta$(3+9,5+3)=$ Beta(12,8). After only fresh S it is Beta$(12+2,8+2)=$ Beta(14,10). Reusing R and adding S gives Beta$(12+9+2,8+3+2)=$ Beta(23,13). Correct mean and variance are $7/12=0.583333$ and $140/(24^2\cdot25)=0.009722$. The erroneous mean is $23/36=0.638889$ and variance is $299/(36^2\cdot37)=0.006235$. The erroneous uncertainty is smaller here because information has been reused, not because more independent data have arrived.

Route one retains the base Beta(3,5) and includes R once and S once in the likelihood. Route two retains the informed Beta(12,8), records that it already consumed `detector_archive_R`, excludes R from all subsequent likelihoods, and includes only `detector_new_S`. The ledger should give source ID, distinct trial identifiers/time range, success/failure counts, protocol/population, prior incorporation status and include/exclude reason. Verify that S is disjoint and that thresholds, detector configuration and sampling conditions support exchangeability. Nonoverlap alone does not establish scientific comparability.

The erroneous intermediate reuse of R alone would give Beta(21,11), which also makes the duplicated provenance visible. For an undocumented informal judgment, there is no established likelihood factorization to invert. Shape parameters need not encode literal successes/failures; subtracting nine and three may misrepresent the judgment or even create an improper shape. Obtain provenance/clarification, re-elicit a prior excluding R if feasible, or report appropriately qualified sensitivity with explicit overlap. Do not claim that bookkeeping can reconstruct unavailable information.

#### Rubric

- **3:** Correct three distributions and posterior moments; two equivalent once-only routes and a usable ledger; addresses exchangeability and why informal overlap is not mechanically subtractable.
- **2:** Central reuse diagnosis and routes are sound with a minor moment or ledger omission.
- **1:** Recognizes some duplication but still applies R twice, omits the fresh update, or advocates unjustified shape subtraction for informal knowledge.
- **0:** Treats relabeling a posterior as a prior as creating fresh independent evidence, with no workable correction.

Accept alternative documented reconciliation strategies for the informal case; no unique revised prior is identifiable from the stated information.
<!-- end:adv.prior_workflow.4 -->

<!-- begin:adv.categorical_conjugacy.1 -->
### adv.categorical_conjugacy.1 — Derive an accession-count prediction {#adv.categorical_conjugacy.1}

#### Worked answer

Let $B(\alpha)=\prod_j\Gamma(\alpha_j)/\Gamma(\sum_j\alpha_j)$. The density on the three-category simplex is $\prod_j\theta_j^{\alpha_j-1}/B(\alpha)$. Multiplying by $(7!/\prod_j y_j!)\prod_j\theta_j^{y_j}$ changes the powers to $\alpha_j+y_j-1$. The observed multinomial coefficient and prior normalizer are constants in theta and cancel on dividing by the evidence. The normalized posterior is Dirichlet(5,4,4). For future counts $k$ summing to two,

$$P(k\mid y)=\frac{2!}{\prod_jk_j!}\frac{B((5,4,4)+k)}{B(5,4,4)}.$$

In category order digitised, queued, blocked:

| k | Probability |
|---|---:|
| (0,0,2) | 10/91 |
| (0,1,1) | 16/91 |
| (0,2,0) | 10/91 |
| (1,0,1) | 20/91 |
| (1,1,0) | 20/91 |
| (2,0,0) | 15/91 |

The numerators sum to 91. One specific ordered digitised-then-blocked sequence has probability $(5/13)(4/14)=10/91$; the unordered count (1,0,1) also includes the reverse order, doubling that probability.

Let $T=13$, $a=(5,4,4)$ and $p=a/T$. Dirichlet covariance is $(T\operatorname{diag}(a)-aa^T)/[T^2(T+1)]$. Total covariance combines the conditional multinomial covariance $2(\operatorname{diag}(p)-pp^T-\operatorname{Cov}(\theta))$ with $4\operatorname{Cov}(\theta)$. Equivalently it is $2(T+2)/(T+1)\,[\operatorname{diag}(p)-pp^T]$. Therefore

$$E(K)=(10,8,8)/13,\qquad
\operatorname{Cov}(K)=\frac1{1183}\begin{pmatrix}600&-300&-300\\-300&540&-240\\-300&-240&540\end{pmatrix}.$$

All covariance rows sum to zero because $K_1+K_2+K_3=2$ has no variance. The matrix is singular positive semidefinite; this is a fixed-sum property, not a failed probability model. Direct moments of the six-state table independently recover the matrix and means.

#### Rubric

- **3:** Derives normalized posterior and predictive including the future combinatorial factor, checks the complete table and its moments/covariances, and explains ordering and fixed-sum singularity.
- **2:** Correct posterior and predictive derivation with a minor table/moment error or an incomplete fixed-sum explanation.
- **1:** Recognizable conjugate update but omits normalization/combinatorial factors, uses a plug-in multinomial covariance, or leaves most of the enumeration missing.
- **0:** No coherent simplex likelihood/posterior or predictive count law.

Accept fractions, checked decimal equivalents, or an independent ordered-path enumeration with its derivation. Do not demand an inverse of the singular count covariance.
<!-- end:adv.categorical_conjugacy.1 -->

<!-- begin:adv.categorical_conjugacy.2 -->
### adv.categorical_conjugacy.2 — Four tickets after a changed update {#adv.categorical_conjugacy.2}

#### Worked answer

Aggregate resolved and follow-up to shape 5. The escalation probability has Beta(5,5) marginal, so the no-escalation probability in four shared-vector tickets is $B(5,9)/B(5,5)=(5\cdot6\cdot7\cdot8)/(10\cdot11\cdot12\cdot13)=14/143$. Thus at least one has probability $129/143=0.902098$. Equivalently sum $4!B((3,2,5)+k)/[\prod_jk_j!B(3,2,5)]$ over the five future count vectors with zero escalations: $(0,4,0),(1,3,0),(2,2,0),(3,1,0),(4,0,0)$. Their total is 14/143; summing the other ten of the fifteen vectors gives 129/143.

At the posterior mean escalation probability .5, the plug-in result is $1-(1/2)^4=15/16=0.937500$. It is larger by $81/2288=0.035402$. Convexity of $(1-p)^4$ gives $E[(1-p)^4]\geq(1-Ep)^4$. Shared uncertainty can raise mass at both no escalation and multiple escalations; more count variance does not raise every tail event probability.

The count mean is 2 and variance is $4(5)(5)(10+4)/(10^2\cdot11)=14/11=1.272727$. Since $\operatorname{Var}(\theta_3)=1/44$, the covariance of escalation counts in two batches sharing theta is $4\cdot4/44=4/11=0.363636$. Conditional independence of batches removes conditional covariance but leaves the covariance of their conditional means. With separate independent vectors and **fixed** shapes, the two predictive counts are independent and cross-covariance is zero. Their individual beta-binomial laws are unchanged. If shared hyperparameters are unknown, integrating their uncertainty can induce cross-batch dependence even with conditionally independent batch vectors. That is an additional hierarchy, not established by these fixed-shape calculations.

#### Rubric

- **3:** Both predictive derivations, correct plug-in comparison/direction, mean/variance and both cross-batch covariances, with explicit shared/fixed hyperparameter conditions.
- **2:** Correct predictive and dependence interpretation with a minor arithmetic or enumeration omission.
- **1:** Some valid marginal calculations but conflates plug-in and integrated prediction, claims all tail probabilities rise, or treats shared uncertainty as independent physical batch variation.
- **0:** No valid predictive calculation or conditioning distinction.

Accept a sum over all fifteen count states instead of the complementary five-state sum. Six-decimal values may differ by 0.000002.
<!-- end:adv.categorical_conjugacy.2 -->

<!-- begin:adv.categorical_conjugacy.3 -->
### adv.categorical_conjugacy.3 — A probability vector is a joint object {#adv.categorical_conjugacy.3}

#### Worked answer

The unrelated binary analyses give Beta(3,5), Beta(5,3), Beta(1,7), with mean sum $(3+5+1)/8=9/8=1.125000$. These three uniform binary priors are not the marginals of the specified Dirichlet prior. The correct joint update is Dirichlet(4,6,1), with means $(4,6,1)/11$ and marginals Beta(4,7), Beta(6,5), Beta(1,10). Its covariance is

$$\operatorname{Cov}(\theta)=\frac1{1452}\begin{pmatrix}28&-24&-4\\-24&30&-6\\-4&-6&10\end{pmatrix}.$$

Independent draws from these **correct marginals** have the correct individual moments, and their means sum to one. But their sum has variance $(28+30+10)/1452=17/363=0.046832$, while a probability vector must sum to one exactly and have zero sum variance. Independence destroys the required negative cross-covariances. Dividing those independent draws by their sum changes each marginal; unlike normalizing independent gamma variables with a common rate, normalizing these Beta variables has no general Dirichlet justification.

Zero unsafe observations are a sampling zero. Their probability remains uncertain and positive with posterior mean $1/11$. A genuine structural zero needs an external scientific/coding support restriction that excludes unsafe objects from this population; fit a two-category model with properly stated prior/renormalization on the admissible support. If specifically carrying over the admissible prior proportions from (2,2,1), normalized first-two proportions have Dirichlet(2,2) prior and Dirichlet(4,6) posterior. This is an explicitly changed support model, not evidence that the original unsafe probability was zero. Do not pass a zero shape to an ordinary Dirichlet density or remove a category merely because its observed count is zero.

For a relabeling test, swap reusable and unsafe by permutation (2,1,0) in zero-based indexing. Permute prior, observed/future counts and labels together; means permute and covariance transforms $P\Sigma P^T$, while the correspondingly relabeled joint predictive mass is unchanged. Test asymmetric shapes/counts so a missed permutation is detectable. Such a test checks label consistency, not the substantive support decision.

#### Rubric

- **3:** Diagnoses all three errors with the stated moments/covariance and sum-variance check; distinguishes structural support from a sampling zero; specifies a meaningful relabeling test.
- **2:** Central simplex/dependence and zero distinctions are correct, with a minor calculation or test detail missing.
- **1:** Correctly notices one error but endorses renormalized independent Betas, zero shapes, or removal after a sampling zero, or omits the dependence diagnosis.
- **0:** No coherent joint probability model or relevant diagnosis.

Accept other justified priors for a genuinely changed support, provided the new assumptions are explicit. The zero observed cell does not select such a model automatically.
<!-- end:adv.categorical_conjugacy.3 -->

<!-- begin:adv.multivariate_hierarchy.1 -->
### adv.multivariate_hierarchy.1 — Covariance priors in physical units {#adv.multivariate_hierarchy.1}

#### Worked answer

In two dimensions the LKJ(eta) correlation density is proportional to $(1-\rho^2)^{\eta-1}$ on (-1,1). For eta=3 the integral of $1-2\rho^2+\rho^4$ is $16/15$, giving $f(\rho)=15(1-\rho^2)^2/16$. Integrating outside [-.5,.5] gives $P(|\rho|>.5)=53/256=0.207031$. Equivalently $(\rho+1)/2\sim\operatorname{Beta}(3,3)$. LKJ(1) is uniform in bivariate correlation and gives tail probability 0.500000, placing more mass on strong correlations. In higher dimensions the marginal correlation distribution is not this same simple bivariate identity. Neither choice supplies observations; examine predictive implications and sensitivity.

At the snapshot,

$$\Sigma=\begin{pmatrix}.64&-.08\\-.08&.0625\end{pmatrix},\quad
b_1\mid b_0=.4\sim N(-.05,.0525).$$

The conditional mean is $(-.08/.64)(.4)$ and variance is $.0625-(-.08)^2/.64$. The second normal argument is **variance**, with conditional SD approximately .229129. The variance of $b_0+2b_1$ is $.64+4(-.08)+4(.0625)=.570000$.

Let $T=\operatorname{diag}(1,.1)$. Since $x'=10x$, $b'=Tb$ preserves $b_0+b_1x=b'_0+b'_1x'$. Thus

$$\Sigma'=T\Sigma T^T=\begin{pmatrix}.64&-.008\\-.008&.000625\end{pmatrix}.$$

The scale priors become HalfNormal(.8) and HalfNormal(.025), and correlation/LKJ prior stay unchanged because the rescaling is positive. The conditional slope is $N(-.005,.000525)$ per degree, and variance at $x'=20$ is still .57. Population slopes and their priors must transform too if present. Keeping slope HalfNormal(.25) in single-degree units makes its prior SD ten times larger on the same physical response change; it is a different model with different prior predictions. A prior that is proper is not thereby scientifically suitable or informative enough to estimate correlation.

#### Rubric

- **3:** Normalizes/integrates the bivariate LKJ prior, obtains correct covariance and Gaussian conditional, and transforms both effect and scale priors with invariant predictions and sound interpretation.
- **2:** Correct covariance/conditional and unit reasoning with a minor integral or numerical error.
- **1:** Partial formulas but confuses scale with variance, fails to transform slope prior/covariance, or treats LKJ concentration as measured evidence.
- **0:** No coherent positive-definite covariance or conditional/unit argument.

Accept quadrature for the tail with its normalization check, or polynomial integration. Do not require an LKJ marginal formula beyond dimension two.
<!-- end:adv.multivariate_hierarchy.1 -->

<!-- begin:adv.multivariate_hierarchy.2 -->
### adv.multivariate_hierarchy.2 — Reuse one draw for one new catchment {#adv.multivariate_hierarchy.2}

#### Worked answer

Use $A=\begin{pmatrix}1&-1\\1&2\end{pmatrix}$ and one vector b for this catchment. Means are $(1.500000,1.200000)$. Conditional on this hyperparameter draw,

$$\operatorname{Cov}(Ab)=A\Sigma A^T=\begin{pmatrix}.28&.34\\.34&.76\end{pmatrix},\quad
\operatorname{Cov}(Y)=\begin{pmatrix}.37&.34\\.34&.85\end{pmatrix}.$$

The variance of the noisy difference is $.37+.85-2(.34)=.540000$; the latent difference variance is .36. The common intercept cancels in a within-catchment difference, leaving $3b_1$ plus two independent noise terms. Independent effect vectors per reading instead give diagonal latent covariance (.28,.76), diagonal noisy covariance (.37,.85), and noisy difference variance 1.220000. Marginal variances look correct while the joint prediction is wrong.

For each posterior hyperparameter draw, draw a new b once per new catchment and reuse it at all its covariates. For an observed catchment, reuse its learned posterior b, not a fresh population draw; retain its joint dependence with population parameters. With uncertain hyperparameters, average the conditional covariance and add covariance of the conditional mean vectors (law of total covariance). The one-snapshot matrices alone do not include that second term. Compare groups at matched q/design if attributing uncertainty differences to observed versus new status.

Six catchments provide little independent information about the covariance distribution. Many measurements near each group's center estimate intercepts more directly than slopes; repetitions do not create six hundred independent group effects. The within coefficient concerns departures from a catchment's mean and the between coefficient concerns different catchment means. Neither is automatically causal or equal to the other. A broad correlation interval spanning both signs does not establish zero correlation; small MCSE only estimates the broad posterior accurately if diagnostics are sound.

Before x=2 predictions, inspect each catchment's within support and whether q=.4 is represented; quantify extrapolation. Inspect scale/correlation prior predictive consequences and posterior sensitivity, including weak slope identification, and use held-out catchments with relevant covariates for predictive criticism where possible. Accept other substantive checks of observation noise, protocol or scientific transportability. Distinguish absent information from a sampling failure.

#### Rubric

- **3:** Correct means, both covariance constructions and difference variances; exact existing/new draw reuse and hyperparameter uncertainty; explains weak identification and within/between contrast with two relevant checks.
- **2:** Correct shared-effect construction and substantive interpretation with a minor covariance calculation or checking omission.
- **1:** Some correct marginal predictions but independent effects within one group, missing hyperparameter uncertainty, or a strong-correlation claim from small MCSE.
- **0:** No valid joint prediction or conditioning/group distinction.

Accept analytic linear transforms or a checked simulation with Monte Carlo uncertainty; matching only marginal variances is insufficient.
<!-- end:adv.multivariate_hierarchy.2 -->

<!-- begin:adv.multivariate_hierarchy.3 -->
### adv.multivariate_hierarchy.3 — Execute and audit a coordinate repair {#adv.multivariate_hierarchy.3}

#### Worked answer

Set $X$ to the two-by-two matrix of ones, $R=.015^2I$, and $S$ to the given prior covariance. Completing the square gives $V=(S^{-1}+X^TR^{-1}X)^{-1}$ and $m=VX^TR^{-1}y$. Independently conditioning the joint Gaussian of b and y gives $m=SX^T(XSX^T+R)^{-1}y$ and $V=S-SX^T(XSX^T+R)^{-1}XS$. Both yield

$$m=(.4515735553,.1583439739)^T,\quad
V=\begin{pmatrix}.03398473764&-.03390145563\\-.03390145563&.03393065841\end{pmatrix}.$$

The exact mean of b0+b1 is .6099175292; its variance is .00011248479. Individual coefficients are much less determined than their sum because both observations have x=1. With $b=m+Lz$, change of variables multiplies the b density by $|L|$. Since $|V|=|L|^2$ and the quadratic becomes $z^Tz$, the normalized density becomes standard bivariate normal. Dropping the Jacobian would give the wrong normalized density, although the constant cancels in this fixed-L Metropolis acceptance ratio.

The complete executable reference functions `repair_reference()` and `execute_repair()` live in the answer-bearing `scripts/verify_expansion_assessments.py`. They implement the specified random streams, iteration order, retained rejections and original/repair runs, then use ArviZ's rank R-hat, bulk/tail ESS and mean MCSE. They do not reuse A09's fitted draws. A genuine reference execution produced the following rounded values; the source-bound current report retains every estimand, chain acceptance, full retained draws and output hashes. Do not require bitwise identical diagnostics across library versions; recompute screens from the actual diagnostics and preserve deviations.

| Run / estimand | Mean | SD | R-hat | Bulk ESS | Tail ESS | Mean MCSE |
|---|---:|---:|---:|---:|---:|---:|
| Original b0 | .442103 | .192513 | 1.064313 | 45.007 | 106.414 | .028874 |
| Original b1 | .167746 | .192612 | 1.065444 | 44.441 | 110.342 | .029022 |
| Original sum | .609849 | .010917 | 1.008626 | 872.519 | 690.620 | .000368 |
| Repaired b0 | .443131 | .188459 | 1.005018 | 1286.676 | 2003.432 | .005250 |
| Repaired b1 | .166797 | .188467 | 1.005121 | 1274.421 | 2016.956 | .005274 |
| Repaired sum | .609928 | .010719 | 1.003715 | 1468.103 | 2436.170 | .000279 |

Original retained acceptance rates are (.07225,.07250,.06950,.07300); repaired rates are (.59150,.60375,.58800,.58925). The original fails and the repair passes the declared screens. Every mean in **both** runs is within five of its own MCSEs of the exact value. That agreement does not certify the failing original run. The code performs no HMC steps and must not fabricate divergence counts, BFMI or tree depth.

One defensible memo (the ledger/code are separate from the word count) is:

“The two calibration readings constrain the sum of intercept and slope tightly because both covariates equal one. The individual coefficients remain strongly negatively correlated. In the original coordinates, an isotropic random-walk proposal frequently crosses the narrow direction and is rejected, while movement along the long direction is slow. The observed acceptance rates are about seven percent. Both coefficient R-hats exceed 1.06, bulk ESS is below 46, and mean MCSE exceeds .028. The sum behaves much better, but its precision cannot certify exploration of the separate coefficients.

I retained the original run and changed coordinates using the exact posterior Cholesky factor. I also used the prespecified proposal step of .9 in standardized coordinates, compared with .12 in coefficient units. This is a combined coordinate-and-proposal intervention: it does not isolate their separate effects. The transformed density includes the constant Jacobian, and mapping draws back preserves the same Gaussian target. No observation, prior or likelihood was changed. All four chains and all retained rejections remained in the ledger.

The repaired run has acceptance near .59, R-hats below 1.006, bulk and tail ESS above the declared thresholds, and each mean MCSE below .006. It passes the local screens and agrees with exact posterior means within five MCSEs. The original means also meet that comparison because their Monte Carlo uncertainty is large; this does not override their failed diagnostics. Posterior coefficient SD near .18 is scientific uncertainty under this fixture, distinct from mean MCSE.

These results support this computational repair for a known two-dimensional Gaussian target. They do not prove universal convergence or validate the unknown covariance model. The actual A09 hierarchy additionally needs genuine centered/noncentered fit evidence, HMC-specific diagnostics, prior and posterior predictive criticism, group-level identification and estimand precision/sensitivity checks. BFMI and divergences are inapplicable to this Metropolis run. I report the failed original alongside the successful intervention rather than presenting the repair as new scientific information.”

#### Rubric

- **3:** Exact posterior and Jacobian checks, both genuinely executed four-chain runs with complete reproducible ledger, correctly recomputed diagnostics/screens/MCSE comparisons, and a reasoned memo distinguishing coordinate/proposal repair, target, uncertainty and limitations. Honest persistent failures with sound re-evaluation can earn full credit.
- **2:** Correct target-preserving intervention and actual original/repair evidence, with a minor diagnostic, ledger, derivation or memo omission that does not conceal a failure.
- **1:** Some correct derivation or executed evidence, but a missing run, materially incomplete diagnostics, unadjusted target change, or treating exact-mean agreement as overriding failed exploration.
- **0:** No genuine execution evidence or valid diagnosis, fabricated outcomes, or discarded adverse chains presented as a successful repair.

The reviewer evaluates code, evidence and reasoning, not a string match to the memo or the reference's fail/pass pattern. A wholly proposed repair without execution cannot earn 2 or 3. A correctly diagnosed failed repair can. Numerical checks of this key and rubric anchors do not automatically grade a learner or establish human inter-rater agreement.
<!-- end:adv.multivariate_hierarchy.3 -->
