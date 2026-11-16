# Choose the first integer above a real bound

*Easy · [Real analysis](index.md)*

Give the least positive integer N satisfying $N>17/4$. Return its exact value.

```answer
{"answer":{"kind":"rational","expected":{"numerator":5,"denominator":1},"checker_scope":"Checks only the requested structured calculation or statement recognition. Open reasoning is unassessed, and correctness does not certify an unrestricted proof or mastery of the complete skill."}}
```

<details>
<summary>Hint 1</summary>

$17/4$ lies between two consecutive integers.

</details>

<details>
<summary>Hint 2</summary>

The request is strict and asks for the least integer above the bound.

</details>

<details>
<summary>Worked solution</summary>

Archimedean witnesses exist, while integer order determines the least one.

1. We have 17/4=4+1/4, so $4$ fails.
2. The next integer is $5$, which exceeds $17/4$, and no smaller positive integer does.

</details>
