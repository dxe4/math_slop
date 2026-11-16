# Find right-hand sides admitted by a nonunit coefficient

*Medium · [Number theory](index.md)*

Find all residues b with $0\le b<21$ for which 14x congruent to b modulo 21 has an integer solution. Return a set.

```answer
{"answer":{"kind":"set","expected":["0","7","14"],"checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Compute the gcd of fourteen and twenty-one.

</details>

<details>
<summary>Hint 2</summary>

Both necessity and sufficiency use divisibility by that gcd.

</details>

<details>
<summary>Worked solution</summary>

The image of multiplication by a nonunit is a proper subset of residue classes.

1. The gcd is seven, so any achievable right-hand side is divisible by seven.
2. The only such canonical residues are zero, seven and fourteen.
3. They are all achieved: x=0 gives zero, x=2 gives seven modulo twenty-one, and x=1 gives fourteen.

</details>
