# Use a weighted inner product

*Easy · [Linear algebra problems](index.md)*

On $\mathbb R^2$, define $\langle u,v\rangle=2u_1v_1+u_2v_2$. Find the squared norm of $(1,-2)$ in this inner product.

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The squared norm is the inner product of the vector with itself.

</details>

<details>
<summary>Hint 2</summary>

Apply the weight to the first coordinate square only.

</details>

<details>
<summary>Worked solution</summary>

Use the stated geometry rather than the ordinary Euclidean norm.

1. Here $\|(1,-2)\|^2=\langle(1,-2),(1,-2)\rangle$.
2. The definition gives $2\cdot1^2+(-2)^2=2+4$.
3. Thus the squared norm is $6$.

</details>
