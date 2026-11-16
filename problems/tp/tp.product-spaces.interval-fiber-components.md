# Connected components of a product with a discrete space

*Medium · [Topology problems](index.md)*

Let $X$ be a discrete three-point space. How many connected components does $X\times[0,1]$ have with the product topology?

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Each fixed-first-coordinate slice is homeomorphic to an interval.

</details>

<details>
<summary>Hint 2</summary>

Its complement is also a union of open coordinate slices.

</details>

<details>
<summary>Worked solution</summary>

Three separated connected slices form exactly the components.

1. For each $x\in X$, the slice $\{x\}\times[0,1]$ is connected because it is homeomorphic to $[0,1]$.
2. Each slice is open and closed in the product, so a connected subset cannot meet two different slices.
3. The three slices are precisely the connected components.

</details>
