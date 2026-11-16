# Determine opens in a non-discrete quotient

*Medium · [Topology problems](index.md)*

Let $X=\{1,2,3\}$ have topology $\{\varnothing,\{1\},\{1,2\},X\}$. Form quotient classes $A=\{1,2\}$ and $B=\{3\}$. Encode a quotient subset by $1$ for containing $A$ plus $2$ for containing $B$. Find the codes of all quotient-open subsets.

```answer
{"answer":{"kind":"set","expected":[0,1,3],"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Test the full preimage of each of the four quotient subsets.

</details>

<details>
<summary>Hint 2</summary>

A union of equivalence classes may be open even when not every individual original point is open.

</details>

<details>
<summary>Worked solution</summary>

The quotient topology is determined by saturated preimages.

1. The preimages of the four subsets are $\varnothing$, $\{1,2\}$, $\{3\}$ and $X$.
2. All except $\{3\}$ are open in the stated topology.
3. The corresponding codes are $0,1,3$, giving $\{0,1,3\}$.

</details>
