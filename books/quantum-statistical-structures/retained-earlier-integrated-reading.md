
# Quantum and Statistical Structures: States, Operators, and Ensembles

Quantum mechanics and statistical mechanics both assign probabilities, but to different mathematical structures and physical preparations. This book develops Hilbert-space states, self-adjoint observables, density operators, dynamics, composite systems, canonical ensembles, quantum statistics, and open-system boundaries. It assumes complex linear algebra, probability, spectral theory, and ordinary differential equations. Functional analysis is required wherever unbounded operators appear.

## 1. Pure states are rays

A complex Hilbert space $H$ has an inner product linear in one convention-dependent slot and complete norm. We use physics notation $\langle \varphi \mid \psi \rangle$, linear in $\lvert \psi \rangle$.

A normalized vector $\lvert \psi \rangle$ represents a pure state, but global phases represent the same state:

$\lvert \psi \rangle \sim e^{i\alpha }\lvert \psi \rangle$.

Thus the physical pure-state space is projective Hilbert space. Relative phases remain observable through interference.

For an orthonormal basis $\{\lvert n \rangle\}$, Parseval gives $\sum_{n}\lvert \langle n \mid \psi \rangle\rvert^{2}=1$. The squared amplitudes form probabilities for a projective measurement in that basis. A basis is tied to a measurement context; it is not a decomposition into hidden simultaneous classical alternatives.

## 2. Observables and the spectral theorem

In finite dimensions, an observable is a Hermitian operator $A=A^{\dagger}$, with real eigenvalues and orthogonal eigenspaces. Its spectral decomposition is

$A=\sum_{a} aP_{a}$.

The Born probability of outcome $a$ is $\langle \psi \mid P_{a} \mid \psi \rangle$. Expectation and variance are

$\langle A \rangle=\langle \psi \mid A \mid \psi \rangle$, $\operatorname{Var}(A)=\langle A^{2}\rangle-\langle A \rangle^{2}$.

In infinite dimensions, a self-adjoint operator has a projection-valued spectral measure $P_{A}$, allowing continuous spectrum. Self-adjointness includes the domain equality $D(A)=D(A^{\dagger})$ as well as equality of the actions; a formally symmetric differential expression with unspecified boundary conditions is not yet an observable.

For momentum $P=-i\hbar d/dx$, boundary conditions on an interval determine whether the operator is self-adjoint and which spectrum it has. Integration by parts reveals boundary terms. “Hermitian matrix intuition” is insufficient for every differential operator.

## 3. Unitary dynamics and generators

For time-independent self-adjoint Hamiltonian $H$,

$U(t)=e^{-iHt/\hbar }$

is a strongly continuous unitary group and solves $i\hbar \dot{\psi}=H\psi$ for initial states in $D(H)$. Stone’s theorem gives the converse: every strongly continuous one-parameter unitary group has a unique self-adjoint generator.

In the Schrödinger picture states evolve and observables are fixed. In the Heisenberg picture

$A_{H}(t)=U(t)^{\dagger}AU(t)$

and, on a suitable common domain,

$dA_{H}/dt=(i/\hbar )[H,A_{H}]+(\partial A/\partial t)_{H}$.

Domain invariance cannot be ignored when $A,H$ are unbounded. Formal commutators may fail to define an operator on the state under discussion.

For piecewise-continuous finite Hermitian Hamiltonians, pairwise commutation at different times is sufficient for $U(t,0)=\exp[-(i/\hbar)\int_0^t H(s)\,ds]$, not necessary for this fixed-start formula. For a counterexample choose $T>0$, set $\tau=t/T$, $X=\sigma_x$, $Z=\sigma_z$ and $H(t)=(\hbar/T)K(\tau)$, with $K=X,-X,Z$ on $[0,1),[1,2),[2,3]$, respectively. The ordered propagator, with continuous matching at the switches, is $e^{-i\tau X}$ for $0\le\tau\le1$, $e^{-i(2-\tau)X}$ for $1\le\tau\le2$, and $e^{-i(\tau-2)Z}$ for $2\le\tau\le3$: the first two pulses cancel. These equal $\exp[-i\int_0^\tau K(s)\,ds]$ at every prefix, although $[X,Z]\ne0$. Online correction: the earlier necessity claim is refuted by this example; the retained draft PDF predates the qualification. In general use a time-ordered propagator; unbounded Hamiltonians also need an evolution theorem with domain and regularity hypotheses.

