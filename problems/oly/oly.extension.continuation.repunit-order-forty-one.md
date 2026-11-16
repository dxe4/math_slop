# Find the first repunit divisible by forty-one

*Medium · [Original olympiad-style problems](index.md)*

Let $R_n$ be the base-ten integer consisting of $n$ copies of digit $1$, where $n\ge1$. Find the least $n$ for which $41\mid R_n$.

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Use $9R_n=10^n-1$ and the fact that $9$ is invertible modulo $41$.

</details>

<details>
<summary>Hint 2</summary>

$10^5-1=99999=41\cdot2439$, so the multiplicative order divides the prime number $5$.

</details>

<details>
<summary>Worked solution</summary>

Determine an exact multiplicative order rather than check unbounded strings.

1. Divisibility of $R_n$ is equivalent to $10^n\equiv1\pmod{41}$, since $41$ is coprime to $9$.
2. The displayed factorization shows the order divides $5$. The order is not $1$ because $10\not\equiv1\pmod{41}$.
3. As $5$ is prime, the order is exactly $5$, which is the least admissible length.

</details>
