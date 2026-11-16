
# The Harmonic Oscillator: Spectra and Ladder Operators

The harmonic oscillator is both a solvable spatial model and a reusable algebraic structure. Its ladder method derives the spectrum without first solving a differential equation, while the wave functions reveal normalization, nodes, and uncertainty.

## 1. Hamiltonian and scales

For mass $m$ and angular frequency $\omega>0$,

$$
H=\frac{P^2}{2m}+\frac{m\omega^2Q^2}{2}.
$$

The natural length is $\ell=\sqrt{\hbar/(m\omega)}$, and the natural energy is $\hbar\omega$. Introduce dimensionless quadratures $q=Q/\ell$ and $p=\ell P/\hbar$, so $[q,p]=i$.

Assume also $m>0$ and $\hbar>0$. In the coordinate $\xi=x/\ell$, $q$ multiplies by $\xi$ and $p=-i\partial_\xi$. Schwartz space is invariant under both and their finite products. Integration by parts has no boundary contribution there, so the creation expression has the adjoint action of the annihilation expression on that core. The closed operators still need their domains; a dagger on a differential expression does not erase this obligation.

## 2. Ladder factorization

Define

$$
a=\frac{q+ip}{\sqrt2}, \qquad a^\dagger=\frac{q-ip}{\sqrt2}.
$$

These unbounded operators and their products are first computed on a common invariant core, such as the Schwartz functions in the position representation. On that core, $[a,a^\dagger]=1$ and

$$
H=\hbar\omega\left(N+\frac12\right), \qquad N=a^\dagger a.
$$

For vectors in the relevant product domains, $\langle\psi|N|\psi\rangle=\|a\psi\|^2\geq0$, so number eigenvalues cannot be negative. Commutators $[N,a]=-a$ and $[N,a^\dagger]=a^\dagger$ build the ladder.

## 3. Spectrum

Repeated lowering of a normalizable number eigenstate must terminate at a normalized ground state $|0\rangle$ with $a|0\rangle=0$; otherwise the ladder would eventually produce a nonzero eigenvector with negative eigenvalue. Solving the ground equation and raising from it supplies normalized eigenstates

$$
N|n\rangle=n|n\rangle, \qquad
E_n=\hbar\omega\left(n+\frac12\right), \qquad n=0,1,\ldots.
$$

Actions are $a|n\rangle=\sqrt n\,|n-1\rangle$ and $a^\dagger|n\rangle=\sqrt{n+1}\,|n+1\rangle$. To conclude that these are the entire spectrum, one must also establish self-adjointness and completeness; for the standard oscillator on $L^2(\mathbb R)$ this follows, for example, from the Hermite-function spectral theory. The zero-point energy cannot be removed when absolute energy couples to other physics, although adding a constant does not change isolated nonrelativistic dynamics.

## 4. Wave functions

In position representation, $a\phi_0=0$ gives

$$
\phi_0(x)=(\pi\ell^2)^{-1/4}\exp\!\left(-\frac{x^2}{2\ell^2}\right).
$$

Excited states are Gaussian times Hermite polynomials. State $n$ has $n$ real nodes, definite parity $(-1)^n$, and increasing spatial extent.

More explicitly,

$$\phi_n(x)=\frac{H_n(x/\ell)e^{-x^2/(2\ell^2)}}{\pi^{1/4}\sqrt{2^n n!\ell}},\qquad
H_0=1,\quad H_{n+1}(\xi)=2\xi H_n(\xi)-H_n'(\xi).$$

The recurrence follows by applying $a^\dagger=(\xi-\partial_\xi)/\sqrt2$ to the polynomial times Gaussian. It gives degree $n$, leading coefficient $2^n$, and parity $(-1)^n$. Induction with the commutator proves $a(a^\dagger)^n\phi_0=n(a^\dagger)^{n-1}\phi_0$, so integration by parts gives squared norm $n!$ for $(a^\dagger)^n\phi_0$. Distinct levels are orthogonal by symmetry of the oscillator expression on Schwartz space. Thus the normalization is derived, rather than assigned.

### Worked example: the first excited wave functions

