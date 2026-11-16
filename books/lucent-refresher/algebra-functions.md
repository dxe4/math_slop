# Algebra, functions, and domains

This is a linked reminder; use [Algebra and Functions](#/books/algebra-and-functions) for the full teaching sequence. Allow about five minutes to read, then 15–25 minutes for the four retained exercises and answer comparison. These are planning estimates; any book reading is extra. Study checkmarks do not grade your explanations.

## Expressions come with restrictions

Real denominators must be nonzero, square-root inputs nonnegative, and logarithm inputs positive. Cancellation retains the original exclusions:

(x² − 4)/(x − 2) = x + 2, provided x ≠ 2.

The simpler rule evaluated at two would define an extension, not a value of the original quotient. Also $\sqrt{x^2}=|x|$: at negative three it gives three. For developed explanations, use [Rational Expressions](../algebra-and-functions/rational-expressions.md) and [Surds and Indices](../algebra-and-functions/surds-indices.md).

## Equations and inequalities

Equation steps must be reversible to preserve the whole solution set. For $\sqrt{x+2}=x$, first require $x\ge0$. Squaring gives $x^2-x-2=0$, with candidates two and negative one; only two satisfies the original. See [Quadratic Equations](../algebra-and-functions/quadratic-equations.md) for the algebra and checking method.

Negative multiplication reverses inequality direction. For $(x-1)/(x+2)>0$, exclude negative two and compare signs on the intervals separated by negative two and one. The solution is $(-\infty,-2)\cup(1,\infty)$. For $r>0$, $|x-a|<r$ means $a-r<x<a+r$. Repair these methods in [Linear Equations, Inequalities, and Systems](../algebra-and-functions/linear-equations-inequalities-systems.md) and [Rational Expressions](../algebra-and-functions/rational-expressions.md).

## Functions and transformations

Each allowed input receives one output; different inputs can share an output. An inverse on the range requires one-to-one behaviour. Restricting the square function to $[0,\infty)$ gives the inverse square root. Composition applies the inner rule first and requires its output to belong to the outer domain. Thus $f(t)=1/t$ and $g(x)=x^2-1$ give $f(g(x))=1/(x^2-1)$ with $x\ne-1,1$.

Use [Composition and Inverses](../precalculus/composition-inverses.md) and [Transformations of Graphs](../precalculus/graph-transformations.md) for the full arguments. In the retained experiment, predict why the minimum of $(x-a)^2$ is zero at $x=a$ before moving the control.

```mathviz
scene "Translate a quadratic";
domain -4 4;
range -1 9;
param a = 0 from -2 to 2;
fn f(x) = (x-a)^2;
plot f color blue;
```

A curve leaving the window has not necessarily ended. Check apparent intersections algebraically.

## Exercises

1. Simplify (x² − 9)/(x² + x − 6), preserving the original domain.
2. Solve |x + 2| ≤ 3 and explain the answer as distances.
3. Find the domain of ln(4 − x²).
4. For f(x) = x² and g(x) = x + 1, calculate both compositions. Do they agree?

<details>
<summary>Hints and solutions</summary>

1. Factor both polynomials first: $(x-3)(x+3)/((x+3)(x-2))=(x-3)/(x-2)$, with $x\ne-3,2$. Both original exclusions remain, including negative three after cancellation.
2. A distance at most three from negative two means $-3\le x+2\le3$, hence $-5\le x\le1$. The interval is $[-5,1]$, including both boundary points.
3. A logarithm requires $4-x^2>0$, giving $(-2,2)$. The endpoints would give the undefined logarithm of zero.
4. Substitution gives $f(g(x))=(x+1)^2$ and $g(f(x))=x^2+1$, both on $\mathbb R$. Their difference is $2x$, so they agree only at zero and are not equal as functions on that domain.

</details>
