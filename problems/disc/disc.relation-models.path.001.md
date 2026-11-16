# Read arrows from one

*Easy · [Discrete mathematics](index.md)*

On $\{1,2,3\}, R$ contains exactly $(1,1),(1,2),(2,3)$. Draw (a,b) as a→b. Give the outgoing neighbors of $1$, including loop destinations.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,2],"checker_scope":"Checks only this authored read-relation-outgoing-set task. Does not certify unrestricted proof validity, general construction ability or full mastery of relations as directed graphs."}}
```

<details>
<summary>Hint 1</summary>

Use pairs whose first coordinate is $1$.

</details>

<details>
<summary>Hint 2</summary>

A loop is an outgoing arrow too.

</details>

<details>
<summary>Worked solution</summary>

Ordered relation pairs become directed arrows. Read outgoing neighbors and diagnose missing reverse arrows exactly.

1. Pairs $(1,1),(1,2)$ start at $1$.
2. Their destinations give $\{1,2\}$.

</details>
