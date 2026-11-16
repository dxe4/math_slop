# Raise a complex number by repeated squaring

*Medium · [Complex analysis problems](index.md)*

Find $(1+i)^8$ in $a+bi$ form.

```answer
{"answer":{"kind":"complex","expected":"16","checker_scope":"Exact requested complex value, polynomial, coordinate list or count only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Repeated squaring avoids a long binomial expansion.

</details>

<details>
<summary>Hint 2</summary>

Reduce each intermediate square using the imaginary-unit relation.

</details>

<details>
<summary>Worked solution</summary>

Three short squarings determine the eighth power.

1. $(1+i)^2=2i$.
2. The fourth power is $(2i)^2=-4$.
3. The eighth power is $(-4)^2=16$.

</details>
