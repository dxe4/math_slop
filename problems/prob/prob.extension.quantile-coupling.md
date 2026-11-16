# Generate a law by its generalised inverse

*Medium · [Probability problems](index.md)*

Let $U$ be uniform on $(0,1)$ and let $F$ be any distribution function on $\mathbb R$: nondecreasing, right-continuous, with limits zero and one at the two infinities. For $0<u<1$, define $Q(u)=\inf\{x\in\mathbb R:F(x)\ge u\}$. Prove that $Q$ is measurable and $Q(U)$ has distribution function $F$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Use the limits of $F$ to show that $Q(u)$ is finite. Establish $Q(u)\le x$ if and only if $u\le F(x)$.

</details>

<details>
<summary>Hint 2</summary>

For the less immediate direction, approximate the defining infimum from above and use right-continuity. The resulting sublevel sets also establish measurability.

</details>

<details>
<summary>Model proof</summary>

The exact generalised-inverse sublevel identity transfers uniform probabilities to any distribution function.

1. Fix $u\in(0,1)$. The limit one at positive infinity makes $S_u=\{x:F(x)\ge u\}$ nonempty, and the limit zero at negative infinity bounds it below, so $q=Q(u)$ is finite. For every $\varepsilon>0$ there is a member of $S_u$ below $q+\varepsilon$, hence monotonicity gives $F(q+\varepsilon)\ge u$. Right-continuity yields $F(q)\ge u$.
2. If $u\le F(x)$ then $x\in S_u$, so $Q(u)\le x$. Conversely, if $Q(u)\le x$, then $F(x)\ge F(Q(u))\ge u$. Thus $\{u\in(0,1):Q(u)\le x\}=\{u\in(0,1):u\le F(x)\}$ for every real $x$. These sublevel sets are measurable, proving $Q$ is Borel measurable.
3. Applying the identity to $U$ gives $P(Q(U)\le x)=P(U\le F(x))=F(x)$, including cases $F(x)=0$ or one. Atoms and flat parts of $F$ require no strict-increase assumption; the generalised inverse covers them.

The identity $Q(u)\le x\iff u\le F(x)$ gives $P(Q(U)\le x)=F(x)$.

**Self-assessment rubric**

- Use the tail limits and right-continuity to show that the finite infimum satisfies its threshold inequality.
- Prove both directions of the generalised-inverse sublevel identity and obtain measurability.
- Apply the identity to a uniform variable for every real argument, including distribution-function values zero and one.

</details>
