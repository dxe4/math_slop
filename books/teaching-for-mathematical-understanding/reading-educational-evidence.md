
# Read educational evidence with mathematical care

## The seduction of average effects

When a study reports that "intervention X improved mathematics achievement by an average of 0.4 standard deviations," it is easy to treat that number as a prescription. But averages conceal variation, and educational research is necessarily contextual. The same intervention delivered by different teachers, in different schools, with different curricula, to different learners, may produce different effects. A teacher who reads research must ask not only "What worked on average?" but also "For whom, under what conditions, compared to what, and with what implementation?"

This chapter presents a checklist for evaluating educational research claims and illustrates how to apply it. The central claim is that mathematical care in reading evidence---attention to design, comparison, measurement, and uncertainty---is as important as mathematical care in solving problems.

## A checklist for evaluating research claims

When encountering a research claim about mathematics teaching, ask the following questions:

1. **Who participated and who did not?** Was the sample representative of the learners you teach? If the study was conducted in high-resource suburban schools, its findings may not transfer to under-resourced urban schools.

2. **What was the comparison condition?** "Intervention X improved achievement" is meaningless without knowing what the control group did. If the control group had no mathematics instruction at all, the intervention's effect is unsurprising. A meaningful comparison is between intervention X and the best available alternative.

3. **Which outcome and timescale were measured?** A study that measures procedural fluency immediately after instruction may find large effects that diminish over time. A study that measures conceptual understanding six months later may find smaller but more durable effects. The outcome must align with your goals.

4. **Was assignment randomized, plausibly controlled, or observational?** Random assignment can support a causal comparison when its design and analysis conditions hold; noncompliance, missing outcomes and interference still matter. Quasi-experimental and observational causal claims need explicit identification assumptions and a defensible account of competing explanations. A design label or a list of statistical controls alone does not settle those assumptions.

5. **How variable were effects across settings?** An average effect of 0.4 standard deviations might reflect consistent moderate effects, or it might reflect large effects in some settings and null or negative effects in others. If the latter, the average is misleading.

6. **What implementation and training were required?** An intervention that requires fifty hours of teacher training and daily coaching may be effective but impractical at scale. The fidelity of implementation matters: an intervention that works in a tightly controlled trial may fail when teachers adapt it loosely.

7. **Are harms, access, workload, and opportunity costs reported?** An intervention that improves test scores but increases teacher burnout, reduces time for other subjects, or excludes certain learners may not be worth adopting. Good research reports trade-offs, not only benefits.

## A statistically significant average is not a universal prescription

A small $p$-value says that, under a fully specified null model and the analysis assumptions, a prespecified test statistic at least as extreme as the observed one has small probability. It is not the probability that the observed effect was “due to chance,” and it does not say that the effect is large, important, or generalisable. A study with ten thousand participants might estimate an effect of $0.05$ standard deviations precisely enough to reject its null, while a smaller study might estimate $0.8$ with enough uncertainty that the same test does not reject.

Moreover, a null average does not prove that no learner benefited. An intervention might help some learners and harm others, yielding an average near zero. The teacher who dismisses the intervention entirely, or adopts it uncritically, misses the nuance.

## Mechanism, replication, and uncertainty

Understanding *why* an intervention works is as important as knowing *that* it works. If the mechanism is clear, the teacher can adapt the intervention intelligently. If the mechanism is opaque, the teacher is merely following a recipe.

Replication matters. A single study, however well designed, is provisional. A body of replicated studies, preferably by independent research teams, provides stronger grounds for confidence. The teacher should ask: "Has this finding been replicated, and in contexts similar to mine?"

Uncertainty intervals, where reported, are more informative than point estimates. An effect size reported as $0.4$ with a $95\%$ confidence interval of $[0.1,0.7]$ suggests a positive effect, but one that might be as small as $0.1$. An interval of $[-0.1,0.9]$ includes the possibility of no effect or even harm.

## Applying the checklist: a hypothetical example

Suppose a journal article reports that "collaborative problem solving improves year-eight algebra achievement by 0.35 standard deviations ($p<0.05$)."

