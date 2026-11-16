# Check the sign restriction before accepting squared roots

*Medium · [Foundations bridge](index.md)*

Solve $\sqrt{x+4}=x-2$ over the real numbers, using the nonnegative square root. Return the solution set.

```answer
{"answer":{"kind":"set","expected":["5"],"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The right side must be nonnegative, imposing a stronger restriction than the radical alone.

</details>

<details>
<summary>Hint 2</summary>

Square only after recording that restriction and check the resulting candidates.

</details>

<details>
<summary>Worked solution</summary>

Squaring produces candidates but does not preserve the sign information by itself.

1. The right side requires x≥2, which also guarantees x+4≥0.
2. Squaring gives x+4=(x−2)², or x(x−5)=0. Candidates are 0 and 5.
3. Only 5 satisfies x≥2, and √9=3=5−2. The solution set is {5}.

</details>
