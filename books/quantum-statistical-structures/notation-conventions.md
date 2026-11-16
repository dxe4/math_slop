
# Notation and Conventions

This guide is designed for repeated reference. It records notation used across chapters, the claim-status conventions that govern what kind of warrant a statement needs, and the structural conventions that keep arguments clean.

## Hilbert-space notation

- $\mathcal{H}$: a complex Hilbert space.
- $|\psi\rangle$, $|\phi\rangle$, $|n\rangle$: vectors (kets) in $\mathcal{H}$. We write $|\psi\rangle$ rather than `\ket{\psi}` because `\ket{}` is undefined in the print build.
- $\langle\psi|$: the dual vector (bra) corresponding to $|\psi\rangle$.
- $\langle\phi|\psi\rangle$: the inner product of $|\phi\rangle$ and $|\psi\rangle$, linear in the second argument.
- $||\psi\rangle| = \sqrt{\langle\psi|\psi\rangle}$: the norm of $|\psi\rangle$.
- $\mathbb{P}(\mathcal{H})$: the projective Hilbert space, the set of rays in $\mathcal{H}$.
- $\mathcal{H}_A \otimes \mathcal{H}_B$: the tensor product of Hilbert spaces $A$ and $B$.
- $|a\rangle \otimes |b\rangle$ or $|ab\rangle$: a product state in the tensor product.

## Operators and matrices

- $A$, $B$, $H$: linear operators on $\mathcal{H}$.
- $A^{\dagger}$: the adjoint (Hermitian conjugate) of $A$.
- $[A, B] = AB - BA$: the commutator.
- $\{A, B\} = AB + BA$: the anticommutator.
- $\operatorname{Tr}(A)$: the trace of $A$.
- $\operatorname{Tr}_B(O)$: the partial trace of operator $O$ over subsystem $B$.
- $I$ or $I_{d}$: the identity operator (or $d \times d$ identity matrix).
- $\sigma_x$, $\sigma_y$, $\sigma_z$: the Pauli matrices.
- $\boldsymbol{\sigma} = (\sigma_x, \sigma_y, \sigma_z)$: the vector of Pauli matrices.
- $\mathbf{r} \cdot \boldsymbol{\sigma} = r_x\sigma_x + r_y\sigma_y + r_z\sigma_z$: the Bloch-form operator.

## States and measurements

- $\rho$: a density operator.
- $\rho_A = \operatorname{Tr}_B(\rho)$: the reduced density operator for subsystem $A$.
- $|\Phi^{+}\rangle = \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)$: the Bell state.
- $P_a$: the spectral projection onto the eigenspace for eigenvalue $a$.
- $E_i$: a POVM effect (positive operator satisfying $\sum_i E_i = I$).
- $\mathbb{P}(a) = \langle\psi|P_a|\psi\rangle$: the Born probability of outcome $a$.
- $\langle A\rangle = \langle\psi|A|\psi\rangle = \operatorname{Tr}(\rho A)$: the expectation value of $A$.
- $\operatorname{Var}(A) = \langle A^{2}\rangle - \langle A\rangle^{2}$: the variance.
- $\operatorname{Tr}(\rho^{2})$: the purity of $\rho$.

## Dynamics

- $U(t) = e^{-iHt/\hbar}$: the unitary evolution operator.
- $H$: the Hamiltonian (self-adjoint generator of time evolution).
- $\hbar$: the reduced Planck constant.
- $\omega$: an angular frequency.
- $\gamma$: a decay rate or coupling constant.
- $\mathcal{E}$: a quantum channel (CPTP map).
- $K_k$: Kraus operators.
- $L_k$: Lindblad (jump) operators.

## Statistical mechanics

- $\beta = 1/(k_B T)$: inverse temperature.
- $k_B$: Boltzmann's constant.
- $Z = \operatorname{Tr}(e^{-\beta H})$: the canonical partition function.
- $\Xi = \operatorname{Tr}(e^{-\beta(H - \mu N)})$: the grand canonical partition function.
- $\rho_{\beta} = e^{-\beta H}/Z$: the canonical density operator.
- $F = -\beta^{-1}\ln Z$: the Helmholtz free energy.
- $U = \langle H\rangle$: the mean energy.
- $C_V = (\partial U/\partial T)_V$: the heat capacity at constant volume.
- $S = -k_B\operatorname{Tr}(\rho\ln\rho)$: the von Neumann entropy.
- $\mu$: chemical potential.
- $n = N/V$: number density.
- $\lambda_T = h/\sqrt{2\pi mk_BT}$: thermal de Broglie wavelength.
- $\zeta(s)$: the Riemann zeta function.

## Quantum statistics

- $n_B(\varepsilon) = 1/(e^{\beta(\varepsilon - \mu)} - 1)$: Bose-Einstein distribution.
- $n_F(\varepsilon) = 1/(e^{\beta(\varepsilon - \mu)} + 1)$: Fermi-Dirac distribution.
- $\varepsilon_F$: Fermi energy.
- $k_F$: Fermi wavevector.
- $T_F = \varepsilon_F/k_B$: Fermi temperature.
- $T_c$: critical temperature (for Bose-Einstein condensation).

## Special functions and constants

- $\delta_{ij}$: Kronecker delta.
- $\varepsilon_{jkl}$: Levi-Civita symbol.
- $\mathcal{S}(\mathbb{R})$: the Schwartz space of rapidly decreasing smooth functions.
- $a$, $a^{\dagger}$: annihilation and creation (ladder) operators.
- $N = a^{\dagger}a$: the number operator.

## Indexing and summation conventions

- Sums over discrete indices are written explicitly: $\sum_n$, $\sum_{j=1}^{d}$.
- Integrals over continuous spectra are written as $\int \lambda\,dP_A(\lambda)$.
- Einstein summation convention is not used.
- Multi-character subscripts and superscripts are braced: $x_{ij}$, $2^{10}$, $\varepsilon_{\text{min}}$.

## Claim-status conventions

Before accepting or repeating a claim, check its status:

| Status | Warrant required | Typical sources |
| --- | --- | --- |
| Theorem | Proof from stated axioms | Definitions, spectral theorem, linear algebra |
| Sketch | Recoverable proof outline; standard analysis suppressed | Textbook arguments, standard limits |
| Model-dependent result | Specified Hamiltonian or ensemble | Statistical mechanics derivations |
| Open problem | None; record current evidence and partial results | Research literature, expert consensus |

## Cross-reference conventions

- Chapters are cited by title in quotation marks: "Pure states are rays".
- Chapter IDs are used in internal links: `pure-states-are-rays`, `canonical-ensembles`.
- Definitions are numbered within chapters and referenced by name.
- Theorems are stated with every material hypothesis; the proof or proof sketch follows immediately.

## Accessibility and notation policy

All essential mathematical information is stated in text and formulas. No argument depends only on colour, spatial placement, or animation. Tables and diagrams are accompanied by exact descriptions of rows, columns, or relations. Plain-source formulas use readable tokens such as $\leq$, $\to$, and $\cong$ when a specialized glyph would otherwise be the only carrier of meaning.

## Citation policy

- Paraphrase sources and cite the job they perform.
- Do not copy exercise sequences, distinctive examples, diagrams, or prose merely because a theorem is standard.
- Direct quotations require exact locators and license or fair-use review.
- When sources disagree, record the disagreement.
- When provenance is unknown, label it unknown rather than inventing a clean lineage.
