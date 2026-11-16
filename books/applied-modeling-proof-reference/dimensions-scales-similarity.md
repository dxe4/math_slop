
# Dimensions, Scales, Similarity, and Perturbation

## Dependencies and objectives

This chapter uses linear algebra and ordinary differential equations. It develops dimensional invariance as a null-space calculation, nondimensionalization as a coordinate change, and asymptotic reduction as a separate approximation step.

## Dimension vectors

Choose base dimensions such as mass $M$, length $L$, time $T$, and temperature $Θ$. Represent a quantity by its exponent vector. Velocity has $(0,1,-1,0)$ and force $(1,1,-2,0)$. Multiplication adds vectors; exponentiation scales them; meaningful addition requires equal vectors.

For quantities $q_1,…,q_n$, collect exponent vectors as columns of $D$. **Definition (dimensionless monomial).** A monomial $π=∏q_j^{α_j}$ is dimensionless if and only if $Dα=0$. Thus rank-nullity counts independent monomial invariants.

### Worked pendulum reduction

Suppose ideal small-amplitude pendulum period $T_p$ depends only on length $ℓ$, gravitational acceleration $g$, and bob mass $m$. Dimensions are

$[T_p]=T$, $[ℓ]=L$, $[g]=LT^{-2}$, $[m]=M$.

Mass is the only quantity carrying $M$, so its exponent in a dimensionless group must be zero. Solving gives $T_p \sqrt{g/ℓ}$ dimensionless. Therefore dimensional invariance permits

$T_p=C \sqrt{ℓ/g}$.

It cannot determine dimensionless constant $C=2π$; dynamics do. At finite amplitude a further dimensionless variable, the angle amplitude, changes the relation. Selecting variables was a physical assumption.

## Buckingham Pi theorem, linear core

**Theorem 3.1 (linear Pi count).** If $\operatorname{rank} D=r$, then $\operatorname{ker} D$ has dimension $n-r$. A basis yields $n-r$ independent monomial groups. Unit changes translate $\log q$ along the row-space directions; invariant relations descend to coordinates on the quotient. Regularity is needed to express the relation locally in the selected invariants.

Offset scales require care. Celsius values do not transform multiplicatively under unit changes, while absolute temperature does. Angles are dimensionless in an algebraic sense but carry semantic units; silently treating degrees as radians corrupts trigonometric formulas.

### Unit changes as a group action

Suppose base unit $i$ is rescaled by positive factor $s_i$. A quantity with dimension column $d_j$ changes numerical value by a monomial in the $s_i$ (the sign convention depends on whether $s_i$ records old-units per new-unit or its reciprocal). On logarithms, rescaling becomes addition:

$\log q ↦ \log q + D^{\mathsf T} \log s$.

Thus two numerical vectors differing by an element of $\operatorname{range}(D^{\mathsf T})$ describe the same physical quantities in different units. A linear log-combination $α^Tlog q$ is invariant exactly when

$α^TD^{\mathsf T}=0$, equivalently $Dα=0$.

Exponentiating gives $q^α$. This derivation explains why Pi groups are monomials and why choosing a basis of $\operatorname{ker} D$ does not produce one canonical set. Any invertible recombination of the basis gives equally valid groups. Interpretability and limiting behavior guide the choice.

### Complete drag calculation

Let drag force $F$ depend on density $ρ$, speed $U$, length $L$, and dynamic viscosity $μ$. In base order $(M,L,T)$, columns are

| Quantity | Dimension vector |
| --- | --- |
| $F$ | $(1,1,-2)$ |
| $ρ$ | $(1,-3,0)$ |
| $U$ | $(0,1,-1)$ |
| $L$ | $(0,1,0)$ |
| $μ$ | $(1,-1,-1)$ |

The matrix has rank three, so five variables give two Pi groups. Seek $Fρ^aU^bL^c$. Zero mass exponent requires $1+a=0$, so $a=-1$. Zero time exponent requires $-2-b=0$, so $b=-2$. Zero length exponent is $1-3a+b+c=0$, giving $1+3-2+c=0$ and $c=-2$. Hence

