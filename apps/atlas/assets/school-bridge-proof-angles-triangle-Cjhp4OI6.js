var e=`---
id: deep-dive-school-bridge-proof-angles-triangle
title: "What a proof is: angles in a triangle"
license: CC BY-SA 4.0
---

# What a proof is: angles in a triangle

Cut the three corners from a paper triangle and place them side by side. They seem to make a straight angle. This is a good way to discover a possible rule. It is not yet an explanation of why the rule holds for every triangle, including triangles you have never cut or measured.

A **proof** is an argument that derives a stated conclusion from stated facts or assumptions, with reasons for its steps. This article introduces that idea at **School foundations (L0)**. You need ordinary addition and subtraction, with a short reminder available in the [Substitution and equations refresher](/explore/unhurried/refresh/algebra/). The geometric facts needed for the argument are explained here. The aim is to see why the three interior angles of a nondegenerate triangle in the flat Euclidean plane add to $180^\\circ$.

## State the setting before the conclusion

An angle measures a turn between two rays from a common point. A full turn is $360^\\circ$ and a straight angle is half a turn, $180^\\circ$. Angles that divide one straight angle into adjacent pieces have measures adding to $180^\\circ$.

A triangle here has three different vertices that are not on one straight line. Join them with straight segments. Its interior angles are the three angles inside that figure, one at each vertex. The noncollinearity condition excludes a flattened, degenerate configuration.

We work in the flat Euclidean plane. We use two familiar facts about parallel lines: through a point off a line there is a parallel to that line, and a transversal cutting two parallel lines creates equal alternate interior angles. A transversal is simply a line that meets both parallel lines. The equality compares angles lying between the parallels on opposite sides of that crossing line.

These facts are inputs to this proof. The [Parallel Lines and Angle Sums chapter](/books/euclidean-geometry-trigonometry/parallel-lines-angle-sums/) gives their Euclidean assumptions and longer development. Stating the inputs tells a reader where to look if they want to understand an earlier part of the reasoning.

## Bring the three angles to one place

Name the triangle's vertices $A$, $B$ and $C$. Through $C$, draw a line parallel to the opposite side $AB$. This new line makes a straight angle on the side containing the triangle.

The segment $CA$, extended as a line, crosses the two parallel lines. Alternate interior angle equality transfers the angle at $A$ to an angle at $C$ between $CA$ and one direction of the new parallel. In the same way, the line through $CB$ transfers the angle at $B$ to the angle between $CB$ and the other direction of that parallel.

At $C$ there are now three adjacent angle pieces: the transferred angle from $A$, the original triangle angle at $C$, and the transferred angle from $B$. They fill exactly one straight angle. Their measures therefore add to $180^\\circ$. Since the transferred angles equal the original ones, the three original triangle angles also add to $180^\\circ$.

That completes the proof. We did not choose numerical values for the triangle's corners, and we did not require two sides to be equal. The same construction works for every triangle satisfying the stated flat-plane and nondegeneracy assumptions. This is what makes the argument more general than measuring a particular example.

## Worked example: use the proved rule

Suppose two interior angles of such a triangle are $38^\\circ$ and $67^\\circ$. Find the third angle.

The theorem says their sum with the missing angle is $180^\\circ$. First add the known angles: $38+67=105$. The missing angle is therefore $180-105=75^\\circ$. Check the result by adding all three: $38+67+75=180$.

The calculation depends on the theorem. It does not prove the theorem again. This distinction separates two mathematical jobs: establishing a general rule and applying it to stated data. Both require reasons, but the scope of the conclusion is different.

If a measured paper triangle gave a slightly different total, that would raise questions about measurement precision, cutting and the flatness of the material. It would not identify a step missing from the mathematical argument. Conversely, precise-looking measurements cannot replace that argument's explanation of every allowed case.

## What the proof does and does not assume

The auxiliary line must be parallel to $AB$. Drawing any line through $C$ would not justify transferring both base angles by the parallel-line rule. A diagram may suggest parallelism, but the construction or given hypotheses must supply it.

The proof also does not assume the angle sum while proving the parallel-line fact it uses. That would be circular reasoning: using the conclusion as an unstated reason for a necessary earlier step. The book's longer route establishes its parallel-angle facts first, then derives the triangle result.

Finally, a triangle drawn with curved arcs on a globe is outside this theorem's setting. Its sides are not straight Euclidean segments in one plane. A conclusion can be fully proved under its hypotheses without applying to every object that shares its informal name. Keeping the hypotheses visible makes the theorem more useful because it tells us when we may invoke it.

## Exercises

### Exercise 1
<a id="deep-dive-school-bridge-proof-angles-triangle-ex-1"></a>
A triangle side is extended beyond one vertex. The exterior angle there is $125^\\circ$. One of the two interior angles at the other vertices is $55^\\circ$. Find the remaining two interior angles, giving a reason for each step.

<details data-euler-reveal="hint"><summary>Hint 1</summary>
The exterior angle and the interior angle next to it fill a straight angle.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
After finding that adjacent interior angle, apply the triangle angle-sum theorem.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The interior angle next to the exterior angle is $180-125=55^\\circ$, because the pair forms a straight angle. The other missing interior angle is $180-55-55=70^\\circ$, by the proved triangle theorem. The interior angles are therefore $55^\\circ$, $55^\\circ$ and $70^\\circ$, which sum to $180^\\circ$. The exterior angle also equals $55+70=125^\\circ$, consistent with the data.
</details>

### Exercise 2
<a id="deep-dive-school-bridge-proof-angles-triangle-ex-2"></a>
A learner measures an equilateral triangle and finds three angles of $60^\\circ$. They conclude that every triangle has three $60^\\circ$ angles. Identify the gap, and explain why a right triangle disproves the conclusion. Would measuring one hundred equilateral triangles fix the argument?

<details data-euler-reveal="hint"><summary>Hint 1</summary>
Compare the collection measured with the collection mentioned in “every triangle”.
</details>
<details data-euler-reveal="hint"><summary>Hint 2</summary>
A right triangle has one angle of $90^\\circ$, by definition.
</details>
<details data-euler-reveal="solution"><summary>Full solution</summary>
The measurements concern one particular equilateral triangle, but the conclusion concerns all triangles, including those not equilateral. A right triangle has a $90^\\circ$ angle, which is not $60^\\circ$, so it is a counterexample. Measuring more equilateral triangles does not address other shapes or supply a general implication. The angle-sum theorem still applies to right triangles: their other two angles together sum to $90^\\circ$.
</details>

## Continue into the book

A proof names its setting, uses established facts and explains why its conclusion covers every permitted case. Here a parallel line transfers three triangle angles into a straight angle. Continue with [Points, Lines, Angles and Measurement](/books/euclidean-geometry-trigonometry/points-lines-angles/) and [Parallel Lines and Angle Sums](/books/euclidean-geometry-trigonometry/parallel-lines-angle-sums/) for the full geometry route. The [Introduction to Proof](/books/introduction-to-proof/) is a later continuation for more formal mathematical arguments, rather than preparation required for this first example.
`;export{e as default};