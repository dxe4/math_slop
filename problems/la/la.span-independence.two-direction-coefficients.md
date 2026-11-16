# Resolve a vector into two directions

*Easy · [Linear algebra problems](index.md)*

Let $u=(1,1)$ and $v=(1,-1)$. Find $[a,b]$ such that $(5,1)=au+bv$.

```answer
{"answer":{"kind":"vector","expected":[3,2],"checker_scope":"Exact stated finite-dimensional answer only; optional personal reasoning is not graded."}}
```

<details>
<summary>Hint 1</summary>

Equate the two coordinates of the claimed linear combination.

</details>

<details>
<summary>Hint 2</summary>

Adding and subtracting the coordinate equations isolates the two coefficients.

</details>

<details>
<summary>Worked solution</summary>

Coordinates turn a span question into a two-equation system.

1. The first coordinate gives $a+b=5$; the second gives $a-b=1$.
2. Adding yields $2a=6$, so $a=3$, and then $b=2$.
3. Indeed $3(1,1)+2(1,-1)=(5,1)$. The coefficient vector is $[3,2]$.

</details>
