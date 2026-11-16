# Recover a degree from the complete degree sum

*Medium · [Discrete mathematics](index.md)*

A finite simple undirected graph has $7$ vertices and $11$ edges. Six vertex degrees are $4,4,4,3,2,2$. Find the remaining degree.

```answer
{"answer":{"kind":"integer","expected":"3","checker_scope":"Exact requested finite observation or declared representation only. The worked explanation is not automatically certified; no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

The degree sum equals twice the edge count.

</details>

<details>
<summary>Hint 2</summary>

Add all six given degrees before subtracting from that total.

</details>

<details>
<summary>Worked solution</summary>

The degree-sum identity supplies the one missing incidence count.

1. All degrees together sum to $2\cdot11=22$.
2. The six stated degrees sum to $4+4+4+3+2+2=19$.
3. The remaining degree is $22-19=3$.

</details>
