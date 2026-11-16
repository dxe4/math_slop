# Combine independent residue-ring invariants

*Medium · [Abstract algebra problems](index.md)*

For $R=(\mathbb Z/12)\times(\mathbb Z/25)$, return idempotent\_count and unit\_count.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"idempotent_count":"8","unit_count":"80"},"checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Both conditions hold componentwise in a product ring.

</details>

<details>
<summary>Hint 2</summary>

Split the modulus twelve by coprime prime powers when counting idempotents.

</details>

<details>
<summary>Worked solution</summary>

Chinese remaindering separates local idempotent choices from unit counts.

1. The ring Z/12 is isomorphic to Z/4 times Z/3; each local factor has two idempotents, so it has four. Z/25 is local and has two.
2. Idempotents combine componentwise, yielding eight in R.
3. The unit counts are four modulo twelve and twenty modulo twenty-five, so R has eighty units.

</details>
