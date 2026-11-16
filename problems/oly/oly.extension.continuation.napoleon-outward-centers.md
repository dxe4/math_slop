# An equilateral triangle built from three external centers

*Hard · [Original olympiad-style problems](index.md)*

On the sides of any nondegenerate triangle $ABC$, construct equilateral triangles externally. Prove that their centers form an equilateral triangle and that the centroid of those three centers is the centroid of $ABC$. You may identify the plane with $\mathbb C$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Orient $A,B,C$ counterclockwise and let $J$ be counterclockwise rotation by $90^\circ$. The external center on directed side $AB$ is $(A+B)/2-J(B-A)/(2\sqrt3)$.

</details>

<details>
<summary>Hint 2</summary>

For successive center differences, show that one is the $120^\circ$ rotation of the previous one.

</details>

<details>
<summary>Model proof</summary>

The external center is a fixed affine expression in the two endpoints, so differences and sums can be controlled exactly.

1. Write vertex complex numbers $a,b,c$ in counterclockwise order and put $t=i/\sqrt3$. The external centers are $u=((1+t)a+(1-t)b)/2$, $v=((1+t)b+(1-t)c)/2$, $w=((1+t)c+(1-t)a)/2$. The minus rotation is outward because the triangle interior is to the left of each directed side.
2. Let $\omega=(-1+i\sqrt3)/2$. Direct coefficient comparison, using $\omega(1+t)=-(1-t)$ and $\omega(1-t)=2t$, gives $w-v=\omega(v-u)$. Thus successive sides have equal magnitude and meet at the equilateral turning angle.
3. If $v=u$, the formula for $v-u$ gives $(1-t)(c-a)+2t(b-a)=0$, hence $(c-a)/(b-a)=-2t/(1-t)=(1-i\sqrt3)/2$. Its imaginary part is negative, contrary to counterclockwise orientation. Therefore the center triangle is nondegenerate.
4. Finally $u+v+w=a+b+c$, because every vertex has total coefficient one. Dividing by three proves the centroid statement.

**Self-assessment rubric**

- Set a consistent orientation and derive the external center formula.
- Verify the successive-difference rotation with the actual complex coefficients.
- Show the resulting equilateral triangle has positive side length.
- Sum the three center formulas to identify the centroid.

</details>
