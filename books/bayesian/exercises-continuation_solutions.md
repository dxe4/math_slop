# Continuation solutions

Protected worked reference: consult only after saving an attempt. Rubrics allow equivalent justified methods. These solutions are excluded from ordinary learner retrieval.

<!-- begin:adv.outcome_regression.1 -->

## Adv outcome regression 1 {#adv-outcome-regression-1}

**Identify a nominal model.** Exponentiating and normalizing gives (1/6, 1/2, 1/3). For any finite c, exp(z_k+c)/sum_j exp(z_j+c) equals exp(z_k)/sum_j exp(z_j), because exp(c) cancels. Fixing one logit at zero removes this common-shift redundancy. With service as baseline, the new ready coefficient vector is minus the old service vector, and the new retire vector is old retire minus old service. They share the old service vector and therefore generally have nonzero covariance even when the old nonbaseline vectors were independent. Re-expressing that induced joint prior preserves predictions; imposing fresh independent priors generally does not. The likelihood is invariant to baseline coordinates, but a prior is a distribution over those coordinates.

**Four-mark rubric:** two marks for the normalized vector and correct cancellation proof; one for deriving the transformed vectors or their shared dependence; one for explicitly distinguishing a coordinate change from a changed prior model. Equivalent baseline choices receive full credit.

<!-- end:adv.outcome_regression.1 -->

<!-- begin:adv.outcome_regression.2 -->

## Adv outcome regression 2 {#adv.outcome_regression.2}

**Calculate ordered probabilities.** At x=0 the cumulative probabilities are logistic(−0.8)=0.310025519 and logistic(0.6)=0.645656306. Differencing gives (0.310025519, 0.335630787, 0.354343694). At x=1 the cumulative probabilities are logistic(−1.5)=0.182425524 and logistic(−0.1)=0.475020813, giving (0.182425524, 0.292595289, 0.524979187). Both vectors sum to one within rounding. At either cumulative split the odds are exp(c_k−0.7x), so a unit increase in x multiplies them by exp(−0.7), approximately 0.496585. These are odds of being at or below a boundary; their direction is toward higher categories as x increases. Logistic transformation is nonlinear, and the middle category is a difference of transformed values, so equal log-odds slopes do not imply equal or constant probability changes.

**Four-mark rubric:** two marks for both correct vectors via cumulative probabilities; one for the multiplier with correct direction and a normalization check; one for distinguishing cumulative odds from category probabilities. Allow sensible rounding.

<!-- end:adv.outcome_regression.2 -->

<!-- begin:adv.outcome_regression.3 -->

## Adv outcome regression 3 {#adv.outcome_regression.3}

**Diagnose identification and ordering.** With probabilities logistic(c_k−alpha−x beta), replacing c_k by c_k+h and alpha by alpha+h leaves every cumulative probability unchanged. One repair removes alpha and writes cutpoints m±exp(r)/2 with proper Normal priors on m and r and proper slope priors; another fixes an appropriate location constraint and transforms the prior consistently. Ordering says which cumulative splits are meaningful. Proportional odds adds the claim that both splits share the same predictor slopes. Neither ordering nor low R-hat establishes that scientific restriction. Replicate cumulative category proportions across predetermined load and age ranges, reproducing the observed predictor distribution; look for incompatible trends at the two splits. Compare a declared nominal alternative on independent observations, with uncertainty in the paired score difference. A sparse sample may not sharply reveal a false restriction.

**Four-mark rubric:** two marks for the invariance and an explicit identifiable proper-prior repair; one for a category-specific or cumulative predictive check; one for distinguishing sampler diagnostics from assumptions and acknowledging limited information. Alternative identified parameterizations are valid.

<!-- end:adv.outcome_regression.3 -->

<!-- begin:adv.study_design.1 -->

## Adv study design 1 {#adv-study-design-1}

