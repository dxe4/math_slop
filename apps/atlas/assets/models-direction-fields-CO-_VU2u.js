var e=`---
parent_id: book-ode-first-course
chapter_id: models-direction-fields
title: "Models and Direction Fields"
level: undergraduate
license: CC BY-SA 4.0
---

# Models and Direction Fields

A differential equation gives a rule for change. It can tell us how quickly a tank gains salt, how a temperature responds to its surroundings, or how an infection changes a population. The rule is usually easier to justify than an explicit formula for the future. Our task is to move carefully from that rule to a mathematical problem, and then distinguish a verified solution from a plausible picture.

Preparation is differentiation, integration, functions, and units from Calculus chapters 04–17. The main tools in this chapter are the chain rule and the fundamental theorem of calculus. Later chapters develop methods for finding solutions; here we first decide what a solution must mean.

## Equations, states, and intervals

**Definition 1.1 (Ordinary differential equation).** An ordinary differential equation, or ODE, relates an unknown function of one independent real variable to some of its derivatives. Its order is the highest derivative occurring in the equation. A first-order equation in explicit form is
\\[
 y'=f(t,y).
\\]
Here \\(t\\) is the independent variable, \\(y\\) is the state, and the prescribed function \\(f\\) is a rate law.

The word ordinary distinguishes one independent variable from the several independent variables of a partial differential equation. It does not mean that the equation is easy. Even a polynomial first-order rate law can have solutions that become unbounded in finite time.

**Definition 1.2 (Solution and initial-value problem).** Let \\(D\\) be an open subset of the time–state plane, and let \\(f:D\\to\\mathbb R\\). A solution on an open interval \\(I\\) is a continuously differentiable function \\(y:I\\to\\mathbb R\\) such that \\((t,y(t))\\in D\\) and \\(y'(t)=f(t,y(t))\\) for every \\(t\\in I\\). An initial-value problem adds a time \\(t_0\\in I\\) and a value \\(y(t_0)=y_0\\).

We use open intervals so every time in a solution domain has a two-sided derivative. A solution may also have a well-defined value at an endpoint; equations there can be interpreted by one-sided derivatives when stated explicitly. A physical experiment often uses only the forward part \\(t\\ge t_0\\) of a mathematical solution.

The interval is part of the answer. The expression \\(1/(1-t)\\) is not a solution through \\(t=0\\) on all real times, because it is undefined at \\(t=1\\). The intervals \\((-\\infty,1)\\) and \\((1,\\infty)\\) describe different connected pieces of its domain. Joining those pieces does not produce a trajectory passing through the missing time.

A parameter is a fixed number appearing in the rate law, such as a cooling coefficient. An initial value is the state specified at a particular time. Estimating a parameter from observations and selecting an initial value are different tasks, even when both numbers are uncertain.

**Definition 1.3 (Autonomous and linear).** An equation is autonomous when its explicit form is \\(y'=g(y)\\), with no separate time dependence. A first-order equation is linear when it can be written
\\[
 y'+p(t)y=q(t).
\\]
It is homogeneous linear when \\(q=0\\). The coefficients may depend on time. The term \\(y^2\\), a product \\(yy'\\), or a nonlinear function such as \\(\\sin y\\) prevents this linear form.

Thus \\(y'=t-y\\) is linear and nonautonomous; \\(y'=y(1-y)\\) is autonomous and nonlinear. These two classifications answer different questions. A linear homogeneous equation can still have nonconstant solutions and a nonzero initial value.

## Verification comes before interpretation

**Proposition 1.4 (Integral formulation).** If \\(f\\) is continuous on \\(D\\), then a continuously differentiable function \\(y\\), whose graph lies in \\(D\\), solves the initial-value problem on \\(I\\) if and only if
\\[
 y(t)=y_0+\\int_{t_0}^{t} f(s,y(s))\\,ds
 \\quad(t\\in I).
\\]

**Proof.** If \\(y'=f(t,y)\\), integrate its derivative from \\(t_0\\) to \\(t\\). The fundamental theorem of calculus gives the displayed identity. Conversely, if the identity holds and \\(y\\) is continuous, then \\(s\\mapsto f(s,y(s))\\) is continuous. The fundamental theorem makes the right side differentiable, with derivative \\(f(t,y(t))\\). At \\(t=t_0\\) the integral vanishes. Hence the equation and initial condition both hold. The same calculation works for \\(t<t_0\\) using the oriented integral. \\(\\square\\)

The converse actually starts with a continuous function and produces its continuous derivative. This observation will become the construction method in [Existence, Uniqueness, and Picard Iteration](existence-uniqueness-picard.md).

A candidate formula should pass three checks: it is defined on the proposed interval, substitution satisfies the differential equation throughout that interval, and substitution at the initial time gives the prescribed value. A successful check proves that the candidate is a solution. It does not yet prove that no other solution has the same initial data.

An equation not already in explicit form needs additional care. The relation \\((y')^2=y\\) permits either sign of the derivative when \\(y>0\\); replacing it by \\(y'=\\sqrt y\\) removes one branch. Likewise, dividing \\(2yy'=1\\) by \\(2y\\) requires \\(y\\ne0\\). In fact no differentiable solution of the original relation passes through \\(y=0\\), since substitution there would assert \\(0=1\\).

## Direction fields and their limits

At a point \\((t,y)\\), the explicit equation assigns the finite slope \\(f(t,y)\\). A direction field records these slopes using short line segments. Positive slopes point upward as time increases; negative slopes point downward. A zero slope marks an instantaneous horizontal tangent, not necessarily a constant solution.

For \\(y'=t-y\\), the slope is zero along \\(y=t\\), positive below that line, and negative above it. The curve \\(y=t\\) itself is not a solution: its derivative is 1 while the rate law on that curve is 0. A zero-slope locus, sometimes called a nullcline, describes where a trajectory is horizontal; it need not be a trajectory.

For an autonomous equation, every point on a horizontal line has the same slope. A constant function \\(y(t)=a\\) is a solution exactly when \\(g(a)=0\\). Such a state is called an equilibrium. [Phase Lines and Equilibria](phase-lines-equilibria.md) will turn this simple observation into rigorous long-term conclusions.

A finite field samples only finitely many rate values. It can suggest turning points, barriers, or attraction, but it cannot establish existence, uniqueness, or a bound for every initial value. Near a singularity, the slopes may become so large that a plot hides the distinction between a steep graph and an actual endpoint. A plotted curve can also cross a boundary where the model is no longer defined.

The time coordinate has a preferred direction. Reversing an arrow changes the differential equation unless time itself is reversed in the equation. A direction field for \\(y'=f(t,y)\\) does not allow vertical solution tangents at points where \\(f\\) is finite: a differentiable solution there has the assigned finite derivative.

## Worked example 1.1: a cooling experiment

A well-stirred object has temperature \\(T(t)\\), with constant ambient temperature \\(20\\) degrees Celsius. Suppose the rate of temperature change is proportional to the temperature difference:
\\[
 T'=-k(T-20),\\qquad k>0.
\\]
Time is measured in hours, so \\(k\\) has units of inverse hours. The minus sign means that an object above the ambient temperature cools, while one below it warms.

A proposed solution with initial temperature \\(80\\) is
\\[
 T(t)=20+60e^{-kt}.
\\]
Its derivative is \\(-60ke^{-kt}\\), which equals \\(-k(T-20)\\), and its initial value is \\(80\\). Thus it is a solution for every real \\(t\\). The physical experiment may still be restricted to \\(t\\ge0\\).

Suppose the measured temperature at two hours is \\(50\\). Then \\(30=60e^{-2k}\\), so \\(e^{-2k}=1/2\\) and \\(k=(\\log2)/2\\). At four hours the temperature is \\(20+60/4=35\\). It is the difference from ambient temperature that halves every two hours; the temperature itself does not halve.

The formula never reaches \\(20\\) at a finite time when the initial difference is nonzero, because an exponential is strictly positive. That mathematical conclusion depends on the constant ambient temperature and constant coefficient assumptions. Radiation, changing airflow, or a changing environment may require a different rate law.

## Worked example 1.2: a tank with changing volume

A tank initially contains \\(10\\) litres of well-mixed liquid and \\(4\\) grams of dissolved salt. Liquid enters at \\(3\\) litres per minute with concentration \\(2\\) grams per litre, and leaves at \\(2\\) litres per minute. Let \\(m(t)\\) be the salt amount in grams.

The volume balance is \\(V'=3-2=1\\), giving \\(V(t)=10+t\\) litres. The incoming salt rate is \\(3\\cdot2=6\\) grams per minute. Perfect mixing makes the outgoing concentration \\(m/(10+t)\\) grams per litre, so
\\[
 m'=6-\\frac{2m}{10+t},\\qquad m(0)=4.
\\]
Both right-hand terms have units of grams per minute. Replacing \\(m\\) by concentration without changing the derivative would be incorrect because the volume changes.

For \\(t>-10\\), consider
\\[
 m(t)=2(10+t)-\\frac{1600}{(10+t)^2}.
\\]
Its derivative is \\(2+3200/(10+t)^3\\). Substitution into the rate law gives
\\[
 6-\\frac{2}{10+t}
 \\left(2(10+t)-\\frac{1600}{(10+t)^2}\\right)
 =2+\\frac{3200}{(10+t)^3}.
\\]
The initial value is \\(20-16=4\\), so verification is complete.

For forward time the concentration is
\\[
 \\frac{m(t)}{V(t)}=2-\\frac{1600}{(10+t)^3},
\\]
which approaches the incoming concentration. The mathematical formula extends to some negative times, but eventually gives negative salt amounts. The forward physical domain also ends when the tank overflows unless its capacity is unlimited. Neither limitation is visible from the formula alone.

## Worked example 1.3: an endpoint hidden by an explicit formula

Consider \\(y'=y^2\\), \\(y(0)=2\\). The candidate
\\[
 y(t)=\\frac{2}{1-2t}
\\]
has derivative \\(4/(1-2t)^2=y(t)^2\\), and \\(y(0)=2\\). Its connected interval containing zero is \\((-\\infty,1/2)\\).

As \\(t\\) approaches \\(1/2\\) from below, \\(y(t)\\) tends to positive infinity. There is no finite value that makes the formula continuous there. Consequently this solution cannot extend through that endpoint as a real continuously differentiable solution. The algebraic expression also exists for \\(t>1/2\\), but that branch is not a continuation through the singular time.

The rate law itself is a polynomial defined on the whole plane. Therefore a smooth, everywhere-defined rate law does not guarantee solutions for all future time. Chapter 4 will separate local existence from global continuation.

## From a mechanism to a problem

A useful modeling statement names the state, its units, the time unit, the rate law, admissible states, and initial data. It also says which quantities are assumed constant. A population equation allowing negative values can remain a legitimate mathematical equation after its biological interpretation has ended.

A balance law often has the form “rate of accumulation equals rate in minus rate out.” The accumulated quantity must be the same on both sides. Amount and concentration, displacement and velocity, and energy and temperature should not be interchanged without a conversion law. If the future rate depends on velocity as well as position, then position alone is not a sufficient state; a later systems chapter will include both.

Fitting an equation to observations gives a candidate model. Verifying a formula proves it solves that model. Comparing the resulting prediction with fresh observations evaluates the model's usefulness. These are three separate kinds of evidence.

## Exercises

### Exercise 1.1 {#models-direction-fields-ex-1}

Classify \\(y'=t^2-3y\\) and \\(y''+yy'=0\\) by order and linearity. Which is autonomous?

<details><summary>Hint 1</summary>
Identify the highest derivative before examining the coefficients.
</details>
<details><summary>Hint 2</summary>
A linear equation has coefficients depending only on the independent variable.
</details>
<details><summary>Solution</summary>
The first equation is first-order, linear, and nonautonomous because \\(t^2\\) appears explicitly. The second is second-order and nonlinear because \\(y\\) multiplies \\(y'\\). It is autonomous because time does not occur explicitly. Order is independent of whether the equation can be solved by an elementary formula.
</details>

### Exercise 1.2 {#models-direction-fields-ex-2}

Verify \\(y(t)=3e^{-2t}+1\\) for \\(y'=-2y+2\\), \\(y(0)=4\\), and state its mathematical interval.

<details><summary>Hint 1</summary>
Differentiate the full expression, including its constant term.
</details>
<details><summary>Hint 2</summary>
Compare the derivative with the rate law after substitution.
</details>
<details><summary>Solution</summary>
The derivative is \\(-6e^{-2t}\\). The right side is \\(-2(3e^{-2t}+1)+2=-6e^{-2t}\\), and the initial value is \\(3+1=4\\). The expression and derivative exist for all real times, so it is a solution on \\(\\mathbb R\\).
</details>

### Exercise 1.3 {#models-direction-fields-ex-3}

For \\(y'=t-y\\), find the slopes at \\((0,1)\\), \\((1,0)\\), and \\((2,2)\\). Explain why \\(y=t\\) is not a solution.

<details><summary>Hint 1</summary>
Evaluate the same function \\(f(t,y)=t-y\\) at each point.
</details>
<details><summary>Hint 2</summary>
A curve's own derivative must equal the field value along it.
</details>
<details><summary>Solution</summary>
The slopes are \\(-1,1,0\\). Along the proposed curve \\(y=t\\), the field value is zero but the curve's derivative is one. A line of horizontal field segments is therefore not automatically a solution curve.
</details>

### Exercise 1.4 {#models-direction-fields-ex-4}

A temperature satisfies \\(T'=-0.3(T-18)\\), with time in minutes. Give the coefficient's units and the sign of \\(T'\\) when \\(T=30\\) and when \\(T=10\\).

<details><summary>Hint 1</summary>
The product on the right must have units of temperature per minute.
</details>
<details><summary>Hint 2</summary>
Use the signed difference from \\(18\\), not the temperature alone.
</details>
<details><summary>Solution</summary>
The coefficient is \\(0.3\\) per minute. At \\(30\\), the derivative is \\(-0.3(12)=-3.6\\) degrees per minute. At \\(10\\), it is \\(-0.3(-8)=2.4\\) degrees per minute. The same law describes cooling and warming.
</details>

### Exercise 1.5 {#models-direction-fields-ex-5}

A tank has constant volume \\(50\\) litres, inflow and outflow \\(5\\) litres per minute, and incoming concentration \\(3\\) grams per litre. Write an equation for salt amount \\(m\\).

<details><summary>Hint 1</summary>
Incoming amount per minute is flow times concentration.
</details>
<details><summary>Hint 2</summary>
The outgoing concentration is the current amount divided by volume.
</details>
<details><summary>Solution</summary>
The incoming rate is \\(15\\) grams per minute and outgoing rate is \\(5m/50=m/10\\). Thus \\(m'=15-m/10\\), with an initial condition to be supplied by the initial amount. The equilibrium amount is \\(150\\) grams, corresponding to concentration \\(3\\) grams per litre.
</details>

### Exercise 1.6 {#models-direction-fields-ex-6}

Verify \\(y(t)=\\tan t\\) for \\(y'=1+y^2\\), \\(y(0)=0\\), on the largest interval containing zero on which this formula is defined.

<details><summary>Hint 1</summary>
Use the identity \\(\\sec^2t=1+\\tan^2t\\).
</details>
<details><summary>Hint 2</summary>
Locate the nearest zeros of the denominator \\(\\cos t\\).
</details>
<details><summary>Solution</summary>
The derivative is \\(\\sec^2t=1+\\tan^2t\\), and \\(\\tan0=0\\). The nearest singular times are \\(-\\pi/2\\) and \\(\\pi/2\\), so the interval is \\((-\\pi/2,\\pi/2)\\). Other branches of tangent do not extend this solution through its infinite endpoints.
</details>

### Exercise 1.7 {#models-direction-fields-ex-7}

Find all constant solutions of \\(y'=y(y-2)(y+1)\\).

<details><summary>Hint 1</summary>
A constant function has derivative zero.
</details>
<details><summary>Hint 2</summary>
Set each factor of the rate equal to zero.
</details>
<details><summary>Solution</summary>
A constant value \\(a\\) must satisfy \\(a(a-2)(a+1)=0\\). Hence the constant solutions are \\(y=-1\\), \\(y=0\\), and \\(y=2\\). Direct substitution confirms each. No other constant value makes the derivative and right side agree.
</details>

### Exercise 1.8 {#models-direction-fields-ex-8}

Explain why no differentiable function satisfying \\(2yy'=1\\) can have \\(y(t_0)=0\\).

<details><summary>Hint 1</summary>
Use the original equation at the specified time.
</details>
<details><summary>Hint 2</summary>
Differentiability requires a finite derivative at \\(t_0\\).
</details>
<details><summary>Solution</summary>
At \\(t_0\\), the left side would be \\(2\\cdot0\\cdot y'(t_0)=0\\), while the right side is one. This contradiction excludes such a solution. Calling the slope infinite would not repair the contradiction because that would violate differentiability.
</details>

### Exercise 1.9 {#models-direction-fields-ex-9}

Rewrite \\(y'=-ty\\), \\(y(1)=2\\), as an integral equation, then verify \\(y(t)=2e^{(1-t^2)/2}\\).

<details><summary>Hint 1</summary>
The integral must begin at the initial time \\(1\\).
</details>
<details><summary>Hint 2</summary>
Differentiate the candidate using the chain rule.
</details>
<details><summary>Solution</summary>
The integral equation is \\(y(t)=2-\\int_1^t s\\,y(s)\\,ds\\). The candidate has derivative \\(-2te^{(1-t^2)/2}=-ty(t)\\), and its value at one is two. The integral formulation therefore follows from Proposition 1.4. The solution is defined for all real times.
</details>

### Exercise 1.10 {#models-direction-fields-ex-10}

An amount obeys \\(A'=kA\\) and doubles every three hours. Determine \\(k\\), its units, and the predicted ratio \\(A(9)/A(0)\\), assuming positive initial amount.

<details><summary>Hint 1</summary>
Verify that \\(A=A(0)e^{kt}\\) solves the equation.
</details>
<details><summary>Hint 2</summary>
A three-hour doubling means \\(e^{3k}=2\\).
</details>
<details><summary>Solution</summary>
Differentiating the exponential verifies the model solution. The observation gives \\(k=\\log2/3\\) per hour. At nine hours the ratio is \\(e^{9k}=2^3=8\\). This conclusion assumes the proportional-growth coefficient stays constant over the entire interval.
</details>

### Exercise 1.11 {#models-direction-fields-ex-11}

Why does a direction field that appears to show one curve through each sampled point fail to prove uniqueness for all initial values?

<details><summary>Hint 1</summary>
Compare a finite sample with the infinitely many points in a region.
</details>
<details><summary>Hint 2</summary>
Several curves can share a tangent or separate below the displayed resolution.
</details>
<details><summary>Solution</summary>
The plot checks only selected field values and numerical curves. It does not quantify over all initial points or all differentiable solutions. Curves may agree for a while and then separate, or a singular point may fall between samples. A uniqueness theorem needs hypotheses on the whole relevant region and an argument covering every candidate solution.
</details>

### Exercise 1.12 {#models-direction-fields-ex-12}

In a tank with inflow \\(2\\), outflow \\(3\\) litres per minute, initial volume \\(12\\) litres, and incoming concentration \\(c\\), derive the amount equation and the forward time boundary imposed by volume.

<details><summary>Hint 1</summary>
Compute volume before outgoing concentration.
</details>
<details><summary>Hint 2</summary>
The model requires strictly positive volume.
</details>
<details><summary>Solution</summary>
The volume is \\(V(t)=12-t\\). Perfect mixing gives \\(m'=2c-3m/(12-t)\\). The forward volume domain is \\(0\\le t<12\\); at twelve minutes the tank is empty and the displayed rate law is undefined. A physical model must stop or change there rather than continue by algebraic substitution.
</details>

## Sources

This chapter is original exposition. Primary textbook references for the standard solution, direction-field, and modelling conventions are Jiří Lebl's [Notes on Diffy Qs, first-order equations](https://www.jirka.org/diffyqs/) and Gerald Teschl's [Ordinary Differential Equations and Dynamical Systems, Chapter 1](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode). Local seed readings are the retained Calculus differential-equations preview, Quarto's Differential Equations and Dynamical Models, and the Atlas Functions and Equations chapter on differential equations; none is replaced by this chapter.

## Summary

A solution is a differentiable function on a specified interval whose graph stays inside the rate law's domain. Verification checks the equation and initial data, while a direction field offers qualitative guidance. Units, state choices, and physical boundaries belong to the problem before any formula is found. The next chapter develops separation and integrating factors as justified ways of constructing solutions.
`;export{e as default};