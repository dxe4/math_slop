
# Introduction to probability

<!-- euler-course-route -->

## Current course route

Use the [current chapter syllabus](#/courses/atlas-probability-models) for the ordered readings, preparation courses and exercises. The earlier explanations and worked tasks below retain their original identities and remain available for study and saved work.

Probability does not begin with a formula. It begins with a model: what can happen, what information is available, which outcomes are treated symmetrically, and which assumptions are idealizations.

**Study route.** Use six 60-minute meetings for the modules below and two further hours for the modeling laboratory and capstone. At each meeting, first draw or enumerate a model, then calculate, then change one assumption and recalculate. [Chance Before Formulas](../articles/chance-before-formulas.md) repairs counting language; [Bayesian Inference from Scratch](../articles/bayes-from-scratch.md) supplies a second account of conditioning. The [Bayesian inference lab](../apps/atlas/index.html#/labs?lab=visual-lab-bayesian-inference) helps you see reweighting. After the course, the working [Probability: Models and Proofs](#/books/probability-models-proofs) manuscript develops measure-based and proof-led depth. Do not treat a simulation or a successful story as evidence that a probability model is uniquely correct.

### Entry diagnostic

1. List the ordered outcomes of two coin flips.
2. If 30 of 100 equally likely tickets win, state the win probability.
3. Compute the mean of $2,4,9$.
4. Explain why “the outcomes look random” does not imply that they are
   independent or equally likely.

The answers are $HH,HT,TH,TT$; $0.3$; $5$; and randomness language does not
specify a sample space, probability law, or dependence structure. Repair
fractions and finite counting before Module 1 if the calculations are
uncertain.

| Stage | Modules | Sustained reading | Evidence |
| --- | --- | --- | --- |
| 1. Events and information | 1–2 | [Event models](../books/probability-models-proofs/event-models-and-axioms.md), [conditioning and Bayes](../books/probability-models-proofs/counting-conditioning-and-bayes.md), and [independence](../books/probability-models-proofs/independence-and-product-models.md) | Sample-space audit and conditional tree |
| 2. Variables and moments | 3–4 | [Random variables](../books/probability-models-proofs/random-variables-laws-and-transforms.md), [expectation](../books/probability-models-proofs/expectation-integration-and-moments.md), and [covariance](../books/probability-models-proofs/covariance-regression-and-inequalities.md) | Distribution table and indicator-variable derivation |
| 3. Simulation and inference | 5–6 | [Monte Carlo](../books/probability-models-proofs/monte-carlo-and-randomized-estimation.md) and [the inference bridge](../books/probability-models-proofs/sampling-laws-and-inference-bridge.md) | Reproducible simulation with uncertainty statement |
| 4. Synthesis | Laboratory, cumulative practice, capstone | [Counterexamples and capstones](../books/probability-models-proofs/counterexample-atlas-and-capstones.md) | Diagnostic-claim audit |

## Module 1 — Sample spaces and events

A sample space $\Omega$ lists possible elementary outcomes. An event is a subset of $\Omega$. Probability obeys:

1. $P(A)\ge 0$;
2. $P(\Omega )=1$;
3. probabilities of disjoint events add.

When a finite sample space has equally likely outcomes,

$P(A)=|A|/|\Omega |$.

The equality assumption needs justification. With two dice, the 36 ordered pairs are equally likely, but the eleven possible sums are not. Sum 7 has six representations; sum 2 has one.

### Complement and inclusion-exclusion

Often “at least one” is easier through its complement:

$P(\text{at least one success})=1-P(\text{no successes})$.

For any events $A,B$,

$P(A\cup B)=P(A)+P(B)-P(A\cap B)$.

The intersection is subtracted because it was counted twice.

### Modeling audit

Before calculating, write:

- the elementary outcome;
- why outcomes are or are not equally likely;
- whether order matters;
- whether trials are independent;
- what would make the model fail in reality.

## Module 2 — Conditioning changes the universe

Conditional probability restricts attention to cases where $B$ occurred:

$P(A|B)=P(A\cap B)/P(B)$, provided $P(B)>0$.

The denominator renormalizes the reduced sample space.

### A family example

A family has two children, and—within the toy model—each child is independently equally likely to be a boy or girl. Given at least one is a girl, the remaining equally likely ordered possibilities are $GG, GB, BG$; therefore the chance both are girls is $1/3$.

If instead you meet one randomly selected child and observe a girl, the information protocol differs, and so may the answer. Conditioning includes how information was generated.

### Independence

Events are independent when

$P(A\cap B)=P(A)P(B)$,

equivalently $P(A|B)=P(A)$ when probabilities are nonzero. Independence is a model claim, not a synonym for “unrelated-looking.” Mutually exclusive positive-probability events are dependent: observing one makes the other impossible.

### Bayes’ rule

Bayes reverses a condition:

$P(H|E)=P(E|H)P(H)/P(E)$.

For competing hypotheses $H_{i}$,

$P(E)=\sum P(E|H_{i})P(H_{i})$.

Prior probability and false positives matter. A 90%-sensitive test can yield a low posterior when a condition is rare.

### Odds form

Posterior odds equal prior odds times the likelihood ratio:

$P(H\mid E)/P(H^c\mid E) = [P(H)/P(H^c)] \cdot [P(E\mid H)/P(E\mid H^c)]$.

This separates prior prevalence from evidential strength.

## Module 3 — Random variables and distributions

A random variable $X$ is a function from outcomes to numbers. Its distribution records the probability assigned to numerical values or ranges.

For discrete $X$, the probability mass function is $p(x)=P(X=x)$. For continuous $X$, a density $f$ satisfies

$P(a\le X\le b)=\int_{a}^{b} f(x)dx$.

A density value can exceed 1; probability is area. For a continuous variable, a single point has probability zero even though one value must be observed.

### Common mechanisms

- Bernoulli: one success/failure trial.
- Binomial: number of successes in a fixed number of independent equal-probability trials.
- Geometric: waiting time until first success.
- Poisson: event counts under a constant-rate independent-increment idealization.
- Exponential: waiting time with a memoryless constant hazard.
- Normal: an additive fluctuation model and limiting approximation for many standardized sums.

Choose a distribution because its mechanism fits, not because its curve is familiar.

### Transformations

If $Y=g(X)$, derive its distribution by mapping events. For monotone $g$, cumulative distributions are often safest:

$P(Y\le y)=P(g(X)\le y)$.

Be careful when multiple x-values map to one y-value; densities then collect contributions from every inverse branch.

## Module 4 — Expectation, variance, and covariance

Expectation is a probability-weighted average:

$E[X]=\sum xP(X=x)$ or $\int xf(x)dx$.

It need not be a possible observed value. It describes long-run average under repeated model realizations and acts as a linear operator:

$E[aX+bY]=aE[X]+bE[Y]$,

with no independence requirement.

### Indicator variables

For event $A$, let $I_A$ be 1 when $A$ occurs and 0 otherwise. Then $E[I_A]=P(A)$. Counting variables can often be written as sums of indicators, turning a hard distribution problem into easy marginal probabilities.

Example: the expected number of fixed points in a uniformly random permutation of $n$ objects is 1. Each position has probability $1/n$ of being fixed; sum $n$ indicator expectations.

### Variance

$\operatorname{Var}(X)=E[(X-E[X])^{2}]=E[X^{2}]-E[X]^{2}$.

Scaling obeys $\operatorname{Var}(aX+b)=a^{2}\operatorname{Var}(X)$. For sums,

$\operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)+2\operatorname{Cov}(X,Y)$.

Variances add when covariance is zero. Independence implies zero covariance when moments exist, but zero covariance does not generally imply independence.

### A portfolio interpretation

For returns $X,Y$, the mean of $aX+bY$ is linear, while risk includes covariance. Combining assets can reduce variance when they do not move together. This mathematical fact is not a guarantee about future covariances; it inherits the model used to estimate them.

## Module 5 — Simulation as a reasoning instrument

Simulation can test intuition, approximate a difficult probability, and expose bugs. It does not prove a general theorem, and it cannot repair a wrong model.

A responsible simulation reports:

1. the pseudo-random experiment;
2. the estimator;
3. the number of independent runs;
4. Monte Carlo uncertainty;
5. at least one case with a known answer;
6. seed or reproducibility details.

For an event probability $p$, the sample proportion from $N$ independent trials has standard deviation $\sqrt{p(1-p)/N}$, at most $1/(2\sqrt{N})$. Gaining one extra decimal digit usually costs about 100 times as many samples.

### Monte Carlo integration

If $U$ is uniform on $[a,b]$, then

$\int_{a}^{b} f(x)dx = (b-a)E[f(U)]$.

Average $f(U_{i})$ over random samples. This converges slowly in one dimension compared with good quadrature, but its error rate is much less sensitive to dimension, making it valuable in high-dimensional problems.

## Module 6 — From probability to inference

Inference reverses a generative model: data are observed, while parameters or latent structure are unknown.

Three questions must remain distinct:

- **Estimation:** Which parameter values fit, and with what uncertainty?
- **Prediction:** How well will new observations be predicted?
- **Causation:** What would change under an intervention?

A narrow confidence interval does not address model misspecification, biased sampling, measurement error, multiple testing, or confounding.

### Likelihood

Given parameter $\theta$ and observed data $x$, the likelihood is the model probability or density of $x$, viewed as a function of $\theta$. Maximum likelihood chooses the parameter making observed data most compatible under the stated model.

Likelihood is not $P(\theta |data)$; the latter requires a probability model for $\theta$, as in Bayesian inference.

### Capstone — Audit a diagnostic claim

Choose a published or hypothetical screening scenario. Specify prevalence, sensitivity, and specificity. Then:

1. calculate posterior probability after a positive result using both a tree and Bayes’ formula;
2. vary prevalence over a plausible range;
3. calculate the effect of a second test under explicit dependence assumptions;
4. identify selection and measurement mechanisms the simple model omits;
5. write a plain-language conclusion that separates model output from medical advice.

## Practice

Complete the `probability-modeling` exercise set. After each answer, name the sample space and the assumption on which the calculation is most fragile.

## Worked modeling laboratory — two dice, two questions

Roll two distinguishable fair six-sided dice. Record the ordered pair $(d_1,d_2)$, so the sample space has 36 equally likely outcomes. Let $A$ mean “the sum is 7,” and $B$ mean “at least one die shows 6.” The event $A$ has six outcomes; $B$ has $6+6-1=11$, because $(6,6)$ was counted twice. Their intersection is $(1,6)$ and $(6,1)$, so

$$P(A\mid B)=\frac{2/36}{11/36}=\frac{2}{11},\qquad P(B\mid A)=\frac{2/36}{6/36}=\frac13.$$

The two conditional probabilities answer different questions. In the first, the reference group is the eleven outcomes with a 6; in the second, it is the six outcomes summing to 7. Writing the denominator as a *count of the conditioned group* is a useful guard against reversing conditions.

Now change the physical experiment: one die is loaded. The same 36 pairs still describe possible outcomes, but they are no longer equally likely. The event definitions survive; the fractions by counting do not. This is why a sample space is only half a probability model.

**Try before reading:** If the dice are fair, are $A$ and $B$ independent? Since $P(A)=1/6$ while $P(A\mid B)=2/11$, they are not. The difference is modest, but independence is an exact equality, not a judgment that two events “seem unrelated.”

## A frequency table makes Bayes' rule visible

Suppose a screening condition is present in 2% of a model population, sensitivity is 90%, and the false-positive rate is 5%. For 10,000 comparable people, the model predicts 200 with the condition and 9,800 without it. The expected table is:

| Group | Positive | Negative | Total |
| --- | ---: | ---: | ---: |
| Condition present | 180 | 20 | 200 |
| Condition absent | 490 | 9,310 | 9,800 |
| Total | 670 | 9,330 | 10,000 |

Among positive results, $180/670\approx0.269$ come from the condition-present group. In symbols, the same result is

$$P(H\mid +)=\frac{0.90(0.02)}{0.90(0.02)+0.05(0.98)}.$$

The table makes the denominator concrete. It also makes the modeling boundary concrete: if people seek testing because of symptoms, the tested population's prevalence need not be 2%. The calculation is conditional on the stated population and test characteristics, not a medical conclusion.

## Expectation and dependence in one small experiment

Let $X$ and $Y$ be indicators that two coin flips show heads. If flips are independent and fair, $E[X+Y]=1$ and $\operatorname{Var}(X+Y)=1/2$. Suppose instead the second “flip” is just a copy of the first: $Y=X$. The mean is still 1, because expectation is linear without independence. But $X+Y$ is either 0 or 2 with equal probability, so its variance is 1. The extra $1/2$ is the $2\operatorname{Cov}(X,Y)$ term.

This example separates two facts often merged in memory: independence is unnecessary for *adding means*, but dependence matters for the uncertainty of a sum. It also explains why duplicating one measurement does not give the precision of two independent measurements.

## A reproducible simulation protocol

To estimate the chance that two fair dice sum to 7, generate $N$ independent ordered pairs and record the fraction of sums equal to 7. The exact answer $1/6$ is a benchmark for checking the simulation. At $N=3,600$, the model-based standard deviation of the fraction is

$$\sqrt{(1/6)(5/6)/3600}\approx0.0062.$$

Different random seeds should produce somewhat different estimates. An estimate of 0.167 is unsurprising; a stable estimate near 0.30 across many large runs suggests a bug or a different sampling rule. A simulation's agreement with $1/6$ is a diagnostic, not a proof that every line of code or every application model is right. If the dice are loaded, $1/6$ is no longer the benchmark.

## Cumulative practice with feedback

1. Two fair coins are tossed. Given that at least one is heads, find the chance both are heads. State the equally likely elementary outcomes.
2. For the screening table, calculate $P(+\mid H)$ and $P(H\mid +)$. Explain why the numbers differ.
3. A variable is 0 or 2 with equal probability. Find its mean and variance directly from the definition.
4. Give a pair of events with positive probability that are mutually exclusive. Can they be independent?
5. A simulation of a rare event reports zero occurrences in 100 runs. Does this prove the event impossible? State one defensible conclusion.

**Solutions.** (1) The ordered outcomes are $HH,HT,TH,TT$. After conditioning, $HH,HT,TH$ remain; one of three has two heads. (2) $P(+\mid H)=180/200=0.90$, while $P(H\mid +)=180/670\approx0.269$. The denominators describe different reference groups. (3) $E[X]=1$ and $E[X^2]=2$, so $\operatorname{Var}(X)=2-1^2=1$. (4) On a fair die, “roll 1” and “roll 2” each have probability $1/6$ but their intersection is empty. Their product probability is $1/36>0$, so they are dependent. (5) No. Zero observations is compatible with a small positive event probability; under an independent Bernoulli model, the probability of zero in 100 runs is $(1-p)^{100}$. The data may put pressure on large values of $p$, but model and sample size must be stated.

If you reversed the two conditional probabilities in 2, redraw the table and circle the group named *after* the vertical bar. If you added variances in the copied-flip example, revisit covariance. If you treated zero simulated occurrences as impossibility, distinguish a numerical observation from a theorem before moving to inference.
