# Choose a harmonic parameter

*Easy · [Complex analysis problems](index.md)*

Find the real $a$ for which $u(x,y)=x^2+ay^2$ is harmonic on the plane.

```answer
{"answer":{"kind":"integer","expected":-1,"checker_scope":"Exact requested complex value, polynomial, coordinate list or count only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Harmonicity requires a vanishing Laplacian.

</details>

<details>
<summary>Hint 2</summary>

Compute the two constant second derivatives and solve their sum condition.

</details>

<details>
<summary>Worked solution</summary>

The harmonic condition is one exact coefficient equation.

1. The second derivatives are $u_{xx}=2$ and $u_{yy}=2a$.
2. Harmonicity requires $2+2a=0$.
3. Thus $a=-1$, which makes the Laplacian vanish everywhere.

</details>
