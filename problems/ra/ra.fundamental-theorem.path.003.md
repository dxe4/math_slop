# Check an integrable discontinuity before using FTC

*Medium · [Real analysis](index.md)*

On $\mathbb R$, let $f(0)=1$ and $f(t)=0$ for $t\neq0$, and define $F(x)=\int_{-1}^x f(t)\,dt$. You may use that changing finitely many values of a Riemann integrable function leaves its bounded-interval integral unchanged. Return $F^{\prime}(0)$ in derivative and $f(0)$ in point\_value.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"derivative":"0","point_value":"1"},"checker_scope":"Checks the complete displayed exact mathematical answer under the original finite givens. Any written explanation remains separate from this bounded automatic result."}}
```

<details>
<summary>Hint 1</summary>

The integrand differs from the zero function at only one point.

</details>

<details>
<summary>Hint 2</summary>

First determine the entire accumulated function, then differentiate it.

</details>

<details>
<summary>Worked solution</summary>

The integrand continuity hypothesis matters in the differentiation form of the Fundamental Theorem.

1. The finite-change fact gives $F(x)=0$ for every real $x$, including reversed integration intervals.
2. The constant function has derivative $F^{\prime}(0)=0$.
3. The assigned integrand value is $f(0)=1$, so the derivative differs from the integrand at its discontinuity.

</details>
