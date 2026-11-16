# Force five equal weekdays

*Medium · [Combinatorics](index.md)*

Each person has one birth weekday among seven weekdays. What is the smallest number of people that guarantees at least five with the same birth weekday?

```answer
{"answer":{"kind":"integer","expected":29,"checker_scope":"Exact worst-case threshold under the stated seven-box model; an open proof is not being checked."}}
```

<details>
<summary>Hint 1</summary>

Four people in each weekday avoids the requested five.

</details>

<details>
<summary>Hint 2</summary>

Add one more person beyond that maximum avoiding allocation.

</details>

<details>
<summary>Worked solution</summary>

A sharp threshold needs both a capacity bound and an avoiding example.

1. Seven weekdays can hold $7\times 4=28$ people with at most four per weekday.
2. The next person forces five somewhere, so the minimum guarantee is $29$.

</details>