**Separate planning from analysis.** Future counts have beta-binomial probabilities choose(n,s) B(3+s,2+n−s)/B(3,2). The declared analysis reports Beta(1+s,1+n−s) and applies its tail threshold. For planning conditional continuations and truth-dependent losses, the updated design distribution is Beta(3+s,2+n−s). These are distinct conditional distributions serving distinct questions. Replacing the design prior changes the weights assigned to possible studies, but not the action taken at a given count when the analysis rule is frozen. Multiplying the two priors together would invent a third analysis and change the rule being evaluated; it is not the specified treatment of two independent observations. A difference between the priors should be justified by the prospective scenario or stipulated procedure, not hidden.

**Four-mark rubric:** two marks for the correct predictive law and analysis posterior; one for the updated design distribution and unchanged action; one for the no-double-counting explanation and an explicit interpretation of the differing priors.

<!-- end:adv.study_design.1 -->

<!-- begin:adv.study_design.2 -->

## Adv study design 2 {#adv.study_design.2}

**Enumerate a new capped policy.** At n=2, q is 1/8, 1/2, or 7/8, so s=0 rejects, s=1 continues, and s=2 approves. Each has design mass 1/3. At n=5, approval requires at least four successes. Conditional on continuing, the additional count has Beta-binomial(3,2,2) probabilities (1/5,3/10,3/10,1/5). The terminal table is:

| n | s | Action | Mass |
|---|---|---|---|
| 2 | 0 | reject | 1/3 |
| 2 | 2 | approve | 1/3 |
| 5 | 1 | reject | 1/15 |
| 5 | 2 | reject | 1/10 |
| 5 | 3 | reject | 1/10 |
| 5 | 4 | approve | 1/15 |

Masses sum to one. Assurance is 1/3+1/15=2/5; expected size is 2(2/3)+5(1/3)=3. Independent single-trial recursion uses transition (1+s)/(2+n). Alternatively enumerate all 32 length-five paths with exact path probability s!(5−s)!/6!, assigning each its first permitted stopping time. Both independently reproduce these fractions in the recorded reference. Unobserved suffixes of early-stopped paths are summed out, not charged as extra tests.

**Four-mark rubric:** two marks for actions and the complete normalized table; one for both requested summaries; one for an independent check that respects the stopping rule. Do not award the check mark for merely repeating the same count sum.

<!-- end:adv.study_design.2 -->

<!-- begin:adv.study_design.3 -->

## Adv study design 3 {#adv.study_design.3}

**Assess an error-rate claim.** The claimed guarantee does not follow. The posterior tail is conditional on observed data under an analysis prior. False-approval probability is the probability of crossing an approval boundary under repeated datasets at a fixed p at or below the reliability threshold. Extra looks change that event. For a distinct exact counterexample, take a uniform analysis prior, one Bernoulli trial, reliability boundary p=0.2 and approval threshold 0.95. One success gives Beta(2,1), with posterior P(p>0.2)=1−0.2²=0.96, so approval occurs after success. One failure gives Beta(1,2), whose tail is 0.8²=0.64, so approval fails. At fixed truth p=0.2, the false-approval probability is therefore 0.2, exceeding 0.05 even without extra looks. Freeze looks, cap, success/futility rules, delayed-outcome treatment, sampling assumptions, and analysis prior. Then enumerate or recursively propagate states using success probability p, stopping exactly when the rule says; repeat across the null parameter range or establish the relevant worst case. Simulation can supplement exact calculation with MCSE or finite-simulation bounds. If the policy is redesigned for error control, assess the revised complete policy rather than inheriting old evidence.

**Four-mark rubric:** two marks for rejecting the guarantee and explaining the conditioning distinction; one for a valid fixed-truth calculation; one for specifying the complete policy and acknowledging that extra looks require reevaluation.

<!-- end:adv.study_design.3 -->

<!-- begin:adv.survival.1 -->

## Adv survival 1 {#adv-survival-1}

