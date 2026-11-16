# Residue from an exponential series

*Easy · [Complex analysis problems](index.md)*

Find the residue of $e^z/z^2$ at $z=0$.

```answer
{"answer":{"kind":"integer","expected":1,"checker_scope":"Exact requested complex value, polynomial, set or normalized contour value only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use the exponential Taylor series near the pole.

</details>

<details>
<summary>Hint 2</summary>

Identify which numerator power becomes the inverse first power after division.

</details>

<details>
<summary>Worked solution</summary>

Only one Taylor coefficient contributes to the residue.

1. Near zero, $e^z=1+z+z^2/2+\cdots$.
2. Dividing by $z^2$ gives $z^{-2}+z^{-1}+1/2+\cdots$.
3. The residue is $1$.

</details>
