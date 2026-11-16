# Filter the complete common-divisor set by a square condition

*Medium · [Number theory](index.md)*

Find all positive perfect squares that divide both $72$ and $108$. Return a set.

```answer
{"answer":{"kind":"set","expected":["1","4","9","36"],"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Every common divisor divides the gcd.

</details>

<details>
<summary>Hint 2</summary>

In a perfect square, each prime exponent is even.

</details>

<details>
<summary>Worked solution</summary>

Common-divisor enumeration can be reduced to the square divisors of the gcd.

1. The factorizations give gcd equal to $2^2 3^2=36$.
2. A square divisor of thirty-six uses exponent zero or two for each prime.
3. The resulting set is $\{1,4,9,36\}$, and every listed number divides both original integers.

</details>
