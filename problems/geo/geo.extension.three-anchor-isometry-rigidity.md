# Determine an isometry from three anchors

*Hard · [Geometry and trigonometry problems](index.md)*

Let $F:\mathbb R^2\to\mathbb R^2$ preserve every Euclidean distance. If it fixes three noncollinear points, prove that it fixes every point. Prove also that no collection of collinear fixed anchors can force this conclusion. Do not assume surjectivity or a classification of isometries.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

For an arbitrary point $P$, compare squared distances of $P$ and $F(P)$ to each fixed anchor.

</details>

<details>
<summary>Hint 2</summary>

Subtract the equation for one anchor from those for the other two.

</details>

<details>
<summary>Model proof</summary>

Use differences of squared distances to obtain two linear constraints.

1. Let the fixed anchors be $A,B,C$, and write $Q=F(P)$. Distance preservation gives $|Q-A|^2=|P-A|^2$ and the analogous equalities for $B,C$.
2. Subtracting the equality for $A$ from the one for $B$ cancels the squared point norms and yields $(Q-P)\cdot(B-A)=0$. The $C$ equation likewise yields $(Q-P)\cdot(C-A)=0$.
3. Noncollinearity makes $B-A,C-A$ a basis of the plane. A vector orthogonal to both must be zero, so $Q=P$. Since $P$ was arbitrary, $F$ is the identity.
4. For anchors all on one line, reflection in that line preserves every Euclidean distance and fixes all the anchors, but moves every point outside the line. This supplies the required counterexample even for infinitely many collinear anchors.

**Self-assessment rubric**

- Use only the given distance preservation and fixed anchors.
- Obtain two correct orthogonality constraints by subtracting squared equations.
- Conclude uniqueness from the independent anchor differences.
- Provide a distance-preserving nonidentity map fixing any collinear anchor collection.

</details>
