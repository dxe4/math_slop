# Enumerate a tiny elliptic-curve group

*Difficulty 4 of 5 · [Number theory and cryptography audit studio](index.md) · exercise 9 of 13*

Over $\mathbb{F}_5$, consider $E:y^2=x^3+2x+1$. Verify nonsingularity, enumerate every affine point, compute $2P$ for $P=(0,1)$, and determine the order of $P$.

<details>
<summary>Hint 1</summary>

Check $4a^3+27b^2$ modulo 5

</details>

<details>
<summary>Hint 2</summary>

The square residues modulo 5 are 0, 1, and 4

</details>

<details>
<summary>Hint 3</summary>

For doubling use $\lambda=(3x^2+a)/(2y)$

</details>

<details>
<summary>Worked solution</summary>

The short Weierstrass discriminant test gives $4\cdot2^3+27\cdot1^2=59\equiv4\pmod 5$, so the curve is nonsingular. Testing $x=0,1,2,3,4$ against square residues gives affine points $(0,1),(0,4),(1,2),(1,3),(3,2),(3,3)$; $x=2$ and $x=4$ give no points. With the point at infinity $O$, the group has seven points. For $P=(0,1)$, $\lambda=(3\cdot0^2+2)/(2\cdot1)=1\pmod 5$. Thus $x(2P)=1^2-0-0=1$ and $y(2P)=1(0-1)-1=-2\equiv3\pmod 5$, so $2P=(1,3)$. Continuing exact addition gives $3P=(3,3)$, $4P=(3,2)$, $5P=(1,2)$, $6P=(0,4)=-P$, and $7P=O$. Hence $P$ has order 7. This group computation is valid because nonsingularity was checked first.

**Answer.** E(F_5) has six affine points plus O; $2P=(1,3)$, and $P=(0,1)$ has order 7.

</details>

*Tags: elliptic curve, finite field, group law, point order*
