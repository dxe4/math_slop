# Filter a finite list by a strict inequality

*Easy · [Foundations bridge](index.md)*

From the candidates $\{0,1,2,3,4,5,6\}$, return every integer x satisfying $2x + 1 < 8$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[0,1,2,3],"checker_scope":"Checks only the exact stated structured result; explanation quality and general proof mastery are not assessed."}}
```

<details>
<summary>Hint 1</summary>

First solve the real inequality, then restrict to the listed integers.

</details>

<details>
<summary>Hint 2</summary>

Subtract one and divide by positive two.

</details>

<details>
<summary>Worked solution</summary>

A real solution interval and a specified finite candidate set must both be respected.

1. The inequality becomes 2x &lt; 7, or $x < 7/2$.
2. The listed integers below $7/2$ are $0, 1, 2$ and $3$; return $\{0,1,2,3\}$.

</details>
