# Locate the unique critical point

*Easy · [Multivariable calculus problems](index.md)*

Find the unique critical point of $f(x,y)=x^2+y^2-2x+4y$ on $\mathbb R^2$. Enter its coordinates $(x,y)$.

```answer
{"answer":{"kind":"vector","expected":["1","-2"],"checker_scope":"Exact requested value, polynomial, vector or matrix only; the explanatory argument is supplied as a worked solution, not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Both first partial derivatives must vanish.

</details>

<details>
<summary>Hint 2</summary>

The two equations separate by coordinate.

</details>

<details>
<summary>Worked solution</summary>

The stationary equations are linear and have a unique solution.

1. The gradient is $(2x-2,2y+4)$.
2. Setting it equal to zero gives $x=1$ and $y=-2$.
3. Thus the unique critical point is $(1,-2)$; completing squares also shows it is the global minimum.

</details>
