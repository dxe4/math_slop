# Find both attainable intersection bounds

*Medium · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. For subspaces $U,W\subset\mathbb R^6$ with dimensions four and five, return \[minimum, maximum\] possible values of $\dim(U\cap W)$.

```answer
{"answer":{"kind":"vector","expected":["3","4"],"checker_scope":"Only the requested exact finite answer is checked; explanatory reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use the dimension formula for the sum, whose dimension is at most six.

</details>

<details>
<summary>Hint 2</summary>

For attainment, choose coordinate subspaces with minimal overlap, then a nested pair.

</details>

<details>
<summary>Worked solution</summary>

Prove bounds and realize both rather than only solving an inequality.

1. The dimension formula gives $\dim(U\cap W)=9-\dim(U+W)\ge3$, while inclusion in $U$ gives an upper bound four.
2. Take $U=\operatorname{span}(e_1,e_2,e_3,e_4)$ and $W=\operatorname{span}(e_2,e_3,e_4,e_5,e_6)$ to attain three.
3. Taking $W$ to contain that same $U$ and one further independent vector attains four. Thus the ordered bounds are $[3,4]$.

</details>
