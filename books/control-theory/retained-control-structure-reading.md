
# Control, Reachability, and Observation

Control theory separates three questions that are often blurred:

1. What does the unforced plant do?
2. Which state directions can an input influence?
3. Which internal states can measurements distinguish?

Stability, controllability, and observability have independent answers. A stable hidden mode can be unreachable and unseen. An unstable plant can be controllable and stabilized by feedback. A system can be mathematically controllable but require impossible energy under a short horizon.

This chapter derives the finite-dimensional continuous-time linear theory before naming the boundaries where saturation, delay, noise, robustness, and model reduction enter.

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

Energy metrics are not coordinate invariant unless the state norm and input cost transform with the coordinates. Scaling metres to millimetres changes Gramian entries by large factors without changing physical capability.

The controllability decomposition chooses coordinates in which reachable states occupy one block:

$$\overline A=\begin{pmatrix}A_r&A_{12}\\0&A_u\end{pmatrix},\qquad\overline B=\begin{pmatrix}B_r\\0\end{pmatrix}.$$

Unreachable dynamics evolve autonomously. State feedback cannot move eigenvalues of A_u. A system is **stabilizable** when every unreachable mode is already stable. Stabilizability, not full controllability, is the right condition for existence of stabilizing state feedback.

## 5. State feedback and pole assignment

Choose

$$u=-Kz+r.$$

The closed-loop state matrix is A-BK. For a controllable single-input pair, the pole-placement theorem permits assignment of any monic real characteristic polynomial of degree n, with complex roots in conjugate pairs. Multi-input variants retain broad assignment freedom.

### Double-integrator feedback

For K=[k_p,k_d],

$$A-BK=\begin{pmatrix}0&1\\-k_p&-k_d\end{pmatrix}.$$

Its characteristic polynomial is

$$\lambda^2+k_d\lambda+k_p.$$

Positive k_p and k_d make trace negative and determinant positive, so both poles lie in the left half-plane. Desired poles -a and -b give

$$k_d=a+b,\qquad k_p=ab.$$

This exact algebra does not guarantee:

- gains fit actuator limits;
- measurement noise is tolerable;
- unmodeled flexible modes remain stable;
- sampled implementation reproduces continuous feedback;
- parameter uncertainty preserves damping.

Aggressive pole placement can demand large control and magnify noise. Pole location is one design coordinate, not a complete robustness metric.

## 6. Lyapunov certification of closed-loop stability

If A_cl=A-BK is Hurwitz, then for every positive definite Q there is a unique positive definite P satisfying

$$A_{\mathrm{cl}}^TP+PA_{\mathrm{cl}}=-Q.$$

With V=z transpose Pz,

$$\dot V=-z^TQz.$$

Eigenvalue bounds on P and Q give an explicit exponential estimate. This certificate is valuable when direct eigenvector coordinates are ill-conditioned.

For an uncertain family A_cl(theta), one common P that satisfies a strict inequality for every theta gives uniform quadratic stability. Failure to find a common quadratic P does not prove the family is unstable; the certificate class may be conservative.

## 7. Observability and indistinguishable states

With zero input, output from initial state z0 is

$$y(t)=Ce^{tA}z_0.$$

Two initial states are indistinguishable if their difference v satisfies

$$Ce^{tA}v=0$$

through the observation interval. Differentiating at zero yields

$$Cv=0,\quad CAv=0,\quad\ldots,\quad CA^{n-1}v=0.$$

Cayley–Hamilton again makes higher conditions redundant. Define

$$\operatorname{Obsv}=\begin{pmatrix}C\\CA\\\vdots\\CA^{n-1}\end{pmatrix}.$$

**Kalman observability criterion.** The pair (C,A) is observable exactly when Obsv has rank n.

Observability is dual to controllability: (C,A) is observable exactly when (A transpose,C transpose) is controllable.

### Dynamics reveal an unmeasured coordinate

For the double integrator with output y=position,

