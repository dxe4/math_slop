
# Graphing Stories {#section-1-graphing-stories}

<a id="section-1-from-tables-to-pictures"></a>
## From tables to pictures {#section-3-from-tables-to-pictures}

In **Patterns and Sequences** we studied ordered lists of numbers. A natural next step is to place those numbers on a grid. When we plot the input on the horizontal axis and the output on the vertical axis, each pair becomes a point. The collection of points reveals shape: straight or curved, rising or falling, steep or gentle. This chapter teaches how to move between stories, tables, rules, and graphs, and how to read meaning from the picture.

<a id="section-5-coordinate-pairs-and-axes"></a>
## Coordinate pairs and axes {#section-7-coordinate-pairs-and-axes}

A **coordinate pair** $(x, y)$ places a point on a two-dimensional grid. The first number, $x$, tells us how far to move horizontally; the second, $y$, tells us how far to move vertically. The horizontal axis is often called the $x$-axis, and the vertical axis the $y$-axis. Their intersection is the **origin**, with coordinates $(0, 0)$.

**Convention.** In applied problems, the horizontal axis usually carries the independent variable (the quantity we choose or control), and the vertical axis carries the dependent variable (the quantity that results).

<a id="section-11-plotting-a-linear-rule"></a>
## Plotting a linear rule {#section-13-plotting-a-linear-rule}

**Worked example (a café table and its domain).**

Return to the café rule $C = 3s + 2$. As in the opening chapter, an allowed order contains at least one whole sandwich: $s=1,2,3,\ldots$. To inspect the fixed term, the table also evaluates the same algebraic rule at $s=0$. That row is an extension reference, not an allowed order in this model:

| Sandwiches $s$ | Cost $C$ |
|---:|---:|
| 0 | 2 |
| 1 | 5 |
| 2 | 8 |
| 3 | 11 |
| 4 | 14 |

The points $(0, 2)$, $(1, 5)$, $(2, 8)$, $(3, 11)$, $(4, 14)$ lie on a straight line. Extending $C = 3s + 2$ to real inputs gives this continuous **affine** rule, conventionally called a **linear function** in school algebra. The actual café graph consists only of the points for positive whole sandwich counts; the connecting line and its intercept show the algebraic extension.

Two numbers capture everything about this line:
- The **slope** (or gradient) is the change in $C$ divided by the change in $s$. Between $(1, 5)$ and $(4, 14)$, the change in $C$ is $14 - 5 = 9$ and the change in $s$ is $4 - 1 = 3$. The slope is $9 \div 3 = 3$. This matches the coefficient of $s$ in the rule.
- The **intercept** is the value of $C$ when $s = 0$. From the table, $C = 2$ when $s = 0$. This matches the constant term in the rule. Here the intercept is a reference for the extended line, not a bill for an allowed zero-sandwich order.

**Definition 3.1 (slope).** For two points $(x_{1}, y_{1})$ and $(x_{2}, y_{2})$ on a line, the slope $m$ is

$$m = \frac{y_{2} - y_{1}}{x_{2} - x_{1}}, \quad \text{provided } x_{2} \neq x_{1}.$$

**Definition 3.2 (intercept).** The $y$-intercept is the value of $y$ when $x = 0$.

<a id="section-37-negative-and-fractional-slope"></a>
## Negative and fractional slope {#section-39-negative-and-fractional-slope}

Not every story rises. A tank starts with 50 litres and drains at 4 litres per minute. The volume is $V = 50 - 4t$. The table is:

| Time $t$ | Volume $V$ |
|---:|---:|
| 0 | 50 |
| 5 | 30 |
| 10 | 10 |

The slope between $(0, 50)$ and $(5, 30)$ is $(30 - 50) \div (5 - 0) = -20 \div 5 = -4$. The negative slope tells us the volume decreases as time increases. The intercept is 50, the starting volume.

<a id="section-49-worked-example-finding-slope-from-two-points"></a>
### Worked example: finding slope from two points {#section-51-worked-example-finding-slope-from-two-points}

Find the slope of the line passing through $(2, 7)$ and $(6, 19)$.

$$m = \frac{19 - 7}{6 - 2} = \frac{12}{4} = 3.$$

