# Enumerate a quadratic representation with residue restrictions

*Medium · [Original olympiad-style problems](index.md)*

How many ordered pairs of positive integers $(x,y)$ satisfy $x^2+y^2=65$?

```answer
{"answer":{"kind":"integer","expected":"4","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Both coordinates are at most eight, and modulo five the nonzero square residues must be one and four.

</details>

<details>
<summary>Hint 2</summary>

It is enough first to inspect $x\le y$, so $x\le5$.

</details>

<details>
<summary>Worked solution</summary>

Use symmetry, a short bound and modular exclusions.

1. For $x\le y$, $2x^2\le65$, hence $x\le5$.
2. Checking the squares for $x=1,2,3,4,5$ leaves $y^2=64,61,56,49,40$, respectively. Only the first and fourth are squares.
3. The unordered positive pairs are $(1,8),(4,7)$, with unequal entries. Each has two orders, giving four ordered solutions.

</details>
