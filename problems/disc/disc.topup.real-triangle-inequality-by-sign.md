# Organize all sign cases for an absolute-value inequality

*Hard · [Discrete mathematics](index.md)*

Prove $|x+y|\leq|x|+|y|$ for all real x,y using exhaustive sign cases, without squaring the inequality.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

When the two signs agree the equality is immediate.

</details>

<details>
<summary>Hint 2</summary>

For opposite signs use symmetry to take x nonnegative and y nonpositive, then split by the sign of x+y.

</details>

<details>
<summary>Model proof</summary>

A second split inside the mixed-sign case makes the absolute-value formulas exhaustive.

1. If x,y are both nonnegative, the two sides are equal to x+y. If both are nonpositive, they equal -x-y.
2. For opposite signs, by symmetry assume x&gt;=0 and y&lt;=0. If x+y&gt;=0, then $|x+y|=x+y\leq x-y=|x|+|y|$.
3. If x+y&lt;0, then $|x+y|=-x-y\leq x-y$ because x&gt;=0. This is again the desired bound.
4. Zero values are included in the non-strict sign cases, so every real pair has been covered.

**Self-assessment rubric**

- Organize same-sign and opposite-sign cases and account for zeros.
- Use the correct absolute-value formula for each sign of x+y.
- Justify both mixed-case inequalities and conclude for all real inputs.

</details>
