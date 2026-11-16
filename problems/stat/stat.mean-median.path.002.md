# Change one extreme value

*Easy · [Statistics and probability](index.md)*

The original list is $2,3,3,4,8$. Replace only $8$ by $18$. Find mean\_before, median\_before, mean\_after and median\_after.

| Given information | Value |
| --- | --- |
| before | \[2,3,3,4,8\] |
| after | \[2,3,3,4,18\] |

```answer
{"answer":{"kind":"record_of_rationals","expected":{"mean_before":"4","median_before":"3","mean_after":"6","median_after":"3"},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

Increasing one value by $10$ increases the total by $10$, not each observation by $10$.

</details>

<details>
<summary>Hint 2</summary>

The middle sorted observation remains the third value.

</details>

<details>
<summary>Worked solution</summary>

Changing a tail value can change the mean without changing the median.

1. The original total is $20$, giving mean $4$ and median $3$.
2. The new total is $30$, giving mean $6$; the middle observation remains $3$.

</details>
