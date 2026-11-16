# Sum the orders in a cyclic group

*Medium · [Abstract algebra problems](index.md)*

Find the sum of the orders of all elements of the additive group $\mathbb Z/8\mathbb Z$. Include the identity, whose order is $1$.

```answer
{"answer":{"kind":"integer","expected":43,"checker_scope":"Exact stated finite group or ring answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Group elements by their additive orders instead of treating each residue in isolation.

</details>

<details>
<summary>Hint 2</summary>

Separate the odd residues, the two residues divisible by two but not four, and the remaining cases.

</details>

<details>
<summary>Worked solution</summary>

Classify elements by gcd with the modulus and add their order contributions.

1. The four odd residues each have order $8$, contributing $32$.
2. The residues $2,6$ have order $4$, contributing $8$, while residue $4$ has order $2$.
3. The identity contributes $1$. The sum is $32+8+2+1=43$.

</details>
