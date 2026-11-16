# Find area between two curves

*Medium · [Multivariable calculus problems](index.md)*

Find the area of $D=\{(x,y):0\leq x\leq1,\ x^2\leq y\leq x\}$.

```answer
{"answer":{"kind":"rational","expected":{"numerator":1,"denominator":6},"checker_scope":"Exact requested value, vector or matrix only; a numerical answer does not automatically certify the accompanying extremum or integration argument."}}
```

<details>
<summary>Hint 1</summary>

Area is the double integral of the constant function one.

</details>

<details>
<summary>Hint 2</summary>

On the stated interval the upper curve is the line.

</details>

<details>
<summary>Worked solution</summary>

The area is the integral of vertical slice lengths.

1. For $0\leq x\leq1$, $x^2\leq x$, so the region is well specified.
2. Its area is $\int_0^1(x-x^2)\,dx$.
3. Evaluation gives $1/2-1/3=1/6$.

</details>
