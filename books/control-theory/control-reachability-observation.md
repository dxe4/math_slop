
# Controllability and Minimum-Effort Transfers

Controllability asks which endpoint displacements an input can produce over a fixed horizon. This chapter proves the rank and Gramian criteria, characterises minimum-effort controls including singular cases, and separates unconstrained linear reachability from amplitude limits and nonlinear mechanisms. It retains its original `control-reachability-observation` identity and all twenty original exercises and solutions.

The complete earlier integrated teaching source is a [registered supporting reading](retained-control-structure-reading.md). Its feedback, observation, observer, regulation and sampling mathematics remains there while separate primary chapters are authored. Original cross-topic exercises remain here as bridges so earlier exercise identities and learner records are preserved. Required preparation is the [state contract](state-space-models.md), [transition formula](transition-matrices-linear-systems.md), and finite-dimensional orthogonality.

## 1. State-space contract

Consider

$$z'=Az+Bu,\qquad y=Cz+Du.$$

The state z is n-dimensional, input u is m-dimensional, and output y is p-dimensional. Matrices are constant. Inputs are at least integrable over finite intervals. In the basic structural theory:

- the model is exact, linear, and time invariant;
- the full state belongs to real n-space with no constraints;
- actuators have no amplitude or rate limits;
- parameters are known;
- measurements in the observability definition are noiseless;
- input is known exactly.

Every later engineering conclusion must revisit these idealizations.

Variation of constants gives

$$z(T)=e^{TA}z_0+\int_0^T e^{(T-s)A}Bu(s)\,ds.$$

The second term is the reachable displacement from zero.


## 2. Reachable subspace and the Kalman matrix

Define the controllability matrix

$$\operatorname{Ctrb}=[B,AB,A^2B,\ldots,A^{n-1}B].$$

Its column space is invariant under A. Cayley–Hamilton expresses every A to k for k at least n as a combination of lower powers, so no later power creates a new direction.

Why do the columns describe reachability? Expand exp((T-s)A)B as a power series: every integrand lies in the span of B, AB, and higher powers, hence in the Kalman column space. Thus every reachable displacement belongs to that space.

The converse can be established with the controllability Gramian or suitable smooth inputs. Therefore:

**Kalman controllability criterion.** The pair (A,B) is controllable exactly when Ctrb has rank n.

Equivalent language differs slightly across texts. Reachability from zero and controllability to zero coincide for finite-dimensional continuous-time linear time-invariant systems, but not in every infinite-dimensional or constrained setting.

### Double integrator

Let

$$A=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad B=\begin{pmatrix}0\\1\end{pmatrix}.$$

Then

$$AB=\begin{pmatrix}1\\0\end{pmatrix},\qquad\operatorname{Ctrb}=\begin{pmatrix}0&1\\1&0\end{pmatrix}.$$

The determinant is -1, so position and velocity are both reachable. The actuator directly changes acceleration; integration carries that influence into velocity and position.

### An unreachable mode

Let

$$A=\begin{pmatrix}0&0\\0&-1\end{pmatrix},\qquad B=\begin{pmatrix}1\\0\end{pmatrix}.$$

Then AB is zero and the controllability matrix has rank one. The second state decays but cannot be changed by the input. Stability does not make it controllable.


## 3. Controllability Gramian and energy

For horizon T positive, define

$$W_c(T)=\int_0^T e^{sA}BB^Te^{sA^T}\,ds.$$

For any vector v,

$$v^TW_cv=\int_0^T\|B^Te^{sA^T}v\|^2\,ds,$$

so the Gramian is positive semidefinite. It is positive definite exactly when the system is controllable.

To reach target z_f from zero at time T, a minimum L2-energy input is

$$u_*(t)=B^Te^{(T-t)A^T}W_c(T)^{-1}z_f.$$

Substitution verifies the endpoint. A Hilbert-space projection or completing-square argument proves minimal energy

$$z_f^TW_c(T)^{-1}z_f.$$

