
# Glossary

This glossary records the book's working meanings. A chapter's displayed definition gives the full conditions; the glossary is a finder, not a substitute for them.

## Questions, data, and computation

**Analysis selection.** Letting observed outcomes or outcome-derived results influence which hypothesis, subgroup, variable, transformation, method, model, or stopping time is presented. See [Diagnostics, Multiplicity, and the Analyses We Chose](diagnostics-selection.md).

**Assertion.** An executable claim that a specified condition must be true at a particular point in an analysis; failure stops execution. Passing establishes only what was checked. See [Functions, Iteration, and Assertions](functions-iteration-assertions.md).

**Bounded conclusion.** A statement joining the target, observed result, uncertainty, practical meaning, conditions, and unresolved limits without extending beyond them. See [Capstone](capstone.md).

**Claim ledger.** A table mapping each substantive claim to its computed result, source rows, exclusions, assumptions, and limits. See [Reports That Can Be Traced](reports-and-provenance.md).

**Computational reproducibility.** Reproducing a result by rerunning declared inputs and code in a declared environment and order under a stated comparison rule. It does not establish statistical validity.

**Data schema.** A testable contract for a table's columns, row unit, representations, units, allowed and missing values, ranges, expected counts, and relationships.

**Diagnostic.** An observed-data summary or display used to find discrepancies or measure sensitivity. It can reveal a concern but cannot prove all model assumptions.

**Error.** In R, a signaled condition that prevents the current expression from completing normally. The message reports what R detected, which may be downstream of the human mistake.

**Factor.** R's representation of a categorical variable: integer codes paired with character levels. `as.numeric()` applied directly to a factor returns codes, not numeric-looking labels.

**Date.** An R object representing a Gregorian calendar date as days relative to an origin. A date is a calendar position; a difference between dates is a duration.

**Function.** An R object that accepts inputs, evaluates expressions in a local evaluation environment, and returns a value.

**Function contract.** A written specification of permitted inputs, rejected inputs, missing-value behavior, and the structure and meaning of a function's output.

**Group summary.** A rule mapping the rows in each declared group to values while retaining at least the group label, contributing count, variable unit, and missingness policy.

**Help entry.** An installed R reference page describing a documented topic's use and behavior. It does not decide whether the operation answers the statistical question.

**Iteration.** Controlled repetition of an operation over declared elements or indices, with a specified output shape and zero-length behavior.

**Join key.** The column or ordered columns used to match rows between tables. Uniqueness in each table determines whether a join is one-to-one, many-to-one, one-to-many, or many-to-many.

**Key.** One or more columns required to identify each row uniquely under the table's declared row meaning.

**Missingness.** The state in which a defined variable's value for a declared unit is unobserved. R's `NA` records this state; it is neither zero nor proof that the unit is absent.

**Missingness sensitivity analysis.** Repeating a fixed analysis under declared alternatives for unseen values or mechanisms and reporting every planned scenario. It reveals dependence on assumptions without identifying which scenario is true.

**Provenance.** The record of where a source came from, its version or retrieval occasion, its original representation, and prior transformations or exclusions.

**Report provenance.** The connection from a rendered report to literal source data, transformations, code, software and random-number environment, and generated artifacts.

**Script.** A saved plain-text sequence of R expressions and comments intended to run again. A self-contained script creates or reads each required input before use.

**Selection rule.** A rule choosing rows or variables together with when and why it was chosen, the retained and excluded IDs, and the target after selection.

**Unit.** The entity or event about which an observation and claim are made at a declared time or occasion. One unit can contribute several rows.

**Variable.** A characteristic recorded or defined for each unit, with a stated meaning, domain, measurement unit, and missing-value representation where relevant.

**Vector.** In this book, an R atomic vector: an ordered sequence of zero or more values stored under one atomic type.

## Targets, descriptions, and models

**Empirical distribution.** The distribution placing mass \(1/n\) on each of \(n\) observed values, counting repeats separately.

**Estimand.** The precisely defined numerical quantity the investigation aims to learn, including population or process, variable, summary, conditions, and time.

**Finite population.** A declared fixed collection of \(N\) units. Its values and mean \(\mu=N^{-1}\sum_i y_i\) are fixed; sampling without replacement makes the observed subset random.

**Least-squares line.** The intercept and slope minimizing the sum of squared residuals. The algebra requires variation in the predictor for a unique slope; inferential or causal interpretations require additional assumptions.

**Simple normal fixed-design linear model.** A model in which fixed predictor values determine a linear conditional mean and responses have independent normal, mean-zero errors with common positive variance. Chapter 13's exact intervals require every part of this contract.

**Mechanism.** The process producing the data or the variation used in inference, including sampling, assignment, measurement, missingness, resampling, or simulation.

**Paired difference.** A within-unit difference \(D_i=A_i-B_i\) with subtraction order fixed in advance. Pairing is preserved by analyzing the differences as one variable across units.

**Prediction.** A fitted response at specified predictor values. It concerns a future observation only when a process assumption connects that observation to the fitted data.

**Residual.** Observed response minus fitted response for a row. Residual patterns are diagnostics; residuals summing to zero in an intercept model does not prove the stochastic assumptions.

**Statistic.** A numerical function of observed data. Its relation to an estimand depends on a stated mechanism.

**Type.** An R vector's internal representation, such as logical, integer, double, or character, which determines available primitive operations.

## Probability and repeated mechanisms

**Bernoulli random variable.** A variable equal to 1 for success and 0 for failure, with success probability \(p\).

**Binomial random variable.** The number of successes in \(n\) iid Bernoulli trials sharing success probability \(p\).

**Expectation.** A probability-weighted average of a random variable under its named law, when it exists.

