# Supplemental and advanced question bank

These 80 original optional problems comprise 52 supplemental problems (four per core lesson) and 28 advanced problems (18 in A01–A06, four in A07 and three each in A08–A09). Attempt a problem before requesting its two progressive hints or consulting the instructor solution bank. The foundation route keeps its original assessments; these additions do not alter course grade weights or progression. Difficulty labels describe intended challenge, not measured completion time. Normal distributions use variance as their second mathematical argument unless SD is explicitly named; executable library calls state their scales. All supplied reports and decision packets are hypothetical unless a source explicitly records execution.

## Lesson 0

<!-- begin:extra.0.1 -->
### extra.0.1 — Reverse a quality-control table {#extra.0.1}

Objectives: L00.O4, L00.O2 · Difficulty: introductory · Type: numerical · Optional practice.

A shipment contains 30% refurbished and 70% new devices. Conditional defect probabilities are 0.12 and 0.02 respectively. Treat these probabilities as known and the groups as exhaustive. Construct the four-cell table of joint probabilities for group and defect status. Find the marginal defect probability and the probability a defective device is refurbished. Explain which population supplies each denominator.
<!-- end:extra.0.1 -->

<!-- begin:extra.0.2 -->
### extra.0.2 — Variance in a mixed arrival process {#extra.0.2}

Objectives: L00.O4 · Difficulty: intermediate · Type: derivation · Optional practice.

A monitoring period uses mode A with probability 1/4 and mode B with probability 3/4. Given mode A, the event count $Y$ is Poisson(2); given B it is Poisson(6). You may use that a Poisson($\lambda$) count has mean and variance $\lambda$. Derive the law of total variance for this model by explaining why the cross term vanishes. Evaluate $E(Y)$, the within-mode and between-mode variance contributions, and $\operatorname{Var}(Y)$. Is Poisson with the marginal mean an equivalent model?
<!-- end:extra.0.2 -->

<!-- begin:extra.0.3 -->
### extra.0.3 — Repair the batch axis {#extra.0.3}

Objectives: L00.O5, L00.O3 · Difficulty: intermediate · Type: coding · Optional practice.

The intended experiment is 4,000 independent batches, each containing 30 independent Bernoulli(0.4) trials. Diagnose this code and replace it with runnable NumPy logic:

```python
rng = np.random.default_rng(7003)
x = rng.binomial(1, .4, size=(4000, 30))
batch_count = x.sum(axis=0)
estimated_parameter = batch_count.mean()
```

Return the batch-count vector, its sample mean and sample variance, and a separate estimate of the fixed success probability. State the theoretical count moments, a five-standard-error tolerance for the count mean, and why a count variance is not posterior uncertainty in the probability. Do not demand exact equality from one random seed.
<!-- end:extra.0.3 -->

<!-- begin:extra.0.4 -->
### extra.0.4 — Two seeds, one estimand {#extra.0.4}

Objectives: L00.O5, L00.O1 · Difficulty: introductory · Type: conceptual · Optional practice.

Two independent simulations each use 10,000 Bernoulli trials with fixed success probability 0.08. Their estimated probabilities are 0.076 and 0.084. Explain in 100–150 words whether this disagreement establishes a bug, estimate the standard error of each estimate and of their difference, and distinguish adding simulated trials from collecting new scientific data. Assume the two random streams are independent; the estimates are supplied hypothetical results.
<!-- end:extra.0.4 -->

## Lesson 1

<!-- begin:extra.1.1 -->
### extra.1.1 — Two-stage evidence for three mechanisms {#extra.1.1}

Objectives: L01.O4, L01.O2 · Difficulty: intermediate · Type: numerical · Optional practice.

Mutually exclusive, exhaustive mechanisms H1, H2, H3 have priors (0.5, 0.3, 0.2). Their probabilities of event A are (0.2, 0.6, 0.8). Their probabilities of B given A are (0.9, 0.5, 0.25). Calculate the posterior table after A and after A and B. Calculate $P(A)$ and $P(B\mid A)$ and verify the final posterior by a single joint update. Do not assume A and B are conditionally independent.
<!-- end:extra.1.1 -->

<!-- begin:extra.1.2 -->
### extra.1.2 — Odds and support {#extra.1.2}

Objectives: L01.O4 · Difficulty: intermediate · Type: derivation · Optional practice.

Let H and its complement have prior probabilities $\pi$ and $1-\pi$, and likelihoods $\ell_1=P(E\mid H)$ and $\ell_0=P(E\mid H^c)$. Derive posterior odds and log odds when all quantities needed are positive. Then analyse $\pi=0$, $\ell_0=0$ with $\pi\ell_1>0$, and zero total evidence. Can finite positive likelihood evidence revive a hypothesis given exactly zero prior mass?
<!-- end:extra.1.2 -->

<!-- begin:extra.1.3 -->
### extra.1.3 — Correlated reports {#extra.1.3}

Objectives: L01.O5, L01.O3 · Difficulty: intermediate · Type: diagnosis · Optional practice.

A fault has prior probability 0.2. The first report A is positive with probability 0.75 under a fault and 0.25 without a fault. Given that A was positive, report B is positive with probability 0.8 under a fault and 0.4 without a fault. Calculate the posterior after two positive reports. An analyst instead treats the reports as independent copies with likelihoods 0.75 and 0.25; calculate that shortcut's posterior. Also calculate the posterior if B is literally a copy of A. Identify what evidence each calculation uses.
<!-- end:extra.1.3 -->

<!-- begin:extra.1.4 -->
### extra.1.4 — Communicate a changed screening population {#extra.1.4}

Objectives: L01.O5, L01.O1 · Difficulty: introductory · Type: communication · Optional practice.

A detector has sensitivity 0.9 and false-positive probability 0.03. In the general population prevalence is 0.005; in a referred population it is 0.10. Assuming the detector's conditional performance transfers unchanged, calculate positive predictive probability in both populations. Write an 80–120-word message explaining why the original positive predictive probability should not be quoted to referred users and name an assumption to check. These are hypothetical screening probabilities, not guidance about a real medical test.
<!-- end:extra.1.4 -->

## Lesson 2

<!-- begin:extra.2.1 -->
### extra.2.1 — Normalisation and beta moments {#extra.2.1}

Objectives: L02.O4, L02.O2 · Difficulty: intermediate · Type: derivation · Optional practice.

For $a,b>0$, let $p(\theta)=C\theta^{a-1}(1-\theta)^{b-1}$ on $0<\theta<1$. Using $B(a,b)=\int_0^1 t^{a-1}(1-t)^{b-1}dt=\Gamma(a)\Gamma(b)/\Gamma(a+b)$ and $\Gamma(x+1)=x\Gamma(x)$, derive C, $E(\theta)$, $E(\theta^2)$ and $\operatorname{Var}(\theta)$. Explain why a density unbounded at an endpoint can still be proper. Evaluate mean and variance for $a=2,b=5$.
<!-- end:extra.2.1 -->

<!-- begin:extra.2.2 -->
### extra.2.2 — Skewness and odds summaries {#extra.2.2}

Objectives: L02.O4, L02.O1 · Difficulty: intermediate · Type: numerical · Optional practice.

A posterior is Beta(1,4). Find its mean, median and central 90% equal-tail interval, using its analytic CDF or a checked numerical routine. Transform the interval to odds $r=\theta/(1-\theta)$. Compare odds at the posterior mean with posterior mean odds; the latter can be obtained by integrating $r p(\theta)$. Which probability estimate minimises squared loss and which absolute loss? Explain whether transforming a highest-density interval generally preserves its highest-density property.
<!-- end:extra.2.2 -->

<!-- begin:extra.2.3 -->
### extra.2.3 — Unequal cells need unequal masses {#extra.2.3}

Objectives: L02.O5, L02.O3 · Difficulty: intermediate · Type: coding · Optional practice.

Approximate Beta(2,3) using cells with edges `[0, .1, .3, .6, .8, 1]` and their midpoints. The faulty code is `w = beta.pdf(mid, 2, 3); w /= w.sum()`. Repair it, preferably using log weights, and report normalised cell masses, approximate mean and $P(\theta>0.6)$. Compare with exact references and explain why the cutoff is convenient here. Refine every original cell into 100 equal subcells and show improved accuracy. Supply runnable code; do not reinterpret density heights as probabilities.
<!-- end:extra.2.3 -->

<!-- begin:extra.2.4 -->
### extra.2.4 — All failures, all successes {#extra.2.4}

Objectives: L02.O5 · Difficulty: intermediate · Type: diagnosis · Optional practice.

Compare independent analyses of five trials with either zero or five successes under priors Beta(1,1) and Beta(2,8). Give a four-row table of posterior distributions and next-trial success probabilities. Diagnose the claim “all successes prove the rate is one, and a uniform prior means no prior assumptions.” Explain support and why these proper priors do not assign a point mass at an endpoint.
<!-- end:extra.2.4 -->

## Lesson 3

<!-- begin:extra.3.1 -->
### extra.3.1 — Integrate a shared future probability {#extra.3.1}

Objectives: L03.O4, L03.O2 · Difficulty: intermediate · Type: derivation · Optional practice.

Given data, $\theta\sim\operatorname{Beta}(a,b)$ with positive shapes. Conditional on one shared $\theta$, let $X_1,\ldots,X_m$ be independent Bernoulli trials and $K=\sum X_j$. Derive the marginal mass of K and explain why it sums to one. Derive $\operatorname{Cov}(X_i,X_j)$ for $i\ne j$ and $\operatorname{Var}(K)$, separating within-parameter and between-parameter variation. Evaluate the moments for a=2, b=3, m=4.
<!-- end:extra.3.1 -->