Small Gramian eigenvalues signal directions that are theoretically reachable but expensive. The value depends on state and input scaling. Comparing raw Gramian condition numbers without units or normalization can mislead.

If inputs are bounded pointwise, the reachable set is no longer all of real n-space at a fixed short time even for a Kalman-controllable pair. Bang-bang and constrained optimal control require additional theory.


## 4. Coordinate changes preserve structure

Let z=Sx with invertible S. Then

$$x'=S^{-1}ASx+S^{-1}Bu.$$

The new controllability matrix is related to the old one by invertible factors and block transformations, so rank is unchanged. Controllability is a property of the input-state dynamics, not a chosen coordinate basis.

Euclidean Gramian eigenvalues are not coordinate invariant. Under this state change the Gramian becomes $S^{-1}W_cS^{-T}$ and the target displacement becomes $S^{-1}d$. The minimum input effort for that corresponding physical target is unchanged when the input cost is unchanged, by substituting these congruences in its quadratic formula. Scaling metres to millimetres can change raw Gramian entries greatly without changing the physical transfer. If the input coordinates or a state cost also change, their weights must transform consistently.

The controllability decomposition chooses coordinates in which reachable states occupy one block:

$$\overline A=\begin{pmatrix}A_r&A_{12}\\0&A_u\end{pmatrix},\qquad\overline B=\begin{pmatrix}B_r\\0\end{pmatrix}.$$

Unreachable dynamics evolve autonomously. State feedback cannot move eigenvalues of A_u. A system is **stabilizable** when every unreachable mode is already stable. Stabilizability, not full controllability, is the right condition for existence of stabilizing state feedback.


## The endpoint operator proves the rank criterion in both directions

For a fixed positive horizon, use square-integrable inputs with the usual integral inner product. Define the endpoint operator $\mathcal R_Tu=\int_0^T e^{A(T-t)}Bu(t)dt$. Its adjoint sends a state vector to the input function $B^Te^{A^T(T-t)}v$, as follows by moving the finite-dimensional inner product through the integral. The product of the operator with its adjoint is exactly the controllability Gramian.

The Gramian's kernel equals the adjoint's kernel, because its quadratic form is the squared norm of that adjoint image. Its range therefore equals the range of the endpoint operator: both are the orthogonal complement of that common kernel in the finite-dimensional state space. The endpoint range is a linear subspace of a finite-dimensional space and is closed, even though its input domain is infinite dimensional.

If the Gramian quadratic form vanishes, its continuous nonnegative integrand vanishes at every time. The analytic function $B^Te^{A^Ts}v$ is zero throughout the interval. Differentiating at zero gives orthogonality to every column of $B,AB,\ldots,A^{n-1}B$. Conversely, those finitely many orthogonality conditions imply all higher ones by Cayley–Hamilton, so the exponential series vanishes identically. Thus the Gramian kernel is precisely the orthogonal complement of the Kalman column space.

Combining the two range identities proves that the reachable subspace is exactly that column space, for every positive horizon. In particular full rank is equivalent to positive-definite Gramian and reachability of every state. No numerical determinant threshold is part of the exact theorem. The same range is obtained with merely integrable inputs: square-integrable inputs already realise every direction in it, while every integrable input remains in the invariant Kalman span.

For a nonzero initial state, replace the target by its required displacement from the homogeneous endpoint. Controllability from every initial state to every target follows immediately under full rank. Reaching zero from every initial state is equivalent here because the homogeneous transition is invertible. These equivalences rely on finite-dimensional unconstrained linear dynamics, not on a universal definition covering every control setting.

## Minimum effort is an orthogonal projection, not a guessed waveform

For a reachable displacement $d$ and invertible Gramian, set the candidate input to the adjoint endpoint image of $W_c^{-1}d$. Applying the endpoint operator verifies feasibility. If another feasible input differs by $v$, then its endpoint difference is zero. Its input inner product with the candidate is therefore the state inner product of $W_c^{-1}d$ with that zero endpoint difference, so it vanishes.

