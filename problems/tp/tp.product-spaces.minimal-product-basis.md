# Count a minimal basis of a finite product

*Medium · [Topology problems](index.md)*

Let $X=\{1,2,3\}$ have topology $\{\varnothing,\{1\},\{1,2\},X\}$ and let $Y=\{a,b\}$ have topology $\{\varnothing,\{b\},Y\}$. Find the smallest size of a basis of $X\times Y$.

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Each factor has a smallest open neighborhood at each point.

</details>

<details>
<summary>Hint 2</summary>

The minimal neighborhood of a product point is the product of its two minimal factor neighborhoods.

</details>

<details>
<summary>Worked solution</summary>

Distinct minimal neighborhoods force the members of every finite-space basis.

1. The three distinct minimal neighborhoods in $X$ are $\{1\}$, $\{1,2\}$, $X$; the two in $Y$ are $\{b\}$, $Y$.
2. Their six Cartesian products are distinct and are the minimal neighborhoods of the six product points.
3. Every basis must contain each minimal neighborhood, and these six sets do form a basis. The minimum size is $6$.

</details>
