# Use a specified unit direction

*Medium · [Multivariable calculus problems](index.md)*

Let $f(x,y)=x^2+2y^2$. At $(1,1)$ find its directional derivative in the unit direction $u=(3/5,4/5)$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":22,"denominator":5},"checker_scope":"Exact requested value, polynomial, vector or matrix only; the explanatory argument is supplied as a worked solution, not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

A directional derivative in a unit direction is a gradient dot product.

</details>

<details>
<summary>Hint 2</summary>

Check the components of the gradient before forming the dot product.

</details>

<details>
<summary>Worked solution</summary>

The supplied direction already has length one.

1. The gradient is $(2x,4y)$, hence $(2,4)$ at $(1,1)$.
2. The vector $u$ has squared length $9/25+16/25=1$.
3. The derivative is $(2,4)\cdot(3/5,4/5)=6/5+16/5=22/5$.

</details>
