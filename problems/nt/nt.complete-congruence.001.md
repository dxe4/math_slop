# List every residue satisfying a congruence

*Medium · [Number theory](index.md)*

Find every $x$ in $\{0,1,\ldots,9\}$ for which $6x$ is congruent to $4$ modulo $10$. Enumeration is allowed; return a set.

```answer
{"answer":{"kind":"finite_integer_set","expected":[4,9],"checker_scope":"Exact finite enumeration checks membership and completeness; no general congruence-solving theorem is assessed."}}
```

<details>
<summary>Hint 1</summary>

Compute the remainder of $6x$ after division by $10$ for each permitted $x$.

</details>

<details>
<summary>Hint 2</summary>

The remainder pattern repeats after five steps.

</details>

<details>
<summary>Worked solution</summary>

A solution set must contain every permitted successful value and no others.

1. For $x=0$ through $9$, the residues are $0,6,2,8,4,0,6,2,8,4$.
2. The residue $4$ occurs exactly at $x=4$ and $x=9$, giving $\{4,9\}$.

A complete $x$/residue table displays all ten candidates and permits set entry through text.

</details>
