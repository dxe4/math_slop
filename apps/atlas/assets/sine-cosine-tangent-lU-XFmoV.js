var e=`---
parent_id: book-precalculus
chapter_id: sine-cosine-tangent
title: "Sine, Cosine, and Tangent"
level: secondary
license: CC BY-SA 4.0
---

# Sine, Cosine, and Tangent

A point moving around a circle returns to the same position after a complete turn, but its horizontal and vertical coordinates vary throughout the journey. Those two coordinates define cosine and sine. Their ratio, wherever the horizontal coordinate is nonzero, defines tangent. This starting point makes sense of negative angles, many revolutions and angles that do not belong inside a triangle.

The purpose of this chapter is to turn that geometric picture into three precise functions. We will establish their domains and ranges, derive exact values at special angles, and explain their signs, symmetries and periods. We will also learn what a tangent value tells us about the direction of a line. No calculus is needed: the arguments use the unit circle, elementary coordinate geometry and algebra.

Begin with [Radians and the Unit Circle](radians-unit-circle.md). In particular, a full turn measures $2\\pi$ radians, a half turn measures $\\pi$, and positive angles turn anticlockwise from the positive horizontal axis. Unless a degree symbol is written, all angles here are in radians. The notation $k\\in\\mathbb Z$ means that $k$ may be any integer, including zero or a negative integer.

## Coordinates as functions of an angle

**Definition 5.1 (Sine and cosine).** For each real number $\\theta$, let $P_\\theta$ be the terminal point obtained by turning through $\\theta$ radians on the unit circle centred at the origin, starting from $(1,0)$. Define $\\cos\\theta$ to be its horizontal coordinate and $\\sin\\theta$ to be its vertical coordinate:

$$P_\\theta=(\\cos\\theta,\\sin\\theta).$$

An angle can include any number of full turns, in either direction, so both functions have domain $\\mathbb R$. Different inputs can have the same output. In fact, even the pair of outputs does not recover the number of completed revolutions. This will matter when we ask about inverse functions later.

The input is an angle measure; the outputs are coordinates on a unit circle. They are not lengths along the circular arc. For example, an angle $\\pi$ reaches $(-1,0)$, giving $\\cos\\pi=-1$ and $\\sin\\pi=0$, although the traversed semicircle has length $\\pi$. On a circle of radius $R>0$, measured from its centre with the same axes, the corresponding coordinates are $(R\\cos\\theta,R\\sin\\theta)$ because enlargement multiplies both coordinates by $R$.

**Theorem 5.2 (Pythagorean identity and ranges).** For every real $\\theta$,

$$\\cos^2\\theta+\\sin^2\\theta=1.$$

Both sine and cosine have range exactly $[-1,1]$.

*Proof.* The defining point lies on $x^2+y^2=1$, giving the identity. Since both squares are nonnegative, neither square exceeds $1$, so each coordinate lies between $-1$ and $1$. To show every value is attained, let $u\\in[-1,1]$. The point $(u,\\sqrt{1-u^2})$ lies on the unit circle and is reached by some angle, so $u$ is a cosine value. Likewise $(\\sqrt{1-u^2},u)$ shows that $u$ is a sine value. Hence the intervals are full ranges, rather than merely bounds. ∎

The notation $\\sin^2\\theta$ means $(\\sin\\theta)^2$, not $\\sin(\\theta^2)$. Thus the identity is a relationship between the squares of two outputs at the same input. Parentheses help when unfamiliar notation might hide which operation is performed first.

The four axis points give immediate values. At $0,\\pi/2,\\pi,3\\pi/2$, the terminal coordinates are respectively $(1,0),(0,1),(-1,0),(0,-1)$. Therefore sine is zero on the horizontal axis and cosine is zero on the vertical axis. More generally,

$$\\sin\\theta=0\\quad\\Longleftrightarrow\\quad\\theta=k\\pi,$$

$$\\cos\\theta=0\\quad\\Longleftrightarrow\\quad\\theta=\\frac\\pi2+k\\pi,$$

where $k\\in\\mathbb Z$. These equivalences follow because a zero coordinate puts the circle point on exactly the corresponding axis.

## Tangent, its excluded inputs and its range

**Definition 5.3 (Tangent).** Where $\\cos\\theta\\ne0$, define

$$\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}.$$

Its natural real domain is $\\mathbb R\\setminus\\{\\pi/2+k\\pi:k\\in\\mathbb Z\\}$.

A quotient requires a nonzero denominator. At an excluded angle, sine is either $1$ or $-1$ and cosine is zero, so tangent has no real value. Writing $\\tan(\\pi/2)=\\infty$ would assign an output that the real function does not have. Large values near such an angle describe nearby inputs, rather than the value at the missing input itself.

If $P_\\theta=(x,y)$ with $x\\ne0$, the line through the origin and this point has slope $y/x=\\tan\\theta$. The opposite circle point $(-x,-y)$ gives the same slope. Thus tangent records the slope of an unoriented nonvertical line, whereas sine and cosine together record a directed position on the circle. At a vertical direction, the line still exists geometrically but cannot have a finite slope.

**Theorem 5.4 (Range of tangent).** Tangent attains every real number.

*Proof.* Let $t$ be any real number. Consider

$$Q=\\left(\\frac1{\\sqrt{1+t^2}},\\frac t{\\sqrt{1+t^2}}\\right).$$

The sum of the squared coordinates is $(1+t^2)/(1+t^2)=1$, so $Q$ lies on the unit circle. Its horizontal coordinate is positive and therefore nonzero. Choose an angle reaching $Q$. Its tangent is the vertical coordinate divided by the horizontal coordinate, which is $t$. Every tangent value is itself real by the quotient definition, so the range is exactly $\\mathbb R$. ∎

This does not claim that tangent takes every value on any small interval. It establishes the range on the full stated domain. It also explains why sine and cosine can be bounded while their ratio is not: the denominator can be nonzero yet very small. Bounding a numerator alone does not bound a quotient.

## Signs, reflections and quarter turns

The signs of sine and cosine are coordinate signs. In quadrant I both are positive; in quadrant II cosine is negative and sine positive; in quadrant III both are negative; in quadrant IV cosine is positive and sine negative. Tangent is positive when the coordinates have the same sign and negative when they have opposite signs. Axis cases require direct evaluation, since a quadrant is an open region between axes.

**Theorem 5.5 (Reflection and half-turn identities).** For every real $\\theta$,

$$\\cos(-\\theta)=\\cos\\theta,\\qquad\\sin(-\\theta)=-\\sin\\theta,$$

$$\\cos(\\theta+\\pi)=-\\cos\\theta,\\qquad\\sin(\\theta+\\pi)=-\\sin\\theta.$$

Whenever tangent is defined, $\\tan(-\\theta)=-\\tan\\theta$ and $\\tan(\\theta+\\pi)=\\tan\\theta$.

*Proof.* Reflecting the angle's terminal point in the horizontal axis changes the direction of turning and sends $(x,y)$ to $(x,-y)$. This proves the first pair. A half turn sends a point to its opposite $(-x,-y)$, proving the second pair. Taking coordinate quotients gives the tangent statements. The reflected or half-turned horizontal coordinate is nonzero exactly when the original one is, so all these tangent quotients are legitimate. ∎

A function with $f(-x)=f(x)$ on a symmetric domain is called even; one with $f(-x)=-f(x)$ is called odd. Thus cosine is even, and sine and tangent are odd. “Odd” describes this symmetry, not whether individual numerical outputs are odd integers.

A positive quarter turn sends $(x,y)$ to $(-y,x)$. This geometric fact gives

$$\\cos(\\theta+\\pi/2)=-\\sin\\theta,\\qquad\\sin(\\theta+\\pi/2)=\\cos\\theta.$$

Reflecting a circle point in the line $y=x$ instead swaps the coordinates and changes its angle to $\\pi/2-\\theta$, up to full turns. Consequently

$$\\cos(\\pi/2-\\theta)=\\sin\\theta,\\qquad\\sin(\\pi/2-\\theta)=\\cos\\theta.$$

These cofunction relations hold for every real input. They do not require the angle or its complement to lie in the first quadrant.

## Exact special-angle values

Some circle coordinates follow from symmetry and the Pythagorean theorem. At $\\theta=\\pi/4$, reflection in $y=x$ fixes the terminal point, so its coordinates are equal and positive. Writing each as $u$, the circle equation gives $2u^2=1$. Hence $u=\\sqrt2/2$.

For $\\pi/3$, construct an equilateral triangle of side $1$ with one vertex at the origin and one at $(1,0)$, above the horizontal axis. Its third vertex lies on the unit circle. The vertical symmetry line bisects the base, so that vertex has horizontal coordinate $1/2$. The positive vertical coordinate is $\\sqrt{1-1/4}=\\sqrt3/2$. The angle at the origin is $\\pi/3$, since the three equal angles together make a half turn. Reflection in $y=x$ supplies the $\\pi/6$ coordinates. This is a construction of exact circle points; no general triangle-solving rule is needed.

| $\\theta$ | $\\cos\\theta$ | $\\sin\\theta$ | $\\tan\\theta$ |
| --- | --- | --- | --- |
| $0$ | $1$ | $0$ | $0$ |
| $\\pi/6$ | $\\sqrt3/2$ | $1/2$ | $1/\\sqrt3=\\sqrt3/3$ |
| $\\pi/4$ | $\\sqrt2/2$ | $\\sqrt2/2$ | $1$ |
| $\\pi/3$ | $1/2$ | $\\sqrt3/2$ | $\\sqrt3$ |
| $\\pi/2$ | $0$ | $1$ | undefined |

Each tangent entry is a quotient of the preceding two entries. The last row must remain undefined: no pattern in the table overrides the denominator restriction. It is more useful to reconstruct the coordinates than to memorise an unexplained list.

**Definition 5.6 (Reference angle).** For a terminal ray away from the coordinate axes, its reference angle is the acute angle it makes with the horizontal axis. Reflecting the ray into quadrant I gives a circle point with the same coordinate magnitudes. Its quadrant determines the original signs.

**Example 5.7 (An angle in quadrant III).** Find sine, cosine and tangent of $7\\pi/6$.

The angle is $\\pi+\\pi/6$, so it lies in quadrant III with reference angle $\\pi/6$. Both coordinates are negative there. Therefore

$$\\cos(7\\pi/6)=-\\frac{\\sqrt3}{2},\\qquad\\sin(7\\pi/6)=-\\frac12.$$

Their ratio is positive: $\\tan(7\\pi/6)=1/\\sqrt3=\\sqrt3/3$. The half-turn identities give the same answer directly. Reporting positive sine because the reference-angle sine is positive would forget that a reference angle supplies magnitudes, not the original coordinate signs.

**Example 5.8 (Recovering missing coordinates).** Suppose $\\cos\\theta=-5/13$ and $\\theta$ lies in quadrant III. Find sine and tangent exactly.

The circle identity gives $\\sin^2\\theta=1-25/169=144/169$. Thus $\\sin\\theta$ is either $12/13$ or $-12/13$. Quadrant III makes the vertical coordinate negative, so $\\sin\\theta=-12/13$. The cosine is nonzero, and

$$\\tan\\theta=\\frac{-12/13}{-5/13}=\\frac{12}{5}.$$

The quadrant information is essential. With the same cosine in quadrant II, the sine would be positive and the tangent negative. Taking a positive square root without asking for the coordinate's sign would not solve the stated problem.

## Periods and complete revolutions

**Definition 5.9 (Period).** A positive number $T$ is a period of a function on domain $D$ if translation by $T$ preserves the domain, $D+T=D$, and $f(x+T)=f(x)$ for every $x\\in D$. If a least positive period exists, it is the fundamental period.

**Theorem 5.10 (Fundamental periods).** Sine and cosine have fundamental period $2\\pi$. Tangent has fundamental period $\\pi$.

*Proof.* A complete turn returns every circle point to itself, so $2\\pi$ is a period of sine and cosine. The half-turn identities show that $\\pi$ is a period of tangent, including preservation of its excluded-input pattern.

To prove minimality for cosine, any period $T$ must satisfy $\\cos T=\\cos0=1$. The unit circle has horizontal coordinate $1$ only at $(1,0)$, so $T$ must be an integer multiple of $2\\pi$. For sine, a period must satisfy $\\sin T=0$, so $T=k\\pi$. At the input $\\pi/2$, an odd number of half turns would change sine from $1$ to $-1$; hence $k$ must be even. Its least positive possibility is $2\\pi$.

Finally, a period $T$ of tangent must preserve its domain and satisfy $\\tan T=\\tan0=0$. A defined tangent is zero exactly when sine is zero, so $T=k\\pi$. Since $\\pi$ is already a period, it is the least positive one. ∎

A period repeats the entire function, not merely one output. The equality $\\sin0=\\sin\\pi=0$ does not make $\\pi$ a sine period: at $\\pi/2$ the shift changes the output's sign. Conversely, adding any integer multiple of a period preserves every output, so reducing a large angle by full turns is always legitimate for sine and cosine.

**Example 5.11 (Negative and large angles).** Evaluate $\\sin(-13\\pi/6)$, $\\cos(17\\pi/3)$ and $\\tan(11\\pi/4)$.

Adding $2\\pi$ to the first input gives $-\\pi/6$, so odd symmetry yields $\\sin(-13\\pi/6)=-1/2$. Subtracting $4\\pi$ from the second gives $5\\pi/3$, a quadrant IV angle with cosine $1/2$. Subtracting $2\\pi$ from the third gives $3\\pi/4$, whose tangent is $-1$. Alternatively, subtracting the tangent period $3\\pi$ gives $-\\pi/4$, again producing $-1$. All tangent inputs here avoid its excluded vertical directions.

## From coordinates to graphs and models

To plot sine or cosine, the horizontal graph coordinate is the angle input; the vertical graph coordinate is the function output. This is a different diagram from the unit circle. In the sine graph, for example, $(\\pi/2,1)$ is an input-output point. On the unit circle the same angle reaches $(0,1)$. Confusing these two pairs makes graph interpretation much harder.

On one turn, sine has outputs $0,1,0,-1,0$ at $0,\\pi/2,\\pi,3\\pi/2,2\\pi$; cosine has outputs $1,0,-1,0,1$. Circle coordinates supply the values between those points, and periodicity supplies further turns. Tangent cannot be drawn as one connected real graph across its excluded inputs. No point of its graph has an input $\\pi/2+k\\pi$.

**Example 5.12 (A rotating marker).** A marker moves on a circle of radius $3$ centimetres whose centre has height $8$ centimetres. Its angle measured from the rightward horizontal ray is $\\theta$. Its height is

$$H(\\theta)=8+3\\sin\\theta.$$

Since sine takes exactly $[-1,1]$, the marker's height takes exactly $[5,11]$ centimetres. At $\\theta=\\pi/6$ the height is $8+3/2=19/2$ centimetres; at $7\\pi/6$ it is $8-3/2=13/2$ centimetres. A full turn repeats the height pattern. The centre height and radius are lengths, while the sine output is a dimensionless coordinate multiplier. This distinction keeps the units consistent.

Numerical tools evaluate the same functions, but their angle setting matters. An input of $30$ in degree mode means $\\pi/6$ radians, whereas an input of $30$ in radian mode is a different angle. Exact identities and circle constructions justify the values above; a displayed decimal is an approximation. Also, a function name is not an algebraic multiplier: $\\sin(2\\theta)$ does not mean $2\\sin\\theta$. At $\\theta=\\pi/2$, these expressions are $0$ and $2$, respectively.

## Exercises

### Exercise 5.1
<a id="sine-cosine-tangent-ex-1"></a>

Find sine, cosine and tangent at $0,\\pi/2,\\pi,3\\pi/2$, stating every undefined value.

<details>
<summary>Hint 1</summary>

**Hint.** Write the four terminal points on the unit circle before using any quotient.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Tangent is undefined when the horizontal coordinate is zero; zero divided by a nonzero coordinate is allowed.

</details>
<details>
<summary>Solution</summary>

**Solution.** The points are $(1,0),(0,1),(-1,0),(0,-1)$. In the stated input order, the sine values are $0,1,0,-1$ and the cosine values are $1,0,-1,0$. The tangent values are $0$, undefined, $0$, undefined. At the vertical-axis points the denominator is zero; at the horizontal-axis points the quotient is zero because only the numerator vanishes.

</details>

### Exercise 5.2
<a id="sine-cosine-tangent-ex-2"></a>

Find the exact sine, cosine and tangent of $5\\pi/6$.

<details>
<summary>Hint 1</summary>

**Hint.** Identify the quadrant and the angle between the terminal ray and the negative horizontal axis.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The reference angle is $\\pi/6$. Use its coordinate magnitudes with quadrant II signs.

</details>
<details>
<summary>Solution</summary>

**Solution.** Since $5\\pi/6=\\pi-\\pi/6$, the angle lies in quadrant II with reference angle $\\pi/6$. The vertical coordinate is positive and the horizontal coordinate negative. Therefore $\\sin(5\\pi/6)=1/2$ and $\\cos(5\\pi/6)=-\\sqrt3/2$. Their quotient gives $\\tan(5\\pi/6)=-1/\\sqrt3=-\\sqrt3/3$. The negative sign agrees with opposite coordinate signs.

</details>

### Exercise 5.3
<a id="sine-cosine-tangent-ex-3"></a>

Find $\\sin(-7\\pi/4)$, $\\cos(19\\pi/6)$ and $\\tan(-5\\pi/3)$ exactly.

<details>
<summary>Hint 1</summary>

**Hint.** Add or subtract full turns to place each angle in $[0,2\\pi)$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Equivalent reduced angles are $\\pi/4$, $7\\pi/6$ and $\\pi/3$, respectively.

</details>
<details>
<summary>Solution</summary>

**Solution.** Adding $2\\pi$ gives $-7\\pi/4+2\\pi=\\pi/4$, so the sine is $\\sqrt2/2$. Subtracting $2\\pi$ from $19\\pi/6$ gives $7\\pi/6$, with cosine $-\\sqrt3/2$. Adding $2\\pi$ to $-5\\pi/3$ gives $\\pi/3$, whose tangent is $\\sqrt3$. These reductions preserve the functions; the tangent input is defined because its cosine is nonzero.

</details>

### Exercise 5.4
<a id="sine-cosine-tangent-ex-4"></a>

Suppose $\\sin\\theta=5/13$ and $\\theta$ lies in quadrant II. Find cosine and tangent, justifying the sign choice.

<details>
<summary>Hint 1</summary>

**Hint.** Use the unit-circle equation to determine the square of the missing coordinate.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Cosine is negative in quadrant II. Only after selecting its sign should you take the tangent quotient.

</details>
<details>
<summary>Solution</summary>

**Solution.** The identity gives $\\cos^2\\theta=1-25/169=144/169$. Thus the possible cosine values are $\\pm12/13$. Quadrant II requires the negative value, so $\\cos\\theta=-12/13$. It is nonzero, and $\\tan\\theta=(5/13)/(-12/13)=-5/12$. The positive sine alone would not have determined which cosine sign to use without additional information.

</details>

### Exercise 5.5
<a id="sine-cosine-tangent-ex-5"></a>

Give the natural real domain of $F(x)=\\tan(2x)$. Explain why the argument, rather than the outer input alone, controls the exclusions.

<details>
<summary>Hint 1</summary>

**Hint.** Tangent is undefined when its own input is $\\pi/2+k\\pi$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Set $2x=\\pi/2+k\\pi$ and solve for the excluded values of $x$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The denominator is $\\cos(2x)$, which vanishes exactly when $2x=\\pi/2+k\\pi$. Thus the excluded inputs are $x=\\pi/4+k\\pi/2$, with $k\\in\\mathbb Z$. The domain is $\\mathbb R\\setminus\\{\\pi/4+k\\pi/2:k\\in\\mathbb Z\\}$. Excluding only the usual angles for $\\tan x$ would be wrong because the tangent in this expression receives $2x$, not $x$.

</details>

### Exercise 5.6
<a id="sine-cosine-tangent-ex-6"></a>

Prove that $\\pi$ is not a period of cosine, although $\\cos(\\pi/2)=\\cos(3\\pi/2)$. State what the definition of a period requires.

<details>
<summary>Hint 1</summary>

**Hint.** A period must preserve outputs at every input, not just one selected pair.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compare the cosine values at $0$ and $0+\\pi$.

</details>
<details>
<summary>Solution</summary>

**Solution.** We have $\\cos0=1$ and $\\cos\\pi=-1$, so the shift by $\\pi$ fails to preserve the output at $0$. It cannot be a period. The equality at $\\pi/2$ and $3\\pi/2$ merely records two zeros. A period must preserve the domain under translation and satisfy $f(x+T)=f(x)$ for every permitted $x$. A single counterexample disproves such a universal claim.

</details>

### Exercise 5.7
<a id="sine-cosine-tangent-ex-7"></a>

Without numerical approximation, find all angles in $[0,2\\pi)$ whose cosine is zero, and all whose tangent is zero. Explain why these lists differ.

<details>
<summary>Hint 1</summary>

**Hint.** Interpret a zero cosine as a circle point on the vertical axis.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A defined quotient is zero when its numerator is zero. Check its denominator at the horizontal-axis points.

</details>
<details>
<summary>Solution</summary>

**Solution.** Cosine is zero at $\\pi/2$ and $3\\pi/2$. Tangent is undefined at both of these inputs. For tangent to be zero, sine must be zero and cosine nonzero; in this interval the inputs are $0,\\pi$. At their circle points cosine is $1,-1$, so both quotients are defined. The endpoint $2\\pi$ is excluded by the stated half-open interval.

</details>

### Exercise 5.8
<a id="sine-cosine-tangent-ex-8"></a>

Construct a unit-circle point whose corresponding tangent is $-2$, with positive horizontal coordinate. Give its sine and cosine without finding the angle itself.

<details>
<summary>Hint 1</summary>

**Hint.** Begin with a direction vector $(1,-2)$ and divide both coordinates by its length.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Its length is $\\sqrt5$. Normalisation leaves the ratio of coordinates unchanged.

</details>
<details>
<summary>Solution</summary>

**Solution.** The point is $(1/\\sqrt5,-2/\\sqrt5)$. Its squared coordinates sum to $1/5+4/5=1$, so it lies on the unit circle with the required positive horizontal coordinate. Therefore an angle reaching it has $\\cos\\theta=1/\\sqrt5$ and $\\sin\\theta=-2/\\sqrt5$. The cosine is nonzero and the quotient is $-2$, proving the required tangent value directly. The angle lies in quadrant IV up to full turns.

</details>

### Exercise 5.9
<a id="sine-cosine-tangent-ex-9"></a>

A rotating point is $4$ centimetres from a centre of height $10$ centimetres. Its angle from the rightward horizontal ray is $\\theta$. Write its height function, determine its range, and evaluate its height at $\\theta=\\pi/3$ and $\\theta=4\\pi/3$.

<details>
<summary>Hint 1</summary>

**Hint.** Vertical displacement from the centre is radius multiplied by sine.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use the range $[-1,1]$, then use the fact that a half turn reverses sine's sign.

</details>
<details>
<summary>Solution</summary>

**Solution.** The height is $H(\\theta)=10+4\\sin\\theta$ centimetres. Since every sine value between $-1$ and $1$ occurs, the range is exactly $[6,14]$ centimetres. At $\\pi/3$, sine is $\\sqrt3/2$, giving height $10+2\\sqrt3$ centimetres. At $4\\pi/3=\\pi+\\pi/3$, sine is $-\\sqrt3/2$, giving $10-2\\sqrt3$ centimetres. Both heights lie inside the established range.

</details>

### Exercise 5.10
<a id="sine-cosine-tangent-ex-10"></a>

A learner claims that $\\sin(\\theta+\\pi)=\\sin\\theta$ and that $\\sin^2\\theta=\\sin(\\theta^2)$ for all real $\\theta$. Disprove each claim with an exact counterexample, then state the correct half-turn identity and the correct meaning of $\\sin^2\\theta$.

<details>
<summary>Hint 1</summary>

**Hint.** For the first claim, choose a circle point with nonzero vertical coordinate.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** For the second claim, use $\\theta=\\pi$: its square lies strictly between $3\\pi$ and $4\\pi$, where sine is negative.

</details>
<details>
<summary>Solution</summary>

**Solution.** At $\\theta=\\pi/2$, the first claim says $-1=1$, since $\\sin(3\\pi/2)=-1$ and $\\sin(\\pi/2)=1$. The correct identity is $\\sin(\\theta+\\pi)=-\\sin\\theta$. For the second, $\\sin^2\\pi=0$. But $3<\\pi<4$ implies $3\\pi<\\pi^2<4\\pi$, so after subtracting $2\\pi$, the angle lies strictly between $\\pi$ and $2\\pi$, where sine is negative. Hence $\\sin(\\pi^2)<0$ and cannot equal zero. The notation $\\sin^2\\theta$ means $(\\sin\\theta)^2$: square the output, not the input.

</details>

## Summary

Cosine and sine are the horizontal and vertical coordinates of a unit-circle point, with real domain and range $[-1,1]$. Their squared outputs sum to $1$, but their signs depend on the quadrant. Tangent is their ratio, has every real number as an output and excludes exactly the inputs $\\pi/2+k\\pi$. Circle reflections prove parity, half turns explain tangent's period $\\pi$, and full turns give sine and cosine their fundamental period $2\\pi$. Special coordinates and reference angles yield exact values without approximation. [Trigonometric Identities](trigonometric-identities.md) next explains how outputs at sums and doubles of angles relate. Later, [inverse trigonometric functions](inverse-trigonometric-functions.md) and [trigonometric equations](trigonometric-equations.md) will use these domains and symmetries to recover permitted angle inputs.

## Sources

The local precursor is [*Functions, Equations, and Proof*, “Trigonometric Functions”](../functions-equations-proof/trigonometric-functions.md), especially its unit-circle perspective. This chapter develops its explanations, geometric arguments, examples and exercises in original prose. Complementary references are Jay Abramson et al., OpenStax, [*Algebra and Trigonometry 2e*, §7.3, “Unit Circle”](https://openstax.org/books/algebra-and-trigonometry-2e/pages/7-3-unit-circle) and [§7.4, “The Other Trigonometric Functions”](https://openstax.org/books/algebra-and-trigonometry-2e/pages/7-4-the-other-trigonometric-functions), consulted 13 November 2026. The chapter licence is CC BY-SA 4.0 as stated above.
`;export{e as default};