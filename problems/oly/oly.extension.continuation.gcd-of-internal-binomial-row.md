# Determine the gcd of an entire binomial row

*Hard · [Original olympiad-style problems](index.md)*

For $n>1$, prove that $\gcd\{\binom n1,\ldots,\binom n{n-1}\}$ is $p$ if $n$ is a power of a prime $p$, and is $1$ otherwise.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

For a prime divisor $p$ of the gcd, write $n=p^am$ with $p\nmid m$ and use $(1+x)^n\equiv(1+x^{p^a})^m\pmod p$.

</details>

<details>
<summary>Hint 2</summary>

When $n=p^a$, use index $p^{a-1}$ to show the gcd is not divisible by $p^2$.

</details>

<details>
<summary>Model proof</summary>

Classify prime divisors of the gcd, then determine their exact exponent.

1. In characteristic $p$, binomial coefficients of $(1+x)^p$ other than endpoints are divisible by $p$, so repeated powering gives $(1+x)^{p^a}=1+x^{p^a}$.
2. If $n=p^am$ with $p\nmid m$ and $m>1$, the coefficient of $x^{p^a}$ in $(1+x)^n$ is congruent to $m$, nonzero modulo $p$. Since that index is internal, $p$ cannot divide the row gcd. If $n=p^a$, every internal coefficient is zero modulo $p$.
3. Any prime dividing the gcd also divides the first coefficient $n$. The preceding step shows it can occur only when $n$ is a power of that same prime. Hence a number with at least two distinct prime factors has row gcd one.
4. For $n=p^a$, take $k=p^{a-1}$. In $\binom nk=(n/k)\prod_{j=1}^{k-1}(n-j)/j$, each numerator factor $n-j$ has the same p-adic order as $j$, since $0<j<n$. Thus the product contributes net order zero and $n/k$ contributes exactly one.
5. The gcd is divisible by $p$ but not $p^2$, and no other prime can divide it. It is exactly $p$, including the case $a=1$.

**Self-assessment rubric**

- Justify the characteristic-p powering identity.
- Use a specific internal coefficient to rule out primes when n is not their power.
- Show one internal coefficient has precisely one factor p in the prime-power case.
- Exclude every other prime and conclude both cases.

</details>
