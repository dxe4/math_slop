# Prove binomial symmetry including the endpoint cases

*Hard · [Combinatorics](index.md)*

For integers $0\le k\le n$, prove that the number of k-element subsets of an n-element set equals the number of (n-k)-element subsets by constructing a bijection. Include k=0 and k=n.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Use complementation inside the fixed n-element universe.

</details>

<details>
<summary>Hint 2</summary>

Applying the same operation twice should recover the original subset.

</details>

<details>
<summary>Model proof</summary>

An involutive complement map proves equality of the two finite counts.

1. Send each k-element subset S of the fixed universe X to $X\setminus S$, which has n-k elements.
2. Complementing again recovers S, so the map is both one-to-one and onto.
3. For k=0 it pairs the empty set with X, and for k=n it pairs X with the empty set, so the argument includes both endpoints and proves binomial symmetry.

**Self-assessment rubric**

- Specify the fixed universe and verify the complement cardinality.
- Show complementing twice gives the identity.
- Explicitly include the empty and full subsets.

</details>
