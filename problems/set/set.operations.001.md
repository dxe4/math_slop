# Use a named universe for complements

*Easy · [Set theory](index.md)*

Let $U=\{1,2,3,4,5,6\}$, $A=\{1,3,5\}$, $B=\{3,4\}$. Give $A\cup B$, $A\cap B$, and $U\setminus A$.

```answer
{"answer":{"kind":"record_of_finite_sets","expected":{"union":[1,3,4,5],"intersection":[3],"complement":[2,4,6]},"checker_scope":"Exact finite sets, ignoring order and duplicate entries. Complement is relative to U."}}
```

<details>
<summary>Hint 1</summary>

Union includes anything in either set; intersection requires membership in both.

</details>

<details>
<summary>Hint 2</summary>

For the complement, inspect only $U$ and keep its members outside $A$.

</details>

<details>
<summary>Worked solution</summary>

Each operation has a different membership rule, and complement needs an ambient set.

1. Union combines the listed members without repetition: $\{1,3,4,5\}$.
2. The only common member is $3$, so the intersection is $\{3\}$.
3. The members of $U$ missing from $A$ are $\{2,4,6\}$.

A table gives each element's A/B membership and the selected operation's result.

</details>
