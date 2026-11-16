# Prime factorization: recover prime exponents

*Medium · [Number theory](index.md)*

Complete $72 = 2^a \times  3^b$ with nonnegative integer exponents. Return a and b.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"a":3,"b":2},"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Repeatedly divide by $2$ until the remaining number is odd.

</details>

<details>
<summary>Hint 2</summary>

Then count the factors of $3$ in what remains.

</details>

<details>
<summary>Worked solution</summary>

Prime exponents count repeated prime factors.

1. $72 = 2 \times  2 \times  2 \times  9$ and $9 = 3 \times  3$.
2. Thus $a = 3, b = 2$; the product $8 \times  9$ is $72$.

</details>
