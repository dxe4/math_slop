
# Reader Guide and Notation

This L4 course develops continuum models from geometry, balances and constitutive assumptions. Its L3 [tensor opening](tensors-index-notation.md) supplies Cartesian index notation before it is used in the later proofs. Preparation includes vector calculus, linear algebra, ordinary differential equations and basic mechanics. SI units and tension-positive Cauchy stress are the default conventions.

## The continuous route

Read the nineteen chapters in their stated order: tensors; material/spatial descriptions; transport; mass; stress/momentum; energy/thermodynamics; objectivity; elasticity; Newtonian fluids; scaling; exact viscous flows; potential flow; boundary layers; compressible flow; acoustics/elastic waves; electromagnetic balance; coupled fields; weak forms; and the capstone. Each primary has ten exercises with two hints and a complete solution. The named mathematical and example blocks use their chapter number followed by a local number.

The argument moves from smooth identities to declared weak solution spaces rather than assuming all fields stay classically differentiable. The [weak-PDE book](#/books/pde-weak-theory-waves-patterns) supplies the larger Sobolev, trace, regularity and evolution theory. This book proves particular energy and coercivity arguments where they clarify the physical model, and identifies additional analytic theorems where used. It does not claim a general global regularity theorem for three-dimensional Navier–Stokes or MHD.

## The solid route

Read the opening balance chapters, objectivity and elasticity, then add acoustics, thermoelastic/poroelastic coupling and the capstone's constrained bar. The strain approximation requires a small displacement gradient, rather than merely small displacement amplitude. Distinguish the positive-energy condition from a reversible dissipation equality, and the pure-traction rigid kernel from an incompatible net applied load.

For an approximation route, continue to [finite-volume and finite-element mathematics](../numerical-mathematics-error-algorithms/finite-volume-element-methods.md). The complete earlier continuum numerical source remains its [registered companion](../numerical-mathematics-error-algorithms/retained-continuum-discretization-reading.md), including the original three solved problems. Numerical methods are a continuation of the physical and analytic model, with their own stability and approximation assumptions.

## The fluid route

Read the opening balances, Newtonian flow and scaling before exact viscous solutions, potential flow and boundary layers. Potential no penetration is different from viscous no slip. The Blasius shooting proof constructs a particular Prandtl similarity solution; it does not prove an unrestricted Navier–Stokes inviscid limit. Continue through compressible flow and acoustics to distinguish smooth isentropic waves, entropy-producing shocks and contact discontinuities.

Exact laminar profiles solve their declared ansatz and boundary data. Stability to general disturbances is a separate theorem. A small coefficient also does not guarantee a small discarded term when derivatives grow in a thin layer. Keep the approximation region, local length scale and initial/boundary protocol visible when comparing a reduced flow with a larger system.

## The field and coupling route

Use [electromagnetic balance](electromagnetic-field-balance.md) and [coupled models](coupled-field-continuum-models.md), returning to transport and thermodynamics for the power conventions. The [electromagnetism book](#/books/electromagnetism-relativity) develops the wider field and relativistic theory. This continuum route concentrates on charge compatibility, Lorentz power, magnetic flux, joint free energies and boundary exchange.

The capstone's conducting channel declares its low magnetic-Reynolds approximation and circuit closure. Its acoustic layer shows why a weak first reflection does not imply absorption when a later boundary returns the stored energy. In both cases an external control or a finite observation interval can change the interpretation without changing a local algebraic identity.

## Working through a proof or exercise

Write the unknown, domain, solution/test spaces, constitutive restrictions and boundary normals before calculating. Cover an example and derive its next step before reading it. Attempt an exercise before opening Hint 1; use Hint 2 for the decisive construction and the complete solution to compare the argument. Personal reading records indicate study and are not graded evidence.

Keep a hypothesis record and a unit record. A stress has pressure units; viscosity multiplies a rate; specific energy differs from current- or reference-volume energy by density or Jacobian factors. A current density and a deformation Jacobian can share the symbol J while representing different objects, so identify their context before combining formulas.

Distinguish a proved result within a mathematical model, an identified theorem input, a formal asymptotic reduction, and a measured observation about a physical system. The exact Stokes drag calculation proves the drag of the exterior Stokes solution; applying that approximation to a real flow additionally needs its regime and measurement context. Difficulty of a proof is not uncertainty of its conclusion under its hypotheses, and a physically useful formula is not permission to drop those hypotheses.

The earlier integrated continuum reading and earlier solution compendium remain available as supporting matter. Their original mathematical developments are preserved while the primary route supplies the full nineteen-chapter progression. Report a suspected mathematical error with the chapter identity, smallest disputed statement and a counterexample or proposed correction when possible.
