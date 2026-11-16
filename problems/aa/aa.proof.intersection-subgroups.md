# Intersect a family of subgroups

*Medium · [Abstract algebra problems](index.md)*

Let $\{H_i:i\in I\}$ be a nonempty family of subgroups of a group $G$. Prove that $H=\bigcap_{i\in I}H_i$ is a subgroup of $G$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Use a subgroup criterion that combines multiplication and inversion.

</details>

<details>
<summary>Hint 2</summary>

An element of the intersection belongs to every member of the family, so apply each subgroup property separately.

</details>

<details>
<summary>Model proof</summary>

Properties shared by every subgroup survive intersection.

1. The identity belongs to every $H_i$, so $e\in H$ and the intersection is nonempty.
2. If $x,y\in H$, then $x,y\in H_i$ for each $i$. Since each $H_i$ is a subgroup, $xy^{-1}\in H_i$ for every $i$.
3. Consequently $xy^{-1}\in H$. The nonempty one-step subgroup criterion proves that $H$ is a subgroup.

**Self-assessment rubric**

- Establish that the identity belongs to the intersection.
- Apply the subgroup property for every index, not just one chosen subgroup.
- Prove closure under the one-step subgroup operation and state the criterion.

</details>
