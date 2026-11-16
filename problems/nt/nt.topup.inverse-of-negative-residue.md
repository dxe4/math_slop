# Construct the inverse of a signed representative

*Medium · [Number theory](index.md)*

Find the inverse of $-11$ modulo 26, in the canonical range 0 through 25.

```answer
{"answer":{"kind":"integer","expected":"7","checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Replace negative eleven by a convenient positive representative.

</details>

<details>
<summary>Hint 2</summary>

Find a product that differs from one by a multiple of twenty-six.

</details>

<details>
<summary>Worked solution</summary>

The inverse depends on the residue class rather than its signed representative.

1. Negative eleven is congruent to fifteen modulo twenty-six, and gcd(15,26)=1.
2. The product $15\cdot7=105=4(26)+1$ shows seven is an inverse.
3. Seven lies in the required range; directly $-11\cdot7=-77=-3(26)+1$ gives the same verification.

</details>
