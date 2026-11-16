# Construct a normalized harmonic conjugate

*Hard · [Complex analysis problems](index.md)*

Let $u(x,y)=x^3-3xy^2$. Find the harmonic conjugate $v$ on the plane for which $u+iv$ is holomorphic and $v(0,0)=0$, then enter the polynomial $p(x)=v(1,x)$ with no excluded real inputs.

```answer
{"answer":{"kind":"expression","expected":"3*x-x^3","domain":{"variable":"x","excluded":[]},"checker_scope":"Exact requested complex value, polynomial, set or normalized contour value only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Integrate one Cauchy-Riemann equation, keeping the possible function of the other coordinate.

</details>

<details>
<summary>Hint 2</summary>

Use the second equation and the normalization to remove that freedom before restricting to the stated line.

</details>

<details>
<summary>Worked solution</summary>

The two Cauchy-Riemann equations determine the conjugate up to a constant.

1. The equation $v_y=u_x=3x^2-3y^2$ gives $v(x,y)=3x^2y-y^3+C(x)$.
2. The other equation is $v_x=-u_y=6xy$. Thus $C^{\prime}(x)=0$, so $C$ is constant.
3. The normalization at $(0,0)$ makes this constant zero.
4. Consequently $v(1,x)=3x-x^3$, the requested everywhere-defined real polynomial.

</details>
