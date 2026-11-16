# Realize every interior area triple

*Hard · [Geometry and trigonometry problems](index.md)*

For a fixed nondegenerate triangle $ABC$ of area $\Delta$, prove that each positive triple $(u,v,w)$ with $u+v+w=1$ is realized by exactly one interior point $P$ satisfying $[PBC]=u\Delta$, $[PCA]=v\Delta$, $[PAB]=w\Delta$. Give a construction or coordinate formula and prove both existence and uniqueness.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

Try $p=ua+vb+wc$ in vector coordinates.

</details>

<details>
<summary>Hint 2</summary>

The signed determinant giving each subtriangle area is affine in $p$; evaluate it at the three vertices.

</details>

<details>
<summary>Model proof</summary>

Identify area fractions with barycentric coefficients.

1. Because $u,v,w>0$ and sum to one, $p=ua+vb+wc$ is a strict convex combination of the triangle vertices and lies in its interior.
2. The signed doubled area of $PBC$ is affine in $p$. At $p=a$ it equals the signed doubled area of $ABC$, and at $p=b,c$ it is zero. Thus at the stated $p$ it is $u$ times that area.
3. The two cyclic determinant calculations similarly give fractions $v,w$. Interior placement makes all the signed orientations agree, so these are also the ordinary positive area fractions.
4. For uniqueness, write any point in affine coordinates $p=a+\lambda(b-a)+\mu(c-a)$. The independent vectors $b-a,c-a$ make these coordinates unique.
5. The determinant area fractions then are $(1-\lambda-\mu,\lambda,\mu)$. Requiring $(u,v,w)$ forces $\lambda=v$, $\mu=w$, and hence exactly the point constructed above.

**Self-assessment rubric**

- Construct the point using a positive affine combination and justify interior placement.
- Compute all three signed area fractions and their ordinary-area interpretation.
- Use affine independence to prove uniqueness.
- Retain positivity and the sum-one constraint throughout.

</details>
