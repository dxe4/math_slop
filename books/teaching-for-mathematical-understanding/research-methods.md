
# Mathematics education research: designs, measures, and claim boundaries

Research quality is not a hierarchy in which one named method always wins. Quality is alignment among question, construct, design, data, analysis, and claim. Mathematics education adds a necessary content question: what exact mathematics did participants have an opportunity to learn, and what mathematics did the measure require?

```text
problem -> question -> construct -> design -> records -> analysis -> claim
```

An attractive conclusion cannot repair a broken arrow.

## 1. Questions determine possible answers

Compare:

1. "Does discussion improve mathematics?"
2. "How did six pairs use diagrams while revising ratio explanations in this unit?"
3. "For eligible year-7 classes in these districts, what is the average effect of assignment to a specified discussion routine, versus the existing routine, on a prespecified ratio-reasoning measure after eight weeks?"

Question 1 is an interest. Question 2 asks about process and meaning in bounded settings. Question 3 defines a causal estimand: population, intervention, comparison, outcome, and time. The second can warrant a detailed explanatory account; the third needs an identification strategy. Neither substitutes for the other.

Write the desired claim first. Then list plausible rival explanations. If the claim says "caused," selection and counterfactual conditions are central. If it says "how participants interpreted," records must preserve interaction and context. If it says "prevalence," sampling and response processes dominate.

## 2. Constructs are arguments, not labels

"Understanding fractions" is not directly observed. Narrow it:

> Coordinates a common whole, magnitude, and partition structure to compare two positive proper fractions, using at least two linked representations.

Possible evidence includes placing fractions on the same number line, constructing equal-area diagrams with an explicit common whole, or justifying an inequality through benchmark or common-unit reasoning. Fast denominator manipulation alone underrepresents the construct. A reading-heavy word problem may add construct-irrelevant language demand.

A measurement argument specifies:

- the construct and its boundaries;
- tasks intended to elicit it;
- scoring rules and examples;
- why scores support the intended interpretation;
- plausible irrelevant influences;
- populations and decisions for which evidence exists;
- uncertainty and consequences of error.

### Reliability as consistency under defined replication

**Definition 19.1.** *Reliability* is the consistency of a measure under a defined replication: same construct, same conditions, same population. It is not validity. A perfectly consistent score can measure the wrong thing.

Common indices include internal consistency (correlation among items intended to measure the same construct) and inter-rater agreement (consistency among scorers). Both are local to the sample, tasks, and raters studied.

### Standard error of measurement

Even a reliable instrument produces variation around a true score. The **standard error of measurement** (SEM) estimates the typical distance between an observed score and the score expected on repeated independent administrations of equivalent tasks.

**Formula.** If $r$ is a reliability coefficient for the population and $\sigma$ is the standard deviation of observed scores, then

\[
\text{SEM} = \sigma\sqrt{1 - r}.
\]

**Worked computation.** A fraction-magnitude rubric has reliability $r = 0.85$ in a calibration sample with standard deviation $\sigma = 10$ points. Then

\[
\text{SEM} = 10\sqrt{1 - 0.85} = 10\sqrt{0.15} \approx 10(0.3873) \approx 3.87\text{ points}.
\]

A learner who scores $14$ might, on an equivalent form, plausibly score near $10$ or $18$ solely because of measurement noise. **Local observation:** in small samples, $r$ and $\sigma$ are estimated with error, so the SEM itself carries uncertainty.

### Validity is an argument about interpretation and use

**Definition 19.2.** *Validity* is the degree to which evidence and theory support the interpretations of test scores for proposed uses. It is not a permanent property of "the test"; it concerns an interpretation and use in context.

A validity argument must address:

- **Content:** Do tasks represent the intended mathematical domain?
- **Response process:** Do participants engage the intended reasoning?
- **Internal structure:** Do item relationships match the construct map?
- **Relations to other variables:** Do scores correlate with relevant criteria and not with irrelevant ones?
- **Consequences:** What decisions follow from scores, and do they help or harm learning?

If a district uses a timed computation test to place learners into algebra, the argument must show that speeded arithmetic predicts algebra readiness in that population and that the placement decision improves subsequent outcomes. A high reliability coefficient does not discharge this argument.

### Worked rubric audit

Prompt: "Which is greater, $5/8$ or $3/4$? Explain."

Proposed two-point rubric: one point for $3/4$, one for any explanation.

Problems: "because 4 is bigger" earns explanation credit despite invalid reasoning; a correct diagram may be inaccessible to a text-only scoring pipeline; $6/8>5/8$ demonstrates common-unit reasoning but may not use expected vocabulary.

Revision:

- 0: no interpretable comparison or incompatible claim;
- 1: correct comparison with missing/unclear warrant;
- 2: valid warrant preserving a common whole, e.g. $3/4=6/8>5/8$, benchmark reasoning, or equivalent representation;
- separate code: response mode or access issue prevents interpretation.

Pilot scoring with diverse responses; examine disagreement as evidence that construct or rubric needs revision.

## 3. Sampling and cases

Define the target population separately from the obtained sample. A large volunteer sample can be precisely described and still poorly represent a wider population. Record recruitment, exclusions, participation, attrition, and relevant context.

