# Find annihilators after intersecting subspaces

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. Let $U=\operatorname{span}(e_1,e_2)$ and $W=\operatorname{span}(e_2,e_3)$ in $\mathbb R^4$. Return a matrix whose rows, in increasing coordinate-index order, are the coordinate covectors forming the standard basis of $(U\cap W)^0$. Here $X^0$ means all linear functionals vanishing on $X$.

```answer
{"answer":{"kind":"matrix","expected":[["1","0","0","0"],["0","0","1","0"],["0","0","0","1"]],"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded.","rows":3,"columns":4}}
```

<details>
<summary>Hint 1</summary>

Find the common coordinate direction of the two subspaces.

</details>

<details>
<summary>Hint 2</summary>

A functional annihilates it exactly when the corresponding coefficient is zero.

</details>

<details>
<summary>Worked solution</summary>

Intersect first and then impose the dual vanishing condition.

1. The subspaces intersect in $\operatorname{span}(e_2)$.
2. A covector $(a,b,c,d)$ vanishes there exactly when $b=0$.
3. The free coordinate covectors are $e_1^*,e_3^*,e_4^*$, giving the three rows in the prescribed order.

</details>
