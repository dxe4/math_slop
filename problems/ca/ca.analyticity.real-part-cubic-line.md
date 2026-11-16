# Restrict the real part to a horizontal line

*Medium · [Complex analysis problems](index.md)*

For real $x$, find $\operatorname{Re}((x+i)^3)$ as a polynomial in $x$, with no excluded inputs.

```answer
{"answer":{"kind":"expression","expected":"x^3-3*x","domain":{"variable":"x","excluded":[]},"checker_scope":"Exact requested complex value, polynomial, coordinate list or count only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Expand the cube before separating real and imaginary contributions.

</details>

<details>
<summary>Hint 2</summary>

Even powers of the imaginary unit contribute to the real part.

</details>

<details>
<summary>Worked solution</summary>

Polynomial expansion gives the real and imaginary parts along the line.

1. $(x+i)^3=x^3+3x^2i+3xi^2+i^3$.
2. This is $(x^3-3x)+i(3x^2-1)$.
3. The real part is $x^3-3x$.

</details>
