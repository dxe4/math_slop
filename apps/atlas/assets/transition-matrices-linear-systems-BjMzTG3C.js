var e=`---
parent_id: book-control-theory
chapter_id: transition-matrices-linear-systems
title: "Transition Matrices and Time-Varying Linear Systems"
level: graduate
estimated_minutes: 380
license: CC BY-SA 4.0
---

# Transition Matrices and Time-Varying Linear Systems

A time-varying linear plant cannot generally be solved by exponentiating the integral of its coefficient matrix. The order of successive dynamics matters. This chapter constructs the state-transition operator, proves its composition and forcing formulas, and derives exact held-input models. It also gives concrete counterexamples to interpreting instantaneous eigenvalues or a continuous feedback law as a sampled closed-loop guarantee.

The [state-space opening](state-space-models.md) supplies the input and solution-class conventions. Matrices are finite dimensional. For the existence construction the coefficient matrix is locally integrable in time, so state trajectories are absolutely continuous and equations hold almost everywhere. Continuous coefficients recover the classical formulation.

## The integral series constructs a transition matrix

Fix an initial time $s$. The matrix initial-value problem is $X'=A(t)X$, $X(s)=I$. Its integral equation begins with the identity and repeatedly substitutes the right side. For nonnegative elapsed time this gives the ordered series

$$
\\Phi(t,s)=I+\\int_s^t A(t_1)\\,dt_1
+\\int_{s\\le t_2\\le t_1\\le t}A(t_1)A(t_2)\\,dt_2dt_1+\\cdots.
$$

Each later matrix acts on the left of the earlier one. To bound the term of order $k$, replace every matrix by its norm. The scalar product integrand is symmetric in its time variables, so the ordered simplex integral is one over $k!$ times the full cube integral. Its bound is therefore $(\\int_s^t\\|A(\\tau)\\|d\\tau)^k/k!$. The exponential majorant converges on every finite interval, uniformly in its upper endpoint.

The series is consequently a continuous matrix function. Substituting it into the integral equation is justified by the uniform summable majorant. The integral equation then makes it absolutely continuous and gives the matrix differential equation almost everywhere. If two solutions existed, subtract their integral equations and apply the integral Gronwall inequality to their norm difference. The difference is zero. This proves existence and uniqueness without assuming commutativity.

The same construction works on intervals to the left of the initial time by reversing the independent variable. It gives a transition for any two times in the coefficient interval. The norm bound is an existence and finite-horizon growth estimate; because it uses a nonnegative matrix norm, it usually does not recognize actual contraction of a stable system.

## Composition and invertibility are consequences of uniqueness

For any intermediate time, both $\\Phi(t,r)$ and $\\Phi(t,s)\\Phi(s,r)$ solve the same matrix initial-value problem after restarting at that time. Thus

$$\\Phi(t,s)\\Phi(s,r)=\\Phi(t,r),\\qquad\\Phi(s,s)=I.$$

Setting the outer times equal proves $\\Phi(t,s)^{-1}=\\Phi(s,t)$. This inverse exists even if every coefficient matrix is singular. Invertibility belongs to the state evolution, not to invertibility of the instantaneous generator.

With a fixed fundamental matrix $X(t)$, the transition is $X(t)X(s)^{-1}$. Different choices of a fundamental basis cancel in this expression. For locally integrable coefficients, the identities remain valid in the absolutely continuous solution class. They are not restricted to coefficients differentiable in time.

Liouville's formula gives

$$\\det\\Phi(t,s)=\\exp\\left(\\int_s^t\\operatorname{tr}A(\\tau)\\,d\\tau\\right).$$

To derive it, use the already proved invertibility and differentiate the determinant almost everywhere. Its derivative is the determinant times the trace of the inverse multiplied by its derivative. Cyclicity of trace reduces that factor to the trace of the coefficient matrix. The resulting scalar equation has initial value one and the displayed exponential solution. In particular a real linear ODE transition has positive determinant. A negative determinant cannot be produced by a finite-time evolution of such a continuous-state linear equation.

## Commutativity is the missing hypothesis in a common shortcut

If the coefficient matrices commute pairwise at the relevant times, the ordered series can be symmetrised and becomes the usual exponential of the time integral. Equivalently, the integral matrix commutes with its derivative, so differentiating its exponential gives the required matrix equation. Without that commutation, the derivative of an exponential contains different matrix orders and the shortcut fails.

**Worked example: commuting damping and rotation.** Suppose $A(t)=a(t)I+b(t)J$, where $J$ is the fixed planar rotation generator with square minus the identity. Every coefficient is a linear combination of the same commuting matrices. The transition is the scalar exponential of the integrated damping times a rotation through the integrated angular rate. Its norm is exactly that scalar damping factor in Euclidean coordinates. No ordering correction is needed because the algebraic hypothesis is satisfied.

**Worked example: two nilpotent stages do not commute.** On a first unit interval use $N_1=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$, and on the next use $N_2=\\begin{pmatrix}0&0\\\\1&0\\end{pmatrix}$. Each squares to zero, so its exponential is identity plus itself. The total transition is

$$e^{N_2}e^{N_1}=\\begin{pmatrix}1&1\\\\1&2\\end{pmatrix}.$$

Reversing the stages gives a different matrix with diagonal entries two and one instead. Exponentiating their sum instead gives a matrix with equal diagonal entries $\\cosh1$ and off-diagonal entries $\\sinh1$. It is neither ordered product. All these matrices have determinant one, so a determinant check alone cannot detect the wrong ordering. The exact two-stage calculation isolates the issue without any numerical approximation.

## Variation of constants includes the input timing

For $x'=A(t)x+B(t)u(t)$, assume the input term is locally integrable. Multiplying by the inverse fundamental matrix and applying the product rule for absolutely continuous functions gives

$$x(t)=\\Phi(t,s)x_s+\\int_s^t\\Phi(t,\\tau)B(\\tau)u(\\tau)\\,d\\tau.$$

The first term propagates stored initial state; the second accumulates each input contribution from the time when it acts. Differentiating the expression verifies the equation and initial value. Uniqueness follows from the homogeneous argument, so this formula describes the entire input response in the stated class.

Equal unweighted input integrals do not generally give equal terminal states. For a scalar stable plant with coefficient minus one, earlier input is discounted more strongly by the remaining dynamics. A pulse of height two in the first half of a unit interval has the same area as a pulse of height two in the second half. Their terminal contributions are respectively $2(e^{-1/2}-e^{-1})$ and $2(1-e^{-1/2})$. The later pulse gives the larger state. For a pure integrator the kernel is constant and area alone would suffice.

This timing distinction matters in actuation and estimation. A measured average input can be an insufficient description when the plant's response kernel changes significantly inside the averaging window. A held-input model is therefore an assumption about the input waveform, not simply a decision to store fewer samples.

## Exact zero-order holding has a well-defined discrete model

For a time-invariant plant and an input constant throughout a sampling interval of length $h>0$, variation of constants gives

$$x_{k+1}=A_dx_k+B_du_k,\\qquad
A_d=e^{Ah},\\qquad B_d=\\int_0^h e^{A\\tau}B\\,d\\tau.$$

The change from elapsed remaining time to the displayed integral is valid because the input is constant. If the generator is invertible one may simplify the integral to $A^{-1}(e^{Ah}-I)B$. If it is singular the integral remains perfectly meaningful, and an inverse formula should not be used.

A block exponential avoids that restriction. The exponential of the augmented matrix with upper blocks $A,B$ and zero lower blocks has upper-left block $e^{Ah}$, upper-right block the input integral and lower-right block identity. To prove it, multiply the block matrix repeatedly: its $k$th power has upper-right block $A^{k-1}B$ for positive $k$. Summing its exponential series gives exactly the same integral coefficient. This is an algebraic construction, independent of which numerical exponential algorithm is later selected.

**Worked example: a held acceleration.** For position and velocity with acceleration input, the generator is nilpotent of order two. Thus

$$A_d=\\begin{pmatrix}1&h\\\\0&1\\end{pmatrix},\\qquad
B_d=\\begin{pmatrix}h^2/2\\\\h\\end{pmatrix}.$$

The displacement includes half the acceleration times the squared interval, while velocity includes the full acceleration times the interval. Replacing the integral coefficient by simply the input matrix times the interval would omit the displacement contribution. That replacement is a first-order approximation, not the exact held-input model.

For a time-varying plant the corresponding sampled matrices depend on the interval: the transition runs from its start to end, and the input integral uses the time-varying transition and input matrix. A constant discrete pair needs either an actually time-invariant plant or an additional justified approximation.

## Continuous feedback and sampled feedback are different interconnections

Continuous state feedback substitutes $u(t)=-Kx(t)$ at every time, giving generator $A-BK$. In sampled holding, the controller uses the state at the start of the interval and keeps that input constant until the next sample. Its exact discrete transition is $A_d-B_dK$, generally different from $e^{(A-BK)h}$.

For the scalar integrator with positive feedback gain in this negative-feedback convention, the continuous closed equation has decay rate equal to the gain. Its exact continuous-feedback transition is a positive exponential for every sampling interval. The sampled-held transition is one minus gain times interval. It is stable only when the product lies strictly between zero and two. A sufficiently long hold therefore destabilises this controller even though its ideal continuously updated law is stable.

The matrices for a stable open-loop generator still satisfy the usual spectral mapping: its sampled eigenvalues are exponentials of the continuous eigenvalues. Jordan blocks contribute polynomial factors but remain decaying when all real parts are negative. The feedback counterexample does not contradict that statement, because it compares two different closed-loop update rules. The hold and information timing belong to the model.

## Stable instantaneous eigenvalues do not settle a time-varying plant

**Worked example: unstable periodic switching.** Use two unit-duration matrices in alternation. Both have diagonal entries minus one; the first has upper off-diagonal entry $M$ and the second lower off-diagonal entry $M$. Each instantaneous matrix has only the stable eigenvalue minus one. Over two intervals the transition is

$$e^{-2}\\begin{pmatrix}1&M\\\\M&M^2+1\\end{pmatrix}.$$

This symmetric positive-definite matrix has a largest eigenvalue at least $e^{-2}(M^2+1)$, by evaluating its Rayleigh quotient on the second coordinate vector. Taking $M=3$ makes that bound exceed one. Repeating the same two-stage schedule therefore gives an exponentially growing sampled mode. The constant-matrix spectral test was not a theorem for arbitrary switching between matrices.

The mechanism is successive shear amplification before damping can dominate it. A norm estimate respecting a common energy can rule out such behavior, but separate stable spectra do not supply that common energy. Periodic systems can instead be analysed through their monodromy and [Floquet theory](../differential-equations-verified-dynamics/periodic-orbits-planar-limits.md), whose complete proof states the needed periodicity and representation conditions.

## An energy estimate can recognise uniform contraction

For a homogeneous real system, differentiate the squared Euclidean norm. Only the symmetric part of the coefficient contributes. If that symmetric part is at most minus a positive constant times the identity at almost every time, then

$$\\frac{d}{dt}\\|x(t)\\|^2\\le-2\\gamma\\|x(t)\\|^2,$$

and integration proves $\\|\\Phi(t,s)\\|\\le e^{-\\gamma(t-s)}$ for nonnegative elapsed time. This is a uniform decay statement with constant one in the chosen norm. It is stronger than requiring negative instantaneous eigenvalue real parts. A fixed positive-definite quadratic metric gives a more general common-energy version, developed in the Lyapunov chapter.

For additive input with bounded input-matrix norm, variation of constants then bounds state size by the decaying initial contribution plus the convolution of the decaying kernel with input magnitude. A bounded input produces a finite steady bound proportional to its supremum divided by the decay rate. This is an input-state estimate for the stated linear model, not a guarantee that actuator or state constraints are satisfied.

Every transition calculation should therefore identify coefficient regularity, time ordering, initial time, input waveform and the norm used for growth. These choices distinguish an exact state transition from a convenient approximation and a valid stability theorem from an instantaneous diagnostic.

## Exercises with staged hints and full solutions

<a id="transition-matrices-linear-systems-ex-1"></a>
### Exercise 1: composition order

Which product propagates from time zero to time two through intermediate time one, and why?

<details><summary>Hint 1</summary>

The earliest operation acts first on a column state.

</details>
<details><summary>Hint 2</summary>

Write the state at the intermediate time before propagating it again.

</details>
<details><summary>Full solution</summary>

The product is $\\Phi(2,1)\\Phi(1,0)=\\Phi(2,0)$. The right factor produces the state at time one, and the left factor advances it to time two. Reversing the product is generally wrong because matrix operations need not commute. The identity follows from uniqueness of the restarted initial-value problem, not from a general commutation rule.

</details>

<a id="transition-matrices-linear-systems-ex-2"></a>
### Exercise 2: a scalar coefficient

Find the transition for $x'=-tx$ between arbitrary times in a finite coefficient interval.

<details><summary>Hint 1</summary>

Scalar coefficients always commute.

</details>
<details><summary>Hint 2</summary>

Integrate the coefficient between the two named times.

</details>
<details><summary>Full solution</summary>

The transition is $\\exp[-(t^2-s^2)/2]$. It is one at equal times, its derivative in the final time is minus that time times itself, and multiplying two such transitions cancels the intermediate squared-time terms. For positive times the state contracts, while reversing the time order inverts the same transition.

</details>

<a id="transition-matrices-linear-systems-ex-3"></a>
### Exercise 3: reverse two nilpotent stages

Compute the transition when the lower nilpotent stage acts first and the upper stage second.

<details><summary>Hint 1</summary>

Each stage exponential is identity plus its generator.

</details>
<details><summary>Hint 2</summary>

The later upper stage multiplies on the left.

</details>
<details><summary>Full solution</summary>

The product is $\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}\\begin{pmatrix}1&0\\\\1&1\\end{pmatrix}=\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}$. The original order had diagonal entries one and two. Both determinants equal one, so matching volume change does not imply matching state evolution or correct chronology.

</details>

<a id="transition-matrices-linear-systems-ex-4"></a>
### Exercise 4: a half-unit held acceleration

Evaluate the exact double-integrator held-input matrices for interval one half.

<details><summary>Hint 1</summary>

Use the nilpotent exponential and its input integral.

</details>
<details><summary>Hint 2</summary>

The position input coefficient is half the squared interval.

</details>
<details><summary>Full solution</summary>

The transition is $\\begin{pmatrix}1&1/2\\\\0&1\\end{pmatrix}$ and the input coefficient is $(1/8,1/2)^T$. From rest, a unit held acceleration produces velocity one half and displacement one eighth. Keeping only the input matrix times interval would give zero displacement contribution and would not be the exact hold model.

</details>

<a id="transition-matrices-linear-systems-ex-5"></a>
### Exercise 5: a singular generator

For the scalar integrator, derive the held-input coefficient without inverting its zero generator.

<details><summary>Hint 1</summary>

Its exponential is one at every elapsed time.

</details>
<details><summary>Hint 2</summary>

Use the defining integral instead of the inverse shortcut.

</details>
<details><summary>Full solution</summary>

With unit input coefficient, the defining integral is $\\int_0^h1\\,d\\tau=h$. Thus the exact update is $x_{k+1}=x_k+hu_k$. The inverse-generator formula is undefined here, but the system and its transition are entirely regular. Invertibility of the state transition is a different property from invertibility of the generator.

</details>

<a id="transition-matrices-linear-systems-ex-6"></a>
### Exercise 6: a stable continuous law with an unstable hold

Use gain three and unit hold interval for the scalar integrator with negative state feedback. Compare continuous and sampled transitions.

<details><summary>Hint 1</summary>

Continuous feedback updates the input throughout the interval.

</details>
<details><summary>Hint 2</summary>

The held update uses the original sample for the whole interval.

</details>
<details><summary>Full solution</summary>

Continuous feedback gives $x'=-3x$ and transition $e^{-3}$, strictly inside the unit circle. Holding input at minus three times the sampled state gives multiplier $1-3=-2$, whose magnitude exceeds one. The sampled loop is unstable. The comparison concerns distinct input waveforms; exact discretisation of the continuously updated closed equation would still give $e^{-3}$.

</details>

<a id="transition-matrices-linear-systems-ex-7"></a>
### Exercise 7: two equal-area pulses

Compare the two terminal scalar stable-plant responses from the pulse example without decimal approximation.

<details><summary>Hint 1</summary>

Subtract the earlier-pulse contribution from the later one.

</details>
<details><summary>Hint 2</summary>

The difference factors as a square in the half-interval exponential.

</details>
<details><summary>Full solution</summary>

The difference is $2(1-2e^{-1/2}+e^{-1})=2(1-e^{-1/2})^2>0$. Both inputs have area one, yet the later pulse leaves a larger terminal state because less time remains for decay. The weighted convolution, rather than input area alone, determines the endpoint.

</details>

<a id="transition-matrices-linear-systems-ex-8"></a>
### Exercise 8: determinant information

If a planar coefficient has constant trace minus three, what does Liouville determine and what does it leave open?

<details><summary>Hint 1</summary>

Integrate the trace over the elapsed time.

</details>
<details><summary>Hint 2</summary>

A determinant records a product of directional stretches.

</details>
<details><summary>Full solution</summary>

The transition determinant is $e^{-3(t-s)}$. It fixes infinitesimal area contraction but not the individual state directions, singular values or stability of every mode. One direction can expand while another contracts more strongly. Additional energy or monodromy information is needed for those conclusions.

</details>

<a id="transition-matrices-linear-systems-ex-9"></a>
### Exercise 9: unstable switching

Show that the two-stage switching example with coupling three has a period multiplier greater than one.

<details><summary>Hint 1</summary>

Use the Rayleigh quotient of its symmetric period matrix on the second coordinate vector.

</details>
<details><summary>Hint 2</summary>

The resulting lower bound is ten divided by the square of the exponential constant.

</details>
<details><summary>Full solution</summary>

The quotient is $10e^{-2}$. Since $e<3$, its square is below nine and this quotient exceeds one. The largest eigenvalue is at least that quotient, so a corresponding period-sampled mode grows geometrically. Each individual generator still has only eigenvalue minus one. Stability of every frozen generator did not imply stability of the repeated schedule.

</details>

<a id="transition-matrices-linear-systems-ex-10"></a>
### Exercise 10: a contraction kernel with input

Assume the symmetric-part condition gives rate $\\gamma>0$, the input-matrix norm is at most $b$ and input magnitude is at most $U$. Bound the state for nonnegative elapsed time.

<details><summary>Hint 1</summary>

Insert the exponential transition bound into variation of constants.

</details>
<details><summary>Hint 2</summary>

Integrate the decaying scalar kernel against the constant bound.

</details>
<details><summary>Full solution</summary>

The bound is $e^{-\\gamma(t-s)}\\|x_s\\|+(bU/\\gamma)(1-e^{-\\gamma(t-s)})$. It separates the decaying stored-state contribution from the forced response. The eventual bound is $bU/\\gamma$, but this estimate alone does not establish any particular state constraint or actuator feasibility beyond the input magnitude already assumed.

</details>

## Chapter synthesis

The ordered integral construction gives unique transitions, inverses and forced responses under integrable coefficients. Commutativity permits an exponential shortcut; holding assumptions determine exact sampled matrices. Instantaneous spectra, volume change and continuously updated feedback each answer narrower questions than uniform stability of a time-varying or sampled interconnection.
`;export{e as default};