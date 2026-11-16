# Divide using a conjugate

*Medium · [Complex analysis problems](index.md)*

Compute $(3+4i)/(1-2i)$ in $a+bi$ form.

```answer
{"answer":{"kind":"complex","expected":"-1+2i","checker_scope":"Exact requested complex value, polynomial, coordinate list or count only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Multiply numerator and denominator by the conjugate of the denominator.

</details>

<details>
<summary>Hint 2</summary>

The denominator then becomes a positive real squared modulus.

</details>

<details>
<summary>Worked solution</summary>

Conjugation removes the imaginary part from the denominator.

1. Multiply by $(1+2i)/(1+2i)$; the denominator is $1+4=5$.
2. The numerator is $(3+4i)(1+2i)=-5+10i$.
3. Dividing by $5$ gives $-1+2i$.

</details>
