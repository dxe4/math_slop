# Count irreducible monic quadratics

*Medium · [Abstract algebra problems](index.md)*

How many monic irreducible quadratic polynomials are there over $\mathbb F_5$?

```answer
{"answer":{"kind":"integer","expected":10,"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Count all monic quadratics and subtract reducible ones.

</details>

<details>
<summary>Hint 2</summary>

A reducible monic quadratic is determined by an unordered pair of roots, allowing a repeated root.

</details>

<details>
<summary>Worked solution</summary>

Unique factorization counts reducible quadratics by root multisets.

1. There are $5^2=25$ monic quadratics, one choice for each linear and constant coefficient.
2. A reducible one is uniquely $(x-a)(x-b)$ for an unordered pair $\{a,b\}$ with repetition allowed. There are $\binom{5+1}{2}=15$ such pairs.
3. The remaining $25-15=10$ monic quadratics are irreducible.

</details>
