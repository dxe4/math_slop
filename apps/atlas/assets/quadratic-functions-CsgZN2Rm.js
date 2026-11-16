var e=`---
parent_id: book-algebra-and-functions
chapter_id: quadratic-functions
title: "Quadratic Functions"
level: secondary
license: CC BY-SA 4.0
---

# Quadratic Functions

Solving $x^2-6x+5=0$ tells us where one expression is zero. Studying the function $f(x)=x^2-6x+5$ asks a wider set of questions. How low can its output be? Which inputs have the same output? Where is the output positive? How many times does a straight line meet its graph? One algebraic rewrite, $f(x)=(x-3)^2-4$, provides a route to all these answers.

This chapter connects equations to graphs without assuming calculus. We shall locate vertices, establish ranges and extrema, solve quadratic inequalities and distinguish an ordinary intersection from a double intersection. Our principal tools are equivalent expressions, the order properties of real numbers and the fact that squares are nonnegative. A graph helps organise the conclusions, while algebra explains why they hold for every input in the stated domain.

Required preparation is [functions, domains and graphs](functions-domain-graphs.md), [straight lines](straight-lines-linear-models.md) and [quadratic equations](quadratic-equations.md). Recall that a function includes its domain: changing the permitted inputs can change its range and its intersections. Unless a restriction is stated, a quadratic in this chapter has domain $\\mathbb R$, the set of all real numbers. Interval notation $[u,v]$ includes its endpoints, while $(u,v)$ excludes them; an infinite endpoint is always written with a round bracket.

## Three useful forms

**Definition 6.1 (Quadratic function and its graph).** A real quadratic function has rule $f(x)=ax^2+bx+c$, where $a,b,c$ are real constants and $a\\ne0$, on a specified real domain. On the full domain $\\mathbb R$, its graph is the vertical parabola consisting of all points $(x,f(x))$. A zero is an input $r$ for which $f(r)=0$; the corresponding graph point $(r,0)$ is an $x$-intercept.

We shall use three forms for different purposes. Expanded form $ax^2+bx+c$ displays the coefficients and gives $f(0)=c$, so $(0,c)$ is the $y$-intercept when $0$ belongs to the domain. Completed-square form $a(x-h)^2+k$ displays a centre input and a distinguished output. Factored form $a(x-r_1)(x-r_2)$ displays real roots when they exist. These forms describe the same rule when the identities have been correctly established. Not every quadratic has a factorisation into real linear factors.

Notice the distinction between an input and a point. A root is a number such as $2$; an intercept is a point such as $(2,0)$. Also, an intercept need not be a crossing: at a repeated root the full parabola touches the horizontal axis and stays on the same side of it. Saying “root” does not by itself tell us whether the sign changes.

## The vertex from completing the square

**Theorem 6.2 (Completed-square form).** For real $a\\ne0$, $b$ and $c$, define

$$h=-\\frac{b}{2a},\\qquad k=c-\\frac{b^2}{4a}.$$

Then, for every real $x$,

$$ax^2+bx+c=a(x-h)^2+k.$$

*Proof.* Factor $a$ from the first two terms and supply the missing square term inside the brackets:

$$ax^2+bx+c=a\\left[x^2+\\frac ba x+\\frac{b^2}{4a^2}-\\frac{b^2}{4a^2}\\right]+c.$$

The first three bracketed terms form a square. Distribute $a$ over the remaining constant to obtain

$$a\\left(x+\\frac{b}{2a}\\right)^2-\\frac{b^2}{4a}+c.$$

Substitution of the stated $h$ and $k$ gives the required identity. Division is legitimate because $a\\ne0$, and expansion verifies the result for every input. ∎

**Definition 6.3 (Vertex, axis and extremum).** For the full real graph of $f(x)=a(x-h)^2+k$, the point $(h,k)$ is the vertex and the line $x=h$ is its axis of symmetry. A minimum is an attained output no greater than any other output; a maximum is defined with the inequality reversed. Either is called an extremum.

**Theorem 6.4 (Symmetry and full-domain range).** Suppose $f(x)=a(x-h)^2+k$ has domain $\\mathbb R$ and $a\\ne0$. For every real $t$, $f(h+t)=f(h-t)$. If $a>0$, the unique minimum is $k$, attained at $x=h$, and the range is $[k,\\infty)$. If $a<0$, the unique maximum is $k$, attained at $x=h$, and the range is $(-\\infty,k]$.

*Proof.* Both $f(h+t)$ and $f(h-t)$ equal $at^2+k$, proving symmetry. Since $(x-h)^2\\geq0$, multiplication by positive $a$ gives $f(x)\\geq k$; multiplication by negative $a$ gives $f(x)\\leq k$. Equality occurs exactly when $(x-h)^2=0$, hence only at $x=h$.

To establish the whole range, bounds alone are not enough: every output on the indicated side must be attained. If $a>0$ and $y\\geq k$, then $(y-k)/a\\geq0$. Choosing $x=h+\\sqrt{(y-k)/a}$ gives $f(x)=y$. If $a<0$ and $y\\leq k$, the same quotient is again nonnegative and the same construction works. Thus there are no gaps in the stated ranges. ∎

This proof explains “opens upwards” and “opens downwards”. With positive $a$, moving away from $h$ increases the square and places the graph above its vertex. With negative $a$, it places the graph below its vertex. The magnitude $|a|$ tells how strongly the vertical output changes for a fixed horizontal displacement. It does not move the axis; that is controlled by $h$.

**Example 6.5 (Reading a complete parabola).** Find the vertex, axis, intercepts and range of $f(x)=2x^2-8x+6$ on $\\mathbb R$.

Complete the square, retaining the leading coefficient:

$$f(x)=2(x^2-4x)+6=2\\bigl((x-2)^2-4\\bigr)+6=2(x-2)^2-2.$$

Thus the vertex is $(2,-2)$, the axis is $x=2$ and the range is $[-2,\\infty)$. Because $a=2>0$, the vertex gives the unique minimum. Factorisation gives $f(x)=2(x-1)(x-3)$, so the $x$-intercepts are $(1,0)$ and $(3,0)$. Evaluating at zero gives the $y$-intercept $(0,6)$. Symmetry predicts the matching point $(4,6)$, since $0$ and $4$ are equally far from $2$.

These facts support a sketch: mark the vertex, reflect known points across the axis and draw an upward parabola through them. The sketch records conclusions already proved; a few plotted dots by themselves would not prove that no lower point exists elsewhere.

## Movement, restrictions and attainable extrema

Symmetry concerns pairs of inputs equally spaced from $h$. On the full real domain both members of every pair are present. A restriction such as $x\\geq h$ removes half the parabola, so its graph is no longer symmetric as a set even though the polynomial identity still holds wherever both inputs are allowed.

One can establish the direction of movement algebraically. If $h\\leq u<v$, then $0\\leq u-h<v-h$, hence $(u-h)^2<(v-h)^2$. Thus for $a>0$ the function strictly increases to the right of $h$. If $u<v\\leq h$, their distances to $h$ have the opposite order and the function strictly decreases. Negative $a$ reverses both conclusions. This argument compares any two inputs; it uses no rates of change.

On a closed interval $[p,q]$, the point closest to $h$ produces the smallest square and the point farthest from $h$ the largest. If $h$ lies inside the interval, it is the closest point. Otherwise, the closer endpoint is closest. A farthest point is always an endpoint, possibly both. Multiplication by negative $a$ reverses which of these gives the minimum. Open endpoints demand care: the best bound may fail to be attained.

**Example 6.6 (A range that depends on the domain).** Let $g(x)=(x-3)^2-2$.

On $\\mathbb R$, the range is $[-2,\\infty)$. On $[0,1]$, the distance $3-x$ runs from $3$ down to $2$, so $(x-3)^2$ takes every value in $[4,9]$. The restricted range is therefore $[2,7]$: the minimum is $g(1)=2$ and the maximum is $g(0)=7$. The full parabola's vertex input $3$ is not permitted, so its output $-2$ is not a restricted minimum.

On the open interval $(0,1)$, the endpoint values are omitted and the range is $(2,7)$. To check there are no gaps, take $2<y<7$; then $2<\\sqrt{y+2}<3$, so $x=3-\\sqrt{y+2}$ lies in $(0,1)$ and satisfies $g(x)=y$. There is neither a minimum nor a maximum on this domain, although $2$ and $7$ remain lower and upper bounds. A minimum must belong to the range.

**Example 6.7 (An area maximum without calculus).** A rectangular pen uses $24$ metres of fencing for all four sides. Let one side have length $x$ metres. The other side is $12-x$, and positive lengths require $0<x<12$. Its area is

$$A(x)=x(12-x)=36-(x-6)^2.$$

Since the square is nonnegative, $A(x)\\leq36$, with equality exactly when $x=6$. This input is allowed, so the maximum is $36$ square metres, attained by a $6$ metre square. There is no minimum positive area: the endpoints $0,12$ would give area zero but are excluded. Every $y$ with $0<y\\leq36$ is attained by $x=6-\\sqrt{36-y}$, which lies in $(0,6]$. Hence the exact range is $(0,36]$, reflecting both the square identity and the physical domain.

## Roots and signs

A root divides inputs into regions in which a factor may have different signs. These signs determine whether the graph is above or below the horizontal axis. The discriminant from the previous chapter first tells us whether there are two distinct real roots, a repeated root or none.

**Theorem 6.8 (Signs of a real quadratic).** Let $f(x)=ax^2+bx+c$ with real coefficients and $a\\ne0$, on $\\mathbb R$.

If there are two distinct real roots $r_1<r_2$, then $f$ has the sign of $a$ for $x<r_1$ and $x>r_2$, the opposite sign for $r_1<x<r_2$, and is zero at the roots. If there is a repeated real root $r$, then $f$ has the sign of $a$ at every $x\\ne r$ and is zero at $r$. If there are no real roots, then $f$ has the sign of $a$ everywhere.

*Proof.* In the first case, $f(x)=a(x-r_1)(x-r_2)$. This factorisation follows from the quadratic formula: the roots have sum $-b/a$ and product $c/a$, so expansion restores all coefficients. To the left of both roots the two factors are negative; between them they have opposite signs; to the right both are positive. Multiplying by $a$ gives the stated signs.

For a repeated root, completed-square form is $a(x-r)^2$. The square is positive except at $r$, proving the second case. Finally, if there are no real roots, then $D=b^2-4ac<0$. The identity $k=-D/(4a)$ shows that the vertex output $k$ has the same sign as $a$. When $a>0$, $f(x)\\geq k>0$; when $a<0$, $f(x)\\leq k<0$. This proves the final case. ∎

**Example 6.9 (A sign chart and an inequality).** Solve $-2x^2+2x+12\\geq0$ on $\\mathbb R$.

Factor the expression as $-2(x+2)(x-3)$. The roots $-2,3$ divide the real line into three intervals. Keeping track of each sign gives:

| Input region | $x+2$ | $x-3$ | $-2(x+2)(x-3)$ |
| --- | --- | --- | --- |
| $x<-2$ | negative | negative | negative |
| $-2<x<3$ | positive | negative | positive |
| $x>3$ | positive | positive | negative |

At either root the product is zero. The inequality includes zero, so its solution set is $[-2,3]$. If the inequality were strict, the endpoints would be removed. As a second route, multiplying by $-1/2$ gives $(x+2)(x-3)\\leq0$, with the inequality direction reversed because the multiplier is negative.

For a contextual domain, intersect this algebraic answer with that domain. If only $x\\geq0$ is allowed, the same inequality has answer $[0,3]$. Domain restrictions are applied to inputs, not inferred from the picture's apparent viewing window. A plotting window is a choice of display, not a mathematical domain.

## Straight-line intersections and tangency

To find intersections of $y=f(x)$ and $y=mx+n$, equate their outputs at the same input. The equation is

$$ax^2+(b-m)x+(c-n)=0.$$

Its discriminant $(b-m)^2-4a(c-n)$ classifies the unrestricted real intersections. A positive value gives two distinct points, zero a repeated intersection and a negative value none. Each root still needs its output coordinate. A root outside either graph's domain does not produce an intersection of the stated graphs.

**Definition 6.10 (Tangent line to a vertical parabola).** A nonvertical line $y=mx+n$ is tangent to the full parabola $y=ax^2+bx+c$, with $a\\ne0$, at input $r$ when their difference is $a(x-r)^2$. Their intersection equation then has a repeated root $r$. This is the algebraic tangency criterion for these graphs.

The square shows why this intersection is special: the difference has the same nonzero sign on both sides of $r$, and vanishes at $r$ alone. The parabola touches the line without crossing it. This definition distinguishes a double intersection from simply counting one visible intersection. A vertical line $x=r$ also meets a full vertical parabola once, but is not a tangent under this criterion. A domain restriction can likewise hide one of two ordinary intersections without making the remaining one a double intersection.

**Example 6.11 (Two intersections, tangency and a restricted graph).** Let $f(x)=x^2-4x+5=(x-2)^2+1$, initially with domain $\\mathbb R$.

For the horizontal line $y=t$, intersections satisfy $(x-2)^2=t-1$. If $t>1$, the two inputs are $2\\pm\\sqrt{t-1}$. If $t=1$, the equation has the repeated root $2$, and $y=1$ is tangent at $(2,1)$. If $t<1$, there are no real intersections.

A sloping tangent exists as well: compare with $y=2x-4$. Subtraction gives $f(x)-(2x-4)=x^2-6x+9=(x-3)^2$. Thus the line is tangent at $(3,2)$, and the parabola stays above it everywhere else. The tangent need not be horizontal or pass through the vertex.

Now restrict $f$ to $x\\geq2$ and compare with $y=2$. The unrestricted inputs are $1,3$, but only $3$ is allowed. There is exactly one intersection of the restricted graphs, at $(3,2)$. It is not a tangent: $f(x)-2=(x-1)(x-3)$ has a simple root at $3$ and changes sign there. For example, its values at $5/2$ and $7/2$ have opposite signs. Counting intersections after restricting the domain cannot replace the repeated-root criterion.

## Common misreadings

In $a(x-h)^2+k$, the vertex input is $h$, the number that makes the bracket zero. Thus $(x+4)^2-7$ has vertex $(-4,-7)$, not $(4,-7)$. The axis is the line $x=-4$, not the point $(-4,-7)$ and not the horizontal line $y=-7$.

An upward parabola need not have roots: $(x-1)^2+2$ is always positive. Nor does upward opening mean every output is positive: $(x-1)^2-2$ is negative near its vertex. A repeated root does not produce a sign change, and two distinct roots do not mean the expression is positive between them: the leading coefficient decides that. Finally, a vertex formula for a polynomial does not by itself settle a restricted optimisation problem. Always ask which inputs are actually available and whether a proposed bound is attained.

## Exercises

### Exercise 6.1
<a id="quadratic-functions-ex-1"></a>

For $f(x)=x^2+4x-5$ on $\\mathbb R$, find completed-square form, vertex, axis, intercepts and range.

<details>
<summary>Hint 1</summary>

**Hint.** Add and subtract $4$ to complete the square in $x^2+4x$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** For the roots, find two numbers with product $-5$ and sum $4$. Keep points distinct from input values.

</details>
<details>
<summary>Solution</summary>

**Solution.** We obtain $f(x)=(x+2)^2-9$, so the vertex is $(-2,-9)$ and the axis is $x=-2$. The positive leading coefficient makes $-9$ the attained minimum and gives range $[-9,\\infty)$. Factoring as $(x+5)(x-1)$ gives $x$-intercepts $(-5,0)$ and $(1,0)$. Since $f(0)=-5$, the $y$-intercept is $(0,-5)$. The two root inputs average to $-2$, agreeing with the axis.

</details>

### Exercise 6.2
<a id="quadratic-functions-ex-2"></a>

Find the vertex, maximum and range of $g(x)=-3(x+1)^2+12$ on $\\mathbb R$. Find all inputs giving output zero.

<details>
<summary>Hint 1</summary>

**Hint.** Identify the input that makes the squared bracket zero, and use the sign of $-3$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** For zero output, rearrange to $(x+1)^2=4$ and use both square-root signs.

</details>
<details>
<summary>Solution</summary>

**Solution.** The vertex is $(-1,12)$. Since $-3(x+1)^2\\leq0$, the unique maximum is $12$, attained at $x=-1$, and the full range is $(-\\infty,12]$. The zero equation gives $x+1=2$ or $x+1=-2$, hence $x=1$ or $x=-3$. These are equally spaced from the axis input $-1$, as the square identity predicts.

</details>

### Exercise 6.3
<a id="quadratic-functions-ex-3"></a>

Determine the range and extrema of $f(x)=(x-2)^2+1$ first on $[0,5]$, then on $(2,5)$.

<details>
<summary>Hint 1</summary>

**Hint.** Compare permitted inputs by their distances from $2$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** On the closed interval the vertex is allowed. On the open interval neither the distance $0$ nor the distance $3$ is attained.

</details>
<details>
<summary>Solution</summary>

**Solution.** On $[0,5]$, the square ranges from $0$ to $9$, so the function's range is $[1,10]$. Its minimum is $1$ at $x=2$; its maximum is $10$ at $x=5$, whose distance $3$ exceeds the other endpoint's distance $2$. On $(2,5)$ the square takes exactly the values in $(0,9)$, so the range is $(1,10)$. There is no minimum or maximum there: the bounds $1,10$ are excluded. Every intermediate output $y$ is realised by $x=2+\\sqrt{y-1}$.

</details>

### Exercise 6.4
<a id="quadratic-functions-ex-4"></a>

Solve $x^2-x-6<0$ on $\\mathbb R$, giving a sign argument rather than only a sketch.

<details>
<summary>Hint 1</summary>

**Hint.** Factor the expression and order its roots.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** A product of two real nonzero factors is negative exactly when their signs differ.

</details>
<details>
<summary>Solution</summary>

**Solution.** The expression is $(x+2)(x-3)$. For $x<-2$, both factors are negative, so the product is positive. For $-2<x<3$, the first factor is positive and the second negative, giving a negative product. For $x>3$, both are positive. At either root the product is zero, which does not satisfy a strict inequality. The solution set is $(-2,3)$.

</details>

### Exercise 6.5
<a id="quadratic-functions-ex-5"></a>

Solve $-x^2+2x+8\\leq0$ on $\\mathbb R$, and then give the answer when the domain is restricted to $[0,6]$.

<details>
<summary>Hint 1</summary>

**Hint.** Factor out the negative sign before examining roots and signs.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The roots are $-2,4$. The downward parabola is nonpositive outside the interval between them.

</details>
<details>
<summary>Solution</summary>

**Solution.** We have $-x^2+2x+8=-(x+2)(x-4)$. For $x<-2$ or $x>4$ the product inside is positive, so the whole expression is negative. Between the roots it is positive, and at the roots it is zero. Thus the full solution is $(-\\infty,-2]\\cup[4,\\infty)$. Intersecting with the permitted domain $[0,6]$ gives $[4,6]$. The endpoint $6$ is included because it is allowed and gives a negative output.

</details>

### Exercise 6.6
<a id="quadratic-functions-ex-6"></a>

Solve each inequality over the reals: (a) $(x-4)^2\\leq0$; (b) $(x-4)^2>0$; (c) $-2(x-4)^2\\geq0$.

<details>
<summary>Hint 1</summary>

**Hint.** A square is nonnegative and vanishes at just one input here.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** In part (c), division by $-2$ reverses the inequality. A repeated root need not separate opposite signs.

</details>
<details>
<summary>Solution</summary>

**Solution.** In (a), a nonnegative square can be at most zero only by equalling zero, so $x=4$. In (b), the square is positive exactly when $x\\ne4$, giving $(-\\infty,4)\\cup(4,\\infty)$. In (c), dividing by the negative number $-2$ gives $(x-4)^2\\leq0$, so again $x=4$. The original expression in (c) is negative everywhere else; it does not change sign across the repeated root.

</details>

### Exercise 6.7
<a id="quadratic-functions-ex-7"></a>

For $f(x)=x^2-2x+3$ on $\\mathbb R$, classify the number of intersections with $y=t$ for every real $t$. Identify the tangent among these horizontal lines.

<details>
<summary>Hint 1</summary>

**Hint.** Complete the square to find the smallest possible output.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The intersection equation is $(x-1)^2=t-2$. A tangent corresponds to a repeated root.

</details>
<details>
<summary>Solution</summary>

**Solution.** We have $f(x)=(x-1)^2+2$. If $t<2$, no real square can equal $t-2$, so there are no intersections. If $t=2$, the only input is $1$ and the intersection is $(1,2)$. The difference $f(x)-2=(x-1)^2$ gives a repeated root, so $y=2$ is tangent. If $t>2$, there are two intersections $(1-\\sqrt{t-2},t)$ and $(1+\\sqrt{t-2},t)$. Both inputs are permitted on the full real domain.

</details>

### Exercise 6.8
<a id="quadratic-functions-ex-8"></a>

Find all real $n$ for which $y=2x+n$ is tangent to $y=x^2$ on $\\mathbb R$. Find the point of tangency and justify that the graphs do not cross there.

<details>
<summary>Hint 1</summary>

**Hint.** Subtract the line from the quadratic and demand a repeated root.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Complete the square in $x^2-2x-n$; its constant after completing must vanish.

</details>
<details>
<summary>Solution</summary>

**Solution.** The difference is $x^2-2x-n=(x-1)^2-(n+1)$. It has a repeated root exactly when $n+1=0$, hence $n=-1$. At that value the sole intersection input is $x=1$, with output $y=1$, so the point is $(1,1)$. Since $x^2-(2x-1)=(x-1)^2>0$ for every $x\\ne1$, the parabola stays strictly above the line elsewhere and does not cross at their shared point. No other $n$ gives a repeated root.

</details>

### Exercise 6.9
<a id="quadratic-functions-ex-9"></a>

The function $f(x)=x^2$ is restricted to domain $[0,\\infty)$. Find its intersections with $y=4$. Is the line tangent at any intersection? Explain why counting intersections alone is insufficient.

<details>
<summary>Hint 1</summary>

**Hint.** First solve the full polynomial equation, then apply the domain restriction.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Factor $x^2-4$ and decide whether the allowed root is repeated. Compare values on either side of it within the domain.

</details>
<details>
<summary>Solution</summary>

**Solution.** The equation $x^2=4$ has roots $-2,2$, but the restricted domain admits only $2$. The graphs therefore have exactly one intersection, $(2,4)$. It is not tangent: the difference $(x-2)(x+2)$ has a simple root at $2$. For allowed inputs just below $2$, this difference is negative, and just above $2$ it is positive; for instance the values at $1,3$ are $-3,5$. The missing second intersection results from the domain restriction, not from a double root.

</details>

### Exercise 6.10
<a id="quadratic-functions-ex-10"></a>

A rectangular garden uses $40$ metres of fencing around all four sides. With positive side lengths, find the greatest possible area. Then find all possible lengths of one side that give area at least $96$ square metres.

<details>
<summary>Hint 1</summary>

**Hint.** If one side is $x$, the other is $20-x$, and the physical domain is $0<x<20$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Complete the square in $x(20-x)$. Translate the area threshold into a bound on $(x-10)^2$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The area is $A(x)=20x-x^2=100-(x-10)^2$, so $A(x)\\leq100$, with equality exactly at $x=10$. This gives a $10$ metre square and maximum area $100$ square metres. For the threshold, $100-(x-10)^2\\geq96$ is equivalent to $(x-10)^2\\leq4$, hence $-2\\leq x-10\\leq2$ and $8\\leq x\\leq12$. This entire interval lies inside the physical domain, so all and only lengths in $[8,12]$ metres work. The endpoints both give area exactly $96$ square metres and are included.

</details>

## Summary

Completing the square expresses every real quadratic as $a(x-h)^2+k$. On the full real domain, this form proves the vertex, symmetry, range and attained extremum directly from nonnegative squares. Restricted domains require a fresh check of permitted distances and endpoint inclusion. Real roots divide the line into sign regions, giving quadratic inequalities with the correct endpoints; repeated roots do not change the sign. Comparing a parabola with a straight line produces another quadratic equation, whose double-root case identifies tangency. The next chapter's study of polynomials extends factorisation and root reasoning beyond degree two while retaining the same care with domains and equivalent expressions.

## Sources

This chapter's explanations, examples and exercises are original. For a complementary treatment of the standard graph forms and optimisation questions, see Jay Abramson et al., OpenStax, [*Algebra and Trigonometry 2e*, §5.1, “Quadratic Functions”](https://openstax.org/books/algebra-and-trigonometry-2e/pages/5-1-quadratic-functions), consulted 13 November 2026. The equation methods connect to OpenStax [§2.5, “Quadratic Equations”](https://openstax.org/books/algebra-and-trigonometry-2e/pages/2-5-quadratic-equations). This chapter is licensed CC BY-SA 4.0 as stated above.
`;export{e as default};