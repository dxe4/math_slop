var e=`---
parent_id: book-two-state-quantum-mechanics
matter_id: glossary-operator-and-symbol-index
title: "Glossary, Operator Index, and Symbol Index"
license: CC BY-SA 4.0
---

# Glossary, Operator Index, and Symbol Index

## Glossary

**Adjoint:** For densely defined $A$, the operator $A^{\\dagger}$ whose domain consists of vectors $u$ for which $v\\mapsto\\langle u|Av\\rangle$ is bounded on $D(A)$; it satisfies $\\langle u|Av\\rangle=\\langle A^{\\dagger}u|v\\rangle$ for $u\\in D(A^{\\dagger})$ and $v\\in D(A)$. For finite matrices it is conjugate transpose.

**Amplitude:** Complex coefficient whose squared magnitude contributes to a Born probability after indistinguishable alternatives are combined.

**Channel:** Completely positive trace-preserving linear map on density operators.

**Coherence:** Basis-relative off-diagonal structure capable of supporting interference in an appropriate experiment.

**Commutator:** $[A,B]=AB-BA$; controls compatibility, dynamics, and generator algebra.

**Complete positivity:** Positivity retained when a map is tensored with the identity map on an arbitrary ancilla.

**Decoherence:** Suppression of selected reduced-state coherences through environmental correlation or averaging under a model.

**Density operator:** Positive trace-one operator encoding finite measurement statistics.

**Domain:** Set of vectors on which an operator is defined; part of an unbounded operator's identity.

**Effect:** Positive operator $E\\leq I$ used for one POVM outcome probability.

**Entanglement:** Nonseparability relative to a tensor-product decomposition.

**Generalized eigenfunction:** Distributional or nonnormalizable spectral object used for continuous spectra.

**Hamiltonian:** Self-adjoint energy operator generating closed-system time evolution.

**Instrument:** Outcome-indexed completely positive, trace-nonincreasing maps whose sum is trace preserving; it specifies both probabilities and conditional state changes.

**Observable:** In the ideal sharp model, a self-adjoint operator together with its spectral measure.

**POVM:** Positive effects summing to identity; specifies a generalized outcome law.

**Projector:** Self-adjoint idempotent operator representing a closed subspace.

**Pure state:** Rank-one density operator, or equivalently a ray represented by a normalized vector.

**Ray:** One-dimensional complex subspace; normalized representatives differing by global phase denote the same pure state.

**Reduced state:** Partial trace of a composite state, sufficient for local measurement statistics.

**Self-adjoint:** Equal to its adjoint including domain; stronger than symmetric.

**Spectrum:** Spectral values of an operator, including point and continuous parts where relevant.

**Symmetric operator:** A densely defined operator with $A\\subseteq A^{\\dagger}$; equivalently, the adjoint identity holds for both vectors in $D(A)$. Its adjoint domain may be larger.

**Unitary:** Norm-preserving operator with $U^{\\dagger} U=UU^{\\dagger}=I$.

## Operator index

- $I$: identity; Chapters 1–22.
- $X,Y,Z$: Pauli matrices; Chapters 2–7 and 16–18.
- $P_a$: spectral projector; Chapters 1–2 and 8.
- $H$: Hamiltonian; Chapters 4–13 and 17–21.
- $U(t,s)$: propagator; Chapters 4–5.
- $Q,P$: position and momentum; Chapters 6, 9–13, 20–21.
- $J,L,S$: total, orbital, and spin angular momentum; Chapters 7 and 12.
- $a,a^{\\dagger},N$: oscillator ladder and number operators; Chapter 11.
- $\\Pi$: particle exchange; Chapter 15.
- $E_y,M_y,K_a$: POVM effects, measurement, and channel Kraus operators; Chapter 16.
- $\\Phi_t$: channel or open-system dynamical map; Chapters 16–17.

## Symbol index

- $\\hbar$: reduced Planck constant; action units.
- $\\rho$: density operator; context distinguishes state from spectral density.
- $\\psi,\\phi$: state vectors or wave-function representatives.
- $\\Delta A$: standard deviation of observable $A$ when finite.
- $\\omega$: angular frequency; never silently interchangeable with cyclic frequency.
- $\\lambda$: eigenvalue, perturbation parameter, or Schmidt weight by context.
- $\\ell$: oscillator length.
- $a$: Coulomb length scale in Chapter 12; also ladder operator only when types disambiguate.
- $R,T$: reflection and transmission flux ratios in Chapter 13.
- $S$: scattering operator, entropy, or CHSH expression only where explicitly labeled.
- $T_1,T_2,T_phi$: relaxation, coherence, and pure-dephasing scales in a stated model.

## Index-use warning

Symbols are local conventions, not universal standards. Before importing a formula, compare adjoint convention, Fourier normalization, angular-frequency convention, tensor-factor order, and channel parameterization.
`;export{e as default};