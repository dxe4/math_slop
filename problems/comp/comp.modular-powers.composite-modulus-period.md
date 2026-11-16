# Combine local periods before squaring

*Hard · [Computational arithmetic problems](index.md)*

Compute the least nonnegative residue of $2^{1000}$ modulo $1001$.

```answer
{"answer":{"kind":"integer","expected":"562","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Factor the modulus and find a common valid exponent period for the three prime factors.

</details>

<details>
<summary>Hint 2</summary>

After reducing the exponent, repeated squaring with $2^{10}$ is short.

</details>

<details>
<summary>Worked solution</summary>

Local power-one relations combine through the Chinese remainder theorem.

1. The modulus is $1001=7\cdot11\cdot13$. The periods $3,10,12$ respectively imply $2^{60}\equiv1$ modulo each prime and hence modulo $1001$.
2. Thus $2^{1000}\equiv2^{40}$. Since $2^{10}=1024\equiv23$, $2^{20}\equiv529$.
3. Finally $529^2=279841=279\cdot1001+562$, giving residue $562$.

</details>