The squared norm of any feasible input is consequently the candidate's squared norm plus the squared norm of $v$. This proves both minimality and uniqueness up to almost-everywhere equality. Substitution gives minimum cost $d^TW_c^{-1}d$. The proof identifies the exact Hilbert-space projection and does not rely on differentiating an unconstrained finite list of input samples.

If the Gramian is singular, a feasible displacement must lie in its range. Use its spectral pseudoinverse there: the candidate is the adjoint image of $W_c^\dagger d$, and its endpoint is $W_cW_c^\dagger d=d$. The same orthogonality proof gives minimum squared norm $d^TW_c^\dagger d$. Multiplier vectors can differ by a Gramian-null vector, but their adjoint images are identical. The minimum input remains unique even when the state-space multiplier representation is not.

An input weight changes the adjoint metric. With a positive-definite constant effort matrix $R$, the weighted Gramian uses $BR^{-1}B^T$ inside its integral, and the candidate input includes $R^{-1}$ before the transposed input matrix. Completing the weighted square proves the corresponding formula. This effort is the declared quadratic input cost, not automatically physical work or stored energy. Changing input units requires transforming the weight too.

## Short horizons reveal the scale of feasible effort

**Worked example: rest-to-rest double-integrator motion.** The finite-horizon Gramian and its inverse are

$$W_c(T)=\begin{pmatrix}T^3/3&T^2/2\\T^2/2&T\end{pmatrix},\qquad
W_c(T)^{-1}=\begin{pmatrix}12/T^3&-6/T^2\\-6/T^2&4/T\end{pmatrix}.$$

Their determinant is $T^4/12$, positive for every positive horizon. For unit position transfer with zero initial and final velocity, the minimum squared acceleration effort is $12/T^3$. The minimising input is $6/T^2-12t/T^3$. Its integral is zero, giving the required final velocity, and its position-weighted integral is one. Thus theoretical controllability at arbitrarily short time coexists with diverging effort and input peaks.

Now impose an acceleration bound $|u|\le U$ while retaining zero endpoint velocities. The displacement is the integral of $(T-t)u(t)$. Subtract half the horizon times the zero velocity integral to rewrite it using $(T/2-t)u(t)$. Its maximum is at most $U\int_0^T|T/2-t|dt=UT^2/4$, attained by positive maximum acceleration in the first half and negative maximum acceleration in the second.

Unit displacement therefore needs horizon at least $2/\sqrt U$ under this amplitude restriction. The unconstrained minimum-squared-effort waveform has peak $6/T^2$, so it meets the same bound only at the larger threshold $\sqrt{6/U}$. There can be amplitude-feasible transfers for which the unconstrained least-effort formula is infeasible. A constrained optimum is a new optimization problem, not obtained by clipping that formula without checking its endpoint.

## A left-eigenvector test exposes unreachable modes

The Popov–Belevitch–Hautus criterion says full controllability is equivalent to full row rank of $[\lambda I-A\ \ B]$ for every complex scalar $\lambda$. If a nonzero left eigenvector annihilates the input matrix, it annihilates every Kalman block, so full rank is impossible.

Conversely, if the Kalman span is proper, its orthogonal complement is invariant under the transpose generator: pairing with a reachable vector after applying the transpose is the same as pairing with the generator applied to that reachable vector. The latter remains reachable. Complexifying this nonzero invariant complement supplies an eigenvector, hence a nonzero left eigenfunctional annihilating all input directions. This proves the converse and the displayed rank criterion.

The test is especially useful when repeated eigenvalues make separate right eigenvectors misleading. It asks about every left eigenfunctional, not whether the input has a nonzero dot product with one arbitrarily selected eigenbasis. Stabilizability relaxes the requirement to modes with nonnegative real part. The reachable/unreachable block decomposition proves necessity of stability in the unreachable block; sufficiency uses pole assignment on the reachable pair. That pole-assignment theorem has its own feedback chapter and is not inferred from Gramian positivity alone.

## Time-varying input directions can create reachability absent in every frozen pair

