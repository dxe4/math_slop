# Prove an arithmetic versus harmonic mean inequality with equality

*Hard · [Foundations bridge](index.md)*

For arbitrary positive real a,b prove $(a+b)/2\ge2ab/(a+b)$ and characterize equality. Explain why every division and sign comparison in your proof is valid.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Compare the two sides by subtracting them.

</details>

<details>
<summary>Hint 2</summary>

Look for a square in the numerator after taking a common denominator.

</details>

<details>
<summary>Model proof</summary>

A nonnegative square isolates both the inequality and its equality condition.

1. Since a,b&gt;0, the denominator 2(a+b) is strictly positive. The difference of the two sides is ((a+b)²−4ab)/(2(a+b)).
2. The numerator simplifies to a²−2ab+b²=(a−b)², which is nonnegative for all real a,b. Dividing by the positive denominator preserves nonnegativity.
3. Thus the claimed inequality holds. The difference is zero exactly when (a−b)²=0, equivalent to a=b.
4. Conversely, when a=b&gt;0 both expressions equal a, so every stated equality case actually occurs.

**Self-assessment rubric**

- Uses positivity to justify the common denominator and sign comparison.
- Derives the exact difference as (a−b)²/\[2(a+b)\].
- Proves equality holds if and only if a=b within the stated positive domain.

</details>
