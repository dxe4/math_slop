# Two properties can hold together

*Medium · [Set theory](index.md)*

On $X=\{a,b\}$, where $a\neq b$, let $R=\{(a,a),(b,b)\}$. Among the standard properties symmetric and antisymmetric, enter the set of every property that holds.

```answer
{"answer":{"kind":"set","expected":"{symmetric,antisymmetric}","checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

A loop is its own reverse.

</details>

<details>
<summary>Hint 2</summary>

Antisymmetry rules out distinct related elements in both directions; it does not rule out loops.

</details>

<details>
<summary>Worked solution</summary>

Symmetry and antisymmetry can both hold in one relation.

1. Both listed pairs equal their reverses, so the relation is symmetric.
2. If both $xRy$ and $yRx$ hold here, the pairs are loops and $x=y$. Thus antisymmetry also holds.
3. The requested set is $\{\mathrm{symmetric},\mathrm{antisymmetric}\}$.

</details>
