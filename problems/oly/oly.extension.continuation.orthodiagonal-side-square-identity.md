# Eliminate the diagonal pieces of a quadrilateral

*Medium · [Original olympiad-style problems](index.md)*

A convex quadrilateral $ABCD$ has perpendicular diagonals. Its successive side lengths satisfy $AB=3$, $BC=4$, $CD=6$. Find $DA^2$. No cyclicity is assumed.

```answer
{"answer":{"kind":"integer","expected":"29","checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

Place the diagonal intersection at the origin and the diagonal lines on the coordinate axes.

</details>

<details>
<summary>Hint 2</summary>

Write the four side squares as sums of two positive squared coordinate distances.

</details>

<details>
<summary>Worked solution</summary>

Opposite side-square sums agree for any orthodiagonal convex quadrilateral.

1. Write $A=(p,0)$, $C=(-q,0)$, $B=(0,u)$, $D=(0,-v)$ with $p,q,u,v>0$. Then $AB^2=p^2+u^2$, $BC^2=q^2+u^2$, $CD^2=q^2+v^2$, $DA^2=p^2+v^2$.
2. Adding the first and third equations and comparing with the other two gives $AB^2+CD^2=BC^2+DA^2$. Thus $DA^2=9+36-16=29$.
3. The givens are realizable: take $p=2$, $u=\sqrt5$, $q=\sqrt{11}$, $v=5$. Then $AB^2=9$, $BC^2=16$, $CD^2=36$ and $DA^2=29$, and the four positive axis distances make a convex quadrilateral.

</details>
