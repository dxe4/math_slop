
# Empirical Distributions and Ranks

This chapter develops nonparametric tools: the empirical distribution function, the Dvoretzky–Kiefer–Wolfowitz bound, rank-based procedures, and kernel density estimation. These methods make weaker assumptions than parametric likelihoods but are not assumption-free; their validity depends on the invariance group and sampling structure.

## The empirical distribution function

For iid real observations $X_{1},\dots,X_{n}$ with cumulative distribution function $F$, the *empirical distribution function* is

$$F_{n}(x)=\frac{1}{n}\sum_{i=1}^{n}\mathbf{1}_{\{X_{i}\le x\}}.$$

For each fixed $x$, $nF_{n}(x)\sim\text{Binomial}(n,F(x))$, so $\mathbb{E}[F_{n}(x)]=F(x)$ and $\operatorname{Var}[F_{n}(x)]=F(x)[1-F(x)]/n$.

### Theorem 5.1 — Dvoretzky–Kiefer–Wolfowitz inequality

For every $\varepsilon>0$,

$$\mathbb{P}\Bigl(\sup_{x\in\mathbb{R}}|F_{n}(x)-F(x)|>\varepsilon\Bigr)\le 2e^{-2n\varepsilon^{2}}.$$

**Theorem 5.1 (Imported).** The inequality above, including the sharp leading
constant $2$, is the DKW--Massart theorem. Massart's proof supplies the sharp
constant. We do not reproduce that proof here. Although the empirical CDF
changes only at order statistics, a naive union bound over those locations
introduces an $n$-dependent factor and does **not** establish the displayed
bound. See the primary-source entry in the references. ∎

### Simultaneous confidence bands

Setting $\varepsilon=\sqrt{\log(2/\alpha)/(2n)}$ gives

$$\mathbb{P}\Bigl(\sup_{x}|F_{n}(x)-F(x)|\le\sqrt{\frac{\log(2/\alpha)}{2n}}\Bigr)\ge 1-\alpha.$$

Hence the band $F_{n}(x)\pm\sqrt{\log(2/\alpha)/(2n)}$, clipped to $[0,1]$, is a simultaneous $1-\alpha$ confidence band for $F$. This is a *nonparametric* result: it requires only iid sampling, with no smoothness or parametric assumptions on $F$.

The theorem uses iid sampling. Under dependence the iid bound is not automatically justified. Correlation can increase or decrease particular variances, and no universal effective-sample-size substitution repairs the whole uniform probability statement.

## Rank-based procedures

The *probability integral transform* states that if $F$ is continuous and $X\sim F$, then $U=F(X)\sim\text{Uniform}(0,1)$. For iid observations from a continuous common distribution, the ranks are distribution-free: their joint distribution does not depend on $F$.

### Two-sample permutation test

Consider independent samples $X_{1},\dots,X_{m}\sim F_{X}$ and $Y_{1},\dots,Y_{n}\sim F_{Y}$. To test $H_{0}:F_{X}=F_{Y}$, a permutation test computes a test statistic $T$ on the pooled data, then compares the observed $T$ to its distribution under all $\binom{m+n}{m}$ ways of partitioning the pooled values into groups of sizes $m$ and $n$. Under the stated equality of full sampling distributions, pooled labels are exchangeable. A predeclared statistic and inclusive permutation tail then give finite-sample super-uniform p-values, including ties. This distributional sampling null is distinct from a causal unit-level sharp null.

Equality of means alone does not imply exchangeability. If $F_{X}$ and $F_{Y}$ differ in variance but not mean, a permutation test of the mean difference need not control Type I error for the mean hypothesis. Studentisation can support a separate asymptotic theorem, but does not make that unequal-distribution permutation experiment exactly exchangeable.

### Ties and discrete data

Ties destroy the uniform random ordering of ranks. A declared convention (average ranks, random breaking, or midranks) is required, and the null distribution depends on the convention. For heavily tied data, exact permutation distributions may be preferred over asymptotic rank approximations.

## Kernel density estimation

A *kernel density estimator* with bandwidth $h>0$ is

