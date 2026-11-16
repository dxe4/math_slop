# Round a decimal to a stated place

*Easy · [Foundations bridge](index.md)*

Round $3.046$ to the nearest hundredth. This is not a tie.

```answer
{"answer":{"kind":"rational","expected":{"numerator":61,"denominator":20},"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The hundredths digit is the second digit after the decimal point.

</details>

<details>
<summary>Hint 2</summary>

Use the following digit to decide whether that digit increases.

</details>

<details>
<summary>Worked solution</summary>

Rounding changes the named place using the first discarded digit.

1. The hundredths digit is 4 and the following thousandths digit is 6.
2. Since 6≥5, increase the hundredths digit to 5.
3. The rounded value is 3.05=61/20.

</details>
