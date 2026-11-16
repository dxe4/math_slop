# Rule out a self-dividing exponential

*Hard · [Original olympiad-style problems](index.md)*

Find all positive integers $n$ satisfying $n\mid2^n-1$, and prove your classification.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

An even solution is impossible. For an odd solution greater than one, choose its least prime divisor $p$.

</details>

<details>
<summary>Hint 2</summary>

The order of two modulo $p$ divides both $n$ and $p-1$; use the minimality of $p$.

</details>

<details>
<summary>Model proof</summary>

Compare a multiplicative order with the least prime factor.

1. The value $n=1$ works. No even $n$ works because the proposed multiple is odd.
2. Assume an odd solution greater than one and let $p$ be its least prime divisor. The multiplicative order $d$ of two modulo $p$ divides $n$ by the assumed congruence, and divides $p-1$ by Fermat and the order-divisibility property.
3. If $d>1$, it has a prime divisor at most $d\le p-1$. Since $d\mid n$, that would be a prime divisor of $n$ smaller than $p$, impossible.
4. Thus $d=1$, forcing $2\equiv1\pmod p$, also impossible. Therefore the complete solution is $n=1$.

**Self-assessment rubric**

- Verify one and exclude every even integer.
- Introduce an order dividing both n and p-1.
- Use the least prime divisor to force order one.
- Conclude the contradiction and the complete solution set.

</details>
