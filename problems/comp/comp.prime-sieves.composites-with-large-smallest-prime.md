# Enumerate composites by their smallest prime factor

*Hard · [Computational arithmetic problems](index.md)*

Find the sum of all composite integers $n\leq200$ whose smallest prime factor is at least $11$.

```answer
{"answer":{"kind":"integer","expected":"620","checker_scope":"Exact requested integer or rational only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

A product of three prime factors meeting the restriction already exceeds the bound.

</details>

<details>
<summary>Hint 2</summary>

For a product of two such primes, the smaller prime cannot exceed the square root of the bound.

</details>

<details>
<summary>Worked solution</summary>

The bound leaves a short exhaustive semiprime list.

1. Three prime factors would give $n\geq11^3>200$, so each candidate is a product of two primes, counted with multiplicity.
2. The smaller factor is either $11$ or $13$. The allowed products are $11^2=121$, $11\cdot13=143$, $11\cdot17=187$ and $13^2=169$; the next products exceed $200$.
3. Their sum is $121+143+187+169=620$.

</details>
