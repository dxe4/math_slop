# Leibniz arctangent endpoint

*Hard · [Original Putnam-style training](index.md)*

Prove $\sum_{n=0}^{\infty}(-1)^n/(2n+1)=\pi/4$ by integrating finite geometric sums, including an endpoint remainder bound.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Apply the finite geometric identity to $1/(1+x^2)$.

</details>

<details>
<summary>Hint 2</summary>

Integrate the remainder on $[0,1]$ rather than substituting $x=1$ into an infinite series.

</details>

<details>
<summary>Model proof</summary>

The integral of $(1+x^2)^{-1}$ is $\arctan1-\arctan0=\pi/4$; the remainder tends to zero, proving the identity.

1. For $0\le x\le1$, $1/(1+x^2)=\sum_{n=0}^{N-1}(-1)^nx^{2n}+(-1)^Nx^{2N}/(1+x^2)$.
2. Integrating the finite sum gives $\sum_{n=0}^{N-1}(-1)^n/(2n+1)$, while the remainder magnitude is at most $\int_0^1x^{2N}dx=1/(2N+1)$.
3. The integral of $(1+x^2)^{-1}$ is $\arctan1-\arctan0=\pi/4$; the remainder tends to zero, proving the identity.

**Self-assessment rubric**

- Expand 1/(1+x²) by a finite geometric identity.
- Integrate and bound the remainder by 1/(2N+1).
- Evaluate the limiting integral as π/4.

</details>