Applying the checklist:

- **Participants:** The study was conducted in three middle-class schools in one district. Generalisability to other contexts is uncertain.
- **Comparison:** The control group worked individually on the same problems. The comparison is meaningful but does not rule out other active alternatives.
- **Outcome:** A standardised algebra test administered immediately after the six-week intervention. Long-term retention and transfer are unknown.
- **Design:** Randomized at the classroom level, with twelve classes per condition. The number of learners alone cannot establish precision; the analysis must account for classroom clustering, and adequacy depends on the intended estimand, variation and design assumptions.
- **Variability:** The effect ranged from $-0.1$ to $0.8$ across classrooms. The average alone does not determine the effect in a particular classroom, and classroom estimates themselves can be noisy.
- **Implementation:** Teachers received two days of training. Fidelity was monitored but not reported in detail.
- **Harms:** Not reported. Opportunity cost---reduced individual practice time---is unknown.

Conclusion: The finding is suggestive but not decisive. A teacher might pilot collaborative problem solving in their own context, monitor outcomes, and compare with their usual practice, rather than adopting it wholesale.

## Worked reading case: standardised effects depend on the denominator

All numerical studies in the following cases are constructed examples. They are not reports of participants, trials, replications or achieved outcomes. Suppose a hypothetical comparison has a mean score of seventy in one group and sixty-six in the other, on a common scale. The raw mean difference is four score points. If a specified reference standard deviation is ten points, the difference standardised by that reference is four tenths of a standard deviation. If the chosen reference standard deviation is twenty, the standardised value is two tenths. The raw difference has not changed; its measuring unit has.

A report must therefore identify which standard deviation is used: a comparison-group baseline spread, a pooled outcome spread, or another specified quantity. Small-sample corrections and adjusted models can further change the estimator. Two papers reporting the same standardised effect need not represent the same raw gain, because their score scales and reference populations may differ. Conversely, different standardised values can arise from the same raw difference under different denominators.

The measure also differs from a percentage gain. Moving a mean from forty to forty-four points is a four-point absolute increase and a ten-percent increase relative to forty. If the outcome is a proportion moving from forty percent to forty-four percent, it increases by four percentage points, not ten percentage points. A headline saying “ten percent better” without its baseline and scale leaves the quantity ambiguous. The standardised difference additionally requires a spread estimate, which neither phrase supplies.

For a teacher reading the result, first recover the estimand and units before judging practical importance. Ask what a four-point difference means on the instrument, whether it concerns immediate recall or later transfer, and what the uncertainty permits. A standardised average alone cannot show the probability that every learner benefits or the number of curriculum weeks gained. Such interpretations require additional models and assumptions.

The worked calculation gives an exact relation among chosen numbers. It does not establish an effect of any instructional approach. The reading practice proposed is to translate the reported scale into explicit quantities and identify what remains unknown before treating the result as a prescription.

## Worked reading case: a large learner count can conceal a small assignment count

Suppose a fictional study assigns twenty classrooms, each containing thirty learners, between two instructional conditions. There are six hundred learner records, but the independent assignment units are the twenty classrooms. Learners within a classroom can share a teacher, materials and environment. Treating all six hundred records as independent can understate uncertainty when these shared influences induce positive correlation.

A simplified equal-cluster calculation makes the issue visible. Assume each learner's outcome has variance $\sigma^2$, two different learners in the same classroom have covariance $\rho\sigma^2$, and different classrooms are independent. For a classroom of size $m$, the variance of its summed outcomes is $m\sigma^2+m(m-1)\rho\sigma^2$, because the sum contains the individual variance terms and all ordered distinct covariance terms. Dividing by $m^2$ gives the classroom mean's variance. Across equal independent classrooms, the full mean's variance is the independent-learner variance multiplied by $1+(m-1)\rho$.

With thirty learners per classroom and a hypothetical within-class correlation of one tenth, that multiplier is three and nine tenths. This is often called a design effect under the stated equal-size covariance model. Dividing six hundred by that multiplier gives an approximate independent-record equivalent of about one hundred fifty-four for this mean-variance comparison. It is not a replacement count of randomized units, a complete power calculation, or an exact analysis for every clustered trial. Unequal class sizes, covariate adjustment and the treatment contrast can change the relevant calculation.

