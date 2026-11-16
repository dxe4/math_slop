
# PDE Classification, Boundary Data, and Weak Forms

## Learning purpose

This chapter classifies the partial differential equations encountered in continuum mechanics, explains what boundary and initial data are required for well-posedness, and introduces weak formulations as the foundation of finite element methods.

## Classification of second-order PDEs

A general linear second-order PDE in two variables has the form

$$A \frac{\partial^{2} u}{\partial x^{2}} + 2B \frac{\partial^{2} u}{\partial x \partial y} + C \frac{\partial^{2} u}{\partial y^{2}} + \text{lower-order terms} = 0.$$

The equation is classified by the discriminant $B^{2} - AC$:

- **Elliptic** ($B^{2} - AC < 0$): Laplace's equation $\Delta u = 0$, static elasticity. Requires boundary conditions on a closed surface; no time evolution.
- **Parabolic** ($B^{2} - AC = 0$): Heat equation $u_{t} - \kappa \Delta u = f$. Requires initial data and spatial boundary conditions; infinite propagation speed.
- **Hyperbolic** ($B^{2} - AC > 0$): Wave equation $u_{tt} - c^{2} \Delta u = 0$, dynamic elasticity. Requires initial displacement and velocity plus boundary conditions; finite propagation speed.

The classification extends to systems via the eigenvalues of the principal symbol.

## Well-posedness and required data

A problem is well-posed in the sense of Hadamard if:

1. A solution exists.
2. The solution is unique.
3. The solution depends continuously on the data.

**Wave equation:** Needs initial displacement $u(x, 0)$ and initial velocity $\partial_{t} u(x, 0)$, plus boundary conditions or radiation conditions at infinity.

**Heat equation:** Needs initial temperature $u(x, 0)$ and spatial boundary conditions (Dirichlet, Neumann, or Robin). No independent initial time derivative is required.

**Elliptic static elasticity:** Needs boundary conditions and compatibility conditions. Pure traction boundary conditions require force and moment equilibrium and a normalisation to remove rigid-body modes.

**Common error.** Prescribing initial velocity for a heat equation or initial acceleration for a wave equation. The PDE type determines how many time derivatives need initial data.

## Weak formulation

Consider the heat equation $u_{t} - \kappa \Delta u = f$ in $\Omega$ with $u = 0$ on $\partial \Omega$. Multiply by a test function $w$ vanishing on $\partial \Omega$ and integrate:

$$\int_{\Omega} w \, \partial_{t} u \, \mathrm{d}v + \kappa \int_{\Omega} \nabla w \cdot \nabla u \, \mathrm{d}v = \int_{\Omega} w f \, \mathrm{d}v.$$

Integration by parts moves one derivative from $u$ to $w$, lowering the differentiability requirement on $u$. The boundary term vanishes because $w = 0$ on $\partial \Omega$.

For a Neumann boundary condition $\partial_{n} u = g$, the boundary term becomes $\kappa \int_{\partial \Omega} w g \, \mathrm{d}a$, which is naturally incorporated into the weak form.

**Trial and test spaces.** The trial space contains candidate solutions $u$ satisfying essential (Dirichlet) boundary conditions. The test space contains functions $w$ satisfying homogeneous essential conditions. A finite-element matrix without its function spaces and boundary treatment is incomplete mathematics.

For the examples in this book, $H^1(\Omega)$ means the functions whose values and first weak derivatives are square-integrable, and $H_0^1(\Omega)$ is the subspace with zero boundary trace. A weak derivative is defined by integration against smooth compactly supported test functions, so the weak formulation remains meaningful even when classical second derivatives do not exist. No functional-analysis theorem is proved here; these definitions are the working entry point.

## Finite volume methods

Conservation laws often use finite-volume schemes because flux leaving one cell enters its neighbor exactly at the discrete level. For a scalar conservation law $\partial_{t} u + \nabla \cdot F(u) = 0$, the cell average $\bar{u}_{i}$ evolves according to

$$\frac{\mathrm{d}\bar{u}_{i}}{\mathrm{d}t} = -\frac{1}{|V_{i}|} \sum_{j \in \mathcal{N}(i)} F_{ij} \cdot n_{ij} A_{ij},$$

where $F_{ij}$ is the numerical flux across face $(i, j)$. Stability, consistency, and convergence remain separate questions. For nonlinear shocks, numerical viscosity and entropy stability matter.

## A principal symbol does not specify a boundary-value problem

