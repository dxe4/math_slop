# Prove functional negative association beyond pairwise covariance

*Hard · [Probability problems](index.md)*

Choose a uniform $k$-subset of $\{1,\ldots,n\}$, $0\le k\le n$, and let $X_i$ be its membership indicators. For disjoint coordinate sets $I,J$ and arbitrary coordinatewise nondecreasing real functions $f(X_I),g(X_J)$, prove $\operatorname{Cov}(f(X_I),g(X_J))\le0$. Give a coupling proof of the monotonicities you use; pairwise indicator covariances alone do not establish this claim.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft with task-specific semantic rubric; no automatic correctness verdict or checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Condition on the number of chosen coordinates in $I$. The selected subset inside $I$ and the remaining subset then have separate uniform laws.

</details>

<details>
<summary>Hint 2</summary>

Couple uniform subsets of different sizes using initial segments of one uniform ordering. Compare an increasing and a decreasing function of the same count.

</details>

<details>
<summary>Model proof</summary>

Conditioning on one block count creates opposite monotonicities, reducing the functional claim to a one-dimensional covariance identity.

1. Write $A=\sum_{i\in I}X_i$. Given $A=a$, the subset inside $I$ is uniform of size $a$, the subset in $I^c$ is uniform of size $k-a$, and these choices are independent. Thus the conditional covariance of $f(X_I)$ and $g(X_J)$ is zero, and the total covariance is $\operatorname{Cov}(F(A),G(A))$ with $F(a)=E[f(X_I)\mid A=a]$, $G(a)=E[g(X_J)\mid A=a]$.
2. For feasible counts $a<b$, take one uniform ordering of $I$ and use its first $a$ or $b$ elements. These are the corresponding uniform subsets and are nested, so coordinatewise monotonicity gives $F(a)\le F(b)$.
3. Similarly a uniform ordering of $I^c$ couples its first $k-b$ and first $k-a$ elements as nested uniform subsets. Restricting to $J$ preserves inclusion, so $G(a)\ge G(b)$. These arguments cover every feasible count, including deterministic endpoint cases.
4. For an independent copy $A^{\prime}$, $2\operatorname{Cov}(F(A),G(A))=E[(F(A)-F(A^{\prime}))(G(A)-G(A^{\prime}))]\le0$, because the two differences always have opposite signs. The functions are bounded on their finite domains, so all expectations exist. This proves the full disjoint-block assertion.

**Self-assessment rubric**

- Derive independent uniform subset laws after conditioning on the block count.
- Prove the two opposite monotonicities by explicit couplings.
- Use the independent-copy identity to prove the functional covariance bound.

</details>
