# The usual order is not symmetric

*Medium · [Set theory](index.md)*

On $X=\{1,2,3\}$, define $xRy$ exactly when $x\leq y$ in the usual numerical order. Enter the set of every property that holds, using the standard names reflexive, irreflexive, symmetric, antisymmetric, transitive.

```answer
{"answer":{"kind":"set","expected":"{reflexive,antisymmetric,transitive}","checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

Check loops and reverse pairs independently.

</details>

<details>
<summary>Hint 2</summary>

For transitivity, combine two numerical comparisons; for antisymmetry, consider comparisons in both directions.

</details>

<details>
<summary>Worked solution</summary>

Different relation properties impose different quantified conditions.

1. Every element is related to itself, so the relation is reflexive and not irreflexive.
2. The pair $(1,2)$ has no reverse, so symmetry fails. If $x\leq y$ and $y\leq x$, equality follows, proving antisymmetry.
3. Numerical order is transitive. Hence the property set is $\{\mathrm{reflexive},\mathrm{antisymmetric},\mathrm{transitive}\}$.

</details>