For continuous time-varying matrices on a finite interval, the endpoint map uses the transition kernel. Its Gramian is the integral of $\Phi(T,t)B(t)B(t)^T\Phi(T,t)^T$. The same adjoint and kernel proof says it is positive definite exactly when the finite-horizon endpoint map is onto. An instantaneous Kalman matrix for a frozen coefficient is not a replacement for this time-dependent criterion.

**Worked example: a rotating actuator.** Set the state generator to zero and use one input with direction $(\cos t,\sin t)^T$ on a horizon of length $\pi$. Every frozen pair has only one reachable direction. Across the interval, however, the Gramian is $(\pi/2)I$, because the squared sine and cosine integrals are equal and the cross integral vanishes. Every planar target is reachable. The minimum input is $(2/\pi)(d_1\cos t+d_2\sin t)$, and its squared effort is $2\|d\|^2/\pi$.

This example is exact and illustrates the role of scheduled input direction. It does not say an arbitrary rotating actuator remains well conditioned on every short interval. As the interval shrinks, its directions become nearly parallel and the small Gramian eigenvalue reflects the resulting effort cost.

## Linearised controllability is sufficient locally under an open input allowance

Consider a continuously differentiable nonlinear plant near an equilibrium input and state. If its linearisation is controllable, choose finitely many smooth input waveforms whose linear endpoint images form a state-space basis; the Gramian construction supplies such waveforms. Parameterise inputs by their small real coefficients. Smooth ODE dependence makes the nonlinear endpoint a continuously differentiable function of those coefficients on a common finite horizon.

At zero coefficients, its derivative is the linear endpoint map on the chosen waveforms, an invertible square matrix. The implicit function theorem therefore reaches every sufficiently nearby endpoint from that equilibrium with small input variations. Continuous dependence keeps the associated paths in the local model neighbourhood.

The input variations must actually be admissible in both signs around the reference input. A scalar integrator with input restricted to be nonnegative is linearly controllable as an unconstrained pair, yet cannot reach a negative state from zero. A reference input on a constraint boundary therefore does not satisfy the open-allowance hypothesis. State constraints or insufficient common existence can also invalidate the argument.

## Rank deficiency does not prove nonlinear impossibility

**Worked example: a closed input loop moves a hidden coordinate.** Consider $x_1'=u_1$, $x_2'=u_2$, $x_3'=x_1u_2-x_2u_1$ from zero. Its linearisation has no direct third-coordinate input and has rank two. Move first a distance $a$ in the first coordinate, then a distance $b$ in the second, then return the first and finally the second to zero, using one input at a time.

The second leg adds $ab$ to the third coordinate. The third leg adds another $ab$ because its first input is negative while the second coordinate is fixed positive. The other two legs add zero. The final first and second coordinates are zero, while the third has changed by $2ab$. Reversing orientation reverses its sign. This exact nonlinear mechanism is invisible to the first-order rank test at zero.

The example does not remove input and state constraints or prove an arbitrary nonlinear system controllable. It shows that the linear criterion is sufficient under its local hypotheses, but its failure need not be necessary for nonlinear reachability. Lie-bracket methods later formalise such loop effects. A conclusion must specify whether it concerns the linear model, a local nonlinear endpoint map or a constrained physical transfer.

## Worked problems

<a id="control-reachability-observation-ex-1"></a>

### 1. Reachability with two inputs

If B itself has rank n, why is the pair controllable regardless of A?

<details><summary>Hint 1</summary>

The direct input columns already span the state space.

</details>

<details><summary>Hint 2</summary>

Adding later Kalman blocks cannot reduce that span; the Gramian theorem supplies fixed-horizon reachability.

</details>

<details><summary>Full solution</summary>

**Solution.** The first block of the controllability matrix is B. If its columns already span the entire state space, the full matrix has rank n. Instantaneous input directions cover every state direction in the ideal unconstrained model.

</details>

<a id="control-reachability-observation-ex-2"></a>

### 2. Stabilizable but not controllable

