
# One-Dimensional Bound States and Boundary Conditions

One-dimensional stationary problems turn quantum prediction into spectral boundary-value analysis. Exact wells reveal quantization, parity, tunneling, and matching conditions while keeping their idealization visible.

## 1. Stationary states

For time-independent $H$, a separated state has $\psi(x,t)=\phi(x)e^{-iEt/\hbar}$ where

$$
-\frac{\hbar^2}{2m}\phi''+V\phi=E\phi.
$$

If $\phi$ is normalized and in the Hamiltonian domain, its position density is time independent. A superposition of different energies is generally not stationary because relative phases evolve.

## 2. Infinite square well

On $(0,L)$ with Dirichlet endpoints and $V=0$, solutions are

$$
\phi_n=\sqrt{\frac{2}{L}}\sin\!\left(\frac{n\pi x}{L}\right),
\qquad E_n=\frac{\hbar^2\pi^2n^2}{2mL^2},
\qquad n=1,2,\ldots.
$$

The zero solution is excluded by normalization; $n=0$ supplies only zero. The ground energy is positive. Changing to periodic or Neumann boundary conditions changes the spectrum.

Here $m>0$, $\hbar>0$, $L>0$, and the operator domain is $H^2(0,L)\cap H_0^1(0,L)$, as justified in the preceding chapter. Multiplication of the eigenvalue equation by $\phi^*$ and integration gives $E\|\phi\|^2=\hbar^2\|\phi'\|^2/(2m)>0$ for a nonzero zero-endpoint vector. Thus $k=\sqrt{2mE}/\hbar$ is real and positive. The general solution is $A\sin kx+B\cos kx$; the first endpoint gives $B=0$, and the second forces $kL=n\pi$. The squared-sine integral is $L/2$, giving the normalization. Completeness is the Fourier sine-basis theorem, obtainable by odd extension and periodic Fourier completeness; it is an analysis input, not a consequence of orthogonality alone.

## 3. Expansion and dynamics

An initial state expands as $\psi(x,0)=\sum_n c_n\phi_n$, with $c_n=\langle\phi_n|\psi(0)\rangle$. Then

$$
\psi(x,t)=\sum_n c_ne^{-iE_nt/\hbar}\phi_n(x).
$$

Energy probabilities $|c_n|^2$ are constant, while position interference changes. Expected energy is finite only if $\sum_n E_n|c_n|^2$ converges.

## 4. Finite well and matching

### Worked example: stationary energies, moving position density

Take $\psi(x,0)=(\phi_1+\phi_2)/\sqrt2$ in the infinite well. Its density is

$$|\psi(x,t)|^2=\tfrac12(\phi_1^2+\phi_2^2)+\phi_1\phi_2\cos[(E_2-E_1)t/\hbar].$$

The energy distribution stays half at each level, with fixed mean $(E_1+E_2)/2$. Position statistics need not stay fixed. Direct integration gives $\langle\phi_n|Q|\phi_n\rangle=L/2$ and $\langle\phi_1|Q|\phi_2\rangle=-16L/(9\pi^2)$. To obtain the latter, use $2\sin a\sin b=\cos(a-b)-\cos(a+b)$ and integrate $x\cos(k\pi x/L)$ for $k=1,3$. Therefore

$$\langle Q\rangle_t=\frac L2-\frac{16L}{9\pi^2}\cos[(E_2-E_1)t/\hbar].$$

The motion occurs at angular beat frequency $3\hbar\pi^2/(2mL^2)$. Orthogonality makes the interference term integrate to zero in the total norm, but multiplication by position prevents its cancellation in the mean. A constant energy distribution is therefore not a stationary-state criterion. This finite sum belongs to the Hamiltonian domain and permits all differentiations used here; unrestricted infinite sums need their energy/domain convergence conditions.

Across a finite jump of a piecewise-continuous potential with no delta singularity, $\phi$ and $\phi'$ are continuous. For a finite-depth, finite-range well, bound states decay in the classically forbidden exterior, matching produces transcendental equations, and only finitely many bound levels occur. More slowly decaying attractive tails require separate spectral analysis and can change that conclusion.

