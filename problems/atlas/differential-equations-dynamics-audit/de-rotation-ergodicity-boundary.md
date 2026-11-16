# One correct time average does not prove disk ergodicity

*Difficulty 5 of 5 · [Differential equations, control, and long-time dynamics audit studio](index.md) · exercise 14 of 14*

For $x'=-y$ and $y'=x$ on the unit disk, compute the time average of $x^2$ along the circle of radius $R$, compute its uniform-area space average on the disk, and prove the flow is not ergodic for uniform area.

<details>
<summary>Hint 1</summary>

Write $x=R\cos(t+\theta)$

</details>

<details>
<summary>Hint 2</summary>

In polar area measure, the radial density is $2r$ on $0\le r\le1$

</details>

<details>
<summary>Hint 3</summary>

An inner disk is invariant

</details>

<details>
<summary>Worked solution</summary>

Along radius $R$, $x(t)=R\cos(t+\theta)$, so the long-time average of $x^2$ is $R^2$ times the period average of $\cos^2$, namely $R^2/2$. For uniform area on the unit disk, the angular average of $x^2$ at radius $r$ is $r^2/2$ and radial density is $2r$, giving $\int_0^1(r^2/2)(2r)\,dr=1/4$. The inner disk $\{r\le1/2\}$ is invariant because radius is conserved, and its area probability is $(1/2)^2=1/4$, neither zero nor one. Hence the area-preserving flow is not ergodic for uniform disk area. Agreement on a particular circle concerns a different invariant component and measure.

**Answer.** Circle average is $R^2/2$, disk-area average is $1/4$, and the invariant radius-$1/2$ disk of probability $1/4$ disproves disk-area ergodicity.

</details>

*Tags: ergodic theory, invariant measure, time average, dynamical systems*
