# Count homomorphisms between cyclic groups

*Medium · [Abstract algebra problems](index.md)*

How many group homomorphisms are there from the additive group $\mathbb Z/12\mathbb Z$ to $\mathbb Z/18\mathbb Z$?

```answer
{"answer":{"kind":"integer","expected":6,"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The image of a generator determines a homomorphism.

</details>

<details>
<summary>Hint 2</summary>

That image must satisfy the relation imposed by the order of the domain generator.

</details>

<details>
<summary>Worked solution</summary>

Count possible generator images obeying the domain relation.

1. A homomorphism is determined by $a=\varphi(1)$ and is well-defined exactly when $12a=0$ modulo $18$.
2. The divisibility condition $18\mid12a$ reduces to $3\mid2a$, hence $3\mid a$.
3. There are six such canonical residues, $0,3,6,9,12,15$, giving $6$ homomorphisms.

</details>
