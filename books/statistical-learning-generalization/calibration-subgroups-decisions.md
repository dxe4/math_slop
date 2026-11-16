
# Calibration, Subgroups, and Decisions

Average risk bounds, however tight, can conceal important failures. A model with low overall error may be systematically wrong for certain subgroups. A well-calibrated forecast on average may be miscalibrated within subpopulations. And a predictor with low loss is not automatically a good decision rule. This chapter examines three concepts that refine the notion of "good performance": calibration, subgroup fairness, and the connection between prediction and decision.

## Calibration

For a binary outcome $Y$ and probabilistic forecast $Q \in [0, 1]$, exact **population calibration** means

$$\mathbb E[Y\mid Q]=Q\quad\text{almost surely}.$$

Equivalently, a regular conditional probability satisfies $\mathbb P(Y=1\mid Q=q)=q$ for $Q$-almost every $q$ under the named population. A calibrated forecaster is honest about its uncertainty in this population-level sense.

**Reliability diagrams** replace the exact conditional statement by bins. The data are partitioned by predicted probability, and the observed frequency is plotted against the average prediction within each bin. This adds approximation error (from binning) and sampling error (from finite data within bins). A bin diagram supplies finite-sample moment summaries under its chosen partition. Small bin gaps alone do not establish exact population calibration: deviations can cancel inside a bin, and fitted bins or reused labels require additional accounting.

Calibration can hold marginally and fail within subgroups. A model may be calibrated overall but systematically overpredict for one demographic group and underpredict for another. Reporting only marginal calibration is insufficient when decisions affect subgroups differently.

## Subgroup performance

Average risk can conceal uneven harm. A model with $95\%$ overall accuracy may have $80\%$ accuracy for one subgroup and $99\%$ for another. When subgroups differ in prevalence, base rate, or feature distribution, equal overall performance does not imply equal subgroup performance.

Report meaningful subgroup counts and uncertainty. Avoid fishing expeditions over tiny groups: with small sample sizes, apparent disparities may be noise. At the same time, do not hide known disparities by aggregating over heterogeneous populations.

## Fairness criteria

Multiple mathematical fairness criteria have been proposed. Their compatibility is a theorem-specific question: it depends on whether calibration concerns a common score, which error rates are equalized, whether thresholds may differ, and what degeneracies are excluded. Unequal base rates alone do not prove an impossibility. For example, equal false-positive and false-negative rates $q$ give accuracy $1-q$ in every group regardless of base rate.

Selecting a fairness criterion is a normative and operational decision, not something accuracy decides. The choice depends on the harms of different error types, the legal and ethical context, and the availability of group labels at deployment time.

## From prediction to decision

A predictor is not yet a decision rule. Decisions need actions, costs, resource constraints, and consequences. A lower prediction loss need not improve utility if errors have asymmetric costs or if predictions change behavior.

For example, a medical risk score with low Brier loss may still lead to poor decisions if the cost of a false negative (missing a sick patient) is much higher than the cost of a false positive (unnecessary treatment). The optimal decision threshold depends on these costs, not on the predictor's loss alone.

## Causal inference

No predictive guarantee identifies a treatment effect. Causal inference asks about counterfactual interventions: what would have happened if this unit had received a different treatment? Answering this requires randomized design or defensible identification assumptions, such as ignorability, positivity, and stable unit treatment value.

Predictive models can inform causal inference (e.g., as propensity score models), but predictive accuracy does not imply causal validity. A model that predicts outcomes well may fail to estimate treatment effects if confounders are unmeasured or if the treatment assignment mechanism is not modeled correctly.

## Common errors

- **Reporting marginal calibration only.** A model can be calibrated overall but miscalibrated within subgroups.
- **Assuming fairness metrics are compatible.** Different fairness criteria can conflict; selecting one requires justification.
- **Confusing prediction with causation.** Low prediction loss does not imply correct causal estimates.
- **Ignoring decision costs.** The optimal predictor for one loss may be suboptimal for the actual decision problem.

## Brier calibration decomposes by conditional expectation

Let the binary outcome be Y, forecast Q lie in the unit interval and m of Q be the conditional mean of Y given Q. Expand squared loss about m. The cross term has conditional expectation zero, giving
$$E(Y-Q)^2=E\{\operatorname{Var}(Y\mid Q)\}
+E\{m(Q)-Q\}^2.$$
The second term is a squared calibration discrepancy. Replacing Q by its population recalibration m of Q minimizes squared risk among measurable functions of Q and reduces risk by exactly that second term. This is a population identity; estimating m from a finite reused assessment set needs a separate statistical procedure.

