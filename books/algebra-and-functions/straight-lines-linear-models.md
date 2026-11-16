
# Straight Lines and Linear Models

A straight-line model describes a fixed amount together with a constant change. A printing service may charge a setup fee and a price per copy. A tank may lose the same volume of water each minute. A map may convert a distance measured in one unit into a distance measured in another. These situations have different meanings, but they share a useful algebraic structure. Understanding that structure lets us build a rule, draw its graph, compare alternatives and explain when a prediction stops being sensible.

The required preparation is [Algebra from Stories](#/books/algebra-from-stories) for quantities and units, [Expressions, Laws, and Factorising](expressions-laws-factorising.md) for substitution and rearrangement, [Linear Equations, Inequalities, and Systems](linear-equations-inequalities-systems.md) for solving and comparing formulas, and [Functions, Domains, and Graphs](functions-domain-graphs.md) for the distinction between a formula and a function with a stated domain. We use real Cartesian coordinates. When describing geometric perpendicularity, the axes represent perpendicular directions with equal numerical units of length; a stretched picture cannot establish a right angle by appearance alone.

By the end you should be able to calculate a slope, find the line through two points, interpret intercepts with units, distinguish horizontal and vertical lines, and construct a model with an explicit domain of validity. You should also be able to explain why a line through two measurements is a modelling choice rather than proof of a physical law.

## Slope measures a ratio of changes

**Definition 4.1 (Slope between two points).** For points $(x_1,y_1)$ and $(x_2,y_2)$ with $x_1\ne x_2$, the slope is

$$m=\frac{y_2-y_1}{x_2-x_1}=\frac{\text{change in output}}{\text{change in input}}.$$

The order of subtraction must match in numerator and denominator. Reversing both orders gives the same ratio because both signs change. Reversing only one order gives the negative of the correct answer. The input difference must be nonzero: two points with the same first coordinate cannot be used to calculate a finite slope in this way.

Slope is a ratio, rather than just a vertical difference. A rise of $6$ units over a run of $3$ units has slope $2$, while the same rise over a run of $12$ has slope $1/2$. As input increases, positive slope means that output increases, negative slope means that output decreases, and zero slope means that output stays fixed. “Negative” describes the direction of change, not the sign of every output. A decreasing line can have positive output values over a whole interval.

**Worked Example 4.2 (A slope with signed changes).** Find the slope between $A=(-2,7)$ and $B=(4,-5)$. Explain its meaning.

Using the same order in both differences gives

$$m=\frac{-5-7}{4-(-2)}=\frac{-12}{6}=-2.$$

The output falls by $12$ while the input rises by $6$, so it falls by $2$ for each increase of $1$ in input along the line through these points. Reversing the point order gives $(7-(-5))/(-2-4)=12/(-6)=-2$, confirming the same ratio. The output at $A$ is positive even though the slope is negative; those statements describe different features.

## The equation and graph of a line

**Definition 4.3 (Linear function and intercept).** In this chapter a linear function has a rule of the form

$$f(x)=mx+b,$$

with fixed real numbers $m$ and $b$, on a specified real domain. On domain $\mathbb R$, its graph is a nonvertical straight line. The number $m$ is the slope of that line. If $0$ belongs to the function's domain, then $b=f(0)$ is its vertical intercept value and the intercept point is $(0,b)$.

Some later mathematics calls $mx+b$ an *affine* function and reserves “linear” for $mx$. Here we follow the usual school convention. The definition includes $m=0$, giving a constant function. If the domain is restricted, the graph is only the corresponding part of the line. In particular, if $0$ is outside the stated domain, $(0,b)$ belongs to the extended line but is not a point of the function's graph.

**Result 4.4 (Constant slope of a linear rule).** If $f(x)=mx+b$ and $x_1,x_2$ are distinct inputs in its domain, then

$$\frac{f(x_2)-f(x_1)}{x_2-x_1}=m.$$

*Proof.* The output difference is $(mx_2+b)-(mx_1+b)=m(x_2-x_1)$. Division by the nonzero input difference gives $m$. The intercept cancels, so changing $b$ changes the position of the line without changing its slope. ∎

Conversely, suppose a real function has the same slope $m$ between every two distinct domain inputs, and choose one input $a$ in a nonempty domain. For any other input $x$, the slope condition gives $f(x)-f(a)=m(x-a)$. It also holds when $x=a$, because both sides are zero. Therefore $f(x)=mx+[f(a)-ma]$ throughout the domain. Constant slope is the precise property behind the straight-line rule.

To sketch $y=mx+b$, start with a convenient point, often $(0,b)$ if it is included. A slope of $3/2$ means an increase of $2$ in $x$ accompanies an increase of $3$ in $y$. Plot a second point by that change and draw the line through them, respecting any domain restriction. A third substituted point is a useful arithmetic check. If $m=-3/2$, the same positive input change accompanies an output change of $-3$; use a downward move.

The horizontal intercept is found by setting $y=0$. If $m\ne0$, solving $mx+b=0$ gives $x=-b/m$, so the point is $(-b/m,0)$. For a restricted domain, this is an intercept of the function only if that input is allowed. The horizontal line $y=b$ has no horizontal intercept if $b\ne0$, while $y=0$ lies on the horizontal axis at every input. Those cases cannot be handled by dividing by $m$.

## Horizontal and vertical lines are different

A horizontal line $y=c$ has slope $0$: between any two distinct input coordinates, the output change is zero. It is the graph of a constant function on $\mathbb R$. A vertical line $x=c$ has no defined finite slope, because the input change between its distinct points is zero. It is not the graph of a function assigning $y$ to $x$: the one input $c$ has many possible outputs.

Calling a vertical slope “infinity” conceals the issue. Infinity is not a real number that can be inserted into $y=mx+b$. Instead use the equation $x=c$ directly. General straight-line equations can be written $Ax+By=C$, where $A$ and $B$ are not both zero. If $B\ne0$, rearranging gives $y=-(A/B)x+C/B$. If $B=0$, then $A\ne0$ and the line is vertical: $x=C/A$. This form includes both kinds without dividing by zero.

**Worked Example 4.5 (Finding a line from two points).** Find the equation of the line through $(1,5)$ and $(5,-3)$, and locate its intercepts.

The first coordinates differ, so the slope is defined:

$$m=\frac{-3-5}{5-1}=-2.$$

Write $y=-2x+b$ and use $(1,5)$: $5=-2+b$, so $b=7$. The line is $y=-2x+7$. Checking the other point gives $-2(5)+7=-3$, as required. The vertical intercept is $(0,7)$. Setting the output to zero gives $0=-2x+7$, hence the horizontal intercept is $(7/2,0)$.

There is no need to round $7/2$; it is an exact coordinate. If the problem had asked for only the segment joining the two given points, the domain would be $[1,5]$. The vertical intercept would then lie outside that segment, while the horizontal intercept would remain included because $7/2$ is between $1$ and $5$.

**Result 4.6 (Point-slope form and uniqueness).** Through two distinct points with different first coordinates there is exactly one nonvertical line. With $m=(y_2-y_1)/(x_2-x_1)$, it has equation

$$y-y_1=m(x-x_1).$$

*Reason.* This equation includes the first point and gives the second point because $m(x_2-x_1)=y_2-y_1$. Any line through both must have that same slope by Result 4.4. In the form $y=mx+b$, the first point then forces $b=y_1-mx_1$, so there is only one choice. If the distinct points have the same first coordinate, their line is instead the vertical line at that coordinate. One point alone does not determine a unique line. ∎

Point-slope form is often the clearest working form because it keeps the known point visible. Expanding it is optional. For example, $y-10=\tfrac32(x-4)$ immediately shows that $(4,10)$ lies on the line and that its slope is $3/2$. The equivalent equation $y=\tfrac32x+4$ makes the vertical intercept more visible. Different forms highlight different information; they do not describe different lines.

## Comparing directions

**Result 4.7 (Parallel and perpendicular lines).** Two distinct nonvertical lines are parallel if and only if their slopes are equal. Two nonvertical lines are perpendicular if and only if the product of their slopes is $-1$. The perpendicular criterion assumes the usual Cartesian geometry with the same length scale on both axes.

For the parallel claim, two rules $y=mx+b_1$ and $y=mx+b_2$ with $b_1\ne b_2$ cannot meet, since equality of outputs would force $b_1=b_2$. If their slopes differ, equating their rules gives one input at which they meet. Equal slopes and equal intercepts describe the same line, rather than two distinct parallel lines under our convention.

For the perpendicular claim, a direction for a line of slope $m$ is an input move of $1$ paired with an output move of $m$, represented by $(1,m)$. A quarter turn changes that direction to $(-m,1)$. If $m\ne0$, the turned direction has slope $1/(-m)=-1/m$, giving product $-1$. A nonvertical line with that slope has exactly the turned direction, so the implication also works backwards. If $m=0$, the quarter turn is vertical and has no defined slope. Thus a horizontal line is perpendicular to a vertical line, handled separately from the product test. Two distinct vertical lines are parallel, also handled separately.

**Worked Example 4.8 (Directions through a specified point).** Find the parallel and perpendicular lines through $(2,1)$ relative to $y=3x-4$.

A parallel line has slope $3$, so point-slope form gives $y-1=3(x-2)$, or $y=3x-5$. It differs from the original because its intercept is $-5$ rather than $-4$. A perpendicular line has slope $-1/3$, so $y-1=-\tfrac13(x-2)$, or $y=-\tfrac13x+\tfrac53$. Both equations give $y=1$ at $x=2$. The product $3(-1/3)=-1$ checks the perpendicular directions.

Do not apply the negative reciprocal rule to a vertical line: there is no real slope to reciprocate. Also distinguish numerical slope from apparent steepness. Changing one axis scale can make a drawn line look steeper without changing its equation in the original units. A physical quantity such as pounds per kilogram does not describe a geometric angle unless a specific plotting scale has been chosen.

## From a story to a linear model

**Definition 4.9 (Linear model).** A linear model represents an output by $y=mx+b$ on a specified domain, using an assumption that equal input changes produce equal output changes. Its parameters and domain are interpreted in the context of the quantities being modelled.

State the input and output before finding the numbers. The slope carries output units divided by input units; the intercept carries output units. If $C$ is a cost in pounds and $n$ a number of printed posters, then a slope of $0.60$ means £$0.60$ per poster. A fixed fee has units of pounds, so $C(n)=0.60n+12$ has consistent units. The natural algebraic domain is all real numbers, but the service domain might be the integers $1\le n\le200$. Fractional or negative poster orders are not made valid by an easy substitution.

**Worked Example 4.10 (A cost model with a discrete domain).** A studio charges £$18$ to prepare a design and £$2.40$ per notebook printed. Orders contain a whole number $n$ of notebooks, from $1$ to $80$. Build the model, find the cost of $25$ notebooks, and determine the largest order costing no more than £$100$.

The cost is $C(n)=18+2.40n$, with domain $\{1,2,\ldots,80\}$. Its slope is £$2.40$ per notebook. The extended line's intercept is £$18$, representing the setup component, but $n=0$ is not an available order in the stated service. At $25$ notebooks the model gives $C(25)=18+60=78$ pounds.

For the budget, solve $18+2.40n\le100$. Subtracting $18$ and dividing by the positive number $2.40$ gives $n\le82/2.40=205/6$, approximately $34.17$. Orders must be whole numbers, so the largest candidate is $34$. It costs £$99.60$; $35$ would cost £$102$. Both are within the order-size bound, so $34$ is the largest permitted affordable order. Rounding to the nearest integer would give the wrong principle in other examples: a maximum under a budget must be rounded down to an allowed integer and checked.

A model can be exact for an agreed pricing rule, yet approximate for a physical process. Measurements have uncertainty, and a drain may slow as a tank empties. Before using a line, ask what supports constant change and over what interval. A good model statement includes those limits together with the equation.

**Worked Example 4.11 (Filling a tank and stopping the rule).** A tank contains $24$ litres when observation begins. A pump adds water at a constant $6$ litres per minute until the tank reaches its capacity of $90$ litres. Let $t$ be minutes since observation began. Find the volume rule and its domain for the filling stage.

The volume is $V(t)=24+6t$ litres. Observation starts at $t=0$. The capacity condition is $24+6t\le90$, giving $t\le11$. Thus the filling-stage model has domain $[0,11]$ and range $[24,90]$. At $t=4.5$, it predicts $51$ litres. At $t=12$, the expression gives $96$, but that is not a permitted filling-stage prediction: the tank is already full and the pump has stopped.

If the tank then stays full without leaking, a longer observation model would use a second, constant piece, $V(t)=90$ for $t>11$. That extra rule requires the extra physical assumption. Continuing the old line silently would ignore the stated capacity. Solving the inequality identifies where the original assumption ceases to describe the situation.

## Interpolation, extrapolation and evidence

**Definition 4.12 (Interpolation and extrapolation).** Using a model between observed input values is interpolation. Using it outside their observed interval is extrapolation. Either kind of prediction depends on the model's assumptions; extrapolation extends those assumptions beyond the observed inputs.

Suppose a container is observed at $(2,31)$ and $(6,47)$, with time in minutes and volume in litres. The line through them has slope $(47-31)/(6-2)=4$ litres per minute and equation $V(t)=4t+23$. It predicts $39$ litres at $t=4$, an interpolation, and $63$ litres at $t=10$, an extrapolation. The two measurements do not prove that the actual volume follows this line, even between them. A third observation could reveal curvature, a pause or measurement error.

The intercept $23$ is the model's predicted volume at time zero. If zero was not observed, that interpretation is already an extrapolation. It is not automatically a measured initial volume. If an independent description guarantees a constant-rate pump, the linear rule has additional support. If only the two measurements are known, it is simply one possible model. Many nonstraight graphs can pass through those same points.

Interpolation often asks less of the model because it stays within the observed span, but it is not guaranteed. A journey could include an unobserved stop between two location measurements. Extrapolation can be useful when the mechanism is well understood, but a plausible trend cannot overrule constraints such as finite capacity, nonnegative stock or changed pricing. State a prediction with its units and assumptions so the reader can judge what it means.

## Exercises

### Exercise 4.1
<a id="straight-lines-linear-models-ex-1"></a>

Find the slope through $(-3,8)$ and $(2,-7)$. State the output change associated with an input increase of $4$ along this line.

<details>
<summary>Hint 1</summary>

Use the same point order in the two differences.

</details>
<details>
<summary>Hint 2</summary>

Multiply the slope by the requested input change.

</details>
<details>
<summary>Solution</summary>

The slope is $(-7-8)/(2-(-3))=-15/5=-3$. The output therefore changes by $-3(4)=-12$ when input increases by $4$. In words, it falls by $12$ units. The slope is not $-15$; that is the output change for the particular input change of $5$ between the supplied points.

</details>

### Exercise 4.2
<a id="straight-lines-linear-models-ex-2"></a>

For $y=\tfrac12x-3$ on $\mathbb R$, find both intercepts and give two points suitable for drawing the line. Explain the meaning of its slope.

<details>
<summary>Hint 1</summary>

Set $x=0$ for the vertical intercept and $y=0$ for the horizontal intercept.

</details>
<details>
<summary>Hint 2</summary>

An input increase of $2$ avoids fractions when using the slope to find a second point.

</details>
<details>
<summary>Solution</summary>

At $x=0$, $y=-3$, giving $(0,-3)$. Solving $0=x/2-3$ gives $x=6$, so $(6,0)$ is the other intercept. These two points determine the line; another convenient point is $(2,-2)$. The slope $1/2$ means that an input increase of $1$ accompanies an output increase of $1/2$, or a run of $2$ accompanies a rise of $1$.

</details>

### Exercise 4.3
<a id="straight-lines-linear-models-ex-3"></a>

Find the line through $(2,-1)$ and $(6,5)$ in point-slope and slope-intercept forms. Verify both given points.

<details>
<summary>Hint 1</summary>

Find the ratio of the output difference to the input difference.

</details>
<details>
<summary>Hint 2</summary>

Use $y-y_1=m(x-x_1)$ with $(x_1,y_1)=(2,-1)$, then expand.

</details>
<details>
<summary>Solution</summary>

The slope is $(5-(-1))/(6-2)=6/4=3/2$. Point-slope form is $y+1=\tfrac32(x-2)$. Expanding gives $y=\tfrac32x-4$. At $x=2$ the output is $3-4=-1$; at $x=6$ it is $9-4=5$. Thus the equation contains both points, and uniqueness follows because their first coordinates differ.

</details>

### Exercise 4.4
<a id="straight-lines-linear-models-ex-4"></a>

Describe the lines through the pairs $(4,-2),(4,7)$ and $(-1,3),(5,3)$. Give each equation and slope where defined, and say whether each is a graph of $y$ as a function of $x$.

<details>
<summary>Hint 1</summary>

In each pair, identify the coordinate that stays unchanged.

</details>
<details>
<summary>Hint 2</summary>

Zero input change and zero output change have different consequences in the slope ratio.

</details>
<details>
<summary>Solution</summary>

The first line is $x=4$, vertical, with undefined slope. It contains different outputs for input $4$, so it is not such a function graph. The second is $y=3$, horizontal, with slope $(3-3)/(5-(-1))=0$. It is the graph of the constant function $f(x)=3$ on $\mathbb R$. Undefined slope and zero slope describe distinct cases.

</details>

### Exercise 4.5
<a id="straight-lines-linear-models-ex-5"></a>

Find the parallel and perpendicular lines through $(3,2)$ relative to $y=-2x+5$. Use the usual equally scaled Cartesian coordinates.

<details>
<summary>Hint 1</summary>

The parallel slope is unchanged; for nonzero defined slope, the perpendicular slope is its negative reciprocal.

</details>
<details>
<summary>Hint 2</summary>

Use point-slope form separately with slopes $-2$ and $1/2$.

</details>
<details>
<summary>Solution</summary>

The parallel line is $y-2=-2(x-3)$, or $y=-2x+8$. Its intercept differs from the original line, so the lines are distinct. The perpendicular line is $y-2=\tfrac12(x-3)$, or $y=\tfrac12x+\tfrac12$. Both contain $(3,2)$, and the product of the original and perpendicular slopes is $(-2)(1/2)=-1$.

</details>

### Exercise 4.6
<a id="straight-lines-linear-models-ex-6"></a>

A bicycle hire charge is £$7$ plus £$4$ per hour, charged proportionally for part hours. Hires last from $0.5$ to $6$ hours. Write the charge function with its domain, interpret its slope, and find the longest hire costing at most £$25$.

<details>
<summary>Hint 1</summary>

Separate the fixed fee from the amount proportional to time.

</details>
<details>
<summary>Hint 2</summary>

Solve the budget inequality, then intersect with the stated hire-duration interval.

</details>
<details>
<summary>Solution</summary>

The charge is $C(t)=7+4t$ pounds for real $t\in[0.5,6]$. Its slope is £$4$ per hour, so an extra half hour adds £$2$. Solving $7+4t\le25$ gives $t\le4.5$. The permitted affordable interval is $[0.5,4.5]$, so the longest hire is $4.5$ hours. The algebraic intercept represents the fixed charge but is outside the hire function's domain because zero-hour hires are not offered.

</details>

### Exercise 4.7
<a id="straight-lines-linear-models-ex-7"></a>

A store has $72$ litres of paint and uses $4.5$ litres per day at a constant rate. Model the remaining amount after $t$ days, allowing fractional days. State the physically meaningful domain and find when $18$ litres remain.

<details>
<summary>Hint 1</summary>

Consumption gives a negative slope with units of litres per day.

</details>
<details>
<summary>Hint 2</summary>

Find when the model reaches zero, then separately solve for the requested remaining amount.

</details>
<details>
<summary>Solution</summary>

The model is $R(t)=72-4.5t$ litres. We require $t\ge0$ and $R(t)\ge0$, giving $0\le t\le16$. For $18$ litres remaining, $72-4.5t=18$, so $4.5t=54$ and $t=12$ days. This lies in the domain. Continuing past $16$ days would predict a negative stock and would require a different account of what happens after exhaustion.

</details>

### Exercise 4.8
<a id="straight-lines-linear-models-ex-8"></a>

Measurements give a plant's height as $14$ cm at day $2$ and $26$ cm at day $8$. Find the line through these observations and use it to predict heights at days $5$ and $12$. Classify the predictions and explain one limitation of each.

<details>
<summary>Hint 1</summary>

The rate is a height difference divided by a day difference.

</details>
<details>
<summary>Hint 2</summary>

Compare each requested day with the observed interval $[2,8]$.

</details>
<details>
<summary>Solution</summary>

The slope is $(26-14)/(8-2)=2$ cm per day. From $14=2(2)+b$, the intercept is $10$, giving $H(t)=2t+10$. At day $5$ the prediction is $20$ cm, an interpolation; growth may still have varied within the interval, so the two measurements do not guarantee it. At day $12$ it is $34$ cm, an extrapolation; this additionally assumes that the same trend continues beyond the observations. Neither value is established as an exact biological law by two measurements.

</details>

### Exercise 4.9
<a id="straight-lines-linear-models-ex-9"></a>

Printing plan A costs $A(n)=15+0.50n$ pounds and plan B costs $B(n)=3+0.80n$ pounds for whole numbers of pages $1\le n\le200$. Find their equal-cost order and identify the cheaper plan on either side.

<details>
<summary>Hint 1</summary>

Set the two costs equal to locate the crossing input.

</details>
<details>
<summary>Hint 2</summary>

Subtract one cost from the other and inspect its sign, remembering the integer domain.

</details>
<details>
<summary>Solution</summary>

The equality $15+0.50n=3+0.80n$ gives $12=0.30n$, hence $n=40$. Both plans then cost £$35$. Their difference is $A(n)-B(n)=12-0.30n$. This is positive for $n<40$, so B is cheaper for integer orders $1$ through $39$. It is negative for $n>40$, so A is cheaper for orders $41$ through $200$. At $40$ neither is cheaper. The higher fixed fee of A is offset by its smaller cost per page as the order grows.

</details>

### Exercise 4.10
<a id="straight-lines-linear-models-ex-10"></a>

A sensor reading $r$ is modelled as a linear function of temperature $T$. Calibration gives $r=18$ at $T=10$ degrees Celsius and $r=66$ at $T=30$ degrees Celsius. Find the model and the temperature corresponding to reading $42$. Explain the status of the model's predicted reading at $T=0$ if only the calibration interval is supported.

<details>
<summary>Hint 1</summary>

Treat temperature as input and reading as output when finding the slope.

</details>
<details>
<summary>Hint 2</summary>

After finding the intercept, solve the reading equation for $T$; distinguish this from evaluating at a specified temperature.

</details>
<details>
<summary>Solution</summary>

The slope is $(66-18)/(30-10)=48/20=2.4$ reading units per degree Celsius. Since $18=2.4(10)+b$, we get $b=-6$ and $r(T)=2.4T-6$. Setting $r=42$ gives $48=2.4T$, so $T=20$ degrees Celsius, inside the calibration interval. The extended line predicts $r(0)=-6$. This is extrapolation beyond $[10,30]$, not a supported calibrated value if that interval is the only justified domain. A negative intercept need not mean a mistake: it may be an out-of-domain feature of the extended line.

</details>

## Sources and provenance

This chapter is original exposition with original numerical examples and exercises. Primary benchmark and further reading: OpenStax, [*Algebra and Trigonometry 2e*, §4.1, Linear Functions](https://openstax.org/books/algebra-and-trigonometry-2e/pages/4-1-linear-functions), and [§4.2, Modeling with Linear Functions](https://openstax.org/books/algebra-and-trigonometry-2e/pages/4-2-modeling-with-linear-functions). The local conceptual preparation is Lucent's **Algebra, functions, and domains**, retained unchanged at `modules/lucent/courses/refresher/02-algebra-functions.md`. No worked problem has been copied from these sources.

## Summary

Slope is the output change divided by a nonzero input change. The rule $y=mx+b$ has constant slope $m$, and its intercept value $b$ describes the extended line at input zero. Two points with different first coordinates determine one such line; vertical lines need their own equations and have undefined slope. Equal defined slopes characterize distinct parallel nonvertical lines, while perpendicular nonvertical lines have slope product $-1$ in the usual Cartesian geometry. A linear model must include units, an input domain and the constant-change assumption. Interpolation stays within observed inputs and extrapolation goes beyond them, but both require judgment about the model. The next chapter, [Quadratic Equations](quadratic-equations.md), studies equations with squared variables; the following chapter will compare their curved graphs with the constant change of a straight line.
