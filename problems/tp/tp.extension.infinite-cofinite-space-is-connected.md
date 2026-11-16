# Count components in the cofinite topology

*Easy · [Topology problems](index.md)*

Give an infinite set $X$ the cofinite topology, whose nonempty open sets have finite complements. How many connected components does X have?

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Only the requested finite set, interval or count in the stated topology is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Intersect two nonempty opens by taking the union of their finite complements.

</details>

<details>
<summary>Hint 2</summary>

A separation would require such opens to be disjoint.

</details>

<details>
<summary>Worked solution</summary>

A finite deleted set cannot separate an infinite cofinite space.

1. The intersection of two nonempty opens has finite complement and cannot be empty because X is infinite.
2. Hence there are no two disjoint nonempty open sets forming a separation.
3. The whole space is connected and is its sole connected component.

</details>
