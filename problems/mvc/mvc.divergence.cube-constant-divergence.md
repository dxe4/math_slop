# Compute total outward cube flux

*Easy · [Multivariable calculus problems](index.md)*

For $F=(x,2y,3z)$, find total outward flux $\iint_{\partial B}F\cdot n\,dS$ from the unit cube $B=[0,1]^3$.

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact requested integral value only; orientation and theorem hypotheses are explained in the model solution, not automatically certified by the scalar verdict."}}
```

<details>
<summary>Hint 1</summary>

Use the divergence theorem for the closed cube boundary.

</details>

<details>
<summary>Hint 2</summary>

The divergence is constant and the cube has unit volume.

</details>

<details>
<summary>Worked solution</summary>

The closed outward orientation matches the divergence theorem convention.

1. The field is continuously differentiable on a neighborhood of the cube.
2. Its divergence is $1+2+3=6$.
3. The divergence theorem gives outward flux $\iiint_B6\,dV=6$.

</details>
