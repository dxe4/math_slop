# A continuous closed surjection is quotient

*Medium · [Topology problems](index.md)*

Let $q:X\to Y$ be continuous, surjective and closed. Prove that $q$ is a quotient map.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Continuity gives one direction of the required openness equivalence.

</details>

<details>
<summary>Hint 2</summary>

For the reverse direction, take a complement and use surjectivity to identify the image of its preimage.

</details>

<details>
<summary>Model proof</summary>

A closed-surjection argument turns an open preimage back into an open target set.

1. If $U\subseteq Y$ is open, continuity makes $q^{-1}(U)$ open in $X$.
2. Conversely, suppose $q^{-1}(U)$ is open. Its complement $q^{-1}(Y\setminus U)$ is closed, so its image is closed because $q$ is a closed map.
3. Surjectivity identifies that image with $Y\setminus U$, proving that $U$ is open. Thus the defining quotient equivalence holds.

**Self-assessment rubric**

- Establish the forward openness implication.
- Apply closedness to the complementary preimage.
- Use surjectivity for image equality and conclude the converse implication.

</details>