$$\hat{f}_{h}(x)=\frac{1}{nh}\sum_{i=1}^{n}K\Bigl(\frac{x-X_{i}}{h}\Bigr),$$

where $K$ is a kernel function satisfying $\int K(u)\,du=1$.

### Bias–variance decomposition

One simple sufficient set of hypotheses is that $K$ is bounded, symmetric, and compactly supported, with $\int K=1$, $\int |u|^{2}|K(u)|\,du<\infty$, and $R(K)=\int K(u)^2\,du<\infty$, while $f$ has two continuous derivatives on a neighborhood of $x$. Assume also $h\to0$ and $nh\to\infty$. Then:

$$\operatorname{Bias}[\hat{f}_{h}(x)]=\frac{h^{2}}{2}\mu_{2}(K)f''(x)+o(h^{2}),$$

$$\operatorname{Var}[\hat{f}_{h}(x)]=\frac{f(x)R(K)}{nh}+o\Bigl(\frac{1}{nh}\Bigr),$$

where $R(K)=\int K(u)^{2}\,du$.

**Proof.** For the bias, Taylor-expand $f(x-hu)$ around $x$:

$$\mathbb{E}[\hat{f}_{h}(x)]=\int K(u)f(x-hu)\,du=f(x)\int K(u)\,du-hf'(x)\int uK(u)\,du+\frac{h^{2}}{2}f''(x)\int u^{2}K(u)\,du+o(h^{2}).$$

Compact support and continuity of $f''$ make the Taylor remainder uniform over the relevant $u$, while $u^2|K(u)|$ supplies an integrable bound. Symmetry makes the first moment zero. For the variance, define $K_h(z)=h^{-1}K(z/h)$, so $\hat f_h(x)=n^{-1}\sum_i K_h(x-X_i)$. A change of variables gives

$$\mathbb E[K_h(x-X)^2]=\frac1h\int K(u)^2 f(x-hu)\,du=\frac{f(x)R(K)}h+o(h^{-1}).$$

Because $\mathbb E[K_h(x-X)]=f(x)+O(h^2)$, subtracting its squared mean changes the variance by only $O(1)$. Independence therefore gives

$$\operatorname{Var}[\hat f_h(x)]=\frac1n\operatorname{Var}[K_h(x-X)]=\frac{f(x)R(K)}{nh}+o((nh)^{-1}).$$

The same conclusions cover unbounded kernels such as the Gaussian when corresponding tail-dominance conditions justify the two limit interchanges. ∎

### Optimal bandwidth and curse of dimensionality

The asymptotic mean integrated squared error (AMISE) balances squared bias and integrated variance. For a second-order kernel, the optimal bandwidth is $h^{*}\asymp n^{-1/5}$, giving AMISE $\asymp n^{-4/5}$. This is slower than the parametric rate $n^{-1}$.

In $d$ dimensions, the variance scales like $(nh^{d})^{-1}$. To keep variance bounded, $h$ must decrease more slowly: $h^{*}\asymp n^{-1/(4+d)}$, and the rate becomes $n^{-4/(4+d)}$. At $d=4$ this equals $n^{-1/2}$; for $d>4$ it is slower than $n^{-1/2}$, illustrating the *curse of dimensionality*.

At a support boundary, an uncorrected symmetric kernel loses mass outside the support. The resulting pointwise bias can be $O(1)$: for a uniform density on $[0,1]$, a symmetric kernel estimator at $0$ converges to one half of the interior density. At points whose distance from a sufficiently smooth boundary is proportional to $h$, other expansions can have an $O(h)$ term. Boundary kernels, local-polynomial corrections, or justified reflection methods are needed.

## Worked example: DKW confidence band

For $n=100$ and $\alpha=0.05$:

$$\varepsilon=\sqrt{\frac{\log(2/0.05)}{2\cdot 100}}=\sqrt{\frac{\log 40}{200}}=\sqrt{\frac{3.689}{200}}\approx\sqrt{0.0184}\approx 0.136.$$

