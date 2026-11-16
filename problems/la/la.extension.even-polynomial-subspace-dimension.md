# Use parity to choose polynomial coefficients

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. Find the dimension of the subspace of $P_4(\mathbb R)$ defined by $p(-x)=p(x)$ for every real $x$.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Compare coefficients in the polynomial identity.

</details>

<details>
<summary>Hint 2</summary>

Odd powers change sign, while even powers do not.

</details>

<details>
<summary>Worked solution</summary>

Turn an identity at every input into coefficient restrictions.

1. Comparing coefficients forces the coefficients of $x$ and $x^3$ to be zero.
2. The constant, quadratic and quartic coefficients remain arbitrary.
3. The basis $(1,x^2,x^4)$ therefore gives dimension three.

</details>
