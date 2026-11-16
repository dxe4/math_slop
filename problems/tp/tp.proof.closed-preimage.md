# Continuity pulls back closed sets

*Easy · [Topology problems](index.md)*

Let $f:X\to Y$ be continuous between topological spaces. Prove that $f^{-1}(C)$ is closed in $X$ whenever $C$ is closed in $Y$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

A closed set is characterized by the openness of its complement.

</details>

<details>
<summary>Hint 2</summary>

Preimages commute with complements taken in the corresponding whole spaces.

</details>

<details>
<summary>Model proof</summary>

Convert a closed-set claim into an open-preimage claim.

1. Because $C$ is closed, $Y\setminus C$ is open.
2. Continuity makes $f^{-1}(Y\setminus C)$ open in $X$, and this preimage equals $X\setminus f^{-1}(C)$.
3. The complement of $f^{-1}(C)$ is therefore open, proving that $f^{-1}(C)$ is closed.

**Self-assessment rubric**

- Use closedness in the codomain to obtain an open complement.
- Justify the complement-preimage identity in the correct spaces.
- Conclude closedness from the open complement in the domain.

</details>
