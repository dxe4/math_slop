# Prove compactness of a finite union directly from covers

*Hard · [Real analysis](index.md)*

If compact real sets $K_1,K_2$ are given, prove K1 union K2 is compact using the open-cover definition. Include the possibility that either set is empty.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Any cover of the union restricts to a cover of each component.

</details>

<details>
<summary>Hint 2</summary>

Combine the two finite subfamilies rather than require them to be disjoint.

</details>

<details>
<summary>Model proof</summary>

Finite unions preserve the finite-subcover property.

1. Let an arbitrary open family cover K1 union K2. It covers each component separately.
2. Compactness gives a finite subfamily covering K1 and a finite subfamily covering K2; an empty component needs the empty subfamily.
3. Their union is finite and covers the whole union, proving compactness. Repeated open sets can be kept once without affecting coverage.

**Self-assessment rubric**

- Explain why the same original family covers each component.
- Obtain finite subcovers, handling empty components.
- Show their finite union covers the requested set.

</details>