The scalar two-variable discriminant classifies the quadratic principal part at a point. Under a nonsingular coordinate change its matrix transforms by a congruence, preserving its numbers of positive, negative and zero directions. Elliptic means definite principal part, while a hyperbolic signature singles out a possible evolution direction. A zero discriminant indicates degeneracy of that quadratic part; recognising a parabolic evolution additionally uses its distinguished first-order time derivative and positive spatial diffusion.

Thus the classification examples in the opening are representative model problems, not a universal rule that every degenerate quadratic expression is a well-posed heat equation. Lower-order time terms, coefficient regularity, domain geometry and the chosen data surface still matter. For a system one must inspect its matrix principal symbol and any constraints, rather than classify every component independently and assume their combination has the same theorem.

An initial surface is characteristic when the principal symbol vanishes on its normal covector. Prescribing a usual full set of evolution data there can fail to determine a solution even when another coordinate direction makes the equation hyperbolic. This is the issue in the mixed-derivative source exercise: the equation has a hyperbolic signature after a linear coordinate change, but its original constant-time surface is characteristic.

### Example 18.1: a hyperbolic equation with the wrong time surface

For $u_{tx}+u_{yy}=0$, the quadratic symbol in variables time, x and y is the product of the first two covector components plus the third squared. It vanishes on the normal to a constant-time surface. Changing to the sum and difference of time and x reveals one negative and two positive directions, as the original solution computes.

The correct conclusion is hyperbolicity relative to a suitable noncharacteristic direction, not permission to treat x as a parameter or impose two arbitrary time derivatives on the original characteristic surface. Classification and data orientation must be read together. This distinction also appears in characteristic inflow boundaries for transport, where only incoming information is prescribed.

## Continuous dependence names its norm and time direction

Hadamard's third condition requires a specified topology on data and solutions. The forward heat equation contracts its square-integrable modes under homogeneous energy-dissipating boundaries. Reversing time leaves the same spatial second derivatives but destroys that stable initial-value interpretation.

### Example 18.2: backward heat loses square-integrable stability

On an interval with zero endpoint values, the backward equation $u_t=-u_{xx}$ multiplies the nth sine coefficient by $e^{n^2t}$. Choose initial amplitude $e^{-n^2T/2}$ for a fixed positive T. Its initial square-integrable norm tends to zero, whereas its norm at time T grows like $e^{n^2T/2}$.

Therefore there is no continuous solution operator from arbitrary square-integrable initial data to the same norm at that positive time. Each individual sine example is smooth and has a formal solution; existence for a special datum does not establish well-posedness for a whole data space. An inverse heat problem needs additional data restrictions or regularisation, which define a different mathematical problem.

Similarly, an elliptic Cauchy problem can be unstable even with smooth local coefficients. Modes proportional to $e^{-n}\sin(nx)\sinh(ny)$ are harmonic. At y zero their value is zero and their normal derivative tends to zero in every fixed finite-order Sobolev norm, while at y two their amplitude diverges. Boundary conditions around a domain and Cauchy data on one edge are different elliptic problems.

## Trial spaces encode essential data; tests encode allowed variations

For a Dirichlet problem, the trial space is an affine set with the prescribed trace, and the test space is its zero-trace linear direction space. Integration by parts removes a boundary term because the test trace is zero, not because the solution's normal derivative is zero. Neumann data instead appear as a boundary functional in the weak equation.

The closure definition of $H_0^1$ is primary on an arbitrary open domain. On a Lipschitz domain the trace theorem identifies it with zero-trace first-Sobolev functions. The original working description assumes that regularity; it is not a universal pointwise boundary definition. [Sobolev spaces](../pde-weak-theory-waves-patterns/sobolev-spaces.md) proves the interval representative and explains the higher-dimensional qualifications.

A weak solution is an exact solution in its declared function-space sense, not necessarily an approximate classical solution. Approximation begins when that function space is replaced by a finite-dimensional subspace or an equation is solved inexactly. The distinctions between weak existence, regularity and discretisation are developed separately in the [elliptic](../pde-weak-theory-waves-patterns/elliptic-parabolic-weak-theory.md) and [regularity](../pde-weak-theory-waves-patterns/regularity.md) chapters.

### Example 18.3: a point load creates a legitimate corner

For a unit interval with zero endpoints, the steady one-dimensional diffusion problem $-ku''=F\delta_a$ has a continuous piecewise-affine solution: F divided by k times the triangular Green profile with slopes one minus a and minus a. Its derivative jump is minus F divided by k, giving the correct point source distributionally.

