
# Notation, Evidence, and Ethics Conventions

This guide is designed for repeated reference. It records notation used across chapters, the evidence-hierarchy conventions that govern claim status, and the research-ethics conventions that apply to classroom research discussed in this reader.

## Notation

### Numbers, sets, and arithmetic

- $\mathbb{N}$: the natural numbers $\{1, 2, 3, \dots\}$. When $0$ is included, the text says so explicitly.
- $\mathbb{Z}$: the integers.
- $\mathbb{Q}$: the rational numbers.
- $\mathbb{R}$: the real numbers.
- $a|b$: $a$ divides $b$; there exists an integer $k$ with $b = ak$.
- $\gcd(a,b)$: the greatest common divisor of $a$ and $b$.
- $a \bmod b$: for $b\ne0$, the nonnegative remainder when $a$ is divided by $|b|$, with $0 \leq a \bmod b < |b|$.
- $\lfloor x \rfloor$: the greatest integer less than or equal to $x$.
- $\lceil x \rceil$: the least integer greater than or equal to $x$.

### Algebra and functions

- $f: X \to Y$: a function from domain $X$ to codomain $Y$.
- $f(x)$: the value of $f$ at $x$.
- $y = mx + b$: slope-intercept form of a line, with slope $m$ and $y$-intercept $b$.
- $(x + a)(x + b) = x^{2} + (a + b)x + ab$: expansion identity.

### Statistics and research notation

- $\bar{x}$: sample mean.
- $s$: sample standard deviation.
- $n$: sample size or number of observations.
- $p$: a probability or a proportion.
- $\hat{p}$: an estimated proportion.
- $\tau^{2}$: between-study variance in a random-effects meta-analysis.
- $95\%$ interval: a range of values compatible with the data under stated model assumptions; not a probability statement about the parameter.
- $\pm$: plus or minus; used to express uncertainty intervals.

### Education-specific notation

- **SMD**: standardized mean difference, used to compare effects across studies with different measures.
- **RCT**: randomized controlled trial.
- **QED**: quasi-experimental design.
- **SCD**: single-case design.
- **DBR**: design-based research.

## Evidence-hierarchy conventions

The reader uses a flat evidence-status system rather than a ranked pyramid. The question is not "how high on the hierarchy" but "what kind of warrant does this claim need and does the evidence provide it."

### Four claim statuses

| Status | Warrant required | Typical sources |
| --- | --- | --- |
| Mathematical result | Proof, definition, or calculation | Axioms, theorems, algorithms |
| External research finding | Design, measures, analysis, uncertainty | Peer-reviewed studies, systematic reviews |
| Local observation | Recorded conditions, transparent context | Classroom notes, interviews, work samples |
| Teaching conjecture | Mathematical rationale plus planned local test | Hypothesized mechanisms, design predictions |

### Evidence quality checks

Before accepting or repeating a claim, ask:

1. **Construct validity:** Does the measure represent the intended mathematical idea, or does it add construct-irrelevant demand?
2. **Internal validity:** Are rival explanations ruled out by the design?
3. **Statistical conclusion validity:** Is uncertainty reported appropriately, with clustering, multiplicity, and model assumptions visible?
4. **External validity:** To which populations, settings, and outcomes does the claim transfer, and on what basis?
5. **Ecological validity:** Does the task or intervention resemble actual practice, or is it an artificial laboratory simplification?

### Synthesis conventions

- **Commensurability:** Pooling across studies requires justified similarity of constructs, measures, and contrasts. Standardization does not make different concepts identical.
- **Heterogeneity:** Report variation across studies; do not hide it in a single pooled estimate.
- **Publication bias:** Acknowledge that null and negative results may be missing; use transparent methods to probe for asymmetry.
- **Vote counting avoided:** Do not count statistically significant results. Report effect sizes, precision, and direction.

## Research-ethics conventions

Classroom research involving learners carries obligations that apply regardless of whether the activity is labeled "research," "evaluation," or "improvement."

### Consent and assent

- **Institutional review:** Obtain required ethics review before recruitment. Ordinary classroom improvement and generalizable research may be governed differently, but renaming research does not remove obligations.
- **Informed consent:** Adults who can consent must receive clear information about purpose, procedures, risks, benefits, and withdrawal rights.
- **Developmentally appropriate assent:** Learners who cannot give full legal consent should still be informed and given a meaningful opportunity to decline.
- **Voluntariness:** Where teachers or institutions hold authority, voluntariness requires special care. A learner who cannot decline recording without losing instruction is not freely participating.

### Student data privacy

- **Data minimization:** Collect only the data needed for the stated educational or research purpose.
- **Purpose limitation:** Use data only for the purpose for which it was collected. Keystroke timing, for example, is rarely necessary for formative mathematics assessment.
- **Retention and deletion:** Set explicit timelines for deletion and communicate them to participants.
- **Anonymization and de-identification:** Remove direct identifiers. Assess re-identification risk from combinations of remaining variables. When in doubt, apply access controls or data-use agreements.
- **Third-party transfer:** Before sending student data to a vendor, platform, or cloud service, verify terms, jurisdiction, retention, and deletion policies. "Anonymized" under a vendor's definition may not meet educational privacy standards.

### Classroom observation and recording

- **Low-inference records:** Prefer timestamped notes and anonymized artifacts over identifiable video or audio when the research question permits.
- **Observer role:** Observers follow the research question, not personnel appraisal. If observation affects employment, disclose this explicitly.
- **Accessibility override:** Accessibility needs and ordinary teaching adjustments override the research plan. Deviations become part of the evidence, not faults to hide.
- **Public sharing:** Do not share identifiable learner work, images, audio, or video publicly without specific consent and institutional approval. Anonymized response categories and revised task designs are usually safer and more useful.

### Generative systems and algorithmic scoring

- **Verification:** Generated content must be checked independently for mathematical correctness, valid citations, and appropriate boundaries.
- **Transparency:** Disclose when algorithmic scoring, recommendation, or profiling is used.
- **Human oversight:** Maintain a human-in-the-loop for consequential decisions.
- **Fairness audit:** Examine error rates and outcomes across subpopulations; a global accuracy rate can conceal systematic disparities.

### Reporting ethics

- Report null, negative, and contradictory findings.
- Avoid language that stigmatizes populations or individuals.
- Respect the contextual boundaries of primary studies.
- Disclose conflicts of interest and funding sources.
- Include affected communities in questions, interpretation, and dissemination.

## Accessibility and notation policy

All essential mathematical information is stated in text and formulas. No argument depends only on colour, spatial placement, or animation. Tables and diagrams are accompanied by exact descriptions of rows, columns, or relations. Plain-source formulas use readable tokens such as $\leq$, $\to$, and $\cong$ when a specialized glyph would otherwise be the only carrier of meaning.

## Citation policy

- Paraphrase sources and cite the job they perform.
- Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard.
- Direct quotations require exact locators and license or fair-use review.
- When sources disagree, record the disagreement.
- When provenance is unknown, label it unknown rather than inventing a clean lineage.
