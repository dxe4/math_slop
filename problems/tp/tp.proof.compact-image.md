# A continuous image of a compact space is compact

*Medium · [Topology problems](index.md)*

Let $K$ be a compact topological space and $f:K\to Y$ continuous. Prove that $f(K)$ is compact in its subspace topology. Do not assume $Y$ is Hausdorff.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Start with an open cover of the image and pull its members back.

</details>

<details>
<summary>Hint 2</summary>

A relative open set in the image is the intersection of that image with an ambient open set.

</details>

<details>
<summary>Model proof</summary>

Compactness transfers a pulled-back cover back to a finite cover of the image.

1. Let $\{U_i\}$ be an open cover of $f(K)$ in its subspace topology. Write $U_i=f(K)\cap V_i$ with $V_i$ open in $Y$.
2. The sets $f^{-1}(V_i)$ are open in $K$ and cover $K$. Compactness gives finitely many of them covering $K$.
3. The corresponding $U_i$ cover every value of $f$, hence all of $f(K)$. Thus every relative open cover has a finite subcover, with no separation hypothesis needed.

**Self-assessment rubric**

- Represent a relative open cover using ambient open sets.
- Show the pulled-back sets are open and cover the compact domain.
- Transfer a finite subcover to the entire image.

</details>
