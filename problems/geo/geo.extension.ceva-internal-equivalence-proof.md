# Prove the internal Ceva equivalence

*Hard · [Geometry and trigonometry problems](index.md)*

In nondegenerate triangle $ABC$, points $D,E,F$ lie strictly inside $BC,CA,AB$. Prove $AD,BE,CF$ concur if and only if $(BD/DC)(CE/EA)(AF/FB)=1$. Include a finite intersection and all converse conditions.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

An affine normalization sets $A=(0,0)$, $B=(1,0)$, $C=(0,1)$ without changing directed side ratios or concurrence.

</details>

<details>
<summary>Hint 2</summary>

Write the three positive ratios as $r,s,t$, express the side points, and solve the first two cevian equations.

</details>

<details>
<summary>Model proof</summary>

Turn both directions into the same exact incidence equation.

1. After the affine normalization put $r=BD/DC$, $s=CE/EA$, $t=AF/FB$, all positive. Then $D=(1/(1+r),r/(1+r))$, $E=(0,1/(1+s))$, $F=(t/(1+t),0)$.
2. The first two cevians are $y=rx$ and $y=(1-x)/(1+s)$. Their unique intersection has $x=1/L$, $y=r/L$, where $L=1+r+rs>0$.
3. The third cevian has equation $((1+t)/t)x+y=1$. Substitution gives $((1+t)/t+r)/L=1$.
4. Because $t,L>0$, this is equivalent to $1/t=rs$, hence to $rst=1$. Every manipulation is reversible.
5. Thus concurrence implies the product condition and the product condition puts the finite intersection of the first two lines on the third. The intersection is interior because $x,y>0$ and $x+y=(1+r)/L<1$.

**Self-assessment rubric**

- Preserve incidence and side ratios under a nondegenerate normalization.
- Express all three internal division points with correct ratio directions.
- Find the finite intersection and impose the third line.
- Prove both directions with all positive denominator conditions.

</details>
