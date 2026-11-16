# List the listed counterexamples

*Easy · [Foundations bridge](index.md)*

Consider the claim “Every positive integer is odd.” From the candidates $\{1,2,3,4\}$, return every counterexample to that claim.

```answer
{"answer":{"kind":"finite_integer_set","expected":[2,4],"checker_scope":"Checks only the exact stated structured result; explanation quality and general proof mastery are not assessed."}}
```

<details>
<summary>Hint 1</summary>

A counterexample must satisfy the domain and fail the claimed property.

</details>

<details>
<summary>Hint 2</summary>

Find the even candidates in the list.

</details>

<details>
<summary>Worked solution</summary>

One failure refutes a universal claim; the task asks for all failures in the finite candidate list.

1. The integers $1$ and $3$ are odd, so they confirm the property in those cases.
2. The positive integers $2$ and $4$ are not odd, so the requested counterexample set is $\{2,4\}$.

</details>
