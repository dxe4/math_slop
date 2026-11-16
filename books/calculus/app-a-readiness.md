# Appendix A — Readiness workshop {#sec-readiness}

Calculus magnifies small algebraic and geometric misunderstandings. This workshop is a compact diagnostic, not a substitute for a full precalculus course. Attempt the diagnostic first without a calculator. Use the review only for topics that slow you down, then return to the problems.

## Algebraic transformations

An equation permits the same reversible operation on both sides. An expression permits replacement by an equivalent expression on its domain. These are different acts: factoring $x^2-5x+6$ changes its form, while solving $x^2-5x+6=0$ produces $x=2,3$.

Factor before cancelling, and cancel factors rather than terms:
$$
\frac{x^2-4}{x^2-x-2}
=\frac{(x-2)(x+2)}{(x-2)(x+1)}
=\frac{x+2}{x+1},
$$
but the original domain still excludes $x=2$ and $x=-1$. Equivalent formulas can encode different domains if exclusions are forgotten.

Exponent rules include
$$
x^ax^b=x^{a+b},\quad (x^a)^b=x^{ab},\quad x^{-a}=\frac1{x^a},
$$
where real-valued domains must be respected. In particular, $\sqrt{x^2}=|x|$, and $x^{1/2}$ is not real for negative $x$.

To complete the square,
$$
x^2+bx=\left(x+\frac b2\right)^2-\frac{b^2}{4}.
$$
This reveals centers in conics, vertex form for quadratics, and substitutions in integrals.

Absolute value is distance from zero. The inequality $|x-a|<r$ means $a-r<x<a+r$, while $|x-a|>r$ describes two outer rays. Squaring an inequality is safe only after sign conditions are known.

## Coordinates and trigonometry

Distance in the plane follows from the Pythagorean theorem:
$$
d((x_1,y_1),(x_2,y_2))
=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}.
$$
Slope is rise divided by run where run is nonzero. Parallel nonvertical lines have equal slopes; perpendicular slopes multiply to $-1$ when both are finite.

The unit circle defines trigonometric functions: $(\cos\theta,\sin\theta)$ is the point reached after oriented angle $\theta$. Radians measure arc length on the unit circle, making
$$
180^\circ=\pi\text{ radians}.
$$
Calculus derivative formulas assume radians.

Core identities are
$$
\sin^2x+\cos^2x=1,
$$
$$
\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta,
$$
$$
\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta.
$$
Other identities should be derived or checked from these rather than trusted as isolated mnemonics.

## Exponentials, logarithms, and inverses

For $a>0$, $a\ne1$, the exponential $a^x$ is one-to-one with inverse $\log_a x$. Thus
$$
a^{\log_a x}=x\quad(x>0),\qquad
\log_a(a^x)=x.
$$
Logarithms obey
$$
\ln(xy)=\ln x+\ln y,
\quad
\ln(x^r)=r\ln x
$$
for positive arguments. There is no sum rule: $\ln(x+y)$ does not split.

To invert a function, first establish a one-to-one domain, write $y=f(x)$, solve for $x$, then interchange variable roles. Graphs of inverse functions reflect across $y=x$. Their domains and ranges swap.

## Diagnostic exercises

1. Simplify $(x^{-2}y^3)^2/(xy^{-1})$ and state nonzero restrictions.
2. Factor $2x^3-5x^2-3x$ completely.
3. Rationalize $(\sqrt{x+4}-2)/x$.
4. Solve $|2x-3|\le5$.
5. Complete the square in $x^2-6x+2$.
6. Find the line through $(2,-1)$ perpendicular to $3x-2y=7$.
7. Evaluate exact values of $\sin(5\pi/6)$, $\cos(5\pi/6)$, and $\tan(5\pi/6)$.
8. Solve $2^{x+1}=7$ exactly using logarithms.
9. Find the inverse of $f(x)=e^{2x-1}+3$ and state its range.
10. Find the domain of $g(x)=\ln(4-x^2)/\sqrt{x+1}$.
11. Rewrite $3\cos x-4\sin x$ in amplitude–phase form $R\cos(x-\phi)$.
12. A right triangle has legs $x$ and $2x+1$. Express its area and hypotenuse as functions of $x$ with physical domains.

## Answers

1. $y^7/x^5$, with $x\ne0$, $y\ne0$.
2. $x(2x+1)(x-3)$.
3. $1/(\sqrt{x+4}+2)$ for $x\ne0$; the simplified expression also has a value at zero.
4. $-1\le x\le4$.
5. $(x-3)^2-7$.
6. The given slope is $3/2$, so the perpendicular slope is $-2/3$: $y+1=-(2/3)(x-2)$.
7. $1/2$, $-\sqrt3/2$, and $-1/\sqrt3$.
8. $x=\ln7/\ln2-1$.
9. $f^{-1}(y)=[\ln(y-3)+1]/2$, with inverse domain $y>3$; original range $(3,\infty)$.
10. $(-1,2)$: the square-root denominator requires $x>-1$, and the logarithm requires $-2<x<2$.
11. $5\cos(x+\arctan(4/3))$ is one valid form.
12. $A=x(2x+1)/2$ and $c=\sqrt{x^2+(2x+1)^2}$ for $x>0$.

## Readiness decision

If problems 1–5 are slow, review algebra before limit calculations. If 6–7 and 11 are difficult, revisit coordinate geometry and the unit circle before derivative rules. If 8–10 are difficult, review inverse functions and logs before exponential models. Do not wait for perfect speed: keep a one-page error log and revisit mistakes after beginning [Chapter 1](01-functions-models.md).