$$C=\begin{pmatrix}1&0\end{pmatrix},\qquad CA=\begin{pmatrix}0&1\end{pmatrix}.$$

The output derivative reveals velocity, so the system is observable even though no separate velocity sensor appears in the ideal model. Differentiating noisy measurements directly would be poor practice; an observer uses the model dynamically.

### A hidden stable state

For diagonal A with entries -1 and -2 and C=[1,0], the second state never influences y. The observability matrix has rank one. Its stability means the hidden difference decays, but exact initial reconstruction remains impossible.

## 8. Observability Gramian and conditioning

For horizon T,

$$W_o(T)=\int_0^T e^{tA^T}C^TCe^{tA}\,dt.$$

Then

$$z_0^TW_oz_0=\int_0^T\|y(t)\|^2\,dt.$$

The Gramian is positive definite exactly under observability. A small eigenvalue describes a state direction producing little output energy, hence poor reconstruction under noise.

As with controllability, units and scaling matter. A tiny sensor coefficient may make a mode mathematically observable but practically buried beneath noise or quantization.

The observability decomposition isolates an unobservable block. The pair is **detectable** when every unobservable mode is stable. Detectability, rather than full observability, is sufficient for an asymptotically convergent state observer.

## 9. Luenberger observer

Assume input u and output y are known. For the model $y=Cz+Du$, define an estimate

$$\widehat z'=A\widehat z+Bu+L(y-C\widehat z-Du).$$

The estimation error e=z-zhat obeys

$$e'=(A-LC)e.$$

If (C,A) is observable, observer poles can be assigned through the dual pole-placement problem. If it is detectable, some L makes the error dynamics stable.

Fast observer poles speed nominal convergence but amplify measurement noise and expose unmodeled dynamics. The ideal equation treats y as exact; a stochastic estimator such as a Kalman filter instead models process and measurement noise covariances. A Kalman filter is not the same object as the Kalman controllability criterion despite the shared name.

## 10. Separation principle

Use estimated-state feedback

$$u=-K\widehat z.$$

In coordinates (z,e), closed-loop dynamics have a block triangular matrix whose diagonal blocks are A-BK and A-LC. Therefore the combined eigenvalues are the union of controller and observer eigenvalues.

This **separation principle** says controller and observer poles can be designed separately for the exact linear time-invariant model when the appropriate stabilizability and detectability conditions hold.

It does not separate nonlinearities, saturation, shared uncertainty, timing jitter, or robustness margins. An observer transient can cause actuator saturation and invalidate the linear closed-loop prediction.

## 11. Reference tracking and integral action

For a constant reference r and output y=Cz, state feedback may leave steady-state error under disturbance or parameter mismatch. A feedforward gain can correct the nominal equilibrium when the required inverse exists.

Integral action adds a state

$$\eta'=r-y$$

and feeds back eta. This embeds a model of constant signals and can reject constant disturbances under suitable stabilizability and no-zero conditions. It also increases system order and can cause windup when actuators saturate. Anti-windup is a nonlinear constrained design problem, not a detail of the unconstrained pole calculation.

The internal model principle generalizes this idea: robust regulation requires the controller to contain dynamics capable of generating the exogenous signal class.

## 12. Controllability versus optimal control

Controllability asks whether a transfer is possible. Optimal control chooses among inputs by minimizing a functional such as

$$J=\int[z^TQz+u^TRu]\,dt$$

plus a terminal cost. With linear dynamics, positive semidefinite Q, and positive definite R, the finite-horizon linear-quadratic regulator leads to a Riccati differential equation. Infinite-horizon algebraic Riccati theory needs stabilizability and detectability conditions.

An LQR gain is optimal only for the declared quadratic cost, linear model, horizon, and information pattern. It is not universally “best.” Changing units without transforming Q and R changes the design problem.

Pontryagin’s maximum principle supplies necessary conditions for broader constrained problems; dynamic programming uses a Hamilton–Jacobi–Bellman equation. Neither is completed in this slice.

