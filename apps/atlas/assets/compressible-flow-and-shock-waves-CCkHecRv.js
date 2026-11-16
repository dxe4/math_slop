var e=`---
parent_id: book-fields-fluids-continuum
chapter_id: compressible-flow-and-shock-waves
title: "Compressible Flow and Shock Waves"
level: graduate
estimated_minutes: 240
license: CC BY-SA 4.0
---

# Compressible Flow and Shock Waves

## Learning purpose

This chapter introduces the equations of compressible flow, the speed of sound, and shock waves as discontinuities satisfying Rankine--Hugoniot jump conditions. You will learn to compute post-shock states and to recognise when the isentropic approximation is valid.

## Equations of compressible flow

For a compressible fluid, the governing equations are:

1. Mass: $\\partial_{t} \\rho + \\nabla \\cdot (\\rho v) = 0$.
2. Momentum: $\\rho Dv/Dt = -\\nabla p + \\nabla \\cdot \\tau + \\rho b$, where $\\tau$ is the viscous stress.
3. Energy: $\\rho De/Dt = -p \\nabla \\cdot v + \\tau : D - \\nabla \\cdot q + \\rho r$.
4. Equation of state: $p = p(\\rho, T)$, e.g., ideal gas $p = \\rho R T$.

These must be closed with constitutive relations for $\\tau$, $q$, and thermodynamic properties.

## Speed of sound and Mach number

For small isentropic perturbations of a uniform state, the pressure disturbance satisfies a wave equation with speed

$$c = \\sqrt{\\left( \\frac{\\partial p}{\\partial \\rho} \\right)_{s}}.$$

For an ideal gas with $p = \\rho R T$ and isentropic relation $p/\\rho^{\\gamma} = \\mathrm{const}$,

$$c = \\sqrt{\\frac{\\gamma p}{\\rho}} = \\sqrt{\\gamma R T}.$$

The Mach number $Ma = U/c$ classifies compressible flows:

- $Ma < 1$: subsonic
- $Ma = 1$: sonic
- $Ma > 1$: supersonic

A value below about $0.3$ is a restricted engineering heuristic; thermal, initial-data and boundary qualifications are discussed below.

## Shock waves

A shock wave is a discontinuity in the flow variables across which conservation and an entropy condition hold. In the shock-fixed frame, an admissible compressive normal shock has supersonic upstream inflow and subsonic downstream outflow; its laboratory-frame speed may be zero. For a steady normal shock in one dimension, the Rankine--Hugoniot conditions are:

$$[\\rho v] = 0, \\qquad [\\rho v^{2} + p] = 0, \\qquad [\\rho v (e + v^{2}/2) + p v] = 0,$$

where $[\\cdot]$ denotes the jump across the shock. These express conservation of mass, momentum, and energy.

For an ideal gas, the ratios across a normal shock are:

$$\\frac{\\rho_{2}}{\\rho_{1}} = \\frac{(\\gamma + 1) Ma_{1}^{2}}{(\\gamma - 1) Ma_{1}^{2} + 2},$$
$$\\frac{p_{2}}{p_{1}} = 1 + \\frac{2\\gamma}{\\gamma + 1}(Ma_{1}^{2} - 1),$$
$$Ma_{2}^{2} = \\frac{(\\gamma - 1) Ma_{1}^{2} + 2}{2\\gamma Ma_{1}^{2} - (\\gamma - 1)}.$$

The entropy increases across the shock: $s_{2} > s_{1}$. This selects the physically admissible solution; the equations alone allow both compression and expansion shocks, but only compression shocks satisfy the entropy condition.

**Example 14.1.** For air ($\\gamma = 1.4$) with $Ma_{1} = 2$, the pressure ratio is $p_{2}/p_{1} = 1 + 2.8/2.4 \\cdot 3 = 4.5$, and the density ratio is $\\rho_{2}/\\rho_{1} = 2.4 \\cdot 4 / (0.4 \\cdot 4 + 2) = 9.6/3.6 = 8/3 \\approx 2.67$.

## Conservative energy fixes the shock flux

For one-dimensional inviscid flow without heat or external force, set total specific energy equal to internal energy plus half squared velocity. The conserved variables are density, momentum density and total energy density. Their fluxes are mass flux, momentum flux including pressure, and total-energy flux plus pressure work. The last term is essential: internal energy alone does not carry the mechanical work done across a moving surface.

For a front moving at speed s, every conserved jump has flux jump equal to s times state jump. Moving into its rest frame replaces material velocity by relative velocity w. The mass flux j is then constant, momentum gives $p+j^2\\tau$ constant with specific volume $\\tau=1/\\rho$, and energy gives specific enthalpy plus half squared relative speed constant. These rest-frame statements are equivalent to the three moving conservative jumps, provided density is positive and the velocity transformation is applied consistently.

Eliminate the squared mass flux from momentum and energy. The result is the Hugoniot energy relation

$$[e]+\\frac{p_1+p_2}{2}[\\tau]=0.$$

To verify it, write the enthalpy difference as internal-energy difference plus the difference of pressure times specific volume. The kinetic term is half $j^2[\\tau](\\tau_1+\\tau_2)$, and momentum replaces $j^2[\\tau]$ by minus the pressure jump. Expanding leaves precisely the displayed mean-pressure work. This algebra does not assume ideal gas until its thermodynamic relation is inserted.

For a contact with j zero, relative velocity vanishes and momentum makes pressure continuous. Density and entropy may still jump. Dividing by mass flux to derive a normal-shock enthalpy relation is therefore inappropriate for that zero-transfer case. A contact is one of the characteristic families of the full compressible system, not an inadmissible shock merely because the normal-shock formulas do not apply.

## Smooth thermodynamics transports entropy before shocks

For a simple compressible material, the Gibbs identity is $Tds=de+p\\,d\\tau$, with positive absolute temperature. Smooth inviscid internal-energy balance gives $De/Dt=-p\\operatorname{div}v/\\rho$, while continuity gives $D\\tau/Dt=\\tau\\operatorname{div}v$. The two work terms cancel, so entropy is constant along smooth particle paths without heat transfer or viscous dissipation.

At a shock the solution lacks the smooth derivatives used in that cancellation. The energy conservation law remains, while the entropy balance becomes an inequality selecting admissible jumps. Assigning the smooth isentropic relation across a nontrivial dissipative shock would remove the very entropy production needed for admissibility. Isentropic evolution between shocks and entropy increase through shocks are compatible parts of the same model.

For an ideal gas with constant heat capacities, internal energy is $p\\tau/(\\gamma-1)$ and gamma is greater than one. Substituting this into Hugoniot and solving gives the density ratio as a rational function of the pressure ratio x:

$$r=\\frac{(\\gamma+1)x+(\\gamma-1)}{(\\gamma-1)x+(\\gamma+1)}.$$

Combining momentum with the upstream sound speed then gives the Mach-number formulas in the opening. The constant-gamma ideal-gas assumption is substantive: a high-temperature material with changing degrees of freedom needs its actual thermodynamic functions rather than the same rational ratios with an unexplained fixed gamma.

## Entropy selection can be proved for the entire ideal-gas branch

The entropy change divided by specific heat at constant volume is $E(x)=\\log x-\\gamma\\log r(x)$. It vanishes at x one. Differentiate the rational expression for r and simplify. Its derivative is

$$E'(x)=\\frac{(\\gamma^2-1)(x-1)^2}
{x[(\\gamma+1)x+\\gamma-1][(\\gamma-1)x+\\gamma+1]}.$$

For positive pressure ratio the denominator is positive. Hence E increases with x, with equality of its derivative only at the trivial state. Compression x greater than one has positive entropy change, while the reversed expansion branch has negative change. With positive upstream-to-downstream mass flux this gives precisely the admissible entropy sign.

The weak-shock order follows without a vague cancellation assertion. Near x one, the denominator tends to $4\\gamma^2$, so integration gives $E(x)=(\\gamma^2-1)(x-1)^3/(12\\gamma^2)+O((x-1)^4)$. At a fixed upstream pressure, x minus one is the pressure jump divided by that pressure. This proves the cubic entropy increase and states the normalisation hidden in a dimensionful proportionality.

The proof is for this normal ideal-gas branch. Nonconvex equations of state, phase boundaries and more general systems can have different admissibility structures. It should not be generalised into a rule that every imaginable density-increasing jump is the unique physical solution without the corresponding constitutive hypotheses.

### Example 14.2: a stationary laboratory shock

In a duct a normal shock can be stationary in the laboratory while upstream relative inflow is supersonic. Its front speed is then zero, but its upstream material speed divided by upstream sound speed exceeds one. For the opening gamma and Mach-two example, density rises by eight thirds and pressure by nine halves. Relative downstream velocity is three eighths of upstream velocity by constant mass flux.

The downstream Mach formula gives a value below one: subtracting its numerator from its denominator yields $(\\gamma+1)(Ma_1^2-1)>0$. Thus supersonic inflow becomes subsonic outflow in the shock frame. Calling a shock supersonic describes this upstream relative inflow, not a requirement that the front itself move through the laboratory at a nonzero supersonic speed.

The ratios imply increased temperature through the ideal-gas relation and a strictly positive entropy change through the proved formula. They do not determine the shock's position in a finite duct; inlet, outlet and any area variation select that global boundary-value problem. Local jump relations and global placement are separate questions.

## Acoustic speeds are eigenvalues of the smooth system

For a uniform positive-density and positive-pressure ideal-gas state, use primitive variables density, velocity and pressure. Smooth Euler equations have principal matrix

$$\\begin{pmatrix}u&\\rho&0\\\\0&u&1/\\rho\\\\0&\\gamma p&u\\end{pmatrix}.$$

Its eigenvalues are u and $u\\pm\\sqrt{\\gamma p/\\rho}$. The middle family transports a contact/entropy disturbance; the other two carry acoustic waves relative to the material. Positive density and pressure make the speeds real and distinct. Vacuum or a thermodynamic loss of positive isentropic pressure derivative invalidates this strict-hyperbolicity calculation.

Linearizing at rest gives density time derivative plus reference density times velocity divergence equal to zero, and reference density times velocity time derivative plus pressure gradient equal to zero. Isentropic pressure perturbation equals sound speed squared times density perturbation. Eliminating density and velocity yields the acoustic wave equation. Its smallness assumption concerns perturbations about a specified state, whereas the finite shock ratios describe a nonlinear jump.

### Example 14.3: a contact without a pressure disturbance

Take equal velocities and pressures on two sides but different positive densities, with each side's temperature adjusted by the ideal-gas law. Move the interface with that common velocity. Its relative mass flux is zero, and all three conservative jumps hold: pressure is continuous and no relative energy is advected through it.

Entropy can differ because the two densities and temperatures differ. This is a contact wave, not an isentropic acoustic wave or a normal compression shock. It illustrates why compressible initial data contain more information than pressure alone and why the three characteristic families must all be retained in a general Riemann problem.

## A nozzle reduction has a sonic compatibility condition

For smooth steady quasi-one-dimensional isentropic flow in a slowly varying area A, mass gives constant $\\rho uA$. Streamwise momentum gives $u\\,du+dp/\\rho=0$, and the isentropic derivative relates pressure and density. Eliminating density yields

$$\\frac{dA}{A}=(Ma^2-1)\\frac{du}{u}.$$

A subsonic flow accelerates through a narrowing area, while a supersonic one accelerates through a widening area. A smooth nontrivial passage through sonic speed therefore requires an area extremum in this reduction. That necessary local condition does not by itself construct a globally compatible transonic nozzle solution; boundary data and the critical branch still matter.

### Example 14.4: maximum mass flux at fixed stagnation state

For a constant-gamma ideal gas, steady adiabatic energy gives fixed stagnation temperature equal to local temperature times $1+(\\gamma-1)Ma^2/2$. The isentropic relation supplies the corresponding density factor. Apart from a fixed positive stagnation-state constant, mass flux per area is

$$Ma\\left(1+\\frac{\\gamma-1}{2}Ma^2\\right)^{-(\\gamma+1)/(2(\\gamma-1))}.$$

Differentiate its logarithm. After multiplication by the positive denominator, its sign is the sign of one minus Mach number squared. Thus the positive mass flux increases up to Mach one and decreases beyond it, proving the sonic maximum for those fixed stagnation data. Choking is this constrained maximum within the isentropic model, not an assertion that arbitrary added pressure cannot change the reservoir or create a shock elsewhere.

## Strong and weak limits have different information

As upstream Mach number tends to infinity with fixed gamma, the normal-shock density ratio tends to $(\\gamma+1)/(\\gamma-1)$ while the pressure and temperature ratios grow. This finite compression limit is a feature of the ideal constant-capacity model. It does not bound all real-material compression under every thermodynamic closure.

Near Mach one, the entropy increase is cubic in the small normalised pressure jump. Using a smooth isentropic approximation for some leading weak-wave quantities can therefore be accurate at lower orders, while the sign of the small higher-order entropy defect still selects the physical discontinuity. Small entropy production does not make the compressive and expansion branches equally admissible.

The often-used small-Mach engineering heuristic also needs qualifications. Heating, composition changes or imposed density stratification can produce density variation even at low material speed. A mathematical incompressible limit specifies the equation of state, acoustic initial preparation, boundary data and convergence norm. The numerical value of a bulk speed ratio alone does not establish all those conditions.

## Weak compressible solutions retain every balance separately

For rough fields impose mass, momentum and total energy through conservative distributional tests, with initial traces and boundary fluxes in the chosen solution class. Add the thermodynamic entropy inequality with its declared sign. The jump calculations are necessary local consequences for piecewise smooth fronts; they are not a general existence or uniqueness theorem for arbitrary multidimensional Euler data.

Viscosity and heat conduction resolve an ideal front into a thin transition under appropriate assumptions, but their limit needs compactness and constitutive control. A mass-conserving numerical front can still have the wrong momentum, energy or entropy. The analytic interface relations identify the intended target before a numerical approximation or an experiment is interpreted.

## Summary and connections

This chapter introduced compressible flow equations, the speed of sound, and shock jump conditions. The entropy increase across shocks selects the physical solution.

In the previous chapter, *Viscous Flows and Exact Solutions*, we studied incompressible flows. In the next chapter, *Acoustics and Elastic Wave Propagation*, we examine small-amplitude waves in fluids and solids.

## Exercises

### Exercise 1
Compute the speed of sound in air at $T = 300 \\, \\mathrm{K}$. For air, $\\gamma = 1.4$ and $R = 287 \\, \\mathrm{J}/(\\mathrm{kg} \\cdot \\mathrm{K})$.

<details><summary>Hint 1</summary>

Use the positive absolute temperature and convert the specific gas constant consistently.

</details>

<details><summary>Hint 2</summary>

Sound-speed squared is gamma times gas constant times temperature.

</details>

<details><summary>Full solution</summary>

**Solution.** $c = \\sqrt{\\gamma R T} = \\sqrt{1.4 \\cdot 287 \\cdot 300} = \\sqrt{120540} \\approx 347 \\, \\mathrm{m}/\\mathrm{s}$.

</details>

### Exercise 2
A normal shock has upstream Mach number $Ma_{1} = 3$ in air ($\\gamma = 1.4$). Find the downstream Mach number $Ma_{2}$ and the pressure, density, and temperature ratios.

<details><summary>Hint 1</summary>

Insert the same upstream Mach number into each normal-shock ratio.

</details>

<details><summary>Hint 2</summary>

Temperature ratio is pressure ratio divided by density ratio for the ideal-gas closure.

</details>

<details><summary>Full solution</summary>

**Solution.** $Ma_{2}^{2} = (0.4 \\cdot 9 + 2)/(2.8 \\cdot 9 - 0.4) = 5.6/24.8 = 0.2258$, so $Ma_{2} \\approx 0.475$. $p_{2}/p_{1} = 1 + 2.8/2.4 \\cdot 8 = 10.33$. $\\rho_{2}/\\rho_{1} = 2.4 \\cdot 9/(0.4 \\cdot 9 + 2) = 21.6/5.6 = 3.857$. From the ideal gas law, $T_{2}/T_{1} = (p_{2}/p_{1})/(\\rho_{2}/\\rho_{1}) = 10.33/3.857 \\approx 2.68$.

</details>

### Exercise 3
Show that for a weak shock ($Ma_{1} \\to 1$), the entropy jump is third-order in the pressure jump: $[s] \\sim [p]^{3}$.

<details><summary>Hint 1</summary>

Use the exact entropy expression as a function of normalised pressure ratio.

</details>

<details><summary>Hint 2</summary>

Its first nonzero derivative near the trivial state comes from a squared pressure-ratio difference.

</details>

<details><summary>Full solution</summary>

**Solution.** For an ideal gas, $s = c_{v} \\ln(p/\\rho^{\\gamma}) + \\mathrm{const}$. Expanding the Rankine--Hugoniot relations for $Ma_{1} = 1 + \\epsilon$ with $\\epsilon \\ll 1$, the pressure jump is $[p] \\sim \\epsilon$ to leading order, while the entropy jump involves cancellations at $O(\\epsilon)$ and $O(\\epsilon^{2})$, leaving $[s] \\sim \\epsilon^{3} \\sim [p]^{3}$.

More precisely, at fixed upstream pressure let $z=[p]/p_1$. The exact derivative in the text gives $[s]/c_v=(\\gamma^2-1)z^3/(12\\gamma^2)+O(z^4)$. This displays the positive coefficient and the normalisation required by the dimensionful pressure jump.

</details>

### Exercise 4

Derive Hugoniot's internal-energy relation from steady shock-frame momentum and total enthalpy balance.

<details><summary>Hint 1</summary>

Write relative velocity as mass flux times specific volume.

</details>
<details><summary>Hint 2</summary>

Use momentum to eliminate mass flux squared times the specific-volume jump.

</details>
<details><summary>Full solution</summary>

Energy gives $[e]+[p\\tau]+j^2[\\tau^2]/2=0$. Momentum gives $j^2[\\tau]=-[p]$. Substitution and expansion of $[p\\tau]$ leave $[e]+(p_1+p_2)[\\tau]/2=0$. A zero-mass-flux contact must be retained separately rather than obtained by an invalid division by j.

</details>

### Exercise 5

Use the entropy derivative formula to classify compression and expansion branches for positive pressure ratio and gamma greater than one.

<details><summary>Hint 1</summary>

Every factor in the denominator is positive.

</details>
<details><summary>Hint 2</summary>

Integrate from the trivial ratio one, where entropy change is zero.

</details>
<details><summary>Full solution</summary>

The derivative is nonnegative and positive except at ratio one. Entropy change is therefore positive for ratio above one and negative below one. Under the declared positive upstream-to-downstream mass flux, compression has the admissible sign while the reversed expansion jump does not. This classification uses the ideal-gas normal-shock branch, not an arbitrary equation of state.

</details>

### Exercise 6

Prove that a normal shock with upstream Mach number greater than one has downstream Mach number below one using the ratio formula.

<details><summary>Hint 1</summary>

Both denominator and numerator are positive in that regime.

</details>
<details><summary>Hint 2</summary>

Subtract numerator from denominator before comparing the ratio to one.

</details>
<details><summary>Full solution</summary>

Their difference is $(\\gamma+1)(Ma_1^2-1)>0$, so the downstream squared Mach ratio is below one and positive. The Mach numbers use velocities relative to the shock. A stationary front in the laboratory can still satisfy these upstream/downstream conditions.

</details>

### Exercise 7

Find the strong-shock density limit for gamma equal to seven fifths.

<details><summary>Hint 1</summary>

Divide numerator and denominator of the density ratio by upstream Mach number squared.

</details>
<details><summary>Hint 2</summary>

Keep gamma fixed in this ideal-gas limit.

</details>
<details><summary>Full solution</summary>

The ratio tends to $(\\gamma+1)/(\\gamma-1)=(12/5)/(2/5)=6$. This is a bound for that fixed-gamma normal-shock family. Changing thermodynamic degrees of freedom or another material equation of state changes the model and can change the limit.

</details>

### Exercise 8

Give a contact wave with different densities and explain which quantities must remain continuous.

<details><summary>Hint 1</summary>

Set front speed equal to common material velocity.

</details>
<details><summary>Hint 2</summary>

Relative mass and energy transport then vanish.

</details>
<details><summary>Full solution</summary>

Choose any two positive densities, equal pressure and equal velocity u, with temperatures adjusted to the ideal-gas law. Let the front move at u. Mass and relative energy flux are zero and pressure continuity satisfies momentum. Density, temperature and entropy can jump. It is a contact family rather than a normal compression shock or one acoustic mode.

</details>

### Exercise 9

Derive the area–speed relation for smooth quasi-one-dimensional isentropic nozzle flow.

<details><summary>Hint 1</summary>

Logarithmically differentiate constant mass flow.

</details>
<details><summary>Hint 2</summary>

Combine momentum with the isentropic pressure derivative to remove density change.

</details>
<details><summary>Full solution</summary>

Mass gives $d\\rho/\\rho+du/u+dA/A=0$. Momentum and $dp=c^2d\\rho$ give $d\\rho/\\rho=-Ma^2du/u$. Substitution yields $dA/A=(Ma^2-1)du/u$. A smooth sonic crossing with nonzero acceleration requires an area extremum, but this necessary condition alone does not solve the global nozzle boundary problem.

</details>

### Exercise 10

Why does a small laboratory-frame front speed not imply a weak or subsonic shock?

<details><summary>Hint 1</summary>

The upstream Mach number uses velocity relative to the front.

</details>
<details><summary>Hint 2</summary>

A stationary duct shock is an immediate counterexample.

</details>
<details><summary>Full solution</summary>

The relevant upstream ratio is $(u_1-s)/c_1$ in the declared orientation. It can exceed one even when front speed s is zero. Shock strength is determined by the relative states and their jump relations, while laboratory front speed depends on the observer and the global apparatus. Interchanging those quantities misclassifies a stationary normal shock.

</details>
`;export{e as default};