The simultaneous $95\%$ band has width $0.136$ on each side. For $n=400$, $\varepsilon\approx 0.068$; the width halves as sample size quadruples, consistent with the $\sqrt{n}$ rate.

## Common errors and misconceptions

- **Claiming rank tests are assumption-free.** Rank tests assume exchangeability under the null. This is a strong assumption that fails under heteroskedasticity, dependence, or different distributional shapes.

- **Using kernel density estimation in high dimensions.** The rate worsens with dimension under the stated smoothness model. Usefulness depends on sample size, structure, loss and region; no fixed dimension cutoff proves that every density estimator is useless.

- **Ignoring boundary effects.** Standard kernel estimators are biased at boundaries. If inference near boundaries matters, use boundary-corrected kernels.

- **Applying the DKW bound to dependent data.** The DKW inequality requires iid sampling. For time series or clustered data, a separate dependence theorem is needed. A scalar effective sample size generally does not reproduce a distribution-free uniform band.

## From a uniform CDF band to a quantile confidence set

Define the left quantile at a probability strictly between zero and one as the smallest location where the CDF reaches that probability. On the event that empirical and true CDFs differ uniformly by at most a chosen tolerance, monotonicity brackets the true quantile between empirical quantiles at the target probability minus and plus that tolerance.

For the lower bound, the empirical CDF at the true quantile is at least target probability minus tolerance, so the empirical inverse at that level cannot be larger. For the upper bound, the empirical CDF at its upper inverse is at least target probability plus tolerance; subtracting the band width makes the true CDF reach the target there.

If the lower probability level is nonpositive, use a negative infinite endpoint. If the upper level exceeds one, use a positive infinite endpoint. These conventions report missing tail information instead of inventing a finite empirical endpoint beyond the data-supported probability range.

This inverse band remains valid with atoms and ties. It does not need a positive density or a differentiable inverse. Such irregularity can make its interval wide or conservative, but does not invalidate the monotone event implication.

Every quantile is bracketed on the same uniform event. Thus the CDF band also supplies simultaneous quantile coverage over the target probabilities for which the stated endpoints are defined.

## A quantile central limit theorem by binomial inversion

Now impose stronger local hypotheses at one target quantile: the CDF equals the target probability there and is differentiable with strictly positive derivative. Use the empirical left quantile at rank the ceiling of sample size times target probability.

The event that this order statistic is below a proposed location is exactly the event that at least that many sample values are below the location. Its count is binomial under iid sampling.

Take a location displaced from the true quantile by a fixed number divided by square root of sample size. Differentiability expands its success probability by derivative times that displacement. The triangular binomial central limit theorem then gives a normal limit for the quantile, with variance target probability times its complement divided by squared density.

The ceiling contributes only a bounded rank correction and vanishes on the square-root scale. This proves the limit through a finite counting identity; it has not assumed that inverse-CDF differentiation is valid at a zero-density point.

A pointwise quantile normal approximation and a distribution-free inverse band are therefore different procedures. One exploits local smoothness for a sharper scale, while the other retains a broader finite-sample guarantee.

## Finite empirical vectors do not alone prove a process limit

At finitely many fixed locations, the centred empirical CDF vector is an average of iid indicator vectors. Its limiting covariance at two locations is the CDF at their minimum minus the product of their CDF values.

The multivariate central limit theorem therefore proves a Gaussian limit for every such finite vector. Extending this to a process indexed by all locations requires tightness and asymptotic equicontinuity in a chosen function-space sense. Finite-dimensional convergence alone does not supply those conditions.

The sharp DKW theorem gives a powerful uniform finite-sample bound, and its summable applications also prove uniform almost-sure convergence. For example, choosing tolerance proportional to the square root of log sample size divided by sample size makes its exceptional probabilities summable when the constant is large enough; Borel–Cantelli then controls all sufficiently late samples.

A Brownian-bridge process theorem is a further named empirical-process result, used explicitly in the functional chapter. It should not be confused with either the finite-vector calculation or a naive union bound over random order-statistic locations.

## Exact permutation calibration includes discreteness

