# Include every boundary component of a cylinder

*Medium · [Multivariable calculus problems](index.md)*

Let $C=\{x^2+y^2\leq1,\ 0\leq z\leq2\}$ and $F=(0,0,z^2)$. Compute $\frac1\pi\iint_{\partial C}F\cdot n\,dS$, with the entire closed boundary oriented outward.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact requested integral value only; orientation and theorem hypotheses are explained in the model solution, not automatically certified by the scalar verdict."}}
```

<details>
<summary>Hint 1</summary>

The divergence theorem includes the side and both caps automatically.

</details>

<details>
<summary>Hint 2</summary>

The divergence depends on height and the cross-sectional area is constant.

</details>

<details>
<summary>Worked solution</summary>

Closed-surface flux can be obtained by integrating the height-dependent divergence.

1. The field has divergence $2z$, continuous on a neighborhood of the solid cylinder.
2. The volume integral is $\pi\int_0^22z\,dz=4\pi$.
3. The normalized flux is $4$. Directly, only the top cap contributes, with density $4$.

</details>
