# Prove a sharp cotangent inequality even for obtuse triangles

*Hard · [Geometry and trigonometry problems](index.md)*

Prove that the angles $A,B,C$ of every nondegenerate triangle satisfy $\cot A+\cot B+\cot C\ge\sqrt3$, with equality exactly for equilateral triangles. Cover the case that one cotangent is negative.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

First show $\cot A\cot B+\cot B\cot C+\cot C\cot A=1$.

</details>

<details>
<summary>Hint 2</summary>

The sum of cotangents is positive because it equals $(a^2+b^2+c^2)/(4\Delta)$.

</details>

<details>
<summary>Model proof</summary>

Combine a symmetric identity with a separate sign argument.

1. Since $\sin A,\sin B,\sin C$ are positive, expand $\sin(A+B)=\sin C$ and $\cos(A+B)=-\cos C$. Dividing the resulting cosine relation by $\sin A\sin B$ gives $\cot A\cot B-1=-\cot C(\cot A+\cot B)$. Hence the pairwise-product sum is one.
2. Let $x,y,z$ be the three cotangents. Then $(x+y+z)^2-3(xy+yz+zx)=((x-y)^2+(y-z)^2+(z-x)^2)/2\ge0$. Thus the absolute value of their sum is at least $\sqrt3$.
3. To choose the sign, cosine law and $\Delta=bc\sin A/2$ give $\cot A=(b^2+c^2-a^2)/(4\Delta)$. Adding cyclically yields $(a^2+b^2+c^2)/(4\Delta)>0$.
4. The sum is therefore at least $\sqrt3$, without assuming all its terms are positive.
5. Equality in the squared-difference bound requires $x=y=z$. Cotangent is strictly decreasing on $(0,\pi)$, so $A=B=C=\pi/3$. Conversely those angles give equality.

**Self-assessment rubric**

- Derive the pairwise-product identity with valid sine divisions.
- Apply the squared-difference identity with the correct constant.
- Prove the sum positive instead of assuming acute angles.
- Establish exactly the equilateral equality case.

</details>
