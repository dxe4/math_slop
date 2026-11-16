# Detect the obstruction to a global harmonic conjugate

*Hard · [Complex analysis problems](index.md)*

On the annulus $1<|z|<2$, prove that u(z)=log\|z\| is harmonic but has no single-valued harmonic conjugate. Identify the period that obstructs such a conjugate.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Compute the derivatives in real coordinates.

</details>

<details>
<summary>Hint 2</summary>

A global conjugate would make its differential have zero integral on every closed curve.

</details>

<details>
<summary>Model proof</summary>

Local harmonicity does not remove a nonzero period around the hole.

1. Write u=(1/2)log(x^2+y^2). Its derivatives give u\_x=x/(x^2+y^2) and u\_y=y/(x^2+y^2), and direct differentiation gives u\_xx+u\_yy=0 away from zero.
2. If a single-valued conjugate v existed, Cauchy-Riemann would give dv=-u\_y dx+u\_x dy=(-y dx+x dy)/(x^2+y^2).
3. On any positively oriented circle of radius between one and two this differential integrates to 2\*pi. An exact differential of a single-valued function integrates to zero on a closed curve, a contradiction.

**Self-assessment rubric**

- Establish harmonicity on precisely the annular domain.
- Derive the differential required by Cauchy-Riemann.
- Compute its nonzero closed-circle integral and explain the obstruction.

</details>
