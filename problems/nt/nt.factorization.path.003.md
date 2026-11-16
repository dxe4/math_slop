# Prime factorization: prime bases and product

*Easy · [Number theory](index.md)*

Which numbered expressions are prime factorizations of $60$? Return all valid numbers. $1$: $2^{2} \times  3 \times  5$. $2$: $4 \times  3 \times  5$. $3$: $2 \times  3 \times  5$. $4$: $2 \times  2 \times  3 \times  5$. Every base or listed factor must be prime.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,4],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Check the product and primality separately.

</details>

<details>
<summary>Hint 2</summary>

A composite factor can produce the correct product without being a prime factorization.

</details>

<details>
<summary>Worked solution</summary>

Equal products are not enough: a prime factorization uses primes.

1. Expressions $1$ and $4$ multiply prime factors to $60$.
2. Expression $2$ uses composite $4$; expression $3$ multiplies to only $30$. The valid set is $\{1,4\}$.

</details>
