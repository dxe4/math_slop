# See a new top-dimensional cycle after changing coefficients

*Medium · [Topology problems](index.md)*

Form M by attaching one two-cell to S¹ by a degree-3 map. Compute homology with coefficients $\mathbb F_3$, returning \[dim H₁(M;F₃), dim H₂(M;F₃)\]. Do not infer the second entry by tensoring the integral H₂ alone.

```answer
{"answer":{"kind":"vector","expected":["1","1"],"checker_scope":"Only the requested exact result in the specified space, bases and coefficient conventions is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Write the cellular boundary as multiplication by 3 before reducing coefficients.

</details>

<details>
<summary>Hint 2</summary>

Modulo 3 that differential vanishes, leaving both the one-cell and the two-cell as cycles.

</details>

<details>
<summary>Worked solution</summary>

Reducing a differential can create cycles that were absent integrally.

1. The integral reduced cellular complex is Z in degree 2 mapping by 3 to Z in degree 1. It has integral H₂=0 and H₁=Z/3.
2. With F₃ coefficients the same boundary coefficient becomes zero. Both chain groups are one-dimensional and no other nonzero differentials enter them.
3. Thus both H₁ and H₂ over F₃ have dimension 1, giving \[1,1\]. The H₂ contribution corresponds to the coefficient-change Tor term, not to integral H₂ tensor F₃.

</details>
