
# Identical particles and quantum statistics

## Indistinguishability in quantum mechanics

In classical mechanics, identical particles can be distinguished by their trajectories. In quantum mechanics, where trajectories are not sharp, identical particles are fundamentally indistinguishable. With the ordinary Bose/Fermi symmetrization postulate adopted here, the multiparticle Hilbert space is restricted to symmetric or antisymmetric subspaces, leading to Bose–Einstein and Fermi–Dirac statistics. This chapter develops the occupation number formalism, derives the quantum distribution functions, and discusses Bose–Einstein condensation.

## Symmetric and antisymmetric states

For $N$ identical particles, the Hilbert space is the $N$-fold tensor product $\mathcal{H}^{\otimes N}$. Under that postulate, physical states transform under particle permutation according to a one-dimensional representation of the symmetric group $S_N$. For $N\ge2$, its only one-dimensional representations are the trivial and sign representations, giving two possibilities. Three spatial dimensions alone do not exclude higher-dimensional permutation representations (parastatistics), which are outside this chapter:

- **Bosons:** states are **symmetric** under any exchange of two particles.
- **Fermions:** states are **antisymmetric** under any exchange of two particles.

For two particles, a bosonic state satisfies $|\psi\rangle = P_{12}|\psi\rangle$ and a fermionic state satisfies $|\psi\rangle = -P_{12}|\psi\rangle$, where $P_{12}$ exchanges particles 1 and 2. For fermions, this implies the **Pauli exclusion principle:** no two fermions can occupy the same single-particle state.

## Occupation numbers and the grand canonical ensemble

For noninteracting particles with single-particle energies $\{\varepsilon_k\}$, it is convenient to work in the occupation number basis. The state is specified by giving the occupation $n_k$ of each single-particle level. For bosons, $n_k \in \{0, 1, 2, \ldots\}$. For fermions, $n_k \in \{0, 1\}$.

In the grand canonical ensemble, the mean occupation of a level with energy $\varepsilon$ is

$$n_{B}(\varepsilon) = \frac{1}{e^{\beta(\varepsilon - \mu)} - 1} \quad \text{(bosons)},$$
$$n_{F}(\varepsilon) = \frac{1}{e^{\beta(\varepsilon - \mu)} + 1} \quad \text{(fermions)}.$$

For bosons, convergence of the geometric series requires $\mu < \varepsilon_{\text{min}}$, the lowest single-particle energy. For fermions, $\mu$ may be positive and is called the Fermi energy at $T = 0$.

## Worked example: fermi energy of a free electron gas

Consider free fermions in three dimensions with dispersion $\varepsilon_{\mathbf{k}} = \hbar^{2}|\mathbf{k}|^{2}/(2m)$. At $T = 0$, all states with $\varepsilon < \varepsilon_F$ are occupied and all states with $\varepsilon > \varepsilon_F$ are empty. The Fermi wavevector $k_F$ satisfies

$$N = 2 \cdot \frac{V}{(2\pi)^{3}} \cdot \frac{4\pi}{3}k_F^{3},$$

where the factor of 2 accounts for spin degeneracy. Thus

$$k_F = (3\pi^{2}n)^{1/3}, \qquad \varepsilon_F = \frac{\hbar^{2}}{2m}(3\pi^{2}n)^{2/3},$$

where $n = N/V$ is the number density. The Fermi temperature is $T_F = \varepsilon_F/k_B$.

## Classical limit

In the dilute high-temperature regime where $n\lambda_T^{3} \ll 1$ with $\lambda_T = h/\sqrt{2\pi mk_BT}$ the thermal de Broglie wavelength, both quantum distributions approach the classical **Maxwell–Boltzmann** distribution:

$$n_{\text{cl}}(\varepsilon) = e^{-\beta(\varepsilon - \mu)}.$$

This limit requires the phase-space density to be small: the average interparticle spacing must exceed the thermal wavelength.

## Bose–Einstein condensation

For an ideal Bose gas in three dimensions, the total particle number is

$$N = \sum_{\mathbf{k}} \frac{1}{e^{\beta(\varepsilon_{\mathbf{k}} - \mu)} - 1}.$$

As $T$ decreases at fixed $N$, $\mu$ increases toward zero (taking $\varepsilon_{\text{min}} = 0$). The maximum number that can be accommodated in excited states is

$$N_{\text{ex}} = \frac{V}{(2\pi)^{3}}\int d^{3}k\,\frac{1}{e^{\beta\varepsilon_{\mathbf{k}}} - 1} = \frac{V}{\lambda_T^3}\zeta(3/2)=V\left(\frac{mk_BT}{2\pi\hbar^2}\right)^{3/2}\zeta(3/2),$$

