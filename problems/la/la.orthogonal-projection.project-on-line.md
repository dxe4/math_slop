# Project onto a line

*Easy · [Linear algebra problems](index.md)*

Find the Euclidean orthogonal projection of $(2,1)$ onto the line spanned by $(1,1)$.

```answer
{"answer":{"kind":"vector","expected":["3/2","3/2"],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The projection is a scalar multiple of the direction vector.

</details>

<details>
<summary>Hint 2</summary>

That scalar is the input-direction dot product divided by the direction squared norm.

</details>

<details>
<summary>Worked solution</summary>

Apply the projection coefficient for a one-dimensional subspace.

1. For $u=(1,1)$ and $v=(2,1)$, $v\cdot u=3$ and $u\cdot u=2$.
2. The coefficient is therefore $3/2$.
3. The projection is $(3/2)u=(3/2,3/2)$. Its residual $(1/2,-1/2)$ is orthogonal to the line.

</details>
