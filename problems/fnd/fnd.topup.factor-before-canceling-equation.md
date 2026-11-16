# Keep a root that division would discard

*Medium · [Foundations bridge](index.md)*

Find every real solution of $(x-2)(x+1)=2(x-2)$. Return the solution set.

```answer
{"answer":{"kind":"set","expected":"{1, 2}","checker_scope":"Exact requested bounded result or declared rule-and-domain pair only. Worked reasoning is not automatically certified; this draft introduces no new checkpoint objective or eligibility."}}
```

<details>
<summary>Hint 1</summary>

Move both terms to one side and factor their common expression.

</details>

<details>
<summary>Hint 2</summary>

Dividing by x-2 at the start would discard a possible solution.

</details>

<details>
<summary>Worked solution</summary>

Factoring the difference keeps every zero-factor branch.

1. Subtract the right side to obtain $(x-2)[(x+1)-2]=0$.
2. This factors as $(x-2)(x-1)=0$.
3. The complete real solution set is $\{1,2\}$, and both values satisfy the original equation.

</details>
