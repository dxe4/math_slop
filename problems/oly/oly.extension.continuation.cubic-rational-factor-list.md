# Factor a cubic while preserving the rational branch

*Medium · [Original olympiad-style problems](index.md)*

Find all real roots of $2x^3-3x^2-3x+2=0$. Enter the finite set of rational roots.

```answer
{"answer":{"kind":"set","expected":["-1","1/2","2"],"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The small candidate negative one is a root.

</details>

<details>
<summary>Hint 2</summary>

After dividing by its linear factor, factor the remaining quadratic rather than approximate it.

</details>

<details>
<summary>Worked solution</summary>

Combine one rational root with exact factorization.

1. The cubic equals $(x+1)(2x^2-5x+2)$.
2. The quadratic equals $(2x-1)(x-2)$.
3. Thus the three distinct roots are negative one, one half and two, and a cubic has no further roots.

</details>
