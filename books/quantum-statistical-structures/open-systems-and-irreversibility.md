
# Open systems and irreversibility

## Isolated versus open quantum systems

The preceding chapters largely treated isolated quantum systems evolving unitarily. Real systems, however, are never perfectly isolated. An atom in a laser field, a spin in a crystal lattice, or a qubit on a chip all interact with environments whose microscopic details are unknown or uncontrollable. This chapter develops the theory of open quantum systems, states and motivates the finite-dimensional Lindblad master equation under Markovian approximations, and addresses the apparent conflict between microscopic reversibility and macroscopic irreversibility.

## Reduced dynamics and nonunitary evolution

Consider a total system $S + E$ with Hilbert space $\mathcal{H}_S \otimes \mathcal{H}_E$. If the total state is pure and evolves unitarily as $|\Psi(t)\rangle = U(t)|\Psi(0)\rangle$, the reduced state of the system is

$$\rho_S(t) = \operatorname{Tr}_E\bigl(|\Psi(t)\rangle\langle\Psi(t)|\bigr).$$

Even though the total evolution is unitary, the reduced dynamics are generally **nonunitary**. The system loses coherence, exchanges energy with the environment, and may approach a thermal equilibrium state.

## The Lindblad master equation

For a finite-dimensional system, under the assumptions of weak coupling, short environmental correlation times, and an initially factorized state $\rho(0) = \rho_S(0) \otimes \rho_E$, the reduced dynamics can often be approximated by a **quantum dynamical semigroup** with a generator in **Lindblad form**:

$$\dot{\rho} = -\frac{i}{\hbar}[H, \rho] + \sum_k\Bigl(L_k\rho L_k^{\dagger} - \frac{1}{2}\{L_k^{\dagger}L_k, \rho\}\Bigr).$$

Here $H$ is the effective system Hamiltonian (which may include Lamb-shift corrections from the environment), and $\{L_k\}$ are the **Lindblad operators** or **jump operators**. Each term $L_k\rho L_k^{\dagger}$ describes a quantum jump; the anticommutator term ensures trace preservation.

With bounded finite-dimensional $H$ and $L_k$, the Lindblad form guarantees that the evolution is completely positive and trace-preserving for all $t \geq 0$. Infinite-dimensional generators require domain and continuity hypotheses not developed here. The equation does not describe every environment: memory effects, initial correlations, strong coupling, and finite recurrence times can invalidate the Markov semigroup approximation.

## Worked example: amplitude damping

Consider a two-level system with ground state $|0\rangle$ and excited state $|1\rangle$, coupled to a zero-temperature bosonic bath. The Lindblad operator is $L = \sqrt{\gamma}\,|0\rangle\langle 1|$. The master equation is

$$\dot{\rho} = -\frac{i}{\hbar}[H, \rho] + \gamma\Bigl(|0\rangle\langle 1|\rho|1\rangle\langle 0| - \frac{1}{2}\{|1\rangle\langle 1|, \rho\}\Bigr).$$

In the interaction picture with $H = 0$, the equations for the matrix elements are

$$\dot{\rho}_{00} = \gamma\rho_{11}, \qquad \dot{\rho}_{11} = -\gamma\rho_{11}, \qquad \dot{\rho}_{01} = -\frac{\gamma}{2}\rho_{01}.$$

The solutions are $\rho_{11}(t) = \rho_{11}(0)e^{-\gamma t}$, $\rho_{00}(t) = 1 - \rho_{11}(t)$, and $\rho_{01}(t) = \rho_{01}(0)e^{-\gamma t/2}$. The excited state population decays exponentially, and the off-diagonal coherence decays at half the rate. As $t \to \infty$, $\rho \to |0\rangle\langle 0|$: the system thermalizes to the ground state.

## Decoherence

**Decoherence** is the rapid suppression of interference between selected robust states in a reduced description. It explains why superpositions of macroscopically distinct states are not observed in everyday experience. However, decoherence does not by itself select one actual measurement outcome without an interpretation or further postulate. It converts a coherent superposition into an incoherent mixture *relative to a preferred basis* determined by the system-environment interaction, but the full density matrix still describes an ensemble, not a definite outcome.

## Entropy and the arrow of time

The von Neumann entropy of a subsystem may increase while the total pure state's entropy stays zero. For a total pure state $|\Psi\rangle$, $S(\rho_{\text{tot}}) = 0$ at all times. Yet $S(\rho_S)$ typically increases as the system entangles with its environment.

Thermodynamic irreversibility therefore involves coarse-graining, environment, typicality, limits, or probabilistic preparation---not contradiction with global unitarity. The second law of thermodynamics is recovered when one restricts attention to a subsystem and a coarse-grained set of observables.

