# Gamma rescaling third moment

*Medium · [Original Putnam-style training](index.md)*

Evaluate $\int_0^\infty x^3e^{-2x}\,dx$ exactly, justifying the improper limit.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":8},"checker_scope":"Checks only the exact bounded result; derivation and domain assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Rescale to the standard exponential weight.

</details>

<details>
<summary>Hint 2</summary>

Integrate by parts recursively rather than expanding the exponential.

</details>

<details>
<summary>Worked solution</summary>

Hence $J_3=3\cdot2\cdot1=6$ and the required value is $6/16=3/8$.

1. With $u=2x$, the integral becomes $2^{-4}\int_0^\infty u^3e^{-u}\,du$.
2. For $J_k=\int_0^\infty u^ke^{-u}\,du$, integration by parts gives $J_k=kJ_{k-1}$; boundary terms $u^ke^{-u}$ vanish and $J_0=1$.
3. Hence $J_3=3\cdot2\cdot1=6$ and the required value is $6/16=3/8$.

</details>
