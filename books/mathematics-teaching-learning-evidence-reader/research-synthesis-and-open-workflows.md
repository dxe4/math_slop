
# Research synthesis and open, ethical workflows

Chapter 3 examined how individual study designs warrant their claims. This chapter turns to synthesis: how to aggregate, appraise, and report findings across studies without manufacturing certainty. It also covers open workflows—preregistration, versioned analysis, data sharing, and reproducible reporting—and the ethical boundaries that govern them. Synthesis is itself a research act with its own design, assumptions, and limitations.

## 1. Synthesis is a study with a protocol

A systematic review is not a literature search with a summary paragraph. It is a study whose data are prior studies, with eligibility criteria, search strategies, screening procedures, appraisal methods, and synthesis rules defined before execution.

**Definition 6.1.** A *systematic review* uses transparent, reproducible methods to identify, appraise, and synthesize evidence on a defined question. A *meta-analysis* is a statistical synthesis of effect estimates from multiple studies, justified only when constructs, measures, and contrasts are sufficiently commensurable.

The protocol should specify:

- population, intervention or phenomenon, comparison, outcome, and design;
- databases, search strings, date ranges, and languages;
- dual screening or checking processes and exclusion reasons;
- risk-of-bias or quality appraisal tool;
- synthesis method: narrative, quantitative, or mixed;
- planned sensitivity analyses and heterogeneity exploration.

## 2. Commensurability before pooling

Two studies may both report "mathematics achievement" while testing different content, using different measures, and comparing different interventions. Standardization does not make them conceptually identical.

### Worked appraisal

Study A: a randomized trial of a fractions unit versus business-as-usual in grade 4, measured by a researcher-designed magnitude comparison test.
Study B: a quasi-experiment of a whole-number fluency program versus supplemental practice in grade 2, measured by a standardized computation test.

These studies differ in content, grade, design, comparison, measure, and outcome type. Pooling them into one "mathematics achievement" meta-analytic estimate would obscure more than it reveals. A structured narrative synthesis that preserves these distinctions is more appropriate.

**Teaching conjecture:** requiring a commensurability argument before any quantitative pooling may reduce the number of meta-analyses that combine incommensurable outcomes. The conjecture needs empirical testing.

## 3. Fixed-effect inverse-variance pooling: a worked computation

The fixed-effect model assumes one true effect underlies every study and that observed differences arise only from sampling error within studies. The inverse-variance method weights each study by the reciprocal of its variance, giving more influence to more precise estimates.

**Definition 6.2.** Let $y_i$ be the effect estimate from study $i$ and $v_i = \mathrm{SE}(y_i)^2$ its within-study variance. The fixed-effect weight is $w_i = 1 / v_i$. The pooled estimate is

\[
\bar{y} = \frac{\sum_i w_i y_i}{\sum_i w_i}.
\]

**Mathematical result.** Under the fixed-effect assumptions, the variance of $\bar{y}$ is $1 / \sum_i w_i$, so an approximate 95% interval is $\bar{y} \pm 1.96 / \sqrt{\sum_i w_i}$.

### Worked example: three toy studies

Consider three studies of a fractions intervention, each reporting a standardized mean difference (SMD) and standard error:

| Study | Estimate $y_i$ | Standard error | Variance $v_i$ | Weight $w_i = 1/v_i$ |
| --- | --- | --- | --- | --- |
| Study 1 | $0.20$ | $0.15$ | $0.0225$ | $44.44$ |
| Study 2 | $0.80$ | $0.20$ | $0.0400$ | $25.00$ |
| Study 3 | $1.40$ | $0.25$ | $0.0625$ | $16.00$ |

The table reads as follows. Each row is one study. The columns are, from left to right: the study label; the effect estimate $y_i$ in standardized mean difference units; the standard error of that estimate; the variance $v_i$, which is the square of the standard error; and the inverse-variance weight $w_i$, which is the reciprocal of the variance. Study 1 is the most precise and receives the largest weight.

Summing the weights gives $W = 44.44 + 25.00 + 16.00 = 85.44$. The weighted sum of effects is $44.44(0.20) + 25.00(0.80) + 16.00(1.40) = 8.89 + 20.00 + 22.40 = 51.29$. The pooled estimate is therefore

\[
\bar{y} = \frac{51.29}{85.44} \approx 0.60.
\]

The standard error of the pooled estimate is $\mathrm{SE}(\bar{y}) = \sqrt{1 / 85.44} \approx 0.108$, and the approximate 95% interval is

\[
0.60 \pm 1.96(0.108) = [0.39, 0.81].
\]

