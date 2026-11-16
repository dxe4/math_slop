# Complete a polynomial step

*Medium · [Combinatorics](index.md)*

Let b0=$1$ and $b_{n}=b_{n-1}+2n-1$ for $n\geq 1$. Assume $b_{k}=k^{2}+1$ for arbitrary $k\geq 0$. After applying the recurrence, write b\_(k+1)=k²+Lk+C. Enter L and C.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"L":2,"C":2},"checker_scope":"Exact algebraic coefficients in one supplied induction step; the full proof is not submitted or certified."}}
```

<details>
<summary>Hint 1</summary>

At the next index the added term is $2$($k+1$)$-1$.

</details>

<details>
<summary>Hint 2</summary>

Collect the coefficient of k and the constants separately.

</details>

<details>
<summary>Worked solution</summary>

Correct index substitution is part of an induction step.

1. Substitution gives $k^{2}+1+2$($k+1$)$-1$.
2. Simplify to k²+2k+2, so $L=2$ and $C=2$; this equals $(k+1)^{2}+1$.

</details>
