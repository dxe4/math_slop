# Recover a set from its complement

*Easy · [Set theory](index.md)*

The universe is $U=\{1,2,3,4,5,6,7\}$. An unknown subset A of U has complement $U\setminus A=\{2,3,6\}$. Find A.

- **U (universe)**: {1, 2, 3, 4, 5, 6, 7}
- **U∖A (given)**: {2, 3, 6}

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,4,5,7],"checker_scope":"Exact finite integer set; order and repeated entries do not change the set."}}
```

<details>
<summary>Hint 1</summary>

The stated complement names exactly the universe elements that are outside A.

</details>

<details>
<summary>Hint 2</summary>

Every other universe element must therefore be inside A.

</details>

<details>
<summary>Worked solution</summary>

Within one fixed universe, taking the complement twice recovers the original set.

1. The elements $2, 3$ and $6$ cannot belong to A because they belong to its complement.
2. The remaining universe elements $1, 4, 5$ and $7$ must belong to A. Thus $A=\{1,4,5,7\}$.

</details>
