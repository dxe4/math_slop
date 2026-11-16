# Sort by unrestricted swaps using the cycle deficit

*Medium · [Original olympiad-style problems](index.md)*

A permutation on nine labels has disjoint cycle form $(1\ 2\ 3\ 4)(5\ 6\ 7)(8\ 9)$. What is the minimum number of unrestricted transpositions needed to turn it into the identity?

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

A transposition changes the number of permutation cycles by exactly one.

</details>

<details>
<summary>Hint 2</summary>

A cycle of length $k$ can be split into singletons in $k-1$ transpositions.

</details>

<details>
<summary>Worked solution</summary>

The deficit in the number of cycles gives a sharp lower bound.

1. The displayed permutation has three cycles, whereas the identity on nine labels has nine. Multiplication by a transposition either merges two cycles or splits one cycle into two, as follows by following the two exchanged successor links.
2. It therefore takes at least $9-3=6$ swaps to increase the cycle count to nine.
3. A $k$-cycle is a product of $k-1$ transpositions, obtained by repeatedly swapping its first element with the remaining elements in reverse cyclic order. Apply this separately to the three cycles: $3+2+1=6$ swaps suffice.

</details>
