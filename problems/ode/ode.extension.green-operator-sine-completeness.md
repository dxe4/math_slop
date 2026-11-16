# Obtain a complete eigenbasis from a compact inverse

*Hard · [Differential equations problems](index.md)*

On L^2(0,1), let Kf(t)=integral\_0^1 G(t,s)f(s) ds with $G(t,s)=\min(t,s)(1-\max(t,s))$. Using the spectral theorem for compact self-adjoint operators, prove the sine eigenfunctions sin(n\*pi\*t), n&gt;=1, form a complete orthogonal family. Explain why no zero-eigenvalue remainder is missed.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The kernel is continuous and symmetric, and K is the inverse of the Dirichlet negative second derivative.

</details>

<details>
<summary>Hint 2</summary>

Identify all nonzero eigenfunctions by the corresponding differential equation, then use injectivity.

</details>

<details>
<summary>Model proof</summary>

Compact self-adjoint completeness becomes Fourier completeness once the inverse's kernel is controlled.

1. The continuous symmetric kernel makes K compact and self-adjoint on L^2. If y=Kf, the split-integral representation gives y(0)=y(1)=0 and -ydoubleprime=f in the weak, hence appropriate Sobolev, sense. Integration by parts gives inner product of Kf with f equal to integral \|yprime\|^2, so K is positive; it is injective because Kf=0 implies f=0.
2. If Kphi=mu\*phi with mu nonzero, continuity of Kphi first makes phi continuous. The representation then gives phi C^2 with -phi''=(1/mu)\*phi and Dirichlet data. Positivity gives mu&gt;0, and the elementary boundary equation yields phi a multiple of sin(n\*pi\*t), mu=1/(n\*pi)^2.
3. The compact self-adjoint spectral theorem says the closed span of all nonzero eigenspaces is the orthogonal complement of ker K. Injectivity makes this the entire L^2 space. Thus the identified sine family is complete, with orthogonality from self-adjointness or direct integration.

**Self-assessment rubric**

- Establish compactness, self-adjointness, positivity and injectivity.
- Justify regularity before finding all nonzero eigenfunctions.
- Use the exact spectral-theorem decomposition and eliminate its kernel part.

</details>
