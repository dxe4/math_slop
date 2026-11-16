
# Reaction-Diffusion and Pattern Selection

Diffusion smooths each species, yet coupled diffusion can destabilize a reaction-stable equilibrium. This chapter derives the spectral test for diffusion-driven instability, distinguishes linear mode growth from nonlinear pattern existence, and audits simulations against domain, boundary, mesh, and positivity choices.

## 1. Model and homogeneous equilibrium

For two fields on a bounded domain,

$$u_t=d_u\Delta u+f(u,v),\qquad v_t=d_v\Delta v+g(u,v),$$

specify positive diffusivities, boundary conditions, domain, units, and initial data. A spatially homogeneous equilibrium $(u_*,v_*)$ satisfies $f=g=0$. Reaction stability is determined by the Jacobian

$$J=\left.\begin{pmatrix}f_u&f_v\\g_u&g_v\end{pmatrix}\right|_{(u_*,v_*)}.$$

For the two-by-two **linearized** reaction system, $\operatorname{Tr}J<0$ and $\det J>0$ are exactly the Hurwitz conditions. For a nonlinear reaction equilibrium they imply local asymptotic stability under the usual differentiability hypothesis, but they are not necessary: nonhyperbolic equilibria with zero-real-part eigenvalues can still be asymptotically stable by nonlinear terms.

## 2. Laplacian modes

Let $-\Delta \phi_k=\lambda_k \phi_k$ under the declared boundary condition, with $\lambda_k\geq 0$. Linear perturbations proportional to phi_k evolve under

$$M_k=J-\lambda_kD,\qquad D=\operatorname{diag}(d_u,d_v).$$

Under periodic or no-flux boundary conditions, a compatible spatially homogeneous equilibrium is admissible and the homogeneous mode has $\lambda_0=0$. Homogeneous Dirichlet perturbations generally have no zero mode, and nonhomogeneous boundary data may not admit the same constant base state. A Turing instability occurs when the admissible homogeneous reaction mode is stable but some admissible positive $\lambda_k$ makes $M_k$ unstable. Thus the base state, domain, and boundary spectrum jointly select possible wavelengths.

For two species,

$$\operatorname{tr}M_k=\operatorname{tr}J-(d_u+d_v)\lambda_k<0,$$

so instability requires $\det M_k<0$. Expanding,

$$\det M(\lambda)=\det J-(d_vf_u+d_ug_v)\lambda+d_ud_v\lambda^2.$$

A continuum unstable band is not enough: at least one discrete domain eigenvalue must lie inside it.

## 3. Necessary Turing inequalities

Besides $\operatorname{Tr} J<0$, $\det J>0$, a diagonal-diffusion two-species candidate requires

$$d_vf_u+d_ug_v>0,\qquad(d_vf_u+d_ug_v)^2>4d_ud_v\det J.$$

These make the determinant quadratic dip below zero for some positive lambda. They are necessary and, for continuous lambda, sufficient for a band; the actual domain spectrum remains decisive. Equal diffusivities give $M=J-d \lambda I$, shifting all eigenvalues left and preventing classical Turing instability.

## 4. Fastest linear mode

For each admissible lambda_k, compute the spectral abscissa $\sigma_k=\max \operatorname{Re} eig(M_k)$. The fastest linear mode maximizes sigma_k. Its wavelength predicts early growth, not necessarily the final pattern. Nonlinear saturation, mode interaction, symmetry, conservation, noise, and domain geometry can select a different steady or time-dependent state.

Near onset, center-manifold and amplitude equations may justify a reduced pattern equation when eigenvalue simplicity, spectral separation, smoothness, and nondegeneracy hold. A fitted cubic saturation term without that derivation is a model, not a theorem.

## 5. Energy and positivity boundaries

Scalar diffusion with suitable reactions can admit comparison principles and invariant intervals. Cross reactions can still drive negative numerical values. Standard centered discretization plus explicit stepping preserves positivity only under method- and mesh-dependent restrictions. An implicit stable solver need not preserve positivity.

