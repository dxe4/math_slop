# Count genuinely different directions

*Easy · [Linear algebra problems](index.md)*

Find the dimension of $\operatorname{span}\{(1,2),(2,4),(0,0)\}$ over $\mathbb R$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The zero vector adds no direction to a span.

</details>

<details>
<summary>Hint 2</summary>

Compare the two nonzero vectors by a scalar multiple.

</details>

<details>
<summary>Worked solution</summary>

A list of generators can contain repetitions of the same direction.

1. The vector $(2,4)$ is twice $(1,2)$, and the zero vector contributes nothing.
2. Every listed vector therefore lies in the line spanned by $(1,2)$.
3. That vector is nonzero, so this line has dimension $1$.

</details>
