# Nonadjacent three subset six

*Medium · [Original Putnam-style training](index.md)*

A $3$-element subset of $\{1,2,3,4,5,6\}$ is chosen uniformly. Find the probability it contains no consecutive integers.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":5},"checker_scope":"Only the exact bounded answer is checked; the argument and assumptions are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Write chosen positions as $i_1<i_2<i_3$ with gaps.

</details>

<details>
<summary>Hint 2</summary>

Shift $i_j$ by $j-1$ to remove mandatory gaps.

</details>

<details>
<summary>Worked solution</summary>

Among $\binom63=20$ equally likely subsets, the chance is $4/20=1/5$.

1. No adjacency means $i_{j+1}\ge i_j+2$. Set $b_j=i_j-(j-1)$; then $1\le b_1<b_2<b_3\le4$.
2. Valid subsets therefore correspond to $\binom43=4$ ordinary three-subsets of four labels.
3. Among $\binom63=20$ equally likely subsets, the chance is $4/20=1/5$.

</details>
