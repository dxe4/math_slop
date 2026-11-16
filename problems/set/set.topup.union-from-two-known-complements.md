# Combine information given in complement form

*Medium · [Set theory](index.md)*

In universe $U=\{0,1,2,3\}$, the complements of A and B are {0,2} and {1,2}, respectively. Find the complement of $A\cup B$ in U.

```answer
{"answer":{"kind":"set","expected":"{2}","checker_scope":"Exact declared finite result, ordered representation or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

A member outside both A and B lies in both supplied complements.

</details>

<details>
<summary>Hint 2</summary>

You may either recover A,B or directly intersect their complement rosters.

</details>

<details>
<summary>Worked solution</summary>

An element is outside a union exactly when it is outside each of its two parts.

1. The supplied complements have common-member set {2}.
2. Every such common member lies in neither A nor B, and every element outside their union lies in both complements.
3. The desired complement is $\{2\}$.

</details>
