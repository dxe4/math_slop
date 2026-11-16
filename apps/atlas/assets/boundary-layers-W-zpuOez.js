var e=`---
parent_id: book-fields-fluids-continuum
chapter_id: boundary-layers
title: "Boundary Layers and the Blasius Profile"
level: graduate
estimated_minutes: 460
license: CC BY-SA 4.0
---

# Boundary Layers and the Blasius Profile

A small viscosity can remain important near a no-slip wall because normal derivatives become large. Boundary-layer theory resolves that region while matching an outer inviscid flow. This chapter derives the steady Prandtl model, constructs the normalised Blasius profile through a complete shooting-and-scaling argument, and relates wall stress to momentum loss. It distinguishes existence of this similarity solution from a general theorem about Navier–Stokes limits or separated flow.

Preparation is [Newtonian flow](newtonian-fluids.md), [scaling](dimensionless-regimes-and-reduced-equations.md) and [potential flow](potential-flow.md). The basic model is steady two-dimensional constant-density flow over a smooth flat stationary plate, with positive constant viscosity. The derivation uses an attached thin layer and controlled streamwise variation. A sharp edge, separation point or rapidly varying imposed flow can violate those assumptions.

## The retained derivatives follow from a scale ordering

Let L be a streamwise scale, U an outer speed and delta the normal layer thickness. Continuity makes normal velocity of order U times delta divided by L. Streamwise advection is of order squared speed divided by L, while normal viscous diffusion is viscosity per density times U divided by delta squared. Balancing them gives delta over L of order the inverse square root of Reynolds number.

Streamwise viscous diffusion is smaller than normal diffusion by the squared thickness ratio. Leading normal momentum makes pressure independent of the normal coordinate. The resulting steady Prandtl equations are

$$uu_x+vu_y=-\\frac1\\rho p_e'(x)+\\nu u_{yy},
\\qquad u_x+v_y=0.$$

The wall values are u and v zero, while u tends to the prescribed outer tangential speed $U_e(x)$ away from the layer. The outer Euler equation supplies $-p_e'/\\rho=U_eU_e'$. Thus pressure gradient is imposed by the outer flow rather than independently solved from an arbitrary wall pressure condition inside the layer.

These are leading-order equations under the scaling, not the full Navier–Stokes equations with an exact equality after dropping terms at arbitrary parameter values. A rigorous approximation theorem would control the omitted derivatives and match the full initial/boundary data on a stated region. In particular the normal velocity matching can need the first outer correction even when its leading value is small.

## A stream function enforces continuity exactly

Set $u=\\psi_y$ and $v=-\\psi_x$. Mixed derivatives then cancel in continuity. For uniform positive outer speed U and zero pressure gradient, choose

$$\\eta=y\\sqrt{\\frac U{\\nu x}},\\qquad
\\psi=\\sqrt{\\nu Ux}\\,f(\\eta),\\qquad x>0.$$

The velocity becomes $u=Uf'$ and $v=\\sqrt{\\nu U/x}(\\eta f'-f)/2$. Differentiating shows that the two inertial terms combine to minus $U^2ff''/(2x)$: the terms involving eta times first derivative times second derivative cancel. The normal diffusion is $U^2f'''/x$. Hence the similarity equation is

$$f'''+\\frac12ff''=0,\\qquad f(0)=f'(0)=0,
\\qquad f'(\\infty)=1.$$

The first two conditions enforce no slip and no normal wall flow. The condition at infinity matches the outer tangential speed. It is a boundary-value problem on an unbounded interval; assigning an arbitrary second derivative at zero would not automatically satisfy the far condition. The next argument proves that exactly one positive shooting value does.

## Shooting plus scaling constructs the normalised solution

Start with the initial-value problem having $f''(0)=\\alpha>0$. Its third equation can be integrated in logarithmic derivative form:

$$f''(\\eta)=\\alpha\\exp\\!\\left[-\\frac12\\int_0^\\eta f(s)ds\\right].$$

It stays positive wherever the solution exists. Thus f and its first derivative are nonnegative, and $f''\\le\\alpha$. Consequently $f'\\le\\alpha\\eta$ and $f\\le\\alpha\\eta^2/2$ on every finite interval. These polynomial bounds prevent finite-interval blowup of the smooth ODE state, so the solution extends to every nonnegative eta.

Its first derivative has a positive value at eta one. From then on, monotonicity gives a positive linear lower bound on f. Integrating that lower bound in the exponential formula makes the tail of the second derivative bounded by a decaying Gaussian times a fixed constant. It is therefore integrable, and the increasing first derivative has a finite positive limit, denoted $L_\\alpha$.

Now take the solution with initial second derivative one. For b positive, $f_b(\\eta)=b f_1(b\\eta)$ satisfies the same ODE: both terms acquire a factor b to the fourth power. Its initial second derivative is $b^3$ and its limiting first derivative is $b^2L_1$. Choose $b=L_1^{-1/2}$. This constructs a solution with the required limiting derivative one and positive initial curvature $\\alpha_*=L_1^{-3/2}$.

Every positive shooting solution is obtained by that scaling, by uniqueness of the finite-dimensional initial-value problem. The normalised positive solution is therefore unique. Zero initial curvature gives the identically zero profile; negative initial curvature keeps the second derivative negative as long as the solution exists and cannot yield a first derivative tending to one. Thus no other smooth shooting value with the same wall data supplies the normalised profile.

This proof defines the wall-curvature constant without requiring a numerically evaluated decimal. It also proves that the velocity rises monotonically from zero towards U, never overshooting it. The Gaussian tail supplies convergent displacement and momentum integrals. None of these facts proves existence for every prescribed adverse-pressure outer profile, which has a different ODE or PDE.

### Example 13.1: wall stress and local friction

For the normalised solution, wall shear is $\\tau_w=\\mu U\\sqrt{U/(\\nu x)}\\,\\alpha_*$. Define local Reynolds number $Re_x=Ux/\\nu$ and skin-friction coefficient as wall stress divided by half density times squared outer speed. Then the coefficient is $2\\alpha_*/\\sqrt{Re_x}$.

The wall stress diverges like the inverse square root of x as the leading edge is approached, but its integral along a finite plate segment is finite. The ideal similarity model has a singular leading-edge corner where outer stream and wall no slip meet. It is used for positive x in its thin-layer regime; the local singularity is not a smooth full-flow solution through the edge.

Integrating from zero to a plate length L gives drag per span $2\\mu U\\alpha_*\\sqrt{UL/\\nu}$. This force comes from tangential stress absent in ideal potential flow. It can remain a leading drag contribution even when the layer thickness is small relative to L. The upper surface, lower surface and edge contributions must be counted according to the actual physical plate geometry.

## Thickness measures are integrals, not a chosen contour alone

Displacement thickness is the integral of one minus velocity divided by outer speed. Momentum thickness is the integral of the velocity ratio times one minus that ratio. For the similarity solution both scale as $\\sqrt{\\nu x/U}$, with positive finite dimensionless integrals of f'. The first measures the volume-flux deficit relative to a uniform outer stream; the second measures its momentum deficit.

The Gaussian curvature tail proves f approaches eta minus a finite positive constant beta. Indeed one minus f' is the tail integral of f'', and integrating it gives beta as the first moment of f''. Hence the far normal velocity tends to $\\beta\\sqrt{\\nu U/x}/2$. It is small on the outer scale but not identically zero; displacement of the outer stream is part of matching the approximation beyond leading order.

For zero pressure gradient the momentum-thickness coefficient equals twice the wall-curvature constant. Integrate the Blasius ODE over a finite interval. The third-derivative integral tends to minus the initial curvature. Integrating $ff''$ by parts and using $f\\sim\\eta-\\beta$ shows its limiting value is $\\int f'(1-f')$. The ODE therefore gives that integral equal to $2\\alpha_*$. The canceling linear growth terms must be retained before taking the limit; treating the two divergent integrals separately would be invalid.

An alternative thickness defined by reaching a chosen fraction of outer speed also scales with the same square root, but its numerical coefficient depends on that chosen fraction. It should not be confused with displacement or momentum thickness, whose integral definitions enter the exact deficit balances of the model.

## Momentum integration includes outer acceleration

Assume the layer deficits decay sufficiently for the following integrals and differentiated limits. Integrate the Prandtl momentum equation through the layer and use continuity and impermeability to eliminate normal transport. Subtract the matching outer momentum transport before taking the upper limit; the separate infinite uniform-stream contributions otherwise diverge.

The result is $(U_e^2\\theta)' + U_eU_e'\\delta^*=\\tau_w/\\rho$. Expanding the derivative yields

$$\\theta'+(2+H)\\theta\\frac{U_e'}{U_e}
=\\frac{\\tau_w}{\\rho U_e^2},\\qquad H=\\delta^*/\\theta.$$

This is the momentum-integral equation for the stated incompressible attached-layer model. It is not closed until the velocity profile or a relation for its shape factor is supplied. A polynomial guessed profile produces an approximate closure, whereas Blasius supplies an exact similarity profile for its special outer speed.

With constant outer speed the formula reduces to theta derivative equal to half local friction coefficient, reproducing the preceding integral identity. With decreasing outer speed the pressure gradient is adverse and the extra term changes thickness growth. A zero wall shear is an important possible separation indicator, but a general separated-flow solution and its matching require more than continuing this attached-profile closure through zero.

### Example 13.2: steady suction changes the layer scale

For a porous flat wall let normal velocity be the constant negative value minus V, with V positive, and keep uniform outer tangential speed. Seek a streamwise-invariant profile. Continuity makes normal velocity constant throughout this local model, and tangential momentum becomes $-Vu_y=\\nu u_{yy}$.

The solution with u zero at the wall and U far away is $U(1-e^{-Vy/\\nu})$. Its layer length is $\\nu/V$, independent of streamwise position, and wall shear is $\\mu UV/\\nu$. This is an exact steady Prandtl solution with suction, not the impermeable Blasius problem. Its normal mass flux and the source of fluid feeding the porous wall must be included in a global apparatus model.

The example shows why a boundary condition can change the controlling balance as strongly as a Reynolds number. Reusing the Blasius thickness while adding order-one suction in its scaled normal velocity would impose a profile from a different problem. The governing equation and wall flux should be restated together.

## A pressure-gradient similarity problem has additional parameters

For outer speed proportional to a power $x^m$, a related stream-function scaling yields

$$f'''+\\frac{m+1}{2}ff''+m(1-f'^2)=0.$$

The wall and outer derivative conditions have the same normalised form where this scaling is admissible. Setting m zero recovers Blasius; m one gives a stagnation-type similarity equation. Positive m represents outer acceleration, while negative m is an adverse gradient. Existence, multiplicity and monotonicity depend on the parameter and are not established by the zero-gradient shooting proof.

In particular the exponential formula preserving positive f'' in Blasius acquires an additional forcing term here. One cannot use the old positivity argument unchanged. General Prandtl well-posedness also needs hypotheses such as appropriate monotonicity or analyticity in particular theorem settings, and can fail in broader classes. A single well-behaved similarity profile is not a universal boundary-layer existence theorem.

### Example 13.3: identifying the omitted leading-edge region

At location x the Blasius thickness ratio is order $Re_x^{-1/2}$. Even if the Reynolds number based on total plate length is very large, a sufficiently small x has local Reynolds number order one. There the thin-layer ordering used to derive Prandtl is no longer uniform.

Thus a global high-Re statement about the whole plate requires a treatment of the leading-edge neighbourhood, not only the similarity solution for positive downstream positions. The same concern applies near a trailing edge or a separation region. A finite integral drag from a singular ideal profile does not alone prove a uniform local approximation through those regions.

## Exercises with staged help

### 1. Similarity velocities

Differentiate the stated stream function to recover u and v.

<details><summary>Hint 1</summary>

The normal derivative differentiates eta, while the streamwise derivative also differentiates the square-root prefactor.

</details>
<details><summary>Hint 2</summary>

At fixed y, eta has derivative minus eta divided by twice x.

</details>
<details><summary>Full solution</summary>

The derivatives give $u=Uf'$ and $v=\\sqrt{\\nu U/x}(\\eta f'-f)/2$. Both vanish at the wall under the two wall conditions. The mixed derivatives of the stream function cancel in continuity identically, so no additional approximate continuity condition was used.

</details>

### 2. Positive curvature

Derive the exponential formula for f'' from the Blasius equation and initial curvature alpha.

<details><summary>Hint 1</summary>

Regard f'' as the unknown in a scalar first-order linear equation.

</details>
<details><summary>Hint 2</summary>

Use its integrating factor without dividing through a possible zero value.

</details>
<details><summary>Full solution</summary>

The equation is $(f'')'+(f/2)f''=0$. Multiplying by the exponential of half the integral of f makes its derivative zero, giving the stated formula for every initial alpha. Positive alpha therefore preserves positive curvature; zero alpha gives zero curvature. This exact identity supplies the monotonicity and global polynomial bounds in the shooting proof.

</details>

### 3. The shooting scaling

For $f_b(\\eta)=bf_1(b\\eta)$, compute its initial curvature and far derivative.

<details><summary>Hint 1</summary>

Each derivative introduces another factor b.

</details>
<details><summary>Hint 2</summary>

The original initial curvature is one and far derivative is $L_1$.

</details>
<details><summary>Full solution</summary>

The initial curvature is $b^3$ and the far derivative $b^2L_1$. Taking b equal to $L_1^{-1/2}$ gives normalised far derivative one and wall curvature $L_1^{-3/2}$. Both ODE terms scale by $b^4$, which is why this family preserves the differential equation.

</details>

### 4. Global finite-eta existence

Explain why positive-curvature shooting cannot blow up at a finite nonnegative eta.

<details><summary>Hint 1</summary>

The exponential formula bounds curvature above by its initial positive value.

</details>
<details><summary>Hint 2</summary>

Integrate twice to bound the remaining ODE state components on a finite interval.

</details>
<details><summary>Full solution</summary>

One has $0<f''\\le\\alpha$, $0\\le f'\\le\\alpha\\eta$ and $0\\le f\\le\\alpha\\eta^2/2$. All state components stay bounded on every finite interval, so the smooth finite-dimensional ODE continuation theorem extends the solution. Finiteness of the derivative's limit at infinity needs the additional Gaussian-tail argument, not just this finite-interval bound.

</details>

### 5. Local friction

Express the local skin-friction coefficient in terms of wall curvature and local Reynolds number.

<details><summary>Hint 1</summary>

Differentiate the similarity tangential velocity at the wall.

</details>
<details><summary>Hint 2</summary>

Normalise stress by half density times squared outer speed.

</details>
<details><summary>Full solution</summary>

Wall stress is $\\mu U\\sqrt{U/(\\nu x)}\\alpha_*$, so the coefficient is $2\\alpha_*/\\sqrt{Re_x}$. The definition uses a positive U and the chosen stress/drag orientation. Its inverse-square-root leading-edge singularity is integrable over a finite plate length.

</details>

### 6. Displacement matching

If $f\\sim\\eta-\\beta$ and $f'\\to1$, determine the far normal velocity in the similarity layer.

<details><summary>Hint 1</summary>

Use the combination eta times f' minus f.

</details>
<details><summary>Hint 2</summary>

The decaying derivative tail makes the remaining limit beta.

</details>
<details><summary>Full solution</summary>

It tends to $\\beta\\sqrt{\\nu U/x}/2$. It is small relative to U at large local Reynolds number but nonzero at the layer order. A higher-order outer matching must account for the displaced flux rather than impose zero normal velocity at every approximation order.

</details>

### 7. Momentum coefficient

Use the integrated Blasius equation to relate momentum thickness coefficient to initial curvature.

<details><summary>Hint 1</summary>

Integrate f''' and integrate ff'' by parts on a finite interval first.

</details>
<details><summary>Hint 2</summary>

Cancel the common linear growth before taking the infinite limit.

</details>
<details><summary>Full solution</summary>

The third-derivative integral tends to minus alpha. The finite-interval expression for the other integral tends to $\\int_0^\\infty f'(1-f')$, using the proven asymptotic intercept and tail decay. Hence the ODE gives that momentum integral equal to twice alpha. Splitting the divergent boundary and squared-derivative terms after taking their limits would not be a valid derivation.

</details>

### 8. Suction profile

Verify the exponential suction solution and identify its thickness scale.

<details><summary>Hint 1</summary>

Differentiate once and twice in the normal coordinate.

</details>
<details><summary>Hint 2</summary>

Use negative constant normal velocity minus V.

</details>
<details><summary>Full solution</summary>

For $u=U(1-e^{-Vy/\\nu})$, one has $-Vu_y=\\nu u_{yy}$, wall value zero and far value U. The exponential length is $\\nu/V$, independent of x. It belongs to a porous-wall problem with nonzero wall mass flux, so it is not another solution of the impermeable Blasius boundary data.

</details>

### 9. Local versus plate Reynolds number

Why can a large Reynolds number based on total plate length fail to justify the thin-layer ordering near the leading edge?

<details><summary>Hint 1</summary>

The local length in the profile is x rather than total L.

</details>
<details><summary>Hint 2</summary>

The local Reynolds number vanishes as x approaches zero at fixed parameters.

</details>
<details><summary>Full solution</summary>

The thickness ratio is order $Re_x^{-1/2}$, with $Re_x=Ux/\\nu$. Near x of order $\\nu/U$, it is no longer small even if $UL/\\nu$ is large. A uniform full-plate approximation therefore needs an additional leading-edge description and matching; the downstream similarity profile alone does not provide it.

</details>

### 10. A limit claim

Repair the claim that the Blasius existence proof proves every no-slip Navier–Stokes solution converges uniformly to potential flow as viscosity vanishes.

<details><summary>Hint 1</summary>

The proof concerns one reduced similarity boundary-value problem.

</details>
<details><summary>Hint 2</summary>

No-slip and ideal-slip boundary velocities already prevent such an unrestricted uniform statement.

</details>
<details><summary>Full solution</summary>

State that the proof constructs the unique normalised monotone Blasius profile for the declared zero-pressure-gradient Prandtl model. A Navier–Stokes approximation theorem needs compatible data, domain/edge treatment and stability/error estimates. Potential outer velocity differs tangentially from no-slip at the wall, so unrestricted uniform convergence there generally fails; separation and other regions require further analysis.

</details>

## Sources and continuation

Schlichting and Gersten, *Boundary-Layer Theory*, and Batchelor, *An Introduction to Fluid Dynamics*, develop the physical reductions and similarity families. The normalised Blasius shooting construction, wall stress and deficit identities above are proved directly. General Prandtl well-posedness, separation and inviscid convergence remain distinct theorem questions with their own hypotheses.
`;export{e as default};