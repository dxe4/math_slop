
# Conditioning a Gaussian Process

## Preparation and source

This chapter expands [Conditioning a Gaussian Process](../structured-probabilistic-learning/conditioning-a-gaussian-process.md). Its original two-point and one-noisy-observation formulas are retained below, with the observed-block invertibility hypothesis preserved. Preparation is Gaussian finite laws and conditional residual independence. We add sequential updates, linear functionals and a precise deterministic variance interpretation; none of these assigns a flat density to all process paths.

## The joint distribution

**Definition 7.1 (Gaussian regression model).** Assume a zero-mean GP prior $f \sim \mathcal{GP}(0, k)$ for simplicity; a nonzero mean is handled by subtracting it and adding it back. Let $X = (x_{1}, \dots, x_{n})$ be training inputs and let $y = (y_{1}, \dots, y_{n})^{T}$ be observed outputs. Assume independent Gaussian observation noise:

$$y_{i} = f(x_{i}) + \varepsilon_{i}, \quad \varepsilon_{i} \sim \mathcal{N}(0, \sigma^{2}),$$

with the $\varepsilon_{i}$ independent of each other and of $f$. Let $f_{X} = (f(x_{1}), \dots, f(x_{n}))^{T}$. The joint distribution of $(y, f_{*})$ at a test input $x_{*}$ is

$$\begin{bmatrix} y \\ f_{*} \end{bmatrix} \sim \mathcal{N}\!\left(0, \begin{bmatrix} K + \sigma^{2}I & k_{*} \\ k_{*}^{T} & k_{**} \end{bmatrix}\right),$$

where

- $K_{ij} = k(x_{i}, x_{j})$ is the $n \times n$ training covariance matrix;
- $k_{*} = (k(x_{1}, x_{*}), \dots, k(x_{n}, x_{*}))^{T}$ is the $n \times 1$ cross-covariance vector;
- $k_{**} = k(x_{*}, x_{*})$ is the prior variance at $x_{*}$.

The matrix $K_{y} = K + \sigma^{2}I$ is the covariance of the noisy observations. It is positive definite whenever $K$ is positive semidefinite and $\sigma^{2} > 0$, because adding a positive multiple of the identity shifts all eigenvalues upward. The ordinary-inverse formulas below assume $K_y$ is invertible; noiseless $\sigma^2=0$ remains valid when $K$ is positive definite. For $k(x,z)=1$, $n=2$ and $\sigma^2=0$, $K_y=\begin{pmatrix}1&1\\1&1\end{pmatrix}$ is singular. Nevertheless $f(x)=U$, $U\sim\mathcal N(0,1)$, defines a valid GP whose observation support is $y_1=y_2$. The identity $f_*=y_1=y_2$ gives the natural on-support conditional version: for $y=(1,1)^{\mathsf T}$ it is a point mass at $1$. Data $(1,-1)^{\mathsf T}$ are outside that noiseless model's support. 

## Gaussian conditioning formulas

For a partitioned Gaussian vector

$$\begin{bmatrix} a \\ b \end{bmatrix} \sim \mathcal{N}\!\left(\begin{bmatrix} \mu_{a} \\ \mu_{b} \end{bmatrix}, \begin{bmatrix} \Sigma_{aa} & \Sigma_{ab} \\ \Sigma_{ba} & \Sigma_{bb} \end{bmatrix}\right),$$

if $\Sigma_{aa}$ is invertible (hence positive definite), the conditional distribution is the Gaussian below, whose covariance may be singular. To see this without requiring a nonsingular joint covariance, set $R=b-\mu_b-\Sigma_{ba}\Sigma_{aa}^{-1}(a-\mu_a)$. This centred residual is jointly Gaussian with $a$ and satisfies $\operatorname{Cov}(R,a)=0$, so Gaussian independence gives the conditional mean and covariance below:

$$b \mid a \sim \mathcal{N}(\mu_{b} + \Sigma_{ba}\Sigma_{aa}^{-1}(a - \mu_{a}), \; \Sigma_{bb} - \Sigma_{ba}\Sigma_{aa}^{-1}\Sigma_{ab}).$$

