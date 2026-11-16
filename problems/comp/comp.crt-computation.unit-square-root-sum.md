# Pair all roots of unity by negation

*Hard · [Computational arithmetic problems](index.md)*

Find the sum of the representatives $r\in\{0,\ldots,999\}$ satisfying $r^2\equiv1\pmod{1000}$.

```answer
{"answer":{"kind":"integer","expected":"4000","checker_scope":"Exact requested integer only; no learner program or unrestricted proof is executed or certified."}}
```

<details>
<summary>Hint 1</summary>

Count roots separately modulo eight and modulo one hundred twenty-five.

</details>

<details>
<summary>Hint 2</summary>

The solutions pair under $r\mapsto1000-r$.

</details>

<details>
<summary>Worked solution</summary>

CRT counts the roots, and negation symmetry determines their sum without listing them.

1. Modulo eight all four odd residues square to one. Modulo $125$, the coprime factors $r-1,r+1$ force $r\equiv\pm1$, giving two roots.
2. CRT therefore gives $4\cdot2=8$ roots modulo $1000$. None is fixed by negation: $r=0$ and $r=500$ do not square to one.
3. The roots form four pairs, each summing to $1000$, so their total is $4000$.

</details>
