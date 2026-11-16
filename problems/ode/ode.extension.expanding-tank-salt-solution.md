# Account for a changing dilution volume

*Medium · [Differential equations problems](index.md)*

A well-mixed tank initially contains 10 liters of pure water. Brine of concentration 2 grams/liter enters at 3 liters/minute, while mixture leaves at 2 liters/minute. With no overflow before $t=10$, find the salt mass at t=10.

```answer
{"answer":{"kind":"integer","expected":35,"checker_scope":"Exact requested model quantity only; the differential-equation argument is a worked model, not an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

The volume is 10+t, so the outflow concentration is not based on a constant volume.

</details>

<details>
<summary>Hint 2</summary>

Use an integrating factor for A'+2A/(10+t)=6.

</details>

<details>
<summary>Worked solution</summary>

A changing volume changes the coefficient of the linear mass equation.

1. The volume is 10+t and the mass A satisfies Aprime=6-2A/(10+t), with A(0)=0.
2. Multiplication by (10+t)^2 gives the derivative of (10+t)^2\*A equal to 6\*(10+t)^2. Hence A=2\*(10+t)+C/(10+t)^2.
3. The initial condition gives C=-2000. At t=10, A=40-2000/400=35 grams.

</details>
