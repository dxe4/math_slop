# Local linear approximation: construct tangent polynomial

*Medium · [Calculus](index.md)*

For $f(x)=x^{2}$, construct $L(x)=f(3)+f^{\prime}(3) (x-3)$. Return a simplified polynomial and empty excluded-input set.

```answer
{"answer":{"kind":"expression_with_domain","expected":{"expression":"6x-9","excluded":[]},"checker_scope":"Checks a bounded polynomial expression and the stated excluded-input set. It does not certify a general proof."}}
```

<details>
<summary>Hint 1</summary>

Find both a function value and a derivative value.

</details>

<details>
<summary>Hint 2</summary>

The tangent formula uses $x-3$, not x alone.

</details>

<details>
<summary>Worked solution</summary>

Thus $L(x)=9+6$($x-3$)=$6x-9$, the tangent-line approximation near $3$.

1. $f(3)=9$ and $f^{\prime}(3)=6$.
2. Thus $L(x)=9+6$($x-3$)=$6x-9$, the tangent-line approximation near $3$.

</details>