The slope is 3. This means that for every 1-unit increase in $x$, $y$ increases by 3 units.

<a id="section-57-the-slope-intercept-form"></a>
## The slope-intercept form {#section-59-the-slope-intercept-form}

Any linear function can be written as

$$y = mx + c,$$

where $m$ is the slope and $c$ is the $y$-intercept. This is called the **slope-intercept form**.

**Worked example (recovering a line from a point and its slope).**

Given a slope and a point, we can find the equation. Suppose a line has slope $m = 2$ and passes through $(3, 10)$. Substitute into $y = mx + c$:

$$10 = 2(3) + c,$$
$$10 = 6 + c,$$
$$c = 4.$$

The equation is $y = 2x + 4$.

<a id="section-75-domain-and-range-from-context"></a>
## Domain and range from context {#section-77-domain-and-range-from-context}

The **domain** of a function is the set of allowed inputs. The **range** is the set of possible outputs. Context often restricts the domain.

For the café model introduced in the opening chapter, $s$ is a whole number with $s \geq 1$. Its graph is a set of isolated dots, not a continuous line: neither a zero-sandwich order nor a half-sandwich order is allowed. The $s=0$ row above belongs to the algebraic extension used to locate the intercept. A different story in which the input represents elapsed time may allow zero and fractional inputs; that requires its own stated domain.

For the draining tank, the formula $V = 50 - 4t$ predicts negative volumes after $t = 12.5$ minutes. Physically, the tank is empty at $t = 12.5$, so the sensible domain is $0 \leq t \leq 12.5$.

**Misconception.** A drawn line between points can suggest values that the context does not permit. Always ask whether the input can take any real value or only certain ones.

<a id="section-85-non-linear-graphs"></a>
## Non-linear graphs {#section-87-non-linear-graphs}

Not every story produces a straight line. The area of a square with side length $s$ is $A = s^{2}$. The table is:

| Side $s$ | Area $A$ |
|---:|---:|
| 0 | 0 |
| 1 | 1 |
| 2 | 4 |
| 3 | 9 |
| 4 | 16 |

The points $(0, 0)$, $(1, 1)$, $(2, 4)$, $(3, 9)$, $(4, 16)$ lie on a curve called a **parabola**. The slope is not constant: between $s = 0$ and $s = 1$ the average rate of change is $1$, but between $s = 3$ and $s = 4$ it is $7$.

<a id="section-99-practice-exercises"></a>
## From a picture to an explicit model {#section-280-further-development-from-a-picture-to-an-explicit-model}

The following development supplies the reasoning behind this chapter's rules and connects its representations. All original headings, exercises and keys above remain unchanged. The earlier 150-minute estimate predates this development; the full expanded workload has not been calibrated.

<a id="section-282-a-graph-is-a-set-of-allowed-input-output-pairs"></a>
### A graph is a set of allowed input–output pairs {#section-284-a-graph-is-a-set-of-allowed-input-output-pairs}

A graph is more than a picture that happens to pass through some dots. For a stated rule and domain, it consists of every permitted pair $(x,y)$ with $y$ equal to the rule's output at $x$. A table usually shows only a selection of those pairs. To reconstruct the intended mathematical object, read three pieces together: the input domain, the output rule and the labels on the axes.

Imagine a supplied model $D=2t+1$, where $t$ is elapsed time in hours and $D$ is distance from a depot in kilometres along a straight route. Suppose the model applies for $0\le t\le4$. A table can show $(0,1),(1,3),(2,5),(4,9)$, but the graph also includes $(1/2,2)$ because the domain permits half an hour. The starting position is one kilometre from the depot; $D$ is not the distance travelled since the clock started. The model says that a further two kilometres are covered each hour in the chosen direction.

If the same expression describes the lengths of rods in numbered storage slots, with $t$ replaced by a slot number, fractional inputs would no longer be allowed. The visible dots might lie on the same extended line, but the graph of the slot model would be discrete. Connecting dots is therefore a modelling decision. A line segment can be a useful comparison aid without being a claim that every point on it represents an allowed object.

