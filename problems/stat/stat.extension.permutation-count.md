# Permutation count

*Easy · [Statistics and probability](index.md)*

Four labelled units are assigned exactly $2$ to treatment and $2$ to control. How many distinct treatment assignments are possible?

```answer
{"answer":{"kind":"integer","expected":"6","checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Choosing the treatment subset fixes the control subset.

</details>

<details>
<summary>Hint 2</summary>

Count subsets rather than ordered sequences of treated labels.

</details>

<details>
<summary>Worked solution</summary>

Complete treatment assignments are indexed by the selected two-element subset.

1. The treatment labels can be any $2$-subset of the $4$ units.
2. The count is $\binom42=4\cdot3/(2\cdot1)$.
3. There are $6$ assignments. Permuting labels within the same chosen treatment group does not create another assignment.

</details>
