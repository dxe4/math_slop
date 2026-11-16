# Write a finite Taylor polynomial

*Easy · [Complex analysis problems](index.md)*

Find the degree-three Taylor polynomial at zero for $f(z)=1/(1-z)$. Enter the polynomial $p(x)$ in a real variable $x$; this finite polynomial has no excluded inputs.

```answer
{"answer":{"kind":"expression","expected":"1+x+x^2+x^3","domain":{"variable":"x","excluded":[]},"checker_scope":"Exact requested complex value, polynomial, coefficient, radius or domain only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use the geometric Taylor expansion near the center.

</details>

<details>
<summary>Hint 2</summary>

Retain only terms up to the specified degree.

</details>

<details>
<summary>Worked solution</summary>

A Taylor polynomial is the finite initial part of the local series.

1. Near zero, $1/(1-z)=1+z+z^2+z^3+\cdots$.
2. The degree-three part is $1+z+z^2+z^3$.
3. Thus $p(x)=1+x+x^2+x^3$, an everywhere-defined polynomial.

</details>