**Derive a censored exponential likelihood.** The likelihood is f(3)f(7)S(6)=theta² exp(−16 theta). Two failures supply two density factors, while sixteen belt-weeks contribute exposure, including all six censored weeks. Multiplication by the prior kernel theta^(3−1) exp(−8 theta) gives theta^(5−1) exp(−24 theta), hence Gamma(shape 5, rate 24 weeks). Its mean is 5/24 per week. Theta and event densities have inverse-week units; S(6) is dimensionless. The Gamma rate is measured in weeks and is the reciprocal of its software scale. Calling the third record a failure would wrongly produce shape six; discarding it would wrongly remove six weeks from the rate update. This derivation assumes independent exponential lifetimes and censoring unrelated to lifetime after conditioning on modeled information.

**Four-mark rubric:** two marks for the density/survival likelihood and posterior; one for correct units and exposure interpretation; one for the censoring assumption or a correct explanation of the two erroneous alternatives.

<!-- end:adv.survival.1 -->

<!-- begin:adv.survival.2 -->

## Adv survival 2 {#adv.survival.2}

**Compute an interval event probability.** S(8)=exp[−0.8^1.5], approximately 0.488927. The requested event probability is 1−S(12)/S(8)=1−exp[−(1.2^1.5−0.8^1.5)], approximately 0.450635. Both values are dimensionless and lie in [0,1]. Integrating the Weibull event density from eight to twelve and dividing by S(8) independently gives the same conditional probability. Hazard at eight has inverse-week units and describes an instantaneous rate among survivors, not an event probability over four weeks. Under parameter uncertainty, also specify whether the target averages the parameter-specific conditional probability or conditions a new posterior predictive belt on having survived; the latter reweights parameters by survival.

**Four-mark rubric:** two marks for survival and the correctly conditioned interval calculation; one for an independent integration check or unit/probability check; one for distinguishing hazard/density from finite-interval probability. Accept accurate unrounded expressions.

<!-- end:adv.survival.2 -->

<!-- begin:adv.survival.3 -->

## Adv survival 3 {#adv.survival.3}

**Critique informative withdrawal.** An alarm associated with imminent failure can make withdrawal informative even after conditioning on workload. The observed censoring event then carries information about latent failure beyond simply surviving to that time; omitting the withdrawal mechanism may bias survival estimates. More draws only reduce Monte Carlo error under the chosen model and do not repair that scientific assumption. Record alarm timing, severity, withdrawal reasons, and relevant predictors where possible. A joint lifetime/withdrawal model or explicit sensitivity analysis over plausible dependencies can show how conclusions depend on the unobserved mechanism. State identifiability limits: additional assumptions may be necessary and are not validated by convergence diagnostics. Restrict interpretation to the observed process or a clearly qualified population rather than asserting operational reliability from the administrative model.

**Four-mark rubric:** two marks for identifying conditional dependence and its likelihood consequence; one for a concrete data/model/sensitivity response; one for separating numerical precision from identification and limiting conclusions. Do not require an unsupported competing-risk model.

<!-- end:adv.survival.3 -->

<!-- begin:adv.gp_hyperparameters.1 -->

## Adv gp hyperparameters 1 {#adv.gp_hyperparameters.1}

Let $H$ be the component index and $m=wm_1+(1-w)m_2$. Conditioning the centered second moment gives
$$
\operatorname{Cov}(Y)=wV_1+(1-w)V_2+w(1-w)(m_1-m_2)(m_1-m_2)^T.
$$
The first term averages conditional covariance; the final outer product represents uncertainty in conditional means. In the scalar case the mean is −.2, within-component variance is .4(.5)+.6(2)=1.4 and between-component variance is .4(.6)(−3)^2=2.16, totaling 3.56. Independently, compute $E[Y^2]=.4(4.5)+.6(3)=3.6$ and subtract $(−.2)^2$ to obtain 3.56. A covariance at one selected hyperparameter is neither of these averages in general. Total variance is at least the averaged conditional variance, but need not exceed the variance under an arbitrarily selected component. Finite second moments and normalized weights are assumed.

**Four-mark rubric:** two marks for the conditional and between-mean terms; one for the numerical value and independent second-moment check; one for the precise plug-in comparison and finite-moment assumption.

<!-- end:adv.gp_hyperparameters.1 -->

<!-- begin:adv.gp_hyperparameters.2 -->

