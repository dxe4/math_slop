var e=`---
parent_id: book-quantum-statistical-structures
chapter_id: canonical-ensembles
title: "Canonical ensembles"
level: graduate
estimated_minutes: 200
license: CC BY-SA 4.0
---

# Canonical ensembles

## From quantum states to thermal states

The preceding chapters developed the formalism of pure states, observables, and density operators in isolated quantum systems. Real experiments, however, are never perfectly isolated. A system in contact with a thermal reservoir at fixed temperature is described not by a pure state but by a **canonical ensemble**. This chapter defines the canonical density operator, derives the fundamental thermodynamic identities from the partition function, and works the paradigmatic two-level example in full detail.

## The canonical density operator

Consider a quantum system with Hamiltonian $H$ weakly coupled to a thermal reservoir at temperature $T$. In the thermodynamic limit of a large reservoir, the equilibrium state of the system is the **canonical density operator**

$$\\rho_{\\beta} = \\frac{e^{-\\beta H}}{Z}, \\qquad Z = \\operatorname{Tr}(e^{-\\beta H}), \\qquad \\beta = \\frac{1}{k_{B}T},$$

provided $e^{-\\beta H}$ is trace class so that $Z < \\infty$. The operator $e^{-\\beta H}$ is defined by the functional calculus: if $H = \\sum_n E_n |n\\rangle\\langle n|$ is the spectral decomposition, then $e^{-\\beta H} = \\sum_n e^{-\\beta E_n}|n\\rangle\\langle n|$.

For a finite-dimensional system, $Z$ is always finite for $\\beta > 0$. For infinite-dimensional systems, convergence of the trace requires that the spectrum grow sufficiently rapidly. The harmonic oscillator satisfies this because $E_n \\propto n$.

## Thermodynamic potentials

The **Helmholtz free energy** is

$$F = -\\beta^{-1}\\ln Z = -k_{B}T\\ln Z.$$

The **mean energy** follows from differentiation:

$$U = \\langle H\\rangle = \\operatorname{Tr}(\\rho_{\\beta}H) = -\\partial_{\\beta}\\ln Z = \\frac{\\partial(\\beta F)}{\\partial\\beta}.$$

The **energy variance** is

$$\\operatorname{Var}(H) = \\langle H^{2}\\rangle - \\langle H\\rangle^{2} = \\partial_{\\beta}^{2}\\ln Z.$$

The **heat capacity at constant volume** is

$$C_{V} = \\Bigl(\\frac{\\partial U}{\\partial T}\\Bigr)_{V} = \\frac{\\operatorname{Var}(H)}{k_{B}T^{2}} \\geq 0.$$

Nonnegativity follows because variance is always nonnegative.

The **von Neumann entropy** of the canonical state is

$$S = -k_{B}\\operatorname{Tr}(\\rho_{\\beta}\\ln\\rho_{\\beta}) = k_{B}(\\ln Z + \\beta U) = \\frac{U - F}{T}.$$

These derivatives assume parameter-independent energy levels or account for parameter dependence separately. Differentiation under a trace needs analytic control in infinite systems.

## Worked example: two-level system

Consider a system with energy eigenvalues $0$ and $\\varepsilon > 0$. The partition function is

$$Z = \\operatorname{Tr}(e^{-\\beta H}) = e^{-\\beta\\cdot 0} + e^{-\\beta\\varepsilon} = 1 + e^{-\\beta\\varepsilon}.$$

The probabilities are

$$p_0 = \\frac{1}{Z} = \\frac{1}{1 + e^{-\\beta\\varepsilon}}, \\qquad p_{\\varepsilon} = \\frac{e^{-\\beta\\varepsilon}}{1 + e^{-\\beta\\varepsilon}} = \\frac{1}{e^{\\beta\\varepsilon} + 1}.$$

The mean energy is

$$U = 0\\cdot p_0 + \\varepsilon\\cdot p_{\\varepsilon} = \\frac{\\varepsilon}{e^{\\beta\\varepsilon} + 1}.$$

The variance is

$$\\operatorname{Var}(H) = \\varepsilon^{2}p_{\\varepsilon}(1 - p_{\\varepsilon}) = \\frac{\\varepsilon^{2}e^{\\beta\\varepsilon}}{(e^{\\beta\\varepsilon} + 1)^{2}}.$$

At low temperature ($\\beta\\varepsilon \\gg 1$), $U \\to 0$ and $C_V \\to 0$ exponentially. At high temperature ($\\beta\\varepsilon \\ll 1$), $U \\to \\varepsilon/2$ and $C_V \\to 0$ as $1/T^{2}$. The maximum heat capacity occurs near $k_{B}T \\approx 0.417\\varepsilon$.

**Important:** the Fermi-shaped algebra $p_{\\varepsilon} = 1/(e^{\\beta\\varepsilon} + 1)$ arises from two discrete levels, not automatically from a gas of fermions. The same formula appears in fermionic statistics, but its origin here is purely the Boltzmann weight over two states.

## Classical analogy

For a classical system with Hamiltonian $H(q,p)$, the canonical probability density is proportional to $e^{-\\beta H(q,p)}$. The partition function is a phase-space integral:

$$Z_{\\text{cl}} = \\frac{1}{h^{d}N!}\\int e^{-\\beta H(q,p)}\\,d^{d}q\\,d^{d}p,$$

where the prefactor depends on the counting convention (Planck's constant $h$ for each pair of conjugate variables, $N!$ for identical particles). The measure and its normalization must be stated explicitly.

## Common error: confusing ensembles

A frequent mistake is to apply the canonical formula to an isolated system with fixed energy. The canonical ensemble is appropriate when the system exchanges energy with a reservoir. For an isolated system with energy known to lie in a narrow shell, the **microcanonical ensemble** is the correct description. The canonical distribution can be derived from the microcanonical ensemble by considering a small subsystem of a large isolated composite, but the derivation requires specific assumptions about the density of states.

## Practice exercises

### Exercise 1

Show that for the canonical ensemble, $\\partial U/\\partial\\beta = -\\operatorname{Var}(H)$ and deduce that $U$ is a decreasing function of $\\beta$.

**Solution.** We have $U = -\\partial_{\\beta}\\ln Z$. Differentiating again,

$$\\frac{\\partial U}{\\partial\\beta} = -\\partial_{\\beta}^{2}\\ln Z = -\\operatorname{Var}(H) \\leq 0.$$

Since $\\beta = 1/(k_{B}T)$, an increase in $\\beta$ corresponds to a decrease in $T$. Thus $U$ decreases as $\\beta$ increases: higher temperature means higher mean energy.

### Exercise 2

For a quantum harmonic oscillator with $E_n = \\hbar\\omega(n + 1/2)$, verify that $C_V \\to k_{B}$ as $T \\to \\infty$.

**Solution.** From Chapter 6, $U = \\hbar\\omega/2 + \\hbar\\omega/(e^{\\beta\\hbar\\omega} - 1)$. Then

$$C_V = \\frac{\\partial U}{\\partial T} = \\frac{\\partial U}{\\partial\\beta}\\frac{\\partial\\beta}{\\partial T} = \\frac{(\\hbar\\omega)^{2}e^{\\beta\\hbar\\omega}}{(e^{\\beta\\hbar\\omega} - 1)^{2}}\\cdot\\frac{1}{k_{B}T^{2}} = k_{B}\\frac{x^{2}e^{x}}{(e^{x} - 1)^{2}},$$

where $x = \\beta\\hbar\\omega$. As $x \\to 0$, $e^{x} \\approx 1 + x$, so $C_V \\approx k_{B}x^{2}(1+x)/x^{2} = k_{B}(1+x) \\to k_{B}$.

### Exercise 3

A system has three energy levels $0, \\varepsilon, 2\\varepsilon$. Compute the partition function, mean energy, and entropy as functions of $\\beta$.

**Solution.** $Z = 1 + e^{-\\beta\\varepsilon} + e^{-2\\beta\\varepsilon}$. The mean energy is $U = (\\varepsilon e^{-\\beta\\varepsilon} + 2\\varepsilon e^{-2\\beta\\varepsilon})/Z$. The probabilities are $p_0 = 1/Z$, $p_{\\varepsilon} = e^{-\\beta\\varepsilon}/Z$, $p_{2\\varepsilon} = e^{-2\\beta\\varepsilon}/Z$. The entropy is $S = -k_{B}(p_0\\ln p_0 + p_{\\varepsilon}\\ln p_{\\varepsilon} + p_{2\\varepsilon}\\ln p_{2\\varepsilon})$.

## Looking backward and forward

This chapter bridged quantum mechanics and statistical mechanics through the canonical ensemble. The density operator formalism of *Density operators and general measurements* is essential: a thermal state is a mixed state, not a pure energy eigenstate. The next chapter, *Ensembles and thermodynamic limits*, introduces the microcanonical and grand canonical ensembles and asks what happens when the system size becomes macroscopic.
`;export{e as default};