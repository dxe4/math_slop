
# The Lindeberg-Feller Central Limit Theorem

A triangular array can contain observations of different scales and distributions in each row. A normal limit requires more than independence and a total variance: no persistent part of that variance may hide in rare large jumps. This chapter proves the Lindeberg implication, its converse under the Feller condition and useful consequences for bounded and iid observations.

Preparation is the characteristic-function continuity theorem, second moments and dominated convergence. All array entries within a row are independent; different rows may be coupled arbitrarily because the theorem concerns each row's law. We do not infer a pathwise limit across rows.

## Normalizing the array

For each n, let a finite row of real variables have finite expectations and variances, with positive sum of variances s n squared. Subtract each expectation and divide every row entry by s n. Write the resulting entries as X n k and their sum as S n. Then each is centred and their variance sum is one.

The Lindeberg condition is
$$L_n(\varepsilon)=\sum_kE[X_{n,k}^2
{\bf1}_{\{|X_{n,k}|>\varepsilon\}}]\longrightarrow0
\quad\hbox{for every }\varepsilon>0.$$
The Feller condition is that the largest individual variance tends to zero. These are statements about the normalised row, not the raw units of the original observations.

Lindeberg implies Feller. For every entry, its second moment below epsilon is at most epsilon squared and its remaining second moment is bounded by the full row tail sum. Thus maximum variance is at most epsilon squared plus L n of epsilon. Take a limiting upper bound and then let epsilon decrease to zero.

## The characteristic-function remainder with only second moments

For a real u, twice integrating the complex exponential gives absolute value of exp i u minus one minus i u at most u squared divided by two. Adding the quadratic correction bounds the second-order remainder by u squared globally. A third-order integral remainder gives its smaller bound absolute u cubed divided by six near zero, and in fact globally when the third power is integrable.

For fixed t, split each expectation according to absolute X at most epsilon. Centring removes the linear term, leaving
$$\varphi_{n,k}(t)=1-\frac{t^2}{2}EX_{n,k}^2+r_{n,k}(t),$$
where the sum of remainder magnitudes is bounded by
$$\frac{|t|^3\varepsilon}{6}
+t^2 L_n(\varepsilon).$$
The first term uses total row variance one. Let n increase for a fixed epsilon, then let epsilon decrease. Under Lindeberg the total remainder tends to zero. No common third moment has been assumed.

Also the first second-order inequality and centring give absolute phi minus one at most t squared times entry variance divided by two. Feller therefore makes the largest such discrepancy tend to zero, while their absolute sum stays at most t squared divided by two.

## Product transforms and the sufficient direction

For complex z close to zero, the branch of log one plus z defined near one equals z plus an error bounded by a constant times absolute z squared. The total squared discrepancies are at most their maximum magnitude times their bounded absolute sum, hence tend to zero.

Row independence now gives
$$\log\varphi_{S_n}(t)
=\sum_k\log\varphi_{n,k}(t)
\longrightarrow-t^2/2.$$
This notation means summing the chosen near-one logarithms of individual factors; exponentiating gives the product, so no unproved global logarithm branch of the sum transform is being selected. The remainder calculation supplied the limiting linear sum.

Thus the sum transform converges to the standard normal transform at every t. Levy continuity proves S n converges in law to standard normal. This completes Lindeberg's sufficient implication with the small- and large-term estimates explicit.

## Why the converse needs a no-dominant-variance condition

A row consisting of one standard normal variable and any number of zero variables already sums to standard normal at every n. Its maximum entry variance is one, and its Lindeberg tail never vanishes. Normal convergence alone therefore does not force Lindeberg.

The correct converse assumes Feller as well: if maximum variance tends to zero and the normalised row sum converges to standard normal, Lindeberg holds. We prove that statement directly from transform moduli, avoiding an unsupported inference from weak convergence to second-moment convergence.

## The full Feller converse

Fix a nonzero t. Feller and the bound on each transform discrepancy make their maximum tend to zero and their total absolute sum remain bounded, just as above. The real part of the near-one logarithm equals log modulus. Consequently the difference between the sum of real transform discrepancies and log modulus of the row-sum transform tends to zero.