## 4. Two-state systems and Bloch geometry

Every two-by-two density matrix can be written

$\rho =(I+\mathbf r\cdot\boldsymbol\sigma)/2$,

where $\mathbf r\in\mathbb R^3$, $\boldsymbol\sigma=(\sigma_x,\sigma_y,\sigma_z)$ are the Pauli matrices, and positivity is equivalent to $\lVert\mathbf r\rVert\leq 1$. Pure states lie on the Bloch sphere $\lVert\mathbf r\rVert=1$; mixed states lie inside.

A Hamiltonian $H=(\hbar/2)\boldsymbol\omega\cdot\boldsymbol\sigma$ rotates the Bloch vector about the axis $\boldsymbol\omega$ at angular speed $\lVert\boldsymbol\omega\rVert$. Global identity terms shift all energies but do not change isolated-state rays, though relative phases against other sectors may matter.

For spin measurement along unit vector $\mathbf n$, outcomes $\pm\hbar/2$ have probabilities $(1\pm\mathbf r\cdot\mathbf n)/2$. This connects operator spectral projections to a geometric dot product.

The Bloch ball is special to two levels. Higher-dimensional mixed-state spaces are not ordinary balls, and a moving particle needs an infinite-dimensional Hilbert space.

## 5. Canonical commutation and uncertainty

For normalized $\psi\in D(A)\cap D(B)$, let $\widetilde A=A-\langle A\rangle I$ and $\widetilde B=B-\langle B\rangle I$. Cauchy–Schwarz yields the weak Robertson form

$\operatorname{Var}(A)\operatorname{Var}(B)\geq
\bigl|\operatorname{Im}\langle A\psi\mid B\psi\rangle\bigr|^2$.

If, additionally, $\psi\in D(AB)\cap D(BA)$, this becomes

$\operatorname{Var}(A)\operatorname{Var}(B)\geq (1/4)\lvert\langle\psi\mid[A,B]\psi\rangle\rvert^2$.

A stronger Schrödinger form also includes the symmetric covariance. For position and momentum on a suitable common domain, $[X,P]=i\hbar I$, giving $\Delta X\Delta P\geq\hbar/2$.

The inequality describes spreads in an ensemble prepared in one state, not an observer mechanically disturbing a pre-existing pair of sharp values. Equality requires a linear-dependence condition between $\widetilde A\psi$ and $\widetilde B\psi$; unchirped Gaussian wave packets realize the Robertson equality for canonical position and momentum.

No bounded operators satisfy the canonical commutation relation exactly on an infinite-dimensional Hilbert space, as a trace argument hints in finite dimension. Domain and representation theory are structural, not technical clutter.

## 5A. Harmonic oscillator as an operator audit

The formal one-dimensional oscillator Hamiltonian is

$H=P^{2}/(2m)+(m\omega^{2}/2)X^{2}$.

Define dimensionless ladder expressions on a common dense domain such as the Schwartz space:

$a=\sqrt{m\omega /(2\hbar )}X+iP/\sqrt{2m\hbar \omega }$,

$a^{\dagger}=\sqrt{m\omega/(2\hbar)}X-iP/\sqrt{2m\hbar\omega}$.

There $[a,a^{\dagger}]=I$ and

$H=\hbar\omega(a^{\dagger}a+1/2)$.

