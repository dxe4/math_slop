# Interval union bound

*Easy · [Statistics and probability](index.md)*

Two confidence intervals fail to cover their respective fixed parameters with probabilities at most $1/20$ each. Without assuming independence, what upper bound does the union bound give for the probability that at least one interval fails?

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":10},"checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Simultaneous coverage fails if at least one noncoverage event occurs.

</details>

<details>
<summary>Hint 2</summary>

Bound the probability of the union by the sum of the two individual bounds.

</details>

<details>
<summary>Worked solution</summary>

Bound failure of simultaneous coverage by a union, not an intersection.

1. Let $F_j=\{\theta_j\notin C_j(X)\}$ for $j=1,2$.
2. The event of at least one failure is $F_1\cup F_2$, so $P(F_1\cup F_2)\le P(F_1)+P(F_2)$.
3. The bound is $1/20+1/20=1/10$. Equivalently, simultaneous coverage is at least $9/10$; neither equality nor independence is asserted.

</details>
