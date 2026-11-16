# Delete one label class to count constrained permutation cycles

*Hard · [Original olympiad-style problems](index.md)*

How many permutations of $\{1,\ldots,8\}$ have an even number of odd labels in every cycle, allowing zero odd labels in a cycle?

```answer
{"answer":{"kind":"integer","expected":"15120","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Delete all four even labels from the cycle notation, splicing their predecessor to successor.

</details>

<details>
<summary>Hint 2</summary>

The remaining permutation of the four odd labels has only even-length cycles; reinsert even labels in fixed order, either as a new cycle or into an existing directed cycle edge.

</details>

<details>
<summary>Worked solution</summary>

Use reversible cycle insertion rather than enumerate all eight-label cycle types.

1. After deleting even labels, cycles containing no odd label vanish and the remaining cycles each have even length on four labeled odd elements.
2. The allowed odd-label permutations are a four-cycle, six possibilities, or two two-cycles, three possibilities, for a total of nine.
3. Given any permutation on m existing labels, one new designated even label can be inserted after any of its m labels or form a new singleton cycle, giving m plus one choices. Reverse deletion recovers the choice uniquely.
4. Insert the four even labels in their fixed numerical order, giving $5\cdot6\cdot7\cdot8=1680$ extensions of each odd-label permutation. Every cycle keeps its odd-label parity.
5. The count is $9\cdot1680=15120$, and the deletion/insertion inverses prove completeness even for cycles consisting only of even labels.

</details>
