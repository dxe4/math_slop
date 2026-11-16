var e=`---
id: course-paper-shadow-geometry
title: "Paper, Shapes, and Shadows: A First Geometry and Trigonometry Course"
level: secondary
estimated_minutes: 360
license: CC BY-SA 4.0
---

# Paper, Shapes, and Shadows: A First Geometry and Trigonometry Course

<!-- euler-course-route -->

## Current course route

Use the [course page](/courses/atlas-paper-shadow-geometry/) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

Geometry begins with things you can touch: a straight edge, a folded corner, a tile, or a shadow. Gather paper, string, a ruler, and any object that stands upright. Measurements may be approximate; record units and uncertainty. Every activity also has a drawing-only version, so outdoor space, sharp tools, and precise vision are not prerequisites.

This course has one central question: **which facts about a figure survive when the figure moves, grows, or is viewed from somewhere else?** Congruence records what survives a rigid motion. Similarity records what survives scaling. Coordinates translate shape into arithmetic. Trigonometry records ratios that survive within a family of similar right triangles.

## Before you begin

You should be comfortable multiplying fractions and solving a one-step proportion. Try these without a calculator:

1. Convert $2.4\\ \\mathrm{m}$ to centimetres.
2. Solve $3/5=x/20$.
3. Explain why $4\\ \\mathrm{cm}$ and $4\\ \\mathrm{cm}^{2}$ measure different kinds of quantity.

The answers are $240\\ \\mathrm{cm}$, $x=12$, and “length versus area.” If the first or second question is difficult, review [Fractions, Ratios, and Proportional Reasoning](#/topic/fractions-ratios) first. Keep the third question in view throughout this course: units are part of the mathematics.

### How to study the course

For each section, draw the figure before using a formula. Mark equal lengths, equal angles, and right angles explicitly. When a result depends on a physical measurement, separate the exact geometric argument from the approximate data. The practice set near the end mixes all the ideas; the solutions explain how to choose a method, not only what number to report.

## 1. Length, angle, and area answer different questions

A rectangle $5\\ \\mathrm{cm}$ by $3\\ \\mathrm{cm}$ has perimeter

$$5+3+5+3=16\\ \\mathrm{cm}$$

and area

$$5\\cdot 3=15\\ \\mathrm{cm}^{2}.$$

Perimeter measures a trip around the boundary; area counts unit squares covering the inside. The units expose a common mix-up: centimetres cannot be an area, and square centimetres cannot be a boundary length.

Fold a paper corner onto itself. A rectangular corner is a right angle, 90°. Fold that angle exactly in half to make 45°. Angle measures turning, not the lengths of the arms: extending both rays does not change the angle.

**Misconception:** a shape that looks larger must have larger perimeter and area. A long thin rectangle can have a large perimeter but small area. Test with twelve coins as equal edge units: arrange them around different rectangles and compare the enclosed space.

### What scaling does to measurement

If every length in a figure is multiplied by $k$, every perimeter is multiplied by $k$, but every area is multiplied by $k^{2}$. A $2$ by $3$ rectangle has area $6$. Scaling by $4$ makes an $8$ by $12$ rectangle with area $96=4^{2}\\cdot 6$.

This difference matters whenever a photograph, map, or model is enlarged. Doubling a map does not merely double the printed area; it multiplies that area by four. In three dimensions, the same reasoning makes volume scale by $k^{3}$.

**Checkpoint.** A square has side $5\\ \\mathrm{cm}$. Another square has three times the side length. Its perimeter is three times as large, while its area is nine times as large. If you obtained “three times” for both, draw the unit squares.

## 2. Why triangle angles total 180°

Draw and cut out any triangle. Tear off its three corners and place their vertices together along a straight line. Their turns fill a straight angle, about 180°.

This experiment suggests a fact. A proof uses a line through one vertex parallel to the opposite side. The other two triangle angles reappear as alternate angles at the vertex, and all three form a straight line. The result depends on ordinary flat, or Euclidean, geometry; huge triangles drawn on a sphere behave differently.

If a triangle has angles 50° and 60°, its third angle is $180^{\\circ} - 50^{\\circ} - 60^{\\circ} = 70^{\\circ}$.

## 3. Congruence: when does partial information force a triangle?

Triangles are unusually rigid. Three suitable measurements can determine every remaining side and angle. The standard congruence tests name the information that is enough:

- **SSS:** all three corresponding side lengths agree;
- **SAS:** two sides and the included angle agree;
- **ASA** or **AAS:** two angles and one side agree;
- **RHS** (also called HL): for right triangles, the hypotenuse and one leg agree.

For SAS, imagine fixing two sticks at an angle with a pin. Their free endpoints occupy determined positions, so joining them supplies the third side. A reflection may place the triangle on the other side, but reflection preserves congruence.

The order in the name matters. **SSA is generally insufficient.** Take a ray from $A$, place $B$ on it, and prescribe a length for $AC$ and a different length for $BC$. A circle centred at $B$ can meet the possible ray for $C$ in two places, producing two noncongruent triangles with the same stated data. This is the ambiguous case.

Three equal angles, AAA, determine shape but not size. It proves similarity rather than congruence.

### A short proof with congruence

Let $ABC$ be an isosceles triangle with $AB=AC$. Let $M$ be the midpoint of $BC$. Triangles $ABM$ and $ACM$ have

$$AB=AC,\\qquad BM=CM,\\qquad AM=AM.$$

They are congruent by SSS. Therefore $\\angle BAM=\\angle MAC$ and $\\angle AMB=\\angle AMC$. The last two angles form a straight angle and are equal, so both are $90^\\circ$. One congruence argument proves that the median from the apex is also an angle bisector and an altitude.

**Proof habit:** state the matching vertices in the same order. Writing $\\triangle ABM\\cong\\triangle ACM$ records $A\\leftrightarrow A$, $B\\leftrightarrow C$, and $M\\leftrightarrow M$.

## 4. Same shape, different scale

Two figures are **congruent** when they match exactly after sliding, turning, or flipping. They are **similar** when one is a scaled copy of the other: angles agree and corresponding lengths share one scale factor.

Suppose a small right triangle has sides 3, 4, 5. A similar triangle whose shortest side is 6 has scale factor $6/3 = 2$; its other sides are 8 and 10.

Do not add the same amount to every side. The sides 6, 7, 8 are not a scale copy of 3, 4, 5 because the ratios differ. Similarity is multiplicative.

Make a simple projector: cut a small shape from card and hold it between a lamp and wall. Moving the card changes the shadow’s scale but largely preserves its angles. Never use the Sun or a powerful lamp in a way that risks eyes or heat.

### Why AA is enough

If two angles of one triangle equal two angles of another, the third angles also agree because both angle sums are $180^\\circ$. Choose one pair of corresponding sides and call their ratio $k$. A copy of the smaller triangle scaled by $k$ has that side equal to the larger triangle’s side and has the same two adjacent angles. ASA congruence makes the scaled copy coincide with the larger triangle. Thus every corresponding side has the same ratio $k$.

This argument explains the logic of similar-triangle calculations. We do not assume all the side ratios agree because the pictures look alike; angle information forces the common scale factor.

### Worked similarity problem

In $\\triangle ABC$, a segment $DE$ joins points on $AB$ and $AC$ and is parallel to $BC$. Suppose $AD=3$, $AB=8$, and $AE=4.5$. Parallel-line angle facts give

$$\\triangle ADE\\sim\\triangle ABC.$$

The small-to-large scale is $AD/AB=3/8$, so

$$\\frac{AE}{AC}=\\frac{3}{8},\\qquad
AC=4.5\\cdot\\frac{8}{3}=12.$$

The correspondence must be written before the proportion. A proportion with mismatched sides can look plausible while being wrong.

## 5. The Pythagorean theorem measures a diagonal

For a right triangle with leg lengths $a,b$ and hypotenuse $c$,

$$a^{2}+b^{2}=c^{2}.$$

Here is an area proof. Arrange four congruent right triangles inside a square of side $a+b$ so that their hypotenuses form a central square of side $c$. The outer area can be counted in two ways:

$$
(a+b)^{2}
=4\\left(\\frac{ab}{2}\\right)+c^{2}.
$$

Expanding and cancelling $2ab$ gives $a^{2}+b^{2}=c^{2}$. The equation is a conclusion from the dissection, not a pattern inferred from the $3$–$4$–$5$ example.

The converse is also useful: if the longest side of a triangle satisfies $a^{2}+b^{2}=c^{2}$, then the triangle is right. For sides $7,24,25$,

$$7^{2}+24^{2}=49+576=625=25^{2},$$

so the angle opposite the side of length $25$ is a right angle. For sides $4,5,6$, the equality fails; the triangle is not right, so right-triangle formulas cannot be used without further work.

### Distance versus displacement along edges

Walking $6$ units east and $8$ units north covers $14$ units along the two legs. The straight displacement is

$$\\sqrt{6^{2}+8^{2}}=10.$$

Both answers can be correct because they answer different questions. A diagram should show which path is being measured.

## 6. Right triangles create stable ratios

For a chosen acute angle in a right triangle, name the sides relative to that angle:

- **hypotenuse:** opposite the right angle, always the longest;
- **opposite:** across from the chosen angle;
- **adjacent:** beside the angle but not the hypotenuse.

All right triangles sharing angle $\\theta$ are similar, so their side ratios are fixed:

$$\\sin\\theta=\\frac{\\text{opposite}}{\\text{hypotenuse}},\\qquad
\\cos\\theta=\\frac{\\text{adjacent}}{\\text{hypotenuse}},\\qquad
\\tan\\theta=\\frac{\\text{opposite}}{\\text{adjacent}}.$$

These are not arbitrary calculator buttons. They are names for scale-independent comparisons.

For a right triangle with legs 3 and 4 and hypotenuse 5, relative to the angle beside the side of length 4,

$\\sin \\theta = 3/5$, $\\cos \\theta = 4/5$, and $\\tan \\theta = 3/4$.

**Misconception:** “opposite” and “adjacent” are permanent side names. They depend on which acute angle you choose. The hypotenuse does not change.

### Choosing a ratio

Suppose a ramp rises $0.9\\ \\mathrm{m}$ over a horizontal run of $6\\ \\mathrm{m}$. If $\\theta$ is the angle the ramp makes with level ground, the known sides are opposite and adjacent:

$$\\tan\\theta=\\frac{0.9}{6}=0.15.$$

An inverse trigonometric function answers the reverse question:

$$\\theta=\\tan^{-1}(0.15)\\approx 8.5^\\circ.$$

Check that the calculator is in degree mode. The symbol $\\tan^{-1}$ here means the inverse function, not the reciprocal $1/\\tan\\theta$. The reciprocal is called $\\cot\\theta$.

If instead the angle and hypotenuse are known, choose sine or cosine according to the desired side. The useful ratio is usually the one containing the unknown and one known length; introducing an extra unknown creates needless work.

## 7. Measure a height with shadows

On level ground, place a $1\\ \\mathrm{m}$ vertical stick near a taller object. Measure both shadows at nearly the same time. Sun rays meet each vertical object at the same angle, producing similar right triangles.

If the stick’s shadow is $0.8\\ \\mathrm{m}$ and a tree’s shadow is $6.4\\ \\mathrm{m}$, then

$$\\frac{\\text{tree height}}{6.4}=\\frac{1}{0.8}.$$

So the tree height is $6.4\\div 0.8=8\\ \\mathrm{m}$.

Audit the experiment: Is the ground level? Is the stick vertical? Where exactly does a fuzzy shadow end? Did the Sun move between measurements? Repeat and give a range, such as $7.8$–$8.2\\ \\mathrm{m}$, rather than pretending the result is exact.

If outdoor measuring is unsuitable, shine a diffuse light past two upright objects on a tabletop. Or use a provided tactile diagram with measured triangle sides; the reasoning is the same.

### Carrying uncertainty through a proportion

Suppose the $1\\ \\mathrm{m}$ stick shadow is somewhere between $0.78$ and $0.82\\ \\mathrm{m}$, while the tree shadow is between $6.35$ and $6.45\\ \\mathrm{m}$. The height model is

$$h=\\frac{\\text{tree shadow}}{\\text{stick shadow}}\\cdot 1\\ \\mathrm{m}.$$

The smallest compatible height uses the smallest numerator and largest denominator; the largest uses the largest numerator and smallest denominator:

$$\\frac{6.35}{0.82}\\approx 7.74,\\qquad
\\frac{6.45}{0.78}\\approx 8.27.$$

So the measurements support roughly $7.7$ to $8.3\\ \\mathrm{m}$. This interval accounts only for the stated reading uncertainty. Sloping ground or a tilted stick is a model error and needs a changed setup, not more decimal places.

## 8. Coordinates connect shape and number

On squared paper, points $A=(1,1)$ and $B=(5,4)$ differ by 4 horizontally and 3 vertically. Those differences form a 3–4–5 right triangle, so the direct distance is 5 units.

This is the Pythagorean rule:

$$\\text{horizontal}^{2}+\\text{vertical}^{2}
=\\text{direct distance}^{2}.$$

Here $4^{2} + 3^{2} = 16 + 9 = 25 = 5^{2}$. A frequent error is adding legs directly: 4 + 3 measures a right-angled route, not the shortcut.

For general points $A=(x_{1},y_{1})$ and $B=(x_{2},y_{2})$,

$$
AB=\\sqrt{(x_{2}-x_{1})^{2}+(y_{2}-y_{1})^{2}}.
$$

Subtracting in the opposite order gives the same distance because the differences are squared.

The midpoint is the coordinatewise average:

$$
M=\\left(\\frac{x_{1}+x_{2}}{2},\\frac{y_{1}+y_{2}}{2}\\right).
$$

For $A=(-2,5)$ and $B=(4,-1)$, the midpoint is $(1,2)$ and the distance is $\\sqrt{6^{2}+(-6)^{2}}=6\\sqrt2$.

Slope measures vertical change per unit horizontal change:

$$m=\\frac{y_{2}-y_{1}}{x_{2}-x_{1}}.$$

Parallel nonvertical lines have equal slopes. Perpendicular nonvertical lines with nonzero slopes have product $-1$. Vertical lines need separate treatment because their horizontal change is zero, so their slope quotient is undefined.

### Coordinate proof

Let $A=(-a,0)$, $B=(a,0)$, and $C=(0,b)$, where $a,b>0$. Then

$$
AC=\\sqrt{a^{2}+b^{2}}=BC,
$$

so $\\triangle ABC$ is isosceles. The midpoint of $AB$ is $(0,0)$, and the segment from $C$ to that midpoint lies on the vertical line $x=0$, perpendicular to the horizontal base. This coordinate argument reaches the same conclusion as the congruence proof in Section 3. Different proof languages expose different structure.

## 9. Transformations explain sameness

A **translation** slides every point by the same vector. A **rotation** turns the plane about a centre. A **reflection** flips it across a line. These rigid motions preserve lengths, angle measures, area, and collinearity. Any composition of rigid motions is another distance-preserving transformation.

A **dilation** with centre $O$ and scale factor $k>0$ sends each point $P$ along ray $OP$ so that $OP'=k\\,OP$. It preserves angle and multiplies every length by $k$. It preserves shape but generally changes size, so it produces similar figures.

This language makes definitions operational:

- congruent figures can be matched by rigid motions;
- similar figures can be matched by a dilation followed by rigid motions;
- a symmetry of a figure is a transformation that carries the figure onto itself.

A nonsquare rectangle has four rigid symmetries: the identity, reflection in its horizontal axis, reflection in its vertical axis, and a $180^\\circ$ rotation. A square has eight. Listing them is an early encounter with the algebra of transformations.

## 10. Cumulative practice

1. Find perimeter and area of a $7\\ \\mathrm{cm}$ by $2\\ \\mathrm{cm}$ rectangle.
2. A triangle has angles 35° and 90°. Find the third.
3. A model doorway $4\\ \\mathrm{cm}$ high represents a $2\\ \\mathrm{m}$ doorway. What actual height does $7\\ \\mathrm{cm}$ represent?
4. In a right triangle relative to angle $\\theta$, opposite = 5 and adjacent = 12. Find $\\tan \\theta$.
5. A $1.5\\ \\mathrm{m}$ pole casts a $2\\ \\mathrm{m}$ shadow while a building casts a $16\\ \\mathrm{m}$ shadow. Estimate the building height.
6. Find the distance between $(2,3)$ and $(8,11)$.
7. Decide whether sides $9,12,15$ form a right triangle. Justify the answer.
8. A right triangle has hypotenuse $13$ and one leg $5$. Find the other leg.
9. Explain why AAA is not a triangle congruence test, and give one pair of examples.
10. A ladder of length $4.5\\ \\mathrm{m}$ makes a $68^\\circ$ angle with level ground. How high up a vertical wall does it reach? State an assumption.
11. Find the midpoint and slope of the segment from $(-3,4)$ to $(5,0)$.
12. A triangle has vertices $(0,0)$, $(4,0)$, and $(1,3)$. Is it isosceles? Support the answer with exact distances.

## Answers

1. Perimeter $2(7+2)=18\\ \\mathrm{cm}$; area $7\\cdot 2=14\\ \\mathrm{cm}^{2}$.
2. $180^{\\circ}-90^{\\circ}-35^{\\circ}=55^{\\circ}$.
3. The scale is $2\\ \\mathrm{m}/4\\ \\mathrm{cm}=0.5\\ \\mathrm{m}$ per centimetre; $7\\ \\mathrm{cm}$ represents $3.5\\ \\mathrm{m}$.
4. $\\tan \\theta = 5/12$.
5. $\\text{height}/16=1.5/2$, so the height is $12\\ \\mathrm{m}$ under the similarity assumptions.
6. Changes are 6 and 8; distance $\\sqrt{6^{2}+8^{2}}=\\sqrt{100}=10$.
7. Yes: $9^{2}+12^{2}=81+144=225=15^{2}$. The converse of the Pythagorean theorem makes the triangle right.
8. If the missing leg is $x$, then $x^{2}+5^{2}=13^{2}$. Thus $x^{2}=144$ and the positive length is $x=12$.
9. Equal angles fix shape but allow any positive scale factor. Equilateral triangles with sides $2$ and $5$ have matching angles but are not congruent.
10. The height is opposite the given angle, so $h/4.5=\\sin 68^\\circ$ and $h\\approx4.17\\ \\mathrm{m}$. This assumes the wall is perpendicular to level ground and the ladder reaches the wall.
11. The midpoint is $(1,2)$. The slope is $(0-4)/(5-(-3))=-4/8=-1/2$.
12. The squared side lengths are $16$, $10$, and $18$. None are equal, so the triangle is not isosceles. Comparing squared distances avoids unnecessary square roots.

### Feedback guide

If Questions 3 or 5 were difficult, write corresponding sides in matching order before forming a proportion. If Questions 7 or 8 were difficult, identify the hypotenuse before using the Pythagorean theorem. If Questions 10–12 were difficult, return to the diagram: formulas become easier to select after the known and unknown quantities are labelled.

## 11. Capstone: defend a measurement

Choose one inaccessible length: the height of a shelf, a tabletop diagonal, the width of a courtyard, or a diagrammed tower. You may use a safe physical setup or a supplied scale drawing.

Your report should contain:

1. a labelled diagram that distinguishes measured from calculated lengths;
2. a congruence, similarity, Pythagorean, coordinate, or trigonometric argument;
3. units at every measurement stage;
4. the calculation, with unrounded values kept until the final step;
5. a plausible interval for the answer;
6. one check using a second method, a repeated measurement, or an upper and lower bound;
7. a sentence naming which assumptions could systematically shift the answer.

For a strong submission, the diagram and reasoning should let another student reproduce the result. For an excellent submission, explain why your method is invariant under moving, rotating, or rescaling the diagram. A polished decimal without a geometric justification is incomplete.

## Where to continue

The [Geometry, Measurement, and Proof](#/item/book-geometry-proof-reference) reference develops Euclidean proof systematically. [Conics, Solids, and Projection](#/item/book-conics-solids-projections) moves into three dimensions, while [Perspective and Projective Geometry](#/item/deep-dive-projective-perspective-geometry) asks what remains true after an image changes lengths, angles, and parallelism.
`;export{e as default};