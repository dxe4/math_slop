
# Minimax Lower Bounds: Le Cam, Fano and Noisy Labels

An upper bound proves what one method can achieve. A minimax lower bound proves that every method faces a certain difficulty somewhere in a declared experiment. This chapter derives two-point testing, Fano packing and a noisy-label hypercube lower bound. Each argument states its loss, probability laws and parameter geometry before claiming a rate.

Preparation is relative entropy, total variation, finite conditional entropy, iid product laws and the distinction between absolute and excess learning risk. The elementary information inequalities are proved here or reduced explicitly to the binary curvature inequality in the PAC-Bayes chapter. No computational hardness claim is inferred from a statistical testing bound.

## Minimax risk and testing experiments

Let the parameter theta index observation laws P theta and a target in a metric space. For an estimator, expected loss is averaged under its actual observation law and any independent algorithmic seed. Minimax risk takes the infimum over all such procedures of their largest risk over the specified parameter set.

A finite subset of parameters already gives a valid lower bound for a larger set, since a supremum over the larger set is no smaller. The estimator is not required to lie in that subset. We turn it into a test by selecting a nearest candidate, and parameter separation makes a wrong test imply an estimation error. This reduction lets elementary testing difficulty obstruct even highly sophisticated estimation algorithms.

For two dominated observation laws, let a test event A mean deciding for the second. Its sum of error probabilities is one minus the difference between the second and first law's probability of A. Maximizing that difference gives total variation. Choosing the region where the second density exceeds the first attains it, so the minimum sum of testing errors is exactly one minus total variation. Randomization cannot improve the minimum because at each observation its error contribution is linear in the decision probability.

## Le Cam's two-point reduction

Take two target points separated by distance Delta and decode an arbitrary estimate to its nearer target. If the decoded target is wrong, the estimate must be at distance at least Delta divided by two from the true target; otherwise the triangle inequality would make it strictly nearer the true point.

Average over the two targets and apply the testing result. The larger of their expected metric losses is at least
$$\frac{\Delta}{4}\{1-\operatorname{TV}(P_0,P_1)\}.$$
For squared metric loss, the corresponding bound is
$$\frac{\Delta^2}{8}\{1-\operatorname{TV}(P_0,P_1)\}.$$
Likewise the larger probability of metric error at least Delta over two is at least half of one minus total variation. These are finite-sample inequalities. They become rate statements only after a separated pair and its observation distance have actually been calculated.

## Entropy controls testing distance

For laws with finite relative entropy, group the likelihood densities according to the region where the first exceeds the second. The log-sum inequality contracts divergence to the two grouped masses. Binary divergence is at least twice their squared difference by the curvature proof in the preceding PAC-Bayes chapter. That mass difference equals total variation, so
$$\operatorname{TV}(P,Q)\le\sqrt{\operatorname{KL}(P\|Q)/2}.$$
A support violation makes the entropy infinite and this bound uninformative rather than false.

For iid product laws, log likelihood ratios add over observations and expectation gives product divergence equal to n times one-observation divergence. Dependence between rows can change this calculation entirely. Multiplying a one-row entropy by a stored row count without a product-law assumption is not a lower-bound derivation.

### Worked example: the normal mean has an inverse-n squared-risk obstruction

Observe n independent normal variables with unknown mean and known positive variance sigma squared. Compare means plus and minus sigma divided by twice square root n. Their separation is sigma divided by square root n. Expanding the Gaussian log density ratio and taking expectation gives product divergence one half. Pinsker therefore bounds total variation by one half.

The two-point squared-loss bound is at least sigma squared divided by sixteen n. The sample mean has risk sigma squared divided by n for every mean, by independence and the variance-of-an-average formula. Thus this experiment has matching inverse-n minimax order, though the two constants differ. The lower bound is not an assertion that the sample mean's exact risk is one sixteenth of its variance.

## Fano's finite-index argument

Let J be uniform on M candidate parameters, with M at least two, and let the observed data have the corresponding law. For any index decoder define E as its error indicator. Conditional on the data and on E equal to zero, the index is known. Conditional on error, at most M minus one indices remain. The conditional-entropy chain rule consequently gives
$$H(J\mid S)\le\log2+P(E=1)\log M.$$
This uses a finite index, even if observations have continuous densities; no differential entropy is substituted for this conditional entropy.

