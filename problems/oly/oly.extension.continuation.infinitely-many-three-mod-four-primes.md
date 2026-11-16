# Construct a new prime in a residue class

*Hard · [Original olympiad-style problems](index.md)*

Prove there are infinitely many primes congruent to $3$ modulo $4$, using an explicit integer built from any proposed finite list.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

If the listed primes have product $P$, consider $4P-1$.

</details>

<details>
<summary>Hint 2</summary>

A positive odd integer congruent to three modulo four must have a prime factor congruent to three modulo four with odd exponent.

</details>

<details>
<summary>Model proof</summary>

Force a missing prime factor while excluding every listed prime.

1. Suppose a finite list contains every prime congruent to three modulo four, and let its product be $P$. The list is nonempty because it contains three.
2. The integer $N=4P-1$ is greater than one and congruent to three modulo four. All its prime factors are odd.
3. If every prime factor congruent to three modulo four occurred with even exponent, the product would be one modulo four. Thus at least one such prime occurs with odd exponent.
4. No listed prime divides $N$, since $N\equiv-1$ modulo each listed prime. The required prime factor is therefore absent from the list, a contradiction.

**Self-assessment rubric**

- Build a positive nontrivial integer excluding all listed primes.
- Prove it has a prime factor in the required residue class.
- Show that factor contradicts completeness of the finite list.

</details>
