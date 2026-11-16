
# Variational and Semiclassical Methods

Variational methods produce rigorous upper bounds when their hypotheses hold. Semiclassical methods approximate phase and quantization when action scales exceed $\hbar$. They answer different questions and carry different error structures.

## 1. Rayleigh quotient

For self-adjoint $H$ bounded below, let $E_0=\inf\sigma(H)$ and let $q_H$ be its closed quadratic form. For a normalized trial $\psi$ in the form domain $Q(H)$,

$R[\psi]=q_H[\psi]\geq E_0$.

If the trial also lies in $D(H)$, then $q_H[\psi]=\langle\psi|H\psi\rangle$. The spectral theorem proves the bound, whether or not $E_0$ is an eigenvalue. When a complete discrete eigenbasis exists, it reduces to the familiar weighted-energy expansion. Minimizing over a trial family gives the best upper bound within that family, not necessarily the exact spectral infimum.

## 2. Linear trial spaces

For the form-domain proof, shift $H$ by a constant so $H-E_0I$ is nonnegative. Its spectral measure gives $q_H[\psi]-E_0\|\psi\|^2=\int(\lambda-E_0)d\mu_\psi\ge0$. Equality requires all the probability measure at $E_0$, hence a ground eigenvector. If the spectral infimum is not an eigenvalue it can be approached without being attained. For instance a free particle on the line has $E_0=0$, but no normalized constant eigenfunction. Normalized Gaussians with width $\sigma$ have energy $\hbar^2/(8m\sigma^2)\to0$ as they spread. A minimizing sequence need not converge to a normalized ground state.

### Worked example: optimize a harmonic Gaussian

Take $m,\omega,\hbar>0$ and $\psi_\alpha=(\alpha/\pi)^{1/4}e^{-\alpha x^2/2}$, $\alpha>0$. Its moments are $\langle Q^2\rangle=1/(2\alpha)$ and $\langle P^2\rangle=\hbar^2\alpha/2$. Thus

$$R(\alpha)=\frac{\hbar^2\alpha}{4m}+\frac{m\omega^2}{4\alpha}.$$

Differentiation gives the unique minimum at $\alpha=m\omega/\hbar$ and value $\hbar\omega/2$. More explicitly $R-\hbar\omega/2=\hbar^2(\alpha-m\omega/\hbar)^2/(4m\alpha)\ge0$. This trial family happens to contain the exact ground state, so the bound is attained. Optimizing a scalar family does not generally prove such membership; the exact comparison and equality condition are what do so in this example.

For basis functions $\phi_j$, coefficients solve the generalized eigenproblem

$Hc=E Sc$,

where $H_{ij}=\langle \phi_i|H|\phi_j\rangle$ and $S_{ij}=\langle \phi_i|\phi_j\rangle$. The overlap matrix must be positive definite after removing linear dependencies. Enlarging nested trial spaces cannot raise the lowest Ritz value in exact arithmetic.

## 3. Excited states

If the trial vectors lie only in the form domain, use the polarized form $q_H(\phi_i,\phi_j)$ for the entries called $H_{ij}$; the literal operator formula requires $\phi_j\in D(H)$. For linearly independent vectors $c^\dagger Sc=\|\sum_jc_j\phi_j\|^2>0$, so $S$ is positive definite. Stationarity of $c^\dagger Hc$ under $c^\dagger Sc=1$, differentiating in the conjugate coefficients, gives $Hc=ESc$. Setting $y=S^{1/2}c$ reduces the quotient to that of the Hermitian matrix $S^{-1/2}HS^{-1/2}$. This proves real Ritz values and explains why a nearly dependent trial basis is a conditioning issue rather than evidence of a new energy level.

For a complete discrete spectrum $E_0\le E_1\le\cdots$ with finite multiplicities and eigenbasis, the min-max formula follows directly. Every $(k+1)$-dimensional trial subspace contains a nonzero vector orthogonal to the first $k$ eigenvectors, whose spectral expansion has quotient at least $E_k$. The span of the first $k+1$ eigenvectors has maximum quotient $E_k$. Taking the minimum over all such subspaces proves the formula. Restricting that minimization to a finite trial space gives its $k$th Ritz value at least $E_k$, and enlarging nested spaces can only decrease it. General min-max statements below essential spectrum need their own spectral hypotheses; this discrete proof suffices for the well and oscillator examples.

