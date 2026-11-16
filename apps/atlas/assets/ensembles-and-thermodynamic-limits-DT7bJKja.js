var e=`---
parent_id: book-quantum-statistical-structures
chapter_id: ensembles-and-thermodynamic-limits
title: "Ensembles and thermodynamic limits"
level: graduate
estimated_minutes: 190
license: CC BY-SA 4.0
---

# Ensembles and thermodynamic limits

## Three ensembles for three experimental situations

The canonical ensemble describes a system at fixed temperature. Two other ensembles are essential for different experimental preparations. This chapter defines the microcanonical ensemble for isolated systems, the grand canonical ensemble for systems that exchange both energy and particles, and investigates the **thermodynamic limit** in which particle number and volume diverge with controlled density. The key result is that phase transitions---sharp nonanalyticities in free energy---emerge only in this limit.

## The microcanonical ensemble

An isolated system with Hamiltonian $H$ and fixed energy in a narrow shell $[E, E + \\Delta E]$ is described by the **microcanonical density operator**

$$\\rho_{\\text{mc}} = \\frac{1}{\\Omega(E, \\Delta E)}\\sum_{n: E_n \\in [E, E+\\Delta E]} |n\\rangle\\langle n|,$$

where $\\Omega(E,\\Delta E)$ counts energy eigenstates, including degeneracy, and must be finite and positive. For a finite discrete spectrum, narrowing the shell need not define a state: with energies $0,\\varepsilon$, $E=\\varepsilon/2$ and $0<\\Delta E<\\varepsilon/2$, the shell is empty. At an eigenvalue, a sufficiently narrow nonempty shell gives the normalized projector onto that eigenspace. A classical energy-surface measure or a smoothed/thermodynamic limit requires its own justified prescription; it does not follow by taking $\\Delta E\\to0$ in an arbitrary finite quantum system. This online clarification postdates the retained draft PDF. The **Boltzmann entropy** is

$$S = k_{B}\\ln\\Omega(E, \\Delta E).$$

The temperature is defined by $1/T = \\partial S/\\partial E$. For a finite system with discrete spectrum, $\\Omega$ is a step function and $T$ is defined only in an approximate sense.

## The grand canonical ensemble

When a system can exchange both energy and particles with a reservoir at fixed temperature $T$ and chemical potential $\\mu$, the equilibrium state is the **grand canonical density operator**

$$\\rho_{\\text{gc}} = \\frac{e^{-\\beta(H - \\mu N)}}{\\Xi}, \\qquad \\Xi = \\operatorname{Tr}(e^{-\\beta(H - \\mu N)}),$$

provided the exponential is trace class. Here $N$ is the particle number operator. One normally assumes $[H, N] = 0$ so that energy and particle number define compatible equilibrium constraints. If $[H, N] \\neq 0$, the grand canonical state is still defined but its interpretation requires care.

The **grand potential** is $\\Omega_{\\text{gc}} = -\\beta^{-1}\\ln\\Xi$. The mean particle number and energy are

$$\\langle N\\rangle = \\beta^{-1}\\partial_{\\mu}\\ln\\Xi, \\qquad U = -\\partial_{\\beta}\\ln\\Xi + \\mu\\langle N\\rangle.$$

## Thermodynamic limits and phase transitions

The **thermodynamic limit** sends $N \\to \\infty$ and $V \\to \\infty$ with fixed density $n = N/V$. The free energy per volume $f = F/V$ becomes a function of intensive variables. For finite systems with finitely many levels, the partition function is a finite sum of exponentials and is analytic in $\\beta$ for all $\\beta > 0$. Therefore no literal nonanalytic phase transition occurs in a finite system.

Phase transitions emerge only in the thermodynamic limit, where the free energy may develop nonanalyticities. A first-order transition has a discontinuity in the first derivative of $f$ (e.g., latent heat); a second-order transition has a discontinuity in the second derivative (e.g., diverging heat capacity).

## Worked example: ideal gas density of states

For a noninteracting gas in a cubic box of volume $V = L^{3}$ with periodic boundary conditions, the single-particle energy levels are $\\varepsilon_{\\mathbf{k}} = \\hbar^{2}|\\mathbf{k}|^{2}/(2m)$ with $\\mathbf{k} = (2\\pi/L)\\mathbf{n}$ and $\\mathbf{n} \\in \\mathbb{Z}^{3}$. In the thermodynamic limit, the sum over states becomes an integral:

$$\\sum_{\\mathbf{k}} \\to \\frac{V}{(2\\pi)^{3}}\\int d^{3}k.$$

For one internal state (no spin degeneracy), the density of states per unit volume is

$$g(\\varepsilon) = \\frac{1}{4\\pi^{2}}\\Bigl(\\frac{2m}{\\hbar^{2}}\\Bigr)^{3/2}\\sqrt{\\varepsilon}.$$

This grows as $\\sqrt{\\varepsilon}$ and is essential for deriving the Bose–Einstein condensation criterion in the next chapter. A twofold spin degeneracy multiplies this expression by $2$, producing the often-quoted coefficient $1/(2\\pi^2)$.

## Ensemble equivalence

Under broad conditions (short-range interactions, stable potentials, thermodynamic limit), the microcanonical, canonical, and grand canonical ensembles yield the same intensive thermodynamics. However, equivalence can fail for:

- **Long-range interactions:** ordinary extensivity or additivity can fail; limits require model- and normalization-specific analysis. Failure is not universal. For fixed $J,\\beta>0$ and zero external field, the all-to-all Curie–Weiss model has $s_i\\in\\{-1,1\\}$, $M=\\sum_{i=1}^N s_i$ and $H_N=-JM^2/(2N)$. Its partition function is $Z_N=\\sum_{k=0}^N\\binom Nk e^{\\beta J(2k-N)^2/(2N)}$, and its dimensionless per-spin pressure $p_N=N^{-1}\\ln Z_N$ obeys $\\ln2\\le p_N\\le\\ln2+\\beta J/2$. Moreover, $p_N\\to\\max_{m\\in[-1,1]}\\{s(m)+\\beta Jm^2/2\\}$, where $s(m)=-q\\ln q-(1-q)\\ln(1-q)$, $q=(1+m)/2$ and $0\\ln0=0$. Binomial degeneracies, the $N+1$-term maximum bound, uniform Stirling estimates and the dense magnetization grid justify this model-specific limit; see [Friedli–Velenik, Proposition 2.5 and proof, pp. 61–63](https://www.unige.ch/~velenik/smbook/Curie-Weiss_Model.pdf). Without the $1/N$ scaling, $\\widehat H_N=-JM^2/2$ gives $\\widehat p_N\\ge\\beta JN/2+(\\ln2)/N\\to\\infty$ from the two aligned states. A pressure limit alone establishes neither additivity nor ensemble equivalence. This online correction postdates the retained draft PDF.
- **Nonconcave entropy:** the Legendre--Fenchel transform is still single-valued, but it loses the nonconcave part; transforming back produces the concave envelope, so distinct microcanonical behavior can collapse into canonical phase coexistence.
- **Finite systems:** no sharp transitions, so different ensembles give quantitatively different fluctuations.
- **Constrained phases:** metastable states may be trapped in one ensemble but not another.

Deriving a canonical distribution by maximizing entropy encodes constraints and a probability interpretation; it does not remove the need to identify the physical preparation.

## Common error: ergodicity as a theorem

Ergodicity is sometimes invoked to relate time averages and phase-space averages. It is a theorem or hypothesis about a specified dynamical system and observable class, not a universal consequence of "chaos." Most many-body systems are not rigorously ergodic in the mathematical sense, yet statistical mechanics works because of typicality and the large number of degrees of freedom, not because every trajectory uniformly explores phase space.

## Practice exercises

### Exercise 1

For the microcanonical shell $[E,E+\\Delta E]$ of a two-level system with energies $0$ and $\\varepsilon$, take $E=\\varepsilon/2$ and $\\Delta E>\\varepsilon/2$. Determine the entropy and explain why this example does not define a useful finite-system temperature derivative.

**Solution.** The shell begins above $0$, so the ground state is excluded; because $E+\\Delta E>\\varepsilon$, the excited state is included. Hence $\\Omega=1$ and $S=k_B\\ln1=0$. As $E$ moves, this finite discrete count changes by jumps, so $\\partial S/\\partial E$ is not a meaningful ordinary temperature without a smoothing or thermodynamic-limit prescription.

### Exercise 2

For an indistinguishable classical ideal gas in the dilute canonical regime, derive the thermodynamic leading term of the entropy and identify the finite-$N$ correction from Stirling's formula.

**Solution.** The single-particle partition function is $Z_1=V/\\lambda_T^3$, where $\\lambda_T=h/\\sqrt{2\\pi mk_BT}$. Gibbs counting gives $Z_N=Z_1^N/N!$. Using $\\ln N!=N\\ln N-N+O(\\ln N)$ and differentiating $F=-k_BT\\ln Z_N$,

$$S=Nk_B\\left[\\ln\\left(\\frac{V}{N\\lambda_T^3}\\right)+\\frac52\\right]+O(k_B\\ln N).$$

The displayed leading term is extensive when $N,V\\to\\infty$ at fixed density. The logarithmic finite-size correction means the exact finite-$N$ entropy is not literally homogeneous of degree one.

### Exercise 3

Explain why a system with a finite-dimensional Hilbert space cannot exhibit a true phase transition at positive temperature.

**Solution.** The canonical partition function is $Z = \\sum_{n=1}^{d}e^{-\\beta E_n}$, a finite sum of analytic functions of $\\beta$. A finite sum of analytic functions is analytic. All thermodynamic quantities are obtained by differentiating $\\ln Z$, which is also analytic where $Z > 0$. Analytic functions cannot have discontinuities or divergences in derivatives. Therefore no nonanalytic behavior---the hallmark of a phase transition---can occur.

## Looking backward and forward

This chapter placed the canonical ensemble in the broader context of statistical mechanical ensembles and explained why phase transitions are strictly infinite-system phenomena. The next chapter, *Identical particles and quantum statistics*, applies these ideas to systems of indistinguishable particles, where the quantum statistics of bosons and fermions produce dramatically different macroscopic behavior.
`;export{e as default};