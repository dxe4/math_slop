# Compute a recurrence that is not purely geometric

*Medium · [Foundations bridge](index.md)*

Let a₀=0 and a\_(n+1)=2a\_n+1 for n≥0. Find $a_5$.

```answer
{"answer":{"kind":"integer","expected":31,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Apply both the multiplication and the addition at every transition.

</details>

<details>
<summary>Hint 2</summary>

Track the index beside each term so you stop after five transitions.

</details>

<details>
<summary>Worked solution</summary>

A repeated affine update differs from multiplying the initial term alone.

1. The successive terms are a₁=1, a₂=3 and a₃=7.
2. Continuing gives a₄=15 and a₅=31.
3. Thus the requested term is 31, rather than 0 from incorrectly treating the rule as purely multiplicative.

</details>