Total variance rewrites the first term as variance of Y minus variance of m of Q. A calibrated forecast can therefore have different risk depending on how much outcome variation it resolves. The constant forecast equal to prevalence is calibrated but resolves none of that variation. Calibration alone does not imply that a predictor uses all available information.

If Q is a function of inputs X and eta of X is the true conditional probability, the conditional-mean identity also gives Brier excess over eta equal to expected squared eta minus Q. That is generally stronger than calibration: calibration asks only that the residual average vanish given the forecast, permitting different input groups with opposing residuals at the same forecast value.

### Worked example: marginal calibration hides opposite subgroup gaps

Take two equally likely groups. Their outcome probabilities are one tenth and nine tenths, and every individual receives forecast one half. Marginal prevalence is one half, so the forecast is exactly calibrated under the pooled population. Within the first group it overpredicts by four tenths and within the second it underpredicts by four tenths.

The pooled Brier risk is one quarter. A group-informed forecast using the two true probabilities has Brier risk nine hundredths, since each group's Bernoulli variance is nine hundredths. Its risk improvement is sixteen hundredths, equal to the expected squared difference between the true conditional probability and the constant forecast. Perfect pooled calibration did not remove the value of the group information.

## A finite-bin assessment statement with its uncertainty

Assume the forecast rule was fixed using data independent of the iid assessment sample, and fix K measurable forecast bins in advance. In one bin with positive population probability, consider the residual Y minus Q conditional on membership. It lies between minus one and one and has mean equal to the conditional calibration gap in that bin.

Conditional on the observed membership indicators, the observations falling in that bin are independent with the same conditional law. If their count is m positive, the bounded-variable theorem therefore controls the difference between their average residual and the population bin gap by
$$\sqrt{\frac{2\log(2K/\delta)}m}.$$
The range width is two, which explains the constant. Apply the conditional bound at the realized positive count and average over membership. A union bound over the K bins gives simultaneous coverage of all their gaps. If a bin has no observations, report the entire possible gap range rather than declaring it calibrated.

This result uses fixed bins and independent assessment. A partition tuned after seeing assessment outcomes is not covered by simply counting the finally displayed bins. Even under exact population bin moments, positive and negative discrepancies can cancel inside a bin. For example, equally common forecasts one quarter and three quarters paired with true event probability one half have zero pooled residual but are each miscalibrated. A single broad bin conceals that structure.

For finitely many prespecified subgroups, the same conditional bounded-loss argument estimates group risk with a radius using its own observed count. Groups may overlap; independence between groups is unnecessary for a union bound. Empty or very small groups carry little information. Choosing groups after finding the largest observed disparity requires a simultaneous search theorem or a fresh assessment sample.

## One precise incompatibility theorem for binary decisions

Let D be a binary decision and G a group with base rate pi strictly between zero and one. Suppose two groups have the same true-positive rate t and false-positive rate f, with both t and f strictly positive. Bayes' rule gives their positive predictive value as
$$\operatorname{PPV}_g=
\frac{t\pi_g}{t\pi_g+f(1-\pi_g)}.$$
Its odds equal t divided by f times the base-rate odds. Hence unequal base rates imply unequal positive predictive values under these stated nondegeneracy conditions. Equalized error rates and equal positive predictive value cannot all hold in this particular binary-decision setting.

The conditions matter. If false-positive rate is zero and positive decisions exist, positive predictive value can equal one in both groups despite different base rates. If no positive decisions occur it is undefined. This is not an impossibility theorem for every score-calibration or fairness definition. It specifies one decision variable, common rates and excluded degeneracies, rather than deriving a broad conclusion from prevalence differences alone.

### Worked example: equal error rates and different precision

Take base rates one fifth and four fifths and common true-positive rate nine tenths and false-positive rate one tenth. The two positive predictive values are nine thirteenths and thirty-six thirty-sevenths. Yet both groups have accuracy nine tenths, since the false-negative and false-positive rates both equal one tenth.

The example satisfies equalized error rates and equal accuracy while precision differs. A criterion about positive decisions therefore cannot be inferred from average accuracy. It also shows why an undefined phrase such as equal performance should be replaced by the exact probability being compared and the group population in which it is evaluated.

## A decision-regret guarantee from probability error

Let false-positive cost be c zero and false-negative cost c one, both positive. At conditional probability eta, predicting one costs c zero times one minus eta; predicting zero costs c one times eta. Their crossing is the threshold tau equal to c zero divided by the sum of costs.

