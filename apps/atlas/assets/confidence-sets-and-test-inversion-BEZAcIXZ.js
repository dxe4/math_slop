var e=`---
parent_id: book-principles-statistical-inference
chapter_id: confidence-sets-and-test-inversion
title: "Confidence Sets, Coverage, and Test Inversion"
level: advanced-undergraduate
estimated_minutes: 275
license: CC BY-SA 4.0
---

# Confidence Sets, Coverage, and Test Inversion {#section-1-confidence-sets-coverage-and-test-inversion}

<a id="section-1-level-and-prerequisites"></a>
## Level and prerequisites {#section-3-level-and-prerequisites}

This is a chapter of the L3 inference route. Preparation is [Probability: Models, Bounds, and Proofs](../probability-models-proofs.md), especially its [Gaussian-vector chapter](../probability-models-proofs/gaussian-vectors-and-multivariate-normal.md), and [Lucent linear algebra](/lucent/web/#/course/linear-algebra). The L3 core uses probability laws, exact tests and Gaussian pivots from the linked prerequisites. The nonnegative-integration size identity and optimality outlook explicitly use the measure-theoretic results cited beside them; they are optional advanced continuations, not additional assumptions silently attached to the finite inversion proof.


A point estimate localises a target but does not report how its sampling error varies across repetitions. A confidence procedure returns a data-dependent set and promises that, under each stated law, a declared fraction of repetitions will cover the fixed target. The probability belongs to the random procedure before data are observed.

This chapter defines pointwise and uniform coverage, proves the duality between tests and confidence sets, derives pivotal normal and exact binomial procedures, and separates coverage from width, posterior probability, prediction, and robustness. It uses the testing chapters but does not require the later asymptotic approximations.

<a id="section-10-1-a-confidence-set-is-a-random-set-valued-procedure"></a>
## 1. A confidence set is a random set-valued procedure {#section-12-1-a-confidence-set-is-a-random-set-valued-procedure}

Let the estimand be $\\tau (\\theta )$ with target space $T$. A **confidence-set procedure** is a measurable rule $C(X)\\subseteq T$. It has pointwise coverage at least $1-\\alpha $ if

\\[P_\\theta (\\tau (\\theta )\\in C(X))\\ge 1-\\alpha \\]

for every $\\theta $ in the declared model. Equivalently, its uniform coverage is

$\\inf_{\\theta \\in \\Theta }P_\\theta (\\tau (\\theta )\\in C(X))\\ge 1-\\alpha $.

When $T\\subseteq R$ and $C(X)=[L(X),U(X)]$, it is a confidence interval. A confidence set can also be one-sided, disconnected, ellipsoidal, or the whole parameter space.

The always-reported set $C(X)=T$ has coverage one. Coverage alone therefore does not measure usefulness. Among procedures satisfying a coverage constraint, one may compare expected length, volume, diameter, directional accuracy, or decision loss.

<a id="section-24-2-the-repeated-sampling-interpretation"></a>
## 2. The repeated-sampling interpretation {#section-26-2-the-repeated-sampling-interpretation}

Before observing data, both $L(X)$ and $U(X)$ are random. For fixed $\\theta $, the event

\\[{L(X)\\le \\tau (\\theta )\\le U(X)}\\]

has probability at least $1-\\alpha $. After observing $x$, the set $[L(x),U(x)]$ is fixed and $\\tau (\\theta )$ is fixed in a frequentist model; it either contains the target or it does not.

Thus “this realised interval has 95% probability of containing the parameter” is not supplied by a 95% confidence theorem. A posterior credible probability can make such a conditional probability statement after adding a prior model, but posterior credibility and repeated-sampling coverage are different calibrations.

The confidence statement is still relevant after observation: it identifies the procedure that produced the set and the long-run error guarantee attached to using that procedure. It should be reported with the experiment, assumptions, and selection rule that make the guarantee true.

<a id="section-36-3-test-inversion-theorem"></a>
## 3. Test inversion theorem {#section-38-3-test-inversion-theorem}

Suppose that for every candidate target value $t\\in T$ there is a nonrandomised level-$\\alpha $ test $\\phi _t(X)$ of

$H_{0,t}:\\tau (\\theta )=t$.

Define the **inverted confidence set**

$C(X)={t\\in T:\\phi _t(X)=0}$;

it contains exactly the candidate values not rejected by their corresponding tests.

**Theorem 11.1 (test–confidence duality).** The inverted set has coverage at least $1-\\alpha $.

**Proof.** Fix any state $\\theta $ and write $t_0=\\tau (\\theta )$. The event that the set misses the true target is

\${t_0\\notin C(X)}={\\phi _{t_0}(X)=1}$.

Because $\\phi _{t_0}$ is level $\\alpha $ for every state satisfying $\\tau (\\theta )=t_0$,

$P_\\theta (t_0\\notin C(X))\\le \\alpha $.

Taking complements gives $P_\\theta (t_0\\in C(X))\\ge 1-\\alpha $. Since $\\theta $ was arbitrary, the claim is uniform over the model. ∎

For randomised tests, include the predeclared auxiliary random variable in the observation passed to the procedure. The same event identity then proves coverage for the randomised set.

<a id="section-62-confidence-sets-generate-tests"></a>
### Confidence sets generate tests {#section-64-confidence-sets-generate-tests}

Conversely, if $C(X)$ has coverage at least $1-\\alpha $, the rule that rejects $H_{0,t}$ when $t\\notin C(X)$ is level $\\alpha $ for that null. Coverage and testing are two views of the same family of acceptance regions.

<a id="section-66-4-inverting-p-values"></a>
## 4. Inverting p-values {#section-68-4-inverting-p-values}

Let $p_t(x)$ be a valid p-value for testing candidate value $t$. If rejection occurs when $p_t(x)\\le \\alpha $, then

\\[C(x)={t:p_t(x)>\\alpha }\\]

is a $1-\\alpha $ confidence set, up to the chosen convention at equality. This formula explains why a confidence set contains precisely those values compatible with the data at the specified testing resolution.

The p-values must form a correctly calibrated family for every candidate. Taking a likelihood curve, rescaling it to height one, and retaining values above $0.05$ is not test inversion unless the threshold has a sampling-calibration theorem.

<a id="section-76-5-exact-normal-interval-with-known-variance"></a>
## 5. Exact normal interval with known variance {#section-78-5-exact-normal-interval-with-known-variance}

Let $n\\ge1$ be an integer, let $0<\\alpha <1$, and let $X_1,\\dots,X_n$ be iid $Normal(\\mu ,\\sigma ^{2})$ with known $\\sigma >0$. For each candidate $\\mu _0$, the two-sided level-$\\alpha $ test rejects when

$|\\sqrt{n}(\\bar{X}-\\mu _0)/\\sigma |>z_{1-\\alpha /2}$.

The nonrejection inequality is

$-z_{1-\\alpha /2}\\le \\sqrt{n}(\\bar{X}-\\mu _0)/\\sigma \\le z_{1-\\alpha /2}$.

Solving for $\\mu _0$ gives

$C(X)=[\\bar{X}-z_{1-\\alpha /2}\\sigma /\\sqrt{n}, \\bar{X}+z_{1-\\alpha /2}\\sigma /\\sqrt{n}]$.

Coverage is exact because

$P_\\mu (|\\sqrt{n}(\\bar{X}-\\mu )/\\sigma |\\le z_{1-\\alpha /2})=1-\\alpha $.

The half-width is proportional to $\\sigma /\\sqrt{n}$. Quadrupling the sample size halves it; it does not quarter it.

<a id="section-96-one-sided-inversion"></a>
### One-sided inversion {#section-98-one-sided-inversion}

Inverting the upper-tail test of $H_0:\\mu =\\mu _0$ against $\\mu >\\mu _0$ gives the nonrejected values satisfying

$\\bar{X}\\le \\mu _0+z_{1-\\alpha }\\sigma /\\sqrt{n}$.

Therefore

$C(X)=[\\bar{X}-z_{1-\\alpha }\\sigma /\\sqrt{n},\\infty )$.

This is a lower confidence bound: with probability $1-\\alpha $, its finite endpoint is no greater than $\\mu $. Direction must be chosen from the scientific question before inspecting the estimate.

<a id="section-108-6-pivots-turn-parameter-free-probability-into-sets"></a>
## 6. Pivots turn parameter-free probability into sets {#section-110-6-pivots-turn-parameter-free-probability-into-sets}

A **pivot** is a function $Q(X,\\theta )$ whose sampling distribution does not depend on $\\theta $. Suppose constants $a,b$ satisfy

\\[P_\\theta (a\\le Q(X,\\theta )\\le b)=1-\\alpha \\]

for every $\\theta $. Define

$C(X)={t:a\\le Q(X,t)\\le b}$.

Substituting the true $\\theta $ into the defining inequalities immediately gives coverage $1-\\alpha $. Test inversion and pivotal inversion are the same architecture viewed from rejection regions and probability statements.

<a id="section-120-unknown-normal-variance-and-the-t-pivot"></a>
### Unknown normal variance and the t pivot {#section-122-unknown-normal-variance-and-the-t-pivot}

For $n\\ge2$ iid $Normal(\\mu ,\\sigma ^{2})$ observations with $\\sigma >0$, let

$S^{2}=(n-1)^{-1}\\sum _i(X_i-\\bar{X})^{2}$.

Normal orthogonal decomposition gives independence of $\\bar{X}$ and $S^{2}$, with

\\[\\sqrt{n}(\\bar{X}-\\mu )/\\sigma \\sim Normal(0,1)\\]

and

$(n-1)S^{2}/\\sigma ^{2}\\sim \\chi ^{2}_{n-1}$.

Consequently

$T=\\sqrt{n}(\\bar{X}-\\mu )/S\\sim t_{n-1}$.

Inverting $|T|\\le t_{n-1,1-\\alpha /2}$ yields

$\\bar{X}\\pm t_{n-1,1-\\alpha /2}S/\\sqrt{n}$.

This result is exact under independent normal sampling. Replacing normality with an arbitrary skewed or heavy-tailed law removes the exact t distribution, even though the same formula may be an approximation under additional asymptotic conditions.

<a id="section-144-7-exact-binomial-intervals-are-discrete-test-inversions"></a>
## 7. Exact binomial intervals are discrete test inversions {#section-146-7-exact-binomial-intervals-are-discrete-test-inversions}

Let $S\\sim Binomial(n,p)$ and observe $s$. An equal-tail exact interval can be defined as follows:

- if $s=0$, set $L(s)=0$; otherwise choose $L(s)$ satisfying $P_{L(s)}(S\\ge s)=\\alpha /2$;
- if $s=n$, set $U(s)=1$; otherwise choose $U(s)$ satisfying $P_{U(s)}(S\\le s)=\\alpha /2$.

The interval $[L(S),U(S)]$ is the Clopper–Pearson inversion of two exact binomial tail tests. Its coverage is at least $1-\\alpha $ for every $p$.

Because the binomial statistic is discrete, attainable tail probabilities jump. The interval is commonly conservative: actual coverage can exceed the nominal level, sometimes substantially. “Exact” here means the lower bound is guaranteed under the binomial law, not that coverage equals $1-\\alpha $ at every $p$ or that the interval is shortest.

At $s=0$, the upper endpoint solves $(1-U)^n=\\alpha /2$, so

$U=1-(\\alpha /2)^{1/n}$.

This boundary case shows why the naive symmetric formula $\\hat{p}\\pm z\\sqrt{\\hat{p}(1-\\hat{p})/n}$ fails: when $\\hat{p}=0$ it reports zero standard error and can collapse to \${0}$ despite substantial uncertainty.

<a id="section-161-8-coverage-and-expected-size-define-a-constrained-compa"></a>
## 8. Coverage and expected size define a constrained comparison {#section-163-8-coverage-and-expected-size-define-a-constrained-compa}

Two intervals can both cover at least $1-\\alpha $ yet have different expected lengths

$E_\\theta [U(X)-L(X)]$.

One may be shorter near the centre and longer near boundaries. There need not be a uniformly shortest procedure without restricting symmetry, unbiasedness, invariance, connectedness, or tail allocation.

Selective reporting can destroy the stated coverage. If a researcher computes intervals for many outcomes but displays only those excluding zero, the displayed collection is conditioned on a coverage failure-related event. Marginal 95% coverage for each predeclared interval does not imply 95% coverage after this selection.

<a id="section-171-9-reparameterisation-requires-transforming-the-set"></a>
## 9. Reparameterisation requires transforming the set {#section-173-9-reparameterisation-requires-transforming-the-set}

If the target is $\\eta =g(\\theta )$ and $C_\\theta (X)$ covers $\\theta $, then

\\[C_\\eta (X)=g(C_\\theta (X))={g(t):t\\in C_\\theta (X)}\\]

covers $\\eta $, because $\\theta \\in C_\\theta $ implies $g(\\theta )\\in g(C_\\theta )$. For a strictly increasing $g$, transform both endpoints in order. For a decreasing map, their order reverses. For a non-one-to-one map, the image can have a different shape.

For example, if $g(\\theta )=\\theta ^{2}$ and $C_\\theta =[-1,2]$, then the image is $[0,4]$, not $[1,4]$. Squaring endpoints and keeping their original order would miss values near zero.

Transformation preserves the stated coverage lower bound but not expected length on the new scale. A non-one-to-one transformation can increase actual coverage because the image set may contain $g(\\theta )$ even when the original set misses $\\theta $. Precision is scale-dependent, just as loss is.

<a id="section-183-10-identification-comes-before-confidence"></a>
## 10. Identification comes before confidence {#section-185-10-identification-comes-before-confidence}

If two states have the same observation law but different target values, no confidence procedure can be both uniformly covering and sharply localised at both targets. Under their common data law, the set must include each observationally indistinguishable target often enough.

Weak identification similarly produces wide or irregular sets when calibration is honest. A narrow interval obtained by treating a weakly identified nuisance estimate as known can advertise numerical precision while losing coverage. Test inversion makes the issue visible: many candidate values cannot be rejected because the experiment has little power to distinguish them.

Confidence sets can also be empty or disconnected when they invert nonnested or incompatible tests. That outcome may diagnose model conflict or construction choices; forcing every result into one symmetric interval can conceal it.

<a id="section-191-11-parameter-confidence-is-not-prediction"></a>
## 11. Parameter confidence is not prediction {#section-193-11-parameter-confidence-is-not-prediction}

A confidence interval for a population mean localises $\\mu $. A prediction interval for a new observation must also include individual outcome variation. In the known-variance normal model,

\\[X_new-\\bar{X}\\sim Normal(0,\\sigma ^{2}(1+1/n))\\]

under independence. An exact central prediction interval is

$\\bar{X}\\pm z_{1-\\alpha /2}\\sigma \\sqrt{1+1/n}$,

which is wider than the confidence interval for $\\mu $. Confusing the two understates predictive uncertainty.

<a id="section-203-12-confidence-audit"></a>
## 12. Confidence audit {#section-205-12-confidence-audit}

For every reported confidence set, record:

1. estimand, parameter space, and observation law;
2. pointwise or uniform coverage statement;
3. exact, conditional, randomisation-based, simulated, or asymptotic calibration;
4. test family or pivot being inverted;
5. tail allocation and one- or two-sided direction;
6. nuisance treatment and boundary behaviour;
7. width or other informativeness criterion;
8. any model, stopping, multiplicity, or selection sensitivity;
9. distinction from credible and prediction sets.

<a id="section-217-13-exercises-with-complete-solutions"></a>
## 14. Investigation: invert an entire test family {#section-762-14-investigation-invert-an-entire-test-family}

Choose a one-parameter finite-sample experiment. Construct valid tests for every candidate value, including boundary and randomisation conventions. Invert them to a confidence set, verify coverage by exact enumeration or a theorem, and tabulate coverage and expected width across a parameter grid. Compare with one tempting approximation and identify where its coverage changes. Any plot must be accompanied by the full numerical table and a statement separating exact model calibration from real-world robustness.

<a id="section-764-i-cov-n2-a-complete-finite-binomial-ledger"></a>
### I-COV-N2: a complete finite binomial ledger {#section-766-i-cov-n2-a-complete-finite-binomial-ledger}

<a id="section-766-worked-example-1-invert-all-three-two-trial-outcomes"></a>
### Worked example 1: invert all three two-trial outcomes {#section-768-worked-example-1-invert-all-three-two-trial-outcomes}

Here is one complete reference investigation. Take two independent Bernoulli trials with fixed success probability $p\\in[0,1]$, record their sum $S\\sim\\operatorname{Binomial}(2,p)$ and choose $\\alpha=1/2$. The low nominal coverage $1-\\alpha=1/2$ makes every endpoint elementary; this is an arithmetic teaching fixture. Allocate $\\alpha/2=1/4$ to each tail. For observed $s$, retain candidate $p$ when both $P_p(S\\ge s)\\ge1/4$ and $P_p(S\\le s)\\ge1/4$. Equality is retained, so all intervals below are closed. No auxiliary randomization is used.

Write $a=1-\\sqrt3/2$ and $b=\\sqrt3/2$. The full observation ledger is

| Observed $s$ | Sampling probability | Closed interval $C(s)$ | Width |
| --- | --- | --- | --- |
| $0$ | $(1-p)^2$ | $[0,1/2]$ | $1/2$ |
| $1$ | $2p(1-p)$ | $[a,b]$ | $\\sqrt3-1$ |
| $2$ | $p^2$ | $[1/2,1]$ | $1/2$ |

For $s=0$, the nontrivial tail condition is $(1-p)^2\\ge1/4$, giving $p\\le1/2$. For $s=2$, it is $p^2\\ge1/4$, giving $p\\ge1/2$. For $s=1$, the conditions are $1-(1-p)^2\\ge1/4$ and $1-p^2\\ge1/4$, giving $a\\le p\\le b$. This derives every endpoint, including the boundary cases.

Coverage is the exact finite sum

$$c_2(p)=\\sum_{s=0}^2\\mathbf1\\{p\\in C(s)\\}\\binom2s p^s(1-p)^{2-s},$$

with the usual binomial endpoint laws at $p=0,1$. Membership in the three closed intervals gives the full parameter-space proof

$$c_2(p)=\\begin{cases}(1-p)^2,&0\\le p<a,\\\\1-p^2,&a\\le p<1/2,\\\\1,&p=1/2,\\\\1-(1-p)^2,&1/2<p\\le b,\\\\p^2,&b<p\\le1.\\end{cases}$$

Each branch is at least $3/4$; hence it certainly has the promised coverage at least $1/2$ for every $p$. This stronger conservative bound comes from the finite construction, not from a grid or a large-sample approximation. Expected width is

$$w_2(p)=\\frac12\\{(1-p)^2+p^2\\}+(\\sqrt3-1)2p(1-p).$$

The complete requested five-point grid is therefore

| True $p$ | Coverage $c_2(p)$ | Expected width $w_2(p)$ |
| --- | --- | --- |
| $0$ | $1$ | $1/2$ |
| $1/4$ | $15/16$ | $(6\\sqrt3-1)/16$ |
| $1/2$ | $1$ | $(2\\sqrt3-1)/4$ |
| $3/4$ | $15/16$ | $(6\\sqrt3-1)/16$ |
| $1$ | $1$ | $1/2$ |

For example, at $p=1/4$ the probabilities of $S=0,1,2$ are $9/16,6/16,1/16$. Only the first two intervals cover, so coverage is $15/16$, while expected width is $(10/16)(1/2)+(6/16)(\\sqrt3-1)=(6\\sqrt3-1)/16$. At $p=1/2$, all three closed intervals include the target, which explains the coverage jump to one.

Compare the tempting Wald rule $\\widehat p\\mathbin\\pm z_{1-\\alpha/2}\\sqrt{\\widehat p(1-\\widehat p)/2}$, with $\\widehat p=S/2$ and clipping to $[0,1]$. For every $p\\in(0,1)$, the events $S=0$ and $S=2$ give the singletons $\\{0\\}$ and $\\{1\\}$, so they cannot cover. Therefore its coverage is at most $P_p(S=1)=2p(1-p)$. At $p=1/4$ this is $3/8<1/2$, irrespective of whether its middle interval covers. The approximation fails the nominal requirement without needing a decimal normal quantile.

<a id="section-806-i-cov-n1-change-change-the-experiment-then-reconstruct"></a>
### I-COV-N1-CHANGE: change the experiment, then reconstruct {#section-808-i-cov-n1-change-change-the-experiment-then-reconstruct}

<a id="section-808-worked-example-2-rebuild-the-one-trial-procedure"></a>
### Worked example 2: rebuild the one-trial procedure {#section-810-worked-example-2-rebuild-the-one-trial-procedure}

**Changed task.** Keep the same $\\alpha=1/2$, equal-tail allocation and closed-endpoint convention, but use one Bernoulli trial, $S\\sim\\operatorname{Binomial}(1,p)$. Derive both intervals, a formula for coverage for every $p$, and expected width. Evaluate coverage at $p=1/8,1/4,1/2,3/4,7/8$. Explain what would be missed by checking only the earlier five-point grid.

**Complete public solution.** At $s=0$, retain $1-p\\ge1/4$, giving $C(0)=[0,3/4]$. At $s=1$, retain $p\\ge1/4$, giving $C(1)=[1/4,1]$. Both widths are $3/4$, so $w_1(p)=3/4$ for every $p$. The coverage function is

$$c_1(p)=\\begin{cases}1-p,&0\\le p<1/4,\\\\1,&1/4\\le p\\le3/4,\\\\p,&3/4<p\\le1.\\end{cases}$$

It is at least $3/4$, hence at least the promised $1/2$. On the changed-task grid the coverages are $7/8,1,1,1,7/8$, respectively, with expected width $3/4$ in every row. On the earlier grid $0,1/4,1/2,3/4,1$, all five coverages equal one, even though coverage is below one between some grid points. A finite grid illustrates the procedure; the branch proof establishes its bound on the entire parameter space.

These dossiers establish the stated finite binomial calculations under independent identical Bernoulli trials and the declared observation/stopping protocol. They do not validate that protocol for observational data, supply an unseen assessment or prove learning from a public comparison.

<a id="section-820-15-summary-and-forward-route"></a>
## 16. Development: the event identity and its logical boundaries {#section-827-16-development-the-event-identity-and-its-logical-bound}

A confidence statement has three moving parts that are easy to conflate: the state $\\theta$ specifies the observation law, the target $\\tau(\\theta)$ selects what is being covered, and the procedure specifies a set for every possible observation. Fixing only the displayed endpoints leaves out the repetition law. Fixing only a nominal percentage leaves out which target and model receive the guarantee. Test inversion is useful because it turns those commitments into a single checkable event identity.

For a precise minimal formulation, let $(\\mathcal X,\\mathcal A)$ be the observation space and let $P_\\theta$ be its law at each state. For every target value $t$, suppose $\\phi_t:\\mathcal X\\to\\{0,1\\}$ is measurable. Require
$$\\sup_{\\theta:\\tau(\\theta)=t}P_\\theta\\{\\phi_t(X)=1\\}\\le\\alpha,$$
where $0<\\alpha<1$. The nuisance parameters are inside this supremum. If a candidate value corresponds to no model state, it can be omitted from the target space. Define $C(x)=\\{t:\\phi_t(x)=0\\}$. For fixed $\\theta$, the membership event $\\{\\tau(\\theta)\\in C(X)\\}$ is measurable because it is exactly $\\{\\phi_{\\tau(\\theta)}(X)=0\\}$. This is enough for the coverage probability in the elementary theorem.

Additional operations can require additional measurability. If expected length is to be written as an integral of membership indicators over a real target space, a convenient sufficient condition is joint measurability of $(x,t)\\mapsto\\phi_t(x)$. For interval procedures, measurable endpoints provide the familiar manageable case. An arbitrary uncountable collection of separately measurable functions need not automatically satisfy every joint-measurability claim. We do not need to resolve general random-set theory to justify the interval and explicit finite constructions used here.

There is no multiplicity penalty for inverting all candidate values into one confidence set. At a fixed true state, only the rejection event for the single true target enters noncoverage. We are not requiring all false candidates to be accepted simultaneously. This differs from reporting separate intervals for many targets: simultaneous coverage of $k$ coordinates asks that all $k$ true membership events occur together, and marginal guarantees alone do not imply that joint probability is $1-\\alpha$. A union bound would give at least $1-k\\alpha$ for $k$ marginal $(1-\\alpha)$ procedures, or at least $1-\\alpha$ if the coordinate error budgets sum to $\\alpha$.

An everyday diagnostic follows. If an analyst says that searching many candidate parameter values invalidates a correctly inverted interval, ask which true-target rejection event became larger. Usually no such enlargement occurred. If instead the analyst chose one of many outcomes because its interval excluded zero, the reported object and selection event have changed. The distinction is between constructing one predeclared set and selecting a claim after inspecting several procedures.

Randomized inversion uses the same logic on an enlarged observation space. Let $U$ be a predeclared auxiliary variable independent of $X$ under every state, and suppose $\\phi_t(X,U)$ has level $\\alpha$. Define $C(X,U)=\\{t:\\phi_t(X,U)=0\\}$. Using one shared $U$ for the candidate family is sufficient; candidate-specific independent draws are unnecessary for the coverage proof and would need their own well-defined joint construction. The guarantee averages both sampling and auxiliary randomness. Conditioning afterward on a favorable realized draw is a different guarantee and is not established by the unconditional theorem.

Equality conventions must be aligned at every step. If a p-value test rejects at $p_t\\le\\alpha$, the inverted set keeps $p_t>\\alpha$. If it rejects at $p_t<\\alpha$, the set keeps $p_t\\ge\\alpha$. A continuous pivot usually gives boundary probability zero, so the numerical coverage is unaffected. Discrete observations can put positive mass on a boundary. The closed equal-tail binomial sets in I-COV-N2 and I-COV-N1-CHANGE deliberately keep equality; their exact membership tables and coverage jumps depend on that convention.

Do not read an unconditional confidence theorem as conditional calibration for every displayed feature of the data. For example, let $X\\sim N(\\mu,1)$ and report $[X-c,X+c]$, where $P(|Z|\\le c)=1-\\alpha$ for $Z\\sim N(0,1)$. At $\\mu=0$ this covers exactly when $|X|\\le c$. If the interval is displayed only when it excludes zero, then conditional on display it misses the true value with probability one at that state. Its ordinary unconditional coverage is still $1-\\alpha$. There is no contradiction: the selected procedure has a different repetition event.

<a id="section-845-17-development-discrete-tail-inversion-without-a-grid"></a>
## 17. Development: discrete tail inversion without a grid {#section-847-17-development-discrete-tail-inversion-without-a-grid}

The finite models already supplied in §14 are complete investigations. Here we supply the general proof behind their construction rather than another numerical dossier. Let $n\\ge1$ be an integer, $S\\sim\\operatorname{Binomial}(n,p)$, $p\\in[0,1]$, and put $a=\\alpha/2$ for $0<\\alpha<1$. Define inclusive tails
$$F_p(s)=P_p(S\\le s),\\qquad G_p(s)=P_p(S\\ge s).$$
Keep candidate $p$ when both tails are at least $a$. This is the closed-endpoint convention already used in the two reference models.

First verify the probability bound at a fixed true $p$. For any finite ordered variable, $P\\{F(S)<a\\}\\le a$: the indices whose cumulative probabilities are below $a$ form an initial segment, and the probability of that segment is its final cumulative probability. An empty segment has probability zero. Reversing the order gives $P\\{G(S)<a\\}\\le a$. Therefore
$$P_p\\{F_p(S)<a\\ \\text{or}\\ G_p(S)<a\\}\\le2a=\\alpha.$$
Its complement is the membership event for the true $p$, proving coverage for every $p$, including the degenerate endpoint laws. No grid, normal approximation or numerical root-finding is part of this proof.

Next determine the shape of the retained set for an observed $s$. Couple binomial counts by taking independent uniforms $U_i$ and setting $S_p=\\sum_i\\mathbf1\\{U_i\\le p\\}$. Increasing $p$ can only increase $S_p$. Consequently $G_p(s)$ increases with $p$, while $F_p(s)$ decreases. For $1\\le s\\le n$, $G_p(s)$ goes continuously from zero to one as $p$ runs from zero to one and is strictly increasing in between. For example its polynomial derivative is
$$\\frac{d}{dp}G_p(s)
 =n\\binom{n-1}{s-1}p^{s-1}(1-p)^{n-s}>0
 \\quad(0<p<1).$$
The identity follows by differentiating the binomial sum and cancelling neighboring terms. Thus the equation $G_p(s)=a$ has one root, the lower endpoint. For $0\\le s<n$, the upper endpoint is the unique root of $F_p(s)=a$. At $s=0$ the lower-tail requirement is automatic in the opposite tail, so the lower endpoint is zero; at $s=n$ the upper endpoint is one.

The endpoints cannot cross. For every fixed $p$ and observed $s$,
$$F_p(s)+G_p(s)=1+P_p(S=s)\\ge1.$$
At a lower root where $G_p(s)=a<1/2$, the other tail exceeds $a$, so that candidate already satisfies the upper restriction. The retained set is therefore a nonempty closed interval. At $s=0$, solving $F_p(0)=(1-p)^n=a$ gives $U=1-a^{1/n}$; at $s=n$, solving $G_p(n)=p^n=a$ gives $L=a^{1/n}$. These are boundary inversions, not standard errors evaluated at a boundary estimate.

The proof separates three sources of conservatism. Each one-sided tail may leave unused probability because observations are discrete; combining two tails may leave additional unused error; and retaining equality can include observations at a limiting cutoff. None weakens the stated lower bound. It also explains why a finite grid cannot establish uniform coverage. Coverage is a sum of sampling masses multiplied by interval-membership indicators; its formula can change when a true $p$ crosses a reported endpoint. The supplied N1 changed case demonstrates this directly: its earlier five-point grid shows only coverage one although other parameters have lower coverage.

“Exact” consequently describes a finite-model inequality, not a decimal computation with many significant figures. A numerical endpoint solver should approximate the set conservatively or report its error, because an inaccurate endpoint can change membership near a boundary. A simulation can illustrate the bound but cannot replace the theorem at every parameter. Conversely, a theorem under independent identical trials does not verify that real trial probabilities are equal or that stopping was fixed. Those are observation-law commitments.

<a id="section-869-18-development-inverse-geometry-identification-and-widt"></a>
## 18. Development: inverse geometry, identification and width {#section-871-18-development-inverse-geometry-identification-and-widt}

<a id="section-871-worked-example-3-disconnected-normal-confidence-sets"></a>
### Worked example 3: disconnected normal confidence sets {#section-873-worked-example-3-disconnected-normal-confidence-sets}

An inverted set need not resemble a symmetric estimate plus a standard error. Consider the explicit experiment $X\\sim N(\\theta^2,1)$, $\\theta\\in\\mathbb R$, with target $\\theta$. Take $c>0$ satisfying $P(|Z|\\le c)=1-\\alpha$ for a standard normal $Z$. The test of candidate $t$ rejects when $|X-t^2|>c$, so
$$C(x)=\\{t\\in\\mathbb R:x-c\\le t^2\\le x+c\\}.$$
For every true state $\\theta$, the test of $t=\\theta$ rejects with probability $\\alpha$; because $t$ and $-t$ have identical laws, that test also rejects with probability $\\alpha$ at the opposite-sign state. At the true $\\theta$, membership is exactly $|X-\\theta^2|\\le c$. Thus coverage is exactly $1-\\alpha$ without a linear approximation to the square.

If $x+c<0$, the set is empty. Otherwise write $b=x+c\\ge0$ and $a=\\max(0,x-c)$. The set is
$$[-\\sqrt b,-\\sqrt a]\\ \\cup\\ [\\sqrt a,\\sqrt b].$$
When $a=0$, the two pieces meet at zero; when $x>c$, they are separated. Empty sets arise because a sufficiently negative observation is incompatible, at the chosen test resolution, with every nonnegative normal mean in this model. They are not computational failures to be concealed. At $\\theta=0$, the empty-set event $X<-c$ has probability $\\alpha/2$, already included in the procedure's total noncoverage probability.

This model cannot identify the sign of $\\theta$, because $\\theta$ and $-\\theta$ have the same law. The disconnected set records that fact. A rule that simply chooses the positive square root would change the target or exclude half the parameter space without justification. At positive $x$ far above the cutoff, the two pieces may each be short while their separation is large. Total interval length is $2(\\sqrt b-\\sqrt a)$; diameter is $2\\sqrt b$. Calling either one “the width” without stating the criterion hides a real difference between local precision and global ambiguity.

There is a general lower bound behind the example. Suppose states $\\theta_1,\\theta_2$ have the same observation law $P$ but targets $t_1\\ne t_2$. If a procedure covers each with probability at least $1-\\alpha$, then under that common law
$$P\\{t_1,t_2\\in C(X)\\}
 \\ge1-P\\{t_1\\notin C(X)\\}-P\\{t_2\\notin C(X)\\}
 \\ge1-2\\alpha.$$
For $0<\\alpha<1/2$, a procedure with measurable ordinary real-line diameter must therefore have diameter at least $|t_1-t_2|$ with probability at least $1-2\\alpha$. This is an information limitation, independent of the estimator or software. It does not claim that every individual reported set must contain both targets.

Weak identification can create unbounded sets even when distinct states do have distinct laws. For a transparent ratio example, observe independent $A\\sim N(\\mu_A,1)$ and $B\\sim N(\\mu_B,1)$, with $\\mu_B\\ne0$, and target $r=\\mu_A/\\mu_B$. Under the candidate null $\\mu_A=r\\mu_B$, the variable
$$(A-rB)/\\sqrt{1+r^2}$$
is standard normal for every admissible nuisance value $\\mu_B$. Inverting its central test retains
$$(b^2-c^2)r^2-2abr+(a^2-c^2)\\le0.$$
The coefficient of $r^2$ can be negative; solving a quadratic inequality cannot then be replaced by reporting the interval between its roots.

For example, select $c=2$, hence $\\alpha=2\\{1-\\Phi(2)\\}$, and consider the displayed observation $(a,b)=(3,0)$. The inequality becomes $5-4r^2\\le0$, giving two rays $r\\le-\\sqrt5/2$ or $r\\ge\\sqrt5/2$. The observation $b=0$ does not assert the excluded model state $\\mu_B=0$: observations and means differ. Values of the nuisance mean arbitrarily close to zero remain admissible and make a ratio unstable. The procedure is exact under the specified normal experiment; the single displayed point illustrates its geometry rather than an event with positive point mass.

This ratio construction and the square example show different obstacles. The square experiment has an exact sign ambiguity in its model. The ratio experiment has increasingly weak information about a ratio as the denominator mean approaches zero. In both cases a short symmetric interval can be misleading. Report the actual retained set and its parameter domain, then choose a size criterion appropriate to the scientific question. Neither disconnectedness nor conservatism by itself diagnoses a bad method; the calibration proof and the usefulness criterion must be examined together.


<a id="section-900-why-the-central-normal-interval-has-a-limited-length-op"></a>
### Why the central normal interval has a limited length optimum {#section-902-why-the-central-normal-interval-has-a-limited-length-op}

The normal example permits a useful comparison with an explicit scope. Let $\\sigma>0$ be known and take a pivot acceptance interval $a\\le Z\\le b$, where $Z=\\sqrt n(\\bar X-\\mu)/\\sigma$ is standard normal and $a,b$ are fixed constants. Inversion gives
$$[\\bar X-b\\sigma/\\sqrt n,\\ \\bar X-a\\sigma/\\sqrt n],$$
whose length is $(b-a)\\sigma/\\sqrt n$ and whose coverage is $\\Phi(b)-\\Phi(a)$. Among this class of fixed, connected pivot acceptance intervals with probability $1-\\alpha$, the central one is shortest.

Here is the argument. Fix a proposed pivot length $\\ell>0$ and slide the acceptance interval, writing its probability as $g(a)=\\Phi(a+\\ell)-\\Phi(a)$. Differentiation gives $g'(a)=\\varphi(a+\\ell)-\\varphi(a)$, where $\\varphi$ is the standard-normal density. Since that density decreases with absolute distance from zero, the derivative is positive when the interval's midpoint is negative and negative when it is positive. The unique maximum occurs at $a=-\\ell/2$, centering the interval at zero. Central mass increases strictly with $\\ell$, so the smallest length attaining mass $1-\\alpha$ uses endpoints $-z_{1-\\alpha/2},z_{1-\\alpha/2}$.

This proof supplies a restricted optimum, not a claim that every conceivable confidence procedure has the same length behaviour. It compares fixed connected acceptance intervals for one normal pivot. It does not cover data-dependent tail spending, different loss functions, another parameterization, additional selection, or a different observation model. A one-sided scientific question deliberately chooses an unbounded set rather than competing on the finite length criterion. Stating the comparison class makes an optimality assertion useful instead of rhetorical.

Within that known-variance class, a planned total interval length no greater than $d>0$ requires
$$n\\ge\\left(2z_{1-\\alpha/2}\\sigma/d\\right)^2.$$
Choose an integer $n\\ge1$ satisfying this inequality before collecting the fixed sample. The algebra describes design under known $\\sigma$, not a guarantee obtained by plugging a favorable observed $S$ into the planning equation. If variability is unknown, either design assumptions or a procedure calibrated for the revised protocol is needed. Choosing when to stop because a provisional interval is narrow introduces the stopping issue already recorded in the confidence audit.

<a id="section-914-expected-size-is-integrated-nonrejection-not-only-true-"></a>
### Expected size is integrated nonrejection, not only true coverage {#section-916-expected-size-is-integrated-nonrejection-not-only-true-}

For a jointly measurable real-target procedure, let $\\lambda$ denote ordinary length on the target line. Tonelli's theorem for nonnegative jointly measurable functions gives
$$E_\\theta[\\lambda(C(X))]
 =\\int_{\\mathbb R}P_\\theta\\{t\\in C(X)\\}\\,dt.$$
To see the identity, write length as $\\int\\mathbf1\\{t\\in C(X)\\}\\,dt$ and exchange the order of integration for a nonnegative function. The equality is valid even when either side is infinite. In an inverted procedure the integrand is the probability that the test of candidate $t$ does not reject under the actual state $\\theta$.

This expresses the connection between useful tests and useful sets precisely. Coverage constrains nonrejection at the true target; the expected-size integral depends on nonrejection throughout the candidate line, especially at false targets. Tests with little ability to reject distant candidates tend to leave large sets. In a continuous target space the single true value has zero ordinary length, so its coverage bound alone cannot determine expected length. This explains mathematically why “at least 95% coverage” is an incomplete ranking of intervals.

A transformed target changes the size criterion. On positive parameters, an interval $[L,U]$ has ordinary length $U-L$, whereas its logarithmic image has length $\\log(U/L)$. The latter measures multiplicative spread. A change of units multiplies ordinary length by a constant, but a nonlinear transformation can reorder comparisons. The coverage implication from transforming sets remains valid; the loss or size used to call one procedure more precise must be declared separately.


There is a related distinction between preserving a guarantee and preserving exact coverage. If $g$ is one-to-one on the parameter domain, then $g(\\theta)\\in g(C)$ is equivalent to $\\theta\\in C$ after restricting $C$ to that domain. A many-to-one map supplies only the forward implication; another member of the same fiber can enter the image even when the true state is missed. Thus the image preserves a lower coverage bound but may raise actual coverage. In the square model, the target must be stated before choosing the set: confidence for the nonnegative mean $\\theta^2$ answers a different question from confidence for the signed state $\\theta$. Moving from one to the other requires the full inverse image, including both signs, not an arbitrary choice of a root.

Prediction provides another comparison of scales. In the independent known-variance normal model, $X_{\\mathrm{new}}-\\bar X$ has variance $\\sigma^2(1+1/n)$, while $\\bar X-\\mu$ has variance $\\sigma^2/n$. Letting $n$ increase drives uncertainty about the common mean toward zero but leaves the irreducible variability $\\sigma^2$ of a new observation. The two statements answer different questions about repetitions. A narrow mean interval cannot justify saying that most individual outcomes will lie near its endpoints.

These length calculations also help diagnose a suspiciously neat answer. Ask whether apparent precision came from a larger sample, a stronger scientifically defended model, a changed target scale, or an unacknowledged exclusion of candidate values. The first three can be legitimate when stated. The last can remove the very states against which the coverage claim was supposed to protect. Inverse geometry makes those exclusions visible because it requires a calibrated rejection argument for every retained or removed candidate.

<a id="section-932-19-optional-practice-extensions"></a>
## 21. Elaboration of original solution 15: logarithmic domain {#section-1002-21-elaboration-of-original-solution-15-logarithmic-doma}

<a id="section-1002-original-exercise-15-domain-completion"></a>
### Original exercise 15 — domain completion {#section-1004-original-exercise-15-domain-completion}

The original compact answer gives $[\\log L,\\log U]$ when $L>0$. For the full declared positive parameter domain, first restrict the reported set to $(0,\\infty)$ and then apply logarithm:
$$C_\\eta=\\{\\log t:t\\in[L,U]\\cap(0,\\infty)\\}.$$
For a finite interval with $L\\le U$, there are three cases. If $0<L\\le U$, the image is $[\\log L,\\log U]$. If $L\\le0<U$, it is $(-\\infty,\\log U]$: zero is excluded from the parameter domain, and the logarithm tends to minus infinity as positive values approach zero. If $U\\le0$, the restricted set and its image are empty. At a state with $\\theta>0$, membership of $\\theta$ in the restricted interval is exactly membership of $\\log\\theta$ in its image, so this domain handling preserves the original coverage. It supplies the cases left conditional in the short solution without evaluating logarithms outside their domain.


<a id="section-1009-22-source-note-for-nonnegative-integration"></a>
## 22. Source note for nonnegative integration {#section-1011-22-source-note-for-nonnegative-integration}

The expected-size identity in §18 imports Tonelli's theorem; it does not assume that expected size is finite. One accessible author source is Terence Tao, [245B, Notes 0: A quick review of measure and integration theory](https://terrytao.wordpress.com/2009/01/01/245b-notes-0-a-quick-review-of-measure-and-integration-theory/), the stated Fubini–Tonelli theorem. Its hypotheses are met here by the jointly measurable nonnegative membership indicator and the product of a probability measure with Lebesgue measure, both sigma-finite. This reference supports the integration step, not the model assumptions or an empirical coverage claim.

<a id="section-1013-sources"></a>

<a id="section-429-summary"></a>
## Summary {#section-431-summary}

<a id="section-822-15-summary-and-forward-route"></a>
Confidence sets are random procedures with repeated-sampling coverage. Inverting a level test for every candidate value proves coverage, and pivots are a convenient route to the same construction. Exact normal and binomial examples expose the roles of tail allocation, discreteness, nuisance parameters, width, transformation, and boundaries. Later chapters replace exact pivots with limiting approximations and then ask whether resampling can estimate the relevant sampling law.


<a id="section-825-16-development-the-event-identity-and-its-logical-bound"></a>

<a id="section-1019-summary"></a>
Confidence sets invert calibrated nonrejection events. Coverage is a repeated-law property, while width, connectivity, parameter-domain restrictions and selection determine what a reported set says. Exact normal and discrete binomial constructions have different geometry; weak or absent identification can force wide or disconnected sets. Transform the complete set on the correct domain and distinguish confidence for a parameter from prediction of a new observation.

The main route continues to [Consistency, Asymptotic Normality, and Delta Methods](consistency-asymptotic-normality-and-delta-methods.md).

## Exercises {#section-219-13-exercises-with-complete-solutions}

<a id="section-219-1-trivial-full-set"></a>
### 1. Trivial full set {#section-221-1-trivial-full-set}

**Exercise 11.1**

Show $C(X)=T$ has coverage one.

<details>
<summary>Hint 1</summary>

Identify the codomain of the target.

</details>

<details>
<summary>Hint 2</summary>

Every possible target value lies in the fixed full set.

</details>

<details>
<summary>Solution</summary>

**Solution.** For every state, $\\tau (\\theta )\\in T=C(X)$ for every observation. The coverage event is certain, so its probability is one. This proves why coverage needs an informativeness comparison.

</details>

<a id="section-246-2-fixed-singleton"></a>
### 2. Fixed singleton {#section-248-2-fixed-singleton}

**Exercise 11.2**

If $C(X)={0}$ always and the target is $\\theta \\in R$, find coverage at $\\theta =0$ and at $\\theta =1$.

<details>
<summary>Hint 1</summary>

Evaluate the same membership event at each stated parameter.

</details>

<details>
<summary>Hint 2</summary>

The singleton contains zero always and one never.

</details>

<details>
<summary>Solution</summary>

**Solution.** At zero the fixed set always contains the target, so coverage is one. At one it never does, so coverage is zero. Pointwise success at one state is not uniform coverage.

</details>

<a id="section-273-3-prove-inversion-coverage"></a>
### 3. Prove inversion coverage {#section-275-3-prove-inversion-coverage}

**Exercise 11.3**

For a fixed true state $\\theta $, identify the noncoverage event of an inverted test family.

<details>
<summary>Hint 1</summary>

Use the test indexed by the true target.

</details>

<details>
<summary>Hint 2</summary>

Noncoverage is exactly rejection of that true null, so use its level bound.

</details>

<details>
<summary>Solution</summary>

**Solution.** Let $t_0=\\tau (\\theta )$. By definition, $t_0\\notin C(X)$ exactly when the test of $H_{0,t_0}$ rejects. Its probability is at most $\\alpha $; therefore coverage is at least $1-\\alpha $.

</details>

<a id="section-300-4-generate-a-test-from-a-set"></a>
### 4. Generate a test from a set {#section-302-4-generate-a-test-from-a-set}

**Exercise 11.4**

Given a $1-\\alpha $ confidence set, define a level-$\\alpha $ test of $\\tau (\\theta )=t_0$.

<details>
<summary>Hint 1</summary>

Reverse the defining membership rule.

</details>

<details>
<summary>Hint 2</summary>

Reject a candidate only when the confidence procedure excludes it.

</details>

<details>
<summary>Solution</summary>

**Solution.** Reject when $t_0\\notin C(X)$. For every state with target $t_0$, the rejection event is the noncoverage event and has probability at most $\\alpha $.

</details>

<a id="section-327-5-invert-a-p-value-family"></a>
### 5. Invert a p-value family {#section-329-5-invert-a-p-value-family}

**Exercise 11.5**

If candidate $t$ is rejected when $p_t(x)\\le 0.05$, which candidates form the 95% confidence set?

<details>
<summary>Hint 1</summary>

Keep the complement of the rejection inequality.

</details>

<details>
<summary>Hint 2</summary>

If rejection includes equality at 0.05, retention uses a strict inequality.

</details>

<details>
<summary>Solution</summary>

**Solution.** The set is \${t:p_t(x)>0.05}$, subject to the declared equality convention. These are exactly the candidates not rejected by their level-0.05 tests.

</details>

<a id="section-354-6-known-variance-half-width"></a>
### 6. Known-variance half-width {#section-356-6-known-variance-half-width}

**Exercise 11.6**

For $\\sigma =4$, $n=64$, and $z_{0.975}=1.96$, find the 95% normal interval half-width.

<details>
<summary>Hint 1</summary>

The known-variance margin is quantile times standard error.

</details>

<details>
<summary>Hint 2</summary>

Use $4/\\sqrt{64}=1/2$ before multiplying by 1.96.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is $1.96(4)/8=0.98$.

</details>

<a id="section-381-7-sample-size-and-width"></a>
### 7. Sample size and width {#section-383-7-sample-size-and-width}

**Exercise 11.7**

By what factor must sample size increase to divide a known-variance interval's half-width by three?

<details>
<summary>Hint 1</summary>

Write width as a constant divided by the square root of sample size.

</details>

<details>
<summary>Hint 2</summary>

A threefold increase in the denominator requires a ninefold increase in its square.

</details>

<details>
<summary>Solution</summary>

**Solution.** Width is proportional to $1/\\sqrt{n}$. To divide it by three, multiply $\\sqrt{n}$ by three, hence multiply $n$ by nine.

</details>

<a id="section-408-8-one-sided-normal-bound"></a>
### 8. One-sided normal bound {#section-410-8-one-sided-normal-bound}

**Exercise 11.8**

For $\\bar{X}=10$, $\\sigma /\\sqrt{n}=2$, and $z_{0.95}=1.645$, calculate the 95% lower confidence bound.

<details>
<summary>Hint 1</summary>

A lower bound subtracts a one-sided margin from the observed mean.

</details>

<details>
<summary>Hint 2</summary>

Compute $10-1.645(2)$ and retain all larger candidate means.

</details>

<details>
<summary>Solution</summary>

**Solution.** The finite endpoint is $10-1.645(2)=6.71$, so the confidence set is $[6.71,\\infty )$.

</details>

<a id="section-435-9-verify-one-sided-coverage"></a>
### 9. Verify one-sided coverage {#section-437-9-verify-one-sided-coverage}

**Exercise 11.9**

Prove $L=\\bar{X}-z_{1-\\alpha }\\sigma /\\sqrt{n}$ satisfies $P_\\mu (L\\le \\mu )=1-\\alpha $.

<details>
<summary>Hint 1</summary>

Rearrange the bound's coverage event into a standardized-mean event.

</details>

<details>
<summary>Hint 2</summary>

Under the stated normal model its probability is the standard-normal CDF at the selected quantile.

</details>

<details>
<summary>Solution</summary>

**Solution.** $L\\le \\mu $ is equivalent to $\\sqrt{n}(\\bar{X}-\\mu )/\\sigma \\le z_{1-\\alpha }$. The standardised mean is standard normal, so the probability is $\\Phi (z_{1-\\alpha })=1-\\alpha $.

</details>

<a id="section-462-10-t-rather-than-z"></a>
### 10. t rather than z {#section-464-10-t-rather-than-z}

**Exercise 11.10**

Why does substituting $S$ for unknown $\\sigma $ but retaining a standard-normal cutoff not give the exact small-sample normal interval?

<details>
<summary>Hint 1</summary>

Replacing a known scale by a random estimate changes the pivot.

</details>

<details>
<summary>Hint 2</summary>

Under iid normal sampling the exact studentized pivot has $n-1$ t degrees of freedom.

</details>

<details>
<summary>Solution</summary>

**Solution.** Studentisation changes the pivot's distribution. Under normal sampling, $\\sqrt{n}(\\bar{X}-\\mu )/S$ has a $t_{n-1}$ distribution with heavier tails, so exact calibration uses a t quantile.

</details>

<a id="section-489-11-pivot-inversion"></a>
### 11. Pivot inversion {#section-491-11-pivot-inversion}

**Exercise 11.11**

If $Q(X,\\theta )$ has a parameter-free distribution and $P(a\\le Q\\le b)=0.90$, prove \${t:a\\le Q(X,t)\\le b}$ has 90% coverage.

<details>
<summary>Hint 1</summary>

Evaluate the reported set at the actual true parameter.

</details>

<details>
<summary>Hint 2</summary>

The membership event then equals the parameter-free pivot event.

</details>

<details>
<summary>Solution</summary>

**Solution.** At the true $\\theta $, membership of $\\theta $ in the set is exactly the event $a\\le Q(X,\\theta )\\le b$, whose probability is 0.90 by the pivot property.

</details>

<a id="section-516-12-all-zero-binomial-endpoint"></a>
### 12. All-zero binomial endpoint {#section-518-12-all-zero-binomial-endpoint}

**Exercise 11.12**

For $n=10$, $s=0$, and $\\alpha =0.05$, express the exact upper endpoint.

<details>
<summary>Hint 1</summary>

At zero successes, invert the probability of the all-failure outcome.

</details>

<details>
<summary>Hint 2</summary>

Solve $(1-U)^{10}=\\alpha/2=0.025$.

</details>

<details>
<summary>Solution</summary>

**Solution.** It is $U=1-0.025^{1/10}$. Numerically evaluating is optional; the formula follows from $(1-U)^{10}=0.025$.

</details>

<a id="section-543-13-failure-of-the-naive-zero-success-interval"></a>
### 13. Failure of the naive zero-success interval {#section-545-13-failure-of-the-naive-zero-success-interval}

**Exercise 11.13**

What does $\\hat{p}\\pm 1.96\\sqrt{\\hat{p}(1-\\hat{p})/n}$ report when $s=0$, and why is that suspect?

<details>
<summary>Hint 1</summary>

Insert the observed proportion zero into its plug-in standard error.

</details>

<details>
<summary>Hint 2</summary>

The estimated variance collapses even though a positive underlying success probability can yield all failures.

</details>

<details>
<summary>Solution</summary>

**Solution.** It reports $[0,0]$ before any clipping because $\\hat{p}=0$ makes the estimated standard error zero. Yet positive $p$ values can produce zero successes with appreciable probability, so the procedure cannot have uniform 95% coverage near the boundary.

</details>

<a id="section-570-14-conservative-exactness"></a>
### 14. Conservative exactness {#section-572-14-conservative-exactness}

**Exercise 11.14**

Does “exact 95% binomial interval” imply coverage equals 0.95 for every $p$?

<details>
<summary>Hint 1</summary>

Distinguish a finite-sample lower bound on coverage from equality.

</details>

<details>
<summary>Hint 2</summary>

Discrete tail jumps can leave the noncoverage probability below the nominal bound.

</details>

<details>
<summary>Solution</summary>

**Solution.** No. Exact means finite-sample coverage is guaranteed to be at least 0.95 under the binomial model. Discrete tail jumps commonly make the actual coverage larger.

</details>

<a id="section-597-15-increasing-transformation"></a>
### 15. Increasing transformation {#section-599-15-increasing-transformation}

**Exercise 11.15**

If $[L,U]$ covers positive $\\theta $ and $\\eta =\\log\\theta $, give the transformed set.

<details>
<summary>Hint 1</summary>

Transform the entire positive-parameter set.

</details>

<details>
<summary>Hint 2</summary>

The logarithm preserves order only on its positive domain; intersect with that domain first if needed.

</details>

<details>
<summary>Solution</summary>

**Solution.** Logarithm is increasing on positive values, so the image is $[\\log L,\\log U]$, assuming $L>0$.

</details>

<a id="section-624-16-decreasing-transformation"></a>
### 16. Decreasing transformation {#section-626-16-decreasing-transformation}

**Exercise 11.16**

If $0<L\\le \\theta \\le U$ and $\\eta =1/\\theta $, give the endpoint order.

<details>
<summary>Hint 1</summary>

Check the direction of the reciprocal function on positive numbers.

</details>

<details>
<summary>Hint 2</summary>

The upper original endpoint becomes the lower transformed endpoint.

</details>

<details>
<summary>Solution</summary>

**Solution.** Reciprocal is decreasing on positive values, so $1/U\\le \\eta \\le 1/L$. The transformed interval is $[1/U,1/L]$.

</details>

<a id="section-651-17-squared-image"></a>
### 17. Squared image {#section-653-17-squared-image}

**Exercise 11.17**

Find the image of $[-3,-1]$ under $g(\\theta )=\\theta ^{2}$.

<details>
<summary>Hint 1</summary>

Squaring is decreasing on the negative half-line.

</details>

<details>
<summary>Hint 2</summary>

Square both endpoints and put the smaller result first.

</details>

<details>
<summary>Solution</summary>

**Solution.** Squaring reverses order on the negative half-line: the image is $[1,9]$.

</details>

<a id="section-678-18-confidence-versus-prediction-width"></a>
### 18. Confidence versus prediction width {#section-680-18-confidence-versus-prediction-width}

**Exercise 11.18**

In the known-variance normal model, compare the standard-error factors for mean confidence and new-observation prediction.

<details>
<summary>Hint 1</summary>

A future independent observation contributes its own variance.

</details>

<details>
<summary>Hint 2</summary>

Add $\\sigma^2$ to the mean-estimation variance $\\sigma^2/n$ before taking a square root.

</details>

<details>
<summary>Solution</summary>

**Solution.** Mean confidence uses $\\sigma /\\sqrt{n}$. Prediction uses $\\sigma \\sqrt{1+1/n}$, including both future-observation variance $\\sigma ^{2}$ and mean-estimation variance $\\sigma ^{2}/n$; it is larger.

</details>

<a id="section-705-19-selection-after-intervals"></a>
### 19. Selection after intervals {#section-707-19-selection-after-intervals}

**Exercise 11.19**

Why can displaying only intervals that exclude zero reduce conditional coverage among displayed results?

<details>
<summary>Hint 1</summary>

Conditional coverage after display is a different probability statement.

</details>

<details>
<summary>Hint 2</summary>

Selecting large apparent effects can enrich the displayed cases for unusually large errors.

</details>

<details>
<summary>Solution</summary>

**Solution.** Display is selected using the same event that indicates rejection of zero. Conditioning on selection enriches the collection for large estimation errors as well as true effects. Marginal preselection coverage does not automatically survive that conditioning.

</details>

<a id="section-732-20-weak-identification"></a>
### 20. Weak identification {#section-734-20-weak-identification}

**Exercise 11.20**

Why should an honestly inverted confidence set often widen when many parameter values induce nearly indistinguishable laws?

<details>
<summary>Hint 1</summary>

Inversion retains the candidate values that calibrated tests cannot reject.

</details>

<details>
<summary>Hint 2</summary>

Nearly identical observation laws limit power, so honest sets may be wide or disconnected.

</details>

<details>
<summary>Solution</summary>

**Solution.** Tests then have low power to reject those candidate values while maintaining null calibration. Since the confidence set contains nonrejected candidates, many values remain, producing a wide or irregular set.

</details>


<a id="section-760-14-investigation-invert-an-entire-test-family"></a>

<a id="section-934-19-optional-practice-extensions"></a>
### 21. SI-12-E21. A disconnected ratio set {#section-938-si-12-e21-a-disconnected-ratio-set}

**Exercise 11.21**

For the independent unit-variance normal ratio experiment in §18, use $c=2$ and the displayed observation $(a,b)=(3,0)$. Derive the confidence set, its coverage level and its nuisance-parameter scope. Explain why interpreting it as the bounded interval between the two roots would reverse the decision.


<details>
<summary>Hint 1</summary>

Insert $(a,b)=(3,0)$ into the retained quadratic inequality.

</details>

<details>
<summary>Hint 2</summary>

The resulting condition is $9\\le4(1+r^2)$, so retention is outside the two roots.

</details>


<a id="section-959-si-12-e22-an-identification-limit-on-diameter"></a>
### 22. SI-12-E22. An identification limit on diameter {#section-961-si-12-e22-an-identification-limit-on-diameter}

**Exercise 11.22**

Let two states induce the same observation law but have real targets $t_1<t_2$. A confidence procedure with measurable diameter covers each target with probability at least $1-\\alpha$, where $0<\\alpha<1/2$. Prove a lower bound on the probability that its diameter is at least $t_2-t_1$. Apply it to the states $h$ and $-h$, $h>0$, in $X\\sim N(\\theta^2,1)$. Does the conclusion require both signs in every realized set?


<details>
<summary>Hint 1</summary>

Evaluate both coverage claims under their common observation law.

</details>

<details>
<summary>Hint 2</summary>

A union bound gives probability at least $1-2\\alpha$ that both targets belong, forcing the stated diameter.

</details>


<a id="section-982-20-solutions-to-practice-extensions"></a>

<a id="section-1057-solutions"></a>
## Solutions {#section-1059-solutions}

<a id="section-984-20-solutions-to-practice-extensions"></a>
<details>
<summary>Solution</summary>

<a id="section-987-si-12-e21-a-disconnected-ratio-set-solution"></a>
### SI-12-E21. A disconnected ratio set — solution {#section-989-si-12-e21-a-disconnected-ratio-set-solution}

Under candidate $r$, $A-rB$ has mean zero and variance $1+r^2$ for every $\\mu_B\\ne0$ satisfying $\\mu_A=r\\mu_B$, because the observations are independent. Retention is $(a-rb)^2\\le4(1+r^2)$. At $(3,0)$ this is $9\\le4+4r^2$, or $|r|\\ge\\sqrt5/2$. Thus the set is $(-\\infty,-\\sqrt5/2]\\cup[\\sqrt5/2,\\infty)$. Its coverage is exactly $P(|Z|\\le2)=1-\\alpha$, with $\\alpha=2\\{1-\\Phi(2)\\}$, at every admissible state. All real ratios are possible and the nuisance mean may be any nonzero real number. Retaining the interval between the roots would instead keep $5-4r^2\\ge0$, reversing the inequality; it would not invert the declared tests.

</details>
<details>
<summary>Solution</summary>

<a id="section-995-si-12-e22-an-identification-limit-on-diameter-solution"></a>
### SI-12-E22. An identification limit on diameter — solution {#section-997-si-12-e22-an-identification-limit-on-diameter-solution}

Under the common observation law, each nonmembership event has probability at most $\\alpha$. The union bound gives $P\\{t_1,t_2\\in C(X)\\}\\ge1-2\\alpha$. Whenever both targets belong, diameter is at least $t_2-t_1$, so $P\\{\\operatorname{diam}C(X)\\ge t_2-t_1\\}\\ge1-2\\alpha$. One can define empty-set diameter as zero; the implication uses only sets containing both targets. At the states $h$ and $-h$, the common law is $N(h^2,1)$ and the target separation is $2h$. Therefore diameter is at least $2h$ with probability at least $1-2\\alpha$. This is a probability bound, not a requirement that both signs occur in every realized set. It rules out uniformly narrow, high-coverage localization of a sign that the observation law cannot distinguish.

</details>
<a id="section-1000-21-elaboration-of-original-solution-15-logarithmic-doma"></a>

## Sources {#section-1015-sources}

All earlier references, exact theorem locators, probability-model qualifications and source notes in this chapter remain part of the exposition. The book [reference guide](back-matter/references-and-attribution-guide.md) records the primary source map.

<a id="section-1017-summary"></a>
`;export{e as default};