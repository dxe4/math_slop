var e=`---
parent_id: book-teaching-for-mathematical-understanding
chapter_id: representations-are-tools
title: "Representations are tools, not decorations"
level: advanced-undergraduate
estimated_minutes: 190
license: CC BY-SA 4.0
---

# Representations are tools, not decorations

## What representations do

A representation is any configuration of signs---symbols, diagrams, gestures, physical objects, or spoken words---that stands for a mathematical object or relationship. The same concept can be represented in many ways: the linear function $y=2x+1$ appears as an equation, a table of values, a graph, a verbal description, and an input-output machine. No single representation is the concept itself; each highlights certain features and suppresses others.

This chapter argues that representations are instructional tools whose selection should be governed by the mathematical goal. A representation chosen for visual appeal but disconnected from the target concept becomes decoration. A representation chosen to make a specific relationship salient becomes a lever for understanding. The National Academies' consensus work notes that the ability to move fluently among connected representations is a strong indicator of conceptual understanding. CAST's Universal Design for Learning guidance similarly recommends flexible access to multiple forms when decoding the representation is not the learning target.

## Five representations of one function

Consider $y=2x+1$.

**Words:** "Start at output $1$ when the input is $0$, and add $2$ to the output for each unit increase in the input."

This representation makes the initial value and rate of change explicit. It is accessible to learners who reason narratively. It is less compact than an equation and less useful for predicting outputs at non-integer inputs.

**Table:**

| $x$ | $y$ |
|-----|-----|
| $0$ | $1$ |
| $1$ | $3$ |
| $2$ | $5$ |
| $3$ | $7$ |

The table makes individual ordered pairs concrete and supports pattern recognition. It does not make the continuous nature of the function obvious. Comparing raw output differences requires equal input steps; with uneven spacing, compare each output change with its corresponding nonzero input change.

**Graph:** A straight line with vertical intercept $1$ and slope $2$.

The graph makes the global behaviour visible: the function increases everywhere, crosses the $y$-axis at $(0,1)$, and rises two units for every one unit right. It is less precise for exact computation and may be inaccessible to learners with certain visual impairments.

**Machine:** "Multiply the input by $2$, then add $1$."

This representation emphasises the operational sequence. It is useful for programming and for learners who think procedurally. It obscures the algebraic structure that lets us solve $2x+1=7$ by inverse operations.

**Equation:** $y=2x+1$.

The equation is compact and general. It supports manipulation, substitution, and solution. It requires symbolic fluency and may be opaque to learners who have not yet connected the symbols to their referents.

Take both input and output domains to be $\\mathbb{R}$. The words, machine, equation, and full straight-line graph describe the relation $\\{(x,2x+1):x\\in\\mathbb{R}\\}$. The four-row table only samples that relation; by itself it is consistent with infinitely many other functions. The teacher's job is to help learners see how a stated domain and rule justify moving from those sampled pairs to the full function.

## A progression for connecting representations

The following is a possible teaching sequence, offered as a design hypothesis rather than an empirically established universal progression:

1. **Enactive:** Let learners act out or build the relationship. For $y=2x+1$, they might walk $x$ steps forward and then note their position after doubling and adding one.

2. **Iconic:** Name quantities and record them in a table or diagram. Learners see that $(1,3)$ and $(2,5)$ are instances of the same rule.

3. **Symbolic:** Coordinate the table with a graph and equation. Learners plot the points, draw the line, and write the equation.

4. **Abstract:** Remove supports once the connection, not the prop, carries meaning. Learners can predict the graph of $y=2x+3$ from the equation without plotting every point.

This proposal does not impose a fixed developmental order. Some learners may move from equation to graph more readily than from table to graph, and a physical action does not automatically explain a real-valued function. Select the route from the mathematical target and available learner evidence; do not infer a learning stage from a preferred representation.

## Common misconceptions about representations

**Misconception: manipulatives contain concepts automatically.**

Base-ten blocks can reinforce place value, but they can also reinforce "bigger piece means bigger number" unless the teacher explicitly discusses exchanges and units. A learner who trades ten unit cubes for one ten rod without understanding that the total quantity is unchanged has not learned regrouping; they have learned a physical procedure.

**Misconception: a graph is a picture of the situation.**

A learner asked to graph the height of a ball thrown upward might draw a parabola that looks like the ball's trajectory through space. The graph is not a photograph; it is a plot of height against time. The horizontal axis represents time, not horizontal distance. Confusing the axes is a common representational error.

**Misconception: unequal output differences mean the function is nonlinear.**

For $y=2x+1$, the inputs $x=0,1,3,7$ give outputs $y=1,3,7,15$. The consecutive output differences are $2,4,8$, but the corresponding input differences are $1,2,4$. Comparing the output differences alone would wrongly suggest a changing rate. Normalising gives $\\Delta y/\\Delta x=2/1=4/2=8/4=2$. Equal input spacing is needed for the shortcut of comparing raw output differences, not for computing a rate from two distinct inputs.

The quotient is correct for a mathematical reason, not by accident. For any distinct real inputs $x_1,x_2$, the known rule gives

$$\\frac{(2x_2+1)-(2x_1+1)}{x_2-x_1}=\\frac{2(x_2-x_1)}{x_2-x_1}=2.$$

Now change the data to $x=0,1,3$ and $y=1,2,10$. The consecutive rates are $(2-1)/(1-0)=1$ and $(10-2)/(3-1)=4$, so these three points cannot lie on one affine graph. Ask the learner to compute both input and output changes and explain that conclusion. Equal rates in a finite table establish collinearity of those sampled points; they do not determine the function at unlisted inputs. In the first example it is the stated rule, rather than the finite sample alone, that proves the rate for every pair.

## Designing a representational sequence

When designing instruction, ask:

- What relationship do I want learners to see?
- Which representation makes that relationship most salient?
- What does this representation hide, and how will I compensate?
- What translation task will force learners to connect this representation to another?

For teaching the distributive property $a(b+c)=ab+ac$, a representational sequence might be:

1. **Area model with its domain:** Take $a,b,c\\geq0$. Draw a rectangle of height $a$ and width $b+c$, split into widths $b$ and $c$. Its unsigned area is both $a(b+c)$ and $ab+ac$. A zero length is a degenerate boundary case checked directly. This picture does not supply negative lengths or by itself prove a claim about all real factors.

2. **Numerical instances:** $3(4+5)=3\\cdot 9=27$ and $3\\cdot 4+3\\cdot 5=12+15=27$.

3. **Signed algebra and opposites:** State the foundation being used: distributivity is an arithmetic law of the real numbers, $a(b+c)=ab+ac$ for all real $a,b,c$. The rectangle illustrates its nonnegative case; the full real law is not inferred from the drawing. Together with additive inverses it gives $r(-s)=-(rs)$, because $r(-s)+rs=r((-s)+s)=r\\cdot0=0$. Similarly, $(-r)s=-(rs)$ follows from $((-r)+r)s=0$. Applying these identities twice gives $(-r)(-s)=rs$. These are algebraic reasons for the signs. A signed diagram may record a value and its opposite, but an ordinary rectangle still has nonnegative height, width and unsigned area.

4. **Counterexample:** $3(4\\cdot 5)=60$ but $3\\cdot 4\\cdot 3\\cdot 5=180$. Distributing over multiplication does not preserve value.

5. **Transfer for every real input:** Put $u=x-3$. A rectangle of height $2$ and width $|u|$ has unsigned area $2|u|$. The signed product $(-2)u$ is $-2|u|$ when $x>3$, $+2|u|$ when $x<3$, and $0$ when $x=3$. Thus the sign must be recorded separately; a reflection that represents taking an opposite does not change the rectangle's unsigned area. The algebraic expansion is

   $$-2(x-3)=-(2(x-3))=-(2x-6)=-2x+6\\qquad(x\\in\\mathbb R).$$

   For example, $x=5$ gives $-4$, $x=1$ gives $4$, and $x=3$ gives $0$. The real-number laws justify all inputs; the unsigned area picture alone covers neither a negative width nor a negative product.

Each step connects representations while holding the structural target constant.

## Worked comparison: a graph changes appearance when its scales change

Take a journey model in which distance in kilometres is twice elapsed time in hours. On axes whose horizontal unit occupies one centimetre and whose vertical unit also occupies one centimetre, the graph rises two centimetres for each centimetre to the right. Now redraw the same relation with each kilometre occupying half a centimetre. The drawn line rises one centimetre for each centimetre to the right. Its visual angle changes, but the physical speed remains two kilometres per hour.

The rate is a quotient of changes in labelled quantities, not the angle a line makes with the page. In the first drawing the physical rise-to-run ratio is two; in the second it is one. Converting each physical rise back through the vertical scale and each physical run back through the horizontal scale gives the same mathematical rate. A line drawn at forty-five degrees need not represent a rate of one in the chosen units. It can represent any positive rate if the axis scales are chosen accordingly.

A fictional learner says the second journey is slower because the line looks flatter. Ask the learner to read the coordinates at times one and two in both drawings. Both give distances two and four. Then ask which visible feature changed and which quantities did not. This is a proposal for a discriminating task, not a claim that such a prompt has a measured effect. An accessible version should state the axis scales and the relevant coordinate pairs explicitly. A generic description such as “a steep line” omits exactly the information needed to evaluate the rate.

The comparison also has a modelling boundary. If the vertical axis records position rather than total distance travelled, a negative slope can represent motion in the negative direction. Total distance travelled cannot decrease. The same drawn segment may therefore be appropriate for one quantity and inappropriate for another. Naming the represented quantity is as necessary as naming its units.

## Worked comparison: renaming a base-ten unit

Place-value blocks are often called units, tens, and hundreds. Those names are assignments of numerical value, not intrinsic properties of plastic. Suppose a small cube represents one, a rod contains ten such cubes, and a flat contains ten rods. Their values are one, ten, and one hundred. Exchange one rod for ten cubes: the displayed collection changes, but its numerical value does not. This conservation is the mathematical point of the exchange.

Now choose the flat as the unit whole. The same rod represents one tenth and the same small cube one hundredth. A collection of two rods and three cubes has value twenty-three under the original assignment and twenty-three hundredths under the new one. There is no contradiction because the unit changed. A learner who says “a rod is always ten” has stated a convention from the first setting as though it were a property of the object.

A precise recording names a unit value and then computes the collection's value as a sum of counts times assigned values. If the cube has value $u$, the rod has value $10u$ and the flat $100u$. For any counts, replacing one rod by ten cubes preserves the total because both contribute $10u$. This equation applies whether the chosen value of $u$ is one, one hundredth, or another positive quantity. The material demonstrates the exchange only when its pieces and the recording are explicitly coordinated.

A teaching comparison can keep the physical collection fixed while changing the named whole. Ask for its value under both assignments and for an explanation of what stayed constant. Do not diagnose a decimal misconception from one incorrect name alone: the learner may have missed the reassignment or may be using a previous classroom convention. Conversely, correctly performing the physical exchange without naming its invariant does not establish place-value understanding. Both mathematical meaning and the scope of the evidence need attention.

## Worked comparison: a pie chart can hide a change in population

Suppose two fictional clubs report that half their members travel by bicycle. The first club has twelve members, the second forty. Two pie charts with a half-circle shaded each correctly show the proportion. They do not show equal cyclist counts: those counts are six and twenty. Equal shaded fractions compare ratios within the respective wholes, not total numbers across different wholes.

A misleading display can arise if the charts use arbitrary disk sizes and a reader interprets shaded area as the number of people. If disk areas are chosen proportional to membership, then the shaded areas are proportional to counts as well as representing fractions within each club. But the radii must then be chosen in the square-root ratio of membership, because a disk's area is proportional to the square of its radius. Making radii proportional to population would exaggerate the area comparison. The representation therefore needs an explicit convention about what the disk size encodes.

A table with columns for club size, cyclist count, and cyclist proportion exposes all three quantities directly. A paired bar display can compare counts or proportions, provided its axis label states which. Neither is universally superior to a pie chart; the choice depends on whether the task concerns within-club composition or cross-club totals. Asking “which club cycles more?” is ambiguous until “more” is specified as a count or a share.

This case connects representation to statistical interpretation without inventing survey data. The numbers are chosen for a mathematical counterexample. They do not describe actual travel behaviour, and nothing follows about why members travel as they do. The lesson design hypothesis is that contrasting count and share can make the referent whole visible. Evidence of a classroom learning effect would require a separate inquiry.

## Translation requires preserving meaning, not merely changing format

To translate between representations, specify the object each represents, the information the translation preserves, and any information it loses. A finite table sampled from a function preserves the listed values but loses unlisted values unless a rule is supplied. A decimal rounded to two places preserves an approximation but may lose exact equality. A diagram of one triangle preserves its labelled instance but does not automatically establish a theorem for every triangle. A symbolic equality with a stated domain can carry a general claim that a collection of pictures only suggests.

The distinction is especially important in accessible descriptions. Replacing a scatterplot by a sentence saying “there is a positive trend” supplies an interpretation while omitting individual data values and possible outliers. That may be enough when the target is understanding the author's conclusion. It is insufficient when the target is independently judging that conclusion. A structured data table and a description of axis mappings can retain the evidence needed for that judgement. Likewise, a tactile graph should have labelled axes and recoverable scales; tactile access alone does not determine what its marks mean.

A teacher can inspect a proposed translation by asking whether two mathematically different original objects could produce the same translated display. If so, the translation has merged a distinction. This is not always a defect: a bar chart of class totals intentionally omits individuals' names. It becomes a defect when the omitted distinction is part of the learning goal. For example, turning all fractions into rounded decimals can merge distinct values close enough to round identically. If the target is exact comparison, that loss matters.

Representational flexibility therefore includes knowing when a representation is insufficient. A learner who requests the original data, the unit assignment, or the function's domain may be reasoning precisely rather than resisting the task. Record the mathematical reason for that request before interpreting it as lack of fluency. This principle links representation choice to the goals and inference contracts developed in adjacent chapters.

## Practice exercises

### Exercise 1

A teacher shows a graph of $y=x^{2}$ and asks, "What happens to $y$ when $x$ increases by $1$?" A learner answers, "It goes up by $1$." Diagnose the error and design a representation that would repair it.

**Hint 1.** Compute the change for several starting inputs.

**Hint 2.** The general change is obtained by expanding the next square.

**Solution.** The learner may be treating the graph as a linear object or may be confusing the change in $x$ with the change in $y$ without examining the curve. A table showing $x=0,1,2,3$ and $y=0,1,4,9$ makes the non-constant increase visible: the differences are $1,3,5$. A second representation, the difference table, can lead to the observation that the first differences themselves increase linearly, foreshadowing the derivative.

### Exercise 2

For $y=2x+1$, use the inputs $x=0,1,3,7$ to distinguish raw output differences from the rates $\\Delta y/\\Delta x$. Then compare the changed table $x=0,1,3$ and $y=1,2,10$. What do the calculations establish about the sampled points, and what does the known rule establish beyond its table?

**Hint 1.** Pair every output difference with its input difference.

**Hint 2.** Distinguish a sampled relationship from a known function rule.

**Solution.** The first outputs are $1,3,7,15$. Their consecutive differences $2,4,8$ are unequal, while the input differences are $1,2,4$. The rates are $2/1=4/2=8/4=2$. Uneven spacing does not make this quotient misleading: for any distinct real inputs, $((2x_2+1)-(2x_1+1))/(x_2-x_1)=2$. The known affine rule proves pair-independence on the whole stated domain.

For the changed table, the rates are $(2-1)/(1-0)=1$ and $(10-2)/(3-1)=4$. They differ, so no single affine function fits all three points. Conversely, equal rates in a finite table establish only that its sampled points are collinear; without a stated rule or further argument they do not prove that every unlisted value follows the same affine law. Compare raw output differences only when the input steps are equal; otherwise compare the normalised rates.

### Exercise 3

Design a sequence of three representations for teaching that $(-3)\\times(-4)=12$. Justify each choice.

**Hint 1.** Say what reflection represents and what algebra justifies it.

**Hint 2.** A continued pattern is not a proof of every signed case.

**Solution.**

1. **Number-line reflection:** Start with $3\\times(-4)=-12$, which can be shown as three jumps of $-4$ to the left from $0$. Reflect across $0$ to argue that $(-3)\\times(-4)$ is the opposite of $3\\times(-4)$, hence $12$. This representation uses geometric intuition but requires accepting that reflection preserves magnitude while reversing sign.

2. **Pattern continuation:** Present the sequence $4\\times(-4)=-16$, $3\\times(-4)=-12$, $2\\times(-4)=-8$, $1\\times(-4)=-4$, $0\\times(-4)=0$. Each step decreases the first factor by $1$ and increases the product by $4$. Continuing the pattern gives $(-1)\\times(-4)=4$, $(-2)\\times(-4)=8$, $(-3)\\times(-4)=12$. This representation uses inductive reasoning but does not prove the rule for all integers.

3. **Algebraic proof:** Use the distributive property: $0=(-3+3)\\times(-4)=(-3)\\times(-4)+3\\times(-4)=(-3)\\times(-4)-12$. Therefore $(-3)\\times(-4)=12$. This representation is deductive and general but requires prior acceptance of the distributive property for negative numbers.

### Exercise 4

A learner says, "The equation $y=2x+1$ and the graph are just two ways of saying the same thing, so I only need to learn one." Respond in a way that respects the learner's insight while correcting the oversimplification.

**Hint 1.** Ask different mathematical questions of the same object.

**Hint 2.** Exact calculation and qualitative comparison expose different features.

**Solution.** The learner is correct that the equation and graph represent the same function, and recognising that equivalence is a significant achievement. However, different representations are better suited to different questions. The equation makes it easy to find the output for any input or to solve for the input given the output. The graph makes it easy to see where the function is increasing, where it crosses the axes, and how it compares to other functions. A table makes it easy to spot patterns in discrete data. A verbal description makes the meaning accessible to someone who does not read equations fluently. Proficiency includes choosing the right representation for the question at hand, not merely knowing that they are equivalent.

### Exercise 5 {#representations-are-tools-exercise-5}

A line rises three centimetres for each centimetre to the right. The horizontal scale is two seconds per centimetre and the vertical scale four metres per centimetre. Find the represented speed and explain why the drawn ratio alone is insufficient.

**Hint 1.** Convert each physical length to its labelled quantity.

**Hint 2.** Divide the distance change by the time change.

**Solution.** The displayed rise represents twelve metres and the run two seconds. The speed is six metres per second. The drawn ratio of three centimetres to one centimetre is dimensionless and depends on plotting scales. It is not the speed until the axis conversions are applied. Redrawing the same motion with a different vertical scale changes the angle without changing the coordinates or speed. An assessment of rate should therefore require both the quotient and its units, not a judgement based only on visual steepness.

### Exercise 6 {#representations-are-tools-exercise-6}

A flat contains one hundred cubes and a rod ten. A collection contains one flat, four rods, and seven cubes. Find its value when the rod is one whole, and when the flat is one whole.

**Hint 1.** Assign a value to one cube in each setting.

**Hint 2.** Compute a sum of counts times values.

**Solution.** With the rod as one whole, the flat is ten and each cube one tenth, giving fourteen and seven tenths. With the flat as one whole, each rod is one tenth and each cube one hundredth, giving one and forty-seven hundredths. The physical collection has not changed; its numerical measure changes because the reference unit changes. Neither answer can be selected without the unit convention. A teacher should state that convention explicitly before interpreting a learner's decimal recording.

### Exercise 7 {#representations-are-tools-exercise-7}

Construct a nonlinear polynomial agreeing with $y=2x+1$ at zero, one, two, and three, but not at four. Explain what the construction shows about tables.

**Hint 1.** Multiply the four factors vanishing at the listed inputs.

**Hint 2.** Add that product to the affine rule.

**Solution.** Set $g(x)=2x+1+x(x-1)(x-2)(x-3)$. The extra term vanishes at each listed input, so all four rows agree. At four the affine rule gives nine, whereas the product is twenty-four and $g$ gives thirty-three. The table does not uniquely specify a function on the reals. If an affine premise is supplied, two distinct rows do determine its rule; without a model restriction, any finite collection of exact values still leaves other possibilities. This is a counterexample to an inference, not a rejection of using tables to conjecture models.

### Exercise 8 {#representations-are-tools-exercise-8}

Two groups contain twelve and forty-eight people. Each has a quarter represented by a shaded disk sector. If disk area is to encode total population, what radius ratio is needed? What error results from a radius ratio of four?

**Hint 1.** Disk area is proportional to radius squared.

**Hint 2.** The population ratio is four, not sixteen.

**Solution.** The larger disk needs four times the area, so twice the radius. With a radius ratio of four, its area and its quarter-sector area are sixteen times as large, exaggerating the count comparison by a factor of four. The subgroup counts represented by the quarters are three and twelve, so they too have ratio four. Correct area scaling preserves this ratio. Equal-sized disks would instead communicate only equal proportions within the groups, omitting the difference in group sizes. State which of these quantities the display is intended to compare before selecting the encoding.

### Exercise 9 {#representations-are-tools-exercise-9}

Two exact values are forty-nine hundredths and five hundred one thousandths. Explain why rounding both to one decimal place cannot establish their exact order, and give an exact comparison.

**Hint 1.** Determine the two rounded displays.

**Hint 2.** Express both originals in thousandths.

**Solution.** Both round to five tenths, so the rounded representation merges their distinction. Exactly, the first is four hundred ninety thousandths and the second five hundred one thousandths. The second exceeds the first by eleven thousandths. Equality of rounded values does not imply equality of original values. If the goal is approximate reporting to a tenth, the common display may be adequate; if it is exact comparison, it is insufficient. The representation's suitability is relative to the question.

### Exercise 10 {#representations-are-tools-exercise-10}

An accessible replacement for a scatterplot says only “the variables have a positive association.” Identify a mathematical task for which this is sufficient and one for which it is not. Propose additional source information for the second.

**Hint 1.** Distinguish reporting a conclusion from evaluating it.

**Hint 2.** Independent evaluation needs the underlying pairs and scales.

**Solution.** The sentence can answer “what association does the author report?” It cannot by itself support independently judging the pattern, identifying outliers, or checking whether a few points drive the association. Supply a structured table of paired values, variable names, units, and any scale transformations, alongside a faithful description of the plotted encoding. The learner can then examine the evidence rather than merely repeat the interpretation. This preserves the mathematical ambition while changing the access route; it does not imply that any one format is sufficient for every learner or every graphical goal.

## Looking backward and forward

The previous chapter, *Begin with an explicit mathematical goal*, established that a goal should name the object, operation, and evidence. Representations are the means by which the evidence becomes visible. The next chapter, *Examples define the conceptual boundary*, shows how the choice and sequencing of examples---together with their representational forms---determine what learners generalise and what they mistakenly treat as defining properties.
`;export{e as default};