var e=`---
parent_id: book-two-state-quantum-mechanics
matter_id: notation-units-and-claim-boundaries
title: "Notation, Units, and Claim Boundaries"
license: CC BY-SA 4.0
---

# Notation, Units, and Claim Boundaries

## Vectors and operators

$|\\psi\\rangle$ denotes a ket, $\\langle \\psi|$ its conjugate-linear bra, and $\\langle \\phi|\\psi\\rangle$ the inner product, linear in the ket. $A^{\\dagger}$ is the adjoint. $I$ is the identity on the space in context. $P$ usually denotes an orthogonal projector; $\\rho$ is a positive trace-one density operator. Tensor products are written $A \\otimes B$, with subsystem identities displayed when ambiguity matters.

Commutators and anticommutators are $[A,B]=AB-BA$ and $\\{A,B\\}=AB+BA$. Expectations are $\\langle A\\rangle_\\psi=\\langle\\psi|A|\\psi\\rangle$ or $\\operatorname{Tr}(\\rho A)$. Standard deviation is $\\Delta A=\\sqrt{\\langle A^2\\rangle-\\langle A\\rangle^2}$ when the moments and domains exist.

## Constants and dimensions

$\\hbar$ has units action, $H$ energy, and $H/\\hbar$ inverse time. Angular frequency $\\omega$ uses radians per unit time; ordinary frequency $\\nu$ uses cycles per unit time and $\\omega=2\\pi\\nu$. A one-dimensional normalized wave function has units length to the power $-1/2$; a three-dimensional one has length to $-3/2$. Probability amplitudes in a finite orthonormal basis are dimensionless.

Every exponential needs a dimensionless argument. Energy-time phases appear as $Et/\\hbar$; translations as momentum-distance over $\\hbar$; rotations as angle times angular momentum over $\\hbar$. Radians are dimensionless but the distinction between angular and cyclic frequency remains numerically essential.

## Spectral language

Finite Hermitian matrices have real eigenvalues and orthonormal eigenbases. In infinite dimensions, distinguish point spectrum, continuous spectrum, generalized eigenfunctions, symmetric operators, and self-adjoint operators. A differential expression without a domain is not a complete operator. Boundary conditions belong to the model and can change the spectrum.

## Probability and measurement

Born probabilities are conditional on a preparation and a measurement model. An expectation is an ensemble mean, not generally a single-trial outcome. A POVM specifies outcome effects; an instrument also specifies state updates. An unread measurement means outcome averaging, while a conditional state requires a nonzero-probability recorded outcome.

## Claim labels

- **Exact within model:** derived without approximation from stated finite or domain-controlled assumptions.
- **Asymptotic:** valid in a named limit with an indicated error scale.
- **Numerical evidence:** supported by residuals, refinement, and benchmark comparisons.
- **Empirical model:** connected to calibrated preparation and measurement data.
- **Interpretive:** adds a claim about ontology, outcome, or meaning beyond shared operational predictions.

Do not use “proved” for a numerical plot, “observed” for a simulated curve, or “exact” for a calculation inside an unvalidated truncation. When an equation is standard but its mathematical hypotheses are postponed, label the use formal and point forward.

## Frequent symbol collisions

$H$ can mean Hamiltonian or entropy in other texts; this book uses $S$ for von Neumann entropy and $H$ for Hamiltonian unless an information formula is explicitly labeled. $P$ may be momentum or projector, so momentum is usually $P$ only beside position $Q$, while projectors receive subscripts. $T$ may mean transmission, temperature, or time ordering; context and units must disambiguate it. $i$ is the imaginary unit and may also appear as an index only where unambiguous.

## Reporting template

Before a calculation, state: Hilbert space, basis or representation, operator domain, normalized state, units, observable/instrument, approximation, and output. Afterward, report: normalization or trace, relevant residual, limiting case, uncertainty, and physical scope. This short ledger prevents most serious category errors.
`;export{e as default};