# Find the sharp parameter for global nonnegativity

*Medium · [Original Putnam-style training](index.md)*

Find the least real number a for which $x^4+ax^2+1\geq0$ for every real x.

```answer
{"answer":{"kind":"integer","expected":"-2","checker_scope":"Exact requested bounded value only; a correct numerical answer does not certify the full university-level argument or a contest result."}}
```

<details>
<summary>Hint 1</summary>

One convenient real input gives a necessary parameter bound.

</details>

<details>
<summary>Hint 2</summary>

Try expressing the polynomial at that bound as a square.

</details>

<details>
<summary>Worked solution</summary>

A necessary pointwise bound is sharp because the boundary polynomial is a square.

1. At x=1, the condition gives $a+2\geq0$, so a is at least -2.
2. At a=-2 the polynomial is $(x^2-1)^2$, nonnegative for all real x.
3. Therefore the least parameter is $-2$.

</details>
