# Recognize an exact vector field

*Medium · [Multivariable calculus problems](index.md)*

Let $\phi(x,y,z)=x^2y+z^3$ and $F=\nabla\phi$. For the upward oriented graph $S=\{(x,y,x^2+y^2):x^2+y^2\leq1\}$, find $\iint_S(\nabla\times F)\cdot n\,dS$.

```answer
{"answer":{"kind":"integer","expected":"0","checker_scope":"Exact requested integral value only; orientation and theorem hypotheses are explained in the model solution, not automatically certified by the scalar verdict."}}
```

<details>
<summary>Hint 1</summary>

The potential is a polynomial, so mixed derivatives commute everywhere.

</details>

<details>
<summary>Hint 2</summary>

The curl of its gradient can be computed without parameterizing the graph.

</details>

<details>
<summary>Worked solution</summary>

Smooth exact fields have identically zero curl.

1. The gradient is $F=(2xy,x^2,3z^2)$.
2. Its curl is $(0,0,2x-2x)=(0,0,0)$ everywhere; all derivatives exist continuously.
3. The flux of this zero vector field through the specified graph is $0$.

</details>
