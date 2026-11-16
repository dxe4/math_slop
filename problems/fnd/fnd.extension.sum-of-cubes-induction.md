# Prove the square-of-triangular-number identity

*Hard · [Foundations bridge](index.md)*

Prove for every integer n≥0 that $\sum_{k=1}^n k^3=[n(n+1)/2]^2$, with the empty sum equal to zero. Give a complete induction, including the algebra in the induction step.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Use n=0 as the base case.

</details>

<details>
<summary>Hint 2</summary>

After adding (n+1)³, factor out (n+1)² and simplify the remaining quadratic.

</details>

<details>
<summary>Model proof</summary>

The induction closes because the new cubic completes the next triangular square.

1. For n=0, both the empty sum and \[0×1/2\]² are zero.
2. Assume the formula holds at n. Then the sum through n+1 equals n²(n+1)²/4+(n+1)³.
3. Factoring (n+1)² gives (n+1)²\[n²/4+n+1\]=(n+1)²(n+2)²/4, exactly \[((n+1)(n+2))/2\]².
4. Thus the statement propagates from n to n+1, and induction proves it for all nonnegative integers.

**Self-assessment rubric**

- Handles n=0 with the empty-sum convention and states the induction domain.
- Applies the hypothesis to the prefix and adds exactly the next cube.
- Factors and simplifies to the next triangular square, completing the induction.

</details>
