# Classify odd-square residues

*Medium · [Original olympiad-style problems](index.md)*

Find the complete set of residues modulo $16$ attained by $n^2$ when $n$ ranges over odd integers. Enter the residues in $\{0,1,\ldots,15\}$.

```answer
{"answer":{"kind":"set","expected":["1","9"],"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Write an odd integer as $2k+1$ and use that $k(k+1)$ is even.

</details>

<details>
<summary>Hint 2</summary>

First restrict the square modulo $8$, then exhibit odd integers for both remaining residues modulo $16$.

</details>

<details>
<summary>Worked solution</summary>

Separate a restriction from attainability.

1. An odd square is $4k(k+1)+1$, hence is congruent to $1$ modulo $8$.
2. Modulo $16$, only residues $1$ and $9$ have that property.
3. They are both attained, by $1^2$ and $3^2$, respectively. Thus the complete set is $\{1,9\}$.

</details>
