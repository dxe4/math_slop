var e=`---
parent_id: book-action-symmetry-mechanics
chapter_id: integrable-systems
title: "Integrable Systems"
level: graduate
estimated_minutes: 220
license: CC BY-SA 4.0
status: draft
---

# Integrable Systems

A Hamiltonian system with $n$ degrees of freedom has $2n$-dimensional phase space. Many nonintegrable systems exhibit chaotic regions in which trajectories depend sensitively on initial conditions; a claim of genericity would require a specified topology or measure and is not made here. Some systems possess enough conserved quantities to render them solvable. These are **integrable systems**, and they form the backbone of classical mechanics and its applications.

## Liouville integrability

**Definition 13.1 (Integrable system on a regular region).** An autonomous Hamiltonian system with n degrees of freedom is *Liouville integrable* on a declared regular region if there are n single-valued conserved functions there, including H, whose differentials are independent and which are in involution:

$$\\{F_{i}, F_{j}\\} = 0 \\quad \\text{for all } i, j.$$

The Hamiltonian itself is one of these quantities, usually $H = F_{1}$.

Critical levels can lie outside the regular region even in a familiar integrable system. The word integrable does not say that every energy value gives a torus or that the same action-angle chart reaches every singular state. Independence is a rank condition, while involution is a Poisson-bracket identity; one does not imply the other.

**Theorem 13.2 (Liouville--Arnold).** Let $(M, \\omega, H)$ be a Liouville integrable system with $n$ conserved quantities $F_{1}, \\dots, F_{n}$ in involution. Let $M_{\\mathbf{f}} = \\{x \\in M : F_{i}(x) = f_{i}\\}$ be a regular level set (where $dF_{1}, \\dots, dF_{n}$ are linearly independent). Then:

1. $M_{\\mathbf{f}}$ is a smooth manifold invariant under the Hamiltonian flow.
2. If $M_{\\mathbf{f}}$ is compact and connected, it is diffeomorphic to the $n$-torus $T^{n}$.
3. In a neighborhood of this regular compact torus, there exist *action-angle variables* $(I_{1}, \\dots, I_{n}, \\phi_{1}, \\dots, \\phi_{n})$ such that $\\omega = \\sum_{i} d\\phi_{i} \\wedge dI_{i}$ and $H = H(I_{1}, \\dots, I_{n})$ depends only on the actions.

On the invariant torus, the angles evolve linearly: $\\dot{\\phi}_{i} = \\omega_{i}(I) = \\partial H/\\partial I_{i}$. Resonant frequencies can give periodic trajectories; rationally independent frequencies give genuinely quasiperiodic motion.

**Proof of the regular-level and torus conclusions.** The regular-value theorem makes the common level an n-dimensional manifold. Each Hamiltonian field $X_{F_j}$ is tangent because $dF_i(X_{F_j})=\\{F_i,F_j\\}=0$. The fields are independent by nondegeneracy of the symplectic form and independence of the differentials. Their pairings under omega are zero, so the tangent space is Lagrangian.

The fields commute: the Hamiltonian commutator identity makes their commutator the Hamiltonian field of a signed Poisson bracket, which is zero here. On a compact component they are complete and their commuting flows define an action of $\\mathbb R^n$. Its orbit maps have invertible derivative because the fields span the tangent space. Consequently each orbit is open, and connectedness makes there be just one orbit.

The stabiliser Gamma of a point is a closed discrete subgroup of $\\mathbb R^n$, since the orbit map is a local diffeomorphism near zero. The component is therefore $\\mathbb R^n/\\Gamma$. The elementary lattice classification for discrete Euclidean subgroups says Gamma is a lattice in its linear span. Compactness of the quotient forces that span to be the whole space: otherwise a nonzero linear functional vanishing on the span would descend to an unbounded function on a compact quotient. Hence Gamma has full rank and the quotient is a torus. The regular-value, complete-flow and lattice facts are the named geometric inputs to this argument.

The neighbouring action-angle normal-form assertion is the deeper Liouville–Arnold result, cited from the references rather than inferred from the topology of this one torus alone. A torus diffeomorphism by itself does not produce canonical action coordinates in a neighbourhood.

**Worked example (Two frequencies on one torus).** For $H=I_1+(3/2)I_2$, the angles advance at rates one and three halves. The least positive common return time is $4\\pi$, since both angular changes must be integer multiples of $2\\pi$. For $H=I_1+\\sqrt2 I_2$ there is no positive common return: the first angle would force $T=2\\pi n$, and the second would require the irrational number $n\\sqrt2$ to be an integer.

In the latter example the trajectory is dense on the torus. At successive returns of the first angle, the second performs irrational rotation. To see its density, the pigeonhole principle gives positive integers q with q times an irrational angle arbitrarily close, but not equal, to an integer turn. Multiples of that small signed step give an arbitrarily fine net of the circle; all those multiples are also forward rotation iterates. Thus every circle interval is reached. Choosing a fixed intervening time adjusts the first angle to any desired value, proving torus density.

This linear torus flow preserves distances in its flat angular metric. Dense visitation therefore does not imply sensitive dependence: nearby angular states remain equally close. Integrability, periodicity and chaos are different properties, not interchangeable labels for a visually complicated orbit.

## Action-angle variables

**Definition 13.3 (Action variable).** For a one-degree-of-freedom system with periodic motion, the *action* is

$$I = \\frac{1}{2\\pi}\\oint p\\,dq,$$

where the integral is over one period of the motion.

Under appropriate uniform smoothness, slow-variation and nonseparatrix hypotheses, the action is approximately adiabatically constant. This is an additional perturbation statement, not part of the definition or an exact conclusion for every time-dependent Hamiltonian.

**Definition 13.4 (Angle variable).** The *angle variable* $\\phi$ conjugate to $I$ is defined such that the transformation $(q, p) \\mapsto (\\phi, I)$ is canonical and $\\dot{\\phi} = \\partial H/\\partial I = \\omega(I)$.

## Worked example: harmonic oscillator

For the harmonic oscillator $H = p^{2}/(2m) + \\frac{k}{2}q^{2}$, the energy surface $H = E$ is an ellipse in phase space. Parametrize by $q = A\\sin\\theta$, $p = m\\omega A\\cos\\theta$ with $\\omega = \\sqrt{k/m}$ and $E = \\frac{k}{2}A^{2}$.

The action is

$$I = \\frac{1}{2\\pi}\\oint p\\,dq = \\frac{1}{2\\pi}\\int_{0}^{2\\pi} m\\omega A\\cos\\theta \\cdot A\\cos\\theta\\,d\\theta = \\frac{m\\omega A^{2}}{2} = \\frac{E}{\\omega}.$$

Thus $E = I\\omega$ and $H = I\\omega$. The frequency is $\\partial H/\\partial I = \\omega$, constant as expected.

The angle variable is $\\phi = \\theta$, and the motion is $\\phi(t) = \\phi_{0} + \\omega t$.

This transformation is canonical on I positive. With $A=\\sqrt{2I/(m\\omega)}$, the coefficient of $d\\phi\\wedge dI$ in $dq\\wedge dp$ is
$$
q_\\phi p_I-q_Ip_\\phi
=\\frac{m\\omega A^2}{2I}(\\cos^2\\phi+\\sin^2\\phi)=1.
$$
At I zero the phase angle is undefined. The equilibrium is a singular energy level, not a regular invariant circle with an arbitrary extra angle attached.

## Period is the derivative of action

**Proposition 13.5 (One-well action derivative).** Let a smooth one-dimensional potential have, for an interval of regular energies, two simple turning points $q_-(E)<q_+(E)$ with $V<E$ between them. Assume the associated closed orbits remain in a smooth coordinate region and the turning points stay simple. Then
$$
I(E)=\\frac1\\pi\\int_{q_-}^{q_+}\\sqrt{2m(E-V(q))}\\,dq,
\\qquad \\frac{dI}{dE}=\\frac{T(E)}{2\\pi}>0.
$$

*Proof.* Differentiate the action integral. Its endpoint values vanish, and its interior derivative is $m/\\sqrt{2m(E-V)}$. The simple turning points make these inverse-square-root singularities integrable. More explicitly, locally factor $E-V=(q-q_-)(q_+-q)g(q,E)$ with g positive and smooth enough; substituting $q=q_-+(q_+-q_-)\\sin^2u$ removes the endpoint singularities and justifies the parameter differentiation on compact regular-energy intervals. Thus
$$
I'(E)=\\frac1\\pi\\int_{q_-}^{q_+}\\frac{m\\,dq}{\\sqrt{2m(E-V(q))}}.
$$
The time integral from one turning point to the other is the same integral without the factor $1/\\pi$, and a full period contains two such traversals. This proves the formula. $\\square$

Consequently energy can be expressed locally as H(I), with frequency $dH/dI=2\\pi/T$. At a separatrix the period can diverge, and the regular-energy argument cannot simply be continued through it.

**Worked example (A nonisochronous quartic oscillator).** For $V=aq^4/4$, a positive and E positive, the turning amplitude is $A=(4E/a)^{1/4}$. Substituting q equal to A times s gives
$$
I(E)=C E^{3/4},\\qquad
C=\\frac{2\\sqrt{2m}}\\pi(4/a)^{1/4}\\int_0^1\\sqrt{1-s^4}\\,ds>0.
$$
Therefore $T(E)=(3\\pi C/2)E^{-1/4}$. Increasing energy by a factor sixteen halves the period. Unlike the harmonic oscillator, its angular frequency depends on action. This is an exact scaling result for the written quartic potential, rather than a small-amplitude estimate.

## Worked example: simple pendulum

The pendulum Hamiltonian is $H = p_{\\theta}^{2}/(2m\\ell^{2}) - mg\\ell\\cos\\theta$. Nonconstant librations have $-mg\\ell<E<mg\\ell$ and are periodic. The lower endpoint is the resting equilibrium and the upper endpoint is the separatrix; neither is a regular librating energy circle.

The action is

$$I = \\frac{1}{2\\pi}\\oint p_{\\theta}\\,d\\theta = \\frac{1}{\\pi}\\int_{-\\theta_{\\max}}^{\\theta_{\\max}} \\sqrt{2m\\ell^{2}(E + mg\\ell\\cos\\theta)}\\,d\\theta,$$

where $\\theta_{\\max}$ satisfies $E = -mg\\ell\\cos\\theta_{\\max}$. This is an elliptic integral. The potential minimum is $-mg\\ell$, so the small-oscillation energy is $\\mathcal E=E+mg\\ell$. Expanding about the minimum gives $I\\approx\\mathcal E/\\sqrt{g/\\ell}$, recovering the harmonic-oscillator result with its energy measured from equilibrium.

## The Kepler problem

The Kepler problem (two-body gravitational interaction) is the paradigmatic integrable system. In the reduced coordinates $(\\mathbf{r}, \\mathbf{p})$, the Hamiltonian is

$$H = \\frac{\\mathbf{p}^{2}}{2\\mu} - \\frac{k}{r}.$$

The conserved quantities comprise seven scalar components: energy $E$, angular momentum $\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}$ (three components), and the three components of the Laplace–Runge–Lenz vector

$$\\mathbf{A} = \\mathbf{p} \\times \\mathbf{L} - \\mu k\\frac{\\mathbf{r}}{r}.$$

They obey $\\mathbf L\\cdot\\mathbf A=0$ and $\\mathbf A\\cdot\\mathbf A=\\mu^2k^2+2\\mu E(\\mathbf L\\cdot\\mathbf L)$. These two algebraic relations leave five functionally independent conserved quantities on the generic nondegenerate part of phase space; independence can drop on special orbits. The seven components are not all in involution, so this count must not be confused with the three commuting integrals needed for Liouville integrability.


A suitable set of three commuting integrals is $H$, $L^2$ and $L_z$, independent on an appropriate generic regular region. At special orbits their rank can drop. The extra conserved components do not all commute with one another, so their number does not replace the involution condition for the three-degree-of-freedom system.

**Theorem 13.6 (Bertrand, with hypotheses).** Fix $\\mu>0$ and a smooth central potential $V:(0,\\infty)\\to\\mathbb R$ with $V'(r)>0$. For every angular-momentum magnitude $\\ell>0$, assume the effective potential $U_\\ell(r)=V(r)+\\ell^2/(2\\mu r^2)$ has a stationary point $r_0>0$ with $U_\\ell''(r_0)>0$ (a nondegenerate stable circular orbit). Then every bounded noncollision orbit with $\\ell>0$, defined for all time, is periodic if and only if $V(r)=C-k/r$ or $V(r)=C+kr^2/2$, where $C\\in\\mathbb R$ and $k>0$. This global classification is imported from [De Leenheer, Musgrove and Schimleck, §§2–4](https://epubs.siam.org/doi/10.1137/21M1436658); its proof is not supplied here.

The Kepler problem conserves $\\mathbf{A}$ at all energies. Its hidden $SO(4)$ symmetry is the fixed negative-energy ($E<0$) symmetry associated with closed noncollision bound orbits. Some closed circles do not suffice. For $\\mu=\\ell=r_0=1$, the potentials $-1/r$, $r^2/2$ and $r^4/4$ give $U_\\ell''(r_0)=1,4,6$ and near-circle adjacent-apsis limits $\\Delta\\theta/\\pi\\to1,1/2,1/\\sqrt6$, respectively. The quartic case has stable closed circles, but all nearby bounded-orbit closure would make the continuous apsidal ratio rational-valued and constant on a connected energy interval, contradicting its irrational limit; this does not classify a prescribed finite-amplitude orbit. Repulsive $V=+1/r$ has $U_\\ell'<0$ for $\\mu,\\ell,r>0$ and no bounded complete orbits or circular orbit, making a bare all-bounded-orbits clause vacuous. As positive controls at $\\mu=k=1$, Kepler's $r=1/(1+e\\cos\\theta)$ with $0\\le e<1$ and $\\ell=1$, and the oscillator's $(x,y)=(2\\cos t,\\sin t)$ with $\\ell=2$, give noncollision periodic motions. This online theorem/glossary qualification postdates the retained draft PDF.

## Adiabatic invariants

When a Hamiltonian depends slowly on a parameter $\\lambda(t)$, the action variables are approximately conserved.

**Adiabatic principle.** Away from separatrices and resonances, and under appropriate smoothness and uniform periodicity hypotheses, a slowly varying Hamiltonian changes the action by a small amount. The precise order and the time interval over which it holds depend on how the slow parameter enters; a timescale comparison by itself does not justify a universal $O(\\epsilon^2)$ formula.

**Worked example:** Consider a simple pendulum with fixed $m,g>0$ and slowly varying length $\\ell(t)>0$, remaining in the small-angle regime under the preceding adiabatic hypotheses. Use energy $\\mathcal E$ above the instantaneous equilibrium and let $\\nu$ be the peak angular speed of the oscillation with length frozen at its current value. With $\\omega=\\sqrt{g/\\ell}$, $\\mathcal E\\approx(m/2)\\ell^2\\nu^2\\approx(mg/2)\\ell\\theta_{\\max}^2$ and $\\nu\\approx\\omega\\theta_{\\max}$. Thus $I\\approx\\mathcal E/\\omega\\approx(m/(2\\sqrt g))\\ell^{5/2}\\nu^2\\approx(m\\sqrt g/2)\\ell^{3/2}\\theta_{\\max}^2$. To adiabatic leading order, angular displacement amplitude scales as $\\theta_{\\max}\\propto\\ell^{-3/4}$, while peak angular speed scales as $\\nu\\propto\\ell^{-5/4}$; these are different quantities. For example, increasing length by a factor $16$ gives amplitude and peak-speed factors $1/8$ and $1/32$, respectively. The earlier $\\ell^{3/2}$ exponent attached to squared angular speed would instead give a spurious action factor $1/16$ in this example. These are small-oscillation and adiabatic approximations, not exact invariants for arbitrary length changes.

## Common errors

- **Confusing integrability with solvability:** Integrable systems can be reduced to quadrature, but the quadratures may involve special functions (elliptic integrals, hypergeometric functions).
- **Assuming all symmetries yield involutive quantities:** The Kepler problem has more conserved quantities than degrees of freedom, but not all pairs Poisson-commute.
- **Adiabatic invariance is not exact:** The action is conserved only to leading order in the slowness parameter. Resonances can cause breakdown.

## Practice exercises

### Exercise 1
<a id="integrable-systems-ex-1"></a>

For a smooth autonomous one-dimensional Hamiltonian $H=p^2/(2m)+V(q)$ with m positive, work on a region where dH is nonzero. Show that H supplies one independent integral and that two conserved integrals cannot have independent differentials there. Explain why periodicity is a separate question.

<details>
<summary>Hint 1</summary>

On the regular region the Hamiltonian field is nonzero.

</details>
<details>
<summary>Hint 2</summary>

Every conserved differential annihilates that same nonzero tangent direction.

</details>
<details>
<summary>Full solution</summary>

**Solution.** Energy is conserved since $\\{H,H\\}=0$, and dH nonzero supplies the one required independent differential. Its Hamiltonian vector field is nonzero. Any conserved differential annihilates that field; the annihilator of a nonzero vector in a two-dimensional tangent space is one-dimensional. Hence two conserved differentials cannot be independent there. This proves regular-region integrability for the smooth autonomous model. A regular energy component need not be compact, so its motion need not be periodic. Critical levels require separate analysis.

</details>

### Exercise 2
<a id="integrable-systems-ex-2"></a>

Compute the action-angle variables for a positive-energy particle with ideal elastic reflections at the walls of a box of length L positive. Inside the box V is zero. This is a reflection model, rather than a globally smooth potential to which the smooth torus theorem applies directly.

<details>
<summary>Hint 1</summary>

Integrate momentum along both the outward and return position segments.

</details>
<details>
<summary>Hint 2</summary>

The two sign changes on the return segment make its action contribution positive.

</details>
<details>
<summary>Full solution</summary>

**Solution.** The particle bounces elastically between the walls. For energy $E$, the momentum is $p = \\pm\\sqrt{2mE}$. The action is

$$I = \\frac{1}{2\\pi}\\oint p\\,dq = \\frac{1}{2\\pi} \\cdot 2\\sqrt{2mE} \\cdot L = \\frac{L\\sqrt{2mE}}{\\pi}.$$

Inverting: $E = \\pi^{2}I^{2}/(2mL^{2})$. The frequency is $\\omega = \\partial E/\\partial I = \\pi^{2}I/(mL^{2}) = \\pi\\sqrt{2E/m}/L = \\pi v/L$, where $v = \\sqrt{2E/m}$. The period is $T = 2L/v$, consistent with the time to traverse the box and back.

A corresponding angle is $\\phi=\\pi q/L$ on the positive-momentum segment and $\\phi=2\\pi-\\pi q/L$ on the negative-momentum segment. Reflection joins these values continuously modulo $2\\pi$. On each open segment, direct differentiation gives $d\\phi\\wedge dI=dq\\wedge dp$. The piecewise chart and reflection rule must be stated; the infinite-wall notation is not a smooth Hamiltonian at the wall.

</details>

### Exercise 3
<a id="integrable-systems-ex-3"></a>

For the Kepler problem, verify that the Laplace--Runge--Lenz vector $\\mathbf{A}$ is conserved.

<details>
<summary>Hint 1</summary>

Differentiate both terms of the Runge–Lenz vector.

</details>
<details>
<summary>Hint 2</summary>

Use central-force angular-momentum conservation and the vector triple-product identity.

</details>
<details>
<summary>Full solution</summary>

**Solution.** Compute $d\\mathbf{A}/dt = \\dot{\\mathbf{p}} \\times \\mathbf{L} + \\mathbf{p} \\times \\dot{\\mathbf{L}} - \\mu k\\,d(\\mathbf r/r)/dt$. Since $\\dot{\\mathbf{L}} = 0$ and $\\dot{\\mathbf{p}} = -k\\mathbf{r}/r^{3}$, the triple-product identity gives

$$\\dot{\\mathbf p}\\times\\mathbf L
=\\frac{k}{r}\\left[\\mathbf p-\\frac{(\\mathbf r\\cdot\\mathbf p)\\mathbf r}{r^2}\\right].$$

Also

$$\\mu k\\frac{d}{dt}\\left(\\frac{\\mathbf r}{r}\\right)
=\\frac{k}{r}\\left[\\mathbf p-\\frac{(\\mathbf r\\cdot\\mathbf p)\\mathbf r}{r^2}\\right],$$

using $\\mu\\dot{\\mathbf r}=\\mathbf p$. These equal terms occur with opposite signs, so $d\\mathbf A/dt=0$.

</details>

### Exercise 4
<a id="integrable-systems-ex-4"></a>

A pendulum of length $\\ell$ and mass $m$ has its length slowly shortened by pulling the string up at constant speed $v \\ll \\sqrt{g\\ell}$. Assume $0<\\ell_1\\leq\\ell_0$, $v\\ll\\sqrt{g\\ell}$ throughout $\\ell\\in[\\ell_1,\\ell_0]$, and small-angle motion throughout (in particular $\\theta_0(\\ell_0/\\ell_1)^{3/4}\\ll1$). If the initial amplitude is $\\theta_{0}$ and initial length is $\\ell_{0}$, find the leading adiabatic approximation to the amplitude when the length is $\\ell_{1}$.

<details>
<summary>Hint 1</summary>

Measure small-oscillation energy above the instantaneous potential minimum.

</details>
<details>
<summary>Hint 2</summary>

Use the action only as an adiabatic approximation under the stated slow, nonseparatrix assumptions.

</details>
<details>
<summary>Full solution</summary>

**Solution.** Under the small-angle and uniform slow-variation assumptions, away from a vanishing length or separatrix, the action is approximately adiabatically constant. Measure E above the instantaneous minimum, so $E\\approx mg\\ell\\theta_{max}^2/2$ and $\\omega=\\sqrt{g/\\ell}$. Thus $I\\approx E/\\omega$ is proportional to $\\ell^{3/2}\\theta_{max}^2$. The leading amplitude relation is $\\theta_1\\approx\\theta_0(\\ell_0/\\ell_1)^{3/4}$. This is an adiabatic approximation, not an exact conservation equation or an error bound obtained from the timescale inequality alone.

</details>

### Exercise 5
<a id="integrable-systems-ex-5"></a>

Verify the infinitesimal rotation relation $\\{A_{x}, L_{z}\\} = -A_{y}$ and explain why it is not a vanishing bracket.

<details>
<summary>Hint 1</summary>

Angular momentum generates rotations through the Poisson bracket.

</details>
<details>
<summary>Hint 2</summary>

The x component of a rotating vector changes initially toward minus its y component.

</details>
<details>
<summary>Full solution</summary>

**Solution.** Using $\\{f, L_{z}\\} = \\partial f/\\partial\\phi$ (the generator of rotations about $z$), $A_{x}$ transforms as the $x$-component of a vector under rotation about $z$, so $\\{A_{x}, L_{z}\\} = -A_{y}$. Direct computation confirms this.

</details>

### Exercise 6 — Common angular return
<a id="integrable-systems-ex-6"></a>

For angle rates one and three halves, derive the minimal positive common return time. Why is the same question different for rates one and square root of two?

<details>
<summary>Hint 1</summary>

Each angular increment must be an integer number of turns.

</details>
<details>
<summary>Hint 2</summary>

The first rate fixes time to an integer multiple of two pi.

</details>
<details>
<summary>Full solution</summary>

The first coordinate requires $T=2\\pi n$. The second then requires $3n/2$ integral, so the smallest positive n is two and $T=4\\pi$. Replacing three halves by square root of two would require $n\\sqrt2$ integral for a positive integer n, impossible. The latter orbit is nonperiodic despite lying on a compact invariant torus.

</details>

### Exercise 7 — A quartic period scaling
<a id="integrable-systems-ex-7"></a>

For $I(E)=CE^{3/4}$ with C positive, find T(E) and the period ratio after multiplying energy by sixteen.

<details>
<summary>Hint 1</summary>

Use the proved action-derivative relation.

</details>
<details>
<summary>Hint 2</summary>

Differentiate before substituting the energy multiplier.

</details>
<details>
<summary>Full solution</summary>

The period is $T=2\\pi I'(E)=(3\\pi C/2)E^{-1/4}$. Hence $T(16E)/T(E)=16^{-1/4}=1/2$. The result concerns positive regular energies of the stated quartic model, not the singular equilibrium at zero energy.

</details>

### Exercise 8 — Harmonic action and period
<a id="integrable-systems-ex-8"></a>

Use I equal to E divided by omega to recover the harmonic period from the action derivative.

<details>
<summary>Hint 1</summary>

Omega is constant in the ideal harmonic model.

</details>
<details>
<summary>Hint 2</summary>

The derivative of action is period divided by two pi.

</details>
<details>
<summary>Full solution</summary>

Differentiating gives $I'(E)=1/\\omega$. Therefore $T=2\\pi/\\omega$, independent of positive energy. The equality is consistent with the oscillator's exact constant angular frequency and illustrates what changes in a nonisochronous potential.

</details>

### Exercise 9 — Conserved does not mean commuting
<a id="integrable-systems-ex-9"></a>

Why do H, Lx and Ly not automatically form a Liouville set for spatial Kepler motion?

<details>
<summary>Hint 1</summary>

Check brackets as well as the number of functions.

</details>
<details>
<summary>Hint 2</summary>

Angular-momentum components satisfy the rotation Lie algebra.

</details>
<details>
<summary>Full solution</summary>

Although all three are conserved, $\\{L_x,L_y\\}=L_z$, generally nonzero on an open region. They therefore fail the pairwise involution condition. The usual choice H, L squared and Lz avoids that bracket obstruction, but functional independence still needs its own regular-region check.

</details>

### Exercise 10 — A collapsed oscillator level
<a id="integrable-systems-ex-10"></a>

Why is the zero-energy oscillator level not the one-torus predicted for regular compact levels?

<details>
<summary>Hint 1</summary>

Find both the level set and the Hamiltonian differential there.

</details>
<details>
<summary>Hint 2</summary>

Positive energy circles shrink to the equilibrium as energy tends to zero.

</details>
<details>
<summary>Full solution</summary>

For $H=p^2/(2m)+kq^2/2$ with positive m and k, the zero level contains only the origin. At that point dH is zero, so it is not a regular value. The regular torus theorem does not apply. Its positive-energy action-angle chart has an undefined angle at the collapsed action-zero state.

</details>

<a id="connections"></a>
## Summary

Integrable systems are the foundation upon which perturbation theory is built. In **Perturbation Methods**, we study how small perturbations destroy integrability and how approximate action-angle variables can still be useful. The geometric structure of integrable systems---invariant tori in phase space---is explored further in **Symplectic Geometry**. The rigid body, treated in **Rigid Body Dynamics**, is a classic integrable system when no external torques act.

Arnold’s *Mathematical Methods of Classical Mechanics* and Goldstein, Poole and Safko’s *Classical Mechanics* provide further reading. The regular-level and torus argument is developed above using its named geometric inputs; the neighbouring action-angle normal-form theorem is cited. The Bertrand reference retains its separate original attribution.
`;export{e as default};