# Recover factorization using two compatible summaries

*Hard · [Number theory](index.md)*

A positive integer N has form $2^a3^b$, with nonnegative integer exponents. Given gcd(N,90)=18 and lcm(N,90)=540, return a and b.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"a":"2","b":"3"},"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Factor ninety, eighteen and five hundred forty.

</details>

<details>
<summary>Hint 2</summary>

GCD takes exponent minima while LCM takes maxima.

</details>

<details>
<summary>Worked solution</summary>

The two summaries locate each unknown exponent relative to those in ninety.

1. The known factorizations are $90=2\cdot3^2\cdot5$, $18=2\cdot3^2$, and $540=2^2\cdot3^3\cdot5$.
2. For the prime two, the maximum exponent must be two and the known exponent is one, so a=2. For three, the maximum is three and the known exponent is two, so b=3.
3. The resulting N=108 has gcd eighteen and lcm five hundred forty with ninety, confirming consistency.

</details>