The solution has finite first-derivative energy but no square-integrable second derivative. Point evaluation is a bounded functional on this one-dimensional zero-boundary energy space, so coercive weak existence applies. The same point source is not an energy-dual load in dimensions at least two, as the Sobolev chapter's shrinking/logarithmic tests show. A discrete point-load vector can exist in every finite-dimensional mesh without proving the same continuous energy contract.

## The time-dependent weak equation also needs a trace

For zero-Dirichlet heat flow use the triple of zero-boundary first-Sobolev space V, square-integrable state space H and dual space $V'$. The solution belongs to $L^2(0,T;V)$ and its time derivative to $L^2(0,T;V')$. The evolution equation is then a dual pairing with every V test for almost every time; its time derivative need not be an ordinary H function.

The [parabolic chapter](../pde-weak-theory-waves-patterns/parabolic-equations.md) proves that this energy-space combination has a continuous H representative. That is what gives the initial condition meaning at a selected time. Merely writing an integrable spacetime field does not define its endpoint value. The original separated sine solution is one smooth case within this wider contract.

Testing by the solution is justified by that time lemma. It yields half the derivative of its squared H norm plus diffusion energy equal to the load pairing. Coercivity, Young's inequality and Poincaré then give uniqueness, continuous dependence and unforced decay under the appropriate boundary assumptions. The analytic existence theorem additionally constructs a limit of Galerkin approximations; an energy estimate alone does not construct the missing solution.

For waves, the displacement and velocity occupy distinct energy spaces and two initial data are required. The [hyperbolic chapter](../pde-weak-theory-waves-patterns/hyperbolic-conservation-laws.md) proves a spectral finite-energy construction and finite propagation. Copying the heat time-space requirement into that second-order problem would lose its velocity state and change its meaning.

## Physical boundary flux determines the weak sign

For heat conduction, outward physical heat flux is minus conductivity times normal temperature derivative. If the prescribed datum is that physical flux, its contribution to the heat weak load is minus its integral against the test. If the datum is instead the normal derivative g, the contribution is conductivity times g against the test, as in the opening formula. These conventions describe the same integration by parts with differently named input data.

A Robin cooling boundary sets outward heat flux equal to a nonnegative transfer coefficient times temperature minus ambient temperature. Moving the solution part to the left adds a nonnegative boundary quadratic term, while the ambient part remains a load. It can remove a stationary Neumann constant kernel when present on a sufficient boundary portion. A negative transfer coefficient would instead model an active or destabilizing boundary and lacks that same coercivity interpretation.

For elasticity the natural datum is traction, whose work pairs with displacement tests. Pure traction loads must annihilate rigid modes, as the elasticity chapter proved. For fluid flow, a velocity boundary and a traction/open boundary have different pressure and energy implications. A word such as Neumann does not replace identifying the actual physical flux, normal and units in each system.

## Stokes is a constrained saddle problem

Use vector trial velocity in the prescribed-trace first-Sobolev space and zero-trace tests, with pressure in the zero-mean square-integrable space for the fully anchored velocity problem. The weak momentum form contains viscosity times gradient contraction minus pressure times test divergence. The scalar constraint pairs trial divergence with every pressure test.

Restricting velocity tests and unknowns to the divergence-free subspace gives the coercive velocity problem proved in the Newtonian chapter. Recovering pressure uses an inf-sup condition: the supremum of divergence pairing over unit-gradient velocity tests must bound each zero-mean pressure norm below by a fixed positive constant. On suitable bounded Lipschitz domains this is a standard pressure-recovery theorem input, not a consequence of scalar coercivity alone.

A finite-dimensional velocity/pressure pair needs its own uniform version of that condition, or a justified stabilisation. Choosing two arbitrary familiar polynomial spaces does not automatically satisfy it. A computed pressure oscillation can reflect an unstable discrete pair rather than an oscillatory physical pressure, while a pressure constant can reflect an unfixed gauge. The distinct mechanisms require distinct remedies.

## Conservation and approximation have different algebra

For a finite-volume method, orient and store a single numerical flux on each shared face. Insert it with opposite signs in its two adjacent cells. Summing balances then cancels every interior contribution exactly in symbolic arithmetic, leaving physical boundary flux. This conservation property does not require a small mesh size.

Consistency is a different assertion that the numerical flux approaches the intended physical flux on compatible smooth data. A translation-invariant zero numerical flux preserves constant grid states and conserves totals, but approximates the wrong nonconstant transport equation. Stability and compactness are then needed to identify a limiting solution, and nonlinear shocks also need an entropy property. The [numerical primary](../numerical-mathematics-error-algorithms/finite-volume-element-methods.md) owns that approximation analysis.

