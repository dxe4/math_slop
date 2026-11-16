
# Symmetry, gauge, and field-theory boundary

## Symmetry as structure

Symmetry is not merely a simplifying assumption in quantum mechanics; it is a structural constraint that determines allowed interactions, conservation laws, and the classification of states. This final chapter surveys Wigner's theorem on symmetry representations, introduces gauge invariance as a local phase symmetry, and sketches the boundary where quantum mechanics becomes quantum field theory. The treatment is necessarily brief---each topic deserves its own volume---but the goal is to orient the reader toward honest further study.

## Wigner's theorem

A symmetry in quantum mechanics is a bijection of rays that preserves transition probabilities. **Wigner's theorem** states that every such ray transformation is induced, up to phase, by either a **unitary** or an **antiunitary** operator. Continuous connected symmetries are represented by unitary operators; discrete symmetries such as time reversal may be antiunitary.

For a strongly continuous one-parameter unitary group $U(s)$ with $U(0)=I$ and $U(s+t)=U(s)U(t)$, Stone's theorem gives a self-adjoint generator $G$ such that $U(s)=e^{-isG/\hbar}$. A continuous family lacking the group law does not satisfy Stone's hypothesis. On suitable domains, $\langle G\rangle$ is conserved when the symmetry strongly commutes with the Hamiltonian; for bounded operators the familiar condition $[G,H]=0$ gives $d\langle G\rangle/dt=0$.

**Projective representations** arise when the physical symmetry group is represented only up to a phase: $U(g)U(h) = e^{i\omega(g,h)}U(gh)$. In quantum mechanics this is allowed because states are rays. The rotation group $SO(3)$ has projective representations corresponding to half-integer spin. This explains the transformation law for spinors; it does not determine particle exchange statistics.

## Gauge invariance

A **global phase** transformation $|\psi\rangle \to e^{i\alpha}|\psi\rangle$ with constant $\alpha$ is redundant: it does not change the physical state. With the charge convention below, a **local phase** transformation $\psi(x)\to e^{iq\alpha(x)/\hbar}\psi(x)$ with spacetime-dependent $\alpha(x)$ is not automatically a symmetry of the Schrödinger equation because derivatives act on $\alpha(x)$.

To restore invariance, one introduces a **gauge field** $A_{\mu}(x)$ and replaces ordinary derivatives by **gauge-covariant derivatives**:

$$D_{\mu} = \partial_{\mu} + \frac{iq}{\hbar}A_{\mu}.$$

Under that local phase transformation, $A_{\mu}$ transforms as $A_{\mu}\to A_{\mu}-\partial_{\mu}\alpha$. This structure motivates electromagnetic coupling but does not alone derive every dynamical term or fix a gauge group. Non-Abelian gauge theories generalize this construction to multicomponent fields and noncommutative gauge groups.

## From quantum mechanics to quantum field theory

Quantum field theory (QFT) assigns operator-valued distributions or local observable algebras to spacetime regions. Fields at a point are generally **distributions** requiring smearing with test functions. Products at coincident points demand renormalized definitions.

Free fields and many lower-dimensional interacting models admit rigorous constructions. Formal path integrals in Lorentzian signature are not ordinary probability measures. Perturbative expansions, effective field theories, lattice models, and algebraic axioms each have a different claim to mathematical rigor and physical validity.

The honest status of QFT is that it is a framework with multiple foundations, not a single completed theory. Transferring finite-dimensional operator formulas without qualification to the infinite-dimensional setting of QFT is a common source of error. Regularization, renormalization, and the choice of vacuum state are not technical nuisances but structural features of the theory.

## Worked example: projective representation of rotations

Consider the rotation group $SO(3)$. A rotation by $2\pi$ is the identity element. However, the unitary representation of rotations on spin-$1/2$ states satisfies

$$U(2\pi) = -I.$$

A $4\pi$ rotation returns $+I$. This projective representation is allowed because $-I$ acts as the identity on rays: $e^{i\alpha}(-I)|\psi\rangle = e^{i(\alpha+\pi)}|\psi\rangle$ is on the same ray as $|\psi\rangle$. The double-valuedness explains half-integer spin. The connection between half-integer spin and Fermi statistics needs the additional relativistic QFT hypotheses stated in Exercise 3.