<!-- begin:extra.3.2 -->
### extra.3.2 — Two superficially similar simulators {#extra.3.2}

Objectives: L03.O4, L03.O1 · Difficulty: intermediate · Type: coding · Optional practice.

Simulate 100,000 four-trial batches under two models: A draws one Beta(2,3) probability per batch; B draws a fresh independent Beta(2,3) probability per trial. Use seed 7302. Write runnable code, identify each array axis and compare the count mean and variance in each model with analytic targets. Use mean tolerance 0.03 and variance tolerance 0.04, and explain these as generous simulation checks rather than guarantees. Why is B inappropriate for uncertainty about a single common probability?
<!-- end:extra.3.2 -->

<!-- begin:extra.3.3 -->
### extra.3.3 — Elicit an observable extreme {#extra.3.3}

Objectives: L03.O5 · Difficulty: intermediate · Type: numerical · Optional practice.

Before observing data, an engineer says that an eight-component batch, sharing one unknown reliability, should contain either zero or eight successes with probability below 0.05. Compare the prior predictive extreme probability under Beta(1,1) and Beta(10,10). Both priors have mean reliability 1/2. Calculate the probabilities exactly or with a beta-binomial routine; say which is consistent with the stated constraint and what the constraint does not establish.
<!-- end:extra.3.3 -->

<!-- begin:extra.3.4 -->
### extra.3.4 — Explain a three-action choice {#extra.3.4}

Objectives: L03.O5, L03.O3 · Difficulty: intermediate · Type: communication · Optional practice.

A machine is healthy, worn or critical with posterior probabilities (0.5, 0.3, 0.2). Losses in cost units are given below and already include all relevant consequences. Calculate expected loss for each action, choose a risk-neutral action and write an 80–120-word explanation. Find the largest uniform replacement loss at which replacement is weakly preferred, holding the other rows fixed.

| Action | Healthy | Worn | Critical |
|---|---:|---:|---:|
| Continue | 0 | 6 | 30 |
| Inspect and respond | 3 | 4 | 8 |
| Replace now | 5 | 5 | 5 |
<!-- end:extra.3.4 -->

## Lesson 4

<!-- begin:extra.4.1 -->
### extra.4.1 — Predict counts over a new exposure {#extra.4.1}

Objectives: L04.O4, L04.O2 · Difficulty: intermediate · Type: derivation · Optional practice.

Given data, an event rate per hour has posterior $\lambda\sim\operatorname{Gamma}(a,b)$ in shape-rate form, with $a,b>0$. A future count over t hours is conditionally Poisson($t\lambda$). Integrate out the rate to derive $P(K=k)$, identifying a negative-binomial convention explicitly. Derive its mean and variance and evaluate them for a=3, b=2 hours, t=4 hours. Explain the extra variance and the units of b and t.
<!-- end:extra.4.1 -->

<!-- begin:extra.4.2 -->
### extra.4.2 — Change rate coordinates without changing predictions {#extra.4.2}

Objectives: L04.O4, L04.O1 · Difficulty: intermediate · Type: numerical · Optional practice.

An hourly rate $\lambda$ has Gamma(4,2) shape-rate posterior. Define the rate per minute $r=\lambda/60$ and $z=\log(\lambda/(1\text{ event/hour}))$, with the reference unit implicit in numerical formulas. Give both transformed densities, including Jacobians. Compute the mean and variance of the count in 30 minutes using either rate coordinate, and numerically check $P(\lambda<3)=P(r<0.05)=P(z<\log3)$. State how you would check normalisation of the log-rate density.
<!-- end:extra.4.2 -->

<!-- begin:extra.4.3 -->
### extra.4.3 — Uncertain scale changes the mean posterior {#extra.4.3}

Objectives: L04.O5, L04.O3 · Difficulty: intermediate · Type: diagnosis · Optional practice.

Measurements are (2,4,4,6) in metres. Assume independent Normal($\mu,\sigma^2$) observations and the improper joint prior $p(\mu,\sigma^2)\propto1/\sigma^2$ with respect to $d\mu\,d\sigma^2$. Compare the integrated posterior for $\mu$ with a plug-in analysis that uses a flat prior on $\mu$ and treats the sample variance as a known observation variance. Give centres, scales, posterior variances and central 90% intervals. State when the integrated posterior is proper and when its mean and variance exist. Explain why “the standard errors match” would not justify identical intervals.
<!-- end:extra.4.3 -->

<!-- begin:extra.4.4 -->
### extra.4.4 — Check square completion by quadrature {#extra.4.4}

Objectives: L04.O5 · Difficulty: intermediate · Type: coding · Optional practice.

Let $\mu\sim\operatorname{Normal}(1,2)$, where 2 is the variance, and observations be 2 and 5 with known independent observation variance 2. Derive the posterior and the predictive distribution for one new measurement. Independently normalise a dense grid of the original prior-times-likelihood and check posterior mean and variance within 0.001 and posterior 5%/95% quantiles within 0.003. Provide runnable code and explain grid truncation/refinement. Why would evaluating only the derived posterior density be a weaker check?
<!-- end:extra.4.4 -->

## Lesson 5

<!-- begin:extra.5.1 -->
### extra.5.1 — Precision for a rare posterior event {#extra.5.1}

Objectives: L05.O4, L05.O2 · Difficulty: intermediate · Type: numerical · Optional practice.

In 50,000 independent posterior draws, exactly 100 satisfy a policy event. Estimate its probability and Monte Carlo standard error. Based on that pilot estimate, how many independent draws in total would target MCSE 0.0001? State the finite-variance/independence assumptions and explain why observing zero event hits would not prove zero event probability or provide a reliable zero-MCSE estimate. Separate precision of this computation from adequacy of the model.
<!-- end:extra.5.1 -->

<!-- begin:extra.5.2 -->
### extra.5.2 — Self-normalised importance weights {#extra.5.2}

Objectives: L05.O4 · Difficulty: intermediate · Type: derivation · Optional practice.

A proposal q covers the support of an unnormalised target $\tilde p$. Derive the self-normalised importance estimate for $E_p[h(X)]$ using draws from q. For raw weights (1,2,1,6) and corresponding h-values (0,1,2,4), calculate the estimate and weight ESS $(\sum w)^2/\sum w^2$. Explain finite-sample bias, conditions for consistency, and why a respectable weight ESS would not reveal a completely missed target tail.
<!-- end:extra.5.2 -->

<!-- begin:extra.5.3 -->
### extra.5.3 — A jump-chain counterexample you can enumerate {#extra.5.3}

Objectives: L05.O5, L05.O3 · Difficulty: advanced · Type: coding · Optional practice.

The target on states {0,1} is $\pi=(0.9,0.1)$. A Metropolis proposal always proposes the other state. Construct the exact transition matrix and verify stationarity. Starting at 0 with seed 7503, simulate 200,000 transitions, storing both every resulting state and only accepted moves. Compare each sample's fraction of ones with its theoretical target; use absolute tolerance 0.01 for the full chain. Provide runnable reference logic and explain why keeping repeated states is essential. No burn-in deletion is required for this long illustrative run, but discuss its initialisation limitation.
<!-- end:extra.5.3 -->

<!-- begin:extra.5.4 -->
### extra.5.4 — Choose precision for the estimand {#extra.5.4}

Objectives: L05.O5, L05.O1 · Difficulty: intermediate · Type: diagnosis · Optional practice.

Two hypothetical sampler reports for the same target give means 0.60 and 0.60, posterior SD 0.10 in each, and mean ESS 4,000 and 400. For event $\theta>0.8$, they report probabilities 0.025 and 0.060 with indicator MCSE 0.003 and 0.020. A decision uses whether that probability exceeds 0.04. Write a diagnostic memo: calculate mean MCSEs, assess what mean agreement establishes, and propose checks and a stopping criterion for the event probability. No traces or acceptance rates are supplied; do not invent them.
<!-- end:extra.5.4 -->

## Lesson 6

<!-- begin:extra.6.1 -->
### extra.6.1 — One Hamiltonian step {#extra.6.1}

Objectives: L06.O4 · Difficulty: intermediate · Type: derivation · Optional practice.

Work in dimensionless coordinates with target $q\sim N(0,1)$, momentum mass 1, kinetic energy $p^2/2$, initial q=1 and p=0.5, and step size $\epsilon=0.4$. Derive and calculate one leapfrog step, including both half-momentum updates. Compute initial/final Hamiltonians, their difference and the Metropolis correction probability. Explain why the correction is needed even though the exact Hamiltonian flow conserves energy.
<!-- end:extra.6.1 -->

<!-- begin:extra.6.2 -->
### extra.6.2 — A missing Jacobian on a log coordinate {#extra.6.2}

Objectives: L06.O4, L06.O2 · Difficulty: intermediate · Type: diagnosis · Optional practice.

A positive rate has Gamma(3,2) density proportional to $\lambda^2 e^{-2\lambda}$. For $z=\log\lambda$, two proposed unnormalised log densities are A: $2z-2e^z$ and B: $3z-2e^z$. Select the correct one, derive its gradient, and identify the rate distribution obtained if A were used as the density with respect to dz. Explain when adding a manual Jacobian to a library's automatically transformed positive random variable would count it twice.
<!-- end:extra.6.2 -->

<!-- begin:extra.6.3 -->
### extra.6.3 — Validate a new fit against an exact target {#extra.6.3}

Objectives: L06.O5, L06.O3 · Difficulty: advanced · Type: coding · Optional practice.

