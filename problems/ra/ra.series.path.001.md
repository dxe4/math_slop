# Evaluate a geometric series from its first index

*Medium · [Real analysis](index.md)*

Find the sum of Σ from $k=1$ to infinity of $3/4^k$. You may use the finite geometric sum identity and that $4^{-n}\to 0$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":1},"checker_scope":"Checks only the requested structured calculation or statement recognition. Open reasoning is unassessed, and correctness does not certify an unrestricted proof or mastery of the complete skill."}}
```

<details>
<summary>Hint 1</summary>

The first term is $3/4$ and the common ratio is $1/4$.

</details>

<details>
<summary>Hint 2</summary>

Either use the geometric sum or telescope consecutive powers.

</details>

<details>
<summary>Worked solution</summary>

The infinite sum is the limit of an explicitly controlled partial-sum sequence.

1. The nth partial sum is $(3/4) (1-4^{-n})/(1-1/4)=1-4^{-n}$.
2. Taking $n\to \infty$ gives the series sum $1$.

</details>
