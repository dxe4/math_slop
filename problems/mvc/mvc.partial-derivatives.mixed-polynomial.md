# Take a mixed partial derivative

*Medium · [Multivariable calculus problems](index.md)*

For $f(x,y)=x^3y^2$, let $f_{xy}=\partial_y(\partial_x f)$. Compute $f_{xy}(1,2)$.

```answer
{"answer":{"kind":"integer","expected":"12","checker_scope":"Exact requested value, polynomial, vector or matrix only; the explanatory argument is supplied as a worked solution, not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Differentiate first with respect to $x$, as the definition specifies.

</details>

<details>
<summary>Hint 2</summary>

Then differentiate the remaining power of $y$.

</details>

<details>
<summary>Worked solution</summary>

The order is explicit, and the polynomial is smooth everywhere.

1. First $f_x=3x^2y^2$.
2. Differentiation in $y$ gives $f_{xy}=6x^2y$.
3. At $(1,2)$ this equals $6\cdot1\cdot2=12$.

</details>
