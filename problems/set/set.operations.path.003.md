# An intersection can be joined to a third set

*Medium · [Set theory](index.md)*

Let $A=\{0,1,3\}, B=\{1,2,3\}$, and $C=\{5\}$. Give $(A\cap B)\cup C$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,3,5],"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

Find the shared members of A and B first.

</details>

<details>
<summary>Hint 2</summary>

Then include every member of C as well as those shared members.

</details>

<details>
<summary>Worked solution</summary>

Parentheses tell you which collection is the input to the next operation.

1. The inner intersection is $A\cap B=\{1,3\}$.
2. Its union with $C=\{5\}$ is $\{1,3,5\}$.

</details>
