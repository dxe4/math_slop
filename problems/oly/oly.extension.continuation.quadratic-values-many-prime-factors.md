# Force arbitrarily many prime factors of a quadratic

*Hard · [Original olympiad-style problems](index.md)*

For every positive integer $k$, construct infinitely many positive integers $n$ such that $n^2+1$ has at least $k$ distinct odd prime factors. Give a proof without assuming a theorem on primes in arithmetic progressions.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Build as many distinct odd prime divisors of numbers of form $u^2+1$ as needed: square twice the product of previously found primes and add one.

</details>

<details>
<summary>Hint 2</summary>

Retain one square root of negative one modulo each prime, then combine those root conditions by the Chinese remainder theorem.

</details>

<details>
<summary>Model proof</summary>

Separate production of new primes from simultaneous congruence control.

1. Start with prime five dividing $2^2+1$. If odd primes $p_1,\ldots,p_j$ have been found with roots of negative one, put $P=p_1\cdots p_j$ and factor $(2P)^2+1>1$.
2. It is odd and is one modulo every listed prime, so any of its prime divisors is a new odd prime. The residue $2P$ is a root of negative one modulo that new prime. This inductively supplies $k$ distinct primes and roots.
3. Use the Chinese remainder theorem to find $n$ congruent to the chosen root modulo each of these pairwise coprime primes.
4. Every such $n$ makes each prime divide $n^2+1$. The full arithmetic progression modulo their product has infinitely many positive members.
5. Thus the construction forces the desired number of distinct factors without requiring the quadratic value itself to be prime or specifying all its other factors.

**Self-assessment rubric**

- Produce a genuinely new odd prime with a retained root of negative one.
- Explain how to obtain any prescribed number of distinct primes.
- Apply CRT to independent prime conditions.
- Produce infinitely many positive inputs and the distinct-factor conclusion.

</details>
