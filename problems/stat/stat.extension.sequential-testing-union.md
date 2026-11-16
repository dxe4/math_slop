# Sequential testing union

*Easy · [Statistics and probability](index.md)*

At three planned looks, each test has false-rejection probability at most $1/100$ under the same null. Without assuming independence, what upper bound does the union bound give for false rejection at any look?

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":100},"checker_scope":"Checks only the requested exact finite answer under the stated model; it does not certify the reasoning or modeling assumptions."}}
```

<details>
<summary>Hint 1</summary>

Define the three false-rejection events on the common sampling space.

</details>

<details>
<summary>Hint 2</summary>

Any false rejection is their union; sum the supplied marginal error bounds.

</details>

<details>
<summary>Worked solution</summary>

Use a union bound across the planned looks.

1. Let $E_j$ be rejection at look $j$ when the common null is true, for $j=1,2,3$.
2. Then $P(E_1\cup E_2\cup E_3)\le\sum_{j=1}^3P(E_j)$.
3. The resulting upper bound is $3/100$. This conclusion uses the supplied validity at each look; fixed-sample validity alone need not cover arbitrarily chosen data-dependent looks.

</details>