The normal limit makes that log modulus tend to minus t squared divided by two, since the limiting modulus is positive. Therefore
$$\sum_kE[1-\cos(tX_{n,k})]\longrightarrow t^2/2.$$
Subtract this from half t squared times the variance sum, which is exactly half t squared. The resulting nonnegative sum tends to zero.

For a scalar x, define the gap as half t squared x squared minus one minus cosine t x. It is positive for every nonzero x: strict inequality one minus cosine u less than u squared divided by two holds away from zero. Its ratio to x squared is continuous away from zero and tends to half t squared as absolute x grows. Thus for each positive epsilon it has a positive lower bound on absolute x at least epsilon. The compact middle region supplies a positive minimum and the far tail a positive limiting bound.

It follows that the Lindeberg tail sum at epsilon is at most a constant times the summed gap, hence tends to zero. This proves necessity. Combined with the sufficient direction, Lindeberg is equivalent to Feller plus the standard normal row-sum limit under the normalised independent finite-variance array hypotheses.

The strict cosine gap is the mechanism that detects variance hidden in non-small observations. Merely observing that each row variance equals one and the weak limit has variance one would not prove tail control without another theorem.

## Lyapunov supplies an easy sufficient condition

Suppose for some positive delta the sum of normalised absolute moments of order two plus delta tends to zero. On the tail above epsilon, square magnitude is at most epsilon to the minus delta times that higher power. Summing gives Lindeberg immediately.

This Lyapunov condition is stronger than necessary. Finite second moments can suffice without any larger moment, as the iid example below shows. An upper bound on individual higher moments must still be combined with row sizes and total variance; a finite number written beside one observation does not automatically control the normalised moment sum.

### Worked example: the iid finite-variance central limit theorem

Let W have mean zero and positive finite variance sigma squared, and use n independent copies divided by sigma square root n. The Lindeberg row sum is
$$\sigma^{-2}E[W^2{\bf1}_{\{|W|>\varepsilon\sigma\sqrt n\}}],$$
which tends to zero by dominated convergence. The theorem yields the ordinary iid CLT with only a finite second moment.

The proof does not require a third moment. In a heavy-tailed model with finite variance but no higher moments, Lyapunov may fail as a convenient criterion while this direct Lindeberg check remains valid.

### Worked example: bounded independent Bernoulli counts

For independent Bernoulli entries with possibly different success probabilities, every centred raw entry has absolute value at most one. If the sum of their variances tends to infinity, their normalised maximum magnitude tends to zero. For every fixed epsilon, the Lindeberg tail is then exactly zero for all sufficiently late rows.

Their centred sum divided by its standard deviation therefore tends to standard normal. A rare-event regime with bounded total variance does not meet this assumption and may instead have a Poisson limit. The number of rows alone does not select the limiting law; total variance and normalised jumps do.

## An infinitesimal array with a nonnormal limit

Let each row have n independent entries equal to plus one and minus one with probabilities one over two n each, and zero otherwise. Each variance is one over n, so the total is one and Feller holds. For epsilon below one, however, the Lindeberg tail sum is one and does not vanish.

### Worked example: rare signed jumps

The row-sum transform is
$$\{1+(\cos t-1)/n\}^n\longrightarrow e^{\cos t-1}.$$
The limit is the transform of a sum of a Poisson-one number of independent fair signs: conditional on that count its transform is cosine t to the count, whose Poisson average gives the displayed exponential. Levy identifies this compound-Poisson limit.

It is not standard normal. At t equal to two pi its transform is one, while the standard normal transform is strictly below one there. This exact example proves that Feller alone is insufficient and illustrates the large-jump variance that Lindeberg excludes.

## From scalar to vector limits

For independent vector rows, check a scalar projection for each fixed vector a. Its covariance and Lindeberg requirements must be computed for that projected array or bounded by a valid vector-tail condition. The Cramer-Wold theorem then identifies a multivariate normal limit when the limiting covariance is specified.

That theorem is a further weak-convergence result in the weak-convergence chapter’s general machinery; the full proof supplied here is scalar. Coordinatewise CLTs alone do not identify a joint law, as dependence can change the distribution of linear combinations. A singular limiting covariance is allowed in a vector theorem, but normalisation by its inverse is not.

## What the theorem leaves to a statistical application

The centring and variance are true distributional quantities. Replacing them by fitted values needs consistency or studentization arguments. Dependence within a row needs a different theorem. Changing the scientific population between training and assessment changes the law under discussion rather than adding another row to this fixed asymptotic experiment.

