
# Learning Graph Structure and Parameters

## Purpose and prerequisites

This chapter addresses the problem of estimating graphical models from data. With a fixed graph, parameter estimation reduces to standard likelihood-based or Bayesian inference. Structure learning---estimating the graph itself---is harder because the space of graphs grows super-exponentially with the number of nodes. The chapter assumes familiarity with directed graphical models (Chapter 7), undirected models (Chapter 8), and exact and approximate inference (Chapter 9).

## Parameter estimation with a fixed graph

**Definition (Maximum likelihood estimation for Bayesian networks).** Given a DAG $G$ and data $\mathcal{D} = \{x^{(1)}, \dots, x^{(n)}\}$, the maximum likelihood estimate of the conditional probability tables is

$$\hat{p}(x_{j} \mid x_{\text{pa}(j)}) = \frac{\text{count}(x_{j}, x_{\text{pa}(j)})}{\text{count}(x_{\text{pa}(j)})}.$$

This ratio is defined only for parent configurations observed at least once. An unobserved configuration leaves the unrestricted maximum likelihood conditional unidentified; pseudocounts or a Bayesian prior provide one explicit smoothing convention.

For Gaussian Bayesian networks, the parameters are the linear coefficients and noise variances in each local conditional distribution. The maximum likelihood estimates are obtained by ordinary least squares regression of each node on its parents.

For general nondecomposable undirected models, maximum likelihood estimation requires the partition function $Z(\theta)$ and its gradient, which involves inference. Directed models with locally normalized conditionals often avoid that global calculation, though their own local models and latent variables can still be computationally demanding.

## Structure learning: scores and constraints

Structure learning methods fall into two categories:

**Constraint-based methods** use conditional independence tests to determine which edges must exist or must be absent. The PC algorithm is a prominent example: it starts with a fully connected graph and removes edges when a conditional independence is found.

**Score-based methods** assign a score to each candidate graph and search for the graph with the highest score. Common scores include:

- **Bayesian Information Criterion (BIC):** $\text{BIC}(G) = \log p(\mathcal{D} \mid \hat{\theta}_{G}) - \frac{d_{G}}{2}\log n$, where $d_{G}$ is the number of parameters in graph $G$.
- **Bayesian Dirichlet equivalent (BDe):** A Bayesian marginal likelihood score for discrete Bayesian networks.

The graph space grows super-exponentially: there are $2^{\binom{d}{2}}$ undirected graphs on $d$ nodes, and the number of DAGs grows even faster. Exhaustive-search feasibility depends on graph class, score decomposability, pruning, and hardware; there is no stable dimension cutoff. Greedy search, hill-climbing, and dynamic programming on restricted graph families are common approaches.

## The PC algorithm

The PC algorithm learns a CPDAG (completed partially directed acyclic graph) representing a Markov equivalence class:

1. **Skeleton search:** Start with a complete undirected graph. For each pair $(i, j)$, test whether $X_{i} \perp\!\!\perp X_{j} \mid S$ for subsets $S$ of increasing size. If independence is found, remove the edge $(i, j)$.
2. **Orientation:** For unshielded triples $i - k - j$ where $i$ and $j$ are not adjacent, orient $i \to k \leftarrow j$ if $k$ was not in the separating set for $(i, j)$.
3. **Propagation:** Apply orientation rules to avoid cycles and additional v-structures.

The algorithm assumes faithfulness and correct conditional independence tests. In practice, finite-sample errors in independence tests and multiple testing issues affect performance.

## Worked example: structure learning on four variables

Consider four variables $X_{1}, X_{2}, X_{3}, X_{4}$ with the true DAG $X_{1} \to X_{2} \to X_{3} \leftarrow X_{4}$. The true conditional independences are:

- $X_{1} \perp\!\!\perp X_{4}$ (the collider $X_3$ blocks the only path)
- $X_{1} \perp\!\!\perp X_{3} \mid X_{2}$ (on the chain)
- $X_{2} \perp\!\!\perp X_{4}$ (the collider $X_3$ is unconditioned)

Suppose oracle conditional-independence tests identify the population relations. The skeleton has edges $(1,2),(2,3),(3,4)$. Because $X_3$ is absent from a separating set for $X_2$ and $X_4$, the unshielded triple is oriented $X_2\to X_3\leftarrow X_4$. Propagation then leaves the first edge unoriented, giving the CPDAG $X_1-X_2\to X_3\leftarrow X_4$.

