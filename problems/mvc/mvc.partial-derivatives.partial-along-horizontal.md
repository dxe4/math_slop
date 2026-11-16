# Restrict a partial derivative to a line

*Medium · [Multivariable calculus problems](index.md)*

Let $f(x,y)=x^2y-y^3$. Find the polynomial $p(x)=f_x(x,2)$, valid for every real $x$. Enter a polynomial in $x$ with no excluded real values.

```answer
{"answer":{"kind":"expression","expected":"4*x","domain":{"variable":"x","excluded":[]},"checker_scope":"Exact requested value, polynomial, vector or matrix only; the explanatory argument is supplied as a worked solution, not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Differentiate before setting $y=2$.

</details>

<details>
<summary>Hint 2</summary>

The term independent of $x$ contributes nothing.

</details>

<details>
<summary>Worked solution</summary>

Restriction follows the partial differentiation operation.

1. Holding $y$ fixed gives $f_x(x,y)=2xy$.
2. Substitute $y=2$ to obtain $p(x)=4x$.
3. The original polynomial and its derivative are defined for all real $x$, so no exclusions occur.

</details>
