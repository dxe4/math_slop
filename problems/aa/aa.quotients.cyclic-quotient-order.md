# Count elements of a cyclic quotient

*Easy · [Abstract algebra problems](index.md)*

Find the order of the quotient group $(\mathbb Z/12\mathbb Z)/\langle4\rangle$.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The ambient group is abelian, so the subgroup is normal.

</details>

<details>
<summary>Hint 2</summary>

Count the subgroup elements, then count its cosets.

</details>

<details>
<summary>Worked solution</summary>

A finite quotient has one element per subgroup coset.

1. The subgroup $\langle4\rangle$ is $\{0,4,8\}$ and has size $3$.
2. All subgroups of an abelian group are normal, so the quotient is defined.
3. Its order is the index $12/3=4$.

</details>
