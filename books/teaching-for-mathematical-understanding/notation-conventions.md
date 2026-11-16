
# Notation and Conventions

This guide is designed for repeated reference. It records notation used across chapters, the claim-status conventions that govern what kind of warrant a statement needs, and the structural conventions that keep arguments clean.

## Numbers, sets, and arithmetic

- $\mathbb{N}$: the natural numbers $\{1, 2, 3, \dots\}$. When $0$ is included, the text says so explicitly.
- $\mathbb{Z}$: the integers.
- $\mathbb{Q}$: the rational numbers.
- $\mathbb{R}$: the real numbers.
- $a|b$: $a$ divides $b$; there exists an integer $k$ with $b = ak$.
- $\gcd(a,b)$: the greatest common divisor of $a$ and $b$.
- $a \bmod b$: the remainder when $a$ is divided by $b$, with $0 \leq a \bmod b < |b|$.
- $\lfloor x \rfloor$: the greatest integer less than or equal to $x$.
- $\lceil x \rceil$: the least integer greater than or equal to $x$.

## Algebra and functions

- $f: X \to Y$: a function from domain $X$ to codomain $Y$.
- $f(x)$: the value of $f$ at $x$.
- $y = mx + b$: slope-intercept form of a line, with slope $m$ and $y$-intercept $b$.
- $(x + a)(x + b) = x^{2} + (a + b)x + ab$: expansion identity.
- $a(b + c) = ab + ac$: the distributive property for real numbers.

## Fractions and rational expressions

- $\frac{a}{b}$: the rational number with numerator $a$ and denominator $b$, where $b \neq 0$.
- $\frac{a}{b} < \frac{c}{d}$ iff $ad < bc$ when $b, d > 0$: fraction comparison by cross-multiplication.
- $a \div \frac{b}{c} = a \cdot \frac{c}{b}$: division by a nonzero fraction is multiplication by its reciprocal.

## Statistics and research notation

- $\bar{x}$: sample mean.
- $s$: sample standard deviation.
- $n$: sample size or number of observations.
- $p$: a probability or a proportion.
- $\hat{p}$: an estimated proportion.
- $95\%$ interval: a range of values compatible with the data under stated model assumptions; not a probability statement about the parameter.
- $\pm$: plus or minus; used to express uncertainty intervals.
- $I^{2}$: a descriptive meta-analysis statistic estimating the proportion of total observed variation attributed to between-study heterogeneity under the fitted model. It depends on sampling variances and model assumptions; it is not a literal probability that differences were “caused by heterogeneity.”

## Education-specific notation

- **SMD**: standardized mean difference, used to compare effects across studies with different measures.
- **RCT**: randomized controlled trial.
- **UDL**: Universal Design for Learning; a framework for designing instruction that is accessible to all learners.
- **MKT**: Mathematical Knowledge for Teaching; the specialised knowledge teachers need beyond general mathematical knowledge.

## Claim-status conventions

Before accepting or repeating a claim, check its status:

| Status | Warrant required | Typical sources |
| --- | --- | --- |
| Mathematical result | Proof, definition, or calculation | Axioms, theorems, algorithms |
| External research finding | Design, measures, analysis, uncertainty | Peer-reviewed studies, systematic reviews |
| Local observation | Recorded conditions, transparent context | Classroom notes, interviews, work samples |
| Teaching conjecture | Mathematical rationale plus planned local test | Hypothesized mechanisms, design predictions |

## Cross-reference conventions

- Chapters are cited by title in italics: *Mathematical proficiency is braided*.
- Chapter IDs are used in internal links: `mathematical-proficiency-is-braided`, `begin-with-explicit-goals`.
- Definitions are numbered within chapters and referenced by name.
- Theorems are stated with every material hypothesis; the proof or proof sketch follows immediately.

## Accessibility and notation policy

All essential mathematical information is stated in text and formulas. No argument depends only on colour, spatial placement, or animation. Tables and diagrams are accompanied by exact descriptions of rows, columns, or relations. Plain-source formulas use readable tokens such as $\leq$, $\to$, and $\cong$ when a specialized glyph would otherwise be the only carrier of meaning.

## Citation policy

- Paraphrase sources and cite the job they perform.
- Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard.
- Direct quotations require exact locators and license or fair-use review.
- When sources disagree, record the disagreement.
- When provenance is unknown, label it unknown rather than inventing a clean lineage.