## Adv gp hyperparameters 2 {#adv.gp_hyperparameters.2}

The CDF is $F(q)=.3\Phi((q+1)/.5)+.7\Phi(q-1)$. At q=2 the CDF is about .88894 and at q=2.2 it is about .91945, so [2,2.2] brackets the root. Numerical inversion gives approximately 2.06757; substitution returns .9 up to the solver's residual. By contrast the component 90th percentiles are −1+.5(1.2815516) and 1+1.2815516. Their weighted average is 1.4893188. Substitution into the mixture CDF gives approximately .78138, far below .9. The inverse of a weighted sum is generally not the weighted sum of inverses. A distribution's tail mass, rather than an averaged endpoint label, determines its percentile. The calculation concerns this stated continuous mixture; a latent-function interval and a noisy-measurement interval would require their respective component variances.

**Four-mark rubric:** two marks for the weighted CDF and correctly bracketed root; one for a substituted-CDF check and comparison endpoint; one for explaining noncommutation and the specified predictive target. Reasonable rounding earns credit.

<!-- end:adv.gp_hyperparameters.2 -->

<!-- begin:adv.gp_hyperparameters.3 -->

## Adv gp hyperparameters 3 {#adv.gp_hyperparameters.3}

A latent curve has one shared hyperparameter pair under the stated model. Redrawing length separately by input replaces that model with unrelated local choices. Even with one shared pair, independent marginal draws omit the conditional off-diagonal covariance of function values. Repair the algorithm by drawing a single posterior hyperparameter pair per curve, computing its full query mean/covariance, and applying a Cholesky or checked eigendecomposition to one vector of independent standard Normals. For trapezoid weights a, the conditional average variance is $a^TV_Ha$. Its integrated variance adds $\operatorname{Var}_H(a^Tm_H)$ to $E_H[a^TV_Ha]$. Compare simulated average moments with those analytic quantities using MCSE. A pointwise histogram alone can pass while the joint curve is wrong. A maximum on a finite grid remains distinct from a continuum maximum.

**Four-mark rubric:** two marks for both dependency errors and the repaired sampling hierarchy; one for the covariance-sensitive formula/check; one for the pointwise-check or finite-grid limitation.

<!-- end:adv.gp_hyperparameters.3 -->

<!-- begin:adv.predictive_combination.1 -->

## Adv predictive combination 1 {#adv.predictive_combination.1}

With w on the first column, $L(w)=\log(.3+.5w)+\log(.7-.5w)+\log(.4+.2w)$. Its derivative is $.5/(.3+.5w)-.5/(.7-.5w)+.2/(.4+.2w)$. Multiplication by the positive denominator gives $.122-.12w-.15w^2=0$. The admissible root is $w=(-.12+\sqrt{.0876})/.3\approx.58658$. The other root is negative. The derivative is positive at zero and negative at one, while the second derivative is a sum of negative terms, proving the interior maximum. Independent grid evaluation or direct comparison with both endpoint objectives checks the numerical result. Averaging log probabilities creates a linear objective in w and generally selects an endpoint; it does not score the predictive mixture. These supplied rows train weights, so their optimized score is not untouched evaluation evidence.

**Four-mark rubric:** two marks for the correct mixed-density objective and optimum; one for concavity/endpoints plus a numerical check; one for the distinction from averaged logs and development-versus-evaluation limitation.

<!-- end:adv.predictive_combination.1 -->

<!-- begin:adv.predictive_combination.2 -->

## Adv predictive combination 2 {#adv.predictive_combination.2}

The full-data scaler uses held-out inputs to define a fitted transformation. More seriously, the held-out group mean uses the very outcomes being predicted. For a new-group target, allocate complete groups to folds, fit transformations and all population/hyperparameters using training groups only, and integrate the new group's effect from its model rather than estimating it from its outcomes. Evaluate comparable predictive densities for the chosen scoring unit; if scoring a whole group jointly, preserve its shared latent effect instead of multiplying unrelated marginal predictions. Fit weights from the aligned held-out matrix, refit declared candidates on development data, and freeze transformations, weights and rules before reading independent outer groups. Predict from available queries and score outcomes separately. Known-group prediction is a different target and would require a separately specified information set.

