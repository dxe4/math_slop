var e=`---
parent_id: book-principles-statistical-inference
chapter_id: tests-errors-and-power
title: "Tests, Error Control, and Power"
level: advanced-undergraduate
estimated_minutes: 255
license: CC BY-SA 4.0
---

# Tests, Error Control, and Power {#section-1-tests-error-control-and-power}

A statistical test is a decision rule whose errors are calibrated under a declared experiment. It does not prove a hypothesis, assign a probability to a fixed hypothesis, or measure scientific importance. It controls how often a specified rejection rule would act under specified data-generating states.

This chapter builds tests from actions, defines size and power for simple and composite hypotheses, proves the calibration property of valid p-values, and derives exact binomial and normal tests. The decision-theory chapter supplies losses and risks; the likelihood chapter supplies evidence statistics. The next chapter asks when one calibrated test is most powerful.

<a id="section-5-1-a-test-is-a-possibly-randomised-decision-rule"></a>
## 1. A test is a possibly randomised decision rule {#section-7-1-a-test-is-a-possibly-randomised-decision-rule}

Let \${P_\\theta :\\theta \\in \\Theta }$ be a statistical experiment. A hypothesis divides the parameter space into a null set $\\Theta _0$ and an alternative set $\\Theta _1$, usually disjoint. We write

$H_0:\\theta \\in \\Theta _0$ against $H_1:\\theta \\in \\Theta _1$.

A **test function** is a measurable map $\\phi :X\\to [0,1]$. After observing $X=x$, the procedure rejects with probability $\\phi (x)$. A nonrandomised test has only values zero and one. Intermediate values allow exact calibration when a discrete sample space has no rejection region of precisely the desired probability.

The rejection probability at state $\\theta $ is the **power function**

$\\beta _\\phi (\\theta )=E_\\theta [\\phi (X)]$.

For $\\theta \\in \\Theta _0$, this is a Type I error probability. For $\\theta \\in \\Theta _1$, $1-\\beta _\\phi (\\theta )$ is the Type II error probability at that state.

The **size** is the worst null rejection probability

$size(\\phi )=\\sup_{\\theta \\in \\Theta _0} \\beta _\\phi (\\theta )$.

A level-$\\alpha $ test satisfies $size(\\phi )\\le \\alpha $. Equality need not hold. In a composite null, checking one convenient null value is insufficient unless a theorem shows it is least favourable.

<a id="section-25-why-randomisation-is-part-of-the-definition"></a>
### Why randomisation is part of the definition {#section-27-why-randomisation-is-part-of-the-definition}

Suppose a discrete statistic has null tail probabilities $0.03$ above a boundary and $0.07$ at or above it. Reject above the boundary and reject at the boundary with probability $\\gamma $. The null rejection probability is

$0.03+\\gamma (0.07-0.03)$.

Choosing $\\gamma =1/2$ gives exact size $0.05$. A physical coin is unnecessary: a predeclared pseudorandom draw can implement the rule. Refusing randomisation is operationally reasonable in some settings, but then exact finite-sample size may be impossible.

<a id="section-33-2-error-probabilities-are-indexed-by-states"></a>
## 2. Error probabilities are indexed by states {#section-35-2-error-probabilities-are-indexed-by-states}

There is not one universal Type II error. Power is a function across alternatives. A test can have excellent power against large effects and almost no power against alternatives close to the null.

Under zero-one testing losses, with cost $c_0$ for rejecting a true null and $c_1$ for failing to reject a false null, the risk is

$R(\\theta ,\\phi )=c_0\\beta _\\phi (\\theta )$ for $\\theta \\in \\Theta _0$,

and

$R(\\theta ,\\phi )=c_1[1-\\beta _\\phi (\\theta )]$ for $\\theta \\in \\Theta _1$.

Classical level-$\\alpha $ testing constrains the first risk and then compares the second. The asymmetry is a design choice: it gives null states priority protection. It is not a theorem that every real decision should use $\\alpha =0.05$ or treat the two errors asymmetrically.

<a id="section-47-failure-to-reject-is-not-acceptance"></a>
### Failure to reject is not acceptance {#section-49-failure-to-reject-is-not-acceptance}

If power at a scientifically important alternative is only $0.20$, failure to reject occurs with probability $0.80$ there. A nonrejection can therefore mean either compatibility with the null or an insensitive experiment. An equivalence claim requires an equivalence or noninferiority design with a declared margin, not merely a large p-value from a difference test.

<a id="section-51-3-exact-upper-tail-binomial-tests"></a>
## 3. Exact upper-tail binomial tests {#section-53-3-exact-upper-tail-binomial-tests}

Let $S=\\sum _iX_i\\sim Binomial(n,p)$. To test

$H_0:p\\le p_0$ against $H_1:p>p_0$,

large values of $S$ are evidence in the alternative direction. For an integer cutoff $c$, define $\\phi _c=1_{S\\ge c}$. Its power is

$\\beta _c(p)=P_p(S\\ge c)=\\sum _{s=c}^n \\binom{n}{s}p^s(1-p)^{n-s}$.

<a id="section-61-the-null-boundary-is-least-favourable"></a>
### The null boundary is least favourable {#section-63-the-null-boundary-is-least-favourable}

Couple Bernoulli observations using independent $U_i\\sim Uniform(0,1)$ and set $X_i(p)=1_{U_i\\le p}$. If $p\\le q$, then $X_i(p)\\le X_i(q)$ for every outcome, hence $S(p)\\le S(q)$. Therefore $P_p(S\\ge c)\\le P_q(S\\ge c)$. The size over $p\\le p_0$ is attained at $p_0$.

Choose the smallest $c$ with $P_{p_0}(S\\ge c)\\le \\alpha $. This gives a nonrandomised level-$\\alpha $ test. To obtain exact size when $P_{p_0}(S\\ge c)<\\alpha <P_{p_0}(S\\ge c-1)$, reject for $S\\ge c$ and reject with probability

\\[\\gamma =[\\alpha -P_{p_0}(S\\ge c)]/P_{p_0}(S=c-1)\\]

when $S=c-1$.

<a id="section-71-worked-finite-experiment"></a>
### Worked finite experiment {#section-73-worked-finite-experiment}

**Worked example 8.1.**

Take $n=10$, $p_0=1/2$, and reject when $S\\ge 9$. Under the boundary null,

$P(S\\ge 9)=[\\binom{10}{9}+\\binom{10}{10}]/2^{10}=11/1024\\approx 0.0107$.

Rejecting at $S=8$ as well would raise the probability to

$[45+10+1]/1024=56/1024\\approx 0.0547$.

An exact $0.05$ test rejects for $S\\ge 9$ and at $S=8$ with probability

$\\gamma =(0.05-11/1024)/(45/1024)\\approx 0.8933$.

The arithmetic reports what is exact under the binomial experiment. Dependence, adaptive stopping, or a changed success definition changes the calibration.

<a id="section-89-4-normal-mean-tests-expose-the-power-geometry"></a>
## 4. Normal mean tests expose the power geometry {#section-91-4-normal-mean-tests-expose-the-power-geometry}

**Worked example 8.2.**

Let $X_1,\\dots,X_n$ be iid $Normal(\\mu ,\\sigma ^{2})$ with known $\\sigma $. To test

$H_0:\\mu \\le \\mu _0$ against $H_1:\\mu >\\mu _0$,

define

$Z=\\sqrt{n}(\\bar{X}-\\mu _0)/\\sigma $.

Under $\\mu =\\mu _0$, $Z\\sim Normal(0,1)$. Reject when $Z>z_{1-\\alpha }$, the standard-normal $1-\\alpha $ quantile. Because the rejection probability increases with $\\mu $, the boundary is least favourable and the test has size $\\alpha $.

At a general $\\mu $, write $Z=Z_0+\\sqrt{n}(\\mu -\\mu _0)/\\sigma $ with $Z_0\\sim Normal(0,1)$. Thus

$\\beta (\\mu )=1-\\Phi [z_{1-\\alpha }-\\sqrt{n}(\\mu -\\mu _0)/\\sigma ]$.

Power depends on the standardised separation $\\sqrt{n}(\\mu -\\mu _0)/\\sigma $, not on sample size or raw effect alone.

<a id="section-109-sample-size-from-desired-power"></a>
### Sample size from desired power {#section-111-sample-size-from-desired-power}

Suppose the test should have power at least $1-\\beta $ when $\\mu =\\mu _0+\\Delta $, with $\\Delta >0$. The requirement

\\[1-\\Phi [z_{1-\\alpha }-\\sqrt{n}\\Delta /\\sigma ]\\ge 1-\\beta \\]

is equivalent to

$\\sqrt{n}\\Delta /\\sigma \\ge z_{1-\\alpha }+z_{1-\\beta }$.

Therefore it suffices to take

\\[n\\ge [\\sigma (z_{1-\\alpha }+z_{1-\\beta })/\\Delta ]^{2}\\]

and round upward. This calculation is conditional on the normal model, known $\\sigma $, predeclared one-sided direction, and the chosen meaningful effect $\\Delta $.

<a id="section-125-5-two-sided-tests-divide-rejection-probability-between-"></a>
## 5. Two-sided tests divide rejection probability between directions {#section-127-5-two-sided-tests-divide-rejection-probability-between-}

For $H_0:\\mu =\\mu _0$ against $\\mu \\ne \\mu _0$, the equal-tail normal test rejects when

$|Z|>z_{1-\\alpha /2}$.

Its null rejection probability is $\\alpha $. At mean $\\mu $, with $\\delta =\\sqrt{n}(\\mu -\\mu _0)/\\sigma $, power is

$P(Z_0+\\delta >z_{1-\\alpha /2})+P(Z_0+\\delta <-z_{1-\\alpha /2})$.

Using $\\alpha /2$ in each direction raises the critical magnitude relative to a predeclared one-sided test. Choosing direction after seeing the sign and then reporting a one-sided p-value does not retain the predeclared one-sided calibration; it effectively searches two directions.

Two-sided alternatives also introduce an optimality difficulty. A test concentrating rejection in the upper tail gains power for positive shifts but loses it for negative shifts. Without symmetry, unbiasedness, invariance, or another restriction, a uniformly most powerful test need not exist.

<a id="section-139-6-a-valid-p-value-is-a-calibrated-random-variable"></a>
## 6. A valid p-value is a calibrated random variable {#section-141-6-a-valid-p-value-is-a-calibrated-random-variable}

A statistic $p(X)\\in [0,1]$ is a **valid p-value** for null set $\\Theta _0$ if

\\[P_\\theta (p(X)\\le u)\\le u\\]

for every $\\theta \\in \\Theta _0$ and every $u\\in [0,1]$. This property is called super-uniformity. Equality for every $u$ is not required; discreteness often makes p-values conservative.

<a id="section-147-calibration-theorem"></a>
### Calibration theorem {#section-149-calibration-theorem}

If $p(X)$ is valid, the rule that rejects when $p(X)\\le \\alpha $ has level $\\alpha $.

**Proof.** For every $\\theta \\in \\Theta _0$, validity with $u=\\alpha $ gives

$P_\\theta (p(X)\\le \\alpha )\\le \\alpha $.

Taking the supremum over null states proves the size bound. ∎

For the upper-tail binomial test, a natural p-value is

$p(x)=\\sup_{p\\le p_0}P_p(S\\ge S(x))=P_{p_0}(S\\ge S(x))$,

where monotonicity gives the equality. It is valid but typically not exactly uniform.

<a id="section-163-a-p-value-is-not-a-posterior-probability"></a>
### A p-value is not a posterior probability {#section-165-a-p-value-is-not-a-posterior-probability}

The event \${p(X)\\le 0.03}$ is calibrated across repetitions under null laws. The observed number $0.03$ is not $P(H_0|X=x)$, does not give the probability that a replication will reject, and does not measure effect size. Those quantities require different models and questions.

<a id="section-167-7-nested-tests-generate-p-values"></a>
## 7. Nested tests generate p-values {#section-169-7-nested-tests-generate-p-values}

Suppose \${\\phi _u:0\\le u\\le 1}$ is a nested family of nonrandomised tests: each has level $u$, and its rejection region grows as $u$ grows. Define

$p(x)=\\inf{u:\\phi _u(x)=1}$,

with infimum one if the set is empty. Under mild right-continuity, \${p(X)\\le u}$ is the rejection event for the level-$u$ test, so

\\[P_\\theta (p(X)\\le u)\\le u\\]

for every null state. Thus the p-value records the smallest level in a coherent nested family at which the data would be rejected.

Arbitrary collections of tests need not be nested and need not define one coherent p-value. Likewise, trying many statistics and reporting only the smallest nominal p-value changes its null distribution.

<a id="section-181-8-composite-nulls-require-uniform-calibration"></a>
## 8. Composite nulls require uniform calibration {#section-183-8-composite-nulls-require-uniform-calibration}

For $H_0:\\theta \\in \\Theta _0$, a tail probability computed at one $\\theta _0$ is valid for the whole null only when that state dominates the rejection probability or another uniform argument applies.

Three common strategies are:

1. find a least-favourable null state and calibrate there;
2. take a supremum of statewise tail probabilities;
3. condition on a statistic that removes the nuisance parameter under the null.

Supremum calibration is safe but can be conservative. Plugging in a nuisance estimate and acting as though it were fixed is not automatically finite-sample valid. Later likelihood and resampling chapters derive approximations under additional conditions; they do not turn an unproved plug-in tail into an exact test.

<a id="section-193-9-power-significance-and-scientific-scale-are-separate"></a>
## 9. Power, significance, and scientific scale are separate {#section-195-9-power-significance-and-scientific-scale-are-separate}

With a large enough sample, a tiny departure can be detected with high probability. With a noisy small sample, an important departure can be missed. A complete report therefore separates:

- the target and scientifically meaningful effect scale;
- the estimate and uncertainty procedure;
- the test's null calibration;
- the power curve or detectable effects;
- model and design sensitivity.

Statistical significance answers whether a particular calibrated statistic crossed a threshold. It does not answer whether the effect is important, whether assumptions are plausible, or whether a causal interpretation is identified.

<a id="section-205-10-stopping-and-selection-belong-to-the-experiment"></a>
## 10. Stopping and selection belong to the experiment {#section-207-10-stopping-and-selection-belong-to-the-experiment}

A fixed-sample p-value is calibrated for its fixed-sample observation law. Repeatedly checking after each observation and stopping at the first small value creates a different event. Similarly, testing twenty outcomes and reporting the smallest p-value is a different procedure from testing one predeclared outcome.

It is possible to design valid sequential and multiple-testing procedures, but their guarantees use the full stopping or selection rule. “The data were collected until significance” is not a harmless narrative detail; it changes the experiment specified in Chapter 1.

<a id="section-211-11-testing-audit"></a>
## 11. Testing audit {#section-213-11-testing-audit}

Before accepting an error-control claim, ask:

1. What are $\\Theta _0$ and $\\Theta _1$, including boundaries and nuisance states?
2. What observation, stopping, preprocessing, and selection law defines repetition?
3. Is the test randomised, and how are boundary outcomes handled?
4. Is $\\alpha $ a pointwise null probability or a supremum over the whole null?
5. What is the power function at scientifically relevant alternatives?
6. Is direction predeclared, and is the reported p-value from a nested family?
7. Are effect magnitude and uncertainty reported separately from rejection?
8. What model departures invalidate the calibration?

<a id="section-224-12-exercises-with-complete-solutions"></a>
## 13. Investigation: build a power and sensitivity atlas {#section-738-13-investigation-build-a-power-and-sensitivity-atlas}

Choose one exact finite-sample test and one large-sample or parametric analogue for the same estimand. State the experiment, null, direction, statistic, boundary randomisation, and meaningful effect sizes. Derive or enumerate size and power on a parameter grid; provide a table as the complete numerical alternative to any plot. Compare attainable discreteness, sample-size effects, and at least one misspecification such as overdispersion or dependence. Conclude with separate statements about calibration, sensitivity, effect magnitude, and scientific interpretation.

<a id="section-740-15-constructing-calibration-including-ties"></a>
## 15. Constructing calibration, including ties {#section-742-15-constructing-calibration-including-ties}

A useful way to learn testing is to build the rejection event before attaching a familiar name to it. Write down every random input, assign a probability to every outcome under a null law, and add the probabilities of the outcomes on which the rule rejects. This small calculation is the finite version of integrating a test function. It reveals why neither an impressive statistic nor a conventional significance threshold supplies calibration by itself.

To implement a measurable test function $\\phi $, introduce $U\\sim Uniform(0,1)$ independently of the observations under every state, and reject when $U\\le \\phi (X)$. Conditional on $X=x$, the rejection probability is $\\phi (x)$. Iterated expectation therefore gives $P_\\theta (U\\le \\phi (X))=E_\\theta \\phi (X)$. Independence is part of this argument. A number computed from the same observations is not automatically an auxiliary uniform variable, even if its histogram looks roughly flat.

The auxiliary draw does not supply additional evidence about $\\theta $. It allocates a fraction of a probability atom to rejection. Recording it makes the decision reproducible; predeclaring its use prevents an analyst from redrawing until the desired action occurs. A procedure that permits repeated redraws is a different procedure. For example, rejecting whenever one of two independent boundary draws succeeds changes boundary probability $\\gamma $ to $1-(1-\\gamma )^2$.

<a id="section-748-why-an-upper-tail-probability-is-super-uniform"></a>
### Why an upper-tail probability is super-uniform {#section-750-why-an-upper-tail-probability-is-super-uniform}

Here is a complete finite proof of the assertion used earlier. Let a statistic have distinct ordered values $t_1<\\cdots<t_m$ under a fixed null law $P_0$, with positive masses $a_j=P_0(T=t_j)$. Define $q_j=\\sum_{k=j}^m a_k$ and $q_{m+1}=0$. The upper-tail p-value at $t_j$ is $q_j$. The sequence $q_1,\\ldots,q_m$ decreases strictly.

Fix $u\\in [0,1]$. If no $q_j\\le u$, the event $\\{q(T)\\le u\\}$ is empty. Otherwise let $j_*$ be the first index with $q_{j_*}\\le u$. The event is exactly $\\{T\\ge t_{j_*}\\}$ and has probability $q_{j_*}\\le u$. This proves the required inequality for every threshold, including thresholds in gaps between attainable p-values. It does not merely check the conventional value $0.05$.

For $S\\sim Binomial(2,1/2)$, all the information is visible in a three-row table.

| Observed $s$ | Null mass $P_0(S=s)$ | Upper-tail p-value $P_0(S\\ge s)$ |
| --- | --- | --- |
| $0$ | $1/4$ | $1$ |
| $1$ | $1/2$ | $3/4$ |
| $2$ | $1/4$ | $1/4$ |

At threshold $u=1/5$, rejection never occurs. At $u=1/4$, rejection occurs with probability $1/4$. At $u=1/2$, it still occurs with probability $1/4$. The flat portions are a consequence of observing only three possible statistic values. They are not numerical defects to be repaired by rounding the p-value.

For the composite binomial null $p\\le p_0$, compute the tail using the boundary law. The coupling already proved in this chapter makes $S(p)\\le S(p_0)$ on one common probability space. A boundary-tail p-value is nonincreasing in the observed sum, so $q(S(p))\\ge q(S(p_0))$. Consequently the event that the former is at most $u$ is contained in the corresponding boundary event. The simple-null proof therefore extends to every null state. This step is the uniform-calibration argument; omitting it would establish only pointwise validity.

<a id="section-766-randomised-tails-fill-the-gaps"></a>
### Randomised tails fill the gaps {#section-768-randomised-tails-fill-the-gaps}

For the finite law above, define

\\[
p^\\dagger(t_j,U)=q_{j+1}+Ua_j.
\\]

Conditional on $T=t_j$, this is uniform on the interval from $q_{j+1}$ to $q_j$. That interval has length $a_j$, exactly the probability of choosing it. The intervals partition $[0,1]$ apart from endpoints of probability zero. On each interval the unconditional density is $a_j/a_j=1$, so $p^\\dagger(T,U)$ is uniform on $[0,1]$ under $P_0$.

This construction also explains boundary randomisation without a separate recipe. If $q_{j+1}<\\alpha <q_j$, all observations above $t_j$ reject, all below it do not reject, and at $t_j$ rejection occurs when $U\\le (\\alpha -q_{j+1})/a_j$. The resulting probability is exactly $\\alpha $. Equality at an interval endpoint gives the same size because the independent uniform variable has no point masses.

For a binomial boundary distribution, the randomised p-value remains nonincreasing in $s$ for each fixed $U$. Indeed, writing its mass at $s$ as $a_s$, the difference between the values at consecutive sums is $(1-U)a_{s+1}+Ua_s\\ge 0$. The same coupling thus proves super-uniformity throughout $p\\le p_0$, with exact uniformity at the boundary. This is a property of this declared family and ordering, not permission to randomise an arbitrary invalid p-value into validity.

The frequently used mid-p replacement chooses $U=1/2$ deterministically. It can improve numerical resolution while losing the level guarantee. In the table above its value at $S=2$ is $1/8$. Thus $P_0(p_{\\mathrm{mid}}\\le 1/8)=1/4>1/8$. Averaging the endpoints of an atom does not create an independent uniform draw. A report may discuss a mid-p procedure, but it must not claim the super-uniform theorem just proved for another procedure.

<a id="section-782-16-reading-power-as-a-property-of-an-experiment"></a>
## 16. Reading power as a property of an experiment {#section-784-16-reading-power-as-a-property-of-an-experiment}

Power belongs to a complete pair: an observation law and a decision rule. Holding the printed formula fixed while changing dependence, stopping, eligibility, or measurement does not hold the experiment fixed. This distinction matters even when two experiments have the same marginal mean and the same number of recorded rows.

A simple variance calculation diagnoses one danger. Suppose $X_1,\\ldots,X_n$ are Bernoulli variables with success probability $p$, and every distinct pair has covariance $\\rho p(1-p)$. Such a model is assumed to exist for the chosen $\\rho $; not every proposed covariance matrix defines a Bernoulli law. Expanding the variance gives

\\[
\\operatorname{Var}(\\bar X)
=\\frac{p(1-p)}{n}\\{1+(n-1)\\rho \\}.
\\]

There are $n$ variance terms and $n(n-1)$ ordered covariance terms in the double sum. The usual independent standard error drops the second group. With positive dependence that omission makes the stated noise scale too small. The factor is informative, but matching a variance does not determine a tail probability; an exact size claim still needs the joint law.

A transparent extreme case sets every $X_i=B$ for one Bernoulli variable $B$. There are $n$ records but one random success indicator. The sample mean equals $B$, and its variance stays $p(1-p)$ however many times the record is repeated. A calculation based on $\\sqrt n$ independent information can then promise power gains that the experiment does not contain. The finite reference model below calculates the resulting rejection probabilities directly rather than treating this variance warning as a complete answer.

Under the known-variance normal model, the standardised shift $\\delta =\\sqrt n(\\mu -\\mu _0)/\\sigma $ summarizes a different, explicitly independent experiment. For a fixed positive separation, $\\delta $ grows without bound as $n$ increases, so the one-sided power tends to one. The null size remains $\\alpha $. These two statements do not conflict: they concern different parameter states.

If instead the alternative changes with the experiment according to $\\mu _n=\\mu _0+h\\sigma /\\sqrt n$, then $\\delta =h$ for every $n$, and power is exactly $1-\\Phi (z_{1-\\alpha }-h)$. A larger sample does not force this moving sequence of increasingly small alternatives to become certain discoveries. This elementary normal calculation is a first example of a local alternative. It explains why an asymptotic theorem must specify whether the state is fixed or varies with $n$.

The sample-size equation also needs an operational reading. The meaningful separation $\\Delta $ is supplied by the scientific decision, not estimated by choosing the most favourable observed effect after the study. The chosen $\\sigma $ and normal model require justification. Rounding the computed bound upward meets a conditional mathematical requirement; it does not protect against attrition, dependence, a changed outcome, or a direction selected after observation.

For a continuous statistic and a fixed alternative, making an upper-tail rejection region larger cannot reduce power, but it also spends more null probability. That elementary set inclusion is why a power comparison must hold level fixed. Comparing a size-$0.20$ rule with a size-$0.01$ rule and declaring the former more sensitive says little about their efficiency. The next chapter turns this constrained comparison into an optimisation theorem.

<a id="section-805-17-what-a-rejection-probability-can-support"></a>
## 17. What a rejection probability can support {#section-807-17-what-a-rejection-probability-can-support}

The distinction between a random p-value and an observed number is easiest to see by reconstructing the repeated experiment. Before sampling, $p(X)$ varies with $X$ and the event $\\{p(X)\\le \\alpha \\}$ has a null probability. After observing $x$, the reported $p(x)$ is a fixed number. It does not itself specify a probability distribution on the competing states.

One may introduce such a distribution explicitly, but that is an additional model. Suppose a hypothetical stream of studies independently draws a null case with probability $1-\\pi $ and one specified alternative case with probability $\\pi $. Suppose rejection probabilities are exactly $\\alpha $ in the null case and $b$ in the alternative case. Elementary conditioning then gives

\\[
P(\\text{alternative case}\\mid\\text{reject})
=\\frac{\\pi b}{\\pi b+(1-\\pi )\\alpha },
\\]

provided the denominator is positive. This is a probability within the declared mixture experiment, not a reinterpretation of each observed p-value as a posterior.

For instance, take $\\pi =1/100$, $b=4/5$, and $\\alpha =1/20$. The alternative-and-reject probability is $16/2000$, whereas the null-and-reject probability is $99/2000$. Among rejections the alternative fraction is therefore $16/115$, despite reasonably high power. If $\\pi =1/2$ with the same two rejection probabilities, the fraction is $16/17$. The threshold alone cannot determine either answer because it supplies neither the prevalence nor alternative power.

This example does not show that a rejection is useless. It shows exactly which missing quantities are needed for a particular conditional claim. With a composite alternative, $b$ would itself require an average over the declared alternative-state distribution. With heterogeneous null cases, the null rejection rate might be below the size bound. Substituting the bound for an actual mixture probability produces a bound or sensitivity calculation, not automatically an equality.

Nonrejection has a parallel limitation. A test designed to find large positive shifts may be insensitive to small or negative ones. To support an equivalence claim, declare a scientifically meaningful tolerance before data and control errors for the corresponding null of effects outside that tolerance. Merely exchanging the words “null” and “alternative” after a nonsignificant difference test changes the question without changing the procedure.

Error control and model criticism also answer distinct questions. A low tail probability under a fully specified observation law can signal a wrong mean, dependence, measurement contamination, or another model failure. The rejection region cannot identify which explanation produced the unusual record unless the surrounding model makes that distinction. Retaining design and measurement information is therefore useful even when a sufficient statistic computes the test.

Finally, a valid test does not convert a descriptive contrast into a causal effect. Random assignment, sampling, interference assumptions, and outcome definitions belong to identification. Testing acts on the resulting statistical experiment. Keeping those stages separate prevents a precisely calibrated answer to one question from being reported as an answer to a stronger one.


<a id="section-829-turning-an-equivalence-claim-into-its-own-test"></a>
### Turning an equivalence claim into its own test {#section-831-turning-an-equivalence-claim-into-its-own-test}

The warning that nonrejection is not equivalence should lead to a constructive alternative. Let $\\bar X\\sim Normal(\\mu ,\\sigma ^2/n)$ with known $\\sigma >0$, and suppose $\\mu $ is a contrast for which zero means no difference. Declare a tolerance $\\Delta >0$ before observing data. The equivalence alternative is $-\\Delta <\\mu <\\Delta $; its null is the union $\\{\\mu \\le -\\Delta \\}\\cup\\{\\mu \\ge \\Delta \\}$.

Take $0<\\alpha <1/2$ and write $c=z_{1-\\alpha }$ and $s=\\sigma /\\sqrt n$. Test the lower component null $\\mu \\le -\\Delta $ by rejecting when $\\bar X>-\\Delta +cs$. Test the upper component null $\\mu \\ge \\Delta $ by rejecting when $\\bar X<\\Delta -cs$. Declare equivalence only when both component tests reject. Equivalently, the observed interval from $\\bar X-cs$ to $\\bar X+cs$ must lie strictly inside the tolerance interval.

Why does this intersection rule have level at most $\\alpha $, rather than requiring an automatic split into $\\alpha /2$ and $\\alpha /2$? At a state with $\\mu \\le -\\Delta $, the equivalence event is contained in the rejection event for the lower component, whose probability is at most $\\alpha $. At a state with $\\mu \\ge \\Delta $, it is contained in the upper component's rejection event, also of probability at most $\\alpha $. Every state in the union null belongs to at least one of those components. The argument controls each null state individually; it does not add the probabilities of two rejection events at the same state.

The final rejection region is $-a<\\bar X<a$, where $a=\\Delta -cs$. If $a\\le 0$, it is empty and power is zero. Thus a study can be too noisy for this particular equivalence procedure ever to succeed, whatever value is observed. A nonsignificant difference test in such a study is especially poor support for equivalence.

When $a>0$, power at a general $\\mu $ is
\\[
\\Phi ((a-\\mu )/s)-\\Phi ((-a-\\mu )/s).
\\]
At the centre $\\mu =0$, this becomes $2\\Phi (\\Delta /s-c)-1$. Power increases as precision makes $\\Delta /s$ larger. At $\\mu =\\Delta $, the event is contained in $\\{\\bar X<\\Delta -cs\\}$, whose probability is $\\alpha $, but it is also constrained by the lower bound $-a$. Its probability can therefore be strictly smaller than $\\alpha $. The construction proves a level bound; it does not assert equality at every boundary.

There are three different questions in view. The original difference test asks whether the contrast departs from zero. This equivalence test asks whether it lies within a predeclared tolerance. A confidence procedure reports a family of uncertainty statements. Their answers can differ without contradiction because their nulls and rejection events differ. At high precision a small nonzero contrast can be both detectably different from zero and within the scientifically acceptable tolerance.

The interval used here has central normal coverage $1-2\\alpha $, not $1-\\alpha $. Its appearance follows from two one-sided cutoffs, and it should be labelled accordingly. The level proof above remains the reason the equivalence decision controls its union null. Substituting another standard error, choosing the tolerance after looking at the estimate, or using an approximate law changes the hypotheses needed for that proof. In particular, selecting a wide tolerance just large enough to enclose the observed interval does not inherit the predeclared procedure's interpretation.

<a id="section-849-18-from-a-test-family-to-an-auditable-report"></a>
## 18. From a test family to an auditable report {#section-851-18-from-a-test-family-to-an-auditable-report}

There is a useful converse to the slogan “a p-value is a small tail probability.” A p-value organizes a whole nested family of decisions. The nonrandomised tail proof gave rejection regions that grow only by adding more extreme observations. The randomised version fills each added atom using one fixed auxiliary draw. Reusing that draw across levels preserves nestedness; drawing a new coin independently for every requested level need not produce a coherent observed p-value.

Right-continuity in the earlier construction is a real mathematical condition. Consider the nested deterministic family $\\phi _u=1$ when $u>v$ for one fixed $v\\in (0,1)$, and zero otherwise, on a one-point sample space. It has an infimum rejection level $v$ but does not reject at $v$. This particular family is not level-$u$ for all $u<1$, so it is an illustration of the endpoint set identity, not a counterexample to calibration. The discrepancy demonstrates why an infimum definition alone does not establish $\\{p\\le u\\}=\\{\\phi _u=1\\}$ at the boundary.

For calibration without assuming exact event equality, one can use a decreasing sequence of levels. If tests are nested and each has level $v$, then, for $u<1$, $\\{p\\le u\\}$ is contained in every rejection region at level $u+\\varepsilon $ with $0<\\varepsilon \\le 1-u$, whenever the infimum construction has a nonempty rejection set below those levels. Taking probabilities gives at most $u+\\varepsilon $; letting $\\varepsilon $ decrease to zero gives at most $u$. At $u=1$ the bound is automatic. Right-continuity additionally identifies the precise attained rejection event and clarifies implementation.

An audit should retain both the rule and the numbers used to evaluate it. For a finite experiment, a complete table gives the observation masses, rejection probabilities, null size, and selected alternative powers. For a continuous experiment, the integral or distributional identity must be stated. Simulation can be helpful, but a simulated frequency and its Monte Carlo uncertainty are different from an exact identity.

A useful report therefore names the estimand and direction, describes the random inputs and sample size, states what was fixed before observation, and identifies the least-favourable null argument. It gives a meaningful alternative scale and records how model departures affect calibration. It also discloses whether randomness at a boundary was used. These statements let another reader reconstruct the rejection event; an isolated p-value usually does not.

<a id="section-861-19-reference-model-for-the-power-and-sensitivity-atlas"></a>
## 19. Reference model for the power and sensitivity atlas {#section-863-19-reference-model-for-the-power-and-sensitivity-atlas}

**Worked example 8.3.**

This is one complete synthetic instantiation of the open investigation in Section 13. It does not replace that prompt or require its particular choices in a learner's investigation. Every probability below is derived from a finite law; none is a reported simulation or an observed study.

Let $X_1,\\ldots,X_4$ be independent Bernoulli variables with parameter $p$, let $S=\\sum_iX_i$, and test $p\\le 1/2$ against $p>1/2$ at nominal level $1/8$. The meaningful alternatives in this illustrative design are $p=3/4$ and $p=1$; whether either is scientifically meaningful in an application requires that application's outcome definition.

Under $p=1/2$, $P(S=4)=1/16$ and $P(S=3)=4/16$. Reject at $S=4$, reject with probability $1/4$ at $S=3$, and otherwise do not reject. The auxiliary draw is independent. The rule is nondecreasing in $S$, so the binomial coupling makes the null boundary least favourable. Its power is

\\[
\\beta _4(p)=p^4+\\tfrac14\\,4p^3(1-p)=p^3.
\\]

For a declared large-sample analogue use the null-standardised score $Z=(S-2)/1$ and the normal upper-tail cutoff $z_{7/8}$. Since $1<z_{7/8}<2$, the resulting nonrandomised rule rejects only at $S=4$. Its actual finite power is $p^4$ and its finite size is $1/16$, not $1/8$. The normal approximation motivates a cutoff; the binomial calculation establishes its actual behaviour here.

For a sample-size comparison, use two independent trials and reject at $S_2=2$ with probability $1/2$. Its exact size is also $1/8$, and its power is $\\beta _2(p)=p^2/2$. All three rules and their entire grid calculations are therefore explicit.

| $p$ | Two-trial exact $p^2/2$ | Four-trial exact $p^3$ | Four-trial normal-score analogue $p^4$ |
| --- | --- | --- | --- |
| $0$ | $0$ | $0$ | $0$ |
| $1/4$ | $1/32$ | $1/64$ | $1/256$ |
| $1/2$ | $1/8$ | $1/8$ | $1/16$ |
| $3/4$ | $9/32$ | $27/64$ | $81/256$ |
| $1$ | $1/2$ | $1$ | $1$ |

For $p>1/2$, $p^3-p^2/2=p^2(p-1/2)>0$. This establishes the stated power gain for these particular exact rules at equal size. It is not a theorem comparing every procedure or every possible data-collection cost. Below the boundary their rejection probabilities need not be ordered in the same direction.

Now hold the four-trial decision rule fixed but change the observation law. If every recorded trial equals one shared $B\\sim Bernoulli(p)$, $S$ is either zero or four. Rejection probability is $p$; at the null boundary the actual size becomes $1/2$. The record has four entries but no independent replication.

A less extreme changed law draws $Q=p-d$ or $p+d$ with equal probability, then draws the four trials independently conditional on $Q$. Require $0\\le d\\le \\min(p,1-p)$. The marginal success probability remains $p$, but conditional expectation gives rejection probability $E(Q^3)=p^3+3pd^2$. At $p=1/2,d=1/4$ it is $7/32$, exceeding $1/8$. With $d=1/4$ on its admissible range $p\\in [1/4,3/4]$, this expression increases with $p$, so the changed composite null $p\\in [1/4,1/2]$ also has size $7/32$.

A complete changed-case reconstruction uses paired duplicates: draw independent $A,B\\sim Bernoulli(p)$ and record $(A,A,B,B)$. Then $S\\in \\{0,2,4\\}$, the old randomised boundary at three is unreachable, and rejection probability is $p^2$. Its size is $1/4$. To restore size $1/8$ under this changed law, reject at $S=4$ with probability $1/2$; the new power is $p^2/2$. This repairs this declared law, not every dependence model.

A public self-review can allocate four equally weighted checks: reconstruct the observation law and independent randomisation; derive all three original power formulas and grid entries; calculate both dependence failures and the changed-case repair; separate calibration, sensitivity, effect scale, and interpretation in the conclusion. These checks concern the submitted mathematics, not measured learner attainment. The main conclusion is conditional: the independent four-trial rule is exactly calibrated and more sensitive than the two-trial rule for the declared positive alternatives, while modestly changing the joint law can invalidate that guarantee.

<a id="section-897-20-optional-practice-extensions"></a>

## Summary

<a id="section-967-14-summary-and-forward-route"></a>
A test is a data-dependent rejection probability. Its size is a worst-case null rejection probability; its power is a function across alternatives. Exact discrete tests may require randomisation, and valid p-values are super-uniform null variables that generate level tests. Normal theory makes the effect–noise–sample-size tradeoff explicit. The next chapter holds level fixed and proves which rejection regions maximise power in simple experiments.

## Exercises {#section-226-12-exercises-with-complete-solutions}

<a id="section-226-1-power-function-of-a-randomised-test"></a>
### 1. Power function of a randomised test {#section-228-1-power-function-of-a-randomised-test}

**Exercise 8.1**

If $\\phi (X)=1/4$ for every observation, find its power function and size for any null set.

<details>
<summary>Hint 1</summary>

Take the expectation of a constant rejection probability.

</details>
<details>
<summary>Hint 2</summary>

The constant is the same at every state, so its supremum over a nonempty null remains unchanged.

</details>
<details>
<summary>Solution</summary>

**Solution.** $E_\\theta [\\phi (X)]=1/4$ for every $\\theta $, so the power function is constant $1/4$. Its supremum over any nonempty null set is also $1/4$. The rule ignores the data but is a valid level-$\\alpha $ test whenever $\\alpha \\ge 1/4$.

</details>

<a id="section-251-2-type-ii-error-is-state-dependent"></a>
### 2. Type II error is state-dependent {#section-253-2-type-ii-error-is-state-dependent}

**Exercise 8.2**

A test has power $\\beta (\\theta )=\\Phi (\\theta -2)$ for alternatives $\\theta >0$. Give the Type II error at $\\theta =1$ and $\\theta =3$.

<details>
<summary>Hint 1</summary>

Type II error is the complement of power at the specified alternative.

</details>
<details>
<summary>Hint 2</summary>

Substitute each theta separately and use normal symmetry to simplify the two complements.

</details>
<details>
<summary>Solution</summary>

**Solution.** Type II error is $1-\\beta (\\theta )$. At $1$ it is $1-\\Phi (-1)=\\Phi (1)$. At $3$ it is $1-\\Phi (1)=\\Phi (-1)$. The two alternatives have different error probabilities.

</details>

<a id="section-276-3-size-of-a-composite-null-test"></a>
### 3. Size of a composite-null test {#section-278-3-size-of-a-composite-null-test}

**Exercise 8.3**

If $\\beta (\\theta )=\\theta /10$ on $\\Theta _0=[0,2]$, find the size.

<details>
<summary>Hint 1</summary>

Maximise the displayed power function over the whole null interval.

</details>
<details>
<summary>Hint 2</summary>

Its slope is positive, so inspect the right endpoint.

</details>
<details>
<summary>Solution</summary>

**Solution.** The function increases on the null, so $\\sup_{0\\le \\theta \\le 2}\\theta /10=0.2$, attained at $\\theta =2$.

</details>

<a id="section-301-4-exact-boundary-randomisation"></a>
### 4. Exact boundary randomisation {#section-303-4-exact-boundary-randomisation}

**Exercise 8.4**

A rejection region has null probability $0.018$; adding a boundary atom of probability $0.064$ would include it fully. Find the boundary rejection probability for exact size $0.05$.

<details>
<summary>Hint 1</summary>

Keep the existing rejection probability and add only a fraction of the boundary atom.

</details>
<details>
<summary>Hint 2</summary>

Solve the linear equation 0.018+0.064 gamma=0.05 and check gamma lies between zero and one.

</details>
<details>
<summary>Solution</summary>

**Solution.** Solve $0.018+\\gamma (0.064)=0.05$, obtaining $\\gamma =0.032/0.064=1/2$.

</details>

<a id="section-326-5-binomial-monotonicity"></a>
### 5. Binomial monotonicity {#section-328-5-binomial-monotonicity}

**Exercise 8.5**

Use the uniform coupling to prove $P_p(S\\ge c)$ is nondecreasing in $p$.

<details>
<summary>Hint 1</summary>

Build all Bernoulli samples from the same independent uniforms.

</details>
<details>
<summary>Hint 2</summary>

Increasing p can only turn zeros into ones, so the upper-tail event is nested.

</details>
<details>
<summary>Solution</summary>

**Solution.** With common uniforms, $X_i(p)=1_{U_i\\le p}$ is pointwise nondecreasing in $p$; therefore so is $S(p)$. If $p\\le q$, the event \${S(p)\\ge c}$ is contained in \${S(q)\\ge c}$ under the coupling. Taking probabilities proves the claim.

</details>

<a id="section-351-6-a-binomial-tail"></a>
### 6. A binomial tail {#section-353-6-a-binomial-tail}

**Exercise 8.6**

For $S\\sim Binomial(5,1/2)$, calculate $P(S\\ge 4)$.

<details>
<summary>Hint 1</summary>

Add the binomial masses at four and five.

</details>
<details>
<summary>Hint 2</summary>

Their binomial coefficients are five and one, each divided by 2 to power five.

</details>
<details>
<summary>Solution</summary>

**Solution.** The probability is $[\\binom{5}{4}+\\binom{5}{5}]/2^5=(5+1)/32=3/16=0.1875$.

</details>

<a id="section-376-7-conservative-discreteness"></a>
### 7. Conservative discreteness {#section-378-7-conservative-discreteness}

**Exercise 8.7**

Why is rejection at $S=5$ in Exercise 6 a level-$0.05$ test, and what is its actual size?

<details>
<summary>Hint 1</summary>

Compute the probability of five successes at the boundary.

</details>
<details>
<summary>Hint 2</summary>

Use monotonicity for the composite null and compare the attained size with 0.05.

</details>
<details>
<summary>Solution</summary>

**Solution.** $P_{1/2}(S=5)=1/32=0.03125\\le 0.05$. Monotonicity makes $p=1/2$ least favourable for the null $p\\le 1/2$, so the size is $1/32$, below the nominal level.

</details>

<a id="section-401-8-randomise-the-five-trial-test"></a>
### 8. Randomise the five-trial test {#section-403-8-randomise-the-five-trial-test}

**Exercise 8.8**

For $H_0:p\\le 1/2$, reject when $S=5$ and randomise when $S=4$. Find the randomisation probability for size $0.05$.

<details>
<summary>Hint 1</summary>

Write the boundary-null rejection probability including both possible rejecting sums.

</details>
<details>
<summary>Hint 2</summary>

Solve 1/32+gamma times 5/32=0.05; the second mass is included fractionally.

</details>
<details>
<summary>Solution</summary>

**Solution.** Under $p=1/2$, probabilities are $1/32$ and $5/32$. Solve

$1/32+\\gamma (5/32)=0.05$,

so $\\gamma =(1.6-1)/5=0.12$.

</details>

<a id="section-430-9-normal-test-critical-mean"></a>
### 9. Normal-test critical mean {#section-432-9-normal-test-critical-mean}

**Exercise 8.9**

Express the one-sided known-variance rejection rule in terms of $\\bar{X}$.

<details>
<summary>Hint 1</summary>

Start from the definition of Z.

</details>
<details>
<summary>Hint 2</summary>

Multiply the critical inequality by the positive standard error and add the null mean.

</details>
<details>
<summary>Solution</summary>

**Solution.** $Z>z_{1-\\alpha }$ is equivalent to

$\\bar{X}>\\mu _0+\\sigma z_{1-\\alpha }/\\sqrt{n}$.

</details>

<a id="section-457-10-normal-power-at-the-null-boundary"></a>
### 10. Normal power at the null boundary {#section-459-10-normal-power-at-the-null-boundary}

**Exercise 8.10**

Substitute $\\mu =\\mu _0$ into the one-sided power formula.

<details>
<summary>Hint 1</summary>

Set the effect shift equal to zero.

</details>
<details>
<summary>Hint 2</summary>

The chosen upper normal quantile leaves exactly alpha probability in its upper tail.

</details>
<details>
<summary>Solution</summary>

**Solution.** The standardised shift is zero, so power is $1-\\Phi (z_{1-\\alpha })=\\alpha $, confirming boundary calibration.

</details>

<a id="section-482-11-effect-of-quadrupling-sample-size"></a>
### 11. Effect of quadrupling sample size {#section-484-11-effect-of-quadrupling-sample-size}

**Exercise 8.11**

How does the standardised shift change when $n$ is multiplied by four?

<details>
<summary>Hint 1</summary>

Track the square root of n in the noncentral shift.

</details>
<details>
<summary>Hint 2</summary>

The square root of four is two, while the effect and noise scale are unchanged.

</details>
<details>
<summary>Solution</summary>

**Solution.** The shift is $\\sqrt{n}(\\mu -\\mu _0)/\\sigma $. Replacing $n$ by $4n$ multiplies it by $\\sqrt{4}=2$; it does not multiply it by four.

</details>

<a id="section-507-12-sample-size-derivation"></a>
### 12. Sample-size derivation {#section-509-12-sample-size-derivation}

**Exercise 8.12**

With $\\sigma =2$, $\\Delta =1$, $z_{1-\\alpha }=1.645$, and $z_{1-\\beta }=0.842$, find the smallest integer meeting the displayed normal-theory bound.

<details>
<summary>Hint 1</summary>

Substitute the stated quantiles into the sample-size inequality.

</details>
<details>
<summary>Hint 2</summary>

Square 2 times 2.487 and round upward, because rounding downward can miss the required power.

</details>
<details>
<summary>Solution</summary>

**Solution.** The bound is

$n\\ge [2(1.645+0.842)]^{2}=4(2.487)^{2}\\approx 24.7407$.

Round upward to $n=25$.

</details>

<a id="section-536-13-two-sided-null-calibration"></a>
### 13. Two-sided null calibration {#section-538-13-two-sided-null-calibration}

**Exercise 8.13**

Why does $|Z|>z_{1-\\alpha /2}$ have probability $\\alpha $ under a standard normal null?

<details>
<summary>Hint 1</summary>

Split the absolute-value event into its two disjoint tails.

</details>
<details>
<summary>Hint 2</summary>

Normal symmetry allocates alpha/2 to each tail.

</details>
<details>
<summary>Solution</summary>

**Solution.** Symmetry gives probability $\\alpha /2$ in each tail. The tails are disjoint, so their probabilities add to $\\alpha $.

</details>

<a id="section-561-14-choosing-direction-after-observation"></a>
### 14. Choosing direction after observation {#section-563-14-choosing-direction-after-observation}

**Exercise 8.14**

Why is halving a two-sided p-value after inspecting the sign not generally a predeclared one-sided test?

<details>
<summary>Hint 1</summary>

Describe the rejection event over repeated experiments when the sign is selected.

</details>
<details>
<summary>Hint 2</summary>

Either sign can trigger a rejection; this differs from a direction fixed before observing data.

</details>
<details>
<summary>Solution</summary>

**Solution.** The selected direction is data-dependent. Across repetitions, either tail can be chosen, so the rejection event is the union of both directional events. Its probability is calibrated by the two-sided procedure, not by one fixed one-sided tail.

</details>

<a id="section-586-15-valid-p-values-imply-level-tests"></a>
### 15. Valid p-values imply level tests {#section-588-15-valid-p-values-imply-level-tests}

**Exercise 8.15**

Prove the calibration theorem for a composite null.

<details>
<summary>Hint 1</summary>

Apply the validity inequality separately at every null state.

</details>
<details>
<summary>Hint 2</summary>

Taking the supremum over null states preserves the common upper bound alpha.

</details>
<details>
<summary>Solution</summary>

**Solution.** For every null $\\theta $, validity gives $P_\\theta (p\\le \\alpha )\\le \\alpha $. Taking $\\sup_{\\theta \\in \\Theta _0}$ preserves the inequality, so the rejection rule has size at most $\\alpha $.

</details>

<a id="section-611-16-conservative-p-value"></a>
### 16. Conservative p-value {#section-613-16-conservative-p-value}

**Exercise 8.16**

Can a random variable satisfying $P(p\\le u)\\le u$ have $P(p\\le 0.05)=0.03$? Explain.

<details>
<summary>Hint 1</summary>

Validity requires an inequality, not uniform equality.

</details>
<details>
<summary>Hint 2</summary>

A discrete distribution can leave a gap between its actual rejection probability and the nominal threshold.

</details>
<details>
<summary>Solution</summary>

**Solution.** Yes. Validity is an upper bound, not an equality requirement. Discrete tests commonly have attainable tail probabilities separated by gaps, producing conservative p-values.

</details>

<a id="section-636-17-a-minimum-of-two-p-values"></a>
### 17. A minimum of two p-values {#section-638-17-a-minimum-of-two-p-values}

**Exercise 8.17**

If independent valid p-values are uniform under a common null, compute $P(\\min(p_1,p_2)\\le 0.05)$.

<details>
<summary>Hint 1</summary>

Compute the complement that both p-values exceed the threshold.

</details>
<details>
<summary>Hint 2</summary>

Use independence to multiply the two 0.95 probabilities, then subtract from one.

</details>
<details>
<summary>Solution</summary>

**Solution.** The complement has probability $P(p_1>0.05,p_2>0.05)=0.95^{2}$. Thus the probability is $1-0.95^{2}=0.0975$, not $0.05$.

</details>

<a id="section-661-18-failure-to-reject"></a>
### 18. Failure to reject {#section-663-18-failure-to-reject}

**Exercise 8.18**

A level-$0.05$ test has power $0.25$ at an important alternative. What is the probability of nonrejection there, and why is nonrejection weak evidence of equivalence?

<details>
<summary>Hint 1</summary>

Take the complement of power at the important alternative.

</details>
<details>
<summary>Hint 2</summary>

A procedure that often misses that effect cannot turn its nonrejection into an equivalence claim.

</details>
<details>
<summary>Solution</summary>

**Solution.** The probability is $1-0.25=0.75$. The procedure misses that important alternative three quarters of the time, so nonrejection cannot establish that the effect is small.

</details>

<a id="section-686-19-pointwise-nuisance-calibration"></a>
### 19. Pointwise nuisance calibration {#section-688-19-pointwise-nuisance-calibration}

**Exercise 8.19**

A statistic has null tail probability $0.04$ at nuisance value $\\eta =0$ and $0.11$ at $\\eta =1$. Is calibration at $\\eta =0$ a level-$0.05$ test for the composite null?

<details>
<summary>Hint 1</summary>

Level must control every nuisance value allowed by the null.

</details>
<details>
<summary>Hint 2</summary>

One stated null rejection probability already exceeds 0.05; calibration at another value cannot repair it.

</details>
<details>
<summary>Solution</summary>

**Solution.** No. The composite-null size is at least $0.11$, exceeding $0.05$. One needs worst-case, conditional, or otherwise uniform calibration.

</details>

<a id="section-711-20-optional-checking-changes-the-event"></a>
### 20. Optional checking changes the event {#section-713-20-optional-checking-changes-the-event}

**Exercise 8.20**

Why does applying a fixed-sample $0.05$ test after each of ten looks not prove a $0.05$ probability of ever rejecting?

<details>
<summary>Hint 1</summary>

Identify the event that the repeated-looking procedure ultimately reports.

</details>
<details>
<summary>Hint 2</summary>

It is a union of rejection events; a bound for one fixed look does not calibrate the union.

</details>
<details>
<summary>Solution</summary>

**Solution.** The fixed-sample guarantee controls one predeclared rejection event. “Reject at any look” is a union of ten dependent events under a stopping rule. Its probability requires a joint sequential calculation and can exceed $0.05$.

</details>

<a id="section-736-13-investigation-build-a-power-and-sensitivity-atlas"></a>

<a id="section-899-20-optional-practice-extensions"></a>
### 21. SI-09-E21. Fill an atom without inventing information {#section-903-si-09-e21-fill-an-atom-without-inventing-information}

**Exercise 8.21**

Under the three-row binomial null table in Section 15, write the randomised p-value conditional on each possible sum. Show that rejection at level $1/2$ is a test that always rejects at sum two and randomises at sum one. Find its boundary randomisation probability and exact null rejection probability.


<details>
<summary>Hint 1</summary>

For each sum, add its strict upper-tail mass to U times its own atom.

</details>
<details>
<summary>Hint 2</summary>

At sum one the randomised p-value is 1/4+U/2; solve its level-one-half inequality and average the three cases.

</details>

<a id="section-921-si-09-e22-repair-the-paired-duplicate-experiment"></a>
### 22. SI-09-E22. Repair the paired-duplicate experiment {#section-923-si-09-e22-repair-the-paired-duplicate-experiment}

**Exercise 8.22**

In the changed law $(A,A,B,B)$ of Section 19, test $p\\le 1/2$ at level $1/16$ by rejecting only at $S=4$ with an auxiliary probability $\\gamma $. Find $\\gamma $, derive the whole power function, and compare its power at $p=3/4$ with the independent four-trial rule calibrated at level $1/8$. Explain why that numerical comparison does not establish greater efficiency at fixed level.


<details>
<summary>Hint 1</summary>

Under paired duplication, four successes means that both underlying Bernoulli variables succeeded.

</details>
<details>
<summary>Hint 2</summary>

Use probability p squared rather than p to power four, calibrate gamma at p=1/2, and keep the two different nominal levels explicit.

</details>

<a id="section-941-21-solutions-to-the-optional-practice-extensions"></a>

## Solutions

<a id="section-943-21-solutions-to-the-optional-practice-extensions"></a>
<details>
<summary>Solution</summary>

<a id="section-946-si-09-e21-fill-an-atom-without-inventing-information-so"></a>
### SI-09-E21. Fill an atom without inventing information — solution {#section-948-si-09-e21-fill-an-atom-without-inventing-information-so}

For sums two, one, and zero respectively, the randomised p-values are $U/4$, $1/4+U/2$, and $3/4+U/4$. At level $1/2$, the first always rejects apart from an irrelevant endpoint, the last never rejects, and the middle rejects when $U\\le 1/2$. Thus $\\gamma =1/2$ and the null rejection probability is $1/4+(1/2)(1/2)=1/2$. The auxiliary variable is independent and declared once. Its use allocates the boundary mass rather than changing the information about $p$.

</details>

<details>
<summary>Solution</summary>

<a id="section-955-si-09-e22-repair-the-paired-duplicate-experiment-soluti"></a>
### SI-09-E22. Repair the paired-duplicate experiment — solution {#section-957-si-09-e22-repair-the-paired-duplicate-experiment-soluti}

Under the paired law, $P_p(S=4)=P_p(A=B=1)=p^2$. The boundary null requires $\\gamma /4=1/16$, hence $\\gamma =1/4$. The rule is increasing in $p$, so its size over $p\\le 1/2$ is $1/16$ and its power function is $p^2/4$. At $p=3/4$ this is $9/64$, whereas the independent level-$1/8$ rule has power $27/64$. The procedures have both different observation laws and different levels. That calculation is a conditional performance comparison, not a fixed-level optimality comparison or a claim that duplicate records supply four independent trials.

</details>

<a id="section-961-sources"></a>

## Sources {#section-963-sources}

For a classical model-based treatment compare Casella and Berger, *Statistical Inference*, and Bickel and Doksum, *Mathematical Statistics: Basic Ideas and Selected Topics*. The book's [References, Reading Routes, and Attribution Guide](back-matter/references-and-attribution-guide.md) describes these reading routes and their scope. Specific analytical imports and source qualifications are stated where they are used.

<a id="section-965-14-summary-and-forward-route"></a>
`;export{e as default};