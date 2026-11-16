var e=`---
parent_id: book-principles-statistical-inference
chapter_id: randomized-experiments-and-causal-contrasts
title: "Randomized Experiments and Causal Contrasts"
level: advanced-undergraduate
estimated_minutes: 300
license: CC BY-SA 4.0
---

# Randomized Experiments and Causal Contrasts {#section-1-randomized-experiments-and-causal-contrasts}

<a id="section-1-level-and-prerequisites"></a>
## Level and prerequisites {#section-3-level-and-prerequisites}

This is a chapter of the L3 inference route. Preparation is [Probability: Models, Bounds, and Proofs](../probability-models-proofs.md), especially its [Gaussian-vector chapter](../probability-models-proofs/gaussian-vectors-and-multivariate-normal.md), and [Lucent linear algebra](/lucent/web/#/course/linear-algebra). The L3 core uses finite probability and conditional/design expectation from the linked prerequisites. The finite-population approximation section states its stronger bounded-array assumptions and imported limit result explicitly. General instrumental-variable identification, interference and transport theory are optional advanced continuations beyond the finite design calculations.


Random assignment creates a probability law by design. It can identify causal contrasts without modelling outcomes as iid draws, but only for the units, treatments, assignment mechanism, interference structure, and observation process actually declared. Randomization does not guarantee representative sampling, compliance, complete measurement, or relevance of the chosen treatment contrast.

This chapter develops finite-population potential outcomes, proves unbiasedness and the exact assignment variance of the difference in means, constructs conservative Neyman uncertainty and sharp-null Fisher tests, and extends the logic to blocks, pairs, clusters, covariate adjustment, noncompliance, and interference.

<a id="section-10-1-potential-outcomes-define-unit-level-contrasts"></a>
## 1. Potential outcomes define unit-level contrasts {#section-12-1-potential-outcomes-define-unit-level-contrasts}

For finite units $i=1,\\dots,N$, let $Y_i(1)$ be the outcome under treatment and $Y_i(0)$ under control. Before assignment these values are treated as fixed. The unit effect is

$\\tau _i=Y_i(1)-Y_i(0)$,

and the finite-population average treatment effect is

$\\tau =N^{-1}\\sum _i\\tau _i=\\bar{Y}(1)-\\bar{Y}(0)$.

Assignment indicator $Z_i\\in {0,1}$ reveals only

$Y_i^obs=Z_iY_i(1)+(1-Z_i)Y_i(0)$.

The missing potential outcome is not ordinary missingness generated after treatment; it is structurally unobserved because one unit cannot simultaneously receive both assigned conditions. Randomization identifies averages by making which potential outcomes are observed probabilistically known.

This notation assumes one version of each treatment and no interference between units. Later sections state what changes when those assumptions fail.

<a id="section-28-2-complete-randomization-fixes-group-sizes"></a>
## 2. Complete randomization fixes group sizes {#section-30-2-complete-randomization-fixes-group-sizes}

Let $N\\ge2$ and $1\\le n_1\\le N-1$ be integers, and put $n_0=N-n_1$. Under complete randomization, exactly $n_1$ units receive treatment and $n_0$ receive control, with every such assignment vector equally likely. Then

$E_Z[Z_i]=n_1/N$.

The difference-in-means estimator is

\\[\\hat{\\tau }=\\bar{Y}_1^obs-\\bar{Y}_0^obs\\]

$=n_1^{-1}\\sum _iZ_iY_i(1)-n_0^{-1}\\sum _i(1-Z_i)Y_i(0)$.

The subscript $Z$ emphasizes that repeated-world probability comes from assignment while the potential-outcome table remains fixed.

<a id="section-42-3-difference-in-means-is-design-unbiased"></a>
## 3. Difference in means is design-unbiased {#section-44-3-difference-in-means-is-design-unbiased}

**Theorem 15.1.** Under complete randomization, $E_Z[\\hat{\\tau }]=\\tau $.

**Proof.** By linearity and $E_Z[Z_i]=n_1/N$,

\\[E_Z[n_1^{-1}\\sum _iZ_iY_i(1)]\\]

$=n_1^{-1}\\sum _i(n_1/N)Y_i(1)=\\bar{Y}(1)$.

Likewise $E_Z[1-Z_i]=n_0/N$, so the expected control mean is $\\bar{Y}(0)$. Their difference is $\\tau $. ∎

No normality or constant effect is needed. The conclusion can fail if assignment probabilities are unequal and ignored, if treatment labels are altered after assignment, or if outcomes are observed selectively by treatment.

<a id="section-56-4-sampling-without-replacement-variance-lemma"></a>
## 4. Sampling-without-replacement variance lemma {#section-58-4-sampling-without-replacement-variance-lemma}

For fixed numbers $a_1,\\dots,a_N$ with integer $N\\ge2$, let $A_T$ be the mean of a simple random sample of integer size $1\\le n\\le N$ without replacement. Define

$S_a^{2}=(N-1)^{-1}\\sum _i(a_i-\\bar{a})^{2}$.

Then

$Var(A_T)=(1/n-1/N)S_a^{2}$.

**Proof.** Inclusion indicators have $E[Z_i]=n/N$,

$Var(Z_i)=n(N-n)/N^{2}$,

and, for $i\\ne j$,

$Cov(Z_i,Z_j)=-n(N-n)/[N^{2}(N-1)]$.

Insert these into the variance of $n^{-1}\\sum _iZ_i a_i$, centre $a_i$ at $\\bar{a}$, and use $\\sum _i(a_i-\\bar{a})=0$. Simplification gives the formula. ∎

The negative covariance is the finite-population correction: selecting one unit slightly reduces the chance of selecting another.

<a id="section-78-5-exact-assignment-variance-exposes-effect-heterogeneit"></a>
## 5. Exact assignment variance exposes effect heterogeneity {#section-80-5-exact-assignment-variance-exposes-effect-heterogeneit}

Define finite-population variances $S_1^{2}$, $S_0^{2}$, and $S_\\tau ^{2}$ for $Y_i(1)$, $Y_i(0)$, and $\\tau _i$. Under complete randomization,

$Var_Z(\\hat{\\tau })=S_1^{2}/n_1+S_0^{2}/n_0-S_\\tau ^{2}/N$.

To derive it, apply the inclusion covariance calculation jointly to the treated mean of $Y(1)$ and control mean of $Y(0)$. Writing the finite-population covariance as $S_10$, the expansion gives

$S_1^{2}(1/n_1-1/N)+S_0^{2}(1/n_0-1/N)+2S_10/N$.

Since

$S_\\tau ^{2}=S_1^{2}+S_0^{2}-2S_10$,

the displayed variance follows.

The term $S_\\tau ^{2}$ cannot generally be identified because no unit reveals both outcomes. Constant treatment effects make it zero. Heterogeneity reduces this particular assignment variance relative to the first two terms, but that does not make heterogeneous effects scientifically unimportant.

<a id="section-96-6-neyman-variance-is-conservative"></a>
## 6. Neyman variance is conservative {#section-98-6-neyman-variance-is-conservative}

Assume $n_1,n_0\\ge 2$, and let $s_1^{2}$ and $s_0^{2}$ be the usual denominator-$n_z-1$ sample variances within observed treatment groups. Each is design-unbiased for its corresponding finite-population variance. The estimator

\\[\\hat{V}_N=s_1^{2}/n_1+s_0^{2}/n_0\\]

omits $-S_\\tau ^{2}/N$, so

$E_Z[\\hat{V}_N]-Var_Z(\\hat{\\tau })=S_\\tau ^{2}/N\\ge 0$.

Thus it is conservative on average. A large-sample interval

\\[\\hat{\\tau }\\pm z_{1-\\alpha /2}\\sqrt{\\hat{V}_N}\\]

also needs a finite-population central limit theorem and conditions preventing a few units from dominating. Conservativeness of the variance expectation does not itself prove finite-sample coverage.

<a id="section-112-7-fisher-tests-require-a-sharp-null"></a>
## 7. Fisher tests require a sharp null {#section-114-7-fisher-tests-require-a-sharp-null}

The **sharp null** of no effect is

$H_0:Y_i(1)=Y_i(0)$ for every unit $i$.

Under this null every missing potential outcome equals the observed outcome, so for any allowed reassignment one can calculate the statistic that would have been observed. Enumerating every allowed assignment gives the exact randomization distribution. Ordinary sampling of assignments gives a Monte Carlo approximation to that distribution; it does not turn the sampled histogram into the full exact distribution.

For statistic $T(Z,Y^obs)$ and upper-tail alternative, the exact p-value is the proportion of allowed assignments with statistic at least as large as observed, with a declared tie or randomization rule. Conditional on the fixed potential outcomes, the actual assignment is uniform among those assignments; rank calibration proves validity.

If exhaustive enumeration is infeasible, draw $B$ assignments independently from the original design and include the observed assignment in the rank calculation. With $K$ sampled statistics at least as large as the observed statistic, the conservative finite-Monte-Carlo value

$p_{MC}=(K+1)/(B+1)$

is valid under exchangeability of the observed and simulated assignments. The plus-one rule defines a finite randomized test; the unadjusted fraction $K/B$ is only an estimator of the exhaustive tail proportion and can even equal zero.

![Two routes from the sharp null: exhaustive enumeration yields the complete exact randomization distribution, while sampled assignments yield either an approximation or a valid finite Monte Carlo test with a plus-one rank rule](figures/randomization-enumeration-vs-monte-carlo.svg)

The diagram separates three claims that are easy to collapse: complete enumeration is exact for the design, a sampled histogram approximates it, and a rank-calibrated Monte Carlo test has its own finite-simulation validity guarantee.

The weak null $\\tau =0$ permits positive and negative unit effects. It does not impute all missing potential outcomes, so the same sharp-null permutation distribution is not automatically exact for it. Neyman large-sample inference targets the average effect and answers a different question.

<a id="section-134-8-blocks-and-pairs-use-restricted-randomization"></a>
## 8. Blocks and pairs use restricted randomization {#section-136-8-blocks-and-pairs-use-restricted-randomization}

Suppose units are partitioned into blocks $b=1,\\dots,B$, and treatment is randomized independently within each block. Let $N_b$ be block size and $\\hat{\\tau }_b$ its treatment-control difference. The population ATE estimator is

$\\hat{\\tau }_block=\\sum _b(N_b/N)\\hat{\\tau }_b$.

Each block estimator is unbiased for its block ATE, so the weighted sum is unbiased for the overall ATE. Independence of assignments across blocks makes its variance the sum of the block variances weighted by squared block shares:

$Var(\\hat{\\tau }_block)=\\sum _b(N_b/N)^{2}Var(\\hat{\\tau }_b)$.

Blocking can improve precision when blocks group units with similar potential outcomes. Poor blocking need not help, and analysis must respect the actual within-block assignment probabilities.

Matched pairs are blocks of size two with one treated unit. The estimator is the average signed within-pair difference. Its repetition unit is the pair assignment, not two independent individual outcomes.

<a id="section-148-9-cluster-randomization-changes-the-assignment-unit"></a>
## 9. Cluster randomization changes the assignment unit {#section-150-9-cluster-randomization-changes-the-assignment-unit}

If whole schools, clinics, villages, or households are assigned together, assignment indicators are shared within clusters. Treating individuals as independently assigned creates artificial information and usually understates uncertainty.

Design-based analysis can use cluster totals or means with probabilities induced by cluster assignment. Weighting by cluster size determines whether the estimand averages individuals or clusters. With few clusters, normal approximations can be unreliable regardless of the number of individuals measured inside each cluster.

<a id="section-154-10-covariate-adjustment-can-improve-precision"></a>
## 10. Covariate adjustment can improve precision {#section-156-10-covariate-adjustment-can-improve-precision}

Pre-treatment covariates are not needed for unbiasedness under correct randomization, but they can reduce residual variation. Difference-in-means within blocks, regression with treatment–covariate interactions, and residualisation based only on pre-treatment information can improve precision.

Regression algebra does not replace the design argument. Standard errors should remain valid for the randomization and treatment-effect heterogeneity. Adjusting for post-treatment variables can change the estimand and introduce bias. Choosing adjustment after inspecting many outcome associations creates selection that must be included in the procedure.

<a id="section-160-11-noncompliance-changes-treatment-contrasts"></a>
## 11. Noncompliance changes treatment contrasts {#section-162-11-noncompliance-changes-treatment-contrasts}

Assignment $Z$ can differ from treatment received $D$. The intention-to-treat effect compares outcomes by assignment and remains identified by randomization when outcomes are observed. A per-protocol comparison by received treatment generally loses randomization because uptake is selected.

Under additional assumptions—assignment relevance, exclusion of direct assignment effects, monotonicity, and appropriate randomization—the ratio

\\[effect of Z on Y / effect of Z on D\\]

can identify a local average treatment effect for compliers. Each assumption changes the causal target and must be defended; the ratio is unstable when assignment weakly changes receipt.

<a id="section-170-12-interference-requires-exposure-mappings"></a>
## 12. Interference requires exposure mappings {#section-172-12-interference-requires-exposure-mappings}

If one unit's outcome depends on others' assignments, write potential outcomes as $Y_i(z)$ for the full assignment vector. The two-value notation $Y_i(1),Y_i(0)$ is then incomplete.

An exposure mapping may classify assignments by own treatment and treated-neighbour count, cluster coverage, or network distance. The design induces probabilities for those exposures, and inverse-probability estimators can target declared contrasts. Misspecifying the exposure mapping changes the estimand; “spillover” is not one universal parameter.

<a id="section-176-13-internal-and-external-validity-are-separate"></a>
## 13. Internal and external validity are separate {#section-178-13-internal-and-external-validity-are-separate}

Random assignment supports causal comparison for the experimental units. It does not make those units representative of a wider population. Generalisation needs a sampling design or assumptions linking treatment effects to selection and covariates.

Attrition and missing outcomes can also break the observed treatment-group comparison even when assignment was valid. The missing-data chapter separates what randomization still identifies from what needs sensitivity assumptions.

<a id="section-182-14-exercises-with-complete-solutions"></a>
## 16. All six assignments in a four-unit experiment {#section-734-16-all-six-assignments-in-a-four-unit-experiment}

<a id="section-734-worked-example-1-enumerate-the-true-assignment-law"></a>
### Worked example 1: enumerate the true assignment law {#section-736-worked-example-1-enumerate-the-true-assignment-law}

A finite experiment lets us see which quantities are fixed, which vary, and which cannot be recovered from one realised assignment. Take four labelled units with the following synthetic potential outcomes.

| Unit | $Y_i(0)$ | $Y_i(1)$ | $\\tau _i$ |
| --- | --- | --- | --- |
| $1$ | $0$ | $1$ | $1$ |
| $2$ | $1$ | $3$ | $2$ |
| $3$ | $2$ | $5$ | $3$ |
| $4$ | $3$ | $7$ | $4$ |

The finite-population ATE is $5/2$. Assign exactly two units to treatment, uniformly among the six subsets. In the table below, $T$ lists the treated units; the control set is its complement. The last column is the observed Neyman variance estimate, calculated from the two within-arm sample variances.

| $T$ | Treated observed mean | Control observed mean | $\\hat \\tau $ | $\\hat V_N$ |
| --- | --- | --- | --- | --- |
| $\\{1,2\\}$ | $2$ | $5/2$ | $-1/2$ | $5/4$ |
| $\\{1,3\\}$ | $3$ | $2$ | $1$ | $5$ |
| $\\{1,4\\}$ | $4$ | $3/2$ | $5/2$ | $37/4$ |
| $\\{2,3\\}$ | $4$ | $3/2$ | $5/2$ | $13/4$ |
| $\\{2,4\\}$ | $5$ | $1$ | $4$ | $5$ |
| $\\{3,4\\}$ | $6$ | $1/2$ | $11/2$ | $5/4$ |

Averaging the six estimates gives $5/2$. Their deviations from that mean are $-3,-3/2,0,0,3/2,3$; averaging the squared deviations gives $15/4$. This is assignment variance, so its denominator is the number of equally likely assignments, not that number minus one. We are calculating the law, not estimating its variance from sampled assignments.

The fixed potential-outcome variances are $S_1^2=20/3$, $S_0^2=5/3$, and $S_\\tau ^2=5/3$. Substitution into the formula in Section 5 gives the same $15/4$. The average of the last column is $25/6$, exceeding the true variance by $5/12$. Thus the example supplies a concrete potential-outcome table behind original Exercises 6–7 rather than an unrelated set of invented variance parameters.

For two observations, a sample variance equals half their squared difference. Hence $\\hat V_N$ here equals one quarter of the sum of the squared treated-outcome difference and squared control-outcome difference. For assignment $\\{1,4\\}$ those differences are six and one, giving $37/4$. For assignment $\\{3,4\\}$ they are two and one, giving $5/4$. The variance estimator can be well below the true variance in a realised assignment even though its expectation is conservative.

Only two entries of each potential-outcome column are observed in any one row. The whole table is available here because it defines a synthetic experiment. An actual trial does not reveal this table merely by randomizing correctly. In particular, the realised treatment-control contrast $11/2$ in the last row is not the population ATE $5/2$, although the estimator is unbiased across assignments.


<a id="section-765-completing-the-inclusion-covariance-calculation"></a>
### Completing the inclusion-covariance calculation {#section-767-completing-the-inclusion-covariance-calculation}

For a complete randomization with $m$ treated units, count assignments to obtain $E(Z_iZ_j)=m(m-1)/[N(N-1)]$ when $i\\ne j$. Subtracting $E(Z_i)E(Z_j)=m^2/N^2$ gives the negative covariance printed in Section 4. This calculation also shows why treating the indicators as independent Bernoulli draws would use the wrong observation law.

For centred fixed values $c_i=a_i-\\bar a$, the sum of the $c_i$ is zero. Hence $\\sum_{i\\ne j}c_ic_j=-\\sum_i c_i^2$. Expanding the variance of the sample mean using diagonal and off-diagonal indicator covariances gives
\\[
\\operatorname{Var}\\left(\\frac1m\\sum_iZ_i a_i\\right)
=\\frac{N-m}{mN(N-1)}\\sum_i c_i^2
=\\left(\\frac1m-\\frac1N\\right)S_a^2.
\\]
The off-diagonal terms are essential; dropping them would omit the finite-population correction.

One can complete the cross-arm calculation just as explicitly. The covariance between the treated-sample means of the two fixed lists $Y(1)$ and $Y(0)$ is $(1/m-1/N)S_{10}$, by the same centred expansion with products of the two lists. The observed control mean of $Y(0)$ equals $N\\bar Y(0)/(N-m)-m\\bar Y_T(0)/(N-m)$.

The first term is fixed, so the covariance between the treated $Y(1)$ mean and control $Y(0)$ mean is $-S_{10}/N$. Thus subtracting the two arm means introduces $+2S_{10}/N$ into their variance. Substituting $S_\\tau ^2=S_1^2+S_0^2-2S_{10}$ gives the exact heterogeneity formula. This derivation uses fixed potential outcomes and known assignment probabilities throughout, without pretending that the unobserved within-unit covariance can be estimated from one experiment.

<a id="section-781-17-sharp-null-enumeration-is-a-different-table"></a>
## 17. Sharp-null enumeration is a different table {#section-783-17-sharp-null-enumeration-is-a-different-table}

<a id="section-783-worked-example-2-reconstruct-outcomes-under-a-sharp-nul"></a>
### Worked example 2: reconstruct outcomes under a sharp null {#section-785-worked-example-2-reconstruct-outcomes-under-a-sharp-nul}

Suppose the realised treated set is $\\{3,4\\}$. The observed outcome vector is then $(0,1,5,7)$. For a Fisher test of the sharp null of no effect, impute both potential outcomes of each unit as its own observed value. This imputed table differs from the synthetic true table above. It is the table implied by the hypothesis being tested.

With two treated units, the treated-minus-control statistic for a candidate set $T$ is the sum of its two imputed outcomes minus half the total outcome sum. The total is thirteen, so subtract $13/2$. Enumerating the original six equally likely assignments gives:

| Candidate $T$ under the sharp null | Imputed statistic |
| --- | --- |
| $\\{1,2\\}$ | $-11/2$ |
| $\\{1,3\\}$ | $-3/2$ |
| $\\{1,4\\}$ | $1/2$ |
| $\\{2,3\\}$ | $-1/2$ |
| $\\{2,4\\}$ | $3/2$ |
| $\\{3,4\\}$ | $11/2$ |

The observed upper-tail statistic is largest, so the inclusive exact p-value is $1/6$. For the predeclared absolute-value ordering, two assignments are at least as extreme, giving $1/3$. These are different ordered tests, not competing numerical approximations to one universal two-sided p-value.

Because there are only six assignments, inclusive nonrandomized tail probabilities occur in multiples of $1/6$. A level-$0.05$ nonrandomized upper-tail test cannot reject any assignment that is uniquely most extreme under this imputed table. Randomizing at an extreme can allocate a smaller rejection probability, provided its rule is predeclared and included in the experiment.

The rank proof of validity keeps the imputed outcome vector fixed under the sharp null while the actual assignment ranges uniformly over the allowed assignments. Inclusive tail counts then satisfy the finite tail-calibration proof in the testing chapter. Under the weak null of zero average effect, missing potential outcomes are not imputed by the observed vector. The same six numbers therefore lack that exact justification for the weak null.

Monte Carlo has two distinct uses. Sampling assignments can estimate the exhaustive tail proportion, with simulation uncertainty. Alternatively, one can define a finite Monte Carlo test by combining the observed assignment with independently sampled assignments and using their exchangeable ranks. That test is valid under the sharp null without claiming the sampled histogram equals the exhaustive law.

If $B=9$, the plus-one formula has denominator ten, and its smallest possible value is $1/10$. It cannot reject at level $0.05$, even if none of the nine simulated statistics exceeds or ties the observed one. This is a resolution property of the chosen finite procedure. Increasing simulation count refines the possible decisions; dropping the plus one changes the rule and can destroy rank calibration.

Sampling must use the actual design. Uniformly permuting all unit labels is wrong for a blocked experiment if it includes assignments the design forbids. Repeating simulations until a favourable p-value appears is also a changed procedure; it is not protected by the fixed-$B$ exchangeability argument merely because each simulation used the right assignment law.

<a id="section-810-18-pairs-and-clusters-change-both-weights-and-repetitio"></a>
## 18. Pairs and clusters change both weights and repetition {#section-812-18-pairs-and-clusters-change-both-weights-and-repetitio}

<a id="section-812-worked-example-3-compare-changed-assignment-units"></a>
### Worked example 3: compare changed assignment units {#section-814-worked-example-3-compare-changed-assignment-units}

Return to the four-unit true table and form pairs $\\{1,2\\}$ and $\\{3,4\\}$. Randomize one treated unit independently within each pair. Only treated sets $\\{1,3\\},\\{1,4\\},\\{2,3\\},\\{2,4\\}$ are now allowed, each with probability $1/4$. Their estimates are $1,5/2,5/2,4$. The average remains $5/2$ and the assignment variance is $9/8$, smaller than $15/4$ for complete randomization in this particular table.

The block estimator gives each pair weight $1/2$, since both contain two of the four units. Within-pair treated-minus-control differences then average to the overall difference in means. The two independent random choices are pair assignments. The four outcome rows are not four independent assignments, and a sharp-null reference distribution must enumerate four allowed labelings rather than the original six.

This precision gain depends on how the potential outcomes align within pairs. It is not a theorem that arbitrary matching improves every finite experiment. A changed pairing can discard favourable assignments or retain very variable ones. Choosing pairs from pre-treatment information and recording the actual randomization supports a prospective argument; rearranging pairs after observing outcomes changes the procedure.

Cluster size creates a separate weighting issue. Consider two clusters with sizes one and three, no interference across clusters, and zero outcomes under control. Under treatment, every member of the first cluster has outcome zero and every member of the second has outcome four. Randomly assign one cluster to treatment. The average cluster effect is two; the average individual effect is three.

The naive difference between the treated and control cluster means takes values zero and four and therefore has expectation two. It targets the equally weighted cluster contrast. Simply calling the same calculation an individual-level ATE does not change its weighting. The three-person cluster must contribute three times the population weight of the one-person cluster for that target.

Let $T_g(z)$ be cluster $g$'s total potential outcome and $\\pi _g$ its treatment probability. For the individual ATE, an inverse-probability estimator is
\\[
\\hat \\tau _{HT}=\\frac1N\\sum_g\\left\\{\\frac{Z_gT_g(1)}{\\pi _g}-\\frac{(1-Z_g)T_g(0)}{1-\\pi _g}\\right\\}.
\\]
Its expectation is the population total effect divided by $N$, provided all relevant probabilities lie strictly between zero and one. Here $\\pi _g=1/2$ and $N=4$, so its two possible values are zero and six, averaging to three.

This unbiasedness does not imply high precision: two assigned clusters give only two possible outcomes in this example. Dividing an estimated total by a random treated-population size produces a ratio estimator, which can have different finite-sample bias properties. Target weights, known population totals, and assignment probabilities should therefore be stated before choosing a convenient formula.

<a id="section-832-19-a-bounded-finite-population-normal-approximation"></a>
## 19. A bounded finite-population normal approximation {#section-834-19-a-bounded-finite-population-normal-approximation}

An exact finite law and a sequence-of-populations limit are different objects. A four-unit example cannot satisfy an assertion that depends on $N$ tending to infinity. To specify one useful import, let fixed lists $b_{N1},\\ldots,b_{NN}$ have positive finite-population variance $v_N$, and put $M_N=\\max_i(b_{Ni}-\\bar b_N)^2$. For a simple random sample of size $m_N$, the condition
\\[
\\frac{M_N}{v_N\\min(m_N,N-m_N)}\\longrightarrow0
\\]
implies that its centred sample mean, divided by its exact standard deviation, converges to a standard normal. This is the finite-population theorem stated by Li and Ding in their primary author version, Section 2.1, Theorem 1; it is imported here rather than reproved.

The denominator requires both sample and complement to grow, while the numerator excludes a single dominating centred value relative to total available variation. A stable sampling fraction alone is not enough. A list with one increasingly influential outlier can violate the condition even when both arm sizes are large.

Here is our reduction from heterogeneous treatment effects to that simple-random-sampling statement. In each complete-randomization experiment write $f_N=m_N/N$ and define the fixed list $b_{Ni}=Y_i(1)/f_N+Y_i(0)/(1-f_N)$. Direct expansion gives
\\[
\\hat \\tau -\\tau =f_N(\\bar b_T-\\bar b_N).
\\]
The factor $f_N>0$ cancels when dividing by the true standard deviation. Consequently the theorem applies if this particular transformed list has $v_N>0$ and satisfies its displayed maximal-term condition. It is not enough to check a convenient list of observed outcomes instead of the relevant fixed potential-outcome combination.

Studentizing requires another step. If $\\hat V_N/\\operatorname{Var}_Z(\\hat \\tau )$ converges in probability to a finite constant $c\\ge 1$, the normal limit and Slutsky's theorem give limiting interval coverage $2\\Phi (z_{1-\\alpha /2}\\sqrt c)-1\\ge 1-\\alpha $. That ratio convergence is an additional requirement, not a consequence of conservative expected variance alone. Degenerate assignment variance, dominating units, vanishing arm sizes, or unstable variance estimation fall outside this conclusion.

For pairs and clusters one must specify the corresponding sequence of independent assignment units and the appropriate theorem. A large number of individuals within two fixed clusters does not satisfy an increasing-cluster limit. The scoped import above covers complete-randomization difference in means through the stated reduction; it is not a blanket approximation theorem for every design in the chapter.


<a id="section-853-a-large-experiment-can-still-have-a-two-point-limit"></a>
### A large experiment can still have a two-point limit {#section-855-a-large-experiment-can-still-have-a-two-point-limit}

For even $N$, take a fixed list consisting of one value $\\sqrt N$ and $N-1$ zeros, and sample $N/2$ entries without replacement. Its population mean is $1/\\sqrt N$ and its denominator-$N-1$ variance is exactly one. The sample mean is either zero or $2/\\sqrt N$, depending on whether the unusual unit is selected, each with probability $1/2$.

Its exact variance is $1/N$, so the standardized sample mean is minus one or plus one for every $N$. It does not approach a standard normal distribution. Both sample and complement grow, and the sampling fraction is perfectly balanced, yet one unit determines the entire fluctuation.

Here the maximal centred square divided by population variance and half the population size tends to two, rather than zero. The imported condition correctly excludes this sequence. This example identifies a specific failure mechanism instead of treating “large sample” as an unqualified numerical threshold.

<a id="section-861-20-noncompliance-and-exposure-identify-the-population-r"></a>
## 20. Noncompliance and exposure: identify the population ratio first {#section-863-20-noncompliance-and-exposure-identify-the-population-r}

A finite principal-strata calculation clarifies the local effect claim. Assume binary assignment and binary receipt, no interference, fixed potential receipts $D_i(0),D_i(1)$, and exclusion: assignment affects the outcome only through receipt. Thus write outcome under receipt as $Y_i(d)$ and outcome under assignment as $Y_i(D_i(z))$. Require monotonicity $D_i(1)\\ge D_i(0)$ for every unit.

There are then always-takers, never-takers, and compliers. Always-takers receive one under either assignment; never-takers receive zero under either; compliers switch from zero to one. Exclusion makes the first two groups' assignment effects zero. If the complier share is $\\pi _C>0$, the finite-population effect of assignment on receipt is exactly $\\pi _C$, while its effect on outcome is $\\pi _C$ times the average receipt effect among compliers.

Therefore the ratio of these two population assignment effects equals the complier average effect. This identity does not require constant effects across strata. It also does not make the ratio of two sample estimates unbiased or always defined. Randomization identifies the two assignment contrasts; estimating a ratio adds a nonlinear statistical problem.

For a concrete four-unit example, let the first unit be an always-taker, the second a never-taker, and the other two compliers. Give receipt effects $10,0,2,6$, respectively, with $Y_i(0)=0$ for each unit. The average receipt effect over all four units is $9/2$. The assignment-to-receipt effect is $1/2$, and the assignment-to-outcome effect is $(2+6)/4=2$. Their ratio is four, the average effect for the two compliers, rather than $9/2$.

If exclusion fails because assignment itself changes access to other services, the numerator includes those direct effects. If monotonicity fails, defiers enter with an opposite receipt change, so the simple positive-share interpretation fails. If the first-stage effect is zero, the population ratio is undefined. Each failure is a change in identification, not a standard-error detail.

Interference creates an analogous positivity issue for exposure contrasts. With two neighbouring units and exactly one assigned to treatment, the only own-treatment/neighbour-treatment combinations are $(1,0)$ and $(0,1)$. Neither $(0,0)$ nor $(1,1)$ can occur under this design. Randomization alone cannot identify every contrast among all four proposed exposure categories. An inverse-probability formula needs positive design probability for the exposures it compares and a defensible assertion that the chosen mapping captures the relevant interference.


<a id="section-876-assignment-does-not-repair-selective-outcome-observatio"></a>
### Assignment does not repair selective outcome observation {#section-878-assignment-does-not-repair-selective-outcome-observatio}

A small counterexample distinguishes treatment randomization from outcome availability. Take four units with $Y_i(1)=Y_i(0)$ equal to $(0,0,2,2)$, so every treatment effect is zero. Randomize two units to treatment as before. Suppose all control outcomes are observed, but in treatment only outcomes equal to two are recorded. The assignment remains randomized; the observation process is now treatment-dependent.

For treated set $\\{1,3\\}$, the true assigned-arm means are both one. The observed treated mean is two because unit one's zero is missing, while the observed control mean is one. The complete-case difference is therefore one even though the causal effect is zero. If the treated set is $\\{1,2\\}$, no treated outcome is observed at all and that observed-arm mean is undefined.

This failure is not remedied by asserting that the original assignment probabilities were known. Observation probabilities and their relation to potential outcomes now matter as well. The example has zero observation probability for low treatment outcomes, so a simple positive-weight reconstruction is unavailable without extra information or assumptions. The missing-data chapter develops those identification and sensitivity questions. The lesson here is narrower: the randomization proof applies to the declared estimator using the specified observations, and complete-case analysis can be a different estimator.

<a id="section-884-21-optional-practice-extensions"></a>
## 23. Elaborations of two original solution boundaries {#section-954-23-elaborations-of-two-original-solution-boundaries}

<a id="section-954-original-exercise-16-integer-balance"></a>
### Original Exercise 16: integer balance {#section-956-original-exercise-16-integer-balance}

The derivative in the original answer treats the allocation as continuous. For the actual integer allocation, $1/m+1/(N-m)=N/[m(N-m)]$, so its minimum occurs where the product $m(N-m)=N^2/4-(m-N/2)^2$ is largest. Use $m=N/2$ when $N$ is even and either nearest integer when $N$ is odd. Both arms must be nonempty. This completes the balance claim without pretending an odd number of units can be split into two equal integers.

<a id="section-958-original-exercise-19-weak-relevance-is-a-scoped-instabi"></a>
### Original Exercise 19: weak relevance is a scoped instability warning {#section-960-original-exercise-19-weak-relevance-is-a-scoped-instabi}

For a ratio $a/b$, the derivatives are $1/b$ and $-a/b^2$. Thus weak first-stage relevance makes the ratio sensitive to sampling perturbations when those perturbations do not shrink sufficiently quickly with $b$. The original answer describes this usual weak-identification danger. It is not a theorem that uncertainty diverges along every possible sequence: numerator and denominator errors might also shrink, or the experiment might be degenerate. At a zero population first stage the local-effect ratio is undefined; a finite-sample estimate with zero denominator is likewise undefined, not evidence of an arbitrarily large effect.

<a id="section-962-24-source-and-proof-boundary-for-the-randomisation-exte"></a>
## 24. Source and proof boundary for the randomisation extensions {#section-964-24-source-and-proof-boundary-for-the-randomisation-exte}

The finite tables, paired-design comparisons, cluster-weighting calculations, population complier identity, and reduction to a simple-random-sampling mean are derived here. The finite-population central limit theorem is imported with its explicit maximal-term condition from Xinran Li and Peng Ding, [General forms of finite population central limit theorems with applications to causal inference, primary author version 1610.04821v1](https://arxiv.org/html/1610.04821), Section 2.1, Theorem 1 (16 October 2016). It is not presented as a proof of finite-sample coverage. No simulation was executed, and none of the synthetic outcomes is an observed study or learner result.

<a id="section-966-sources"></a>

<a id="section-379-summary"></a>
## Summary {#section-381-summary}

<a id="section-729-15-summary-and-forward-route"></a>
Complete randomization makes difference in means design-unbiased and yields an exact variance containing an unobserved effect-heterogeneity term. Neyman uncertainty is conservative; Fisher randomization is exact for sharp nulls. Blocks, pairs, clusters, noncompliance, interference, attrition, and population transport each change the repetition law or estimand. Survey sampling next replaces treatment-assignment probabilities with unit-inclusion probabilities.


<a id="section-732-16-all-six-assignments-in-a-four-unit-experiment"></a>

<a id="section-972-summary"></a>
Design-based inference averages over a declared assignment mechanism with fixed potential outcomes. Unbiased contrasts, exact assignment variance and sharp-null tests require different information. Blocks, pairs and clusters change the allowed assignments and the weighting target; noncompliance and interference add identification questions. Randomization protects an internal contrast without supplying external validity or an exact normal approximation automatically.

The main route continues to [Survey Sampling and Design Weights](survey-sampling-and-design-weights.md).

## Exercises {#section-184-14-exercises-with-complete-solutions}

<a id="section-184-1-finite-population-ate"></a>
### 1. Finite-population ATE {#section-186-1-finite-population-ate}

**Exercise 15.1**

For potential effects $(1,2,-1,2)$, compute the ATE.

<details>
<summary>Hint 1</summary>

The finite-population ATE is the arithmetic mean of the unit effects.

</details>

<details>
<summary>Hint 2</summary>

Add the four effects and divide by four.

</details>

<details>
<summary>Solution</summary>

**Solution.** Their average is $(1+2-1+2)/4=1$.

</details>

<a id="section-211-2-assignment-probability"></a>
### 2. Assignment probability {#section-213-2-assignment-probability}

**Exercise 15.2**

Under complete randomization of $n_1$ among $N$, why is $P(Z_i=1)=n_1/N$?

<details>
<summary>Hint 1</summary>

Count assignments containing one specified unit.

</details>

<details>
<summary>Hint 2</summary>

Divide $\\binom{N-1}{n_1-1}$ by $\\binom N{n_1}$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Unit $i$ appears in $\\binom{N-1}{n_1-1}$ of $\\binom{N}{n_1}$ assignments. Their ratio is $n_1/N$.

</details>

<a id="section-238-3-unbiased-treated-mean"></a>
### 3. Unbiased treated mean {#section-240-3-unbiased-treated-mean}

**Exercise 15.3**

Prove the observed treated mean is unbiased for $\\bar{Y}(1)$.

<details>
<summary>Hint 1</summary>

Write the treated mean with assignment indicators and fixed potential outcomes.

</details>

<details>
<summary>Hint 2</summary>

Use $E Z_i=n_1/N$ and linearity; the outcomes do not need an iid model.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its expectation is $n_1^{-1}\\sum _iE[Z_i]Y_i(1)=n_1^{-1}(n_1/N)\\sum _iY_i(1)=\\bar{Y}(1)$.

</details>

<a id="section-265-4-why-no-iid-outcome-model-is-needed"></a>
### 4. Why no iid outcome model is needed {#section-267-4-why-no-iid-outcome-model-is-needed}

**Exercise 15.4**

What is random in the design-based proof?

<details>
<summary>Hint 1</summary>

Identify the probability space used in the expectation.

</details>

<details>
<summary>Hint 2</summary>

Only treatment assignment varies; all potential-outcome values remain fixed.

</details>

<details>
<summary>Solution</summary>

**Solution.** Only the assignment vector is random; all potential outcomes are fixed. The proof uses known assignment probabilities, not an iid superpopulation law.

</details>

<a id="section-292-5-negative-inclusion-covariance"></a>
### 5. Negative inclusion covariance {#section-294-5-negative-inclusion-covariance}

**Exercise 15.5**

Why are two treatment indicators negatively correlated under fixed group size?

<details>
<summary>Hint 1</summary>

Treatment slots are sampled without replacement.

</details>

<details>
<summary>Hint 2</summary>

Conditioning on one treated unit reduces the number of remaining slots relative to units.

</details>

<details>
<summary>Solution</summary>

**Solution.** Assigning one unit consumes one of a fixed number of treatment places, slightly lowering another unit's conditional assignment chance.

</details>

<a id="section-319-6-variance-calculation"></a>
### 6. Variance calculation {#section-321-6-variance-calculation}

**Exercise 15.6**

Let $S_1^{2}=20/3$, $S_0^{2}=5/3$, $S_\\tau ^{2}=5/3$, $N=4$, and $n_1=n_0=2$. Find $Var(\\hat{\\tau })$.

<details>
<summary>Hint 1</summary>

Insert the supplied finite-population variances into the exact design formula.

</details>

<details>
<summary>Hint 2</summary>

Keep the negative effect-heterogeneity term $S_\\tau^2/N$.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is

$(20/3)/2+(5/3)/2-(5/3)/4=15/4=3.75$.

</details>

<a id="section-348-7-conservative-variance-gap"></a>
### 7. Conservative variance gap {#section-350-7-conservative-variance-gap}

**Exercise 15.7**

For Exercise 6, find the expectation of the Neyman estimator and its gap above true variance.

<details>
<summary>Hint 1</summary>

The conservative estimator omits that unobservable negative term.

</details>

<details>
<summary>Hint 2</summary>

Its expectation exceeds the exact variance by $S_\\tau^2/N=5/12$.

</details>

<details>
<summary>Solution</summary>

**Solution.** Its expectation is $10/3+5/6=25/6$. The gap is $S_\\tau ^{2}/N=(5/3)/4=5/12$; indeed $25/6-15/4=5/12$.

</details>

<a id="section-375-8-constant-effects"></a>
### 8. Constant effects {#section-377-8-constant-effects}

**Exercise 15.8**

What happens to the unidentifiable variance term if every $\\tau _i=\\tau $?

<details>
<summary>Hint 1</summary>

A constant finite list has zero centred sum of squares.

</details>

<details>
<summary>Hint 2</summary>

Thus the treatment-effect variance and conservative gap both vanish.

</details>

<details>
<summary>Solution</summary>

**Solution.** A constant list has finite-population variance $S_\\tau ^{2}=0$, so the Neyman variance is unbiased for the exact assignment variance.

</details>

<a id="section-402-9-variance-versus-coverage"></a>
### 9. Variance versus coverage {#section-404-9-variance-versus-coverage}

**Exercise 15.9**

Why does conservative expected variance not prove exact 95% coverage?

<details>
<summary>Hint 1</summary>

A variance-estimator expectation is only a moment statement.

</details>

<details>
<summary>Hint 2</summary>

Exact coverage also needs the distribution of the statistic and its random denominator.

</details>

<details>
<summary>Solution</summary>

**Solution.** Coverage also depends on the shape of the studentised estimator and random denominator. An expectation inequality for a variance estimator is not a finite-sample quantile theorem.

</details>

<a id="section-429-10-sharp-null-imputation"></a>
### 10. Sharp-null imputation {#section-431-10-sharp-null-imputation}

**Exercise 15.10**

Why can every reassigned outcome be computed under $Y_i(1)=Y_i(0)$?

<details>
<summary>Hint 1</summary>

Under the sharp null a unit has the same outcome under either label.

</details>

<details>
<summary>Hint 2</summary>

The observed outcome therefore supplies both potential outcomes for every reassignment.

</details>

<details>
<summary>Solution</summary>

**Solution.** Each unit's two potential outcomes equal its observed value, so changing its hypothetical assignment does not leave an unknown response.

</details>

<a id="section-456-11-weak-null-limitation"></a>
### 11. Weak-null limitation {#section-458-11-weak-null-limitation}

**Exercise 15.11**

Why does $N^{-1}\\sum _i\\tau _i=0$ not impute missing outcomes?

<details>
<summary>Hint 1</summary>

Average-zero effects may cancel across different units.

</details>

<details>
<summary>Hint 2</summary>

That one aggregate equality does not reveal each unit's missing potential outcome.

</details>

<details>
<summary>Solution</summary>

**Solution.** Individual effects may differ and cancel. Knowing only their average gives no unit-specific missing potential outcome for reassignment.

</details>

<a id="section-483-12-block-weighting"></a>
### 12. Block weighting {#section-485-12-block-weighting}

**Exercise 15.12**

Two blocks have sizes 20 and 30 with estimated effects 1 and 3. Find the block-weighted ATE estimate.

<details>
<summary>Hint 1</summary>

Use block sizes as population weights.

</details>

<details>
<summary>Hint 2</summary>

Multiply one by $20/50$ and three by $30/50$.

</details>

<details>
<summary>Solution</summary>

**Solution.** $(20/50)(1)+(30/50)(3)=0.4+1.8=2.2$.

</details>

<a id="section-510-13-block-variance"></a>
### 13. Block variance {#section-512-13-block-variance}

**Exercise 15.13**

If independent block estimates have variances 4 and 1 with weights $0.4,0.6$, find total variance.

<details>
<summary>Hint 1</summary>

Independent block estimates contribute squared weights to variance.

</details>

<details>
<summary>Hint 2</summary>

Use $0.4^2(4)+0.6^2(1)$.

</details>

<details>
<summary>Solution</summary>

**Solution.** $0.4^{2}(4)+0.6^{2}(1)=0.64+0.36=1$.

</details>

<a id="section-537-14-matched-pair-sign"></a>
### 14. Matched-pair sign {#section-539-14-matched-pair-sign}

**Exercise 15.14**

Why must within-pair differences be signed according to which member was treated?

<details>
<summary>Hint 1</summary>

The estimator's sign is treated minus control.

</details>

<details>
<summary>Hint 2</summary>

Assignment determines which member receives each role inside a pair.

</details>

<details>
<summary>Solution</summary>

**Solution.** The estimator compares treated minus control. Assignment determines which observed outcome receives each role; an unsigned difference would estimate magnitude rather than a directional treatment effect.

</details>

<a id="section-564-15-cluster-pseudoreplication"></a>
### 15. Cluster pseudoreplication {#section-566-15-cluster-pseudoreplication}

**Exercise 15.15**

Why do 1,000 pupils in two randomized schools not provide 1,000 independent assignments?

<details>
<summary>Hint 1</summary>

Count independent assignment units rather than pupil rows.

</details>

<details>
<summary>Hint 2</summary>

The school label is shared by all its pupils.

</details>

<details>
<summary>Solution</summary>

**Solution.** There are only two assignment units. All pupils in a school share its label, so assignment variation occurs at the school level.

</details>

<a id="section-591-16-balanced-allocation"></a>
### 16. Balanced allocation {#section-593-16-balanced-allocation}

**Exercise 15.16**

For equal arm variances and fixed $N$, why does balance minimise $1/n_1+1/n_0$?

<details>
<summary>Hint 1</summary>

With fixed total size, minimizing reciprocal sum is maximizing $n_1n_0$.

</details>

<details>
<summary>Hint 2</summary>

Use $n_1(N-n_1)=N^2/4-(n_1-N/2)^2$ and respect integer allocations.

</details>

<details>
<summary>Solution</summary>

**Solution.** With $n_0=N-n_1$, the convex expression is symmetric and has derivative $-1/n_1^{2}+1/(N-n_1)^{2}$, zero at $n_1=N/2$, its minimum.

</details>

<a id="section-618-17-post-treatment-adjustment"></a>
### 17. Post-treatment adjustment {#section-620-17-post-treatment-adjustment}

**Exercise 15.17**

Why can controlling for a variable caused by treatment alter the target?

<details>
<summary>Hint 1</summary>

A post-treatment covariate can be part of the causal pathway or selection mechanism.

</details>

<details>
<summary>Hint 2</summary>

Conditioning on it can change the total-effect target or create collider association.

</details>

<details>
<summary>Solution</summary>

**Solution.** It conditions on part of the treatment pathway or on a post-assignment selection variable. The resulting contrast no longer represents the total assignment effect and can introduce collider bias.

</details>

<a id="section-645-18-intention-to-treat"></a>
### 18. Intention to treat {#section-647-18-intention-to-treat}

**Exercise 15.18**

What contrast remains protected by assignment when some assigned units do not comply?

<details>
<summary>Hint 1</summary>

Retain the original assigned groups rather than regrouping by receipt.

</details>

<details>
<summary>Hint 2</summary>

The intention-to-treat contrast preserves the design's randomized comparison.

</details>

<details>
<summary>Solution</summary>

**Solution.** The intention-to-treat contrast compares outcomes by assigned group, preserving the original randomization regardless of receipt.

</details>

<a id="section-672-19-weak-instrument"></a>
### 19. Weak instrument {#section-674-19-weak-instrument}

**Exercise 15.19**

Why is the assignment-to-outcome effect divided by a tiny assignment-to-receipt effect unstable?

<details>
<summary>Hint 1</summary>

Inspect the denominator's scale relative to its uncertainty.

</details>

<details>
<summary>Hint 2</summary>

A small first-stage contrast makes a ratio sensitive to small sampling changes.

</details>

<details>
<summary>Solution</summary>

**Solution.** The denominator is near zero, so small sampling changes create large ratio changes. Delta-method derivatives and uncertainty diverge as relevance weakens.

</details>

<a id="section-699-20-external-validity"></a>
### 20. External validity {#section-701-20-external-validity}

**Exercise 15.20**

Does randomizing volunteers identify the population-wide ATE without further assumptions?

<details>
<summary>Hint 1</summary>

Internal randomization concerns the experimental participants.

</details>

<details>
<summary>Hint 2</summary>

Population transport needs sampling or response-homogeneity assumptions outside that group.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. Randomization identifies a contrast for the experimental units. Extending it to nonvolunteers requires sampling or transport assumptions about treatment-effect differences.

</details>


<a id="section-727-15-summary-and-forward-route"></a>

<a id="section-886-21-optional-practice-extensions"></a>
### 21. SI-18-E21. A changed pairing can cost precision {#section-890-si-18-e21-a-changed-pairing-can-cost-precision}

**Exercise 15.21**

For the true four-unit potential-outcome table in Section 16, instead pair units as $\\{1,3\\}$ and $\\{2,4\\}$, with one treated unit per pair. List the four allowed treated sets, derive the mean and variance of the difference-in-means estimator, and compare with complete randomization. Explain why the expectation and variance denominators differ from estimating a variance from four sampled simulations.


<details>
<summary>Hint 1</summary>

Enumerate one treated member from each changed pair.

</details>

<details>
<summary>Hint 2</summary>

Compute the four estimates and average their squared deviations with probability denominator four.

</details>


<a id="section-911-si-18-e22-weight-a-changed-cluster-population"></a>
### 22. SI-18-E22. Weight a changed cluster population {#section-913-si-18-e22-weight-a-changed-cluster-population}

**Exercise 15.22**

There are two clusters of sizes two and four. All control outcomes are zero. Every individual in the first cluster has treatment outcome one, and every individual in the second has treatment outcome three. Exactly one cluster is treated, each with probability $1/2$. Find the average cluster effect, individual ATE, and the two possible values and expectation of the inverse-probability total estimator in Section 18.


<details>
<summary>Hint 1</summary>

Compare equal cluster weights with individual-size weights.

</details>

<details>
<summary>Hint 2</summary>

The inverse-probability total estimator uses cluster totals and divides by six individuals.

</details>


<a id="section-934-22-solutions-to-the-optional-practice-extensions"></a>

<a id="section-1009-solutions"></a>
## Solutions {#section-1011-solutions}

<a id="section-936-22-solutions-to-the-optional-practice-extensions"></a>
<details>
<summary>Solution</summary>

<a id="section-939-si-18-e21-a-changed-pairing-can-cost-precision-solution"></a>
### SI-18-E21. A changed pairing can cost precision — solution {#section-941-si-18-e21-a-changed-pairing-can-cost-precision-solution}

The allowed treated sets are $\\{1,2\\},\\{1,4\\},\\{2,3\\},\\{3,4\\}$. The estimates are $-1/2,5/2,5/2,11/2$, whose mean is $5/2$. Their squared deviations are $9,0,0,9$, so assignment variance is $18/4=9/2$, larger than the complete-randomization variance $15/4$. The calculation averages over the entire known four-point law. A denominator of three would belong to a sample-variance estimate from four independent draws, not this exact distribution calculation. The changed pairing preserves unbiasedness but loses precision for this particular fixed table.

</details>
<details>
<summary>Solution</summary>

<a id="section-947-si-18-e22-weight-a-changed-cluster-population-solution"></a>
### SI-18-E22. Weight a changed cluster population — solution {#section-949-si-18-e22-weight-a-changed-cluster-population-solution}

The average cluster effect is $(1+3)/2=2$. The individual ATE is $(2\\cdot1+4\\cdot3)/6=7/3$. The inverse-probability estimator is twice the observed treated-cluster total divided by six, because every control total is zero. Its values are $2/3$ and four, each with probability $1/2$, averaging to $7/3$. Unequal cluster sizes make equal cluster weights and equal individual weights different targets.

</details>
<a id="section-952-23-elaborations-of-two-original-solution-boundaries"></a>

## Sources {#section-968-sources}

All earlier references, exact theorem locators, probability-model qualifications and source notes in this chapter remain part of the exposition. The book [reference guide](back-matter/references-and-attribution-guide.md) records the primary source map.

<a id="section-970-summary"></a>
`;export{e as default};