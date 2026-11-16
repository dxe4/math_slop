# Use cycle types instead of a full permutation list

*Hard · [Original Putnam-style training](index.md)*

How many even permutations of $\{1,2,3,4,5\}$ have no fixed points?

```answer
{"answer":{"kind":"integer","expected":"24","checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

List the partitions of five into cycle lengths at least two.

</details>

<details>
<summary>Hint 2</summary>

Determine the sign of each allowed cycle type before counting it.

</details>

<details>
<summary>Worked solution</summary>

The derangement condition leaves only two cycle types, and parity removes one.

1. A derangement on five letters has cycle type five or type three plus two.
2. A five-cycle is even, while a three-cycle times a disjoint transposition is odd. Thus only five-cycles qualify.
3. The number of five-cycles on five labeled letters is $(5-1)!=24$.

</details>
