# Three circle-pair centers on one line

*Hard · [Original olympiad-style problems](index.md)*

Three circles have positive pairwise distinct radii $r_1,r_2,r_3$ and noncollinear centers $O_1,O_2,O_3$. For each pair, define $S_{ij}$ as the center of the positive homothety taking circle $i$ onto circle $j$. Prove that $S_{12},S_{23},S_{31}$ are collinear. No disjointness assumption is made.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Solve $O_j=S+(r_j/r_i)(O_i-S)$ for $S$.

</details>

<details>
<summary>Hint 2</summary>

The resulting point divides the center line externally. Multiply the three directed ratios and use Menelaus.

</details>

<details>
<summary>Model proof</summary>

External division by the radii gives a telescoping product.

1. A positive homothety taking radii $r_i$ to $r_j$ has scale $r_j/r_i$. Its center is uniquely $S_{ij}=(r_iO_j-r_jO_i)/(r_i-r_j)$, finite because the radii are different. The same formula applies even when the circles intersect or one contains another.
2. On line $O_iO_j$, the directed segment ratio is $O_iS_{ij}/(S_{ij}O_j)=-r_i/r_j$. The negative sign expresses external division; neither denominator vanishes since radii are positive.
3. The product of the three ratios for sides $O_1O_2,O_2O_3,O_3O_1$ is $(-r_1/r_2)(-r_2/r_3)(-r_3/r_1)=-1$.
4. Converse directed Menelaus in the nondegenerate center triangle proves collinearity. Equal radii would require a parallel or infinite-center formulation and have deliberately been excluded.

**Self-assessment rubric**

- Solve the center equation with the positive radius scale.
- Compute the external division ratio with its minus sign.
- Multiply the three ratios and apply converse Menelaus.
- Explain why circle intersection is harmless and equal radii are excluded.

</details>
