# Dependence through an exterior product

*Difficulty 4 of 5 · [Linear algebra as structure](index.md) · exercise 11 of 11*

Let $u=(1,0,1)$, $v=(0,1,1)$, and $w=(1,1,2)$. Without expanding a determinant, show $u\wedge v\wedge w=0$ and interpret the result.

<details>
<summary>Hint 1</summary>

Express $w$ using $u$ and $v$

</details>

<details>
<summary>Hint 2</summary>

Use multilinearity and alternating products

</details>

<details>
<summary>Worked solution</summary>

Since $w=u+v$, multilinearity gives $u\wedge v\wedge w=u\wedge v\wedge(u+v)=u\wedge v\wedge u+u\wedge v\wedge v$. Each term is zero because an alternating product vanishes when a vector is repeated. Thus the exterior product is zero, which is the coordinate-free certificate that $u,v,w$ are linearly dependent and span at most a plane.

**Answer.** $w=u+v$, so $u\wedge v\wedge w=0$; the three vectors are dependent.

</details>

*Tags: tensor, exterior algebra, dependence*
