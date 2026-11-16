# Count positive solutions on a line

*Medium · [Computational arithmetic problems](index.md)*

How many ordered pairs of positive integers $(a,b)$ satisfy $3a+5b=1000$?

```answer
{"answer":{"kind":"integer","expected":"66","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Reduce the equation modulo three to restrict $b$.

</details>

<details>
<summary>Hint 2</summary>

Use positivity of $a$ to bound the resulting progression.

</details>

<details>
<summary>Worked solution</summary>

A congruence parameterization converts the equation into a bounded integer parameter.

1. Modulo three, $2b\equiv1$, so $b=2+3t$.
2. Then $a=330-5t$. Positivity of both coordinates gives $0\leq t\leq65$.
3. The number of integer parameters is $66$.

</details>
