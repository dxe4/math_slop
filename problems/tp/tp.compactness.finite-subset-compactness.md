# Compact subsets of a finite space

*Easy · [Topology problems](index.md)*

A topological space $X$ has exactly five points, with any topology. How many subsets of $X$ are compact in their subspace topologies?

```answer
{"answer":{"kind":"integer","expected":32,"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A cover of a finite set needs only one chosen cover member for each point.

</details>

<details>
<summary>Hint 2</summary>

After proving every subset is compact, count all subsets.

</details>

<details>
<summary>Worked solution</summary>

Finiteness alone supplies a finite subcover in any topology.

1. Every subset is finite. For any cover, select one member for each point of that subset.
2. This gives a finite subcover, so every subset, including the empty set, is compact.
3. A five-point set has $2^5=32$ subsets.

</details>
