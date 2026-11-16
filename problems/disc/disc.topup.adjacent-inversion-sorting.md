# Prove termination under any sequence of inverted adjacent swaps

*Hard · [Discrete mathematics](index.md)*

A finite list of real numbers permits a move swapping adjacent entries x,y only when $x>y$. Prove that every sequence of permitted moves terminates, and that a state with no permitted move is nondecreasing.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and rubric reflection only; no automatic correctness verdict or automatic required objective slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Count all inverted index pairs, not just adjacent ones.

</details>

<details>
<summary>Hint 2</summary>

An adjacent swap changes the selected pair but does not move either entry past any third entry.

</details>

<details>
<summary>Model proof</summary>

A global inversion count supplies a finite decreasing measure.

1. Let I be the number of index pairs i&lt;j with a\_i&gt;a\_j. It is a nonnegative integer bounded by n(n-1)/2 for a list of length n.
2. Swapping an inverted adjacent pair removes their one inversion. For any third entry the total comparisons with the two swapped values are unchanged, so I decreases by exactly one.
3. Thus no sequence of permitted moves is infinite. At a terminal state every adjacent pair satisfies a\_i&lt;=a\_(i+1).
4. Transitivity of the real order then makes the whole list nondecreasing, including repeated equal entries.

**Self-assessment rubric**

- Define a finite nonnegative inversion count including nonadjacent pairs.
- Account for the selected pair and all comparisons with other entries.
- Connect absence of adjacent inversions to a globally nondecreasing list.

</details>
