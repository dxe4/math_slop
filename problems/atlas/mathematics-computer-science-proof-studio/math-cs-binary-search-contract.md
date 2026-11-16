# A complete binary-search contract

*Difficulty 3 of 5 · [Mathematics for computer science proof and counterexample studio](index.md) · exercise 1 of 15*

For half-open binary search that returns the first index i with a[i]>=x, state a useful invariant and termination variant. Trace $a=[2,2,5,9]$, $x=2$, and explain why sortedness is a material precondition.

<details>
<summary>Hint 1</summary>

Track facts strictly before lo and at or beyond hi

</details>

<details>
<summary>Hint 2</summary>

Use hi-lo as the variant

</details>

<details>
<summary>Hint 3</summary>

An unsorted array can discard a region containing x

</details>

<details>
<summary>Worked solution</summary>

Use invariant $0\le lo\le hi\le n$, every index $j<lo$ has $a[j]<x$, and every index $j\ge hi$ has $a[j]\ge x$. Initially $lo=0,hi=n$ makes the two quantified regions empty. With $mid=lo+\lfloor(hi-lo)/2\rfloor$, if $a[mid]<x$ set $lo=mid+1$; sortedness proves every discarded earlier entry is also below $x$. Otherwise set $hi=mid$; sortedness preserves the high-region claim. The nonnegative integer $hi-lo$ strictly decreases. The trace begins $[0,4)$, mid 2 with value 5 so $hi=2$; then mid 1 with value 2 so $hi=1$; then mid 0 with value 2 so $hi=0$. Exit returns 0. Without nondecreasing order, a comparison at mid gives no fact about the discarded side, so preservation fails.

**Answer.** Invariant partitions indices below lo and at/above hi; variant hi-lo proves termination; the returned lower-bound index is 0.

</details>

*Tags: algorithms, binary search, loop invariant, termination*
