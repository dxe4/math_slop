# Justify every moment derivative by one exponential envelope

*Medium · [Probability problems](index.md)*

Suppose the moment generating function $M(t)=E[e^{tX}]$ is finite on an open interval containing zero. Prove that every positive integer moment exists absolutely and $M^{(k)}(0)=E[X^k]$. Justify differentiation under expectation rather than assuming it.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or required graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Choose a smaller closed interval whose double endpoints remain inside the finite-MGF interval.

</details>

<details>
<summary>Hint 2</summary>

Absorb a polynomial factor into an extra exponential to get a common integrable bound near zero.

</details>

<details>
<summary>Model proof</summary>

Two finite exponential moments dominate all fixed-order derivatives on a smaller neighborhood.

1. Choose $a>0$ with $M(2a),M(-2a)<\infty$. Then $E[e^{2a|X|}]\le M(2a)+M(-2a)<\infty$. For each fixed $k$, the boundedness of $r^ke^{-ar}$ on $r\ge0$ gives $|X|^ke^{a|X|}\le C_{k,a}e^{2a|X|}$.
2. For $|t|\le a$, every derivative integrand $X^ke^{tX}$ is therefore dominated by an integrable envelope. Difference quotients for the derivative of order $k-1$ are controlled by the order-$k$ envelope on a slightly smaller neighborhood, using the real mean-value theorem.
3. Dominated convergence, applied inductively, yields $M^{(k)}(t)=E[X^ke^{tX}]$ near zero. At zero this is the required identity; the same envelope also proves $E|X|^k<\infty$.

**Self-assessment rubric**

- Construct a two-sided exponential bound from finite endpoint moment generating functions.
- Dominate the derivative difference quotients on a valid smaller neighborhood.
- Use differentiation inductively and establish absolute moment finiteness.

</details>
