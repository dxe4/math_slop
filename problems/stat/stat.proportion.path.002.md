# Use a subgroup as the whole

*Easy · [Statistics and probability](index.md)*

A travel table shows first-year students:$4$ walk and $4$ take the bus; returning students:$3$ walk and $9$ take the bus. Among first-year students only, what proportion walk?

| Given information | Value |
| --- | --- |
| table | {"first\_year":{"walk":4,"bus":4},"returning":{"walk":3,"bus":9}} |
| subgroup | first\_year |
| target | walk |

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Checks the requested exact quantities under the stated conventions and model. It does not certify an inferential assumption or assess an open explanation."}}
```

<details>
<summary>Hint 1</summary>

Exclude returning students from both numerator and denominator.

</details>

<details>
<summary>Hint 2</summary>

The first-year group contains both its walkers and its bus riders.

</details>

<details>
<summary>Worked solution</summary>

The question’s subgroup fixes the denominator.

1. There are $4+4=8$ first-year students.
2. Among them $4$ walk, so the proportion is $4/8=1/2$.

</details>
