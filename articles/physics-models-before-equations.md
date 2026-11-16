
# Physics Models Before Equations

Mathematical physics is not a bag of impressive formulas. It is a discipline for deciding what the state of a system is, how that state can change, what is conserved, how observations relate to the state, and where the model stops being trustworthy. The same habits connect a thrown ball, an electromagnetic wave, a deforming solid, a gas, curved spacetime, and a quantum field.

This first encounter assumes algebra, vectors as arrows, and willingness to track units. It does not derive the advanced theories. It builds a map to the [standard mathematical-physics course](#/courses/atlas-mathematical-physics-standard) and marks which bridges require calculus, probability, geometry, or functional analysis.

## 1. Start with a state and a clock

A **state** contains the information a model says is sufficient to predict future behavior, once inputs and laws are supplied. For a point particle in Newtonian mechanics, position alone is not enough: the same position with different velocity produces different motion. Position and momentum form a state.

For a warm metal bar, one number is not enough. Temperature varies with position, so the state is a **field** $T(x,t)$. For a fluid we may need density $\rho(x,t)$, velocity $v(x,t)$, and temperature. For a quantum system the state is a ray in a complex Hilbert space, not a hidden classical trajectory supplied by the basic theory.

The chosen state is an assumption. A rigid body ignores deformation. A continuum ignores molecular discreteness. A frictionless model ignores dissipation. Useful simplification is not the same as universal truth.

## 2. Units reject impossible stories

An equation can add only quantities with matching dimensions. If distance $x$ is measured in metres and time $t$ in seconds, velocity has units $m/s$ and acceleration $m/s^{2}$. Newton’s equation

$$F=ma$$

has force units $kg\cdot m/s^{2}$, called newtons.

Suppose a proposed oscillation period is $T=m/k$ for a mass $m$ attached to a spring constant $k$. Since $k$ has units $N/m=kg/s^{2}$, $m/k$ has units $s^{2}$, not seconds. The dimensionally possible scale is $\sqrt{m/k}$. Units cannot determine every dimensionless constant, but they can disprove the first formula immediately.

Dimensionless ratios often organize regimes. The Reynolds number compares inertial with viscous effects in a fluid. A small or large value can justify an approximation; the number alone does not specify boundary conditions or prove a flow is stable.

## 3. Worked model principle: change and conservation

**Worked example.**

Newtonian mechanics says momentum changes because of force. Conservation laws say some totals remain constant when the modeled system has no relevant exchange with its surroundings.

- Time-translation symmetry is linked to energy conservation.
- Space-translation symmetry is linked to momentum conservation.
- Rotational symmetry is linked to angular momentum conservation.

Noether’s theorem makes these links precise for differentiable action principles. “There is a symmetry” must mean the action is invariant up to the allowed boundary term; a pretty symmetric picture is not enough.

For a field spread through space, conservation has a local form:

$$rate of change inside a region + outward flux through its boundary = production inside$$

If there is no production, whatever leaves one region enters another. The differential equation appears only after assuming enough smoothness and applying a divergence theorem. Shocks and interfaces may require an integral or weak form instead.

## 4. Fields carry influence

An electric field assigns a vector $E(x,t)$ to each point and time. A magnetic field assigns $B(x,t)$. In SI units, a particle of charge $q$ and velocity $v$ experiences Lorentz force

$$F=q(E+v\times B)$$

Electric and magnetic fields obey Maxwell’s equations, which couple sources, curls, divergences, and time derivatives. In vacuum, those equations imply waves traveling at speed

$$c=1/\sqrt{\mu₀\varepsilon₀}$$

That conclusion needs a source-free region and the material-vacuum constitutive constants. In matter, polarization and magnetization require additional modeling.

Potentials are useful descriptions: $B=\nabla\times A$ and $E=-\nabla\phi-\partial A/\partial t$. Different potentials can produce the same fields. This **gauge freedom** is descriptive redundancy, not a claim that electric and magnetic fields are unreal.

## 5. Spacetime changes the invariant

Ordinary rotations preserve $x^{2}+y^{2}+z^{2}$. Special relativity combines time and space so inertial observers preserve, using one common sign convention,

$$s^{2}=-c^{2}t^{2}+x^{2}+y^{2}+z^{2}$$

Events with negative $s^{2}$ are timelike separated under this $(-,+,+,+)$ convention; light follows $s^{2}=0$. Other books use the opposite signature, so signs must be translated rather than mixed.

Time dilation and relativity of simultaneity follow from Lorentz transformations, not from clocks malfunctioning. Energy and momentum join a four-vector satisfying

$$E^{2}=(pc)^{2}+(mc^{2})^{2}$$

This flat-spacetime theory neglects gravity. General relativity replaces the fixed Minkowski metric with a dynamical Lorentzian metric whose curvature responds to stress-energy. It requires tensor calculus and differential geometry; a rubber-sheet picture does not derive Einstein’s equation.

## 6. Continua turn forces into tensors

Inside a solid or fluid, the force across an imagined small surface depends on the surface’s orientation. Cauchy’s stress theorem packages this dependence into a tensor $\sigma$ so the traction on a plane with unit normal $n$ is

$$t(n)=\sigma n$$

In a classical continuum without body couples, local angular-momentum balance makes $\sigma$ symmetric. That hypothesis matters; generalized continua can have nonsymmetric stresses.

Normal stress pulls or compresses a plane. Shear stress acts tangentially. Rotating the plane changes those components but not the tensor’s principal stresses. The [Stress Tensor & Mohr Circle Laboratory](../apps/atlas/index.html#/labs?lab=visual-lab-stress-tensor) makes that transformation exact and supplies a numerical route without the diagram.

A constitutive law says how a material responds. Balance laws are broadly universal; a Hookean solid and a Newtonian fluid differ because their constitutive assumptions differ. Every material law has a deformation-rate, temperature, pressure, and time-scale regime.

## 7. Fluids conserve mass and momentum

For density $\rho$ and velocity $v$, local mass conservation is

$$\partial\rho/\partial t + \nabla\cdot (\rho v)=0$$

For an incompressible constant-density fluid this becomes $\nabla\cdot v=0$. “Incompressible” is not automatically the same as “velocity is constant.” It constrains local volume change.

The incompressible Newtonian Navier–Stokes equation is

$$\rho(\partial v/\partial t+(v\cdot \nabla)v)=-\nabla p+\mu\Delta v+\rho b$$

It assumes a Newtonian constitutive relation, constant viscosity in this form, and enough smoothness for the displayed derivatives. A complete problem also needs a domain, initial velocity, boundary conditions, and compatibility such as divergence-free initial data. In three dimensions, global smoothness for arbitrary smooth finite-energy data remains an open mathematical problem; simulation is not a proof that singularities never occur.

## 8. Probability becomes thermodynamics

A gas has too many microscopic degrees of freedom to track one by one. Statistical mechanics assigns probabilities to microstates subject to macroscopic constraints. In a canonical ensemble at temperature $T$, a state of energy $E_{i}$ has probability

$p_{i}=e^{-E_{i}/(k_{B}T)}/Z$, where $Z=\sum_{i} e^{-E_{i}/(k_{B}T)}$.

The partition function normalizes probabilities and generates quantities such as mean energy. This model assumes thermal contact with a large reservoir. A microcanonical ensemble instead fixes energy in an isolated system; a grand canonical ensemble permits particle exchange. Ensemble equivalence often emerges for large short-range systems away from phase-transition subtleties, not for every finite or long-range system.

Statistical reasoning explains reliable macroscopic behavior without saying microscopic trajectories literally become random. The probability may express preparation, coarse-graining, typicality, or an ensemble of systems, depending on the interpretation.

## 9. Quantum theory changes states and measurements

In quantum mechanics, a normalized vector $\psi$ in a complex Hilbert space represents a pure state up to a global phase. A self-adjoint observable has a spectral measure; the Born rule turns that spectrum into probabilities. Time evolution obeys

$$iℏ d\psi/dt=H\psi$$

For a time-independent self-adjoint Hamiltonian, $e^{-iHt/ℏ}$ is unitary. In realistic systems, position, momentum, and Hamiltonians are often unbounded operators. Their domains are part of their definitions, and multiplying formal symbols without checking domains can be invalid.

The two-state model is valuable but not universal. A spin-half degree of freedom has a two-dimensional state space; a particle moving on a line uses an infinite-dimensional space such as $L^{2}(R)$ with additional domain data.

## 10. Gauge fields and quantum fields

Geometry describes gauge theory using a connection on a bundle. Its curvature is a field strength. In electromagnetism the group is $U(1)$ and the curvature is linear. Nonabelian gauge theories use groups whose algebra elements need not commute, so the curvature contains a quadratic connection term.

Quantum field theory combines quantum principles, relativity, locality, and fields. In perturbative practice, a Lagrangian and Feynman diagrams organize expansions of scattering amplitudes. Individual loop integrals may diverge and require regularization and renormalization. Successful finite predictions do not mean every interacting four-dimensional theory has a fully constructed nonperturbative mathematical definition.

Free fields can be built rigorously in standard frameworks. Constructive QFT has rigorous interacting models in lower dimensions, algebraic QFT axiomatizes local observables, and lattice gauge theory gives regulated finite systems and a route toward continuum questions. The [QFT orientation](qft-honest-orientation.md) distinguishes established calculations, axioms, and open construction problems.

## A reusable model audit

Before solving any physical equation, write:

1. **system and state:** what variables live where;
2. **clock and frame:** time parameter and observer convention;
3. **units:** dimensions of every variable and constant;
4. **balance laws:** what enters, leaves, accumulates, or is produced;
5. **constitutive assumptions:** material or closure law;
6. **domain and data:** geometry, initial conditions, and boundary conditions;
7. **observables:** what a measurement would mean;
8. **regime:** scale, velocity, field strength, temperature, or resolution limits;
9. **validation:** exact solution, conservation residual, experiment, or comparison;
10. **failure boundary:** what evidence would reject the model.

## Practice with answers

<a id="deep-dive-physics-models-before-equations-ex-1"></a>

**Exercise 1.**

**1. Units.** Dynamic viscosity $\mu$ has units $Pa\cdot s$ and density $\rho$ has units $kg/m^{3}$. Show $\mu/\rho$ has units of diffusivity.
<details>
<summary>Hint 1</summary>

Convert pascal-seconds into base mass, length and time units first.
</details>
<details>
<summary>Hint 2</summary>

Divide by density in kilograms per cubic metre and cancel units to identify the resulting dimension.
</details>
<details>
<summary>Solution</summary>

$Pa\cdot s=(kg/(m\cdot s^{2}))s=kg/(m\cdot s)$. Dividing by $kg/m^{3}$ gives $m^{2}/s$, the units of kinematic viscosity and diffusivity.

</details>

<a id="deep-dive-physics-models-before-equations-ex-2"></a>

**Exercise 2.**

**2. Spacetime.** With $c=3\times 10^{8} m/s$, two events differ by $1 \mu s$ and $100 m$. Is their separation timelike or spacelike under $(-,+,+,+)$?
<details>
<summary>Hint 1</summary>

Convert the time separation to a distance by multiplying by c.
</details>
<details>
<summary>Hint 2</summary>

Compare the square of spatial separation with the square of that light-travel distance using the stated sign convention.
</details>
<details>
<summary>Solution</summary>

$c\Delta t=300 m$, so $s^{2}=100^{2}-300^{2}=-80,000 m^{2}<0$: timelike.

</details>

### Further practice

**3. Stress.** Why is one scalar pressure insufficient for a general solid?

**Answer.** The traction can change with surface orientation and include tangential components. A second-order tensor maps each plane normal to its traction; isotropic pressure is only the special stress $\sigma=-pI$ under the common tension-positive convention.

**4. Ensemble.** Why does $p_{i}\propto e^{-\beta E_{i}}$ need a partition function?

**Answer.** Probabilities must sum to one. $Z=\sum_{i} e^{-\beta E_{i}}$ is the normalizing sum, provided it is finite. If it diverges, that canonical model is not defined without changing the state space or physics.

## Continue

Follow the [standard course](#/courses/atlas-mathematical-physics-standard) for derivations, [Fields and Continua](#/books/fields-fluids-continuum) for conservation and constitutive structure, [Quantum and Statistical Structures](#/books/quantum-statistical-structures) for operator and ensemble foundations, and the [model-audit recipe](recipe-conservation-field-computation.md) for computation. The unifying habit is not memorizing more equations; it is making every equation answerable to its state, units, data, and regime.
