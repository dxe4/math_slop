# Count a Frobenius fixed set

*Hard · [Abstract algebra problems](index.md)*

How many elements $x$ of the field $\mathbb F_{16}$ satisfy $x^4=x$?

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Exact stated finite group, polynomial or field answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Separate zero from nonzero solutions.

</details>

<details>
<summary>Hint 2</summary>

Use the cyclic structure of the multiplicative group to count solutions of the remaining power equation.

</details>

<details>
<summary>Worked solution</summary>

Convert the nonzero equation into a congruence on exponents of a multiplicative generator.

1. Zero is one solution. For $x\ne0$, the equation is equivalent to $x^3=1$.
2. The multiplicative group of a finite field is cyclic; here its order is $15$. Write $x=g^k$ for $0\le k<15$.
3. Then $x^3=1$ precisely when $15\mid3k$, or $5\mid k$. The three exponent classes are $0,5,10$.
4. Adding the zero solution gives $3+1=4$ solutions.

</details>
