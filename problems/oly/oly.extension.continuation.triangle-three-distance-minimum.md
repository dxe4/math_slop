# Minimize three squared distances simultaneously

*Medium · [Original olympiad-style problems](index.md)*

For $A=(0,0)$, $B=(6,0)$, $C=(0,3)$ and a point $P$ anywhere in the Euclidean plane, find the minimum of $PA^2+PB^2+PC^2$.

```answer
{"answer":{"kind":"integer","expected":"30","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

The average of the three vertex vectors is $G=(2,1)$. Expand around $G$.

</details>

<details>
<summary>Hint 2</summary>

The cross terms vanish because $(A-G)+(B-G)+(C-G)=0$.

</details>

<details>
<summary>Worked solution</summary>

The centroid separates the varying part of the sum from a fixed positive constant.

1. Write $P=G+u$ and each vertex as $G+v_i$. Then $\sum|u-v_i|^2=3|u|^2+\sum|v_i|^2-2u\cdot\sum v_i$.
2. The last sum is zero. The three fixed squared norms are $5,17,8$, totaling $30$.
3. Thus the expression is $30+3PG^2\ge30$. Equality is attained uniquely at $P=G=(2,1)$, which is allowed by the unrestricted planar domain.

</details>
