var e=`---
parent_id: book-action-symmetry-mechanics
chapter_id: noether-s-theorem-in-field-theory
title: "Noether's Theorem in Field Theory"
level: graduate
estimated_minutes: 220
license: CC BY-SA 4.0
status: draft
---

# Noether's Theorem in Field Theory

Noether's theorem in particle mechanics relates differentiable variational symmetries to first integrals. For fields it first yields a local conserved current. A conserved integrated charge then requires integrability and suitable boundary flux. This chapter proves the local identity, derives energy-momentum and internal currents, and distinguishes global transformations from gauge redundancy.

## Symmetries of the action

Consider a field theory with action $S[\\phi] = \\int_{\\Omega}\\mathcal{L}(\\phi, \\partial\\phi, x)\\,d^{4}x$. An infinitesimal transformation

$$x^{\\mu} \\mapsto x^{\\mu} + \\varepsilon X^{\\mu}(x), \\qquad \\phi_{a}(x) \\mapsto \\phi_{a}(x) + \\varepsilon \\Psi_{a}(x)$$

is a **symmetry** if the action changes by at most a surface term:

$$\\delta S = \\varepsilon\\int_{\\Omega}\\partial_{\\mu}K^{\\mu}\\,d^{4}x.$$

The transformation of $\\phi$ here means its change at the transformed point: $\\phi'_a(x')=\\phi_a(x)+\\varepsilon\\Psi_a+O(\\varepsilon^2)$. Its change at a fixed coordinate is the **characteristic** $Q_a=\\Psi_a-X^\\nu\\partial_\\nu\\phi_a$. This distinction is essential for spacetime transformations. We assume smooth point transformations and fields, a first-derivative smooth density, and enough regularity to commute the displayed derivatives. The infinitesimal symmetry identity holds locally for arbitrary fields, before the equations of motion are imposed; agreement of two action values on one particular solution is insufficient. The density variation includes the Jacobian of $x\\mapsto x'$. A symmetry of the full boundary-value problem must also preserve its admissible boundary data.

**Definition 16.1 (Noether current).** For a symmetry of the action, the **Noether current** is

$$j^{\\mu} = \\frac{\\partial\\mathcal{L}}{\\partial(\\partial_{\\mu}\\phi_{a})}\\Psi_{a} - T^{\\mu}_{\\phantom{\\mu}\\nu}X^{\\nu} - K^{\\mu},$$

where $T^{\\mu}_{\\phantom{\\mu}\\nu}$ is the canonical energy-momentum tensor.

**Theorem 16.2 (Noether).** If the fields satisfy the Euler--Lagrange equations, then $\\partial_{\\mu}j^{\\mu} = 0$.

*Proof.* Set $\\pi_a^\\mu=\\partial\\mathcal L/\\partial(\\partial_\\mu\\phi_a)$ and $E_a=\\partial\\mathcal L/\\partial\\phi_a-\\partial_\\mu\\pi_a^\\mu$. At fixed coordinates the first-order density variation is

$$\\delta_0\\mathcal L=\\frac{\\partial\\mathcal L}{\\partial\\phi_a}Q_a+\\pi_a^\\mu\\partial_\\mu Q_a
=E_aQ_a+\\partial_\\mu(\\pi_a^\\mu Q_a).$$

Moving coordinates adds the transport and volume term $\\partial_\\mu(\\mathcal L X^\\mu)$. Consequently the total density identity for a variational symmetry is

$$\\partial_\\mu K^\\mu=E_aQ_a+\\partial_\\mu(\\pi_a^\\mu Q_a+\\mathcal L X^\\mu).$$

Rearranging gives the off-shell identity $\\partial_\\mu j^\\mu=-E_aQ_a$, where

$$j^\\mu=\\pi_a^\\mu Q_a+\\mathcal L X^\\mu-K^\\mu
=\\pi_a^\\mu\\Psi_a-T^\\mu_{\\ \\nu}X^\\nu-K^\\mu.$$

On solutions $E_a=0$, so the current has zero divergence. This proves the theorem and fixes all signs in the stated convention. Reversing a symmetry generator reverses its current, without changing conservation. A surface term in the symmetry condition must appear in the current; simply dropping $K$ generally gives a wrong answer. Transformations involving derivatives can be handled by a more general variational framework, which is not needed for these point-symmetry examples.

## From a local current to a charge

Write $\\partial_\\mu j^\\mu=\\partial_tj^0+\\nabla\\cdot\\mathbf j=0$. On a fixed bounded spatial region $D$, the divergence theorem gives

$$\\frac{d}{dt}\\int_Dj^0\\,d^3x=-\\int_{\\partial D}\\mathbf j\\cdot\\mathbf n\\,dS.$$

The charge is constant if the net flux vanishes, as on a periodic box with matching opposite-face fluxes, or an impermeable boundary. On all of space, existence of $\\int j^0$ and vanishing flux at infinity need adequate decay and permission to exchange the time derivative and integral. A plane wave may exhibit a conserved local density but an infinite total charge. An open subsystem may gain or lose charge despite a zero local divergence. These hypotheses connect the formal field identity to an actual observable integral.

Current representatives are not unique. If $B^{\\nu\\mu}=-B^{\\mu\\nu}$ is smooth, then $j'^\\mu=j^\\mu+\\partial_\\nu B^{\\nu\\mu}$ has the same divergence because the double derivative is symmetric. Its charge differs by $\\int_{\\partial D} B^{i0}n_i\\,dS$. It has the same integrated value only when this boundary term vanishes. The freedom to improve a stress tensor works similarly. It must not be used to discard physical boundary contributions without checking the data.

## Spacetime translations and the energy-momentum tensor

Consider the translation $x^{\\mu} \\mapsto x^{\\mu} + \\varepsilon^{\\mu}$, with $\\Psi_{a} = 0$ and $K^{\\mu} = 0$. The Noether current is

$$j^{\\mu} = -T^{\\mu}_{\\phantom{\\mu}\\nu}\\varepsilon^{\\nu}.$$

Since $\\varepsilon^{\\nu}$ is arbitrary, conservation of the current implies

$$\\partial_{\\mu}T^{\\mu}_{\\phantom{\\mu}\\nu} = 0.$$

These are four conservation laws: $\\nu = 0$ gives energy conservation, and $\\nu = i$ gives momentum conservation.

The translation argument assumes no explicit coordinate dependence in the density and compatible boundary conditions. A direct computation displays its scope:

$$\\partial_\\mu T^\\mu_{\\ \\nu}=(\\partial_\\mu\\pi_a^\\mu-\\mathcal L_{\\phi_a})\\partial_\\nu\\phi_a-\\left.\\frac{\\partial\\mathcal L}{\\partial x^\\nu}\\right|_{\\phi,\\partial\\phi}.
$$

The mixed second derivatives cancel by the chain rule. On shell only the negative explicit-coordinate derivative remains. Spatially inhomogeneous coefficients can therefore break momentum conservation while time-independent coefficients still preserve energy. Raising the second index uses the mostly-minus metric; $T^{0i}=-T^0_{\\ i}$ for a spatial index. The generator's overall minus sign in the translation current is a convention, while the physical energy and momentum below use the usual raised-index tensor.

The conserved charge associated with time translation is the total energy:

$$E = \\int T^{00}\\,d^{3}x.$$

The conserved charge associated with spatial translation in direction $i$ is the total momentum:

$$P^{i} = \\int T^{0i}\\,d^{3}x.$$

## Lorentz transformations and angular momentum

Consider an infinitesimal Lorentz transformation $x^{\\mu} \\mapsto x^{\\mu} + \\varepsilon\\omega^{\\mu}_{\\phantom{\\mu}\\nu}x^{\\nu}$ with $\\omega_{\\mu\\nu} = -\\omega_{\\nu\\mu}$. The fields transform as $\\phi_{a} \\mapsto \\phi_{a} + \\varepsilon\\frac{1}{2}\\omega_{\\mu\\nu}(\\Sigma^{\\mu\\nu})_{ab}\\phi_{b}$, where $\\Sigma^{\\mu\\nu}$ are the representation matrices of the Lorentz algebra.

The Noether current is the **angular momentum tensor**:

$$M^{\\mu}_{\\phantom{\\mu}\\nu\\lambda} = x_{\\nu}T^{\\mu}_{\\phantom{\\mu}\\lambda} - x_{\\lambda}T^{\\mu}_{\\phantom{\\mu}\\nu} + \\frac{\\partial\\mathcal{L}}{\\partial(\\partial_{\\mu}\\phi_{a})}(\\Sigma_{\\nu\\lambda})_{ab}\\phi_{b}.$$

The conserved charges are the total angular momentum:

$$J_{\\nu\\lambda} = \\int M^{0}_{\\phantom{0}\\nu\\lambda}\\,d^{3}x.$$

For a scalar field ($\\Sigma = 0$), this reduces to $\\mathbf{J} = \\int\\mathbf{x} \\times \\mathbf{\\mathcal{P}}\\,d^{3}x$, where $\\mathbf{\\mathcal{P}}$ is the momentum density.

Indeed, differentiating the orbital part produces the antisymmetric part of the stress tensor after its divergence terms vanish. Lorentz invariance supplies an equal and opposite divergence of the spin part. For a scalar with the usual kinetic density the tensor is symmetric, so the orbital part already suffices. For fields carrying a nontrivial Lorentz representation, omitting the spin term can leave a nonzero divergence. The word spin here describes how a classical field transforms under the Lorentz group; quantized particle interpretations need additional structure. The general derivation is the proved point-transformation identity applied to each constant antisymmetric generator, rather than a new conservation assumption.

## Internal symmetries

**Definition 16.3 (Internal symmetry).** A symmetry that does not act on spacetime coordinates is an *internal symmetry*.

Consider a complex scalar field with Lagrangian $\\mathcal{L} = \\partial_{\\mu}\\phi^{*}\\partial^{\\mu}\\phi - m^{2}\\phi^{*}\\phi$. This is invariant under the global phase rotation

$$\\phi \\mapsto e^{i\\alpha}\\phi, \\qquad \\phi^{*} \\mapsto e^{-i\\alpha}\\phi^{*}.$$

For infinitesimal $\\alpha$, $\\Psi = i\\phi$ and $\\Psi^{*} = -i\\phi^{*}$. The Noether current is

$$j^{\\mu} = i(\\phi\\partial^{\\mu}\\phi^{*} - \\phi^{*}\\partial^{\\mu}\\phi).$$

The conserved charge is

$$Q = \\int j^{0}\\,d^{3}x = i\\int(\\phi\\dot{\\phi}^{*} - \\phi^{*}\\dot{\\phi})\\,d^{3}x.$$

This is the conserved $U(1)$ charge. In a relativistic complex scalar theory it measures particle charge minus antiparticle charge; it is not, in general, the total particle number.

## Worked example: a charged periodic mode

On a periodic spatial box of volume $\\mathcal V$, choose a compatible wavevector and $\\phi=Ae^{i(\\omega t-\\mathbf k\\cdot\\mathbf x)}$, $\\omega^2=|\\mathbf k|^2+m^2$, $m^2\\ge0$. This solves the free complex field equation. For the generator above, substitution gives

$$j^\\mu=2|A|^2 k^\\mu,\\qquad Q=2\\omega|A|^2\\mathcal V.$$

The current is constant, and the periodic boundary flux cancels in pairs. Its sign is positive for the displayed positive $\\omega$ and phase convention; complex conjugation reverses the current while leaving the energy unchanged. The usual free complex-field energy density is $|\\phi_t|^2+|\\nabla\\phi|^2+m^2|\\phi|^2=2\\omega^2|A|^2$, so $E=\\omega Q$ on this particular mode. A superposition with both frequency signs need not have energy proportional to its signed charge. The mode illustrates a classical symmetry charge, not a derivation of particle counting or a claim that every complex-field charge is positive. On infinite space these constant densities have divergent integrals; the periodic-volume qualification is necessary.

## Worked example: conserved current for a real scalar field

For a real scalar field with $\\mathcal{L} = \\frac{1}{2}\\partial_{\\mu}\\phi\\partial^{\\mu}\\phi - \\frac{1}{2}m^{2}\\phi^{2}$, reality excludes the complex phase $U(1)$ rotation above, but not all continuous internal symmetries. At $m=0$, the constant shift $\\phi\\mapsto\\phi+\\varepsilon$ leaves this density invariant; with $\\Psi=1$, $X^\\mu=K^\\mu=0$, its current is $j^\\mu=\\partial^\\mu\\phi$ and $\\partial_\\mu j^\\mu=\\Box\\phi=0$ on shell. The mass term breaks this shift for $m\\ne0$. A shift must also preserve the admissible fields and boundary data to be a symmetry of a boundary-value problem; a global charge needs a finite spatial integral, and its conservation requires vanishing net boundary flux. Spacetime symmetries still yield conserved currents.

Under the scaling $x^{\\mu} \\mapsto \\lambda x^{\\mu}$, $\\phi \\mapsto \\lambda^{-1}\\phi$ (for $m = 0$), the action is invariant. The associated current is the **dilation current**:

$$j^{\\mu}_{D} = T^{\\mu}_{\\phantom{\\mu}\\nu}x^{\\nu} + \\phi\\frac{\\partial\\mathcal{L}}{\\partial(\\partial_{\\mu}\\phi)}.$$

For $m = 0$, $\\partial_{\\mu}j^{\\mu}_{D} = 0$. For $m \\neq 0$, the scale symmetry is explicitly broken: $\\partial_{\\mu}j^{\\mu}_{D} = m^{2}\\phi^{2}$.

To verify the last statement rather than infer it from a name, use $T^\\mu_{\\ \\mu}=-(\\partial\\phi)^2+2m^2\\phi^2$ and $\\Box\\phi=-m^2\\phi$. Then

$$\\partial_\\mu(T^\\mu_{\\ \\nu}x^\\nu+\\phi\\partial^\\mu\\phi)
=T^\\mu_{\\ \\mu}+(\\partial\\phi)^2+\\phi\\Box\\phi=m^2\\phi^2.$$

This is a local identity on solutions. Dilation also rescales the domain and boundary data; a fixed finite box is generally not dilation invariant. Thus even the massless local identity does not automatically define a conserved dilation charge for every boundary problem.

## Worked example: controlled explicit breaking

Let a free real scalar have a prescribed time-dependent squared mass $M(t)$, with density $\\mathcal L=(\\partial\\phi)^2/2-M(t)\\phi^2/2$. The equation is $\\Box\\phi+M(t)\\phi=0$. Its instantaneous energy density is $e=(\\phi_t^2+|\\nabla\\phi|^2+M(t)\\phi^2)/2$. Multiplying the equation by $\\phi_t$ now gives

$$\\partial_te+\\nabla\\cdot(-\\phi_t\\nabla\\phi)=\\frac12 M'(t)\\phi^2.$$

For vanishing boundary flux, $\\dot E=M'(t)\\int\\phi^2/2$. This agrees with the explicit-coordinate formula $\\partial_\\mu T^\\mu_{\\ 0}=-\\partial\\mathcal L/\\partial t$. The apparatus changing the coefficient exchanges energy with the field. If $M$ is constant, the source vanishes; if it varies slowly, the exact accumulated energy change is the integral of this term, not automatically zero. Spatial translations can remain symmetries throughout because the coefficient depends only on time. Symmetry statements must be checked against external coefficients as well as the dynamical variables.

## Gauge symmetry and Noether's theorem

For a local gauge symmetry, Noether's second theorem yields a differential identity among the Euler--Lagrange expressions. In electromagnetism, the antisymmetry of $F^{\\mu\\nu}$ gives the identity $\\partial_\\nu\\partial_\\mu F^{\\mu\\nu}=0$. Combined with Maxwell's equation $\\partial_\\mu F^{\\mu\\nu}=J^\\nu$, this requires a consistent source to satisfy $\\partial_\\nu J^\\nu=0$. In a dynamical matter theory, that conservation law is tied to the matter equations as well as gauge invariance; it should not be described as an arbitrary off-shell current identity.

For source-free electromagnetism the identity follows directly from the action as well. Write its variational derivative with respect to $A_\\nu$ as $E_A^\\nu=\\partial_\\mu F^{\\mu\\nu}$. A compactly supported gauge variation gives $0=\\delta S=\\int E_A^\\nu\\partial_\\nu\\Lambda=-\\int(\\partial_\\nu E_A^\\nu)\\Lambda$. The fundamental lemma yields $\\partial_\\nu E_A^\\nu\\equiv0$ for every smooth potential, not only solutions. With a prescribed source the corresponding expression is $E_A^\\nu=\\partial_\\mu F^{\\mu\\nu}-J^\\nu$, whose divergence equals $-\\partial_\\nu J^\\nu$; source conservation is the compatibility condition. With dynamical charged matter, the full identity includes matter Euler–Lagrange expressions. This elementary case proves the relevant differential identity without confusing it with an off-shell identity for an arbitrary matter current.

## Common errors

- **Confusing global and local symmetries:** The global point-symmetry identity becomes current conservation on shell. Gauge redundancy supplies relations among variational derivatives off shell; matter current conservation still has its own equation and source hypotheses. Boundary symmetries require separate charge analysis.
- **Forgetting the spin contribution:** The total angular momentum includes both orbital and spin contributions. For a Dirac field, the spin term is essential.
- **Improperly symmetrizing the energy-momentum tensor:** The canonical energy-momentum tensor is not always symmetric or gauge invariant. The Belinfante improvement procedure adds terms to make it symmetric while preserving conservation.

## Practice exercises

<a id="noether-s-theorem-in-field-theory-ex-1"></a>

### Exercise 1
For a complex scalar field with Lagrangian $\\mathcal{L} = \\partial_{\\mu}\\phi^{*}\\partial^{\\mu}\\phi - m^{2}\\phi^{*}\\phi - \\lambda(\\phi^{*}\\phi)^{2}$, show that the $U(1)$ current $j^{\\mu} = i(\\phi\\partial^{\\mu}\\phi^{*} - \\phi^{*}\\partial^{\\mu}\\phi)$ is conserved.

<details>
<summary>Hint 1</summary>

Differentiate the current before inserting the equations. The cross-gradient terms cancel.

</details>

<details>
<summary>Hint 2</summary>

The mass and quartic forces are parallel to the complex field and cancel between the conjugate equations.

</details>

<details>
<summary>Full solution</summary>

Using the Euler--Lagrange equations $(\\partial_{\\mu}\\partial^{\\mu} + m^{2})\\phi = -2\\lambda\\phi^{*}\\phi\\phi$ and similarly for $\\phi^{*}$:

$$\\partial_{\\mu}j^{\\mu} = i(\\phi\\partial_{\\mu}\\partial^{\\mu}\\phi^{*} - \\phi^{*}\\partial_{\\mu}\\partial^{\\mu}\\phi) = i\\phi(-m^{2}\\phi^{*} - 2\\lambda\\phi\\phi^{*2}) - i\\phi^{*}(-m^{2}\\phi - 2\\lambda\\phi^{*}\\phi^{2}) = 0.$$

</details>

<a id="noether-s-theorem-in-field-theory-ex-2"></a>

### Exercise 2
Derive the energy-momentum tensor for the electromagnetic field and show that $T^{00} = \\frac{1}{2}(\\mathbf{E}^{2} + \\mathbf{B}^{2})$ and $T^{0i} = (\\mathbf{E} \\times \\mathbf{B})_{i}$.

<details>
<summary>Hint 1</summary>

Use the symmetric tensor written purely in terms of field strength; the canonical tensor needs improvement.

</details>

<details>
<summary>Hint 2</summary>

In the mostly-minus convention substitute the electric and magnetic components carefully into the temporal row.

</details>

<details>
<summary>Full solution</summary>

For $\\mathcal{L} = -\\frac{1}{4}F_{\\mu\\nu}F^{\\mu\\nu}$, use the symmetric gauge-invariant tensor

$$T^{\\mu\\nu}=-F^{\\mu\\lambda}F^{\\nu}_{\\ \\lambda}+\\frac14 g^{\\mu\\nu}F_{\\lambda\\sigma}F^{\\lambda\\sigma}.$$

Using $F^{0i} = -E^{i}$ and $F^{ij} = -\\epsilon_{ijk}B^{k}$:

Substitution gives $T^{00}=\\frac12(\\mathbf E^2+\\mathbf B^2)$ and $T^{0i}=(\\mathbf E\\times\\mathbf B)_i$ in the stated units and mostly-minus convention. No gauge fixing is needed because this tensor is written in terms of $F$.

To obtain it from the canonical tensor, start with $T_{\\rm can}^{\\mu\\nu}=-F^{\\mu\\lambda}\\partial^\\nu A_\\lambda+g^{\\mu\\nu}F^2/4$. Add the identically conserved improvement $\\partial_\\lambda(F^{\\mu\\lambda}A^\\nu)$. In the source-free theory $\\partial_\\lambda F^{\\mu\\lambda}=0$ on shell, leaving $-F^{\\mu\\lambda}(\\partial^\\nu A_\\lambda-\\partial_\\lambda A^\\nu)+g^{\\mu\\nu}F^2/4$, the stated tensor. Its temporal component is $\\mathbf E^2+(\\mathbf B^2-\\mathbf E^2)/2$. Its mixed temporal-spatial component is $\\epsilon_{ijk}E_jB_k$. The improvement preserves total charges when its boundary term vanishes; sources require including their momentum exchange.

</details>

<a id="noether-s-theorem-in-field-theory-ex-3"></a>

### Exercise 3
Compute the trace of the canonical energy-momentum tensor for a free massless scalar in four spacetime dimensions. Does it vanish? State what must change to obtain a traceless tensor.

<details>
<summary>Hint 1</summary>

Contract the canonical tensor before using the field equation.

</details>

<details>
<summary>Hint 2</summary>

The improvement contains two derivatives of the field squared; its trace is one half of its wave operator in four dimensions.

</details>

<details>
<summary>Full solution</summary>

For $\\mathcal L=\\frac12\\partial_\\lambda\\phi\\partial^\\lambda\\phi$, the canonical tensor has trace

$$T^\\mu_{\\ \\mu}=\\partial^\\mu\\phi\\partial_\\mu\\phi-4\\mathcal L=-\\partial^\\mu\\phi\\partial_\\mu\\phi,$$

which is not identically zero, even after imposing $\\Box\\phi=0$. In four dimensions one can add the standard improvement term $(1/6)(g^{\\mu\\nu}\\Box-\\partial^\\mu\\partial^\\nu)\\phi^2$; the improved tensor is traceless on shell. Thus tracelessness belongs to the improved conformal tensor, not the canonical tensor posed initially.

</details>

<a id="noether-s-theorem-in-field-theory-ex-4"></a>

### Exercise 4
Consider two real scalar fields $\\phi_{1}$ and $\\phi_{2}$ with Lagrangian $\\mathcal{L} = \\frac{1}{2}\\partial_{\\mu}\\phi_{i}\\partial^{\\mu}\\phi_{i} - \\frac{1}{2}m^{2}\\phi_{i}\\phi_{i} - \\frac{\\lambda}{4}(\\phi_{i}\\phi_{i})^{2}$. Show that the $SO(2)$ rotation symmetry yields a conserved current.

<details>
<summary>Hint 1</summary>

Differentiate the stated rotation at zero angle to fix the sign of its generator.

</details>

<details>
<summary>Hint 2</summary>

The potential gradient is radial in the two-dimensional internal space, so the two force terms cancel in the current divergence.

</details>

<details>
<summary>Full solution</summary>

Under $\\phi_{1} \\mapsto \\phi_{1}\\cos\\alpha - \\phi_{2}\\sin\\alpha$, $\\phi_{2} \\mapsto \\phi_{1}\\sin\\alpha + \\phi_{2}\\cos\\alpha$, for infinitesimal $\\alpha$: $\\delta\\phi_{1} = -\\alpha\\phi_{2}$, $\\delta\\phi_{2} = \\alpha\\phi_{1}$. The Noether current for this displayed generator is $j^{\\mu} = \\phi_{1}\\partial^{\\mu}\\phi_{2} - \\phi_{2}\\partial^{\\mu}\\phi_{1}$. Conservation follows from the equations of motion. The opposite generator gives the negative current, which is also conserved on shell. This online normalisation correction postdates the retained draft PDF.

</details>

<a id="noether-s-theorem-in-field-theory-ex-5"></a>

### Exercise 5
Explain why the energy-momentum tensor of a gauge theory (like electromagnetism) must be gauge invariant, while the canonical Noether current is not obviously so.

<details>
<summary>Hint 1</summary>

The canonical tensor contains derivatives of the potential rather than only field strength.

</details>

<details>
<summary>Hint 2</summary>

Compare it with the displayed gauge-invariant tensor and remember that improvements can change boundary contributions.

</details>

<details>
<summary>Full solution</summary>

Physical observables, including energy and momentum, must be gauge invariant. The canonical energy-momentum tensor $T^{\\mu}_{\\phantom{\\mu}\\nu} = \\frac{\\partial\\mathcal{L}}{\\partial(\\partial_{\\mu}A_{\\lambda})}\\partial_{\\nu}A_{\\lambda} - \\delta^{\\mu}_{\\phantom{\\mu}\\nu}\\mathcal{L}$ is not gauge invariant because $\\partial_{\\nu}A_{\\lambda}$ is not. One may improve it or use the symmetric tensor

$$T^{\\mu\\nu}=-F^{\\mu\\lambda}F^{\\nu}_{\\ \\lambda}+\\frac14g^{\\mu\\nu}F_{\\lambda\\sigma}F^{\\lambda\\sigma},$$

which is manifestly gauge invariant and has positive $T^{00}$ in the mostly-minus convention.

</details>

<a id="noether-s-theorem-in-field-theory-ex-6"></a>

### Exercise 6

For a massless real field with density $(\\partial\\phi)^2/2$, derive the current of constant shifts and prove its charge is constant on a periodic box. Does a nonzero mass preserve this symmetry?

<details>
<summary>Hint 1</summary>

The shift has $X=0$, $\\Psi=1$, and no boundary density term.

</details>

<details>
<summary>Hint 2</summary>

The charge is the integral of the temporal derivative. Integrate the wave equation and use the boundary flux.

</details>

<details>
<summary>Full solution</summary>

The current is $j^\\mu=\\partial^\\mu\\phi$, so $\\partial_\\mu j^\\mu=\\Box\\phi=0$. The charge $Q=\\int\\phi_t$ satisfies $\\dot Q=\\int\\Delta\\phi=0$ on the periodic box. With a mass term, the density changes by $-\\epsilon m^2\\phi$ to first order and $\\partial_\\mu j^\\mu=-m^2\\phi$ on solutions. The shift is then explicitly broken. Even when massless, imposed nonzero fixed Dirichlet data are generally not preserved by a constant shift, so the symmetry of that boundary problem must be reconsidered.

</details>

<a id="noether-s-theorem-in-field-theory-ex-7"></a>

### Exercise 7

Prove that adding $\\partial_\\nu B^{\\nu\\mu}$, with smooth antisymmetric $B$, preserves current divergence. Determine the change in charge on a bounded spatial region.

<details>
<summary>Hint 1</summary>

Interchange the two dummy indices in the double divergence.

</details>

<details>
<summary>Hint 2</summary>

For the charge component $B^{00}=0$, so only spatial derivatives remain.

</details>

<details>
<summary>Full solution</summary>

The expression $D=\\partial_\\mu\\partial_\\nu B^{\\nu\\mu}$ equals $-D$ after interchanging the indices and commuting derivatives, hence it is zero. The charge difference is $\\int_D\\partial_i B^{i0}\\,d^3x=\\int_{\\partial D}B^{i0}n_i\\,dS$. It vanishes for suitable decay or matching periodic conditions but need not vanish for an arbitrary finite boundary. The two currents always have the same local divergence; they have the same total charge only under the additional boundary condition.

</details>

<a id="noether-s-theorem-in-field-theory-ex-8"></a>

### Exercise 8

Verify explicitly that the improved free massless scalar tensor in Exercise 3 is conserved identically up to the original tensor's divergence and is traceless on shell in four dimensions.

<details>
<summary>Hint 1</summary>

Commute derivatives in the divergence of $g^{\\mu\\nu}\\Box f-\\partial^\\mu\\partial^\\nu f$.

</details>

<details>
<summary>Hint 2</summary>

Use $\\Box\\phi^2=2(\\partial\\phi)^2+2\\phi\\Box\\phi$.

</details>

<details>
<summary>Full solution</summary>

For $\\Delta T^{\\mu\\nu}=(g^{\\mu\\nu}\\Box-\\partial^\\mu\\partial^\\nu)\\phi^2/6$, its divergence is $(\\partial^\\nu\\Box-\\Box\\partial^\\nu)\\phi^2/6=0$ for smooth fields. Its trace is $(4-1)\\Box\\phi^2/6=(\\partial\\phi)^2+\\phi\\Box\\phi$. The canonical massless trace is $-(\\partial\\phi)^2$, so the total is $\\phi\\Box\\phi$, zero on solutions. Conservation of the improved tensor follows from that of the original one; equality of their integrated charges additionally needs the improvement's boundary contribution to vanish.

</details>

<a id="noether-s-theorem-in-field-theory-ex-9"></a>

### Exercise 9

For the density $(\\partial\\phi)^2/2-M(\\mathbf x)\\phi^2/2$ with time-independent but spatially varying $M$, derive the on-shell divergence of $T^\\mu_{\\ \\nu}$. Which translation symmetry is always retained, assuming compatible boundary conditions?

<details>
<summary>Hint 1</summary>

Only differentiate explicit coordinate dependence after holding the field and its derivatives fixed.

</details>

<details>
<summary>Hint 2</summary>

Use the direct translation identity in the text, with its minus sign.

</details>

<details>
<summary>Full solution</summary>

On shell $\\partial_\\mu T^\\mu_{\\ \\nu}=(\\partial_\\nu M)\\phi^2/2$. The $\\nu=0$ component is zero, so time translations and the associated energy conservation remain. A spatial translation is retained if $M$ is independent of that direction; arbitrary spatial translations are generally broken. Integrated momentum balance includes both the volume source and boundary stress flux, with the raised-versus-lowered spatial sign handled by the metric convention. A conserved energy need not imply conserved momentum in an inhomogeneous medium.

</details>

<a id="noether-s-theorem-in-field-theory-ex-10"></a>

### Exercise 10

For source-free electromagnetism, prove the differential identity among the potential's Euler–Lagrange expressions using a compactly supported gauge parameter. Explain why it is stronger than taking the divergence of the equation after solving it.

<details>
<summary>Hint 1</summary>

The field strength does not change under a gradient variation.

</details>

<details>
<summary>Hint 2</summary>

Write the first variation as the integral of $E_A^\\nu\\partial_\\nu\\Lambda$ and integrate by parts.

</details>

<details>
<summary>Full solution</summary>

Gauge invariance gives $0=\\int E_A^\\nu\\partial_\\nu\\Lambda=-\\int\\partial_\\nu E_A^\\nu\\Lambda$. Since every compactly supported smooth $\\Lambda$ is allowed, $\\partial_\\nu E_A^\\nu\\equiv0$. Here $E_A^\\nu=\\partial_\\mu F^{\\mu\\nu}$, and the same conclusion follows algebraically by antisymmetry. No potential field equation was imposed. Thus the variational derivatives are functionally dependent off shell; merely substituting a solution would show only that the divergence of zero vanishes. With matter present, omitting its variational derivatives from the full identity would lose necessary terms.

</details>

<a id="connections"></a>

## Summary and connections

Noether's theorem in field theory is the cornerstone of modern particle physics. The conserved currents associated with internal symmetries give rise to the charges that label particles. In **Geometric Numerical Integration**, preserving these conservation laws numerically is essential for long-time simulations. The geometric formulation of field theory, with its infinite-dimensional symplectic structure, extends the ideas of **Symplectic Geometry** to the continuum.
`;export{e as default};