Purposeful qualitative sampling selects cases for information, contrast, typicality, rarity, or theory development. Its justification is not random representativeness. Transfer depends on a transparent account of setting, mechanism, and boundaries.

Clustered settings matter. Learners share teachers, classes, and institutions; responses within a cluster may be correlated. Treating 600 learners in 20 classrooms as 600 independent assignment units understates uncertainty when assignment occurred by classroom.

## 4. Designs and their warrants

### Observation, interview, and artifact inquiry

These methods can characterize strategies, discourse, norms, participation, and meaning. Strong work reports researcher position, case selection, recording, transcription choices, coding or interpretive process, discrepant evidence, and links from claims to records.

Separate record from inference:

```text
record: learner points to denominators and says, "eighths are smaller."
inference A: learner coordinates unit-fraction size.
inference B: learner uses a memorized larger-denominator rule.
next contrast: compare 5/8 with 1/2, then 3/8 with 3/4.
```

One utterance permits both explanations. A contrasting task creates discriminating evidence.

### Survey and correlational designs

Surveys can estimate distributions if frame, sample, response, weighting, and measurement warrant it. Associations support description and prediction under conditions. They do not by themselves identify effects of changing one variable; confounding, reverse direction, selection, and measurement error remain.

### Randomized experiments

Random assignment makes assigned groups comparable in expectation before treatment. A causal interpretation still depends on implementation, attrition, noncompliance, interference, outcome measurement, analysis, and the precise treatment contrast.

**What "comparable in expectation" means.** Before randomization, each unit has two potential outcomes: one under treatment and one under control. Randomization does not guarantee that the observed groups are identical in every pre-treatment variable; it gives a known randomization distribution for differences in **pre-treatment** variables under the assignment mechanism. Differences in post-treatment outcomes can reflect both the assigned treatment and chance. This is why pre-randomization covariates are checked and, when appropriate, adjusted for efficiency, but they are not the source of identification.

**Chance imbalance.** With many covariates, some will differ by chance even under valid randomization. Reporting a single baseline table and noting chance imbalance does not invalidate the experiment; it documents the randomization's realized draw.

**Assignment versus receipt: noncompliance, ITT, and complier effects.** In education, the treatment assigned is not always the treatment received. Some assigned learners never receive the intervention; some comparison learners access it elsewhere. The **intention-to-treat** (ITT) estimand compares outcomes by assignment and preserves randomization's warrant. Noncompliance often reduces the magnitude of an ITT contrast, but it need not move it toward zero in every setting because access, spillovers, and treatment-effect heterogeneity can change the direction. A contrast among those who actually received treatment is often called a **treatment-on-the-treated** (TOT) estimand, but it is not automatically the **complier average causal effect** (CACE). The Wald ratio identifies CACE only when assignment is a valid instrument and assumptions such as relevance, exclusion, independence, monotonicity, and a suitable noncompliance structure hold. **Teaching conjecture:** reporting a receipt-based contrast without discussing selection, compliance rates, and identifying assumptions may overstate the effect achievable under ordinary implementation.

**Cluster example.** Forty classes are randomized, 20 to routine A and 20 to comparison. Each has about 25 learners. The unit randomized is the class. A defensible analysis accounts for class clustering and reports the number of classes, not only 1,000 learners. If two intervention classes drop out because the software fails, post-randomization attrition threatens the simple contrast. If comparison teachers adopt routine A, the estimand becomes assignment to access under contamination, not pure receipt.

Randomization supports internal identification for this contrast; generalization to other ages, content, teachers, durations, and outcomes requires an additional argument.

### Quasi-experiments

- **Regression discontinuity:** treatment changes at a threshold; causal warrant near the cutoff depends on continuity and absence of precise manipulation.
- **Interrupted time series:** examines level or trend changes around an intervention; coincident events and functional-form choices matter.
- **Difference-in-differences:** compares changes across groups; requires a credible counterfactual trend argument and attention to timing and composition.
- **Matching/adjustment:** balances observed covariates; cannot guarantee balance on unobserved causes.
- **Instrumental variables:** use exogenous treatment variation under relevance, exclusion, independence, and interpretation conditions.

Naming a design does not satisfy its assumptions. Draw a causal diagram, state the estimand, probe assumptions, and report alternatives.

#### Regression discontinuity sketch

A district awards an intensive algebra-readiness program to learners scoring below 40 on a placement test. The running variable is the placement score; the cutoff is 40. Learners just below and just above the cutoff are assumed to be similar except for program access. The causal warrant requires:

1. no precise manipulation of scores around the cutoff;
2. continuity of potential outcomes at the cutoff;
3. correct functional form for the running-outcome relationship;
4. no simultaneous policy changes at the same threshold.

The estimand is the average effect at the cutoff, not for all learners. If the test is coarse or coaches target the cutoff, the design weakens.

#### Difference-in-differences sketch

A state introduces a revised year-8 curriculum in 2024; neighboring states do not. The outcome is a common algebra-readiness test. The DiD estimand compares the change in the treated state from 2023 to 2024 with the change in the untreated states over the same period. Assumptions include:

1. parallel trends: absent the reform, treated and untreated states would have followed the same trend;
2. no differential coincident shocks in 2024 that affect only the treated state;
3. stable composition: the populations tested are comparable across years;
4. no anticipation effects in 2023.