For an even well, parity separates even and odd solutions. Numerical root finding must bracket roots and distinguish true equations from tangent poles. A plotted crossing without residual or convergence evidence is not a certified eigenvalue.

## 5. Tunneling

The matched finite-well state can also be normalized explicitly. For the even branch, take $A$ real and positive; its squared norm is

$$A^2\left[a+\frac{\sin2qa}{2q}+\frac{\cos^2qa}{\kappa}\right].$$

The first two terms integrate the interior cosine square over $(-a,a)$, and the last integrates both exterior tails using $B=A\cos qa$. Choose $A$ as the reciprocal square root of the bracket. For an odd branch replace the bracket by $a-\sin(2qa)/(2q)+\sin^2(qa)/\kappa$. The tail term explains why a level near threshold spreads far outside the nominal well. A finite-width interior picture can hide most of the norm when $\kappa$ is small; matching is not merely an algebraic way to locate the energy.

There is also a useful distinction in the infinite-well expansion: finite mean energy requires $\sum E_n|c_n|^2<\infty$, while membership in the operator domain requires $\sum E_n^2|c_n|^2<\infty$. For example normalized coefficients proportional to $n^{-2}$ give finite norm and finite energy, but the latter series diverges. The state belongs to the energy form domain, yet $H\psi$ is not an $L^2$ vector. Its unitary evolution still exists spectrally, while the strong time-derivative equation at that state needs the stricter domain. Thus “finite energy” and “two classical derivatives” must not be used interchangeably.

### Worked example: finite square-well equations and thresholds

Let $V=-V_0$ on $|x|<a$ and zero outside, with $V_0>0$, $a>0$. A bound eigenvalue satisfies $-V_0<E<0$: the quadratic energy form rules out values at or below $-V_0$, and square-integrable free exteriors require a negative energy. Define $q=\sqrt{2m(E+V_0)}/\hbar$ and $\kappa=\sqrt{-2mE}/\hbar$, so $q^2+\kappa^2=2mV_0/\hbar^2$.

For an even state use $A\cos qx$ inside and $Be^{-\kappa(|x|-a)}$ outside. Continuity at $a$ gives $B=A\cos qa$, and derivative continuity gives $-Aq\sin qa=-\kappa B$. Thus $q\tan qa=\kappa$. For an odd state use $A\sin qx$ and $\operatorname{sign}(x)Be^{-\kappa(|x|-a)}$, obtaining $-q\cot qa=\kappa$. The endpoints where a sine or cosine denominator vanishes are not candidate roots of the divided equation; the original matching equations would force the zero solution there.

Set $z=qa$, $z_0=a\sqrt{2mV_0}/\hbar$. The equations become $z\tan z=\sqrt{z_0^2-z^2}$ and $-z\cot z=\sqrt{z_0^2-z^2}$ for $0<z<z_0$. On each positive even branch $(k\pi,k\pi+\pi/2)$, the left side increases from zero toward a pole while the right side decreases. A branch beginning strictly below $z_0$ has exactly one root, whether it ends at its pole or is truncated by $z_0$. The corresponding odd branches start at $k\pi+\pi/2$ and end at $(k+1)\pi$, with the same monotonic argument. Thus only finitely many branches can contribute, and an even bound state exists for every positive depth because the first branch starts at zero. An odd bound state first appears when $z_0>\pi/2$; at equality its zero-exterior-decay threshold is not square integrable. This analytic branch analysis explains both finiteness and threshold behavior without mistaking a tangent pole for a root.

Where $V>E$, a constant-region solution behaves exponentially with $\kappa=\sqrt{2m(V-E)}/\hbar$. A finite barrier admits a nonzero transmitted amplitude. “Tunneling time” is not one universally defined observable; phase, dwell, arrival-time, and operational definitions differ.

## 6. Qualitative theorems

For regular one-dimensional confining problems, bound eigenvalues are nondegenerate. The $n$th eigenfunction has an ordered node count under standard indexing. The ground state may be chosen strictly positive in the interior. These statements require hypotheses; singular potentials, disconnected domains, and changed boundary conditions need separate analysis.