Mass conservation occurs only when reactions and boundary fluxes support it. With no-flux boundaries,

$$\frac{d}{dt}\int_\Omega(u+v)\,dx=\int_\Omega(f+g)\,dx.$$

Therefore total mass is conserved if $f+g=0$, not merely because diffusion is present.

## 6. Discretization audit

For a uniform one-dimensional grid, explicit diffusion requires roughly $d_{\max} dt/dx^2\leq 1/2$. Reactions may impose a stricter stability or positivity restriction. Report grid, boundary stencil, solver splitting, nonlinear tolerance, initial perturbation spectrum, and at least three refinements.

Numerical questions:

- compare computed early growth rates with eigenvalues of discrete linearized modes;
- refine mesh while keeping the same physical initial condition;
- check positivity and mass/reaction balance;
- perturb amplitude to confirm a linear regime;
- vary domain size to test discrete mode selection;
- distinguish stationary patterns, traveling waves, oscillations, and transient texture.

## Local existence has a solution-space contract

For a bounded smooth domain with homogeneous Neumann boundary conditions, use continuous vector-valued initial states and the Neumann heat semigroup on the continuous-function space. Its strong continuity, positivity and supremum contraction are standard linear parabolic inputs here. Let each reaction be locally Lipschitz in the vector state, uniformly on bounded state ranges. The pointwise reaction map is then locally Lipschitz in the supremum norm on continuous fields.

Write the mild equation as the heat evolution of the initial state plus the time integral of the heat evolution applied to the reaction. On a short time interval, restrict candidate trajectories to a closed ball around the initial linear evolution. The reaction is bounded and Lipschitz on the corresponding scalar range. The contraction bound makes the integral map preserve that trajectory ball when the interval is short enough, and its Lipschitz constant is the interval length times the reaction Lipschitz constant. Choose that product below one. The Banach fixed-point theorem proves a unique local continuous mild solution.

Repeating the construction at a later state gives continuation as long as the state supremum norm stays bounded. Thus a finite maximal existence time can occur only with unbounded supremum norm in this model. Spatial smoothness for positive times follows under the corresponding smooth reaction and boundary regularity assumptions; the mild existence argument itself does not require a classical Laplacian of the initial field.

The chosen Neumann semigroup acts componentwise with the stated positive diffusivities. A state-dependent cross-diffusion operator is a different nonlinear principal part; it is not covered by this fixed semigroup and locally Lipschitz reaction contraction. Even a perfectly correct two-by-two reaction Jacobian cannot repair loss of parabolicity in that different model.

## An invariant rectangle can prevent finite-time escape

Let a rectangular state set have lower and upper limits for each component. Suppose the reaction points inward on every face: at a lower face its corresponding component is nonnegative for every choice of the other components in the rectangle, and at an upper face it is nonpositive. Assume the initial field lies in the rectangle. With diagonal positive diffusion and zero normal flux, these conditions make the rectangle invariant.

A useful energy proof clips every component of a candidate state to its rectangle interval. Let q be the difference between the state and that clipped vector. The squared distance to the rectangle is the sum of the squared positive or negative excesses. Its time derivative, justified by smooth convex approximations of those excess squares, has a nonpositive diffusion contribution under Neumann boundary conditions.

In the reaction contribution, first evaluate the reaction at the clipped vector. For any nonzero excess component the face condition gives a nonpositive product with that signed excess. The remaining reaction difference is bounded by its local Lipschitz constant times the vector distance from the rectangle. Summing the component products bounds the distance-energy derivative by a constant times the distance energy itself. Gronwall and initially zero distance force it to remain zero.

This proof applies on each interval of bounded existence, where the local Lipschitz constant is finite. Invariance then supplies a fixed global supremum bound and the continuation argument extends the solution for all times. The signs on every face, diagonal diffusion and boundary flux assumption are the actual mechanism. A reaction-stable Jacobian only gives local information at one equilibrium and cannot replace them.

