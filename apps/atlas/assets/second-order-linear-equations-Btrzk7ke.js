var e=`---
parent_id: book-ode-first-course
chapter_id: second-order-linear-equations
title: "Second-Order Linear Equations"
level: undergraduate
license: CC BY-SA 4.0
---

# Second-Order Linear Equations

A first-order equation needs one initial number because it specifies a rate from the current state. A second-order equation describes acceleration, so position alone is insufficient. Two objects can pass through the same location with different velocities and then follow different trajectories. A second-order initial-value problem therefore supplies both a value and a first derivative at the same starting time.

The central idea of this chapter is that linearity makes all those trajectories accessible through just two carefully chosen homogeneous solutions. The characteristic polynomial is an efficient way to find them for constant coefficients, but the underlying explanation is uniqueness of the initial-value problem. Two constants in a proposed formula are meaningful only if they can fit every legal pair of initial data.

**Preparation.** Use derivatives, exponentials and trigonometric functions from the [Calculus book](/books/calculus-course/), and [Existence, Uniqueness, and Picard Iteration](existence-uniqueness-picard.md). We develop the needed two-by-two algebra explicitly. Full linear-systems theory is postponed until Chapter 13. Throughout, a solution interval is an interval on which the leading coefficient is nonzero and all normalized coefficients are continuous.

## 1. Normalize before solving

**Definition 6.1 (linear equation).** A second-order scalar equation is linear when it has the form
\\[
a(t)y''+b(t)y'+c(t)y=g(t).
\\]
On an interval where \\(a(t)\\ne0\\), division gives the normalized form
\\[
y''+p(t)y'+q(t)y=f(t),\\qquad p=b/a,\\quad q=c/a,\\quad f=g/a.
\\]
The equation is homogeneous if \\(f=0\\). A classical solution has two continuous derivatives and satisfies the equation at every point of its interval.

Normalization is an operation with a domain condition. For example, \\(ty''+y'=0\\) cannot be divided by t across zero. Its behavior at zero needs separate examination; a formula obtained on \\(t>0\\) does not automatically solve an initial-value problem through that singular point. In contrast, continuous \\(p,q,f\\) on an open interval provide a regular setting at every interior point.

Linearity means that the operation \\(L[y]=y''+py'+qy\\) respects addition and multiplication by constants. Thus homogeneous solutions can be combined freely. For a forced equation, the sum of two solutions generally solves the equation with twice the forcing. The correct relationship is that the difference of two solutions with the same forcing is homogeneous.

## 2. Why two initial data suffice

**Theorem 6.2 (linear initial-value problem).** Suppose p, q and f are continuous on an open interval I, and \\(t_0\\in I\\). For every real pair A, B there is exactly one solution on I of
\\[
y''+py'+qy=f,\\qquad y(t_0)=A,\\quad y'(t_0)=B.
\\]

**Proof.** Put \\(v=y'\\). The equation is equivalent to the two integral identities
\\[
y(t)=A+\\int_{t_0}^t v(s)\\,ds,\\qquad
v(t)=B+\\int_{t_0}^t[f(s)-p(s)v(s)-q(s)y(s)]\\,ds.
\\]
Fix a compact subinterval J containing \\(t_0\\). All coefficients are bounded there. For pairs of functions use the magnitude \\(|y|+|v|\\). The difference between two right sides at time s is bounded by \\(K(|\\Delta y|+|\\Delta v|)\\), with a finite constant K, for example \\(1+\\max_J|p|+\\max_J|q|\\).

Start with the constant pair (A,B) and repeatedly insert the preceding pair into the integrals. If D bounds the first difference of two successive pairs on J and \\(\\ell=\\max_{t\\in J}|t-t_0|\\), induction bounds the nth subsequent difference by \\(D K^n\\ell^n/n!\\). The induction follows by integrating the preceding bound with \\(|s-t_0|^n\\); orientation handles the left side of \\(t_0\\) by taking absolute values. The numerical exponential series converges, so the iterates converge uniformly on J. Continuity of the coefficients and the integral bound permit passage to the limit in both identities. The fundamental theorem then gives \\(y'=v\\) and \\(v'=f-pv-qy\\), proving existence with the stated initial data.

For uniqueness, two candidate pairs with the same initial data have bounded difference M on J. Repeated use of their integral difference inequality gives a bound \\(M K^n\\ell^n/n!\\) for every n. This tends to zero, so their difference is zero. Finally choose larger compact subintervals whose union is I. The constructed solutions agree on overlaps by uniqueness and therefore define one solution on all of I. \\(\\square\\)

The proof does not require the coefficient bounds to be uniform over an unbounded I. Each finite segment has its own bounds. Solutions may grow without bound as time tends to infinity or approaches an excluded endpoint, but they cannot fail at an interior point of an interval with continuous linear coefficients.

For nonlinear equations this global conclusion can fail. The theorem uses the fact that the state dependence is linear and hence has a finite Lipschitz constant on every bounded time segment independent of the magnitude of y and v. It does not claim that every second-order equation has globally existing solutions.

## 3. Independence and the Wronskian

**Definition 6.3 (Wronskian).** For two differentiable functions \\(y_1,y_2\\), set
\\[
W(t)=y_1(t)y_2'(t)-y_1'(t)y_2(t).
\\]
Two functions are linearly independent if no nontrivial constant combination \\(C_1y_1+C_2y_2\\) vanishes identically.

**Theorem 6.4 (fundamental pair).** For homogeneous solutions on a regular interval I, the following are equivalent: the functions are independent; \\(W(t_0)\\ne0\\) at one point; \\(W(t)\\ne0\\) at every point. When these hold, every homogeneous solution is uniquely \\(C_1y_1+C_2y_2\\).

**Proof.** Given target data A,B at \\(t_0\\), the equations for the constants are
\\[
C_1y_1(t_0)+C_2y_2(t_0)=A,\\quad
C_1y_1'(t_0)+C_2y_2'(t_0)=B.
\\]
The determinant is W. If nonzero, elimination supplies unique constants. The resulting combination has the same data as the target solution, so Theorem 6.2 makes them identical. Such a pair is independent, since the zero solution has only the zero constants.

Conversely, if W vanishes at a point, the two initial-data columns are dependent. Some nontrivial combination has both value and derivative zero there. Uniqueness makes that combination identically zero, so the functions are dependent. Apply the same argument at any point to obtain the stated equivalence. \\(\\square\\)

For arbitrary differentiable functions, a zero Wronskian does not carry this same conclusion without qualifications. The theorem concerns two solutions of the same regular homogeneous equation. Uniqueness supplies the step from zero initial data to an identically zero function.

**Theorem 6.5 (Abel's identity).** For homogeneous solutions,
\\[
W(t)=W(t_0)\\exp\\!\\left(-\\int_{t_0}^t p(s)\\,ds\\right).
\\]

**Proof.** Differentiate W. The middle product terms cancel, leaving \\(W'=y_1y_2''-y_1''y_2\\). Substitute \\(y_j''=-py_j'-qy_j\\); the q terms cancel and \\(W'=-pW\\). The first-order integrating-factor formula proves the identity, including the case \\(W(t_0)=0\\). \\(\\square\\)

Abel's identity explains why a valid fundamental pair never loses its ability to fit initial data elsewhere on the regular interval. The exponential factor never vanishes.

## 4. Constant coefficients and the characteristic equation

For \\(ay''+by'+cy=0\\), with real constants and \\(a\\ne0\\), substitution of \\(e^{rt}\\) gives \\(ar^2+br+c=0\\). The exponential itself is never zero, so precisely the roots of this quadratic produce exponential solutions.

If \\(r_1\\ne r_2\\) are real roots, the exponentials have Wronskian \\((r_2-r_1)e^{(r_1+r_2)t}\\), which is nonzero. Theorem 6.4 therefore proves that their linear combinations are all the solutions. Finding two candidates and counting their constants would not alone establish that conclusion.

For a repeated real root r, factor the equation as \\(a(D-r)^2y=0\\), where \\(D\\) means differentiation. Set \\(y=e^{rt}u\\). Direct differentiation gives \\((D-r)y=e^{rt}u'\\) and \\((D-r)^2y=e^{rt}u''\\). Hence \\(u''=0\\), so
\\[
y=(C_1+C_2t)e^{rt}.
\\]
The extra t is necessary because repeating the same exponential twice does not produce two independent functions.

For a negative discriminant, write the roots as \\(\\alpha\\pm i\\beta\\), with \\(\\beta>0\\). No complex solution theory is needed to verify the real pair \\(e^{\\alpha t}\\cos\\beta t,e^{\\alpha t}\\sin\\beta t\\): differentiate and substitute using \\(\\alpha=-b/(2a)\\) and \\(\\beta=\\sqrt{4ac-b^2}/(2|a|)\\). Their Wronskian is \\(\\beta e^{2\\alpha t}\\), nonzero, so they give all real solutions. Complex roots are a compact way to organize that real calculation.

**Worked Example 6.1 (two decaying rates).** Solve \\(y''+4y'+3y=0\\), \\(y(0)=1,y'(0)=2\\). The characteristic roots are -1 and -3. Thus \\(y=C_1e^{-t}+C_2e^{-3t}\\). Initial conditions give \\(C_1+C_2=1\\) and \\(-C_1-3C_2=2\\). Subtracting yields \\(C_2=-3/2\\), \\(C_1=5/2\\). Substitution verifies the equation, and the displayed equations verify both initial values. Although each mode decays, the initial derivative is positive; decay of modes does not require the displacement to decrease at every instant.

**Worked Example 6.2 (a repeated root).** For \\(y''-4y'+4y=0\\), the root 2 is repeated. With \\(y(0)=0,y'(0)=3\\), the form \\((A+Bt)e^{2t}\\) gives A=0 and B=3. Thus \\(y=3te^{2t}\\). Its derivative is \\(3e^{2t}+6te^{2t}\\), whose initial value is 3. Omitting the t factor would make the nonzero initial derivative impossible once the initial value is zero.

**Worked Example 6.3 (damped oscillation).** Solve \\(y''+2y'+5y=0\\) with \\(y(0)=2,y'(0)=0\\). The parameters are \\(\\alpha=-1,\\beta=2\\), so \\(y=e^{-t}(A\\cos2t+B\\sin2t)\\). The value condition gives A=2. At zero the derivative is \\(-A+2B\\), hence B=1. The result \\(e^{-t}(2\\cos2t+\\sin2t)\\) oscillates inside an envelope of amplitude \\(\\sqrt5e^{-t}\\). That envelope bounds the displacement; it is not itself the trajectory.

## 5. Reduction of order on a legal interval

Suppose one nonzero homogeneous solution \\(y_1\\) is known and has no zeros on a subinterval. Seek \\(y=y_1u\\). Substitution and cancellation of the homogeneous equation give
\\[
y_1u''+(2y_1'+py_1)u'=0.
\\]
An integrating factor for the equation in \\(u'\\) yields
\\[
u'=\\frac{\\exp(-\\int p)}{y_1^2},\\qquad
y_2=y_1\\int\\frac{\\exp(-\\int p)}{y_1^2}\\,dt.
\\]
Its Wronskian with \\(y_1\\) is \\(y_1^2u'=\\exp(-\\int p)\\), which is nonzero. Different antiderivative constants merely add a multiple of \\(y_1\\). The no-zero condition belongs to this formula, not to the general solution-space theorem. If \\(y_1\\) has a zero, use the expression on intervals avoiding it or obtain a second solution by an initial-value construction instead.

## Exercises

### Exercise 6.1 {#second-order-linear-equations-ex-1}

For \\(y''-3y'+2y=0\\), solve \\(y(0)=0,y'(0)=1\\).

<details><summary>Hint 1</summary>

Factor the characteristic quadratic.

</details>
<details><summary>Hint 2</summary>

Use the initial value to make the two exponential coefficients opposite.

</details>
<details><summary>Solution</summary>

The roots are 1 and 2, so \\(y=Ae^t+Be^{2t}\\). The data give A+B=0 and A+2B=1, hence B=1,A=-1. Therefore \\(y=e^{2t}-e^t\\), with the required value and derivative at zero.

</details>

### Exercise 6.2 {#second-order-linear-equations-ex-2}

Solve \\(y''+6y'+9y=0\\), \\(y(0)=1,y'(0)=0\\).

<details><summary>Hint 1</summary>

The quadratic has a repeated root.

</details>
<details><summary>Hint 2</summary>

Differentiate \\((A+Bt)e^{-3t}\\) before inserting the initial derivative.

</details>
<details><summary>Solution</summary>

The repeated root is -3, giving \\(y=(A+Bt)e^{-3t}\\). A=1 and \\(y'(0)=B-3A=0\\), so B=3. The answer is \\((1+3t)e^{-3t}\\).

</details>

### Exercise 6.3 {#second-order-linear-equations-ex-3}

Find all real solutions of \\(y''+4y=0\\).

<details><summary>Hint 1</summary>

Use the real trigonometric pair for a negative discriminant.

</details>
<details><summary>Hint 2</summary>

Check the pair's Wronskian to justify that all solutions are represented.

</details>
<details><summary>Solution</summary>

The pair \\(\\cos2t,\\sin2t\\) solves the equation and has Wronskian 2. Hence all solutions are \\(A\\cos2t+B\\sin2t\\), with unique coefficients by Theorem 6.4.

</details>

### Exercise 6.4 {#second-order-linear-equations-ex-4}

Prove Abel's formula for \\(y''+3ty'+qy=0\\), with continuous q and \\(W(0)=2\\).

<details><summary>Hint 1</summary>

Differentiate W directly.

</details>
<details><summary>Hint 2</summary>

Its first-order equation is \\(W'=-3tW\\).

</details>
<details><summary>Solution</summary>

Substitution gives \\(W'=-3tW\\). The integrating factor or separated formula yields \\(W(t)=2e^{-3t^2/2}\\). It never vanishes, independently of the continuous coefficient q.

</details>

### Exercise 6.5 {#second-order-linear-equations-ex-5}

Why are \\(e^t\\) and \\(7e^t\\) not a fundamental pair?

<details><summary>Hint 1</summary>

Look for a nontrivial constant combination equal to zero.

</details>
<details><summary>Hint 2</summary>

Their initial-data columns are scalar multiples.

</details>
<details><summary>Solution</summary>

The combination \\(7e^t-7e^t\\), with coefficients 7 and -1 on the listed functions, vanishes. Their Wronskian is zero. They span only a one-parameter family, unable to prescribe value and derivative independently.

</details>

### Exercise 6.6 {#second-order-linear-equations-ex-6}

Use reduction of order for \\(y''-2y'+y=0\\) given \\(y_1=e^t\\).

<details><summary>Hint 1</summary>

Here p=-2.

</details>
<details><summary>Hint 2</summary>

The quotient \\(\\exp(-\\int p)/y_1^2\\) is constant.

</details>
<details><summary>Solution</summary>

Choose \\(\\exp(-\\int p)=e^{2t}\\). The quotient by \\(e^{2t}\\) is one, whose antiderivative is t. Thus \\(y_2=te^t\\), independent because its Wronskian with \\(e^t\\) equals \\(e^{2t}\\).

</details>

### Exercise 6.7 {#second-order-linear-equations-ex-7}

On \\(t>0\\), verify that 1 and \\(\\log t\\) form a fundamental pair for \\(ty''+y'=0\\).

<details><summary>Hint 1</summary>

Normalize only on the positive interval.

</details>
<details><summary>Hint 2</summary>

The Wronskian is the derivative of the logarithm.

</details>
<details><summary>Solution</summary>

Division by t gives \\(y''+y'/t=0\\). Both listed functions solve it, and \\(W=1/t\\ne0\\). Hence all positive-interval solutions are \\(A+B\\log t\\). The equation's leading coefficient vanishes at zero, so this interval conclusion gives no regular IVP there.

</details>

### Exercise 6.8 {#second-order-linear-equations-ex-8}

If \\(y_p,y_q\\) solve the same forced linear equation, prove \\(y_p-y_q\\) is homogeneous.

<details><summary>Hint 1</summary>

Apply the linear differential operation to their difference.

</details>
<details><summary>Hint 2</summary>

The two identical forcing terms cancel.

</details>
<details><summary>Solution</summary>

By linearity \\(L[y_p-y_q]=L[y_p]-L[y_q]=f-f=0\\). Thus every solution of the forced equation is one particular solution plus a homogeneous solution. The converse follows by adding the zero homogeneous forcing.

</details>

### Exercise 6.9 {#second-order-linear-equations-ex-9}

For \\(y''-2y'+5y=0\\), determine whether every solution tends to zero as \\(t\\to\\infty\\).

<details><summary>Hint 1</summary>

Identify the real exponential factor.

</details>
<details><summary>Hint 2</summary>

A nonzero growing oscillatory mode supplies a counterexample to a universal decay claim.

</details>
<details><summary>Solution</summary>

The solutions are \\(e^t(A\\cos2t+B\\sin2t)\\). For example \\(e^t\\cos2t\\) is unbounded on the sequence \\(t=n\\pi\\), where its value is \\(e^{n\\pi}\\). Hence not every solution tends to zero; only the zero solution does so.

</details>

### Exercise 6.10 {#second-order-linear-equations-ex-10}

Find the unique homogeneous solution with \\(y(t_0)=y'(t_0)=0\\) under the regular hypotheses.

<details><summary>Hint 1</summary>

The zero function is one candidate.

</details>
<details><summary>Hint 2</summary>

Use IVP uniqueness rather than a choice of characteristic roots.

</details>
<details><summary>Solution</summary>

The identically zero function solves the homogeneous equation and both data. Theorem 6.2 makes it the unique solution on the regular interval. This argument also applies to variable coefficients.

</details>

### Exercise 6.11 {#second-order-linear-equations-ex-11}

For \\(y_1=\\cos t,y_2=\\sin t\\), express A,B in \\(y=Ay_1+By_2\\) from data at \\(t_0=\\pi/2\\).

<details><summary>Hint 1</summary>

Evaluate both functions and derivatives at that point.

</details>
<details><summary>Hint 2</summary>

The value equation gives B, and the derivative equation gives -A.

</details>
<details><summary>Solution</summary>

At \\(\\pi/2\\), \\(y=B\\) and \\(y'=-A\\). Thus A is minus the prescribed derivative and B is the prescribed value. The nonzero Wronskian allows data to be imposed at any time, not only zero.

</details>

### Exercise 6.12 {#second-order-linear-equations-ex-12}

Explain why the reduction-of-order formula using \\(y_1=\\sin t\\) requires care near zero, though \\(y''+y=0\\) is regular there.

<details><summary>Hint 1</summary>

Inspect the denominator in the formula.

</details>
<details><summary>Hint 2</summary>

Distinguish a singular expression for a chosen construction from a singular coefficient of the equation.

</details>
<details><summary>Solution</summary>

The formula divides by \\(\\sin^2t\\), which vanishes at zero, so the integral expression must initially be used on an interval avoiding zero. The ODE itself has continuous coefficients at zero, and the independent solution \\(\\cos t\\) extends there normally. The construction's denominator is the obstacle, not the underlying IVP.

</details>

## Sources

Original exposition, informed by the unchanged Calculus chapter 27 and Quarto calculus chapter 18. For an author-written reference on the solution-space viewpoint, see Jiří Lebl, [Notes on Diffy Qs, Second-order linear ODEs](https://www.jirka.org/diffyqs/html/solinear_section.html). Constant-coefficient and Wronskian claims are proved above rather than inferred from a table.

## Summary

Regular second-order linear equations have exactly one solution for each initial value and velocity. A nonzero Wronskian identifies two homogeneous solutions that represent every trajectory, and Abel's formula prevents their independence from disappearing. Constant coefficients lead to distinct-root exponentials, repeated-root exponential-times-linear forms, or real damped trigonometric pairs. Reduction of order constructs a second solution on intervals where the known one does not vanish. The next chapter adds forcing while preserving this homogeneous framework.
`;export{e as default};