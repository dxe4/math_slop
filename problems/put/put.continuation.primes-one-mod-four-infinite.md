# Primes one mod four infinite

*Hard · [Original Putnam-style training](index.md)*

Prove infinitely many primes are congruent to $1\pmod4$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Assume a finite list and construct a number of the form $(2Q)^2+1$.

</details>

<details>
<summary>Hint 2</summary>

Any odd prime divisor of $u^2+1$ has an element of order four modulo that prime.

</details>

<details>
<summary>Model proof</summary>

But no listed $p_i$ divides $N$, so $q$ is a new prime $1\pmod4$, contradiction.

1. Assume $p_1,\ldots,p_k$ list all primes $1\pmod4$, and let $Q=p_1\cdots p_k$ (or $Q=1$). The odd integer $N=(2Q)^2+1>1$ is congruent to one modulo every $p_i$.
2. Let $q$ be any prime divisor of $N$. It is odd and $(2Q)^2\equiv-1\pmod q$, so $2Q$ has multiplicative order exactly four modulo $q$; Lagrange’s theorem gives $4\mid(q-1)$, hence $q\equiv1\pmod4$.
3. But no listed $p_i$ divides $N$, so $q$ is a new prime $1\pmod4$, contradiction.

**Self-assessment rubric**

- Construct (2Q)²+1 avoiding all listed primes.
- Show every prime factor has an element of order four and hence residue one modulo four.
- Exhibit an unlisted prime of the required class.

</details>