For concentrations, the nonnegative orthant is the first such condition: each reaction component must be nonnegative when its own concentration vanishes and the others remain nonnegative. Upper bounds require further control. A numerical time-stepping rule has its own invariance question; the continuous rectangle proof does not make every discretization positive or bounded.

## The mode test follows from a complete characteristic polynomial

Linearizing a differentiable reaction around a compatible constant equilibrium gives a constant reaction matrix J. Expanding in the Laplacian eigenbasis separates the linear equation into the mode matrices already stated. For a real two-by-two matrix, its characteristic polynomial is $\mu^2-(\operatorname{tr}M)\mu+\det M$. If its trace is negative, a negative determinant gives one positive and one negative real root. A positive determinant instead gives two roots with negative real parts; zero determinant gives a neutral root rather than a strict instability.

For positive diagonal diffusivities the trace remains negative at every positive spatial eigenvalue when the reaction trace is negative. Hence the determinant quadratic completely classifies strict linear instability of each mode. Its leading coefficient is positive. A negative interval at positive arguments exists precisely when its weighted diagonal sum is positive and its discriminant is positive. The roots then give the two band edges, both positive because their product and sum are positive.

At a band edge one eigenvalue is zero; a nonlinear bifurcation may occur there but is not proved by a zero determinant. Multiple spatial eigenfunctions can share that Laplacian eigenvalue, creating a higher-dimensional critical space. Geometry therefore affects not only the spacing of wave numbers but also the dimension and symmetry of a possible bifurcation reduction.

### Worked example: unequal diffusion with no instability

The earlier exercise matrix with diffusivities one and ten has determinant polynomial $2-6\lambda+10\lambda^2$. Its discriminant is negative and its leading coefficient positive, so it stays positive for every real lambda. The trace is also strictly negative for every nonnegative lambda. Thus every spatial mode is linearly stable, despite a tenfold diffusion contrast and a positive first reaction diagonal entry.

This example disproves the shortcut that unequal diffusion plus an activating component is enough. The weighted diagonal sum must overcome the determinant threshold, and an actual domain eigenvalue must then enter the resulting band. These are independent checks, both of which can fail while the homogeneous reaction remains stable.

### Worked example: a domain admits exactly one unstable mode

Keep $J=\begin{pmatrix}1&2\\-3&-4\end{pmatrix}$ but use diffusivities one and twenty. The determinant is $2-16\lambda+20\lambda^2$, with band edges $(4-\sqrt6)/10$ and $(4+\sqrt6)/10$. The trace is minus three minus twenty-one times lambda.

On a Neumann interval of length $2\pi$, eigenvalues are $k^2/4$. The first positive one, one quarter, lies strictly between the band edges. The next one is one, already beyond the band, and all higher ones are larger. Thus exactly the first nonconstant spatial mode is unstable. At that eigenvalue the determinant is minus three quarters, and the positive temporal growth rate is $(-33+\sqrt{1137})/8$.

On a Neumann interval of length pi, the first positive eigenvalue is one and every spatial mode is stable. The same kinetic matrix and diffusivities therefore give different linear behavior solely through domain size. In either domain the zero mode is governed by the stable reaction matrix. A continuum band calculation without the discrete spectrum would miss this distinction.

## One explicit nonlinear model is globally bounded

Consider signed perturbation variables z with the preceding diffusion pair and reactions

$$F_1=z_1+2z_2-z_1^3,\qquad
F_2=-3z_1-4z_2-z_2^3.$$

Their Jacobian at zero is exactly J. For any R at least the square root of three, the square $[-R,R]^2$ is invariant. At the upper first face the reaction is at most $3R-R^3$, and at the lower first face at least its negative. At the upper second face it is at most $-R-R^3$, and the lower face gives the opposite lower bound. All required signs hold. The invariant-rectangle theorem consequently gives global bounded solutions for initial fields in such a square.

