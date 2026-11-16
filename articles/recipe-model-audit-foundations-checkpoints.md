
# Checkpoints for Uncertainty, Design and Prediction

These checkpoints connect the [general audit](recipe-model-fit-audit.md), [cooling cards](recipe-model-audit-numerical-cards.md) and [grouped prediction tasks](recipe-model-audit-foundations-tasks.md). References to earlier cards and the nine preparation questions mean the numerical-cards reading. All probability conclusions below retain their stated sampling or assignment law; they are separate from the deterministic device arithmetic.

## Joined foundations model-audit core

A model audit must distinguish an exact calculation, uncertainty under a probability law, prediction for a stated use, and a causal claim. This undergraduate selection joins those four kinds of argument. It uses the existing algebra cards, named statistics questions and synthetic protocols, then supplies a complete grouped-prediction example. It teaches the broader checklist without claiming that a real model has been externally validated.

### Preparation, required order and complete feedback

Use arithmetic, signed quantities, fractions, elementary algebra, units, tables, powers and logarithms. Repair these in [Algebra and Functions](#/courses/atlas-algebra-functions-standard) when needed. No calculus, regression textbook or programming is required for this selection. The assigned statistics questions below have hand-readable proofs and calculations; their existing R examples are optional computational comparisons here. If choosing a separate original programming exercise, retain its original requirements rather than claiming that a hand answer executes code.

Follow the rows in order. For each assigned question keep a first response before consulting its named complete key, then correct the first consequential error and explain the repair.

| Stage | Required source and work | Complete feedback and release condition |
| --- | --- | --- |
| A. Units, estimates and representations | Complete the nine questions in “Foundations release” above: Formulas from Science **3/4/6**, Checking and Estimation **1/3/5**, Graphing Stories **1/3/5**. Then complete **MF-CARD-P001/P002/R001** in the [numerical-cards reading](recipe-model-audit-numerical-cards.md), using only their named algebra portions of AM-CV-1/2/R | Each preparation question has an adjacent Solution; the three cards have their own full keys and repairs. Keep units, the original domain, a table/graph, original-temperature residuals, the fitting/test distinction and the inclusive sensor bound. Euler and differential-equation work remain outside this selection |
| B. Target and probability preparation | [From a Question to a Row](../books/statistics-with-r/question-row-estimand.md): definitions of unit, variable, estimand, statistic and mechanism; “The row that vanished”, “Repeats” and the analysis ledger. In [Sampling Variation](../books/statistics-with-r/sampling-variation.md), read finite sample spaces/probabilities, expectation/variance, independence/iid, the iid-mean theorem and the normal/quantile definitions. Assign **R-08-E04** and **R-08-E05** | Compare [Solutions: Sampling Variation](../books/statistics-with-r/solutions-sampling-variation.md), the same exercise IDs. Distinguish rows from independent units, a finite descriptive mean from a population target, SD from SE, and independence from identical marginal distributions |
| C. Assignment uncertainty and causal restraint | In [Randomization Tests](../books/statistics-with-r/randomization-tests.md), read prerequisite repair, assignment space/sharp null, the six-pair investigation, inclusive tails, the finite-level theorem and proof, “Three nulls”, the household example and the defensible workflow. Assign **R-09-E03**, **R-09-E05**, **R-09-E06** and **R-09-E08** | Compare [Solutions: Randomization Tests](../books/statistics-with-r/solutions-randomization-tests.md), each matching ID. Preserve ties, the actual assignment unit, sharp versus average null, a predeclared tail, missingness and the scope of the estimand. Monte Carlo is optional and is not needed for the complete finite tables |
| D. Stochastic estimation and interval meaning | In [Confidence, tests, power, and practical importance](../books/statistics-with-r/confidence-tests-power.md), read confidence/coverage definitions, “Adverse case”, and the exact known-sigma normal example and proof. Assign **R-11-E01**, **R-11-E02**, **R-11-E06** and **R-11-E08**, then complete the mean-versus-new-observation comparison below | Compare [Solutions: Confidence, tests, power, and practical importance](../books/statistics-with-r/solutions-confidence-tests-power.md), the same IDs, and the full interval derivation below. State the repeated mechanism and fixed target; no posterior or future-observation meaning follows from a mean confidence interval |
| E. Measurement and two causal-design protocols | Read the entry diagnostic and **Sections 1–6**, then attempt all **five “Practice and solutions” questions** in [Mathematics Education Research Methods and Claim Boundaries](#/courses/atlas-mathematics-education-research-methods). In [Quantity, Evidence, and Teaching](#/courses/atlas-quantity-evidence-and-teaching), read Sessions 1–4 for the task, score and response-process context, then reconstruct **Protocol P** and complete the changed **Protocol Q**, including their full allocation tables | Compare each Methods question's adjacent Solution and Quantity's full P/Q models, audit repair and protocol rubric. State the exact equal-class estimand, roster-weighted descriptive contrast, hypothetical design and sharp-null calculation. The numerical checkpoints below identify consequential repairs |
| F. Prediction, changed use and later audit | Read the [general recipe](recipe-model-fit-audit.md), Inputs/Output and **Steps 1–12**. For split/metric repair use [Build and Audit a Trustworthy Predictive Model](recipe-trustworthy-predictive-model.md), Steps 1–5, its miniature audit and Worked checks 1/3/4/5. Complete **FND-GROUP-P001/P002/R001**, the supplied regime check, and all ten fields for each form | Use the [grouped-prediction data and complete cards](recipe-model-audit-foundations-tasks.md), followed by the [separate-regime repair guide](recipe-model-audit-foundations-frozen-test.md). Distinguish an unseen device from another reading of a known device, a complete-data metric from a missing-row bound, and synthetic regime checking from empirical external validation |

Methods' course assumes basic inference and familiarity with learning progressions. Stage B–D supplies the selected inference preparation; Quantity Sessions 1–4 supplies the particular mathematical task and score context. If the measurement/response-process terms in Methods Sections 1–6 remain unfamiliar, repair them through its linked teaching/learning-progressions source before using the causal interpretation. This is a named model-audit selection, not the full ED-METHODS programme protocol route: it does not silently assign or waive that route's learning-progressions exercises, 570-minute allocation or other prerequisites.

### Statistical and protocol checkpoints

These checkpoints help locate a wrong premise; retain the complete arguments in the named source keys.

**R-08-E04/E05.** Separate fair coin tosses are iid; one toss recorded twice has identical marginals but is dependent; independent Bernoulli trials with probabilities 0.2 and 0.7 are not identically distributed; equal-marginal, positively correlated temperatures are dependent. For 36 iid fills with mean 500 grams and SD 12 grams, the mean has expectation 500 grams, variance $12^2/36=4$ square grams and SE 2 grams. SE 1 gram requires 144 iid fills. Serial drift can invalidate the independence argument; more rows alone do not restore it.

**R-09-E03/E05/E06/E08.** In a uniform finite assignment space of size $N$, rank assignments by decreasing predeclared extremeness. The inclusive tail at position $j$ contains at least $j$ assignments, even with ties. Thus $p\ge j/N$, so at most $\lfloor\alpha N\rfloor$ assignments satisfy $p\le\alpha$, giving probability at most $\alpha$. If all scores tie, every p-value is 1, including the correct boundary at $\alpha=1$. The sharp null, no interference, uniform design and prespecified statistic/tail are hypotheses, not consequences of this counting.

Optional workshop attendance does not supply a uniform assignment lottery. Motivation can affect both attendance and scores; equal group means alone does not establish label exchangeability. A restricted observational permutation question requires its own sampling/exchangeability assumptions and is not automatically causal. In the household example, outcomes $(2,3,9,10)$ have two possible whole-household assignments, contrasts $-7,7$, and observed upper-tail p-value $1/2$. The row-level value $1/6$ uses four impossible split-household assignments. For E08 the target is $\tau_8=8^{-1}\sum_{i=1}^8\{Y_i(1)-Y_i(0)\}$ for eight fixed benches, growth in centimeters after four weeks. Freeze four-of-eight assignment, all 70 equally likely sets, the treated-minus-control statistic, inclusive upper tail, no-interference/treatment-version and missing-outcome rules. No outcomes are supplied, so no numerical p-value can yet be reported. This sharp-null test does not provide a confidence interval for $\tau_8$.

**R-11-E01/E02/E06/E08.** Before sampling, $C(X)$ is random and the parameter is fixed; after sampling, $C(x)$ is fixed too. Confidence concerns repeated coverage under the stated mechanism. For the Bernoulli procedure $C(0)=[0,1]$, $C(1)=(\alpha,1]$, coverage is $1-\theta$ for $0\le\theta\le\alpha$, and 1 for $\alpha<\theta\le1$. At $\theta=\alpha$ it is $1-\alpha$, because the endpoint is open. The source's 16 iid normal service times have mean 52 minutes and stipulated known $\sigma=6>0$ minutes. The mean's SE is 1.5 minutes and its 95% interval is approximately $[49.060054,54.939946]$. Against 48 minutes, the estimate is 4 and the interval is $[1.060054,6.939946]$: it excludes zero but does not establish a difference exceeding the predeclared 3-minute practical threshold. Neither a confidence level nor a p-value is a posterior probability; practical importance needs its own threshold and units. Known sigma, iid normality and the declared mechanism cannot be replaced by a convenient appearance or an estimated SD without changing the procedure.

**Methods' five repairs.** A rating scale alone does not explain why learners dislike proof: narrow the question or supply a suitable process design. Sixteen assigned classrooms do not become 420 independent assignments. An interval $[-0.12,0.48]$ around an estimate 0.18 standard deviations does not prove no effect or equivalence. A purposeful gesture case supports a contextual mechanism account, not population prevalence. Five reports with two from the same trial and incompatible designs do not supply five independent, commensurable effects for an unweighted mean. Compare the full adjacent solutions before drafting the protocols.

**Protocol P.** Six fixed fictional classes have rosters $(5,5,20,10,10,10)$ and mean rubric-score gains $(2,2,8,1,2,3)$; ABC receive R in the displayed allocation. The outcome is mean gain on the same public 0–8 task seven days after fixed scripted routines, with recorded tools/help/deviations and proposed scoring/disagreement records. No scorer agreement or real intervention is observed. The primary target is $\tau_C=6^{-1}\sum_j\{Y_j(1)-Y_j(0)\}$, weighting classes equally. Class means 4 and 2 give $D_C=2$; roster-weighted means 6 and 2 give the different descriptive $D_S=4$. With exactly three of six classes hypothetically assigned uniformly, all 20 triples have mass $1/20$. Under the classwise sharp null, total gain 18 gives $D_C=(2s-18)/3$. Counting $|D_C|\ge2$, including ties, gives **14 of 20**, hence $p=7/10$. The six non-tail triples are ABF, ACD, AEF, BCD, BEF and CDE. Reproduce the full twenty-row source table, not only this count.

**Protocol Q.** Four new fictional classes have rosters $(4,12,8,8)$ and gains $(1,5,0,2)$, displayed R=AB. The equal-class target now uses $1/4$; exactly two of four classes are assigned uniformly, each pair with mass $1/6$. $D_C=2$, but roster-weighted $D_S=3$. With total gain 8, $D_C=s-4$. In AB/AC/AD/BC/BD/CD order the contrasts are $2,-3,-1,1,3,-2$; AB, AC, BD and CD are in the inclusive absolute tail, giving **4 of 6**, $p=2/3$. Keep the source's full six-row table and changed population, weights and denominators.

For both protocols preserve fixed routine versions, consistency, appropriate no-between-class-interference and the complete-outcome assumption. Missing scores or a lost class invalidate these supplied complete-data calculations until an explicit missingness analysis is justified: no silent exclusions, zeros or reassignment. Assignment indicators in a fixed-size design are dependent. A class mean copied once per roster member does not create independently assigned students or recover individual variation. The classwise sharp null is stronger than zero average effect; its p-value is neither an effect size, probability of the null, confidence interval, equivalence result nor evidence of real teaching effectiveness. Random assignment and population sampling answer different questions.

Reconstruct P and Q as ten-field audit cards using Step 12. Their fitting/baseline field must say “prespecified design-based contrast; no fitted forecast or predictive baseline supplied”; their validation field must say “complete conditional allocation check; no held-out predictive or external study”. Record the source's measurement construct, scripts, roster, missingness, weighting and claim boundaries in the other eight fields. Treatment allocation is not a training/test split, and Q is not external validation of P. This honest nonpredictive card complements the actual prediction cards below.

### Mean uncertainty and one new observation

#### Worked example: a parameter mean and a new session have different variability

Complete this short comparison under **the R11 service model**, separately from the device data below. Let $X_1,\ldots,X_{16},Y_{\mathrm{new}}$ be independent $N(\mu,36)$ times; the additional session has the same law, $\mu$ is fixed and sigma 6 is known. With $\bar x=52$, write $z=z_{0.975}$, the standard-normal quantile approximately 1.959964.

The mean confidence interval is $52\pm(3/2)z$. For one new session, independence and the iid-mean variance theorem give
$$
E(Y_{\mathrm{new}}-\bar X)=0,\qquad
\operatorname{Var}(Y_{\mathrm{new}}-\bar X)
=36+36/16=153/4.
$$
Independent normal stability makes the difference normal, so dividing it by $\sqrt{153}/2$ gives a standard normal variable. Consequently
$$
\Pr_\mu\!\left\{Y_{\mathrm{new}}\in
[\bar X-z\sqrt{153}/2,\ \bar X+z\sqrt{153}/2]\right\}=0.95.
$$
The reported prediction interval is $52\pm z\sqrt{153}/2$ minutes. It is wider than the mean interval because $153/4>9/4$; the new session adds its own variance. This is coverage over **joint repetitions of the training sample and one independent new session**. It is not a posterior probability, a 95% guarantee conditional on this particular observed training mean, an interval covering all future sessions simultaneously, or an interval for the fixed device fixture. If the new session shares an unmodelled shift/dependence, or sigma is estimated, this proof does not establish the advertised coverage. Keep this full derivation beside the source E01/E02/E06/E08 repairs.

## Exercises with hints and complete solutions

### Exercise 1 {#model-audit-foundations-checkpoints-ex-1}

Under the stated known-sigma normal model, compare the standard error of the
sixteen-session mean with the standard deviation of one new session minus that
mean.

<details><summary>Hint 1</summary>

The mean variance is the single-session variance divided by sixteen.

</details>
<details><summary>Hint 2</summary>

Independence makes the two variances add for the new-session difference.

</details>
<details><summary>Solution</summary>

The mean variance is $36/16=9/4$, giving standard error $3/2$ minutes.
The difference variance is $36+9/4=153/4$, giving standard deviation
$\sqrt{153}/2$ minutes. Both intervals use the same normal quantile, but the
new observation contributes its own variation. The resulting prediction
coverage concerns joint repetitions, not a conditional guarantee for this
particular observed sample.

</details>

### Exercise 2 {#model-audit-foundations-checkpoints-ex-2}

Reconstruct Protocol P's equal-class and roster-weighted contrasts from the
displayed class sizes and gains. Why are they different quantities?

<details><summary>Hint 1</summary>

First average the three class means on each side without weights.

</details>
<details><summary>Hint 2</summary>

For roster weighting, multiply each class gain by its own roster size.

</details>
<details><summary>Solution</summary>

Equal-class means are $(2+2+8)/3=4$ and $(1+2+3)/3=2$, giving contrast 2.
Roster-weighted means are $(5\cdot2+5\cdot2+20\cdot8)/30=6$ and
$(10\cdot1+10\cdot2+10\cdot3)/30=2$, giving contrast 4. The first gives
every class equal weight; the second gives every roster member equal weight
when expanding class means. The class-allocation p-value for the first
statistic cannot be relabelled as a p-value for the second.

</details>


