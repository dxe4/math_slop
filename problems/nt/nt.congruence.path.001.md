# Congruence and remainders: bounded congruence class

*Easy · [Number theory](index.md)*

Give all x in $\{0,1,...,17\}$ satisfying x ≡ $-3$ (mod 7).

```answer
{"answer":{"kind":"finite_integer_set","expected":[4,11],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

The difference $x + 3$ must be divisible by $7$.

</details>

<details>
<summary>Hint 2</summary>

Consecutive representatives differ by $7$.

</details>

<details>
<summary>Worked solution</summary>

Congruence collects integers with differences divisible by the fixed modulus.

1. The allowed multiples $x + 3$ are $7$ and $14$.
2. Thus the complete solution set is $\{4,11\}$; the next value $18$ lies outside the range.

</details>
