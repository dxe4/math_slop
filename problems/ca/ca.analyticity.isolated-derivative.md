# Compute a derivative at one point directly

*Medium · [Complex analysis problems](index.md)*

For $f(z)=z^2\overline z$, compute the complex derivative $f^{\prime}(0)$ from the difference quotient.

```answer
{"answer":{"kind":"complex","expected":"0","checker_scope":"Exact requested complex value, polynomial, coordinate list or count only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use the definition at the specified point rather than assuming a neighborhood is holomorphic.

</details>

<details>
<summary>Hint 2</summary>

For a nonzero increment, simplify the quotient into a real squared modulus.

</details>

<details>
<summary>Worked solution</summary>

The quotient has a direction-independent limit despite the conjugate in the function.

1. $f(0)=0$. For $h\ne0$, $(f(h)-f(0))/h=h\overline h=|h|^2$.
2. This tends to zero as the complex increment approaches zero from any direction.
3. Thus $f^{\prime}(0)=0$. This pointwise statement alone does not assert holomorphy on a neighborhood.

</details>