The vertical direction also needs a label and a scale. A plotted point at horizontal coordinate 2 and vertical coordinate 5 might mean two hours and five kilometres, two items and five pounds, or two centimetres and five square centimetres. Its position on paper alone cannot decide. Include units in the table headings and axis labels, and say whether zero is an allowed input, an algebraic reference or an omitted occasion.

To read a table back into a story, try complete sentences: “At 2 hours, the model places the object 5 kilometres from the depot.” This identifies which number is the input, which is the output and what is being measured. It also prevents the mistaken sentence “The object travelled 5 kilometres in those 2 hours,” which would ignore the nonzero starting position.

<a id="section-294-reconstructing-a-line-from-changes-and-a-starting-value"></a>
### Reconstructing a line from changes and a starting value {#section-296-reconstructing-a-line-from-changes-and-a-starting-value}

A constant rate links the algebraic and graphical descriptions. It means that for every two allowed real inputs $x_1,x_2$, their output change satisfies $y_2-y_1=m(x_2-x_1)$ with the same $m$. The condition concerns every permitted input change, not just jumps of one unit. Choose one allowed pair $(x_0,y_0)$. Then $y-y_0=m(x-x_0)$, so rearranging gives $y=mx+(y_0-mx_0)$. Calling the final constant $c$ gives the school-algebra form $y=mx+c$. Its affine extension has value $c$ at zero; the original model's domain may exclude zero.

Consider a hypothetical hire charge that is explicitly defined to have a constant hourly rate. Assume real hire times $0<t\le8$ hours are allowed; zero is only a reference for extending the line. A two-hour hire costs £7 and a six-hour hire costs £13. The increase of £6 occurs over four hours, so the rate is $6/4=3/2$ pounds per hour. Use either observation to recover the fixed term:
$$7=\frac32(2)+c,\qquad c=4.$$
The rule is $B=4+\frac32t$. Under a continuously billed model, half an hour costs $4+\frac32\cdot\frac12=19/4$ pounds. If a different business charges for each started hour, this formula would not describe its billing. State the rule rather than deciding from the word “hire.”

The two given points check the calculation: at 2 hours the variable part is £3, while at 6 hours it is £9. Adding the £4 fixed term gives the stated bills. Those checks accompany a derivation. They do not prove that an unknown actual hire company always follows this tariff. Here constant rate was supplied as a premise.

Unequal horizontal gaps must be respected. In a table, outputs might change by £3, then by £6, because the time steps are two hours and four hours. The equal quantity is the change *per hour*, not the raw difference between successive rows. This is why slope divides the output change by the input change.

Keep the order consistent in that quotient. Reversing both point labels changes both signs and gives the same slope:
$$\frac{y_1-y_2}{x_1-x_2}=\frac{-(y_2-y_1)}{-(x_2-x_1)}
=\frac{y_2-y_1}{x_2-x_1}.$$
Reversing only the numerator changes the sign incorrectly. Also keep the denominator condition: if the two $x$ coordinates agree, the quotient is unavailable. A vertical line such as $x=3$ has no finite slope of this form and cannot give one output $y$ for every allowed $x=3$. A horizontal line has slope zero because its output does not change, while its inputs can differ.


<a id="section-312-what-two-points-determine"></a>
### What two points determine {#section-314-what-two-points-determine}

Two points with different horizontal coordinates determine exactly one rule of the form $y=mx+c$. The hypothesis about the model class matters. To see why, suppose both points lie on such a line. Their equations are $y_1=mx_1+c$ and $y_2=mx_2+c$. Subtracting eliminates $c$:
$$y_2-y_1=m(x_2-x_1).$$
Because $x_2-x_1\ne0$, the slope has to be the quotient printed above. Once it is known, the intercept has to be $c=y_1-mx_1$. There is no remaining choice for either coefficient, and substituting those values back verifies both points.

This is a short claim-and-reason argument. Its conclusion is uniqueness among affine rules, not uniqueness among every possible function. The different curves at the end of the chapter show why that qualification is needed. A physical construction or an explicit modelling assumption must justify choosing the affine class in the first place.

If both records have the same horizontal coordinate but different outputs, they do not fit any single-valued $y=mx+c$ rule. If the two records repeat the same point, they supply only one condition: many different slopes can pass through it by choosing a matching intercept. Repeating a measurement position is not the same mathematical information as supplying a second distinct input. These cases explain the nonzero denominator condition instead of treating it as a rule added only to avoid a division error.

