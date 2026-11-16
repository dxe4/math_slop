# Convert a temperature change without adding an offset

*Medium · [Foundations bridge](index.md)*

Temperature readings satisfy F=(9/5)C+32. A temperature increases by exactly $10^\circ$C. Find the corresponding increase in degrees Fahrenheit, not the final temperature reading.

```answer
{"answer":{"kind":"integer","expected":18,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Write the conversion at the initial and final temperatures.

</details>

<details>
<summary>Hint 2</summary>

Subtract the two equations so the fixed offset cancels.

</details>

<details>
<summary>Worked solution</summary>

An affine offset affects readings but not differences.

1. If the initial Celsius reading is C, the final one is C+10.
2. The Fahrenheit difference is \[(9/5)(C+10)+32\]−\[(9/5)C+32\].
3. The constants and initial terms cancel, leaving (9/5)×10=18 Fahrenheit degrees.

</details>
