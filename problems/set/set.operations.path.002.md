# Difference remembers its starting set

*Easy · [Set theory](index.md)*

Let $A=\{2,6,8\}$ and $B=\{1,6,9\}$. Give A\_minus\_B=$A\setminus B$ and B\_minus\_A=$B\setminus A$.

```answer
{"answer":{"kind":"record_of_finite_sets","expected":{"A_minus_B":[2,8],"B_minus_A":[1,9]},"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

Start with the set to the left of the difference symbol.

</details>

<details>
<summary>Hint 2</summary>

Remove shared members from each starting set; do not exchange the fields.

</details>

<details>
<summary>Worked solution</summary>

A difference removes objects from a specified starting collection.

1. From A remove its shared member $6$, leaving $\{2,8\}$.
2. From B remove $6$, leaving $\{1,9\}$. Thus $A\setminus B$ and $B\setminus A$ are different.

</details>
