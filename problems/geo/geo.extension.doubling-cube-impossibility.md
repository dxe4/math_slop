# Prove the classical cube-doubling obstruction

*Hard · [Geometry and trigonometry problems](index.md)*

Starting from a unit segment, prove that straightedge and compass cannot construct the edge length of a cube of volume $2$. State the algebraic field-degree obstruction and justify why it applies to the allowed geometric intersections.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only. No automatic verdict, graded evidence or checkpoint credit is awarded."}}
```

<details>
<summary>Hint 1</summary>

Each new line-line, line-circle or circle-circle intersection introduces coordinates satisfying equations of degree at most two over the current coordinate field.

</details>

<details>
<summary>Hint 2</summary>

The required edge length has irreducible polynomial $x^3-2$ over the rationals.

</details>

<details>
<summary>Model proof</summary>

Compare cubic degree with a tower of quadratic extensions.

1. Begin with rational coordinate points determined by the unit segment. Line equations and circle equations through already constructed data have coefficients in the field of existing coordinates.
2. Line-line intersections solve linear equations. A line-circle intersection reduces to a quadratic. Subtracting two circle equations cancels the squared terms and gives a line, after which the circle-circle case also reduces to a quadratic. Coincident curves do not select a new isolated constructible point.
3. Consequently every constructible coordinate lies in a finite tower of extensions of degrees one or two over $\mathbb Q$. The total degree is a power of two, and the minimal degree of any contained algebraic element divides that power by the field tower law.
4. The edge length required is the positive root $\sqrt[3]2$ of $x^3-2$. A reducible cubic over $\mathbb Q$ has a rational root. The rational-root theorem restricts integer candidates here to $\pm1,\pm2$, and none is a root. Thus the cubic is irreducible and this edge has degree three.
5. Since three does not divide any power of two, the edge is not constructible from the unit segment by the stated operations. Approximation or another drawing instrument does not contradict this exact obstruction.

**Self-assessment rubric**

- Identify the starting field and the coefficients available from existing constructions.
- Justify the degree bound for every allowed isolated intersection type.
- Prove the exact required length has degree three.
- Apply the tower law to rule out exact construction.

</details>
