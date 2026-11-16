var e=`---
parent_id: book-functions-equations-proof
chapter_id: differential-equations
title: "Differential Equations"
level: undergraduate
estimated_minutes: 180
license: CC BY-SA 4.0
---

# Differential Equations

## Motivation: modeling continuous change

A differential equation relates a function to its derivatives. It is the continuous counterpart of a difference equation: where the latter steps forward in discrete time, the former evolves smoothly. Differential equations model motion under force, heat flow, population dynamics with overlapping generations, electrical circuits, and chemical reactions. This chapter focuses on linear ordinary differential equations with constant coefficients, the class most accessible to exact solution and most foundational for advanced study.

## First-order linear equations

**Definition 9.1 (First-order linear ODE).** An equation of the form

$$y'+p(x)y=q(x)$$

is a first-order linear ordinary differential equation. If $q(x)=0$, it is **homogeneous**.

**Theorem 9.2 (Integrating factor).** Let $p$ and $q$ be continuous on an interval $I$, and let $P$ be any antiderivative of $p$ on $I$. Then every solution on $I$ has the form

$$y(x)=e^{-P(x)}\\Bigl(\\int e^{P(x)}q(x)\\,dx+C\\Bigr).$$

**Proof.** Multiply the equation by $e^{P(x)}$:

$$e^{P(x)}y'+e^{P(x)}p(x)y=\\frac{d}{dx}\\bigl(e^{P(x)}y\\bigr)=e^{P(x)}q(x).$$

Integrate both sides and solve for $y$. ∎

**Example.** Solve $y'+2y=3$ with $y(0)=1$.

Here $p(x)=2$, so $P(x)=2x$ and $e^{P(x)}=e^{2x}$. The formula gives

$$y(x)=e^{-2x}\\Bigl(\\int 3e^{2x}\\,dx+C\\Bigr)=e^{-2x}\\Bigl(\\frac{3}{2}e^{2x}+C\\Bigr)=\\frac{3}{2}+Ce^{-2x}.$$

Using $y(0)=1$: $1=3/2+C$, so $C=-1/2$. Thus $y(x)=\\frac{3}{2}-\\frac{1}{2}e^{-2x}$.

Verification: $y'(x)=e^{-2x}$, and $y'+2y=e^{-2x}+3-e^{-2x}=3$. Also $y(0)=3/2-1/2=1$. ∎

## Second-order linear homogeneous equations

**Definition 9.3.** A second-order linear homogeneous ODE with constant coefficients has the form

$$y''+py'+qy=0,$$

where $p,q$ are constants.

**Method of characteristic roots.** Seek solutions $y=e^{rx}$. Substitution gives

$$r^{2}e^{rx}+pre^{rx}+qe^{rx}=0\\quad\\Longrightarrow\\quad r^{2}+pr+q=0.$$

**Theorem 9.4 (Distinct real roots).** If $r_{1}\\neq r_{2}$ are distinct real roots, the general solution is

$$y(x)=Ae^{r_{1}x}+Be^{r_{2}x}.$$

**Theorem 9.5 (Repeated real root).** If $r$ is a repeated root, the general solution is

$$y(x)=(A+Bx)e^{rx}.$$

**Theorem 9.6 (Complex conjugate roots).** If $r=\\alpha\\pm i\\beta$, the general real solution is

$$y(x)=e^{\\alpha x}(C\\cos(\\beta x)+D\\sin(\\beta x)).$$

The proofs mirror those for difference equations, with derivatives replacing discrete shifts.

**Example.** Solve $y''-5y'+6y=0$ with $y(0)=2$, $y'(0)=5$.

Characteristic equation: $r^{2}-5r+6=0$, roots $r=2,3$. General solution: $y(x)=Ae^{2x}+Be^{3x}$.

From $y(0)=A+B=2$ and $y'(0)=2A+3B=5$, we get $B=1$ and $A=1$. Thus $y(x)=e^{2x}+e^{3x}$.

Verification: $y''-5y'+6y=(4e^{2x}+9e^{3x})-5(2e^{2x}+3e^{3x})+6(e^{2x}+e^{3x})=(4-10+6)e^{2x}+(9-15+6)e^{3x}=0$. ∎

## Nonhomogeneous equations: undetermined coefficients

**Example.** Solve $y''-5y'+6y=e^{x}$.

Homogeneous solution: $y_{h}=Ae^{2x}+Be^{3x}$. Guess $y_{p}=Ce^{x}$. Substituting:

$$Ce^{x}-5Ce^{x}+6Ce^{x}=2Ce^{x}=e^{x},$$

so $C=1/2$. General solution: $y(x)=Ae^{2x}+Be^{3x}+\\frac{1}{2}e^{x}$. ∎

**Example.** Solve $y''-4y'+4y=e^{2x}$.

Characteristic equation: $r^{2}-4r+4=0$, repeated root $r=2$. Homogeneous solution: $y_{h}=(A+Bx)e^{2x}$.

Since $e^{2x}$ and $xe^{2x}$ both solve the homogeneous equation, guess $y_{p}=Cx^{2}e^{2x}$. Computing derivatives:

$$y_{p}'=C(2x+2x^{2})e^{2x},\\qquad y_{p}''=C(2+8x+4x^{2})e^{2x}.$$

Substituting:

$$C(2+8x+4x^{2})e^{2x}-4C(2x+2x^{2})e^{2x}+4Cx^{2}e^{2x}=C(2+8x+4x^{2}-8x-8x^{2}+4x^{2})e^{2x}=2Ce^{2x}.$$

We need $2C=1$, so $C=1/2$. General solution: $y(x)=(A+Bx)e^{2x}+\\frac{1}{2}x^{2}e^{2x}$. ∎

## Common errors and how to avoid them

**Error: Forgetting the homogeneous solution.** The general solution of a nonhomogeneous equation is $y=y_{h}+y_{p}$. Omitting $y_{h}$ discards infinitely many valid solutions.

**Error: Using the wrong guess for $y_{p}$ when resonance occurs.** If the forcing term matches a homogeneous solution, multiply by $x$ (or $x^{2}$ for repeated roots) until linear independence is achieved.

**Error: Confusing initial conditions with boundary conditions.** An initial value problem specifies $y$ and $y'$ at a single point; a boundary value problem specifies conditions at two points. The existence and uniqueness theory differs.

## Practice exercises

### Exercise 1
Solve $y'-3y=6$ with $y(0)=1$.

**Solution.** Using the integrating factor $e^{-3x}$: $y(x)=e^{3x}(\\int 6e^{-3x}\\,dx+C)=e^{3x}(-2e^{-3x}+C)=-2+Ce^{3x}$. From $y(0)=1$: $-2+C=1$, so $C=3$. Thus $y(x)=-2+3e^{3x}$. Verification: $y'(x)=9e^{3x}$, and $y'-3y=9e^{3x}-3(-2+3e^{3x})=9e^{3x}+6-9e^{3x}=6$. ∎

### Exercise 2
Solve $y''+4y=0$ with $y(0)=1$, $y'(0)=0$.

**Solution.** Characteristic equation: $r^{2}+4=0$, roots $r=\\pm 2i$. General solution: $y(x)=C\\cos(2x)+D\\sin(2x)$. From $y(0)=C=1$ and $y'(0)=2D=0$, we get $D=0$. Thus $y(x)=\\cos(2x)$. Verification: $y''=-4\\cos(2x)=-4y$. ∎

### Exercise 3
Solve $y''-2y'+y=0$ with $y(0)=1$, $y'(0)=2$.

**Solution.** Characteristic equation: $r^{2}-2r+1=0$, repeated root $r=1$. General solution: $y(x)=(A+Bx)e^{x}$. From $y(0)=A=1$ and $y'(0)=A+B=2$, we get $B=1$. Thus $y(x)=(1+x)e^{x}$. Here $y'=(2+x)e^x$ and $y''=(3+x)e^x$, so $y''-2y'+y=(3+x)e^{x}-2(2+x)e^{x}+(1+x)e^{x}=0$. ∎

### Exercise 4
Solve $y''+y=\\sin x$.

**Solution.** Homogeneous solution: $y_{h}=A\\cos x+B\\sin x$. Since $\\sin x$ solves the homogeneous equation, guess $y_{p}=Cx\\cos x+Dx\\sin x$. Computing and substituting (a lengthy but routine calculation) gives $C=-1/2$ and $D=0$. Thus $y_{p}=-\\frac{1}{2}x\\cos x$, and the general solution is $y(x)=A\\cos x+B\\sin x-\\frac{1}{2}x\\cos x$. ∎

### Exercise 5
Solve $y''-y=e^{x}$ with $y(0)=0$, $y'(0)=1/2$.

**Solution.** Characteristic equation: $r^{2}-1=0$, roots $r=\\pm 1$. Homogeneous solution: $y_{h}=Ae^{x}+Be^{-x}$. Since $e^{x}$ is a homogeneous solution, guess $y_{p}=Cxe^{x}$. Then $y_{p}'=C(1+x)e^{x}$ and $y_{p}''=C(2+x)e^{x}$. Substituting: $C(2+x)e^{x}-Cxe^{x}=2Ce^{x}=e^{x}$, so $C=1/2$. General solution: $y(x)=Ae^{x}+Be^{-x}+\\frac{1}{2}xe^{x}$.

From $y(0)=A+B=0$ and $y'(0)=A-B+1/2=1/2$, we get $A-B=0$, so $A=B=0$. Thus $y(x)=\\frac{1}{2}xe^{x}$. Verification: $y''-y=\\frac{1}{2}(2+x)e^{x}-\\frac{1}{2}xe^{x}=e^{x}$. ∎

## Looking forward and back

This chapter developed the classical theory of linear ordinary differential equations with constant coefficients. The structural parallels with **Difference Equations** are deep: both use characteristic equations, both handle repeated roots by introducing polynomial factors, and both require modified guesses when resonance occurs. In the next chapter, **Dynamical Systems**, we leave the sheltered world of exact solutions and study qualitative behavior---equilibria, stability, and phase portraits---for systems of differential equations that may not be solvable in closed form.
`;export{e as default};