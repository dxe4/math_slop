# Select all subsets, including the empty set

*Easy · [Set theory](index.md)*

Let $A=\{2,4,6\}$. Candidate $1$ is {}, candidate $2$ is $\{2,6\}$, candidate $3$ is $\{2,5\}$, and candidate $4$ is $\{2,4,6\}$. List the labels of every candidate that is a subset of A. Equality is allowed.

- **A**: {2, 4, 6}
- Candidates:
- **1**: {}
- **2**: {2, 6}
- **3**: {2, 5}
- **4**: {2, 4, 6}

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,2,4],"checker_scope":"Exact finite integer set; order and repeated entries do not change the set."}}
```

<details>
<summary>Hint 1</summary>

A candidate qualifies if none of its members lies outside A.

</details>

<details>
<summary>Hint 2</summary>

The empty set has no offending member, and A itself also qualifies when equality is allowed.

</details>

<details>
<summary>Worked solution</summary>

Subset means every member is contained; it does not mean smaller in size unless a proper subset is requested.

1. Candidate $1$ is empty and candidate $2$ contains only members of A; both qualify.
2. Candidate $3$ fails because $5$ is not in A. Candidate $4$ equals A, so it qualifies. The labels are $\{1,2,4\}$.

</details>
