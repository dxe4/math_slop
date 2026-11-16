# Explain the finite hypothesis in proper-subset cardinality

*Hard · [Set theory](index.md)*

Prove that a finite set cannot be in bijection with $1$ of its proper subsets. Make clear where finiteness is used.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A proper subset omits at least one member from a finite roster.

</details>

<details>
<summary>Hint 2</summary>

A map from n distinct inputs cannot be injective into fewer than n possible output positions.

</details>

<details>
<summary>Model proof</summary>

Finite counting rules out the infinite-set phenomenon of equal size with a proper subset.

1. Let A have n elements and B be a proper subset. A member of A is omitted, so B occupies at most n-1 positions in a roster of A.
2. A bijection from A to B would have to place n distinct images in at most n-1 positions, contradicting the finite pigeonhole principle.
3. The argument uses a finite count n and its strict drop after omission; it does not assert the corresponding claim for infinite sets.

**Self-assessment rubric**

- Identify why a proper finite subset has at most n-1 available members.
- Use injectivity to require n distinct image positions.
- State why the argument depends on finite cardinality.

</details>
