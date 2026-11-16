# Use a potential for work

*Easy · [Multivariable calculus problems](index.md)*

Let $F(x,y)=(2x,2y)$. Compute $\int_C F\cdot dr$ along the straight segment from $(0,0)$ to $(1,2)$, in that direction.

```answer
{"answer":{"kind":"integer","expected":"5","checker_scope":"Exact requested integral value only; orientation and theorem hypotheses are explained in the model solution, not automatically certified by the scalar verdict."}}
```

<details>
<summary>Hint 1</summary>

This field is the gradient of a polynomial.

</details>

<details>
<summary>Hint 2</summary>

Work along a gradient field is the potential difference between the stated endpoints.

</details>

<details>
<summary>Worked solution</summary>

A globally defined potential makes the work depend only on the oriented endpoints.

1. Write $F=\nabla\phi$ with $\phi(x,y)=x^2+y^2$.
2. The polynomial potential is differentiable on all of $\mathbb R^2$, which contains the segment.
3. The work is $\phi(1,2)-\phi(0,0)=5$.

</details>
