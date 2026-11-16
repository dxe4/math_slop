# Use the oriented vector area of a triangle

*Hard · [Multivariable calculus problems](index.md)*

For $F=(z,x,y)$, let $S$ be the triangle with vertices $(1,0,0)$, $(0,1,0)$ and $(0,0,1)$, oriented with a normal whose three components are positive. Compute $\iint_S(\nabla\times F)\cdot n\,dS$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":3,"denominator":2},"checker_scope":"Exact requested integral value only; orientation and theorem hypotheses are explained in the model solution, not automatically certified by the scalar verdict."}}
```

<details>
<summary>Hint 1</summary>

The curl is constant, but the triangle is not horizontal.

</details>

<details>
<summary>Hint 2</summary>

Parameterize the plane as $r(u,v)=(u,v,1-u-v)$ on a planar right triangle.

</details>

<details>
<summary>Worked solution</summary>

The parameterized cross product carries both surface scale and orientation.

1. The curl is $(1,1,1)$. The parameter domain is $u,v\geq0$, $u+v\leq1$.
2. For $r(u,v)=(u,v,1-u-v)$, $r_u\times r_v=(1,1,1)$, which has the required orientation.
3. The integrand against this vector area is $3$. The parameter triangle has area $1/2$, so the flux is $3/2$.

</details>
