# Evaluate an implication and its converse

*Medium · [Discrete mathematics](index.md)*

Let p be false and q be true. Give the truth values of p→q (field implication), q→p (field converse), and (not p) or q (field rewrite). Enter $1$ for true and $0$ for false. A material implication is false exactly when its premise is true and its conclusion is false; 'or' is inclusive.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"implication":"1","converse":"0","rewrite":"1"},"checker_scope":"Checks three truth values at one specified assignment. A single row does not establish equivalence for all assignments."}}
```

<details>
<summary>Hint 1</summary>

Apply the stated true-premise/false-conclusion rule separately to each implication.

</details>

<details>
<summary>Hint 2</summary>

Since p is false, not p is true; inclusive or is true when at least one side is true.

</details>

<details>
<summary>Worked solution</summary>

An implication and its converse need not agree, and full equivalence requires all assignments.

1. p→q is true because its premise p is false. The converse q→p is false because q is true and p is false.
2. Here not p is true, so (not p) or q is true. The entries are implication=$1$, converse=$0$, rewrite=$1$.

</details>
