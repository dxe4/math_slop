# Distinguish stated targets from actual output values

*Medium · [Set theory](index.md)*

A function from $\{1,2,3,4\}$ to {a,b,c} has values f(1)=a,f(2)=b,f(3)=a,f(4)=b. List the codomain elements outside its range.

```answer
{"answer":{"kind":"set","expected":"{c}","checker_scope":"Exact declared bounded result, explicit interval description or selected statement only; no unrestricted mapping proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

The range contains only outputs actually attained.

</details>

<details>
<summary>Hint 2</summary>

A declared codomain element need not occur as any function value.

</details>

<details>
<summary>Worked solution</summary>

The range is a subset of the codomain, not an automatic synonym for it.

1. The attained output values are a and b.
2. The declared codomain also includes c, which is never attained.
3. The requested set is $\{c\}$.

</details>
