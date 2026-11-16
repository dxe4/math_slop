# Positive semidefinite trace zero

*Hard · [Original Putnam-style training](index.md)*

If a real symmetric positive semidefinite matrix $A$ has $\operatorname{tr}A=0$, prove $A=0$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Use the spectral theorem and nonnegative eigenvalues.

</details>

<details>
<summary>Hint 2</summary>

The sum of those eigenvalues is zero.

</details>

<details>
<summary>Model proof</summary>

The diagonalization then gives $A=0$.

1. The real spectral theorem gives an orthonormal eigenbasis with eigenvalues $\lambda_i\ge0$ because $A$ is positive semidefinite.
2. The trace is $\sum_i\lambda_i=0$. A sum of nonnegative numbers vanishes only if every $\lambda_i=0$.
3. The diagonalization then gives $A=0$.

**Self-assessment rubric**

- Use symmetric diagonalization and nonnegative eigenvalues.
- Infer each eigenvalue is zero from zero trace.
- Recover the zero matrix from its spectral decomposition.

</details>
