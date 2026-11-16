# Read a nested set operation from the inside out

*Medium · [Set theory](index.md)*

Let $A=\{1,2,4\}, B=\{2,3,6\}$, and $C=\{0,3,4,6\}$. Give $(A\cup B)\cap C$.

- **A**: {1, 2, 4}
- **B**: {2, 3, 6}
- **C**: {0, 3, 4, 6}

```answer
{"answer":{"kind":"finite_integer_set","expected":[3,4,6],"checker_scope":"Exact finite integer set; order and repeated entries do not change the set."}}
```

<details>
<summary>Hint 1</summary>

Compute the union inside the parentheses first.

</details>

<details>
<summary>Hint 2</summary>

Next retain only members of that intermediate union that also belong to C.

</details>

<details>
<summary>Worked solution</summary>

Parentheses specify which collection to construct before applying the next membership rule.

1. First $A\cup B=\{1,2,3,4,6\}$.
2. The shared members of this union and C are $3, 4$ and 6, so $(A\cup B)\cap C=\{3,4,6\}$.

</details>
