# Count reduced fractions through a common denominator

*Medium · [Computational arithmetic problems](index.md)*

How many distinct reduced fractions $a/b$ satisfy $0<a<b$, $\gcd(a,b)=1$ and $b\mid360$?

```answer
{"answer":{"kind":"integer","expected":"359","checker_scope":"Exact requested integer or rational only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Represent every candidate fraction using denominator $360$.

</details>

<details>
<summary>Hint 2</summary>

Reducing those common-denominator fractions does not identify two different values.

</details>

<details>
<summary>Worked solution</summary>

A common-denominator bijection avoids summing totients individually.

1. Every $k/360$ for $1\leq k\leq359$ reduces to a fraction whose denominator divides $360$.
2. Conversely, if $b\mid360$, then $a/b=[a(360/b)]/360$, with numerator strictly between zero and $360$.
3. These are distinct values for distinct $k$, so the count is $359$.

</details>
