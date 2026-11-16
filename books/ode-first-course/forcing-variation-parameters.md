
# Forcing, Undetermined Coefficients, and Variation of Parameters

A homogeneous equation describes the motion already present in a system. A forced equation also receives an input: an applied force, a voltage, or a prescribed source. The input changes the family of solutions, but the homogeneous equation still organizes that family. Once one forced trajectory is known, every other differs from it by a free trajectory.

This chapter develops two complementary ways to find the forced part. Undetermined coefficients exploits forcing whose derivatives remain in a small familiar family. Variation of parameters replaces constant coefficients in a fundamental pair by functions and works with arbitrary continuous forcing on a regular interval. Both methods finish with substitution and initial conditions; neither licenses guessing a curve from its appearance.

**Preparation.** Read [Second-Order Linear Equations](second-order-linear-equations.md), especially fundamental pairs, Abel's identity and interval normalization. We use integration by parts and two-by-two elimination. A definite integral is an exact answer even if it has no elementary antiderivative.

## 1. The affine family of forced solutions

Consider
\[
L[y]=y''+p(t)y'+q(t)y=f(t)
\]
on an interval I where p,q,f are continuous. If \(y_p\) is one particular solution and \(y_h\) is homogeneous, then \(L[y_p+y_h]=f\). Conversely, subtracting \(L[y_p]=f\) from any other solution shows that their difference is homogeneous. Thus, for a fundamental pair \(y_1,y_2\),
\[
y=y_p+C_1y_1+C_2y_2.
\]
The particular solution is not unique. Adding any homogeneous function produces another valid particular solution. What is unique is the solution after two initial data are imposed.

This distinction prevents a common misuse of superposition. If \(L[y_a]=f_a\) and \(L[y_b]=f_b\), then their sum solves forcing \(f_a+f_b\). It does not solve forcing \(f_a\) unless the other forcing is zero. Linearity permits decomposition of an input into simpler pieces, provided the same decomposition is kept on the output side.