An upper bound to an excited level requires orthogonality to lower exact eigenspaces or a min-max construction. Merely finding another stationary point of a nonlinear trial energy does not certify the first excited energy.

## 4. WKB form

A two-dimensional example shows why the overlap cannot be omitted. Let the exact matrix be $\operatorname{diag}(0,\Delta)$, $\Delta>0$, with orthonormal vectors $e_0,e_1$. Choose the independent but nonorthonormal trials $\phi_1=e_0$, $\phi_2=e_0+2e_1$. Their matrices are

$$S=\begin{pmatrix}1&1\\1&5\end{pmatrix},\qquad H_V=\begin{pmatrix}0&0\\0&4\Delta\end{pmatrix}.$$

The generalized characteristic determinant is $\det(H_V-ES)=4E(E-\Delta)$, recovering the correct values zero and $\Delta$ because this trial space is the full space. Treating $H_V$ as an ordinary coordinate Hamiltonian would instead report $4\Delta$ for its excited value. The error comes entirely from using coefficient Euclidean length instead of the physical Gram norm, despite exact arithmetic and a seemingly harmless basis. Basis normalization alone would still not remove a nonzero overlap; one must orthogonalize consistently or solve the generalized problem. This is an algebraic example of how a wrong representation can defeat a variational claim without any discretization error at all.

A gap can turn accurate energy into an overlap estimate. For a nondegenerate ground state and gap $g=E_1-E_0>0$, expansion in the eigenbasis gives $R[\psi]-E_0\ge g(1-|\langle0|\psi\rangle|^2)$. This bounds the weight outside the ground ray when an actual energy error is known. An upper trial value alone does not provide that error unless a lower bound on $E_0$ is also available. For $\psi\in D(H)$, finite variance $v=\|(H-R)\psi\|^2$ and $R<E_1$ give the useful lower bound $E_0\ge R-v/(E_1-R)$. Indeed the spectral values satisfy $(E-E_0)(E-E_1)\ge0$, so its expectation gives $v\ge(R-E_0)(E_1-R)$. The gap estimate and finite second moment are essential to this two-sided conclusion.

### Worked example: a quartic trial upper bound

For $H=P^2/(2m)+gQ^4$, $g>0$, the same Gaussian has $\langle Q^4\rangle=3/(4\alpha^2)$, giving $R=\hbar^2\alpha/(4m)+3g/(4\alpha^2)$. Its optimum satisfies $\alpha^3=6mg/\hbar^2$, and the minimized value is $3\hbar^2\alpha/(8m)$. This is a rigorous ground-energy upper bound. It has the scale $(\hbar^4g/m^2)^{1/3}$ expected from balancing kinetic localization with quartic potential cost. It is not exact: applying this Hamiltonian to a Gaussian leaves a nonconstant fourth-degree contribution, so the trial is not an eigenfunction. An impressive-looking minimum is not an error bar until accompanied by independent lower or residual-gap information.

For one-dimensional momentum $p(x)=\sqrt{2m(E-V(x))}$, away from turning points a leading allowed-region approximation is

$\psi(x) \approx \dfrac{C}{\sqrt{p(x)}}\exp\!\left(\pm\dfrac{i}{\hbar}\int p\,dx\right)$.

In forbidden regions the phase becomes exponential. WKB fails near ordinary turning points where $p=0$; Airy matching supplies connection formulas.

## 5. Quantization

