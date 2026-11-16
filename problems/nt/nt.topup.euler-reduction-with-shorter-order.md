# Reduce an exponent and exploit a shorter verified cycle

*Medium · [Number theory](index.md)*

Find the canonical residue of $15^{123}$ modulo 28.

```answer
{"answer":{"kind":"integer","expected":"15","checker_scope":"Exact requested finite result, set or polynomial identity only. Worked number-theoretic reasoning is not automatically certified; no new same-version checkpoint objective is introduced."}}
```

<details>
<summary>Hint 1</summary>

Check coprimality before invoking Euler.

</details>

<details>
<summary>Hint 2</summary>

After reducing modulo the totient, compute the small residual power.

</details>

<details>
<summary>Worked solution</summary>

Euler supplies a valid exponent period even if the base has a shorter actual order.

1. The inputs fifteen and twenty-eight are coprime, and $\varphi(28)=12$.
2. Since $123\equiv3\pmod {12}$, Euler reduces the power to the cube of fifteen.
3. But $15^2=225\equiv1\pmod {28}$, so the cube and the original power both have residue fifteen.

</details>
