# A polynomial space with one condition

*Easy · [Linear algebra problems](index.md)*

Let $V$ be the real vector space of polynomials of degree at most $4$ satisfying $p(0)=0$. Find $\dim V$.

```answer
{"answer":{"kind":"integer","expected":4,"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The value at zero is the constant coefficient.

</details>

<details>
<summary>Hint 2</summary>

List the monomials that remain available after that coefficient is removed.

</details>

<details>
<summary>Worked solution</summary>

A coefficient condition removes exactly the forbidden basis direction.

1. A polynomial of degree at most $4$ has the form $a_0+a_1x+a_2x^2+a_3x^3+a_4x^4$.
2. The condition $p(0)=0$ says $a_0=0$, leaving the basis $x,x^2,x^3,x^4$.
3. These four monomials are independent, so the dimension is $4$.

</details>
