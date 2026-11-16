# Reject a candidate outside its defining case

*Hard · [Discrete mathematics](index.md)*

Find all real solutions of $|x-1|=2x+1$ with a proof that your cases are exhaustive. Check candidates in their original case conditions.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Split at the point where the absolute-value argument changes sign.

</details>

<details>
<summary>Hint 2</summary>

A root of a case equation must still satisfy that case condition.

</details>

<details>
<summary>Model proof</summary>

Case conditions are hypotheses that cannot be discarded after solving the linear equations.

1. If x&gt;=1, the equation becomes x-1=2x+1, giving x=-2, which fails x&gt;=1 and must be discarded.
2. If x&lt;1, it becomes 1-x=2x+1, giving x=0, which satisfies x&lt;1 and the original equation.
3. The two cases cover all reals, so the full solution set is $\{0\}$.

**Self-assessment rubric**

- Split at x=1 and use the correct formula in each case.
- Check each case root against its branch condition.
- Verify admitted roots in the original equation and exclude any others.

</details>
