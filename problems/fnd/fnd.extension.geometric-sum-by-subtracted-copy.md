# Use a shifted copy to evaluate a geometric sum

*Medium · [Foundations bridge](index.md)*

Find $S=2+4+8+16+32$ by comparing 2S with S.

```answer
{"answer":{"kind":"integer","expected":62,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Multiply the complete sum by 2, keeping all five terms.

</details>

<details>
<summary>Hint 2</summary>

Subtract to cancel the overlapping powers.

</details>

<details>
<summary>Worked solution</summary>

A shifted finite sum preserves the two unmatched boundary terms.

1. The doubled sum is 2S=4+8+16+32+64.
2. Subtracting S leaves 2S−S=64−2.
3. Therefore S=62.

</details>
