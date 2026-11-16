
# Random Features

## A random finite kernel with a stated target

Random features approximate an integral representation of a kernel by an empirical average. They give a finite feature map and a probability distribution over approximation errors. That randomisation is computational, not automatically a prior over the unknown target function or an integration over GP hyperparameters. Once features are drawn, ridge or Gaussian calculations using them are exact for that finite kernel, while approximation to the intended original kernel remains another question.

Consider a real stationary normalised kernel represented as
$$
k(x,z)=\int\cos(\omega^T(x-z))\,\rho(d\omega)
$$
for a probability measure rho. This representation itself proves positive semidefiniteness through sine and cosine features. Bochner's theorem supplies a converse under its continuous positive-definite stationary hypotheses; that harmonic-analysis theorem is named as an additional result, not proved or needed for our constructive examples. We use the representation explicitly when deriving bounds.

For the Gaussian kernel, choose centred Gaussian frequencies with covariance $h^{-2}I$. Their characteristic function is exponential minus squared input difference divided by twice h squared, giving the required representation directly from the normal characteristic function. An output variance scale can multiply the kernel and all error bounds accordingly; formulas below use unit diagonal.

## Paired features and exact positive semidefiniteness

**Definition 12.1 (Paired random features).** Draw m independent frequencies from rho and use the 2m-dimensional feature vector containing cosine and sine at each frequency, all divided by square root m. Its inner product is
$$
k_m(x,z)=\frac1m\sum_{j=1}^m\cos(\omega_j^T(x-z)).
$$
Every realization is a positive-semidefinite kernel because it is a finite feature inner product. Its diagonal is exactly one, not merely correct in expectation. Its expected cross value is the target kernel. This construction avoids confusing entrywise unbiasedness with exact recovery: a finite draw usually has nonzero covariance error.

Random-phase cosine features are another valid representation with a separate normalisation and range bound. The constants proved here belong to the paired construction. Transferring a concentration constant to a different feature convention without rechecking the summand range can give a false guarantee.

An m-frequency draw has rank at most 2m on any finite design. Thus a training Gram with more rows can be singular even when the intended Gaussian kernel is strictly positive definite. Positive observation noise makes its shifted solve valid, but does not remove its finite-feature approximation or imply equality of its posterior uncertainty with the original GP.

## A full fixed-design concentration bound

**Theorem 12.2 (Fixed-design feature concentration).** For the independent paired-frequency construction, the following pairwise and finite-design error bounds hold. For a fixed input pair, each cosine summand lies between minus one and one and has mean k. Hoeffding's exponential bound for independent bounded variables gives
$$
P\{|k_m(x,z)-k(x,z)|>\epsilon\}\le2e^{-m\epsilon^2/2}.
$$
The range width is two, giving the displayed constant. A short proof uses the bounded-range exponential-moment lemma: each centred summand has moment-generating function at most exponential lambda squared over two, then independence and exponential Markov optimize the upper tail; repeat for the lower tail.

For N fixed inputs, union over at most N squared pairs gives probability at most $2N^2e^{-m\epsilon^2/2}$ that any entry error exceeds epsilon. Therefore $m\ge2\epsilon^{-2}\log(2N^2/\delta)$ suffices for entrywise error at most epsilon simultaneously with probability at least one minus delta.

The inputs can be random but independent of the features: condition on them, apply the same bound, then average. If a query is adaptively chosen after inspecting the feature draw, that simple fixed-input conditioning argument is not valid for the chosen query. A uniform-domain event, proved next under more assumptions, can cover such choices inside its domain.

## A scoped compact-domain uniform bound

**Theorem 12.3 (Compact-domain feature concentration).** Assume the input set is compact inside a Euclidean ball of radius R and the frequency first moment is at most M finite and positive. The difference set of inputs lies inside radius two R. The empirical stationary covariance as a function of difference has Lipschitz constant at most the empirical mean of frequency norms, since cosine is one-Lipschitz. The exact covariance has Lipschitz constant at most M by integration.

Markov inequality makes the empirical mean norm at most $L=2M/\delta$ except on an event of probability delta over two. Choose a deterministic r-net of the compact difference set, with $r=\epsilon/[2(L+M)]$. A Euclidean packing argument supplies a net of size at most $N_r=(1+4R/r)^d$: disjoint balls of radius r over two around a maximal separated set fit inside the enlarged ball. Restricting to the compact set gives a finite cover.

