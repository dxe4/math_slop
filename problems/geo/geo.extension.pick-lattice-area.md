# Use a lattice polygon count

*Easy · [Geometry and trigonometry problems](index.md)*

A simple lattice polygon has $7$ interior lattice points and $8$ boundary lattice points. Using Pick’s formula $A=I+B/2-1$, find its area.

```answer
{"answer":{"kind":"integer","expected":"10","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Insert the interior and boundary counts in their separate roles.

</details>

<details>
<summary>Hint 2</summary>

Only the boundary count is halved.

</details>

<details>
<summary>Worked solution</summary>

Apply the supplied lattice-area identity.

1. Here $I=7$ and $B=8$.
2. The formula gives $A=7+8/2-1$.
3. Therefore $A=10$ square lattice units.

</details>