The parallel-trend assumption is untestable for the post-period; pre-trend plots provide suggestive, not definitive, evidence. A single post-period is weaker than multiple pre- and post-periods.

### Single-case experimental designs

Repeated measures across planned phase changes can examine functional relations for individual cases when design standards are met. A simple "before/after for one learner" is not automatically a single-case experiment. Stable measurement, repeated demonstration, phase logic, and predictable carryover are central; some learning cannot ethically or practically be withdrawn.

### Design-based research

Design research iteratively develops an intervention and a theory of how it functions in context. Each cycle should record conjecture, design feature, predicted activity, implementation, evidence, failure, and revision. Its product can be a refined mechanism or design principle with conditions. Continual redesign complicates a simple fixed-treatment effect claim.

### Mixed methods

Mixed methods requires planned integration. Outcome estimates might characterize a contrast; interviews may explain uptake; artifacts may test a mechanism. Specify where streams connect, where they answer different questions, and how disagreement changes the account. "Qualitative themes confirmed the statistics" is inadequate without a joint inference.

## 5. Effect sizes: computation, conversion, and interpretation

A raw-scale difference (e.g., 1.4 points on a 0–20 rubric) is tied to the measure. A **standardized mean difference** (SMD) divides the mean difference by a standard deviation, aiding comparison across studies with different measures.

### End-to-end computation on a tiny dataset

Suppose a small pilot produces these scores on a 0–20 reasoning rubric:

**Treatment:** 12, 14, 15, 18, 20  
**Control:** 8, 10, 11, 13, 14

**Step 1: group means.**

\[
\bar{x}_T = \frac{12+14+15+18+20}{5} = \frac{79}{5} = 15.8, \quad
\bar{x}_C = \frac{8+10+11+13+14}{5} = \frac{56}{5} = 11.2.
\]

**Step 2: group standard deviations.**

Treatment sum of squared deviations:
\[
(12-15.8)^2 + (14-15.8)^2 + (15-15.8)^2 + (18-15.8)^2 + (20-15.8)^2
= 14.44 + 3.24 + 0.64 + 4.84 + 17.64 = 40.8.
\]

Control sum of squared deviations:
\[
(8-11.2)^2 + (10-11.2)^2 + (11-11.2)^2 + (13-11.2)^2 + (14-11.2)^2
= 10.24 + 1.44 + 0.04 + 3.24 + 7.84 = 22.8.
\]

Sample variances (using $n-1$):
\[
s_T^2 = \frac{40.8}{4} = 10.2, \quad s_C^2 = \frac{22.8}{4} = 5.7.
\]

**Step 3: pooled standard deviation.**

\[
s_p = \sqrt{\frac{(5-1)(10.2) + (5-1)(5.7)}{5+5-2}}
= \sqrt{\frac{40.8 + 22.8}{8}}
= \sqrt{\frac{63.6}{8}}
= \sqrt{7.95} \approx 2.82.
\]

**Step 4: Cohen's $d$.**

\[
d = \frac{15.8 - 11.2}{2.82} = \frac{4.6}{2.82} \approx 1.63.
\]

**Step 5: standard error and interval.**

A rough standard error for $d$ in small samples is

\[
\text{SE}_d \approx \sqrt{\frac{n_T + n_C}{n_T n_C} + \frac{d^2}{2(n_T + n_C)}}
= \sqrt{\frac{10}{25} + \frac{1.63^2}{20}}
= \sqrt{0.4 + 0.133}
= \sqrt{0.533} \approx 0.73.
\]

A rough 95% interval is

\[
1.63 \pm 1.96(0.73) = [0.20, 3.06].
\]

**Interpretation.** Under the model assumptions, the data are compatible with a large positive standardized effect, but the interval is wide because the sample is tiny. **External research finding, bounded:** Cohen (1988) proposed conventional labels of 0.2, 0.5, and 0.8 as small, medium, and large, but these are arbitrary conventions for the behavioral sciences, not mathematics education specifically. A raw-scale interpretation is usually more useful: the treatment group scored, on average, 4.6 points higher on a 0–20 rubric.

### Conversion pitfalls

Converting $d$ to other metrics (e.g., percentile rank, $U_3$, or the point-biserial correlation $r_{pb} = d / \sqrt{d^2 + 4}$) requires assumptions about distributions that may not hold. A conversion is a **mathematical result** given the formula, but its **educational interpretation** depends on distributional and population assumptions. Report raw-scale differences alongside standardized metrics whenever possible.

## 6. Clustering: design effect and intraclass correlation

When assignment occurs by cluster (classroom, school, district) but analysis treats individuals as independent, standard errors are understated and confidence intervals are too narrow.

**Definition 19.3.** The **intraclass correlation coefficient** (ICC), denoted $\rho$, is the proportion of total variance in the outcome that lies between clusters. An ICC near 0 means learners within a class are no more similar than learners across classes; an ICC near 1 means all variation is between classes.

**Definition 19.4.** The **design effect** (DE) for simple cluster randomization with equal cluster size $m$ is

\[
\text{DE} = 1 + (m - 1)\rho.
\]

The effective sample size is the nominal sample size divided by DE.

### Worked example: ignoring clustering understates standard error

