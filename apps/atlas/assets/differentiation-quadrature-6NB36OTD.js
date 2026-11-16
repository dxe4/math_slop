var e=`---
parent_id: book-numerical-mathematics-error-algorithms
chapter_id: differentiation-quadrature
title: "Numerical Differentiation and Quadrature"
level: advanced-undergraduate
status: draft
estimated_minutes: 110
license: CC BY-SA 4.0
---

# Numerical Differentiation and Quadrature

## Local prerequisites and governing tension

Assume Taylor expansion, definite integrals, and floating-point basics. Differentiation amplifies small-scale variation; integration averages it. Yet both methods must balance truncation, rounding, and data error.

## Finite differences from Taylor's theorem

For sufficiently smooth \\(f\\),

\\(f(x+h)=f(x)+h f'(x)+h^{2} f''(\\xi)/2\\)

for some nearby \\(\\xi\\). Therefore the forward difference

\\(D_h^+ f(x)=[f(x+h)-f(x)]/h\\)

has truncation error bounded by \\(h \\max\\lvert f''\\rvert/2\\). Expanding at \\(x+h\\) and \\(x-h\\) and subtracting gives the centered difference

\\(D_h^{0} f(x)=[f(x+h)-f(x-h)]/(2h)\\),

with error of order \\(h^{2}\\) when a third derivative is bounded.

The order statement assumes exact function values. If each value has absolute error at most \\(\\epsilon\\), differencing can contribute error of order \\(\\epsilon/h\\). A simplified total bound is

\\(C_1 h^p + C_2 \\epsilon/h\\).

Making \\(h\\) smaller first helps, then hurts. The optimal scale depends on derivative size, input scale, and evaluation error; it is not always machine epsilon.

### Worked step balance

**Example 7.0 (A truncation-versus-noise balance).**

Suppose a centered difference has truncation bound \\(h^{2}/6\\) and value errors produce at most \\(10^{-12}/h\\). Minimizing \\(h^{2}/6+10^{-12}/h\\) gives derivative \\(h/3-10^{-12}/h^{2}=0\\), hence \\(h^{3}=3\\times10^{-12}\\) and \\(h\\) about \\(1.44\\times10^{-4}\\). The calculation is a model-based choice, not proof that every function prefers that step.

## Richardson extrapolation

If \\(D(h)=f'(x)+C h^p+\\mathcal O(h^{p+1})\\), combine two scales to cancel the leading term:

\\(D_{ext}=[2^p D(h/2)-D(h)]/(2^p-1)\\).

The method relies on being in the asymptotic regime and having a stable error expansion. A table that fails to approach the predicted ratio warns of nonsmoothness, rounding, or an incorrect implementation.

## Quadrature as weighted sampling

A quadrature rule approximates

\\(\\int_a^b f(x) dx\\) by \\(\\sum_i w_i f(x_i)\\).

Its **degree of exactness** is the largest \\(d\\) for which it integrates every polynomial of degree at most \\(d\\) exactly in exact arithmetic.

The midpoint and trapezoidal rules both use one interval. The trapezoidal rule is exact for linear functions; Simpson's rule combines endpoint and midpoint values with weights \\((1,4,1)/6\\) and is exact through degree three.

### Deriving the trapezoidal error sign

For a twice continuously differentiable function on \\([a,b]\\), the one-panel trapezoidal error has form

\\(\\int f - T = -(b-a)^{3} f''(\\xi)/12\\)

for some \\(\\xi\\). Thus for convex \\(f\\), the secant lies above the graph and the trapezoidal estimate is too large. The geometric sign check is an independent audit of the formula.

For a composite rule with step \\(h\\), errors from panels combine. Under a bounded second derivative, composite trapezoidal error is bounded by \\((b-a)h^{2} \\max\\lvert f''\\rvert/12\\). Simpson's composite rule has order four under a bounded fourth derivative and an even number of subintervals.

### Worked composite trapezoid

**Example 7.5 (A retained quadrature calculation).**

Approximate \\(\\int_0^{1} x^{2} dx\\) using two equal panels. Values are \\(0,1/4,1\\); thus

\\(T_2=(1/2)[(0+1)/2+1/4]=3/8\\).

The exact answer is \\(1/3\\), so error \\(exact-estimate=-1/24\\), consistent with convexity and with the estimate being high. Refining to four panels reduces the magnitude by a factor of four for this quadratic, matching second-order behavior.

## Gaussian rules and orthogonality

With \\(n\\) carefully chosen interior nodes and weights, Gaussian quadrature integrates polynomials through degree \\(2n-1\\). The nodes are roots of an orthogonal polynomial for the weight and interval. The extra exactness comes from choosing nodes as well as weights; it does not mean an arbitrary nonsmooth function is integrated exactly.

Changing variables matters. Infinite intervals, endpoint singularities, and peaked functions often benefit from transformations that expose scale or regularity. The Jacobian factor is part of the integral and must not be dropped.

## Adaptive quadrature

An adaptive method compares nested estimates on an interval, accepts the interval if their difference meets a local budget, or subdivides it. For Simpson estimates, a common smooth-function model uses the difference between a parent estimate and two child estimates to approximate leading error.

A defensible adaptive algorithm records:

- accepted subintervals and their local estimates;
- the estimator and tolerance allocation;
- recursion or evaluation limits;
- nonfinite evaluations and singular points;
- total estimated error and whether every local request was met.

The estimator is not a theorem for arbitrary integrands. A function can vanish at every sampled node while being large between them. Deterministic adaptivity needs regularity assumptions or adversarial safeguards.

## Difficult integrands

- **Endpoint singularity:** split or transform; a derivative-based error formula may not apply.
- **Interior discontinuity:** split at the known point; otherwise cancellation can hide the jump.
- **Narrow peak:** locate the scale or use a change of variables; uniform samples may miss it.
- **Oscillation:** exploit phase structure or specialized rules; resolving every oscillation can be wasteful.
- **Improper tail:** truncate with a proved tail bound, then integrate the finite region.

Monte Carlo integration has error governed probabilistically by variance and sample count, not deterministic mesh order. It can be valuable in high dimension, but a confidence statement needs sampling assumptions and a reproducible generator design.

## Common errors

- Choosing the smallest representable \\(h\\) for differentiation.
- Quoting a rule's asymptotic order without its smoothness hypotheses.
- Treating an adaptive error estimate as guaranteed for every function.
- Hiding a transformation's Jacobian.
- Reporting agreement of nested rules as independent verification when both miss the same feature.

## Explicit assumptions for finite-difference error bounds

**Theorem 7.1 (First-derivative differences).** Let $h>0$. If $f\\in C^2[x,x+h]$ and $|f''|\\le M_2$, then the exact forward difference has error at most $M_2h/2$. If $f\\in C^3[x-h,x+h]$ and $|f'''|\\le M_3$, then the exact centered difference has error at most $M_3h^2/6$.

*Proof.* Taylor's theorem at $x$ gives $f(x+h)=f(x)+hf'(x)+h^2f''(\\xi)/2$. Divide its remainder by $h$ for the forward bound. For the centered bound, expand both $f(x+h)$ and $f(x-h)$ through their quadratic terms. Subtraction cancels the constant and quadratic contributions, while the two cubic remainders each have magnitude at most $M_3h^3/6$. Their difference divided by $2h$ therefore has magnitude at most $M_3h^2/6$. ∎

The central interval must belong to the function's domain. A formula crossing a singularity or evaluating outside a physical domain does not satisfy these hypotheses, however small its nominal step appears. At an endpoint, one-sided formulas have different weights and constants.

If supplied function values have deterministic absolute errors at most $\\eta$, a centered first difference adds error at most $\\eta/h$: the two numerator errors add in magnitude and are divided by $2h$. Independence is unnecessary for this worst-case bound. Treating them as independent random errors would instead be a different probabilistic model, and would not justify replacing this bound without saying so.

**Proposition 7.2 (A second-derivative difference).** If $f\\in C^4[x-h,x+h]$ with $|f^{(4)}|\\le M_4$, then
\\[
\\left|\\frac{f(x+h)-2f(x)+f(x-h)}{h^2}-f''(x)\\right|\\le\\frac{M_4h^2}{12}.
\\]
With independent or dependent deterministic value errors bounded by $\\eta$, their contribution is at most $4\\eta/h^2$.

*Proof.* Expand each off-centre value through its cubic term. Odd terms cancel in their sum, the quadratic contribution is $h^2f''(x)$, and the two fourth-order remainders have total magnitude at most $M_4h^4/12$. Divide by $h^2$. The absolute values of the three data coefficients are $1,2,1$, giving the separate noise bound. ∎

This stronger amplification explains why an apparently smooth measurement curve can give unreliable second derivatives. A stable implementation cannot recover information that the sampled data do not contain at the requested scale.

## Richardson cancellation and its cost

Suppose a centered difference has the smooth expansion
\\[
D_0(h)=f'(x)+c_2h^2+c_4h^4+o(h^4).
\\]
Such an expansion follows from sufficient differentiability near $x$, for example $f\\in C^5$ there. Substituting $h/2$ and subtracting gives
\\[
R(h)=\\frac{4D_0(h/2)-D_0(h)}3=f'(x)-\\frac14c_4h^4+o(h^4).
\\]
The leading second-order term cancels; fourth-order behavior is justified only under the expansion's regularity, not merely by the existence of a first derivative.

Written as value weights,
\\[
R(h)=\\frac{8f(x+h/2)-8f(x-h/2)-f(x+h)+f(x-h)}{6h}.
\\]
Consequently deterministic absolute value errors bounded by $\\eta$ contribute at most $3\\eta/h$. The higher formal order has a larger noise-amplification constant. Extrapolation is therefore not a promise of improvement at every step size.

**Example 7.3 (An exact cubic calculation).** Let $f(t)=t^3$ and differentiate at $x=1$. Direct expansion gives a forward difference $3+3h+h^2$, a centered difference $3+h^2$, and the extrapolated value exactly $3$ for every nonzero $h$. With $h=1/10$, the corresponding exact-arithmetic values are $3.31$, $3.01$, and $3$. The fine centered value at $h/2$ is $3.0025$, so $(4(3.0025)-3.01)/3=3$. This exact cancellation is particular to the polynomial model; it does not imply that rounded evaluations eliminate all error.

The following pseudocode specifies the same calculation, with expected outputs just established algebraically.

~~~text
INPUT: function f, interior point x, positive step h
coarse := (f(x+h)-f(x-h))/(2h)
fine := (f(x+h/2)-f(x-h/2))/h
extrapolated := (4*fine-coarse)/3
OUTPUT: coarse, fine, extrapolated
~~~

The function must be defined at all four off-centre points, and the stored increments must actually distinguish them. If rounding makes $x+h$ equal to $x$, a nominal Taylor analysis in real $h$ no longer describes the evaluated samples. A routine should report that loss of representable separation rather than silently divide a zero numerator by a requested but unrealized increment.

## Choosing a scale without claiming a universal optimum

For positive constants $A,B,\\eta$ and integer order $p>0$, the model $E(h)=Ah^p+B\\eta/h$ has derivative $pAh^{p-1}-B\\eta/h^2$. Its unique positive stationary point satisfies $h^{p+1}=B\\eta/(pA)$. The derivative is negative before that point and positive after it, so it is the model's minimum. The balance depends on derivative magnitudes, measurement error, units, and evaluation accuracy. Setting every step to one fixed machine constant ignores that dependence.

For a second derivative, a model $Ah^2+B\\eta/h^2$ instead has optimum $h^4=B\\eta/A$. Changing the derivative order changes the noise pathway and the balance. A practical error budget should also include uncertainty in the input location and in any parameters used to evaluate $f$.

## Complex-step differentiation is conditional

If a real-valued function on a real interval has a holomorphic extension near $x$, its complex Taylor expansion gives
\\[
\\frac{\\operatorname{Im}f(x+ih)}h=f'(x)-\\frac{h^2}{6}f'''(x)+O(h^4)
\\]
under sufficient analytic neighbourhood assumptions. This avoids subtracting two nearby real function values, but only if the implemented function really follows that analytic extension and preserves the relevant imaginary arithmetic. Absolute values, conjugation, clipping, and branch-dependent real logic can invalidate it.

**Example 7.4 (A valid complex step and an invalid extension).** For the polynomial $f(z)=z^3$ at $x=1$,
\\[
(1+ih)^3=(1-3h^2)+i(3h-h^3),
\\]
so the complex-step estimate is $3-h^2$. At $h=1/10$ this is $2.99$, with the expected second-order error. In contrast, a routine evaluating $|z|$ always returns a real number. At real $x=1$, its complex-step numerator is zero, although the real function $|x|$ has derivative one there. The failure is the nonholomorphic implemented extension, not an argument against Taylor's theorem.

The retained quadrature sections earlier in this chapter give the original differentiation–integration bridge. The separate [Quadrature](quadrature.md) chapter develops Newton–Cotes, Romberg, and Gauss methods in full, while preserving the earlier material and its original exercises here.
## Derivative recovery as an information problem

The growth of the noise term is not merely a defect of one particular difference formula. Differentiation is not continuous in the uniform norm on unrestricted smooth functions. To see this, fix a positive amplitude $\\eta$ and consider the smooth perturbation $e_k(t)=\\eta\\sin(kt)$. Its absolute value never exceeds $\\eta$, whereas its derivative at zero is $\\eta k$, which has no bound independent of frequency. Uniformly accurate function values therefore do not determine a uniformly accurate derivative unless the permitted functions satisfy additional smoothness or frequency restrictions.

The same point can be made with a finite set of noiseless samples. A polynomial that vanishes at every sampling location can be added to a candidate function without changing any observed value. At a location where its derivative is nonzero, scaling that polynomial changes the derivative arbitrarily. If the derivative is required at a sampling location, use the product of all distinct sample factors: the root there is simple, so its derivative there is nonzero. More samples improve the information only after a class of admissible functions has been specified.

Regularisation supplies such a restriction explicitly. For instance, fitting a polynomial of fixed low degree over a wider window replaces exact pointwise differentiation by differentiation of a local model. This reduces sensitivity to high-frequency data error but introduces modeling bias when the true curve bends in a way the polynomial cannot represent. A smoothing parameter or window width is therefore part of the mathematical estimator, rather than an implementation detail that can be omitted from its description.

**Worked application: a slope measured in physical units.** Suppose temperature is observed with absolute uncertainty $\\eta$ at times separated by $2h$, and the third derivative has magnitude at most $M$ throughout that time window. The centered estimate has guaranteed error at most $Mh^2/6+\\eta/h$, measured in temperature per unit time. If time is re-expressed in minutes rather than seconds, both the step and derivative bound must be converted. Minimising the same physical budget gives $h^3=3\\eta/M$ when both constants are positive. This is a choice justified by the stipulated worst-case model; it does not estimate the unknown third-derivative bound from the same two measurements.

Before taking more samples, one should therefore state the intended derivative, the admissible regularity class, the error scale of the observations, and the physical region in which the assumptions hold. The calculation then has a clear target. Without that contract, decreasing the step can produce a longer table while weakening the accuracy guarantee.

## Practice with solutions

### Exercise 7.1
<a id="differentiation-quadrature-ex-1"></a>

**Exactness.**

Show Simpson's one-panel rule integrates \\(x^{3}\\) exactly on \\([-1,1]\\).

<details>
<summary>Hint 1</summary>

Use odd symmetry on the interval and the symmetric Simpson weights.

</details>
<details>
<summary>Hint 2</summary>

One polynomial check alone is less than a proof of full degree-three exactness.

</details>
<details>
<summary>Solution</summary>

**Solution.** The exact integral is zero by odd symmetry. Simpson samples at \\(-1,0,1\\) with symmetric endpoint weights, giving \\((-1+4\\cdot0+1)/3=0\\). Full degree-three exactness requires also checking a basis \\(1,x,x^{2},x^{3}\\) or deriving from interpolation.

</details>

### Exercise 7.2
<a id="differentiation-quadrature-ex-2"></a>

**Difference noise.**

Measurements have independent absolute uncertainty at most \\(\\eta\\). Bound uncertainty in a centered difference.

<details>
<summary>Hint 1</summary>

Take worst-case magnitudes of the two sample errors.

</details>
<details>
<summary>Hint 2</summary>

Divide their sum by the denominator $2h$.

</details>
<details>
<summary>Solution</summary>

**Solution.** Worst-case numerator uncertainty is at most \\(2\\eta\\); division by \\(2h\\) gives at most \\(\\eta/h\\). Smaller \\(h\\) amplifies measurement uncertainty.

</details>

### Exercise 7.3
<a id="differentiation-quadrature-ex-3"></a>

**Adaptive boundary.**

Why can a narrow bump defeat sampled error comparison?

<details>
<summary>Hint 1</summary>

Both sampled rules can miss the same unsampled region.

</details>
<details>
<summary>Hint 2</summary>

A continuous narrow bump can vanish at all finitely many nodes.

</details>
<details>
<summary>Solution</summary>

**Solution.** If both coarse and refined nodes miss the bump, both estimates agree near zero, so their difference is small although the true integral is not. A guarantee needs regularity or structural information that rules out unseen features.

</details>

### Exercise 7.4
<a id="differentiation-quadrature-ex-4"></a>

**Centred and extrapolated quartic differences.**

For $f(t)=t^4$ at one, compute the centered derivative formula and its Richardson extrapolation exactly.

<details>
<summary>Hint 1</summary>

Subtract the two fourth-power binomial expansions.

</details>
<details>
<summary>Hint 2</summary>

The centred result is $4+4h^2$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The numerator is $8h+8h^3$, so the centered quotient is $4+4h^2$. At half the step it is $4+h^2$. Richardson gives $[4(4+h^2)-(4+4h^2)]/3=4$, exact for this polynomial in exact arithmetic.

</details>

### Exercise 7.5
<a id="differentiation-quadrature-ex-5"></a>

**Combine truncation and value error.**

A centered first difference uses $h=0.01$, has $M_3=12$, and each supplied value has absolute error at most $10^{-8}$. Bound its total error under these assumptions.

<details>
<summary>Hint 1</summary>

Add the deterministic truncation and data-error bounds.

</details>
<details>
<summary>Hint 2</summary>

They are $M_3h^2/6$ and $\\eta/h$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The truncation bound is $12(10^{-4})/6=2\\times10^{-4}$ and the value-error bound is $10^{-8}/10^{-2}=10^{-6}$. Their sum is $2.01\\times10^{-4}$. This does not include extra errors from inaccurate input locations or unstated arithmetic effects.

</details>

### Exercise 7.6
<a id="differentiation-quadrature-ex-6"></a>

**Second-derivative noise.**

Derive the deterministic value-error contribution for $[f(x+h)-2f(x)+f(x-h)]/h^2$ when every value error is bounded by $\\eta$.

<details>
<summary>Hint 1</summary>

Use the absolute values of the three coefficients.

</details>
<details>
<summary>Hint 2</summary>

Their sum before division is four.

</details>
<details>
<summary>Solution</summary>

**Solution.** The perturbed numerator differs by at most $\\eta+2\\eta+\\eta=4\\eta$. Division by $h^2$ gives $4\\eta/h^2$. No independence assumption is needed; worst-case signs can attain the coefficient-sum bound.

</details>

### Exercise 7.7
<a id="differentiation-quadrature-ex-7"></a>

**Extrapolation noise.**

Show that the Richardson first-derivative formula in the chapter has value-error bound $3\\eta/h$.

<details>
<summary>Hint 1</summary>

Use the four explicit value weights.

</details>
<details>
<summary>Hint 2</summary>

The sum of their absolute numerators is eighteen.

</details>
<details>
<summary>Solution</summary>

**Solution.** The weights are $8,-8,-1,1$ divided by $6h$. Their absolute sum is $18/(6h)=3/h$, so data errors bounded by $\\eta$ contribute at most $3\\eta/h$. Cancelling a truncation term increased sensitivity to value noise.

</details>

### Exercise 7.8
<a id="differentiation-quadrature-ex-8"></a>

**A model step optimum.**

Minimize $Ah^2+B\\eta/h$ for positive $A,B,\\eta$ and $h>0$.

<details>
<summary>Hint 1</summary>

Differentiate with respect to the positive step.

</details>
<details>
<summary>Hint 2</summary>

Multiply the stationary equation by $h^2$.

</details>
<details>
<summary>Solution</summary>

**Solution.** The derivative is $2Ah-B\\eta/h^2$. It vanishes at $h^3=B\\eta/(2A)$. The derivative changes from negative to positive there, so this is the unique minimum. The result is a model-based scale, not a universal best step for every function or implementation.

</details>

### Exercise 7.9
<a id="differentiation-quadrature-ex-9"></a>

**A nonanalytic complex-step trap.**

At real $x=1$, compare the derivative of $|x|$ with the complex-step output of a routine returning the real complex modulus $|1+ih|$.

<details>
<summary>Hint 1</summary>

The real function agrees with $x$ near one.

</details>
<details>
<summary>Hint 2</summary>

The complex modulus is real, so its imaginary part is zero.

</details>
<details>
<summary>Solution</summary>

**Solution.** The real derivative is one, while the complex-step estimate is zero for every nonzero $h$. The modulus is not a holomorphic extension of that local real function. Therefore the analytic-extension hypothesis of complex-step differentiation fails.

</details>

### Exercise 7.10
<a id="differentiation-quadrature-ex-10"></a>

**An endpoint formula.**

For a function defined on $[0,\\infty)$, explain why a centered difference at zero is inadmissible. Derive the order of $[-3f(0)+4f(h)-f(2h)]/(2h)$ when $f\\in C^3[0,2h]$.

<details>
<summary>Hint 1</summary>

The centred formula would require a negative-domain input.

</details>
<details>
<summary>Hint 2</summary>

Expand the two positive samples through their quadratic terms.

</details>
<details>
<summary>Solution</summary>

**Solution.** A centered difference needs $f(-h)$, outside the domain. In the one-sided formula, Taylor expansion cancels the constant and second-derivative terms and leaves $2hf'(0)$ in the numerator. If $|f'''|\\le M$, the two remainder contributions are bounded by $(4/6+8/6)Mh^3$, giving an error at most $Mh^2$ after division. Thus it is a second-order one-sided approximation under the stated regularity.

</details>


<a id="chapter-conclusion"></a>
## Connections

Differentiate with a scale-aware truncation-versus-noise balance. Integrate with a rule whose exactness, smoothness assumptions, and estimator match the integrand. In both cases, refinement tables are evidence only when their expected regime is visible.

<a id="source-and-verification-note"></a>
## Sources

The original Euler differentiation and quadrature material, including all three original exercises and their solutions, is retained. Further reading: NIST [DLMF §3.4 Differentiation](https://dlmf.nist.gov/3.4) and [§3.5 Quadrature](https://dlmf.nist.gov/3.5), and Endre Süli and David F. Mayers, *An Introduction to Numerical Analysis*, Cambridge University Press, 2003. The finite-difference and extrapolation bounds used here are proved from Taylor's theorem. General Gaussian-rule and spectral analytic facts in the retained overview are developed or explicitly cited in the neighbouring chapters. Links consulted 13 November 2026. Original Euler prose is licensed CC BY-SA 4.0.

## Summary

Finite differences require smoothness on an admissible sampling interval and actual nonzero increments. Taylor remainders give explicit forward, centered, and second-derivative bounds, while coefficient sums expose noise amplification. Richardson cancellation raises formal order only under a valid expansion and can increase value-error sensitivity. Complex-step differentiation needs an analytic implemented extension. Step size is therefore chosen from a stated truncation, data, and arithmetic budget, rather than made as small as possible.
`;export{e as default};