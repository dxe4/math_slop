# Read a relation with its arrow direction

*Medium · [Discrete mathematics](index.md)*

On $\{1,2,3,4\}$ let $R=\{(1,2),(2,1),(2,3),(3,3),(4,1)\}$. Find {y:(2,y) is in R}.

```answer
{"answer":{"kind":"set","expected":"{1, 3}","checker_scope":"Exact requested finite observation or declared representation only. The worked explanation is not automatically certified; no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

The first coordinate selects the starting point.

</details>

<details>
<summary>Hint 2</summary>

An incoming arrow to two would have two as its second coordinate and does not automatically qualify.

</details>

<details>
<summary>Worked solution</summary>

Outgoing relation values use ordered pairs in their stated direction.

1. The pairs beginning with two are (2,1) and (2,3).
2. No other pair has first coordinate two.
3. The outgoing set is $\{1,3\}$.

</details>