The first polynomials are $H_1=2\xi$, $H_2=4\xi^2-2$. Hence $\phi_1=\sqrt2(x/\ell)\phi_0$ and $\phi_2=(2x^2/\ell^2-1)\phi_0/\sqrt2$. The first is odd with one node at zero; the second is even with nodes $x=\pm\ell/\sqrt2$. Gaussian moments in the ground density give $\langle\xi^2\rangle=1/2$, $\langle\xi^4\rangle=3/4$, so $\|\phi_1\|^2=1$ and $\|\phi_2\|^2=[4(3/4)-4(1/2)+1]/2=1$. Direct differentiation verifies energies $3\hbar\omega/2$ and $5\hbar\omega/2$. These spatial checks confirm the low-order algebraic normalization without asserting that a few states prove completeness.

### Completeness and the self-adjoint realization

Here is a completeness argument using Fourier uniqueness as an analysis input. The Hermite polynomials span all polynomials by their degrees and leading terms. If $f\in L^2(\mathbb R)$ is orthogonal to every $\phi_n$, it is orthogonal to every $x^ne^{-x^2/(2\ell^2)}$. Define

$$F(z)=\int_{\mathbb R}f(x)^*e^{-x^2/(2\ell^2)}e^{zx/\ell}\,dx.$$

Cauchy–Schwarz and Gaussian decay make $|f(x)|e^{-x^2/(2\ell^2)}e^{|z||x|/\ell}$ integrable for every fixed complex $z$. It dominates the absolute exponential series, so integration term by term expresses $F(z)$ as a sum of polynomial moments, all zero by the assumed orthogonality. Thus $F(z)=0$ directly, without an additional analytic-continuation theorem. On the imaginary axis it is the Fourier transform of the integrable function $f^*e^{-x^2/(2\ell^2)}$. Fourier uniqueness makes that function zero almost everywhere, hence $f=0$. The orthonormal Hermite family is complete.

Define the spectral operator $H\sum c_n\phi_n=\sum E_nc_n\phi_n$ on $\sum E_n^2|c_n|^2<\infty$. The maximal real diagonal multiplication argument proves self-adjointness. Finite Hermite sums are a graph-norm core by truncation of both the vector and its image. On Schwartz space, integration by parts gives $\langle\phi_n,H_{\rm diff}\psi\rangle=E_n\langle\phi_n,\psi\rangle$ and $H_{\rm diff}\psi\in L^2$. Parseval puts $\psi$ in the spectral domain and identifies both actions. The finite-Hermite restriction lies inside the Schwartz restriction, which lies inside this closed spectral operator; graph closure of the first already equals the entire operator. Thus the Schwartz differential oscillator is essentially self-adjoint with this realization. The diagonal description gives the full spectrum because its eigenvalues tend to infinity: away from this list the inverse diagonal coefficients are uniformly bounded and define a resolvent. The general simple-root Hermite node count can additionally be obtained from Sturm oscillation; the low-order checks do not prove that theorem.

## 5. Moments and uncertainty

Using $Q=\ell(a+a^\dagger)/\sqrt2$ and $P=\hbar(a-a^\dagger)/(i\sqrt2\ell)$, number states satisfy

$$
\langle Q\rangle=\langle P\rangle=0,
$$

$$
(\Delta Q)^2=\ell^2\left(n+\frac12\right), \qquad
(\Delta P)^2=\frac{\hbar^2}{\ell^2}\left(n+\frac12\right).
$$

The ground state saturates $\Delta Q\,\Delta P=\hbar/2$; excited number states do not.

## 6. Coherent states

The number-state moment formulas follow by retaining only number-preserving products. In $|n\rangle$, $\langle a\rangle=\langle a^\dagger\rangle=0$ and $\langle a^2\rangle=\langle(a^\dagger)^2\rangle=0$ by orthogonality. The two remaining quadratic terms are $\langle a^\dagger a\rangle=n$ and $\langle aa^\dagger\rangle=n+1$. Expanding $(a+a^\dagger)^2$ gives $\langle Q^2\rangle=\ell^2(2n+1)/2$. Expanding the momentum square, including its factor $1/i^2=-1$, gives $\langle P^2\rangle=\hbar^2(2n+1)/(2\ell^2)$. Thus kinetic and potential energies each equal $E_n/2$, an exact oscillator virial balance rather than a thermal equipartition assumption.

