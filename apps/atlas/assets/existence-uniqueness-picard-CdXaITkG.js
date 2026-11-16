var e=`---
parent_id: book-ode-first-course
chapter_id: existence-uniqueness-picard
title: "Existence, Uniqueness, and Picard Iteration"
level: undergraduate
license: CC BY-SA 4.0
---

# Existence, Uniqueness, and Picard Iteration

An integrating factor proves existence by giving a formula and uniqueness by showing every solution has that formula. Most equations have no comparably useful closed form. We need an argument that constructs a solution from the rate law itself and explains exactly which assumptions prevent two trajectories from sharing the same initial point.

Read [Models and Direction Fields](models-direction-fields.md) and [Separable and Linear First-Order Equations](separable-linear-first-order.md). We use the exponential series, integral inequalities, and ordinary completeness of the real numbers. The necessary facts about limits of functions are proved below, rather than assumed from a separate analysis course.

## A bound on dependence on the state

**Definition 4.1 (Uniform Lipschitz condition in the state).** On a rectangle
\\[
 R=[t_0-a,t_0+a]\\times[y_0-b,y_0+b],\\qquad a,b>0,
\\]
a function \\(f\\) is Lipschitz in \\(y\\), uniformly in \\(t\\), if there is a finite \\(L\\ge0\\) such that
\\[
 |f(t,u)-f(t,v)|\\le L|u-v|
\\]
whenever both points lie in the rectangle.

A continuous partial derivative \\(f_y\\), bounded in magnitude by \\(L\\), supplies this condition by the one-variable mean-value theorem with time fixed. The derivative is a convenient sufficient condition, not the definition. For example, \\(f(t,y)=|y|\\) is Lipschitz with constant one although it is not differentiable in \\(y\\) at zero.

The word uniformly means one constant works at every allowed time and state. A derivative bound depending on the particular candidate solution is not the stated hypothesis. On a smaller compact rectangle, continuity of \\(f_y\\) gives a finite bound by the extreme-value theorem.

We also require a finite rate bound \\(|f|\\le M\\). Continuity on the compact rectangle supplies it. The rate bound controls how far an approximate solution can move in a short time; the Lipschitz bound controls how much two approximations can disagree.

## Two elementary limit facts

**Lemma 4.2 (Uniform limits and integrals).** Suppose continuous functions \\(u_n\\) on a closed finite interval \\(J\\) are uniformly Cauchy: for every \\(\\varepsilon>0\\), all sufficiently large \\(m,n\\) satisfy \\(|u_m(t)-u_n(t)|<\\varepsilon\\) for every \\(t\\in J\\). Then they converge uniformly to a continuous function \\(u\\). Moreover, uniform convergence of continuous functions permits passage of the limit through an integral on \\(J\\).

**Proof.** At each fixed \\(t\\), completeness of the real numbers gives a limit \\(u(t)\\). Letting \\(m\\to\\infty\\) in the uniform Cauchy estimate gives \\(|u_n(t)-u(t)|\\le\\varepsilon\\) for every \\(t\\), proving uniform convergence. To show continuity at \\(t_*\\), choose \\(n\\) with uniform error below \\(\\varepsilon/3\\). Continuity of this single \\(u_n\\) makes \\(|u_n(t)-u_n(t_*)|<\\varepsilon/3\\) when \\(t\\) is sufficiently close to \\(t_*\\). Adding the two approximation errors proves continuity of \\(u\\). Finally,
\\[
 \\left|\\int_\\alpha^\\beta (u_n-u)\\right|
 \\le |\\beta-\\alpha|\\sup_J|u_n-u|\\to0.
\\]
This proves the integral assertion. \\(\\square\\)

The uniform requirement matters because it chooses one approximation good at every time in the interval. Pointwise convergence alone does not give the same integral estimate.

## The local theorem and its full construction

**Theorem 4.3 (Picard existence and uniqueness).** Suppose \\(f\\) is continuous on \\(R\\), \\(|f|\\le M\\) there, and the Lipschitz condition of Definition 4.1 holds with constant \\(L\\). Choose \\(h>0\\) such that \\(h\\le a\\) and \\(Mh\\le b\\). Then the initial-value problem
\\[
 y'=f(t,y),\\qquad y(t_0)=y_0
\\]
has a solution on \\(J=[t_0-h,t_0+h]\\), with one-sided interpretation at the endpoints, whose graph stays in \\(R\\). It is the only such solution on \\(J\\).

**Proof: construction and containment.** Start with \\(u_0(t)=y_0\\), and define
\\[
 u_{n+1}(t)=y_0+\\int_{t_0}^{t}f(s,u_n(s))\\,ds.
\\]
Inductively, continuity makes \\(u_{n+1}\\) continuous, and the rate bound gives \\(|u_{n+1}(t)-y_0|\\le M|t-t_0|\\le b\\). Thus every iterate stays in the rectangle and every evaluation of \\(f\\) is legitimate.

**Proof: a convergent difference bound.** We claim
\\[
 |u_{n+1}(t)-u_n(t)|
 \\le \\frac{ML^n|t-t_0|^{n+1}}{(n+1)!}.
\\]
For \\(n=0\\) this is the rate bound. If it holds at \\(n-1\\), the Lipschitz inequality inside the defining integral gives
\\[
 |u_{n+1}(t)-u_n(t)|
 \\le L\\int_{\\min(t,t_0)}^{\\max(t,t_0)}
 \\frac{ML^{n-1}|s-t_0|^n}{n!}\\,ds,
\\]
which is the claimed expression. This also covers \\(L=0\\): from the second difference onward all differences vanish.

The sum of the upper bounds, uniformly for \\(t\\in J\\), is
\\[
 \\sum_{n=0}^{\\infty}\\frac{ML^nh^{n+1}}{(n+1)!},
\\]
a convergent exponential-type series. For \\(m>n\\), telescoping bounds \\(|u_m-u_n|\\) by its tail, which tends to zero independently of \\(t\\). Lemma 4.2 therefore gives a continuous uniform limit \\(u\\). The closed state bounds pass to the limit.

**Proof: the limit solves the equation.** The Lipschitz condition gives
\\[
 \\sup_J|f(t,u_n(t))-f(t,u(t))|
 \\le L\\sup_J|u_n-u|\\to0.
\\]
Passing to the integral limit yields
\\(u(t)=y_0+\\int_{t_0}^t f(s,u(s))ds\\).
The integral formulation from Chapter 1 makes \\(u\\) continuously differentiable and proves the equation and initial value.

**Proof: uniqueness.** If \\(u,v\\) are two solutions staying in the rectangle, let \\(D=\\sup_J|u-v|\\), which is finite. Their integral equations first give
\\[
 |u(t)-v(t)|\\le L\\int_{\\min(t,t_0)}^{\\max(t,t_0)}|u(s)-v(s)|ds.
\\]
Repeated substitution, starting from the bound \\(D\\), gives
\\[
 |u(t)-v(t)|\\le D\\frac{(L|t-t_0|)^n}{n!}
\\]
for every positive integer \\(n\\). The right side tends to zero because the exponential series converges. Thus \\(u=v\\). \\(\\square\\)

Notice that this proof does not require \\(Lh<1\\). That restriction belongs to a simpler contraction estimate; the factorial estimate proves convergence on any rectangle-sized interval satisfying \\(Mh\\le b\\).

For a rate law continuous and locally Lipschitz in the state on an open domain, small rectangles around every interior point give this local result. Two solutions with the same initial data agree throughout their common connected interval: they agree near the initial point, and any first boundary of their agreement inside the common interval is another shared initial point where local uniqueness extends agreement.

## Worked example 4.1: constructing the exponential

Take \\(y'=1+y\\), \\(y(0)=0\\). Beginning with \\(u_0=0\\), Picard iteration gives
\\[
 u_1=t,\\qquad u_2=t+t^2/2,\\qquad
 u_3=t+t^2/2+t^3/6.
\\]
Induction gives \\(u_n=\\sum_{k=1}^n t^k/k!\\). The limit is \\(e^t-1\\), uniformly on every bounded interval.

At \\(t=1/2\\), the third iterate is \\(1/2+1/8+1/48=31/48\\). The omitted tail is positive. For \\(k\\ge4\\), successive terms \\(t^k/k!\\) have ratio at most \\(1/10\\) at this time, so the tail is at most
\\[
 \\frac{(1/2)^4}{4!}\\frac1{1-1/10}=\\frac5{1728}.
\\]
This is a mathematical error bound for exact iterates, not an assertion about floating-point rounding.

A computed iteration and the existence proof are related but different. The proof constructs a function on an interval. A numerical table samples a finite list of approximate values, and its arithmetic errors need their own analysis.

## Quantified dependence on initial data

**Lemma 4.4 (Integral growth bound).** Suppose a continuous nonnegative function \\(d\\) on \\([0,T]\\) satisfies
\\[
 d(t)\\le A+L\\int_0^t d(s)ds,\\qquad A,L\\ge0.
\\]
Then \\(d(t)\\le Ae^{Lt}\\).

**Proof.** Define \\(v(t)=A+L\\int_0^t d(s)ds\\). Then \\(d\\le v\\), \\(v(0)=A\\), and \\(v'=Ld\\le Lv\\). Hence \\((e^{-Lt}v)'\\le0\\), so \\(v(t)\\le Ae^{Lt}\\). This includes \\(A=0\\) and \\(L=0\\). \\(\\square\\)

For two solutions of the same rate law staying in a common Lipschitz region, subtracting their integral equations gives
\\[
 |u(t)-v(t)|\\le |u(t_0)-v(t_0)|e^{L(t-t_0)}
 \\quad(t\\ge t_0).
\\]
The corresponding backward estimate uses \\(|t-t_0|\\). This is a finite-time sensitivity bound. It does not say nearby initial values remain close for arbitrarily long times with a single time-independent tolerance.

## Worked example 4.2: a local guarantee and a global failure

For \\(y'=y^2\\), \\(y(0)=1\\), choose \\(|t|\\le1\\) and \\(|y-1|\\le1\\). On this rectangle, \\(0\\le y\\le2\\), so \\(M=4\\). Also
\\[
 |u^2-v^2|=|u-v||u+v|\\le4|u-v|,
\\]
so \\(L=4\\). Taking \\(h=1/4\\) gives \\(Mh=1\\), and Theorem 4.3 guarantees a unique solution on that interval.

Separation gives the exact solution \\(y=1/(1-t)\\) on \\((-\\infty,1)\\). The theorem's interval is sufficient, not maximal. Reapplying local existence extends the solution further, but no sequence of applications creates a finite value at its blow-up time one. Smooth coefficients guarantee local solvability; they do not prevent the state from escaping every bounded set.

The first Picard iterates are \\(u_0=1\\), \\(u_1=1+t\\), and \\(u_2=1+t+t^2+t^3/3\\). They need not be the Taylor polynomials of the exact solution. Picard iteration integrates a substituted previous function, which is a different operation from truncating a known power series.

## Continuation and the meaning of a maximal interval

**Definition 4.5 (Extension and maximal solution).** A solution extends another if it is defined on a larger interval and agrees with it on the original interval. A maximal solution has no such proper extension within the specified time–state domain.

**Proposition 4.6 (Finite endpoint with a finite interior limit).** Suppose \\(f\\) is continuous and locally Lipschitz in the state on an open domain \\(D\\). Let \\(y\\) be a solution up to a finite forward endpoint \\(T\\). If \\(y(t)\\to\\ell\\) as \\(t\\uparrow T\\), and \\((T,\\ell)\\in D\\), the solution extends through \\(T\\).

**Proof.** Set \\(y(T)=\\ell\\). Near \\((T,\\ell)\\), continuity of \\(f\\) and the integral equation show that this endpoint extension has the appropriate left derivative \\(f(T,\\ell)\\). The local theorem constructs a solution through \\((T,\\ell)\\) on both sides of \\(T\\). Uniqueness makes it agree with the existing solution on their overlap to the left. Joining them therefore gives one continuously differentiable solution through \\(T\\). \\(\\square\\)

If the graph near a finite endpoint stays in a compact rectangle lying inside \\(D\\), the rate is bounded there. Then
\\(|y(t)-y(s)|\\le M|t-s|\\), so the values are Cauchy as times approach \\(T\\) and have a finite limit. The proposition applies. Thus a finite maximal endpoint must involve escape from every such interior compact bound: the state may become unbounded, or the graph may approach a boundary where the rate law ceases to apply. It is not always correct to call both situations blow-up.

## Worked example 4.3: continuity is not uniqueness

The equation \\(y'=2\\sqrt{\\max(y,0)}\\) has a continuous rate law on the whole plane. For every \\(a\\ge0\\), define
\\[
 y_a(t)=
 \\begin{cases}
 0,&t\\le a,\\\\
 (t-a)^2,&t\\ge a.
 \\end{cases}
\\]
The two derivatives at \\(a\\) both equal zero, so the function is continuously differentiable. Before \\(a\\), both sides of the equation vanish; after \\(a\\), its derivative \\(2(t-a)\\) equals twice its square root. All these functions satisfy \\(y_a(0)=0\\), as does the identically zero solution.

There is no finite Lipschitz constant near zero: the quotient
\\[
 \\frac{|2\\sqrt u-0|}{|u-0|}=\\frac2{\\sqrt u}
\\]
is unbounded as \\(u\\downarrow0\\). The local theorem is therefore inapplicable at the initial point. The example disproves the claim that continuity alone gives uniqueness; it does not disprove existence.

## Exercises

### Exercise 4.1 {#existence-uniqueness-picard-ex-1}

Give a Lipschitz constant for \\(f(t,y)=t^2+3y\\) on any rectangle.

<details><summary>Hint 1</summary>
Compare two values at the same time.
</details>
<details><summary>Hint 2</summary>
The time term cancels exactly.
</details>
<details><summary>Solution</summary>
We have \\(|f(t,u)-f(t,v)|=3|u-v|\\). Thus \\(L=3\\) works independently of the rectangle. No estimate for \\(t^2\\) is needed for this difference, although a separate bound on the whole rate is needed for rectangle containment.
</details>

### Exercise 4.2 {#existence-uniqueness-picard-ex-2}

For \\(y'=t+y^2\\), \\(y(0)=0\\), use \\(|t|\\le1\\), \\(|y|\\le1\\) to give \\(M,L\\), and a valid \\(h\\).

<details><summary>Hint 1</summary>
Bound the sum by absolute values.
</details>
<details><summary>Hint 2</summary>
Use \\(|u^2-v^2|\\le2|u-v|\\) on this state interval.
</details>
<details><summary>Solution</summary>
The rate satisfies \\(|t+y^2|\\le2\\), so \\(M=2\\). The difference bound gives \\(L=2\\). We may choose \\(h=1/2\\), since \\(h\\le1\\) and \\(Mh=1\\). The theorem supplies a unique rectangle-contained solution on this interval without requiring an explicit formula.
</details>

### Exercise 4.3 {#existence-uniqueness-picard-ex-3}

Find \\(u_0,u_1,u_2,u_3\\) for \\(y'=y\\), \\(y(0)=1\\).

<details><summary>Hint 1</summary>
Start from the constant initial function.
</details>
<details><summary>Hint 2</summary>
At each step integrate the entire previous polynomial.
</details>
<details><summary>Solution</summary>
The successive functions are \\(u_0=1\\), \\(u_1=1+t\\), \\(u_2=1+t+t^2/2\\), and \\(u_3=1+t+t^2/2+t^3/6\\). Their limit is the exponential series \\(e^t\\), which satisfies the initial-value problem.
</details>

### Exercise 4.4 {#existence-uniqueness-picard-ex-4}

Why is \\(|y|\\) Lipschitz although its derivative fails to exist at zero?

<details><summary>Hint 1</summary>
Use the triangle inequality twice.
</details>
<details><summary>Hint 2</summary>
Derive the reverse triangle inequality.
</details>
<details><summary>Solution</summary>
From \\(|u|\\le|u-v|+|v|\\) and its reversed version, we obtain \\(||u|-|v||\\le|u-v|\\). Thus \\(L=1\\). The derivative criterion is sufficient but not necessary for a Lipschitz condition, so nondifferentiability at zero does not obstruct the theorem.
</details>

### Exercise 4.5 {#existence-uniqueness-picard-ex-5}

Two solutions in a common \\(L=2\\) region start \\(0.01\\) apart. What bound follows at time \\(0.5\\) after the initial time?

<details><summary>Hint 1</summary>
Apply the initial-data estimate with elapsed time.
</details>
<details><summary>Hint 2</summary>
An upper bound is not an exact prediction of the difference.
</details>
<details><summary>Solution</summary>
The difference is at most \\(0.01e^{2(0.5)}=0.01e\\), approximately \\(0.0272\\). This conclusion is conditional on both solutions staying in the same Lipschitz region over the interval. The actual difference may be smaller.
</details>

### Exercise 4.6 {#existence-uniqueness-picard-ex-6}

Verify the waiting-time solution for \\(y'=2\\sqrt{\\max(y,0)}\\) at its joining time \\(a\\).

<details><summary>Hint 1</summary>
Compute the difference quotient at the join from each side.
</details>
<details><summary>Hint 2</summary>
The right-side quotient is \\(h^2/h=h\\).
</details>
<details><summary>Solution</summary>
For a negative increment the function is zero, giving quotient zero. For a positive increment the quotient is \\(h\\), which tends to zero. Thus the derivative at the join is zero. The piecewise derivative is zero on the left and \\(2(t-a)\\) on the right, so it is continuous there and equals the zero rate at the joining state.
</details>

### Exercise 4.7 {#existence-uniqueness-picard-ex-7}

Solve \\(y'=y^2\\), \\(y(0)=2\\), and use it to distinguish a smooth rate law from global existence.

<details><summary>Hint 1</summary>
The reciprocal has constant derivative.
</details>
<details><summary>Hint 2</summary>
Find the first positive denominator zero.
</details>
<details><summary>Solution</summary>
The solution is \\(y=2/(1-2t)\\), on \\((-\\infty,1/2)\\). It tends to infinity at \\(1/2\\) and cannot extend finitely through that time. The rate \\(y^2\\) is smooth everywhere, so this is a counterexample to any claim that smoothness alone ensures all-time existence.
</details>

### Exercise 4.8 {#existence-uniqueness-picard-ex-8}

Suppose \\(|f(t,y)|\\le5\\) everywhere and \\(f\\) is continuous and locally Lipschitz in \\(y\\) on the whole plane. Explain why a solution cannot have a finite maximal endpoint.

<details><summary>Hint 1</summary>
Bound how far the state can travel before a fixed finite time.
</details>
<details><summary>Hint 2</summary>
Use the rate bound to obtain a limit at the endpoint.
</details>
<details><summary>Solution</summary>
For finite times, \\(|y(t)-y(t_0)|\\le5|t-t_0|\\), so the state stays bounded. Also \\(|y(t)-y(s)|\\le5|t-s|\\), giving a finite Cauchy limit at any finite endpoint. The endpoint lies in the whole-plane domain, and Proposition 4.6 extends the solution, contradicting maximality. Both forward and backward endpoints must therefore be infinite.
</details>

### Exercise 4.9 {#existence-uniqueness-picard-ex-9}

Prove that two unique solutions of the same scalar equation cannot meet and then separate within a shared interval.

<details><summary>Hint 1</summary>
Treat a meeting point as new initial data.
</details>
<details><summary>Hint 2</summary>
Local uniqueness applies in both time directions around an interior point.
</details>
<details><summary>Solution</summary>
At a meeting time the two functions share the same time and state. Local uniqueness makes them agree on a neighborhood. If agreement ended elsewhere inside their common connected interval, continuity would give another meeting point at that boundary and local uniqueness would extend agreement. Hence they agree throughout the common interval.
</details>

### Exercise 4.10 {#existence-uniqueness-picard-ex-10}

For \\(y'=1/(1-t)\\), \\(y(0)=0\\), find the solution and explain why the obstruction at \\(t=1\\) differs from an everywhere-defined polynomial rate law.

<details><summary>Hint 1</summary>
Integrate on the coefficient interval containing zero.
</details>
<details><summary>Hint 2</summary>
The time–state domain itself excludes \\(t=1\\).
</details>
<details><summary>Solution</summary>
The solution is \\(y=-\\log(1-t)\\) on \\((-\\infty,1)\\). It tends to infinity at one, but additionally the rate law is undefined on the whole line \\(t=1\\). The continuation theorem cannot apply at that time because no endpoint state there lies in the domain.
</details>

### Exercise 4.11 {#existence-uniqueness-picard-ex-11}

If \\(d(t)\\le3+4\\int_0^t d(s)ds\\) for continuous nonnegative \\(d\\), prove \\(d(t)\\le3e^{4t}\\).

<details><summary>Hint 1</summary>
Name the right side \\(v(t)\\).
</details>
<details><summary>Hint 2</summary>
Differentiate \\(e^{-4t}v(t)\\).
</details>
<details><summary>Solution</summary>
Set \\(v=3+4\\int_0^t d\\). Then \\(d\\le v\\), \\(v'=4d\\le4v\\), and \\(v(0)=3\\). Thus \\((e^{-4t}v)'\\le0\\), so \\(v\\le3e^{4t}\\) and therefore \\(d\\le3e^{4t}\\). Every differentiation is valid because \\(d\\) is continuous.
</details>

### Exercise 4.12 {#existence-uniqueness-picard-ex-12}

In the Picard proof, why is uniform convergence sufficient to pass through \\(f\\) and then the integral? Name the bound at each step.

<details><summary>Hint 1</summary>
The Lipschitz constant converts state error into rate error.
</details>
<details><summary>Hint 2</summary>
Integration adds at most the interval length times the largest rate error.
</details>
<details><summary>Solution</summary>
The rate error is at most \\(L\\sup_J|u_n-u|\\), which tends to zero. The integral error from \\(t_0\\) to any \\(t\\in J\\) is at most \\(hL\\sup_J|u_n-u|\\), so it also tends uniformly to zero. The argument uses one bound for all times; pointwise convergence alone would not supply it.
</details>

## Sources

Original exposition. The standard theorem and its successive-approximation proof are documented in Jiří Lebl's author-hosted [Basic Analysis, Picard's theorem](https://www.jirka.org/ra/html/sec_picard.html) and Gerald Teschl's [Ordinary Differential Equations and Dynamical Systems, Chapter 2](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode). Local read-only seeds include Quarto real analysis's ODE chapter, Lucent's contractions and Picard lesson, and Atlas Models, Well-Posedness, and Continuation. The proof here supplies the needed function-limit facts at first-course level.

## Summary

Continuity and a uniform state-Lipschitz bound give a local solution and prevent competing solutions from sharing initial data. Picard iteration constructs the solution with a factorial error mechanism; an integral growth bound quantifies finite-time sensitivity. Continuation requires the trajectory to remain inside the rate law's domain with finite state control. The next chapter uses these facts to justify phase-line pictures and long-term scalar behavior.
`;export{e as default};