# Sum Fermat powers over every nonzero residue

*Medium · [Number theory](index.md)*

Find the canonical residue modulo $11$ of the sum of k^10 for k=1,2,...,10.

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Every summation input is nonzero modulo the prime eleven.

</details>

<details>
<summary>Hint 2</summary>

Apply the same theorem to each of the ten terms before adding.

</details>

<details>
<summary>Worked solution</summary>

Verified prime-modulus hypotheses reduce a long sum to repeated unit contributions.

1. Eleven is prime and none of the ten inputs is divisible by it.
2. Fermat gives $k^{10}\equiv1\pmod {11}$ for each input.
3. The sum is congruent to ten, already in the canonical range.

</details>