**Four-mark rubric:** two marks for identifying both leaks and repairing fold-contained estimation; one for the new-group scoring unit and shared-effect treatment; one for independent outer evaluation and the target distinction.

<!-- end:adv.predictive_combination.2 -->

<!-- begin:adv.predictive_combination.3 -->

## Adv predictive combination 3 {#adv.predictive_combination.3}

The weight says that the complex predictive density received 90% of the fitted mixture under the development scoring objective and candidate library. It is not 90% probability of model truth, nor a guarantee of superior future performance. On this outer sample the simpler candidate scored better; report the paired row or group score difference, an uncertainty estimate appropriate to dependence, and the evaluation population. Check implementation and information boundaries, but do not reinterpret a genuine predictive loss as an optimizer failure. Choosing the simpler model after this comparison uses the outer outcomes for selection. That choice can inform the next development cycle, but an independent validation claim then needs fresh data or a previously specified outer selection/evaluation scheme. The magnitude and uncertainty of the loss matter more than the weight's apparent decisiveness.

**Four-mark rubric:** two marks for correct weight meaning and honest negative result; one for paired uncertainty and scoring-unit interpretation; one for explaining why a revised rule needs new evaluation.

<!-- end:adv.predictive_combination.3 -->

<!-- begin:adv.variational_fit.1 -->

## Adv variational fit 1 {#adv.variational_fit.1}

The determinant is 1−.36=.64 and precision is $\Sigma^{-1}=\begin{pmatrix}1&.6\\.6&1\end{pmatrix}/.64$. Minimizing Gaussian reverse KL over diagonal covariance gives each variance equal to the reciprocal corresponding precision diagonal, namely .64. Differentiating the variance-dependent objective $\tfrac12\sum_j(\Lambda_{jj}v_j-\log v_j)$ gives $v_j=1/\Lambda_{jj}$, confirming the optimum. Exact sum variance is 1+1+2(−.6)=.8, and exact difference variance is 1+1−2(−.6)=3.2. The independent approximation gives 1.28 for both. It therefore overstates the sum variance and understates the difference variance despite reducing each marginal variance. The statement requires a specified family, KL direction, coordinate system and target; it is not a universal property of all VI procedures.

**Four-mark rubric:** two marks for precision and optimal variances with a derivation; one for both exact/approximate contrasts; one for the target-specific interpretation and stated KL/family assumptions.

<!-- end:adv.variational_fit.1 -->

<!-- begin:adv.variational_fit.2 -->

## Adv variational fit 2 {#adv.variational_fit.2}

Set $G=\exp(m_b+v_b/2)$, $H=\exp(2m_b+2v_b)$ and $c=\operatorname{Cov}(a,b)$. Expanding the square and applying Gaussian exponential moments yields $y^2-2ym_a-2yxG+m_a^2+v_a+2x(m_a+c)G+x^2H$. The cross term retains covariance and reduces correctly to independent moments when c=0. For the assessed givens, the value is $1.25-4.4e^{.08}+4e^{.32}$, approximately 1.992048. Dropping covariance increases it by $.4e^{.08}$, approximately .433315; this is an objective error before any optimization. Sum these expectations over observations, multiply by −1/(2sigma²), and add the Normal likelihood constant, expected log priors and Gaussian entropy to obtain the ELBO. Exact moments evaluate that objective but do not optimize its variational parameters. An independent Gauss–Hermite integration of the direct log joint at several fixed Gaussian distributions checks the expression; centered finite differences can separately check its optimization gradient. Agreement on a fixed distribution is implementation evidence, not evidence that the Gaussian family represents the posterior tail accurately.

**Four-mark rubric:** two marks for the complete expansion including covariance; one for a usable ELBO assembly and independent check; one for separating objective evaluation, optimization and family adequacy.

<!-- end:adv.variational_fit.2 -->

<!-- begin:adv.variational_fit.3 -->

