
# Conditioning a Gaussian Process

## Purpose and prerequisites

This chapter derives the posterior distribution of a Gaussian process given noisy observations. The formulas are standard multivariate Gaussian conditioning, but their interpretation as updating a distribution over functions is what makes Gaussian processes powerful. The chapter assumes familiarity with Gaussian processes (Chapter 3), positive-semidefinite kernels (Chapter 2), and the matrix inversion lemma. Chapter 1 established the conceptual framework for separating observation noise from latent-function uncertainty.

## The joint distribution

Assume a zero-mean GP prior $f \sim \mathcal{GP}(0, k)$ for simplicity; a nonzero mean is handled by subtracting it and adding it back. Let $X = (x_{1}, \dots, x_{n})$ be training inputs and let $y = (y_{1}, \dots, y_{n})^{T}$ be observed outputs. Assume independent Gaussian observation noise:

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

if $\Sigma_{aa}$ is invertible (hence positive definite), the conditional distribution is the Gaussian below, whose covariance may be singular. To see this without requiring a nonsingular joint covariance, set $R=b-\mu_b-\Sigma_{ba}\Sigma_{aa}^{-1}(a-\mu_a)$. This centered residual is jointly Gaussian with $a$ and satisfies $\operatorname{Cov}(R,a)=0$, so Gaussian independence gives the conditional mean and covariance below:

$$b \mid a \sim \mathcal{N}(\mu_{b} + \Sigma_{ba}\Sigma_{aa}^{-1}(a - \mu_{a}), \; \Sigma_{bb} - \Sigma_{ba}\Sigma_{aa}^{-1}\Sigma_{ab}).$$

Applying this to the GP joint distribution with $a = y$ and $b = f_{*}$ yields:

**Theorem (GP posterior).** Under the model above, with $K_y$ invertible, the posterior distribution of the latent function value at $x_{*}$ is

$$f_{*} \mid X, y, x_{*} \sim \mathcal{N}(\mu_{*}, \sigma_{*}^{2}),$$

where

$$\mu_{*} = k_{*}^{T}(K + \sigma^{2}I)^{-1}y,$$

$$\sigma_{*}^{2} = k_{**} - k_{*}^{T}(K + \sigma^{2}I)^{-1}k_{*}.$$

For a noisy prediction $y_{*} = f_{*} + \varepsilon_{*}$ with $\varepsilon_{*} \sim \mathcal{N}(0, \sigma^{2})$ independent of everything else, add $\sigma^{2}$ to the variance:

$$y_{*} \mid X, y, x_{*} \sim \mathcal{N}(\mu_{*}, \sigma_{*}^{2} + \sigma^{2}).$$

For several test inputs $X_{*} = (x_{*1}, \dots, x_{*m})$, replace $k_{*}$ by the $n \times m$ cross-covariance matrix $K_{*}$ with entries $(K_{*})_{ij} = k(x_{i}, x_{*j})$, and replace $k_{**}$ by the $m \times m$ test covariance matrix $K_{**}$ with entries $(K_{**})_{ij} = k(x_{*i}, x_{*j})$.

## Worked example: two-point conditioning

Consider inputs $x_{1} = 0$ and $x_{2} = 1$ with the kernel $k(x, z) = \exp(-(x-z)^{2}/2)$. The prior covariance matrix is

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

Suppose we observe $y = a$ at $x = 0$ with noise variance $\sigma^{2}$, and we wish to predict at $x_{*} = h$. With the RBF kernel $k(x, z) = \tau^{2}\exp(-(x-z)^{2}/(2\lambda^{2}))$:

$$K_{y} = \tau^{2} + \sigma^{2}, \quad k_{*} = \tau^{2}\exp(-h^{2}/(2\lambda^{2})), \quad k_{**} = \tau^{2}.$$

The posterior mean and variance are

$$\mu_{*} = \frac{\tau^{2}\exp(-h^{2}/(2\lambda^{2}))}{\tau^{2} + \sigma^{2}}a,$$

$$\sigma_{*}^{2} = \tau^{2} - \frac{\tau^{4}\exp(-h^{2}/\lambda^{2})}{\tau^{2} + \sigma^{2}} = \tau^{2}\left(1 - \frac{\tau^{2}\exp(-h^{2}/\lambda^{2})}{\tau^{2} + \sigma^{2}}\right).$$

As $h \to 0$, $\mu_{*} \to \tau^{2}a/(\tau^{2} + \sigma^{2})$, a shrinkage of the observation toward zero by the noise-to-signal ratio. As $h \to \infty$, $\mu_{*} \to 0$, returning to the prior mean. The variance interpolates between $\tau^{2}\sigma^{2}/(\tau^{2} + \sigma^{2})$ at $h = 0$ and $\tau^{2}$ as $h \to \infty$.

## Common errors

- **Adding observation noise twice.** The latent posterior variance $\sigma_{*}^{2}$ does not include observation noise. For predicting a new observation $y_{*}$, add $\sigma^{2}$. For predicting the latent function value $f_{*}$, do not.
- **Forming an explicit inverse.** Computing $(K + \sigma^{2}I)^{-1}$ explicitly is numerically unstable. Use Cholesky decomposition instead, as detailed in Chapter 6, "Numerical Conditioning Is Part of Inference."
- **Ignoring the prior mean.** A zero-mean prior pulls predictions toward zero in regions without data. If the true function has a nonzero mean, the model will be biased unless the mean function is adjusted.
- **Confusing correlation with causation in the GP context.** A high covariance between nearby inputs does not imply that changing one input causes a change in the output at another; it reflects the prior assumption encoded in the kernel.

