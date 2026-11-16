var e=`---
parent_id: book-quantum-statistical-structures
matter_id: retained-quantum-density-operators-and-general-measurements
title: "Density operators and general measurements"
level: graduate
estimated_minutes: 210
license: CC BY-SA 4.0
---

# Density operators and general measurements

## Beyond pure states

Not every physical preparation yields a pure state. A system may be entangled with an environment whose details are unknown, or it may be drawn from a statistical ensemble of pure states. The proper description in all these cases is a **density operator** (or density matrix). This chapter defines density operators, explains why ensemble decompositions are not unique, introduces positive-operator-valued measures (POVMs) as the most general measurement framework, and develops the theory of quantum channels.

## Definition and properties of density operators

A **density operator** $\\rho$ on a Hilbert space $\\mathcal{H}$ is a linear operator satisfying three conditions:

1. **Self-adjoint:** $\\rho = \\rho^{\\dagger}$.
2. **Positive:** $\\langle\\psi|\\rho|\\psi\\rangle \\geq 0$ for all $|\\psi\\rangle \\in \\mathcal{H}$.
3. **Unit trace:** $\\operatorname{Tr}(\\rho) = 1$.

Positivity implies that all eigenvalues $\\lambda_i$ are nonnegative. The unit trace implies $\\sum_i\\lambda_i = 1$. Thus the eigenvalues form a probability distribution. A density operator represents either a statistical mixture of pure states or the reduced state of a larger entangled system.

## Ensemble decompositions are not unique

Every density operator admits a spectral decomposition

$$\\rho = \\sum_i \\lambda_i |\\phi_i\\rangle\\langle\\phi_i|,$$

where $\\lambda_i$ are eigenvalues and $|\\phi_i\\rangle$ orthonormal eigenvectors. More generally, $\\rho$ can be written as

$$\\rho = \\sum_k p_k |\\psi_k\\rangle\\langle\\psi_k|,$$

with $p_k > 0$, $\\sum_k p_k = 1$, but the $|\\psi_k\\rangle$ need not be orthogonal. Such **ensemble decompositions** are highly non-unique. For example, the maximally mixed qubit state $I/2$ can be written as

$$\\frac{1}{2}|0\\rangle\\langle 0| + \\frac{1}{2}|1\\rangle\\langle 1| = \\frac{1}{2}|+\\rangle\\langle +| + \\frac{1}{2}|-\\rangle\\langle -| = \\frac{1}{2}|+i\\rangle\\langle +i| + \\frac{1}{2}|-i\\rangle\\langle -i|,$$

where $|\\pm i\\rangle = (|0\\rangle \\pm i|1\\rangle)/\\sqrt{2}$. All these ensembles yield the same density operator, and no measurement on the system alone can distinguish them.

## Worked example: purity and mixedness

The **purity** of a density operator is $\\operatorname{Tr}(\\rho^{2})$. For a pure state, $\\rho = |\\psi\\rangle\\langle\\psi|$ and $\\operatorname{Tr}(\\rho^{2}) = 1$. For a mixed state, $\\operatorname{Tr}(\\rho^{2}) < 1$. For the maximally mixed state in $d$ dimensions, $\\rho = I/d$ and $\\operatorname{Tr}(\\rho^{2}) = 1/d$.

Consider $\\rho = p|0\\rangle\\langle 0| + (1-p)|1\\rangle\\langle 1|$ with $0 \\leq p \\leq 1$. Its purity is

$$\\operatorname{Tr}(\\rho^{2}) = p^{2} + (1-p)^{2} = 2p^{2} - 2p + 1.$$

This is minimized at $p = 1/2$, giving $\\operatorname{Tr}(\\rho^{2}) = 1/2$, and equals $1$ at $p = 0$ or $p = 1$.

## POVMs and instruments

A **positive-operator-valued measure (POVM)** is a collection of positive operators $\\{E_i\\}$ called **effects** satisfying $\\sum_i E_i = I$. The probability of outcome $i$ for a state $\\rho$ is

$$\\mathbb{P}(i) = \\operatorname{Tr}(\\rho E_i).$$

Projective measurements are the special case $E_i = P_i$ with $P_iP_j = \\delta_{ij}P_i$. POVMs describe more general measurements, including those with noisy detectors or post-processing.

An **instrument** extends a POVM by specifying the post-measurement state update. It cannot be reconstructed from outcome probabilities alone. Its unnormalized outcome branches $\\mathcal I_i$ are linear, completely positive, trace-nonincreasing maps, and $\\sum_i\\mathcal I_i$ is trace preserving. The probability is $p_i=\\operatorname{Tr}\\mathcal I_i(\\rho)$; conditioned on observing $i$, the normalized state $\\mathcal I_i(\\rho)/p_i$ depends nonlinearly on $\\rho$ through the denominator. A projective branch is $\\mathcal I_i(\\rho)=P_i\\rho P_i$.

## Quantum channels

For this chapter's channel results, system and ancilla spaces are finite dimensional. A **quantum channel** is a completely positive trace-preserving (CPTP) map $\\mathcal{E}$ acting on density operators. **Complete positivity** means that for every finite-dimensional auxiliary Hilbert space $\\mathcal{H}_{\\text{anc}}$, the map $\\mathcal{E} \\otimes \\operatorname{id}_{\\text{anc}}$ sends positive operators to positive operators. This is stronger than mere positivity and is necessary because the system of interest may be entangled with an ancilla. Infinite-dimensional channels require normality and trace-class/operator-topology qualifications beyond this treatment.

Every quantum channel admits a **Kraus operator representation**:

$$\\mathcal{E}(\\rho) = \\sum_k K_k \\rho K_k^{\\dagger}, \\qquad \\sum_k K_k^{\\dagger}K_k = I.$$

The Kraus operators are not unique: different sets may represent the same channel.

## Worked example: Kraus operators for the depolarizing channel

The **depolarizing channel** on a qubit is defined by

$$\\mathcal{E}(\\rho) = (1-p)\\rho + \\frac{p}{3}(\\sigma_x\\rho\\sigma_x + \\sigma_y\\rho\\sigma_y + \\sigma_z\\rho\\sigma_z).$$

This can be written with Kraus operators $K_0 = \\sqrt{1-p}\\,I$, $K_1 = \\sqrt{p/3}\\,\\sigma_x$, $K_2 = \\sqrt{p/3}\\,\\sigma_y$, $K_3 = \\sqrt{p/3}\\,\\sigma_z$. We verify complete positivity and trace preservation:

$$\\sum_k K_k^{\\dagger}K_k = (1-p)I + \\frac{p}{3}(\\sigma_x^{2} + \\sigma_y^{2} + \\sigma_z^{2}) = (1-p)I + pI = I.$$

For $\\rho = I/2$, we have $\\mathcal{E}(I/2) = (1-p)I/2 + (p/3)\\cdot(3I/2) = I/2$: the maximally mixed state is a fixed point.

## Common error: positivity versus complete positivity

A map can be positive without being completely positive. The transpose map $\\mathcal{T}(\\rho) = \\rho^{T}$ on a qubit is positive (it preserves eigenvalues) but not completely positive. Applied to one half of a Bell state,

$$(\\mathcal{T} \\otimes \\operatorname{id})(|\\Phi^{+}\\rangle\\langle\\Phi^{+}|) = \\frac{1}{2}\\begin{pmatrix}1&0&0&0\\\\0&0&1&0\\\\0&1&0&0\\\\0&0&0&1\\end{pmatrix},$$

which has eigenvalues $1/2, 1/2, 1/2, -1/2$ and is therefore not positive. This is why complete positivity, not mere positivity, is required for quantum channels.

## Practice exercises

### Exercise 1

Show that for any density operator $\\rho$, $\\operatorname{Tr}(\\rho^{2}) \\leq 1$ with equality if and only if $\\rho$ is pure.

**Solution.** In the eigenbasis, $\\rho = \\sum_i\\lambda_i|\\phi_i\\rangle\\langle\\phi_i|$ with $\\lambda_i \\geq 0$ and $\\sum_i\\lambda_i = 1$. Then $\\operatorname{Tr}(\\rho^{2}) = \\sum_i\\lambda_i^{2}$. In finite dimension $d$, Jensen's inequality for the convex function $x \\mapsto x^{2}$ gives $\\sum_i\\lambda_i^{2} \\geq (\\sum_i\\lambda_i)^{2}/d = 1/d$ with equality when all $\\lambda_i = 1/d$. For the upper bound, nonnegativity and unit trace give $0 \\leq \\lambda_i \\leq 1$, so $\\lambda_i^{2} \\leq \\lambda_i$ and $\\sum_i\\lambda_i^{2} \\leq \\sum_i\\lambda_i = 1$. Equality holds if and only if every $\\lambda_i$ is $0$ or $1$; unit trace then gives exactly one eigenvalue $1$ and all others $0$. This is exactly the condition for a pure state. 

### Exercise 2

Construct a set of Kraus operators for the amplitude-damping channel defined by $\\mathcal{E}(|0\\rangle\\langle 0|) = |0\\rangle\\langle 0|$, $\\mathcal{E}(|1\\rangle\\langle 1|) = \\gamma|0\\rangle\\langle 0| + (1-\\gamma)|1\\rangle\\langle 1|$, and $\\mathcal{E}(|0\\rangle\\langle 1|) = \\sqrt{1-\\gamma}\\,|0\\rangle\\langle 1|$.

**Solution.** The Kraus operators are

$$K_0 = \\begin{pmatrix}1&0\\\\0&\\sqrt{1-\\gamma}\\end{pmatrix}, \\qquad K_1 = \\begin{pmatrix}0&\\sqrt{\\gamma}\\\\0&0\\end{pmatrix}.$$

Verify: $K_0^{\\dagger}K_0 + K_1^{\\dagger}K_1 = \\operatorname{diag}(1, 1-\\gamma) + \\operatorname{diag}(0, \\gamma) = I$. And $K_0|0\\rangle\\langle 0|K_0^{\\dagger} + K_1|0\\rangle\\langle 0|K_1^{\\dagger} = |0\\rangle\\langle 0|$, $K_0|1\\rangle\\langle 1|K_0^{\\dagger} + K_1|1\\rangle\\langle 1|K_1^{\\dagger} = (1-\\gamma)|1\\rangle\\langle 1| + \\gamma|0\\rangle\\langle 0|$, and $K_0|0\\rangle\\langle 1|K_0^{\\dagger} + K_1|0\\rangle\\langle 1|K_1^{\\dagger} = \\sqrt{1-\\gamma}\\,|0\\rangle\\langle 1|$.

### Exercise 3

For a two-outcome POVM with $E_1 = (2/3)|0\\rangle\\langle 0| + (1/3)|1\\rangle\\langle 1|$ and $E_2 = I - E_1$, compute the probabilities for $\\rho = (I + \\sigma_z)/2$.

**Solution.** Here $\\rho = |0\\rangle\\langle 0|$. Then $\\mathbb{P}(1) = \\operatorname{Tr}(\\rho E_1) = \\langle 0|E_1|0\\rangle = 2/3$ and $\\mathbb{P}(2) = 1/3$. For a general state $\\rho = (I + r\\sigma_z)/2$, we have $\\mathbb{P}(1) = (2/3)(1+r)/2 + (1/3)(1-r)/2 = (3+r)/6$.

## Looking backward and forward

This chapter generalized the state space from rays to density operators and the measurement framework from projective measurements to POVMs. The quantum channel formalism prepares us for the statistical mechanical treatment of open systems. The next chapter, *Canonical ensembles*, applies density operators to thermal equilibrium and derives the fundamental relations between partition functions, energy, and entropy.
`;export{e as default};