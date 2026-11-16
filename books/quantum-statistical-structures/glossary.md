
# Glossary

This glossary defines key terms used throughout the book and indicates the chapters where each concept is introduced or most heavily used.

## A

**Amplitude damping.** A quantum channel describing energy dissipation from an excited state to a ground state, often arising from spontaneous emission. Modeled by Kraus operators $K_{0} = |0\rangle\langle 0| + \sqrt{1-\gamma}\,|1\rangle\langle 1|$ and $K_{1} = \sqrt{\gamma}\,|0\rangle\langle 1|$. See Chapter 8 (Density operators and general measurements) and Chapter 12 (Open systems and irreversibility).

**Anticommutator.** For operators $A$ and $B$, the anticommutator is $\{A, B\} = AB + BA$. Appears in the Schrödinger uncertainty relation and in the Lindblad master equation. See Chapter 5 (Canonical commutation and uncertainty) and Chapter 12 (Open systems and irreversibility).

## B

**Bell inequality.** A bound on correlations derivable from local hidden-variable models. Quantum mechanics violates this bound; the CHSH inequality is bounded by $2$ for local hidden variables and by $2\sqrt{2}$ quantum mechanically. See Chapter 7 (Composite systems and entanglement).

**Bloch sphere.** A geometric representation of pure and mixed states of a two-level quantum system. Pure states lie on the surface $|\mathbf{r}| = 1$; mixed states fill the interior ball. See Chapter 4 (Two-state systems and Bloch geometry).

**Born rule.** The rule that the probability of outcome $a$ in a measurement of observable $A$ on state $|\psi\rangle$ is $\mathbb{P}(a) = \langle\psi|P_{a}|\psi\rangle$, where $P_{a}$ is the spectral projection for eigenvalue $a$. See Chapter 1 (Pure states are rays) and Chapter 2 (Observables and the spectral theorem).

**Bose–Einstein condensation.** A macroscopic quantum phenomenon in which a finite fraction of bosons occupies the single-particle ground state below a critical temperature. See Chapter 11 (Identical particles and quantum statistics).

## C

**Canonical ensemble.** A statistical ensemble describing a system in thermal equilibrium with a heat reservoir at fixed temperature $T$. The density operator is $\rho_{\beta} = e^{-\beta H}/Z$. See Chapter 9 (Canonical ensembles).

**Completely positive map.** A linear map $\mathcal{E}$ on operators such that $\mathcal{E} \otimes \mathrm{id}$ preserves positivity for every auxiliary space. Required for quantum channels. See Chapter 8 (Density operators and general measurements).

**Commutator.** For operators $A$ and $B$, the commutator is $[A, B] = AB - BA$. The canonical commutation relation $[X, P] = i\hbar I$ is fundamental to quantum mechanics. See Chapter 5 (Canonical commutation and uncertainty).

## D

**Decoherence.** The loss of quantum coherence in a reduced subsystem due to entanglement with an environment. Explains the absence of macroscopic superpositions in everyday experience. See Chapter 12 (Open systems and irreversibility).

**Density operator.** A positive, self-adjoint, unit-trace operator $\rho$ representing either a statistical mixture of pure states or the reduced state of an entangled system. Generalizes the ray picture. See Chapter 8 (Density operators and general measurements).

## E

**Entanglement entropy.** The von Neumann entropy $S(\rho_{A}) = -\operatorname{Tr}(\rho_{A}\ln\rho_{A})$ of a reduced density operator, quantifying bipartite entanglement in a pure state. See Chapter 7 (Composite systems and entanglement).

**Expectation value.** For observable $A$ in state $|\psi\rangle$, $\langle A\rangle = \langle\psi|A|\psi\rangle$. For a density operator, $\langle A\rangle = \operatorname{Tr}(\rho A)$. See Chapter 2 (Observables and the spectral theorem).

## F

**Fermi energy.** The chemical potential of a degenerate Fermi gas at zero temperature. For free electrons in three dimensions, $\varepsilon_{F} = (\hbar^{2}/2m)(3\pi^{2}n)^{2/3}$. See Chapter 11 (Identical particles and quantum statistics).

## G

**Gauge invariance.** Invariance under local phase transformations $|\psi(x)\rangle \to e^{i\alpha(x)}|\psi(x)\rangle$, requiring the introduction of a gauge field. See Chapter 13 (Symmetry, gauge, and field-theory boundary).

