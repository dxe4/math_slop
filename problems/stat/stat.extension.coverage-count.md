# Coverage count

*Easy · [Statistics and probability](index.md)*

A confidence procedure covers a fixed parameter $\theta$ for $18$ of the $20$ equally likely possible samples. What is its exact coverage probability?

```answer
{"answer":{"kind":"rational","expected":{"numerator":9,"denominator":10},"checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Identify the event whose probability defines coverage.

</details>

<details>
<summary>Hint 2</summary>

For equally likely samples, divide the number of covering samples by the total number of samples.

</details>

<details>
<summary>Worked solution</summary>

Coverage measures the sampling probability of including the fixed parameter.

1. Let $A=\{x:\theta\in C(x)\}$. The parameter stays fixed while the sample varies.
2. Each possible sample has probability $1/20$, and exactly $18$ belong to $A$.
3. Therefore $P_\theta\{\theta\in C(X)\}=18/20=9/10$. This is a property of the procedure before seeing the sample.

</details>
