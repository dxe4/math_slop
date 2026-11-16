# Bonferroni budget

*Easy · [Statistics and probability](index.md)*

Four tests share a familywise type-I error budget $\alpha=1/20$. Using equal Bonferroni allocation, what is the significance threshold for each test?

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":80},"checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Equal allocation gives every test the same fraction of the total budget.

</details>

<details>
<summary>Hint 2</summary>

If the common threshold is $a$, arrange $4a=\alpha$.

</details>

<details>
<summary>Worked solution</summary>

Allocate a quarter of the family budget to each test.

1. For valid individual tests, a threshold $a$ bounds each true-null rejection probability by $a$.
2. The union bound gives familywise error at most $4a$, with no independence requirement.
3. Setting $4a=1/20$ gives $a=1/80$. This is a guaranteed upper bound, not a claim that the attained familywise error equals $1/20$.

</details>