<a id="section-322-a-rate-has-units-the-apparent-steepness-depends-on-the-"></a>
### A rate has units; the apparent steepness depends on the axes {#section-324-a-rate-has-units-the-apparent-steepness-depends-on-the-}

For the draining-tank model above, the slope is $-4$ litres per minute. The minus sign describes a decrease in volume as time advances. It does not mean that the volume itself is negative. Before the tank is empty, a later input has a smaller output, even though both volumes are nonnegative.

If time is measured in seconds instead, one minute becomes 60 seconds. The same decrease of 4 litres over one minute becomes a decrease of 4 litres over 60 seconds, so the rate is $-1/15$ litre per second. Substituting $t=u/60$ into the minute-based rule gives
$$V=50-4(u/60)=50-\frac{u}{15},$$
where $u$ is seconds. The physical model has not changed; the numerical coefficient changed with the input unit. A rate without its units is incomplete.

The drawing scale creates a separate issue. If one horizontal square represents two minutes and one vertical square represents ten litres, a drop of one vertical square over one horizontal square means a rate of $-10/2=-5$ litres per minute. Counting “down one, across one” without reading the labels would give the wrong rate. Stretching the picture vertically makes a line appear steeper, but it does not alter the labelled input and output changes. Use coordinate differences to compare rates, rather than the angle a line makes on a resized page.

A text description can carry the same information as the drawing: “The graph passes through $(0,50)$ and $(5,30)$, with time in minutes horizontally and volume in litres vertically.” These two coordinates give the decrease, the interval and the slope calculation. The description remains usable when the graph is small, printed without colour, or unavailable.

When comparing two lines, use compatible units first. A rate of two kilometres per minute is not smaller than a rate of thirty kilometres per hour merely because 2 is smaller than 30. Two kilometres per minute means 120 kilometres per hour. An axes conversion or a written unit conversion makes the comparison meaningful.

<a id="section-336-read-a-range-from-the-allowed-inputs-not-from-the-whole"></a>
### Read a range from the allowed inputs, not from the whole extended line {#section-338-read-a-range-from-the-allowed-inputs-not-from-the-whole}

The domain restriction has consequences for the range. For the café model with all positive integer sandwich counts, the costs are $5,8,11,14,\ldots$ pounds. The range is not every real amount above £5. A bill of £13 lies on the extended line at $s=(13-2)/3=11/3$, but that is not an allowed whole sandwich count. If the model is further restricted to one through four sandwiches, its range is exactly $\{5,8,11,14\}$.

For a continuous-time rule the reasoning can differ. In the tank model, $V=50-4t$ on $0\le t\le25/2$ decreases from 50 litres to zero. Every volume between those endpoints is attained: for a proposed volume $v$ with $0\le v\le50$, choose $t=(50-v)/4$. This time lies between 0 and $25/2$ and substitution gives $V=v$. That proves both parts of a range claim: no output lies outside the interval, and every value inside it can occur.

Merely listing the largest and smallest outputs would not establish that no gaps occur. The café range provides a counterexample to that shortcut. Domain questions and range questions are connected, but they require their own reasoning. A useful routine is to describe the possible inputs first, calculate which outputs they give, and then check whether every claimed output can actually be reached.

A function must give exactly one output at each allowed input. A table with both $(2,5)$ and $(2,8)$ cannot represent a single-valued output rule unless an additional variable distinguishes the two situations. Conversely, different inputs may have the same output. In the earlier ball-height exercise, two different times produce the same height; this does not stop height from being a function of time. The direction in which we ask the question matters.

For a given physical-looking formula, the equation is part of a declared model. It is not automatically an experimentally established law. Ask which starting conditions, duration and idealisations are being supplied, and keep conclusions inside those conditions. This is especially important when a formula predicts a negative length or volume beyond the intended interval.

<a id="section-348-one-story-can-require-more-than-one-expression"></a>
### One story can require more than one expression {#section-350-one-story-can-require-more-than-one-expression}