## 13. Discrete sampling changes poles

With zero-order-held input over sampling interval h,

$$z_{k+1}=A_dz_k+B_du_k,$$

where

$$A_d=e^{hA},\qquad B_d=\int_0^h e^{sA}B\,ds.$$

Continuous poles lambda map to discrete poles exp(h lambda). Left-half-plane poles map inside the unit circle. A controller designed directly in continuous time and implemented with a large sample interval, delay, quantization, or approximate discretization may not meet the intended margins.

Sampling can also affect controllability for exceptional intervals when distinct continuous modes alias to the same discrete behaviour. The exact discretized pair should be checked.

## 14. Structural claims and model claims

Rank is exact for exact matrices. Estimated matrices near rank deficiency need singular-value and uncertainty analysis. A determinant printed as 10 to the minus 12 is not an invariant declaration of “almost uncontrollable” because determinants depend strongly on scaling and dimension.

Before a control conclusion, report:

- state and output definitions and units;
- operating point and linearization range;
- actuator and sensor locations;
- rank and Gramian conditioning;
- stabilizable and detectable decompositions;
- pole, gain, and transient metrics;
- saturation, rate, delay, and sampling assumptions;
- disturbance and uncertainty model;
- nonlinear or high-fidelity validation outside the design model;
- a safe failure or fallback mode.

