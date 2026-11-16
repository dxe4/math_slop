# Fermat's little theorem: check prime and nonzero input

*Easy · [Number theory](index.md)*

For which numbered (p,a) pairs do the hypotheses of $a^{p-1}$ ≡ $1$ (mod p) in Fermat’s little theorem hold? $1$: $(5,2)$. $2$: $(7,14)$. $3$: $(9,2)$. $4$: $(11,6)$. Return all qualifying pair numbers.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,4],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Check p is prime and p does not divide a.

</details>

<details>
<summary>Hint 2</summary>

A prime modulus alone does not meet the nonzero-input condition.

</details>

<details>
<summary>Worked solution</summary>

The theorem’s hypotheses are part of a valid application.

1. Pairs $1$ and $4$ have prime p with a not divisible by p.
2. Pair $2$ fails because $7$ divides $14$; pair $3$ fails because $9$ is composite. The set is $\{1,4\}$.

</details>