For conforming finite elements, coercivity and Galerkin orthogonality yield quasi-optimality in an energy norm. Turning it into a mesh power requires regularity and an approximation theorem. A tiny linear-system residual only controls the algebraic error after converting its norm; it does not establish those continuous ingredients. Thus the choice of equation, data, solution space, boundary convention and approximation contract forms one connected statement, with each theorem assigned its actual role.

## Summary and connections

This chapter classified PDEs as elliptic, parabolic, or hyperbolic; stated the data required for well-posedness; and introduced weak forms and finite-volume methods.

In the previous chapter, *Coupled Field–Continuum Models*, we saw that coupled systems inherit the PDE types of their components. The continuum capstone combines these contracts in complete model derivations.

## Exercises

### Exercise 1
Classify the following PDEs: (a) $u_{xx} + u_{yy} = 0$, (b) $u_{t} = u_{xx}$, (c) $u_{tt} = u_{xx} + u_{yy}$, (d) $u_{tx} + u_{yy} = 0$.

<details><summary>Hint 1</summary>

Use the principal matrix in all differentiated variables.

</details>

<details><summary>Hint 2</summary>

A mixed time-space derivative cannot be ignored by treating its space variable as a parameter.

</details>

<details><summary>Full solution</summary>

**Solution.** (a) The spatial principal matrix is $\operatorname{diag}(1,1)$, so the equation is elliptic. (b) The equation is first order in $t$ and second order in $x$, hence parabolic. (c) In variables $(t,x,y)$ the principal matrix is $\operatorname{diag}(-1,1,1)$, so it has one sign opposite the other two and the equation is hyperbolic relative to $t$. (d) In variables $(t,x,y)$ the principal matrix is

$$\begin{pmatrix}0&1/2&0\\1/2&0&0\\0&0&1\end{pmatrix},$$

with eigenvalues $1/2,-1/2,1$. Equivalently, for $a=(t+x)/\sqrt2$ and $b=(t-x)/\sqrt2$, the principal part becomes $(u_{aa}-u_{bb})/2+u_{yy}$. Thus it is hyperbolic relative to the $b$ direction; treating $x$ as a parameter would be invalid because $u_{tx}$ differentiates in $x$.

</details>

### Exercise 2
Derive the weak form for the steady Stokes equations with velocity boundary conditions.

<details><summary>Hint 1</summary>

Integrate the velocity Laplacian and pressure gradient against zero-trace vector tests.

</details>

<details><summary>Hint 2</summary>

Keep a separate scalar divergence constraint and pressure normalisation.

</details>

<details><summary>Full solution</summary>

**Solution.** The Stokes equations are $-\mu \Delta v + \nabla p = \rho b$, $\nabla \cdot v = 0$. Multiply the momentum equation by a test function $w$ with $w = 0$ on $\partial \Omega$ and integrate by parts:

$$\mu \int_{\Omega} \nabla w : \nabla v \, \mathrm{d}v - \int_{\Omega} (\nabla \cdot w) p \, \mathrm{d}v = \int_{\Omega} \rho w \cdot b \, \mathrm{d}v.$$

Multiply the continuity equation by a test function $q$:

$$\int_{\Omega} q \, \nabla \cdot v \, \mathrm{d}v = 0.$$

The weak form seeks $(v, p) \in V \times Q$ such that these hold for all $(w, q) \in V_{0} \times Q$.

</details>

### Exercise 3
Solve the 1D heat equation $u_{t} = \kappa u_{xx}$ on $[0, L]$ with $u(0, t) = u(L, t) = 0$ and $u(x, 0) = \sin(\pi x/L)$ by separation of variables.

<details><summary>Hint 1</summary>

The sine initial profile selects one Dirichlet Laplacian mode.

</details>

<details><summary>Hint 2</summary>

Its temporal coefficient decays at diffusivity times squared wave number.

</details>

<details><summary>Full solution</summary>

**Solution.** Assume $u(x, t) = X(x) T(t)$. Then $X T' = \kappa X'' T$. Define the spatial eigenvalue by $-X''=\alpha X$; the boundary conditions give $\alpha_n=(n\pi/L)^2$ and $X_n=\sin(n\pi x/L)$. The time equation is $T'=-\kappa\alpha_nT$, so its decay rate is $\lambda_n=\kappa(n\pi/L)^2$. The initial condition matches $n = 1$, hence

$$u(x, t) = \sin\left(\frac{\pi x}{L}\right) \exp\left(-\frac{\kappa \pi^{2} t}{L^{2}}\right).$$

