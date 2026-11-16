
# Linear Equations, Inequalities, and Systems

## Conditions on an unknown

A club hires a hall for a fixed £45 and pays £6 for each participant's materials. An organiser asks three different questions: what is the cost for a given attendance, which attendance makes the cost £165, and which attendances keep it within £165? The expression $45+6n$ answers the first question after $n$ is supplied. The equation $45+6n=165$ answers the second, and the inequality $45+6n\le165$ expresses the third.

We shall learn to solve these conditions while preserving every permitted solution. Sometimes a condition selects one number; sometimes it selects an interval, every allowed number, or none. When two unknowns are involved, two simultaneous equations can select a single ordered pair, infinitely many pairs, or no pair. Explaining which outcome occurs is as important as performing the arithmetic.

## Preparation and notation

The required foundation is [Algebra from Stories](#/books/algebra-from-stories), followed by [Expressions, Laws, and Factorising](expressions-laws-factorising.md). You should be comfortable with signed arithmetic, fractions, substitution, distributing brackets, and collecting like terms. Those skills are used throughout; no calculus, matrices, or previous study of formal proof is required.

Unknowns are real numbers unless a story imposes another domain, such as nonnegative whole-number attendance. The symbols $<$ and $>$ mean strictly less and strictly greater. The symbols $\le$ and $\ge$ allow equality at the boundary. A solution description must include the domain: “$n\le20$” means something different for all real numbers and for nonnegative whole numbers.

## Equations and equivalent conditions

**Definition 2.1 (Solution set and equivalence).** For an equation with a specified domain, its solution set is the collection of all allowed inputs that make its two sides equal. Two conditions are equivalent on that domain if they have exactly the same solution set.

An equation is an assertion, whereas the expressions on either side are quantities. We can replace an expression by an identical expression using the laws from chapter 1. For example, replacing $3(x+2)$ by $3x+6$ changes no values. We can also operate on both sides of an equation, but now we must ask a second question: can the operation be reversed? A reversible step preserves exactly the inputs satisfying the equality.

**Theorem 2.2 (Reversible equation operations).** On a fixed domain where all expressions involved are defined, adding or subtracting the same expression on both sides preserves an equation's solution set. Multiplying or dividing both sides by the same nonzero constant also preserves it.

*Proof.* If two quantities are equal, adding the same quantity gives equal totals. Subtracting the added quantity recovers the original equality, so the implication works in both directions. Multiplication by a nonzero constant has division by that constant as its inverse. Therefore an input satisfies the new equation exactly when it satisfies the old one. ∎

“Do the same thing to both sides” needs this qualification. Multiplying $x=3$ by zero produces $0=0$, which every real $x$ satisfies. The original solution remains among the new ones, but information has been lost. Dividing by an expression involving the unknown can also lose a solution if that expression is zero there. Until a nonzero condition has been established, use addition, subtraction, and constant multipliers instead.

It is often helpful to read each line as “the previous condition holds exactly when this condition holds”. This encourages complete equations rather than loose strings of symbols. Solving does not mean shifting a term across the equals sign by magic. The familiar sign change comes from adding its opposite to both sides and then collecting the resulting terms.

### Worked example 2.3 (A linear equation with fractions)

Solve

$$
\frac{3(2x-1)}4-\frac{x+2}3=5
$$

for real $x$ and check the answer in the original equation.

The denominators are nonzero constants, so every real input is permitted. Multiplying every term by twelve clears both denominators reversibly:

$$
9(2x-1)-4(x+2)=60.
$$

Distribute and collect to obtain $18x-9-4x-8=60$, hence $14x-17=60$. Add seventeen and divide by fourteen:

$$
14x=77,\qquad x=\frac{11}{2}.
$$

Checking the original gives $3(11-1)/4=15/2$ for the first term and $(11/2+2)/3=5/2$ for the second. Their difference is five, as required. The check confirms this candidate; the reversible sequence proves there are no other real solutions. Clearing denominators required multiplication of the entire equation, including its right side, not just the fractions that looked inconvenient.

## One solution, every solution, or none

**Definition 2.4 (Linear equation in one unknown).** A nondegenerate linear equation in $x$ can be written $Ax=B$, where $A,B$ are real constants and $A\ne0$. Equations built from linear expressions may instead simplify to the degenerate case $0x=B$.

**Theorem 2.5 (Classification after collecting).** For real constants $A,B$, the equation $Ax=B$ has exactly one real solution $x=B/A$ when $A\ne0$. If $A=0$ and $B=0$, every real $x$ is a solution. If $A=0$ and $B\ne0$, there is no real solution.

*Proof.* When $A\ne0$, division by $A$ is reversible and gives the unique candidate, which substitutes correctly. When $A=0$, the left side is zero for every input, so the condition is either the always true statement $0=0$ or the false statement $0=B$ with $B\ne0$. ∎

On a restricted domain, intersect this classification with the allowed inputs. A unique real solution might be excluded by the context. An identity holds for all allowed inputs, not necessarily for all imaginable numbers. For example, $x/x=1$ is an identity on $x\ne0$, and it never admits zero as a solution. Removing a denominator from the displayed formula cannot enlarge the original domain.

### Worked example 2.6 (When the unknown disappears)

Compare the equations $4(x-2)=4x-8$ and $4(x-2)=4x-7$ over the real numbers.

Expanding the first gives $4x-8=4x-8$. Subtracting $4x$ leaves $-8=-8$, a true statement independent of $x$. Every real input satisfies it. This is an identity, not a failed attempt at finding a particular number.

Expanding the second gives $4x-8=4x-7$. Subtracting $4x$ leaves $-8=-7$, which is false. No input can repair that contradiction, so its solution set is empty. Reaching a statement without the unknown tells us something decisive in both examples. The statements' truth values determine the outcomes; the mere disappearance of the letter does not.

## Inequalities and the reason for sign reversal

**Definition 2.7 (Linear inequality).** A linear inequality in one real unknown compares two linear expressions using one of $<$, $\le$, $>$, or $\ge$. Its solution set contains every allowed input making the comparison true.

The real number line orders inputs from left to right. A positive difference $v-u$ means $u<v$. Adding a common number shifts both points equally, retaining their order. Multiplication by a positive number stretches or shrinks distances without changing which point comes first. Multiplication by a negative number reverses the order because it includes taking opposites.

**Theorem 2.8 (Order operations).** For real $u,v,c$, adding $c$ to both sides of an inequality preserves its direction. Multiplication or division by a positive real constant preserves direction. Multiplication or division by a negative real constant reverses direction. All these operations are reversible; the same rules apply to strict and non-strict inequalities.

*Justification.* If $u<v$, then $v-u>0$. Adding $c$ leaves the difference $(v+c)-(u+c)=v-u$ unchanged. Multiplying by $c>0$ gives the positive difference $c(v-u)$, so $cu<cv$. For $c<0$, the difference $cu-cv=(-c)(v-u)$ is positive, giving $cu>cv$. Equality is preserved under every permitted operation, so including equality gives the non-strict versions. Division is multiplication by the reciprocal, whose sign is the same as the divisor's. ∎

For a numerical reminder, $2<5$, but $-2>-5$. Sign reversal is a statement about order, rather than a typographical rule about moving a minus sign. Multiplying by zero destroys order information, and division by zero remains undefined. Multiplying by an expression of unknown sign is not one uniform operation: it would require separate sign cases. The linear methods here avoid that complication.

### Worked example 2.9 (A negative coefficient)

Solve $5-3(2x-1)\le2x+16$ for real $x$.

Distribution gives $8-6x\le2x+16$. Subtract $2x$ and subtract eight on both sides to get

$$
-8x\le8.
$$

Divide by negative eight, reversing the comparison:

$$
x\ge-1.
$$

The endpoint is included because the original inequality permits equality. At $x=-1$, both original sides equal fourteen. At $x=0$, the original reads $8\le16$, true. At $x=-2$, it reads $20\le12$, false. These checks confirm the boundary and which side it selects; the reversible order operations establish the whole solution set, not just those three test values.

There is an alternative way to avoid a final negative divisor: from $8-6x\le2x+16$, add $6x$ and subtract sixteen to get $-8\le8x$, then divide by positive eight. This gives $-1\le x$, the same condition. Choosing convenient operations can reduce sign errors without changing the reasoning.

## Intervals, combined conditions, and context

**Definition 2.10 (Interval notation and combined conditions).** The interval $[a,b]$ consists of all real $x$ with $a\le x\le b$. Parentheses omit a finite endpoint, so $(a,b]$ means $a<x\le b$. The unbounded interval $[a,\infty)$ means $x\ge a$; infinity is not a real endpoint and always receives a parenthesis. “And” requires both conditions; “or” requires at least one.

For example, $x>1$ and $x\le4$ give $(1,4]$. By contrast, $x<1$ or $x\ge4$ gives $(-\infty,1)\cup[4,\infty)$, where $\cup$ denotes the union of the two sets. The words matter: requiring $x<1$ and $x\ge4$ would give no solution. An interval is a description of real inputs, so a whole-number context needs a further selection.

### Worked example 2.11 (A compound inequality)

Solve $-4<2-3x\le11$ and express the answer as an interval.

The chain requires both $-4<2-3x$ and $2-3x\le11$. Subtract two in all three positions:

$$
-6<-3x\le9.
$$

Dividing by negative three reverses both comparisons, giving $2>x\ge-3$. Put the endpoints in increasing order:

$$
-3\le x<2,\qquad [-3,2).
$$

At negative three, the middle expression is eleven and the non-strict upper comparison permits it. At two, the middle expression is negative four and the strict lower comparison excludes it. Reversing only one symbol would describe a different, incorrect set. Solving the two component inequalities separately and taking their overlap gives the same result.

Return to the hall cost $45+6n\le165$. Subtracting forty-five and dividing by six gives $n\le20$. Since attendance is a nonnegative whole number, the answer is $n=0,1,\ldots,20$. If at least one participant is required, exclude zero explicitly. The algebra alone cannot supply that extra requirement. If a calculation instead gave $n\le20.8$, the largest permissible attendance would still be twenty; rounding to twenty-one would violate the budget.

Absolute value gives another useful reading of combined conditions. For a real input $t$, $|t|$ is its distance from zero, always nonnegative. For $r>0$, $|x-a|\le r$ means $a-r\le x\le a+r$: the input lies within distance $r$ of $a$. For instance, $|x-4|\le2$ gives $[2,6]$. Here the double inequality follows from the distance meaning; replacing “within” by two simultaneous outside conditions would misread the question.

## Two unknowns must satisfy both equations

**Definition 2.12 (Linear system in two unknowns).** A linear equation in $x,y$ has the form $ax+by=c$, with real constants and at least one of $a,b$ nonzero. A system asks for ordered pairs $(x,y)$ satisfying all its equations simultaneously. The order of the two coordinates is part of the answer.

One equation such as $x+y=10$ does not normally determine a pair. Choosing $x=1$ gives $y=9$; choosing $x=4$ gives $y=6$; every real $x$ gives one matching value. A second condition can select one of those pairs or fail to select any. Two written equations need not supply two independent pieces of information: one might merely repeat the other in different form.

Substitution uses one equation to express an unknown in terms of the other. We then replace that unknown by its equal expression in the remaining equation. The original relation must be retained for recovering the second coordinate. Elimination instead adds suitable multiples of equations so that one variable's terms cancel. Both methods depend on keeping an equivalent system, not merely producing a consequence of it.

**Theorem 2.13 (Equivalent system operations).** Swapping two equations, multiplying one equation by a nonzero constant, or replacing one equation by itself plus a constant multiple of the other preserves the solution pairs.

*Proof.* Swapping changes no requirement. Multiplication by a nonzero constant is reversible. For the last operation, retain the other equation: every solution of the original pair satisfies the replacement, and subtracting the same multiple of the retained equation recovers the replaced original. Thus the new and original pairs imply one another. ∎

Adding two equations and discarding both originals is insufficient. For instance, $x+y=5$ and $x-y=1$ imply $2x=6$, but that single consequence permits any $y$ once $x=3$. Retaining one original equation forces $y=2$. Elimination reduces the number of unknowns in one condition while another condition still supplies the information needed to finish.

### Worked example 2.14 (Elimination with both coefficients scaled)

Solve

$$
\begin{aligned}
2x+3y&=17,\\
3x-2y&=6.
\end{aligned}
$$

Multiply the first equation by two and the second by three:

$$
4x+6y=34,\qquad 9x-6y=18.
$$

Adding gives $13x=52$, so $x=4$. Keep the original first equation and substitute: $2(4)+3y=17$, hence $3y=9$ and $y=3$. Both originals check: $8+9=17$ and $12-6=6$.

The solution is the ordered pair $(4,3)$, meaning $x=4,y=3$. The reversed pair is a different claim and does not satisfy the first equation. Uniqueness follows because every solution must have $x=4$ by elimination, after which the retained equation forces $y=3$. A successful substitution alone would verify the pair but would not explain uniqueness.

### Worked example 2.15 (Substitution in a ticket model)

An event sells twenty-four tickets. Adult tickets cost £8 and student tickets cost £5. Total takings are £171. Find each number sold, assuming there are no discounts or other ticket types.

Let $a$ be adult tickets and $s$ student tickets. Counting tickets and counting pounds are separate conditions:

$$
a+s=24,\qquad 8a+5s=171.
$$

From the first, $s=24-a$. Substitute into the revenue condition:

$$
8a+5(24-a)=171,\qquad 3a+120=171.
$$

Thus $a=17$ and $s=7$. The counts are nonnegative whole numbers, their sum is twenty-four, and $8\cdot17+5\cdot7=136+35=171$ pounds. Each required check addresses a different part of the model.

Solving over the real numbers is a convenient intermediate calculation; the story still requires whole counts. Different data could give a fractional count, indicating that the supplied assumptions cannot all hold. It would be misleading to round both counts independently and announce a solution: rounding might change the total tickets or takings. A model's constraints must be checked together.

## Why a pair of lines can have three outcomes

**Theorem 2.16 (Classification of a two-equation linear system).** Two real linear equations in $x,y$, each with at least one nonzero variable coefficient, have either no solution, exactly one solution, or infinitely many solutions.

*Proof.* If necessary, swap equations or variable names so that the first equation has a nonzero coefficient of $x$. Solve it for $x$ as a linear expression in $y$. Substitution into the second produces an equation $Ay=B$. By Theorem 2.5, this determines one $y$, permits every real $y$, or permits none. In the first case the retained expression determines one $x$. In the second, each real $y$ determines one pair, giving infinitely many distinct pairs. In the last, no pair satisfies both equations. These exhaust the possibilities. ∎

Geometrically, each nondegenerate linear equation describes a straight line: its solution pairs are points on that line. A common pair is an intersection. Two distinct lines can cross once or be parallel with no crossing. Two equations describing the same line have every point of that line in common. The algebraic classification supplies an exact answer even when a drawing makes nearly parallel lines difficult to distinguish.

### Worked example 2.17 (Contradictory and repeated information)

Compare the systems

$$
\begin{cases}
2x+y=5,\\
4x+2y=12
\end{cases}
\qquad\text{and}\qquad
\begin{cases}
2x+y=5,\\
4x+2y=10.
\end{cases}
$$

In each case, replace the second equation by itself minus twice the first. The first system gives $0=2$, so it has no solution. Its equations require the same quantity $4x+2y$ to be both ten and twelve. The lines are distinct and parallel.

The second gives $0=0$. Its second equation adds no restriction to the first, so all pairs on $2x+y=5$ work. To describe them completely, choose any real number $t$ and write

$$
(x,y)=(t,5-2t),\qquad t\in\mathbb R.
$$

Substitution gives $2t+(5-2t)=5$ and twice that value equals ten, so every displayed pair works. Conversely, every solution has some first coordinate $t$, and the first equation forces its second coordinate to be $5-2t$. Thus the description contains all solutions, not just a few examples. “Infinitely many” here does not mean every pair in the plane: $(0,0)$ still fails.

## Misconceptions and sensible checks

A false terminal statement means no solutions; a true terminal statement means every input still allowed by the retained conditions. In a one-unknown identity this may mean every real number. In a system with one equation remaining, it usually means every point on one line. Confusing these two situations loses an entire condition.

An equation check tests equality, an inequality check tests order, and a system check must test every original equation. Always return to the original conditions, because a copying or transformation error might already have changed an intermediate line. Units and whole-number restrictions belong in the check whenever the problem comes from a story.

Finally, a collection of tested values is not generally a solution method. Several correct trial pairs do not establish infinitely many solutions, and several failed guesses do not establish no solution. Reversible transformations show which possibilities remain and why the classification is exhaustive. The next chapter will connect these symbolic conditions to domains and graphs without replacing that reasoning by visual guesswork.

## Exercises

### Exercise 2.1
<a id="linear-equations-inequalities-systems-ex-1"></a>

Solve $5(2x-3)-2(x+4)=3x+7$ over the reals, and check in the original equation.

<details>
<summary>Hint 1</summary>

**Hint.** Distribute both multipliers before collecting the linear terms.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** After expansion, subtract the right side's variable term from both sides and isolate the remaining multiple of $x$.

</details>
<details>
<summary>Solution</summary>

**Solution.** Expansion gives $10x-15-2x-8=3x+7$, or $8x-23=3x+7$. Subtracting $3x$ and adding twenty-three yields $5x=30$, so $x=6$. In the original, the left side is $5(12-3)-2(6+4)=45-20=25$, and the right side is $18+7=25$. Each step was reversible, so this is the unique real solution.

</details>

### Exercise 2.2
<a id="linear-equations-inequalities-systems-ex-2"></a>

Solve $(x-1)/3+(x+2)/4=5/2$ over the reals. Explain why clearing the denominators is reversible here.

<details>
<summary>Hint 1</summary>

**Hint.** Find a positive common multiple of three, four, and two.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Multiply every term, including the right side, by twelve; then distribute and collect.

</details>
<details>
<summary>Solution</summary>

**Solution.** Multiplication by twelve gives $4(x-1)+3(x+2)=30$, hence $7x+2=30$ and $x=4$. Substitution gives $(4-1)/3+(4+2)/4=1+3/2=5/2$. Twelve is a nonzero constant, so division by twelve reverses the step. The original denominators are also nonzero constants; consequently no real inputs were excluded or introduced by clearing them.

</details>

### Exercise 2.3
<a id="linear-equations-inequalities-systems-ex-3"></a>

Classify the solution sets of $6(z-1)=6z-6$ and $6(z-1)=6z+1$ over the reals. Explain why neither should be assigned the answer $z=0$ merely because the variable terms cancel.

<details>
<summary>Hint 1</summary>

**Hint.** Expand and subtract $6z$ from both sides of each equation.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Decide whether the resulting numerical statement is always true or false, rather than trying to divide by its zero coefficient.

</details>
<details>
<summary>Solution</summary>

**Solution.** The first becomes $-6=-6$, so every real $z$ satisfies it. The second becomes $-6=1$, so no real $z$ satisfies it. Cancelling the variable terms removes any dependence on $z$; it does not assert that $z$ itself is zero. Zero is one solution of the first but not its only solution, and it fails the second just as every other real number does.

</details>

### Exercise 2.4
<a id="linear-equations-inequalities-systems-ex-4"></a>

Solve $7-4x>19$, give interval notation, and check one input on each side of the boundary.

<details>
<summary>Hint 1</summary>

**Hint.** Subtract seven from both sides to isolate the term involving $x$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Dividing by negative four reverses the direction, and the strict comparison excludes the endpoint.

</details>
<details>
<summary>Solution</summary>

**Solution.** Subtracting seven gives $-4x>12$. Division by negative four gives $x<-3$, or $(-\infty,-3)$. At $x=-4$, the original reads $23>19$, true; at $x=-2$, it reads $15>19$, false. At the boundary $x=-3$, it reads $19>19$, false, so the endpoint must be omitted. The reversed comparison selects precisely the correct side.

</details>

### Exercise 2.5
<a id="linear-equations-inequalities-systems-ex-5"></a>

Solve $-5\le3-2x<9$ over the reals and write the solution interval. Describe which finite endpoint is included.

<details>
<summary>Hint 1</summary>

**Hint.** Subtract three in all three positions, keeping both comparisons.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Divide by negative two and reverse both comparisons, then reorder the chain from the smaller endpoint to the larger.

</details>
<details>
<summary>Solution</summary>

**Solution.** Subtraction gives $-8\le-2x<6$, so division by negative two yields $4\ge x>-3$. In increasing order, $-3<x\le4$, giving $(-3,4]$. At $x=4$, the middle expression is negative five and satisfies the non-strict lower bound. At $x=-3$, it is nine and fails the strict upper bound. The original lower comparison determines the included upper endpoint for $x$ because the coefficient of $x$ is negative.

</details>

### Exercise 2.6
<a id="linear-equations-inequalities-systems-ex-6"></a>

A workshop costs £38 to organise and £7 per attendee for materials. There is a £120 budget. Find the largest possible nonnegative whole-number attendance under this model, and explain why rounding upwards can fail.

<details>
<summary>Hint 1</summary>

**Hint.** “Within the budget” includes equality and should be represented by an inequality for total cost.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Solve the inequality over the reals first, then retain only nonnegative whole numbers and check the largest candidate.

</details>
<details>
<summary>Solution</summary>

**Solution.** Let $n$ denote attendance. The condition is $38+7n\le120$, hence $7n\le82$ and $n\le82/7=11\tfrac57$. The permitted counts are zero through eleven, so the maximum is eleven. Its cost is $38+77=115$ pounds. Twelve would cost $38+84=122$ pounds, exceeding the budget. Rounding the real upper bound to the nearest whole number would therefore give an impermissible answer.

</details>

### Exercise 2.7
<a id="linear-equations-inequalities-systems-ex-7"></a>

Solve the system $x+y=9$, $2x-y=6$ by substitution. Check the ordered pair in both equations.

<details>
<summary>Hint 1</summary>

**Hint.** The first equation already makes it easy to express $y$ in terms of $x$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Substitute the whole expression $9-x$ for $y$ in the second equation, retaining its surrounding minus sign.

</details>
<details>
<summary>Solution</summary>

**Solution.** The first equation gives $y=9-x$. Then $2x-(9-x)=6$, so $3x-9=6$ and $x=5$. Substituting back gives $y=4$. The pair $(5,4)$ satisfies $5+4=9$ and $10-4=6$. Every solution must give this value of $x$ in the substituted equation, and then this value of $y$ in the retained relation, establishing uniqueness.

</details>

### Exercise 2.8
<a id="linear-equations-inequalities-systems-ex-8"></a>

Solve $3x+2y=18$, $2x-3y=-1$ by elimination. Explain why keeping one original equation is necessary after adding suitable multiples.

<details>
<summary>Hint 1</summary>

**Hint.** Make the $y$ coefficients opposites by using multipliers three and two.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The resulting sum determines $x$. Recover $y$ from either original equation, then check both.

</details>
<details>
<summary>Solution</summary>

**Solution.** Multiplying gives $9x+6y=54$ and $4x-6y=-2$. Their sum is $13x=52$, so $x=4$. In the first original, $12+2y=18$, giving $y=3$. The second checks as $8-9=-1$. The sum alone only specifies $x=4$ and leaves $y$ unrestricted; retaining one equation supplies the condition that forces $y=3$. Thus the unique solution is $(4,3)$.

</details>

### Exercise 2.9
<a id="linear-equations-inequalities-systems-ex-9"></a>

Classify and fully describe the solution sets of these systems: (a) $x-2y=3$, $2x-4y=6$; (b) $x-2y=3$, $2x-4y=7$. In the infinite case, use one free real parameter.

<details>
<summary>Hint 1</summary>

**Hint.** In each system, subtract twice the first equation from the second.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A true numerical equality leaves the first equation in force. Choose $y$ freely and solve that retained relation for $x$.

</details>
<details>
<summary>Solution</summary>

**Solution.** In (a), elimination gives $0=0$, so the equations describe the same line. Taking $y=t$ with any real $t$ gives $x=3+2t$, hence all solutions are $(3+2t,t)$ for $t\in\mathbb R$. Substitution gives $x-2y=3$ and twice that equals six. Every solution has this form because its second coordinate can be called $t$. In (b), elimination gives $0=1$, a contradiction, so there are no solutions. The lines are parallel and distinct.

</details>

### Exercise 2.10
<a id="linear-equations-inequalities-systems-ex-10"></a>

For a fixed real constant $k$, classify all real solutions of $(k-2)x=3k-6$. A proposed method divides immediately by $k-2$. Explain the missing case and why it matters.

<details>
<summary>Hint 1</summary>

**Hint.** Factor the right side so that the common coefficient is visible.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Separate $k\ne2$, where division is allowed, from $k=2$, where you must inspect the original equation directly.

</details>
<details>
<summary>Solution</summary>

**Solution.** The equation is $(k-2)x=3(k-2)$. If $k\ne2$, division by the nonzero constant $k-2$ gives the unique solution $x=3$. If $k=2$, the original equation is $0x=0$, so every real $x$ satisfies it. There is no value of $k$ giving an empty solution set. Dividing immediately assumes precisely the condition that fails in the exceptional case, and would incorrectly discard all its solutions except three. A parameter is fixed during solving, but its possible values still need separate consideration when they affect whether an operation is defined.

</details>

## Sources

This chapter's explanations, examples, and exercises are original. For parallel treatments, see OpenStax, *Algebra and Trigonometry 2e*: [2.2, Linear Equations in One Variable](https://openstax.org/books/algebra-and-trigonometry-2e/pages/2-2-linear-equations-in-one-variable); [2.7, Linear Inequalities and Absolute Value Inequalities](https://openstax.org/books/algebra-and-trigonometry-2e/pages/2-7-linear-inequalities-and-absolute-value-inequalities); and [11.1, Systems of Linear Equations: Two Variables](https://openstax.org/books/algebra-and-trigonometry-2e/pages/11-1-systems-of-linear-equations-two-variables). The references provide further reading on the named topics rather than the source of the particular worked questions here.

The local shared-foundations algebra chapter (`modules/textbooks/shared_foundations/00c-algebra.qmd`) and Lucent algebra refresher (`modules/lucent/courses/refresher/02-algebra-functions.md`) are scope seeds for equivalence, sign reversal, and simultaneous equations. This text develops those ideas at pre-university level, uses British spelling, and is licensed CC BY-SA 4.0.

## Summary

Solving an equation means describing every allowed input satisfying it. Adding equal quantities and multiplying by nonzero constants give reversible steps; a zero coefficient requires its own case. Inequality operations follow the order of the real number line, with negative multiplication reversing direction. Intervals describe real solution sets, while contexts can further restrict them to whole numbers or other permitted inputs.

A linear system requires both equations at once. Substitution and elimination preserve its conditions when a needed original relation is retained. They lead to exactly one pair, a contradiction, or a whole line of pairs. In [Functions, Domain, and Graphs](functions-domain-graphs.md), these solution ideas become tools for connecting input rules to pictures and for distinguishing a formula from the set of inputs on which it is used.
