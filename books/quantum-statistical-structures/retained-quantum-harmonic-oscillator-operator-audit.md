
# Harmonic oscillator as an operator audit

## A laboratory for quantum formalism

The quantum harmonic oscillator is the most important exactly solvable model in quantum mechanics. It appears in molecular vibrations, quantum field theory, phonons, and quantum optics. More importantly for our purposes, it serves as an **operator audit**: a system where one can explicitly verify every step of the spectral program---domain questions, self-adjointness, completeness of eigenfunctions, and thermodynamic limits. This chapter constructs the oscillator from ladder operators, derives the spectrum, computes the canonical partition function, and extracts the high-temperature classical limit.

## The Hamiltonian and ladder operators

The one-dimensional oscillator Hamiltonian is

$$H = \frac{P^{2}}{2m} + \frac{m\omega^{2}}{2}X^{2}.$$

Define the **dimensionless ladder operators** on the Schwartz space $\mathcal{S}(\mathbb{R})$:

$$a = \sqrt{\frac{m\omega}{2\hbar}}\,X + \frac{iP}{\sqrt{2m\hbar\omega}}, \qquad a^{\dagger} = \sqrt{\frac{m\omega}{2\hbar}}\,X - \frac{iP}{\sqrt{2m\hbar\omega}}.$$

Using $[X,P] = i\hbar I$ on $\mathcal{S}(\mathbb{R})$, one verifies

$$[a, a^{\dagger}] = I.$$

The Hamiltonian factorizes as

$$H = \hbar\omega\Bigl(a^{\dagger}a + \frac{1}{2}\Bigr) = \hbar\omega\Bigl(N + \frac{1}{2}\Bigr),$$

where $N = a^{\dagger}a$ is the **number operator**.

## The spectrum from algebraic constraints

Suppose a normalized ground state $|0\rangle$ satisfies $a|0\rangle = 0$. In the position representation this is a first-order differential equation:

$$\Bigl(\sqrt{\frac{m\omega}{2\hbar}}\,x + \frac{\hbar}{\sqrt{2m\hbar\omega}}\frac{d}{dx}\Bigr)\psi_0(x) = 0.$$

The solution is a Gaussian:

$$\psi_0(x) = \Bigl(\frac{m\omega}{\pi\hbar}\Bigr)^{1/4}\exp\Bigl(-\frac{m\omega}{2\hbar}x^{2}\Bigr).$$

The ground-state energy is $E_0 = \hbar\omega/2$.

Applying $a^{\dagger}$ repeatedly builds excited states $|n\rangle \propto (a^{\dagger})^{n}|0\rangle$ with energies

$$E_n = \hbar\omega\Bigl(n + \frac{1}{2}\Bigr), \qquad n = 0, 1, 2, \ldots$$

The algebra alone does not constitute a complete spectral proof. One must additionally show that the differential operator $H$ is self-adjoint on a suitable domain, that the ladder-generated states belong to this domain, that the eigenvectors are complete in $L^{2}(\mathbb{R})$, and that no additional spectrum exists. For the standard harmonic oscillator these steps are rigorous; for a general potential, a copied ladder argument may have no meaning.

## Canonical partition function

For a quantum oscillator weakly coupled to a thermal reservoir at temperature $T$, the canonical density operator is $\rho_{\beta} = e^{-\beta H}/Z$ with $\beta = 1/(k_{B}T)$. The partition function is

$$Z = \operatorname{Tr}(e^{-\beta H}) = \sum_{n=0}^{\infty}e^{-\beta\hbar\omega(n+1/2)} = \frac{e^{-\beta\hbar\omega/2}}{1 - e^{-\beta\hbar\omega}}.$$

The geometric series converges for all $\beta > 0$ because $e^{-\beta\hbar\omega} < 1$.

The mean energy follows from $U = -\partial_{\beta}\ln Z$:

$$U = \frac{\hbar\omega}{2} + \frac{\hbar\omega}{e^{\beta\hbar\omega} - 1}.$$

At low temperature ($\beta\hbar\omega \gg 1$), $U \to \hbar\omega/2$: the zero-point energy. At high temperature ($\beta\hbar\omega \ll 1$), expand the exponential:

$$\frac{1}{e^{\beta\hbar\omega} - 1} = \frac{1}{\beta\hbar\omega + (\beta\hbar\omega)^{2}/2 + \cdots} = \frac{1}{\beta\hbar\omega} - \frac{1}{2} + O(\beta\hbar\omega).$$

Thus

$$U = \frac{\hbar\omega}{2} + \hbar\omega\Bigl(\frac{1}{\beta\hbar\omega} - \frac{1}{2} + O(\beta\hbar\omega)\Bigr) = \frac{1}{\beta} + O\bigl(\beta(\hbar\omega)^2\bigr) = k_{B}T + O\Bigl(\frac{(\hbar\omega)^{2}}{k_{B}T}\Bigr).$$