$π_1=F/(ρU²L²)$.

For viscosity, solve $μρ^aU^bL^c$: mass gives $1+a=0$; time gives $-1-b=0$; length gives $-1-3a+b+c=0$, hence $-1+3-1+c=0$ and $c=-1$. A group is

$π_2=μ/(ρUL)=\operatorname{Re}^{-1}$.

Therefore dimensional invariance permits $π_1=Φ(\operatorname{Re})$ after choosing reciprocal group. It neither determines $Φ$ nor shows that shape, compressibility, roughness, or boundaries are irrelevant. Their omission is a variable-selection hypothesis.

### Repeating-variable method and its trap

A common hand method selects $r$ dimensionally independent repeating variables and combines each remaining variable with powers of them. Repeating variables must span the dimension columns in use; otherwise the exponent equations fail or hide redundancy. They should not themselves form a dimensionless product, because then independence is lost.

The method is an algorithm for a null-space basis, not a different theorem. Computing $\operatorname{ker} D$ directly is safer when there are many variables or nonobvious dependencies.

## Dimensional homogeneity as a falsification tool

Dimensions constrain addition, functional arguments, and derivatives:

- the argument of $\exp$, $\log$, $\sin$, and $\cos$ must be dimensionless;
- $dx/dt$ has state-unit per time;
- an integral $∫f(t)dt$ gains a time dimension;
- covariance of $X,Y$ has product units, while correlation is dimensionless;
- a probability density has inverse units of its variable, while probability is dimensionless.

### Worked failure: an exponential decay

Writing $C(t)=C_0e^{-kt}$ requires $kt$ dimensionless, so $k$ has inverse-time units. If a fitted program accepts $t$ in days but $k$ per hour without conversion, its curve is dimensionally malformed even though the code runs.

### Worked failure: mixing variance and standard deviation

If return $R$ is dimensionless, both variance and squared mean are dimensionless algebraically. For a dimensional measurement such as temperature, variance has square-temperature units and cannot be added to a mean temperature. Standard deviation returns the original unit. Dimensional bookkeeping catches a frequent reporting error but cannot say whether variance is the right risk summary.

## Similarity as a testable statement

If a model reduces output to

$π_0=Φ(π_1,…,π_k)$,

experiments with equal control groups should have equal response group, within measurement and discrepancy. A **similarity experiment** changes raw scale while holding Pi groups fixed. This can validate a scale collapse more strongly than fitting one size.

### Worked geometric scaling

For geometrically similar animals with length scale $L$, volume and mass scale like $L³$ while cross-sectional area scales like $L²$. A stress caused by weight divided by area scales like $L$. This is a conditional similarity prediction. Real organisms alter shape and material with size, so geometric similarity is a hypothesis to test rather than a universal biological law.

### Partial similarity

Sometimes not all Pi groups can be matched experimentally, or a response follows a power law only in an asymptotic regime. State which groups are held fixed and which drift. A plotted collapse after tuning exponents on the same data is calibration evidence; validate on other scales.

## Choosing characteristic scales

For $dx/dt=f(x;θ)$, set $x=Xu$, $t=Tτ$. Good scales may come from initial data, equilibrium balance, geometry, forcing, or a desired order-one range. Choosing a scale to make parameters disappear can hide an important limiting regime if the scale itself degenerates.

### Worked decay-forcing model

Let

$dC/dt=J/V-kC$,

where concentration $C$ is mass/volume, source $J$ mass/time, volume $V$, and removal rate $k$ inverse time. Equilibrium scale is $C*=J/(kV)$ and time scale $1/k$. With $c=C/C*$, $τ=kt$,

$dc/dτ=1-c$.

All systems in this ideal family share the normalized solution $c(τ)=1+(c(0)-1)e^{-τ}$. The scale collapse is a testable implication: data from different conditions should align after justified rescaling.

### Several scales can be correct

For an oscillator $mx''+bx'+kx=F_0\cos(ωt)$, one may scale time by natural period $\sqrt{m/k}$, forcing period $1/ω$, or damping time $m/b$. Each highlights different dimensionless ratios:

$ζ=b/(2\sqrt{mk})$, $Ω=ω\sqrt{m/k}$, and a force-to-restoring scale.

No scale choice changes the dimensional solution set. A choice can, however, make one limiting regime visible. Scaling time by the forcing period alone may obscure a small natural damping ratio.

### Queue time scale

M/M/1 rates $λ,μ$ have inverse-time dimensions. Scaling time by $1/μ$ leaves utilization $ρ=λ/μ$. Dimensionless mean system time is

$μW=1/(1-ρ)$.

Systems with equal $ρ$ share the normalized mean but not minutes. At $λ=8,μ=10$, $W=0.5\,\mathrm{hour}$; doubling both rates gives $W=0.25\,\mathrm{hour}$ with unchanged load. This is why a utilization meter needs an absolute time scale beside it.

### Diffusion scale

For $u_t=κu_xx$ on length $L$, let $x=Lξ$ and $t=(L²/κ)τ$. Then $u_τ=u_ξξ$. The diffusion time grows as length squared. Doubling a geometrically similar distance makes the characteristic diffusion time four times larger. Boundaries and dimensionless geometry still matter.

## Dominant balance

Before expanding, compare term magnitudes after nondimensionalization. For

$εu''+u'+u=0$,

the balance can differ by region. In an outer region with $u$ varying on order-one length, derivatives are order one and $εu''$ may be small. In a layer of width $δ$, derivatives scale as $u'~1/δ$, $u''~1/δ²$; balancing $ε/δ²$ with $1/δ$ gives $δ~ε$. Scaling derives the layer rather than guessing it.

Dominant balance also identifies intermediate asymptotic regimes and possible power laws. Every discarded term needs an error or at least a regime statement.

## Regular and singular perturbations

A regular expansion $u=u_0+εu_1+…$ is useful when the solution depends smoothly on $ε$ over the requested domain. Remainder estimates matter. Secular terms such as $εt$ show that fixed-time accuracy may fail at $t≈1/ε$.

In a singular perturbation, the limiting problem changes type or order. For

$εy''+y'=0$, $y(0)=0$, $y(1)=1$,

setting $ε=0$ leaves a first-order equation and loses a boundary condition. The exact exponential mode changes rapidly on length scale $ε$. An inner coordinate $ξ=x/ε$ resolves that layer. The correct approximation may combine outer and inner solutions and subtract their common overlap.

### Regular expansion with a solved correction

Consider

$u'=-u+εu²$, $u(0)=a$,

on a fixed interval. Seek $u=u_0+εu_1+O(ε²)$. Matching powers gives

$u_0'=-u_0$, $u_0(0)=a$,

$u_1'=-u_1+u_0²$, $u_1(0)=0$.

Thus $u_0=ae^{-t}$. Multiplying the second equation by $e^t$ gives

$(e^tu_1)'=a²e^{-t}$,

so $u_1=a²(e^{-t}-e^{-2t})$. Therefore

\[u(t)=ae^{-t}+εa²(e^{-t}-e^{-2t})+O(ε²)\]

for a regime in which a uniform remainder can be bounded. Merely matching coefficients is a formal derivation; a theorem needs existence and remainder control.

### Secular failure and rescaled time

For a weakly perturbed oscillator, a naive correction can contain $εt \sin t$. It is small for fixed $t$ as $ε\to 0$ but order one when $t~1/ε$. Multiple-scale analysis introduces slow time $T=εt$ so amplitude or phase can evolve without an unbounded correction. The intended horizon is part of an asymptotic claim.

### Boundary-layer solution exactly

For $εy''+y'=0$, $y(0)=0,y(1)=1$, integrate to obtain

$y(x)=[1-e^{-x/ε}]/[1-e^{-1/ε}]$.

For fixed $x>0$, $y\to 1$; at $x=0$, $y=0$. Pointwise limit is discontinuous, so convergence cannot be uniform on $[0,1]$. With inner variable $ξ=x/ε$, leading inner solution is $1-e^{-ξ}$, matching outer solution 1 as $ξ\to ∞$. This complete case shows what “small term” really means.

