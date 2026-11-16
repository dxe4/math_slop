var e=`---
parent_id: book-structured-probabilistic-learning
chapter_id: directed-graphical-models
title: "Directed Graphical Models"
level: graduate
estimated_minutes: 200
license: CC BY-SA 4.0
---

# Directed Graphical Models

## Purpose and prerequisites

This chapter introduces Bayesian networks, the directed acyclic graph (DAG) representation of joint probability distributions. DAGs encode factorization assumptions and imply conditional independences through graph separation. The chapter assumes familiarity with basic probability, conditional distributions, and the concept of conditional independence. Chapter 1 introduced the distinction between probabilistic models and point predictors; here we develop the structural language for models with many interacting variables.

## Definition and factorization

**Definition (Bayesian network).** A Bayesian network is a pair $(G, p)$ where $G = (V, E)$ is a directed acyclic graph with vertex set $V = \\{1, \\dots, d\\}$ and $p$ is a joint probability distribution over random variables $X_{1}, \\dots, X_{d}$ that factorizes as

$$p(x_{1}, \\dots, x_{d}) = \\prod_{j=1}^{d} p(x_{j} \\mid x_{\\text{pa}(j)}),$$

where $\\text{pa}(j)$ denotes the parents of node $j$ in $G$.

The factorization says that each variable is conditionally independent of its nondescendants given its parents. This is the **local Markov property**.

**Definition (Local Markov property).** In a Bayesian network, each node $X_{j}$ is conditionally independent of its nondescendants given its parents:

$$X_{j} \\perp\\!\\!\\perp \\text{Nd}(X_{j}) \\mid \\text{Pa}(X_{j}),$$

where $\\text{Nd}(X_{j})$ denotes the nondescendants of $X_{j}$.

## The three fundamental motifs

Three small graphs generate all conditional independence patterns in DAGs:

![Three DAG motifs. Conditioning on the middle node blocks chains and forks, but opens a collider path.](figures/dag-three-motifs.svg)

**Chain:** $A \\to B \\to C$. The factorization $p(a,b,c)=p(a)p(b\\mid a)p(c\\mid b)$ implies $A\\perp\\!\\!\\perp C\\mid B$. Marginal dependence is generic but not guaranteed without faithfulness; an edge can have a zero effect.

**Fork:** $A \\leftarrow B \\to C$. The factorization $p(a,b,c)=p(b)p(a\\mid b)p(c\\mid b)$ implies $A\\perp\\!\\!\\perp C\\mid B$. Sharing $B$ can create marginal dependence, and does so in faithful nondegenerate examples, but the DAG alone does not force it.

**Collider:** $A \\to B \\leftarrow C$. The factorization $p(a,b,c)=p(a)p(c)p(b\\mid a,c)$ implies marginal independence of $A$ and $C$. Conditioning on $B$ or a descendant opens the path, so dependence is then permitted and is present under faithfulness; it is not forced for every parameter choice.

**Example (Collider with coins).** Let $A$ and $C$ be independent fair coin flips, and let $B = 1[A = C]$ indicate whether they match. Marginally, $A$ and $C$ are independent. Given $B = 1$, knowing $A = \\text{heads}$ determines $C = \\text{heads}$; knowing $A = \\text{tails}$ determines $C = \\text{tails}$. Conditioning on the collider $B$ has created a dependence.

## d-separation

**Definition (d-separation).** A path between nodes $A$ and $C$ is blocked by a set of nodes $S$ if:

1. the path contains a chain $A \\to B \\to C$ or fork $A \\leftarrow B \\to C$ with $B \\in S$; or
2. the path contains a collider $A \\to B \\leftarrow C$ with $B \\notin S$ and no descendant of $B$ in $S$.

Two sets of nodes $A$ and $C$ are d-separated by $S$ if every path between them is blocked by $S$. If $A$ and $C$ are d-separated by $S$, then $A \\perp\\!\\!\\perp C \\mid S$ in every distribution that factorizes over the DAG.

The converse is not true without additional assumptions: d-separation implies conditional independence, but conditional independence does not always imply d-separation (faithfulness is required for the converse).

## Worked example: factorization and independence in a small DAG

Consider the DAG $X_{1} \\to X_{2} \\to X_{3} \\leftarrow X_{4}$ with $X_{1}$ and $X_{4}$ having no parents. The factorization is

$$p(x_{1}, x_{2}, x_{3}, x_{4}) = p(x_{1})p(x_{4})p(x_{2} \\mid x_{1})p(x_{3} \\mid x_{2}, x_{4}).$$

- $X_{1}$ and $X_{4}$ are independent because their path is blocked at the unconditioned collider $X_3$.
- $X_{1}$ and $X_{3}$ can be marginally dependent along the path $X_{1} \\to X_{2} \\to X_{3}$, and are dependent under faithfulness.
- $X_{1}$ and $X_{4}$ are still independent given $X_{2}$ (the path $X_{1} \\to X_{2} \\to X_{3} \\leftarrow X_{4}$ is blocked at the collider $X_{3}$).
- Given $X_3$ alone, the path is open, so dependence is permitted (and follows under faithfulness).
- Given both $X_2$ and $X_3$, the path is still blocked at the conditioned noncollider $X_2$, so $X_1\\perp\\!\\!\\perp X_4\\mid X_2,X_3$.

## From factorization to causal claims

A DAG can be used purely as a compact representation of a joint distribution. Giving the arrows a causal interpretation requires additional structure:

- A **causal model** specifies what happens under interventions.
- The **do-operator** $p(y \\mid \\text{do}(x))$ represents the distribution of $Y$ when $X$ is set to $x$ by an external intervention.
- **Observational equivalence:** several DAGs can encode the same conditional independences. Without additional assumptions, data alone cannot distinguish them.

**Example (Observational equivalence).** The DAGs $A \\to B \\to C$, $A \\leftarrow B \\to C$, and $A \\leftarrow B \\leftarrow C$ all imply $A \\perp\\!\\!\\perp C \\mid B$. They are observationally equivalent given only the conditional independences. Causal inference requires more: interventions, temporal information, or domain constraints.

## Common errors

- **Reading an absent DAG edge as marginal independence in every conditioning set.** Two nodes without a direct edge may still be dependent marginally or conditionally on other variables.
- **Conditioning on a collider and expecting independence.** Conditioning on a collider or its descendants can induce dependence between the parents, and does so under faithfulness; the graph alone does not force dependence for every parameter choice.
- **Reading probabilistic arrows as causal effects.** A Bayesian network factorization does not assert causation without a causal model.
- **Ignoring faithfulness and test power.** Exact parameter cancellations can create conditional independences absent from d-separation, violating faithfulness. Weak nonzero effects can instead be missed by a finite-sample test without creating a population independence.

## Practice exercises

**Exercise 7.1 (Factorization from DAG).** Write the factorization for the DAG $A \\to B \\leftarrow C \\to D \\leftarrow E$. Which variables are guaranteed independent by the local Markov property?

**Solution.** The factorization is $p(a, b, c, d, e) = p(a)p(c)p(e)p(b \\mid a, c)p(d \\mid c, e)$. By the local Markov property, $A$ is independent of $\\{C, D, E\\}$ given its parents (none), so $A \\perp\\!\\!\\perp C$, $A \\perp\\!\\!\\perp E$, and $A \\perp\\!\\!\\perp D \\mid C$. Similarly, $E$ is independent of $\\{A, B, C\\}$ given its parents (none).

**Exercise 7.2 (d-separation).** In the DAG $X_{1} \\to X_{2} \\leftarrow X_{3} \\to X_{4}$, are $X_{1}$ and $X_{4}$ d-separated by the empty set? By $\\{X_{2}\\}$? By $\\{X_{3}\\}$? By $\\{X_{2}, X_{3}\\}$?

**Solution.** With the empty set, the path is blocked at collider $X_2$, so the variables are d-separated. Given $X_2$, the path is open, so they are not d-separated; the graph permits dependence, and faithfulness would imply it. Given $X_3$, the conditioned noncollider blocks the path. Given both $X_2$ and $X_3$, $X_3$ still blocks it. D-separation gives the stated independences for every factorizing distribution; d-connection alone is not a dependence theorem.

**Exercise 7.3 (Collider bias in selection).** A study recruits participants only if they have high blood pressure ($B$) or high cholesterol ($C$). In the population, the binary indicators $B$ and $C$ are independent and each has probability strictly between $0$ and $1$. Show that among the recruited participants, $B$ and $C$ are negatively correlated.

**Solution.** Recruitment is conditioning on the collider $R = 1[B \\text{ high} \\lor C \\text{ high}]$. Given $R = 1$ (recruited), if $B$ is low then $C$ must be high, and vice versa. More explicitly, $P(B=0,C=0\\mid R=1)=0$ while both conditional marginals assign positive probability to $0$, so the conditional covariance is negative. This is a form of selection bias known as collider stratification.

**Exercise 7.4 (Observational equivalence class).** Draw the three DAGs on three nodes that are observationally equivalent to $A \\to B \\to C$. Explain why they cannot be distinguished by conditional independence tests alone.

**Solution.** The three DAGs are $A \\to B \\to C$, $A \\leftarrow B \\to C$, and $A \\leftarrow B \\leftarrow C$. All three imply $A \\perp\\!\\!\\perp C \\mid B$ and no other conditional independences among singletons. Since they encode the same set of conditional independences, any distribution faithful to one is faithful to all three. Distinguishing them requires causal assumptions or interventional data.

## Summary and forward pointers

This chapter defined Bayesian networks, stated the local Markov property, and introduced d-separation as a graph-theoretic criterion for conditional independence. The three fundamental motifs---chain, fork, and collider---generate all patterns. Causal interpretation requires additional structure beyond the DAG factorization.

The next chapter, "Undirected Models and Factors," treats the alternative undirected representation, where conditional independences are read from graph separation rather than directed paths. Chapter 9, "Exact and Approximate Inference," develops algorithms for computing with both directed and undirected models.
`;export{e as default};