**Interpretation, bounded.** Under the fixed-effect assumptions, the data are compatible with a true standardized mean difference near $0.60$, with a range from $0.39$ to $0.81$. The interval does not establish that the effect is educationally important, that it replicates in other populations, or that the fixed-effect assumption is correct. If the three studies differ in duration, measure, or population, the assumption of a single true effect is questionable and the interval may be misleadingly narrow.

## 4. Heterogeneity: Cochran's Q, $\tau^{2}$, and $I^{2}$

Before accepting any pooled estimate, ask whether the studies share a single true effect. Heterogeneity statistics quantify the observed dispersion relative to what sampling error alone would produce.

### Cochran's Q

**Definition 6.3.** Cochran's $Q$ measures the weighted sum of squared deviations of each study estimate from the fixed-effect pooled estimate:

\[
Q = \sum_i w_i (y_i - \bar{y})^2.
\]

**Mathematical result.** Under the null hypothesis that all studies share one true effect and the within-study variances are correct, $Q$ follows approximately a chi-squared distribution with $k - 1$ degrees of freedom, where $k$ is the number of studies.

For the toy data:

\[
Q = 44.44(0.20 - 0.60)^2 + 25.00(0.80 - 0.60)^2 + 16.00(1.40 - 0.60)^2
\]

\[
Q = 44.44(0.16) + 25.00(0.04) + 16.00(0.64) = 7.11 + 1.00 + 10.24 = 18.35.
\]

With $k - 1 = 2$ degrees of freedom, the probability of observing $Q \geq 18.35$ under the null is small. The fixed-effect assumption is therefore implausible for these three estimates.

### $I^{2}$: the proportion of dispersion due to heterogeneity

**Definition 6.4.** $I^{2}$ estimates the proportion of total variation across studies that is due to heterogeneity rather than chance:

\[
I^{2} = \max\left(0, \frac{Q - (k - 1)}{Q} \times 100\right).
\]

For the toy data:

\[
I^{2} = \frac{18.35 - 2}{18.35} \times 100 \approx 89.1\%.
\]

**Interpretation, bounded.** About 89% of the observed variance in effect estimates is estimated to come from between-study differences rather than within-study sampling error. This is a descriptive statistic under the model assumptions; it does not prove what causes the heterogeneity or justify any particular remedy.

### DerSimonian–Laird $\tau^{2}$

**Definition 6.5.** The between-study variance $\tau^{2}$ is estimated by the DerSimonian–Laird method as

\[
\tau^{2} = \max\left(0, \frac{Q - (k - 1)}{U_1 - U_2 / U_1}\right),
\]

where $U_1 = \sum_i w_i$ and $U_2 = \sum_i w_i^{2}$.

For the toy data, $U_1 = 85.44$ and $U_2 = 44.44^{2} + 25.00^{2} + 16.00^{2} = 1975.31 + 625.00 + 256.00 = 2856.31$. The denominator is $85.44 - 2856.31 / 85.44 = 85.44 - 33.43 = 52.01$. Therefore

\[
\tau^{2} = \frac{18.35 - 2}{52.01} \approx 0.314.
\]

**Honest limits.** A large $\tau^{2}$ relative to the within-study variances means the true effects differ substantially. No pooling method removes this variation; it only redistributes the weights. A meta-regression or subgroup analysis may explain some heterogeneity if the moderators are prespecified and the number of studies is adequate, but with only three studies such exploration is speculative.

## 5. Random-effects pooling and its assumptions

The random-effects model treats the true effect of each study as drawn from a distribution with mean $\mu$ and variance $\tau^{2}$. The pooled estimate is a weighted average using adjusted weights $w_i^{*} = 1 / (v_i + \tau^{2})$.

**Mathematical assumption.** The random-effects model assumes that the $k$ observed studies are a random sample from a superpopulation of studies, that the true effects are independently and identically distributed with mean $\mu$ and variance $\tau^{2}$, and that the within-study estimates are conditionally normal with known variances. These assumptions are strong: the studies at hand are rarely a random sample, and the distribution of true effects need not be normal or independent.

### Worked random-effects estimate for the toy data

Using $\tau^{2} \approx 0.314$:

| Study | $v_i$ | $v_i + \tau^{2}$ | $w_i^{*} = 1/(v_i + \tau^{2})$ |
| --- | --- | --- | --- |
| Study 1 | $0.0225$ | $0.3369$ | $2.969$ |
| Study 2 | $0.0400$ | $0.3544$ | $2.822$ |
| Study 3 | $0.0625$ | $0.3769$ | $2.654$ |

The adjusted weights are much closer to each other than the fixed-effect weights because the between-study variance dominates the within-study differences. The sum is $W^{*} = 2.969 + 2.822 + 2.654 = 8.445$. The weighted sum of effects is $2.969(0.20) + 2.822(0.80) + 2.654(1.40) = 0.594 + 2.258 + 3.716 = 6.568$. The random-effects pooled estimate is

