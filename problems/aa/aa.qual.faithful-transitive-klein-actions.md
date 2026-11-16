# Count labeled faithful transitive actions of the Klein group

*Medium · [Abstract algebra problems](index.md)*

How many homomorphisms from $C_2\times C_2$ to S4 give faithful transitive actions on the four labeled points? Count homomorphisms, not images up to conjugacy.

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

A faithful transitive action of a group with four elements is regular.

</details>

<details>
<summary>Hint 2</summary>

In a regular action each nonidentity involution has no fixed point.

</details>

<details>
<summary>Worked solution</summary>

A unique regular image can carry several different labeled group isomorphisms.

1. Every such action is regular, so each of the three nonidentity elements acts as a fixed-point-free involution. In S4 the only such involutions are the three double transpositions.
2. They together with the identity form one Klein four subgroup, so this is the only possible image.
3. Each isomorphism from the given Klein group to that image is allowed; the images of a basis have three then two choices, giving six homomorphisms.

</details>
