
# Roots, Holes, and Asymptotes

**Before reading.** Read [Functions, Domains, and Graphs](../books/algebra-and-functions/functions-domain-graphs.md), [Polynomials and the Factor Theorem](../books/algebra-and-functions/polynomials-factor-theorem.md), [Expressions, Laws, and Factorising](../books/algebra-and-functions/expressions-laws-factorising.md) and [Rational Expressions](../books/algebra-and-functions/rational-expressions.md). These are preparation for the ideas used below.

A graph can meet the x-axis, miss a point, or race beyond every visible scale near a forbidden input. These behaviors have different algebraic causes. This deep dive builds an exact feature audit for polynomials, rational functions, absolute-value rules, and exponentials.

## 1. What a root actually says

A root or zero of $f$ is an allowed input $r$ for which $f(r)=0$. On a graph, $(r,0)$ is an x-intercept. The phrase “allowed input” matters: a cancelled denominator factor may make an expression look zero or finite at an excluded input, but an excluded input cannot be a root.

For a product, the zero-product principle makes roots visible:

$$p(x)=3(x+2)(x-1)^{2}$$

The roots are −2 and 1. The factor $(x-1)$ occurs twice, so 1 has multiplicity 2; −2 has multiplicity 1.

Multiplicity controls local sign. Write near a root $r$

$p(x)=(x-r)^{m} q(x)$, where $q(r)\ne 0$.

Close enough to $r$, $q$ keeps its sign. If $m$ is odd, $(x-r)^{m}$ changes sign and the graph crosses the axis. If $m$ is even, it keeps its sign and the graph touches and turns. Higher multiplicities look flatter because more derivatives vanish.

### Worked root audit

**Worked example.**

For $p(x)=-(x+3)^{2}(x-2)^{3}$:

- degree is 5;
- leading coefficient is negative;
- root −3 has multiplicity 2: touch, no sign change;
- root 2 has multiplicity 3: cross with flattening;
- odd degree and negative leading coefficient mean left end rises and right end falls.

The multiplicities total 5, accounting for every complex root as well here because all factors are already real linear factors.

## 2. Quadratic root transitions

In vertex form

$f(x)=a(x-h)^{2}+k$, with $a\ne 0$,

roots satisfy

$$(x-h)^{2}=-k/a$$

Three cases follow because a square is nonnegative:

- if $-k/a<0$, no real roots;
- if $-k/a=0$, one root $x=h$, of multiplicity 2;
- if $-k/a>0$, two roots $x=h\pm\sqrt{-k/a}$.

This is a geometric bifurcation. As $k$ moves the graph, two roots approach the vertex, merge into a double root, and disappear from the real line. They do not vanish algebraically over the complex numbers; they become a conjugate pair.

Example: $2(x-3)^{2}-8=0$ gives $(x-3)^{2}=4$, roots 1 and 5. Raising $k$ from −8 to 0 merges them at 3. Raising to 2 gives no real roots.

**Degenerate boundary:** if $a=0$, the rule is constant $f(x)=k$, not quadratic. If $k\ne 0$, it has no roots; if $k=0$, every real input is a root. A formula that divides by $a$ must separate this case first.

## 3. Absolute-value roots are distances, not square roots

For

$f(x)=a|x-h|+k$, with $a\ne 0$,

roots satisfy

$$|x-h|=-k/a$$

The right side is a **distance**. If it is negative, there are no roots. If it is zero, root $h$ occurs once at the corner. If it is positive $d$, roots are $h-d$ and $h+d$.

For $2|x-1|-6=0$, the distance is 3, so roots are −2 and 4. Using a square root here would be wrong: the parent rule is $|x|$, not $x^{2}$.

## 4. Begin rational analysis before cancellation

Consider

$$R(x)=(x^{2}-4)/(x^{2}-5x+6)$$

Factor numerator and denominator:

$$R(x)=(x-2)(x+2)/[(x-2)(x-3)]$$

The original domain excludes 2 and 3. Cancellation yields

$R(x)=(x+2)/(x-3)$ for $x\ne 2,3$.

At $x=2$, the cancelled factor leaves a finite missing limiting value:

$$(2+2)/(2-3)=-4$$

So $(2,-4)$ is a **hole** or removable discontinuity. At $x=3$, a denominator factor remains while the numerator tends to 5, so magnitudes grow without bound: $x=3$ is a **vertical asymptote**.

The only root is $x=-2$. Input 2 is excluded, even though it was a numerator zero before cancellation. This one example separates all three features.

