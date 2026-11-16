var e=`---
parent_id: book-fourier-analysis
chapter_id: gibbs-phenomenon
title: "The Gibbs Phenomenon"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# The Gibbs Phenomenon

At a fixed continuity point, a piecewise smooth function's Fourier sums converge to its value. Near a jump, however, a persistent overshoot occurs at points that move toward the jump as the degree grows. The width shrinks while the height remains a fixed fraction of the jump. There is no contradiction: a fixed-point convergence theorem does not control a point whose location depends on degree.

Preparation is [Dirichlet Kernels and Pointwise Convergence](dirichlet-kernel-pointwise-convergence.md), including the precise periodic piecewise C1 class and local uniform convergence away from jumps. We keep period 2pi and the same normalized Fourier coefficients. The proofs below establish a local scaling profile, an exact positive overshoot constant and the range bound supplied by positive Fejér averaging.

## The theorem specifies a function class and a moving scale

Let a periodic function be C1 on finitely many pieces, with finite one-sided limits of the function and derivative. At a selected jump \\(x_0\\), write
\\[
 f_-=f(x_0-),\\quad f_+=f(x_0+),\\quad
 J=f_+-f_-,\\quad M=(f_++f_-)/2.
\\]
The jump is nonzero when \\(J\\ne0\\). Its isolated assigned value does not affect the coefficients.

**Definition 6.1 (Sine integral and Gibbs constant).** Put
\\[
 \\operatorname{Si}(y)=\\int_0^y\\frac{\\sin s}{s}ds,
 \\qquad \\gamma=\\frac{\\operatorname{Si}(\\pi)}\\pi-\\frac12.
\\]
The integrand is extended continuously by value one at zero. We will prove \\(\\gamma>0\\); its familiar approximate value is 0.08949. The exact integral expression, rather than a plotted decimal, defines the constant.

**Theorem 6.2 (Local Gibbs profile).** With \\(k_N=N+1/2\\),
\\[
 S_Nf\\left(x_0+\\frac y{k_N}\\right)
 \\longrightarrow M+\\frac J\\pi\\operatorname{Si}(y),
\\]
uniformly for \\(y\\) in any fixed bounded interval.

The domain is a shrinking neighbourhood in the original coordinate. Keeping \\(y\\) fixed is different from keeping \\(x\\ne x_0\\) fixed. The same limit at \\(y=0\\) is \\(M\\), agreeing with Dirichlet's fixed-jump theorem. For positive \\(y\\), the original function's neighbouring values approach \\(f_+\\), yet the Fourier profile need not equal that value.

## A canonical jump yields a Riemann sum

Define the periodic sawtooth \\(q(x)=(\\pi-x)/2\\) for \\(0<x<2\\pi\\), with any finite assignment at zero. It has right limit \\(\\pi/2\\), left limit \\(-\\pi/2\\), jump \\(\\pi\\), and midpoint zero. Direct coefficient integration gives
\\[
 S_Nq(x)=\\sum_{n=1}^N\\frac{\\sin(nx)}n.
\\]
Consequently
\\[
 S_Nq(y/k_N)=\\frac1{k_N}\\sum_{n=1}^N
 \\frac{\\sin(y n/k_N)}{n/k_N}.
\\]
This is a Riemann sum for \\(\\int_0^1\\sin(yt)/t\\,dt=\\operatorname{Si}(y)\\). At \\(t=0\\) the quotient is assigned value \\(y\\). It is jointly continuous on every compact set of bounded \\(y\\) and \\(0\\le t\\le1\\), so its common modulus of continuity makes the Riemann-sum convergence uniform in that bounded \\(y\\)-range. The last subinterval endpoint tends to one; the missing interval length tends to zero and its integrand is uniformly bounded.

*Proof of Theorem 6.2.* Subtract the canonical jump: \\(h(x)=f(x)-(J/\\pi)q(x-x_0)\\). Its two side limits at \\(x_0\\) both equal \\(M\\). Assign \\(h(x_0)=M\\), a finite-point change leaving all coefficients unchanged. The remainder is continuous and piecewise C1 near that point, while any other jumps stay a positive distance away. The local uniform theorem makes \\(S_Nh-h\\) tend uniformly to zero on a small closed arc around \\(x_0\\). Continuity makes \\(h(x_0+y/k_N)\\to M\\) uniformly for bounded \\(y\\). Add the canonical Riemann-sum limit just proved, multiplied by \\(J/\\pi\\). This proves the claimed uniform profile. ∎

The decomposition shows why the jump size, not distant waveform details, determines the leading local effect. Remote jumps remain in the locally continuous remainder and their oscillatory contribution vanishes uniformly on the small arc. The proof does not claim that every rough integrable function has this profile: the stated local and global regularity made the remainder convergence available.

## The overshoot constant is positive

**Lemma 6.3 (Dirichlet integral).** The ordinary improper integral \\(\\int_0^\\infty\\sin s/s\\,ds\\) exists and equals \\(\\pi/2\\).

*Proof.* Integration by parts with the decreasing weight \\(1/s\\) bounds its tail from \\(R\\) by \\(2/R\\), proving convergence. For \\(a>0\\), damp the integral by \\(e^{-as}\\). Differentiate the absolutely convergent expression \\(\\int_0^\\infty e^{-as}\\sin(bs)/s\\,ds\\) with respect to \\(b\\). Its derivative is \\(\\int_0^\\infty e^{-as}\\cos(bs)ds=a/(a^2+b^2)\\), obtained from the elementary exponential integral. Integrating from \\(b=0\\) to one gives \\(\\arctan(1/a)\\).

The damped tail is also bounded by \\(2/R\\), uniformly in \\(a\\ge0\\), since \\(e^{-as}/s\\) is decreasing and its derivative has total variation equal to its value at \\(R\\). On a fixed finite interval the damped integrand tends uniformly after its removable zero value is filled in. Thus the damped integrals tend to the ordinary improper integral as \\(a\\downarrow0\\). Their arctangent values tend to \\(\\pi/2\\), proving the identity. ∎

The tail beginning at \\(\\pi\\) is negative. Its successive half-wave absolute integrals strictly decrease, because translating one half-wave right by \\(\\pi\\) increases its denominator while preserving its absolute sine numerator. The alternating tail begins with a negative term of greater magnitude than the next positive term, so its sum is strictly negative. Hence \\(\\operatorname{Si}(\\pi)>\\pi/2\\), proving \\(\\gamma>0\\).

For an upward jump, the derivative of the limiting profile is \\((J/\\pi)\\sin y/y\\). It is positive between zero and \\(\\pi\\), and negative between \\(\\pi\\) and \\(2\\pi\\). The first profile maximum is therefore at \\(y=\\pi\\), with value
\\[
 M+\\frac J\\pi\\operatorname{Si}(\\pi)=f_++J\\gamma.
\\]
A downward jump reverses the signs. The corresponding overshoot or undershoot magnitude is \\(|J|\\gamma\\), approximately 8.949 percent of the jump magnitude, not automatically that percentage of either plateau value.

Uniform convergence of profiles on a compact neighbourhood of \\(\\pi\\) also makes the maxima on that neighbourhood converge to this value. It does not require us to claim every finite-degree perturbed waveform has exactly one critical point at exactly \\(\\pi/k_N\\).

## Concrete jumps and their different normalizations

**Worked example 6.4 (A unit-height step).** Periodically take zero on \\((-\\pi,0)\\) and one on \\((0,\\pi)\\). At zero, \\(J=1\\), \\(M=1/2\\). The local profile is \\(1/2+\\operatorname{Si}(y)/\\pi\\), whose first upper peak tends to \\(1+\\gamma\\). Its absolute overshoot above one is \\(\\gamma\\). At the jump itself the partial sums approach one half regardless of the isolated assignment.

**Worked example 6.5 (The square-wave percentage).** For levels minus one and one, the jump is two and midpoint zero. The profile is \\((2/\\pi)\\operatorname{Si}(y)\\), with upper peak \\(1+2\\gamma\\), approximately 1.17898. Its excess above the positive plateau is about 17.898 percent of that plateau, while still only 8.949 percent of the full jump. Quoting the percentage without its denominator changes the meaning.

**Worked example 6.6 (An exact finite-degree peak location).** For the canonical sawtooth,
\\[
 (S_Nq)'(x)=\\sum_{n=1}^N\\cos(nx)
 =\\frac{\\sin(Nx/2)\\cos((N+1)x/2)}{\\sin(x/2)}.
\\]
The first positive zero is \\(x_N=\\pi/(N+1)\\), where the derivative changes from positive to negative. This is the exact first maximum for that particular polynomial. Its scaled coordinate \\(k_Nx_N\\) tends to \\(\\pi\\), so the uniform profile theorem gives peak height tending to \\(\\operatorname{Si}(\\pi)\\). The exact location differs slightly from the simpler asymptotic scale \\(\\pi/(N+1/2)\\), which was never an exact finite-degree assertion.

For a jump from two to five, the same theorem predicts peak limit \\(5+3\\gamma\\). Adding a constant changes the midpoint; multiplying a function changes its jump and overshoot by the same factor. The normalized fraction depends on neither operation. This is a local theorem for an isolated jump, not a universal statement about the global largest maximum of an arbitrary waveform.

## A finite-degree bound for the canonical profile

The canonical Riemann-sum proof also gives an explicit error estimate, useful when a finite graph is compared with the limiting curve.

**Proposition 6.7 (Canonical scaling error).** For real \\(y\\) and positive \\(N\\),
\\[
 |S_Nq(y/k_N)-\\operatorname{Si}(y)|
 \\le\\frac{|y|^3}{6k_N}+\\frac{|y|}{2k_N}.
\\]

*Proof.* Write \\(F_y(t)=\\sin(yt)/t\\), with its continuous value at zero. Its modulus is at most \\(|y|\\). For positive \\(t\\),
\\[
 F_y'(t)=\\frac{yt\\cos(yt)-\\sin(yt)}{t^2}.
\\]
The numerator equals minus the integral of \\(s\\sin s\\) from zero to \\(yt\\), whose modulus is at most \\(|yt|^3/3\\). Thus the derivative is bounded by \\(|y|^3/3\\) on the unit interval. The right-endpoint Riemann error on each mesh interval of length \\(1/k_N\\) is at most half that derivative bound times the mesh length squared. Summing the N intervals gives at most \\(|y|^3/(6k_N)\\). The uncovered interval from \\(N/k_N\\) to one has length \\(1/(2k_N)\\) and contributes at most \\(|y|/(2k_N)\\). Add the two bounds. ∎

This controls the canonical jump part at finite degree. For a general waveform, the continuous remainder has its own local uniform convergence error, and no rate for that remainder was claimed without quantitative regularity data. A universal limiting fraction does not imply a universal finite-degree error constant for every piecewise smooth input.

The constant itself also has a purely analytic approximation certificate. Integrating the uniformly convergent sine power series on a finite interval gives
\\[
 \\operatorname{Si}(y)=\\sum_{m=0}^\\infty
 \\frac{(-1)^m y^{2m+1}}{(2m+1)(2m+1)!}.
\\]
At \\(y=\\pi\\), the positive term magnitudes decrease to zero, as their explicit successive ratio shows. The alternating-series error is bounded by the first omitted term. Thus finite sums with that bound can enclose the exact Gibbs constant as accurately as desired. This is an error theorem for a specified approximation, not a claim that reading a decimal from an overshoot plot establishes the value.

## Shrinking width is compatible with convergence

On a bounded scaled interval \\(|y|\\le C\\), the profile theorem supplies a common bound on \\(S_Nf(x_0+y/k_N)\\). The original function is bounded too. Thus the square-integral error over \\(|x-x_0|\\le C/k_N\\) is at most a constant times \\(1/k_N\\), and tends to zero. A fixed nonzero local error height can therefore occupy vanishing spatial length and contribute vanishing mean-square error.

This does not alone prove global mean-square convergence; the density theorem has that separate job. It explains why mean-square reconstruction, fixed-point convergence and a moving overshoot are mutually compatible. Uniform convergence across a genuine jump is impossible because a uniform limit of continuous polynomials would be continuous.

For physical period \\(P\\), replace the angular coordinate by \\(2\\pi x/P\\). The first profile peak lies at distance asymptotic to \\(P/(2k_N)\\) from the jump. Increasing the number of modes narrows the region but does not remove its limiting fractional height. Sampling more densely to display the same polynomial reveals its shape more accurately; it does not add new retained modes or alter the kernel.

## Positive averaging changes the reconstruction

The Fejér mean is \\(\\sigma_Nf=(N+1)^{-1}\\sum_{k=0}^NS_kf\\). Its kernel is
\\[
 F_N(t)=\\frac1{N+1}\\left|\\sum_{j=0}^Ne^{ijt}\\right|^2\\ge0.
\\]
Expanding the square counts each frequency with weight \\(1-|n|/(N+1)\\), exactly the average of the Dirichlet kernels. Its normalized integral is one. Therefore if a real function lies between \\(a\\) and \\(b\\), every Fejér reconstruction lies between the same global bounds. In particular a two-level step has no overshoot outside its two-level range under this averaging, at any degree.

At a fixed point, the arithmetic means preserve any existing Dirichlet limit. To prove this, split their average error into finitely many early terms divided by \\(N+1\\) and later terms already uniformly small. Thus the jump average remains the limit. The full approximate-identity theorem for continuous functions is developed in the Fejér chapter; positivity and mass one already establish the range statement used here.

Averaging is not the same finite orthogonal projection. For a single allowed mode \\(e^{imx}\\), raw partial sums reproduce it exactly once \\(N\\ge|m|\\), whereas Fejér multiplies it by \\(1-|m|/(N+1)\\), creating nonzero finite-degree mean-square error. Removing signed overshoot changes the criterion and weights; it does not make every approximation error smaller in every norm.

Gibbs is also distinct from aliasing. It occurs for exact continuous Fourier coefficients before any samples are taken. Aliasing identifies frequencies on a sampling grid and is analyzed by the discrete transform. An FFT changes how efficiently a finite transform is evaluated; by itself it changes neither the chosen truncation nor its overshoot theorem.

## The moving profile gives a quantitative mean-square lower bound

The local theorem yields more than compatibility with vanishing integrated error. Fix A>0, let kN=N+1/2, and write the jump as J=f(x0+)−f(x0−), with midpoint M. On the moving coordinate y=kN(x−x0), the partial sum tends uniformly for |y|≤A to G(y)=M+(J/π)Si(y). The original function tends on the positive half to M+J/2 and on the negative half to M−J/2. Finite-piece C1 regularity makes these one-sided approximations uniform up to an error O(A/kN); the value at the one isolated jump point does not affect an integral.

Changing variables in the local squared error and passing to the limit therefore gives

\\[
 k_N\\int_{x_0-A/k_N}^{x_0+A/k_N}|S_Nf(x)-f(x)|^2dx
 \\longrightarrow
 C_A:=\\int_{-A}^A
 \\left|\\frac J\\pi\\operatorname{Si}(y)-\\frac J2\\operatorname{sgn}y\\right|^2dy.
\\]

To justify passage, use uniform profile convergence and the bounded one-sided data on each half. Squared differences then converge uniformly there after ignoring a single endpoint assignment, so their finite Riemann integrals converge. This requires no general almost-everywhere convergence theorem.

When J is nonzero, CA is positive for every A>0. As y decreases to zero from the right, the expression inside the absolute value tends to −J/2; continuity of Si makes its magnitude bounded below on a sufficiently short positive interval. The integral therefore has a strictly positive contribution. It follows that, for sufficiently large N, the global unnormalized squared error is at least CA/(2kN). Dividing by 2π gives the corresponding normalized periodic bound.

Consequently the ordinary Fourier projection error cannot be little-o of N^−1/2 in norm for a target with such a jump. Since that projection minimizes the degree-N square error, no other trigonometric polynomial of that degree can have a smaller global error than it. The lower bound is about fixed-degree approximation of the stated discontinuous target, not about changing the target, adopting a nonlinear representation or measuring error only away from the jump.

Thus the overshoot's moving-scale profile provides both an upper local order and a positive lower order for its mean-square contribution. It connects the visible narrowing region to a proved approximation-rate obstruction, while remaining consistent with mean-square convergence as N tends to infinity.

## Transferred measure-based companion

The following original sections have moved from the Real Analysis Fourier continuation. Their Lebesgue L2 and null-equivalence formulation assumes the measure and density inputs stated in the retained text; the main elementary/completion proofs above retain their own preparation. Original section numbers are preserved.

## 6. Gibbs phenomenon

Near a jump discontinuity, Fourier partial sums develop oscillatory overshoots whose width shrinks but whose relative height does not vanish. This is the **Gibbs phenomenon**.

It does not contradict \\(L^2\\) convergence: a bounded-amplitude error confined to a shrinking interval can have vanishing squared integral. Nor does it contradict pointwise convergence away from the jump. It demonstrates that visual and uniform accuracy are stronger than mean-square accuracy.

Filtering or averaging coefficients can reduce ringing, but changes the approximation operator and its resolution. A responsible visualization labels which summation method is used.

## Exercises

### Exercise 6.1 {#gibbs-phenomenon-ex-1}

For a jump from minus two to four, compute the midpoint, jump and limiting first upper peak.

<details><summary>Hint 1</summary>
Use the difference and average of the one-sided values.
</details>
<details><summary>Hint 2</summary>
The peak is the upper value plus jump times gamma.
</details>
<details><summary>Solution</summary>
The midpoint is one and the upward jump is six. The profile is \\(1+(6/\\pi)\\operatorname{Si}(y)\\), and its first upper peak tends to \\(4+6\\gamma\\). The overshoot fraction is \\(\\gamma\\) of six, not of four. The fixed jump-point limit is one, independent of the isolated assigned value.
</details>

### Exercise 6.2 {#gibbs-phenomenon-ex-2}

Why does subtracting the canonical sawtooth remove the selected jump?

<details><summary>Hint 1</summary>
Its own jump is pi and its two side values are opposite.
</details>
<details><summary>Hint 2</summary>
Scale it by the target jump divided by pi.
</details>
<details><summary>Solution</summary>
The subtracted right-side contribution is \\(J/2\\), while the left-side contribution is \\(-J/2\\). Thus the remainder limits become \\(f_+-J/2\\) and \\(f_-+J/2\\), both equal to the midpoint. Assigning that midpoint at the selected point makes the remainder continuous there, without changing any coefficient integral.
</details>

### Exercise 6.3 {#gibbs-phenomenon-ex-3}

Show the canonical partial sum at the scaled point is a Riemann sum for the sine integral.

<details><summary>Hint 1</summary>
Rewrite each denominator n as k_N times n/k_N.
</details>
<details><summary>Hint 2</summary>
The resulting mesh is 1/k_N and the endpoint tends to one.
</details>
<details><summary>Solution</summary>
The sum becomes \\(k_N^{-1}\\sum_{n=1}^N\\sin(y n/k_N)/(n/k_N)\\). The function of its mesh variable extends continuously at zero with value \\(y\\), so it tends to \\(\\int_0^1\\sin(yt)/t\\,dt=\\operatorname{Si}(y)\\). Joint continuity on bounded y-ranges gives uniform convergence there, not merely convergence for one chosen y.
</details>

### Exercise 6.4 {#gibbs-phenomenon-ex-4}

Prove the limiting upward-jump profile has a first positive maximum at pi.

<details><summary>Hint 1</summary>
Differentiate the sine integral.
</details>
<details><summary>Hint 2</summary>
Inspect the sign of sin y before and after pi.
</details>
<details><summary>Solution</summary>
Its derivative is \\((J/\\pi)\\sin y/y\\), positive on \\((0,\\pi)\\) and negative on \\((\\pi,2\\pi)\\) when \\(J>0\\). Thus the first positive maximum is at pi. Evaluating gives \\(M+(J/\\pi)\\operatorname{Si}(\\pi)=f_++J\\gamma\\). A downward jump reverses the type of extremum.
</details>

### Exercise 6.5 {#gibbs-phenomenon-ex-5}

Why does the positivity proof for gamma compare successive half-wave areas?

<details><summary>Hint 1</summary>
The improper sine integral equals pi/2.
</details>
<details><summary>Hint 2</summary>
The tail after pi alternates, starting with a larger negative lobe.
</details>
<details><summary>Solution</summary>
The absolute integral on each successive half-wave decreases because the denominator grows while the absolute sine pattern repeats. The tail beginning at pi is an alternating sum beginning negative with strictly decreasing positive magnitudes, so its total is negative. Therefore the integral up to pi exceeds the full value pi/2, giving positive gamma.
</details>

### Exercise 6.6 {#gibbs-phenomenon-ex-6}

For period four, estimate the first profile peak distance from an isolated jump at degree N.

<details><summary>Hint 1</summary>
The angular distance is pi divided by k_N.
</details>
<details><summary>Hint 2</summary>
Convert angular coordinate to physical coordinate using P/(2pi).
</details>
<details><summary>Solution</summary>
The physical distance is asymptotic to \\(P/(2k_N)=2/(N+1/2)\\). For the canonical sawtooth the exact finite-degree position is instead \\(P/[2(N+1)]=2/(N+1)\\). Both have the same leading inverse-degree scale, but an asymptotic profile should not be reported as an exact finite-degree coordinate.
</details>

### Exercise 6.7 {#gibbs-phenomenon-ex-7}

Can a corner in an otherwise continuous piecewise C1 periodic function produce the same nonzero jump-height Gibbs limit for the function itself?

<details><summary>Hint 1</summary>
Its function jump J is zero.
</details>
<details><summary>Hint 2</summary>
The preceding chapter gives uniform convergence for a globally continuous piecewise C1 function.
</details>
<details><summary>Solution</summary>
No fixed nonzero function-level jump profile occurs: J is zero and the local scaled limit is the common function value. Global uniform convergence makes all function errors tend to zero. Derivatives may have their own jumps and their own reconstruction behavior; that is a different quantity and does not contradict this statement.
</details>

### Exercise 6.8 {#gibbs-phenomenon-ex-8}

Explain why fixed-height overshoot on an interval of width O(1/N) need not prevent mean-square convergence.

<details><summary>Hint 1</summary>
Bound the squared error on that interval by its maximum times its length.
</details>
<details><summary>Hint 2</summary>
The profile theorem supplies a bounded height on each fixed scaled window.
</details>
<details><summary>Solution</summary>
A common squared-error bound C on a window of length at most c/N gives integral contribution at most Cc/N, tending to zero. Thus that shrinking window alone has vanishing mean-square contribution despite a nonzero maximum. The argument does not establish the global error limit; the rest of the domain still needs its own convergence theorem.
</details>

### Exercise 6.9 {#gibbs-phenomenon-ex-9}

Prove positivity and normalized mass one of the displayed Fejér kernel.

<details><summary>Hint 1</summary>
It is a squared modulus divided by a positive integer.
</details>
<details><summary>Hint 2</summary>
Only equal-frequency pairs survive its period integral.
</details>
<details><summary>Solution</summary>
The square makes nonnegativity immediate. Expanding the square and integrating kills every off-diagonal exponential pair by orthogonality. There are N+1 diagonal ones; division by N+1 leaves normalized mass one. Consequently convolution with this kernel preserves global real upper and lower bounds.
</details>

### Exercise 6.10 {#gibbs-phenomenon-ex-10}

For one mode e^{imx}, compare raw and Fejér errors at degree N at least |m|.

<details><summary>Hint 1</summary>
Raw projection retains its coefficient exactly.
</details>
<details><summary>Hint 2</summary>
Fejér's coefficient weight is 1 minus |m|/(N+1).
</details>
<details><summary>Solution</summary>
Raw projection has zero error. Fejér's output differs by \\(|m|/(N+1)\\) times that mode, so its mean-square norm error is \\(|m|/(N+1)\\), and the squared error is its square. For m nonzero this is positive. Range preservation near jumps is therefore not a claim of universally smaller least-squares error.
</details>

### Exercise 6.11 {#gibbs-phenomenon-ex-11}

Why does evaluating the same finite Fourier polynomial on more points not remove its Gibbs overshoot?

<details><summary>Hint 1</summary>
The polynomial and its coefficients have not changed.
</details>
<details><summary>Hint 2</summary>
A denser display grid changes observation, not the reconstruction operator.
</details>
<details><summary>Solution</summary>
Overshoot is a property of the exact truncated polynomial, which is unchanged by evaluating it at additional points. A denser grid may locate a previously missed peak more accurately. Adding genuinely new retained frequencies narrows the ringing region but retains the theorem's limiting fraction; averaging or another reconstruction changes the operator and has a different analysis.
</details>

### Exercise 6.12 {#gibbs-phenomenon-ex-12}

Distinguish Gibbs from aliasing and from the value assigned at the jump.

<details><summary>Hint 1</summary>
One phenomenon already occurs with exact continuous coefficients.
</details>
<details><summary>Hint 2</summary>
Sampling and isolated point assignment affect different pieces of the setup.
</details>
<details><summary>Solution</summary>
Gibbs is the moving-near-jump profile of truncated continuous Fourier reconstruction. Aliasing is the identification of different frequencies on a finite sample grid, affecting what coefficients the discrete data determine. An isolated jump-point assignment changes neither continuous coefficient integrals nor the jump's neighbouring limits. Thus none of the three mechanisms should be used as an explanation for the other without an additional argument.
</details>

## Sources and scope

This is original exposition and supported exercise development, with the retained Real Analysis Gibbs discussion as local lineage and Stein–Shakarchi/Folland as syllabus benchmarks. The local profile is proved for the stated finite-piece C1 class, and the exact sine-integral expression defines its overshoot constant. The theorem concerns raw symmetric partial sums; different summation filters and finite sampling have their own operators and conclusions.

## Summary

Subtracting one canonical sawtooth separates a jump from its locally continuous remainder. Its scaled finite sum becomes the sine integral, proving the universal local Gibbs profile and a positive limiting fraction of the jump. The width shrinks, so this is compatible with fixed-point and mean-square convergence. Positive Fejér averaging preserves global ranges by changing the coefficient weights, while FFT evaluation and denser plotting do not change the chosen reconstruction.
`;export{e as default};