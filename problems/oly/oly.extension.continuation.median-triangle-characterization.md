# Which triples can be medians?

*Hard · [Original olympiad-style problems](index.md)*

Prove that positive numbers $u,v,w$ are the three median lengths of a nondegenerate triangle if and only if they satisfy the strict triangle inequalities. When they do, prove that the area of the triangle with side lengths $u,v,w$ is $3/4$ of the original triangle\'s area.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

If $G$ is the centroid, the vectors $A-G,B-G,C-G$ sum to zero and have lengths $2u/3,2v/3,2w/3$.

</details>

<details>
<summary>Hint 2</summary>

Conversely use three nonparallel vectors of those lengths summing to zero as the vertex vectors. Compare determinants.

</details>

<details>
<summary>Model proof</summary>

A closed vector triangle of centroid vectors provides both directions and the area factor.

1. In an original triangle with centroid at the origin, put $p=A-G,q=B-G,r=C-G$. Then $p+q+r=0$, and the three lengths are $2u/3,2v/3,2w/3$. Noncollinearity makes their closed vector triangle nondegenerate, so the strict triangle inequalities hold.
2. Conversely construct a nondegenerate vector triangle with side vectors $p,q,r$ summing to zero and lengths $2u/3,2v/3,2w/3$. Regard their tips, measured from a common origin, as vertices $A,B,C$. Their centroid is the origin. They cannot be collinear: a line containing all three tips would contain their average and hence the origin, contrary to nonparallelity.
3. The midpoint opposite $A=p$ is $(q+r)/2=-p/2$, so its median has length $3|p|/2=u$. The other two lengths are similarly $v,w$.
4. The original area is $|\det(q-p,r-p)|/2=3|\det(p,q)|/2$, using $r=-p-q$. The triangle formed by $p,q,r$ as edge vectors has area $|\det(p,q)|/2$, one third as large. Scaling that vector triangle by $3/2$ gives side lengths $u,v,w$ and multiplies area by $9/4$, giving $3/4$ of the original.

**Self-assessment rubric**

- Close the three scaled median vectors and explain strictness.
- Build noncollinear vertices with the prescribed medians, checking their centroid.
- Compute both determinant areas and the final scaling factor.

</details>