\[
\bar{y}^{*} = \frac{6.568}{8.445} \approx 0.78.
\]

The standard error is $\mathrm{SE}(\bar{y}^{*}) = \sqrt{1 / 8.445} \approx 0.344$, giving an approximate 95% interval of

\[
0.78 \pm 1.96(0.344) = [0.10, 1.45].
\]

### Contrasting fixed-effect and random-effects results

| Quantity | Fixed-effect | Random-effects |
| --- | --- | --- |
| Pooled estimate | $0.60$ | $0.78$ |
| Standard error | $0.108$ | $0.344$ |
| 95% interval | $[0.39, 0.81]$ | $[0.10, 1.45]$ |
| Study 1 weight | $44.44$ | $2.97$ |
| Study 3 weight | $16.00$ | $2.65$ |

The random-effects estimate is shifted toward the less precise studies and is substantially more uncertain. The interval $[0.10,1.45]$ excludes zero, so this toy plug-in normal interval supports a positive average effect under the stated model. With only three studies and an estimated $\tau^2$, however, this normal interval does not account adequately for uncertainty in the heterogeneity estimate and should not be trusted for nominal 95% coverage. Neither model explains *why* the effects differ; that requires examining study features, not choosing a different weighting scheme.

## 6. Funnel plots and Egger-style reasoning

A funnel plot displays each study's effect estimate against a measure of its precision, typically standard error or inverse standard error. In the absence of bias and heterogeneity, the plot should resemble a symmetric inverted funnel: small studies scatter widely, and large studies cluster near the pooled estimate.

### What asymmetry can and cannot show

Asymmetry in a funnel plot can arise from multiple sources:

- **Publication bias:** studies with null or negative results remain unpublished, especially if they are small.
- **Genuine heterogeneity:** small studies may test more intensive interventions, different populations, or shorter durations.
- **Methodological quality:** small studies may have weaker designs, producing inflated or more variable estimates.
- **Selective outcome reporting:** authors may report only the most favorable among several outcomes or time points.
- **Chance:** with few studies, random scatter can look like asymmetry.

**Research finding, bounded.** Funnel-plot asymmetry tests, including the regression-based approach described by Egger and colleagues, have modest power when the number of studies is small and can be confounded by the sources above. They signal a problem; they do not diagnose its cause.

### Worked small example

Consider eight studies with the following estimates and standard errors:

| Study | Estimate | Standard error |
| --- | --- | --- |
| 1 | $0.05$ | $0.50$ |
| 2 | $0.15$ | $0.45$ |
| 3 | $0.25$ | $0.40$ |
| 4 | $0.35$ | $0.35$ |
| 5 | $0.45$ | $0.30$ |
| 6 | $0.55$ | $0.25$ |
| 7 | $0.65$ | $0.20$ |
| 8 | $0.75$ | $0.15$ |

Adopting the conventional vertical axis with standard error increasing downward, these constructed points satisfy $y=1.05-2\,\mathrm{SE}$ exactly: smaller, less precise studies lie progressively to the left of the fitted large-study effect. The record therefore shows a negative association between estimated effect and standard error, not a causal mechanism. A deficit of small high-positive estimates on the right is one selection pattern compatible with it; genuine effect differences, study design, comparison conditions, and deliberate construction are also compatible. The plot alone cannot establish that any studies are missing or distinguish these explanations.

An Egger-style regression of the standardized effect $y_i / \mathrm{SE}(y_i)$ on precision $1 / \mathrm{SE}(y_i)$ yields an intercept of approximately $-2.0$ and a slope of approximately $1.05$. A large intercept away from zero suggests asymmetry, but the regression assumes linearity and independence that may not hold. The result is a signal for further investigation, not proof of publication bias.

## 7. Study dependence: multiple reports, multiple outcomes, and robust handling

A single research project can produce multiple reports, and a single report can measure multiple outcomes at multiple time points. Treating these as independent studies in a meta-analysis overstates precision and understates uncertainty.

### Multiple reports of one study

When a research team publishes a conference abstract, a working paper, and a journal article from the same trial, the underlying participants, intervention, and comparison are identical. Including all three as separate studies creates artificial replication. The preferred handling is to extract data from the most complete report and note the others as linked documents.

### Multiple outcomes and time points

A trial may report immediate post-test scores, delayed post-test scores, and transfer-test scores. These are correlated because they come from the same learners. Computing three separate effect sizes and pooling them as independent ignores the covariance among outcomes. Options include:

