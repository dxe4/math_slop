var e=`---
id: visual-lab-calculus-geometry
title: "Calculus Geometry: Tangents, Sums, and Accumulation"
level: undergraduate
estimated_minutes: 90
license: CC BY-SA 4.0
---

# Calculus Geometry: Tangents, Sums, and Accumulation

Calculus links local and global change. A secant slope approaches a derivative; a local linear model predicts nearby values; signed rectangle sums approach an integral; and an accumulation function has the original integrand as its derivative. This laboratory keeps those statements visible in four linked, accessible SVG views.

[Open the runnable laboratory](#/labs?lab=visual-lab-calculus-geometry)

Choose a function family and a base point. Change the secant width, integration endpoint, rectangle rule, and partition size with labeled controls or the documented keyboard commands. Every graph has a title and description, while exact formulas, approximations, absolute errors, and refinement ratios appear in tables for readers who do not use the graphics.

## From secant to tangent

For a differentiable function $f$, the secant slope from $a$ to $a+h$ is

$m_h = (f(a+h)-f(a))/h$.

When $m_h$ tends to a finite limit as $h\\to 0$, that limit is $f'(a)$. The tangent line is the local linear model

$L(x)=f(a)+f'(a)(x-a)$.

The phrase *local* matters: differentiability says the error is small compared with $|x-a|$ near $a$, not that the line predicts the function well over an arbitrary interval.

## From rectangles to an integral

Partition $[a,b]$ into $n$ equal pieces of width $\\Delta x$. Left, right, or midpoint samples give the signed sum

$S_n = \\sum f(x_i*)\\Delta x$.

For the smooth functions in the lab these sums converge to $\\int _a^b f(x)dx$. Rectangles below the axis contribute negatively. The refinement table compares the approximation with an exact antiderivative and shows how the error changes when $n$ doubles. A stable decimal is evidence about this computation, not a substitute for a convergence theorem.

## Accumulation and the Fundamental Theorem

Fix a starting point $a$ and define

$A(x)=\\int _a^x f(t)dt$.

If $f$ is continuous, the Fundamental Theorem of Calculus gives $A'(x)=f(x)$. The accumulation view draws $A$ and its tangent while reporting the tangent slope beside $f(x)$. Notice that $A$ may decrease where $f$ is negative even when the geometric area between the curve and axis is positive.

## Exercises with solutions

### 1. A quadratic secant

For $f(x)=x^{2}$, simplify the secant slope from $a$ to $a+h$ and find its limit.

**Solution.** $((a+h)^{2}-a^{2})/h=(2ah+h^{2})/h=2a+h$, so the limit is $2a=f'(a)$.

### 2. Signed accumulation

If $f(t)=-2$ on $[1,4]$, compute $A(4)=\\int _1^4 f(t)dt$.

**Solution.** The interval has width $3$, so the signed integral is $(-2)(3)=-6$. The unsigned geometric area would be $6$.

### 3. Midpoint exactness

Show that the one-panel midpoint rule is exact for $f(x)=mx+c$ on $[a,b]$.

**Solution.** The midpoint value is $m(a+b)/2+c$; multiplying by $b-a$ gives $(m/2)(b^{2}-a^{2})+c(b-a)$, exactly the antiderivative difference.

### 4. Reading a refinement table

An error changes from $0.04$ to $0.01$ when $n$ doubles. What empirical error ratio is visible?

**Solution.** The new error is one quarter of the old error. This is consistent with second-order convergence in this experiment, though two data points alone do not prove an asymptotic theorem.

## Error checklist

- A derivative is a limit, not merely one very narrow secant.
- A tangent is locally accurate; it is not necessarily a global approximation.
- Definite integrals are signed unless an absolute value or area instruction says otherwise.
- Left, right, and midpoint rules use different sample points even on the same partition.
- $A'(x)=f(x)$ requires the hypotheses of the Fundamental Theorem; discontinuities need separate care.
`;export{e as default};