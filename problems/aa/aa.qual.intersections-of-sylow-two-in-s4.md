# Find the intersection size of distinct Sylow two subgroups

*Medium · [Abstract algebra problems](index.md)*

If P and Q are distinct Sylow two subgroups of $S_4$, find \|P intersection Q\|.

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact requested finite invariant only. Graduate algebra reasoning, classification hypotheses and proofs are supplied for personal study and are not automatically certified. This new skill does not expand any existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

The double-transposition Klein subgroup is normal in S4.

</details>

<details>
<summary>Hint 2</summary>

Its product with a Sylow two subgroup is still a two-subgroup.

</details>

<details>
<summary>Worked solution</summary>

A normal two-subgroup lies in every Sylow two subgroup and forces the intersection size.

1. Let V be the normal Klein subgroup of double transpositions. For any Sylow two subgroup P, the product VP is a two-subgroup, so Sylow maximality gives V contained in P; likewise V is contained in Q.
2. Both P and Q have order eight. Their intersection therefore has order at least four and dividing eight.
3. If the intersection had order eight, P and Q would coincide. Distinctness excludes that, so their intersection has exactly four elements.

</details>
