var e=`---
parent_id: book-electromagnetism-relativity
chapter_id: notation-conventions
title: "Units, Signs and Regularity"
level: advanced-undergraduate
license: CC BY-SA 4.0
---

# Units, Signs and Regularity

## SI and spatial orientation

The book uses SI throughout. Charge density is $\\rho$ in coulombs per cubic metre, current density is $J$ in amperes per square metre, electric field is $E$ in volts per metre, and magnetic induction is $B$ in teslas. Vacuum constants satisfy $c^{-2}=\\varepsilon_0\\mu_0$. Constitutive parameters describing matter are additional model data; neither a constant permittivity nor an instantaneous Ohm law is assumed in vacuum statements.

Spatial coordinates are right-handed, with $\\epsilon_{123}=1$. Cross products and the right-hand boundary orientation use that choice. A closed surface has outward normal. At an interface, a stated normal $n$ points from side one to side two, and the jump notation is $[f]=f_2-f_1$. Reversing the normal and side labels together leaves a physical jump law unchanged.

The vacuum equations and force convention are

$$
\\nabla\\cdot E=\\rho/\\varepsilon_0,\\qquad
\\nabla\\cdot B=0,\\qquad
\\nabla\\times E=-\\partial_tB,\\qquad
\\nabla\\times B=\\mu_0J+c^{-2}\\partial_tE,
$$

$$F=q(E+v\\times B).$$

These equations concern total microscopic charge and current, including any sources later grouped as bound charges and currents. The macroscopic fields are $D=\\varepsilon_0E+P$ and $H=B/\\mu_0-M$. Their source equations use free charge and free current. One must translate between those conventions before comparing an interface equation.

## Potentials and gauge

The physical potentials satisfy $B=\\nabla\\times A$ and $E=-\\nabla\\phi-\\partial_tA$. Gauge changes are

$$A\\mapsto A+\\nabla\\chi,\\qquad \\phi\\mapsto\\phi-\\partial_t\\chi.$$

The Lorenz condition is $\\nabla\\cdot A+c^{-2}\\partial_t\\phi=0$. Lorenz is the gauge condition; Lorentz denotes the spacetime transformations. A gauge condition does not select initial and boundary data by itself. Residual gauge functions may remain, and global topology can obstruct a single global potential even when a local representation exists.

## Lorentz convention

Coordinates are $x^\\mu=(ct,x,y,z)$, Greek indices run from zero to three, and repeated upper-lower indices are summed. The metric is

$$\\eta_{\\mu\\nu}=\\operatorname{diag}(1,-1,-1,-1).$$

Thus $U\\cdot V=U^0V^0-\\mathbf U\\cdot\\mathbf V$, and lowering a spatial index changes its sign. We write $\\partial_\\mu=(c^{-1}\\partial_t,\\nabla)$ and $\\partial^\\mu=(c^{-1}\\partial_t,-\\nabla)$. Four-potential and four-current are $A^\\mu=(\\phi/c,A)$ and $J^\\mu=(c\\rho,J)$.

Our field tensor is

$$F^{\\mu\\nu}=\\partial^\\mu A^\\nu-\\partial^\\nu A^\\mu,$$

so $F^{0i}=-E_i/c$, $F^{i0}=E_i/c$, and $F^{ij}=-\\epsilon_{ijk}B_k$. Maxwell's sourced equation is $\\partial_\\mu F^{\\mu\\nu}=\\mu_0J^\\nu$, and the particle force law is $dp^\\mu/d\\tau=qF^{\\mu\\nu}u_\\nu$. These component checks are part of the derivation in the covariant chapter. A formula from a source using the opposite metric or the opposite definition of the field tensor must be translated as a whole.

The wave operator is $\\Box=c^{-2}\\partial_t^2-\\nabla^2$. In Lorenz gauge $\\Box A^\\mu=\\mu_0J^\\mu$. A boost to a frame moving at speed $v$ in the positive $x$ direction has $ct'=\\gamma(ct-\\beta x)$ and $x'=\\gamma(x-\\beta ct)$, with $\\beta=v/c$ and $\\gamma=(1-\\beta^2)^{-1/2}$. This passive transformation convention determines the later signs in the field-transformation formulas.

## Regularity, sources and limits

Classical differentiations use sufficiently smooth fields on an explicitly stated open region. A second derivative identity ordinarily requires twice continuously differentiable potentials. Integral theorems use piecewise smooth oriented boundaries and fields regular on a neighborhood of the integration region. Removing a singularity changes the domain and introduces an additional boundary; that boundary cannot simply be ignored.

Point, line and sheet sources are idealizations. Their equations are interpreted by integrals or distributions, and pointwise field formulas apply away from their support. A point charge has divergent classical self-energy; the book does not obtain a finite self-force merely by substituting its singular field into the particle force law. Radiation formulas concern specified source motions or explicit approximations, with back reaction treated separately.

When an approximation is made, we name the small dimensionless parameter and the region in which it controls omitted terms. Long wavelength, low velocity, far field, weak material response and slow temporal variation are different assumptions. None implies all the others. The material chapter distinguishes passive linear response from active or nonlinear models and retains the limits of a local constitutive relation.


## Dual and stress convention

The upper four-dimensional orientation symbol satisfies $\\epsilon^{0123}=1$; metric lowering gives $\\epsilon_{0123}=-1$. The dual is $\\widetilde F^{\\mu\\nu}=\\epsilon^{\\mu\\nu\\alpha\\beta}F_{\\alpha\\beta}/2$. Consequently its top row contains negative magnetic induction and its spatial block contains positive electric field divided by light speed with the spatial orientation symbol. Both contractions and homogeneous equations in the covariant chapter use this declaration.

Maxwell stress is defined as physical traction tensor, while the spatial block of stress-energy is its negative, the field momentum-flux tensor. The temporal entries are energy density and energy flux divided by light speed. This choice makes stress-energy divergence negative the Lorentz force-density four-vector delivered to matter. Particle energy and electric field are distinguished by their scalar or vector role and their units whenever the same conventional letter is used.
`;export{e as default};