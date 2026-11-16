# Find the largest unit-direction rate

*Medium · [Multivariable calculus problems](index.md)*

For $f(x,y)=3x+4y$, find the maximum directional derivative over all unit directions at any fixed point of $\mathbb R^2$.

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Exact requested value, polynomial, vector or matrix only; the explanatory argument is supplied as a worked solution, not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

Compare a dot product with the product of the vector lengths.

</details>

<details>
<summary>Hint 2</summary>

Equality requires a unit direction parallel to the gradient.

</details>

<details>
<summary>Worked solution</summary>

Cauchy-Schwarz bounds all unit-direction rates and identifies an attaining direction.

1. The gradient is the constant vector $(3,4)$, of length $5$.
2. For $\lVert u\rVert=1$, $\nabla f\cdot u\leq5$ by Cauchy-Schwarz.
3. The unit vector $(3/5,4/5)$ attains $5$, so the maximum is $5$.

</details>
