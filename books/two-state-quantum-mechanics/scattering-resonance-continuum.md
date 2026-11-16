
# Scattering, Resonance, and the Continuous Spectrum

Scattering asks how an incoming state is transformed after interacting with a localized potential. Its stationary plane waves are generalized spectral objects, while physical preparations are wave packets. Transmission coefficients, phase shifts, and resonances are asymptotic model predictions—not trajectories through a barrier.

## 1. One-dimensional asymptotic states

For a localized potential and energy $E=\hbar^2k^2/(2m)>0$, a left-incident stationary solution has

$$
\psi(x)\sim e^{ikx}+r e^{-ikx}\qquad\text{as }x\to-\infty,
$$

$$
\psi(x)\sim t e^{ikx}\qquad\text{as }x\to+\infty.
$$

The amplitudes depend on the normalization convention. Probability current gives reflection $R=\lvert r\rvert^2$ and, when asymptotic wave numbers match, transmission $T=\lvert t\rvert^2$. Current conservation yields $R+T=1$ for a real potential with no absorption.

## 2. Unequal channels

For the concrete calculations assume $m>0$, $\hbar>0$, a real piecewise-constant potential with no delta terms unless explicitly added, and an incoming open channel $k>0$. Stationary current is constant because the time-independent density makes the continuity equation give $j'=0$. For $Ae^{ikx}+Be^{-ikx}$, substitution into the current yields $j=\hbar k(|A|^2-|B|^2)/m$: the interference terms in $\psi^*\psi'$ are real and contribute no imaginary part. Thus one cannot infer the total current merely from the local density's standing-wave oscillations. Equating left and right currents proves the stated conservation rule.

If asymptotic wave numbers differ, flux—not squared amplitude alone—sets the transmission:

$$
T=\frac{k_{\mathrm{right}}}{k_{\mathrm{left}}}\lvert t\rvert^2
$$

for equal mass and standard normalization.

For a step with $E>V_0$, matching $\psi$ and $\psi'$ yields $r=(k_1-k_2)/(k_1+k_2)$ and $t=2k_1/(k_1+k_2)$. Thus $R+T=1$ only after the velocity factor is included.

## 3. Barriers and tunneling

### Worked example: a transmitted amplitude larger than one

Place a step at zero with $V=0$ on the left and $V=V_0$ on the right, and take $E>\max(V_0,0)$. Set $k_1=\sqrt{2mE}/\hbar$, $k_2=\sqrt{2m(E-V_0)}/\hbar$. Continuity gives $1+r=t$, and derivative continuity gives $k_1(1-r)=k_2t$. Solving yields the stated $r,t$. If $k_2=k_1/2$, then $r=1/3$, $t=4/3$. Its squared transmitted amplitude is $16/9$, but its flux transmission is $(1/2)(16/9)=8/9$ and reflection is $1/9$. An amplitude larger than one violates no probability bound because the transmitted wave carries a smaller velocity.

For $0<E<V_0$, the right channel is evanescent instead. With the decaying solution $te^{-\kappa x}$, matching gives $r=(k_1-i\kappa)/(k_1+i\kappa)$, of unit modulus. The decaying tail carries zero current, so $R=1$ and there is no transmitted open-channel flux at infinity, although penetration into the forbidden region is nonzero. This semi-infinite step differs from a finite barrier, whose second interface permits a propagating outgoing wave.

For a rectangular barrier above the incoming energy, the interior solution is exponential. Transmission is nonzero for finite width and falls roughly as $e^{-2\kappa L}$ in an opaque regime. The exact prefactor and validity depend on the barrier parameters. A stationary solution does not assign a unique traversal time.

## 4. The scattering operator

### Worked example: a finite barrier and exact transmission

Take $V=V_0>0$ on $0<x<L$ and zero outside. For $E>V_0$, put $q=\sqrt{2m(E-V_0)}/\hbar$ and $k=\sqrt{2mE}/\hbar$. Interior propagation follows from the sine-cosine ODE solution:

