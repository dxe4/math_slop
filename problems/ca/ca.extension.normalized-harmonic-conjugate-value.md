# Fix the additive ambiguity of a harmonic conjugate

*Medium · [Complex analysis problems](index.md)*

On the complex plane let $u(x,y)=x^3-3xy^2+2x$. Let v be its harmonic conjugate with v(0,0)=0, so u+i\*v is holomorphic. Find v(1,2).

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Exact requested invariant or sharp bound only; the analytic justification remains a worked model rather than an automatically checked proof."}}
```

<details>
<summary>Hint 1</summary>

Use v\_y=u\_x and v\_x=-u\_y.

</details>

<details>
<summary>Hint 2</summary>

The normalization determines the integration constant.

</details>

<details>
<summary>Worked solution</summary>

The Cauchy-Riemann equations recover the imaginary polynomial.

1. The equations require v\_y=3x^2-3y^2+2 and v\_x=6xy.
2. Integrating gives v=3x^2\*y-y^3+2y+C, and the normalization gives C=0.
3. At (1,2), the value is 6-8+4=2.

</details>
