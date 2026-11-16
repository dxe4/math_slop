# Variance after a nonlinear transformation

*Medium · [Probability problems](index.md)*

Let $X$ be uniform on $\{-1,0,1\}$. Find $\operatorname{Var}(X^2)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":2,"denominator":9},"checker_scope":"Exact answer for the stated probability model only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

First determine the distribution of the squared variable.

</details>

<details>
<summary>Hint 2</summary>

Two support points can merge into one transformed value.

</details>

<details>
<summary>Worked solution</summary>

The squared variable is an indicator with a probability determined by the original law.

1. $X^2=1$ when $X=1$ or $-1$, with total probability $2/3$, and is zero otherwise.
2. Therefore $E[X^2]=2/3$ and $E[X^4]=2/3$.
3. The requested variance is $2/3-(2/3)^2=2/9$.

</details>