The mathematical lesson is that adding learners within a fixed classroom does not necessarily provide the same information as adding independently assigned classrooms. The covariance terms matter. A report should name the assignment level, account for clustering in its estimator and uncertainty, and describe the number of clusters per condition. The simple formula diagnoses a possible independence error; it does not certify a particular published analysis as valid.

A teacher need not reproduce a trial's full statistics to ask these questions. “Six hundred participants” is incomplete design information. The fictional calculation motivates asking how the data structure entered the analysis, while keeping its hypothetical assumptions separate from measured classroom correlations.

## Worked reading case: missing outcomes can change a comparison

Construct two assigned groups of one hundred learners each, with a bounded outcome between zero and ten. In the first group eighty outcomes are observed and sum to five hundred sixty, giving an observed mean of seven. In the second all one hundred are observed and their mean is six. The complete-case comparison is therefore one point in favour of the first group, but it omits twenty assigned learners from that group.

Without assumptions about the missing outcomes, bound their total between zero and two hundred. The first group's full assigned mean lies between five hundred sixty divided by one hundred and seven hundred sixty divided by one hundred, or between five and six tenths and seven and six tenths. Relative to the second group's mean of six, the full difference lies between negative four tenths and positive one and six tenths. The sign is not identified by the observed records alone.

These bounds use only the outcome range and the supplied counts. They are deliberately conservative. Additional justified assumptions about missingness could narrow them; merely deleting missing records or filling them all with the observed mean does not justify those assumptions. If absence relates to difficulty, access barriers or treatment participation, the missingness mechanism may be relevant to both validity and inclusion. The example does not assert that any such mechanism occurred.

Random assignment does not by itself recover unobserved outcomes. It supports an initial comparison of assigned groups, while analysis of missing outcomes requires further reasoning. A report should provide the amount and pattern of missingness by condition, explain its analysis choices, and examine how conclusions depend on plausible alternatives. The exact sensitivity method depends on the design and outcome; this elementary bound is a transparent first illustration.

For a teacher considering adoption, the appropriate conclusion from the constructed data is uncertainty about the assigned-group mean difference, not proof that the approach helps or harms. The observed comparison is real within the fictional dataset, but the broader causal and transport claims remain unsupported without their required assumptions.

## Read uncertainty intervals as model-dependent procedures

A frequentist confidence interval is produced by a procedure with a stated coverage property under repeated sampling and the model assumptions. After observing a particular interval, the fixed unknown effect is not assigned a probability by that frequentist construction alone. An interval excluding zero can be evidence against the corresponding null under the analysis, but it does not prove that every learner benefits, that the instrument measures the intended goal, or that the estimate transports to another setting.

Likewise, an interval including zero does not demonstrate exact equality or practical equivalence. A wide interval can contain both worthwhile benefit and important harm. An equivalence claim needs a justified practical margin and an analysis addressing that margin; failing to reject zero is a different statement. A prediction interval for effects in new settings also differs from an interval for a fitted average. Heterogeneity and transport require attention beyond the average's precision.

These distinctions do not make research unusable. They make its claims more specific. An instructional decision can combine the available evidence with costs, access requirements, plausible mechanisms and local goals, while recording uncertainty and revisiting the choice. A local pilot can investigate feasibility and generate useful observations; without an adequate comparison and causal design it should not be described as proof that the intervention caused improvement. Part II develops those inquiry questions in greater depth.

## Practice exercises

### Exercise 1

A headline says, "Study finds that homework improves maths scores by 20%." Apply the checklist to identify at least three questions the headline does not answer.

**Hint 1.** Ask what the percentage uses as its baseline.

**Hint 2.** A causal headline needs a comparison and a design account.

**Solution.**