Since H of J is log M, the mutual-information identity yields
$$P(E=1)\ge1-\frac{I(J;S)+\log2}{\log M}.$$
An independent algorithmic seed can be included in S without increasing its information about J. Thus the result covers randomized decoders too.

Write the mixture observation law as the average of the M candidate laws. Mutual information equals the average divergence of each law from that mixture. For any other reference law Q dominating the candidates, expansion of the logarithms gives
$$\frac1M\sum_j\operatorname{KL}(P_j\|Q)
=I(J;S)+\operatorname{KL}(\overline P\|Q).$$
The mixture term is nonnegative, so the reference average is an upper bound on information. This exact identity often avoids computing the mixture density. Q need not correspond to one of the packing parameters, but its divergence must actually be controlled.

## Packing turns Fano into a loss bound

Suppose every pair of parameter targets is at distance at least twice s. Decode any estimate to a nearest packing point. If estimation error is strictly below s, that point is uniquely correct, so decoder error implies estimation error at least s. Combining with Fano bounds the average error probability, hence the worst error probability, below by the displayed expression.

For squared metric loss, multiply that positive probability bound by s squared. If the Fano expression is negative, it supplies only a trivial lower bound and should be replaced by zero. A very small packing, especially two candidates, often makes the log-two allowance too large; the two-point total-variation theorem can then be better. The two methods are complementary rather than interchangeable formulas.

### Worked example: locating one nonzero Gaussian coordinate

Observe a p-dimensional normal vector of mean theta and covariance sigma squared over n times identity. Take p candidate means a times each coordinate basis vector and reference mean zero, with p at least sixteen. Their pairwise separation is square root two times a. Each reference divergence is n a squared divided by twice sigma squared, by the same Gaussian density calculation.

Choose a squared equal to sigma squared times log p divided by twice n. The information allowance is then one quarter log p, and log two divided by log p is at most one quarter. Fano gives decoder error at least one half. Use s equal to a divided by square root two to obtain worst squared estimation risk at least sigma squared log p divided by eight n on this finite packing.

This establishes a logarithmic difficulty for identifying an unknown active coordinate at that amplitude. It does not by itself prove a matching upper bound for every unbounded sparse-mean class, or justify substituting raw feature count for a packing calculation in another model.

## A noisy-label hypercube gives a learning lower bound

Now use a classification experiment rather than Gaussian estimation. Let X be uniform over d inputs. For each sign vector omega, let its conditional label-one probability at input j be one half times one plus h times omega j, where h lies between zero and one half. The Bayes label is omega j, and Bayes risk is $(1-h)/2$. The class containing all binary assignments on these inputs has VC dimension d.

For any learned classifier, excess risk equals h divided by d times the number of coordinates where its label differs from the Bayes label. Average over a uniformly random sign vector as a proof device. For a fixed coordinate and fixed other signs, comparing its two possible signs is a two-point testing problem.

The one-observation divergence between adjacent sign models is
$$\frac h d\log\frac{1+h}{1-h}\le\frac{4h^2}{d}.$$
Only observations at that coordinate contribute; their input probability is one over d. The inequality follows from log ratio at most twice h divided by one minus h, bounded by four h for h at most one half. Product divergence is at most four n h squared over d, so total variation is at most the square root of two n h squared over d.

Choose
$$h=\min\{1/2,\sqrt{d/(8n)}\}.$$
In either branch this variation bound is at most one half. For the two adjacent models, the sum of error probabilities about that coordinate is at least one half. Averaging the pair therefore makes the bit error at least one quarter. Average again over all fixed settings of the other signs and sum coordinates. The worst expected classification excess is at least
$$\frac14\min\{1/2,\sqrt{d/(8n)}\}.$$
This proves a dimension-sensitive agnostic excess-risk obstruction directly, with all observation laws specified. The argument is often called a hypercube or Assouad-style reduction; the full coordinate-pair proof has been supplied rather than used as a name in place of reasoning.

### Worked example: noise changes the relevant learning scale

