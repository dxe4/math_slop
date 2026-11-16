# Filter prime divisors by a second primality condition

*Medium · [Number theory](index.md)*

Find every prime p such that $p\mid42$ and p+2 is also prime. Return a set.

```answer
{"answer":{"kind":"set","expected":["3"],"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

First list prime divisors of forty-two.

</details>

<details>
<summary>Hint 2</summary>

Then test the shifted values; a divisor need not stay prime after adding two.

</details>

<details>
<summary>Worked solution</summary>

A factorization supplies a short complete candidate list.

1. The prime divisors of forty-two are two, three and seven.
2. Adding two gives four, five and nine respectively.
3. Only five is prime, so the required prime p is three.

</details>