Condition on a pooled labelled dataset under an exchangeable null. Every allowed assignment has the same conditional probability. For each assignment, calculate its inclusive upper-tail fraction among all allowed assignments.

Order assignments by their statistic values, grouping ties. An assignment’s fraction is the cumulative count through its tie group divided by the total count. At most the chosen level times total count can have such a fraction below that level.

Thus conditional rejection probability is at most the level, and averaging over pooled data preserves that bound. Equality need not be attainable because the assignment space is finite. This proves exact conservative calibration without replacing assignments by iid observations.

Absolute two-sided tails work by predeclaring absolute statistic as the extremeness score and applying the same argument. Choosing the more favourable tail after observing its sign changes the statistic-selection rule and is not covered by that one-tail proof.

Ties therefore do not destroy exact permutation inference when counted correctly. They destroy a particular no-ties rank-order shortcut and can make the attainable p-values coarser. The mathematical remedy is to retain the actual assignment multiplicities.

## Integrated density risk needs integrated smoothness

The earlier pointwise bias expansion does not by itself establish an integrated squared-error expansion over the whole line. One sufficient stronger setting has the density and its first two weak derivatives square-integrable, with a bounded compactly supported symmetric kernel and finite second absolute moment.

The convolution bias admits an integral Taylor remainder in the second derivative. Translation is continuous in the square-integrable norm; subtracting the leading second-order term therefore leaves a remainder smaller than bandwidth squared in that norm. The kernel moment bound permits integrating this remainder.

Squaring gives integrated squared bias with leading bandwidth fourth-power times the squared second-derivative norm and kernel moment constant. The integrated variance has an exact expression:
$$
\int\operatorname{Var}(\widehat f_h(x))\,dx
=\frac1n\left[\frac{R(K)}h-R(K_h*f)\right].
$$
Tonelli and independence prove it by integrating one kernel square and subtracting the squared mean. The convolution norm is bounded by the kernel’s absolute integral times the density norm, so its subtraction is lower order than the leading inverse-bandwidth term.

This justifies the displayed integrated bandwidth balance under explicit global assumptions. A density with a support jump, such as a uniform law extended by zero, does not meet that smoothness setting. Its boundary behaviour needs a separate analysis rather than an unqualified use of the same AMISE formula.

## Worked example: an inverse band for the median

For the earlier sample size one hundred and tolerance about 0.136, the median’s probability bracket is about 0.364 to 0.636. The empirical inverses are the corresponding order statistics, with integer ranks obtained by taking ceilings.

Thus the approximate displayed indices are 37 and 64, while the actual construction should use the unrounded tolerance when locating ranks. The coverage follows from the same DKW event for any underlying CDF, including one with atoms. The rank bracket is conservative and is not an exact shortest binomial median interval.

## Worked example: a smooth CDF with zero median density

On the interval from minus one to one, take CDF one-half plus one-half times the signed cube of the location. Its density is three-halves times squared location, so the median is zero and density there vanishes.

At a displacement of order sample size to minus one-sixth, the CDF shift is of order inverse square root of sample size. The same binomial inversion gives limiting CDF equal to the standard normal CDF evaluated at the cube of the scaled displacement.

This is not a normal distribution in the displacement. The ordinary square-root quantile theorem fails because its positive-density assumption is absent, while the finite-sample inverse-band argument remains valid.

## Practice exercises

### Exercise 5.1
<a id="empirical-distributions-and-ranks-legacy-5-1"></a>

For the standard normal kernel $K(u)=(2\pi)^{-1/2}e^{-u^{2}/2}$, compute $\mu_{2}(K)$ and $R(K)$.

<details><summary>Hint 1</summary>

The kernel is a standard normal density.

</details>
<details><summary>Hint 2</summary>

Its square is a constant times an exponential quadratic integral.

</details>
<details><summary>Solution</summary>

By definition, $\mu_{2}(K)=\int u^{2}(2\pi)^{-1/2}e^{-u^{2}/2}\,du=1$, the variance of a standard normal. For $R(K)$,

