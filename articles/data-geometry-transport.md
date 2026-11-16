
# Geometry from Samples: Manifolds, Neighborhood Graphs, and Optimal Transport

**Before reading.** Read [Regular Surfaces and Coordinate Patches](../books/differential-geometry-curves-surfaces/regular-surfaces-patches.md), [Finite-Dimensional Spectral Theorems](../books/linear-algebra-structure-proofs/finite-dimensional-spectral-theorems.md), [Outer Measure and Measurability](../books/measure-and-integration/outer-measure-and-measurability.md) and [Convexity, Optimality, and Dual Certificates](../books/optimization-backprop-from-scratch/convexity-optimality-duality.md). These are preparation for the ideas used below.

High-dimensional coordinates can conceal low-dimensional structure. Images may vary mainly by pose and lighting; spectra may follow a few material parameters; probability distributions may differ by moving mass rather than coordinatewise subtraction. Manifold learning and optimal transport turn these intuitions into mathematical constructions—but only under hypotheses about sampling, distance, noise, and cost.

This deep dive assumes linear algebra, graph spectra, probability distributions, differential geometry, and convex optimization. It distinguishes a finite embedding from recovery of a latent manifold and a small transport cost from evidence of transferable labels or causal mechanisms.

## The manifold hypothesis is a hypothesis

Let observations $x_{i}\in R^{D}$. A manifold model supposes they lie on or near an $m$-dimensional smooth manifold $M\subset R^{D}$, with $m≪D$. Locally, a smooth manifold resembles $R^{m}$; tangent vectors capture first-order variation.

For reliable recovery one may need assumptions such as:

- $M$ is sufficiently smooth, often compact or controlled on the sampled region;
- curvature is bounded and distinct folds are separated by positive reach;
- samples cover $M$ densely enough under a density bounded away from zero where recovery is claimed;
- noise is small relative to neighborhood and curvature scales;
- ambient distance is meaningful after feature scaling;
- the chosen neighborhood graph remains connected without shortcut edges.

These are not guaranteed by a visually pleasing two-dimensional plot. Data can occupy a union of manifolds, a stratified set with intersections, a full-dimensional cloud, or a time-dependent distribution.

## Local PCA estimates tangent directions

Choose neighbors of point $x_{i}$, center them, and compute their local covariance

$$C_{i}=(1/k)\sum_{j\in N_{i}}(x_{j}-\bar{x}_{i})(x_{j}-\bar{x}_{i})^{T}$$

If the manifold is locally flat, sampling is dense, noise is controlled, and the neighborhood radius is small relative to curvature, the leading $m$ eigenvectors approximate the tangent space. Small eigenvalues represent normal directions plus noise.

Neighborhood choice balances errors. Too few points produce high sampling variance and disconnected graphs. Too many mix curvature or nearby folds, biasing the tangent estimate. There is no universally correct $k$ independent of sample size, density, noise, and geometry.

Eigenvalue gaps can suggest intrinsic dimension, but thresholds are scale- and noise-dependent. Reporting “dimension two” from one scree plot is an empirical diagnostic, not a proof that the data-generating support is a two-manifold.

## Neighborhood graphs discretize geometry

Build a graph with vertices $x_{i}$. Two common rules are:

- $\varepsilon$-graph: connect points within distance $\varepsilon$;
- $k$-nearest-neighbor graph: connect each point to its $k$ closest points, then symmetrize by union or mutual agreement.

Weights may be binary or use a heat kernel

$$w_{ij}=\exp(-\lVert x_{i}-x_{j}\rVert^{2}/(2h^{2}))$$

Let $W=(w_{ij})$, degrees $d_{i}=\sum_{j}w_{ij}$, and $D=\operatorname{diag}(d_{i})$. The unnormalized graph Laplacian is $L=D-W$. For scalar vertex values $f$,

$$f^{T} Lf=(1/2)\sum_{i,j}w_{ij}(f_{i}-f_{j})^{2}\ge 0$$

Thus $L$ is positive semidefinite. Low-eigenvalue vectors vary slowly across strongly weighted edges. The constant vector has eigenvalue zero, and the multiplicity of zero equals the number of connected components.

Normalized alternatives include $L_{\mathrm{sym}}=I-D^{-1/2}WD^{-1/2}$ and random-walk $L_{\mathrm{rw}}=I-D^{-1}W$, assuming positive degrees. They respond differently to sampling density. State which operator and inner product an embedding uses.

## Spectral embeddings

Laplacian eigenmaps choose coordinates minimizing

