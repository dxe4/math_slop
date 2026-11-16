var e=`---
id: course-signed-numbers-to-equations
title: "Signed Numbers to Equations: Position, Change, and Balance"
level: foundation
estimated_minutes: 300
license: CC BY-SA 4.0
---

# Signed Numbers to Equations: Position, Change, and Balance

<!-- euler-course-route -->

## Current course route

Use the [course page](/courses/atlas-signed-numbers-to-equations/) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

Why invent numbers below zero? Because an answer can lie on either side of a chosen reference: below sea level, before a deadline, behind a starting line, or on the other side of a financial balance. Signed numbers make these comparisons calculable. This five-session course carries that idea through arithmetic and into first equations. It assumes counting, addition, and simple multiplication; a calculator is allowed for checking, but the sign and size of an answer should be predicted first.

## Starting diagnostic

Try these without a rule sheet: (a) Which is farther left, $-2$ or $-7$? (b) A lift moves from floor 3 down 5 floors; where is it? (c) What change takes $-4$ to $2$? (d) If $x+3=1$, what is $x$? Explain with a number line or a sentence. If (a) and (b) are hard, begin with Session 1. If (c) is hard, begin with Session 2. If only (d) is hard, begin with Session 4. Keep the original answers so you can see what changed at the end.

For a tactile number line, mark equally spaced positions on paper, tape, or string. A spoken list of positions and a movable counter also works. Every diagram below is explained in words; no color or animation is required.

## Session 1 — Positions need a reference

Draw positions $-5$ through $5$ at equal spacing. Larger numbers lie to the right. Thus $-2>-7$, even though $2<7$: $-2$ is closer to zero on the rightward scale. Zero is a reference point, not a wall. If a diver is 4 metres below a water surface chosen as zero, the position is $-4$ metres; another 3 metres down gives $-7$ metres.

The sign belongs to the *quantity and convention*. An elevation of $-4$ metres relative to sea level is sensible; the length of a 4-metre rope is not $-4$ metres. Move the reference up by 10 metres and the diver's coordinate becomes $-14$, but the distance from another diver also shifted by 10 metres stays the same. A coordinate can change while the underlying separation does not.

**Milestone.** Explain in words why $-8<-3$ and why $|-8|>|-3|$. The first compares positions; the second compares distances from zero. If you reverse one comparison, put both numbers on a line and say the question aloud before using symbols.

## Session 2 — Changes add; subtraction asks for a missing change

Start at position 2 and move 5 left. The final position is $2+(-5)=-3$. Start at $-3$ and move 5 right: $-3+5=2$. Adding a signed change shifts position. To subtract a change is to undo it, so $2-(-5)=7$: undoing “5 left” means moving 5 right.

A reliable check is **final minus initial equals net change**. A balance goes from $-£12$ to £8 after a deposit. The change is $8-(-12)=£20$. A deposit of £20 indeed sends $-£12$ to £8. If you find a negative deposit, the sign disagrees with the story.

Absolute value measures distance from zero: $|a|$ is never negative. The distance between positions $a$ and $b$ is $|b-a|$. From $-4$ to 3 it is $|3-(-4)|=7$ units. The directed change is $+7$; returning from 3 to $-4$ has directed change $-7$ but the same distance.

**Practice.** A lift starts at $-2$, rises 7 floors, falls 4, then rises 1. Find the final floor, net change, and total travel. **Feedback:** the changes are $+7,-4,+1$, giving final floor 2, net change $2-(-2)=+4$, and travel $7+4+1=12$ floors. If you reported 4 as travel, you calculated net change instead; both numbers are useful answers to different questions.

### Work backward from a change

Suppose a counter moves 6 units left and ends at $-2$. Where did it begin? A forward description is $s+(-6)=-2$, where $s$ is the starting position. Undo the move by adding 6 to both sides: $s=4$. Check by moving left from 4: $4+(-6)=-2$. This is already an equation, even before we call the unknown a variable.

There are three related questions in every movement story. If the start $s$ and directed change $d$ are known, the finish is $f=s+d$. If start and finish are known, the change is $d=f-s$. If finish and change are known, the start is $s=f-d$. These are rearrangements of one relationship, not three unrelated tricks. Draw an arrow from $s$ to $f$ and say what the arrow represents before choosing an operation.

**Compare two journeys.** Journey A goes directly from $-5$ to 2. Its net change is $+7$ and its travel is 7 units. Journey B starts at $-5$, goes 10 units right to 5, then 3 units left to 2. It has the same net change $10+(-3)=+7$, but its travel is $10+3=13$. Endpoint information determines net change; it does not determine the route or total travel. This distinction will matter later in calculus, where an integral of signed velocity gives displacement and an integral of speed gives distance.

**Try it.** A counter ends at 1 after moving 8 units right. Find its starting position and check. The equation is $s+8=1$, so $s=-7$; indeed $-7+8=1$. If you wrote 9, you probably added the change to the *finish*. Label the arrow and undo it.

## Session 3 — Products must respect the old arithmetic laws

Four losses of £3 total $4(-3)=-12$ pounds. This repeated-change story handles a positive number of negative changes. For a negative factor on the left, distributivity supplies the general rule. Since $(a+(-a))b=0$, we have $ab+(-a)b=0$, so $(-a)b=-(ab)$. Applying the rule twice gives $(-a)(-b)=ab$. Thus $(-3)(-4)=12$. The rule is required if multiplication is to keep distributing over addition; a “negative number of losses” story is optional intuition, not a literal count.

Division reverses multiplication. Since $(-3)(4)=-12$, we know $-12/(-3)=4$ and $-12/4=-3$. Division by zero remains undefined: no number $q$ satisfies $0q=5$, while every $q$ satisfies $0q=0$. A sign rule does not repair that missing inverse.

**Milestone.** Before calculating $(-6)(-7)$, predict its sign and explain which law forces it. Then calculate 42 and check that $(-6)(-7)+(-6)(7)=(-6)(0)=0$. If your two products do not cancel, revisit distributivity.

### Parentheses decide what is being squared

A minus sign can name a negative number, or it can tell us to take the opposite of a result. Thus $(-3)^2=(-3)(-3)=9$, while $-3^2=-(3^2)=-9$ under the usual order of operations. The parentheses change the input to the squaring operation. Neither expression is a contradiction to the rule that squares are nonnegative: $-3^2$ is the *negative of a square*, not the square of a negative number.

For every real $a$, $a^2\\ge0$. In particular, if $a=-5$, then $a^2=25$. But $-a^2=-25$. A quick substitution exposes the difference between $(-a)^2$ and $-a^2$: the former equals $a^2$ for all real $a$; the latter is its opposite. Write the grouping explicitly when a sign mistake would change a conclusion.

**Try it.** Evaluate $-(-4)^2+(-4)(-2)$ without a calculator. The square is 16 and its opposite is $-16$; the product is $+8$, so the total is $-8$. If you got 24, you likely treated the leading minus as part of the squared base. Put a box around each complete factor before multiplying.

## Session 4 — Equations preserve balance

An equation claims two expressions have the same value. To solve $x-(-3)=5$, first read it as $x+3=5$, then subtract 3 from *both* sides: $x=2$. Check in the original statement: $2-(-3)=5$. Checking the transformed equation alone would not catch a copying mistake.

For $-2x+5=11$, subtract 5 to obtain $-2x=6$, then divide both sides by $-2$ to obtain $x=-3$. Substitute: $-2(-3)+5=11$. Each step is reversible, so this is the unique solution. In contrast, squaring both sides of an equation may introduce extra candidates and needs an original-equation check.

Inequalities need special care. From $-2x<6$, dividing by $-2$ reverses the order: $x>-3$. Why? Multiplication by a negative reflects the number line. For instance, $-4<-2$, but after multiplying by $-1$ we get $4>2$. A learner who memorizes “move the minus to the other side” without this order reasoning is likely to reverse the wrong step.

**Practice.** Solve $4-3y\\ge10$. Subtract 4: $-3y\\ge6$. Divide by $-3$ and reverse: $y\\le-2$. Check the boundary $y=-2$: $4-3(-2)=10$. Check one permitted value, $y=-3$, giving 13, and one forbidden value, $y=0$, giving 4. These tests support the result; the reversible inequality steps establish it.

### A worked equation with two copies of the unknown

Solve $3(x-2)=x+4$. Expanding the left side gives $3x-6=x+4$. Subtract $x$ from both sides to get $2x-6=4$; add 6 and divide by 2, giving $x=5$. Check in the original: $3(5-2)=9$ and $5+4=9$. The check matters because an expansion error could otherwise travel through several flawless algebraic steps.

The story behind this equation could be three identical packets, each containing $x-2$ tokens, balanced against one packet of $x$ tokens plus four loose tokens. The algebra says the balance occurs at five tokens per $x$. The story also constrains what answers make sense: if packets cannot contain negative tokens, then $x\\ge2$. Our answer passes that constraint. A symbolic solution outside a model's domain would require revisiting the model.

**Try it with feedback.** Solve $5-2(x+1)=x-6$. Expanding yields $3-2x=x-6$, so $9=3x$ and $x=3$. Original-equation check: $5-2(4)=-3$ and $3-6=-3$. If you obtained $x=-3$, inspect the step where you moved $-2x$ or $-6$ across the equality; “moving” is shorthand for applying the same operation to both sides.

### Why an inequality describes a region

Solve $-3(x+2)\\le6$. Expand and simplify: $-3x-6\\le6$, then $-3x\\le12$. Dividing by $-3$ reverses the order, so $x\\ge-4$. This describes every point at or to the right of $-4$ on the number line, not just the boundary. Check $x=-4$ for equality, $x=0$ for a true inequality, and $x=-5$ for a false one. If $x$ represents a whole-number count, the allowed values must also respect that domain; the algebraic half-line alone does not describe the full real-world answer.

Do not multiply an inequality by an unknown expression and keep the order without examining its sign. For instance, from $1<2$, multiplying by $-3$ gives $-3>-6$. If a factor may be positive, zero, or negative, split into cases or use a different solving step. The reversal rule is a statement about order, not a typographical ritual.

## Session 5 — Coordinates and a model worth checking

A point $(x,y)$ has two signed coordinates. The point $(-3,2)$ is three units left and two up from the origin. A directed horizontal move of $+5$ and vertical move of $-4$ sends it to $(2,-2)$. The straight-line distance is $\\sqrt{5^2+(-4)^2}=\\sqrt{41}$ units, while distance along a grid route is $|5|+|-4|=9$ units. These answer different geometric questions. Neither is a signed position.

Suppose a room begins at $-2$°C and warms steadily by 3°C per hour for four hours. A simple model is $T(t)=-2+3t$ for $0\\le t\\le4$. It predicts $T(0)=-2$ and $T(4)=10$. To find when it reaches 4°C, solve $-2+3t=4$, giving $t=2$ hours. The model assumes a constant warming rate; real temperature may not follow a straight line. Mathematics can solve the stated model exactly without proving the model is true.

**Milestone.** Explain why $T(t)$ is a position on a temperature scale, while $3t$ is accumulated change. State the units of 3. If you cannot distinguish those roles, return to Sessions 1 and 2 before extending the model.

### Compare a model with observations

Imagine the thermometer actually reads $-2,1,4,6,9$°C at hours $0,1,2,3,4$. The straight-line model $T(t)=-2+3t$ predicts $-2,1,4,7,10$°C. It matches the first three readings but is 1°C high at hours 3 and 4. A correct solution to $T(t)=4$ still says the *model* reaches 4°C at two hours; the observed table also records 4°C then. Agreement at that time does not establish a constant rate throughout the afternoon.

To report a mismatch, subtract prediction from observation and keep the sign: the residuals are $0,0,0,-1,-1$°C. Their negative signs say the observations were cooler than predicted. If you instead subtract observation from prediction, the signs reverse; state the convention. Predicting ten hours ahead from four hours of observations would add an unsupported extrapolation. The calculation $T(10)=28$°C is exact for the formula, while its accuracy as a temperature forecast is unknown.

**Try it.** A second linear model uses just the first and last readings. Its slope is $(9-(-2))/4=11/4$°C per hour, giving $S(t)=-2+(11/4)t$. It matches the endpoints but predicts $S(2)=3.5$°C, half a degree below the observed 4°C. Which model is “better” depends on what error measure and purpose you choose. Writing the two residual lists is a more honest comparison than announcing a winner from one matching point.

## Capstone — a lift log with a hidden error

Create a five-stop lift log that includes a floor below zero. Treat adjacent integer floor labels as one floor apart. Record each floor, the directed change to the next stop, net change, and total floors traveled. Deliberately insert one wrong signed change, then give enough information for another reader to find it.

Check each row using **change = finish − start**. Then check the whole log: the changes must sum to final minus initial, and total travel must be at least the absolute net change. These overall checks are useful warnings, but neither can replace checking the individual rows.

A complete submission contains a labelled table, checks of the individual changes and the overall totals, a correction, and a sentence explaining why a negative *position* does not imply negative *distance*. The capstone is successful when another reader can locate and repair the error from your explanations. If studying alone, use the example below to audit your method, then create a fresh log and check it row by row.

If a lift story is unfamiliar or inaccessible, use a bank balance, a temperature record, or a token moving along a tactile number line. The mathematics is the same: ordered positions, signed differences, net change, and total movement. The submission should still state a zero reference and units.

### A five-stop log to audit

The lift stops at $-2,3,1,-4,2$. Someone records this log. Find the incorrect row, repair it, and calculate the net change and total travel before reading the feedback.

| From | To | Claimed change |
| --- | --- | --- |
| -2 | 3 | +5 |
| 3 | 1 | -2 |
| 1 | -4 | +5 |
| -4 | 2 | +6 |

**Hint.** A journey from 1 to $-4$ moves left on the number line. Subtract the starting floor from the finishing floor. Keep a signed change separate from its absolute size.

**Worked answer.** The third row should be $-4-1=-5$. The correct changes are $+5,-2,-5,+6$. Their sum is $+4$, agreeing with $2-(-2)=4$ floors of net change. Total travel is $5+2+5+6=18$ floors. A negative floor label identifies a position; every contribution to travel is a nonnegative distance.

### Change the question: can two errors hide?

For the same five stops, another log gives claimed changes $-5,-2,+5,+6$. Check its signed sum and total travel. Do those two totals guarantee that every row is correct?

**Hint.** Compare the first and third changes with the actual start and finish of those legs.

**Worked answer.** These claimed changes also sum to $+4$ and their absolute values also sum to 18. Both totals agree with the correct log, and $18\\ge|4|$. Yet the first and third changes have the wrong signs: they should be $+5$ and $-5$. The two signed errors cancel in the sum, and reversing a sign leaves an absolute value unchanged. Overall agreement is a necessary check here; checking each row establishes that the recorded changes match the stops.

## Mixed practice: choose the operation yourself

Try these in order without looking at the solutions. After each, write one sentence naming the quantity and one check that could expose a wrong sign.

1. Order $-9,-1,0,4,-4$ from least to greatest. Which has the greatest absolute value?
2. A hiker starts 30 m below a chosen reference, ascends 12 m, descends 19 m, then ascends 25 m. Find final position, net change, and total vertical travel.
3. An account starts at $-£18$. A payment moves it to £7. How much was paid? Then £11 is withdrawn. What is the new balance?
4. Find all $x$ satisfying $|x-2|=5$. Explain why there are two answers.
5. Solve $2(x-3)=-8$ and verify in the original equation.
6. Solve $-4x+6<14$. Check both the boundary and one value on each side.
7. A point starts at $(-2,3)$ and moves by $(5,-7)$. Find its new coordinates and the straight-line distance moved.
8. Evaluate $(-3)(-5)+(-2)(4)$. Explain the sign of each product before adding.

### Worked solutions

1. From left to right: $-9,-4,-1,0,4$. The greatest absolute value is $|-9|=9$, because $-9$ is farthest from zero. “Least number” and “greatest distance from zero” can refer to the same entry.
2. Write the changes first: $+12,-19,+25$. Their sum is $+18$ m. Final position is $-30+18=-12$ m, and total vertical travel is $12+19+25=56$ m. Check: final minus initial is $-12-(-30)=18$ m, agreeing with the signed sum.
3. The payment is final minus initial: $7-(-18)=£25$. The later balance is $7-11=-£4$. A £25 payment is plausible because £18 first clears the debt and £7 remains.
4. A point at distance 5 from 2 can lie five units to the right or left. Thus $x-2=5$ gives $x=7$, and $x-2=-5$ gives $x=-3$. Check both: $|7-2|=|-3-2|=5$.
5. Divide by 2: $x-3=-4$, so $x=-1$. In the original, $2(-1-3)=2(-4)=-8$. Every solving step was reversible.
6. Subtract 6 to get $-4x<8$; divide by $-4$ and reverse the inequality to get $x>-2$. At $x=-2$, the left side is 14, which does not satisfy the strict inequality. At $x=0$, it is 6, which does; at $x=-3$, it is 18, which does not.
7. Add coordinates componentwise: $(-2+5,3-7)=(3,-4)$. The displacement has horizontal component 5 and vertical component $-7$, so its straight-line length is $\\sqrt{5^2+(-7)^2}=\\sqrt{74}$ units. The negative vertical change contributes a positive square to distance.
8. The first product is positive: $(-3)(-5)=15$. The second is negative: $(-2)(4)=-8$. Their sum is 7. Check the first sign by distributivity: $(-3)(5)+(-3)(-5)=(-3)(0)=0$, so the second term must cancel $-15$.

**Repair route.** If 2 or 3 failed, return to the distinction between a position and a change. If 4 failed, mark both points five units from 2 on a number line. If 6 failed, multiply the candidate inequality by $-4$ and watch the order reverse. If 7 failed, draw a right triangle or compare horizontal and vertical movement separately. Redo a missed problem with new numbers before treating a read solution as mastery.

## Exit check and next step

Repeat the starting diagnostic. Answers are (a) $-7$ is farther left; (b) $3-5=-2$; (c) $2-(-4)=+6$; (d) $x=-2$, since $-2+3=1$. If (c) is still unclear, separate positions from changes in Session 2. If (d) is unclear, use a counter on the number line before the symbolic balance steps. Continue to [Below Zero](#/item/deep-dive-negative-numbers-directions) for another visual account, then to [Algebra from Stories](#/item/book-algebra-from-stories) for a working book that develops expressions, equations, graphs, and functions.
`;export{e as default};