# Transfer Euclid to exponents

*Hard · [Original olympiad-style problems](index.md)*

Compute $\gcd(2^{60}-1,2^{48}-1)$.

```answer
{"answer":{"kind":"integer","expected":"4095","checker_scope":"Exact short answer only; the complete argument remains a worked solution, not an automatically certified proof or contest result."}}
```

<details>
<summary>Hint 1</summary>

If one exponent exceeds the other, subtract an appropriate power-of-two multiple to reduce it.

</details>

<details>
<summary>Hint 2</summary>

This repeats the Euclidean algorithm on the two exponents.

</details>

<details>
<summary>Worked solution</summary>

A Euclidean identity for exponential differences reduces the gcd to one smaller power.

1. For $a>b$, $(2^a-1)-2^{a-b}(2^b-1)=2^{a-b}-1$, so the gcd is preserved when the exponent pair becomes $(b,a-b)$.
2. The Euclidean algorithm on $60$ and $48$ has gcd $12$, hence the original gcd is $2^{12}-1$.
3. The answer is $4096-1=4095$.

</details>
