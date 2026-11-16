
# Survey Sampling: Frames, Designs, Weights, and Honest Uncertainty

**Before reading.** Read [Sampling Variation: What Could Happen Next Time?](../books/statistics-with-r/sampling-variation.md) and [Expectation and Variance](../books/introduction-to-probability/expectation-variance.md). These are preparation for the ideas used below.

Survey sampling is inference about a finite population through a randomized selection mechanism. Its core mathematics treats population values as fixed and the sample indicators as random. That viewpoint differs from fitting an independent-data model after downloading a convenient table.

This deep dive assumes expectation and variance. It complements the [advanced-statistics reference](#/books/advanced-statistical-inference-reference) and supplies the design layer used throughout the [standard course](#/courses/atlas-advanced-statistics-design-dependence).

## 1. Population, frame, unit, and estimand

Let the finite target population be $U=\{1,\ldots,N\}$ with fixed values $y_{i}$. A sampling frame is the operational list or mechanism from which units can be selected. The frame can omit target units, include duplicates, or contain ineligible entries. Probability calculations conditional on a flawed frame do not remove coverage error.

Common estimands include the total $Y=\sum_{U} y_{i}$, mean $Ybar=Y/N$, proportion, domain total, and ratio. Define the unit: person, household, business, visit, or plot. A household-level selection followed by one respondent per household creates two stages and two sets of inclusion chances.

Let $I_{i}$ equal 1 if unit $i$ is sampled. Its first-order inclusion probability is $\pi_{i}=P_{d}(I_{i}=1)$, where $P_{d}$ refers to the declared design. Let $\pi_{ij}=P_{d}(I_{i}=I_{j}=1)$ be the pairwise inclusion probability. A positive $\pi_{i}$ is required to estimate a total containing $y_{i}$ without additional modeling; a unit with zero chance cannot speak through design weights.

## 2. Horvitz–Thompson estimation

The Horvitz–Thompson estimator is

$$\widehat{Y}_{HT}=\sum_{i \in s} y_{i}/\pi_{i}=\sum_{U} I_{i} y_{i}/\pi_{i}$$

Because $E_{d} I_{i}=\pi_{i}$,

$$E_{d}(\widehat{Y}_{HT})=\sum_{U} y_{i}=Y$$

No independence among inclusion indicators is needed for unbiasedness. Dependence matters for variance:

$$\operatorname{Var}_{d}(\widehat{Y}_{HT})=\sum_{i} \sum_{j} (\pi_{ij}-\pi_{i}\pi_{j})y_{i} y_{j}/(\pi_{i}\pi_{j})$$

When all relevant $\pi_{ij}>0$, an unbiased variance estimator can replace population sums by sample sums with appropriate $\pi_{ij}$ factors. Software needs the actual strata, clusters, finite-population corrections, and weights; treating rows as iid generally gives the wrong standard error.

**Example.** A design selects exactly one of three units with probabilities $(1/2,1/3,1/6)$. Values are $(4,6,12)$. The possible HT estimates are $8,18,72$. Their design expectation is

$$(1/2)8+(1/3)18+(1/6)72=4+6+12=22$$

the population total. The estimator can be volatile because the large value has a small inclusion probability. Unbiasedness does not mean every realized estimate is close.

## 3. Simple random sampling without replacement

Under simple random sampling without replacement (SRSWOR), every subset of size $n$ is equally likely. Then $\pi_{i}=n/N$, and the sample mean is unbiased for the population mean. If

$$S^{2}=(1/(N-1))\sum_{U}(y_{i}-Ybar)^{2}$$

then

$\operatorname{Var}_{d}(\bar{y}_{s})=(1-f)S^{2}/n$, where $f=n/N$.

The finite-population correction $1-f$ records reduced uncertainty when sampling without replacement from a substantial fraction of the population. It is not appropriate merely because the target population is conceptually finite; it belongs to a particular design and estimand.

Estimate $S^{2}$ with the sample variance $s^{2}$. A large-sample interval may
use $\bar{y}_{s}\pm z^{*}\sqrt{(1-f)s^{2}/n}$, but a tiny, skewed sample needs
design-aware alternatives. If sampling is with replacement, the covariance
induced by nonreplacement and its correction disappear.

## 4. Stratification

Partition the frame into nonoverlapping strata $U_{h}$ of sizes $N_{h}$. Draw an independent SRSWOR of size $n_{h}$ in each. The mean estimator is

$\widehat{\bar{Y}}_{st}=\sum_{h} W_{h} \bar{y}_{h}$, with $W_{h}=N_{h}/N$,

and

$$\operatorname{Var}_{d}(\widehat{\bar{Y}}_{st})=\sum_{h} W_{h}^{2}(1-f_{h})S_{h}^{2}/n_{h}$$

Stratification can guarantee representation and improve precision when units within strata are homogeneous for the outcome. Proportional allocation uses $n_{h}\propto N_{h}$. With equal per-unit cost and known within-stratum spreads, Neyman allocation uses $n_{h}\propto N_{h} S_{h}$. Allocation chosen using an outcome cannot be simultaneously optimal for every other outcome.

Strata are selected independently. Clusters are different: a design samples groups, often to save travel, and observes several similar units within each selected group. Confusing them reverses the variance intuition.

## 5. Cluster and multistage designs

Suppose primary sampling units (PSUs) are schools and students are sampled within selected schools. A student’s overall inclusion probability is the probability that the school is selected times the conditional probability that the student is selected within it.

Students in one school often resemble one another. For equal cluster size $m$ and intracluster correlation $\rho$, a rough design effect is

$$DEFF\approx1+(m-1)\rho$$

If $m=20$ and $\rho=0.05$, this is $1.95$: the variance can be almost twice an iid variance at the same person count. This approximation requires a particular equal-size correlation model; actual survey variance should follow the design. More people inside a few clusters may provide less information than fewer people spread across many clusters.

Probability proportional to size sampling can give large PSUs greater selection chance. If the within-PSU sample fraction compensates, person-level weights may become nearly self-weighting. The complete calculation must multiply selection probabilities across stages.

## 6. Ratio, calibration, and regression estimators

Auxiliary population information can improve precision. If a population total $X=\sum x_{i}$ is known and $y$ is approximately proportional to $x$, the ratio estimator is

$$\widehat{Y}_{R}=X (\sum_{s} w_{i} y_{i})/(\sum_{s} w_{i} x_{i})$$

where base weights are $w_{i}=1/\pi_{i}$. It is generally not exactly design-unbiased, but can have smaller mean squared error.

Calibration chooses adjusted weights close to base weights while enforcing constraints such as $\sum_{s} w_{i}^* x_{i}=X$. Poststratification and raking are examples. Calibration can reduce variance and some nonresponse bias when auxiliary variables predict outcomes and response. Extreme adjusted weights increase variance and sensitivity. Weight trimming trades bias against variance; its rule belongs in the analysis record.

A model-assisted regression estimator uses a predictive model for efficiency while retaining a design-based correction. “Model-assisted” is not “model-free”: the design protects certain properties, while a poor working model can still waste precision.

## 7. Nonresponse is a second selection process

Unit nonresponse removes all measurements for a sampled unit; item nonresponse removes selected variables. Base weights address randomized sampling, not response behavior. A response-propensity adjustment might divide by an estimated response probability conditional on covariates. Its validity requires that respondents and nonrespondents be exchangeable for the target outcome after conditioning, plus positivity and a usable model.

These assumptions are not fully testable because nonrespondent outcomes are unseen. Report response rates, patterns by frame variables, adjustment cells or propensity models, and sensitivity to departures. A high response rate can still be biased if nonresponse is concentrated among units with different outcomes; a lower rate can be less biased under effective adjustment.

Imputation fills item gaps to make analysis operational. Single imputation followed by ordinary complete-data standard errors ignores imputation uncertainty. Multiple imputation combines within- and between-imputation variation under its imputation model. Neither creates information about systematically absent groups without assumptions.

## 8. Domain estimation and small samples

A domain is a subpopulation such as an age group or region. If the design did not fix domain sample sizes, the realized count is random. Estimate a domain total by restricting HT contributions, and a domain mean as a ratio of estimated total to estimated domain size. Do not pretend the domain was an independent SRS of its realized size.

For small areas with little direct sample, hierarchical models can borrow strength. The resulting estimator is model-based or model-assisted and can reduce variance at the price of shrinkage bias under misspecification. Publish direct sample sizes, weight summaries, and model diagnostics so a smooth map does not hide weak local support.

## 9. Replicate weights and nonlinear estimands

Taylor linearization approximates a nonlinear estimator by a weighted total whose variance is tractable. Replication methods repeatedly perturb the sample according to the design:

- jackknife replicates delete PSUs using design-specific scaling;
- balanced repeated replication is built for certain two-PSU-per-stratum designs;
- survey bootstraps resample PSUs and adjust weights.

An ordinary iid bootstrap of individual rows breaks clustering, stratification, and fixed sample sizes. Public survey files often include replicate weights precisely so users can reproduce approved variance calculations. Apply the publisher’s scale and Fay factors exactly.

## 10. A complete reporting table

For every estimate, report:

| element | question |
|---|---|
| target and frame | who is intended, and who could actually be selected? |
| estimand | finite-population total, mean, ratio, or model parameter? |
| design | stages, strata, PSUs, replacement, and selection probabilities? |
| weight | base, nonresponse, calibration, trimming, normalization? |
| variance | Taylor, replicate, or exact design formula? |
| missingness | which response assumption is invoked? |
| support | effective sample size, number of PSUs, and extreme weights? |
| claim | descriptive, design-generalized, model-generalized, or causal? |

The effective sample size approximation $(\sum w_{i})^{2}/\sum w_{i}^{2}$ diagnoses weight dispersion but does not replace a design variance. Normalizing weights can preserve some point estimates while changing totals; software conventions for likelihoods and standard errors differ.

## 11. Common errors

**“The weighted sample size is the sum of weights.”** The sum may estimate population size. It is not the number of independent observations.

**“Large data make weights unnecessary.”** Selection bias need not vanish with sample size; precision can increase around the wrong target.

**“The design is ignorable because weights barely change the mean.”** Similar point estimates do not imply similar standard errors or domain estimates.

**“Survey association is causal after regression adjustment.”** Probability sampling supports population generalization. Causal identification additionally needs assignment or defensible no-confounding assumptions.

**“Every selected person is independent.”** Clustered selection creates dependence even if outcomes would otherwise be independent.

## 12. Worked stratified calculation

**Worked example.**

A population has two strata. Stratum 1 has $N_{1}=60$, sample $n_{1}=6$, sample mean 10, sample variance 9. Stratum 2 has $N_{2}=40$, sample $n_{2}=8$, sample mean 20, sample variance 16.

The stratified mean is

$$0.6(10)+0.4(20)=14$$

Estimated variance is

$$0.6^{2}(1-6/60)9/6 + 0.4^{2}(1-8/40)16/8$$

$$=0.36(0.9)(1.5)+0.16(0.8)(2)=0.486+0.256=0.742$$

The standard error is $\sqrt{0.742}\approx0.861$. This calculation treats sampling as independent SRSWOR within fixed strata. It says nothing about nonresponse or measurement error.

## Practice with solutions

<a id="deep-dive-survey-sampling-design-weights-ex-1"></a>

**Exercise 1.**

**A. Single-draw unequal probability.** Three units have values $(2,5,9)$ and one is selected with probabilities $(1/2,1/4,1/4)$. List the possible HT total estimates and verify unbiasedness.
<details>
<summary>Hint 1</summary>

For one selected unit, inverse-probability weighting turns its observed value into a total estimate.
</details>
<details>
<summary>Hint 2</summary>

Compute the estimate for each possible draw and average them with the stated selection chances.
</details>
<details>
<summary>Solution</summary>

Estimates are $2/(1/2)=4$, $5/(1/4)=20$, and $9/(1/4)=36$. Their expectation is $(1/2)4+(1/4)20+(1/4)36=2+5+9=16$, the population total.

</details>

<a id="deep-dive-survey-sampling-design-weights-ex-2"></a>

**Exercise 2.**

**B. Cluster design effect.** With equal cluster size 12 and intracluster correlation 0.08, calculate the approximate design effect and the iid-equivalent size of a 600-person sample.
<details>
<summary>Hint 1</summary>

The equal-cluster approximation uses one plus cluster size minus one times intracluster correlation.
</details>
<details>
<summary>Hint 2</summary>

Insert twelve and 0.08 to find the design effect, then divide the nominal size by it.
</details>
<details>
<summary>Solution</summary>

$DEFF\approx1+11(0.08)=1.88$. The rough iid-equivalent size is $600/1.88\approx319$. This is a planning approximation, not an exact design variance.

</details>

### Further practice

**C. Frame failure.** A telephone frame excludes people without phones, so their inclusion probabilities are zero. Can calibration by age alone make an HT claim for the full resident population?

**Solution.** No design-unbiased claim covers zero-chance units. Age calibration may support a model-based adjustment if outcomes of covered and uncovered residents are exchangeable within age cells and positivity holds in the covered data, but that is an additional untestable assumption and must be labeled.