- selecting one primary outcome a priori;
- computing a summary effect across correlated outcomes using their covariance;
- using a multivariate meta-analysis that models the correlation structure;
- robust variance estimation, which adjusts standard errors to account for dependent effect sizes without requiring the full covariance matrix.

**Failure mode to audit:** a synthesis may omit dependence among reports or outcomes. Robust variance estimation can be a practical correction when the number of studies is adequate and the correlation structure is poorly reported, but its small-sample behavior and assumptions must be assessed.

## 8. The PRISMA flow as an audit artifact

The Preferred Reporting Items for Systematic Reviews and Meta-Analyses (PRISMA) 2020 statement specifies a flow diagram that records how studies move from initial identification to final inclusion. The flow diagram is an audit artifact: it makes the selection process transparent and verifiable.

### Identification, screening, eligibility, and inclusion

The flow has four stages:

1. **Identification:** records retrieved from databases and registers, plus records identified from other sources.
2. **Screening:** records screened after deduplication, with reasons for exclusion at title and abstract.
3. **Eligibility:** full-text articles assessed, with reasons for exclusion.
4. **Included:** studies that enter the qualitative synthesis and, separately, the quantitative synthesis.

### Worked toy flow

The following text table presents a PRISMA-style flow for a toy synthesis of fraction interventions. Each row states a stage and the count at that stage; the prose alternative describes the same information in continuous text.

| Stage | Count | Detail |
| --- | --- | --- |
| Records identified from databases | 1,247 | ERIC, PsycINFO, Web of Science, 2010–2025 |
| Records after deduplication | 892 | 355 duplicates removed |
| Records screened (title/abstract) | 892 | Two reviewers, blinded |
| Excluded at title/abstract | 756 | Wrong population, design, or outcome |
| Full-text articles assessed | 136 | Retrieved and checked against protocol |
| Excluded at full text | 111 | Ineligible design ($n=42$), ineligible outcome ($n=38$), no extractable data ($n=31$) |
| Studies in qualitative synthesis | 25 | All eligible studies described |
| Studies in quantitative synthesis | 22 | Three studies lacked variance information |

**Prose alternative.** The review team searched three databases and identified 1,247 records. After removing 355 duplicates, 892 unique records remained. Two reviewers independently screened titles and abstracts, excluding 756 records that did not meet population, design, or outcome criteria. The team retrieved 136 full-text articles and assessed them against the prespecified protocol. One hundred eleven articles were excluded: 42 for ineligible design, 38 for ineligible outcome, and 31 because no effect size or variance could be extracted. Twenty-five studies entered the qualitative synthesis, and 22 of those contributed data to the quantitative synthesis. The three studies excluded from meta-analysis lacked reported standard errors or confidence intervals and the authors did not respond to data requests.

## 9. Preregistration and registered reports

Preregistration is the practice of documenting hypotheses, outcomes, eligibility criteria, and analysis plans in a time-stamped, read-only archive before conducting the research. A registered report extends this by subjecting the protocol to peer review before data collection; the journal commits to publishing the results regardless of outcome, provided the protocol is followed.

### What preregistration timestamps

Preregistration records the state of the research plan at a specific moment. It timestamps:

- the primary research question and hypotheses;
- the outcomes to be measured and their order of priority;
- inclusion and exclusion criteria;
- the analysis plan, including statistical models and covariates;
- rules for handling missing data, outliers, and protocol deviations.

### What preregistration cannot prevent

Preregistration does not prevent exploratory analysis. It distinguishes confirmatory from exploratory claims. A researcher may deviate from the preregistered plan, but the deviation must be reported and justified. Preregistration also does not guarantee quality: a poorly designed protocol, once preregistered, remains poorly designed. It does not eliminate publication bias at the journal level, though registered reports mitigate it by precommitting to publication.

**Design rationale, bounded.** Because publication is accepted in principle before results are known, registered reports are intended to reduce incentives for selective nonpublication and outcome switching. Whether they change testing practices or result distributions is an empirical question that requires a named comparative study; no prevalence claim is made here.

## 10. Replication: direct, conceptual, and the place of failed replications

Replication is the attempt to reproduce a prior study's methods and obtain a comparable result. It is central to cumulative evidence, but not all replications are alike.

### Direct versus conceptual replication

**Definition 6.6.** A *direct replication* repeats the original methods as closely as possible: the same population, materials, measures, and analysis. A *conceptual replication* tests the same theoretical claim with different methods, measures, or populations. Direct replication probes the reliability of a specific finding; conceptual replication probes the generality of the underlying claim.

Both are necessary. A direct replication that fails raises questions about the original study's methods, analysis, or reporting. A conceptual replication that fails raises questions about the scope of the theory. Neither failure automatically invalidates the original; it adds information that synthesis must weigh.

