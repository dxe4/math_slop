var e=`---
parent_id: book-fourier-analysis
chapter_id: dirichlet-kernel-pointwise-convergence
title: "The Dirichlet Kernel and Pointwise Convergence"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# The Dirichlet Kernel and Pointwise Convergence

Orthogonal projection determines a finite Fourier polynomial, but it does not identify its limiting value at a particular point. Raw partial sums are not positive local averages. Their kernel oscillates, and its absolute integral grows. Nevertheless piecewise smoothness gives enough cancellation to prove convergence to the mean of the two one-sided values at every jump and to the function at every continuity point.

Read [Fourier Coefficients and Orthogonal Projection](fourier-approximation-and-density.md), including the normalized coefficient convention. This chapter uses periodic functions with a finite partition into continuously differentiable pieces, whose functions and first derivatives have finite one-sided endpoint limits. We call this piecewise C1. Assignments at the finitely many breakpoints may be arbitrary bounded values. No measure-theoretic Fourier theorem is needed for this class.

We prove the kernel identity, an elementary oscillatory-integral lemma, the jump-average theorem and uniform convergence on closed arcs away from jumps. We also prove logarithmic growth of the kernel's absolute mass. These results state exactly why a picture of partial sums cannot settle every convergence question.

## A finite geometric sum gives the kernel

**Definition 3.1 (Dirichlet kernel).** For nonnegative integer \\(N\\), let
\\[
 D_N(t)=\\sum_{n=-N}^Ne^{int}=1+2\\sum_{n=1}^N\\cos(nt).
\\]
It is real, even and periodic, with normalized integral one.

**Proposition 3.2 (Closed form and convolution).** Away from multiples of \\(2\\pi\\),
\\[
 D_N(t)=\\frac{\\sin((N+1/2)t)}{\\sin(t/2)},
 \\qquad S_Nf(x)=\\frac1{2\\pi}\\int_{-\\pi}^{\\pi}f(x-t)D_N(t)dt.
\\]
At zero the continuous value is \\(2N+1\\).

*Proof.* The finite geometric formula writes the sum as \\(e^{-iNt}(1-e^{i(2N+1)t})/(1-e^{it})\\). Factoring numerator and denominator into their sine and phase factors gives the quotient. At zero the original sum has \\(2N+1\\) ones. For convolution, insert the finite exponential sum and substitute in each integral; the coefficient integral becomes \\(\\widehat f(n)e^{inx}\\). Finite interchange needs no convergence theorem. ∎

**Worked example 3.3 (The first nonconstant kernel is signed).** For \\(N=1\\), \\(D_1(t)=1+2\\cos t\\). It has total integral \\(2\\pi\\), but at \\(t=\\pi\\) its value is minus one. Thus unit total mass does not make it a positive averaging kernel. A weighted integral can exceed an input's pointwise range when negative weights cancel positive ones. Later Gibbs overshoot is consistent with this fact rather than a failure of the coefficient calculation.

## Oscillatory integrals vanish for integrable piecewise data

**Lemma 3.4 (Riemann–Lebesgue for the present class).** If \\(q\\) is bounded and Riemann integrable on a finite interval, then \\(\\int q(t)\\sin(kt)dt\\) and \\(\\int q(t)\\cos(kt)dt\\) tend to zero as real \\(k\\to\\infty\\).

*Proof.* Approximate \\(q\\) in absolute-integral norm by a step function \\(p\\). For real data this follows by taking a partition whose upper and lower Darboux sums are close and choosing a step value between them; treat real and imaginary parts separately for complex data. The error in either oscillatory integral is at most \\(\\int|q-p|\\).

For one constant step on \\([a,b]\\), the sine or cosine integral has modulus at most twice that constant's modulus divided by \\(k\\), by its elementary antiderivative. A fixed finite step function therefore has an integral tending to zero. First make the approximation error arbitrarily small, then take \\(k\\) large for the fixed approximation. This proves both limits. ∎

The statement is about an integral whose oscillation becomes faster, not pointwise convergence of its integrand. The sine factor usually has no pointwise limit as frequency grows. Cancellation plus integral approximation is the mechanism; a dominated-convergence argument based on a nonexistent pointwise limit would be invalid.

The same proof is uniform over a compact set of functions in absolute-integral norm. Cover that compact set by finitely many small norm balls, apply the lemma to the centers, then use the norm error bound. This finite-net observation will give local uniform Fourier convergence.

## Dirichlet's jump-average theorem

**Theorem 3.5 (Piecewise C1 pointwise convergence).** For a periodic piecewise C1 function as specified above,
\\[
 S_Nf(x)\\longrightarrow\\frac{f(x+)+f(x-)}2
\\]
at every point. At a continuity point the value is \\(f(x)\\), regardless of the value separately assigned at a jump.

*Proof.* Put \\(m=[f(x+)+f(x-)]/2\\) and \\(k=N+1/2\\). Evenness of the kernel gives
\\[
 S_Nf(x)-m=\\frac1{2\\pi}\\int_0^\\pi
 \\frac{f(x+t)+f(x-t)-2m}{\\sin(t/2)}\\sin(kt)dt,
\\]
since \\(\\int_0^\\pi D_N=\\pi\\). Near zero the numerator is \\(O(t)\\) by the two one-sided C1 bounds, and \\(\\sin(t/2)\\) is comparable to \\(t\\). The quotient therefore remains bounded and has a finite limit there from the one-sided derivative expansions. Away from zero it is piecewise continuous with finitely many breakpoints. After assigning its limiting value at zero, it is Riemann integrable. Lemma 3.4 makes the integral tend to zero. ∎

The theorem uses the neighbouring limits, not the isolated assigned value, because all coefficient integrals ignore changes at finitely many points. At the identified periodic endpoint the two sides are the limits from opposite ends of one period. Matching only the formula on an open interval without checking that periodic jump can give a wrong endpoint answer.

**Worked example 3.6 (Square-wave recovery and its jump value).** Let \\(f=1\\) on \\((0,\\pi)\\) and \\(f=-1\\) on \\((-\\pi,0)\\), periodically extended. Its sine coefficients are \\(4/(\\pi n)\\) for odd positive \\(n\\), zero for even \\(n\\); the mean and cosine coefficients vanish. Thus
\\[
 S_Nf(x)=\\frac4\\pi\\sum_{\\substack{1\\le n\\le N\\\\n\\text{ odd}}}\\frac{\\sin(nx)}n.
\\]
At zero every partial sum is zero, agreeing with the average of minus one and one. Assigning \\(f(0)=9\\) does not change this. At \\(x=\\pi/2\\), the theorem yields the convergent alternating identity \\(1=(4/\\pi)\\sum_{j\\ge0}(-1)^j/(2j+1)\\). At each ordinary point of a constant piece the sums converge to its value; that alone says nothing about maxima at points moving toward the jump.

## Uniform convergence where no jump is approached

**Theorem 3.7 (Local uniform convergence).** Under the same piecewise C1 hypotheses, convergence is uniform on every closed arc of continuity whose distance from the jump set is positive. If the function is continuous on the whole circle, the convergence is uniform everywhere, even if its derivative has finitely many jumps.

*Proof.* On a fixed such arc, set
\\[
 q_x(t)=\\frac{f(x+t)+f(x-t)-2f(x)}{\\sin(t/2)},\\quad0<t\\le\\pi.
\\]
A common small \\(t\\)-neighbourhood stays within a jump-free region where the piecewise derivative is bounded, so \\(f\\) is Lipschitz there. This bounds every \\(q_x\\) uniformly near zero. Away from zero the denominator has a positive lower bound and boundedness of \\(f\\) gives a common bound.

The map \\(x\\mapsto q_x\\) is continuous in absolute-integral norm. To see this without a measure theorem, remove small intervals around the finitely many shifted breakpoints. On the remaining compact pieces uniform continuity gives uniform convergence as \\(x\\) varies slightly; on the removed intervals the common bound makes the integral error small. The same common near-zero bound handles that small interval too. Hence the family over the compact arc is compact in that norm.

The uniform version of Lemma 3.4 now makes the integral error formula tend uniformly to zero over the arc. If there are no jumps, use compactness of the full circle with the same argument. ∎

This is stronger than pointwise convergence but deliberately excludes neighbourhoods shrinking onto an actual jump. Uniform limits of continuous partial sums are continuous, so a discontinuous periodic function cannot be recovered uniformly on the full circle. Choosing the jump average at the breakpoint does not remove its two unequal one-sided limits.

**Worked example 3.8 (A corner permits uniform reconstruction).** For \\(f(x)=|x|\\) on \\([-\\pi,\\pi]\\), periodically extended, the values match at the endpoints and the function is continuous. Direct integration gives
\\[
 f(x)=\\frac\\pi2-\\frac4\\pi\\sum_{\\substack{n\\ge1\\\\n\\text{ odd}}}\\frac{\\cos(nx)}{n^2}.
\\]
The coefficient calculation uses one integration by parts followed by an elementary sine integral. The numerical square-reciprocal majorant proves uniform convergence of the series, while Theorem 3.5 identifies its pointwise sum with the function; Theorem 3.7 also gives uniform convergence directly. A corner in the derivative is not a jump in the function. At zero the identity gives \\(\\sum_{n\\text{ odd}}1/n^2=\\pi^2/8\\), a consequence of an actual representation theorem rather than of a formal coefficient list.

## The kernel norm grows logarithmically

**Proposition 3.9 (Absolute kernel mass).** There are positive constants bounding \\(\\int_{-\\pi}^{\\pi}|D_N|\\) above and below by constant multiples of \\(\\log(N+1)\\) for sufficiently large \\(N\\).

*Proof.* On \\(0<t\\le\\pi\\), the finite sum gives \\(|D_N|\\le2N+1\\), while \\(\\sin(t/2)\\ge t/\\pi\\) gives \\(|D_N|\\le\\pi/t\\). Split the integral at \\(1/(N+1)\\). The first part is bounded, and the second integrates \\(1/t\\), giving the upper logarithm.

For the lower bound use \\(\\sin(t/2)\\le t/2\\), so \\(|D_N(t)|\\ge2|\\sin(kt)|/t\\), with \\(k=N+1/2\\). Integrating from \\(1/k\\) to one and substituting \\(s=kt\\) gives twice \\(\\int_1^k|\\sin s|/s\\,ds\\). On each full interval \\([j\\pi,(j+1)\\pi]\\) its contribution is at least \\(2/[(j+1)\\pi]\\). Summing those harmonic lower bounds gives the lower logarithm. Evenness supplies the full symmetric integral. ∎

The partial-sum operator on continuous periodic functions has uniform-norm operator norm exactly \\(\\int|D_N|/(2\\pi)\\). The upper bound is convolution's triangle inequality. For the lower bound, evaluate at zero on the continuous periodic function
\\(f_\\varepsilon(t)=D_N(-t)/\\sqrt{D_N(-t)^2+\\varepsilon^2}\\). It has norm at most one and the resulting integrand approaches \\(|D_N(-t)|\\), with pointwise error at most \\(\\varepsilon\\). Integrating proves the matching lower bound without assuming a discontinuous sign function belongs to the continuous input space.

Thus there is no common uniform-norm bound over all continuous inputs and all partial-sum degrees. This does not contradict the proved uniform convergence for each continuous piecewise C1 input: its regularity is additional information and its constants can depend on the function. Nor does growth of operator norms alone exhibit a particular divergent function; obtaining a fixed bad input uses the uniform boundedness/Baire machinery, available as a separate continuation.

## Localization and a weaker sufficient point condition

**Proposition 3.10 (Localization at a point).** If two bounded Riemann-integrable periodic functions agree on a neighbourhood of \\(x_0\\), then their partial-sum difference tends to zero at \\(x_0\\).

*Proof.* Their difference \\(h\\) vanishes near that point. In the symmetric kernel formula its numerator is therefore zero for all sufficiently small \\(t\\). On the remaining interval the denominator is bounded away from zero, so the quotient is Riemann integrable. The oscillatory-integral lemma makes its integral tend to zero. ∎

Although every Fourier coefficient uses the entire period, cancellation makes the limiting value local when the local convergence mechanism applies. Remote changes can alter every finite partial sum without altering its eventual fixed-point limit. On a smaller closed arc inside the common neighbourhood, the same conclusion is uniform: the kernel quotient vanishes on a common small interval, and translations are continuous in absolute-integral norm. That translation fact follows by approximating a Riemann-integrable function by a step function; a small translation changes a fixed step function only on short intervals around its finitely many endpoints. The uniform finite-net argument from Theorem 3.7 then applies.

**Corollary 3.11 (A Dini sufficient condition).** Piecewise C1 near the chosen point can be replaced by the local condition
\\[
 \\int_0^\\delta
 \\frac{|f(x+t)-f(x+)|+|f(x-t)-f(x-)|}{t}\\,dt<\\infty,
\\]
provided the function is bounded and Riemann integrable on the rest of the period. The same jump-average conclusion holds.

*Proof.* The condition makes the symmetric kernel quotient absolutely integrable near zero because \\(\\sin(t/2)\\) is comparable to \\(t\\). Truncate a small initial interval so that its absolute integral is below any prescribed tolerance, uniformly in the sine frequency. On the remaining interval the oscillatory lemma applies. First make the truncated error small, then take degree large, proving the same vanishing error. ∎

A local Hölder estimate with any exponent \\(\\alpha>0\\) satisfies the condition, since the relevant majorant integrates as \\(\\int_0^\\delta t^{\\alpha-1}dt\\). Mere continuity supplies some modulus tending to zero but need not make its quotient by \\(t\\) integrable. Failure of this sufficient condition does not itself prove divergence; it only means that this proof no longer controls the error. Such distinctions keep hypotheses aligned with conclusions instead of treating smoothness as an unspecified visual impression.

## One continuous function can have unbounded partial sums

The growing kernel norms can now be combined with Baire to obtain a fixed counterexample. Let X be the Banach space of continuous 2π-periodic real functions in the supremum norm, and define the bounded linear functional LNf=S_Nf(0). The norm calculation above shows ||LN|| grows logarithmically. Suppose, for contradiction, that every f in X had a bounded sequence LNf. For each positive integer m define Em={f:|LNf|≤m for every N}. Each Em is closed, because it is an intersection of inverse images of closed scalar intervals under continuous functionals, and the assumed boundedness says their union is X.

The Baire theorem from Real Analysis then gives one Em containing an open ball. Shrink its radius if necessary so that the ball about f0 of radius r>0 lies in Em. For any h with ||h||∞<r, both f0+h and f0−h belong to Em. Subtract their functional values and divide by two to obtain |LNh|≤m for every N. Rescaling arbitrary vectors gives ||LN||≤m/r, with an arbitrarily small radius adjustment at the open-ball edge. This contradicts the logarithmic growth.

Therefore there exists a single continuous periodic f for which sup_N|S_Nf(0)| is infinite. In particular its Fourier series fails to converge at zero. Translation gives the same existence conclusion at any one prescribed circle point. This argument does not construct one function diverging at every point, and it does not identify a bad function by examining only a finite plot.

The completeness used is concrete: a uniform Cauchy sequence of continuous periodic functions has a continuous periodic uniform limit. The proof is the special case of the uniform boundedness principle developed systematically in Functional Analysis, but the full argument needed here has been given directly from Baire. No measure-theoretic pointwise theorem is required.

This example locates the exact role of regularity in the earlier positive convergence theorem. Continuity by itself cannot replace finite-piece C1 or the Dini condition. Fejér means still converge uniformly for every continuous input because their positive kernels have uniformly bounded mass and concentrate near zero. Ordinary partial sums have growing absolute kernel mass, and Baire turns that growth into an actual continuous obstruction. Both statements concern the same coefficient data with different reconstruction operators.

## Transferred measure-based companion

The following original sections have moved from the Real Analysis Fourier continuation. Their Lebesgue L2 and null-equivalence formulation assumes the measure and density inputs stated in the retained text; the main elementary/completion proofs above retain their own preparation. Original section numbers are preserved.

## 4. Convolution turns coefficients into kernels

For periodic integrable functions, normalized convolution is defined for almost every \\(x\\) by

\\((f*g)(x)=(1/(2\\pi))\\int _{-\\pi}^\\pi f(x-t)g(t)dt\\).

The Dirichlet kernel is

\\[D_N(t)=\\sum_{n=-N}^N e^{\\mathrm{i} n t}=\\sin((N+1/2)t)/\\sin(t/2)\\]

away from multiples of \\(2\\pi\\), with the continuous limiting value \\(2N+1\\) at zero.

Finite summation and integration show

\\(S_Nf=f*D_N\\).

The kernel has total normalized integral one, but it changes sign and its \\(L^1\\) norm grows. It is not a uniformly stable averaging kernel. This is the source of several convergence difficulties.

The closed form comes from a finite geometric sum. For \\(t\\) not a multiple of \\(2\\pi\\), rewrite

\\[\\sum_{n=-N}^N e^{\\mathrm{i} n t}=e^{-\\mathrm{i}Nt}(1-e^{\\mathrm{i}(2N+1)t})/(1-e^{\\mathrm{i}t})\\]

and cancel phases using the sine identity. The removable value at zero follows either by a limit or directly from the finite sum.

The operator estimate

\\[\\lVert S_Nf\\rVert_\\infty\\le (1/(2\\pi))\\lVert D_N\\rVert_1\\lVert f\\rVert_\\infty\\]

shows why \\(\\lVert D_N\\rVert_1\\) matters. In fact the operator norm on continuous
periodic functions equals \\(\\lVert D_N\\rVert_1/(2\\pi)\\): continuous functions
approximating the complex sign of \\(D_N(-t)\\) make the value at zero approach
this upper bound. Since these norms grow logarithmically, the raw partial-sum
operators are not uniformly bounded. The growing upper estimate alone would
not prove that conclusion; the matching lower approximation does.

Here \\(\\lVert D_N\\rVert_1=\\int _{-\\pi}^\\pi|D_N(t)|dt\\) is unnormalized. If the normalized \\(L^1\\) norm were used instead, the displayed factor \\(1/(2\\pi)\\) would disappear. Either convention gives the same operator bound when used consistently.

The logarithmic growth arises from the approximate \\(1/|t|\\) envelope away from the central scale \\(|t|\\approx 1/N\\). Cancellation keeps the signed integral equal to \\(2\\pi\\), while absolute values destroy that cancellation. This is why unit total integral alone does not make \\(D_N\\) a benign averaging kernel.

Convolution also makes translation invariance transparent. If \\(\\tau_af(x)=f(x-a)\\), then \\(S_N(\\tau_af)=\\tau_a(S_Nf)\\). Spectrally, translation multiplies the \\(n\\)th coefficient by \\(e^{-\\mathrm{i} n a}\\) without changing its magnitude.

## 5. Pointwise convergence needs local regularity

Suppose a \\(2\\pi\\)-periodic function has a finite partition of the circle such that it is \\(C^1\\) on each open piece and has finite one-sided limits of both \\(f\\) and \\(f'\\) at the partition points. Then at every point \\(x\\), the Fourier partial sums converge to

\\([f(x^-)+f(x^+)]/2\\).

At continuity points this equals \\(f(x)\\). At a jump it equals the midpoint of the one-sided limits, not either assigned point value.

The proof rewrites the convolution using the Dirichlet kernel, subtracts the target midpoint, and applies an oscillatory integral estimate. Local behavior near \\(x\\) controls the pointwise limit; integrability controls the remaining far portion.

At a point where the two one-sided limits agree, the theorem recovers that common limiting value. It recovers the literal value \\(f(x)\\) only if the representative is assigned that value there. This distinction is unavoidable because changing a function at one point leaves all Fourier coefficients unchanged.

There are continuous functions whose Fourier series diverge at some points. Continuity alone does not guarantee pointwise convergence of raw partial sums everywhere.

The piecewise-\\(C^1\\) theorem is sufficient, not necessary. The broader local Dirichlet–Jordan theorem is mentioned only as an unproved extension: if an integrable periodic function has bounded variation on each side of \\(x\\) in some neighborhood, its Fourier partial sums converge at \\(x\\) to the midpoint of its finite one-sided limits. This chapter uses only the piecewise-\\(C^1\\) theorem proved above. In that proof, pairing the \\(t\\) and \\(-t\\) pieces of the convolution and subtracting the one-sided limits shows that regularity near the evaluation point controls the singular portion, while global integrability controls the far portion. The assigned value at a single point cannot affect the answer because coefficient integrals ignore null modifications.

A useful local principle follows: two integrable periodic functions that agree on a neighborhood of \\(x\\) have Fourier partial sums with the same convergence behavior at \\(x\\), after their difference is handled by the far-region oscillatory estimate. This localization does not say the individual coefficients are local; each coefficient still integrates over the whole circle.

## Exercises

### Exercise 3.1 {#dirichlet-kernel-pointwise-convergence-ex-1}

Compute \\(D_2(t)\\), its value at zero and its normalized integral.

<details><summary>Hint 1</summary>
Pair the positive and negative exponential frequencies.
</details>
<details><summary>Hint 2</summary>
Only the constant term has nonzero period integral.
</details>
<details><summary>Solution</summary>
The kernel is \\(1+2\\cos t+2\\cos(2t)\\). Its value at zero is five. Its period integral is \\(2\\pi\\), hence normalized integral one. These facts do not make it nonnegative: a signed trigonometric polynomial can have positive total mass and negative regions.
</details>

### Exercise 3.2 {#dirichlet-kernel-pointwise-convergence-ex-2}

Derive the convolution identity directly from the finite coefficient sum.

<details><summary>Hint 1</summary>
Insert each coefficient integral into \\(S_Nf\\).
</details>
<details><summary>Hint 2</summary>
Interchange only a finite sum, then use periodic substitution.
</details>
<details><summary>Solution</summary>
The sum becomes \\((2\\pi)^{-1}\\int f(y)\\sum_{|n|\\le N}e^{in(x-y)}dy\\). The inner finite sum is \\(D_N(x-y)\\). Substituting \\(t=x-y\\) over a full period gives the stated convolution. No infinite sum was interchanged with an integral.
</details>

### Exercise 3.3 {#dirichlet-kernel-pointwise-convergence-ex-3}

A piecewise C1 function has one-sided values three and minus one at a jump. What do its partial sums approach there?

<details><summary>Hint 1</summary>
Use the arithmetic mean of the two limits.
</details>
<details><summary>Hint 2</summary>
The isolated value assigned at the jump is irrelevant to the coefficients.
</details>
<details><summary>Solution</summary>
They approach \\((3-1)/2=1\\), under the theorem's stated piecewise regularity. Assigning a different value at the jump changes neither the coefficients nor that limit. The conclusion is at the fixed jump point, not a statement about maxima moving toward it as the degree grows.
</details>

### Exercise 3.4 {#dirichlet-kernel-pointwise-convergence-ex-4}

Why is the quotient in the proof bounded near zero?

<details><summary>Hint 1</summary>
Subtract the appropriate one-sided limits in its numerator.
</details>
<details><summary>Hint 2</summary>
Piecewise C1 gives an O(t) increment on either side.
</details>
<details><summary>Solution</summary>
The two numerator increments each have modulus at most a constant times \\(t\\) near zero, because the one-sided derivatives are bounded. Their sum is O(t), while \\(\\sin(t/2)\\) is comparable to \\(t\\). The ratio is bounded and has a finite limit from the one-sided derivative expansions. Without some local control the kernel singularity could not simply be discarded.
</details>

### Exercise 3.5 {#dirichlet-kernel-pointwise-convergence-ex-5}

Prove the oscillatory integral of one constant step tends to zero.

<details><summary>Hint 1</summary>
Integrate sine or cosine explicitly on its interval.
</details>
<details><summary>Hint 2</summary>
Each endpoint term has modulus at most the coefficient magnitude divided by frequency.
</details>
<details><summary>Solution</summary>
For a step value \\(c\\) on \\([a,b]\\), the sine integral equals \\(c[\\cos(ka)-\\cos(kb)]/k\\), of modulus at most \\(2|c|/k\\). The cosine integral has the same bound using sine endpoints. Both tend to zero. A fixed finite collection of steps remains controlled by the sum of those finitely many constants.
</details>

### Exercise 3.6 {#dirichlet-kernel-pointwise-convergence-ex-6}

Can the square wave's continuous partial sums converge uniformly to the square wave after assigning midpoint values at its jumps?

<details><summary>Hint 1</summary>
Uniform limits of continuous functions are continuous.
</details>
<details><summary>Hint 2</summary>
Changing one point does not equalize its two side limits.
</details>
<details><summary>Solution</summary>
No. The two one-sided limits at a jump remain minus one and one under any isolated assignment, so the resulting function is discontinuous. A uniform limit of the continuous trigonometric polynomials would be continuous. Local uniform convergence away from jumps is compatible with this obstruction.
</details>

### Exercise 3.7 {#dirichlet-kernel-pointwise-convergence-ex-7}

Compute the cosine coefficients of the periodic function \\(|x|\\).

<details><summary>Hint 1</summary>
Use evenness to integrate twice the positive half-interval.
</details>
<details><summary>Hint 2</summary>
Integrate \\(x\\cos(nx)\\) by parts.
</details>
<details><summary>Solution</summary>
The mean term is \\(a_0/2=\\pi/2\\). For positive \\(n\\), integration gives \\(a_n=2[(-1)^n-1]/(\\pi n^2)\\), equal to zero for even \\(n\\) and \\(-4/(\\pi n^2)\\) for odd \\(n\\). Sine coefficients vanish. The reciprocal-square bound yields a uniform numerical majorant.
</details>

### Exercise 3.8 {#dirichlet-kernel-pointwise-convergence-ex-8}

Explain why uniform convergence away from jumps does not control a point at distance \\(1/N\\) from a jump.

<details><summary>Hint 1</summary>
The closed arc in the theorem must stay a fixed positive distance away.
</details>
<details><summary>Hint 2</summary>
The moving point eventually lies outside every such fixed arc.
</details>
<details><summary>Solution</summary>
The theorem chooses an arc independent of \\(N\\), with positive separation from the jump. Points whose distances shrink as \\(1/N\\) enter the excluded neighbourhood for every such arc. The local uniform estimate therefore says nothing about their moving limit. Gibbs analysis studies exactly that shrinking spatial scale rather than contradicting a fixed-point theorem.
</details>

### Exercise 3.9 {#dirichlet-kernel-pointwise-convergence-ex-9}

Why can Riemann–Lebesgue not be proved here by pointwise dominated convergence of \\(q(t)\\sin(kt)\\)?

<details><summary>Hint 1</summary>
The sine factor generally has no limit as frequency grows.
</details>
<details><summary>Hint 2</summary>
The actual proof approximates in integral norm before taking the oscillatory limit.
</details>
<details><summary>Solution</summary>
A uniform integrable bound is not enough without pointwise convergence, which the oscillatory sine lacks at typical inputs. The step-function proof first controls approximation error independently of frequency, then uses explicit cancellation on each fixed step. Its conclusion comes from oscillation, not convergence of the integrand to zero.
</details>

### Exercise 3.10 {#dirichlet-kernel-pointwise-convergence-ex-10}

Show the upper absolute-kernel estimate is logarithmic by splitting at \\(1/(N+1)\\).

<details><summary>Hint 1</summary>
Use the finite-sum bound near zero and \\(\\pi/t\\) away from it.
</details>
<details><summary>Hint 2</summary>
The integral of \\(1/t\\) supplies the logarithm.
</details>
<details><summary>Solution</summary>
The near-zero integral is at most \\((2N+1)/(N+1)\\), uniformly bounded. The remaining positive-half integral is at most \\(\\pi\\int_{1/(N+1)}^\\pi dt/t=\\pi\\log[\\pi(N+1)]\\). Doubling for evenness gives an O(log(N+1)) bound. A lower bound is separately needed to show actual norm growth.
</details>

### Exercise 3.11 {#dirichlet-kernel-pointwise-convergence-ex-11}

Why does the continuous approximation to the sign of the kernel establish equality of operator norm and normalized absolute mass?

<details><summary>Hint 1</summary>
The convolution triangle inequality supplies the upper bound.
</details>
<details><summary>Hint 2</summary>
The approximating inputs stay in the continuous unit ball and nearly attain it at zero.
</details>
<details><summary>Solution</summary>
For \\(f_\\varepsilon\\) in the proof, evaluation at zero gives the integral of \\(D_N^2/\\sqrt{D_N^2+\\varepsilon^2}\\), whose difference from the absolute-kernel integral is at most \\(2\\pi\\varepsilon\\). Thus unit-ball continuous inputs attain values arbitrarily close to the upper bound, proving equality of the supremum. Using the discontinuous sign directly would not establish a lower bound on the continuous-function operator space without this approximation.
</details>

### Exercise 3.12 {#dirichlet-kernel-pointwise-convergence-ex-12}

State separately what is known at a fixed jump, at a fixed continuity point, and on a fixed closed jump-free arc.

<details><summary>Hint 1</summary>
The first two conclusions are pointwise, with different target values.
</details>
<details><summary>Hint 2</summary>
The third uses the stronger local uniform theorem.
</details>
<details><summary>Solution</summary>
At a jump the partial sums converge to the average of its two one-sided values. At a continuity point they converge to the function value. On a fixed closed arc staying away from jumps they converge uniformly. None of those statements alone controls the overshoot at points whose distance from a jump shrinks with degree, which needs the next Gibbs scaling argument.
</details>

## Sources and scope

This is original exposition and supported exercise development, with the retained Real Analysis Fourier chapter as local lineage and Stein–Shakarchi/Folland as syllabus benchmarks. The piecewise C1 and finite-jump assumptions are stated explicitly. The proof does not claim pointwise convergence for every continuous function or confuse growing operator norms with a constructed fixed divergent input.

## Summary

The Dirichlet kernel expresses raw sums as signed oscillatory averages. Local one-sided smoothness cancels its apparent singularity and gives jump-average convergence, with uniform convergence on fixed arcs away from jumps. Its absolute mass nevertheless grows logarithmically, so there is no universal uniform-norm stability bound. The Gibbs chapter studies the missing moving-point scale; Fejér averaging later replaces the signed kernel by a positive one.
`;export{e as default};