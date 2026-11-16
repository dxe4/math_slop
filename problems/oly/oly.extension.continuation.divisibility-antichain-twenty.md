# A largest set with no divisibility pair

*Medium · [Original olympiad-style problems](index.md)*

What is the largest size of a subset $A\subseteq\{1,\ldots,20\}$ such that no two distinct members divide one another?

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Assign each integer its odd part after removing all factors of two.

</details>

<details>
<summary>Hint 2</summary>

There are ten possible odd parts. Numbers with the same odd part form a divisibility chain.

</details>

<details>
<summary>Worked solution</summary>

The odd-part chains give an upper bound matched by a high interval.

1. Every positive integer $n\le20$ has a unique form $2^ku$ with odd $u\le19$. The ten possible odd parts split the set into ten chains. If two selected numbers lie in one chain, the smaller power of two divides the larger.
2. Therefore an admissible subset contains at most one member from each chain and has size at most $10$.
3. The ten numbers $11,12,\ldots,20$ attain this bound. A proper multiple of any of them is at least $22$, outside the set, so no two distinct members divide one another.

</details>
