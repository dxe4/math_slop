# A compact-to-Hausdorff continuous bijection is a homeomorphism

*Hard · [Topology problems](index.md)*

Let $f:X\to Y$ be a continuous bijection, with $X$ compact and $Y$ Hausdorff. Prove that $f$ is a homeomorphism.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

It remains to prove continuity of the inverse, which can be checked using closed sets.

</details>

<details>
<summary>Hint 2</summary>

Trace a closed subset of the compact domain through the continuous map and use the separation hypothesis in the codomain.

</details>

<details>
<summary>Model proof</summary>

Compactness and Hausdorff separation make the continuous bijection a closed map.

1. Let $C$ be closed in $X$. A closed subset of a compact space is compact: append its open complement to a relative open cover and use a finite subcover of $X$.
2. The continuous image $f(C)$ is compact in $Y$, and compact subsets of a Hausdorff space are closed.
3. Thus $f$ is a closed map. For the inverse function $h:Y\to X$, the preimage $h^{-1}(C)$ is exactly $f(C)$, closed in $Y$.
4. The inverse is continuous by the closed-preimage criterion. Both the bijection and its inverse are continuous, proving the homeomorphism claim.

**Self-assessment rubric**

- Justify compactness of a closed subset of the domain.
- Use continuity and the Hausdorff hypothesis to make its image closed.
- Translate that closed-image property into continuity of the inverse.
- Conclude both directions of continuity for the bijection.

</details>
