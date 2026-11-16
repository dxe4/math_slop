
# Exercise and Project Solutions

These solutions show decisive reasoning for exercises across the chapters. They are organized by chapter and preserve the claim-status conventions used throughout the book. Where chapters contain inline solutions, these entries restate them compactly.

---

## Chapter 1: A probability model is more than a fitted curve

**Exercise 1.1 (Posterior mean as a compromise).** Assuming $\Sigma_w\succ0$, $\sigma^2>0$, and full column rank of $\Phi$, show that the posterior mean is a precision-weighted average of $0$ and $\hat w_{\mathrm{ML}}=(\Phi^T\Phi)^{-1}\Phi^Ty$.

> **Solution.** Let $A = \Sigma_{w}^{-1}$ and $B = \frac{1}{\sigma^{2}}\Phi^{T}\Phi$. The posterior precision is $A + B$, and the posterior mean is $(A + B)^{-1}B\hat{w}_{\text{ML}}$. The weight on the prior mean is $(A + B)^{-1}A$ and the weight on $\hat{w}_{\text{ML}}$ is $(A + B)^{-1}B$; these sum to the identity. As $B$ grows, the posterior mean shifts toward $\hat{w}_{\text{ML}}$; as $A$ grows, it shifts toward the prior mean.

**Exercise 1.2 (Predictive variance at training points).** Show that the predictive variance at $x_i$ is strictly larger than $\sigma^2$ when $\phi(x_i)\ne0$, and handle $\phi(x_i)=0$.

> **Solution.** The variance is $\phi(x_i)^T\Sigma_{w\mid\mathcal D}\phi(x_i)+\sigma^2$. Positive definiteness makes the first term positive exactly for a nonzero feature vector. When $\phi(x_i)=0$, the latent value is fixed at zero and the predictive variance equals $\sigma^2$.

**Exercise 1.3 (Model uncertainty versus posterior width).** Which statistician is more likely to be confidently wrong?

> **Solution.** Width alone cannot rank the two models' out-of-sample correctness. B's narrow posterior under a restrictive model is a warning, but either model may be misspecified. Compare them with out-of-sample checks and sensitivity analysis.

**Exercise 1.4 (Calibration check).** In a held-out test of $200$ points, $170$ fall inside $95\%$ intervals. What does this suggest?

> **Solution.** Empirical coverage is $85\%$, well below nominal $95\%$. Possible causes: underestimated noise variance, model misspecification, an overly strong prior, or covariate shift. A calibration audit should examine residuals, compare marginal likelihoods, and test prior sensitivity.

---

## Chapter 2: Positive-Semidefinite Kernels

**Exercise 2.1 (Kernel construction).** Prove that $k(x, z) = 1 + xz$ is a positive-semidefinite kernel on $\mathbb{R}$.

> **Solution.** Define $\varphi(x) = (1, x) \in \mathbb{R}^{2}$. Then $\langle \varphi(x), \varphi(z) \rangle = 1 + xz = k(x, z)$. By the feature-map theorem, $k$ is positive semidefinite.

**Exercise 2.2 (Invalid correlation).** Show that $\begin{bmatrix} 1 & 1.2 \\ 1.2 & 1 \end{bmatrix}$ is not a valid Gram matrix.

> **Solution.** The eigenvalues are $2.2$ and $-0.2$. Since one eigenvalue is negative, the matrix is not positive semidefinite. Equivalently, $\det = 1 - 1.44 = -0.44 < 0$.

**Exercise 2.3 (Sum and product closure).** For $k_{1}(x, z) = x^{T}z$ and $k_{2}(x, z) = (1 + x^{T}z)^{2}$ on $\mathbb{R}^{2}$, compute the Gram matrix of $k = k_{1} + k_{2}$ at $x_{1} = (1, 0)$, $x_{2} = (0, 1)$, $x_{3} = (1, 1)$ and verify positive semidefiniteness.

> **Solution.** $k_1$ gives $1,0,1,1,1,2$ and $k_2$ gives $4,1,4,4,4,9$ on the six symmetric pairs. Thus $K=\begin{bmatrix}5&1&5\\1&5&5\\5&5&11\end{bmatrix}$, whose eigenvalues are $16,4,1$. It is positive definite.

