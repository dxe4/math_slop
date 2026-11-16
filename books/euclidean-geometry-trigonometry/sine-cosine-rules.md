
# Sine and Cosine Rules

A right triangle offers a distinguished hypotenuse and three useful side ratios. A general triangle has no such preferred side, but the same geometry can still connect its sides and angles. Comparing area formulas gives the sine rule, while the distance formula gives the cosine rule.

Required preparation is [Coordinates: Lines, Distance and Circles](coordinates-lines-distance-circles.md), [Trigonometric Ratios and the Area Formula](trigonometric-ratios-area.md), and elementary quadratic equations. All triangles in this chapter are Euclidean and nondegenerate. We use $a=BC$, $b=CA$ and $c=AB$, so each lowercase side is opposite its matching uppercase angle.

The rules do more than calculate missing numbers. Their hypotheses tell us which measurements determine a triangle, whether proposed data are possible, and when two different triangles fit the same information. We will keep exact values when convenient and express other angles using inverse functions rather than attach unjustified decimal accuracy.

## The sine rule from one area

**Theorem 13.1 (Sine rule).** In a nondegenerate triangle,
$$
\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}.
$$

*Proof.* The three versions of the area formula give
$$
K=\frac12bc\sin A=\frac12ca\sin B=\frac12ab\sin C.
$$
Divide through by the positive number $abc/2$ to obtain
$$
\frac{\sin A}{a}=\frac{\sin B}{b}=\frac{\sin C}{c}.
$$
Every side and every interior-angle sine is positive. Taking reciprocals is therefore legitimate and gives the stated form. ∎

The matching of side and opposite angle is essential. A ratio such as $a/\sin B$ is not one of the rule's paired quantities unless another symmetry makes those values coincide accidentally. Mark the opposite side on the drawing before substituting.

The rule is especially useful when an opposite side-angle pair is already known. With two angles and one side, first find the remaining angle from the sum of $180^\circ$, then use the known pair to recover each missing side. Three angles alone give no scale and cannot determine the side lengths.

**Example 13.2 (An obtuse triangle from two angles).** Suppose $A=30^\circ$, $B=120^\circ$ and $a=4$ centimetres. Then $C=30^\circ$. The sine rule gives
$$
b=\frac{4\sin120^\circ}{\sin30^\circ}=4\sqrt3,\qquad
c=\frac{4\sin30^\circ}{\sin30^\circ}=4.
$$
The sides opposite the equal thirty-degree angles agree, while the largest side is opposite the largest angle. The triangle inequality $4+4>4\sqrt3$ holds, consistent with a genuine triangle. An obtuse angle does not prevent the sine rule from working, because all three interior-angle sines remain positive.

## A circle interpretation

**Result 13.3 (Circumradius form).** If the circumcircle of triangle $ABC$ has radius $R$, then
$$
a=2R\sin A,
$$
and consequently the common value in the sine rule is $2R$.

*Proof.* Draw the diameter through $B$, ending at $D$. If $C=D$, the chord $BC$ is a diameter and the angle at $A$ is right, so $a=2R=2R\sin A$. Otherwise triangle $BCD$ is right at $C$ by the angle-in-a-semicircle theorem, with hypotenuse $BD=2R$. The inscribed angle at $D$ intercepting chord $BC$ equals $A$ or its supplement, depending on which side of that chord contains the vertices. Those angles have the same sine. Thus $a/(2R)=\sin\angle BDC=\sin A$, proving the formula. ∎

This interpretation explains why the side-angle ratios have length units: they describe a diameter. It also gives a useful check. If the circumradius is smaller than half the longest side, the data are impossible, because no chord can exceed a circle's diameter. The existence and uniqueness of the circumcircle follow from the perpendicular-bisector construction for three noncollinear points.

## The cosine rule from coordinates

**Theorem 13.4 (Cosine rule).** In a nondegenerate triangle,
$$
c^2=a^2+b^2-2ab\cos C.
$$
The analogous formulas follow by cyclically relabelling the vertices.

*Proof.* Translate and rotate the triangle, reflecting across the horizontal axis if needed, so that $C=(0,0)$ and $B=(a,0)$, with $A$ above the horizontal axis. The established meanings of sine and cosine give
$$
A=(b\cos C,b\sin C).
$$
This remains valid when $C$ is obtuse: its horizontal component is then negative. The distance formula gives
$$
\begin{aligned}
c^2&=(a-b\cos C)^2+(b\sin C)^2\\
&=a^2-2ab\cos C+b^2(\cos^2C+\sin^2C)\\
&=a^2+b^2-2ab\cos C.
\end{aligned}
$$
The coordinate change preserves all lengths and angles, so the equality holds in the original position as well. ∎

