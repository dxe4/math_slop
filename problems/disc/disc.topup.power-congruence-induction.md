# Carry divisibility through an exponent step

*Medium · [Discrete mathematics](index.md)*

Prove by ordinary induction that $3\mid(4^n-1)$ for every integer n&gt;=0.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The starting exponent is zero.

</details>

<details>
<summary>Hint 2</summary>

Express the next difference using the previous difference plus a fixed multiple of three.

</details>

<details>
<summary>Model proof</summary>

A recurrence identity preserves divisibility under the successor step.

1. For n=0, $4^0-1=0$, divisible by three.
2. Assume $4^k-1=3m$ for some integer m at an arbitrary k&gt;=0.
3. Then $4^{k+1}-1=4(4^k-1)+3=3(4m+1)$, also divisible by three. This proves all permitted exponents.

**Self-assessment rubric**

- Include the exponent-zero base.
- Represent the inductive divisibility with an integer witness.
- Derive a correct multiple of three for the next exponent.

</details>