On the bounded-Lipschitz event, deviation at a difference point is at most its nearest net deviation plus $(L+M)r$. The latter is epsilon over two. A union bound for net deviations larger than epsilon over two contributes at most $2N_re^{-m\epsilon^2/8}$. Combining events gives uniform error at most epsilon with probability at least one minus delta whenever
$$
m\ge\frac8{\epsilon^2}\log\frac{4N_r}{\delta}.
$$
This is a complete sufficient bound, intentionally loose because of the Markov control of frequencies. For Gaussian frequencies take M equal to square root d divided by h, using Cauchy-Schwarz on their second moment. If frequency norm is zero almost surely, the kernel is constant and the approximation is exact, so the positive-M formulas are unnecessary.

The uniform event is measurable because the continuous deviation on a compact metric set has supremum equal to its supremum on a countable dense subset. Compactness, a finite frequency moment and independence all have explicit roles. An arbitrary unbounded domain or a spectral law without that first moment does not inherit this argument unchanged.

## Worked example 1: one frequency is a structured low-rank prior

**Example 12.4 (one frequency is a structured low-rank prior).** In one dimension with one nonzero frequency w, the paired-feature kernel is cosine of w times input difference. At inputs zero and pi over w the two feature vectors are opposites, so their covariance is minus one and their joint two-point Gram is singular. It is nevertheless positive semidefinite as a feature Gram.

A Gaussian process with this kernel is a random sine-cosine combination with only two coefficients. It is exactly periodic. The intended Gaussian kernel is not periodic and correlates those separated inputs differently. One random frequency therefore changes both rank and extrapolation structure. Increasing the number of features improves an approximation under the proved probability events; a finite sample is not the original infinite spectral mixture.

## Worked example 2: a fixed finite-design certificate

**Example 12.5 (a fixed finite-design certificate).** For N training and query inputs selected before the features, the displayed choice $2\epsilon^{-2}\log(2N^2/\delta)$ of frequency count controls all their pairwise kernel errors. The same event controls both training blocks and every chosen query cross vector. It does not control inputs outside that selected list unless a uniform theorem is used.

The approximate Gram matrix remains positive semidefinite on the event and outside it alike. Concentration bounds accuracy, while the feature construction guarantees validity. These two conclusions should be reported separately: a low-probability large approximation error need not produce an invalid covariance, and a valid covariance need not be close enough for a sensitive posterior solve.

## From entrywise kernel error to a solve error

Suppose every entry of an n-point training Gram error is at most epsilon. Its spectral norm is at most n epsilon, since its largest absolute row sum bounds the norm of a symmetric matrix. With independent noise variance v positive, both exact and approximate observation covariances have inverse norm at most one over v, because both kernels are positive semidefinite.

The resolvent identity then gives inverse difference norm at most $n\epsilon/v^2$, with no small-perturbation assumption needed for this coarse bound. For a fixed query included in the entrywise event, its cross-vector error is at most square root n times epsilon. Splitting the two predicted means into a cross-vector change and an inverse-system change yields
$$
|\mu_m-\mu|\le\frac{\sqrt n\epsilon\|y\|}{v}
+\frac{\|k_*\|n\epsilon\|y\|}{v^2}
$$
for zero prior mean and unchanged noise. This is a proved sufficient absolute-error bound, not a universal optimal rate. Small noise amplifies approximation errors; a kernel tolerance chosen without the downstream solve scale can be misleading.

A variance bound also requires test-diagonal and cross-vector control. Paired features preserve the diagonal exactly in this normalised stationary construction, which removes one error term. Other random-feature schemes or nonstationary constructions may not. The numerical chapter supplies the remaining resolvent and quadratic-form tools for a stated approximation.

## Worked example 3: more data than features and positive noise

**Example 12.6 (more data than features and positive noise).** Let n exceed 2m and use the paired feature matrix Phi on the training inputs. Its Gram Phi Phi transpose has rank at most 2m and cannot be invertible. But the noisy observation covariance Phi Phi transpose plus v identity is positive definite. A feature-space solve of dimension 2m can compute its mean exactly under this finite model.

