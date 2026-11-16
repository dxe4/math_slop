# Read the second dual coordinate

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. For $B=((1,0),(1,1))$, the dual functional $f_2$ satisfies $f_2(1,0)=0$ and $f_2(1,1)=1$. Write $f_2(x,y)=ax+by$ and return $[a,b]$.

```answer
{"answer":{"kind":"vector","expected":["0","1"],"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use the first normalization to determine the coefficient of $x$.

</details>

<details>
<summary>Hint 2</summary>

Then insert the second basis vector.

</details>

<details>
<summary>Worked solution</summary>

Solve the defining dual normalizations rather than taking dot products with basis vectors.

1. The first equation gives $a=0$.
2. The second becomes $a+b=1$, so $b=1$.
3. Thus $f_2(x,y)=y$ and its coefficient vector is $[0,1]$.

</details>
