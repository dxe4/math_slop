# Evaluate an exponential through nilpotent truncation

*Medium · [Linear algebra problems](index.md)*

Over $\mathbb R$, let N have ones just above the diagonal in size four and all other entries zero. Find $e^N$, where the exponential is defined by its power series. All entries are dimensionless.

```answer
{"answer":{"kind":"matrix","expected":[["1","1","1/2","1/6"],["0","1","1","1/2"],["0","0","1","1"],["0","0","0","1"]],"checker_scope":"Only the requested exact invariant or rational coordinate object is checked. Canonical-form reasoning and graduate preparation are not automatically certified.","rows":4,"columns":4}}
```

<details>
<summary>Hint 1</summary>

The fourth power is zero.

</details>

<details>
<summary>Hint 2</summary>

The first, second and third powers occupy successive superdiagonals.

</details>

<details>
<summary>Worked solution</summary>

Nilpotency makes the infinite function an exact finite polynomial.

1. The defining series terminates exactly as $e^N=I+N+N^2/2+N^3/6$.
2. The three nonzero powers have unit entries on the first, second and third superdiagonals respectively.
3. Adding them gives the displayed upper-triangular matrix. The factorial denominators come from the function, not from a change of Jordan basis.

</details>
