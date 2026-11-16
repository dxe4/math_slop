# Coordinates have separate jobs

*Easy · [Set theory](index.md)*

Let $A=\{1,3\}$ and $B=\{4,6,8\}$. Candidate pairs are $1$:$(1,4), 2$:$(4,1), 3$:$(3,8), 4$:$(1,1), 5$:$(3,6)$. Report all labels of pairs in $A\times B$.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,3,5],"checker_scope":"Exact stated finite structured answer only; explanations and general infinite claims are not automatically proof-checked."}}
```

<details>
<summary>Hint 1</summary>

The first coordinate must be in A and the second must be in B.

</details>

<details>
<summary>Hint 2</summary>

Reversing a valid pair does not automatically leave it in the same product.

</details>

<details>
<summary>Worked solution</summary>

An ordered pair has a required membership test in each coordinate.

1. Pairs $1,3,5$ have first coordinates in A and second coordinates in B.
2. Pair $2$ has an invalid first coordinate; pair $4$ has an invalid second coordinate. The labels are $\{1,3,5\}$.

</details>
