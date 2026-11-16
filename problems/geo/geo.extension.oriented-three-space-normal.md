# Find an oriented plane normal

*Medium · [Geometry and trigonometry problems](index.md)*

In Euclidean three-space, compute the oriented normal $u\times v$ for $u=(1,0,1)$ and $v=(0,1,1)$. Enter $[x,y,z]$ using this order of the cross product.

```answer
{"answer":{"kind":"vector","expected":["-1","-1","1"],"checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

Expand the cross product by its signed $2$ by $2$ minors.

</details>

<details>
<summary>Hint 2</summary>

Reversing the vectors would reverse the sign, so retain $u\times v$.

</details>

<details>
<summary>Worked solution</summary>

Compute an oriented perpendicular vector.

1. The first component is $0\cdot1-1\cdot1=-1$.
2. The second is $1\cdot0-1\cdot1=-1$, and the third is $1\cdot1-0\cdot0=1$.
3. The vector $[-1,-1,1]$ has dot product zero with both inputs, with the prescribed cross-product orientation.

</details>
