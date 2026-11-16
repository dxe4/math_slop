# Palindromic reciprocal multiplicity

*Hard · [Original Putnam-style training](index.md)*

Let $P\in\mathbb C[x]$ have degree $d$, nonzero constant term, and satisfy $P(x)=x^dP(1/x)$ for $x\ne0$. Prove nonzero roots occur with their reciprocals at the same multiplicity.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Use the inversion map $x\mapsto1/x$ near a nonzero root.

</details>

<details>
<summary>Hint 2</summary>

Multiplication by $x^d$ does not alter a local zero order away from zero.

</details>

<details>
<summary>Model proof</summary>

The factor $x^d$ is nonzero at $1/r$, so the reciprocal identity gives $P$ a zero of the same order at $1/r$.

1. If $r\ne0$ is a root of multiplicity $m$, factor $P(x)=(x-r)^mQ(x)$ with $Q(r)\ne0$.
2. Near $x=1/r$, $P(1/x)=(1/x-r)^mQ(1/x)$ has a zero of order $m$, since $1/x-r=(1-rx)/x$ has a simple zero there.
3. The factor $x^d$ is nonzero at $1/r$, so the reciprocal identity gives $P$ a zero of the same order at $1/r$.

**Self-assessment rubric**

- Factor the nonzero root with its multiplicity.
- Show inversion maps the root to its reciprocal preserving vanishing order.
- Use the reciprocal polynomial identity and nonzero x^d multiplier to conclude equal multiplicity.

</details>
