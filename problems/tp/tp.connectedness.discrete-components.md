# Components of a finite discrete space

*Easy · [Topology problems](index.md)*

How many connected components does a discrete space with $5$ points have?

```answer
{"answer":{"kind":"integer","expected":5,"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Any subset containing two different points can be separated by open subsets.

</details>

<details>
<summary>Hint 2</summary>

Single-point spaces are connected.

</details>

<details>
<summary>Worked solution</summary>

Every discrete-space component is a singleton.

1. A singleton is connected.
2. If a subset has at least two points, one singleton and its relative complement are disjoint nonempty relatively open sets separating it.
3. Thus each of the five points is its own component, giving $5$.

</details>