**Exercise 2.4 (Length-scale intuition).** For fixed points $0,d$ with $d>0$ and RBF length scale $h$, what is the correlation and its limits as $h\to0,\infty$?

> **Solution.** It is $\exp[-d^2/(2h^2)]$, tending to $0$ as $h\to0$ and to $1$ as $h\to\infty$.

---

## Chapter 3: Gaussian Processes through Finite Distributions

**Exercise 3.1 (Marginal variance).** Let $f \sim \mathcal{GP}(0, k)$ with $k(x, z) = \min(x, z)$ on $[0, \infty)$. Find $\operatorname{Var}(f(x))$ and $\operatorname{Corr}(f(x), f(z))$ for $x < z$.

> **Solution.** $\operatorname{Var}(f(x)) = k(x, x) = x$. The correlation is $k(x, z)/\sqrt{k(x, x)k(z, z)} = x/\sqrt{xz} = \sqrt{x/z}$. As $z \to \infty$ with $x$ fixed, the correlation tends to $0$. This kernel is the covariance of standard Brownian motion.

**Exercise 3.2 (Sum of independent GPs).** Show that $f = f_{1} + f_{2}$ is a GP and identify its mean and covariance.

> **Solution.** For any finite set of points, the vectors $(f_{1}(x_{i}))$ and $(f_{2}(x_{i}))$ are independent multivariate Gaussians. Their sum is multivariate Gaussian with mean $m_{1} + m_{2}$ and covariance $k_{1} + k_{2}$. Hence $f \sim \mathcal{GP}(m_{1} + m_{2}, k_{1} + k_{2})$.

**Exercise 3.3 (Cholesky sampling).** For $K = \begin{bmatrix} 1 & r \\ r & 1 \end{bmatrix}$ with $r = 0.6$, compute $L$ and the sample $f = Lz$ for $z = (1, -1)^{T}$.

> **Solution.** $L_{11} = 1$, $L_{21} = 0.6$, $L_{22} = \sqrt{1 - 0.36} = 0.8$. Then $f = Lz = (1,\; 0.6 - 0.8)^{T} = (1, -0.2)^{T}$.

**Exercise 3.4 (Kernel misspecification).** True function $f(x) = |x|$ on $[-1, 1]$; prior is zero-mean GP with RBF kernel. Describe the posterior near $x = 0$.

> **Solution.** The smooth posterior mean tends to round the cusp at finite sampling density. For fixed inputs and hyperparameters, posterior variance is independent of the observed targets, so the cusp does not force it to remain large; dense data can make it small while bias remains. That is unrepresented model misspecification.

---

## Chapter 4: Conditioning a Gaussian Process

**Exercise 4.1 (Noiseless two-point conditioning).** Let $k(x, z) = \min(x, z)$. Observe $f(1) = 2$ and $f(3) = 4$ without noise. Find the posterior mean and variance at $x_{*} = 2$.

> **Solution.** $K = \begin{bmatrix} 1 & 1 \\ 1 & 3 \end{bmatrix}$, $k_{*} = (1, 2)^{T}$, $k_{**} = 2$. The inverse is $K^{-1} = \frac{1}{2}\begin{bmatrix} 3 & -1 \\ -1 & 1 \end{bmatrix}$. The posterior mean is $\mu_{*} = k_{*}^{T}K^{-1}y = \frac{1}{2}(1, 2)(2, 2)^{T} = 3$. The posterior variance is $\sigma_{*}^{2} = 2 - k_{*}^{T}K^{-1}k_{*} = 2 - \frac{1}{2}(1, 2)(1, 1)^{T} = 2 - \frac{3}{2} = \frac{1}{2}$.

**Exercise 4.2 (Posterior variance reduction).** With fixed kernel/noise hyperparameters and $\sigma^2>0$, show that $\sigma_*^2\le k_{**}$ with equality iff $k_*=0$.

