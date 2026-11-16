# Multiply two complex numbers

*Easy · [Complex analysis problems](index.md)*

Compute $(1+2i)(3-i)$ in $a+bi$ form.

```answer
{"answer":{"kind":"complex","expected":"5+5i","checker_scope":"Exact requested complex value, polynomial, coordinate list or count only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Expand all four products before collecting components.

</details>

<details>
<summary>Hint 2</summary>

Use the defining relation for the square of the imaginary unit.

</details>

<details>
<summary>Worked solution</summary>

Ordinary distributivity and the imaginary-unit relation determine the product.

1. Expansion gives $3-i+6i-2i^2$.
2. Since $i^2=-1$, the last term contributes $2$ to the real part.
3. The result is $5+5i$.

</details>