Use prior Beta(3,5) and observe four successes in ten independent trials with one shared probability. Write a runnable four-chain PyMC fit with at least 1,000 warmup and 1,000 retained draws per chain, sequential cores and fixed seed 7603. Derive exact posterior mean and central 90% interval, and exact mean/variance of a future 12-trial count. Report this fit's own R-hat, bulk/tail ESS, divergences and mean MCSE when run; specify checks for numerical agreement and replicate the future count. Explain why exact-reference agreement does not establish scientific adequacy. A design-only submission must label unexecuted outputs explicitly.
<!-- end:extra.6.3 -->

<!-- begin:extra.6.4 -->
### extra.6.4 — Two kinds of model review {#extra.6.4}

Objectives: L06.O5, L06.O1 · Difficulty: intermediate · Type: communication · Optional practice.

A hypothetical waiting-time fit reports four chains, maximum R-hat 1.002, minimum bulk ESS 1,800, minimum tail ESS 1,200 and zero divergences. Mean MCSE is small relative to the decision's required precision. However, its normal posterior predictive distribution puts 18% probability below zero, and every observed wait is positive. Write a 120–180-word review with separate computational and modelling conclusions, one targeted predictive check and two concrete possible revisions. Do not claim access to traces, data or a fresh run beyond this packet.
<!-- end:extra.6.4 -->

## Lesson 7

<!-- begin:extra.7.1 -->
### extra.7.1 — A two-coefficient Gaussian update {#extra.7.1}

Objectives: L07.O4, L07.O2 · Difficulty: advanced · Type: derivation · Optional practice.

Let $y\mid\beta\sim N(X\beta,I_3)$ and $\beta\sim N(0,I_2)$, with

$$X=\begin{pmatrix}1&0\\1&1\\1&2\end{pmatrix},\qquad y=\begin{pmatrix}1\\2\\2\end{pmatrix}.$$

Derive the general Gaussian precision update from square completion and calculate this posterior's precision, covariance and mean. Give all matrix dimensions. Check the mean by solving the precision system and explain why off-diagonal covariance matters for prediction. Use linear solves in numerical code rather than a matrix inverse as the default algorithm.
<!-- end:extra.7.1 -->

<!-- begin:extra.7.2 -->
### extra.7.2 — Where a regression line is precise {#extra.7.2}

Objectives: L07.O4, L07.O1 · Difficulty: intermediate · Type: numerical · Optional practice.

The joint posterior mean of intercept and slope is (2,1), with covariance $V=\begin{pmatrix}1&-0.4\\-0.4&0.25\end{pmatrix}$. Observation SD is fixed at 0.6. At x=0 and x=2 calculate the posterior mean response, variance of that mean and variance of a new individual response. Compare with the erroneous calculation that discards coefficient covariance. Explain why individual and mean intervals answer different questions. Assume a Gaussian coefficient posterior and normal independent observation noise.
<!-- end:extra.7.2 -->

<!-- begin:extra.7.3 -->
### extra.7.3 — A scaled prior is a joint prior {#extra.7.3}

Objectives: L07.O5 · Difficulty: intermediate · Type: coding · Optional practice.

A regression uses $z=(x-10)/2$, with independent priors $\alpha_z\sim N(5,4)$ and $\beta_z\sim N(0,1)$; second arguments are variances. Derive the joint prior of original-scale coefficients in $\alpha+\beta x$. Give its mean/covariance and write NumPy code verifying prediction equality for x=(6,10,14) on the same 10,000 prior draws, seed 7703. Explain why retaining independent original-scale priors with the transformed marginal variances would change the model.
<!-- end:extra.7.3 -->

<!-- begin:extra.7.4 -->
### extra.7.4 — Curvature, collinearity and extrapolation {#extra.7.4}

Objectives: L07.O5, L07.O3 · Difficulty: intermediate · Type: diagnosis · Optional practice.

A linear model is trained with x between 0 and 2. Average residuals in low, middle and high x bins are respectively +2, −4 and +2 response units. A second predictor has sample correlation 0.998 with x; the two slope posteriors are broad and strongly negatively correlated, though within-range predictions are stable. The client requests prediction at x=5. Write a diagnosis and evaluation plan addressing all three facts. State what additional information you need; the bin means and correlation alone do not justify selecting a final model or claiming a causal effect.
<!-- end:extra.7.4 -->

## Lesson 8

<!-- begin:extra.8.1 -->
### extra.8.1 — Standardise on the probability scale {#extra.8.1}

Objectives: L08.O4, L08.O1 · Difficulty: intermediate · Type: derivation · Optional practice.

For binary response y, treatment indicator a and stratum indicator z, let $p(a,z)=\operatorname{logit}^{-1}(-2+0.8a+2z)$. Derive the Bernoulli likelihood for independent observations $(y_i,a_i,z_i)$ conditional on the coefficients. A target population has weights 0.75 in z=0 and 0.25 in z=1. Calculate standardised risks under a=0 and a=1 and their difference. Compare with applying the inverse logit to the average linear predictor. Explain what extra assumptions a causal interpretation would require; coefficients here are supplied fixed values.
<!-- end:extra.8.1 -->

<!-- begin:extra.8.2 -->
### extra.8.2 — Exposure and extra-Poisson variation {#extra.8.2}

Objectives: L08.O4, L08.O2 · Difficulty: intermediate · Type: numerical · Optional practice.

A log rate is $\log\lambda=\log2+x\log1.5$, in events per hour. Two records both have x=1 but exposures 2 and 5 hours. Counts follow a negative-binomial model with mean $\mu=t\lambda$ and dispersion $\phi=4$, defined by $\operatorname{Var}(Y\mid\mu,\phi)=\mu+\mu^2/\phi$. Calculate rate, both means and variances and the corresponding Poisson variances. Write the log-mean with its offset. Explain why exposure should not be treated as another freely estimated slope in this specified model.
<!-- end:extra.8.2 -->

<!-- begin:extra.8.3 -->
### extra.8.3 — A separated likelihood tail {#extra.8.3}

Objectives: L08.O5 · Difficulty: intermediate · Type: diagnosis · Optional practice.

Four binary observations have x=(-2,−1,1,2) and y=(0,0,1,1). Fit $P(y_i=1)=\operatorname{logit}^{-1}(\beta x_i)$ with intercept fixed at zero. Show what happens to the likelihood as $\beta\to+\infty$ and diagnose a proposal to use a flat prior on $\beta$ “because four perfectly classified observations identify the slope.” Compare proper Normal(0,$2.5^2$) and Normal(0,$25^2$) priors qualitatively. Propose a prior predictive and posterior sensitivity check; no sampled numeric output is required.
<!-- end:extra.8.3 -->

<!-- begin:extra.8.4 -->
### extra.8.4 — Association under treatment selection {#extra.8.4}

Objectives: L08.O5, L08.O3 · Difficulty: intermediate · Type: conceptual · Optional practice.

A service gives extra support to users judged especially likely to struggle. Some of that judgement is recorded as a difficulty score, but staff also see unrecorded circumstances. A logistic regression adjusting for the score estimates a negative support coefficient with a narrow posterior. State a defensible conclusion about association and explain why this does not establish that support harms completion. Define a useful causal target and describe a design or additional assumptions that could identify it. Address overlap and the difference between offering and receiving support.
<!-- end:extra.8.4 -->

## Lesson 9

<!-- begin:extra.9.1 -->
### extra.9.1 — Shrinkage includes uncertainty {#extra.9.1}

Objectives: L09.O4, L09.O2 · Difficulty: intermediate · Type: derivation · Optional practice.

A group mean has prior $\alpha\sim N(\mu,\tau^2)$ and n observations conditionally independent $N(\alpha,\sigma^2)$, with all hyperparameters fixed. Derive the conditional posterior mean and variance and its shrinkage weight. Evaluate for $\mu=10$, $\tau^2=4$, $\sigma^2=9$, n=3 and sample mean 13. Describe limits as n tends to infinity and as $\tau^2$ tends to zero, and what fixing hyperparameters leaves out.
<!-- end:extra.9.1 -->

<!-- begin:extra.9.2 -->
### extra.9.2 — Two observations in an unseen group {#extra.9.2}

Objectives: L09.O4, L09.O3 · Difficulty: intermediate · Type: numerical · Optional practice.

Given training data, $\mu\sim N(10,1)$; fixed between-group variance is $\tau^2=4$ and individual variance $\sigma^2=9$. A new group intercept is $\alpha_g=\mu+u_g$, with independent $u_g\sim N(0,4)$, independent of $\mu$. New outcomes are $Y_{gj}=\alpha_g+\epsilon_{gj}$ with independent $\epsilon_{gj}\sim N(0,9)$. Calculate each outcome's mean/variance, covariance of two outcomes in the same new group, covariance in two distinct new groups, and variance of their average in both cases. Explain how a joint simulation must share latent draws.
<!-- end:extra.9.2 -->

<!-- begin:extra.9.3 -->
### extra.9.3 — Many rows, few groups {#extra.9.3}

Objectives: L09.O5, L09.O1 · Difficulty: intermediate · Type: diagnosis · Optional practice.

Three centres each contribute 500 measurements with known observation SD 1 metre. Their sample means are 9.8, 10.1 and 10.4 metres. Model centre means as independent $N(\mu,\tau^2)$ given hyperparameters, with $\mu\sim N(10,2^2)$ and either $\tau\sim\operatorname{HalfNormal}(0.2)$ or $\operatorname{HalfNormal}(2)$, in metres. An analyst says the 1,500 rows make the scale prior irrelevant. Diagnose that claim and design a prior/posterior sensitivity report for the mean in a fourth, unseen centre. State the exchangeability assumption and avoid claiming either prior is proven by these summaries.
<!-- end:extra.9.3 -->

