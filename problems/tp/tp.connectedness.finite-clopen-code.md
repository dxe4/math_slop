# Find the clopen subsets of a finite space

*Medium · [Topology problems](index.md)*

Let $X=\{0,1\}$ have topology $\{\varnothing,\{1\},X\}$. Encode a subset by $1$ if it contains point $0$, plus $2$ if it contains point $1$. Find the set of codes of subsets that are both open and closed.

```answer
{"answer":{"kind":"set","expected":[0,3],"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

List closed sets by complementing the given open sets.

</details>

<details>
<summary>Hint 2</summary>

Keep only sets occurring in both lists, then encode them.

</details>

<details>
<summary>Worked solution</summary>

Clopen subsets are the intersection of the open-set and closed-set families.

1. The closed sets are $\varnothing,\{0\},X$.
2. Comparing with the open sets, only $\varnothing$ and $X$ occur in both families.
3. Their codes are $0$ and $3$, so the requested set is $\{0,3\}$.

</details>