**iid.** Independent and identically distributed: mutual independence plus a common probability distribution. Neither part implies the other.

**Independence.** A property of random variables under a specified law that factorizes probabilities for every relevant finite collection. Separate rows do not establish it.

**Monte Carlo standard error (MCSE).** The SD of a numerical estimate across repetitions of the simulation algorithm while the statistical target stays fixed. For an average of \(B\) iid simulation replicates with finite variance, its theoretical MCSE is the replicate SD divided by \(\sqrt B\); an estimated MCSE can fluctuate. More simulation does not reduce sampling or assignment uncertainty.

**Normal distribution.** The continuous probability model with mean \(\mu\), SD \(\sigma>0\), and the density defined in Chapter 8. Its probabilities are areas under that curve; a bell-shaped plot alone does not establish normality.

**Probability.** A rule assigning numbers between 0 and 1 to events, with total mass 1 and additive mass for disjoint events.

**Random experiment.** A repeatable procedure with specified possible outcomes whose next outcome is unknown.

**Random variable.** A numerical function of an experiment's outcome. Uppercase denotes the random quantity; lowercase denotes a realized value.

**Sampling distribution.** The probability distribution of a statistic under repeated use of a stated sampling or process mechanism.

**Standard error (SE).** The SD of a statistic under a specified repeated mechanism. An estimated SE substitutes estimates for unknown quantities.

**Student t distribution.** The distribution of \(Z/\sqrt{U/\nu}\) for independent standard normal \(Z\) and chi-square \(U\) with \(\nu\) degrees of freedom.

**Variance and standard deviation.** Variance is expected squared deviation from a distribution mean; SD is its square root. For observed data, this book's sample variance uses denominator \(n-1\). Neither is automatically an SE.

## Randomization, resampling, and inference

**Assignment space.** The set of assignments the design could make. In a uniform fixed-size design, each assignment with the declared number of treated units has equal probability.

**Bootstrap approximation.** Using a conditional empirical-resampling distribution as an approximation to a statistic's sampling distribution. It requires a validity argument; resampling does not provide a universal guarantee.

**Bootstrap sample and replicate.** A bootstrap sample contains \(n\) independent draws with replacement from the observed empirical distribution; applying the chosen statistic produces one replicate.

**Bootstrap standard error.** The conditional SD of a statistic's bootstrap distribution, approximated in computation by the SD across \(B\) replicates.

**Confidence procedure and coverage.** A confidence procedure maps each possible sample to a set. Coverage is the probability, under a named repeated mechanism and parameter value, that the random set contains the fixed parameter.

**Exact randomization p-value.** Under a uniform law on a finite assignment space, the proportion of assignments whose predeclared extremeness score is at least the observed score, counting ties inclusively. With unequal assignment probabilities, the exact tail probability uses those probabilities rather than an unweighted proportion.

**Familywise error rate (FWER).** For a fixed hypothesis family, the probability of at least one rejection among its true null hypotheses under the stated repetition mechanism.

**Multiplicity.** The existence of several analysis opportunities that may contribute to a reported claim, including several outcomes, subgroups, variables, methods, stopping times, or transformations.

**Percentile interval.** An equal-tail bootstrap interval using the \(\alpha/2\) and \(1-\alpha/2\) quantiles of bootstrap replicates. This book uses R's stated type-7 finite-sample quantile rule.

**Type-7 sample quantile.** R's default interpolated convention, with position determined from \((n-1)p+1\). It is a finite-data convention, not a population-probability theorem.

**Power.** The probability that a fixed test rejects at a specified parameter value under its repeated mechanism.

**Practical importance.** Importance relative to a predeclared context-specific effect scale, consequence, or decision threshold. A p-value cutoff cannot define it.

**Difference of independent proportions.** The estimand \(p_1-p_2\) for independent iid Bernoulli groups, estimated by \(\hat p_1-\hat p_2\). The book's Wald SE and interval for this target are approximations.

**Randomization distribution.** The distribution obtained by varying assignments according to the experimental design while holding units and, under a sharp null, their outcomes fixed. It is distinct from a sampling distribution.

**Sharp null.** The hypothesis that treatment changes no unit's outcome. Together with no interference it supplies every missing potential outcome needed for an exact assignment replay.

**Type I error and size.** A type I error rejects at a parameter value in the null set. Size is the supremum (least upper bound) of rejection probabilities over the null set for the fixed testing rule; that bound need not be attained at a null parameter value.

**Wald interval.** An estimate plus or minus a normal critical value times a plug-in SE. In the proportion examples it is explicitly approximate and can fail badly near boundaries.

**Welch estimated standard error.** For two independent samples, \(\sqrt{s_1^2/n_1+s_2^2/n_2}\). The associated Welch degrees of freedom, interval, and test are approximations under the stated process model.

For the definitions in context, follow the chapters from [From a Question to a Row](question-row-estimand.md) through [Capstone](capstone.md). Original glossary prose is Math Atlas material released under CC BY-SA 4.0.

## Additional model and table terms

**Multiple regression.** A fitted response formula with several predictor terms. Each coefficient is interpreted with the other included terms fixed, subject to identifiability and available predictor overlap. See multiple-regression.

**Interaction.** A term making a fitted predictor contrast depend on another predictor or category. A category-by-length interaction changes slopes, not only intercepts.

**Logistic probability.** A modeled binary-event probability obtained by applying the inverse logit to a real-valued score. Odds, probability and log-odds are distinct scales. See logistic-regression.

**Evaluation leakage.** Using evaluation responses to fit, select or tune the procedure whose performance is then reported on those same responses.

**ANOVA decomposition.** The algebraic split of total squared variation into between-group and within-group sums of squares. An F reference distribution additionally requires its stated probability-model conditions. See categorical-data-chi-square-anova.