Applying this to the GP joint distribution with $a = y$ and $b = f_{*}$ yields:

**Theorem 7.2 (GP posterior).** Under the model above, with $K_y$ invertible, the posterior distribution of the latent function value at $x_{*}$ is

$$f_{*} \mid X, y, x_{*} \sim \mathcal{N}(\mu_{*}, \sigma_{*}^{2}),$$

where

$$\mu_{*} = k_{*}^{T}(K + \sigma^{2}I)^{-1}y,$$

$$\sigma_{*}^{2} = k_{**} - k_{*}^{T}(K + \sigma^{2}I)^{-1}k_{*}.$$

For a noisy prediction $y_{*} = f_{*} + \varepsilon_{*}$ with $\varepsilon_{*} \sim \mathcal{N}(0, \sigma^{2})$ independent of everything else, add $\sigma^{2}$ to the variance:

$$y_{*} \mid X, y, x_{*} \sim \mathcal{N}(\mu_{*}, \sigma_{*}^{2} + \sigma^{2}).$$

For several test inputs $X_{*} = (x_{*1}, \dots, x_{*m})$, replace $k_{*}$ by the $n \times m$ cross-covariance matrix $K_{*}$ with entries $(K_{*})_{ij} = k(x_{i}, x_{*j})$, and replace $k_{**}$ by the $m \times m$ test covariance matrix $K_{**}$ with entries $(K_{**})_{ij} = k(x_{*i}, x_{*j})$.

## Worked example: two-point conditioning

**Example 7.3 (two-point conditioning).** Consider inputs $x_{1} = 0$ and $x_{2} = 1$ with the kernel $k(x, z) = \exp(-(x-z)^{2}/2)$. The prior covariance matrix is

$$K = \begin{bmatrix} 1 & r \\ r & 1 \end{bmatrix}, \quad r = e^{-1/2} \approx 0.6065.$$

Assume noiseless observations $y_{1} = a$ and $y_{2} = b$. Then $K_{y} = K$. For a test input $x_{*} = 0.5$, we have

$$k_{*} = \begin{bmatrix} k(0, 0.5) \\ k(1, 0.5) \end{bmatrix} = \begin{bmatrix} e^{-1/8} \\ e^{-1/8} \end{bmatrix} \approx \begin{bmatrix} 0.8825 \\ 0.8825 \end{bmatrix}, \quad k_{**} = k(0.5, 0.5) = 1.$$

The inverse of $K$ for $|r| < 1$ is

$$K^{-1} = \frac{1}{1 - r^{2}}\begin{bmatrix} 1 & -r \\ -r & 1 \end{bmatrix}.$$

The posterior mean is

$$\mu_{*} = k_{*}^{T}K^{-1}y = \frac{e^{-1/8}}{1 - r^{2}}\begin{bmatrix} 1 & 1 \end{bmatrix}\begin{bmatrix} 1 & -r \\ -r & 1 \end{bmatrix}\begin{bmatrix} a \\ b \end{bmatrix} = \frac{e^{-1/8}(1 - r)}{1 - r^{2}}(a + b) = \frac{e^{-1/8}}{1 + r}(a + b).$$

With $r = e^{-1/2}$, the coefficient is $e^{-1/8}/(1 + e^{-1/2}) \approx 0.8825 / 1.6065 \approx 0.5493$. If $a = b = 1$, then $\mu_{*} \approx 1.0986$.

The posterior variance is

$$\sigma_{*}^{2} = 1 - k_{*}^{T}K^{-1}k_{*} = 1 - \frac{2e^{-1/4}}{1 + r}.$$

Numerically, $2e^{-1/4} \approx 1.5576$, so $1.5576 / 1.6065 \approx 0.9696$, and $\sigma_{*}^{2} \approx 0.0304$. The observation at the endpoints strongly constrains the function value at the midpoint because the RBF kernel correlates nearby points tightly.

## Worked example: one noisy observation

