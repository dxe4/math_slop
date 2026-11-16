# Count components after deleting real points

*Easy · [Topology problems](index.md)*

How many connected components does $\mathbb R\setminus\{0,1,2\}$ have in the usual topology?

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Each deleted point separates adjacent remaining intervals.

</details>

<details>
<summary>Hint 2</summary>

Identify all maximal intervals left in the space.

</details>

<details>
<summary>Worked solution</summary>

Connected real subsets cannot cross a missing intermediate point.

1. The remaining space is $(-\infty,0)\cup(0,1)\cup(1,2)\cup(2,\infty)$.
2. Each interval is connected, and no connected subset can join across any removed point.
3. These are the four connected components.

</details>