The variables here are signed deviations, not literal concentrations, so a negative component is not a positivity violation. A concentration interpretation would require a declared base state, allowed range and corresponding face conditions. The cubic terms provide boundedness but do not prove which late-time spatial state is approached.

### Worked example: linear instability becomes nonlinear instability locally

For this one-dimensional cubic model, the positive simple mode rate on the length-$2\pi$ interval can be promoted to nonlinear Lyapunov instability directly. Use the first-Sobolev norm for the two fields. In one dimension it controls the supremum norm and is a multiplication algebra, so the cubic remainder has norm at most a constant times the cube of that norm near zero.

The linear evolution has a bound $Me^{\sigma t}$ in this space, where sigma is its unique positive mode rate. To see the uniformity, diagonalize the finitely many low mode matrices; the unstable eigenvalue is simple and all other low rates are strictly smaller. For large spatial eigenvalues the symmetric part of the reaction is bounded while diffusion contributes an arbitrarily large negative diagonal energy, giving a uniform decaying high-mode bound. The Sobolev weights multiply both components of each mode equally, so the same block bound controls their weighted sum.

Start with epsilon times a normalized unstable eigenfunction. Variation of constants and a bootstrap bound of size $2M\epsilon e^{\sigma t}$ show that the nonlinear remainder in the trajectory is bounded by a constant times $\epsilon^3e^{3\sigma t}$. This follows by integrating $Me^{\sigma(t-s)}$ against that cubic bootstrap bound; the exponential integral contributes a fixed reciprocal of twice sigma. Choose a small fixed target delta so that this cubic error is less than half the leading linear size when $\epsilon e^{\sigma t}=\delta$.

For all sufficiently small epsilon, continuity closes the bootstrap up to that target time. The bounded spectral projection onto the unstable eigenfunction then has size at least delta divided by two at that time, since its linear contribution is delta and the cubic correction is smaller. Thus arbitrarily small initial states leave a fixed neighbourhood of zero. This proves nonlinear instability in this model. It still proves no existence or stability of a patterned equilibrium: a trajectory can leave the homogeneous state and subsequently approach a cycle, another attractor or a different spatial profile.

## Pattern existence needs a separate stationary argument

For a parameter-dependent system, a simple zero mode can sometimes produce a branch of stationary nonconstant states through the Crandall–Rabinowitz theorem. That theorem is a named input here: one needs a smooth stationary map between appropriate function spaces, a Fredholm linearization of index zero with one-dimensional kernel and cokernel, and a parameter transversality condition placing the parameter derivative of the kernel direction outside the linearized range. A determinant zero alone checks only a small part of those hypotheses.

Even after a branch is proved, its stability and direction require additional coefficient and spectral calculations. In a multiple critical eigenspace, a scalar amplitude equation is generally insufficient. Fitting a cubic amplitude law to a transient can suggest a reduced model, but it does not establish those functional-analytic hypotheses or a controlled remainder.

A different existence route is variational. The [direct-method chapter](variational-direct-methods.md) proved that the scalar double-well energy with zero Dirichlet data on an interval longer than pi has a nonzero minimizer and its distinct negative. Their weak Euler equations are stationary Allen–Cahn reaction–diffusion equations. This proves actual spatial equilibria through compactness and energy comparison. It is not a two-species Turing theorem: the scalar zero reaction state is unstable without diffusion, and the boundary class differs.

For a smooth Allen–Cahn trajectory the energy derivative is minus the squared time-derivative norm, by testing the evolution with its velocity. A nonincreasing energy does not alone identify one limiting stationary state, or prove every stationary state stable. Compactness, isolation and quantitative energy information decide stronger conclusions. The stationary existence proof and the dynamic selection question should remain separate even when both use the same energy.

## Balances and observations must match the model