<!-- begin:extra.9.4 -->
### extra.9.4 — Equivalent hierarchies, different coordinates {#extra.9.4}

Objectives: L09.O5 · Difficulty: advanced · Type: coding · Optional practice.

At fixed $\mu=2$, $\tau=0.5$, $\sigma=1$, consider J=3 latent group means and one observation per group y=(1,2,4). The centred model uses $\alpha_j\sim N(\mu,\tau^2)$; the noncentred model uses $z_j\sim N(0,1)$ and $\alpha_j=\mu+\tau z_j$. Derive their equality as distributions, including the Jacobian, and write a NumPy/SciPy check of joint log-density equality at z=(−1,0,2). Verify simulated prior moments using seed 7904 and 100,000 draws with 0.01 tolerance for mean and variance. Explain why equivalence does not imply identical sampler efficiency when scales become unknown.
<!-- end:extra.9.4 -->

## Lesson 10

<!-- begin:extra.10.1 -->
### extra.10.1 — Four exact leave-one-out scores {#extra.10.1}

Objectives: L10.O4 · Difficulty: intermediate · Type: numerical · Optional practice.

Four independent Bernoulli observations sharing one probability are y=(1,1,1,0), with prior Beta(1,1). Calculate the leave-one-out posterior for each held-out row, its held-out predictive mass and its natural log score. Sum the four log scores. Contrast with evaluating these same rows under the full-data posterior predictive distribution. State the predictive unit and why this tiny example does not establish broad model adequacy.
<!-- end:extra.10.1 -->

<!-- begin:extra.10.2 -->
### extra.10.2 — Why leave-one-out weights become unstable {#extra.10.2}

Objectives: L10.O4, L10.O2 · Difficulty: advanced · Type: derivation · Optional practice.

Assume $p(y\mid\theta)=\prod_j p(y_j\mid\theta)$, proper full and leave-one-out posteriors, and positive held-out likelihood on the relevant leave-one-out support. Derive the ratio $p(\theta\mid y_{-i})/p(\theta\mid y)$ and a self-normalised importance estimate of a leave-one-out expectation using full-posterior draws. Derive an identity for $p(y_i\mid y_{-i})$ involving $E_{\theta\mid y}[1/p(y_i\mid\theta)]$. Explain how an influential observation creates unstable weights and propose a diagnostic and a remedy.
<!-- end:extra.10.2 -->

<!-- begin:extra.10.3 -->
### extra.10.3 — Validation for a new clinic next month {#extra.10.3}

Objectives: L10.O5, L10.O3 · Difficulty: intermediate · Type: diagnosis · Optional practice.

You have six months of visits at ten clinics, repeated visits by some patients, and a model intended for next month's patients at a previously unseen clinic. Consider: A random row split; B leave one clinic out using all six months; C rolling time origins with entire clinics held out and patient overlap excluded. All candidate pipelines initially impute missing values and standardise predictors using the entire dataset. Select a defensible evaluation design, explain what A and B measure, repair preprocessing and describe how to generate new-clinic predictions. State a limitation imposed by the available data.
<!-- end:extra.10.3 -->

<!-- begin:extra.10.4 -->
### extra.10.4 — A model can improve and still fail {#extra.10.4}

Objectives: L10.O5, L10.O1 · Difficulty: intermediate · Type: communication · Optional practice.

A hypothetical comparison of models A and B supplies five independent held-out unit log-score differences B−A: (0.2,0.4,−0.1,0.5,−0.2). Calculate total difference and approximate paired SE. For B, the observed proportion of counts at least 10 is 0.30; replicated proportions have mean 0.08 and central 90% interval [0.02,0.15]. Calculate the observed-minus-predictive-mean discrepancy and write a 100–160-word memo distinguishing relative prediction from this targeted check. Do not turn five scores into a probability that B is true.
<!-- end:extra.10.4 -->

## Lesson 11

<!-- begin:extra.11.1 -->
### extra.11.1 — Robust likelihood contributions {#extra.11.1}

Objectives: L11.O4, L11.O2 · Difficulty: intermediate · Type: derivation · Optional practice.

For one observation with residual $r=y-\mu$, compare a Normal location likelihood with known SD s=2 and a Student-t location likelihood with fixed degrees of freedom $\nu=3$ and scale s=2. Derive each log-likelihood derivative with respect to $\mu$, evaluate at r=2 and r=20, and describe their large-residual behaviour. Give the Student-t observation variance and explain why this score comparison is not a proof that a complete Bayesian estimator is immune to contamination.
<!-- end:extra.11.1 -->

<!-- begin:extra.11.2 -->
### extra.11.2 — Interval recording versus selected entry {#extra.11.2}

Objectives: L11.O4, L11.O3 · Difficulty: intermediate · Type: numerical · Optional practice.

Let $Y\sim N(\mu,1)$ with known variance 1. Protocol A enrolls a unit regardless of Y but records only that $1<Y<2$. Protocol B includes only units with $Y>1$, fixes the number of included units, and records an exact value Y=1.5 for one included unit; excluded counts are unavailable. Write each unit's likelihood contribution for unknown $\mu$ and evaluate at $\mu=0$. Compare B with the untruncated density. Explain why interval probability and truncated density cannot be interchanged.
<!-- end:extra.11.2 -->

<!-- begin:extra.11.3 -->
### extra.11.3 — What the missing outcomes could change {#extra.11.3}

Objectives: L11.O5, L11.O3 · Difficulty: intermediate · Type: diagnosis · Optional practice.

Outcomes are observed for 80% of a target population. Among those observed, 60% completed a task. Treat these proportions as exact for this sensitivity exercise. Assumption A says the missing group also has completion probability 0.60; assumption B says it has probability 0.20. Calculate overall completion under each. A policy requires overall completion at least 0.55. Express the threshold condition in terms of an unknown missing-group completion probability q, and propose information that could inform q. Explain why the observed records alone do not choose A over B.
<!-- end:extra.11.3 -->

<!-- begin:extra.11.4 -->
### extra.11.4 — Calibrate an exact inference experiment {#extra.11.4}

Objectives: L11.O5, L11.O1 · Difficulty: advanced · Type: coding · Optional practice.

Design and implement a small SBC experiment with R=1,000 datasets, $\theta\sim\operatorname{Beta}(2,3)$ and $Y\mid\theta\sim\operatorname{Binomial}(8,\theta)$. For each dataset use M=99 independent exact posterior draws, seed 8114. Define the generating-parameter rank among these draws, collect ten bins each containing ten rank values, and give expected bin counts and their marginal SD under calibration. Use a broad six-SD diagnostic screen, explaining dependence across bins and its limited interpretation. Compare with the expected rank mean. Explain why this experiment cannot establish real-data adequacy or validate an unrelated MCMC implementation.
<!-- end:extra.11.4 -->

## Lesson 12

<!-- begin:extra.12.1 -->
### extra.12.1 — A target population can reverse an action {#extra.12.1}

Objectives: L12.O4, L12.O1 · Difficulty: intermediate · Type: numerical · Optional practice.

The posterior expected completion differences B−A in groups 1 and 2 are +0.12 and −0.04. Two possible future target populations have weights (0.8,0.2) and (0.2,0.8). Each contains 1,000 visits; each extra completion is worth 10 utility units and rolling out B costs 200 units. Under linear expected utility, calculate the standardised mean difference, expected incremental utility and preferred action for each population, with A having incremental utility zero. Explain what cannot be learned about downside probability from these means alone.
<!-- end:extra.12.1 -->

<!-- begin:extra.12.2 -->
### extra.12.2 — A completely enumerated value-of-information problem {#extra.12.2}

Objectives: L12.O4, L12.O2 · Difficulty: advanced · Type: derivation · Optional practice.

A state is favourable F with probability 0.4 and unfavourable U with probability 0.6. Action A has utility zero in either state; action B has utility +100 in F and −60 in U. A possible test has $P(+\mid F)=0.8$ and $P(+\mid U)=0.2$; its result does not otherwise affect payoffs. Derive predictive test probabilities, post-test state probabilities and optimal actions. Calculate current optimal expected utility, expected utility with free sample information, gross EVSI, EVPI and current expected opportunity loss. A test costs 5 utility units: should it be bought? Verify $0\le\mathrm{EVSI}\le\mathrm{EVPI}$ and distinguish a test from perfect state information.
<!-- end:extra.12.2 -->

<!-- begin:extra.12.3 -->
### extra.12.3 — Expected value is not a realised outcome {#extra.12.3}

Objectives: L12.O5 · Difficulty: intermediate · Type: diagnosis · Optional practice.

A campaign will generate K successes among 20 new independent trials sharing unknown $\theta\sim\operatorname{Beta}(3,2)$ after existing data. Each realised success is worth 5 units; fixed cost is 40. Compare the posterior random quantity $V(\theta)=E(5K-40\mid\theta)=100\theta-40$ with realised utility $R=5K-40$. Calculate their means and variances, $P(V>0)$ and $P(R>0)$, using exact beta and beta-binomial calculations. Diagnose the statement “a posterior interval for V is a predictive interval for realised campaign value.” State the future-outcome assumptions used.
<!-- end:extra.12.3 -->

<!-- begin:extra.12.4 -->
### extra.12.4 — A decision memo with sensitivity {#extra.12.4}

Objectives: L12.O5, L12.O3 · Difficulty: intermediate · Type: communication · Optional practice.

