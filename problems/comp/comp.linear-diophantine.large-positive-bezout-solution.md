# Optimize along a Diophantine progression

*Medium · [Computational arithmetic problems](index.md)*

Among positive integers $x,y$ satisfying $11x-7y=1$ and $x+y\geq1000$, find the minimum possible value of $x+y$.

```answer
{"answer":{"kind":"integer","expected":"1013","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Find one positive solution and parameterize all integer solutions.

</details>

<details>
<summary>Hint 2</summary>

The sum then lies in one arithmetic progression, so locate its first allowed term.

</details>

<details>
<summary>Worked solution</summary>

A full solution parameterization makes the minimum a ceiling calculation.

1. One solution is $(2,3)$, and all integer solutions are $x=2+7t$, $y=3+11t$. Positivity requires $t\geq0$.
2. The sum is $5+18t$. The bound requires $t\geq\lceil995/18\rceil=56$.
3. The least sum is $5+18\cdot56=1013$, attained at $(394,619)$.

</details>