When n is large relative to d, the noisy hypercube lower bound is proportional to square root d over n. In contrast, the realizable rare-label construction gave a constant-confidence sample requirement of order d divided by desired absolute error. There is no contradiction. The hypercube has irreducible label noise and measures excess over its Bayes risk; the realizable theorem assumed a zero-risk member.

A class dimension alone therefore does not select a rate without naming noise, loss and the comparison target. Even the difference between absolute risk and excess risk is material: the Bayes risk here can be close to one half while excess becomes small.

## What a minimax statement does and does not establish

The average-target arguments above are proof devices for a worst-case frequentist conclusion. They do not require a learner to adopt that averaging distribution as a Bayesian prior. They also do not establish that a particular applied dataset lies near the difficult parameters. A minimax rate describes the hardest members of the stated set.

An upper and lower rate match only when the observation model, parameter set, loss and probability or expectation criterion match. A Gaussian squared-loss lower bound cannot be paired with a binary classification upper bound and called optimality. An expected-risk obstruction does not automatically give a chosen-confidence obstruction without a bounded-loss or other conversion, as the no-free-lunch chapter demonstrated.

Finally, these lower bounds permit every measurable algorithm, irrespective of computation time. They are information limitations, not reductions from a computational hardness assumption. A method could be statistically possible yet computationally difficult; establishing that separate claim needs an appropriate computational model and argument.

## Processing observations cannot create testing information

Suppose a statistic or randomized channel transforms the original observations before a learner sees them. For any output event, its conditional probability given the original observation is a function between zero and one. The bounded-function total-variation comparison therefore shows that the output-law variation is no larger than the original variation. Thus processing cannot make two hypotheses easier to distinguish than access to the full observation.

In a finite experiment, log-sum similarly proves relative-entropy contraction under a channel. An invertible measurable representation has equality in both directions because one can process forward and then recover the original observation. Reexpressing measurements in equivalent coordinates does not create a new statistical experiment, provided the parameter target and loss are transformed consistently.

Duplicating one observation n times is another exact example. The duplicated vector is a deterministic function of that observation, and the original is recovered by selecting its first coordinate. Both processing inequalities give equality of its divergence with the one-observation divergence, rather than n times that value. The iid product formula applies to independent new observations, not to copied coordinates.

These facts explain why preprocessing can improve computational conditioning while leaving an information lower bound intact. Discarding information can make the statistical problem harder, and some reductions intentionally do so to prove a lower bound. Neither a more convenient array shape nor a longer file changes the amount of hypothesis information without a change in the actual observation law.

## Exercises

<a id="minimax-lower-bounds-fano-le-cam-ex-1"></a>

### Exercise 1

Prove the minimum sum of two testing errors equals one minus total variation.

<details><summary>Hint 1</summary>

Write the sum for a test event A.

</details>

<details><summary>Hint 2</summary>

Maximize the difference of its probabilities.

</details>

<details><summary>Full solution</summary>

The sum is one minus P one of A plus P zero of A, equivalently one minus their probability difference. Its minimum is one minus the largest such difference, total variation, attained by a likelihood-ratio comparison region. Randomized decisions cannot improve the pointwise linear minimum.

</details>

<a id="minimax-lower-bounds-fano-le-cam-ex-2"></a>

### Exercise 2

Explain the nearest-target estimation-to-testing implication.

<details><summary>Hint 1</summary>

Use target separation and the triangle inequality.

</details>

<details><summary>Hint 2</summary>

An estimate closer than half the separation cannot be nearest the wrong target.

</details>

<details><summary>Full solution</summary>

If its distance to the true point is below Delta over two, its distance to the other exceeds Delta over two, so decoding is correct. Thus a wrong decoding implies error at least Delta over two, giving the probability and expected-loss factors after averaging.

</details>

<a id="minimax-lower-bounds-fano-le-cam-ex-3"></a>

### Exercise 3

Derive the normal one-observation divergence for equal known variances.

<details><summary>Hint 1</summary>

Expand the squared terms in the log density ratio.

</details>

<details><summary>Hint 2</summary>

Take expectation under the first mean.

</details>

<details><summary>Full solution</summary>

The expectation is $(\theta_0-\theta_1)^2/(2\sigma^2)$ because the centered linear term vanishes. Independence multiplies it by n. This calculation needs equal positive known variance in the stated normal model.