$$R(K)=\int_{-\infty}^{\infty}\frac{1}{2\pi}e^{-u^{2}}\,du=\frac{1}{2\pi}\cdot\sqrt{\pi}=\frac{1}{2\sqrt{\pi}}\approx 0.282.$$

∎

</details>

### Exercise 5.2
<a id="empirical-distributions-and-ranks-legacy-5-2"></a>

Show that for the Epanechnikov kernel $K(u)=\frac{3}{4}(1-u^{2})$ on $[-1,1]$, the optimal AMISE is lower than for the normal kernel, with kernel-dependent factor $[\mu_{2}(K)^{2}R(K)^{4}]^{1/5}$ smaller by a factor of about $1.04$ (equivalently, the normal kernel has efficiency $\approx 0.96$ relative to Epanechnikov).

<details><summary>Hint 1</summary>

Integrate the two polynomial moments exactly.

</details>
<details><summary>Hint 2</summary>

Compare the minimised kernel-dependent AMISE factor, not unscaled bandwidths.

</details>
<details><summary>Solution</summary>

For Epanechnikov: $\mu_{2}(K)=\int_{-1}^{1}\frac{3}{4}u^{2}(1-u^{2})\,du=\frac{3}{4}[\frac{2}{3}-\frac{2}{5}]=\frac{3}{4}\cdot\frac{4}{15}=\frac{1}{5}$. And $R(K)=\int_{-1}^{1}\frac{9}{16}(1-u^{2})^{2}\,du=\frac{9}{16}[2-\frac{4}{3}+\frac{2}{5}]=\frac{9}{16}\cdot\frac{16}{15}=\frac{3}{5}$. Minimizing $\mathrm{AMISE}(h)=R(K)/(nh)+\tfrac{1}{4}h^{4}\mu_{2}(K)^{2}R(f'')$ over $h$ shows the kernel-dependent factor of the minimum is $[\mu_{2}(K)^{2}R(K)^{4}]^{1/5}$. For Epanechnikov this is $[(1/25)(81/625)]^{1/5}=(81/15625)^{1/5}\approx 0.349$; for the normal kernel it is $[1\cdot(2\sqrt{\pi})^{-4}]^{1/5}=(16\pi^{2})^{-1/5}\approx 0.363$. The ratio is $0.363/0.349\approx 1.04$, so the normal kernel's optimal AMISE is about $4\%$ higher. ∎

</details>

### Exercise 5.3
<a id="empirical-distributions-and-ranks-legacy-5-3"></a>

In a two-sample problem with $m=n=5$, what is the total number of label assignments? If all ten pooled values are distinct and the observed group contains exactly the five largest values, what is the exact p-value for the one-sided difference-in-means test?

<details><summary>Hint 1</summary>

Keep the group sizes fixed and count labelled assignments.

</details>
<details><summary>Hint 2</summary>

With distinct values, the largest possible group sum uses all five largest observations.

</details>
<details><summary>Solution</summary>

The number of assignments is $\binom{10}{5}=252$. With distinct values, assigning the five largest values to the observed high-mean group is the unique assignment attaining the maximum difference, so the inclusive one-sided p-value is $1/252\approx0.004$. The complementary assignment attains the minimum difference. With ties, several assignments can attain the maximum, and the exact p-value must count all of them. ∎

</details>


## Further exercises on empirical laws and exact ranks

### Exercise 5.4
<a id="empirical-distributions-and-ranks-ex-4"></a>

Why does inverting a uniform CDF band not require a density?

<details><summary>Hint 1</summary>

Use only monotonicity and the quantile definition.

</details>
<details><summary>Hint 2</summary>

Compare the CDF values at the two proposed endpoints.

</details>
<details><summary>Solution</summary>

The lower empirical probability level is reached by the true quantile on the band event, and the true CDF reaches the target at the upper empirical inverse. These order implications use no derivative. Atoms can widen or tie endpoints without breaking them.

</details>

### Exercise 5.5
<a id="empirical-distributions-and-ranks-ex-5"></a>

What replaces an inverse-band endpoint outside the unit probability range?

<details><summary>Hint 1</summary>