The factorization also proves the ground lower bound variationally: $\langle H\rangle=\hbar\omega(\|a\psi\|^2+1/2)\ge\hbar\omega/2$ on normalized vectors in the stated form domain. Equality requires $a\psi=0$, whose only square-integrable solutions are scalar multiples of the normalized Gaussian. This is an energy-minimization proof, while completeness is the separate argument excluding missing spectral sectors. Neither should be substituted for the other.

A coherent state satisfies $a|\alpha\rangle=\alpha|\alpha\rangle$ and expands as

$$
|\alpha\rangle=e^{-|\alpha|^2/2}\sum_{n=0}^\infty
\frac{\alpha^n}{\sqrt{n!}}|n\rangle.
$$

Its number distribution is Poisson with mean $|\alpha|^2$. Its wave packet follows the classical oscillator trajectory in its center while retaining ground-state variances. This correspondence does not make it a point particle.

### Worked example: a coherent center and nonzero width

The eigenvector equation for $a$ gives $c_{n+1}\sqrt{n+1}=\alpha c_n$, hence the displayed coherent expansion after normalization. Its factorial decay supplies finite moments of every number-operator power, justifying the ladder manipulations. Spectral evolution gives

$$e^{-iHt/\hbar}|\alpha\rangle=e^{-i\omega t/2}|\alpha e^{-i\omega t}\rangle.$$

Using $\langle a\rangle=\alpha$, $\langle a^2\rangle=\alpha^2$, $\langle a^\dagger a\rangle=|\alpha|^2$, and $\langle aa^\dagger\rangle=|\alpha|^2+1$ yields $\langle Q\rangle=\sqrt2\ell\operatorname{Re}\alpha(t)$, $\langle P\rangle=\sqrt2\hbar\operatorname{Im}\alpha(t)/\ell$, and variances $\ell^2/2$, $\hbar^2/(2\ell^2)$. For real initial $\alpha=A/(\sqrt2\ell)$ the center is $Q_c=A\cos\omega t$, $P_c=-m\omega A\sin\omega t$. These obey the classical oscillator equations exactly while the uncertainty product remains $\hbar/2$. The packet's nonzero width and Poisson number distribution distinguish it from a classical point trajectory. A stationary number state has zero center instead; its definite energy is not the same preparation as a coherent packet with the same mean energy.

### Worked example: a thermal spectral bridge

Assume a canonical equilibrium model with $\beta=1/(k_BT)>0$ and $\rho_\beta=e^{-\beta H}/Z$. Then the same spectrum gives the convergent geometric sum

$$Z=\frac{e^{-\beta\hbar\omega/2}}{1-e^{-\beta\hbar\omega}},\qquad
U=-\partial_\beta\log Z=\frac{\hbar\omega}{2}+\frac{\hbar\omega}{e^{\beta\hbar\omega}-1}.$$

For $x=\beta\hbar\omega$, differentiation at fixed $\omega$ gives

$$C=k_B\frac{x^2e^x}{(e^x-1)^2}=k_B\frac{(x/2)^2}{\sinh^2(x/2)}.$$

Thus $C\to0$ exponentially at low temperature and $C\to k_B$ when $x\to0$. Expanding $(e^x-1)^{-1}=x^{-1}-1/2+O(x)$ shows the zero-point term cancels the first thermal correction in $U$, leaving $U=k_BT+O((\hbar\omega)^2/(k_BT))$. The small parameter is $\hbar\omega/(k_BT)$, rather than an unqualified large-temperature label. Analyticity for every positive $\beta$ gives a smooth crossover, with no single-oscillator phase transition.

The free-energy identity follows from $\log\rho_\beta=-\beta H-(\log Z)I$: $S=-k_B\operatorname{Tr}\rho_\beta\log\rho_\beta=k_B(\beta U+\log Z)$, so $U-TS=-\beta^{-1}\log Z$. Three independent Cartesian oscillators have $Z_{3D}=Z^3$ and $U_{3D}=3U$, approaching $3k_BT$ at high temperature. These preserve the unique heat-capacity, entropy and three-dimensional calculations of the earlier oscillator-audit source. The original source remains available, and the statistical assumptions and full equilibrium teaching continue in [Canonical Ensembles](../quantum-statistical-structures/canonical-ensembles.md). Displaying this Gibbs state does not derive thermalization from isolated unitary motion.

