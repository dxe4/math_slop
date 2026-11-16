# Laplace sine resolvent

*Hard · [Original Putnam-style training](index.md)*

For $a>0$, prove $\int_0^\infty e^{-ax}\sin x\,dx=1/(a^2+1)$ using only integration by parts and justified improper limits.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Introduce both sine and cosine Laplace integrals.

</details>

<details>
<summary>Hint 2</summary>

Integrate each by parts and solve the resulting two linear equations.

</details>

<details>
<summary>Model proof</summary>

Substitute $C=aS$ into $aC=1-S$ to get $(a^2+1)S=1$, hence $S=1/(a^2+1)$.

1. Absolute convergence follows from $|e^{-ax}\sin x|,|e^{-ax}\cos x|\le e^{-ax}$. Set $S=\int_0^\infty e^{-ax}\sin xdx$ and $C=\int_0^\infty e^{-ax}\cos xdx$.
2. Integration by parts with $dv=e^{-ax}dx$ gives $S=C/a$ (zero sine boundary) and $C=1/a-S/a$ (cosine boundary equals $1/a$). All endpoint terms at infinity vanish.
3. Substitute $C=aS$ into $aC=1-S$ to get $(a^2+1)S=1$, hence $S=1/(a^2+1)$.

**Self-assessment rubric**

- Establish convergence of both sine and cosine Laplace integrals for a&gt;0.
- Derive the two integration-by-parts equations with correct boundary signs.
- Solve the coupled equations for the sine integral.

</details>