## Sensitivity of dimensionless groups

For $\operatorname{Re}=ρUL/μ$, logarithmic differentiation gives

$dRe/\operatorname{Re}=dρ/ρ+dU/U+dL/L-dμ/μ$.

This is a first-order propagation formula, not a probability interval. Correlated uncertainties require covariance terms; large changes require nonlinear evaluation. It does show that one-percent relative errors enter with signed coefficients of magnitude one in this monomial.

## Turning a formal expansion into a uniform error statement

The regular perturbation calculation above can be checked against an exact solution without executing a numerical model. For nonzero initial value, substitute its reciprocal into the differential equation. The reciprocal then solves a linear equation, giving

$$
u(t)=\frac{ae^{-t}}{1-\epsilon a(1-e^{-t})}.
$$

The zero initial condition gives the identically zero solution separately. Suppose time is nonnegative and the dimensionless product $|\epsilon a|$ is at most one half. The denominator is then bounded away from zero for every such time, so the expression exists globally in the stated regime. Put $z=\epsilon a(1-e^{-t})$. The exact identity $1/(1-z)=1+z+z^2/(1-z)$ shows that the difference between the exact solution and the first two expansion terms has magnitude at most $2\epsilon^2|a|^3$. This is a uniform second-order remainder bound on the entire nonnegative time axis under the explicit parameter restriction.

The argument illustrates what coefficient matching did not prove by itself. We needed a solution formula, a denominator estimate, and a domain on which that estimate holds. For positive product exceeding one, the same denominator can vanish at finite time, so a blanket global expansion would be false. A small numerical parameter is not meaningful without the accompanying initial scale: it is the product appearing after nondimensionalisation that controls this example.

## Similarity can require changing more than size

Return to the drag model in the same fluid. If a geometrically similar model is made twice as large, matching Reynolds number requires its speed to be halved, because the product of speed and length must remain fixed. The force scale, density times speed squared times length squared, is then unchanged. Under the stated drag similarity relation, the two drag forces are equal despite their different lengths and speeds. A comparison at equal speed would instead double Reynolds number and would not isolate a pure geometric scaling law.

The associated advective time scale is length divided by speed. Under that matched experiment it grows by a factor of four. Thus matching one steady dimensionless force curve also changes the physical clock relevant to unsteady observations. If the experiment includes periodic forcing, its dimensionless frequency must be matched as well. If gravity or a free surface introduces another group, holding Reynolds number fixed may no longer suffice. This is why the variable list and geometry belong to the hypothesis of a similarity claim.

**Worked design question.** A small apparatus and a full-size apparatus have the same fluid, shape, and roughness ratio. Can one infer the full-size force by multiplying the small force by the square of the length ratio? Only after stating the speed relation and the regime. Equal speed keeps the dynamic-pressure scale fixed but changes Reynolds number; matched Reynolds number changes speed and can cancel the length factor. The dimensional derivation provides the admissible variables and groups. The constitutive response function and operating regime determine which numerical scaling follows.

## Positive quantities, zeros, and changing regimes

The logarithmic proof of the Pi count assumes positive numerical quantities. Signed velocities or zero forcing cannot simply be placed inside those logarithms. One may work on a region of fixed nonzero signs, retain signs as separate dimensionless data, or choose a different parametrisation. The theorem's linear dimensional bookkeeping remains useful, but the quotient-coordinate argument has a stated domain.

The same care applies when a chosen scale vanishes. Scaling concentration by a forcing-dependent equilibrium is convenient while the source is positive. At zero source, that scale is zero even though the original decay equation still makes sense. Use an initial concentration or another nonzero reference scale to study that limit. A singular coordinate choice should not be confused with a physical singularity. Conversely, removing a small dimensionless coefficient may truly change the equation's order, as the boundary-layer example demonstrates. Inspect both the scale map and the reduced equation before interpreting a limit.

## Exercises

<a id="answers"></a>

### Exercise 1
<a id="dimensions-scales-similarity-ex-1"></a>

Derive dimensionless groups for wave speed $c$ depending on string tension $F$ and linear mass density $m_l$.