For a precise nondegeneracy proof take a connected bounded interval, continuous real $V$, constant $m>0$, and Dirichlet endpoints. Two eigenfunctions $u,v$ at the same $E$ have Wronskian $W=uv'-u'v$ with derivative $uv''-u''v=0$ by their common ODE. At the left endpoint both functions vanish, so $W=0$ everywhere. Choose an interior point where $u\ne0$ and set $c=v/u$ there; the zero Wronskian makes $v'=cu'$ at that point too. Uniqueness for the regular second-order initial-value equation gives $v=cu$ throughout. Thus each eigenspace is one dimensional. On the full line a similar argument needs an appropriate vanishing-Wronskian condition at infinity, as supplied explicitly by finite-range negative-energy decay; it is not inferred only from the word bound.

If the lowest Rayleigh quotient on this regular Dirichlet interval is attained, its minimizer can be chosen real and nonnegative: replacing a real minimizer by its absolute value preserves both norm and gradient energy in $H_0^1$. The variational equation gives a classical eigenfunction for continuous $V$. If it vanished at an interior point, nonnegativity would make its derivative zero there; ODE uniqueness would force it identically zero. Hence it is strictly positive inside. Existence of the minimizing eigenfunction follows from the standard compact interval embedding/direct-method theorem, identified here as an analysis input. The full ordered node-count result is the Sturm oscillation theorem; this chapter states it with this regular separated-boundary scope rather than claiming the Wronskian proof alone establishes it.

## 7. Delta interaction

For $V(x)=-g\delta(x)$, $g>0$, the wave function is continuous while integration across zero gives

$$
\phi'(0^+)-\phi'(0^-)=-\frac{2mg}{\hbar^2}\phi(0).
$$

There is one bound state proportional to $e^{-\kappa|x|}$ with $\kappa=mg/\hbar^2$ and $E=-mg^2/(2\hbar^2)$. This is an ideal point interaction, not a literal zero-width laboratory well.

### Worked example: the attractive point interaction exactly

Interpret the delta interaction by a continuous $H^1$ wave function, piecewise $H^2$ away from zero, satisfying the displayed derivative jump. This domain/interface contract gives the distributional equation a meaning without multiplying a delta by an arbitrary $L^2$ representative. For $E<0$, the only square-integrable free solutions on the two half-lines are $Ce^{-\kappa x}$ on the right and $De^{\kappa x}$ on the left. Continuity gives $C=D$. The derivative jump is $-2\kappa C$, so the nonzero state's jump rule forces $\kappa=mg/\hbar^2$. There is exactly one possible negative eigenvalue. At nonnegative energy the free exteriors are oscillatory or affine and cannot give a nonzero square-integrable state, so there is no further bound level.

Normalization uses $\int_{\mathbb R}e^{-2\kappa|x|}dx=1/\kappa$, giving $\phi=\sqrt\kappa e^{-\kappa|x|}$ up to phase. Its kinetic form energy is $\hbar^2\kappa^2/(2m)$ and its point-potential contribution is $-g|\phi(0)|^2=-g\kappa$. Substitution of the jump value makes their sum $-mg^2/(2\hbar^2)$, agreeing with the exterior eigenvalue. The wave function is continuous while its slope jumps; imposing slope continuity would eliminate the very state the singular interaction supports. The point evaluation is justified by the one-dimensional $H^1$ representative, not by arbitrary pointwise values in $L^2$.

## The ideal well has an exact revival time

The infinite-well energies are proportional to the square of the positive
integer mode label. This special commensurability produces an exact recurrence
of every state, not just a near recurrence of a finite expansion. For
a well of width L, take
$$T_{\rm rev}=\frac{4mL^2}{\pi\hbar}.$$
Substituting the energy formula gives EₙTrev/ℏ=2πn², so each mode acquires
phase one. Therefore the unitary evolution at that time is the identity
on every finite linear combination of well eigenfunctions. Since those
combinations are dense and the propagator is norm preserving, the identity
extends to every square-integrable state by taking the norm limit. No
finite-energy or pointwise-convergence assumption is needed for that Hilbert-space
statement.