Lindeberg-Feller supplies a probability limit under explicit row hypotheses. It does not certify finite-sample accuracy for a particular dataset, validate a model, or justify an algorithm's standard error merely because a sample size is large.

## Variance-weighted laws explain the Lindeberg tail

For each normalised row, assign to a Borel set A the sum of expected squared entries restricted to A. This defines a probability measure on the real line because the total second-moment sum is one. Lindeberg says exactly that these variance-weighted measures put asymptotically all their mass arbitrarily close to zero.

Equivalently, for every bounded continuous g vanishing at zero,
$$\sum_kE[X_{n,k}^2g(X_{n,k})]\longrightarrow0.$$
For the forward implication, split at epsilon. Near zero, continuity makes g uniformly small and total second-moment mass is one. Outside, its bound multiplies the Lindeberg tail. For the converse, use the continuous function equal to the minimum of one and absolute x divided by epsilon. It is one on the relevant tail and nonnegative everywhere, so its expectation bounds that tail from above.

This is a description of where variance is carried, not the ordinary law of a uniformly selected array entry. Feller controls how much variance one index carries, whereas Lindeberg also controls the size of the observations carrying it. The signed-jump example distributes small variance over many indices but concentrates this variance-weighted law at plus and minus one.

## A weighted common-law central limit corollary

Let the row entries be deterministic coefficients times independent copies of one centred unit-variance variable. Suppose squared coefficients sum to one and their largest absolute value tends to zero. No larger moment is needed. The row Lindeberg tail is at most the common second-moment tail beyond epsilon divided by that largest coefficient: each summand is bounded by its squared coefficient times that common tail expectation.

The squared coefficients sum to one, and the tail expectation tends to zero by integrability of the common square. Lindeberg therefore proves a normal limit. If a higher moment exists, Lyapunov gives another route by bounding the coefficient power sum by the largest coefficient to that extra power.

The common innovation law is important to this short proof. Arbitrary unit-variance innovations changing with the row can themselves concentrate second moments on rarer and larger values, so small deterministic coefficients alone would not control the displayed common tail. They would need a uniform second-moment-tail condition or the original Lindeberg check.

## Centering errors accumulate before normalization

Suppose the true centred sum has the proved standard normal limit, but an application subtracts different deterministic means. The standardized result equals the true standardized sum plus the total mean error divided by the true standard deviation. If that latter number tends to zero, the same limit holds. If it tends to a nonzero c, multiplying characteristic functions by the corresponding deterministic shift factor gives a normal limit with mean c.

Thus small errors on individual means must be assessed after summing and dividing by the row scale. A per-observation error tending to zero need not make its accumulated standardized error vanish. The CLT controls fluctuation about the declared true centring; it does not erase a systematic bias introduced by a fitted or numerical replacement.

## Exercises

<a id="lindeberg-feller-ex-1"></a>

### Exercise 1

Why is positive total row variance required for the standardized statement?

<details><summary>Hint 1</summary>

The normalisation divides by its standard deviation.

</details>

<details><summary>Hint 2</summary>

Zero-variance rows need a separate deterministic description.

</details>

<details><summary>Full solution</summary>

If total variance is zero, every centred entry is zero almost surely and the centred sum is degenerate. It cannot be standardized by division to a unit-variance row. Such rows are excluded from this theorem’s normalised formulation.

</details>

<a id="lindeberg-feller-ex-2"></a>

### Exercise 2

Prove Lindeberg implies Feller.

<details><summary>Hint 1</summary>

Split each variance at epsilon.

</details>

<details><summary>Hint 2</summary>

Bound one entry’s tail by the row tail sum.

</details>

<details><summary>Full solution</summary>

$EX_{n,k}^2\le\varepsilon^2+L_n(\varepsilon)$. Take the maximum, a limiting upper bound and then epsilon to zero. This uses normalisation and the common Lindeberg condition for every positive threshold.

</details>

<a id="lindeberg-feller-ex-3"></a>

### Exercise 3

Explain why the summed Taylor remainder can vanish without a third moment.

<details><summary>Hint 1</summary>

Use a cubic bound only on small entries.

</details>

<details><summary>Hint 2</summary>