The no-flux mass identity follows by integrating each diffusion term and using its zero normal derivative. Reactions then supply or remove total material. For an exchange reaction with F plus G identically zero, total mass is conserved; for the cubic perturbation example it generally is not. Monitoring an imagined conserved mass in a nonconservative reaction model would diagnose the wrong equation.

Boundary conditions can also change which constant base state is admissible. Homogeneous Neumann and periodic conditions admit every constant satisfying the reaction equilibrium. Homogeneous Dirichlet data admit only compatible constants; nonzero prescribed boundary concentrations require a matching base or a nonconstant stationary solution. Linearization around a state that violates the boundary data does not describe perturbations of an actual solution.

Numerical mode growth should be compared with the spectrum of the actual discrete spatial operator as well as the continuum operator. A finite grid shifts eigenvalues, and a time step changes amplification factors. Refinement is how those approximations are related; it is not a proof of the analytic nonlinear pattern theorem. Initial modal content, symmetry and amplitude also affect which unstable directions are visible at early times.

## Exercises with complete worked solutions

### 1. Reaction stability
If $\operatorname{Tr} J=-3$, $\det J=2$, classify the reaction equilibrium.

<details><summary>Hint 1</summary>

Use the two-dimensional characteristic polynomial.

</details>

<details><summary>Hint 2</summary>

Negative trace and positive determinant put both real parts strictly below zero.

</details>

<details><summary>Full solution</summary>

**Solution.** Both two-dimensional Hurwitz conditions hold, so the homogeneous reaction ODE is asymptotically stable.

</details>

### 2. Equal diffusion
Why can $d_u=d_v=d$ not cause classical Turing instability?

<details><summary>Hint 1</summary>

A scalar diffusion matrix commutes with the reaction matrix.

</details>

<details><summary>Hint 2</summary>

Subtracting a nonnegative scalar identity shifts every temporal eigenvalue left.

</details>

<details><summary>Full solution</summary>

**Solution.** $M_k=J-d \lambda_k I$; every eigenvalue is shifted left by a nonnegative amount, so a stable J remains stable.

</details>

### 3. Mode matrix
For $J=\begin{pmatrix}1&2\\-3&-4\end{pmatrix}$, $d_u=1,d_v=10$, write M(lambda).

<details><summary>Hint 1</summary>

Subtract each diffusivity times the spatial eigenvalue on its own diagonal.

</details>

<details><summary>Hint 2</summary>

The reaction off-diagonal entries remain unchanged.

</details>

<details><summary>Full solution</summary>

**Solution.** $M=\begin{pmatrix}1-\lambda&2\\-3&-4-10\lambda\end{pmatrix}$.

</details>

### 4. Reaction check
Is J in Exercise 3 stable?

<details><summary>Hint 1</summary>

Compute the trace and determinant directly.

</details>

<details><summary>Hint 2</summary>

Both scalar Hurwitz inequalities must hold.

</details>

<details><summary>Full solution</summary>

**Solution.** Trace is -3 and determinant is $-4+6=2$, so yes.

</details>

### 5. Determinant polynomial
Compute det M for Exercise 3.

<details><summary>Hint 1</summary>

Expand the two-by-two determinant before simplifying.

</details>

<details><summary>Hint 2</summary>

Inspect its discriminant and positive leading coefficient.

</details>

<details><summary>Full solution</summary>

**Solution.** It is $2-(10*1+1*(-4))\lambda+10\lambda^2=2-6\lambda+10\lambda^2$. Its discriminant is 36-80<0, so no Turing band despite unequal diffusion.

</details>

### 6. Candidate inequalities
If the weighted diagonal sum is negative, can a band occur?

<details><summary>Hint 1</summary>

The determinant starts positive at spatial eigenvalue zero.

</details>

<details><summary>Hint 2</summary>

A nonpositive weighted sum makes the quadratic nondecreasing on the nonnegative axis.

</details>

<details><summary>Full solution</summary>

**Solution.** No. The determinant quadratic begins positive and initially increases, with positive leading coefficient, so it cannot dip below zero at positive lambda.