Suppose we want the tank model to cover times after it has emptied as well. A single extended line would give $V=-10$ litres at 15 minutes, which is incompatible with an empty tank. Under the explicit assumption that outflow stops when the tank becomes empty and no water is added, use the piecewise rule
$$V(t)=\begin{cases}
50-4t,&0\le t\le25/2,\\
0,&t>25/2.
\end{cases}$$
“Piecewise” means that the condition chooses which expression to use. The overall input domain is every real $t\ge0$, but the first expression applies only to the interval written beside it. At $t=5$ it gives 30 litres. At $t=15$, the second branch gives zero.

Check the joining input. At $t=25/2$, the first branch gives $50-4(25/2)=0$. The later branch also has value zero as its constant output. We assigned the joining point to the first branch so that the definition selects one branch there; assigning it to the second instead would give the same value. A piecewise definition is not ambiguous if overlapping conditions produce the same output, but disjoint conditions make the choice easier to read.

A change of rate need not create a jump. Imagine a rule for a delivery route's total distance travelled: travel at 2 kilometres per hour for two hours, then at 1 kilometre per hour for the next three. For $0\le t\le2$, the distance is $2t$. For $2<t\le5$, it is $4+(t-2)$. The second expression begins from the 4 kilometres already covered and adds the distance during the later stage. Writing only $t$ there would lose the first part of the journey. Both branches give 4 kilometres at the joining time; at 5 hours the total is 7 kilometres.

Other stories do create jumps. A charge for each started hour changes immediately after an hour boundary even if the elapsed time changes only a little. The extension task gives a precise example. A sloping line between two charges would invent intermediate prices. Piecewise conditions, open or closed endpoints and a sentence about what happens at the boundary are the mathematical information behind such a graph. No animation is needed to explain them.

<a id="section-363-a-changing-average-rate-and-a-limit-on-inference"></a>
### A changing average rate and a limit on inference {#section-365-a-changing-average-rate-and-a-limit-on-inference}

For any two distinct permitted inputs, the quotient of output change by input change is an average rate over that interval. For the square-area rule, changing the side from $s$ to $s+1$ changes the area by
$$(s+1)^2-s^2=2s+1.$$
This comes from expanding the square: $s^2+2s+1-s^2=2s+1$. At $s=1$ the increase is 3 square units; at $s=3$ it is 7 square units. The input change is one length unit in both cases, so the average rates differ. This explains why the graph cannot be one straight line. We have compared finite intervals; no derivative or instantaneous-rate rule is being assumed.

Several collinear observations do not establish that an unknown rule is a line everywhere. For example, $y=2x+1$ and
$$y=2x+1+x(x-1)(x-2)$$
both pass through $(0,1),(1,3),(2,5)$. At each of those inputs the added product is zero. At $x=3$, their outputs are 7 and 13. Thus the same small table can be compatible with different curves and different extrapolations.

An interpolation is a proposed value between recorded inputs; an extrapolation goes beyond them. Either can be exact when a justified rule is given, or uncertain when the rule is only a fitted proposal. Drawing a smooth connection does not settle which situation we are in. Keep the formula and its justification visible beside the graph.

Before accepting a graphical answer, reconstruct it in another form. Translate the point into a sentence with units; put it into the table if the input is allowed; substitute it into the stated formula or the appropriate piecewise branch. Agreement checks consistency among these representations. The original domain and modelling assumptions determine what the result means.
<!-- EULER-AS-03-EXPOSITION-END -->

<!-- EULER-AS-03-QUESTIONS-BEGIN -->
<a id="section-379-practice-extensions"></a>

## Summary

<a id="section-273-looking-back-and-forward"></a>
This chapter connected tables and rules to graphs. We learned to compute slope, write equations in slope-intercept form, and restrict domains according to context. We also saw that not every rule produces a straight line.

In the next chapter, **Equations with Two Unknowns**, we will meet situations with two variables at once. Instead of one line, we will work with pairs of lines and ask where they cross.

<!-- EULER-AS-03-EXPOSITION-BEGIN -->
<a id="section-278-further-development-from-a-picture-to-an-explicit-model"></a>

<a id="section-526-summary"></a>
A graph represents the permitted input-output pairs, with units attached to its axes. A fitted or supplied formula must keep its stated domain; a connecting line does not create evidence outside that domain.

