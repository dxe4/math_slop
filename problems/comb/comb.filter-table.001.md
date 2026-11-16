# Apply a rule to listed coordinates

*Easy · [Combinatorics](index.md)*

A game permits only these listed coordinate outcomes: $(0,0), (0,1), (1,0), (1,1), (2,0), (2,1)$. Keep an outcome only when its two coordinates have sum at most $1$. How many outcomes remain?

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact finite count for the explicitly stated outcome model; no general proof claim."}}
```

<details>
<summary>Hint 1</summary>

Test each listed pair; do not add pairs that were not listed.

</details>

<details>
<summary>Hint 2</summary>

A sum of $1$ is allowed because the rule says at most $1$.

</details>

<details>
<summary>Worked solution</summary>

The permitted universe and the filtering rule jointly define the outcome set.

1. $(0,0), (0,1)$, and $(1,0)$ have sums $0, 1$, and $1$.
2. The other sums are $2, 2$, and 3, so exactly three outcomes remain.

</details>
