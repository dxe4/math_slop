# Fix the scale of a normal

*Medium · [Multivariable calculus problems](index.md)*

At $(1,2,2)$ on the sphere $x^2+y^2+z^2=9$, choose the outward normal vector whose first coordinate is $1$. Enter that vector; it need not be a unit vector.

```answer
{"answer":{"kind":"vector","expected":["1","2","2"],"checker_scope":"Exact requested value, polynomial, vector or matrix only; the explanatory argument is supplied as a worked solution, not automatically certified."}}
```

<details>
<summary>Hint 1</summary>

The gradient of the defining function is normal to its level surface.

</details>

<details>
<summary>Hint 2</summary>

An outward normal points away from the center, and the first coordinate fixes the scale.

</details>

<details>
<summary>Worked solution</summary>

Normal vectors have a scale ambiguity until the prompt normalizes one coordinate.

1. For $g=x^2+y^2+z^2$, $\nabla g=(2x,2y,2z)$.
2. At the stated point this is $(2,4,4)$, pointing outward.
3. Dividing by $2$ gives the required normal $(1,2,2)$.

</details>
