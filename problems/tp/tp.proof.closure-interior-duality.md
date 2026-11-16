# Relate closure to interior of a complement

*Medium · [Topology problems](index.md)*

For a subset $A$ of any topological space $X$, prove $X\setminus\overline A=\operatorname{int}(X\setminus A)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Use the neighborhood definition of membership in the closure.

</details>

<details>
<summary>Hint 2</summary>

A neighborhood disjoint from the set is an open neighborhood contained in its complement.

</details>

<details>
<summary>Model proof</summary>

The negation of meeting every neighborhood is exactly an interior condition for the complement.

1. A point $x$ is outside $\overline A$ precisely when some open neighborhood $U$ of $x$ has $U\cap A=\varnothing$.
2. This is equivalent to the existence of an open neighborhood with $x\in U\subseteq X\setminus A$.
3. That last statement means $x\in\operatorname{int}(X\setminus A)$. The pointwise equivalence proves equality.

**Self-assessment rubric**

- Negate the closure condition with the correct existential neighborhood.
- Translate disjointness into containment in the complement.
- Identify the interior condition and establish both inclusions through equivalence.

</details>