Twenty classes with 25 learners each are randomized by class. Suppose the ICC for the outcome is $\rho = 0.15$. Then

\[
\text{DE} = 1 + (25 - 1)(0.15) = 1 + 24(0.15) = 1 + 3.6 = 4.6.
\]

If an independence-based planning calculation reports a standard error of $0.6$, the equal-size exchangeable-cluster model inflates it by approximately

\[
0.6 \times \sqrt{4.6} \approx 0.6 \times 2.145 \approx 1.29.
\]

A naive 95% interval using the independence SE is $[0.22, 2.58]$; the model-adjusted interval is roughly $[-1.13, 3.93]$. The first interval excludes zero; the second does not. This design-effect multiplication is a planning approximation under equal cluster sizes and an exchangeable within-cluster correlation model. It is not a calculation of a cluster-robust standard error from observed cluster residuals; an analysis must also use degrees of freedom appropriate to the finite number of randomized clusters. **Research finding, bounded:** ICCs in education often lie between 0.05 and 0.25 for achievement outcomes in the settings studied by Hedges and Hedberg (2007), so the numerical ICC is plausible for an illustration.

| Analysis | Standard error | Rough 95% interval | Excludes zero? |
| --- | --- | --- | --- |
| Ignores clustering | 0.60 | [0.22, 2.58] | Yes |
| Model-adjusted planning value | 1.29 | [-1.13, 3.93] | No |

The table shows the same point estimate (1.4) under two analysis assumptions. The design effect of 4.6 means the effective sample size is roughly $500 / 4.6 \approx 109$, not 500. Reporting only the naive interval would overstate precision.

## 7. A compact quantitative example

Suppose the class-level outcome is the mean score on a 0–20 reasoning rubric. The estimated adjusted difference is $1.4$ points with standard error $0.6$. A rough 95% interval is

\[
1.4\pm1.96(0.6)=[0.22,2.58].
\]

Interpretation: under the model and design assumptions, the data are compatible with a range of positive average assignment effects on this measure in the studied setting. Do not write "the method improves understanding by 1.4" without naming assignment, population, measure, duration, uncertainty, implementation, and scale meaning.

If the rubric's between-rater agreement is weak or favors one representation, narrower statistical uncertainty does not repair measurement validity.

Standardized mean difference can aid comparison but is not unit-free meaning. It divides by a chosen standard deviation that differs across populations and measures. Report raw-scale interpretations where possible.

## 8. A compact qualitative example

Research question: How do learners negotiate a common whole while comparing fractions in pairs?

Records: video, screen capture, written artifacts, and stimulated-recall interview for eight purposefully varied pairs. Proposed analytic steps:

1. define episodes from task presentation to pair claim;
2. transcribe speech, gesture, and representation changes relevant to the question;
3. write initial process codes such as "changes whole," "aligns partitions," "invokes numerator," "challenges partner";
4. compare within and across pairs;
5. actively seek episodes that contradict the emerging account;
6. retain an audit trail of code changes and researcher decisions;
7. present records supporting and limiting each interpretation.

A claim might be: "In five recorded pairs, an explicit challenge about unequal wholes preceded diagram revision; in two, revision occurred without verbal challenge; one recording was incomplete." It does not estimate how often all learners behave this way. It may generate a mechanism conjecture for another study.

Researcher interpretation is unavoidable; transparency, reflexivity, contrast, and counterevidence make it accountable.

## 9. Qualitative rigor: negative-case analysis, audit trails, and intercoder agreement

Qualitative rigor does not mean applying quantitative proxies such as sample size or significance testing. It means systematic, transparent, and accountable reasoning from records to claims.

### Negative-case analysis

**Definition 19.5.** *Negative-case analysis* is the deliberate search for and examination of evidence that contradicts the emerging account. A single discrepant case does not automatically falsify a pattern claim, but it must be reported and explained.

In the fraction-pair example above, the initial code "challenge precedes revision" fit five pairs but not two. The researcher must decide whether the two pairs represent a different mechanism, an implementation variation, a coding error, or a boundary condition. Reporting the discrepancy and the reasoning strengthens the account.

### Audit trails

An audit trail documents decisions from raw record to final claim: what was collected, what was excluded and why, how codes were defined and revised, how disagreements were resolved, and how the final account was checked against alternatives. It permits another researcher to follow the reasoning, not necessarily to reach the identical conclusion.

### Intercoder agreement and its limits

When multiple coders apply a scheme, agreement statistics (e.g., Cohen's $\kappa$ or Krippendorff's $\alpha$) quantify consistency beyond chance. **Local observation:** a high $\kappa$ does not establish that the coding scheme captures the intended construct; coders could agree consistently on an irrelevant feature. Conversely, low agreement may signal an ambiguous construct, unclear criteria, or genuine indeterminacy in the data.

**Worked coding excerpt.** Two coders classify 20 transcript segments as "common whole explicit," "common whole implicit," or "no whole coordination."

| Coder A \ Coder B | Explicit | Implicit | None | Row total |
| --- | --- | --- | --- | --- |
| Explicit | 8 | 2 | 0 | 10 |
| Implicit | 1 | 5 | 1 | 7 |
| None | 0 | 1 | 2 | 3 |
| Column total | 9 | 8 | 3 | 20 |

