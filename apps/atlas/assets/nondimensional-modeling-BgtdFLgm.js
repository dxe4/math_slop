var e=`---
id: recipe-nondimensional-modeling
title: "Nondimensionalize a Model Before You Compute"
license: CC BY-SA 4.0
---

# Recipe: Nondimensionalize a Model Before You Compute

**Before reading.** Read [Models and Direction Fields](/resources/library:book-ode-first-course:models-direction-fields/), [Functions, Domains, and Graphs](/resources/library:book-algebra-and-functions:functions-domain-graphs/).

Nondimensionalization replaces measured variables by ratios to meaningful reference scales. It checks units, reduces parameters, reveals competing mechanisms, and often improves numerical conditioning. Use this recipe after writing a mechanistic model and before estimating parameters or choosing a solver.

## Inputs and output

Inputs are equations, units for every quantity, a target regime, and plausible scales. The output is:

- dimensionless variables and parameters;
- a reduced equation;
- interpretations of important parameter limits;
- a record of the scales used to translate predictions back to physical units.

## Step 1 — Make a dimension table

Choose base dimensions such as mass $M$, length $L$, time $T$, temperature $\\Theta$, and amount $N$. Record dimensions, not merely display units.

For a mass–spring–damper system

$m x_double_dot + c x_dot + kx = F_0 \\cos(\\omega t)$,

the dimensions are

\`\`\`text
[x]=L       [t]=T       [m]=M
[c]=M/T     [k]=M/T^2   [F_0]=ML/T^2   [omega]=1/T.
\`\`\`

Every additive term has dimension $ML/T^2$. If it does not, stop: scaling cannot repair an inconsistent model.

## Step 2 — Choose scales from mechanisms

Write each dimensional variable as a scale times a dimensionless variable:

$x=X u$, and $t=T_0 tau$.

Then $x_dot=(X/T_0)u'$ and $x_double_dot=(X/T_0^2)u''$, where primes now mean derivatives with respect to $tau$.

Good scales make important terms comparable. For the oscillator, balance inertia $mX/T_0^2$ with stiffness $kX$, giving the natural time

$T_0=\\sqrt{m/k}$.

For forcing, choose static displacement $X=F_0/k$. Substitution and division by $kX$ give

$u'' + (c/\\sqrt{mk})u' + u = \\cos(Omega tau)$,

where $Omega=\\omega \\sqrt{m/k}$. Writing $2 zeta=c/\\sqrt{mk}$ yields

$u''+2 zeta u'+u=\\cos(Omega tau)$.

Five dimensional parameters $(m,c,k,F_0,\\omega)$ have become two dimensionless controls $(zeta,Omega)$. $\\zeta$ compares damping with inertial–elastic response; $\\Omega$ compares forcing frequency with natural frequency.

## Step 3 — If no obvious balance exists, use exponent vectors

The Buckingham Pi theorem says that if a dimensionally homogeneous problem uses $n$ dimensional quantities spanning $r$ independent base dimensions, it can be described using $n-r$ independent dimensionless groups.

To construct them, represent each quantity by its exponent vector in the base dimensions and solve for products whose total exponent is zero. For example, a period $P$ depending only on pendulum length $ell$ and gravity $g$ has dimensions

$[P]=T$, $[ell]=L$, $[g]=LT^-2$.

Seek $P ell^a g^b$. Zero length exponent gives $a+b=0$; zero time exponent gives $1-2b=0$. Thus $b=1/2$, $a=-1/2$, and

$Pi=P \\sqrt{g/ell}$.

Dimensional reasoning concludes $P=C \\sqrt{ell/g}$. It cannot determine the dimensionless constant $C$ or amplitude dependence; dynamics supplies those.

## Step 4 — Read dimensionless parameters as ratios

Never leave a parameter as an unexplained symbol. Ask which effects it compares.

- Reynolds number compares inertial with viscous fluid effects.
- Peclet number compares transport by advection with diffusion.
- A condition number compares relative output sensitivity with relative input change.
- In the oscillator, $\\Omega \\approx 1$ identifies resonance as a competition of time scales.

A ratio much smaller than one suggests a perturbation, but dropping its term must be tested. A small coefficient multiplying the highest derivative can create boundary layers where that derivative becomes large.

## Step 5 — Work a complete population model

### Worked example: an SIR time and population scale

For an SIR epidemic model,

$S_dot=-\\beta SI$,

$I_dot=\\beta SI-\\gamma I$,

$R_dot=\\gamma I$,

where $S,I,R$ count people, total population is $N$, $\\beta$ has units $1/(person*time)$, and $\\gamma$ has units $1/time$.

Scale population by $N$ and time by the infectious duration $1/\\gamma$:

$s=S/N$, $i=I/N$, $r=R/N$, and $tau=\\gamma t$.

Since $S_dot=N \\gamma s'$, substitution gives

$s'=-R_0 si$,

$i'=R_0 si-i$,

$r'=i$,

with the single dimensionless group

$R_0=\\beta N/\\gamma$.

At the start, if $s \\approx 1$, then $i' approximately (R_0-1)i$. Infection initially grows when $R_0>1$ and declines when $R_0<1$. The threshold is visible without solving the nonlinear system.

This conclusion inherits strong assumptions: homogeneous mixing, fixed parameters, closed population, and exponentially distributed infectious duration. $R_0$ is a model-specific ratio, not a permanent biological constant.

## Step 6 — Use dimensionless computation

\`\`\`text
nondimensionalize(model):
    verify dimensions of every equation
    choose reference scales from balances or observed ranges
    substitute dimensional_variable = scale * dimensionless_variable
    divide each equation by one reference term
    collect independent dimensionless groups
    simulate across groups, not arbitrary raw parameter tuples
    restore units and compare with observations
\`\`\`

Dimensionless variables near order one reduce the chance that a numerical solver mixes quantities like $10^-9$ and $10^12$. This helps conditioning but does not cure a mathematically ill-conditioned inverse problem.

## Step 7 — Audit limits and translation back

For each dimensionless group $\\varepsilon$, examine $\\varepsilon -> 0$, $\\varepsilon -> infinity$, and values near one. Compare the reduced model against the original in representative regimes. Finally restore dimensions; reporting $tau=3$ without saying that $t=3/\\gamma$ is incomplete.

## Failure modes

- Choosing scales from convenient units rather than mechanisms can hide the dominant balance.
- Dimensionally valid formulas may still be physically false.
- Dependent Pi groups create redundant parameter sweeps.
- A parameter small globally may matter in a short initial transient or thin spatial layer.
- Data-dependent scales can leak information across training and test sets.
- Setting a scale to zero or using an uncertain reference value can make the transformation unstable.

## Worked example: interpret the scale as well as the parameter

Suppose a positive initial population is 1,000, the removal rate is
$\\gamma=1/4$ per day, and $\\beta N=1/2$ per day. The time scale is four
days, so dimensionless time $\\tau=3$ means physical time 12 days, not three
days. The ratio $R_0=2$ means that at a fully susceptible start the transmission
term is twice the removal term. If the susceptible fraction is instead
$s=0.4$, the dimensionless infected growth rate is
$i'=i(2\\cdot0.4-1)=-0.2i$. The sign is negative despite $R_0>1$.
The exact instantaneous criterion is $R_0s>1$ for positive $i$; the simpler
threshold $R_0>1$ assumes $s$ is initially close to one.

The scale choices need hypotheses. The oscillator time scale requires $m,k>0$.
The displacement scale $F_0/k$ requires nonzero forcing amplitude; for an
unforced oscillator choose a nonzero initial displacement or another reference
length instead. Likewise the population fraction scale needs $N>0$, and
$\\tau=\\gamma t$ needs $\\gamma>0$. A zero value does not invalidate every
possible model, but it can invalidate this coordinate transformation. Record
these conditions before dividing so that a limiting case is not silently
removed from the original question.

## Exercises with hints and complete solutions

### Exercise 1
<a id="nondimensional-modeling-ex-1"></a>

Show that $c/\\sqrt{mk}$ is dimensionless for the oscillator.

<details><summary>Hint 1</summary>

Write the dimensions of both factors inside the square root.

</details>
<details><summary>Hint 2</summary>

The damping coefficient has dimension mass divided by time.

</details>
<details><summary>Solution</summary>

Since $[m]=M$ and $[k]=M/T^2$, their product has dimension $M^2/T^2$.
Its square root has dimension $M/T$, the same as $[c]$. Their ratio has
dimension one. This establishes dimensional validity, not a numerical value.

</details>

### Exercise 2
<a id="nondimensional-modeling-ex-2"></a>

For diffusion $u_t=D u_{xx}$ on length scale $L$, find the natural time scale.

<details><summary>Hint 1</summary>

Substitute $u=Uv$, $x=L\\xi$ and $t=T_0\\tau$.

</details>
<details><summary>Hint 2</summary>

Balance $U/T_0$ with $DU/L^2$.

</details>
<details><summary>Solution</summary>

The chain rule gives $(U/T_0)v_\\tau=(DU/L^2)v_{\\xi\\xi}$.
For positive $D,L,U$, choose $T_0=L^2/D$ and divide by $U/T_0$ to get
$v_\\tau=v_{\\xi\\xi}$. A domain twice as large has a diffusion time scale
four times as large, holding the diffusion coefficient fixed.

</details>

### Exercise 3
<a id="nondimensional-modeling-ex-3"></a>

In the dimensionless SIR model, when does infection stop increasing?

<details><summary>Hint 1</summary>

Factor the right-hand side of the infected equation.

</details>
<details><summary>Hint 2</summary>

Distinguish positive infection from the solution $i=0$.

</details>
<details><summary>Solution</summary>

For $i>0$, the derivative $i'=i(R_0s-1)$ is positive when $R_0s>1$,
zero when $R_0s=1$ and negative when $R_0s<1$. If $R_0>0$ and a growing
trajectory crosses that threshold, its peak occurs at $s=1/R_0$. It may
already be declining at the start, so every trajectory need not have an
interior peak. At $i=0$ the derivative is zero regardless of $s$.

</details>

### Exercise 4
<a id="nondimensional-modeling-ex-4"></a>

Why can dimensional analysis not recover the pendulum constant $2\\pi$?

<details><summary>Hint 1</summary>

Multiplying by any pure number preserves dimensions.

</details>
<details><summary>Hint 2</summary>

The pendulum's angular amplitude is itself dimensionless.

</details>
<details><summary>Solution</summary>

Dimensions force the form $P=\\sqrt{\\ell/g}$ times a dimensionless factor,
but cannot determine that factor. The small-angle equation of motion produces
$2\\pi$; finite amplitude can change it. Dimensional reasoning alone neither
selects the constant nor proves that amplitude effects can be ignored.

</details>

### Exercise 5
<a id="nondimensional-modeling-ex-5"></a>

For $m=4$, $k=100$ and forcing frequency $\\omega=10$ in consistent units,
compute $T_0$ and $\\Omega$.

<details><summary>Hint 1</summary>

Use $T_0=\\sqrt{m/k}$.

</details>
<details><summary>Hint 2</summary>

Multiply angular frequency by the time scale to obtain the dimensionless frequency.

</details>
<details><summary>Solution</summary>

The time scale is $\\sqrt{4/100}=0.2$ time units. Thus
$\\Omega=\\omega T_0=10\\cdot0.2=2$, a dimensionless number. The forcing
angular frequency is twice the natural angular frequency $1/T_0=5$.

</details>

## Connections

Pair this recipe with **mathematical modeling** to choose mechanisms, **scaling and perturbation** to justify approximations, **ode numerics** to simulate dimensionless systems, **fluid mechanics** for famous competing-effect ratios, and **inverse problems** to understand which parameter groups observations can identify.
`;export{e as default};