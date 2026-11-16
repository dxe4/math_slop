# Justify the unique permutation of an empty collection

*Hard · [Combinatorics](index.md)*

Prove there is exactly one bijection from the empty set to itself, and explain why this agrees with $0!=1$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A function can be represented by its graph of ordered pairs.

</details>

<details>
<summary>Hint 2</summary>

Injectivity and surjectivity conditions have no counterexample on empty domains and codomains.

</details>

<details>
<summary>Model proof</summary>

The empty function supplies a concrete combinatorial meaning for zero factorial.

1. A function graph from the empty set to itself must be a subset of the empty Cartesian product, so only the empty graph is possible.
2. It is a function and is injective and surjective: the respective universal conditions hold with no elements to violate them.
3. Thus exactly one permutation exists on the empty set. Counting it as one agrees with the empty product and the factorial recurrence $1!=1\cdot0!$.

**Self-assessment rubric**

- Explain why only one function graph is possible.
- Check both injectivity and surjectivity on the empty sets.
- Connect the combinatorial count with zero factorial and the factorial identity.

</details>
