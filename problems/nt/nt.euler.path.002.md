# Euler's theorem: check coprimality for euler

*Easy · [Number theory](index.md)*

For which numbered (a,m) pairs can the coprime form $a^\varphi$(m) ≡ $1$ (mod m) of Euler’s theorem be applied? $1$: $(7,15)$. $2$: $(6,9)$. $3$: $(4,10)$. $4$: $(5,12)$. Return all qualifying pair numbers.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,4],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

All listed moduli exceed $1$; compute each gcd.

</details>

<details>
<summary>Hint 2</summary>

Composite moduli are allowed when the base is coprime to the modulus.

</details>

<details>
<summary>Worked solution</summary>

Euler generalizes the coprime power identity beyond prime moduli.

1. The gcds are respectively $1,3,2,1$.
2. Only pairs $1$ and $4$ satisfy coprimality, giving $\{1,4\}$.

</details>
