# Use modulus and argument in a power

*Medium · [Complex analysis problems](index.md)*

A complex number $z$ has modulus $2$ and argument $\pi/6$ modulo $2\pi$. Find $z^3$ in $a+bi$ form.

```answer
{"answer":{"kind":"complex","expected":"8i","checker_scope":"Exact requested complex value, polynomial, coordinate list or count only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

A power raises the modulus and multiplies the argument.

</details>

<details>
<summary>Hint 2</summary>

Evaluate the trigonometric values at the resulting angle.

</details>

<details>
<summary>Worked solution</summary>

De Moivre converts the polar power into an exact coordinate value.

1. The cubed modulus is $2^3=8$.
2. The cubed argument is $3\pi/6=\pi/2$ modulo $2\pi$.
3. Thus $z^3=8(\cos(\pi/2)+i\sin(\pi/2))=8i$.

</details>