</details>

### Exercise 4

Show that a constant-time surface is characteristic for $u_{tx}+u_{yy}=0$.

<details><summary>Hint 1</summary>

Its normal covector has only a time component.

</details>
<details><summary>Hint 2</summary>

Evaluate the quadratic principal symbol on that covector.

</details>
<details><summary>Full solution</summary>

The symbol is $\tau\xi+\eta^2$, zero at $(1,0,0)$. Thus the original time surface is characteristic even though a coordinate change reveals a hyperbolic signature. One cannot infer a standard two-datum time evolution on that surface solely from the signature in another direction.

</details>

### Exercise 5

Use the sine family to disprove continuous square-integrable dependence for backward heat at a fixed positive time T.

<details><summary>Hint 1</summary>

Choose exponentially small high-frequency initial amplitudes.

</details>
<details><summary>Hint 2</summary>

Backward heat amplifies their coefficients by the reciprocal of forward diffusion decay.

</details>
<details><summary>Full solution</summary>

Initial data $e^{-n^2T/2}\sin(nx)$ tend to zero in H, but their value at T is $e^{n^2T/2}\sin(nx)$ and has diverging norm. Hence no continuous H solution operator exists on arbitrary H data for that direction of evolution. Formal smooth solutions of each selected mode do not supply well-posedness on the entire data space.

</details>

### Exercise 6

For prescribed outward physical heat flux q on a boundary, determine its weak load sign.

<details><summary>Hint 1</summary>

Physical flux is minus conductivity times outward normal temperature derivative.

</details>
<details><summary>Hint 2</summary>

Compare that definition with the derivative-data boundary term from integration by parts.

</details>
<details><summary>Full solution</summary>

The contribution on the right is minus the integral of q times the test. If the datum is instead normal derivative g, the term is plus conductivity times g against the test. Confusing the named datum changes the sign of heat input and can turn cooling into a source.

</details>

### Exercise 7

Explain how a nonnegative Robin transfer coefficient contributes to a weak heat energy estimate.

<details><summary>Hint 1</summary>

Separate the unknown boundary temperature from prescribed ambient temperature.

</details>
<details><summary>Hint 2</summary>

Test by the temperature after moving its own boundary term to the left.

</details>
<details><summary>Full solution</summary>

The solution part adds the nonnegative boundary integral of transfer coefficient times temperature squared. The ambient part remains a load. This is an energy-dissipating homogeneous boundary mechanism and can remove a stationary constant mode under sufficient boundary coverage. Its units and sign come from the outward physical flux relation.

</details>

### Exercise 8

Why does a tiny Stokes algebraic residual not establish a stable pressure approximation for an arbitrary velocity/pressure pair?

<details><summary>Hint 1</summary>

The constrained system needs a uniform divergence-pairing bound.

</details>
<details><summary>Hint 2</summary>

An unstable pair can have nearly invisible pressure directions.

</details>
<details><summary>Full solution</summary>

A uniform discrete inf-sup condition or justified stabilisation is required to control pressure in its function norm. A small residual only measures satisfaction of the chosen finite system, and weakly coupled pressure modes can amplify it or remain undetermined. Pressure gauge, discretisation stability and algebraic solve accuracy are different requirements.

</details>

### Exercise 9

Give a shared numerical flux that conserves cell totals and preserves constants but is inconsistent with a nonzero transport flux.

<details><summary>Hint 1</summary>

Choose the same zero flux at every face.

</details>
<details><summary>Hint 2</summary>

Its difference vanishes for every grid state, not only constants.

</details>
<details><summary>Full solution</summary>

The identically zero face flux telescopes and preserves every constant, but also freezes nonconstant data. For physical linear transport with nonzero speed it fails coincident-trace consistency except at zero state. Thus conservation and constant preservation alone do not identify the intended PDE.

</details>

### Exercise 10

What additional information beyond $u\in L^2(0,T;H_0^1)$ supplies a meaningful H initial trace for heat flow?

<details><summary>Hint 1</summary>

The evolution equation controls a time derivative in a dual space.

</details>
<details><summary>Hint 2</summary>

Use the evolution-triple time lemma from the parabolic primary.

</details>
<details><summary>Full solution</summary>

A time derivative in $L^2(0,T;H^{-1})$ gives a continuous H representative together with the stated spatial energy membership. The initial value is attained in that representative. Mere time-integrable membership defines an equivalence class and does not assign its value at a selected endpoint; the derivative estimate is an essential extra part of the solution contract.

</details>
