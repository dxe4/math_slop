# Select the numbers to the left

*Easy · [Foundations bridge](index.md)*

From the listed set $\{-7,-2,0,3\}$, return every number strictly less than $-2$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[-7],"checker_scope":"Checks only the exact stated structured result; explanation quality and general proof mastery are not assessed."}}
```

<details>
<summary>Hint 1</summary>

Smaller coordinates lie farther left.

</details>

<details>
<summary>Hint 2</summary>

A strict inequality excludes the boundary itself.

</details>

<details>
<summary>Worked solution</summary>

Signed order and absolute size answer different questions.

1. Among the listed numbers, only $-7$ lies to the left of −2.
2. The requested set is $\{-7\}$; $-2$ is excluded because the inequality is strict.

</details>