The zero-point term and the first subleading thermal term cancel, recovering classical equipartition: one quadratic degree of freedom contributes $k_{B}T/2$ to kinetic energy and $k_{B}T/2$ to potential energy. This limit uses $\beta\hbar\omega \ll 1$, not simply "large temperature" without a scale.

## Worked example: heat capacity

The heat capacity at constant volume is $C_{V} = (\partial U/\partial T)_{V}$. Using $U$ above,

$$C_{V} = k_{B}\Bigl(\frac{\beta\hbar\omega}{e^{\beta\hbar\omega/2} - e^{-\beta\hbar\omega/2}}\Bigr)^{2} = k_{B}\Bigl(\frac{\hbar\omega}{2k_{B}T}\Bigr)^{2}\operatorname{csch}^{2}\Bigl(\frac{\hbar\omega}{2k_{B}T}\Bigr).$$

At low $T$, $C_{V} \to 0$ exponentially. At high $T$, $C_{V} \to k_{B}$. A single oscillator has countably infinitely many levels, but its partition function is analytic for every $\beta>0$, so this crossover is smooth and has no phase transition.

## Common error: zero-point energy misconceptions

The nonzero ground-state energy $E_0 = \hbar\omega/2$ is not obtained by adding a classical constant by hand; it follows from the commutator when the Hamiltonian is factorized. Shifting a single non-gravitating Hamiltonian by a constant changes only global phase, but energy differences and coupling to gravity make blanket statements about "unobservable zero-point energy" unsafe. Another common error is to apply the ladder-operator algebra to an arbitrary potential without checking self-adjointness and completeness.

## Practice exercises

### Exercise 1

Compute $\langle 0|X^{2}|0\rangle$ and $\langle 0|P^{2}|0\rangle$ for the harmonic oscillator ground state, and verify $\langle H\rangle = \hbar\omega/2$.

**Solution.** Express $X$ and $P$ in terms of ladder operators:

$$X = \sqrt{\frac{\hbar}{2m\omega}}(a + a^{\dagger}), \qquad P = i\sqrt{\frac{m\hbar\omega}{2}}(a^{\dagger} - a).$$

For the ground state, $a|0\rangle = 0$ and $\langle 0|a^{\dagger} = 0$. The only surviving terms are

$$\langle 0|X^{2}|0\rangle = \frac{\hbar}{2m\omega}\langle 0|aa^{\dagger}|0\rangle = \frac{\hbar}{2m\omega},$$
$$\langle 0|P^{2}|0\rangle = \frac{m\hbar\omega}{2}\langle 0|a^{\dagger}a|0\rangle + \frac{m\hbar\omega}{2}\langle 0|aa^{\dagger}|0\rangle = \frac{m\hbar\omega}{2}.$$

Then $\langle H\rangle = \langle P^{2}\rangle/(2m) + (m\omega^{2}/2)\langle X^{2}\rangle = \hbar\omega/4 + \hbar\omega/4 = \hbar\omega/2$.

### Exercise 2

Show that the oscillator partition function satisfies $F = -\beta^{-1}\ln Z = U - TS$ with $S = -k_{B}\operatorname{Tr}(\rho_{\beta}\ln\rho_{\beta})$.

**Solution.** From $\rho_{\beta} = e^{-\beta H}/Z$, we have $\ln\rho_{\beta} = -\beta H - (\ln Z)I$. Thus

$$S = -k_{B}\operatorname{Tr}(\rho_{\beta}(-\beta H - (\ln Z)I)) = k_{B}\beta\,\operatorname{Tr}(\rho_{\beta}H) + k_{B}\ln Z = k_{B}\beta U + k_{B}\ln Z.$$

Rearranging gives $U - TS = U - k_{B}T(\beta U + \ln Z) = -\beta^{-1}\ln Z = F$.

### Exercise 3

For a three-dimensional isotropic oscillator $H = \sum_{j=1}^{3}(P_j^{2}/2m + m\omega^{2}X_j^{2}/2)$, write the partition function and mean energy.

**Solution.** The Hamiltonian separates into three independent one-dimensional oscillators. The eigenvalues are $E_{n_1,n_2,n_3} = \hbar\omega(n_1 + n_2 + n_3 + 3/2)$. The partition function factorizes: $Z_{3D} = Z_{1D}^{3}$. The mean energy is $U_{3D} = 3U_{1D} = 3\hbar\omega/2 + 3\hbar\omega/(e^{\beta\hbar\omega} - 1)$. At high temperature, $U_{3D} \to 3k_{B}T$, consistent with six quadratic degrees of freedom.

## Looking backward and forward

This chapter used the harmonic oscillator to exercise every tool developed so far: self-adjoint operators, spectral theory, unitary evolution, and the uncertainty principle. The canonical partition function bridges quantum mechanics and statistical mechanics. The next chapter, *Composite systems and entanglement*, leaves single-particle Hilbert spaces behind and constructs the tensor product, the essential structure for many-body quantum theory.