For a right angle, cosine vanishes and the theorem becomes Pythagoras. For an acute included angle the correction is negative, making the opposite side's square smaller than $a^2+b^2$. For an obtuse included angle the correction is positive. This relation is a precise way to recognise an angle type from three side lengths.

**Example 13.5 (Two sides and their included angle).** Let $a=5$, $b=8$ and $C=60^\circ$. The cosine rule gives
$$
c^2=25+64-80(1/2)=49,
$$
so $c=7$. The positive root is selected because $c$ is a length. Its area is
$$
K=\frac12(5)(8)\sin60^\circ=10\sqrt3.
$$
We can now find the other angles if required. The formula
$$
\cos B=\frac{a^2+c^2-b^2}{2ac}
=\frac{25+49-64}{70}=\frac17
$$
gives $B=\arccos(1/7)$ in the interval $(0^\circ,180^\circ)$, and $A=120^\circ-B$. This order avoids an unnecessary sine ambiguity when recovering an angle.

## Three sides and the triangle inequalities

The cosine rule rearranges to
$$
\cos C=\frac{a^2+b^2-c^2}{2ab}.
$$
With positive $a,b$, the denominator is nonzero. Before taking arccosine, confirm that the sides form a triangle. The strict triangle inequalities are equivalent to
$$
|a-b|<c<a+b.
$$
Equality would make the vertices collinear, and a violated inequality gives no triangle.

**Proposition 13.6 (The inverse-cosine input is valid for genuine side data).** If positive $a,b,c$ satisfy the strict triangle inequalities, then
$$
-1<\frac{a^2+b^2-c^2}{2ab}<1.
$$

*Proof.* Squaring $|a-b|<c<a+b$ gives
$$
(a-b)^2<c^2<(a+b)^2.
$$
Rearrange both inequalities and divide by positive $2ab$ to obtain the displayed double inequality. ∎

Thus a unique interior angle $C=\arccos((a^2+b^2-c^2)/(2ab))$ exists. The other angles can be recovered similarly or from one further rule and the angle sum. A rounded ratio slightly outside $[-1,1]$ should prompt a check of arithmetic and input precision; it should not silently be replaced by a convenient value.

**Example 13.7 (SSS and angle type).** Suppose the sides are $a=7$, $b=8$, $c=9$. They satisfy the strict triangle inequalities. Then
$$
\cos C=\frac{49+64-81}{112}=\frac27,
$$
so $C=\arccos(2/7)$ is acute. Since $c$ is the longest side and $c^2<a^2+b^2$, even the largest angle is acute; therefore the entire triangle is acute. Finding only one acute angle would not normally establish that all angles are acute, but checking the largest one does.

## The ambiguous side-side-angle case

Suppose $A,a,b$ are given and $A$ is opposite $a$, not between the two known sides. The sine rule gives
$$
\sin B=\frac{b\sin A}{a}.
$$
If the right side exceeds one, no triangle exists. If it equals one, $B=90^\circ$ is the only possible interior angle at $B$, and the angle sum must still be checked. If the value lies strictly between zero and one, there are potentially two candidates:
$$
B_1=\arcsin\left(\frac{b\sin A}{a}\right),\qquad
B_2=180^\circ-B_1.
$$
Retain only candidates satisfying $A+B<180^\circ$. The remaining angle and side must be positive.

**Example 13.8 (Two genuine triangles).** Let $A=30^\circ$, $a=6$ and $b=8$. Then $\sin B=2/3$. Put $\beta=\arcsin(2/3)$, an acute angle greater than thirty degrees. The candidates are $B=\beta$ and $B=180^\circ-\beta$. Their remaining angles are $150^\circ-\beta$ and $\beta-30^\circ$, both positive, so both triangles exist.

Their different third sides can be found exactly from the cosine rule at $A$:
$$
36=64+c^2-16c\cos30^\circ,
$$
or $c^2-8\sqrt3c+28=0$. The quadratic formula yields
$$
c=4\sqrt3+2\sqrt5
\quad\text{or}\quad
c=4\sqrt3-2\sqrt5.
$$
Both are positive and lie between $|8-6|=2$ and $8+6=14$, so both fit the triangle inequalities. The larger value is opposite the larger remaining angle. An inverse-sine calculator showing only $\beta$ would omit the second triangle.

The ambiguity is why SSA is not a general congruence criterion. It is not a failure of the sine rule: the rule correctly retains two angles with the same sine. A complete solution must inspect both and reject a branch only for an explicit geometric reason.

## Choosing and checking a method

For SAS information, the cosine rule finds the opposite side directly. For SSS, it gives an angle without supplementary ambiguity because cosine is one-to-one on the interior-angle interval. For ASA or AAS, the sine rule is usually direct. For SSA, begin with a range check and retain every angle-sum-valid branch.