### How synthesis should treat failed replications

A failed direct replication should not be dismissed as "noise" without examining its design, power, and implementation fidelity. If the replication was well-powered and closely matched, it reduces confidence in the original finding. If the replication altered a key feature, the failure may be informative about boundary conditions rather than about the original result.

In meta-analysis, failed replications are included as additional studies with their own estimates and variances. They contribute to the pooled estimate and to heterogeneity statistics. Excluding them because they are null or negative is a form of publication bias.

**Teaching conjecture:** education syntheses may benefit from explicitly tagging each study as direct replication, conceptual replication, or original investigation, so that readers can see whether a pooled estimate rests on repeated methods or on varied contexts.

## 11. Open workflows: version control and reproducible reporting

Preregistration timestamps hypotheses, outcomes, exclusions, and analysis plans before data collection or synthesis. It does not prevent exploratory work; it distinguishes confirmatory from exploratory claims.

**Definition 6.7.** *Confirmatory* analysis tests prespecified hypotheses with prespecified methods. *Exploratory* analysis searches for patterns without prior prediction. Both are legitimate; conflating them weakens warrant.

Version control for data, code, and documents preserves an audit trail. A reproducible synthesis includes:

- search strings and database results;
- screening decisions with reasons;
- extracted data with definitions;
- analysis code with software versions;
- output files linked to code states;
- deviations from protocol with explanations.

A reproducible report links every number, figure, and claim to the code and data that produced it. Benefits include error detection, updating, and external verification.

### Practices

- Write analysis code in scripts, not interactive sessions.
- Use relative paths and document software environment.
- Generate tables and figures from code, not by hand.
- Report software versions, random seeds, and computational environment.
- Archive code and data with a persistent identifier.
- Distinguish computed results from interpreted claims in the text.

## 12. Data sharing and ethical boundaries

Open data improves transparency and error detection. It is bounded by:

- participant consent and assent;
- privacy, re-identification risk, and disclosure harm;
- institutional policies and legal requirements;
- intellectual property and third-party restrictions;
- community norms and potential misuse.

**Teaching conjecture:** creating de-identified datasets with rich documentation may increase the value of shared data while reducing re-identification risk. The balance depends on the population, variables, and context.

### Worked decision framework

1. Can the data be shared as-is without risk? If yes, share with documentation.
2. If direct identifiers are present, remove them and assess re-identification risk from combinations of remaining variables.
3. If risk remains, apply further de-identification, access controls, or data-use agreements.
4. If sharing is not possible, share metadata, code, and synthetic data where appropriate.
5. Document every decision and its rationale.

## 13. Ethical synthesis

Synthesizing research about learners carries ethical obligations:

- do not exaggerate certainty to justify policy;
- report null, negative, and contradictory findings;
- avoid language that stigmatizes populations;
- respect the contextual boundaries of primary studies;
- acknowledge whose questions are answered and whose are omitted;
- disclose conflicts of interest and funding sources.

## 14. The synthesis audit

Before beginning any synthesis, complete this record:

1. **Question:** exact population, phenomenon, comparison, outcome, and design.
2. **Protocol:** prespecified methods, deviations allowed, and how they will be reported.
3. **Search:** databases, strings, dates, languages, and grey-literature plans.
4. **Screening:** inclusion and exclusion criteria, dual-checking process.
5. **Appraisal:** quality or risk-of-bias tool and how it feeds into synthesis.
6. **Synthesis:** narrative, quantitative, or mixed; model assumptions; heterogeneity plan.
7. **Bias:** publication bias, selective reporting, and missing evidence.
8. **Ethics:** consent, privacy, sharing plan, and conflicts.
9. **Reproducibility:** code, data, documentation, and persistent archive.
10. **Claims:** bounded statements aligned with the synthesis method and evidence.

## Exercises

