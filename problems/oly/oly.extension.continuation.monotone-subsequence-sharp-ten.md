# A sharp threshold for a four-term monotone subsequence

*Medium · [Original olympiad-style problems](index.md)*

Find the smallest $N$ such that every sequence of $N$ distinct real numbers has an increasing subsequence of length four or a decreasing subsequence of length four. Subsequence entries need not be consecutive.

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

For each entry record the lengths of the longest increasing and decreasing subsequences ending there.

</details>

<details>
<summary>Hint 2</summary>

If neither length reaches four, the labels lie in a $3\times3$ grid. Two positions cannot receive the same label.

</details>

<details>
<summary>Worked solution</summary>

Paired ending-length labels bound every sequence avoiding both patterns.

1. For entry $a_i$, let $p_i,q_i$ be those two ending lengths. If $i<j$ and $a_i<a_j$, an increasing subsequence ending at $i$ extends to $j$, so $p_j>p_i$. If $a_i>a_j$, similarly $q_j>q_i$. Thus all pairs $(p_i,q_i)$ are distinct.
2. If no four-term monotone subsequence exists, both coordinates are in $\{1,2,3\}$, giving at most nine labels. Every sequence of ten distinct reals must therefore contain one of the required subsequences.
3. The nine-term sequence $3,2,1,6,5,4,9,8,7$ attains the obstruction. An increasing subsequence uses at most one entry from each decreasing block, and a decreasing subsequence stays within one block because later blocks have entirely larger values. Both lengths are at most three. Hence $N=10$.

</details>
