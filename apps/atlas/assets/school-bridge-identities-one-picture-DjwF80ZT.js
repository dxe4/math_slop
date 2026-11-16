var e=`---
id: deep-dive-school-bridge-identities-one-picture
title: "Identities from one picture"
license: CC BY-SA 4.0
---

# Identities from one picture

An identity is an equality that holds for every permitted input. It is stronger than a statement that two calculations happen to agree for one chosen number. The unit circle gives a simple example: the horizontal and vertical coordinates of every one of its points satisfy the same equation. Naming those coordinates cosine and sine turns the circle equation into a trigonometric identity.

This article is at **Pre-university (L1)**. Read [Right triangles and the unit circle](/articles/school-bridge-right-triangles-unit-circle/) first, or use [Sine, Cosine, and Tangent](/books/precalculus/sine-cosine-tangent/). The [algebra refresher](/explore/unhurried/refresh/algebra/) supports the substitutions and fraction manipulations. We will prove one basic identity, use it to determine an unknown coordinate, and keep the domain restrictions when dividing it.

## The picture and its equation

![A unit circle centred at O. A first-quadrant point P forms a right triangle with horizontal leg x, vertical leg y and hypotenuse one.](figures/school-bridge-unit-circle.svg "A radius and its perpendicular coordinate legs on the unit circle.")

For the first-quadrant point in this picture, Pythagoras gives $x^2+y^2=1$. The circle equation is valid in every quadrant: if a coordinate is negative, the associated leg length is its positive magnitude, and squaring either gives the same result. Points on the axes also satisfy the equation directly.

At angle $\\theta$, the coordinate definitions are $x=\\cos\\theta$ and $y=\\sin\\theta$. Therefore, for every real angle,

$$\\cos^2\\theta+\\sin^2\\theta=1.$$

Here $\\sin^2\\theta$ means $(\\sin\\theta)^2$, not $\\sin(\\theta^2)$. The angle is fed into sine first and the output is squared. The same convention applies to cosine.

The proof covers every angle because every corresponding point lies on the unit circle. It does not depend on the triangle being the particular shape shown. The drawing helps locate the objects; the circle equation is the reason the conclusion applies to all of them.

## An identity is not an equation to solve

The equality $\\sin^2\\theta+\\cos^2\\theta=1$ holds for every angle. By contrast, $\\sin\\theta=1$ is true only at particular angles. Asking for its solutions is a different question from proving an identity.

A numerical calculation can check that a proposed identity is consistent with one input, but a finite list of checks cannot establish its universal claim. One counterexample can disprove such a claim. For instance, $\\sin\\theta+\\cos\\theta=1$ works at $0^\\circ$, but at $45^\\circ$ the two positive circle coordinates are equal. Since their squares sum to one, each is $1/\\sqrt2$, and their sum is $\\sqrt2$, not one. Squaring the separate coordinates is essential in the actual circle identity.

## Worked example: recover the other coordinate

Suppose $\\theta$ is acute and $\\sin\\theta=3/5$. Find its cosine exactly. Substitution in the identity gives

$$\\cos^2\\theta=1-\\frac9{25}=\\frac{16}{25}.$$

A real number whose square is $16/25$ could be $4/5$ or $-4/5$. The acute-angle assumption chooses the sign: the circle point is in the first quadrant, where its horizontal coordinate is positive. Thus $\\cos\\theta=4/5$.

Check that the result fits the premise. The point $(4/5,3/5)$ lies in the first quadrant and its squared distance from the origin is one. If instead the angle were known to be in the second quadrant, the same positive sine would accompany cosine $-4/5$. The identity determines a squared coordinate; position determines the sign.

This is why taking a square root without inspecting the angle's range can lose an answer or choose the wrong one. A picture can help track the quadrant, but the sign choice should appear in the written reasoning.

## Division brings a restriction

If $\\cos\\theta\\ne0$, we may divide the identity by $\\cos^2\\theta$:

$$1+\\frac{\\sin^2\\theta}{\\cos^2\\theta}=\\frac1{\\cos^2\\theta}.$$

Since tangent is sine divided by cosine, this becomes $1+\\tan^2\\theta=1/\\cos^2\\theta$. The restriction is not decoration. At a vertical circle direction, cosine is zero, so the division and tangent expression are undefined.

The original circle identity still holds at that vertical direction: zero squared plus one squared equals one. A derived identity can therefore have a smaller permitted domain than the statement from which it was derived. Cancelling or rearranging an expression does not erase the conditions under which its starting line was meaningful.

The same discipline applies outside trigonometry. Simplifying $x/x$ to one requires $x\\ne0$. The simplified constant has a value at zero, but it does not retroactively define the original quotient there.

A related calculation exposes a common trap. Squaring sine plus cosine produces their two squares plus twice their product. The circle identity makes the two-square part one but does not remove that extra product. The sum itself therefore need not equal one.

Its absolute value is at most the square root of two. The nonnegative square of sine minus cosine bounds twice their product by one; substituting into the expanded square of their sum gives the claim. At a first-quadrant diagonal, both coordinates are the reciprocal square root of two and their sum attains the positive bound. At the opposite diagonal it attains the negative bound. This uses the same picture and ordinary algebra while keeping a sum distinct from a sum of squares. The former measures a projection along a diagonal direction; the latter records the unit distance from the origin. Confusing those measurements changes the mathematical statement.

## Exercises

### Exercise 1
<a id="deep-dive-school-bridge-identities-one-picture-ex-1"></a>
An acute angle has cosine $5/13$. Find its sine and tangent, explaining each sign and denominator choice.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Use the circle identity to find the square of sine.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
The first quadrant determines the sign; tangent requires a nonzero cosine.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The identity gives $\\sin^2\\theta=1-25/169=144/169$. Sine is positive for an acute angle, so $\\sin\\theta=12/13$. Cosine is $5/13\\ne0$, hence tangent is defined and equals $(12/13)/(5/13)=12/5$. The positive signs agree with a first-quadrant point.
</details>

### Exercise 2
<a id="deep-dive-school-bridge-identities-one-picture-ex-2"></a>
Show that $(1-\\cos^2\\theta)/\\sin\\theta=\\sin\\theta$ whenever the left side is defined. Does this equality assign a value to the left side at $0^\\circ$?

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Replace the numerator using the circle identity.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
Record the denominator restriction before cancelling a factor.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The left side requires $\\sin\\theta\\ne0$. On that domain, $1-\\cos^2\\theta=\\sin^2\\theta$, and division gives $\\sin^2\\theta/\\sin\\theta=\\sin\\theta$. At $0^\\circ$, sine is zero, so the original quotient is $0/0$ and is undefined. The right side has a value there, but the simplification does not extend the domain of the original expression.
</details>

## Continue into the book

The circle gives the identity for every angle. Algebra derives related forms on the domains where its operations are valid, and quadrant information determines signs when recovering a coordinate. Continue to [Trigonometric Identities](/books/precalculus/trigonometric-identities/) for addition, double-angle and other identities with full derivations. [Trigonometric Equations](/books/precalculus/trigonometric-equations/) separates those universal tools from the task of finding particular angles.
`;export{e as default};