
# Predictive Calibration and Case Studies

Preparation is the primary [Bayesian Inference course](#/books/bayesian/course-syllabus), probability with conditional expectation, and the preceding modeling chapter when one is listed. Computational algorithms continue in [MCMC Volume 1](#/books/mcmc/01-probability-computation).

This chapter continues [Predictive Experiments and Discrepancies](predictive-experiments-discrepancies.md), retaining its notation, model and observation protocol. Read that treatment before importing a displayed formula whose parameters were defined there.

## A correct fitted model can have nonuniform in-sample PIT

Consider the completely specified Bayesian joint experiment
theta~Normal(0,9), Y|theta~Normal(theta,1).
The posterior after one observation y is Normal(0.9y,0.9). A future independent measurement given theta has posterior predictive distribution Normal(0.9y,1.9).

For a genuinely new measurement from that joint model, applying its conditional predictive CDF gives a uniform PIT conditional on y. Now instead evaluate the fitted CDF at the same y used for fitting:
\[
U_{\rm in}(Y)=\Phi\left(\frac{0.1Y}{\sqrt{1.9}}\right).
\]
Under the prior-predictive experiment Y~Normal(0,10), the argument of Phi is Normal with variance 1/19, not one. Thus this in-sample PIT is concentrated near one half even though the prior and likelihood exactly generated the data.

This is an exact counterexample to importing a forecasting-uniformity theorem into an in-sample check. It uses a proper prior; the result is not caused by an improper flat-prior limit. The observation helped locate the fitted reference distribution before it was compared with itself.

A fixed-parameter frequentist repetition is yet another experiment. If theta is held at a particular unknown constant rather than drawn from the declared prior, the finite-sample Bayesian predictive law need not equal that experiment's conditional sampling law. State the probability model under which a calibration claim is made.

The familiar PIT shapes can also be derived rather than memorized. If Y is standard Normal but a forecast uses Normal(mu,sigma²), then
\[
P(U\le u)=\Phi\{\mu+\sigma\Phi^{-1}(u)\}.
\]
With mu=0, its density on the unit interval is
$\sigma\exp\{(1-\sigma^2)(\Phi^{-1}(u))^2/2\}$.
A predictive scale sigma<1 puts excess mass near the endpoints; sigma>1 concentrates the PIT near the center. A location shift makes the two sides asymmetric.

These formulas assume the stated Normal data-generating law and fixed forecast. Other mixtures of errors can produce similar histograms, and finite histograms fluctuate. A U-shape is a diagnostic clue about dispersion under a declared protocol, not a uniquely identified cause or a proof of model falsity.

## Data reuse changes the reference distribution

For a statistic T(y), the posterior predictive tail area is a function of the observed data:
\[
p_{\rm post}(y)=\int
P_\theta\{T(Y_{\rm rep})\ge T(y)\}\,p(\theta\mid y)\,d\theta.
\]
The same y sets the threshold and helps select the mixing distribution. There is no general reason for this random function of Y to be uniform under repetitions.

In the preceding one-observation Normal example, the upper-tail area for T(y)=y is one minus the in-sample PIT. Its distribution is therefore concentrated near one half. A correct model can produce systematically central posterior predictive tail areas. Large samples alone do not turn every such discrepancy into a calibrated frequentist p-value.

For a discrete statistic, atoms create another obstacle to uniformity even without parameter fitting. An inclusive upper-tail probability is generally superuniform in appropriate exact-test settings, not exactly uniform. Randomizing within a probability mass can create a uniform transform under the declared model, but a randomized test and a posterior-integrated fitted check still have different conditioning.

A value near one half consequently gives little global evidence of fit. It describes one statistic's location relative to one fitted replication distribution. Conversely an extreme finite value asks for inspection of that discrepancy and the data-generating assumptions; it does not logically force a unique new likelihood.

Model revision using training data is a normal part of exploratory analysis. The boundary is what is claimed afterward. Documenting a changed model and its in-sample checks is different from asserting untouched predictive performance. A final validation protocol should account for every preprocessing, feature-selection and model-selection step that used outcomes.

A model can be useful despite a known discrepancy for one purpose, and inadequate for another. Decide whether the missed feature affects the intended inference or decision. Tail behavior irrelevant to an average-cost calculation may be decisive for an extreme-risk decision. Predictive criticism becomes more informative when its discrepancy is connected to a use rather than to a universal pass/fail label.

## Choose existing-group and new-group replications explicitly

The shared eight-schools fixture models reported effect estimates:
\[
y_j\mid\theta_j\sim N(\theta_j,\sigma_j^2),\quad
\theta_j\mid\mu,\tau\sim N(\mu,\tau^2),
\]
with the exact eight y_j and known standard errors declared in [Hierarchical Population Models](hierarchical-population-models.md), mu~Normal(0,20²), and tau~HalfNormal(scale10). It contains one reported estimate per school. These are not individual pupil scores.

The upstream public sampler obtains independent collapsed-posterior (mu,tau) draws by a prior-envelope rejection scheme, then draws all eight theta_j from their exact conditional Normal distributions. The public predictive consumer is defined to take that producer's output under the exact declared protocol, with its provenance bound by the root execution record; it neither substitutes a different hierarchy nor labels the independent draws as a fitted NUTS run.

For another measurement of the same eight underlying effects, retain each posterior theta_j and simulate $y^{\rm rep}_j=\theta_j+\sigma_j\epsilon_j$. A parameter-dependent observation-level discrepancy is
$D(y,\theta)=\sum_j((y_j-\theta_j)/\sigma_j)^2$.
Use the same posterior theta vector on the observed and replicated sides.

Conditional on theta, the replicated standardized residuals are eight independent standard Normals, so Drep has a chi-squared distribution with eight degrees of freedom. Its mean is exactly eight. This supplies an analytic check of the replication code and a conditional tail probability chi2_8.sf(Dobs), which can be averaged to obtain a Rao-Blackwellized posterior tail estimate.

For eight new exchangeable schools measured with the same declared standard-error design, draw new effects theta_new,j=mu+tau z_j, then new reported estimates with those effects and the fixed sigma_j. This evaluates the population layer instead of reusing the fitted effects. The posterior uncertainty in mu and tau still travels jointly into every replicated vector.

Take the between-school statistic to be the divisor-seven sample variance of the eight reported estimates. Conditional on mu,tau its expectation is tau² plus the average sigma_j². In this fixture sum(sigma_j²)=1328, so that expectation is tau²+166. Heterogeneous measurement noise contributes to observed spread; the statistic is not a direct estimate of population tau² alone.

For the literal observed estimates, sum(y_j)=70 and sum(y_j²)=1376, giving sample variance 1527/14. These are hand-derived references, not a simulated tail area. The actual consumer reports the posterior-integrated upper-tail frequency and the replication-mean check against tau²+166 after execution.

An individual-pupil residual workflow needs additional information: actual within-school observations, their likelihood and design, within-school noise scales and any treatment/control structure. The eight standard errors do not recover that information. The original individual-level part of CBM-CLAIM-036 therefore remains an explicit sourced template, alongside the supplied reported-estimate and new-group checks. Summary-level replication does not silently discharge a pupil-level obligation.

## Quantify simulation uncertainty even when no replication exceeds

For fixed observed data and independent posterior draws, each complete posterior-predictive replication produces an independent Bernoulli indicator of the declared tail event. If K of S indicators equal one, K~Binomial(S,p_post). This reasoning requires independent replications from the intended posterior experiment, not merely S stored rows.

A nonzero estimate K/S has a familiar plug-in standard error sqrt(phat(1−phat)/S), but that approximation can misbehave near the boundary. Exact binomial inversion gives a more informative interval for rare events. It quantifies numerical uncertainty about a fixed model's tail probability; it is not a posterior credible interval for a scientific parameter.

With zero exceedances, the probability of that event at a proposed p is (1−p)^S. A one-sided 95-percent upper confidence limit therefore solves (1−p)^S=0.05:
\[
p_{\rm upper}=1-0.05^{1/S}.
\]
For S=30,000 it is approximately one in ten thousand, not zero. Reporting “zero of 30,000” retains the actual numerical evidence; reporting “the probability is zero” adds a conclusion the simulation did not establish.

Zero observed events also make the plug-in standard error zero. That is a failure of the local approximation, not exact knowledge. Report the event count, replication count, confidence construction and tail direction together. A parameter-dependent discrepancy still produces a Bernoulli event after the posterior draw and both discrepancy evaluations are specified.

Correlated posterior draws change the error calculation. Fresh independent Yrep noise at every MCMC draw does not remove correlation transmitted through theta. If q(theta)=P(Trep≥Tobs|theta), conditional independence of replicate noise makes correlations between different indicators depend on correlations of q(theta_t). The relevant long-run error belongs to this tail estimator, not automatically to a raw parameter's ESS.

More replications per posterior draw reduce conditional simulation noise, while leaving the posterior chain's low-frequency error. Under suitable stationary conditions, averaging R conditional replicates per theta changes the innovation contribution from E[q(1−q)] to E[q(1−q)]/R; the long-run covariance of q remains. When q is available analytically, averaging q itself removes that conditional noise.

The hierarchy residual check provides such a conditional reference through the chi-squared tail. Its independent accepted posterior draws permit ordinary Monte Carlo comparisons of the indicator and conditional-probability averages. Agreement within a declared Monte Carlo tolerance checks the implementation of the experiment; it does not make a central fitted PPC into a calibration certificate.

## Make criticism feed a documented modeling decision

A useful discrepancy record contains the observed statistic, the predictive replication design, the actual replicated distribution or summaries, the tail event, numerical uncertainty and a scientific interpretation. The model name and one tail probability are not enough to reproduce it.

For the count dossier, inspect the observed zero count, variance and maximum against each fitted model's replications. Compare the two proper Poisson priors to see how parameter uncertainty changes the result; compare the separately fitted Negative-Binomial model to see what an explicit observation-level dispersion mechanism changes. Do not attribute either comparison to an unexecuted generic replacement.

For the hierarchy, separate repeated measurements of known effects from new schools and individual-pupil predictions. A model could reproduce measurement-level residuals yet miss population spread, or do the reverse. Its adequacy should be described for each declared target and design.

If a discrepancy disappears under a prior change, examine which posterior feature moved and why that prior is plausible. If it persists across sensible priors, the likelihood or design may warrant attention. Persistence is useful diagnostic evidence, not a theorem that only one component can be responsible.

A sensitivity analysis chosen after seeing the result remains informative if labeled exploratory. Reusing the same data repeatedly while calling each new comparison an untouched external validation would be misleading. Where predictive performance is the goal, carry the entire modeling pipeline into the held-out or cross-validation procedure discussed next.

The workflow closes with an explicit claim boundary: describe what was learned about the declared data, model and replication target; record what has actually been computed; retain missing inputs or imported methods as such. A reproducible simulation improves the evidence available for criticism. It does not turn a finite check into a proof that a model will generalize to every future setting.

## Solutions: Forty-count predictive dossier

This is the public COMM06-CASE-03 reference. It instantiates the original Poisson-check objective with forty fixed unit-exposure observations. The literal data are printed in the executable listing; their frequency certificate is:

| count | 0 | 1 | 2 | 3 | 4 | 8 | 12 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| frequency | 12 | 8 | 6 | 5 | 4 | 3 | 2 |

There are forty entries, sum 99 and sum of squares 621. The observed mean is 99/40, the divisor39 sample variance is 5013/520, the zero count is 12 and the maximum is 12. This concrete data has variance-to-mean ratio 557/143; it is a specified case, not an assertion that the original illustrative “twice the mean” description printed this same dataset.

The primary model is conditionally iid Poisson(lambda), lambda>0, with proper Gamma(shape1,rate1) prior. Its posterior is Gamma(100,41). Each of 30,000 independent replications first draws one posterior rate and then forty conditionally independent counts sharing that rate.

The primary discrepancy is the inclusive upper tail of sample variance. To preserve ties exactly, the implementation compares the integer quantity 40 sum(yrep_i²)−sum(yrep_i)² with 15039. Both variance denominators are 40 times 39. It also reports upper tails for zero count at least 12 and maximum at least12; these are separate features, not independent tests.

The proper-prior sensitivity model keeps the same likelihood but uses Gamma(20,10), giving posterior Gamma(119,50). This hypothetical prior is both more concentrated and centered differently; the report does not label it a pure concentration change or a uniquely justified domain prior. It receives its own independent 30,000-replication stream.

The separately fitted alternative is Negative-Binomial with fixed r=2 and success parameter p, proper Beta(3,3) prior and posterior Beta(83,102). It also receives 30,000 complete posterior-integrated replications. Its likelihood convention, support and posterior are derived above. No generic Negative-Binomial replacement is credited with a result before this actual program is run, and r=2 is a declared reference choice rather than a fitted optimal dispersion.

All three models use the same observed sample-variance, zero-count and maximum definitions. For every event the output includes exceedance count, replication count, estimate and binomial simulation-error bounds. If no replication exceeds, the one-sided 95-percent upper limit is 1−0.05^(1/30000); neither a zero probability nor a zero-error claim is made.

The known-rate Poisson(2) randomized-PIT experiment is separate. It generates 30,000 new observations and randomizers from its stated seed, with no posterior fit. Its uniform moment references and finite KS regression tolerances check that synthetic forecasting protocol, not the calibration of the fitted forty-count posterior.

### Descriptive count-case rubric

Preserve all forty observations, unit exposures, rate-versus-scale conventions, priors, posterior parameters, support and the shared-parameter replication design. Compare the integer discrepancy before converting it to a displayed variance. Report every actual event count, including zeroes, and identify the independent-replication assumption behind its numerical uncertainty.

Check analytic predictive means, expected within-replicate variances and zero fractions against Monte Carlo estimates with their reported independent-draw MCSEs. A difference of several MCSEs asks for investigation; the reporting rule is not a theorem that a random finite run must pass. Keep prior sensitivity separate from the fitted likelihood alternative.

Inspect residual discrepancies in the alternative too. Do not rank models by closeness of a PPC tail area to one half, claim an improvement was observed before execution, or turn the known-rate PIT control into fitted-model calibration. Any claim about external predictive performance needs its own validation protocol.

## Solutions: Posterior predictive count listing

This no-input program uses the exact pinned existing Python/NumPy/SciPy environment and prints one bounded canonical JSON report. The primary and known-rate seeds preserve the declared historical design, but no historical output is reused as current execution evidence. The prior and likelihood alternatives have independent declared streams. Array shapes are fixed; an integer-safety violation aborts rather than clipping a generated count.


The complete computational listing remains in the [original source companion](retained-source-predictive-criticism.md). Its mathematical assumptions and analytical reference calculations remain part of the present treatment; the listing is supplied source, not executed evidence.

## Solutions: Shared hierarchy predictive dossier

The local case COMM06-HIERARCHY-PPC consumes the public primary output of COMM06-HIERARCHY-03, fixture CBM-HIERARCHY-EIGHT-SCHOOLS-HN10-MU20-v1. It does not redeclare the producer case or replace its posterior. The exact data are y=(28,8,−3,7,−1,1,18,12), sigma=(15,10,16,11,9,11,10,18), with known standard errors in reported-effect units.

The producer uses proper mu~Normal(0,20²), tau~HalfNormal(scale10) and theta_j|mu,tau~Normal(mu,tau²), with y_j|theta_j~Normal(theta_j,sigma_j²). Its collapsed-prior-envelope rejection sampler returns 4,000 accepted posterior draws, no adaptive warmup, then exact conditional Normal effect draws. The primary hyperparameter and conditional-effect seeds are 2,026,110,403 and 2,026,110,404. A separate changed-prior output may be present, but this consumer explicitly uses the primary HN10 posterior only.

The observation-level check here means another reported estimate of each existing latent school effect. For every supplied theta vector, independently simulate eight measurement errors using the known sigma_j. Compare the same standardized residual-sum discrepancy on y and its replicate, with the same theta vector on both sides. Its conditional chi-squared-eight tail supplies a Rao-Blackwell reference in addition to the direct simulated event count.

The new-school check draws eight new effects from Normal(mu,tau²) at each posterior draw, then new reported estimates under the same fixed standard-error design. The upper-tail discrepancy is their divisor-seven sample variance, compared with the observed 1527/14. Its conditional mean is tau²+166, an analytic replication check. This is a population-layer predictive question about new reported effects, not an individual-pupil prediction.

The consumer also standardizes the supplied posterior theta values by their exact conditional Normal means and variances. Their zero/one moment references check the conditional-generation part of the upstream record. They do not replace the producer's independent quadrature validation of the collapsed hyperparameter posterior.

### Descriptive hierarchy-case rubric

Keep all eight observations, all standard errors, proper priors and the actual posterior sampler/settings intact. Verify that the input is the primary target, not its tau-prior sensitivity case, and retain the upstream root artifact/receipt bindings. Chronological MCMC chains are not fabricated from these independent accepted draws.

Report both direct and conditional-probability residual tails with independent-draw Monte Carlo uncertainty, the paired difference between them, and the chi-squared mean check. For new groups, report the observed and replicated spread and its paired conditional-mean check. Do not infer model adequacy from a central tail area or infer a unique cause from an extreme one.

Label the observation unit as a reported school-effect estimate. Do not claim pupil-level residual checks, within-school raw observations, a fitted NUTS run or hierarchical held-out calibration. Those are distinct data and algorithm requirements. Record every observed reproduction failure rather than replacing its output with an analytic reference.

## Solutions: Shared hierarchy predictive listing


The complete computational listing remains in the [original source companion](retained-source-predictive-criticism.md). Its mathematical assumptions and analytical reference calculations remain part of the present treatment; the listing is supplied source, not executed evidence.

## Hierarchical predictive scope and evidence contract

The exact original CBM-CLAIM-036 locator is predictive-criticism.md:73. The following source dispositions preserve its interpretation.

| Part of the workflow | Supplied source reference | Evidence boundary |
| --- | --- | --- |
| Reported-estimate observation level | Existing-effect measurement replicates with standardized residual discrepancy and analytic chi-squared reference | Requires actual upstream posterior and consumer runs |
| Population/new-group level | New effects and new reported estimates with the same known-SE design; variance reference tau²+166 | A fitted posterior PPC, not held-out calibration |
| Individual-pupil/raw-score level | Explicit template below | Missing raw data/design are not inferred from eight summaries |
| Production hierarchy HMC diagnostics | Chapter7 production diagnostic template | Rejection draws supply no NUTS tree/divergence record |

To instantiate an individual-level template, provide actual within-school observations, group membership, the measurement or treatment/control likelihood, predictors/design, within-group scales and complete proper priors. Fit that declared model; simulate replicated individual outcomes conditional on existing group effects, and new group effects when that is the target; compare residual and group discrepancies under the actual observation units. None of these missing inputs is reconstructed from a reported effect and its standard error.

Thus the supplied measurement/new-group consumer remains a real implementation obligation, while the unavailable raw-score part is explicitly template_scope. Neither is silently substituted for the other, and no current execution or whole-book readiness follows from this table alone.

## Earlier worked questions

The original question identities, statements and complete answers remain in [the original complete exercise companion](retained-source-predictive-criticism.md). The further exercises below supply the present chapter’s staged practice.


## References: Predictive experiments and case boundaries

The conditional PIT proofs, fitted Normal counterexample, conjugate predictive formulas, covariance/variance calculations and simulation-error derivations are supplied here. Posterior-integrated discrepancy definitions and their model-building use are checked against [Gelman, Meng and Stern, 1996](https://www3.stat.sinica.edu.tw/statistica/j6n4/j6n41/j6n41.htm). The shared hierarchy is the exact proper-prior fixture and posterior protocol in Chapter3, not a flat-prior historical fit or a new toy. Chapter7 supplies the estimand-specific MCMC error boundary when posterior draws are correlated; Chapter9 keeps genuinely held-out prediction and model-comparison targets separate. Actual source-bound execution receipts remain distinct from all mathematical expected values.

## Worked applications

### Worked example 1: shared parameter in five replications

Five counts at exposure one sharing one uncertain rate have a correlated joint predictive law. Drawing five independent posterior rates instead removes their common covariance and understates uncertainty in their sum.

### Worked example 2: an exact normal PIT

For a continuous observation with known correct conditional CDF $F$, $F(Y)$ is uniform under that law. Replacing $F$ by a data-fitted posterior predictive CDF for the same observation changes the conditioning argument.

### Worked example 3: a binomial simulation count

For one thousand independent replications, an indicator average has variance $p(1-p)/1000$. The same formula is not justified merely by a sample size of one thousand dependent chain states.

## Further exercises

### Exercise 101
<a id="predictive-calibration-case-studies-ex-101"></a>

Why must PIT calibration distinguish in-sample from held-out predictions?

<details>
<summary>Hint 1</summary>

The fitted distribution used the observation.

</details>
<details>
<summary>Hint 2</summary>

The usual transform theorem assumes the correct fixed conditional CDF.

</details>
<details>
<summary>Solution</summary>

Using an observation to fit its own predictive law changes the distribution of its transformed value. Uniformity for a known conditional law does not automatically transfer to an in-sample fitted transform.

</details>

### Exercise 102
<a id="predictive-calibration-case-studies-ex-102"></a>

Compute variance of the mean of m independent Bernoulli discrepancy indicators.

<details>
<summary>Hint 1</summary>

Use independent variance addition.

</details>
<details>
<summary>Hint 2</summary>

Each variance is p times one minus p.

</details>
<details>
<summary>Solution</summary>

The variance is $p(1-p)/m$. It refers to independent replicates of the same probability event; dependence or changing kernels needs another calculation.

</details>

### Exercise 103
<a id="predictive-calibration-case-studies-ex-103"></a>

Why is posterior rate redrawing per count a changed joint model?

<details>
<summary>Hint 1</summary>

Counts originally share one latent rate.

</details>
<details>
<summary>Hint 2</summary>

Covariance disappears under independent redrawing.

</details>
<details>
<summary>Solution</summary>

It can preserve individual predictive marginals while changing their dependence. Joint sums, maxima and repeated-group discrepancies can then have the wrong distribution.

</details>

### Exercise 104
<a id="predictive-calibration-case-studies-ex-104"></a>

How should simulation uncertainty enter a predictive comparison?

<details>
<summary>Hint 1</summary>

Separate the model probability from its estimated average.

</details>
<details>
<summary>Hint 2</summary>

State replication independence.

</details>
<details>
<summary>Solution</summary>

Report an appropriate uncertainty analysis for the computed functional under its simulation scheme. A precise-looking fraction alone does not establish numerical accuracy or model adequacy.

</details>

### Exercise 105
<a id="predictive-calibration-case-studies-ex-105"></a>

Why can a check of group means miss within-group dependence?

<details>
<summary>Hint 1</summary>

A mean is only one summary.

</details>
<details>
<summary>Hint 2</summary>

Different covariance structures can match it.

</details>
<details>
<summary>Solution</summary>

Models can share group-mean expectations while differing in serial or clustered variation. Use discrepancies that target the dependence relevant to the scientific prediction.

</details>

### Exercise 106
<a id="predictive-calibration-case-studies-ex-106"></a>

Can a prior change and a likelihood change be combined as one sensitivity result?

<details>
<summary>Hint 1</summary>

They alter different model components.

</details>
<details>
<summary>Hint 2</summary>

Compare separately when attribution matters.

</details>
<details>
<summary>Solution</summary>

They can be explored jointly, but a changed conclusion then cannot be attributed to either alone. Record each model and the target so the source of sensitivity is visible.

</details>

### Exercise 107
<a id="predictive-calibration-case-studies-ex-107"></a>

Why does one posterior draw represent a joint state?

<details>
<summary>Hint 1</summary>

Parameters can be correlated.

</details>
<details>
<summary>Hint 2</summary>

Independent marginal replacement loses that law.

</details>
<details>
<summary>Solution</summary>

A joint draw retains posterior relationships needed for nonlinear predictions and contrasts. Sampling each marginal independently generally changes those functions' distributions.

</details>

### Exercise 108
<a id="predictive-calibration-case-studies-ex-108"></a>

What can an exact predictive reference establish?

<details>
<summary>Hint 1</summary>

Compare the same stated functional.

</details>
<details>
<summary>Hint 2</summary>

Its scope is finite and model-specific.

</details>
<details>
<summary>Solution</summary>

It establishes the analytical target for that model and data protocol. Agreement with it does not prove every implementation path, alternative model or future dataset correct.

</details>

### Exercise 109
<a id="predictive-calibration-case-studies-ex-109"></a>

Why retain observation and replication units in a case report?

<details>
<summary>Hint 1</summary>

Units determine dependence and inclusion.

</details>
<details>
<summary>Hint 2</summary>

A row is not always an independent event.

</details>
<details>
<summary>Solution</summary>

Without those definitions, the likelihood and predictive experiment are ambiguous. Record group sharing, exposure and observation selection before interpreting discrepancy counts.

</details>

### Exercise 110
<a id="predictive-calibration-case-studies-ex-110"></a>

Does failure to see a mismatch prove the model adequate?

<details>
<summary>Hint 1</summary>

A check has limited power and scope.

</details>
<details>
<summary>Hint 2</summary>

Unexamined features can still fail.

</details>
<details>
<summary>Solution</summary>

No. Compatibility for selected summaries and data is bounded evidence. State the features checked and the important predictions or mechanisms not distinguished by them.

</details>

## Summary

Predictive Calibration and Case Studies develops the declared probability model, target and mathematical comparisons in the sections above. Keep support, observation mechanisms, conditional information and numerical approximation distinct. The original complete source remains available as a companion, with all original questions and computational listings preserved.
