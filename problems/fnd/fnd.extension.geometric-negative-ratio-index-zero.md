# Coordinate a zero starting index and negative multiplier

*Medium · [Foundations bridge](index.md)*

Let a₀=3 and a\_(n+1)=−2a\_n for n≥0. Find $a_4$.

```answer
{"answer":{"kind":"integer","expected":48,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

There are four transitions from index zero to index four.

</details>

<details>
<summary>Hint 2</summary>

An even number of negative multipliers gives a positive factor.

</details>

<details>
<summary>Worked solution</summary>

Indexing determines the number of repeated multiplications.

1. The explicit rule is a\_n=3(−2)ⁿ, as each step multiplies by −2.
2. At n=4 this is 3×16.
3. Hence a₄=48; using five multipliers would be an index error.

</details>
