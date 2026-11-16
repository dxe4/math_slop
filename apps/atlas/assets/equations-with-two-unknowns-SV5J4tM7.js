var e=`---
parent_id: book-algebra-from-stories
chapter_id: equations-with-two-unknowns
title: "Equations with Two Unknowns"
level: foundation
estimated_minutes: 150
license: CC BY-SA 4.0
---

# Equations with Two Unknowns {#section-1-equations-with-two-unknowns}

<a id="section-1-when-one-letter-is-not-enough"></a>
## When one letter is not enough {#section-3-when-one-letter-is-not-enough}

In **Graphing Stories** we drew single lines on a coordinate plane. Each line came from one equation with two variables, such as $y = 2x + 3$. That equation has infinitely many solutions: every point on the line satisfies it. But many real questions involve two conditions at once. A shopper may have a budget constraint and a minimum quantity requirement; a cyclist may need to match a distance and a time. When two equations describe the same situation, we call them a **system of simultaneous equations**.

<a id="section-5-systems-and-their-meaning"></a>
## Systems and their meaning {#section-7-systems-and-their-meaning}

Consider two phone plans. Plan A costs £10 per month plus £2 per gigabyte. Plan B costs £4 per gigabyte with no fixed fee. Let $g$ be gigabytes used and $C$ the monthly cost in pounds. The plans are

$$C = 2g + 10 \\quad \\text{(Plan A)},$$
$$C = 4g \\quad \\text{(Plan B)}.$$

Each equation is a line. The point where the lines cross is the solution to the system: the single pair $(g, C)$ that satisfies both equations.

<a id="section-14-solving-by-substitution"></a>
## Solving by substitution {#section-16-solving-by-substitution}

**Worked example (comparing the two phone plans).**

Since both right-hand sides equal $C$, we can set them equal to each other:

$$2g + 10 = 4g.$$

Subtract $2g$ from both sides:

$$10 = 2g.$$

Divide by 2:

$$g = 5.$$

Now substitute $g = 5$ into either original equation. Using Plan B:

$$C = 4 \\times 5 = 20.$$

At 5 gigabytes, both plans cost £20. Below 5 gigabytes, Plan B is cheaper; above 5 gigabytes, Plan A is cheaper.

This method is called **substitution**: express one variable from one equation and substitute into the other.

<a id="section-38-worked-example-substitution-with-different-variables"></a>
### Worked example: substitution with different variables {#section-40-worked-example-substitution-with-different-variables}

Solve the system

$$3x + 2y = 12,$$
$$x - y = 1.$$

From the second equation, $x = y + 1$. Substitute into the first:

$$3(y + 1) + 2y = 12,$$
$$3y + 3 + 2y = 12,$$
$$5y + 3 = 12,$$
$$5y = 9,$$
$$y = \\frac{9}{5} = 1.8.$$

Then $x = 1.8 + 1 = 2.8$. Check in the first equation:

$$3(2.8) + 2(1.8) = 8.4 + 3.6 = 12.$$

The solution is $(x, y) = (2.8, 1.8)$.

<a id="section-59-solving-by-elimination"></a>
## Solving by elimination {#section-61-solving-by-elimination}

**Elimination** adds or subtracts equations to remove one variable.

**Worked example (eliminating a variable).**

Solve the system

$$2x + 3y = 16,$$
$$4x - y = 10.$$

Multiply the second equation by 3 so that the $y$-coefficients match in magnitude:

$$12x - 3y = 30.$$

Add this to the first equation:

$$(2x + 3y) + (12x - 3y) = 16 + 30,$$
$$14x = 46,$$
$$x = \\frac{46}{14} = \\frac{23}{7} \\approx 3.286.$$

Substitute back into $4x - y = 10$:

$$4 \\times \\frac{23}{7} - y = 10,$$
$$\\frac{92}{7} - y = 10,$$
$$y = \\frac{92}{7} - \\frac{70}{7} = \\frac{22}{7} \\approx 3.143.$$

Check in the first equation:

$$2 \\times \\frac{23}{7} + 3 \\times \\frac{22}{7} = \\frac{46 + 66}{7} = \\frac{112}{7} = 16.$$

The solution is $\\bigl(\\frac{23}{7}, \\frac{22}{7}\\bigr)$.

<a id="section-92-special-cases-parallel-and-coincident-lines"></a>
## Special cases: parallel and coincident lines {#section-94-special-cases-parallel-and-coincident-lines}

Not every system has exactly one solution.

**No solution.** The lines $y = 2x + 1$ and $y = 2x + 5$ have the same slope but different intercepts. They are **parallel** and never meet. If we try elimination:

$$2x + 1 = 2x + 5,$$
$$1 = 5,$$

which is impossible. The system is **inconsistent**.

**Infinitely many solutions.** The lines $y = 3x - 2$ and $2y = 6x - 4$ are the same line written differently. Every point on the line satisfies both equations. The system is **dependent**.

**Definition 4.1 (consistent system).** A system of linear equations is consistent if it has at least one solution. It is inconsistent if it has none.

<a id="section-107-common-errors"></a>
## Common errors {#section-109-common-errors}

**Error: forgetting to distribute.** In $3(y + 1) + 2y = 12$, a student might write $3y + 1 + 2y = 12$, forgetting that the 3 multiplies both $y$ and $1$. The correct expansion is $3y + 3 + 2y = 12$.

**Error: arithmetic with fractions.** When eliminating, students sometimes add numerators and denominators separately. Remember that $\\frac{a}{b} + \\frac{c}{d} = \\frac{ad + bc}{bd}$.

<a id="section-113-practice-exercises"></a>
## A solution is a pair that passes both tests {#section-294-a-solution-is-a-pair-that-passes-both-tests}

Before choosing a method, decide what an answer would mean. In a system involving $x$ and $y$, a candidate is an ordered pair: the first coordinate is the proposed value of $x$, and the second is the proposed value of $y$. It is a solution only if substituting that same pair makes every original equation true. We cannot use one value of $x$ in the first equation and a different value in the second.

For a small example, consider

$$x+y=8,\\qquad 2x+y=11.$$

The first condition alone permits many pairs. Here is a table of some of them.

| Candidate $(x,y)$ | Value of $x+y$ | Value of $2x+y$ | Does the pair solve the system? |
| --- | --- | --- | --- |
| $(0,8)$ | $8$ | $8$ | No: the second value should be $11$ |
| $(1,7)$ | $8$ | $9$ | No: the second condition fails |
| $(3,5)$ | $8$ | $11$ | Yes: both conditions hold |
| $(5,3)$ | $8$ | $13$ | No: the second condition fails |

The first equation describes a collection of pairs, and the second describes another collection. Solving the system means finding their common members. The table shows why solving just one equation cannot settle the system. It also shows why a correct answer needs two coordinates, even when elimination happens to find only one of them first.

Unless a context restricts them, the variables in this chapter range over the real numbers. A line can contain fractional and negative coordinates. A story about numbers of tickets adds a different requirement: those coordinates must be whole numbers and cannot be negative. Keep that contextual requirement alongside the equations rather than hoping it will emerge from the algebra.

<a id="section-313-why-substitution-works-in-both-directions"></a>
## Why substitution works in both directions {#section-315-why-substitution-works-in-both-directions}

From $x+y=8$, subtracting $x$ gives $y=8-x$. This is a reversible rewriting: a pair satisfies one equation exactly when it satisfies the other. Substitute $8-x$ for $y$ in the second condition:

$$2x+(8-x)=11.$$

Combining the two $x$-terms and subtracting $8$ gives $x=3$. The first condition then supplies $y=8-3=5$. This calculation has two jobs. It finds a possible answer, and it explains why another answer cannot have been missed.

To see the second job, suppose any pair solves the original system. The first equation forces its second coordinate to be $8-x$. Its first coordinate must therefore satisfy the substituted equation, which reduces to $x=3$. Its second coordinate is then forced to be $5$. Thus every original solution has to be $(3,5)$. Conversely, direct substitution gives $3+5=8$ and $2(3)+5=11$, so this forced candidate really is a solution.

This “forced candidate, then original check” pattern is useful when the calculation contains fractions. An approximate decimal check can make a nearly correct pair look convincing. Exact fractions show whether equality holds. For instance, a coordinate written as $9/5$ can be kept as $9/5$ throughout a calculation; there is no need to round it before it has been checked.

There is also a preparation point here. Substitution reduces the problem to an equation in one unknown, so use the reversible operations from **A letter can hold a place**. Distribution, addition and subtraction must act on the entire expression. If isolating a variable would require division by a coefficient, first check that the coefficient is nonzero. You may instead isolate the other variable or use elimination.

<a id="section-327-elimination-must-retain-enough-information"></a>
## Elimination must retain enough information {#section-329-elimination-must-retain-enough-information}

The same example can be solved by subtracting the first equation from the second:

$$(2x+y)-(x+y)=11-8,$$

so $x=3$. We must keep one original condition, such as $x+y=8$, as well. Together they give $x=3$ and $y=5$.

Why is it safe to replace the second condition by this difference while retaining the first? Every original solution satisfies the difference because subtracting equal quantities gives equal quantities. In the other direction, a pair satisfying the first equation and the difference also satisfies the original second equation: add the retained first equation back to the difference. The replacement can be undone.

That last sentence identifies an important limit. Adding the two original equations gives

$$3x+2y=19.$$

Every original solution satisfies this new equation, but this new equation alone has additional solutions. The pair $(1,8)$ gives $3(1)+2(8)=19$, yet $1+8=9$, so it fails the original first equation. Replacing both original equations by their sum has discarded information.

A safe elimination step therefore changes one equation while retaining the other, or replaces the system by another system from which the original conditions can be recovered. The goal is not simply to make a variable disappear from the page. The goal is to make the system easier while preserving exactly which pairs pass it.

The coefficient used to multiply an equation matters too. Multiplication by $2$, $-3$ or any other nonzero constant is reversible. Multiplication by $0$ turns every equation into $0=0$. That equality is true for every pair and has forgotten the original condition. It cannot replace a genuine condition without changing the solution set.

<a id="section-347-reading-zero-rows-and-special-cases"></a>
## Reading zero rows and special cases {#section-349-reading-zero-rows-and-special-cases}

Sometimes elimination ends with no variable at all. That is useful information rather than a failed method. Compare these two systems:

$$x+y=8,\\qquad 2x+2y=16,$$

and

$$x+y=8,\\qquad 2x+2y=18.$$

Subtract twice the first equation from the second. The first system gives $0=0$. This says that the second condition contributes nothing beyond the first. Over the real numbers, every pair $(t,8-t)$, for real $t$, solves it. The letter $t$ here chooses a member of the solution family; it is not an extra unknown in the original problem.

The second system gives $0=2$. No real pair can make that equality true. The contradiction proves that the original system has no solution. A calculation leading to a contradiction does not mean that the unknown should be set to zero. It means that the stated conditions cannot hold together.

A linear equation can itself be exceptional. The condition $0x+0y=0$ allows every pair. The condition $0x+0y=5$ allows none. Neither describes an ordinary line. The familiar picture of two intersecting, parallel or coincident lines applies when each displayed equation really does define a line: at least one of its $x$- and $y$-coefficients must be nonzero.

Vertical lines deserve attention as well. The equation $x=3$ is a perfectly good line even though it is not written as $y=mx+c$. Along with $y=5$, it has the single solution $(3,5)$. Do not divide by the coefficient of $y$ in order to obtain a slope formula when that coefficient is zero. Use the equation in the form it already provides.

<a id="section-365-when-a-coefficient-is-allowed-to-change"></a>
## When a coefficient is allowed to change {#section-367-when-a-coefficient-is-allowed-to-change}

A letter can describe a fixed but unspecified coefficient, as well as an unknown coordinate. Consider

$$x+y=8,\\qquad 2x+ky=16,$$

where $k$ is a given real number. We seek $x$ and $y$ after the value of $k$ has been chosen. Subtracting twice the first equation gives

$$(k-2)y=0.$$

If $k\\ne2$, the coefficient $k-2$ is nonzero. Division gives $y=0$, and the retained equation gives $x=8$. The pair $(8,0)$ satisfies the original two equations for every such $k$.

If $k=2$, division by $k-2$ is forbidden. Instead, the difference equation is $0=0$, and every pair $(t,8-t)$ remains possible. The exceptional value changes the number of solutions, so it cannot be removed by cancelling a factor without discussion.

A quick numerical comparison helps locate the issue. When $k=1$, the second equation is $2x+y=16$; together with $x+y=8$ it forces $(8,0)$. When $k=2$, the second equation doubles the first. The operation of subtraction works in both cases. The subsequent division is the step whose permission changes.

If the coordinates count objects and must be nonnegative integers, the dependent case has only the nine pairs $(0,8),(1,7),\\ldots,(8,0)$. It still has infinitely many real solutions. “How many solutions?” is therefore incomplete until the allowed domain is named.

<a id="section-383-a-complete-count-and-cost-model"></a>
## A complete count-and-cost model {#section-385-a-complete-count-and-cost-model}

Suppose a small event sells exactly $18$ tickets. An adult ticket costs £4 and a child ticket costs £2. Assume there are no other ticket categories, discounts or booking charges in this model, and total ticket revenue is £56. Let $a$ and $c$ be the numbers of adult and child tickets.

The domain is $a,c\\in\\{0,1,2,\\ldots\\}$. Counting tickets and counting pounds are two different observations, giving

$$a+c=18,\\qquad 4a+2c=56.$$

The first equation alone would permit $19$ nonnegative integer pairs. The second equation selects which of those pairs has the required revenue. Subtracting twice the count equation from the cost equation gives $2a=20$, so $a=10$. The count equation then gives $c=8$.

The table below explains how the two observations work together.

| Adult tickets $a$ | Child tickets $c=18-a$ | Revenue $4a+2c$, in pounds |
| --- | --- | --- |
| $8$ | $10$ | $52$ |
| $10$ | $8$ | $56$ |
| $12$ | $6$ | $60$ |

Each row has the required total number of tickets, but only the middle row has the required revenue. As the adult count increases by one while the total stays at $18$, one child ticket is replaced by an adult ticket. Revenue increases by £2. This gives a contextual explanation of the elimination equation: the £36 from eighteen child tickets is the starting amount, and the extra £20 accounts for ten replacements.

The answer must be checked against both observations and the domain. Ten adult tickets and eight child tickets are allowable counts; their sum is $18$; and their revenue is £40 plus £16, which equals £56. The equations do not tell us whether the observations were recorded accurately or whether a hidden booking charge exists. Those are questions about the model and the supplied data.

Changing just the recorded revenue to £55 exposes the domain boundary. The real-number calculation gives $2a=19$, so $a=9.5$ and $c=8.5$. These numbers satisfy the two real equations, but half a ticket is not an allowed sale. There is no solution in nonnegative whole numbers. That conclusion is a reason to inspect the assumptions or the record; it is not permission to round the candidate.

<a id="section-407-exact-totals-and-rounded-reports-are-different-data"></a>
## Exact totals and rounded reports are different data {#section-409-exact-totals-and-rounded-reports-are-different-data}

An equation records an exact condition inside the model. Before declaring a set of data inconsistent, check whether the numbers were intended to be exact. Ticket counts are whole numbers, but a displayed monetary total might have been rounded, estimated or copied from a different transaction. Each interpretation gives a different problem.

Keep the event with eighteen tickets at £4 or £2. Its revenue can be written as $36+2a$: start with eighteen child tickets costing £36, then replace $a$ of them by adult tickets, adding £2 per replacement. This formula is valid for the integer choices $a=0,1,\\ldots,18$. It does not permit every real monetary value between its smallest and largest outputs.

Now suppose the report says “about £55, rounded to the nearest £5,” with a halfway value rounded upward. That report allows actual revenue from £52.50 up to, but not including, £57.50. It does not assert the equation $4a+2c=55$.

| Adult count | Child count | Exact revenue | Revenue rounded to the nearest £5 |
| --- | --- | --- | --- |
| $8$ | $10$ | £52 | £50 |
| $9$ | $9$ | £54 | £55 |
| $10$ | $8$ | £56 | £55 |
| $11$ | $7$ | £58 | £60 |

Both $(9,9)$ and $(10,8)$ agree with the rounded report. All other adult counts give revenue outside the permitted rounding interval: lowering the count below nine lowers revenue below £52.50, and increasing it above ten raises revenue to at least £58. The information now leaves two possibilities, rather than an impossible exact equation or one uniquely determined pair.

This does not mean that rounding an answer to an exact problem is harmless. We changed the meaning of the supplied observation and stated that change openly. In the exact £55 problem, neither of those pairs is a solution. In the rounded-report problem, both are allowed. Record which question you are answering.

The distinction also explains why a more detailed observation can matter. Knowing the exact revenue would distinguish these two pairs. Merely repeating the total ticket count would not: it is already used in the model. A useful additional condition supplies information that the current conditions do not already contain.

In the next chapter, inequalities will let us write ranges of allowed values directly. For now, the table is enough to separate three conclusions: exact equations can force a unique pair; dependent conditions can leave a family; and uncertain observations can leave several allowed candidates. A complete answer names which conclusion its assumptions support.

<a id="section-430-choosing-a-method-and-explaining-a-result"></a>
## Choosing a method and explaining a result {#section-432-choosing-a-method-and-explaining-a-result}

Substitution is convenient when an equation already isolates a variable, or a coefficient is $1$ or $-1$. Elimination is convenient when a small multiplication makes coefficients cancel. Both methods express the same requirement: a candidate must satisfy all original conditions. A graph can help predict whether to expect one intersection, none or a whole common line. A hand-drawn intersection is an estimate until the coordinates are checked exactly.

A clear written solution records more than the final pair. Name what each variable measures, state the domain, explain each reversible change, and return to every original condition. When a zero coefficient or a contradiction occurs, describe what it means instead of forcing the calculation into a “one answer” template.

For a diagnostic reread, ask three concrete questions. Did I retain enough information after eliminating a variable? Did I divide by a quantity that could be zero? Did a real-number answer also satisfy the story's count, sign or measurement restrictions? Different failures need different repairs. Repeating arithmetic will not repair a missing condition, and a correct picture will not make an impossible whole-number count possible.

<!-- COMM-03-AS-W3-04:exposition:end -->

<!-- COMM-03-AS-W3-04:questions:start -->

<a id="section-442-practice-extensions"></a>

## Summary

<a id="section-286-looking-back-and-forward"></a>
This chapter introduced systems of two linear equations. We solved them by substitution and elimination, identified special cases with no or infinitely many solutions, and connected the algebra to the geometry of intersecting lines.

In the next chapter, **Inequalities and Regions**, we replace the equal sign with inequality symbols. Instead of points on a line, we shade entire regions of the plane.

<!-- COMM-03-AS-W3-04:exposition:start -->

<a id="section-292-a-solution-is-a-pair-that-passes-both-tests"></a>

<a id="section-580-summary"></a>
A simultaneous solution must satisfy every original condition. Reversible elimination retains enough equations to recover the original system; the final pair must also satisfy any count or physical-domain restrictions.

**Where next.** Continue with [Algebra and Functions](/books/library-book-algebra-and-functions/) to study expressions, equations and functions at the next level. Use its stated preparation to choose your starting chapter.

<!-- Linked resource: library:book-algebra-and-functions -->

## Exercises {#section-115-practice-exercises}

<a id="section-115-exercise-1"></a>
### Exercise 1 {#section-117-exercise-1}
Solve by substitution: $y = 2x + 3$ and $3x + y = 18$.

<details>
<summary>Hint 1</summary>

**Hint.** Use the first equation to replace y everywhere in the second.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Solve the resulting one-variable equation, then recover y and check both originals.

</details>

<details>
<summary>Solution</summary>

**Solution.** Substitute $y = 2x + 3$ into the second equation:

$$3x + (2x + 3) = 18,$$
$$5x + 3 = 18,$$
$$5x = 15,$$
$$x = 3.$$

Then $y = 2(3) + 3 = 9$. Check: $3(3) + 9 = 18$. The solution is $(3, 9)$.

</details>

<a id="section-145-exercise-2"></a>
### Exercise 2 {#section-147-exercise-2}
Solve by elimination: $2x + 5y = 17$ and $4x - 5y = 7$.

<details>
<summary>Hint 1</summary>

**Hint.** Look at the opposite coefficients of y.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Add the equations to eliminate y, then substitute into an original equation to recover it.

</details>

<details>
<summary>Solution</summary>

**Solution.** Add the equations:

$$6x = 24,$$
$$x = 4.$$

Substitute into the first: $2(4) + 5y = 17$, so $8 + 5y = 17$, $5y = 9$, $y = \\frac{9}{5} = 1.8$. Check in the second: $4(4) - 5(1.8) = 16 - 9 = 7$. The solution is $(4, 1.8)$.

</details>

<a id="section-173-exercise-3"></a>
### Exercise 3 {#section-175-exercise-3}
A rectangle has perimeter 30 cm. The length is 3 cm more than the width. Find the dimensions.

<details>
<summary>Hint 1</summary>

**Hint.** Translate the perimeter and the difference of side lengths separately.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Substitute the expression for length into the perimeter equation and check positive dimensions.

</details>

<details>
<summary>Solution</summary>

**Solution.** Let $w$ be width and $l$ be length. Then

$$2l + 2w = 30,$$
$$l = w + 3.$$

Substitute:

$$2(w + 3) + 2w = 30,$$
$$2w + 6 + 2w = 30,$$
$$4w + 6 = 30,$$
$$4w = 24,$$
$$w = 6.$$

Then $l = 6 + 3 = 9$. The width is 6 cm and the length is 9 cm. Check: perimeter $2(9) + 2(6) = 18 + 12 = 30$.

</details>

<a id="section-209-exercise-4"></a>
### Exercise 4 {#section-211-exercise-4}
Show that the system $3x + 2y = 8$ and $6x + 4y = 10$ has no solution.

<details>
<summary>Hint 1</summary>

**Hint.** Make the left-hand sides identical by scaling one equation.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compare the resulting right-hand sides; explain whether any pair can satisfy both requirements.

</details>

<details>
<summary>Solution</summary>

**Solution.** Multiply the first equation by 2: $6x + 4y = 16$. Compare with the second: $6x + 4y = 10$. The left sides are identical but the right sides differ. This gives $16 = 10$, which is false. The lines are parallel and the system is inconsistent.

</details>

<a id="section-232-exercise-5"></a>
### Exercise 5 {#section-234-exercise-5}
Two trains travel toward each other on parallel tracks. Train A moves at 80 km/h and Train B at 70 km/h. They start 450 km apart. When do they meet?

<details>
<summary>Hint 1</summary>

**Hint.** The trains travel for the same length of time.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Add their distances in terms of t and equate that sum to the original separation.

</details>

<details>
<summary>Solution</summary>

**Solution.** Let $t$ be time in hours. The distance covered by A is $80t$ and by B is $70t$. When they meet,

$$80t + 70t = 450,$$
$$150t = 450,$$
$$t = 3.$$

They meet after 3 hours. Train A has travelled $80 \\times 3 = 240$ km and Train B has travelled $70 \\times 3 = 210$ km. Check: $240 + 210 = 450$.

</details>

<a id="section-261-exercise-6"></a>
### Exercise 6 {#section-263-exercise-6}
Explain why multiplying an equation by a nonzero constant does not change its solution set.

<details>
<summary>Hint 1</summary>

**Hint.** Prove both directions of the claim about solution sets.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Multiplication gives one direction; division by the same nonzero constant gives the converse.

</details>

<details>
<summary>Solution</summary>

**Solution.** If $ax + by = c$ is true for a pair $(x, y)$, then multiplying both sides by $k \\neq 0$ gives $kax + kby = kc$, which is also true for that pair. Conversely, if $kax + kby = kc$ is true and $k \\neq 0$, we can divide both sides by $k$ to recover $ax + by = c$. The two equations are logically equivalent: they are satisfied by exactly the same pairs.

</details>

<a id="section-284-looking-back-and-forward"></a>

<a id="section-444-practice-extensions"></a>
### Exercise 7 — AS-04-E07 — did elimination lose a condition? {#section-448-as-04-e07-did-elimination-lose-a-condition}

A learner starts with $x+2y=10$ and $3x-y=9$, adds the equations and keeps only $4x+y=19$. They say that solving this new equation solves the original system. Give a counterexample to that claim. Then write a two-equation replacement that does preserve the original solution set, and find its solution.

<details>
<summary>Hint 1</summary>

**Hint.** A single equation usually permits more pairs than the original system.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Choose a pair on the sum line and test an original; retain one original equation alongside the sum to keep reversibility.

</details>



<a id="section-465-as-04-e08-a-changed-coefficient-family"></a>
### Exercise 8 — AS-04-E08 — a changed coefficient family {#section-467-as-04-e08-a-changed-coefficient-family}

For a fixed real number $k$, solve $x+y=8$ and $2x+ky=11$. Separate the case $k=2$ from $k\\ne2$ and compare the exceptional case with the worked family whose second right-hand side was $16$. For $k=1$ and $k=3$, find the coordinates and decide whether each pair could count nonnegative whole objects. Identify the step that needs a nonzero condition.

<details>
<summary>Hint 1</summary>

**Hint.** Eliminate x while retaining one original equation.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Separate the vanishing coefficient before dividing; afterwards test the requested coefficients and the integer-count domain.

</details>



<a id="section-484-as-04-e09-a-real-solution-and-an-impossible-count"></a>
### Exercise 9 — AS-04-E09 — a real solution and an impossible count {#section-486-as-04-e09-a-real-solution-and-an-impossible-count}

An event sells $14$ tickets, each either an adult ticket at £5 or a child ticket at £3, with no other charges. A record says the revenue was £57. Translate the information into equations, solve over the real numbers and decide whether it describes possible ticket sales. Then change the revenue to £58 and reconstruct the counts. Explain why rounding is not a repair for the £57 record.

<details>
<summary>Hint 1</summary>

**Hint.** Write a count equation and a revenue equation with nonnegative-integer unknowns.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Eliminate one ticket count, then test integrality before considering the changed revenue; do not repair a failed count by rounding.

</details>

<!-- COMM-03-AS-W3-04:questions:end -->

<!-- COMM-03-AS-W3-04:solutions:start -->

<a id="section-505-solutions-to-practice-extensions"></a>

<a id="section-554-a-further-practice-problem"></a>
<a id="section-554-exercise-10"></a>
### Exercise 10 {#section-556-exercise-10}
<a id="equations-with-two-unknowns-ex-10"></a>

A storage kit contains seven cards. Each is labelled either 64 GB or 128 GB, and the labelled capacities total 640 GB. Let $x$ count 64 GB cards and $y$ count 128 GB cards. Find both counts using the supplied additive-capacity model and verify them in both original equations.

<details>
<summary>Hint 1</summary>

**Hint.** Use one equation for the number of cards and another for the total labelled capacity.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Divide the capacity equation by its nonzero common factor, then subtract the card-count equation.

</details>
<details>
<summary>Solution</summary>

**Solution.** The counts are nonnegative integers satisfying $x+y=7$ and $64x+128y=640$. Dividing the second equation by 64 gives $x+2y=10$. Subtracting the first equation gives $y=3$, and then $x=7-3=4$. These are allowed whole counts. They satisfy the original card equation because $4+3=7$, and the original capacity equation because $64(4)+128(3)=256+384=640$ GB. The reversible elimination determines the only pair solving the two equations. The calculation uses labelled additive capacities; it makes no claim about usable capacity after formatting or other storage overheads.

</details>

<a id="section-578-summary"></a>

## Solutions {#section-507-solutions-to-practice-extensions}

<a id="section-507-as-04-e07-solution"></a>
### AS-04-E07 — solution {#section-509-as-04-e07-solution}

<details>
<summary>Solution</summary>

**Solution.**

The pair $(0,19)$ satisfies $4x+y=19$. It fails $x+2y=10$, since $0+2(19)=38$. Thus the sum equation alone includes pairs that the original system rejects.

Keep $x+2y=10$ and replace the second equation by the sum $4x+y=19$. This is reversible because subtracting the retained first equation from the sum recovers $3x-y=9$. Twice the sum minus the retained equation gives $7x=28$, so $x=4$. The first equation then gives $y=3$. The original checks are $4+2(3)=10$ and $3(4)-3=9$.

</details>

<a id="section-520-as-04-e08-solution"></a>
### AS-04-E08 — solution {#section-522-as-04-e08-solution}

<details>
<summary>Solution</summary>

**Solution.**

Subtract twice the first equation from the second, retaining the first, to obtain $(k-2)y=-5$. If $k=2$, this is $0=-5$, so there is no real solution. This differs from the worked right-hand side $16$, where the exceptional case gave $0=0$ and a family of solutions.

If $k\\ne2$, division by the nonzero coefficient gives $y=-5/(k-2)$ and $x=8+5/(k-2)$. These formulas satisfy $x+y=8$. Also $2x+ky=16+(10-5k)/(k-2)=16-5=11$, so they satisfy the second equation.

For $k=1$, they give $(x,y)=(3,5)$, which is a permitted pair of nonnegative whole counts. For $k=3$, they give $(13,-5)$, which solves the real equations but violates that count domain. Division by $k-2$ is the step forbidden at the exceptional value.

</details>

<a id="section-535-as-04-e09-solution"></a>
### AS-04-E09 — solution {#section-537-as-04-e09-solution}

<details>
<summary>Solution</summary>

**Solution.**

Let $a,c$ be nonnegative integers counting adult and child tickets. The equations are $a+c=14$ and $5a+3c=57$. Subtracting three times the first from the second gives $2a=15$, hence $a=15/2$ and $c=13/2$. These are real solutions but not permitted counts.

For revenue £58, the difference is $2a=16$, so $a=8,c=6$. The checks are $8+6=14$ and $5(8)+3(6)=58$. Rounding the adult count down to $7$ and keeping $14$ tickets forces $7$ children and revenue £56; rounding it up to $8$ forces $6$ children and revenue £58. Neither gives £57. For whole counts, $5a+3c=3(a+c)+2a=42+2a$ is even, so the original revenue cannot occur under the model.

</details>

<!-- COMM-03-AS-W3-04:solutions:end -->



<a id="section-552-a-further-practice-problem"></a>
`;export{e as default};