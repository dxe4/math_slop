var e=`---
parent_id: book-euclidean-geometry-trigonometry
chapter_id: right-triangle-trigonometry
title: "Right-Triangle Trigonometry"
level: secondary
license: "CC BY-SA 4.0"
---

# Right-Triangle Trigonometry

Two right triangles can have different sizes while sharing the same acute angle. Similarity then fixes the ratios between their sides. Trigonometry names those ratios, allowing us to move between an angle and a length comparison. A height that cannot be reached directly can therefore be found from a horizontal distance and an angle of elevation.

Required preparation is [Similarity and Proportion](similarity-proportion.md), [Area and the Pythagorean Theorem](area-pythagorean-theorem.md), and basic algebra. This chapter concerns nondegenerate right triangles and acute angles only. The wider meanings of sine, cosine and tangent for other angles belong to the next chapter and the linked Precalculus treatment.

The guiding question is not which formula to memorise, but which sides the known angle relates. Mark the right angle first, identify the hypotenuse, then name the remaining sides relative to the selected acute angle. That small diagram often prevents more mistakes than an extra line of calculation.

## Ratios that survive a change of scale

**Definition 11.1 (Three right-triangle ratios).** Let $\\theta$ be an acute angle in a right triangle. Its opposite side lies across the triangle from $\\theta$. Its adjacent leg meets $\\theta$ but is not the hypotenuse. The hypotenuse is opposite the right angle. Define
$$
\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}},\\qquad
\\cos\\theta=\\frac{\\text{adjacent}}{\\text{hypotenuse}},\\qquad
\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}.
$$
All side lengths are positive, so every denominator is nonzero.

**Theorem 11.2 (The ratios depend only on the angle).** Any two right triangles with the same acute angle have the same sine, cosine and tangent ratios for that angle.

*Proof.* Their right angles agree, their stated acute angles agree, and their third angles therefore agree by the triangle angle sum. The triangles are similar by AA. Every corresponding side of one is the same positive scale factor times the corresponding side of the other. That factor cancels in each side ratio. ∎

The theorem is what allows a table or calculator to give a trigonometric value without knowing the triangle's size. The side names are relative to the chosen angle: the opposite leg for one acute angle is the adjacent leg for the other. The hypotenuse does not change.

Since the hypotenuse is longer than either leg, an acute angle satisfies $0<\\sin\\theta<1$ and $0<\\cos\\theta<1$. Tangent is positive and may exceed one. A sine value larger than one therefore signals impossible acute-triangle data or an error; a tangent value larger than one is entirely possible.

**Example 11.3 (One triangle, two viewpoints).** A right triangle has legs $8$ and $15$ and hypotenuse $17$, because $8^2+15^2=17^2$. Let $\\alpha$ face the leg of length eight. Then
$$
\\sin\\alpha=\\frac8{17},\\qquad
\\cos\\alpha=\\frac{15}{17},\\qquad
\\tan\\alpha=\\frac8{15}.
$$
For the other acute angle $\\beta$, the two legs exchange roles:
$$
\\sin\\beta=\\frac{15}{17},\\qquad
\\cos\\beta=\\frac8{17},\\qquad
\\tan\\beta=\\frac{15}{8}.
$$
No angle approximation was needed. If the triangle is enlarged by a factor of three, its sides become $24,45,51$, but all six ratios remain unchanged. The ratios describe shape, while the side lengths also describe scale.

## Relationships among the ratios

**Theorem 11.4 (Pythagorean and complementary relationships).** For an acute angle in a right triangle,
$$
\\sin^2\\theta+\\cos^2\\theta=1,\\qquad
\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}.
$$
If the other acute angle is $90^\\circ-\\theta$, then
$$
\\sin(90^\\circ-\\theta)=\\cos\\theta,\\qquad
\\cos(90^\\circ-\\theta)=\\sin\\theta.
$$

*Proof.* Write opposite leg $o$, adjacent leg $a$, and hypotenuse $h$. Pythagoras gives $o^2+a^2=h^2$. Divide by positive $h^2$ to obtain the first identity. Dividing $o/h$ by $a/h$ gives $o/a$, proving the tangent relationship. The two acute angles sum to $90^\\circ$, and their opposite and adjacent legs exchange, proving both complementary relationships. ∎

The square in $\\sin^2\\theta$ means $(\\sin\\theta)^2$, not $\\sin(\\theta^2)$. Also, the identity determines a missing ratio only after its sign is known. Within this acute-angle chapter every ratio is positive, so a nonnegative square root gives the correct missing sine or cosine. For general angles, quadrant information will matter.

These relationships are deductions from the definitions and Pythagoras, rather than independent facts to be trusted without explanation. Knowing their origins makes them easier to reconstruct and shows where their hypotheses enter.

## Exact values from special triangles

**Result 11.5 (Angles of thirty, forty-five and sixty degrees).** The exact values are
$$
\\begin{array}{c|ccc}
\\theta&\\sin\\theta&\\cos\\theta&\\tan\\theta\\\\ \\hline
30^\\circ&1/2&\\sqrt3/2&1/\\sqrt3\\\\
45^\\circ&1/\\sqrt2&1/\\sqrt2&1\\\\
60^\\circ&\\sqrt3/2&1/2&\\sqrt3
\\end{array}
$$

*Proof.* An isosceles right triangle with legs one has hypotenuse $\\sqrt2$ by Pythagoras. Its acute angles are equal and sum to $90^\\circ$, so each is $45^\\circ$. The three ratios give the middle row.

For the other rows, bisect an equilateral triangle of side two by the altitude from one vertex. Congruence makes the two half-triangles equal and halves the base to length one. The altitude has length $\\sqrt{2^2-1^2}=\\sqrt3$. The original equilateral angles are $60^\\circ$, and the altitude bisects the apex angle to $30^\\circ$. Applying the definitions to sides $1,\\sqrt3,2$ gives both rows. ∎

The expressions $1/\\sqrt2$ and $\\sqrt2/2$ are equal; either is exact. A rounded decimal such as $0.707$ is an approximation and should not be substituted for an exact value unless the task asks for numerical measurement. Exact values preserve relationships that rounding can obscure.

**Example 11.6 (A ladder with an exact angle).** An ideal straight ladder is six metres long and makes an angle of $60^\\circ$ with horizontal ground. Assume the wall is vertical and the ground level. Find the height of the contact point and the foot's distance from the wall.

The ladder is the hypotenuse. Its vertical component is opposite the ground angle, so
$$
h=6\\sin60^\\circ=3\\sqrt3\\text{ metres}.
$$
The horizontal distance is adjacent, giving
$$
d=6\\cos60^\\circ=3\\text{ metres}.
$$
The check $h^2+d^2=27+9=36$ reproduces the ladder's squared length. Using tangent would also work once one leg was known, but the given hypotenuse makes sine and cosine direct choices. This is a geometric model, not a recommendation about safe ladder placement.

## Finding an unknown side

A useful sequence is to identify the selected angle and label the sides before rearranging an equation. If opposite and hypotenuse are involved, use sine; for adjacent and hypotenuse use cosine; for the two legs use tangent. There is no need to calculate a side unrelated to the required ratio.

For example, suppose an acute angle is $\\theta$ and the adjacent leg has length $a$. The opposite leg is $a\\tan\\theta$. If instead the opposite leg $o$ is known and the adjacent leg is wanted, rearrange to $a=o/\\tan\\theta$. Multiplying and dividing are different rearrangements; a memorised phrase without the equation can easily reverse them.

All lengths must use one consistent unit before a ratio is formed. The ratio of $60$ centimetres to $2$ metres is $0.3$, not $30$. Trigonometric ratios are dimensionless because their numerator and denominator are both lengths measured in the same unit.

## Finding an unknown angle

For a positive tangent ratio $t$, there is exactly one acute angle with $\\tan\\theta=t$. One construction uses a right triangle with adjacent leg one and opposite leg $t$. Its angle is determined by the sides. We write that acute angle as $\\arctan t$.

Similarly a sine ratio $s$ strictly between zero and one determines an acute right triangle with hypotenuse one, opposite leg $s$, and adjacent leg $\\sqrt{1-s^2}$. This defines the acute inverse-sine angle $\\arcsin s$. The corresponding cosine construction defines $\\arccos c$ for $0<c<1$. These are the principal inverse functions on acute inputs; their full domains and ranges are discussed in [Inverse Trigonometric Functions](../precalculus/inverse-trigonometric-functions.md).

Inverse-function notation is not a reciprocal. The number $\\arctan(3/4)$ is an angle; $1/\\tan\\theta$ is a ratio. Calculators may write inverse sine as $\\sin^{-1}$, so read the intended operation carefully.

**Example 11.7 (An exact ratio and a numerical angle).** A ramp rises three metres over a horizontal run of four metres. Its length is five metres by Pythagoras. The inclination $\\theta$ satisfies
$$
\\tan\\theta=\\frac34,\\qquad
\\theta=\\arctan(3/4).
$$
That expression is already exact. If a numerical answer is requested in degrees, it is approximately $36.87^\\circ$. The equivalent sine equation is $\\sin\\theta=3/5$.

Do not write $\\theta=3/4$: that is the tangent ratio, not the angle. Do not take $\\arcsin(3/4)$ either: the denominator four is the adjacent leg, whereas sine needs the hypotenuse five. A labelled triangle explains which inverse operation is appropriate.

## Height measurements and model assumptions

**Example 11.8 (Allowing for eye height).** An observer stands on level ground twenty metres from the base of a vertical pole. The angle of elevation from the observer's eye to the top is $45^\\circ$, and eye height is $1.6$ metres. Find the pole's height.

The right triangle begins at eye level, not at ground level. If $H$ is the pole height, its opposite leg is $H-1.6$ and its adjacent leg is twenty. Thus
$$
\\tan45^\\circ=\\frac{H-1.6}{20}=1,
$$
giving $H=21.6$ metres. Adding the eye height at the end is necessary because the tangent calculation gives only the height difference between eye and top.

The conclusion depends on a horizontal baseline, a vertical pole and an angle measured from the horizontal. If the observer stands uphill, or measures from a sloping line of sight to the base, the same equation does not automatically apply. A mathematical solution should state those assumptions rather than hide them in the drawing.

For approximate data, retain extra digits until the final step. A small angle error can cause a substantial height error when the line of sight is steep or the baseline is poorly known. At this level, one can investigate by recalculating at the endpoints of a stated measurement interval instead of using an advanced error formula.

The right-triangle method supplies positive side lengths. When an equation returns a negative value for a requested physical length, inspect the angle assignment and geometry before accepting it. In a coordinate calculation a negative component may be meaningful, but a side length is nonnegative.

## Exercises

### Exercise 11.1
<a id="right-triangle-trigonometry-ex-1"></a>

A right triangle has legs $5$ and $12$ and hypotenuse $13$. Find sine, cosine and tangent of the angle opposite the leg of length five.

<details>
<summary>Hint 1</summary>

Mark the selected angle before naming the adjacent leg.

</details>
<details>
<summary>Hint 2</summary>

The hypotenuse is thirteen regardless of which acute angle is chosen.

</details>
<details>
<summary>Solution</summary>

The opposite leg is five, the adjacent leg twelve, and the hypotenuse thirteen. Therefore the ratios are $5/13$, $12/13$ and $5/12$. The squared sine and cosine add to $(25+144)/169=1$, providing a consistency check.

</details>

### Exercise 11.2
<a id="right-triangle-trigonometry-ex-2"></a>

A right triangle is enlarged by factor $7/2$. Explain what happens to its sine and tangent ratios and to its area.

<details>
<summary>Hint 1</summary>

Corresponding side lengths acquire the same factor.

</details>
<details>
<summary>Hint 2</summary>

Area involves two length dimensions rather than one.

</details>
<details>
<summary>Solution</summary>

Each side ratio has factor $7/2$ in both numerator and denominator, so sine and tangent stay unchanged. Area multiplies by $(7/2)^2=49/4$. Trigonometric ratios record an angle's shape information, whereas area also depends on scale.

</details>

### Exercise 11.3
<a id="right-triangle-trigonometry-ex-3"></a>

An acute angle has sine $7/25$. Find its cosine and tangent exactly.

<details>
<summary>Hint 1</summary>

Use the Pythagorean relationship.

</details>
<details>
<summary>Hint 2</summary>

The acute-angle cosine is positive.

</details>
<details>
<summary>Solution</summary>

We have $\\cos^2\\theta=1-49/625=576/625$, so $\\cos\\theta=24/25$. The positive square root is required because the angle is acute. Tangent is $(7/25)/(24/25)=7/24$. The negative cosine root would not describe an acute right triangle.

</details>

### Exercise 11.4
<a id="right-triangle-trigonometry-ex-4"></a>

An isosceles right triangle has hypotenuse $10$. Find each leg exactly.

<details>
<summary>Hint 1</summary>

Its acute angles are forty-five degrees.

</details>
<details>
<summary>Hint 2</summary>

Use either the exact cosine or an equation with two equal squared legs.

</details>
<details>
<summary>Solution</summary>

If each leg is $a$, then $2a^2=100$, so $a=\\sqrt{50}=5\\sqrt2$. Equivalently $a=10\\cos45^\\circ=10/\\sqrt2=5\\sqrt2$. Taking the positive root is necessary because a length is positive.

</details>

### Exercise 11.5
<a id="right-triangle-trigonometry-ex-5"></a>

A right triangle has hypotenuse $14$ and an acute angle of $30^\\circ$. Find both legs.

<details>
<summary>Hint 1</summary>

Use the exact thirty-degree values.

</details>
<details>
<summary>Hint 2</summary>

The opposite leg uses sine and the adjacent leg uses cosine.

</details>
<details>
<summary>Solution</summary>

The opposite leg is $14(1/2)=7$. The adjacent leg is $14(\\sqrt3/2)=7\\sqrt3$. Their squared lengths sum to $49+147=196=14^2$, as required. Interchanging them would correspond to the other acute angle of sixty degrees.

</details>

### Exercise 11.6
<a id="right-triangle-trigonometry-ex-6"></a>

A ramp rises $0.6$ metres over a horizontal run of $2$ metres. Give its tangent ratio and an exact inverse-function expression for its inclination.

<details>
<summary>Hint 1</summary>

Both lengths already use metres.

</details>
<details>
<summary>Hint 2</summary>

The tangent ratio is rise divided by horizontal run.

</details>
<details>
<summary>Solution</summary>

The tangent ratio is $0.6/2=0.3=3/10$. The inclination is $\\arctan(3/10)$, interpreted as an acute angle. The ratio itself is not the angle. If degrees are requested, the inverse calculation must be performed in degree mode.

</details>

### Exercise 11.7
<a id="right-triangle-trigonometry-ex-7"></a>

An observer's eye is $1.5$ metres high. Standing $12$ metres from a vertical tower on level ground, the observer measures an elevation of $60^\\circ$. Find the tower height exactly.

<details>
<summary>Hint 1</summary>

The vertical leg begins at eye level.

</details>
<details>
<summary>Hint 2</summary>

Add eye height after finding the tangent height difference.

</details>
<details>
<summary>Solution</summary>

If tower height is $H$, then $(H-1.5)/12=\\tan60^\\circ=\\sqrt3$. Thus $H=1.5+12\\sqrt3$ metres. Omitting $1.5$ would find only the height above the observer's eye, not above the ground.

</details>

### Exercise 11.8
<a id="right-triangle-trigonometry-ex-8"></a>

Explain why an acute-angle sine value of $1.2$ is impossible, while a tangent value of $1.2$ is possible.

<details>
<summary>Hint 1</summary>

Compare each denominator with its numerator geometrically.

</details>
<details>
<summary>Hint 2</summary>

A hypotenuse is longest, but either leg may be the longer leg.

</details>
<details>
<summary>Solution</summary>

Sine divides a leg by the longer hypotenuse, so it lies strictly between zero and one for an acute angle. Tangent divides one leg by the other, so it may exceed one. A right triangle with opposite leg six and adjacent leg five has tangent $6/5=1.2$, providing an explicit valid example.

</details>

### Exercise 11.9
<a id="right-triangle-trigonometry-ex-9"></a>

Prove that sine of one acute angle equals cosine of the other acute angle in the same right triangle.

<details>
<summary>Hint 1</summary>

The acute angles sum to ninety degrees.

</details>
<details>
<summary>Hint 2</summary>

The two legs exchange their opposite and adjacent roles.

</details>
<details>
<summary>Solution</summary>

Let the legs be $a,b$ and the hypotenuse $h$. If one angle faces $a$, its sine is $a/h$. For the other angle, $a$ is the adjacent leg, so its cosine is also $a/h$. Hence the values agree. This depends on using the corresponding complementary angles of one right triangle.

</details>

### Exercise 11.10
<a id="right-triangle-trigonometry-ex-10"></a>

A measured height calculation uses $H=10\\tan\\theta$ with $44^\\circ\\le\\theta\\le46^\\circ$. Explain why reporting exactly $H=10$ is unjustified, and state a suitable interval expression.

<details>
<summary>Hint 1</summary>

The exact value ten corresponds only to forty-five degrees.

</details>
<details>
<summary>Hint 2</summary>

Tangent increases as an acute ray rises above the horizontal.

</details>
<details>
<summary>Solution</summary>

The measured angle may differ from forty-five degrees, so its tangent need not equal one. The model gives $10\\tan44^\\circ\\le H\\le10\\tan46^\\circ$. This interval retains the stated angular uncertainty. The expression assumes the ten-unit baseline is exact; uncertainty in that distance would require additional bounds.

</details>

## Sources

The exposition and exercises are original, using the right-triangle outline in the local [Geometry and Trigonometry course](../../courses/euclidean-trigonometry-standard.md). For a further primary textbook treatment, see OpenStax, [Right Triangle Trigonometry](https://openstax.org/books/algebra-and-trigonometry-2e/pages/7-2-right-triangle-trigonometry). Consulted on 13 November 2026; no passage or exercise has been copied.

## Summary

Similarity makes sine, cosine and tangent depend on an acute angle rather than triangle size. Side names must be assigned relative to the chosen angle, and the hypotenuse is always opposite the right angle. Pythagoras gives the squared identity, while special triangles give exact values. Unknown sides follow from a suitable ratio; unknown acute angles follow from inverse functions with a stated angle mode. Physical height problems also require eye height, level baselines and other model assumptions. The next chapter extends the geometric use of these ratios to arbitrary triangle angles and proves an area formula.
`;export{e as default};