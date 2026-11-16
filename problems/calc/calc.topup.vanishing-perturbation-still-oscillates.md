# Prove nonconvergence from two parity limits

*Hard · [Calculus](index.md)*

Prove that $a_n=(-1)^n(1+1/n)$ has no real limit, although its distance from either 1 or -1 becomes small.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Separate the even and odd index subsequences.

</details>

<details>
<summary>Hint 2</summary>

A convergent sequence would give the same limit to both.

</details>

<details>
<summary>Model proof</summary>

A decaying perturbation does not remove a persistent two-phase oscillation.

1. Along even indices the terms 1+1/(2k) tend to one.
2. Along odd indices the terms -1-1/(2k-1) tend to negative one.
3. Any convergent full sequence would force both subsequences to share its limit, contradicting these distinct limits. The small perturbation does not create full convergence.

**Self-assessment rubric**

- Compute the limit of the even subsequence.
- Compute the different limit of the odd subsequence.
- Explain why two different subsequential limits exclude a full real limit.

</details>
