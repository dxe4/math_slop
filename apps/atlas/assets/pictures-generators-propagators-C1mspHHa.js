var e=`---
parent_id: book-two-state-quantum-mechanics
chapter_id: pictures-generators-propagators
title: "Pictures of Motion, Generators, and Propagators"
level: advanced-undergraduate
estimated_minutes: 200
license: CC BY-SA 4.0
status: draft
---

# Pictures of Motion, Generators, and Propagators

Quantum predictions do not depend on whether time dependence is assigned mainly to states, mainly to observables, or split between them. These descriptions are called pictures of motion. Their equivalence is a unitary change of representation, not a change of experimental system. The distinction becomes especially useful for perturbations and driven control.

## 1. Propagator contracts

The propagator \\(U(t,t_0)\\) solves

\\[
i\\hbar\\,\\partial_tU(t,t_0)=H(t)U(t,t_0),\\qquad U(t_0,t_0)=I.
\\]

For Hermitian \\(H(t)\\) it is unitary and obeys

\\[
U(t_2,t_0)=U(t_2,t_1)U(t_1,t_0),\\qquad
U(t_0,t)=U(t,t_0)^\\dagger.
\\]

The composition order records causal order: the earliest map is rightmost. For constant \\(H\\), time-translation invariance gives \\(U(t,t_0)=\\exp[-iH(t-t_0)/\\hbar]\\).

## 2. Schrödinger picture

In the Schrödinger picture, states evolve as \\(\\lvert\\psi_S(t)\\rangle=U(t,t_0)\\lvert\\psi_S(t_0)\\rangle\\), while an observable \\(A_S(t)\\) changes only through explicit time dependence. The expectation is

\\[
\\langle A\\rangle_t=\\langle\\psi_S(t)\\rvert A_S(t)\\lvert\\psi_S(t)\\rangle.
\\]

Differentiation gives

\\[
\\frac{d\\langle A\\rangle}{dt}=\\frac{i}{\\hbar}\\langle[H,A_S]\\rangle
+\\langle\\partial_tA_S\\rangle.
\\]

The explicit derivative refers to changing the observable definition or external parameter, not to state evolution.

## 3. Heisenberg picture

Fix the state at \\(t_0\\) and define

\\[
A_H(t)=U(t,t_0)^\\dagger A_S(t)U(t,t_0).
\\]

Then the expectation is unchanged:

\\[
\\langle\\psi_S(t)\\rvert A_S(t)\\lvert\\psi_S(t)\\rangle
=\\langle\\psi_H\\rvert A_H(t)\\lvert\\psi_H\\rangle.
\\]

For constant \\(H\\) and no explicit time dependence,

\\[
\\frac{dA_H}{dt}=\\frac{i}{\\hbar}[H_H,A_H].
\\]

Operators, commutators, and state coordinates have all been transformed consistently. Mixing an \\(A_H\\) with a Schrödinger state without the corresponding map is not a third picture; it is an error.

The same calculation works for a piecewise-continuous time-dependent Hermitian $H_S(t)$, using the finite-dimensional propagator existence result in Chapter 4. Differentiate all three factors of $A_H=U^\\dagger A_SU$ and set $H_H=U^\\dagger H_SU$. This gives

$$\\dot A_H=\\frac i\\hbar[H_H,A_H]+U^\\dagger(\\partial_t A_S)U.$$

Only the first term is dynamical transport. If $A_S=H_S(t)$, its commutator term vanishes but $\\dot H_H=U^\\dagger\\dot H_SU$ need not: a driven Hamiltonian can exchange energy with the system. For a fixed spectral projector $P_a$, the corresponding Heisenberg projector is $U^\\dagger P_aU$, so the equivalence holds for the whole probability distribution and for sequences of consistently transformed instruments, not just for one expectation. A coordinate transformation leaves the experimental question intact only when all of its ingredients are carried with it.

### Worked Pauli evolution

For \\(H=\\hbar\\Omega Z/2\\),

\\[
X_H(t)=\\cos(\\Omega t)X-\\sin(\\Omega t)Y,
\\]

under the convention above. Differentiating at zero gives \\(-\\Omega Y\\), matching \\((i/\\hbar)[H,X]=(i\\Omega/2)[Z,X]=-\\Omega Y\\).

The companion formula is $Y_H=\\sin(\\Omega t)X+\\cos(\\Omega t)Y$, while $Z_H=Z$. In the fixed initial state $|+\\rangle$, this gives $\\langle X\\rangle_t=\\cos\\Omega t$, $\\langle Y\\rangle_t=\\sin\\Omega t$. In the Schrödinger picture the state is $(e^{-i\\Omega t/2}|0\\rangle+e^{i\\Omega t/2}|1\\rangle)/\\sqrt2$, with the same expectations. The sign of the $Y$ coefficient in $X_H$ is negative, yet the state's $Y$ expectation is positive; state rotation and inverse observable transport are different formulas whose pairing preserves the prediction. At $t=\\pi/(2\\Omega)$ for $\\Omega>0$, $X$ gives equal signs and $Y$ gives plus certainly.

## 4. Interaction picture

Split \\(H(t)=H_0+V(t)\\) and let \\(U_0(t,t_0)=\\exp[-iH_0(t-t_0)/\\hbar]\\). Define

\\[
\\lvert\\psi_I(t)\\rangle=U_0(t,t_0)^\\dagger\\lvert\\psi_S(t)\\rangle,
\\]

\\[
V_I(t)=U_0(t,t_0)^\\dagger V(t)U_0(t,t_0).
\\]

Then

\\[
i\\hbar\\frac{d}{dt}\\lvert\\psi_I(t)\\rangle=V_I(t)\\lvert\\psi_I(t)\\rangle.
\\]

The exactly solvable background has been removed; the residual interaction drives the state. A different split changes intermediate formulas but not an exactly computed final prediction. Truncated approximations can depend on the split, so it must be reported.

For the proof, differentiate $U_0^\\dagger\\psi_S$. The derivative of $U_0^\\dagger$ contributes $-U_0^\\dagger H_0\\psi_S$ after multiplication by $i\\hbar$, canceling the background part of $U_0^\\dagger H\\psi_S$. The remaining term is $U_0^\\dagger VU_0\\psi_I$. The interaction-picture observable is $A_I=U_0^\\dagger A_SU_0$; pairing it with $\\psi_I$ reproduces the Schrödinger expectation. At the propagator level $U_S=U_0U_I$, which follows either from this state identity for every initial vector or by differentiating the product. Thus transforming back after an approximate $U_I$ is part of the approximation specification.

## 5. Dyson expansion and time ordering

The interaction-picture integral equation is

\\[
\\lvert\\psi_I(t)\\rangle=\\lvert\\psi_I(t_0)\\rangle
-\\frac{i}{\\hbar}\\int_{t_0}^{t}V_I(s)\\lvert\\psi_I(s)\\rangle\\,ds.
\\]

Iterating produces the Dyson series. Through second order,

\\[
U_I=I-\\frac{i}{\\hbar}\\int_{t_0}^{t}V_I(s)\\,ds
-\\frac{1}{\\hbar^2}\\int_{t_0}^{t}ds\\int_{t_0}^{s}du\\,V_I(s)V_I(u)+\\cdots.
\\]

The triangular region enforces later operators on the left. Replacing it by an unordered square integral is valid only with the required commutation or symmetrization.

On a fixed finite interval let $\\lambda=\\hbar^{-1}\\int\\|V_I(s)\\|ds$. The norm of the ordered $k$th term is at most $\\lambda^k/k!$: the scalar norm-product integrand is symmetric, so its simplex integral is one factorial fraction of the cube. The series converges absolutely, and truncation after order $N$ has remainder at most

$$\\sum_{k=N+1}^\\infty\\frac{\\lambda^k}{k!}\\le e^\\lambda\\frac{\\lambda^{N+1}}{(N+1)!}.$$

This estimate supplies one rigorous regime for first-order perturbation, $\\lambda\\ll1$. Since unitary conjugation preserves operator norm, $\\|V_I\\|=\\|V\\|$. More refined estimates may exploit oscillatory cancellation and extend the regime, but bounded coefficients or rapid oscillations alone do not establish them. A truncated Dyson polynomial is generally not exactly unitary, even though the full sum is; renormalizing an output vector removes neither all amplitude nor phase error.

### Worked example: first-order transition and its time limit

Let $H_0=\\hbar\\omega_0Z/2$ and $V=\\hbar\\epsilon gX/2$ be constant, with real parameters. For initial $|0\\rangle$, the interaction matrix element to $|1\\rangle$ is $\\hbar\\epsilon g e^{-i\\omega_0t}/2$. The first-order transition amplitude over $[0,T]$ is

$$a_{10}^{(1)}=-\\frac{i\\epsilon g}{2}\\int_0^T e^{-i\\omega_0t}\\,dt
=\\frac{\\epsilon g}{2\\omega_0}(e^{-i\\omega_0T}-1),\\qquad\\omega_0\\ne0.$$

Its squared magnitude is $\\epsilon^2g^2\\sin^2(\\omega_0T/2)/\\omega_0^2$. At zero $\\omega_0$ take the continuous amplitude limit $-i\\epsilon gT/2$. It grows secularly; at large times its squared magnitude can exceed one, showing failure of the truncation rather than failure of probability theory. The exact resonant result is $\\sin^2(\\epsilon gT/2)$. Here $\\lambda=|\\epsilon g|T/2$, and the stated remainder estimate rigorously controls the short-interval amplitude error. Off resonance the first-order amplitude is bounded, but extending a full approximation to arbitrarily long time still needs estimates for higher orders and possible energy shifts.

## 6. Generators and one-parameter groups

A continuous unitary family \\(U(s)\\) satisfying \\(U(s+t)=U(s)U(t)\\) has a Hermitian generator in finite dimensions:

\\[
U(s)=e^{-isG}.
\\]

Time translation uses \\(G=H/\\hbar\\); spatial translation later uses momentum divided by \\(\\hbar\\); rotation uses angular momentum divided by \\(\\hbar\\). The parameter and generator units must multiply to a dimensionless exponent.

The generator depends on convention. Writing \\(e^{+isG}\\) changes signs in commutator formulas. State the convention before interpreting direction.

Here continuity is sufficient in finite dimensions; differentiability need not be assumed secretly. First simultaneously diagonalize the commuting unitary family. To justify that step for an entire family, choose a nonscalar member if there is one. Its orthogonal eigenspaces are invariant under every other member by commutation, and each restriction is unitary. Repeat on these lower-dimensional spaces until every restricted member is scalar. This finite recursion produces one common orthonormal basis.

The diagonal entries are continuous characters $\\chi_j:\\mathbb R\\to\\{z:|z|=1\\}$ with $\\chi_j(s+t)=\\chi_j(s)\\chi_j(t)$. Near zero choose a continuous real argument $\\theta_j$ with small magnitude and $\\theta_j(0)=0$. For sufficiently small $s,t,s+t$, the character law makes $\\theta_j(s+t)-\\theta_j(s)-\\theta_j(t)$ an integer multiple of $2\\pi$ with magnitude less than $2\\pi$, hence zero. A continuous locally additive function is linear, by rational subdivision and continuity: $\\theta_j(s)=-g_js$ near zero. For any real $s$ subdivide it into enough small equal pieces and apply the character law to obtain $\\chi_j(s)=e^{-ig_js}$ globally. Thus the same fixed basis gives $G=\\operatorname{diag}(g_j)$, conjugated back to the original coordinates, and $G$ is Hermitian. It is unique because $\\dot U(0)=-iG$. Infinite-dimensional strongly continuous groups need a domain-aware generator theorem instead; this proof's finite recursion does not supply that theorem.

A unitary member used in that recursion has an orthogonal eigenspace decomposition by the finite Hermitian results already proved: its real and imaginary parts $(U+U^\\dagger)/2$ and $(U-U^\\dagger)/(2i)$ are commuting Hermitian matrices, so have a common orthonormal eigenbasis; their sum reconstructs $U$. Thus the family argument needs no unproved infinite-dimensional spectral theorem.

For comparison, the infinite-dimensional **Stone theorem** is a cited continuation: a strongly continuous one-parameter unitary group on a Hilbert space has a unique self-adjoint generator $H$ with $U(t)=e^{-iHt/\\hbar}$. Strong continuity means norm continuity of $U(t)\\psi$ for each fixed vector, rather than operator-norm continuity. Its domain consists exactly of vectors for which $\\lim_{t\\to0}[U(t)\\psi-\\psi]/t$ exists in Hilbert norm, and $H\\psi=i\\hbar$ times that limit. Thus evolution exists on every state, while the strong Schrödinger derivative requires this generator domain. The preceding finite proof does not establish Stone's theorem; the domain chapter and the infinite-well finite-energy example explain why its distinction matters. This preserves the unbounded-generator content of the earlier statistical quantum reading as an explicitly identified theorem input.

One exact finite-matrix exponential identity also deserves its hypotheses. If $C=[A,B]$ commutes with both matrices, then $e^{A+B}=e^Ae^Be^{-C/2}$. Indeed differentiate $F(t)=e^{tA}e^{tB}e^{-t^2C/2}$; the identity $e^{tA}Be^{-tA}=B+tC$ makes $F'=(A+B)F$, $F(0)=I$. Uniqueness gives $F=e^{t(A+B)}$ and evaluation at one proves the formula. For unbounded operators a formal common-core commutator alone does not justify multiplying these exponentials or this differentiation; domain and group-control hypotheses are additional work.

## 7. Gauge-like phase changes of representation

A time-dependent unitary change \\(\\lvert\\psi'\\rangle=W(t)\\lvert\\psi\\rangle\\) produces

\\[
H'=WHW^\\dagger+i\\hbar(\\partial_tW)W^\\dagger.
\\]

The derivative term is mandatory. It explains effective rotating-frame Hamiltonians and why a change of coordinates can introduce apparent detuning. This is representation bookkeeping, not necessarily an electromagnetic gauge transformation.

Indeed $i\\hbar\\dot\\psi'=i\\hbar\\dot W\\psi+WH\\psi$, and substituting $\\psi=W^\\dagger\\psi'$ gives the formula. The extra term is Hermitian because $\\dot WW^\\dagger$ is anti-Hermitian by differentiating $WW^\\dagger=I$. Observables transform as $A'=WAW^\\dagger$, ensuring $\\langle\\psi'|A'|\\psi'\\rangle=\\langle\\psi|A|\\psi\\rangle$. For a scalar $W=e^{i\\chi(t)}I$, the Hamiltonian becomes $H-\\hbar\\dot\\chi I$, consistent with a time-dependent phase convention.

### Worked example: an exact rotating frame

Consider a circular drive

$$H_S(t)=\\frac\\hbar2\\left[\\omega_0Z+\\Omega(\\cos\\omega t\\,X+\\sin\\omega t\\,Y)\\right],\\qquad W(t)=e^{i\\omega tZ/2}.$$

Pauli conjugation sends the rotating transverse combination to $X$, and $i\\hbar\\dot WW^\\dagger=-\\hbar\\omega Z/2$. Therefore

$$H'=\\frac\\hbar2[(\\omega_0-\\omega)Z+\\Omega X].$$

This is an exact representation change for the stated circular-drive model, so the detuned solution of Chapter 4 applies and the laboratory state is recovered by $W^\\dagger$. No rotating-wave approximation has been used. In contrast a linear drive $\\hbar\\Omega\\cos\\omega t\\,X$ produces the same stationary transverse term plus $\\hbar\\Omega[\\cos2\\omega t\\,X-\\sin2\\omega t\\,Y]/2$ in this frame. Dropping those remaining terms is the separate rotating-wave approximation. Confusing the exact transformation with that truncation hides the only step that actually requires an error argument.

## 8. Approximation and evidence boundary

The rotating-wave approximation discards rapidly oscillating interaction-picture terms when their accumulated effect is small in the stated regime. “Rapid” is relative to drive strengths, detunings, and observation time. Near resonance over long times, a term small at each instant may accumulate.

A picture change is exact; dropping terms after the change is an approximation. Report them separately, validate against an exact solvable limit or numerical propagation, and avoid inferring experimental accuracy from algebraic convenience.

## Equal elapsed times need not give the same propagator

For a time-dependent Hamiltonian, the propagator has two clock arguments.
It obeys U(t,s)U(s,r)=U(t,r), but generally cannot be written as a
single function of t−s. This distinction remains even when all Hamiltonians
at different times commute. Take H(t)=ℏatZ, where a is a real constant
with units of inverse time squared. Direct integration gives
$$U(t,s)=\\exp[-ia(t^2-s^2)Z/2].$$
Its derivative and initial value verify the Schrödinger equation exactly.
A unit interval beginning later accumulates a different relative phase
between the two Z eigenstates than an interval of the same duration
beginning at zero. Therefore a one-parameter group law based only on
elapsed time is unavailable, despite the absence of time-ordering complications.

For a superposition of Z eigenstates, that phase changes a later X
measurement probability. The difference is not merely an overall phase
that can be discarded. A change of picture can move the explicit time
dependence between states, observables and the generator, but it preserves
the probability when all pieces are transformed consistently. It cannot
turn two different physical timing protocols into the same experiment.

The two-time composition identity is proved by uniqueness: both U(t,s)U(s,r)
and U(t,r) solve the same matrix initial-value problem as functions of
t, with matching value at t=s. In a finite-dimensional space with a
continuous Hermitian Hamiltonian, the existence and uniqueness construction
used earlier applies on each compact time interval. Adjoint evolution
gives U(s,t)=U(t,s)†, so reversing a defined interval supplies an inverse.
These facts do not require stationarity of the Hamiltonian.

This example gives a useful interpretation of interaction-picture notation.
A reference propagator also carries its initial time unless the reference
generator is genuinely time independent. Suppressing that argument can be
convenient after choosing a fixed origin, but it should not be interpreted
as a time-translation symmetry. State the clock origin, switch times and
reference evolution whenever comparing pulses or experiments performed over
equal durations.

## Exercises with complete solutions

<a id="pictures-generators-propagators-ex-1"></a>

### 1. Identity propagator
What is \\(U(t_0,t_0)\\)?

<details>
<summary>Hint 1</summary>

Use the propagator initial condition.

</details>

<details>
<summary>Hint 2</summary>

Propagation over a zero time interval changes no vector.

</details>

<details>
<summary>Full solution</summary>

It is \\(I\\) by the propagator initial condition.

</details>

<a id="pictures-generators-propagators-ex-2"></a>

### 2. Inverse propagation
Show \\(U(t_0,t)=U(t,t_0)^\\dagger\\).

<details>
<summary>Hint 1</summary>

Reverse propagation is the inverse evolution.

</details>

<details>
<summary>Hint 2</summary>

A unitary matrix has its adjoint as its inverse.

</details>

<details>
<summary>Full solution</summary>

Unitarity makes the inverse equal the adjoint, and inverse evolution reverses the time interval.

</details>

<a id="pictures-generators-propagators-ex-3"></a>

### 3. Composition order
Write propagation from \\(t_0\\) to \\(t_2\\) through \\(t_1\\).

<details>
<summary>Hint 1</summary>

Apply the earlier interval map to the state first.

</details>

<details>
<summary>Hint 2</summary>

The intermediate time labels must meet in the two adjacent factors.

</details>

<details>
<summary>Full solution</summary>

\\(U(t_2,t_0)=U(t_2,t_1)U(t_1,t_0)\\); the earlier interval acts first on the state.

</details>

<a id="pictures-generators-propagators-ex-4"></a>

### 4. Constant Hamiltonian
Verify \\(\\exp[-iH(t-t_0)/\\hbar]\\) solves the propagator equation.

<details>
<summary>Hint 1</summary>

Differentiate the exponential of a constant matrix.

</details>

<details>
<summary>Hint 2</summary>

At the initial time its exponent vanishes.

</details>

<details>
<summary>Full solution</summary>

Differentiation brings down \\(-iH/\\hbar\\); multiplying by \\(i\\hbar\\) yields \\(HU\\), and the exponent vanishes at \\(t=t_0\\).

</details>

<a id="pictures-generators-propagators-ex-5"></a>

### 5. Picture-invariant expectation
Prove the Schrödinger and Heisenberg expectations agree.

<details>
<summary>Hint 1</summary>

Replace the Schrödinger state by U times the fixed initial state.

</details>

<details>
<summary>Hint 2</summary>

Move the adjoint into the bra and identify the transformed observable.

</details>

<details>
<summary>Full solution</summary>

Substitute \\(\\lvert\\psi_S(t)\\rangle=U\\lvert\\psi_H\\rangle\\) and \\(A_H=U^\\dagger A_SU\\); the expression becomes \\(\\langle\\psi_H\\rvert A_H\\lvert\\psi_H\\rangle\\).

</details>

<a id="pictures-generators-propagators-ex-6"></a>

### 6. Heisenberg equation
Differentiate \\(A_H=U^\\dagger AU\\) for constant \\(A,H\\).

<details>
<summary>Hint 1</summary>

Differentiate all three factors in the transformed operator.

</details>

<details>
<summary>Hint 2</summary>

Use the opposite signs in the propagator and adjoint differential equations.

</details>

<details>
<summary>Full solution</summary>

Use \\(\\dot U=-iHU/\\hbar\\) and \\(\\dot U^\\dagger=iU^\\dagger H/\\hbar\\); collecting terms gives \\((i/\\hbar)[H_H,A_H]\\).

</details>

<a id="pictures-generators-propagators-ex-7"></a>

### 7. Conserved Hamiltonian
Show constant \\(H\\) is conserved in the Heisenberg picture.

<details>
<summary>Hint 1</summary>

A constant Hamiltonian commutes with its own propagator.

</details>

<details>
<summary>Hint 2</summary>

Its Heisenberg derivative is its commutator with itself.

</details>

<details>
<summary>Full solution</summary>

Its derivative is \\((i/\\hbar)[H,H]=0\\).

</details>

<a id="pictures-generators-propagators-ex-8"></a>

### 8. Explicit time dependence
If \\(A_S(t)=tI\\), find \\(d\\langle A\\rangle/dt\\).

<details>
<summary>Hint 1</summary>

The explicit derivative is the identity.

</details>

<details>
<summary>Hint 2</summary>

The identity commutes with every Hamiltonian and has expectation one in a normalized state.

</details>

<details>
<summary>Full solution</summary>

The commutator vanishes and \\(\\partial_tA=I\\), so the derivative is one for every normalized state.

</details>

<a id="pictures-generators-propagators-ex-9"></a>

### 9. Pauli commutator check
For \\(H=\\hbar\\Omega Z/2\\), compute \\(\\dot X_H(0)\\).

<details>
<summary>Hint 1</summary>

The Pauli order Z,X has commutator positive two i Y.

</details>

<details>
<summary>Hint 2</summary>

Multiplication by the extra i from the Heisenberg equation reverses the sign.

</details>

<details>
<summary>Full solution</summary>

\\([Z,X]=2iY\\), hence \\((i\\Omega/2)(2iY)=-\\Omega Y\\).

</details>

<a id="pictures-generators-propagators-ex-10"></a>

### 10. Interaction state initially
What is \\(\\psi_I(t_0)\\)?

<details>
<summary>Hint 1</summary>

The background propagator is identity at the initial time.

</details>

<details>
<summary>Hint 2</summary>

Its adjoint is therefore identity as well.

</details>

<details>
<summary>Full solution</summary>

Since \\(U_0(t_0,t_0)=I\\), it equals the Schrödinger state at \\(t_0\\).

</details>

<a id="pictures-generators-propagators-ex-11"></a>

### 11. No interaction
If \\(V=0\\), how does \\(\\psi_I\\) evolve?

<details>
<summary>Hint 1</summary>

The interaction-picture generator is the interaction itself.

</details>

<details>
<summary>Hint 2</summary>

The removed background still evolves the Schrödinger state even when the interaction state is constant.

</details>

<details>
<summary>Full solution</summary>

Its derivative is zero, so it remains constant; all motion is carried by \\(U_0\\).

</details>

<a id="pictures-generators-propagators-ex-12"></a>

### 12. Commuting interaction
If \\([V_I(t),V_I(s)]=0\\) always, simplify \\(U_I\\).

<details>
<summary>Hint 1</summary>

All interaction matrices commute pairwise by assumption.

</details>

<details>
<summary>Hint 2</summary>

The ordered simplex products can then be combined into the ordinary exponential series.

</details>

<details>
<summary>Full solution</summary>

Time ordering is unnecessary and \\(U_I=\\exp[-(i/\\hbar)\\int V_I(s)\\,ds]\\).

</details>

<a id="pictures-generators-propagators-ex-13"></a>

### 13. First-order amplitude
State the first-order transition amplitude between distinct orthonormal background states \\(i\\) and \\(f\\).

<details>
<summary>Hint 1</summary>

Project the first-order Dyson term between the two distinct background states.

</details>

<details>
<summary>Hint 2</summary>

Their zeroth-order overlap vanishes, leaving one time integral.

</details>

<details>
<summary>Full solution</summary>

It is \\(-(i/\\hbar)\\int\\langle f\\rvert V_I(t)\\lvert i\\rangle\\,dt\\), over the stated interaction interval.

</details>

<a id="pictures-generators-propagators-ex-14"></a>

### 14. Dimensional audit
What units must a time-translation generator have if the exponent is \\(-itG\\)?

<details>
<summary>Hint 1</summary>

The product of time and generator in an exponential must be dimensionless.

</details>

<details>
<summary>Hint 2</summary>

Divide energy by hbar rather than by h to obtain the angular-frequency convention.

</details>

<details>
<summary>Full solution</summary>

It must have inverse-time units; \\(G=H/\\hbar\\) satisfies this.

</details>

<a id="pictures-generators-propagators-ex-15"></a>

### 15. Generator sign
If \\(U(s)=e^{+isG}\\), what is \\(dU/ds\\) at zero?

<details>
<summary>Hint 1</summary>

Differentiate the exponential at zero directly.

</details>

<details>
<summary>Hint 2</summary>

Its chosen plus sign reverses the sign of the usual convention.

</details>

<details>
<summary>Full solution</summary>

It is \\(iG\\), rather than \\(-iG\\) under the convention used in the chapter.

</details>

<a id="pictures-generators-propagators-ex-16"></a>

### 16. Rotating-frame Hamiltonian
Why must a time-dependent change of frame alter \\(H\\) beyond conjugation?

<details>
<summary>Hint 1</summary>

Use the product rule on W times the state.

</details>

<details>
<summary>Hint 2</summary>

Rewrite the original state using the adjoint of W to identify the new Hamiltonian.

</details>

<details>
<summary>Full solution</summary>

Differentiating \\(W(t)\\lvert\\psi(t)\\rangle\\) produces \\(\\dot W\\lvert\\psi\\rangle\\); the extra term is \\(i\\hbar\\dot W W^\\dagger\\).

</details>

<a id="pictures-generators-propagators-ex-17"></a>

### 17. Constant frame change
What happens to the derivative term when \\(W\\) is constant?

<details>
<summary>Hint 1</summary>

A constant unitary has zero time derivative.

</details>

<details>
<summary>Hint 2</summary>

Only the conjugated Hamiltonian remains.

</details>

<details>
<summary>Full solution</summary>

It vanishes, leaving \\(H'=WHW^\\dagger\\).

</details>

<a id="pictures-generators-propagators-ex-18"></a>

### 18. Split dependence
Does an exact prediction depend on the chosen \\(H_0+V\\) split?

<details>
<summary>Hint 1</summary>

Multiplying the exact interaction propagator by the exact background propagator recovers the original solution.

</details>

<details>
<summary>Hint 2</summary>

Only a truncation introduces dependence of an approximate answer on the chosen split.

</details>

<details>
<summary>Full solution</summary>

No. The split is a representation strategy. A truncated approximation may depend on it and must report that choice.

</details>

<a id="pictures-generators-propagators-ex-19"></a>

### 19. Unordered pulses
When may two pulse propagators be swapped?

<details>
<summary>Hint 1</summary>

Operator commutation is a sufficient condition for equal products.

</details>

<details>
<summary>Hint 2</summary>

A statement restricted to isolated rays may also ignore a common scalar phase; other protocols may expose it.

</details>

<details>
<summary>Full solution</summary>

When they commute, or when their difference is physically irrelevant for the stated restricted claim; otherwise swapping changes evolution.

</details>

<a id="pictures-generators-propagators-ex-20"></a>

### 20. Approximation boundary
Why is “fast oscillation” alone insufficient to justify dropping a term?

<details>
<summary>Hint 1</summary>

Compare the coefficient amplitude and observation duration with the oscillation frequency.

</details>

<details>
<summary>Hint 2</summary>

An approximation needs a bound on accumulated action, including higher orders, rather than only a rapidly changing sign.

</details>

<details>
<summary>Full solution</summary>

Its effect also depends on amplitude, detuning, observation time, resonance, and accumulation. A quantitative error estimate or convergence comparison is needed.

</details>

## Chapter summary

Schrödinger, Heisenberg, and interaction pictures redistribute time dependence without changing exact predictions. Propagators compose in order, Hermitian generators create continuous unitary groups, and time-dependent frames add a derivative term. Approximation begins only when terms are truncated, at which point regime and error evidence become part of the claim.

[Previous chapter](#/item/book-two-state-quantum-mechanics?chapter=unitary-dynamics-two-level) · [Next chapter](#/item/book-two-state-quantum-mechanics?chapter=commutators-uncertainty-compatibility) · [Book overview](#/item/book-two-state-quantum-mechanics)
`;export{e as default};