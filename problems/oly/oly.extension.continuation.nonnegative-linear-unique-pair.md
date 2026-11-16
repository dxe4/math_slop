# Combine a congruence with a sign bound

*Medium · [Original olympiad-style problems](index.md)*

Find the nonnegative integer pair $(x,y)$ satisfying $7x+11y=100$. Enter $[x,y]$.

```answer
{"answer":{"kind":"vector","expected":["8","4"],"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Reduce the equation modulo seven.

</details>

<details>
<summary>Hint 2</summary>

Nonnegativity bounds $y$ between zero and nine.

</details>

<details>
<summary>Worked solution</summary>

Use the residue class to isolate one bounded possibility.

1. Modulo seven, $4y\equiv2$, so $y\equiv4\pmod7$.
2. The bound $0\le11y\le100$ gives $0\le y\le9$, leaving only $y=4$.
3. Then $7x=56$, so $x=8$. Both values are nonnegative and satisfy the original equation.

</details>
