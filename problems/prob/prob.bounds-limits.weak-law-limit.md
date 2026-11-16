# A finite-variance law of large numbers

*Medium · [Probability problems](index.md)*

Let $X_1,X_2,\ldots$ be independent identically distributed real variables with mean $\mu$ and finite variance. For fixed $\varepsilon>0$, find $\lim_{n\to\infty}P(|n^{-1}\sum_{j=1}^nX_j-\mu|\ge\varepsilon)$.

```answer
{"answer":{"kind":"integer","expected":0,"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The variance of an average decreases with sample size under the stated independence assumption.

</details>

<details>
<summary>Hint 2</summary>

Use a nonnegative upper bound that tends to zero.

</details>

<details>
<summary>Worked solution</summary>

Chebyshev and a variance calculation squeeze the tail probability to zero.

1. Write the common variance as $\sigma^2<\infty$. The sample mean has mean $\mu$ and variance $\sigma^2/n$.
2. Chebyshev bounds the displayed probability by $\sigma^2/(n\varepsilon^2)$.
3. The probability is nonnegative and this bound tends to zero, so the limit is $0$.

</details>
