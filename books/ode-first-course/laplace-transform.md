
# The Laplace Transform

Differentiation is local in time, while initial conditions are values at a particular instant. The unilateral Laplace transform brings both into one algebraic equation: a derivative becomes multiplication by a new variable together with a boundary term containing the initial value. This is especially convenient when a forcing switches on after a delay.

The transform is still an improper integral. Its existence region, boundary terms and interpretation of a switched solution belong to the mathematics. Algebra in the transform variable is useful only after those conditions are stated. A table entry suggests a time-domain candidate; in this chapter we complete every IVP solution by direct verification and the previously proved uniqueness theorem.

**Preparation.** Use improper integrals, integration by parts, partial fractions and exponentials from the [Calculus book](../../apps/calculus/reading/book-a.html), together with [Second-Order Linear Equations](second-order-linear-equations.md) and [Forcing and Variation of Parameters](forcing-variation-parameters.md). We use real transform parameters s. Complex inversion contours and distributions are not required.

## 1. Definition and an existence domain

**Definition 10.1.** For a function f on \(t\ge0\), its unilateral Laplace transform is
\[
F(s)=\mathcal L[f](s)=\int_0^\infty e^{-st}f(t)\,dt
\]
at real s for which the improper integral converges. A piecewise continuous function has finitely many discontinuities on every finite interval, with finite one-sided limits. It is of exponential order a if \(|f(t)|\le Me^{at}\) for all sufficiently large t, with some finite M.

Local piecewise continuity excludes a nonintegrable singularity at the initial endpoint. The exponential bound controls the opposite end. These are sufficient hypotheses; some transforms exist outside this class. The value assigned to f at one isolated time does not change the integral.

**Theorem 10.2 (existence).** If f is piecewise continuous and of exponential order a, then its transform converges absolutely for every s>a.

**Proof.** On a finite interval, piecewise continuity makes f integrable and bounded. Beyond a time T where the growth bound holds,
\[
|e^{-st}f(t)|\le Me^{-(s-a)t}.
\]
For s>a, the right-hand improper integral is finite. The comparison criterion proves absolute convergence of the tail; adding the finite initial integral proves the assertion. \(\square\)

If the growth bound holds from zero, the same proof gives \(|F(s)|\le M/(s-a)\). A polynomial is of exponential order a for every a>0: for example \(e^{at}\ge (at)^n/n!\) bounds \(t^n e^{-at}\), and a slightly smaller positive exponent gives decay of that product at infinity. The function \(e^{t^2}\) is not of any finite exponential order, and its positive defining integral diverges for every real s, since \(t^2-st\) eventually grows like \(t^2/2\).

Linearity follows from linearity of finite integrals and passage to convergent limits. For an exponential,
\[
\mathcal L[e^{at}](s)=1/(s-a),\qquad s>a.
\]
For a nonnegative integer n, repeated integration by parts gives
\(\mathcal L[t^n](s)=n!/s^{n+1}\) for s>0. Every boundary term at infinity vanishes because a fixed power is dominated by the exponential decay. The condition s>0 must not be erased when writing the rational formula.

## 2. Derivatives bring in initial values