</details>

<a id="minimax-lower-bounds-fano-le-cam-ex-4"></a>

### Exercise 4

Why does Fano use ordinary finite conditional entropy even for continuous data?

<details><summary>Hint 1</summary>

The unknown index has M discrete values.

</details>

<details><summary>Hint 2</summary>

Conditioning on continuous observations still gives a probability vector over that index.

</details>

<details><summary>Full solution</summary>

Entropy is taken over the finite index posterior given the observation, then averaged over observations. No differential entropy of the observation is required in the chain-rule proof. Replacing it by a differential-entropy expression without justification would change the argument.

</details>

<a id="minimax-lower-bounds-fano-le-cam-ex-5"></a>

### Exercise 5

Prove the reference-divergence decomposition.

<details><summary>Hint 1</summary>

Insert the mixture density between each candidate and Q.

</details>

<details><summary>Hint 2</summary>

Average the term depending only on the mixture.

</details>

<details><summary>Full solution</summary>

The log ratio splits into candidate over mixture plus mixture over Q. The first average is mutual information; averaging the second under candidate laws equals its expectation under the mixture, namely mixture divergence from Q. Nonnegativity gives the information upper bound.

</details>

<a id="minimax-lower-bounds-fano-le-cam-ex-6"></a>

### Exercise 6

State the squared-loss consequence of a packing separation twice s.

<details><summary>Hint 1</summary>

Wrong nearest-index decoding forces error at least s.

</details>

<details><summary>Hint 2</summary>

Multiply Fano’s positive error lower bound by s squared.

</details>

<details><summary>Full solution</summary>

The worst expected squared metric error is at least $s^2[1-(I+\log2)/\log M]_+$. A matching upper result requires the same experiment and parameter set; this formula alone is not an optimality proof.

</details>

<a id="minimax-lower-bounds-fano-le-cam-ex-7"></a>

### Exercise 7

Compute the adjacent-model divergence in the noisy classification cube.

<details><summary>Hint 1</summary>

Inputs have the same uniform law.

</details>

<details><summary>Hint 2</summary>

Only one conditional Bernoulli distribution changes.

</details>

<details><summary>Full solution</summary>

The changing coordinate has probability $1/d$. Its Bernoulli divergence is $h\log((1+h)/(1-h))$. For $h\le1/2$ the logarithm is at most four h, giving at most $4h^2/d$ per observation.

</details>

<a id="minimax-lower-bounds-fano-le-cam-ex-8"></a>

### Exercise 8

Explain how pairwise bit testing yields the hypercube excess-risk lower bound.

<details><summary>Hint 1</summary>

Average each adjacent pair over its two signs.

</details>

<details><summary>Hint 2</summary>

Every wrong Bayes bit costs h divided by d.

</details>

<details><summary>Full solution</summary>

Each pair has total variation at most one half, so its average bit error is at least one quarter. Averaging other signs preserves this bound for every coordinate. Summing d coordinates and multiplying by h over d gives h divided by four.

</details>

<a id="minimax-lower-bounds-fano-le-cam-ex-9"></a>

### Exercise 9

Does a minimax lower bound show a given fitted predictor has large risk at every parameter?

<details><summary>Hint 1</summary>

The supremum selects a difficult parameter.

</details>

<details><summary>Hint 2</summary>

The difficult parameter can depend on the procedure.

</details>

<details><summary>Full solution</summary>

No. The conclusion is that every procedure has some parameter in the specified set with at least the stated risk. It does not say the procedure fails everywhere or that a particular applied population is that worst case. The order of the infimum and supremum matters.

</details>

<a id="minimax-lower-bounds-fano-le-cam-ex-10"></a>

### Exercise 10

Why are the lower bounds here not computational hardness results?

<details><summary>Hint 1</summary>

The procedures were unrestricted measurable maps.

</details>

<details><summary>Hint 2</summary>

No resource budget or reduction was imposed.

</details>

<details><summary>Full solution</summary>

They rule out statistical accuracy even with unlimited computation in the named experiments. Computational lower bounds instead restrict algorithms by a resource model and usually need reductions or explicit assumptions. A statistical testing obstruction cannot be relabelled as that separate claim.

</details>
