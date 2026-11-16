# Periodic polynomial rigidity

*Hard · [Original Putnam-style training](index.md)*

If a real polynomial $P$ satisfies $P(x+1)=P(x)$ for all real $x$, prove $P$ is constant.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Consider the finite difference of a leading monomial.

</details>

<details>
<summary>Hint 2</summary>

Positive-degree polynomials cannot have zero shift difference.

</details>

<details>
<summary>Model proof</summary>

This contradicts the assumed shift identity; hence $d=0$ and $P$ is constant.

1. If $P$ has degree $d\ge1$ with leading term $ax^d$, then $P(x+1)-P(x)$ has leading term $ad x^{d-1}$: lower-degree terms have differences of degree at most $d-2$.
2. Because $a\ne0$ and $d\ge1$, that difference is a nonzero polynomial.
3. This contradicts the assumed shift identity; hence $d=0$ and $P$ is constant.

**Self-assessment rubric**

- Compute the nonzero leading term of a positive-degree shift difference.
- Contradict the identically zero difference required by period one.
- Conclude and verify only constant polynomials remain.

</details>
