var e=`---
id: course-mathematical-physics-standard
title: "Mathematical Physics: Motion, Fields, Matter, and Spacetime"
level: advanced-undergraduate
estimated_minutes: 1500
license: CC BY-SA 4.0
---

# Mathematical Physics: Motion, Fields, Matter, and Spacetime

<!-- euler-course-route -->

## Current course route

Use the [course page](/courses/atlas-mathematical-physics-standard/) for its present preparation and available study steps. This Outline keeps its original explanations and exercises while a complete primary-book syllabus is being assigned.

This standard course connects the major languages of physical modeling: variational mechanics, conservation laws, continua, fields, relativity, probability, Hilbert spaces, and gauge geometry. It assumes multivariable calculus, ordinary differential equations, linear algebra, vector calculus, and introductory probability. Later units require partial differential equations, tensors, and basic functional analysis.

Unless a unit says otherwise, electromagnetic formulas use SI units, continuum stress uses tension positive, and relativity uses metric signature $(-,+,+,+)$ with coordinates $x^{0}=ct$. Changing a convention is legitimate; mixing conventions inside one derivation is not.

## Entry diagnostic and 25-hour route

Before Unit 1:

1. Check that $mv^2/2$ has energy units.
2. Compute $\\nabla\\cdot(x,y,z)$ in Cartesian coordinates.
3. Find the eigenvalues of $\\operatorname{diag}(2,-1)$.
4. Normalize the complex vector $(1,i)$.

The answers are
$\\mathrm{kg}\\,\\mathrm{m}^2\\,\\mathrm{s}^{-2}$; 3; $2,-1$; and
$(1,i)/\\sqrt2$. Repair vector calculus, linear algebra, and complex inner
products before the field, relativity, and quantum stages.

| Stage | Units | Sustained reading | Evidence |
| --- | --- | --- | --- |
| 1. Mechanics and variation | 1–2 | [From a path to a number](#/item/book-action-symmetry-mechanics?chapter=from-a-path-to-a-number) and [constraints](#/item/book-action-symmetry-mechanics?chapter=constraints-and-lagrange-multipliers) | Dimensional ledger and oscillator action derivation |
| 2. Conservation and continua | 3–5 | [Transport theorem](#/item/book-fields-fluids-continuum?chapter=transport-theorem-and-reynolds-transport), [momentum balance](#/item/book-fields-fluids-continuum?chapter=cauchy-stress-and-momentum-balance), and [Newtonian fluids](#/item/book-fields-fluids-continuum?chapter=newtonian-fluids) | Integral/local balance and constitutive audit |
| 3. Fields and spacetime | 6–8 | [Electromagnetic balance](#/item/book-fields-fluids-continuum?chapter=electromagnetic-field-balance) plus the relativity deep dives linked in those units | Wave derivation and invariant-interval check |
| 4. Quantum and ensembles | 9–10 | [Observables](#/item/book-quantum-statistical-structures?chapter=observables-and-spectral-theorem), [unitary dynamics](#/item/book-quantum-statistical-structures?chapter=unitary-dynamics-and-generators), and [canonical ensembles](#/item/book-quantum-statistical-structures?chapter=canonical-ensembles) | Domain-aware operator calculation and partition-function audit |
| 5. Gauge and field boundaries | 11–12, problems, capstone | [Symmetry, gauge, and field-theory boundary](#/item/book-quantum-statistical-structures?chapter=symmetry-gauge-and-field-theory-boundary) | Validation project with three residuals |

## Unit 1 — State, law, data, and scale

A deterministic model has a state space, evolution law, inputs, and observations. An ordinary differential equation needs initial data; a second-order particle equation needs both position and velocity. A partial differential equation needs initial and boundary data appropriate to its differential order and type.

Dimensional analysis is the first audit. If a model contains length $L$, velocity $U$, density $\\rho$, and dynamic viscosity $\\mu$, the Reynolds number

$Re=\\rho UL/\\mu$

is dimensionless. It compares inertial and viscous terms after nondimensionalizing Navier–Stokes. $Re$ alone does not select a solution; geometry and data remain essential.

Distinguish three errors:

- **model error:** omitted mechanism or invalid regime;
- **data error:** uncertain parameters, forcing, or boundary values;
- **numerical error:** discretization, roundoff, or incomplete iteration.

A small solver residual addresses only part of the third category.

## Unit 2 — Newtonian and variational mechanics

For particles with positions $q$, kinetic energy $T(q,qdot,t)$, and potential $V(q,t)$, the Lagrangian is $L=T-V$. Stationary action under variations with fixed endpoints gives Euler–Lagrange equations

$d/dt(\\partial L/\\partial qdot_i)-\\partial L/\\partial q_i=0$.

For $L=m qdot^{2}/2-V(q)$, this becomes $m qddot=-V'(q)$. Stationary does not always mean minimum; the second variation decides local character.

If $L$ has no explicit time dependence, the energy

$E=\\sum _i qdot_i \\partial L/\\partial qdot_i-L$

is conserved along solutions. If a coordinate is cyclic, its conjugate momentum is conserved. These are elementary Noether consequences.

The Legendre transform defines $p_i=\\partial L/\\partial qdot_i$ and Hamiltonian $H=p\\cdot qdot-L$ when the velocity Hessian is invertible. Hamilton’s equations are $qdot=\\partial H/\\partial p$, $pdot=-\\partial H/\\partial q$. Singular Lagrangians require constraint theory rather than an illegal inverse.

**Worked oscillator.** For $L=m qdot^{2}/2-kq^{2}/2$, Euler–Lagrange gives $m qddot+kq=0$. Energy $m \\dot q^{2}/2+kq^{2}/2$ is constant. The natural time is $\\sqrt{m/k}$, matching dimensional analysis.

## Unit 3 — Local conservation and field equations

Let $u(x,t)$ be a density, $J(x,t)$ a flux, and $s(x,t)$ a source. For every fixed control volume $\\Omega$,

$d/dt \\int _\\Omega u dV = -\\int _{\\partial \\Omega } J\\cdot n dA + \\int _\\Omega s dV$.

Under sufficient regularity and a fixed domain, the divergence theorem yields

$\\partial _t u+\\nabla \\cdot J=s$.

If solutions have jumps, the integral balance remains primary. Across a moving discontinuity in one spatial dimension, conservation $u_t+f(u)_x=0$ gives the Rankine–Hugoniot speed

$s=(f(u_R)-f(u_L))/(u_R-u_L)$.

Conservation alone may admit multiple weak solutions; an entropy condition can select the physically relevant one. “Weak” means distributional, not inaccurate.

## Unit 4 — Continua, stress, and constitutive closure

In a Cauchy continuum, traction on a plane with unit normal $n$ is $t(n)=\\sigma n$. Linear momentum balance is

$\\rho Dv/Dt = \\nabla \\cdot \\sigma + \\rho b$,

where $b$ is body force per unit mass and $(\\nabla \\cdot \\sigma )_i=\\partial _j\\sigma _{ij}$. With no body couples in the classical theory, angular-momentum balance implies $\\sigma =\\sigma ^T$.

The deformation-rate tensor is $D=(\\nabla v+(\\nabla v)^T)/2$. A compressible isotropic Newtonian fluid uses

$\\sigma =-pI+2\\mu D+\\lambda (\\nabla \\cdot v)I$,

subject to constitutive restrictions on viscosities. An incompressible Newtonian fluid has $\\nabla \\cdot v=0$ and $\\sigma =-pI+2\\mu D$ for constant $\\mu$.

For small-strain linear elasticity, $\\varepsilon =(\\nabla u+(\\nabla u)^T)/2$. An isotropic law is $\\sigma =2\\mu \\varepsilon +\\lambda tr(\\varepsilon )I$, where these Lamé constants are not the fluid viscosities despite reused symbols. Positivity conditions ensure nonnegative elastic energy.

Use the [stress laboratory](#/item/visual-lab-stress-tensor) to rotate a symmetric plane stress and verify trace, determinant, and principal values.

## Unit 5 — Fluid mechanics and boundary data

Mass conservation is

$\\partial _t\\rho +\\nabla \\cdot (\\rho v)=0$.

For constant-density incompressible Newtonian flow with constant viscosity,

$\\nabla \\cdot v=0$,

$\\rho (\\partial _tv+(v\\cdot \\nabla )v)=-\\nabla p+\\mu \\Delta v+\\rho b$.

The pressure acts as a constraint multiplier enforcing incompressibility; it needs a gauge such as a reference value when only its gradient matters.

A complete initial-boundary value problem names a domain, initial divergence-free velocity, and boundary conditions. No-slip prescribes fluid velocity at a solid wall. Traction boundaries prescribe $\\sigma n$. Inflow data and outflow conditions must be compatible with mass conservation. Imposing both velocity and traction everywhere generally overdetermines the system.

Vorticity is $\\omega =\\nabla \\times v$. For an inviscid barotropic fluid under conservative body force, Kelvin’s circulation theorem holds for material loops under smoothness assumptions. Viscosity and boundary layers change the conclusion.

In three spatial dimensions, existence of global smooth solutions for arbitrary smooth incompressible Navier–Stokes data is not known. Numerical flows are conditional approximations, not a resolution of that theorem.

## Unit 6 — Maxwell equations and waves

In SI units the microscopic Maxwell equations are

$\\nabla \\cdot E=\\rho /\\varepsilon _{0}$,

$\\nabla \\cdot B=0$,

$\\nabla \\times E=-\\partial B/\\partial t$,

$\\nabla \\times B=\\mu _{0}J+\\mu _{0}\\varepsilon _{0}\\partial E/\\partial t$.

Taking divergence of Ampère–Maxwell and using Gauss gives charge continuity $\\partial _t\\rho +\\nabla \\cdot J=0$. Without the displacement-current term, time-dependent charge would contradict local conservation.

In a source-free vacuum, take the curl of Faraday’s law and use $\\nabla \\times (\\nabla \\times E)=\\nabla (\\nabla \\cdot E)-\\Delta E$. Since $\\rho =0$,

$\\Delta E-\\mu _{0}\\varepsilon _{0} \\partial ^{2}_tE=0$.

Thus waves travel at $c=1/\\sqrt{\\mu _{0}\\varepsilon _{0}}$. The same holds for $B$. Boundaries require electromagnetic interface conditions; material media require constitutive relations such as $D=\\varepsilon E$, possibly anisotropic, dispersive, or nonlinear.

Potentials satisfy $B=\\nabla \\times A$, $E=-\\nabla \\varphi -\\partial _tA$. Transformations $A\\to A+\\nabla χ$, $\\varphi \\to \\varphi -\\partial _tχ$ leave $E,B$ unchanged. A gauge condition selects a representative; it does not add a measurable field.

## Unit 7 — Special relativity and covariant fields

For an event four-vector $x^\\mu =(ct,x,y,z)$,

$ds^{2}=\\eta _{\\mu ν}dx^\\mu dx^ν=-c^{2}dt^{2}+dx^{2}+dy^{2}+dz^{2}$.

Lorentz transformations satisfy $Λ^T\\eta Λ=\\eta$. For speed $v$ along $x$, $\\beta =v/c$, $\\gamma =(1-\\beta ^{2})^{-1/2}$ and

$ct'=\\gamma (ct-\\beta x)$, $x'=\\gamma (x-\\beta ct)$.

The four-momentum is $p^\\mu =(E/c,p)$, with mass shell

$\\eta _{\\mu ν}p^\\mu p^ν=-m^{2}c^{2}$,

equivalent to $E^{2}=p^{2}c^{2}+m^{2}c^{4}$. For $m=0$, the relation is $E=pc$ for positive energy.

Electromagnetic $E$ and $B$ are frame-dependent components of an antisymmetric field tensor $F_{\\mu ν}$. Its two Lorentz invariants, up to convention-dependent constants and signs, correspond to $B^{2}-E^{2}/c^{2}$ and $E\\cdot B$. A field that is purely electric in one frame need not remain so, although invariant constraints limit what transformations can achieve.

## Unit 8 — General relativity

A spacetime is a four-dimensional Lorentzian manifold $(M,g)$. Freely falling test bodies follow timelike geodesics, while light follows null geodesics. In coordinates,

$d^{2}x^\\mu /d\\tau ^{2}+Γ^\\mu _{\\alpha \\beta }(dx^\\alpha /d\\tau )(dx^\\beta /d\\tau )=0$.

Christoffel symbols are not tensor components and can vanish at one point in suitable coordinates. Curvature cannot generally be transformed away over a finite region; the Riemann tensor measures geodesic deviation.

With the stated signature and a standard curvature convention, Einstein’s equation in SI units is

$G_{\\mu ν}+Λg_{\\mu ν}=(8\\pi G/c^{4})T_{\\mu ν}$.

Curvature-sign conventions can flip intermediate definitions, so a source must declare them. The contracted Bianchi identity gives $\\nabla ^\\mu G_{\\mu ν}=0$, requiring covariant stress-energy conservation $\\nabla ^\\mu T_{\\mu ν}=0$ for solutions.

Einstein’s equation is a constrained nonlinear PDE modulo coordinate freedom. Initial data on a spacelike hypersurface must satisfy Hamiltonian and momentum constraints; gauge choices control coordinates. A metric that satisfies a symmetry ansatz but not constraints is not valid initial data.

## Unit 9 — Quantum states and operators

A pure state is a ray represented by normalized $\\psi$ in a complex Hilbert space. An observable is represented by a self-adjoint operator $A$ with spectral measure $P_A$. Measurement probabilities obey

$\\Pr(A\\in S)=<\\psi ,P_A(S)\\psi >$.

For discrete nondegenerate eigenbasis $|a_n>$, this reduces to $|<a_n|\\psi >|^{2}$. Degeneracy uses the projection onto the eigenspace, not a preferred basis within it.

Time evolution under a time-independent self-adjoint Hamiltonian is

$\\psi (t)=e^{-iHt/ℏ}\\psi (0)$.

Stone’s theorem connects strongly continuous one-parameter unitary groups to self-adjoint generators. Symmetric is not automatically self-adjoint; boundary conditions can determine different self-adjoint extensions and spectra.

For position and momentum on $L^{2}(R)$, the formal commutator $[X,P]=iℏI$ is meaningful on a common invariant dense domain. It is not an identity of bounded operators on every Hilbert-space vector.

## Unit 10 — Statistical mechanics and ensembles

In the canonical ensemble,

$p_i=e^{-\\beta E_i}/Z(\\beta )$, $Z=\\sum _i e^{-\\beta E_i}$, $\\beta =1/(k_BT)$.

Provided differentiation and summation interchange legitimately,

$U=\\langle E\\rangle=-\\partial_\\beta\\ln Z$,

$\\operatorname{Var}(E)=\\partial ^{2}_\\beta \\ln Z\\ge 0$,

$F=-k_BT \\ln Z$.

For $N$ independent two-level systems with energies $0,\\varepsilon$, $Z_N=(1+e^{-\\beta \\varepsilon })^N$. Mean excited fraction is $1/(e^{\\beta \\varepsilon }+1)$ for this distinguishable noninteracting model.

The microcanonical ensemble fixes an energy shell; the canonical ensemble exchanges energy with a reservoir; the grand canonical ensemble also exchanges particles and uses chemical potential. Equivalence in a thermodynamic limit needs assumptions such as short-range interactions and suitable concavity. Finite systems and phase coexistence can display ensemble-dependent behavior.

Entropy $S=-k_B\\sum p_i \\ln p_i$ is Gibbs entropy for a discrete ensemble. Thermodynamic entropy, coarse-grained entropy, and information entropy are connected but not interchangeable without specifying the physical setting.

## Unit 11 — Gauge geometry

Electromagnetic potential is locally a $U(1)$ connection. Its curvature $F=dA$ is gauge invariant because $d(A+dχ)=dA$. On a nontrivial bundle, one may need potentials on patches connected by transition functions; a single global $A$ need not exist even though $F$ does.

For a nonabelian Lie group, a connection one-form has curvature

$F=dA+A\\land A$

up to coupling and sign conventions. Under gauge transformation $g$, $F$ transforms by conjugation, so components of $F$ are gauge covariant rather than individually invariant. Traces such as $\\operatorname{tr}(F\\land *F)$ produce gauge-invariant actions when an invariant inner product is chosen.

The Yang–Mills equation is schematically $D_A *F=*J$. Ordinary derivative becomes covariant derivative. Gauge fixing is required for many PDE and quantization procedures, while gauge-equivalent configurations represent the same physical state under the chosen theory and boundary conditions. Large gauge transformations and boundary symmetries can carry additional global information.

## Unit 12 — Quantum field theory boundary

A classical scalar field has Lagrangian density, for example in natural units and the chosen signature,

$L=-(1/2)\\partial _\\mu \\varphi \\partial ^\\mu \\varphi -(1/2)m^{2}\\varphi ^{2}-V_int(\\varphi )$.

The Euler–Lagrange equation is a nonlinear Klein–Gordon equation. Canonical quantization promotes mode amplitudes to operators for a free field; Fock space organizes particle-number sectors. Interactions make the construction substantially harder.

Perturbation theory expands correlation functions or scattering amplitudes in a coupling. Feynman diagrams index terms; they are not literal particle trajectories. Loop integrals require a regulator, and renormalization relates bare parameters to scale-dependent finite observables. An asymptotic perturbation series can be extraordinarily predictive without converging.

The standard model’s perturbative calculations are experimentally successful, but rigorous nonperturbative construction of general interacting four-dimensional gauge QFT remains incomplete. Lattice regularization, algebraic QFT, constructive lower-dimensional models, and effective field theory answer different mathematical questions. Continue to [Quantum Field Theory: An Honest Orientation](#/item/deep-dive-qft-honest-orientation) before interpreting formal path integrals as measures.

## Cumulative problems

1. Derive the oscillator equation and energy from its Lagrangian, including units.
2. Integrate the continuity equation over a fixed region and recover the flux balance.
3. From Maxwell’s equations derive charge conservation and the vacuum wave equation.
4. Verify a Lorentz boost preserves $-c^{2}t^{2}+x^{2}$.
5. Rotate a plane stress and check trace and determinant numerically and analytically.
6. For a given canonical partition function, compute mean energy and energy variance.
7. Explain why a gauge potential can change while a Wilson loop or field strength retains physical information.
8. List what must be added to a formal QFT Lagrangian before it defines a complete mathematical theory.

### Compact solutions

1. Variation gives $mqddot+kq=0$; multiplying by $\\dot q$ gives time derivative of $mqdot^{2}/2+kq^{2}/2$ equal zero. Both terms have joule units.
2. Integrate $\\partial _tu+\\nabla \\cdot J=s$, exchange time derivative and integral under regularity, and apply divergence theorem to obtain accumulation equals negative outward flux plus source.
3. Divergence of Ampère–Maxwell plus Gauss gives $\\mu _{0}\\nabla \\cdot J+\\mu _{0}\\partial _t\\rho =0$. Curl of Faraday, vacuum Gauss, and Ampère–Maxwell gives $\\Delta E-c^{-2}\\partial ^{2}_tE=0$.
4. Substitute $ct'=\\gamma (ct-\\beta x)$, $x'=\\gamma (x-\\beta ct)$; cross terms cancel and $\\gamma ^{2}(1-\\beta ^{2})=1$ leaves the original interval.
5. Use $\\sigma '=Q^T\\sigma Q$. Similarity by orthogonal $Q$ preserves characteristic polynomial, hence trace, determinant, and eigenvalues; the stress lab supplies an exact numerical check.
6. $U=-\\partial_\\beta\\ln Z$ and $\\operatorname{Var}(E)=\\partial^2_\\beta\\ln Z$, provided the derivatives may pass through the sum or trace.
7. Gauge change alters the representative connection. Curvature transforms covariantly and suitable traces or holonomies are invariant under the allowed gauge transformations, with boundary and basepoint qualifications.
8. Specify state/observable framework, regulator or construction, domains, renormalization conditions, symmetries, locality, positivity/unitarity, and an existence or approximation claim. A symbolic integral alone supplies none of those proofs.

### Feedback map

If Problems 1–2 fail, return to variational and integral balance laws and
track boundary terms. If Problems 3–4 fail, write the convention and invariant
before substituting components. If Problems 5–6 fail, distinguish basis
changes from changes of physical state or ensemble. If Problems 7–8 fail,
separate gauge-dependent representatives, invariant observables, formal
perturbation rules, and construction theorems.

## Capstone

Choose one physical system and present two mathematical formulations—for example particle and Hamiltonian, local and integral conservation, field and potential, Eulerian and Lagrangian continuum, or canonical and microcanonical ensemble. State units, sign conventions, domain, initial/boundary data, constitutive or closure assumptions, a conserved or balanced quantity, one exact limiting case, a numerical audit, and the first regime in which the model should be rejected.

## Four validation projects

These projects are deliberately small enough to finish and rich enough to expose a model’s full contract.

### Project A — Electromagnetic cavity mode

Choose a one-dimensional perfectly conducting cavity. Derive a standing-wave solution of the source-free Maxwell equations, state which tangential electric boundary condition quantizes its wavenumber, and compute electric plus magnetic energy over one period. Check SI units and verify zero net Poynting flux through conducting ends. Then change one boundary to an impedance condition and explain which conservation statement acquires a boundary power term.

### Project B — Elastic or fluid shear

Model either Couette fluid flow or simple shear of a linear-elastic block. Begin from momentum balance, choose the correct constitutive law, and solve with named boundary data. Both can produce a shear stress, but one depends on strain rate and dissipates power while the other depends on strain and stores recoverable energy. Use the stress laboratory to transform the resulting tensor and state why identical tensor components at one instant do not make the materials equivalent.

### Project C — Relativistic clock comparison

Construct two piecewise-inertial worldlines that reunite in flat spacetime. Integrate proper time $d\\tau =\\sqrt{1-v^{2}/c^{2}}dt$ along each, keeping acceleration intervals explicit or idealized as limits. Draw a spacetime diagram and verify invariant intervals algebraically. Do not attribute the result merely to “one traveler accelerating”: proper time is a path functional, while acceleration explains the asymmetry in frame changes.

### Project D — Quantum thermal qubit

For $H=(\\varepsilon /2)\\sigma _z$, compute its Gibbs density matrix, energy, variance, and entropy as functions of temperature. Verify positivity, trace one, the zero-temperature limit when the ground state is nondegenerate, and the infinite-temperature limit $I/2$. Then actively rotate the state by a unitary while holding the laboratory measurement fixed: eigenvalues and entropy remain, while outcome probabilities can change. A passive basis change transforms both state and measurement and preserves those probabilities. A rotated state is Gibbs for the conjugated Hamiltonian; it need not remain Gibbs for the original Hamiltonian. This separates state invariants from measurement context.

For every project, compare one analytic result with a dependency-free numerical calculation and report three residuals: governing equation, boundary or normalization condition, and conserved/balanced quantity. A result without those residuals is an illustration, not a validation.

<!-- euler-physics-core-assignment:start -->

### Assigned core portfolio, preparation, and boundaries

The selected continuation assigns the existing cumulative Problems 1–8, the source tasks below, and the bounded Project D portfolio \`MP-CORE-P001\`, changed task \`MP-CORE-P002\`, and later return \`MP-CORE-R001\`. Retain a first attempt, the public answers or other help used, and a revised explanation. These are public self-study tasks: an answer already seen is reconstruction, and a later date does not make it unseen assessment. The other three validation projects and the open choice capstone remain available as extensions; this assignment gives one complete reference rather than a reference for every possible physical system.

| Preparation or topic | Exact existing reading and assigned work | Public feedback and repair |
| --- | --- | --- |
| Mechanics, dimensions, and approximations | Complete the four entry questions above; read [From a path to a number](#/item/book-action-symmetry-mechanics?chapter=from-a-path-to-a-number), Exercises 1, 2, and 4. Derive the oscillator, explain a constant potential shift, and state the small-angle pendulum approximation. | Each exercise has its complete solution. Distinguish a force law, an energy-origin convention, and an approximation with a stated angle regime. |
| Fixed and moving balances | Read [Transport theorem and Reynolds transport](#/item/book-fields-fluids-continuum?chapter=transport-theorem-and-reynolds-transport), Exercises 2–3, and [Newtonian fluids](#/item/book-fields-fluids-continuum?chapter=newtonian-fluids), Exercises 1 and 3. Keep the fixed-volume continuity proof, expanding-sphere density, pressure-driven profile, and Couette power balance. | Complete solutions are in those chapters. Name smoothness, the domain of positive radius, constant viscosity/density where used, and whether the boundary moves. These are selected model calculations, not general weak-solution existence proofs. |
| Stress and electromagnetic fields | Read [Cauchy stress](#/item/book-fields-fluids-continuum?chapter=cauchy-stress-and-momentum-balance), worked plane stress and Exercise 1; [Electromagnetic field balance](#/item/book-fields-fluids-continuum?chapter=electromagnetic-field-balance), Exercises 1 and 3. | The source supplies traction/normal/shear calculations, principal stresses, Poynting flux, and the vacuum wave derivation. Compare units, signs, hypotheses and boundary power, rather than only final numbers. |
| Special relativity | Read [Spacetime invariants](#/item/deep-dive-spacetime-invariants) and attempt its five exercises before their worked solutions. Translate its $(+,-,-,-)$ interval convention to this course's $(-,+,+,+)$ convention explicitly. | Flipping the whole interval sign preserves causal classification after translating the inequalities. A changed convention is not a changed physical prediction. |
| Finite-dimensional quantum and thermal work | Use Questions 1–3 and 7–8 of the [quantum prerequisite diagnostic](#/item/book-quantum-statistical-structures?section=front%3Aprerequisite-diagnostic), then [observables](#/item/book-quantum-statistical-structures?chapter=observables-and-spectral-theorem), Exercise 1; [Bloch geometry](#/item/book-quantum-statistical-structures?chapter=two-state-systems-and-bloch-geometry), Exercise 1; and [canonical ensembles](#/item/book-quantum-statistical-structures?chapter=canonical-ensembles), the two-level example and Exercises 1 and 3. | All selected questions have complete answers. Repair complex inner products, adjoints, trace, finite probabilities and variance before the portfolio. The three-level exercise changes the finite state space; it does not describe three independent particles. |

Units 8, 11, and 12 are orientation to the specialist boundary in this selection. Read [Gravity and gauge fields through geometry](#/item/deep-dive-gravity-gauge-geometry) with its explicit smooth-manifold, differential-form, Lie-group/algebra and tensor-calculus preparation; its worked calculations and four answered exercises locate the geometric claims. Readers without that preparation should record the imported statements and missing prerequisites, rather than claim to have derived general relativity or Yang–Mills theory. Use [the quantum field theory orientation](#/item/deep-dive-qft-honest-orientation) with cumulative Problems 7–8 to distinguish formal notation from a constructed theory. The unbounded spectral theorem and Stone's theorem in Unit 9 are stated results, not proofs supplied by this finite-dimensional portfolio. Full PDE, quantum/relativity/gauge specialization and empirical laboratory validation remain outside this bounded core; no extra specialist course is silently required to compute its qubit.

Allow **1,800 authored planning minutes** for this selection: 900 for the original units and named readings, 300 for the named source exercises and eight cumulative problems, 180 for the primary portfolio, 150 for changed work, 90 for the later return and 180 for comparison/revision. This replaces the outline's 1,500-minute allocation for the selected work; it is not an additional charge for the same readings. Previous preparation repair, optional projects, breaks and the elapsed return interval are separate. This is a planning estimate, not observed workload or credit.

### MP-CORE-P001 — Thermal qubit, measurement, and work

Use one two-level system with fixed laboratory Hamiltonian $H=a\\sigma_z$, $a=\\varepsilon/2$, $\\varepsilon>0$ in joules. The temperature is positive, $\\beta=1/(k_BT)>0$, and the canonical equilibrium model assumes a suitable reservoir and weak coupling. Work first with arbitrary $\\beta\\varepsilon$, then use $\\beta\\varepsilon=\\ln3$. In the $\\sigma_z$ basis, $|0\\rangle$ has energy $+a$ and $|1\\rangle$ has energy $-a$.

1. Derive $Z$, $\\rho$, mean energy, variance, entropy, positivity, trace and both temperature limits. Check the units of $\\beta\\varepsilon$, energy, variance and entropy.
2. Isolate the system from the reservoir and idealize an external cyclic drive by the active unitary $V_\\theta=\\exp(-i\\theta\\sigma_y/2)$, with laboratory $H$ the same before and after. Set $\\theta=\\pi/2$. Calculate $\\rho'=V_\\theta\\rho V_\\theta^\\dagger$ and probabilities for the fixed laboratory projectors $P_{z+}=(I+\\sigma_z)/2$ and $P_{x+}=(I+\\sigma_x)/2$.
3. Calculate the work supplied to the system, $W=\\operatorname{Tr}(H\\rho')-\\operatorname{Tr}(H\\rho)$; heat is zero during this idealized isolated drive. Explain which invariants survive and why $\\rho'$ need not be canonical equilibrium for the original $H$.
4. Contrast that active operation with a passive basis change of both state and measurement. Supply an analytic and a dependency-free numerical audit with the three residuals below, and one reason the finite model could fail physically.

#### MP-CORE-P001 — Complete model and general rotation key

Put $x=\\beta a$ and $t=\\tanh x$. The two Boltzmann weights are $e^{-x}$ and $e^x$, so

$$
Z=2\\cosh x,\\qquad
\\rho=\\frac{I-t\\sigma_z}{2}
=\\operatorname{diag}\\left(\\frac{1-t}{2},\\frac{1+t}{2}\\right).
$$

Since $0<t<1$, both eigenvalues are positive and sum to one. Directly averaging the energies gives $\\langle H\\rangle=-at$. Since $H^2=a^2I$, the variance and entropy are

$$
\\operatorname{Var}(H)=a^2(1-t^2),\\qquad
S=k_B\\left[\\ln(2\\cosh x)-x\\tanh x\\right].
$$

The entropy formula follows from $\\ln\\rho=-\\beta H-(\\ln Z)I$ and trace one. The derivative identities $-\\partial_\\beta\\ln Z=-at$ and $\\partial_\\beta^2\\ln Z=a^2(1-t^2)$ give the same answer; only finite sums occur. As $T\\downarrow0$, $t\\to1$ and $\\rho\\to|1\\rangle\\langle1|$, energy $\\to-a$, variance $\\to0$, entropy $\\to0$. As $T\\to\\infty$, $t\\to0$ and $\\rho\\to I/2$, energy $\\to0$, variance $\\to a^2$, entropy $\\to k_B\\ln2$. Entropy's low-temperature formula is interpreted by its limit, avoiding subtraction of infinite terms. Here $\\beta$ has inverse-joule units; variance has squared-joule units and entropy has joules per kelvin.

Writing $c=\\cos(\\theta/2)$ and $s=\\sin(\\theta/2)$ gives $V_\\theta=\\begin{pmatrix}c&-s\\\\s&c\\end{pmatrix}$, and direct multiplication gives

$$
V_\\theta\\sigma_zV_\\theta^\\dagger=\\cos\\theta\\,\\sigma_z+\\sin\\theta\\,\\sigma_x,\\qquad
\\rho'=\\frac{I-t(\\cos\\theta\\,\\sigma_z+\\sin\\theta\\,\\sigma_x)}2.
$$

Thus $p'(z+)=(1-t\\cos\\theta)/2$, $p'(x+)=(1-t\\sin\\theta)/2$, and

$$
\\langle H\\rangle'=-at\\cos\\theta,\\qquad W=at(1-\\cos\\theta).
$$

Unitary conjugation preserves the eigenvalues, trace, positivity, purity and entropy. It does not conserve the expectation of a fixed noncommuting Hamiltonian during an externally driven operation. The new state is Gibbs for $H'=V_\\theta HV_\\theta^\\dagger$, because conjugation commutes with the finite matrix exponential. It is generally not Gibbs for the original $H$. Its variance for the fixed laboratory $H$ is $a^2(1-t^2\\cos^2\\theta)$; the original $a^2(1-t^2)$ remains the variance for the co-rotated $H'$.

At $\\beta\\varepsilon=\\ln3$, $t=1/2$. Before rotation, $\\rho=\\operatorname{diag}(1/4,3/4)$, $\\langle H\\rangle=-\\varepsilon/4$, $\\operatorname{Var}(H)=3\\varepsilon^2/16$, and $S/k_B=\\ln4-(3/4)\\ln3$. At $\\theta=\\pi/2$,

$$
\\rho'=\\begin{pmatrix}1/2&-1/4\\\\-1/4&1/2\\end{pmatrix},\\quad
p'(z+)=1/2,\\quad p'(x+)=1/4,\\quad W=\\varepsilon/4.
$$

In a passive change $\\rho\\mapsto V\\rho V^\\dagger$, $P\\mapsto VPV^\\dagger$, cyclicity of trace gives $\\operatorname{Tr}(V\\rho V^\\dagger VPV^\\dagger)=\\operatorname{Tr}(\\rho P)$. Holding $P$ fixed instead describes the active experiment. One cannot use unchanged entropy to infer unchanged laboratory measurement probabilities, energy, or thermal equilibrium. Reservoir coupling, extra accessible energy levels, a drive with heat exchange or experimental imperfections can invalidate the chosen physical model; this finite calculation supplies no empirical validation.

### MP-CORE-P002 — Changed drive and two fixed measurements

Keep the same laboratory $H$ and positive-temperature model, but use $\\beta\\varepsilon=\\ln2$ and an active angle $\\theta=\\pi/3$. Before looking at the following key, derive the full new density matrix, both fixed-measurement probabilities, work, and the variance for the original $H$ after the drive. Decide whether a passive coordinate change could produce these probability changes. State why reusing the primary's diagonal populations or its $\\pi/2$ energy would fail.

#### MP-CORE-P002 — Complete changed model

Now $t=1/3$, so $\\rho=\\operatorname{diag}(1/3,2/3)$ and $\\langle H\\rangle=-\\varepsilon/6$. The initial variance is $2\\varepsilon^2/9$, and $S/k_B=\\ln3-(2/3)\\ln2$. Using $\\cos\\theta=1/2$ and $\\sin\\theta=\\sqrt3/2$ gives

$$
\\rho'=\\begin{pmatrix}5/12&-\\sqrt3/12\\\\-\\sqrt3/12&7/12\\end{pmatrix},\\quad
p'(z+)=5/12,\\quad p'(x+)=1/2-\\sqrt3/12.
$$

Its eigenvalues remain $1/3,2/3$: trace is one and determinant is $2/9$. The fixed-$H$ mean is $-\\varepsilon/12$, supplied work is $\\varepsilon/12$, and its variance is $\\varepsilon^2/4-\\varepsilon^2/144=35\\varepsilon^2/144$. The original Gibbs variance $2\\varepsilon^2/9$ belongs to the original equilibrium or to the rotated state measured with $H'$, not to the rotated state measured with fixed $H$. A passive change of both state and projectors preserves probabilities; it cannot explain a change for the same physical laboratory measurement.

### MP-CORE-R001 — Later audit of an inverted thermal claim

On a later occasion, keep the actual date and previous help exposure visible. Without first reopening the keys, audit this report: “For $H=(\\varepsilon/2)\\sigma_z$, $\\varepsilon>0$ and $\\beta\\varepsilon=\\ln3$, the positive-temperature Gibbs state is $\\operatorname{diag}(3/4,1/4)$. It is positive, has trace one and commutes with $H$, so the claim is proved.” Identify the first unsupported inference, repair the claim, and decide whether an isolated active flip can produce the reported state from the correct Gibbs state. Calculate its work and the fixed-$H$ energy variance. Then compare with the public model. No prescribed elapsed delay or retained competence is inferred from this activity.

#### MP-CORE-R001 — Complete return feedback

Positivity, normalization and commutation are necessary here but do not determine Gibbs weights. At the stated positive temperature the high/low population ratio must be $e^{-\\beta\\varepsilon}=1/3$; the report has ratio 3. The correct equilibrium is $\\operatorname{diag}(1/4,3/4)$, with energy $-\\varepsilon/4$. The report's state is a valid nonequilibrium density matrix for this positive-temperature model, with energy $+\\varepsilon/4$; it is not its claimed Gibbs state. It can be obtained by $V_\\pi$, which swaps the populations and supplies $W=\\varepsilon/2$ with no heat in the stipulated isolated drive. Eigenvalues, entropy and fixed-$H$ variance $3\\varepsilon^2/16$ survive this particular flip. That variance agreement does not repair the false equilibrium claim. The maximum absolute Gibbs-entry discrepancy for the report is $1/2$, even though trace and commutator residuals vanish. Return to Boltzmann weights rather than treating a commuting matrix as a unique thermal state.

### Numerical audit and descriptive feedback for the three tasks

Use $\\varepsilon=1$ as the numerical energy unit. This program uses only standard JavaScript arithmetic and the explicit real rotation matrix, and may be run in an existing browser console or Node. Change \`b\` and \`theta\` to the changed or return inputs. In the return case compare the reported matrix with the computed Gibbs state as well as evaluating the active flip. A successful finite calculation checks these specified inputs; it does not prove general operator theorems, authenticate an independent attempt, or establish a physical model.

\`\`\`js
const epsilon = 1, b = Math.log(3), theta = Math.PI / 2;
const a = epsilon / 2, beta = b / epsilon, x = beta * a;
const w = [Math.exp(-x), Math.exp(x)], Z = w[0] + w[1];
const p = w.map(value => value / Z), t = Math.tanh(x);
const c = Math.cos(theta / 2), s = Math.sin(theta / 2);
const V = [[c, -s], [s, c]], rho = [[p[0], 0], [0, p[1]]];
const transpose = A => A[0].map((_, j) => A.map(row => row[j]));
const multiply = (A, B) => A.map(row => B[0].map((_, j) =>
  row.reduce((sum, value, k) => sum + value * B[k][j], 0)));
const rotated = multiply(multiply(V, rho), transpose(V));
const mean = a * (p[0] - p[1]);
const after = a * (rotated[0][0] - rotated[1][1]);
const reference = [[(1-t*Math.cos(theta))/2, -t*Math.sin(theta)/2],
  [-t*Math.sin(theta)/2, (1+t*Math.cos(theta))/2]];
const residuals = {
  gibbsEquation: Math.max(...rotated.flatMap((row, i) =>
    row.map((value, j) => Math.abs(value - reference[i][j])))),
  normalization: Math.abs(rotated[0][0] + rotated[1][1] - 1),
  workBalance: Math.abs((after - mean) - a*t*(1-Math.cos(theta)))
};
console.log({Z, rho, rotated, mean, after, work: after-mean,
  fixedHVariance: a*a-after*after, residuals});
\`\`\`

The governing residual compares the rotated state with the canonical expression for **co-rotated** $H'=a(\\cos\\theta\\,\\sigma_z+\\sin\\theta\\,\\sigma_x)$. Check its eigenvalues are nonnegative separately; trace alone is insufficient. The normalization residual supplies the boundary/normalization check, and work balance checks the conserved/balanced ledger with zero heat during the drive. Finite roundoff can produce small nonzero residuals; record their actual values, the input and the precision. The return report must be checked against original $H$, whose Gibbs-entry discrepancy is $1/2$; substituting a different Hamiltonian would answer another question.

| Task | beta epsilon | Active angle | Initial p(z+) | Final p(z+) | Final p(x+) | Work / epsilon |
| --- | --- | --- | --- | --- | --- | --- |
| MP-CORE-P001 | ln(3) | pi/2 | 1/4 | 1/2 | 1/4 | 1/4 |
| MP-CORE-P002 | ln(2) | pi/3 | 1/3 | 5/12 | 1/2-sqrt(3)/12 | 1/12 |
| MP-CORE-R001 | ln(3) | pi | 1/4 | 3/4 | 1/2 | 1/2 |

Use these descriptive criteria for each retained attempt; they are not automatic marks or evidence of mastery.

| Criterion | A complete explanation contains | Repair if missing |
| --- | --- | --- |
| Model and preparation | State space, energy labels, positive temperature, units, reservoir equilibrium followed by an isolated driven operation, and named imported theorems. | Rebuild the two Boltzmann weights; do not infer a physical law from a residual. |
| Mathematical derivation | Trace/positivity, the finite weighted mean and variance, entropy, temperature limits, and the matrix multiplication for the actual angle. | Use the canonical and Bloch examples above; distinguish the variance of fixed $H$ from that of $H'$. |
| Formulations and observation | Gibbs/operator and probability/Bloch descriptions agree; active state rotation is separated from passive representation change with a fixed laboratory projector named. | Compute $\\operatorname{Tr}(\\rho P)$ before deciding what changed. |
| Balance and computation | An explicit drive/heat/work ledger, three reported residuals, input/precision, and analytic comparison; zero trace error alone does not certify equilibrium. | Compare original and co-rotated Hamiltonians and test the return's wrong Gibbs ratio. |
| Limits and revision | A physical rejection condition, the first unsupported step in an earlier attempt, and a corrected explanation preserving earlier help exposure. | Record a changed assumption and its mathematical consequence; no learner outcome follows from this public model. |

<!-- euler-physics-core-assignment:end -->
`;export{e as default};