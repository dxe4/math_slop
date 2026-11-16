# Resolve cancellation in an infinite square-root difference

*Medium · [Calculus](index.md)*

Find $\lim_{x\to+\infty}(\sqrt{x^2+x}-x)$. Work on the positive tail of the real domain.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Only the requested exact result in the stated domain, units and orientation is checked; reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

Multiply by the conjugate to remove the difference.

</details>

<details>
<summary>Hint 2</summary>

Divide the resulting denominator by positive x.

</details>

<details>
<summary>Worked solution</summary>

Rationalization exposes the finite remainder hidden between two unbounded terms.

1. The expression equals x/\[√(x²+x)+x\].
2. For x&gt;0 this is 1/\[√(1+1/x)+1\].
3. The denominator tends to 2, so the limit is 1/2.

</details>