### Classification algorithm

1. Factor numerator and denominator.
2. Record all original denominator roots as exclusions.
3. Cancel common factors only after recording them.
4. A cancelled exclusion is normally a hole; evaluate the reduced rule there to find its missing height.
5. A remaining denominator root with nonzero reduced numerator is a vertical asymptote.
6. Roots are zeros of the reduced numerator that lie in the original domain.

If numerator and denominator both remain zero after partial factoring, factor more or compare multiplicities. The difference in multiplicities determines whether a zero, hole, or asymptote remains.

## 5. One-sided behavior at vertical asymptotes

For $f(x)=2/(x-1)-3$, the vertical asymptote is $x=1$. As $x$ approaches 1 from the right, the small denominator is positive, so $2/(x-1)$ grows positive; from the left it grows negative. Thus

$f(x)\to +\infty\text{ as }x\to 1^{+}$, and $f(x)\to -\infty\text{ as }x\to 1^{-}$.

If the denominator factor is squared, as in $2/(x-1)^{2}$, both sides approach $+\infty$ because the denominator remains positive. Multiplicity affects asymptote orientation just as it affects root crossing.

An asymptote is not a value. Infinity is not a y-coordinate, and a vertical asymptote does not mean the graph contains a vertical segment.

## 6. Horizontal and polynomial asymptotes

For a rational function $p(x)/q(x)$, compare degrees or perform division.

### Lower numerator degree

$(2x+1)/(x^{2}+4)$ approaches 0 as $|x|$ grows because, after dividing top and bottom by $x^{2}$, the numerator terms approach 0 and the denominator approaches 1. Horizontal asymptote: $y=0$.

### Equal degrees

$(3x^{2}-1)/(2x^{2}+5x)$ approaches $3/2$, the ratio of leading coefficients. Horizontal asymptote: $y=3/2$.

### Numerator one degree higher

Division gives

$$(x^{2}+1)/(x-2)=x+2+5/(x-2)$$

The remainder term approaches 0, so the slant asymptote is $y=x+2$.

### Can a graph cross a horizontal asymptote?

Yes. For $f(x)=x/(x^{2}+1)$, the horizontal asymptote is $y=0$, and the graph crosses it at $x=0$. “Asymptote” describes limiting difference, not a forbidden barrier.

For $a/(x-h)+k$ with nonzero $a$, $x=h$ is vertical and $y=k$ horizontal. The root satisfies

$$a/(x-h)+k=0$$

If $k=0$, there is no root: the function approaches but never equals its horizontal asymptote. If $k\ne 0$, then $x=h-a/k$, automatically different from $h$ because $a\ne 0$.

### Zero-numerator boundary

If $a=0$, the written reciprocal-family rule $0/(x-h)+k$ still excludes $x=h$ before simplification. It equals $k$ elsewhere, producing a constant graph with a hole. There is no vertical asymptote because values do not become unbounded. This is a sharp test of whether we are analyzing the original domain or only the simplified appearance.

## 7. Exponential roots and horizontal asymptotes

For

$f(x)=a\cdot 2^{x-h}+k$, with $a\ne 0$,

the base-2 factor is always positive. Its horizontal asymptote is $y=k$ as $x\to -\infty$, because $2^{x-h}\to 0$.

A root requires

$$2^{x-h}=-k/a$$

The right side must be positive. When it is,

$$x=h+\log_{2}(-k/a)$$

There is exactly one root because the exponential is strictly increasing before a possible reflection by negative $a$ (which makes the entire rule strictly decreasing, still one-to-one).

Example: $3\cdot 2^{x-1}-12=0$ gives $2^{x-1}=4$, so $x-1=2$ and $x=3$. But $3\cdot 2^{x-1}+12$ has no root because it would require a positive power of 2 to equal −4.

If $a=0$, the rule is constant $k$; there is no distinct asymptote because the graph equals the horizontal line everywhere. Again, separate degenerate parameter values.

## 8. A reliable feature table

For any displayed function, produce:

| Feature | Question |
|---|---|
| Domain | Which inputs are allowed by the original rule and context? |
| Roots | Which allowed inputs give output zero? |
| Multiplicity | Does a polynomial factor repeat, and how often? |
| Holes | Which original exclusions cancel to a finite limit? |
| Vertical asymptotes | Where do magnitudes become unbounded? From which side and sign? |
| End behavior | What leading term or division quotient dominates? |
| Horizontal/polynomial asymptote | What does the function difference approach at infinity? |
| Range | Which outputs occur, and which are approached but omitted? |

