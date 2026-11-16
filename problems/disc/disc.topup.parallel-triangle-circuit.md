# Traverse each parallel edge occurrence

*Hard · [Discrete mathematics](index.md)*

An undirected multigraph on $A,B,C$ has two distinct copies of each edge AB,BC,CA. Give a vertex sequence starting and ending at A that uses all six edge occurrences exactly once.

```answer
{"answer":{"kind":"euler_trail","expected":null,"expected_constraints":{"edges":[["A","B"],["A","B"],["B","C"],["B","C"],["C","A"],["C","A"]],"start":"A","end":"A","directed":false},"checker_scope":"Exact declared route or bounded observation only; an unrestricted proof is not automatically certified and no new checkpoint objective or eligibility is introduced."}}
```

<details>
<summary>Hint 1</summary>

The graph has six edge occurrences, even though only three endpoint pairs occur.

</details>

<details>
<summary>Hint 2</summary>

After using one triangle, traverse the unused copies in the other direction.

</details>

<details>
<summary>Worked solution</summary>

An Euler circuit must respect edge multiplicity, not merely the set of endpoint pairs.

1. One route is A,B,C,A,C,B,A.
2. Its successive edges are AB,BC,CA,AC,CB,BA: exactly two occurrences of each unordered endpoint pair.
3. The route starts and ends at A and contains six steps, using every supplied edge occurrence once.

</details>
