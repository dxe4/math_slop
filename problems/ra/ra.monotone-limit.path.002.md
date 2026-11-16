# Solve the limiting equation of a bounded recurrence

*Easy · [Real analysis](index.md)*

Let $a_{1}=0$ and a\_{$n+1$}=$(a_{n}+6)/2$. You are given a proof that the sequence is nondecreasing and $0\leq a_{n}\leq 6$. Monotone convergence therefore supplies a finite limit L. Use the valid affine limit law $L=(L+6)/2$ to determine L.

```answer
{"answer":{"kind":"rational","expected":{"numerator":6,"denominator":1},"checker_scope":"Checks only the requested structured calculation or statement recognition. Open reasoning is unassessed, and correctness does not certify an unrestricted proof or mastery of the complete skill."}}
```

<details>
<summary>Hint 1</summary>

The supplied monotonicity and bound establish existence before you solve the limiting equation.

</details>

<details>
<summary>Hint 2</summary>

Multiply the limiting equation by $2$ and isolate L.

</details>

<details>
<summary>Worked solution</summary>

First justify convergence, then use a recurrence to identify the limit.

1. The hypotheses guarantee that a finite limit exists.
2. From $2L=L+6$ we obtain $L=6$. The limiting equation alone would not have established convergence.

</details>
