# Keep a sign condition in Bernoulli induction

*Hard · [Discrete mathematics](index.md)*

For a fixed real $x\geq-1$, prove $(1+x)^n\geq1+nx$ for every integer n&gt;=1 by ordinary induction.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The multiplier 1+x is nonnegative on the stated domain.

</details>

<details>
<summary>Hint 2</summary>

The successor expansion has one extra term whose sign follows from the induction index.

</details>

<details>
<summary>Model proof</summary>

The domain hypothesis legitimizes multiplying the inductive inequality.

1. At n=1 there is equality.
2. Assume the inequality for an arbitrary k&gt;=1. Multiplying by 1+x&gt;=0 preserves it, giving $(1+x)^{k+1}\geq(1+kx)(1+x)$.
3. The right side is $1+(k+1)x+kx^2$, at least $1+(k+1)x$ because k&gt;=1.
4. Thus the successor holds. The argument also includes x=-1, where the multiplier is zero.

**Self-assessment rubric**

- Keep x fixed and use x&gt;=-1 at the multiplication step.
- Check n=1 and formulate an arbitrary-index hypothesis.
- Expand the successor and justify the extra term has the needed sign.

</details>