Write a memo of at most 250 words using this complete hypothetical packet. Target: 2,000 visits next quarter at the same four centres with equal weights. The posterior mean completion difference B−A is 0.04, with central 90% interval [−0.01,0.09]. Value per extra completion is 20 utility units; rollout cost is 1,000. Under two alternative proper priors, mean differences are 0.025 and 0.035. A has incremental utility zero. Computational checks are satisfactory for the required mean precision, but predictive checks concern represented centres only. State expected incremental value, recommendation under risk neutrality, prior sensitivity, break-even effect and a scenario that changes the action. Distinguish the interval for conditional expected incremental value from realised outcomes, and state at least one limitation.
<!-- end:extra.12.4 -->

## Advanced practice

The following three problems per bridge are optional on the foundation route. Each problem supplies its own assessed givens. Read the corresponding chapter for methods; hints and worked solutions remain in protected instructor sources.

## A01 · Approximation

<!-- begin:adv.approximation.1 -->
### adv.approximation.1 — Which directions lose variational uncertainty? {#adv.approximation.1}

Objectives: A01.O1, A01.O2, A01.O3 · Difficulty: advanced · Type: derivation · Optional practice.

A fully specified posterior for two offsets (in the same units) is $p(\theta\mid y)=N(m,\Sigma)$ with

$$m=(1,-1)^T,\qquad \Sigma=\begin{pmatrix}4&1.8\\1.8&1\end{pmatrix}.$$

Derive its Laplace approximation and the minimiser of $\operatorname{KL}(q\Vert p)$ over $q=N(a_1,v_1)N(a_2,v_2)$, with $v_j>0$. Starting from the definition of KL, explain why maximising the ELBO for this fixed model is the same optimisation. Compute the optimum KL, the exact and approximate variances of $S=\theta_1+2\theta_2$ and $D=\theta_1-2\theta_2$, and $P(S>3)$ under each distribution (six decimal places). Does underdispersion of both marginals imply underdispersion of every contrast? Explain why extra independent draws from the optimal q cannot repair the discrepancy.
<!-- end:adv.approximation.1 -->

<!-- begin:adv.approximation.2 -->
### adv.approximation.2 — A support-respecting approximation can still miss a tail {#adv.approximation.2}

Objectives: A01.O2 · Difficulty: advanced · Type: coding · Optional practice.

The target is the Gamma posterior $p(\lambda)=b^a\lambda^{a-1}e^{-b\lambda}/\Gamma(a)$ for $\lambda>0$, with shape $a=4$ and rate $b=1.5$. Write runnable Python computing normalised midpoint grids on (0,30) with widths 0.02 and 0.01, and report the mean, variance and $P(\lambda>5)$. Check grid refinement and the omitted upper-tail mass against SciPy's gamma distribution; require absolute error below $2\times10^{-5}$ for all three summaries on the finer grid and justify the truncation.

Derive a Normal Laplace approximation in the rate coordinate and a Normal approximation in $\eta=\log\lambda$, transformed back to a lognormal. Report their rate-scale means, variances and tails above five; also report the rate-Normal's mass below zero. Is the approximation with correct support necessarily more accurate for the requested tail? State scale/rate conventions and distinguish deterministic quadrature error from approximation error.
<!-- end:adv.approximation.2 -->

<!-- begin:adv.approximation.3 -->
### adv.approximation.3 — Two stable fits that disagree about the sign {#adv.approximation.3}

Objectives: A01.O3 · Difficulty: intermediate · Type: diagnosis · Optional practice.

A normalised target is $p(\theta)=\tfrac12N(-4,0.36)+\tfrac12N(4,0.36)$. Define the joint density for this diagnostic to equal p, so evidence is one. Two runs fit a single Normal q. Run L ends at $N(-4,0.36)$ and run R at $N(4,0.36)$. Their hypothetical estimated ELBO traces are respectively (-2.4, -0.90, -0.693147) and (-2.0, -0.85, -0.693147); the reports show tiny final gradients. These are supplied diagnostic reports, not newly executed optimiser results.

Calculate the target mean, variance and $P(\theta>0)$, and compare both q distributions. Explain what the traces can and cannot establish, whether the two fits can be called interchangeable for a sign decision, and whether taking more draws or more optimisation steps guarantees repair. Give a concrete diagnostic/reference method and a justified change to the approximation family. Assess whether these reports prove a global variational optimum.
<!-- end:adv.approximation.3 -->


## A02 · Model evidence

<!-- begin:adv.model_evidence.1 -->
### adv.model_evidence.1 — Evidence with unequal prior model odds {#adv.model_evidence.1}

Objectives: A02.O1 · Difficulty: advanced · Type: derivation · Optional practice.

Two conditionally independent calibration readings are $y=(0.8,1.6)$ in standardised units, with $Y_i\mid\mu\sim N(\mu,1)$. Model $M_0$ fixes $\mu=0$. Model $M_1$ uses the proper prior $\mu\sim N(0,2.25)$. Prior model probabilities are $P(M_1)=1/4$ and $P(M_0)=3/4$. Derive the fully normalised evidence of each model by integration, retaining the constants. Calculate both log evidences, $\log BF_{10}$, posterior odds and $P(M_1\mid y)$ to six decimals. Also derive the conditional posterior for mu under $M_1$. Explain why a Bayes factor exceeding one need not give posterior model probability exceeding one half. Densities are with respect to the same two-dimensional reading measure.
<!-- end:adv.model_evidence.1 -->

<!-- begin:adv.model_evidence.2 -->
### adv.model_evidence.2 — A diffuse alternative changes the predictive mixture {#adv.model_evidence.2}

Objectives: A02.O2 · Difficulty: advanced · Type: numerical · Optional practice.

Use readings (0.8,1.6), known observation variance one, null $M_0:\mu=0$, and alternative $M_1:\mu\sim N(0,\tau^2)$. Compare three separate sensitivity scenarios $\tau\in\{0.25,1.5,6\}$ with $P(M_1)=1/4$ in every scenario. They are not three alternatives in one model set. A future independent reading has $Y_*\mid\mu\sim N(\mu,1)$.

For each scenario report log Bayes factor, posterior alternative weight, the conditional alternative posterior mean/variance of mu, and the model-averaged predictive mean/variance of $Y_*$. Show the within-model and between-model variance terms, giving six-decimal summaries. Explain the limit of the model weight as $\tau\to\infty$ for these fixed data, and why replacing the prior by an unspecified constant “flat density” does not give a meaningful limiting Bayes factor. Does the scenario with the largest evidence automatically optimise future predictive accuracy?
<!-- end:adv.model_evidence.2 -->

<!-- begin:adv.model_evidence.3 -->
### adv.model_evidence.3 — Explain three kinds of model comparison {#adv.model_evidence.3}

Objectives: A02.O3 · Difficulty: intermediate · Type: communication · Optional practice.

A hypothetical report compares models A and B. Proper-prior Bayesian model averaging (BMA) gives posterior model weights (0.85,0.15). Leave-one-out total expected log predictive density estimates are -142 for A and -137 for B; the estimated standard error of the paired difference B minus A is 4. Stacking of the same leave-one-out predictive distributions gives weights (0.30,0.70). These are supplied summaries, not quantities to reconstruct from unavailable raw observations. Full-data model-conditional probabilities of a specified future event E are 0.20 and 0.60 respectively; deploy either weighting scheme on these two predictive distributions.

Write a 150–220-word explanation to an analyst who says “B has a 70% probability of being true, and the five-point predictive gain proves B is best.” Include the two mixture event probabilities, what each comparison measures, what the paired SE implies and does not imply, one validation limitation, and why replacing one proper prior by an arbitrary improper prior invalidates the reported BMA odds. No model is assumed to be literally true.
<!-- end:adv.model_evidence.3 -->


## A03 · Observation process

<!-- begin:adv.observation_process.1 -->
### adv.observation_process.1 — Recover a latent item without treating its reading as exact {#adv.observation_process.1}

Objectives: A03.O1, A03.O2 · Difficulty: advanced · Type: derivation · Optional practice.

Three independent latent items obey $X_i\mid\mu\sim N(\mu,4)$, readings obey $W_i\mid X_i\sim N(X_i,1)$, and $\mu\sim N(0,9)$. Conditional on the latent items, all measurement errors are independent and independent of mu. Observe $w=(-1,2,3)$ in the same measurement units.

Derive the integrated likelihood for mu and its posterior. Then find the posterior mean and variance of the third latent item $X_3$, and $\operatorname{Cov}(X_1,X_3\mid w)$. Derive the predictive variance of a new independent reading $W_4$. Compare the common-mean posterior with the naive analysis that sets measurement variance to zero while retaining item variance four and the same prior. State which uncertainties the naive fit drops, and why conditional independence given mu does not imply posterior independence after integrating mu.
<!-- end:adv.observation_process.1 -->

<!-- begin:adv.observation_process.2 -->
### adv.observation_process.2 — A nonresponse shift that the data cannot estimate {#adv.observation_process.2}

Objectives: A03.O2, A03.O3 · Difficulty: advanced · Type: numerical · Optional practice.

An external population register establishes response fraction $r=0.65$ exactly. Five independently sampled respondents have outcomes (4,5,5,6,7). The pattern-mixture model is $Y\mid R=1,\mu\sim N(\mu,4)$ and $Y\mid R=0,\mu,\delta\sim N(\mu+\delta,4)$, with prior $\mu\sim N(5,4)$. There are no nonrespondent outcomes or further information about delta. The target is the superpopulation mean $T=E(Y\mid\mu,\delta)$, not the realised mean of a finite set of missing records.

