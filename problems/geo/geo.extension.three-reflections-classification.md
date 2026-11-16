# Classify a composition of three reflections

*Hard · [Geometry and trigonometry problems](index.md)*

Let $R_1,R_2,R_3$ be reflections in lines of the Euclidean plane. Prove their composition is either a reflection or a glide reflection. Give a precise criterion for which case occurs, and describe the fixed-point set. Do not assume the three lines are in general position.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

The composition has form $F(x)=Qx+b$, where $Q$ is orthogonal with determinant $-1$.

</details>

<details>
<summary>Hint 2</summary>

Choose orthonormal eigenvectors of $Q$ with eigenvalues $1,-1$, then separate the translation into these two directions.

</details>

<details>
<summary>Model proof</summary>

Put the orientation-reversing affine isometry in normal form.

1. Each reflection has an orthogonal linear part of determinant $-1$. Composition gives an affine isometry $Qx+b$ with $Q$ orthogonal and determinant $-1$, regardless of coincidences or parallel lines.
2. The two eigenvalues of this real $2$ by $2$ matrix are real: its characteristic discriminant is $(\operatorname{tr}Q)^2+4>0$. Real eigenvalues of an orthogonal matrix have absolute value one, and their product is $-1$, so they are $1,-1$. Corresponding unit eigenvectors $u,v$ are perpendicular.
3. Write $b=\alpha u+\beta v$. In coordinates $x=tu+sv$, the map is $(t,s)\mapsto(t+\alpha,-s+\beta)$.
4. Shift the second coordinate to $s-\beta/2$. The map becomes reflection in the line $s=\beta/2$ followed by translation $\alpha u$ along that line.
5. If $\alpha=0$, the map is that reflection and its fixed-point set is the entire line. If $\alpha\ne0$, it is a nontrivial glide reflection and has no fixed points, since the first coordinate cannot remain unchanged. These are all cases.

**Self-assessment rubric**

- Derive the orthogonal linear part and determinant sign.
- Justify the two perpendicular eigen-directions.
- Separate the translation and identify the mirror axis.
- Give both cases and the full fixed-point set without a general-position assumption.

</details>