The smaller solve is a computational advantage when the feature dimension is appropriate. It does not prove that adding arbitrarily many data to a fixed small feature family learns the same function as the original kernel. Directions outside the feature span remain unavailable to the finite model, just as affine features could not fit the bump example in Chapter 4. A statistical sample-size limit and a feature-count approximation limit are different asymptotic choices.

For a fixed countable collection of input pairs, the strong law gives simultaneous almost-sure kernel convergence by intersecting countably many events. That conclusion does not itself give a uniform rate on an uncountable domain or justify an adversarial moving query. The compact-net proof supplies a different, explicitly uniform statement under its stronger assumptions.

## Feature regression and feature priors

Ridge regression in the sampled feature space minimizes a finite coefficient penalty and yields the corresponding kernel ridge function. Giving those coefficients an independent unit Gaussian prior and adding Gaussian noise yields a finite-rank GP whose kernel is k m. Conditional on the feature draw, its posterior formulas are exact for that sampled covariance model.

Averaging predictions across independent feature draws is another procedure. If the frequencies are treated only as a computational approximation, their between-draw variation measures sensitivity to that approximation. If they are treated as latent model variables with a prior, a coherent posterior generally updates their weights using evidence rather than averaging them uniformly after observing data. Computational randomisation and Bayesian model integration must therefore not be conflated.

The covariance expectation over feature draws equals the intended kernel, but the expectation of an inverse observation covariance is not generally the inverse of the expected covariance. Thus averaging finite-feature posterior means or variances need not recover the exact GP posterior at finite feature count. Unbiased kernel entries do not make nonlinear downstream inference unbiased.

## Choosing the approximation target

A fixed-design error event, a compact-domain uniform bound, a mean-prediction certificate and a risk bound are different statements. The first three were proved here under their own hypotheses. A generalization theorem for predictors learned with random features additionally involves the data distribution, feature sampling and regularisation, and belongs with the statistical-learning analysis.

The next chapter uses kernels to represent whole probability distributions by mean elements. Random features can then approximate those embeddings too, but a finite feature map may fail to distinguish distributions that the original kernel separates. Validity, approximation and identification of probability laws will again require separate arguments.

## Exercises

<a id="random-features-ex-1"></a>

### Exercise 1

Prove positive semidefiniteness of every paired-feature draw.

<details><summary>Hint 1</summary>

Write its feature vector of cosines and sines.

</details>

<details><summary>Hint 2</summary>

Collect its Gram form into a squared norm.

</details>

<details><summary>Full solution</summary>

Each sampled frequency contributes two coordinates scaled by reciprocal square root m. Their inner product is the average cosine of the frequency times the input difference. Any coefficient-weighted Gram sum is the squared norm of the corresponding feature sum. Thus validity holds for every realization, regardless of its approximation accuracy.

</details>

<a id="random-features-ex-2"></a>

### Exercise 2

Why is the paired-feature diagonal exactly one?

<details><summary>Hint 1</summary>

At equal inputs each cosine difference is one.

</details>

<details><summary>Hint 2</summary>

Or use the sine-cosine squared identity.

</details>

<details><summary>Full solution</summary>

Every summand in the averaged diagonal equals cosine zero, one. Equivalently each frequency feature pair has squared length one before the common averaging scale. Thus no diagonal Monte Carlo error appears in this construction. A random-phase representation has another normalisation and need not share that exact finite-draw property.

</details>

<a id="random-features-ex-3"></a>

### Exercise 3

Derive the fixed-pair exponent constant.

<details><summary>Hint 1</summary>

The independent cosine summands have range width two.

</details>

<details><summary>Hint 2</summary>

Apply the bounded-range exponential lemma.

</details>

<details><summary>Full solution</summary>

The centred moment-generating function is at most exponential lambda squared over two for each summand. Independence gives the corresponding bound for their mean, and exponential Markov optimised in lambda yields upper tail exponential minus m epsilon squared over two. Adding the same lower-tail bound gives the leading factor two. A different summand range changes that constant.

</details>

<a id="random-features-ex-4"></a>

### Exercise 4

How many pair events are used in the finite-design union bound?

<details><summary>Hint 1</summary>

There are at most N squared ordered pairs.

</details>

