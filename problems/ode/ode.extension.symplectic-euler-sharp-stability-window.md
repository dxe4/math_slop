# Find the full bounded-orbit window of a symplectic discretization

*Hard · [Differential equations problems](index.md)*

For h&gt;0 let the oscillator step be $P=p-hq$, Q=q+hP. Prove all iterated trajectories are bounded exactly when 0&lt;h&lt;2. Analyze h=2 and h&gt;2; do not infer boundedness from determinant one alone.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

For 0&lt;h&lt;2, use the invariant quadratic form q^2+p^2-h\*q\*p.

</details>

<details>
<summary>Hint 2</summary>

At the threshold inspect the Jordan structure, and above it use the trace and determinant.

</details>

<details>
<summary>Model proof</summary>

A positive modified energy controls the stable window; its degeneracy marks the threshold.

1. The update matrix is S=\[\[1-h^2,h\],\[-h,1\]\], with determinant one and trace 2-h^2. Direct substitution preserves E\_h=q^2+p^2-h\*q\*p. Its symmetric coefficient matrix has eigenvalues 1-h/2 and 1+h/2, so for 0&lt;h&lt;2 it is positive definite. Conservation then bounds every iterate.
2. At h=2, S=\[\[-3,2\],\[-2,1\]\] has repeated eigenvalue -1 and S+I is nonzero with square zero. Thus S^n=(-1)^n\*(I-n\*(S+I)), and any initial state outside the kernel of S+I has linear growth. Hence not all trajectories are bounded.
3. For h&gt;2 the trace is less than -2 while the determinant is one, so the two eigenvalues are distinct negative real reciprocal numbers, one of modulus greater than one. Its eigenvector gives exponential growth. These cases establish exactly the claimed window.

**Self-assessment rubric**

- Verify the invariant and its exact positive-definiteness range.
- Analyze the endpoint's nontrivial repeated-eigenvalue growth.
- Use the trace and determinant to exhibit an expanding mode.

</details>