Observed agreement: $(8+5+2)/20 = 15/20 = 0.75$.  
Expected agreement by chance (using row and column marginals):  
Explicit: $(10/20)(9/20) = 0.225$; Implicit: $(7/20)(8/20) = 0.14$; None: $(3/20)(3/20) = 0.0225$.  
Total expected: $0.225 + 0.14 + 0.0225 = 0.3875$.

Cohen's $\kappa$:

\[
\kappa = \frac{0.75 - 0.3875}{1 - 0.3875} = \frac{0.3625}{0.6125} \approx 0.592.
\]

**Interpretation.** Agreement is moderate. The three disagreements in the explicit/implicit border and the two implicit/none disagreements should be examined: do they reflect ambiguous segments, different interpretations of "implicit," or a code definition that needs refinement? The $\kappa$ value starts a conversation; it does not close it.

## 10. Synthesis without manufacturing certainty

A systematic review is a study with a protocol. Define eligible populations, interventions or phenomena, comparisons, outcomes, designs, dates, languages, and reports. Record databases, full search strings, deduplication, dual screening or checking process, exclusion reasons, and flow.

One study can generate several reports and dependent effect estimates. Do not count each as independent. Before meta-analysis, ask whether constructs and contrasts are commensurable. Two "mathematics achievement" scores can test different content; standardization does not make them conceptually identical.

A random-effects model represents variation in effects under assumptions; it does not explain heterogeneity or remove bias. Examine content, comparison conditions, implementation, populations, timing, measurement, and design. Small-study and publication processes are only some sources of missing evidence.

When pooling is unjustified, structured narrative synthesis is legitimate. Preserve magnitude, direction, uncertainty, credibility, context, and contradictions. Counting statistically significant results discards effect sizes and precision.

## 11. Open, reproducible, and ethical work

Before data collection, timestamp or register questions, outcomes, exclusions, and analysis where appropriate. Preserve a data dictionary, codebook, versioned analysis, decisions, and deviations. Distinguish confirmatory from exploratory work. Share materials, code, and de-identified data only when consent, rights, privacy, and disclosure risk permit it. "Open" never overrides participant protection.

For research with learners:

- obtain institutional or other required ethics review before recruitment;
- use informed consent and developmentally appropriate assent when applicable;
- make voluntariness real where teachers or institutions hold authority;
- minimize collected data and set retention/deletion rules;
- avoid public examples that permit re-identification through combinations of details;
- plan for withdrawal and incidental disclosures;
- compensate access costs fairly where allowed;
- include affected communities in questions, interpretation, and dissemination;
- report harms and distributional effects, not only averages.

Ordinary classroom improvement and generalizable research may be governed differently, but renaming research "evaluation" does not remove obligations. Seek authoritative local review.

## 12. The claim-warrant table

Use one row per major claim.

| Intended claim | Design/record | Assumptions | Counterevidence | Boundary |
| --- | --- | --- | --- | --- |
| assignment to routine changed mean rubric score | cluster randomized comparison | randomization integrity, clustering model, outcome validity, attrition | contamination; missing classes | participating classes, named duration and rubric |
| diagram challenges preceded revisions in observed pairs | multimodal episode analysis | adequate recordings, defensible episode/coding decisions | revisions without challenges | sampled pairs and tasks |
| tool supports keyboard completion | task-based accessibility test | tested browser/assistive tech/version | focus loss in one dialog | tested configuration, not every user |

If the evidence column cannot support the verb in the claim, weaken the verb or redesign the study.

### Second claim-warrant table: worked row-by-row

Consider a study that examines whether a lesson-study cycle changes teachers' attention to student mathematical reasoning, measured by coded video records.

**Row 1: Prevalence claim.**  
*Intended claim:* "In this district, 60% of year-7 teachers attended to mathematical reasoning in at least one episode during the observed lesson."  
*Design/record:* stratified random sample of 30 lessons, dual-coded by trained observers using a prespecified coding manual.  
*Assumptions:* coding manual captures the intended construct; observers were calibrated; single-lesson observation is representative of typical practice; attendance was defined and countable.  
*Counterevidence:* some lessons had no public student reasoning to attend to; observer presence may have changed behaviour; one lesson may not represent a teacher's usual practice.  
*Boundary:* year-7 teachers in this district during the observation window; the specific coding manual and episode definition used.

**Row 2: Causal claim.**  
*Intended claim:* "The lesson-study cycle caused an increase in attention to reasoning."  
*Design/record:* pre-post comparison for participating teachers with no comparison group.  
*Assumptions:* the measure is valid and stable over time; no concurrent professional development or policy change occurred; teachers did not improve solely through repeated observation.  
*Counterevidence:* maturation, history, and repeated measurement are plausible rival explanations; volunteers may differ from non-volunteers.  
*Boundary:* participating volunteers; pre-post design without randomization or matching.

**Row 3: Mechanism claim.**  
*Intended claim:* "Teachers shifted attention because the lesson-study protocol required public anticipation of student responses."  
*Design/record:* stimulated-recall interviews with eight purposefully selected teachers; interview protocol probed decision moments.  
*Assumptions:* teachers can access and report their decision processes; the interview protocol did not lead responses; selected teachers represent variation in uptake.  
*Counterevidence:* some teachers attributed change to external accountability pressure, not the protocol; one teacher reported no change.  
*Boundary:* eight interviewed teachers; their self-reported accounts.

