# Cover a segment with a smallest supplied subfamily

*Medium · [Original olympiad-style problems](index.md)*

The available closed intervals are $[0,3],[0,4],[2,6],[3,7],[5,10],[6,9],[7,10]$. What is the minimum number whose union covers $[0,10]$?

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Any cover must use an interval containing zero and an interval containing ten.

</details>

<details>
<summary>Hint 2</summary>

Every interval containing zero ends at most at four, while every interval containing ten begins at least at five.

</details>

<details>
<summary>Worked solution</summary>

Two intervals leave a compulsory gap, while an explicit overlapping triple covers everything.

1. Only $[0,3]$ and $[0,4]$ contain zero. Only $[5,10]$ and $[7,10]$ contain ten. Thus a two-interval cover would need one interval of each type.
2. The first interval ends at most at four and the second begins at least at five, leaving points in $(4,5)$ uncovered. One or two intervals therefore cannot suffice.
3. The three intervals $[0,4],[3,7],[5,10]$ overlap consecutively and their union is exactly $[0,10]$. Hence the minimum is $3$.

</details>
