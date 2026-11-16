# Use a simplex coordinate moment for flux

*Hard · [Multivariable calculus problems](index.md)*

Let $S=\{(x,y,z):x,y,z\geq0,\ x+y+z\leq1\}$ and $F=(x^2,xy,xz)$. Compute total outward flux through the closed boundary $\partial S$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":6},"checker_scope":"Exact requested integral value only; orientation and theorem hypotheses are explained in the model solution, not automatically certified by the scalar verdict."}}
```

<details>
<summary>Hint 1</summary>

Compute all three terms in the divergence.

</details>

<details>
<summary>Hint 2</summary>

The fixed-$x$ cross-section of the simplex has area $(1-x)^2/2$.

</details>

<details>
<summary>Worked solution</summary>

The divergence theorem reduces the flux to a weighted simplex cross-section integral.

1. The polynomial field is smooth, and its divergence is $2x+x+x=4x$.
2. At fixed $x$, the cross-section is a triangle of area $(1-x)^2/2$. Thus flux is $2\int_0^1x(1-x)^2\,dx$.
3. Evaluating gives $2(1/2-2/3+1/4)=1/6$.

</details>
