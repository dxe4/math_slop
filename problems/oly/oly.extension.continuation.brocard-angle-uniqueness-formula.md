# A cyclic equal-angle condition determines its angle

*Hard · [Original olympiad-style problems](index.md)*

An interior point $P$ of triangle $ABC$ satisfies $\angle PAB=\angle PBC=\angle PCA=\omega$. Prove $\cot\omega=\cot A+\cot B+\cot C=(a^2+b^2+c^2)/(4\Delta)$. Conclude that at most one angle $\omega$ can occur. Existence or uniqueness of the point itself is not requested.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Apply trigonometric Ceva to the three concurrent cevians, giving $\prod\sin(A-\omega)=\sin^3\omega$.

</details>

<details>
<summary>Hint 2</summary>

Set $t=\cot\omega$, divide by the positive product of $\sin A$ and $\sin\omega$, and use $\cot A\cot B+\cot B\cot C+\cot C\cot A=1$.

</details>

<details>
<summary>Model proof</summary>

The trigonometric concurrency equation factors as a linear term times a strictly positive quadratic.

1. Interior location gives $0<\omega<\min(A,B,C)\le60^\circ$. Sine-area ratios for the three traces multiply to trigonometric Ceva, so $\sin(A-\omega)\sin(B-\omega)\sin(C-\omega)=\sin^3\omega$.
2. Put $u=\cot A,v=\cot B,w=\cot C$ and $t=\cot\omega$. Division gives $(t-u)(t-v)(t-w)=1/(\sin A\sin B\sin C)$. From $A+B+C=180^\circ$, $uv+vw+wu=1$, and the cosine addition formula gives $u+v+w=uvw+1/(\sin A\sin B\sin C)$.
3. Writing $S=u+v+w$, the equation becomes $t^3-St^2+t-S=0$, or $(t-S)(t^2+1)=0$. Hence $t=S$. The cosine rule and $\Delta=bc\sin A/2$ give $\cot A=(b^2+c^2-a^2)/(4\Delta)$, whose cyclic sum is the displayed positive expression.
4. Cotangent is strictly decreasing on $(0,60^\circ)$, so the angle is uniquely determined if such a point exists. This does not assert the point\'s existence from a merely necessary concurrency equation.

**Self-assessment rubric**

- Derive the correct sine product from the three actual equal angles.
- Obtain both symmetric cotangent identities with their signs.
- Factor the cubic and exclude the nonreal quadratic roots.
- Convert the sum to the side/area formula and limit the uniqueness claim to the angle.

</details>
