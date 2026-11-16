# Distinguish proper subsets from equality

*Easy · [Set theory](index.md)*

Let $A=\{0,3,8\}$. Candidate $1$ is $\{0,3,8\}$, candidate $2$ is $\{8\}$, candidate $3$ is {}, and candidate $4$ is $\{0,9\}$. List the labels of every candidate that is a proper subset of A: contained in A but not equal to A.

- **A**: {0, 3, 8}
- Candidates:
- **1**: {0, 3, 8}
- **2**: {8}
- **3**: {}
- **4**: {0, 9}

```answer
{"answer":{"kind":"finite_integer_set","expected":[2,3],"checker_scope":"Exact finite integer set; order and repeated entries do not change the set."}}
```

<details>
<summary>Hint 1</summary>

First check containment, then rule out equality.

</details>

<details>
<summary>Hint 2</summary>

An empty set is a proper subset of a nonempty set.

</details>

<details>
<summary>Worked solution</summary>

A proper subset satisfies two conditions: containment and inequality.

1. Candidates $2$ and $3$ contain only members of A and each omits some members of A.
2. Candidate $1$ equals A, and candidate $4$ contains the outsider $9$. Therefore the labels are $\{2,3\}$.

</details>
