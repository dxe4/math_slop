# Count the subgroups of a Klein four group

*Easy · [Abstract algebra problems](index.md)*

How many subgroups does the additive group $(\mathbb Z/2\mathbb Z)^2$ have?

```answer
{"answer":{"kind":"integer","expected":5,"checker_scope":"Exact stated finite group or ring answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Use the possible subgroup orders allowed by Lagrange.

</details>

<details>
<summary>Hint 2</summary>

Each nonzero element generates one subgroup, and these generated subgroups cannot coincide unless their nonzero members coincide.

</details>

<details>
<summary>Worked solution</summary>

The group has only three nonzero elements and every one has order two.

1. Lagrange permits subgroup orders $1,2,4$. There is one trivial subgroup and one whole group.
2. The three nonzero elements each generate a different two-element subgroup.
3. This gives $1+3+1=5$ subgroups, with no other allowed sizes.

</details>