## Practice exercises

**Exercise 4.1 (Noiseless two-point conditioning).** Let $k(x, z) = \min(x, z)$ on $\mathcal{X} = [0, \infty)$. Observe $f(1) = 2$ and $f(3) = 4$ without noise. Find the posterior mean and variance at $x_{*} = 2$.

**Solution.** The covariance matrix and cross-covariance are

$$K = \begin{bmatrix} 1 & 1 \\ 1 & 3 \end{bmatrix}, \quad k_{*} = \begin{bmatrix} \min(1, 2) \\ \min(3, 2) \end{bmatrix} = \begin{bmatrix} 1 \\ 2 \end{bmatrix}, \quad k_{**} = 2.$$

The inverse is

$$K^{-1} = \frac{1}{2}\begin{bmatrix} 3 & -1 \\ -1 & 1 \end{bmatrix}.$$

The posterior mean is

$$\mu_{*} = \begin{bmatrix} 1 & 2 \end{bmatrix}\frac{1}{2}\begin{bmatrix} 3 & -1 \\ -1 & 1 \end{bmatrix}\begin{bmatrix} 2 \\ 4 \end{bmatrix} = \frac{1}{2}\begin{bmatrix} 1 & 2 \end{bmatrix}\begin{bmatrix} 2 \\ 2 \end{bmatrix} = 3.$$

The posterior variance is

$$\sigma_{*}^{2} = 2 - \begin{bmatrix} 1 & 2 \end{bmatrix}\frac{1}{2}\begin{bmatrix} 3 & -1 \\ -1 & 1 \end{bmatrix}\begin{bmatrix} 1 \\ 2 \end{bmatrix} = 2 - \frac{1}{2}\begin{bmatrix} 1 & 2 \end{bmatrix}\begin{bmatrix} 1 \\ 1 \end{bmatrix} = 2 - \frac{3}{2} = \frac{1}{2}.$$

**Exercise 4.2 (Posterior variance reduction).** With the kernel and noise hyperparameters fixed and $\sigma^2>0$, show that $\sigma_*^2\le k_{**}$, with equality if and only if $k_*=0$.

**Solution.** The posterior variance is $k_{**}-k_*^TK_y^{-1}k_*$. Since $K_y$ and $K_y^{-1}$ are positive definite, the subtracted quadratic form is nonnegative and vanishes exactly when $k_*=0$. Thus $\sigma_*^2\le k_{**}$. This comparison conditions within one fixed model; refitting hyperparameters after adding data can change the prior covariance and is not covered by the inequality.

**Exercise 4.3 (Noisy prediction variance).** In the one-noisy-observation example, verify that the predictive variance for a new observation $y_{*}$ at $x_{*} = h$ is

$$\tau^{2} + \sigma^{2} - \frac{\tau^{4}\exp(-h^{2}/\lambda^{2})}{\tau^{2} + \sigma^{2}}.$$

Show that this is always at least $\sigma^{2}$ and explain why.

**Solution.** The latent variance is $\tau^{2}(1 - \tau^{2}\exp(-h^{2}/\lambda^{2})/(\tau^{2} + \sigma^{2}))$. Adding observation noise gives

$$\tau^{2} + \sigma^{2} - \frac{\tau^{4}\exp(-h^{2}/\lambda^{2})}{\tau^{2} + \sigma^{2}} = \sigma^{2} + \tau^{2}\left(1 - \frac{\tau^{2}\exp(-h^{2}/\lambda^{2})}{\tau^{2} + \sigma^{2}}\right).$$

The term in parentheses is the latent variance divided by $\tau^{2}$, which lies in $[0, 1]$. Thus the total is at least $\sigma^{2}$. Even with perfect knowledge of the latent function, a new observation still carries observation noise.

**Exercise 4.4 (Extrapolation behavior).** Consider a zero-mean GP with RBF kernel on $\mathbb{R}$. Training data are observed in $[-1, 1]$. Describe qualitatively the posterior mean and variance for $|x_{*}| \gg 1$.

**Solution.** As $|x_{*}| \to \infty$, the cross-covariance $k(x_{i}, x_{*}) = \exp(-(x_{i} - x_{*})^{2}/(2\lambda^{2})) \to 0$ for all training points $x_{i} \in [-1, 1]$. Therefore $\mu_{*} \to 0$, the prior mean. The variance $\sigma_{*}^{2} \to k_{**} = \tau^{2}$, the prior variance. Far from data, the model returns to its prior. This is a feature, not a bug: the model honestly reports that it has no information.

## Summary and forward pointers

This chapter derived the fundamental GP conditioning formulas. The posterior mean is a linear combination of the observed values weighted by the kernel; the posterior variance is the prior variance minus a data-dependent reduction. These formulas are the basis for all GP regression.

The next chapter, "Kernel Ridge and GP Means: Same Algebra, Different Claims," explores the deep connection between the GP posterior mean and kernel ridge regression. Chapter 6, "Numerical Conditioning Is Part of Inference," addresses the practical matter of computing these formulas stably for large data sets. Chapter 9, "Exact and Approximate Inference," places GP conditioning in the broader context of inference algorithms for graphical models.
