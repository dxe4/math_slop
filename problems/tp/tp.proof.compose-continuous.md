# Composition preserves continuity

*Easy · [Topology problems](index.md)*

If $f:X\to Y$ and $g:Y\to Z$ are continuous maps of topological spaces, prove that $g\circ f:X\to Z$ is continuous.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Use the open-set definition of continuity.

</details>

<details>
<summary>Hint 2</summary>

Write the preimage of an open set under the composition as two successive preimages.

</details>

<details>
<summary>Model proof</summary>

Pulling an open set back twice preserves openness at each stage.

1. Let $W\subseteq Z$ be open. Continuity of $g$ says $g^{-1}(W)$ is open in $Y$.
2. Continuity of $f$ then says $f^{-1}(g^{-1}(W))$ is open in $X$.
3. This set is $(g\circ f)^{-1}(W)$. Since the conclusion holds for every open $W$, the composition is continuous.

**Self-assessment rubric**

- Start with an arbitrary open set in the final codomain.
- Use each continuity hypothesis on the correct space.
- Identify the composite preimage and apply the continuity definition.

</details>
