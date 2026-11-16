# Find the unique nonnegative solution using a congruence

*Hard · [Number theory](index.md)*

Find all nonnegative integer solutions of $7x+11y=100$. There is exactly one; return its ordered vector (x,y).

```answer
{"answer":{"kind":"vector","expected":["8","4"],"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Nonnegativity bounds y before any enumeration.

</details>

<details>
<summary>Hint 2</summary>

Reduce the equation modulo seven to restrict y further.

</details>

<details>
<summary>Worked solution</summary>

A congruence and a finite bound identify the feasible integer point.

1. The bound is $0\le y\le9$. Modulo seven, $4y\equiv2$, giving y congruent to four.
2. Only y=4 lies in the bound with that residue.
3. Substitution gives $7x=56$, so x=8; the pair $(8,4)$ satisfies the original equation.

</details>