If a normalized ground state satisfies $a\psi_{0}=0$, its position wavefunction solves a first-order differential equation and is Gaussian. Applying $a^{\dagger}$ builds eigenvectors with energies

$E_{n}=\hbar \omega (n+1/2)$.

The nonzero ground energy is not obtained by adding a classical constant by hand; it follows from the commutator when the Hamiltonian is factorized. Shifting a single non-gravitating Hamiltonian by a constant changes only global phase, but energy differences and coupling to gravity make blanket statements about “unobservable zero-point energy” unsafe.

The algebra is a guide, not a complete spectral proof. One must show the differential Hamiltonian is self-adjoint on a suitable domain, that the ladder-generated states belong to it, that the eigenvectors are complete, and that no additional spectrum exists. For the standard oscillator those steps are rigorous; for a general potential, a copied ladder argument may have no meaning.

The canonical partition function is

$Z=\sum_{n=0}^{\infty} e^{-\beta \hbar \omega (n+1/2)}=e^{-\beta \hbar \omega /2}/(1-e^{-\beta \hbar \omega })$.

It converges for $\beta >0$. Mean energy is

$U=\hbar \omega /2+\hbar \omega /(e^{\beta \hbar \omega }-1)$.

At low temperature it approaches the ground energy. At high temperature the zero-point term and the first subleading term in the thermal contribution cancel, giving $U=k_BT+O((\hbar\omega)^2/(k_BT))$ and recovering classical equipartition for one quadratic position and one quadratic momentum term. This limit uses $\beta\hbar\omega\ll1$, not simply “large temperature” without a scale.

## 6. Composite systems and entanglement

Systems $A,B$ combine by tensor product $H_{A}\otimes H_{B}$. A product state has form $\lvert a \rangle\otimes \lvert b \rangle$; a pure state not expressible this way is entangled.

Every finite-dimensional bipartite pure state has Schmidt decomposition

$\lvert \psi \rangle=\sum_{i} \sqrt{\lambda_{i}}\lvert a_{i} \rangle\otimes \lvert b_{i} \rangle$,

with $\lambda_{i}\ge 0$, $\sum \lambda_{i}=1$. It is a product exactly when one coefficient is nonzero.

The reduced density operator is $\rho_{A}=\operatorname{Tr}_{B}\!\left(\lvert \psi \rangle\langle \psi \rvert\right)$, with eigenvalues $\lambda_{i}$. Entanglement entropy is $S(\rho_{A})=-\sum_{i}\lambda_{i}\ln\lambda_{i}$ for a pure bipartite state.

Entanglement correlations do not enable controllable faster-than-light signaling. Local outcome statistics are unchanged by the distant choice when outcomes are not conditioned on communicated results. Bell inequalities distinguish quantum correlations from local hidden-variable models under stated independence and locality assumptions.

## 7. Density operators and general measurements

A density operator is positive, trace class, and has trace one. It represents a statistical mixture or the reduced state of a larger entangled system. Decompositions

$\rho =\sum p_{i}\lvert \psi_{i} \rangle\langle \psi_{i} \rvert$

are not unique; the operator, not one chosen ensemble decomposition, determines measurement probabilities.

A positive-operator-valued measure (POVM) has positive effects $E_{i}$ summing to identity, with $\mathbb{P}(i)=\operatorname{Tr}(\rho E_{i})$. Projective measurements are a special case. An **instrument** additionally specifies state update and cannot be reconstructed from outcome probabilities alone.

Unitary dynamics sends $\rho\to U\rho U^{\dagger}$. More general physical quantum channels are completely positive trace-preserving maps. Complete positivity ensures the map remains positive when tensored with the identity map on an arbitrary ancilla.

## 8. Canonical ensembles

For a quantum system weakly coupled to a thermal reservoir at temperature $T$, the canonical state is

$\rho_\beta =e^{-\beta H}/Z$, $Z=\operatorname{Tr}(e^{-\beta H})$, $\beta =(k_{B}T)^{-1}$,