<details>
<summary>Hint 1</summary>

Write the dimensions of speed, tension and mass per unit length.

</details>
<details>
<summary>Hint 2</summary>

Solve for exponents that make a dimensionless monomial rather than guessing an additive formula.

</details>
<details>
<summary>Full solution</summary>

Dimensions force $c=C \sqrt{F/m_l}$, with a dimensionless constant fixed by the wave equation.

</details>

### Exercise 2
<a id="dimensions-scales-similarity-ex-2"></a>

Nondimensionalize $m x''+b x'+kx=0$ using natural time $\sqrt{m/k}$ and identify the damping group.

<details>
<summary>Hint 1</summary>

Substitute a dimensionless time variable in both derivatives.

</details>
<details>
<summary>Hint 2</summary>

Divide through by the coefficient of the second derivative and inspect the remaining ratios.

</details>
<details>
<summary>Full solution</summary>

With $τ=t \sqrt{k/m}$, the equation is $x_{ττ}+2ζx_τ+x=0$, where $2ζ=b/\sqrt{mk}$.

</details>

### Exercise 3
<a id="dimensions-scales-similarity-ex-3"></a>

Explain why deleting $εy''$ in the boundary-value problem can fail even though $ε$ is small.

<details>
<summary>Hint 1</summary>

Count boundary conditions before and after deleting the highest derivative.

</details>
<details>
<summary>Hint 2</summary>

A small coefficient can still multiply the term needed to satisfy a boundary condition.

</details>
<details>
<summary>Full solution</summary>

The reduced equation loses order and cannot generally satisfy both boundary conditions. In a layer of width $O(ε)$, $y'=O(ε^{-1})$ and $y''=O(ε^{-2})$, so $εy''$ is the same order as $y'$ and cannot be discarded.

</details>

### Exercise 4
<a id="dimensions-scales-similarity-ex-4"></a>

Build the dimension matrix for period $T_p$, length $l$, gravity $g$, and mass $m$; compute its nullity and a basis group.

<details>
<summary>Hint 1</summary>

Use length, time and mass as the three base dimensions.

</details>
<details>
<summary>Hint 2</summary>

Place one dimension vector in each column and solve the homogeneous exponent equations.

</details>
<details>
<summary>Full solution</summary>

With base dimensions $(M,L,T)$, columns are $T_p:(0,0,1)$, $l:(0,1,0)$, $g:(0,1,-2)$, $m:(1,0,0)$. Rank is three, nullity one, and a group is $T_p \sqrt{g/l}$.

</details>

### Exercise 5
<a id="dimensions-scales-similarity-ex-5"></a>

A diffusion coefficient has units length squared/time. Nondimensionalize $u_t=κu_xx$ on $0<x<L$ and derive the characteristic time.

<details>
<summary>Hint 1</summary>

Set x=L times a dimensionless coordinate and t equal to an unknown scale times a dimensionless time.

</details>
<details>
<summary>Hint 2</summary>

Choose the time scale so the diffusion coefficient becomes one.

</details>
<details>
<summary>Full solution</summary>

Put $x=Lξ$, $t=(L²/κ)τ$. Both sides gain factor $κ/L²$, leaving $u_τ=u_ξξ$; characteristic diffusion time is $L²/κ$.

</details>

### Exercise 6
<a id="dimensions-scales-similarity-ex-6"></a>

Two queues have rates $(4,5)$ and $(40,50)$ per hour. Compare utilization, normalized mean $μW$, and absolute mean time.

<details>
<summary>Hint 1</summary>

Compute utilisation before computing the system time.

</details>
<details>
<summary>Hint 2</summary>

Common rate scaling preserves utilisation but changes the clock unit of waiting.

</details>
<details>
<summary>Full solution</summary>

Both have $ρ=0.8$ and $μW=1/(1-ρ)=5$. Absolute times are $1/(5-4)=1\,\mathrm{hour}$ and $1/(50-40)=0.1\,\mathrm{hour}$. Similarity preserves normalized behavior, not the unit scale.

</details>

