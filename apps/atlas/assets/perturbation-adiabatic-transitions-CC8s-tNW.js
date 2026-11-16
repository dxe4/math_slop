var e=`---
parent_id: book-two-state-quantum-mechanics
chapter_id: perturbation-adiabatic-transitions
title: "Perturbation Theory, Adiabatic Motion, and Transitions"
level: advanced-undergraduate
estimated_minutes: 230
license: CC BY-SA 4.0
status: draft
---

# Perturbation Theory, Adiabatic Motion, and Transitions

Approximation theory is controlled only when its small parameter, spectral gaps, time scale, and error criterion are visible. Perturbation series can be asymptotic rather than convergent; adiabatic motion can fail near closing gaps; transition rates require a continuum and a regime.

## 1. Nondegenerate stationary perturbation

For $H(\\lambda)=H_0+\\lambda V$ and isolated nondegenerate eigenpair $E_n^{(0)},|n\\rangle$, first-order energy shift is

$E_n^{(1)}=\\langle n|V|n\\rangle$.

With phase convention $\\langle n|n^{(1)}\\rangle=0$, in finite dimensions or for a complete discrete eigenbasis,

$|n^{(1)}\\rangle=\\sum_{m\\neq n}\\frac{|m\\rangle\\langle m|V|n\\rangle}{E_n^{(0)}-E_m^{(0)}}$.

Small denominators diagnose danger. For a continuum or a general unbounded operator, the sum is replaced by a reduced-resolvent statement with domain hypotheses. The approximation concerns an eigenpair branch, not every state.

## 2. Degenerate perturbation

### Proof of the first stationary corrections

Take finite Hermitian matrices $H_0,V$ and a simple eigenvalue $E_0$ with unit eigenvector $n$ and gap $g>0$ from the other eigenvalues. A differentiable eigenbranch exists locally: in intermediate normalization write $\\psi=n+w$, $w\\perp n$, and project the eigenvalue equation onto the ray and its complement. The derivative in $w$ of the complement equation at zero is the invertible restriction of $H_0-E_0$, while the ray equation determines the energy derivative. The finite implicit function theorem therefore gives a locally analytic branch for this analytic matrix family. Unit normalization can be restored afterward.

Differentiate $H(\\lambda)\\psi(\\lambda)=E(\\lambda)\\psi(\\lambda)$ at zero. Taking its inner product with $n$ cancels the two $H_0-E_0$ terms and gives $E'(0)=\\langle n|V|n\\rangle$. Taking it with another eigenvector $m$ gives $(E_m-E_0)\\langle m|\\psi'(0)\\rangle=-\\langle m|V|n\\rangle$, proving the stated vector correction. Unit normalization fixes the real part of $\\langle n|\\psi'(0)\\rangle$ to zero, and phase choice removes the remaining imaginary part. Projecting the equation onto $n$ one order further yields

$$E(\\lambda)=E_0+\\lambda V_{nn}+\\lambda^2\\sum_{m\\ne n}\\frac{|V_{mn}|^2}{E_0-E_m}+O(\\lambda^3).$$

For the ground level every denominator is negative, so the second coefficient is nonpositive. This sign is not a general bound for arbitrary truncation at finite parameter. More generally the same differentiated normalized eigenvalue equation proves Hellmann–Feynman: $E'(\\lambda)=\\langle\\psi(\\lambda)|H'(\\lambda)|\\psi(\\lambda)\\rangle$ for a differentiable simple branch. Terms involving $\\psi'$ cancel by normalization.

### Worked example: the avoided-crossing scale

Let $H_0=-\\Delta Z/2$, $\\Delta>0$, and $V=vX$ with real energy $v$. The exact eigenvalues are $\\pm\\sqrt{\\Delta^2/4+\\lambda^2v^2}$. For the lower level,

$$E_-=-\\frac\\Delta2-\\frac{\\lambda^2v^2}{\\Delta}+O(\\lambda^4),\\qquad
\\psi_-=|0\\rangle-\\frac{\\lambda v}{\\Delta}|1\\rangle+O(\\lambda^2)$$

with a suitable normalized phase convention. The first energy shift vanishes while the state changes at first order, exactly as the matrix-element formulas predict. The mixing parameter is $|\\lambda v|/\\Delta$, not $|\\lambda|$ alone. At $\\Delta=0$, the eigenvectors are $X$ eigenstates and the nondegenerate formulas divide by zero; making a dimensionless parameter numerically small does not repair a missing gap.

Within a degenerate eigenspace, diagonalize the restricted matrix $PVP$ first. Its eigenvectors give the correct zeroth-order combinations and first-order splittings. Applying the nondegenerate denominator formula inside the degenerate block divides by zero and is invalid.

## 3. Variational and error status

The degenerate rule follows by projecting the first differentiated equation with $P$ onto its eigenspace: $PVP\\psi_0=E_1\\psi_0$. If $H_0=\\operatorname{diag}(E,E,E+\\Delta)$ and the perturbation's first block is $\\begin{pmatrix}0&v\\\\v&0\\end{pmatrix}$ with no coupling to the third coordinate, its correct combinations are $(e_1\\pm e_2)/\\sqrt2$ and exact block energies $E\\pm\\lambda v$. Looking only at the zero diagonal entries in the original degenerate basis would miss the splitting entirely. With external couplings, the same block eigenproblem still determines first order, while higher orders require the complementary resolvent. Degeneracies left unsplit may need another effective block problem at the next order.

An exact angle estimate also gives a useful regime check. For a normalized perturbed eigenvector write $\\psi=an+w$, $w\\perp n$, and suppose its eigenvalue satisfies $|E-E_0|\\le g/2$. Projecting the exact equation gives $(H_0-E_0)w=(E-E_0)w-\\lambda QV\\psi$. Since the restricted operator has norm lower bound $g$, $\\|w\\|\\le2|\\lambda|\\|V\\|/g$. This bounds the sine of its angle from the original ray. It is conditional on the same eigenbranch staying in the declared gap neighborhood, not a justification for tracking unrelated sorted eigenvalues through a crossing. Numerical residual and gap estimates belong to the linked matrix/numerical-analysis route.

Truncated perturbation series need not bound the exact answer. Remainders require analyticity or operator estimates. Agreement of successive orders is useful evidence but not a theorem of accuracy. Level crossings and branch labels must be tracked by symmetry or overlap, not just sorted eigenvalue position.

## 4. Time-dependent transitions

In the interaction picture, first-order amplitude from $i$ to $f$ is

$c_f^{(1)}(t)=-\\frac{i}{\\hbar}\\int_0^t e^{i\\omega_{fi}s}\\langle f|V(s)|i\\rangle\\,ds$.

Resonant Fourier content accumulates. Fermi's golden rule $\\Gamma=(2\\pi/\\hbar)|V_{fi}|^2\\rho(E_f)$ is a long-time weak-coupling continuum approximation, not an exact finite-level transition probability.

## 5. Adiabatic theorem

### Worked example: a resonant Fourier component

Take $H_0=\\hbar\\omega_0|1\\rangle\\langle1|$ and $V(t)=\\lambda v\\cos(\\Omega t)X$. Starting from $|0\\rangle$, define $F_t(\\delta)=\\int_0^t e^{i\\delta s}ds=e^{i\\delta t/2}2\\sin(\\delta t/2)/\\delta$, with $F_t(0)=t$. The first-order amplitude is

$$c_1^{(1)}=-\\frac{i\\lambda v}{2\\hbar}[F_t(\\omega_0+\\Omega)+F_t(\\omega_0-\\Omega)].$$

At resonance one term grows linearly while the counterrotating term remains bounded for nonzero $\\omega_0$. The leading probability grows quadratically at short times, rather than obeying an exact constant transition rate. Chapter 5's Dyson bound applies with $\\Lambda=\\hbar^{-1}\\int_0^t\\|V(s)\\|ds\\le|\\lambda v|t/\\hbar$, giving a first-order amplitude remainder at most $e^\\Lambda\\Lambda^2/2$. The bound displays the observation-time restriction explicitly; extending to long resonant times needs a resummed effective Hamiltonian, not a probability eventually exceeding one.

The golden-rule coefficient comes from an additional continuum approximation. Summing first-order probabilities over nearly resonant final states gives an integral of $4\\sin^2[(E-E_i)t/(2\\hbar)]/(E-E_i)^2$ times the squared matrix element and state density. If that product is effectively constant across the energy window $\\hbar/t$, substituting $x=(E-E_i)t/(2\\hbar)$ and using $\\int_{\\mathbb R}\\sin^2x/x^2\\,dx=\\pi$ gives growth $(2\\pi t/\\hbar)|V_{fi}|^2\\rho(E_i)$. This explains the stated rate. One needs time long enough to resolve the local continuum but weak coupling and small depletion for first-order probabilities. Taking infinite time at fixed coupling would violate those assumptions; a finite two-state model supplies oscillations instead.

Under smooth slow change with an isolated gapped eigenvalue, a state initially in that eigenspace remains close to the evolving eigenspace, acquiring dynamical and geometric phases. “Slow” depends on derivatives of $H$, inverse powers of spectral gaps, and total protocol. For unbounded Hamiltonians, common-domain or suitable resolvent-regularity assumptions are additionally required. Degeneracy needs a subspace-valued version.

## 6. Landau–Zener model

A precise finite-dimensional adiabatic input is as follows: let $H(s)$ be a twice continuously differentiable Hermitian matrix on $s\\in[0,1]$, with a simple spectral branch separated by a uniform positive gap. For evolution $i\\hbar\\partial_s\\psi_T=T H(s)\\psi_T$ starting in its eigenspace, the component outside its evolving projector is uniformly $O(1/T)$, with constants depending on derivative bounds and inverse gap scales. This standard gapped adiabatic theorem is cited; differentiating instantaneous eigenvectors alone does not prove its global error bound.

What differentiation does prove is $\\langle m|n'\\rangle=\\langle m|H'|n\\rangle/(E_n-E_m)$ for $m\\ne n$. Expanding in instantaneous states with dynamical phases gives coupling terms proportional to these matrix elements times oscillatory gap phases. Their integration explains why derivative size and gap both matter. The diagonal term gives geometric phase $\\gamma=i\\int\\langle n|n'\\rangle ds$, real by normalization, alongside the dynamical phase $-T\\int E_n ds/\\hbar$. Under $n\\mapsto e^{i\\chi(s)}n$, $\\gamma$ changes by $-\\chi(1)+\\chi(0)$; endpoint vectors change consistently, leaving the physical state unchanged.

### Worked example: a gapped spin loop

Use $H(s)=\\hbar\\omega\\mathbf n(s)\\cdot\\boldsymbol\\sigma/2$, $\\omega>0$, with fixed polar angle $\\theta$ and azimuth $\\phi=2\\pi s$. Its upper eigenvector is $n_+=(\\cos(\\theta/2),e^{i\\phi}\\sin(\\theta/2))^\\mathsf T$, and its gap is $\\hbar\\omega$. Direct differentiation gives $i\\langle n_+|\\partial_\\phi n_+\\rangle=-\\sin^2(\\theta/2)$. The geometric phase for the closed loop is therefore $-\\pi(1-\\cos\\theta)$, minus half its oriented solid angle, modulo $2\\pi$. This computation determines the phase conditional on the adiabatic regime; the stated theorem controls how closely the actual slow state follows the branch. An isolated global phase does not change a single-branch probability, but coherent comparison against another path can turn the phase difference into interference.

For an explicit Landau–Zener convention take $H(t)=vtZ/2+gX$, $v>0$, real $g$, on the ideal interval $t\\in(-\\infty,\\infty)$. The exact asymptotic solution, a cited special-function result, gives probability $P_D=e^{-2\\pi g^2/(\\hbar v)}$ to remain in the same diabatic basis state. If the initial state is the lower adiabatic branch at negative infinity, that event is failure to follow the lower branch at positive infinity; the following probability is $1-P_D$. The minimum gap is $2|g|$. Thus zero coupling gives no diabatic transfer, while a sufficiently slow sweep follows the avoided crossing. Finite endpoints require the finite protocol rather than automatic use of this infinite-time formula. This states the event, basis, Hamiltonian and units missing from an unqualified exponential slogan.

For a linear avoided crossing, the transition probability has an exponential dependence on squared coupling divided by sweep rate under ideal infinite-time conventions. Different texts label diabatic and adiabatic probabilities differently. State the Hamiltonian, initial basis, time interval, and reported event before quoting a formula.

## A spectral gap controls vector stability, not just energy shifts

In a finite-dimensional Hermitian model, perturb H₀ by a Hermitian
matrix E of norm at most δ. Every normalized vector has its
Rayleigh quotient changed by at most δ. Applying the finite
min-max characterization to each ordered eigenvalue therefore
bounds every eigenvalue shift by δ. This conclusion requires
no perturbation series and remains valid at a degeneracy.
The min-max proof and its trial-space interpretation are
developed in the following chapter.

Now suppose one eigenvalue λ₀ of H₀ is simple and separated
from the rest by a gap g>2δ. The ordered shift bound
identifies exactly one perturbed eigenvalue λ in its δ
neighbourhood. For a normalized eigenvector ψ of the perturbed
matrix, the residual relative to H₀ at λ is −Eψ, with norm
at most δ. Expand ψ in an orthonormal H₀ eigenbasis.
Every coefficient outside the λ₀ eigendirection is multiplied
in that residual by an energy difference whose magnitude
is at least g−δ. Summing squared coefficients gives
$$\\|(I-P_0)\\psi\\|\\le\\frac\\delta{g-\\delta}.$$
Thus an isolated eigendirection is stable up to its arbitrary
phase, with an explicit gap dependence. A small matrix
perturbation relative to the energy scale can still rotate
nearly degenerate eigenvectors substantially if it is not
small relative to their gap.

This explains why degenerate perturbation theory first resolves
the perturbation inside the degenerate subspace. The subspace
can remain well separated from other energies while its
individual basis vectors have no preferred unperturbed identity.
An eigenvector overlap against one arbitrarily chosen basis
vector is then a poor invariant diagnostic. Compare the
subspace projectors or explicitly diagonalize the restricted
perturbation before discussing labeled state stability.

Energy accuracy also has a time scale. Two otherwise identical
stationary phase factors with energies differing by at most
δ can accumulate a phase difference of order δt/ℏ. A
uniformly small energy error therefore does not give a
uniformly small state-vector error for all times. For finite
Hamiltonians, the Duhamel propagator identity bounds the
operator difference by t‖E‖/ℏ, giving the same scale without
tracking each eigenvector. At longer times that bound becomes
unhelpful rather than certifying persistent agreement.

These bounds complement the series formulas. Perturbation
coefficients describe local derivatives of a regular branch;
norm and gap inequalities provide finite allowances and
identify the regime where branch labels are stable. A
calculation should name which kind of statement supports
its conclusion instead of treating a small first-order term
as a complete remainder estimate.

## Eigenvector derivatives require a phase convention

A normalized simple eigenvector branch can be
multiplied by a parameter-dependent phase without
changing its ray. Differentiating that phase
adds a purely imaginary multiple of the
unperturbed eigenvector to its first derivative.
The common perturbation formula chooses a
local phase with positive real overlap
against the initial vector, setting that
parallel derivative component to zero.

The derivative of the rank-one spectral
projector is independent of this choice.
It is the sum of the outer product
of the vector derivative with the vector
and its adjoint; the two added imaginary
phase contributions cancel. Expectation derivatives
and the energy correction therefore do
not depend on an arbitrary parallel phase
term. When comparing numerical eigenvectors
at nearby parameters, align phases or
compare projectors before calling a large
raw vector difference a physical sensitivity.
Near degeneracy, compare the isolated subspace
instead, because a phase convention alone
cannot resolve rotations within that subspace.

## Exercises with complete solutions

<a id="perturbation-adiabatic-transitions-ex-1"></a>

### 1. First energy shift
What matrix element determines it?

<details>
<summary>Hint 1</summary>

Differentiate the eigenvalue equation on a simple normalized branch.

</details>

<details>
<summary>Hint 2</summary>

Project onto its unperturbed eigenvector so the state-derivative terms cancel.

</details>

<details>
<summary>Full solution</summary>

The diagonal expectation $\\langle n|V|n\\rangle$.

</details>

<a id="perturbation-adiabatic-transitions-ex-2"></a>

### 2. Constant perturbation
If $V=cI$, what shifts occur?

<details>
<summary>Hint 1</summary>

The identity commutes with the unperturbed Hamiltonian.

</details>

<details>
<summary>Hint 2</summary>

Its only effect is a common scalar addition to every spectral value.

</details>

<details>
<summary>Full solution</summary>

Every energy shifts by $\\lambda c$; eigenvectors do not change.

</details>

<a id="perturbation-adiabatic-transitions-ex-3"></a>

### 3. Vanishing diagonal
Can the first energy correction vanish while the state changes?

<details>
<summary>Hint 1</summary>

Energy first order uses a diagonal matrix element, while state first order uses off-diagonal ones.

</details>

<details>
<summary>Hint 2</summary>

The worked avoided crossing has precisely that distinction.

</details>

<details>
<summary>Full solution</summary>

Yes. Off-diagonal matrix elements can produce a nonzero first state correction.

</details>

<a id="perturbation-adiabatic-transitions-ex-4"></a>

### 4. Denominator warning
What signals near-degenerate failure?

<details>
<summary>Hint 1</summary>

Inspect the complementary resolvent denominators.

</details>

<details>
<summary>Hint 2</summary>

The relevant scale compares perturbation matrix size with the spectral gap.

</details>

<details>
<summary>Full solution</summary>

A small energy difference makes mixing coefficients large.

</details>

<a id="perturbation-adiabatic-transitions-ex-5"></a>

### 5. Phase convention
Why impose $\\langle n|n^{(1)}\\rangle=0$?

<details>
<summary>Hint 1</summary>

Differentiate normalization to constrain the parallel component.

</details>

<details>
<summary>Hint 2</summary>

A phase choice removes the remaining imaginary parallel freedom.

</details>

<details>
<summary>Full solution</summary>

Normalization and phase leave a component along $|n\\rangle$ arbitrary; the convention fixes it.

</details>

<a id="perturbation-adiabatic-transitions-ex-6"></a>

### 6. Degenerate block
What is diagonalized first?

<details>
<summary>Hint 1</summary>

Project the first differentiated eigenvalue equation into the degenerate subspace.

</details>

<details>
<summary>Hint 2</summary>

The result is a finite eigenproblem for the compressed perturbation.

</details>

<details>
<summary>Full solution</summary>

$PVP$ within the degenerate eigenspace.

</details>

<a id="perturbation-adiabatic-transitions-ex-7"></a>

### 7. Twofold split
If the restricted perturbation is $\\operatorname{diag}(v,-v)$, what are first shifts?

<details>
<summary>Hint 1</summary>

The compressed matrix is already diagonal.

</details>

<details>
<summary>Hint 2</summary>

Its eigenvalues are the coefficients of the first-order energy shifts.

</details>

<details>
<summary>Full solution</summary>

$\\pm v$ times $\\lambda$.

</details>

<a id="perturbation-adiabatic-transitions-ex-8"></a>

### 8. Symmetry protection
Why may a matrix element vanish?

<details>
<summary>Hint 1</summary>

Apply the symmetry operation to both states and the perturbation.

</details>

<details>
<summary>Hint 2</summary>

An odd integrand or incompatible representation label can force zero coupling.

</details>

<details>
<summary>Full solution</summary>

Parity or another symmetry can make the integrand odd or connect inequivalent sectors.

</details>

<a id="perturbation-adiabatic-transitions-ex-9"></a>

### 9. Series status
Does a smaller second correction prove convergence?

<details>
<summary>Hint 1</summary>

A finite number of coefficients does not determine the tail.

</details>

<details>
<summary>Hint 2</summary>

Analyticity and remainder bounds are additional hypotheses.

</details>

<details>
<summary>Full solution</summary>

No. It is evidence only; later terms may grow and the series may be asymptotic.

</details>

<a id="perturbation-adiabatic-transitions-ex-10"></a>

### 10. First transition amplitude
What frequency enters its phase?

<details>
<summary>Hint 1</summary>

The interaction picture removes the two background energy phases.

</details>

<details>
<summary>Hint 2</summary>

Their difference divided by hbar is the angular frequency.

</details>

<details>
<summary>Full solution</summary>

$\\omega_{fi}=(E_f-E_i)/\\hbar$.

</details>

<a id="perturbation-adiabatic-transitions-ex-11"></a>

### 11. Constant off-resonant drive
Why can its amplitude remain bounded?

<details>
<summary>Hint 1</summary>

Integrate the nonzero-frequency exponential exactly.

</details>

<details>
<summary>Hint 2</summary>

Its numerator stays bounded even while the interval grows.

</details>

<details>
<summary>Full solution</summary>

The oscillatory integral cancels over time when the phase frequency is nonzero.

</details>

<a id="perturbation-adiabatic-transitions-ex-12"></a>

### 12. Resonance
What drive feature enhances transition?

<details>
<summary>Hint 1</summary>

Look for a nearly stationary phase in the interaction-picture integral.

</details>

<details>
<summary>Hint 2</summary>

The difference between drive and gap angular frequency controls accumulation.

</details>

<details>
<summary>Full solution</summary>

Fourier content near the energy-gap angular frequency.

</details>

<a id="perturbation-adiabatic-transitions-ex-13"></a>

### 13. Golden-rule density
What is $\\rho(E)$?

<details>
<summary>Hint 1</summary>

A continuum sum is replaced by an energy integral.

</details>

<details>
<summary>Hint 2</summary>

Its density has units number of accessible states per energy.

</details>

<details>
<summary>Full solution</summary>

Density of accessible final states per energy under the chosen normalization.

</details>

<a id="perturbation-adiabatic-transitions-ex-14"></a>

### 14. Finite spectrum
Is the golden rule exact for two levels at all times?

<details>
<summary>Hint 1</summary>

The exact finite resonant model has a bounded sinusoidal population.

</details>

<details>
<summary>Hint 2</summary>

The golden-rule derivation adds continuum and weak-depletion assumptions.

</details>

<details>
<summary>Full solution</summary>

No. Coherent finite-level dynamics typically oscillates rather than decays at a constant rate.

</details>

<a id="perturbation-adiabatic-transitions-ex-15"></a>

### 15. Adiabatic phase
Name its two components.

<details>
<summary>Hint 1</summary>

One phase integrates the instantaneous energy over time.

</details>

<details>
<summary>Hint 2</summary>

The other integrates the change of the instantaneous eigenvector.

</details>

<details>
<summary>Full solution</summary>

Dynamical and geometric phases.

</details>

<a id="perturbation-adiabatic-transitions-ex-16"></a>

### 16. Gap closure
Why is it dangerous?

<details>
<summary>Hint 1</summary>

Differentiate the eigenvector equation and examine its gap denominator.

</details>

<details>
<summary>Hint 2</summary>

Uniform adiabatic bounds additionally involve inverse gap scales.

</details>

<details>
<summary>Full solution</summary>

Standard error bounds contain inverse gap factors and can diverge.

</details>

<a id="perturbation-adiabatic-transitions-ex-17"></a>

### 17. Slow units
Is “one second is slow” meaningful alone?

<details>
<summary>Hint 1</summary>

A protocol duration has to be compared with the Hamiltonian and its variation.

</details>

<details>
<summary>Hint 2</summary>

The gap and change-rate units determine a dimensionless slowness parameter.

</details>

<details>
<summary>Full solution</summary>

No. It must be compared with gaps and Hamiltonian-change scales.

</details>

<a id="perturbation-adiabatic-transitions-ex-18"></a>

### 18. Basis labels
Why specify diabatic versus adiabatic?

<details>
<summary>Hint 1</summary>

Trace which asymptotic basis vector represents the reported event.

</details>

<details>
<summary>Hint 2</summary>

For the chosen infinite sweep, staying diabatic is complementary to following the lower branch.

</details>

<details>
<summary>Full solution</summary>

The same Landau–Zener evolution yields complementary event probabilities in those bases.

</details>

<a id="perturbation-adiabatic-transitions-ex-19"></a>

### 19. Numerical validation
Name one perturbative check.

<details>
<summary>Hint 1</summary>

Use an independent spectral calculation over a decreasing perturbation range.

</details>

<details>
<summary>Hint 2</summary>

Compare both a branch identity and the claimed order of its remainder, without inferring all omitted physics.

</details>

<details>
<summary>Full solution</summary>

Compare against direct diagonalization across decreasing $\\lambda$ and verify the predicted error scaling.

</details>

<a id="perturbation-adiabatic-transitions-ex-20"></a>

### 20. Claim boundary
Does first-order agreement identify the omitted physics?

<details>
<summary>Hint 1</summary>

Several corrections can share the same leading behavior.

</details>

<details>
<summary>Hint 2</summary>

A local approximation agreement is weaker than identifying a unique mechanism.

</details>

<details>
<summary>Full solution</summary>

No. It validates an approximation locally but does not uniquely identify higher-order mechanisms.

</details>

## Project: avoided-crossing audit

Study $H(s)=sZ+gX$ under static diagonalization and a finite-time sweep. Compare exact eigenvalues with nondegenerate expansions away from the crossing, track eigenvectors by overlap, integrate dynamics at several sweep rates, and report norm and step convergence. Label adiabatic and diabatic probabilities explicitly; do not use an infinite-time Landau–Zener formula without testing its endpoint regime.

## Chapter summary

Stationary perturbation theory follows isolated eigenbranches, degenerate theory begins inside the degenerate block, and time-dependent theory accumulates resonant Fourier components. Adiabatic claims depend on smoothness, gap, and duration. Every truncated result needs a stated regime and validation route.

[Previous chapter](#/item/book-two-state-quantum-mechanics?chapter=quantum-information-bell) · [Next chapter](#/item/book-two-state-quantum-mechanics?chapter=variational-semiclassical-methods) · [Book overview](#/item/book-two-state-quantum-mechanics)
`;export{e as default};