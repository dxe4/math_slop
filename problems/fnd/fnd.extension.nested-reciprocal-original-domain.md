# Find restrictions before simplifying a nested fraction

*Medium · [Foundations bridge](index.md)*

List every real input excluded from the original expression $1/(1-1/x)$. Return a set, retaining any hole after simplification.

```answer
{"answer":{"kind":"set","expected":["0","1"],"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The inner fraction must first be defined.

</details>

<details>
<summary>Hint 2</summary>

Then require the entire outer denominator to be nonzero.

</details>

<details>
<summary>Worked solution</summary>

Nested denominators impose restrictions at more than one stage.

1. The inner fraction 1/x requires x≠0.
2. With that condition, the outer denominator is zero exactly when 1−1/x=0, namely x=1.
3. Thus the excluded set is {0,1}. The equivalent rule x/(x−1) on this domain still retains the original hole at zero.

</details>
