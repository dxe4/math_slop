var e=`---
parent_id: book-computational-bayesian-modeling
chapter_id: decision-sensitivity-model-uncertainty
title: "Decision Sensitivity and Model Uncertainty"
level: graduate
license: CC BY-SA 4.0
---

# Decision Sensitivity and Model Uncertainty

Preparation is the primary [Bayesian Inference course](/bayesian/site/course/syllabus.html), probability with conditional expectation, and the preceding modeling chapter when one is listed. Computational algorithms continue in [MCMC Volume 1](/books/mcmc:book:monte-carlo-markov-chain-computation/).

This chapter continues [Comparison, Scores and Decisions](comparison-scores-decisions.md), retaining its notation, model and observation protocol. Read that treatment before importing a displayed formula whose parameters were defined there.

## Why the Normal companion has an exact tail warning

With known observation variance one and prior $\\mu\\sim N(0,9)$, the full posterior has
$$v_n=(n+1/9)^{-1},\\qquad m_n=v_n\\sum_j y_j.$$
Deleting observation $i$ gives $v_{-i}=(n-1+1/9)^{-1}$ and $m_{-i}=v_{-i}\\sum_{j\\ne i}y_j$. Integrating one future Normal observation gives
$$\\log p(y_i\\mid y_{-i})=
-\\tfrac12\\log\\{2\\pi(1+v_{-i})\\}
-\\frac{(y_i-m_{-i})^2}{2(1+v_{-i})}.$$
These are actual refitted posteriors. The formula also covers $n=1$: the empty training set returns the original proper prior.

There is an analytic diagnostic beyond a fitted Pareto shape. Under the full posterior, $r_i(\\mu)$ is proportional to $\\exp\\{(\\mu-y_i)^2/2\\}$. Its $q$th moment integrates a quadratic exponential with coefficient $-\\tfrac12(v_n^{-1}-q)$ on $\\mu^2$. The integral is finite exactly when $qv_n<1$. At equality, a nondecaying constant or linear exponential still has an infinite integral over the real line.

Transforming the Gaussian tail by this quadratic exponential gives a regularly varying weight tail with Pareto shape $k=v_n$. The Gaussian survival probability has leading power $r^{-1/v_n}$, with the mean-dependent factors slowly varying on that scale. This tail calculation concerns the unsmoothed ratios, independently of a finite-sample GPD fit.

For thirty observations, $v_n=9/271$, so the first and second raw-weight moments exist. For the adverse dataset $[8]$, the full posterior is $N(7.2,0.9)$, giving $k=0.9$. The raw mean is finite but the variance is infinite. An ordinary independent-sample variance formula for the raw importance mean is therefore not justified, even though the posterior draws themselves are independent and Normal.

Leaving the sole observation out gives predictive $N(0,10)$ and exact log density
$$-\\tfrac12\\log(20\\pi)-3.2.$$
This is the reference and fallback prediction. It is not the Normal density centered at the full-data posterior mean. Keeping the observation in the training posterior would answer a different, easier prediction question.

The public experiment preserves the original seeds and draw counts, reports exact and approximate predictions separately, and reports whether the fitted diagnostic crosses its stated warning threshold. When a warning triggers, the delivered score uses the analytic refit; the report still retains the attempted approximation and its error. A successful fallback must never be presented as evidence that the original importance approximation succeeded.

## A loss function specifies an action space

A posterior distribution is an input to a decision, not the decision itself. For squared loss over real-valued estimates, expanding $E(\\theta-a)^2$ around the posterior mean proves the minimizer is $E\\theta$, provided the required moment exists. For absolute loss, the sign of the risk's one-sided derivative gives the median condition. Neither calculation defines a binary action such as proceeding with a trial.

For tilted absolute loss, the derivative away from atoms is
$$c_{\\mathrm{over}}F(a)-c_{\\mathrm{under}}\\{1-F(a)\\}.$$
Setting it to zero gives the quantile level $c_{\\mathrm{under}}/(c_{\\mathrm{under}}+c_{\\mathrm{over}})$. At an atom use the corresponding subgradient inequalities. Positive costs are required for this usual interior quantile interpretation; zero costs can leave a one-sided or nonunique problem. The loss and permitted actions must be stated before the theorem is applied.

For a concrete binary model let the unknown state be $H\\in\\{0,1\\}$ with posterior probability $q$ of state one. Action $A_0$ incurs loss two when $H=1$ and zero otherwise. Action $A_1$ incurs loss one when $H=0$ and zero otherwise. Their risks are $2q$ and $1-q$. Thus choose $A_1$ for $q>1/3$, choose $A_0$ for $q<1/3$, and declare a tie at equality.

If randomization is allowed, mixing the two actions gives a convex combination of these risks. It cannot improve on the smaller risk at a fixed posterior, although randomization may matter in other minimax problems. The action space in this fixture is the two deterministic actions unless randomization is explicitly introduced. A Normal posterior mean is not being relabeled as a binary classification rule.

The original pharmaceutical example uses a different, explicitly monetary utility: proceed yields $500$ million if the effect exceeds $0.2$, minus the $100$ million cost, while abandon yields zero. Its threshold is a posterior efficacy probability of $0.2$. That differs from both the effect-estimation quantile and the binary fixture's probability threshold of $1/3$. The difference is produced by different loss tables, not an inconsistency in Bayesian updating.

Sensitivity to loss is not necessarily uncertainty that more outcome data can remove. Even if the state were known, changing the relative costs of two actions can change which is optimal. Report uncertainty about the state separately from disagreement about costs or preferences. The value of more data depends on how it could change the chosen action under a specified loss.

## Model-averaged decisions need a shared action

Expected utility under posterior model uncertainty averages each model's utility for the same available action. It does not give permission to choose one action when one model is true and another when another model is true, unless the decision maker will actually learn that model label before acting. That distinction separates an achievable decision from an oracle comparison.

Using the binary loss table, suppose two models have posterior state probabilities $q_1=1/5$ and $q_2=4/5$, with posterior model weights one half each. Model one prefers $A_0$, at risk $2/5$; model two prefers $A_1$, at risk $1/5$. Averaging those two minimized risks gives $3/10$, but it assumes knowledge of which model governs the state before selecting the action.

Without that knowledge, model averaging gives state probability $1/2$. The available risks are one for $A_0$ and one half for $A_1$, so the actual Bayes action is $A_1$ at risk one half. This is worse than the model-informed oracle risk, as expected. Randomly choosing the two action labels with equal probabilities would have risk $3/4$, and is not the solution either.

More generally, for common actions,
$$\\min_a\\sum_m w_mR_m(a)\\ \\ge\\
\\sum_mw_m\\min_aR_m(a).$$
For every fixed action, each component risk exceeds that component's minimum; averaging and then minimizing proves the inequality. It is a useful upper bound on the value of learning the model label, under the declared model probabilities and losses. It is not a guarantee that an experiment can reveal that label.

For squared-error estimation in a common parameter space, a model-averaged posterior mean can happen to be the weighted average of model-specific means. That special linear identity does not extend automatically to medians, thresholds, constrained actions or nonlinear utilities. Different parameter definitions across models also need a common scientifically meaningful target before their summaries can be averaged.

Stacking weights are fitted predictive-combination weights, not posterior probabilities of model truth. One can compute expected loss under the resulting predictive mixture for a declared outcome-based decision. One should not silently reinterpret those weights as posterior model probabilities for latent states or causal effects absent from the predictive task. The exact comparison and decision fixtures expose these different roles rather than promising that one set of weights solves every problem.

## Complete a small experimental-design calculation

Return to the binary state and losses above, now with current probability $q=1/2$. There are two designs: act immediately, or purchase one binary signal $X$. The signal law is
$$P(X=1\\mid H=1)=3/4,\\qquad P(X=1\\mid H=0)=1/4.$$
Conditional on the fixed state, repeated signals, if purchased in a sequential extension, are independent with this same law. This supplies the missing observation model rather than simply naming “information gain.”

For one signal, $P(X=1)=1/2$. Bayes' rule gives posterior probabilities $3/4$ after a positive signal and $1/4$ after a negative one. The optimal actions are respectively $A_1$ and $A_0$, with risks $1/4$ and $1/2$. The expected terminal risk is therefore $3/8$. Acting immediately has risk $1/2$, so the expected value of that information, measured as loss reduction before paying, is $1/8$.

If the signal costs $1/16$ in the same loss units, purchasing it gives expected total loss $7/16$, smaller than $1/2$. If its cost exceeded $1/8$, immediate action would be preferable; equality gives indifference. The optimal design depends on its observation law and cost, not merely on the label “more informative.”

This calculation averages over possible data that have not yet been seen. Choosing the best design separately for each realized future signal and then averaging would use information unavailable when choosing the design. The order is: select the experiment now, update after its result, and then choose the terminal action. Nested computation in larger design problems must preserve that order.

Other utilities define other design objectives. Expected information gain targets a distributional change in the posterior, while a precision criterion targets an uncertainty summary in stated coordinates. Neither is automatically equivalent to reduction in the terminal loss relevant to a stakeholder. An information gain can be positive while no possible posterior changes the optimal action, yielding zero decision value before cost.

## A finite belief-state recursion with an explicit horizon

For the same signal law, posterior probability $q$ is a sufficient state because it summarizes the history for predicting the next signal and the terminal loss. Define $V_h(q)$ as the smallest expected remaining loss when at most $h$ signals can still be purchased, each costing $c$. The terminal value is
$$V_0(q)=\\min(2q,1-q).$$
The next positive-signal probability is $s(q)=(1+2q)/4$, and Bayes updates give
$$q_+(q)=\\frac{3q}{1+2q},\\qquad
q_-(q)=\\frac{q}{3-2q}.$$
Both denominators are positive for $0\\le q\\le1$, so boundary beliefs zero and one are included.

The available actions are stop and take whichever terminal action minimizes current risk, or sample once and continue. For $h\\ge1$,
$$V_h(q)=\\min\\left[
V_0(q),\\ c+s(q)V_{h-1}\\{q_+(q)\\}
+\\{1-s(q)\\}V_{h-1}\\{q_-(q)\\}\\right].$$
This is an exact finite-horizon recursion for the fully specified fixture. It does not claim that an arbitrary continuous-state control problem has been solved numerically.

With $q=1/2,c=1/16,h=1$, it recovers $V_1(1/2)=7/16$. To allow two signals, calculate the next stage as well. At $q=3/4$, another signal costs $1/16$ and leads to terminal expected risk $1/4$, so stopping at risk $1/4$ is better. At $q=1/4$, the next positive probability is $3/8$, and its updated beliefs are $1/2$ and $1/10$. Sampling has loss
$$1/16+(3/8)(1/2)+(5/8)(1/5)=3/8,$$
which improves on the current risk $1/2$.

Thus
$$V_2(1/2)=1/16+\\tfrac12(1/4)+\\tfrac12(3/8)=3/8.$$
The optimal policy purchases the first signal, stops after a positive result, and purchases a second after a negative result. These exact branches specify both the state update and the action rule. Two signals are an opportunity, not a requirement to sample on every path.

In a general problem, a posterior is a sufficient control state only when it contains the information needed for future transitions and rewards; unknown dynamics, resource constraints or path-dependent costs may require additional state variables. Infinite-horizon value iteration also needs convergence and optimality conditions. A finite demonstration cannot certify every sequential workflow named in the original chapter.

## Robust prior classes and sparse projections need declared choices

A robust Bayesian calculation must define its class and action space. Use $\\Gamma=\\{\\operatorname{Bernoulli}(q):q\\in[1/4,3/4]\\}$ for the binary state, with the same signal likelihood and loss. After one observed positive signal, the posterior probability is $3q/(1+2q)$, a strictly increasing function. Its range is the entire interval $[1/2,9/10]$, not a guessed set of Normal perturbations.

For action $A_0$, the worst posterior risk over this class is $2(9/10)=9/5$; for $A_1$, it is $1-1/2=1/2$. The deterministic $\\Gamma$-minimax action is therefore $A_1$. Every individual posterior in this updated class also chooses $A_1$, since its probability exceeds $1/3$. The robust conclusion is conditional on this specified class, likelihood and loss; expanding the class can change it.

A finite grid of priors would approximate an interval class only with additional justification. Here monotonicity makes the endpoint maximizations exact for the whole interval. If randomized actions were admitted, their worst risk would have to be optimized over that larger action space; do not silently switch between deterministic and randomized minimax rules. Nor does a single minimax action validate every member of its prior class as a plausible scientific model.

Projection requires another explicit target. Consider independent Normal responses of variance one, design rows $(1,-1),(1,0),(1,1)$, observed responses $(-1,0,1)$ and proper prior $\\beta\\sim N_2(0,I)$. The reference model is $y\\mid\\beta\\sim N_3(X\\beta,I)$. Its actual conjugate posterior has
$$V=(I+X^\\mathsf TX)^{-1}=\\operatorname{diag}(1/4,1/3),
\\qquad m=VX^\\mathsf Ty=(0,2/3).$$
This supplies a reference fit, not a list of fixed forecast means without a likelihood.

Project each reference posterior draw onto an intercept-only submodel with the same known variance. At the three declared design points, minimize the average KL between the conditional Normal likelihoods. Its loss is
$$\\frac1{2\\cdot3}\\sum_i(\\beta_0+\\beta_1x_i-a)^2.$$
Since the design values sum to zero, the minimizing intercept is $a=\\beta_0$. The draw-wise projection error is $\\beta_1^2/3$ and its posterior expectation is
$$(m_1^2+V_{11})/3=(4/9+1/3)/3=7/27.$$
Here $m_1$ and $V_{11}$ denote the slope coordinate and its variance. The projected intercept distribution is $N(0,1/4)$.

The full reference model has projection error zero. Minimizing approximation error alone therefore chooses it, supplying no sparse-model rule. Charge a cost $\\lambda$ for retaining the slope: the intercept-only objective is $7/27$ and the full-model objective is $\\lambda$. A cost $1/4$ selects the full model, while $1/3$ selects the intercept-only model; equality at $7/27$ is a tie.

This is a fixed two-model cost path and an exact draw-wise conditional-likelihood projection. It is not KL between the marginal posterior predictive mixtures, and it does not estimate performance after a variable-selection search. A data-chosen path or size needs outer validation of the entire selection procedure. General projection-predictive searches and their cross-validation are explicit imports from projpred, rather than an implementation claimed by this finite algebraic fixture.

## Solutions: declared model comparison and decision fixtures

This is the completed bounded mathematical reference for CBM-CLAIM-042, originally located at content/books/computational-bayesian-modeling/model-comparison-and-decision.md:26. The fixtures supply the previously missing model, prior, design, action and projection inputs. They are exact source calculations, not reported software fits or evidence that every general workflow has been implemented.

### Proper competing models and actual leave-out fits

The observation is the ordered vector $y=(-1,1)$ in $\\mathbb R^2$ with Lebesgue density. Conditional observations are independent $N(\\mu,1)$. Model $M_0$ uses the proper point prior $\\mu=0$; $M_1$ uses the proper prior $N(0,\\tau^2)$, for the two separate sensitivity specifications $\\tau=1$ and $\\tau=3$. Prior model probabilities are $(1/2,1/2)$. These priors, including the point mass, are normalized probability distributions.

For each specification, the exact full posterior under $M_1$ is $N(0,(2+\\tau^{-2})^{-1})$; under $M_0$ it remains a point mass at zero. The evidences are $(2\\pi)^{-1}e^{-1}$ and that value divided by $\\sqrt{1+2\\tau^2}$. Thus the Bayes factor is $1/\\sqrt{1+2\\tau^2}$ and the posterior probability of $M_1$ is $1/\\{1+\\sqrt{1+2\\tau^2}\\}$. The full-data BMA prediction is the explicit two-Normal mixture in the exposition.

The validation unit is one observation, predicting another exchangeable observation after training on one observation. Holding out $1$ leaves training value $-1$ and posterior mean $-a$; holding out $-1$ gives mean $a$, with $a=\\tau^2/(1+\\tau^2)$. Each predictive variance is $1+a$. Both actual pointwise differences are $d=-\\log(1+a)/2-a/2$. Their sum is $2d$ and their empirical paired standard error is zero. That zero is a warning about the two-point symmetric dataset, not a trustworthy general uncertainty certificate.

Both held-out densities favor $M_0$, so stacking's optimal $M_0$ weight is one. Plain pseudo-BMA's $M_1$ weight is $\\exp(2d)/\\{1+\\exp(2d)\\}$; it is positive, unlike the stacking weight. These results compare posterior model weighting with predictive weighting for actual specified fits. They make no external-validation claim about a searched candidate list. Numerical evidence estimators, larger searches and bootstrap weighting remain separate algorithms, not fictional outputs of this calculation.

### Fully specified design and sequential model

The state is $H\\in\\{0,1\\}$, initially Bernoulli with probability one half. The two terminal deterministic actions have losses $L(H,A_0)=2H$ and $L(H,A_1)=1-H$. A purchased signal has positive probability $3/4$ in state one and $1/4$ in state zero; signals are conditionally independent. The price is $1/16$ per signal, and the horizon is at most two signals.

The posterior update and stopping recursion in the exposition give immediate risk $1/2$, one-signal risk $7/16$ and two-signal optimal risk $3/8$. The full policy samples first, stops with $A_1$ after a positive signal, and samples again after a negative signal. At the last stage choose the lower-risk terminal action using its updated probability. These values include acquisition costs. They do not assume that every path uses the entire budget.

For model-uncertain decisions the separate fixture uses model weights $(1/2,1/2)$ and state probabilities $(1/5,4/5)$ with the same terminal loss. The model-averaged action is $A_1$ with risk $1/2$; the model-informed oracle risk is $3/10$. Those are different information states, not two competing calculations of the same Bayes risk.

### A complete robust class and a complete reference projection

For robustness use the entire prior interval $\\Gamma=\\{\\operatorname{Bernoulli}(q):q\\in[1/4,3/4]\\}$, the declared signal law and one observed positive signal. Posterior probabilities range over $[1/2,9/10]$ by the explicit monotone update. Worst deterministic risks are $9/5$ for $A_0$ and $1/2$ for $A_1$, so $A_1$ is the class-minimax action and agrees with every individual posterior's optimal action. This covers the entire interval, not a finite grid promoted to a continuum result.

For projection use the three declared design rows $(1,-1),(1,0),(1,1)$, responses $(-1,0,1)$, known variance one and reference prior $N_2(0,I)$. The reference posterior mean is $(0,2/3)$ and covariance $\\operatorname{diag}(1/4,1/3)$. Each draw projects to the intercept equal to its reference intercept. Average conditional-likelihood KL over these three design points is $\\beta_1^2/3$, giving posterior mean error $7/27$; the full reference error is zero.

The candidate path is fixed: retain the intercept only or retain both coefficients. Cost is $\\lambda$ for a retained slope, so the objectives are $7/27$ and $\\lambda$. Costs $1/4$ and $1/3$ select different sizes, with equality at $7/27$ giving a tie. This is an explicitly cost-defined source calculation, not a search validated on new data. General projection-predictive variable searches and search-aware validation remain precise external imports/templates.

### Scope disposition and comparison rubric

CBM-CLAIM-042 is completed at the level of these fully specified finite mathematical fixtures: evidence sensitivity, BMA, plain pseudo-BMA, stacking, design, sequential action, interval-prior robustness and draw-wise projection all have actual inputs and derived reference answers. Broader workflows remain named templates or imports where no implementation is supplied; there is no new requirement to execute every optional general algorithm.

A complete comparison preserves the common observation event and its normalizing constants, computes the actual training refits, names model priors and distinguishes posterior model probabilities from predictive weights. It states the validation unit, scope of the two-point standard-error calculation and absence of outer evaluation. For decisions it names the state, loss, costs, available information and horizon. For projection it states the reference posterior, KL target and size rule. None of these checks is discharged by the separate Normal LOO companion or by maximizing simulated fixed scores.

## Solutions: Normal exact LOO and tail-warning companion

COMM06-CASE-03-LOO-COMPANION is additional to the book's minimum three public cases. Its original scope locator is content/books/computational-bayesian-modeling/model-comparison-and-decision.md:14, the predictive-comparison interface. The bounded internal workflows at lines 1225–1291 and their helper were reference inputs for this public package; historical internal passes are not its current execution evidence.

### Computational model and observation units

The primary data generator is NumPy's explicit Generator(PCG64(20260906+63)), taking thirty Normal observations with mean $0.4$ and SD one. The model has independent Normal likelihood with known SD one, prior $\\mu\\sim N(0,3^2)$ and support $\\mathbb R$. Draw thirty thousand independent exact full-posterior means with Generator(PCG64(20260906+64)); there is no warmup, thinning, chain adaptation or MCMC mixing claim.

The changed case is the literal one-observation dataset $[8]$, with fifty thousand independent full-posterior draws and seed $20260906+65$. Every held-out unit is an observation and all posterior refits are analytic. This is an exact comparison of predictive integrals under one model, not two fitted-model selection or a Bayes-factor pipeline.

The published algorithm is GPD-MLE PSIS-style-v1. Tail size is $\\min(\\lfloor S/5\\rfloor,\\lfloor3\\sqrt S\\rfloor)$, fitted excess location is fixed at zero, replacement quantiles use $(j-1/2)/M$, smoothing is capped at the largest raw weight, and a final cap is $S^{3/4}$ times mean smoothed weight. It is deliberately not described as the official loo implementation. Normalized smoothed weights are multiplied by likelihood values in the predictive calculation.

Exact Normal refits and independent one-dimensional quadrature provide the numerical references. The adverse analytic reference is $-\\log(20\\pi)/2-3.2$, with raw tail shape $0.9$ and infinite raw-weight variance. Warning or tail-fit failure invokes the analytic refit; the attempted PSIS-style output remains separately labeled. A valid fallback does not overwrite a failed approximation's diagnostic.

### Declared tolerances, errors and reproduction boundary

Deterministic numerical checks require analytic-versus-quadrature log-density differences below $10^{-8}$; the adverse analytic and delivered fallback values must agree with the explicit prior-predictive formula within $10^{-12}$. The variance reference $0.9$ uses tolerance $10^{-14}$. These are floating-point regression tolerances against exact formulas, not proofs of a general integration routine.

The preserved seeded primary criteria are maximum PSIS-style pointwise error below $0.04$, total ELPD error below $0.12$, fitted maximum shape below $0.7$, and WAIC log-score difference from exact LOO below $0.5$. The adverse fitted shape criterion is greater than $0.7$, with the exact fallback checked separately. These are stochastic regression criteria for the fixed generators, versions, seeds and sample sizes. A realized failure must be reported, not cured by silently changing the seed or widening a tolerance.

The usual sample-size diagnostic threshold is $\\min(0.7,1-1/\\log_{10}S)$, equal to $0.7$ for both supplied draw counts. The code also retains the analytic raw-tail warning. Its normalized importance-weight ESS is descriptive and is not an ordinary finite-variance MCSE guarantee. The exact IID posterior-mean MCSE is reported separately as $\\sqrt{v/S}$. Neither quantity is the across-validation-unit sampling uncertainty of an ELPD comparison.

## Earlier worked questions

The original question identities, statements and complete answers remain in [the original complete exercise companion](#/item/book-computational-bayesian-modeling?section=back:retained-source-model-comparison-and-decision). The further exercises below supply the present chapter’s staged practice.

## Solutions: optional tail and action-space extensions

## Solutions: executable Normal LOO companion


The complete computational listing remains in the [original source companion](#/item/book-computational-bayesian-modeling?section=back:retained-source-model-comparison-and-decision). Its mathematical assumptions and analytical reference calculations remain part of the present treatment; the listing is supplied source, not executed evidence.

## References: predictive comparison and declared imports

The [official loo comparison documentation](https://mc-stan.org/loo/reference/loo_compare.html) explains paired pointwise comparisons and their data-unit assumptions. The [official Pareto-shape diagnostics](https://mc-stan.org/loo/reference/pareto-k-diagnostic.html) state the sample-size-dependent diagnostic rule. Vehtari, Simpson, Gelman, Yao and Gabry's [Pareto Smoothed Importance Sampling](https://www.jmlr.org/papers/v25/19-556.html), JMLR 25(72), 2024, is the primary methodological reference. The GPD-MLE teaching variant here is explicitly different; the conjugate targets and moment calculations are derived locally.

Yao, Vehtari, Simpson and Gelman's [Using stacking to average Bayesian predictive distributions](https://sites.stat.columbia.edu/gelman/research/published/stacking.pdf), Bayesian Analysis 13, 2018, distinguishes stacking, BMA and pseudo-BMA. The mixture objective and finite fitted-model example above are worked explicitly.

The [projpred cross-validation interface](https://mc-stan.org/projpred/reference/cv_varsel.html) is the precise external workflow for search and performance evaluation. The supplied regression projection is a fixed, analytically solved two-model path; no package run, general variable-selection guarantee or fresh validation result is imported by name. General continuous design, infinite-horizon control, broader robust prior classes and numerical evidence methods remain explicitly scoped templates beyond the finite fixtures.


## Worked applications

### Worked example 1: risk can be infinite

A proper Cauchy posterior has finite quantiles but no finite mean or variance. Squared-error posterior risk is infinite for every finite action, so a threshold on a numerical mean does not make that loss calculation valid.

### Worked example 2: a randomised robust action

If two actions have risk pairs $(0,1)$ and $(1,0)$ across two models, either deterministic action has worst risk one. Mixing equally gives risk one-half in each, reducing the worst risk when randomisation is allowed.

### Worked example 3: a sensitivity margin

Two posterior event probabilities can straddle a decision threshold while differing by only a small amount. Report the expected-loss difference and explored model family, not just the switched action label.

## Further exercises

### Exercise 101
<a id="decision-sensitivity-model-uncertainty-ex-101"></a>

Why can robust randomisation improve a worst-case decision?

<details>
<summary>Hint 1</summary>

Risks mix linearly.

</details>
<details>
<summary>Hint 2</summary>

The permitted action class changes.

</details>
<details>
<summary>Solution</summary>

A mixture can equalise risks across adversarial states and lower their maximum. This claim assumes randomised actions are feasible; a deterministic-only problem has a different optimum.

</details>

### Exercise 102
<a id="decision-sensitivity-model-uncertainty-ex-102"></a>

Does a proper posterior imply every expected utility exists?

<details>
<summary>Hint 1</summary>

Inspect utility growth and tails.

</details>
<details>
<summary>Hint 2</summary>

Normalisation is weaker than moment existence.

</details>
<details>
<summary>Solution</summary>

No. An unbounded utility or loss can have an undefined or infinite expectation. State integrability before ranking actions by those quantities.

</details>

### Exercise 103
<a id="decision-sensitivity-model-uncertainty-ex-103"></a>

What does model sensitivity of a decision mean?

<details>
<summary>Hint 1</summary>

Keep the target and loss fixed.

</details>
<details>
<summary>Hint 2</summary>

Change declared model assumptions.

</details>
<details>
<summary>Solution</summary>

It is the change in posterior expected loss or optimal action across that specified family. If the target or loss also changes, record that separately rather than attributing all movement to model uncertainty.

</details>

### Exercise 104
<a id="decision-sensitivity-model-uncertainty-ex-104"></a>

Why is a worst-case family a substantive choice?

<details>
<summary>Hint 1</summary>

It selects which states count as plausible.

</details>
<details>
<summary>Hint 2</summary>

A larger family can alter the optimum.

</details>
<details>
<summary>Solution</summary>

Robustness is relative to the chosen admissible laws or parameters. An excluded observation mechanism is not covered by the guarantee, regardless of optimization accuracy.

</details>

### Exercise 105
<a id="decision-sensitivity-model-uncertainty-ex-105"></a>

Give the minimax mixture in the two-risk example.

<details>
<summary>Hint 1</summary>

Let action-one probability be q.

</details>
<details>
<summary>Hint 2</summary>

Equalise q and one minus q.

</details>
<details>
<summary>Solution</summary>

The worst risk is $\\max(q,1-q)$, minimised at $q=1/2$ with value one-half. Both deterministic endpoints instead have worst risk one.

</details>

### Exercise 106
<a id="decision-sensitivity-model-uncertainty-ex-106"></a>

Can a stable chosen action conceal unstable expected losses?

<details>
<summary>Hint 1</summary>

An action remains optimal over a range.

</details>
<details>
<summary>Hint 2</summary>

Inspect its margin and absolute risk.

</details>
<details>
<summary>Solution</summary>

Yes. The same label can remain optimal while all actions become much riskier or its advantage shrinks. Report risk levels and differences in addition to the selected action.

</details>

### Exercise 107
<a id="decision-sensitivity-model-uncertainty-ex-107"></a>

Why does numerical convergence not settle model uncertainty?

<details>
<summary>Hint 1</summary>

It concerns one specified target law.

</details>
<details>
<summary>Hint 2</summary>

Alternative assumptions remain.

</details>
<details>
<summary>Solution</summary>

Accurate computation under one model cannot distinguish unobserved mechanisms or justify excluded alternatives. Sensitivity and identification arguments are separate from algorithm precision.

</details>

### Exercise 108
<a id="decision-sensitivity-model-uncertainty-ex-108"></a>

What does a tail-probability decision avoid compared with a raw mean?

<details>
<summary>Hint 1</summary>

Its indicator is bounded.

</details>
<details>
<summary>Hint 2</summary>

The loss target is changed.

</details>
<details>
<summary>Solution</summary>

A bounded event probability always exists under a proper posterior, even with heavy tails. It can support a different bounded-loss decision, but it does not establish the missing mean or squared-risk moment.

</details>

### Exercise 109
<a id="decision-sensitivity-model-uncertainty-ex-109"></a>

Why must a sequential policy include future information rules?

<details>
<summary>Hint 1</summary>

Later actions depend on what is observed.

</details>
<details>
<summary>Hint 2</summary>

An isolated terminal rule is incomplete.

</details>
<details>
<summary>Solution</summary>

The policy maps available histories to actions. Its expected loss must integrate the observation and stopping mechanisms; ignoring that information flow changes the decision problem.

</details>

### Exercise 110
<a id="decision-sensitivity-model-uncertainty-ex-110"></a>

Can projection to a simpler model preserve every decision?

<details>
<summary>Hint 1</summary>

It preserves a chosen approximation target.

</details>
<details>
<summary>Hint 2</summary>

Losses can depend on discarded features.

</details>
<details>
<summary>Solution</summary>

No. A predictive projection may preserve selected observables while altering tail or causal quantities relevant to another decision. State the projection target and compare decision consequences explicitly.

</details>

## Summary

Decision Sensitivity and Model Uncertainty develops the declared probability model, target and mathematical comparisons in the sections above. Keep support, observation mechanisms, conditional information and numerical approximation distinct. The original complete source remains available as a companion, with all original questions and computational listings preserved.
`;export{e as default};