> **Solution.** $K_y^{-1}\succ0$, so the subtracted quadratic form $k_*^TK_y^{-1}k_*$ is nonnegative and vanishes exactly for $k_*=0$. Refitting hyperparameters changes the model and is outside this comparison.

**Exercise 4.3 (Noisy prediction variance).** Verify the predictive variance for $y_{*}$ and show it is at least $\sigma^{2}$.

> **Solution.** The latent variance is $\tau^{2}(1 - \tau^{2}\exp(-h^{2}/\lambda^{2})/(\tau^{2} + \sigma^{2}))$. Adding $\sigma^{2}$ gives $\tau^{2} + \sigma^{2} - \tau^{4}\exp(-h^{2}/\lambda^{2})/(\tau^{2} + \sigma^{2}) = \sigma^{2} + \tau^{2}(1 - \tau^{2}\exp(-h^{2}/\lambda^{2})/(\tau^{2} + \sigma^{2}))$. The term in parentheses lies in $[0, 1]$, so the total is at least $\sigma^{2}$. Even perfect knowledge of $f_{*}$ leaves observation noise.

**Exercise 4.4 (Extrapolation behavior).** Describe the posterior mean and variance far from training data in $[-1, 1]$.

> **Solution.** As $|x_{*}| \to \infty$, $k(x_{i}, x_{*}) \to 0$ for all training points, so $\mu_{*} \to 0$ and $\sigma_{*}^{2} \to \tau^{2}$. The model returns to its prior, honestly reporting ignorance.

---

## Chapter 5: Kernel Ridge and GP Means: Same Algebra, Different Claims

**Exercise 5.1 (Finite-vector MAP equivalence).** For $K\succ0$, show that the posterior mode of $f_X\sim\mathcal N(0,K)$ under Gaussian noise agrees with KRR fitted values when $\lambda=\sigma^2$.

> **Solution.** Writing the uniquely parametrized vector as $f_X=K\alpha$, the log posterior is $-\|y-K\alpha\|^2/(2\sigma^2)-\alpha^TK\alpha/2+\text{const}$. Its mode satisfies $(K+\sigma^2I)\alpha=y$. The representer theorem supplies the minimum-norm RKHS extension; this is not a claim that the whole GP path space has a flat-reference density.

**Exercise 5.2 (Leave-one-out cross-validation).** Show that the leave-one-out error is $(y_{i} - \hat{f}(x_{i}))/(1 - H_{ii})$ where $H = K(K + \lambda I)^{-1}$.

> **Solution.** Put $C=(K+\lambda I)^{-1}$ and $\alpha=Cy$. Then $I-H=\lambda C$, so $y_i-\hat y_i=\lambda\alpha_i$ and $1-H_{ii}=\lambda C_{ii}$. A Schur-complement deletion gives the leave-one-out residual $\alpha_i/C_{ii}$, equal to the displayed ratio.

**Exercise 5.3 (No probabilistic interpretation of KRR intervals).** Why is $\hat{f}(x_{*}) \pm 2\sqrt{\lambda}$ not a valid $95\%$ credible interval?

> **Solution.** The GP posterior variance $k_{**}-k_*^T(K+\sigma^2I)^{-1}k_*$ varies with $x_*$. The constant band is therefore not that GP's credible interval; coverage would require a separate calibration study.

**Exercise 5.4 (Marginal likelihood).** Write the log marginal likelihood and explain why KRR has no direct analogue.

> **Solution.** $\log p(y \mid \theta) = -\frac{1}{2}y^{T}K_{y}^{-1}y - \frac{1}{2}\log\det K_{y} - \frac{n}{2}\log(2\pi)$. This integrates over the latent function. KRR has no probabilistic model for the data, so there is no marginal likelihood. Cross-validation provides an empirical alternative.

---

## Chapter 6: Numerical Conditioning Is Part of Inference

**Exercise 6.1 (Condition number scaling).** For the RBF kernel on $[0, 1]$ with $n$ equally spaced points and $h = 1/n$, estimate how $\kappa(K)$ scales with $n$.