1. Explain why two studies both reporting "mathematics achievement" may be incommensurable for meta-analysis.
2. A meta-analysis pools five studies with widely varying effect sizes and reports a precise pooled estimate. What is the danger?
3. Draft a protocol inclusion criterion for a systematic review on fraction interventions in grades 3–5.
4. Explain the difference between confirmatory and exploratory analysis in the context of a synthesis.
5. A funnel plot shows asymmetry. List three possible explanations other than publication bias.
6. Write a bounded interpretation of a random-effects pooled standardized mean difference of $0.4$ with a 95% interval of $[0.1, 0.7]$.
7. Why is vote counting by statistical significance discouraged in narrative synthesis?
8. A researcher wants to share interview transcripts. What three ethical checks precede sharing?
9. Classify: "A random-effects model assumes effect sizes vary across studies"; "a named meta-analysis estimated a pooled effect of $0.3$ for a specific intervention"; "sharing de-identified data may improve transparency here."
10. Design a reproducibility checklist for a synthesis report with three quantitative studies.
11. Compute the fixed-effect inverse-variance pooled estimate, standard error, and approximate 95% interval for two studies with estimates $0.5$ and $1.0$ and standard errors $0.2$ and $0.3$.
12. For the three toy studies in Section 3, verify that the sum of fixed-effect weights is $85.44$ and the weighted sum of effects is $51.29$.
13. Explain why $I^{2} = 89.1\%$ for the toy data does not tell us *why* the studies differ.
14. Compare the fixed-effect and random-effects pooled estimates for the toy data. Which is more conservative in the sense of producing a wider interval, and why?
15. A researcher includes three reports from the same trial in a meta-analysis as if they were independent studies. What happens to the precision of the pooled estimate?
16. Draft a PRISMA-style flow description for a review that identified 500 records, removed 150 duplicates, excluded 280 at title/abstract, excluded 45 at full text, and included 25 studies.
17. List two things preregistration timestamps and two things it cannot prevent.
18. A direct replication obtains a null result where the original study found a positive effect. List three reasons the null result might occur even if the original finding is real.
19. Explain the difference between a direct replication and a conceptual replication, and state which one tests reliability and which tests generality.
20. In the Egger-style regression example of Section 6, the intercept is approximately $-2.0$. Why does a large intercept suggest funnel-plot asymmetry?
21. A meta-analysis of 20 studies reports $\tau^{2} = 0.05$ and all within-study variances are near $0.10$. Interpret what this means for the relative size of between-study and within-study variation.
22. A systematic review plans to pool effects from immediate post-test, delayed post-test, and transfer test. What is the dependence problem, and name one way to handle it.
23. Compute Cochran's $Q$ for two studies with estimates $0.4$ and $0.6$, standard errors $0.15$ and $0.15$, and fixed-effect pooled estimate $0.50$.
24. A registered report is accepted before data collection. How does this change the incentive structure for null results compared with a standard journal submission?
25. Write a bounded interpretation of the random-effects pooled estimate $0.78$ with 95% interval $[0.10, 1.45]$ from the toy data in Section 5.

## Solutions

