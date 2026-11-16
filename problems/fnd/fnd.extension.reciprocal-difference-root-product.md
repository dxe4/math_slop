# Solve a reciprocal equation and report a symmetric result

*Medium · [Foundations bridge](index.md)*

Find the product of all real solutions of $1/(x-1)-1/(x+1)=1$. Exclude inputs where either original denominator is zero.

```answer
{"answer":{"kind":"integer","expected":-3,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Combine the left fractions using their common denominator.

</details>

<details>
<summary>Hint 2</summary>

The resulting quadratic has two opposite nonexcluded roots; their product is rational.

</details>

<details>
<summary>Worked solution</summary>

Combining denominators exposes a quadratic while preserving both restrictions.

1. The domain excludes x=−1 and x=1. The left side is 2/(x²−1).
2. The equation becomes x²−1=2, so its roots are ±√3, neither excluded.
3. Their product is (√3)(−√3)=−3.

</details>