> **Solution.** With endpoint-inclusive $x_i=i/(n-1)$ and $h=1/n$, $K_{ij}=\exp[-n^2(i-j)^2/(2(n-1)^2)]$. Direct eigensystem computation gives $\kappa_2(K)\approx21.010,39.207,53.052$ for $n=10,20,40$. These values do not support exponential growth; increasing the length scale would generally increase correlations and worsen this conditioning mechanism.

**Exercise 6.2 (Jitter effect on posterior variance).** Write the posterior variance at $x_{*} = 0$ as a function of jitter $j$ and show it increases with $j$.

> **Solution.** With one observation, $K_{y} = 1 + \sigma^{2} + j$. The posterior variance is $\sigma_{*}^{2} = 1 - 1/(1 + \sigma^{2} + j) = (\sigma^{2} + j)/(1 + \sigma^{2} + j)$. The derivative with respect to $j$ is $(1 + \sigma^{2} + j)^{-2} > 0$. Larger jitter inflates variance, treating some signal as noise.

**Exercise 6.3 (Log determinant from Cholesky).** Prove $\log\det K_{y} = 2\sum_{i}\log L_{ii}$.

> **Solution.** $\det K_{y} = \det(L)\det(L^{T}) = (\det L)^{2}$. Since $L$ is triangular, $\det L = \prod_{i}L_{ii}$. Hence $\det K_{y} = (\prod_{i}L_{ii})^{2}$ and $\log\det K_{y} = 2\sum_{i}\log L_{ii}$.

**Exercise 6.4 (Triangular solve vs. explicit inverse).** Compare operation counts for $A^{-1}y$ via explicit inverse versus Cholesky plus triangular solves for a $1000 \times 1000$ matrix.

> **Solution.** Counting a multiplication and an addition separately, Cholesky costs about $n^{3}/3$ flops and its two triangular solves cost about $2n^{2}$, for $n^{3}/3+2n^{2}$ total. Explicit inversion also has cubic leading cost, but after factorization it solves for $n$ inverse columns rather than one right-hand side, then uses another $O(n^{2})$ flops for the matrix-vector product. Both are $O(n^{3})$ from scratch; factor-and-solve avoids the extra cubic inverse construction and has better numerical error behavior.

---

## Chapter 7: Directed Graphical Models

**Exercise 7.1 (Factorization from DAG).** Write the factorization for $A \to B \leftarrow C \to D \leftarrow E$.

> **Solution.** $p(a, b, c, d, e) = p(a)p(c)p(e)p(b \mid a, c)p(d \mid c, e)$. By the local Markov property, $A \perp\!\!\perp C$, $A \perp\!\!\perp E$, and $E \perp\!\!\perp A$, $E \perp\!\!\perp B$, $E \perp\!\!\perp C$.

**Exercise 7.2 (d-separation).** In $X_{1} \to X_{2} \leftarrow X_{3} \to X_{4}$, are $X_{1}$ and $X_{4}$ d-separated by $\emptyset$? By $\{X_{2}\}$? By $\{X_{3}\}$? By $\{X_{2}, X_{3}\}$?

> **Solution.** With $\emptyset$, collider $X_2$ blocks the path. Given $X_2$, the path is open, so the variables are not d-separated; dependence is guaranteed under faithfulness. Given $X_3$, or both $X_2,X_3$, conditioned noncollider $X_3$ blocks the path.

**Exercise 7.3 (Collider bias in selection).** Recruitment requires high blood pressure ($B$) or high cholesterol ($C$), where the independent binary indicators are nondegenerate. Show $B$ and $C$ are negatively correlated in the recruited sample.

> **Solution.** Recruitment conditions on $R = 1[B \text{ high} \lor C \text{ high}]$. Given $R = 1$, the joint event $B=C=0$ has probability zero while both conditional marginals assign positive probability to zero. Hence the conditional covariance is negative. This is collider stratification.

**Exercise 7.4 (Observational equivalence class).** Draw the three DAGs observationally equivalent to $A \to B \to C$.

> **Solution.** The three DAGs are $A \to B \to C$, $A \leftarrow B \to C$, and $A \leftarrow B \leftarrow C$. All imply $A \perp\!\!\perp C \mid B$ and no other conditional independences among singletons. Distinguishing them requires causal assumptions or interventional data.

