var e=`---
parent_id: book-precalculus
chapter_id: polynomial-rational-graphs
title: "Polynomial and Rational Graphs"
level: secondary
license: CC BY-SA 4.0
---

# Polynomial and Rational Graphs

A graph can hide its most important features outside the display window or between sampled points. A polynomial may have a repeated zero that a coarse table misses. A rational expression may simplify to an innocent-looking line while retaining a missing input. This chapter develops an algebraic way to organise a sketch: establish the domain, locate genuine intercepts, determine signs, and describe what happens near excluded inputs and far away. A sketch then records conclusions supported by the formula rather than asking the picture to supply evidence that it cannot contain.

The required preparation is [Algebra and Functions](../algebra-and-functions.md), especially [Expressions, Laws, and Factorising](../algebra-and-functions/expressions-laws-factorising.md), [Polynomials and the Factor Theorem](../algebra-and-functions/polynomials-factor-theorem.md), and [Rational Expressions](../algebra-and-functions/rational-expressions.md), together with [Composition and Inverses](composition-inverses.md) and [Graph Transformations](graph-transformations.md) in this book. You should be able to factor familiar polynomials, solve a product equation, preserve denominator exclusions, and interpret a graph as input-output pairs. We use real inputs and outputs throughout. No derivative rules or calculus tests for turning points are used.

By the end you should be able to describe how multiplicity affects a polynomial at a zero, use its leading term to determine end behaviour, separate holes from vertical asymptotes, and identify horizontal or simple slant asymptotes by algebra. You should also know which features these methods leave undetermined: signs and sample values alone do not establish exact turning points or a complete curve shape.

## Polynomial structure and its visible consequences

**Definition 3.1 (Polynomial and degree).** A nonzero real polynomial is an expression

$$P(x)=a_nx^n+a_{n-1}x^{n-1}+\\cdots+a_1x+a_0,$$

where the exponents are nonnegative integers, the coefficients are real numbers, and $a_n\\ne0$. Its degree is $n$ and its leading term is $a_nx^n$. The zero polynomial is treated separately and has no degree under the convention used here.

Every real number can be substituted into a polynomial, so its natural real domain is $\\mathbb R$. A restriction may still be imposed by a problem or application. The expressions $1/x$, $\\sqrt x$ and $x^{-2}+1$ are not polynomials in $x$, because their variable powers do not satisfy the definition. A polynomial need not have a real zero: $x^2+1$ is positive for every real input. The zero polynomial has every input as a zero, so claims about a finite number of zeros always require a nonzero polynomial.

**Definition 3.2 (Zero and multiplicity).** A real number $a$ is a zero of $P$ if $P(a)=0$. It has multiplicity $m$ when

$$P(x)=(x-a)^mQ(x),\\qquad Q(a)\\ne0,$$

where $m$ is a positive integer and $Q$ is a polynomial. The condition $Q(a)\\ne0$ says that the factor $(x-a)$ has been removed exactly $m$ times, rather than merely some smaller number of times.

A zero is a statement about an allowed input producing output zero. On a polynomial's full domain it gives a horizontal-axis intercept. Its multiplicity records how the factor repeats, rather than how many different points occur on the graph. For instance, $(x-2)^4$ has one real zero, namely $2$, with multiplicity four. It does not have four different intercept points at that coordinate.

**Result 3.3 (Sign near a polynomial zero).** Suppose $P(x)=(x-a)^mQ(x)$ and $Q(a)\\ne0$. Sufficiently close to $a$, the graph changes sign across $a$ when $m$ is odd, and has the same sign on both sides when $m$ is even.

*Reason.* A polynomial whose value is nonzero at $a$ keeps the sign of that value for inputs sufficiently close to $a$. This elementary continuity property follows because small changes of input give small changes in each power and hence in their finite weighted sum. Thus $Q$ has one fixed nonzero sign near $a$. The factor $(x-a)^m$ changes sign across $a$ exactly when $m$ is odd. Multiplying by the fixed sign of $Q$ proves the claim. ∎

The graphical language is that an odd-multiplicity zero is a crossing, while an even-multiplicity zero is a contact with the horizontal axis without a local sign change. This statement concerns a small neighbourhood of the zero. It does not say that every crossing is steep or that a contact is the highest or lowest point of the whole graph. Higher multiplicities can make the curve very flat near a zero, so a drawing alone may not distinguish multiplicity one from three. Factorisation supplies the reliable information.

**Worked Example 3.4 (Zeros, multiplicities and a sign chart).** Describe the real zeros and signs of

$$P(x)=(x+2)(x-1)^2.$$

The zero $-2$ has multiplicity one and the zero $1$ has multiplicity two. For all other inputs, $(x-1)^2$ is positive, so the sign is exactly the sign of $x+2$. Therefore $P$ is negative on $(-\\infty,-2)$, positive on $(-2,1)$, and positive on $(1,\\infty)$. It crosses the axis at $-2$ and makes contact without changing sign at $1$. Substitution gives the vertical intercept $P(0)=2$.

The signs can be organised as follows:

| Input interval | $(-\\infty,-2)$ | $(-2,1)$ | $(1,\\infty)$ |
| --- | --- | --- | --- |
| Sign of $x+2$ | negative | positive | positive |
| Sign of $(x-1)^2$ | positive | positive | positive |
| Sign of $P(x)$ | negative | positive | positive |

These signs are valid for whole intervals because the displayed factors have those signs throughout each interval. A single sample in each interval would be a useful arithmetic check, but the factor argument is what supports the full interval statement. We have not located any other high or low points, and the sign chart does not claim to do so.

## Leading terms and the ends of a graph

**Definition 3.5 (End behaviour).** End behaviour describes a function's outputs as the input becomes arbitrarily large positive or arbitrarily large negative. The notation $x\\to\\infty$ means that $x$ increases without bound; $x\\to-\\infty$ means that it decreases without bound. Neither symbol describes an ordinary real input called infinity.

**Result 3.6 (Leading-term rule).** For a nonconstant real polynomial $P$ with leading term $a_nx^n$, its outputs have the same eventual sign and unbounded direction as $a_nx^n$ at each end. If $n$ is even, the two ends point in the same vertical direction; if $n$ is odd, they point in opposite directions. The sign of $a_n$ determines the direction at the positive end.

*Reason.* For $x\\ne0$, factor out the leading term:

$$P(x)=a_nx^n\\left(1+\\frac{a_{n-1}}{a_nx}+\\cdots+\\frac{a_0}{a_nx^n}\\right).$$

Every fractional term in brackets can be made as small in magnitude as desired by taking $|x|$ large. Since there are only finitely many, their sum becomes small too. The bracket therefore stays positive and close to $1$, while $|a_nx^n|$ grows without bound. An even power is positive at both ends and an odd power has the sign of $x$, giving the stated directions. ∎

This is a statement about sufficiently large inputs, not every input. The leading term of $x^3-100x$ is $x^3$, but at $x=1$ the whole polynomial is negative while the leading term is positive. The lower-degree terms can be important in a moderate display window. “The leading term dominates” is a claim about the ends, with no permission to discard other terms when computing an ordinary function value.

**Worked Example 3.7 (An even degree with negative leading coefficient).** Find the ends and real intercepts of

$$H(x)=-2(x+1)^2(x-3)^2.$$

The degree is four and the leading term is $-2x^4$. Thus both ends go downward: $H(x)$ becomes negative without bound as $x$ goes far in either direction. The zeros are $-1$ and $3$, each with multiplicity two. Away from these zeros both squared factors are positive, so $H(x)<0$. The graph contacts the axis at each zero without crossing it. The vertical intercept is $H(0)=-2(1)(9)=-18$.

These facts determine where the graph is above or below the axis and how its ends behave. They do not by themselves determine the exact bottom of the portion between the two zeros. Symmetry could be investigated separately, but no additional turning coordinate follows just from the degree and intercepts.

## Rational functions remember their original domain

**Definition 3.8 (Rational function).** A rational function is specified by a quotient $R(x)=P(x)/Q(x)$ of real polynomials with $Q$ not the zero polynomial. Its natural real domain contains exactly the inputs where the original denominator is nonzero.

Factor both polynomials before deciding what the excluded inputs mean graphically. Cancellation is valid only at inputs where the canceled factor is nonzero. The simplified expression provides an easier way to calculate existing values; it does not enlarge the original function's domain. In particular, a numerator zero is a graph intercept only if it survives as an allowed input after every original denominator restriction has been applied.

**Definition 3.9 (Hole and vertical asymptote).** A hole is an excluded input $a$ at which the nearby outputs approach a finite number $L$; its missing graph point is described as $(a,L)$. A vertical asymptote is a line $x=a$ such that outputs grow without bound in magnitude as the input approaches $a$ from at least one side within the domain.

These are different kinds of missing behaviour. A hole has a finite missing height. Near a vertical asymptote the outputs do not settle at a finite missing height. An open circle is useful for drawing a hole, whereas a dashed vertical line marks an asymptote. Neither annotation adds points to the function.

For a rational expression reduced by canceling all common polynomial factors, a zero of the remaining denominator gives a vertical asymptote, because the remaining numerator is nonzero there while the denominator becomes arbitrarily small. An original denominator zero that disappears completely from the reduced denominator gives a hole, because the reduced quotient has a finite value there. Partial cancellation can leave a denominator factor, so “a factor cancels” is not enough to establish a hole.

**Worked Example 3.10 (A hole and an asymptote in one graph).** Describe the domain, intercepts and excluded-input behaviour of

$$R(x)=\\frac{x^2-1}{x^2+x-2}.$$

Factoring gives

$$R(x)=\\frac{(x-1)(x+1)}{(x-1)(x+2)}=\\frac{x+1}{x+2}=1-\\frac1{x+2},$$

but the original domain excludes both $x=1$ and $x=-2$. At $x=1$, the reduced formula would give $2/3$, so the original graph has a hole at $(1,2/3)$. At $x=-2$, a denominator remains and the reduced numerator is $-1$, so there is a vertical asymptote $x=-2$.

The rewrite $1-1/(x+2)$ makes the side behaviour clear. Just to the left of $-2$, $x+2$ is a small negative number, so $-1/(x+2)$ is large positive and $R(x)$ increases without bound. Just to the right, that term is large negative. The horizontal intercept is $(-1,0)$, since $-1$ is allowed and makes the reduced numerator zero. There is no intercept at $1$: that input is excluded. At $x=0$, the output is $1/2$, giving the vertical intercept $(0,1/2)$.

**Worked Example 3.11 (Why partial cancellation matters).** Consider

$$S(x)=\\frac{(x-2)(x+1)}{(x-2)^2}=\\frac{x+1}{x-2}=1+\\frac3{x-2},\\qquad x\\ne2.$$

Although one factor cancels, a factor $x-2$ remains in the denominator. The outputs become unbounded near $2$, so $x=2$ is a vertical asymptote, not a hole. From the left the fraction $3/(x-2)$ is large negative; from the right it is large positive. Compare $(x-2)^2/(x-2)$: that different original expression simplifies to $x-2$ on $x\\ne2$ and has a hole at $(2,0)$. The excluded input alone does not tell us which behaviour occurs; the remaining factor powers decide it.

## Horizontal and slant asymptotes

**Definition 3.12 (Horizontal and slant asymptotes).** A horizontal line $y=L$ is an asymptote at an end if the difference $R(x)-L$ becomes arbitrarily small in magnitude at that end. A nonhorizontal line $y=mx+b$ is a slant asymptote at an end if $R(x)-(mx+b)$ becomes arbitrarily small there.

An asymptote describes eventual closeness, not a fence the graph cannot cross. The graph may cross a horizontal or slant asymptote at an ordinary input. This does not conflict with becoming close to it far away. A vertical asymptote is different: for a reduced rational function, its input is excluded, so there is no graph point on that vertical line.

For a quotient of nonzero polynomials, comparing degrees gives the horizontal rule. If the numerator degree is smaller than the denominator degree, the quotient becomes close to zero at both ends. If their degrees are equal, it becomes close to the ratio of their leading coefficients. Dividing numerator and denominator by the highest denominator power of $x$ explains both statements: all lower-power fractions become small. If the numerator degree is larger, there is no horizontal asymptote; polynomial division may instead reveal another kind of end behaviour.

**Worked Example 3.13 (Crossing a horizontal asymptote).** Let

$$T(x)=\\frac{x}{x^2+4}.$$

The denominator is positive for every real input, so there are no holes or vertical asymptotes. Since the numerator degree is smaller than the denominator degree, $y=0$ is a horizontal asymptote. More explicitly, for $x\\ne0$, $|T(x)|=|x|/(x^2+4)\\le1/|x|$, so its magnitude becomes arbitrarily small as $|x|$ grows. Nevertheless $T(0)=0$. It is negative for negative inputs and positive for positive inputs, so it crosses its horizontal asymptote at the origin. “Approaches zero at the ends” does not mean “never equals zero”.

Polynomial division gives $U(x)=(x^2+1)/x=x+1/x$ on $x\\ne0$. Its difference from the line $y=x$ is $1/x$, which becomes small at both ends. Thus $y=x$ is a slant asymptote. The vertical distance to the line becomes small even though both the line and the function become unbounded. In contrast, merely having the same general upward direction is insufficient: $x+100$ stays a vertical distance $100$ from $y=x$, so $y=x$ is not its asymptote under the definition.

## What a justified sketch can and cannot claim

A useful sketch starts with the domain, then marks genuine intercepts and holes. Factor signs determine which intervals lie above or below the axis. Examine each remaining denominator zero from both sides, and use leading terms or a division identity for the ends. Only then add a few convenient values to guide the drawing within the established constraints. Mark asymptotes as annotations rather than as parts of the curve.

The result is a supported structural sketch, not a proof of every bend. A table of positive outputs does not show that all unlisted outputs are positive; a factor sign argument can. Several increasing sample values do not establish that the function increases throughout the interval; it may rise and fall between them. A plotting tool may connect points across a hole or an excluded vertical line if its sampling is coarse. Preserve the algebraic exclusions even when they are too small to see on the screen. Later calculus supplies further tools for exact turning and rate questions; this chapter makes no such claims from a sketch alone.

## Exercises

### Exercise 3.1
<a id="polynomial-rational-graphs-ex-1"></a>

For $P(x)=3(x+4)^2(x-2)^3$, find the real zeros, their multiplicities, and whether the graph changes sign at each.

<details>
<summary>Hint 1</summary>

Read each zero from the factor that vanishes there.

</details>
<details>
<summary>Hint 2</summary>

An odd power changes sign across its zero; an even power does not.

</details>
<details>
<summary>Solution</summary>

The zero $-4$ has multiplicity two, and the zero $2$ has multiplicity three. Near either zero the other factor is nonzero and keeps one sign. Thus there is no sign change at $-4$, while the graph crosses the axis at $2$. The coefficient $3$ is nonzero and positive, so it introduces no additional zero or sign reversal.

</details>

### Exercise 3.2
<a id="polynomial-rational-graphs-ex-2"></a>

Determine the end behaviour of $A(x)=-5x^6+2x^3+7$ and $B(x)=2x^5-100x^2$. Explain which terms supply the conclusion.

<details>
<summary>Hint 1</summary>

Identify the highest exponent and its coefficient in each polynomial.

</details>
<details>
<summary>Hint 2</summary>

An even power is positive at both ends; an odd power changes sign between them.

</details>
<details>
<summary>Solution</summary>

The leading term of $A$ is $-5x^6$, so $A$ becomes negative without bound at both ends. The leading term of $B$ is $2x^5$, so $B$ becomes negative without bound at the negative end and positive without bound at the positive end. The lower powers can affect intermediate inputs, but after factoring out the leading term their relative contributions become small for large $|x|$.

</details>

### Exercise 3.3
<a id="polynomial-rational-graphs-ex-3"></a>

Find the signs and intercepts of $P(x)=-(x+1)(x-2)^2$. State one graph feature that this information does not locate exactly.

<details>
<summary>Hint 1</summary>

Away from $2$, the squared factor is positive.

</details>
<details>
<summary>Hint 2</summary>

Account for the initial negative coefficient, and substitute $0$ for the vertical intercept.

</details>
<details>
<summary>Solution</summary>

The horizontal intercepts are $(-1,0)$ and $(2,0)$. The graph crosses at $-1$ and contacts without changing sign at $2$. It is positive for $x<-1$ and negative on both $(-1,2)$ and $(2,\\infty)$. The vertical intercept is $(0,-4)$. These signs and intercepts do not locate every turning point exactly; extra analysis would be needed for that conclusion.

</details>

### Exercise 3.4
<a id="polynomial-rational-graphs-ex-4"></a>

Simplify $R(x)=(x^2-9)/(x^2-x-6)$ while keeping its domain. Find any hole, vertical asymptote and horizontal intercept.

<details>
<summary>Hint 1</summary>

Factor both quadratics and record the original denominator zeros first.

</details>
<details>
<summary>Hint 2</summary>

After cancellation, evaluate the reduced quotient at a removed input only to identify the missing height.

</details>
<details>
<summary>Solution</summary>

The quotient is $(x-3)(x+3)/[(x-3)(x+2)]$, so it reduces to $(x+3)/(x+2)$ on $x\\ne3,-2$. At $3$ the reduced value is $6/5$, producing a hole at $(3,6/5)$. At $-2$ the remaining denominator is zero and numerator is $1$, giving a vertical asymptote $x=-2$. The allowed numerator zero is $-3$, giving horizontal intercept $(-3,0)$. The removed zero at $3$ is not an intercept.

</details>

### Exercise 3.5
<a id="polynomial-rational-graphs-ex-5"></a>

Classify the excluded input $x=1$ for each original expression: $(x-1)^2/(x-1)$ and $(x-1)/(x-1)^3$. Include the missing height or side behaviour as appropriate.

<details>
<summary>Hint 1</summary>

Compare the powers remaining after cancellation.

</details>
<details>
<summary>Hint 2</summary>

A positive square in the denominator gives the same unbounded sign on both sides.

</details>
<details>
<summary>Solution</summary>

The first expression reduces to $x-1$ but still excludes $1$, so it has a hole at $(1,0)$. The second reduces to $1/(x-1)^2$ on the same excluded-input domain. Its denominator is positive and becomes arbitrarily small on both sides of $1$, so its outputs grow positive without bound on both sides. It has a vertical asymptote $x=1$. A shared factor is not sufficient to make an exclusion a hole.

</details>

### Exercise 3.6
<a id="polynomial-rational-graphs-ex-6"></a>

Find the horizontal asymptotes of $F(x)=(3x^2-1)/(2x^2+5)$ and $G(x)=(4x+1)/(x^3+2)$. Explain the degree comparisons.

<details>
<summary>Hint 1</summary>

Compare numerator and denominator degrees before examining individual coefficients.

</details>
<details>
<summary>Hint 2</summary>

Divide each quotient's numerator and denominator by its highest denominator power.

</details>
<details>
<summary>Solution</summary>

For $F$, the degrees are both two. Dividing by $x^2$ gives $(3-1/x^2)/(2+5/x^2)$, which becomes close to $3/2$, so $y=3/2$ is the horizontal asymptote at both ends. For $G$, the numerator degree one is less than denominator degree three. Division by $x^3$ gives $(4/x^2+1/x^3)/(1+2/x^3)$, which becomes close to zero. Hence $y=0$ is its horizontal asymptote at both ends; finite excluded inputs do not change this end behaviour.

</details>

### Exercise 3.7
<a id="polynomial-rational-graphs-ex-7"></a>

Show that $F(x)=(x-2)/(x^2+1)$ crosses its horizontal asymptote. Give its domain and explain why it has no vertical asymptote.

<details>
<summary>Hint 1</summary>

The denominator is always positive.

</details>
<details>
<summary>Hint 2</summary>

Compare degrees for the asymptote, then solve for output zero and inspect signs around that input.

</details>
<details>
<summary>Solution</summary>

Since $x^2+1\\ge1$, the domain is $\\mathbb R$ and no denominator zero can give a vertical asymptote. The numerator degree is less than the denominator degree, so the horizontal asymptote is $y=0$. At $x=2$ the function equals zero. Its sign is negative for $x<2$ and positive for $x>2$, so it crosses that asymptote at $(2,0)$. This concerns a finite input and is compatible with eventual closeness at the ends.

</details>

### Exercise 3.8
<a id="polynomial-rational-graphs-ex-8"></a>

Rewrite $U(x)=(x^2+2x+5)/(x+1)$ to find its slant asymptote and vertical asymptote. State its domain.

<details>
<summary>Hint 1</summary>

Use $(x+1)^2=x^2+2x+1$ to separate a divisible part.

</details>
<details>
<summary>Hint 2</summary>

The difference between the function and a candidate slant line should become arbitrarily small at the ends.

</details>
<details>
<summary>Solution</summary>

The numerator is $(x+1)^2+4$, so $U(x)=x+1+4/(x+1)$ on $\\mathbb R\\setminus\\{-1\\}$. The difference from $y=x+1$ is $4/(x+1)$, which becomes small at both ends, giving that slant asymptote. The reciprocal term becomes unbounded near $-1$, while $x+1$ stays small there. Thus $x=-1$ is a vertical asymptote. There is no canceled factor and no hole.

</details>

### Exercise 3.9
<a id="polynomial-rational-graphs-ex-9"></a>

Find one polynomial with zeros $-2$ of multiplicity two and $3$ of multiplicity one, and with vertical intercept $12$. Explain why the prescribed multiplicities hold exactly.

<details>
<summary>Hint 1</summary>

Start with a nonzero coefficient times $(x+2)^2(x-3)$.

</details>
<details>
<summary>Hint 2</summary>

Use input $0$ to determine the coefficient.

</details>
<details>
<summary>Solution</summary>

Write $P(x)=c(x+2)^2(x-3)$. The intercept condition gives $12=c(4)(-3)$, so $c=-1$. Thus $P(x)=-(x+2)^2(x-3)$ works. After removing $(x+2)^2$, the remaining factor is $-(x-3)$, nonzero at $-2$. After removing $x-3$, the remaining factor is $-(x+2)^2$, nonzero at $3$. The multiplicities are therefore exactly two and one. The question asks for one polynomial, so no claim is made that allowing further factors would give a unique answer.

</details>

### Exercise 3.10
<a id="polynomial-rational-graphs-ex-10"></a>

A plotting table gives $f(-1)=2$, $f(0)=2$ and $f(1)=2$. Explain why these values do not prove that $f$ is constant or always positive. Supply an explicit polynomial matching them and taking a negative value elsewhere.

<details>
<summary>Hint 1</summary>

A term with factors $x+1$, $x$ and $x-1$ vanishes at the three sampled inputs.

</details>
<details>
<summary>Hint 2</summary>

Subtract that product from $2$ and try input $2$.

</details>
<details>
<summary>Solution</summary>

Take $f(x)=2-(x+1)x(x-1)$. The product vanishes at $-1,0,1$, so the table is matched. But $f(2)=2-3\\cdot2\\cdot1=-4$. The function is neither constant nor always positive. A finite table can guide a graph but cannot establish a full-interval sign or shape claim without additional information about the function.

</details>

## Sources and provenance

This chapter is original exposition with original worked examples and exercises. Its primary benchmark and further reading are OpenStax, [*Algebra and Trigonometry 2e*, §5.3, Graphs of Polynomial Functions](https://openstax.org/books/algebra-and-trigonometry-2e/pages/5-3-graphs-of-polynomial-functions), and [§5.6, Rational Functions](https://openstax.org/books/algebra-and-trigonometry-2e/pages/5-6-rational-functions). The source supports comparison of topic coverage; its problems have not been reproduced. The treatment deliberately uses factor signs, algebraic rewrites and elementary end-behaviour reasoning rather than derivative tests.

## Summary

Factored polynomials reveal zeros, their exact multiplicities and the signs between them. Odd multiplicity gives a local sign change, while even multiplicity does not. The leading term determines eventual behaviour at each end, rather than every detail in a finite window. Rational functions retain every original denominator exclusion: complete removal of a denominator factor can leave a finite hole, whereas a remaining reduced denominator zero gives a vertical asymptote. Degree comparison and polynomial division explain horizontal and slant asymptotes, which a graph may cross at finite inputs. A useful sketch records these established facts while leaving unsupported turning-point claims open. In [Radians and the Unit Circle](radians-unit-circle.md), we turn from algebraic graph structure to angle as a numerical input that can record repeated circular motion.
`;export{e as default};