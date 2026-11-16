# Count distinct prime-order elements to rule out simplicity

*Medium · [Abstract algebra problems](index.md)*

Prove that no group of order $30$ is simple by considering Sylow five and Sylow three subgroups and their nonidentity elements.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Under simplicity, neither Sylow count can be one.

</details>

<details>
<summary>Hint 2</summary>

Distinct subgroups of the same prime order intersect only in the identity, and elements of orders three and five cannot coincide.

</details>

<details>
<summary>Model proof</summary>

Two forced collections of prime-order elements would exceed the available group size.

1. The Sylow five count is one or six; simplicity would require six, giving twenty-four distinct elements of order five.
2. The Sylow three count divides ten and is one modulo three, so is one or ten; simplicity would require ten, giving twenty distinct elements of order three.
3. Those forty-four elements are all nonidentity and disjoint by their orders, impossible in a thirty-element group. Hence simplicity fails.

**Self-assessment rubric**

- Derive the forced Sylow five count and its distinct nonidentity elements.
- Derive the corresponding Sylow three count and disjoint elements.
- Justify both intersection claims and compare the combined count with the group order.

</details>
