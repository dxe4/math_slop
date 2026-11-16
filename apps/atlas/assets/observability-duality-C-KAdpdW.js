var e=`---
parent_id: book-control-theory
chapter_id: observability-duality
title: "Observability, Duality and Reconstruction"
level: graduate
estimated_minutes: 380
license: CC BY-SA 4.0
---

# Observability, Duality and Reconstruction

An output history can distinguish states that one instantaneous measurement cannot. Observability formalises that distinction for a known deterministic model. This chapter proves the finite rank and Gramian criteria, derives exact and noisy reconstruction, and separates hidden stable modes from hidden unstable modes. It also shows why sampling, unknown input and poor conditioning can change the practical question while the nominal continuous rank stays full.

Required preparation is the [transition formula](transition-matrices-linear-systems.md), [controllability/adjoint argument](control-reachability-observation.md), and finite-dimensional orthogonality. The complete earlier integrated source remains a [registered companion](back-matter/retained-control-structure-reading.md), preserving its original observation and observer examples. Here the primary treatment distinguishes reconstruction from causal dynamical estimation.

## First remove the known input response

For $x'=Ax+Bu$, $y=Cx+Du$, suppose the input and all matrices are known. The output consists of an initial-state response, a forced-state response and direct feedthrough. Subtract the latter two to obtain

$$\\widetilde y(t)=y(t)-Du(t)-C\\int_0^t e^{A(t-s)}Bu(s)\\,ds
=Ce^{At}x_0.$$

This subtraction identifies the actual inverse problem. Indistinguishability concerns initial-state differences under the same known input. It does not require the input to be zero physically, only that its contribution be known. If the input is uncertain or unknown, that uncertainty belongs in the inverse problem rather than being silently discarded.

An initial state is observable over a positive horizon if this entire ideal output history determines it uniquely. This is an exact noiseless property. It does not promise a good error bound at the available sensor scale, and it does not give an estimate at the beginning of the horizon before its future measurements have arrived.

## The observation map and its Gramian

Map a finite-dimensional initial state into its square-integrable output history by $\\mathcal Ox=Ce^{A\\cdot}x$. Its adjoint maps a history $g$ to $\\int_0^T e^{A^Tt}C^Tg(t)dt$. Taking the product gives the observability Gramian

$$W_o(T)=\\mathcal O^*\\mathcal O
=\\int_0^T e^{A^Tt}C^TCe^{At}\\,dt.$$

Its quadratic form is exactly the squared output-history norm. Thus its kernel is the kernel of the observation operator. Positive definiteness is equivalent to unique reconstruction. If it is singular, every hidden difference can be added to an initial state without changing the ideal history.

For a constant matrix, a zero output history is analytic in time. Differentiating it at zero gives $Cx=CAx=\\cdots=CA^{n-1}x=0$. Conversely those conditions and Cayley–Hamilton make every higher derivative zero; the exponential series then vanishes identically. Hence

$$\\ker W_o=\\bigcap_{k=0}^{n-1}\\ker(CA^k).$$

The stacked observability matrix has full column rank exactly when this kernel is zero. This proves the Kalman criterion for every positive horizon. A very short horizon changes the Gramian's numerical scale and reconstruction difficulty, but not this exact constant-coefficient rank property.

Transposing the stacked matrix gives precisely the controllability matrix for the transposed generator and transposed output row. Observability and controllability are therefore dual algebraic properties. They concern different physical maps, however: an output-history norm is not the same object as an actuator-effort norm unless the mathematical dual problem is explicitly defined.

## Reconstruction is a least-squares problem with a sharp noise bound

When the Gramian is positive definite, the initial-state estimate from an output history is

$$\\widehat x_0=W_o^{-1}\\int_0^T e^{A^Tt}C^T\\widetilde y(t)\\,dt.$$

For exact data substitution proves equality with the original state. For arbitrary square-integrable data, differentiate the quadratic residual norm with respect to the finite state vector. Its normal equation is $W_o\\widehat x_0=\\mathcal O^*\\widetilde y$. Positive definiteness gives the unique minimiser. Orthogonality of its residual to the observation range proves the same result by the Pythagorean identity.

Let the residual output include deterministic error $e$. The state error is $W_o^{-1}\\mathcal O^*e$. The product of this reconstruction operator with its adjoint is $W_o^{-1}$, so its squared operator norm is the largest eigenvalue of that inverse. Consequently

$$\\|\\widehat x_0-x_0\\|\\le
\\frac{\\|e\\|_{L^2}}{\\sqrt{\\lambda_{\\min}(W_o)}}.$$

This is a sharp worst-case bound in the displayed norms. For a unit minimum-eigenvalue vector, choose output error proportional to its ideal output history. Normalising that history to unit energy attains the reconstruction amplification. No independence or Gaussian assumption is used. Continuous-time white noise is not an ordinary square-integrable sample function; using that stochastic idealisation requires its own observation/integration model rather than direct substitution into this deterministic bound.

If the Gramian is singular, the normal equation still has solutions, and the pseudoinverse selects the one with minimum Euclidean state norm. All other minimisers add a hidden state. This selection is a convention, not information learned about that hidden component. A different state coordinate metric can select a different representative while fitting the same ideal data.

## Some state summaries remain identifiable without the whole state

A linear summary of the initial state is determined by the ideal history exactly when its coefficient vector is orthogonal to the hidden subspace. Equivalently it lies in the Gramian range or in the range of the observation adjoint. If it is an adjoint image, pairing that representing history with the data computes the summary directly.

The converse follows by adding hidden differences: if the summary fails to annihilate one of them, two indistinguishable states have different summary values. No estimator can select the correct value from the same data without an additional state restriction. With noise, a small-norm representing history gives a corresponding energy-error bound for that particular summary, which may be much better conditioned than full-state recovery.

This distinction is useful when a system has an unobserved internal offset but an observed aggregate. A controller may need only the aggregate for one task, while another task needs the hidden direction. The mathematical notion of information should match the quantity the decision actually requires.

## Position history reveals velocity, but differentiation is not the only reconstruction

**Worked example: the double integrator.** With position output, the ideal history is $q_0+tv_0$. Its Gramian and inverse are

$$W_o(T)=\\begin{pmatrix}T&T^2/2\\\\T^2/2&T^3/3\\end{pmatrix},\\qquad
W_o(T)^{-1}=\\begin{pmatrix}4/T&-6/T^2\\\\-6/T^2&12/T^3\\end{pmatrix}.$$

The determinant is positive for every positive horizon. The two integrals of output against one and time reconstruct the two initial coefficients. In the ideal formula, one could differentiate position to read velocity; the integral least-squares method instead uses the whole finite history without requiring a pointwise derivative of noisy data.

A constant measurement bias is exactly indistinguishable from a shift of the initial position in this model. A linear-in-time bias is indistinguishable from a shift of the initial velocity. The least-squares residual can therefore be zero while the reconstructed state differs from the physical state because the observation model omitted bias. This is a model-identification boundary, not an error in the rank criterion.

Bounded-amplitude high-frequency error gives another caution: differentiating it can amplify its magnitude without bound as frequency grows. The integral reconstruction has the stated bounded energy amplification, but it cannot remove systematic output components aligned with a valid state response. Knowing which noise and bias assumptions are credible remains necessary.

## Full rank can become arbitrarily poorly conditioned

**Worked example: nearly identical decay modes.** Let the generator be diagonal with rates minus one and minus one minus a positive $\\delta$, and measure the sum of the states. The first two observation rows have determinant minus $\\delta$, so the pair is observable for every positive separation. At zero separation, the difference direction is hidden exactly.

For a unit state in that difference direction, the ideal output is $(e^{-t}-e^{-(1+\\delta)t})/\\sqrt2$. The inequality $1-e^{-\\delta t}\\le\\delta t$ bounds its squared output energy by $\\delta^2T^3/6$. The minimum Gramian eigenvalue is no larger than this Rayleigh quotient. Thus worst-case reconstruction amplification becomes large as the decay rates approach each other, despite full exact rank at every nonzero separation.

For stable modes, extending the observation horizon does not accumulate unlimited initial-state information: the ideal histories decay. The infinite-horizon Gramian entries are one half, the reciprocal of $2+\\delta$, and the reciprocal of $2+2\\delta$. Their determinant is $\\delta^2/[4(1+\\delta)(2+\\delta)^2]$, still small as the separation shrinks. Longer observation helps within the model, but does not eliminate an arbitrarily weakly distinguishable direction.

Gramian eigenvalues are also coordinate dependent. Sensor rescaling changes the output norm unless the residual weight transforms with it. A proper comparison states the input/output units, state norm and measurement-error model before interpreting a small number as physical weak information.

## Hidden dynamics and detectability

The unobservable subspace is invariant under the generator. Choose coordinates putting it last. The matrix and output then have block forms

$$\\overline A=\\begin{pmatrix}A_o&0\\\\A_{21}&A_u\\end{pmatrix},\\qquad
\\overline C=\\begin{pmatrix}C_o&0\\end{pmatrix}.$$

Differences in the hidden block never affect the output, while its internal dynamics follow the autonomous hidden matrix. Detectability means those unobserved differences decay asymptotically. For a finite-dimensional constant-coefficient system this is exactly the requirement that the hidden block be Hurwitz.

The dual PBH test says observability is equivalent to full column rank of the stack of $\\lambda I-A$ and $C$ for every complex scalar. A nonzero right eigenvector in the output kernel is the obstruction. The converse follows from the invariant hidden subspace, which contains a complex eigenvector if nonzero. Restricting the test to nonnegative real parts gives detectability.

**Worked example: stable and unstable hidden coordinates.** With first-coordinate output and diagonal rates minus one and minus two, the second state is unobservable but decays, so the pair is detectable. Replacing the second rate by plus one leaves the same sensing deficiency and makes it undetectable. No output-injection correction can distinguish the two hidden initial states; in the second case their difference grows. Exact initial reconstruction and eventual estimation-error decay are therefore different goals.

## Time variation and sampling change the history map

For time-varying known matrices, replace the exponential in the history by the state transition from the initial time. The Gramian is the integral of the transition-transpose, output-transpose/output product and transition. The same squared-history argument proves the horizon criterion. A pointwise frozen observation matrix need not represent the whole history.

**Worked example: a rotating scalar sensor.** A constant planar state measured by the row $(\\cos t,\\sin t)$ over an interval of length $\\pi$ has Gramian $(\\pi/2)I$. Every instantaneous scalar measurement loses one direction, but their scheduled history distinguishes both. The reconstruction is two over $\\pi$ times the integral of the transposed sensing row multiplied by the output. This is the observation dual of the rotating-actuator example, with a different physical information interpretation.

**Worked example: sampled oscillator aliasing.** For a nonzero-frequency planar rotation and first-coordinate sensing, continuous observability holds. Sampling every interval $h$ gives a rotation angle $\\theta=\\omega h$. The first two observation rows are $(1,0)$ and $(\\cos\\theta,-\\sin\\theta)$, with determinant minus the sine of that angle. At a half-turn interval the sampled map is minus the identity and every output is just an alternating copy of the initial first coordinate. The second coordinate is completely hidden from those samples, despite continuous observability. Near such an interval the sampled problem can be weakly conditioned before exact rank is lost.

The sampled observation matrix must therefore use the actual interval and transition. Merely asserting that the continuous plant is observable does not settle a chosen sensor schedule. Timing assumptions are part of the inverse map.

## Unknown inputs and causal estimation require a different question

In the position-output model $x_1'=x_2+u$, $x_2'=0$, known input allows reconstruction of both states by subtracting its integral. If the input is an unknown constant, adding a constant to the second state and subtracting it from the input gives exactly the same output history. The known-input observability theorem has not failed; its hypothesis has changed. Augmenting the unknown input as a constant state reveals the resulting hidden combination explicitly.

Batch reconstruction also uses an entire observation window. It becomes available at that window's end. A causal observer must produce estimates while measurements arrive and must analyse its own error equation, noise response and initial uncertainty. Detectability supplies the relevant structural condition for stable linear observer design, while full observability supports arbitrary observer pole assignment through duality. Those design proofs are developed in the observer chapter; neither follows from differentiating a noisy measurement once.

For weighted residuals, use a declared positive-definite output weight and the corresponding weighted Gramian. If a sensor coordinate transformation is made, transform that weight by the matching congruence so the same physical error cost is represented. Calling a weight a covariance does not establish a stochastic noise model. The algebraic inverse, its deterministic sensitivity and a probabilistic estimator each need their own assumptions.

## Exercises with staged hints and full solutions

<a id="observability-duality-ex-1"></a>
### Exercise 1: the known-input subtraction

Why does indistinguishability under the same known input reduce to the homogeneous output from the initial-state difference?

<details><summary>Hint 1</summary>

Write variation of constants for the two states.

</details>
<details><summary>Hint 2</summary>

Both the forced convolution and direct feedthrough cancel in their output difference.

</details>
<details><summary>Full solution</summary>

The difference of the two states is $e^{At}(x_0-\\widehat x_0)$ because the input responses are identical. Multiplying by the output matrix gives the output difference, with no remaining feedthrough term. Thus the observation kernel is independent of that shared input in this linear model. Different or unknown inputs would not cancel and would define a different inverse problem.

</details>

<a id="observability-duality-ex-2"></a>
### Exercise 2: reconstruct a linear position trace

For unit horizon and output $2-3t$ from a double integrator, reconstruct the initial state using the two integral moments.

<details><summary>Hint 1</summary>

Integrate the output and time times output over the unit interval.

</details>
<details><summary>Hint 2</summary>

Multiply those moments by the displayed inverse Gramian at unit horizon.

</details>
<details><summary>Full solution</summary>

The moments are one half and zero. The inverse Gramian is $\\begin{pmatrix}4&-6\\\\-6&12\\end{pmatrix}$, giving initial state $(2,-3)^T$. Substitution into $q_0+tv_0$ verifies the output exactly. The method uses integrated history rather than an estimated pointwise derivative.

</details>

<a id="observability-duality-ex-3"></a>
### Exercise 3: a hidden stable mode

For rates minus one and minus two with first-coordinate output, compute the hidden subspace and classify detectability.

<details><summary>Hint 1</summary>

Every observation row vanishes on the second coordinate axis.

</details>
<details><summary>Hint 2</summary>

Detectability asks how an unobserved difference evolves, rather than whether it is reconstructible initially.

</details>
<details><summary>Full solution</summary>

The hidden subspace is the second coordinate axis. Its differences decay as $e^{-2t}$, so the pair is detectable but not observable. A finite output history cannot determine the second initial coordinate exactly. Its eventual disappearance is sufficient for the structural asymptotic-estimation goal, not for exact initial reconstruction.

</details>

<a id="observability-duality-ex-4"></a>
### Exercise 4: a hidden unstable mode

Replace the second rate in Exercise 3 by plus one. Why can output injection not repair the hidden error?

<details><summary>Hint 1</summary>

The measured difference remains zero for two states differing only in that coordinate.

</details>
<details><summary>Hint 2</summary>

The output correction has nothing to distinguish, while the state difference grows.

</details>
<details><summary>Full solution</summary>

The hidden axis is unchanged, but its error now grows as $e^t$. Since the output residual is identically zero for that difference, no output-injection matrix can move its hidden eigenmode. The PBH stack loses rank at eigenvalue one, so detectability fails.

</details>

<a id="observability-duality-ex-5"></a>
### Exercise 5: repeated modes with nonzero sensor coefficients

For generator minus the identity and output row $(1,1)$, find a hidden direction despite both sensor coefficients being nonzero.

<details><summary>Hint 1</summary>

Every output row generated by multiplying by the matrix is a scalar multiple of the original row.

</details>
<details><summary>Hint 2</summary>

Take a difference state whose coordinates sum to zero.

</details>
<details><summary>Full solution</summary>

The direction $(1,-1)^T$ produces zero output at every time, because both coordinates share the same decay factor. The observability matrix has rank one. Nonzero entries of the sensor row do not suffice when the dynamics leave a whole repeated-eigenvalue difference indistinguishable. The hidden mode is stable, so detectability still holds.

</details>

<a id="observability-duality-ex-6"></a>
### Exercise 6: a bias with zero residual

For the double-integrator position history, what initial-state error results from adding a constant bias $b$ to all observations?

<details><summary>Hint 1</summary>

The biased trace remains an exact affine function of time.

</details>
<details><summary>Hint 2</summary>

Its constant and linear coefficients identify the reconstructed state.

</details>
<details><summary>Full solution</summary>

The reconstructed position increases by $b$ and reconstructed velocity is unchanged. The residual is still zero because the biased history is exactly the ideal output of that different initial state. An ordinary least-squares fit cannot distinguish a sensor bias from that state offset without additional information or an augmented observation model.

</details>

<a id="observability-duality-ex-7"></a>
### Exercise 7: sharp amplification

Let $v$ be a unit minimum-eigenvalue vector of a positive Gramian. Choose a unit-energy output error that attains the worst reconstruction gain.

<details><summary>Hint 1</summary>

Use the ideal output history generated by that vector.

</details>
<details><summary>Hint 2</summary>

Its squared history norm is the corresponding Gramian eigenvalue.

</details>
<details><summary>Full solution</summary>

Choose $e=\\mathcal Ov/\\sqrt\\lambda$, where $\\lambda$ is the minimum eigenvalue. Its norm is one. Reconstruction gives $W_o^{-1}\\mathcal O^*e=W_o^{-1}W_ov/\\sqrt\\lambda=v/\\sqrt\\lambda$. Its norm is the claimed sharp gain. This demonstrates that the weak direction can dominate deterministic noise sensitivity even when exact rank is full.

</details>

<a id="observability-duality-ex-8"></a>
### Exercise 8: half-turn sampling

For a rotation oscillator with first-coordinate sensing, describe every sampled output at a half-turn interval and identify the hidden coordinate.

<details><summary>Hint 1</summary>

The sampled transition is minus the identity.

</details>
<details><summary>Hint 2</summary>

Multiplying by the output row never creates a second independent row.

</details>
<details><summary>Full solution</summary>

The outputs are $(-1)^k$ times the initial first coordinate. The second coordinate is entirely hidden from this schedule. Continuous sensing would be observable because the output rotates through different state directions between samples. This is exact sampling aliasing, not numerical roundoff or an insufficiently accurate rank algorithm.

</details>

<a id="observability-duality-ex-9"></a>
### Exercise 9: rotating sensing history

For the constant state measured by $(\\cos t,\\sin t)$ over a half-turn, derive its Gramian and reconstruction.

<details><summary>Hint 1</summary>

Integrate the outer product of the sensing row with itself.

</details>
<details><summary>Hint 2</summary>

The cross term vanishes and the two squared trigonometric integrals agree.

</details>
<details><summary>Full solution</summary>

The Gramian is $(\\pi/2)I$. Its inverse is $(2/\\pi)I$, so reconstruction is two over $\\pi$ times the integral of $(\\cos t,\\sin t)^T$ multiplied by the measured output. One scalar reading cannot determine both coordinates, but the full scheduled history can. The theorem concerns that known schedule and finite observation window.

</details>

<a id="observability-duality-ex-10"></a>
### Exercise 10: an unknown-input ambiguity

For $x_1'=x_2+u$, $x_2'=0$, $y=x_1$, show an ambiguity when the input is an unknown constant.

<details><summary>Hint 1</summary>

Only the sum of the constant second state and constant input affects the measured slope.

</details>
<details><summary>Hint 2</summary>

Shift those two quantities by equal opposite amounts.

</details>
<details><summary>Full solution</summary>

Replacing the second initial coordinate by $x_2+\\delta$ and the unknown constant input by $u-\\delta$ leaves $x_1'$ and its initial value unchanged. The complete output history is identical. Known-input observability does not settle this altered problem; an augmented constant-input state exposes the hidden combination. Additional sensing or input information is needed to distinguish it.

</details>

## Chapter synthesis

The history map and its Gramian identify exactly which state differences are visible. Their inverse supplies reconstruction and sharp deterministic sensitivity, while detectability concerns decay of the hidden part. Time variation, sampling, bias, unknown inputs and causality each change the information question and must accompany any practical observability claim.
`;export{e as default};