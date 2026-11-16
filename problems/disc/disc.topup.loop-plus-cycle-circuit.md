# Traverse a loop as one edge step

*Medium · [Discrete mathematics](index.md)*

An undirected graph has vertices $A,B,C,D$, cycle edges AB,BC,CD,DA, and one loop at A. Give a vertex sequence starting and ending at A that uses all five edges exactly once.

```answer
{"answer":{"kind":"euler_trail","expected":null,"expected_constraints":{"edges":[["A","A"],["A","B"],["B","C"],["C","D"],["D","A"]],"start":"A","end":"A","directed":false},"checker_scope":"Exact declared route or bounded observation only; an unrestricted proof is not automatically certified and no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

The loop is one edge traversal, represented by repeating its vertex consecutively.

</details>

<details>
<summary>Hint 2</summary>

After using the loop, the remaining four edges form a cycle.

</details>

<details>
<summary>Worked solution</summary>

A loop contributes one route step even though it contributes two incidences to degree.

1. One route is A,A,B,C,D,A.
2. The consecutive A,A uses the loop once. The remaining steps use AB,BC,CD,DA once each.
3. The five steps cover all five supplied edges and return to A.

</details>
