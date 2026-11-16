# Use the positive-input product identity and check consistency

*Medium · [Number theory](index.md)*

Positive integers a,b satisfy $a=18$, gcd(a,b)=6 and lcm(a,b)=180. Find b.

```answer
{"answer":{"kind":"integer","expected":"60","checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

For positive inputs, the product equals gcd times lcm.

</details>

<details>
<summary>Hint 2</summary>

Verify the reconstructed partner against both supplied conditions.

</details>

<details>
<summary>Worked solution</summary>

The product identity gives a candidate, while direct gcd and lcm checks confirm it.

1. The product must be $6\cdot180=1080$.
2. Therefore $b=1080/18=60$.
3. Indeed gcd(18,60)=6 and their least common multiple is one hundred eighty, so the candidate meets both constraints.

</details>
