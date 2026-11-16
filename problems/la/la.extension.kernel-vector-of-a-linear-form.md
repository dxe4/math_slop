# Normalize a vector in a functional kernel

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. For $f(x,y,z)=x-2y$, find the vector in $\ker f$ with $y=1$ and $z=0$.

```answer
{"answer":{"kind":"vector","expected":["2","1","0"],"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The kernel condition is one linear equation.

</details>

<details>
<summary>Hint 2</summary>

Insert the two prescribed coordinates before solving the remaining one.

</details>

<details>
<summary>Worked solution</summary>

A linear functional defines a hyperplane, and normalization picks a vector.

1. The kernel equation is $x-2y=0$.
2. The normalization gives $y=1$ and $z=0$, hence $x=2$.
3. The resulting vector $(2,1,0)$ satisfies all three conditions.

</details>