At half this time, the phase is exp(−iπn²), which equals (−1)ⁿ because
an integer and its square have the same parity. Spatial reflection about
the midpoint maps the nth sine mode to (−1)ⁿ⁺¹ times itself. Thus half-revival
evolution is minus the reflection operator. The overall minus sign has
no effect on position probabilities, and the density is the reflected
initial density. A state symmetric or antisymmetric about the midpoint
can recur in its ray earlier than a general superposition. A single
eigenstate has a stationary ray at every time, so one should not
call the common revival time the least period of every individual state.

This exact example distinguishes an operator recurrence, a state-vector
recurrence, a ray recurrence and a density recurrence. The first is a
statement about all preparations simultaneously. The others can depend
on which coefficients are nonzero and which phases an observable detects.
A plot of one density at two times cannot establish the operator identity.
Here the spectral phases provide its proof.

The square dependence of the energies is essential. A finite-depth well
has different matching equations and generally lacks this exact common
revival. Adding even a small potential can shift different levels by
different amounts. Approximate returns may remain over a stated range
of populated levels, but an arbitrarily small energy shift can accumulate
a substantial phase over a sufficiently long time. Long-time revival
claims therefore require spectral phase control, not merely accurate
individual energy values to a few displayed digits.

If an experiment begins with a wave packet concentrated away from
the walls, its short-time motion may resemble a free packet, while
its later reflected and revived motion is fixed by the boundary
conditions. Those conditions determine the operator and spectrum from
the start. Replacing the well by a finite box in a numerical
calculation changes the global model unless the intended physical boundary
was already that box. The exact revival is a particularly visible
reminder that local appearance does not determine long-time spectral dynamics.

## Changing the well width changes the operator domain

Well energies vary as the inverse square of the width.
A clean comparison maps each physical interval to the
unit interval by multiplying ψ(Lq) by √L. This is a
unitary coordinate change, as substitution in its norm
integral proves. In the new coordinate, every Dirichlet
domain is the same unit-interval domain and the kinetic
coefficient carries the factor one divided by L squared.
The spectral scaling and its derivative therefore follow
without differentiating functions on silently changing spaces.

For an occupied eigenstate, minus the width derivative
of its energy is twice that energy divided by L.
It can represent the generalized force conjugate to a
slowly displaced wall under the associated quasistatic
model. An abrupt wall motion instead prepares transitions
and needs a time-dependent boundary problem. The static
energy derivative does not determine those transition
probabilities. This example keeps spectral sensitivity,
coordinate identification and a dynamical intervention
as related but separate mathematical questions.

## Exercises with complete solutions

<a id="one-dimensional-bound-states-ex-1"></a>

### 1. Separation
Insert $\phi(x)e^{-iEt/\hbar}$ into Schrödinger's equation.

<details>
<summary>Hint 1</summary>

Differentiate only the scalar time exponential.

</details>

<details>
<summary>Hint 2</summary>

Cancel the common nonzero time factor to obtain the spatial equation.

</details>

<details>
<summary>Full solution</summary>

The time derivative contributes $E\psi$, leaving $H\phi=E\phi$.

</details>

<a id="one-dimensional-bound-states-ex-2"></a>

### 2. Well wave number
What wave numbers satisfy Dirichlet endpoints?

<details>
<summary>Hint 1</summary>

The first zero endpoint removes the cosine coefficient.

</details>

<details>
<summary>Hint 2</summary>

The second forces the sine argument at L to be an integer multiple of pi; exclude the zero function.

</details>

<details>
<summary>Full solution</summary>

$k_n=n\pi/L$, for positive integer $n$.

</details>

<a id="one-dimensional-bound-states-ex-3"></a>

### 3. Well normalization
Normalize $\sin(n\pi x/L)$.

<details>
<summary>Hint 1</summary>

Integrate the squared sine over one interval.

</details>

<details>
<summary>Hint 2</summary>

The integral is L over two for every positive integer mode.

</details>

<details>
<summary>Full solution</summary>

Its squared integral is $L/2$, so multiply by $\sqrt{2/L}$.

</details>

<a id="one-dimensional-bound-states-ex-4"></a>

### 4. Ground energy
Why is it not zero?

<details>
<summary>Hint 1</summary>

At zero energy the spatial equation has affine solutions.

</details>

<details>
<summary>Hint 2</summary>

Both zero endpoints force both affine coefficients to vanish.