The [stability and control deep dive](../../articles/stability-control-observability.md) adds worked two-state audits, while the [live laboratory](../../apps/atlas/index.html#/labs?lab=visual-lab-linear-dynamics-audit) keeps exact rank arithmetic separate from RK4 evidence.

## Worked problems

### 1. Reachability with two inputs

If B itself has rank n, why is the pair controllable regardless of A?

**Solution.** The first block of the controllability matrix is B. If its columns already span the entire state space, the full matrix has rank n. Instantaneous input directions cover every state direction in the ideal unconstrained model.

### 2. Stabilizable but not controllable

For A=diag(1,-2) and B=[1,0] transpose, classify controllability and stabilizability.

**Solution.** The controllability matrix has both columns in the first coordinate, so rank is one. The unreachable mode has eigenvalue -2 and is stable, while the unstable eigenvalue 1 is reachable. Therefore the pair is not controllable but is stabilizable.

### 3. Observable from position

For A=[[0,1],[-2,-3]] and C=[1,0], compute Obsv.

**Solution.** CA=[0,1], so Obsv=[[1,0],[0,1]], full rank. Position history distinguishes both initial position and velocity in the ideal noiseless model.

### 4. Hidden instability

For A=diag(-1,1) and C=[1,0], is the pair detectable?

**Solution.** The second mode is unobservable because it never affects the first output. Its eigenvalue is +1, so it is unstable. The pair is not detectable; no output-injection observer can force estimation error in that hidden mode to decay.

### 5. Repair a pole-placement claim

“A controllable plant can be made safe by assigning very negative poles.”

**Solution.** Controllability only gives algebraic assignment in the exact unconstrained model. Very negative poles may require large gains and control rates, amplify noise, trigger saturation, excite unmodeled modes, and become fragile to delay or sampling. Safety requires constraints, uncertainty, validation, and failure handling in addition to pole location.

### 6. Double-integrator controllability

For $A=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, $B=(0,1)^{\mathsf T}$, compute the controllability matrix.

**Solution.** $AB=(1,0)^{\mathsf T}$, so $[B,AB]=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, which has rank two. Both position and velocity are reachable in the ideal unconstrained model.

### 7. Finite-horizon Gramian meaning

If $v^TW_c(T)v$ is tiny, what does it indicate?

**Solution.** The direction v receives little state energy from unit input energy over that horizon, so reaching it may require large control. Exact positivity can coexist with poor practical controllability.

### 8. Coordinate scaling

Does controllability rank change under invertible state coordinates $z=Sx$?

**Solution.** No. The controllability matrix transforms by invertible left/right block factors and retains rank. Its numerical conditioning and physical interpretation can change, so scaling must still be reported.

### 9. Unreachable unstable mode

For $A=\operatorname{diag}(-1,2)$, $B=(1,0)^{\mathsf T}$, is the pair stabilizable?

**Solution.** No. The second mode is unreachable and has positive eigenvalue two; feedback through B cannot move it.

### 10. Observer error derivation

Derive the error equation for the Luenberger observer.

**Solution.** Subtract $\hat{z}'=A\hat{z}+Bu+L(y-C\hat{z}-Du)$ from $z'=Az+Bu$, use $y=Cz+Du$, and obtain $e'=(A-LC)e$. When $D=0$, this reduces to the familiar residual $y-C\hat z$.

### 11. Detectable but unobservable

For $A=\operatorname{diag}(-1,-3)$, $C=[1,0]$, classify.

**Solution.** The second mode is unobservable, so the pair is not observable. It is stable, so the pair is detectable and some observer can make total estimation error decay.

### 12. Separation spectrum

Controller poles are $-1,-2$; observer poles are $-5,-6$. What are ideal combined poles?

**Solution.** Block triangular separation gives their union: $-1,-2,-5,-6$. This excludes saturation, noise, delay, and shared uncertainty.

### 13. Fast-observer boundary

Why can poles at $-1000$ be undesirable?

**Solution.** Large L can amplify measurement noise, create a severe transient, demand fast sampling, and excite unmodeled dynamics. Nominal asymptotic convergence speed is only one design output.

### 14. Integral-action equilibrium

What new state is added for constant reference tracking?

**Solution.** Typically $\eta'=r-Cz$; feedback includes eta. Stabilizability of the augmented system and absence of blocking invariant zeros must be checked.

### 15. Windup diagnostic

What should be logged when integral control saturates?

**Solution.** Commanded and applied input, integrator state, saturation duration, tracking error, recovery overshoot, and anti-windup action. A nominal unsaturated simulation cannot diagnose windup.

### 16. Exact held model

For scalar $x'=ax+bu$, give $A_d,B_d$ for a zero-order hold.

**Solution.** $A_d=e^{ah}$ and, if a is nonzero, $B_d=b(e^{ah}-1)/a$; for a=0, $B_d=bh$. Euler approximations are different models.

### 17. Continuous/discrete pole

A continuous pole is $-2$ and h=0.1. Find its exact sampled pole.

**Solution.** $e^{-0.2}$, approximately 0.8187, inside the unit disk. Controller computation must use the full sampled pair, not only map desired poles.

### 18. Rank under uncertainty

The smallest controllability singular value is $10^{-8}$ and matrix uncertainty is $10^{-5}$. What can be claimed?

**Solution.** Exact nominal rank may be full, but it is not robust at the stated uncertainty scale. Report scaling and uncertainty-aware reachability rather than “controllable” without qualification.

### 19. Closed-loop verification suite

Design a minimal numerical audit after pole placement.

**Solution.** Compare exact linear flow or a refined reference with h,h/2,h/4 simulations; report state/output peaks, applied input and rate, saturation, observer error, disturbance response, sample/delay sensitivity, and uncertainty cases. Check fallback behavior separately.

### 20. Safety-claim repair

Repair: “The controllability and observability matrices have full rank, so the device is safe.”

**Solution.** Full rank proves ideal structural reachability and distinguishability only. Safety additionally needs constraints, conditioning, uncertainty, noise, timing, nonlinear/high-fidelity validation, hazard analysis, and a tested failure mode.

## Dependency ledger

- Variation of constants characterized input effects.
- Cayley–Hamilton made the finite Kalman matrices sufficient.
- Gramian positivity connected rank to finite-horizon energy.
- Coordinate rank invariance separated structure from representation.
- Stabilizability isolated which eigenvalues feedback must reach.
- Duality transferred controllability results to observability.
- Block triangular error dynamics proved the ideal separation principle.
- Exact discretization showed where continuous and sampled designs meet.