## Common errors and pitfalls

- **Using the same data for structure learning and parameter inference without accounting for selection.** If a graph is selected on the same data used for uncertainty statements, the statements are optimistic. Treat them as exploratory or use hold-out data for structure learning.
- **Assuming faithfulness.** Exact cancellations or degenerate parameters can create population conditional independences not reflected by d-separation. Weak effects create a different problem: finite tests may have low power even when faithfulness holds.
- **Ignoring hidden variables.** A sparse graph over observed variables may be misleading if important confounders are unobserved.
- **Confusing correlation with conditional independence.** A test with insufficient power may fail to reject an independence null and remove a true adjacency. Multiple testing and false rejections can instead retain or create spurious adjacencies, depending on the algorithm.
- **Treating a learned graph as causal without justification.** Structure learning identifies conditional independence structure, not causal structure. Causal claims require additional assumptions.

## Practice exercises

**Exercise 10.1 (BIC score comparison).** Consider binary DAGs $G_1:X_1\to X_2\to X_3$ and $G_2:X_1\to X_2\leftarrow X_3$. Count their free conditional-probability parameters. In terms of maximized log likelihoods $\ell_1,\ell_2$, when does BIC prefer $G_1$?

**Solution.** A binary node with $r$ binary parents contributes $2^r$ free Bernoulli parameters. Thus $G_1$ has $1+2+2=5$ parameters, while $G_2$ has $1+1+4=6$. With the chapter's convention $\operatorname{BIC}=\ell-(d/2)\log n$, BIC prefers $G_1$ exactly when

$$\ell_1-\ell_2>-\tfrac12\log n.$$

**Exercise 10.2 (Weak dependence under faithfulness).** Construct a distribution over three variables $X_{1}, X_{2}, X_{3}$ that is faithful to the DAG $X_{1} \to X_{2} \to X_{3}$ but where $X_{1}$ and $X_{3}$ are nearly independent marginally.

**Solution.** Let $X_1,\varepsilon_2,\varepsilon_3$ be independent standard normals and set

$$X_2=0.1X_1+\varepsilon_2,\qquad X_3=0.1X_2+\varepsilon_3.$$

This linear Gaussian distribution is faithful to the chain because both edge coefficients are nonzero and the noises are nondegenerate. Yet $\operatorname{Cov}(X_1,X_3)=0.01$, so the marginal association can be made arbitrarily weak by replacing $0.1$ with a smaller nonzero coefficient. “Nearly independent” here means weak dependence, not exact independence.

**Exercise 10.3 (Hidden variable bias).** Suppose the true DAG is $X \leftarrow H \to Y$ with hidden $H$, we observe only $X$ and $Y$, and their marginal dependence is nonzero (as in a faithful nondegenerate model). What structure will constraint-based methods learn, and why is it misleading?

**Solution.** Since $H$ is hidden, the observed marginal dependence between $X$ and $Y$ will lead constraint-based methods to include an edge $X - Y$. The learned graph suggests a direct association, but the true relationship is entirely due to the common cause $H$. This is the classic confounding problem. No amount of conditional independence testing on $\{X, Y\}$ alone can distinguish $X \leftarrow H \to Y$ from $X \to Y$ or $X \leftarrow Y$.

**Exercise 10.4 (Greedy search local optimum).** Consider a score-based search over DAGs on four variables. A greedy hill-climbing algorithm starts with the empty graph and adds the edge that most improves the BIC score. Explain why this can get stuck in a local optimum.

**Solution.** The BIC score landscape over DAGs is multimodal. Adding a single edge may not improve the score if the benefit in likelihood is outweighed by the complexity penalty. However, adding two edges together might yield a substantial improvement that is not reachable by adding either edge individually. Greedy hill-climbing cannot escape such local optima without edge reversals, removals, or random restarts.

## Summary and forward pointers

This chapter covered parameter estimation with fixed graphs and the harder problem of learning graph structure from data. Constraint-based methods rely on conditional independence tests; score-based methods search a vast space with heuristic optimization. Both approaches are subject to finite-sample errors, faithfulness violations, and hidden variable bias.

This concludes Part II, "Graphs and Inference." The book began with kernels and Gaussian processes (Part I), developed graphical models and inference algorithms (Part II), and has now covered the fundamentals of learning structure. Future chapters in a complete volume would develop sparse Gaussian processes, exponential families, causal graphical models, and probabilistic programming in greater depth.
