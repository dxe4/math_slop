# Separate product convergence from box convergence

*Medium · [Topology problems](index.md)*

In $\mathbb R^{\mathbb N}$ let $e_n$ have its sole one in coordinate n. For $a_1=$ product topology and $a_2=$ box topology, return the labels in which $e_n\to0$. The box topology allows arbitrary products of open coordinate sets.

```answer
{"answer":{"kind":"set","expected":["a_1"],"checker_scope":"Only the requested finite set, interval or count in the stated topology is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Each product neighborhood restricts only finitely many coordinates.

</details>

<details>
<summary>Hint 2</summary>

The box with every coordinate in $(-1/2,1/2)$ excludes every e\_n.

</details>

<details>
<summary>Worked solution</summary>

Moving defects escape finite coordinate tests but not a simultaneous box constraint.

1. For a basic product neighborhood of zero, all its finitely restricted coordinates vanish in $e_n$ once n is outside that finite list.
2. Hence every product neighborhood eventually contains the sequence, proving product convergence.
3. The stated box neighborhood contains no term at all, so box convergence fails. Only $a_1$ is returned.

</details>
