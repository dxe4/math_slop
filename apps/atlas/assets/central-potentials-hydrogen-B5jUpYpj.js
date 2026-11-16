var e=`---
parent_id: book-two-state-quantum-mechanics
chapter_id: central-potentials-hydrogen
title: "Central Potentials and the Hydrogenic Spectrum"
level: advanced-undergraduate
estimated_minutes: 235
license: CC BY-SA 4.0
status: draft
---

# Central Potentials and the Hydrogenic Spectrum

A central potential joins rotational symmetry to a radial boundary problem. The Coulomb model then produces hydrogenic quantum numbers and degeneracies. These results describe a nonrelativistic two-body idealization; fine structure, nuclear size, radiation, and many-electron effects lie outside its exact scope.

## 1. Separation in spherical coordinates

For $H=P^2/(2\\mu)+V(r)$, rotational invariance gives $[H,L^2]=[H,L_z]=0$. Write

$$
\\psi(r,\\theta,\\phi)=R(r)Y_l^m(\\theta,\\phi).
$$

Spherical harmonics satisfy $L^2Y_l^m=\\hbar^2l(l+1)Y_l^m$ and $L_zY_l^m=\\hbar mY_l^m$, with integer $l\\geq 0$ and $m=-l,\\ldots,l$.

We take $\\mu>0$ as the relative-motion reduced mass and $\\hbar>0$. Center-of-mass motion separates from the isolated two-body problem; this wave function describes the relative coordinate. Scalar single-valued orbital functions have azimuthal factors $e^{im\\phi}$, forcing integer $m$. The associated Legendre polar equation has regular spherical solutions with integer $l\\ge|m|$. Their completeness and regular endpoint theory are named angular-analysis inputs. Half-integer intrinsic spin uses a separate spin space, not a scalar spherical harmonic with half-integer azimuthal phase.

## 2. Radial equation

With $u(r)=rR(r)$, normalization becomes $\\int_0^\\infty \\lvert u(r)\\rvert^2\\,dr=1$, and

$$
-\\frac{\\hbar^2}{2\\mu}u''+\\left[V(r)+\\frac{\\hbar^2l(l+1)}{2\\mu r^2}\\right]u=Eu.
$$

The centrifugal term is effective, not a new potential force. Regular solutions obey an appropriate origin condition, commonly $u(0)=0$; singular potentials require sharper domain analysis.

Use $\\Delta=r^{-2}\\partial_r(r^2\\partial_r)+r^{-2}\\Delta_{S^2}$ and $L^2=-\\hbar^2\\Delta_{S^2}$. For $R=u/r$, differentiation gives $r^{-2}(r^2R')'=u''/r$. Multiplying the separated equation by $r$ proves the radial equation and changes the normalization measure from $r^2dr$ to $dr$.

For Coulomb choose the standard three-dimensional finite-kinetic-energy realization, with regular radial branch $u\\sim r^{l+1}$ at the origin. The other leading branch $r^{-l}$ is not square integrable for $l\\ge1$; for $l=0$ its leading constant gives $R\\sim1/r$, outside that finite-kinetic-energy class. This origin choice excludes additional point-interaction extensions at the nucleus. Square integrability of $u$ alone is not the complete origin contract for the zero-angular-momentum channel.

## 3. Coulomb scales

For $V(r)=-\\kappa/r$, define

$$
a=\\frac{\\hbar^2}{\\mu\\kappa},\\qquad E_* = \\frac{\\mu\\kappa^2}{2\\hbar^2}.
$$

Bound energies are

$$
E_n=-\\frac{E_*}{n^2},\\qquad n=1,2,\\ldots,
$$

with $l=0,\\ldots,n-1$. Ignoring spin, each level has $\\sum_{l=0}^{n-1}(2l+1)=n^2$ spatial states.

### Deriving the Laguerre polynomial condition

Assume $\\kappa>0$ and $E<0$. Put $\\gamma=\\sqrt{-2\\mu E}/\\hbar$, $\\rho=2\\gamma r$, and $\\lambda=\\mu\\kappa/(\\hbar^2\\gamma)=1/(a\\gamma)$. The radial equation is

$$u_{\\rho\\rho}+\\left[-\\frac14+\\frac\\lambda\\rho-\\frac{l(l+1)}{\\rho^2}\\right]u=0.$$

Factor $u=\\rho^{l+1}e^{-\\rho/2}v(\\rho)$. Substitution gives

$$\\rho v''+(2l+2-\\rho)v'+(\\lambda-l-1)v=0.$$

The regular-branch series $v=\\sum_{k\\ge0}c_k\\rho^k$, $c_0\\ne0$, has recurrence

$$c_{k+1}=\\frac{k+l+1-\\lambda}{(k+1)(k+2l+2)}c_k.$$

It converges at every finite $\\rho$ by the ratio criterion. A terminating solution has degree $N=\\lambda-l-1$ a nonnegative integer. Conversely nontermination violates square integrability. Choose the common phase to make the coefficients real. Beyond a sufficiently large $K$, their ratios are positive and satisfy $|c_{k+1}/c_k|\\ge(1-\\delta)/(k+1)$ for fixed $0<\\delta<1/2$. Consequently the same-sign tail dominates a positive multiple of an exponential tail:

$$\\sum_{k\\ge K}|c_k|\\rho^k\\ge\\frac{|c_K|K!}{(1-\\delta)^K}
\\sum_{k\\ge K}\\frac{[(1-\\delta)\\rho]^k}{k!}.$$

Earlier finitely many polynomial terms cannot cancel this exponential growth. The factor $e^{-\\rho/2}\\rho^{l+1}$ still leaves growth of order at least $e^{(1/2-\\delta)\\rho}$ up to polynomial terms, so $u\\notin L^2$. Thus the regular bound branch must terminate.

Writing $n=N+l+1=\\lambda$ gives $\\gamma=1/(na)$ and $E=-\\mu\\kappa^2/(2\\hbar^2n^2)$. The degree-$N$ solution is proportional to $L_N^{2l+1}(\\rho)$, the associated Laguerre polynomial solving $\\rho L''+(2l+2-\\rho)L'+NL=0$. Hence

$$R_{nl}(r)\\ \\propto\\ e^{-r/(na)}\\left(\\frac{2r}{na}\\right)^l
L_{n-l-1}^{2l+1}\\left(\\frac{2r}{na}\\right).$$

Each polynomial times these endpoint factors satisfies the required origin and decay conditions, producing a bound eigenfunction after normalization. The allowed $l\\le n-1$ follows from $N\\ge0$; summing magnetic multiplicities gives $n^2$. This derives the negative-energy levels and radial functions. It does not remove the positive continuous spectrum or prove completeness of the entire Coulomb spectral representation, which requires a further operator theorem.

## 4. Ground state

The regular series exhausts the admissible origin solutions rather than merely guessing a family. Near zero its constructed solution $u_1\\sim r^{l+1}$ is nonzero. Reduction of order gives an independent solution $u_2=u_1\\int^r u_1(s)^{-2}ds$, with leading behavior proportional to $r^{-l}$, possibly accompanied by lower-order logarithms. Every local solution is their linear combination by second-order ODE uniqueness. The selected finite-energy origin condition excludes the $u_2$ coefficient, leaving exactly the regular series analyzed at infinity. Polynomial termination is therefore necessary for this chosen Coulomb realization, not just a sufficient ansatz for some eigenfunctions.

The normalized ground state is

$$
\\psi_{100}(r)=\\frac{e^{-r/a}}{\\sqrt{\\pi a^3}}.
$$

Its radial probability density is $4r^2e^{-2r/a}/a^3$. The wave function is largest at the origin, but the radial probability is zero there because the shell volume vanishes. It peaks at $r=a$.

### Worked example: ground-state radii and energy balance

The elementary formula $\\int_0^\\infty r^ke^{-br}dr=k!/b^{k+1}$ for integer $k\\ge0$, $b>0$, follows by integration by parts. Applied to the radial density it gives normalization one, $\\langle r\\rangle=3a/2$ and $\\langle1/r\\rangle=1/a$. Thus the most probable radius $a$ differs from the mean. In fact the probability inside $a$ is $1-5e^{-2}$, found by integrating the density up to that radius; the mode does not split the probability in half.

The potential expectation is $\\langle V\\rangle=-\\kappa/a=-2E_*$. Since $E_1=-E_*$, the kinetic expectation is $E_*$, giving $2\\langle T\\rangle=-\\langle V\\rangle$. The wave function's maximum at the origin, the radial density's zero there, and its nonzero mean radius are compatible statements about different quantities and measures. None describes an electron following a circular orbit at radius $a$.

### Worked example: the two radial shapes at the first excited energy

For $n=2,l=0$, the recurrence terminates at degree one with $L_1^1(\\rho)=2-\\rho$ and $\\rho=r/a$. For $n=2,l=1$, it terminates at degree zero. The normalized radial functions are

$$R_{20}=\\frac{(2-r/a)e^{-r/(2a)}}{2\\sqrt2\\,a^{3/2}},\\qquad
R_{21}=\\frac{(r/a)e^{-r/(2a)}}{2\\sqrt6\\,a^{3/2}}.$$

Using $t=r/a$, the first squared radial norm is $[4(2!)-4(3!)+4!]/8=1$, and the second is $4!/24=1$. Both have energy $-E_*/4$, yet $R_{20}$ has one positive radial node at $2a$ while $R_{21}$ has none. Their angular sectors differ too. With $Y_{10}=\\sqrt{3/(4\\pi)}\\cos\\theta$, the real $2p_z$ orbital has its angular nodal plane at the equator. A complex $Y_1^1\\propto\\sin\\theta e^{i\\phi}$ instead carries azimuthal phase winding and has no azimuthal nodal plane. Equal energies do not imply equal probability shapes, and a real-orbital nodal convention must not be imposed on every complex harmonic.

## 5. Quantum numbers and nodes

Hydrogenic states use $n,l,m$. The number of positive radial nodes is $n-l-1$, using the simple positive zeros of the associated Laguerre polynomial, a standard orthogonal-polynomial/Sturm result. The familiar count of $l$ angular nodal surfaces applies to the standard separated **real** harmonic basis, with $|m|$ azimuthal nodal planes and $l-|m|$ polar zeros. Complex $e^{im\\phi}$ harmonics have azimuthal phase winding instead of those nodal planes, so the blanket angular count must be qualified. A common global phase changes no density, while a different superposition inside a degenerate angular sector can change its shape. An orbital image is an isosurface or density visualization, not a classical trajectory.

## 6. Degeneracy and perturbations

Rotational symmetry explains independence from $m$. The additional independence from $l$ in the Coulomb spectrum reflects a larger dynamical symmetry associated with the Runge–Lenz vector. Generic central potentials need not share it.

Spin-orbit coupling, relativistic kinetic corrections, Darwin terms, Lamb shifts, external fields, and finite nuclear size alter the spectrum. Leading nonrelativistic finite-mass recoil is already included through $\\mu$; further recoil corrections lie beyond that separation. Degenerate perturbation theory is required when a perturbation couples states within a degenerate eigenspace.

## 7. Spectroscopy boundary

The reduced-mass dependence itself gives a useful exact scaling within this model. If a particle of mass $m_e$ interacts with a nucleus of mass $M$, then $\\mu=m_eM/(m_e+M)$. At fixed Coulomb coefficient, the energy scale relative to an infinite-mass nucleus is multiplied by $M/(m_e+M)$, while the length scale is multiplied by its reciprocal. For $M\\gg m_e$ this energy factor is $1-m_e/M+O((m_e/M)^2)$. Thus leading isotope-dependent shifts already occur before relativistic or finite-size corrections. Comparing two spectra must state whether this reduced-mass effect has been included; calling all nuclear-mass dependence omitted would misdescribe the present derivation.

Energy differences give angular frequencies $\\omega=(E_i-E_f)/\\hbar$ and photon frequencies $\\nu=(E_i-E_f)/h$ in an emission model. Transition strength also requires a coupling operator and selection rules; an energy difference alone does not guarantee a line. Population, lifetime, line broadening, and detector response shape observed spectra.

### Worked example: an energy difference is not a line strength

The $n=3$ to $n=2$ energy gap is $E_*(1/4-1/9)=5E_*/36$, giving photon frequency $5E_*/(36h)$ in the ideal emission model. Whether a transition is present still depends on the coupling. For example, between $2s$ and $1s$ the $z$-dipole angular factor is $\\int Y_{00}^*\\cos\\theta\\,Y_{00}\\,d\\Omega=0$ by odd polar symmetry. The energy gap exists but this electric-dipole matrix element vanishes.

Between $2p_z$ and $1s$, the same angular integral with $Y_{10}$ is $1/\\sqrt3$, since $\\int\\cos^2\\theta\\,d\\Omega=4\\pi/3$. Its radial factor $\\int_0^\\infty R_{10}R_{21}r^3dr$ is positive: both radial functions are positive for $r>0$. Thus this particular polarized dipole coupling is nonzero. This direct integral argument explains the contrast without inferring a transition rate from energies alone. Rate, population and linewidth require a radiation model and apparatus conditions beyond the stationary Coulomb spectrum. Other interactions can allow transitions forbidden in this leading dipole model.

## Scaling explains the Coulomb energy balance

The explicit bound-state radial functions are smooth away from the origin
and decay exponentially, so their kinetic and Coulomb expectations are
finite. For one normalized bound eigenfunction, consider the normalized
dilation $\\psi_a(x)=a^{3/2}\\psi(ax)$ for positive a. Changing variables proves its
norm is one. A derivative brings one factor of a, so kinetic energy
scales as a². The inverse-radius potential brings one factor of a,
so its expectation scales as a. Thus the expectation of the fixed
Coulomb Hamiltonian in this trial family is
$$\\mathcal E(a)=a^2\\langle T\\rangle+a\\langle V\\rangle.$$
The bound eigenfunction is stationary under differentiable normalized
variations in the quadratic-form domain. For these explicit exponentially
decaying functions, the dilation family has that regularity and the
derivative can be justified directly in the integrals. Its energy
derivative at a=1 therefore vanishes, giving twice the kinetic expectation
plus the potential expectation equal to zero.

Combining this virial balance with E equal to the sum gives kinetic
expectation −E and potential expectation 2E. Since V=−k/r, the inverse-radius
expectation is −2E/k. Inserting the derived hydrogenic energy levels
produces the inverse length one divided by a₀n², with a₀ defined using
the reduced mass. This is an independent consistency relation between
the radial length scale, the energy and the kinetic cost. It does
not say that the radius itself is fixed at a₀n² or that every
moment is determined by this one inverse-radius expectation.

For the ground state, direct integration already gave the mean radius
and its variance. Those are different quantities from the reciprocal
of the inverse-radius mean. In general averaging and taking a reciprocal
do not commute. Confusing them would attach one sharp classical orbit
to a spatial probability distribution that has nonzero width.

The same lesson appears in the two first-excited radial shapes.
The normalized radial factor for the s state has a node, whereas
the p radial factor has none away from the origin. Their energies
agree in the ideal Coulomb problem, and the virial balance gives
the same kinetic and potential expectations. Yet their mean-square radii
differ. With x=r/a₀, the s-state radial integral is a₀² times
the integral of x⁴(2−x)²e⁻ˣ divided by eight, giving 42a₀² by the
factorial integrals. The p-state integral is a₀² times the integral
of x⁶e⁻ˣ divided by twenty-four, giving 30a₀². Equal energy does
not identify equal spatial shape or equal response to every position-dependent
probe.

Rotational symmetry explains degeneracy among the magnetic labels within
a fixed angular-momentum representation. It does not by itself explain
equality of the s and p energies, because rotations do not change
the angular-momentum quantum number. That larger Coulomb degeneracy has
additional structure. A general central perturbation preserves rotational
symmetry while shifting distinct radial and angular families differently.
The perturbation chapter develops the appropriate matrix elements and
degenerate-subspace analysis; no correction should be inferred solely
from an unperturbed energy gap.

This scaling application keeps the model boundaries visible. It uses
the nonrelativistic Coulomb Hamiltonian with the stated reduced mass.
Fine structure, spin coupling, finite nuclear size and radiation require
additional terms. The exact identities here provide benchmarks for
those extensions, rather than asserting that the ideal spectrum already
contains them.

## A stationary density can carry angular current

A hydrogen eigenfunction with angular phase exp(imφ)
has time-independent probability density, but need
not have zero current. Insert its phase gradient
into the Schrödinger current formula. Away from
the angular-coordinate singularities, the azimuthal
component is ℏm times the density divided by
the reduced mass, radius and sine of the polar
angle. Its divergence vanishes for this stationary
axisymmetric density, consistent with the continuity
equation.

A real angular combination at the same degenerate
energy can instead have zero current. These states
are different preparations inside the eigenspace,
not the same vector with different global phases.
Their shared energy and radial probability therefore
do not determine all spatial observables. Near an
angular coordinate singularity, use the full regular
Cartesian wave function rather than assigning physical
meaning to the separate singular coordinate factor.
Stationarity concerns the density's time derivative;
it does not require every probability-flow component
to vanish.

## Exercises with complete solutions

<a id="central-potentials-hydrogen-ex-1"></a>

### 1. Rotational invariance
Why does a central $V(r)$ commute with angular momentum?

<details>
<summary>Hint 1</summary>

Both distance from the origin and the free kinetic form are rotationally invariant.

</details>

<details>
<summary>Hint 2</summary>

Differentiate rotation invariance on a common core to obtain the commutators.

</details>

<details>
<summary>Full solution</summary>

Rotations leave $r$ unchanged, so multiplication by $V(r)$ is rotation invariant; the kinetic term is also rotationally invariant.

</details>

<a id="central-potentials-hydrogen-ex-2"></a>

### 2. Magnetic values
How many $m$ values occur for fixed $l$?

<details>
<summary>Hint 1</summary>

The magnetic integers run from minus l to plus l inclusive.

</details>

<details>
<summary>Hint 2</summary>

Count both endpoints and zero.

</details>

<details>
<summary>Full solution</summary>

From $-l$ through $l$, there are $2l+1$.

</details>

<a id="central-potentials-hydrogen-ex-3"></a>

### 3. Radial substitution
What measure normalizes $u=rR$?

<details>
<summary>Hint 1</summary>

Include the spherical volume factor before changing the radial unknown.

</details>

<details>
<summary>Hint 2</summary>

The factor r in u cancels its squared counterpart in the measure.

</details>

<details>
<summary>Full solution</summary>

After angular normalization, $\\int \\lvert R\\rvert^2r^2\\,dr=\\int \\lvert u\\rvert^2\\,dr=1$.

</details>

<a id="central-potentials-hydrogen-ex-4"></a>

### 4. Centrifugal sign
Is the centrifugal term attractive or repulsive?

<details>
<summary>Hint 1</summary>

The angular eigenvalue l times l-plus-one is nonnegative.

</details>

<details>
<summary>Hint 2</summary>

Positive l adds a positive inverse-square term near zero.

</details>

<details>
<summary>Full solution</summary>

It is nonnegative for $l>0$, acting as an effective repulsive barrier near zero.

</details>

<a id="central-potentials-hydrogen-ex-5"></a>

### 5. Length units
Check units of $a=\\hbar^2/(\\mu\\kappa)$ when $\\kappa/r$ is energy.

<details>
<summary>Hint 1</summary>

The Coulomb coefficient has energy-times-length units.

</details>

<details>
<summary>Hint 2</summary>

Insert the dimensions of hbar and reduced mass.

</details>

<details>
<summary>Full solution</summary>

$\\kappa$ has energy-length units, and the ratio reduces to length.

</details>

<a id="central-potentials-hydrogen-ex-6"></a>

### 6. Energy scaling
How does $E_n$ depend on $n$?

<details>
<summary>Hint 1</summary>

Use the polynomial termination label in the energy formula.

</details>

<details>
<summary>Hint 2</summary>

Its magnitude decreases with increasing positive n.

</details>

<details>
<summary>Full solution</summary>

It is negative and proportional to $-1/n^2$, approaching zero from below.

</details>

<a id="central-potentials-hydrogen-ex-7"></a>

### 7. Ground energy
What is $E_1$?

<details>
<summary>Hint 1</summary>

Set n to one in the negative-energy list.

</details>

<details>
<summary>Hint 2</summary>

Keep the reduced mass from center-of-mass separation.

</details>

<details>
<summary>Full solution</summary>

$-E_*=-\\mu\\kappa^2/(2\\hbar^2)$.

</details>

<a id="central-potentials-hydrogen-ex-8"></a>

### 8. Spatial degeneracy
Show $\\sum_{l=0}^{n-1}(2l+1)=n^2$.

<details>
<summary>Hint 1</summary>

Separate twice the sum of consecutive integers from n.

</details>

<details>
<summary>Hint 2</summary>

Use the arithmetic-series formula.

</details>

<details>
<summary>Full solution</summary>

Sum $2\\sum_{l=0}^{n-1}l+n=2(n-1)n/2+n=n^2$.

</details>

<a id="central-potentials-hydrogen-ex-9"></a>

### 9. Ground normalization
Verify the ground state normalization.

<details>
<summary>Hint 1</summary>

Use spherical shell measure in the full norm.

</details>

<details>
<summary>Hint 2</summary>

The required integral is a factorial moment with inverse-length parameter two over a.

</details>

<details>
<summary>Full solution</summary>

$\\frac{4}{a^3}\\int_0^\\infty r^2e^{-2r/a}\\,dr=\\frac{4}{a^3}\\left(\\frac{a^3}{4}\\right)=1$.

</details>

<a id="central-potentials-hydrogen-ex-10"></a>

### 10. Most probable radius
Maximize the ground radial density.

<details>
<summary>Hint 1</summary>

Differentiate the logarithm of the positive radial density for r greater than zero.

</details>

<details>
<summary>Hint 2</summary>

Its derivative contains a reciprocal-radius term and constant decay term.

</details>

<details>
<summary>Full solution</summary>

Differentiate $r^2e^{-2r/a}$; a nonzero critical point satisfies $2/r-2/a=0$, hence $r=a$.

</details>

<a id="central-potentials-hydrogen-ex-11"></a>

### 11. Mean versus mode
Is the most probable radius automatically the mean radius?

<details>
<summary>Hint 1</summary>

Integrate one extra power of r against the radial density.

</details>

<details>
<summary>Hint 2</summary>

The factorial moment gives three-a-over-two rather than the mode.

</details>

<details>
<summary>Full solution</summary>

No. They are different summaries; for the ground state the mean is $3a/2$.

</details>

<a id="central-potentials-hydrogen-ex-12"></a>

### 12. Radial nodes
How many radial nodes has $(n,l)=(4,2)$?

<details>
<summary>Hint 1</summary>

The radial polynomial degree is n minus l minus one.

</details>

<details>
<summary>Hint 2</summary>

Use the standard positive-simple-zero property of associated Laguerre polynomials.

</details>

<details>
<summary>Full solution</summary>

$n-l-1=1$.

</details>

<a id="central-potentials-hydrogen-ex-13"></a>

### 13. Angular nodes
In the standard separated real spherical-harmonic basis, how many angular nodal surfaces are conventionally counted for $l=3$? Does that count apply unchanged to every complex harmonic?

<details>
<summary>Hint 1</summary>

Specify the real separated harmonic convention first.

</details>

<details>
<summary>Hint 2</summary>

Complex azimuthal phase winding is not an azimuthal nodal plane.

</details>

<details>
<summary>Full solution</summary>

The real separated basis has $|m|$ azimuthal nodal planes and $3-|m|$ polar zeros, totaling three with the usual angular-surface convention. A complex azimuthal factor $e^{im\\phi}$ does not vanish as phi varies; it replaces those planes by phase winding. Thus the unqualified statement for every complex $Y_3^m$ would be false. The basis and the quantity being visualized must be specified.

</details>

<a id="central-potentials-hydrogen-ex-14"></a>

### 14. Ground quantum numbers
List them.

<details>
<summary>Hint 1</summary>

The first principal level requires degree zero and l at most zero.

</details>

<details>
<summary>Hint 2</summary>

Its only magnetic value is then zero.

</details>

<details>
<summary>Full solution</summary>

$n=1,l=0,m=0$.

</details>

<a id="central-potentials-hydrogen-ex-15"></a>

### 15. Coulomb degeneracy
Does rotational symmetry alone force different $l$ states to share energy?

<details>
<summary>Hint 1</summary>

Rotations connect magnetic states within a fixed angular representation.

</details>

<details>
<summary>Hint 2</summary>

Coulomb degeneracy across distinct l sectors needs additional structure.

</details>

<details>
<summary>Full solution</summary>

No. It forces $m$ degeneracy; Coulomb $l$ degeneracy uses additional dynamical symmetry.

</details>

<a id="central-potentials-hydrogen-ex-16"></a>

### 16. External field
Why can a $Z$-directed field split $m$ values?

<details>
<summary>Hint 1</summary>

An axial field preserves its selected-axis subgroup while breaking other rotations.

</details>

<details>
<summary>Hint 2</summary>

Energy corrections may therefore depend on the magnetic label.

</details>

<details>
<summary>Full solution</summary>

It breaks full rotational symmetry while retaining only axial symmetry, allowing energy dependence on $m$.

</details>

<a id="central-potentials-hydrogen-ex-17"></a>

### 17. Photon relation
Convert energy difference $\\Delta E$ to ordinary frequency.

<details>
<summary>Hint 1</summary>

Ordinary frequency uses h; angular frequency uses hbar.

</details>

<details>
<summary>Hint 2</summary>

Use the magnitude of the emitted energy difference.

</details>

<details>
<summary>Full solution</summary>

$\\nu=\\lvert\\Delta E\\rvert/h$; angular frequency is $\\lvert\\Delta E\\rvert/\\hbar$.

</details>

<a id="central-potentials-hydrogen-ex-18"></a>

### 18. Selection boundary
Does every pair of unequal levels yield an observed electric-dipole line?

<details>
<summary>Hint 1</summary>

A line strength contains a transition-operator matrix element.

</details>

<details>
<summary>Hint 2</summary>

The worked s-to-s dipole integral vanishes despite a nonzero energy gap.

</details>

<details>
<summary>Full solution</summary>

No. The dipole matrix element may vanish by symmetry or selection rules.

</details>

<a id="central-potentials-hydrogen-ex-19"></a>

### 19. Orbital picture
Is an orbital image an electron trajectory?

<details>
<summary>Hint 1</summary>

A stationary amplitude predicts distributions and phases.

</details>

<details>
<summary>Hint 2</summary>

An isosurface is a visualization convention, not a path of recorded positions.

</details>

<details>
<summary>Full solution</summary>

No. It visualizes a wave function, density, phase, or isosurface under a stated convention.

</details>

<a id="central-potentials-hydrogen-ex-20"></a>

### 20. Hydrogen scope
Why is the formula not exact for measured hydrogen lines?

<details>
<summary>Hint 1</summary>

The exact formula belongs to a nonrelativistic point-Coulomb Hamiltonian.

</details>

<details>
<summary>Hint 2</summary>

Reduced mass is included while relativistic, spin, radiative, finite-size and apparatus corrections remain.

</details>

<details>
<summary>Full solution</summary>

It omits relativistic, spin, radiative, nuclear, environmental, and measurement effects that produce corrections and broadening.

</details>

## Chapter summary

Central symmetry separates angular and radial structure. The reduced radial equation exposes the centrifugal barrier, and the Coulomb model yields the $-1/n^2$ spectrum, quantum numbers, nodes, and degeneracies. Spectroscopic prediction additionally requires transition operators and corrections beyond the nonrelativistic point-nucleus model.

[Previous chapter](#/item/book-two-state-quantum-mechanics?chapter=harmonic-oscillator-ladders) · [Book overview](#/item/book-two-state-quantum-mechanics) · [Next chapter](#/item/book-two-state-quantum-mechanics?chapter=scattering-resonance-continuum)
`;export{e as default};