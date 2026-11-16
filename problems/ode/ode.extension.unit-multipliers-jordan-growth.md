# Show why unit-modulus multipliers need a Jordan condition

*Medium · [Differential equations problems](index.md)*

For $u'=\begin{pmatrix}0&1\\0&0\end{pmatrix}u$, use period T=1. Prove both period multipliers are one but some solutions are unbounded. Explain the missing stability condition.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The coefficient matrix squares to zero.

</details>

<details>
<summary>Hint 2</summary>

Iterating its period map retains a linearly growing off-diagonal term.

</details>

<details>
<summary>Model proof</summary>

Multiplier moduli alone do not control nontrivial neutral Jordan blocks.

1. The fundamental matrix is X(t)=I+t\*A=\[\[1,t\],\[0,1\]\], since A^2=0.
2. Thus M=X(1)=\[\[1,1\],\[0,1\]\] has both eigenvalues one, while the solution starting at \[0,1\] is \[t,1\], unbounded as t increases.
3. For bounded linear evolution, multipliers on the unit circle must also have no nontrivial Jordan blocks. This M violates that condition, so unit moduli alone do not imply Lyapunov stability.

**Self-assessment rubric**

- Compute the exact fundamental and period matrices.
- Exhibit an actual unbounded trajectory.
- Identify the additional neutral-block condition rather than changing the multiplier values.

</details>
