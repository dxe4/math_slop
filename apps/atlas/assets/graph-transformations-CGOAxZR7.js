var e=`---
parent_id: book-precalculus
chapter_id: graph-transformations
title: "Transformations of Graphs"
level: secondary
license: CC BY-SA 4.0
---

# Transformations of Graphs

## Reuse a graph by following its points

Suppose a machine's output has already been recorded as a graph against time. A second run follows the same pattern twice as quickly, begins three minutes later, and has every output increased by five units. We could calculate a fresh table from the beginning, but the original graph already contains most of the information. The useful question is where each original point moves.

Graph transformations connect that movement to operations on a function's inputs and outputs. This chapter develops translations, reflections, and scalings from equations rather than from a collection of sign mnemonics. You will transform points and domains, determine ranges where enough information is available, and interpret combinations such as $a f(b(x-h))+k$. We will treat zero parameters separately, because formulas involving their reciprocals would otherwise divide by zero.

## Preparation and notation

The prerequisite book is [Algebra and Functions](/books/library-book-algebra-and-functions/), particularly [functions, domains, and graphs](../algebra-and-functions/functions-domain-graphs.md), [quadratic functions](../algebra-and-functions/quadratic-functions.md), and [rational expressions](../algebra-and-functions/rational-expressions.md). Within Precalculus, [Composition and Inverses](composition-inverses.md) explains why a changed input must still belong to the original function's domain. You should be able to solve linear inequalities, including reversing their direction under negative division.

All parameters in this chapter are real unless stated otherwise. We use $u$ for an old input and $x$ for a new input. This choice prevents a common confusion: the old point's horizontal coordinate is usually not the input at which the transformed function reproduces its output. A point $(u,v)$ on the original graph means exactly that $u$ is allowed and $v=f(u)$.

## Inside and outside operations

**Definition 2.1 (Graph transformation).** For a function $f$ with domain $D_f$, its graph is the set of points $(u,f(u))$ for $u\\in D_f$. A graph transformation constructs another graph by a specified rule for moving those points. A formula defines the new function only at inputs where every required evaluation is defined.

An outside operation changes a computed output: $f(x)+4$ adds four after $f$ has acted. An inside operation changes the number sent into $f$: $f(x+4)$ asks the original rule to act at a different input. These expressions need not be equal. If $f(x)=x^2$, they become $x^2+4$ and $(x+4)^2$, with different minimum points and different values at most inputs.

The most dependable method is to track an arbitrary original point $(u,v)$ with $v=f(u)$. To find the corresponding new point, arrange for the inside expression to equal $u$. Then apply the outside operations to $v$. This separates the horizontal calculation from the vertical calculation and includes domain information automatically.

## Vertical changes act directly on outputs

**Result 2.2 (Vertical scaling and translation).** If $G(x)=a f(x)+k$, then every original point $(u,v)$ gives a transformed point

$$
(u,av+k).
$$

The domain remains $D_f$, and the range becomes $\\{av+k:v\\text{ is in the range of }f\\}$.

*Reason.* The new formula evaluates $f$ at the unchanged input $u$, then multiplies its output by $a$ and adds $k$. Every original input remains necessary and sufficient for that evaluation. ∎

When $a=1$, adding positive $k$ shifts the graph upwards and adding negative $k$ shifts it downwards. When $k=0$ and $a>0$, every vertical distance from the horizontal axis is multiplied by $a$: values of $a$ above one stretch, while values between zero and one compress. When $a<0$, there is also reflection in the horizontal axis. The size factor is $|a|$; a negative size is better described as a positive size together with a reflection.

For a combination $a f(x)+k$, scale and reflect the original output first, then translate it. Reversing that order can change the result. For example, $2(f(x)+3)=2f(x)+6$, whereas $2f(x)+3$ adds only three after scaling. The formula specifies the order exactly. A verbal description should do the same.

### Worked example 2.3 (An outside reflection and shift)

A function $f$ is given only on the four-element domain $\\{-2,-1,0,2\\}$ by the table below. Construct the whole graph of $G(x)=-2f(x)+3$ and state its range.

| Input $u$ | Original output $v=f(u)$ | New input | New output $-2v+3$ |
| --- | --- | --- | --- |
| $-2$ | $1$ | $-2$ | $1$ |
| $-1$ | $-2$ | $-1$ | $7$ |
| $0$ | $0$ | $0$ | $3$ |
| $2$ | $3$ | $2$ | $-3$ |

For example, the original point $(-1,-2)$ becomes $(-1,7)$ because $-2(-2)+3=7$. The graph contains exactly these four new points; joining them would add unsupported inputs. The domain is unchanged, and the range is $\\{-3,1,3,7\\}$. The operation reflects in the horizontal axis, doubles vertical distances, then moves the graph up three. It does not reflect the horizontal coordinates.

## Horizontal translation comes from solving for the input

**Result 2.4 (Horizontal translation).** If $G(x)=f(x-h)$, an original point $(u,v)$ becomes

$$
(u+h,v),
$$

and the new domain is $\\{u+h:u\\in D_f\\}$.

*Reason.* To obtain the original output $v=f(u)$, the new input must satisfy $x-h=u$, hence $x=u+h$. This relation gives every new allowed input and no others. ∎

Thus $f(x-3)$ shifts the graph right by three, despite the minus sign in the formula. The reason is not an arbitrary “opposite sign” convention: the new input must be three larger to send the original input into $f$. Similarly, $f(x+3)$ reproduces the old output three units earlier and shifts the graph left. Output values are unchanged by a purely horizontal shift, so the range stays the same.

### Worked example 2.5 (A shifted square-root graph)

Start with $f(u)=\\sqrt{u}$ on $[0,\\infty)$ and form $G(x)=\\sqrt{x-3}+2$.

The inside condition $x-3=u$ gives $x=u+3$, and the outside addition gives $G(x)=v+2$. Track convenient square inputs:

| Original point $(u,\\sqrt{u})$ | Transformed point $(u+3,\\sqrt{u}+2)$ |
| --- | --- |
| $(0,0)$ | $(3,2)$ |
| $(1,1)$ | $(4,3)$ |
| $(4,2)$ | $(7,4)$ |
| $(9,3)$ | $(12,5)$ |

The original domain condition $u\\ge0$ becomes $x\\ge3$. The original outputs cover $[0,\\infty)$, so the new range is $[2,\\infty)$. The included endpoint moves from $(0,0)$ to $(3,2)$. Every point moves right three and up two. Checking $G(7)=\\sqrt4+2=4$ confirms one tracked point; the input equation explains the whole graph.

## Horizontal scaling uses a reciprocal factor

**Result 2.6 (Horizontal scaling and reflection).** If $b\\ne0$ and $G(x)=f(bx)$, an original point $(u,v)$ becomes

$$
\\left(\\frac{u}{b},v\\right).
$$

The new domain is $\\{x:bx\\in D_f\\}$, and the range is unchanged.

*Reason.* Reproducing the input $u$ requires $bx=u$, giving $x=u/b$. Since $b\\ne0$, each old input corresponds to exactly one new input, and every old output is still attained. ∎

For $b>1$, horizontal distances from the vertical axis become smaller by the factor $1/b$, so the graph is compressed horizontally. For $0<b<1$, the factor $1/b$ exceeds one and the graph stretches horizontally. A negative $b$ also reflects the graph in the vertical axis. In that case the size factor is $1/|b|$ and the sign determines the reflection. These rules concern distances along the horizontal axis, not the numerical size of the outputs.

A concrete anchor is helpful: if $f(6)=10$, then $f(3x)$ equals ten at $x=2$, because $3\\cdot2=6$. Multiplying the input expression by three therefore moves that point towards the vertical axis, rather than three times farther away. The domain transforms by the same division, including any endpoints, holes, or gaps.

### Worked example 2.7 (Reflection reverses the endpoint order)

Suppose $f$ has domain $[-2,4)$, and form $G(x)=f(-2x)$. Find its domain and track any original point $(u,v)$.

The input equation is $-2x=u$, so the point becomes $(-u/2,v)$. The domain must satisfy

$$
-2\\le-2x<4.
$$

Dividing by negative two reverses both comparisons, giving $1\\ge x>-2$, or

$$
D_G=(-2,1].
$$

The included original endpoint $u=-2$ becomes the included endpoint $x=1$. The excluded endpoint $u=4$ becomes the excluded endpoint $x=-2$. Reflection changes their left-to-right order but does not change whether they are included. If $(2,-1)$ is an original point, its new point is $(-1,-1)$, verified by $G(-1)=f(2)=-1$. A known original range would remain unchanged because no outside operation has acted.

## The combined point rule

**Theorem 2.8 (Combined affine transformation).** Let $a,b,h,k$ be real constants with $b\\ne0$. For

$$
G(x)=a f(b(x-h))+k,
$$

the graph is obtained from the original graph by

$$
(u,v)\\longmapsto\\left(h+\\frac{u}{b},\\ av+k\\right).
$$

Its exact domain and range are

$$
D_G=\\{x:b(x-h)\\in D_f\\},
$$

$$
\\operatorname{range}(G)=\\{av+k:v\\in\\operatorname{range}(f)\\}.
$$

*Proof.* The inside expression equals an original input $u$ exactly when $b(x-h)=u$, or $x=h+u/b$. At that input, $f$ returns $v$, and the outside operations return $av+k$. Conversely, any allowed new input has $u=b(x-h)\\in D_f$, so it arises from exactly such an original point. Every old input is reached because $b\\ne0$, proving the range statement as well as the domain statement. ∎

A useful description follows the point rule: reflect horizontally if $b<0$ and scale horizontal coordinates by $1/|b|$, then shift right by $h$; reflect vertically if $a<0$ and scale vertical coordinates by $|a|$, then shift up by $k$. Negative shifts mean the corresponding opposite direction. The input calculation $b(x-h)$ acts in the reverse order from this horizontal movement of points, because solving for the new input reverses the input operations.

The range formula does not require $a\\ne0$. If $a=0$ and the transformed domain is nonempty, the only output is $k$. However, the evaluation of $f$ is still part of the displayed formula, so the domain restriction remains. This differs from replacing the formula by a newly defined constant on all real numbers.

### Worked example 2.9 (Tracking a reflected square root)

Transform $f(u)=\\sqrt{u}$ on $[0,\\infty)$ into

$$
G(x)=-2\\sqrt{-3(x-4)}+5.
$$

Here $a=-2$, $b=-3$, $h=4$, and $k=5$. The point rule is $(u,v)\\mapsto(4-u/3,5-2v)$. Thus

| Original point | New point |
| --- | --- |
| $(0,0)$ | $(4,5)$ |
| $(1,1)$ | $(11/3,3)$ |
| $(4,2)$ | $(8/3,1)$ |
| $(9,3)$ | $(1,-1)$ |

The domain condition is $-3(x-4)\\ge0$, hence $x\\le4$. Since every nonnegative original output occurs, the range after negative doubling and adding five is $(-\\infty,5]$. The endpoint remains included, now at the upper-right end of the graph. The reflection and horizontal compression place increasingly large original inputs to the left of four.

For an independent algebra check of the new horizontal intercept, solve $-2\\sqrt{-3(x-4)}+5=0$. The root must be $5/2$, so $-3(x-4)=25/4$ and $x=23/12$. This lies in the permitted domain and substitutes correctly. The original root at zero does not remain a horizontal intercept, because the vertical shift moved its output to five.

## Factor the inside before naming a shift

### Worked example 2.10 (An unfactored input)

Describe $G(x)=f(2x-6)$ in the combined form and compare its interpretation when $f(u)=u^2$.

Factor the inside as $2(x-3)$. Therefore $b=2$ and $h=3$: the point rule sends $(u,v)$ to $(3+u/2,v)$. In particular, an original point with input zero moves to input three. The graph is compressed horizontally by one half and then shifted right three. Calling the shift six would produce $f(2(x-6))$, whose inside expression is $2x-12$, a different rule.

For the square function, $G(x)=(2x-6)^2=4(x-3)^2$. This can also be described as shifting the square graph right three and stretching it vertically by four. Both descriptions are correct for this particular base function because $(2u)^2=4u^2$. Transformation descriptions need not be unique when the base function has special algebraic properties. The general point rule remains correct for any base graph, including one without such a scaling identity.

Writing an input as $bx+c$ is common. When $b\\ne0$, its shift parameter in our combined form is $h=-c/b$, since $bx+c=b(x+c/b)$. Identify that division before announcing the horizontal shift. The constant added inside and the final horizontal movement agree only when the multiplier is one.

## Missing inputs move too

### Worked example 2.11 (A translated hole stays missing)

Let

$$
f(u)=\\frac{u^2-1}{u-1},\\qquad u\\ne1,
$$

and set $G(x)=f(2(x+1))-3$. Find its simplified rule and exact domain, and identify the missing graph point.

For the original function, factorisation gives $f(u)=u+1$ on $u\\ne1$. The new inside expression must differ from one:

$$
2(x+1)\\ne1,\\qquad x\\ne-\\frac12.
$$

Substituting into the simplified original rule gives

$$
G(x)=2(x+1)+1-3=2x,\\qquad x\\ne-\\frac12.
$$

Its graph is the line $y=2x$ with the point $(-1/2,-1)$ omitted. The shorter formula cannot fill that point. It would require the forbidden old input $u=1$. Its range is $\\mathbb R\\setminus\\{-1\\}$ because the line rule gives output negative one only at the excluded input. A graph transformation must transport exclusions just as faithfully as it transports included endpoints.

The same principle applies when a function is defined only by a table or over a physical observation interval. A new formula does not licence extending the old function beyond those observations. If an extension is intended, it must be specified as a new definition with a stated domain.

## Symmetry and intercepts need their hypotheses

**Definition 2.12 (Even and odd functions).** A function with a domain symmetric about zero is even if $f(-x)=f(x)$ for every allowed $x$, and odd if $f(-x)=-f(x)$ for every allowed $x$. Domain symmetry means that $-x$ is allowed whenever $x$ is.

An even graph is unchanged by reflection in the vertical axis; an odd graph is unchanged by reflecting both coordinates through the origin. The square function on all real numbers is even, and the cube function is odd. But the square rule restricted to $[-1,2]$ does not have a symmetric domain, so that restricted function does not satisfy this definition of evenness. A familiar formula cannot substitute for the domain condition.

If the base function is even, $G(x)=a f(b(x-h))+k$ with $b\\ne0$ is symmetric about the vertical line $x=h$: the inputs $h+t$ and $h-t$ send opposite arguments into $f$ and thus produce equal outputs whenever allowed. This helps locate symmetry without expansion. It also explains why reflecting some familiar graphs appears to make no change; lack of visible change is a property of the chosen base graph, not a failure of the reflection rule.

Horizontal intercepts satisfy $G(x)=0$ at allowed inputs. If $a\\ne0$, this means $f(b(x-h))=-k/a$. Old zeros therefore become points at height $k$, and remain zeros only if $k=0$. A vertical intercept exists only when zero belongs to the transformed domain, in which case it is $(0,G(0))$. An excluded input cannot become an intercept merely because a simplified expression has value zero there.

## Zero multipliers are separate cases

**Result 2.13 (Constant inside expression).** If $b=0$, the formula $G(x)=a f(b(x-h))+k$ asks for the single original input zero at every real $x$. If $0\\in D_f$, it defines the constant $a f(0)+k$ on all real inputs, unless an additional external domain is imposed. If $0\\notin D_f$, it defines no values at any real input.

*Reason.* The inside expression is identically zero. Its preimage of $D_f$ is all of $\\mathbb R$ when zero is allowed, and the empty set otherwise. No division by $b$ is needed or permitted. ∎

For example, with $f(u)=\\sqrt{u}$, the rule $f(0x)+2$ equals two for every real $x$, because zero is a valid square-root input. With $r(u)=1/u$, the rule $r(0x)$ has no valid real input. Calling it a “horizontal stretch by infinity” would neither define a real scaling nor settle the domain question.

An outside zero multiplier also deserves care. The formula $0\\sqrt{x}+2$ has domain $[0,\\infty)$ and constant value two there. At a negative input, its square-root stage is undefined, and multiplying by zero does not repair that. A separately declared constant function $C:\\mathbb R\\to\\mathbb R$, $C(x)=2$, has a larger domain. This is the composition-domain principle from the previous chapter in a degenerate example.

### Worked example 2.14 (Changing a time profile)

A height profile $f(t)$, measured in centimetres, is defined for times $0\\le t\\le8$ minutes. A new run follows the same profile twice as fast, starts three minutes later, and has every height increased by five centimetres. Express the new profile and its time domain.

To reproduce the old time $u$ at a new time $t$, use $u=2(t-3)$. Thus

$$
G(t)=f(2(t-3))+5.
$$

The domain follows from $0\\le2(t-3)\\le8$, giving $3\\le t\\le7$. An old measurement at two minutes reappears at new time four minutes, with height increased by five. The old eight-minute duration has become four minutes; this is why the inside multiplier two corresponds to a horizontal compression by one half.

The formula gives no heights before minute three or after minute seven. A physical description might assign a resting height outside that interval, but that would require extra data and a piecewise extension. The graph transformation itself transports only the original profile and its stated domain. Units also remain essential: the three is a time shift and the five is a height shift.

## Exercises

### Exercise 2.1
<a id="graph-transformations-ex-1"></a>

A function has domain $\\{-1,0,2\\}$ and values $f(-1)=4$, $f(0)=-2$, $f(2)=1$. Construct the complete table of $G(x)=3f(x)-1$ and give its domain and range.

<details>
<summary>Hint 1</summary>

**Hint.** These are outside operations, so the inputs stay fixed.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Multiply each output by three before subtracting one, and list the resulting output set without repetitions.

</details>
<details>
<summary>Solution</summary>

**Solution.** The outputs at $-1,0,2$ are respectively $3(4)-1=11$, $3(-2)-1=-7$, and $3(1)-1=2$. Thus the graph consists of $(-1,11)$, $(0,-7)$, and $(2,2)$. Its domain is $\\{-1,0,2\\}$ and range is $\\{-7,2,11\\}$. Joining these points would create inputs that the specified function does not possess.

</details>

### Exercise 2.2
<a id="graph-transformations-ex-2"></a>

Use the graph of $f(u)=\\sqrt{u}$ to describe $G(x)=\\sqrt{x+4}-1$. Track the original points $(0,0)$, $(1,1)$, and $(4,2)$, and state the new domain and range.

<details>
<summary>Hint 1</summary>

**Hint.** Solve $x+4=u$ for the new input corresponding to an old input $u$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The outside subtraction reduces every output by one; apply this to the original endpoint and to the whole original output interval.

</details>
<details>
<summary>Solution</summary>

**Solution.** The point rule is $(u,v)\\mapsto(u-4,v-1)$, a shift left four and down one. The points become $(-4,-1)$, $(-3,0)$, and $(0,1)$. The domain is $[-4,\\infty)$ because $x+4\\ge0$. The range is $[-1,\\infty)$, with negative one attained at the included endpoint. Both the point rule and the domain inequality place the start at input negative four, rather than positive four.

</details>

### Exercise 2.3
<a id="graph-transformations-ex-3"></a>

Suppose $f$ has domain $[-6,3]$ and its graph includes $(-3,5)$ and $(0,-1)$. Find the domain of $G(x)=f(3x)$, track those points, and state the horizontal size factor.

<details>
<summary>Hint 1</summary>

**Hint.** The old input equals $3x$, so solve for $x$ before moving a point.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Solve $-6\\le3x\\le3$ for the domain. A multiplier above one inside the function moves horizontal coordinates towards zero.

</details>
<details>
<summary>Solution</summary>

**Solution.** The domain is $[-2,1]$. Every point $(u,v)$ becomes $(u/3,v)$, so the given points become $(-1,5)$ and $(0,-1)$. The horizontal size factor is one third, a compression. No output scaling occurs. The two supplied points do not describe the entire range, though whatever original range was specified would remain unchanged under this horizontal transformation.

</details>

### Exercise 2.4
<a id="graph-transformations-ex-4"></a>

Let $f$ have domain $(-2,6]$ and define $G(x)=f(-x/2)$. Find the exact new domain and explain what happens to the endpoint inclusion signs.

<details>
<summary>Hint 1</summary>

**Hint.** Require the inside expression to lie in $(-2,6]$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Multiplying $-2<-x/2\\le6$ by negative two reverses both comparisons. Reorder the resulting endpoints afterwards.

</details>
<details>
<summary>Solution</summary>

**Solution.** The inequality becomes $4>x\\ge-12$, so the domain is $[-12,4)$. The original included input six becomes the included input negative twelve, and the excluded input negative two becomes the excluded input four. The graph reflects horizontally and stretches by two. Reflection exchanges endpoint order but preserves the membership of each transported endpoint.

</details>

### Exercise 2.5
<a id="graph-transformations-ex-5"></a>

A function has domain $[-4,6]$ and known graph points $(-4,2)$, $(0,-1)$, and $(6,0)$. Track them for $G(x)=-3f(2(x-1))+4$ and find the exact transformed domain. Do these three points alone determine the full range?

<details>
<summary>Hint 1</summary>

**Hint.** Use the combined point rule with $a=-3$, $b=2$, $h=1$, and $k=4$.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** New horizontal coordinates are $1+u/2$ and new heights are $4-3v$. The old domain is an interval containing more than the three listed inputs.

</details>
<details>
<summary>Solution</summary>

**Solution.** The points become $(-1,-2)$, $(1,7)$, and $(4,4)$. The domain condition $-4\\le2(x-1)\\le6$ gives $[-1,4]$. These points prove that the range includes negative two, seven, and four, but give no information about outputs at the other old inputs. Therefore they do not determine the full range. If the original range were known, applying $v\\mapsto4-3v$ to it would determine the new one.

</details>

### Exercise 2.6
<a id="graph-transformations-ex-6"></a>

Describe $G(x)=\\sqrt{6-2x}+1$ using the square-root base graph. Find its domain, range, included endpoint, and whether it has a horizontal intercept.

<details>
<summary>Hint 1</summary>

**Hint.** Write $6-2x=-2(x-3)$ before identifying the shift and horizontal scale.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** The original input must be nonnegative, and every square-root output is nonnegative before the outside one is added.

</details>
<details>
<summary>Solution</summary>

**Solution.** Here $b=-2$, $h=3$, and $k=1$. The graph reflects horizontally, compresses by one half, then shifts right three and up one. Its domain is $(-\\infty,3]$, its range is $[1,\\infty)$, and its included endpoint is $(3,1)$. It has no horizontal intercept because every output is at least one. For example, the original point $(4,2)$ becomes $(1,3)$, matching $G(1)=\\sqrt4+1=3$.

</details>

### Exercise 2.7
<a id="graph-transformations-ex-7"></a>

Put $G(x)=f(4x+8)$ into combined form and give its point rule. If $f(u)=|u|$ on $\\mathbb R$, explain an alternative description using a vertical scaling instead of a horizontal scaling.

<details>
<summary>Hint 1</summary>

**Hint.** Factor the inside expression as four times one bracket.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** For the absolute-value base function, use $|4z|=4|z|$ to move a positive scaling outside.

</details>
<details>
<summary>Solution</summary>

**Solution.** Since $4x+8=4(x+2)$, we have $b=4$ and $h=-2$. The point rule is $(u,v)\\mapsto(-2+u/4,v)$: compress horizontally by one quarter, then shift left two. For the absolute-value rule, $G(x)=|4(x+2)|=4|x+2|$, also obtained by shifting left two and stretching vertically by four. The two descriptions agree because of the special scaling identity of absolute value; a general $f$ need not have that property.

</details>

### Exercise 2.8
<a id="graph-transformations-ex-8"></a>

Let $f(u)=1/u$ on $u\\ne0$, and form $G(x)=2f(3(x-2))-1$. Find its formula and domain, track the original point $(1,1)$, and find its horizontal intercept.

<details>
<summary>Hint 1</summary>

**Hint.** The argument of the reciprocal must differ from zero. Use the point rule separately from solving the intercept equation.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** At a horizontal intercept, the reciprocal output before outside operations must equal one half.

</details>
<details>
<summary>Solution</summary>

**Solution.** The formula is $G(x)=2/[3(x-2)]-1$ on $x\\ne2$. The point $(1,1)$ becomes $(2+1/3,2-1)=(7/3,1)$. For an intercept, $2/[3(x-2)]=1$, so $3(x-2)=2$ and $x=8/3$. This is allowed and gives $(8/3,0)$. The excluded input two cannot be restored by outside scaling or translation, since the reciprocal would still be asked to act on zero.

</details>

### Exercise 2.9
<a id="graph-transformations-ex-9"></a>

Let $f(u)=\\sqrt{u}$ on $[0,\\infty)$ and $r(u)=1/u$ on $u\\ne0$. Compare the domains and values of $G(x)=f(0x)+2$, $H(x)=0f(x)+2$, and $K(x)=r(0x)$. Explain why none should be analysed by division by its zero multiplier.

<details>
<summary>Hint 1</summary>

**Hint.** Evaluate the inside expression when it is constant, then ask whether that single number is allowed by the next function.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** An outside zero does not remove the need to evaluate the original function. The reciprocal cannot accept zero at any input.

</details>
<details>
<summary>Solution</summary>

**Solution.** Since $f(0)=0$, $G$ is the constant two on all real inputs. For $H$, the square-root stage still requires $x\\ge0$, so it is the constant two only on $[0,\\infty)$. For $K$, the inside value is always zero and the reciprocal is undefined, so its valid input set is empty. The formula $u/b$ assumes $b\\ne0$ and cannot be used for a zero inside multiplier. These cases are settled directly by the domain definition.

</details>

### Exercise 2.10
<a id="graph-transformations-ex-10"></a>

A profile $f$ is defined for times from zero to ten minutes inclusive. A new process follows it at half the original speed, begins two minutes later, and decreases every output by three units. Find the new formula and time domain, and track an original measurement $(6,8)$.

<details>
<summary>Hint 1</summary>

**Hint.** At half speed, the original time advances by only one half for each unit of new elapsed time.

</details>
<details>
<summary>Hint 2</summary>

**Hint.** Use the inside expression $(t-2)/2$ and require it to lie in $[0,10]$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The new profile is $G(t)=f((t-2)/2)-3$. Its domain satisfies $0\\le(t-2)/2\\le10$, giving $2\\le t\\le22$. A ten-minute old profile now lasts twenty minutes after its delayed start. The old input six occurs when $(t-2)/2=6$, so $t=14$, and its old output eight becomes five. Thus the tracked point is $(14,5)$. The formula supplies no additional measurements outside the transported time interval.

</details>

## Sources

The explanations, examples, tables, and exercises in this chapter are original. Primary-source parallel reading is OpenStax, *Precalculus 2e*, [1.5, Transformation of Functions](https://openstax.org/books/precalculus-2e/pages/1-5-transformation-of-functions), covering shifts, reflections, stretches, and compressions. Its [1.4, Composition of Functions](https://openstax.org/books/precalculus-2e/pages/1-4-composition-of-functions) gives further background on stage-by-stage domain conditions. These are references for further study, rather than copied worked-question sources.

This chapter builds on Euler's Algebra and Functions and the preceding Precalculus chapter. It uses British spelling and is licensed CC BY-SA 4.0.

## Summary

Outside operations change outputs directly; inside operations determine which new input reproduces an old one. For $b\\ne0$, the rule $G(x)=a f(b(x-h))+k$ sends $(u,v)$ to $(h+u/b,av+k)$. This gives translations, reflections, and the reciprocal horizontal size factor in one calculation. The same correspondence transports domains, endpoint membership, and missing inputs. Ranges follow the outside operation because every old input is still reached.

A zero inside multiplier instead asks whether zero belongs to the original domain; a zero outside multiplier retains the domain needed to evaluate the displayed function. Neither case permits division by zero or automatic domain extension. In [Polynomial and Rational Graphs](polynomial-rational-graphs.md), these transformations will combine with factorisation and exact restrictions to explain intercepts, missing points, and the larger shape of familiar algebraic graphs.
`;export{e as default};