For nonzero leading coefficient a, first divide \(ay''+by'+cy=g\) by a. The normalized forcing is \(g/a\). Forgetting this division produces a variation-of-parameters answer with the wrong scale even if every later integral is evaluated perfectly.

## 2. Trial families and resonance multiplicity

For constant coefficients \(L=D^2+pD+q\), derivatives preserve several finite families: polynomials up to a fixed degree, exponentials times such polynomials, and exponential times polynomial sine-cosine pairs. These are the natural candidates for undetermined coefficients.

For a polynomial forcing of degree d, try a general polynomial of degree d when q is nonzero. Include every lower power, even if it is absent from the forcing, because differentiation mixes degrees. For \(e^{\lambda t}\) forcing, try \(Ae^{\lambda t}\) unless that exponential is already homogeneous. For a sinusoidal forcing, try both sine and cosine at its frequency; a first-derivative term mixes them.

The shift identity explains the rule precisely:
\[
L[e^{\lambda t}u]
=e^{\lambda t}\bigl[u''+(2\lambda+p)u'+(\lambda^2+p\lambda+q)u\bigr].
\]
It follows by two product differentiations. If \(\lambda\) is not a characteristic root, the final coefficient is nonzero and an exponential-polynomial trial of the same polynomial degree can be solved from highest power downward. If it is a simple root, the constant term in the shifted operator vanishes; one extra integration means multiplying the trial by t. A double root removes both the constant and first-derivative terms; multiply by \(t^2\). This reasoning applies to complex exponential bookkeeping as well, with real and imaginary parts giving the real sinusoidal trials.

The factor t does not indicate a change in the forcing. It repairs a trial space that otherwise lies in the kernel of L. A trial duplicated from the homogeneous solution produces zero on the left, so no coefficient choice can match a nonzero right side.

**Worked Example 7.1 (a complete polynomial trial).** Solve
\[
y''-y=t^2,\qquad y(0)=0,\quad y'(0)=0.
\]
Use \(y_p=At^2+Bt+C\). Substitution gives \(-At^2-Bt+(2A-C)=t^2\), so A=-1, B=0, C=-2. The homogeneous part is \(C_1e^t+C_2e^{-t}\). The data yield \(C_1+C_2=2\), \(C_1-C_2=0\). Hence
\[
y=e^t+e^{-t}-t^2-2.
\]
Direct differentiation gives \(y''-y=t^2\); the two exponential coefficients are determined after the particular solution is found.

**Worked Example 7.2 (a resonant exponential).** For \(y''-3y'+2y=e^t\), the characteristic roots are 1 and 2. Trying \(Ae^t\) fails because it is homogeneous. The shifted operator at \(\lambda=1\) is \(u''-u'\). Take u=At; then \(u''-u'=-A\), so A=-1. A particular solution is \(-te^t\), and all solutions are \(C_1e^t+C_2e^{2t}-te^t\). Substitution confirms that the negative sign is necessary.

**Worked Example 7.3 (sine and cosine mix).** For \(y''+2y'+2y=\cos t\), try \(A\cos t+B\sin t\). The cosine coefficient is \(A+2B\) and the sine coefficient \(B-2A\). Solving \(A+2B=1\), \(B-2A=0\) gives A=1/5,B=2/5. Thus \(y_p=(\cos t+2\sin t)/5\). Trying only cosine would leave an unwanted sine term that could not be cancelled.

Undetermined coefficients is not a universal procedure. For forcing \(\tan t\), \(\log t\), or a measured continuous function, a finite derivative-stable trial family may not exist. Increasing the number of guessed terms without a reason is not a proof strategy. Variation of parameters gives a systematic integral construction instead.

## 3. Deriving variation of parameters

**Theorem 7.1 (variation of parameters).** Let p,q,f be continuous on I, and let \(y_1,y_2\) be a fundamental pair for the normalized homogeneous equation. With \(t_0\in I\) and \(W=y_1y_2'-y_1'y_2\), define
\[
u_1(t)=-\int_{t_0}^t\frac{y_2(s)f(s)}{W(s)}\,ds,\qquad
u_2(t)=\int_{t_0}^t\frac{y_1(s)f(s)}{W(s)}\,ds.
\]
Then \(y_p=u_1y_1+u_2y_2\) solves the forced equation and has \(y_p(t_0)=y_p'(t_0)=0\). Every solution is \(y_p+C_1y_1+C_2y_2\).

**Proof.** Abel's identity ensures W never vanishes on I, so all displayed integrands are continuous. The fundamental theorem gives
\[
u_1'y_1+u_2'y_2=0,\qquad
u_1'y_1'+u_2'y_2'=f.
\]
The first identity follows by cancellation; the second follows from the definition of W. Differentiating y_p, the first identity removes the derivatives of u from its first derivative:
\[
y_p'=u_1y_1'+u_2y_2'.
\]
Differentiating again and substituting into L yields
\[
L[y_p]=u_1L[y_1]+u_2L[y_2]+u_1'y_1'+u_2'y_2'=f.
\]
Although u need initially only be \(C^1\), this expression for \(y_p'\) is differentiable, proving \(y_p\) is \(C^2\), as a classical solution requires. The definite integrals vanish at \(t_0\), so both initial values vanish. The affine-family argument proves the last assertion. \(\square\)

The construction can also be discovered rather than merely verified. Start with \(y=u_1y_1+u_2y_2\) and impose the simplifying condition \(u_1'y_1+u_2'y_2=0\). The differential equation then asks for \(u_1'y_1'+u_2'y_2'=f\). These two equations have determinant W, so elimination yields exactly the two derivatives above. The extra condition is a choice of representation, not an extra condition imposed on the original solution.

No individual homogeneous solution needs to remain nonzero. The denominator is the Wronskian, not \(y_1\) or \(y_2\). For the sine-cosine fundamental pair, individual zeros therefore cause no singularity in variation of parameters. The interval restriction still matters if the normalized coefficients or forcing are singular.

## 4. The response kernel

Combine the two definite integrals into one:
\[
y_p(t)=\int_{t_0}^t
\frac{y_2(t)y_1(s)-y_1(t)y_2(s)}{W(s)}f(s)\,ds.
\]
The factor multiplying f is a response kernel. For fixed s, it solves the homogeneous equation in t, has value zero at t=s, and has t-derivative one there. These claims follow by direct substitution and the Wronskian identity. They explain why an input applied near s contributes to later displacement through a free-motion response starting with a unit velocity.

For \(y''+\omega^2y=f(t)\), choose \(y_1=\cos\omega t,y_2=\sin\omega t\), with \(\omega>0\). Here W=\(\omega\), and the sine difference formula gives
\[
y_p(t)=\frac1\omega\int_{t_0}^t
\sin(\omega(t-s))f(s)\,ds.
\]
The integral encodes the input history. Replacing f(s) by its present value f(t) inside it generally changes the solution. This is the continuous analogue of accumulating weighted contributions from earlier times.

**Worked Example 7.4 (nonelementary forcing still gives an exact solution).** On \(t>0\), solve \(y''+y=\log t\) with \(y(1)=y'(1)=0\). The kernel formula gives
\[
y(t)=\int_1^t\sin(t-s)\log s\,ds.
\]
The integral is legal for every positive t. Differentiation under a finite integral gives \(y'=\int_1^t\cos(t-s)\log s\,ds\) because the first boundary term is zero. Differentiating again gives \(y''=\log t-\int_1^t\sin(t-s)\log s\,ds\), proving the equation. Both integrals vanish at t=1. There is no need to pretend that an elementary antiderivative is available.

The kernel also gives a finite-time bound. If \(|f(s)|\le M\) between \(t_0\) and t in the oscillator example, then \(|y_p(t)|\le M|t-t_0|/\omega\). This estimate is often crude but holds for every continuous forcing within the stated bound. Cancellations may produce a smaller response; the inequality is a guarantee, not an exact amplitude formula.

## 5. Initial conditions and piecewise forcing

After finding a particular solution, impose initial data on the whole solution. If the particular solution uses integrals from the initial time, its zero initial data make this especially simple: the homogeneous constants fit the prescribed value and derivative directly. With indefinite antiderivatives, absorbed homogeneous terms are harmless but can make the constant equations look different.

If forcing jumps finitely many times, solve on the open pieces and match y and y' continuously when the equation contains no impulse. On either side the equation holds classically, while at the jump the second derivative may have incompatible one-sided limits. Call the result a piecewise classical solution, rather than claiming a globally \(C^2\) solution with discontinuous acceleration. The Laplace chapter will organize these switches using step functions.

A force concentrated at a single instant is a different idealization. It may cause a velocity jump and requires an impulse or distributional interpretation. Merely assigning a large value to an ordinary forcing at one point has zero effect on its integral response. Point values and concentrated mass are not interchangeable concepts.

## The response formula also controls perturbations

On a fixed compact regular time interval, the response kernel is continuous on the triangle between the initial time and the final time, so its absolute value has a finite bound \(C\). Two solutions with the same initial data but forcing difference \(r\) then satisfy
\[
 |y(t)-\widetilde y(t)|\le C\int_{t_0}^t|r(s)|\,ds
 \quad(t\ge t_0).
\]
The formula follows by subtracting their definite-integral responses; it is not an extra approximation theorem. A small integrated forcing error therefore gives a small displacement error on that fixed interval. The constant may depend on its length and the coefficients, so the estimate alone does not claim uniform control over arbitrarily long times. For an unstable homogeneous equation the kernel can grow rapidly. For an oscillator it can remain bounded while persistent resonant input accumulates. The bound identifies the input quantity being controlled before one interprets a numerical forcing error or a short pulse.

## Exercises

### Exercise 7.1 {#forcing-variation-parameters-ex-1}

Find a particular solution of \(y''+y=4\).

<details><summary>Hint 1</summary>

Try a constant.

</details>
<details><summary>Hint 2</summary>

Both derivative terms then vanish.

</details>
<details><summary>Solution</summary>

Taking \(y_p=4\) gives \(y_p''+y_p=4\). The general solution is \(4+A\cos t+B\sin t\).

</details>

### Exercise 7.2 {#forcing-variation-parameters-ex-2}

Find a particular solution of \(y''-y=3t\).

<details><summary>Hint 1</summary>

Use a full linear polynomial.

</details>
<details><summary>Hint 2</summary>

Its second derivative is zero.

</details>
<details><summary>Solution</summary>

For \(y_p=At+B\), substitution gives \(-At-B=3t\). Thus A=-3,B=0, so \(y_p=-3t\).

</details>

### Exercise 7.3 {#forcing-variation-parameters-ex-3}

Solve \(y''+y=\sin2t\), \(y(0)=y'(0)=0\).

<details><summary>Hint 1</summary>

The forcing frequency is not the natural frequency.

</details>
<details><summary>Hint 2</summary>

A particular solution is a multiple of \(\sin2t\); its derivative affects the initial sine coefficient.

</details>
<details><summary>Solution</summary>

Substitution gives \(y_p=-\sin2t/3\). Then \(y=A\cos t+B\sin t-\sin2t/3\). The data give A=0 and B=2/3. Hence \(y=(2\sin t-\sin2t)/3\).

</details>

### Exercise 7.4 {#forcing-variation-parameters-ex-4}

Find a particular solution of \(y''-2y'+y=e^t\).

<details><summary>Hint 1</summary>

The forcing exponent is a double characteristic root.

</details>
<details><summary>Hint 2</summary>

Use \(y=e^tu\), reducing the equation to \(u''=1\).

</details>
<details><summary>Solution</summary>

Take \(u=t^2/2\). Then \(u''=1\), so \(y_p=t^2e^t/2\). A single factor t would still give a homogeneous function and could not match the forcing.

</details>

### Exercise 7.5 {#forcing-variation-parameters-ex-5}

Derive the shift identity for \(L=D^2+pD+q\).

<details><summary>Hint 1</summary>

Differentiate \(e^{\lambda t}u\) twice.

</details>
<details><summary>Hint 2</summary>

Collect the coefficients of u'', u' and u separately.

</details>
<details><summary>Solution</summary>

The derivatives are \(e^{\lambda t}(u'+\lambda u)\) and \(e^{\lambda t}(u''+2\lambda u'+\lambda^2u)\). Adding p times the first derivative and q times the original gives \(e^{\lambda t}[u''+(2\lambda+p)u'+(\lambda^2+p\lambda+q)u]\), as asserted.

</details>

### Exercise 7.6 {#forcing-variation-parameters-ex-6}

Using the fundamental pair \(1,t\), recover the zero-data solution of \(y''=f(t)\) at \(t_0=0\).

<details><summary>Hint 1</summary>

The Wronskian equals one.

</details>
<details><summary>Hint 2</summary>

Combine the two parameter integrals into one kernel.

</details>
<details><summary>Solution</summary>

The formula gives \(y=-\int_0^t s f(s)\,ds+t\int_0^t f(s)\,ds=\int_0^t(t-s)f(s)\,ds\). Differentiating gives \(y'=\int_0^t f\), \(y''=f\), and both initial values are zero.

</details>

### Exercise 7.7 {#forcing-variation-parameters-ex-7}

For \(2y''+2y=6\cos2t\), find a particular solution.

<details><summary>Hint 1</summary>

Normalize the leading coefficient first.

</details>
<details><summary>Hint 2</summary>

The normalized forcing is \(3\cos2t\).

</details>
<details><summary>Solution</summary>

The normalized equation is \(y''+y=3\cos2t\). A trial \(A\cos2t\) gives \(-3A=3\), so \(y_p=-\cos2t\). Substitution in the original gives \(8\cos2t-2\cos2t=6\cos2t\), verifying the scale.

</details>

### Exercise 7.8 {#forcing-variation-parameters-ex-8}

For \(y''+y=\tan t\) on \((-\pi/2,\pi/2)\), write the particular solution with zero data at zero as a definite integral.

<details><summary>Hint 1</summary>

Use the oscillator response kernel with frequency one.

</details>
<details><summary>Hint 2</summary>

Keep the forcing evaluated at the integration variable.

</details>
<details><summary>Solution</summary>

The required function is \(y(t)=\int_0^t\sin(t-s)\tan s\,ds\). The forcing is continuous on the stated interval, so Theorem 7.1 establishes the equation and both zero data. The endpoint singularities are excluded; the formula does not declare a regular solution across them.

</details>

### Exercise 7.9 {#forcing-variation-parameters-ex-9}

Why does adding a homogeneous solution to \(y_p\) not change its forcing?

<details><summary>Hint 1</summary>

Use linearity of L.

</details>
<details><summary>Hint 2</summary>

The added term has image zero under L.

</details>
<details><summary>Solution</summary>

If \(L[y_p]=f\) and \(L[h]=0\), then \(L[y_p+h]=f+0=f\). The particular representative changes, but the full affine family remains the same.

</details>

### Exercise 7.10 {#forcing-variation-parameters-ex-10}

Prove that the variation-of-parameters particular solution has zero initial velocity at its lower integration limit.

<details><summary>Hint 1</summary>

Use the simplifying identity on \(u_1',u_2'\).

</details>
<details><summary>Hint 2</summary>

Then \(y_p'=u_1y_1'+u_2y_2'\).

</details>
<details><summary>Solution</summary>

The terms \(u_1'y_1+u_2'y_2\) cancel, leaving the displayed derivative. Both u integrals vanish at the common lower limit, so \(y_p'(t_0)=0\). Their vanishing also gives \(y_p(t_0)=0\).

</details>

### Exercise 7.11 {#forcing-variation-parameters-ex-11}

If \(|f|\le5\) on [0,T], bound the zero-data response of \(y''+4y=f\).

<details><summary>Hint 1</summary>

The kernel is \(\sin(2(t-s))/2\).

</details>
<details><summary>Hint 2</summary>

Bound its sine factor by one before integrating.

</details>
<details><summary>Solution</summary>

For \(0\le t\le T\), \(|y(t)|\le(1/2)\int_0^t5\,ds=5t/2\le5T/2\). This is a uniform finite-time bound; it does not assert that every forcing reaches that amplitude.

</details>

### Exercise 7.12 {#forcing-variation-parameters-ex-12}

For \(y''+y=H_1(t)\) with zero initial data, find the piecewise classical solution for \(t\ge0\), where \(H_1\) switches from zero to one at t=1.

<details><summary>Hint 1</summary>

Before the switch the zero solution satisfies the data.

</details>
<details><summary>Hint 2</summary>

After the switch solve the constant-forcing equation with zero value and derivative at the switch.

</details>
<details><summary>Solution</summary>

For \(0\le t\le1\), y=0. For \(t\ge1\), \(y=1-\cos(t-1)\). These pieces match y and y' at one. Their second derivatives have different one-sided values there, so the solution is piecewise classical rather than globally \(C^2\). The assigned forcing value at the switching instant does not remove that distinction.

</details>

## Sources

Original exposition informed by the unchanged Calculus chapter 27. Jiří Lebl's author-written [Nonhomogeneous equations](https://www.jirka.org/diffyqs/html/sec_nonhom.html) provides a reference for the two methods. The variation formula and its hypotheses are derived here; the seed is not copied into this chapter.

## Summary

A forced linear equation has one particular solution plus the full homogeneous family. Derivative-stable forcing suggests undetermined coefficients, and characteristic-root multiplicity determines the necessary powers of t. Variation of parameters works for continuous forcing with a nonzero Wronskian on a regular interval and gives exact definite-integral responses. Initial conditions belong to the total solution. Finite jumps require piecewise interpretation, while impulses are a different mathematical model. The next chapter applies these tools to oscillation and resonance.
