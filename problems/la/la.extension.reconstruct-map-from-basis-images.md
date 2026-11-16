# Recover a map from images of a nonstandard basis

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Vectors are columns and all entries are dimensionless. A linear map on $\mathbb R^2$ satisfies $T(1,1)=(2,0)$ and $T(1,-1)=(0,4)$. Find its standard matrix.

```answer
{"answer":{"kind":"matrix","expected":[["1","1"],["2","-2"]],"checker_scope":"Only the requested exact finite answer is checked; the mathematical derivation is not automatically graded.","rows":2,"columns":2}}
```

<details>
<summary>Hint 1</summary>

Express the two standard coordinate vectors using the given input basis.

</details>

<details>
<summary>Hint 2</summary>

Add and subtract the supplied image equations before dividing by two.

</details>

<details>
<summary>Worked solution</summary>

Recover standard columns from known basis images.

1. The standard vectors are $e_1=((1,1)+(1,-1))/2$ and $e_2=((1,1)-(1,-1))/2$.
2. Linearity gives $T(e_1)=(1,2)$ and $T(e_2)=(1,-2)$.
3. These images form the columns, so the standard matrix is $\begin{pmatrix}1&1\\2&-2\end{pmatrix}$.

</details>
