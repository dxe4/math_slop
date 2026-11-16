# Distinguish two kinds of edge removal

*Hard · [Discrete mathematics](index.md)*

An undirected graph on $\{1,\ldots,8\}$ has edges 12,23,34,41,56,67,78,85,45, using ij for an edge between i and j. Delete edges 12 and 45. How many components remain?

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact requested finite observation or declared representation only. The worked explanation is not automatically certified; no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

One removed edge belongs to a cycle; the other is the only cross-connection between the two four-vertex groups.

</details>

<details>
<summary>Hint 2</summary>

An edge removal need not create a new component when another path still connects its endpoints.

</details>

<details>
<summary>Worked solution</summary>

Alternate cycle paths preserve internal connectivity while removing the bridge separates the groups.

1. After deleting 12, the first four vertices remain joined along the path 1-4-3-2.
2. The last four vertices retain their cycle. Deleting 45 removes the only link between these two groups.
3. Both groups remain internally connected with no crossing edge, so exactly $2$ components remain.

</details>