Visual evidence suggests answers; algebra verifies them. A plotting window can hide distant roots, make a steep finite curve resemble an asymptote, or draw across a discontinuity. Use the table as the authoritative audit.

## 9. Sampling without drawing across a pole

```text
procedure sample_rational(p, q, x_values, tolerance):
    rows := empty list
    for x in x_values:
        denominator := q(x)
        if absolute_value(denominator) < tolerance:
            append (x, undefined) to rows
        else:
            append (x, p(x) / denominator) to rows
    return rows
```

For $n$ inputs, evaluation takes $n$ iterations. If polynomial evaluation uses Horner’s method, each degree-$d$ polynomial needs order $d$ arithmetic operations, so total work is order $nd$. A renderer should begin a new line segment after `undefined` or a large jump; otherwise it may falsely connect opposite branches across a pole. Numerical tolerance is a display choice, not a proof that a denominator root exists.

## Exercises

<a id="deep-dive-roots-asymptotes-ex-1"></a>

### Exercise 1

1. Find roots and multiplicities of $(x+1)^{4}(x-3)$ and describe local behavior.

<details>
<summary>Hint 1</summary>

Read each root directly from a factor equal to zero.
</details>

<details>
<summary>Hint 2</summary>

An even multiplicity touches the axis without changing sign; an odd one crosses.
</details>

<details>
<summary>Solution</summary>

Root −1 has multiplicity 4 and touches without changing sign; root 3 has multiplicity 1 and crosses.

</details>

<a id="deep-dive-roots-asymptotes-ex-2"></a>

### Exercise 2

2. Determine the real roots of $-2(x-4)^{2}+18$.

<details>
<summary>Hint 1</summary>

Set the quadratic expression equal to zero and isolate the squared term.
</details>

<details>
<summary>Hint 2</summary>

Taking square roots gives two signs; check both against the original expression.
</details>

<details>
<summary>Solution</summary>

Set equal to zero: $(x-4)^{2}=9$, so roots 1 and 7.

</details>

### Further exercises

3. Determine the roots of $-3|x+2|+12$.
4. Classify roots, holes, and vertical asymptotes of $(x^{2}-9)/(x^{2}-2x-3)$.
5. Find all asymptotes of $(2x^{2}+3)/(x-1)$.
6. Does $(x^{2}-1)/(x^{2}+1)$ cross its horizontal asymptote? Justify algebraically.
7. Find the root and asymptotes of $4/(x+2)-1$.
8. Find the root and horizontal asymptote of $-2\cdot 2^{x-3}+8$.
9. Describe the zero-multiplier boundary for $0/(x-5)+2$ as an original rational rule.
10. Explain why “denominator zero means vertical asymptote” is false, using an explicit counterexample.

## Solutions


3. $|x+2|=4$, so $x=-6$ or $x=2$.
4. Factor to $(x-3)(x+3)/[(x-3)(x+1)]$. Original exclusions 3,−1. Hole at $x=3$ with missing value $(3+3)/(3+1)=3/2$; vertical asymptote $x=-1$; root $x=-3$.
5. Divide: $(2x^{2}+3)/(x-1)=2x+2+5/(x-1)$. Vertical asymptote $x=1$; slant asymptote $y=2x+2$.
6. Equal degrees give horizontal asymptote $y=1$. Solving $(x^{2}-1)/(x^{2}+1)=1$ gives $-1=1$, impossible, so this graph does not cross it. Other rational graphs can.
7. Vertical $x=-2$, horizontal $y=-1$. Root solves $4/(x+2)=1$, hence $x=2$.
8. Horizontal asymptote $y=8$. Root solves $2^{x-3}=4$, so $x=5$.
9. The domain excludes 5. The value is 2 elsewhere, so the graph is the line $y=2$ with a hole at $(5,2)$; no vertical asymptote and no roots.
10. $(x^{2}-1)/(x-1)$ has denominator zero at 1, but cancellation yields $x+1$ on the original domain, so the limiting value is finite and the graph has a hole, not a vertical asymptote.

## Lab bridge

Open the function transformation observatory and recreate at least four solved examples. Move $k$ through the quadratic root transition, set the reciprocal multiplier to zero, and probe the excluded input numerically. For each state, predict the feature table before looking. The goal is not to trust a graph more; it is to make the graph and algebra interrogate each other.
