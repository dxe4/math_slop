# A relation selects ordered pairs

*Easy · [Set theory](index.md)*

Let $A=\{0,1,2\}, B=\{1,3\}$, and R={$(x,y)\in A\times B$:$x<y$}. Candidate labels are $1$:$(0,1), 2$:$(1,1), 3$:$(2,1), 4$:$(2,3)$. Report all labels belonging to R.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,4],"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

Test the inequality using first and second coordinates in order.

</details>

<details>
<summary>Hint 2</summary>

Equality does not satisfy a strict less-than condition.

</details>

<details>
<summary>Worked solution</summary>

A predicate defines a relation by selecting pairs from the stated product.

1. The pairs $(0,1)$ and $(2,3)$ satisfy $x<y$.
2. The pairs $(1,1)$ and $(2,1)$ fail. The qualifying labels are $\{1,4\}$.

</details>
