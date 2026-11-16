# Round a fractional matrix without changing its margins

*Hard · [Original olympiad-style problems](index.md)*

A finite real matrix has entries in $[0,1]$ and every row sum and column sum is an integer. Prove that some zero-one matrix has exactly the same row and column sums. Give a finite procedure preserving all margins and explain why it stops.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Make a bipartite graph whose edges are exactly the strictly fractional entries.

</details>

<details>
<summary>Hint 2</summary>

No nonisolated vertex of this graph has degree one, because its margin minus its integral entries is an integer. Find a cycle and change alternating entries by opposite equal amounts.

</details>

<details>
<summary>Model proof</summary>

Fractional cycles allow a margin-preserving adjustment that eliminates at least one fractional entry each time.

1. Create one graph vertex for each row and column and join them when their entry is strictly between zero and one. If a row had exactly one fractional entry, subtracting all its zero or one entries from its integer margin would make that entry an integer, impossible. The same applies to columns. Thus every nonisolated vertex has degree at least two.
2. If fractional entries remain, their finite graph contains a cycle: follow edges without immediately returning, and stop at the first repeated vertex. Bipartiteness makes the resulting simple cycle even.
3. Add $\varepsilon$ on alternating cycle edges and subtract it on the others. Each affected row and column meets exactly one plus and one minus edge, so all margins stay fixed. Choose $\varepsilon$ as the minimum of $1-x$ over plus edges and $x$ over minus edges. It is positive, keeps every entry in $[0,1]$, and makes at least one cycle entry integral.
4. No previously integral entry was changed, and at least one fractional entry disappears. After at most the initial number of fractional entries such steps, all entries are zero or one and all original integer margins remain intact. No probabilistic rounding or limiting argument is needed.

**Self-assessment rubric**

- Use integer margins to exclude degree-one fractional vertices.
- Find an even cycle whenever fractional entries remain.
- Choose a positive maximal safe epsilon and preserve every margin.
- Show fractional entries strictly decrease without disturbing integral entries.

</details>
