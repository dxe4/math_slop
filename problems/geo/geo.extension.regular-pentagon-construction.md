# Construct and certify a regular pentagon

*Hard · [Geometry and trigonometry problems](index.md)*

Give a straightedge-and-compass construction of a regular pentagon inscribed in a given circle of center $O$ and radius $r>0$, and prove the construction closes after exactly five equal steps. You may use exact constructible lengths, but must justify the central angle rather than quote a decimal approximation.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

Normalize the circle radius to one and construct $c=(\sqrt5-1)/4$ using a right triangle with legs $1,2$.

</details>

<details>
<summary>Hint 2</summary>

If $\cos\theta=c$ with $0<\theta<\pi/2$, the relation $4c^2+2c-1=0$ makes $\cos3\theta=\cos2\theta$.

</details>

<details>
<summary>Model proof</summary>

Construct the exact cosine of one central step.

1. Work at radius one, with center $O$ and horizontal radius endpoint $A$. Construct $\sqrt5$ as the hypotenuse of a right triangle with legs $1,2$, subtract one, and bisect twice to obtain $c=(\sqrt5-1)/4$. All these are straightedge-and-compass operations.
2. On the horizontal diameter mark coordinate $c$ from $O$. Erect its perpendicular and take the intersection $B$ with the upper semicircle. Thus $\cos\angle AOB=c$, with angle $\theta\in(0,\pi/2)$.
3. The quadratic relation gives $\cos2\theta=2c^2-1=-c-1/2$. Also $c^3=c/2-1/8$, so $\cos3\theta=4c^3-3c=-c-1/2$.
4. Therefore $\cos3\theta=\cos2\theta$. The cosine equality gives either $\theta=2k\pi$ or $5\theta=2k\pi$. In $0<\theta<\pi/2$ only $\theta=2\pi/5$ is possible.
5. Copy chord $AB$ around the circle with the compass, always selecting the next intersection in the same circular direction rather than returning to the preceding vertex. Every step subtends $2\pi/5$; five steps make one full turn and no earlier positive number of steps does. Join the five successive vertices to obtain the required regular pentagon.
6. For the original circle, perform the same length ratios relative to its radius; the proof is unchanged by this positive scaling.

**Self-assessment rubric**

- Give exact compass-and-straightedge operations producing the cosine length.
- Construct the point with that cosine on the correct semicircle.
- Prove the central angle from an exact algebraic relation and its interval.
- Justify both closure and the absence of earlier repetition.

</details>
