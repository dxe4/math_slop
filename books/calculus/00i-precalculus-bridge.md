# A concise starting toolkit {#sec-calculus-bridge}

This book assumes no previous course, but it reaches calculus quickly. This
short chapter is a reference for the notation used in Chapter 1; algebra,
geometry, trigonometry, vectors, probability, and linear algebra are reviewed
again where they actually enter the subject. Skip any paragraph that is already
familiar.

## Numbers and arithmetic essentials {#sec-foundation-arithmetic}

The natural numbers are $1,2,3,\ldots$; the integers include $0$ and negatives;
rational numbers are fractions $a/b$ with $b\ne0$; the real numbers fill the
number line. Arithmetic combines or compares quantities. Parentheses decide
grouping, powers come before multiplication or division, and those operations
come before addition or subtraction.

Absolute value $|x|$ is distance from zero, so $|x-y|$ is the distance between
$x$ and $y$. Units are part of a quantity: adding $3$ metres to $4$ seconds is
meaningless, while dividing distance by time produces a rate.

<figure id="fig-primer-number-line">
<img src="figures/foundation-number-line.png" alt="A number line shows addition as rightward motion, subtraction as leftward motion, and absolute distance as an unsigned segment." style="width:88%">

<figcaption>

Figure 1: Arithmetic and distance are represented as directed motion on a number line.

</figcaption>
</figure>

## Fractions, ratios, and approximation {#sec-foundation-rationals}

A fraction $a/b$ requires $b\ne0$. To add fractions, create a common
denominator:

$$
\frac ab+\frac cd=\frac{ad+bc}{bd}.
$$

A ratio compares quantities, a percentage is a ratio out of $100$, and a rate
compares quantities with different units. A decimal may be exact or rounded;
use $=$ for equality and $\approx$ for approximation. Calculus frequently uses
smaller and smaller increments, so retaining enough precision matters.

## Algebra as reversible bookkeeping {#sec-foundation-algebra}

A variable names a quantity. An equation says two expressions have equal
value. Apply the same reversible operation to both sides, then substitute to
check. Factoring reverses expansion, for example
$x^2-1=(x-1)(x+1)$. An inequality records order; multiplying it by a negative
number reverses its direction. Denominators, even roots, and logarithms impose
domain restrictions. Chapters pause for the particular algebraic manipulation
they need rather than assuming a large memorized toolkit.

## Geometry and coordinates {#sec-foundation-geometry}

A point in the plane is $(x,y)$. The distance formula is

$$
\sqrt{(x_2-x_1)^2+(y_2-y_1)^2},
$$

and the slope of a nonvertical line is vertical change divided by horizontal
change. Area measures a two-dimensional region and volume a three-dimensional
one. Later chapters derive the formulas they integrate, so no catalogue of
shapes is required here.

## Functions and graphs {#sec-foundation-functions}

A function assigns one output to each allowed input. In $f(x)=x^2+1$, $x$ is
the input and $f(3)=10$. The domain is the allowed input set. A graph records
pairs $(x,f(x))$ and reveals increase, decrease, turning, and asymptotic
behavior. Composition means $(f\circ g)(x)=f(g(x))$. An inverse reverses a
function on a domain where distinct inputs have distinct outputs.

<figure id="fig-primer-functions">
<img src="figures/foundation-function-families.png" alt="Faceted plots compare linear, quadratic, absolute-value, reciprocal, and piecewise functions, including intercepts and a domain exclusion." style="width:91%">

<figcaption>

Figure 2: Several common function families show how formulas control graphical shape.

</figcaption>
</figure>

## Powers, logarithms, and trigonometric notation {#sec-foundation-transcendentals}

Powers abbreviate repeated multiplication. For $a>0$, $a\ne1$, the statement
$\log_a x=y$ means $a^y=x$. Exponentials model constant relative growth;
logarithms reverse them. On the unit circle the point at angle $\theta$ is
$(\cos\theta,\sin\theta)$. Angles in calculus are measured in radians because
that convention makes the derivative formulas natural. The identities needed
later are derived or recalled at first use.

## Statements and mathematical justification {#sec-foundation-proof}

“For every $x$” is disproved by one counterexample. “There exists an $x$” is
proved by one valid construction. The implication $P\Rightarrow Q$ is
equivalent to its contrapositive $\neg Q\Rightarrow\neg P$, not to its
converse. A definition fixes meaning; a theorem states a consequence under
hypotheses; a proof explains why it must hold.

Calculus uses both exact arguments and approximation. A graph can motivate a
claim, but it cannot show every point. A numerical answer is reliable only with
units, a stated method, and some control of error.

<figure id="fig-primer-logic">
<img src="figures/foundation-logic-table.png" alt="Truth table compares an implication, its converse, and its contrapositive across all four truth-value assignments." style="width:86%">

<figcaption>

Figure 3: A complete finite truth table separates implication from its converse.

</figcaption>
</figure>

## Sequences, sums, data, and finite computation {#sec-foundation-computation}

A sequence is an ordered list $a_1,a_2,\ldots$. Sigma notation abbreviates a
finite sum:

$$
\sum_{k=1}^{n}k=1+2+\cdots+n=\frac{n(n+1)}2.
$$

The loop is the left-hand formula written as a finite process. The right-hand
formula checks it.

```python
def triangular_sum(limit: int) -> int:
    """Return the finite sum from one through limit."""
    if limit < 0:
        raise ValueError("limit must be nonnegative")
    total = 0
    for term in range(1, limit + 1):
        total += term
    if total != limit * (limit + 1) // 2:
        raise RuntimeError("sum certificate failed")
    return total

print(triangular_sum(100))
```

An algorithm needs inputs, a finite stopping rule, an output, and explicit
failure conditions. Code can make a formula concrete without proving it for an
entire continuum.

## Continuing with calculus {#the-calculus-handoff}

Average velocity over a time increment $h$ is change in position divided by
change in time. For a function $f$, the same pattern is

$$
\frac{f(a+h)-f(a)}{h},\qquad h\ne0.
$$

The derivative asks what value this quotient approaches as $h$ approaches
zero. An integral accumulates many small signed contributions. The Fundamental
Theorem connects these two operations. The code below evaluates finite secant
slopes; Chapter 2 explains the limit and Chapter 3 proves derivative rules.

```python
def secant_slope(point: float, step: float) -> float:
    """Return the secant slope of f(x)=x**2 at one point and step."""
    if step == 0.0:
        raise ValueError("step must be nonzero")
    function = lambda x: x * x
    return (function(point + step) - function(point)) / step

for h in (1.0, 0.1, 0.01):
    print(h, secant_slope(3.0, h))
```

You are ready for Chapter 1 if you can substitute into a formula, read a graph,
and distinguish an exact equality from an approximation. All later tools are
introduced just in time.