1. **Comparison:** Improved compared to what? No homework at all, or a different use of the same time?
2. **Outcome:** What was measured? Procedural fluency, conceptual understanding, or test scores? When was it measured?
3. **Participants:** Who were the learners? Age, prior achievement and home support are possible sources of variation to investigate; the headline supplies no estimates of moderation.
4. **Implementation:** How much homework, of what kind, with what feedback? "Homework" is not a single intervention.
5. **Causality:** Was this an experiment or an observation? Higher-achieving schools may assign more homework for reasons unrelated to causation.

### Exercise 2

Explain why a $p$-value below $0.05$ does not mean that an educational intervention is guaranteed to work in your classroom.

**Hint 1.** A null-model tail probability is not a classroom guarantee.

**Hint 2.** List effect size, transport and implementation questions separately.

**Solution.** Under the study's specified null model and analysis assumptions, $p<0.05$ means the probability of a prespecified test statistic at least as extreme as the observed one is below $0.05$. It is not the probability that the intervention has no effect, nor that this exact effect arose “by chance.” The $p$-value does not report effect size, practical importance, transportability, or implementation fit. Different learners, teachers, materials, and outcomes can therefore produce a different result in your classroom.

### Exercise 3

A meta-analysis reports an average effect size of $0.2$ standard deviations for formative assessment, with high heterogeneity ($I^{2}=80\%$). Interpret this for a teacher who is deciding whether to invest in formative assessment training.

**Hint 1.** Heterogeneity is a model-based variation summary.

**Hint 2.** It does not alone reveal the signs of individual study effects.

**Solution.** The fitted average is $0.2$ standard deviations. An $I^2$ estimate of $80\%$ describes a large estimated between-study contribution to total observed variation under the meta-analysis model, but it does not by itself show that the study estimates include positive, zero, and negative values. Inspect the forest plot, uncertainty intervals, between-study variance estimate, model, and contexts. The average alone is a weak predictor for one teacher; the decision also depends on resemblance to the studied settings, implementation demands, costs, and plausible benefits.

### Exercise 4

A researcher claims that "direct instruction is superior to inquiry learning for mathematics" based on a single randomized trial. Critique this claim using the principles in this chapter.

**Hint 1.** Name the concrete interventions rather than broad teaching labels.

**Hint 2.** Keep unmeasured outcomes unknown rather than supplying a preferred direction.

**Solution.** A single trial, however well designed, is provisional. The claim ignores replication, context, and the possibility that the comparison condition was poorly implemented inquiry learning rather than well-designed inquiry learning. The outcome measure may cover only procedural fluency, leaving conceptual understanding and problem-solving transfer unmeasured. No direction of advantage on those unmeasured outcomes follows from the trial. The claim also treats "direct instruction" and "inquiry learning" as monolithic categories, when both encompass wide variation in implementation. A more defensible claim would be: "In this study, under these conditions, with these outcomes, direct instruction produced higher average scores than the inquiry approach used." The teacher should seek replications and consider whether their goals align with the study's outcomes.

### Exercise 5 {#reading-educational-evidence-exercise-5}

A constructed comparison has mean scores sixty and fifty-four. Compute the raw difference and standardised differences using reference spreads twelve and twenty. Explain why the standardised values differ.

**Hint 1.** Keep the numerator fixed.

**Hint 2.** A standard deviation is a measuring unit, not a universal conversion.

**Solution.** The raw difference is six points. Relative to twelve points it is one half of a standard deviation; relative to twenty it is three tenths. The different denominators change the unit, not the raw contrast. A report must identify the reference spread and any estimator adjustments. The calculation describes supplied hypothetical numbers and establishes no instructional effect or practical value without information about the instrument, design and uncertainty.

### Exercise 6 {#reading-educational-evidence-exercise-6}

A proportion increases from twenty percent to twenty-five percent. State the percentage-point change and the relative percentage change. Explain the ambiguity of “improved by five percent.”

**Hint 1.** Absolute and baseline-relative changes use different denominators.

**Hint 2.** Divide the difference by the original proportion for relative change.

**Solution.** The absolute change is five percentage points. Relative to twenty percent, the increase is five divided by twenty, or twenty-five percent. “Improved by five percent” could mean a relative increase to twenty-one percent, or be an imprecise reference to five percentage points. The baseline and intended measure must be supplied. Neither interpretation by itself establishes causality or a universal benefit; those require design and outcome information separate from arithmetic.

