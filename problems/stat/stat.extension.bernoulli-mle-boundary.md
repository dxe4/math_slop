# Bernoulli mle boundary

*Medium · [Statistics and probability](index.md)*

Let $n\ge1$ independent $\operatorname{Bernoulli}(p)$ observations have $k$ successes, where $0\le k\le n$. Over $p\in[0,1]$, prove the likelihood has its unique maximum at $p=k/n$, including the data cases $k=0$ and $k=n$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Treat interior datasets with both successes and failures using the log likelihood.

</details>

<details>
<summary>Hint 2</summary>

For all-failure or all-success datasets, use the likelihood itself at the boundary rather than undefined logarithms.

</details>

<details>
<summary>Model proof</summary>

Analyze the interior score and then the two monotone boundary cases.

1. For $0<k<n$, the ordered-data likelihood is $p^k(1-p)^{n-k}$. It is positive in the interior and zero at both endpoints.
2. Its interior log derivative is $k/p-(n-k)/(1-p)=(k-np)/[p(1-p)]$. Since the denominator is positive, the likelihood increases until $p=k/n$ and decreases afterwards.
3. It therefore has a unique global maximum at $p=k/n$ for these datasets.
4. For $k=0$ the likelihood is $(1-p)^n$, strictly decreasing on $[0,1]$, with unique maximum at zero. For $k=n$ it is $p^n$, strictly increasing, with unique maximum at one. These formulas avoid assigning a logarithm to zero.

**Self-assessment rubric**

- Write the likelihood and derive the interior score.
- Use the derivative sign and endpoint likelihoods to prove global uniqueness.
- Handle both extreme datasets directly on the closed parameter interval.

</details>
