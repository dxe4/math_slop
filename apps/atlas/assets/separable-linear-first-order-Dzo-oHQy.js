var e=`---
parent_id: book-ode-first-course
chapter_id: separable-linear-first-order
title: "Separable and Linear First-Order Equations"
level: undergraduate
license: CC BY-SA 4.0
---

# Separable and Linear First-Order Equations

Two useful first-order families can be solved by turning differentiation into an exact derivative that we know how to integrate. Separation uses the chain rule. A linear equation uses the product rule. Neither method is a permission to cancel quantities that might be zero, ignore a coefficient's singularity, or choose a convenient branch after imposing the initial condition.

Read [Models and Direction Fields](models-direction-fields.md) first. We use ordinary antiderivatives, the fundamental theorem of calculus, logarithms, and elementary substitutions from the calculus preparation. Unless stated otherwise, all functions and solutions in this chapter are real.

## Separation without losing solutions

**Definition 2.1 (Separable equation).** A first-order equation is separable on a region when it has the form
\\[
 y'=g(t)h(y).
\\]
The factors depend on separate variables. An equilibrium \\(y=a\\) occurs whenever \\(h(a)=0\\); additional constant solutions can occur if the time factor is identically zero.

A useful procedure begins by listing the zeros of \\(h\\), before any division. Then choose an interval \\(J\\) of state values on which \\(h\\) is continuous and never zero. On that interval choose an antiderivative \\(H\\) with \\(H'=1/h\\). The chain rule gives
\\[
 \\frac{d}{dt}H(y(t))=\\frac{y'(t)}{h(y(t))}=g(t).
\\]
Thus \\(H(y(t))=G(t)+C\\), where \\(G'=g\\). This is what the notation \\(dy/h(y)=g(t)\\,dt\\) abbreviates.

**Theorem 2.2 (Separation on a nonzero-rate interval).** Suppose \\(g\\) is continuous on a time interval \\(I\\), \\(h\\) is continuous and nonzero on a state interval \\(J\\), and \\(t_0\\in I\\), \\(y_0\\in J\\). Set
\\[
 H(y)=\\int_{y_0}^{y}\\frac{du}{h(u)},\\qquad
 G(t)=\\int_{t_0}^{t}g(s)\\,ds.
\\]
Then every solution staying in \\(J\\) satisfies \\(H(y(t))=G(t)\\). Conversely, on any interval containing \\(t_0\\) where \\(G(t)\\in H(J)\\), the function \\(y(t)=H^{-1}(G(t))\\) is a solution and has initial value \\(y_0\\).

**Proof.** The chain-rule calculation proves necessity. Since a continuous nonzero function has one sign on an interval, \\(H'\\) has one sign and \\(H\\) is strictly monotone. It therefore has a continuous inverse on its image. To compute the derivative of that inverse at \\(v=H(y)\\), write
\\[
 \\frac{H^{-1}(v+\\eta)-H^{-1}(v)}{\\eta}
 =
 \\frac{z-y}{H(z)-H(y)},\\qquad z=H^{-1}(v+\\eta).
\\]
Continuity of the inverse makes \\(z\\to y\\). The quotient tends to \\(1/H'(y)=h(y)\\). Applying the chain rule now gives \\(y'=h(y)G'=h(y)g(t)\\). At \\(t_0\\), both integrals are zero and the inverse returns \\(y_0\\). \\(\\square\\)

The theorem does not require an elementary formula for the inverse. An implicit answer can be complete if it identifies the state interval and determines one value of \\(y\\) for each allowed time. If \\(G\\) leaves \\(H(J)\\), that inverse branch ends. Sometimes the solution can continue into a larger domain; sometimes it encounters a genuine infinite endpoint.

Without local uniqueness, a solution can reach a zero of \\(h\\), stay there, and later leave. Separation on the nonzero interval does not classify such glued solutions. For example, \\(y'=2\\sqrt y\\) on \\(y\\ge0\\) admits a solution that stays zero until a chosen time and then becomes a positive square. Chapter 4 will explain the missing hypothesis.

## Worked example 2.1: separation and a finite time interval

Solve
\\[
 y'=2t(1+y^2),\\qquad y(0)=0.
\\]
Here \\(h(y)=1+y^2\\) is positive for every real state, so there are no equilibrium branches lost by division. The antiderivative of \\(1/(1+y^2)\\) is \\(\\arctan y\\), and integration from the initial point gives
\\[
 \\arctan y(t)=t^2.
\\]
Because \\(\\arctan\\) takes values in \\((-\\pi/2,\\pi/2)\\), this relation makes sense only while \\(t^2<\\pi/2\\). The solution is
\\[
 y(t)=\\tan(t^2),\\qquad
 -\\sqrt{\\pi/2}<t<\\sqrt{\\pi/2}.
\\]

Differentiation gives \\(y'=2t\\sec^2(t^2)=2t(1+y^2)\\), and the initial value is zero. Both ends of the interval are genuine blow-up endpoints. A graph of \\(\\tan(t^2)\\) has other branches, but they are separated from this initial-value solution by undefined times. The bounded range of the inverse trigonometric function supplied the interval restriction before the tangent formula was written.

## Linear equations and a based formula

**Definition 2.3 (First-order linear equation).** On an interval \\(I\\), a linear equation in standard form is
\\[
 y'+p(t)y=q(t).
\\]
If an equation is initially \\(a(t)y'+b(t)y=c(t)\\), this standard form is valid only on intervals where \\(a(t)\\ne0\\).

Assume \\(p,q\\) are continuous on \\(I\\), and choose \\(t_0\\in I\\). Define
\\[
 P(t)=\\int_{t_0}^{t}p(s)\\,ds,\\qquad \\mu(t)=e^{P(t)}.
\\]
The integrating factor \\(\\mu\\) is strictly positive and satisfies \\(\\mu'=p\\mu\\). Multiplication produces
\\[
 (\\mu y)'=\\mu q.
\\]

**Theorem 2.4 (Linear initial-value formula).** Under these assumptions, the unique solution with \\(y(t_0)=y_0\\) is
\\[
 y(t)=e^{-P(t)}
 \\left(y_0+\\int_{t_0}^{t}e^{P(s)}q(s)\\,ds\\right)
 \\quad(t\\in I).
\\]

**Proof.** Any solution, after multiplication by \\(\\mu\\), must satisfy the product-rule identity. Integrate from \\(t_0\\), noting \\(P(t_0)=0\\) and \\(\\mu(t_0)=1\\). This gives the formula. Conversely, continuity makes all displayed integrals differentiable. Differentiating the formula, or multiplying it by \\(\\mu\\) first, recovers \\(y'+py=q\\), and substitution at \\(t_0\\) recovers \\(y_0\\). Every possible solution has the same formula, which proves uniqueness. \\(\\square\\)

This theorem is global on the chosen coefficient interval, even if that interval is unbounded. It makes no claim across an endpoint where a coefficient is undefined. The exponential integrating factor itself never vanishes, so dividing by it loses no solutions.

The homogeneous equation has solutions \\(Ce^{-P(t)}\\). For the nonhomogeneous equation, the difference of any two solutions is homogeneous. Consequently every solution is a particular solution plus one homogeneous solution. The solution set of the nonhomogeneous equation is usually not closed under addition: adding two solutions doubles the forcing \\(q\\).

## Worked example 2.2: a time-dependent input

Solve
\\[
 y'+2y=t,\\qquad y(0)=1.
\\]
The integrating factor is \\(e^{2t}\\), giving
\\[
 e^{2t}y(t)=1+\\int_0^t se^{2s}\\,ds.
\\]
Integration by parts gives an antiderivative
\\(e^{2s}(s/2-1/4)\\). Therefore
\\[
 y(t)=\\frac t2-\\frac14+\\frac54e^{-2t}.
\\]
Its derivative is \\(1/2-(5/2)e^{-2t}\\), so adding twice the function leaves exactly \\(t\\). At zero it equals \\(-1/4+5/4=1\\).

The term \\(5e^{-2t}/4\\) records the decaying effect of the initial condition. The affine term is a particular response to the growing input. The solution does not tend to a constant, even though its homogeneous part decays. A stable homogeneous equation can be driven by an unbounded input.

More generally, for \\(y'+ky=u(t)\\) with \\(k>0\\),
\\[
 y(t)=e^{-k(t-t_0)}y_0+
 \\int_{t_0}^{t}e^{-k(t-s)}u(s)\\,ds.
\\]
The integral weights recent input more heavily than distant input. This formula is often useful even when the integral has no elementary antiderivative.

## Worked example 2.3: logistic branches and equilibria

Consider
\\[
 P'=rP(1-P/K),\\qquad r>0,\\ K>0.
\\]
The equilibrium solutions \\(P=0\\) and \\(P=K\\) must be recorded first. For a non-equilibrium solution on a state interval avoiding both values, partial fractions give
\\[
 \\frac1{P(1-P/K)}=\\frac1P+\\frac1{K-P}.
\\]
Integration yields
\\[
 \\log\\left|\\frac{P}{K-P}\\right|=rt+C.
\\]
For positive initial value \\(P(0)=P_0\\ne K\\), solving the relation gives
\\[
 P(t)=\\frac{K}{1+Ae^{-rt}},\\qquad A=\\frac K{P_0}-1.
\\]

If \\(0<P_0<K\\), then \\(A>0\\), the denominator is positive for every real time, and \\(P\\) increases toward \\(K\\) in forward time. If \\(P_0>K\\), then \\(-1<A<0\\); the denominator is positive on the interval
\\[
 t>\\frac{\\log(-A)}r,
\\]
which contains zero. The solution decreases toward \\(K\\) forward in time but blows up at its finite backward endpoint. Initial value \\(P_0=K\\) gives the equilibrium directly, and \\(P_0=0\\) cannot be inserted into the displayed definition of \\(A\\).

For example, \\(r=1/2\\), \\(K=100\\), \\(P_0=20\\) gives \\(P=100/(1+4e^{-t/2})\\). The population reaches \\(50\\) when the denominator is two, so \\(e^{-t/2}=1/4\\) and \\(t=2\\log4\\). The time unit must match the inverse-time unit of \\(r\\).

The equilibrium level \\(K\\) is not reached at any finite forward time from a different positive initial value. The rate is largest at \\(P=K/2\\), since completing the square gives
\\[
 rP(1-P/K)=rK/4-\\frac rK(P-K/2)^2.
\\]
This maximum rate is a property of the model, not a proof that an environment has a permanent carrying capacity.

## Coefficient domains and common mistakes

The equation \\(ty'+y=1\\) can be divided by \\(t\\) only on \\(t>0\\) or \\(t<0\\). Its standard-form coefficients are singular at zero. Nevertheless some solutions of the original equation can extend through zero. Indeed \\((ty)'=1\\), so \\(ty=t+C\\), and \\(y=1\\) extends through zero when \\(C=0\\). The standard-form theorem applies on either side; the original equation must decide what happens at the excluded point.

A logarithm obtained in separation needs an absolute value unless the state interval has already fixed the sign. Writing \\(\\log y\\) when the solution is negative discards valid branches. Conversely, removing an absolute value after exponentiation does not permit a solution to change sign arbitrarily. A single integration constant and the chosen connected state interval determine that branch.

A general implicit relation need not define one global function. The relation \\(y^2=t+C\\) has positive and negative graph branches where the right side is positive. A proposed branch must satisfy both the equation and the required differentiability. At a square-root endpoint, continuity alone does not establish a differentiable continuation.

When a rate law is separable and linear, both methods should agree on their common domain. Agreement is a useful mathematical check, but it does not replace verification. When neither form applies, changing variables may reveal one of them; that is the subject of the next chapter.

## Comparing two linear solutions with the same input

The based integrating-factor formula also gives exact dependence on initial data. Let two solutions have the same continuous coefficients and forcing on one common interval, but initial values \\(u_0,v_0\\) at \\(t_0\\). Subtract their equations before estimating anything. Their difference solves the homogeneous equation, so
\\[
 u(t)-v(t)=(u_0-v_0)\\exp\\left(-\\int_{t_0}^tp(s)\\,ds\\right).
\\]
This proves continuous dependence on the initial value uniformly on each compact time interval, because the displayed factor is bounded there. It also proves that two distinct scalar linear trajectories with the same forcing cannot meet at a finite regular time: the exponential never vanishes. No assumption that the original solutions themselves stay nonzero is required.

If \\(p(t)\\ge c>0\\) for future times, the difference decays at least as fast as \\(e^{-c(t-t_0)}\\). If \\(p\\) changes sign, the exact integral decides the amplification; inspecting one instantaneous coefficient is insufficient. For example, \\(p(t)=2t\\) and common forcing give difference \\((u_0-v_0)e^{-(t^2-t_0^2)}\\). On positive times that separates the common forced response from decaying memory of the initial value. On a fixed interval extending backwards, the same formula remains valid but may amplify errors instead of damping them. This distinction is useful before a numerical approximation is attempted, because the differential equation itself can magnify perturbations.

## Exercises

### Exercise 2.1 {#separable-linear-first-order-ex-1}

Solve \\(y'=3ty\\), \\(y(0)=-2\\), and list the equilibrium separately.

<details><summary>Hint 1</summary>
For nonzero \\(y\\), differentiate \\(\\log|y|\\).
</details>
<details><summary>Hint 2</summary>
The exponential factor is positive, so the initial value fixes the sign.
</details>
<details><summary>Solution</summary>
Separation gives \\(\\log|y|=3t^2/2+C\\), hence \\(y=Ce^{3t^2/2}\\) with a signed constant. The initial value gives \\(y=-2e^{3t^2/2}\\), defined for all real \\(t\\). Differentiation yields \\(y'=3ty\\). The zero function is an equilibrium solution, but does not satisfy this initial condition.
</details>

### Exercise 2.2 {#separable-linear-first-order-ex-2}

Solve \\(y'=1+y^2\\), \\(y(0)=1\\), including its maximal formula interval through zero.

<details><summary>Hint 1</summary>
Integrate \\(1/(1+y^2)\\).
</details>
<details><summary>Hint 2</summary>
The initial angle is \\(\\pi/4\\), and it must remain between \\(-\\pi/2\\) and \\(\\pi/2\\).
</details>
<details><summary>Solution</summary>
The relation is \\(\\arctan y=t+\\pi/4\\). Thus \\(y=\\tan(t+\\pi/4)\\) for \\(-3\\pi/4<t<\\pi/4\\). The derivative identity verifies the equation, and the initial value is one. Both endpoints are blow-up times, so the branch cannot extend through either as a finite solution.
</details>

### Exercise 2.3 {#separable-linear-first-order-ex-3}

Solve \\(y'+3y=6\\), \\(y(0)=5\\).

<details><summary>Hint 1</summary>
Use integrating factor \\(e^{3t}\\).
</details>
<details><summary>Hint 2</summary>
Alternatively shift by the constant equilibrium two.
</details>
<details><summary>Solution</summary>
The shifted variable \\(w=y-2\\) satisfies \\(w'=-3w\\), so \\(y=2+Ce^{-3t}\\). The initial condition gives \\(C=3\\). Hence \\(y=2+3e^{-3t}\\) on \\(\\mathbb R\\). Substitution gives \\(y'+3y=-9e^{-3t}+6+9e^{-3t}=6\\).
</details>

### Exercise 2.4 {#separable-linear-first-order-ex-4}

Solve \\(y'+y=e^{-t}\\), \\(y(0)=0\\).

<details><summary>Hint 1</summary>
Multiplication by \\(e^t\\) makes the right side constant.
</details>
<details><summary>Hint 2</summary>
Integrate from zero rather than using an unspecified constant.
</details>
<details><summary>Solution</summary>
We obtain \\((e^ty)'=1\\), hence \\(e^ty=t\\) and \\(y=te^{-t}\\). Its derivative is \\((1-t)e^{-t}\\); adding the function leaves \\(e^{-t}\\). It has initial value zero and is defined on all real times.
</details>

### Exercise 2.5 {#separable-linear-first-order-ex-5}

Solve \\(ty'+2y=t^2\\), \\(y(1)=3\\), on \\(t>0\\).

<details><summary>Hint 1</summary>
Divide by \\(t\\) only after choosing the positive interval.
</details>
<details><summary>Hint 2</summary>
The integrating factor for \\(2/t\\) is \\(t^2\\).
</details>
<details><summary>Solution</summary>
The equation becomes \\(y'+2y/t=t\\). Multiplication by \\(t^2\\) gives \\((t^2y)'=t^3\\), so \\(y=t^2/4+C/t^2\\). At one, \\(C=11/4\\). The solution is \\(t^2/4+11/(4t^2)\\) on \\((0,\\infty)\\), and cannot have a finite extension through zero.
</details>

### Exercise 2.6 {#separable-linear-first-order-ex-6}

For \\(P'=P(1-P/60)\\), \\(P(0)=15\\), find the time at which \\(P=30\\).

<details><summary>Hint 1</summary>
The logistic constant is \\(A=60/15-1\\).
</details>
<details><summary>Hint 2</summary>
At half the carrying capacity, the denominator equals two.
</details>
<details><summary>Solution</summary>
The solution is \\(P=60/(1+3e^{-t})\\). Setting \\(P=30\\) gives \\(1+3e^{-t}=2\\), so \\(t=\\log3\\). The initial state lies strictly between the equilibria, so this is the unique positive crossing time along the increasing branch.
</details>

### Exercise 2.7 {#separable-linear-first-order-ex-7}

Solve \\(y'=y^2\\), \\(y(0)=-1\\), and state its connected interval through zero.

<details><summary>Hint 1</summary>
Integrating \\(y^{-2}\\) gives \\(-1/y\\).
</details>
<details><summary>Hint 2</summary>
Locate the denominator zero before choosing the interval.
</details>
<details><summary>Solution</summary>
Separation gives \\(-1/y=t+C\\), and the initial condition gives \\(C=1\\). Thus \\(y=-1/(t+1)\\) on \\((-1,\\infty)\\). It increases toward zero as \\(t\\to\\infty\\), without reaching zero at finite time. The omitted equilibrium is \\(y=0\\).
</details>

### Exercise 2.8 {#separable-linear-first-order-ex-8}

Let \\(p,q\\) be continuous. Prove that the difference of two solutions of \\(y'+py=q\\) solves the homogeneous equation.

<details><summary>Hint 1</summary>
Subtract the two equations.
</details>
<details><summary>Hint 2</summary>
Keep the same coefficient \\(p(t)\\) in both equations.
</details>
<details><summary>Solution</summary>
If \\(u'+pu=q\\) and \\(v'+pv=q\\), then \\(w=u-v\\) satisfies \\(w'+pw=0\\). The homogeneous formula gives \\(w(t)=w(t_0)e^{-\\int_{t_0}^t p}\\). In particular, equal initial data force \\(w=0\\), another proof of uniqueness for the linear initial-value problem.
</details>

### Exercise 2.9 {#separable-linear-first-order-ex-9}

A constant-volume tank of \\(20\\) litres receives and loses \\(2\\) litres per minute, with incoming concentration \\(5\\) grams per litre. If initially salt-free, find the salt amount.

<details><summary>Hint 1</summary>
The balance is \\(m'=10-m/10\\).
</details>
<details><summary>Hint 2</summary>
The equilibrium amount is incoming concentration times volume.
</details>
<details><summary>Solution</summary>
The linear equation is \\(m'+m/10=10\\). Its solution is \\(m=100+Ce^{-t/10}\\). The initial condition gives \\(C=-100\\), so \\(m(t)=100(1-e^{-t/10})\\) for forward physical time. It approaches \\(100\\) grams, which corresponds to concentration \\(5\\) grams per litre.
</details>

### Exercise 2.10 {#separable-linear-first-order-ex-10}

Solve \\(y'=2y(1-y)\\) with \\(y(0)=2\\), and find its finite backward endpoint.

<details><summary>Hint 1</summary>
Here \\(K=1\\), \\(r=2\\), and \\(A=-1/2\\).
</details>
<details><summary>Hint 2</summary>
Require \\(1-\\tfrac12e^{-2t}>0\\) on the branch containing zero.
</details>
<details><summary>Solution</summary>
The solution is \\(y=1/(1-\\tfrac12e^{-2t})\\). The denominator vanishes at \\(t=-(\\log2)/2\\), and is positive for larger times. Thus its interval through zero is \\((-(\\log2)/2,\\infty)\\). Forward time brings the state down toward one; backward time reaches infinity at the stated endpoint.
</details>

### Exercise 2.11 {#separable-linear-first-order-ex-11}

Find all solutions of \\(ty'+y=1\\) on \\(t>0\\). Which can extend continuously through zero and still satisfy the original equation there?

<details><summary>Hint 1</summary>
Recognize the derivative of \\(ty\\).
</details>
<details><summary>Hint 2</summary>
Examine \\(1+C/t\\) as \\(t\\downarrow0\\).
</details>
<details><summary>Solution</summary>
The equation says \\((ty)'=1\\), so \\(y=1+C/t\\). A finite continuous extension at zero requires \\(C=0\\). Then \\(y=1\\) has derivative zero and satisfies the original equation \\(0\\cdot0+1=1\\) at zero. Standard-form division alone would not reveal this exceptional extension.
</details>

### Exercise 2.12 {#separable-linear-first-order-ex-12}

Show that if \\(k>0\\), \\(|u(t)|\\le M\\) for \\(t\\ge0\\), and \\(y'+ky=u(t)\\), \\(y(0)=y_0\\), then
\\[
 |y(t)|\\le e^{-kt}|y_0|+\\frac Mk(1-e^{-kt}).
\\]

<details><summary>Hint 1</summary>
Use the based integrating-factor formula.
</details>
<details><summary>Hint 2</summary>
Bound the absolute value of the integral using its positive exponential kernel.
</details>
<details><summary>Solution</summary>
The formula gives \\(y=e^{-kt}y_0+\\int_0^t e^{-k(t-s)}u(s)\\,ds\\). Triangle inequality and the input bound give \\(|y|\\le e^{-kt}|y_0|+M\\int_0^t e^{-k(t-s)}ds\\). Evaluating the last integral gives \\((1-e^{-kt})/k\\), proving the estimate. This bound need not be an equality for an input that changes sign.
</details>

## Sources

Original exposition and exercises, with primary references Jiří Lebl's [Notes on Diffy Qs, first-order equations](https://www.jirka.org/diffyqs/) and Gerald Teschl's [Ordinary Differential Equations and Dynamical Systems, Sections 1.3–1.5](https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode). Local seeds are the retained Calculus chapter 27, Quarto calculus differential-equations chapter, Lucent calculus differential-equations lesson, and Atlas Functions and Equations differential-equations chapter. Their original identities and solutions remain available.

## Summary

Separation is the chain rule applied on a state interval where the divided factor is nonzero. Integrating factors are the product rule applied to a linear equation with continuous coefficients. Both methods produce formulas whose domains, branches, equilibria, and initial values must be checked. Next we use substitutions and exact differentials to expose these structures inside less obvious equations.
`;export{e as default};