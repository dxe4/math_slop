var e=`---
parent_id: book-structured-probabilistic-learning
chapter_id: exact-and-approximate-inference
title: "Exact and Approximate Inference"
level: graduate
estimated_minutes: 220
license: CC BY-SA 4.0
---

# Exact and Approximate Inference

## Purpose and prerequisites

This chapter develops algorithms for computing marginals, conditional probabilities, likelihoods, and most probable configurations in graphical models. Exact inference is tractable on trees and low-treewidth graphs; on general graphs, approximate methods are required. The chapter assumes familiarity with directed graphical models (Chapter 7), undirected models (Chapter 8), and basic probability. Gaussian process conditioning (Chapter 4) is a special case of the exact inference algorithms developed here.

## Variable elimination

**Definition (Variable elimination).** Given a factorized joint distribution and a query $p(x_{Q} \\mid x_{E})$ for query variables $Q$ and evidence $E$, variable elimination sums out nonquery, nonevidence variables in a chosen order. Each elimination step creates a new factor by multiplying all factors containing the eliminated variable and summing over its values.

The cost of variable elimination is exponential in the size of the largest intermediate factor, which depends on the elimination order and the graph structure. The **induced width** of an elimination order is the size of the largest clique in the triangulated graph minus one. Finding the optimal elimination order is NP-hard, but heuristics such as minimum fill-in work well in practice.

## Sum-product message passing on trees

On a tree-structured graph, exact marginals can be computed by passing messages from leaves to root and back. Each node sends a message to its neighbor after receiving messages from all its other neighbors.

**Definition (Sum-product message).** For an undirected edge $(i, j)$, the message from $i$ to $j$ is

$$m_{i \\to j}(x_{j}) = \\sum_{x_{i}} \\psi_i(x_i)\\,\\psi_{ij}(x_{i}, x_{j}) \\prod_{k \\in \\text{ne}(i) \\setminus \\{j\\}} m_{k \\to i}(x_{i}).$$

The marginal at node $j$ is proportional to the product of all incoming messages times the local potential:

$$p(x_{j}) \\propto \\psi_{j}(x_{j}) \\prod_{k \\in \\text{ne}(j)} m_{k \\to j}(x_{j}).$$

On trees, there is a unique path between any two nodes, so messages are passed exactly once in each direction. The number of messages is linear in the number of nodes; the total arithmetic cost is linear only when variable cardinalities and local factor sizes are bounded.

## Hidden Markov models and forward-backward

A hidden Markov model (HMM) is a chain-structured directed graphical model:

$$p(x_{1:T}, z_{1:T}) = p(z_{1}) \\prod_{t=1}^{T} p(x_{t} \\mid z_{t}) \\prod_{t=2}^{T} p(z_{t} \\mid z_{t-1}).$$

The forward-backward algorithm is sum-product message passing on this chain. The forward messages are

$$\\alpha_{t}(z_{t}) = p(x_{1:t}, z_{t}) = p(x_{t} \\mid z_{t}) \\sum_{z_{t-1}} p(z_{t} \\mid z_{t-1}) \\alpha_{t-1}(z_{t-1}),$$

and the backward messages are

$$\\beta_{t}(z_{t}) = p(x_{t+1:T} \\mid z_{t}) = \\sum_{z_{t+1}} p(x_{t+1} \\mid z_{t+1}) p(z_{t+1} \\mid z_{t}) \\beta_{t+1}(z_{t+1}).$$

The marginal $p(z_{t} \\mid x_{1:T})$ is proportional to $\\alpha_{t}(z_{t})\\beta_{t}(z_{t})$.

## Worked example: message passing on a chain

Consider a three-node chain $X_{1} - X_{2} - X_{3}$ with binary variables $\\{0, 1\\}$ and pairwise potentials:

$$\\psi_{12}(x_{1}, x_{2}) = \\begin{bmatrix} 2 & 1 \\\\ 1 & 2 \\end{bmatrix}, \\quad \\psi_{23}(x_{2}, x_{3}) = \\begin{bmatrix} 3 & 1 \\\\ 1 & 3 \\end{bmatrix}.$$

There are no unary potentials. The joint is $p(x_{1}, x_{2}, x_{3}) = \\frac{1}{Z}\\psi_{12}(x_{1}, x_{2})\\psi_{23}(x_{2}, x_{3})$.

Pass messages from $X_{1}$ to $X_{3}$:

$$m_{1 \\to 2}(x_{2}) = \\sum_{x_{1}} \\psi_{12}(x_{1}, x_{2}) = \\begin{cases} 2 + 1 = 3 & x_{2} = 0 \\\\ 1 + 2 = 3 & x_{2} = 1 \\end{cases} = (3, 3).$$

$$m_{2 \\to 3}(x_{3}) = \\sum_{x_{2}} \\psi_{23}(x_{2}, x_{3}) m_{1 \\to 2}(x_{2}) = \\begin{cases} 3 \\cdot 3 + 1 \\cdot 3 = 12 & x_{3} = 0 \\\\ 1 \\cdot 3 + 3 \\cdot 3 = 12 & x_{3} = 1 \\end{cases} = (12, 12).$$

Pass messages back from $X_{3}$ to $X_{1}$:

$$m_{3 \\to 2}(x_{2}) = \\sum_{x_{3}} \\psi_{23}(x_{2}, x_{3}) = \\begin{cases} 3 + 1 = 4 & x_{2} = 0 \\\\ 1 + 3 = 4 & x_{2} = 1 \\end{cases} = (4, 4).$$

$$m_{2 \\to 1}(x_{1}) = \\sum_{x_{2}} \\psi_{12}(x_{1}, x_{2}) m_{3 \\to 2}(x_{2}) = \\begin{cases} 2 \\cdot 4 + 1 \\cdot 4 = 12 & x_{1} = 0 \\\\ 1 \\cdot 4 + 2 \\cdot 4 = 12 & x_{1} = 1 \\end{cases} = (12, 12).$$

The marginals are:

$$p(x_{1}) \\propto m_{2 \\to 1}(x_{1}) = (12, 12) \\implies p(x_{1}) = (0.5, 0.5),$$
$$p(x_{2}) \\propto m_{1 \\to 2}(x_{2}) m_{3 \\to 2}(x_{2}) = (12, 12) \\implies p(x_{2}) = (0.5, 0.5),$$
$$p(x_{3}) \\propto m_{2 \\to 3}(x_{3}) = (12, 12) \\implies p(x_{3}) = (0.5, 0.5).$$

The partition function is $Z = 12 + 12 = 24$. Direct summation confirms: $\\sum_{x_{1}, x_{2}, x_{3}} \\psi_{12}(x_{1}, x_{2})\\psi_{23}(x_{2}, x_{3}) = 2 \\cdot 3 + 2 \\cdot 1 + 1 \\cdot 1 + 1 \\cdot 3 + 1 \\cdot 3 + 1 \\cdot 1 + 2 \\cdot 1 + 2 \\cdot 3 = 24$.

## Junction tree algorithm

For graphs with cycles, exact inference can be performed on a **junction tree** (also called a clique tree). The algorithm has three steps:

1. **Moralize** the graph (for directed models, connect parents and drop directions).
2. **Triangulate** by adding fill-in edges until every cycle of length at least four has a chord.
3. **Build a tree** whose nodes are maximal cliques of the triangulated graph, satisfying the running intersection property.

Inference on the junction tree uses a two-pass message passing scheme similar to sum-product on trees. For a chosen triangulation the cost is exponential in its largest clique size. The minimum possible largest-clique size over elimination orders is the graph's treewidth plus one; a heuristic triangulation can be wider.

## Approximate inference

When exact inference is intractable, two broad families of approximation are used:

**Monte Carlo methods** approximate expectations by sample averages:

$$\\mathbb{E}_{p}[f(X)] \\approx \\frac{1}{S}\\sum_{s=1}^{S} f(x^{(s)}),$$

where $x^{(s)} \\sim p$. For complex distributions, Markov chain Monte Carlo (MCMC) constructs a Markov chain whose stationary distribution is $p$. Diagnostics such as effective sample size, trace plots, and rank-based split-chain statistics can reveal problems, but finite diagnostics do not prove convergence.

**Variational inference** optimizes over a restricted family of distributions $q \\in \\mathcal{Q}$ to minimize the Kullback-Leibler divergence $\\text{KL}(q \\| p)$ or an equivalent objective. The mean-field approximation factorizes $q$ as a product of independent factors:

$$q(x) = \\prod_{i} q_{i}(x_{i}).$$

The optimization updates each $q_{i}$ while holding the others fixed, iterating until convergence. Variational inference is typically faster than MCMC but introduces approximation error from the restricted family and from optimization local optima.

## Common errors

- **Calling approximate inference exact because an objective converged.** Convergence of variational optimization or MCMC mixing does not imply that the approximation equals the true posterior.
- **Ignoring Monte Carlo diagnostics.** Samples from a poorly mixed chain are not representative of the target distribution. Effective sample size and trace plots must be examined.
- **Using loopy belief propagation without convergence checks.** On graphs with cycles, belief propagation is not guaranteed to converge or to be correct if it does converge.
- **Confusing treewidth with node count.** A graph with $100$ nodes and treewidth $2$ permits exact inference; a graph with $20$ nodes and treewidth $10$ may not.

## Practice exercises

**Exercise 9.1 (Message passing on a chain with evidence).** In the three-node chain example, suppose we observe $X_{2} = 0$. Compute the posterior marginals $p(x_{1} \\mid x_{2} = 0)$ and $p(x_{3} \\mid x_{2} = 0)$ by message passing.

**Solution.** With $X_{2} = 0$, the potential $\\psi_{12}(x_{1}, 0) = (2, 1)$ and $\\psi_{23}(0, x_{3}) = (3, 1)$. The message from $X_{1}$ to $X_{2}$ is still $m_{1 \\to 2}(0) = 3$, but now we condition:

$$p(x_{1} \\mid x_{2} = 0) \\propto \\psi_{12}(x_{1}, 0) = (2, 1) \\implies p(x_{1} = 0 \\mid x_{2} = 0) = \\frac{2}{3}, \\; p(x_{1} = 1 \\mid x_{2} = 0) = \\frac{1}{3}.$$

Similarly,

$$p(x_{3} \\mid x_{2} = 0) \\propto \\psi_{23}(0, x_{3}) = (3, 1) \\implies p(x_{3} = 0 \\mid x_{2} = 0) = \\frac{3}{4}, \\; p(x_{3} = 1 \\mid x_{2} = 0) = \\frac{1}{4}.$$

**Exercise 9.2 (HMM forward message).** Consider a two-state HMM with transition matrix $P = \\begin{bmatrix} 0.9 & 0.1 \\\\ 0.2 & 0.8 \\end{bmatrix}$ and emission probabilities $p(x_{t} = 0 \\mid z_{t} = 0) = 0.8$, $p(x_{t} = 0 \\mid z_{t} = 1) = 0.3$. The initial distribution is $\\pi = (0.5, 0.5)$. Compute the forward message $\\alpha_{1}(z_{1})$ after observing $x_{1} = 0$.

**Solution.** The forward message is

$$\\alpha_{1}(z_{1}) = p(x_{1} = 0 \\mid z_{1}) \\pi(z_{1}) = \\begin{cases} 0.8 \\cdot 0.5 = 0.4 & z_{1} = 0 \\\\ 0.3 \\cdot 0.5 = 0.15 & z_{1} = 1 \\end{cases}.$$

**Exercise 9.3 (Treewidth of a grid).** What is the treewidth of an $m \\times n$ grid graph? Why does this make exact inference difficult for large grids?

**Solution.** For $m,n\\ge2$, the treewidth of the $m\\times n$ grid is $\\min(m,n)$; a $1\\times n$ path has treewidth $1$ when $n>1$, and a single vertex has treewidth $0$. For a square grid the induced factor width grows linearly with its side length, so exact cost grows exponentially in that side length for fixed nontrivial state size. Actual feasibility depends on state cardinalities, factor structure, memory, and the elimination order.

**Exercise 9.4 (Variational mean-field for a simple model).** Consider $p(x_{1}, x_{2}) \\propto \\exp(J x_{1}x_{2})$ for $x_{1}, x_{2} \\in \\{-1, 1\\}$ with coupling $J > 0$. Under the mean-field approximation $q(x_{1}, x_{2}) = q_{1}(x_{1})q_{2}(x_{2})$, derive the update equations for $q_{1}$ and $q_{2}$ and find the fixed points for $J = 2$.

**Solution.** Let $\\mu_{1} = \\mathbb{E}_{q_{1}}[X_{1}]$ and $\\mu_{2} = \\mathbb{E}_{q_{2}}[X_{2}]$. The mean-field update for $q_{1}$ is

$$q_{1}(x_{1}) \\propto \\exp(J x_{1}\\mu_{2}),$$

so $\\mu_{1} = \\tanh(J\\mu_{2})$. Similarly, $\\mu_{2} = \\tanh(J\\mu_{1})$. Every fixed point has $\\mu_1=\\mu_2$: if $\\mu_1>\\mu_2$, strict monotonicity of $\\tanh$ would give $\\mu_2=\\tanh(J\\mu_1)>\\tanh(J\\mu_2)=\\mu_1$, a contradiction, and the reverse inequality fails symmetrically. For $J = 2$, fixed points therefore solve $\\mu = \\tanh(2\\mu)$, whose three roots are $0$ and approximately $\\pm0.9575$. The zero fixed point is unstable to nonzero perturbations, but an iteration initialized at exactly $(0,0)$ remains there. Generic small same-sign perturbations converge to a symmetry-broken fixed point, illustrating how initialization can select one variational mode.

## Summary and forward pointers

This chapter covered exact inference by variable elimination and message passing on trees and junction trees, and introduced Monte Carlo and variational approximations for intractable models. The choice of algorithm depends on graph structure, variable types, and accuracy requirements.

The next chapter, "Learning Graph Structure and Parameters," addresses the complementary problem of estimating models from data. Chapter 4, "Conditioning a Gaussian Process," can be viewed as exact inference in a Gaussian graphical model with a continuous, infinite-dimensional state space.
`;export{e as default};