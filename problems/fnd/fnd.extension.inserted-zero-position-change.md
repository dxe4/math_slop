# Measure the effect of inserting a zero digit

*Medium · [Foundations bridge](index.md)*

The base-ten digits $123$ are changed to $1203$ by inserting a zero immediately before the final digit. By how much does the represented integer increase?

```answer
{"answer":{"kind":"integer","expected":1080,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Expand both numbers by place value.

</details>

<details>
<summary>Hint 2</summary>

The final units digit stays fixed, but the first two digits shift one place.

</details>

<details>
<summary>Worked solution</summary>

A zero insertion shifts some digits without shifting every digit.

1. The old value is 100+20+3=123.
2. The new value is 1000+200+0+3=1203.
3. Their difference is 1203−123=1080.

</details>
