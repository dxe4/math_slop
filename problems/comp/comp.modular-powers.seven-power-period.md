# Use a proved short exponent period

*Medium · [Computational arithmetic problems](index.md)*

Find the least nonnegative residue of $7^{222}$ modulo $1000$.

```answer
{"answer":{"kind":"integer","expected":"49","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Compute small doubled exponents to find a usable period.

</details>

<details>
<summary>Hint 2</summary>

It is enough to exhibit a power congruent to one; minimality of the period is unnecessary.

</details>

<details>
<summary>Worked solution</summary>

An explicitly verified power-one relation permits exponent reduction.

1. Modulo $1000$, $7^5\equiv807$ and $7^{10}\equiv807^2\equiv249$.
2. Hence $7^{20}\equiv249^2=62001\equiv1$.
3. Since $222=11\cdot20+2$, the residue is $7^2=49$.

</details>
