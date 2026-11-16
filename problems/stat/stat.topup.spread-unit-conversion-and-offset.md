# Convert spread units before adding an offset

*Medium · [Statistics and probability](index.md)*

Lengths have standard deviation $3$ cm. Convert every value to millimetres and then add 5 mm to every converted value. Return variance in square millimetres and standard\_deviation in millimetres, using the same variance convention throughout.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"variance":"900","standard_deviation":"30"},"checker_scope":"Checks only the requested result under the explicitly stated finite model or convention; does not certify a modeling assumption, causal claim or open argument."}}
```

<details>
<summary>Hint 1</summary>

Multiplying every value by ten multiplies deviations by ten.

</details>

<details>
<summary>Hint 2</summary>

A common offset does not change deviations from the new mean.

</details>

<details>
<summary>Worked solution</summary>

Scale affects standard deviation linearly and variance quadratically.

1. The centimetre-to-millimetre conversion multiplies all deviations by ten, making the standard deviation thirty millimetres.
2. Adding five millimetres translates every value and the mean equally, leaving that spread unchanged.
3. The variance is $30^2=900$ square millimetres.

</details>
