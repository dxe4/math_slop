# Enumerate a fixed denominator grid inside strict bounds

*Medium · [Foundations bridge](index.md)*

Return all rational numbers of the form k/12 with integer k satisfying $1/4<k/12<2/3$. Return a set of values, with repetitions identified.

```answer
{"answer":{"kind":"set","expected":["1/3","5/12","1/2","7/12"],"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Multiply the strict bounds by the positive denominator 12.

</details>

<details>
<summary>Hint 2</summary>

List the integers strictly between the resulting endpoints.

</details>

<details>
<summary>Worked solution</summary>

Fixed-grid membership concerns the value, even if its reduced denominator becomes smaller.

1. The inequalities become 3&lt;k&lt;8.
2. Thus k can be 4,5,6 or 7.
3. The values are 1/3,5/12,1/2 and 7/12, with neither endpoint included.

</details>
