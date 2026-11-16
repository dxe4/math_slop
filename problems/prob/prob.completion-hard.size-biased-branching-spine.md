# Construct a size-biased branching law with an immortal spine

*Hard · [Probability problems](index.md)*

A Galton--Watson tree starts from one ancestor and has offspring probabilities $(p_k)_{k\ge0}$ with finite mean $m>0$. Let $Z_n$ be generation size and $\mathcal F_n$ the tree through generation $n$. Define $Q_n(A)=E_P[Z_n\mathbf1_A]/m^n$ for $A\in\mathcal F_n$. Prove consistency, and construct one infinite-tree law with these finite restrictions using a distinguished spine. Specify the offspring law and child choice on the spine and prove the unmarked finite-tree density. In the nondegenerate critical finite-variance case, derive $E_QZ_n$ and explain why this change of law is singular from $P$ on infinite survival. You may use almost-sure extinction of a nondegenerate critical Galton--Watson process.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

The normalised generation size is a nonnegative martingale. Size-biasing offspring must then select one continuing child.

</details>

<details>
<summary>Hint 2</summary>

For a fixed finite tree and a fixed possible spine endpoint, telescope the local likelihood factors; then forget the marked endpoint.

</details>

<details>
<summary>Model proof</summary>

The generation-size likelihood is realised by biasing one ancestral line rather than every individual.

1. $E[Z_{n+1}\mid\mathcal F_n]=mZ_n$, so $E[Z_n/m^n]=1$ and $E[Z_{n+1}/m^{n+1}\mid\mathcal F_n]=Z_n/m^n$. This proves normalisation and consistency of $Q_n$.
2. Construct a marked tree by giving every spine individual size-biased offspring law $\widehat p_k=kp_k/m$, which has no mass at zero. Choose one of its $k$ children uniformly as the next spine individual. All nonspine individuals reproduce independently with law $(p_k)$. Independent draws along the infinite spine and its side branches define the marked infinite tree.
3. For a finite tree through level $n$ and one marked endpoint in generation $n$, each spine reproduction contributes a density factor $(kp_k/m)(1/k)/p_k=1/m$ against the ordinary unmarked reproduction probability. The product along its $n$ ancestors is $m^{-n}$. Summing over the $Z_n$ possible endpoints gives unmarked density $Z_n/m^n$, so this construction realises all $Q_n$. Zero-probability ordinary trees need no density calculation.
4. If $m=1$ and offspring variance is $\sigma^2\in(0,\infty)$, conditional variance gives $E_PZ_{n+1}^2=E_PZ_n^2+\sigma^2E_PZ_n=E_PZ_n^2+\sigma^2$. Since $Z_0=1$, $E_PZ_n^2=1+n\sigma^2$ and $E_QZ_n=E_PZ_n^2=1+n\sigma^2$.
5. The constructed spine ensures $Z_n\ge1$ for every $n$ under $Q$. Under the stated ordinary critical extinction fact, infinite survival has $P$-probability zero. Hence the infinite-tree laws are singular even though each finite restriction of $Q$ is absolutely continuous with the displayed density. Finite-level absolute continuity is not an infinite-level equivalence claim.

**Self-assessment rubric**

- Normalise the finite changes of law and prove their restrictions agree.
- Specify size-biased offspring, uniform child continuation and ordinary side branches.
- Derive the likelihood per marked endpoint and sum over endpoints.
- Compute the critical mean under the new law and distinguish finite from infinite absolute continuity.

</details>
