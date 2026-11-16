# Congruence and remainders: retain the modulus

*Easy · [Number theory](index.md)*

Return all true numbered statements. $1$: $26$ ≡ $2$ (mod 8). $2$: $26$ ≡ $3$ (mod 8). $3$: $26$ ≡ $2$ (mod 6).

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,3],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Test each difference using its stated modulus.

</details>

<details>
<summary>Hint 2</summary>

The same difference can be divisible by more than one modulus.

</details>

<details>
<summary>Worked solution</summary>

The modulus belongs to the mathematical statement.

1. The differences are $24,23,24$.
2. $24$ is divisible by $8$ and by $6$; $23$ is not divisible by 8, so the true set is $\{1,3\}$.

</details>
