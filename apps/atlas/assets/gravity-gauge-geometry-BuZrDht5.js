var e=`---
id: deep-dive-gravity-gauge-geometry
title: "Gravity and Gauge Fields Through Geometry"
license: CC BY-SA 4.0
---

# Gravity and Gauge Fields Through Geometry

**Before reading.** Read [Regular Surfaces and Coordinate Patches](../books/differential-geometry-curves-surfaces/regular-surfaces-patches.md), [Group Actions, Orbits, Stabilizers, and Counting](../books/algebra-patterns-structure/group-actions-orbits-counting.md), [Spacetime Invariants: Special Relativity by Geometry](../deep-dives/spacetime-invariants.md) and [Electromagnetic Field Balance](../books/fields-fluids-continuum/electromagnetic-field-balance.md). These are preparation for the ideas used below.

General relativity and gauge theory both replace ordinary derivatives with geometric connections and interpret curvature as physical field strength. The analogy is powerful but not identity: gravity acts on spacetime geometry and is invariant under diffeomorphisms, while Yang–Mills connections describe internal fibers over spacetime. This deep dive builds the common mathematics and keeps the differences visible.

Prerequisites are smooth manifolds, differential forms, Lie groups and algebras, special relativity, electromagnetism, and tensor calculus. We use Lorentz signature $(-,+,+,+)$. Riemann-curvature signs differ across sources; formulas involving them must be translated as a complete convention set.

## 1. Why ordinary derivatives fail

Vectors at different points of a manifold lie in different tangent spaces. Subtracting them requires a rule for comparison. An affine connection $\\nabla$ differentiates vector fields and obeys linearity plus a Leibniz rule:

$$\\nabla_{X}(fY)=X(f)Y+f\\nabla_{X}Y$$

In coordinates,

$$\\nabla_{\\partial_\\mu}\\partial_\\nu=\\Gamma^\\rho_{\\mu\\nu}\\partial_\\rho$$

The coefficients $\\Gamma$ do not transform as tensor components; their inhomogeneous transformation is what cancels the non-tensorial change of partial derivatives. For a torsion-free affine connection, in particular the Levi–Civita connection, normal coordinates can set all $\\Gamma$ to zero at one point without forcing curvature to vanish there or setting $\\Gamma=0$ throughout a neighborhood. In a coordinate basis $T^\\rho_{\\mu\\nu}=\\Gamma^\\rho_{\\mu\\nu}-\\Gamma^\\rho_{\\nu\\mu}$; a coordinate change adds a symmetric second-derivative term to the connection law, so its antisymmetric part transforms tensorially. On $\\mathbb R^2$, the constant coefficients $\\Gamma^1_{12}=1$, $\\Gamma^1_{21}=0$ and all others zero give $T(\\partial_1,\\partial_2)=\\partial_1\\ne0$, preventing all coefficients from vanishing in any coordinate system at a point.

Parallel transport along $\\gamma$ solves $\\nabla_{\\dot\\gamma}V=0$. Transport around a small loop can return a changed vector. Curvature measures this failure:

$$R(X,Y)Z=\\nabla_{X}\\nabla_{Y}Z-\\nabla_{Y}\\nabla_{X}Z-\\nabla_{[X,Y]}Z$$

for one common convention. Swapping the first two terms flips later curvature signs.

## 2. Metric geometry and free fall

A Lorentzian metric $g$ assigns a nondegenerate bilinear form of signature $(-,+,+,+)$ to each tangent space. There is a unique connection that is torsion-free and metric-compatible: the Levi–Civita connection.

A timelike geodesic extremizes proper time locally and satisfies

$$d^{2}x^\\mu/d\\tau^{2}+\\Gamma^\\mu_{\\alpha\\beta}(dx^\\alpha/d\\tau)(dx^\\beta/d\\tau)=0$$

Geodesics need not globally maximize proper time after conjugate points, just as Riemannian geodesics need not globally minimize distance. Null curves have zero proper time and use an affine parameter instead.

Nearby geodesics with separation $\\xi$ satisfy geodesic deviation

$$\\nabla_{u}\\nabla_{u} \\xi = -R(\\xi,u)u$$

under the displayed curvature convention and index placement. This relative acceleration is tidal gravity: it cannot be removed over a finite neighborhood by one freely falling coordinate system.

## 3. Einstein equation and its constraints

Contract Riemann curvature to Ricci tensor $R_{\\mu\\nu}$ and scalar $R$. Einstein tensor is

$$G_{\\mu\\nu}=R_{\\mu\\nu}-(1/2)Rg_{\\mu\\nu}$$

With cosmological constant $\\Lambda$, Einstein’s equation in SI units is

$$G_{\\mu\\nu}+\\Lambda g_{\\mu\\nu}=(8\\pi G/c^{4})T_{\\mu\\nu}$$

The contracted Bianchi identity $\\nabla^\\mu G_{\\mu\\nu}=0$ is geometric. It enforces $\\nabla^\\mu T_{\\mu\\nu}=0$ for matter compatible with the equation. This is covariant local balance; a generic curved spacetime need not have a globally conserved scalar energy because it may lack time-translation symmetry.

Einstein’s equation is not simply ten independent wave equations. Coordinate invariance creates gauge freedom, and initial data on a spacelike hypersurface consist of a spatial metric and extrinsic curvature satisfying four constraint equations. Lapse and shift encode coordinate evolution. Hyperbolic formulations add gauge conditions to obtain a well-posed evolution system.

Matter needs its own equations. A perfect fluid uses

$$T^{\\mu\\nu}=(\\varepsilon+p)u^\\mu u^\\nu/c^{2}+pg^{\\mu\\nu}$$

when $u\\cdot u=-c^{2}$ and $\\varepsilon$ is energy density. An equation of state closes the system. Dust sets $p=0$; it is not a model for every star or cosmological era.

## 4. A weak-field boundary

Write $g_{\\mu\\nu}=\\eta_{\\mu\\nu}+h_{\\mu\\nu}$ with $|h|≪1$ in a region admitting near-Minkowski coordinates. Linearized coordinate transformations act like gauge transformations on $h$. With a trace-reversed perturbation and harmonic gauge, vacuum equations reduce to wave equations.

This approximation supports gravitational waves traveling at $c$, but it requires small perturbations and a gauge choice. Quantities such as coordinate components of $h$ are gauge dependent. Curvature effects, detector separation changes, or asymptotic waveform observables carry physical meaning under their own conditions.

The Newtonian limit needs weak stationary fields and slow matter. With $g_{00}\\approx-(1+2\\Phi/c^{2})$, the geodesic equation recovers acceleration $-\\nabla\\Phi$, and the field equation recovers Poisson’s equation $\\Delta\\Phi=4\\pi G\\rho$. This is a controlled limit, not proof that spacetime is literally a stretched sheet.

## 5. Internal fibers and connections

Let a Lie group $G$ act on an internal vector space. A principal $G$-bundle $P\\to M$ encodes local internal frames over spacetime. A connection tells how to compare fibers along a path. In a local trivialization it is a Lie-algebra-valued one-form $A$.

For a matter field in a representation, the covariant derivative is schematically

$$D=d+A$$

with coupling and factors of $i$ depending on Hermitian versus anti-Hermitian generators. The curvature is

$$F=dA+A\\land A$$

For abelian $U(1)$, the Lie bracket vanishes and $A\\land A$ contributes zero, leaving $F=dA$. For a nonabelian group, matrix multiplication and the wedge product retain a commutator term.

Under a local gauge transformation $g:M\\to G$, one common convention is

$A\\to gAg^{-1}-(dg)g^{-1}$, $F\\to gFg^{-1}$.

Other conventions place inverses differently. Curvature is gauge covariant, not componentwise invariant. An invariant inner product on the Lie algebra makes $\\tr(F\\land *F)$ gauge invariant.

## 6. Electromagnetism as a $U(1)$ connection

In a spacetime notation, electromagnetic potential $A=A_\\mu dx^\\mu$ has field strength $F=dA$. Gauge change $A\\to A+d\\chi$ leaves $F$ unchanged. Maxwell’s homogeneous equation is $dF=0$; the sourced equation is

$$d*F=*J$$

up to unit conventions and identification of current forms.

Locally, $dF=0$ implies $F=dA$ by the Poincaré lemma on a contractible patch. Globally, a closed two-form need not be exact. Magnetic monopole topology is described with local potentials and nontrivial transition functions; demanding one smooth global vector potential can erase the phenomenon one wants to model.

Holonomy around a loop is, in the abelian case, $\\exp(iq\\oint A/\\hbar)$ with unit-dependent normalization. Stokes relates it locally to flux of $F$. The Aharonov–Bohm effect shows that gauge-equivalence classes and holonomy can carry observable information even where local field strength vanishes along particle paths.

## 7. Yang–Mills dynamics

The Yang–Mills action in schematic natural units is

$$S[A]=-(1/2g^{2})\\int \\tr(F\\land *F)$$

Variation yields

$$D_{A} *F=*J$$

with source, while the Bianchi identity is $D_{A}F=0$. Because $F$ contains $A\\land A$, the field carries the charge associated with the nonabelian interaction and the equations are nonlinear even without external matter.

Gauge fixing is required to isolate a representative for PDE analysis or perturbative quantization. Lorenz gauge is a differential condition; Coulomb gauge is spatial. Global gauge fixing can encounter Gribov ambiguity: one condition may meet a gauge orbit more than once.

Boundary conditions change which gauge transformations count as redundancy. Transformations nontrivial at a boundary or infinity may act as physical symmetries with charges. “Gauge transformations are unphysical” is therefore shorthand requiring a declared class of allowed transformations.

## 8. Holonomy and Wilson loops

Parallel transport of internal states along a path is a path-ordered exponential because noncommuting connection values cannot be reordered. Around a closed loop, holonomy transforms by conjugation at the basepoint. Taking a trace in a representation gives a Wilson loop

$$W(C)=\\tr P \\exp(-\\oint_{C} A)$$

under a convention.

Wilson loops are gauge invariant under transformations compatible with the closed loop and trace. They probe global connection data and play central roles in lattice gauge theory and confinement diagnostics. A numerical Wilson loop on a finite lattice is an observable of the regulated model; relating its scaling to a continuum theory requires a limit.

## 9. Gravity is similar—but not the same gauge theory

The Levi–Civita connection acts on tangent frames. In tetrad form, an orthonormal coframe $e^{a}$ and spin connection $\\omega^{a}_{b}$ make local Lorentz symmetry explicit. Curvature two-form is

$$R^{a}_{b}=d\\omega^{a}_{b}+\\omega^{a}_{c}\\land \\omega^{c}_{b}$$

Cartan’s torsion is $T^{a}=de^{a}+\\omega^{a}_{b}\\land e^{b}$. Levi–Civita geometry sets torsion to zero. Einstein–Cartan and other theories can treat torsion differently.

Despite the Yang–Mills-shaped curvature formula, Einstein–Hilbert action is linear in scalar curvature and the tetrad relates internal Lorentz indices to spacetime geometry. Diffeomorphisms move spacetime points, while internal gauge transformations rotate fibers over a point. Their constraint algebras and observables differ.

Coordinates are descriptive redundancy, but constructing local diffeomorphism-invariant observables in gravity is subtler because spacetime location itself is dynamical. Relational and asymptotic observables address that issue in different settings.

## 10. Singularities and completeness

A divergent coordinate component does not prove a physical singularity. Schwarzschild coordinates are singular at the event horizon, while curvature can remain finite there and other coordinates extend through it. Curvature scalars can diagnose some singularities but can miss others.

Modern singularity theorems conclude geodesic incompleteness under causal, energy, and trapped-surface hypotheses. Incompleteness means some inextendible geodesic has finite affine length; it does not automatically say curvature diverges or prescribe the correct extension.

Energy conditions are assumptions about $T_{\\mu\\nu}$, and quantum fields can violate familiar pointwise versions. A theorem using the null or strong energy condition must state it rather than hiding it in “reasonable matter.”

## 11. Worked calculations

### A. Abelian gauge invariance

**Worked example.**

Let $A'=A+d\\chi$. Then $F'=dA'=dA+d^{2}\\chi=F$. A charged matter field must transform with a compensating phase so its covariant derivative transforms the same way as the field. The potential changes, field strength does not.

### B. Commutator curvature

For $D_\\mu=\\partial_\\mu+A_\\mu$, acting on a matter field,

$$[D_\\mu,D_\\nu]=\\partial_\\mu A_\\nu-\\partial_\\nu A_\\mu+[A_\\mu,A_\\nu]=F_{\\mu\\nu}$$

The final commutator vanishes for $U(1)$ but not for a general nonabelian group.

### C. Gravitational redshift in a static metric

If $ds^{2}=g_{00}(x)c^{2}dt^{2}+\\ldots$ with $g_{00}<0$ and static observers follow constant spatial coordinates, proper time is $d\\tau=\\sqrt{-g_{00}}dt$. Comparing emitted and received wave crests along the stationary geometry gives frequency ratios involving $\\sqrt{-g_{00}}$. This derivation requires a timelike static Killing field and observers aligned with it; it is not a universal formula in a dynamical spacetime.

## Exercises

<a id="deep-dive-gravity-gauge-geometry-ex-1"></a>

### Exercise 1

1. Show $F\\to gFg^{-1}$ makes $\\tr(F_{\\mu\\nu}F^{\\mu\\nu})$ gauge invariant when the trace is cyclic.

<details>
<summary>Hint 1</summary>

Transform both curvature factors by conjugation, keeping their order.
</details>

<details>
<summary>Hint 2</summary>

Cancel adjacent inverse group elements and use cyclicity of trace on the remaining conjugate product.
</details>

<details>
<summary>Solution</summary>

The transformed product is $gFg^{-1}gFg^{-1}=gF^{2}g^{-1}$; cyclicity removes $g^{-1}g$ inside the trace.

</details>

<a id="deep-dive-gravity-gauge-geometry-ex-2"></a>

### Exercise 2

2. Explain why $\\Gamma=0$ at one point does not imply $R=0$ there.

<details>
<summary>Hint 1</summary>

Connection coefficients can be made zero at one point by a coordinate choice.
</details>

<details>
<summary>Hint 2</summary>

Curvature also contains derivatives of those coefficients, which a pointwise zero value does not erase.
</details>

<details>
<summary>Solution</summary>

Curvature includes derivatives of $\\Gamma$ as well as quadratic terms. Normal coordinates can remove the coefficient at a point but not generally its first derivatives in the curvature combination.

</details>

### Further exercises

3. Derive covariant conservation compatibility from the Bianchi identity and Einstein equation with constant $\\Lambda$.
4. Compare a small contractible electromagnetic loop with a loop enclosing nontrivial flux.

### Answers


3. Apply $\\nabla^\\mu$; metric compatibility and constant $\\Lambda$ make the left divergence zero, so the constant multiple of $\\nabla^\\mu T_{\\mu\\nu}$ is zero.
4. Locally Stokes expresses small-loop holonomy through $F$. On a nontrivial region, a loop may detect global holonomy even if $F$ vanishes along the path; a global potential or spanning surface inside the domain may not exist.

## Continue

Advance to global Lorentzian geometry, black-hole PDE, numerical relativity, characteristic classes, instantons, monopoles, Yang–Mills analysis, lattice gauge theory, or quantum gravity only with their separate analytic and physical hypotheses. Geometry unifies the notation; it does not erase the difference between a theorem about a connection and evidence about nature.
`;export{e as default};