---

## Chapter 8: Undirected Models and Factors

**Exercise 8.1 (Precision and conditional independence).** For $\Sigma = \begin{bmatrix} 1 & 0.5 & 0.3 \\ 0.5 & 1 & 0.4 \\ 0.3 & 0.4 & 1 \end{bmatrix}$, compute $Q = \Sigma^{-1}$ and determine conditional independences.

> **Solution.** Numerically, $Q\approx\begin{bmatrix}1.35484&-0.61290&-0.16129\\-0.61290&1.46774&-0.40323\\-0.16129&-0.40323&1.20968\end{bmatrix}$. No off-diagonal entry is zero, so no pair is conditionally independent given the third.

**Exercise 8.2 (Chain precision matrix).** Construct a tridiagonal positive-definite $Q$ for $X_{1} - X_{2} - X_{3} - X_{4}$.

> **Solution.** $Q = \begin{bmatrix} 2 & -1 & 0 & 0 \\ -1 & 2 & -1 & 0 \\ 0 & -1 & 2 & -1 \\ 0 & 0 & -1 & 2 \end{bmatrix}$. The eigenvalues are $2 - 2\cos(\pi k/5)$ for $k = 1, 2, 3, 4$, all positive. The zeros in $(1, 3)$, $(1, 4)$, and $(2, 4)$ encode the conditional independences.

**Exercise 8.3 (Marginal versus conditional independence).** In the three-variable chain with the text's precision matrix, compute $\operatorname{Cov}(X_{1}, X_{3})$ and explain the dependence structure.

> **Solution.** From $\Sigma = Q^{-1} = \frac{1}{4}\begin{bmatrix} 3 & 2 & 1 \\ 2 & 4 & 2 \\ 1 & 2 & 3 \end{bmatrix}$, we have $\Sigma_{13} = 1/4 > 0$. The marginal covariance is nonzero because $X_{1}$ and $X_{3}$ are both influenced by $X_{2}$. However, $Q_{13} = 0$, so once $X_{2}$ is known, $X_{1}$ and $X_{3}$ provide no additional information about each other.

**Exercise 8.4 (Factorization on a triangle).** Write the most general factorization over maximal cliques for $X_{1} - X_{2} - X_{3} - X_{1}$.

> **Solution.** The triangle is $K_3$, whose single maximal clique is $\{1,2,3\}$. Hence $p(x_1,x_2,x_3)=Z^{-1}\psi_{123}(x_1,x_2,x_3)$. A product of pairwise potentials is a restricted subfamily and cannot express every three-way interaction.

---

## Chapter 9: Exact and Approximate Inference

**Exercise 9.1 (Message passing on a chain with evidence).** In the three-node chain with $\psi_{12} = \begin{bmatrix} 2 & 1 \\ 1 & 2 \end{bmatrix}$ and $\psi_{23} = \begin{bmatrix} 3 & 1 \\ 1 & 3 \end{bmatrix}$, observe $X_{2} = 0$. Compute $p(x_{1} \mid x_{2} = 0)$ and $p(x_{3} \mid x_{2} = 0)$.

> **Solution.** With $X_{2} = 0$, the relevant potentials are $\psi_{12}(x_{1}, 0) = (2, 1)$ and $\psi_{23}(0, x_{3}) = (3, 1)$. Hence $p(x_{1} \mid x_{2} = 0) \propto (2, 1)$, giving $p(x_{1} = 0 \mid x_{2} = 0) = 2/3$ and $p(x_{1} = 1 \mid x_{2} = 0) = 1/3$. Similarly $p(x_{3} \mid x_{2} = 0) \propto (3, 1)$, giving $p(x_{3} = 0 \mid x_{2} = 0) = 3/4$ and $p(x_{3} = 1 \mid x_{2} = 0) = 1/4$.

