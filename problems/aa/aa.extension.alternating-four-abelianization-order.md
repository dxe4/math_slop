# Generate a derived subgroup rather than only finding an abelian quotient

*Medium · [Abstract algebra problems](index.md)*

Find $|A_4/[A_4,A_4]|$. Use the normal four-group V={e,(12)(34),(13)(24),(14)(23)} and justify that the derived subgroup is all of V.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Exact requested finite structural quantity only; no group-theoretic proof is automatically assessed."}}
```

<details>
<summary>Hint 1</summary>

The quotient by V has prime order and is abelian.

</details>

<details>
<summary>Hint 2</summary>

Find one nontrivial double transposition as a commutator and use conjugation.

</details>

<details>
<summary>Worked solution</summary>

The upper inclusion from a quotient must be paired with a generating lower inclusion.

1. Since \|A4/V\|=3, the quotient is abelian and the derived subgroup lies in V.
2. With the convention \[sigma,tau\]=sigma\*tau\*sigma inverse\*tau inverse, the commutator of (123) and (124) is (12)(34). Its A4-conjugates include all three nonidentity elements of V. The derived subgroup is normal, so it contains V.
3. Thus \[A4,A4\]=V and the abelianization has order 12/4=3.

</details>
