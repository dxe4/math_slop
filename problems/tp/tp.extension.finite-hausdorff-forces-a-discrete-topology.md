# Count opens when separation forces discreteness

*Easy · [Topology problems](index.md)*

A Hausdorff topological space has exactly $3$ points. How many open sets must it have?

```answer
{"answer":{"kind":"integer","expected":8,"checker_scope":"Only the requested finite set, interval or count in the stated topology is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

For a fixed point intersect finitely many neighborhoods excluding each of the other points.

</details>

<details>
<summary>Hint 2</summary>

Once every singleton is open, all subsets are open.

</details>

<details>
<summary>Worked solution</summary>

Finite separation supplies isolated points.

1. For a fixed x, Hausdorffness supplies for each other point a neighborhood of x excluding that point.
2. The finite intersection of these neighborhoods is the singleton x and is open. Thus the topology is discrete.
3. The three-point power set has $2^3=8$ opens, and no other Hausdorff topology is possible on that set.

</details>