**Exercise 9.2 (HMM forward message).** Two-state HMM with $P = \begin{bmatrix} 0.9 & 0.1 \\ 0.2 & 0.8 \end{bmatrix}$, emissions $p(x_{t} = 0 \mid z_{t} = 0) = 0.8$, $p(x_{t} = 0 \mid z_{t} = 1) = 0.3$, and $\pi = (0.5, 0.5)$. Compute $\alpha_{1}(z_{1})$ after $x_{1} = 0$.

> **Solution.** $\alpha_{1}(z_{1}) = p(x_{1} = 0 \mid z_{1})\,\pi(z_{1})$. For $z_{1} = 0$: $0.8 \cdot 0.5 = 0.4$. For $z_{1} = 1$: $0.3 \cdot 0.5 = 0.15$.

**Exercise 9.3 (Treewidth of a grid).** What is the treewidth of an $m \times n$ grid?

> **Solution.** For $m,n\ge2$, treewidth is $\min(m,n)$; a nontrivial $1\times n$ path has treewidth $1$, and a single vertex has treewidth $0$. Exact cost is exponential in induced factor width for fixed nontrivial state size, but practical feasibility also depends on state cardinalities, factor structure, memory, and elimination order.

**Exercise 9.4 (Variational mean-field for a simple model).** For $p(x_{1}, x_{2}) \propto \exp(J x_{1}x_{2})$ with $x_{i} \in \{-1, 1\}$ and $J > 0$, derive mean-field updates and find fixed points for $J = 2$.

> **Solution.** The updates are $\mu_1=\tanh(J\mu_2)$ and $\mu_2=\tanh(J\mu_1)$. Strict monotonicity rules out $\mu_1>\mu_2$ and $\mu_2>\mu_1$ at a fixed point, so $\mu_1=\mu_2=\mu$. For $J=2$, $\mu=\tanh(2\mu)$ has exactly the three roots $0$ and approximately $\pm0.9575$. Exact zero initialization remains zero; the zero fixed point is unstable to nonzero perturbations, and generic small same-sign perturbations converge to one of the two nonzero states.

---

## Chapter 10: Learning Graph Structure and Parameters

**Exercise 10.1 (BIC score comparison).** Count free parameters for binary $G_1:X_1\to X_2\to X_3$ and $G_2:X_1\to X_2\leftarrow X_3$. When does BIC prefer $G_1$?

> **Solution.** The counts are $1+2+2=5$ for $G_1$ and $1+1+4=6$ for $G_2$. With maximized log likelihoods $\ell_1,\ell_2$, BIC prefers $G_1$ exactly when $\ell_1-\ell_2>-\frac12\log n$.

**Exercise 10.2 (Weak dependence under faithfulness).** Construct a distribution faithful to $X_{1} \to X_{2} \to X_{3}$ where $X_{1}$ and $X_{3}$ are nearly independent marginally.

> **Solution.** Let $X_1,\varepsilon_2,\varepsilon_3$ be independent standard normals, $X_2=0.1X_1+\varepsilon_2$, and $X_3=0.1X_2+\varepsilon_3$. Nonzero edge coefficients and nondegenerate noises make this Gaussian chain faithful, while $\operatorname{Cov}(X_1,X_3)=0.01$. Smaller nonzero coefficients make dependence arbitrarily weak without making it exactly zero.

**Exercise 10.3 (Hidden variable bias).** True DAG is $X \leftarrow H \to Y$ with hidden $H$, and observed $X,Y$ have nonzero marginal dependence. What will constraint-based methods learn?

> **Solution.** The observed marginal dependence between $X$ and $Y$ leads constraint-based methods to include an edge $X - Y$. The learned graph suggests a direct association, but the true relationship is entirely due to the common cause $H$. This is the classic confounding problem; no testing on $\{X, Y\}$ alone can distinguish the structures.

**Exercise 10.4 (Greedy search local optimum).** Explain why greedy hill-climbing over DAGs can get stuck.

> **Solution.** The BIC landscape is multimodal. Adding a single edge may not improve the score if the likelihood gain is outweighed by the complexity penalty, even though adding two edges together might yield a substantial improvement. Greedy hill-climbing cannot escape such optima without edge reversals, removals, or random restarts.
