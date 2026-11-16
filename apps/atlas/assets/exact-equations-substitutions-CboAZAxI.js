var e=`---
parent_id: book-ode-first-course
chapter_id: exact-equations-substitutions
title: "Exact Equations and Substitutions"
level: undergraduate
license: CC BY-SA 4.0
---

# Exact Equations and Substitutions

A useful change of variables exposes a derivative that was present but difficult to see. An exact equation hides the derivative of a function of two variables. A Bernoulli equation hides a linear equation in a power of the state. A ratio substitution hides a separable equation in the slope \\(y/x\\). In every case we must specify where the change of variables can be reversed.

The preparation is [Separable and Linear First-Order Equations](separable-linear-first-order.md). We introduce the small amount of partial differentiation needed for exact equations. For a function \\(\\Phi(x,y)\\), the partial derivative \\(\\Phi_x\\) differentiates with respect to \\(x\\) while holding \\(y\\) fixed, and \\(\\Phi_y\\) does the reverse.

## Exact differentials on a rectangle

Consider an equation written as
\\[
 M(x,y)+N(x,y)y'=0,
\\]
often abbreviated \\(M\\,dx+N\\,dy=0\\). The independent variable is now called \\(x\\). This is an undivided equation; rewriting it as \\(y'=-M/N\\) requires \\(N\\ne0\\).

**Definition 3.1 (Exact equation).** On a region \\(R\\), the differential expression is exact if there is a continuously differentiable potential \\(\\Phi\\) with \\(\\Phi_x=M\\) and \\(\\Phi_y=N\\). Along a differentiable graph, the chain rule then says
\\[
 \\frac d{dx}\\Phi(x,y(x))=M(x,y(x))+N(x,y(x))y'(x).
\\]
Consequently a graph solves the equation precisely when its potential is constant.

This statement concerns differentiable graphs already defined on an interval. A level set \\(\\Phi=C\\) may have several components, self-intersections, or vertical tangents. Exactness does not say the entire level set is one function of \\(x\\).

**Theorem 3.2 (Rectangle criterion).** Let \\(R=(a,b)\\times(c,d)\\) be an open rectangle. Suppose \\(M,N\\) have continuous first partial derivatives on \\(R\\). Then the expression is exact on \\(R\\) if and only if
\\[
 M_y=N_x
\\]
throughout \\(R\\).

**Proof of sufficiency.** Choose \\((x_0,y_0)\\in R\\) and put
\\[
 \\Phi(x,y)=\\int_{x_0}^{x}M(s,y)\\,ds+
                 \\int_{y_0}^{y}N(x_0,v)\\,dv.
\\]
The first partial derivative is \\(\\Phi_x=M(x,y)\\). For the other derivative,
\\[
 \\Phi_y=\\int_{x_0}^{x}M_y(s,y)\\,ds+N(x_0,y)
       =\\int_{x_0}^{x}N_x(s,y)\\,ds+N(x_0,y)=N(x,y).
\\]
To justify differentiation inside the first integral, write the difference quotient of \\(M(s,y)\\) as the average of \\(M_y(s,v)\\) between \\(y\\) and \\(y+h\\), by the one-variable fundamental theorem. Continuity of \\(M_y\\) makes those averages converge uniformly in \\(s\\) on the compact integration segment: continuity on a surrounding compact rectangle is uniform. The integral of the difference from \\(M_y(s,y)\\) is at most the segment length times that uniform difference, which tends to zero. This proves the required differentiation rule. \\(\\square\\)

**Proof of necessity.** An exact potential has continuous second partial derivatives because its first partials \\(M,N\\) are continuously differentiable. Here is the relevant equality of mixed partials. Form the rectangular increment
\\[
 Q=\\Phi(x+h,y+k)-\\Phi(x+h,y)-\\Phi(x,y+k)+\\Phi(x,y).
\\]
Applying the one-variable fundamental theorem twice expresses \\(Q\\) as the integral of \\(\\Phi_{xy}\\) over that small rectangle, and reversing the order of the two increments expresses it as the integral of \\(\\Phi_{yx}\\). Equivalently, successive one-variable mean-value theorems express \\(Q/(hk)\\) as a value of each mixed derivative at points approaching \\((x,y)\\). Continuity and \\(h,k\\to0\\) give \\(\\Phi_{xy}(x,y)=\\Phi_{yx}(x,y)\\). Thus \\(M_y=N_x\\). \\(\\square\\)

The rectangle hypothesis is substantive. On the punctured plane, take
\\[
 M=-\\frac y{x^2+y^2},\\qquad N=\\frac x{x^2+y^2}.
\\]
Their indicated partial derivatives agree, but no single potential exists on the whole punctured plane. Along the unit circle \\((x,y)=(\\cos t,\\sin t)\\), the chain rule for a potential would give derivative
\\[
 M(-\\sin t)+N(\\cos t)=1.
\\]
After one full circuit the potential would have increased by \\(2\\pi\\), despite returning to the same point. A single-valued function cannot do that. The local criterion needs a suitable domain; our rectangle version supplies one without any topology prerequisite.

## Worked example 3.1: recovering a potential

Solve
\\[
 (2xy+3)+ (x^2+2y)y'=0,\\qquad y(0)=1.
\\]
We have \\(M_y=2x=N_x\\) on the whole plane, so the equation is exact. Integrating \\(M\\) with respect to \\(x\\) gives
\\[
 \\Phi(x,y)=x^2y+3x+g(y).
\\]
Its \\(y\\)-partial is \\(x^2+g'(y)\\). Matching \\(N\\) gives \\(g'(y)=2y\\), so choose \\(g(y)=y^2\\). The initial value makes the constant one:
\\[
 x^2y+3x+y^2=1.
\\]

Solving the quadratic for \\(y\\) gives
\\[
 y(x)=\\frac{-x^2+\\sqrt{x^4-12x+4}}2
\\]
on the branch through \\((0,1)\\), at least for \\(x\\) sufficiently close to zero. The radicand equals four at zero and is continuous, so it stays positive on some surrounding interval. The other sign gives initial value \\(-1\\), not the required value.

On this local branch \\(x^2+2y=\\sqrt{x^4-12x+4}\\ne0\\). Differentiating the level relation therefore recovers the explicit derivative and the original equation. The implicit relation is more informative than a prematurely global square-root formula: a turning point where \\(N=0\\) requires fresh analysis.

## Integrating factors for differential forms

Sometimes multiplying an expression by a nonzero function makes it exact. This is the two-variable version of the linear integrating factor.

**Definition 3.3 (Integrating factor).** A nonvanishing continuously differentiable function \\(\\mu\\) is an integrating factor on a region if \\(\\mu M\\,dx+\\mu N\\,dy\\) is exact there. Since \\(\\mu\\) never vanishes, the multiplied and original graph equations have exactly the same solutions on that region.

**Proposition 3.4 (Factors depending on one variable).** Let \\(M,N\\) have continuous first partial derivatives on a rectangle. Where \\(N\\ne0\\), suppose
\\[
 \\frac{M_y-N_x}{N}=r(x)
\\]
depends only on \\(x\\), with continuous \\(r\\). Then \\(\\mu(x)=\\exp(\\int r(x)\\,dx)\\) is an integrating factor. Similarly, where \\(M\\ne0\\), a ratio
\\[
 \\frac{N_x-M_y}{M}=s(y)
\\]
depending only on \\(y\\) gives \\(\\mu(y)=\\exp(\\int s(y)\\,dy)\\).

**Proof.** In the first case,
\\[
 (\\mu M)_y=\\mu M_y,\\qquad
 (\\mu N)_x=\\mu'N+\\mu N_x.
\\]
These are equal exactly when \\(\\mu'/\\mu=(M_y-N_x)/N\\). Our choice satisfies this identity and is nonzero, so Theorem 3.2 applies. Interchanging the variable roles proves the second case. \\(\\square\\)

Failure of these particular ratio tests does not prove there is no integrating factor; it only rules out the proposed one-variable construction under those divisions. A factor that vanishes can create spurious solutions of the multiplied equation, so nonvanishing belongs in the definition.

## Worked example 3.2: an integrating factor with a domain

Consider
\\[
 y\\,dx+2x\\,dy=0
\\]
on \\(x>0\\). Here \\(M=y\\), \\(N=2x\\), and
\\[
 \\frac{M_y-N_x}{N}=-\\frac1{2x}.
\\]
Thus choose \\(\\mu=x^{-1/2}\\). After multiplication,
\\[
 \\frac y{\\sqrt x}\\,dx+2\\sqrt x\\,dy=0
\\]
has potential \\(\\Phi=2y\\sqrt x\\). Its level relation yields \\(y=C/\\sqrt x\\), after absorbing the factor two into the constant.

Direct differentiation gives \\(y'=-C/(2x^{3/2})\\), so \\(y+2xy'=0\\). This includes \\(y=0\\) when \\(C=0\\). The original equation is also defined at \\(x=0\\), but the chosen factor is not. Only the zero member extends finitely through zero among these branches, and the extension must be checked in the original equation.

Alternatively the original equation is separable on \\(x>0\\). Different methods expose the same structure. Exactness is useful when the separation is less obvious or when an implicit potential has a clearer interpretation.

## Substitutions with reversible domains

A substitution is justified by differentiating it and checking its inverse. It is not enough to transform a symbol and solve a new equation whose solutions no longer correspond to the old state.

**Proposition 3.5 (Bernoulli substitution).** Let \\(n\\ne1\\) be real, and consider
\\[
 y'+p(x)y=q(x)y^n
\\]
on an interval where \\(y>0\\). Put \\(v=y^{1-n}\\). Then
\\[
 v'+(1-n)p(x)v=(1-n)q(x).
\\]
Conversely, a positive solution \\(v\\) of this linear equation gives the positive solution \\(y=v^{1/(1-n)}\\).

**Proof.** Differentiate \\(v\\): \\(v'=(1-n)y^{-n}y'\\). Multiplying the Bernoulli equation by \\((1-n)y^{-n}\\) gives the linear equation. The positive power maps are differentiable inverses on \\((0,\\infty)\\), so reversing the calculation proves the converse. \\(\\square\\)

Restricting to positive states permits arbitrary real powers without ambiguous negative bases. For particular integer exponents, negative branches may also be treated on intervals avoiding zero, but the inverse and its sign must be chosen explicitly. A zero solution, when the original power is defined and makes it valid, is not covered by the division. When \\(n=1\\), the original equation is already linear and the stated substitution collapses to the constant one.

**Worked example 3.3: Bernoulli and a positive branch.** Solve \\(y'+y=y^2\\), \\(y(0)=1/2\\), on the positive branch. Put \\(v=1/y\\). The transformed equation is \\(v'-v=-1\\), so \\(v=1+Ce^x\\). The initial value gives \\(v(0)=2\\), hence \\(C=1\\) and
\\[
 y(x)=\\frac1{1+e^x}.
\\]
The denominator is positive for all real \\(x\\). Its derivative is \\(-e^x/(1+e^x)^2\\), which equals \\(y^2-y\\), and its initial value is correct. The original equation also has equilibria zero and one; the transformed initial-value problem selects neither. If the transformed formula for a different initial value crossed zero, the inverse \\(1/v\\) would end there.

Another useful family is
\\[
 y'=F(y/x),\\qquad x\\ne0.
\\]
Put \\(v=y/x\\), so \\(y=xv\\) and \\(y'=v+xv'\\). The equation becomes
\\[
 xv'=F(v)-v.
\\]
On \\(x>0\\) or \\(x<0\\), this is separable wherever \\(F(v)-v\\ne0\\). First record every constant \\(v=a\\) with \\(F(a)=a\\): it gives the straight-line solution \\(y=ax\\). The word homogeneous is often used for this ratio form. It is a different meaning from homogeneous linear equation and should not be used as a substitute for an actual classification.

For example, \\(y'=1+y/x\\) gives \\(xv'=1\\), hence \\(v=\\log|x|+C\\) and \\(y=x(\\log|x|+C)\\), on either nonzero time half-line. The restriction \\(x\\ne0\\) belongs to the original rate law, not just to the substitution.

## A potential curve can outlive its graph description

An exact equation describes a level curve, while the notation \\(y'\\) describes a graph over the independent variable. These descriptions need not have the same global domain. Consider \\(x\\,dx+y\\,dy=0\\), whose potential is \\((x^2+y^2)/2\\). Through \\((0,1)\\), the level curve is the unit circle. Its upper graph is \\(y=\\sqrt{1-x^2}\\) on \\((-1,1)\\), and differentiation verifies \\(y'=-x/y\\) there. At the two endpoints the geometric circle continues smoothly as a parametrized curve, but the graph derivative becomes unbounded and that graph cannot be extended as a differentiable solution across either endpoint.

This does not mean that exactness or the implicit relation failed. The coefficient of \\(dy\\) vanished at the endpoint, so solving the differential relation for a finite graph slope was no longer legal. Reversing the roles of the coordinates gives a valid local graph there instead. Thus a complete implicit answer should identify which portions of the level set are graphs, where the chosen independent variable remains valid, and which initial point selects the desired branch. A level curve may be regular even when one chosen graph chart fails.

## Exercises

### Exercise 3.1 {#exact-equations-substitutions-ex-1}

Find a potential for \\((2x+y)\\,dx+(x+2y)\\,dy=0\\).

<details><summary>Hint 1</summary>
Check the two indicated partial derivatives.
</details>
<details><summary>Hint 2</summary>
Integrate \\(2x+y\\) in \\(x\\), retaining an unknown function of \\(y\\).
</details>
<details><summary>Solution</summary>
Both cross partials are one. Integration gives \\(\\Phi=x^2+xy+g(y)\\), and matching \\(\\Phi_y=x+g'(y)=x+2y\\) gives \\(g=y^2\\). Thus every differentiable graph on a level \\(x^2+xy+y^2=C\\) solves the equation. The whole level set need not be a single graph.
</details>

### Exercise 3.2 {#exact-equations-substitutions-ex-2}

Solve \\(2x+2yy'=0\\), \\(y(0)=2\\), as a local graph.

<details><summary>Hint 1</summary>
The potential is the sum of two squares.
</details>
<details><summary>Hint 2</summary>
Choose the square-root sign using the initial value.
</details>
<details><summary>Solution</summary>
The potential is \\(x^2+y^2\\), with constant four. The branch is \\(y=\\sqrt{4-x^2}\\) on \\((-2,2)\\). Its derivative is \\(-x/\\sqrt{4-x^2}\\), so \\(2x+2yy'=0\\). At the endpoints its derivative is not finite; the full circle does not define one differentiable graph over \\(x\\).
</details>

### Exercise 3.3 {#exact-equations-substitutions-ex-3}

Is \\(y^2\\,dx+x\\,dy=0\\) exact on the whole plane?

<details><summary>Hint 1</summary>
Compute \\(M_y\\) and \\(N_x\\).
</details>
<details><summary>Hint 2</summary>
Equality on a single line is weaker than equality throughout an open region.
</details>
<details><summary>Solution</summary>
Here \\(M_y=2y\\) and \\(N_x=1\\). They agree only on \\(y=1/2\\), so the expression is not exact on the whole plane or any open rectangle. This does not say it has no solutions or that an integrating factor is impossible.
</details>

### Exercise 3.4 {#exact-equations-substitutions-ex-4}

Find an integrating factor depending only on \\(x\\) for \\(y\\,dx+3x\\,dy=0\\), \\(x>0\\), and solve it.

<details><summary>Hint 1</summary>
Evaluate \\((M_y-N_x)/N\\).
</details>
<details><summary>Hint 2</summary>
The potential after multiplication can be a constant multiple of \\(yx^{1/3}\\).
</details>
<details><summary>Solution</summary>
The ratio is \\(-2/(3x)\\), so \\(\\mu=x^{-2/3}\\). A potential is \\(3yx^{1/3}\\), since its partials are \\(yx^{-2/3}\\) and \\(3x^{1/3}\\). Therefore \\(y=Cx^{-1/3}\\) on \\(x>0\\). Direct differentiation verifies the original equation, including its zero solution.
</details>

### Exercise 3.5 {#exact-equations-substitutions-ex-5}

Use \\(v=1/y\\) to solve \\(y'-2y=-y^2\\), \\(y(0)=1\\), on the positive branch.

<details><summary>Hint 1</summary>
Multiplication by \\(-y^{-2}\\) gives a linear equation.
</details>
<details><summary>Hint 2</summary>
The transformed equation is \\(v'+2v=1\\).
</details>
<details><summary>Solution</summary>
The linear solution is \\(v=1/2+Ce^{-2x}\\). Since \\(v(0)=1\\), \\(C=1/2\\). Thus \\(y=2/(1+e^{-2x})\\), positive for all real \\(x\\). The chain-rule equivalence proves the equation, and substitution gives initial value one.
</details>

### Exercise 3.6 {#exact-equations-substitutions-ex-6}

For \\(y'+y=y^{1/2}\\), explain the positive-state substitution and solve with \\(y(0)=4\\) while its inverse remains positive.

<details><summary>Hint 1</summary>
Set \\(v=\\sqrt y>0\\).
</details>
<details><summary>Hint 2</summary>
Solve \\(v'+v/2=1/2\\) with \\(v(0)=2\\).
</details>
<details><summary>Solution</summary>
The transformed solution is \\(v=1+e^{-x/2}\\), which stays positive on all real \\(x\\). Hence \\(y=(1+e^{-x/2})^2\\). Since \\(\\sqrt y=v\\) on this branch, reversing the substitution verifies the equation. Squaring an arbitrary negative transformed branch would not preserve that equality.
</details>

### Exercise 3.7 {#exact-equations-substitutions-ex-7}

Solve \\(y'=2y/x\\), \\(y(1)=3\\), by \\(v=y/x\\), with \\(x>0\\).

<details><summary>Hint 1</summary>
Substitution gives \\(v+xv'=2v\\).
</details>
<details><summary>Hint 2</summary>
Solve \\(xv'=v\\), remembering \\(v=0\\).
</details>
<details><summary>Solution</summary>
For nonzero \\(v\\), separation gives \\(v=Cx\\) on \\(x>0\\), and the zero solution is also included by \\(C=0\\). Thus \\(y=Cx^2\\). Initial value \\(y(1)=3\\) gives \\(y=3x^2\\), and \\(y'=6x=2y/x\\). The original explicit equation excludes zero time.
</details>

### Exercise 3.8 {#exact-equations-substitutions-ex-8}

Find every straight-line solution \\(y=ax\\) of \\(y'=1+(y/x)^2\\) on \\(x>0\\).

<details><summary>Hint 1</summary>
A constant ratio \\(v=a\\) must satisfy \\(F(a)=a\\).
</details>
<details><summary>Hint 2</summary>
Examine the discriminant of \\(a^2-a+1=0\\).
</details>
<details><summary>Solution</summary>
Substitution requires \\(a=1+a^2\\), or \\(a^2-a+1=0\\). Its discriminant is \\(-3\\), so there are no real straight-line solutions of this form. Ratio substitution remains useful for other solutions; it simply has no constant-ratio branches to record here.
</details>

### Exercise 3.9 {#exact-equations-substitutions-ex-9}

Why is multiplying \\(y'=1\\) by \\(y\\) potentially dangerous when claiming equivalent solution sets?

<details><summary>Hint 1</summary>
Compare \\(y'=1\\) with \\(yy'=y\\).
</details>
<details><summary>Hint 2</summary>
Test the constant zero function in both equations.
</details>
<details><summary>Solution</summary>
Every solution of the first equation satisfies the multiplied equation, but \\(y=0\\) also satisfies \\(yy'=y\\), while it does not satisfy \\(y'=1\\). The factor vanishes on this spurious solution. Equivalence requires restricting to a region where the multiplier is nonzero.
</details>

### Exercise 3.10 {#exact-equations-substitutions-ex-10}

Find a potential for \\(e^y\\,dx+(xe^y+2y)\\,dy=0\\), and impose \\(y(0)=1\\).

<details><summary>Hint 1</summary>
Integrate \\(e^y\\) with respect to \\(x\\).
</details>
<details><summary>Hint 2</summary>
The remaining function has derivative \\(2y\\).
</details>
<details><summary>Solution</summary>
A potential is \\(\\Phi=xe^y+y^2\\). Its partials match both coefficients. The initial point gives constant one, so the implicit solution relation is \\(xe^y+y^2=1\\). Any differentiable local graph on this relation through \\((0,1)\\) solves the equation; at that point \\(N=2\\ne0\\), so the explicit derivative is finite.
</details>

### Exercise 3.11 {#exact-equations-substitutions-ex-11}

Derive the \\(y\\)-only integrating-factor criterion rather than memorising its sign.

<details><summary>Hint 1</summary>
Write \\((\\mu M)_y=(\\mu N)_x\\) with \\(\\mu=\\mu(y)\\).
</details>
<details><summary>Hint 2</summary>
The derivative \\(\\mu'\\) occurs on the left this time.
</details>
<details><summary>Solution</summary>
Exactness requires \\(\\mu'M+\\mu M_y=\\mu N_x\\). Where \\(M\\ne0\\), divide by \\(\\mu M\\) to get \\(\\mu'/\\mu=(N_x-M_y)/M\\). If this quotient depends only on \\(y\\), integrating it and exponentiating gives a nonvanishing factor. The numerator has the opposite sign from the \\(x\\)-only criterion because the differentiated product is on the opposite side.
</details>

### Exercise 3.12 {#exact-equations-substitutions-ex-12}

For the punctured-plane expression in the text, compute its change along a full unit-circle circuit and explain the obstruction to a global potential.

<details><summary>Hint 1</summary>
Use \\(x=\\cos t\\), \\(y=\\sin t\\), \\(0\\le t\\le2\\pi\\).
</details>
<details><summary>Hint 2</summary>
Integrate \\(Mx'+Ny'\\) along that parameter.
</details>
<details><summary>Solution</summary>
On the circle \\(M=-\\sin t\\), \\(N=\\cos t\\), \\(x'=-\\sin t\\), and \\(y'=\\cos t\\), so \\(Mx'+Ny'=1\\). Its integral is \\(2\\pi\\). A global potential would make the same integral equal its endpoint difference, which is zero because the endpoints coincide. This contradiction proves the obstruction despite equality of the cross partials.
</details>

## Sources

This chapter is original. Primary references for the standard methods are Jiří Lebl's [Notes on Diffy Qs, Sections 1.5 and 1.8](https://www.jirka.org/diffyqs/html/diffyqs.html) and Gerald Teschl's [Ordinary Differential Equations and Dynamical Systems, explicit first-order methods](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode). The rectangle construction, branch restrictions, and solutions above are developed in full here.

## Summary

Exactness turns a differential equation into constancy of a potential, with the domain playing a real role in the criterion. Nonvanishing integrating factors preserve solution sets. Bernoulli and ratio substitutions reveal linear or separable equations on explicitly reversible domains. The next chapter proves why well-behaved rate laws produce local solutions, even when no useful substitution exists.
`;export{e as default};