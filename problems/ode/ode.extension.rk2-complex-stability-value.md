# Evaluate stability off the negative real axis

*Medium · [Differential equations problems](index.md)*

A second-order explicit Runge-Kutta method has stability polynomial $R(z)=1+z+z^2/2$. Find \|R(-1+2i)\|^2 and explain in the worked argument whether that test mode contracts.

```answer
{"answer":{"kind":"rational","expected":{"numerator":9,"denominator":4},"checker_scope":"Exact requested finite numerical-method quantity only; a numerical iterate is not treated as an exact ODE solution."}}
```

<details>
<summary>Hint 1</summary>

Square the complex argument before combining real and imaginary parts.

</details>

<details>
<summary>Hint 2</summary>

The stability test uses the modulus, not the real part alone.

</details>

<details>
<summary>Worked solution</summary>

Complex stability can fail even for a test coefficient with negative real part.

1. For z=-1+2i, z^2=-3-4i.
2. Thus R(z)=1-1+2i-3/2-2i=-3/2.
3. The squared modulus is 9/4, greater than one, so the numerical mode grows although Re z is negative.

</details>
