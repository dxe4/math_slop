# Derive the correct weight in spectral orthogonality

*Medium · [Differential equations problems](index.md)*

Let p be positive C^1 and q,w continuous real on \[a,b\], with w&gt;0. Suppose u,v are real Dirichlet eigenfunctions of $-(p y')'+q y=\lambda w y$ with distinct eigenvalues lambda and mu. Prove the integral of w\*u\*v on \[a,b\] is zero.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Multiply each equation by the other eigenfunction and subtract.

</details>

<details>
<summary>Hint 2</summary>

The boundary term vanishes because both functions satisfy Dirichlet data.

</details>

<details>
<summary>Model proof</summary>

The weight comes from the eigenvalue side of the self-adjoint equation.

1. Multiply the equation for u by v and that for v by u. Subtract and integrate; the q terms cancel.
2. Integration by parts gives (lambda-mu)\*integral\_a^b w\*u\*v=\[p\*(u\*vprime-v\*uprime)\]\_a^b=0, since u and v vanish at both endpoints.
3. Because lambda differs from mu, division gives the asserted weighted orthogonality. Replacing w by one without a hypothesis would change the conclusion.

**Self-assessment rubric**

- Subtract the two equations with their correct eigenvalues and weight.
- Show the endpoint concomitant vanishes under the actual data.
- Use distinct eigenvalues and retain the weight in the final integral.

</details>