For the fixed sensitivity scenarios $\delta=-3,0,3$, calculate posterior mean and 90% equal-tail interval for T and $P(T>6\mid y,\delta)$ (six decimals). Prove that the respondent likelihood cannot distinguish these scenarios. Then give delta the independent prior $N(0,9)$ and derive the marginal posterior of T and $P(T>6\mid y)$. Explain why this extra posterior width is prior-driven, whether more respondents alone identify delta, and which kind of additional information would help.
<!-- end:adv.observation_process.2 -->

<!-- begin:adv.observation_process.3 -->
### adv.observation_process.3 — Four instruments record four different events {#adv.observation_process.3}

Objectives: A03.O1, A03.O3 · Difficulty: intermediate · Type: diagnosis · Optional practice.

Independently of one another, four instruments sample $Y\sim N(\mu,4)$ with unknown mu and known SD two. Instrument A rounds to the nearest integer and reports 2. Instrument B registers every attempted unit but records only the flag $Y\ge3$ for this unit. Instrument C samples until one value exceeding 3 is admitted and reports the exact value 4; rejected values and their count are unavailable. Instrument D also samples until one value is admitted and reports exactly 4, with known admission probability $s(y)=\operatorname{logistic}(-1+0.5y)$; rejected values/counts are unavailable. There is no additional selection.

Write the likelihood contribution for mu under each record mechanism. Evaluate each at $\mu=1$ to six decimals, using one-dimensional integration for D. Identify which contributions are probabilities and which are densities. Explain how D's contribution changes if all attempted units' admission indicators are recorded, including a particular rejected unit with missing Y. Is ignoring this selection justified merely because its mechanism has no unknown parameters?
<!-- end:adv.observation_process.3 -->


## A04 · Causal identification

<!-- begin:adv.causal.1 -->
### adv.causal.1 — Standardise to the target population {#adv.causal.1}

Objectives: A04.O1, A04.O2 · Difficulty: advanced · Type: numerical · Optional practice.

Let A be binary treatment, Y a binary success and Z a pretreatment binary stratum. Assume consistency, no interference, conditional exchangeability $(Y(0),Y(1))\perp A\mid Z$, positivity, and transportability of the stratum-specific potential-outcome means to a target population with known $P_*(Z=0)=0.7$ and $P_*(Z=1)=0.3$. Observations within cells are independent binomial samples with independent Beta(2,2) priors for $p_{za}=P(Y=1\mid Z=z,A=a)$.

| Z | A | Trials | Successes |
|---|---|---:|---:|
| 0 | 0 | 60 | 12 |
| 0 | 1 | 20 | 8 |
| 1 | 0 | 30 | 18 |
| 1 | 1 | 90 | 63 |

Derive the identification formula for the target average treatment effect $\Delta_*=E_*[Y(1)-Y(0)]$. Give the four posterior beta distributions and the posterior mean and variance of $\Delta_*$ (six decimals). Compare its posterior mean with the crude observed treated-minus-control success proportion, stating that these also differ in prior use. Explain the role of each identification assumption and why the four binomial fits alone cannot verify them. No sampling interval or simulation is required.
<!-- end:adv.causal.1 -->

<!-- begin:adv.causal.2 -->
### adv.causal.2 — Adjustment can open a path or remove part of the effect {#adv.causal.2}

Objectives: A04.O1, A04.O3 · Difficulty: advanced · Type: diagnosis · Optional practice.

Consider two separate causal DAGs, with exactly the listed arrows and no hidden common causes other than the stated U. In graph C, treatment A is randomised independently of U, and arrows are $A\to Y$, $A\to C$, $U\to C$, $U\to Y$; U is unobserved and C observed. In graph M, A is randomised, and arrows are $A\to Y$, $A\to M$, $M\to Y$; M is observed. For the total effect of A on Y, assess no adjustment versus adjustment for C or M respectively. Explain whether an adjusted coefficient must equal a total effect.

Now consider a different observational setting with pretreatment Z, arrows $Z\to A$, $Z\to Y$, $A\to Y$, consistency, conditional exchangeability and no interference. The target has $P_*(Z=1)=0.3$. Assume all listed risks are known exactly: for Z=0, risks under A=0 and A=1 are 0.2 and 0.4; for Z=1 only A=1 ever occurs and its risk is 0.7. Outcomes are binary. Derive sharp bounds on the target average treatment effect with no restriction on the absent control risk. Exhibit two compatible full-data causal models attaining the endpoints. Can a highly concentrated Bayesian posterior from a strong prior restore data identification?
<!-- end:adv.causal.2 -->

<!-- begin:adv.causal.3 -->
### adv.causal.3 — Check a confounding analysis against its generator {#adv.causal.3}

Objectives: A04.O2, A04.O3 · Difficulty: advanced · Type: coding · Optional practice.

Simulate n=6,000 independent people using `np.random.default_rng(8603)`. Draw all Z first from Bernoulli(0.4), then all A with probabilities 0.15 for Z=0 and 0.85 for Z=1, then all observed Y using risk matrix $p_{za}=\begin{pmatrix}0.10&0.35\\0.55&0.65\end{pmatrix}$ (rows Z, columns A). This generator represents potential outcomes conditionally independent of assignment given Z; it has no interference and obeys consistency. The fixed target stratum weights are (0.6,0.4).

Using independent Beta(1,1) priors per outcome cell, report cell counts/successes, the crude empirical contrast, the exact adjusted posterior mean/SD and 20,000 independent posterior contrast draws with `default_rng(8604)`. Compute the generator's causal effect and crude population association by enumeration. Check the draw mean within six exact MCSEs of its analytic posterior mean; report, without demanding exact equality, the estimation error relative to the generator's effect in posterior SD units.

As an explicit changed observation design, discard all records with Z=1,A=0 while retaining the same target population. Show that this missing cell's posterior remains its prior. Recompute the adjusted posterior mean with Beta(1,1), Beta(8,2), and Beta(2,8) priors for that missing cell only, keeping other cell priors unchanged. Explain which statements remain model-dependent without overlap. Return runnable code and a short qualified report; no MCMC is needed.
<!-- end:adv.causal.3 -->


## A05 · Time series

<!-- begin:adv.time_series.1 -->
### adv.time_series.1 — Forecast a process with alternating dependence {#adv.time_series.1}

Objectives: A05.O1, A05.O2 · Difficulty: advanced · Type: derivation · Optional practice.

The stationary AR(1) model is $Y_t-\mu=\phi(Y_{t-1}-\mu)+\epsilon_t$ with independent innovations $\epsilon_t\sim N(0,\sigma^2)$ and $|\phi|<1$. Parameters are known and future innovations are independent of the observed past. Derive the conditional h-step mean and variance given exact current value $Y_T=y_T$, and derive the stationary marginal variance. State the initial distribution needed for a stationary full likelihood, and distinguish it from a likelihood conditional on $y_0$.

For $\mu=1$, $\phi=-0.5$, $\sigma^2=0.75$ and $y_T=3$, compute means and variances for h=1,2,3 and their limits. Explain the alternation and why innovation variance is not the stationary variance. Finally, if these parameters instead have a posterior distribution, state the two terms needed for parameter-integrated forecast variance and explain why plugging in posterior means is not generally equivalent.
<!-- end:adv.time_series.1 -->

<!-- begin:adv.time_series.2 -->
### adv.time_series.2 — Integrate a two-point parameter posterior {#adv.time_series.2}

Objectives: A05.O2 · Difficulty: advanced · Type: coding · Optional practice.

The zero-baseline model is $Y_t=\phi Y_{t-1}+\epsilon_t$, with known innovation SD 0.5 and independent Normal innovations. Observe $y_{0:4}=(-0.4,0.2,0.6,1.0,0.7)$. The prior puts equal mass on $\phi=0.2$ and $\phi=0.8$. Use the transition likelihood conditional on $y_0$; do not add a stationary initial density.

