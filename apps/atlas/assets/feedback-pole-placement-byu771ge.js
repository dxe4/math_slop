var e=`---
parent_id: book-control-theory
chapter_id: feedback-pole-placement
title: "State Feedback, Pole Assignment and Reference Tracking"
level: graduate
estimated_minutes: 420
license: CC BY-SA 4.0
---

# State Feedback, Pole Assignment and Reference Tracking

State feedback changes a plant's internal generator, but it cannot move an unreachable mode. For a controllable pair it can assign any real characteristic polynomial, while the resulting gains and transients still depend on the chosen design. This chapter proves both single-input and multiple-input pole assignment, derives stabilizability and tracking conditions, and connects an algebraic design with an explicit unsaturated operating region.

Preparation is the [controllability decomposition](control-reachability-observation.md), matrix polynomials, determinants and the [quadratic Lyapunov theorem](lyapunov-stability.md). Full state is assumed available for the design model. Replacing it with an estimate is a separate interconnection analysed in the observer chapter.

## Feedback preserves the reachable subspace

For $x'=Ax+Bu$ use the convention $u=-Kx+v$. The closed generator is $A-BK$, while the external input matrix remains $B$. The reachable subspace is unchanged. Every new Kalman block is in the old span by induction: multiplication by the old generator keeps that span invariant, and the feedback term lies in the input range. Reversing the identity to express $A$ through the closed generator proves the opposite inclusion.

In coordinates separating reachable and unreachable states, the generator has an upper-triangular block form and the input has zero lower block. Feedback changes the reachable block and its coupling, but leaves the unreachable diagonal block unchanged. Thus an unreachable unstable eigenvalue cannot be repaired by any state gain. This is an exact structural obstruction, independent of how large a gain is allowed.

The same argument explains why feedback does not create new input directions simply by using more state information. It can reshape dynamics within the existing reachable structure. Changing actuator placement or adding an input is a different model change.

## Single-input pole assignment is a polynomial isomorphism

Assume the controllability matrix $\\mathcal C=[b,Ab,\\ldots,A^{n-1}b]$ is invertible. For a row gain $k$, the determinant rank-one identity gives

$$p_{A-bk}(\\lambda)=p_A(\\lambda)+k\\operatorname{adj}(\\lambda I-A)b.$$

This identity is polynomial and remains valid at eigenvalues, where an inverse formula would not. The second term is a polynomial of degree at most $n-1$ and depends linearly on the gain. We show that this linear map from gain rows to such polynomials is injective.

If its polynomial is identically zero, divide by the nonzero characteristic polynomial for large complex argument. The scalar $k(\\lambda I-A)^{-1}b$ vanishes there. Expanding the resolvent as a convergent series in inverse powers gives $kb=kAb=\\cdots=kA^{n-1}b=0$. Controllability then forces the row gain to be zero. Domain and codomain both have dimension $n$, so injectivity proves bijectivity.

The difference between any desired monic real degree-$n$ polynomial and the original characteristic polynomial has exactly the allowed lower degree. There is therefore a unique real single-input gain assigning it. Complex target roots must occur in conjugate pairs to make that desired polynomial real. Repeated target roots are permitted, but assigning their polynomial does not separately assign an arbitrary eigenvector or Jordan structure.

## Ackermann's expression follows from the same identity

Let $\\ell=e_n^T\\mathcal C^{-1}$. It annihilates $b,Ab,\\ldots,A^{n-2}b$ and takes value one on $A^{n-1}b$. The row applied to the adjugate input vector is consequently the constant polynomial one. One proof expands the resolvent at infinity: all the earlier moments vanish, the first remaining moment has order minus $n$, and multiplication by the degree-$n$ characteristic polynomial leaves a polynomial tending to one.

For a desired polynomial $p_d$, set $k=\\ell p_d(A)$. The polynomial difference identity factors $p_d(A)-p_d(\\lambda)I$ as $(A-\\lambda I)$ times a polynomial matrix. When that factorisation is multiplied by the adjugate and the input vector, the generator-minus-argument factor contributes minus the original characteristic polynomial. Applying $\\ell$ leaves coefficient one from the highest-degree term, while all lower moments vanish. Thus

$$k\\operatorname{adj}(\\lambda I-A)b=p_d(\\lambda)-p_A(\\lambda),\\qquad
k=e_n^T\\mathcal C^{-1}p_d(A).$$

This proves Ackermann's formula with the present negative-feedback sign. It is an exact representation, not a recommendation to form a badly conditioned high-dimensional controllability inverse in floating point. The existence theorem and a numerically appropriate pole-assignment algorithm are separate questions.

**Worked example: a second-order plant.** Take generator $\\begin{pmatrix}0&1\\\\-2&-3\\end{pmatrix}$ and input column $(0,1)^T$. The controllability inverse is $\\begin{pmatrix}3&1\\\\1&0\\end{pmatrix}$, so $\\ell=(1,0)$. Desired poles minus three and minus four give polynomial $\\lambda^2+7\\lambda+12$. Cayley–Hamilton reduces its matrix value to $4A+10I$. The gain is therefore $(10,4)$, and the closed generator has second row $(-12,-7)$, with exactly the desired characteristic polynomial. Direct substitution verifies both the formula and its sign convention.

## Multiple inputs can be reduced constructively to a cyclic direction

For a controllable pair with several inputs, choose any nonzero vector $b=Bv$ in the input range. We prove that some preliminary feedback matrix $F$ makes the pair $(A+BF,b)$ single-input controllable.

Start a list with $v_1=b$. Suppose independent vectors through $v_j$ have been chosen, with each next vector formed as $Av_i+Bu_i$. If no input choice could place $Av_j+Bu$ outside their span, varying that input would show the whole input range lies inside the span, and setting it to zero would show $Av_j$ lies inside too. The earlier recursion would then put every $Av_i$ inside the same span. That span would be an invariant subspace containing the input range. Controllability forbids such a proper subspace, so another independent vector can always be chosen until the list is a basis.

Define a real linear map $F$ by $Fv_i=u_i$ on the first $n-1$ basis vectors and any value on the last. Then $(A+BF)v_i=v_{i+1}$ along the constructed chain. The chosen input direction is cyclic for that modified generator. Apply the proved single-input theorem to assign a desired polynomial by subtracting $bk$. Since $b=Bv$, the combined matrix is

$$A+BF-bk=A-B(vk-F).$$

This is ordinary multiple-input state feedback for the original plant. The construction proves arbitrary real characteristic-polynomial assignment without assuming one original input column was already cyclic. Multiple-input gains are generally nonunique because there are more available degrees of freedom than polynomial coefficients.

**Worked example: two direct inputs.** With zero planar generator and identity input matrix, choose the first coordinate direction and preliminary map $F=\\begin{pmatrix}0&0\\\\1&0\\end{pmatrix}$. Its cyclic basis is the ordinary coordinate basis. To assign poles minus one and minus two, the single-input correction is row $(3,2)$. The combined negative-feedback gain is $\\begin{pmatrix}3&2\\\\-1&0\\end{pmatrix}$, giving closed generator $\\begin{pmatrix}-3&-2\\\\1&0\\end{pmatrix}$. A diagonal gain with entries one and two gives the same polynomial through a different matrix. Equal pole lists do not imply equal transients or input demands.

## Stabilizability is exactly the remaining spectral condition

The reachable block is a controllable pair. If the unreachable block is Hurwitz, assign stable poles to the reachable block by the theorem just proved. The full closed generator is block triangular with those two stable diagonal blocks, so it is Hurwitz. Conversely, an unstable or marginal unreachable eigenvalue is unchanged by feedback and prevents that conclusion. This proves the stabilizability criterion from the decomposition.

The equivalent PBH condition requires full row rank of $[\\lambda I-A\\ \\ B]$ only for complex arguments with nonnegative real part. A hidden stable mode may prevent exact transfer to arbitrary endpoints without obstructing stabilization. The distinction is useful whenever the design goal is eventual state decay rather than full finite-horizon reachability.

**Worked example: one unreachable stable coordinate.** With diagonal rates one and minus two and input column $(1,0)^T$, gain $(3,0)$ makes both closed rates minus two. The second coordinate was never reachable, but it needed no repair. Replacing its rate by plus two makes the same actuator arrangement unstabilizable. No choice of either gain entry changes that autonomous unstable rate.

## Constant-reference feedforward needs a solvable equilibrium map

Add feedforward $u=-Kx+Nr$ for constant reference. With a Hurwitz closed generator, its equilibrium state is minus the inverse closed generator times $BNr$. Including direct feedthrough, the equilibrium output map is

$$G_0N r,\\qquad
G_0=D-(C-DK)(A-BK)^{-1}B.$$

Tracking every constant reference of the chosen output dimension requires a right inverse of this matrix. It exists exactly when the matrix has full row rank. A scalar nonzero gain has its reciprocal; a zero gain or an underactuated output combination cannot be repaired by declaring an arbitrary inverse. Actuator constraints must still admit the resulting equilibrium input.

**Worked example: a position reference.** For a double integrator with gain $(k_p,k_d)$, position output and zero feedthrough, the equilibrium gain is $1/k_p$. Thus feedforward $N=k_p$ gives the nominal law $u=-k_pq-k_dv+k_pr$. Desired poles minus two and minus three give gains six and five. Starting from rest under a constant reference, the position is $r(1-3e^{-2t}+2e^{-3t})$, its velocity is $6r(e^{-2t}-e^{-3t})$, and initial command is $6r$.

A constant additive acceleration disturbance changes the equilibrium position to reference plus disturbance divided by proportional gain. Nominal feedforward therefore does not reject an unknown constant disturbance exactly. Increasing the gain changes that offset and the control demand; it does not create the missing internal model.

## Integral action adds a state and a zero-frequency condition

For zero feedthrough, append an integral state with derivative equal to reference minus measured output. The augmented generator has blocks $\\begin{pmatrix}A&0\\\\-C&0\\end{pmatrix}$ and input column blocks $(B,0)^T$. State feedback on this augmented plant includes a gain on the integral state. If the augmented pair is stabilizable, stable pole assignment yields a unique equilibrium for constant forcing and the integral-state equation forces the steady output error to zero.

The augmented stabilizability condition is stronger than the original one. For a nonzero spectral argument, the left-eigenvector equations reduce to the original PBH condition because the added zero-state block forces the extra left component to vanish. At zero, the required full rank is the Rosenbrock condition on the stack with blocks $[-A,-B]$ and $[C,0]$. This excludes a blocking invariant zero at the origin and requires enough input directions for the outputs being regulated.

Thus one cannot append arbitrary error integrators to any stabilizable plant and assume success. The new states add new reachability obligations. Constant-disturbance rejection also presupposes that the necessary equilibrium input is admissible. Saturation can prevent that equilibrium and let the integrator keep accumulating error, producing windup outside the unsaturated linear theorem.

## A Lyapunov ellipsoid can certify where saturation is absent

Suppose the designed homogeneous closed loop has positive energy matrix $P$ and consider its sublevel $x^TPx\\le c$. For row $K_i$, Cauchy–Schwarz after the coordinate change by $P^{1/2}$ gives

$$\\max_{x^TPx\\le c}|K_ix|=\\sqrt{cK_iP^{-1}K_i^T}.$$

Equality is attained in the corresponding row direction. Choose the level so every such maximum is within its actuator magnitude limit. The linear feedback then agrees with the saturated physical law throughout that ellipsoid. Since the energy derivative keeps that ellipsoid invariant, the unsaturated stability proof remains valid there. The argument provides an explicit sufficient operating region, not a global saturation theorem.

For a constant reference, translate to deviations from its equilibrium and account for the equilibrium actuator load before allocating the remaining magnitude margin. The same geometric formula applies to the remaining allowance. Ignoring the nonzero equilibrium input would overstate the available transient control range.

## Poles, uncertainty and transients are separate design quantities

If a Lyapunov equation supplies dissipation matrix $Q$, a constant matrix perturbation $E$ changes its derivative by at most $2\\|P\\|\\|E\\|\\|x\\|^2$. A sufficient strict margin is $\\|E\\|<\\lambda_{\\min}(Q)/(2\\|P\\|)$. This is a conservative but explicit robustness statement in the declared norm.

For uncertain plant matrices, the closed perturbation includes the input-matrix error multiplied by the state gain. A large gain can therefore amplify a small actuator-model error. Pole locations alone do not determine that margin, the nonnormal transient or the command magnitude. A legitimate comparison reports the state/input coordinates, gain, desired polynomial, energy or transient bounds and the region where the model and actuation assumptions apply.

The theorem proves algebraic pole assignment for the exact finite-dimensional unconstrained model. The same chapter's equilibrium and ellipsoid arguments state additional conditions needed for tracking and a constrained local implementation. These are connected mathematical questions, with different conclusions.

## Exercises with staged hints and full solutions

<a id="feedback-pole-placement-ex-1"></a>
### Exercise 1: feedback preserves reachability

Explain why every column of $(A-BK)^jB$ belongs to the original Kalman span.

<details><summary>Hint 1</summary>

Use induction and invariance of that span under the old generator.

</details>
<details><summary>Hint 2</summary>

The additional feedback term always lies in the input range.

</details>
<details><summary>Full solution</summary>

The initial block is the same input matrix. If a later block lies in the old reachable span, applying the old generator keeps it there and subtracting the input matrix times a row combination also stays there. This proves one inclusion by induction. Expressing the old generator as the new one plus the same input-feedback term proves the reverse inclusion, so the reachable subspace is unchanged.

</details>

<a id="feedback-pole-placement-ex-2"></a>
### Exercise 2: a scalar gain

For $x'=2x+3u$ and law $u=-kx$, assign closed pole minus four.

<details><summary>Hint 1</summary>

Substitute the stated negative-feedback convention directly.

</details>
<details><summary>Hint 2</summary>

Solve one linear coefficient equation rather than guessing the gain sign.

</details>
<details><summary>Full solution</summary>

The closed coefficient is $2-3k$. Setting it equal to minus four gives $k=2$. The nominal state decays at rate four. This algebra assumes the input can realise the required state-proportional command; it does not by itself establish a globally admissible actuator range.

</details>

<a id="feedback-pole-placement-ex-3"></a>
### Exercise 3: two double-integrator poles

Assign poles minus one and minus four using position and velocity feedback.

<details><summary>Hint 1</summary>

Expand the product of the two desired linear factors.

</details>
<details><summary>Hint 2</summary>

Match its constant and linear coefficients with the closed second-order polynomial.

</details>
<details><summary>Full solution</summary>

The desired polynomial is $\\lambda^2+5\\lambda+4$, so proportional gain is four and derivative gain is five. The closed matrix is $\\begin{pmatrix}0&1\\\\-4&-5\\end{pmatrix}$. Positive gains alone establish a stable second-order polynomial, while these particular coefficients establish the requested pole values.

</details>

<a id="feedback-pole-placement-ex-4"></a>
### Exercise 4: verify the two-input construction

For zero planar generator and identity input matrix, verify the characteristic polynomial of the worked nondiagonal gain.

<details><summary>Hint 1</summary>

The closed generator is minus the gain.

</details>
<details><summary>Hint 2</summary>

Compute its trace and determinant.

</details>
<details><summary>Full solution</summary>

The closed matrix has entries $(-3,-2;1,0)$, trace minus three and determinant two. Its polynomial is $\\lambda^2+3\\lambda+2$, with roots minus one and minus two. The diagonal gain with entries one and two has the same polynomial but a different state transition and input response. Multiple-input polynomial assignment is not a unique matrix-design problem.

</details>

<a id="feedback-pole-placement-ex-5"></a>
### Exercise 5: the unreachable block

Why can no feedback stabilize diagonal rates minus one and plus two with input column $(1,0)^T$?

<details><summary>Hint 1</summary>

Write the second state equation under an arbitrary row gain.

</details>
<details><summary>Hint 2</summary>

The input matrix has no second component.

</details>
<details><summary>Full solution</summary>

The second equation remains $x_2'=2x_2$ for every gain. Its eigenvalue is an unchanged unreachable unstable mode, so the complete closed generator cannot be Hurwitz. Observing the state perfectly does not create the absent actuator direction. A changed actuator model would be needed to alter this obstruction.

</details>

<a id="feedback-pole-placement-ex-6"></a>
### Exercise 6: nominal position tracking

For a double integrator with positive proportional gain and zero feedthrough, derive its scalar feedforward gain and its offset under constant acceleration disturbance.

<details><summary>Hint 1</summary>

At equilibrium the velocity is zero.

</details>
<details><summary>Hint 2</summary>

Solve the remaining acceleration balance once without and once with disturbance.

</details>
<details><summary>Full solution</summary>

The nominal balance is $0=-k_pq+Nr$, so tracking all references requires $N=k_p$. With additive constant disturbance $d$, the balance becomes $q=r+d/k_p$. Nominal feedforward therefore removes the nominal reference offset but does not exactly reject unknown constant forcing. Integral action changes the model by adding a state capable of representing that constant error.

</details>

<a id="feedback-pole-placement-ex-7"></a>
### Exercise 7: integral action for an integrator

For $x'=u+d$, $y=x$, choose $u=-kx+k_i\\eta$, $\\eta'=r-x$. Find the characteristic polynomial and steady error for constant forcing when the augmented system is stable.

<details><summary>Hint 1</summary>

Use the two-state matrix with upper row $(-k,k_i)$.

</details>
<details><summary>Hint 2</summary>

At equilibrium the integral-state derivative must vanish.

</details>
<details><summary>Full solution</summary>

The polynomial is $\\lambda^2+k\\lambda+k_i$, Hurwitz for positive gains. At equilibrium $x=r$, so tracking error is zero, and $\\eta=(kr-d)/k_i$. The applied equilibrium input is minus the disturbance. If an actuator bound forbids that input, the assumed unsaturated equilibrium is infeasible and the exact zero-error conclusion does not apply to the constrained interconnection.

</details>

<a id="feedback-pole-placement-ex-8"></a>
### Exercise 8: an actuator ellipsoid

For gain row $(2,1)$ and energy matrix $\\operatorname{diag}(1,4)$, find the largest energy level certified to keep input magnitude at most one.

<details><summary>Hint 1</summary>

Compute the row's quadratic form in the inverse energy metric.

</details>
<details><summary>Hint 2</summary>

Its level-scaled square root is the exact maximum command magnitude.

</details>
<details><summary>Full solution</summary>

The quadratic form is $4+1/4=17/4$. The maximum magnitude on level $c$ is $\\sqrt{17c}/2$, so $c\\le4/17$ is necessary and sufficient for that entire ellipsoid to satisfy the stated magnitude bound. To turn this geometry into an invariant operating-region certificate, the energy must also decrease along the designed closed dynamics there.

</details>

<a id="feedback-pole-placement-ex-9"></a>
### Exercise 9: an uncertainty margin

If the smallest dissipation eigenvalue is two and the energy-matrix norm is five, give the displayed sufficient perturbation bound.

<details><summary>Hint 1</summary>

Compare the negative quadratic term with twice the energy norm times perturbation norm.

</details>
<details><summary>Hint 2</summary>

Use a strict inequality for a strict decay certificate.

</details>
<details><summary>Full solution</summary>

The perturbation norm must be strictly below $2/(2\\cdot5)=1/5$. This is a sufficient common quadratic margin in the declared coordinates, not a necessary exact stability radius. A larger perturbation may still be stable, but that conclusion is not certified by this bound.

</details>

<a id="feedback-pole-placement-ex-10"></a>
### Exercise 10: prove the cyclic-direction step

In the multiple-input construction, why would failure to extend the independent chain before dimension $n$ contradict controllability?

<details><summary>Hint 1</summary>

Compare two possible choices of the next input vector.

</details>
<details><summary>Hint 2</summary>

Then use the earlier recursion to show invariance of the current span.

</details>
<details><summary>Full solution</summary>

If every $Av_j+Bu$ stayed in the current span, varying $u$ would put the whole input range there, and zero input would put $Av_j$ there. Earlier relations $Av_i=v_{i+1}-Bu_i$ then put the generator image of every previous basis vector there too. The current proper span would be invariant and contain the input range, hence all Kalman columns. That contradicts full controllability. Thus an independent next vector always exists until the full dimension is reached.

</details>

## Chapter synthesis

Controllability makes the single-input polynomial map invertible and permits a constructive multiple-input reduction. Unreachable stable modes give exactly the stabilizability allowance. Tracking, integral action, actuator regions and uncertainty margins add further explicit conditions; a pole list alone does not supply them.
`;export{e as default};