## 7. Model boundaries

A finite ladder truncation has a precise algebraic defect. Retain $|0\rangle,\ldots,|M\rangle$ and project both ladder operators into that space. On a state below the top, $[a_M,a_M^\dagger]$ still acts as identity. On the top, raising is zero and lowering has squared norm $M$, so the commutator acts as $-M$. Therefore

$$[a_M,a_M^\dagger]=I-(M+1)|M\rangle\langle M|.$$

Its trace is zero, as every finite commutator requires. Low-level matrix elements can agree with the continuum while the top-level relation fails exactly. A small residual assessed only on low occupied states is a restricted statement, not proof of an exact finite canonical algebra. The same issue affects approximations to highly excited coherent or thermal states when their tails approach the truncation boundary. Declaring the retained space and its occupation regime is part of interpreting a truncated calculation.

Many systems are approximately harmonic near a stable minimum because $V(x)$ begins with a quadratic Taylor term. Accuracy depends on wave-packet support and anharmonic terms. Molecular, optical, and field oscillators attach different meanings and units to the coordinate. Infinite equally spaced levels are an idealization.

## A squeezed Gaussian keeps the uncertainty product but changes the energy

Minimum uncertainty does not uniquely identify the oscillator ground state.
For a real parameter s, define the unitary dilation of a wave function
by $D_s\psi(x)=e^{s/2}\psi(e^s x)$. Substituting a new integration variable proves that
its squared norm is unchanged, and replacing s by minus s gives the
inverse. Start from the normalized oscillator ground state. Its dilated
state is still a centered Gaussian, but its position variance is multiplied
by e⁻²ˢ and its momentum variance by e²ˢ. The first assertion follows
by changing variables in the position integral; the second follows by
differentiating the dilated wave function and then making the same
substitution in the derivative norm.

The product of standard deviations remains ℏ/2. Positive s narrows the
position distribution while broadening momentum. Negative s does the reverse.
The state has zero means and zero symmetrized position-momentum covariance
because its real Gaussian wave function is even and has no quadratic
phase. Its oscillator energy expectation is
$$\langle H\rangle_s=\frac{\hbar\omega}{4}(e^{2s}+e^{-2s})
=\frac{\hbar\omega}{2}\cosh(2s).$$
It exceeds the ground energy unless s=0. The variational lower bound
is therefore consistent with all these minimum-product states: minimizing
the uncertainty product is not the same optimization problem as minimizing
the weighted sum of kinetic and potential energies.

The same result can be read directly from the widths. Kinetic energy
weights momentum variance by the reciprocal mass, while potential energy
weights position variance by mass times the squared frequency. The
ground state balances those two costs. Squeezing transfers variance
between them while preserving their product, and the arithmetic-geometric
mean inequality makes the sum smallest at that balance. This provides
an elementary explanation of the energy formula without assigning a
classical trajectory to the width.

Under oscillator evolution, the Heisenberg position is the initial position
times cos ωt plus the initial momentum times sin ωt divided by mω.
Taking its square and using the initial zero covariance gives
$$\operatorname{Var}(Q(t))=\frac{\hbar}{2m\omega}
\left(e^{-2s}\cos^2\omega t+e^{2s}\sin^2\omega t\right).$$
The width oscillates at twice the oscillator frequency. At intermediate
times a nonzero position-momentum covariance develops; the Robertson–Schrödinger
determinant remains at its pure Gaussian minimum, although the simpler
product of the two standard deviations need not stay at ℏ/2. This
is exactly why the covariance term in the sharper uncertainty relation
carries physical information.

A coherent state differs in a complementary way. Its center moves,
while its covariance equals the ground-state covariance and its position
width stays constant in time. A squeezed state can have a stationary
center and a changing width. A displaced squeezed state combines both
effects. Describing a Gaussian as a classical packet solely because its
center follows the classical equation misses these distinct quantum
second-moment dynamics.

