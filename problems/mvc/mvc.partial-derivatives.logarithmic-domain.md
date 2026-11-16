# Differentiate away from a logarithmic singularity

*Medium · [Multivariable calculus problems](index.md)*

For $f(x,y)=\log(x^2+y^2)$, defined on $\mathbb R^2\setminus\{(0,0)\}$, compute $f_x(1,1)$.

```answer
{"answer":{"kind":"integer","expected":"1","checker_scope":"Exact requested value, polynomial, vector or matrix only; the explanatory argument is supplied as a worked solution, not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Differentiate the logarithm by the chain rule.

</details>

<details>
<summary>Hint 2</summary>

The denominator is the original logarithm argument.

</details>

<details>
<summary>Worked solution</summary>

The domain permits differentiation at the stated nonzero point.

1. On the domain, $f_x(x,y)=2x/(x^2+y^2)$.
2. The point $(1,1)$ lies in the domain since its squared norm is $2$.
3. Substitution gives $f_x(1,1)=2/2=1$.

</details>
