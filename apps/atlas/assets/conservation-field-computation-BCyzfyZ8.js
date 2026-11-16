var e=`---
id: recipe-conservation-field-computation
title: "Compute a Conservation Law Without Losing the Conserved Quantity"
license: CC BY-SA 4.0
---

# Compute a Conservation Law Without Losing the Conserved Quantity

**Before reading.** Read [Models and Direction Fields](/resources/library:book-ode-first-course:models-direction-fields/), [Functions, Domains, and Graphs](/resources/library:book-algebra-and-functions:functions-domain-graphs/).

This recipe builds a dependency-free finite-volume solver for one-dimensional linear advection,

$u_t+a u_x=0$,

on a periodic domain. The equation is simple enough to solve exactly and rich enough to expose the central habits of computational field theory: units, flux form, initial and boundary data, stability, conservation, numerical diffusion, and convergence. The method transfers to mass transport, acoustics, fluid dynamics, elasticity, electromagnetism, and relativistic field equations, but each extension changes characteristic speeds and admissibility conditions.

## 1. State the physical meaning and units

Let $u(x,t)$ be a density per unit length and $a$ a constant transport velocity. Then $u_t$ and $a u_x$ both have density-per-time units. On a periodic interval of length $L$, initial data are $u(x,0)=u_{0}(x)$ and boundary values wrap: $u(0,t)=u(L,t)$.

The exact solution is

$u(x,t)=u_{0}((x-at) \\pmod{L})$.

The profile translates without changing shape. Its total mass

$M=\\int _{0}ᴸ u dx$

is constant. If a numerical method changes $M$ beyond roundoff, it violates the defining balance.

This model assumes constant velocity and no diffusion, reaction, sources, or boundary exchange. A concentration transported by a spatially varying compressible velocity instead obeys a conservative form such as $u_t+(au)_x=0$; writing only $u_t+a u_x=0$ would omit $u a_x$.

## 2. Start from integral balance

Divide the domain into cells $I_j=[x_{j-1/2},x_{j+1/2}]$ of width $\\Delta x$. Define cell average

$U_j(t)=(1/\\Delta x)\\int _{I_j}u(x,t)dx$.

Write the PDE as $u_t+f(u)_x=0$ with flux $f(u)=au$. Integrating one cell gives exactly

$dU_j/dt=-(F_{j+1/2}-F_{j-1/2})/\\Delta x$,

where the exact face flux is $f(u)$ at the face. Approximation enters only when choosing a numerical face flux and time step.

The same face flux appears with opposite signs in adjacent cells. Summing over all periodic cells telescopes to zero. This local cancellation is why finite-volume methods conserve totals structurally.

## 3. Choose the upwind flux

Information travels at speed $a$. If $a>0$, a face sees the state from its left; if $a<0$, from its right:

$F_{j+1/2}=aU_j$ for $a\\ge 0$,

$F_{j+1/2}=aU_{j+1}$ for $a<0$.

Forward Euler in time yields, for positive $a$,

$U_j^{n+1}=(1-C)U_j^n+C U_{j-1}^n$,

where the Courant number is

$C=a\\Delta t/\\Delta x$.

For $0\\le C\\le 1$, each new value is a convex combination of neighboring values. Thus nonnegative data remain nonnegative and no new extrema appear. For negative speed the analogous condition is $|C|\\le 1$ with right-neighbor upwinding.

The CFL restriction is a causality condition for this explicit stencil: a characteristic must not cross more than one cell per step. Stability depends on method and equation; $|C|\\le 1$ is not a universal time-step rule.

## 4. Implement validated exact structure

\`\`\`js
function requireCellAverages(values) {
  if (!Array.isArray(values) || values.length < 2) {
    throw new RangeError("need at least two periodic cells");
  }
  if (values.some((value) => !Number.isFinite(value))) {
    throw new RangeError("cell averages must be finite");
  }
}

function upwindPeriodicStep(values, courant) {
  requireCellAverages(values);
  if (!Number.isFinite(courant) || Math.abs(courant) > 1) {
    throw new RangeError("explicit upwind needs |a dt/dx| <= 1");
  }
  const count = values.length;
  return values.map((value, index) => {
    if (courant >= 0) {
      const upwind = values[(index - 1 + count) % count];
      return (1 - courant) * value + courant * upwind;
    }
    const upwind = values[(index + 1) % count];
    return (1 + courant) * value - courant * upwind;
  });
}

function diagnostics(values, cellWidth) {
  requireCellAverages(values);
  if (!Number.isFinite(cellWidth) || cellWidth <= 0) {
    throw new RangeError("cell width must be positive");
  }
  return {
    mass: cellWidth * values.reduce((sum, value) => sum + value, 0),
    minimum: Math.min(...values),
    maximum: Math.max(...values),
    l2Squared: cellWidth * values.reduce((sum, value) => sum + value * value, 0),
  };
}

function evolveUpwind(initial, courant, steps) {
  if (!Number.isInteger(steps) || steps < 0) throw new RangeError("bad step count");
  let state = [...initial];
  for (let step = 0; step < steps; step += 1) {
    state = upwindPeriodicStep(state, courant);
  }
  return state;
}
\`\`\`

The program rejects nonfinite values and unstable Courant numbers rather than silently producing misleading output. It copies the initial array so the caller’s data are not mutated.

## 5. Prove discrete conservation

For $C\\ge 0$, sum the update:

$\\sum _j U_j^{n+1}=(1-C)\\sum _jU_j^n+C\\sum _jU_{j-1}^n$.

Periodic index shift leaves the second sum equal to the first, so total is unchanged. Multiplication by fixed $\\Delta x$ proves mass conservation. The negative-speed case is identical with a forward index shift.

Floating-point summation may change the last few bits. Compare absolute mass drift with a scale-aware tolerance such as machine precision times number of operations and total absolute mass. Do not demand bitwise equality after reordered sums.

Also monitor positivity and extrema. Under $|C|\\le 1$, nonnegative initial averages remain nonnegative. If code produces a value below a tolerance-scaled zero, suspect indexing or nonfinite input.

## 6. See numerical diffusion

For $0<C<1$, the update averages neighbors and smooths sharp structure. Taylor expansion shows the scheme approximately solves an advection–diffusion equation with artificial diffusivity proportional to

$a\\Delta x(1-C)/2$

for positive $a$, to leading order under smoothness. As the grid refines at fixed $C$, that artificial diffusion shrinks.

At $C=1$, positive-speed data shift exactly one cell per step: $U_j^{n+1}=U_{j-1}^n$. A cell-aligned profile is transported without averaging. This special exactness does not make coarse representation of a smooth initial function exact between cells.

Try a top-hat profile. Mass stays fixed while the edges smear. The method is conservative but not shape preserving. Conservation, stability, and accuracy are distinct properties.

## 7. Perform a convergence study

Choose smooth periodic data $u_{0}(x)=1+0.3 \\sin(2\\pi x/L)$. For grid sizes $N,2N,4N$, choose $\\Delta t=C\\Delta x/|a|$ with fixed $0<|C|<1$ and evolve to the same physical time, adjusting the final step carefully if necessary.

Compare cell averages with exact translated cell averages, not point samples if the numerical state represents averages. Compute

$L^{1} error=\\sum _j |U_j-U_j^exact|\\Delta x$.

First-order upwind should show error ratio near two when $\\Delta x$ halves in the asymptotic smooth regime. A single grid cannot establish an order. Very coarse grids, roundoff-dominated grids, or inconsistent final times spoil the estimate.

For a discontinuous top hat, global convergence is slower in some norms and pointwise convergence fails at the moving jump. Use integral norms and weak-solution expectations.

## 8. Boundary conditions are flux rules

Periodic wrapping is exact only for a ring-like domain. For positive $a$ on $[0,L]$, the left boundary is inflow and must supply $u(0,t)$; the right boundary is outflow and ordinarily should not receive an independent value. Reversing $a$ reverses inflow and outflow.

Imposing both boundary values for a one-way advection equation can overdetermine the PDE. Copying an interior value into an inflow ghost cell silently imposes a boundary model.

For walls in fluids, characteristic structure is more complex. Maxwell equations require electromagnetic interface or radiation conditions. Elastic waves have displacement or traction data. “Use zero boundary conditions” is not meaningful until the physical variable and boundary operator are named.

## 9. Add sources without hiding them

For $u_t+(au)_x=s$, update

$U_j^{n+1}=U_j^n-(\\Delta t/\\Delta x)(F_{j+1/2}-F_{j-1/2})+\\Delta t S_j$.

Then total mass changes by $\\Delta t\\Delta x\\sum S_j$ plus boundary flux. Audit exactly that balance, not conservation. If source is stiff, explicit Euler may require a much smaller step or an implicit/operator-split method with its own error.

In electromagnetism, charge continuity couples sources $\\rho ,J$; discretizations that violate the discrete divergence relation can accumulate spurious charge. In incompressible flow, projection methods enforce a discrete divergence constraint. In elasticity, discrete work and energy identities guide time integrators. The conserved or constrained object should select the algorithm.

## 10. Stop conditions

Stop and repair before interpreting a simulation when:

- dimensions do not match;
- initial or boundary data are unspecified;
- $|a\\Delta t/\\Delta x|>1$ for this scheme;
- mass residual exceeds a roundoff-scaled budget without sources or boundary flux;
- nonnegative data develop substantial negative values;
- grid refinement does not reduce error against an exact case;
- changing the boundary implementation changes interior results sooner than characteristics allow;
- a sharp feature is narrower than a few cells but is interpreted quantitatively;
- solver agreement is treated as experimental validation of the model.

## Worked numerical case

### Worked example: mass and spreading on four cells

Take four cells with averages $[1,0,0,0]$ and $C=1/2$, positive speed. One step gives

$[1/2,1/2,0,0]$.

The sum remains one. A second step gives

$[1/4,1/2,1/4,0]$.

Mass remains one, maximum decreases, and support spreads: exact evidence of numerical diffusion. With $C=1$, the states would instead shift $[0,1,0,0]$, then $[0,0,1,0]$.

## Exercises with hints and complete solutions

### Exercise 1
<a id="conservation-field-computation-ex-1"></a>

For negative advection speed with $C=-1/2$, apply the periodic upwind rule
to $[1,0,0,0]$ for one step. Explain the direction and mass balance.

<details><summary>Hint 1</summary>

For negative speed, the upwind neighbour is the cell to the right.

</details>
<details><summary>Hint 2</summary>

Use $U_j^{n+1}=\\frac12U_j^n+\\frac12U_{j+1}^n$, with periodic indices.

</details>
<details><summary>Solution</summary>

Cell 0 receives half its own old value; cell 3 receives half of cell 0 through
periodic wrapping. The result is $[1/2,0,0,1/2]$. Its sum is still one,
so multiplying by the unchanged cell width gives the same mass. The pulse
spreads to its left, consistent with negative transport speed. Using the
positive-speed neighbour would reverse the intended direction.

</details>

### Exercise 2
<a id="conservation-field-computation-ex-2"></a>

Two periodic cells have width $1/2$. Add constant source values 1 and 3 for
a time step $\\Delta t=1/10$, using the source update in section 9. Find the
exact change in discrete mass, regardless of the conservative transport flux.

<details><summary>Hint 1</summary>

Summing flux differences over a periodic grid gives zero.

</details>
<details><summary>Hint 2</summary>

Multiply the source sum by both time step and cell width.

</details>
<details><summary>Solution</summary>

The source contribution is
$\\Delta t\\Delta x(S_0+S_1)=(1/10)(1/2)(1+3)=1/5$ mass units.
Periodic boundary fluxes cancel in the sum, so they do not change this answer.
The correct diagnostic is therefore new mass minus old mass minus $1/5$,
which should be zero in exact arithmetic. Requiring unchanged mass would
incorrectly reject the intended source model.

</details>

## Extensions

Implement Lax–Wendroff and compare oscillation near discontinuities; add slope-limited reconstruction for second-order accuracy without new extrema; implement a Riemann solver for nonlinear flux; track entropy for Burgers’ equation; or extend to a staggered Maxwell discretization that preserves a discrete divergence law. Each extension should inherit unit checks, flux accounting, exact benchmark, CFL analysis, and a refinement study before it earns a physical interpretation.
`;export{e as default};