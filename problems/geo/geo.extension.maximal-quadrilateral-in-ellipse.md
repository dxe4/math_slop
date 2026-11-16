# Maximize a quadrilateral area inside an ellipse

*Hard · [Geometry and trigonometry problems](index.md)*

A strictly convex quadrilateral lies wholly inside the closed ellipse $x^2/25+y^2/9\le1$. Find its greatest possible area and characterize all maximizing quadrilaterals in your explanation.

```answer
{"answer":{"kind":"integer","expected":"30","checker_scope":"The exact requested finite result only; a correct entry does not certify a geometric argument or award reviewed evidence."}}
```

<details>
<summary>Hint 1</summary>

The map $(x,y)\mapsto(x/5,y/3)$ sends the ellipse disk to a unit disk and divides areas by $15$.

</details>

<details>
<summary>Hint 2</summary>

In a convex quadrilateral, area is half the product of its diagonal lengths and the sine of their angle.

</details>

<details>
<summary>Worked solution</summary>

Normalize the ellipse and bound both diagonals of the image.

1. The given invertible linear map sends the quadrilateral into the unit disk and scales area by $1/15$. Convexity and boundary order are preserved.
2. If the image diagonal lengths are $d_1,d_2$ and their angle is $\theta$, partition at their intersection to obtain area $d_1d_2|\sin\theta|/2$.
3. Each diagonal is a chord of the unit disk, hence has length at most $2$. Thus the image area is at most $2$, and the original area at most $30$.
4. Equality requires both diagonals to be length $2$, so each is a diameter with the same midpoint, and also requires them to be perpendicular. Their four endpoints therefore form a square on the unit circle.
5. Conversely every such square attains image area $2$. Its inverse affine image is contained in the ellipse and has area $30$. These inverse images, for every rotation of the unit-circle square, are precisely the maximizers.

</details>
