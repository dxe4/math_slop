# Track the endpoints of an infinite product

*Hard · [Original Putnam-style training](index.md)*

Evaluate $\prod_{n=2}^{\infty}(1-1/n^2)$, defined as the limit of the finite products.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":2},"checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

Factor each term into two adjacent linear ratios.

</details>

<details>
<summary>Hint 2</summary>

Keep both endpoint factors of the finite product before taking its limit.

</details>

<details>
<summary>Worked solution</summary>

A product telescopes in two directions.

1. Each factor is $[(n-1)/n][(n+1)/n]$.
2. The product from two through N is $(1/N)[(N+1)/2]=(N+1)/(2N)$.
3. This positive finite product tends to $1/2$, defining the claimed infinite product.

</details>
