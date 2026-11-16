
# Notation and Conventions

This guide is for repeated reference. A symbol receives meaning from a declared target and mechanism; the same Greek letter in two unrelated examples does not make their populations or assumptions the same.

## Data, units, and targets

**R-DEF-unit — Unit.** The object about which the investigation makes a claim. A person, household, school, transaction, and person-at-a-time are different possible units. One unit can contribute several rows, so row count and unit count are recorded separately.

**R-DEF-variable — Variable.** A recorded property of a unit, with a domain and measurement units. A variable contract also states allowed missing codes and relevant conditions or times.

**R-DEF-estimand — Estimand.** The precisely defined numerical quantity the investigation aims to learn. Its definition names the population or process, variable, summary, and relevant conditions.

**R-DEF-statistic — Statistic.** A numerical function of observed data. A statistic can estimate an estimand only through an argument connecting the observed data to the target.

**R-DEF-mechanism — Mechanism.** A named process that generated the data or the variation used in an inference. Sampling, assignment, measurement, missingness, resampling, and Monte Carlo simulation are distinct mechanisms.

Lowercase $x_i,y_i$ denote observed values. Uppercase $X_i,Y_i$ denote random observations under a stated probability mechanism. Merely capitalizing a letter does not supply a probability model.

## Two population settings that must stay distinct

### A fixed finite population

Let a declared population contain $N$ units with fixed values $y_1,\ldots,y_N$. Its mean is

\[
\mu=\frac{1}{N}\sum_{i=1}^{N}y_i.
\]

Here $N$ is the finite population size and $\mu$ is a fixed descriptive feature of those units. If a simple random sample of $n$ units is drawn without replacement, the observations vary because the sampling design selects different subsets from the fixed population. Dependence from sampling without replacement is part of that mechanism.

The book uses the finite-population descriptive variance

\[
\sigma_{\mathrm{FP}}^2=\frac{1}{N}\sum_{i=1}^{N}(y_i-\mu)^2.
\]

The subscript FP is written when confusion with a process variance is possible.

### An iid process model

Under an explicitly chosen iid model,

\[
X_1,\ldots,X_n\mathrel{\text{iid}}\sim P,
\]

means that the random observations are independent and share the same distribution $P$. If the expectation exists, the process mean may be written

\[
\mu=\mathbb{E}_{P}(X).
\]

This target concerns repeated draws from the named process, not a silently substituted finite list. “iid” is an assumption about a mechanism. Similar-looking rows, a shuffled file, or separate row numbers do not establish it.

The symbol $\mu$ is therefore used only after the target has been declared: either a fixed finite-population mean or a process expectation. The surrounding statement must say which.

## Samples and summaries

- $n$: number of observed units used by a statistic after the relevant unit and exclusion rule are declared.
- $N$: size of a declared finite population. In Chapter 9's local randomization notation, $N=|\Omega|$ instead denotes the number of assignments in the declared assignment space; the chapter states that local meaning explicitly. Elsewhere, $N$ is not used as a decorative synonym for a large $n$.
- \(\bar{x}=n^{-1}\sum_{i=1}^{n}x_i\): sample mean statistic.
- \(s^2=(n-1)^{-1}\sum_{i=1}^{n}(x_i-\bar{x})^2\), for $n\ge 2$: sample variance. Base R's `var()` uses this denominator.
- $s=\sqrt{s^2}$: sample standard deviation, in the original measurement units.
- \(\hat p\): observed sample proportion, when a binary success rule and denominator have been stated.
- $p$: success probability in a declared probability model. A test result is written $p\text{-value}$ in prose and `p_value` in code so it is not confused with $p$.

An average without units is incomplete. If $x_i$ is measured in minutes, then \(\bar{x}\), $s$, and an SE for \(\bar{x}\) are measured in minutes, while a variance is measured in squared minutes.

## Variation and uncertainty

**Standard deviation (SD).** The spread of observations or of a declared distribution. It does not by itself measure the uncertainty of every statistic.

**Standard error (SE).** The standard deviation of a statistic under a specified repeated mechanism. Write, for example,

\[
\operatorname{SE}_{M}(\bar X)
=\sqrt{\operatorname{Var}_{M}(\bar X)},
\]

