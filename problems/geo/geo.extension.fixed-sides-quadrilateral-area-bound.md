# Prove the cyclic quadrilateral maximization bound

*Hard · [Geometry and trigonometry problems](index.md)*

A strictly convex quadrilateral has consecutive side lengths $a,b,c,d$, semiperimeter $s$ and area $K$. Prove $K^2\le(s-a)(s-b)(s-c)(s-d)$, with equality exactly when the quadrilateral is cyclic.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

Split along diagonal $AC$ and let the opposite angles at $B,D$ be $B,D$.

</details>

<details>
<summary>Hint 2</summary>

Use the two cosine laws to eliminate the common diagonal, then bound $\cos(B+D)$ below by $-1$.

</details>

<details>
<summary>Model proof</summary>

Combine both triangles before optimizing the opposite-angle sum.

1. The area relation is $2K=ab\sin B+cd\sin D$. Equality of the squared diagonal lengths gives $ab\cos B-cd\cos D=(a^2+b^2-c^2-d^2)/2=L$.
2. Consider the vector $(ab\cos B-cd\cos D,ab\sin B+cd\sin D)$. Its squared norm is $a^2b^2+c^2d^2-2abcd\cos(B+D)$, so $4K^2=a^2b^2+c^2d^2-2abcd\cos(B+D)-L^2$.
3. Since $\cos(B+D)\ge-1$, $4K^2\le(ab+cd)^2-L^2$. Factoring the right side gives $4(s-a)(s-b)(s-c)(s-d)$, so division by four proves the bound.
4. All side lengths are positive. Equality in the bound is therefore equivalent to $\cos(B+D)=-1$. Since strict convexity gives $0<B,D<\pi$, this means $B+D=\pi$.
5. The supplementary opposite-angle criterion is equivalent to cyclicity for a strictly convex quadrilateral, establishing both equality directions.

**Self-assessment rubric**

- Write both triangle relations with consistent side and angle labels.
- Eliminate the diagonal and compute the norm identity.
- Use the sharp cosine bound and correct semiperimeter factorization.
- Prove both directions of the cyclic equality condition.

</details>