A reliable final check includes the triangle angle sum, positive side lengths, strict triangle inequalities and the association between larger sides and larger opposite angles. These are checks on a deduction, not replacements for the deduction itself. Exact expressions are often clearer than rounded numbers, especially when deciding whether a candidate angle sum is strictly below a straight angle.

The rules describe ideal planar triangles. On the curved surface of the Earth over large distances, different geometric formulas are needed; for a small survey, a flat-plane model may be a reasonable stated approximation. The next chapter develops such modelling choices through bearings and indirect measurement.

## Worked example — Equal area need not mean equal shape

Keep two sides five and seven. With included angle sixty degrees, the cosine rule makes the opposite squared side $25+49-35=39$. With angle one hundred and twenty degrees it becomes $25+49+35=109$. Both are genuine triangles, but their third sides differ.

Their areas agree: supplementary angles have equal sine, so each area is $35\sqrt3/4$. Knowing two sides and their area therefore need not decide the included angle. An area calculation can be correct while leaving an ambiguity that cosine detects. Sine records the height relative to a base, whereas cosine also records which side of a perpendicular projection contains the other vertex. A final description must retain the angle range and branch. Equal area is not a congruence criterion, and choosing the acute inverse-sine value by habit would silently discard the second valid triangle in this example.

## Exercises

### Exercise 13.1
<a id="sine-cosine-rules-ex-1"></a>

In a triangle, $A=45^\circ$, $B=90^\circ$ and $a=5$. Find $C,b,c$.

<details>
<summary>Hint 1</summary>

Use the angle sum before applying a side rule.

</details>
<details>
<summary>Hint 2</summary>

The other forty-five-degree angle has the same opposite side.

</details>
<details>
<summary>Solution</summary>

The remaining angle is $C=45^\circ$, so $c=5$. The sine rule gives $b=5\sin90^\circ/\sin45^\circ=5\sqrt2$. This agrees with the isosceles right-triangle relationship and all lengths are positive.

</details>

### Exercise 13.2
<a id="sine-cosine-rules-ex-2"></a>

Let $a=6$, $b=10$ and included angle $C=60^\circ$. Find $c$.

<details>
<summary>Hint 1</summary>

The two sides meet at the known angle, so use the cosine rule.

</details>
<details>
<summary>Hint 2</summary>

Select the positive square root at the final step.

</details>
<details>
<summary>Solution</summary>

We have $c^2=36+100-120(1/2)=76$. Hence $c=2\sqrt{19}$. Its value is between $|10-6|=4$ and $10+6=16$, consistent with a nondegenerate triangle. The negative root is not a side length.

</details>

### Exercise 13.3
<a id="sine-cosine-rules-ex-3"></a>

A triangle has sides $5,6,7$. Find the cosine of the angle opposite the side of length seven and classify that angle.

<details>
<summary>Hint 1</summary>

Use the largest side as the opposite side in the rearranged rule.

</details>
<details>
<summary>Hint 2</summary>

The sign of cosine distinguishes acute from obtuse.

</details>
<details>
<summary>Solution</summary>

The cosine is $(25+36-49)/(2\cdot5\cdot6)=12/60=1/5$. It is positive, so the angle is acute. Since that angle is the largest, every angle of the triangle is acute.

</details>

### Exercise 13.4
<a id="sine-cosine-rules-ex-4"></a>

Do side lengths $3,4,8$ form a triangle? Explain before applying an inverse function.

<details>
<summary>Hint 1</summary>

Check the strict triangle inequalities first.

</details>
<details>
<summary>Hint 2</summary>

The largest side must be shorter than the sum of the other two.

</details>
<details>
<summary>Solution</summary>

They do not, because $3+4=7<8$. The data fail a necessary geometric condition. Indeed the cosine expression opposite eight would be $(9+16-64)/24=-39/24<-1$, so no real interior angle could be recovered. The geometric check identifies the problem before numerical inverse evaluation.

</details>

### Exercise 13.5
<a id="sine-cosine-rules-ex-5"></a>

Given $A=30^\circ$, $a=3$ and $b=8$, determine how many triangles exist.

<details>
<summary>Hint 1</summary>

The sine rule supplies a candidate value for $\sin B$.

</details>
<details>
<summary>Hint 2</summary>

No real angle has sine greater than one.

</details>
<details>
<summary>Solution</summary>

The equation gives $\sin B=b\sin A/a=8(1/2)/3=4/3$. This is impossible, so there are no triangles. The conclusion follows from an exact range restriction rather than an approximate sketch.

</details>

### Exercise 13.6
<a id="sine-cosine-rules-ex-6"></a>

