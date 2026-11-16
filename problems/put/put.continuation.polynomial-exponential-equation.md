# Polynomial exponential equation

*Hard · [Original Putnam-style training](index.md)*

Classify real polynomials $P$ satisfying $P(x+y)=P(x)P(y)$ for every real $x,y$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Set $y=x$ and compare polynomial degrees.

</details>

<details>
<summary>Hint 2</summary>

Handle constant polynomials separately.

</details>

<details>
<summary>Model proof</summary>

Both constant polynomials satisfy the identity, completing the classification.

1. If a nonzero nonconstant solution has degree $d\ge1$, then $P(2x)$ has degree $d$ but $P(x)^2$ has degree $2d$. The identity at $y=x$ makes this impossible.
2. Thus every solution is constant, say $P(x)=c$. The equation becomes $c=c^2$, so $c=0$ or $c=1$.
3. Both constant polynomials satisfy the identity, completing the classification.

**Self-assessment rubric**

- Compare degrees in P(2x)=P(x)² for nonconstant P.
- Solve c=c² after excluding nonconstant polynomials.
- Verify both constants in the original two-variable equation.

</details>
