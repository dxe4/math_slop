# Apply a half-life to the temperature excess

*Easy · [Differential equations problems](index.md)*

A body obeys Newton cooling with constant ambient temperature 20 degrees. Its temperature is 90 at t=0 and 55 at t=10. Find its temperature at t=20. The model is $T'=-k(T-20)$ with k constant.

```answer
{"answer":{"kind":"rational","expected":{"numerator":75,"denominator":2},"checker_scope":"Exact requested model quantity only; the differential-equation argument is a worked model, not an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

The exponentially decaying quantity is T-20.

</details>

<details>
<summary>Hint 2</summary>

The second ten-unit interval has the same multiplicative decay factor.

</details>

<details>
<summary>Worked solution</summary>

Cooling halves the excess over ambient, not the absolute temperature.

1. The temperature excess starts at 70 and is 35 after ten time units.
2. Thus each ten-unit interval multiplies the excess by one half.
3. At t=20 the excess is 35/2, giving temperature 20+35/2=75/2.

</details>
