# Interior without a singleton neighborhood

*Easy · [Topology problems](index.md)*

Let $X=\{0,1\}$ have topology $\{\varnothing,\{1\},X\}$. Find $\operatorname{int}\{0\}$. Use $\{\}$ for an empty set.

```answer
{"answer":{"kind":"set","expected":[],"checker_scope":"Exact finite set, interval or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The interior is the union of open sets lying within the specified subset.

</details>

<details>
<summary>Hint 2</summary>

A singleton subset need not itself be open.

</details>

<details>
<summary>Worked solution</summary>

Inspect which of the declared open sets are contained in the subset.

1. The open set $\{1\}$ is not contained in $\{0\}$, and neither is $X$.
2. The empty set is the only open subset of $\{0\}$.
3. Its union is empty, so the interior is $\varnothing$, entered as $\{\}$.

</details>
