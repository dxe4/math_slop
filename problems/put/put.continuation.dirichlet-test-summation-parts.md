# Dirichlet test summation parts

*Hard · [Original Putnam-style training](index.md)*

Let partial sums $B_N=\sum_{n=1}^Nb_n$ be uniformly bounded, and let real $a_n\downarrow0$. Prove $\sum_{n\ge1}a_nb_n$ converges.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Apply summation by parts to a tail from $m$ through $N$.

</details>

<details>
<summary>Hint 2</summary>

Use monotonicity to bound the total variation of that tail by $a_m$.

</details>

<details>
<summary>Model proof</summary>

Since $a_m\to0$, the tails are uniformly Cauchy in $N$, so the series converges.

1. For $m\le N$, write $b_n=B_n-B_{n-1}$ and sum by parts to express the tail as $a_NB_N-a_mB_{m-1}+\sum_{n=m}^{N-1}(a_n-a_{n+1})B_n$.
2. If $|B_n|\le C$, its absolute value is at most $C(a_N+a_m+\sum_{n=m}^{N-1}(a_n-a_{n+1}))=2Ca_m$.
3. Since $a_m\to0$, the tails are uniformly Cauchy in $N$, so the series converges.

**Self-assessment rubric**

- Write the tail by summation by parts using bounded partial sums.
- Use monotonicity to telescope total variation of a\_n.
- Obtain a bound proportional to a\_m and conclude convergence.

</details>
