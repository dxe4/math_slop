# Use symmetry after Green theorem

*Medium · [Multivariable calculus problems](index.md)*

For the counterclockwise unit circle $C$, compute $\oint_C(y^2\,dx+x^2\,dy)$.

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact requested integral value only; orientation and theorem hypotheses are explained in the model solution, not automatically certified by the scalar verdict."}}
```

<details>
<summary>Hint 1</summary>

Transform the circulation into a disk integral.

</details>

<details>
<summary>Hint 2</summary>

Each coordinate has zero integral over a disk centered at the origin.

</details>

<details>
<summary>Worked solution</summary>

Green theorem produces an odd integrand on a symmetric region.

1. The polynomial field is smooth everywhere, and $Q_x-P_y=2x-2y$.
2. Green theorem gives the integral of $2x-2y$ over the unit disk.
3. The disk is invariant under each coordinate reflection, so both coordinate integrals vanish and the answer is $0$.

</details>
