# Six cyclic points and three collinear intersections

*Hard · [Original olympiad-style problems](index.md)*

Six distinct points $A,B,C,D,E,F$ lie on one circle. Suppose the lines $AB,CD,EF$ form a nondegenerate triangle, with no vertex of that triangle among the six points. Assume $X=AB\cap DE$, $Y=BC\cap EF$, $Z=CD\cap FA$ are finite. Prove $X,Y,Z$ are collinear. You may use directed Menelaus and signed power of a point.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Put $U=AB\cap CD$, $V=CD\cap EF$, $W=EF\cap AB$. Apply Menelaus to the three lines $DEX,BCY,FAZ$ in triangle $UVW$.

</details>

<details>
<summary>Hint 2</summary>

On multiplying the three identities, group the extra factors into powers at $U,V,W$.

</details>

<details>
<summary>Model proof</summary>

Three secant power identities cancel every factor other than the desired Menelaus product.

1. Use directed segment ratios on the sides of $UVW$. Menelaus on $DEX$ gives $(UD/DV)(VE/EW)(WX/XU)=-1$. On $BCY$ it gives $(UC/CV)(VY/YW)(WB/BU)=-1$. On $FAZ$ it gives $(UZ/ZV)(VF/FW)(WA/AU)=-1$. All denominators are nonzero under the hypotheses.
2. Multiplication gives minus one as the product of the desired factor $(UZ/ZV)(VY/YW)(WX/XU)$ and the extra factor $[UD\cdot UC/(AU\cdot BU)][VE\cdot VF/(CV\cdot DV)][WA\cdot WB/(EW\cdot FW)]$.
3. Power at $U$ says $UC\cdot UD=UA\cdot UB=AU\cdot BU$; at $V$ it gives $VE\cdot VF=VC\cdot VD=CV\cdot DV$; at $W$ it gives $WA\cdot WB=WE\cdot WF=EW\cdot FW$. Thus the extra factor is one.
4. The desired product is therefore $-1$. Converse directed Menelaus proves the three points on the three side lines are collinear. The specified finite nondegenerate configuration avoids projective points at infinity.

**Self-assessment rubric**

- Write the three directed identities on the correct reference triangle.
- Group all six extraneous ratios into the three secant-power quotients.
- Cancel the quotients without discarding directed signs.
- Invoke converse Menelaus for the actual three intersections.

</details>