Write Python to calculate posterior weights in log space, then exact parameter-integrated means and variances at horizons one and three from time four. Separate the expected conditional variance from the variance of conditional means. Compare with forecasts plugging in $E(\phi\mid y)$, including their means and variances. Independently simulate 100,000 complete future trajectories with `default_rng(8502)`, sampling one posterior phi per trajectory and three fresh innovations. Compare simulated means to exact values within six mean MCSEs, and variances within six MCSEs computed from the exact fourth central moment of the Normal mixture. For mixture weights $w_j$, means $m_j$, variances $v_j$ and overall mean m, you may use $\mu_4=\sum_jw_j[3v_j^2+6v_j(m_j-m)^2+(m_j-m)^4]$ and variance MCSE approximately $\sqrt{(\mu_4-V^2)/N}$, where V is the mixture variance. See the [forecast precision derivation](./adv-05_time_series.md#numerical-precision-for-a-simulated-forecast-variance). Explain why drawing a fresh phi at every future time would simulate a different model.
<!-- end:adv.time_series.2 -->

<!-- begin:adv.time_series.3 -->
### adv.time_series.3 — Find the future information in a validation pipeline {#adv.time_series.3}

Objectives: A05.O3 · Difficulty: intermediate · Type: diagnosis · Optional practice.

There are thirty equally spaced records indexed t=0,...,29, with supplied values $y_t=t/10+0.05(-1)^t$. The deployment task is to predict $y_{o+3}$ at origin o immediately after observing $y_o$. A proposed direct-regression evaluation (i) standardises using all thirty readings, (ii) creates a centred three-reading mean $(y_{t-1}+y_t+y_{t+1})/3$, (iii) randomly splits feature/label pairs with label $y_{t+3}$, and (iv) claims its score measures future three-step forecasting. The full-series scale is also used for a purported chronological fit containing all feature origins through 19 when forecasting at 19.

Diagnose each leak, including the latest label in that last fit. Give an executable index schedule for rolling forecast origins (17,20,23,26): every training feature origin, label index, test feature origin and target index. Replace centred features by trailing means over indices max(0,s-2),...,s; fit preprocessing using training features only. State how later origins may use earlier realised test outcomes. Propose a perturbation test that would detect future-data dependence in a forecasting implementation, and a scoring/reporting rule acknowledging dependent errors. No particular regression estimator or fitted accuracy is requested.
<!-- end:adv.time_series.3 -->


## A06 · Gaussian processes

<!-- begin:adv.gaussian_processes.1 -->
### adv.gaussian_processes.1 — Condition a small GP and audit its kernel {#adv.gaussian_processes.1}

Objectives: A06.O1, A06.O2 · Difficulty: advanced · Type: numerical · Optional practice.

A zero-mean GP has kernel $k(x,x')=1+xx'$ on real inputs. Training inputs are (0,1) and readings (1,2), with independent Normal measurement errors of known variance 0.5. At test input $x_*=2$, derive the training latent covariance K, the reading covariance C, cross-covariance $k_*$ and prior test variance. Use Cholesky solves to compute the predictive mean, latent variance and variance of a new reading with the same measurement noise (six decimals). Cross-check using $f(x)=\beta_0+\beta_1x$ with independent $N(0,1)$ coefficients. Explain the restrictions on functions imposed by this GP.

A colleague proposes a replacement whose latent covariance at two inputs is $K'=\begin{pmatrix}1&1.2\\1.2&1\end{pmatrix}$, arguing that $K'+0.5I$ is positive definite. Decide whether it can define the stated latent GP, with a concrete variance or eigenvalue calculation. Does adding measurement noise validate an invalid latent kernel?
<!-- end:adv.gaussian_processes.1 -->

<!-- begin:adv.gaussian_processes.2 -->
### adv.gaussian_processes.2 — Separate numerical jitter from measurement noise {#adv.gaussian_processes.2}

Objectives: A06.O2, A06.O3 · Difficulty: advanced · Type: coding · Optional practice.

Use zero GP mean, $k(x,x')=\exp[-(x-x')^2/(2\ell^2)]$ with $\ell=0.7$, training inputs (0,0,$10^{-8}$,1), readings (1,1.02,0.98,-0.2), known scientific noise variance $s_n^2=10^{-6}$, and test inputs (0,0.5,2). Factor $C_j=K+(s_n^2+j)I$ for numerical jitter $j\in\{0,10^{-10},10^{-6},10^{-2}\}$. Return runnable code reporting each condition number, predictive mean vector, latent variance vector and new-reading variance vector. Use Cholesky solves, require finite results and reject latent variances below $-10^{-10}$ rather than silently clipping large errors. Report small numerical negatives if encountered.

Verify that the largest jitter materially changes the test-at-zero latent variance relative to the zero-jitter scientific model. Deliberately attempt Cholesky with both scientific noise and jitter zero, explaining failure for these inputs. Compare the $j=10^{-2}$ calculation with a different scientific model having noise variance 0.010001 and zero jitter. Explain why the training calculations coincide but new-reading uncertainty differs, and why contradictory readings at identical inputs do not justify claiming noiseless observations. Do not reinterpret chosen jitter as estimated scientific noise.
<!-- end:adv.gaussian_processes.2 -->

<!-- begin:adv.gaussian_processes.3 -->
### adv.gaussian_processes.3 — A kernel prior decides how far a curve can speak {#adv.gaussian_processes.3}

Objectives: A06.O3 · Difficulty: intermediate · Type: communication · Optional practice.

A calibration analysis uses zero-mean squared-exponential GPs with amplitude one and independent observation noise variance 0.04. Training inputs are (-1,0,1), readings (0.2,1.0,0.2). Two competing hyperparameter priors put all mass on length scale 0.3 (S) or 1.8 (L); no length scale is learned within either fit. The following conditional predictions are supplied to six decimals, with SD referring to the latent function:

| Model | Mean at x=0.5 | Latent SD at x=0.5 | Mean at x=3 | Latent SD at x=3 |
|---|---:|---:|---:|---:|
| S | 0.286475 | 0.938548 | 0.000000 | 1.000000 |
| L | 0.614640 | 0.154863 | -0.556519 | 0.773106 |

Write a 150–220-word modelling recommendation. Include each prior's correlation between function values one input unit apart, why the extrapolation at three is assumption-sensitive, the effect of measurement noise on predictive intervals, the far-away mean/variance limits, and a justified way to investigate kernel choice. The response can prefer a candidate conditionally; it must not identify truth from interval width. Address the squared-exponential smoothness/stationarity assumptions and an alternative if a sharp change is scientifically plausible. Add a separate calculation of the decimal GB needed for one dense float64 covariance at n=20,000, and the leading factorisation-time/storage multipliers relative to n=2,000. Ignore overhead when calculating that one matrix's storage.
<!-- end:adv.gaussian_processes.3 -->


## Prior workflow — A07

These four assessments are optional advanced progress. Prerequisites: L01, L02, L03 and L05. They do not contribute to required core mastery. Contexts and numerical packets below are original assessment fixtures, separate from the worked reading/lab.

<!-- begin:adv.prior_workflow.1 -->
### adv.prior_workflow.1 — One seed lot, two kinds of uncertainty {#adv.prior_workflow.1}

Objectives: A07.O1 · Difficulty: intermediate · Type: derivation · Optional advanced progress.

A horticulturist defines $\theta$ as the probability that a seed from one fixed lot germinates within 14 days under a specified cabinet protocol. Before testing, $\theta\sim\operatorname{Beta}(4,6)$. Twelve randomly selected seeds are conditionally independent given this one probability; $K$ counts germinations. Derive $E(K)$ and the two terms of total predictive variance, with units. Compare with (i) plugging in $E(\theta)$ and (ii) physically drawing an independent $\theta_i\sim\operatorname{Beta}(4,6)$ for each seed. Explain what the three models say about covariance between two germination indicators. Write a four-field elicitation record (quantity, population/protocol, horizon, information provenance) and name one observation that would challenge conditional independence. No real elicitation or seed data is claimed.
<!-- end:adv.prior_workflow.1 -->

<!-- begin:adv.prior_workflow.2 -->
### adv.prior_workflow.2 — Preserve two calibration judgments {#adv.prior_workflow.2}

Objectives: A07.O2, A07.O3 · Difficulty: advanced · Type: numerical · Optional advanced progress.

For one water sensor using a fixed calibration over the next fortnight, $\theta$ is its probability of passing a prespecified reference comparison. Two fictional specialists independently supply CDF judgments at probabilities $(0.15,0.50,0.85)$. Packet U gives values $(0.40,0.60,0.78)$; packet V gives $(0.16,0.34,0.56)$. Both remember the same maintenance summary; U also recalls bench tests and V recalls field fouling. Neither underlying record is available as a count likelihood.

Fit a separate Beta to each packet by minimizing unweighted squared CDF residuals in log-shape coordinates. You may use Lab 21's `fit_beta_quantiles(values, probabilities)`; retain convergence and starting-point evidence. Return shapes (three decimals), fitted CDF values and quantiles (four decimals), and maximum absolute CDF residual. Independently integrate at least one fitted CDF or predictive mass. For ten future comparisons sharing $\theta$, calculate $P(K<7)$ under each packet (four decimals). Give a feedback plan distinguishing small within-packet fit error from between-specialist disagreement. Identify a question about the target conditions and the shared information; preserve both packets, and describe what evidence would authorize a revised packet. Do not invent agreement, revisions, independent sample sizes, or credibility weights.
<!-- end:adv.prior_workflow.2 -->

<!-- begin:adv.prior_workflow.3 -->
### adv.prior_workflow.3 — A rehearsal decision changes with the weight {#adv.prior_workflow.3}

Objectives: A07.O3 · Difficulty: intermediate · Type: numerical · Optional advanced progress.

A theatre needs at least five of six wireless microphones to pass one rehearsal. Given a stable pass probability, their results are independent. Two stipulated prior scenarios are H: Beta(9,3) and L: Beta(3,3). Using the existing microphones costs 1 credit plus a 12-credit shortfall loss if fewer than five pass. Hiring a guaranteed set costs 7 credits. These are hypothetical total losses, not estimated market prices.

Calculate each scenario's shortfall probability and expected losses. For a linear prior mixture with weight $w$ on H, calculate the action at $w=0.25,0.50,0.75$ and the switching weight, stating the tie convention. Repeat the action comparison at $w=0.75$ when the shortfall loss is 8 or 20 credits, with the other costs unchanged. Explain why mixing expected losses is appropriate here, why averaging Beta shapes generally changes the problem, and why this sensitivity analysis cannot determine a specialist's credibility. Show at least one direct predictive integral or count-state sum.
<!-- end:adv.prior_workflow.3 -->

<!-- begin:adv.prior_workflow.4 -->
### adv.prior_workflow.4 — An archive already inside the prior {#adv.prior_workflow.4}

Objectives: A07.O1 · Difficulty: intermediate · Type: diagnosis · Optional advanced progress.

An acoustic detector's archive `detector_archive_R` has 9 detections in 12 exchangeable trials. An analyst started from Beta(3,5), updated with that archive, and handed the resulting distribution to a colleague as an informed prior. A disjoint new trial `detector_new_S` has 2 detections in 4 trials under the same protocol. The colleague proposes applying both R and S as likelihood data to the informed prior.

Calculate the informed prior, the correct posterior after S, and the erroneous posterior after R and S. Report correct and erroneous posterior means and variances. Give two equivalent once-only bookkeeping routes, a provenance ledger with include/exclude decisions, and one check needed before assuming the fresh observations are exchangeable. If the informed prior instead came from undocumented informal recollection of R, explain why subtracting nine successes and three failures is not a generally justified correction.
<!-- end:adv.prior_workflow.4 -->

## Categorical conjugacy — A08

These three assessments are optional advanced progress. Prerequisites: L02, L03, L04 and APP01. They do not contribute to required core mastery.

<!-- begin:adv.categorical_conjugacy.1 -->
### adv.categorical_conjugacy.1 — Derive an accession-count prediction {#adv.categorical_conjugacy.1}

Objectives: A08.O1 · Difficulty: intermediate · Type: derivation · Optional advanced progress.

Museum accessions have mutually exclusive states digitised, queued and blocked. A stable probability vector has prior Dirichlet(1,3,2); observed counts are $(4,1,2)$. Derive the normalized posterior from the multinomial likelihood and Dirichlet density, explaining where the observed multinomial coefficient cancels. Then derive the normalized joint predictive mass for two future accessions sharing the same probability vector. Enumerate all six possible count vectors and probabilities, checking normalization. Compute the predictive mean and full covariance matrix; explain why each covariance row sums to zero. Distinguish an unordered count from a particular ordered sequence. Keep category order explicit.
<!-- end:adv.categorical_conjugacy.1 -->

<!-- begin:adv.categorical_conjugacy.2 -->
### adv.categorical_conjugacy.2 — Four tickets after a changed update {#adv.categorical_conjugacy.2}

Objectives: A08.O1, A08.O2 · Difficulty: intermediate · Type: numerical · Optional advanced progress.

A support team's posterior for resolved, follow-up and escalated probabilities is Dirichlet(3,2,5). Predict four future tickets with one shared vector. Derive the probability of at least one escalation by aggregating categories and also by summing the joint count law. Compare it with the plug-in multinomial probability. Compute the escalation-count mean and variance.

Now consider two batches of four tickets. Compare their escalation-count covariance when they share this one uncertain vector with a model where each batch independently draws a vector from Dirichlet(3,2,5), with these shapes fixed. Explain why the two models have identical one-batch predictions but different cross-batch dependence. State how uncertain shared hyperparameters would qualify the independence claim. Report exact fractions or six-decimal values and explain the direction of the plug-in difference.
<!-- end:adv.categorical_conjugacy.2 -->

<!-- begin:adv.categorical_conjugacy.3 -->
### adv.categorical_conjugacy.3 — A probability vector is a joint object {#adv.categorical_conjugacy.3}

Objectives: A08.O2 · Difficulty: intermediate · Type: diagnosis · Optional advanced progress.

A recycling audit codes objects as reusable, recyclable or unsafe. Its prior is Dirichlet(2,2,1), and its six observations have counts $(2,4,0)$. An analyst fits three unrelated Beta(1,1) category-versus-rest priors, updates them, and presents the three independent posterior draws as a probability vector. Another analyst uses the correct Dirichlet's Beta marginals, but also draws them independently. A third sets the unsafe probability to zero because none was observed.

Diagnose all three proposals. Calculate the first analyst's posterior shapes and sum of posterior means. Give the correct joint posterior, marginal means, full covariance and the variance of the probability sum under the second analyst's construction. Explain why renormalizing independent Beta draws does not generally recover the stated Dirichlet. Distinguish a sampling zero from a scientifically established structural zero, and specify the support change needed for the latter. Describe a numerical relabeling check that permutes counts, shapes and output labels together.
<!-- end:adv.categorical_conjugacy.3 -->

## Multivariate hierarchy and computation — A09

These three assessments are optional advanced progress. Prerequisites: L04, L06, L07, L09, APP03 and APP04. They do not contribute to required core mastery. The last item is the computational repair memo; it is not an extra exercise or a core 6.4 item.

<!-- begin:adv.multivariate_hierarchy.1 -->
### adv.multivariate_hierarchy.1 — Covariance priors in physical units {#adv.multivariate_hierarchy.1}

Objectives: A09.O1 · Difficulty: advanced · Type: derivation · Optional advanced progress.

For aquarium stations, let $b_j=(b_{0j},b_{1j})$ be a Gaussian station intercept and temperature-slope deviation. Temperature $x$ is measured in units of ten degrees relative to a fixed reference, and the response is a centered instrument reading in volts. Set $\Sigma=D\Omega D$, independent $\tau_0\sim\operatorname{HalfNormal}(0.8)$ and $\tau_1\sim\operatorname{HalfNormal}(0.25)$ (SD parameters), and a bivariate LKJ(3) prior for $\Omega$. Derive the normalized density of correlation $\rho$ and $P(|\rho|>0.5)$. Explain what changes when LKJ(1) replaces LKJ(3), without treating prior mass as observed evidence.

At the fixed hyperparameter snapshot $(\tau_0,\tau_1,\rho)=(0.8,0.25,-0.4)$, compute $\Sigma$, $b_1\mid b_0=0.4$, and the variance of $b_0+2b_1$. Then rewrite temperature in single degrees $x'=10x$: transform effects, covariance, scale priors and the conditional slope result so every prediction is unchanged. Explain what would change if the old numerical slope prior were used unchanged in the new units. This is a conditional snapshot and prior calculation, not a posterior fit.
<!-- end:adv.multivariate_hierarchy.1 -->

<!-- begin:adv.multivariate_hierarchy.2 -->
### adv.multivariate_hierarchy.2 — Reuse one draw for one new catchment {#adv.multivariate_hierarchy.2}

Objectives: A09.O2 · Difficulty: advanced · Type: numerical · Optional advanced progress.

A model of stream instrument readings has station/catchment effects $(b_0,b_1)$, within-catchment centered covariate $x$, and catchment mean covariate $q$. At one fixed posterior hyperparameter draw, the population mean is $1.2-0.1x+0.5q$, effects have covariance $\begin{pmatrix}0.36&0.06\\0.06&0.04\end{pmatrix}$, and independent observation-noise SD is 0.3. Predict two readings in one new catchment with $q=0.4$ and $x=(-1,2)$. Give their mean vector, full latent and noisy covariance matrices, and the variance of their difference. Repeat the covariance/difference calculation for code that incorrectly draws an independent effect vector for each reading. Explain the correct draw reuse for a new versus an already observed catchment and how averaging across posterior hyperparameter draws adds uncertainty.

A separate fitted study has only six catchments, many repeated readings near each catchment's mean covariate, and a correlation interval from -0.8 to 0.7 despite small mean MCSE. Discuss weak identification of slope variation/correlation, within- versus between-catchment associations, and two checks before predicting at $x=2$. Do not infer an absent effect or a precise correlation from sampler precision. The interval is a hypothetical supplied diagnostic, not a claimed execution.
<!-- end:adv.multivariate_hierarchy.2 -->

<!-- begin:adv.multivariate_hierarchy.3 -->
### adv.multivariate_hierarchy.3 — Execute and audit a coordinate repair {#adv.multivariate_hierarchy.3}

Objectives: A09.O3 · Difficulty: advanced · Type: coding · Optional advanced progress.

An instrument calibration fixture has $b=(b_0,b_1)\sim N_2(0,\Sigma)$ with fixed $\Sigma=\begin{pmatrix}0.49&0.126\\0.126&0.09\end{pmatrix}$. Two observations $y=(0.60,0.62)$ at $x=(1,1)$ are independent $N(b_0+b_1,0.015^2)$ given b. Derive exact posterior mean m and covariance V by both a precision update and a conditional-Gaussian calculation. Let L be the lower Cholesky factor of V. Verify the normalized density identity $\log p_b(m+Lz)+\log|L|=\log\phi_2(z)$ at several points. This fixture conditions on covariance; it cannot validate estimation of LKJ hyperparameters.

Execute the following prespecified comparison in the locked environment. Use four independent NumPy `default_rng(90330+c)` streams for chain indices c=0,1,2,3, and starts in z coordinates $(-2,-2),(-2,2),(2,-2),(2,2)$ in that order. For the original run start b at m+Lz, propose b plus 0.12 times a fresh two-vector of standard normals, and evaluate the unnormalized posterior Gaussian log density. For the repair start z at its given value, propose z plus 0.9 times a fresh standard-normal two-vector, and evaluate $-z^Tz/2$. Restart the specified streams for the repair. Each iteration must draw the normal proposal followed by one uniform U and accept exactly when $\log U$ is less than proposed minus current log density. Run 6,000 iterations per chain, discard the first 2,000, and retain repeats after rejection. Transform retained z to b before comparison. Do not adapt, thin, change seeds, or discard an unfavorable chain.

For b0, b1 and b0+b1 in both runs report mean, SD, rank-normalized R-hat, bulk/tail ESS and mean MCSE, along with per-chain retained acceptance rates. Prespecified screens are R-hat < 1.01, both ESS > 400, and mean MCSE < 0.01 for every estimand. Compare each mean with the exact value using five MCSEs. Submit a 250–450-word diagnosis/intervention/re-evaluation memo plus executable code and a complete ledger of seeds, dimensions, versions, checks, failures and output hashes. Record actual screen outcomes, including persistent failures; an unfavorable run is not an excuse to invent success. Distinguish numerical precision from scientific uncertainty. Explain why HMC divergences/BFMI are inapplicable to this Metropolis experiment, and what additional evidence A09's unknown-covariance hierarchy needs. No human or live-tutor evaluation is requested.
<!-- end:adv.multivariate_hierarchy.3 -->
