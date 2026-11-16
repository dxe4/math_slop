var e=`---
parent_id: book-action-symmetry-mechanics
chapter_id: field-theory-action
title: "Field Theory Action"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
status: draft
---

# Field Theory Action

Classical mechanics describes systems with finitely many degrees of freedom. Field theory extends these ideas to systems with infinitely many degrees of freedom---the values of fields at every point in space. This chapter develops the action principle for fields, derives the Euler--Lagrange equations for field functionals, and studies the prototypical examples of scalar, electromagnetic, and gravitational fields.

## From particles to fields

In particle mechanics, the dynamical variables are $q_{i}(t)$, indexed by a discrete label $i$. In field theory, the dynamical variables are fields $\\phi_{a}(x)$, where $x = (t, \\mathbf{x})$ is a spacetime point and $a$ is a discrete index (spin, flavor, etc.). The field values at each point are independent degrees of freedom.

The action becomes a functional of the field configuration:

$$S[\\phi] = \\int_{\\Omega} \\mathcal{L}(\\phi, \\partial\\phi, x) \\, d^{4}x,$$

where $\\mathcal{L}$ is the **Lagrangian density** and $\\Omega$ is a region of spacetime. We use units where $c = 1$.

Our spacetime metric is $g_{\\mu\\nu}=\\operatorname{diag}(1,-1,-1,-1)$, repeated indices are summed, and $\\partial^\\mu=g^{\\mu\\nu}\\partial_\\nu$. Unless stated otherwise the fields and density are sufficiently smooth for the displayed derivatives and integrations by parts. This is a classical local calculation. Weak solutions, distributional sources, singular boundaries, and functional-analytic existence require additional arguments; writing an action alone does not supply them. A complex scalar can be treated as two real fields, or equivalently varied in its complex value and conjugate as independent bookkeeping variables.

## Worked example: the stretched-string limit

Take equally spaced transverse displacements $q_j(t)$ with spacing $h$, masses $\\mu h$, and tension $\\mathsf T>0$. For small slopes a discrete Lagrangian is

$$L_h=\\sum_j h\\left[\\frac\\mu2\\dot q_j^2-\\frac{\\mathsf T}{2}\\left(\\frac{q_{j+1}-q_j}{h}\\right)^2\\right].$$

For a smooth displacement $u(t,x)$ sampled at the nodes, its Riemann-sum limit has density $\\mathcal L=\\mu u_t^2/2-\\mathsf T u_x^2/2$. Its Euler–Lagrange equation is $\\mu u_{tt}-\\mathsf T u_{xx}=0$, with wave speed $\\sqrt{\\mathsf T/\\mu}$. The discrete equations similarly read $\\mu\\ddot q_j=\\mathsf T(q_{j+1}-2q_j+q_{j-1})/h^2$. Taylor expansion establishes consistency for smooth functions; it does not prove convergence of every discrete solution without stability and initial-data estimates. The continuum has a state at every location, while its action still consists of local kinetic and elastic contributions. Boundary conditions distinguish a string fixed at both ends from one allowed to move freely; the density alone does not choose between them.

## The Euler--Lagrange equations for fields

Vary the field: $\\phi_{\\varepsilon}(x) = \\phi(x) + \\varepsilon \\eta(x)$, with $\\eta = 0$ on the boundary $\\partial\\Omega$. The first variation is

$$\\delta S = \\int_{\\Omega} \\left[ \\frac{\\partial\\mathcal{L}}{\\partial\\phi_{a}} \\eta_{a} + \\frac{\\partial\\mathcal{L}}{\\partial(\\partial_{\\mu}\\phi_{a})} \\partial_{\\mu}\\eta_{a} \\right] d^{4}x.$$

Integrating the second term by parts and using the boundary condition:

$$\\delta S = \\int_{\\Omega} \\left[ \\frac{\\partial\\mathcal{L}}{\\partial\\phi_{a}} - \\partial_{\\mu}\\left(\\frac{\\partial\\mathcal{L}}{\\partial(\\partial_{\\mu}\\phi_{a})}\\right) \\right] \\eta_{a} \\, d^{4}x = 0.$$

Since $\\eta_{a}$ is arbitrary, the coefficient must vanish:

$$\\partial_{\\mu}\\left(\\frac{\\partial\\mathcal{L}}{\\partial(\\partial_{\\mu}\\phi_{a})}\\right) - \\frac{\\partial\\mathcal{L}}{\\partial\\phi_{a}} = 0.$$

This is the **field-theoretic Euler--Lagrange equation**.

For completeness retain the boundary term before setting it to zero. With $\\pi_a^\\mu=\\partial\\mathcal L/\\partial(\\partial_\\mu\\phi_a)$ and $E_a=\\partial\\mathcal L/\\partial\\phi_a-\\partial_\\mu\\pi_a^\\mu$,

$$\\delta S=\\int_\\Omega E_a\\eta_a\\,d^4x+\\int_{\\partial\\Omega}n_\\mu\\pi_a^\\mu\\eta_a\\,d\\Sigma.$$

If stationarity holds for all smooth compactly supported variations, each continuous $E_a$ vanishes: otherwise a component has a fixed nonzero sign on a small ball, and a nonnegative bump variation supported there gives a nonzero integral. This proves the field version of the fundamental lemma. Conversely $E_a=0$ plus a vanishing boundary pairing implies stationarity. For prescribed field values, variations vanish at the boundary; for unrestricted values the natural condition is $n_\\mu\\pi_a^\\mu=0$. Mixed conditions or boundary actions change that pairing. On the string, a free spatial endpoint has $u_x=0$, whereas a fixed endpoint has $\\eta=0$. Fixing temporal endpoint values in the variational derivation is a device for finding local equations, not a requirement to prescribe both initial and final values in the evolution problem.

Adding a divergence $\\partial_\\mu B^\\mu(\\phi,x)$ to the density changes only the boundary action and leaves compact-support Euler–Lagrange equations unchanged. It can still change the appropriate boundary data or the canonical current representative. Thus equal bulk equations do not justify discarding boundary terms in a problem that asks for boundary forces or fluxes.

## The real scalar field

The simplest relativistic field is a real scalar field with Lagrangian density

$$\\mathcal{L} = \\frac{1}{2}\\partial_{\\mu}\\phi\\partial^{\\mu}\\phi - \\frac{1}{2}m^{2}\\phi^{2} - V(\\phi).$$

For the free field ($V = 0$):

$$\\frac{\\partial\\mathcal{L}}{\\partial\\phi} = -m^{2}\\phi, \\qquad \\frac{\\partial\\mathcal{L}}{\\partial(\\partial_{\\mu}\\phi)} = \\partial^{\\mu}\\phi.$$

The Euler--Lagrange equation gives the **Klein--Gordon equation**:

$$(\\partial_{\\mu}\\partial^{\\mu} + m^{2})\\phi = 0,$$

or in more familiar notation:

$$\\left(\\frac{\\partial^{2}}{\\partial t^{2}} - \\nabla^{2} + m^{2}\\right)\\phi = 0.$$

Complex plane-wave solutions $\\phi(x) = e^{-ik \\cdot x}$ exist when $k^{\\mu}k_{\\mu} = m^{2}$, the relativistic dispersion relation; real and imaginary parts give real-field solutions. Here $k\\cdot x=k_0t-\\mathbf k\\cdot\\mathbf x$.

## Worked example: a finite-interval field mode

On $0<x<\\ell$, impose $\\phi=0$ at both ends and use the free scalar equation in one spatial dimension, with $m^2\\ge0$. A single real mode is

$$\\phi(t,x)=a\\cos(\\omega_nt)\\sin(k_nx),\\quad k_n=\\frac{n\\pi}{\\ell},\\quad \\omega_n^2=k_n^2+m^2,\\quad n\\ge1.$$

Both the boundary condition and differential equation follow by direct substitution. Its integrated energy is

$$E_n=\\frac12\\int_0^\\ell(\\phi_t^2+\\phi_x^2+m^2\\phi^2)\\,dx=\\frac{a^2\\ell\\omega_n^2}{4}.$$

The sine and cosine squares each integrate to $\\ell/2$, and the dispersion relation makes the coefficients of $\\sin^2\\omega_nt$ and $\\cos^2\\omega_nt$ equal. This is an exactly constant total energy, although the local kinetic and potential terms oscillate. For a finite sum of distinct modes, orthogonality removes cross terms, giving a sum of independent modal energies. Extending that statement to infinite expansions requires the relevant energy-space convergence, rather than unrestricted termwise differentiation. An infinite-space plane wave instead has nonintegrable total energy and must be understood as an idealized local or periodic-volume model, not a finite-energy isolated field.

## Electromagnetism

The electromagnetic field is described by a 4-vector potential. With the mostly-minus metric and the usual contravariant convention, $A^\\mu=(\\phi,\\mathbf A)$ and $A_\\mu=(\\phi,-\\mathbf A)$. The field strength tensor is

$$F_{\\mu\\nu} = \\partial_{\\mu}A_{\\nu} - \\partial_{\\nu}A_{\\mu}.$$

The Lagrangian density is

$$\\mathcal{L} = -\\frac{1}{4}F_{\\mu\\nu}F^{\\mu\\nu} - A_{\\mu}J^{\\mu},$$

where $J^{\\mu} = (\\rho, \\mathbf{J})$ is the 4-current.

Computing the Euler--Lagrange equations:

$$\\frac{\\partial\\mathcal{L}}{\\partial A_{\\nu}} = -J^{\\nu}, \\qquad \\frac{\\partial\\mathcal{L}}{\\partial(\\partial_{\\mu}A_{\\nu})} = -F^{\\mu\\nu}.$$

The field equations are

$$\\partial_{\\mu}F^{\\mu\\nu} = J^{\\nu}.$$

These are the inhomogeneous Maxwell equations. The homogeneous equations $\\partial_{\\lambda}F_{\\mu\\nu} + \\partial_{\\mu}F_{\\nu\\lambda} + \\partial_{\\nu}F_{\\lambda\\mu} = 0$ follow from the definition of $F_{\\mu\\nu}$ in terms of $A_{\\mu}$.

One can see the derivative and its sign without expanding sixteen components. Since $F$ is antisymmetric,

$$\\delta(-F_{\\mu\\nu}F^{\\mu\\nu}/4)=-\\tfrac12F^{\\mu\\nu}(\\partial_\\mu\\delta A_\\nu-\\partial_\\nu\\delta A_\\mu)=-F^{\\mu\\nu}\\partial_\\mu\\delta A_\\nu.$$

Integration by parts then gives $\\delta S=\\int(\\partial_\\mu F^{\\mu\\nu}-J^\\nu)\\delta A_\\nu$ plus its boundary term. The current is prescribed here and is held fixed in this variation. Taking another divergence of the resulting equation gives $\\partial_\\nu J^\\nu=0$, since commuting derivatives contracted with an antisymmetric tensor vanish. A prescribed nonconserved source is therefore incompatible with these equations. For coupled charged matter, the action and matter variation must be included as well.

## Gauge symmetry

The field-strength part of the electromagnetic action is invariant under **gauge transformations**:

$$A_{\\mu} \\mapsto A_{\\mu} + \\partial_{\\mu}\\Lambda,$$

where $\\Lambda(x)$ is a smooth scalar function. This is a **local** (spacetime-dependent) invariance because commuting derivatives give $\\delta F=0$. For a prescribed source the density changes by $-\\partial_\\mu(\\Lambda J^\\mu)+\\Lambda\\partial_\\mu J^\\mu$. Thus the full action is invariant when the current is conserved and the resulting boundary integral vanishes. Compactly supported gauge parameters suffice for that local argument; other boundary conditions require separate attention.

Gauge transformations that act trivially on physical data identify redundant descriptions. This does not exclude boundary charges or physical transformations under different asymptotic conditions. Local redundancy has a Noether differential identity, discussed in the next chapter, rather than an independent observable charge for every arbitrary function. Gauge fixing selects representatives; initial data, boundary data, constraints, and possible residual gauge freedom still matter for uniqueness.

## Worked example: energy-momentum tensor

The **canonical energy-momentum tensor** is

$$T^{\\mu}_{\\phantom{\\mu}\\nu} = \\frac{\\partial\\mathcal{L}}{\\partial(\\partial_{\\mu}\\phi_{a})}\\partial_{\\nu}\\phi_{a} - \\delta^{\\mu}_{\\phantom{\\mu}\\nu}\\mathcal{L}.$$

For the scalar field:

$$T^{\\mu}_{\\phantom{\\mu}\\nu} = \\partial^{\\mu}\\phi\\partial_{\\nu}\\phi - \\delta^{\\mu}_{\\phantom{\\mu}\\nu}\\left(\\frac{1}{2}\\partial_{\\lambda}\\phi\\partial^{\\lambda}\\phi - \\frac{1}{2}m^{2}\\phi^{2}\\right).$$

The component $T^{00}$ is the energy density:

$$T^{00} = \\frac{1}{2}\\dot{\\phi}^{2} + \\frac{1}{2}(\\nabla\\phi)^{2} + \\frac{1}{2}m^{2}\\phi^{2}.$$

Using the equations of motion, one can show $\\partial_{\\mu}T^{\\mu}_{\\phantom{\\mu}\\nu} = 0$, expressing energy-momentum conservation.

For the energy component a direct check is particularly informative. Including a time-independent potential $V$, put $e=(\\phi_t^2+|\\nabla\\phi|^2+m^2\\phi^2)/2+V(\\phi)$. Multiplying $\\phi_{tt}-\\Delta\\phi+m^2\\phi+V'(\\phi)=0$ by $\\phi_t$ gives

$$\\partial_te+\\nabla\\cdot\\mathbf s=0,\\qquad \\mathbf s=-\\phi_t\\nabla\\phi.$$

Consequently $d\\int_D e/dt=-\\int_{\\partial D}\\mathbf s\\cdot\\mathbf n$. A finite region can lose energy through its boundary while satisfying a local conservation law perfectly. Fixed time-independent Dirichlet values imply $\\phi_t=0$ on a smooth boundary, and homogeneous Neumann values give $\\mathbf n\\cdot\\nabla\\phi=0$; either makes the flux vanish. Positivity of this energy requires $m^2\\ge0$ and an appropriate lower bound and normalisation of $V$. A negative quadratic potential can produce genuine instability; the action formalism does not guarantee positivity.

## Worked example: a static wall and its energy bound

In one spatial dimension choose $V(\\phi)=\\lambda(\\phi^2-v^2)^2/4$, $\\lambda>0$, $v>0$, and no separate mass term. A static field with limits $\\phi(-\\infty)=-v$, $\\phi(+\\infty)=v$ satisfies $\\phi''=V'(\\phi)$. Multiplication by $\\phi'$ makes $\\phi'^2/2-V$ constant. For the finite-energy branch this constant is zero. The increasing solution obeys

$$\\phi'=\\sqrt{\\lambda/2}(v^2-\\phi^2),\\qquad
\\phi(x)=v\\tanh\\bigl(v\\sqrt{\\lambda/2}(x-x_0)\\bigr).$$

Differentiate the hyperbolic tangent to check both the first-order equation and the two limits. The arbitrary $x_0$ records translation symmetry. To show what this solution achieves, set $g(\\phi)=\\sqrt{\\lambda/2}(v^2-\\phi^2)$ and complete the energy square:

$$E=\\int_{\\mathbb R}\\tfrac12(\\phi'-g)^2\\,dx+\\int_{-v}^{v}g(s)\\,ds
\\ge\\frac{2\\sqrt{2\\lambda}}3v^3.$$

The second integral is an endpoint term, so the bound holds without assuming a competitor is monotone, provided it is sufficiently regular and has these limits and finite energy. The displayed wall saturates the bound. It minimizes energy in this connecting class, but this argument alone is not a full dynamical orbital-stability theorem. Reversing the endpoint order gives an antiwall. This is a continuum version of the Euclidean double-well calculation revisited in the synthesis chapter, with a spatial coordinate replacing imaginary time.

## The Einstein--Hilbert action

General relativity can also be formulated as an action principle. The **Einstein--Hilbert action** is

$$S = \\frac{1}{16\\pi G}\\int R\\sqrt{-g}\\,d^{4}x,$$

where $R$ is the Ricci scalar, $g$ is the determinant of the metric tensor $g_{\\mu\\nu}$, and $G$ is Newton's gravitational constant. In a region without boundary, varying this bare gravitational action yields the vacuum equation $G_{\\mu\\nu}=0$. A sourced equation requires a matter action $S_{\\mathrm m}$, whose metric variation defines $T_{\\mu\\nu}$ and gives $G_{\\mu\\nu}=8\\pi G T_{\\mu\\nu}$. On a spacetime region with boundary, a well-posed Dirichlet variational principle also requires the Gibbons--Hawking--York boundary term (and appropriate boundary conditions).

This goes beyond our scope, but it illustrates the power of the action principle: the same formalism unifies mechanics, electromagnetism, and gravity.

## Common errors

- **Confusing Lagrangian and Lagrangian density:** In field theory, the action involves the density $\\mathcal{L}$, integrated over space. The spatial integral of $\\mathcal{L}$ is the Lagrangian $L = \\int\\mathcal{L}\\,d^{3}x$.
- **Sign conventions:** Different texts use different metric signatures $(+,-,-,-)$ vs. $(-,+,+,+)$. The relative signs in the action and equations change accordingly. We use the "mostly minus" convention here.
- **Gauge fixing:** Selecting a gauge addresses redundant potentials, but uniqueness still requires compatible initial and boundary data and control of residual gauge transformations. Gauge fixing alone is not a complete evolution problem.

## A boundary spring produces a natural condition

Boundary terms can encode a physical element rather than being discarded.
For a stretched string on a finite interval, fix the displacement at the
left endpoint and attach a spring of stiffness k≥0 at the right endpoint.
Add minus k times the squared right-end displacement divided by two to
the spatially integrated Lagrangian. Varying the action gives the ordinary
string equation in the interior. At the right boundary, spatial integration
by parts contributes minus the tension times the spatial displacement
derivative multiplied by the boundary variation. The spring contributes
minus k times displacement multiplied by the same variation.

Since that endpoint variation is free, the natural condition is
$$T\\phi_x(L,t)+k\\phi(L,t)=0.$$
At zero stiffness this becomes the free-end condition; a prescribed endpoint
displacement would instead remove the variation and impose different data.
These alternatives are different variational problems, even with the same
interior field equation.

The bulk string energy has boundary power Tφₜφₓ at the right end. The
spring energy derivative is kφφₜ. Their sum vanishes by the natural
condition, proving conservation of combined string-and-spring energy when
the fixed left endpoint does no work. Ignoring the spring term could
make energy appear to disappear from the field. The action identifies
both the boundary law and the storage element that receives that energy,
which is why boundary variations belong to the physical model as well
as to the integration-by-parts proof.

## Practice exercises

<a id="field-theory-action-ex-1"></a>

### Exercise 1
Derive the Euler--Lagrange equation for a complex scalar field with Lagrangian density $\\mathcal{L} = \\partial_{\\mu}\\phi^{*}\\partial^{\\mu}\\phi - m^{2}\\phi^{*}\\phi$.

<details>
<summary>Hint 1</summary>

Treat the complex field as two independent real degrees of freedom.

</details>

<details>
<summary>Hint 2</summary>

Vary with respect to the conjugate field to obtain the equation for the original field.

</details>

<details>
<summary>Full solution</summary>

Treat $\\phi$ and $\\phi^{*}$ as independent variables. Variation with respect to $\\phi^{*}$ gives $(\\partial_{\\mu}\\partial^{\\mu}+m^{2})\\phi=0$, while variation with respect to $\\phi$ gives the conjugate equation $(\\partial_{\\mu}\\partial^{\\mu}+m^{2})\\phi^{*}=0$.

</details>

<a id="field-theory-action-ex-2"></a>

### Exercise 2
Show that the electromagnetic action is invariant under gauge transformations $A_{\\mu} \\mapsto A_{\\mu} + \\partial_{\\mu}\\Lambda$.

<details>
<summary>Hint 1</summary>

First compute the change of the antisymmetric field strength.

</details>

<details>
<summary>Hint 2</summary>

For the source term use the product rule, current conservation, and an explicit boundary assumption.

</details>

<details>
<summary>Full solution</summary>

Under gauge transformation, $F_{\\mu\\nu} \\mapsto F_{\\mu\\nu}$ because $\\partial_{\\mu}\\partial_{\\nu}\\Lambda - \\partial_{\\nu}\\partial_{\\mu}\\Lambda = 0$. The term $A_{\\mu}J^{\\mu}$ changes by $\\partial_{\\mu}\\Lambda J^{\\mu} = \\partial_{\\mu}(\\Lambda J^{\\mu}) - \\Lambda\\partial_{\\mu}J^{\\mu}$. Current conservation $\\partial_{\\mu}J^{\\mu} = 0$ makes this a total divergence, which integrates to a boundary term that vanishes for suitable boundary conditions.

</details>

<a id="field-theory-action-ex-3"></a>

### Exercise 3
Compute the energy density $T^{00}$ for a plane-wave solution $\\phi(x) = A\\cos(k \\cdot x)$ of the Klein--Gordon equation, and verify that it is nonnegative for $m^2\\ge0$. When is its period average positive?

<details>
<summary>Hint 1</summary>

Differentiate using the stated mostly-minus plane-wave convention.

</details>

<details>
<summary>Hint 2</summary>

Use the dispersion relation after forming the squares; distinguish a pointwise statement from a time average.

</details>

<details>
<summary>Full solution</summary>

For $\\phi = A\\cos(k \\cdot x)$, with $k\\cdot x=k_0t-\\mathbf k\\cdot\\mathbf x$, we have $\\dot{\\phi} = -Ak_{0}\\sin(k \\cdot x)$ and $\\nabla\\phi = A\\mathbf{k}\\sin(k \\cdot x)$. Using $k_{0}^{2} = \\mathbf{k}^{2} + m^{2}$:

$$T^{00} = \\frac{A^{2}}{2}\\left[k_{0}^{2}\\sin^{2}(k \\cdot x) + \\mathbf{k}^{2}\\sin^{2}(k \\cdot x) + m^{2}\\cos^{2}(k \\cdot x)\\right].$$

Averaging over a nonzero-frequency period, $\\langle\\sin^{2}\\rangle = \\langle\\cos^{2}\\rangle = 1/2$, so $\\langle T^{00}\\rangle = \\frac{A^{2}}{4}(k_{0}^{2} + \\mathbf{k}^{2} + m^{2}) = \\frac{A^{2}}{2}k_{0}^{2}$, positive when $Ak_0\\ne0$. The pointwise sum is nonnegative and can vanish at a phase for a massless wave. The constant massless zero-frequency field has zero energy in this normalisation.

</details>

<a id="field-theory-action-ex-4"></a>

### Exercise 4
Consider a scalar field in one spatial dimension with Lagrangian density $\\mathcal{L} = \\frac{1}{2}\\dot{\\phi}^{2} - \\frac{1}{2}\\phi'^{2} - V(\\phi)$. Show that static solutions satisfy $\\phi'' = dV/d\\phi$.

<details>
<summary>Hint 1</summary>

Write the field Euler–Lagrange equation before imposing staticity.

</details>

<details>
<summary>Hint 2</summary>

The spatial derivative term has the opposite sign from the temporal one.

</details>

<details>
<summary>Full solution</summary>

For static solutions, $\\dot{\\phi} = 0$. The Euler--Lagrange equation is $\\ddot{\\phi} - \\phi'' + dV/d\\phi = 0$. With $\\ddot{\\phi} = 0$, this becomes $\\phi'' = dV/d\\phi$, which is the equation for a particle in potential $-V$ with $\\phi$ playing the role of position and the spatial coordinate playing the role of time.

</details>

<a id="field-theory-action-ex-5"></a>

### Exercise 5
Write the Lagrangian density for a massive vector field $A_{\\mu}$ with mass $m$ (Proca theory): $\\mathcal{L} = -\\frac{1}{4}F_{\\mu\\nu}F^{\\mu\\nu} + \\frac{1}{2}m^{2}A_{\\mu}A^{\\mu}$. Derive the field equations and show that $\\partial_{\\mu}A^{\\mu} = 0$ follows as a consequence.

<details>
<summary>Hint 1</summary>

Variation of the mass term supplies a term proportional to the raised potential.

</details>

<details>
<summary>Hint 2</summary>

Take a divergence and use the antisymmetry of the field strength; the mass must be nonzero.

</details>

<details>
<summary>Full solution</summary>

Varying with respect to $A_{\\nu}$: $\\partial_{\\mu}F^{\\mu\\nu} + m^{2}A^{\\nu} = 0$. Taking $\\partial_{\\nu}$ of both sides: $\\partial_{\\nu}\\partial_{\\mu}F^{\\mu\\nu} + m^{2}\\partial_{\\nu}A^{\\nu} = 0$. The first term vanishes identically because $F^{\\mu\\nu}$ is antisymmetric. Thus $m^{2}\\partial_{\\nu}A^{\\nu} = 0$, so for $m \\neq 0$, $\\partial_{\\nu}A^{\\nu} = 0$.

</details>

<a id="field-theory-action-ex-6"></a>

### Exercise 6

For the string density $\\mu u_t^2/2-\\mathsf T u_x^2/2$, derive the boundary term on $[t_0,t_1]\\times[0,\\ell]$ and identify the condition at a spatial endpoint whose displacement is free.

<details>
<summary>Hint 1</summary>

Integrate the temporal and spatial derivative terms separately.

</details>

<details>
<summary>Hint 2</summary>

Hold the temporal endpoints fixed but leave the spatial endpoint variation arbitrary.

</details>

<details>
<summary>Full solution</summary>

The variation is the bulk integral of $(-\\mu u_{tt}+\\mathsf T u_{xx})\\eta$, plus $[\\int_0^\\ell\\mu u_t\\eta\\,dx]_{t_0}^{t_1}-\\int_{t_0}^{t_1}[\\mathsf T u_x\\eta]_{0}^{\\ell}\\,dt$. The temporal term vanishes for fixed temporal endpoint fields. At a spatial endpoint where $\\eta$ is arbitrary and no boundary force action is added, $u_x=0$ follows. At a fixed endpoint $\\eta=0$ instead, so no Neumann condition follows there. Requiring both without a reason would overrestrict the problem.

</details>

<a id="field-theory-action-ex-7"></a>

### Exercise 7

For a scalar field on a bounded region, derive the energy balance if the prescribed boundary value depends on time. Must the integrated field energy remain constant?

<details>
<summary>Hint 1</summary>

Multiply the equation by the temporal derivative of the field.

</details>

<details>
<summary>Hint 2</summary>

Use $\\mathbf s=-\\phi_t\\nabla\\phi$ and retain its normal component at the boundary.

</details>

<details>
<summary>Full solution</summary>

For a time-independent potential, integration of $\\partial_te+\\nabla\\cdot\\mathbf s=0$ gives $\\dot E=\\int_{\\partial D}\\phi_t\\partial_n\\phi\\,dS$. The temporal derivative need not vanish when the imposed boundary field varies with time. The boundary apparatus can do work on the field, giving a nonzero right side. The local conservation equation remains valid; conservation of total field energy requires zero net flux or inclusion of the energy of the apparatus.

</details>

<a id="field-theory-action-ex-8"></a>

### Exercise 8

Show that a smooth pure-gauge potential $A_\\mu=\\partial_\\mu\\Lambda$ has zero field strength locally. Why does a Lorenz gauge condition alone still leave nonunique potentials?

<details>
<summary>Hint 1</summary>

Commute the two derivatives in $F$.

</details>

<details>
<summary>Hint 2</summary>

Compute the divergence of a gauge-transformed potential already satisfying $\\partial_\\mu A^\\mu=0$.

</details>

<details>
<summary>Full solution</summary>

$F_{\\mu\\nu}=\\partial_\\mu\\partial_\\nu\\Lambda-\\partial_\\nu\\partial_\\mu\\Lambda=0$. If $A$ is in Lorenz gauge, $A+\\partial\\Lambda$ remains there whenever $\\Box\\Lambda=0$. Nonzero solutions of this homogeneous wave equation produce residual gauge freedom unless further admissibility, boundary, and initial conditions remove it. This local calculation does not classify global flat connections on a topologically nontrivial domain.

</details>

<a id="field-theory-action-ex-9"></a>

### Exercise 9

For the static wall in the worked example, compute its total energy directly from $\\phi=v\\tanh(ax)$, $a=v\\sqrt{\\lambda/2}$, and compare it with the square-completion bound.

<details>
<summary>Hint 1</summary>

On the solution the gradient and potential energies are equal.

</details>

<details>
<summary>Hint 2</summary>

Use $z=\\tanh(ax)$ to integrate $\\operatorname{sech}^4(ax)$.

</details>

<details>
<summary>Full solution</summary>

The energy density is $\\phi'^2=v^2a^2\\operatorname{sech}^4(ax)$. With $z=\\tanh(ax)$, $\\int_{\\mathbb R}\\operatorname{sech}^4(ax)\\,dx=a^{-1}\\int_{-1}^1(1-z^2)\\,dz=4/(3a)$. Thus $E=4v^2a/3=2\\sqrt{2\\lambda}v^3/3$. It exactly attains the bound. Translating the centre changes neither the endpoint limits nor this integral.

</details>

<a id="field-theory-action-ex-10"></a>

### Exercise 10

Take a free real field with negative squared mass, $\\phi_{tt}-\\Delta\\phi-\\kappa^2\\phi=0$, $\\kappa>0$, on a periodic box. Exhibit an unstable mode and explain why its existence does not contradict energy conservation.

<details>
<summary>Hint 1</summary>

Use a spatially constant field so the Laplacian vanishes.

</details>

<details>
<summary>Hint 2</summary>

The energy density contains a negative quadratic term rather than a positive one.

</details>

<details>
<summary>Full solution</summary>

$\\phi(t,\\mathbf x)=ae^{\\kappa t}$ solves the equation. Its energy density is $(\\phi_t^2-\\kappa^2\\phi^2)/2=0$ at all times, while its amplitude grows exponentially. More general combinations of growing and decaying modes also have conserved, indefinite energy. A conserved quantity bounds trajectories only when it has suitable positive-definite or coercive properties near the reference state. The periodic box makes this mode's spatial energy integral finite.

</details>

<a id="connections"></a>

## Summary and connections

Field theory is the natural extension of variational mechanics to infinite degrees of freedom. In **Noether's Theorem in Field Theory**, we derive the conserved currents associated with spacetime symmetries. The geometric structures developed in **Symplectic Geometry** and **Lie Groups and Symmetry** generalize to infinite-dimensional manifolds of field configurations. The numerical challenges of field theory motivate **Geometric Numerical Integration**.
`;export{e as default};