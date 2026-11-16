# Count units using distinct prime exclusions

*Medium · [Number theory](index.md)*

Find $\varphi(360)$, counting canonical residues coprime to 360.

```answer
{"answer":{"kind":"integer","expected":"96","checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Factor the modulus into prime powers.

</details>

<details>
<summary>Hint 2</summary>

Each distinct prime contributes its exclusion factor once.

</details>

<details>
<summary>Worked solution</summary>

The totient formula counts residues that avoid all prime divisors of the modulus.

1. The factorization is $360=2^3 3^2 5$.
2. The distinct-prime formula gives $360(1-1/2)(1-1/3)(1-1/5)$.
3. The value is $360(1/2)(2/3)(4/5)=96$.

</details>
