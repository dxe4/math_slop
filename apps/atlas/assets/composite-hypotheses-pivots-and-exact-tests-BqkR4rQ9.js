var e=`---
parent_id: book-principles-statistical-inference
chapter_id: composite-hypotheses-pivots-and-exact-tests
title: "Composite Hypotheses, Pivots, and Exact Tests"
level: advanced-undergraduate
estimated_minutes: 310
license: CC BY-SA 4.0
---

# Composite Hypotheses, Pivots, and Exact Tests {#section-1-composite-hypotheses-pivots-and-exact-tests}

Most useful null hypotheses contain many laws. Unknown variance, baseline risk, margins, and other nuisance quantities can change a statistic's distribution even when the target null is fixed. Exact inference either controls the worst null state or constructs a reference distribution whose nuisance dependence disappears through monotonicity, conditioning, invariance, or a pivot.

This chapter develops uniform composite-null calibration, supremum p-values, exact normal pivots, sign and binomial tests, conditional exponential-family tests, and Fisher's exact test. “Exact” always means finite-sample calibration under the stated experiment; it does not mean assumption-free, uniquely optimal, or equal to the nominal error at every state.

<a id="section-5-1-composite-size-is-a-supremum"></a>
## 1. Composite size is a supremum {#section-7-1-composite-size-is-a-supremum}

For

$H_0:\\theta \\in \\Theta _0$,

a test $\\phi $ has size

$\\sup_{\\theta \\in \\Theta _0}E_\\theta [\\phi (X)]$.

Pointwise level at one convenient null value does not control the composite null. A nuisance parameter can move tail probability, and an estimated nuisance value is random rather than the true state.

Four exact strategies recur:

1. prove a least-favourable null value;
2. maximise a valid tail probability over nuisance states;
3. condition on a statistic whose null conditional law is nuisance-free;
4. transform to a pivot with parameter-free null distribution.

Each strategy can sacrifice power or discard information. Exactness does not select a universally best construction.

<a id="section-26-2-boundary-calibration-through-monotonicity"></a>
## 2. Boundary calibration through monotonicity {#section-28-2-boundary-calibration-through-monotonicity}

For $S\\sim Binomial(n,p)$, consider

$H_0:p\\le p_0$ against $p>p_0$.

The coupling proof from the testing chapter shows $P_p(S\\ge c)$ increases with $p$. Therefore the largest null rejection probability occurs at $p_0$. The upper-tail p-value

\\[p_+(s)=P_{p_0}(S\\ge s)\\]

is valid for the whole composite null.

This boundary argument uses a statistic monotone in the parameter. For a nonmonotone rejection region or multiparameter nuisance, the boundary need not be least favourable.

<a id="section-40-3-supremum-p-values-are-safe-but-conservative"></a>
## 3. Supremum p-values are safe but conservative {#section-42-3-supremum-p-values-are-safe-but-conservative}

Suppose $p_\\theta (x)$ is a valid p-value for every point null $\\theta $. Define

$p_{\\sup}(x)=\\sup_{\\theta \\in \\Theta _0}p_\\theta (x)$.

For true null state $\\theta _0$, the event \${p_{\\sup}\\le u}$ is contained in \${p_{\\theta _0}\\le u}$. Hence

$P_{\\theta _0}(p_{\\sup}\\le u)\\le u$.

Thus $p_{\\sup}$ is valid for the composite null.

Maximisation protects against every null state but can be very conservative, especially when different nuisance values are worst for different datasets. Replacing the supremum by a plug-in estimate generally loses this proof.

<a id="section-54-4-a-pivot-removes-unknown-scale"></a>
## 4. A pivot removes unknown scale {#section-56-4-a-pivot-removes-unknown-scale}
For $n\\ge2$ iid $Normal(\\mu ,\\sigma ^{2})$ observations with $\\sigma >0$,

\\[T=\\sqrt{n}(\\bar{X}-\\mu )/(S)\\]

has a $t_{n-1}$ distribution independent of both $\\mu $ and $\\sigma $. To test

\\[H_0:\\mu =\\mu _0\\]

For $0<\\alpha <1$, with unknown $\\sigma $, reject when

$|\\sqrt{n}(\\bar{X}-\\mu _0)/S|>t_{n-1,1-\\alpha /2}$.

The test has exact size $\\alpha $ for every $\\sigma >0$ under independent normal sampling. Inverting it gives the t confidence interval derived in the next chapter.

Studentising arbitrary data does not create an exact t pivot. Normal orthogonal decomposition is the theorem that removes nuisance scale here.

<a id="section-71-5-chi-square-and-f-pivots"></a>
## 5. Chi-square and F pivots {#section-73-5-chi-square-and-f-pivots}

Under iid normal sampling,

$Q=(n-1)S^{2}/\\sigma ^{2}\\sim \\chi ^{2}_{n-1}$.

Therefore an exact central confidence interval for variance is

$[(n-1)S^{2}/\\chi ^{2}_{n-1,1-\\alpha /2}, (n-1)S^{2}/\\chi ^{2}_{n-1,\\alpha /2}]$.

The endpoint order reverses because variance appears in the denominator of the pivot.

For independent normal samples, the ratio of scaled sample variances has an F distribution under a variance-ratio null. These pivots are highly sensitive to nonnormal tails; exact normal-theory variance inference is not robust merely because means may have a CLT.

<a id="section-85-6-exact-sign-tests-need-a-median-and-tie-convention"></a>
## 6. Exact sign tests need a median and tie convention {#section-87-6-exact-sign-tests-need-a-median-and-tie-convention}

Suppose $X_1,\\dots,X_n$ are independent from a continuous distribution with unique median $m_0$. Under $H_0:median=m_0$,

$B=\\sum _i\\mathbf 1_{\\{X_i>m_0\\}}\\sim Binomial(n,1/2)$.

Binomial tails therefore give an exact distribution-free sign test within this model class. It uses only directions and can have lower power than magnitude-sensitive tests under a normal model, but it remains calibrated across continuous shapes.

If $P(X=m_0)>0$, signs are not Bernoulli one-half without a rule. Dropping ties changes sample size randomly; randomising tied signs or constructing conservative bounds must be declared.

<a id="section-95-7-two-sided-exact-tests-need-an-ordering"></a>
## 7. Two-sided exact tests need an ordering {#section-97-7-two-sided-exact-tests-need-an-ordering}

A discrete statistic has no unique notion of “at least as extreme” in two directions. For binomial count $S$ under point null $p_0$, possibilities include:

- double the smaller one-sided tail, capped at one;
- sum probabilities of outcomes with null mass no greater than the observed mass;
- invert an equal-tail confidence procedure;
- choose a likelihood-ratio ordering.

These can return different p-values while each is valid under its construction. Discreteness often makes them conservative, and some orderings produce nonnested confidence sets.

Reporting “the exact binomial p-value” without the ordering and randomisation convention is incomplete.

<a id="section-108-8-conditioning-can-eliminate-exponential-family-nuisanc"></a>
## 8. Conditioning can eliminate exponential-family nuisance parameters {#section-110-8-conditioning-can-eliminate-exponential-family-nuisanc}

Suppose under the null a joint mass has exponential-family form

$f_{\\psi ,\\lambda }(x)=h(x)\\exp{\\psi T(x)+\\lambda S(x)-A(\\psi ,\\lambda )}$,

where $\\psi $ is the target parameter and $\\lambda $ nuisance. Conditional on $S=s$, factors depending only on $\\lambda $ and normalisation cancel. If the resulting conditional law depends on $\\psi $ but not $\\lambda $, it can calibrate a nuisance-free exact test.

Conditioning spends information: variation in $S$ is no longer used to distinguish target values. The gain is exact nuisance control. Whether conditioning is desirable depends on the experiment and comparison criterion.

<a id="section-118-9-fisher-s-exact-test-is-a-conditional-hypergeometric-t"></a>
## 9. Fisher's exact test is a conditional hypergeometric test {#section-120-9-fisher-s-exact-test-is-a-conditional-hypergeometric-t}

**Worked example 10.2.**

Consider two groups of fixed sizes $n_1,n_0$, binary outcomes, and total successes $m$. Under the null of a common success probability and independent binomial sampling, condition on total $m$. If $A$ is the number of successes in group 1, then

$P(A=a\\mid m)=\\frac{\\binom{m}{a}\\binom{N-m}{n_1-a}}{\\binom{N}{n_1}}$,

where $N=n_1+n_0$ and feasible $a$ respects all margins.

The common probability cancels; $A$ is hypergeometric. A one-sided alternative of higher group-1 success probability uses the upper tail. A two-sided test again needs an ordering.

The same hypergeometric reference arises under random assignment with a sharp null and fixed margins, but its interpretation comes from the assignment design rather than two independent binomial populations. Identical arithmetic can support different scopes of inference.

<a id="section-132-10-similar-tests-control-every-nuisance-state-equally"></a>
## 10. Similar tests control every nuisance state equally {#section-134-10-similar-tests-control-every-nuisance-state-equally}

A test is **similar** on a composite null if

\\[E_{\\psi _0,\\lambda }[\\phi (X)]=\\alpha \\]

for every nuisance value $\\lambda $. Conditional tests can achieve similarity when conditional rejection probability equals $\\alpha $ for every value of a sufficient nuisance statistic.

If the conditional sample space is discrete, exact equality may require randomisation. Without it, conditional rejection is at most $\\alpha $, producing a conservative test after averaging.

Similarity is stronger than level control. It does not by itself prove high power or uniqueness.

<a id="section-144-11-composite-likelihood-ratio-tests-require-calibration"></a>
## 11. Composite likelihood-ratio tests require calibration {#section-146-11-composite-likelihood-ratio-tests-require-calibration}

**Optional advanced continuation.** The asymptotic chi-square, boundary-mixture and process limits mentioned here require later asymptotic theory; they are scope warnings rather than results proved in this chapter. The exact normal pivots and finite conditional table calculations below have their own explicit derivations and do not rely on those limits.

The generalized likelihood ratio

\\[\\Lambda =\\sup_{\\theta \\in \\Theta _0}L(\\theta )/\\sup_{\\theta \\in \\Theta }L(\\theta )\\]

offers a systematic statistic, but Neyman–Pearson optimality does not generally extend to composite sets. Exact calibration can come from a pivot or enumeration; otherwise regular asymptotic chi-square results require interior parameters, identifiable nuisance, nonsingular information, and fixed dimension.

At a boundary or under a nuisance parameter present only under the alternative, the limiting law can be a mixture or supremum process rather than ordinary chi-square. Simulating from a fitted null is a parametric bootstrap approximation whose uniform validity must be justified.

<a id="section-156-12-ump-unbiased-and-invariant-scopes"></a>
## 12. UMP, unbiased, and invariant scopes {#section-158-12-ump-unbiased-and-invariant-scopes}

One-sided monotone-likelihood-ratio families can have uniformly most powerful tests. Two-sided alternatives usually cannot because power desired in opposite tails competes.

Restrictions can restore an optimum. A test is unbiased when its power at every alternative is at least its rejection probability throughout the null. UMP unbiased tests and invariant tests optimise within narrower classes. Exact normal two-sided t procedures have such classical optimality properties under their full assumptions, but “UMP” without the qualifier would be false.

<a id="section-162-13-exactness-audit"></a>
## 13. Exactness audit {#section-164-13-exactness-audit}

Record:

1. full composite null and nuisance parameter space;
2. statistic and two-sided ordering;
3. least-favourable, supremum, conditional, pivotal, or randomisation argument;
4. tie and boundary randomisation;
5. fixed-sample, conditional, or assignment repetition law;
6. normality, independence, continuity, and positivity assumptions;
7. pointwise size, uniform size, or similarity;
8. power cost of conservatism or conditioning.

<a id="section-175-14-exercises-with-complete-solutions"></a>
## 16. Development: why Gaussian rotation creates the pivots {#section-679-16-development-why-gaussian-rotation-creates-the-pivots}

**Worked example 10.1.**

Start with the model, not the name of a distribution. Let $n\\ge2$ be an integer and suppose $X_1,\\ldots,X_n$ are independent $N(\\mu,\\sigma^2)$ variables, with $\\mu\\in\\mathbb R$ and $\\sigma>0$. Write $Z_i=(X_i-\\mu)/\\sigma$. The vector $Z=(Z_1,\\ldots,Z_n)^\\top$ has density $(2\\pi)^{-n/2}\\exp(-z^\\top z/2)$ on $\\mathbb R^n$. Its round contours are the useful feature: rotating coordinates leaves both squared length and the density unchanged.

Choose an orthogonal matrix $H$ whose first row is $e^\\top=(1,\\ldots,1)/\\sqrt n$. Such a matrix exists by completing this unit vector to an orthonormal basis. Set $Y=HZ$. Since $H^{-1}=H^\\top$, its change-of-variables Jacobian has absolute determinant one, and $z^\\top z=y^\\top y$. Thus the joint density of $Y$ is the product of $n$ standard-normal densities. This proves, rather than assumes, that the coordinates $Y_1,\\ldots,Y_n$ are independent $N(0,1)$ variables.

The first coordinate is
$$Y_1=\\frac{\\sqrt n(\\bar X-\\mu)}{\\sigma}.$$
The remaining coordinates describe contrasts: their coefficient rows sum to zero, so adding the same constant to all observations leaves them unchanged. Orthogonal projection onto the constant-vector line has squared length $Y_1^2$; the residual projection has squared length
$$Q=\\sum_{j=2}^nY_j^2
 =\\frac{\\sum_{i=1}^n(X_i-\\bar X)^2}{\\sigma^2}
 =\\frac{(n-1)S^2}{\\sigma^2}.$$
The chi-square distribution with $\\nu$ degrees of freedom is, by definition here, the law of a sum of squares of $\\nu$ independent standard normals. Consequently $Q\\sim\\chi^2_{n-1}$, and $Q$ is independent of $Y_1$. The independence follows because $Q$ is a function of coordinates independent of $Y_1$, not merely because a covariance calculation gives zero.

This distinction matters. Independent normal coordinates remain normal under linear transformations, and their density factorizes when the covariance is diagonal. For general data, zero covariance does not imply independence. Nor does the algebraic residual identity establish a chi-square law: every numerical vector has a mean and residual projection, but only the declared Gaussian experiment gives those projections the distributions used above. The geometry supplies an identity; the probability law supplies calibration.

For a concrete three-observation basis, take rows $(1,1,1)/\\sqrt3$, $(1,-1,0)/\\sqrt2$, and $(1,1,-2)/\\sqrt6$. Their pairwise inner products vanish and each has length one. The second coordinate compares the first two observations; the third compares their average with the third. There are two residual directions because fitting one common mean removes one of three coordinates. This is the reason for $n-1$ residual degrees of freedom, not a correction added merely to make software agree.

Now define a Student variable with $\\nu$ degrees of freedom as $Z_0/\\sqrt{V/\\nu}$, where $Z_0\\sim N(0,1)$ and $V\\sim\\chi^2_\\nu$ are independent. The decomposition proves
$$\\frac{\\sqrt n(\\bar X-\\mu)}{S}
 =\\frac{Y_1}{\\sqrt{Q/(n-1)}}\\sim t_{n-1}.$$
Since $Q>0$ almost surely, $S>0$ almost surely. One may define the statistic arbitrarily on the null-probability event $S=0$ to obtain a rule on the entire sample space. A recorded constant sample under a rounded or discrete measurement law is a different issue: that event need not have probability zero under that law, so the continuous-normal theorem cannot be invoked without examining measurement.

For observed data $(1,2,3)$, $\\bar x=2$ and $s^2=1$, so the statistic for testing $\\mu_0=0$ is $2\\sqrt3$. This is a number; its reference is the $t_2$ law only under the stated sampling assumptions. The same calculation does not estimate a probability that the fixed null is true. Its null tail probability describes repetitions of this statistic under that null and the normal model.

The definition also explains the heavier tails of a Student reference. Even when $Y_1$ is moderate, an unusually small residual denominator can produce a large ratio. Treating $S$ as the fixed true $\\sigma$ suppresses that source of variation. This is a qualitative explanation, not a proof that any particular observed ratio must increase its p-value under every alternative ordering. The exact cutoff comes from the ratio distribution just established.

For two independent normal samples of sizes $n_1,n_2\\ge2$, put $\\nu_j=n_j-1$ and let their positive variances be $\\sigma_j^2$. The sample decompositions give independent $Q_j=\\nu_jS_j^2/\\sigma_j^2\\sim\\chi^2_{\\nu_j}$. Define $F_{\\nu_1,\\nu_2}$ as the law of $(Q_1/\\nu_1)/(Q_2/\\nu_2)$. Therefore
$$\\frac{S_1^2/S_2^2}{\\sigma_1^2/\\sigma_2^2}\\sim F_{\\nu_1,\\nu_2}.$$
For a null variance ratio $\\rho_0>0$, substitute $\\rho_0$ in the denominator. For $0<\\alpha<1$, inversion of central F quantiles $f_{\\alpha/2},f_{1-\\alpha/2}$ gives the ratio interval
$$\\left[\\frac{S_1^2/S_2^2}{f_{1-\\alpha/2}},
             \\frac{S_1^2/S_2^2}{f_{\\alpha/2}}\\right].$$
The reciprocal endpoint order is part of solving the inequalities. Independence between samples is essential: separate normal marginals alone do not establish the independent chi-square ratio.


The same residual law supplies the variance interval without introducing an estimate of its own reference scale. Write $\\nu=n-1$, and let $q_L,q_U$ be the $\\alpha/2$ and $1-\\alpha/2$ quantiles of $\\chi^2_\\nu$. Both are positive and $q_L<q_U$. The event $q_L\\le\\nu S^2/\\sigma^2\\le q_U$ is equivalent, almost surely, to $\\nu S^2/q_U\\le\\sigma^2\\le\\nu S^2/q_L$. Its probability is exactly $1-\\alpha$ because the chi-square law has a continuous positive density on positive values. The observed $S^2$ becomes an endpoint input after calibration; it does not replace $\\sigma^2$ in the law of $Q$. Confusing those roles would erase the uncertainty being measured. This connects the normal residual geometry directly to the reciprocal inequalities in §5.

A short failure example keeps the normality boundary visible. Take two independent observations, each equal to $-1$ or $1$ with probability one-half. If they agree, $S^2=0$ and $\\bar X$ is $-1$ or $1$; if they disagree, $\\bar X=0$ and $S^2=2$. The events $\\{\\bar X=0\\}$ and $\\{S^2=2\\}$ are identical and have probability one-half, whereas independence would give intersection probability one-quarter. Studentisation has not made the mean and variance independent, and division by zero occurs with positive probability. This is a finite counterexample, not a criticism of an appropriately justified large-sample approximation.


<a id="section-719-measurability-in-the-supremum-construction"></a>
### Measurability in the supremum construction {#section-721-measurability-in-the-supremum-construction}

The supremum p-value in §3 must itself be a measurable function of the observations to have the stated probability meaning. Finite or countable suprema of measurable candidate p-values are measurable: $\\{\\sup_jp_j>u\\}=\\bigcup_j\\{p_j>u\\}$ is a countable union of measurable sets. For an uncountable nuisance family, measurability needs checking; separate measurability at every candidate is insufficient by itself. A justified measurable envelope that dominates every candidate p-value also retains the validity event inclusion. Numerical maximization over a few candidate points is instead a lower approximation and does not inherit that inclusion automatically.

<a id="section-723-17-development-a-complete-conditional-table-and-its-ord"></a>
## 17. Development: a complete conditional table and its orderings {#section-725-17-development-a-complete-conditional-table-and-its-ord}

**Worked example 10.3.**

Consider independent groups of fixed sizes $n_1=3$ and $n_0=5$. Under the null, all eight binary observations are independent with the same success probability $p$. Let $A$ and $B$ count the successes in the two groups and condition on $M=A+B=2$. For $0<p<1$, the joint mass at $(a,2-a)$ is
$$\\binom3a\\binom5{2-a}p^2(1-p)^6.$$
Summing over feasible $a$ produces $\\binom82p^2(1-p)^6$. Cancellation gives the conditional mass $\\binom3a\\binom5{2-a}/\\binom82$. This is equivalent to the hypergeometric expression in §9; it counts the same tables by choosing success positions rather than the group-1 sample from fixed successes.

The entire conditional sample space is small enough to inspect.

| $a$ | Group 1: success, failure | Group 0: success, failure | $P(A=a\\mid M=2)$ | Lower tail | Upper tail |
| --- | --- | --- | --- | --- | --- |
| $0$ | $0,3$ | $2,3$ | $10/28$ | $10/28$ | $1$ |
| $1$ | $1,2$ | $1,4$ | $15/28$ | $25/28$ | $18/28$ |
| $2$ | $2,1$ | $0,5$ | $3/28$ | $1$ | $3/28$ |

For example, the middle mass counts $\\binom31\\binom51=15$ arrangements, out of $\\binom82=28$. The three masses sum to one. Under a prespecified higher group-1 success alternative, observing $a=2$ has upper-tail p-value $3/28$. It would be an error to use only the observed table's mass as a general one-sided p-value: the upper tail must include every feasible table at least as far in that direction. Here the observed table happens to be the last one, so the numbers coincide.

A doubled-tail two-sided p-value is
$$p_D(a)=\\min\\{1,\\,2\\min[P(A\\le a\\mid M=2),P(A\\ge a\\mid M=2)]\\}.$$
Its values for $a=0,1,2$ are $5/7,1,3/14$. A probability-ordering p-value instead sums the masses no greater than the observed mass, with all equal-mass tables included. Its values are $13/28,1,3/28$. Thus for the table $a=2$, the answers $3/14$ and $3/28$ describe different declared two-sided constructions. Neither arithmetic alone chooses the scientific ordering. At a threshold between those two values, they make different decisions.

Why does probability ordering calibrate? On any finite null sample space, group outcomes into levels of equal mass and order those levels from smallest mass upward. For an observation in a given level, the probability-ordering p-value is the cumulative probability through that whole level. For any $u\\in[0,1]$, the outcomes whose cumulative value is at most $u$ form an initial collection of whole levels; their combined probability is that final cumulative value, at most $u$. If there are no such levels the probability is zero. Ties must be included together for this particular argument. The proof is about probability of the ordered rejection set, rather than a claim that small point probability alone is a universal measure of discrepancy.

Doubled tails have a different proof. Each inclusive one-sided tail evaluated at the random observation is super-uniform: the chance that its value is at most $v$ is no more than $v$. For a finite ordered sample space this follows by locating the last cumulative probability below $v$. The event $p_D(A)\\le u$, for $u<1$, is contained in the union of a lower-tail p-value at most $u/2$ and an upper-tail p-value at most $u/2$. The union bound gives probability at most $u$. At $u=1$ validity is automatic. This explains the factor two and the conservatism from overlapping or unattainable tail budgets.

Conditional calibration is useful only if it survives returning to the declared experiment. If, for each total $m$ with positive null probability, a conditional rule has rejection probability at most $\\alpha$, then
$$P_p(\\text{reject})=\\sum_m P_p(M=m)
 P_p(\\text{reject}\\mid M=m)\\le\\alpha.$$
This holds for every $p$ under the null. At $p=0$ or $1$, only a degenerate margin occurs; specify a valid rule there too. Conditional probabilities for impossible margins need not be assigned a sampling meaning at that state. The unconditional guarantee follows by averaging the margins that actually can occur.

There is a precise way to use otherwise unattainable conditional error. In the displayed $m=2$ table, choose an upper-sided conditional level $\\alpha=1/5$. Reject always at $A=2$, reject at $A=1$ only when a predeclared independent $U\\sim\\operatorname{Uniform}(0,1)$ satisfies $U\\le13/75$, and never reject at $A=0$. Then
$$P(\\text{reject}\\mid M=2)=\\frac3{28}
  +\\frac{15}{28}\\frac{13}{75}=\\frac15.$$
The threshold is found by allocating the missing error probability, not by drawing a convenient number after seeing the data. To make an unconditionally similar test, perform the corresponding construction at every feasible margin. Merely fixing the displayed margin is insufficient. Degenerate conditional sample spaces can attain equality only by randomizing the single outcome.

The auxiliary draw is part of the procedure and must be included in reporting or reproducible records when it influences a decision. A nonrandomized alternative can retain the rejection region below the budget and be conservative. These are explicit procedural choices. A mid-p adjustment, which subtracts half the observed mass without performing the declared auxiliary experiment, does not inherit the foregoing super-uniform proof; it needs its own calibration analysis.

Finally, the null experiment determines what the conditional table means. Under independent binomial sampling, the common $p$ cancels after conditioning on $M$. Under a fixed-outcome sharp-null randomization experiment, the same mass can count which success labels a uniformly selected size-three treatment group receives. The first statement concerns a common population success probability; the second concerns the specified assignment and sharp null. An observational comparison with unknown clustering is not licensed by either derivation merely because its counts fit into two rows.

A practical diagnostic is to write three sentences before computing: what is random, what is conditioned on, and which tables count as more extreme. If those sentences change, redo the reference law or ordering rather than recycling a familiar p-value label. This links the observation-law audit to exact testing and, through inversion, to the shape of confidence sets.


<a id="section-766-atoms-at-a-median-declaring-a-tie-rule-is-not-enough"></a>
### Atoms at a median: declaring a tie rule is not enough {#section-768-atoms-at-a-median-declaring-a-tie-rule-is-not-enough}

The sign test is an instructive contrast with Gaussian pivots. Suppose observations are iid and a proposed median is $m_0$. Put $q_+=P(X>m_0)$, $q_-=P(X<m_0)$ and $r=P(X=m_0)$. The median condition only requires $q_+\\le1/2$ and $q_-\\le1/2$, with $q_++q_-+r=1$. If $r=0$, both sign probabilities must be one-half. Independence then gives the binomial reference. A density of a particular shape is unnecessary, but the absence of an atom at the proposed median is doing real work.

With ties, deleting them does not generally restore equal probabilities. Conditional on a non-tie, the positive probability is $q_+/(1-r)$, which need not be one-half. For a concrete distribution, assign probabilities $1/5,2/5,2/5$ to values $-1,0,1$. Zero is a median: at least half the mass is at or below it and at least half at or above it. Among nonzero observations, the positive fraction is $(2/5)/(3/5)=2/3$. A binomial one-half reference for the retained signs would therefore describe the wrong experiment.

Nor does giving each tie a fair auxiliary coin automatically repair this composite median null. Its resulting positive probability is $q_++r/2$, which is $3/5$ in this example. Fairly splitting a central atom is valid for some more restrictive balanced models, but the median inequalities alone do not imply that balance. This clarifies the tie warning in §6: a declared rule still needs a proof under the proposed model. Reproducibly executing a rule and correctly calibrating it are different requirements.

A conservative construction needs no deletion. Let $B_+=\\sum_i\\mathbf1\\{X_i>m_0\\}$. Under the iid median null it is binomial with success probability $q_+\\le1/2$. Coupling Bernoulli variables with the same uniforms shows its upper tail is bounded by the upper tail of $\\operatorname{Binomial}(n,1/2)$. Thus a large positive-sign count can be tested against that least-favorable reference, retaining ties as nonpositive. Likewise the strict negative-sign count $B_-$ has success probability at most one-half. A two-sided procedure can allocate $\\alpha/2$ to each upper-tail test and use a union bound. It may be conservative, but its proof covers all the median-null distributions just described.

This conservative construction deliberately asks whether either strict side is too large to be compatible with a median. It does not pretend that tied signs carry the same information as measured distances. Independence remains essential to the binomial coupling; clustering or common shocks cannot be repaired by a tie convention. The example connects the protocol audit, least-favorable composite calibration and discrete-tail budgeting without importing an exact normal law.

<a id="section-778-what-the-alternative-reveals-about-conditioning"></a>
### What the alternative reveals about conditioning {#section-780-what-the-alternative-reveals-about-conditioning}

The common-probability null explains the ordinary hypergeometric mass. To see why the upper ordering is relevant for an odds alternative, temporarily allow independent binomial groups with $0<p_1,p_0<1$. Write
$$\\omega=\\frac{p_1/(1-p_1)}{p_0/(1-p_0)}.$$
For fixed total $m$, the joint mass at $(a,m-a)$ is proportional, as a function of $a$, to
$$\\binom{n_1}{a}\\binom{n_0}{m-a}\\omega^a.$$
Indeed, rewriting each binomial mass in odds form leaves factors $(1-p_1)^{n_1}(1-p_0)^{n_0}\\{p_0/(1-p_0)\\}^m$ independent of $a$; those cancel in conditional normalisation. At $\\omega=1$, the ordinary hypergeometric law returns. For $\\omega_2>\\omega_1$, the conditional likelihood ratio is a positive normalising constant times $(\\omega_2/\\omega_1)^a$, increasing with $a$. This justifies ranking larger group-1 success counts toward a larger-odds alternative.

The conditional construction therefore retains information about a target contrast even while fixing the total. It should not be described as throwing away all information merely because a statistic was conditioned on. Nor does this calculation establish a universal power optimum among unconditional procedures: their comparison uses a larger sample space and potentially different nuisance restrictions. Conditional and unconditional performance criteria must be stated before one can claim an advantage.

In the displayed finite table, the reference probabilities change under $\\omega\\ne1$ to weights $10,15\\omega,3\\omega^2$, divided by their sum. The upper-sided rejection rule's conditional power is consequently
$$\\frac{3\\omega^2+(13/75)15\\omega}{10+15\\omega+3\\omega^2}.$$
At $\\omega=1$, its numerator is $28/5$ and its denominator is $28$, recovering size $1/5$. This is an exact expression under the conditional alternative, not an empirical power estimate. As $\\omega$ tends to infinity it tends to one; as $\\omega$ tends to zero it tends to zero, matching the direction of the declared alternative.

Finally, fixed-sample exactness does not authorize repeated attempts with the same cutoff. At a fixed null state, $k$ independent repetitions, each with rejection probability exactly $q$, reject at least once with probability $1-(1-q)^k$. In particular this is $1-(1-\\alpha)^k$ when $q=\\alpha$. Selecting a successful look changes the event being calibrated. The later sequential chapter supplies tools for that different protocol; neither Gaussian orthogonality nor conditional enumeration silently provides them.

<a id="section-794-18-optional-practice-extensions"></a>

## Summary

<a id="section-864-15-summary-and-forward-route"></a>
Composite-null control requires a uniform argument. Monotonicity finds least-favourable boundaries, supremum p-values protect against nuisance states, pivots remove parameters, and conditioning can cancel exponential-family nuisance factors. Exact t, sign, binomial, and Fisher tests are finite-sample theorems under explicit experiments. The main route next develops [Confidence Sets and Test Inversion](confidence-sets-and-test-inversion.md). The optional advanced continuation on multiplicity, sequential looks and selective inference studies what happens when many hypotheses, interim looks, or selected questions turn one calibrated test into a family of decisions.

## Exercises {#section-177-14-exercises-with-complete-solutions}

<a id="section-177-1-composite-size"></a>
### 1. Composite size {#section-179-1-composite-size}

**Exercise 10.1**

If null rejection probabilities range from $0.01$ to $0.08$, what is test size?

<details>
<summary>Hint 1</summary>

Use the worst null rejection probability, rather than an average.

</details>
<details>
<summary>Hint 2</summary>

The supremum of the supplied range is its upper endpoint.

</details>
<details>
<summary>Solution</summary>

**Solution.** Size is the supremum, $0.08$, regardless of the probability at a preferred null value.

</details>

<a id="section-202-2-binomial-boundary"></a>
### 2. Binomial boundary {#section-204-2-binomial-boundary}

**Exercise 10.2**

Why does calibrating the upper-tail test at $p_0$ control every $p\\le p_0$?

<details>
<summary>Hint 1</summary>

Compare the rejection probabilities as p increases.

</details>
<details>
<summary>Hint 2</summary>

Monotonicity places the largest null upper-tail probability at the boundary p0.

</details>
<details>
<summary>Solution</summary>

**Solution.** The rejection probability is nondecreasing in $p$, so no smaller null value has a larger tail probability.

</details>

<a id="section-227-3-supremum-validity"></a>
### 3. Supremum validity {#section-229-3-supremum-validity}

**Exercise 10.3**

Prove \${p_{\\sup}\\le u}\\subseteq {p_{\\theta _0}\\le u}$.

<details>
<summary>Hint 1</summary>

A supremum bounds every member of the family.

</details>
<details>
<summary>Hint 2</summary>

Apply this to the p-value at the true null state on the event that the supremum is at most u.

</details>
<details>
<summary>Solution</summary>

**Solution.** If the supremum of all null p-values is at most $u$, every member, including the true state's p-value, is at most $u$.

</details>

<a id="section-252-4-supremum-conservatism"></a>
### 4. Supremum conservatism {#section-254-4-supremum-conservatism}

**Exercise 10.4**

Why can maximising over nuisance values reduce power?

<details>
<summary>Hint 1</summary>

Ask which nuisance state is selected by maximisation.

</details>
<details>
<summary>Hint 2</summary>

The most null-compatible state can enlarge the reported p-value and prevent rejection.

</details>
<details>
<summary>Solution</summary>

**Solution.** The reported p-value uses the null state most favourable to compatibility with the data, which can be larger than the p-value at likely nuisance values.

</details>

<a id="section-277-5-t-pivot"></a>
### 5. t pivot {#section-279-5-t-pivot}

**Exercise 10.5**

Which unknown parameter disappears from $\\sqrt{n}(\\bar{X}-\\mu _0)/S$ under a normal null?

<details>
<summary>Hint 1</summary>

Write the mean error and sample standard deviation in units of sigma.

</details>
<details>
<summary>Hint 2</summary>

The common positive scale cancels; normal mean–variance independence supplies the Student reference law.

</details>
<details>
<summary>Solution</summary>

**Solution.** The scale $\\sigma $ cancels through studentisation; the exact reference is $t_{n-1}$.

</details>

<a id="section-302-6-exactness-boundary"></a>
### 6. Exactness boundary {#section-304-6-exactness-boundary}

**Exercise 10.6**

Does the same statistic have an exact t law for every finite-variance population?

<details>
<summary>Hint 1</summary>

Separate an algebraically studentised expression from its distribution.

</details>
<details>
<summary>Hint 2</summary>

The exact Student result uses normal independence; finite variance alone supplies neither that independence nor the finite-sample law.

</details>
<details>
<summary>Solution</summary>

**Solution.** No. Exact t distribution uses normal independence of sample mean and variance. A CLT may give an approximation under other conditions.

</details>

<a id="section-327-7-variance-interval-order"></a>
### 7. Variance interval order {#section-329-7-variance-interval-order}

**Exercise 10.7**

Why does the larger chi-square quantile appear in the lower variance endpoint?

<details>
<summary>Hint 1</summary>

Solve the pivot inequalities for the positive unknown variance.

</details>
<details>
<summary>Hint 2</summary>

Taking reciprocals reverses the bounds, so the larger denominator produces the lower endpoint.

</details>
<details>
<summary>Solution</summary>

**Solution.** Solving $q_low\\le (n-1)S^{2}/\\sigma ^{2}\\le q_high$ for positive $\\sigma ^{2}$ reverses inequalities when taking reciprocals.

</details>

<a id="section-352-8-sign-count"></a>
### 8. Sign count {#section-354-8-sign-count}

**Exercise 10.8**

With $n=8$ continuous observations under the median null, what is $P(B=8)$?

<details>
<summary>Hint 1</summary>

Use the fair-sign binomial law under the stated continuous median null.

</details>
<details>
<summary>Hint 2</summary>

All eight positive signs have probability (1/2) to power eight.

</details>
<details>
<summary>Solution</summary>

**Solution.** $B\\sim Binomial(8,1/2)$, so the probability is $2^{-8}=1/256$.

</details>

<a id="section-377-9-ties"></a>
### 9. Ties {#section-379-9-ties}

**Exercise 10.9**

Why can silently dropping observations equal to $m_0$ change calibration?

<details>
<summary>Hint 1</summary>

Examine how ties affect the retained sample size.

</details>
<details>
<summary>Hint 2</summary>

Deleting them is a data-dependent rule requiring its own conditional or joint reference law.

</details>
<details>
<summary>Solution</summary>

**Solution.** The effective sample size becomes random and depends on the distribution's atom. The reference law must condition on or model that rule.

</details>

<a id="section-402-10-two-sided-ambiguity"></a>
### 10. Two-sided ambiguity {#section-404-10-two-sided-ambiguity}

**Exercise 10.10**

Why can equal-tail and probability-ordering binomial tests disagree?

<details>
<summary>Hint 1</summary>

Compare what each procedure calls at least as extreme.

</details>
<details>
<summary>Hint 2</summary>

Tail direction and individual probability mass need not give the same ordering in an asymmetric discrete table.

</details>
<details>
<summary>Solution</summary>

**Solution.** One orders outcomes by tail direction, the other by individual null mass. In an asymmetric discrete distribution those orderings need not rank outcomes identically.

</details>

<a id="section-427-11-conditional-nuisance-cancellation"></a>
### 11. Conditional nuisance cancellation {#section-429-11-conditional-nuisance-cancellation}

**Exercise 10.11**

What happens to $\\exp{\\lambda S(x)}$ after conditioning on $S=s$?

<details>
<summary>Hint 1</summary>

Fix the conditioned statistic to its observed value.

</details>
<details>
<summary>Hint 2</summary>

The nuisance exponential factor is then common to every outcome on that fibre and cancels on normalisation.

</details>
<details>
<summary>Solution</summary>

**Solution.** It equals the same constant $\\exp{\\lambda s}$ for every outcome in the conditional set and cancels from conditional probabilities.

</details>

<a id="section-452-12-fisher-reference-law"></a>
### 12. Fisher reference law {#section-454-12-fisher-reference-law}

**Exercise 10.12**

State the conditional distribution of group-1 successes given total successes.

<details>
<summary>Hint 1</summary>

Count the ways to place the fixed total successes in the first and second groups.

</details>
<details>
<summary>Hint 2</summary>

Divide the product of the two feasible binomial coefficients by the total allocation count.

</details>
<details>
<summary>Solution</summary>

**Solution.** It is hypergeometric with mass $\\binom{m}{a}\\binom{N-m}{n_1-a}/\\binom{N}{n_1}$ on feasible $a$.

</details>

<a id="section-477-13-feasible-table-range"></a>
### 13. Feasible table range {#section-479-13-feasible-table-range}

**Exercise 10.13**

What bounds must $a$ satisfy in the Fisher table?

<details>
<summary>Hint 1</summary>

Require all four table cells to be nonnegative integers.

</details>
<details>
<summary>Hint 2</summary>

Combine a between zero and n1 with m−a between zero and n0.

</details>
<details>
<summary>Solution</summary>

**Solution.** It must satisfy $0\\le a\\le n_1$, $0\\le m-a\\le n_0$; hence $\\max(0,m-n_0)\\le a\\le \\min(m,n_1)$.

</details>

<a id="section-502-14-one-sided-fisher-tail"></a>
### 14. One-sided Fisher tail {#section-504-14-one-sided-fisher-tail}

**Exercise 10.14**

For an alternative of larger group-1 success odds, which tables are at least as extreme?

<details>
<summary>Hint 1</summary>

Connect a larger group-one count to the stated larger-odds alternative.

</details>
<details>
<summary>Hint 2</summary>

Sum the conditional hypergeometric masses from the observed a upward over feasible tables.

</details>
<details>
<summary>Solution</summary>

**Solution.** Feasible tables with $A\\ge a_obs$, using the upper hypergeometric tail.

</details>

<a id="section-527-15-conditional-versus-unconditional"></a>
### 15. Conditional versus unconditional {#section-529-15-conditional-versus-unconditional}

**Exercise 10.15**

Does conditioning on margins use their probability to gain power?

<details>
<summary>Hint 1</summary>

Identify which random variation is fixed by conditioning.

</details>
<details>
<summary>Hint 2</summary>

The margins no longer contribute to the conditional test, which trades that information for nuisance cancellation.

</details>
<details>
<summary>Solution</summary>

**Solution.** No. It fixes the margins and discards their variation for testing, trading information for nuisance-free calibration.

</details>

<a id="section-552-16-similarity"></a>
### 16. Similarity {#section-554-16-similarity}

**Exercise 10.16**

If conditional rejection probability is $\\alpha $ for every nuisance-sufficient statistic value, show unconditional rejection is $\\alpha $.

<details>
<summary>Hint 1</summary>

Use iterated expectation for the rejection probability.

</details>
<details>
<summary>Hint 2</summary>

An average of the constant conditional level alpha equals alpha; require the identity at every relevant conditioned value.

</details>
<details>
<summary>Solution</summary>

**Solution.** The law of total expectation averages the constant conditional probability: $E[E(\\phi |S)]=E[\\alpha ]=\\alpha $.

</details>

<a id="section-577-17-discrete-randomisation"></a>
### 17. Discrete randomisation {#section-579-17-discrete-randomisation}

**Exercise 10.17**

Why may a nonrandomised exact conditional test have size below $\\alpha $?

<details>
<summary>Hint 1</summary>

List the attainable tail probabilities in a discrete conditional law.

</details>
<details>
<summary>Hint 2</summary>

A jump can cross alpha, so a nonrandomised rule stays below it and leaves a gap.

</details>
<details>
<summary>Solution</summary>

**Solution.** Attainable conditional tail probabilities jump over $\\alpha $; choosing the largest rejection set below it leaves unused error probability.

</details>

<a id="section-602-18-generalized-lr-scope"></a>
### 18. Generalized LR scope {#section-604-18-generalized-lr-scope}

**Exercise 10.18**

Why does Neyman–Pearson not prove a composite generalized LR test most powerful?

<details>
<summary>Hint 1</summary>

Recall the lemma's simple-hypothesis inputs.

</details>
<details>
<summary>Hint 2</summary>

A pair of suprema over model sets is not one fixed null density versus one fixed alternative density.

</details>
<details>
<summary>Solution</summary>

**Solution.** The lemma compares one specified null density with one specified alternative density, not suprema over two sets of laws.

</details>

<a id="section-627-19-boundary-asymptotics"></a>
### 19. Boundary asymptotics {#section-629-19-boundary-asymptotics}

**Exercise 10.19**

Why can an ordinary chi-square LR reference fail at a parameter boundary?

<details>
<summary>Hint 1</summary>

Inspect the local parameter directions at the boundary.

</details>
<details>
<summary>Hint 2</summary>

One-sided constraints change the quadratic optimisation and can change its limiting reference law.

</details>
<details>
<summary>Solution</summary>

**Solution.** Local perturbations are one-sided and the quadratic normal approximation is constrained, changing the optimizer and limiting distribution.

</details>

<a id="section-652-20-exact-is-model-relative"></a>
### 20. Exact is model-relative {#section-654-20-exact-is-model-relative}

**Exercise 10.20**

Is Fisher's exact p-value exact if observations within a group are dependent contrary to both stated sampling and assignment laws?

<details>
<summary>Hint 1</summary>

Ask where the hypergeometric reference law came from.

</details>
<details>
<summary>Hint 2</summary>

If dependence violates the sampling or assignment mechanism used in that derivation, the stated calibration need not survive.

</details>
<details>
<summary>Solution</summary>

**Solution.** Not automatically. Hypergeometric calibration follows from the declared conditional or randomization law; unmodelled dependence changes that law.

</details>

<a id="section-677-16-development-why-gaussian-rotation-creates-the-pivots"></a>

<a id="section-796-18-optional-practice-extensions"></a>
### 21. SI-11-E21. Coordinates before distribution names {#section-800-si-11-e21-coordinates-before-distribution-names}

**Exercise 10.21**

For three iid $N(\\mu,\\sigma^2)$ observations, $\\sigma>0$, use the three orthonormal rows in §16. Express the two residual coordinates in terms of $X_1,X_2,X_3$ and $\\sigma$. Show that their squared sum is $2S^2/\\sigma^2$, identify its law and independence from the standardized mean, and explain why the same algebra is insufficient for independent Rademacher observations.


<details>
<summary>Hint 1</summary>

Apply each of the two contrast rows to the standardised observation vector.

</details>
<details>
<summary>Hint 2</summary>

Use orthogonal preservation of length and factorisation of the rotated normal density; for Rademacher observations compare the events of zero sample variance and absolute mean one.

</details>

<a id="section-818-si-11-e22-ordering-and-the-unspent-error-budget"></a>
### 22. SI-11-E22. Ordering and the unspent error budget {#section-820-si-11-e22-ordering-and-the-unspent-error-budget}

**Exercise 10.22**

In the complete conditional table in §17, observe $A=0$. Calculate the upper-tail, doubled-tail, and probability-ordering p-values, naming the alternative or ordering for each. For the upper-sided conditional level $1/5$ rule, verify the boundary randomization probability and explain what else is required for unconditional similarity.


<details>
<summary>Hint 1</summary>

At observed zero, distinguish a prespecified upper tail from the two two-sided orderings.

</details>
<details>
<summary>Hint 2</summary>

Use masses 10/28,15/28,3/28, then solve 3/28+gamma(15/28)=1/5 and state what must hold at every other feasible margin.

</details>

<a id="section-838-19-solutions-to-practice-extensions"></a>

## Solutions

<a id="section-840-19-solutions-to-practice-extensions"></a>
<details>
<summary>Solution</summary>

<a id="section-843-si-11-e21-coordinates-before-distribution-names-solutio"></a>
### SI-11-E21. Coordinates before distribution names — solution {#section-845-si-11-e21-coordinates-before-distribution-names-solutio}

The coordinates are $(X_1-X_2)/(\\sigma\\sqrt2)$ and $(X_1+X_2-2X_3)/(\\sigma\\sqrt6)$, because the common mean cancels in both contrasts. Orthogonal preservation of squared length gives their squared sum $\\sum_i(X_i-\\bar X)^2/\\sigma^2=2S^2/\\sigma^2$. Rotation of the joint standard-normal density makes these two coordinates independent standard normals, so the sum is $\\chi^2_2$ and independent of $\\sqrt3(\\bar X-\\mu)/\\sigma$, the first coordinate. For Rademacher observations the numerical projection identity still holds, but the rotated density argument is unavailable. For three Rademacher observations, all three agree with probability $1/4$, giving $|\\bar X|=1$ and $S^2=0$. Otherwise $|\\bar X|=1/3$ and $S^2=4/3$. Thus $\\{S^2=0\\}=\\{|\\bar X|=1\\}$ has probability $1/4$, whereas independence would give their intersection probability $1/16$. A projection identity alone does not imply any normal, chi-square or Student law.

</details>

<details>
<summary>Solution</summary>

<a id="section-852-si-11-e22-ordering-and-the-unspent-error-budget-solutio"></a>
### SI-11-E22. Ordering and the unspent error budget — solution {#section-854-si-11-e22-ordering-and-the-unspent-error-budget-solutio}

For the prespecified higher group-1 alternative, the upper tail at zero is one because every feasible table has $A\\ge0$. The doubled-tail two-sided value is $2(10/28)=5/7$. Probability ordering includes the $a=0$ mass $10/28$ and the smaller $a=2$ mass $3/28$, giving $13/28$. These answer different questions about extremeness. For the upper-sided level $1/5$ rule, unconditional rejection within this conditional table is $3/28+\\gamma(15/28)$, so $\\gamma=(1/5-3/28)/(15/28)=13/75$. Exact equality at this one total does not give unconditional similarity: a conditional size-$1/5$ construction, including a declared independent auxiliary draw where needed, must hold at every margin of positive null probability. The law of total expectation then gives null rejection probability $1/5$ for every common-success probability.

</details>

<a id="section-858-sources"></a>

## Sources {#section-860-sources}

For a classical model-based treatment compare Casella and Berger, *Statistical Inference*, and Bickel and Doksum, *Mathematical Statistics: Basic Ideas and Selected Topics*. The book's [References, Reading Routes, and Attribution Guide](back-matter/references-and-attribution-guide.md) describes these reading routes and their scope. Specific analytical imports and source qualifications are stated where they are used.

<a id="section-862-15-summary-and-forward-route"></a>
`;export{e as default};