</details>

### 7. Discrete spectrum
For Neumann conditions on $(0,L)$, what are lambda_k?

<details><summary>Hint 1</summary>

Use cosine eigenfunctions satisfying zero derivatives at both endpoints.

</details>

<details><summary>Hint 2</summary>

The integer zero mode is constant.

</details>

<details><summary>Full solution</summary>

**Solution.** $\lambda_k=(k \pi/L)^2$, k=0,1,... . The zero mode is homogeneous.

</details>

### 8. Domain size
What happens to positive eigenvalues as L grows?

<details><summary>Hint 1</summary>

Track the denominator in the squared wave number.

</details>

<details><summary>Hint 2</summary>

The mode index and the domain length both matter for the band intersection.

</details>

<details><summary>Full solution</summary>

**Solution.** They decrease and become more densely spaced, so a continuum unstable band may capture different mode indices.

</details>

### 9. Fastest mode boundary
Does maximum linear growth prove the final wavelength?

<details><summary>Hint 1</summary>

Identify the time and amplitude range of linearization.

</details>

<details><summary>Hint 2</summary>

A fastest infinitesimal mode does not classify nonlinear attractors.

</details>

<details><summary>Full solution</summary>

**Solution.** No. It predicts early infinitesimal growth only; nonlinear interactions and constraints determine later selection.

</details>

### 10. Homogeneous perturbation
Which matrix controls it?

<details><summary>Hint 1</summary>

Insert the spatial eigenvalue of a constant mode.

</details>

<details><summary>Hint 2</summary>

Diffusion vanishes on constant fields under the stated boundary conditions.

</details>

<details><summary>Full solution</summary>

**Solution.** Lambda zero gives M_0=J, so reaction stability prevents growth of the homogeneous mode.

</details>

### 11. Mass balance
Under no flux, when is integral(u+v) conserved?

<details><summary>Hint 1</summary>

Integrate both equations and cancel the no-flux diffusion terms.

</details>

<details><summary>Hint 2</summary>

The reaction sum remains unless its spatial integral vanishes.

</details>

<details><summary>Full solution</summary>

**Solution.** Exactly when the spatial integral of f+g vanishes along the solution; the pointwise sufficient condition is f+g=0.

</details>

### 12. Explicit CFL
With d_max=2 and dx=0.1 in one dimension, give the diffusion step bound.

<details><summary>Hint 1</summary>

Solve the one-dimensional explicit diffusion restriction for the time step.

</details>

<details><summary>Hint 2</summary>

The square of the grid spacing appears in the numerator.

</details>

<details><summary>Full solution</summary>

**Solution.** $dt\leq dx^2/(2d_{\max})=0.01/4=0.0025$, before considering reactions.

</details>

### 13. Implicit boundary
Does A-stability guarantee nonnegative concentrations?

<details><summary>Hint 1</summary>

Distinguish amplification stability from order preservation.

</details>

<details><summary>Hint 2</summary>

An A-stable rule can still have negative update weights.

</details>

<details><summary>Full solution</summary>

**Solution.** No. Absolute stability controls linear growth, not monotonicity or invariant domains. Matrix and nonlinear solve properties must be checked.

</details>

### 14. Noise seed
Why record the initial perturbation?

<details><summary>Hint 1</summary>

Resolve the perturbation into admissible spatial eigenfunctions.

</details>

<details><summary>Hint 2</summary>

A mode with zero initial coefficient may be invisible in a linear evolution.

</details>

<details><summary>Full solution</summary>

**Solution.** Its modal content determines which unstable modes are seeded and affects transient selection. Random seeds are part of reproducibility.

</details>

### 15. Linear regime
How test it numerically?

<details><summary>Hint 1</summary>

Compare normalized trajectories at two small amplitudes.

</details>

<details><summary>Hint 2</summary>

Linear homogeneity predicts agreement before nonlinear terms matter.

</details>

