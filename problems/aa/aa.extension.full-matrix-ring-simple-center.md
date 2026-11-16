# Prove two-sided simplicity and determine the exact center

*Hard · [Abstract algebra problems](index.md)*

For a field F and n&gt;=1, prove the only two-sided ideals of $M_n(F)$ are zero and the whole ring, and prove its center consists exactly of scalar matrices. Use matrix units and include n=1.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A nonzero ideal element has a nonzero entry that matrix units can isolate.

</details>

<details>
<summary>Hint 2</summary>

Commutation with diagonal units kills off-diagonal entries; the other units compare diagonal entries.

</details>

<details>
<summary>Model proof</summary>

Two-sided multiplication exposes every entry, while centrality constrains all entries simultaneously.

1. If a two-sided ideal I contains a nonzero A with entry a\_ij nonzero, then E\_ri\*A\*E\_js=a\_ij\*E\_rs belongs to I for all r,s. Multiplying by the invertible field scalar gives every E\_rs, hence all matrices. Thus I is the whole ring.
2. If C is central, commuting with every E\_ii forces all off-diagonal entries of C to vanish. Commuting a diagonal C with E\_ij forces its ith and jth diagonal entries equal, so C is scalar.
3. Every scalar matrix is central. For n=1 the same conclusions reduce to a field having only the two ideals and being its own center.

**Self-assessment rubric**

- Use both ideal sides and field invertibility to obtain all matrix units.
- Derive both off-diagonal vanishing and equal diagonal entries.
- Verify scalar centrality and the one-dimensional case.

</details>