## Common error: treating QFT as quantum mechanics with infinitely many particles

A frequent misconception is that quantum field theory is simply quantum mechanics applied to systems with infinitely many degrees of freedom, with no new conceptual structure. In fact, QFT introduces new phenomena: vacuum polarization, particle creation and annihilation, infrared divergences, and the need for renormalization. The notion of "particle" itself becomes observer-dependent in curved spacetime. The algebraic approach to QFT, which assigns observables to regions rather than particles to states, is in many respects more fundamental than the particle picture.

## Practice exercises

### Exercise 1

Show that if $U$ is a unitary symmetry with $[U, H] = 0$, then $U$ commutes with $e^{-iHt/\hbar}$ and therefore preserves probabilities for all time.

**Solution.** Since $[U, H] = 0$, the spectral theorem implies $[U, e^{-iHt/\hbar}] = 0$. For any initial state $|\psi\rangle$, the evolved state is $|\psi(t)\rangle = e^{-iHt/\hbar}|\psi\rangle$. The transformed initial state $U|\psi\rangle$ evolves to $e^{-iHt/\hbar}U|\psi\rangle = U|\psi(t)\rangle$. Thus the symmetry and time evolution commute, and transition probabilities $|\langle\phi(t)|\psi(t)\rangle|^{2} = |\langle\phi|U^{\dagger}U|\psi\rangle|^{2} = |\langle\phi|\psi\rangle|^{2}$ are preserved.

### Exercise 2

For the gauge-covariant derivative $D_{\mu} = \partial_{\mu} + iqA_{\mu}/\hbar$ (setting $c = 1$), show that $D_{\mu}\psi$ transforms covariantly under $\psi \to e^{iq\alpha/\hbar}\psi$ and $A_{\mu} \to A_{\mu} - \partial_{\mu}\alpha$.

**Solution.** Under the transformation,

$$D_{\mu}\psi \to (\partial_{\mu} + iq(A_{\mu} - \partial_{\mu}\alpha)/\hbar)(e^{iq\alpha/\hbar}\psi) = e^{iq\alpha/\hbar}\partial_{\mu}\psi + \frac{iq}{\hbar}e^{iq\alpha/\hbar}\psi\partial_{\mu}\alpha + \frac{iq}{\hbar}e^{iq\alpha/\hbar}A_{\mu}\psi - \frac{iq}{\hbar}e^{iq\alpha/\hbar}\psi\partial_{\mu}\alpha.$$

The second and fourth terms cancel, leaving $e^{iq\alpha/\hbar}(\partial_{\mu} + iqA_{\mu}/\hbar)\psi = e^{iq\alpha/\hbar}D_{\mu}\psi$. Thus $D_{\mu}\psi$ transforms with the same phase as $\psi$.

### Exercise 3

Explain why the spin-statistics theorem requires relativistic quantum field theory and cannot be proved in nonrelativistic quantum mechanics.

**Solution.** The spin-statistics theorem connects the exchange symmetry of multiparticle states (bosonic or fermionic) to the spin of the particles (integer or half-integer). In nonrelativistic quantum mechanics, one can write down consistent theories of spinless fermions or spin-$1/2$ bosons by hand: the state space is simply restricted to symmetric or antisymmetric subspaces without reference to spin. The theorem requires the additional structure of relativistic QFT: locality (observables at spacelike separation commute or anticommute), positivity of the Hilbert-space metric, and Lorentz covariance. These constraints tie the exchange statistics to the transformation properties under the Lorentz group, which in turn fixes the spin.

## Looking backward and forward

This book began with the simplest question---what is a quantum state?---and progressed through observables, dynamics, composite systems, density operators, thermal ensembles, open systems, and finally the symmetries that structure the entire framework. The reader who has worked through these chapters possesses the foundations for operator algebras, scattering theory, quantum information, many-body theory, equilibrium states on infinite algebras, constructive QFT, and stochastic thermodynamics. The shared mathematical lesson is that a probability distribution never floats free: it belongs to a state space, an algebra of observables, and a physical protocol.