1. They may test different content, use different measures, compare different interventions, and involve different populations. Standardization divides by a standard deviation that differs across studies and does not make the constructs identical.
2. The pooled estimate may be misleadingly precise if heterogeneity is ignored. The true effects may differ systematically, and the average may have no meaningful educational interpretation.
3. Example: "Eligible studies are randomized or quasi-experimental evaluations of a fractions intervention in grades 3–5 that measure fraction magnitude understanding with a validated instrument, published in English or Spanish between 2010 and 2025."
4. Confirmatory analysis tests hypotheses and methods specified before seeing the data. Exploratory analysis searches for patterns without prior predictions. In synthesis, confirmatory claims need prespecified eligibility, outcomes, and models; exploratory findings generate hypotheses for future testing.
5. Genuine heterogeneity in effects; small studies used different methods or populations; poor methodological quality in small studies; selective outcome reporting; or chance.
6. Under the random-effects model assumptions, the data are compatible with a range of positive average effects across the studied populations, measures, and designs. The interval does not establish that the effect is present in every setting or that it is educationally important.
7. Vote counting discards effect sizes and precision. A statistically significant result in a small study may reflect a large effect or a noisy measure; a non-significant result in a large study may reflect a precisely estimated small effect. Counting ignores this information.
8. Consent for sharing and in what form; re-identification risk from content and combinations of details; institutional approval and legal requirements; potential harm to participants or communities from disclosure.
9. Mathematical assumption of a statistical model; external research finding bounded to its sample and methods; local teaching conjecture.
10. Checklist: (1) search strings and database results are archived with dates; (2) screening decisions are recorded with exclusion reasons; (3) extracted data and definitions are in a shared file; (4) analysis code is versioned and generates all tables and figures; (5) software versions and random seeds are reported; (6) deviations from protocol are documented; (7) data sharing plan and ethical approvals are described; (8) bounded claims are aligned with synthesis method.
11. The variances are $v_1 = 0.04$ and $v_2 = 0.09$, so $w_1 = 25$ and $w_2 = 11.11$. The sum of weights is $36.11$. The weighted sum is $25(0.5) + 11.11(1.0) = 12.5 + 11.11 = 23.61$. The pooled estimate is $23.61 / 36.11 \approx 0.65$. The standard error is $\sqrt{1 / 36.11} \approx 0.166$. The 95% interval is $0.65 \pm 1.96(0.166) = [0.32, 0.98]$.
12. The weights are $w_1 = 1 / 0.0225 = 44.44$, $w_2 = 1 / 0.04 = 25.00$, and $w_3 = 1 / 0.0625 = 16.00$. Their sum is $44.44 + 25.00 + 16.00 = 85.44$. The weighted sum is $44.44(0.20) + 25.00(0.80) + 16.00(1.40) = 8.89 + 20.00 + 22.40 = 51.29$.
13. $I^{2}$ is a descriptive proportion of total variance attributed to between-study heterogeneity under the model assumptions. It does not identify the source of the variation, which could be differences in population, measure, intervention intensity, design quality, or any combination. Further analysis such as subgroup comparison or meta-regression is needed, but with only three studies such exploration is underpowered and speculative.
14. The random-effects estimate produces a wider interval: $[0.10, 1.45]$ versus $[0.39, 0.81]$ for the fixed-effect estimate. This is because the random-effects model incorporates the estimated between-study variance $\tau^{2} \approx 0.314$ into each study's weight, reducing the effective information and widening uncertainty. The random-effects model is more conservative when heterogeneity is large.
15. The precision of the pooled estimate is overstated because the three reports share the same underlying data and participants. The effective sample size is not tripled. The standard error of the pooled estimate will be too small, and the confidence interval will be too narrow, leading to inflated confidence.
16. The review team identified 500 records. After removing 150 duplicates, 350 unique records remained. These were screened at title and abstract, and 280 were excluded. Seventy full-text articles were retrieved and assessed against the protocol; 45 were excluded at full text. Twenty-five studies were included in the qualitative synthesis.
17. Preregistration timestamps the hypotheses, outcomes, eligibility criteria, and analysis plan before data collection. It cannot prevent exploratory analysis, guarantee a well-designed protocol, or eliminate publication bias at the journal level.
18. The replication may have had lower statistical power; the population or setting may differ in a way that moderates the effect; the implementation fidelity may have been lower; the measure may have been less sensitive; or the original result may have been a false positive.
19. A direct replication repeats the original methods as closely as possible and tests the reliability of the specific finding. A conceptual replication tests the same theoretical claim with different methods, measures, or populations and tests the generality of the underlying claim.
20. Write $z_i=y_i/\mathrm{SE}_i$ and $p_i=1/\mathrm{SE}_i$. In the regression $z_i=a+bp_i$, the intercept $a$ is the fitted value at **zero precision**, and multiplying through gives $y_i=b+a\,\mathrm{SE}_i$. Thus $a\ne0$ encodes a systematic relation between estimated effect and standard error. That relation signals asymmetry but does not identify publication bias or any other mechanism.
21. The within-study variances are near $0.10$, so the within-study standard deviations are near $0.32$. The between-study standard deviation is $\sqrt{0.05} \approx 0.22$. The between-study variation is therefore about two-thirds the size of the typical within-study variation. This is moderate heterogeneity: the true effects differ, but not vastly more than the sampling error within studies.
22. The three outcomes come from the same learners and are correlated. Pooling them as independent overstates precision. One way to handle this is robust variance estimation, which adjusts standard errors without requiring the full covariance matrix. Other options include selecting one primary outcome, computing a summary effect across correlated outcomes, or using a multivariate meta-analysis.
23. The fixed-effect weights are $w_1 = 1 / 0.0225 = 44.44$ and $w_2 = 44.44$. Then $Q = 44.44(0.4 - 0.5)^2 + 44.44(0.6 - 0.5)^2 = 44.44(0.01) + 44.44(0.01) = 0.4444 + 0.4444 = 0.89$.
24. In a standard submission, the researcher may be tempted to file-drawer a null result or engage in selective reporting to obtain significance. In a registered report, acceptance in principle before results are known, conditional on following the approved protocol, is intended to reduce the publication-based incentive to suppress null findings. For a fixed mix of completed studies containing both null and non-null results, if standard submissions publish a smaller fraction of null than of non-null results, making publication outcome-independent at a positive common rate would increase the published null proportion. This is a conditional design prediction, not an observed prevalence result or an established causal effect here; the proportion need not increase when those assumptions fail.
25. Under the random-effects model assumptions, the estimate is an average standardized mean difference near $0.78$. The toy plug-in normal interval $[0.10,1.45]$ excludes zero, though its lower endpoint is close to zero on this scale. With only three studies and estimated heterogeneity, the interval's nominal coverage is unreliable. The estimate does not apply to every setting, measure, or population, and the large $\tau^{2}$ indicates substantial modeled variation across studies.

## Project: Design a miniature systematic review protocol

Design a protocol for a systematic review that asks: "What is the effect of worked-example instruction versus problem-solving practice on algebra equation-solving accuracy in secondary students?" Your protocol must include:

