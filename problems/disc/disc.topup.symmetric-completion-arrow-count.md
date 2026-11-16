# Count missing reverse arrows

*Hard · [Discrete mathematics](index.md)*

On $\{1,2,3,4\}$ let $R=\{(1,2),(2,1),(2,4),(4,3),(3,3)\}$. What is the smallest number of ordered pairs that must be added to make R symmetric?

```answer
{"answer":{"kind":"integer","expected":"2","checker_scope":"Exact requested finite observation or declared representation only. The worked explanation is not automatically certified; no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

Every existing ordered pair needs its reverse, except that a loop reverses to itself.

</details>

<details>
<summary>Hint 2</summary>

Only reverses absent from the original relation need to be added.

</details>

<details>
<summary>Worked solution</summary>

Symmetry completion is determined by all missing reversed pairs.

1. The pairs (1,2) and (2,1) already match, and (3,3) is its own reverse.
2. The remaining pairs require (4,2) and (3,4), both absent.
3. Adding these two suffices, and each is necessary, so the minimum is $2$.

</details>