## Common error: Lindblad as universal

A common mistake is to assume that every open quantum system is described by a Lindblad master equation. A Born-Markov approximation, using weak coupling and rapid environmental decay of correlations, is part of a common physical derivation; it is not an assumption of the abstract finite-dimensional GKSL theorem: the generator of a norm-continuous semigroup of completely positive, trace-preserving maps has the displayed Lindblad form. Exercise 3 with $\gamma\geq0$ defines such a dephasing semigroup as an abstract model without specifying a microscopic environment. Online correction: this separates physical derivation assumptions from the abstract generator theorem; the retained draft PDF predates this clarification. Strong coupling, structured environments, low temperatures, and initial system-environment correlations can all lead to non-Markovian dynamics with memory kernels. Numerical methods such as hierarchical equations of motion or tensor-network techniques may be needed in these regimes.

## Practice exercises

### Exercise 1

Show that the Lindblad master equation preserves trace: $\partial_t\operatorname{Tr}(\rho) = 0$.

**Solution.** Taking the trace of the Lindblad equation,

$$\partial_t\operatorname{Tr}(\rho) = -\frac{i}{\hbar}\operatorname{Tr}([H, \rho]) + \sum_k\Bigl(\operatorname{Tr}(L_k\rho L_k^{\dagger}) - \frac{1}{2}\operatorname{Tr}(L_k^{\dagger}L_k\rho) - \frac{1}{2}\operatorname{Tr}(\rho L_k^{\dagger}L_k)\Bigr).$$

The commutator term vanishes because $\operatorname{Tr}(H\rho) = \operatorname{Tr}(\rho H)$. Using cyclicity of trace, $\operatorname{Tr}(L_k\rho L_k^{\dagger}) = \operatorname{Tr}(L_k^{\dagger}L_k\rho)$. Thus the sum vanishes term by term, and $\partial_t\operatorname{Tr}(\rho) = 0$.

### Exercise 2

For the amplitude-damping channel with Kraus operators $K_0 = |0\rangle\langle 0| + \sqrt{1-\gamma}\,|1\rangle\langle 1|$ and $K_1 = \sqrt{\gamma}\,|0\rangle\langle 1|$, verify that $\mathcal{E}(\rho) = K_0\rho K_0^{\dagger} + K_1\rho K_1^{\dagger}$ satisfies the Lindblad equation in the infinitesimal limit $\gamma \to \dot{\gamma}\,dt$.

**Solution.** For small $\gamma$, expand $K_0 \approx I - (\gamma/2)|1\rangle\langle 1|$ and $K_1 \approx \sqrt{\gamma}\,|0\rangle\langle 1|$. Then

$$\mathcal{E}(\rho) \approx \rho - \frac{\gamma}{2}\{|1\rangle\langle 1|, \rho\} + \gamma\,|0\rangle\langle 1|\rho|1\rangle\langle 0|.$$

Dividing by $dt$ and identifying $\gamma/dt$ as the rate gives the Lindblad form with $L = \sqrt{\dot{\gamma}}\,|0\rangle\langle 1|$.

### Exercise 3

A qubit undergoes pure dephasing with Lindblad operator $L = \sqrt{\gamma}\,\sigma_z$. Solve for $\rho(t)$ given $\rho(0) = (I + \mathbf{r}(0)\cdot\boldsymbol{\sigma})/2$.

**Solution.** The master equation is $\dot{\rho} = \gamma(\sigma_z\rho\sigma_z - \rho)$. In the Bloch representation, $\sigma_z\rho\sigma_z = (I + r_x\sigma_x(-1) + r_y\sigma_y(-1) + r_z\sigma_z)/2 = (I - r_x\sigma_x - r_y\sigma_y + r_z\sigma_z)/2$. Thus $\dot{r}_x = -2\gamma r_x$, $\dot{r}_y = -2\gamma r_y$, $\dot{r}_z = 0$. The solution is $r_x(t) = r_x(0)e^{-2\gamma t}$, $r_y(t) = r_y(0)e^{-2\gamma t}$, $r_z(t) = r_z(0)$. The Bloch vector shrinks toward the $z$-axis: coherence is lost but populations are preserved.

## Looking backward and forward

This chapter moved beyond isolated unitary dynamics to describe realistic open quantum systems. The Lindblad equation provides a tractable framework for decoherence and dissipation, but its domain of validity must be respected. The final chapter, *Symmetry, gauge, and field-theory boundary*, returns to foundational questions and sketches the path from quantum mechanics to quantum field theory.
