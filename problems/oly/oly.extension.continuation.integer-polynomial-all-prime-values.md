# Obstruct a polynomial that is always prime

*Hard · [Original olympiad-style problems](index.md)*

Let $P\in\mathbb Z[x]$ and suppose $P(n)$ is a positive prime for every integer $n\ge0$. Prove $P$ is a constant prime polynomial.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Let $p=P(0)$. For every nonnegative integer $k$, reduce $P(kp)$ modulo $p$.

</details>

<details>
<summary>Hint 2</summary>

Primality then forces the same exact value at infinitely many inputs.

</details>

<details>
<summary>Model proof</summary>

Turn coefficient divisibility into infinitely many roots of a difference polynomial.

1. The constant term is the prime $p=P(0)$. For each $k\ge0$, every nonconstant term of $P(kp)$ is divisible by $p$, so $P(kp)\equiv0\pmod p$.
2. Its value is a positive prime by hypothesis, hence it must equal $p$, not merely be a multiple of it.
3. The polynomial $P-p$ has infinitely many distinct roots $kp$. A nonzero polynomial has at most its degree many roots, so this difference is zero.
4. Thus $P$ is constant equal to $p$. Every constant positive prime polynomial does satisfy the hypothesis, completing the classification.

**Self-assessment rubric**

- Choose an infinite arithmetic progression whose polynomial values are divisible by a fixed prime.
- Use positive primality to force equality, not just divisibility.
- Apply the finite root bound to obtain a constant polynomial.
- Verify every constant prime indeed works.

</details>
