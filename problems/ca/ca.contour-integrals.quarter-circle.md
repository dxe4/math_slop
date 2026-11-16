# Parameterize a directed circular arc

*Medium · [Complex analysis problems](index.md)*

Let $\gamma$ be the counterclockwise unit-circle arc from $1$ to $i$, with angle increasing from $0$ to $\pi/2$. Find $\frac{1}{\pi i}\int_\gamma dz/z$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested complex value, polynomial, set or normalized contour value only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use the angle interval explicitly stated in the problem.

</details>

<details>
<summary>Hint 2</summary>

The quotient of the differential by the circle coordinate is constant times the angle differential.

</details>

<details>
<summary>Worked solution</summary>

Angle parameterization records the exact directed arc without a logarithm branch ambiguity.

1. With $z=e^{it}$, $0\le t\le\pi/2$, we have $dz/z=i\,dt$.
2. The integral is $i\pi/2$.
3. Dividing by $\pi i$ gives $1/2$.

</details>
