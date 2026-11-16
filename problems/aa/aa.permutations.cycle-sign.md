# Compute a permutation sign

*Medium · [Abstract algebra problems](index.md)*

Find the sign, entered as $1$ or $-1$, of $(1\ 2\ 3\ 4)(5\ 6)(7\ 8\ 9)$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

A cycle of length one more than a given integer can be decomposed into that many transpositions.

</details>

<details>
<summary>Hint 2</summary>

Multiply the signs of the three disjoint factors.

</details>

<details>
<summary>Worked solution</summary>

Cycle parity is determined by one fewer than the cycle length.

1. The three factors have signs $(-1)^3=-1$, $(-1)^1=-1$ and $(-1)^2=1$.
2. Sign is multiplicative under composition.
3. The total sign is $(-1)(-1)(1)=1$.

</details>