provided $e^{-\beta H}$ is trace class so $Z<\infty$.

For a classical system, the analogous Gibbs probability density is proportional to $e^{-\beta H}$, with the trace replaced by an appropriately normalized sum or phase-space integral. That measure and its normalization convention must be stated.

Then

$U=\operatorname{Tr}(\rho H)=-\partial_\beta \ln Z$,

$\operatorname{Var}(H)=\partial^{2}_\beta \ln Z$,

$F=-\beta^{-1}\ln Z$,

and von Neumann entropy satisfies $S=-k_{B}\operatorname{Tr}(\rho \ln\rho )=k_{B}(\ln Z+\beta U)$.

These derivatives assume parameter-independent energy levels or account for parameter dependence separately. Differentiation under a trace needs analytic control in infinite systems.

**Two-level example.** Energies are $0,\varepsilon$. Then $Z=1+e^{-\beta \varepsilon }$ and excited probability is $1/(e^{\beta \varepsilon }+1)$. Mean energy is $\varepsilon /(e^{\beta \varepsilon }+1)$. This Fermi-shaped algebra arises from two levels, not automatically from a gas of fermions.

## 9. Ensembles and thermodynamic limits

The microcanonical ensemble fixes a narrow energy shell for an isolated system. Canonical fixes temperature through reservoir exchange. Grand canonical fixes temperature and chemical potential while particle number fluctuates:

$\Xi=\operatorname{Tr}\exp[-\beta(H-\mu N)]$,

provided the exponential is trace class. Here one normally also assumes $[H,N]=0$ so that energy and particle number define compatible equilibrium constraints.

Thermodynamic limits send particle number and volume to infinity with density controlled. Free energy per volume may develop nonanalyticity, making sharp phase transitions possible. A finite partition function with finitely many levels is analytic in positive temperature, so no literal nonanalytic phase transition occurs in that finite system.

Ensemble equivalence can fail for long-range interactions, nonconcave entropy, finite systems, or constrained phases. Deriving a canonical distribution by maximizing entropy encodes constraints and a probability interpretation; it does not remove the need to identify the physical preparation.

Ergodicity is sometimes invoked to relate time averages and phase-space averages. It is a theorem or hypothesis about a specified dynamical system and observable class, not a universal consequence of “chaos.”

## 10. Identical particles and quantum statistics

For identical bosons, multiparticle states are symmetric under permutation; for fermions they are antisymmetric. In the noninteracting grand canonical ensemble, mean occupation of a single-particle energy $\varepsilon$ is

$n_{B}=1/(e^{\beta (\varepsilon -\mu )}-1)$ for bosons,

$n_{F}=1/(e^{\beta (\varepsilon -\mu )}+1)$ for fermions,

within conditions such as $\mu$ below the lowest bosonic energy. Classical Maxwell–Boltzmann behavior emerges in a dilute high-temperature regime.

The spin–statistics theorem connecting integer spin to bosons and half-integer spin to fermions belongs to relativistic QFT under locality, positivity, and covariance hypotheses. It is not derivable from nonrelativistic permutation symmetry alone.

Bose–Einstein condensation in an ideal gas depends on spatial dimension and density of states. Interactions and traps change quantitative behavior. A diverging occupation formula signals a need to treat the ground state separately, not an infinite physical particle count in a finite experiment.

## 11. Open systems and irreversibility

An isolated total system can evolve unitarily while a subsystem evolves nonunitarily after tracing out an environment. Under Markovian and regularity approximations, a quantum dynamical semigroup has a Lindblad generator

$\dot{\rho}=-\frac{i}{\hbar}[H,\rho]
+\sum_k\left(L_k\rho L_k^{\dagger}
-\frac12\{L_k^{\dagger}L_k,\rho\}\right)$.

This form preserves trace and complete positivity. It does not describe every environment: memory effects, initial correlations, strong coupling, and finite recurrence can invalidate the Markov semigroup approximation.

