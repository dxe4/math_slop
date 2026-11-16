# Separate primes from units and composites

*Medium · [Number theory](index.md)*

Which members of $\{1,2,25,37,49,77\}$ are prime? Return a set.

```answer
{"answer":{"kind":"set","expected":["2","37"],"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

One is not prime under the two-positive-divisor definition.

</details>

<details>
<summary>Hint 2</summary>

For thirty-seven only test primes at most its square root.

</details>

<details>
<summary>Worked solution</summary>

Prime classification uses both the definition and bounded factor checks.

1. Two is prime, while one has only one positive divisor and is not prime.
2. The composites have factorizations $25=5^2$, $49=7^2$ and $77=7\cdot11$.
3. Since $6^2<37<7^2$ and none of two, three or five divides thirty-seven, it is prime; the answer is {2,37}.

</details>
