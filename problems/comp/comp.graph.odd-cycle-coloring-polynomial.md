# Retain the parity sign in a cycle coloring formula

*Easy · [Computational arithmetic problems](index.md)*

For a cycle on n vertices use $P(q)=(q-1)^n+(-1)^n(q-1)$. Find the number of proper colorings of C5 with three named colors.

```answer
{"answer":{"kind":"integer","expected":"30","checker_scope":"Exact requested finite count using the supplied graph convention or theorem. No graph program or unrestricted proof is run or certified; this new skill does not expand an existing objective contract."}}
```

<details>
<summary>Hint 1</summary>

Use both the vertex-count exponent and its parity.

</details>

<details>
<summary>Hint 2</summary>

An odd cycle subtracts the final correction term.

</details>

<details>
<summary>Worked solution</summary>

Cycle closure corrects the path-like main term by a parity-dependent quantity.

1. Here q-1=2 and n=5.
2. The polynomial value is two to the fifth power minus two.
3. This gives thirty proper colorings.

</details>