</details>

<details>
<summary>Full solution</summary>

A zero-energy linear solution satisfying both Dirichlet conditions is identically zero and cannot be normalized.

</details>

<a id="one-dimensional-bound-states-ex-5"></a>

### 5. Scaling
How do energies change if $L$ doubles?

<details>
<summary>Hint 1</summary>

Inspect the exact inverse-square length factor.

</details>

<details>
<summary>Hint 2</summary>

Every other model parameter is held fixed in this comparison.

</details>

<details>
<summary>Full solution</summary>

They scale as $L^{-2}$, so each becomes one quarter.

</details>

<a id="one-dimensional-bound-states-ex-6"></a>

### 6. Energy probability
For normalized coefficients, what is the probability of energy $E_n$?

<details>
<summary>Hint 1</summary>

Expansion coefficients are energy-basis amplitudes.

</details>

<details>
<summary>Hint 2</summary>

The orthonormal projectors turn their squared magnitudes into probabilities.

</details>

<details>
<summary>Full solution</summary>

$|c_n|^2$.

</details>

<a id="one-dimensional-bound-states-ex-7"></a>

### 7. Two-level relative phase
How does the relative phase of levels $m,n$ evolve?

<details>
<summary>Hint 1</summary>

Divide one spectral time phase by the other.

</details>

<details>
<summary>Hint 2</summary>

The exponent contains the energy difference, not either absolute energy zero.

</details>

<details>
<summary>Full solution</summary>

It gains $e^{-i(E_m-E_n)t/\hbar}$.

</details>

<a id="one-dimensional-bound-states-ex-8"></a>

### 8. Expected energy
Write it in the well basis.

<details>
<summary>Hint 1</summary>

Average the discrete spectral energies with their probabilities.

</details>

<details>
<summary>Hint 2</summary>

An infinite nonnegative series still needs to converge to give finite expectation.

</details>

<details>
<summary>Full solution</summary>

$\sum_nE_n|c_n|^2$, when the series converges.

</details>

<a id="one-dimensional-bound-states-ex-9"></a>

### 9. Stationary density
Why is an energy eigenstate density time independent?

<details>
<summary>Hint 1</summary>

The separated time factor is a common phase.

</details>

<details>
<summary>Hint 2</summary>

Its squared modulus is one for real energy.

</details>

<details>
<summary>Full solution</summary>

Its time factor has modulus one.

</details>

<a id="one-dimensional-bound-states-ex-10"></a>

### 10. Matching rule
What is continuous at a finite potential step?

<details>
<summary>Hint 1</summary>

Integrate the regular spatial equation across a shrinking interface.

</details>

<details>
<summary>Hint 2</summary>

A finite jump supplies no delta source to support a derivative jump; continuity of the function also matters.

</details>

<details>
<summary>Full solution</summary>

Both $\phi$ and $\phi'$, assuming no delta singularity and constant mass.

</details>

<a id="one-dimensional-bound-states-ex-11"></a>

### 11. Forbidden-region scale
Define $\kappa$ for constant $V>E$.

<details>
<summary>Hint 1</summary>

In a constant region the second derivative is a positive constant times the wave function.

</details>

<details>
<summary>Hint 2</summary>

Choose the positive square root to name the exponential decay rate.

</details>

<details>
<summary>Full solution</summary>

$\kappa=\sqrt{2m(V-E)}/\hbar$.

</details>

<a id="one-dimensional-bound-states-ex-12"></a>

### 12. Bound exterior
Which exponential is retained as $x$ tends to positive infinity?

<details>
<summary>Hint 1</summary>

A growing exterior mode makes the norm diverge.

</details>

<details>
<summary>Hint 2</summary>

Keep only the decaying branch on the positive half-line.

</details>

<details>
<summary>Full solution</summary>

The decaying $e^{-\kappa x}$ term; the growing term is not square integrable.

</details>

<a id="one-dimensional-bound-states-ex-13"></a>

### 13. Parity
Why may eigenstates of an even nondegenerate potential have definite parity?

<details>
<summary>Hint 1</summary>

Parity maps an eigenfunction to another at the same energy.

</details>

<details>
<summary>Hint 2</summary>