**Example 7.4 (one noisy observation).** Suppose we observe $y = a$ at $x = 0$ with noise variance $\sigma^{2}$, and we wish to predict at $x_{*} = h$. With the RBF kernel $k(x, z) = \tau^{2}\exp(-(x-z)^{2}/(2\lambda^{2}))$:

$$K_{y} = \tau^{2} + \sigma^{2}, \quad k_{*} = \tau^{2}\exp(-h^{2}/(2\lambda^{2})), \quad k_{**} = \tau^{2}.$$

The posterior mean and variance are

$$\mu_{*} = \frac{\tau^{2}\exp(-h^{2}/(2\lambda^{2}))}{\tau^{2} + \sigma^{2}}a,$$

$$\sigma_{*}^{2} = \tau^{2} - \frac{\tau^{4}\exp(-h^{2}/\lambda^{2})}{\tau^{2} + \sigma^{2}} = \tau^{2}\left(1 - \frac{\tau^{2}\exp(-h^{2}/\lambda^{2})}{\tau^{2} + \sigma^{2}}\right).$$

As $h \to 0$, $\mu_{*} \to \tau^{2}a/(\tau^{2} + \sigma^{2})$, a shrinkage of the observation toward zero by the noise-to-signal ratio. As $h \to \infty$, $\mu_{*} \to 0$, returning to the prior mean. The variance interpolates between $\tau^{2}\sigma^{2}/(\tau^{2} + \sigma^{2})$ at $h = 0$ and $\tau^{2}$ as $h \to \infty$.


## Consistency of the posterior process

For fixed data and hyperparameters, the finite posterior means and covariance blocks come from one formula applied to any test list. Deleting or permuting test coordinates produces exactly the corresponding smaller posterior block. The resulting covariance is positive semidefinite because it is the covariance of the Gaussian residual independent of the observed vector. Thus the finite posterior laws are consistent and define a Gaussian process with updated mean and kernel.

At fixed inputs and hyperparameters the posterior covariance does not depend on the response values. That is a model property, not an omission in the matrix formula. Outliers change the mean; they do not automatically widen the covariance until a different likelihood, hyperparameter procedure or model is specified. A covariance statement conditional on a plug-in hyperparameter is also different from integrating its uncertainty.

## Sequential observation and a monotone covariance theorem

