# Coprime Chinese remainder theorem: pairwise coprime hypothesis

*Easy · [Number theory](index.md)*

Which numbered lists satisfy the pairwise-coprime positive-moduli hypothesis of the coprime CRT? $1$: $(3,4)$. $2$: $(4,6)$. $3$: $(5,9)$. Return all valid list numbers.

```answer
{"answer":{"kind":"finite_integer_set","expected":[1,3],"checker_scope":"Checks the authored exact structured answer for this instance. Selection and proof scaffolds assess only the stated narrow task; no unrestricted proof validity is certified."}}
```

<details>
<summary>Hint 1</summary>

Compute the gcd of each pair.

</details>

<details>
<summary>Hint 2</summary>

A gcd larger than $1$ prevents using the coprime version of the theorem.

</details>

<details>
<summary>Worked solution</summary>

Check the version-specific hypotheses before applying CRT.

1. $\gcd (3,4)=1$ and $\gcd (5,9)=1$, while $\gcd (4,6)=2$.
2. The lists meeting this hypothesis are $\{1,3\}$; this says nothing by itself about compatibility in the noncoprime case.

</details>
