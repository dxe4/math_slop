# Unit circle polynomial monomial

*Hard · [Original Putnam-style training](index.md)*

If a complex polynomial $P$ satisfies $|P(z)|=1$ for every $|z|=1$, prove $P(z)=c z^k$ for some integer $k\ge0$ and $|c|=1$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Form the reversed-conjugate polynomial $P^*(z)=z^d\overline{P(1/\bar z)}$.

</details>

<details>
<summary>Hint 2</summary>

On the unit circle, compare $P(z)P^*(z)$ with $z^d$ and extend the identity algebraically.

</details>

<details>
<summary>Model proof</summary>

Every root of $P$ is consequently a root of $z^d$, hence zero. The fundamental theorem of algebra then makes $P(z)=c z^k$ (including $k=0$); unit-circle modulus forces $|c|=1$.

1. Let $d=\deg P$. The expression $P^*(z)=z^d\overline{P(1/\bar z)}$ is a polynomial with coefficients reversed and conjugated.
2. For $|z|=1$, $P^*(z)=z^d\overline{P(z)}$, so $P(z)P^*(z)=z^d|P(z)|^2=z^d$. Two polynomials agreeing at infinitely many circle points agree identically.
3. Every root of $P$ is consequently a root of $z^d$, hence zero. The fundamental theorem of algebra then makes $P(z)=c z^k$ (including $k=0$); unit-circle modulus forces $|c|=1$.

**Self-assessment rubric**

- Define the reversed-conjugate polynomial and its unit-circle relation.
- Promote the unit-circle modulus identity to a global polynomial identity.
- Show every root is zero and infer a unit-modulus monomial.

</details>