$$\sum_{i,j}w_{ij}\lVert z_{i}-z_{j}\rVert^{2}$$

subject to constraints preventing the constant collapsed solution. A common generalized eigenproblem is

$$Lv=\lambda Dv$$

After excluding the constant eigenvector, the next eigenvectors supply embedding coordinates.

Diffusion maps instead study a Markov transition matrix derived from $W$. Diffusion distance compares rows of multi-step transition probabilities, so paths through many local connections can be close even when direct ambient distance is not.

Spectral convergence from a graph operator to a manifold Laplacian requires asymptotic regimes linking sample size and bandwidth, plus smoothness and density conditions. A finite graph eigenvector is exact for that graph; its interpretation as latent geometry is model-dependent.

## Geodesic approximation and Isomap

Isomap connects local neighbors, assigns edge lengths, computes graph shortest paths, and applies classical multidimensional scaling to those distances. The intended logic is:

1. short ambient chords approximate short manifold arcs;
2. chains of local edges approximate geodesic distances;
3. an embedding preserves those global distances as well as possible.

Sparse sampling can disconnect the graph. An edge between nearby folds can create a shortcut and collapse global geometry. Nonconvex manifolds may not admit a low-dimensional Euclidean embedding preserving all geodesic distances.

Always inspect graph components, neighborhood radii, shortcut sensitivity, and residual distortion. A method returning coordinates is not evidence its geometric premise held.

## Embeddings are not unique pictures

Rotations and reflections often leave an embedding objective unchanged. Eigenvectors can change sign; repeated eigenvalues permit rotations within an eigenspace. Comparing raw coordinates across runs can therefore be meaningless without alignment.

Two-dimensional visualization discards information unless the intrinsic structure is truly captured in two dimensions. Cluster separation can be exaggerated by axes, perplexity, neighborhood choice, or stochastic optimization. Use trustworthiness/continuity diagnostics, neighbor preservation, held-out reconstruction when defined, and stability across defensible settings.

An embedding does not explain why a cluster exists and does not validate labels. Batch, site, or acquisition conditions can dominate geometry.

## Couplings move probability mass

Let discrete source and target distributions have masses $a_{i}$ at $x_{i}$ and $b_{j}$ at $y_{j}$, with nonnegative masses summing to one. A **coupling** is a nonnegative matrix $\pi$ satisfying

$\sum_{j} \pi_{ij}=a_{i}$, $\sum_{i} \pi_{ij}=b_{j}$.

The row and column constraints are essential: $\pi_{ij}$ says how much source mass at $x_{i}$ travels to target location $y_{j}$. For cost $c_{ij}$, Kantorovich transport solves the linear program

$$\min_{\pi\ge 0} \sum_{i,j}c_{ij}\pi_{ij}$$

subject to those marginals.

Feasibility is automatic for probability vectors: the independent coupling $\pi_{ij}=a_{i} b_{j}$ has the required sums. It may not be optimal.

## A complete two-by-two transport problem


**Worked example.**
Put source masses $(0.75,0.25)$ at positions $(0,2)$ and target masses $(0.5,0.5)$ at $(1,3)$. Use absolute-distance cost

$$C=\begin{pmatrix}1&3\\1&1\end{pmatrix}$$

Let $\pi_{11}=t$. Marginal constraints force

$$\pi=\begin{pmatrix}t&0.75-t\\0.5-t&t-0.25\end{pmatrix}$$

Nonnegativity requires $0.25\le t\le 0.5$. The cost is

$$t+3(0.75-t)+(0.5-t)+(t-0.25)=2.5-2t$$

It is minimized at $t=0.5$, giving coupling

$$\begin{pmatrix}0.5&0.25\\0&0.25\end{pmatrix}$$

and cost $1.5$. Every row and column sum should be checked before interpreting the number.

## Wasserstein distance

On a metric space with distance $d$, the $p$-Wasserstein distance is

$$W_{p}(\mu,\nu)=[\inf_{\pi\in \Pi(\mu,\nu)} \int d(x,y)^{p} d\pi(x,y)]^{1/p}$$

for $p\ge 1$, when both distributions have finite $p$th moments. It compares distributions while respecting geometry of their support.

For $W_{1}$, Kantorovich–Rubinstein duality under standard Polish-space and moment hypotheses gives

$$W_{1}(\mu,\nu)=\sup_{\mathrm{Lip}(f)\le 1} |E_\mu f-E_\nu f|$$

This makes $W_{1}$ a worst-case discrepancy over one-Lipschitz tests. The ground metric determines what counts as a small move. Mixing age in years, income in dollars, and arbitrary category codes without defensible scaling creates a meaningless cost.

