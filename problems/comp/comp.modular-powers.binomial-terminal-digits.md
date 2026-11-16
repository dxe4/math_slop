# Truncate a binomial expansion modulo a power of ten

*Hard · [Computational arithmetic problems](index.md)*

Find the least nonnegative residue of $11^{100}$ modulo $100000$.

```answer
{"answer":{"kind":"integer","expected":"46001","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Write the base as one plus ten.

</details>

<details>
<summary>Hint 2</summary>

Every binomial term from degree five onward vanishes modulo the stated modulus.

</details>

<details>
<summary>Worked solution</summary>

A finite binomial truncation avoids evaluating the enormous full power.

1. Modulo $10^5$, $(1+10)^{100}\equiv1+100\cdot10+4950\cdot10^2+161700\cdot10^3+3921225\cdot10^4$.
2. These five terms have residues $1,1000,95000,0,50000$.
3. Their sum is $146001$, whose least nonnegative residue is $46001$.

</details>
