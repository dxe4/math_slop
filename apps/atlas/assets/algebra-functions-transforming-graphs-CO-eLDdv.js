var e=`---
id: deep-dive-algebra-functions-transforming-graphs
title: "Transforming graphs"
license: CC BY-SA 4.0
---

# Transforming graphs

Why does adding three outside a function move its graph upwards, while adding three inside its input moves the graph to the left? The two plus signs act on different things. One changes an output directly. The other changes which input is sent into the old function.

This **Pre-university (L1)** introduction follows one point through those changes. Its scope is graph translation: moving a graph horizontally and vertically without stretching or reflecting it. Use the [Functions and composition refresher](/explore/unhurried/refresh/functions/) and [Coordinates and slope refresher](/explore/unhurried/refresh/coordinates/) for preparation. You should be able to substitute into a rule and read a point $(x,y)$ as an input paired with its output. The longer treatment is in [Functions, Domains, and Graphs](/books/algebra-and-functions/functions-domain-graphs/) and [Quadratic Functions](/books/algebra-and-functions/quadratic-functions/).

## Outside changes act on outputs

Suppose $(u,v)$ is on the graph of $f$. This means precisely that input $u$ is allowed and $f(u)=v$. Now define a new function by

$$g(x)=f(x)+3.$$

At the same input $u$, the new output is $g(u)=f(u)+3=v+3$. Therefore $(u,v)$ becomes $(u,v+3)$. Every point moves three units upwards. The horizontal coordinate stays the same, so the domain also stays the same.

This reasoning does not depend on the shape of the old graph. It works for a straight line, a parabola, a jagged graph or a finite collection of points. It uses the output equation rather than a guess based on how a few familiar curves look. Replacing three by a negative number moves each output down by the corresponding amount.

Notice that $f(x)+3$ does not mean “feed three more into $f$”. The old calculation is completed first, and then its answer is increased. Keeping the brackets around the input helps us see exactly where an extra operation is applied.

## Inside changes act on the input address

Now consider $g(x)=f(x-3)$. To recover the old output $v=f(u)$, ask which new input $x$ sends the old input $u$ into $f$. It must satisfy

$$x-3=u,$$

so $x=u+3$. Consequently the old point $(u,v)$ becomes $(u+3,v)$: it moves right by three units.

The minus sign is inside the input calculation. It does not directly subtract three from the horizontal position of the old point. Instead, the new horizontal position must be three larger so that subtracting three reaches the old input. That small equation explains the direction without relying on a memorised sign rule.

The same reasoning for $g(x)=f(x+3)$ uses $x+3=u$, giving $x=u-3$. It therefore moves each old point three units left. An input shift changes the place where an old output is attained, rather than changing that output's value.

## One point rule combines the translations

Let $h$ and $k$ be fixed real numbers. For

$$g(x)=f(x-h)+k,$$

the point rule is

$$(u,v)\\longmapsto(u+h,v+k).$$

To justify it, substitute $x=u+h$. Then $g(u+h)=f(u)+k=v+k$. This proves that every old point gives a new point. Conversely, if $(x,g(x))$ is a new point, set $u=x-h$ and $v=f(u)$. Then $(u,v)$ is an old point and our rule sends it to the chosen new one. Thus the rule translates the whole graph exactly; it is not just a method for producing a few sample points.

The old domain must travel with the graph. If the old allowed inputs are those in a set $D$, the new allowed inputs are exactly the numbers $x$ for which $x-h$ belongs to $D$. Equivalently, add $h$ to every old allowed input. A function initially defined only on an interval or a finite list does not suddenly become defined everywhere after translation.

## Worked example: a translated parabola

Take $f(u)=u^2$ on every real input, and define

$$g(x)=(x-3)^2+2=f(x-3)+2.$$

Here $h=3$ and $k=2$. The old graph points $(-1,1)$, $(0,0)$ and $(1,1)$ therefore become $(2,3)$, $(3,2)$ and $(4,3)$ respectively. Check the middle point directly: $g(3)=(3-3)^2+2=2$.

The graph moves right by three and up by two. Its lowest point is now $(3,2)$. This last statement has an algebraic reason: every real square is nonnegative, so $(x-3)^2+2$ is at least two; equality occurs when $x-3=0$. We did not infer the minimum merely because our three plotted outputs happened to be three, two and three.

The domain is still all real numbers, because subtracting three from any real input gives a permitted input to $f$. If instead $f$ had been restricted to inputs from zero to two, inclusive, the transformed graph would exist only from three to five, inclusive. The same formula can describe different functions when their domains differ.

## Reading a transformation without guessing its sign

When looking at a translated formula, label the old function first. In $f(x+4)-1$, the old input is $x+4$. Set that equal to an old address $u$: $x+4=u$ gives the new address $x=u-4$. The output is reduced by one. The point therefore moves four units left and one unit down.

This argument also prevents a common confusion between $(x-3)^2$ and $x^2-3$. The first changes the input to the squaring function and moves its graph right. The second changes its output and moves the graph down. Expanding the first gives $x^2-6x+9$, which is certainly not the second expression.

Stretching and reflection require additional point rules. They are worthwhile continuations, but this translation rule alone does not justify applying an “opposite sign” slogan to every occurrence of $x$ in a formula. First identify the input expression, then solve for where the old input will be reached.

## Exercises

### Exercise 1
<a id="deep-dive-algebra-functions-transforming-graphs-ex-1"></a>
A graph of $f$ contains the points $(-2,3)$, $(0,-1)$ and $(5,2)$. Find the corresponding points on $g(x)=f(x-4)+1$. Explain why these three points alone need not describe the whole new graph.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

Identify $h$ and $k$ in the combined point rule.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

The question gives points the graph contains, without saying that its domain has only three inputs.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

Here $h=4$ and $k=1$. Add four to each input coordinate and one to each output coordinate. The new points are $(2,4)$, $(4,0)$ and $(9,3)$. The full transformation translates every point of the original graph, not merely these three. Since no complete domain or full original graph was supplied, other original points may give further new points. Joining the three computed points would add information not given in the question.

</details>

### Exercise 2
<a id="deep-dive-algebra-functions-transforming-graphs-ex-2"></a>
A function $f$ has domain consisting only of zero, two and five, with $f(0)=1$, $f(2)=3$ and $f(5)=1$. Give the exact domain and all graph points of $g(x)=f(x+2)-4$.

<details data-euler-reveal="hint">
<summary>Hint 1</summary>

For each allowed old input $u$, solve $x+2=u$ for the new input.

</details>
<details data-euler-reveal="hint">
<summary>Hint 2</summary>

Change the output after locating its new input address. Do not add any intermediate inputs to the finite domain.

</details>
<details data-euler-reveal="solution">
<summary>Full solution</summary>

The equation $x+2=u$ gives $x=u-2$. Thus the new domain consists exactly of $-2$, $0$ and $3$. Subtract four from each old output: the new graph points are $(-2,-3)$, $(0,-1)$ and $(3,-3)$. These are all the points because the entire old domain was supplied. For example, $g(1)$ is undefined: it would require $f(3)$, but three is outside the old domain.

</details>

## Continue into the book

For a translation, locate the new input that reaches an old input, then apply the output change. The single rule $(u,v)\\mapsto(u+h,v+k)$ for $f(x-h)+k$ records both actions and transports the domain correctly.

The [Functions, Domains, and Graphs chapter](/books/algebra-and-functions/functions-domain-graphs/) supplies the general function framework. The [Quadratic Functions chapter](/books/algebra-and-functions/quadratic-functions/) develops vertex form, ranges and further quadratic examples. [Exponential Functions](/books/algebra-and-functions/exponential-functions/) applies graph changes to another family. The earlier [Function Machines Before Formulas](/articles/functions-before-formulas/) is an optional companion; the [inequalities and piecewise reading](/articles/inequalities-piecewise/) explores what happens when formulas change across a domain.

For a later investigation of intercepts and excluded inputs, use [Roots, Holes, and Asymptotes](/articles/roots-holes-asymptotes/) alongside the [Rational Expressions chapter](/books/algebra-and-functions/rational-expressions/). These are continuations, rather than extra assumptions behind the translation rule.
`;export{e as default};