**Global phase.** A phase factor $e^{i\alpha}$ applied uniformly to all components of a state vector. Has no physical significance because states are rays. Distinguished from relative phase. See Chapter 1 (Pure states are rays).

## H

**Hamiltonian.** The self-adjoint operator $H$ generating unitary time evolution via $U(t) = e^{-iHt/\hbar}$. Its spectrum gives the energy eigenvalues of the system. See Chapter 3 (Unitary dynamics and generators).

**Heisenberg picture.** A formulation of quantum dynamics in which states are fixed and observables evolve as $A_{H}(t) = U(t)^{\dagger}A\,U(t)$. See Chapter 3 (Unitary dynamics and generators).

**Hilbert space.** A complete inner-product space over $\mathbb{C}$. The state space of quantum mechanics. See Chapter 1 (Pure states are rays).

## I

**Identical particles.** Particles that cannot be distinguished even in principle. Under the ordinary Bose/Fermi symmetrization postulate used here, their multiparticle state is symmetric (bosons) or antisymmetric (fermions) under exchange; indistinguishability alone does not exclude higher-dimensional permutation representations. See Chapter 11 (Identical particles and quantum statistics).

## K

**Kraus operator.** An operator $K_{k}$ in the representation $\mathcal{E}(\rho) = \sum_{k}K_{k}\rho K_{k}^{\dagger}$ of a quantum channel, satisfying $\sum_{k}K_{k}^{\dagger}K_{k} = I$. See Chapter 8 (Density operators and general measurements).

## L

**Ladder operator.** The raising operator $a^{\dagger}$ and lowering operator $a$ for the quantum harmonic oscillator, satisfying $[a, a^{\dagger}] = I$. See Chapter 6 (Harmonic oscillator as an operator audit).

**Lindblad equation.** A Markovian master equation for open quantum systems: $\dot{\rho} = -(i/\hbar)[H, \rho] + \sum_{k}(L_{k}\rho L_{k}^{\dagger} - \frac{1}{2}\{L_{k}^{\dagger}L_{k}, \rho\})$. Guarantees complete positivity and trace preservation. See Chapter 12 (Open systems and irreversibility).

## M

**Maximally mixed state.** The density operator $\rho = I/d$ in $d$ dimensions, with purity $\operatorname{Tr}(\rho^{2}) = 1/d$. See Chapter 4 (Two-state systems and Bloch geometry) and Chapter 8 (Density operators and general measurements).

**Microcanonical ensemble.** A statistical ensemble describing an isolated system with fixed energy. The density operator is uniform over the energy shell. See Chapter 10 (Ensembles and thermodynamic limits).

## O

**Observable.** A self-adjoint operator $A = A^{\dagger}$ corresponding to a measurable physical quantity. Its spectral decomposition gives possible outcomes and their probabilities. See Chapter 2 (Observables and the spectral theorem).

**Open quantum system.** A quantum system interacting with an environment, described by nonunitary reduced dynamics. See Chapter 12 (Open systems and irreversibility).

## P

**Partial trace.** The operation $\operatorname{Tr}_{B}$ that reduces a bipartite density operator to a subsystem density operator $\rho_{A} = \operatorname{Tr}_{B}(\rho_{AB})$. See Chapter 7 (Composite systems and entanglement).

**Pauli matrices.** The Hermitian, traceless, unitary matrices $\sigma_{x}, \sigma_{y}, \sigma_{z}$ satisfying $\sigma_{j}\sigma_{k} = \delta_{jk}I + i\varepsilon_{jkl}\sigma_{l}$. See Chapter 4 (Two-state systems and Bloch geometry).

**POVM.** Positive-operator-valued measure: a set of positive operators $\{E_{i}\}$ with $\sum_{i}E_{i} = I$, generalizing projective measurements. See Chapter 8 (Density operators and general measurements).

**Projective Hilbert space.** The space of rays (equivalence classes of vectors under scalar multiplication) in a Hilbert space. The true state space of pure quantum states. See Chapter 1 (Pure states are rays).

**Purity.** The quantity $\operatorname{Tr}(\rho^{2})$, equal to $1$ for pure states and strictly less than $1$ for mixed states. See Chapter 8 (Density operators and general measurements).