The WKB expression follows by substituting $\psi=Ae^{iS/\hbar}$ into the stationary equation. Its real leading order gives $(S')^2=2m(E-V)=p^2$. The next transport equation is $2A'p+Ap'=0$, so $A=Cp^{-1/2}$. The remaining residual is $-\hbar^2A''e^{iS/\hbar}/(2m)$. In particular

$$\frac{A''}{A}=\frac34\left(\frac{p'}p\right)^2-\frac12\frac{p''}p.$$

A small local residual relative to the kinetic scale requires $\hbar^2|A''/A|\ll p^2$, with sufficient derivative control. The common condition $\hbar|p'|/p^2\ll1$ describes one scale but does not erase the second-derivative or boundary requirements. A residual estimate away from endpoints is not by itself a global eigenvalue error bound. In forbidden regions use real decay/growth factors $\exp[\pm\int|p|dx/\hbar]$ and the corresponding amplitude. A boundary condition selects their combination; neither branch can be discarded universally before that condition is specified.

For two smooth turning points, leading WKB quantization is

$\displaystyle\int_{x_1}^{x_2}p(x)\,dx \approx \pi\hbar\left(n+\tfrac12\right)$.

The half correction depends on turning-point structure and boundary conditions. Hard walls, singular endpoints, separatrices, and multidimensional caustics need modifications.

## 6. Path-integral boundary

At a simple turning point $V(x_0)=E$, $V'(x_0)=F\ne0$, replace $V-E$ locally by $F(x-x_0)$. The scaled coordinate $z=\operatorname{sign}(F)(2m|F|/\hbar^2)^{1/3}(x-x_0)$ makes the leading local equation $\psi_{zz}-z\psi=0$. The standard Airy asymptotics, cited here, connect its decaying solution to an allowed-region sine with phase shift $\pi/4$. Matching two simple turning points produces the half-integer phase in the stated quantization rule. This invokes a named local asymptotic theorem, not continuation of the divergent leading WKB amplitude through zero momentum.

### Worked example: oscillator action and a hard-wall contrast

For the harmonic oscillator the turning points are $\pm A$, $A=\sqrt{2E/(m\omega^2)}$, and $p=m\omega\sqrt{A^2-x^2}$. Its allowed action is the area of a semicircle times $m\omega$:

$$\int_{-A}^A p\,dx=\frac{\pi m\omega A^2}{2}=\frac{\pi E}{\omega}.$$

The smooth-turning-point rule gives $E_n=\hbar\omega(n+1/2)$, coinciding with the exact spectrum. This energy agreement does not make the leading WKB wave function uniformly accurate at its turning points, and it is not a theorem of exactness for all smooth potentials. In an infinite square well the momentum is constant up to hard Dirichlet walls. Direct sine matching instead gives $pL=n\pi\hbar$, $n\ge1$, with no copied smooth-turning half correction. The boundary type determines the phase information; “large action” does not permit replacing its condition by a different one.

For numerical continuations use [initial-value methods](../numerical-mathematics-error-algorithms/initial-value-methods.md), [stiff methods](../numerical-mathematics-error-algorithms/multistep-stiff-dae-methods.md), and [geometric integration](../numerical-mathematics-error-algorithms/geometric-numerical-integration.md) according to the actual formulation. The quantum variational bound concerns a trial space in the correct continuous domain; numerical quadrature, algebraic residual and propagation error are distinct claims treated in the next chapter.

Stationary phase motivates classical paths in semiclassical propagators, with fluctuation determinants and phases. A formal path integral is not automatically a countably additive measure in real time. Rigorous or numerical meanings require discretization, analytic continuation, or another construction.

## Approximate orthogonality can reverse an excited-state bound

The ground-state variational principle gives an upper bound
from every admissible normalized trial state. An excited-state
bound needs more structure. Let ψ₀ and ψ₁ be orthonormal
eigenvectors with $E_0<E_1$. A normalized trial vector
cos θ times ψ₁ plus sin θ times ψ₀ has energy
E₁−sin²θ(E₁−E₀). For any nonzero mixing angle small
enough to retain a ψ₁ component, its quotient lies below
E₁. It therefore fails as an upper bound for the first
excited energy, even though the unwanted ground-state overlap
can be very small.

Orthogonality to an approximate ground vector does not
guarantee orthogonality to the true ground state. A small
error in that vector can leave precisely the lower-energy
contamination in the example. The residual may reveal the
mixture, but a small residual alone also cannot identify
which eigenvalue is being approximated: every exact excited
eigenvector has residual zero too. A gap and a target-energy
interval supply the missing identification.

The Ritz min-max construction avoids demanding exact
orthogonality to a separately supplied ground state. Take
any two-dimensional trial space inside the form domain and
compute both Ritz eigenvalues there. That space contains
a nonzero vector orthogonal to the true ground eigenvector,
because one linear orthogonality condition cannot eliminate
all two dimensions. The Rayleigh quotient of that vector
is at least E₁ under the discrete spectral hypotheses.
The largest quotient in the trial space is therefore at
least E₁. It is the second Ritz value, so it provides
the desired upper bound. The same dimension argument
extends to higher ordered eigenvalues as in the min-max
proof above.

If nested trial spaces are enlarged, these ordered Ritz
upper bounds cannot increase: the minimization over trial
subspaces has more choices. This monotonicity is exact
for the same operator and admissible form domain. A
numerical quadrature, an inconsistent boundary condition or
a changed potential can destroy the comparison by changing
the represented quadratic form. Apparent downward convergence
of numbers then needs a separate discretization argument.

For a nonorthogonal basis, the overlap matrix must be
positive definite on its actual independent span. A
nearly dependent basis can make the generalized eigenproblem
poorly conditioned, while an exactly dependent one requires
removing redundant directions before treating its ordered
Ritz values as those of the claimed-dimensional space.
The variational theorem counts mathematical dimensions,
not the number of stored basis columns.

In the explicit two-level contamination example, the amount by which
the quotient falls below the target is exactly the ground-state
probability times the spectral gap. A small amplitude error therefore
enters quadratically in that energy bias, while an observable coupling
the two levels can have a linear error through its cross term.
Good energy accuracy alone need not mean equally accurate transition
amplitudes. Report which observable is being bounded and whether the
available spectral or overlap information controls its linear as well
as quadratic contributions.

## A basis change does not change the trial space's Ritz values

Replace a linearly independent trial basis
by an invertible linear combination with
coefficient matrix T. Its Hamiltonian and
overlap matrices transform by the same
congruence, to T†HT and T†ST. Changing
coefficient coordinates by T inverse maps
the generalized eigenvalue equation back
to its original form. The exact ordered
Ritz values are therefore unchanged.

Rescaling basis functions can nevertheless
change the numerical conditioning of the
stored matrices. A better conditioned
representation is useful without being a
larger or more accurate trial space.
Conversely adding a nearly dependent
function changes the formal column count
without necessarily providing a useful new
direction. Distinguish coordinate conditioning,
actual span dimension and variational
enrichment when interpreting improved
eigenvalue calculations. The theorem's
monotonicity concerns nested mathematical
spaces for the same quadratic form,
not arbitrary changes to quadrature,
matrix scaling or boundary conventions.

## Exercises with complete solutions

<a id="variational-semiclassical-methods-ex-1"></a>

### 1. Variational bound
Why is $R\geq E_0$?

<details>
<summary>Hint 1</summary>

Use the normalized spectral measure and its lower spectral support.

</details>

<details>
<summary>Hint 2</summary>

A mean of values all at least E0 cannot fall below E0.

</details>

<details>
<summary>Full solution</summary>

The spectral measure of normalized $\psi$ is a probability measure supported on $\sigma(H)$, so its mean is at least $\inf\sigma(H)=E_0$. In the discrete case this reads $R=\sum_n |c_n|^2E_n\geq E_0\sum_n |c_n|^2=E_0$.

</details>

<a id="variational-semiclassical-methods-ex-2"></a>

### 2. Exact ground trial
When is equality reached?

<details>
<summary>Hint 1</summary>

The nonnegative spectral excess must integrate to zero.

</details>

<details>
<summary>Hint 2</summary>

Its measure must be supported on the ground spectral value, which may or may not be an eigenvalue.

</details>

<details>
<summary>Full solution</summary>

Equality requires the trial's spectral measure to be supported at $E_0$; equivalently, the trial lies in the ground eigenspace. If $E_0$ is not an eigenvalue, no normalized trial attains equality.

</details>

<a id="variational-semiclassical-methods-ex-3"></a>

### 3. Unnormalized trial
What quotient is used?

<details>
<summary>Hint 1</summary>

Divide the quadratic form by the squared norm.

</details>

<details>
<summary>Hint 2</summary>

Only use the literal operator numerator when the trial lies in the operator domain.

</details>

<details>
<summary>Full solution</summary>

$q_H[\psi]/\langle\psi|\psi\rangle$ for nonzero $\psi\in Q(H)$; for $\psi\in D(H)$ the numerator is $\langle\psi|H\psi\rangle$.

</details>

<a id="variational-semiclassical-methods-ex-4"></a>

### 4. Scaling
Does multiplying a trial by a nonzero scalar change the quotient?

<details>
<summary>Hint 1</summary>

A sesquilinear quadratic form scales by the squared modulus.

</details>

<details>
<summary>Hint 2</summary>

The denominator has exactly the same scaling.

</details>

<details>
<summary>Full solution</summary>

No. Numerator and denominator acquire the same squared modulus.

</details>

<a id="variational-semiclassical-methods-ex-5"></a>

### 5. Overlap matrix
What if the basis is orthonormal?

<details>
<summary>Hint 1</summary>

The Gram entries are basis overlaps.

</details>

<details>
<summary>Hint 2</summary>

An orthonormal basis makes them the identity matrix entries.

</details>

<details>
<summary>Full solution</summary>

$S=I$, reducing to an ordinary eigenproblem.

</details>

<a id="variational-semiclassical-methods-ex-6"></a>

### 6. Linear dependence
Why is it dangerous?

<details>
<summary>Hint 1</summary>

The overlap matrix is the squared norm of the synthesized coefficient vector.

</details>

<details>
<summary>Hint 2</summary>

A dependent direction gives a zero Gram norm and a singular generalized problem.

</details>

<details>
<summary>Full solution</summary>

$S$ becomes singular or ill-conditioned, creating unstable coefficients and spurious numerical values.

</details>

<a id="variational-semiclassical-methods-ex-7"></a>

### 7. Nested spaces
Why can the minimum only decrease?

<details>
<summary>Hint 1</summary>

Compare the two minimization candidate sets.

</details>

<details>
<summary>Hint 2</summary>

Every old trial is still admissible in the larger nested space.

</details>

<details>
<summary>Full solution</summary>

The enlarged minimization includes every old trial as a candidate.

</details>

<a id="variational-semiclassical-methods-ex-8"></a>

### 8. Numerical monotonicity
Can roundoff violate it slightly?

<details>
<summary>Hint 1</summary>

The theorem is an exact-arithmetic statement about exact forms.

</details>

<details>
<summary>Hint 2</summary>

Quadrature, basis conditioning and eigensolver errors can perturb the computed value.

</details>

<details>
<summary>Full solution</summary>

Yes. Exact variational monotonicity does not prevent conditioning and solver error.

</details>

<a id="variational-semiclassical-methods-ex-9"></a>

### 9. Excited bound
Why impose orthogonality?

<details>
<summary>Hint 1</summary>

Minimization without a restriction still has access to lower-energy directions.

</details>

<details>
<summary>Hint 2</summary>

Exact orthogonality or a min-max subspace theorem removes them.

</details>

<details>
<summary>Full solution</summary>

Otherwise minimization returns the ground-state component.

</details>

<a id="variational-semiclassical-methods-ex-10"></a>

### 10. WKB dimension
Why is $\int p dx/\hbar$ dimensionless?

<details>
<summary>Hint 1</summary>

Momentum multiplied by length has action dimensions.

</details>

<details>
<summary>Hint 2</summary>

The exponent divides that action by hbar.

</details>

<details>
<summary>Full solution</summary>

Momentum times length is action, the same unit as $\hbar$.

</details>

<a id="variational-semiclassical-methods-ex-11"></a>

### 11. Turning point
What happens to $1/\sqrt{p}$ there?

<details>
<summary>Hint 1</summary>

The leading amplitude includes an inverse square root.

</details>

<details>
<summary>Hint 2</summary>

Zero momentum makes that local expression singular even when the exact solution is regular.

</details>

<details>
<summary>Full solution</summary>

It diverges, signaling failure of the leading approximation.

</details>

<a id="variational-semiclassical-methods-ex-12"></a>

### 12. Forbidden region
What replaces oscillation?

<details>
<summary>Hint 1</summary>

The classical momentum becomes imaginary when V exceeds E.

</details>

<details>
<summary>Hint 2</summary>

Its magnitude supplies the real exponential action.

</details>

<details>
<summary>Full solution</summary>

Exponentials involving $\int |p|dx/\hbar$.

</details>

<a id="variational-semiclassical-methods-ex-13"></a>

### 13. Opaque tunneling
What leading factor appears?

<details>
<summary>Hint 1</summary>

Square a decaying amplitude to obtain a transmission-scale probability.

</details>

<details>
<summary>Hint 2</summary>

The action integral therefore appears with twice its amplitude exponent.

</details>

<details>
<summary>Full solution</summary>

Transmission is exponentially controlled by $\exp\!\left[-2\int |p|\,dx/\hbar\right]$ through the forbidden region.

</details>

<a id="variational-semiclassical-methods-ex-14"></a>

### 14. Harmonic WKB
What action scaling leads to equally spaced levels?

<details>
<summary>Hint 1</summary>

Integrate the semicircular momentum profile between the oscillator turning points.

</details>

<details>
<summary>Hint 2</summary>

The result is pi times energy divided by angular frequency.

</details>

<details>
<summary>Full solution</summary>

The oscillator action integral is proportional to $E/\omega$; quantization therefore increments energy by $\hbar \omega$.

</details>

<a id="variational-semiclassical-methods-ex-15"></a>

### 15. Hard wall
Can the smooth two-turning-point half correction be copied unchanged?

<details>
<summary>Hint 1</summary>

The phase comes from the local endpoint connection problem.

</details>

<details>
<summary>Hint 2</summary>

A Dirichlet hard wall is not a simple smooth Airy turning point.

</details>

<details>
<summary>Full solution</summary>

No. Boundary phase corrections depend on wall and turning-point type.

</details>

<a id="variational-semiclassical-methods-ex-16"></a>

### 16. Semiclassical parameter
What should be large relative to $\hbar$?

<details>
<summary>Hint 1</summary>

Compare a characteristic phase-space action with hbar.

</details>

<details>
<summary>Hint 2</summary>

A duration or length alone is not a dimensionless semiclassical criterion.

</details>

<details>
<summary>Full solution</summary>

A characteristic action, equivalently phase variation across the system.

</details>

<a id="variational-semiclassical-methods-ex-17"></a>

### 17. Classical path
Does stationary phase mean only one path physically exists?

<details>
<summary>Hint 1</summary>

Stationary phase is an asymptotic statement about an amplitude integral.

</details>

<details>
<summary>Hint 2</summary>

It does not identify a unique physically occupied trajectory.

</details>

<details>
<summary>Full solution</summary>

No. It identifies dominant contributions in an approximation to an amplitude.

</details>

<a id="variational-semiclassical-methods-ex-18"></a>

### 18. Path measure
Is the real-time path integral automatically an ordinary probability measure?

<details>
<summary>Hint 1</summary>

Real-time weights are complex and oscillatory.

</details>

<details>
<summary>Hint 2</summary>

A measure or regularization must be separately constructed.

</details>

<details>
<summary>Full solution</summary>

No. Its complex oscillatory weights require a specified construction.

</details>

<a id="variational-semiclassical-methods-ex-19"></a>

### 19. Validation
How can WKB be checked?

<details>
<summary>Hint 1</summary>

Use a case with a defined exact or independently approximated reference.

</details>

<details>
<summary>Hint 2</summary>

Compare in the stated action regime and treat the excluded turning neighborhoods appropriately.

</details>

<details>
<summary>Full solution</summary>

Compare eigenvalues or wave functions with exact/numerical solutions while varying action scale and avoiding turning-point neighborhoods.

</details>

<a id="variational-semiclassical-methods-ex-20"></a>

### 20. Bound direction
Does a variational ground estimate underestimate $E_0$?

<details>
<summary>Hint 1</summary>

Recall the direction of the spectral-average inequality.

</details>

<details>
<summary>Hint 2</summary>

A compliant trial cannot yield a strict underestimate in exact arithmetic.

</details>

<details>
<summary>Full solution</summary>

No. Under the theorem's hypotheses it is an upper bound.

</details>

## Chapter summary

Rayleigh–Ritz methods give upper bounds and systematic nested-space improvement, while excited-state claims require min-max control. WKB is a phase-amplitude approximation away from turning points, and semiclassical path language requires a precise construction and error regime.

[Previous chapter](perturbation-adiabatic-transitions.md) · [Next chapter](numerical-quantum-dynamics.md) · [Book overview](#/books/two-state-quantum-mechanics)