For A=diag(1,-2) and B=[1,0] transpose, classify controllability and stabilizability.

<details><summary>Hint 1</summary>

Identify the autonomous unreachable block rather than requiring full rank.

</details>

<details><summary>Hint 2</summary>

An unreachable stable mode need not be moved to obtain a stable closed loop.

</details>

<details><summary>Full solution</summary>

**Solution.** The controllability matrix has both columns in the first coordinate, so rank is one. The unreachable mode has eigenvalue -2 and is stable, while the unstable eigenvalue 1 is reachable. Therefore the pair is not controllable but is stabilizable.

</details>

<a id="control-reachability-observation-ex-3"></a>

### 3. Observable from position

For A=[[0,1],[-2,-3]] and C=[1,0], compute Obsv.

<details><summary>Hint 1</summary>

Multiply the output row by the state matrix.

</details>

<details><summary>Hint 2</summary>

The first two observation rows already distinguish position and velocity.

</details>

<details><summary>Full solution</summary>

**Solution.** CA=[0,1], so Obsv=[[1,0],[0,1]], full rank. Position history distinguishes both initial position and velocity in the ideal noiseless model.

</details>

<a id="control-reachability-observation-ex-4"></a>

### 4. Hidden instability

For A=diag(-1,1) and C=[1,0], is the pair detectable?

<details><summary>Hint 1</summary>

The second state never appears in the measured output.

</details>

<details><summary>Hint 2</summary>

Its positive eigenvalue means the hidden difference cannot decay under output injection.

</details>

<details><summary>Full solution</summary>

**Solution.** The second mode is unobservable because it never affects the first output. Its eigenvalue is +1, so it is unstable. The pair is not detectable; no output-injection observer can force estimation error in that hidden mode to decay.

</details>

<a id="control-reachability-observation-ex-5"></a>

### 5. Repair a pole-placement claim

“A controllable plant can be made safe by assigning very negative poles.”

<details><summary>Hint 1</summary>

Pole assignment is an unconstrained algebraic theorem.

</details>

<details><summary>Hint 2</summary>

Its hypotheses do not impose actuator limits, measurement quality or a valid sampled implementation.

</details>

<details><summary>Full solution</summary>

**Solution.** Controllability only gives algebraic assignment in the exact unconstrained model. Very negative poles may require large gains and control rates, amplify noise, trigger saturation, excite unmodeled modes, and become fragile to delay or sampling. Safety requires constraints, uncertainty, validation, and failure handling in addition to pole location.

</details>

<a id="control-reachability-observation-ex-6"></a>

### 6. Double-integrator controllability

For $A=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, $B=(0,1)^{\mathsf T}$, compute the controllability matrix.

<details><summary>Hint 1</summary>

Apply the generator once to the input column.

</details>

<details><summary>Hint 2</summary>

The two resulting columns point in independent state directions.

</details>

<details><summary>Full solution</summary>

**Solution.** $AB=(1,0)^{\mathsf T}$, so $[B,AB]=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, which has rank two. Both position and velocity are reachable in the ideal unconstrained model.

</details>

<a id="control-reachability-observation-ex-7"></a>

### 7. Finite-horizon Gramian meaning

If $v^TW_c(T)v$ is tiny, what does it indicate?

<details><summary>Hint 1</summary>

Use the Gramian quadratic form as squared gain from input to endpoint projection.

</details>

<details><summary>Hint 2</summary>

Small nonzero gain differs from a zero reachable direction; minimum target effort involves the inverse Gramian.

</details>

<details><summary>Full solution</summary>

**Solution.** The direction v receives little state energy from unit input energy over that horizon, so reaching it may require large control. Exact positivity can coexist with poor practical controllability.

</details>

<a id="control-reachability-observation-ex-8"></a>

### 8. Coordinate scaling

Does controllability rank change under invertible state coordinates $z=Sx$?

<details><summary>Hint 1</summary>

Each transformed Kalman block is the old block multiplied by the same invertible state-coordinate matrix.

</details>