Use a quadratic bound on the tails.

</details>

<details><summary>Full solution</summary>

On absolute X at most epsilon, the cubic remainder is bounded by epsilon times its square. Outside, the global quadratic bound is controlled by the Lindeberg tail. Summing first and letting n increase, then epsilon decrease, needs only finite second moments.

</details>

<a id="lindeberg-feller-ex-4"></a>

### Exercise 4

Why does the sum of squared transform discrepancies vanish?

<details><summary>Hint 1</summary>

Their absolute sum is bounded.

</details>

<details><summary>Hint 2</summary>

Their maximum tends to zero under Feller.

</details>

<details><summary>Full solution</summary>

The squared sum is at most maximum magnitude times the absolute sum. The former tends to zero and the latter is bounded by half t squared, so the product vanishes and controls the logarithm remainders.

</details>

<a id="lindeberg-feller-ex-5"></a>

### Exercise 5

Give a normal-limit array failing Feller and Lindeberg.

<details><summary>Hint 1</summary>

Keep one standard normal summand.

</details>

<details><summary>Hint 2</summary>

Let all other entries be zero.

</details>

<details><summary>Full solution</summary>

The row sum is exactly standard normal, but the maximum variance stays one and its nonzero normal tail second moment persists at every threshold. Thus the converse must include Feller rather than asserting CLT alone implies Lindeberg.

</details>

<a id="lindeberg-feller-ex-6"></a>

### Exercise 6

Prove the positive cosine-gap lower bound on a fixed tail.

<details><summary>Hint 1</summary>

Divide the strict quadratic-minus-cosine gap by x squared.

</details>

<details><summary>Hint 2</summary>

Use compactness away from zero and its positive limit at infinity.

</details>

<details><summary>Full solution</summary>

For nonzero fixed t the ratio is positive at every nonzero x, continuous away from zero and tends to half t squared at infinity. On absolute x at least epsilon, a compact middle region and sufficiently far tails therefore have a common positive lower bound. This turns vanishing summed gaps into Lindeberg.

</details>

<a id="lindeberg-feller-ex-7"></a>

### Exercise 7

Derive Lyapunov’s implication to Lindeberg.

<details><summary>Hint 1</summary>

On a tail compare a square with a larger power.

</details>

<details><summary>Hint 2</summary>

Use the common epsilon factor.

</details>

<details><summary>Full solution</summary>

$X^2{\bf1}_{\{|X|>\varepsilon\}}\le\varepsilon^{-\delta}|X|^{2+\delta}$. Summing and using the vanishing normalised higher-moment sum gives every Lindeberg tail.

</details>

<a id="lindeberg-feller-ex-8"></a>

### Exercise 8

Why does the independent Bernoulli example need diverging total variance?

<details><summary>Hint 1</summary>

Raw centred jumps are bounded by one.

</details>

<details><summary>Hint 2</summary>

Their normalised maximum must vanish.

</details>

<details><summary>Full solution</summary>

Dividing by a standard deviation tending to infinity makes every jump eventually below any fixed epsilon. If total variance stays bounded, that argument fails and rare jumps can survive, as in Poisson limits.

</details>

<a id="lindeberg-feller-ex-9"></a>

### Exercise 9

Check Feller and failure of Lindeberg in the rare signed-jump array.

<details><summary>Hint 1</summary>

Each entry is nonzero with probability one over n.

</details>

<details><summary>Hint 2</summary>

Its nonzero magnitude is one.

</details>

<details><summary>Full solution</summary>

Each variance is one over n, making maximum variance vanish and total variance one. For every epsilon below one, all nonzero squared mass remains in the tail, whose row sum is one. Thus Feller holds but Lindeberg fails.

</details>

<a id="lindeberg-feller-ex-10"></a>

### Exercise 10

Does a row-wise CLT justify replacing true variance by any computed standard-error estimate?

<details><summary>Hint 1</summary>

The theorem normalizes by a distributional variance.

</details>

<details><summary>Hint 2</summary>

A random replacement needs a separate convergence statement.

</details>

<details><summary>Full solution</summary>

No. A consistent positive relative variance estimate can be combined with Slutsky under its conditions. An arbitrary fitted or numerically returned standard error is not covered by the true-variance CLT, especially under misspecification, dependence or weak information.

</details>
