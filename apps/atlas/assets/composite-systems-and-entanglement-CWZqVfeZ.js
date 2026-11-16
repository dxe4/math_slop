var e=`---
parent_id: book-quantum-statistical-structures
chapter_id: composite-systems-and-entanglement
title: "Composite systems and entanglement"
level: graduate
estimated_minutes: 200
license: CC BY-SA 4.0
---

# Composite systems and entanglement

## Why tensor products?

When two quantum systems are brought together, the composite system is described not by a Cartesian product of state spaces but by a **tensor product** of Hilbert spaces. This mathematical structure is forced upon us by the requirement that observables of the subsystems act independently. This chapter constructs the tensor product, defines entanglement via the Schmidt decomposition, introduces the partial trace and entanglement entropy, and addresses the physical significance of nonlocal correlations.

## The tensor product Hilbert space

Given Hilbert spaces $\\mathcal{H}_A$ and $\\mathcal{H}_B$, the tensor product $\\mathcal{H}_A \\otimes \\mathcal{H}_B$ is the completion of the algebraic tensor product with respect to the inner product

$$\\bigl(\\langle a_1| \\otimes \\langle b_1|\\bigr)\\bigl(|a_2\\rangle \\otimes |b_2\\rangle\\bigr) = \\langle a_1|a_2\\rangle\\,\\langle b_1|b_2\\rangle.$$

If $\\{|i\\rangle_A\\}$ and $\\{|j\\rangle_B\\}$ are orthonormal bases, then $\\{|i\\rangle_A \\otimes |j\\rangle_B\\}$ is an orthonormal basis for $\\mathcal{H}_A \\otimes \\mathcal{H}_B$. The dimension is $\\dim(\\mathcal{H}_A)\\dim(\\mathcal{H}_B)$.

A **product state** has the form $|a\\rangle \\otimes |b\\rangle$. A general pure state is a superposition of product states. If a pure state cannot be written as a single product, it is **entangled**.

## The Schmidt decomposition

Every bipartite pure state $|\\psi\\rangle \\in \\mathcal{H}_A \\otimes \\mathcal{H}_B$ with $\\dim\\mathcal{H}_A = d_A$ and $\\dim\\mathcal{H}_B = d_B$ admits a **Schmidt decomposition**

$$|\\psi\\rangle = \\sum_{i=1}^{r}\\sqrt{\\lambda_i}\\,|a_i\\rangle \\otimes |b_i\\rangle,$$

where $r \\leq \\min(d_A, d_B)$ is the **Schmidt rank**, $\\lambda_i > 0$, $\\sum_i\\lambda_i = 1$, and $\\{|a_i\\rangle\\}$ and $\\{|b_i\\rangle\\}$ are orthonormal sets in $\\mathcal{H}_A$ and $\\mathcal{H}_B$ respectively. The state is a product state if and only if $r = 1$.

The Schmidt coefficients $\\lambda_i$ are uniquely determined as the nonzero eigenvalues of the reduced density operators.

## Reduced density operators and the partial trace

The **reduced density operator** for subsystem $A$ is obtained by tracing out $B$:

$$\\rho_A = \\operatorname{Tr}_B\\bigl(|\\psi\\rangle\\langle\\psi|\\bigr).$$

In the Schmidt basis, $\\rho_A = \\sum_i\\lambda_i|a_i\\rangle\\langle a_i|$ and $\\rho_B = \\sum_i\\lambda_i|b_i\\rangle\\langle b_i|$. The eigenvalues of both reduced states are identical: the Schmidt coefficients.

## Worked example: Bell state reduction

Consider the Bell state

$$|\\Phi^{+}\\rangle = \\frac{1}{\\sqrt{2}}\\bigl(|00\\rangle + |11\\rangle\\bigr).$$

Its density operator is

$$|\\Phi^{+}\\rangle\\langle\\Phi^{+}| = \\frac{1}{2}\\bigl(|00\\rangle\\langle 00| + |00\\rangle\\langle 11| + |11\\rangle\\langle 00| + |11\\rangle\\langle 11|\\bigr).$$

Tracing out the second qubit removes terms containing $|0\\rangle\\langle 1|$ or $|1\\rangle\\langle 0|$ in the $B$ factor because $\\langle 0|1\\rangle = 0$. The surviving terms are

$$\\rho_A = \\frac{1}{2}|0\\rangle\\langle 0| + \\frac{1}{2}|1\\rangle\\langle 1| = \\frac{I}{2}.$$

The reduced state is maximally mixed. The eigenvalues are $1/2, 1/2$, confirming that the Schmidt coefficients are $\\lambda_1 = \\lambda_2 = 1/2$.

## Entanglement entropy

For a pure bipartite state with reduced eigenvalues $\\{\\lambda_i\\}$, the **von Neumann entanglement entropy** is

$$S(\\rho_A) = -\\sum_i\\lambda_i\\ln\\lambda_i.$$

For the Bell state, $S(I/2) = -2\\cdot(1/2)\\ln(1/2) = \\ln 2$. In thermodynamic units, $S = k_B\\ln 2$. This quantifies the entanglement between the two subsystems. A product state has $S = 0$; a maximally entangled state of two $d$-level systems has $S = \\ln d$.

## No-signaling and Bell inequalities

Entanglement correlations do not enable controllable faster-than-light signaling. Local outcome statistics for measurements on subsystem $A$ are unchanged by an unconditioned trace-preserving operation on subsystem $B$. Indeed, for a local channel $\\mathcal E_B$, $\\operatorname{Tr}_B[(\\operatorname{id}\\otimes\\mathcal E_B)(\\rho_{AB})]=\\rho_A$. Postselecting a particular outcome on $B$ can change the conditional state of $A$, but selecting that subensemble requires classical communication and cannot signal by itself.

**Bell inequalities** distinguish quantum correlations from local hidden-variable models under stated independence and locality assumptions. The CHSH inequality states that for local hidden variables,

$$|E(a,b) - E(a,b') + E(a',b) + E(a',b')| \\leq 2,$$

where $E(a,b)$ is the correlation for settings $a,b$. Quantum mechanics predicts violations up to $2\\sqrt{2}$ for entangled states.

## Common error: entanglement as classical correlation

A common misconception is that entanglement is merely classical correlation. If Alice and Bob share a classical random bit (0 or 1 with equal probability), each has a marginal distribution of $1/2$, matching the Bell state reduced state. However, the classical joint distribution is separable: $P(0,0) = P(1,1) = 1/2$ can be written as a convex combination of product distributions. The Bell state cannot. Moreover, classical correlations cannot violate Bell inequalities.

## Practice exercises

### Exercise 1

Find the Schmidt decomposition of $|\\psi\\rangle = \\frac{1}{2}\\bigl(|00\\rangle + |01\\rangle + |10\\rangle + |11\\rangle\\bigr)$.

**Solution.** Factor the state: $|\\psi\\rangle = \\frac{1}{2}(|0\\rangle + |1\\rangle) \\otimes (|0\\rangle + |1\\rangle) = |+\\rangle \\otimes |+\\rangle$. The Schmidt rank is $r = 1$ with $\\lambda_1 = 1$. The state is a product state, not entangled.

### Exercise 2

For $|\\psi\\rangle = \\frac{1}{\\sqrt{3}}\\bigl(|00\\rangle + |01\\rangle + |10\\rangle\\bigr)$, compute the reduced density matrix $\\rho_A$ and its eigenvalues.

**Solution.** Write $|\\psi\\rangle = \\frac{1}{\\sqrt{3}}|0\\rangle\\otimes(|0\\rangle+|1\\rangle) + \\frac{1}{\\sqrt{3}}|1\\rangle\\otimes|0\\rangle$. The density operator is

$$|\\psi\\rangle\\langle\\psi| = \\frac{1}{3}\\bigl(|00\\rangle\\langle 00| + |00\\rangle\\langle 01| + |00\\rangle\\langle 10| + |01\\rangle\\langle 00| + |01\\rangle\\langle 01| + |01\\rangle\\langle 10| + |10\\rangle\\langle 00| + |10\\rangle\\langle 01| + |10\\rangle\\langle 10|\\bigr).$$

Tracing out $B$:

$$\\rho_A = \\frac{1}{3}\\bigl(2|0\\rangle\\langle 0| + |0\\rangle\\langle 1| + |1\\rangle\\langle 0| + |1\\rangle\\langle 1|\\bigr) = \\frac{1}{3}\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}.$$

The eigenvalues are $(3 \\pm \\sqrt{5})/6$, approximately $0.873$ and $0.127$. The entanglement entropy is $S = -\\lambda_1\\ln\\lambda_1 - \\lambda_2\\ln\\lambda_2 \\approx 0.381$ nats.

### Exercise 3

In finite dimensions, show that the partial trace is basis-independent: if $\\{|j\\rangle\\}$ and $\\{|k\\rangle\\}$ are orthonormal bases for $\\mathcal{H}_B$, then $\\sum_j\\langle j|_B O |j\\rangle_B = \\sum_k\\langle k|_B O |k\\rangle_B$ for any operator $O$ on $\\mathcal{H}_A \\otimes \\mathcal{H}_B$. (In infinite dimensions, take $O$ trace class.)

**Solution.** Write $|j\\rangle = \\sum_k U_{jk}|k\\rangle$ where $U$ is unitary. Then

$$\\sum_j\\langle j|O|j\\rangle = \\sum_{j,k,l}U_{jk}^{*}U_{jl}\\langle k|O|l\\rangle = \\sum_{k,l}(U^{\\dagger}U)_{lk}\\langle k|O|l\\rangle = \\sum_k\\langle k|O|k\\rangle.$$

## Looking backward and forward

This chapter introduced the tensor product, the mathematical structure that distinguishes quantum mechanics from single-particle theory. Entanglement is not a property of individual systems but of their joint state. The partial trace and reduced density operators will be essential in the next chapter, *Density operators and general measurements*, where we extend the state space beyond pure states and introduce the most general measurement formalism.
`;export{e as default};