There is also a spectral distinction from a thermal state. The
centered squeezed Gaussian is even, while the odd oscillator eigenfunctions
are odd. Their overlap integrals vanish by parity, so its energy
measurement has no odd occupation outcomes. A positive-temperature thermal
oscillator has nonzero weight at every occupation number. Matching an
average energy therefore cannot identify these preparations. Their full
energy distributions and their covariance dynamics differ. This provides
a second way to distinguish squeezed pure preparation from heating,
besides the changing position width.

The dilation argument used smooth rapidly decaying Gaussians, so all
position and momentum moments appearing here are finite and the
operator differentiations are legitimate on that family. Extending the
calculation to an arbitrary square-integrable state would require checking
those moment domains first. The oscillator spectrum still supplies unitary
evolution for every state, but finite variance is an additional property,
not a consequence of normalization alone.

## Finite mean occupation gives a norm-tail bound

In the number basis, the probability of occupation at
least an integer M is at most the mean occupation
divided by M. Sum the nonnegative probabilities over
that tail and use that each corresponding label is
at least M to prove the inequality. Since the
oscillator energy is affine in occupation number,
a finite energy allowance supplies such a mean bound.

Projecting a pure state onto the first M levels
and renormalizing gives squared overlap equal to one
minus the discarded probability, whenever that probability
is below one. The pure-state trace distance is its
square root. This turns a mean-energy allowance into
a quantitative state approximation in a declared basis.
It does not bound the energy carried by the discarded
tail from its probability alone: a tiny probability
at a sufficiently high level can carry appreciable
energy. Norm accuracy and unbounded-energy accuracy
therefore require different tail information.

## Exercises with complete solutions

<a id="harmonic-oscillator-ladders-ex-1"></a>

### 1. Natural length
Check units of $\ell$.

<details>
<summary>Hint 1</summary>

Write the dimensions of hbar as mass times length squared divided by time.

</details>

<details>
<summary>Hint 2</summary>

Divide by mass and angular frequency before taking the square root.

</details>

<details>
<summary>Full solution</summary>

$\hbar/(m\omega)$ has units length squared, so its square root is length.

</details>

<a id="harmonic-oscillator-ladders-ex-2"></a>

### 2. Quadrature commutator
Show $[q,p]=i$.

<details>
<summary>Hint 1</summary>

Pull the scalar length factors out of the commutator.

</details>

<details>
<summary>Hint 2</summary>

Use the canonical relation only on the common invariant core.

</details>

<details>
<summary>Full solution</summary>

$[Q/\ell,\ell P/\hbar]=[Q,P]/\hbar=i$ on the common domain.

</details>

<a id="harmonic-oscillator-ladders-ex-3"></a>

### 3. Ladder commutator
Compute $[a,a^\dagger]$.

<details>
<summary>Hint 1</summary>

Expand the two linear combinations of q and p.

</details>

<details>
<summary>Hint 2</summary>

The equal-variable commutators vanish and the mixed terms add to identity.

</details>

<details>
<summary>Full solution</summary>

Expanding with $[q,p]=i$ gives $\frac12(-i[q,p]+i[p,q])=1$.

</details>

<a id="harmonic-oscillator-ladders-ex-4"></a>

### 4. Positivity
Why is $N$ positive?

<details>
<summary>Hint 1</summary>

Use the adjoint relation on the appropriate product domain.

</details>

<details>
<summary>Hint 2</summary>

The resulting quadratic form is a squared norm.

</details>

<details>
<summary>Full solution</summary>

$\langle\psi|a^\dagger a|\psi\rangle=\|a\psi\|^2\geq0$.

</details>

<a id="harmonic-oscillator-ladders-ex-5"></a>

### 5. Hamiltonian factor
Express $q^2+p^2$ using $N$.

<details>
<summary>Hint 1</summary>

Multiply the two ladder expressions in the stated order.

</details>

<details>
<summary>Hint 2</summary>

The commutator correction contributes the constant minus one in twice N.

</details>

<details>
<summary>Full solution</summary>

Expansion gives $N=(q^2+p^2-1)/2$, hence $q^2+p^2=2N+1$.

