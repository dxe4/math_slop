# Find the minimal polynomial degree of a tensor product

*Medium · [Linear algebra problems](index.md)*

Over $\mathbb C$, let $A=J_2(2)$ and $B=J_2(3)$ with unit superdiagonals. Find the degree of the minimal polynomial of $A\otimes B$. Preparation: polynomial functions of tensor Jordan blocks.

```answer
{"answer":{"kind":"integer","expected":3,"checker_scope":"Only the specified finite invariant or rational coordinate object is checked. Tensor and operator reasoning are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Write the product as $6I+3X+2Y+XY$ with commuting square-zero X,Y.

</details>

<details>
<summary>Hint 2</summary>

Square and cube its nilpotent correction, keeping the nonzero mixed tensor term.

</details>

<details>
<summary>Worked solution</summary>

Two nilpotent factors interact in the mixed term.

1. Set $X=N_2\otimes I$ and $Y=I\otimes N_2$. They commute, square to zero and have $XY\ne0$. The correction to $6I$ is $L=3X+2Y+XY$.
2. Its square is $L^2=12XY\ne0$ and its cube is zero, because every further term contains $X^2$ or $Y^2$.
3. The minimal polynomial is therefore $(t-6)^3$, of degree three. The tensor Jordan type is consequently one block of size three and one of size one.

</details>