## Adv variational fit 3 {#adv.variational_fit.3}

A flat trace alone may indicate stationarity, a poor local solution, numerical precision loss or premature stopping. Retain termination messages, compare declared starts, inspect gradient norms and verify gradients/objective independently. If those checks support accurate optimization, a persistent reference-tail difference is evidence that the selected family or KL objective misses this target; a fuller covariance need not repair nonlinear shape. Compare a richer family or use the independently validated reference for the decision, reporting target-specific errors. Separately, the reference conditions on the same likelihood and priors, so agreement with it cannot establish sensor-model adequacy; predictive checks and sensitivity to noise or response assumptions address scientific error. Additional draws from the current approximation only improve its own Monte Carlo precision. R-hat does not certify a deterministic VI optimizer.

**Four-mark rubric:** two marks for separating all three error sources and appropriate diagnostic actions; one for a target-specific reference comparison; one for explaining the limits of extra draws and convergence terminology.

<!-- end:adv.variational_fit.3 -->

<!-- begin:adv.splines.1 -->

## Adv splines 1 {#adv.splines.1}

The prediction is .1(2)+.6(−.5)+.3(1)=.2. Holding the input fixed makes its basis row fixed, and the fitted value is linear in coefficients: doubling all coefficients doubles it, and coefficient sums map to prediction sums. As the input changes, the basis values change piecewise polynomially, so the resulting curve need not be a straight line. This permits nonlinear response shapes while retaining Gaussian regression calculations conditional on Gaussian coefficient priors and smoothing parameters. The fact that the active basis values sum to one also checks constant reproduction: equal coefficients would give that same constant at every valid input. It does not guarantee that arbitrary coefficients produce a monotone curve or that predictions outside the specified domain are justified.

**Four-mark rubric:** two marks for the dot product and precise distinction between the two linearities; one for the Gaussian-fitting or constant-reproduction check; one for the monotonicity/domain limitation.

<!-- end:adv.splines.1 -->

<!-- begin:adv.splines.2 -->

## Adv splines 2 {#adv.splines.2}

If Rv=0, replacing c by c+tv leaves the quadratic penalty unchanged for every real t. Integrating the proposed density along either unbounded null direction therefore diverges: the prior is improper. For the integrated squared-second-derivative penalty, the nullspace represents affine functions, since their second derivative is zero. Split coordinates into nullspace and positive-penalty directions, give each unconstrained null coordinate an explicit proper Normal prior, and scale the positive directions by inverse square roots of their eigenvalues before assigning proper conditional Normal priors. A proper prior on logtau completes the scale model. In an additive model, training sum-zero constraints first remove each redundant constant, leaving one affine direction per smooth plus the separately proper intercept. Posterior propriety in a particular dataset would not retroactively make the omitted nullspace prior proper.

**Four-mark rubric:** two marks for the invariant-direction proof and affine nullspace; one for a complete explicit proper-prior repair; one for separating identifiability or posterior propriety from prior normalization.

<!-- end:adv.splines.2 -->

<!-- begin:adv.splines.3 -->

## Adv splines 3 {#adv.splines.3}

The intercept and unrestricted smooth constants are redundant. Impose training empirical sum-zero constraints for both effects, store the resulting transformations, and reuse them for all queries. Choose physical knots prospectively or select them entirely within development folds; evaluation outcomes cannot influence them. Complete derivative penalties with proper priors on the remaining affine null directions and intercept, and infer or integrate curvature scales from training data rather than hand-picking a visually attractive curve. Compare with a linear model using those same intercept/affine directions and matching priors, then evaluate both frozen procedures on independent outcomes. Clamped knots define endpoint basis behavior, not a flat boundary or scientific extrapolation rule. Reject out-of-domain predictions by default or explicitly model and justify an extension. Centering resolves algebraic ambiguity, not weak support or unmodeled interactions.

**Four-mark rubric:** two marks for identification and leakage repairs; one for learned smoothing and a matched linear comparison; one for the explicit boundary/support limitation.

<!-- end:adv.splines.3 -->
