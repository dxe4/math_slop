# Locate a homoclinic turning point from its energy level

*Medium · [Differential equations problems](index.md)*

For $x'=v$, v'=x-x^3, the energy is H=v^2/2-x^2/2+x^4/4. On the positive-x homoclinic loop H=0, find the square of the largest x coordinate.

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact requested phase-plane invariant or normalized observation only; no stability or proof verdict is inferred."}}
```

<details>
<summary>Hint 1</summary>

At the largest x value, x'=v is zero.

</details>

<details>
<summary>Hint 2</summary>

Discard the saddle point when solving the turning-point equation.

</details>

<details>
<summary>Worked solution</summary>

The zero-energy geometry fixes the nonzero turning point.

1. At a nonzero turning point, v=0 and H=-x^2/2+x^4/4=0.
2. Factor this as x^2\*(x^2-2)/4=0.
3. The positive nonzero turning point has x^2=2.

</details>
