# A concise starting toolkit {#sec-nt-bridge}

This book assumes no previous course, but it does not make you read a miniature
school curriculum before reaching number theory. This short chapter is a
reference for the notation used immediately. Later chapters introduce less
familiar algebra, analysis, probability, and computation at the point where
they become useful. If an item below is already comfortable, move on.

## Numbers and arithmetic essentials {#sec-foundation-arithmetic}

The natural numbers are $1,2,3,\ldots$; the integers also include $0$ and the
negative numbers. Addition combines amounts, subtraction measures signed
change, multiplication repeats or scales, and division asks for a quotient and
possibly a remainder. For integers $a$ and positive $b$, there are unique
integers $q,r$ such that

$$
a=bq+r,\qquad 0\le r<b.
$$

For example, $37=5\cdot7+2$. Python's `divmod` returns exactly this pair.

```python
def quotient_remainder(number: int, divisor: int) -> tuple[int, int]:
    """Return q, r with number = divisor*q + r and 0 <= r < divisor."""
    if divisor <= 0:
        raise ValueError("divisor must be positive")
    quotient, remainder = divmod(number, divisor)
    if number != divisor * quotient + remainder:
        raise RuntimeError("division certificate failed")
    return quotient, remainder

print(quotient_remainder(37, 5))
```

Absolute value $|x|$ is distance from zero, so it is never negative. Powers
compress repeated multiplication: $a^4=a\cdot a\cdot a\cdot a$. Parentheses
settle order: evaluate grouped expressions, then powers, multiplication or
division, and finally addition or subtraction.

<figure id="fig-primer-number-line">
<img src="figures/foundation-number-line.png" alt="A number line shows addition as rightward motion, subtraction as leftward motion, and absolute distance as an unsigned segment." style="width:88%">

<figcaption>

Figure 1: Arithmetic and distance are represented as directed motion on a number line.

</figcaption>
</figure>

## Fractions, ratios, and signed quantities {#sec-foundation-rationals}

A fraction $a/b$ is a number only when $b\ne0$. Multiplying numerator and
denominator by the same nonzero integer does not change its value. To add,
create a common denominator:

$$
\frac ab+\frac cd=\frac{ad+bc}{bd}.
$$

A ratio compares quantities; a percentage is a ratio with denominator $100$.
Decimals may be exact, such as $0.125=1/8$, or rounded approximations. Keep an
equals sign for exact equality and use $\approx$ for approximation. In number
theory, exact integers and fractions normally carry more information than
floating-point decimals.

## Algebra as reversible bookkeeping {#sec-foundation-algebra}

A variable names a number whose value may be known, unknown, or allowed to
vary. An equation says two expressions have the same value. Applying the same
reversible operation to both sides preserves its solutions. Thus
$3x+5=20$ gives $3x=15$ and then $x=5$. Substitution checks the result.

Factoring reverses expansion. The identity

$$
(x+y)^2=x^2+2xy+y^2
$$

holds for every permitted $x,y$; an equation such as $(x+1)^2=9$ asks for
particular values. Always record restrictions introduced by denominators,
roots, or logarithms.

## Geometry and coordinates in one paragraph {#sec-foundation-geometry}

A point in the plane is an ordered pair $(x,y)$. Horizontal and vertical
changes are differences of coordinates. The Pythagorean theorem gives the
distance between $(x_1,y_1)$ and $(x_2,y_2)$ as

$$
\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}.
$$

Slope is vertical change divided by horizontal change when the denominator is
nonzero. These ideas return later for lattices, complex numbers, and geometry
of numbers; those chapters rebuild the extra geometry they need.

## Functions and graphs {#sec-foundation-functions}

A function assigns one output to each allowed input. In $f(x)=x^2+1$, the
symbol $x$ is the input and $f(3)=10$. The domain is the allowed input set; the
range is the set of outputs actually produced. A graph records pairs
$(x,f(x))$. Composition means feed one output into another function:
$(f\circ g)(x)=f(g(x))$. An inverse reverses a function only on a domain where
outputs identify inputs uniquely.

<figure id="fig-primer-functions">
<img src="figures/foundation-function-families.png" alt="Faceted plots compare linear, quadratic, absolute-value, reciprocal, and piecewise functions, including intercepts and a domain exclusion." style="width:91%">

<figcaption>

Figure 2: Several common function families show how formulas control graphical shape.

</figcaption>
</figure>

## Powers, logarithms, and trigonometric notation {#sec-foundation-transcendentals}

Exponent rules such as $a^{m+n}=a^ma^n$ summarize repeated multiplication.
For $a>0$ and $a\ne1$, $\log_a x=y$ means exactly $a^y=x$; a logarithm turns
multiplication into addition. Sine and cosine encode coordinates on a circle:
$(\cos\theta,\sin\theta)$. Number theory later uses logarithms to compare
growth and trigonometric functions to encode oscillation. Each use is reviewed
where it appears, so memorizing a formula table here is unnecessary.

## Statements, quantifiers, and proof {#sec-foundation-proof}

A theorem is a statement proved from definitions and earlier results. “For
every integer $n$” is universal; one counterexample disproves it. “There exists
an integer $n$” is existential; one valid example proves existence. The
implication $P\Rightarrow Q$ promises that whenever $P$ is true, $Q$ follows.
Its contrapositive $\neg Q\Rightarrow\neg P$ is equivalent; its converse need
not be.

Common proof patterns are direct calculation, cases, contradiction,
contrapositive, and induction. Induction proves a statement for a first integer
and then proves that truth at $n$ forces truth at $n+1$. A computation over a
finite range can prove a bounded claim, but it cannot by itself prove a
statement about every integer.

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
\sum_{k=1}^{n} k=1+2+\cdots+n=\frac{n(n+1)}2.
$$

The loop below is the left-hand formula written as a finite procedure. The
closed expression is an independent check, not a replacement for the induction
proof.

```python
def triangular_sum(limit: int) -> int:
    """Return 1 + 2 + ... + limit by following the sigma notation."""
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

An algorithm must state its inputs, stopping rule, output, and failure cases.
Code can expose a pattern or certify a finite calculation. Proof explains why a
formula works for all inputs covered by its hypotheses.

## Continuing with number theory {#the-number-theory-handoff}

Divisibility is the relation $a\mid b$, meaning $b=ak$ for some integer $k$.
Congruence records equal remainders:

$$
a\equiv b\pmod m \quad\Longleftrightarrow\quad m\mid(a-b).
$$

The greatest common divisor of $a$ and $b$ is the largest positive integer
dividing both. Euclid's algorithm repeatedly replaces $(a,b)$ by
$(b,a\bmod b)$ until the remainder is zero. Chapter 2 derives why this preserves
the gcd; the code here merely displays the exact finite rule.

```python
def euclidean_gcd(left: int, right: int) -> int:
    """Return the nonnegative greatest common divisor."""
    a, b = abs(left), abs(right)
    while b != 0:
        a, b = b, a % b
    return a

print(euclidean_gcd(252, 198))
```

You are ready for Chapter 1 if you can read $a\mid b$, distinguish an example
from a proof, substitute a value into a formula, and follow a finite loop. The
book supplies every later definition when it is first needed.