Each row uses a different warrant. The prevalence claim needs sampling and measurement; the causal claim needs a comparison design; the mechanism claim needs process records and negative-case analysis. Combining them in one sentence ("Lesson study caused a 60% increase in attention because teachers anticipated responses") collapses three boundaries into one overreaching claim.

## Exercises

1. Turn "Do manipulatives work?" into one process question and one causal estimand.
2. Explain why high inter-rater agreement cannot establish that a proof rubric measures proof quality.
3. A school adopts a program voluntarily and outperforms nonadopters. Give three rival explanations.
4. In a trial, schools are randomized but analysis treats learners as independent. What is wrong?
5. Draft a next task distinguishing "larger denominator means larger fraction" from correct unit-fraction reasoning.
6. An interview study claims 60% of all teachers hold a belief based on 12 purposefully selected participants. Repair the claim.
7. State two conditions that a difference-in-differences claim needs beyond computing two differences.
8. A meta-analysis combines immediate procedural fluency with year-later proof transfer. What must be reconsidered?
9. Compute the rough 95% interval for estimate $-0.3$, standard error $0.25$; then write a bounded interpretation.
10. Identify an ethical problem with uploading identifiable learner explanations to a public generative system for coding.
11. A rubric has reliability $r = 0.80$ and population standard deviation $\sigma = 5$ points. Compute the SEM and interpret it for a learner who scores 13.
12. Compute Cohen's $d$ for the dataset: Treatment [10, 12, 14], Control [8, 9, 11]. Show every step.
13. Thirty schools with 20 learners each are randomized by school. The ICC is $\rho = 0.10$. Compute the design effect and explain what it means for a standard error that ignores clustering.
14. Explain the difference between the ITT and TOT estimands in a randomized trial with partial noncompliance.
15. A regression-discontinuity study uses a cutoff of 50 on a placement test. List two threats to the causal warrant other than manipulation.
16. Two coders agree on 14 of 20 segments. The marginal totals are 10/10 for each category. Compute Cohen's $\kappa$ and interpret it.
17. A study reports $d = 0.4$ on a 0–50 mathematics test where the control-group standard deviation is 8 points. Convert to a raw-scale difference and state one advantage of reporting it.
18. Give one reason why a high ICC weakens a cluster-randomized trial even when the total sample size is large.
19. In the qualitative example of Section 8, two pairs revised a diagram without verbal challenge. State how negative-case analysis strengthens the final claim.
20. A researcher preregisters an analysis plan but then discovers a subgroup pattern after seeing the data. How should this be reported?
21. A difference-in-differences study shows parallel pre-trends but a coincident policy change in the treated group only. What happens to the causal warrant?
22. Compute the rough 95% interval for the SMD in Exercise 12 using the formula $\text{SE}_d \approx \sqrt{(n_T+n_C)/(n_T n_C) + d^2/(2(n_T+n_C))}$.
23. A validity argument for a timed algebra placement test must address five sources of evidence. Name three and give a mathematics-specific question for each.
24. A cluster-randomized trial reports 50 classes of 30 learners each but does not account for clustering. The naive $p$-value is 0.03. Explain why this $p$-value may be misleading without computing the exact correction.
25. Construct a claim-warrant table with two rows for a hypothetical study: "A professional-development workshop improved fraction instruction, measured by classroom observation and teacher interviews."

## Solutions

