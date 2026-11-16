
# Stability, Feedback, and What Sensors Can Know

**Before reading.** Read [Models and Direction Fields](../books/ode-first-course/models-direction-fields.md), [Linear Systems and the Matrix Exponential](../books/ode-first-course/linear-systems-matrix-exponential.md) and [Eigenvalues, Diagonalization, and Field Extensions](../books/linear-algebra-structure-proofs/eigenvalues-and-diagonalization.md). These are preparation for the ideas used below.

A controller cannot stabilize a direction its actuator cannot influence, and an observer cannot reconstruct a direction that never affects a sensor. Yet neither reachability nor visibility is the same as stability. This deep dive builds one exact two-state audit and then exposes the boundaries hidden by a successful pole calculation.

It assumes linear systems and eigenvalues. For the complete derivations, use the [control chapter](#/books/differential-equations-verified-dynamics). For an exact interactive calculation, open the [flow and feedback laboratory](../apps/atlas/index.html#/labs?lab=visual-lab-linear-dynamics-audit).

## 1. Begin with a state-space contract

Let

$$
z'=Az+Bu,\qquad y=Cz.
$$

The matrix A describes unforced dynamics, B maps input into state rate, and C maps state into measured output. The declaration omits direct feedthrough for simplicity.

Before design, write:

- state coordinates and units;
- input meaning, amplitude and rate bounds;
- sensor output, noise, delay, and sampling;
- operating point and range where linearization is credible;
- parameter and unmodeled-dynamics uncertainty;
- safety constraints and fallback.

The algebra below assumes constant exact matrices, continuous time, unconstrained input, and noiseless output. Every practical conclusion must return to the ledger.

## 2. One controllable and observable plant


**Worked example.**
Take the double integrator

$$
x'=v,\qquad v'=u,\qquad y=x.
$$

Thus

$$
A=\begin{pmatrix}0&1\\0&0\end{pmatrix},\quad B=\begin{pmatrix}0\\1\end{pmatrix},\quad C=\begin{pmatrix}1&0\end{pmatrix}.
$$

The controllability columns are

$$
B=\begin{pmatrix}0\\1\end{pmatrix},\qquad AB=\begin{pmatrix}1\\0\end{pmatrix}.
$$

Their determinant is -1, so they span the plane. Acceleration directly changes velocity; one integration later, velocity changes position.

The observability rows are

$$
C=\begin{pmatrix}1&0\end{pmatrix},\qquad CA=\begin{pmatrix}0&1\end{pmatrix}.
$$

They also have full rank. Position and its model-predicted derivative reveal both initial coordinates in the ideal system. This does not recommend differentiating a noisy sensor.

## 3. Close the loop

Choose state feedback

$$
u=-k_p x-k_d v.
$$

Then

$$
A_{\mathrm{cl}}=\begin{pmatrix}0&1\\-k_p&-k_d\end{pmatrix}
$$

has characteristic polynomial

$$
\lambda^2+k_d\lambda+k_p.
$$

Positive k_p and k_d make trace negative and determinant positive, hence both eigenvalues have negative real part. Desired real poles -a and -b give

$$
k_d=a+b,\qquad k_p=ab.
$$

For a=b=2, K=[4,4] and the polynomial is (lambda+2) squared. The repeated root can be defective, so responses may include t exp(-2t). They still decay, but transient shape is not captured by saying “both poles are -2.”

The exact Hurwitz conclusion concerns the linear continuous closed loop. It does not promise monotone position, bounded input, robustness, or a safe response from every start.

## 4. Control energy is not rank

For horizon T, the controllability Gramian is

$$
W_c(T)=\int_0^T e^{sA}BB^{\mathsf T}e^{sA^{\mathsf T}}\,ds.
$$

The minimum squared input energy to reach z_f from zero is

$$
z_f^{\mathsf T}W_c(T)^{-1}z_f.
$$

For the double integrator, short-horizon position changes are expensive because input must be integrated twice. Rank remains two for every positive T, while the smallest Gramian eigenvalue collapses as T shrinks.

Thus:

- rank asks whether a direction is reachable in principle;
- Gramian geometry asks how input energy is distributed under the chosen coordinates and horizon;
- constraints ask whether an allowed input can actually perform the transfer;
- optimal control chooses among feasible transfers under a declared cost.

State and input scaling change Gramian numbers. Always retain units.

## 5. A stable hidden mode

Now take

$$
x'=u,\qquad z'=-z,\qquad y=x.
$$

Here

$$
A=\begin{pmatrix}0&0\\0&-1\end{pmatrix},\quad B=\begin{pmatrix}1\\0\end{pmatrix},\quad C=\begin{pmatrix}1&0\end{pmatrix}.
$$

Both AB and CA add no second direction. Controllability and observability ranks are one. Feedback u=-g x with g positive produces eigenvalues -g and -1, so the origin is asymptotically stable even though z is unreachable and invisible.

This example defeats two errors:

1. “If a system is stable, it must be controllable and observable.” False: the hidden mode decays on its own.
2. “An uncontrollable system cannot be stabilized.” False: it is **stabilizable** if every unreachable mode is already stable.

The observability analogue is **detectability**: every unobservable mode is stable. Detectability lets an observer error decay even though exact initial reconstruction of stable hidden modes is impossible.

Change the hidden equation to z'=z. The system becomes neither stabilizable nor detectable. No chosen input affects the unstable hidden state, and no output reveals its divergence.

## 6. Observer design

For known input and output, define

$$
\widehat z'=A\widehat z+Bu+L(y-C\widehat z).
$$

The estimation error e=z-zhat satisfies

$$
e'=(A-LC)e.
$$

For an observable pair, dual pole placement chooses L so this matrix is Hurwitz. Combining u=-K zhat with the observer gives block-triangular state/error dynamics. In the ideal linear model, controller and observer poles form the combined spectrum: the separation principle.

Making observer poles extremely fast is not free. Measurement noise enters multiplied by L. Unmodeled sensor dynamics, sampling, and finite precision can dominate. A large initial estimation error may command a large control input and trigger saturation.

A Kalman filter adds stochastic process and sensor models and chooses a gain from covariance assumptions. It does not repair a wrong state model or make an unobservable unstable mode visible.

## 7. Lyapunov certificate

If A_cl is Hurwitz, choose positive definite Q and solve

$$
A_{\mathrm{cl}}^{\mathsf T}P+PA_{\mathrm{cl}}=-Q.
$$

Then V=z transpose Pz is positive definite and

$$
\dot V=-z^{\mathsf T}Qz.
$$

This supplies a norm in which the closed loop decays monotonically and yields an exponential bound. It is especially useful for nonnormal matrices whose Euclidean norm can grow transiently.

For a nonlinear plant

$$
z'=Az+Bu+r(z,u),
$$

the same V certifies only a local result when r is small relative to norm z near the operating point. Input saturation makes u differ from -Kz and can destroy the inequality outside a region.

A region-of-attraction estimate can search for a V sublevel on which actuator bounds and remainder bounds preserve V dot<0. It is an inner certificate, not necessarily the exact basin.

## 8. Delay and sampling boundaries

A feedback delay changes even a scalar plant. For

$$
x'(t)=ax(t)-bkx(t-\tau),
$$

For tau>=0, exponential trials give lambda-a+b k exp(-lambda tau)=0. When tau>0 and b k!=0, this equation has infinitely many complex roots. If tau=0, it is affine with the single root lambda=a-b k; if b k=0, the single root is lambda=a for every tau>=0. A gain that stabilizes the zero-delay model can destabilize after enough delay.

With sample interval h and zero-order hold,

$$
z_{n+1}=A_dz_n+B_du_n,\qquad A_d=e^{hA},\qquad B_d=\int_0^h e^{sA}B\,ds.
$$

Discrete stability requires eigenvalues inside the unit circle. Continuous poles map through exp(h lambda) only for the exact open dynamics; controller discretization, computation delay, and hold behaviour need explicit modelling.

## 9. Robustness and uncertainty

Pole placement treats A and B as exact. If the true plant is A+Delta A, closed-loop poles move. For nonnormal matrices, tiny perturbations can move them far. Frequency-domain gain and phase margins, singular-value conditions, H-infinity norms, structured singular values, or parameter-dependent Lyapunov methods address different uncertainty classes.

No single robustness number is universal. State:

- additive or multiplicative uncertainty;
- real parametric or dynamic uncertainty;
- norm and frequency weighting;
- performance channel;
- whether uncertainty can vary with time;
- what has been experimentally validated.

Robust stability does not imply robust performance. A system can remain stable while tracking error or control demand becomes unacceptable.

## 10. Controllability and observability of nonlinear systems

Linearization rank is a local first-order test. A nonlinear system may access directions through Lie brackets even when an instantaneous input vector does not point there. Conversely, a controllable linearization is a useful local result but constraints and singularities can limit global reach.

Nonlinear observability uses indistinguishability of output histories and derivatives or differential-geometric rank conditions under smoothness hypotheses. It is not licensed by applying the linear Kalman matrix far from the operating point.

## 11. An audit sequence

For each candidate controller:

1. Reproduce exact A, B, C and units.
2. Compute rank with a scale-aware factorization, not a raw near-zero determinant in large systems.
3. Separate controllable/uncontrollable and observable/unobservable modes.
4. Check stabilizability and detectability.
5. Select poles or an objective with time-domain and energy meaning.
6. Certify nominal stability with eigenvalues and, where useful, a Lyapunov matrix.
7. Simulate from multiple starts with saturation, delay, sampling, and noise.
8. Refine the numerical solver and controller sample.
9. sweep declared parameter uncertainty and model discrepancy;
10. report constraint violations and safe failure behaviour.

The exact rank test and the numerical stress test belong in the same report, but they are different evidence.

## Practice with worked solutions

### 1. Uncontrollable instability

<a id="deep-dive-stability-control-observability-ex-1"></a>

**Exercise 1.**

Let A=diag(-1,2), B=[1,0] transpose. Can state feedback stabilize the plant?


<details>
<summary>Hint 1</summary>

The input vector acts only on the first state coordinate.
</details>
<details>
<summary>Hint 2</summary>

Inspect the second coordinate’s positive eigenvalue and ask whether feedback through that input can move it.
</details>
<details>
<summary>Solution</summary>

The second coordinate is unreachable and has eigenvalue 2. Feedback through B cannot move that eigenvalue. The pair is not stabilizable, so no state-feedback K makes A-BK Hurwitz.

</details>

### 2. Observable dynamics

<a id="deep-dive-stability-control-observability-ex-2"></a>

**Exercise 2.**

For A=[[0,1],[-1,0]] and C=[1,0], find the two observability rows.


<details>
<summary>Hint 1</summary>

The observability matrix stacks the output row with its product by the state matrix.
</details>
<details>
<summary>Hint 2</summary>

Compute C and C times A, then check whether those rows span both state coordinates.
</details>
<details>
<summary>Solution</summary>

C=[1,0] and CA=[0,1]. They span the plane, so measuring one coordinate over time reveals the initial second coordinate in the ideal rotation model.

</details>

### 3. Saturation boundary

A controller requests u=-20x but the actuator clips at magnitude 1. Why does the nominal eigenvalue not give a global decay rate?

**Solution.** Outside |x|<=0.05 the actual law is saturated and no longer u=-20x. The closed-loop matrix calculation applies only inside the unsaturated region. The outer dynamics need a separate nonlinear or piecewise analysis.

### 4. Rank versus conditioning

Why is a controllability determinant of 10 to the minus 12 not enough to declare poor control?

**Solution.** Determinants depend on state units, input units, and matrix dimension. Use rank relative to justified uncertainty and singular values or Gramian eigenvalues after meaningful scaling, then translate them into energy and constraint consequences.
