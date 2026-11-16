var e=`---
parent_id: book-algebra-and-functions
chapter_id: functions-domain-graphs
title: "Functions, Domains, and Graphs"
level: secondary
license: CC BY-SA 4.0
---

# Functions, Domains, and Graphs

A formula can answer many questions without being rewritten. If a parcel costs a fixed amount plus a charge for each kilogram, one expression can give the price of any permitted parcel. But the expression alone leaves questions unanswered. Are negative masses permitted? Is there a maximum parcel size? Does the price include packaging? A function records an assignment together with the inputs on which it is meant to operate. This chapter makes that idea precise, then connects it to tables, graphs and rules that change between intervals.

The required preparation is the arithmetic, units and use of variables developed in [Algebra from Stories](../algebra-from-stories.md), followed by this book's [Expressions, Laws, and Factorising](expressions-laws-factorising.md) and [Linear Equations, Inequalities, and Systems](linear-equations-inequalities-systems.md). You should be able to substitute into an expression, preserve restrictions when simplifying, and solve a simple inequality. No calculus is used. By the end you should be able to decide whether an assignment is a function, distinguish its domain from its range, evaluate it accurately, read its graph with appropriate caution, and explain the domain of a composition.

We work with real numbers unless another set is named. The symbol $\\mathbb R$ denotes all real numbers. An interval such as $[1,4)$ contains the real numbers at least $1$ and less than $4$; the square bracket includes its endpoint and the round bracket excludes it. An infinite endpoint is always written with a round bracket. A domain can also be a finite list or a set of whole numbers, so interval notation is useful but is not compulsory.

## Assignments, inputs and outputs

**Definition 3.1 (Function, domain and codomain).** A function $f:A\\to B$ assigns to **each** element of a specified set $A$ **exactly one** element of a specified set $B$. The set $A$ is its domain and $B$ its codomain. If the input is $x$, its assigned output is written $f(x)$, read “$f$ of $x$”.

Both highlighted requirements matter. An input listed in the domain cannot be left without an output. It also cannot receive two different outputs. Several inputs may, however, receive the same output. The assignment “person to birth month”, for a specified group of people, is a function even when two people share a birthday month. The reverse instruction “month to person born in that month” need not be a function: there may be nobody, or several people, in a given month.

Function notation does not mean multiplication. In $f(3)$, the brackets identify the input. You cannot cancel an $f$ from both sides of an equation as if it were a common numerical factor. A function need not be given by an algebraic expression at all. A complete timetable assigning a scheduled departure time to each listed service is a function if each service has exactly one scheduled time in the chosen timetable. A table can also define a function, provided its domain is the listed inputs and each input has one assigned output.

**Definition 3.2 (Range).** The range of $f:A\\to B$ is the set of outputs actually attained:

$$\\{f(x):x\\in A\\}.$$

Thus the range is contained in the codomain, but may be smaller. Consider $f:\\mathbb R\\to\\mathbb R$ with $f(x)=x^2$. Its domain is all real numbers. Its codomain is also all real numbers because that is the announced destination set. Its range is $[0,\\infty)$: a square is nonnegative, and every nonnegative number $y$ is obtained by using $x=\\sqrt y$. Negative real numbers are allowed members of the codomain but are never produced.

It is also valid to specify $f:\\mathbb R\\to[0,\\infty)$ by the same formula. The assignment still works because every square lies in that smaller codomain. It would be invalid to declare the codomain to be $[1,\\infty)$ while keeping all real inputs: the input $0$ would produce an output outside the announced set. In this chapter, when only a formula and domain are specified, we take the codomain to be $\\mathbb R$ unless the context says otherwise. We always describe the range separately.

**Worked Example 3.3 (A finite assignment).** Let $A=\\{-2,-1,0,1,2\\}$ and define $p:A\\to\\mathbb R$ by $p(x)=x^2+1$. Find its outputs and range. Is a repeated output a problem?

Substitution gives

| Input $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ |
| --- | --- | --- | --- | --- | --- |
| Output $p(x)$ | $5$ | $2$ | $1$ | $2$ | $5$ |

For example, $p(-2)=(-2)^2+1=5$; the brackets ensure that the negative input is squared. The range is $\\{1,2,5\\}$, without repetitions, because a set lists its elements only once. The domain has five elements and the range has three. This is still a function: each input has one output. Repeated outputs would matter if we tried to reverse the assignment, but reversal is a different question.

## Evaluation is substitution with structure

To evaluate a formula, replace every occurrence of its input variable by the same supplied quantity. Brackets preserve the structure when that quantity is negative or is itself an expression. For $q(x)=3x^2-2x+4$, the value at $-1$ is $3(-1)^2-2(-1)+4=9$. Writing $3(-1)^2$ keeps clear that the square belongs to the input, rather than to the coefficient $3$.

An expression can be an input too. With the same $q$, we have

$$q(a+1)=3(a+1)^2-2(a+1)+4=3a^2+4a+5.$$

This is not $q(a)+1$. The instruction is to feed the whole expression $a+1$ into the rule. It is often wise to write the substitution line before expanding; the line shows what has been substituted and makes an error easier to locate.

There is another useful distinction. Evaluating $q(2)$ asks for an output when the input is known. Solving $q(x)=2$ asks for the inputs, if any, that produce a given output. Solving may produce several inputs or none. That does not contradict the definition of a function, which promises one output for an input, rather than one input for an output.

## Choosing and preserving a domain

**Definition 3.4 (Natural real domain and restricted domain).** For a real formula with no domain supplied, its natural real domain is the set of real inputs for which every operation in the formula is defined. A function may instead be assigned a smaller domain, called a restriction of the original domain.

In the formulas used here, division requires a nonzero denominator and a real square root requires a nonnegative quantity under the root. All such requirements must hold together. A context may narrow the domain further: a length might have to be positive, an order quantity might have to be an integer, or a sensor may only be calibrated over a stated interval. A mathematically permitted input need not be a sensible physical input.

**Worked Example 3.5 (Two restrictions at once).** Find the natural real domain of

$$r(x)=\\frac{\\sqrt{x+2}}{x-3}.$$

The square root requires $x+2\\ge0$, so $x\\ge-2$. The denominator requires $x\\ne3$. Neither requirement replaces the other. Together they give

$$[-2,3)\\cup(3,\\infty).$$

The input $-2$ is included because the root is $0$ and the denominator is $-5$, so $r(-2)=0$. The input $3$ is excluded because its denominator is zero. Negative outputs are possible: when $-2<x<3$, the numerator is positive and the denominator negative. Knowing the domain does not, by itself, tell us the range.

Cancellation must preserve exclusions from the original expression. For example,

$$s(x)=\\frac{x^2-4}{x-2}=x+2\\qquad\\text{when }x\\ne2.$$

Factoring explains the equality: $x^2-4=(x-2)(x+2)$, and cancellation divides by $x-2$, which requires $x\\ne2$. The original function therefore has domain $\\mathbb R\\setminus\\{2\\}$. The formula $x+2$ defined on all real numbers gives another function, with a value at $2$ that the original function lacks. Simplification does not supply that missing value.

The same formula on different domains can have different ranges. The square function on all real numbers has range $[0,\\infty)$; on $[1,3]$ it has range $[1,9]$. To justify the second claim, inputs between $1$ and $3$ have squares between $1$ and $9$, and any $y$ between $1$ and $9$ is produced by the permitted input $\\sqrt y$. Bounding the outputs and showing that every proposed output is reached are separate parts of a range argument.

## A graph records ordered pairs

**Definition 3.6 (Graph).** For a real-valued function $f$ with real domain $A$, its graph is the set of points $(x,f(x))$ for all $x\\in A$. The first coordinate is the input and the second the output.

An axis label is part of the information. If horizontal coordinates are times measured in minutes and vertical coordinates are distances measured in kilometres, a plotted point $(4,2)$ means $2$ kilometres at $4$ minutes. Interchanging the coordinates changes the statement. The scale matters too: equal distances drawn on the page need not represent equal numerical changes on the two axes.

A graph of a function is not necessarily a smooth curve. The graph of Example 3.3 consists of five separate points. Joining them would add points for inputs that are not in the domain. A piecewise function may have a jump, and a formula with an excluded input may have a hole. A drawing should respect those facts. Use a filled point for an included endpoint and an open point for an excluded one; an open point is an annotation, not a member of the graph.

**Result 3.7 (Vertical-line criterion).** A set of points in the coordinate plane is the graph of a real-valued function on its set of first coordinates if and only if no vertical line meets that set in more than one point.

*Reason.* A vertical line has equation $x=a$. If it meets the set at two different points, they have the same input $a$ and different outputs, violating uniqueness. Conversely, if every vertical line meets at most once, each first coordinate that occurs has a unique second coordinate. Taking the occurring first coordinates as the domain therefore defines a function. If a domain has already been specified, every input in that domain must also occur; “at most one” alone does not ensure existence. ∎

This criterion concerns the complete set of points. A small display window, thick pencil line or finite list of samples cannot establish it for an unseen graph. The circle $x^2+y^2=4$ fails because at $x=0$ it contains both $(0,2)$ and $(0,-2)$. Its upper semicircle, defined by $y=\\sqrt{4-x^2}$ on $[-2,2]$, passes. The equation of the whole circle is a valid mathematical relation; failing the criterion only says that it is not one output $y$ for each input $x$.

Likewise, a graph leaving a window has not necessarily ended. Seeing no point at height $100$ on a small drawing does not show that $100$ is absent from the range. A table may suggest a pattern but does not uniquely determine a function outside its listed inputs. These are limits of the available evidence, not failures of graphing itself. Use a formula, a domain statement or other explicit information when a drawing cannot settle the question.

## Rules that change with the input

**Definition 3.8 (Piecewise function).** A piecewise definition specifies different output rules on stated parts of the domain. Every input in the domain must be covered, and any overlapping rules must agree at inputs where they both apply.

**Worked Example 3.9 (An inclusive boundary).** A workshop charges £$8$ for a booking of up to two hours and £$3$ for each additional hour, charged proportionally to duration. Let $t$ be a real duration in hours with $0<t\\le5$. The total cost in pounds is

$$C(t)=\\begin{cases}8,&0<t\\le2,\\\\8+3(t-2),&2<t\\le5.\\end{cases}$$

The phrase “charged proportionally” means that an extra half hour costs £$1.50$; there is no rounding to a whole hour. For $t=1.5$, use the first case to get $C(1.5)=8$. At the boundary, $t=2$ also uses the first case, giving $C(2)=8$. For $t=3.5$, use the second case: $C(3.5)=8+3(1.5)=12.5$ pounds.

Its range is $[8,17]$. All bookings up to two hours produce $8$, while durations above two hours give all costs greater than $8$ up to $17$. On the graph, the horizontal first part ends with the point $(2,8)$ included. The second part approaches that same point but excludes its own input $2$; the combined graph still contains the point because the first part supplies it. There is no ambiguity and no extra value at the boundary.

A common nonexample is to define $u(x)=x$ for $x\\le0$ and $u(x)=x+1$ for $x\\ge0$, claiming domain $\\mathbb R$. At $0$, the rules demand both $0$ and $1$, so the prescription is not a function. Overlap is not always wrong: using $x$ on $x\\le0$ and $x^2$ on $x\\ge0$ would be consistent at $0$, since both rules give $0$. Check agreement rather than merely looking for repeated inequality symbols.

## Composition: using one output as another input

**Definition 3.10 (Composition).** If $g$ and $f$ are functions, the composition $f\\circ g$ applies $g$ first and then $f$:

$$(f\\circ g)(x)=f(g(x)).$$

Its domain consists of the inputs $x$ in the domain of $g$ for which $g(x)$ belongs to the domain of $f$.

This definition checks two stages. It is not enough for the final simplified expression to look meaningful: the first operation and the second operation must each be permitted. In a practical chain, one function might convert a length in metres to centimetres, and another might calculate a cost from the length in centimetres. The units at the handover must match just as the mathematical domains must match.

**Worked Example 3.11 (Order and permitted inputs).** Let $g(x)=x-4$ on $\\mathbb R$, and let $f(u)=\\sqrt u$ on $[0,\\infty)$. Find both compositions with their domains.

Applying $g$ first gives $(f\\circ g)(x)=\\sqrt{x-4}$. The first stage accepts every real $x$, but its output must be nonnegative, so $x\\ge4$. Hence the domain is $[4,\\infty)$. In the other order, $(g\\circ f)(x)=\\sqrt x-4$. The first stage now requires $x\\ge0$; the subtraction then accepts every output of that stage. Its domain is $[0,\\infty)$.

At the common allowed input $9$, the first composition gives $\\sqrt5$ and the second gives $-1$. The compositions have different rules as well as different domains. The order symbol is read from right to left because the innermost operation acts first. This does not say that composition is always unequal in opposite orders; it says that equality must be established, not assumed.

Before moving on, keep three questions separate: “Does this expression have a value?”, “Is this input in the stated domain?”, and “What outputs occur over the whole domain?” They concern formula evaluation, membership and range respectively. Confusing them is the source of many otherwise avoidable mistakes.

## Exercises

### Exercise 3.1
<a id="functions-domain-graphs-ex-1"></a>

A relation contains the ordered pairs $(-1,2)$, $(0,2)$ and $(1,5)$. Does it define a function on $\\{-1,0,1\\}$? What changes if $(0,7)$ is added?

<details>
<summary>Hint 1</summary>

Inspect outputs for each fixed first coordinate, rather than looking for repeated second coordinates.

</details>
<details>
<summary>Hint 2</summary>

After the extra pair is added, count the different outputs attached to input $0$.

</details>
<details>
<summary>Solution</summary>

The original relation is a function: every listed domain element occurs and each has one output. The repeated output $2$ is permitted. Adding $(0,7)$ gives input $0$ the different outputs $2$ and $7$, so the enlarged relation is not a function on the stated domain.

</details>

### Exercise 3.2
<a id="functions-domain-graphs-ex-2"></a>

Let $f(x)=2x^2-3x+1$ on $\\mathbb R$. Calculate $f(-2)$ and simplify $f(a+1)$. Explain why the second answer is not generally $f(a)+1$.

<details>
<summary>Hint 1</summary>

Write a bracketed copy of the input at every occurrence of $x$.

</details>
<details>
<summary>Hint 2</summary>

Expand $(a+1)^2$ before collecting the powers of $a$.

</details>
<details>
<summary>Solution</summary>

We get $f(-2)=2(-2)^2-3(-2)+1=8+6+1=15$. Also $f(a+1)=2(a+1)^2-3(a+1)+1=2a^2+a$. But $f(a)+1=2a^2-3a+2$. Substitution changes every input occurrence; adding $1$ to an output is a different operation. For example, at $a=0$, these expressions give $0$ and $2$ respectively.

</details>

### Exercise 3.3
<a id="functions-domain-graphs-ex-3"></a>

Find the natural real domain of $h(x)=\\sqrt{5-x}/(x+1)$. State whether each endpoint or excluded input is allowed and why.

<details>
<summary>Hint 1</summary>

Write one requirement for the square root and another for the denominator.

</details>
<details>
<summary>Hint 2</summary>

Combine $x\\le5$ with the exclusion from $x+1\\ne0$.

</details>
<details>
<summary>Solution</summary>

The root requires $5-x\\ge0$, so $x\\le5$. The denominator requires $x\\ne-1$. The domain is $(-\\infty,-1)\\cup(-1,5]$. The value $5$ is allowed, since $h(5)=0/6=0$. The value $-1$ is excluded because division by zero is undefined, even though its square root would be permitted.

</details>

### Exercise 3.4
<a id="functions-domain-graphs-ex-4"></a>

The function $k$ has domain $[-2,3]$, codomain $\\mathbb R$ and rule $k(x)=x^2$. Find its range and explain why every number in your proposed range actually occurs.

<details>
<summary>Hint 1</summary>

The domain includes $0$, so the smallest square need not come from an endpoint.

</details>
<details>
<summary>Hint 2</summary>

For a proposed output $y$ between $0$ and $9$, consider the input $\\sqrt y$.

</details>
<details>
<summary>Solution</summary>

Squares are nonnegative and $|x|\\le3$ throughout the domain, so every output lies in $[0,9]$. Conversely, if $0\\le y\\le9$, then $x=\\sqrt y$ lies in $[0,3]$, which is contained in the domain, and $k(x)=y$. Thus the range is exactly $[0,9]$. The codomain remains $\\mathbb R$; it need not equal the range.

</details>

### Exercise 3.5
<a id="functions-domain-graphs-ex-5"></a>

Simplify $v(x)=(x^2-9)/(x-3)$, retaining its original domain. Compare its graph with the graph of $w(x)=x+3$ on all real numbers.

<details>
<summary>Hint 1</summary>

Factor the numerator, recording the denominator restriction before cancellation.

</details>
<details>
<summary>Hint 2</summary>

Ask which point $w$ has at the forbidden input of $v$.

</details>
<details>
<summary>Solution</summary>

Since $x^2-9=(x-3)(x+3)$, we obtain $v(x)=x+3$ for $x\\ne3$. Its domain remains $\\mathbb R\\setminus\\{3\\}$. Its graph consists of the line's points except $(3,6)$; that missing point is marked with an open circle in a sketch. The function $w$ includes $(3,6)$, so the functions do not have the same domain even though their values agree everywhere $v$ is defined.

</details>

### Exercise 3.6
<a id="functions-domain-graphs-ex-6"></a>

Does the relation $x=y^2$ define $y$ as a function of $x$ on $[0,\\infty)$? Give a concrete vertical-line argument, then describe one restriction that produces a function.

<details>
<summary>Hint 1</summary>

Try the input $x=4$.

</details>
<details>
<summary>Hint 2</summary>

The nonnegative and nonpositive choices of $y$ can be treated separately.

</details>
<details>
<summary>Solution</summary>

At $x=4$, both $y=2$ and $y=-2$ satisfy the relation. The vertical line $x=4$ therefore meets it twice, so it is not the graph of one such function. Restricting to points with $y\\ge0$ gives $y=\\sqrt x$ on $[0,\\infty)$. This supplies exactly one permitted output at each input in that domain. Restricting instead to $y\\le0$ gives the different function $y=-\\sqrt x$.

</details>

### Exercise 3.7
<a id="functions-domain-graphs-ex-7"></a>

Define $P(x)=2-x$ for $x<1$, and $P(x)=x+2$ for $x\\ge1$. Evaluate $P(0)$, $P(1)$ and $P(2)$. Describe the included and excluded points at input $1$ in a sketch.

<details>
<summary>Hint 1</summary>

Choose the case using the input before doing any arithmetic.

</details>
<details>
<summary>Hint 2</summary>

The first rule would give $1$ at the boundary, but its condition excludes that input.

</details>
<details>
<summary>Solution</summary>

The values are $P(0)=2$, $P(1)=3$ and $P(2)=4$. At the boundary, draw an open point at $(1,1)$ for the excluded endpoint of the first piece, and a filled point at $(1,3)$ for the second piece. Only the filled point belongs to the graph. The function has one output at $1$, despite the separate open marker used to describe the first piece.

</details>

### Exercise 3.8
<a id="functions-domain-graphs-ex-8"></a>

Let $f(u)=1/u$ on $\\mathbb R\\setminus\\{0\\}$ and $g(x)=x^2-4$ on $\\mathbb R$. Find $(f\\circ g)(x)$ and its domain, then evaluate it at $x=0$.

<details>
<summary>Hint 1</summary>

The output of $g$ becomes the denominator in the next stage.

</details>
<details>
<summary>Hint 2</summary>

Solve $x^2-4=0$ to locate inputs that the second stage rejects.

</details>
<details>
<summary>Solution</summary>

The composition is $1/(x^2-4)$. Every real input is accepted by $g$, but the next stage requires $x^2-4\\ne0$. Factoring gives $(x-2)(x+2)\\ne0$, so the domain is $\\mathbb R\\setminus\\{-2,2\\}$. At $x=0$, the first output is $-4$ and the final output is $-1/4$, which is permitted.

</details>

### Exercise 3.9
<a id="functions-domain-graphs-ex-9"></a>

A table lists $F(0)=1$, $F(1)=2$ and $F(2)=3$. Someone concludes that $F(3)=4$. Explain the missing assumption by giving two real-valued functions on $\\mathbb R$ that match the table but disagree at $3$.

<details>
<summary>Hint 1</summary>

One possible rule is the straight-line expression $x+1$.

</details>
<details>
<summary>Hint 2</summary>

Add a term that vanishes at $0$, $1$ and $2$, such as a product containing those three roots.

</details>
<details>
<summary>Solution</summary>

The functions $F_1(x)=x+1$ and $F_2(x)=x+1+x(x-1)(x-2)$ agree at all three listed inputs because the extra product is zero there. At $3$ they give $4$ and $10$. A straight-line assumption would justify the suggested continuation, but the table alone does not. If the table defines a function only on $\\{0,1,2\\}$, then $3$ is outside its domain altogether.

</details>

### Exercise 3.10
<a id="functions-domain-graphs-ex-10"></a>

A function $g$ is given by $g(x)=x+2$ on $[-2,2]$, and $f(u)=\\sqrt u$ on $[1,4]$. Find the domain and range of $f\\circ g$. Explain why the restriction on $f$ is stronger than merely requiring a real square root.

<details>
<summary>Hint 1</summary>

Require both $-2\\le x\\le2$ and $1\\le x+2\\le4$.

</details>
<details>
<summary>Hint 2</summary>

Once the permitted inputs are known, identify all possible intermediate outputs $x+2$.

</details>
<details>
<summary>Solution</summary>

The second requirement gives $-1\\le x\\le2$, already inside the domain of $g$. Hence the composition has domain $[-1,2]$ and rule $\\sqrt{x+2}$. The intermediate outputs fill $[1,4]$, whose square roots fill $[1,2]$. Every output $y$ in $[1,2]$ occurs at $x=y^2-2\\in[-1,2]$, proving the range. Although the formula $\\sqrt u$ is meaningful for all $u\\ge0$, this particular $f$ was explicitly restricted to $[1,4]$; its stated domain controls the composition.

</details>

## Sources and provenance

This is original exposition with original examples and exercises. The local conceptual seed is Lucent's **Algebra, functions, and domains**, retained unchanged in \`modules/lucent/courses/refresher/02-algebra-functions.md\`. OpenStax's primary textbook provides a benchmark and further reading: [*Algebra and Trigonometry 2e*, §3.1, Functions and Function Notation](https://openstax.org/books/algebra-and-trigonometry-2e/pages/3-1-functions-and-function-notation), [§3.2, Domain and Range](https://openstax.org/books/algebra-and-trigonometry-2e/pages/3-2-domain-and-range), and [§3.4, Composition of Functions](https://openstax.org/books/algebra-and-trigonometry-2e/pages/3-4-composition-of-functions). These sources are listed for comparison and continuation; the chapter does not reproduce their worked problems.

## Summary

A function gives exactly one output for every input in its domain. The codomain is the announced output set, while the range contains exactly the outputs attained. Evaluation substitutes a permitted input into the whole rule; domain restrictions survive algebraic simplification. A graph records all permitted input-output pairs, and the vertical-line criterion expresses uniqueness of output. Tables and display windows supply limited information unless a rule or domain completes the description. Piecewise rules must cover the domain consistently, and a composition must be permitted at both stages. In [Straight Lines and Linear Models](straight-lines-linear-models.md), these ideas will describe constant rates of change, explain the parameters of a line, and set sensible limits on predictions.
`;export{e as default};