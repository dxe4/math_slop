# Read coordinates in a nonstandard basis

*Easy · [Linear algebra problems](index.md)*

For the ordered basis $B=((1,0),(1,1))$ of $\mathbb R^2$, find the coordinate vector $[(3,2)]_B$.

```answer
{"answer":{"kind":"vector","expected":[1,2],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

The entries of a coordinate vector are coefficients of basis vectors, not necessarily the original coordinates.

</details>

<details>
<summary>Hint 2</summary>

The second ordinary coordinate determines the coefficient of the second basis vector.

</details>

<details>
<summary>Worked solution</summary>

Expand the target vector in the given ordered basis.

1. Write $(3,2)=a(1,0)+b(1,1)=(a+b,b)$.
2. The second coordinate gives $b=2$, and the first then gives $a=1$.
3. Thus $[(3,2)]_B=[1,2]$.

</details>
