# Collect the first partial derivatives

*Easy · [Multivariable calculus problems](index.md)*

For $f(x,y)=x^2+xy+y^2$, enter $\nabla f(1,2)$ as the ordered vector $(f_x,f_y)$.

```answer
{"answer":{"kind":"vector","expected":["4","5"],"checker_scope":"Exact requested value, polynomial, vector or matrix only; the explanatory argument is supplied as a worked solution, not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Compute one partial derivative for each coordinate.

</details>

<details>
<summary>Hint 2</summary>

Keep the coordinate order specified in the question.

</details>

<details>
<summary>Worked solution</summary>

The gradient is the vector of first partial derivatives.

1. The derivatives are $f_x=2x+y$ and $f_y=x+2y$.
2. At $(1,2)$ they equal $4$ and $5$.
3. Therefore $\nabla f(1,2)=(4,5)$.

</details>
