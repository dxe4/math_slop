# Respect the arrow direction

*Easy · [Discrete mathematics](index.md)*

On $\{1,2,3,4\}, R$={$(1,2),(2,1),(3,4)$}. Give the outgoing neighbors of $3$, where (a,b) means a→b.

```answer
{"answer":{"kind":"finite_integer_set","expected":[4],"checker_scope":"Checks only this authored read-relation-outgoing-set task. Does not certify unrestricted proof validity, general construction ability or full mastery of relations as directed graphs."}}
```

<details>
<summary>Hint 1</summary>

Find first coordinate $3$.

</details>

<details>
<summary>Hint 2</summary>

Do not add unlisted reverse pairs.

</details>

<details>
<summary>Worked solution</summary>

Ordered relation pairs become directed arrows. Read outgoing neighbors and diagnose missing reverse arrows exactly.

1. Only $(3,4)$ begins at $3$.
2. The destination set is $\{4\}$.

</details>