<details><summary>Hint 2</summary>

No independence between those pair events is required.

</details>

<details><summary>Full solution</summary>

Each pair has the same sufficient probability bound, and summing over at most N squared events bounds their union. The kernel values share frequencies and their errors are dependent, but a union bound does not require independent events. The result controls the predetermined training and query list simultaneously.

</details>

<a id="random-features-ex-5"></a>

### Exercise 5

Where is the frequency first-moment assumption used in the compact-domain proof?

<details><summary>Hint 1</summary>

Bound exact and empirical Lipschitz constants.

</details>

<details><summary>Hint 2</summary>

Control the empirical mean norm by Markov inequality.

</details>

<details><summary>Full solution</summary>

It gives a finite deterministic Lipschitz bound for the target and a probabilistic bound for the sampled kernel. Those bounds transfer deviations from a finite net to the whole compact difference set. Without the moment assumption, this particular net interpolation argument lacks its Lipschitz control even if every fixed pair still has bounded cosine summands.

</details>

<a id="random-features-ex-6"></a>

### Exercise 6

Why does a fixed-design theorem not automatically cover an adaptively chosen query?

<details><summary>Hint 1</summary>

The query can depend on the same sampled frequencies.

</details>

<details><summary>Hint 2</summary>

Conditioning on it can change their law.

</details>

<details><summary>Full solution</summary>

The proof treated each input pair as fixed independently of the feature randomisation. A query chosen after inspecting the approximation can seek a large-error location, so that conditioning argument fails. A uniform-domain event controls every location in its domain simultaneously and therefore covers such choices there, under its stronger assumptions.

</details>

<a id="random-features-ex-7"></a>

### Exercise 7

Bound the spectral norm of a symmetric n-by-n matrix with entry magnitudes at most epsilon.

<details><summary>Hint 1</summary>

Use its row and column absolute sums.

</details>

<details><summary>Hint 2</summary>

Both are at most n epsilon.

</details>

<details><summary>Full solution</summary>

The operator norm is at most the square root of its maximum column-sum norm times maximum row-sum norm, each bounded by n epsilon. Thus it is at most n epsilon. Symmetry also lets one use its maximal absolute row sum to bound every eigenvalue. This converts the entrywise event to a coarse matrix perturbation bound.

</details>

<a id="random-features-ex-8"></a>

### Exercise 8

Why does positive observation noise allow an inverse perturbation bound without assuming n epsilon is tiny?

<details><summary>Hint 1</summary>

Both Gram matrices are positive semidefinite.

</details>

<details><summary>Hint 2</summary>

Each shifted inverse has norm at most one over v.

</details>

<details><summary>Full solution</summary>

The resolvent identity multiplies the two inverse norms and the matrix error norm. Since both shifted covariances remain positive definite by construction, those norms are bounded independently of the error size. This yields n epsilon over v squared. It may be loose but does not require a Neumann smallness condition; preserving kernel positivity is crucial to that simple argument.

</details>

<a id="random-features-ex-9"></a>

### Exercise 9

Does unbiasedness of k m imply unbiasedness of the GP posterior mean using it?

<details><summary>Hint 1</summary>

The posterior contains a matrix inverse.

</details>

<details><summary>Hint 2</summary>

Expectation does not commute with that nonlinear operation.

</details>

<details><summary>Full solution</summary>

No. Although each covariance entry has the correct expectation, the posterior mean depends nonlinearly on the sampled training covariance and also on sampled cross covariances. Averaging finite-feature predictions need not equal the prediction from the expected kernel. A limit or error theorem is needed for that downstream approximation, not entrywise unbiasedness alone.

</details>

<a id="random-features-ex-10"></a>

### Exercise 10

Why can a finite feature embedding fail to distinguish distributions?

<details><summary>Hint 1</summary>

It records only finitely many feature expectations.

</details>

<details><summary>Hint 2</summary>

Distinct laws can share those moments.

</details>

<details><summary>Full solution</summary>

A finite mean feature vector imposes only finitely many expectation constraints. Different probability laws can have the same vector even if the original infinite-feature kernel distinguishes them. The next chapter makes this identification property explicit through characteristic kernels and mean embeddings. Approximation quality for selected functions does not automatically imply equality or separation of every probability law.

</details>