1. Process: "How do learners use fraction strips when negotiating unequal wholes in selected pair tasks?" Causal: "For eligible classes, what is the eight-week average effect of assignment to a specified strip-based sequence versus current instruction on a prespecified fraction-magnitude measure?"
2. Agreement shows scoring consistency under the replication. Raters could consistently reward surface length, one proof style, or invalid inference. A validity argument needs content representation and links from scores to intended use.
3. Adopters may have stronger prior outcomes/resources; motivated leadership may drive both adoption and results; measurement or participant composition may differ. Concurrent reforms and regression to the mean are further rivals.
4. Random assignment and shared instruction occur at school level, so learner outcomes are correlated. Ignoring clustering generally misstates uncertainty and degrees of freedom; analysis must respect the assignment/design.
5. Compare $1/8$ with $1/6$ using a common whole, then compare $5/8$ with $1/2$. Ask for prediction, representation, and explanation. Correct unit-fraction reasoning predicts smaller pieces as equal wholes are divided more finely; the overgeneralized rule may fail inconsistently across numerators.
6. Report a theme or count within the 12 selected participants and selection context: "Seven of 12 purposefully selected interviewees expressed X under this prompt." Do not estimate population prevalence without an appropriate sample/design.
7. A credible counterfactual parallel-trend argument and no differential coincident shock/compositional change; treatment timing, anticipation, and measurement consistency also matter.
8. They are different constructs and times. Separate synthesis or a justified multivariate/dependence model may be needed; one average may have no coherent educational interpretation.
9. $-0.3\pm1.96(0.25)=[-0.79,0.19]$ approximately. Under stated assumptions, data are compatible with effects from moderately negative to slightly positive on the named scale; they do not establish no effect.
10. Identifiers and sensitive educational records leave the authorized setting; consent, vendor terms, retention, reuse, cross-border transfer, and re-identification may be unknown. Use approved secure processes and minimize/de-identify only under a valid governance plan.
11. $\text{SEM} = 5\sqrt{1 - 0.80} = 5\sqrt{0.20} \approx 5(0.4472) \approx 2.24$ points. A learner scoring 13 might plausibly score from about 11 to 15 on an equivalent form because of measurement noise alone. The SEM quantifies uncertainty in the score, not uncertainty in the construct.
12. Step 1: $\bar{x}_T = (10+12+14)/3 = 12$; $\bar{x}_C = (8+9+11)/3 = 9.33$. Step 2: treatment squared deviations: $(10-12)^2+(12-12)^2+(14-12)^2 = 4+0+4 = 8$; control squared deviations: $(8-9.33)^2+(9-9.33)^2+(11-9.33)^2 \approx 1.78+0.11+2.78 = 4.67$. Step 3: $s_T^2 = 8/2 = 4$; $s_C^2 = 4.67/2 = 2.33$. Step 4: $s_p = \sqrt{((2)(4)+(2)(2.33))/4} = \sqrt{(8+4.67)/4} = \sqrt{3.17} \approx 1.78$. Step 5: $d = (12 - 9.33)/1.78 = 2.67/1.78 \approx 1.50$.
13. $\text{DE} = 1 + (20 - 1)(0.10) = 1 + 1.9 = 2.9$. Under the equal-size exchangeable-cluster planning model, the effective sample size is $600/2.9 \approx 207$, and an independence-based standard error would be multiplied by about $\sqrt{2.9} \approx 1.70$. An actual analysis estimates cluster-aware uncertainty from the data and uses degrees of freedom appropriate to 30 randomized schools.
14. ITT compares outcomes by random assignment and preserves the randomization warrant. A receipt-based TOT contrast is vulnerable to selection because actual receipt is not randomized. It equals an identified CACE only under a valid-instrument argument with relevance, independence, exclusion, monotonicity, and the specified compliance structure. ITT describes the effect of assignment; a valid CACE describes the effect among compliers.
15. (a) Incorrect functional form: if the relationship between the running variable and outcome is misspecified, the estimated jump at the cutoff is biased. (b) Simultaneous policy change: another intervention introduced at the same cutoff confounds the estimand. (c) Discontinuity in covariates: if pre-treatment variables also jump at the cutoff, the continuity assumption is violated.
16. Observed agreement $p_o = 14/20 = 0.70$. Expected agreement $p_e = (10/20)(10/20) + (10/20)(10/20) = 0.25 + 0.25 = 0.50$. Then $\kappa = (0.70 - 0.50)/(1 - 0.50) = 0.20/0.50 = 0.40$. Whether that value is adequate depends on the construct, consequences, prevalence, coding purpose, and a declared convention; no universal $0.60$ cutoff establishes acceptability. Examine disagreements and revise the manual or training when they reveal ambiguity.
17. Interpreting the reported $d$ as standardized by the stated control-group standard deviation, the raw-scale difference is $0.4 \times 8 = 3.2$ points. If $d$ instead uses a pooled standard deviation, the pooled value must also be 8 for this conversion. The raw units help educators judge whether 3.2 points matters on a 0–50 scale for placement or grading decisions.
18. A high ICC means that much of the outcome variation is between clusters rather than within them. Even with many learners per cluster, the effective sample size is limited by the number of clusters. Precision and power depend primarily on the number of randomized clusters, not the number of learners.
19. The discrepant pairs force the researcher to examine whether "challenge precedes revision" is a necessary condition or only a common one. If the pairs revised through silent self-correction, the account must be revised to include non-verbal pathways or to bound the claim to cases where challenge was present. Reporting the discrepancy makes the claim accountable.
20. The subgroup pattern is an exploratory finding, not a confirmatory result. The researcher should report the preregistered primary analysis unchanged, then present the subgroup analysis as hypothesis-generating, with appropriate multiplicity caveats and a call for replication.
21. The coincident policy change is a differential shock that violates the parallel-trend assumption for the post-period. The DiD estimand conflates the intended treatment with the coincident policy, and the causal warrant collapses unless the second policy can be measured and adjusted for.
22. From Exercise 12, $d \approx 1.50$ and $n_T = n_C = 3$. Then $\text{SE}_d \approx \sqrt{6/9 + 1.50^2/12} = \sqrt{0.667 + 0.1875} = \sqrt{0.854} \approx 0.924$. The rough 95% interval is $1.50 \pm 1.96(0.924) = [-0.31, 3.31]$. The interval includes zero because the sample is tiny.
23. (1) Content: Do items require algebraic reasoning or only arithmetic fluency? (2) Response process: Do learners use equation structure, or do they guess by plugging in answer choices? (3) Consequences: Does placement into remedial tracks reduce access to advanced mathematics for some subgroups?
24. The naive $p$-value uses an independence reference distribution that is generally invalid when learners within the same class share a teacher, norms, and instruction. The $p$-value is not the probability that this result is a Type I error. Rather, repeated use of the naive test can have an actual Type I error rate above its nominal level; a cluster-aware analysis may produce a larger standard error and a different conclusion.
25. Row 1 (observation claim): "Teachers who attended the workshop increased their use of representations in observed fraction lessons." Design: pre-post observation of volunteer attendees. Assumptions: no concurrent coaching; observation protocol is valid; one lesson is typical. Counterevidence: Hawthorne effect from being observed; teachers selected into the workshop. Boundary: volunteer attendees; observed lessons; the specific protocol. Row 2 (causal claim): "The workshop caused improved fraction instruction." Design: no comparison group. Assumptions: maturation and history are negligible. Counterevidence: district-wide curriculum change occurred the same term. Boundary: volunteer attendees; pre-post design; no concurrent controls.

