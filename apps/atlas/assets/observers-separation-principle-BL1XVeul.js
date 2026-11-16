var e=`---
parent_id: book-control-theory
chapter_id: observers-separation-principle
title: "Observers and the Separation Principle"
level: graduate
estimated_minutes: 400
license: CC BY-SA 4.0
---

# Observers and the Separation Principle

Observability describes information in an ideal output history. An observer is a dynamical system producing an estimate while measurements arrive. Its convergence, noise response and interaction with feedback require new equations. This chapter proves the finite-dimensional linear observer and separation results, constructs a derivative-free reduced-order observer, and gives exact high-gain examples that distinguish asymptotic speed from transient and measurement performance.

Required preparation is [observability and detectability](observability-duality.md), [pole assignment](feedback-pole-placement.md) and the quadratic energy theorem. The earlier integrated control reading remains registered supporting matter; its original observer questions and solutions remain in the controllability chapter as preserved bridges. The treatment here states each design's actual information and input assumptions.

## Output injection gives a closed error equation

For the known plant $x'=Ax+Bu$, $y=Cx+Du$, use

$$\\widehat x'=A\\widehat x+Bu+L(y-C\\widehat x-Du).$$

The input is known, and the model's direct feedthrough is subtracted explicitly. With error $e=x-\\widehat x$, subtracting the two state equations gives $e'=(A-LC)e$. This holds in the absolutely continuous solution class for admissible integrable input; no derivative of the measured output is taken.

Thus a Hurwitz injection matrix gives exponential estimation-error decay for every initial estimation error. The plant itself need not be stable. The observer's error dynamics can be stable while the uncontrolled physical state grows; the estimate then follows that growing state with a decaying difference. Estimation and plant stabilisation are separate conclusions.

When the pair is observable, transposing the proved multiple-input pole-assignment theorem assigns any real characteristic polynomial to the error matrix. Specifically choose a feedback gain for the transposed generator and transposed output, then transpose that gain into the injection matrix. Complex desired poles require conjugate pairs, as in state feedback.

When only detectability holds, the same dual argument supplies some stable injection but cannot move the stable hidden block arbitrarily. Necessity follows directly: an unobservable eigenmode with nonnegative real part produces no output residual, so output injection cannot make its error decay. This proves that detectability is exactly the condition for existence of a stable constant linear output-injection observer.

**Worked example: a hidden stable coordinate.** For diagonal rates minus one and minus three and first-coordinate measurement, choose injection $(\\ell,0)^T$. Its error matrix has rates minus one minus $\\ell$ and minus three. The first can be adjusted and the second remains fixed but already decays. The pair is detectable without permitting arbitrary assignment of both observer poles. Replacing the hidden rate by plus one makes every injection fail to stabilise that invisible error direction.

## Separation follows from a triangular matrix

Use the estimate in the state-feedback law $u=-K\\widehat x$ and assume the exact unsaturated model. In coordinates consisting of physical state and estimation error,

$$\\begin{pmatrix}x'\\\\e'\\end{pmatrix}
=\\begin{pmatrix}A-BK&BK\\\\0&A-LC\\end{pmatrix}
\\begin{pmatrix}x\\\\e\\end{pmatrix}.$$

The upper-right term appears because the estimate equals actual state minus error. The error equation is independent of the physical state in this ideal model. A block-triangular determinant factors, so the combined characteristic polynomial is the product of the controller and observer polynomials. The complete loop is exponentially stable exactly when both diagonal blocks are Hurwitz.

This proves the deterministic linear separation principle. Stabilizability and detectability are the structural conditions permitting those two independent designs. The result does not assert that the observer and controller can be chosen independently for every performance objective. Their gains still enter the coupling, command magnitude and response to noise.

If the two blocks share an eigenvalue, the coupling can create a larger Jordan block and polynomial factors in the transient. Strictly negative real parts still imply exponential decay with a suitable rate margin, but the combined transient is not simply the sum of two unrelated scalar decays. A pole list is an asymptotic spectral statement rather than a complete bound on every state component.

The controller uses its own estimate state, so this construction is a strictly dynamical output-feedback interconnection. It does not require solving an instantaneous static measurement-to-input loop. A controller with additional direct dependence on current measured output must check the feedthrough compatibility from the state-space chapter separately.

## Process disturbance and measurement error enter differently

Let the physical plant include additive disturbance $Ew$ and let the measured output include additive error $n$. The same observer gives

$$e'=(A-LC)e+Ew-Ln.$$

With estimated-state feedback, the physical equation also contains the disturbance. In state/error coordinates, process disturbance enters both blocks while measurement error enters through the injection term in the lower block and then through the feedback coupling. The triangular homogeneous spectrum remains the one just proved, but the forced response depends on both gains.

If both blocks are Hurwitz, the whole matrix is Hurwitz and the quadratic Lyapunov theorem gives a joint energy and explicit bounds for bounded or finite-energy forcing. Those constants can deteriorate as injection or feedback gains grow. No stochastic optimality is established by this deterministic stability argument. A Kalman filter and linear-quadratic stochastic separation require their own noise, cost and information assumptions.

The symbol $n$ here denotes a genuine measured error function in the stated deterministic input class. Ideal continuous-time white noise needs stochastic integration and is not silently treated as an ordinary bounded or square-integrable sample function. The distinction keeps the error equation meaningful under the chosen observation model.

## High gain can create an arbitrarily large transient

**Worked example: a double-integrator observer.** With position measurement, take injection $(2\\ell,\\ell^2)^T$ for positive $\\ell$. The error polynomial is $(\\lambda+\\ell)^2$. For initial error $(a,0)^T$, exact solution gives

$$e_1(t)=a(1-\\ell t)e^{-\\ell t},\\qquad
e_2(t)=-a\\ell^2t e^{-\\ell t}.$$

The second component reaches magnitude $|a|\\ell/e$ at time $1/\\ell$. Faster nominal poles therefore produce an unbounded family of velocity-error peaks as the gain parameter grows, even with fixed initial error norm. Every individual observer is exponentially convergent, so there is no contradiction with its asymptotic theorem.

When the estimate drives feedback, that transient can create a large command through the estimated velocity term. If it causes saturation, the exact linear closed-loop equation used for separation no longer describes the applied input. A gain choice cannot be justified solely by a short nominal settling time while ignoring its transient scale.

The phenomenon depends on coordinates and initial uncertainty. A rate claim should be paired with an initial-error set and a norm. Scaling an uncertain position coordinate does not remove its physical effect; the model and bounds must transform together.

## A sinusoidal measurement error reveals the noise trade-off

For that same observer, substitute a complex sinusoidal error into the stable error equation and solve for the steady sinusoidal amplitude. The second-coordinate gain from measurement error is

$$-\\frac{\\ell^2 i\\omega}{(i\\omega+\\ell)^2}.$$

This formula follows by eliminating the first coordinate from the two linear amplitude equations; it is not an observed numerical frequency sweep. Its magnitude is $\\ell^2|\\omega|/(\\omega^2+\\ell^2)$. At frequency equal to the gain parameter, the magnitude is $\\ell/2$. Increasing that parameter therefore increases the peak gain to velocity error.

A constant measurement bias behaves differently: its steady state has position error minus the bias and velocity error zero. One cannot assess all noise using either the constant-bias response or one high-frequency value alone. A disturbance class and performance norm are needed before comparing gains.

This exact example explains why observer speed, initial peaking and measurement sensitivity are separate outputs. A statistical filter can trade them using an assumed process/noise model, but the assumption is additional information rather than a consequence of observability rank.

## Reduced-order observation avoids differentiating measured coordinates

Suppose a coordinate transformation makes the noiseless measured output equal to the first state block. Partition the generator into four conforming blocks. The measured block's derivative depends on the unmeasured block, but directly differentiating measurements is undesirable. Introduce the auxiliary state $z=x_2-Hy$ for a constant design matrix $H$.

Substituting the two plant equations and replacing the unmeasured state by $z+Hy$ gives

$$z'=(A_{22}-HA_{12})z+
[(A_{22}-HA_{12})H+A_{21}-HA_{11}]y+(B_2-HB_1)u.$$

An observer copies this equation using measured output and known input, then reconstructs the missing block as its auxiliary estimate plus $Hy$. Its auxiliary error follows the homogeneous matrix $A_{22}-HA_{12}$. No measured derivative appears in the implementation equation, even though differentiating the coordinate identity was used in the derivation.

The pair formed by $A_{12}$ and $A_{22}$ has the needed observation property when the original pair does. Indeed, an eigenvector invisible to that pair would give the full-state eigenvector with zero measured block, contradicting the original PBH test. The converse follows the same block argument. Detectability likewise reduces on nonnegative-real-part modes. Dual pole assignment can therefore select a stable reduced error matrix under the corresponding hypothesis.

**Worked example: estimate velocity from position.** For the double integrator, choose $z=v-\\ell q$. Its equation is $z'=-\\ell z-\\ell^2q+u$. Copying this equation with measured position gives an auxiliary estimate and recover velocity by adding $\\ell q$. The error decays as $e^{-\\ell t}$. The observer has only one dynamic state because position is measured directly, rather than estimated dynamically as well.

With noisy position, the reconstructed velocity includes a direct gain times the measurement error. Reduced order does not imply automatic noise improvement. It changes which state components are taken directly from data and which are dynamically inferred. The exact noiseless derivation and the later noise model should be kept distinct.

## Use the applied input in the innovation model

If an observer uses a commanded input while the plant receives a different saturated input, cancellation fails. Let their difference be applied minus commanded input. With direct feedthrough included, the error equation gains $(B-LD)$ times that difference, in addition to the measurement-error term. This follows by subtracting both state equations and the feedthrough contribution in the innovation.

If the actual applied input is measured and used consistently in the observer, those mismatch terms cancel again. The physical feedback loop can still be nonlinear because of saturation, so the linear controller block and separation conclusion need not apply globally. Observing the correct actuation and proving a valid constrained closed loop are different tasks.

The same reasoning applies to a known delayed input versus an undelayed command. The observer should model what the plant received, with its timing. Inaccurate actuator timing appears as a model error rather than being removed by selecting faster observer poles.

## Discrete observers require discrete stability and a declared update order

For a sampled plant, a predictor-form observer has next estimate equal to the predicted state plus an injection of the current innovation. Its error matrix is $F-LC$, so stability requires eigenvalues inside the unit circle. The dual assignment proof applies to that discrete pair with a desired Schur polynomial. Continuous negative-real-part pole rules cannot be inserted directly as discrete magnitude rules.

A correction-then-prediction convention instead first updates the current estimate and then applies the transition. Its effective injection contains an extra transition factor. Thus the two gain matrices are not identical symbols for the same update order. If the transition is singular, not every predictor injection can even be factored in the proposed way. Measurements with feedthrough also require a clear statement of whether they precede or follow the current command.

Batch reconstruction, full-order prediction, reduced-order estimation and stochastic filtering solve related but different information problems. The observer contract should state the model, known applied input, measurement timing, initial uncertainty and disturbance class. Then the exact error equation determines which convergence or performance conclusion is justified.

## Exercises with staged hints and full solutions

<a id="observers-separation-principle-ex-1"></a>
### Exercise 1: feedthrough cancellation

Derive the observer error equation when the same known input enters the plant and the observer, including nonzero feedthrough.

<details><summary>Hint 1</summary>

Insert the full output formula into the innovation before subtracting dynamics.

</details>
<details><summary>Hint 2</summary>

Both the state input and the direct output input cancel.

</details>
<details><summary>Full solution</summary>

The innovation is $C(x-\\widehat x)$ because the same $Du$ is subtracted. Subtracting the observer equation from the plant gives $e'=Ae-LCe$. Thus the error matrix is $A-LC$ independently of the known input waveform. Omitting the feedthrough subtraction would add an artificial forcing term and would describe a different observer.

</details>

<a id="observers-separation-principle-ex-2"></a>
### Exercise 2: two observer poles

For a position-measured double integrator, choose injection assigning poles minus two and minus five.

<details><summary>Hint 1</summary>

The error polynomial is $\\lambda^2+l_1\\lambda+l_2$.

</details>
<details><summary>Hint 2</summary>

Match the sum and product of the desired positive decay rates.

</details>
<details><summary>Full solution</summary>

The target polynomial is $\\lambda^2+7\\lambda+10$, so injection is $(7,10)^T$. The error matrix is $\\begin{pmatrix}-7&1\\\\-10&0\\end{pmatrix}$ and has those two poles. The calculation is for continuous time and the stated negative output-error sign; discrete observer design would use a different stability region.

</details>

<a id="observers-separation-principle-ex-3"></a>
### Exercise 3: detectable pole restriction

For diagonal rates minus one and minus three and first-coordinate output, why can the second error pole not be assigned to minus four?

<details><summary>Hint 1</summary>

Apply the error matrix to a state difference on the hidden coordinate axis.

</details>
<details><summary>Hint 2</summary>

Output injection vanishes on an unobservable invariant mode.

</details>
<details><summary>Full solution</summary>

The hidden eigenvector has zero output, so $(A-LC)v=Av=-3v$ for every injection. That pole remains minus three. Detectability permits a stable observer because the unchanged pole already decays; arbitrary assignment of the whole polynomial would require full observability.

</details>

<a id="observers-separation-principle-ex-4"></a>
### Exercise 4: hidden instability

Repeat Exercise 3 when the hidden rate is plus one. What fails?

<details><summary>Hint 1</summary>

The hidden eigendirection still creates no innovation.

</details>
<details><summary>Hint 2</summary>

Its unchanged rate is now outside the stable half-plane.

</details>
<details><summary>Full solution</summary>

Every error matrix retains eigenvalue plus one on that direction, so no constant output-injection observer makes all initial errors decay. The pair is undetectable. A correct nominal model and perfect knowledge of the other coordinate do not supply information about the growing hidden difference.

</details>

<a id="observers-separation-principle-ex-5"></a>
### Exercise 5: separated spectrum

Controller poles are minus one and minus two; observer poles are minus four and minus five. Give the combined ideal spectrum and its hypothesis boundary.

<details><summary>Hint 1</summary>

Use the block-triangular state/error matrix.

</details>
<details><summary>Hint 2</summary>

The theorem concerns the exact unsaturated linear interconnection.

</details>
<details><summary>Full solution</summary>

The combined poles are their union, minus one, minus two, minus four and minus five. Stability follows for the exact continuous-time linear model with the known input and measurement convention. Saturation, incorrect feedthrough, delays or model error can change that matrix; the pole union alone does not certify those altered systems.

</details>

<a id="observers-separation-principle-ex-6"></a>
### Exercise 6: high-gain peaking

Find the maximum magnitude of the second error coordinate in the displayed high-gain solution with initial error $(a,0)^T$.

<details><summary>Hint 1</summary>

Differentiate $t e^{-\\ell t}$ for nonnegative time.

</details>
<details><summary>Hint 2</summary>

Its unique positive maximum occurs at reciprocal gain time.

</details>
<details><summary>Full solution</summary>

The maximum occurs at $t=1/\\ell$, with magnitude $|a|\\ell/e$. It grows linearly with observer gain even though the error poles move farther left. The result demonstrates transient peaking, not asymptotic instability. An estimated-state controller must account for this possible command transient when checking actuator bounds.

</details>

<a id="observers-separation-principle-ex-7"></a>
### Exercise 7: noise at the gain frequency

Evaluate the magnitude of the second-coordinate sinusoidal error gain at frequency equal to the observer gain parameter.

<details><summary>Hint 1</summary>

Use the squared magnitude of $i\\omega+\\ell$ in the denominator.

</details>
<details><summary>Hint 2</summary>

Then substitute $\\omega=\\ell$.

</details>
<details><summary>Full solution</summary>

The magnitude is $\\ell^2|\\omega|/(\\omega^2+\\ell^2)$, so at that frequency it is $\\ell/2$. Thus a fixed-amplitude measurement sinusoid can create a velocity-error amplitude growing with gain. This is an exact steady forced-response calculation; initial transients and a different noise spectrum require their own bounds.

</details>

<a id="observers-separation-principle-ex-8"></a>
### Exercise 8: a reduced-order velocity estimate

Write the double-integrator reduced observer for gain two and derive its error rate under exact position measurement.

<details><summary>Hint 1</summary>

Use auxiliary state velocity minus twice position.

</details>
<details><summary>Hint 2</summary>

The observer copies its forced equation and adds twice measured position back.

</details>
<details><summary>Full solution</summary>

The auxiliary observer is $\\widehat z'=-2\\widehat z-4y+u$, with velocity estimate $\\widehat v=\\widehat z+2y$. The true auxiliary state obeys the same forced equation, so its error derivative is minus twice its error. Exact position is used directly and no output derivative is needed. Measurement noise would enter both the forcing and the reconstructed estimate and requires a separate calculation.

</details>

<a id="observers-separation-principle-ex-9"></a>
### Exercise 9: a discrete predictor

For scalar sampled generator $F=1.2$ and output coefficient one, choose predictor injection $0.7$. Is its error stable?

<details><summary>Hint 1</summary>

Subtract the injection from the sampled coefficient.

</details>
<details><summary>Hint 2</summary>

Discrete stability uses magnitude below one rather than negative real part.

</details>
<details><summary>Full solution</summary>

The error multiplier is one half, so errors decay geometrically. Its positive sign is entirely compatible with discrete stability. A correction-before-prediction gain would not be numerically the same injection because the prediction factor multiplies that correction.

</details>

<a id="observers-separation-principle-ex-10"></a>
### Exercise 10: command versus applied input

For scalar $A=0$, $B=2$, $C=D=1$ and injection three, derive the error forcing from applied-minus-commanded mismatch and measurement error.

<details><summary>Hint 1</summary>

The mismatch enters both the plant state and the innovation feedthrough.

</details>
<details><summary>Hint 2</summary>

Its effective coefficient is the input coefficient minus injection times feedthrough.

</details>
<details><summary>Full solution</summary>

The error equation is $e'=-3e-\\Delta u-3n$, since $B-LD=2-3=-1$. Using the actual applied input consistently in the observer removes that mismatch term. It does not by itself restore the unsaturated controller dynamics if the actuator clips its command; the physical closed-loop model still needs its own analysis.

</details>

## Chapter synthesis

Detectability gives stable output injection, and a triangular state/error construction proves ideal separation. Peaking, forced noise gain, applied-input mismatch and update timing have independent performance consequences. Reduced-order observers exploit exact measured coordinates without differentiating them, under the same explicit information contract.
`;export{e as default};