<details><summary>Full solution</summary>

**Solution.** Repeat with perturbation amplitudes epsilon and epsilon/2. Before saturation, normalized modal amplitudes should agree and grow at the predicted exponential rate under time refinement.

</details>

### 16. Boundary effects
Can a periodic-domain wavelength be reused for Neumann boundaries?

<details><summary>Hint 1</summary>

List the allowed wave numbers under each boundary class.

</details>

<details><summary>Hint 2</summary>

The same physical length does not make periodic and Neumann spectra identical.

</details>

<details><summary>Full solution</summary>

**Solution.** Not automatically. The eigenfunctions and allowed wave numbers differ, changing the discrete selection set.

</details>

### 17. Stationary versus transient
A snapshot has spots. What is missing?

<details><summary>Hint 1</summary>

A spatial snapshot contains no time derivative information.

</details>

<details><summary>Hint 2</summary>

Stationarity and convergence require a trajectory-level argument.

</details>

<details><summary>Full solution</summary>

**Solution.** Time history, residual $\lVert dU/dt\rVert$, longer horizons, multiple starts, and mesh/tolerance checks are needed before calling it a stationary pattern.

</details>

### 18. Cross diffusion
Do the diagonal-diffusion inequalities apply unchanged?

<details><summary>Hint 1</summary>

Inspect how the principal spatial operator changes.

</details>

<details><summary>Hint 2</summary>

Diagonal constant diffusion was part of the determinant calculation.

</details>

<details><summary>Full solution</summary>

**Solution.** No. A nondiagonal or state-dependent diffusion matrix changes the mode matrix and may affect parabolicity; rederive the determinant and well-posedness conditions.

</details>

### 19. Project: mode-selection audit
Given stable J and diffusivities, design a reproducible Turing test on $(0,L)$.

<details><summary>Hint 1</summary>

Separate continuum mode predictions from a discretized simulation.

</details>

<details><summary>Hint 2</summary>

Record domain, boundary, modal content and amplitude assumptions for any comparison.

</details>

<details><summary>Full solution</summary>

**Solution.** Compute Neumann $\lambda_k$ through the mesh resolution, form each exact M_k, and tabulate spectral abscissae. Select small deterministic initial data containing several normalized cosine modes. Simulate at $dx,dx/2,dx/4$ with time errors reduced below spatial errors. During early time, regress log modal amplitude and compare to the discrete linear eigenvalue; report residual and amplitude-halving agreement. Continue through saturation while tracking positivity, mass/reaction balance, stationarity residual, and final spectrum. Repeat at a nearby L. These comparisons assess the approximation of the linear prediction; they do not prove a nonlinear patterned equilibrium.

</details>

### 20. Claim repair
Repair: “Diffusion destabilized the equilibrium, therefore a stable pattern exists.”

<details><summary>Hint 1</summary>

A growing eigenmode disproves local homogeneous stability.

</details>

<details><summary>Hint 2</summary>

A nonlinear branch and its stability need separate theorems.

</details>

<details><summary>Full solution</summary>

**Solution.** A positive linear mode proves local instability of the homogeneous equilibrium under the model. Existence, stability, and form of a nonlinear patterned state require separate bifurcation/global analysis or carefully bounded evidence.

</details>


## Chapter synthesis

Turing analysis subtracts diffusion-weighted Laplacian eigenvalues from the reaction Jacobian. The domain selects discrete modes; linear growth predicts onset, not nonlinear fate. Positivity, mass, mesh, amplitude, and mode-growth audits keep simulations accountable.

## Dependency ledger

- Reaction stability uses the two-dimensional trace–determinant criterion.
- Spatial reduction assumes a valid Laplacian eigenbasis for the boundary problem.
- Turing inequalities here assume two species and diagonal positive diffusion.
- Nonlinear pattern claims need bifurcation or global arguments beyond linearization.
- Numerical evidence requires physical-grid refinement and modal/residual checks.