Nondegeneracy makes that new vector proportional to the first, and parity squared is identity.

</details>

<details>
<summary>Full solution</summary>

Parity commutes with $H$; it maps an eigenstate to the same one-dimensional eigenspace, hence to a scalar multiple with eigenvalue $\pm1$.

</details>

<a id="one-dimensional-bound-states-ex-14"></a>

### 14. Nondegeneracy scope
Does one-dimensional nondegeneracy automatically hold on disconnected intervals?

<details>
<summary>Hint 1</summary>

Separate identical components can each carry the same eigenvalue.

</details>

<details>
<summary>Hint 2</summary>

Connectedness was used when the Wronskian and initial-value argument identified one global eigenfunction.

</details>

<details>
<summary>Full solution</summary>

No. Identical disconnected components can produce repeated levels.

</details>

<a id="one-dimensional-bound-states-ex-15"></a>

### 15. Node count
How many interior nodes has the infinite-well state $n$?

<details>
<summary>Hint 1</summary>

The sine zeros are at integer multiples of L over n.

</details>

<details>
<summary>Hint 2</summary>

Exclude both endpoints from the interior count.

</details>

<details>
<summary>Full solution</summary>

$n-1$.

</details>

<a id="one-dimensional-bound-states-ex-16"></a>

### 16. Delta jump
What produces the derivative discontinuity?

<details>
<summary>Hint 1</summary>

Integrate the distributional eigenvalue equation across the origin.

</details>

<details>
<summary>Hint 2</summary>

The shrinking regular integrals vanish while the delta integral retains its point value.

</details>

<details>
<summary>Full solution</summary>

Integrating the Schrödinger equation across zero leaves the delta integral and the jump of $\phi'$.

</details>

<a id="one-dimensional-bound-states-ex-17"></a>

### 17. Delta bound scale
Check units of $\kappa=mg/\hbar^2$.

<details>
<summary>Hint 1</summary>

A delta distribution has inverse-length dimension in one dimension.

</details>

<details>
<summary>Hint 2</summary>

The coefficient g therefore contributes one extra factor of length beyond energy.

</details>

<details>
<summary>Full solution</summary>

For $g\delta(x)$ to have energy units, $g$ is energy-times-length; the ratio has inverse-length units.

</details>

<a id="one-dimensional-bound-states-ex-18"></a>

### 18. Delta energy
Substitute $\kappa$ into $E=-\hbar^2\kappa^2/(2m)$.

<details>
<summary>Hint 1</summary>

Insert the inverse-length scale into the negative free exterior energy.

</details>

<details>
<summary>Hint 2</summary>

Cancel one mass and two powers of hbar.

</details>

<details>
<summary>Full solution</summary>

It gives $E=-mg^2/(2\hbar^2)$.

</details>

<a id="one-dimensional-bound-states-ex-19"></a>

### 19. Numerical root
Why must a root report include the equation residual?

<details>
<summary>Hint 1</summary>

A transcendental plot may include poles unrelated to true zeros.

</details>

<details>
<summary>Hint 2</summary>

The defining equation, the bracket and the domain restrictions must all be respected.

</details>

<details>
<summary>Full solution</summary>

A plotted or rounded candidate may be near a pole or miss the equation; the residual directly checks the defining condition.

</details>

<a id="one-dimensional-bound-states-ex-20"></a>

### 20. Tunneling claim
Does nonzero transmission define a unique tunneling time?

<details>
<summary>Hint 1</summary>

Transmission is an outcome probability, not a definition of a temporal observable.

</details>

<details>
<summary>Hint 2</summary>

A time statement needs an explicit preparation, detector and operational convention.

</details>

<details>
<summary>Full solution</summary>

No. Time requires a specified operational observable or protocol, and several inequivalent definitions exist.

</details>

## Chapter summary

Boundary conditions quantize stationary spectra. Infinite and finite wells show expansion, matching, parity, decay, and tunneling, while the delta interaction shows how singular potentials alter derivative conditions. Every exact formula belongs to a named domain and idealized model.

[Previous chapter](wave-functions-operators-domains.md) · [Next chapter](harmonic-oscillator-ladders.md) · [Book overview](#/books/two-state-quantum-mechanics)
