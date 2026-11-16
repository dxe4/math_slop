# Equality counts for one kind of subset

*Medium · [Set theory](index.md)*

Let $A=\{3,6\}$. Candidates are $1$:{}, $2$:$\{3,6\}, 3$:$\{3\}, 4$:$\{4\}$. In subset\_labels list all labels of subsets of A, allowing equality. In proper\_labels list all labels of proper subsets, excluding equality.

```answer
{"answer":{"kind":"record_of_finite_sets","expected":{"subset_labels":[1,2,3],"proper_labels":[1,3]},"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

First test containment, then separately exclude equality for the proper-subset field.

</details>

<details>
<summary>Hint 2</summary>

The empty set has no offending member; the candidate equal to A is not proper.

</details>

<details>
<summary>Worked solution</summary>

Inclusive containment and proper containment differ at equality.

1. Candidates $1,2,3$ are contained in A; candidate $4$ fails because $4\notin A$.
2. Candidate $2$ equals A, leaving only $1$ and $3$ as proper subsets.

</details>