$$\binom{\psi(L)}{\psi'(L)}=
\begin{pmatrix}\cos qL&\sin(qL)/q\\-q\sin(qL)&\cos qL\end{pmatrix}
\binom{\psi(0)}{\psi'(0)}.$$

Insert left data $(1+r,ik(1-r))$ and right data $(te^{ikL},ikte^{ikL})$. Eliminating $r$ gives

$$t=\frac{e^{-ikL}}{\cos qL-i\frac{k^2+q^2}{2kq}\sin qL},\qquad
T=\left[1+\frac{V_0^2\sin^2(qL)}{4E(E-V_0)}\right]^{-1}.$$

The second identity follows by taking the denominator modulus and using $\cos^2+\sin^2=1$. At $qL=n\pi$, transmission is one: reflected amplitudes from the two interfaces cancel, although the phase of $t$ need not be zero.

Below the barrier substitute $q=i\kappa$, $\kappa=\sqrt{2m(V_0-E)}/\hbar$, using $\sin(i\kappa L)=i\sinh\kappa L$. The same matching yields

$$T=\left[1+\frac{V_0^2\sinh^2(\kappa L)}{4E(V_0-E)}\right]^{-1}.$$

For fixed parameters and $\kappa L\gg1$ this gives $T\sim16E(V_0-E)e^{-2\kappa L}/V_0^2$. The prefactor matters; the exponent alone is not an exact probability. At $E=V_0$ take the continuous limit to obtain $T=[1+(kL/2)^2]^{-1}$, rather than dividing by the zero interior wave number. Every formula here describes asymptotic stationary flux. None defines how long an individually recorded event spent inside the barrier.

### Worked example: a point-interaction phase and bound pole

For $V=g\delta(x)$, real $g$, require continuity and $\psi'(0^+)-\psi'(0^-)=2mg\psi(0)/\hbar^2$. The left/right plane-wave ansatz gives $t=1+r$ and $2ikr=2mg(1+r)/\hbar^2$. With $\eta=mg/(\hbar^2k)$,

$$t=\frac1{1+i\eta},\qquad r=\frac{-i\eta}{1+i\eta},\qquad
T=\frac1{1+\eta^2},\quad R=\frac{\eta^2}{1+\eta^2}.$$

This verifies flux conservation and retains a nontrivial transmission phase. Writing $t=k/[k+img/\hbar^2]$ displays a pole at $k=-img/\hbar^2$. For attractive $g<0$ it lies on the positive imaginary axis and produces the negative bound energy $-mg^2/(2\hbar^2)$ derived in the preceding bound-state chapter. For repulsive $g>0$ that pole is on the other imaginary side and supplies no decaying square-integrable bound vector. A complex wave-number pole must be interpreted on its specified sheet and branch, not labeled indiscriminately as an ordinary resonance state.

In an abstract formulation, wave operators compare full evolution with free evolution at remote times. The scattering operator $S$ maps incoming asymptotic states to outgoing ones and is unitary when channels are complete and dynamics is closed. Existence and asymptotic completeness are theorems requiring hypotheses, not automatic properties of every potential.

## 5. Phase shifts in three dimensions

One precise abstract convention is $W_\pm=\operatorname{s-lim}_{t\to\pm\infty}e^{iHt/\hbar}e^{-iH_0t/\hbar}$ on the free absolutely continuous subspace, whenever those limits exist. Then $S=W_+^\dagger W_-$ relates incoming to outgoing free data. Existence, the isometry property, and equality of the complete scattering ranges are separate theorem inputs requiring potential and domain assumptions. Under them, $W_+W_+^\dagger$ and $W_-W_-^\dagger$ are the same scattering-range projection. Hence $S^\dagger S=W_-^\dagger W_+W_+^\dagger W_-=I$, and similarly $SS^\dagger=I$. Bound states lie outside this scattering sector. This proves the unitarity implication while making clear which analytic hypotheses were assumed; it is not a universal existence proof for arbitrary long-range or singular potentials.

For a central short-range potential, partial waves labeled by $l$ acquire phase shifts $\delta_l(k)$. The amplitude is

$$
f(\theta)=\sum_l(2l+1)\frac{e^{2i\delta_l}-1}{2ik}P_l(\cos\theta).
$$

The total cross section is $\sigma=(4\pi/k^2)\sum_l(2l+1)\sin^2(\delta_l)$ under standard elastic conventions. At low energy, often the $s$ wave dominates, but long-range interactions need modified theory.

## 6. Resonances

For a short-range central elastic model, use $\psi\sim e^{ikz}+f(\theta)e^{ikr}/r$. The outgoing radial flux at large radius is $\hbar k|f|^2/(mr^2)$, while the incident flux per area is $\hbar k/m$. Thus $d\sigma/d\Omega=|f|^2$. Write the partial-wave coefficient as $(e^{2i\delta_l}-1)/(2ik)=e^{i\delta_l}\sin\delta_l/k$. Integrating the squared series uses $\int P_lP_j\,d\Omega=4\pi\delta_{lj}/(2l+1)$ and removes cross terms, giving the stated total cross section. This calculation assumes convergence permitting the integration, real phase shifts in a complete elastic channel, and the short-range asymptotic form. Coulomb's long-range tail needs modified asymptotics, so its scattering cannot simply be inserted into this short-range formula.

A resonance can appear as rapid phase variation, a cross-section peak, or a pole of an analytically continued resolvent or $S$ matrix. Near an isolated narrow resonance, a Lorentzian-like line can emerge with width related to lifetime. Background interference, thresholds, overlapping resonances, and detector convolution can distort that shape.

A resonance is not an ordinary normalizable eigenstate of a self-adjoint Hamiltonian with complex energy. Complex poles belong to analytic continuation or effective non-Hermitian descriptions.

## 7. Numerical evidence

A phase-sensitive identity complements scalar flux conservation. For a real finite-range potential with the same wave number on both sides, let $\psi_L$ and $\psi_R$ be left- and right-incident solutions of unit incoming amplitude. Their nonconjugated Wronskian is constant because they satisfy the same second-order ODE. On the right it equals $-2ik t_L$, and on the left $-2ik t_R$, so $t_L=t_R$. The flux-normalized two-channel matrix has columns containing the corresponding reflected and transmitted amplitudes. Its orthogonality requires $r_L^*t_R+t_L^*r_R=0$ in addition to the two probability-sum identities. Thus matching $R+T=1$ separately for each incidence direction still leaves a phase constraint. A computation can preserve norm while getting this interference structure wrong. Reciprocity here uses the real scalar potential, equal exterior channels and the stated incidence conventions; it is not asserted for magnetic, absorptive or omitted-channel effective models.

If an isolated narrow effective pole is $E_r-i\Gamma/2$, $\Gamma>0$, its amplitude factor is $e^{-iE_rt/\hbar}e^{-\Gamma t/(2\hbar)}$ and its probability factor is $e^{-\Gamma t/\hbar}$. The corresponding approximate lifetime is $\tau=\hbar/\Gamma$. Under a negligible slowly varying background, the energy profile $[(E-E_r)^2+(\Gamma/2)^2]^{-1}$ has full width at half maximum $\Gamma$. These width/lifetime statements rely on that pole-dominated effective regime; they do not give an exactly exponential survival probability at every time for an arbitrary self-adjoint Hamiltonian. Instrument and background widths can change the observed profile.

For a normalized incoming packet in the equal exterior channel, let $a(k)$ be its positive-wave-number amplitude with $\int|a(k)|^2dk=1$. Asymptotic transmitted probability is $\int|a(k)|^2T(k)dk$ by the packet decomposition and Plancherel, not necessarily $T$ at the central energy. If its support lies within $\delta$ of $k_0$ and $T$ is Lipschitz there with constant $M$, the difference from $T(k_0)$ is at most $M\delta$. Near a narrow resonance this constant can be large, so an apparently narrow preparation can still average over appreciably different stationary outcomes. Flux normalization and packet spectral measure must be changed consistently for unequal channels.

Numerical scattering should report current residuals, matching residuals, domain truncation, absorbing-boundary effects, grid refinement, and benchmark cases. A reflection from the edge of a finite numerical box is not physical scattering from the modeled potential.

## The forward amplitude carries a total-flux identity

For the short-range central elastic problem, evaluate the partial-wave
amplitude at zero angle. Each Legendre polynomial equals one there.
The imaginary part of the coefficient eⁱᵟ sin δ is sin²δ, so
$$\operatorname{Im}f(0)=\frac1k\sum_l(2l+1)\sin^2\delta_l.$$
Comparison with the total cross section derived above gives
$\sigma_{\rm tot}=(4\pi/k)\operatorname{Im}f(0)$. This is the optical
theorem in the stated scalar short-range convention. The identity is
not a claim that the scattered intensity at the forward point equals
the total scattered intensity. It relates a phase-sensitive amplitude
component to an angularly integrated flux.

The underlying mechanism is interference between the incident wave and
the forward scattered wave. A detector measuring only absolute intensity
away from the beam does not directly supply every phase entering that
interference. This is another reason that matching a transmission probability
or a cross-section peak alone leaves part of the scattering information
undetermined.

If some channels are omitted from an effective elastic description,
write a partial-wave elastic coefficient as Sₗ rather than assuming its
modulus is one. The elastic contribution is proportional to |Sₗ−1|²,
whereas the lost-channel contribution is proportional to 1−|Sₗ|² when
the full enlarged scattering model is unitary and the omitted flux
is nonnegative. Their sum is 2(1−Re Sₗ), by expanding the square.
Multiplying each by its partial-wave weight π(2l+1)/k² gives a total
consistent with the forward-amplitude identity. In particular, elastic
and reaction cross sections are different quantities once the elastic
submatrix is not unitary.

The assumptions should remain attached to the calculation. The incident
and outgoing normalizations must use the same flux convention, partial-wave
expansions must converge sufficiently for the evaluation and integration,
and the short-range asymptotic form must be appropriate. A Coulomb
tail changes the forward asymptotics and makes direct use of this
finite short-range formula invalid. A complex absorbing potential is
an effective model whose missing flux must be interpreted through its
construction; it does not acquire a complete physical channel description
merely by producing a modulus below one.

This relation is useful as an analytic consistency constraint on a
proposed amplitude. It ties phase, angular decomposition and total flux
together. Satisfying it does not prove that the potential, channel
list or detector model is the right description of an experiment.
Those are separate modeling questions, just as unitary matching does
not turn a resonance pole into a normalizable complex-energy eigenstate.

## Translation changes a reflection phase without changing its probability

Translate an equal-channel one-dimensional potential by
a distance a. If its original left-incident solution
has unit incoming amplitude, evaluate that solution
at x−a and multiply by exp(ika). The incoming
term is again exp(ikx), the transmitted amplitude
is unchanged and the reflected amplitude is multiplied
by exp(2ika). Direct substitution verifies the
translated equation and asymptotic normalization.

Reflection and transmission probabilities are therefore
unchanged, while a reflection phase referenced to
fixed laboratory coordinates changes. Interference with
a second reflected path can detect that relative
phase, so probabilities alone do not encode the
complete amplitude information. Conversely comparing
phases from two calculations using different origin
conventions can create an apparent disagreement with
no changed potential shape. Specify incident-wave
normalization and reference positions before interpreting
a phase difference as a new physical effect.
The argument assumes identical exterior wave numbers;
unequal channels require their corresponding asymptotic
normalizations.

## Exercises with complete solutions

<a id="scattering-resonance-continuum-ex-1"></a>

### 1. Plane-wave current
Find the current of $Ae^{ikx}$.

<details>
<summary>Hint 1</summary>

Differentiate the plane wave in the probability-current expression.

</details>

<details>
<summary>Hint 2</summary>

Its phase gradient gives k while its modulus supplies the constant amplitude squared.

</details>

<details>
<summary>Full solution</summary>

$j=\hbar k\lvert A\rvert^2/m$.

</details>

<a id="scattering-resonance-continuum-ex-2"></a>

### 2. Reflected current
What is the current of $re^{-ikx}$?

<details>
<summary>Hint 1</summary>

The reflected exponential has negative wave number.

</details>

<details>
<summary>Hint 2</summary>

Retain the negative sign of its current; reflection probability uses its magnitude.

</details>

<details>
<summary>Full solution</summary>

$-\hbar k\lvert r\rvert^2/m$; the sign records leftward flux.

</details>

<a id="scattering-resonance-continuum-ex-3"></a>

### 3. Equal-channel reflection
Why is $R=\lvert r\rvert^2$?

<details>
<summary>Hint 1</summary>

Form the ratio of outgoing reflected flux magnitude to incoming flux.

</details>

<details>
<summary>Hint 2</summary>

Their equal speeds cancel.

</details>

<details>
<summary>Full solution</summary>

The reflected and incident speeds match, so the outward-to-incoming flux magnitude ratio is $\lvert r\rvert^2$.

</details>

<a id="scattering-resonance-continuum-ex-4"></a>

### 4. Flux factor
Why can $T$ differ from $\lvert t\rvert^2$?

<details>
<summary>Hint 1</summary>

Current includes velocity as well as squared amplitude.

</details>

<details>
<summary>Hint 2</summary>

Compare the two asymptotic wave numbers and masses before taking their ratio.

</details>

<details>
<summary>Full solution</summary>

Probability flux includes group velocity, which differs between asymptotic channels.

</details>

<a id="scattering-resonance-continuum-ex-5"></a>

### 5. No potential
Find $r,t$ for $V=0$.

<details>
<summary>Hint 1</summary>

The same incident free solution extends through the entire line.

</details>

<details>
<summary>Hint 2</summary>

No interface generates a reflected component.

</details>

<details>
<summary>Full solution</summary>

There is no reflected component: $r=0,t=1$.

</details>

<a id="scattering-resonance-continuum-ex-6"></a>

### 6. Step reflection
State $R$ for $E>V_0$.

<details>
<summary>Hint 1</summary>

Use continuity of value and slope at the step.

</details>

<details>
<summary>Hint 2</summary>

Solve the two linear equations for r, then take its modulus squared.

</details>

<details>
<summary>Full solution</summary>

$R=\left((k_1-k_2)/(k_1+k_2)\right)^2$.

</details>

<a id="scattering-resonance-continuum-ex-7"></a>

### 7. Step transmission
State the flux transmission.

<details>
<summary>Hint 1</summary>

Insert the step amplitude into the velocity-adjusted flux ratio.

</details>

<details>
<summary>Hint 2</summary>

The right wave number remains in the numerator.

</details>

<details>
<summary>Full solution</summary>

$T=(k_2/k_1)\left\lvert 2k_1/(k_1+k_2)\right\rvert^2=4k_1k_2/(k_1+k_2)^2$.

</details>

<a id="scattering-resonance-continuum-ex-8"></a>

### 8. Conservation check
Verify the preceding $R+T$.

<details>
<summary>Hint 1</summary>

Put both expressions over the common squared denominator.

</details>

<details>
<summary>Hint 2</summary>

Their numerator is the expansion of that same denominator.

</details>

<details>
<summary>Full solution</summary>

The numerator is $(k_1-k_2)^2+4k_1k_2=(k_1+k_2)^2$, so the sum is one.

</details>

<a id="scattering-resonance-continuum-ex-9"></a>

### 9. Barrier decay
Define $\kappa$ when $V_0>E$.

<details>
<summary>Hint 1</summary>

The interior kinetic energy is negative relative to the barrier top.

</details>

<details>
<summary>Hint 2</summary>

Choose the positive inverse-length square root for exponential decay.

</details>

<details>
<summary>Full solution</summary>

$\kappa=\sqrt{2m(V_0-E)}/\hbar$.

</details>

<a id="scattering-resonance-continuum-ex-10"></a>

### 10. Infinite-width limit
What happens to opaque-barrier transmission as width grows?

<details>
<summary>Hint 1</summary>

Hold the barrier height and incoming energy fixed.

</details>

<details>
<summary>Hint 2</summary>

The hyperbolic-sine denominator grows exponentially with twice the decay exponent.

</details>

<details>
<summary>Full solution</summary>

It tends to zero exponentially under the fixed-parameter approximation.

</details>

<a id="scattering-resonance-continuum-ex-11"></a>

### 11. Real potential
Why does it matter for flux conservation?

<details>
<summary>Hint 1</summary>

Derive the continuity equation with the potential and its conjugate.

</details>

<details>
<summary>Hint 2</summary>

Only a real potential cancels exactly without a source or sink.

</details>

<details>
<summary>Full solution</summary>

A real multiplication potential is Hermitian and cancels from the continuity equation; an imaginary effective term can absorb or amplify norm.

</details>

<a id="scattering-resonance-continuum-ex-12"></a>

### 12. Packet versus plane wave
Why use a wave packet for a preparation?

<details>
<summary>Hint 1</summary>

An infinite plane wave has constant nonzero density on an infinite interval.

</details>

<details>
<summary>Hint 2</summary>

A square-integrable spectral packet has finite norm and an energy distribution.

</details>

<details>
<summary>Full solution</summary>

A plane wave is not normalizable; a packet has finite norm and energy spread.

</details>

<a id="scattering-resonance-continuum-ex-13"></a>

### 13. Unitary $S$
What does its unitarity express?

<details>
<summary>Hint 1</summary>

S acts on all included asymptotic channel amplitudes.

</details>

<details>
<summary>Hint 2</summary>

Its isometric norm preservation expresses complete probability balance in that sector.

</details>

<details>
<summary>Full solution</summary>

Total asymptotic probability flux is conserved across all included channels.

</details>

<a id="scattering-resonance-continuum-ex-14"></a>

### 14. Missing channel
Can an elastic sub-block be nonunitary?

<details>
<summary>Hint 1</summary>

Projecting onto fewer channels discards some possible outgoing probability.

</details>

<details>
<summary>Hint 2</summary>

The full dynamics can remain unitary while the selected sub-block loses norm.

</details>

<details>
<summary>Full solution</summary>

Yes. Probability may flow into other open channels even when the full closed-system $S$ is unitary.

</details>

<a id="scattering-resonance-continuum-ex-15"></a>

### 15. Zero phase shift
What partial-wave contribution occurs at $\delta_l=0$?

<details>
<summary>Hint 1</summary>

Evaluate either exponential or sine at zero phase.

</details>

<details>
<summary>Hint 2</summary>

The elastic partial-wave amplitude and cross section both vanish.

</details>

<details>
<summary>Full solution</summary>

It vanishes because $e^{2i\delta_l}-1=0$ and $\sin^2\delta_l=0$.

</details>

<a id="scattering-resonance-continuum-ex-16"></a>

### 16. Unitarity limit
What is the largest elastic contribution for one $l$?

<details>
<summary>Hint 1</summary>

The sine squared of a real phase is bounded by one.

</details>

<details>
<summary>Hint 2</summary>

Retain the multiplicity factor for the chosen angular momentum.

</details>

<details>
<summary>Full solution</summary>

Since $\sin^2\delta_l\leq1$, it is $(4\pi/k^2)(2l+1)$.

</details>

<a id="scattering-resonance-continuum-ex-17"></a>

### 17. Resonance width
Does every measured width equal an intrinsic decay width?

<details>
<summary>Hint 1</summary>

A measured profile combines intrinsic dynamics with apparatus and environment.

</details>

<details>
<summary>Hint 2</summary>

The simple lifetime relation assumes an isolated pole and a compatible linewidth convention.

</details>

<details>
<summary>Full solution</summary>

No. Instrument resolution, Doppler effects, collisions, backgrounds, and overlapping lines can contribute.

</details>

<a id="scattering-resonance-continuum-ex-18"></a>

### 18. Complex energy
Can a self-adjoint Hamiltonian have an ordinary eigenvector with complex eigenvalue?

<details>
<summary>Hint 1</summary>

Apply the symmetric quadratic-form argument to an ordinary eigenvector.

</details>

<details>
<summary>Hint 2</summary>

A continuation pole is not such a vector in the self-adjoint Hilbert domain.

</details>

<details>
<summary>Full solution</summary>

No. Resonance complex energies arise through continuation or effective descriptions.

</details>

<a id="scattering-resonance-continuum-ex-19"></a>

### 19. Box artifact
How can a numerical boundary mimic reflection?

<details>
<summary>Hint 1</summary>

Follow the outgoing wave to the edge of the numerical region.

</details>

<details>
<summary>Hint 2</summary>

An artificial wall can send it back even when the physical potential has no such reflector.

</details>

<details>
<summary>Full solution</summary>

An outgoing packet reaches the finite edge and returns unless absorption or a sufficiently large domain prevents it during observation.

</details>

<a id="scattering-resonance-continuum-ex-20"></a>

### 20. Scattering evidence
Does $R+T$ near one prove grid convergence?

<details>
<summary>Hint 1</summary>

Conservation is only one scalar property of the output.

</details>

<details>
<summary>Hint 2</summary>

Two inaccurate amplitudes can still satisfy a flux identity while their phases or boundary behavior are wrong.

</details>

<details>
<summary>Full solution</summary>

No. It checks flux balance but not phase, discretization, boundary, or matching accuracy.

</details>

## Project: a scattering evidence table

Implement transfer-matrix or direct matching calculations for a step, barrier, and double barrier. Report complex amplitudes, flux-adjusted $R,T$, conservation residual, and sensitivity to parameter rounding. Locate a double-barrier resonance by bracketed refinement and distinguish the computed stationary peak from a measured lifetime claim. Provide text tables and an accessible description of every plotted curve.

## Chapter summary

Scattering theory compares incoming and outgoing asymptotic states. Flux ratios, not amplitudes alone, determine probabilities; partial waves organize central scattering; resonances demand spectral and analytic care. Numerical and experimental claims require channel, boundary, and resolution audits.

[Previous chapter](central-potentials-hydrogen.md) · [Next chapter](tensor-products-entanglement.md) · [Book overview](#/books/two-state-quantum-mechanics)