**Where next.** Continue with [Algebra and Functions](#/books/algebra-and-functions) to study expressions, equations and functions at the next level. Use its stated preparation to choose your starting chapter.

<!-- Linked resource: library:book-algebra-and-functions -->

## Exercises {#section-101-practice-exercises}

<a id="section-101-exercise-1"></a>
### Exercise 1 {#section-103-exercise-1}
Plot the points $(0, 3)$, $(2, 7)$, $(4, 11)$, $(5, 14)$. Do they lie on a straight line? If so, find the slope and the equation.

<details>
<summary>Hint 1</summary>

**Hint.** Compare slopes between successive listed points.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use every point, including the last, rather than fitting a line to only the first two.

</details>

<details>
<summary>Solution</summary>

**Solution.** Check the slopes between consecutive points:
- From $(0, 3)$ to $(2, 7)$: $(7 - 3) \div (2 - 0) = 2$.
- From $(2, 7)$ to $(4, 11)$: $(11 - 7) \div (4 - 2) = 2$.
- From $(4, 11)$ to $(5, 14)$: $(14 - 11) \div (5 - 4) = 3$.

The last slope differs, so the points do **not** all lie on one straight line. The first three do, with equation $y = 2x + 3$.

</details>

<a id="section-129-exercise-2"></a>
### Exercise 2 {#section-131-exercise-2}
A line has slope $-2$ and passes through $(4, 9)$. Find its equation in slope-intercept form.

<details>
<summary>Hint 1</summary>

**Hint.** Start from slope-intercept form with the supplied slope.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Substitute the known point to determine the remaining constant, then check the point again.

</details>

<details>
<summary>Solution</summary>

**Solution.** Substitute into $y = mx + c$:

$$9 = -2(4) + c,$$
$$9 = -8 + c,$$
$$c = 17.$$

The equation is $y = -2x + 17$.

</details>

<a id="section-158-exercise-3"></a>
### Exercise 3 {#section-160-exercise-3}
A car travels at a constant speed of 60 kilometres per hour. Write a rule for distance $d$ in terms of time $t$, state a sensible domain, and find the distance after 3.5 hours.

<details>
<summary>Hint 1</summary>

**Hint.** Distance is speed multiplied by elapsed time in matching units.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** State the permitted elapsed times before substituting the requested time.

</details>

<details>
<summary>Solution</summary>

**Solution.** The rule is $d = 60t$. If the journey lasts at most 5 hours, a sensible domain is $0 \leq t \leq 5$. After $t = 3.5$ hours:

$$d = 60 \times 3.5 = 210.$$

The distance is 210 kilometres.

</details>

<a id="section-185-exercise-4"></a>
### Exercise 4 {#section-187-exercise-4}
Find the slope between $(-1, 4)$ and $(3, -8)$, and interpret its meaning.

<details>
<summary>Hint 1</summary>

**Hint.** Use the same ordering of points in numerator and denominator.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Divide the change in vertical coordinate by the change in horizontal coordinate and interpret the sign.

</details>

<details>
<summary>Solution</summary>

**Solution.**

$$m = \frac{-8 - 4}{3 - (-1)} = \frac{-12}{4} = -3.$$

The slope is $-3$. For every 1-unit increase in $x$, $y$ decreases by 3 units.

</details>

<a id="section-212-exercise-5"></a>
### Exercise 5 {#section-214-exercise-5}
The height of a ball thrown upward is given by $h = 20t - 5t^{2}$, where $t$ is in seconds and $h$ is in metres. Find the height at $t = 1$ and $t = 3$, and determine when the ball hits the ground.

<details>
<summary>Hint 1</summary>

**Hint.** Substitute each requested time into the complete quadratic expression.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** For ground contact set height to zero, factor out t, and distinguish launch from later return.

</details>

<details>
<summary>Solution</summary>

**Solution.** At $t = 1$:

$$h = 20(1) - 5(1)^{2} = 20 - 5 = 15.$$

At $t = 3$:

$$h = 20(3) - 5(3)^{2} = 60 - 45 = 15.$$

The ball is at 15 metres after 1 second and after 3 seconds. It hits the ground when $h = 0$:

$$20t - 5t^{2} = 0,$$
$$5t(4 - t) = 0.$$

So $t = 0$ (launch) or $t = 4$. The ball hits the ground after 4 seconds.

</details>

<a id="section-248-exercise-6"></a>
### Exercise 6 {#section-250-exercise-6}
Explain why the graph of $y = x^{2}$ is not a straight line, using the concept of slope.

<details>
<summary>Hint 1</summary>

**Hint.** A straight line would give the same average slope on every interval.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Compare two intervals of equal horizontal length on the square rule.

</details>

<details>
<summary>Solution</summary>

**Solution.** Choose three points: $(0, 0)$, $(1, 1)$, $(2, 4)$. The slope from $(0, 0)$ to $(1, 1)$ is $(1 - 0) \div (1 - 0) = 1$. The slope from $(1, 1)$ to $(2, 4)$ is $(4 - 1) \div (2 - 1) = 3$. Since the slope changes, the graph cannot be a straight line.

</details>

<a id="section-271-looking-back-and-forward"></a>

<a id="section-381-practice-extensions"></a>
### Exercise 7 — AS-03-E07 — Recover and restrict a line {#section-385-as-03-e07-recover-and-restrict-a-line}

A supplied model says that a water depth $H$ decreases at a constant rate with elapsed time $t$. At $t=2$ minutes the depth is 11 centimetres; at $t=6$ minutes it is 5 centimetres. Find the affine rule, the depth at four minutes, and the largest interval beginning at $t=0$ on which the rule has nonnegative depth. Give its range on that interval, and express the same rate in centimetres per second. Assume the stated constant-rate model; the two observations alone do not establish it.

<details>
<summary>Hint 1</summary>

**Hint.** Use the change in depth divided by elapsed minutes to obtain the rate.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Find the starting depth by substitution, solve where depth becomes zero, and convert a per-minute change to a per-second change.

</details>



<a id="section-402-as-03-e08-a-stepped-charge"></a>
### Exercise 8 — AS-03-E08 — A stepped charge {#section-404-as-03-e08-a-stepped-charge}

A hypothetical room charge is zero at $t=0$. For a positive hire lasting at most three hours, it is £3 for the first started hour and £2 for each additional started hour. Write a piecewise rule for $0\le t\le3$. Find the charges at $t=1/2,1,101/100,2,3$ hours and the range. Explain why joining the points $(1,3)$ and $(2,5)$ by a sloping segment would not describe this tariff.

<details>
<summary>Hint 1</summary>

**Hint.** Identify which started hour is being charged at each endpoint.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Write separate rules on the intervals ending at one, two and three hours; test just after an endpoint.

</details>



<a id="section-421-as-03-e09-does-a-table-identify-a-curve"></a>
### Exercise 9 — AS-03-E09 — Does a table identify a curve? {#section-423-as-03-e09-does-a-table-identify-a-curve}

On $0\le x\le3$, compare $q(x)=x^2$ and
$$r(x)=x^2+x(x-1)(x-2).$$
Check both rules at $x=0,1,2$ and at $x=3$. Do the three points $(0,0),(1,1),(2,4)$ establish which of the two rules is intended? State what is being extrapolated and identify one piece of extra information that could settle the choice.

<details>
<summary>Hint 1</summary>

**Hint.** The added product vanishes at some of the tabulated inputs.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Evaluate it at the remaining requested input, then distinguish an observed table from a specified formula.

</details>

<!-- EULER-AS-03-QUESTIONS-END -->

<!-- EULER-AS-03-SOLUTIONS-BEGIN -->

<a id="section-444-solutions-to-practice-extensions"></a>

<a id="section-500-a-further-practice-problem"></a>
<a id="section-500-exercise-10"></a>
### Exercise 10 {#section-502-exercise-10}
<a id="graphing-stories-ex-10"></a>

A supplied plant-growth model is $H(t)=12+2t$, where height $H$ is in centimetres and elapsed time $t$ is in days, with $0\le t\le6$. Find the height after four days, the time when the model reaches 20 cm, and the range on the stated domain. Does the rule justify a prediction for day ten?

<details>
<summary>Hint 1</summary>

**Hint.** Use the formula once with the time known and once with the height known.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** For the range, compare the endpoint heights and the sign of the slope; keep the stated time domain.

</details>
<details>
<summary>Solution</summary>

**Solution.** At four days, $H(4)=12+2(4)=20$ cm. Conversely, $12+2t=20$ gives $2t=8$ and $t=4$ days, which lies in the allowed interval. The positive slope means height increases as t increases. The endpoint values are $H(0)=12$ and $H(6)=24$, so the range is $12\le H\le24$ cm: for every height $h$ in that interval, $t=(h-12)/2$ lies between zero and six and gives $H(t)=h$. Day ten is outside the supplied model domain. Algebra can evaluate the extended formula there, but the given model does not justify that prediction.

</details>

<a id="section-524-summary"></a>

## Solutions {#section-446-solutions-to-practice-extensions}

<a id="section-446-as-03-e07-solution"></a>
### AS-03-E07 — solution {#section-448-as-03-e07-solution}

<details>
<summary>Solution</summary>

**Solution.**

The output change is $5-11=-6$ centimetres over $6-2=4$ minutes, so the slope is $-6/4=-3/2$ centimetres per minute. Write $H=-\frac32t+c$. At $t=2$, $11=-3+c$, hence $c=14$. Thus $H=14-\frac32t$, and at four minutes the depth is $14-6=8$ centimetres.

Elapsed time requires $t\ge0$. Nonnegative depth requires $14-\frac32t\ge0$, so $t\le28/3$. The requested interval is $[0,28/3]$ minutes; a continuation of this line beyond it would give negative depth. Its range is $[0,14]$ centimetres. Indeed every allowed time gives a depth in that interval, and for any $h$ in that interval the time $t=2(14-h)/3$ lies in $[0,28/3]$ and gives depth $h$.

Dividing the minute-based rate by 60 gives $-\frac{3}{2}\cdot\frac1{60}=-1/40$ centimetre per second. If $u$ denotes seconds, the rule becomes $H=14-u/40$ on $0\le u\le560$. The rate changed numerical value because the time unit changed, not because the model's draining behaviour changed.

</details>

<a id="section-461-as-03-e08-solution"></a>
### AS-03-E08 — solution {#section-463-as-03-e08-solution}

<details>
<summary>Solution</summary>

**Solution.**

For the declared domain, the charge in pounds is
$$B(t)=\begin{cases}
0,&t=0,\\
3,&0<t\le1,\\
5,&1<t\le2,\\
7,&2<t\le3.
\end{cases}$$
A hire ending exactly at an hour boundary does not start the next hour; that is why each positive interval includes its right endpoint and excludes its left. The requested values are £3, £3, £5, £5 and £7, respectively. The range is the four-element set $\{0,3,5,7\}$ pounds.

A straight segment between $(1,3)$ and $(2,5)$ would assign the halfway time $t=3/2$ the charge £4. The actual tariff gives £5 because a second hour has been started. The stepped rule's domain is continuous, but its outputs form a finite discrete set. Continuous input therefore does not by itself justify a continuous straight-line connection between table entries.

</details>

<a id="section-481-as-03-e09-solution"></a>
### AS-03-E09 — solution {#section-483-as-03-e09-solution}

<details>
<summary>Solution</summary>

**Solution.**

At each of $x=0,1,2$, the product $x(x-1)(x-2)$ is zero. Thus both rules give the table $0,1,4$. At $x=3$, $q(3)=9$ and $r(3)=9+3(2)(1)=15$. The three displayed observations are consistent with both complete rules, so they do not uniquely identify one.

Predicting the output at 3 from observations only at 0, 1 and 2 is extrapolation beyond the recorded inputs. An explicit statement that the output is the area of a square with side $x$ in a fixed length unit would supply the rule $q(x)=x^2$; alternatively, a new exact observation at $x=3$ distinguishing 9 from 15 would reject one of these two candidates. Such an observation would distinguish this pair, not prove that no third possible rule exists. Choosing a curve because it looks smooth is not the same as supplying a mathematical or contextual reason for it.

</details>

<!-- EULER-AS-03-SOLUTIONS-END -->



<a id="section-498-a-further-practice-problem"></a>
