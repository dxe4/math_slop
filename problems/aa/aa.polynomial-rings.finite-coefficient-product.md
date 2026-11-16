# Multiply polynomials over a finite field

*Easy · [Abstract algebra problems](index.md)*

In $\mathbb F_5[x]$, compute $(x+2)(x+3)$. Enter the canonical coefficient vector $[c_0,c_1,c_2]$ for $c_0+c_1x+c_2x^2$, with each entry in $\{0,1,2,3,4\}$.

```answer
{"answer":{"kind":"vector","expected":[1,0,1],"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Expand the product before reducing its coefficients.

</details>

<details>
<summary>Hint 2</summary>

Reduce each coefficient modulo the characteristic independently.

</details>

<details>
<summary>Worked solution</summary>

Polynomial multiplication is ordinary expansion with coefficients reduced in the field.

1. The expanded product is $x^2+5x+6$.
2. In $\mathbb F_5$, the linear coefficient is $0$ and the constant coefficient is $1$.
3. The polynomial is $x^2+1$, giving the ordered coefficient vector $[1,0,1]$.

</details>
