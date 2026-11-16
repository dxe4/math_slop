# A distance product over a whole disk

*Hard · [Original olympiad-style problems](index.md)*

Let $A_0,\ldots,A_{n-1}$ be the vertices of a regular $n$-gon on the unit circle, with $n\ge3$. Find and prove the maximum of $\prod_{j=0}^{n-1}PA_j$ for $P$ in the closed unit disk, and determine every equality point. Complex polynomial factorization may be used.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Rotate the configuration so that its vertices are the roots of $z^n-1$.

</details>

<details>
<summary>Hint 2</summary>

The product is $|z^n-1|\le |z|^n+1$. Track both equality conditions.

</details>

<details>
<summary>Model proof</summary>

The geometric product is the modulus of a single polynomial.

1. After a rotation, assign vertex coordinates $\zeta^j$ with $\zeta=e^{2\pi i/n}$. Factorization gives $\prod(z-\zeta^j)=z^n-1$, so the product of Euclidean distances is $|z^n-1|$.
2. For $|z|\le1$, the triangle inequality yields $|z^n-1|\le|z|^n+1\le2$. Equality in the second bound requires $|z|=1$.
3. For such $z$, equality in the first bound requires $z^n$ to point opposite to $1$, hence $z^n=-1$. These are exactly the $n$ arc midpoints between consecutive polygon vertices.
4. Each of those points is allowed and gives value $|-1-1|=2$. Thus the maximum is $2$, attained exactly at those midpoints and nowhere in the open disk.

**Self-assessment rubric**

- Translate every distance into the modulus of the root factorization.
- Apply both inequalities for the full closed disk.
- Derive modulus one and the equation z to the n equals minus one.
- Identify and verify all n arc-midpoint equality points.

</details>