</details>

<a id="harmonic-oscillator-ladders-ex-6"></a>

### 6. Lowering energy
If $N|n\rangle=n|n\rangle$, what is the eigenvalue of $a|n\rangle$?

<details>
<summary>Hint 1</summary>

Move N past a using its commutator.

</details>

<details>
<summary>Hint 2</summary>

The eigenvalue drops by one if the lowered vector is nonzero.

</details>

<details>
<summary>Full solution</summary>

$[N,a]=-a$ gives $N(a|n\rangle)=(n-1)a|n\rangle$.

</details>

<a id="harmonic-oscillator-ladders-ex-7"></a>

### 7. Lowering norm
Find $\|a|n\rangle\|^2$.

<details>
<summary>Hint 1</summary>

The squared norm is the expectation of a dagger a.

</details>

<details>
<summary>Hint 2</summary>

That product is the number operator.

</details>

<details>
<summary>Full solution</summary>

It is $\langle n|N|n\rangle=n$.

</details>

<a id="harmonic-oscillator-ladders-ex-8"></a>

### 8. Raising norm
Find $\|a^\dagger|n\rangle\|^2$.

<details>
<summary>Hint 1</summary>

The squared norm is the expectation of a a dagger.

</details>

<details>
<summary>Hint 2</summary>

The commutator changes that product into N plus identity.

</details>

<details>
<summary>Full solution</summary>

$\langle n|aa^\dagger|n\rangle=\langle n|(N+1)|n\rangle=n+1$.

</details>

<a id="harmonic-oscillator-ladders-ex-9"></a>

### 9. Ground energy
What is $E_0$?

<details>
<summary>Hint 1</summary>

Insert number zero in the factorized Hamiltonian.

</details>

<details>
<summary>Hint 2</summary>

The half-quantum term remains.

</details>

<details>
<summary>Full solution</summary>

$\hbar\omega/2$.

</details>

<a id="harmonic-oscillator-ladders-ex-10"></a>

### 10. Level spacing
Compute $E_{n+1}-E_n$.

<details>
<summary>Hint 1</summary>

Subtract successive members of the same energy list.

</details>

<details>
<summary>Hint 2</summary>

The number label increases by one while the zero-point terms cancel.

</details>

<details>
<summary>Full solution</summary>

It is the constant $\hbar\omega$.

</details>

<a id="harmonic-oscillator-ladders-ex-11"></a>

### 11. Ground equation
Solve $a\phi_0=0$ up to normalization.

<details>
<summary>Hint 1</summary>

Write a as a first-order operator in the dimensionless position.

</details>

<details>
<summary>Hint 2</summary>

Separate the resulting logarithmic derivative equation.

</details>

<details>
<summary>Full solution</summary>

It reduces to $\phi_0'=-(x/\ell^2)\phi_0$, giving $Ce^{-x^2/(2\ell^2)}$.

</details>

<a id="harmonic-oscillator-ladders-ex-12"></a>

### 12. Ground parity
Is $\phi_0$ even or odd?

<details>
<summary>Hint 1</summary>

Replace x by minus x in the Gaussian.

</details>

<details>
<summary>Hint 2</summary>

The squared coordinate is unchanged.

</details>

<details>
<summary>Full solution</summary>

Even, because it depends on $x^2$.

</details>

<a id="harmonic-oscillator-ladders-ex-13"></a>

### 13. First state parity
What parity has $\phi_1$?

<details>
<summary>Hint 1</summary>

Apply the creation expression once to the Gaussian.

</details>

<details>
<summary>Hint 2</summary>

Its result is proportional to x times an even function.

</details>

<details>
<summary>Full solution</summary>

Odd; one raising operation produces a factor proportional to $x$ times the Gaussian.

</details>

<a id="harmonic-oscillator-ladders-ex-14"></a>

### 14. Number-state position mean
Why is $\langle Q\rangle=0$?

<details>
<summary>Hint 1</summary>

Q is the sum of a lowering and a raising operator.

</details>

<details>
<summary>Hint 2</summary>

Both change the number label, so each diagonal overlap vanishes.

</details>

