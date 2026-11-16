# Count subsets with a distinguished member

*Medium · [Combinatorics](index.md)*

For an integer $n\ge1$, prove $\sum_{k=0}^n k\binom nk=n2^{n-1}$ by counting a finite set in two ways.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

Choose a family whose objects are a subset together with a marked member belonging to it.

</details>

<details>
<summary>Hint 2</summary>

You can select the marked member before choosing which other elements belong to the subset.

</details>

<details>
<summary>Model proof</summary>

Two orders of choosing a subset and its distinguished member give the two sides.

1. Count pairs $(S,s)$ with $S\subseteq\{1,\ldots,n\}$ and $s\in S$. For a fixed size $k$, there are $\binom nk$ choices of $S$ and $k$ choices of $s$.
2. Summing over sizes gives the left-hand side; the empty set contributes zero.
3. Alternatively choose $s$ in $n$ ways, then choose any subset of the remaining $n-1$ elements, in $2^{n-1}$ ways. This gives the right-hand side, proving the identity.

**Self-assessment rubric**

- Define the same subset-and-member objects for both counts.
- Explain each term in the sum, including the zero contribution.
- Count by choosing the distinguished member first and equate the counts.

</details>