### Exercise 7
<a id="dimensions-scales-similarity-ex-7"></a>

Show that an exponential $\exp\left(-at²\right)$ requires $a$ to have inverse-time-squared units.

<details>
<summary>Hint 1</summary>

The argument of an exponential must be dimensionless.

</details>
<details>
<summary>Hint 2</summary>

Include both powers of time in the dimension equation for a.

</details>
<details>
<summary>Full solution</summary>

The exponent must be dimensionless, so $[a][t]²=1$ and $[a]=T^{-2}$.

</details>

### Exercise 8
<a id="dimensions-scales-similarity-ex-8"></a>

For the drag variables, verify both $F/(ρU²L²)$ and $ρUL/μ$ are dimensionless.

<details>
<summary>Hint 1</summary>

Expand density, speed, viscosity and force in mass-length-time units.

</details>
<details>
<summary>Hint 2</summary>

Cancel dimensions separately in the numerator and denominator of each proposed group.

</details>
<details>
<summary>Full solution</summary>

Substituting dimensions cancels mass, length, and time exponents in each expression. Their independence corresponds to force response and viscous-to-inertial control.

</details>

### Exercise 9
<a id="dimensions-scales-similarity-ex-9"></a>

Solve the inner leading equation for the boundary layer and match it to the outer solution.

<details>
<summary>Hint 1</summary>

Introduce the stretched boundary coordinate used in the chapter.

</details>
<details>
<summary>Hint 2</summary>

The matching constant is fixed by the outer limit, not by a second independent inner boundary condition.

</details>
<details>
<summary>Full solution</summary>

With $ξ=x/ε$, leading equation is $Y_ξξ+Y_ξ=0$. Conditions $Y(0)=0$ and matching $Y\to 1$ give $Y=1-e^{-ξ}$.

</details>

### Exercise 10
<a id="dimensions-scales-similarity-ex-10"></a>

Explain why a data collapse obtained after selecting exponents on the same observations is not final validation.

<details>
<summary>Hint 1</summary>

Distinguish choosing exponents from evaluating an already chosen representation.

</details>
<details>
<summary>Hint 2</summary>

Reuse of the fitting observations cannot measure new-data prediction error independently.

</details>
<details>
<summary>Full solution</summary>

Tuning exponents uses the data twice and can manufacture visual alignment. Freeze variables and exponents, then test other scales and inspect residual patterns and omitted dimensionless groups.

</details>

### Exercise 11
<a id="dimensions-scales-similarity-ex-11"></a>

Log-differentiate $Q=\sqrt{2KD/h}$ and identify each elasticity.

<details>
<summary>Hint 1</summary>

Take logarithms before differentiating.

</details>
<details>
<summary>Hint 2</summary>

Each logarithmic derivative holds the other named quantities fixed.

</details>
<details>
<summary>Full solution</summary>

$dQ/Q=(1/2)dK/K+(1/2)dD/D-(1/2)dh/h$; elasticities are one-half, one-half, and minus one-half.

</details>

### Exercise 12
<a id="dimensions-scales-similarity-ex-12"></a>

Give a physical example where using an equilibrium scale fails because the equilibrium is zero or does not exist.

<details>
<summary>Hint 1</summary>

Consider a conservation model with steady state zero or continual linear growth.

</details>
<details>
<summary>Hint 2</summary>

An equilibrium-based denominator must exist and be nonzero before it defines a scale.

</details>
<details>
<summary>Full solution</summary>

For pure decay $x'=-kx$, the only equilibrium is zero, unusable as a divisor. Use initial magnitude, detection scale, or another reference and state how conclusions depend on it.

</details>

## Lab connection

Use the queue mode of the [Decision Systems Laboratory](../../apps/atlas/index.html#/labs?lab=visual-lab-decision-systems) to compare systems with equal utilization but different time scales. The dimensionless load is shared; absolute waiting times are not.

## Summary

Dimensionless groups encode invariance under unit changes; they do not determine an empirical law. Dominant balances and perturbations require a regime and a uniformity argument. Uncertainty now asks how evidence supports values inside those regimes.