**Theorem 10.3 (derivative rule).** Suppose f is continuous on \([0,\infty)\), piecewise \(C^1\) on finite intervals, and both f and its piecewise derivative are of exponential orders. For s larger than both orders,
\[
\mathcal L[f'](s)=sF(s)-f(0).
\]
If f' is also continuous and f'' satisfies corresponding piecewise-continuity and growth conditions, then
\[
\mathcal L[f''](s)=s^2F(s)-sf(0)-f'(0).
\]

**Proof.** Integrate by parts on each smooth piece of [0,R]. Continuity of f cancels internal boundary terms. This gives
\[
\int_0^R e^{-st}f'(t)\,dt=e^{-sR}f(R)-f(0)
+s\int_0^R e^{-st}f(t)\,dt.
\]
The growth bound and s>a make the first term tend to zero. The other integrals converge by the hypotheses, proving the first formula. Apply it again to f' to obtain the second. \(\square\)

These formulas are statements about functions with the specified regularity. If f itself jumps, integration by parts across its jump creates an extra boundary contribution; treating that jump as an ordinary derivative loses information. Our switched ODE solutions will be continuous, with continuous first derivative when the forcing has steps but no impulses.

One can derive sine and cosine transforms without complex numbers. Let S and C denote their transforms at frequency \(\omega>0\). The derivative rule gives \(\omega C=sS\) from the derivative of sine, and \(-\omega S=sC-1\) from cosine. Solve to obtain
\[
\mathcal L[\sin\omega t]=\frac{\omega}{s^2+\omega^2},\qquad
\mathcal L[\cos\omega t]=\frac{s}{s^2+\omega^2},\qquad s>0.
\]
Sine and cosine are bounded, so their transforms exist there. The algebra is applied only after existence has been established.

## 3. Solving and checking initial-value problems

For \(y''+py'+qy=f\), \(y(0)=A,y'(0)=B\), the derivative rule gives
\[
(s^2+ps+q)Y(s)=F(s)+sA+B+pA.
\]
Initial values have become numerator terms. This computation can be made conditionally for any solution of sufficient exponential order. For constant coefficients and exponential-order forcing, the variation formula in the previous chapter also provides that growth: homogeneous exponentials and their convolution with an exponential bound grow at most exponentially times a fixed polynomial, which can be absorbed into a slightly larger exponential rate.

After solving the algebraic equation for Y, decompose it into known transform pairs. Then verify the proposed y in the original differential equation and in both initial data. Regular IVP uniqueness proves it is the solution. This avoids silently invoking an unproved general inverse-transform theorem.

**Worked Example 10.1 (initial values in the numerator).** Solve \(y''+3y'+2y=0\), \(y(0)=1,y'(0)=0\). Transforming gives
\[
(s^2+3s+2)Y=s+3,\qquad
Y=\frac{s+3}{(s+1)(s+2)}=\frac2{s+1}-\frac1{s+2}.
\]
The candidate is \(y=2e^{-t}-e^{-2t}\). Its initial value is one and derivative at zero is \(-2+2=0\). Each exponential is a homogeneous mode, so their combination solves the equation. This verification completes the IVP argument independently of any general transform injectivity theorem.

**Worked Example 10.2 (an input and a transient).** Solve \(y'+2y=1\), \(y(0)=0\). The transformed equation is \((s+2)Y=1/s\), so
\[
Y=\frac1{2s}-\frac1{2(s+2)}.
\]
Thus \(y=(1-e^{-2t})/2\). Differentiating gives \(y'=e^{-2t}\), and \(y'+2y=1\), while y(0)=0. The constant limiting value and the decaying transient are visible in the two fractions.

General inversion is a deeper result than matching a finite table. It involves a uniqueness statement for a class of functions, and point values at jumps require a convention. We do not claim that an algebraic expression alone defines a unique unrestricted function. The explicit formulas and IVP checks here establish the applications actually used.

## 4. Exponential and time shifts

Multiplying by an exponential shifts the transform variable:
\[
\mathcal L[e^{at}f(t)](s)=F(s-a),
\]
where the transformed integral converges. This follows immediately by combining the exponential factors in the definition. It changes the growth threshold as well as the displayed expression.

For a delayed signal, let \(H_a(t)=0\) for t<a and \(H_a(t)=1\) for t≥a, where a≥0. The time-shift rule is
\[
\mathcal L[H_a(t)f(t-a)](s)=e^{-as}F(s).
\]
Indeed, the integral begins at a; substitute u=t-a and factor out \(e^{-as}\). The function inside the delayed formula must have argument t-a. In general \(\mathcal L[H_a(t)f(t)]\) is not \(e^{-as}F(s)\).

A finite interval input can be written as the difference of two steps. The function \(H_a-H_b\), a<b, is one on [a,b) and zero outside, apart from irrelevant endpoint assignments. Its transform is \((e^{-as}-e^{-bs})/s\), for s>0. A switched ramp is \(H_a(t)(t-a)\), with transform \(e^{-as}/s^2\).

**Worked Example 10.3 (a delayed forcing).** Solve \(y''+y=H_2(t)\) with zero initial data. The algebra gives \(Y=e^{-2s}/[s(s^2+1)]\). Since \(1/[s(s^2+1)]=1/s-s/(s^2+1)\), the delayed candidate is
\[
y(t)=
\begin{cases}
0,&0\le t\le2,\\
1-\cos(t-2),&t\ge2.
\end{cases}
\]
Its value and first derivative match at two. On the open intervals before and after two, substitution gives the appropriate forcing. The second derivative jumps, so the proper conclusion is a piecewise classical solution, not a \(C^2\) solution at the switch. Piecewise IVP uniqueness and matching y,y' establish uniqueness in this class.

## 5. Convolution as an accumulated response

For causal functions define
\[
(f*g)(t)=\int_0^t f(t-u)g(u)\,du.
\]
Substitution u=t-v proves commutativity on each finite interval. For continuous f,g the result is continuous, by uniform continuity on compact rectangles or direct integral estimates.

**Theorem 10.4 (convolution rule).** If f,g are continuous and satisfy bounds \(|f(t)|\le M e^{at}\), \(|g(t)|\le N e^{bt}\) for all t≥0, then for s>max(a,b),
\[
\mathcal L[f*g](s)=F(s)G(s).
\]

**Proof.** The absolute value of the convolution is at most \(MN\,t e^{\max(a,b)t}\), so its transform exists for the stated s. On the triangle \(u\ge0,v\ge0,u+v\le R\), the substitution t=u+v in the iterated integral transforms
\[
\int_0^R e^{-st}\int_0^t f(t-u)g(u)\,du\,dt
\]
into the double integral of \(e^{-sv}f(v)e^{-su}g(u)\). The finite-triangle order change can be justified using uniform approximations by rectangular step functions; on the compact triangle the error is bounded by its area times the uniform integrand error, and the boundary strips have area tending to zero. Thus only ordinary finite integration is involved.

Over the entire positive quadrant, the corresponding absolute integrand is bounded by \(MN e^{-(s-a)v}e^{-(s-b)u}\), whose repeated integral is finite. The omitted region u+v>R lies where either u>R/2 or v>R/2. Integrating the exponential bound on these two strips makes its contribution tend to zero. Therefore the triangular integrals have the same limit as rectangular integrals over expanding squares. The latter factor into the two finite one-variable integrals, whose limits are F and G. This proves the formula. \(\square\)

The proof makes the absolute convergence requirement do real work: it controls the unbounded region omitted while changing the integration geometry. An unconditional rearrangement of divergent improper integrals would be invalid.

**Worked Example 10.4 (a product without partial fractions).** The product \(1/[s(s+1)]\) is the transform of the convolution of 1 with \(e^{-t}\). That convolution is \(\int_0^t e^{-u}\,du=1-e^{-t}\). This agrees with the partial-fraction identity \(1/s-1/(s+1)\). The two representations describe the same causal accumulation in different ways.

For a zero-data oscillator, the response formula \(y=(\sin\omega t/\omega)*f\) from Chapter 7 has transform \(F(s)/(s^2+\omega^2)\). This connects variation of parameters and Laplace algebra. They are not competing answers: one is a time-domain integral, the other a product in a transformed coordinate.

## 6. Impulses and scope

An ideal impulse is not an ordinary function with a very large value at one point. It is a mathematical object whose integrated effect remains nonzero as its duration shrinks. In an elementary model one can describe a prescribed velocity jump and solve the free equation on either side. A systematic distributional transform theory belongs to a later course.

Similarly, transform existence does not guarantee that every manipulative algebraic step is legal at every s. Denominators may vanish outside the working half-line, and expressions may admit continuations where their original improper integrals do not converge. Retain a real s sufficiently large throughout the derivation; verify the recovered time-domain solution on its own stated interval.

## Exercises

### Exercise 10.1 {#laplace-transform-ex-1}

Compute \(\mathcal L[e^{-3t}]\) and state an existence half-line.

<details><summary>Hint 1</summary>

Combine the two exponential factors.

</details>
<details><summary>Hint 2</summary>

The tail decays when s+3 is positive.

</details>
<details><summary>Solution</summary>

The integral is \(\int_0^\infty e^{-(s+3)t}\,dt=1/(s+3)\) for s>-3. The rational expression at other values does not by itself certify convergence of that integral.

</details>

### Exercise 10.2 {#laplace-transform-ex-2}

Find \(\mathcal L[t^2]\).

<details><summary>Hint 1</summary>

Use integration by parts twice.

</details>
<details><summary>Hint 2</summary>

Each step contributes one power of 1/s and lowers the polynomial degree.

</details>
<details><summary>Solution</summary>

For s>0 the boundary terms vanish and the result is \(2/s^3\). This is the n=2 case of \(n!/s^{n+1}\).

</details>

### Exercise 10.3 {#laplace-transform-ex-3}

Solve \(y'+3y=0,y(0)=2\) by transform algebra and check.

<details><summary>Hint 1</summary>

The derivative transform is sY-2.

</details>
<details><summary>Hint 2</summary>

Solve \((s+3)Y=2\).

</details>
<details><summary>Solution</summary>

The candidate is \(y=2e^{-3t}\). Its derivative is -3y and its initial value is two, so regular IVP uniqueness establishes the result.

</details>

### Exercise 10.4 {#laplace-transform-ex-4}

Recover the function corresponding to \(s/(s^2+9)\).

<details><summary>Hint 1</summary>

Compare with the cosine transform.

</details>
<details><summary>Hint 2</summary>

The frequency squared is nine.

</details>
<details><summary>Solution</summary>

The standard continuous candidate is \(\cos3t\), whose transform is the given expression for s>0. This identification concerns the stated table class and its continuous representative.

</details>

### Exercise 10.5 {#laplace-transform-ex-5}

Find the transform of \(H_4(t)(t-4)\).

<details><summary>Hint 1</summary>

This is a delayed copy of the ramp t.

</details>
<details><summary>Hint 2</summary>

Multiply the ramp transform by the delay factor.

</details>
<details><summary>Solution</summary>

The result is \(e^{-4s}/s^2\) for s>0. Substituting u=t-4 in the defining integral proves the shift directly.

</details>

### Exercise 10.6 {#laplace-transform-ex-6}

Compute the transform of the pulse \(H_1-H_3\).

<details><summary>Hint 1</summary>

Use linearity.

</details>
<details><summary>Hint 2</summary>

Each step contributes an exponential divided by s.

</details>
<details><summary>Solution</summary>

The transform is \((e^{-s}-e^{-3s})/s\) for s>0. Equivalently it is the finite integral \(\int_1^3e^{-st}\,dt\), which also gives a value at s=0 by a separate limit, namely two.

</details>

### Exercise 10.7 {#laplace-transform-ex-7}

Solve \(y''+4y=0\), \(y(0)=0,y'(0)=2\).

<details><summary>Hint 1</summary>

The transformed second derivative is s²Y-2.

</details>
<details><summary>Hint 2</summary>

Compare \(2/(s^2+4)\) with the sine transform.

</details>
<details><summary>Solution</summary>

The candidate is \(\sin2t\). It has derivative two at zero and satisfies \(y''=-4y\), so the equation and both data are verified.

</details>

### Exercise 10.8 {#laplace-transform-ex-8}

Compute \(1*1\) and verify its transform is the product of the two transforms.

<details><summary>Hint 1</summary>

The finite convolution integrand is constant one.

</details>
<details><summary>Hint 2</summary>

The interval of integration has length t.

</details>
<details><summary>Solution</summary>

The convolution is t, whose transform is 1/s². Each factor 1 has transform 1/s, so their product agrees for s>0.

</details>

### Exercise 10.9 {#laplace-transform-ex-9}

Why does changing f at t=2 not change its transform?

<details><summary>Hint 1</summary>

The defining integral is unaffected by a single point value.

</details>
<details><summary>Hint 2</summary>

An ordinary point value is not an impulse mass.

</details>
<details><summary>Solution</summary>

Every finite Riemann integral remains unchanged under a finite change of bounded values, and hence so does the convergent improper limit. An impulse is a different object with a nonzero integrated effect; it cannot be represented by merely changing one finite point value.

</details>

### Exercise 10.10 {#laplace-transform-ex-10}

Explain why \(e^{t^2}\) has no real-s Laplace transform.

<details><summary>Hint 1</summary>

For any fixed s, examine t²-st at large t.

</details>
<details><summary>Hint 2</summary>

It eventually exceeds t²/2.

</details>
<details><summary>Solution</summary>

For t>2|s|, \(t²-st\ge t²-|s|t\ge t²/2\). The positive integrand \(e^{t²-st}\) therefore grows without bound and its integral diverges. No fixed real s supplies an exponentially decaying weight strong enough.

</details>

### Exercise 10.11 {#laplace-transform-ex-11}

Write the zero-data solution of \(y'+y=H_2(t)\) and state its regularity at the switch.

<details><summary>Hint 1</summary>

Delay the zero-data response to a constant input.

</details>
<details><summary>Hint 2</summary>

The undelayed response is \(1-e^{-t}\).

</details>
<details><summary>Solution</summary>

The function is zero before two and \(1-e^{-(t-2)}\) after two. It is continuous there, but its derivative changes from zero to one, so it is piecewise classical rather than differentiable at the switch. It solves the equation on the two open pieces.

</details>

### Exercise 10.12 {#laplace-transform-ex-12}

What must be checked after partial fractions suggest a solution of a transformed IVP?

<details><summary>Hint 1</summary>

A rational identity is not a differential-equation verification.

</details>
<details><summary>Hint 2</summary>

Check the legal interval, regularity, equation and initial data, then invoke the appropriate uniqueness theorem.

</details>
<details><summary>Solution</summary>

Verify that the proposed function has the derivatives required on each stated interval, satisfies the forcing equation there, and takes the specified initial values. At step switches verify the intended matching conditions. Regular or piecewise IVP uniqueness then identifies the candidate. The transform's existence half-line and derivative-rule hypotheses must also have been respected in the algebraic derivation.

</details>

## Sources

Original exposition informed by the unchanged Quarto calculus chapter 25. Jiří Lebl's [The Laplace transform](https://www.jirka.org/diffyqs/html/laplace_section.html) is an author-written reference for the unilateral convention and exponential-order existence. The chapter proves the transform rules it uses and completes examples by direct IVP verification; a general inversion theorem and impulse distributions are beyond its scope.

## Summary

The unilateral Laplace transform is an improper integral with an existence domain. Under stated growth and regularity conditions, integration by parts turns derivatives into algebra plus initial-value terms. Exponential shifts, delays and convolution organize switched or accumulated inputs. Partial fractions suggest explicit functions, while substitution and IVP uniqueness finish the solution argument. Jumps and impulses require distinct interpretations. The next chapter studies finite time steps and asks how their errors and stability differ from those of the exact equation.
