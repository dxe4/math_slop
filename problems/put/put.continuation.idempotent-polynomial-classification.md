# Idempotent polynomial classification

*Hard · [Original Putnam-style training](index.md)*

Classify real polynomials $P$ satisfying $P(P(x))=P(x)$ for all real $x$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Compare degrees for a nonconstant solution.

</details>

<details>
<summary>Hint 2</summary>

Write the remaining affine candidate explicitly and compare coefficients.

</details>

<details>
<summary>Model proof</summary>

Thus $a=1$ and $b=0$, yielding $P(x)=x$. These and all constants are exactly the solutions.

1. Every constant polynomial satisfies the equation. If $P$ is nonconstant of degree $d$, then $\deg(P\circ P)=d^2$ and $\deg P=d$, so $d=1$.
2. Write $P(x)=ax+b$ with $a\ne0$. Equality $a(ax+b)+b=ax+b$ gives $a^2=a$ and $ab=0$.
3. Thus $a=1$ and $b=0$, yielding $P(x)=x$. These and all constants are exactly the solutions.

**Self-assessment rubric**

- Use degree of composition to reduce nonconstant solutions to degree one.
- Compare coefficients for an affine idempotent polynomial.
- Include all constants and identity, with verification.

</details>
