# Separate incoming mass from outgoing concentration

*Easy · [Differential equations problems](index.md)*

A well-mixed tank contains 10 liters and 6 grams of salt at one instant. Brine enters at 2 liters/minute with concentration 3 grams/liter, and mixture leaves at 2 liters/minute. Find the instantaneous salt-mass derivative $A'$ in grams/minute.

```answer
{"answer":{"kind":"rational","expected":{"numerator":24,"denominator":5},"checker_scope":"Exact requested model quantity only; the differential-equation argument is a worked model, not an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

The outlet concentration equals the tank concentration at that instant.

</details>

<details>
<summary>Hint 2</summary>

Subtract mass outflow from mass inflow, keeping the units.

</details>

<details>
<summary>Worked solution</summary>

A mass balance uses concentrations, not just volume rates.

1. The inflow carries 2\*3=6 grams per minute.
2. The tank concentration is 6/10 grams per liter, so the outflow carries 2\*(6/10)=6/5 grams per minute.
3. The mass derivative is 6-6/5=24/5 grams per minute.

</details>
