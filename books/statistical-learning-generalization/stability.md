
# Stability

Uniform convergence bounds control the worst-case deviation over a hypothesis class. But in practice, algorithms such as gradient descent do not explore the entire class. They follow a specific trajectory determined by initialization, step size, and data order. **Stability** asks a different question: if we change one training example, how much does the returned predictor change? An algorithm with low sensitivity to single training points has strong stability, and this can imply generalization even when uniform convergence over the full class is vacuous.

## Uniform stability

Let $S = (Z_{1}, \dots, Z_{n})$ and $S'$ be two training sets that differ in exactly one example. An algorithm $A$ is **uniformly stable** with parameter $\beta$ if for all such $S,S'$,

$$\sup_{z} |\ell(A(S), z) - \ell(A(S'), z)| \le \beta.$$

The parameter $\beta$ typically depends on $n$: as the sample grows, the influence of any single point should diminish. A common rate is $\beta = O(1/n)$.

## The stability generalization bound

Under IID sampling and integrability assumptions, uniform stability controls the expected generalization gap:

$$\mathbb{E}_{S}[R(A(S)) - \hat{R}_{S}(A(S))] \le \beta.$$

More refined bounds give high-probability statements. Under the replacement-neighbor convention above, if the loss is bounded in $[0, M]$, a bounded-differences argument gives, with probability at least $1 - \delta$,

$$R(A(S)) - \hat{R}_{S}(A(S)) \le \beta + (2n\beta + M)\sqrt{\frac{\log(1/\delta)}{2n}}.$$

Indeed, replacing one row changes the population-risk term by at most $\beta$ and the empirical-risk term by at most $\beta+M/n$. Literature using deletion neighbors often displays different factors of two, so the stability convention must travel with the bound.

When $\beta = O(1/n)$, the expected-gap bound is $O(1/n)$, while this particular high-probability bound is $O(1/\sqrt n)$ because of its concentration term. These are different statements and should not be reported as one rate.

## Strongly convex regularization

Let $H$ be a convex subset of a Hilbert space and consider regularized empirical risk minimization

$$\hat{h} = \operatorname{argmin}_{h \in H} \hat{R}_{S}(h) + \frac{\lambda}{2}\|h\|^{2},$$

where $\lambda>0$. Assume each $h\mapsto\ell(h,z)$ is convex and $L$-Lipschitz on $H$, and that the minima exist. The full objective is then $\lambda$-strongly convex. Under the replacement-one neighbor convention used above, the solution is uniformly stable with

$$\beta \le \frac{2L^{2}}{\lambda n}.$$

**Proof sketch.** Let $h,h'$ minimize the objectives for neighboring samples whose differing examples are $z_i,z_i'$. Apply strong convexity once at each minimizer and add the inequalities. All shared loss terms and both regularizers cancel, leaving

$$\lambda\|h-h'\|^2\le\frac1n\bigl(\ell(h',z_i)-\ell(h,z_i)+\ell(h,z_i')-\ell(h',z_i')\bigr)\le\frac{2L}{n}\|h-h'\|.$$

Hence $\|h-h'\|\le2L/(\lambda n)$, and Lipschitz continuity gives the displayed loss difference. Constants change with deletion rather than replacement neighbors and with the normalization of the squared-norm penalty.

This explains a tradeoff: stronger regularization (larger $\lambda$) increases bias yet reduces sensitivity to one observation. The conclusion depends on convexity, Lipschitz constants, and the precise regularizer. Nonconvex neural training can be stable in practice without the simple theorem applying.

## Stability and differential privacy

Differential privacy also limits sensitivity to one record. An $(\varepsilon, \delta)$-differentially private algorithm satisfies a stability-like property, and privacy guarantees can imply generalization bounds. However, privacy, accuracy, and computational claims require their own definitions. The uniform common-output comparison here is not a privacy definition. A deterministic algorithm can satisfy this loss-stability inequality while revealing an exact changing statistic. A privacy guarantee instead compares distributions of randomized outputs; it does not assert this pointwise inequality for every coupled random seed.

## Worked example: regularized least squares

Consider linear regression with squared loss and $\ell_{2}$ regularization (ridge regression):

$$\hat{w} = \operatorname{argmin}_{w} \frac{1}{n}\sum_{i=1}^{n}(y_{i} - w^{T}x_{i})^{2} + \lambda \|w\|_{2}^{2}.$$

Assume $\|x_{i}\|_{2} \le C$, $|y_{i}| \le Y$, and that solutions for every neighboring sample lie in one common ball $\|w\|_{2} \le B$. The squared loss is then $L_0=2C(Y + BC)$-Lipschitz on that ball. The full objective has strong-convexity modulus $2\lambda$, so the preceding replacement bound gives

$$\beta \le \frac{4(Y + BC)^{2}C^{2}}{\lambda n}.$$

For $Y = 1$, $C = 1$, $B = 2$, $\lambda = 0.1$, and $n = 1000$,

$$\beta \le \frac{4 \cdot 9 \cdot 1}{0.1 \cdot 1000} = \frac{36}{100} = 0.36.$$

With larger $\lambda = 1$,

$$\beta \le \frac{36}{1000} = 0.036.$$

Stronger regularization yields better stability at the cost of potentially larger regularization bias.

## Common errors

- **Assuming stability implies generalization without checking hypotheses.** The bound requires IID sampling and bounded or Lipschitz loss.
- **Confusing stability with uniform convergence.** Stability is algorithm-dependent; uniform convergence is class-dependent. They can give different bounds for the same algorithm.
- **Applying convex stability results to nonconvex training.** Neural network training is nonconvex, and the standard stability bounds for strongly convex problems do not apply.

## The replace-one identity proves the expected-gap theorem

First take a deterministic algorithm with a measurable output and integrable losses. For each training position, draw an independent fresh observation and form the sample in which that position is replaced. The replaced sample has the same distribution as the original sample, and is independent of the original observation at that position. Therefore the expected loss of the replaced-sample predictor on the original observation equals the expected population risk of the original algorithm.

Subtract the expected original empirical loss and average over positions. The expected generalization gap becomes the average of expected loss differences between original and replaced predictors evaluated at the original observation. Uniform replacement stability bounds each absolute difference by beta. Thus
$$\left|E\{R(A(S))-\widehat R_S(A(S))\}\right|\le\beta.$$
No bounded loss is needed for this expectation identity beyond the stated integrability and stability; boundedness enters the concentration result. Independence of the replacement observation and of the original iid sample is the essential distributional step.

For a randomized algorithm, the same proof applies if one conditions on an independent seed and the same stability bound holds for every seed under a common-seed coupling. Integration then preserves the expected result. An inequality averaging only over algorithmic randomness defines a weaker notion and requires its own concentration analysis; it should not be substituted silently into the deterministic bounded-differences proof.

## Concentrating the actual generalization gap

Assume the loss is between zero and M and let G be population minus empirical risk of the returned predictor. Replacing one training observation changes the population-risk term by at most beta, because the pointwise loss change is bounded and integration preserves that inequality.

For the empirical term, on each unchanged row the fitted-predictor replacement changes loss by at most beta. The one changed row contributes at most M divided by n because both relevant losses lie in the common interval. Summing gives empirical change at most beta plus M divided by n. Hence G has coordinate sensitivity at most twice beta plus M divided by n. The bounded-differences martingale proof in the preceding chapter gives its upper concentration around expectation. Insert the expected-gap bound to obtain exactly the high-probability formula displayed above.

Applying the same argument to the negative gap yields a two-sided version with beta plus the same coefficient times the square root of log two over delta divided by twice n. This controls the absolute realized gap, unlike the expectation inequality, which controls the absolute value of its expectation. Interchanging those two operations would be incorrect.

For beta of order inverse n, the expectation theorem is correspondingly of order inverse n. The elementary concentration theorem remains of order inverse square root n. It is not contradictory that an exactly zero expected gap can fluctuate at that latter scale: a fixed rule already has ordinary empirical sampling variability.

## Why strong convexity controls neighbor minimizers

The regularized objective is strongly convex with modulus lambda under the convention using half lambda times squared norm. At a constrained minimizer h, its objective at any other feasible point h prime is at least its minimum plus half lambda times their squared distance. This statement does not require the minimizer to be interior. To prove it directly, apply strong convexity to the segment from h to h prime, use minimality at every intermediate point, divide by the segment fraction and let that fraction decrease to zero.

Apply this growth inequality to each of the two neighboring objectives at its own minimizer and add. The common losses and the identical penalty cancel. The remaining two loss differences are each at most L times the distance, so the squared-distance lower bound yields the neighbor distance at most twice L divided by lambda n. Another Lipschitz comparison gives the stated stability constant. Existence was assumed in the theorem; uniqueness follows because two distinct minimizers would violate strong convexity at their midpoint.

The cancellation needs the same feasible set, loss and penalty parameter for the two neighboring samples. A data-dependent choice of lambda can change all these comparisons. Proving each fixed-lambda fit stable does not alone prove a tuning procedure stable, because neighboring samples can select different lambda values. The complete algorithm, including selection and numerical stopping, is the object to which the definition applies.

## Approximate optimization changes the stability bound

Suppose each numerical output has objective value within eta of its corresponding exact regularized minimum. Strong-convexity growth bounds its distance to that minimum by the square root of twice eta over lambda. For neighboring samples, the triangle inequality combines the two numerical-to-exact distances with the exact neighbor-minimizer distance. Lipschitz loss then gives
$$\beta_{\rm approximate}
\le\frac{2L^2}{\lambda n}
+2L\sqrt{\frac{2\eta}{\lambda}}.$$
If the two gap bounds differ, replace the last term by the sum of their separate square-root allowances. This is a proved bound from an objective guarantee, not a conclusion from a generic optimization success flag.

### Worked example: numerical precision for a stability scale

Keep lambda and L fixed and positive. To retain an inverse-n stability order in this particular bound, eta must be of order inverse n squared or smaller, because numerical distance enters through its square root. Taking eta merely of order inverse square root n makes the additional term of order inverse fourth root n. That may still vanish, but it does not preserve the sharper stability order. Compare this with a risk decomposition that adds eta directly: different theorems can demand different numerical guarantees from the same approximate optimizer.

For unconstrained ridge with penalty lambda times squared norm, a useful uniform coefficient bound follows without assuming it separately. Compare the minimizing objective with its value at zero. Nonnegativity of squared loss gives lambda times coefficient norm squared at most the average squared outcome, hence at most Y squared when every outcome is bounded by Y. Thus the coefficient norm is at most Y over square root lambda for every sample. Substituting this lambda-dependent bound in the Lipschitz constant yields a valid stability calculation; treating it as a fixed number while letting lambda vanish would change the theorem.

## Close deterministic outputs need not protect a record

To state the distinction precisely, differential privacy bounds, for every measurable output event B, the probability of B under one neighboring sample by the exponential privacy factor times its probability under the other plus a failure allowance. This is a comparison of output laws, not a bound on numerical distance between the outputs.

### Worked example: a stable mean can reveal its exact value

For data in the unit interval, return their arithmetic mean and use absolute prediction loss on a new unit-interval observation. Replacing one row changes the mean by at most one over n. The triangle inequality for absolute values makes every test-loss change at most that amount, so the algorithm is uniformly stable with beta at most one over n.

Nevertheless it is deterministic. Choose neighboring samples with different means and take the output event containing exactly the first mean. Its probability is one for the first sample and zero for the second. The privacy inequality would require its failure allowance to be at least one, regardless of a finite multiplicative privacy parameter. Thus this algorithm has a meaningful stability guarantee but no nontrivial differential-privacy guarantee. This example supplies the complete logical separation without claiming a general theorem about all randomized private procedures.

## Stability controls a gap, not the irreducible prediction risk

A predictor can be perfectly stable and consistently bad. If an algorithm always predicts zero under a population with outcome always one, changing training data never changes its loss, so beta is zero. Both population and empirical risks equal one. The generalization gap is exactly zero, as the theorem predicts, while excess over the Bayes risk is one.

To obtain a learning result relative to a good population comparator, combine stability with a valid optimization and regularization comparison or another approximation argument. Stability does not identify the target distribution, remove distribution shift or establish that the chosen loss captures scientific utility. Its value is a controlled algorithm-dependent connection between empirical and population performance under the stated iid experiment.

## Practice exercises

<a id="stability-legacy-1"></a>

### Exercise 1

A ridge-regression theorem with fixed data and norm bounds certifies $\beta\le0.5$ at $\lambda = 0.01$ and $n = 100$. What bound does the same formula certify at $n=400$ with all other constants fixed?

<details><summary>Hint 1</summary>

Track the certified formula with all other constants fixed.

</details>

<details><summary>Hint 2</summary>

This is an upper-bound comparison, not equality of actual stability parameters.

</details>

<details><summary>Full solution</summary>

The theorem's upper bound scales as $1/n$, so quadrupling $n$ quarters that bound and certifies $\beta\le0.125$. This need not equal the algorithm's smallest actual stability parameter.

</details>

<a id="stability-legacy-2"></a>

### Exercise 2

Explain why stability-based generalization can be tighter than VC-based generalization for kernel methods with large feature spaces.

<details><summary>Hint 1</summary>

Compare a full function class with the algorithm selected by its penalty.

</details>

<details><summary>Hint 2</summary>

State convexity, Lipschitz and boundedness assumptions before invoking stability.

</details>

<details><summary>Full solution</summary>

VC dimension for a large kernel class can be infinite or very large, making its VC bound vacuous. For convex Lipschitz losses with a strongly convex RKHS penalty and the required boundedness assumptions, regularized empirical risk minimization has a stability bound controlled by the penalty and sample size. This algorithm-dependent result can be meaningful even when a worst-case class bound is not.

</details>

<a id="stability-legacy-3"></a>

### Exercise 3

Give an example where an algorithm is stable but the hypothesis class has infinite VC dimension.

<details><summary>Hint 1</summary>

An algorithm may ignore every data-dependent choice in a rich class.

</details>

<details><summary>Hint 2</summary>

A constant output has zero replacement sensitivity.

</details>

<details><summary>Full solution</summary>

Let $H$ be the class of all functions from $\mathbb{R}$ to $\{0, 1\}$. This class has infinite VC dimension. Consider the algorithm that ignores the data and always outputs the constant-zero function. Changing one training point does not change the output, so the algorithm is perfectly stable ($\beta = 0$). Yet the class itself is maximally complex. This shows that stability is a property of the algorithm, not the class.

</details>

<a id="stability-ex-4"></a>

### Exercise 4

Prove the expected-gap identity using an independent replacement observation.

<details><summary>Hint 1</summary>

The replaced predictor is independent of the original row.

</details>

<details><summary>Hint 2</summary>

Its sample law agrees with the original training law.

</details>

<details><summary>Full solution</summary>

For each position i, the expected loss of A trained with an independent replacement, evaluated at the original row, equals expected population risk. Subtract its original fitted loss on that row and average. The replacement-stability inequality bounds each difference in absolute value by beta, proving the absolute expected-gap bound.

</details>

<a id="stability-ex-5"></a>

### Exercise 5

Why does a zero stability parameter not imply zero expected absolute generalization gap?

<details><summary>Hint 1</summary>

Distinguish absolute expected value from expected absolute value.

</details>

<details><summary>Hint 2</summary>

Use a fixed predictor with randomly varying assessment loss.

</details>

<details><summary>Full solution</summary>

A fixed predictor has beta zero and expected signed gap zero. With a Bernoulli loss of nonzero variance its empirical mean is random, so the absolute gap is positive with positive probability. Thus its expected absolute gap is positive. The theorem bounds the absolute value of the expectation, and the concentration theorem handles realized deviations.

</details>

<a id="stability-ex-6"></a>

### Exercise 6

Derive the approximate-optimizer stability allowance.

<details><summary>Hint 1</summary>

Strong convexity bounds distance to the exact minimum.

</details>

<details><summary>Hint 2</summary>

Use two such distances and the exact neighbor comparison.

</details>

<details><summary>Full solution</summary>

Each approximate output is within $\sqrt{2\eta/\lambda}$ of its exact minimum. Neighboring approximate outputs are therefore within $2L/(\lambda n)+2\sqrt{2\eta/\lambda}$. Multiplying by the loss Lipschitz constant gives the displayed allowance. A numerical residual must first imply an objective gap before this argument applies.

</details>

<a id="stability-ex-7"></a>

### Exercise 7

Explain why choosing a penalty parameter from training can invalidate the fixed-parameter stability proof.

<details><summary>Hint 1</summary>

The two neighboring objectives may use different penalties.

</details>

<details><summary>Hint 2</summary>

The cancellation step then has an extra term.

</details>

<details><summary>Full solution</summary>

Fixed-parameter stability compares two objectives sharing their penalty and feasible set. If the selected penalty changes with one row, the penalty terms no longer cancel. Separate stability bounds at each possible parameter do not bound the difference between fits using different parameters. The selection rule needs its own sensitivity or simultaneous argument.

</details>

<a id="stability-ex-8"></a>

### Exercise 8

Prove the ridge coefficient-norm bound obtained by comparison with zero.

<details><summary>Hint 1</summary>

The minimized objective cannot exceed its value at zero.

</details>

<details><summary>Hint 2</summary>

Discard its nonnegative loss term.

</details>

<details><summary>Full solution</summary>

For penalty $\lambda\|w\|^2$ and bounded outcomes, $\lambda\|\widehat w\|^2\le n^{-1}\sum_i(y_i-\widehat w^\top x_i)^2+\lambda\|\widehat w\|^2\le n^{-1}\sum_i y_i^2\le Y^2$. Hence $\|\widehat w\|\le Y/\sqrt\lambda$. The bound depends on lambda and holds for every sample satisfying the outcome bound.

</details>

<a id="stability-ex-9"></a>

### Exercise 9

Construct a perfectly stable algorithm with maximal population error under binary loss.

<details><summary>Hint 1</summary>

Let the algorithm ignore its data.

</details>

<details><summary>Hint 2</summary>

Choose a population whose label opposes its constant prediction.

</details>

<details><summary>Full solution</summary>

Always return the constant-zero rule and let Y always equal one. Loss on every observation is one, independent of training, so replacement stability is zero and the generalization gap is zero. The risk is one while Bayes risk is zero. This disproves any assertion that stability alone guarantees a good comparator risk.

</details>

<a id="stability-ex-10"></a>

### Exercise 10

Why is bounded input norm alone insufficient for the stated squared-loss stability theorem with unbounded outcomes?

<details><summary>Hint 1</summary>

The square-loss derivative depends on outcome magnitude.

</details>

<details><summary>Hint 2</summary>

A uniform test-point loss bound must cover every permitted outcome.

</details>

<details><summary>Full solution</summary>

The difference of two squared losses contains the factor of twice the outcome minus the two predictions. Without an outcome bound or another explicit restriction, its magnitude can be arbitrarily large even for a small prediction change. The finite uniform Lipschitz constant used by the theorem is then unavailable. A weaker expected or tail-controlled stability result would be a separate theorem.

</details>

## Looking backward and forward

This chapter complemented the class-based bounds of "VC Dimension" and "Rademacher Complexity" with an algorithm-based perspective. The next chapter, "Regularization and Model Selection," moves from theory to practice: how do we choose the regularization parameter, and how do we estimate generalization performance reliably?
