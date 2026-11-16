var e=`---
parent_id: book-two-state-quantum-mechanics
chapter_id: open-systems-decoherence
title: "Open Systems, Decoherence, and Master Equations"
level: advanced-undergraduate
estimated_minutes: 230
license: CC BY-SA 4.0
status: draft
---

# Open Systems, Decoherence, and Master Equations

An open system is a subsystem of a larger dynamical model. Joint unitary evolution can produce nonunitary reduced motion through entanglement and discarded environmental degrees of freedom. Markovian master equations are useful approximations, not automatic consequences of tracing out an environment.

## 1. Reduced dynamics

For initial product state $\\rho_S\\otimes\\rho_E$ and joint unitary $U$,

$\\rho_S(t)=\\operatorname{Tr}_E\\!\\left[U(\\rho_S\\otimes\\rho_E)U^{\\dagger}\\right]$

defines a channel. If initial system-environment correlations are present, a state-independent channel on every system input may not exist. The preparation domain must be specified.

## 2. Decoherence

An explicit correlation example shows why the preparation contract matters. The Bell projector $|\\Phi^+\\rangle\\langle\\Phi^+|$ and the classical joint mixture $(|00\\rangle\\langle00|+|11\\rangle\\langle11|)/2$ have the same initial system marginal $I/2$. Apply the same controlled-NOT with the system as control and environment as target. It sends the Bell vector to $|+\\rangle_S|0\\rangle_E$, giving final system state $|+\\rangle\\langle+|$. The classical mixture instead becomes $(|00\\rangle\\langle00|+|10\\rangle\\langle10|)/2$, leaving final system state $I/2$. Thus the same initial marginal and same joint unitary give different reduced outputs when the correlations differ. No map of that marginal alone can cover both preparations. This is not a violation of linear joint evolution; it is a failure to specify enough initial data for the reduced problem.

For a proof of the channel statement, diagonalize the fixed environment state as $\\rho_E=\\sum_rq_r|r\\rangle\\langle r|$ and choose an environment output basis $|e\\rangle$. The system operators $K_{er}=\\sqrt{q_r}\\langle e|U|r\\rangle$ give the Kraus sum after tracing the environment. Their adjoint products sum to $\\sum_rq_r\\langle r|U^\\dagger U|r\\rangle=I$. Thus complete positivity and trace preservation follow from an explicit fixed assignment across all system inputs. A correlated initial preparation cannot in general be replaced by this product assignment without changing the joint state. Any claimed map must say which compatible preparations it actually relates.

Environmental entanglement can suppress off-diagonal terms in a selected basis. If

$(a|0\\rangle+b|1\\rangle)|e\\rangle \\to a|0\\rangle|e_0\\rangle+b|1\\rangle|e_1\\rangle$,

then the reduced coherence is multiplied by $\\langle e_1|e_0\\rangle$. Orthogonal environment records remove it. Decoherence explains effective loss of interference relative to a decomposition; it does not by itself select one interpretation or produce one observed outcome.

## 3. Dynamical semigroups

### Worked example: exact loss and revival with one environment qubit

Take $g>0$, $U(t)=e^{-igtZ_S\\otimes Z_E/2}$ and environment $|+\\rangle$. Conditional environment vectors are $e_0=e^{-igtZ/2}|+\\rangle$, $e_1=e^{igtZ/2}|+\\rangle$, with overlap $\\langle e_1|e_0\\rangle=\\cos gt$. Therefore an arbitrary input's populations are unchanged and its coherence is multiplied by $c(t)=\\cos gt$. This is a channel at every time: $\\Phi_t(\\rho)=[(1+c(t))/2]\\rho+[(1-c(t))/2]Z\\rho Z$.

For initial $|+\\rangle$, the reduced Bloch vector is $(\\cos gt,0,0)$ and purity is $(1+\\cos^2gt)/2$. At $t=\\pi/(2g)$ the state is maximally mixed, while at $t=\\pi/g$ it is the pure minus-$X$ state; the original plus state returns at $2\\pi/g$. No global purity was lost: the joint evolution was unitary. The family is not a semigroup because $\\cos g(t+s)$ is generally not $\\cos gt\\cos gs$.

For initially opposite $X$ states, output trace distance is $|\\cos gt|$, which falls to zero and then revives. A trace-preserving positive intervening map could not increase this distance from zero, by Chapter 16's contraction proof. Thus this family fails CP divisibility across that interval, despite being CPTP at each individual time. Where $\\cos gt\\ne0$, a time-local dephasing coefficient $\\gamma(t)=g\\tan gt$ reproduces $\\dot c=-\\gamma c$; it becomes negative during revival and is singular where the map loses invertibility. A time-local formula is not therefore automatically a globally defined Markovian generator.

A time-homogeneous Markovian family satisfies $\\Phi_{t+s}=\\Phi_t \\Phi_s$ for nonnegative times. Its finite-dimensional generator has GKSL form

$\\dot\\rho=-\\frac{i}{\\hbar}[H,\\rho]+\\sum_j\\gamma_j\\!\\left(L_j\\rho L_j^{\\dagger}-\\frac12\\{L_j^{\\dagger}L_j,\\rho\\}\\right)$,

with nonnegative rates in a canonical representation. This preserves trace and complete positivity. Time-local equations with negative instantaneous rates require separate interpretation and need not define a divisible Markov process.

## 4. Qubit relaxation and dephasing

The classification of all norm-continuous finite-dimensional CPTP semigroup generators into GKSL form is a cited theorem. Its converse can be proved constructively here. Absorb each fixed nonnegative rate into $V_j=\\sqrt{\\gamma_j}L_j$ and put $Q=\\sum_jV_j^\\dagger V_j$. For sufficiently small $h>0$, $I-hQ\\ge0$. Define

$$K_0=e^{-iHh/\\hbar}\\sqrt{I-hQ},\\qquad K_j=\\sqrt h\\,V_j.$$

Their adjoint products sum exactly to identity, giving a CPTP map $\\Psi_h$. Taylor expansion in finite operator norm gives $\\Psi_h=I+h\\mathcal L+O(h^2)$ with the displayed GKSL generator. For fixed $t$, the repeated channel $\\Psi_{t/n}^{\\,n}$ converges in operator norm to $e^{t\\mathcal L}$: comparison with $(I+t\\mathcal L/n)^n$ by a telescoping sum bounds the accumulated remainder by a constant times $n(t/n)^2$, and the latter powers converge to the exponential. Complete positivity and trace preservation pass to this finite-dimensional norm limit. Thus the stated form really generates channels for every $t\\ge0$, not merely trace-preserving formal derivatives. The exponential law supplies time homogeneity and the semigroup property. This proof assumes constant coefficients and bounded finite matrices; time-dependent or unbounded generators need additional work.

Amplitude damping models relaxation with characteristic time $T_1$; pure dephasing damps coherences without changing computational-basis populations, with scale $T_\\phi$. In a common convention,

$\\dfrac1{T_2}=\\dfrac1{2T_1}+\\dfrac1{T_\\phi}$.

The relation belongs to a particular exponential Markov model. Real decay may be nonexponential, inhomogeneous, driven, temperature dependent, or correlated.

## 5. Thermal fixed points

### Worked example: derive the relaxation-time relation

Use ground state $|0\\rangle$, Hamiltonian $H=\\hbar\\omega|1\\rangle\\langle1|$, $\\omega>0$, lowering $L_-=|0\\rangle\\langle1|$, rate $\\kappa\\ge0$, and an additional term $\\gamma_\\phi(Z\\rho Z-\\rho)/2$, $\\gamma_\\phi\\ge0$. For excited population $b=\\rho_{11}$ and coherence $c=\\rho_{01}$, matrix multiplication gives

$$\\dot b=-\\kappa b,\\qquad \\dot c=(i\\omega-\\kappa/2-\\gamma_\\phi)c.$$

Hence $b(t)=b(0)e^{-\\kappa t}$ and $c(t)=c(0)e^{i\\omega t}e^{-(\\kappa/2+\\gamma_\\phi)t}$. Trace fixes the remaining population. Damping is Chapter 16's channel with $\\gamma=1-e^{-\\kappa t}$, while an independent phase channel multiplies coherence by $e^{-\\gamma_\\phi t}$. These explicit factors also prove positivity of the solution.

With $T_1=1/\\kappa$, $T_\\phi=1/\\gamma_\\phi$ and infinite time constants when the rate vanishes, $1/T_2=1/(2T_1)+1/T_\\phi$ follows exactly. In this model $T_2\\le2T_1$, with equality when there is no extra dephasing. The statement concerns a particular exponential envelope after removing the Hamiltonian phase. Inhomogeneous ensemble averaging or a time-dependent drive can produce another apparent decay time; it would need a different model before being compared with this identity.

A weak-coupling thermal master equation may approach $\\rho_\\beta=e^{-\\beta H}/Z$, provided detailed-balance and ergodicity conditions hold. A bath temperature does not alone prove the subsystem is Gibbsian at all times or coupling strengths. Strong coupling changes the meaning of subsystem energy and equilibrium reduction.

## 6. Non-Markovian boundaries

The generator also identifies conserved expectations directly. Its Heisenberg dual acts as $\\mathcal L^*(A)=i[H,A]/\\hbar+\\sum_j\\gamma_j[L_j^\\dagger AL_j-\\{L_j^\\dagger L_j,A\\}/2]$. If $A$ commutes with $H$ and with every $L_j,L_j^\\dagger$, each contribution vanishes and its expectation is constant. The identity always qualifies, proving trace preservation; $Z$ qualifies for pure dephasing, explaining why that model retains its initial population imbalance. Such an invariant prevents convergence of every input to one state with a fixed different imbalance. Uniqueness of equilibrium is therefore an additional dynamical property, not a consequence of the GKSL form alone.

### Worked example: detailed balance and a unique two-level equilibrium

Add an upward jump $L_+=|1\\rangle\\langle0|$ with rate $\\kappa_u\\ge0$ and a downward rate $\\kappa_d>0$ for the same Hamiltonian. The population obeys $\\dot b=\\kappa_u(1-b)-\\kappa_db$. Writing $\\Gamma=\\kappa_u+\\kappa_d$, its solution is

$$b(t)=\\frac{\\kappa_u}{\\Gamma}+\\left[b(0)-\\frac{\\kappa_u}{\\Gamma}\\right]e^{-\\Gamma t}.$$

Coherences decay at rate $\\Gamma/2$ apart from their Hamiltonian phase, so there is one stationary density matrix. If the rates satisfy $\\kappa_u/\\kappa_d=e^{-\\beta\\hbar\\omega}$, its excited population is $1/(1+e^{\\beta\\hbar\\omega})$, precisely the Gibbs value. The ratio is a thermal detailed-balance input, not implied by trace preservation or complete positivity. Equal rates give the infinite-temperature center; zero upward rate gives the ground projector. In contrast pure dephasing alone leaves every diagonal state stationary and cannot force a unique Gibbs distribution. A temperature label does not replace the irreducibility and detailed-balance checks.

Strong coupling can also change a reduced equilibrium even when all terms commute. Take two spins with total Hamiltonian $\\epsilon Z_S+bZ_E+JZ_S Z_E$, and a joint Gibbs state at $\\beta>0$. Summing the environmental sign gives system weights $w_s=2e^{-\\beta\\epsilon s}\\cosh[\\beta(b+Js)]$, $s=\\pm1$. Their ratio is

$$\\frac{w_+}{w_-}=e^{-2\\beta\\epsilon}\\frac{\\cosh\\beta(b+J)}{\\cosh\\beta(b-J)}.$$

It generally differs from the bare system Gibbs ratio. At $J=0$ it reduces to that ratio; at special symmetric parameters it may agree even with nonzero coupling. The exact example proves “need not be bare Gibbs,” rather than a claim that every interacting reduction must differ. Its thermodynamic equilibrium question is distinct from the product-preparation dynamical channel at the beginning of this chapter.

Memory can arise from structured environments, slow bath correlations, repeated interactions, or initial correlations. Revivals of distinguishability can witness some non-Markovian definitions, but definitions are not identical. A fitted exponential decay is evidence for a convenient effective model over the measured window, not proof of microscopic white noise.

## Complete positivity at each time does not imply divisibility

Consider a qubit dephasing family that leaves diagonal entries
unchanged and multiplies off-diagonal entries by c(t)=exp(−Γ(t)),
where Γ is differentiable, nonnegative and zero initially. Each
map is completely positive: it is the mixture of the identity
channel and Z conjugation with probabilities (1+c)/2 and (1−c)/2.
Because c is strictly positive, each map is invertible as a
linear map on matrices, even though its inverse is generally
not a physical channel.

The only possible intermediate linear map from time s to time
t multiplies coherence by c(t)/c(s), obtained by composing the
later map with that linear inverse. It is a dephasing channel
exactly when the ratio lies between minus one and one. Here
the ratio is positive, so complete-positive divisibility requires
Γ(t)≥Γ(s) for t≥s. If the ratio exceeds one, applying the
intermediate map to a pure positive-X state gives eigenvalues
(1±c(t)/c(s))/2, one of which is negative. The intermediate
map is then not even positive.

Take Γ(t)=a sin²t with a>0 and a dimensionless time chosen
for this example. All the maps from the initial time remain
completely positive, while intervals on which Γ decreases show
coherence revival and fail that divisibility condition. Their
time-local generator has coefficient Γ′(t)/2 multiplying
ZρZ−ρ. A temporarily negative coefficient therefore does not
by itself contradict complete positivity of the full maps from
the initial preparation; it contradicts the stronger divisibility
property for this invertible family.

Conversely, choose a nonnegative rate Γ′(t) that varies with
time. Every intermediate dephasing map is completely positive,
but the family is generally not a time-homogeneous semigroup.
The semigroup composition law would require Γ(t+s)=Γ(t)+Γ(s).
For a continuous Γ this forces linear dependence on time,
which is much more restrictive than monotonicity. Thus complete
positivity, complete-positive divisibility and a constant-generator
semigroup are three different assumptions.

Pure dephasing also illustrates a separate equilibrium issue.
Every diagonal state is stationary for every member of the
family. Decaying coherence therefore does not select a unique
thermal population distribution. The relaxation model above
needs population-changing transitions and its stated connectivity
conditions to obtain uniqueness. A fitted decay envelope by
itself cannot establish thermalization or identify a temperature.
The stationary set and the approach rate are different parts
of a reduced-dynamics claim, even when both are described
using one master equation.

These distinctions help interpret a fitted master equation.
An observed revival may rule out a particular positive-rate
divisible model without invalidating reduced quantum dynamics.
A positive rate at every recorded instant does not establish
stationarity of the generator between those instants. Conversely
a time-dependent representation must be analysed together with
its full propagator before a negative instantaneous coefficient
is labeled unphysical. The explicit family above proves all
these points without using a perturbative bath approximation
or identifying one general definition of memory with every
possible non-Markovian diagnostic.

## Purity production identifies the sign of a divisible dephasing rate

For the generator γ(ZρZ−ρ)/2, differentiate the
purity and use trace cyclicity. The result is
$$
\\frac{d}{dt}\\operatorname{tr}(\\rho^2)
=\\gamma\\bigl[\\operatorname{tr}(\\rho Z\\rho Z)-\\operatorname{tr}(\\rho^2)\\bigr]
=-\\frac{\\gamma}{2}\\|[Z,\\rho]\\|_{\\mathrm{HS}}^2.
$$

A nonnegative
rate therefore makes purity nonincreasing; equality
holds when the state already commutes with Z.

In the invertible revival family above, a
negative instantaneous rate can make purity
increase over an interval. Every map from
the original time can still be completely
positive because its accumulated dephasing remains
nonnegative. Purity never exceeds its original
value under those individual maps, yet can
recover part of an earlier loss. This
distinguishes an instantaneous divisibility claim
from positivity of the full preparation-to-time
channel. The derivative identity exposes that
distinction through one explicit observable
of the reduced state, without identifying
all notions of memory with a single fitted rate.

## Exercises with complete solutions

<a id="open-systems-decoherence-ex-1"></a>

### 1. Reduced trace
Why does a joint unitary preserve total trace?

<details>
<summary>Hint 1</summary>

Move the final unitary adjoint around the full trace.

</details>

<details>
<summary>Hint 2</summary>

The unitary product becomes identity.

</details>

<details>
<summary>Full solution</summary>

Cyclicity gives $\\operatorname{Tr}(U\\rho U^{\\dagger})=\\operatorname{Tr}(\\rho U^{\\dagger} U)=\\operatorname{Tr} \\rho$.

</details>

<a id="open-systems-decoherence-ex-2"></a>

### 2. Reduced positivity
Why is the partial trace positive?

<details>
<summary>Hint 1</summary>

Test the reduced matrix against a system vector and sum over an environment basis.

</details>

<details>
<summary>Hint 2</summary>

Each resulting joint quadratic form is nonnegative.

</details>

<details>
<summary>Full solution</summary>

For positive joint $\\rho$, every local expectation $\\operatorname{Tr}[\\rho(A \\otimes I)]$ is nonnegative for positive $A$, defining a positive reduction.

</details>

<a id="open-systems-decoherence-ex-3"></a>

### 3. Product assumption
Where is it used in defining one channel for all inputs?

<details>
<summary>Hint 1</summary>

The environment density operator must be the same for every input in the declared family.

</details>

<details>
<summary>Hint 2</summary>

The product assignment then respects convex mixtures and gives one linear Kraus map.

</details>

<details>
<summary>Full solution</summary>

A fixed $\\rho_E$ makes the assignment $\\rho_S \\to \\rho_S \\otimes \\rho_E$ linear and consistent across inputs.

</details>

<a id="open-systems-decoherence-ex-4"></a>

### 4. Coherence factor
What remains if $e_0=e_1$?

<details>
<summary>Hint 1</summary>

The two conditional environment vectors coincide.

</details>

<details>
<summary>Hint 2</summary>

Their inner product is the unit norm of that vector.

</details>

<details>
<summary>Full solution</summary>

Their overlap is one, so no reduced coherence is lost.

</details>

<a id="open-systems-decoherence-ex-5"></a>

### 5. Orthogonal records
What if $\\langle e_1|e_0\\rangle=0$?

<details>
<summary>Hint 1</summary>

Trace the two environment outer products in the cross term.

</details>

<details>
<summary>Hint 2</summary>

Orthogonality makes the coherence multiplier zero.

</details>

<details>
<summary>Full solution</summary>

Off-diagonal reduced terms vanish.

</details>

<a id="open-systems-decoherence-ex-6"></a>

### 6. Outcome boundary
Does a diagonal reduced state choose one outcome?

<details>
<summary>Hint 1</summary>

A reduced operator predicts local outcome probabilities.

</details>

<details>
<summary>Hint 2</summary>

Tracing out a record does not produce a unique actual branch in the total unitary description.

</details>

<details>
<summary>Full solution</summary>

No. It gives an improper mixture for subsystem statistics; outcome interpretation needs additional claims.

</details>

<a id="open-systems-decoherence-ex-7"></a>

### 7. Semigroup identity
What is $\\Phi_0$?

<details>
<summary>Hint 1</summary>

Zero elapsed time is the initial condition of the dynamical family.

</details>

<details>
<summary>Hint 2</summary>

A channel with no evolution acts as identity.

</details>

<details>
<summary>Full solution</summary>

The identity channel.

</details>

<a id="open-systems-decoherence-ex-8"></a>

### 8. Trace of commutator
Why does the Hamiltonian term preserve trace?

<details>
<summary>Hint 1</summary>

Expand the commutator trace into two terms.

</details>

<details>
<summary>Hint 2</summary>

Cyclicity makes them equal.

</details>

<details>
<summary>Full solution</summary>

$\\operatorname{Tr}[H,\\rho]=0$ by cyclicity.

</details>

<a id="open-systems-decoherence-ex-9"></a>

### 9. Lindblad trace
Why does one dissipator preserve trace?

<details>
<summary>Hint 1</summary>

Cycle the jump term into the same product ordering as the anticommutator terms.

</details>

<details>
<summary>Hint 2</summary>

The two halves add to the full term that is subtracted.

</details>

<details>
<summary>Full solution</summary>

$\\operatorname{Tr}(L\\rho L^{\\dagger})=\\operatorname{Tr}(L^{\\dagger} L\\rho)$, which cancels the two anticommutator halves.

</details>

<a id="open-systems-decoherence-ex-10"></a>

### 10. Pure dephasing populations
What does it leave unchanged?

<details>
<summary>Hint 1</summary>

A diagonal dephasing operator does not transfer population between its eigenvectors.

</details>

<details>
<summary>Hint 2</summary>

Its dissipator cancels on the corresponding diagonal entries.

</details>

<details>
<summary>Full solution</summary>

Populations in the dephasing operator's eigenbasis.

</details>

<a id="open-systems-decoherence-ex-11"></a>

### 11. $T_1$ limit
If $T_\\phi$ is infinite, what is $T_2$?

<details>
<summary>Hint 1</summary>

An infinite pure-dephasing time means zero additional dephasing rate.

</details>

<details>
<summary>Hint 2</summary>

Invert the remaining relation for T2.

</details>

<details>
<summary>Full solution</summary>

$T_2=2T_1$ under the stated convention.

</details>

<a id="open-systems-decoherence-ex-12"></a>

### 12. Extra dephasing
Can $T_2$ exceed $2T_1$ in that model?

<details>
<summary>Hint 1</summary>

Both rates in the reciprocal-time formula are nonnegative.

</details>

<details>
<summary>Hint 2</summary>

The extra term can only shorten T2 within this model.

</details>

<details>
<summary>Full solution</summary>

No, because $1/T_\\phi\\geq 0$.

</details>

<a id="open-systems-decoherence-ex-13"></a>

### 13. Gibbs normalization
What is $Z$?

<details>
<summary>Hint 1</summary>

Normalize the positive exponential by its trace.

</details>

<details>
<summary>Hint 2</summary>

This is finite for every finite-dimensional Hamiltonian.

</details>

<details>
<summary>Full solution</summary>

$Z=\\operatorname{Tr} \\exp\\left(-\\beta H\\right)$, making the state trace one.

</details>

<a id="open-systems-decoherence-ex-14"></a>

### 14. Zero temperature
What state is approached for a nondegenerate ground level in the ideal limit?

<details>
<summary>Hint 1</summary>

At large positive beta the lowest energy dominates the Gibbs weights.

</details>

<details>
<summary>Hint 2</summary>

Nondegeneracy leaves one rank-one projector after normalization.

</details>

<details>
<summary>Full solution</summary>

The ground-state projector.

</details>

<a id="open-systems-decoherence-ex-15"></a>

### 15. Infinite temperature
What finite-dimensional Gibbs state results as $\\beta \\to 0$?

<details>
<summary>Hint 1</summary>

At beta zero the exponential becomes identity.

</details>

<details>
<summary>Hint 2</summary>

Divide by the dimension to restore trace one.

</details>

<details>
<summary>Full solution</summary>

$I/d$.

</details>

<a id="open-systems-decoherence-ex-16"></a>

### 16. Revival
Can a finite environment produce recurrences?

<details>
<summary>Hint 1</summary>

Finite unitary spectral phases need not erase their relative alignment permanently.

</details>

<details>
<summary>Hint 2</summary>

Use the explicit two-qubit cosine-coherence example.

</details>

<details>
<summary>Full solution</summary>

Yes. Joint unitary phases can rephase, restoring subsystem coherence or distinguishability.

</details>

<a id="open-systems-decoherence-ex-17"></a>

### 17. Negative rate
Does it automatically make every time-local equation unphysical?

<details>
<summary>Hint 1</summary>

A time-local derivative description is not the same as each integrated map.

</details>

<details>
<summary>Hint 2</summary>

The revival example has CPTP maps despite negative rates and singularities in the local representation.

</details>

<details>
<summary>Full solution</summary>

No. The integrated maps may remain completely positive, but CP divisibility and interpretation require checking.

</details>

<a id="open-systems-decoherence-ex-18"></a>

### 18. Exponential fit
Does it identify a unique bath spectrum?

<details>
<summary>Hint 1</summary>

A finite observation window probes only limited input-output behavior.

</details>

<details>
<summary>Hint 2</summary>

Distinct environments can share an effective exponential envelope over that window.

</details>

<details>
<summary>Full solution</summary>

No. Many microscopic models can agree over a limited time window.

</details>

<a id="open-systems-decoherence-ex-19"></a>

### 19. Strong coupling
Why can it obstruct a simple Gibbs subsystem?

<details>
<summary>Hint 1</summary>

The joint equilibrium includes the interaction term before tracing.

</details>

<details>
<summary>Hint 2</summary>

The explicit commuting-spin Gibbs example gives an additional cosh ratio.

</details>

<details>
<summary>Full solution</summary>

Interaction energy is not negligible, so reduced equilibrium need not equal $\\exp\\left(-\\beta H_S\\right)/Z_S$.

</details>

<a id="open-systems-decoherence-ex-20"></a>

### 20. Model evidence
Name two checks for a master equation.

<details>
<summary>Hint 1</summary>

Check both mathematical channel properties and the stated physical approximation regime.

</details>

<details>
<summary>Hint 2</summary>

A normalized positive curve still needs comparison with independent data or the larger declared dynamics.

</details>

<details>
<summary>Full solution</summary>

Positivity/trace checks and comparison against data or a larger unitary model under parameter and time-window variation.

</details>

## Project: decay-model discrimination

Generate or accept tabulated qubit population and coherence data. Fit exponential relaxation, pure dephasing, and one nonexponential alternative without external libraries. Report residuals, held-out prediction, parameter uncertainty by resampling, positivity, and the tested time window. Do not infer a unique microscopic environment from the winning effective fit.

## Chapter summary

Reduced dynamics arises from joint unitary motion plus discarded degrees of freedom. Decoherence suppresses selected coherences, GKSL generators define Markovian semigroups, and $T_1,T_2$ summarize particular decay models. Initial correlations, memory, strong coupling, and interpretation remain explicit boundaries.

[Previous chapter](#/item/book-two-state-quantum-mechanics?chapter=generalized-measurements-channels) · [Next chapter](#/item/book-two-state-quantum-mechanics?chapter=quantum-information-bell) · [Book overview](#/item/book-two-state-quantum-mechanics)
`;export{e as default};