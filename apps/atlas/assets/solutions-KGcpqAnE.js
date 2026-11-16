var e=`---
parent_id: book-quantum-statistical-structures
matter_id: solutions
title: "Solutions to selected exercises"
license: CC BY-SA 4.0
---

# Solutions to selected exercises

This chapter contains compact solutions for all exercises in the book. Each solution restates the decisive reasoning and, for computational exercises, gives verified numerical results. The reader is encouraged to attempt the problems before consulting this section.

---

## Chapter 1: Pure states are rays

**Exercise 1.** Show that $|\\psi\\rangle \\sim |\\phi\\rangle$ if $|\\psi\\rangle = c|\\phi\\rangle$ with $c \\neq 0$ is an equivalence relation.

*Solution.* Reflexivity: $|\\psi\\rangle = 1 \\cdot |\\psi\\rangle$. Symmetry: if $|\\psi\\rangle = c|\\phi\\rangle$, then $|\\phi\\rangle = c^{-1}|\\psi\\rangle$. Transitivity: if $|\\psi\\rangle = c|\\phi\\rangle$ and $|\\phi\\rangle = d|\\chi\\rangle$, then $|\\psi\\rangle = (cd)|\\chi\\rangle$ with $cd \\neq 0$.

**Exercise 2.** Verify normalization of $|\\psi\\rangle = \\frac{1}{2}|0\\rangle + \\frac{\\sqrt{3}}{2}|1\\rangle$ and compute measurement probabilities.

*Solution.* $\\langle\\psi|\\psi\\rangle = (1/2)^{2} + (\\sqrt{3}/2)^{2} = 1/4 + 3/4 = 1$. Probabilities: $\\mathbb{P}(0) = (1/2)^{2} = 1/4$, $\\mathbb{P}(1) = (\\sqrt{3}/2)^{2} = 3/4$.

**Exercise 3.** Show that a global phase leaves all probabilities unchanged, while a relative phase generally changes the state.

*Solution.* Under $|\\psi\\rangle \\to e^{i\\chi}|\\psi\\rangle$, $|\\langle n|\\psi\\rangle|^{2}$ is unchanged because $|e^{i\\chi}| = 1$. Under $\\beta \\to e^{i\\chi}\\beta$ only, the overlap with $|+\\rangle = (|0\\rangle + |1\\rangle)/\\sqrt{2}$ becomes $|(\\alpha + e^{i\\chi}\\beta)/\\sqrt{2}|^{2}$, which varies with $\\chi$ unless $\\alpha\\beta = 0$.

---

## Chapter 2: Observables and the spectral theorem

**Exercise 1.** Spectral decomposition of $\\sigma_{x}$ and $\\langle\\sigma_{x}\\rangle$ for $|0\\rangle$.

*Solution.* Eigenvalues $\\pm 1$ with eigenvectors $|+\\rangle = (|0\\rangle + |1\\rangle)/\\sqrt{2}$ and $|-\\rangle = (|0\\rangle - |1\\rangle)/\\sqrt{2}$. Projections $P_{\\pm} = |\\pm\\rangle\\langle\\pm|$. For $|0\\rangle$, $\\langle\\sigma_{x}\\rangle = 0$ because $\\mathbb{P}(+) = \\mathbb{P}(-) = 1/2$.

**Exercise 2.** For normalized $\\psi\\in D(A^2)$, show $\\langle\\psi|A^{2}|\\psi\\rangle = \\int\\lambda^{2}\\,d\\mu_{\\psi}(\\lambda)$ and $\\operatorname{Var}(A) \\geq 0$.

*Solution.* By functional calculus, $A^{2} = \\int\\lambda^{2}\\,dP_{A}(\\lambda)$. Taking expectations gives the first identity. Then $\\operatorname{Var}(A) = \\int(\\lambda - \\langle A\\rangle)^{2}\\,d\\mu_{\\psi}(\\lambda) \\geq 0$ because the integrand is nonnegative and $\\mu_{\\psi}$ is a probability measure.

**Exercise 3.** No self-adjoint operator on a finite-dimensional space has continuous spectrum.

*Solution.* In finite dimensions, injectivity of $A-\\lambda I$ implies surjectivity. A continuous-spectrum point would require this operator to be injective with dense range but not surjective, so none exists; the spectrum is precisely the finite eigenvalue set.

---

## Chapter 3: Unitary dynamics and generators

**Exercise 1.** Verify that $U(t) = e^{-iHt/\\hbar}$ is unitary when $H = H^{\\dagger}$.

*Solution.* By the spectral theorem, $H = \\int\\lambda\\,dP(\\lambda)$, so $U(t) = \\int e^{-i\\lambda t/\\hbar}\\,dP(\\lambda)$ and $U(t)^{\\dagger} = \\int e^{i\\lambda t/\\hbar}\\,dP(\\lambda)$. Their product is $\\int dP(\\lambda) = I$.

**Exercise 2.** For spin precession, compute $\\langle\\sigma_{y}\\rangle(t)$, $\\langle\\sigma_{z}\\rangle(t)$, and confirm constant Bloch length.

*Solution.* With $|\\psi(t)\\rangle = (e^{i\\omega t/2}|0\\rangle + e^{-i\\omega t/2}|1\\rangle)/\\sqrt{2}$ and the standard $\\sigma_y$, we obtain $\\langle\\sigma_{z}\\rangle(t) = 0$ and $\\langle\\sigma_{y}\\rangle(t) = -\\sin(\\omega t)$. The squared length is $\\cos^{2}(\\omega t) + \\sin^{2}(\\omega t) + 0 = 1$, confirming purity.

**Exercise 3.** For a continuous finite-dimensional self-adjoint family, if $[H(t_{1}), H(t_{2})] = 0$ for all times, then $U(t,t_{0}) = \\exp\\bigl(-(i/\\hbar)\\int_{t_{0}}^{t}H(t')\\,dt'\\bigr)$.

*Solution.* Commuting finite-dimensional self-adjoint Hamiltonians are simultaneously diagonalizable. In a joint eigenbasis, each component evolves as $c_{n}(t) = \\exp\\bigl(-(i/\\hbar)\\int_{t_{0}}^{t}E_{n}(t')\\,dt'\\bigr)c_{n}(t_{0})$. Assembling the components gives the claimed exponential. For unbounded operators, formal commutators alone do not replace strong commutation and domain hypotheses.

---

## Chapter 4: Two-state systems and Bloch geometry

**Exercise 1.** Eigenvalues of $\\rho = (I + r\\sigma_{z})/2$ and purity condition.

*Solution.* In the $\\sigma_{z}$ basis, $\\rho = \\operatorname{diag}((1+r)/2,\\,(1-r)/2)$. Eigenvalues are $(1 \\pm r)/2$. Positivity requires $|r| \\leq 1$. Purity $\\operatorname{Tr}(\\rho^{2}) = 1$ gives $((1+r)/2)^{2} + ((1-r)/2)^{2} = 1$, which simplifies to $r^{2} = 1$. Thus $|r| = 1$ is pure; $r = 0$ is maximally mixed.

**Exercise 2.** Commutator $[\\mathbf{m}\\cdot\\boldsymbol{\\sigma}, \\mathbf{n}\\cdot\\boldsymbol{\\sigma}] = 2i(\\mathbf{m}\\times\\mathbf{n})\\cdot\\boldsymbol{\\sigma}$.

*Solution.* Expand using the Pauli algebra $\\sigma_{j}\\sigma_{k} = \\delta_{jk}I + i\\varepsilon_{jkl}\\sigma_{l}$:

$$(\\mathbf{m}\\cdot\\boldsymbol{\\sigma})(\\mathbf{n}\\cdot\\boldsymbol{\\sigma}) = (\\mathbf{m}\\cdot\\mathbf{n})I + i(\\mathbf{m}\\times\\mathbf{n})\\cdot\\boldsymbol{\\sigma}.$$

Subtracting the reverse product gives $2i(\\mathbf{m}\\times\\mathbf{n})\\cdot\\boldsymbol{\\sigma}$.

**Exercise 3.** Bloch evolution under $H = (\\hbar\\omega/2)\\sigma_{z}$ with $\\mathbf{r}(0) = (1,0,0)$.

*Solution.* The Bloch equation $d\\mathbf{r}/dt = \\boldsymbol{\\omega} \\times \\mathbf{r}$ with $\\boldsymbol{\\omega} = (0,0,\\omega)$ gives $d\\mathbf{r}/dt = \\omega(-r_{y}, r_{x}, 0)$. With initial condition $(1,0,0)$, the solution is $\\mathbf{r}(t) = (\\cos(\\omega t), \\sin(\\omega t), 0)$. The probability of $+\\hbar/2$ for $S_{x}$ is $(1 + \\mathbf{r}(t)\\cdot(1,0,0))/2 = (1 + \\cos(\\omega t))/2 = \\cos^{2}(\\omega t/2)$.

---

## Chapter 5: Canonical commutation and uncertainty

**Exercise 1.** $\\operatorname{Var}(A) = 0$ if and only if $|\\psi\\rangle$ is an eigenstate of $A$.

*Solution.* If $A|\\psi\\rangle = a|\\psi\\rangle$, then $\\langle A\\rangle = a$ and $\\langle A^{2}\\rangle = a^{2}$, so $\\operatorname{Var}(A) = 0$. Conversely, $\\operatorname{Var}(A) = ||\\widetilde{A}|\\psi\\rangle|^{2} = 0$ implies $\\widetilde{A}|\\psi\\rangle = 0$, so $A|\\psi\\rangle = \\langle A\\rangle|\\psi\\rangle$.

**Exercise 2.** Gaussian wave packet $\\psi(x) = (2\\pi\\sigma^{2})^{-1/4}\\exp(-x^{2}/4\\sigma^{2})$: verify uncertainty equality.

*Solution.* $|\\psi(x)|^{2}$ is Gaussian with variance $\\sigma^{2}$, so $(\\Delta X)^{2} = \\sigma^{2}$. With the unitary $\\hbar$-Fourier convention, $\\widetilde\\psi(p)=(2\\sigma^2/(\\pi\\hbar^2))^{1/4}\\exp(-\\sigma^2p^2/\\hbar^2)$. Its probability density has $(\\Delta P)^2=\\hbar^2/(4\\sigma^2)$, so $\\Delta X\\,\\Delta P=\\hbar/2$.

**Exercise 3.** State for which the Schrödinger inequality is strictly stronger than Robertson for $\\sigma_{x}$ and $\\sigma_{y}$.

*Solution.* Take the pure state with Bloch vector $\\mathbf r=(1,1,1)/\\sqrt3$. The variance product is $(1-r_x^2)(1-r_y^2)=4/9$. Robertson gives $r_z^2=1/3$, while the centered anticommutator contributes $r_x^2r_y^2=1/9$. Thus Schrödinger gives the strictly stronger, saturated bound $4/9$.

---

## Chapter 6: Harmonic oscillator as an operator audit

**Exercise 1.** Compute $\\langle 0|X^{2}|0\\rangle$, $\\langle 0|P^{2}|0\\rangle$, and verify $\\langle H\\rangle = \\hbar\\omega/2$.

*Solution.* Using $X = \\sqrt{\\hbar/(2m\\omega)}\\,(a + a^{\\dagger})$ and $P = i\\sqrt{m\\hbar\\omega/2}\\,(a^{\\dagger} - a)$, and $a|0\\rangle = 0$:

$$\\langle 0|X^{2}|0\\rangle = \\frac{\\hbar}{2m\\omega}, \\qquad \\langle 0|P^{2}|0\\rangle = \\frac{m\\hbar\\omega}{2}.$$

Then $\\langle H\\rangle = \\langle P^{2}\\rangle/(2m) + (m\\omega^{2}/2)\\langle X^{2}\\rangle = \\hbar\\omega/4 + \\hbar\\omega/4 = \\hbar\\omega/2$.

**Exercise 2.** Show $F = -\\beta^{-1}\\ln Z = U - TS$ with $S = -k_{B}\\operatorname{Tr}(\\rho_{\\beta}\\ln\\rho_{\\beta})$.

*Solution.* From $\\ln\\rho_{\\beta} = -\\beta H - (\\ln Z)I$, we get $S = k_{B}\\beta U + k_{B}\\ln Z$. Rearranging gives $U - TS = -\\beta^{-1}\\ln Z = F$.

**Exercise 3.** Three-dimensional isotropic oscillator: partition function and mean energy.

*Solution.* The Hamiltonian separates into three independent 1D oscillators. Eigenvalues: $E_{n_{1},n_{2},n_{3}} = \\hbar\\omega(n_{1} + n_{2} + n_{3} + 3/2)$. The partition function factorizes: $Z_{\\text{3D}} = Z_{\\text{1D}}^{3}$. The mean energy is $U_{\\text{3D}} = 3U_{\\text{1D}} = 3\\hbar\\omega/2 + 3\\hbar\\omega/(e^{\\beta\\hbar\\omega} - 1)$. At high temperature, $U_{\\text{3D}} \\to 3k_{B}T$, consistent with six quadratic degrees of freedom.

---

## Chapter 7: Composite systems and entanglement

**Exercise 1.** Schmidt decomposition of $|\\psi\\rangle = \\frac{1}{2}(|00\\rangle + |01\\rangle + |10\\rangle + |11\\rangle)$.

*Solution.* Factor: $|\\psi\\rangle = \\frac{1}{2}(|0\\rangle + |1\\rangle) \\otimes (|0\\rangle + |1\\rangle) = |+\\rangle \\otimes |+\\rangle$. Schmidt rank $r = 1$ with $\\lambda_{1} = 1$. The state is a product state, not entangled.

**Exercise 2.** For $|\\psi\\rangle = \\frac{1}{\\sqrt{3}}(|00\\rangle + |01\\rangle + |10\\rangle)$, compute $\\rho_{A}$ and its eigenvalues.

*Solution.* Tracing out $B$ from $|\\psi\\rangle\\langle\\psi|$ gives

$$\\rho_{A} = \\frac{1}{3}\\begin{pmatrix}2 & 1\\\\ 1 & 1\\end{pmatrix}.$$

The eigenvalues are $\\lambda_{\\pm} = (3 \\pm \\sqrt{5})/6 \\approx 0.873$ and $0.127$. The entanglement entropy is

$$S = -\\lambda_{+}\\ln\\lambda_{+} - \\lambda_{-}\\ln\\lambda_{-} \\approx 0.381 \\text{ nats}.$$

**Exercise 3.** Basis-independence of the partial trace.

*Solution.* Write $|j\\rangle = \\sum_{k}U_{jk}|k\\rangle$ with $U$ unitary. Then

$$\\sum_{j}\\langle j|O|j\\rangle = \\sum_{j,k,l}U_{jk}^{*}U_{jl}\\langle k|O|l\\rangle = \\sum_{k,l}(U^{\\dagger}U)_{lk}\\langle k|O|l\\rangle = \\sum_{k}\\langle k|O|k\\rangle.$$

---

## Chapter 8: Density operators and general measurements

**Exercise 1.** Show $\\operatorname{Tr}(\\rho^{2}) \\leq 1$ with equality if and only if $\\rho$ is pure.

*Solution.* In the eigenbasis, $\\rho = \\sum_{i}\\lambda_{i}|\\phi_{i}\\rangle\\langle\\phi_{i}|$ with $\\lambda_{i} \\geq 0$, $\\sum_{i}\\lambda_{i} = 1$. Then $\\operatorname{Tr}(\\rho^{2}) = \\sum_{i}\\lambda_{i}^{2}$. Nonnegativity and unit trace give $0 \\leq \\lambda_{i} \\leq 1$, so $\\lambda_{i}^{2} \\leq \\lambda_{i}$ and $\\sum_{i}\\lambda_{i}^{2} \\leq \\sum_{i}\\lambda_{i} = 1$. Equality holds if and only if every $\\lambda_{i}$ is $0$ or $1$; unit trace then gives exactly one eigenvalue $1$ and all others $0$. This is exactly the condition for a pure state. This online proof clarification leaves the retained draft PDF unchanged.

**Exercise 2.** Kraus operators for the amplitude-damping channel.

*Solution.* The Kraus operators are

$$K_{0} = \\begin{pmatrix}1 & 0\\\\ 0 & \\sqrt{1-\\gamma}\\end{pmatrix}, \\qquad K_{1} = \\begin{pmatrix}0 & \\sqrt{\\gamma}\\\\ 0 & 0\\end{pmatrix}.$$

They satisfy $K_{0}^{\\dagger}K_{0} + K_{1}^{\\dagger}K_{1} = I$ and reproduce the channel action on the basis operators.

**Exercise 3.** Two-outcome POVM with $E_{1} = (2/3)|0\\rangle\\langle 0| + (1/3)|1\\rangle\\langle 1|$ and $\\rho = (I + \\sigma_{z})/2$.

*Solution.* Here $\\rho = |0\\rangle\\langle 0|$, so $\\mathbb{P}(1) = \\langle 0|E_{1}|0\\rangle = 2/3$ and $\\mathbb{P}(2) = 1/3$. For a general state $\\rho = (I + r\\sigma_{z})/2$, we have $\\mathbb{P}(1) = (2/3)(1+r)/2 + (1/3)(1-r)/2 = (3+r)/6$.

---

## Chapter 9: Canonical ensembles

**Exercise 1.** Show $\\partial U/\\partial\\beta = -\\operatorname{Var}(H)$ and deduce $U$ decreases with $\\beta$.

*Solution.* $U = -\\partial_{\\beta}\\ln Z$. Differentiating again gives $\\partial U/\\partial\\beta = -\\partial_{\\beta}^{2}\\ln Z = -\\operatorname{Var}(H) \\leq 0$. Since $\\beta = 1/(k_{B}T)$, an increase in $\\beta$ corresponds to a decrease in $T$, so $U$ decreases as $\\beta$ increases: higher temperature means higher mean energy.

**Exercise 2.** Verify $C_{V} \\to k_{B}$ as $T \\to \\infty$ for the quantum harmonic oscillator.

*Solution.* From Chapter 6, $U = \\hbar\\omega/2 + \\hbar\\omega/(e^{\\beta\\hbar\\omega} - 1)$. Then

$$C_{V} = \\frac{\\partial U}{\\partial T} = k_{B}\\frac{x^{2}e^{x}}{(e^{x} - 1)^{2}},$$

where $x = \\beta\\hbar\\omega$. As $x \\to 0$, $e^{x} \\approx 1 + x$, so $C_{V} \\approx k_{B}x^{2}(1+x)/x^{2} = k_{B}(1+x) \\to k_{B}$.

**Exercise 3.** Three-level system $0, \\varepsilon, 2\\varepsilon$: partition function, mean energy, and entropy.

*Solution.* $Z = 1 + e^{-\\beta\\varepsilon} + e^{-2\\beta\\varepsilon}$. The mean energy is $U = (\\varepsilon e^{-\\beta\\varepsilon} + 2\\varepsilon e^{-2\\beta\\varepsilon})/Z$. The probabilities are $p_{0} = 1/Z$, $p_{\\varepsilon} = e^{-\\beta\\varepsilon}/Z$, $p_{2\\varepsilon} = e^{-2\\beta\\varepsilon}/Z$. The entropy is $S = -k_{B}(p_{0}\\ln p_{0} + p_{\\varepsilon}\\ln p_{\\varepsilon} + p_{2\\varepsilon}\\ln p_{2\\varepsilon})$.

---

## Chapter 10: Ensembles and thermodynamic limits

**Exercise 1.** Microcanonical entropy of a two-level system at $E = \\varepsilon/2$.

*Solution.* The shell $[\\varepsilon/2,\\varepsilon/2+\\Delta E]$ excludes $0$ and, for $\\Delta E>\\varepsilon/2$, includes $\\varepsilon$. Hence $\\Omega=1$ and $S=0$. This discrete step count has no useful ordinary derivative in $E$ without smoothing or a thermodynamic limit.

**Exercise 2.** Thermodynamic leading entropy of an indistinguishable classical ideal gas.

*Solution.* With $Z_1=V/\\lambda_T^3$, $Z_N=Z_1^N/N!$, and $\\ln N!=N\\ln N-N+O(\\ln N)$, differentiation of $F=-k_BT\\ln Z_N$ gives

$$S=Nk_B\\left[\\ln\\left(\\frac{V}{N\\lambda_T^3}\\right)+\\frac52\\right]+O(k_B\\ln N).$$

The leading term is extensive at fixed density; the exact finite-$N$ expression carries the subextensive logarithmic correction.

**Exercise 3.** Why a finite-dimensional Hilbert space cannot exhibit a true phase transition.

*Solution.* The canonical partition function is $Z = \\sum_{n=1}^{d}e^{-\\beta E_{n}}$, a finite sum of analytic functions. A finite sum of analytic functions is analytic. All thermodynamic quantities are obtained by differentiating $\\ln Z$, which is also analytic where $Z > 0$. Analytic functions cannot have discontinuities or divergences in derivatives, so no nonanalytic behavior---the hallmark of a phase transition---can occur.

---

## Chapter 11: Identical particles and quantum statistics

**Exercise 1.** Mean energy per particle for fermions at $T = 0$.

*Solution.* At $T = 0$, $U = 2 \\cdot (V/(2\\pi)^{3}) \\int_{0}^{k_{F}}4\\pi k^{2}\\,dk \\cdot \\hbar^{2}k^{2}/(2m) = (V/\\pi^{2})(\\hbar^{2}/2m)(k_{F}^{5}/5)$. Using $N = Vk_{F}^{3}/(3\\pi^{2})$, we obtain $U/N = (3/5)\\hbar^{2}k_{F}^{2}/(2m) = (3/5)\\varepsilon_{F}$.

**Exercise 2.** Photon gas energy density $u = aT^{4}$.

*Solution.* With $\\mu = 0$, two polarizations, and $\\varepsilon = \\hbar c|\\mathbf{k}|$:

$$u = \\frac{2}{(2\\pi)^{3}}\\int d^{3}k\\,\\frac{\\hbar c|\\mathbf{k}|}{e^{\\beta\\hbar c|\\mathbf{k}|} - 1} = \\frac{1}{\\pi^{2}}\\int_{0}^{\\infty}dk\\,\\frac{\\hbar ck^{3}}{e^{\\beta\\hbar ck} - 1}.$$

Setting $x = \\beta\\hbar ck$ and using $\\int_{0}^{\\infty}x^{3}/(e^{x} - 1)\\,dx = \\pi^{4}/15$ gives $u = (\\pi^{2}k_{B}^{4}/15\\hbar^{3}c^{3})T^{4}$.

**Exercise 3.** Bose occupation exceeds classical at all energies when $\\mu < 0$.

*Solution.* For $x > 0$, $e^{x} - 1 < e^{x}$, so $1/(e^{x} - 1) > e^{-x}$. Setting $x = \\beta(\\varepsilon - \\mu)$ gives $n_{B}(\\varepsilon) > e^{-\\beta(\\varepsilon - \\mu)} = n_{\\text{cl}}(\\varepsilon)$. The enhancement is most pronounced at low energies.

---

## Chapter 12: Open systems and irreversibility

**Exercise 1.** Trace preservation of the Lindblad master equation.

*Solution.* Taking the trace, the commutator term vanishes because $\\operatorname{Tr}(H\\rho) = \\operatorname{Tr}(\\rho H)$. By cyclicity, $\\operatorname{Tr}(L_{k}\\rho L_{k}^{\\dagger}) = \\operatorname{Tr}(L_{k}^{\\dagger}L_{k}\\rho)$. Thus each Lindblad term contributes $\\operatorname{Tr}(L_{k}^{\\dagger}L_{k}\\rho) - \\frac{1}{2}\\operatorname{Tr}(L_{k}^{\\dagger}L_{k}\\rho) - \\frac{1}{2}\\operatorname{Tr}(\\rho L_{k}^{\\dagger}L_{k}) = 0$, and $\\partial_{t}\\operatorname{Tr}(\\rho) = 0$.

**Exercise 2.** Amplitude-damping Kraus operators in the infinitesimal limit.

*Solution.* For small $\\gamma$, $K_{0} \\approx I - (\\gamma/2)|1\\rangle\\langle 1|$ and $K_{1} \\approx \\sqrt{\\gamma}\\,|0\\rangle\\langle 1|$. Then

$$\\mathcal{E}(\\rho) \\approx \\rho - \\frac{\\gamma}{2}\\{|1\\rangle\\langle 1|, \\rho\\} + \\gamma\\,|0\\rangle\\langle 1|\\rho|1\\rangle\\langle 0|.$$

Dividing by $dt$ and identifying $\\gamma/dt$ as the rate gives the Lindblad form with $L = \\sqrt{\\dot{\\gamma}}\\,|0\\rangle\\langle 1|$.

**Exercise 3.** Pure dephasing with $L = \\sqrt{\\gamma}\\,\\sigma_{z}$.

*Solution.* The master equation is $\\dot{\\rho} = \\gamma(\\sigma_{z}\\rho\\sigma_{z} - \\rho)$. In the Bloch representation, $\\sigma_{z}\\rho\\sigma_{z}$ flips the signs of $r_{x}$ and $r_{y}$. Thus $\\dot{r}_{x} = -2\\gamma r_{x}$, $\\dot{r}_{y} = -2\\gamma r_{y}$, $\\dot{r}_{z} = 0$. The solution is $r_{x}(t) = r_{x}(0)e^{-2\\gamma t}$, $r_{y}(t) = r_{y}(0)e^{-2\\gamma t}$, $r_{z}(t) = r_{z}(0)$. The Bloch vector shrinks toward the $z$-axis: coherence is lost but populations are preserved.

---

## Chapter 13: Symmetry, gauge, and field-theory boundary

**Exercise 1.** If $[U, H] = 0$, then $U$ commutes with $e^{-iHt/\\hbar}$ and preserves probabilities.

*Solution.* The spectral theorem implies $[U, e^{-iHt/\\hbar}] = 0$. For any $|\\psi\\rangle$, the evolved state is $|\\psi(t)\\rangle = e^{-iHt/\\hbar}|\\psi\\rangle$, and $U|\\psi\\rangle$ evolves to $Ue^{-iHt/\\hbar}|\\psi\\rangle = e^{-iHt/\\hbar}U|\\psi\\rangle = U|\\psi(t)\\rangle$. Transition probabilities $|\\langle\\phi(t)|\\psi(t)\\rangle|^{2} = |\\langle\\phi|U^{\\dagger}U|\\psi\\rangle|^{2} = |\\langle\\phi|\\psi\\rangle|^{2}$ are preserved.

**Exercise 2.** Covariance of $D_{\\mu}\\psi$ under gauge transformation.

*Solution.* Under $\\psi \\to e^{iq\\alpha/\\hbar}\\psi$ and $A_{\\mu} \\to A_{\\mu} - \\partial_{\\mu}\\alpha$:

$$D_{\\mu}\\psi \\to (\\partial_{\\mu} + iq(A_{\\mu} - \\partial_{\\mu}\\alpha)/\\hbar)(e^{iq\\alpha/\\hbar}\\psi) = e^{iq\\alpha/\\hbar}(\\partial_\\mu+iqA_\\mu/\\hbar)\\psi.$$

Thus $D_{\\mu}\\psi$ transforms with the same phase as $\\psi$; setting $c=1$ does not set $\\hbar=1$.

**Exercise 3.** Why the spin-statistics theorem requires relativistic QFT.

*Solution.* In nonrelativistic quantum mechanics, one can write down consistent theories of spinless fermions or spin-$1/2$ bosons by hand: the state space is simply restricted to symmetric or antisymmetric subspaces without reference to spin. The theorem requires the additional structure of relativistic QFT: locality (observables at spacelike separation commute or anticommute), positivity of the Hilbert-space metric, and Lorentz covariance. These constraints tie the exchange statistics to the transformation properties under the Lorentz group, which in turn fixes the spin.
`;export{e as default};