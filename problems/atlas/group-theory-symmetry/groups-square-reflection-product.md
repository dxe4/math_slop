# A product of square symmetries

*Difficulty 3 of 5 · [Groups as symmetry and composition](index.md) · exercise 2 of 4*

Let $r$ rotate the plane $90^\circ$ counterclockwise and let $s$ reflect across the $x$-axis. Products act right to left. Find $sr(x,y)$, show $sr$ is a reflection, and determine its order.

<details>
<summary>Hint 1</summary>

$r(x,y)=(-y,x)$ and $s(x,y)=(x,-y)$

</details>

<details>
<summary>Hint 2</summary>

A reflection fixes a line pointwise

</details>

<details>
<summary>Worked solution</summary>

Apply $r$ first: $(x,y)$ maps to $(-y,x)$. Applying $s$ then gives $sr(x,y)=(-y,-x)$. Points on the line $y=-x$ have form $(x,-x)$, and $sr$ sends them to $(x,-x)$, so that line is fixed. A vector perpendicular to it, such as $(1,1)$, is sent to $(-1,-1)$, confirming reflection across $y=-x$. Applying the map twice gives $sr(-y,-x)=(x,y)$, so $(sr)^2$ is the identity and $sr$ has order $2$.

**Answer.** $sr(x,y)=(-y,-x)$, reflection across $y=-x$; its order is $2$.

</details>

*Tags: dihedral group, reflection, order*