**Proposition 7.5 (Sequential Gaussian update).** Under the stated fixed-parameter independent-noise model, the following update is Gaussian conditioning and decreases every finite covariance block in matrix order. Suppose the current conditional GP has mean m D and kernel k D. Add one new observation at x with independent positive noise variance v. Applying the one-observation Gaussian formula to this already conditioned process gives
$$
m_{D+}(z)=m_D(z)+\frac{k_D(z,x)}{k_D(x,x)+v}(y-m_D(x)),
$$
$$
k_{D+}(z,z')=k_D(z,z')-
\frac{k_D(z,x)k_D(x,z')}{k_D(x,x)+v}.
$$
For every finite test list, the covariance correction is a positive-semidefinite outer product divided by a positive scalar. Thus adding data cannot increase any conditional variance of a fixed linear combination within this model. This proves the matrix-order comparison, not only a diagonal comparison.

Batch and sequential conditioning agree because both are conditional laws of the same joint Gaussian vector and the residual formulas have the same block-elimination identity. Independent noise and fixed hyperparameters are essential to this particular simple update. Refitting the kernel or noise can increase some reported variances by changing the model, without contradicting the theorem.

## Worked example: Brownian interpolation between two values

**Example 7.6 (Brownian interpolation between two values).** Use the retained Brownian kernel and noiseless values two at time one and four at time three. Its observed covariance is $\begin{pmatrix}1&1\\1&3\end{pmatrix}$, which is invertible, and its cross vector to time two is $(1,2)^T$. The inverse is one half times $\begin{pmatrix}3&-1\\-1&1\end{pmatrix}$. The posterior mean at time two is three and its variance one half.

More generally at a time t between one and three the conditional mean is the straight line between the observations and its variance is $(t-1)(3-t)/2$. This follows either by substituting the cross vector $(1,t)^T$ into the same formula or by the independent Brownian bridge representation on that interval. Its endpoints have zero latent variance, while the intervening path remains random. A straight posterior mean does not make the posterior process deterministic between the observations.

## Posterior variance as a regularized projection residual

For a test input z, consider the deterministic quantity
$$
\left\|k_z-\sum_i a_i k_{x_i}\right\|_H^2+\sigma^2\sum_i a_i^2.
$$
Expanding its quadratic form gives k at z's diagonal minus twice a transpose k star plus a transpose the noisy observation covariance times a. That matrix is positive definite, so completing the square minimizes at $a=(K+\sigma^2I)^{-1}k_*$ and gives minimum exactly equal to the GP latent posterior variance.

This is a useful equality between a deterministic Hilbert-space approximation certificate and a model-conditional variance. In the noiseless invertible case it is simply the squared distance of the test section from the training span. The projection interpretation needs no claim that a sampled GP path lies in H. It concerns the sections and their geometry.

For a deterministic unit-H-norm function, the supremum of the squared linear prediction error at coefficients a is the squared norm of that section residual, by Cauchy-Schwarz with equality in its direction when nonzero. Independent observation noise adds its variance to the mean squared error. This explains a worst-case regularised-error connection under the stated unit-ball assumption; it does not turn a Bayesian credible interval into a universal frequentist coverage theorem for every true function.

## Linear functionals instead of point evaluations

A finite weighted sum of function values is jointly Gaussian with the observations. Its prior variance is the kernel quadratic form, and its cross covariance with the training vector is the corresponding weighted sum of cross-kernel vectors. The same block formula gives its conditional mean and variance. Predictions of an average must include cross-covariances; averaging marginal variances alone omits dependence.

For a compact input space with continuous kernel and mean, and a finite Borel measure, an integral of the process can be defined in mean square by finite weighted evaluation approximations. Cover the space by small cells and evaluate at one point per cell. Mean-square continuity makes the approximation differences tend to zero uniformly, and the total finite measure bounds the integrated error. The limit is Gaussian because its finite approximations are Gaussian and converge in probability.

Its cross covariance is the integral of k against that measure, and its variance is the corresponding double integral, justified by bounded continuous covariance and finite measure. Conditioning then subtracts the usual cross-vector quadratic correction. This provides an integral prediction under explicit hypotheses, not an automatic interchange of arbitrary random integrals or an interpretation of pointwise numerical quadrature as exact for every kernel.

## Correlated future noise and honest prediction targets

Adding an independent future observation variance is valid only when that noise is independent of both the latent process and the recorded noise. If a future sensor error shares calibration drift with past errors, its cross covariance with the observations is not just the latent k star. Write the complete Gaussian joint block including the noise cross terms and condition that block instead.

Similarly, predicting a repeat of the very same noisy random reading is not predicting a fresh independent measurement at the same input. The first target may already be observed and hence have zero conditional variance, while a fresh reading retains measurement uncertainty. State the random quantity being predicted before deciding which noise term to add.

The following chapters address non-Gaussian classification likelihoods and learned hyperparameters. Their posterior need not remain one Gaussian process after integration or nonlinear likelihood multiplication. The exact regression formulas here remain a reference case whose assumptions identify precisely what those extensions change.

## Information gain is another conditional target

For a scalar latent query with current positive variance u and a proposed noisy observation with variance s, let c be their current cross covariance. Its new variance is $u-c^2/s$. If this is positive, the Gaussian mutual information between query and new observation, conditional on the existing dataset, is
$$
\frac12\log\frac{u}{u-c^2/s}.
$$
To derive it, subtract the conditional Gaussian entropy after observing the new value from the current entropy. Each scalar Gaussian entropy is one half log of two pi e times its variance, and the new variance is independent of the newly observed value at fixed model parameters. The entropy constants cancel, giving the formula. This measures information about that particular query, not a universal utility of the proposed input.

If the proposed observation is at the query input with independent noise variance v, the reduction is from u to uv divided by u plus v, and the information gain is one half log one plus u over v. If the latent query is already deterministic, ordinary differential entropies are undefined; its information gain is instead zero by the direct independence definition. One should not insert a zero variance into an entropy formula and subtract infinities.

Repeated independent measurements at one location give an especially transparent update. Starting from latent prior variance tau squared, n readings of noise variance sigma squared yield latent precision $\tau^{-2}+n\sigma^{-2}$. The information gained about that one latent value grows logarithmically in one plus n tau squared over sigma squared. It is not n independent draws from a latent function distribution. A design targeting a different function average or derivative can prefer another location even when this pointwise gain is largest.

## Continuous posterior versions under an explicit increment bound

Suppose on a bounded real interval the centred prior increment variance is bounded by a constant times squared input distance, and its mean is continuous. For every pair of inputs, the increment is a finite linear combination of evaluations. Gaussian covariance reduction therefore bounds its centred posterior increment variance by that same prior bound. Gaussian higher moments and the continuity criterion of Chapter 6 then give a continuous version of the centred posterior process.

The posterior mean is the prior mean plus a finite linear combination of cross-kernel sections, so it is continuous when the kernel is continuous. Adding it preserves the continuous-version conclusion. This establishes posterior path regularity under the stated prior increment control and finite observation model, rather than assuming any continuous covariance alone guarantees continuous sample paths. It also keeps the fixed-data posterior version separate from an unjustified intersection of all original coordinate events.

## Exercises

<a id="conditioning-a-gaussian-process-ex-1"></a>

### Exercise 1

Prove the Gaussian conditional formula using a residual.

<details><summary>Hint 1</summary>

Subtract the linear prediction based on the observed block.

</details>

<details><summary>Hint 2</summary>

The residual is jointly Gaussian and uncorrelated with the observations.

</details>

<details><summary>Full solution</summary>

Define the centred residual by subtracting the cross-covariance times the inverse observed covariance times the centred observed vector. Its covariance with the observations is zero. Joint Gaussianity gives independence, even if the full joint covariance is singular. Its covariance is the Schur subtraction. Adding back the linear term yields the conditional mean and covariance with only the observed-block inverse assumption.

</details>

<a id="conditioning-a-gaussian-process-ex-2"></a>

### Exercise 2

Why can positive measurement noise rescue an otherwise singular latent Gram matrix?

<details><summary>Hint 1</summary>

Inspect quadratic forms of K plus noise identity.

</details>

<details><summary>Hint 2</summary>

The noise term is strictly positive for nonzero vectors.

</details>

<details><summary>Full solution</summary>

The latent Gram contribution is nonnegative while positive noise contributes sigma squared times the vector squared norm. Their sum is strictly positive, so the observed covariance is invertible. The latent process can remain finite rank or have repeated inputs. Invertibility of noisy observations does not make the latent covariance itself strictly positive definite.

</details>

<a id="conditioning-a-gaussian-process-ex-3"></a>

### Exercise 3

For the constant noiseless process and observations $(1,1)$, what is the conditional test value?

<details><summary>Hint 1</summary>

All latent values are the same variable.

</details>

<details><summary>Hint 2</summary>

The data lie on its diagonal support.

</details>

<details><summary>Full solution</summary>

The natural on-support conditional version is a point mass at one. The ordinary inverse formula does not apply to the singular observed covariance, but the exact equality of every coordinate identifies the conditional value. Observations $(1,-1)$ are outside this model support and have no corresponding ordinary conditioning ratio. Noise would define another, softened model.

</details>

<a id="conditioning-a-gaussian-process-ex-4"></a>

### Exercise 4

Compute the Brownian posterior mean and variance at time two.

<details><summary>Hint 1</summary>

Use cross vector $(1,2)^T$.

</details>

<details><summary>Hint 2</summary>

Apply the displayed two-by-two inverse.

</details>

<details><summary>Full solution</summary>

The inverse times the observed values gives $(1,1)^T$, whose cross-vector product is three. The covariance correction is three halves, subtracted from prior variance two, giving one half. This is a latent variance; predicting a new independent noisy reading would add its noise variance separately.

</details>

<a id="conditioning-a-gaussian-process-ex-5"></a>

### Exercise 5

Why is posterior variance no larger than prior variance at fixed hyperparameters?

<details><summary>Hint 1</summary>

The correction is a positive-definite inverse quadratic form.

</details>

<details><summary>Hint 2</summary>

Its equality condition is a zero cross vector.

</details>

<details><summary>Full solution</summary>

The subtracted term is nonnegative because the observed covariance inverse is positive definite. It vanishes exactly when the cross vector is zero. Thus latent variance decreases or stays the same. Refitting hyperparameters changes the prior and observation covariance and falls outside this fixed-model comparison.

</details>

<a id="conditioning-a-gaussian-process-ex-6"></a>

### Exercise 6

Show that sequentially adding one observation decreases every finite linear-combination variance.

<details><summary>Hint 1</summary>

The covariance correction is an outer product.

</details>

<details><summary>Hint 2</summary>

Test it against any coefficient vector.

</details>

<details><summary>Full solution</summary>

The correction quadratic form is the square of that coefficient vector inner product with the cross-kernel vector, divided by the positive new observation variance. It is nonnegative, proving positive-semidefinite matrix reduction. This is stronger than checking individual diagonals and relies on the independent-noise conditional model used in the update.

</details>

<a id="conditioning-a-gaussian-process-ex-7"></a>

### Exercise 7

Derive the regularised section-residual minimum.

<details><summary>Hint 1</summary>

Expand the squared RKHS norm.

</details>

<details><summary>Hint 2</summary>

Complete the finite positive-definite quadratic.

</details>

<details><summary>Full solution</summary>

The expression is test diagonal minus twice a transpose cross vector plus a transpose noisy Gram times a. The unique minimizing coefficient solves noisy Gram times a equal cross vector. Substitution gives test diagonal minus the inverse cross quadratic, exactly the latent posterior variance. No assumption that sample paths belong to the RKHS is involved.

</details>

<a id="conditioning-a-gaussian-process-ex-8"></a>

### Exercise 8

How is the variance of an average of two posterior function values computed?

<details><summary>Hint 1</summary>

Use their joint covariance.

</details>

<details><summary>Hint 2</summary>

Include the cross term.

</details>

<details><summary>Full solution</summary>

For an equally weighted average, its variance is one quarter of the sum of both marginal variances and twice their covariance. Averaging only the two marginal variances ignores posterior dependence and generally gives another value. The finite Gaussian functional formula computes the same result from a weighted cross vector and prior kernel quadratic form.

</details>

<a id="conditioning-a-gaussian-process-ex-9"></a>

### Exercise 9

Why can a correlated future measurement error invalidate simply adding a noise variance?

<details><summary>Hint 1</summary>

Its covariance with recorded errors can be nonzero.

</details>

<details><summary>Hint 2</summary>

The conditioning cross block then changes too.

</details>

<details><summary>Full solution</summary>

The future observed quantity includes an error correlated with the training observation vector. Its joint cross covariance is therefore latent covariance plus the relevant noise cross terms. Conditioning uses that full block and its subtraction, not the latent posterior plus an independent variance. The familiar additive formula presupposes independent fresh noise.

</details>

<a id="conditioning-a-gaussian-process-ex-10"></a>

### Exercise 10

What happens far from fixed bounded training inputs under a zero-mean Gaussian kernel?

<details><summary>Hint 1</summary>

Each cross-kernel entry tends to zero.

</details>

<details><summary>Hint 2</summary>

The diagonal remains the output variance.

</details>

<details><summary>Full solution</summary>

The posterior mean tends to its zero prior mean because its fixed solve coefficients multiply vanishing cross entries. The covariance correction also vanishes, leaving prior latent variance. This is a model-conditional extrapolation property, not evidence that the unknown actual function becomes zero or that the model includes every source of uncertainty away from data.

</details>
