# Closure in a two-point topology

*Easy · [Topology problems](index.md)*

Let $X=\{0,1\}$ have topology $\{\varnothing,\{1\},X\}$. Find the closure of $\{1\}$, entering its point set.

```answer
{"answer":{"kind":"set","expected":[0,1],"checker_scope":"Exact finite set, interval or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

List the closed sets by taking complements of the open sets.

</details>

<details>
<summary>Hint 2</summary>

The closure is the intersection of closed sets containing the given subset.

</details>

<details>
<summary>Worked solution</summary>

Use the smallest closed superset in the specified topology.

1. The closed sets are $\varnothing,\{0\},X$.
2. Only $X$ among them contains $1$.
3. Therefore $\overline{\{1\}}=X=\{0,1\}$.

</details>
