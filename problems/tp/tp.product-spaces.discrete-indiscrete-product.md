# Open sets of a mixed finite product

*Medium · [Topology problems](index.md)*

Let $X$ be a discrete two-point space and $Y$ an indiscrete three-point space. How many open sets does $X\times Y$ have in the product topology?

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The only nonempty open factor in the second coordinate is the whole second space.

</details>

<details>
<summary>Hint 2</summary>

Product opens are unions of the two full coordinate fibers.

</details>

<details>
<summary>Worked solution</summary>

The product topology distinguishes the first-coordinate fibers but cannot split within them.

1. The basic nonempty rectangles are $U\times Y$ for open $U\subseteq X$.
2. Every open union is again of that form, and different subsets $U$ give different product sets.
3. There are $2^2=4$ choices of $U$, hence $4$ open sets.

</details>