For a forecast Q, act by thresholding it at tau with a fixed tie convention. If this action differs from the Bayes action based on eta, the threshold lies between Q and eta, so the absolute distance from eta to tau is at most the absolute probability error. The conditional excess action cost is exactly the sum of costs times that threshold distance when the actions differ. Therefore
$$R_{\rm cost}(D_Q)-R_{\rm cost}(D_\eta)
\le(c_0+c_1)E|\eta-Q|
\le(c_0+c_1)\sqrt{E(\eta-Q)^2}.$$
The second inequality is Cauchy–Schwarz. The squared term equals Brier excess over the true conditional probability when Q is input-measurable. Thus a sufficiently strong probability-risk guarantee can translate to a decision guarantee under declared costs. Calibration alone does not bound this stronger error.

### Worked example: probability error and asymmetric actions

Let false-positive cost be one and false-negative cost four, giving threshold one fifth. Suppose the true conditional event probability is one tenth but the forecast is three tenths. The forecast-based rule acts positively, costing nine tenths in conditional expectation; the Bayes negative action costs four tenths. The excess is one half. The theorem's upper bound is five times the probability error two tenths, equal to one. The bound is conservative but valid and shows explicitly how costs enter.

Resource constraints can change the action problem again. If exactly k of finitely many people must be selected to maximize expected positive outcomes, linearity of expectation says select the k largest true probabilities. A swap of a selected smaller value with an unselected larger one improves the expected total, proving the ranking rule. This constrained problem does not use an unconstrained one-half threshold.

## Perfect prediction still does not identify an intervention

Here is a concrete observational nonidentification example. In the first structural model, a fair binary treatment T directly determines the outcome Y equal to T. In the second model, an unobserved fair bit U determines both T and Y, with no treatment term in the outcome equation. Both models produce exactly the same observed law: T and Y always agree and each is fair. A predictor of Y from T is perfect in both.

Under an intervention setting T to one or zero, the first outcome changes with it, giving an average effect one. In the second, Y remains U regardless of the set treatment, giving effect zero. The observed joint law and every prediction score on it are identical, but intervention consequences differ. This proves the missing identification step; it does not claim that the second model meets ignorability and positivity given the hidden cause.

Randomization or a justified adjustment model can supply causal information under explicit assumptions. Prediction accuracy, calibration and a favorable action-cost calculation under an unchanged population do not supply that information by themselves. Reporting all three distinctions is part of specifying the actual decision problem.

## Practice exercises

<a id="calibration-subgroups-decisions-legacy-1"></a>

### Exercise 1

A model predicts probability $0.8$ for $100$ individuals. In reality, $70$ of them experience the positive outcome. Is the model calibrated for this group? If not, what is the calibration error?

<details><summary>Hint 1</summary>

Compute an empirical gap before discussing a population property.

</details>

<details><summary>Hint 2</summary>

Sampling uncertainty remains with one hundred observations.

</details>

<details><summary>Full solution</summary>

The empirical bin gap is $|0.8-0.7|=0.1$, with the observed frequency below the forecast. This is evidence of overprediction in this sample, not a proof that the population conditional probability differs from $0.8$; a calibration assessment must report binning and sampling uncertainty.

</details>

<a id="calibration-subgroups-decisions-legacy-2"></a>

### Exercise 2

For group $g$, let $\pi_g=\mathbb P(Y=1\mid G=g)$, false-positive rate $f_g$, and false-negative rate $q_g$. Derive group accuracy and explain why equalizing false-positive rates alone neither forces equal accuracy nor forces different accuracy.

<details><summary>Hint 1</summary>

Weight false positives and false negatives by their group base rates.

</details>

<details><summary>Hint 2</summary>

Equal false-positive rates leave another rate unconstrained.

</details>

<details><summary>Full solution</summary>

The error probability in group $g$ is $f_g(1-\pi_g)+q_g\pi_g$, so

$$\operatorname{Acc}_g=1-f_g(1-\pi_g)-q_g\pi_g.$$

Equal $f_g$ leaves $q_g$ unconstrained, so either equal or unequal accuracies are possible. In particular, if both $f_g=q_g=q$ in every group, then every group has accuracy $1-q$ even when the base rates differ.

</details>

<a id="calibration-subgroups-decisions-legacy-3"></a>

### Exercise 3

A company uses a predictive model to decide which customers to offer a loan. The model has low log-loss. Why might this not be sufficient to ensure good business outcomes?

<details><summary>Hint 1</summary>

A prediction score is not a complete action policy.

</details>

<details><summary>Hint 2</summary>

Costs and behavior after the action affect utility.

</details>

<details><summary>Full solution</summary>

Log-loss measures probabilistic calibration and sharpness, but business outcomes depend on the costs of false positives (loans to defaulters) and false negatives (missed profitable customers). If these costs are asymmetric, the optimal decision threshold differs from the default $0.5$. Moreover, if offering loans changes customer behavior (strategic manipulation), the predictive model may become invalid after deployment.

</details>

<a id="calibration-subgroups-decisions-ex-4"></a>

