# Find a dual functional for a nonorthogonal basis

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. For the ordered basis $B=((1,1),(1,2))$, find the coefficients $[a,b]$ of its first dual functional $f_1(x,y)=ax+by$.

```answer
{"answer":{"kind":"vector","expected":["2","-1"],"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The first dual functional has values one and zero on the first and second basis vectors.

</details>

<details>
<summary>Hint 2</summary>

Subtract those normalization equations before solving.

</details>

<details>
<summary>Worked solution</summary>

Duality uses basis evaluation, not an orthogonal projection formula.

1. The conditions are $a+b=1$ and $a+2b=0$.
2. Subtracting gives $b=-1$, followed by $a=2$.
3. Thus $f_1(x,y)=2x-y$, and evaluation on the two basis vectors verifies the defining values.

</details>
