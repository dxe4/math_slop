# Read a basis from minimal neighborhoods

*Medium · [Topology problems](index.md)*

For $X=\{1,2,3\}$ with topology $\{\varnothing,\{1\},\{1,2\},X\}$, find the smallest number of basis members.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact finite set, interval or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Find the smallest open neighborhood of each point.

</details>

<details>
<summary>Hint 2</summary>

At that point, a basis must refine this smallest neighborhood.

</details>

<details>
<summary>Worked solution</summary>

Distinct minimal neighborhoods are forced into every basis of a finite space.

1. The smallest neighborhoods of points $1,2,3$ are respectively $\{1\}$, $\{1,2\}$ and $X$.
2. For each point, refining its smallest neighborhood forces that very neighborhood to be a basis member.
3. These three sets also form a basis, so the minimum size is $3$.

</details>