No empirical quantile is available at an impossible probability.

</details>
<details><summary>Hint 2</summary>

Report a genuinely unbounded side.

</details>
<details><summary>Solution</summary>

Use minus infinity for a nonpositive lower level and plus infinity for an upper level exceeding one. Choosing a finite sample extreme beyond that supported probability range would falsely claim tail information absent from the band.

</details>

### Exercise 5.6
<a id="empirical-distributions-and-ranks-ex-6"></a>

Derive finite-vector empirical-CDF covariance.

<details><summary>Hint 1</summary>

Each observation contributes two indicators.

</details>
<details><summary>Hint 2</summary>

Their product is the indicator at the smaller location.

</details>
<details><summary>Solution</summary>

The covariance is $F(\min\{x,y\})-F(x)F(y)$. Independence across observations then gives that matrix as the covariance of the square-root-scaled vector limit. It does not by itself prove uniform process convergence.

</details>

### Exercise 5.7
<a id="empirical-distributions-and-ranks-ex-7"></a>

Explain why permutation p-values with ties remain valid when counted inclusively.

<details><summary>Hint 1</summary>

Group assignments by equal statistic.

</details>
<details><summary>Hint 2</summary>

Each tied group receives its cumulative tail fraction.

</details>
<details><summary>Solution</summary>

At most an alpha fraction of the equally likely assignments can have cumulative tail fraction at most alpha. Tied groups jump together rather than being partly discarded. This gives super-uniform calibration even when an exactly alpha-sized rejection set is impossible.

</details>

### Exercise 5.8
<a id="empirical-distributions-and-ranks-ex-8"></a>

Why do pointwise kernel hypotheses not automatically give integrated AMISE?

<details><summary>Hint 1</summary>

The integration extends over the whole support.

</details>
<details><summary>Hint 2</summary>

Tail and global smoothness must control the remainder.

</details>
<details><summary>Solution</summary>

Pointwise Taylor control near one location says nothing about the integrated squared remainder elsewhere. A square-integrable second derivative and suitable kernel domination justify the global expansion. Boundary jumps can violate those assumptions.

</details>

### Exercise 5.9
<a id="empirical-distributions-and-ranks-ex-9"></a>

Give a dependent sequence for which the iid empirical-CDF convergence fails.

<details><summary>Hint 1</summary>

Repeat one fair binary observation forever.

</details>
<details><summary>Hint 2</summary>

The sample contains no new independent information.

</details>
<details><summary>Solution</summary>

Let every record equal the same fair bit. At a threshold between zero and one, the empirical CDF is always either zero or one while the population CDF is one-half. Its error remains one-half at every sample size. Row count cannot be substituted for independent information.

</details>

### Exercise 5.10
<a id="empirical-distributions-and-ranks-ex-10"></a>

Why does the zero-density median example have a different scaling?

<details><summary>Hint 1</summary>

Its local CDF change is cubic.

</details>
<details><summary>Hint 2</summary>

Balance that change against binomial fluctuations.

</details>
<details><summary>Solution</summary>

Empirical probability fluctuates on the inverse-square-root sample scale. A cubic CDF shift reaches that size at a location displacement of order sample size to minus one-sixth, rather than minus one-half. Binomial inversion then produces a transformed-normal, non-Gaussian location limit.

</details>

## Forward and backward connections

This chapter moved beyond the parametric likelihood framework of *Generalized Linear Likelihood* to nonparametric and distribution-free methods. In *Robust Functionals*, we examine estimators defined by influence functions and their resistance to outliers. In *Dependent Central Limits*, we revisit the sampling assumptions: the iid structure assumed here fails for time series and spatial data, requiring modified theory.

## Summary

The imported sharp DKW inequality supplies finite simultaneous CDF control, whose inversion gives quantile sets even with atoms. Smooth positive-density quantile limits follow by binomial inversion, while irregular examples require another scale. Exact rank calibration counts actual assignments and ties. Pointwise density bias and integrated risk have separately stated smoothness hypotheses, preparing the functional-delta and bootstrap chapter.
