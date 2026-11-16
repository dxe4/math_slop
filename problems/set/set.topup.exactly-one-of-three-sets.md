# Distinguish exactly-one membership from odd membership

*Hard · [Set theory](index.md)*

Let $A=\{1,2,3,4\}$, $B=\{3,4,5\}$ and $C=\{2,4,6\}$. List the elements belonging to exactly one of A,B,C.

```answer
{"answer":{"kind":"set","expected":"{1, 5, 6}","checker_scope":"Exact declared finite result, ordered representation or selected statement only; no unrestricted set proof or new checkpoint objective is automatically certified."}}
```

<details>
<summary>Hint 1</summary>

An element appearing in all three sets must not qualify.

</details>

<details>
<summary>Hint 2</summary>

For each set, remove the union of the other two, then combine the three remainders.

</details>

<details>
<summary>Worked solution</summary>

Exactly-one membership is stricter than an odd number of memberships.

1. The A-only part is $A\setminus(B\cup C)=\{1\}$.
2. The B-only and C-only parts are {5} and {6}. The element four belongs to all three and is excluded.
3. The required set is $\{1,5,6\}$.

</details>
