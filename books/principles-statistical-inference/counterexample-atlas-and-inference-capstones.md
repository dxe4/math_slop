
# Counterexample Atlas and Inference Capstones {#section-1-counterexample-atlas-and-inference-capstones}

<a id="section-1-level-and-prerequisites"></a>
## Level and prerequisites {#section-3-level-and-prerequisites}

This is a chapter of the L3 inference route. Preparation is [Probability: Models, Bounds, and Proofs](#/books/probability-models-proofs), especially its [Gaussian-vector chapter](../probability-models-proofs/gaussian-vectors-and-multivariate-normal.md), and [Lucent linear algebra](#/books/lucent-linear-algebra). The L3 core synthesizes the preceding main-route chapters. Sequential, selective and robust counterexamples retain their local assumptions; their general theories are optional advanced material in the registered continuations. No unproved L4 theorem is needed to read the finite reference dossier as a specified probability calculation.


Statistical inference is safest when every conclusion carries a ledger: the observation law, target, identifying assumptions, calibration statement, and decision consequence. This chapter compresses the book into failure patterns. Each counterexample is small enough to calculate by hand, yet exposes an error that survives in larger models.

<a id="section-8-1-same-data-law-different-target"></a>
## 1. Same data law, different target {#section-10-1-same-data-law-different-target}

Suppose only $X=RY$ is recorded, where $R$ indicates observation. Let $P(R=1)=1/2$ and $Y=0$ whenever $R=1$. Two full-data laws agree on everything observed: in law A, missing outcomes equal zero; in law B, missing outcomes equal one. The observed record is identical, but $E[Y]$ is respectively $0$ and $1/2$. No estimator can consistently recover both values from the same observation law. More data repeat the ambiguity rather than remove it.

**Repair.** State an identifying assumption, report bounds, or collect information that distinguishes the laws.

<a id="section-14-2-unbiased-does-not-mean-accurate"></a>
## 2. Unbiased does not mean accurate {#section-16-2-unbiased-does-not-mean-accurate}

Let $X\sim \operatorname{Normal}(\theta ,1)$ and let an independent coin $B$ equal $1$ with probability $\varepsilon $. The estimator $T=X+(B-\varepsilon )M$ is unbiased for every $\theta $, but its variance is $1+\varepsilon (1-\varepsilon )M^{2}$, arbitrarily large as $M$ grows. Bias is one component of risk, not a certificate of usefulness.

<a id="section-18-3-consistency-does-not-control-finite-samples"></a>
## 3. Consistency does not control finite samples {#section-20-3-consistency-does-not-control-finite-samples}

If $X_1,X_2,\ldots$ are iid $\operatorname{Normal}(\theta ,1)$, define $T_n=10^6$ for $n<10^6$ and $T_n=\bar X_n$ afterward. Then $T_n$ is consistent, but disastrously uninformative at every sample size most studies can reach. An asymptotic theorem needs a finite-sample error or approximation audit.

<a id="section-22-4-likelihood-proportionality-is-protocol-specific"></a>
## 4. Likelihood proportionality is protocol-specific {#section-24-4-likelihood-proportionality-is-protocol-specific}

Observing three successes before one failure gives likelihood proportional to $p^{3}(1-p)$ under negative-binomial stopping. Observing three successes in four fixed trials gives the same kernel. Likelihood-based updating can coincide, while frequentist tail areas and repeated-sampling risks differ because their sample spaces differ. A statement about one protocol cannot silently inherit calibration from the other.

<a id="section-26-5-a-sufficient-statistic-can-hide-model-failure"></a>
## 5. A sufficient statistic can hide model failure {#section-28-5-a-sufficient-statistic-can-hide-model-failure}

For iid normal observations with both mean and variance unknown, $(\bar X,\sum (X_i-\bar X)^{2})$ is sufficient inside the normal family. Two datasets can share these summaries while one contains a severe asymmetric pattern. Sufficiency says conditional parameter information is absent under the model; it does not say the discarded configuration is irrelevant for checking that model.

<a id="section-30-6-a-p-value-is-not-a-null-probability"></a>
## 6. A p-value is not a null probability {#section-32-6-a-p-value-is-not-a-null-probability}

Under a continuous null, $p=0.03$ means the chosen statistic would be at least as extreme with probability $0.03$ under the calibration law. It does not calculate $P(H_0|X)$. Posterior model probability additionally needs prior model odds and within-model predictive distributions.

<a id="section-34-7-pointwise-size-is-not-simultaneous-protection"></a>
## 7. Pointwise size is not simultaneous protection {#section-36-7-pointwise-size-is-not-simultaneous-protection}

Twenty independent tests each having rejection probability $0.05$ under the joint global null have familywise error $1-0.95^{20}\approx 0.642$. For independent valid level-$0.05$ tests this expression is generally an upper bound; equality requires the stated rejection probabilities. Each marginal promise can hold while the chance of at least one false rejection is large. The family and error criterion must be declared before selection.

<a id="section-38-8-optional-stopping-can-defeat-a-fixed-time-rule"></a>
## 8. Optional stopping can defeat a fixed-time rule {#section-40-8-optional-stopping-can-defeat-a-fixed-time-rule}

Repeatedly inspect a two-sided fixed-sample z-test and stop at the first $|Z_n|>1.96$. The event is a union across times, so its null probability exceeds $0.05$ and can become much larger with prolonged monitoring. Valid sequential inference requires an alpha-spending rule, martingale/e-value argument, or other time-uniform calibration.

<a id="section-42-9-coverage-at-one-state-is-not-uniform-coverage"></a>
## 9. Coverage at one state is not uniform coverage {#section-44-9-coverage-at-one-state-is-not-uniform-coverage}

The interval $C(X)={0}$ when $X=0$ and empty otherwise has coverage one at a degenerate law concentrated at zero and zero elsewhere. Quoting its best-case coverage hides the quantifier. A confidence guarantee must say whether it is pointwise, uniform over a parameter set, conditional, or averaged.

<a id="section-46-10-the-bootstrap-can-miss-a-boundary-limit"></a>
## 10. The bootstrap can miss a boundary limit {#section-48-10-the-bootstrap-can-miss-a-boundary-limit}

Let $X_1,\dots,X_n$ be iid $\operatorname{Uniform}(0,\theta )$, where $\theta >0$ and $n\ge1$ is an integer, and estimate $\theta $ by the maximum $M_n$. Its error is governed by the gap to a moving support boundary at rate $n$, not $\sqrt{n}$. An ordinary nonparametric bootstrap samples only values at most $M_n$, so its conditional endpoint behaviour does not reproduce draws between $M_n$ and the true $\theta $. Resampling validity is a theorem about a statistic and law, not a generic property of resampling.

<a id="section-50-11-permutation-validity-needs-the-right-symmetry"></a>
## 11. Permutation validity needs the right symmetry {#section-52-11-permutation-validity-needs-the-right-symmetry}

If treatment labels are observational group labels and outcome variances differ, arbitrary label permutation is not generally distribution-preserving under equality of means. Exact permutation calibration follows from randomized assignment or an exchangeability null, neither from the word “nonparametric” nor from equal sample sizes.

<a id="section-54-12-a-tiny-residual-need-not-mean-a-small-coefficient-er"></a>
## 12. A tiny residual need not mean a small coefficient error {#section-56-12-a-tiny-residual-need-not-mean-a-small-coefficient-er}

In regression, nearly collinear columns make $X'X$ ill-conditioned. A direction $v$ can satisfy $Xv\approx 0$; then $\beta $ and $\beta +Mv$ have nearly identical fitted values even for large $M$. Prediction on the observed design may look stable while individual coefficients are unstable. Conditioning and estimand choice precede interpretation.

<a id="section-58-13-adjustment-can-create-association"></a>
## 13. Adjustment can create association {#section-60-13-adjustment-can-create-association}

Let independent causes $A$ and $B$ both affect a collider $C$. Conditioning on $C$ makes information about $A$ informative about $B$: among units with a fixed $C$, a larger contribution from one cause must be offset by the other. “Control for every available variable” can create rather than remove bias.

<a id="section-62-14-randomization-does-not-guarantee-external-validity"></a>
## 14. Randomization does not guarantee external validity {#section-64-14-randomization-does-not-guarantee-external-validity}

A trial randomizes treatment perfectly within volunteers, identifying an average effect for that enrolled population. If treatment effects differ and volunteering depends on those effect modifiers, the trial does not by itself identify the population average effect. Assignment validity and sampling/transport validity are separate ledgers.

<a id="section-66-15-weights-repair-only-represented-mechanisms"></a>
## 15. Weights repair only represented mechanisms {#section-68-15-weights-repair-only-represented-mechanisms}

Inverse-probability weighting can correct unequal known inclusion probabilities. It cannot recover units absent from the frame, nor outcomes missing with zero response probability. Very small propensities also create unstable variance. Positivity, frame coverage, and sensitivity analysis are not optional footnotes.

<a id="section-70-16-a-robust-estimator-is-not-assumption-free"></a>
## 16. A robust estimator is not assumption-free {#section-72-16-a-robust-estimator-is-not-assumption-free}

The sample median resists extreme outcome contamination, yet can be biased for a mean target, can have poor efficiency under some clean models, and does not repair selection bias or dependence. Robustness always names a target, perturbation class, and loss.

<a id="section-74-17-posterior-concentration-can-target-the-wrong-model"></a>
## 17. Posterior concentration can target the wrong model {#section-76-17-posterior-concentration-can-target-the-wrong-model}

With enough data, a regular Bayesian posterior under misspecification may concentrate near the model member closest to the data law in a divergence sense. Concentration then expresses precision about a projection, not truth of the model. Posterior predictive checks and external design arguments remain necessary.

<a id="section-78-18-a-narrow-credible-set-can-have-poor-fixed-state-cove"></a>
## 18. A narrow credible set can have poor fixed-state coverage {#section-80-18-a-narrow-credible-set-can-have-poor-fixed-state-cove}

A strongly concentrated prior combined with weak data produces a narrow posterior interval near the prior centre. At parameter states far from that centre, its repeated-sampling coverage can be poor. Posterior probability is correct under the declared joint model; a fixed-state protection claim requires a separate calculation.

<a id="section-82-19-selection-changes-the-target-and-distribution"></a>
## 19. Selection changes the target and distribution {#section-84-19-selection-changes-the-target-and-distribution}

Choose the largest among many noisy estimated effects and report its ordinary standard error as if the choice were fixed. Conditional on being selected, the estimate can be biased upward and its distribution can be altered by the selection event. Honest options include prespecification, data splitting, shrinkage, selective conditioning, or simultaneous intervals.

<a id="section-86-20-a-causal-coefficient-is-not-created-by-notation"></a>
## 20. A causal coefficient is not created by notation {#section-88-20-a-causal-coefficient-is-not-created-by-notation}

Writing $Y=\alpha +\tau A+\varepsilon $ does not make $\tau $ causal. If treatment $A$ shares causes with the outcome or is measured after relevant events, the regression coefficient is an associational projection. A causal interpretation comes from randomization or explicit identification assumptions, not from naming a coefficient “effect.”

<a id="section-90-21-a-unified-inference-audit"></a>
## 21. A unified inference audit {#section-92-21-a-unified-inference-audit}

For any analysis, answer in order:

1. What physical or administrative process creates the record?
2. What distributional family describes that record, including stopping and missingness?
3. What target is a function of the full law or finite population?
4. Which assumptions identify it from observed distributions?
5. What procedure maps records to actions or reported sets?
6. Which exact or asymptotic theorem supplies calibration, and under what quantifiers?
7. What loss, error family, or scientific decision gives the procedure purpose?
8. Which perturbations are included in robustness and sensitivity checks?
9. What computation approximates the procedure, and how is its error assessed?
10. Which claim remains after model, design, and external-validity limitations are stated?

<a id="section-105-22-exercises-with-complete-solutions"></a>
## 23. Capstone: an auditable inference dossier {#section-650-23-capstone-an-auditable-inference-dossier}

Choose one real or carefully simulated study involving treatment, prediction, sampling, or missing outcomes. Produce a self-contained dossier with these required artifacts:

1. a protocol diagram expressed in words and random variables;
2. the observed-data law and at least one plausible competing law;
3. a precise estimand and a proof or explicit assumption-based argument for identification;
4. two procedures evaluated under a declared loss or error criterion;
5. an exact or asymptotic calibration derivation with its hypotheses;
6. a simulation plan that varies sample size, nuisance structure, and one failure mechanism;
7. a sensitivity analysis for an untestable assumption;
8. a Bayesian or frequentist cross-ledger evaluation without conflating their probabilities;
9. an accessibility-first table or numerical description for every visual result;
10. a one-page claim ledger separating established conclusions, model-conditional conclusions, diagnostics, and open uncertainties.

**Completion standard.** Another reader must be able to reproduce every finite calculation, locate the theorem behind each guarantee, and identify which conclusion changes when the selected failure mechanism is activated. The dossier is incomplete if it reports only software output or if its main scientific sentence lacks a path through protocol, identification, calibration, and decision relevance.

<a id="section-665-24-closing-perspective"></a>
## 24. Closing perspective {#section-667-24-closing-perspective}

The mature statistical question is not “Which method is best?” but “Which guarantee answers this target under this observation process, and what happens when its assumptions bend?” Counterexamples prevent theorem names from becoming slogans. Capstones turn separate techniques into an accountable chain of reasoning. The library's next volumes deepen computation, Bayesian workflow, causal inference, and high-dimensional learning; this volume supplies the ledgers those subjects continue to need.


<a id="section-670-25-development-identical-summaries-need-not-preserve-a-"></a>
## 25. Development: identical summaries need not preserve a model check {#section-672-25-development-identical-summaries-need-not-preserve-a-}

<a id="section-672-worked-example-1-compare-equal-summaries-under-differen"></a>
### Worked example 1: compare equal summaries under different model checks {#section-674-worked-example-1-compare-equal-summaries-under-differen}

The sufficiency warning can be made exact. Consider two four-observation records

$$x=(-1,-1,1,1),\qquad
y=(-1/\sqrt3,-1/\sqrt3,-1/\sqrt3,\sqrt3).$$

Both have mean zero and squared-deviation sum four. Under an iid $N(\mu,\sigma^2)$ model with $\sigma^2>0$, their likelihood densities are the same function of both unknown parameters, because

$$\sum_i(x_i-\mu)^2=\sum_i(y_i-\mu)^2=4+4\mu^2.$$

The common likelihood is $(2\pi\sigma^2)^{-2}\exp\{-(4+4\mu^2)/(2\sigma^2)\}$. Every likelihood ratio between normal states therefore agrees for these records, and their unrestricted normal MLEs agree: mean zero and variance one.

Their arrangements are nevertheless different. The average cubed deviation is zero for $x$, but for $y$ it is

$$\frac14\left\{-\frac1{\sqrt3}+3\sqrt3\right\}
 =\frac2{\sqrt3}.$$

The second record has three small negative values and one larger positive value, while the first is symmetric. A discrepancy aimed at asymmetric configurations can therefore distinguish them. Its reference distribution still needs to be derived before one calls either configuration evidence against normality at a specified level.

Exact continuous records have probability zero. The calculations compare density values and statistics, not positive point probabilities. Small neighbourhoods of both records have positive normal probability, so neither record by itself logically refutes the normal model. This is precisely why a diagnostic needs calibration or a stated descriptive role rather than a claim that unusual appearance proves a failure.

A plausible competing measurement law can preserve a mean and variance while changing shape. An independent symmetric two-point law on $\{-1,1\}$ has mean zero and variance one, just like $N(0,1)$. Under that discrete law the ordered record $x$ has probability $1/16$, while sufficiently small neighbourhoods of $y$ have probability zero. The one-row summaries mean and variance do not determine the distribution. A Gaussian likelihood using only those moments has imposed a shape assumption.

Do not compare the discrete point probability $1/16$ with a normal Lebesgue density as if they had the same units. A likelihood comparison across models needs a common dominating measure or a consistently defined recorded event, such as an instrument's finite bins. Here the point of the competing law is the observable shape distinction, not a Bayes factor built from incompatible representations.

Sufficiency answers a conditional information question within a declared family. A diagnostic asks whether that family reproduces a relevant feature of possible records. Keeping the raw configuration for the second question does not contradict compressing to sufficient summaries for the first. The two calculations have different targets and should remain visible in separate parts of an inference dossier.

<a id="section-700-26-development-calculate-the-law-of-a-stopped-cumulativ"></a>
## 26. Development: calculate the law of a stopped cumulative z statistic {#section-702-26-development-calculate-the-law-of-a-stopped-cumulativ}

<a id="section-702-worked-example-2-integrate-a-two-look-rejection-probabi"></a>
### Worked example 2: integrate a two-look rejection probability {#section-704-worked-example-2-integrate-a-two-look-rejection-probabi}

Use an exact two-look example. Under the null, let $X_1,X_2$ be independent $N(0,1)$ observations. Define $Z_1=X_1$ and $Z_2=(X_1+X_2)/\sqrt2$. Each marginal statistic is standard normal, but their covariance is $1/\sqrt2$, so they are not independent. Fix $0<\alpha<1$ and $c=\Phi^{-1}(1-\alpha/2)$. Stop after the first observation if $|Z_1|>c$; otherwise observe the second and reject if $|Z_2|>c$.

The rejection probability is exactly

$$\alpha+\int_{-c}^{c}\phi(x)
 \{1-\Phi(c\sqrt2-x)+\Phi(-c\sqrt2-x)\}\,dx,$$

where $\phi$ is the standard normal density. The first term is rejection at the first look. In the integral, $X_1=x$ did not trigger stopping, and $X_2$ is still independent standard normal. The two tails describe the second crossing. Every integrand is positive on the interval, so the total is strictly larger than $\alpha$. The union bound also gives an upper bound of $2\alpha$, capped by one.

This is a complete exact expression with a proved strict inequality; it is not a numerical estimate from a run. The familiar cutoff 1.96 is a rounded replacement for the exact 5% normal quantile. Keeping $c$ symbolic separates repeated-monitoring inflation from normal-table rounding.

The full stopped record can be described as $(N,Z_N)$, where $N\in\{1,2\}$. At $N=1$, its joint density is $g_1(z)=\phi(z)1_{\{|z|>c\}}$. At $N=2$, the joint density is

$$g_2(z)=\phi(z)\{\Phi(c\sqrt2-z)-\Phi(-c\sqrt2-z)\}.$$

To derive the latter, condition on $Z_2=z$. The pair is jointly normal, and $Z_1\mid Z_2=z$ has mean $z/\sqrt2$ and variance $1/2$. The expression in braces is the conditional chance that the first look did not cross. Integrating $g_1$ gives $\alpha$; integrating $g_2$ gives $1-\alpha$, so together they define a probability law.

The reported stopped statistic has density $g_1+g_2$, which is not a standard normal density. Conditioning on $N=2$ divides $g_2$ by $1-\alpha$; it does not undo the first-look selection. Reusing a fixed-time tail area for the stopped record therefore answers the wrong repetition question.

If instead two fresh, independent normal blocks each produce a standard normal test, the chance of at least one rejection is $1-(1-\alpha)^2$. That is a different protocol from these correlated cumulative statistics. A correct finite repair for either two-look protocol is to allocate at most $\alpha/2$ rejection probability to each look; the union bound then guarantees total rejection probability at most $\alpha$ without assuming independence. A time-uniform method for indefinitely many looks needs a separately proved guarantee.

<a id="section-725-27-development-a-precise-posterior-can-miscalibrate-unc"></a>
## 27. Development: a precise posterior can miscalibrate uncertainty {#section-727-27-development-a-precise-posterior-can-miscalibrate-unc}

An exact misspecification calculation is possible without invoking a general posterior limit theorem. Suppose actual observations are independent $N(\theta,4)$, but the analyst uses a working likelihood with variance one and a proper $N(0,1)$ prior for the mean. From $n$ observations the working posterior is

$$N\left(\frac{n\bar Y}{n+1},\frac1{n+1}\right).$$

At the actual state $\theta=0$, its equal-tail $1-\alpha$ credible interval has true repeated-sampling coverage

$$2\Phi\left(\frac{z\sqrt{n+1}}{2\sqrt n}\right)-1,
\qquad z=\Phi^{-1}(1-\alpha/2).$$

Indeed, the posterior centre has actual variance $4n/(n+1)^2$, while its reported interval half-width is $z/\sqrt{n+1}$. Standardising that centre gives the formula. As $n\to\infty$, coverage tends to $2\Phi(z/2)-1$, strictly below $1-\alpha$. More data shrink the interval but do not repair the wrong noise scale.

The posterior mean remains consistent for the actual mean in this example. Thus the failure is specifically calibration of uncertainty, not failure to estimate every target. A model audit should identify which consequence is wrong instead of labelling all outputs either valid or invalid together.

A different continuous law exposes a wrong predictive target. Let actual observations be iid from the symmetric mixture $\frac12N(-2,1)+\frac12N(2,1)$. Their mean is zero, variance is five, and fourth moment is $43$. Fitting the same variance-one normal working model again gives the displayed posterior. Under the actual mixture, $\bar Y\to0$ in probability since its variance is $5/n$.

The posterior then concentrates near zero: its conditional second moment is the squared posterior mean plus $1/(n+1)$, which tends to zero in probability. Markov's inequality under each posterior bounds its mass outside $[-\varepsilon,\varepsilon]$ by that second moment divided by $\varepsilon^2$. No generic misspecified-posterior theorem is needed for this particular conclusion.

The chosen normal location is the expected-log-likelihood projection. For a candidate mean $u$, $E[(Y-u)^2]=5+u^2$, uniquely minimised at zero. Concentration near that location does not turn the working $N(0,1)$ distribution into the true mixture. The working predictive second moment tends to one, whereas the actual second moment is five.

A directly observable diagnostic has a finite error bound. Since $\operatorname{Var}(Y^2)=43-25=18$, Chebyshev gives

$$P\left(\left|\frac1n\sum_iY_i^2-5\right|>\varepsilon\right)
 \leq\frac{18}{n\varepsilon^2}.$$

Thus repeated data can reveal the predictive second-moment mismatch even as the parameter posterior becomes narrow. The mean target, predictive distribution and uncertainty calibration are separate claims. This explicit model demonstrates their separation; it does not establish a universal rate or divergence projection theorem for all misspecified models.

<a id="section-753-28-development-selection-needs-the-right-bias-statement"></a>
## 28. Development: selection needs the right bias statement {#section-755-28-development-selection-needs-the-right-bias-statement}

For finitely many integrable unbiased estimates $\widehat\theta_j$, the convexity inequality $E[\max_j\widehat\theta_j]\geq\max_j\theta_j$ is always non-strict. It compares the reported maximum with the maximum true effect. It does not say every conditional winner distribution is a strictly shifted or truncated version of an ordinary sampling law.

For an exact example of upward bias, let two true effects both be zero and their independent noises each equal minus one or plus one with probability one half. The maximum is minus one only when both noises are minus one, an event of probability one quarter. It is plus one on the other three pairs. Its expectation is therefore one half, even though each unselected estimate has mean zero.

Now use a common noise $Z$ of mean zero and set $\widehat\theta_j=\theta_j+Z$. If one true effect is strictly largest, it is selected on every outcome. Its error remains exactly $Z$, with no selection truncation and no bias. The other dependence structure has changed the conclusion. This counterexample explains the explicit “can” qualification in Section 19.

If $J$ selects a maximum and the original estimates are unbiased, unconditional selected-target bias is nevertheless nonnegative:

$$E[\widehat\theta_J-\theta_J]
 =E[\max_j\widehat\theta_j]-E[\theta_J]
 \geq\max_j\theta_j-E[\theta_J]\geq0.$$

Strictness is a further question. Conditional bias for a named selected coordinate requires its conditional law. The inequalities do not authorise replacing one of these targets by another.

In the independent two-noise example, break ties in favour of coordinate one. Coordinate one wins on three of the four noise pairs; its conditional mean is $(-1+1+1)/3=1/3$. Coordinate two wins only on the pair $(-1,1)$, so its conditional mean is one. These calculations make the selection mechanism explicit. An ordinary unselected reference distribution would omit that conditioning.

Multiplicities and selection also involve different error events. A familywise claim concerns at least one false rejection in a stated family. A selected estimate's bias concerns its reported numerical target. Simultaneous intervals, selective conditioning, independent confirmation and shrinkage address different parts of those questions. An analysis should name its desired guarantee before choosing a repair; no single label automatically supplies every protection.

<a id="section-773-29-development-turn-a-residual-warning-into-an-exact-co"></a>
## 29. Development: turn a residual warning into an exact conditioning example {#section-775-29-development-turn-a-residual-warning-into-an-exact-co}

Let the known design matrix be

$$X_\varepsilon=
 \begin{pmatrix}1&1\\0&\varepsilon\end{pmatrix},
 \qquad\varepsilon>0,$$

and let $v=(-1,1)^{\mathsf T}$. Then $X_\varepsilon v=(0,\varepsilon)^{\mathsf T}$. Two coefficient vectors separated by $Mv$ are separated in coefficient norm by $\sqrt2|M|$, while their fitted vectors differ by only $|M|\varepsilon$. This is a fully specified version of the near-collinearity warning.

Choose $M=\varepsilon^{-1/2}$. The fitted difference is $\sqrt\varepsilon$, tending to zero, while the coefficient difference is $\sqrt2/\sqrt\varepsilon$, tending to infinity. The matrix is invertible at every positive $\varepsilon$, so the issue is weak conditioning, not exact nonidentification at those fixed matrices. At $\varepsilon=0$, the null direction becomes exact and the coefficient contrast is no longer identifiable.

There is a statistical version. Suppose one response vector has normal law $N_2(X_\varepsilon\beta,\sigma^2I)$ with known $\sigma^2>0$. The KL divergence from the state $\beta$ to $\beta+Mv$ is

$$\frac{\lVert X_\varepsilon Mv\rVert^2}{2\sigma^2}
 =\frac{M^2\varepsilon^2}{2\sigma^2}
 =\frac{\varepsilon}{2\sigma^2}$$

for the chosen $M$. The first equality follows by expanding the equal-covariance normal log-density ratio and taking its expectation. Thus the recorded laws become close in this directed divergence even as their coefficient vectors separate. This does not invoke a general testing lower bound; it calculates exactly which observational distinction is becoming small.

To infer a small coefficient error from a small fitted error, one needs a lower bound such as $\lVert Xw\rVert\geq s_{\min}\lVert w\rVert$ with $s_{\min}>0$. It yields $\lVert w\rVert\leq\lVert Xw\rVert/s_{\min}$. In the displayed example the smallest singular value is at most $\varepsilon/\sqrt2$, by evaluating the ratio on $v$. The required amplification bound necessarily deteriorates.

A residual diagnostic and a coefficient interpretation can therefore disagree without either calculation being arithmetically wrong. Predictions at the observed design depend on $X\beta$; an individual coefficient depends on resolving directions that the design may barely preserve. Predictions at new covariates can also fail if they amplify those hidden directions. State the prediction domain and the coefficient target before treating a small training residual as a general accuracy certificate.

<a id="section-797-30-development-distinguish-a-counterexample-from-a-new-"></a>
## 30. Development: distinguish a counterexample from a new guarantee {#section-799-30-development-distinguish-a-counterexample-from-a-new-}

A counterexample has a specific logical job. It supplies a state satisfying a proposed claim's assumptions but violating its conclusion. The stopped-z calculation refutes transfer of a fixed-time error guarantee to a repeated-look rule. The shared-noise example refutes universal strict selection bias. Neither proves that every sequential procedure fails or that selection is harmless under all dependence structures.

A repair needs its own positive argument. Bonferroni follows from the union bound over a declared family. Independent confirmation follows from conditioning on selection data while the new data retain their reference law. Weighted randomisation follows from the actual assignment probabilities. A model diagnostic can motivate a new likelihood, but the replacement's calibration does not follow merely because the old likelihood was rejected.

It helps to track four kinds of sentence. An algebraic identity follows exactly from a specified record or law. A theorem adds hypotheses and quantifiers over states or repetitions. A diagnostic reports a discrepancy relative to a reference distribution or descriptive benchmark. A scientific conclusion adds a bridge to measurement, causation, transport or loss. The same numerical value can appear in several sentences without making their meanings interchangeable.

For example, a finite randomisation mean can be unbiased for a fixed enrolled population, while a two-model posterior remains sensitive to its prior weights and a transported population effect remains unresolved. Those statements can all be true for one observed record. Calling the entire analysis either “significant” or “inconclusive” would conceal which questions have actually been answered.

A finite Bayes example makes one quantifier difference especially sharp. Let an uninformative record have the same law at target states $0$ and $\sqrt M$, where $M>1$. Give the second state prior probability $\varepsilon=M^{-2}$. Under squared loss, the posterior is the prior and the Bayes action is $\varepsilon\sqrt M$. Its Bayes risk is $\varepsilon(1-\varepsilon)M=(1-M^{-2})/M$, tending to zero as $M$ grows. Its fixed-state risk at $\sqrt M$ is $(1-M^{-2})^2M$, tending to infinity. Both calculations follow by subtracting the same constant action from the two possible targets. Small integrated risk, even for an actual Bayes rule, supplies no uniform protection when the state weights are allowed to concentrate.

<a id="section-809-31-development-prove-finite-weighted-randomisation-cali"></a>
## 31. Development: prove finite weighted randomisation calibration {#section-811-31-development-prove-finite-weighted-randomisation-cali}

Let a finite reference experiment have possible outcomes $\omega\in\Omega$ with known probabilities $w_\omega>0$ summing to one. Fix a real statistic $T(\omega)$, with larger values declared more extreme. Define its upper-tail probability by

$$p(\omega)=\sum_{\nu\in\Omega}
 w_\nu\,1_{\{T(\nu)\geq T(\omega)\}}.$$

This definition includes ties. To prove validity, order the distinct statistic values from largest to smallest. Let the corresponding probability masses be $v_1,\ldots,v_K$, and write $c_j=\sum_{\ell=1}^jv_\ell$. Every outcome in group $j$ has p-value $c_j$. The event $p\leq\alpha$ comprises an initial collection of those groups, ending at the largest $j$ for which $c_j\leq\alpha$, or is empty. Its probability is exactly that final $c_j$, hence at most $\alpha$.

The proof gives super-uniformity under the declared finite reference law. It needs neither independence among individual pieces of a record nor equal weights. Equal-weight counting is one special case. With unequal assignment probabilities, replacing $w_\nu$ by a uniform menu changes the probability experiment and discards the justification.

Discreteness also explains conservative tests. If the smallest possible tail probability exceeds the chosen threshold, the rejection event is empty and its probability is zero. A valid level is an upper bound, not a promise that rejection occurs with that probability. Extra randomisation can sometimes attain an exact probability, but the auxiliary random variable and boundary rule would have to be part of the recorded procedure. None is assumed here.

In a treatment randomisation test, this construction applies after a sharp null makes the statistic under every possible assignment computable from the observed outcomes. The sharp no-effect null asserts every unit's two potential responses are equal. It is stronger than saying the average treatment effect is zero; heterogeneous positive and negative effects can average to zero without allowing sharp-null imputation. The reference calculation must name which null supplied the complete table.

Selection creates another scope condition. If the analysis first selects a statistic from the observed assignment, the finite function being calibrated is the entire selected procedure. Repeating only its final statistic across assignments while freezing a data-selected choice may represent another function. Either recompute the complete selection rule under each reference outcome or supply a separate conditional argument. The weighted tail formula is exact for its specified function, not a universal adjustment for an omitted analysis search.

This theorem supplies the positive calibration argument used in the dossier below. The full assignment law and the sharp-null imputation are both visible there. The resulting test can be conservative and low-powered in a tiny experiment; that limitation is an implication of the finite law, not evidence that a nominal percentage has been achieved by assertion.

<a id="section-828-32-erratum-and-general-bound-for-original-exercise-4"></a>
## 32. Erratum and general bound for original Exercise 4 {#section-830-32-erratum-and-general-bound-for-original-exercise-4}

<a id="section-830-original-exercise-4-exact-probability-versus-a-level-bo"></a>
### Original Exercise 4: exact probability versus a level bound {#section-832-original-exercise-4-exact-probability-versus-a-level-bo}

The original prompt described “level-$0.05$” tests but requested an equality requiring each rejection probability to be exactly $0.05$ under the same joint-null law. Its premise is explicitly corrected in place; its original heading, number, source line and complete key remain unchanged.

If independent rejection events have probabilities $q_1,\ldots,q_{20}$ at a declared joint-null state, their familywise error is $1-\prod_j(1-q_j)$. When only $q_j\leq0.05$ is guaranteed, this is at most $1-0.95^{20}$. Equality requires every $q_j=0.05$. Never-reject tests show why a level bound alone cannot establish equality. Even an exact composite-null size is a supremum over states, and different tests need not attain that supremum at the joint state being evaluated.

Without independence, the union bound still gives familywise error at most $\sum_jq_j$, capped by one. The corrected exercise states the stronger pointwise probabilities and independence needed for its unchanged product proof. This is a mathematical premise repair, not a new learner task or a claim that previous responses were graded under the new wording.

<a id="section-838-33-complete-synthetic-reference-dossier-six-assignments"></a>
## 33. Complete synthetic reference dossier: six assignments and two procedures {#section-840-33-complete-synthetic-reference-dossier-six-assignments}

<a id="section-840-worked-example-3-audit-the-full-finite-assignment-dossi"></a>
### Worked example 3: audit the full finite assignment dossier {#section-842-worked-example-3-audit-the-full-finite-assignment-dossi}

This is one fully specified reference for the synthetic-study option in Section 23. All six possible assignments are evaluated by hand; no real trial or random simulation run is claimed. The original open capstone prompt remains the assignment. The finite model supplies an exact reference against which a later implementation or learner dossier can be compared.

**Protocol and target.** Four fixed units have the potential responses below. Exactly two are assigned treatment uniformly among six subsets. Record unit identities, assignment vector $Z$ and observed response $Y_i^{\mathrm{obs}}=Z_iY_i(1)+(1-Z_i)Y_i(0)$. Treatment versions are stable, there is no interference, assignment is implemented as declared and outcomes are measured without error.

| Unit $i$ | $Y_i(0)$ | $Y_i(1)$ | Individual effect |
| --- | --- | --- | --- |
| 1 | 0 | 1 | 1 |
| 2 | 0 | 1 | 1 |
| 3 | 1 | 1 | 0 |
| 4 | 1 | 0 | $-1$ |

Call this schedule A. Its enrolled-population average effect is $\tau_A=1/4$. This is a fixed finite-population causal estimand under the stated potential-response assumptions, not a transported effect. At the observation-law level, positive probability of either treatment for every named unit reveals both potential responses through their possible records; a single realised allocation does not reveal the whole schedule.

**Observed law and procedures.** Let $D$ be treated mean minus control mean and let $H=D/2$ be a prespecified comparison rule. Each table row has probability $1/6$ under schedule A.

| Treated subset | Observed outcomes in unit order | $D$ | $H$ |
| --- | --- | --- | --- |
| $\{1,2\}$ | $(1,1,1,1)$ | $0$ | $0$ |
| $\{1,3\}$ | $(1,0,1,1)$ | $1/2$ | $1/4$ |
| $\{1,4\}$ | $(1,0,1,0)$ | $0$ | $0$ |
| $\{2,3\}$ | $(0,1,1,1)$ | $1/2$ | $1/4$ |
| $\{2,4\}$ | $(0,1,1,0)$ | $0$ | $0$ |
| $\{3,4\}$ | $(0,0,1,0)$ | $1/2$ | $1/4$ |

Use squared estimation loss $L(\tau,a)=(a-\tau)^2$. The law gives $E_A D=1/4$, $\operatorname{Var}_A D=1/16$ and $R_A(D)=1/16$. For $H$, its mean is $1/8$, variance $1/64$, squared bias $1/64$ and risk $1/32$. Shrinkage improves risk for this schedule, not necessarily for every possible schedule. The table is the complete accessible numerical alternative; it requires no visual encoding.

**A competing law and exact test.** Predeclare schedule B with $Y_i(0)=Y_i(1)=(1,0,1,1)_i$ for every unit, a sharp no-effect null with $\tau_B=0$. Both complete candidate schedules are fixed before assignment. Consider the possible record with treated subset $\{1,3\}$, observed outcomes $o=(1,0,1,1)$ and $D=1/2$. Both schedules give that record, but different possible records at other assignments. This illustrates finite-data ambiguity, not equality of the complete observation laws.

Under schedule B the one-sided randomisation statistic is $+1/2$ on treated subsets $\{1,3\},\{1,4\},\{3,4\}$ and $-1/2$ on the other three. The record's upper-tail p-value is therefore $1/2$; its two-sided absolute-value p-value is one. Under schedule B, both estimates have design mean zero, with risks $R_B(D)=1/4$ and $R_B(H)=1/16$ for its target zero. The weighted-tail proof in Section 31 supplies calibration under the sharp null. At a 5% threshold this tiny test never rejects, so its rejection probability is zero, within the promised upper bound. It cannot be advertised as a 5% equality or as a test of every zero-average-effect schedule.

**Bayesian cross-ledger.** Before assignment, put prior probability $\lambda$ on complete schedule A and $1-\lambda$ on complete schedule B, with a fixed $0<\lambda<1$. Both give the specific $\{1,3\}$ record likelihood $1/6$, so its Bayes factor is one and posterior schedule weights equal prior weights. The posterior mean effect is $\lambda/4$ and posterior variance is $\lambda(1-\lambda)/16$. At equal weights these are $1/8$ and $1/64$. These are conditional statements about a declared two-schedule model, not the design mean or design risk of $D$ and $H$.

**Untestable transport sensitivity.** Suppose the target population also contains two unobserved units with binary potential responses. If their total effect is $u\in\{-2,-1,0,1,2\}$, the six-unit average effect under schedule A for the enrolled units is $(1+u)/6$. Its possible values are $-1/6,0,1/6,1/3,1/2$. The data on the four enrolled units cannot choose among them. Assuming both outside effects are zero gives $1/6$, while a positive-effect conclusion is not shared by all compatible outside schedules. The finite set, rather than a smooth interpolated curve, is the sensitivity result.

<a id="section-876-34-changed-dossier-a-known-unequal-allocation-mechanism"></a>
## 34. Changed dossier: a known unequal allocation mechanism {#section-878-34-changed-dossier-a-known-unequal-allocation-mechanism}

Keep schedule A and exactly two treated units, but change assignment probabilities to $1/2$ for subset $\{1,2\}$ and $1/10$ for each of the other five subsets. This is a fully specified changed experiment. It activates the failure mechanism of analysing a nonuniform design as though it were uniform; the changed probabilities are not estimated or observed frequencies.

The same six records and their $D,H$ values remain possible. Now $P_A(D=0)=7/10$ and $P_A(D=1/2)=3/10$, giving $E_A D=3/20$ and bias $-1/10$ for $\tau_A=1/4$. Its squared error is still $1/16$ on every row. For $H$, risk is $(7/10)(1/16)=7/160$ because its positive output equals the target. Thus a bias change does not by itself determine a risk change.

The unit treatment probabilities are $\pi_1=\pi_2=7/10$ and $\pi_3=\pi_4=3/10$. Known-design inverse-probability adjustment gives

$$D_{\mathrm{HT}}=\frac14\sum_{i=1}^4
 \left\{\frac{Z_iY_i(1)}{\pi_i}
       -\frac{(1-Z_i)Y_i(0)}{1-\pi_i}\right\}.$$

Linearity of expectation gives $E_A D_{\mathrm{HT}}=\tau_A$. For this particular schedule the terms simplify to $D_{\mathrm{HT}}=(5/6)Z_3$: the treated contributions of units one and two cancel the untreated contributions of units three and four after using $\sum_iZ_i=2$. It equals $5/6$ with probability $3/10$ and zero otherwise. Hence its mean is $1/4$ and risk is $(3/10)(25/36)-1/16=7/48$. The unbiased repair has larger risk than $D$ here. This result is conditional on this schedule and declared squared loss; no estimator is promoted as universally preferable.

Under sharp-null schedule B, the three assignments with positive $D$ now have total probability $3/10$. The same $\{1,3\}$ record therefore has correctly weighted one-sided p-value $3/10$, rather than the uniform-menu value $1/2$. Its two-sided p-value remains one. The finite calibration proof applies with the changed weights. The assignment change must also enter the likelihood: both schedule models give this common record probability $1/10$, so their Bayes factor remains one.

These calculations identify exactly which statements changed. Uniform-design unbiasedness of $D$ failed; the known-weight unbiasedness identity survived; risk values changed; sharp-null p-values used the new weights; and missing outside-unit effects remained unresolved. None of those conclusions establishes what would happen in an actual study with unrecorded implementation defects.

<a id="section-894-35-dossier-simulation-plan-claim-ledger-and-self-review"></a>
## 35. Dossier simulation plan, claim ledger and self-review criteria {#section-896-35-dossier-simulation-plan-claim-ledger-and-self-review}

**Unexecuted simulation plan.** To check the finite theory, use $b\in\{1,2,8\}$ distinct four-unit blocks, each with schedule A, giving $n=4b$ units and target effect $1/4$. Vary assignment dependence between independent block assignments and one shared subset applied in every block. Vary the failure mechanism between the uniform and changed unequal assignment laws. These define twelve prespecified cells. A future implementation should record its random generator, seed, version, exact cell definitions and all repetitions; none is reported as executed here.

For independent blocks, the number of positive block contrasts is $K\sim \operatorname{Binomial}(b,q)$, where $q=1/2$ under the uniform law and $q=3/10$ under the changed law. Thus $\bar D=K/(2b)$ supplies an exact $b+1$-point reference, avoiding enumeration of $6^b$ assignment strings. Its mean is $q/2$, variance $q(1-q)/(4b)$ and risk for $1/4$ is that variance plus $(q/2-1/4)^2$. For common assignments, replace $b$ by one in the variance: repeating rows with the same random allocation does not create independent information.

Under uniform independent blocks, $R(\bar D)=1/(16b)$ while $R(\bar D/2)=1/64+1/(64b)$. Fixed half-shrinkage improves only for $b<3$, ties at $b=3$ and is worse for $b>3$. Under changed independent blocks, $R(\bar D)=1/100+21/(400b)$. These are theoretical reference values, not simulation summaries.

A proposed Monte Carlo check may use 2,500 independent repetitions per cell, report the empirical standard error for every estimated risk or rejection proportion and compare with the exact formulas. A proportion's standard deviation is at most $1/(2\sqrt{2500})=1/100$. Because these $\bar D$ squared errors lie in $[0,1/16]$, the standard deviation of their estimated mean risk is at most $1/(32\sqrt{2500})=1/1600$. These are Monte Carlo variability bounds, separate from study sampling variability and not certificates for a realised run. Failed agreement requires checking code, dependence and the declared design.

**Compact claim ledger.** Established finite identities are the six assignment outcomes, the displayed design means and risks, the weighted-tail calibration inequality and the two-schedule likelihood ratio. Model-conditional conclusions require stable potential responses, no interference, complete measurement, the declared allocation law and the supplied schedule or prior. Diagnostics compare a future implementation with exact finite references; they do not prove real-world assumptions. Open uncertainties include actual treatment implementation, measurement error, representativeness, outside-unit effects, suitable losses and any unexecuted simulation or human learning evidence.

**Self-review rubric.** For each original artifact use 0 for absent, 1 for present but incomplete and 2 for complete and mathematically consistent. Check separately: the protocol and recorded random variables; both full observation laws; the target and identification argument; both procedures and loss-specific risk calculations; the exact calibration proof and null scope; all simulation-plan axes and Monte Carlo uncertainty; the discrete outside-unit sensitivity set; posterior versus design quantities; the complete accessible numerical table; and the claim ledger with open limits. This is a twenty-point comparison aid, not a validated grade or a native writing-task record. A missing design law, unregistered change of target or conflation of posterior probability with p-value requires substantive repair regardless of the total.

<a id="section-908-36-optional-practice-extensions"></a>

<a id="section-406-summary"></a>
## Summary {#section-408-summary}

<a id="section-983-summary"></a>
A valid inferential claim declares its observation law, target, comparison class and calibration event. Counterexamples separate identification from conditioning, moment control from asymptotics, and reproducibility from design support. Preserve corrected premises and distinguish a pointwise equality from a level bound. The finite dossier shows how to combine exact assignment calculations, alternative procedures, sensitivity and bounded conclusions without claiming empirical or causal evidence absent from its model.

Return to the [book overview](#/books/principles-statistical-inference) for a prerequisite repair, or continue to [Advanced Statistical Inference](#/books/advanced-statistical-inference-reference) for the named L4 extensions.

## Exercises {#section-107-22-exercises-with-complete-solutions}

<a id="section-107-1-observational-equivalence"></a>
### 1. Observational equivalence {#section-109-1-observational-equivalence}

**Exercise 19.1**

In the missing-outcome construction of Section 1, compute the observed distribution of $(R,RY)$ under both laws.

<details>
<summary>Hint 1</summary>

Compute the law of the actually recorded pair $(R,RY)$.

</details>

<details>
<summary>Hint 2</summary>

Changing the unseen outcome in a nonresponding state leaves that pair's distribution unchanged.

</details>

<details>
<summary>Solution</summary>

**Solution.** Under either law, $(R,RY)=(1,0)$ with probability $1/2$ and $(0,0)$ with probability $1/2$. The missing value never enters the observed product. Hence every statistic of the observed record has the same distribution under both laws although their means differ.

</details>

<a id="section-134-2-an-unbiased-catastrophe"></a>
### 2. An unbiased catastrophe {#section-136-2-an-unbiased-catastrophe}

**Exercise 19.2**

For $\varepsilon =0.01$ and $M=1000$, compute the added variance in Section 2.

<details>
<summary>Hint 1</summary>

Separate the base observation variance and the independent rare-large term.

</details>

<details>
<summary>Hint 2</summary>

The rare term has variance $\varepsilon(1-\varepsilon)M^2$, even though it has been centred.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is $\varepsilon (1-\varepsilon )M^{2}=0.01(0.99)(10^6)=9900$. The base observation contributes variance one, so total variance is $9901$; unbiasedness has not controlled squared error.

</details>

<a id="section-161-3-delayed-consistency"></a>
### 3. Delayed consistency {#section-163-3-delayed-consistency}

**Exercise 19.3**

Prove the estimator in Section 3 is consistent.

<details>
<summary>Hint 1</summary>

A limit ignores any finite initial segment of a sequence.

</details>

<details>
<summary>Hint 2</summary>

After the stated cutoff the estimator is exactly the sample mean covered by the weak law.

</details>

<details>
<summary>Solution</summary>

**Solution.** For every fixed tolerance and every $n\ge 10^6$, $T_n=\bar X_n$. The weak law gives $P_\theta (|T_n-\theta |>\varepsilon )\to 0$. Changing finitely many initial terms cannot change a sequence's limiting probability behaviour.

</details>

<a id="section-188-4-familywise-error"></a>
### 4. Familywise error {#section-190-4-familywise-error}

**Exercise 19.4**

Derive $1-0.95^{20}$ for twenty independent tests each having rejection probability $0.05$ under the joint global null.

<details>
<summary>Hint 1</summary>

Use the corrected pointwise rejection probabilities and independence stated in the prompt.

</details>

<details>
<summary>Hint 2</summary>

The probability of no rejection is $0.95^{20}$; a mere level bound would give only an upper bound, as the retained erratum explains.

</details>

<details>
<summary>Solution</summary>

**Solution.** Under the joint null each test avoids rejection with probability $0.95$. Independence makes the probability of no rejection $0.95^{20}$; the complement is the probability of at least one rejection, approximately $0.642$.

</details>

<a id="section-215-5-bonferroni-repair"></a>
### 5. Bonferroni repair {#section-217-5-bonferroni-repair}

**Exercise 19.5**

Give per-test levels that guarantee FWER at most $0.05$ without independence.

<details>
<summary>Hint 1</summary>

Allocate the total error budget across the fixed family.

</details>

<details>
<summary>Hint 2</summary>

The union bound adds twenty marginal bounds of $0.05/20$ and needs no independence.

</details>

<details>
<summary>Solution</summary>

**Solution.** Use level $0.05/20=0.0025$ for each test. The union bound gives $P(\text{any false rejection})\le \sum_i 0.0025=0.05$, regardless of dependence.

</details>

<a id="section-242-6-sample-space-distinction"></a>
### 6. Sample-space distinction {#section-244-6-sample-space-distinction}

**Exercise 19.6**

Why may two proportional likelihoods have different p-values?

<details>
<summary>Hint 1</summary>

Likelihood compares parameter dependence at the observed record.

</details>

<details>
<summary>Hint 2</summary>

A tail probability also depends on the full set of possible records under its sampling or stopping protocol.

</details>

<details>
<summary>Solution</summary>

**Solution.** Likelihood proportionality compares parameter dependence at the observed record. A p-value sums or integrates tail probabilities over unobserved possible records under the protocol. Fixed-size and stopped protocols can have different sets and probabilities of possible records despite the same observed likelihood kernel.

</details>

<a id="section-269-7-sufficient-but-diagnostic"></a>
### 7. Sufficient but diagnostic {#section-271-7-sufficient-but-diagnostic}

**Exercise 19.7**

What statement would incorrectly overextend sufficiency?

<details>
<summary>Hint 1</summary>

State the purpose for which the statistic is sufficient.

</details>

<details>
<summary>Hint 2</summary>

Parameter reduction inside a model does not preserve every diagnostic check of the model itself.

</details>

<details>
<summary>Solution</summary>

**Solution.** “Data with the same sufficient statistic are equivalent for every purpose” is false. They are equivalent for parameter inference inside the specified family under the sufficiency theorem. Their discarded patterns can differ and matter for checking whether the family is credible.

</details>

<a id="section-296-8-confidence-quantifiers"></a>
### 8. Confidence quantifiers {#section-298-8-confidence-quantifiers}

**Exercise 19.8**

Negate the uniform coverage claim $\inf_\theta  P_\theta (\theta \in C(X))\ge 0.95$.

<details>
<summary>Hint 1</summary>

Negate the universal state quantifier before negating the coverage inequality.

</details>

<details>
<summary>Hint 2</summary>

One state with coverage below the target refutes the uniform assertion.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its negation is: there exists a state $\theta $ for which $P_\theta (\theta \in C(X))<0.95$. Exhibiting excellent coverage at another state cannot refute this negation.

</details>

<a id="section-323-9-endpoint-bootstrap"></a>
### 9. Endpoint bootstrap {#section-325-9-endpoint-bootstrap}

**Exercise 19.9**

Why are bootstrap samples from an empirical distribution unable to exceed $M_n$?

<details>
<summary>Hint 1</summary>

Each empirical resample selects values already present in the original sample.

</details>

<details>
<summary>Hint 2</summary>

Its maximum cannot exceed the observed maximum, unlike a genuinely new sample from the underlying endpoint model.

</details>

<details>
<summary>Solution</summary>

**Solution.** Every bootstrap draw is selected from the observed values, each at most the observed maximum. Therefore every bootstrap maximum is at most $M_n$, whereas a new sample from $\operatorname{Uniform}(0,\theta )$ can fall between $M_n$ and $\theta $ whenever $M_n<\theta $.

</details>

<a id="section-350-10-exchangeability"></a>
### 10. Exchangeability {#section-352-10-exchangeability}

**Exercise 19.10**

State one setting that justifies exact label permutation.

<details>
<summary>Hint 1</summary>

Specify a complete randomization under a sharp null.

</details>

<details>
<summary>Hint 2</summary>

Uniformity applies over the allowed assignments whose potential outcomes the null imputes.

</details>

<details>
<summary>Solution</summary>

**Solution.** In a completely randomized experiment under the sharp null of no unit-level treatment effect, outcomes are fixed and treatment labels are assigned uniformly over the allowed assignments. Recomputing the statistic over that assignment distribution gives exact randomization calibration.

</details>

<a id="section-377-11-collinearity"></a>
### 11. Collinearity {#section-379-11-collinearity}

**Exercise 19.11**

If $Xv=0$, compare fitted values from $\beta $ and $\beta +Mv$.

<details>
<summary>Hint 1</summary>

Multiply the coefficient perturbation by the rank-deficient design.

</details>

<details>
<summary>Hint 2</summary>

A null-space direction changes coefficients without changing fitted means.

</details>

<details>
<summary>Solution</summary>

**Solution.** $X(\beta +Mv)=X\beta +M Xv=X\beta $. Thus data on this design cannot distinguish any value along the null direction, even though coefficients can differ arbitrarily.

</details>

<a id="section-404-12-collider-sign"></a>
### 12. Collider sign {#section-406-12-collider-sign}

**Exercise 19.12**

Let independent fair binary $A,B$ and set $C=A+B$. Conditional on $C=1$, describe the association.

<details>
<summary>Hint 1</summary>

Condition the two independent bits on their sum being one.

</details>

<details>
<summary>Hint 2</summary>

Only $(1,0)$ and $(0,1)$ remain, creating a deterministic negative relationship.

</details>

<details>
<summary>Solution</summary>

**Solution.** The only possibilities are $(A,B)=(1,0)$ and $(0,1)$, equally likely. Hence $B=1-A$ exactly within the conditioned group: previously independent variables become perfectly negatively associated.

</details>

<a id="section-431-13-trial-transport"></a>
### 13. Trial transport {#section-433-13-trial-transport}

**Exercise 19.13**

Name information sufficient to support a transport analysis beyond randomization.

<details>
<summary>Hint 1</summary>

Randomization compares participants' potential outcomes.

</details>

<details>
<summary>Hint 2</summary>

Transport also needs a target population, relevant effect modifiers, a linking assumption and participation positivity.

</details>

<details>
<summary>Solution</summary>

**Solution.** One needs a target population, measured effect modifiers, an assumption linking trial and target conditional outcome responses, and positivity of trial participation across relevant covariate strata. Randomization supplies treatment exchangeability only within the trial.

</details>

<a id="section-458-14-positivity"></a>
### 14. Positivity {#section-460-14-positivity}

**Exercise 19.14**

What happens to inverse weights when an inclusion probability approaches zero?

<details>
<summary>Hint 1</summary>

An inverse probability becomes large when its denominator is small.

</details>

<details>
<summary>Hint 2</summary>

At a zero denominator the corresponding population information is never observed, so weighting cannot identify it.

</details>

<details>
<summary>Solution</summary>

**Solution.** The reciprocal weight diverges, so a rare observed unit can dominate the estimator and its variance. At probability zero the corresponding population stratum is never represented, and weighting cannot identify its contribution.

</details>

<a id="section-485-15-robust-target"></a>
### 15. Robust target {#section-487-15-robust-target}

**Exercise 19.15**

Give a distribution where median and mean differ.

<details>
<summary>Hint 1</summary>

Choose a distribution with a typical central mass and a smaller distant tail.

</details>

<details>
<summary>Hint 2</summary>

For mass 0.9 at zero and 0.1 at ten, compare the median zero with mean one.

</details>

<details>
<summary>Solution</summary>

**Solution.** Let $P(Y=0)=0.9$ and $P(Y=10)=0.1$. A median is zero while $E[Y]=1$. A median estimator can robustly estimate the median without estimating the mean.

</details>

<a id="section-512-16-prior-average-versus-pointwise"></a>
### 16. Prior-average versus pointwise {#section-514-16-prior-average-versus-pointwise}

**Exercise 19.16**

Can a procedure minimise prior-average risk while being poor at one state?

<details>
<summary>Hint 1</summary>

The integrated risk weights parameter regions by prior mass.

</details>

<details>
<summary>Hint 2</summary>

A small average can coexist with poor performance on a low-prior-mass region.

</details>

<details>
<summary>Solution</summary>

**Solution.** Yes. The integral weights states by the prior; a region of tiny prior mass can contribute little even if risk there is large. Bayes optimality is an integrated inequality and does not imply pointwise dominance.

</details>

<a id="section-539-17-winner-s-curse"></a>
### 17. Winner's curse {#section-541-17-winner-s-curse}

**Exercise 19.17**

Why is the maximum of unbiased noisy estimates generally upward biased for the maximum true effect?

<details>
<summary>Hint 1</summary>

Apply convexity of the maximum to the noisy estimate vector.

</details>

<details>
<summary>Hint 2</summary>

Expectation of the maximum is at least the maximum of expectations, with equality possible in special settings.

</details>

<details>
<summary>Solution</summary>

**Solution.** Maximization preferentially selects positive noise. Formally, $E[\max_j \hat \theta _j]\ge \max_j E[\hat \theta _j]=\max_j \theta _j$ by convexity of the maximum; the inequality is often strict when noise is nondegenerate.

</details>

<a id="section-566-18-regression-target"></a>
### 18. Regression target {#section-568-18-regression-target}

**Exercise 19.18**

What does an ordinary least-squares coefficient identify without causal assumptions?

<details>
<summary>Hint 1</summary>

Name the loss-minimizing target of a working linear model.

</details>

<details>
<summary>Hint 2</summary>

The best linear projection is associational unless a separate design or identification argument makes it causal.

</details>

<details>
<summary>Solution</summary>

**Solution.** It identifies a component of the best linear projection of the outcome on included regressors under the relevant distribution, provided moments and rank conditions hold. That associational projection becomes causal only with an additional design or identification argument.

</details>

<a id="section-593-19-sensitivity-envelope"></a>
### 19. Sensitivity envelope {#section-595-19-sensitivity-envelope}

**Exercise 19.19**

Why is reporting results over several plausible missing-outcome shifts more informative than one MAR estimate?

<details>
<summary>Hint 1</summary>

The shift parameter describes an unverified missing-versus-observed mean difference.

</details>

<details>
<summary>Hint 2</summary>

Varying it reveals dependence of conclusions on that assumption rather than identifying the true shift.

</details>

<details>
<summary>Solution</summary>

**Solution.** The envelope displays which conclusions rely on the untestable equality between observed and missing conditional outcome laws. It does not identify the correct shift, but makes dependence on that assumption visible.

</details>

<a id="section-620-20-audit-a-claim"></a>
### 20. Audit a claim {#section-622-20-audit-a-claim}

**Exercise 19.20**

An analyst says, “The significant adjusted coefficient proves the programme works.” List four missing links.

<details>
<summary>Hint 1</summary>

Separate identification, calibration, model adequacy and practical decision criteria.

</details>

<details>
<summary>Hint 2</summary>

A reproducible selected p-value alone supplies none of the missing causal, missingness or transport premises.

</details>

<details>
<summary>Solution</summary>

**Solution.** At minimum: a defined causal estimand; a design or exchangeability argument for treatment; justification that adjustment avoids rather than creates bias; and calibration accounting for selection or multiplicity. One also needs measurement, missingness, model-diagnostic, practical-loss, and transport arguments before “works” is defensible.

</details>


<a id="section-648-23-capstone-an-auditable-inference-dossier"></a>

<a id="section-910-36-optional-practice-extensions"></a>
### 21. SI-22-E21: a one-sided stopped normal test {#section-914-si-22-e21-a-one-sided-stopped-normal-test}

**Exercise 19.21**

Let independent $X_1,X_2\sim N(0,1)$, $Z_1=X_1$ and $Z_2=(X_1+X_2)/\sqrt2$. For $c=\Phi^{-1}(1-\alpha)$ and $0<\alpha<1$, stop and reject if $Z_1>c$; otherwise reject if $Z_2>c$. Derive its exact null rejection probability as a one-dimensional integral and prove that it exceeds $\alpha$. Explain why two independent-test multiplication is unavailable.


<details>
<summary>Hint 1</summary>

Separate the first-look rejection from the second-look rejection after a nonrejection.

</details>

<details>
<summary>Hint 2</summary>

Condition on $X_1=x\le c$ and integrate the remaining independent $X_2$ tail; the extra integral is positive.

</details>


<a id="section-935-si-22-e22-small-fitted-change-large-coefficient-change"></a>
### 22. SI-22-E22: small fitted change, large coefficient change {#section-937-si-22-e22-small-fitted-change-large-coefficient-change}

**Exercise 19.22**

Use $X_\varepsilon=\begin{pmatrix}1&1\\0&\varepsilon\end{pmatrix}$ and $v=(-1,1)^{\mathsf T}$. Set $\varepsilon=1/100$ and $M=10$. Compute the fitted and coefficient norm changes from $\beta$ to $\beta+Mv$, and their KL divergence under observation covariance $I_2$. Is the coefficient identified at this positive $\varepsilon$?


<details>
<summary>Hint 1</summary>

Apply $X_\varepsilon$ to the coefficient-change direction.

</details>

<details>
<summary>Hint 2</summary>

The fitted change is $(0,M\varepsilon)$ while the coefficient norm is $M\sqrt2$; normal KL is half the squared fitted norm.

</details>


<a id="section-958-37-solutions-to-practice-extensions"></a>

<a id="section-1028-solutions"></a>
## Solutions {#section-1030-solutions}

<a id="section-960-37-solutions-to-practice-extensions"></a>
<details>
<summary>Solution</summary>

<a id="section-963-si-22-e21-a-one-sided-stopped-normal-test-solution"></a>
### SI-22-E21: a one-sided stopped normal test — solution {#section-965-si-22-e21-a-one-sided-stopped-normal-test-solution}

The first look rejects with probability $\alpha$. For a first value $x\leq c$, the second rejects when $X_2>c\sqrt2-x$, giving total probability $\alpha+\int_{-\infty}^c\phi(x)\{1-\Phi(c\sqrt2-x)\}\,dx$. The integral is strictly positive, and the union bound gives total at most $\min(1,2\alpha)$. The two z statistics have covariance $1/\sqrt2$, so their rejection events cannot be treated as independent tests merely because each marginal statistic is standard normal.

</details>
<details>
<summary>Solution</summary>

<a id="section-971-si-22-e22-small-fitted-change-large-coefficient-change-"></a>
### SI-22-E22: small fitted change, large coefficient change — solution {#section-973-si-22-e22-small-fitted-change-large-coefficient-change-}

The coefficient difference is $10v$ with norm $10\sqrt2$. Its fitted difference is $10X_\varepsilon v=(0,1/10)^{\mathsf T}$, with norm $1/10$. Equal-covariance normal KL is half the squared mean difference, namely $1/200$. Since the determinant of $X_\varepsilon$ is $1/100\ne0$, the mean map is injective and the coefficient is identifiable. The example exhibits poor conditioning rather than exact nonidentification; a small fitted discrepancy alone does not bound coefficient error without a quantitative inverse bound.

</details>

<a id="section-977-sources"></a>

## Sources {#section-979-sources}

All earlier references, exact theorem locators, probability-model qualifications and source notes in this chapter remain part of the exposition. The book [reference guide](references-and-attribution-guide.md) records the primary source map.

<a id="section-981-summary"></a>