### Exercise 4

Derive the Brier decomposition around the conditional mean given Q.

<details><summary>Hint 1</summary>

Expand the squared error with a conditional residual.

</details>

<details><summary>Hint 2</summary>

Its cross term vanishes after conditioning on Q.

</details>

<details><summary>Full solution</summary>

Write $Y-Q=(Y-m(Q))+(m(Q)-Q)$. The cross term has expectation zero because $E[Y-m(Q)\mid Q]=0$. The residual square is conditional variance, leaving the stated calibration square. All quantities are integrable because Y and Q are bounded.

</details>

<a id="calibration-subgroups-decisions-ex-5"></a>

### Exercise 5

Give a calibrated forecast with little information about individual outcomes.

<details><summary>Hint 1</summary>

Use the constant population prevalence.

</details>

<details><summary>Hint 2</summary>

Conditioning on a constant changes no mean.

</details>

<details><summary>Full solution</summary>

The forecast Q equal to P of Y equal to one is calibrated, since its conditional event mean equals that same prevalence. It can ignore highly informative inputs and have worse Brier risk than the true conditional probability. Calibration is not equivalent to maximal resolution.

</details>

<a id="calibration-subgroups-decisions-ex-6"></a>

### Exercise 6

Why must an empty assessment bin not be assigned a zero calibration gap?

<details><summary>Hint 1</summary>

No bin observations supply a conditional average.

</details>

<details><summary>Hint 2</summary>

The full possible residual interval remains compatible.

</details>

<details><summary>Full solution</summary>

The conditional mean residual can be any value between minus one and one without an observation from that bin. Assigning zero would present missing information as evidence of calibration. The simultaneous theorem therefore retains an unrestricted interval for empty bins.

</details>

<a id="calibration-subgroups-decisions-ex-7"></a>

### Exercise 7

Derive the positive predictive value under common t and f, and state one exception to the incompatibility.

<details><summary>Hint 1</summary>

Apply Bayes’ rule within each group.

</details>

<details><summary>Hint 2</summary>

A zero false-positive rate is a degenerate equality case.

</details>

<details><summary>Full solution</summary>

PPV is $t\pi/[t\pi+f(1-\pi)]$. For positive t and f its odds are $(t/f)\pi/(1-\pi)$, strictly increasing in base rate. If f is zero and positive decisions occur, PPV is one in every group, so unequal base rates do not force unequal PPV in that excluded case.

</details>

<a id="calibration-subgroups-decisions-ex-8"></a>

### Exercise 8

Prove the probability-to-decision regret inequality.

<details><summary>Hint 1</summary>

A wrong-side threshold decision places tau between Q and eta.

</details>

<details><summary>Hint 2</summary>

The cost difference is linear in distance to tau.

</details>

<details><summary>Full solution</summary>

Conditional regret is $(c_0+c_1)|\eta-\tau|$ on disagreement and zero otherwise. On disagreement, $|\eta-\tau|\le|\eta-Q|$. Integrating gives the first bound; Cauchy–Schwarz gives the square-root Brier-excess bound. Costs and the fixed threshold convention are part of the statement.

</details>

<a id="calibration-subgroups-decisions-ex-9"></a>

### Exercise 9

Why does selecting tiny subgroups after seeing the largest gaps require more than the fixed-group confidence formula?

<details><summary>Hint 1</summary>

The selected index depends on the assessment outcomes.

</details>

<details><summary>Hint 2</summary>

The relevant event must cover the whole search or use independent data.

</details>

<details><summary>Full solution</summary>

The fixed-group formula controls groups fixed independently of assessment, with their own sample counts. Choosing the most extreme among many candidate groups adds selection. Cover all prespecified candidates with a simultaneous allocation or assess the selected group on fresh data; counting only the reported group does not account for the search.

</details>

<a id="calibration-subgroups-decisions-ex-10"></a>

### Exercise 10

Explain why the two structural models have the same predictive law but different intervention effects.

<details><summary>Hint 1</summary>

Both observed datasets satisfy Y equal to T.

</details>

<details><summary>Hint 2</summary>

An intervention replaces the treatment equation, not the outcome equation.

</details>

<details><summary>Full solution</summary>

In the direct-cause model, setting T changes the outcome equation Y equal to T, giving effect one. In the common-cause model, setting T leaves Y equal to U, giving effect zero. Observational agreement of T and Y therefore does not identify the causal response to setting T.

</details>

## Looking backward and forward

This chapter refined the average-risk framework of the preceding chapters by examining calibration, subgroups, and decisions. The next chapter, "Shift and Robustness," asks what happens when the assumptions of the learning tuple are violated: when the deployment distribution differs from the training distribution.
