# Which collections belong to a power set?

*Easy · [Set theory](index.md)*

Let $A=\{4,9\}$. Candidates are $1$:{}, $2$:$\{4\}, 3$:$\{9\}, 4$:$\{4,9\}, 5$:$\{4,9,12\}$. Report every label whose candidate is a member of P(A).

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,2,3,4],"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

A candidate belongs to P(A) exactly when it is a subset of A.

</details>

<details>
<summary>Hint 2</summary>

Empty and equal subsets qualify; a candidate containing $12$ does not.

</details>

<details>
<summary>Worked solution</summary>

Power-set membership is subset containment in the original set.

1. The subsets of A are {}, $\{4\}, \{9\}$, and $\{4,9\}$.
2. These have labels $1,2,3,4$. Candidate $5$ fails because $12\notin A$.

</details>