<details><summary>Hint 2</summary>

Rank is preserved even when Euclidean singular values change.

</details>

<details><summary>Full solution</summary>

**Solution.** No. The controllability matrix transforms by invertible left/right block factors and retains rank. Its numerical conditioning and physical interpretation can change, so scaling must still be reported.

</details>

<a id="control-reachability-observation-ex-9"></a>

### 9. Unreachable unstable mode

For $A=\operatorname{diag}(-1,2)$, $B=(1,0)^{\mathsf T}$, is the pair stabilizable?

<details><summary>Hint 1</summary>

Find which coordinate the input cannot affect.

</details>

<details><summary>Hint 2</summary>

A positive eigenvalue in that autonomous block cannot be reassigned by the input.

</details>

<details><summary>Full solution</summary>

**Solution.** No. The second mode is unreachable and has positive eigenvalue two; feedback through B cannot move it.

</details>

<a id="control-reachability-observation-ex-10"></a>

### 10. Observer error derivation

Derive the error equation for the Luenberger observer.

<details><summary>Hint 1</summary>

Subtract estimate dynamics from actual dynamics, including the known feedthrough term.

</details>

<details><summary>Hint 2</summary>

The state and input terms cancel, leaving the output residual as the error-state injection.

</details>

<details><summary>Full solution</summary>

**Solution.** Subtract $\hat{z}'=A\hat{z}+Bu+L(y-C\hat{z}-Du)$ from $z'=Az+Bu$, use $y=Cz+Du$, and obtain $e'=(A-LC)e$. When $D=0$, this reduces to the familiar residual $y-C\hat z$.

</details>

<a id="control-reachability-observation-ex-11"></a>

### 11. Detectable but unobservable

For $A=\operatorname{diag}(-1,-3)$, $C=[1,0]$, classify.

<details><summary>Hint 1</summary>

Separate exact initial reconstruction from eventual decay of a hidden difference.

</details>

<details><summary>Hint 2</summary>

The unseen second mode is stable, so detectability can hold without observability.

</details>

<details><summary>Full solution</summary>

**Solution.** The second mode is unobservable, so the pair is not observable. It is stable, so the pair is detectable and some observer can make total estimation error decay.

</details>

<a id="control-reachability-observation-ex-12"></a>

### 12. Separation spectrum

Controller poles are $-1,-2$; observer poles are $-5,-6$. What are ideal combined poles?

<details><summary>Hint 1</summary>

Use the block-triangular closed-loop matrix in state/error coordinates.

</details>

<details><summary>Hint 2</summary>

Its characteristic polynomial is the product of the controller and observer block polynomials.

</details>

<details><summary>Full solution</summary>

**Solution.** Block triangular separation gives their union: $-1,-2,-5,-6$. This excludes saturation, noise, delay, and shared uncertainty.

</details>

<a id="control-reachability-observation-ex-13"></a>

### 13. Fast-observer boundary

Why can poles at $-1000$ be undesirable?

<details><summary>Hint 1</summary>

A large injection gain affects noise as well as nominal error decay.

</details>

<details><summary>Hint 2</summary>

The ideal pole calculation omits input limits, sampling and unmodelled dynamics.

</details>

<details><summary>Full solution</summary>

**Solution.** Large L can amplify measurement noise, create a severe transient, demand fast sampling, and excite unmodeled dynamics. Nominal asymptotic convergence speed is only one design output.

</details>

<a id="control-reachability-observation-ex-14"></a>

### 14. Integral-action equilibrium

What new state is added for constant reference tracking?

<details><summary>Hint 1</summary>

Integrate the difference between desired and measured constant-reference output.

</details>

<details><summary>Hint 2</summary>

The enlarged state requires its own stabilizability and zero-structure conditions.

</details>

<details><summary>Full solution</summary>

**Solution.** Typically $\eta'=r-Cz$; feedback includes eta. Stabilizability of the augmented system and absence of blocking invariant zeros must be checked.

</details>

<a id="control-reachability-observation-ex-15"></a>

