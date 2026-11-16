var e=`---
parent_id: book-quantum-statistical-structures
matter_id: retained-quantum-unitary-dynamics-and-generators
title: "Unitary dynamics and generators"
level: graduate
estimated_minutes: 190
license: CC BY-SA 4.0
---

# Unitary dynamics and generators

## Why unitary evolution?

The previous chapters established that pure states are rays and that observables are self-adjoint operators. We now ask how a closed quantum state changes in time. A surjective complex-linear evolution that preserves norms (and hence inner products by polarization) is unitary. Preserving only the trace, total probability, or normalized-ray transition probabilities without fixing vector norms would not be enough. This chapter develops the Schrödinger and Heisenberg pictures, states Stone's theorem, and warns about the domain subtleties that arise when generators are unbounded.

## The Schrödinger picture

In the **Schrödinger picture** the state evolves while observables remain fixed. For a time-independent self-adjoint Hamiltonian $H$, the evolution operator is

$$U(t) = e^{-iHt/\\hbar}.$$

This is a **strongly continuous one-parameter unitary group**: $U(t)^{\\dagger}U(t) = I$ for all $t \\in \\mathbb{R}$, $U(0) = I$, $U(t+s) = U(t)U(s)$, and for every $|\\psi\\rangle \\in \\mathcal{H}$ the map $t \\mapsto U(t)|\\psi\\rangle$ is continuous in the norm topology.

The state $|\\psi(t)\\rangle = U(t)|\\psi(0)\\rangle$ solves the Schrödinger equation

$$i\\hbar\\frac{d}{dt}|\\psi(t)\\rangle = H|\\psi(t)\\rangle$$

for all initial states $|\\psi(0)\\rangle \\in D(H)$. The domain requirement is essential: if $|\\psi(0)\\rangle \\notin D(H)$, the derivative may not exist in the Hilbert-space norm.

## Stone's theorem

Stone's theorem provides the converse: every strongly continuous one-parameter unitary group $\\{U(t)\\}_{t\\in\\mathbb{R}}$ on a Hilbert space $\\mathcal{H}$ has a unique self-adjoint generator $H$ such that $U(t) = e^{-iHt/\\hbar}$. The generator is recovered by

$$H|\\psi\\rangle = i\\hbar\\lim_{t\\to 0}\\frac{U(t)|\\psi\\rangle - |\\psi\\rangle}{t},$$

with domain $D(H)$ consisting of all $|\\psi\\rangle$ for which this limit exists. This theorem guarantees that unitary evolution and self-adjoint generators are two sides of the same coin.

## The Heisenberg picture

In the **Heisenberg picture** states are fixed and observables evolve:

$$A_{H}(t) = U(t)^{\\dagger}A\\,U(t).$$

On a suitable common domain, the Heisenberg equation of motion holds:

$$\\frac{dA_{H}}{dt} = \\frac{i}{\\hbar}[H, A_{H}(t)] + \\Bigl(\\frac{\\partial A}{\\partial t}\\Bigr)_{H}.$$

The commutator $[H, A_{H}] = HA_{H} - A_{H}H$ is defined only on vectors in the intersection $D(HA_{H}) \\cap D(A_{H}H)$. For bounded $A$ and $H$, this presents no difficulty. For unbounded operators---the rule in quantum mechanics---domain invariance cannot be ignored. A formal commutator may fail to define an operator on the state under discussion.

## Worked example: spin precession

Consider a spin-1/2 particle in a constant magnetic field along the $z$-axis. The Hamiltonian is $H = -(\\hbar\\omega/2)\\sigma_{z}$ with $\\omega = \\gamma B$. The evolution operator is

$$U(t) = e^{i\\omega t\\sigma_{z}/2} = \\cos\\Bigl(\\frac{\\omega t}{2}\\Bigr)I + i\\sin\\Bigl(\\frac{\\omega t}{2}\\Bigr)\\sigma_{z}.$$

For an initial state $|\\psi(0)\\rangle = |+\\rangle = (|0\\rangle + |1\\rangle)/\\sqrt{2}$, we compute

$$|\\psi(t)\\rangle = U(t)|+\\rangle = \\frac{1}{\\sqrt{2}}\\Bigl(e^{i\\omega t/2}|0\\rangle + e^{-i\\omega t/2}|1\\rangle\\Bigr).$$

The expectation of $\\sigma_{x}$ oscillates:

$$\\langle\\sigma_{x}\\rangle(t) = \\langle\\psi(t)|\\sigma_{x}|\\psi(t)\\rangle = \\cos(\\omega t).$$

This is Larmor precession: the Bloch vector (introduced in the next chapter) rotates about the $z$-axis at angular frequency $\\omega$.

## Time-dependent Hamiltonians

When $H$ depends on time, the simple exponential $e^{-iHt/\\hbar}$ fails because Hamiltonians at different times may not commute: $[H(t_1), H(t_2)] \\neq 0$. The correct evolution is given by the **time-ordered exponential**

$$U(t, t_0) = \\mathcal{T}\\exp\\Bigl(-\\frac{i}{\\hbar}\\int_{t_0}^{t}H(t')\\,dt'\\Bigr),$$

or more rigorously as the solution of the operator differential equation $i\\hbar\\,\\partial_{t}U(t,t_0) = H(t)U(t,t_0)$ with $U(t_0,t_0) = I$. Existence and uniqueness require regularity hypotheses on $H(t)$, such as strong continuity and a common dense domain stable under the evolution.

## Common error: ignoring domains

A common mistake is to manipulate formal commutators of unbounded operators as if they were matrices. For example, $[X, P] = i\\hbar I$ is often written without specifying the domain. The position operator $X$ and momentum operator $P$ are unbounded on $L^{2}(\\mathbb{R})$. Their commutator is defined on the Schwartz space $\\mathcal{S}(\\mathbb{R})$, which is dense and stable under both operators, but not on the whole Hilbert space. Applying $[X,P]$ to a vector outside the domain leads to meaningless expressions.

Another error is to assume $e^{A+B} = e^{A}e^{B}$ for noncommuting operators. The Baker–Campbell–Hausdorff formula gives the correction, and when $[A,B]$ commutes with both $A$ and $B$, one has $e^{A+B} = e^{A}e^{B}e^{-[A,B]/2}$.

## Practice exercises

### Exercise 1

Verify that $U(t) = e^{-iHt/\\hbar}$ is unitary when $H = H^{\\dagger}$.

**Solution.** Since $H$ is self-adjoint, the spectral theorem gives $H = \\int\\lambda\\,dP(\\lambda)$. Then $U(t) = \\int e^{-i\\lambda t/\\hbar}\\,dP(\\lambda)$ and $U(t)^{\\dagger} = \\int e^{i\\lambda t/\\hbar}\\,dP(\\lambda)$. Their product is $\\int e^{-i\\lambda t/\\hbar}e^{i\\lambda t/\\hbar}\\,dP(\\lambda) = \\int dP(\\lambda) = I$. Similarly $U(t)U(t)^{\\dagger} = I$.

### Exercise 2

For the spin precession example, compute $\\langle\\sigma_{y}\\rangle(t)$ and $\\langle\\sigma_{z}\\rangle(t)$ and show that the Bloch vector has constant length.

**Solution.** With $|\\psi(t)\\rangle$ as above, $\\langle\\sigma_{z}\\rangle(t) = 0$ because the probabilities of $|0\\rangle$ and $|1\\rangle$ remain equal. For $\\sigma_{y}$,

$$\\langle\\sigma_{y}\\rangle(t) = \\frac{1}{2}\\bigl(e^{-i\\omega t/2}\\langle 0| + e^{i\\omega t/2}\\langle 1|\\bigr)\\sigma_{y}\\bigl(e^{i\\omega t/2}|0\\rangle + e^{-i\\omega t/2}|1\\rangle\\bigr).$$

Using the standard matrix $\\sigma_y=\\begin{pmatrix}0&-i\\\\ i&0\\end{pmatrix}$, so $\\sigma_y|0\\rangle=i|1\\rangle$ and $\\sigma_y|1\\rangle=-i|0\\rangle$, we obtain $\\langle\\sigma_y\\rangle(t)=-\\sin(\\omega t)$. The squared length is $\\cos^{2}(\\omega t) + \\sin^{2}(\\omega t) + 0 = 1$, confirming that the state remains pure.

### Exercise 3

Let $H(t)$ be a continuous family of finite-dimensional self-adjoint matrices. Show that if $[H(t_1), H(t_2)] = 0$ for all $t_1,t_2$, then $U(t,t_0)=\\exp\\bigl(-(i/\\hbar)\\int_{t_0}^{t}H(t')\\,dt'\\bigr)$.

**Solution.** In finite dimensions the commuting self-adjoint matrices are simultaneously diagonalizable, with a common decomposition into joint eigenspaces. In that basis, each component evolves according to the scalar Schrödinger equation $i\\hbar\\dot c_n(t)=E_n(t)c_n(t)$, with solution $c_n(t)=\\exp\\bigl(-(i/\\hbar)\\int_{t_0}^{t}E_n(t')\\,dt'\\bigr)c_n(t_0)$. Assembling the components gives the claimed operator exponential. For unbounded Hamiltonians, equality of formal commutators on a common domain is not enough; one needs suitable domain control and strong commutation of the spectral measures.

## Looking backward and forward

This chapter placed closed-system dynamics on a rigorous footing: a surjective complex-linear evolution that preserves norms, equivalently inner products, is unitary, and Stone's theorem gives a self-adjoint generator for a strongly continuous one-parameter unitary group. The Heisenberg picture makes contact with classical mechanics through the commutator analogue of the Poisson bracket. The next chapter, *Two-state systems and Bloch geometry*, specializes to the simplest nontrivial Hilbert space and develops the geometric picture that underlies much of quantum information theory.
`;export{e as default};