## Entropic regularization and Sinkhorn iteration

Entropic transport adds a term such as

$$\varepsilon\sum_{i,j}\pi_{ij}(\log \pi_{ij}-1)$$

to the transport objective. For $\varepsilon>0$ and positive kernel entries, the solution has a scaled form and Sinkhorn iteration alternately enforces row and column marginals.

Regularization makes computation smoother and often faster, but changes the objective: mass spreads more diffusely. Small $\varepsilon$ approaches unregularized transport while worsening numerical conditioning. Log-domain stabilization may be required.

Report marginal residuals, objective convention, $\varepsilon$, iteration tolerance, and whether a debiased Sinkhorn divergence rather than raw regularized cost is used.

## Geometry, shift, and nonclaims

Optimal transport is used to compare datasets, align domains, define barycenters, and build robust neighborhoods of distributions. A low feature-space transport cost does not show labels transfer. If $P(Y|X)$ changes, aligning $P(X)$ can worsen prediction.

Likewise, a manifold alignment can match acquisition artifacts instead of meaning. Domain adaptation needs assumptions such as covariate shift, shared conditional structure, overlap, or a task-informed cost. These assumptions should be falsified where possible, not hidden inside an embedding.

Transport plans are associations between masses, not causal maps between individuals. Individual identity and counterfactual outcomes are absent unless explicitly modeled.

## Exercises with worked answers

<a id="deep-dive-data-geometry-transport-ex-1"></a>

**Exercise 1.**

**1. Laplacian energy.** Show $f^{T}Lf=(1/2)\sum_{ij}w_{ij}(f_{i}-f_{j})^{2}$ for symmetric $W$.
<details>
<summary>Hint 1</summary>

Write the Laplacian as degree matrix minus weight matrix.
</details>
<details>
<summary>Hint 2</summary>

Expand the squared differences; symmetry pairs the two diagonal sums with the degree terms.
</details>
<details>
<summary>Solution</summary>

Expand the right side: half of $\sum_{ij}w_{ij}(f_{i}^{2}+f_{j}^{2}-2f_{i}f_{j})$. Symmetry makes the first two sums each $\sum_{i} d_{i} f_{i}^{2}$; the result is $f^{T}Df-f^{T}Wf=f^{T}Lf$.

</details>

<a id="deep-dive-data-geometry-transport-ex-2"></a>

**Exercise 2.**

**2. Zero eigenvectors.** Why is the constant vector in the kernel of $L$?
<details>
<summary>Hint 1</summary>

Apply the Laplacian to a vector whose entries are all one.
</details>
<details>
<summary>Hint 2</summary>

Each row’s degree equals its total edge weight, so the row sum cancels.
</details>
<details>
<summary>Solution</summary>

Each row of $D-W$ sums to $d_{i}-\sum_{j}w_{ij}=0$, so $L1=0$.

</details>

### Further practice

**3. Shortcut failure.** Two arms of a folded manifold pass close in ambient space but are far along the surface. What can a large neighborhood do?

**Answer.** It can connect the arms with a shortcut edge, making graph shortest paths much smaller than manifold geodesics and distorting Isomap or spectral geometry.

**4. Check a coupling.** Verify the optimal matrix in the worked example.

**Answer.** Row sums are $0.75,0.25$; column sums are $0.5,0.5$; all entries are nonnegative. Its cost is $0.5\cdot 1+0.25\cdot 3+0\cdot 1+0.25\cdot 1=1.5$.

**5. Independent coupling.** Prove $\pi_{ij}=a_{i}b_{j}$ has the required marginals.

**Answer.** $\sum_{j} a_{i}b_{j}=a_{i}\sum_{j}b_{j}=a_{i}$, and similarly each column sum is $b_{j}\sum_{i} a_{i}=b_{j}$.

**6. Scale warning.** Why can multiplying one feature by $1000$ alter both neighborhood and transport results?

**Answer.** Euclidean distances and ground costs become dominated by that coordinate, changing graph edges, weights, and transport choices. Scaling encodes which changes are expensive and must be justified from the task.

## Continue

Use [Structured Probabilistic Learning](#/books/structured-probabilistic-learning) for graph factorization and kernels, and the [trustworthy predictive recipe](recipe-trustworthy-predictive-model.md) for deployment-aware validation. Future shelves should separate topological data analysis, geometric measure theory, Gromov–Wasserstein comparison, unbalanced transport, statistical convergence rates, scalable nearest-neighbor search, and rigorous consistency theorems for each embedding family.
