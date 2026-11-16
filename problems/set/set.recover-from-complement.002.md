# What if the complement is empty?

*Easy · [Set theory](index.md)*

The universe is $U=\{-2,0,3,9\}$. An unknown subset A of U has $U\setminus A$={}. Find A.

- **U (universe)**: {-2, 0, 3, 9}
- **U∖A (given)**: {}

```answer
{"answer":{"kind":"finite_integer_set","expected":[-2,0,3,9],"checker_scope":"Exact finite integer set; order and repeated entries do not change the set."}}
```

<details>
<summary>Hint 1</summary>

An empty complement says that no universe element is outside A.

</details>

<details>
<summary>Hint 2</summary>

Because A is a subset of U, it cannot contain anything beyond U either.

</details>

<details>
<summary>Worked solution</summary>

An empty complement means the original set is the entire named universe, not the empty set.

1. Every member of U must belong to A, or it would appear in $U\setminus A$.
2. No element outside U may belong to A. Therefore $A=U=\{-2,0,3,9\}$.

</details>