where $\zeta$ is the Riemann zeta function. When $N > N_{\text{ex}}$, the excess particles must occupy the ground state. This is **Bose–Einstein condensation.** The critical temperature is

$$T_c = \frac{2\pi\hbar^{2}}{mk_B}\Bigl(\frac{n}{\zeta(3/2)}\Bigr)^{2/3}.$$

A diverging occupation formula signals a need to treat the ground state separately, not an infinite physical particle count in a finite experiment.

## Spin–statistics theorem

The connection between integer spin and bosons, half-integer spin and fermions, is the **spin–statistics theorem**. It belongs to relativistic quantum field theory under locality, positivity of the Hilbert-space metric, and Lorentz covariance hypotheses. It is **not** derivable from nonrelativistic permutation symmetry alone. In two spatial dimensions, braid statistics (anyons) are possible because the permutation group is replaced by the braid group.

## Common error: dimension dependence of BEC

Bose–Einstein condensation in an ideal gas depends critically on spatial dimension and the density of states. In a uniform two-dimensional ideal Bose gas, the integral for $N_{\text{ex}}$ diverges at $\mu = 0$, so no finite critical temperature exists for condensation into the ground state. However, in a harmonic trap the density of states is altered and BEC can occur in two dimensions. Interactions and trapping potentials change quantitative behavior in all dimensions.

## Practice exercises

### Exercise 1

Show that for fermions at $T = 0$, the mean energy per particle is $U/N = (3/5)\varepsilon_F$.

**Solution.** At $T = 0$, the energy is $U = 2\sum_{|\mathbf{k}| < k_F}\hbar^{2}|\mathbf{k}|^{2}/(2m)$. Converting the sum to an integral,

$$U = 2\cdot\frac{V}{(2\pi)^{3}}\int_{0}^{k_F}4\pi k^{2}\,dk\,\frac{\hbar^{2}k^{2}}{2m} = \frac{V}{\pi^{2}}\frac{\hbar^{2}}{2m}\frac{k_F^{5}}{5}.$$

Using $N = Vk_F^{3}/(3\pi^{2})$, we obtain $U/N = (3/5)\hbar^{2}k_F^{2}/(2m) = (3/5)\varepsilon_F$.

### Exercise 2

For a photon gas ($\mu = 0$, two polarization states, $\varepsilon = \hbar c|\mathbf{k}|$), show that the energy density is $u = aT^{4}$ with $a = \pi^{2}k_B^{4}/(15\hbar^{3}c^{3})$.

**Solution.** The energy density is

$$u = \frac{2}{(2\pi)^{3}}\int d^{3}k\,\frac{\hbar c|\mathbf{k}|}{e^{\beta\hbar c|\mathbf{k}|} - 1} = \frac{1}{\pi^{2}}\int_{0}^{\infty}dk\,\frac{\hbar ck^{3}}{e^{\beta\hbar ck} - 1}.$$

Let $x = \beta\hbar ck$. Then

$$u = \frac{(k_B T)^{4}}{\pi^{2}\hbar^{3}c^{3}}\int_{0}^{\infty}\frac{x^{3}}{e^{x} - 1}\,dx = \frac{(k_B T)^{4}}{\pi^{2}\hbar^{3}c^{3}}\cdot\frac{\pi^{4}}{15} = \frac{\pi^{2}k_B^{4}}{15\hbar^{3}c^{3}}T^{4}.$$

### Exercise 3

Show that for bosons with $\mu < 0$, the occupation number $n_B(\varepsilon)$ exceeds the classical prediction $n_{\text{cl}}(\varepsilon) = e^{-\beta(\varepsilon - \mu)}$ at all energies.

**Solution.** For $x > 0$, $e^{x} - 1 < e^{x}$, so $1/(e^{x} - 1) > 1/e^{x} = e^{-x}$. Setting $x = \beta(\varepsilon - \mu)$ gives $n_B(\varepsilon) > e^{-\beta(\varepsilon - \mu)} = n_{\text{cl}}(\varepsilon)$. The enhancement is most pronounced at low energies and is the origin of Bose–Einstein condensation.

## Looking backward and forward

This chapter applied the ensemble theory of *Ensembles and thermodynamic limits* to systems of identical particles, revealing how quantum statistics shape macroscopic behavior. Bose–Einstein condensation is a striking macroscopic quantum phenomenon. The next chapter, *Open systems and irreversibility*, leaves equilibrium behind and asks how quantum systems evolve when coupled to environments.
