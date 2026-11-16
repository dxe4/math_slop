var e=`---
parent_id: book-algebra-from-stories
chapter_id: inequalities-and-regions
title: "Inequalities and Regions"
level: foundation
estimated_minutes: 150
license: CC BY-SA 4.0
---

# Inequalities and Regions {#section-1-inequalities-and-regions}

<a id="section-1-from-equality-to-inequality"></a>
## From equality to inequality {#section-3-from-equality-to-inequality}

In **Equations with Two Unknowns** we found exact meeting points: the precise number of gigabytes where two phone plans cost the same, the exact dimensions of a rectangle with a given perimeter. But many real decisions do not require exact equality. A shopper has at most £50 to spend; a recipe needs at least 200 grams of flour; a temperature must stay below 30 degrees. These conditions are **inequalities**.

An inequality uses one of four symbols:
- $<$ means "less than"
- $>$ means "greater than"
- $\\leq$ means "less than or equal to"
- $\\geq$ means "greater than or equal to"

<a id="section-11-solving-linear-inequalities"></a>
## Solving linear inequalities {#section-13-solving-linear-inequalities}

The rules for inequalities are almost the same as for equations, with one crucial exception.

**Worked example.** Solve $3x + 5 < 20$.

Subtract 5 from both sides:

$$3x < 15.$$

Divide by 3:

$$x < 5.$$

The solution is all numbers strictly less than 5.

**The reversal rule.** When we multiply or divide both sides of an inequality by a **negative** number, we must reverse the inequality symbol.

**Worked example.** Solve $-2x + 7 \\geq 3$.

Subtract 7:

$$-2x \\geq -4.$$

Divide by $-2$ and reverse:

$$x \\leq 2.$$

Check with $x = 0$: $-2(0) + 7 = 7 \\geq 3$, which is true. Check with $x = 3$: $-2(3) + 7 = 1 \\geq 3$, which is false. The solution $x \\leq 2$ is correct.

**Misconception.** Forgetting to reverse the symbol when dividing by a negative number is one of the most common algebra errors. If we had kept $\\geq$ in the example above, we would have obtained $x \\geq 2$, which is the opposite of the truth.

<a id="section-43-inequalities-on-the-number-line"></a>
## Inequalities on the number line {#section-45-inequalities-on-the-number-line}

The solution $x < 5$ is represented on a number line by an open circle at 5 and an arrow extending to the left. The open circle shows that 5 itself is not included. For $x \\leq 5$ we use a closed circle.

<a id="section-47-two-variable-inequalities-and-the-plane"></a>
## Two-variable inequalities and the plane {#section-49-two-variable-inequalities-and-the-plane}

Consider the inequality $y > 2x + 1$. The line $y = 2x + 1$ divides the plane into two **half-planes**. Points above the line satisfy $y > 2x + 1$; points below satisfy $y < 2x + 1$; points on the line satisfy equality.

To graph $y > 2x + 1$, draw the line $y = 2x + 1$ as a **dashed line** (because points on the line are not included) and shade the region above it.

For $y \\geq 2x + 1$, draw a **solid line** (because equality is permitted) and shade above.

<a id="section-55-worked-example-graphing-a-budget-constraint"></a>
### Worked example: graphing a budget constraint {#section-57-worked-example-graphing-a-budget-constraint}

A student has £30 to spend on notebooks at £4 each and pens at £2 each. Let $n$ be notebooks and $p$ be pens. The budget constraint is

$$4n + 2p \\leq 30.$$

We can simplify by dividing by 2:

$$2n + p \\leq 15.$$

Rewrite as $p \\leq 15 - 2n$. The boundary line is $p = 15 - 2n$. Since $n$ and $p$ must be nonnegative, we also require $n \\geq 0$ and $p \\geq 0$. The feasible region is a triangle bounded by the axes and the line.

Test the point $(2, 5)$: $4(2) + 2(5) = 8 + 10 = 18 \\leq 30$. This purchase is affordable. Test $(5, 6)$: $4(5) + 2(6) = 20 + 12 = 32 > 30$. This purchase exceeds the budget.

<a id="section-69-systems-of-inequalities"></a>
## Systems of inequalities {#section-71-systems-of-inequalities}

A **system of inequalities** requires several conditions to hold simultaneously. Each inequality defines a half-plane, and the solution is the **intersection** of all half-planes: the region where every condition is satisfied.

**Example.** Graph the system

$$y \\geq x + 1,$$
$$y \\leq -x + 5,$$
$$x \\geq 0.$$

The first inequality shades above the line $y = x + 1$. The second shades below $y = -x + 5$. The third restricts to the right of the $y$-axis. The feasible region is a triangle with vertices where the boundary lines intersect.

Find the vertices:
- Intersection of $y = x + 1$ and $y = -x + 5$: $x + 1 = -x + 5$, so $2x = 4$, $x = 2$, $y = 3$. Vertex: $(2, 3)$.
- Intersection of $y = x + 1$ and $x = 0$: $y = 1$. Vertex: $(0, 1)$.
- Intersection of $y = -x + 5$ and $x = 0$: $y = 5$. Vertex: $(0, 5)$.

The feasible region is the triangle with vertices $(0, 1)$, $(0, 5)$, and $(2, 3)$.

<a id="section-88-common-errors"></a>
## Common errors {#section-90-common-errors}

**Error: shading the wrong side.** After drawing the boundary line, always test a point not on the line. The origin $(0, 0)$ is convenient when it is not on the boundary.

**Error: using the wrong line style.** Strict inequalities ($<$ or $>$) need dashed lines; inclusive inequalities ($\\leq$ or $\\geq$) need solid lines.

**Error: ignoring non-negativity constraints.** In applied problems, negative quantities often make no sense. Forgetting $x \\geq 0$ and $y \\geq 0$ can produce impossible solutions.

<a id="section-96-practice-exercises"></a>
## Order rules have reasons {#section-267-order-rules-have-reasons}

A solution to an inequality is a collection of allowed inputs, not usually one number. The statement $x<5$ means that every allowed real input below $5$ works and that $5$ itself does not. A few checks can reveal a wrong proposed answer, but they do not replace the argument that identifies all the inputs.

The arithmetic rules can be explained using positive differences. If $u<v$, then $v-u$ is positive. After adding the same real number $c$ to both sides, the difference is still

$$(v+c)-(u+c)=v-u>0.$$

Thus adding or subtracting the same quantity preserves the order. If $h>0$, multiplying the positive difference by $h$ gives $hv-hu>0$, so $hu<hv$. Division by a positive number is multiplication by its positive reciprocal and has the same behaviour.

For a negative multiplier, write it as $-h$ with $h>0$. The positive difference between $-hu$ and $-hv$ is

$$(-hu)-(-hv)=h(v-u)>0.$$

This time $-hu>-hv$. That is the reason for reversing the inequality. The proof works for any real $u,v$ with $u<v$, not only for two chosen numbers on a diagram. The same reasoning covers inclusive inequalities, with equality retained when the difference is zero.

Zero is a separate case. Multiplying $2<5$ by zero produces $0<0$, which is false. Multiplying $2\\le5$ by zero produces the true statement $0\\le0$, but that new statement has forgotten the original comparison. Multiplication by zero is not a reversible inequality-solving step. Before dividing, name a nonzero divisor and know its sign.

<a id="section-283-several-bounds-on-one-input"></a>
## Several bounds on one input {#section-285-several-bounds-on-one-input}

A chain such as

$$2\\le \\frac{3t+1}{2}<8$$

contains two conditions joined by “and.” The middle quantity must be at least $2$ and also below $8$. We can apply the same justified operation to all three parts. Multiplying by positive $2$ gives $4\\le3t+1<16$; subtracting $1$ gives $3\\le3t<15$; dividing by positive $3$ gives

$$1\\le t<5.$$

The left endpoint is included and the right endpoint is excluded. At $t=1$, the middle expression is $2$, which the original inclusive sign permits. At $t=5$, it is $8$, which the original strict sign rejects. This endpoint check explains the interval notation $[1,5)$: the square bracket includes $1$, while the round bracket excludes $5$.

We may instead solve the two component inequalities separately and take their intersection. One gives $t\\ge1$ and the other gives $t<5$. Keeping inputs that satisfy both gives the same answer. If a negative multiplication makes a chain hard to read, this separate-condition method is often clearer.

“And” and “or” must not be exchanged. The statement $t<-2$ or $t\\ge3$ allows either part, giving two separated pieces of the number line. The statement $t<-2$ and $t\\ge3$ has no solution: no real number is simultaneously below $-2$ and at least $3$. The word “or” here is inclusive; an input is allowed if it satisfies at least one condition.

An endpoint can belong to one piece without belonging to the other. For $t\\le1$ or $t>1$, every real number is allowed: the first condition includes $1$, and the second includes everything above it. For $t<1$ or $t>1$, the value $1$ is missing. Sketches can help, but stating the endpoint permissions makes the difference precise without relying on a picture.

<a id="section-301-dividing-by-a-quantity-whose-sign-is-unknown"></a>
## Dividing by a quantity whose sign is unknown {#section-303-dividing-by-a-quantity-whose-sign-is-unknown}

It is tempting to divide by whatever is next to an unknown. That is unsafe when the divisor might be positive, negative or zero. Suppose $q$ is a fixed real coefficient and we want to solve $qx\\le6$ for $x$. There are three cases.

If $q>0$, division preserves the order, so $x\\le6/q$. If $q<0$, it reverses the order, so $x\\ge6/q$. If $q=0$, the original condition is $0\\le6$, which is true for every real $x$. Writing $x\\le6/q$ without a condition would both miss the reversal and attempt division by zero.

Changing the right side matters in the zero case. The condition $0x\\le-6$ is false for every real $x$, so it has no solutions. A coefficient disappearing from a calculation does not automatically mean that all inputs work; read the remaining numerical statement.

We can sometimes avoid case splitting altogether. To solve $2x\\le x$, subtract $x$ from both sides and obtain $x\\le0$. Dividing the original inequality by $x$ would require separate positive, negative and zero cases. For positive $x$, it would give the false statement $2\\le1$. For negative $x$, it would give the true statement $2\\ge1$ after reversal. At $x=0$, the original equality holds, though division is undefined. Subtraction handles all three cases at once.

These examples explain a useful choice of method: prefer an operation whose permission is already known. Addition and subtraction of a defined expression have no sign restriction. Division needs a nonzero divisor, and an inequality also needs its sign. Keeping these conditions visible is part of solving, not an optional comment after the answer.

<a id="section-313-reading-a-half-plane-without-a-picture"></a>
## Reading a half-plane without a picture {#section-315-reading-a-half-plane-without-a-picture}

For the inequality $3x+2y\\le12$, subtract $3x$ and divide by positive $2$:

$$y\\le6-\\frac32x.$$

For each fixed horizontal coordinate $x$, the allowed vertical coordinates lie at or below the value $6-\\frac32x$. The equality $y=6-\\frac32x$ is the boundary. This describes the entire half-plane in words, including which side and which boundary points are allowed.

A table can carry some of the same information.

| Fixed $x$ | Boundary height $6-\\frac32x$ | Allowed $y$ at that $x$ |
| --- | --- | --- |
| $0$ | $6$ | $y\\le6$ |
| $2$ | $3$ | $y\\le3$ |
| $4$ | $0$ | $y\\le0$ |

The table gives three vertical slices. The formula gives all slices, including fractional and negative $x$. Three rows alone would not define the entire half-plane. This is the same distinction between sample evidence and a general rule that appeared in **Graphing Stories**.

If we changed $\\le$ to $<$, the formula would describe points strictly below the same boundary, with every boundary point excluded. A solid or dashed line is a visual reminder of that distinction; the inequality itself supplies the exact rule.

Not every boundary is a graph of $y$ as a function of $x$. The inequality $x\\ge2$ describes the half-plane on and to the right of a vertical line. Its truth does not depend on $y$. At the other extreme, $0x+0y\\le3$ allows every point, while $0x+0y\\le-1$ allows none. Do not force either constant condition into a line-drawing procedure.

<a id="section-335-a-complete-intersection-with-four-corners"></a>
## A complete intersection with four corners {#section-337-a-complete-intersection-with-four-corners}

Consider a deliberately simple resource model. Let $x$ and $y$ be amounts of two materials, measured in kilograms. Require at least $1$ kilogram of the first material and no negative amount of either material. Suppose the total amount can be at most $6$ kilograms and a second resource, measured in defined resource units, permits at most $8$ units. Each kilogram of the first material uses $2$ resource units and each kilogram of the second uses $1$. The model is

$$x\\ge1,\\qquad y\\ge0,\\qquad x+y\\le6,\\qquad 2x+y\\le8.$$

Here amounts may be real numbers. We assume constant resource requirements and exact limits for this finite mathematical example. The equations do not establish that a real production process follows those assumptions.

To describe the whole region, first find the allowed horizontal range. Since $y\\ge0$ and $2x+y\\le8$, we must have $x\\le4$. Together with $x\\ge1$, this gives $1\\le x\\le4$. For each such $x$, the remaining conditions require

$$0\\le y\\le6-x,\\qquad y\\le8-2x.$$

We must use the lower of the two upper bounds. Their difference is $(8-2x)-(6-x)=2-x$. When $1\\le x\\le2$, the bound $6-x$ is lower or equal. When $2\\le x\\le4$, the bound $8-2x$ is lower or equal. Therefore the exact vertical slices are

$$0\\le y\\le6-x\\quad(1\\le x\\le2),$$

$$0\\le y\\le8-2x\\quad(2\\le x\\le4).$$

This proves which points are feasible, rather than merely guessing from shaded lines. Any point obeying one of these slice descriptions satisfies every original condition; conversely, every original feasible point must obey one of the descriptions.

The boundary turns at four corners: $(1,0)$, $(4,0)$, $(2,4)$ and $(1,5)$, listed in order around it. The bottom edge has $y=0$. The right sloping edge has $2x+y=8$, the other sloping edge has $x+y=6$, and the left edge has $x=1$. All four corners pass all the inequalities, and all boundary edges are included because the signs are inclusive.

Here is a table of the allowed slices.

| $x$ | Full allowed interval for $y$ |
| --- | --- |
| $1$ | $0\\le y\\le5$ |
| $2$ | $0\\le y\\le4$ |
| $3$ | $0\\le y\\le2$ |
| $4$ | $y=0$ |

The earlier slice formulas specify the points between these rows. At $x=3/2$, for example, the first formula permits every $y$ from $0$ to $9/2$. The geometry is a connected region, not just the four slices displayed in the table.

<a id="section-368-corners-exclusions-and-checks"></a>
## Corners, exclusions and checks {#section-370-corners-exclusions-and-checks}

Finding intersections is only one part of a feasible-region calculation. An intersection of two boundary lines might violate a third condition. In the resource model, the intersection of $x=1$ and $2x+y=8$ is $(1,6)$. It passes those two equalities but fails $x+y\\le6$, because $1+6=7$. It is not a corner of the feasible region.

Every proposed corner must therefore be checked against every original inequality. The slice description provides an additional safeguard: it explains how the whole boundary fits together and why no further piece has been missed. A list of plotted points without those checks can describe the wrong region.

Changing a single sign can change which edge is included. If the resource limit becomes $2x+y<8$, points on that resource boundary are excluded. In particular, $(4,0)$ and $(2,4)$ are no longer allowed. The point $(1,5)$ remains allowed because its resource use is $7<8$. The boundary lines have not moved, but the new problem does not include every point on that outline.

Other changes can make an intersection empty. Asking for both $x+y\\le6$ and $x+y\\ge7$ is impossible, since the same total cannot be at most $6$ and at least $7$. By contrast, adding $x+y\\le10$ to $x+y\\le6$ changes nothing: the original upper bound already guarantees the new one. A condition can be inconsistent with the others, redundant, or genuinely restrictive.

<a id="section-378-from-spending-limits-to-guaranteed-choices"></a>
## From spending limits to guaranteed choices {#section-380-from-spending-limits-to-guaranteed-choices}

Here is a complete one-variable model connecting the interval work to a count. In this invented practice scenario, a club buys identical kits at £3.50 each and pays one delivery charge of £4. A voucher may be used only when the total is at least £25, and the club cannot spend more than £39. Assume these prices are fixed, all charges are included and kits must be bought whole.

If $k$ is the number of kits, the cost is $7k/2+4$ pounds. Both rules must hold:

$$25\\le\\frac{7k}{2}+4\\le39.$$

Subtracting $4$ throughout gives $21\\le7k/2\\le35$. Multiplying by the positive number $2/7$ gives $6\\le k\\le10$. Intersecting that real interval with the whole-number domain leaves exactly $k=6,7,8,9,10$. Six kits cost £25 and ten cost £39, so both endpoints are permitted. Five kits cost £21.50 and fail the minimum; eleven cost £42.50 and fail the maximum.

The lower bound and upper bound answer different questions. An order can be affordable but too small for the voucher, or large enough for the voucher but unaffordable. Listing one order that passes both does not identify all of them. Reversible algebra finds the full interval; the integer domain converts it into a complete finite list.

A limit can also need to hold despite uncertain inputs. Suppose a storage box may carry at most $10$ kilograms. Each kit's mass is known only to lie from $0.9$ to $1.1$ kilograms, including the endpoints. Different kits may have different masses within those bounds. How many whole kits can be placed in the box with a guarantee that the mass limit is met?

For $k$ kits, the largest possible total mass is $1.1k$ kilograms. Requiring $1.1k\\le10$ gives $k\\le100/11$. Therefore at most nine whole kits can be guaranteed safe under this model. Nine have total mass at most $9.9$ kilograms. Ten cannot be guaranteed: ten kits of $1.1$ kilograms each satisfy the supplied individual bounds but weigh $11$ kilograms together.

Ten kits might fit if they are lighter; for example, ten kits of $0.9$ kilograms weigh $9$ kilograms. That is a possible arrangement, not a guarantee for every allowed arrangement. We did not assume an average mass, a probability distribution or independence. We used only the supplied upper bound and exhibited a permitted counterexample to the stronger claim.

The distinction is a useful final check on an inequality model: are we finding a choice that works for a stated input, a choice that can work for some allowed input, or a choice that must work for all of them? The calculations can look similar while the promises differ.

<a id="section-398-whole-objects-occupy-only-some-feasible-points"></a>
## Whole objects occupy only some feasible points {#section-400-whole-objects-occupy-only-some-feasible-points}

Now reinterpret the same numerical constraints as a crate plan. Let $x$ and $y$ count whole crates rather than kilograms. Keep $x\\ge1$, $y\\ge0$, $x+y\\le6$ and $2x+y\\le8$, but add that both counts are integers. The continuous region is still a useful outer boundary, while actual plans are the integer points inside or on it.

We can enumerate them completely using the four possible integer $x$-values. For $x=1$, $y$ may be $0,1,2,3,4,5$: six plans. For $x=2$, it may be $0,1,2,3,4$: five plans. For $x=3$, it may be $0,1,2$: three plans. For $x=4$, only $y=0$ works: one plan. There are $6+5+3+1=15$ plans, with no others because the horizontal bound permits no other integer $x$.

The real point $(2.6,2.6)$ satisfies the continuous inequalities: the total is $5.2$ and resource use is $7.8$. It is not a whole-crate plan. Rounding both coordinates to $(3,3)$ does not repair it; that plan uses $2(3)+3=9$ resource units and exceeds the limit. Rounding a mathematical solution requires a new original-constraint check.

This distinction applies to the notebook-and-pen diagram earlier in the chapter. A triangular shaded region describes the continuous budget inequalities. When notebooks and pens must be purchased whole, only its nonnegative integer points describe purchases. In the crop model, by contrast, tonnes can be fractional under the stated idealization. A diagram alone does not decide the domain.

For the crate plan, the greatest possible total number of crates is $6$: the constraint $x+y\\le6$ supplies an upper bound, and $(1,5)$ and $(2,4)$ both attain it. We did not prove this by assuming every best plan must be a corner. We supplied a bound valid for every allowed plan and exhibited plans that reach it. This elementary bound-and-example argument will remain useful even when a picture is unavailable.

<!-- COMM-03-AS-W3-05:exposition:end -->

<!-- COMM-03-AS-W3-05:questions:start -->

<a id="section-414-practice-extensions"></a>

## Summary

<a id="section-259-looking-back-and-forward"></a>
This chapter extended equations to inequalities. We learned to solve one-variable inequalities (remembering to reverse the symbol when multiplying or dividing by a negative number), graph two-variable inequalities as half-planes, and find the intersection of several constraints.

In the next chapter, **Formulas from Science**, we will apply these skills to formulas drawn from physics, chemistry, and everyday measurement. We will rearrange formulas, substitute values, and interpret the results in scientific context.

<!-- COMM-03-AS-W3-05:exposition:start -->

<a id="section-265-order-rules-have-reasons"></a>

<a id="section-556-summary"></a>
An inequality describes a set of permitted values. Preserve strictness at endpoints, reverse order only when a negative multiplier requires it, and distinguish a real feasible region from its allowed whole-count points.

**Where next.** Continue with [Algebra and Functions](/books/library-book-algebra-and-functions/) to study expressions, equations and functions at the next level. Use its stated preparation to choose your starting chapter.

<!-- Linked resource: library:book-algebra-and-functions -->

## Exercises {#section-98-practice-exercises}

<a id="section-98-exercise-1"></a>
### Exercise 1 {#section-100-exercise-1}
Solve $5x - 3 \\leq 17$ and show the solution on a number line.

<details>
<summary>Hint 1</summary>

**Hint.** Undo the subtraction before the positive multiplication.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Division by a positive number preserves order; decide whether the boundary point is included.

</details>

<details>
<summary>Solution</summary>

**Solution.** Add 3: $5x \\leq 20$. Divide by 5: $x \\leq 4$. The solution is all real numbers less than or equal to 4.

</details>

<a id="section-121-exercise-2"></a>
### Exercise 2 {#section-123-exercise-2}
Solve $-3x + 8 > 2$.

<details>
<summary>Hint 1</summary>

**Hint.** First remove the additive constant.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Dividing by the negative coefficient reverses the inequality; test a value on your proposed side.

</details>

<details>
<summary>Solution</summary>

**Solution.** Subtract 8: $-3x > -6$. Divide by $-3$ and reverse: $x < 2$.

</details>

<a id="section-144-exercise-3"></a>
### Exercise 3 {#section-146-exercise-3}
A café sells tea at £2 and cake at £3. You have £12. Write an inequality for the number of teas $t$ and cakes $c$ you can buy, and list three valid combinations.

<details>
<summary>Hint 1</summary>

**Hint.** Total the price contributions of each type of purchase.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Keep both counts nonnegative and check each proposed combination against the budget.

</details>

<details>
<summary>Solution</summary>

**Solution.** The inequality is $2t + 3c \\leq 12$ with $t \\geq 0$ and $c \\geq 0$. Valid combinations include $(t, c) = (0, 4)$, $(3, 2)$, and $(6, 0)$. Check: $2(3) + 3(2) = 6 + 6 = 12$.

</details>

<a id="section-167-exercise-4"></a>
### Exercise 4 {#section-169-exercise-4}
Graph the system $y \\geq 2x - 3$ and $y \\leq -x + 6$. Find the vertices of the feasible region assuming $x \\geq 0$ and $y \\geq 0$.

<details>
<summary>Hint 1</summary>

**Hint.** Intersect boundary lines in pairs and retain only feasible intersections.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Include intersections with the coordinate axes, and test each candidate against every inequality.

</details>

<details>
<summary>Solution</summary>

**Solution.** The boundary lines are $y = 2x - 3$ and $y = -x + 6$. Their intersection satisfies $2x - 3 = -x + 6$, so $3x = 9$, $x = 3$, $y = 3$. The feasible region is bounded by:
- $(0, 0)$: intersection of $x = 0$ and $y = 0$, but we must check constraints. At $(0, 0)$: $0 \\geq -3$ (true) and $0 \\leq 6$ (true). So $(0, 0)$ is feasible.
- $(0, 6)$: where $y = -x + 6$ meets $x = 0$.
- $(1.5, 0)$: where $y = 2x - 3$ meets $y = 0$, giving $x = 1.5$.
- $(3, 3)$: intersection of the two sloped lines.

The feasible region is a quadrilateral with vertices $(0, 0)$, $(0, 6)$, $(3, 3)$, and $(1.5, 0)$.

![Coordinate graph of the four feasible-region vertices, bounded by the nonnegative axes and the lines y equals 2x minus 3 and y equals negative x plus 6](figures/feasible-region-two-inequalities.svg)

The diagram uses $0\\le x\\le3$ and $0\\le y\\le6$. Its shaded quadrilateral follows the vertices in boundary order: $(0,0)$, $(0,6)$, $(3,3)$, and $(1.5,0)$. The upper sloping edge is $y=-x+6$; the lower sloping edge from $(1.5,0)$ to $(3,3)$ is $y=2x-3$. The other two edges lie on the nonnegative coordinate axes.

</details>

<a id="section-200-exercise-5"></a>
### Exercise 5 {#section-202-exercise-5}
Explain why multiplying an inequality by a negative number reverses the direction.

<details>
<summary>Hint 1</summary>

**Hint.** Use a number-line example before making the general statement.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Multiplication by a negative number reverses the order of two distinct points; explain that reflection.

</details>

<details>
<summary>Solution</summary>

**Solution.** Consider $3 < 5$. On the number line, 3 lies to the left of 5. Multiply by $-1$: $-3$ and $-5$. Now $-5$ lies to the left of $-3$, so $-3 > -5$. The order has reversed. Multiplication by a negative number reflects the number line across zero, turning left into right and right into left.

</details>

<a id="section-223-exercise-6"></a>
### Exercise 6 {#section-225-exercise-6}
A farmer has at most 40 hectares of land. Wheat requires 2 hectares per tonne and barley requires 1 hectare per tonne. The farmer must grow at least 5 tonnes of wheat and at least 10 tonnes of barley. Write the system of inequalities and describe the feasible region.

<details>
<summary>Hint 1</summary>

**Hint.** Translate land use and minimum yields into separate constraints.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Intersect each minimum-yield line with the land boundary and test the resulting vertices.

</details>

<details>
<summary>Solution</summary>

**Solution.** Let $w$ be tonnes of wheat and $b$ tonnes of barley. The constraints are:

$$2w + b \\leq 40 \\quad \\text{(land)},$$
$$w \\geq 5,$$
$$b \\geq 10.$$

The feasible region is bounded below by $w = 5$ and $b = 10$, and above by $2w + b = 40$. The vertices are:
- $(5, 10)$: minimum of both crops.
- $(5, 30)$: where $w = 5$ meets the land boundary ($2(5) + b = 40$, so $b = 30$).
- $(15, 10)$: where $b = 10$ meets the land boundary ($2w + 10 = 40$, so $w = 15$).

Any point inside or on the boundary of this triangle represents a valid planting plan.

</details>

<a id="section-257-looking-back-and-forward"></a>

<a id="section-416-practice-extensions"></a>
### Exercise 7 — AS-05-E07 — keep the endpoint permissions {#section-420-as-05-e07-keep-the-endpoint-permissions}

Solve the compound inequality $-2<3-2t\\le7$ over the real numbers. Give interval notation and check both endpoints in the original chain. Separately describe $t<-3$ or $t\\ge1$, and explain why replacing “or” by “and” changes the answer.

<details>
<summary>Hint 1</summary>

**Hint.** Separate the two inequalities in the chain before dividing by a negative coefficient.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Intersect their solution sets, then test endpoint inclusion in the original chain; compare union with intersection for the separate statement.

</details>



<a id="section-437-as-05-e08-the-sign-of-a-coefficient-is-part-of-the-prob"></a>
### Exercise 8 — AS-05-E08 — the sign of a coefficient is part of the problem {#section-439-as-05-e08-the-sign-of-a-coefficient-is-part-of-the-prob}

For a fixed real coefficient $q$, solve $qx\\le-6$ for real $x$. Treat $q>0$, $q<0$ and $q=0$ separately. Check the cases $q=2$ and $q=-2$ with one boundary value each. Explain why the zero case differs from the zero case of $qx\\le6$.

<details>
<summary>Hint 1</summary>

**Hint.** Determine the sign of q before isolating x.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Positive and negative q give opposite inequality directions; q equal to zero gives a constant comparison instead.

</details>



<a id="section-456-as-05-e09-reconstruct-a-changed-resource-limit"></a>
### Exercise 9 — AS-05-E09 — reconstruct a changed resource limit {#section-458-as-05-e09-reconstruct-a-changed-resource-limit}

Crate counts $x,y$ are nonnegative integers satisfying $x\\ge1$, $x+y\\le6$ and the changed limit $2x+y\\le9$. First allow real coordinates and derive the horizontal range and the two parts of the upper boundary for $y$. Then list the allowed integer values of $y$ at each possible integer $x$ and count the plans. Find the greatest possible $x+y$ with an argument valid for every allowed plan. Finally, check the continuous point $(3.6,1.6)$ and explain why rounding it to $(4,2)$ does not give an allowed whole-crate plan.

<details>
<summary>Hint 1</summary>

**Hint.** For a fixed x, compare the two upper bounds on y.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Find where those bounds cross, then list integer heights at each allowed integer x and test the proposed rounding.

</details>

<!-- COMM-03-AS-W3-05:questions:end -->

<!-- COMM-03-AS-W3-05:solutions:start -->

<a id="section-477-solutions-to-practice-extensions"></a>

<a id="section-530-a-further-practice-problem"></a>
<a id="section-530-exercise-10"></a>
### Exercise 10 {#section-532-exercise-10}
<a id="inequalities-and-regions-ex-10"></a>

A delivery model charges £5 per order and £2 per parcel, for positive whole parcel counts $n$. Find every allowed $n$ whose bill is at most £17. Then find every allowed $n$ whose bill is strictly less than £17. Explain the difference by checking the endpoint count.

<details>
<summary>Hint 1</summary>

**Hint.** Translate at most and strictly less than with different inequality symbols.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Subtract the fixed charge and divide by the positive parcel price before enforcing whole counts.

</details>
<details>
<summary>Solution</summary>

**Solution.** The supplied total is $5+2n$ pounds. At most £17 means $5+2n\\le17$, hence $2n\\le12$ and $n\\le6$. With positive whole counts, the possibilities are $n=1,2,3,4,5,6$. Strictly less than £17 means $5+2n<17$, hence $n<6$; the allowed counts are $1,2,3,4,5$. The endpoint count six gives $5+2(6)=17$, so it belongs to the first set and not the second. Both transformations divide by a positive number, so neither reverses the inequality.

</details>

<a id="section-554-summary"></a>

## Solutions {#section-479-solutions-to-practice-extensions}

<a id="section-479-as-05-e07-solution"></a>
### AS-05-E07 — solution {#section-481-as-05-e07-solution}

<details>
<summary>Solution</summary>

**Solution.**

The first comparison $-2<3-2t$ gives $-5<-2t$, hence $t<5/2$ after division by $-2$ and reversal. The second comparison $3-2t\\le7$ gives $-2t\\le4$, hence $t\\ge-2$. Both must hold, so the answer is $[-2,5/2)$.

At $t=-2$, the middle expression is $7$, giving $-2<7\\le7$, which is true. At $t=5/2$, the middle expression is $-2$, giving the false strict comparison $-2<-2$; that endpoint is excluded.

The separate “or” condition gives the union $(-\\infty,-3)\\cup[1,\\infty)$. An input may satisfy either part. With “and,” it would need to be both below $-3$ and at least $1$, so there would be no solution.

</details>

<a id="section-494-as-05-e08-solution"></a>
### AS-05-E08 — solution {#section-496-as-05-e08-solution}

<details>
<summary>Solution</summary>

**Solution.**

For $q>0$, dividing by the positive coefficient gives $x\\le-6/q$. For $q<0$, dividing reverses the sign and gives $x\\ge-6/q$. For $q=0$, the condition is $0\\le-6$, which is false, so there are no real solutions.

At $q=2$, the answer is $x\\le-3$, and the boundary check gives $2(-3)=-6$. At $q=-2$, it is $x\\ge3$, and $(-2)(3)=-6$ checks the boundary. The inequality $qx\\le6$ instead becomes the true condition $0\\le6$ when $q=0$, so every real $x$ is then allowed. Neither zero case permits division by $q$.

</details>

<a id="section-507-as-05-e09-solution"></a>
### AS-05-E09 — solution {#section-509-as-05-e09-solution}

<details>
<summary>Solution</summary>

**Solution.**

For real coordinates, $y\\ge0$ and $2x+y\\le9$ give $x\\le9/2$, so $1\\le x\\le9/2$. The upper bounds on $y$ are $6-x$ and $9-2x$. Their difference is $3-x$, so the full allowed slices are $0\\le y\\le6-x$ for $1\\le x\\le3$ and $0\\le y\\le9-2x$ for $3\\le x\\le9/2$.

For integer counts, $x$ can be $1,2,3,4$. At $x=1$, $y=0,1,2,3,4,5$; at $x=2$, $y=0,1,2,3,4$; at $x=3$, $y=0,1,2,3$; and at $x=4$, $y=0,1$. There are $6+5+4+2=17$ plans.

The constraint $x+y\\le6$ bounds every allowed total. The plans $(1,5),(2,4),(3,3)$ satisfy all constraints and attain that bound, so the greatest total is $6$. In particular, the previously rejected rounded point $(3,3)$ now passes the changed resource limit; its earlier verdict must not be copied unchanged.

The real point $(3.6,1.6)$ has total $5.2$ and resource use $2(3.6)+1.6=8.8$, so it satisfies the continuous inequalities. The rounded pair $(4,2)$ has total $6$ but resource use $10>9$. It is not an allowed plan.

</details>

<!-- COMM-03-AS-W3-05:solutions:end -->



<a id="section-528-a-further-practice-problem"></a>
`;export{e as default};