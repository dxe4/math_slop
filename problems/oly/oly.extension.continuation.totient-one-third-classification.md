# Classify a prescribed totient ratio

*Hard · [Original olympiad-style problems](index.md)*

Let $\varphi(n)$ count integers in $\{1,\ldots,n\}$ coprime to $n$. Prove $\varphi(n)=n/3$ holds exactly for $n=2^a3^b$ with integers $a,b\ge1$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Inclusion-exclusion gives $\varphi(n)/n=\prod_{p\mid n}(1-1/p)$.

</details>

<details>
<summary>Hint 2</summary>

After clearing denominators, examine the largest prime divisor of $n$.

</details>

<details>
<summary>Model proof</summary>

Use the largest prime to restrict every possible factor support.

1. Inclusion-exclusion over the distinct prime divisors gives the displayed product formula. The equality is equivalent to $3\prod_{p\mid n}(p-1)=\prod_{p\mid n}p$.
2. If the largest prime divisor were greater than three, it could divide neither the leading three nor any factor $p-1$ on the left, all of which are smaller. This contradicts its appearance on the right.
3. Thus only primes two and three can divide $n$. Neither a pure power of two nor a pure power of three has ratio one third; their ratios are one half and two thirds respectively. The case $n=1$ also fails.
4. When both primes occur, the product ratio is $(1/2)(2/3)=1/3$ independently of their positive exponents. This proves exactly the stated family.

**Self-assessment rubric**

- Derive or justify the finite prime product by inclusion-exclusion.
- Use divisibility of the cleared equality to exclude larger prime factors.
- Check both singleton prime supports and the unit case.
- Verify all and only positive powers of both two and three.

</details>