## Q

**Quantum channel.** A completely positive, trace-preserving (CPTP) map describing the evolution of an open quantum system. See Chapter 8 (Density operators and general measurements).

## R

**Ray.** A one-dimensional subspace of Hilbert space, or equivalently an equivalence class of vectors under multiplication by a nonzero scalar. See Chapter 1 (Pure states are rays).

**Reduced density operator.** The density operator of a subsystem obtained by taking the partial trace over the complementary subsystem. See Chapter 7 (Composite systems and entanglement).

**Relative phase.** A phase difference between superposed components of a state vector. Physically meaningful, unlike a global phase. See Chapter 1 (Pure states are rays).

**Robertson uncertainty relation.** $\operatorname{Var}(A)\operatorname{Var}(B) \geq \frac{1}{4}|\langle\psi|[A,B]|\psi\rangle|^{2}$. See Chapter 5 (Canonical commutation and uncertainty).

## S

**Schrödinger equation.** $i\hbar\frac{d}{dt}|\psi(t)\rangle = H|\psi(t)\rangle$, governing unitary evolution of pure states. See Chapter 3 (Unitary dynamics and generators).

**Schrödinger picture.** A formulation of quantum dynamics in which observables are fixed and states evolve unitarily. See Chapter 3 (Unitary dynamics and generators).

**Schmidt decomposition.** Every bipartite pure state can be written as $|\psi\rangle = \sum_{i=1}^{r}\sqrt{\lambda_{i}}\,|a_{i}\rangle \otimes |b_{i}\rangle$, where $r$ is the Schmidt rank and $\lambda_{i}$ are the Schmidt coefficients. See Chapter 7 (Composite systems and entanglement).

**Self-adjoint operator.** An operator $A$ satisfying $D(A) = D(A^{\dagger})$ and $A|\psi\rangle = A^{\dagger}|\psi\rangle$ for all $|\psi\rangle$ in its domain. Guarantees real spectrum and a spectral decomposition. See Chapter 2 (Observables and the spectral theorem).

**Spectral theorem.** The statement that every self-adjoint operator admits a decomposition into orthogonal projections onto eigenspaces (finite dimensions) or a projection-valued spectral measure (infinite dimensions). See Chapter 2 (Observables and the spectral theorem).

**Spin-statistics theorem.** The connection between integer spin and bosons, half-integer spin and fermions. Requires relativistic quantum field theory for its proof. See Chapter 11 (Identical particles and quantum statistics) and Chapter 13 (Symmetry, gauge, and field-theory boundary).

**Stone's theorem.** Every strongly continuous one-parameter unitary group has a unique self-adjoint generator. See Chapter 3 (Unitary dynamics and generators).

## T

**Tensor product.** The Hilbert space $\mathcal{H}_{A} \otimes \mathcal{H}_{B}$ describing composite quantum systems. See Chapter 7 (Composite systems and entanglement).

**Thermodynamic limit.** The limit $N \to \infty$, $V \to \infty$ with $n = N/V$ fixed, in which phase transitions emerge as nonanalyticities in the free energy. See Chapter 10 (Ensembles and thermodynamic limits).

**Trace.** $\operatorname{Tr}(A) = \sum_{n}\langle n|A|n\rangle$, basis-independent. For density operators, $\operatorname{Tr}(\rho) = 1$. See Chapter 2 (Observables and the spectral theorem).

## U

**Uncertainty principle.** The intrinsic limit on the precision with which certain pairs of observables can be simultaneously known, derived from the Cauchy–Schwarz inequality. See Chapter 5 (Canonical commutation and uncertainty).

**Unitary operator.** An operator $U$ satisfying $U^{\dagger}U = UU^{\dagger} = I$. Preserves inner products and probabilities. See Chapter 3 (Unitary dynamics and generators).

## V

**Variance.** $\operatorname{Var}(A) = \langle A^{2}\rangle - \langle A\rangle^{2} = \langle\psi|\widetilde{A}^{2}|\psi\rangle \geq 0$. See Chapter 2 (Observables and the spectral theorem).

## W

**Wigner's theorem.** Every bijection of rays preserving transition probabilities is induced, up to phase, by a unitary or antiunitary operator on Hilbert space. See Chapter 13 (Symmetry, gauge, and field-theory boundary).