1. A PICO-style question with exact population, intervention, comparison, outcome, and design.
2. Three inclusion criteria and three exclusion criteria, each precise enough that two independent screeners would agree.
3. A planned synthesis method: either fixed-effect meta-analysis, random-effects meta-analysis, or structured narrative synthesis, with a justification tied to expected heterogeneity.
4. A planned heterogeneity exploration: one subgroup analysis or one meta-regression, with the moderator named and the causal status of the moderator stated honestly.
5. A PRISMA-style flow description in text, from identification through inclusion, with estimated counts at each stage.
6. One ethical boundary related to data sharing or participant records, with a decision rule.

### Solution blueprint

1. **PICO question.** Population: secondary students enrolled in algebra courses, grades 7–12. Intervention: worked-example instruction, defined as study of a fully solved problem followed by a similar practice problem. Comparison: problem-solving practice without a preceding worked example. Outcome: accuracy on algebra equation-solving tests, measured immediately after instruction. Design: randomized or cluster-randomized experiments, or well-matched quasi-experiments with pretest adjustment.

2. **Inclusion criteria.** (a) The study compares worked-example instruction to problem-solving practice in algebra equation solving. (b) The sample is in grades 7–12. (c) The design is randomized, cluster-randomized, or a quasi-experiment with statistical adjustment for pretest differences. **Exclusion criteria.** (a) The study measures only procedural speed, not accuracy. (b) The intervention combines worked examples with other instructional elements in a way that prevents isolating the worked-example effect. (c) The study is a dissertation or thesis with no peer-reviewed version and insufficient methodological detail for risk-of-bias appraisal.

3. **Planned synthesis method.** For this hypothetical protocol, the team expects meaningful variation across populations, implementation, duration, and outcome measures, so it provisionally plans a random-effects meta-analysis. This is a design rationale to test after extraction, not an empirical claim about the distribution of effects. If fewer than five studies are eligible, or if the studies differ in ways that make standardization meaningless, the synthesis will revert to structured narrative synthesis with tabulation by design, measure, and duration.

4. **Planned heterogeneity exploration.** Subgroup analysis by grade band: middle school (grades 7–8) versus high school (grades 9–12). This is an exploratory moderator analysis, not a causal test, because grade band is not randomly assigned. The subgroup comparison may suggest boundary conditions but cannot establish that grade causes the difference.

5. **PRISMA-style flow.** The team searches ERIC, PsycINFO, Web of Science, and ProQuest Dissertations, identifying an estimated 800 records. After deduplication, approximately 550 unique records remain. Two reviewers independently screen titles and abstracts, excluding an estimated 420 records that do not meet population, design, or outcome criteria. One hundred thirty full-text articles are retrieved and assessed against the protocol. An estimated 95 are excluded: 40 for ineligible design, 30 for ineligible outcome, and 25 for insufficient detail. Thirty-five studies enter the qualitative synthesis, and 28 contribute to the quantitative synthesis; seven lack extractable variance data.

6. **Ethical boundary.** If the review includes unpublished dissertations with student-level data, the team will not request raw data unless the dissertation author confirms institutional ethics approval and participant consent for secondary use. If raw data are obtained, direct identifiers are removed and the dataset is shared only under a data-use agreement that prohibits re-identification attempts.

## Evidence notes and references

- Higgins, J. P. T., et al. (2022). *Cochrane Handbook for Systematic Reviews of Interventions* (Version 6.3). A methodological standard for specified synthesis types, not the only valid approach.
- What Works Clearinghouse. (2022, revised December 2022). [*Procedures and Standards Handbook, Version 5.0*](https://ies.ed.gov/ncee/wwc/Handbooks). A transparent standard for specified evidence reviews.
- Page, M. J., et al. (2021). "The PRISMA 2020 statement: an updated guideline for reporting systematic reviews." *BMJ, 372*, n71. Reporting guidance, not a quality judgment of included studies.
- National Academies of Sciences, Engineering, and Medicine. (2019). [*Reproducibility and Replicability in Science*](https://doi.org/10.17226/25303). Consensus discussion of open science practices and their limits.
- DerSimonian, R., & Laird, N. (1986). "Meta-analysis in clinical trials." *Controlled Clinical Trials, 7*(3), 177–188. The DerSimonian–Laird estimator for between-study variance.
- Egger, M., et al. (1997). "Bias in meta-analysis detected by a simple, graphical test." *BMJ, 315*(7109), 629–634. The regression-based funnel-plot asymmetry test.
- Hedges, L. V., Tipton, E., & Johnson, M. C. (2010). "Robust variance estimation in meta-regression with dependent effect size estimates." *Research Synthesis Methods, 1*(1), 39–65. A practical method for handling dependent effect sizes without full covariance information.
