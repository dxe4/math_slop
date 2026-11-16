# Find the upper envelope of a line family

*Medium · [Calculus](index.md)*

For each fixed real x, maximize $tx-t^2$ over all real t. Give the resulting envelope as a polynomial in x, on the whole real line.

```answer
{"answer":{"kind":"expression","expected":"x^2/4","checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft.","domain":{"variable":"x","excluded":[]}}}
```

<details>
<summary>Hint 1</summary>

Treat x as fixed while optimizing in t.

</details>

<details>
<summary>Hint 2</summary>

The coefficient of t² is negative, so the stationary point is the global maximum.

</details>

<details>
<summary>Worked solution</summary>

A line family can have a nonlinear upper envelope.

1. The t-derivative is x−2t, giving t=x/2.
2. The second derivative is −2, and the expression tends to −∞ as \|t\| grows, so this is the global maximum.
3. Substitution yields x²/2−x²/4=x²/4.

</details>
