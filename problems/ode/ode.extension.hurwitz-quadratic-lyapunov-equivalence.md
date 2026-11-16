# Prove the matrix energy criterion in both directions

*Hard · [Differential equations problems](index.md)*

For a real square matrix A, prove all eigenvalues have negative real parts if and only if for every real symmetric positive-definite Q there is a real symmetric positive-definite P satisfying $A^TP+PA=-Q$. You may use Jordan-form decay estimates for exp(A\*t).

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

For the forward direction, integrate exp(A^T\*t)\*Q\*exp(A\*t) over positive time.

</details>

<details>
<summary>Hint 2</summary>

For the reverse direction, test the matrix identity on a complex eigenvector using conjugate transpose.

</details>

<details>
<summary>Model proof</summary>

A convergent energy integral connects spectral decay with a strict quadratic form.

1. If A is Hurwitz, Jordan-form estimates imply exponential decay up to polynomial factors, so P=integral\_0^infinity exp(A^T\*t)\*Q\*exp(A\*t) dt converges. It is real symmetric, and for every nonzero real x its quadratic value is the integral of a continuous positive function, hence positive.
2. Differentiating the integrand and integrating from zero to infinity gives A^T\*P+P\*A=\[exp(A^T\*t)\*Q\*exp(A\*t)\]\_0^infinity=-Q.
3. Conversely, choose any such P,Q and let A\*w=lambda\*w for a nonzero complex eigenvector. Then w^\*(A^T\*P+P\*A)w=2\*Re(lambda)\*w^\*P\*w=-w^\*Q\*w. Real positive-definite matrices remain positive on nonzero complex vectors, so Re(lambda)&lt;0. This covers every eigenvalue.

**Self-assessment rubric**

- Construct a convergent real symmetric positive-definite P.
- Integrate the derivative with the correct endpoint signs.
- Use conjugate-transpose quadratic forms to force every eigenvalue into the left half-plane.

</details>
