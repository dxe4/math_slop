# Compute a large gcd through exponents

*Medium · [Number theory](index.md)*

Find $\gcd(12^5,18^3)$ without expanding both powers in full.

```answer
{"answer":{"kind":"integer","expected":"1944","checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Express twelve and eighteen using the same prime bases.

</details>

<details>
<summary>Hint 2</summary>

Take the smaller exponent for each prime.

</details>

<details>
<summary>Worked solution</summary>

Prime powers reveal the gcd without large integer expansion.

1. The factorizations are $12^5=2^{10}3^5$ and $18^3=2^3 3^6$.
2. The gcd is $2^3 3^5$.
3. Evaluating gives $8\cdot243=1944$.

</details>
