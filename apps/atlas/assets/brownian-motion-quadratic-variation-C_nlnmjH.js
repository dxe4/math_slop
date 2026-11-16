var e=`---
parent_id: book-stochastic-calculus-financial-mathematics
chapter_id: brownian-motion-quadratic-variation
title: "Brownian Motion and Quadratic Variation"
level: graduate
license: CC BY-SA 4.0
---

# Brownian Motion and Quadratic Variation

Ordinary calculus discards squared increments because they disappear for smooth paths. Brownian increments are small too, but their squared sum survives. That surviving quantity controls the second-order correction in stochastic calculus and the meaning of a volatility parameter. We prove the convergence, its uniform version and covariance consequences before using any differential mnemonic.

**L4 preparation and source lineage.** Read the actual [Brownian Motion](../stochastic-processes-paths/brownian-motion.md), [Reflection Principle](../stochastic-processes-paths/path-properties-reflection-principle.md), [Conditional Expectation](../probability-theory-measure-martingales/conditional-expectation-radon-nikodym.md) and [Martingale Convergence](../probability-theory-measure-martingales/martingales-upcrossing-l1-convergence.md) sources. The [measure-theoretic Brownian construction](../probability-theory-measure-martingales/brownian-motion-construction.md) supplies existence. This chapter links those original Brownian readings rather than replacing them or moving their exercises. The proofs and questions here are a new continuation focused on quadratic variation and financial model interpretation.

## Brownian motion relative to information

Fix a probability space and a usual filtration, meaning complete and right-continuous. A Brownian motion relative to that filtration is continuous and adapted, starts at zero, and has increments after time $s$ independent of the whole sigma-field at $s$, with centered normal law of variance equal to elapsed time. This is stronger than specifying Gaussian one-time marginals. The information against which independence is claimed is part of the model.

For example, adding the value at a fixed future time to the initial information keeps every sample path and every marginal distribution unchanged. It destroys the Brownian increment independence with respect to that enlarged filtration. Conditional expectation of the already revealed final value is that value itself. Path properties and permissible trading information therefore need separate statements.

The existing construction uses consistent Gaussian finite-dimensional laws and a continuous modification. We take that existence as preparation, not as a conclusion of the squared-increment calculation. For an increment of length $h$, its second moment is $h$ and fourth moment is $3h^2$. These normal moments follow by differentiating the Gaussian moment-generating function or integrating the density. Subtracting the squared second moment shows that the variance of its square is $2h^2$.

## Deterministic quadratic variation, with its exact mode of convergence

Take a deterministic partition of $[0,T]$, with interval lengths $h_i$ and mesh equal to their maximum. Independent increments give
$$Q_\\pi=\\sum_i(B_{t_{i+1}}-B_{t_i})^2,\\qquad E Q_\\pi=T,\\qquad E(Q_\\pi-T)^2=2\\sum_i h_i^2\\le2T|\\pi|.$$
Thus along any prescribed deterministic partition sequence whose mesh tends to zero, the sums converge in mean square and in probability to $T$. There is no missing independence step: squares on disjoint intervals are functions of independent increments, so their variances add.

For dyadic partitions the variance bound is summable across refinement levels. Chebyshev's inequality and Borel–Cantelli show that the deviations exceed any fixed positive tolerance only finitely often. Intersecting the probability-one events for reciprocal integer tolerances proves almost-sure convergence along that entire dyadic sequence. This does not assert simultaneous almost-sure convergence over every possible random partition chosen after viewing the path. The quantifier and the mode of convergence are material hypotheses.

The process version can also be proved directly. Define the partial quadratic sum at time $t$ using all completed intervals plus the square of the increment from the latest grid point to $t$. At grid points its error is the partial sum of independent centered variables $U_i=(\\Delta B_i)^2-h_i$. If $S_j$ denotes those partial sums, then
$$P\\{\\max_j|S_j|\\ge a\\}\\le\\frac{E S_N^2}{a^2}.$$
To prove this maximal bound, split according to the first index $j$ reaching absolute level $a$. On that event the remaining sum has conditional mean zero and is independent of the preceding information. Expanding the terminal square gives expected terminal square on the event at least the expected reached square, hence at least its probability times $a^2$. Summing over the disjoint first-reaching events yields the inequality.

Between grid points the error differs from its latest grid error by $(B_t-B_{t_j})^2-(t-t_j)$. Its absolute size is bounded by the squared path oscillation over intervals of mesh length plus the mesh. Uniform continuity of each continuous Brownian path makes that oscillation vanish. The maximal inequality controls the grid errors in probability, proving uniform convergence on the whole fixed interval in probability. For dyadic refinements its summable bound gives uniform almost-sure convergence on that interval as well. Countably many integer horizons can be intersected when a simultaneous locally uniform dyadic statement is needed.

## Finite variation, powers and cross terms

For a continuous finite-variation path $A$, a squared-increment sum is at most its largest absolute increment times its total variation. Uniform continuity makes the first factor vanish, so its quadratic sums tend to zero. Brownian motion has a positive dyadic limit on every fixed positive interval, so it has infinite total variation there almost surely. Applying the same argument on rational subintervals and taking a countable intersection gives infinite variation on every nontrivial interval. Infinite variation alone is not a proof of nowhere differentiability; the stronger classical theorem remains in the prerequisite reading.

Along the dyadic sequence, powers above two have zero limit: their sum is bounded by the quadratic sum times the largest increment to the power above two. Positive powers below two diverge, because the quadratic sum is at most the lower-power sum times the largest increment to the complementary positive power. The maximum increment vanishes and the quadratic sum tends to a positive number. These statements concern the prescribed refining sums. They must not be confused with a supremum over all partitions in a definition of strong variation.

For two processes define their discrete cross sum using products of simultaneous increments. The identity
$$2\\sum_i\\Delta X_i\\Delta Y_i=Q_\\pi(X+Y)-Q_\\pi(X)-Q_\\pi(Y)$$
is purely algebraic and motivates covariation. If one continuous path has finite variation and the other's quadratic sums remain bounded, Cauchy–Schwarz makes their cross sums tend to zero. Consequently adding a continuous finite-variation drift to a constant Brownian multiple does not change its limiting quadratic variation.

For two independent Brownian motions, each product increment has mean zero and variance $h_i^2$, and products on distinct intervals are independent. Their cross sum tends to zero in mean square. If $C=\\rho B+\\sqrt{1-\\rho^2}W$, with independent $B,W$ and $|\\rho|\\le1$, polarization gives cross variation $\\rho T$ with $B$. Multiplying by deterministic exposure coefficients gives the corresponding covariance factors. A negative cross variation is possible; a process's own quadratic variation remains nonnegative.

For several factors, every finite-grid quadratic-covariation matrix is a sum of outer products of increment vectors. For any exposure vector its quadratic form is therefore a sum of squares and is nonnegative. Any deterministic limiting covariance matrix retains this property, by taking limits of those quadratic forms. Thus admissible correlations cannot be selected independently without respecting positive semidefiniteness. In two dimensions the determinant condition gives the familiar correlation range; in higher dimensions pairwise admissibility alone need not make the whole matrix valid.

## Weighted sums and deterministic clocks

Let $H$ be bounded, continuous and adapted. The weighted difference between squared increments and interval lengths has conditional mean zero term by term. Earlier terms are measurable before a later Brownian increment, so the cross expectations vanish. Its second moment is at most $2\\|H\\|_\\infty^2T|\\pi|$. The weighted time sum converges pathwise to the ordinary integral of $H$. Therefore
$$\\sum_iH_{t_i}(\\Delta B_i)^2\\longrightarrow\\int_0^T H_s\\,ds$$
in probability. For a merely pathwise bounded continuous adapted process, truncate it continuously at larger bounds, apply the result to each truncation and use the fact that its finite-horizon supremum is finite almost surely. This proves the localized statement without pretending the original random bound is deterministic.

For a continuous nondecreasing deterministic clock $v$, with $v(0)=0$, the process $B_{v(t)}$ has independent increment variances $v(t_{i+1})-v(t_i)$. Repeating the square calculation gives expectation $v(T)$ and variance at most twice $v(T)$ times the largest clock increment. Uniform continuity of the clock makes that largest increment vanish with physical-time mesh. Thus the quadratic variation is the clock, not necessarily calendar time. A random clock requires additional adaptedness and time-change arguments and is outside this elementary deterministic proof.

## Worked example 1: realized log-variance and drift bias

Define a hypothetical log-price factor $X_t=x+at+\\sigma B_t$. This is a specified process here; its later connection to a price SDE will be derived using Itô's formula. Along deterministic partitions, its realized squared log-increments converge to $\\sigma^2T$. The drift squares vanish and the drift–Brownian cross term vanishes by the finite-variation argument.

At a finite sampling grid the expected squared sum is instead $\\sigma^2T+a^2\\sum_i h_i^2$. The positive drift term follows by expanding each square and taking the centered increment expectation. For equal intervals it is $a^2T^2/N$, so it disappears under refinement. With time measured in years and hypothetical $\\sigma=1/5$, the limiting one-year quadratic log-variation is $1/25$. Its square root divided by the square root of the horizon gives the model's annualized volatility. This is a model identity, not evidence that observed market returns obey its assumptions or that sampling noise has disappeared at a finite grid.

## Worked example 2: correlated factor exposures

Let $X=(1/5)B$ and $Y=(3/10)C$, with correlation parameter $\\rho=3/5$. Over two time units their quadratic variations are $2/25$ and $9/50$, and their cross variation is $9/125$. For the linear factor exposure $Z=2X-Y$, expansion gives quadratic variation
$$4(2/25)+9/50-4(9/125)=53/250.$$
All quantities are nonnegative where required, and the negative cross contribution reduces this exposure's variance. Setting the correlation to zero would instead give one half, a different model answer. The linear combination describes factor exposure; it is not automatically the logarithm of a self-financing portfolio. That financial interpretation needs wealth and trading definitions introduced later.

## Worked example 3: a nonuniform variance clock

With fixed time units, take the deterministic clock $v(t)=t^2$ and observe up to physical time two. The terminal quadratic variation is four. Equal physical-time spacing does not give equal increment variances, since the clock runs faster later. Each clock increment is the difference of two successive squared times. Its largest value is at most eight divided by the number of intervals, so the variance of the squared-increment sum is at most sixty-four divided by that number.

This proves mean-square convergence despite the nonuniform variance increments. Treating every increment variance as the physical interval length would instead target two, which is wrong for this process. The clock is part of the probability law, just as the filtration is part of the independence statement. No simulated path is needed to establish the exact target or its stated bound.

## Exercises

### Exercise 1.1
<a id="brownian-motion-quadratic-variation-ex-1"></a>

For a partition with interval lengths one quarter and three quarters of a time unit, find the mean and variance of its Brownian quadratic sum.

<details><summary>Hint 1</summary>

A squared centered normal increment has variance twice the squared interval length.

</details>
<details><summary>Hint 2</summary>

The two squared increments are independent.

</details>
<details><summary>Solution</summary>

The mean is one. The variance is $2((1/4)^2+(3/4)^2)=5/4$. Independence justifies adding the variances. The unequal partition is less concentrated than two equal half-unit intervals, whose variance would be one. Having the correct expectation at a coarse grid does not imply that an individual squared sum is close to its limiting value.

</details>

### Exercise 1.2
<a id="brownian-motion-quadratic-variation-ex-2"></a>

Prove that a continuous finite-variation path has zero limiting quadratic sum along shrinking-mesh partitions.

<details><summary>Hint 1</summary>

Take one factor of each squared increment outside the sum by a maximum.

</details>
<details><summary>Hint 2</summary>

Uniform continuity controls the maximum and total variation controls the remaining sum.

</details>
<details><summary>Solution</summary>

The squared sum is at most the largest absolute increment times the sum of all absolute increments. The latter is bounded by total variation and the former tends to zero by uniform continuity. Their product therefore tends to zero. Continuity is necessary in this argument: a jump of a finite-variation path can contribute a nonzero squared jump instead of vanishing.

</details>

### Exercise 1.3
<a id="brownian-motion-quadratic-variation-ex-3"></a>

Why does almost-sure dyadic convergence not establish almost-sure convergence simultaneously for all partitions selected after viewing a path?

<details><summary>Hint 1</summary>

The proof uses a countable summable family of probability bounds.

</details>
<details><summary>Hint 2</summary>

A path-dependent selection changes both the quantifier and the independence argument.

</details>
<details><summary>Solution</summary>

The dyadic proof intersects countably many probability-one events for that specified sequence. It does not control an uncountable family of choices on the same null-set complement. Moreover random intervals selected from future path behavior need not have the deterministic independent-increment variances used in the calculation. A theorem for a particular adapted random-partition class needs its own hypotheses and proof; neither follows from the stated dyadic result alone.

</details>

### Exercise 1.4
<a id="brownian-motion-quadratic-variation-ex-4"></a>

For $X_t=3t+2B_t$ on a horizon of length two, compute the limiting quadratic variation and the expected squared-increment sum on $N$ equal intervals.

<details><summary>Hint 1</summary>

The limiting drift contribution is zero.

</details>
<details><summary>Hint 2</summary>

The finite-grid drift bias is the squared drift coefficient times the sum of squared interval lengths.

</details>
<details><summary>Solution</summary>

The limit is eight. The finite-grid expectation is $8+9N(2/N)^2=8+36/N$. Centered Brownian increments make the expected cross term zero. The positive bias tends to zero, but no equality between a finite realized sum and eight is asserted.

</details>

### Exercise 1.5
<a id="brownian-motion-quadratic-variation-ex-5"></a>

Let $B,W$ be independent Brownian motions. Prove their simultaneous cross sums tend to zero in mean square.

<details><summary>Hint 1</summary>

Each product has mean zero and second moment equal to the squared interval length.

</details>
<details><summary>Hint 2</summary>

Different interval products are independent.

</details>
<details><summary>Solution</summary>

The cross-sum mean is zero and its second moment is $\\sum_i h_i^2\\le T|\\pi|$, tending to zero. Independence of the two Brownian motions and of their disjoint time increments supplies both calculations. This does not say each product increment vanishes or that the two paths are orthogonal pointwise; it is a limit of accumulated products.

</details>

### Exercise 1.6
<a id="brownian-motion-quadratic-variation-ex-6"></a>

For correlated unit Brownian factors with parameter $\\rho$, calculate the quadratic variation of their difference and check its sign.

<details><summary>Hint 1</summary>

Use both individual quadratic variations and the cross variation.

</details>
<details><summary>Hint 2</summary>

The admissible correlation interval is from minus one to one.

</details>
<details><summary>Solution</summary>

The result is $2(1-\\rho)T$, which is nonnegative throughout the stated interval. At correlation one the factors can be the same process and their difference has zero quadratic variation. At correlation minus one they are opposites and the difference is twice one Brownian motion, giving four times the horizon. This agrees with the formula's endpoints.

</details>

### Exercise 1.7
<a id="brownian-motion-quadratic-variation-ex-7"></a>

Explain why adding the final Brownian value to time-zero information destroys the martingale property but not the already established pathwise dyadic quadratic variation.

<details><summary>Hint 1</summary>

Condition the revealed final value on the enlarged initial sigma-field.

</details>
<details><summary>Hint 2</summary>

The squared-increment path functional itself has not changed.

</details>
<details><summary>Solution</summary>

Its conditional expectation at time zero is now the known final value, which is not almost surely zero. Hence the process is no longer a martingale relative to that enlarged information. The same sample paths and probability law still have the same dyadic quadratic sums, so that path property remains. Predictable integration and pricing arguments cannot infer the old information structure merely from that surviving variation identity.

</details>

### Exercise 1.8
<a id="brownian-motion-quadratic-variation-ex-8"></a>

Prove that dyadic sums of absolute Brownian increments to a power strictly below two diverge on a fixed positive horizon.

<details><summary>Hint 1</summary>

Bound the quadratic sum by the lower-power sum times a power of the maximum increment.

</details>
<details><summary>Hint 2</summary>

The quadratic sum tends to a positive number and the maximum increment tends to zero.

</details>
<details><summary>Solution</summary>

For power $p<2$ with $p>0$, the inequality $\\sum|\\Delta B|^2\\le(\\max|\\Delta B|)^{2-p}\\sum|\\Delta B|^p$ forces the lower-power sum to diverge, since its multiplier tends to zero while the left side tends to the positive horizon. This is a statement about that refining sequence, with the same probability-one event, not an assertion that all differently defined variation notions coincide.

</details>

### Exercise 1.9
<a id="brownian-motion-quadratic-variation-ex-9"></a>

For a deterministic continuous increasing clock with terminal value nine, determine the limiting quadratic variation of the time-changed Brownian process. Which clock property supplies convergence?

<details><summary>Hint 1</summary>

Replace interval lengths by clock increments in the variance calculation.

</details>
<details><summary>Hint 2</summary>

The largest clock increment vanishes by uniform continuity.

</details>
<details><summary>Solution</summary>

The limit is nine, assuming the clock starts at zero. Its squared-sum variance is bounded by eighteen times the maximum clock increment. Continuity on the fixed compact interval makes that maximum tend to zero when physical mesh shrinks. Monotonicity makes the clock increments nonnegative valid Brownian time intervals. A discontinuous or random clock would require a different statement.

</details>

### Exercise 1.10
<a id="brownian-motion-quadratic-variation-ex-10"></a>

Why does the weighted quadratic-sum proof require left-adapted coefficients when centering the square increments?

<details><summary>Hint 1</summary>

Condition each centered term on the information at the interval's left endpoint.

</details>
<details><summary>Hint 2</summary>

A coefficient depending on that interval's future increment cannot generally be taken outside that conditional expectation.

</details>
<details><summary>Solution</summary>

Left-endpoint measurability lets the coefficient multiply a future centered squared increment with conditional mean zero. It also makes earlier terms measurable when conditioning a later cross expectation, proving orthogonality. A future-dependent coefficient can correlate with the squared increment and give a nonzero conditional mean, invalidating the second-moment estimate. The proof is therefore about the declared information-compatible weights, not arbitrary pathwise selections.

</details>

## Summary

Brownian quadratic variation is a proved limit with specified partitions and convergence modes. Continuous finite variation contributes no quadratic term; correlations produce cross variation; weighted sums and deterministic clocks retain precise hypotheses. These facts explain the scale of volatility and the correction needed in stochastic calculus. The next chapter constructs the predictable integral that uses them, without treating Brownian paths as ordinary finite-variation integrators.
`;export{e as default};