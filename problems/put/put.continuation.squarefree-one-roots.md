# Squarefree one roots

*Hard · [Original Putnam-style training](index.md)*

If $N=p_1\cdots p_k$ is a product of $k$ distinct odd primes, prove $x^2\equiv1\pmod N$ has exactly $2^k$ residue solutions modulo $N$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Analyze the polynomial equation modulo each prime.

</details>

<details>
<summary>Hint 2</summary>

Combine independent sign choices by the Chinese remainder theorem.

</details>

<details>
<summary>Model proof</summary>

The Chinese remainder theorem assigns exactly one residue modulo $N$ to each sign vector, and every global root yields such a vector. Hence the count is $2^k$.

1. For an odd prime $p_i$, $(x-1)(x+1)\equiv0\pmod{p_i}$ implies $x\equiv\pm1\pmod{p_i}$; the two residues are distinct.
2. There are $2^k$ independent choices of one sign at every $p_i$.
3. The Chinese remainder theorem assigns exactly one residue modulo $N$ to each sign vector, and every global root yields such a vector. Hence the count is $2^k$.

**Self-assessment rubric**

- Derive exactly two distinct local roots for every odd prime factor.
- Count the independent sign patterns across prime factors.
- Use CRT both to produce and exhaust global residue roots.

</details>