Given $A=30^\circ$, $a=5$ and $b=10$, find all possible values of $B,C$.

<details>
<summary>Hint 1</summary>

The candidate sine value is an endpoint of its range.

</details>
<details>
<summary>Hint 2</summary>

A sine value of one gives a right angle, not two distinct supplementary candidates.

</details>
<details>
<summary>Solution</summary>

The sine rule gives $\sin B=10(1/2)/5=1$, hence $B=90^\circ$. The remaining angle is $C=60^\circ$. The two usual candidate expressions coincide at ninety degrees, so there is only one triangle rather than two.

</details>

### Exercise 13.7
<a id="sine-cosine-rules-ex-7"></a>

In a triangle with circumradius $R=8$, a side lies opposite $30^\circ$. Find its length.

<details>
<summary>Hint 1</summary>

Use the circumradius version of the sine rule.

</details>
<details>
<summary>Hint 2</summary>

The common side-to-sine ratio is the diameter.

</details>
<details>
<summary>Solution</summary>

The side is $a=2R\sin30^\circ=16(1/2)=8$. The corresponding chord is shorter than the diameter sixteen, as required. Dividing by the radius instead of the diameter would lose the factor two.

</details>

### Exercise 13.8
<a id="sine-cosine-rules-ex-8"></a>

Prove from the cosine rule that an angle $C$ is obtuse exactly when $c^2>a^2+b^2$.

<details>
<summary>Hint 1</summary>

Subtract $a^2+b^2$ from both sides.

</details>
<details>
<summary>Hint 2</summary>

The factor $2ab$ is positive.

</details>
<details>
<summary>Solution</summary>

The rule gives $c^2-a^2-b^2=-2ab\cos C$. Since $a,b>0$, the right side is positive exactly when $\cos C<0$. For an interior triangle angle, that sign occurs exactly when $C$ is obtuse. Equality corresponds to a right angle, and a negative difference to an acute angle.

</details>

### Exercise 13.9
<a id="sine-cosine-rules-ex-9"></a>

Explain why three angles cannot determine all side lengths, although two angles and one side can.

<details>
<summary>Hint 1</summary>

Compare a triangle with an enlarged similar copy.

</details>
<details>
<summary>Hint 2</summary>

A known side supplies a scale for the common sine ratio.

</details>
<details>
<summary>Solution</summary>

Scaling any triangle by a positive factor preserves all three angles while changing every side, so angles alone do not determine size. With two angles, the third follows from the angle sum. A known positive side paired with its opposite angle fixes the common value $a/\sin A$, after which the sine rule determines each remaining side. The scale ambiguity is removed.

</details>

### Exercise 13.10
<a id="sine-cosine-rules-ex-10"></a>

A solver obtains $\sin B=3/5$ and knows $A=100^\circ$. Which candidate values of $B$ may be retained?

<details>
<summary>Hint 1</summary>

Write both supplementary candidates first.

</details>
<details>
<summary>Hint 2</summary>

The sum with $A$ must remain below one hundred eighty degrees.

</details>
<details>
<summary>Solution</summary>

Let $\beta=\arcsin(3/5)$. Since $3/5<1/\sqrt2=\sin45^\circ$, we have $0^\circ<\beta<45^\circ$. Thus the acute candidate $B=\beta$ gives $100^\circ+B<145^\circ<180^\circ$ and is retained. The obtuse candidate $180^\circ-\beta$ is greater than $135^\circ$, so adding $100^\circ$ exceeds a straight angle and it is rejected. The remaining permitted angle is $80^\circ-\beta>0$.

</details>

## Sources

This is original exposition and fresh exercises, following the triangle outline of the local [Geometry and Trigonometry course](../../course-texts/atlas-euclidean-trigonometry-standard.md). Further primary textbook treatments are OpenStax, [Non-right Triangles: Law of Sines](https://openstax.org/books/algebra-and-trigonometry-2e/pages/10-1-non-right-triangles-law-of-sines) and [Non-right Triangles: Law of Cosines](https://openstax.org/books/algebra-and-trigonometry-2e/pages/10-2-non-right-triangles-law-of-cosines). Consulted on 13 November 2026; no passage or exercise has been copied.

## Summary

Comparing the three area formulas proves the sine rule, while coordinates and the distance formula prove the cosine rule. The sine rule pairs each side with its opposite angle and gives the circumdiameter as its common ratio. The cosine rule handles included-angle data and recovers a unique interior angle from three valid sides. Triangle inequalities and inverse-function domains detect impossible data. SSA may produce two supplementary angle candidates, and each needs a positive remaining angle. The next chapter uses these tools in complete triangle solutions, bearings and surveys.
