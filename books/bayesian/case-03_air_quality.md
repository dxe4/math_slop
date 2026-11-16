# Case 03 — Predict air quality at an omitted monitoring site

**Public learner brief · C03 · expansion draft pending human review.** Prerequisites:
A09 (including computational repair), L10/L11, A03 and A05. Plan 8–12 hours,
including 2–3 hours of temporal instruction below. Prerequisite study is extra.
This case adds no scorebook exercise or learner-state field.

How well can we predict an eligible daily PM2.5 measurement at an omitted
Beijing monitoring site, given its recorded wind and concurrent measurements
at ten other sites? Your target is **historical conditional prediction** in
2016. Smoothing may use later measurements from the other sites within that
year. It cannot support a future forecast, resident exposure estimate or
causal wind effect. State exactly what would be available at prediction time.

## Data, units and access

Use the included frozen offline `data/beijing_2016_daily.csv`, released after
the reference evaluation. For an unexposed learner analysis, use only
the training partition and the permitted weather/eligibility table until your
plan is frozen. A hash identifies a version; it does not prevent access.
If you have already seen final concentrations or reference scores, record that
exposure and call subsequent work development. Repeating this published case
does not create a new unseen evaluation.

The [official UCI dataset](https://archive.ics.uci.edu/dataset/501/beijing+multi+site+air+quality+data)
is *Beijing Multi-Site Air Quality*, Chen (2017), DOI
[10.24432/C5RK5G](https://doi.org/10.24432/C5RK5G). Air quality comes from the
Beijing Municipal Environmental Monitoring Center; weather from the China
Meteorological Administration is matched to the nearest weather station.
The hourly source spans March 2013–February 2017, twelve monitoring sites,
and records missing values as `NA`. The adaptation selects calendar 2016.
Credit and changes are in the [CC BY 4.0 notice](../../downloads/bayesian/data/licenses/beijing_CC_BY_4.md).
No endorsement is implied.

The complete daily grid has 366 dates × 12 sites. Each row retains `station`,
`date`, `n_hours`, `n_pm25`, `n_wspm`, `n_pair`, `pm25_ug_m3`, `wspm_m_s`,
`eligible_18`, `eligible_24`, and `split`. `n_pair` counts hours with both
measurements; both means use precisely those paired hours. Concentration is
in µg/m³ and wind in m/s. Base eligibility requires at least 18 paired hours;
the sensitivity requires all 24. Preserve all dates and ineligible rows.
Use the source calendar; a timezone conversion has not been established.

These means summarize available measurements, not an error-free full day's
exposure. Completeness can depend on weather or pollution; a complete-case
analysis is not a missing-data correction. Weather matching can induce shared
measurement error. Do not infer coordinates or adjacency from station names.
Check uniqueness, support, counts and missingness before a log transform.
Zero is an observed concentration, not missingness: never drop it or add an
unreported offset to fit a log model.

## C03.T1 — Distinguish four kinds of uncertainty

Let $z_{jt}=\log(c_{jt}/c_{\rm ref})$, with $c_{\rm ref}=1\,\mu\mathrm{g/m^3}$.
A proposed observation model is

$$z_{jt}=\alpha+\beta x_{jt}+\gamma_s S_t+\gamma_c C_t
          +b_{0j}+b_{1j}x_{jt}+u_t+\epsilon_{jt},\qquad
\epsilon_{jt}\sim N(0,\sigma_y^2).$$

Standardize wind using only eligible base-training rows, with population SD.
Reuse those constants in every comparison. Center annual sine and cosine
over all 366 calendar days, not over the available observations. Compare a
pooled model with $b_j=0$ to a hierarchy $b_j\sim N_2(0,\Sigma)$ with
learned intercept/slope covariance.

The shared process is

$$u_0\sim N\!\left(0,\frac{\sigma_u^2}{1-\phi^2}\right),\qquad
u_t\mid u_{t-1}\sim N(\phi u_{t-1},\sigma_u^2),\quad -1<\phi<1.$$

Initial-state uncertainty is the distribution of $u_0$; state uncertainty
remains after observing noisy training measurements; parameter uncertainty
concerns $\phi,\sigma_u,\sigma_y$ and the regression/hierarchy; observation
uncertainty adds a new residual. At an omitted site, integrate a new station
effect as well. These sources must reach prediction, even if states are
analytically marginalized during fitting. Drawing one independent station
effect every day loses within-site dependence. Trajectories need one effect
vector per site and one shared state path per posterior draw.

Checkpoint: draw a diagram showing which quantities are shared across two
sites on one day and across two days at one site. Explain which uncertainty
disappears if you predict the latent state rather than a new measurement.

## C03.T2 — Learn and check a bounded temporal model

Estimate persistence, innovation SD and residual SD. One convenient stationary
parameterization sets $a_u=\sigma_u/\sqrt{1-\phi^2}$, so

$$u_0\sim N(0,a_u^2),\qquad \sigma_u=a_u\sqrt{1-\phi^2}.$$

A prior on $a_u$ induces a prior on innovation SD; it is not an independent
prior on $\sigma_u$. Record which you use. The latent process has zero
population mean, with no extra free level or trend. Proper priors do not make
its realized path orthogonal to the intercept or annual pair. Inspect their
posterior dependence and vary persistence, state amplitude and seasonal
priors using training data. Interpret a poorly identified decomposition with
care. Stationarity is an assumption to criticize, not a proof of adequacy.

For a day with $n_t$ residual observations, let $\bar r_t$ and $SS_t$
be their mean and within-day sum of squares, and write $R=\sigma_y^2$.
Conditional on the state, the exact likelihood contribution can be factored as

$$N(\bar r_t\mid u_t,R/n_t)
\exp\!\left[-\frac{n_t-1}{2}\log(2\pi R)
-\frac12\log n_t-\frac{SS_t}{2R}\right].$$

Retain the second factor when learning residual scale. For no observations,
perform a state transition and no observation update. Start from the stationary
variance. A Kalman filter integrates the Gaussian states; a smoother conditions
on the full training year; conditional forward-filter/backward-sampling (FFBS)
recovers joint paths. Never substitute a smoothed point path as observed data.

Before real fits, compare a tiny normalized dense Gaussian likelihood with the
filter, including gaps, repeated observations per day, $\phi=0$, very small
process noise and an intentionally wrong initial variance. Then integrate a
tiny unknown-scale posterior over a stated bounded domain with refined
independent quadrature and compare actual sampler estimands within MCSE.
Agreement at one fixed parameter vector cannot certify posterior integration.

Use prior trajectories and multiplicative effects to inspect assumptions.
After fitting, check stationwise residual autocorrelation using adjacent
calendar days, dispersion and skewness against replicated training data.
Keep diagnostics distinct: R-hat, ESS, divergences, tree depth and MCSE assess
numerical evidence; posterior predictive discrepancies assess the model.

### Worked synthetic bridge: from a filter to learned scales {#worked-synthetic-bridge-from-a-filter-to-learned-scales}

The following small calculation uses invented, dimensionless residuals, with
known regression mean zero. It is separate from Beijing and from the protected
reference solution. On day 0 observe residuals 0 and 1; day 1 is entirely
missing; on day 2 observe 0.5. We will learn three parameters
$\theta=(\phi,\sigma_u,\sigma_y)$ and predict a new measurement on day 3.
There are no station effects in this fixture. Start with A05's Gaussian
conditioning and L04's normalized posterior; the steps below connect them.

**First retain the whole likelihood.** For observations $r_1,\ldots,r_n$ on
one day, expand the quadratic as

$$\sum_i(r_i-u)^2=SS+n(\bar r-u)^2.$$

Thus the product of $n$ normal densities is
$(2\pi R)^{-n/2}\exp[-SS/(2R)-n(\bar r-u)^2/(2R)]$.
Dividing this expression by the normal density of $\bar r$, whose variance
is $R/n$, gives exactly the second factor above. The factor includes
$n^{-1/2}$, not $n^{1/2}$. Dropping $SS/(2R)$ would throw away the difference
between the two day-0 measurements, which is evidence about residual noise.
For $n=1$ the extra factor is one. For $n=0$ neither factor is evaluated.
Our daily sufficient statistics are $(n,\bar r,SS)=(2,.5,.5)$, no observations,
and $(1,.5,0)$.

**Next work one parameter component.** Set
$(\phi,\sigma_u,\sigma_y)=(.5,.5,.5)$ temporarily, so $Q=R=.25$.
Initialize the day-0 state with mean zero and variance $P_0^-=Q/(1-\phi^2)=1/3$.
For a nonempty day, let $S_t=P_t^-+R/n_t$ and $K_t=P_t^-/S_t$.
Add $\log N(\bar r_t\mid m_t^-,S_t)$ and the retained within-day log factor
to the log likelihood. Then update

$$m_t=m_t^-+K_t(\bar r_t-m_t^-),\qquad P_t=(1-K_t)P_t^-.$$

Propagate every subsequent calendar day with
$m_{t+1}^-=\phi m_t$ and $P_{t+1}^-=\phi^2P_t+Q$.
Here $K_0=8/11$, giving $m_0=4/11$ and $P_0=1/11$.
Day 1 has no update: its mean is $2/11$ and variance $3/11$.
Propagating again to day 2 gives mean $1/11$, variance $7/22$;
the day-2 gain is $14/25$, and the updated mean and variance are **0.32 and
0.14**. Skipping the missing date would give the wrong transition and
covariance. Equivalently, a two-day transition has coefficient $\phi^2$
and innovation variance $Q(1+\phi^2)$. The component log likelihood, including
all constants, is **−3.157505826**. The day-3 measurement distribution for
this component is $N(.16,.535)$; .535 includes new observation noise.

**Now learn the parameters instead of fixing them.** For an exact, small
example, assign independent equal prior mass to $\phi\in\{0,.5\}$,
$\sigma_u\in\{.5,1\}$ and $\sigma_y\in\{.5,1\}$. This is a stated finite
prior with eight equally likely atoms, not an approximation to the Beijing
prior. Run the same filter at each atom. If its log likelihood is $\ell_k$,
then

$$\log Z=\operatorname{logsumexp}_k(\ell_k-\log8),\qquad
w_k=\exp(\ell_k-\log8-\log Z).$$

| $(\phi,\sigma_u,\sigma_y)$ | Log likelihood | Posterior probability |
|---|---:|---:|
| $(0,.5,.5)$ | −3.156587 | .198756 |
| $(0,.5,1)$ | −3.587787 | .129137 |
| $(0,1,.5)$ | −3.791816 | .105304 |
| $(0,1,1)$ | −4.048529 | .081462 |
| $(.5,.5,.5)$ | −3.157506 | .198573 |
| $(.5,.5,1)$ | −3.629350 | .123880 |
| $(.5,1,.5)$ | −3.939068 | .090885 |
| $(.5,1,1)$ | −4.171947 | .072004 |

The probabilities sum to one before rounding and $\log Z=-3.620349415$.
They differ from the prior probabilities 1/8: the data have updated
persistence and both scales. None of these components alone represents the
posterior. The [synthetic calculation](../../downloads/bayesian/scripts/temporal_teaching.py)
reproduces this table using the independent dense covariance

$$\operatorname{Cov}(r_i,r_j\mid\theta)=
\frac{Q}{1-\phi^2}\phi^{|t_i-t_j|}+R\,\mathbf1\{i=j\}.$$

Repeated measurements on day 0 share a state but have distinct residuals.
Comparing this normalized three-observation density with the filter tests the
within-day factor, initial variance and missing-day transition together.

**Integrate parameter uncertainty into prediction.** If component $k$ gives
day-3 measurement mean $a_k$ and variance $v_k$, the predictive distribution
is $\sum_kw_kN(a_k,v_k)$. Draw one parameter atom from $w$, then a state/path
conditional on that atom and the data, then new observation noise. Do not
plug posterior mean parameters into a single filter. In this bounded,
Gaussian teaching model the predictive mean is **0.073039837** and

$$\operatorname{Var}(r_3\mid r)=
\underbrace{\sum_kw_kv_k}_{1.096467561}
+\underbrace{\sum_kw_k(a_k-\bar a)^2}_{.006708116}
=1.103175678.$$

These dimensionless residual moments exist in this finite example. They do
not establish physical concentration moments for the unbounded scale mixtures
in C03.T3. For a predictive quantile, invert the weighted sum of component
CDFs; averaging the component quantiles is not the required operation.

**Move to continuous scales with a bounded reference.** As a separate model,
use independent normalized uniforms on $\phi\in[-.2,.8]$,
$\sigma_u\in[.3,1.2]$, $\sigma_y\in[.4,1.1]$.
The posterior density is $p(\theta\mid r)=L(r\mid\theta)p(\theta)/Z$, where
$Z$ is the three-dimensional integral of the numerator. Map Gauss–Legendre
nodes from $[-1,1]$ into each interval. For each axis the transformation
Jacobian times its uniform density gives quadrature weights $w_i/2$.
Multiply the three axis weights by the likelihood and normalize using
log-sum-exp. Omitting the weights, or placing a uniform prior on log SD
without its Jacobian, computes a different posterior.

The script computes quadrature orders 12, 24 and 40 per axis. At order 40,
$\log Z=-3.607293025$, the day-3 mean is **0.086354994**, and variance is
**1.125938004**. Order 12 to 24 changes these by less than $5\times10^{-12}$;
24 to 40 changes them by less than $2\times10^{-15}$ here. Refinement is an
error check for this smooth, bounded fixture, not a universal guarantee.
A sampler targeting this same bounded model can be compared with these
posterior estimands using predeclared MCSE tolerances. This validates a small
unknown-scale integration problem; it does not certify the larger hierarchy.

**Recover states jointly.** Filtering on day 1 used only day 0; smoothing
also uses day 2. At the fixed component above, smoothed day-1 mean/variance
are **.28 and .24**, different from $2/11$ and $3/11$.
For FFBS, first draw $u_2\sim N(m_2,P_2)$, then step backward with

$$J_t=\frac{P_t\phi}{P_{t+1}^-},\qquad
u_t\mid u_{t+1},r_{0:t},\theta\sim
N\left(m_t+J_t(u_{t+1}-m_{t+1}^-),\ P_t-J_t^2P_{t+1}^-\right).$$

The draw of $u_{t+1}$ is shared with the previous step. For this component,
$\operatorname{Cov}(u_1,u_2\mid r)=.06$; independently drawing each smoothed
marginal would incorrectly make that covariance zero. With learned parameters,
choose one posterior parameter draw and use it for the entire path, then
propagate to day 3 and add residual noise. For C03's omitted sites, the
additional station-effect vector is also shared across that site's days.
These Gaussian recursions are developed further in Särkkä and Svensson's
[Bayesian Filtering and Smoothing](https://users.aalto.fi/~ssarkka/pub/bfs_book_2023_online.pdf),
particularly its linear filtering, smoothing and parameter-estimation chapters.

### Scaffolded checkpoint with changed givens

In a new synthetic panel observe residuals **−.2 and .6 on day 0**, no data
on day 1, and **.8 on day 2**. Retain the eight-atom prior above. Work in a
blank script before consulting the numerical helper.

1. Construct the three daily counts, means and within-day sums of squares.
   Explain which factor of the likelihood is lost if you retain means alone.
2. At $(.5,.5,.5)$, initialize with the stationary variance, update day 0,
   propagate through the empty day and update day 2. Record each mean and
   variance; variances must remain nonnegative.
3. Repeat the log-likelihood calculation at all eight atoms. Normalize the
   probabilities, then check them against a separately constructed dense
   three-observation Gaussian density. State the tolerance before comparing.
4. Form the day-3 mixture CDF and its median. Keep the parameter atom fixed
   within each simulated path. Compare the resulting day-1/day-2 covariance
   with the covariance obtained by independently drawing smoothed marginals.
5. Replace the finite prior with the stated continuous bounded prior. Compare
   orders 12/24/40 before using it as a sampler reference. Explain why neither
   this exercise nor a fixed-parameter match establishes Beijing adequacy.

Use the operations above to complete starter steps 3–4. If Gaussian
conditioning, log-sum-exp or array axes are unfamiliar, return to A05, L04
and APP04 first. These checkpoints have no scorebook IDs or mastery updates.

## C03.T3 — Protect the final sites and define the scores

The two sites selected by a hash of identifiers are **Dongsi and Guanyuan**.
Keep them fixed. Their weather and eligibility flags are permitted; their
concentrations cannot update transformations, priors, states or models. Develop
with the other ten sites; any model selection by validation stays inside them.

Before either final site's outcomes or scores are inspected, freeze all four
comparisons: pooled base, hierarchical base, hierarchical covariance-prior
alternative and hierarchical completeness alternative. Freeze numerical priors,
transforms, seeds, sampler, eligibility, metrics and failure rules as well.
Seal every candidate's predictions before the single final comparison. Keep
unfavourable results. Any subsequent score-informed repair is development and
requires fresh outer validation for a new performance claim.

Use **posterior predictive mixture medians**, equal-tailed 90% marginal
predictive intervals and marginal log predictive densities in numerical µg/m³.
For component log means $m_r$ and variances $v_r$, solve

$$\frac1M\sum_r\Phi\!\left(\frac{q_p-m_r}{\sqrt{v_r}}\right)=p,
\qquad c_p=c_{\rm ref}\exp(q_p),\quad p\in\{.05,.5,.95\}.$$

Neither exponentiating the average log concentration nor averaging component
medians gives the mixture median. Unbounded scale priors can produce infinite
physical mixture moments even when every conditional lognormal has finite
moments. Finite simulated averages do not establish existence of a mean.
Report empirical MAE and RMSE **of the predictive median** on the finite test
set. They do not establish finite posterior expected loss or Bayes optimality.

Report native eligible rows site by site, then all four models on the identical
common station/date intersection. Include all denominators, interval widths,
coverage and numerical precision. Marginal intervals are not simultaneous
trajectory bands; sums of marginal log scores are not a joint trajectory
density. Days share states and sites share fitted parameters. Do not report
independent-day standard errors or infer a population of sites from two cases.
Numerical MCSE is separate from predictive uncertainty and external validity.

An eligible nonpositive outcome is a model-support failure; unexpected missing
eligible input is an integrity failure. Preserve the row and mark unavailable
aggregates explicitly. Failed sampler or prescore precision checks keep the
outcomes sealed. Failed observed-score precision must be reported without
score-informed refitting.

## Deliverable and anchored rubric

Start from the [answer-free worksheet](./case-03_air_quality_starter.md) and a blank
script. Submit your frozen plan, runnable analysis, independent fixture,
diagnosis/repair ledger, prior and posterior checks, all four comparisons,
an accessible figure, exposure/assistance log, and a memo of at most 250 words.
The reference budget target is 5–20 minutes for a fit and at most 60 minutes
for all four, including cold setup, diagnostics and scoring; RAM ≤2 GB and
retained evidence ≤100 MB, excluding raw archive/environment. Measure these
costs. Targets are not observations and do not justify fewer chains or draws.

Use the capstone dimensions below. Within each, 0 means absent or invalid;
1 means a consequential omission; 2 meets the stated evidence anchor; 3 adds
a justified sensitivity or independently checked consequence. Multiply the
dimension's weight by level/3. These are case review anchors, not new exercises.

| Dimension | Weight | Level 2 anchor | Level 3 anchor |
|---|---:|---|---|
| Question, target and data | 15 | States historical omitted-site target, units, eligibility and support audit | Explains how weather availability and paired missingness limit transfer |
| Models and priors | 20 | Same temporal structure in both models; proper initial law and meaningful priors | Checks concentration implications and seasonal/state competition |
| Computational reliability | 15 | Independent normalized fixture, four-chain diagnostics and estimand MCSE | Unknown-scale integration and documented diagnosis/intervention/recheck |
| Criticism and validation | 20 | Training temporal PPC and one sealed grouped final comparison | Interprets failures and all native/common sitewise results without selective reporting |
| Decision and sensitivity | 20 | Reports covariance-prior and completeness alternatives | Separates changed population from model sensitivity and limits any operational recommendation |
| Communication and reproducibility | 10 | Runnable offline code, hashes, costs, accessible figure and qualified memo | Clear exposure chronology and honest uncertainty/failure account |

A wrong target, leaked evaluation treated as unseen, or unsupported computation
requires revision regardless of the total. A well-supported diagnosis of an
inadequate model can earn high criticism marks. Numerical success alone cannot
establish environmental adequacy or authorize deployment.

<!-- tutor-reference:start -->
After your attempt, explicitly request the protected
[worked solution](./case-03_air_quality_solution.md). The reference lab
`labs/24_case_air_quality.py` and its notebook, result and figure contain
answers; they belong outside ordinary tutor retrieval and learner exports.
<!-- tutor-reference:end -->
