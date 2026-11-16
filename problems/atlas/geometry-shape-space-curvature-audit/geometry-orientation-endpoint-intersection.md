# Audit an endpoint segment intersection

*Difficulty 4 of 5 · [Geometry from proof to curvature audit studio](index.md) · exercise 4 of 12*

Segments AB and CD have $A=(0,0)$, $B=(4,2)$, $C=(1,3)$, and $D=(2,1)$. Use orientation determinants to decide how they meet. State why an intersection API needs a boundary policy.

<details>
<summary>Hint 1</summary>

$orient(A,B,C)=10$ and $orient(A,B,D)=0$

</details>

<details>
<summary>Hint 2</summary>

Check D lies between A and B coordinatewise

</details>

<details>
<summary>Hint 3</summary>

Check C and B lie on opposite sides of line CD

</details>

<details>
<summary>Worked solution</summary>

$orient(A,B,C)=4\cdot 3-2\cdot 1=10$, while $orient(A,B,D)=4\cdot 1-2\cdot 2=0$, so D is collinear with AB. Its coordinates lie between A and B and indeed $D=A+(1/2)(B-A)$, so D lies on segment AB. For the other line, $orient(C,D,A)=-5$ and $orient(C,D,B)=5$, confirming AB crosses line CD at D. Thus the closed segments intersect exactly at endpoint D of CD and an interior point of AB. An API must say whether endpoint contact counts as intersection and whether it returns a point, Boolean, or richer contact classification; a strict-interior test would give a different Boolean by design.

**Answer.** They meet at $D=(2,1)$, an endpoint of CD and interior point of AB; endpoint inclusion must be part of the API contract.

</details>

*Tags: coordinate geometry, orientation predicate, segment intersection, boundary case*
