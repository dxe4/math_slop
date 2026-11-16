# Use widths and signs in a nonuniform rectangle model

*Medium · [Calculus](index.md)*

A rectangle approximation uses partition $0,1,3,4$ and respective heights 2,-1,3. Return signed\_sum and absolute\_rectangle\_area.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"signed_sum":"3","absolute_rectangle_area":"7"},"checker_scope":"Exact requested value, finite set, choice or bounded polynomial with its stated excluded inputs only; no unrestricted symbolic function, causal assertion or analytic proof is automatically certified. No new same-version required slot is introduced."}}
```

<details>
<summary>Hint 1</summary>

The widths are not all equal.

</details>

<details>
<summary>Hint 2</summary>

A negative height contributes a negative signed rectangle but positive absolute area.

</details>

<details>
<summary>Worked solution</summary>

Signed and unsigned accumulations use the same widths with different height signs.

1. The widths are one, two and one, giving signed contributions two, negative two and three.
2. Their signed sum is three.
3. Taking absolute rectangle contributions gives two plus two plus three, or seven.

</details>
