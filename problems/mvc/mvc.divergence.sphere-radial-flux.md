# Compute radial flux on a sphere

*Medium · [Multivariable calculus problems](index.md)*

For $F=(x,y,z)$ and the sphere $\Sigma=\{x^2+y^2+z^2=4\}$ oriented outward, find $\frac1\pi\iint_\Sigma F\cdot n\,dS$.

```answer
{"answer":{"kind":"integer","expected":"32","checker_scope":"Exact requested integral value only; orientation and theorem hypotheses are explained in the model solution, not automatically certified by the scalar verdict."}}
```

<details>
<summary>Hint 1</summary>

The divergence is the number of coordinates.

</details>

<details>
<summary>Hint 2</summary>

The enclosed ball has radius two.

</details>

<details>
<summary>Worked solution</summary>

The radial field is smooth throughout the ball, so no singularity obstructs the divergence theorem.

1. The divergence is $3$ everywhere.
2. The radius-two ball has volume $32\pi/3$.
3. The outward flux is $3(32\pi/3)=32\pi$, so the normalized value is $32$.

</details>