### Exercise 7 {#reading-educational-evidence-exercise-7}

Under the equal-size covariance model in the worked case, find the design effect for clusters of twenty with within-cluster correlation one fifth. State one limit of using an independent-record equivalent.

**Hint 1.** Use one plus cluster size minus one times the correlation.

**Hint 2.** Assignment units remain clusters.

**Solution.** The multiplier is $1+19/5=24/5$, or four and eight tenths. Dividing a total record count by this number compares mean variances under the simplified equal-size model. It does not create additional independently randomized clusters or replace a full treatment-effect analysis. Unequal sizes, adjusted estimators and covariance assumptions can change the relevant precision. The supplied correlation is hypothetical, so this calculation should not be presented as an estimate from actual classrooms.

### Exercise 8 {#reading-educational-evidence-exercise-8}

A constructed group of fifty has forty observed outcomes totalling two hundred eighty on a zero-to-ten scale. Bound its full-group mean without a missingness assumption.

**Hint 1.** Ten missing outcomes contribute between zero and one hundred.

**Hint 2.** Divide full totals by fifty, not forty.

**Solution.** The total lies between two hundred eighty and three hundred eighty. The full-group mean therefore lies between five and six tenths and seven and six tenths. The observed mean is seven, but it need not equal the assigned group's mean. Narrowing the range requires additional information or assumptions. Deleting the missing records does not prove that their outcomes resemble the observed records. The bound is an exact consequence of the constructed range and counts, not a report of study attrition.

### Exercise 9 {#reading-educational-evidence-exercise-9}

An estimated effect has a wide uncertainty interval containing both zero and an educationally important positive value. Explain why “no significant effect” does not establish practical equivalence.

**Hint 1.** Failure to reject a null is not proof of that null.

**Hint 2.** Equivalence needs a justified margin and corresponding evidence.

**Solution.** The interval is compatible, under the analysis assumptions, with zero and with a meaningful benefit, so the data may be too imprecise to distinguish them. Practical equivalence asks whether effects lie within a specified range considered negligible for the decision. That margin must be justified and addressed by an appropriate analysis. A broad interval crossing zero does not establish it. It also does not prove benefit; the correct statement preserves the uncertainty and the outcome scale rather than treating a significance label as a decision rule.

### Exercise 10 {#reading-educational-evidence-exercise-10}

A teacher's local pilot shows higher scores after a new lesson sequence than before. Name three questions remaining before claiming the sequence caused the gain, and identify one useful noncausal result the pilot might supply.

**Hint 1.** Consider changes that could occur without the new sequence.

**Hint 2.** Feasibility and causal effectiveness are different targets.

**Solution.** Ask what comparable learners would have done without the sequence, whether repeated assessment or other concurrent instruction contributed, and whether missing records or changed outcome scoring altered the comparison. Also inspect whether the same mathematical construct was measured at both times. The pilot can still document feasibility, access barriers, workload, learner responses and implementation details. Those observations can improve design and motivate a stronger comparison, but they do not alone identify a causal effect. Keep the proposed mechanism and empirical finding separate in the claim ledger.

## Looking backward and forward

An earlier chapter, *Inclusion changes design, not mathematical ambition*, argued that all learners deserve access to rigorous mathematics. This book deliberately mixes several claim types: proved mathematical results, attributed research syntheses, professional guidance, design rationales, teaching conjectures, and local worked examples. The claim-status ledger identifies those roles; it does not certify every recommendation as a well-established empirical finding or a universal prescription. Readers should match external claims to their cited scope, then pilot, observe, and revise design choices with their own learners.

This chapter closes Part I of *Teaching Mathematics* and prepares the extended evidence and professional-inquiry chapters in Part II. The cycle introduced in the preface---goal, task, anticipated reasoning, representation, evidence, response---is not a script but a framework for principled decision-making. Each chapter has added tools for one phase of that cycle. The teacher who uses them with mathematical care, empirical humility, and respect for learners will continue to refine them over a career.
