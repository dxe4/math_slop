# The defining continuity property of a quotient

*Medium · [Topology problems](index.md)*

Let $q:X\to Y$ be a surjective quotient map: $U\subseteq Y$ is open exactly when $q^{-1}(U)$ is open in $X$. For any map $g:Y\to Z$, prove that $g$ is continuous if and only if $g\circ q$ is continuous.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

One direction is a composition theorem.

</details>

<details>
<summary>Hint 2</summary>

For the converse, apply the defining quotient condition to the preimage under the second map of an arbitrary open set.

</details>

<details>
<summary>Model proof</summary>

The quotient topology detects openness exactly through the surjective quotient map.

1. If $g$ is continuous, so is $g\circ q$, because the defining condition also makes $q$ continuous.
2. Conversely, suppose $g\circ q$ is continuous and let $W\subseteq Z$ be open. Then $q^{-1}(g^{-1}(W))=(g\circ q)^{-1}(W)$ is open in $X$.
3. The quotient condition makes $g^{-1}(W)$ open in $Y$. This holds for every open $W$, hence $g$ is continuous.

**Self-assessment rubric**

- Prove the composition direction and justify continuity of the quotient map.
- Express the relevant composite preimage correctly.
- Use the reverse implication in the quotient definition to establish continuity.

</details>