Decoherence suppresses interference between selected robust states in a reduced description. It does not by itself select one actual measurement outcome without an interpretation or further postulate.

Entropy of a subsystem may increase while the total pure state’s von Neumann entropy stays zero. Thermodynamic irreversibility therefore involves coarse-graining, environment, typicality, limits, or probabilistic preparation—not contradiction with global unitarity.

## 12. Symmetry, gauge, and field-theory boundary

Wigner’s theorem represents transition-probability-preserving symmetries by unitary or antiunitary operators. Continuous connected symmetries are unitary and generated, under regularity, by self-adjoint operators. Projective representations explain quantum phases and spin.

A global phase is redundant. A spacetime-dependent phase requires a connection to compare phases at neighboring points, leading to gauge-covariant derivatives. This motivates electromagnetic coupling but does not alone derive every dynamical term or fix a gauge group.

Quantum field theory assigns operator-valued distributions or local observable algebras to spacetime regions. Fields at a point are generally distributions requiring smearing with test functions. Products at coincident points demand renormalized definitions.

Free fields and many lower-dimensional interacting models admit rigorous constructions. Formal path integrals in Lorentzian signature are not ordinary probability measures. Perturbative expansions, effective field theories, lattice models, and algebraic axioms each have a different claim. Use [the honest QFT orientation](../../articles/qft-honest-orientation.md) before transferring finite-dimensional operator formulas without qualification.

## Problems with solutions

### 1. Mixed qubit

For $\rho =(I+r\sigma_{z})/2$, find eigenvalues and determine when it is pure.

**Solution.** In the $\sigma_{z}$ basis, eigenvalues are $(1+r)/2$ and $(1-r)/2$. Positivity requires $\lvert r\rvert\leq 1$. Purity $\operatorname{Tr}(\rho^{2})=1$ occurs exactly at $\lvert r\rvert=1$; $r=0$ is maximally mixed.

### 2. Thermal two-level heat capacity

For energies $0,\varepsilon$, show energy variance is $\varepsilon^{2}p(1-p)$ with $p=1/(e^{\beta \varepsilon }+1)$.

**Solution.** Energy is a Bernoulli variable equal $\varepsilon$ with probability $p$, so $\mathbb{E}[H^{2}]=\varepsilon^{2}p$ and $U^{2}=\varepsilon^{2}p^{2}$; subtract to get $\varepsilon^{2}p(1-p)$. Canonical heat capacity is $\operatorname{Var}(H)/(k_{B}T^{2})\ge 0$.

### 3. Entangled reductions

For $(\lvert 00 \rangle+\lvert 11 \rangle)/\sqrt{2}$, compute the reduced state.

**Solution.** Expanding $\lvert \psi \rangle\langle \psi \rvert$ and tracing the second factor removes cross terms because $\langle 0 \mid 1 \rangle=0$; each diagonal term contributes half. Thus $\rho_{A}=I/2$, with entropy $k_{B}\ln 2$ if thermodynamic units are used, even though the joint state is pure.

### 4. Domain warning

Why does an $L^{2}$ wavefunction not automatically have finite position expectation?

**Solution.** Normalization requires $\int \lvert \psi \rvert^{2}<\infty$. Finite $\langle X \rangle$ or $\langle X^{2}\rangle$ requires additional weighted integrability such as $\int \lvert x \rvert \lvert \psi \rvert^{2}<\infty$ or $\int x^{2}\lvert \psi \rvert^{2}<\infty$. Membership in $L^{2}$ alone does not place $\psi$ in the domain of the relevant unbounded moment operator.

## Continue

Advance to operator algebras, scattering theory, quantum information, many-body theory, equilibrium states on infinite algebras, constructive QFT, or stochastic thermodynamics only after keeping preparation, domains, limits, and observable meaning explicit. The shared mathematical lesson is that a probability distribution never floats free: it belongs to a state space, an algebra of observables, and a physical protocol.
