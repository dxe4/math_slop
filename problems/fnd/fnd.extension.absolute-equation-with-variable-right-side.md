# Solve an absolute equation with a sign-dependent right side

*Medium · [Foundations bridge](index.md)*

Find the sum of all real solutions of $|2x-1|=x+2$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":8,"denominator":3},"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

The right side must be nonnegative.

</details>

<details>
<summary>Hint 2</summary>

Use the branches x≥1/2 and x&lt;1/2 and check each candidate.

</details>

<details>
<summary>Worked solution</summary>

An absolute value equation requires both branch conditions and the nonnegative output condition.

1. Necessarily x≥−2. For x≥1/2 the equation is 2x−1=x+2, giving x=3.
2. For x&lt;1/2 it is 1−2x=x+2, giving x=−1/3. Both meet all conditions and satisfy the original equation.
3. Their sum is 3−1/3=8/3.

</details>
