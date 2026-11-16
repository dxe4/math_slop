# Refute a false general-looking containment

*Easy · [Set theory](index.md)*

Let $A=\{1,5\}$ and $B=\{5,8,9\}$. List every element witnessing that $A\cup B$ is not a subset of A: it must belong to $A\cup B$ and not to A.

```answer
{"answer":{"kind":"finite_integer_set","expected":[8,9],"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

A counterexample must satisfy the claimed source membership and fail the target membership.

</details>

<details>
<summary>Hint 2</summary>

Look for members supplied by B that are absent from A.

</details>

<details>
<summary>Worked solution</summary>

A false inclusion is disproved by an element, rather than by an unexplained picture.

1. The union is $\{1,5,8,9\}$.
2. The elements outside A are exactly $8$ and $9$. Either refutes the inclusion, and the requested complete witness set is $\{8,9\}$.

</details>
