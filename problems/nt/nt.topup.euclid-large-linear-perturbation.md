# Reduce a large input before finding the gcd

*Medium · [Number theory](index.md)*

Find $\gcd(2026,17\cdot2026+45)$ by a Euclidean reduction, without expanding the larger input.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Subtract seventeen copies of the smaller input.

</details>

<details>
<summary>Hint 2</summary>

Divide two thousand twenty-six by forty-five.

</details>

<details>
<summary>Worked solution</summary>

Integer multiple subtraction strips away irrelevant size.

1. Subtracting seventeen times 2026 from the larger input leaves forty-five, preserving the common divisors.
2. The next division is $2026=45\cdot45+1$.
3. The final nonzero remainder is one, so the gcd is one.

</details>
