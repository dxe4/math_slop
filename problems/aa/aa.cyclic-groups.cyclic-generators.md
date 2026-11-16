# Identify every generator of a cyclic group

*Medium · [Abstract algebra problems](index.md)*

Which canonical residues generate the additive group $\mathbb Z/15\mathbb Z$?

```answer
{"answer":{"kind":"set","expected":[1,2,4,7,8,11,13,14],"checker_scope":"Exact stated finite group or ring answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

A residue generates the whole group precisely when its additive order equals the modulus.

</details>

<details>
<summary>Hint 2</summary>

Use coprimality with the modulus to classify the residues.

</details>

<details>
<summary>Worked solution</summary>

Generators of an additive cyclic group are exactly the coprime residue representatives.

1. The additive order of $k$ is $15/\gcd(15,k)$, which equals $15$ exactly when the gcd is one.
2. Exclude residues divisible by $3$ or $5$ from the range $0$ through $14$.
3. The remaining residues are $\{1,2,4,7,8,11,13,14\}$.

</details>
