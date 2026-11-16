# Continuity at a point: identify discontinuity

*Medium · [Calculus](index.md)*

Suppose $f(x)=3$ for every real $x\neq4$, and $f(4)=7$. Return $\lim_{x\to4}f(x)$ in the field limit and $f(4)$ in the field point\_value. Compare the two values when deciding continuity at $4$.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"limit":"3","point_value":"7"},"checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

A punctured-neighbourhood limit uses the values away from the point.

</details>

<details>
<summary>Hint 2</summary>

Evaluate the point value from its separately supplied definition.

</details>

<details>
<summary>Worked solution</summary>

Continuity compares the nearby limit with the actual point value.

1. At every input different from $4$, the function equals $3$, so its limit at $4$ is $3$.
2. The separately assigned point value is $f(4)=7$.
3. The two values differ, so $f$ is not continuous at $4$.

</details>
