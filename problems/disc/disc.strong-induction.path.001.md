# Cover a subtract-three step

*Medium · [Discrete mathematics](index.md)*

A strong-induction argument represents totals $n\geq 8$ using $3$-unit and $5$-unit stamps. Its step begins at $n\geq 11$ by representing $n-3$ then adding $3$. List the requested base totals that this scheme must check separately.

```answer
{"answer":{"kind":"finite_integer_set","expected":[8,9,10],"checker_scope":"Checks only this authored identify-subtraction-bases task. Does not certify unrestricted proof validity, general construction ability or full mastery of strong induction."}}
```

<details>
<summary>Hint 1</summary>

The step does not handle totals below $11$.

</details>

<details>
<summary>Hint 2</summary>

List those totals within the requested domain.

</details>

<details>
<summary>Worked solution</summary>

Strong induction permits all earlier cases in the proven domain. Lookback dependencies determine the needed initial block.

1. The base block is $\{8,9,10\}$. They are $3+5, 3+3+3$ and $5+5$.
2. For $n\geq 11, n-3\geq 8$ is earlier and already covered.

</details>
