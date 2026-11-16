# Collect contributions from two expansions

*Medium · [Combinatorics](index.md)*

Find the coefficient of $x^{3}$ in $(1+x)^2$($1+2x$)^$2$.

```answer
{"answer":{"kind":"integer","expected":12,"checker_scope":"Exact finite structured answer for combine-finite-binomial-expansions; no independently authored proof or general proficiency claim."}}
```

<details>
<summary>Hint 1</summary>

Expand each degree-two factor separately.

</details>

<details>
<summary>Hint 2</summary>

The possible degree pairs are $(1,2)$ and $(2,1)$.

</details>

<details>
<summary>Worked solution</summary>

Add every finite product contribution to the target power.

1. The factors expand as $1+2x+x^{2}$ and $1+4x+4x^{2}$.
2. The $x^{3}$ coefficient is $2\times 4+1\times 4=12$.

</details>
