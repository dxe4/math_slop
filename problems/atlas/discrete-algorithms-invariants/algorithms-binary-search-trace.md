# Trace and justify binary search

*Difficulty 2 of 5 · [Discrete algorithms and invariants](index.md) · exercise 1 of 4*

Binary search for $24$ in the sorted zero-indexed array $[3,7,11,18,24,31,45]$, using $\mathit{mid}=\left\lfloor(\mathit{low}+\mathit{high})/2\right\rfloor$. List each inspected index and state the invariant that makes discarded entries safe to ignore.

<details>
<summary>Hint 1</summary>

Begin with $\mathit{low}=0$ and $\mathit{high}=6$

</details>

<details>
<summary>Hint 2</summary>

After inspecting $18$, move $\mathit{low}$ above index $3$

</details>

<details>
<summary>Hint 3</summary>

The target, if present, remains inside the current interval

</details>

<details>
<summary>Worked solution</summary>

Initially $\mathit{low}=0$, $\mathit{high}=6$, so $\mathit{mid}=3$ and the inspected value is $18$. Since $24>18$ and the array is sorted, indices $0$ through $3$ cannot contain $24$; set $\mathit{low}=4$. Now $\mathit{mid}=\lfloor(4+6)/2\rfloor=5$, whose value $31$ is too large, so set $\mathit{high}=4$. Finally $\mathit{mid}=4$ and the value is $24$. The inspected indices are $3,5,4$. The invariant is: if the target occurs in the array, at least one occurrence lies in indices $\mathit{low}$ through $\mathit{high}$. Sorted order preserves this invariant when either side is discarded.

**Answer.** Inspect indices $3$, $5$, then $4$; find $24$ after three comparisons.

</details>

*Tags: binary search, loop invariant, algorithm trace*