<details>
<summary>Full solution</summary>

$Q$ changes number by one, so diagonal matrix elements vanish; equivalently parity makes the integrand odd.

</details>

<a id="harmonic-oscillator-ladders-ex-15"></a>

### 15. Ground uncertainty
Compute $\Delta Q\,\Delta P$ at $n=0$.

<details>
<summary>Hint 1</summary>

Use the two ground-state variance formulas.

</details>

<details>
<summary>Hint 2</summary>

Take their nonnegative square roots before multiplying.

</details>

<details>
<summary>Full solution</summary>

$\sqrt{\ell^2/2}\sqrt{\hbar^2/(2\ell^2)}=\hbar/2$.

</details>

<a id="harmonic-oscillator-ladders-ex-16"></a>

### 16. Excited uncertainty
Compute the product at general $n$.

<details>
<summary>Hint 1</summary>

Multiply the general variance formulas and take a square root.

</details>

<details>
<summary>Hint 2</summary>

The natural length cancels, leaving hbar times n plus one half.

</details>

<details>
<summary>Full solution</summary>

It is $\hbar(n+1/2)$.

</details>

<a id="harmonic-oscillator-ladders-ex-17"></a>

### 17. Coherent normalization
Why does the coefficient prefactor normalize the series?

<details>
<summary>Hint 1</summary>

Sum the squared expansion coefficients.

</details>

<details>
<summary>Hint 2</summary>

Their factorial series is an ordinary exponential canceling the prefactor.

</details>

<details>
<summary>Full solution</summary>

Squared coefficients sum to $e^{-|\alpha|^2}\sum_{n=0}^\infty|\alpha|^{2n}/n!=1$.

</details>

<a id="harmonic-oscillator-ladders-ex-18"></a>

### 18. Coherent mean number
What is $\langle N\rangle$?

<details>
<summary>Hint 1</summary>

Apply the eigenvalue equation for a and its adjoint expectation.

</details>

<details>
<summary>Hint 2</summary>

The same value is the mean of the Poisson number distribution.

</details>

<details>
<summary>Full solution</summary>

The Poisson distribution has mean $|\alpha|^2$; also $\langle a^\dagger a\rangle=\alpha^*\alpha$.

</details>

<a id="harmonic-oscillator-ladders-ex-19"></a>

### 19. Energy shift
Does subtracting $\hbar\omega/2$ change isolated transition probabilities?

<details>
<summary>Hint 1</summary>

A scalar shift factors from the isolated propagator.

</details>

<details>
<summary>Hint 2</summary>

A common phase leaves outcome probabilities unchanged, while additional energy couplings define a different question.

</details>

<details>
<summary>Full solution</summary>

It adds a constant to $H$, producing only global phase, though absolute-energy couplings require care.

</details>

<a id="harmonic-oscillator-ladders-ex-20"></a>

### 20. Harmonic approximation
When can it fail near a nominal minimum?

<details>
<summary>Hint 1</summary>

Compare the wave-function support with the domain of a valid quadratic Taylor approximation.

</details>

<details>
<summary>Hint 2</summary>

Higher powers and coupling to other modes can matter even when a local quadratic coefficient is positive.

</details>

<details>
<summary>Full solution</summary>

If the state explores regions where cubic or higher Taylor terms are not negligible, or if the minimum is unstable or coupled to other modes.

</details>

## Project: ladder and grid cross-check

Construct truncated ladder matrices and a finite-difference oscillator Hamiltonian. Compare their lowest energies, commutator residuals, and eigenvector parity as truncation and grid resolution increase. Explain why the truncated matrix cannot satisfy $[a,a^\dagger]=I$ exactly at its top state. Supply text tables and keep numerical convergence distinct from continuum proof.

## Chapter summary

Factorization turns the oscillator into a positive number operator with an equally spaced spectrum. Wave functions connect the algebra to Gaussian localization, Hermite nodes, uncertainty, and coherent motion. The model is exact for a quadratic Hamiltonian and approximate when used near a real system's minimum.

[Previous chapter](one-dimensional-bound-states.md) · [Next chapter](central-potentials-hydrogen.md) · [Book overview](#/books/two-state-quantum-mechanics)