## Project: Appraise a published mathematics-education study

Choose one peer-reviewed empirical study in mathematics education published within the last ten years. The study must report original data (quantitative, qualitative, or mixed) and must make at least one causal, prevalence, or mechanism claim.

Complete the following tasks and submit a concise report (maximum four pages):

1. **Citation and claim extraction.** State the study's full citation, the exact claim you will appraise, and the claim status (mathematical result, external research finding, local observation, or teaching conjecture) as defined in this reader.
2. **Construct and measurement.** Identify the primary construct. Describe the tasks or instrument used to measure it. Name one possible source of construct-irrelevant variance and one threat to validity specific to the mathematical content.
3. **Design and identification.** Name the design (experiment, quasi-experiment, qualitative inquiry, or mixed). State the estimand in one sentence. List the two most important assumptions that warrant the causal or explanatory inference.
4. **Quantitative check (if applicable).** If the study reports an effect size, confidence interval, or standard error, reproduce or verify one interval using the formula from this chapter. If the study is qualitative, identify the negative-case strategy or audit-trail evidence reported.
5. **Claim-warrant table.** Construct a one-row claim-warrant table for the study's main claim, with columns: Intended claim, Design/record, Assumptions, Counterevidence, Boundary.
6. **Repair or boundary.** Propose one revision that would strengthen the claim, or state the tightest boundary within which the claim is defensible.

### Solution blueprint

**Task 1.** A well-chosen study might be a randomized trial of a fractions intervention in grades 3–5. The claim: "The intervention improved students' fraction magnitude understanding." Status: external research finding, bounded to the sample, measure, and duration.

**Task 2.** Construct: fraction magnitude understanding. Instrument: a researcher-designed number-line estimation task with 0–1 and 0–2 lines. Construct-irrelevant variance: reading demand for verbal labels on the line. Threat to validity: the task measures estimation, not the broader construct of magnitude comparison or equivalence.

**Task 3.** Design: cluster randomized trial with randomization by classroom. Estimand: the average effect of assignment to the intervention versus business-as-usual on the number-line task after 12 weeks. Assumptions: randomization integrity; no contamination between classrooms; acceptable attrition; valid and reliable outcome measure.

**Task 4.** Suppose the study reports a mean difference of 0.25 with standard error 0.10 on a 0–1 proportion-correct scale. The rough 95% interval is $0.25 \pm 1.96(0.10) = [0.054, 0.446]$. The computation is a mathematical result; the interpretation is bounded by the design and measure.

**Task 5.**

| Intended claim | Design/record | Assumptions | Counterevidence | Boundary |
| --- | --- | --- | --- | --- |
| assignment to the intervention improved fraction magnitude understanding | cluster RCT, 40 classes, researcher-designed number-line task | randomization integrity; clustering model; outcome validity; low attrition; no contamination | comparison teachers used similar materials; attrition higher in intervention classes; measure captures only estimation | grades 3–5 in participating districts; 12-week duration; number-line estimation task |

**Task 6.** Repair: add a validated secondary measure of fraction comparison (not estimation) to test whether the effect generalizes across construct facets. Alternatively, boundary: the claim is defensible as an effect on number-line estimation in the studied grades and districts for the 12-week period; it does not warrant broader conclusions about "fraction understanding" or other settings.

## Evidence notes and references

- National Research Council. (2002). [*Scientific Research in Education*](https://doi.org/10.17226/10236). Consensus discussion of shared principles, methodological pluralism, and education's contextual features.
- American Educational Research Association. (2006). [*Standards for Reporting on Empirical Social Science Research in AERA Publications*](https://www.aera.net/Publications/Standards-for-Research-Conduct). Reporting standards; not a ranking of methods.
- American Educational Research Association. (2011). [*Code of Ethics*](https://www.aera.net/portals/38/docs/About_AERA/CodeOfEthics%281%29.PDF). Consult current local law and ethics review in addition to professional guidance.
- What Works Clearinghouse. (2022, revised December 2022). [*Procedures and Standards Handbook, Version 5.0*](https://ies.ed.gov/ncee/wwc/Handbooks). A transparent standard for specified evidence reviews, not the only form of education inquiry.
- Cohen, J. (1988). *Statistical Power Analysis for the Behavioral Sciences* (2nd ed.). Lawrence Erlbaum Associates. Conventional SMD benchmarks; note that these are field-general conventions, not mathematics-education specific.
- Hedges, L. V., & Hedberg, E. C. (2007). Intraclass correlation values for planning group-randomized trials in education. *Educational Evaluation and Policy Analysis, 29*(1), 60–87. ICC estimates for cluster-randomized designs in education.
