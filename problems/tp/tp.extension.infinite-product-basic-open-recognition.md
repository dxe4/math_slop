# Recognize which restrictions are product-open

*Easy · [Topology problems](index.md)*

On $\mathbb R^{\mathbb N}$ with the product topology, let $a_1=\{x:|x_1|<1,|x_4|<2\}$, $a_2=\prod_{n\ge1}(-1/n,1/n)$ and $a_3=\mathbb R^{\mathbb N}$. Return the labels of the open sets among these.

```answer
{"answer":{"kind":"set","expected":["a_1","a_3"],"checker_scope":"Only the requested finite set, interval or count in the stated topology is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A basic product neighborhood restricts only finitely many coordinates.

</details>

<details>
<summary>Hint 2</summary>

For the second set, any proposed basic neighborhood of zero leaves an unrestricted coordinate.

</details>

<details>
<summary>Worked solution</summary>

Product openness is not arbitrary coordinatewise box openness.

1. The first set is an intersection of two inverse images of real open intervals under coordinate projections, so is open; the whole space is open too.
2. At zero, every basic product neighborhood leaves some coordinate n unrestricted.
3. Changing that coordinate to exceed $1/n$ stays in that neighborhood but leaves $a_2$. Thus $a_2$ is not open, and the answer is $\{a_1,a_3\}$.

</details>
