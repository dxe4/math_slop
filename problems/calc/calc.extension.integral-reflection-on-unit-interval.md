# Use reflection without losing its differential sign

*Easy · [Calculus](index.md)*

If $\int_0^1f(u)\,du=4$, find ∫₀¹f(1−x)dx for integrable f.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Set u=1−x; the endpoint order reverses.

</details>

<details>
<summary>Hint 2</summary>

The negative differential reverses that order back.

</details>

<details>
<summary>Worked solution</summary>

Reflection preserves the unweighted integral over the whole reflected interval.

1. The substitution gives −∫₁⁰f(u)du.
2. Reversing those limits yields ∫₀¹f(u)du.
3. Its supplied value is 4.

</details>
