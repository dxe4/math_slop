# Exact optimal slope design, including odd sample sizes

*Hard · [Statistics and probability](index.md)*

In independent homoskedastic straight-line regression with an intercept, choose $n\ge2$ predictor values $x_i\in[-1,1]$. Error variance is $\sigma^2>0$. You may use $\operatorname{Var}(\widehat\beta_1)=\sigma^2/\sum_i(x_i-\overline x)^2$ when the design has full rank. Determine and prove the exact smallest possible slope variance for both even and odd $n$, and describe all optimizing designs up to permutation.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and task-specific rubric reflection only; no automatic correctness verdict or required checkpoint evidence."}}
```

<details>
<summary>Hint 1</summary>

Maximizing the denominator is a bounded design problem; rewrite it using the predictor sum and sum of squares.

</details>

<details>
<summary>Hint 2</summary>

Vary one coordinate while fixing the others, then examine the possible sums at designs supported on the endpoints.

</details>

<details>
<summary>Model proof</summary>

Coordinatewise strict convexity reduces the design problem to endpoint allocations, where parity matters.

1. Write $S(x)=\sum_i x_i^2-(\sum_i x_i)^2/n$. With all other coordinates fixed, it is a strictly convex quadratic in $x_i$, with coefficient $1-1/n>0$. An interior coordinate cannot maximize it on $[-1,1]$.
2. A maximum exists on the compact cube. The coordinate argument shows every maximizing design uses only $-1$ and $1$. If $k$ values are $1$, then $\sum_i x_i=2k-n$ and $S=n-(2k-n)^2/n$.
3. For even $n$, the unique optimizing count is $k=n/2$, giving $S=n$ and minimum variance $\sigma^2/n$.
4. For odd $n$, the optimizing counts are $k=(n-1)/2$ and $k=(n+1)/2$, giving $S=n-1/n$ and minimum variance $n\sigma^2/(n^2-1)$.
5. Each optimum uses both endpoints, so the intercept and predictor columns are independent. Strict convexity excludes any maximizing interior coordinate; the count analysis therefore describes all optimizers, up to permutation.

**Self-assessment rubric**

- Prove that a maximizing design must use only endpoints.
- Optimize the endpoint counts separately for each parity.
- Translate the optimum denominator into slope variance and verify full rank.

</details>