### 15. Windup diagnostic

What should be logged when integral control saturates?

<details><summary>Hint 1</summary>

Distinguish the controller’s command from what the saturated actuator actually applies.

</details>

<details><summary>Hint 2</summary>

The integrator can keep accumulating error while those inputs differ.

</details>

<details><summary>Full solution</summary>

**Solution.** Commanded and applied input, integrator state, saturation duration, tracking error, recovery overshoot, and anti-windup action. A nominal unsaturated simulation cannot diagnose windup.

</details>

<a id="control-reachability-observation-ex-16"></a>

### 16. Exact held model

For scalar $x'=ax+bu$, give $A_d,B_d$ for a zero-order hold.

<details><summary>Hint 1</summary>

Integrate the scalar transition kernel over the hold interval.

</details>

<details><summary>Hint 2</summary>

Treat the zero-generator case by its integral or limit, not by division by zero.

</details>

<details><summary>Full solution</summary>

**Solution.** $A_d=e^{ah}$ and, if a is nonzero, $B_d=b(e^{ah}-1)/a$; for a=0, $B_d=bh$. Euler approximations are different models.

</details>

<a id="control-reachability-observation-ex-17"></a>

### 17. Continuous/discrete pole

A continuous pole is $-2$ and h=0.1. Find its exact sampled pole.

<details><summary>Hint 1</summary>

Exact homogeneous sampling exponentiates rate times interval.

</details>

<details><summary>Hint 2</summary>

A mapped pole does not by itself define the entire sampled input pair or controller.

</details>

<details><summary>Full solution</summary>

**Solution.** $e^{-0.2}$, approximately 0.8187, inside the unit disk. Controller computation must use the full sampled pair, not only map desired poles.

</details>

<a id="control-reachability-observation-ex-18"></a>

### 18. Rank under uncertainty

The smallest controllability singular value is $10^{-8}$ and matrix uncertainty is $10^{-5}$. What can be claimed?

<details><summary>Hint 1</summary>

Compare the smallest nominal singular value with the data perturbation scale.

</details>

<details><summary>Hint 2</summary>

Exact rank and uncertainty-robust rank are different conclusions.

</details>

<details><summary>Full solution</summary>

**Solution.** Exact nominal rank may be full, but it is not robust at the stated uncertainty scale. Report scaling and uncertainty-aware reachability rather than “controllable” without qualification.

</details>

<a id="control-reachability-observation-ex-19"></a>

### 19. Closed-loop verification suite

Design a minimal numerical audit after pole placement.

<details><summary>Hint 1</summary>

Separate exact plant response, discretisation, actuation and observation effects.

</details>

<details><summary>Hint 2</summary>

The question requests a design of evidence, not a claim that any computation has been performed.

</details>

<details><summary>Full solution</summary>

**Solution.** Compare exact linear flow or a refined reference with h,h/2,h/4 simulations; report state/output peaks, applied input and rate, saturation, observer error, disturbance response, sample/delay sensitivity, and uncertainty cases. Check fallback behavior separately.

</details>

<a id="control-reachability-observation-ex-20"></a>

### 20. Safety-claim repair

Repair: “The controllability and observability matrices have full rank, so the device is safe.”

<details><summary>Hint 1</summary>

Rank establishes ideal structural properties in a particular mathematical model.

</details>

<details><summary>Hint 2</summary>

It supplies no general conclusion about constraints, uncertainty, timing or real-world operation.

</details>

<details><summary>Full solution</summary>

**Solution.** Full rank proves ideal structural reachability and distinguishability only. Safety additionally needs constraints, conditioning, uncertainty, noise, timing, nonlinear/high-fidelity validation, hazard analysis, and a tested failure mode.

</details>

## Chapter synthesis

Reachability is the range of an endpoint operator. Its adjoint gives the Gramian, exact rank criteria and minimum-effort formulas. Time variation, amplitude constraints, coordinate metrics and nonlinear motions determine which of those conclusions still apply to a changed problem.
