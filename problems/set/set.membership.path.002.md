# Count objects without opening their inner sets

*Easy · [Set theory](index.md)*

Treat displayed numbers as ordinary number labels, not encodings as sets. Let S={$2,\{2\},\varnothing ,\{2,\varnothing \}$}. How many distinct top-level members does S have?

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

An inner set is one object at the outer level.

</details>

<details>
<summary>Hint 2</summary>

The number $2$, the singleton $\{2\}$, the empty set, and $\{2,\varnothing \}$ are four different objects.

</details>

<details>
<summary>Worked solution</summary>

Count objects at the level named by the question.

1. The four outer entries are $2, \{2\}, \varnothing$ and $\{2,\varnothing \}$. None is equal to another.
2. Therefore S has $4$ top-level members; counting the entries inside its inner sets would answer a different question.

</details>