where $M$ names the sampling, assignment, or model mechanism. An **estimated SE** replaces unknown quantities with estimates; it should not be described as the exact spread when it is only an estimate or approximation.

**Monte Carlo standard error (MCSE).** Uncertainty caused by using a finite number $B$ of simulated replicates to approximate a computational target. For $B$ independent simulated indicators with observed proportion \(\hat q\), the estimated MCSE is

\[
\widehat{\mathrm{MCSE}}(\hat q)
=\sqrt{\frac{\hat q(1-\hat q)}{B}}.
\]

MCSE decreases when the simulation budget $B$ increases. It does not measure sampling uncertainty, assignment uncertainty, model error, or practical importance. At \(\hat q=0\) or 1 this plug-in expression is zero, which does not prove that the unknown simulation probability is known exactly.

- $B$: number of Monte Carlo or resampling replicates. State whether those replicates are independent and how they were generated.
- `SE`: standard error in prose or a clearly named code object such as `se_mean`.
- `MCSE`: Monte Carlo standard error, kept visibly separate in prose and code.

## Probability and inference language

- $\Omega$: an explicitly defined outcome or assignment space.
- $P(A)$: probability of event $A$ under the named probability law.
- \(\mathbb{E}(X)\), \(\operatorname{Var}(X)\): expectation and variance when they exist under that law.
- $X\sim P$: $X$ has distribution $P$.
- $X_1,\ldots,X_n\mathrel{\text{iid}}\sim P$: independent observations with common distribution $P$.
- $H_0$, $H_1$: null and alternative hypotheses, stated in words as well as symbols.
- $\alpha$: a predeclared test level. It is not the probability that a realized null hypothesis is true.
- $1-\alpha$: a nominal confidence level; coverage is a property under repeated use of a procedure and its stated mechanism.

“Random” always names what varies and by which law. Random sampling, random assignment, bootstrap resampling, and Monte Carlo drawing answer different questions. A randomization distribution varies assignments for fixed units under a design. A sampling distribution varies samples under a sampling or process model.

## Missingness, filtering, and repeated rows

R's `NA` marks a missing value. A calculation that uses `na.rm = TRUE` follows a computational omission rule; it does not justify that rule statistically. Every analysis states:

- which values or rows are missing;
- which rows were excluded and why;
- the resulting $n$ and unit count;
- whether the estimand still concerns all eligible units, only observed units, or another explicitly defined target.

A wholly absent row cannot be detected by `is.na()` because no `NA` cell exists. Check expected identifiers, source counts, and join keys where those are available. Repeated observations retain a unit identifier. Independence is attached to units or random components under a mechanism, not inferred from separate rows.

## R conventions

- `<-` assigns a value to a name; `==` compares two values.
- `c(...)` combines values into a vector.
- R positions begin at 1. Brackets such as `x[2]` select values.
- Comments begin with `#`.
- Use `NA_real_`, `NA_integer_`, or another typed missing value when the intended type matters.
- Missing-value handling is explicit. Silent row omission is avoided.
- Counts and indices may use integer literals such as `8L`.
- Deterministic floating-point checks allow a small absolute-plus-relative tolerance rather than demanding bit-for-bit decimal equality.
- Stochastic examples state the random-number settings, seed, $B$, target, and failure policy.
- Base-distribution R functions are sufficient for the book; examples do not require package installation or network access.

A script is intended to run from a fresh session. Objects created in a previous console session are not implicit inputs. Paths are relative to the documented working directory, and code does not depend on a reader's private absolute path.

## Claim and display conventions

A **definition** fixes language. A **proved result** includes its hypotheses and proof in the book. An **imported theorem** states its hypotheses and cites the source used for the result. An **approximation** says what tends to what and does not receive an automatic finite-sample guarantee. A **numerical observation** describes only the executed cases. A **convention** records a choice, such as a two-sided tail rule, and is not presented as a theorem.

Tables name rows, columns, units, and exclusions. Plots label axes and measurement units, use noncolor distinctions, and retain a numeric table and prose reading. A visual pattern is evidence about the displayed values, not proof of a population statement.

Original prose in this guide is Math Atlas material released under CC BY-SA 4.0.
