# Recover a shortened factorial from Wilson with a signed last factor

*Easy · [Computational arithmetic problems](index.md)*

Wilson gives $(p-1)!\equiv-1\pmod p$ for a prime p. Find the canonical residue of 11! modulo 13.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact requested integer, rational or finite coefficient vector only. The stated theorem or model is part of the supplied mathematics; no learner program or unrestricted proof is run or certified. This new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The factorial in Wilson at thirteen is twelve factorial.

</details>

<details>
<summary>Hint 2</summary>

Its last factor is negative one modulo thirteen.

</details>

<details>
<summary>Worked solution</summary>

Removing the last nonzero residue factor changes the Wilson sign.

1. Wilson gives 12! congruent to negative one modulo thirteen.
2. Since 12! is 12 times 11! and twelve is negative one modulo thirteen, this says negative 11! is negative one.
3. Thus 11! has canonical residue one.

</details>
