var e=`---
parent_id: book-principles-statistical-inference
chapter_id: neyman-pearson-and-likelihood-ratio-tests
title: "Neyman–Pearson Theory and Likelihood-Ratio Tests"
level: advanced-undergraduate
estimated_minutes: 270
license: CC BY-SA 4.0
---

# Neyman–Pearson Theory and Likelihood-Ratio Tests {#section-1-neyman-pearson-theory-and-likelihood-ratio-tests}

Calibration limits false rejection; it does not select a unique test. Among all tests of a fixed level, different rejection regions can have radically different power. For two simple hypotheses, the Neyman–Pearson lemma solves the choice exactly: spend the available null probability on observations having the largest alternative-to-null likelihood ratio.

This chapter proves that lemma, derives exact discrete and continuous optimal tests, extends it through monotone likelihood ratios, and marks the boundary between the optimal simple likelihood-ratio test and the widely used generalized likelihood-ratio construction for composite hypotheses.

<a id="section-5-1-simple-hypotheses-turn-testing-into-two-law-discrimin"></a>
## 1. Simple hypotheses turn testing into two-law discrimination {#section-7-1-simple-hypotheses-turn-testing-into-two-law-discrimin}

Consider

$H_0:\\theta =\\theta _0$ against $H_1:\\theta =\\theta _1$,

where $P_0$ and $P_1$ have densities $f_0$ and $f_1$ with respect to a common measure $\\mu $. A level-$\\alpha $ test satisfies $E_0\\phi \\le \\alpha $; its power is $E_1\\phi $.

At an observation $x$ with $f_0(x)>0$, the likelihood ratio

\\[r(x)=f_1(x)/f_0(x)\\]

measures how much alternative probability is obtained per unit of null probability by including a small region around $x$ in the rejection set. Large ratios are the efficient places to spend a Type I error budget.

If $f_0(x)=0<f_1(x)$, rejecting there costs no null probability and should occur automatically. The density comparison $f_1(x)>k f_0(x)$ handles this case without division.

<a id="section-21-2-the-neyman-pearson-lemma"></a>
## 2. The Neyman–Pearson lemma {#section-23-2-the-neyman-pearson-lemma}

**Theorem 9.1 (Neyman–Pearson).** Let $f_0,f_1$ be dominated densities. Suppose there are $k\\ge 0$ and a test $\\phi *$ such that

- $\\phi *(x)=1$ when $f_1(x)>k f_0(x)$;
- $\\phi *(x)=0$ when $f_1(x)<k f_0(x)$;
- $E_0\\phi *=\\alpha $, using any needed randomisation on the equality set.

Then $\\phi *$ is most powerful among all tests $\\phi $ with $E_0\\phi \\le \\alpha $: $E_1\\phi \\le E_1\\phi *$.

**Proof.** Pointwise,

$[\\phi (x)-\\phi *(x)][f_1(x)-k f_0(x)]\\le 0$.

Indeed, where the second factor is positive, $\\phi *=1$ and $\\phi -\\phi *\\le 0$; where it is negative, $\\phi *=0$ and $\\phi -\\phi *\\ge 0$; on equality the product is zero. Integrating gives

$E_1\\phi -E_1\\phi *\\le k(E_0\\phi -E_0\\phi *)\\le 0$.

The last inequality uses $k\\ge 0$, $E_0\\phi \\le \\alpha $, and $E_0\\phi *=\\alpha $. ∎

The proof is global, not a local derivative argument. It compares every measurable randomised test at once.

<a id="section-43-equality-and-essential-uniqueness"></a>
### Equality and essential uniqueness {#section-45-equality-and-essential-uniqueness}

If the likelihood ratio has no null probability on the threshold set and $k>0$, any competing size-$\\alpha $ test attaining the same power must agree with $\\phi *$ except on null sets. With a threshold atom, multiple implementations can differ inside that equality set while retaining size and power.

<a id="section-47-3-exact-discrete-construction"></a>
## 3. Exact discrete construction {#section-49-3-exact-discrete-construction}

**Worked example 9.1.**

Let $S\\sim Binomial(2,p)$ and test $p=0.2$ against $p=0.6$ at level $\\alpha =0.10$. For $s=0,1,2$,

$f_1(s)/f_0(s)=[(0.6/0.2)^s][(0.4/0.8)^{2-s}]$,

which increases with $s$. Under the null,

$P_0(S=2)=0.04$, $P_0(S=1)=0.32$, $P_0(S=0)=0.64$.

Reject when $S=2$ and reject with probability $\\gamma $ when $S=1$. Exact size requires

$0.04+0.32\\gamma =0.10$,

so $\\gamma =0.1875$. Under $p=0.6$, the corresponding probabilities are $0.36$, $0.48$, and $0.16$, hence optimal power is

$0.36+0.1875(0.48)=0.45$.

Every other level-$0.10$ rule has power at most $0.45$ against this one alternative. The word “optimal” carries all of those qualifiers.

<a id="section-69-4-normal-shifts-produce-threshold-tests"></a>
## 4. Normal shifts produce threshold tests {#section-71-4-normal-shifts-produce-threshold-tests}

**Worked example 9.2.**

Let $X_1,\\dots,X_n$ be iid $Normal(\\mu ,\\sigma ^{2})$ with known $\\sigma $, and test $\\mu =\\mu _0$ against $\\mu =\\mu _1>\\mu _0$. The log likelihood ratio is

\\[\\log[f_{\\mu _1}(x)/f_{\\mu _0}(x)]\\]

$=(\\mu _1-\\mu _0)\\sum _ix_i/\\sigma ^{2}-n(\\mu _1^{2}-\\mu _0^{2})/(2\\sigma ^{2})$.

Because $\\mu _1-\\mu _0>0$, this is strictly increasing in $\\sum _i x_i$, equivalently in $\\bar{X}$. The Neyman–Pearson test rejects for large $\\bar{X}$. Choosing the threshold from its null distribution gives

$\\bar{X}>\\mu _0+\\sigma z_{1-\\alpha }/\\sqrt{n}$.

This is exactly the one-sided z-test derived by calibration in the preceding chapter. Neyman–Pearson theory now adds an optimality statement: for the chosen simple alternative, no other level-$\\alpha $ test has greater power.

Notice that the critical value does not depend on the particular $\\mu _1>\\mu _0$. The same upper-tail test is most powerful against every positive shift. That observation leads to uniform optimality.

<a id="section-87-5-monotone-likelihood-ratios-yield-one-sided-ump-tests"></a>
## 5. Monotone likelihood ratios yield one-sided UMP tests {#section-89-5-monotone-likelihood-ratios-yield-one-sided-ump-tests}

A dominated family of full-data densities \${f_\\theta (x)}$ has a **monotone
likelihood ratio in statistic $T$** if, whenever $\\theta _1>\\theta _0$, there is a
nondecreasing function $r_{\\theta _1,\\theta _0}$ such that, on the common support,

$f_{\\theta _1}(x)/f_{\\theta _0}(x)=r_{\\theta _1,\\theta _0}(T(x))$

up to null sets. This is stronger than saying only that the marginal density
of $T$ has a monotone likelihood ratio: the displayed factorization makes the
full-data likelihood ratio depend on $x$ only through $T(x)$.

**Theorem 9.2 (one-sided monotone-likelihood-ratio test).** Suppose the full-data
family has the same support for every parameter (each density is positive almost everywhere there and zero outside), has monotone likelihood ratio in $T$ as just defined, and a threshold test

\\[\\phi ^*(t)=\\mathbf 1_{\\{t>c\\}}+\\gamma \\mathbf 1_{\\{t=c\\}}\\]

has rejection probability $\\alpha $ at $\\theta _0$. Then $\\phi *$ is level $\\alpha $ for $H_0:\\theta \\le \\theta _0$ and is uniformly most powerful among level-$\\alpha $ tests for $H_1:\\theta >\\theta _0$, provided rejection probabilities are nondecreasing in $\\theta $.

**Proof.** Monotonicity of the rejection probability makes $\\theta _0$ least favourable in the null, so the test has level $\\alpha $. Fix any $\\theta _1>\\theta _0$. The likelihood ratio between $\\theta _1$ and $\\theta _0$ is nondecreasing in $T$, so the Neyman–Pearson rejection region is an upper threshold with the same null probability $\\alpha $; it is $\\phi *$ up to threshold randomisation. Thus $\\phi *$ is most powerful against this $\\theta _1$. Because $\\theta _1$ was arbitrary, it is uniformly most powerful. ∎

The binomial upper-tail and known-variance normal upper-tail tests are examples. The theorem does not say every one-parameter family has monotone likelihood ratio, nor does it automatically handle two-sided alternatives.

If one assumes monotone likelihood ratio only for the marginal densities of
$T$, the same proof compares $\\phi ^*$ only with tests measurable in $T$. To
compare with all data-based tests, one needs the full-data likelihood-ratio
condition above, or a sufficient-statistic factorization such as the one in
the next section.

<a id="section-116-6-sufficient-statistics-retain-the-optimal-likelihood-r"></a>
## 6. Sufficient statistics retain the optimal likelihood ratio {#section-118-6-sufficient-statistics-retain-the-optimal-likelihood-r}

If $T$ is sufficient and

$f_\\theta (x)=g_\\theta (T(x))h(x)$,

then for simple states

$f_{\\theta _1}(x)/f_{\\theta _0}(x)=g_{\\theta _1}(T(x))/g_{\\theta _0}(T(x))$.

The data-only factor cancels. Therefore the optimal simple test can be based on the sufficient statistic. This is a testing form of the decision-preserving reduction in the sufficiency chapter.

Ancillary information may still be useful for checking the experiment or choosing a conditional calibration. “The likelihood ratio depends only on $T$” is not permission to discard all records needed for diagnostics.

<a id="section-130-7-why-two-sided-ump-tests-usually-fail"></a>
## 7. Why two-sided UMP tests usually fail {#section-132-7-why-two-sided-ump-tests-usually-fail}

Consider one observation $X\\sim Normal(\\mu ,1)$ and test $\\mu =0$ against $\\mu \\ne 0$. For a fixed positive alternative, Neyman–Pearson requires an upper-tail level-$\\alpha $ test. For a fixed negative alternative, it requires a lower-tail level-$\\alpha $ test. With a continuous distribution these most-powerful regions are essentially unique, and they cannot be the same nontrivial region.

Therefore no test can be most powerful against every nonzero $\\mu $. A two-sided test becomes optimal only after restricting the comparison class or criterion—for example to unbiased tests, invariant tests, symmetric alternatives, weighted average power, or a minimax objective.

Equal-tail rejection is natural under sign symmetry, but its symmetry is an additional design principle. It is not forced by level calibration alone.

<a id="section-138-8-the-generalized-likelihood-ratio-statistic"></a>
## 8. The generalized likelihood-ratio statistic {#section-140-8-the-generalized-likelihood-ratio-statistic}

**Boundary for later advanced theory.** A general asymptotic chi-square reference law would require an additional theorem and its regularity hypotheses; it is not established by the construction below. The normal example here derives its chi-square law exactly from a standard normal pivot, and the finite binomial example later uses its actual discrete null law.

For composite hypotheses, define

$\\Lambda (x)=\\sup_{\\theta \\in \\Theta _0}L(\\theta ;x)/\\sup_{\\theta \\in \\Theta }L(\\theta ;x)$.

The value lies in $[0,1]$ when the suprema are finite and the null is contained in the full parameter space. Small $\\Lambda $ means the best null fit is poor relative to the best unrestricted fit. A **generalized likelihood-ratio test** rejects for small $\\Lambda $.

This construction is not the simple Neyman–Pearson ratio unless both hypotheses contain one law. The lemma does not generally prove a generalized likelihood-ratio test is most powerful. Its cutoff must be calibrated from the finite-sample null distribution, an exact pivot, simulation justified under the null, or an asymptotic theorem.

<a id="section-150-known-variance-normal-two-sided-test"></a>
### Known-variance normal two-sided test {#section-152-known-variance-normal-two-sided-test}

For iid $Normal(\\mu ,\\sigma ^{2})$ data with known $\\sigma $, test $\\mu =\\mu _0$ against unrestricted $\\mu $. The unrestricted MLE is $\\bar{X}$; the null fixes $\\mu _0$. Completing the square gives

$-2\\log\\Lambda =n(\\bar{X}-\\mu _0)^{2}/\\sigma ^{2}=Z^{2}$.

Under the null, $Z\\sim Normal(0,1)$, so $Z^{2}$ has a chi-square distribution with one degree of freedom. Rejecting for large $-2\\log\\Lambda $ is equivalent to the exact two-sided z-test. Here the reference distribution is exact because normal theory provides it; the symbol $-2\\log\\Lambda $ alone does not guarantee chi-square calibration in other models.

<a id="section-158-9-nuisance-parameters-complicate-likelihood-ratio-calib"></a>
## 9. Nuisance parameters complicate likelihood-ratio calibration {#section-160-9-nuisance-parameters-complicate-likelihood-ratio-calib}

If $\\theta =(\\psi ,\\eta )$ and the null constrains $\\psi $ while leaving nuisance parameter $\\eta $, then

$\\Lambda (x)=\\frac{\\sup_{\\eta:(\\psi_0,\\eta)\\in\\Theta_0}L(\\psi_0,\\eta;x)}{\\sup_{\\psi,\\eta}L(\\psi,\\eta;x)}$.

Profiling chooses the best nuisance fit separately under the null and full model. This can be useful, but finite-sample distribution may still depend on $\\eta $. Boundary parameters, weak identification, changing support, increasing dimension, and singular information can invalidate standard likelihood approximations.

A numerical optimiser reporting $\\Lambda $ to twelve digits establishes neither its null law nor its power. Calibration and computation are separate audits.

<a id="section-168-10-expected-log-likelihood-ratios-and-information"></a>
## 10. Expected log likelihood ratios and information {#section-170-10-expected-log-likelihood-ratios-and-information}

For one observation drawn from $P_1$,

$E_1[\\log(f_1(X)/f_0(X))]=D_{\\mathrm{KL}}(P_1\\lVert P_0)\\ge 0$.

For $n$ independent observations, log likelihood ratios add, so the expectation is $nD_{\\mathrm{KL}}(P_1\\lVert P_0)$. The divergence describes average separation under $P_1$; it helps explain why fixed distinct alternatives become easier to discriminate with independent replication.

This is not itself a finite-sample power formula. Rare tails and threshold placement matter, and local alternatives can approach the null as $n$ grows. Later asymptotic chapters formalise those regimes.

<a id="section-178-11-an-optimality-audit"></a>
## 11. An optimality audit {#section-180-11-an-optimality-audit}

Every claim that a test is “optimal” should state:

1. simple or composite null and alternative;
2. level and whether randomisation is allowed;
3. the comparison class of tests;
4. point alternative, uniform alternative set, average, invariant, unbiased, or minimax criterion;
5. existence and uniqueness of threshold calibration;
6. nuisance parameters and support conditions;
7. whether calibration is exact, conditional, simulated, or asymptotic;
8. whether the result concerns statistical power rather than scientific utility.

<a id="section-191-12-exercises-with-complete-solutions"></a>
## 14. Why likelihood-ratio ordering spends the null budget efficiently {#section-711-14-why-likelihood-ratio-ordering-spends-the-null-budget}

The lemma can be understood without first manipulating a density integral. Consider a finite observation space with outcomes $x_1,\\ldots,x_m$. Write $a_i=P_0(X=x_i)$ and $b_i=P_1(X=x_i)$, with each list summing to one. A test selects numbers $v_i\\in [0,1]$. Its null cost is $\\sum_i a_iv_i$ and its alternative benefit is $\\sum_i b_iv_i$. Most-powerful testing maximizes benefit subject to cost at most $\\alpha $.

For an outcome with $a_i>0$, the ratio $r_i=b_i/a_i$ is benefit per unit of null cost. If two outcomes have $r_i>r_j$, $v_i<1$, and $v_j>0$, transfer a small null cost $\\varepsilon $ from outcome $j$ to outcome $i$. Set $v_i'=v_i+\\varepsilon /a_i$ and $v_j'=v_j-\\varepsilon /a_j$, choosing $\\varepsilon $ small enough that both remain in $[0,1]$. The cost is unchanged and benefit increases by $\\varepsilon (r_i-r_j)>0$.

Therefore an optimum cannot spend positive cost on a lower-ratio outcome while a strictly higher-ratio outcome remains partly unused. Equal ratios permit exchanges with no change in power. This exchange argument explains the threshold form, while the integrated sign proof earlier establishes its global optimality for general dominated experiments.

Outcomes with $a_i=0<b_i$ are free benefit: reject there without spending null probability. Outcomes with $a_i=b_i=0$ affect neither law, and their decisions are irrelevant to this two-law problem. An outcome with positive $a_i$ and zero $b_i$ may absorb unused size without improving power. These cases show why divisions alone are less reliable than the density comparison $f_1-kf_0$.

<a id="section-719-existence-of-the-finite-threshold"></a>
### Existence of the finite threshold {#section-721-existence-of-the-finite-threshold}

Assume $0<\\alpha <1$. First include every outcome with zero null mass and positive alternative mass. Order the remaining positive-null-mass outcomes by decreasing $r_i$, grouping equal ratios together. Accumulate their null masses until the cumulative sum first reaches or exceeds $\\alpha $. Such a group exists because the positive-null masses sum to one.

Let $A$ be the mass in groups strictly before that group and let $B>0$ be the mass in the threshold group. Then $A<\\alpha \\le A+B$. Reject with probability one before the group, with probability $\\gamma =(\\alpha -A)/B$ on the group, and with probability zero after it. This gives exact size $A+\\gamma B=\\alpha $ with $0<\\gamma \\le 1$. Taking the group's ratio as $k$ produces the lemma's density-comparison form, including the case $k=0$.

For $\\alpha =1$, rejecting everywhere is available. At $\\alpha =0$, rejecting on the zero-null-mass region still costs nothing and can yield positive power. With an unbounded likelihood ratio on a general space, a zero-size optimum need not be represented by one finite threshold $k$. These endpoint cases should be stated separately rather than inferred from the finite positive-level construction.

Randomisation enlarges the feasible class. Without it, one must select entire atoms, and the fractional budget argument no longer guarantees an exactly attainable size or a ratio-greedy optimum among all deterministic subsets. The Neyman–Pearson theorem here compares all randomized tests; a practical ban on randomisation is an additional constraint.

<a id="section-729-a-complete-four-outcome-optimization"></a>
### A complete four-outcome optimization {#section-731-a-complete-four-outcome-optimization}

**Worked example 9.3.**

Suppose the null masses on outcomes $a,b,c,d$ are $(1/2,1/4,1/8,1/8)$, and the alternative masses are $(1/8,1/8,1/4,1/2)$. The likelihood ratios are $(1/4,1/2,2,4)$. At level $\\alpha =1/4$, reject at $d$ and $c$. Null cost is $1/8+1/8=1/4$, and power is $1/2+1/4=3/4$.

At level $\\alpha =3/16$, reject at $d$ and with probability $1/2$ at $c$. The cost is $1/8+(1/2)(1/8)=3/16$ and power is $1/2+(1/2)(1/4)=5/8$. Another rule could spend the same cost by randomising on $a$, but its benefit per unit of cost would be much smaller. The calculation demonstrates how the rule, its size, its power, and its comparison class fit together.


<a id="section-738-the-optimal-power-curve-and-its-certificate"></a>
### The optimal power curve and its certificate {#section-740-the-optimal-power-curve-and-its-certificate}

Vary the available null budget in one fixed finite two-law experiment. Let $B(\\alpha )$ be the largest achievable alternative rejection probability among randomized tests of size at most $\\alpha $. The feasible set is a closed subset of the compact cube $[0,1]^m$, so a maximum exists. Increasing the budget cannot remove a feasible rule, hence $B$ is nondecreasing.

The curve is also concave. If rules achieve powers $B(\\alpha _1)$ and $B(\\alpha _2)$, choose between them before observing the data, using an independent coin with probability $\\lambda $ for the first. The combined test function is $\\lambda \\phi _1+(1-\\lambda )\\phi _2$. Its null cost is at most $\\lambda \\alpha _1+(1-\\lambda )\\alpha _2$, and its power is $\\lambda B(\\alpha _1)+(1-\\lambda )B(\\alpha _2)$. The best test at the combined budget must achieve at least that power. This is the defining concavity inequality.

In the four-outcome example, the vertices of the optimal curve are $(0,0)$, $(1/8,1/2)$, $(1/4,3/4)$, $(1/2,7/8)$, and $(1,1)$. Between vertices, partial inclusion of the next likelihood-ratio group gives a straight segment. The successive slopes are $4$, $2$, $1/2$, and $1/4$: exactly the likelihood ratios in decreasing order. Early units of null cost buy more alternative probability than later ones. A tie group produces one segment regardless of how its rejection mass is distributed inside the group.

This picture is a receiver-operating-characteristic boundary for a specified pair of laws. An individual rule below the boundary is dominated at its own budget by a threshold rule. A point on the boundary is efficient for that pair, but a different alternative law can change the ordering and the entire curve. Neither a curve drawn from fitted data nor a large area under it supplies a uniform theorem over unexamined alternatives.

There is an algebraic certificate behind the picture. For any $k\\ge 0$ and any level-$\\alpha $ rule,
\\[
E_1\\phi 
=kE_0\\phi +\\int \\phi (f_1-kf_0)\\,d\\mu 
\\le k\\alpha +\\int(f_1-kf_0)_+\\,d\\mu .
\\]
The positive part $v_+=\\max(v,0)$ appears because $0\\le \\phi \\le 1$: positive contributions are largest when fully included, while negative contributions cannot improve the upper bound. No differentiability or numerical optimisation is needed.

A calibrated threshold rule attains this bound when it spends size $\\alpha $, includes the strictly positive density difference, and excludes the strictly negative difference. On the equality set either choice contributes zero to the last integral. The rule and the displayed bound then provide a matched lower and upper certificate for the optimum. This is a useful way to check a finite proposed answer: compute both sides rather than trusting a search routine's output.

For the level-$3/16$ example, take $k=2$. Only $d$ has $b_i-2a_i>0$, contributing $1/2-2(1/8)=1/4$. The bound is $2(3/16)+1/4=5/8$, matching the constructed rule. Outcome $c$ lies on the equality set and supplies the needed fractional budget. The certificate explains both the number and the role of the randomisation.

<a id="section-760-15-equality-reduction-and-uniform-optimality"></a>
## 15. Equality, reduction, and uniform optimality {#section-762-15-equality-reduction-and-uniform-optimality}

Optimality is stronger than having a large observed likelihood ratio. It is a comparison between procedures before observing data. The proof compares the proposed rule with every competing measurable function taking values in $[0,1]$. Once the observation is known, the ratio is a fixed number; selecting a new alternative because it makes that ratio large is not the same simple-hypothesis comparison.

The proof also identifies equality conditions. For $k>0$, a competitor with the same power as $\\phi ^*$ and size at most $\\alpha $ must have exact size $\\alpha $, because otherwise the integrated upper bound would be strictly negative. Moreover, the nonpositive pointwise product must be zero almost everywhere with respect to the dominating measure. Thus the rules agree wherever $f_1-kf_0$ is strictly positive or strictly negative, apart from sets of zero relevant density. They may differ on the equality set without changing the benefit-to-cost ratio.

The qualification $k>0$ matters. If all alternative mass is already captured at a cost smaller than $\\alpha $, the maximum power is one. Spending the rest of the budget on outcomes impossible under the alternative cannot improve it. There may be optimal rules of different sizes and many different decisions on those outcomes. “Essentially unique” must always specify which laws ignore the exceptional sets and whether there is mass at the threshold.

Sufficiency explains why a lower-dimensional statistic can retain this optimisation. When $f_\\theta (x)=g_\\theta (T(x))h(x)$, ratios between two states cancel the common data-only factor wherever the two laws give relevant mass. Every full-data test can also be averaged conditionally on $T$ using a parameter-independent conditional kernel. The averaged test has the same rejection probability under each state. Hence reducing to $T$ does not merely preserve the displayed likelihood ratio; under that sufficiency condition it preserves the achievable size-and-power pairs.

A statistic may have a nicely ordered marginal likelihood ratio without being sufficient for all the data. That is why Section 5 requires a full-data ratio condition before comparing with all data-based tests. If discarded coordinates contain additional discrimination information, an optimal rule among functions of $T$ need not be optimal among functions of the entire record. The distinction is about the comparison class, not about how attractive the statistic looks.

One can also derive the relevant stochastic ordering directly in a finite common-support family. Suppose, for $\\theta _1>\\theta _0$, the full-data ratio is a nondecreasing function $r(T)$. For any nondecreasing bounded function $h$, under $P_{\\theta _0}$ we have $E_0r(T)=1$ and

\\[
E_1h(T)-E_0h(T)
=\\operatorname{Cov}_0(h(T),r(T))\\ge 0.
\\]

To verify the sign, let $T'$ be an independent copy under $P_{\\theta _0}$. Twice that covariance is the expectation of $[h(T)-h(T')][r(T)-r(T')]$, which is nonnegative pointwise because both functions have the same monotonicity. Taking $h$ to be an upper-threshold rejection probability shows that rejection increases with the parameter.

This finite argument assumes common support and the displayed full-data ratio; it does not resolve every changing-support model. It explains the least-favourable-boundary condition in a familiar setting without silently deleting it from the theorem. The same ordering must be justified for the actual experiment before promoting a boundary-calibrated rule to a composite-null guarantee.

Two-sided uniform optimality fails for a different reason: the alternative states demand incompatible spending orders. For a normal mean, a positive shift puts the largest ratios in the right tail and a negative shift puts them in the left tail. For $0<\\alpha <1$, the two most-powerful regions differ on sets of positive null probability. No one rule can equal both. A symmetric two-sided rule answers a useful compromise criterion, but symmetry does not make that contradiction disappear.

<a id="section-785-16-generalized-likelihood-ratios-calculate-first-calibr"></a>
## 16. Generalized likelihood ratios: calculate first, calibrate separately {#section-787-16-generalized-likelihood-ratios-calculate-first-calibr}

The generalized ratio compares the best fit allowed by the null with the best fit in the full model. To define it at a particular observation, require a positive finite unrestricted supremum. If both suprema are zero, or the unrestricted one is infinite, the written quotient needs additional treatment. An optimizer returning a number cannot by itself repair an undefined model expression.

For the known-variance normal mean, assume $n\\ge 1$ and $\\sigma >0$. The joint likelihood is a constant independent of $\\mu $ times $\\exp\\{-\\sum_i(x_i-\\mu )^2/(2\\sigma ^2)\\}$. Expand

\\[
\\sum_i(x_i-\\mu )^2
=\\sum_i(x_i-\\bar x)^2+n(\\bar x-\\mu )^2,
\\]

because the cross term contains $\\sum_i(x_i-\\bar x)=0$. The unrestricted maximum occurs at $\\mu =\\bar x$. Under the null the extra sum of squares is $n(\\bar x-\\mu _0)^2$. Cancelling the common constant and residual factor therefore gives $\\Lambda =\\exp\\{-n(\\bar x-\\mu _0)^2/(2\\sigma ^2)\\}$.

Taking minus twice the logarithm gives $Z^2$. Under the null, independence and normality imply $\\bar X\\sim Normal(\\mu _0,\\sigma ^2/n)$, so $Z$ is exactly standard normal. The chi-square reference is consequently exact. The algebraic sum-of-squares identity holds for every observed vector; the distributional assertion additionally uses the observation law. Keeping those two steps separate prevents a purely algebraic resemblance from becoming an unjustified calibration theorem.

A finite binomial example shows why the reference distribution cannot be read from the name “likelihood ratio.” For two independent Bernoulli trials, test $p=1/2$ against unrestricted $p\\in [0,1]$. On observing sum $s$, the unrestricted MLE is $\\hat p=s/2$, including boundary values zero and one. With the convention that a zero power contributes one, the ratio is $1/4$ at $s=0$ or $s=2$ and one at $s=1$.

Thus $-2\\log\\Lambda $ equals $2\\log4$ with null probability $1/2$ and zero with probability $1/2$. This is a two-point distribution, not a continuous chi-square law. An exactly size-$1/4$ test rejecting for small $\\Lambda $ can reject with probability $1/2$ at each extreme, or otherwise allocate the same total boundary mass. Rejecting every extreme has size $1/2$.

The binomial coefficient cancels in the ratio whether one writes the full sequence likelihood or the sum likelihood. It still matters when calculating the null probabilities of the possible sums. Cancellation of a likelihood factor and enumeration of an event are different operations; omitting the coefficient from the latter would change the experiment.

In larger regular models a chi-square approximation can be justified by a separate theorem involving an interior parameter, identification, differentiability, nondegenerate information, and a fixed dimension. This appendix does not import a blanket asymptotic theorem for every likelihood problem. The exact examples are meant to build the habit of asking what proves the proposed null law. Boundary estimates in the two-trial example make that question especially visible.

Profiling nuisance parameters is similarly an optimisation step. It does not average over uncertainty in those parameters and need not remove their influence on the statistic's null distribution. Conditional calibration, a nuisance-free pivot, a justified worst-case bound, or a specifically scoped approximation may supply a guarantee. Merely obtaining the unrestricted and restricted maxima does not choose among those routes.

<a id="section-810-17-information-separation-and-the-limits-of-an-average"></a>
## 17. Information separation and the limits of an average {#section-812-17-information-separation-and-the-limits-of-an-average}

The expected log likelihood ratio has a precise domain. On a finite space, if some outcome has $b_i>0$ but $a_i=0$, define $D_{\\mathrm{KL}}(P_1\\Vert P_0)=+\\infty$. Otherwise write

\\[
D_{\\mathrm{KL}}(P_1\\Vert P_0)
=\\sum_{i:b_i>0}b_i\\log(b_i/a_i),
\\]

with $a_i>0$ for every included term. Natural logarithms measure this quantity in nats. Outcomes with $b_i=0$ contribute zero by the usual limiting convention.

The elementary inequality $-\\log t\\ge 1-t$ for $t>0$ proves nonnegativity without a statistical approximation. Substitute $t=a_i/b_i$ and sum over $b_i>0$. The result is at least $\\sum_{b_i>0}(b_i-a_i)=1-P_0(b_i>0)\\ge 0$. Equality requires both equality in each logarithm inequality and no null mass outside the alternative support, so it occurs precisely when the two finite distributions agree.

In the dominated general-space version, the divergence is an extended expectation when $P_1$ is absolutely continuous with respect to $P_0$; if not, it is infinite. The negative part is integrable: where $r=dP_1/dP_0<1$, the function $-r\\log r$ is bounded by $1/e$, and its integral with respect to the probability law $P_0$ is finite. The positive part may be infinite. Thus the expression can mean $+\\infty$ without an ambiguous subtraction of two infinities.

For completeness, integrate $\\log r\\ge 1-1/r$ with respect to $P_1$ on $\\{r>0\\}$. Its right-hand side has expectation $1-P_0(r>0)\\ge 0$. The negative-part bound just proved makes the left-hand extended expectation well defined. This establishes general nonnegativity as well as the finite-space inequality, including a possibly infinite positive part.

For independent identically distributed observations, the joint likelihood ratio is a product and its logarithm is a sum. When the one-observation divergence is finite, ordinary linearity gives expected log ratio $nD_{\\mathrm{KL}}$. The same identity holds in the extended positive-infinite case because each negative part is integrable. Independence establishes the product law; identical distributions make the terms equal. With independent nonidentical observations, the answer is instead the sum of their separate divergences.

This average is not a power calculation. Power needs the probability that the log ratio crosses the calibrated threshold under a particular alternative. Two distributions can have the same average of a statistic and very different upper tails. Infinite divergence can even arise because a positive-probability alternative event is impossible under the null; rejecting on that event is free, but its probability need not be one.

For example, let $P_0$ put all mass on outcome $a$, and let $P_1$ put probability $\\varepsilon \\in (0,1)$ on $b$ and $1-\\varepsilon $ on $a$. The divergence is infinite because $b$ is impossible under $P_0$. A size-zero test rejects only at $b$ and has power $\\varepsilon $, not one. At level $\\alpha $, the most-powerful randomized test also rejects at $a$ with probability $\\alpha $, giving power $\\varepsilon +(1-\\varepsilon )\\alpha $. The support calculation, rather than the magnitude of an average, determines this exact answer.

The conceptual chain is therefore specific. Likelihood ratios order observations for a declared pair of laws. Null calibration determines an admissible threshold and any randomisation. The alternative tail at that threshold gives power. Expected log separation summarizes one aspect of repeated evidence, but it cannot replace either of the two probability calculations.

<a id="section-835-18-optional-practice-extensions"></a>
## 20. Clarifications of the original exercise solutions {#section-901-20-clarifications-of-the-original-exercise-solutions}

These elaborations retain the original twenty prompts and inline answers exactly. They make the parameter and expectation boundaries of three original answers explicit; they are not additional tasks or alternative learner-record identities.

<a id="section-903-original-exercise-7-bernoulli-ratio-endpoints"></a>
### Original Exercise 7: Bernoulli ratio endpoints {#section-905-original-exercise-7-bernoulli-ratio-endpoints}

<details>
<summary>Solution</summary>

The displayed division and strict ratio multiplier in the original answer use $n\\ge 1$ and $0<p_0<p_1<1$. On that interior domain every Bernoulli sequence has positive probability under both laws, so increasing its sum multiplies the ratio by $p_1(1-p_0)/[p_0(1-p_1)]>1$, as stated.

If $p_0=0<p_1<1$, every sequence with a positive sum is impossible under the null and has positive alternative probability. Reject there at no null cost. The all-zero sequence has null probability one and alternative probability $(1-p_1)^n$; rejecting there with probability $\\alpha $ gives exact size $\\alpha $ and power $1-(1-p_1)^n+\\alpha (1-p_1)^n$. This follows from density comparison and does not divide by zero.

If $0<p_0<p_1=1$, only the all-one sequence has positive alternative probability. Its null probability is $p_0^n$. Rejecting there with probability $\\min\\{1,\\alpha /p_0^n\\}$ gives optimal power $\\min\\{1,\\alpha /p_0^n\\}$ at level at most $\\alpha $. When $\\alpha >p_0^n$, remaining null budget can be unused without losing power, or allocated elsewhere if exact size is required. Finally, $p_0=0,p_1=1$ gives disjoint supports, and rejection on the all-one sequence has size zero and power one. The full-data density ordering handles all these cases.

</details>

<a id="section-916-original-exercise-12-the-nontrivial-level-range"></a>
### Original Exercise 12: the nontrivial level range {#section-918-original-exercise-12-the-nontrivial-level-range}

<details>
<summary>Solution</summary>

The contradiction between unique upper and lower normal rejection tails concerns $0<\\alpha <1$, with positive normal variance, as explicitly assumed in Section 15. At $\\alpha =0$, never rejecting is most powerful because all normal shift laws are mutually absolutely continuous and a null-probability-zero rejection event has probability zero under every shift. At $\\alpha =1$, always rejecting is most powerful. These endpoints do not support the original nontrivial two-sided impossibility argument.

</details>

<a id="section-925-original-exercise-19-when-the-expectation-is-finite"></a>
### Original Exercise 19: when the expectation is finite {#section-927-original-exercise-19-when-the-expectation-is-finite}

<details>
<summary>Solution</summary>

For a fixed finite number of iid observations with the stated product likelihood, the log ratio is the sum of the one-observation log ratios. If their divergence is finite, each term is integrable and ordinary linearity proves the original answer. If divergence is positive infinite while the alternative is absolutely continuous with respect to the null, Section 17 proves that each negative part is integrable, so the finite sum has extended expectation $nD_{\\mathrm{KL}}=+\\infty$. If the alternative has positive mass on a null-impossible event, the divergence is defined as infinite and the joint alternative also gives positive probability to a null-impossible event. No cancellation of two infinite expectations is needed.

</details>

<a id="section-934-21-source-and-proof-boundary-for-the-extensions"></a>
## 21. Source and proof boundary for the extensions {#section-936-21-source-and-proof-boundary-for-the-extensions}

The finite allocation argument, tail comparisons, normal completion of squares, and finite/general divergence calculations above are derived here. They use the probability and sufficiency conventions already stated in this book. The historical source for the simple-hypothesis likelihood-ratio principle is J. Neyman and E. S. Pearson, “On the Problem of the Most Efficient Tests of Statistical Hypotheses,” Philosophical Transactions of the Royal Society of London A 231 (1933), 289–337, [doi:10.1098/rsta.1933.0009](https://doi.org/10.1098/rsta.1933.0009). This attribution identifies the original work; the elementary proofs here stand on their displayed hypotheses. No general asymptotic likelihood-ratio theorem, human qualification, or simulation result is asserted by these extensions.

<a id="section-938-sources"></a>

## Summary

<a id="section-944-13-summary-and-forward-route"></a>
The Neyman–Pearson lemma orders observations by alternative probability gained per unit of null probability spent. It yields exact most-powerful tests for simple hypotheses and, under monotone likelihood ratios, UMP one-sided tests. Two-sided uniform optimality generally fails. Generalized likelihood ratios offer a principled composite construction but require separate calibration and do not inherit the lemma automatically. The next main chapter develops composite hypotheses, pivots and exact tests. Confidence procedures then invert whole families of calibrated tests rather than selecting one null value.

## Exercises {#section-193-12-exercises-with-complete-solutions}

<a id="section-193-1-pointwise-sign-in-the-lemma"></a>
### 1. Pointwise sign in the lemma {#section-195-1-pointwise-sign-in-the-lemma}

**Exercise 9.1**

Verify the key product inequality where $f_1-kf_0>0$.

<details>
<summary>Hint 1</summary>

On a positive density-difference set, identify the proposed rejection probability.

</details>
<details>
<summary>Hint 2</summary>

It is one there, while a competing probability cannot exceed one; multiply their nonpositive difference by the positive factor.

</details>
<details>
<summary>Solution</summary>

**Solution.** On that set the proposed test has $\\phi *=1$. Since every test satisfies $\\phi \\le 1$, $\\phi -\\phi *\\le 0$. Multiplying by the positive density difference gives a nonpositive product.

</details>

<a id="section-218-2-the-other-sign"></a>
### 2. The other sign {#section-220-2-the-other-sign}

**Exercise 9.2**

Verify the inequality where $f_1-kf_0<0$.

<details>
<summary>Hint 1</summary>

On a negative density-difference set, identify the proposed rejection probability.

</details>
<details>
<summary>Hint 2</summary>

It is zero there, while a competing probability is nonnegative; multiplication reverses the sign.

</details>
<details>
<summary>Solution</summary>

**Solution.** There $\\phi *=0$, so $\\phi -\\phi *=\\phi \\ge 0$. Multiplication by the negative density difference again gives a nonpositive product.

</details>

<a id="section-243-3-why-exact-size-enters-the-proof"></a>
### 3. Why exact size enters the proof {#section-245-3-why-exact-size-enters-the-proof}

**Exercise 9.3**

Where is $E_0\\phi *=\\alpha $ used?

<details>
<summary>Hint 1</summary>

Locate the integrated inequality relating power difference to size difference.

</details>
<details>
<summary>Hint 2</summary>

Exact size of the proposed rule makes the competitor's null expectation minus its null expectation nonpositive.

</details>
<details>
<summary>Solution</summary>

**Solution.** After integration,

$E_1\\phi -E_1\\phi *\\le k(E_0\\phi -E_0\\phi *)$.

The competitor has $E_0\\phi \\le \\alpha $, while $E_0\\phi *=\\alpha $, so the right side is nonpositive.

</details>

<a id="section-272-4-free-rejection-region"></a>
### 4. Free rejection region {#section-274-4-free-rejection-region}

**Exercise 9.4**

If $f_0=0$ and $f_1>0$ on a set $A$, what does the lemma prescribe there?

<details>
<summary>Hint 1</summary>

Compare the two weighted densities directly rather than dividing.

</details>
<details>
<summary>Hint 2</summary>

For finite k, the alternative density is positive while k times the null density is zero; this costs no null probability.

</details>
<details>
<summary>Solution</summary>

**Solution.** For every finite $k$, $f_1>kf_0=0$, so $\\phi *=1$ on $A$. Rejecting there increases power without increasing null rejection probability.

</details>

<a id="section-297-5-complete-the-discrete-size-calculation"></a>
### 5. Complete the discrete size calculation {#section-299-5-complete-the-discrete-size-calculation}

**Exercise 9.5**

In the binomial worked example, verify $\\gamma =0.1875$.

<details>
<summary>Hint 1</summary>

Subtract the already allocated null probability from the target level.

</details>
<details>
<summary>Hint 2</summary>

Divide the remaining 0.06 budget by the boundary mass 0.32.

</details>
<details>
<summary>Solution</summary>

**Solution.** $\\gamma =(0.10-0.04)/0.32=0.06/0.32=0.1875$.

</details>

<a id="section-322-6-complete-the-discrete-power-calculation"></a>
### 6. Complete the discrete power calculation {#section-324-6-complete-the-discrete-power-calculation}

**Exercise 9.6**

Verify the worked test has power $0.45$ under $p=0.6$.

<details>
<summary>Hint 1</summary>

Separate certain rejection at sum two from fractional rejection at sum one.

</details>
<details>
<summary>Hint 2</summary>

Use alternative masses 0.36 and 0.48 and weight the second by the calibrated boundary probability.

</details>
<details>
<summary>Solution</summary>

**Solution.** It always rejects at $S=2$, probability $0.6^{2}=0.36$, and rejects with probability $0.1875$ at $S=1$, whose probability is $2(0.6)(0.4)=0.48$. Thus power is $0.36+0.1875(0.48)=0.45$.

</details>

<a id="section-347-7-bernoulli-likelihood-ratio-order"></a>
### 7. Bernoulli likelihood-ratio order {#section-349-7-bernoulli-likelihood-ratio-order}

**Exercise 9.7**

For $n$ Bernoulli observations and $p_1>p_0$, show the likelihood ratio increases with the sum $S$.

<details>
<summary>Hint 1</summary>

Compare likelihood ratios at consecutive integer sums.

</details>
<details>
<summary>Hint 2</summary>

For interior p0<p1, the multiplier is p1(1−p0)/[p0(1−p1)]; consult the preserved endpoint clarification when division fails.

</details>
<details>
<summary>Solution</summary>

**Solution.** Apart from no data-only factor, the ratio is

$(p_1/p_0)^S[(1-p_1)/(1-p_0)]^{n-S}$.

Increasing $S$ by one multiplies it by

$[p_1(1-p_0)]/[p_0(1-p_1)]>1$,

because $p_1>p_0$.

</details>

<a id="section-380-8-normal-ratio-slope"></a>
### 8. Normal ratio slope {#section-382-8-normal-ratio-slope}

**Exercise 9.8**

What is the coefficient of $\\sum _iX_i$ in the normal log likelihood ratio when $\\mu _1>\\mu _0$?

<details>
<summary>Hint 1</summary>

Expand the difference of the two normal squared-error sums.

</details>
<details>
<summary>Hint 2</summary>

The coefficient of the sample sum is the positive mean difference divided by the known variance.

</details>
<details>
<summary>Solution</summary>

**Solution.** It is $(\\mu _1-\\mu _0)/\\sigma ^{2}>0$, so the ratio is strictly increasing in the sample sum.

</details>

<a id="section-405-9-reverse-normal-alternative"></a>
### 9. Reverse normal alternative {#section-407-9-reverse-normal-alternative}

**Exercise 9.9**

If $\\mu _1<\\mu _0$, which tail is most powerful?

<details>
<summary>Hint 1</summary>

Reverse the sign of that coefficient.

</details>
<details>
<summary>Hint 2</summary>

A decreasing likelihood ratio is largest for small sample means, so choose the lower tail.

</details>
<details>
<summary>Solution</summary>

**Solution.** The coefficient of the sample sum becomes negative, so the likelihood ratio is largest for small $\\bar{X}$. The most-powerful rejection region is a lower tail.

</details>

<a id="section-430-10-from-pointwise-to-uniform-power"></a>
### 10. From pointwise to uniform power {#section-432-10-from-pointwise-to-uniform-power}

**Exercise 9.10**

Why is the same normal upper-tail rule UMP for every $\\mu _1>\\mu _0$?

<details>
<summary>Hint 1</summary>

For each positive alternative, compare its Neyman–Pearson ordering.

</details>
<details>
<summary>Hint 2</summary>

All such alternatives rank observations by the same sum, and the null determines the same critical value.

</details>
<details>
<summary>Solution</summary>

**Solution.** For each fixed positive shift, Neyman–Pearson orders observations by $\\bar{X}$. The null distribution fixes the same level-$\\alpha $ threshold regardless of the alternative magnitude. Thus one rule is most powerful at every state in the one-sided alternative.

</details>

<a id="section-455-11-sufficient-reduction"></a>
### 11. Sufficient reduction {#section-457-11-sufficient-reduction}

**Exercise 9.11**

Use factorisation to show a simple likelihood ratio depends on a sufficient statistic.

<details>
<summary>Hint 1</summary>

Substitute the sufficient factorisation into numerator and denominator.

</details>
<details>
<summary>Hint 2</summary>

Cancel the common data-only factor on its valid domain; handle null-impossible events by density comparison.

</details>
<details>
<summary>Solution</summary>

**Solution.** If $f_\\theta (x)=g_\\theta (T(x))h(x)$, the ratio is

$g_{\\theta _1}(T(x))h(x)/[g_{\\theta _0}(T(x))h(x)]$,

so $h(x)$ cancels wherever defined. The ordering uses only $T$.

</details>

<a id="section-484-12-no-two-sided-ump-normal-test"></a>
### 12. No two-sided UMP normal test {#section-486-12-no-two-sided-ump-normal-test}

**Exercise 9.12**

Give the contradiction produced by assuming a UMP level-$\\alpha $ test for $\\mu \\ne 0$.

<details>
<summary>Hint 1</summary>

Compare the uniquely most powerful tests against one positive and one negative shift.

</details>
<details>
<summary>Hint 2</summary>

At a nontrivial level 0<alpha<1 these require distinct upper and lower rejection tails, which one rule cannot equal.

</details>
<details>
<summary>Solution</summary>

**Solution.** It would have to be most powerful for a fixed $\\mu _1>0$, hence essentially the upper-tail test, and also most powerful for a fixed $\\mu _2<0$, hence essentially the lower-tail test. These distinct continuous rejection regions cannot agree, so no such UMP rule exists.

</details>

<a id="section-509-13-generalized-ratio-range"></a>
### 13. Generalized ratio range {#section-511-13-generalized-ratio-range}

**Exercise 9.13**

Why is $0\\le \\Lambda \\le 1$ when $\\Theta _0\\subseteq \\Theta $ and the denominator is positive and finite?

<details>
<summary>Hint 1</summary>

Use containment of the null parameter set in the full set.

</details>
<details>
<summary>Hint 2</summary>

A supremum over a subset cannot exceed the full supremum; retain the positive finite denominator condition.

</details>
<details>
<summary>Solution</summary>

**Solution.** Likelihoods are nonnegative, so the ratio is nonnegative. The supremum over the subset $\\Theta _0$ cannot exceed the supremum over all of $\\Theta $, so the numerator is at most the denominator.

</details>

<a id="section-534-14-saturated-null"></a>
### 14. Saturated null {#section-536-14-saturated-null}

**Exercise 9.14**

If $\\Theta _0=\\Theta $, what is $\\Lambda (x)$?

<details>
<summary>Hint 1</summary>

Compare the two optimisation sets.

</details>
<details>
<summary>Hint 2</summary>

They are identical, so the two positive finite suprema coincide.

</details>
<details>
<summary>Solution</summary>

**Solution.** Numerator and denominator optimise over the same set, so $\\Lambda (x)=1$ wherever the common supremum is positive. There is no alternative fit to compare.

</details>

<a id="section-559-15-normal-generalized-ratio"></a>
### 15. Normal generalized ratio {#section-561-15-normal-generalized-ratio}

**Exercise 9.15**

Show that rejecting for small $\\Lambda $ in the known-variance normal example is equivalent to rejecting for large $|Z|$.

<details>
<summary>Hint 1</summary>

Use the exact identity involving minus twice the log ratio.

</details>
<details>
<summary>Hint 2</summary>

The logarithm reverses the small-ratio ordering after multiplication by −2, and Z squared is large exactly when absolute Z is large.

</details>
<details>
<summary>Solution</summary>

**Solution.** The identity $-2\\log\\Lambda =Z^{2}$ is monotone decreasing in $\\Lambda $. Small $\\Lambda $ means large $Z^{2}$, which is equivalent to large $|Z|$.

</details>

<a id="section-584-16-a-chi-square-cutoff"></a>
### 16. A chi-square cutoff {#section-586-16-a-chi-square-cutoff}

**Exercise 9.16**

If $Z^{2}$ is compared with the $1-\\alpha $ quantile of $\\chi ^{2}_1$, why is the test exact?

<details>
<summary>Hint 1</summary>

State the exact null distribution of Z before squaring.

</details>
<details>
<summary>Hint 2</summary>

Squaring a standard normal gives chi-square with one degree of freedom, with no asymptotic approximation in this model.

</details>
<details>
<summary>Solution</summary>

**Solution.** Under the null, $Z\\sim Normal(0,1)$ exactly, hence $Z^{2}\\sim \\chi ^{2}_1$ exactly. The quantile therefore gives null rejection probability $\\alpha $, apart from quantile conventions in a continuous law.

</details>

<a id="section-609-17-why-neyman-pearson-does-not-prove-glr-optimality"></a>
### 17. Why Neyman–Pearson does not prove GLR optimality {#section-611-17-why-neyman-pearson-does-not-prove-glr-optimality}

**Exercise 9.17**

Identify the missing condition in a composite problem.

<details>
<summary>Hint 1</summary>

Identify the two fully specified densities required in the lemma.

</details>
<details>
<summary>Hint 2</summary>

Separate maximisations over parameter sets do not supply a single simple-null/simple-alternative density pair.

</details>
<details>
<summary>Solution</summary>

**Solution.** The lemma compares one fully specified null density with one fully specified alternative density. A generalized ratio separately optimises over sets of densities, so there is no single $f_0,f_1$ pair to which the lemma directly applies.

</details>

<a id="section-634-18-nuisance-dependence"></a>
### 18. Nuisance dependence {#section-636-18-nuisance-dependence}

**Exercise 9.18**

Why can one simulated null cutoff fail when a nuisance parameter changes the statistic's distribution?

<details>
<summary>Hint 1</summary>

Distinguish calibration under one law from calibration over a composite null.

</details>
<details>
<summary>Hint 2</summary>

A different nuisance value can have a larger rejection tail, exceeding the claimed size.

</details>
<details>
<summary>Solution</summary>

**Solution.** Calibration at one nuisance value controls rejection only under that law. If another null nuisance state has a larger tail probability, the supremum null rejection probability can exceed the nominal level.

</details>

<a id="section-659-19-additivity-of-expected-log-ratios"></a>
### 19. Additivity of expected log ratios {#section-661-19-additivity-of-expected-log-ratios}

**Exercise 9.19**

For iid data, prove the expected log likelihood ratio is $nD_{\\mathrm{KL}}(P_1\\lVert P_0)$.

<details>
<summary>Hint 1</summary>

Use the product likelihood to write a finite sum of log ratios.

</details>
<details>
<summary>Hint 2</summary>

Take expectations termwise when integrable; the preserved clarification handles extended infinite divergence without cancelling infinities.

</details>
<details>
<summary>Solution</summary>

**Solution.** The joint log ratio is $\\sum _i \\log[f_1(X_i)/f_0(X_i)]$. Linearity of expectation and identical laws make its expectation $n$ times the one-observation expectation, which is the divergence.

</details>

<a id="section-684-20-optimal-power-versus-utility"></a>
### 20. Optimal power versus utility {#section-686-20-optimal-power-versus-utility}

**Exercise 9.20**

Does a most-powerful level-$0.05$ test necessarily maximise real-world utility?

<details>
<summary>Hint 1</summary>

State exactly what the power objective counts.

</details>
<details>
<summary>Hint 2</summary>

The level-constrained rejection probability omits downstream losses, expenses and possible model failures unless explicitly included.

</details>
<details>
<summary>Solution</summary>

**Solution.** No. It optimises rejection probability at specified alternatives subject to a statistical size constraint. Real utility can include effect magnitude, asymmetric costs, data-collection expense, model failure, and downstream actions not represented by that criterion.

</details>

<a id="section-709-14-why-likelihood-ratio-ordering-spends-the-null-budget"></a>

<a id="section-837-18-optional-practice-extensions"></a>
### 21. SI-10-E21. A finite optimality certificate {#section-841-si-10-e21-a-finite-optimality-certificate}

**Exercise 9.21**

In the four-outcome experiment of Section 14, construct the most-powerful level-$1/2$ test, compute its power, and exhibit a threshold $k$ for the lemma. Explain which outcomes are fully included and which require randomisation. Give the exact null cost and alternative benefit.


<details>
<summary>Hint 1</summary>

Order the four outcomes by alternative benefit per unit null cost.

</details>
<details>
<summary>Hint 2</summary>

After c and d, fill the remaining budget with b; use its ratio as the certificate threshold and check size and power separately.

</details>

<a id="section-859-si-10-e22-a-discrete-generalized-ratio-test"></a>
### 22. SI-10-E22. A discrete generalized-ratio test {#section-861-si-10-e22-a-discrete-generalized-ratio-test}

**Exercise 9.22**

For the two-trial binomial generalized likelihood ratio in Section 16, construct a sign-symmetric level-$1/8$ test that rejects only at the extreme sums. Give its boundary randomisation probability, its power as a function of $p$, and its rejection probability at $p=1/2$. Explain why this is an exact discrete calibration rather than a chi-square approximation.


<details>
<summary>Hint 1</summary>

Under the null, add the masses of both extreme sums.

</details>
<details>
<summary>Hint 2</summary>

With equal randomisation at the two extremes the size is gamma/2; under general p their masses are (1−p) squared and p squared.

</details>

<a id="section-879-19-solutions-to-the-optional-practice-extensions"></a>

## Solutions

<a id="section-881-19-solutions-to-the-optional-practice-extensions"></a>
<details>
<summary>Solution</summary>

<a id="section-884-si-10-e21-a-finite-optimality-certificate-solution"></a>
### SI-10-E21. A finite optimality certificate — solution {#section-886-si-10-e21-a-finite-optimality-certificate-solution}

First include $d$ and $c$, whose total null cost is $1/4$ and alternative benefit is $3/4$. The next ratio is $r_b=1/2$, and outcome $b$ has null mass $1/4$. Including it fully spends the remaining $1/4$. Reject at $b,c,d$ and do not reject at $a$. No intermediate randomisation is needed at this particular level. Its size is $1/2$ and its power is $1/8+1/4+1/2=7/8$. Taking $k=1/2$ satisfies the lemma: $c,d$ have ratio greater than $k$, $a$ has ratio below it, and the equality outcome $b$ is fully included. The lemma then certifies optimality over all randomized tests of level at most $1/2$.

</details>

<details>
<summary>Solution</summary>

<a id="section-893-si-10-e22-a-discrete-generalized-ratio-test-solution"></a>
### SI-10-E22. A discrete generalized-ratio test — solution {#section-895-si-10-e22-a-discrete-generalized-ratio-test-solution}

Under the null each extreme sum has probability $1/4$, so their union has probability $1/2$. Using the same rejection probability $\\gamma $ at both extremes gives null size $\\gamma /2$. Thus $\\gamma =1/4$ gives size $1/8$. Under a general $p$, the extreme probabilities are $(1-p)^2$ and $p^2$, so power is $[(1-p)^2+p^2]/4$. At $p=1/2$ this equals $1/8$. The two possible generalized-ratio values and their null masses were derived from the finite binomial law. No continuous reference law or asymptotic limit was used.

</details>

<a id="section-899-20-clarifications-of-the-original-exercise-solutions"></a>

## Sources {#section-940-sources}

For a classical model-based treatment compare Casella and Berger, *Statistical Inference*, and Bickel and Doksum, *Mathematical Statistics: Basic Ideas and Selected Topics*. The book's [References, Reading Routes, and Attribution Guide](back-matter/references-and-attribution-guide.md) describes these reading routes and their scope. Specific analytical imports and source qualifications are stated where they are used.

<a id="section-942-13-summary-and-forward-route"></a>
`;export{e as default};